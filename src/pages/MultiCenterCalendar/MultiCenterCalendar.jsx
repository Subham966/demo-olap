import { useTheme } from "@emotion/react";
import { Box, Popover, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ArrowDown from "@/assets/ArrowDown.svg?react";
import ArrowUp from "@/assets/ArrowUp.svg?react";
import {
  ButtonStyledMobile,
  CalendarContainerMobile,
  CalendarPopoverMobile,
  CenterDistanceParentMobile,
  CenterDropdownBoxMobile,
  CenterDropdownContainerMobile,
  CenterDropdownOptionsMobile,
  CenterDropdownTextMobile,
  CenterNameContainerMobile,
  CenterNameTextMobile,
  CenterNextAvailableSlotTextMobile,
  CenterSelectionBoxMobile,
  CenterSelectionContainerMobile,
  CenterSelectionMobileContainerMobile,
  ChildContainerMobile,
  ChildSlotsDataContainerMobile,
  ContainerMobile,
  DateBoxMobile,
  DateMonthTextMobile,
  HeadingTextMobile,
  MobileSubHeading,
  NextAvailabilityContainerMobile,
  NoSlotsTextMobile,
  ProvisonalAndWalkinScreenTextMobile,
  SelectCenterDropdownMobile,
  SelectMonthContainerMobile,
  SelectMonthDropdownMobile,
  SelectMonthTextMobile,
  SlotsDataContainerMobile,
  StyledCustomButtonMobile,
  StyledDateCalendarMobile,
} from "./MultiCenterCalendar.mobile.style";
import {
  CalendarContainerDesktop,
  CalendarPopoverDesktop,
  CenterDistanceParentDesktop,
  CenterNameTextDesktop,
  CenterNextAvailableSlotTextDesktop,
  CenterSelectionBoxDesktop,
  CenterSelectionContainerDesktop,
  ChildContainerDesktop,
  ChildSlotsDataContainerDesktop,
  ContainerDesktop,
  DateBoxDesktop,
  DateMonthTextDesktop,
  HeadingTextDesktop,
  NoSlotsTextDesktop,
  ProvisonalAndWalkinScreenTextDesktop,
  SelectMonthContainerDesktop,
  SelectMonthDropdownDesktop,
  SelectMonthTextDesktop,
  SlotsDataContainerDesktop,
  StyledCustomButtonDesktop,
  StyledDateCalendarDesktop,
} from "./MultiCenterCalendar.desktop.style";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  ArrowBox,
  SubmitButton,
  SubmitButtonStack,
} from "./MultiCenterCalendar.style";
import {
  fetchAvailableCenters,
  useGetAvailabilityCalendar,
} from "@/api/calendar/HandleCalendar.api";
import moment from "moment";
import SingleDateSlotList from "./SingleDateSlotList";
import { useAppDispatch } from "@/redux";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { HandleUpdateCenter } from "@/api/updateCenter/HandleUpdateCenter.api";
import dayjs from "dayjs";
import useHelpText from "@/hooks/useHelpText";
import { HandleConvertToProvisionalBooking } from "@/api/convertToProvisionalBooking/HandleConvertToProvisionalBooking.api";
import { HandlePublishUiLogs } from "@/api/publishUiLogs/publishUiLogs";
import { stopBooking } from "@/api/stopBooking/stopBooking.api";

const MultiCenterCalendar = () => {
  const theme = useTheme();
  const fetchDaysCount = 7;
  const maxFetchAttemptsIfNoSlotFound = 3;
  let fetchAttemptsIfNoSlotFoundCount = 0;
  const {
    errorMessage,
    isErrorPresent,
    centersWhereServiceAvailable,
    conversationId,
    selectedCenterId,
    selectedCenterName,
    centersUnderVirtualCenter,
    showPopup,
    popupScreenName,
  } = useSelector((state) => state.chatDetails);
  const centerDetails = useSelector((state) => state.centerDetails);
  const { updateSelectedCenterWorkflow, setCenterSlotDetails, setPopupScreen, setProvisionalBooking, updateVirtualCenterListWorkflow } =
    chatDetailsActions;
  const [loading, setLoading] = useState(false);
  const [isCalendarDataLoading, setIsCalendarDataLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(moment().format("MMMM"));
  const [calendarStartDate, setCalendarStartDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [calendarEndDate, setCalendarEndDate] = useState(
    moment().add(fetchDaysCount, "days").format("YYYY-MM-DD")
  );
  moment(calendarStartDate).add(fetchDaysCount, "days").format("YYYY-MM-DD");
  const [calendarSelectedDate, setCalendarSelectedDate] = useState(dayjs());
  const [centerList, setCenterList] = useState(centersUnderVirtualCenter);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarData, setCalendarData] = useState([]);
  const [showCenterListInMobile, setShowMobileListInMobile] = useState(false);
  const [nextSlotDetails, setNextSlotDetails] = useState(null);
  const [isSlotsAvailable, setIsSlotsAvailable] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [centerChangeAnchorEl, setCenterChangeAnchorEl] = useState(null);
  const [showFirstDateNoSlotMessage, setShowFirstDateNoSlotMessage] =
    useState(false);
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const popOpen = Boolean(anchorEl);
  const centerPopOpen = Boolean(centerChangeAnchorEl);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const helpText = useHelpText();
  const id = open ? "simple-popover" : undefined;
  const lastSlotRef = useRef(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCenterChangePopupOpen = (event) => {
    setCenterChangeAnchorEl(event.currentTarget);
  };
  const handleCenterChangePopupClose = () => {
    setCenterChangeAnchorEl(null);
  };
  const handleCofirmSlot = async () => {
    const combinedDateTime = selectedDate + " " + selectedSlot;
    const formattedDateTime = moment(
      combinedDateTime,
      "YYYY-MM-DD hh:mm A"
    ).format("DD MMMM [at] h:mm A");

    const handleUtteranceCallBack = async () => {
      useAppDispatch(
        setCenterSlotDetails({
          selectedCenter: selectedCenterName,
          selectedSlot: combinedDateTime,
        })
      );

      setIsHandleUtteranceApiPending(true);
      await useHandleUtterance({
        conversation_id: conversationId,
        utterance: "yes",
      });

      setIsHandleUtteranceApiPending(false);
    };
    setIsHandleUtteranceApiPending(true);
    await useHandleUtterance(
      {
        conversation_id: conversationId,
        utterance: formattedDateTime,
      },
      handleUtteranceCallBack
    );

    setIsHandleUtteranceApiPending(false);
  };

  const handleConfirmWalkin = async () => {
    setIsHandleUtteranceApiPending(true);
    await HandlePublishUiLogs({
      conversation_id: conversationId,
      utterance: "Wakin appointment",
    });
    await stopBooking(conversationId);
    useAppDispatch(
      setPopupScreen({
        showPopup: true,
        popupScreenName: "WalkinAppointmentEscalation",
      })
    );
    setIsHandleUtteranceApiPending(false);
  }
  const handleChangeCenter = async (center_id) => {
    const combinedDateTime = selectedDate + " " + selectedSlot;
    const formattedDateTime = moment(
      combinedDateTime,
      "YYYY-MM-DD hh:mm A"
    ).format("DD MMMM [at] h:mm A");

    setIsHandleUtteranceApiPending(true);

    try {
      await HandleUpdateCenter({
        conversation_id: conversationId,
        center_id: center_id,
      });
    } catch (error) {
      console.error("Error during API flow:", error);
    } finally {
      setIsHandleUtteranceApiPending(false);
    }
  };

  const handleChangeConvertToProvisional = async (context) => {
    setIsHandleUtteranceApiPending(true);
    try {
      await HandleConvertToProvisionalBooking("PUT", conversationId, context);
      useAppDispatch(setProvisionalBooking(true))
    } catch (error) {
      console.error("Error during API flow:", error);
    } finally {
      setIsHandleUtteranceApiPending(false);
    }
  }

  const fetchCalendarData = async (
    startDate,
    endDate,
    resetCalendarData = true
  ) => {
    try {
      setIsCalendarDataLoading(true);

      const response = await useGetAvailabilityCalendar({
        conversationId: conversationId,
        centerId: selectedCenterId,
        // centerId: centerDetails.center_id,
        start_date: startDate,
        end_date: endDate,
      });
      if (resetCalendarData) {
        setCalendarData(response?.data || []);
        //check isSlotFound
        let isSlotPresent = false;
        response?.data.map((el) => {
          if (el?.isAvailable) {
            isSlotPresent = true;
          }
        });

        // This if-else block checks if slot data is not found in the next 7 days.  
        // It will keep trying to fetch the data until a slot is found,
        // with a maximum number of attempts defined by the fetchAttemptsIfNoSlotFoundCount variable.

        if (!isSlotPresent && fetchAttemptsIfNoSlotFoundCount <= maxFetchAttemptsIfNoSlotFound) {
          fetchAttemptsIfNoSlotFoundCount++;
          let updatedStartDate = moment(endDate).add(1, "days").format("YYYY-MM-DD");;
          let updatedEndDate = moment(updatedStartDate).add(fetchDaysCount, "days").format("YYYY-MM-DD");;
          setCalendarStartDate(updatedStartDate)
          setCalendarEndDate(updatedEndDate)
          fetchCalendarData(updatedStartDate,
            updatedEndDate,
            resetCalendarData = true)
        } else {
          fetchAttemptsIfNoSlotFoundCount = 0;
        }


        if (isSlotPresent) {
          const dateObj = response?.data?.find((obj) => obj?.isAvailable);
          if (dateObj) {
            const sortedData = dateObj?.available_slots?.sort(
              (a, b) => moment(a.schedule).valueOf() - moment(b.schedule).valueOf()
            );
            if (sortedData.length > 0) {
              let results = centersUnderVirtualCenter.map((centerObjData) => {
                if (centerObjData?.center_id == selectedCenterId && !centerObjData?.slotTime) {
                  setCalendarSelectedDate(dayjs(moment(sortedData[0].schedule).format("YYYY-MM-DD"), "YYYY-MM-DD"))
                  const time = moment(sortedData[0]?.schedule);
                  const formattedTime = time?.minutes() === 0
                    ? time?.format("h A")
                    : time?.format("h:mm A");
                  return { ...centerObjData, aborted: false, slotTime: formattedTime, slotDate: moment(sortedData[0].schedule) }
                }
                return centerObjData
              })

              useAppDispatch(
                updateVirtualCenterListWorkflow({
                  centersUnderVirtualCenter: results,
                })
              );
            }
          }
        }

        setIsSlotsAvailable(isSlotPresent);
      } else {
        let updatedData = [...calendarData, ...response?.data];
        setCalendarData(updatedData || []);
        //check isSlotFound
        let isSlotPresent = false;
        updatedData?.map((el) => {
          if (el?.isAvailable) {
            isSlotPresent = true;
          }
        });
        setIsSlotsAvailable(isSlotPresent);
      }
      setIsCalendarDataLoading(false);
    } catch (error) {
      console.error("Error fetching availability calendar:", error);
      if (resetCalendarData) {
        setCalendarData([]);
      }
      setIsCalendarDataLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const centerData = centersUnderVirtualCenter;
        setCenterList(centerData);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [centersUnderVirtualCenter]);
  useEffect(() => {
    if (lastSlotRef.current) {
      lastSlotRef.current.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }
  }, [calendarData]);
  useEffect(() => {
    let NextSlotDetails = nextSlotDetails
    centersUnderVirtualCenter?.map((centerObj) => {
      if (centerObj?.center_id == selectedCenterId) {
        if (centerObj?.aborted) {
          NextSlotDetails = null
        } else {
          setCalendarSelectedDate(dayjs(moment(centerObj?.slotDate).format("YYYY-MM-DD"), "YYYY-MM-DD"))
          NextSlotDetails = centerObj?.message
        }
      }
      return centerObj
    })
    setNextSlotDetails(NextSlotDetails)



    if (moment(selectedMonth, "MMMM").month() == moment().month()) {
      let resetCalendarData = true;
      let firstSlotDetails = null;
      let tempCalendarStartDate = calendarStartDate;
      let tempCalendarEndDate = calendarEndDate;
      centerList?.map((centerData) => {
        if (centerData?.center_id == selectedCenterId) {
          firstSlotDetails = centerData?.slotDate;
        }
      })
      if (firstSlotDetails) {
        tempCalendarStartDate = moment(firstSlotDetails, "YYYY-MM-DD").format("YYYY-MM-DD");
        tempCalendarEndDate = moment(firstSlotDetails, "YYYY-MM-DD").add(fetchDaysCount, "days").format("YYYY-MM-DD")
      }
      setCalendarStartDate(tempCalendarStartDate)
      setCalendarEndDate(tempCalendarEndDate)
      // Do not fetch the "get-availability" data for walk-in, provisional booking, and no slot found cases. We retrieve these details from the center selection screen, where the first available slot datetime is stored in Redux.
      if (NextSlotDetails != "Subject to availability" && NextSlotDetails != "Walk in" && NextSlotDetails != 'Provide further details') {
        fetchCalendarData(tempCalendarStartDate, tempCalendarEndDate, resetCalendarData);
      }
    }
  }, [selectedCenterId]);
  useEffect(() => {
    if (showPopup && popupScreenName == "ConfirmSlotDetails") {
      setSelectedSlot(null);
    }
  }, [showPopup]);
  const CalendarContainerWrapper = isMobile
    ? CalendarContainerMobile
    : CalendarContainerDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const SelectMonthDropdownWrapper = isMobile
    ? SelectMonthDropdownMobile
    : SelectMonthDropdownDesktop;
  const SelectMonthTextWrapper = isMobile
    ? SelectMonthTextMobile
    : SelectMonthTextDesktop;
  const SelectMonthContainerWrapper = isMobile
    ? SelectMonthContainerMobile
    : SelectMonthContainerDesktop;
  const StyledDateCalendarWrapper = isMobile
    ? StyledDateCalendarMobile
    : StyledDateCalendarDesktop;
  const CalendarPopoverWrapper = isMobile
    ? CalendarPopoverMobile
    : CalendarPopoverDesktop;
  const ChildContainerWrapper = isMobile
    ? ChildContainerMobile
    : ChildContainerDesktop;
  const CenterSelectionContainerWrapper = isMobile
    ? CenterSelectionContainerMobile
    : CenterSelectionContainerDesktop;
  const CenterSelectionBoxWrapper = isMobile
    ? CenterSelectionBoxMobile
    : CenterSelectionBoxDesktop;
  const CenterNameTextWrapper = isMobile
    ? CenterNameTextMobile
    : CenterNameTextDesktop;
  const CenterDistanceParentWrapper = isMobile
    ? CenterDistanceParentMobile
    : CenterDistanceParentDesktop;
  const CenterNextAvailableSlotTextWrapper = isMobile
    ? CenterNextAvailableSlotTextMobile
    : CenterNextAvailableSlotTextDesktop;
  const DateMonthTextWrapper = isMobile
    ? DateMonthTextMobile
    : DateMonthTextDesktop;
  const SlotsDataContainerWrapper = isMobile
    ? SlotsDataContainerMobile
    : SlotsDataContainerDesktop;
  const DateBoxWrapper = isMobile ? DateBoxMobile : DateBoxDesktop;
  const NoSlotsTextWrapper = isMobile ? NoSlotsTextMobile : NoSlotsTextDesktop;
  const ChildSlotsDataContainerWrapper = isMobile
    ? ChildSlotsDataContainerMobile
    : ChildSlotsDataContainerDesktop;
  const ProvisonalAndWalkinScreenTextWrapper = isMobile
    ? ProvisonalAndWalkinScreenTextMobile
    : ProvisonalAndWalkinScreenTextDesktop;
  const StyledCustomButtonWrapper = isMobile
    ? StyledCustomButtonMobile
    : StyledCustomButtonDesktop;
  return (
    <ContainerWrapper>
      <CalendarContainerWrapper>
        {centerList.length > 1 && <MobileSubHeading display={!isMobile && "none"}>
          Change / Select Centre
        </MobileSubHeading>}
        <HeadingTextWrapper
          variant="h1"
          color={theme.palette.primary.activeButton}
        > {isMobile ? "Select Slot for your scan" : "Select Date, Time for your scan"}
        </HeadingTextWrapper>
        <SelectMonthContainerWrapper >
          {isMobile && centerList.length <= 1 && <div style={{ fontStyle: "italic", fontSize: "12px" }}>Scroll down to view more slots</div>}
          {centerList.length > 1 && <Box direction="row" display={!isMobile && "none"}>
            <SelectCenterDropdownMobile onClick={handleCenterChangePopupOpen}
              sx={{
                display: !isMobile && "none",
                width: "auto",
                // minWidth: "100px",
                paddingX: "10px"
              }}>
              <SelectMonthTextWrapper sx={{ textAlign: "left" }}>
                {selectedCenterName}
                <span
                  style={{
                    marginLeft: "5px",
                    height: "50px",
                    border: "1px",
                    position: "relative",
                    top: centerChangeAnchorEl ? "2px" : "2px",
                  }}
                >
                  {centerPopOpen && (
                    <ArrowDown
                      width={isMobile ? "12px" : isTablet ? "14px" : "15px"}
                      height={isMobile ? "12px" : isTablet ? "14px" : "15px"}
                      fill={theme.palette.primary.activeButton}
                    />
                  )}
                  {!centerPopOpen && (
                    <ArrowUp
                      width={isMobile ? "12px" : isTablet ? "14px" : "15px"}
                      height={isMobile ? "12px" : isTablet ? "14px" : "15px"}
                      fill={theme.palette.primary.activeButton}
                    />
                  )}
                </span>
              </SelectMonthTextWrapper>
            </SelectCenterDropdownMobile>

            <Popover
              id={id}
              open={centerPopOpen}
              anchorEl={centerChangeAnchorEl}
              onClose={handleCenterChangePopupClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box sx={{ maxHeight: "220px", overflow: "auto" }}>
                {centerList.map((centerData, index) => {
                  return (
                    <ButtonStyledMobile
                      sx={{
                        // display:
                        //   selectedCenterId == centerData?.center_id && "none",
                        paddingX: "10px"
                      }}
                      key={index}
                      // isActive={centerData?.center_id == selectedCenterId}

                      onClick={() => {
                        if (centerData?.center_id != selectedCenterId) {
                          let firstSlotDetails = centerData?.slotDate;
                          if (firstSlotDetails) {
                            setCalendarStartDate(firstSlotDetails)
                            setCalendarEndDate(moment(firstSlotDetails, "YYYY-MM-DD").add(fetchDaysCount, "days").format("YYYY-MM-DD"))
                          } else {
                            setCalendarStartDate(moment().format("YYYY-MM-DD"));
                            setCalendarEndDate(
                              moment()
                                .add(fetchDaysCount, "days")
                                .format("YYYY-MM-DD")
                            );
                          }

                          if (centerData?.slotDate) {
                            setCalendarSelectedDate(dayjs(moment(firstSlotDetails).format("YYYY-MM-DD"), "YYYY-MM-DD"));
                          } else {
                            setCalendarSelectedDate(dayjs());
                          }
                          setSelectedSlot(null);
                          setSelectedDate(null);
                          setShowFirstDateNoSlotMessage(false);
                          useAppDispatch(
                            updateSelectedCenterWorkflow({
                              centerId: centerData?.center_id,
                              centerName: centerData?.center_short_name,
                              centerFullName: centerData?.center_name,
                              centerAddress: centerData?.center_address,
                            })
                          );
                          if (!centerData?.aborted) {
                            setNextSlotDetails(centerData?.message)
                          }
                          handleChangeCenter(centerData?.center_id);
                          handleCenterChangePopupClose();
                        } else {
                          handleCenterChangePopupClose();
                        }
                      }}
                    >
                      <CenterDropdownOptionsMobile style={{ fontFamily: "Inter Variable" }}>
                        <CenterNameContainerMobile>
                          <Box >{centerData?.center_short_name}</Box>
                          {/* <Box style={{ color: theme.palette.primary.activeButton }}>12.7km</Box> */}
                        </CenterNameContainerMobile>
                        <NextAvailabilityContainerMobile>
                          {centerData?.slotDate
                            ? `(Next availabilty : ${moment().format("YYYY-MM-DD") ==
                              centerData?.slotDate
                              ? "Today"
                              : moment(centerData?.slotDate).format(
                                "YYYY-MM-DD"
                              ) ===
                                moment().add(1, "days").format("YYYY-MM-DD")
                                ? "Tomorrow"
                                : moment(centerData?.slotDate).format("Do MMM")
                            }
                       ${centerData?.slotTime})`
                            : centerData?.message ? centerData?.message : "Provide further details"}</NextAvailabilityContainerMobile>
                      </CenterDropdownOptionsMobile>
                    </ButtonStyledMobile>
                  );
                })}
              </Box>
            </Popover>
          </Box>}
          <SelectMonthDropdownWrapper>
            <SelectMonthTextWrapper
              sx={{
                width: "100%",
                margin: "auto",
              }}
              onClick={popOpen ? handleClose : handleOpen}
            >
              {selectedMonth}
              <ArrowBox style={{ top: open ? "2px" : "3px" }}>
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
              </ArrowBox>
            </SelectMonthTextWrapper>
            <CalendarPopoverWrapper
              id={id}
              open={popOpen}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              style={{
                marginTop: isMobile && "10px"
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StyledDateCalendarWrapper
                  views={["day"]}
                  value={calendarSelectedDate}

                  onChange={(date) => {
                    const formattedDate = date.format("YYYY-MM-DD");
                    setShowFirstDateNoSlotMessage(true);
                    handleClose();
                    if (
                      formattedDate !=
                      calendarSelectedDate?.format("YYYY-MM-DD")
                    ) {
                      const startDateIs = formattedDate;
                      const endDateIs = moment(formattedDate)
                        .add(fetchDaysCount, "days")
                        .format("YYYY-MM-DD");
                      setCalendarStartDate(startDateIs);
                      setCalendarEndDate(endDateIs);
                      setSelectedSlot(null);
                      setSelectedDate(null);
                      let needToResetCalanderData = true;
                      setSelectedMonth(moment(formattedDate).format("MMMM"));
                      fetchCalendarData(
                        startDateIs,
                        endDateIs,
                        needToResetCalanderData
                      );
                      setCalendarSelectedDate(date);
                    }
                  }}
                  sx={{
                    width: isMobile ? 260 : 280,
                    height: 280
                  }}
                  shouldDisableMonth={(date) => {
                    const targetDate = date.format("YYYYMM");
                    const TwoMonthLater = moment()
                      .add(3, "Month")
                      .format("YYYYMM");


                    let NextSlotDetails = nextSlotDetails;
                    let diabled = false;

                    centerList?.forEach((centerObj) => {
                      if (centerObj?.center_id === selectedCenterId) {
                        if (centerObj?.aborted) {
                          NextSlotDetails = date.format("YYYY-MM-DD");
                        } else {
                          NextSlotDetails = moment(centerObj?.slotDate).format("YYYY-MM-DD"); // Assuming this is already a date string
                        }
                      }
                    });

                    if (date.format("YYYYMMDD") < dayjs(NextSlotDetails).format("YYYYMMDD")) {
                      diabled = true;
                    }

                    return diabled ? diabled : Number(TwoMonthLater) - Number(targetDate) <= 0;
                  }}
                  disablePast
                />
              </LocalizationProvider>
            </CalendarPopoverWrapper>
          </SelectMonthDropdownWrapper>
        </SelectMonthContainerWrapper>
        <ChildContainerWrapper>
          <CenterSelectionContainerWrapper display={isMobile && "none"}>
            {centerList.map((centerData) => {
              return (
                <CenterSelectionBoxWrapper
                  sx={{
                    "&:hover": {
                      backgroundColor:
                        selectedCenterId != centerData?.center_id &&
                        !isCalendarDataLoading &&
                        "#ebe8e8",
                    },
                    backgroundColor:
                      selectedCenterId == centerData?.center_id &&
                      theme.palette.primary.activeButton,
                    color: selectedCenterId == centerData?.center_id && "white",
                  }}
                  selected={centerData?.center_id == selectedCenterId}
                  onClick={() => {
                    if (
                      centerData?.center_id != selectedCenterId &&
                      !isCalendarDataLoading
                    ) {
                      let firstSlotDetails = centerData?.slotDate;
                      if (firstSlotDetails) {
                        setCalendarStartDate(firstSlotDetails)
                        setCalendarEndDate(moment(firstSlotDetails, "YYYY-MM-DD").add(fetchDaysCount, "days").format("YYYY-MM-DD"))
                      } else {
                        setCalendarStartDate(moment().format("YYYY-MM-DD"));
                        setCalendarEndDate(
                          moment()
                            .add(fetchDaysCount, "days")
                            .format("YYYY-MM-DD")
                        );
                      }
                      if (centerData?.slotDate) {
                        setCalendarSelectedDate(dayjs(moment(firstSlotDetails).format("YYYY-MM-DD"), "YYYY-MM-DD"));
                      } else {
                        setCalendarSelectedDate(dayjs());
                      }

                      setSelectedSlot(null);
                      setSelectedDate(null);
                      setSelectedMonth(moment().format("MMMM"));
                      setShowFirstDateNoSlotMessage(false);
                      useAppDispatch(
                        updateSelectedCenterWorkflow({
                          centerId: centerData?.center_id,
                          centerName: centerData?.center_short_name,
                          centerFullName: centerData?.center_name,
                          centerAddress: centerData?.center_address,
                        })
                      );
                      if (!centerData?.aborted) {
                        setNextSlotDetails(centerData?.message)
                      }
                      handleChangeCenter(centerData?.center_id);
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <CenterDistanceParentWrapper>
                      <CenterNameTextWrapper
                        selected={centerData?.center_id == selectedCenterId}
                      >
                        {centerData?.center_short_name}
                      </CenterNameTextWrapper>
                      {/* <Box
                        display={
                          centerData?.center_id == selectedCenterId && "none"
                        }
                        fontSize={"10px"}
                      >
                        12.2km
                      </Box> */}
                    </CenterDistanceParentWrapper>
                    <CenterNextAvailableSlotTextWrapper>
                      {centerData?.slotDate
                        ? `(Next availabilty : ${moment().format("YYYY-MM-DD") ==
                          centerData?.slotDate
                          ? "Today"
                          : moment(centerData?.slotDate).format(
                            "YYYY-MM-DD"
                          ) ===
                            moment().add(1, "days").format("YYYY-MM-DD")
                            ? "Tomorrow"
                            : moment(centerData?.slotDate).format("Do MMM")
                        }
                       ${centerData?.slotTime})`
                        : centerData?.message ? centerData?.message : "Provide further details"}
                    </CenterNextAvailableSlotTextWrapper>
                  </Box>
                </CenterSelectionBoxWrapper>
              );
            })}
          </CenterSelectionContainerWrapper>
          <SlotsDataContainerWrapper display={showCenterListInMobile && "none"}>
            {nextSlotDetails != "Subject to availability" && nextSlotDetails != "Walk in" && nextSlotDetails != 'Provide further details' && <ChildSlotsDataContainerWrapper>
              {!isSlotsAvailable && (
                <DateBoxWrapper
                  display={
                    showFirstDateNoSlotMessage
                      ? "none"
                      : isCalendarDataLoading && "none"
                  }
                  marginBottom={"5%"}
                >
                  <DateMonthTextWrapper>
                    {moment(calendarStartDate).format("Do MMM, dddd")}
                  </DateMonthTextWrapper>
                  <NoSlotsTextWrapper
                    sx={{ color: theme.palette.primary.activeButton }}
                  >
                    No Slots available
                  </NoSlotsTextWrapper>
                </DateBoxWrapper>
              )}
              {calendarData?.map((slotsData) => {
                if (slotsData?.isAvailable == false) {
                  if (slotsData?.date != calendarStartDate) {
                    return <></>;
                  }
                  return (
                    <DateBoxWrapper
                      display={
                        (isCalendarDataLoading ||
                          !showFirstDateNoSlotMessage) &&
                        "none"
                      }
                      ref={
                        calendarStartDate ==
                          moment(slotsData?.date).format("YYYY-MM-DD")
                          ? lastSlotRef
                          : null
                      }
                    >
                      <DateMonthTextWrapper>
                        {moment(slotsData?.date).format("Do MMM, dddd")}
                      </DateMonthTextWrapper>
                      <NoSlotsTextWrapper
                        sx={{ color: theme.palette.primary.activeButton }}
                      >
                        No Slots available
                      </NoSlotsTextWrapper>
                    </DateBoxWrapper>
                  );
                }
                return (
                  <DateBoxWrapper
                    display={isCalendarDataLoading && "none"}
                    ref={
                      calendarStartDate ==
                        moment(slotsData?.date).format("YYYY-MM-DD")
                        ? lastSlotRef
                        : null
                    }
                  >
                    <DateMonthTextWrapper>
                      {moment(slotsData?.date).format("Do MMM, dddd")}
                    </DateMonthTextWrapper>
                    <SingleDateSlotList
                      availableSlots={slotsData?.available_slots || []}
                      selectedSlot={selectedSlot}
                      selectedDate={selectedDate}
                      setSelectedSlot={setSelectedSlot}
                      setSelectedDate={setSelectedDate}
                      date={slotsData?.date}
                      handleCofirmSlot={handleCofirmSlot}
                      isHandleUtteranceApiPending={isHandleUtteranceApiPending}
                    />
                  </DateBoxWrapper>
                );
              })}
              {isCalendarDataLoading && <CustomLoader height={"300px"} />}
              <SubmitButtonStack
                style={{
                  display: isCalendarDataLoading && "none",
                }}
              >
                <SubmitButton
                  variant="contained"
                  // sx={{
                  //   color: "black",
                  //   backgroundColor: "#D9D9D9",
                  //   "&:hover": {
                  //     color: "black",
                  //     backgroundColor: "#b5b3b3",
                  //     // animation: "blink 0.5s",
                  //   },
                  // }}
                  sx={{
                    fontWeight: "500"
                  }}
                  onClick={() => {
                    const startDateIs = moment(calendarEndDate)
                      .add(1, "days")
                      .format("YYYY-MM-DD");
                    const endDateIs = moment(calendarEndDate)
                      .add(fetchDaysCount, "days")
                      .format("YYYY-MM-DD");
                    setCalendarStartDate(startDateIs);
                    setCalendarEndDate(endDateIs);
                    setShowFirstDateNoSlotMessage(true);
                    let needToResetCalanderData = false;
                    fetchCalendarData(
                      startDateIs,
                      endDateIs,
                      needToResetCalanderData
                    );
                  }}
                >
                  {isCalendarDataLoading ? "Loading..." : "Show more.."}
                </SubmitButton>
              </SubmitButtonStack>
            </ChildSlotsDataContainerWrapper>}
            {nextSlotDetails == 'Provide further details' && <ChildSlotsDataContainerWrapper
              sx={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                gap: "20px"
              }}
            >
              <ProvisonalAndWalkinScreenTextWrapper
                style={{ fontSize: isMobile && "14px" }}
              >I am unable to find any empty slot for the next few days.</ProvisonalAndWalkinScreenTextWrapper>
              <ProvisonalAndWalkinScreenTextWrapper
                style={{ fontSize: isMobile && "14px" }}
              >Please provide your contact details and one of our team members will contact you to help you book an appointment.</ProvisonalAndWalkinScreenTextWrapper>
              <ProvisonalAndWalkinScreenTextWrapper>Our business hours are : {helpText}.</ProvisonalAndWalkinScreenTextWrapper>
              <StyledCustomButtonWrapper
                sx={{
                  backgroundColor: theme.palette.primary.activeButton,
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.activeButton,
                    color: "white",
                    animation: "blink 0.5s",
                  },
                }}
                onClick={() => {
                  if (!isHandleUtteranceApiPending) {
                    let context = "UNABLE_TO_FIND_EMPTY_SLOTS"
                    handleChangeConvertToProvisional(context)
                  }
                }}
              >
                {isHandleUtteranceApiPending ? "Loading..." : "Provide your details"}
              </StyledCustomButtonWrapper>
            </ChildSlotsDataContainerWrapper>}


            {nextSlotDetails == "Subject to availability" && <ChildSlotsDataContainerWrapper
              sx={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                gap: "20px"
              }}
            >
              <ProvisonalAndWalkinScreenTextWrapper
                style={{ fontSize: isMobile && "14px" }}
              >The requested scan needs to be booked by our staff.</ProvisonalAndWalkinScreenTextWrapper>
              <ProvisonalAndWalkinScreenTextWrapper>Please provide your contact details and our staff will contact you in next 24hrs (business hours).</ProvisonalAndWalkinScreenTextWrapper>
              {/* <ProvisonalAndWalkinScreenTextWrapper>Our business hours : {helpText}.</ProvisonalAndWalkinScreenTextWrapper> */}
              <StyledCustomButtonWrapper
                sx={{
                  backgroundColor: theme.palette.primary.activeButton,
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.activeButton,
                    color: "white",
                    animation: "blink 0.5s",
                  },
                }}
                onClick={() => {
                  if (!isHandleUtteranceApiPending) {
                    let context = "PROVISIONAL_BOOKING";
                    handleChangeConvertToProvisional(context)
                  }
                }}
              >
                {isHandleUtteranceApiPending ? "Loading..." : "Provide your details"}
              </StyledCustomButtonWrapper>
            </ChildSlotsDataContainerWrapper>}

            {nextSlotDetails == "Walk in" && <ChildSlotsDataContainerWrapper
              sx={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                gap: "20px"
              }}
            >
              <ProvisonalAndWalkinScreenTextWrapper
                style={{ fontSize: isMobile && "14px" }}
              >You don’t need to book an appointment for this scan. </ProvisonalAndWalkinScreenTextWrapper>
              <ProvisonalAndWalkinScreenTextWrapper>You can walk in directly during business hours. Please bring the referral from your doctor.</ProvisonalAndWalkinScreenTextWrapper>
              <ProvisonalAndWalkinScreenTextWrapper>Our business hours are : {helpText}.</ProvisonalAndWalkinScreenTextWrapper>
              <StyledCustomButtonWrapper
                sx={{
                  backgroundColor: theme.palette.primary.activeButton,
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.activeButton,
                    color: "white",
                    animation: "blink 0.5s",
                  },
                }}
                onClick={() => {
                  if (!isHandleUtteranceApiPending) {
                    handleConfirmWalkin()
                  }
                }}
              >
                {isHandleUtteranceApiPending ? "Loading..." : "Finish"}
              </StyledCustomButtonWrapper>
            </ChildSlotsDataContainerWrapper>}
          </SlotsDataContainerWrapper>
        </ChildContainerWrapper>
      </CalendarContainerWrapper>
    </ContainerWrapper>
  );
};

export default MultiCenterCalendar;
