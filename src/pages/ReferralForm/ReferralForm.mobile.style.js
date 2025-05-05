import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import { CustomConfirmButton, FieldGridBox, FieldTitle, FileUploadContainer, HelpNoteHeading, HelpNoteText, ParentContainerBox, ReferralUploadHeading } from "./ReferralForm.style";

const FieldGridBoxMobile = styled(FieldGridBox)`
  @media (min-width: 320px) and (max-width: 400px) {
      grid-template-columns: 5fr 7fr;
  }
  @media (min-width: 400px) and (max-width: 440px) {
      grid-template-columns: 4fr 7fr;
  }
  @media (min-width: 440px) and (max-width: 480px) {
      grid-template-columns: 4fr 7fr;
  }
  @media (min-width: 480px) and (max-width: 780px) {
     grid-template-columns: 3fr 7fr;
  }
`;
const FieldTitleMobile = styled(FieldTitle)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 14px;
    margin-right: 10px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 14px;
    margin-right: 10px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 14px;
    margin-right: 10px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
       font-size: 18px;
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
`;

const HelpNoteTextMobile = styled(HelpNoteText)`
`;

const FileUploadContainerMobile = styled(FileUploadContainer)`
`;
const CustomConfirmButtonMobile = styled(CustomConfirmButton)`
    font-size: 14px;
    margin-top:50px ;

  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {

  }
  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }
`

const ParentContainerBoxMobile = styled(ParentContainerBox)`
  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {

  }
  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }
`

export {
  FieldTitleMobile,
  FieldGridBoxMobile,
  ReferralUploadHeadingMobile,
  HelpNoteHeadingMobile,
  HelpNoteTextMobile,
  FileUploadContainerMobile,
  CustomConfirmButtonMobile,
  ParentContainerBoxMobile
};

