import { COLORS } from "../../theme/theme";
import { Box, Typography, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { BookAppointmentHeading, BookAppointmentHeadingLabel, BookingOptionContainer, BookingOptionLabel, Container, CustomBorderColorIcon, CustomCloudUploadIcon, CustomEreferralIcon, FileUploadContainer, HeadingContainer, HeadingLabelText, HeadingText, HelpNoteHeading, HelpNoteText, OptionContainer, ReferralUploadHeading } from "./UploadReferral.style";

const CustomCloudUploadIconMobile  = styled(CustomCloudUploadIcon)`
  @media (min-width: 320px) and (max-width: 400px) {
    height: 30px;
    width: 30px;
  }
  
  @media (min-width: 400px) and (max-width: 440px) {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 440px) and (max-width: 480px) { 
    height: 30px;
    width: 30px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    height: 35px;
    width: 35px;
  }
`;
const CustomBorderColorIconMobile  = styled(CustomBorderColorIcon)`
  @media (min-width: 320px) and (max-width: 400px) {
    height: 30px;
    width: 30px;
  }
  
  @media (min-width: 400px) and (max-width: 440px) {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 440px) and (max-width: 480px) { 
    height: 30px;
    width: 30px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    height: 35px;
    width: 35px;
  }
`;

const CustomEreferralIconMobile  = styled(CustomEreferralIcon)`
  @media (min-width: 451px) and (max-width: 780px) {
    height: 25px;
    width: 25px;
  }
  @media (max-width: 450px) {
    height: 30px;
    width: 30px;
  }
`;

const ContainerMobile  = styled(Container)`
  @media (min-width: 320px) and (max-width: 400px) {
     padding: 20px 0px;
  }
  
  @media (min-width: 400px) and (max-width: 440px) {
     padding: 20px 0px;
  }

  @media (min-width: 440px) and (max-width: 480px) { 
     padding: 20px 0px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    padding: 25px;
  }
`;

const HeadingContainerMobile  = styled(HeadingContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  
  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) { 
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const OptionContainerMobile = styled(OptionContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
    margin: 10px;
    margin-top: 15%;
  }
  
  @media (min-width: 400px) and (max-width: 440px) {
    margin: 10px;
    margin-top: 15%;
  }

  @media (min-width: 440px) and (max-width: 480px) { 
    margin: 10px;
    margin-top: 15%;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const BookingOptionContainerMobile = styled(BookingOptionContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
    width: 92%;
    height: 100px;
  }
  
  @media (min-width: 400px) and (max-width: 440px) {
    width: 92%;
    height: 100px;
  }

  @media (min-width: 440px) and (max-width: 480px) { 
    width: 92%;
    height: 100px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }

`;

const BookingOptionLabelMobile = styled(BookingOptionLabel)`

  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 12px;
  }
  
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 12px;
  }

  @media (min-width: 440px) and (max-width: 480px) { 
    font-size: 12px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }

`;

const ReferralUploadHeadingMobile = styled(ReferralUploadHeading)`
    text-align: left;
    padding-top: 34px;
    font-size: 17px;
  @media (min-width: 320px) and (max-width: 400px) {
  
  }
  
  @media (min-width: 400px) and (max-width: 440px) {
   
  }

  @media (min-width: 440px) and (max-width: 480px) { 
   
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const HelpNoteHeadingMobile = styled(HelpNoteHeading)`
  font-weight: 500;
  font-family: Inter Variable;
  @media (min-width: 320px) and (max-width: 400px) {
  
  }
  @media (min-width: 400px) and (max-width: 440px) {
   
  }
  @media (min-width: 440px) and (max-width: 480px) { 
   
  }
  @media (min-width: 480px) and (max-width: 780px) {

  }
`;

const HelpNoteTextMobile = styled(HelpNoteText)`

  @media (min-width: 320px) and (max-width: 400px) {
  width: 100%;
  }
  @media (min-width: 400px) and (max-width: 440px) {
   width: 100%;
  }
  @media (min-width: 440px) and (max-width: 480px) { 
   width: 100%;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const FileUploadContainerMobile = styled(FileUploadContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
 
  }
  @media (min-width: 400px) and (max-width: 440px) {
  
  }
  @media (min-width: 440px) and (max-width: 480px) { 
  
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;
const BookAppointmentHeadingMobile = styled(BookAppointmentHeading)`
  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {
  
  }
  @media (min-width: 440px) and (max-width: 480px) { 
 
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const BookAppointmentHeadingLabelMobile = styled(BookAppointmentHeadingLabel)`
  @media (min-width: 320px) and (max-width: 400px) {
 
  }
  @media (min-width: 400px) and (max-width: 440px) {
 
  }
  @media (min-width: 440px) and (max-width: 480px) { 

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;


const HeadingTextMobile= styled(HeadingText)`
 
  @media (min-width: 320px) and (max-width: 400px) {
  font-size:16px ;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size:17px ;
  }
  @media (min-width: 440px) and (max-width: 480px) { 
  font-size:18px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;
const HeadingLabelTextMobile=styled(HeadingLabelText)`
  @media (min-width: 320px) and (max-width: 400px) {
  font-size:13px ;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size:14px ;
  }
  @media (min-width: 440px) and (max-width: 480px) { 
  font-size:15px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

export {
  BookingOptionContainerMobile,
  BookingOptionLabelMobile,
  ContainerMobile,
  CustomCloudUploadIconMobile,
  CustomBorderColorIconMobile,
  HeadingContainerMobile,
  OptionContainerMobile,
  ReferralUploadHeadingMobile,
  HelpNoteHeadingMobile,
  HelpNoteTextMobile,
  FileUploadContainerMobile,
  CustomEreferralIconMobile,
  HeadingTextMobile,
  BookAppointmentHeadingMobile,
  BookAppointmentHeadingLabelMobile,
  HeadingLabelTextMobile
};
