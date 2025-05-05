import { StyledButton } from "./CustomButton.styles";

const CustomButton = ({ children, selected, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { CustomButton };
