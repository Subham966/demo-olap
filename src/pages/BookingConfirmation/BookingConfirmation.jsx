import { COLORS } from "@/theme";
import { useTheme } from "@emotion/react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useSelector } from "react-redux";
import ArrowIcon from "@/assets/arrowIcon.svg?react";
import { HandleSendUploadReferralLink } from "@/api/sendUploadReferralLink/HandleSendUploadReferralLink.api";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import {
  ContainerDesktop,
  FieldContainerDesktop,
  FieldTextDesktop,
  FieldTitleDesktop,
  GuidelinetextDesktop,
  PreprationGuidelineHeadingDesktop,
} from "./BookingConfirmation.desktop.style";
import {
  ContainerMobile,
  FieldContainerMobile,
  FieldTextMobile,
  FieldTitleMobile,
  GuidelinetextMobile,
  PreprationGuidelineHeadingMobile,
} from "./BookingConfirmation.mobile.style";
import useHelpText from "@/hooks/useHelpText";
const BookingConfirmation = ({ provisional }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const curr = useSelector((state) => state.chatDetails);
  const [isLoading, setIsLoading] = useState(false);
  const centerDetails = useSelector((state) => state.centerDetails);
  let selectedLocation = `${curr?.selectedCenterAddress || centerDetails?.center_address || ""}`;
  const { screenHeight } = useSelector((state) => state.screenSize);
  let slot_date = moment(curr.confirmedSlot, "YYYY-MM-DD HH:mm:ss").format(
    "DD MMMM, YYYY"
  );
  let slot_time = moment(curr.confirmedSlot, "YYYY-MM-DD HH:mm:ss").format(
    "h:mm a"
  );
  const capitalizeFirstLetter = (str) => {
    if (!str) return ""; // Return an empty string if input is falsy
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const splitGuidelines = (inputString) => {
    let cleanedInput = inputString
      ?.replace("Guidelines for upcoming appointment:", "")
      ?.trim();
    // Split by '*' and process each guideline
    let guidelinesArray = cleanedInput
      ?.split("*")
      ?.map((item) => item.trim())
      ?.filter((item) => item.length > 0);

    return guidelinesArray;
  };

  const onRequestReferralLink = async () => {
    setIsLoading(true);
    await HandleSendUploadReferralLink({
      conversation_id: curr?.conversationId,
    });
    setIsLoading(false);
  };

  const [preparationGuidelines, setPreparationGuidelines] = useState(
    splitGuidelines(curr?.preparationGuidelines)
  );
  const WorkingDays = useHelpText()
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const GuidelinetextWrapper = isMobile
    ? GuidelinetextMobile
    : GuidelinetextDesktop;
  const PreprationGuidelineHeadingWrapper = isMobile
    ? PreprationGuidelineHeadingMobile
    : PreprationGuidelineHeadingDesktop;

  return (
    <ContainerWrapper>
      <Stack
        gap="20px"
        sx={{
          mt: !isMobile ? 3 : 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Stack
          marginBottom={isMobile ? "7%" : "5%"}
          gap="15px"
        >
          <PatientData
            field_name={"Patient Name"}
            field_data={`${curr.firstName?.toUpperCase()} ${curr.lastName?.toUpperCase()}`}
            isMobile={isMobile}
          />
          <PatientData
            field_name={"Date of Birth"}
            field_data={curr.date_of_birth}
            isMobile={isMobile}
          />
          <PatientData
            field_name={"Scan Details"}
            field_data={`${curr?.useServiceRequestUtterance}`}
            isMobile={isMobile}
          />
          {selectedLocation && (
            <PatientData
              field_name={"Centre Address"}
              field_data={`${selectedLocation}`}
              isMobile={isMobile}
            />
          )}
          {!provisional && curr.confirmedSlot && (
            <PatientData
              field_name={"Slot Details"}
              field_data={`${slot_date}, ${slot_time}`}
              isMobile={isMobile}
            />
          )}
        </Stack>
      </Stack>

      <Stack
        marginTop={
          screenHeight < 920 ? (screenHeight < 600 ? "2%" : "5%") : "5%"
        }
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& svg path": {
            fill: "black",
          },
          mt: isMobile && "10px !important",
          width: "100%",
          margin: "auto",
        }}
      >
        {!provisional && (
          <PreprationGuidelineHeadingWrapper
            color={theme.palette.primary.activeButton}
          >
            {provisional
              ? "Additional Information"
              : "Preparation Guidelines"}
          </PreprationGuidelineHeadingWrapper>
        )}
        <Stack
          sx={{
            backgroundColor: COLORS.GREY_3,
            borderRadius: "5px",
            width: isMobile ? "100%" : "90%",
            paddingY: "10px",
            marginTop:
              screenHeight < 900 ? "10px" : provisional ? "30px" : "20px",
            overflow: "auto",
            maxHeight: isMobile
              ? "auto"
              : screenHeight < 900
                ? "200px"
                : "220px"
          }}
        >
          <List
            sx={{
              fontSize: "18px",
              fontFamily: "Inter Variable",
              maxWidth: isMobile ? "98%" : "100%",
            }}
          >
            {provisional && (
              <GuidelinetextWrapper
                style={{
                  marginLeft: "15px",
                  marginBottom: "5px",
                  fontWeight: "600",
                }}
              >
                {" "}
                Notes:
              </GuidelinetextWrapper>
            )}
            {provisional && (
              <GuidelinetextWrapper
                style={{
                  marginLeft: "15px",
                  lineHeight: "30px",
                  display: "block",
                }}
              >
                If you do not receive a call within next 24 business hours,
                please contact us on {centerDetails?.public_number}.<br />
                Our business hours are: {WorkingDays}.
              </GuidelinetextWrapper>
            )}
            {!provisional &&
              preparationGuidelines?.map((Guideline_text) => {
                return (
                  <ListItem sx={isMobile ? { padding: "3px 10px" } : {}}>
                    <ListItemText>
                      <Stack display={"inline"}>
                        <ArrowIcon
                          style={{
                            fill: "black",
                            width: isMobile ? "10px" : "12px",
                            height: isMobile ? "10px" : "12px",
                          }}
                        />{" "}
                        <GuidelinetextWrapper>
                          {" "}
                          {Guideline_text}
                        </GuidelinetextWrapper>
                      </Stack>
                    </ListItemText>
                  </ListItem>
                );
              })}
            {!provisional &&
              (preparationGuidelines?.length == 0 ||
                !preparationGuidelines) && (
                <ListItem sx={isMobile ? { padding: "3px 10px" } : {}}>
                  <ListItemText>
                    <Stack display={"inline"}>
                      <ArrowIcon
                        style={{
                          fill: "black",
                          width: isMobile ? "10px" : "12px",
                          height: isMobile ? "10px" : "12px",
                        }}
                      />{" "}
                      <GuidelinetextWrapper
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        {" "}
                        {
                          "No preparation is required for the requested scan."
                        }
                      </GuidelinetextWrapper>
                    </Stack>
                  </ListItemText>
                </ListItem>
              )}
          </List>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
};

const PatientData = ({ field_name, field_data, isMobile }) => {
  const FieldContainerWrapper = isMobile
    ? FieldContainerMobile
    : FieldContainerDesktop;
  const FieldTextWrapper = isMobile ? FieldTextMobile : FieldTextDesktop;
  const FieldTitleWrapper = isMobile ? FieldTitleMobile : FieldTitleDesktop;
  return (
    <FieldContainerWrapper sx={{ gap: "10px" }}>
      <FieldTitleWrapper variant="body1" >{field_name}</FieldTitleWrapper>
      <FieldTextWrapper variant="body1"
        sx={
          !isMobile
          && {
            wordBreak: 'break-word',
            width: 'ch',
            maxWidth: '30ch',
            whiteSpace: 'normal',
          }
        }
      >{field_data} </FieldTextWrapper>
    </FieldContainerWrapper>
  );
};

export default BookingConfirmation;
