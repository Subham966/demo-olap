import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Stack, Typography, styled } from "@mui/material";

const FieldGridBox = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 7fr;
`;
const FieldTitle = styled(Typography)`
  margin: auto;
  font-family: Inter Variable;
  font-size: 18px;
  text-align: right;
  margin-right: 20px;
`;

const ReferralUploadHeading = styled(Typography)`
  text-align: center;
  padding-top: 32px;
  font-size: 24px;
  font-family: Inter Variable;
`;
const HelpNoteHeading = styled(Typography)`
  font-weight: 500;
  font-family: Inter Variable;
`;

const HelpNoteText = styled(Typography)`
  font-weight: 300;
  font-family: Inter Variable;
  width: 90%;
  margin-top: 10px;
`;

const FileUploadContainer = styled(Box)`
  font-weight: 300;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 2px 6px 2px;
  &:hover {
    background-color: ${COLORS.GREY_3};
  }
`;
const CustomConfirmButton = styled(CustomButton)`
font-size: 20px ;
margin-top: 50px;
padding: 10px;
font-family: Inter Variable;
`

const ParentContainerBox = styled(Stack)`
  padding-top: 15% ;
  justify-content:center ;
  align-items:center ;
`

export {
  FieldTitle,
  FieldGridBox,
  ReferralUploadHeading,
  HelpNoteHeading,
  HelpNoteText,
  FileUploadContainer,
  CustomConfirmButton,
  ParentContainerBox
};

