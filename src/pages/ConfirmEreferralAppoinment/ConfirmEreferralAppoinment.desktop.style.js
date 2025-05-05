import { CustomButton } from "@/elements/CustomButton";
import { Box, Typography, styled } from "@mui/material";
import {
  ChildContainer,
  Container,
  CustomConfirmButton,
  EditSlotText,
  HeadingText,
  InformationText,
  SlotTimeText,
  StyledTable,
  StyledTableData,
  StyledTableFieldData,
  StyledTableFieldName,
  StyledTableNameData,
  StyledTableRow,
  TableContainer,
} from "./ConfirmEreferralAppoinment.style";

const ContainerDesktop = styled(Container)`
  height: 600px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 400px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 450px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 550px;
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
  height: 500px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 340px;
    width: 80%;
    margin-top: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 390px;
    width: 80%;
    margin-top: 0px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 440px;
    width: 70%;
    margin-top: 0px;
  }
`;

const HeadingTextDesktop = styled(HeadingText)`
  font-size:20px  ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:16px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size:18px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:20px ;
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
    font-size: 12px;
    padding: 0px 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
    padding: 0px 10px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
    padding: 0px 10px;
  }
`;
const StyledTableFieldNameDesktop = styled(StyledTableFieldName)`
  width: 15%;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
    width: 20%;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
    width: 20%;
  }
`;
const StyledTableFieldDataDesktop = styled(StyledTableFieldData)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
  }
`;
const CustomConfirmButtonDesktop = styled(CustomConfirmButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 30px;
    margin-top: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 35px;
    margin-top: 10px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 40px;
    margin-top: 20px;
  }
`;
const InformationTextDesktop = styled(InformationText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
  }
`;
const EditSlotTextDesktop = styled(EditSlotText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 12px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px;
  }
`;

const SlotTimeTextDesktop = styled(SlotTimeText)`

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 12px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 14px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 16px ;
  }
`;
export {
  ContainerDesktop,
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
  SlotTimeTextDesktop
};
