import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, ChildContainer, Container, CustomaCssButton, FastingQuestionContainer, GoBackHeading, ParentBox } from "./ConfirmGoBack.style";

const ContainerMobile = styled(Container)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const ParentBoxMobile = styled(ParentBox)`
  padding:30px 10px ;
  width: 90% ;
  margin: 20px ;
  margin-left: auto ;
  margin-right: auto ;
  margin-top:150px ; 
  background-color: white ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const FastingQuestionContainerMobile = styled(FastingQuestionContainer)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const GoBackHeadingMobile = styled(GoBackHeading)`
font-size:14px  !important;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const ButtonContainerMobile = styled(ButtonContainer)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;


const ChildContainerMobile = styled(ChildContainer)`
@media (min-width: 320px) and (max-width: 400px) {
width:89vw ;
}
@media (min-width: 400px) and (max-width: 440px) {
width:89vw ;
}
@media (min-width: 440px) and (max-width: 480px) {
width:89vw ;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const CustomaCssButtonMobile = styled(CustomaCssButton)`
height:35px;
width:150px  ;
margin-top:10px ;
font-size: 12px !important;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;



export { ContainerMobile, ChildContainerMobile, CustomaCssButtonMobile, FastingQuestionContainerMobile, ButtonContainerMobile, GoBackHeadingMobile, ParentBoxMobile };

