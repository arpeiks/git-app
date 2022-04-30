import NextLink from "next/link";
import { styled } from "@utils/styled";

type Props = { href: string; name: string };

const StyledLink = styled("a", {
  margin: 0,
});

const Link = ({ href, name }: Props) => (
  <NextLink href={href} passHref>
    <StyledLink>{name}</StyledLink>
  </NextLink>
);

export default Link;
