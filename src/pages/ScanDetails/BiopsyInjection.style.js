import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, RadioGroup, Stack, Typography, styled } from "@mui/material";
import { CustomTextField } from "@/elements/CustomTextField";

const Container = styled(Box)`
  overflow: auto;
  margin-left:46px;
  margin-right:46px;
  margin-bottom:26px ;
  
;
`
const HeadingText = styled(Typography)`
  font-weight: 600;
  font-size: 24px;
  margin-left: 20px;
  text-align: center;
`;

const ProcedureBox = styled(Box)`
 
`;
const RadioButtonText = styled(Typography)`
  font-size: 20px;
 
`;

const CustomTextFieldBox = styled(CustomTextField)`

`;


const CustomConfirmButton = styled(CustomButton)`
font-size: 20px ;
margin-top: 50px;
padding: 10px;
font-family: Inter Variable;

`
const InputBoxHeadingText = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
 
`;
const StyledRadioGroup = styled(RadioGroup)`
 & .MuiSvgIcon-root {
    font-size: 25px;
  }
`;

const SubmitButtonStack = styled(Stack)`

`

export {
  Container,
  HeadingText,
  RadioButtonText,
  CustomConfirmButton,
  InputBoxHeadingText,
  CustomTextFieldBox,
  ProcedureBox,
  StyledRadioGroup,
  SubmitButtonStack
};
