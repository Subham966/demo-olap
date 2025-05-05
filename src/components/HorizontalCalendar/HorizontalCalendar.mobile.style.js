import styled from "@emotion/styled";
import { IconButton, Stack, Typography } from "@mui/material";
import ArrowLeft from "@/assets/ArrowLeft.svg?react";
import ArrowRight from "@/assets/ArrowRight.svg?react";
import { CalenderDate, CalenderWeekDay, CustomIconButton, DayBlock, StyledLeftArrow, StyledRightArrow } from "./HorizontalCalendar.style";

const DayBlockMobile = styled(DayBlock)`
@media (min-width: 320px) and (max-width: 400px) {
    width: 16vw;
    height: 16vw;
    border-radius: 5px;
}
@media (min-width: 400px) and (max-width: 440px) {
    width: 16vw;
    height: 16vw;
    border-radius: 5px;
}
@media (min-width: 440px) and (max-width: 480px) {
    width: 16vw;
    height: 16vw;
    border-radius: 5px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const CalenderDateMobile = styled(CalenderDate)`
font-size: 12px;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const CalenderWeekDayMobile = styled(CalenderWeekDay)`
font-size: 12px;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const StyledRightArrowMobile = styled(StyledRightArrow)`
@media (min-width: 320px) and (max-width: 400px) {
    width: 16px;
    height: 16px;
}
@media (min-width: 400px) and (max-width: 440px) {
    width: 16px;
    height: 16px;
}
@media (min-width: 440px) and (max-width: 480px) {
    width: 16px;
    height: 16px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const StyledLeftArrowMobile = styled(StyledLeftArrow)`
@media (min-width: 320px) and (max-width: 400px) {
    width: 16px;
    height: 16px;
}
@media (min-width: 400px) and (max-width: 440px) {
    width: 16px;
    height: 16px;
}
@media (min-width: 440px) and (max-width: 480px) {
    width: 16px;
    height: 16px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const CustomIconButtonMobile = styled(CustomIconButton)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

export { DayBlockMobile, StyledRightArrowMobile, StyledLeftArrowMobile, CalenderWeekDayMobile, CalenderDateMobile, CustomIconButtonMobile };
