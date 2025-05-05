import { useTheme } from "@emotion/react";
import { Box, Stack, TextField, alpha, useMediaQuery } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ChildContainerMobile,
  ContainerMobile,
  CustomConfirmButtonMobile,
  EditSlotTextMobile,
  HeadingTextMobile,
  InformationTextMobile,
  SlotTimeTextMobile,
  StyledTableFieldDataMobile,
  StyledTableFieldNameMobile,
  StyledTableMobile,
  StyledTableNameDataMobile,
  StyledTableRowMobile,
  TableContainerMobile,
} from "./ConfirmEreferralAppoinment.mobile.style";
import {
  ChildContainerDesktop,
  ContainerDesktop,
  CustomConfirmButtonDesktop,
  EditSlotTextDesktop,
  HeadingTextDesktop,
  InformationTextDesktop,
  SlotTimeTextDesktop,
  StyledTableDesktop,
  StyledTableFieldDataDesktop,
  StyledTableFieldNameDesktop,
  StyledTableNameDataDesktop,
  StyledTableRowDesktop,
  TableContainerDesktop,
} from "./ConfirmEreferralAppoinment.desktop.style";
import { UploadReferralApi } from "@/api/uploadReferral/uploadReferral.api";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useAppDispatch } from "@/redux";
import { useCompleteBooking } from "../ConfirmAppoinment/ConfirmAppoinment.api";
import { HandleSendUploadReferralLink } from "@/api/sendUploadReferralLink/HandleSendUploadReferralLink.api";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { ErrorState } from "@/components/ErrorState/ErrorState";
const { setUserDetails, setBotState, setGoBackPopup } = chatDetailsActions;
const ConfirmEreferralAppoinment = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const curr = useSelector((state) => state.chatDetails);
  const [
    isHandleUploadReferralApiPending,
    setIsHandleUploadReferralApiPending,
  ] = useState(false);
  const {
    requestedModality,
    referralFile,
    conversationId,
    isErrorPresent,
    errorMessage,
  } = useSelector((state) => state.chatDetails);
  let slot_date = moment(curr.confirmedSlot, "YYYY-MM-DD HH:mm:ss").format(
    "DD MMMM YYYY, h:mm a"
  );
  console.log("slot_date", slot_date);
  let dateOfBirth = moment(curr.date_of_birth, "YYYY-MM-DD").format(
    "DD MMMM, YYYY"
  );
  const uploadSmartBookingReferral = async () => {
    if (!referralFile) {
      console.log("!Empty:Referral file");
      return;
    }
    const data = {
      file: referralFile,
    };
    setIsHandleUploadReferralApiPending(true);
    await UploadReferralApi(data, conversationId);
    setIsHandleUploadReferralApiPending(false);
  };

  const handleSubmit = () => {
    handleConfirmAppoiment({
      firstName: curr.firstName || "",
      lastName: curr.lastName || "",
      dob: curr.date_of_birth,
      mobileNumber: curr?.contactNumber,
    });
  };

  const handleConfirmAppoiment = async (data) => {
    let parsedDate = moment(data.dob);

    if (parsedDate.isValid()) {
      const formattedDob = parsedDate.format("YYYY-MM-DD");
      useAppDispatch(
        setUserDetails({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          date_of_birth: parsedDate.format("DD MMMM YYYY") || "",
          contactNumber: data?.mobileNumber,
        })
      );

      try {
        setIsPending(true);
        const response = await useCompleteBooking({
          conversationId: curr.conversationId,
          firstName: data.firstName,
          lastName: data.lastName,
          dob: formattedDob,
          contact_number: data?.mobileNumber,
        });

        if (response) {
          // await uploadSmartBookingReferral();
          navigate("/booking-completed");
          useAppDispatch(
            setBotState({
              botState: "/booking-completed",
              responseCode: "/booking-completed",
            })
          );
        }
        setIsPending(false);
      } catch (e) {
        setIsPending(false);
      }
    }
  };

  const handleChangeSlot = () => {
    useAppDispatch(
      setGoBackPopup({
        goBackPopup: true,
        goBackPopupState: "InformTimeState"
      })
    );
  };
  const ChildContainerWrapper = isMobile
    ? ChildContainerMobile
    : ChildContainerDesktop;
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
  const StyledTableNameDataWrapper = isMobile
    ? StyledTableNameDataMobile
    : StyledTableNameDataDesktop;
  const StyledTableRowWrapper = isMobile
    ? StyledTableRowMobile
    : StyledTableRowDesktop;
  const TableContainerWrapper = isMobile
    ? TableContainerMobile
    : TableContainerDesktop;
  const SlotTimeTextWrapper = isMobile
    ? SlotTimeTextMobile
    : SlotTimeTextDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  if (isPending) return <CustomLoader />;

  return (
    <ContainerWrapper>
      <ChildContainerWrapper>
        <HeadingTextWrapper
          sx={{
            color: theme.palette.primary.activeButton,
          }}
        >
          {isMobile ? (
            <span>
              Review and <b>Confirm</b> the details
            </span>
          ) : (
            <span>
              Review the details and click <b>'Confirm and Save'</b>
            </span>
          )}
        </HeadingTextWrapper>
        <TableContainerWrapper
          sx={{
            height: "350px",
            marginTop: isMobile ? "5px" : "25px",
          }}
        >
          <StyledTableWrapper
            cellSpacing={isMobile ? "5px" : "20px"}
            width="100%"
            sx={{ mt: 1 }}
          >
            <StyledTableRowWrapper>
              <StyledTableFieldNameWrapper>
                Scan Details
              </StyledTableFieldNameWrapper>
              <StyledTableFieldDataWrapper
                colSpan={3}
                sx={{ fontWeight: 550, fontSize: isMobile ? "15px" : "16px" }}
              >
                {curr.useServiceRequestUtterance}
              </StyledTableFieldDataWrapper>
            </StyledTableRowWrapper>

            <StyledTableRowWrapper>
              <StyledTableFieldNameWrapper>
                Slot Details
              </StyledTableFieldNameWrapper>
              <StyledTableFieldDataWrapper colSpan={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <SlotTimeTextWrapper> {slot_date}</SlotTimeTextWrapper>
                  <EditSlotTextWrapper
                    onClick={async () => {
                      await handleChangeSlot();
                    }}
                  >
                    {"Edit Slot"}
                  </EditSlotTextWrapper>
                </Box>
              </StyledTableFieldDataWrapper>
            </StyledTableRowWrapper>

            {<div style={{ height: "10px" }}></div>}

            <StyledTableRowWrapper
              colSpan={4}
              sx={{ height: isMobile ? "130px" : "50px" }}
            >
              <StyledTableFieldNameWrapper sx={{ fontWeight: "450" }}>
                First Name{" "}
              </StyledTableFieldNameWrapper>
              <StyledTableNameDataWrapper>
                <Box sx={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: 500 }}>
                  {curr.firstName}
                </Box>
              </StyledTableNameDataWrapper>
              <StyledTableFieldNameWrapper
                sx={{ mt: isMobile ? 1 : 0, fontWeight: "450" }}
              >
                Last Name{" "}
              </StyledTableFieldNameWrapper>
              <StyledTableNameDataWrapper>
                <Box sx={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: 500 }}>
                  {curr.lastName}
                </Box>
              </StyledTableNameDataWrapper>
            </StyledTableRowWrapper>

            <StyledTableRowWrapper>
              <StyledTableFieldNameWrapper sx={{ fontWeight: "450" }}>
                Date of Birth
              </StyledTableFieldNameWrapper>
              <StyledTableFieldDataWrapper
                colSpan={3}
                sx={{ color: "rgba(0, 0, 0, 0.5)", fontWeight: 500 }}
              >
                {dateOfBirth}
              </StyledTableFieldDataWrapper>
            </StyledTableRowWrapper>
          </StyledTableWrapper>
          {isErrorPresent && (
            <Stack alignItems="left">
              <ErrorState errorMsg={errorMessage} isTextAlignCenter />
            </Stack>
          )}
          <Stack>
            <Stack
              alignItems="center"
              sx={{
                margin: 0,
                padding: 0,
                justifyContent: "flex-start",
              }}
            >
              <CustomConfirmButtonWrapper
                onClick={() => {
                  handleSubmit();
                }}
                sx={{
                  mt: isMobile ? 1 : 3,
                  backgroundColor: theme.palette.primary.activeButton,
                  color: theme.palette.text.activeButtonText,
                  "&:hover": {
                    color: theme.palette.text.activeButtonText,
                    border: `1px solid ${theme.palette.primary.activeButton}`,
                    backgroundColor: alpha(
                      theme.palette.primary.activeButton,
                      0.8
                    ),
                    animation: "blink 1s",
                  },
                }}
              >
                Confirm and Save
              </CustomConfirmButtonWrapper>
            </Stack>
          </Stack>
        </TableContainerWrapper>
      </ChildContainerWrapper>
    </ContainerWrapper>
  );
};

export default ConfirmEreferralAppoinment;
