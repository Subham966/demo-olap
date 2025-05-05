import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Olivia from "../../assets/Olivia.png";
import { useGetStaticData } from "@/api/staticData/HandleStaticData.api";
import { useAppDispatch } from "@/redux";
import { useTheme } from "@emotion/react";
import { Container } from "./Home.style";
import { useDispatch, useSelector } from "react-redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { AppRoutes } from "@/router";
import { screenSizeActions } from "@/redux/reducers/screenSize";
import {
  AvatarContainerMobile,
  AvatarMessageMobile,
  AvatarMessageTextMobile,
  ChatBotContainerMobile,
} from "./Home.mobile.style";
import {
  AvatarContainerDesktop,
  AvatarMessageDesktop,
  AvatarMessageTextDesktop,
  ChatBotContainerDesktop,
} from "./Home.desktop.style";
import { date } from "yup";
import { HandlePublishUiLogs } from "@/api/publishUiLogs/publishUiLogs";
import { stopBooking } from "@/api/stopBooking/stopBooking.api";
import { HandleBrowserTabClosed } from "@/api/browserTabClosed/HandleBrowserTabClosed";

const { setChatBotOpanStatus, setPopupScreen, setEreferralDetails } =
  chatDetailsActions;
const { setScreenWidth, setScreenHeight } = screenSizeActions;

function Home({ webbot_uid, referral_code }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { isChatbotOpen, eReferralWorkflow, conversationId } = useSelector(
    (state) => state.chatDetails
  );

  const {
    showNetworkErrorPopup,
    showApplicationErrorPopup,
    showTimeoutErrorPopup,
  } = useSelector((state) => state.errorDetails);
  const [currentPath, setCurrentPath] = useState("/");
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [isStaticDataApiPending, setStaticDataApiPending] = useState(false);
  const themeData = useSelector((state) => state.multiTheme); // Access theme data from Redux store
  const dispatch = useDispatch();
  const changeChatbotStatus = () => {
    useAppDispatch(setChatBotOpanStatus(!isChatbotOpen));
  };

  const handlePublishLogs = async (utterance) => {
    if (conversationId && currentPath != "/booking-completed") {
      console.log("Home.jsx:55 - Publishing the UI log in OI", {
        conversation_id: conversationId,
        utterance: utterance
      });
      await HandlePublishUiLogs({
        conversation_id: conversationId,
        utterance: utterance
      });
    }
  };

  const handlePublishBrowserTabClosedLogs = async (utterance) => {
    if (conversationId && currentPath != "/booking-completed") {
      console.log("Home.jsx:70 - Publishing the UI log in OI", {
        conversation_id: conversationId,
        utterance: utterance
      });
      await HandleBrowserTabClosed({
        conversation_id: conversationId,
        utterance: utterance
      });
    }
  };

  const useTabActivityLogger = () => {
    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          handlePublishLogs("Browser tab is inactive.");
        } else {
          handlePublishLogs("Browser tab is active.");
        }
      };

      const handleBeforeUnload = () => {
        handlePublishBrowserTabClosedLogs("Browser tab closed");
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, [conversationId, currentPath]);
  };
  useTabActivityLogger();

  useEffect(() => {
    if (showNetworkErrorPopup) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "NetworkError",
        })
      );
    } else if (showApplicationErrorPopup) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "ApplicationError",
        })
      );
    } else if (showTimeoutErrorPopup) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "TimeoutError",
        })
      );
    }
  }, [showNetworkErrorPopup, showApplicationErrorPopup, showTimeoutErrorPopup]);

  useEffect(() => {
    setStaticDataApiPending(true);
    useGetStaticData(webbot_uid);
    setStaticDataApiPending(false);
    if (referral_code) {
      dispatch(setEreferralDetails(referral_code));
    }
  }, [referral_code]);

  useEffect(() => {
    const handleResize = () => {
      useAppDispatch(setScreenWidth(window.innerWidth));
      useAppDispatch(setScreenHeight(window.innerHeight));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const emb = themeData?.apply_embedded_view == true ? true : false;
  const primaryBackgroundColor = "#FFFFFF";

  if (isStaticDataApiPending) {
    return;
  }

  const ChatBotContainerWrapper = isMobile
    ? ChatBotContainerMobile
    : ChatBotContainerDesktop;

  const AvatarContainerWrapper = isMobile
    ? AvatarContainerMobile
    : AvatarContainerDesktop;

  const AvatarMessageWrapper = isMobile
    ? AvatarMessageMobile
    : AvatarMessageDesktop;

  const AvatarMessageTextWrapper = isMobile
    ? AvatarMessageTextMobile
    : AvatarMessageTextDesktop;

  return (
    <>
      {(!isChatbotOpen || !isMobile) && !emb && (
        <Box>
          <AvatarContainerWrapper
            onClick={() => changeChatbotStatus()}
            src={
              themeData.homepage_icon
                ? `data:image/jpeg;base64,${themeData.homepage_icon}`
                : Olivia
            }
          />
          {!isChatbotOpen && (
            <AvatarMessageWrapper>
              <AvatarMessageTextWrapper>
                Ask Olivia for Appointment
              </AvatarMessageTextWrapper>
            </AvatarMessageWrapper>
          )}
        </Box>
      )}
      <Container emb={emb}>
        {(isChatbotOpen || emb) && !isHandleUtteranceApiPending && (
          <ChatBotContainerWrapper
            currentPath={currentPath}
            emb={emb}
            smallWidth={
              currentPath === "/" ||
              currentPath === "/upload-referral" ||
              currentPath === "/referral-form"
              // ||
              // currentPath === "/ereferral-confirm-dob" ||
              // currentPath === "/ereferral-review-details" ||
              // currentPath === "/ereferral-landing"
            }
            primaryBackgroundColor={primaryBackgroundColor}
            zIndex={100}
          >
            <AppRoutes
              setCurrentPath={setCurrentPath}
              eReferralWorkflow={eReferralWorkflow}
            />
          </ChatBotContainerWrapper>
        )}
      </Container>
    </>
  );
}

export default Home;
