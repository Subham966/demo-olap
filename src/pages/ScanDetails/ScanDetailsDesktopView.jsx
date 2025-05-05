import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Divider,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { CustomTextField } from "../../elements/CustomTextField/CustomTextField";
import {
  BodyPartContainer,
  BodyPartsBox,
  BodyPartsContainer,
  BodyPartsParentBox,
  Container,
  CustomScanButton,
  CustomScanSelect,
  DividerLine,
  GroupNameContainer,
  Helptext,
  InputBoxHeadingText,
  OtherGroupNameContainer,
  ScanAreaHeading,
  SelectScanAreaBox,
  StyledBodyPartStack,
  StyledGroupNameText,
  StyledIconContainer,
  StyledMenuItem,
  SubmitButton,
  SubmitButtonStack,
} from "./ScanDetailsDesktopView.style";
import { bodyPartList } from "./constants";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useAppDispatch } from "@/redux";

export const bodyPartSchema = yup.object().shape({
  bodyPart: yup.string().required("Scan name is required"),
});

function ScanDetailsDesktopView() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  const curr = useSelector((state) => state.chatDetails);
  const { errorMessage, isErrorPresent, automationLogicLoadingStatus } =
    useSelector((state) => state.chatDetails);
  const [selectedBodyPartList, setSelectedBodyPartList] = useState(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [isBodyPartSectionChanged, setIsBodyPartSectionChanged] =
    useState(false);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [textFieldValue, setTextFieldValue] = useState(
    `${curr.modality.toUpperCase() + " "}`
  );
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const {
    setPopupScreen,
    resetErrorMessage,
    setBotState,
    setInjectionBiopsyModalityText,
  } = chatDetailsActions;

  const {
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(bodyPartSchema),
  });

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

  const handleOptionChange = (e) => {
    setSelectedBodyPart(e?.target?.value);
    setTextFieldValue(
      curr.modality.toUpperCase() + " " + e?.target?.value?.toUpperCase()
    );
  };

  // useEffect(()=>{
  //   useAppDispatch(
  //     setPopupScreen({
  //       showPopup: true,
  //       popupScreenName: 'ConversationTimeout'
  //     })
  //   )
  // },[])


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
    <Container>
      <SelectScanAreaCointainer
        selectedBodyPartList={selectedBodyPartList}
        setSelectedBodyPartList={setSelectedBodyPartList}
        setSelectedBodyPart={setSelectedBodyPart}
        setTextFieldValue={setTextFieldValue}
        setIsBodyPartSectionChanged={setIsBodyPartSectionChanged}
        responseCode={curr?.responseCode}
      />

      {selectedBodyPartList?.groupName && (
        <BodyPartContainer>
          {selectedBodyPartList?.groupName != "Others" && (
            <ScanAreaHeading
              variant="h2"
              sx={{
                color: theme.palette.primary.activeButton,
              }}
            >
              Select one of these options
            </ScanAreaHeading>
          )}

          <BodyPartsParentBox>
            <BodyPartsContainer
              container
              // spacing={2}
              sx={
                selectedBodyPartList?.fields?.length < 4
                  ? {
                    justifyContent: "center",
                    gap: "20px",
                  }
                  : {}
              }
            // justifyContent={"space-between"}
            >
              {selectedBodyPartList &&
                selectedBodyPartList?.fields &&
                selectedBodyPartList?.fields?.map(
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
          </BodyPartsParentBox>

          {selectedBodyPartList?.groupName != "Others" && (
            <Stack alignItems="center" marginTop="5px" marginBottom="20px">
              <DividerLine
                sx={{
                  "&::before, &::after": {
                    borderColor: theme.palette.primary.activeButton,
                  },
                }}
              >
                OR type below
              </DividerLine>
              <SubmitButtonStack>
                <InputBoxHeadingText
                  variant="subtitle"
                  marginBottom={"10px"}
                  sx={{
                    paddingTop: {
                      xs: "11px",
                      md: "02px",
                    },
                    fontFamily: "Inter Variable",
                    color: theme.palette.primary.activeButton,
                  }}
                >
                  Please complete requested scan details, as mentioned in your
                  referral letter
                </InputBoxHeadingText>
                <CustomTextField
                  value={textFieldValue}
                  border="1px solid green"
                  inputRef={inputRef}
                  height={
                    screenHeight < 700
                      ? "35px"
                      : screenHeight < 800
                        ? "40px"
                        : screenHeight < 900
                          ? "45px"
                          : "50px"
                  }
                  sx={{ margin: "0px" }}
                  padding="0px"
                  name="bodyPart"
                  onChange={(e) => {
                    const { selectionStart } = e.target; // Get cursor position
                    setTextFieldValue(e.target.value?.toUpperCase());
                    setTimeout(() => {
                      inputRef.current.setSelectionRange(selectionStart, selectionStart);
                    }, 0);
                  }}
                />
                {curr?.responseCode.includes(
                  "img_service_request.sr.bodypart_2"
                ) &&
                  !isBodyPartSectionChanged &&
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
              </SubmitButtonStack>
            </Stack>
          )}
          {selectedBodyPartList?.groupName == "Others" && (
            <Stack marginTop={"-50px"} marginBottom={"20px"}>
              <InputBoxHeadingText
                variant="subtitle"
                marginBottom={"10px"}
                sx={{
                  paddingTop: {
                    xs: "11px",
                    md: "02px",
                  },
                  fontFamily: "Inter Variable",
                  color: theme.palette.primary.activeButton,
                }}
              >
                Please complete requested scan details, as mentioned in your
                referral letter
              </InputBoxHeadingText>
              <CustomTextField
                inputRef={inputRef}
                border="1px solid green"
                height={
                  screenHeight < 700
                    ? "35px"
                    : screenHeight < 800
                      ? "40px"
                      : screenHeight < 900
                        ? "45px"
                        : "50px"
                }
                sx={{ margin: "-5px" }}
                padding="0px"
                name="bodyPart"
                value={textFieldValue}
                onChange={(e) => {
                  const { selectionStart } = e.target; // Get cursor position
                  setTextFieldValue(e.target.value?.toUpperCase());
                  setTimeout(() => {
                    inputRef.current.setSelectionRange(selectionStart, selectionStart);
                  }, 0);
                }}
              />
              {curr?.responseCode.includes(
                "img_service_request.sr.bodypart_2"
              ) &&
                !isBodyPartSectionChanged &&
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
            </Stack>
          )}
          <SubmitButton
            variant="contained"
            disabled={
              selectedBodyPart
                ? false
                : selectedBodyPartList?.groupName == "Others"
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
        </BodyPartContainer>
      )}
    </Container>
  );
}

const SelectScanAreaCointainer = ({
  selectedBodyPartList,
  setSelectedBodyPart,
  setSelectedBodyPartList,
  setTextFieldValue,
  setIsBodyPartSectionChanged,
  responseCode,
}) => {
  const theme = useTheme();
  const curr = useSelector((state) => state.chatDetails);

  return (
    <>
      <SelectScanAreaBox bodyPartSelected={selectedBodyPartList != null}>
        <ScanAreaHeading
          variant="h2"
          sx={{
            color: theme.palette.primary.activeButton,
          }}
        >
          Select scan area
        </ScanAreaHeading>

        <GroupNameContainer>
          {bodyPartList
            .find((item) => item?.modalityGeneric === curr?.modalityGeneric)
            ?.list.map((item, index) => {
              return (
                <StyledBodyPartStack
                  key={item.groupName}
                  selected={selectedBodyPartList?.groupName === item?.groupName}
                  sx={{
                    "& svg path": {
                      fill:
                        selectedBodyPartList?.groupName == item?.groupName
                          ? "white"
                          : theme.palette.primary.activeButton,
                    },
                  }}
                  onClick={() => {
                    if (item?.groupName != selectedBodyPartList?.groupName) {
                      setSelectedBodyPart(null);
                      setTextFieldValue(curr.modality.toUpperCase());
                      if (
                        responseCode.includes(
                          "img_service_request.sr.bodypart_2"
                        )
                      ) {
                        setIsBodyPartSectionChanged(true);
                      }
                    }
                    setSelectedBodyPartList(item);
                  }}
                >
                  <StyledIconContainer>{item.icon}</StyledIconContainer>
                  <StyledGroupNameText>{item.groupName}</StyledGroupNameText>
                </StyledBodyPartStack>
              );
            })}

          <OtherGroupNameContainer
            sx={{
              "& svg path": {
                fill:
                  selectedBodyPartList?.groupName == "Others"
                    ? "white"
                    : theme.palette.primary.activeButton,
              },
            }}
            otherOptionSelected={selectedBodyPartList?.groupName == "Others"}
            onClick={() => {
              setSelectedBodyPartList({ groupName: "Others" });
            }}
          >
            <StyledGroupNameText sx={{ textAlign: "center" }}>
              Others*
            </StyledGroupNameText>
          </OtherGroupNameContainer>
        </GroupNameContainer>

        <Helptext>
          Select <Box sx={{ fontWeight: "600", display: "inline" }}>Others</Box>
          , If you wish to type or the scan is for multiple bodyparts.
        </Helptext>
      </SelectScanAreaBox>
    </>
  );
};
export default ScanDetailsDesktopView;
