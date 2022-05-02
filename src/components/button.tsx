import { styled } from "@stitches/react";

const Button = styled("button", {
  margin: 0,
  border: 0,
  outline: 0,
  color: "#fff",
  display: "flex",
  fontWeight: 500,
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "4px",
  position: "relative",
  alignItems: "center",
  padding: "1rem 2rem",
  fontFamily: "Roboto",
  justifyContent: "center",
  backgroundColor: "black",
  textTransform: "uppercase",
  "&:hover:before": { transform: "scale(1.1)" },
  boxShadow: "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",

  "&:before": {
    top: 0,
    left: 0,
    zIndex: -1,
    content: "''",
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    position: "absolute",
    backgroundColor: "black",
    transition: "transform ease 0.3s",
  },
});

export default Button;
