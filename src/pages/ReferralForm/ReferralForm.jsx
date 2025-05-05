import { CustomTextField } from "@/elements/CustomTextField";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { CustomDateField } from "@/elements/CustomDateField";
import moment from "moment";
import { HandleSmartBooking } from "@/api/smartBooking/HandleSmartBooking.api";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useStartBooking } from "@/api/startBooking/StartBooking.api";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import {
  CustomConfirmButtonDesktop,
  FieldGridBoxDesktop,
  FieldTitleDesktop,
  ParentContainerBoxDesktop,
} from "./ReferralForm.desktop.style";
import {
  CustomConfirmButtonMobile,
  FieldGridBoxMobile,
  FieldTitleMobile,
  ParentContainerBoxMobile,
} from "./ReferralForm.mobile.style";
import { UploadReferralApi } from "@/api/uploadReferral/uploadReferral.api";

// Schema validation
const referralFromSchema = yup.object().shape({
  requestedScan: yup.string(),
  firstName: yup.string(),
  lastName: yup.string(),
  dob: yup.string(),
  contactNumber: yup.string(),
});

const ReferralForm = () => {
  const theme = useTheme();
  const curr = useSelector((state) => state.chatDetails); // Adjust this to match your Redux
  const { screenHeight } = useSelector((state) => state.screenSize);

  const { errorMessage, isErrorPresent } = useSelector(
    (state) => state.chatDetails
  );
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const centerDetails = useSelector((state) => state.centerDetails);
  const { setConversationId, setUserDetails, setBotState } = chatDetailsActions;
  const [isStartBookingApiPending, setIsStartBookingApiPending] =
    useState(false);
  const [isSmartBookingApiPending, setIsSmartBookingApiPending] =
    useState(false);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [startBookingError, setStartBookingError] = useState(null);
  const defaultValues = {
    requestedScan: curr.bodyPart,
    firstName: curr.firstName,
    lastName: curr.lastName,
    dob: curr.date_of_birth,
    contactNumber: curr.contactNumber,
  };

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(referralFromSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const generateUUID = () => uuidv4();

  const uploadSmartBookingReferral = async (convID) => {
    if (!curr?.referralFile) {
      console.log("!Empty:Referral file");
      return;
    }
    const data = {
      file: curr?.referralFile,
    };
    await UploadReferralApi(data, convID);
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

  const handleSubmitForm = async (formData, formattedDob) => {
    let uuid = generateUUID();
    const data = {
      first_name: !formData?.firstName ? curr.firstName : formData?.firstName,
      last_name: !formData?.lastName ? curr.lastName : formData?.lastName,
      dob: formattedDob,
      contact_number: formData?.contactNumber,
      requested_scan: !formData?.requestedScan
        ? curr.bodyPart
        : formData?.requestedScan,
      conversation_id: uuid,
      center_id: centerDetails.center_id,
    };
    const handleStartSmartBookingSuccessCallback = async (res) => {
      if (res?.error_code && res?.error_code !== 0) {
        setStartBookingError(res?.error_description);
      } else {
        if (curr?.referralFile) {
          await uploadSmartBookingReferral(uuid);
        }
        useAppDispatch(
          setUserDetails({
            firstName: !formData?.firstName
              ? curr.firstName
              : formData?.firstName,
            lastName: !formData?.lastName ? curr.lastName : formData?.lastName,
            date_of_birth: formattedDob,
            contactNumber: formData?.contactNumber,
          })
        );
        setStartBookingError(null);
      }
    };
    setIsSmartBookingApiPending(true);
    await HandleSmartBooking(data, handleStartSmartBookingSuccessCallback);
    setIsSmartBookingApiPending(false);
  };

  const handleConfirmAppointment = (formData) => {
    console.log(formData);

    if (!formData || !formData.dob) {
      setStartBookingError(
        "Invalid or missing formData. Ensure 'dob' is provided"
      );
      return;
    } else if (!formData?.requestedScan) {
      setStartBookingError(
        "Requested scan is missing. Please provide 'requested scan'"
      );
      return;
    } else if (!formData?.contactNumber) {
      setStartBookingError(
        "Contact Number is missing. Please provide 'Contact Number'"
      );
      return;
    } else if (!formData?.firstName) {
      setStartBookingError(
        "'First Name' is missing. Please provide 'First Name'"
      );
      return;
    } else if (!formData?.lastName) {
      setStartBookingError(
        "'Last Name' is missing. Please provide 'Last Name'"
      );
      return;
    }

    if (
      formData?.contactNumber?.length < 9 ||
      formData?.contactNumber?.length > 10
    ) {
      setStartBookingError("Contact Number must be 9 or 10 digits long.");
      return;
    }

    const dobString = formData.dob;
    const [day, month, year] = dobString.split("-");

    // Convert to a valid format (YYYY-MM-DD)
    const validDateString = `${year}-${month}-${day}`;
    const dob = new Date(validDateString);

    if (isNaN(dob.getTime())) {
      setStartBookingError(`Invalid Date Format for DOB: "${formData.dob}"`);
      return;
    }

    // Parse the date using Moment.js
    const parsedDate = moment(dob);
    if (!parsedDate.isValid()) {
      setStartBookingError(
        `Invalid Date Format for DOB: "${formData.dob}". Unable to parse the date`
      );
      return;
    }

    // Get the current date
    const today = moment();

    // Check if DOB is not in the future
    if (parsedDate.isAfter(today)) {
      setStartBookingError(`DOB cannot be a future date.`);
      return;
    }

    // Check if DOB is not older than 150 years
    const maxDob = today.clone().subtract(150, "years");
    if (parsedDate.isBefore(maxDob)) {
      setStartBookingError(`DOB cannot be older than 150 years`);
      return;
    }

    const formattedDob = parsedDate.format("YYYY-MM-DD");
    console.log("Formatted Date of Birth:", formattedDob);
    handleSubmitForm(formData, formattedDob); // Proceed with submission
    setStartBookingError(null);
  };

  const CustomConfirmButtonWrapper = isMobile
    ? CustomConfirmButtonMobile
    : CustomConfirmButtonDesktop;
  const ParentContainerBoxWrapper = isMobile
    ? ParentContainerBoxMobile
    : ParentContainerBoxDesktop;

  if (
    isHandleUtteranceApiPending ||
    isStartBookingApiPending ||
    isSmartBookingApiPending
  )
    return <CustomLoader />;
  return (
    <ParentContainerBoxWrapper>
      <Stack sx={{ gap: "15px" }}>
        <TextField
          fieldName={"Requested Scan"}
          control={control}
          errors={errors}
          isMobile={isMobile}
          name={"requestedScan"}
          value={curr.bodyPart}
          setValue={setValue}
          getValues={getValues}
        />
        <TextField
          fieldName={"First Name"}
          control={control}
          errors={errors}
          isMobile={isMobile}
          name={"firstName"}
          value={curr.firstName}
          setValue={setValue}
          getValues={getValues}
        />
        <TextField
          fieldName={"Last Name"}
          control={control}
          errors={errors}
          isMobile={isMobile}
          name={"lastName"}
          value={curr.lastName}
          setValue={setValue}
          getValues={getValues}
        />
        <DateField
          fieldName={"DOB"}
          control={control}
          errors={errors}
          isMobile={isMobile}
          name={"dob"}
          dateFormat={"DD-MM-YYYY"}
          defaultValue={moment(curr.date_of_birth, "DD-MM-YYYY").format(
            "YYYY-MM-DD"
          )}
          setValue={setValue}
          getValues={getValues}
        />
        <TextField
          fieldName={"Contact No"}
          control={control}
          errors={errors}
          isMobile={isMobile}
          name={"contactNumber"}
          value={curr.contactNumber}
          setValue={setValue}
          getValues={getValues}
        />
      </Stack>
      {startBookingError && !isErrorPresent && (
        <Stack marginTop="20px" alignItems="left">
          <ErrorState errorMsg={startBookingError} isTextAlignCenter />
        </Stack>
      )}
      {isErrorPresent && (
        <Stack marginTop="20px" alignItems="left">
          <ErrorState errorMsg={errorMessage} isTextAlignCenter />
        </Stack>
      )}
      <Stack alignItems="center">
        <CustomConfirmButtonWrapper
          onClick={handleSubmit(handleConfirmAppointment)}
          sx={{
            backgroundColor: theme.palette.text.activeButtonText,
            color: theme.palette.primary.activeButton,
            "&:hover": {
              color: theme.palette.text.activeButtonText,
              border: `1px solid ${theme.palette.text.activeButtonText}`,
              backgroundColor: theme.palette.primary.activeButton,
            },
          }}
        >
          {true ? "Confirm and Select Slot" : "Select location & slot"}
        </CustomConfirmButtonWrapper>
      </Stack>
    </ParentContainerBoxWrapper>
  );
};

const TextField = ({
  fieldName,
  control,
  name,
  errors,
  isMobile,
  value,
  setValue,
  getValues,
}) => {
  const [isErrorPresent, setIsErrorPresent] = useState(value == "");
  const { screenHeight } = useSelector((state) => state.screenSize);
  const FieldGridBoxWrapper = isMobile
    ? FieldGridBoxMobile
    : FieldGridBoxDesktop;
  const FieldTitleWrapper = isMobile ? FieldTitleMobile : FieldTitleDesktop;
  useEffect(() => {
    if (getValues()[name] == "") {
      setIsErrorPresent(true);
    } else {
      setIsErrorPresent(false);
    }
  }, [getValues()[name]]);

  const handleKeyDown = (e) => {
    if (name === "contactNumber") {
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
    <FieldGridBoxWrapper>
      <FieldTitleWrapper sx={screenHeight < 900 && { fontSize: "14px" }}>
        {fieldName} :
      </FieldTitleWrapper>
      <CustomTextField
        fullWidth
        value={value}
        control={control}
        isFormControl
        placeholder={fieldName}
        errors={errors}
        name={name}
        height={
          isMobile
            ? "34px"
            : screenHeight < 600
              ? "30px"
              : screenHeight < 700
                ? "30px"
                : screenHeight < 800
                  ? "38px"
                  : screenHeight < 900
                    ? "42px"
                    : "50px"
        }
        inputProps={{
          maxLength: name === "contactNumber" ? 10 : undefined,
        }}
        onKeyDown={handleKeyDown}
        sx={{
          backgroundColor: "white",
          width: "100%",
          border: isErrorPresent
            ? "1px solid red !important"
            : "1px solid transparent !important",
        }}
      />
    </FieldGridBoxWrapper>
  );
};

const DateField = ({
  fieldName,
  control,
  name,
  errors,
  isMobile,
  dateFormat,
  defaultValue,
  getValues,
}) => {
  const [isErrorPresent, setIsErrorPresent] = useState(
    moment(defaultValue, "YYYY-MM-DD").isValid() ? false : true
  );
  const FieldGridBoxWrapper = isMobile
    ? FieldGridBoxMobile
    : FieldGridBoxDesktop;
  const FieldTitleWrapper = isMobile ? FieldTitleMobile : FieldTitleDesktop;
  const { screenHeight } = useSelector((state) => state.screenSize);

  // console.log("hy",getValues()[name])

  // useEffect(() => {
  //   if (moment(getValues()[name], "YYYY-MM-DD", true).isValid()==true) {
  //     setIsErrorPresent(true);
  //   } else {
  //     setIsErrorPresent(false);
  //   }
  // }, [getValues()[name]])

  return (
    <FieldGridBoxWrapper>
      <FieldTitleWrapper sx={screenHeight < 900 && { fontSize: "14px" }}>
        {fieldName} :
      </FieldTitleWrapper>
      <CustomDateField
        form
        format={dateFormat}
        fullWidth
        control={control}
        isFormControl
        errors={errors}
        defaultValue={moment(defaultValue)}
        name={name}
        height={
          isMobile
            ? "40px"
            : screenHeight < 600
              ? "30px"
              : screenHeight < 700
                ? "30px"
                : screenHeight < 800
                  ? "38px"
                  : screenHeight < 900
                    ? "42px"
                    : "50px"
        }
        sx={{
          backgroundColor: "white",
          width: "100%",
          border: isErrorPresent
            ? "1px solid red !important"
            : "1px solid transparent !important",
        }}
      />
    </FieldGridBoxWrapper>
  );
};

export default ReferralForm;
