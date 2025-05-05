import {
  getAvailabilitySlots,
  useGetAvailabilityCalendar,
} from "@/api/calendar/HandleCalendar.api";
import { COLORS } from "@/theme";
import {
  Box,
  Button,
  IconButton,
  Popover,
  Select,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CustomButton } from "@/elements/CustomButton";
import ArrowDown from "@/assets/ArrowDown.svg?react";
import ArrowUp from "@/assets/ArrowUp.svg?react";
import HorizontalCalendar from "@/components/HorizontalCalendar";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import SlotsTimeRange from "./SlotsTimeRange/SlotsTimeRange";
import {
  ButtonStyledMobile,
  CalendarContainerMobile,
  CenterNameTextMobile,
  CenterSlotsListContainerMobile,
  ContainerMobile,
  HeadingTextMobile,
  LoadingMessageStackMobile,
  MonthDropdownMobile,
  MonthPreferenceContainerMobile,
  SelectMonthDropdownMobile,
  SelectMonthTextMobile,
  SlotsContainerMobile,
  StyledButtonMobile,
  TimePreferenceHeadingMobile,
  TimePreferenceStackMobile,
} from "./SelectSlots.mobile.style";
import {
  ButtonStyledDesktop,
  CalendarContainerDesktop,
  CenterNameTextDesktop,
  CenterSlotsListContainerDesktop,
  ContainerDesktop,
  HeadingTextDesktop,
  LoadingMessageStackDesktop,
  MonthDropdownDesktop,
  MonthPreferenceContainerDesktop,
  SelectMonthDropdownDesktop,
  SelectMonthTextDesktop,
  SlotsContainerDesktop,
  StyledButtonDesktop,
  TimePreferenceHeadingDesktop,
  TimePreferenceStackDesktop,
} from "./SelectSlots.desktop.style";
const slots = ["Any", "8 AM - 12 PM", "12 PM - 3 PM", "3 PM - 6 PM"];

function SelectSlots() {
  const theme = useTheme();
  const curr = useSelector((state) => state.chatDetails);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const numOfDaysToFetch = isMobile ? 4 : 7;
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentStartDate, setCurrentStartDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const centerDetails = useSelector((state) => state.centerDetails);
  const [open, setOpen] = useState(false);
  const [slotsData, setSlotsData] = useState([]);
  const [fetchOneMonthData, setFetchOneMonthData] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(moment().format("MMMM"));
  const [calendarStartDate, setCalendarStartDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [calendarEndDate, setCalendarEndDate] = useState(
    moment(calendarStartDate)
      .add(numOfDaysToFetch - 1, "days")
      .format("YYYY-MM-DD")
  );
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [calendarData, setCalendarData] = useState();
  const { screenHeight } = useSelector((state) => state.screenSize);
  const [isLoading, setIsLoading] = useState(false);
  const { setCenterSlotDetails, setPopupScreen } = chatDetailsActions;
  const { errorMessage, isErrorPresent, selectedCenterId, selectedCenterName } =
    useSelector((state) => state.chatDetails);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const formattedTimes = slotsData?.available_slots?.map((slot) =>
    moment(slot.schedule).format("hh:mm A")
  );


  const ButtonStyledWrapper = isMobile
    ? ButtonStyledMobile
    : ButtonStyledDesktop;
  const CalendarContainerWrapper = isMobile
    ? CalendarContainerMobile
    : CalendarContainerDesktop;
  const CenterNameTextWrapper = isMobile
    ? CenterNameTextMobile
    : CenterNameTextDesktop;
  const CenterSlotsListContainerWrapper = isMobile
    ? CenterSlotsListContainerMobile
    : CenterSlotsListContainerDesktop;
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const LoadingMessageStackWrapper = isMobile
    ? LoadingMessageStackMobile
    : LoadingMessageStackDesktop;
  const MonthDropdownWrapper = isMobile
    ? MonthDropdownMobile
    : MonthDropdownDesktop;
  const MonthPreferenceContainerWrapper = isMobile
    ? MonthPreferenceContainerMobile
    : MonthPreferenceContainerDesktop;
  const SelectMonthDropdownWrapper = isMobile
    ? SelectMonthDropdownMobile
    : SelectMonthDropdownDesktop;
  const SelectMonthTextWrapper = isMobile
    ? SelectMonthTextMobile
    : SelectMonthTextDesktop;
  const SlotsContainerWrapper = isMobile
    ? SlotsContainerMobile
    : SlotsContainerDesktop;
  const StyledButtonWrapper = isMobile
    ? StyledButtonMobile
    : StyledButtonDesktop;
  const TimePreferenceHeadingWrapper = isMobile
    ? TimePreferenceHeadingMobile
    : TimePreferenceHeadingDesktop;
  const TimePreferenceStackWrapper = isMobile
    ? TimePreferenceStackMobile
    : TimePreferenceStackDesktop;

  const popOpen = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const months = Array.from({ length: 4 }, (_, i) =>
    moment().add(i, "months").format("MMMM")
  );

  const filterTimes = (times, filterValue) => {
    switch (filterValue) {
      case "8 AM - 12 PM":
        return times?.filter((time) => {
          const m = moment(time, "hh:mm A");
          return m.isBetween(
            moment("00:00 AM", "hh:mm A"),
            moment("12:00 PM", "hh:mm A"),
            null,
            "[)"
          );
        });
      case "12 PM - 3 PM":
        return times?.filter((time) => {
          const m = moment(time, "hh:mm A");
          return m.isBetween(
            moment("12:00 PM", "hh:mm A"),
            moment("03:00 PM", "hh:mm A"),
            null,
            "[)"
          );
        });
      case "3 PM - 6 PM":
        return times?.filter((time) => {
          const m = moment(time, "hh:mm A");
          return m.isBetween(
            moment("03:00 PM", "hh:mm A"),
            moment("11:59 PM", "hh:mm A"),
            null,
            "[)"
          );
        });
      case "Any":
      default:
        return times;
    }
  };
  const filteredTimes = filterTimes(formattedTimes, "Any");

  const fetchCalendarData = async (startDate, endDate) => {
    if (fetchOneMonthData) {
      endDate = moment(startDate)
        .add(30, "days")
        .format("YYYY-MM-DD");
    }
    try {
      setIsLoading(true);

      const response = await useGetAvailabilityCalendar({
        conversationId: curr.conversationId,
        centerId: centerDetails.center_id,
        start_date: startDate,
        end_date: endDate,
      });
      setCalendarData(response);
      console.log("respose", response);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching availability calendar:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const currentMonth = Number(moment().format("MM"));
    const currentYear = Number(moment().format("YYYY"));
    const passedMonth = Number(moment(selectedMonth, "MMMM").format("MM"));
    const requestedYear =
      passedMonth < currentMonth ? currentYear + 1 : currentYear;

    let updatedCalendarStartDate = calendarStartDate;
    let updatedCalendarEndDate = calendarEndDate;

    if (currentMonth == passedMonth) {
      updatedCalendarStartDate = moment().format("YYYY-MM-DD");

      updatedCalendarEndDate = moment(updatedCalendarStartDate)
        .add(numOfDaysToFetch - 1, "days")
        .format("YYYY-MM-DD");
    } else {
      updatedCalendarStartDate = moment(
        `01 ${passedMonth} ${requestedYear}`,
        "DD MM YYYY"
      ).format("YYYY-MM-DD");

      updatedCalendarEndDate = moment(updatedCalendarStartDate)
        .add(numOfDaysToFetch - 1, "days")
        .format("YYYY-MM-DD");
    }

    setCalendarStartDate(updatedCalendarStartDate);
    setCalendarEndDate(updatedCalendarEndDate);
    setCurrentStartDate(updatedCalendarStartDate);
    setSelectedDate(null);
    setSelectedSlot(null);
  }, [selectedMonth]);

  useEffect(() => {
    fetchCalendarData(calendarStartDate, calendarEndDate);
  }, [calendarStartDate, calendarEndDate]);


  const fetchSelectedCenterSlots = async (date) => {
    const tempSlotsData = await getAvailabilitySlots({
      conversationId: curr.conversationId,
      queryDate: date,
      centerId: selectedCenterId ? selectedCenterId : centerDetails.center_id,
    });

    const uniqueSlots = [];
    const slotIdxTracker = [];

    tempSlotsData?.available_slots?.forEach((slot) => {
      if (!slotIdxTracker.includes(slot.slot_idx)) {
        uniqueSlots.push(slot);
        slotIdxTracker.push(slot.slot_idx);
      }
    });
    const updatedTempData = {
      ...tempSlotsData,
      available_slots: uniqueSlots,
    };

    setSlotsData(updatedTempData);
  };
  const handleDayClick = async (date) => {
    const tempDate = new Date(date);

    const targetDate = moment(selectedDate);
    const referenceDate = moment(date);

    const differenceInDays = Math.abs(targetDate.diff(referenceDate, "days"));

    // if (differenceInDays >= 4) {
    //   setCurrentStartDate(tempDate);
    // }

    setSelectedDate(date);
    setLoading(true);

    try {
      if (selectedCenterId) {
        await fetchSelectedCenterSlots(date);
      } else {
        await fetchSelectedCenterSlots(date);
      }
    } catch (error) {
      console.error("Error fetching availability slots:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleCofirmSlot = async () => {
    const combinedDateTime = selectedDate + " " + selectedSlot;
    const formattedDateTime = moment(
      combinedDateTime,
      "YYYY-MM-DD hh:mm A"
    ).format("DD MMMM [at] h:mm A");

    const handleUtteranceCallBack = async () => {
      console.log("callback called");
      useAppDispatch(
        setCenterSlotDetails({
          selectedCenter: selectedCenterName,
          selectedSlot: combinedDateTime,
        })
      );

      setIsHandleUtteranceApiPending(true);
      await useHandleUtterance({
        conversation_id: curr.conversationId,
        utterance: "yes",
      });

      setIsHandleUtteranceApiPending(false);
    };
    setIsHandleUtteranceApiPending(true);
    await useHandleUtterance(
      {
        conversation_id: curr.conversationId,
        utterance: formattedDateTime,
      },
      handleUtteranceCallBack
    );

    setIsHandleUtteranceApiPending(false);
  };

  useEffect(() => {
    if (calendarData) {
      let firstAvailableSlotDate = null;
      calendarData?.data?.map((slotDateObj) => {
        if (
          slotDateObj?.isAvailable == true &&
          firstAvailableSlotDate == null
        ) {
          firstAvailableSlotDate = slotDateObj?.date;
          return;
        }
      });
      if (firstAvailableSlotDate) {
        setSelectedDate(firstAvailableSlotDate);
        setCurrentStartDate(firstAvailableSlotDate);
        let startDate = moment(firstAvailableSlotDate).format("YYYY-MM-DD");
        let endDate = moment(firstAvailableSlotDate)
          .add(numOfDaysToFetch - 1, "days")
          .format("YYYY-MM-DD");
        setCalendarStartDate(startDate);
        setCalendarEndDate(endDate);
        if (fetchOneMonthData && startDate == calendarStartDate) {
          handleDayClick(firstAvailableSlotDate)
        } else if (fetchOneMonthData) {
          setFetchOneMonthData(false);
        } else {
          handleDayClick(firstAvailableSlotDate)
        }
      } else {
        setSelectedDate("Empty");
        setSlotsData([]);
      }
    }
  }, [calendarData]);

  return (
    <ContainerWrapper>
      <HeadingTextWrapper
        variant="h1"
        color={theme.palette.primary.activeButton}
      >
        Select Date, Time for your scan
      </HeadingTextWrapper>

      <TimePreferenceStackWrapper>
        <MonthPreferenceContainerWrapper direction="row">
          <SelectMonthDropdownWrapper onClick={handleOpen}>
            <SelectMonthTextWrapper>
              {selectedMonth}
              <span
                style={{
                  marginLeft: "5px",
                  height: "50px",
                  border: "1px",
                  position: "relative",
                  top: open ? "4px" : "3px",
                }}
              >
                {popOpen && (
                  <ArrowDown
                    width={isMobile ? "12px" : isTablet ? "14px" : "15px"}
                    height={isMobile ? "12px" : isTablet ? "14px" : "15px"}
                    fill={theme.palette.primary.activeButton}
                  />
                )}
                {!popOpen && (
                  <ArrowUp
                    width={isMobile ? "12px" : isTablet ? "14px" : "15px"}
                    height={isMobile ? "12px" : isTablet ? "14px" : "15px"}
                    fill={theme.palette.primary.activeButton}
                  />
                )}
              </span>
            </SelectMonthTextWrapper>
          </SelectMonthDropdownWrapper>

          <Popover
            id={id}
            open={popOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <MonthDropdownWrapper>
              {months.map((month, index) => (
                <StyledButtonWrapper
                  key={index}
                  isActive={month === selectedMonth}
                  onClick={() => {
                    setSelectedMonth(month);
                    setFetchOneMonthData(true);
                    handleClose();
                  }}
                >
                  {month}
                </StyledButtonWrapper>
              ))}
            </MonthDropdownWrapper>
          </Popover>
        </MonthPreferenceContainerWrapper>
      </TimePreferenceStackWrapper>

      <CalendarContainerWrapper>
        <HorizontalCalendar
          handleDayClick={handleDayClick}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          currentStartDate={currentStartDate}
          calendarAvailableDate={calendarData}
          setCurrentStartDate={setCurrentStartDate}
          setSelectedSlot={setSelectedSlot}
          numOfDaysToFetch={numOfDaysToFetch}
          setFetchOneMonthData={setFetchOneMonthData}
          calendarStartDate={calendarStartDate}
          calendarEndDate={calendarEndDate}
          setCalendarStartDate={setCalendarStartDate}
          setCalendarEndDate={setCalendarEndDate}
        />
        <CenterSlotsListContainerWrapper>
          {selectedDate == "Empty" && isLoading == false && (
            <Stack>
              <SlotsContainerWrapper>
                <ErrorState
                  errorMsg={
                    `There are no available slots at the centre for the next ${isMobile ? "4" : "7"} days.`
                  }
                />
              </SlotsContainerWrapper>
            </Stack>
          )}

          {(filteredTimes?.length > 0 || loading || isLoading) && (
            <Box alignItems="center">
              <Stack
                bgcolor={COLORS.GREY_2}
                borderRadius="5px"
                p="10px"
                margin={"5px"}
                boxShadow={`rgba(0, 0, 0, 0.02) 0px 0px 0px 1px`}
              >
                {filteredTimes?.length == 0 && !loading && (
                  <SlotsContainerWrapper
                    fontSize={
                      isSmUp ? (screenHeight < 900 ? "12px" : "18px") : "14px"
                    }
                  >
                    No available slots available in the selected date
                  </SlotsContainerWrapper>
                )}
                {loading || isLoading ? (
                  <LoadingMessageStackWrapper
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                  >
                    <Stack
                      alignItems="left"
                      justifyContent="center"
                      textAlign={"left"}
                      width="100%"
                    >
                      <Box
                        sx={{
                          display: isSmUp ? "flex" : "grid",
                          gap: "5px",
                          marginLeft: "10px",
                        }}
                      >
                        <Box
                          fontSize={
                            isSmUp
                              ? screenHeight < 900
                                ? "14px"
                                : "18px"
                              : "14px"
                          }
                        >
                          {centerDetails.center_name
                            ? selectedCenterName
                              ? `Loading the Slots availability for '${selectedCenterName}'`
                              : `Loading the Slots availability for '${centerDetails.center_name}'`
                            : "Loading the Slots availability"}
                        </Box>
                        <Box>
                          <LoaderDots
                            sx={{
                              width: "30px",
                              marginTop: isMobile ? "-15px" : "10px",
                              marginX: !isSmUp && "auto",
                            }}
                          />
                        </Box>
                      </Box>
                    </Stack>
                  </LoadingMessageStackWrapper>
                ) : filteredTimes?.length > 0 ? (
                  <Stack marginTop="5px">
                    <SlotsTimeRange
                      filteredSlote={filterTimes(filteredTimes, "8 AM - 12 PM")}
                      selectedSlot={selectedSlot}
                      setSelectedSlot={setSelectedSlot}
                    />

                    {filterTimes(filteredTimes, "8 AM - 12 PM")?.length > 0 && (
                      <Box
                        sx={{
                          width: "99%",
                          marginY: screenHeight < 900 ? "5px" : "10px",
                        }}
                      ></Box>
                    )}

                    <SlotsTimeRange
                      filteredSlote={filterTimes(filteredTimes, "12 PM - 3 PM")}
                      selectedSlot={selectedSlot}
                      setSelectedSlot={setSelectedSlot}
                    />
                    {filterTimes(filteredTimes, "12 PM - 3 PM")?.length > 0 && (
                      <Box
                        sx={{
                          width: "99%",
                          marginY: screenHeight < 900 ? "5px" : "10px",
                        }}
                      ></Box>
                    )}

                    <SlotsTimeRange
                      filteredSlote={filterTimes(filteredTimes, "3 PM - 6 PM")}
                      selectedSlot={selectedSlot}
                      setSelectedSlot={setSelectedSlot}
                    />
                  </Stack>
                ) : (
                  <Stack alignItems="start" justifyContent="start" width="100%">
                    {isHandleUtteranceApiPending && (
                      <Typography marginTop="20px">
                        No slots available
                      </Typography>
                    )}
                  </Stack>
                )}
                {isErrorPresent && (
                  <Stack marginTop="5px" alignItems="left">
                    <ErrorState errorMsg={errorMessage} isTextAlignCenter />
                  </Stack>
                )}

                {selectedSlot && (
                  <Stack
                    direction="row"
                    justifyContent="center"
                    gap="8px"
                    marginTop={
                      isMobile ? "15px" : screenHeight < 900 ? "10px" : "20px"
                    }
                  >
                    <ButtonStyledWrapper
                      sx={{
                        "&:hover": !isHandleUtteranceApiPending && {
                          color: theme.palette.text.activeButtonText,
                          border: `1px solid ${theme.palette.text.activeButtonText}`,
                          backgroundColor: theme.palette.primary.activeButton,
                        },
                      }}
                      onClick={() => {
                        if (isMobile) {
                          const combinedDateTime =
                            selectedDate + " " + selectedSlot;
                          useAppDispatch(
                            setCenterSlotDetails({
                              selectedCenter: selectedCenterName,
                              selectedSlot: combinedDateTime,
                            })
                          );
                          useAppDispatch(
                            setPopupScreen({
                              showPopup: true,
                              popupScreenName: "ConfirmSlotDetails",
                            })
                          );
                        } else {
                          handleCofirmSlot();
                        }
                      }}
                      disabled={
                        isHandleUtteranceApiPending
                          ? isHandleUtteranceApiPending
                          : !selectedSlot
                      }
                    >
                      {isHandleUtteranceApiPending ? <LoaderDots /> : "Confirm"}
                    </ButtonStyledWrapper>
                    <ButtonStyledWrapper onClick={() => setSelectedSlot(null)}>
                      Close
                    </ButtonStyledWrapper>
                  </Stack>
                )}
              </Stack>
            </Box>
          )}

          {filteredTimes?.length == 0 && !isLoading && !loading && (
            <SlotsContainerWrapper>
              No available slots available in the selected time range
            </SlotsContainerWrapper>
          )}
        </CenterSlotsListContainerWrapper>
      </CalendarContainerWrapper>
    </ContainerWrapper>
  );
}

export default SelectSlots;
