import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { ButtonContainer, Container, CustomContainer, CustomaCssButton, HeadingContainer, HeadingText, SubHeadingText } from "./BookSlotForWalkin.style";


const ContainerMobile = styled(Container)`
margin-top: 20px;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const CustomContainerMobile = styled(CustomContainer)`
@media (min-width: 320px) and (max-width: 400px) {
  width:95%;
  height:60vh ;
  padding:10px ;
  padding-top:40px ;
  padding-bottom:40px ;
}
@media (min-width: 400px) and (max-width: 440px) {
  width:95%;
  height:60vh ;
  padding:10px ;
  padding-top:40px ;
  padding-bottom:40px ;
}
@media (min-width: 440px) and (max-width: 480px) {
  width:95%;
  height:60vh ;
  padding:10px ;
  padding-top:40px ;
  padding-bottom:40px ;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;


const HeadingTextMobile = styled(HeadingText)`
@media (min-width: 320px) and (max-width: 400px) {
    font-size: 18px;
}
@media (min-width: 400px) and (max-width: 440px) {
    font-size: 18px;
}
@media (min-width: 440px) and (max-width: 480px) {
    font-size: 18px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;


const SubHeadingTextMobile = styled(SubHeadingText)`
@media (min-width: 320px) and (max-width: 400px) {
    font-size: 18px;
}
@media (min-width: 400px) and (max-width: 440px) {
    font-size: 18px;
}
@media (min-width: 440px) and (max-width: 480px) {
    font-size: 18px;
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

const CustomaCssButtonMobile = styled(CustomaCssButton)`
  min-width:120px;
@media (min-width: 320px) and (max-width: 400px) {
    max-height:50px;
    font-size: 14px;
}
@media (min-width: 400px) and (max-width: 440px) {
    max-height:50px;
    font-size: 14px;
}
@media (min-width: 440px) and (max-width: 480px) {
    max-height:50px;
    font-size: 14px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const HeadingContainerMobile = styled(HeadingContainer)`
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
    CustomContainerMobile,
    CustomaCssButtonMobile,
    HeadingTextMobile,
    SubHeadingTextMobile,
    ButtonContainerMobile,
    HeadingContainerMobile
};
