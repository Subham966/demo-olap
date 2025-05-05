import { Typography, styled } from "@mui/material";
import { ErrorMessageText } from "./ErrorState.style";
const ErrorMessageTextMobile = styled(ErrorMessageText)`
  @media (min-width: 320px) and (max-width: 400px) {
  font-size: 12px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size: 13px;
  }
  @media (min-width: 440px) and (max-width: 480px) { 
  font-size: 14px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
   font-size: 15px; 
  }
`;
export { ErrorMessageTextMobile};