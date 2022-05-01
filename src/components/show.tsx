import React from "react";

type Props = { iff: boolean; children: React.ReactNode };
const Show = ({ iff = false, children }: Props) => <React.Fragment>{Boolean(iff) && children}</React.Fragment>;

export default Show;
