import { COLORS, BORDERS } from "../../theme/theme";
import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)`
  padding: 8px 30px;
  border: 1px solid ${COLORS.GREY};
  font-size: 14px !important;
  border-radius: 6px;
  box-shadow: none;
  height: 41px;
  text-transform: none;
  position: relative;
  overflow: hidden;
`;

export { StyledButton };
