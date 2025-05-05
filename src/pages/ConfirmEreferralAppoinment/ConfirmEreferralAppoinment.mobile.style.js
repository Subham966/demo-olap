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

const ContainerMobile = styled(Container)`
  height: 500px;
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
  height: 500px;
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
  font-size: 15px;
  width: 100%;
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
  width: 30%;
  font-size: 15px;
  margin: 0;
  text-align: left;
  margin-bottom: 2px;
  font-weight: 700;
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
  font-size: 15px;
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
const SlotTimeTextMobile = styled(SlotTimeText)`
font-size:15px ;
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
  ContainerMobile,
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
  SlotTimeTextMobile
};
