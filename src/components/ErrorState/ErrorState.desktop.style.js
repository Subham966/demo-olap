import { Typography, styled } from "@mui/material";
import { ErrorMessageText } from "./ErrorState.style";

const ErrorMessageTextDesktop = styled(ErrorMessageText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 14px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 15px;
  }
`;
export { ErrorMessageTextDesktop};