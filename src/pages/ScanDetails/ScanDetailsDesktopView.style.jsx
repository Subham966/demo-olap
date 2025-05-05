import { COLORS } from "../../theme/theme";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";

const Container = styled(Box)`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;
  margin-left: 46px;
  margin-right: 46px;
  margin-bottom: 26px;
  // margin-top:16px;
  // padding-bottom:30px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 6px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-left: 26px;
    margin-right: 26px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-left: 36px;
    margin-right: 36px;
  }
`;
const BodyPartContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  transition: display 0.6s ease, opacity 0.5s ease;
  background-color: white;
`;

const SinglePartContainer = styled(Stack)`
  & svg path {
    // fill: red; /* No quotes around the color value */
  }
`;

const ScanAreaHeading = styled(Typography)`
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  margin-top: 10px;
  font-family: Inter Variable;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    padding-top: 5px;
    margin-top: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    padding-top: 7px;
    margin-top: 7px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
  }
`;

const SelectScanAreaBox = styled(Stack)(
  ({ bodyPartSelected }) => `
height:600px;
width:${bodyPartSelected ? "100%" : "120%"} ;
margin-left:${bodyPartSelected ? "0%" : "150%"} ;
background-color:white ;
transition: margin-left 0.6s ease, opacity 0.5s ease ;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   height: 400px;
   margin-left:${bodyPartSelected ? "0%" : "130%"} ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   height: 450px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  height: 520px;
  }
`
);

const StyledBodyPartStack = styled(Stack)(
  ({ theme, selected }) => `
  border-bottom: 1px solid lightgray ;
  // height:  60px ;
  padding: 7px 15px ;
  display: grid ;
  grid-template-columns: 3fr 8fr ;
  background-color: ${
    selected ? theme.palette.primary.activeButton : "transparent"
  } ;
  cursor: pointer ;
  color: ${selected ? "white" : theme.palette.primary.activeButton};
  &:hover: {
    background-color: ${selected ? "transparent" : COLORS.GREY_3}
  };
  '& svg path': {
    fill: ${selected ? "white" : theme.palette.primary.activeButton}
  } ;
      
`
);

const StyledIconContainer = styled(Stack)`
  margin-top: 8px;
  display: grid;
  justify-content: flex-end;
  margin-right: 15px;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 2px;
    height: 10px;
    margin-right: 10px;
    zoom: 0.7;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 2px;
    height: 10px;
    margin-right: 10px;
    zoom: 0.9;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-top: 2px;
    height: 10px;
    margin-right: 10px;
    zoom: 0.95;
  }
`;

const StyledGroupNameText = styled(Typography)`
  display: inline;
  text-align: left;
  padding-top: 7px;
  font-size: 16px;
  font-family: Inter Variable;
  margin-top: 1px;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
    padding-top: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 13px;
    padding-top: 5px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 15px;
    padding-top: 5px;
  }
`;

const GroupNameContainer = styled(Stack)`
  margin-top: 10px;
  border: 1px solid lightgray;
  border-top: 1px solid lightgray;
  overflow: auto;
  // height:480px;
  border-radius: 10px;
  max-height: 480px;
`;
const OtherGroupNameContainer = styled(Stack)(
  ({ theme, otherOptionSelected }) => `
height:60px ;
padding:10px 15px ;
cursor: pointer ;
// border-bottom: 1px solid lightgray ;
background-color:
    ${otherOptionSelected ? theme.palette.primary.activeButton : null};
color:
    ${otherOptionSelected ? "white" : theme.palette.primary.activeButton} ;
&:hover: selectedBodyPartList?.groupName != 'Others' && {
    backgroundColor: ${COLORS.GREY_3}
  },
  
`
);

const SubmitButton = styled(Button)`
  margin: auto;
  width: 150px;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 10px;
  text-transform: none;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
    width: 100px;
    padding: 5px;
    margin-bottom: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
    width: 120px;
    padding: 5px;
    margin-bottom: 0px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
    width: 130px;
    padding: 5px;
    margin-bottom: 20px;
  }
`;
const BodyPartsParentBox = styled(Box)`
  overflow: auto;
  padding: 5px;
  margin-top: 20px;
  height: 230px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 140px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 150px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 200px;
  }
`;
const OtherParentBox = styled(Box)`
  margin-top: 100px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 70px;
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const BodyPartsContainer = styled(Box)`
  display: flex;
  margin-top: auto;
  flex-wrap: wrap;
  gap: 15px;
`;

const BodyPartsBox = styled(Box)``;

const CustomScanButton = styled(Button)(
  ({ theme, selected }) => `
  width: 140px;
  height: 65px;
  text-transform: none;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  font-family: 'Inter Variable';
  font-weight: 400;
  border-radius: 5px ;
  box-shadow:rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.1) 0px 2px 6px 2px ;
  background-color: ${
    selected ? theme.palette.primary.activeButton : COLORS.GREY_2
  };
  color: ${selected ? "white" : theme.palette.primary.activeButton};

  &:hover {
    background-color: ${
      selected ? theme.palette.primary.activeButton : COLORS.GREY_3
    };
  }
 
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   width: 100px;
   height: 40px;
   font-size: 11px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   width: 120px;
   height: 45px;
   font-size: 14px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   width: 120px;
   height: 50px;
   font-size: 14px;
  }
`
);

const CustomScanSelect = styled(Select)(
  ({ theme, selected }) => `
  height: 65px;
  font-size: 16px;
  text-align:center ;
  border-radius: 5px ;
  min-width: 120 ;
  width: 140px ;
  font-family: 'Inter Variable';
  box-shadow:rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.1) 0px 2px 6px 2px ;
  background-color: ${
    selected ? theme.palette.primary.activeButton : COLORS.GREY_2
  };
  color: ${selected ? "white" : theme.palette.primary.activeButton};

  & .MuiSelect-icon {
    color: ${selected ? "white" : "black"};
  }

  &:hover {
    background-color: ${
      selected ? theme.palette.primary.activeButton : COLORS.GREY_3
    };
  }

  & fieldset {
    border: none;
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   width: 100px;
   height: 40px;
   font-size: 11px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    width: 120px;
   height: 45px;
   font-size: 14px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   width: 120px;
   height: 50px;
   font-size: 14px;
  }
`
);

const StyledMenuItem = styled(MenuItem)`
  font-family: "Inter Variable";
  font-size: 14px;
  color: ${({ theme }) => theme.palette.primary.activeButton};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: white;
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.primary.activeButton};
  }

  &.Mui-focusVisible {
    color: ${({ theme }) => theme.palette.primary.activeButton};
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 11px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 12px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 13px;
  }
`;
const DividerLine = styled(Divider)`
  width: 100%;
  padding-top: 10px;
  font-size: 20px;
  @media (min-width: 451px) and (max-width: 780px) {
    font-size: 16px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
  }
`;

const Helptext = styled(Box)`
  width: 110%;
  margin: auto;
  font-size: 13px;
  padding: 10px;
  position: relative;
  bottom: 0px;
  font-family: Inter Variable;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 11px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 12px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 13px;
  }
`;

const InputBoxHeadingText = styled(Typography)`
  font-size: 18px;
  @media (min-width: 451px) and (max-width: 780px) {
    font-size: 16px;
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 17px;
  }
`;

const SubmitButtonStack = styled(Stack)`
  padding: 30px;
  @media (min-width: 451px) and (max-width: 780px) {
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    padding: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    padding: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    padding: 10px;
  }
`;

export {
  BodyPartsContainer,
  BodyPartsBox,
  CustomScanButton,
  CustomScanSelect,
  StyledMenuItem,
  Container,
  BodyPartContainer,
  SinglePartContainer,
  ScanAreaHeading,
  Helptext,
  SelectScanAreaBox,
  StyledBodyPartStack,
  StyledIconContainer,
  StyledGroupNameText,
  GroupNameContainer,
  OtherGroupNameContainer,
  SubmitButton,
  InputBoxHeadingText,
  SubmitButtonStack,
  BodyPartsParentBox,
  DividerLine,
  OtherParentBox,
};
