import { styled, TextField as CustomTextField, Select, InputLabel } from "@mui/material";
import { COLORS, FONT } from "../../theme/theme";
const StyledMuiSelect = styled(Select)`
  & .MuiOutlinedInput-root {
    height: 45px;
    display: flex;
    align-items: center;
  }

  & .MuiSelect-select {
    padding: 10px 14px;
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

const StyledInputLabel = styled(InputLabel)`
margin-top: -5px ;

  &.MuiInputLabel-shrink {
    margin-top: 0px; 
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

export { StyledMuiSelect ,StyledInputLabel};
