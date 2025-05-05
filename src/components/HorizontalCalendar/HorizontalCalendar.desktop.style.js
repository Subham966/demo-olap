import styled from "@emotion/styled";
import { IconButton, Stack, Typography } from "@mui/material";
import ArrowLeft from "@/assets/ArrowLeft.svg?react";
import ArrowRight from "@/assets/ArrowRight.svg?react";
import { CalenderDate, CalenderWeekDay, CustomIconButton, DayBlock, StyledLeftArrow, StyledRightArrow } from "./HorizontalCalendar.style";

const DayBlockDesktop = styled(DayBlock)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  width: 60px;
  height: 60px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  width: 78px;
  height: 62px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  width: 82px;
  height: 82px;
  } 
`;
const CalenderDateDesktop = styled(CalenderDate)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:13px;
  margin-top:10px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 font-size:15px ;
   margin-top:10px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 font-size:18px ;
  } 
`;
const CalenderWeekDayDesktop = styled(CalenderWeekDay)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 font-size:13px;
  margin-top:-3px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 font-size:15px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 font-size:18px ;
  } 
`;
const StyledRightArrowDesktop = styled(StyledRightArrow)`

`;

const StyledLeftArrowDesktop = styled(StyledLeftArrow)`

`;
const CustomIconButtonDesktop= styled(CustomIconButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  zoom:0.7 ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  zoom:0.8 ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  zoom:0.9 ;
  } 
`;

export { DayBlockDesktop, StyledRightArrowDesktop, StyledLeftArrowDesktop,CalenderWeekDayDesktop,CalenderDateDesktop,CustomIconButtonDesktop };
