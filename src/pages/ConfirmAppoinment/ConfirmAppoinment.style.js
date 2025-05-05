import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Grid, Typography, styled } from "@mui/material";
import { CustomTextField } from "@/elements/CustomTextField";
import { CustomDateField } from "@/elements/CustomDateField";

const HeadingText = styled(Typography)`
  font-weight: 600;
  font-size: 24px;
  margin-left: 20px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
  font-family: Inter Variable;
`;

const CustomTextDetailsField = styled(CustomTextField)`
  background-color: white;
  width: 100%;
`;
const CustomDateDetailsField = styled(CustomDateField)`
  background-color: white;
  width: 100%;
  spell-check: false;
`;

const FieldContainer = styled(Grid)`
  padding: 0px 30px;
  height: auto;
  overflow: auto;
  align-items: center;
  justify-content: left;
  margin-top: 5px;
`;
const FieldName = styled(Typography)`
  color: black;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 10px;
  font-family: Inter Variable;
`;

const OptionalHeadingText = styled(Typography)`
  color: black;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  font-family: Inter Variable;
`;

const HelpText = styled(Typography)`
  margin-bottom: 10px;
  font-size: 17px;
  padding-top: 25px;
  font-family: Inter Variable;
  font-style: italic;
  font-weight: 400;
  color: gray;
  padding-left: 10px;
`;

const ProvisionalBookingText = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  color: red;
  border-radius: 5px;
  width: 95%;
  margin: auto;
  padding: 5px;
`;

const CustomConfirmButton = styled(CustomButton)(
  ({ isProvisional }) => `
 font-size: 20px ;
margin-top: 20px;
padding: 10px;
font-family: Inter Variable;

@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top: ${isProvisional ? "5px" : "35px"};
}
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: ${isProvisional ? "5px" : "35px"};
}
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: ${isProvisional ? "15px" : "25px"};
}
`
);

const FieldParentBox = styled(Box)`
  height: 510px;
`;

export {
  FieldParentBox,
  OptionalHeadingText,
  HelpText,
  FieldContainer,
  FieldName,
  HeadingText,
  CustomTextDetailsField,
  CustomDateDetailsField,
  CustomConfirmButton,
  ProvisionalBookingText,
};
