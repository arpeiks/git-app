import React from "react";
import Login from "./login";
import AuthLayout from "@components/auth.route";

const Home = () => <Login />;
Home.getLayout = (page: React.ReactElement) => <AuthLayout showOn="public">{page}</AuthLayout>;

export default Home;
