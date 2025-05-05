import React from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import {
  ButtonOptionsContainerMobile,
  ChildContainerMobile,
  ContainerMobile,
  CustomCssButtonMobile,
  GreetingMessageContainerMobile,
  HeadingTextMobile,
  QuestionBoxMobile,
  QuestionTextMobile,
} from "./EreferralLandingPage.mobile.style";
import {
  ButtonOptionsContainerDesktop,
  ChildContainerDesktop,
  ContainerDesktop,
  CustomCssButtonDesktop,
  GreetingMessageContainerDesktop,
  HeadingTextDesktop,
  QuestionBoxDesktop,
  QuestionTextDesktop,
} from "./EreferralLandingPage.desktop.style";
import { useMediaQuery } from "@mui/material";

const EreferralLandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const ChildContainerWrapper = isMobile
    ? ChildContainerMobile
    : ChildContainerDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const QuestionTextWrapper = isMobile
    ? QuestionTextMobile
    : QuestionTextDesktop;
  const QuestionBoxWrapper = isMobile ? QuestionBoxMobile : QuestionBoxDesktop;
  const ButtonOptionsContainerWrapper = isMobile
    ? ButtonOptionsContainerMobile
    : ButtonOptionsContainerDesktop;
  const CustomCssButtonWrapper = isMobile
    ? CustomCssButtonMobile
    : CustomCssButtonDesktop;
  const GreetingMessageContainerWrapper = isMobile
    ? GreetingMessageContainerMobile
    : GreetingMessageContainerDesktop;
  return (
    <ContainerWrapper>
      <ChildContainerWrapper>
        <HeadingTextWrapper
          variant="h1"
          sx={{
            textAlign: "left",
            color: theme.palette.primary.activeButton,
            width: "80%",
            margin: "auto",
          }}
        >
          Hello, We have received the electronic copy of your referral from your
          GP
        </HeadingTextWrapper>
        <GreetingMessageContainerWrapper>
          <QuestionBoxWrapper>
            <QuestionTextWrapper variant="fontSize18">
              Would you like to book an appointment now?
            </QuestionTextWrapper>
            <ButtonOptionsContainerWrapper>
              <CustomCssButtonWrapper
                sx={{
                  fontWeight: "600",
                  lineHeight: "20px",
                  backgroundColor: theme.palette.text.activeButtonText,
                  color: theme.palette.primary.activeButton,
                  "&:hover": {
                    color: theme.palette.text.activeButtonText,
                    border: `1px solid ${theme.palette.text.activeButtonText}`,
                    backgroundColor: theme.palette.primary.activeButton,
                  },
                }}
                onClick={() => {
                  navigate("/ereferral-confirm-dob");
                }}
              >
                Yes
              </CustomCssButtonWrapper>
              <CustomCssButtonWrapper
                sx={{
                  fontWeight: "600",
                  lineHeight: "20px",
                  backgroundColor: theme.palette.text.activeButtonText,
                  color: theme.palette.primary.activeButton,
                  "&:hover": {
                    color: theme.palette.text.activeButtonText,
                    border: `1px solid ${theme.palette.text.activeButtonText}`,
                    backgroundColor: theme.palette.primary.activeButton,
                  },
                }}
                onClick={() => {
                  console.log("noo");
                }}
              >
                No
              </CustomCssButtonWrapper>
            </ButtonOptionsContainerWrapper>
          </QuestionBoxWrapper>
        </GreetingMessageContainerWrapper>
      </ChildContainerWrapper>
    </ContainerWrapper>
  );
};

export default EreferralLandingPage;
