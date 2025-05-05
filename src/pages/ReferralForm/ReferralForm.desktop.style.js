import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import { CustomConfirmButton, FieldGridBox, FieldTitle, FileUploadContainer, HelpNoteHeading, HelpNoteText, ParentContainerBox, ReferralUploadHeading } from "./ReferralForm.style";

const FieldGridBoxDesktop = styled(FieldGridBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    grid-template-columns:4fr 8fr;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    grid-template-columns: 4fr 8fr;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    grid-template-columns: 4fr 8fr;
  }
`;
const FieldTitleDesktop = styled(FieldTitle)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   font-size: 14px;
   margin-right: 5px;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size: 16px;
     margin-right: 10px;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   font-size: 18px;
    margin-right: 15px;
 }
`;

const ReferralUploadHeadingDesktop = styled(ReferralUploadHeading)`
`;
const HelpNoteHeadingDesktop = styled(HelpNoteHeading)`
`;

const HelpNoteTextDesktop = styled(HelpNoteText)`
`;

const FileUploadContainerDesktop = styled(FileUploadContainer)`
`;
const CustomConfirmButtonDesktop = styled(CustomConfirmButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top: 30px;
  height:30px ;
  font-size: 13px !important;
  padding: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: 40px;
    height:35px ;
  font-size: 15px  !important;
    padding: 8px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px  !important;
    padding: 15px;
    height:40px ;
   margin-top: 50px;
  }
`

const ParentContainerBoxDesktop = styled(ParentContainerBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  padding-top: 25px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  padding-top: 40px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  padding-top: 60px ;
  }
`

export {
  FieldTitleDesktop,
  FieldGridBoxDesktop,
  ReferralUploadHeadingDesktop,
  HelpNoteHeadingDesktop,
  HelpNoteTextDesktop,
  FileUploadContainerDesktop,
  CustomConfirmButtonDesktop,
  ParentContainerBoxDesktop
};

