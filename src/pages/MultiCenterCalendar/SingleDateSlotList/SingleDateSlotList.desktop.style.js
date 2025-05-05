import {styled } from "@mui/material";
import { Container, StyledCustomButton} from "./SingleDateSlotList.style";

const ContainerDesktop = styled(Container)`
padding-top:10px ;
padding-bottom:20px ;
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;
const StyledCustomButtonDesktop = styled(StyledCustomButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
height:25px;
width:50px ;
font-size: 10px !important ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
height:27px;
width:55px ;
font-size: 11px !important ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
height:30px;
width:55px ;
font-size: 12px !important ;
  }
`;

export {
  ContainerDesktop,
  StyledCustomButtonDesktop
};
