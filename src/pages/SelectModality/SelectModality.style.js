import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, MenuItem, Stack, Typography, styled } from "@mui/material";


const ScanSubtitleHeading = styled(Typography)`
  font-size: 20px;
  font-family: Inter Variable;
  margin-top:10px ;
  margin-bottom:10px ;
`;
const ScanListParentBox = styled(Stack)`
  margin-left: 46px;
  margin-right: 46px;
  font-family: Inter Variable;
`;
const ModalityBoxContainer = styled(Stack)`
  height: 147px;
  width: 157px;
  padding: 15px;
  box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 2px 6px 2px;
  border-radius: 5px;
  cursor: pointer;
`;
const IconBox = styled(Box)`
`;
const ModalityBoxText = styled(Typography)`
  font-size: 20px;
  font-weight: 400;
  font-family: Inter Variable;
`;
const StyledMenuItem = styled(MenuItem)`
  font-family:Inter Variable;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.primary.activeButton};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: white;
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.primary.activeButton};
  }

`

const ButtonContainer = styled(Box)`
display: flex ;
gap: 10px ; 
justify-content: center ;
  
@media (max-width: 450px) {
// margin: 4vh 
}
`;



const CustomaCssButton = styled(CustomButton)`

background-color: ${({ theme }) => theme.palette.primary.activeButton};
color: ${({ theme }) => theme.palette.text.activeButtonText};
font-size: 16px;

  @keyframes blink {
    0% { filter: brightness(100%); }
    50% { filter: brightness(75%); }
    100% { filter: brightness(100%); }
  }

  &:hover {
    animation: blink 0.7s;
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: ${({ theme }) => theme.palette.text.activeButtonText};
  }
`;
const ScanListHeading = styled(Typography)`
  text-align: center;
  font-family: Inter Variable;
  display: auto;
  margin-top:10px ;
`;
const SelectScanHeading = styled(Typography)`
  margin-bottom: 10px;
  font-family: Inter Variable;
`;

const ScanListContainer = styled(Stack)`
  height:360px;
`;

const InputBoxContainer = styled(Stack)`

`;

export { ScanListParentBox, SelectScanHeading, ModalityBoxContainer, ModalityBoxText, ScanListHeading, ScanSubtitleHeading, StyledMenuItem, ButtonContainer, CustomaCssButton, IconBox, ScanListContainer, InputBoxContainer };