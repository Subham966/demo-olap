import { useTheme } from "@emotion/react";
import { Box, Stack, TextField, alpha, useMediaQuery } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  ButtonOptionsContainerMobile,
  ChildContainerMobile,
  ContainerMobile,
  CustomConfirmButtonMobile,
  EditSlotTextMobile,
  HeadingLabelTextMobile,
  HeadingTextMobile,
  InformationTextMobile,
  StyledTableFieldDataMobile,
  StyledTableFieldLastNameMobile,
  StyledTableFieldNameMobile,
  StyledTableMobile,
  StyledTableNameDataMobile,
  StyledTableRowMobile,
  SubHeadingTextMobile,
  TableContainerMobile,
} from "./DetailsConfirmation.mobile.style";
import {
  ButtonOptionsContainerDesktop,
  ChildContainerDesktop,
  ContainerDesktop,
  CustomConfirmButtonDesktop,
  EditSlotTextDesktop,
  HeadingLabelTextDesktop,
  HeadingTextDesktop,
  InformationTextDesktop,
  StyledTableDesktop,
  StyledTableFieldDataDesktop,
  StyledTableFieldLastNameDesktop,
  StyledTableFieldNameDesktop,
  StyledTableNameDataDesktop,
  StyledTableRowDesktop,
  SubHeadingTextDesktop,
  TableContainerDesktop,
} from "./DetailsConfirmation.desktop.style";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { useStartBooking } from "@/api/startBooking/StartBooking.api";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
const { setErrorMessage, resetEreferralDetails, setBookNewAppointmentPopup } =
  chatDetailsActions;
const DetailsConfirmation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const centerDetails = useSelector((state) => state.centerDetails);
  const navigate = useNavigate();
  const curr = useSelector((state) => state.chatDetails);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [isStartBookingApiPending, setIsStartBookingApiPending] =
    useState(false);
  const { requestedModality, isErrorPresent, errorMessage } = useSelector(
    (state) => state.chatDetails
  );
  let slot_date = moment(curr.confirmedSlot, "YYYY-MM-DD HH:mm:ss").format(
    "DD MMMM, YYYY h:mm a"
  );
  let dateOfBirth = moment(curr.date_of_birth, "YYYY-MM-DD").format(
    "DD MMMM, YYYY"
  );

  const ButtonOptionsContainerWrapper = isMobile
    ? ButtonOptionsContainerMobile
    : ButtonOptionsContainerDesktop;
  const ChildContainerWrapper = isMobile
    ? ChildContainerMobile
    : ChildContainerDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const SubHeadingTextWrapper = isMobile
    ? SubHeadingTextMobile
    : SubHeadingTextDesktop;
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const CustomConfirmButtonWrapper = isMobile
    ? CustomConfirmButtonMobile
    : CustomConfirmButtonDesktop;
  const EditSlotTextWrapper = isMobile
    ? EditSlotTextMobile
    : EditSlotTextDesktop;
  const InformationTextWrapper = isMobile
    ? InformationTextMobile
    : InformationTextDesktop;
  const StyledTableWrapper = isMobile ? StyledTableMobile : StyledTableDesktop;
  const StyledTableFieldDataWrapper = isMobile
    ? StyledTableFieldDataMobile
    : StyledTableFieldDataDesktop;
  const StyledTableFieldNameWrapper = isMobile
    ? StyledTableFieldNameMobile
    : StyledTableFieldNameDesktop;

  const StyledTableFieldLastNameWrapper = isMobile
    ? StyledTableFieldLastNameMobile
    : StyledTableFieldLastNameDesktop;
  const StyledTableNameDataWrapper = isMobile
    ? StyledTableNameDataMobile
    : StyledTableNameDataDesktop;
  const StyledTableRowWrapper = isMobile
    ? StyledTableRowMobile
    : StyledTableRowDesktop;
  const TableContainerWrapper = isMobile
    ? TableContainerMobile
    : TableContainerDesktop;
  const HeadingLabelTextWrapper = isMobile
    ? HeadingLabelTextMobile
    : HeadingLabelTextDesktop;

  const generateUUID = () => {
    const uuid = uuidv4();
    return uuid;
  };

  const handleStartBooking = async () => {
    const phoneNumber = "";
    const conversation_id = generateUUID();

    let data = {
      conversation_id: conversation_id,
      contact_number: phoneNumber.toString(),
      center_id: centerDetails.center_id,
    };

    const handleUtteranceCallBack = () => {
      navigate("/scanList");
    };

    const onSuccess = async () => {
      setIsHandleUtteranceApiPending(true);
      await useHandleUtterance(
        {
          conversation_id: conversation_id,
          utterance: "yes",
        },
        handleUtteranceCallBack
      );
      setIsHandleUtteranceApiPending(false);
    };

    setIsStartBookingApiPending(true);
    await useStartBooking(data, onSuccess);
    setIsStartBookingApiPending(false);
  };

  const confirmEreferralDetails = async () => {
    await handleStartBooking();
  };

  if (isStartBookingApiPending || isHandleUtteranceApiPending) {
    return <CustomLoader />;
  }

  return (
    <ContainerWrapper>
      <ChildContainerWrapper>
        {/* <HeadingTextWrapper
          variant="h1"
          sx={{
            textAlign: "center",
            color: theme.palette.primary.activeButton,
          }}
        >
          Book Your Scan
        </HeadingTextWrapper>
        <HeadingLabelTextWrapper
          variant="h2"
          sx={{
            textAlign: "center",
          }}
        >
          Great! We successfully gathered the details
        </HeadingLabelTextWrapper> */}
        <SubHeadingTextWrapper
          sx={{
            mt: !isMobile ? "50px" : 0,
            color: theme.palette.primary.activeButton,
            fontWeight: 550,
          }}
        >
          {isMobile ? (
            <span style={{ fontSize: "22px" }}>
              Please verify patient's details
            </span>
          ) : (
            "Please verify the details and confirm to proceed with slot selection"
          )}
        </SubHeadingTextWrapper>
        <TableContainerWrapper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "start" : "center",
          }}
        >
          <StyledTableWrapper
            cellSpacing={!isMobile ? "20px" : "5px"}
            width="90%"
          >
            {!isMobile && (
              <StyledTableRowWrapper>
                <StyledTableFieldNameWrapper>
                  First Name{" "}
                </StyledTableFieldNameWrapper>
                <StyledTableNameDataWrapper>
                  <Box>{curr.firstName}</Box>
                </StyledTableNameDataWrapper>
                <StyledTableFieldLastNameWrapper>
                  Last Name{" "}
                </StyledTableFieldLastNameWrapper>
                <StyledTableNameDataWrapper>
                  <Box>{curr.lastName}</Box>
                </StyledTableNameDataWrapper>
              </StyledTableRowWrapper>
            )}

            {isMobile && (
              <StyledTableRowWrapper sx={{ mt: 2 }}>
                <StyledTableFieldNameWrapper>
                  First Name{" "}
                </StyledTableFieldNameWrapper>
                <StyledTableFieldDataWrapper colSpan={3}>
                  {curr.firstName}
                </StyledTableFieldDataWrapper>
              </StyledTableRowWrapper>
            )}

            {isMobile && (
              <StyledTableRowWrapper>
                <StyledTableFieldNameWrapper>
                  Last Name
                </StyledTableFieldNameWrapper>
                <StyledTableFieldDataWrapper colSpan={3}>
                  {curr.lastName}
                </StyledTableFieldDataWrapper>
              </StyledTableRowWrapper>
            )}

            <StyledTableRowWrapper>
              <StyledTableFieldNameWrapper>
                Date of Birth
              </StyledTableFieldNameWrapper>
              <StyledTableFieldDataWrapper colSpan={3}>
                {dateOfBirth}
              </StyledTableFieldDataWrapper>
            </StyledTableRowWrapper>

            <StyledTableRowWrapper>
              <StyledTableFieldNameWrapper>
                Requested Scan
              </StyledTableFieldNameWrapper>
              <StyledTableFieldDataWrapper colSpan={3}>
                {requestedModality}
              </StyledTableFieldDataWrapper>
            </StyledTableRowWrapper>
          </StyledTableWrapper>
          <Stack sx={{ width: isMobile ? "90%" : "50%" }}>
            {isErrorPresent && (
              <Stack alignItems="left">
                <ErrorState errorMsg={errorMessage} isTextAlignCenter />
              </Stack>
            )}
            <ButtonOptionsContainerWrapper
              sx={{
                ml: isMobile ? 0 : 4,
                mt: 1,
                width: isMobile ? "100%" : "90%",
              }}
            >
              <CustomConfirmButtonWrapper
                onClick={async () => {
                  await confirmEreferralDetails();
                }}
                sx={{
                  width: "120px",
                  backgroundColor: theme.palette.primary.activeButton,
                  color: theme.palette.text.activeButtonText,
                  // fontSize: "16px",
                  "&:hover": {
                    color: theme.palette.text.activeButtonText,
                    border: `1px solid ${theme.palette.text.activeButtonText}`,
                    backgroundColor: theme.palette.primary.activeButton,
                  },
                }}
              >
                Confirm
              </CustomConfirmButtonWrapper>
              <CustomConfirmButtonWrapper
                onClick={async () => {
                  useAppDispatch(
                    setBookNewAppointmentPopup({
                      bookNewAppointmentPopup: true,
                    })
                  );
                }}
                sx={{
                  width: "60%",
                  backgroundColor: theme.palette.text.activeButtonText,
                  color: theme.palette.primary.activeButton,
                }}
              >
                Incorrect Details
              </CustomConfirmButtonWrapper>
            </ButtonOptionsContainerWrapper>
          </Stack>
        </TableContainerWrapper>
      </ChildContainerWrapper>
    </ContainerWrapper>
  );
};

export default DetailsConfirmation;
