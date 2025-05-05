import { styled } from "@mui/material";
import { Container, StyledCustomButton } from "./SingleDateSlotList.style";

const ContainerMobile = styled(Container)`
padding-top:10px;
padding-bottom:10px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const StyledCustomButtonMobile = styled(StyledCustomButton)`
height: 27px ;
width:  72px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

export {
  ContainerMobile,
  StyledCustomButtonMobile
};
