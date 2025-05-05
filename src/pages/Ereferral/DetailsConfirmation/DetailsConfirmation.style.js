import { CustomButton } from "@/elements/CustomButton";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 550px;
`;

const ChildContainer = styled(Box)`
  margin: auto;
  width: 100%;
  height: 500px;
`;

const TableContainer = styled(Box)`
  margin: auto;
  width: 70%;
  height: 350px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

const HeadingText = styled(Typography)`
  font-weight: 600;
  font-size: 24px;
  margin-left: 20px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 15px;
  font-family: Inter Variable;
`;
const StyledTable = styled("table")``;
const StyledTableRow = styled("tr")`
  height: 50px;
`;
const StyledTableData = styled("td")`
  font-family: Inter Variable;
  font-weight: 500;
`;
const StyledTableNameData = styled("td")`
  font-family: Inter Variable;
  width: 25%;
  font-size: 16px !important;
  background-color: #f3f3f3;
  padding: 5px 10px;
  border-radius: 5px;
`;
const StyledTableFieldName = styled("td")`
  font-family: Inter Variable;
  font-weight: 500;
  width: 25%;
  font-size: 16px !important;
  text-align: right;
  margin-left: 15px;
`;

const StyledTableFieldLastName = styled("td")`
  font-family: Inter Variable;
  font-weight: 500;
  font-size: 16px !important;
  width: 18%;
  text-align: right;
  margin-left: 15px;
`;
const StyledTableFieldData = styled("td")`
  font-family: Inter Variable;
  width: 75%;
  font-size: 16px !important;
  background-color: #f3f3f3;
  padding: 10px;
  border-radius: 5px;
`;
const CustomConfirmButton = styled(CustomButton)`
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  font-family: Inter Variable;
`;
const InformationText = styled(Box)`
  width: 85%;
  color: gray;
  margin: auto;
  text-align: center;
`;
const EditSlotText = styled(Box)`
  cursor: pointer;
  font-size: 15px;
  text-decoration: underline;
`;

const ButtonOptionsContainer = styled(Box)`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 0px;
  padding-bottom: 10px;
`;

const HeadingLabelText = styled(Typography)`
  font-size: 20px;
  margin-left: 20px;
  text-align: center;
  font-weight: 400;
`;
const SubHeadingText = styled(Typography)`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  margin-top: 10px;
  color: gray;
`;
export {
  ButtonOptionsContainer,
  Container,
  TableContainer,
  ChildContainer,
  HeadingText,
  SubHeadingText,
  HeadingLabelText,
  StyledTable,
  StyledTableRow,
  StyledTableData,
  StyledTableNameData,
  StyledTableFieldName,
  StyledTableFieldData,
  CustomConfirmButton,
  InformationText,
  EditSlotText,
  StyledTableFieldLastName,
};
