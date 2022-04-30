import { styled } from "@utils/styled";
import ArrowDownIcon from "./icons/caret";

type Props = { dropdown?: boolean; children: React.ReactNode };

const Root = styled("button", {
  margin: 0,
  border: 0,
  outline: 0,
  padding: 0,
  display: "flex",
  cursor: "pointer",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "unset",
});

const IconButton = ({ dropdown, children }: Props) => (
  <Root>
    <>{children}</>
    <>{Boolean(dropdown) && <ArrowDownIcon />}</>
  </Root>
);

export default IconButton;
