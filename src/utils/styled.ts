import { CSS as BaseCSS, createStitches } from "@stitches/react";

export const { css, styled, getCssText, config } = createStitches({
  media: {
    xs: "(min-width: 0px)",
    sm: "(min-width: 600px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1140px)",
    xl: "(min-width: 1536px)",
  },
});

export type CSS = BaseCSS<typeof config>;
