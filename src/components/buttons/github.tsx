import NextLink from "next/link";
import { styled } from "@utils/styled";
import Button from "@components/button";
import GithubIcon from "@components/icons/github";

const Text = styled("span", { display: "block", marginTop: "2px", fontFamily: "Roboto" });
const Icon = styled("div", { display: "flex", justifyContent: "center", alignItems: "center", marginRight: "1rem" });

const href = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`;

const GithubButton = () => (
  <NextLink passHref href={href}>
    <Button as="a">
      <Icon>
        <GithubIcon color="#fff" />
      </Icon>
      <Text>Login With Github</Text>
    </Button>
  </NextLink>
);

export default GithubButton;
