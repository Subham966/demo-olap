import { Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { COLORS } from "@/theme";
import { useSelector } from "react-redux";
import { TimeCell } from "../SelectSlots.style";
import {
  SlotTimeMobile,
  SlotsTimeRangeContainerMobile,
} from "./SlotsTimeRange.mobile.style";
import {
  SlotTimeDesktop,
  SlotsTimeRangeContainerDesktop,
} from "./SlotsTimeRange.desktop.style";

const SlotsTimeRange = ({ filteredSlote, selectedSlot, setSelectedSlot }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  if (filteredSlote?.length == 0) {
    return;
  }
  const SlotTimeWrapper = isMobile ? SlotTimeMobile : SlotTimeDesktop;
  const SlotsTimeRangeContainerWrapper = isMobile
    ? SlotsTimeRangeContainerMobile
    : SlotsTimeRangeContainerDesktop;
  return (
    <Stack>
      <SlotsTimeRangeContainerWrapper
        direction="row"
        flexWrap="wrap"
        width="100%"
      >
        {filteredSlote?.map((item, index) => (
          <TimeCell
            key={index}
            bgcolor={
              selectedSlot === item
                ? theme.palette.primary.activeButton
                : COLORS.WHITE
            }
            boxShadow={
              "rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.05) 0px 2px 6px 2px"
            }
            sx={{
              cursor: "pointer",
              "&:hover": selectedSlot !== item && {
                backgroundColor: COLORS.GREY_3,
              },
            }}
            color={selectedSlot === item ? COLORS.WHITE : COLORS.BLACK}
            onClick={() => setSelectedSlot(item)}
          >
            <SlotTimeWrapper
              sx={{
                fontWeight: selectedSlot === item && "600",
              }}
            >
              {item}
            </SlotTimeWrapper>
          </TimeCell>
        ))}
      </SlotsTimeRangeContainerWrapper>
    </Stack>
  );
};

export default SlotsTimeRange;
