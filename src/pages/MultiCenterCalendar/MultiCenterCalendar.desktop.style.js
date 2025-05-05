import { styled } from "@mui/material";
import { CalendarContainer, CalendarPopover, CenterDistanceParent, CenterNameText, CenterNextAvailableSlotText, CenterSelectionBox, CenterSelectionContainer, ChildContainer, ChildSlotsDataContainer, Container, DateBox, DateMonthText, HeadingText, NoSlotsText, ProvisonalAndWalkinScreenText, SelectMonthContainer, SelectMonthDropdown, SelectMonthText, SlotsDataContainer, StyledCustomButton, StyledDateCalendar } from "./MultiCenterCalendar.style";

const ContainerDesktop = styled(Container)`
`;

const HeadingTextDesktop = styled(HeadingText)`
    margin-bottom:-5px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    margin-top: 0px;
    padding:0px ;
    margin-bottom:-5px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    margin: 0px;
    margin-top: 10px;
    margin-bottom:-5px ;
    padding:0px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
    margin: 17px;
    padding:0px ;
    margin-bottom:0px ;
  }
`;

const CalendarContainerDesktop = styled(CalendarContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   margin: auto 30px;
   margin-top: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   margin: auto 30px;
   margin-top: 15px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   margin: auto 60px;
   margin-top: 20px;
  }
  
`;
const SelectMonthDropdownDesktop = styled(SelectMonthDropdown)(
  ({ theme }) => `
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height:25px ;
  width:100px ;
  margin-top: -3px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  height:30px ;
  width:120px ;
  margin-top: -3px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  height:35px ;
  width:130px ;
  } 

`
);
const SelectMonthTextDesktop = styled(SelectMonthText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 font-size:13px ;
   margin-top:0px ;
  padding-top:2px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size:14px ;
  margin-top:0px ;
  padding-top:5px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:15px ;
  margin-top:0px ;
  padding-top:7px ;
  } 
`;
const SelectMonthContainerDesktop = styled(SelectMonthContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  } 
`;
const ChildContainerDesktop = styled(ChildContainer)`
  display:grid ;
  grid-template-columns:2fr 6fr ;
  gap:15px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  grid-template-columns:2fr 5fr ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   grid-template-columns:2fr 6fr ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   grid-template-columns:2fr 5fr ;
  } 
`;
const CenterSelectionContainerDesktop = styled(CenterSelectionContainer)`
  height:520px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height:340px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   height:400px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   height:480px ;
  } 
`;

const CenterSelectionBoxDesktop = styled(CenterSelectionBox)`
  text-align:left ;
  display: flex;
justify-content: space-between;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height: 50px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   height: 60px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   height: 60px;
  } 
`;
const CenterDistanceParentDesktop = styled(CenterDistanceParent)`
text-align: left;
display: flex;
justify-content: space-between;
align-items: center;
align-content: center;
margin: auto;
width: 100%;
height: 35px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:10px ;
  height: 25px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size:11px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:12px ;
  } 
`;
const CenterNameTextDesktop = styled(CenterNameText)`
  text-align: left;
  font-size:14px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:10px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size:11px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:12px ;
  } 
`;

const CenterNextAvailableSlotTextDesktop = styled(CenterNextAvailableSlotText)`
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
const DateMonthTextDesktop = styled(DateMonthText)`
  font-size:14px ;
  padding:5px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:12px ;
  padding:3px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size:13px ;
  padding:5px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:14px ;
  padding:5px ;
  } 
`;
const SlotsDataContainerDesktop = styled(SlotsDataContainer)`
  height:540px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height:340px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   height:400px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  height:480px ;
  } 
`;
const ChildSlotsDataContainerDesktop = styled(ChildSlotsDataContainer)`
  height:540px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   height:340px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height:400px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   height:480px ;
  } 
`;
const DateBoxDesktop = styled(DateBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  } 
`;
const NoSlotsTextDesktop = styled(NoSlotsText)`
  font-family:Inter Variable ;
  font-size:14px ;
  padding-top:10px ;
  padding-bottom:10px ;
  padding-left:5px ;
  text-align:center ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:12px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size:13px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:14px ;
  } 
`;
const StyledDateCalendarDesktop = styled(StyledDateCalendar)`
 & .MuiPickersDay-root {
    width: 40px;
    height: 30px;
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  width: 210px;
  height: 210px;
  margin-top: 10px;
  & .MuiPickersCalendarHeader-root {
    min-height: 15px;
  }

  & .MuiDayCalendar-header {
    min-height: 30px;
  }

  & .MuiPickersDay-root {
    width: 35px;
    height: 20px;
    font-size: 10px;
  }

  & .MuiPickersCalendarHeader-label {
    font-size: 10px;
  }

  & .MuiTypography-caption {
    font-size: 10px;
  }
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  } 
`;
const CalendarPopoverDesktop = styled(CalendarPopover)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  transform: translateX(-100px) ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  } 
`;

const ProvisonalAndWalkinScreenTextDesktop = styled(ProvisonalAndWalkinScreenText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  } 
`;
const StyledCustomButtonDesktop = styled(StyledCustomButton)`
font-size: 14px !important ;
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
font-size: 12px !important ;
}
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
font-size: 12px !important ;
}
@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
font-size: 14px !important ;
}
`;

export {
  ContainerDesktop,
  HeadingTextDesktop,
  CalendarContainerDesktop,
  SelectMonthDropdownDesktop,
  SelectMonthTextDesktop,
  SelectMonthContainerDesktop,
  ChildContainerDesktop,
  StyledDateCalendarDesktop,
  CalendarPopoverDesktop,
  CenterSelectionContainerDesktop,
  CenterSelectionBoxDesktop,
  CenterNameTextDesktop,
  CenterNextAvailableSlotTextDesktop,
  DateMonthTextDesktop,
  SlotsDataContainerDesktop,
  DateBoxDesktop,
  NoSlotsTextDesktop,
  ChildSlotsDataContainerDesktop,
  CenterDistanceParentDesktop,
  ProvisonalAndWalkinScreenTextDesktop,
  StyledCustomButtonDesktop
};
