import React from "react";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { CustomButton } from "@/elements/CustomButton";
import { Box, styled, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ContainerMobile } from "./ProvisionalBooking.mobile.style";
import { ContainerDesktop } from "./ProvisionalBooking.desktop.style";

const CustomCssButton = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.activeButton};
  color: ${({ theme }) => theme.palette.text.activeButtonText};
  font-size: 16px;
  padding: 10px;
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
    color: ${({ theme }) => theme.palette.text.activeButtonText};
  }

  @media (max-width: 450px) {
    height: 30px;
    width: 100px;
    margin-top: 20px;
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 12px !important;
    height: 30px;
    width: 140px;
    margin-top: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 13px !important;
    width: 160px;
    margin-top: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px !important;
    height: 40px;
    width: 200px;
    margin-top: 20px;
  }
`;

function ProvisionalBooking() {
  const { resetPopupScreen } = chatDetailsActions;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  return (
    <ContainerWrapper>
      <ErrorMessage
        eroorHeading={
          "We have taken your appointment request. Our staff shall contact you to confirm the booking."
        }
        message={``}
        businessHoursMessage={"Our business hours :"}
        CloseButton={
          <CustomCssButton
            sx={{
              fontWeight: "600",
              lineHeight: "20px",
              width: isMobile ? "100px" : "8vw",
              margin: "auto",
              marginTop: "20px",
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
    </ContainerWrapper>
  );
}

export default ProvisionalBooking;
