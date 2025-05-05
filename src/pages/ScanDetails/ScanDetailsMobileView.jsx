import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Divider, MenuItem, Stack, useTheme } from "@mui/material";
import { CustomTextField } from "../../elements/CustomTextField/CustomTextField.jsx";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ScanAreaHeading,
  InputBoxContainer,
  SubmitButton,
  InputLabelText,
  ScanAreaAccordionContainer,
  GroupNameText,
  CustomScanButton,
  CustomScanSelect,
  StyledMenuItem,
  BodyPartsBox,
  BodyPartsContainer,
  GroupNameIcon,
} from "./ScanDetailsMobileView.style";

export const bodyPartSchema = yup.object().shape({
  bodyPart: yup.string().required("Scan name is required"),
});
import { bodyPartList } from "./constants.js";
import { ErrorState } from "@/components/ErrorState/ErrorState.jsx";
import { chatDetailsActions } from "@/redux/reducers/chatDetails/chatDetails.js";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/index.js";

function ScanDetailsMobileView() {
  const theme = useTheme();
  const curr = useSelector((state) => state.chatDetails);
  const navigate = useNavigate();
  const modalityList =
    bodyPartList.find((item) => item?.modalityGeneric === curr?.modalityGeneric)
      ?.list || [];
  const [selectedBodyPartList, setSelectedBodyPartList] = useState(null);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [textFieldValue, setTextFieldValue] = useState(
    `${curr.modality.toUpperCase() + " "}`
  );
  const { errorMessage, isErrorPresent, automationLogicLoadingStatus } =
    useSelector((state) => state.chatDetails);
  const [expandedAccordionName, setExpandedAccordionName] = useState(null);
  const {
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bodyPartSchema),
  });

  const {
    setPopupScreen,
    resetErrorMessage,
    setBotState,
    setInjectionBiopsyModalityText,
  } = chatDetailsActions;

  const handlePartSelection = async (partName) => {
    if (partName == `${curr.modality.toUpperCase()} Pregnancy`) {
      navigate("/questions/pregnancy");
      return;
    }
    if (partName?.toLowerCase().includes("pregnancy")) {
      navigate("/questions/pregnancy");
      return;
    }

    if (
      partName?.toLowerCase().includes("injection") ||
      partName?.toLowerCase().includes("biopsy")
    ) {
      useAppDispatch(
        setBotState({
          botState: "/biopsy-injection",
          responseCode: "/biopsy-injection",
        })
      );
      useAppDispatch(
        setInjectionBiopsyModalityText({
          injectionBiopsyModality: curr.modality.toUpperCase(),
          injectionBiopsyText: partName?.toLowerCase().includes("injection")
            ? "Injection"
            : "Biopsy",
        })
      );
      navigate("/biopsy-injection");
      return;
    }

    setIsHandleUtteranceApiPending(true);
    await useHandleUtterance({
      conversation_id: curr.conversationId,
      utterance: partName ? partName : selectedBodyPart,
    });
    setIsHandleUtteranceApiPending(false);
  };

  const handleAccordionChange = (newExpanded) => {
    console.log(newExpanded);
    setExpandedAccordionName(newExpanded ? newExpanded : null);
  };

  const handleOptionChange = (e) => {
    setSelectedBodyPart(e?.target?.value);
    setTextFieldValue(
      curr.modality.toUpperCase() + " " + e?.target?.value?.toUpperCase()
    );
  };

  useEffect(() => {
    const handleKeyDown = (evt) => {
      evt = evt || window.event;
      if (evt.key === "Enter") {
        const scanName = textFieldValue;
        if (scanName) {
          handlePartSelection(textFieldValue);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  if (isHandleUtteranceApiPending || automationLogicLoadingStatus)
    return <CustomLoader />;

  return (
    <Box>
      <ScanAreaHeading
        variant="h2"
        sx={{
          color: theme.palette.primary.activeButton,
          fontWeight: 400,
        }}
      >
        Select scan area <div style={{ fontStyle: "italic", display: "inline", fontSize: "12px" }}>(Scroll to view more region )</div>
      </ScanAreaHeading>

      <ScanAreaAccordionContainer>
        {modalityList.map((item, index) => {
          return (
            <Accordion
              expanded={expandedAccordionName == item.groupName}
              onChange={() => {
                handleAccordionChange(item.groupName);
                setSelectedBodyPartList(item);
              }}
            >
              <AccordionSummary
                onClick={() => {
                  if (expandedAccordionName == item.groupName) {
                    setExpandedAccordionName(null);
                  }
                }}
              >
                <GroupNameIcon
                  sx={{
                    "& svg path": {
                      fill: theme.palette.primary.activeButton,
                    },
                  }}
                  onClick={() => {
                    if (item?.groupName != selectedBodyPartList?.groupName) {
                      setSelectedBodyPart(null);
                      setTextFieldValue(curr.modality.toUpperCase());
                    }
                    setSelectedBodyPartList(item);
                  }}
                >
                  {item.icon}
                </GroupNameIcon>

                <GroupNameText
                  sx={{
                    fontWeight:
                      expandedAccordionName == item.groupName ? "600" : "400",
                  }}
                >
                  {item.groupName}
                </GroupNameText>
              </AccordionSummary>

              <AccordionDetails>
                <BodyPartsContainer container spacing={2}>
                  {selectedBodyPartList?.fields?.map(
                    ({ icon, label, options, fontSize }) => {
                      const checkIsSelectedBodyPartPresentInOptions =
                        options?.some((option) => option === selectedBodyPart);
                      return (
                        <BodyPartsBox item>
                          {/* show this Button if laterality is not present */}
                          {!options && (
                            <CustomScanButton
                              selected={selectedBodyPart === label}
                              onClick={() => {
                                setSelectedBodyPart(label);
                                setTextFieldValue(
                                  curr.modality.toUpperCase() +
                                  " " +
                                  label?.toUpperCase()
                                );
                              }}
                            >
                              {label}
                            </CustomScanButton>
                          )}
                          {/* show this Select Box if laterality is present */}
                          {options && options?.length > 0 && (
                            <CustomScanSelect
                              key={label}
                              defaultValue={label}
                              onChange={handleOptionChange}
                              selected={
                                selectedBodyPart === label ||
                                checkIsSelectedBodyPartPresentInOptions
                              }
                            >
                              <MenuItem
                                sx={{
                                  fontFamily: "Inter Variable",
                                  fontSize: "14px",
                                  display: "none",
                                }}
                                value={label}
                              >
                                {label}
                              </MenuItem>
                              {options &&
                                options?.map((bodyPart) => {
                                  return (
                                    <StyledMenuItem value={bodyPart}>
                                      {bodyPart}
                                    </StyledMenuItem>
                                  );
                                })}
                            </CustomScanSelect>
                          )}
                        </BodyPartsBox>
                      );
                    }
                  )}
                </BodyPartsContainer>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </ScanAreaAccordionContainer>

      <Divider
        sx={{
          backgroundColor: theme.palette.primary.activeButton,
          marginTop: "10px",
        }}
      ></Divider>
      <InputBoxContainer>
        <CustomTextField
          height="35px"
          name="bodyPart"
          value={textFieldValue}
          sx={{
            fontSize: "10px !important", // set the font size here
          }}
          label={
            <InputLabelText
              variant="h2"
              sx={{
                color: theme.palette.primary.activeButton,
                fontWeight: 400,
              }}
            >
              Or Type requested scan details
            </InputLabelText>
          }
          onChange={(e) => {
            setTextFieldValue(e.target.value?.toUpperCase());
          }}
        />
        <SubmitButton
          variant="contained"
          disabled={
            selectedBodyPart
              ? false
              : textFieldValue?.replace(/\s+/g, "").toUpperCase() !=
                curr.modality?.replace(/\s+/g, "")?.toUpperCase()
                ? false
                : true
          }
          onClick={() => {
            if (selectedBodyPartList?.groupName == "Others") {
              handlePartSelection(textFieldValue);
            } else {
              handlePartSelection(textFieldValue);
            }
          }}
        >
          Submit
        </SubmitButton>
      </InputBoxContainer>
      {curr?.responseCode.includes("img_service_request.sr.bodypart_2") &&
        !isErrorPresent && (
          <Stack alignItems="left">
            <ErrorState errorMsg="Invalid scan entered. Please enter the correct scan details." />
          </Stack>
        )}
      {isErrorPresent && (
        <Stack alignItems="left">
          <ErrorState errorMsg={errorMessage} />
        </Stack>
      )}
    </Box>
  );
}

export default ScanDetailsMobileView;
