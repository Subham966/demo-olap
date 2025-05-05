import { CustomButton } from "@/elements/CustomButton";
import { Box, Typography, styled } from "@mui/material";
import {
  ButtonOptionsContainer,
  ChildContainer,
  Container,
  CustomConfirmButton,
  EditSlotText,
  HeadingLabelText,
  HeadingText,
  InformationText,
  StyledTable,
  StyledTableData,
  StyledTableFieldData,
  StyledTableFieldLastName,
  StyledTableFieldName,
  StyledTableNameData,
  StyledTableRow,
  SubHeadingText,
  TableContainer,
} from "./DetailsConfirmation.style";

const ContainerMobile = styled(Container)`
  height: 450px;
  overflow: auto;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const ChildContainerMobile = styled(ChildContainer)`
  height: 450px;
  overflow: auto;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const TableContainerMobile = styled(TableContainer)`
  height: 400px;
  padding: 0;
  width: 100%;
  margin-top: 0px;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const HeadingTextMobile = styled(HeadingText)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const HeadingLabelTextMobile = styled(HeadingLabelText)`
  font-size: 16px !important;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const SubHeadingTextMobile = styled(SubHeadingText)`
  font-size: 16px !important;
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 18px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 18px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 18px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const StyledTableMobile = styled(StyledTable)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const StyledTableRowMobile = styled(StyledTableRow)`
  display: flex;
  flex-direction: column;
  height: 70px;
  margin-bottom: 4px;

  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const StyledTableDataMobile = styled(StyledTableData)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const StyledTableNameDataMobile = styled(StyledTableNameData)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const StyledTableFieldNameMobile = styled(StyledTableFieldName)`
  width: 43%;
  text-align: left;
  margin: 0;
  margin-bottom: 2px;

  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const StyledTableFieldLastNameMobile = styled(StyledTableFieldLastName)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const StyledTableFieldDataMobile = styled(StyledTableFieldData)`
  width: 100%;
  height: 50px !important;
  color: rgba(0, 0, 0, 0.5);
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const CustomConfirmButtonMobile = styled(CustomConfirmButton)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const InformationTextMobile = styled(InformationText)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const EditSlotTextMobile = styled(EditSlotText)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const ButtonOptionsContainerMobile = styled(ButtonOptionsContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

export {
  ButtonOptionsContainerMobile,
  ContainerMobile,
  HeadingLabelTextMobile,
  SubHeadingTextMobile,
  TableContainerMobile,
  ChildContainerMobile,
  HeadingTextMobile,
  StyledTableMobile,
  StyledTableRowMobile,
  StyledTableDataMobile,
  StyledTableNameDataMobile,
  StyledTableFieldNameMobile,
  StyledTableFieldDataMobile,
  CustomConfirmButtonMobile,
  InformationTextMobile,
  EditSlotTextMobile,
  StyledTableFieldLastNameMobile,
};
