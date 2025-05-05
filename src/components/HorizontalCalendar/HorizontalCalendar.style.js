import styled from "@emotion/styled";
import { IconButton, Stack, Typography } from "@mui/material";
import ArrowLeft from "@/assets/ArrowLeft.svg?react";
import ArrowRight from "@/assets/ArrowRight.svg?react";

const DayBlock = styled(Stack)`
  width: 88px;
  height: 88px;
  border-radius: 9.42px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
const CalenderDate = styled(Typography)`
   font-size: 18px;
   margin-top:12px ;
`;
const CalenderWeekDay = styled(Typography)`
  font-size: 18px;
`;
const StyledRightArrow = styled(ArrowRight)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const StyledLeftArrow = styled(ArrowLeft)`
  width: 30px;
  height: 30px;
`;
const CustomIconButton= styled(IconButton)`
 
`;

export { DayBlock, StyledRightArrow, StyledLeftArrow,CalenderWeekDay,CalenderDate,CustomIconButton };
