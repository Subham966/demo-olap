import { Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { COLORS } from "@/theme";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  SlotTime,
  SlotsTimeRangeContainer,
} from "./SlotsTimeRange/SlotsTimeRange.style";
import { TimeCellMobile } from "./MultiCenterCalendar.mobile.style";
import { TimeCellDesktop } from "./MultiCenterCalendar.desktop.style";
import { SlotTimeMobile } from "./SlotsTimeRange/SlotsTimeRange.mobile.style";
import { SlotTimeDesktop } from "./SlotsTimeRange/SlotsTimeRange.desktop.style";

const CenterSlotTimeRange = ({
  filteredSlote,
  selectedSlot,
  center,
  setSelectedSlot,
  setCenterDetails,
  setDateTime,
}) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const TimeCellWrapper = isMobile ? TimeCellMobile : TimeCellDesktop;
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  const SlotTimeWrapper = isMobile ? SlotTimeMobile : SlotTimeDesktop;
  return (
    <SlotsTimeRangeContainer direction="row" flexWrap="wrap">
      {filteredSlote?.map((item, index) => {
        return (
          <TimeCellWrapper
            boxShadow={
              "rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.05) 0px 2px 6px 2px"
            }
            sx={{
              cursor: "pointer",
              "&:hover": selectedSlot !==
                moment(item?.schedule).format("hh:mm A") && {
                backgroundColor: COLORS.GREY_3,
              },
            }}
            key={index}
            bgcolor={
              selectedSlot === moment(item?.schedule).format("hh:mm A")
                ? theme.palette.primary.activeButton
                : COLORS.WHITE
            }
            color={
              selectedSlot === moment(item?.schedule).format("hh:mm A")
                ? COLORS.WHITE
                : COLORS.BLACK
            }
            onClick={() => {
              setSelectedSlot(moment(item?.schedule).format("hh:mm A"));
              setDateTime(item?.schedule);
              setCenterDetails(center?.centerName);
            }}
          >
            <SlotTimeWrapper
              sx={{
                fontWeight:
                  selectedSlot === moment(item?.schedule).format("hh:mm A") &&
                  "600",
              }}
            >
              {moment(item?.schedule).format("hh:mm A")}
            </SlotTimeWrapper>
          </TimeCellWrapper>
        );
      })}
    </SlotsTimeRangeContainer>
  );
};

export default CenterSlotTimeRange;
