import {
  fetchAvailableCenters,
  useGetAvailabilityCalendar,
} from "@/api/calendar/HandleCalendar.api";
import LocationIcon from "@/assets/LocationIcon.svg?react";
import ShareLocation from "@/assets/ShareLocation.svg?react";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { CustomTextField } from "@/elements/CustomTextField";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { get, isEqual } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UseSearchLocation } from "./SelectCenter.api";
import { COLORS } from "@/theme";
import { CustomButton } from "@/elements/CustomButton";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import {
  CenterAddressTextMobile,
  CenterNameTextMobile,
  CustomShareLocationIconMobile,
  DistanceTextMobile,
  HeaderContainerMobile,
  HeadingLabelContainerMobile,
  HeadingLabelTextMobile,
  HeadingTextMobile,
  LocationBoxContainerMobile,
  LocationBoxMobile,
  NearbyCenterListMobile,
  NextSlotTimeTextMobile,
  SelectAllCenterBoxMobile,
  SelectAllCenterButtonTextMobile,
  SelectMobile,
} from "./SelectCenter.mobile.style";
import {
  CenterAddressTextDesktop,
  CenterNameTextDesktop,
  CustomShareLocationIconDesktop,
  DistanceTextDesktop,
  HeaderContainerDesktop,
  HeadingLabelContainerDesktop,
  HeadingLabelTextDesktop,
  HeadingTextDesktop,
  LocationBoxContainerDesktop,
  LocationBoxDesktop,
  NearbyCenterListDesktop,
  NextSlotTimeTextDesktop,
  SelectAllCenterBoxDesktop,
  SelectAllCenterButtonTextDesktop,
  SelectDesktop,
} from "./SelectCenter.desktop.style";
import moment from "moment";
import { NextSlotTimeBox } from "./SelectCenter.style";

function SelectCenter() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedValue, setSelectedValue] = useState(null);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [centerLoadingStatus, setCenterLoadingStatus] = useState(false);
  const {
    errorMessage,
    isErrorPresent,
    centersWhereServiceAvailable,
    conversationId,
    centersUnderVirtualCenter,
    responseCode,
    showSlotOfferPopupForWalkinMulticenterFlow
  } = useSelector((state) => state.chatDetails);
  const curr = useSelector((state) => state.chatDetails);

  const {
    setSelectedCenterWorkflow,
    updateVirtualCenterListWorkflow,
    updateSelectedCenterWorkflow,
    setPopupScreen
  } = chatDetailsActions;
  const [data, setData] = useState([]);
  const { screenHeight } = useSelector((state) => state.screenSize);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState();
  const [hasFewCenters, setHasFewCenters] = useState(false);
  const [slotAvailabilityData, setSlotAvailabilityData] = useState([]);
  const [isCalendarDataLoading, setIsCalendarDataLoading] = useState();
  const searchOptions = searchData?.map((item) => ({
    label: `${item.locality}, ${item.postcode}`,
    value: `${item.locality}, ${item.postcode}`,
    latitude: item.lat,
    longitude: item.long,
  }));

  const handleInputChange = async (e, inputValue) => {
    if (e && e?.type === "change") {
      setSearchValue(inputValue);
      try {
        const response = await UseSearchLocation({ searchString: inputValue });
        console.log("response", response);
        setSearchData(response);
      } catch (e) {
        setSearchData(searchData);
        console.error("Error searching centers", error);
      }
    }
  };

  const isOptionEqualToValue = (option, value) =>
    isEqual(get(option, "value"), get(value, "value"));

  const handleSubmitSelectedCenterCallback = async (
    centerId,
    centerName,
    centerShortName,
    centerAddress
  ) => {
    setIsHandleUtteranceApiPending(true);
    let utterance =
      responseCode.includes(
        "img_multi_center.ml.service_available_at_one_center_ask_caller_if_interested_to_proceed_with_appointent_booking"
      ) && "yes";
    await useHandleUtterance({
      conversation_id: curr.conversationId,
      utterance: utterance ? utterance : centerName,
    });
    useAppDispatch(
      updateSelectedCenterWorkflow({
        centerId,
        centerName: centerShortName,
        centerFullName: centerName,
        centerAddress: centerAddress
      })
    );
    setIsHandleUtteranceApiPending(false);
  };

  const handleChange = async (event, newValue) => {
    setSelectedValue(newValue);
    setLoading(true);
    if (newValue) {
      try {
        const tempData = await fetchAvailableCenters({
          conversationId: curr.conversationId,
          latitude: newValue.latitude,
          longitude: newValue.longitude,
        });
        setData(tempData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(false);
  };

  const handleBrowserLocation = async () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const sortedCenters = await fetchAvailableCenters({
            conversationId: curr.conversationId,
            latitude: latitude,
            longitude: longitude,
          });
          setData(sortedCenters);
        },
        (error) => {
          setError(error);
        }
      );
      setLoading(false);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const fetchFirstSlotCalendarData = async (centerId, startDate, endDate, signal) => {
    let slotDate = null;
    let slotTime = null;
    try {
      setIsCalendarDataLoading(true);
      const response = await useGetAvailabilityCalendar({
        conversationId: conversationId,
        centerId: centerId,
        start_date: startDate,
        end_date: endDate,
      }, signal);
      const dateObj = response?.data?.find((obj) => obj?.isAvailable);
      if (dateObj) {
        const sortedData = dateObj?.available_slots?.sort(
          (a, b) => moment(a.schedule).valueOf() - moment(b.schedule).valueOf()
        );
        if (sortedData.length > 0) {
          const time = moment(sortedData[0]?.schedule);
          const formattedTime = time?.minutes() === 0
            ? time?.format("h A")
            : time?.format("h:mm A");
          slotTime = formattedTime;
          slotDate = moment(sortedData[0].schedule);
        }
      }
      setIsCalendarDataLoading(false);
      return { centerId, slotTime, slotDate, aborted: false };
    } catch (error) {
      console.error("Error fetching availability calendar:", error);
      setIsCalendarDataLoading(false);
      return { centerId, slotTime, slotDate, aborted: true };
    }
  };

  const fetchFirstSlotList = async (centerData, signal) => {
    if (!centerData) return;

    setLoadingSlots(true);
    let updatedCenterList = [];

    for (const centerObj of centerData) {
      const centerId = centerObj?.center_id;
      const startDate = moment().format("YYYY-MM-DD");
      const endDate = moment().add(1, "month").format("YYYY-MM-DD");

      if (
        [
          "DEMOGRAPHICS_ONLY",
          "WALKIN_SERVICE_NO_APPOINTMENT_REQUIRED",
        ].includes(centersWhereServiceAvailable[centerId])
      ) {
        updatedCenterList.push({
          ...centerObj,
          slotTime: null,
          slotDate: null,
          message: [
            "WALKIN_SERVICE_NO_APPOINTMENT_REQUIRED",
          ].includes(centersWhereServiceAvailable[centerId]) ? "Walk in" : [
            "DEMOGRAPHICS_ONLY",
          ].includes(centersWhereServiceAvailable[centerId]) ? "Subject to availability" : "Provide further details"
        });
      } else {
        const firstSlotTime = await fetchFirstSlotCalendarData(
          centerId,
          startDate,
          endDate,
          signal
        );
        updatedCenterList.push({ ...centerObj, ...firstSlotTime, message: firstSlotTime?.slotDate ? firstSlotTime?.slotDate : "Select to see the availability." });
      }
    }

    setSlotAvailabilityData(updatedCenterList);
    setLoadingSlots(false);

    useAppDispatch(
      updateVirtualCenterListWorkflow({
        centersUnderVirtualCenter: updatedCenterList,
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const centerData = await fetchAvailableCenters({
          conversationId: curr.conversationId,
        });
        const result = centerData?.filter(
          (center) =>
            centersWhereServiceAvailable?.[center?.center_id] !==
            "NOT_FOR_AI_BOOKING" &&
            centersWhereServiceAvailable?.[center?.center_id]
        );
        useAppDispatch(
          updateVirtualCenterListWorkflow({
            centersUnderVirtualCenter: result,
          })
        );
        setData(result);
        if (centerData?.length < 4) {
          setHasFewCenters(true);
        } else {
          setHasFewCenters(false);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    if (data) {
      setCenterLoadingStatus(true);
      fetchFirstSlotList(data, signal);
      setCenterLoadingStatus(false);
    }
    return () => {
      // Cancel the request when the component unmounts
      abortController.abort();
    };
  }, [data]);
  const HeaderContainerWrapper = isMobile
    ? HeaderContainerMobile
    : HeaderContainerDesktop;
  const HeadingLabelContainerWrapper = isMobile
    ? HeadingLabelContainerMobile
    : HeadingLabelContainerDesktop;
  const HeadingLabelTextWrapper = isMobile
    ? HeadingLabelTextMobile
    : HeadingLabelTextDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const NearbyCenterListWrapper = isMobile
    ? NearbyCenterListMobile
    : NearbyCenterListDesktop;
  const SelectWrapper = isMobile ? SelectMobile : SelectDesktop;
  const CustomShareLocationIconWrapper = isMobile
    ? CustomShareLocationIconMobile
    : CustomShareLocationIconDesktop;

  if (isHandleUtteranceApiPending || centerLoadingStatus || loading) {
    return <CustomLoader />;
  }
  return (
    <Stack>
      <HeaderContainerWrapper>
        <HeadingTextWrapper
          variant="h1"
          sx={{
            color: theme.palette.primary.activeButton,
            width: "100%"
          }}
        >
          Select centre for your visit
        </HeadingTextWrapper>

        {!hasFewCenters && (
          <HeadingLabelContainerWrapper
            direction={"row"}
            sx={{
              "& svg path": {
                fill: theme.palette.primary.activeButton,
              },
            }}
          >
            <HeadingLabelTextWrapper variant="subtitle">
              Enter zip code or click
            </HeadingLabelTextWrapper>
            <CustomShareLocationIconWrapper />
            <HeadingLabelTextWrapper variant="subtitle">
              to find nearby center
            </HeadingLabelTextWrapper>
          </HeadingLabelContainerWrapper>
        )}
      </HeaderContainerWrapper>

      {!hasFewCenters && (
        <Stack
          direction="row"
          alignItems="center"
          gap="16.8px"
          justifyContent="center"
        >
          <SelectWrapper
            options={searchOptions || []}
            getOptionLabel={(option) => get(option, "label")}
            value={selectedValue}
            isOptionEqualToValue={isOptionEqualToValue}
            onChange={handleChange}
            onInputChange={handleInputChange}
            width={isMobile ? "301px" : "781.2px"}
            noOptionsText={<div style={{ fontSize: isMobile ? "12px" : "14px" }}>No Centers</div>}
            renderInput={(selectParams) => (
              <CustomTextField
                {...selectParams}
                value={searchValue}
                inputProps={{
                  ...selectParams.inputProps,
                  placeholder: isMobile
                    ? "Enter your location"
                    : "Enter your location or pincode",
                  style: {
                    marginLeft: isMobile && "-10px",
                  },
                }}
                padding={"40px"}
                sx={{
                  border: "none",
                  backgroundColor: "white",
                  border: "1px solid lightgray",
                  overflow: "hidden",
                  letterSpacing: "1.5px",
                  fontSize: isMobile ? "14px" : "20px",
                }}
              />
            )}
            sx={{
              "& .MuiInputBase-root": {
                overflow: "hidden",
              },
              border: "1px solid lightgray",
              borderRadius: "5px",
            }}
          />

          <Button
            sx={{
              height: isMobile ? "40px" : screenHeight < 900 ? "40px" : "42px",
              width: { xs: "40px", md: "42.4px" },
              backgroundColor: "white",
              border: "1px solid lightgray",
              "& svg path": {
                fill: theme.palette.primary.activeButton,
              },
              marginTop: isMobile && "-10px",
            }}
            display="flex"
            justifycontent="center"
            alignitems="center"
            onClick={handleBrowserLocation}
          >
            <ShareLocation height="23px" width="23px" />
          </Button>
        </Stack>
      )}

      {isErrorPresent && !loading && (
        <Stack marginTop="5px" alignItems="left">
          <ErrorState errorMsg={errorMessage} isTextAlignCenter />
        </Stack>
      )}

      <Stack alignItems="center" gap="10px" marginTop="10px">
        {loading ? (
          <LoaderDots />
        ) : (
          <>
            {error && (
              <Stack alignItems="left">
                <ErrorState />
              </Stack>
            )}
            <Stack alignItems="center" justifyContent="center">
              <NearbyCenterListWrapper>
                {data.map((item, index) => {
                  const firstSlotObj = slotAvailabilityData?.find(
                    (obj) => obj.center_id == item?.center_id
                  );
                  return (
                    <Grid
                      item
                      xs={12 / 1}
                      md={12 / 2}
                      key={index}
                      align="center"
                    >
                      <Location
                        centerLocation={item.center_location}
                        centerAddress={item.center_address}
                        centerName={item.center_name}
                        centerShortName={item.center_short_name}
                        centerId={item.center_id}
                        distance={item.distance}
                        locationsList={data}
                        key={index}
                        isMobile={isMobile}
                        loadingSlots={loadingSlots}
                        firstSlotObj={firstSlotObj}
                        centersWhereServiceAvailable={
                          centersWhereServiceAvailable
                        }
                        showSlotOfferPopupForWalkinMulticenterFlow={showSlotOfferPopupForWalkinMulticenterFlow}
                        handleSubmitSelectedCenterCallback={
                          handleSubmitSelectedCenterCallback
                        }
                        updateSelectedCenterWorkflow={updateSelectedCenterWorkflow}
                        setPopupScreen={setPopupScreen}
                      />
                    </Grid>
                  );
                })}
              </NearbyCenterListWrapper>
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  );
}

const Location = ({
  centerLocation,
  centerAddress,
  centerName,
  centerId,
  locationsList,
  distance,
  handleSubmitSelectedCenterCallback,
  isMobile,
  loadingSlots,
  firstSlotObj,
  centerShortName,
  centersWhereServiceAvailable,
  updateSelectedCenterWorkflow,
  setPopupScreen,
  showSlotOfferPopupForWalkinMulticenterFlow
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const getColorBasedOnDistance = (distance, theme) => {
    if (
      !isNaN(Number(distance?.split(" ")?.[0])) &&
      (Number(distance?.split(" ")?.[0]) < 5 ||
        distance?.split(" ")?.[1] != "km")
    ) {
      return "green";
    } else {
      return theme;
    }
  };
  const showNextSlotAvailable = !(
    centersWhereServiceAvailable[centerId] &&
    (centersWhereServiceAvailable[centerId] == "DEMOGRAPHICS_ONLY" ||
      centersWhereServiceAvailable[centerId] ==
      "WALKIN_SERVICE_NO_APPOINTMENT_REQUIRED")
  );
  const isProvisionalBooking = centersWhereServiceAvailable[centerId] == "DEMOGRAPHICS_ONLY";
  const isWalkinAppointment = centersWhereServiceAvailable[centerId] == "WALKIN_SERVICE_NO_APPOINTMENT_REQUIRED";
  const isWalkinOptionalAppointment = centersWhereServiceAvailable[centerId] == "WALKIN_SERVICE_OPTIONAL_APPOINTMENT";
  const CenterAddressTextWrapper = isMobile
    ? CenterAddressTextMobile
    : CenterAddressTextDesktop;
  const CenterNameTextWrapper = isMobile
    ? CenterNameTextMobile
    : CenterNameTextDesktop;
  const LocationBoxWrapper = isMobile ? LocationBoxMobile : LocationBoxDesktop;
  const DistanceTextWrapper = isMobile
    ? DistanceTextMobile
    : DistanceTextDesktop;
  const NextSlotTimeTextWrapper = isMobile
    ? NextSlotTimeTextMobile
    : NextSlotTimeTextDesktop;
  const LocationBoxContainerWrapper = isMobile
    ? LocationBoxContainerMobile
    : LocationBoxContainerDesktop;
  return (
    <LocationBoxWrapper
      border="1px solid lightgray"
      onClick={() => {

        if (isWalkinOptionalAppointment && showSlotOfferPopupForWalkinMulticenterFlow) {
          useAppDispatch(
            updateSelectedCenterWorkflow({
              centerId,
              centerName: centerShortName,
              centerFullName: centerName,
              centerAddress: centerAddress
            })
          );
          useAppDispatch(
            setPopupScreen({
              showPopup: true,
              popupScreenName: "BookSlotForWalkin",
            })
          );
        } else {
          handleSubmitSelectedCenterCallback(
            centerId,
            centerName,
            centerShortName,
            centerAddress
          );
        }
      }}
      sx={{
        "& svg path": {
          fill: getColorBasedOnDistance(
            distance,
            theme.palette.primary.activeButton
          ),
        },
        "&:hover": {
          backgroundColor: COLORS.GREY_3,
        },
      }}
    >
      <LocationBoxContainerWrapper>
        <Stack direction="row" gap="5px">
          <Box
            sx={{ zoom: isMobile ? 0.8 : 0.8, marginTop: isMobile && "10px" }}
          >
            <LocationIcon />
          </Box>
          <Stack marginLeft="10px">
            <CenterNameTextWrapper>{centerShortName}</CenterNameTextWrapper>
            <CenterAddressTextWrapper variant="subtitle" textAlign={"left"}>
              {centerAddress?.length > 70
                ? centerAddress?.substring(0, 70) + ".."
                : centerAddress}
            </CenterAddressTextWrapper>
          </Stack>
        </Stack>
        <Stack minWidth="60px">
          <DistanceTextWrapper>{`${distance ? distance : "--"
            }`}</DistanceTextWrapper>
        </Stack>
      </LocationBoxContainerWrapper>
      <NextSlotTimeBox>
        <NextSlotTimeTextWrapper
          sx={{ color: theme.palette.primary.activeButton }}
        >
          {!loadingSlots &&
            (isProvisionalBooking || isWalkinAppointment ? (
              firstSlotObj?.message
            ) : isWalkinOptionalAppointment ? "Walk in / Select slot" : (
              firstSlotObj?.slotDate ? (
                <div>
                  Next Availability : {isMobile && <br />}
                  {moment().format("YYYY-MM-DD") == firstSlotObj?.slotDate
                    ? "Today"
                    : moment(firstSlotObj?.slotDate).format("YYYY-MM-DD") ===
                      moment().add(1, "days").format("YYYY-MM-DD")
                      ? "Tomorrow "
                      : moment(firstSlotObj?.slotDate).format("Do MMM")}{" "}
                  {firstSlotObj?.slotTime}
                </div>
              ) : (
                `Provide further details`
              )
            )

            )}
          {loadingSlots && (
            <span>
              Fetching next availability...
            </span>
          )}
        </NextSlotTimeTextWrapper>
      </NextSlotTimeBox>
    </LocationBoxWrapper>
  );
};

export default SelectCenter;
