import NextLink from "next/link";
import { styled } from "@utils/styled";
import { LinkProps } from "@typings/props";

const StyledLink = styled("a", {
  margin: 0,
});

const Link = ({ href, name }: LinkProps) => (
  <NextLink href={href} passHref>
    <StyledLink>{name}</StyledLink>
  </NextLink>
);

export default Link;
