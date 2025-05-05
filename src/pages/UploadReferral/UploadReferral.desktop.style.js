import { COLORS } from "../../theme/theme";
import { Box, Typography, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { BookAppointmentHeading, BookAppointmentHeadingLabel, BookingOptionContainer, BookingOptionLabel, Container, CustomBorderColorIcon, CustomCloudUploadIcon, CustomEreferralIcon, FileUploadContainer, HeadingContainer, HeadingLabelText, HeadingText, HelpNoteHeading, HelpNoteText, OptionContainer, ReferralUploadHeading } from "./UploadReferral.style";

const CustomCloudUploadIconDesktop = styled(CustomCloudUploadIcon)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 25px;
    width: 25px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 33px;
    width: 33px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 35px;
    width: 35px;
  }
`;
const CustomBorderColorIconDesktop = styled(CustomBorderColorIcon)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 25px;
    width: 25px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 35px;
    width: 35px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 37px;
    width: 37px;
  }
  
`;

const CustomEreferralIconDesktop = styled(CustomEreferralIcon)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;

const ContainerDesktop = styled(Container)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

   padding: 30px;
   height:400px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    padding: 30px;
    height:500px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  padding: 40px;
  height:550px ;
  }
`;

const HeadingContainerDesktop = styled(HeadingContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;

const OptionContainerDesktop = styled(OptionContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top: 50px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top:50px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top:60px;
  }
`;

const BookingOptionContainerDesktop = styled(BookingOptionContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  width: 85%;
  height: 80px;
  gap: 15px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  width: 80%;
  height: 100px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  width: 80%;
  height: 110px;
  }
`;

const BookingOptionLabelDesktop = styled(BookingOptionLabel)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 14px;
  
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 15px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 16px;
  }
`;

const ReferralUploadHeadingDesktop = styled(ReferralUploadHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;
const HelpNoteHeadingDesktop = styled(HelpNoteHeading)`
  font-weight: 500;
  font-family: Inter Variable;
`;

const HelpNoteTextDesktop = styled(HelpNoteText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;

const FileUploadContainerDesktop = styled(FileUploadContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top:20px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top:25px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;
const BookAppointmentHeadingDesktop = styled(BookAppointmentHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 18px;
    margin:5px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 20px;
    margin-top:15px ;
    margin:5px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 22px;
  margin:5px ;
  }
`;

const BookAppointmentHeadingLabelDesktop = styled(BookAppointmentHeadingLabel)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 15px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 18px;
  }
`;


const HeadingTextDesktop= styled(HeadingText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 18px;
  }

`;
const HeadingLabelTextDesktop=styled(HeadingLabelText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 16px;
  }
`;

export {
  BookingOptionContainerDesktop,
  BookingOptionLabelDesktop,
  ContainerDesktop,
  CustomCloudUploadIconDesktop,
  CustomBorderColorIconDesktop,
  HeadingContainerDesktop,
  OptionContainerDesktop,
  ReferralUploadHeadingDesktop,
  HelpNoteHeadingDesktop,
  HelpNoteTextDesktop,
  FileUploadContainerDesktop,
  CustomEreferralIconDesktop,
  HeadingTextDesktop,
  BookAppointmentHeadingDesktop,
  BookAppointmentHeadingLabelDesktop,
  HeadingLabelTextDesktop
};
