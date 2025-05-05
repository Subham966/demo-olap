import { useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { COLORS } from "@/theme";
import moment from "moment";
import {
  SlotTimeMobile,
  SlotsTimeRangeContainerMobile,
  TimeCellMobile,
} from "./SlotsTimeRange.mobile.style";
import {
  SlotTimeDesktop,
  SlotsTimeRangeContainerDesktop,
  TimeCellDesktop,
} from "./SlotsTimeRange.desktop.style";

const SlotsTimeRange = ({
  filteredSlote,
  selectedSlot,
  selectedDate,
  selectedCenterId,
  setSelectedSlot,
  setSelectedDate,
  handleConfirmClicked,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const TimeCellWrapper = isMobile ? TimeCellMobile : TimeCellDesktop;
  const SlotTimeWrapper = isMobile ? SlotTimeMobile : SlotTimeDesktop;
  const SlotsTimeRangeContainerWrapper = isMobile
    ? SlotsTimeRangeContainerMobile
    : SlotsTimeRangeContainerDesktop;
  return (
    <SlotsTimeRangeContainerWrapper direction="row" flexWrap="wrap">
      {filteredSlote?.map((item, index) => {
        return (
          <TimeCellWrapper
            boxShadow={
              "rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.05) 0px 2px 6px 2px"
            }
            sx={{
              cursor: "pointer",
              "&:hover":
                !isMobile && (selectedSlot === moment(item?.schedule).format("hh:mm A") &&
                  selectedDate === item?.date
                  ? {
                    backgroundColor: theme.palette.primary.activeButton,
                    color: "white",
                  } // Add a valid hover style
                  : {}),
            }}
            key={index}
            bgcolor={
              !isMobile && selectedSlot === moment(item?.schedule).format("hh:mm A") &&
                selectedDate == item?.date
                ? theme.palette.primary.activeButton
                : COLORS.WHITE
            }
            color={
              !isMobile && selectedSlot === moment(item?.schedule).format("hh:mm A") &&
                selectedDate == item?.date
                ? COLORS.WHITE
                : COLORS.BLACK
            }
            onClick={() => {
              setSelectedSlot(moment(item?.schedule).format("hh:mm A"));
              setSelectedDate(item?.date);
              if (isMobile) {
                handleConfirmClicked(
                  moment(item?.schedule).format("hh:mm A"),
                  item?.date
                );
              }
            }}
          >
            <SlotTimeWrapper
              sx={{
                fontWeight:
                  selectedSlot === moment(item?.schedule).format("hh:mm A") &&
                  selectedDate == item?.date &&
                  "600",
              }}
            >
              {moment(item?.schedule).format("hh:mm A")}
            </SlotTimeWrapper>
          </TimeCellWrapper>
        );
      })}
    </SlotsTimeRangeContainerWrapper>
  );
};

export default SlotsTimeRange;
