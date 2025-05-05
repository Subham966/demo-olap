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
  height: 450px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

const SlotTimeText = styled(Box)`
font-weight: 550 ;
font-size: 16px ;
`;


const HeadingText = styled(Box)`
text-align: center ;
font-size: 20px ;
font-weight: 600 ;
margin-top: 13px ;
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
  width: 30%;
  background-color: #f3f3f3;
  padding: 5px 10px;
  border-radius: 5px;
`;
const StyledTableFieldName = styled("td")`
  font-family: Inter Variable;

  font-weight: 500;
  width: 25%;
  text-align: right;
  margin-left: 15px;
`;
const StyledTableFieldData = styled("td")`
  font-family: Inter Variable;
  width: 75%;
  background-color: #f3f3f3;
  padding: 5px 10px;
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
export {
  Container,
  TableContainer,
  ChildContainer,
  HeadingText,
  StyledTable,
  StyledTableRow,
  StyledTableData,
  StyledTableNameData,
  StyledTableFieldName,
  StyledTableFieldData,
  CustomConfirmButton,
  InformationText,
  EditSlotText,
  SlotTimeText
};
