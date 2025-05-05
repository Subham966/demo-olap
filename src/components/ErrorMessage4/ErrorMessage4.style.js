import { COLORS } from "@/theme";
import { Box, Typography, styled } from "@mui/material";

const CustomContainer = styled(Box)`
  display: grid;
  gap: 10px;
  width: 80%;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  border-radius: 10px;
`;

const ErrorHeading = styled(Typography)``;

const HelpTextHeading = styled(Typography)``;

const ErrorIconBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const HelpTextBox = styled(Box)`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const CrossButton = styled(Box)`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 3vh;
  width: 3vh;
  border: 1px solid;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  fontsize: 16px;
  fontweight: 600;
  color: grey;
`;

const SelectedModalityList = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 30%;
  padding: 30px 0;
`;

export {
  CustomContainer,
  ErrorIconBox,
  HelpTextBox,
  ErrorHeading,
  HelpTextHeading,
  CrossButton,
  SelectedModalityList,
};
