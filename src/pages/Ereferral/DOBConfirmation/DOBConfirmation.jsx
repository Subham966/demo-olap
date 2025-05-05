import React, { useRef, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomDateField } from "@/elements/CustomDateField";
import { CustomButton } from "@/elements/CustomButton";
import { useSelector } from "react-redux";
import { getEreferral } from "@/api/eReferral/eReferral";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useAppDispatch } from "@/redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import CustomDateField2 from "@/elements/CustomDateField2/CustomDateField2";
import {
  ChildContainerDesktop,
  ContainerDesktop,
  CustomConfirmButtonDesktop,
  DOBContainerDesktop,
  DobBoxDesktop,
  DobLabelDesktop,
  GreetingMessageContainerDesktop,
  HeadingTextDesktop,
  InformationTextDesktop,
  InputBoxContainerDesktop,
} from "./DOBConfirmation.desktop.style";
import {
  ChildContainerMobile,
  ContainerMobile,
  CustomConfirmButtonMobile,
  DOBContainerMobile,
  DobBoxMobile,
  DobLabelMobile,
  GreetingMessageContainerMobile,
  HeadingTextMobile,
  InformationTextMobile,
  InputBoxContainerMobile,
} from "./DOBConfirmation.mobile.style";
import { CustomTextField3 } from "@/elements/CustomTextField3";
import CustomSelect from "@/elements/CustomSelect/CustomSelect";
import CustomSelectBox from "@/elements/CustomSelectBox/CustomSelectBox";
const { setErrorMessage, setBotState, resetErrorMessage } = chatDetailsActions;

const dobConfirmSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  dob: yup.string(),
});
const defaultValues = {
  date: "",
  year: "",
};

const DOBConfirmation = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isEreferralDataLoading, setIsEreferralDataLoading] = useState(false);
  const { eReferralCode, isErrorPresent, errorMessage } = useSelector(
    (state) => state.chatDetails
  );
  const [dobError, setDobError] = useState(false);
  const [storedDob, setStoredDob] = useState("");
  const { screenHeight } = useSelector((state) => state.screenSize);
  const centerDetails = useSelector((state) => state.centerDetails);
  const inputDate = useRef();
  const [isDateInvalid, setIsDateInvalid] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("");
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(dobConfirmSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const handleGetEreferralDetails = async (dateOfBirth) => {
    const handleDobMatchedCallback = async () => {
      navigate("/ereferral-review-details");
      useAppDispatch(
        setBotState({
          botState: "/ereferral-review-details",
          responseCode: "/ereferral-review-details",
        })
      );
    };
    const handleDobMatchedfallback = async () => {
      useAppDispatch(
        setErrorMessage({
          errorMessage:
            "The entered date of birth does not match with our records",
        })
      );
    };
    const parsedDate = moment(dateOfBirth);
    const formattedDob = parsedDate.format("YYYY-MM-DD");
    // setStoredDob(parsedDate.format("DD-MM-YYYY"))
    setIsEreferralDataLoading(true);

    const data = { eReferralCode, DOB: formattedDob };
    await getEreferral(
      data,
      handleDobMatchedCallback,
      handleDobMatchedfallback
    );
    setIsEreferralDataLoading(false);
  };

  const handleSubmitButton = () => {
    let selectedMonthIndex = monthList.findIndex((el) => el == selectedMonth);
    let errorMessage = "";
    console.log(
      "selectedMonthIndex",
      getValues()?.date,
      selectedMonthIndex + 1,
      getValues()?.year,
      getValues()?.date ? true : false,
      getValues()?.year ? true : false
    );

    if (!getValues()?.date) {
      useAppDispatch(
        setErrorMessage({
          errorMessage: "Please provide your 'date' of birth.",
        })
      );
      return;
    }
    if (!getValues()?.year) {
      useAppDispatch(
        setErrorMessage({
          errorMessage: "Please provide your 'year' of birth.",
        })
      );
      return;
    }
    console.log(getValues().year, "check the year vlue...");
    if (getValues().year < 1900) {
      useAppDispatch(
        setErrorMessage({
          errorMessage:
            "Please enter the full year in YYYY format (e.g., 1995)",
        })
      );
      return;
    }

    const inputDob = `${getValues()?.year}-${selectedMonthIndex + 1}-${
      getValues()?.date
    }`;
    if (!isNaN(new Date(inputDob))) {
      handleGetEreferralDetails(inputDob);
    } else {
      useAppDispatch(
        setErrorMessage({
          errorMessage:
            "Valid DOB is required, please provide a valid date of birth",
        })
      );
    }
  };
  if (isEreferralDataLoading) {
    return <CustomLoader />;
  }

  const ChildContainerWrapper = isMobile
    ? ChildContainerMobile
    : ChildContainerDesktop;
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const CustomConfirmButtonWrapper = isMobile
    ? CustomConfirmButtonMobile
    : CustomConfirmButtonDesktop;
  const DOBContainerWrapper = isMobile
    ? DOBContainerMobile
    : DOBContainerDesktop;
  const DobBoxWrapper = isMobile ? DobBoxMobile : DobBoxDesktop;
  const GreetingMessageContainerWrapper = isMobile
    ? GreetingMessageContainerMobile
    : GreetingMessageContainerDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const DobLabelWrapper = isMobile ? DobLabelMobile : DobLabelDesktop;
  const InformationTextWrapper = isMobile
    ? InformationTextMobile
    : InformationTextDesktop;
  const InputBoxContainerWrapper = isMobile
    ? InputBoxContainerMobile
    : InputBoxContainerDesktop;
  return (
    <ContainerWrapper>
      <ChildContainerWrapper>
        <GreetingMessageContainerWrapper>
          <HeadingTextWrapper
            variant="h1"
            sx={{
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.6)",
              textAlign: "left",
              margin: "auto",
            }}
          >
            We have received the referral for your imaging examination from your
            GP
          </HeadingTextWrapper>
          <DobBoxWrapper>
            <DOBContainerWrapper>
              <DobLabelWrapper
                sx={{
                  color: theme.palette.primary.activeButton,
                  fontWeight: 650,
                  fontSize: "29px",
                  marginLeft: "0 !important",
                }}
              >
                To proceed, please enter patient’s date of birth
              </DobLabelWrapper>
              <InputBoxContainerWrapper>
                <FormControl
                  sx={{ m: !isMobile ? 1 : 0, mt: 1 }}
                  variant="standard"
                >
                  <CustomTextField3
                    variant="outlined"
                    label="Date"
                    control={control}
                    isFormControl
                    errors={errors}
                    name="date"
                    inputProps={{
                      type: "number",
                      min: 0,
                      max: 31,
                      onInput: (e) => {
                        if (e.target.value !== "") {
                          const value = parseInt(e.target.value, 10);
                          if (value < 0) {
                            e.target.value = 0;
                          } else if (value > 31) {
                            e.target.value = value;
                            useAppDispatch(
                              setErrorMessage({ errorMessage: "Invalid Date" })
                            );
                          } else if (value < 31 && value > 0) {
                            e.target.value = value;
                            useAppDispatch(resetErrorMessage());
                          }
                        } else {
                          useAppDispatch(resetErrorMessage());
                        }
                      },
                    }}
                  ></CustomTextField3>
                </FormControl>
                <FormControl
                  sx={{ m: !isMobile ? 1 : 0, mt: 1 }}
                  variant="standard"
                >
                  <CustomSelectBox
                    label="Month"
                    variant="outlined"
                    value={selectedMonth}
                    onChange={(e) => {
                      setSelectedMonth(e?.[0]);
                    }}
                    options={monthList}
                  ></CustomSelectBox>
                </FormControl>
                <FormControl
                  sx={{ m: !isMobile ? 1 : 0, mt: 1 }}
                  variant="standard"
                >
                  <CustomTextField3
                    variant="outlined"
                    label="Year"
                    control={control}
                    isFormControl
                    errors={errors}
                    name="year"
                    inputProps={{
                      type: "number",
                      min: 1900,
                      max: new Date().getFullYear(),
                      onInput: (e) => {
                        if (e.target.value !== "") {
                          const value = parseInt(e.target.value, 10);
                          if (value > new Date().getFullYear()) {
                            e.target.value = value;
                            useAppDispatch(
                              setErrorMessage({ errorMessage: "Invalid Year" })
                            );
                          } else {
                            useAppDispatch(resetErrorMessage());
                          }
                        } else if (e.target.value === "") {
                          console.log("came here.....");
                          useAppDispatch(resetErrorMessage());
                        }
                      },
                    }}
                  ></CustomTextField3>
                </FormControl>
                <FormControl
                  sx={{ m: !isMobile ? 1 : 0, mt: 1 }}
                  variant="standard"
                >
                  <CustomConfirmButtonWrapper
                    onClick={async () => {
                      handleSubmitButton();
                    }}
                    sx={{
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
                    Confirm
                  </CustomConfirmButtonWrapper>
                </FormControl>
              </InputBoxContainerWrapper>
            </DOBContainerWrapper>
          </DobBoxWrapper>
          {isErrorPresent && (
            <Stack alignItems="left">
              <ErrorState errorMsg={errorMessage} isTextAlignCenter />
            </Stack>
          )}
        </GreetingMessageContainerWrapper>
      </ChildContainerWrapper>
    </ContainerWrapper>
  );
};

export default DOBConfirmation;
