import { Box, styled } from "@mui/material";
import { CalendarContainer, CalendarPopover, CenterDistanceParent, CenterDropdownBox, CenterDropdownContainer, CenterDropdownText, CenterNameText, CenterNextAvailableSlotText, CenterSelectionBox, CenterSelectionContainer, CenterSelectionMobileContainer, ChildContainer, ChildSlotsDataContainer, Container, DateBox, DateMonthText, HeadingText, NoSlotsText, ProvisonalAndWalkinScreenText, SelectCenterDropdown, SelectMonthContainer, SelectMonthDropdown, SelectMonthText, SlotsDataContainer, StyledButton, StyledCustomButton, StyledDateCalendar } from "./MultiCenterCalendar.style";
import { COLORS } from "@/theme";

const ContainerMobile = styled(Container)`
margin-left:0px;
margin-right:0px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const HeadingTextMobile = styled(HeadingText)`
margin-top: 8px !important;
font-size: 16px;
@media (min-width: 320px) and (max-width: 400px) {
    margin-bottom: 10px;
    font-size: 16px;
}
@media (min-width: 400px) and (max-width: 440px) {
    margin-bottom: 10px;
    font-size: 16px;
}
@media (min-width: 440px) and (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 16px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const CalendarContainerMobile = styled(CalendarContainer)`
margin: auto 0px;
margin-top: -10px;

@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const SelectMonthDropdownMobile = styled(SelectMonthDropdown)(
    ({ theme }) => `
margin-top:0px ;
border-radius:7px ;
@media (min-width: 320px) and (max-width: 400px) {
   height:23px ;
   width:100px ;
}
@media (min-width: 400px) and (max-width: 440px) {
   height:23px ;
   width:100px ;
}
@media (min-width: 440px) and (max-width: 480px) {
   height:23px ;
   width:100px ;
}
@media (min-width: 480px) and (max-width: 780px) {
   height:23px ;
   width:125px ;  
} 
`
);

const SelectMonthTextMobile = styled(SelectMonthText)`
width: 100% ;
margin: auto ;
padding: 0px ;

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

const SelectMonthContainerMobile = styled(SelectMonthContainer)`
width: 100%;
display: flex;
justify-content: space-between; 
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const ChildContainerMobile = styled(ChildContainer)`
  display:grid ;
  grid-template-columns:1fr ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CenterSelectionContainerMobile = styled(CenterSelectionContainer)`
height:300px ;
overflow:auto ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CenterSelectionMobileContainerMobile = styled(CenterSelectionMobileContainer)`
max-height:400px ;
overflow:auto ;
display:grid ;
grid-template-columns:1fr ;
gap:10px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CenterSelectionBoxMobile = styled(CenterSelectionBox)`
height: 50px;
padding-left:10%;
padding-right:10% ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CenterNameTextMobile = styled(CenterNameText)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CenterDistanceParentMobile = styled(CenterDistanceParent)`
height: 20px;
text-align:left ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const CenterNextAvailableSlotTextMobile = styled(CenterNextAvailableSlotText)`
text-align:left ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const DateMonthTextMobile = styled(DateMonthText)`
font-size:12px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const DateBoxMobile = styled(DateBox)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const NoSlotsTextMobile = styled(NoSlotsText)`
font-size: 12px !important;
padding-top:10px;
padding-bottom:10px ;
margin-left:10px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const SlotsDataContainerMobile = styled(SlotsDataContainer)`
height:320px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {
}
@media (min-width: 440px) and (max-width: 480px) {
}
@media (min-width: 480px) and (max-width: 780px) {

}
`;
const ChildSlotsDataContainerMobile = styled(ChildSlotsDataContainer)`
height:320px ;
@media (min-width: 320px) and (max-width: 400px) {
height:400px ;
}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const StyledDateCalendarMobile = styled(StyledDateCalendar)`
 & .MuiPickersDay-root {
    width: 30px;
    height: 30px;
}
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CalendarPopoverMobile = styled(CalendarPopover)`
 transform: translateX(-0px) ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const ButtonStyledMobile = styled(StyledButton)`
text-align:left ;
font-size:12px ;
width: 220px !important;
height: 50px;
box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
@media (min-width: 320px) and (max-width: 400px) {
}
@media (min-width: 400px) and (max-width: 440px) {
}
@media (min-width: 440px) and (max-width: 480px) {
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const SelectCenterDropdownMobile = styled(SelectCenterDropdown)(
    ({ theme }) => `
border-radius:7px ;
width:220px ;
height:23px ;
font-family:Inter Variable ;
&:hover {
   background-color: ${COLORS.GREY_3},
 }
@media (min-width: 320px) and (max-width: 400px) {
}
@media (min-width: 400px) and (max-width: 440px) {
}
@media (min-width: 440px) and (max-width: 480px) {
}
@media (min-width: 480px) and (max-width: 780px) {
}
`
);
const CenterDropdownContainerMobile = styled(CenterDropdownContainer)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CenterDropdownBoxMobile = styled(CenterDropdownBox)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CenterDropdownTextMobile = styled(CenterDropdownText)`
font-size:12px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;


const ProvisonalAndWalkinScreenTextMobile = styled(ProvisonalAndWalkinScreenText)`
font-size:12px ;
margin-top:5px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const CenterDropdownOptionsMobile = styled(Box)`
font-family: Inter Variable ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const CenterNameContainerMobile = styled(Box)`
font-family: Inter Variable ;
display: flex ;
justify-content: space-between ;
width: 200px ;
font-size: 10px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const NextAvailabilityContainerMobile = styled(Box)`
font-size: 9px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const MobileSubHeading = styled(Box)`
font-size: 12px ;
padding-bottom: 5px ;
font-weight: 500 ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const StyledCustomButtonMobile = styled(StyledCustomButton)`
height:auto ;
padding-top:5px ;
font-size: 12px !important ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

export {
    ContainerMobile,
    HeadingTextMobile,
    CalendarContainerMobile,
    SelectMonthDropdownMobile,
    SelectMonthTextMobile,
    SelectMonthContainerMobile,
    ChildContainerMobile,
    StyledDateCalendarMobile,
    CalendarPopoverMobile,
    CenterSelectionContainerMobile,
    CenterSelectionBoxMobile,
    CenterNameTextMobile,
    CenterNextAvailableSlotTextMobile,
    DateMonthTextMobile,
    SlotsDataContainerMobile,
    DateBoxMobile,
    ChildSlotsDataContainerMobile,
    NoSlotsTextMobile,
    ButtonStyledMobile,
    SelectCenterDropdownMobile,
    CenterDistanceParentMobile,
    CenterDropdownContainerMobile,
    CenterDropdownBoxMobile,
    CenterDropdownTextMobile,
    CenterSelectionMobileContainerMobile,
    ProvisonalAndWalkinScreenTextMobile,
    CenterDropdownOptionsMobile,
    CenterNameContainerMobile,
    NextAvailabilityContainerMobile,
    MobileSubHeading,
    StyledCustomButtonMobile
};
