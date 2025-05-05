import React from "react";
import { useSelector } from "react-redux";
import { CustomButton } from "@/elements/CustomButton";
import { Box, styled, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { NeedHelpBoxMobile } from "./NeedHelp.mobile.style";
import { NeedHelpBoxDesktop } from "./NeedHelp.desktop.style";
import ErrorMessage3 from "@/components/ErrorMessage3/ErrorMessage3";

const CustomCssButton = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.activeButton};
  // color: ${({ theme }) => theme.palette.text.activeButtonText};
  color: black !important;
  font-size: 16px;
  padding: 10px;
  width: 150px;
  @keyframes blink {
    0% {
      filter: brightness(100%);
    }
    50% {
      filter: brightness(75%);
    }
    100% {
      filter: brightness(100%);
    }
  }

  &:hover {
    animation: blink 0.7s;
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: ${({ theme }) =>
    `${theme.palette.text.activeButtonText} !important`};
    border: 0px !important;
  }

  @media (max-width: 450px) {
    height: 30px;
    width: 100px;
  }
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 12px !important;
    height: 30px;
    width: 130px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 13px !important;
    height: 30px;
    width: 140px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px !important;
    height: 30px;
    width: 150px;
  }
`;
function NeedHelp() {
  const centerDetails = useSelector((state) => state.centerDetails);
  const { resetPopupScreen } = chatDetailsActions;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const NeedHelpBoxWrapper = isMobile ? NeedHelpBoxMobile : NeedHelpBoxDesktop;
  return (
    <NeedHelpBoxWrapper>
      <ErrorMessage3
        eroorHeading={<>Need Help?</>}
        callusMessage={`Call us on`}
        contactNumber={centerDetails?.public_number}
        message={"Our business hours are:"}
        CloseButton={
          <CustomCssButton
            sx={{
              fontWeight: "600",
              lineHeight: "20px",
              width: isMobile ? "100px" : "8vw",
              margin: "auto",
              backgroundColor: theme.palette.text.activeButtonText,
              color: theme.palette.primary.activeButton,
              "&:hover": {
                color: theme.palette.text.activeButtonText,
                backgroundColor: theme.palette.primary.activeButton,
              },
            }}
            onClick={() => {
              useAppDispatch(resetPopupScreen());
            }}
          >
            Close
          </CustomCssButton>
        }
      />
    </NeedHelpBoxWrapper>
  );
}

export default NeedHelp;
