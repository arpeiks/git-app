import React from "react";
import Loader from "@components/loader";
import { useRouter } from "next/router";
import { useAppDispatch } from "app/hooks";
import AuthLayout from "@components/auth.route";
import { useGetAccessTokenQuery } from "app/services/auth";
import { updateToken } from "app/features/auth/auth.slice";

const Auth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const code: string | undefined = router.query.code as string;

  const {
    data,
    isError,
    isLoading,
    isSuccess,
    isUninitialized: isIdle,
  } = useGetAccessTokenQuery(code, { skip: !Boolean(code) });

  React.useEffect(() => {
    const token = data?.access_token;
    if (token) dispatch(updateToken(token));
  }, [isSuccess]);

  if (isIdle || isLoading) return <Loader />;
  if (isError) return <h1 style={{ color: "red" }}>{data?.error || "An error occurred!"}</h1>;

  return router.push("/profile");
};

Auth.getLayout = (page: React.ReactElement) => <AuthLayout children={page} showOn="public" />;

export default Auth;
