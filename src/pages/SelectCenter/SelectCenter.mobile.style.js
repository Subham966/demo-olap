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

const SelectMobile = styled(Select)`
 margin-top:-10px ;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {

  }
`;


const MuiTextFieldMobile = styled(MuiTextField)`

`;

const LocationBoxMobile = styled(LocationBox)`
  height: 80px;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
    width: 92vw;
    // height: auto;
    background-color: ${COLORS.GREY_2};
    border-radius: 5px;
  }
`;
const LocationBoxContainerMobile = styled(LocationBoxContainer)`
  height: 75px;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
  }

`;

const SelectAllCenterBoxMobile = styled(SelectAllCenterBox)`
  height: 100px;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
    width: 92vw;
    height: 100px;
    background-color: ${COLORS.GREY_2};
    border-radius: 5px;
    padding: 10px;
  }
`;
const SelectAllCenterButtonTextMobile = styled(SelectAllCenterButtonText)`
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;


const CenterNameTextMobile = styled(CenterNameText)`
  font-size:12px ;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;
const CustomShareLocationIconMobile = styled(CustomShareLocationIcon)`
 height:18px;
 width:18px ;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
  }
`;
const CenterAddressTextMobile = styled(CenterAddressText)`
  font-size: 10px;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
  }
`;

const HeaderContainerMobile = styled(HeaderContainer)`
  @media (max-width: 768px) {
    align-items: start;
    gap: 8px;
    margin-bottom: 8px;
    margin-top: -20px;
  }
`;
const HeadingTextMobile = styled(HeadingText)`
  text-align: center !important;
  font-size: 16px;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
    text-align: center;
    padding-top: 10px;
    font-size: 16px;
    margin-top: 0px;
  }
`;
const HeadingLabelTextMobile = styled(HeadingLabelText)`
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

const HeadingLabelContainerMobile = styled(HeadingLabelContainer)`
padding-left:0px ;
margin-top:-10px ;
margin-bottom:5px ;
@media (min-width: 451px)and (max-width: 780px) {
}
@media (max-width: 450px) {
  margin-top:-10px ;
}
`;

const NearbyCenterListMobile = styled(NearbyCenterList)`
  max-height: 350px;
  grid-template-columns:1fr ;

@media (min-width: 320px) and (max-width: 400px) {
    padding: 0px 0px;
    max-height: 380px;
}
@media (min-width: 400px) and (max-width: 440px) {
    padding: 0px 0px;
    max-height: 380px;
}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const DistanceTextMobile = styled(DistanceText)`
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {

  }

`;

const NextSlotTimeTextMobile = styled(NextSlotTimeText)`
margin-top:-20px ;
font-size:9px ;
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {

  }

`;

export {
  HeadingTextMobile,
  HeadingLabelContainerMobile,
  HeadingLabelTextMobile,
  NearbyCenterListMobile,
  SelectMobile,
  MuiTextFieldMobile,
  LocationBoxMobile,
  HeaderContainerMobile,
  CenterNameTextMobile,
  SelectAllCenterBoxMobile,
  SelectAllCenterButtonTextMobile,
  CenterAddressTextMobile,
  DistanceTextMobile,
  NextSlotTimeTextMobile,
  LocationBoxContainerMobile,
  CustomShareLocationIconMobile
};
