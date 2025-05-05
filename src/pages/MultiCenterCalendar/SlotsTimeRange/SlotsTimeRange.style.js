import { Box, Stack, Typography, styled } from "@mui/material";

const SlotTime = styled(Typography)`
   font-size: 14px;
`;

const SlotsTimeRangeContainer= styled(Stack)`
  gap:10.2px ;
  display: grid ;
  grid-template-columns: repeat(8,1fr) ;
`;
const TimeCell = styled(Stack)`
  height: 30px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-family: Inter Variable;
  font-size: 12;
  font-weight: 500;
  line-height: 24px;
  flex-direction: row;
 
  &:hover{
  // animation: blink 0.8s ;
  background-color:lightgray ;
  color:black ;
  }

`;
export { SlotTime,SlotsTimeRangeContainer,TimeCell};