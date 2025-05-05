import {
  styled,
  Autocomplete as MuiSelect,
  TextField,
  Stack,
  Grid,
  Typography,
} from "@mui/material";
import { BORDERS, COLORS, FONT } from "@/theme";
import { CenterAddressText, CenterNameText, CustomShareLocationIcon, DistanceText, HeaderContainer, HeadingLabelContainer, HeadingLabelText, HeadingText, LocationBox, LocationBoxContainer, MuiTextField, NearbyCenterList, NextSlotTimeText, Select, SelectAllCenterBox, SelectAllCenterButtonText } from "./SelectCenter.style";

const SelectDesktop = styled(Select)`
   width: 76%;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   width: 75%;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    width: 80%;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   width: 80%;
  }
`;


const MuiTextFieldDesktop = styled(MuiTextField)`
`;

const LocationBoxDesktop = styled(LocationBox)`
  width: 420px;
  height: 95px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   width: 280px;
  height: 75px;
  padding: 10px 10px;
  padding-bottom: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  width: 355px;
  height: 85px;
  padding-bottom: 0px;
  
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  width: 390px;
  height: 95px;
  padding-bottom: 0px;
  }
`;
const LocationBoxContainerDesktop = styled(LocationBoxContainer)`
  height: 80px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;
const CustomShareLocationIconDesktop = styled(CustomShareLocationIcon)`
  zoom:0.1 !important;
  height:10px ;
  width:10px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;

const SelectAllCenterBoxDesktop = styled(SelectAllCenterBox)`
  width: 420px;
  height: 77px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  width: 280px;
  height: 60.2px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  width: 355px;
  height: 63.2px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  width: 390px;
  height: 72px;
  }
`;
const SelectAllCenterButtonTextDesktop = styled(SelectAllCenterButtonText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:14px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size:15px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:16px ;
  }
`;


const CenterNameTextDesktop = styled(CenterNameText)`
  font-size:16px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:10px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size:12px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:16px ;
  }
`;
const CenterAddressTextDesktop = styled(CenterAddressText)`
  font-size:10px ;
  margin-top:5px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:8px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size:9px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:10px ;
  }
`;

const HeaderContainerDesktop = styled(HeaderContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   margin-top: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
     margin-top: 15px;
  }
`;
const HeadingTextDesktop = styled(HeadingText)`
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    padding:0px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    margin: 10px;
    padding:0px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 22px;
    margin: 17px;
    padding:0px ;
    margin: 10px;
  }
`;
const HeadingLabelTextDesktop = styled(HeadingLabelText)`
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

const HeadingLabelContainerDesktop = styled(HeadingLabelContainer)`
padding-left:20px ;
padding-right:20px ;
margin-bottom:5px ;
width:88% ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 margin-left:0px ;
 padding-left:5px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 margin-left:0px ;
 padding-left:0px ;
 width:90% ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
margin-left:0px ;
 padding-left:0px ;
  }
`;

const NearbyCenterListDesktop = styled(NearbyCenterList)`
  margin-top: 15px ;
  padding-left:60px ;
  gap:20px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  max-height: 295px;
  padding: 0px 10px;
  gap:10px ;
  margin-top: 5px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  max-height: 325px;
  margin-top: 0px ;
  padding: 0px 40px;
  gap:10px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  max-height: 405px;
   margin-top: 0px ;
  padding: 0px 40px;
  gap:20px ;
  }
`;

const DistanceTextDesktop = styled(DistanceText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;

const NextSlotTimeTextDesktop = styled(NextSlotTimeText)`
  font-size: 11px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 8px;
  margin-top:0px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top:-5px ;
  font-size: 9px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top:-5px ;
  font-size: 10px;
  }
`;


export {
  HeadingTextDesktop,
  HeadingLabelContainerDesktop,
  HeadingLabelTextDesktop,
  NearbyCenterListDesktop,
  SelectDesktop,
  MuiTextFieldDesktop,
  LocationBoxDesktop,
  HeaderContainerDesktop,
  CenterNameTextDesktop,
  SelectAllCenterBoxDesktop,
  SelectAllCenterButtonTextDesktop,
  CenterAddressTextDesktop,
  DistanceTextDesktop,
  NextSlotTimeTextDesktop,
  LocationBoxContainerDesktop,
  CustomShareLocationIconDesktop
};
