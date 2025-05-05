import { Box, Stack, Typography, styled } from "@mui/material";

const SlotTime = styled(Typography)`
   font-size: 14px;
`;

const SlotsTimeRangeContainer= styled(Stack)`
  gap:10.2px ;
  display: grid ;
  grid-template-columns: repeat(8,1fr) ;
`;
export { SlotTime,SlotsTimeRangeContainer};