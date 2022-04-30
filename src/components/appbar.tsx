import Toolbar from "./toolbar";
import Container from "./container";
import { styled } from "@utils/styled";

type Props = { children?: React.ReactNode };

const Root = styled("header", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #e3e3e3",
});

const Appbar = ({ children }: Props) => (
  <Root>
    <Toolbar>
      <Container>{children}</Container>{" "}
    </Toolbar>
  </Root>
);

export default Appbar;
