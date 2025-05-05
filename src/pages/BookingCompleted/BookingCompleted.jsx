import { Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { COLORS } from "@/theme";
import { useTheme } from "@emotion/react";
import BookingConfirmation from "../BookingConfirmation";
import { useSelector } from "react-redux";
import {
  BookingCompletedTextMobile,
  CheckCircleOutlineIconBoxMobile,
  ContainerMobile,
  IconBoxMobile,
} from "./BookingConfirmation.mobile.style";
import {
  BookingCompletedProvisionalSubheadingDesktop,
  BookingCompletedSubheadingDesktop,
  BookingCompletedTextDesktop,
  CheckCircleOutlineIconBoxDesktop,
  ContainerDesktop,
  IconBoxDesktop,
} from "./BookingConfirmation.desktop.style";
import { CustomCssButton } from "../EscalationErrorsPage/EscalationErrorsPage.style";
import { HelpTextHeading } from "@/components/ConversationTimeout/ConversationTimeoutError.style";
import { template } from "lodash";

function BookingCompleted() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  const BookingCompletedTextWrapper = isMobile
    ? BookingCompletedTextMobile
    : BookingCompletedTextDesktop;
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const IconBoxWrapper = isMobile ? IconBoxMobile : IconBoxDesktop;
  const CheckCircleOutlineIconBoxWrapper = isMobile ? CheckCircleOutlineIconBoxMobile : CheckCircleOutlineIconBoxDesktop
  const [PendingExamination, setPendingExamination] = useState(["CT"]);
  const { botState, conversationTags } = useSelector((state) => state.chatDetails);

  let provisional = (botState === "/booking-completed" && conversationTags.includes("PROVISIONAL_BOOKING"))
  return (
    <Stack width="100%" height="100%" alignItems="center">
      <ContainerWrapper
        direction="row"
        gap="10px"
        alignItems={!isMobile ? "end" : "center"}
      >
        {!provisional ? (
          <>
            <IconBoxWrapper sx={{
              "& svg path": {
                fill: "green",
              },
            }}>
              <CheckCircleOutlineIconBoxWrapper
                style={{
                  fill: "green"
                }}
              />
            </IconBoxWrapper>
            <BookingCompletedTextWrapper variant="h1">
              Booking Successfully Completed
            </BookingCompletedTextWrapper>
          </>
        ) : (
          <BookingCompletedTextWrapper variant="h1">
            {isMobile ? "One of our team members will call you to confirm your booking within 24 hours." : "We've received your appointment request"}
          </BookingCompletedTextWrapper>
        )}
      </ContainerWrapper>
      {!isMobile && !provisional && (
        <BookingCompletedSubheadingDesktop>
          Please go through the{" "}
          <span
            style={{
              color: theme.palette.primary.activeButton,
            }}
          >
            preparation guidelines
          </span>{" "}
          before you close.{" "}
        </BookingCompletedSubheadingDesktop>
      )}
      {!isMobile && provisional && (
        <BookingCompletedProvisionalSubheadingDesktop
          sx={{
            color: theme.palette.primary.activeButton,
            backgroundColor: "rgba(184, 204, 242, .2)",
            // width: "80%",
            // margin: "auto",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          One of our team members will call you to confirm your booking within
          24 hours.
        </BookingCompletedProvisionalSubheadingDesktop>
      )}
      <Stack
        width={"100%"}
        sx={{
          mt:
            !isMobile ? (!provisional ? 0.2 : 2) : 0,
        }}
      >
        <BookingConfirmation provisional={provisional} />
      </Stack>

      {/* {PendingExamination.length > 0 && !provisional && (
        <CustomCssButton sx={{ margin: "auto", mt: 4 }}>
          Proceed with {PendingExamination[0]} Booking
        </CustomCssButton>
      )} */}
    </Stack>
  );
}

export default BookingCompleted;
