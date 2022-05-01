import { styled } from "@utils/styled";

type Props = { icon?: "dot" | React.ReactNode; name: string; value: string | number };

const Root = styled("div", {
  display: "flex",
  marginBottom: "1rem",
  alignItems: "center",
});

const Dot = styled("span", {
  width: "8px",
  height: "8px",
  display: "block",
  borderRadius: "50%",
  backgroundColor: "blue",
});

const Value = styled("span", {
  fontSize: "0.9rem",
  marginLeft: "0.5rem",
  color: "rgb(0 0 0 / 54%)",
});

const Meta = ({ icon, value }: Props) => {
  return (
    <Root>
      {icon === "dot" ? <Dot /> : icon}
      <Value>{value}</Value>
    </Root>
  );
};

export default Meta;
