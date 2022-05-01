import { styled } from "@utils/styled";

const Page = styled(
  "div",
  {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
  { variants: { center: { true: { alignItems: "center", justifyContent: "center" } } } }
);

export default Page;
