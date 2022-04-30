import { CSS as BaseCSS, createStitches } from "@stitches/react";

export const { css, styled, getCssText, config } = createStitches({});

export type CSS = BaseCSS<typeof config>;
