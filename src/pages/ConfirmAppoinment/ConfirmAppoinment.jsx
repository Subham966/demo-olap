import { CustomButton } from "@/elements/CustomButton";
import { CustomTextField } from "@/elements/CustomTextField";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useCompleteBooking } from "./ConfirmAppoinment.api";
import { useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { CustomDateField } from "@/elements/CustomDateField";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { COLORS } from "@/theme";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { UploadReferralApi } from "@/api/uploadReferral/uploadReferral.api";
import {
  CustomConfirmButtonMobile,
  CustomDateDetailsFieldMobile,
  CustomTextDetailsFieldMobile,
  FieldContainerMobile,
  FieldNameMobile,
  FieldParentBoxMobile,
  HeadingTextMobile,
  HelpTextMobile,
  OptionalHeadingTextMobile,
  ProvisionalBookingTextMobile,
} from "./ConfirmAppoinment.mobile.style";
import {
  CustomConfirmButtonDesktop,
  CustomDateDetailsFieldDesktop,
  CustomTextDetailsFieldDesktop,
  FieldContainerDesktop,
  FieldNameDesktop,
  FieldParentBoxDesktop,
  HeadingTextDesktop,
  HelpTextDesktop,
  OptionalHeadingTextDesktop,
  ProvisionalBookingTextDesktop,
} from "./ConfirmAppoinment.desktop.style";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const bookingFromSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  dob: yup.string(),
  mobileNumber: yup.string(),
});

function ConfirmAppoinment() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [isPending, setIsPending] = useState(false);
  const curr = useSelector((state) => state.chatDetails);
  const { setUserDetails, setBotState } = chatDetailsActions;
  const [fileName, setFileName] = useState(null);
  const isProvisional = curr?.conversationTags.includes("PROVISIONAL_BOOKING");
  const [confirmAppoimentError, setConfirmAppoimentError] = useState(null);
  const { screenHeight } = useSelector((state) => state.screenSize);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const centerDetails = useSelector((state) => state.centerDetails);
  const [
    isHandleUploadReferralApiPending,
    setIsHandleUploadReferralApiPending,
  ] = useState(false);
  const {
    errorMessage,
    isErrorPresent,
    automationLogicLoadingStatus,
    conversationId,
    referralFile,
    eReferralWorkflow,
    isServiceRequestChanged,
    selectedCenterId
  } = useSelector((state) => state.chatDetails);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("file");
    if (file) {
      setFileName(file);
    }
  };

  const handleUploadReferral = async () => {
    if (!fileName) {
      console.log("!Empty:Referral file");
      return;
    }
    const data = {
      file: fileName,
    };
    setIsHandleUploadReferralApiPending(true);
    await UploadReferralApi(data, conversationId);
    setIsHandleUploadReferralApiPending(false);
  };

  const defaultValues = {
    firstName: curr.firstName,
    lastName: curr.lastName,
    dob: curr.date_of_birth,
    mobileNumber: curr.contactNumber,
  };

  console.log("defaultValues", defaultValues);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bookingFromSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const handleConfirmAppoiment = async (data) => {
    if (!data) {
      setConfirmAppoimentError(
        "Details is missing. Ensure 'all details' is provided"
      );
      return;
    } else if (!data?.firstName) {
      setConfirmAppoimentError(
        // "'First Name' is missing. Please provide 'First Name'"
        "Please provide the required details."
      );
      return;
    } else if (!data?.lastName) {
      setConfirmAppoimentError(
        // "'Last Name' is missing. Please provide 'Last Name'"
        "Please provide the required details."
      );
      return;
    } else if (!data?.dob) {
      setConfirmAppoimentError(
        // "DOB is missing. Ensure 'DOB' is provided"
        "Please provide the required details."
      );
      return;
    } else if (!data?.mobileNumber) {
      setConfirmAppoimentError(
        // "Contact Number is missing. Please provide 'Contact Number'"
        "Please provide the required details."
      );
      return;
    }

    if (data?.mobileNumber?.length < 9 || data?.mobileNumber?.length > 10) {
      if (curr?.eReferralWorkflow) {
      } else {
        setConfirmAppoimentError("Contact Number must be 9 or 10 digits long.");
        return;
      }
    }

    // Validate the Date of Birth
    const dob = new Date(data.dob);
    if (isNaN(dob.getTime())) {
      setConfirmAppoimentError(`Invalid Date Format for DOB: "${data.dob}"`);
      return;
    }

    let parsedDate = moment(dob);

    if (!parsedDate.isValid()) {
      setConfirmAppoimentError(
        `Invalid Date Format for DOB: "${data.dob}". Unable to parse the date.`
      );
      return;
    }

    // Get the current date
    const today = moment();

    // Check if DOB is not in the future
    if (parsedDate.isAfter(today)) {
      setConfirmAppoimentError("DOB cannot be a future date.");
      return;
    }

    // Check if DOB is not older than 150 years
    const maxDob = today.clone().subtract(150, "years");
    if (parsedDate.isBefore(maxDob)) {
      setConfirmAppoimentError("DOB cannot be older than 150 years.");
      return;
    }

    const formats = ["DD MM YYYY", "D MMMM YYYY"];
    parsedDate = moment(data.dob);

    if (parsedDate.isValid()) {
      const formattedDob = parsedDate.format("YYYY-MM-DD");
      console.log("Formatted DOB:", formattedDob);
      useAppDispatch(
        setUserDetails({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          date_of_birth: parsedDate.format("DD MMMM YYYY") || "",
          contactNumber: data?.mobileNumber,
        })
      );
      await handleUploadReferral();
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
          navigate("/booking-completed");
          useAppDispatch(
            setBotState({
              botState: "/booking-completed",
              responseCode: "/booking-completed",
            })
          );
        }
        setConfirmAppoimentError(null);
        setIsPending(false);
      } catch (e) {
        setIsPending(false);
      }
    } else {
      console.error("Invalid Date Format");
    }
  };
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

  useEffect(() => {
    const handleAsyncOperations = async () => {
      if (curr.firstName && !eReferralWorkflow) {
        // if (referralFile && !isServiceRequestChanged) {
        //   await uploadSmartBookingReferral();
        // }
        await handleConfirmAppoiment({
          firstName: curr.firstName || "",
          lastName: curr.lastName || "",
          dob: curr.date_of_birth,
          mobileNumber: curr?.contactNumber,
        });
      }
      if (referralFile) {
        console.log("referralFile", referralFile);
      }
      if (isServiceRequestChanged) {
        console.log("isServiceRequestChanged", isServiceRequestChanged);
      }
    };

    handleAsyncOperations();
  }, []);

  const watchedFields = watch(["firstName", "lastName", "dob", "mobileNumber"]);

  const CustomConfirmButtonWrapper = isMobile
    ? CustomConfirmButtonMobile
    : CustomConfirmButtonDesktop;
  const FieldContainerWrapper = isMobile
    ? FieldContainerMobile
    : FieldContainerDesktop;
  const FieldParentBoxWrapper = isMobile
    ? FieldParentBoxMobile
    : FieldParentBoxDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const HelpTextWrapper = isMobile ? HelpTextMobile : HelpTextDesktop;
  const OptionalHeadingTextWrapper = isMobile
    ? OptionalHeadingTextMobile
    : OptionalHeadingTextDesktop;
  const ProvisionalBookingTextWrapper = isMobile
    ? ProvisionalBookingTextMobile
    : ProvisionalBookingTextDesktop;

  useEffect(() => {
    const values = getValues();
    const isEmptyField =
      !values.firstName?.trim() ||
      !values.lastName?.trim() ||
      !values.dob ||
      !values.mobileNumber?.trim();

    setIsButtonDisabled(isEmptyField);
  }, [watchedFields]);

  if (
    isPending ||
    automationLogicLoadingStatus ||
    (curr.firstName &&
      curr.lastName &&
      curr.date_of_birth &&
      curr?.contactNumber &&
      !curr?.eReferralWorkflow)
  )
    return <CustomLoader />;

  return (
    <Stack
      marginTop={isMobile ? "0px" : screenHeight < 900 ? "12px" : "22px"}
      marginX={isMobile ? "0%" : screenHeight < 900 ? "5%" : "10%"}
    >
      <HeadingTextWrapper color={theme.palette.primary.activeButton}>
        {curr?.eReferralWorkflow
          ? "Confirm Patient Details"
          : "Provide Patient Details"}
      </HeadingTextWrapper>

      <FieldParentBoxWrapper overflow={!isMobile && "auto"}>
        {/* {isProvisional && (
          <Box sx={{ textAlign: "center", marginBottom: "10px" }}>
            <ProvisionalBookingTextWrapper
              sx={{
                backgroundColor: COLORS.GREY_3,
              }}
            >
              Our staff will call you to confirm your slot. Please provide the
              details below and upload the referral form.
            </ProvisionalBookingTextWrapper>
          </Box>
        )} */}
        <Stack gap={isMobile ? "10px" : screenHeight < 900 ? "10px" : "20px"}>
          <FieldContainerWrapper
            container
            spacing={!isMobile && 2}
            gap={isMobile ? "10px" : "15px 0px"}
          >
            <BookingConfirmationField
              field_name={"First Name*"}
              control={control}
              name={"firstName"}
              getValues={getValues}
              errors={errors}
              readOnly={eReferralWorkflow}
            // errorMessage={confirmAppoimentError}
            />
            <BookingConfirmationField
              field_name={"Last Name*"}
              control={control}
              getValues={getValues}
              name={"lastName"}
              errors={errors}
              readOnly={eReferralWorkflow}
            // errorMessage={confirmAppoimentError}
            />
            <BookingConfirmationDateField
              field_name={"DOB*"}
              control={control}
              dateFormat={"DD-MM-YYYY"}
              name={"dob"}
              defaultValue={curr.date_of_birth}
              errors={errors}
              readOnly={eReferralWorkflow}
            // errorMessage={confirmAppoimentError}
            />
            <BookingConfirmationField
              field_name={"Mobile No*"}
              control={control}
              name={"mobileNumber"}
              getValues={getValues}
              errors={errors}
              readOnly={eReferralWorkflow}
            // errorMessage={confirmAppoimentError}
            />
          </FieldContainerWrapper>
          <Stack sx={{ paddingX: isMobile ? "10px" : "20px" }}>
            <OptionalHeadingTextWrapper
              variant="subtitle"
              marginBottom={"10px"}
            >
              If you have a referral form, please upload.
            </OptionalHeadingTextWrapper>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "repeat(1,1fr)"
                  : "repeat(2,1fr)",
                width:
                  screenHeight < 600
                    ? "95%"
                    : screenHeight < 700
                      ? "95%"
                      : screenHeight < 800
                        ? "95%"
                        : screenHeight < 900
                          ? "95%"
                          : "98%",
                gap: "20px",
                marginTop: isMobile
                  ? "15px"
                  : screenHeight < 900
                    ? "0px"
                    : "20px",
              }}
            >
              <Button
                component="label"
                role={undefined}
                sx={{
                  height: isMobile
                    ? "40px"
                    : screenHeight < 600
                      ? "30px"
                      : screenHeight < 700
                        ? "30px"
                        : screenHeight < 800
                          ? "38px"
                          : screenHeight < 900
                            ? "42px"
                            : "50px",
                  border: "1px solid lightgray",
                  color: fileName?.name
                    ? "green"
                    : theme.palette.primary.activeButton,
                  backgroundColor: "white",
                  fontSize: screenHeight < 900 && "12px",
                }}
                startIcon={<CloudUploadIcon />}
              >
                {fileName ? fileName?.name : " Select & Upload Referral"}
                <VisuallyHiddenInput
                  type="file"
                  accept={".jpg,.pdf"}
                  onChange={handleFileChange}
                />
              </Button>
              <Button
                component="label"
                role={undefined}
                sx={{
                  height: isMobile
                    ? "40px"
                    : screenHeight < 600
                      ? "30px"
                      : screenHeight < 700
                        ? "30px"
                        : screenHeight < 800
                          ? "38px"
                          : screenHeight < 900
                            ? "42px"
                            : "50px",
                  border: "1px solid lightgray",
                  display: isMobile ? "none" : "flex",
                  backgroundColor: "white",
                  fontSize: screenHeight < 900 && "12px",
                }}
                startIcon={<CameraAltIcon />}
                disabled={true}
              >
                Take a picture
                <VisuallyHiddenInput type="file" multiple />
              </Button>
            </div>
            <HelpTextWrapper variant="subtitle">
              If you don't have the referral form handy, you can either email to
              us on{" "}
              <span style={{ color: "blue", display: "inline" }}>
                {centerDetails?.email?.[selectedCenterId ? selectedCenterId : centerDetails?.center_id]}
              </span>{" "}
              or upload it using the link we'll send after the booking.
            </HelpTextWrapper>
          </Stack>
        </Stack>
        {isErrorPresent && (
          <Stack alignItems="left">
            <ErrorState errorMsg={errorMessage} isTextAlignCenter />
          </Stack>
        )}
        {confirmAppoimentError && !isErrorPresent && (
          <Stack alignItems="left">
            <ErrorState errorMsg={confirmAppoimentError} isTextAlignCenter />
          </Stack>
        )}

        <Stack>
          <Stack alignItems="center" display={isMobile && "none"}>
            <CustomConfirmButtonWrapper
              onClick={handleSubmit(handleConfirmAppoiment)}
              // disabled={isButtonDisabled}
              isProvisional={isProvisional}
              sx={{
                backgroundColor: theme.palette.text.activeButtonText,
                color: theme.palette.primary.activeButton,
                minWidth: "120px",
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                  backgroundColor: theme.palette.primary.activeButton,
                },
              }}
            >
              {isProvisional ? "Submit" : "Confirm And Save"}
            </CustomConfirmButtonWrapper>
          </Stack>
        </Stack>
      </FieldParentBoxWrapper>
      <Stack>
        <Stack alignItems="center" display={!isMobile && "none"}>
          <CustomConfirmButtonWrapper
            onClick={handleSubmit(handleConfirmAppoiment)}
            // disabled={isButtonDisabled}
            isProvisional={isProvisional}
            sx={{
              backgroundColor: theme.palette.text.activeButtonText,
              color: theme.palette.primary.activeButton,
              minWidth: "120px",
              "&:hover": {
                color: theme.palette.text.activeButtonText,
                border: `1px solid ${theme.palette.text.activeButtonText}`,
                backgroundColor: theme.palette.primary.activeButton,
              },
            }}
          >
            {isProvisional ? "Submit" : "Confirm And Save"}
          </CustomConfirmButtonWrapper>
        </Stack>
      </Stack>
    </Stack>
  );
}

const BookingConfirmationField = ({
  field_name,
  control,
  name,
  errors,
  getValues,
  readOnly,
  errorMessage,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  const CustomTextDetailsFieldWrapper = isMobile
    ? CustomTextDetailsFieldMobile
    : CustomTextDetailsFieldDesktop;
  const FieldNameWrapper = isMobile ? FieldNameMobile : FieldNameDesktop;
  const handleKeyDown = (e) => {
    if (name === "mobileNumber") {
      const currentLength = getValues()[name]?.length || 0;

      if (
        (!/[0-9]/.test(e.key) &&
          ![
            "Backspace",
            "Delete",
            "Tab",
            "Enter",
            "ArrowLeft",
            "ArrowRight",
          ].includes(e.key)) ||
        (currentLength >= 10 &&
          ![
            "Backspace",
            "Delete",
            "Tab",
            "Enter",
            "ArrowLeft",
            "ArrowRight",
          ].includes(e.key))
      ) {
        e.preventDefault();
      }
    } else if (name === "firstName" || name === "lastName") {
      if (
        !/^[a-zA-Z\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(e.key) &&
        ![
          "Backspace",
          "Delete",
          "Tab",
          "Enter",
          "ArrowLeft",
          "ArrowRight",
        ].includes(e.key)
      ) {
        e.preventDefault();
      }
    }
  };
  return (
    <Grid
      item
      xs={isMobile ? 12 / 1 : isTablet ? 12 / 2 : 12 / 2}
      md={isMobile ? 12 / 1 : isTablet ? 12 / 2 : 12 / 2}
      sx={{
        paddingY: "0px !important",
        paddingX: isMobile ? "10px !important" : "10px !important",
      }}
    >
      <CustomTextDetailsFieldWrapper
        fullWidth
        control={control}
        isFormControl
        errors={errors}
        inputProps={{
          maxLength: name === "mobileNumber" ? 10 : undefined,
          form: {
            autocomplete: "off",
          },
        }}
        type={isMobile && name === "mobileNumber" && "number"}
        onKeyDown={handleKeyDown}
        name={name}
        readOnly={readOnly}
        height={
          isMobile
            ? "40px"
            : screenHeight < 600
              ? "30px"
              : screenHeight < 700
                ? "30px"
                : screenHeight < 800
                  ? "33px"
                  : screenHeight < 900
                    ? "42px"
                    : "50px"
        }
        label={
          <FieldNameWrapper>
            {field_name}
            {errorMessage && (
              <Box
                fontSize={"12px"}
                color={"red"}
                sx={{ display: "inline", marginLeft: "5px" }}
              >
                ({errorMessage})
              </Box>
            )}
          </FieldNameWrapper>
        }
      />
    </Grid>
  );
};

const BookingConfirmationDateField = ({
  field_name,
  control,
  name,
  errors,
  dateFormat,
  defaultValue,
  readOnly,
  errorMessage,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  const CustomDateDetailsFieldWrapper = isMobile
    ? CustomDateDetailsFieldMobile
    : CustomDateDetailsFieldDesktop;
  const FieldNameWrapper = isMobile ? FieldNameMobile : FieldNameDesktop;
  return (
    <Grid
      item
      xs={isMobile ? 12 / 1 : isTablet ? 12 / 2 : 12 / 2}
      md={isMobile ? 12 / 1 : isTablet ? 12 / 2 : 12 / 2}
      sx={{
        paddingY: "0px !important",
        paddingX: isMobile ? "10px !important" : "10px !important",
      }}
    >
      <Stack>
        <FieldNameWrapper>
          {field_name}{" "}
          {errorMessage && (
            <Box
              fontSize={"12px"}
              color={"red"}
              sx={{ display: "inline", marginLeft: "5px" }}
            >
              ({errorMessage})
            </Box>
          )}
        </FieldNameWrapper>
        <CustomDateDetailsFieldWrapper
          spellCheck={false}
          control={control}
          isFormControl
          form
          placeholder={dateFormat}
          format={dateFormat}
          defaultValue={moment(defaultValue, "YYYY-MM-DD")}
          name={name}
          readOnly={readOnly}
          height={
            isMobile
              ? "40px"
              : screenHeight < 600
                ? "30px"
                : screenHeight < 700
                  ? "30px"
                  : screenHeight < 800
                    ? "33px"
                    : screenHeight < 900
                      ? "42px"
                      : "50px"
          }
          sx={{
            backgroundColor: "white",
          }}
        />
        {errorMessage && (
          <Box fontSize={"12px"} color={"red"}>
            {errorMessage}
          </Box>
        )}
      </Stack>
    </Grid>
  );
};

export default ConfirmAppoinment;
