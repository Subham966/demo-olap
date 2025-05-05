import { COLORS } from "@/theme";
import { Box, Typography, styled } from "@mui/material";

const CustomContainer = styled(Box)`
display:grid  ;
gap:10px ;
width:80%;
margin:auto ;
padding-top:100px ;
padding-bottom:100px ;
border-radius:10px ;
`;


const ErrorHeading = styled(Typography)`
`;

const HelpTextHeading = styled(Typography)`
`;

const ErrorIconBox = styled(Box)`
display: flex ;
justify-content: center ;
align-items: center ;
margin-top:10px ;
margin-bottom:10px ;
`;

const HelpTextBox = styled(Box)`
width:80% ;
margin:auto ;
text-align:center ;
color:gray ;
`;


export { CustomContainer, ErrorIconBox, HelpTextBox, ErrorHeading, HelpTextHeading };
