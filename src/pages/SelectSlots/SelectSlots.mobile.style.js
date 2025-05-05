import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { ButtonStyled, CalendarContainer, CenterNameText, CenterSlotsListContainer, Container, HeadingText, LoaderContainer, LoadingMessageStack, MonthDropdown, MonthPreferenceContainer, NoSlotsMessage, SelectMonthDropdown, SelectMonthText, SlotContainer,  SlotsContainer, StyledButton, TimeCell, TimePreferenceHeading, TimePreferenceStack } from "./SelectSlots.style";

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
margin-top: 0px !important;
@media (min-width: 320px) and (max-width: 400px) {
    margin-bottom: 19px;
    font-size: 18px;
}
@media (min-width: 400px) and (max-width: 440px) {
    margin-bottom: 19px;
    font-size: 18px;
}
@media (min-width: 440px) and (max-width: 480px) {
    margin-bottom: 19px;
    font-size: 18px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const CalendarContainerMobile = styled(CalendarContainer)`
margin: auto 0px;
margin-top:0px ;
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

const TimePreferenceStackMobile = styled(TimePreferenceStack)`

@media (min-width: 320px) and (max-width: 400px) {
    margin: auto 10px;
    margin-top:-10px ;
}
@media (min-width: 400px) and (max-width: 440px) {
    margin: auto 0px;
    margin-top:-10px ;
}
@media (min-width: 440px) and (max-width: 480px) {
    margin: auto 0px;
    margin-top:-10px ;
}
@media (min-width: 480px) and (max-width: 780px) {
    margin: auto 20px;  
    margin-top:-10px ;  
} 
`;
const TimePreferenceHeadingMobile = styled(TimePreferenceHeading)(
  ({ theme }) => `
@media (min-width: 320px) and (max-width: 400px) {
   font-size:15px !important;
}
@media (min-width: 400px) and (max-width: 440px) {
  font-size:15px !important;
}
@media (min-width: 440px) and (max-width: 480px) {
  font-size:15px !important;
}
@media (min-width: 480px) and (max-width: 780px) {
      font-size:15px !important;
} 
`
);

const MonthPreferenceContainerMobile = styled(MonthPreferenceContainer)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const SelectMonthTextMobile = styled(SelectMonthText)`
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

const StyledButtonMobile = styled(StyledButton)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const LoaderContainerMobile = styled(LoaderContainer)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const NoSlotsMessageMobile = styled(NoSlotsMessage)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;

const SlotsContainerMobile = styled(SlotsContainer)`
@media (min-width: 320px) and (max-width: 400px) {
    margin: 10px 0px;
}
@media (min-width: 400px) and (max-width: 440px) {
    margin: 10px 0px;
}
@media (min-width: 440px) and (max-width: 480px) {
    margin: 10px 0px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const MonthDropdownMobile = styled(MonthDropdown)`
@media (min-width: 320px) and (max-width: 400px) {
   min-width:100px ;
   padding:5px ;
}
@media (min-width: 400px) and (max-width: 440px) {
   min-width:100px ;
   padding:5px ;
}
@media (min-width: 440px) and (max-width: 480px) {
   min-width:100px ;
   padding:5px ;
}
@media (min-width: 480px) and (max-width: 780px) {
  min-width:100px ;
} 
`;

const ButtonStyledMobile = styled(ButtonStyled)`
@media (min-width: 320px) and (max-width: 400px) {
   width: 72px;
    height: 27px;
}
@media (min-width: 400px) and (max-width: 440px) {
   width: 72px;
    height: 27px;
}
@media (min-width: 440px) and (max-width: 480px) {
   width: 72px;
    height: 27px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const SlotContainerMobile = styled(SlotContainer)`
height:37vh;
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
const TimeCellMobile = styled(TimeCell)`
    height: 25.6px;
    border-radius: 5px;
    font-size: 10px;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {
   
}
@media (min-width: 440px) and (max-width: 480px) {
 
}
@media (min-width: 480px) and (max-width: 780px) {
    
} 
`;
const CenterSlotsListContainerMobile= styled(CenterSlotsListContainer)`  
height:410px ; 
@media (min-width: 320px) and (max-width: 400px) {
margin-top:10px ; 
}
@media (min-width: 400px) and (max-width: 440px) {
margin-top:10px ;  
}
@media (min-width: 440px) and (max-width: 480px) {
margin-top:10px ; 
}
@media (min-width: 480px) and (max-width: 780px) {
margin-top:10px ;   
} 


  @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {
    height: 280px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
    height: 340px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
    height: 400px;
  }
`;

const LoadingMessageStackMobile=styled(LoadingMessageStack)`
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
  TimePreferenceStackMobile,
  TimePreferenceHeadingMobile,
  SelectMonthTextMobile,
  StyledButtonMobile,
  MonthPreferenceContainerMobile,
  LoaderContainerMobile,
  NoSlotsMessageMobile,
  SlotsContainerMobile,
  ButtonStyledMobile,
  SlotContainerMobile,
  MonthDropdownMobile,
  CenterNameTextMobile,
  TimeCellMobile,
  CenterSlotsListContainerMobile,
  LoadingMessageStackMobile
};
