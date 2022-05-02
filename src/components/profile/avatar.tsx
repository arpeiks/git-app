import Image from "next/image";
import { styled } from "@utils/styled";

type Props = { alt: string; image: string };

const Root = styled("div", {
  width: "150px",
  height: "150px",
  borderRadius: "4px",
  position: "relative",

  "@sm": { width: "200px", height: "200px" },
  "@md": { width: "250px", height: "250px" },

  "& img": { borderRadius: "4px" },
});

const Avatar = ({ alt, image }: Props) => (
  <Root>
    <Image src={image} alt={alt} layout="fill" objectFit="cover" />
  </Root>
);

export default Avatar;
