import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { COLORS } from "@/theme";
import ArrowLeft from "@/assets/ArrowLeft.svg?react";
import ArrowRight from "@/assets/ArrowRight.svg?react";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  CalenderDateMobile,
  CalenderWeekDayMobile,
  CustomIconButtonMobile,
  DayBlockMobile,
} from "./HorizontalCalendar.mobile.style";
import {
  CalenderDateDesktop,
  CalenderWeekDayDesktop,
  CustomIconButtonDesktop,
  DayBlockDesktop,
} from "./HorizontalCalendar.desktop.style";

const DayComponent = ({
  date,
  selected,
  onClick,
  isAvailable,
  totalSlotAvailable,
}) => {
  const currentDate = new Date(date);
  const weekDay = currentDate.toLocaleDateString("en-US", { weekday: "short" });
  const day = currentDate.getDate();
  const [slotsData, setSlotsData] = useState([]);
  const month = currentDate.toLocaleDateString("en-US", { month: "short" });
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isCenterAvailable = isAvailable;
  const { screenHeight } = useSelector((state) => state.screenSize);
  let color;

  if (isCenterAvailable) {
    color = selected
      ? COLORS.WHITE
      : isAvailable
        ? theme.palette.primary.activeButton
        : COLORS.WHITE;
  } else {
    color = COLORS.GREY;
  }

  const shouldHandleClick = isAvailable;

  const CalenderDateWrapper = isMobile
    ? CalenderDateMobile
    : CalenderDateDesktop;
  const CalenderWeekDayWrapper = isMobile
    ? CalenderWeekDayMobile
    : CalenderWeekDayDesktop;
  const DayBlockWrapper = isMobile ? DayBlockMobile : DayBlockDesktop;
  return (
    <DayBlockWrapper
      onClick={shouldHandleClick ? onClick : () => { }}
      bgcolor={
        selected
          ? theme.palette.primary.activeButton
          : isAvailable || weekDay !== "Sun"
            ? COLORS.WHITE
            : COLORS.GREY_2
      }
      color={color}
      boxShadow={
        "rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.1) 0px 2px 6px 2px"
      }
      sx={{
        cursor: "pointer",
        "&:hover": !(selected || !isAvailable) && {
          backgroundColor: COLORS.GREY_3,
        },
      }}
    >
      <CalenderDateWrapper fontWeight={600} height={"60px"}>
        {`${day} ${month}`}
        <CalenderWeekDayWrapper
          fontWeight={400}
          lineHeight={"20px"}
          color={color}
          display={"block"}
          marginLeft={!isMobile && "8px"}
          textAlign={"center"}
        >
          {weekDay}
        </CalenderWeekDayWrapper>
      </CalenderDateWrapper>
      {/* {totalSlotAvailable && <div style={{ width: "100%", borderTop: "1px solid lightgray", textAlign:"center",backgroundColor:"lightgray",borderRadius:"0px 0px 5px 5px",
    }}>
        <span style={{
          fontSize: "12px",
          color: "black",
          textAlign:"center"
        }}>{totalSlotAvailable ? `${totalSlotAvailable} Slots` : ""}</span>
      </div>} */}
    </DayBlockWrapper>
  );
};

function HorizontalCalendar({
  handleDayClick,
  selectedDate,
  setSelectedDate,
  setCurrentStartDate,
  currentStartDate,
  calendarAvailableDate,
  setSelectedSlot,
  numOfDaysToFetch,
  calendarStartDate,
  calendarEndDate,
  setCalendarStartDate,
  setCalendarEndDate,
  setFetchOneMonthData
}) {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  // useEffect(() => {
  //   const today = new Date();
  //   setCurrentStartDate(today);
  //   // setSelectedDate(today);
  //   // handleDayClick(moment(new Date()).format("YYYY-MM-DD"));
  // }, []);

  const onDayClick = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    handleDayClick(moment(date).format("YYYY-MM-DD"));
  };

  const handlePrev = () => {
    let startDate = moment(calendarEndDate)
      .subtract(2 * numOfDaysToFetch - 1, "days")
      .format("YYYY-MM-DD");
    let endDate = moment(calendarEndDate)
      .subtract(numOfDaysToFetch, "days")
      .format("YYYY-MM-DD");
    setCalendarStartDate(startDate);
    setCalendarEndDate(endDate);
    setCurrentStartDate(startDate);
    setSelectedDate(null);
    setSelectedSlot(null);
    setFetchOneMonthData(false)
  };

  const handleNext = () => {
    let startDate = moment(calendarEndDate).add(1, "days").format("YYYY-MM-DD");
    let endDate = moment(startDate)
      .add(numOfDaysToFetch - 1, "days")
      .format("YYYY-MM-DD");
    setCalendarStartDate(startDate);
    setCalendarEndDate(endDate);
    setCurrentStartDate(startDate);
    setSelectedDate(null);
    setSelectedSlot(null);
    setFetchOneMonthData(false)
  };

  const getDays = (startDate) => {
    return Array.from({ length: numOfDaysToFetch }, (_, index) =>
      moment(startDate).add(index, "days").format("YYYY-MM-DD")
    );
  };

  const days = getDays(currentStartDate);
  const CustomIconButtonWrapper = isMobile
    ? CustomIconButtonMobile
    : CustomIconButtonDesktop;
  return (
    <Box className="calendar-container">
      <Stack direction="row" justifyContent="center" alignItems="center">
        <CustomIconButtonWrapper
          onClick={handlePrev}
          sx={{
            padding: "0px",
            "& svg path": {
              fill: moment(calendarStartDate, "YYYY-MM-DD")
                .subtract(1, "days")
                .isBefore(moment().format("YYYY-MM-DD"))
                ? "gray"
                : theme.palette.primary.activeButton,
            },
          }}
          disabled={moment(calendarStartDate, "YYYY-MM-DD")
            .subtract(1, "days")
            .isBefore(moment().format("YYYY-MM-DD"))}
        >
          <ArrowLeft
            width={isSmUp ? "30px" : "22px"}
            Height={isSmUp ? "30px" : "22px"}
          />
        </CustomIconButtonWrapper>
        <Grid
          container
          justifyContent="space-between"
          paddingX={"10px"}
          marginY={"5px"}
        >
          {days.map((date, index) => {
            let isAvailable = false;
            let totalSlotAvailable = null;

            const currentDate = moment(date);
            const day = currentDate.format("DD");
            const month = currentDate.format("MM");
            const year = currentDate.format("YYYY");
            if (calendarAvailableDate) {
              calendarAvailableDate?.data?.map((availableDateObj) => {
                if (
                  availableDateObj.isAvailable &&
                  `${year}-${month}-${day}` == availableDateObj.date
                ) {
                  isAvailable = true;
                  totalSlotAvailable =
                    availableDateObj?.available_slots?.length;
                }
              });
            }

            const isSelected =
              selectedDate &&
              new Date(date).toDateString() ===
              new Date(selectedDate).toDateString();
            return (
              <Grid
                item
                md={isSmUp ? 12 / 7 : 4}
                sm={3}
                display="flex"
                justifyContent="center"
                key={index}
              >
                <DayComponent
                  date={date}
                  selected={isSelected}
                  onClick={() => onDayClick(date)}
                  isAvailable={isAvailable}
                  totalSlotAvailable={totalSlotAvailable}
                />
              </Grid>
            );
          })}
        </Grid>
        <CustomIconButtonWrapper
          onClick={handleNext}
          sx={{
            padding: "0px",
            "& svg path": {
              fill: theme.palette.primary.activeButton,
            },
          }}
        >
          <ArrowRight
            width={isSmUp ? "30px" : "22px"}
            Height={isSmUp ? "30px" : "22px"}
          />
        </CustomIconButtonWrapper>
      </Stack>
    </Box>
  );
}

export default HorizontalCalendar;
