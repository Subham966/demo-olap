import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";

const Container = styled(Box)`
margin:auto ;
width:90% ;
margin-top:40px ;
max-width:900px ;
`;

const FieldContainer = styled(Box)`
display:flex ;
// max-width:500px ;
`;

const FieldTitle = styled(Typography)`
font-weight:400 ;
font-size:20px ;
font-family:Inter Variable ;
text-align:left ;
color:#939393 ;
`;

const FieldText = styled(Box)`
font-weight:500 ;
font-size:18px ;
font-family:Inter Variable ;
`;

const PreprationGuidelineHeading = styled(Box)`
font-size:18px ;
font-weight:500 ;
font-family:Inter Variable;
text-align:center;
`;

const Guidelinetext = styled("span")`
font-size:16px ;
margin-left: 10px ;
`;

const ChangeSlotButton = styled(Typography)`
padding: 5px ;
border: 1px solid #939393 ;
color: #939393 ;
border-radius: 5px ;
cursor:pointer ;
`;

export { ChangeSlotButton, Container, FieldContainer, FieldTitle, FieldText, PreprationGuidelineHeading, Guidelinetext };