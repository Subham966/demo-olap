import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import { ButtonOptionsContainer, ChildContainer, Container, CustomCssButton, GreetingMessageContainer, HeadingText, QuestionBox, QuestionText } from "./EreferralLandingPage.style";

const ContainerMobile = styled(Container)`
@media (min-width: 320px) and (max-width: 400px) {
width:100% ;
margin-top:15px ;
margin-left:6px;
margin-right:6px;
}
@media (min-width: 400px) and (max-width: 440px) {
width:100% ;
margin-top:15px ;
margin-left:6px;
margin-right:6px;
}
@media (min-width: 440px) and (max-width: 480px) {
width:100% ;
margin-top:15px ;
margin-left:6px;
margin-right:6px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const ChildContainerMobile= styled(ChildContainer)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const HeadingTextMobile = styled(HeadingText)`
@media (min-width: 320px) and (max-width: 400px) {
    margin-top: 10px;
    margin-bottom: 19px;
    font-size: 18px;
}
@media (min-width: 400px) and (max-width: 440px) {
    margin-top: 10px;
    margin-bottom: 19px;
    font-size: 18px;
}
@media (min-width: 440px) and (max-width: 480px) {
    margin-top: 10px;
    margin-bottom: 19px;
    font-size: 18px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;
const QuestionBoxMobile  = styled(QuestionBox)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const QuestionTextMobile=  styled(QuestionText)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const ButtonOptionsContainerMobile = styled(ButtonOptionsContainer)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const CustomCssButtonMobile = styled(CustomCssButton)`
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


const GreetingMessageContainerMobile = styled(GreetingMessageContainer)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;



export {ContainerMobile,ChildContainerMobile,HeadingTextMobile,QuestionBoxMobile,QuestionTextMobile,ButtonOptionsContainerMobile,CustomCssButtonMobile,GreetingMessageContainerMobile} ;