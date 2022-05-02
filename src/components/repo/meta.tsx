import { styled } from "@utils/styled";
import stringToColour from "@utils/string.color";
import CircleLoader from "@components/loader.circle";

type Props = { icon?: "dot" | React.ReactNode; name: string; value?: string | number; isLoadingLanguage?: boolean };

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
});

const Value = styled("span", {
  fontSize: "0.9rem",
  marginLeft: "0.5rem",
  color: "rgb(0 0 0 / 54%)",
});

const Icon = styled("div", {
  width: "18px",
  height: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Meta = ({ icon, value, isLoadingLanguage }: Props) => {
  let color: string | undefined = undefined;
  if (value === null || value === undefined) return null;
  if (icon === "dot") color = stringToColour(String(value));

  if (isLoadingLanguage) {
    return (
      <Icon>
        <CircleLoader />
      </Icon>
    );
  }

  return (
    <Root>
      {icon === "dot" ? <Dot style={{ backgroundColor: color }} /> : icon}
      <Value>{value}</Value>
    </Root>
  );
};

export default Meta;
