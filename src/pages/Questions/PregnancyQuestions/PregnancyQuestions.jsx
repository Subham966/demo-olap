import { CustomButton } from "@/elements/CustomButton";
import { CustomTextField } from "@/elements/CustomTextField";
import {
  Box,
  Stack,
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  useMediaQuery,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useAppDispatch } from "@/redux";
import { useForm } from "react-hook-form";
import SearchArrow from "@/assets/SearchArrow.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { COLORS } from "@/theme";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import { useTheme } from "@emotion/react";

import { CheckBox } from "@mui/icons-material";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import {
  ButtonContainerMobile,
  CheckBoxLabelMobile,
  ContainerMobile,
  CustomCheckboxMobile,
  CustomaCssButtonMobile,
  InputBoxLabelMobile,
  InputTextContainerMobile,
  MultiPregnancyBoxMobile,
  PregnancyOptionsContainerMobile,
  PregnancyOptionsTextMobile,
  PregnancyOptionsWeeksMobile,
  PregnancyQuestionsContainerMobile,
  PregnancyQuestionsTextMobile,
  ScanTypeHeadingMobile,
  WeeksInputContainerMobile,
} from "./PregnancyQuestions.mobile.style";
import {
  ButtonContainerDesktop,
  CheckBoxLabelDesktop,
  ContainerDesktop,
  CustomCheckboxDesktop,
  CustomaCssButtonDesktop,
  InputBoxLabelDesktop,
  InputTextContainerDesktop,
  MultiPregnancyBoxDesktop,
  PregnancyOptionsContainerDesktop,
  PregnancyOptionsTextDesktop,
  PregnancyOptionsWeeksDesktop,
  PregnancyQuestionsContainerDesktop,
  PregnancyQuestionsTextDesktop,
  ScanTypeHeadingDesktop,
  WeeksInputContainerDesktop,
} from "./PregnancyQuestions.desktop.style";

export const getUserFormSchema = yup.object().shape({
  answer: yup.string().required("Phone number is required"),
});

const pregnancyList = [
  { name: "Dating Scan", duration: "1 - 11 weeks", weeks: "10" },
  { name: "Nuchal Scan", duration: "12 - 14 weeks", weeks: "13" },
  { name: "Structural Scan", duration: "15 - 18 weeks", weeks: "17" },
  { name: "Morphology Scan", duration: "19 - 22 weeks", weeks: "20" },
  { name: "Growth Scan", duration: "23 - 44 weeks", weeks: "30" },
  { name: "Others", duration: "" },
];

function PregnancyQuestions() {
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const { setConversationId, setChatDetails, setPregnancyWeeksAndDays } =
    chatDetailsActions;
  const [selectedPregnancyWeeks, setSelectedPregnancyWeeks] = useState("");
  const theme = useTheme();
  const curr = useSelector((state) => state.chatDetails);
  const [pregnancyInput, SetPregnancyInput] = useState("");

  const [pregnancyDays, SetPregnancyDays] = useState(0);
  const [pregnancyWeeks, SetPregnancyWeeks] = useState(0);
  const [isMultiPregnancy, setIsMultiPregnancy] = useState(false);
  const { screenHeight } = useSelector((state) => state.screenSize);
  const inputRef = useRef(null);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [remainingDays, setRemainingDays] = useState(null);
  const additionalQuestion = curr.additionalQuestion;
  const { addAdditionalQuestion } = chatDetailsActions;
  const { errorMessage, isErrorPresent, loading, currentInternalState } =
    useSelector((state) => state.chatDetails);
  const defaultValues = {
    answer: "",
  };
  const [isFocused, setIsFocused] = useState(null);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(getUserFormSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const handleAnswer = async (data) => {
    setIsHandleUtteranceApiPending(true);
    await useHandleUtterance({
      conversation_id: curr.conversationId,
      utterance: data,
    });
    setIsHandleUtteranceApiPending(false);
  };
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const CheckBoxLabelWrapper = isMobile
    ? CheckBoxLabelMobile
    : CheckBoxLabelDesktop;
  const CustomCheckboxWrapper = isMobile
    ? CustomCheckboxMobile
    : CustomCheckboxDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const InputBoxLabelWrapper = isMobile
    ? InputBoxLabelMobile
    : InputBoxLabelDesktop;
  const PregnancyQuestionsContainerWrapper = isMobile
    ? PregnancyQuestionsContainerMobile
    : PregnancyQuestionsContainerDesktop;
  const ScanTypeHeadingWrapper = isMobile
    ? ScanTypeHeadingMobile
    : ScanTypeHeadingDesktop;
  const InputTextContainerWrapper = isMobile
    ? InputTextContainerMobile
    : InputTextContainerDesktop;
  const WeeksInputContainerWrapper = isMobile
    ? WeeksInputContainerMobile
    : WeeksInputContainerDesktop;
  const MultiPregnancyBoxWrapper = isMobile
    ? MultiPregnancyBoxMobile
    : MultiPregnancyBoxDesktop;
  if (loading) {
    return <CustomLoader />;
  }

  console.log(pregnancyWeeks, "=>", pregnancyDays, "check the data here...");

  const handleAutoFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Stack>
      <ContainerWrapper
        marginX={{
          xs: "0px",
          md: "46px",
        }}
      >
        <ScanTypeHeadingWrapper
          variant="h1"
          color={theme.palette.primary.activeButton}
        >
          Select the type of the Scan
        </ScanTypeHeadingWrapper>

        <PregnancyQuestionsContainerWrapper>
          <Stack
            alignItems="center"
            justifyContent="center"
            marginY={isMobile ? "12px" : "5px"}
          >
            <Grid
              container
              columnSpacing={isMobile ? 1 : 0}
              rowSpacing={isMobile ? 2 : 5}
              alignItems="center"
              justifyContent={isMobile ? "left" : "flex-start"}
              sx={{
                paddingY: "10px 30px",
                width: isMobile ? "100%" : "100%",
                "& .MuiGrid-item": { marginBottom: isMobile ? "0" : "-20px" },
              }}
            >
              {pregnancyList?.map((item, index) => (
                <Grid
                  item
                  xs={isMobile ? 12 / 3 : 12 / 3}
                  md={isMobile ? 12 / 3 : 12 / 3}
                  key={index}
                  align="center"
                >
                  <PregnancyOptionsBox
                    theme={theme}
                    data={item}
                    isMobile={isMobile}
                    handleClick={() => {
                      setSelectedPregnancyWeeks(item?.name);
                      if (item?.name == "Others") {
                        SetPregnancyInput("");
                        setTimeout(handleAutoFocus, 100);
                      } else {
                        SetPregnancyWeeks(item?.weeks);
                        SetPregnancyInput(item?.name);
                      }
                    }}
                    isSelected={selectedPregnancyWeeks == item?.name}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
          <InputTextContainerWrapper
            sx={{
              marginTop: isMobile ? "2vh" : "5vh",
              display: "grid",
            }}
          >
            <Stack
              padding={"5px"}
              width={
                selectedPregnancyWeeks != "Others"
                  ? "99%"
                  : isMobile
                    ? "100%"
                    : "100%"
              }
              display={selectedPregnancyWeeks != "Others" ? "none" : "flex"}
            >
              {selectedPregnancyWeeks == "Others" && !isMobile && (
                <InputBoxLabelWrapper
                  variant="subtitle"
                  marginBottom={"10px"}
                  sx={{
                    color: theme.palette.primary.activeButton,
                  }}
                >
                  Please type the Requested Scan as mentioned in your refferal
                  letter <span style={{ color: "red" }}>*</span>
                </InputBoxLabelWrapper>
              )}

              <CustomTextField
                inputRef={inputRef}
                value={pregnancyInput}
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
                sx={{ margin: "0px", backgroundColor: "white" }}
                padding="0px"
                name="answer"
                InputProps={
                  selectedPregnancyWeeks != "Others" && {
                    readOnly: true,
                  }
                }
                onChange={(e) => {
                  const { selectionStart } = e.target; // Get cursor position
                  SetPregnancyInput(e.target.value.toUpperCase());
                  setTimeout(() => {
                    inputRef.current.setSelectionRange(selectionStart, selectionStart);
                  }, 0);
                }}
              />
            </Stack>

            <div
              style={{
                marginTop:
                  selectedPregnancyWeeks == "Others"
                    ? isMobile
                      ? "5px"
                      : "10px"
                    : "0px",
                marginLeft: isMobile ? "5px" : "0px",
                display:
                  selectedPregnancyWeeks != "Others"
                    ? "none"
                    : isMobile
                      ? "flex"
                      : "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
                gap: isMobile ? "5px" : "10px",
                width: isMobile ? "99%" : "99%",
              }}
            >
              <InputBoxLabelWrapper>
                <WeeksInputContainerWrapper>
                  Specify Weeks/Days of Pregnancy{" "}
                  <span style={{ color: "red" }}>*</span>
                </WeeksInputContainerWrapper>
              </InputBoxLabelWrapper>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
                width={
                  isMobile
                    ? "65%"
                    : screenHeight < 600
                      ? "45%"
                      : screenHeight < 700
                        ? "45%"
                        : screenHeight < 800
                          ? "35%"
                          : screenHeight < 900
                            ? "45%"
                            : "25%"
                }
              >
                <div>
                  <CustomTextField
                    value={pregnancyWeeks}
                    height={
                      isMobile
                        ? "35px"
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
                    InputLabelProps={{
                      style: {
                        // marginTop:
                        //   isFocused === "1st" ? 0 : !pregnancyWeeks ? "-10px" : 0,
                        fontSize:
                          screenHeight < 600
                            ? "12px"
                            : screenHeight < 700
                              ? "14px"
                              : screenHeight < 800
                                ? "14px"
                                : "14px",
                      },
                    }}
                    type="number"
                    placeholder={isMobile ? "Weeks" : "Weeks"}
                    Floatinglabel="Weeks"
                    showLabel={true}
                    variant="outlined"
                    inputProps={{
                      inputMode: "numeric", // Helps on mobile for numeric keypad
                      pattern: "[0-9]*",
                      min: 0,
                      // paddingBottom: "10px",
                    }}
                    onChange={(e) => {
                      if (e?.target?.value === "") {
                        SetPregnancyWeeks(0);
                        setRemainingDays(42 * 7);
                        return;
                      }
                      SetPregnancyWeeks(e?.target?.value);

                      setRemainingDays(42 * 7 - e?.target?.value * 7);
                    }}
                  />
                  {pregnancyWeeks > 42 && (
                    <p style={{ fontSize: "10px", color: "red" }}>
                      Maximum 42 weeks allowed
                    </p>
                  )}
                </div>

                <div>
                  <CustomTextField
                    onFocus={() => {
                      setIsFocused("2nd");
                    }}
                    onBlur={() => setIsFocused(null)}
                    value={pregnancyDays}
                    type="number"
                    height={
                      isMobile
                        ? "35px"
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
                      margin: "0px",
                      backgroundColor: "white",
                    }}
                    padding="10px"
                    placeholder={isMobile ? "Days" : "Days"}
                    Floatinglabel="Days"
                    showLabel={false}
                    variant="outlined"
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      min: 0,
                      readOnly: selectedPregnancyWeeks != "Others" && true,
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize:
                          screenHeight < 600
                            ? "12px"
                            : screenHeight < 700
                              ? "14px"
                              : screenHeight < 800
                                ? "14px"
                                : "14px",
                      },
                    }}
                    onChange={(e) => {
                      {
                        if (e?.target?.value === "") {
                          SetPregnancyDays(0);
                          return;
                        }
                        SetPregnancyDays(e?.target?.value);
                      }
                    }}
                  />
                  {pregnancyDays !== null && pregnancyDays > remainingDays && (
                    <p style={{ fontSize: "10px", color: "red" }}>
                      Days exceed the limit of 42 weeks
                    </p>
                  )}
                </div>
              </Box>
            </div>
          </InputTextContainerWrapper>

          <MultiPregnancyBoxWrapper>
            <Checkbox
              checked={isMultiPregnancy}
              onChange={(e) => {
                if (isMultiPregnancy) {
                  setIsMultiPregnancy(false);
                } else {
                  setIsMultiPregnancy(true);
                }
              }}
            />
            <CheckBoxLabelWrapper>Twin/Multiple Pregnancy</CheckBoxLabelWrapper>
          </MultiPregnancyBoxWrapper>

          {isErrorPresent && (
            <Stack marginTop="5px" alignItems="left">
              <ErrorState errorMsg={errorMessage} isTextAlignCenter />
            </Stack>
          )}

          <ButtonContainerWrapper>
            <CustomaCssButtonWrapper
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
                useAppDispatch(
                  setPregnancyWeeksAndDays({
                    pregnancyWeeks: `${pregnancyWeeks} Weeks`,
                    pregnancyDays: `${pregnancyDays} Days`,
                  })
                );
                if (currentInternalState == "CHECK_IF_PREGNANCY_SCAN") {
                  handleSubmit(handleAnswer("yes"));
                  return;
                }
                if (pregnancyInput) {
                  handleSubmit(handleAnswer(pregnancyInput));
                } else {
                  handleSubmit(handleAnswer("pregnancy"));
                }
              }}
              disabled={
                isHandleUtteranceApiPending ||
                parseInt(pregnancyWeeks) * 7 + parseInt(pregnancyDays) > 294 ||
                pregnancyInput === "" ||
                parseInt(pregnancyWeeks) * 7 + parseInt(pregnancyDays) === 0
                // (pregnancyWeeks === "" && pregnancyDays === "")
              }
            >
              {isHandleUtteranceApiPending ? <LoaderDots /> : "Confirm"}
            </CustomaCssButtonWrapper>
          </ButtonContainerWrapper>
        </PregnancyQuestionsContainerWrapper>
      </ContainerWrapper>
    </Stack>
  );
}

const PregnancyOptionsBox = ({
  data,
  handleClick,
  isSelected,
  theme,
  isMobile,
}) => {
  const PregnancyOptionsContainerWrapper = isMobile
    ? PregnancyOptionsContainerMobile
    : PregnancyOptionsContainerDesktop;
  const PregnancyOptionsTextWrapper = isMobile
    ? PregnancyOptionsTextMobile
    : PregnancyOptionsTextDesktop;
  const PregnancyOptionsWeeksWrapper = isMobile
    ? PregnancyOptionsWeeksMobile
    : PregnancyOptionsWeeksDesktop;
  return (
    <PregnancyOptionsContainerWrapper
      justifyContent={data.image ? "space-between" : "center"}
      alignItems={data.image ? "flex-start" : "center"}
      sx={{
        backgroundColor: isSelected
          ? theme?.palette?.primary?.activeButton
          : "white",

        "&:hover": {
          backgroundColor: isSelected
            ? theme?.palette?.primary?.activeButton
            : COLORS.GREY_3,
        },
      }}
      onClick={() => handleClick(data.name)}
    >
      {/* {data.image && (
        <Box
          sx={{
            '& svg path': {
              fill: theme.palette.primary.activeButton
            }
          }}
        >
          {data.image}
        </Box>
      )} */}

      <PregnancyOptionsTextWrapper
        sx={{
          color: isSelected ? "white" : theme?.palette?.primary?.activeButton,
          fontWeight: isSelected ? "600" : "400",
          fontSize: isMobile ? "12px" : "16px",
        }}
      >
        {data?.name}
      </PregnancyOptionsTextWrapper>
      {data?.duration && (
        <PregnancyOptionsWeeksWrapper
          sx={{
            color: isSelected ? "white" : "black",
            fontWeight: isSelected ? "600" : "400",
            fontSize: isMobile ? "12px" : "14px",
          }}
        >
          ({data?.duration})
        </PregnancyOptionsWeeksWrapper>
      )}
    </PregnancyOptionsContainerWrapper>
  );
};

export default PregnancyQuestions;
