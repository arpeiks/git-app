import Page from "./page";
import React from "react";
import BaseLoader from "./loader";
import { useRouter } from "next/router";
import { useAppSelector } from "app/hooks";
import { useGetUserQuery } from "app/services/user";

type Props = { children: React.ReactElement; showOn?: "public" | "private" };

const Loader = () => (
  <Page center>
    <BaseLoader />
  </Page>
);

const AuthLayout = ({ children, showOn = "private" }: Props) => {
  const router = useRouter();
  const token = useAppSelector((state) => state.auth.token);

  const skip = !Boolean(token);
  const { data, isError, isSuccess, isLoading, fulfilledTimeStamp } = useGetUserQuery(null, { skip });

  const isAllRoute = !showOn;
  const isPublicRoute = showOn === "public";
  const isPrivateRoute = showOn === "private";
  const isFulfilled = Boolean(fulfilledTimeStamp);
  const loggedIn = !!token && isSuccess && isFulfilled;

  const redirectToLogin = !loggedIn && isPrivateRoute;
  const redirectToProfile = loggedIn && isPublicRoute;
  const showComponent = isAllRoute || (isPublicRoute && !loggedIn) || (isPrivateRoute && loggedIn);

  // if is currently laoding then
  // isError => undefined

  // public unauth -> children
  // private auth -> children
  // all/undefined auth -> children
  // all/undefined unauth -> children

  // private unauth -> redirect login

  // public auth -> redirect dashboard

  if (isLoading) return <Loader />;
  if (isError) return <h1>ERROR</h1>;

  if (redirectToLogin) router.push("/login");
  if (redirectToProfile) router.push("/profile");

  if (showComponent) {
    return React.cloneElement(children, { user: data });
  }

  return <Loader />;
};

export default AuthLayout;
