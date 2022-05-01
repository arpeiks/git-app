import React from "react";
import Page from "@components/page";
import AuthLayout from "@components/auth.route";
import GithubButton from "@components/buttons/github";

const Login = () => {
  return (
    <Page center>
      <GithubButton />
    </Page>
  );
};

Login.getLayout = (page: React.ReactElement) => <AuthLayout children={page} showOn="public" />;

export default Login;
