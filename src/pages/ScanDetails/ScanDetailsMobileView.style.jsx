import { COLORS } from "../../theme/theme";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const SinglePartContainer = styled(Stack)`
  & svg path {
    // fill: red; /* No quotes around the color value */
  }
`;

const ScanAreaHeading = styled(Typography)`
  text-align: left !important;
  margin-bottom: 10px;
  margin-top: -10px !important;
  @media (max-width: 450px) {
    margin-top: 10px;
  }
`;

const ScanAreaAccordionContainer = styled(Box)`
  height: 330px;
  overflow: auto;

  @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {
    height: 300px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
    height: 320px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
    height: 380px;
  }
`;
const GroupNameIcon = styled(Box)(
  ({ theme }) => `
display: grid ;
grid-template-columns: 9fr 2fr ;
cursor: pointer ;
`
);

const GroupNameText = styled(Box)`
  text-align: center;
  font-size: 13px;
  margin-top: 0px;
  padding-top: 5px;
  font-family: Inter Variable;
  display: inline;
`;

const InputBoxContainer = styled(Box)`
  display: grid;
  grid-template-columns: 8fr 3fr;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  gap: 10px;
`;
const InputLabelText = styled(Box)`
  text-align: left !important;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 450px) {
  }
`;

const SubmitButton = styled(Button)`
  margin: auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 43%;
  text-transform: none;
  font-size: 12px;
`;

const BodyPartsContainer = styled(Box)`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const BodyPartsBox = styled(Box)``;

const CustomScanButton = styled(Button)(
  ({ theme, selected }) => `
  width: 36vw;
  height: 45px;
  text-transform: none;
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
  font-family: 'Inter Variable';
  font-weight: 400;
  border-radius: 5px ;
  box-shadow:rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.1) 0px 2px 6px 2px ;
  background-color: ${
    selected ? theme.palette.primary.activeButton : COLORS.GREY_2
  };
  color: ${selected ? "white" : theme.palette.primary.activeButton};

  &:hover {
    background-color: ${
      selected ? theme.palette.primary.activeButton : COLORS.GREY_3
    };
  }
`
);

const CustomScanSelect = styled(Select)(
  ({ theme, selected }) => `
  height: 45px;
  font-size: 14px;
  text-align:center ;
  border-radius: 5px ;
  min-width: 120 ;
  width: 36vw ;
  font-family: 'Inter Variable';
  box-shadow:rgba(60, 64, 67, 0.1) 0px 1px 2px 0px, rgba(60, 64, 67, 0.1) 0px 2px 6px 2px ;
  background-color: ${
    selected ? theme.palette.primary.activeButton : COLORS.GREY_2
  };
  color: ${selected ? "white" : theme.palette.primary.activeButton};

  & .MuiSelect-icon {
    color: ${selected ? "white" : "black"};
  }

  &:hover {
    background-color: ${
      selected ? theme.palette.primary.activeButton : COLORS.GREY_3
    };
  }

  & fieldset {
    border: none;
  }
`
);

const StyledMenuItem = styled(MenuItem)`
  font-family: "Inter Variable";
  font-size: 14px;
  color: ${({ theme }) => theme.palette.primary.activeButton};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: white;
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.primary.activeButton};
  }

  &.Mui-focusVisible {
    color: ${({ theme }) => theme.palette.primary.activeButton};
  }
`;

export {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  SinglePartContainer,
  GroupNameIcon,
  GroupNameText,
  ScanAreaHeading,
  InputLabelText,
  InputBoxContainer,
  SubmitButton,
  ScanAreaAccordionContainer,
  CustomScanButton,
  CustomScanSelect,
  StyledMenuItem,
  BodyPartsBox,
  BodyPartsContainer,
};
