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

const ContainerDesktop = styled(Container)`
  height: 550px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 350px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 400px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 450px;
  }
`;

const ChildContainerDesktop = styled(ChildContainer)`
  height: 500px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 350px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 400px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 450px;
  }
`;

const TableContainerDesktop = styled(TableContainer)`
  height: 350px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 250px;
    width: 80%;
    margin-top: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 300px;
    width: 80%;
    margin-top: 0px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 350px;
    width: 80%;
    margin-top: 0px;
  }
`;

const HeadingTextDesktop = styled(HeadingText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 18px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 22px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 5px;
  }
`;
const HeadingLabelTextDesktop = styled(HeadingLabelText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    margin: 0px;
    padding: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    margin: 0px;
    padding: 0px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
    margin: 0px;
    padding: 0px;
  }
`;
const SubHeadingTextDesktop = styled(SubHeadingText)`
  color: black;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    padding: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    padding: 0px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    padding: 0px;
  }
`;

const StyledTableDesktop = styled(StyledTable)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  }
`;
const StyledTableRowDesktop = styled(StyledTableRow)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 40px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 45px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 50px;
  }
`;
const StyledTableDataDesktop = styled(StyledTableData)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  }
`;
const StyledTableNameDataDesktop = styled(StyledTableNameData)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    padding: 0px 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    padding: 0px 10px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    padding: 0px 10px;
  }
`;
const StyledTableFieldNameDesktop = styled(StyledTableFieldName)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px !important;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px !important;
  }
`;

const StyledTableFieldLastNameDesktop = styled(StyledTableFieldLastName)`
  font-size: 16px !important;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px !important;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px !important;
  }
`;
const StyledTableFieldDataDesktop = styled(StyledTableFieldData)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px !important;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px !important;
  }
`;
const CustomConfirmButtonDesktop = styled(CustomConfirmButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 30px;
    font-size: 12px !important ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 35px;
    font-size: 13px !important ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 40px;
    font-size: 15px !important ;
  }
`;
const InformationTextDesktop = styled(InformationText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  }
`;
const EditSlotTextDesktop = styled(EditSlotText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  }
`;

const ButtonOptionsContainerDesktop = styled(ButtonOptionsContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  }
`;

export {
  ButtonOptionsContainerDesktop,
  ContainerDesktop,
  HeadingLabelTextDesktop,
  SubHeadingTextDesktop,
  TableContainerDesktop,
  ChildContainerDesktop,
  HeadingTextDesktop,
  StyledTableDesktop,
  StyledTableRowDesktop,
  StyledTableDataDesktop,
  StyledTableNameDataDesktop,
  StyledTableFieldNameDesktop,
  StyledTableFieldDataDesktop,
  CustomConfirmButtonDesktop,
  InformationTextDesktop,
  EditSlotTextDesktop,
  StyledTableFieldLastNameDesktop,
};
