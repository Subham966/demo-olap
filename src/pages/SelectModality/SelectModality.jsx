import { CustomTextField } from "@/elements/CustomTextField";
import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchArrow from "@/assets/SearchArrow.svg?react";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSelector } from "react-redux";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { getModalityList } from "./SelectModalityData";
import { COLORS } from "@/theme";
import { useNavigate } from "react-router-dom";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux";
import { HandleNer } from "@/api/nerApi/HandleNer";
import {
  ButtonContainerMobile,
  CustomaCssButtonMobile,
  IconBoxMobile,
  InputBoxContainerMobile,
  ModalityBoxContainerMobile,
  ModalityBoxTextMobile,
  ScanListContainerMobile,
  ScanListHeadingMobile,
  ScanListParentBoxMobile,
  ScanSubtitleHeadingMobile,
  SelectScanHeadingMobile,
  StyledMenuItemMobile,
} from "./SelectModality.mobile.style";
import {
  ButtonContainerDesktop,
  CustomaCssButtonDesktop,
  IconBoxDesktop,
  InputBoxContainerDesktop,
  ModalityBoxContainerDesktop,
  ModalityBoxTextDesktop,
  ScanListContainerDesktop,
  ScanListHeadingDesktop,
  ScanListParentBoxDesktop,
  ScanSubtitleHeadingDesktop,
  SelectScanHeadingDesktop,
  StyledMenuItemDesktop,
} from "./SelectModality.desktop.style";

export const bodyPartSchema = yup.object().shape({
  scanName: yup.string(),
});

function SelectModality() {
  const curr = useSelector((state) => state.chatDetails);
  const {
    setPopupScreen,
    setInjectionBiopsyModalityText,
    setRequestedModality,
    setErrorMessage,
    setBotState,
  } = chatDetailsActions;
  const { errorMessage, isErrorPresent, loading } = useSelector(
    (state) => state.chatDetails
  );
  const { screenHeight } = useSelector((state) => state.screenSize);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  // State to control menu options and anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [selectedModality, setSelectedModality] = useState("");
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(bodyPartSchema),
  });
  const [isConfirmButtonDisabled, setConfirmButtonDisabled] = useState(true);

  const ModalityList = getModalityList(isMobile);

  const HandleCheckNer = (serviceName) => {
    const HandleNerData = HandleNer({
      scan: serviceName,
    });
    return HandleNerData;
  };

  const handleScanSelection = async (scanName) => {
    if (scanName == "Pregnancy") {
      navigate("/questions/pregnancy");
      return;
    }
    // useAppDispatch(setRequestedModality(`${scanName} ${curr?.requestedModality?.toUpperCase()}`))

    setValue(
      "scanName",
      `${scanName} ${curr?.requestedModality?.toUpperCase()}`
    );
    setSelectedModality(scanName);
    setConfirmButtonDisabled(false);
    // setIsHandleUtteranceApiPending(true)
    // await useHandleUtterance(
    //   {
    //   conversation_id: curr.conversationId,
    //   utterance: scanName
    // });
    // setIsHandleUtteranceApiPending(false)
  };

  const handleEnteredScan = async (data) => {
    if (isHandleUtteranceApiPending) {
      return;
    }
    setIsHandleUtteranceApiPending(true);
    let NerData = await HandleCheckNer(data?.scanName);
    let purpose_of_study = NerData?.purpose_of_study
    if (purpose_of_study == "Pregnancy" || purpose_of_study == "pregnancy") {
      setIsHandleUtteranceApiPending(false);
      navigate("/questions/pregnancy");
      return;
    }

    if (!data.scanName) {
      setIsHandleUtteranceApiPending(false);
      useAppDispatch(
        setErrorMessage({
          errorMessage: "Please provide scan details.",
        })
      );
      return;
    }

    useAppDispatch(setRequestedModality(data.scanName));

    await useHandleUtterance({
      conversation_id: curr.conversationId,
      utterance: data.scanName,
    });
    setIsHandleUtteranceApiPending(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setShowMenuOptions(false);
  };

  useEffect(() => {
    const handleKeyDown = (evt) => {
      evt = evt || window.event;
      if (evt.key === "Enter") {
        const scanName = getValues("scanName");
        if (scanName) {
          handleSubmit(handleEnteredScan({ scanName }));
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const ScanListContainerWrapper = isMobile
    ? ScanListContainerMobile
    : ScanListContainerDesktop;
  const ScanListHeadingWrapper = isMobile
    ? ScanListHeadingMobile
    : ScanListHeadingDesktop;
  const ScanListParentBoxWrapper = isMobile
    ? ScanListParentBoxMobile
    : ScanListParentBoxDesktop;
  const ScanSubtitleHeadingWrapper = isMobile
    ? ScanSubtitleHeadingMobile
    : ScanSubtitleHeadingDesktop;
  const SelectScanHeadingWrapper = isMobile
    ? SelectScanHeadingMobile
    : SelectScanHeadingDesktop;
  const StyledMenuItemWrapper = isMobile
    ? StyledMenuItemMobile
    : StyledMenuItemDesktop;

  const InputBoxContainerWrapper = isMobile
    ? InputBoxContainerMobile
    : InputBoxContainerDesktop;

  if (isHandleUtteranceApiPending || loading) return <CustomLoader />;

  return (
    <Stack>
      <Stack
        sx={{ display: !isMobile && "none" }}
        justifyContent="center"
        gap="10px"
      >
        <ScanListHeadingWrapper
          variant="h1"
          sx={{
            // fontSize: "16px !important",
            color: theme.palette.primary.activeButton,
          }}
        >
          Provide details for your scan
        </ScanListHeadingWrapper>
        <Stack backgroundColor="white" sx={{ mb: 1 }}>
          <CustomTextField
            sx={{
              "& svg path": {
                fill: theme.palette.primary.activeButton,
              },
              marginTop: "0px",
              "& .MuiOutlinedInput-root": (curr?.responseCode.includes(
                "img_service_request.sr.modality"
              ) ||
                curr?.responseCode.includes(
                  "img_service_request.sr.modality_2"
                ) ||
                curr?.responseCode.includes(
                  "img_service_request.sr.bodypart_and_modality_2"
                )) && {
                ...(curr?.responseCode.includes(
                  "img_service_request.sr.modality"
                ) ||
                  curr?.responseCode.includes(
                    "img_service_request.sr.modality_2"
                  ) ||
                  (curr?.responseCode.includes(
                    "img_service_request.sr.bodypart_and_modality_2"
                  ) && {
                    border: "1px solid red",
                    borderRadius: "5px",
                  })),
              },
            }}
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
            control={control}
            isFormControl
            errors={errors}
            value={curr?.requestedModality?.toUpperCase()}
            onChange={() => {
              if (
                getValues("scanName")?.toUpperCase() ==
                curr?.requestedModality?.toUpperCase()
              ) {
                setConfirmButtonDisabled(true);
              } else {
                setConfirmButtonDisabled(false);
              }
              if (!getValues("scanName").includes(selectedModality)) {
                setSelectedModality("");
              }
            }}
            name="scanName"
          />
          {/* Error Message */}
          {(curr?.responseCode.includes("img_service_request.sr.modality_2") ||
            curr?.responseCode.includes(
              "img_service_request.sr.bodypart_and_modality_2"
            )) &&
            !isErrorPresent && (
              <Stack>
                <ErrorState errorMsg="Please type the correct details, as mentioned in your referral letter" />
              </Stack>
            )}
          {isErrorPresent && (
            <Stack>
              <ErrorState errorMsg={errorMessage} />
            </Stack>
          )}
        </Stack>
      </Stack>

      <ScanListParentBoxWrapper sx={{ height: isMobile && "280px" }}>
        <Stack></Stack>
        <SelectScanHeadingWrapper
          sx={{ mb: 2 }}
          color={theme.palette.primary.activeButton}
          variant="h2"
        >
          {" "}
          Please select the modality
        </SelectScanHeadingWrapper>

        {/* Scan Type Options */}
        <ScanListContainerWrapper
          overflow={"auto"}
          paddingTop={isMobile ? "2px" : "2px"}
          marginBottom={isMobile ? "10px" : "0px"}
        >
          <Stack alignItems="center" justifyContent="center">
            <Grid
              container
              columnSpacing={isMobile ? 1 : 0}
              rowSpacing={isMobile ? 2 : 5}
              alignItems="center"
              justifyContent={isMobile ? "left" : "flex-start"}
              sx={{
                paddingY: "10px 30px",
                "& .MuiGrid-item": { marginBottom: isMobile ? "0" : "-20px" }
              }}
            >
              {ModalityList?.map((item, index) => (
                item?.visible === true && (
                  <Grid
                    item
                    xs={isMobile ? 12 / 4 : isTablet ? 12 / 4 : index < 5 ? 12 / 5 : 12 / 6}
                    md={isMobile ? 12 / 4 : isTablet ? 12 / 4 : index < 5 ? 12 / 5 : 12 / 6}
                    key={index}
                    align="center"
                  >
                    <ModalityBox
                      data={item}
                      handleClick={handleScanSelection}
                      isMobile={isMobile}
                      isTablet={isTablet}
                      setAnchorEl={setAnchorEl}
                      setShowMenuOptions={setShowMenuOptions}
                      selectedModality={selectedModality}
                      index={index}
                    />
                  </Grid>
                )))}
            </Grid>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={showMenuOptions}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <StyledMenuItemWrapper
                sx={{
                  fontWeight: "500",
                }}
                onClick={() => {
                  handleCloseMenu();
                  useAppDispatch(
                    setInjectionBiopsyModalityText({
                      injectionBiopsyModality: "Ultrasound",
                      injectionBiopsyText: "",
                    })
                  );
                  navigate("/biopsy-injection");
                  useAppDispatch(
                    setBotState({
                      botState: "/biopsy-injection",
                      responseCode: "/biopsy-injection",
                    })
                  );
                }}
              >
                Ultrasound Injection/Biopsy
              </StyledMenuItemWrapper>
              <StyledMenuItemWrapper
                sx={{
                  fontWeight: "500",
                }}
                onClick={() => {
                  handleCloseMenu();
                  useAppDispatch(
                    setInjectionBiopsyModalityText({
                      injectionBiopsyModality: "Ultrasound",
                      injectionBiopsyText: "",
                    })
                  );
                  navigate("/biopsy-injection");
                }}
              >
                CT Injection/Biopsy
              </StyledMenuItemWrapper>
              <StyledMenuItemWrapper
                sx={{
                  fontStyle: "italic",
                }}
                onClick={() => {
                  handleCloseMenu();
                  navigate("/biopsy-injection");
                  useAppDispatch(
                    setInjectionBiopsyModalityText({
                      injectionBiopsyModality: "",
                      injectionBiopsyText: "",
                    })
                  );
                  useAppDispatch(
                    setBotState({
                      botState: "/biopsy-injection",
                      responseCode: "/biopsy-injection",
                    })
                  );
                }}
              >
                Other Injection/Biopsy
              </StyledMenuItemWrapper>
            </Menu>
          </Stack>
        </ScanListContainerWrapper>
      </ScanListParentBoxWrapper>
      <InputBoxContainerWrapper
        justifyContent="center"
        gap="10px"
        sx={{
          display: isMobile && "none",
        }}
      >
        <ScanListHeadingWrapper
          variant="h1"
          sx={{
            color: theme.palette.primary.activeButton,
            textAlign: "left",
          }}
        >
          Please confirm the requested scan details (as mentioned in your
          referral letter)
        </ScanListHeadingWrapper>
        <Stack
          backgroundColor="white"
          sx={{ padding: "0 10px", mt: !isMobile && -2 }}
        >
          <CustomTextField
            sx={{
              "& svg path": {
                fill: theme.palette.primary.activeButton,
              },
              marginTop: "0px",
              "& .MuiOutlinedInput-root": (curr?.responseCode.includes(
                "img_service_request.sr.modality"
              ) ||
                curr?.responseCode.includes(
                  "img_service_request.sr.modality_2"
                ) ||
                curr?.responseCode.includes(
                  "img_service_request.sr.bodypart_and_modality_2"
                )) && {
                ...(curr?.responseCode.includes(
                  "img_service_request.sr.modality"
                ) ||
                  curr?.responseCode.includes(
                    "img_service_request.sr.modality_2"
                  ) ||
                  (curr?.responseCode.includes(
                    "img_service_request.sr.bodypart_and_modality_2"
                  ) && {
                    border: "1px solid red",
                    borderRadius: "5px",
                  })),
              },
            }}
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
            control={control}
            isFormControl
            errors={errors}
            value={curr?.requestedModality?.toUpperCase()}
            onChange={() => {
              if (
                getValues("scanName")?.toUpperCase() ==
                curr?.requestedModality?.toUpperCase()
              ) {
                setConfirmButtonDisabled(true);
              } else {
                setConfirmButtonDisabled(false);
              }
              if (!getValues("scanName").includes(selectedModality)) {
                setSelectedModality("");
              }
            }}
            name="scanName"
          />
          {/* Error Message */}
          {(curr?.responseCode.includes("img_service_request.sr.modality_2") ||
            curr?.responseCode.includes(
              "img_service_request.sr.bodypart_and_modality_2"
            )) &&
            !isErrorPresent && (
              <Stack>
                <ErrorState errorMsg="Please type the correct details, as mentioned in your referral letter" />
              </Stack>
            )}
          {isErrorPresent && (
            <Stack>
              <ErrorState errorMsg={errorMessage} />
            </Stack>
          )}
        </Stack>
      </InputBoxContainerWrapper>
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
            if (getValues("scanName")) {
              handleSubmit(
                handleEnteredScan({ scanName: getValues("scanName") })
              );
            }
          }}
          disabled={
            isHandleUtteranceApiPending
              ? isHandleUtteranceApiPending
              : isConfirmButtonDisabled
          }
        >
          {isHandleUtteranceApiPending ? <LoaderDots /> : "Confirm"}
        </CustomaCssButtonWrapper>
      </ButtonContainerWrapper>
    </Stack>
  );
}

const ModalityBox = ({
  data,
  handleClick,
  isMobile,
  isTablet,
  setShowMenuOptions,
  setAnchorEl,
  selectedModality,
  index
}) => {
  const theme = useTheme();

  const IconBoxWrapper = isMobile ? IconBoxMobile : IconBoxDesktop;
  const ModalityBoxContainerWrapper = isMobile
    ? ModalityBoxContainerMobile
    : ModalityBoxContainerDesktop;
  const ModalityBoxTextWrapper = isMobile
    ? ModalityBoxTextMobile
    : ModalityBoxTextDesktop;

  return (
    <ModalityBoxContainerWrapper
      visibility={data?.visible ? data?.visible : true}
      justifyContent={data.image ? "space-between" : "center"}
      alignItems={data.image ? "flex-start" : "center"}
      key={data?.name}
      index={index}
      sx={{
        visibility: data?.visible ? data?.visible : true,
        backgroundColor:
          selectedModality == data.name
            ? theme.palette.primary.activeButton
            : "white",
        "&:hover": {
          backgroundColor:
            selectedModality == data.name
              ? theme.palette.primary.activeButton
              : COLORS.GREY_3,
        },
      }}
      onClick={(e) => {
        if (data?.applyCustomLogic) {
          setAnchorEl(e.currentTarget); // Set the clicked element as anchor
          setShowMenuOptions(true); // Show menu options if custom logic applies
        } else {
          handleClick(data.name);
        }
      }}
    >
      {data.image && (
        <IconBoxWrapper
          sx={{
            "& svg path": {
              fill:
                selectedModality == data.name
                  ? "white"
                  : data?.name != "EOS" && theme.palette.primary.activeButton,
            },
          }}
        >
          {data.image}
        </IconBoxWrapper>
      )}
      <ModalityBoxTextWrapper color={selectedModality == data.name && "white"} sx={{ textAlign: "left" }}>
        {data.name}
      </ModalityBoxTextWrapper>
    </ModalityBoxContainerWrapper>
  );
};

export default SelectModality;
