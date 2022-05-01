import React from "react";
import Page from "@components/page";
import Repos from "@components/repo/repos";
import BaseLoader from "@components/loader";
import Container from "@components/container";
import { AuthPageProps } from "@typings/props";
import AuthLayout from "@components/auth.route";
import { useGetPublicReposQuery } from "app/services/repo";

type Props = AuthPageProps & {};

const Loader = () => (
  <Page center>
    <BaseLoader />
  </Page>
);

const Profile = ({ user }: Props) => {
  const { data: repos, isLoading } = useGetPublicReposQuery(user?.repos_url);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Repos repos={repos} />
    </Container>
  );
};

Profile.getLayout = (page: React.ReactElement) => <AuthLayout children={page} showOn="private" />;

export default Profile;
