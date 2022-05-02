import React from "react";
import Head from "next/head";
import Loader from "./loader";
import Appbar from "./appbar";
import { useRouter } from "next/router";
import { useAppSelector } from "app/hooks";
import { useGetUserQuery } from "app/services/user";

type Props = { title: string; children: React.ReactElement; showOn?: "public" | "private" };

const AuthLayout = ({ title, children, showOn = "private" }: Props) => {
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

  // public auth -> redirect profile

  if (isLoading) return <Loader />;
  if (isError) return <h1>ERROR</h1>;

  if (redirectToLogin) router.push("/login");
  if (redirectToProfile) router.push("/repos");

  if (showComponent) {
    const childrenElement = React.cloneElement(children, { user: data });
    return (
      <React.Fragment>
        <Head>
          <title>{title || "arpeiks gitapp"}</title>
        </Head>
        <Appbar />
        {childrenElement}
      </React.Fragment>
    );
  }

  return <Loader />;
};

export default AuthLayout;
