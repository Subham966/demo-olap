import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { ButtonStyled, CalendarContainer, CenterNameText, CenterSlotsListContainer, Container, HeadingText, LoaderContainer, LoadingMessageStack, MonthDropdown, MonthPreferenceContainer, NoSlotsMessage, SelectMonthDropdown, SelectMonthText, SlotContainer, SlotsContainer, StyledButton, TimeCell, TimePreferenceHeading, TimePreferenceStack } from "./SelectSlots.style";

const ContainerDesktop = styled(Container)`
`;

const HeadingTextDesktop = styled(HeadingText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding:0px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding:0px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
    margin: 17px;
    padding:0px ;
  }
`;

const CalendarContainerDesktop = styled(CalendarContainer)`
   margin-top:0px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   margin: auto 30px;
   margin-top:0px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   margin: auto 30px;
   margin-top:0px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   margin: auto 60px;
   margin-top:0px ;
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
  height:30px ;
  width:130px ;
  } 

`
);

const TimePreferenceStackDesktop = styled(TimePreferenceStack)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin: auto 30px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin: auto 30px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin: auto 60px;
  } 
`;
const TimePreferenceHeadingDesktop = styled(TimePreferenceHeading)(
  ({ theme }) => `
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 font-size:15px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 font-size:17px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 font-size:18px ;
  } 


`
);

const MonthPreferenceContainerDesktop = styled(MonthPreferenceContainer)`
display:flex;
direction:flex-wrap ;
margin-top:-10px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:13px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size:14px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:14px ;
  } 
`;

const SelectMonthTextDesktop = styled(SelectMonthText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 font-size:13px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 font-size:14px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 font-size:14px ;
  } 
`;

const StyledButtonDesktop = styled(StyledButton)`

`;
const LoaderContainerDesktop = styled(LoaderContainer)`

`;

const NoSlotsMessageDesktop = styled(NoSlotsMessage)`

`;

const SlotsContainerDesktop = styled(SlotsContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin: 10px 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin: 20px 0px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin: 20px 0px;
  } 
`;
const MonthDropdownDesktop = styled(MonthDropdown)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   min-width:100px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   min-width:130px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    min-width:150px ;
  } 
`;

const ButtonStyledDesktop = styled(ButtonStyled)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  width: 76.4px;
  height: 30.4px;
  font-size: 12px !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  width: 76.4px;
  height: 30.4px;
  font-size: 12px !important;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  width: 76.4px;
  height: 30.4px;
  font-size: 12px !important;
  } 
`;
const SlotContainerDesktop = styled(SlotContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height:35vh;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  height:37vh;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height:40vh;
  } 
`;


const CenterNameTextDesktop = styled(CenterNameText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 font-size:13px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 font-size:15px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 font-size:16px ;
  } 
`;
const TimeCellDesktop = styled(TimeCell)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  width:65px ;
  font-size:10px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }

`;
const CenterSlotsListContainerDesktop = styled(CenterSlotsListContainer)`
  height:370px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top:0px ; 
  height:300px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 margin-top:10px ; 
  height: 320px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top:10px ; 
  height:370px ;
  }
`;

const LoadingMessageStackDesktop =styled(LoadingMessageStack)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
height:50px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
height:50px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
height:50px ;
  }

`;
export {
  ContainerDesktop,
  HeadingTextDesktop,
  CalendarContainerDesktop,
  SelectMonthDropdownDesktop,
  TimePreferenceStackDesktop,
  TimePreferenceHeadingDesktop,
  SelectMonthTextDesktop,
  StyledButtonDesktop,
  MonthPreferenceContainerDesktop,
  LoaderContainerDesktop,
  NoSlotsMessageDesktop,
  SlotsContainerDesktop,
  ButtonStyledDesktop,
  SlotContainerDesktop,
  MonthDropdownDesktop,
  CenterNameTextDesktop,
  TimeCellDesktop,
  CenterSlotsListContainerDesktop,
  LoadingMessageStackDesktop
};
