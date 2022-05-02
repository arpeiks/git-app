import React from "react";
import Login from "./login";
import Head from "next/head";
import AuthLayout from "@components/auth.route";

const Home = () => (
  <React.Fragment>
    <Head>
      <title>gitapp | home</title>
    </Head>
    <Login />
  </React.Fragment>
);

Home.getLayout = (page: React.ReactElement) => (
  <AuthLayout title="gitapp | home" showOn="public">
    {page}
  </AuthLayout>
);

export default Home;
