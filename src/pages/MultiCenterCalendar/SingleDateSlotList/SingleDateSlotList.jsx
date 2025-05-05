import { useTheme } from "@emotion/react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ContainerMobile,
  StyledCustomButtonMobile,
} from "./SingleDateSlotList.mobile.style";
import {
  ContainerDesktop,
  StyledCustomButtonDesktop,
} from "./SingleDateSlotList.desktop.style";
import SlotsTimeRange from "../SlotsTimeRange/SlotsTimeRange";
import moment from "moment";
import { StyledCustomButton } from "./SingleDateSlotList.style";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useAppDispatch } from "@/redux";

const SingleDateSlotList = ({
  availableSlots,
  selectedSlot,
  selectedDate,
  setSelectedSlot,
  setSelectedDate,
  date,
  handleCofirmSlot,
  isHandleUtteranceApiPending,
}) => {
  const theme = useTheme();
  const { setPopupScreen, setCenterSlotDetails } = chatDetailsActions;
  const { errorMessage, isErrorPresent, selectedCenterId, selectedCenterName } =
    useSelector((state) => state.chatDetails);
  const centerDetails = useSelector((state) => state.centerDetails);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const uniqueSlots = [];
  const slotIdxTracker = [];
  availableSlots?.sort(
    (a, b) => moment(a.schedule).valueOf() - moment(b.schedule).valueOf()
  );
  availableSlots?.forEach((slot) => {
    if (!slotIdxTracker.includes(slot?.slot_idx)) {
      slot = {
        ...slot,
        time: moment(slot?.schedule).format("HH:mm:ss"),
        date: moment(slot?.schedule).format("YYYY-MM-DD"),
      };
      uniqueSlots.push(slot);
      slotIdxTracker.push(slot?.slot_idx);
    }
  });
  const filterTimes = (times, filterValue) => {
    switch (filterValue) {
      case "8 AM - 12 PM":
        return times?.filter((time) => {
          const tempM = moment(time?.schedule).format("hh:mm A");
          const m = moment(tempM, "hh:mm A");
          return m.isBetween(
            moment("00:00 AM", "hh:mm A"),
            moment("12:00 PM", "hh:mm A"),
            null,
            "[)"
          );
        });
      case "12 PM - 3 PM":
        return times?.filter((time) => {
          const tempM = moment(time?.schedule).format("hh:mm A");
          const m = moment(tempM, "hh:mm A");

          return m.isBetween(
            moment("12:00 PM", "hh:mm A"),
            moment("03:00 PM", "hh:mm A"),
            null,
            "[)"
          );
        });
      case "3 PM - 6 PM":
        return times?.filter((time) => {
          const tempM = moment(time?.schedule).format("hh:mm A");
          const m = moment(tempM, "hh:mm A");

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
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const StyledCustomButtonWrapper = isMobile
    ? StyledCustomButtonMobile
    : StyledCustomButtonDesktop;

  const handleConfirm = (selectedSlotData, selectedDateData) => {
    if (isMobile) {
      const combinedDateTime = selectedDateData + " " + selectedSlotData;
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
    }
  };
  return (
    <ContainerWrapper
      sx={{
        display: "grid",
        gap: "10px",
      }}
    >
      {filterTimes(uniqueSlots, "8 AM - 12 PM")?.length != 0 && <SlotsTimeRange
        filteredSlote={filterTimes(uniqueSlots, "8 AM - 12 PM")}
        selectedSlot={selectedSlot}
        selectedDate={selectedDate}
        setSelectedSlot={setSelectedSlot}
        selectedCenterId={selectedCenterId}
        setSelectedDate={setSelectedDate}
        handleConfirmClicked={handleConfirm}
      />}
      {filterTimes(uniqueSlots, "12 PM - 3 PM")?.length != 0 && <SlotsTimeRange
        filteredSlote={filterTimes(uniqueSlots, "12 PM - 3 PM")}
        selectedSlot={selectedSlot}
        selectedDate={selectedDate}
        setSelectedSlot={setSelectedSlot}
        selectedCenterId={selectedCenterId}
        setSelectedDate={setSelectedDate}
        handleConfirmClicked={handleConfirm}
      />}
      {filterTimes(uniqueSlots, "3 PM - 6 PM")?.length != 0 && <SlotsTimeRange
        filteredSlote={filterTimes(uniqueSlots, "3 PM - 6 PM")}
        selectedSlot={selectedSlot}
        selectedDate={selectedDate}
        setSelectedSlot={setSelectedSlot}
        selectedCenterId={selectedCenterId}
        setSelectedDate={setSelectedDate}
        handleConfirmClicked={handleConfirm}
      />}
      {filterTimes(uniqueSlots, "8 AM - 12 PM").length == 0 &&
        filterTimes(uniqueSlots, "12 PM - 3 PM").length == 0 &&
        filterTimes(uniqueSlots, "3 PM - 6 PM").length == 0 && (
          <Box sx={{ marginTop: "-20px", fontSize: "12px", marginLeft: "5px" }}>
            No Slots found
          </Box>
        )}
      {date == selectedDate && selectedSlot && !isMobile && (
        <Stack
          direction="row"
          justifyContent={isMobile ? "center" : "right"}
          gap="8px"
          marginTop="10px"
          marginRight={!isMobile && "20px"}
        >
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
            onClick={async () => {
              if (!isHandleUtteranceApiPending) {
                if (isMobile) {
                  const combinedDateTime = selectedDate + " " + selectedSlot;
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
                  await handleCofirmSlot();
                }
              }
            }}
          >
            {isHandleUtteranceApiPending ? "Loading.." : "Confirm"}
          </StyledCustomButtonWrapper>
          <StyledCustomButtonWrapper
            onClick={() => setSelectedSlot(null)}
            sx={{
              backgroundColor: "#939393",
              color: "white",
              "&:hover": {
                backgroundColor: "#939393",
                color: "white",
                animation: "blink 0.5s",
              },
            }}
          >
            Close
          </StyledCustomButtonWrapper>
        </Stack>
      )}
    </ContainerWrapper>
  );
};

export default SingleDateSlotList;
