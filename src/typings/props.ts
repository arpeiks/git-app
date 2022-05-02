import { NextPage } from "next";
import { AppProps } from "next/app";
import { USER } from "app/types/user";
import React, { ReactNode } from "react";

export type IconProps = { color?: string };
export type AuthPageProps = { user: USER };
export type LinkProps = { href: string; name: string };
export type NextPageWithLayout = NextPage & { getLayout?: (page: React.ReactNode) => ReactNode };
export type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };
