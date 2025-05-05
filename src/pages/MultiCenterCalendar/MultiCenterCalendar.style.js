import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Popover, Stack, Typography, styled } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";

const Container = styled(Box)`
margin-left:0px;
margin-right:0px ;
`;

const HeadingText = styled(Typography)`
  margin-top: 12px;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color};
  font-size: 22px;
`;

const CalendarContainer = styled(Typography)`
  margin: auto 60px;
  margin-top: 20px;
`;

const SelectMonthDropdown = styled(CustomButton)(
  ({ theme }) => `
height:40px ;
width:150px ;
padding:0px;
margin-top:-10px ;
cursor:pointer ;
border:1px solid ${theme.palette.primary.activeButton} ;
color:${theme.palette.primary.activeButton} ;

&:hover {
   background-color: ${COLORS.GREY_3}
 }
`
);
const SelectCenterDropdown = styled(CustomButton)(
  ({ theme }) => `
height:40px ;
width:150px ;
padding:0px;
cursor:pointer ;
border:1px solid ${theme.palette.primary.activeButton} ;
color:${theme.palette.primary.activeButton} ;


&:hover {
   background-color: ${COLORS.GREY_3}
 }
`
);

const SelectMonthText = styled(Typography)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
   padding: 10px ;
`;
const SelectMonthContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end; 
`;
const ChildContainer = styled(Box)`
display: flex ;
gap: 10px ;
margin-top: 10px ;
`;
const CenterSelectionContainer = styled(Box)`
overflow: auto ;
height:450px ;
border: 1px solid lightgray ;
border-radius: 10px ;
background-color:#F5F5F5 ;
`;
const CenterSelectionBox = styled(Box)(
  ({ theme, selected }) => `
  height: 70px;
  margin: auto;
  display: flex; /* Enable flexbox */
  padding:10px ;
  align-items: center; /* Center content vertically */
  justify-content:${selected && "center"
    }; /* Center content horizontally */
  border-bottom: 1px solid lightgray ;
  font-weight: 500;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  background-color: ${selected ? theme.palette.primary.activeButton : "#F5F5F5"
    } ;
  color: ${selected ? "white" : "black"};
  
`);

const CenterNameText = styled(Box)(
  ({ theme, selected }) => `
 font-family: Inter Variable ;
   font-weight:${selected && 550
    }; 
  font-size:${selected && "14px !important"
    }; 
   @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size:${selected && "12px !important"
    };
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size:${selected && "14px !important"
    };
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
     font-size:${selected && "14px !important"
    };
  } 
`);

const CenterDistanceParent = styled(Box)`
 font-family: Inter Variable ;
`;

const CenterNextAvailableSlotText = styled(Box)`
 font-weight: 500 ;
 font-size: 10px ;
 font-family: Inter Variable ;
`;
const DateMonthText = styled(Box)`
 font-weight: 500 ;
 background-color: #D9D9D9 ;
 padding:5px ;
 border-radius:5px ;
 padding-left:10px ;
`;
const SlotsDataContainer = styled(Box)`
height:450px ;
`;
const ChildSlotsDataContainer = styled(Box)`
height:450px ;
overflow:auto ;
`;
const DateBox = styled(Box)`
 font-family: Inter Variable ;
`;
const NoSlotsText = styled(Box)`
 font-family: Inter Variable ;

`;
const ArrowBox = styled("span")`
 margin-left: 5px ;
 height: 50px ;
 border: 1px ;
 position: relative ;
`;

const StyledDateCalendar = styled(DateCalendar)`
  width: 250px;
  height: 250px;
  margin-top: 10px;

  & .MuiPickersCalendarHeader-root {
    min-height: 30px;
  }

  & .MuiDayCalendar-header {
    min-height: 20px;
  }

  & .MuiPickersDay-root {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }

  & .MuiPickersCalendarHeader-label {
    font-size: 14px;
  }

  & .MuiTypography-caption {
    font-size: 12px;
  }
`;
const CalendarPopover = styled(Popover)`
transform: translateX(-50px) ;
`;
const SubmitButton = styled(Button)`
  margin: auto;
  width: 110px;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 0px;
  text-transform: none;
  font-weight:300 ;
  box-shadow:none ;
  font-size: 12px !important;
  &:hover {
  box-shadow:none ;  
  }
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   font-size: 12px !important;
    width: 80px;
    padding: 2px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 13px !important;
    width: 90px;
    padding: 5px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   font-size: 14px !important;
    width: 110px;
    padding: 5px;
  }
`;
const SubmitButtonStack = styled(Stack)`
  padding-top: 10px;
  font-family: Inter Variable ;
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
const StyledButton = styled(Button)`
  width: 100%;
  font-family: "Inter Variable";
  text-transform: none;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary.activeButton : COLORS.WHITE};

  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.text.activeButtonText : COLORS.BLACK};

  ,
  &:hover {
    background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary.activeButton : COLORS.WHITE};

    color: ${({ theme, isActive }) =>
    isActive ? theme.palette.text.activeButtonText : COLORS.BLACK};
  }
`;
const CenterDropdownContainer = styled(Box)`
  font-family: Inter Variable ;

`;
const CenterDropdownBox = styled(Box)`
  font-family: Inter Variable ;

`;
const CenterDropdownText = styled(Box)`
  font-family: Inter Variable ;
`;
const CenterSelectionMobileContainer = styled(Box)`
overflow: auto ;
border-radius: 10px ;
`;

const ProvisonalAndWalkinScreenText = styled(Box)`
margin-top:10px ;
font-family: Inter Variable ;
font-size: 16px ;
padding:10px ;
`;
const StyledCustomButton = styled(CustomButton)`
display: block ;
margin: auto ;
font-weight: 400 ;
line-height: 20px ;
margin-top:30px ;
`;

export {
  Container,
  HeadingText,
  CalendarContainer,
  SelectMonthDropdown,
  SelectMonthText,
  SelectMonthContainer,
  ChildContainer,
  StyledDateCalendar,
  ArrowBox,
  CalendarPopover,
  SubmitButton,
  SubmitButtonStack,
  CenterSelectionContainer,
  CenterSelectionBox,
  CenterNameText,
  CenterNextAvailableSlotText,
  DateMonthText,
  SlotsDataContainer,
  DateBox,
  NoSlotsText,
  ChildSlotsDataContainer,
  StyledButton,
  SelectCenterDropdown,
  CenterDistanceParent,
  CenterDropdownContainer,
  CenterDropdownBox,
  CenterDropdownText,
  CenterSelectionMobileContainer,
  ProvisonalAndWalkinScreenText,
  StyledCustomButton
};
