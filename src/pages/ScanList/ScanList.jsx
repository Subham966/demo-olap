import { CustomTextField } from "@/elements/CustomTextField";
import {
  Box,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSelector } from "react-redux";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import SearchArrow from "@/assets/SearchArrow.svg?react";
import { getModalityList } from "./ScanListData";
import { COLORS } from "@/theme";
import { useNavigate } from "react-router-dom";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux";
import { HandleNer } from "@/api/nerApi/HandleNer";
import {
  CustomSearchArrowMobile,
  CustomTextFieldBoxMobile,
  DividerLineMobile,
  IconBoxMobile,
  ModalityBoxContainerMobile,
  ModalityBoxTextMobile,
  ModalityInputHeadingBoxMobile,
  NextButtonTextMobile,
  ScanListHeadingMobile,
  ScanListParentBoxMobile,
  ScanSubtitleHeadingMobile,
  ScanTypeAreaContainerMobile,
  SelectScanHeadingMobile,
  StyledMenuItemMobile,
} from "./ScanList.mobile.style";
import {
  CustomSearchArrowDesktop,
  CustomTextFieldBoxDesktop,
  DividerLineDesktop,
  IconBoxDesktop,
  ModalityBoxContainerDesktop,
  ModalityBoxTextDesktop,
  ModalityInputHeadingBoxDesktop,
  NextButtonTextDesktop,
  ScanListHeadingDesktop,
  ScanListParentBoxDesktop,
  ScanSubtitleHeadingDesktop,
  ScanTypeAreaContainerDesktop,
  SelectScanHeadingDesktop,
  StyledMenuItemDesktop,
} from "./ScanList.desktop.style";

export const bodyPartSchema = yup.object().shape({
  scanName: yup.string(),
});

function ScanList() {
  const curr = useSelector((state) => state.chatDetails);
  const {
    setPopupScreen,
    setInjectionBiopsyModalityText,
    setRequestedModality,
    setErrorMessage,
    setBotState,
  } = chatDetailsActions;
  const {
    errorMessage,
    isErrorPresent,
    loading,
    automationLogicLoadingStatus,
  } = useSelector((state) => state.chatDetails);
  const { screenHeight } = useSelector((state) => state.screenSize);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  // State to control menu options and anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(bodyPartSchema),
  });

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
    useAppDispatch(setRequestedModality(scanName));

    setIsHandleUtteranceApiPending(true);
    await useHandleUtterance({
      conversation_id: curr.conversationId,
      utterance: scanName,
    });
    setIsHandleUtteranceApiPending(false);
  };

  const handleEnteredScan = async (data) => {
    if (isHandleUtteranceApiPending) {
      console.log("isHandleUtteranceApiPending", isHandleUtteranceApiPending);
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

  const ScanListHeadingWrapper = isMobile
    ? ScanListHeadingMobile
    : ScanListHeadingDesktop;
  const ScanSubtitleHeadingWrapper = isMobile
    ? ScanSubtitleHeadingMobile
    : ScanSubtitleHeadingDesktop;
  const StyledMenuItemWrapper = isMobile
    ? StyledMenuItemMobile
    : StyledMenuItemDesktop;
  const ScanListParentBoxWrapper = isMobile
    ? ScanListParentBoxMobile
    : ScanListParentBoxDesktop;
  const ModalityInputHeadingBoxWrapper = isMobile
    ? ModalityInputHeadingBoxMobile
    : ModalityInputHeadingBoxDesktop;
  const CustomTextFieldBoxWrapper = isMobile
    ? CustomTextFieldBoxMobile
    : CustomTextFieldBoxDesktop;
  const SelectScanHeadingWrapper = isMobile
    ? SelectScanHeadingMobile
    : SelectScanHeadingDesktop;
  const DividerLineWrapper = isMobile ? DividerLineMobile : DividerLineDesktop;
  const CustomSearchArrowWrapper = isMobile
    ? CustomSearchArrowMobile
    : CustomSearchArrowDesktop;
  const NextButtonTextWrapper = isMobile
    ? NextButtonTextMobile
    : NextButtonTextDesktop;
  const ScanTypeAreaContainerWrapper = isMobile
    ? ScanTypeAreaContainerMobile
    : ScanTypeAreaContainerDesktop;

  if (isHandleUtteranceApiPending || loading || automationLogicLoadingStatus)
    return <CustomLoader />;

  return (
    <Stack>
      {/* Title */}
      <Stack justifyContent="center" gap="10px">
        <ScanListHeadingWrapper
          variant="h1"
          sx={{
            color: theme.palette.primary.activeButton,
          }}
        >
          Provide details for your Scan
        </ScanListHeadingWrapper>
      </Stack>

      <ScanListParentBoxWrapper>
        <ModalityInputHeadingBoxWrapper
          variant="h2"
          color={theme.palette.primary.activeButton}
        >
          Type Requested Scan Details{" "}
          {!isMobile && <span>(as mentioned in your referral letter)</span>}
        </ModalityInputHeadingBoxWrapper>
        <Stack backgroundColor="white">
          <CustomTextFieldBoxWrapper
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
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleSubmit(handleEnteredScan)}
                  sx={{ cursor: "pointer" }}
                >
                  <NextButtonTextWrapper
                    sx={{
                      color: theme.palette.primary.activeButton,
                    }}
                  >
                    Next
                  </NextButtonTextWrapper>
                  <Box
                    sx={{
                      "& svg path": {
                        fill: theme.palette.primary.activeButton,
                      },
                    }}
                  >
                    <CustomSearchArrowWrapper />
                  </Box>
                </InputAdornment>
              ),
            }}
            control={control}
            isFormControl
            errors={errors}
            value={curr?.requestedModality?.toUpperCase()}
            name="scanName"
          />
        </Stack>
        <Stack></Stack>
        {/* Error Message */}
        {(curr?.responseCode.includes("img_service_request.sr.modality") ||
          curr?.responseCode.includes("img_service_request.sr.modality_2") ||
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
        <ScanSubtitleHeadingWrapper
          variant="subtitle"
          color={theme.palette.primary.activeButton}
        >
          <Stack alignItems="center">
            <DividerLineWrapper
              sx={{
                "&::before, &::after": {
                  borderColor: theme.palette.primary.activeButton,
                },
              }}
            >
              OR
            </DividerLineWrapper>
          </Stack>
        </ScanSubtitleHeadingWrapper>
        <SelectScanHeadingWrapper
          color={theme.palette.primary.activeButton}
          variant="h2"
        >
          {" "}
          Select a scan type{" "}
        </SelectScanHeadingWrapper>

        {/* Scan Type Options */}
        <ScanTypeAreaContainerWrapper>
          <Stack alignItems="center" justifyContent="center">
            <Grid
              container
              columnSpacing={isMobile ? 1 : 0}
              rowSpacing={isMobile ? 2 : 5}
              alignItems="center"
              justifyContent={isMobile ? "left" : "flex-start"}
              sx={{
                paddingY: "10px 20px",
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
                      index={index}
                      data={item}
                      handleClick={handleScanSelection}
                      isMobile={isMobile}
                      isTablet={isTablet}
                      setAnchorEl={setAnchorEl}
                      setShowMenuOptions={setShowMenuOptions}
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
                      injectionBiopsyModality: "CT",
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
        </ScanTypeAreaContainerWrapper>
      </ScanListParentBoxWrapper>
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
  index

}) => {
  const theme = useTheme();

  const ModalityBoxContainerWrapper = isMobile
    ? ModalityBoxContainerMobile
    : ModalityBoxContainerDesktop;
  const ModalityBoxTextWrapper = isMobile
    ? ModalityBoxTextMobile
    : ModalityBoxTextDesktop;
  const IconBoxWrapper = isMobile ? IconBoxMobile : IconBoxDesktop;

  return (
    <ModalityBoxContainerWrapper
      index={index}
      justifyContent={data.image ? "space-between" : "center"}
      alignItems={data.image ? "flex-start" : "center"}
      key={data?.name}
      sx={{
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: COLORS.GREY_3,
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
              fill: data?.name != "EOS" && theme.palette.primary.activeButton,
              height: "10px",
            },
          }}
        >
          {data.image}
        </IconBoxWrapper>
      )}
      <ModalityBoxTextWrapper
        sx={{ textAlign: "left" }}>{data.name}</ModalityBoxTextWrapper>
    </ModalityBoxContainerWrapper>
  );
};

export default ScanList;
