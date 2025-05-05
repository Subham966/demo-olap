import { Box, Stack, Typography, styled } from "@mui/material";
import { SlotTime, SlotsTimeRangeContainer, TimeCell } from "./SlotsTimeRange.style";

const SlotTimeMobile = styled(SlotTime)`
font-size: 10px;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const SlotsTimeRangeContainerMobile = styled(SlotsTimeRangeContainer)`
grid-template-columns: repeat(5,1fr) ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const TimeCellMobile = styled(TimeCell)`
    height: 25.6px;
    border-radius: 5px;
    font-size: 10px;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {
   
}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
export { SlotTimeMobile, SlotsTimeRangeContainerMobile, TimeCellMobile };