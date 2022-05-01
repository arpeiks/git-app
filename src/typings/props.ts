import { NextPage } from "next";
import { AppProps } from "next/app";
import React, { ReactNode } from "react";

export type IconProps = { color?: string };
export type LinkProps = { href: string; name: string };
export type NextPageWithLayout = NextPage & { getLayout?: (page: React.ReactNode) => ReactNode };
export type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };
