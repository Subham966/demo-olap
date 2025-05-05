import { Box, Stack, Typography, styled } from "@mui/material";
import { SlotTime, SlotsTimeRangeContainer } from "./SlotsTimeRange.style";

const SlotTimeDesktop = styled(SlotTime)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 font-size:11px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 font-size:13px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 font-size:13px ;
  }
`;

const SlotsTimeRangeContainerDesktop= styled(SlotsTimeRangeContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    grid-template-columns: repeat(8,1fr) ;
    gap:5px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;
export { SlotTimeDesktop,SlotsTimeRangeContainerDesktop};