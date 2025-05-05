import { COLORS } from "../../theme/theme";
import { Box, Typography, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const CustomCloudUploadIcon = styled(CloudUploadIcon)`
  height: 40px;
  width: 40px;
`;
const CustomBorderColorIcon = styled(BorderColorIcon)`
  height: 40px;
  width: 40px;
  
`;

const CustomEreferralIcon = styled(InsertDriveFileIcon)`
  height: 40px;
  width: 40px;
`;

const Container = styled(Box)`
  padding: 30px;
  margin-top: 30px;
  // height:700px ;
`;

const HeadingContainer = styled(Box)`
  display: grid;
  text-align: center;
  gap: 0px;
  font-family: Inter Variable;
`;

const OptionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 70%;
  margin-top: 10%;
`;

const BookingOptionContainer = styled(Typography)`
  display: grid;
  grid-template-columns: 1fr 10fr;
  width: 80%;
  gap: 20px;
  margin: auto;
  height: 130px;
`;

const BookingOptionLabel = styled(Typography)`
  font-size: 16px;
  font-family: Inter Variable;
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
  background-color: ${COLORS.GREY_2};
  &:hover {
    background-color: ${COLORS.GREY_3};
  }
`;
const BookAppointmentHeading = styled(Typography)`
  margin:10px ;
  font-size: 24px;
`;

const BookAppointmentHeadingLabel = styled(Typography)`
`;


const HeadingText= styled(Box)`
  font-size:20px ;
`;
const HeadingLabelText=styled(Box)`
`;

export {
  BookingOptionContainer,
  BookingOptionLabel,
  Container,
  CustomCloudUploadIcon,
  CustomBorderColorIcon,
  HeadingContainer,
  OptionContainer,
  ReferralUploadHeading,
  HelpNoteHeading,
  HelpNoteText,
  FileUploadContainer,
  CustomEreferralIcon,
  HeadingText,
  BookAppointmentHeading,
  BookAppointmentHeadingLabel,
  HeadingLabelText
};
