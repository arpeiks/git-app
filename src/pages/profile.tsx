import React from "react";
import Page from "@components/page";
import Input from "@components/input";
import { REPO } from "app/types/repo";
import Repos from "@components/repo/repos";
import BaseLoader from "@components/loader";
import Container from "@components/container";
import { AuthPageProps } from "@typings/props";
import AuthLayout from "@components/auth.route";
import { setRepos } from "app/features/repo/repo.slice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useGetPublicReposQuery } from "app/services/repo";

type Props = AuthPageProps & {};

const Loader = () => (
  <Page center>
    <BaseLoader />
  </Page>
);

const Profile = ({ user }: Props) => {
  const dispatch = useAppDispatch();
  const repos = useAppSelector((state) => state.repo.repos);
  const [filtered, setFiltered] = React.useState<REPO[]>(repos);

  const { data, isLoading, isSuccess } = useGetPublicReposQuery(user?.repos_url);

  const handleChange = (e: any) => {
    const value = e.target.value.toLowerCase();
    const filtered = repos?.filter((repo) => repo.name?.toLowerCase().includes(value));
    setFiltered(filtered);
  };

  const handleSort = () => {
    setFiltered((prev) => {
      return prev.slice().sort((a: REPO, b: REPO) => {
        const first = new Date(a.updated_at).getTime();
        const second = new Date(b.updated_at).getTime();
        return first - second;
      });
    });
  };

  React.useEffect(() => {
    if (data?.length) dispatch(setRepos(data));
  }, [isSuccess]);

  if (isLoading) return <Loader />;

  return (
    <Container style={{ marginTop: "2rem" }}>
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={user.avatar_url} width={100} height={100} style={{ borderRadius: "50%" }} />
        </div>
        <div>
          <h1>{user.name}</h1>
          <p>{user.login}</p>
        </div>
        <div>Follower: {user.followers}</div>
        <div>Followeing: {user.following}</div>
      </div>

      <Input onChange={handleChange} />
      <button onClick={handleSort}>Sort</button>
      <Repos repos={filtered ?? data} />
    </Container>
  );
};

Profile.getLayout = (page: React.ReactElement) => <AuthLayout children={page} showOn="private" />;

export default Profile;
