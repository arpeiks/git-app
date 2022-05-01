import React from "react";
import Page from "@components/page";
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
  const { data, isError, isSuccess } = useGetAccessTokenQuery(code, { skip: !Boolean(code) });

  React.useEffect(() => {
    const token = data?.access_token;
    if (token) dispatch(updateToken(token));
  }, [isSuccess]);

  if (isError) router.push("/login");
  if (isSuccess) router.push("/profile");

  return (
    <Page center>
      <Loader />
    </Page>
  );
};

Auth.getLayout = (page: React.ReactElement) => <AuthLayout children={page} showOn="public" />;

export default Auth;
