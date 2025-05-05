import { Box, Stack, Typography, styled } from "@mui/material";
import { SlotTime, SlotsTimeRangeContainer, TimeCell } from "./SlotsTimeRange.style";

const SlotTimeDesktop = styled(SlotTime)`
 font-size:11px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 font-size:10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 font-size:11px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 font-size:11px ;
  }
`;

const SlotsTimeRangeContainerDesktop = styled(SlotsTimeRangeContainer)`
  grid-template-columns: repeat(7,1fr) ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    grid-template-columns: repeat(6,1fr) ;
    gap:5px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    grid-template-columns: repeat(6,1fr) ;
    gap:5px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    grid-template-columns: repeat(7,1fr) ;
    gap:5px ;
  }
`;
const TimeCellDesktop = styled(TimeCell)`
  width:70px ;
  font-size:14px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height: 20px;
  width:60px ;
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  height: 22px;
  width:70px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   height: 25px;
   width:70px ;
  }

`;
export { SlotTimeDesktop,SlotsTimeRangeContainerDesktop,TimeCellDesktop};