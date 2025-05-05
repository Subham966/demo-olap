import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";

const Container = styled(Box)`
margin-left:20px;
margin-right:20px ;
`;

const HeadingText = styled(Typography)`
  margin-top: 12px;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color};
  font-size: 22px;
`;

const CalendarContainer = styled(Typography)`
  margin: auto 80px;
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

const TimePreferenceStack = styled(Box)`
  margin: auto 80px;
  display: flex;
  justify-content: flex-end; 
`;
const TimePreferenceHeading = styled(Typography)(
  ({ theme }) => `
 font-size:18px ;
 margin-bottom:10px ;
 font-family:Inter Variable ;
 color:${theme.palette.primary.activeButton} ;

`
);

const MonthPreferenceContainer = styled(Stack)`
  margin-top: 0px;
  margin-bottom: 10px;
`;

const SelectMonthText = styled(Typography)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
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
const LoaderContainer = styled(Stack)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const NoSlotsMessage = styled(Typography)`
  margin-top: 20px;
`;

const SlotsContainer = styled(Typography)`
  background-color: ${COLORS.GREY_2};
  borderr-radius: 5px;
  padding: 10px;
  margin: 20px 0px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
`;
const MonthDropdown = styled(Stack)`
   padding:15px ;
   gap:0px ;
   min-width:150px ;
`;

const ButtonStyled = styled(CustomButton)`
  width: 86.4px;
  height: 32.4px;
  font-size: 12px !important;
  line-height: 20px;
  font-family: "Inter Variable";

  ${({ isConfirm, theme ,isHandleUtteranceApiPending}) =>
    isConfirm &&
    `
    font-weight: 600;
    background-color: ${theme.palette.text.activeButtonText};
    color: ${theme.palette.primary.activeButton};

    &:hover {
      color: ${!isHandleUtteranceApiPending && theme.palette.text.activeButtonText};
      border: 1px solid ${!isHandleUtteranceApiPending && theme.palette.text.activeButtonText};
      background-color: ${!isHandleUtteranceApiPending && theme.palette.primary.activeButton};
    }
  `}

  ${({ isClose }) =>
    isClose &&
    `
    font-weight: 400;
  `}
`;
const SlotContainer = styled(Stack)`
  height:40vh;
  padding-bottom:20px ;
`;

const CenterNameText = styled(Typography)`
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
`;
const TimeCell = styled(Stack)`
  height: 33.6px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-family: Inter Variable;
  font-size: 14.4px;
  font-weight: 500;
  line-height: 24px;
  flex-direction: row;

`;
const CenterSlotsListContainer= styled(Stack)`
height:350px ;
overflow:auto;
margin-top:20px ;
`;

const LoadingMessageStack=styled(Stack)`
height:100px ;
`;
export {
  Container,
  HeadingText,
  CalendarContainer,
  SelectMonthDropdown,
  TimePreferenceStack,
  TimePreferenceHeading,
  SelectMonthText,
  StyledButton,
  MonthPreferenceContainer,
  LoaderContainer,
  NoSlotsMessage,
  SlotsContainer,
  ButtonStyled,
  SlotContainer,
  MonthDropdown,
  CenterNameText,
  TimeCell,
  CenterSlotsListContainer,
  LoadingMessageStack
};
