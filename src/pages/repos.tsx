import React from "react";
import Input from "@components/input";
import { REPO } from "app/types/repo";
import { styled } from "@utils/styled";
import Loader from "@components/loader";
import Repos from "@components/repo/repos";
import Container from "@components/container";
import { AuthPageProps } from "@typings/props";
import AuthLayout from "@components/auth.route";
import Profile from "@components/profile/profile";
import { setRepos } from "app/features/repo/repo.slice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useGetPublicReposQuery } from "app/services/repo";

type Props = AuthPageProps & {};

const Root = styled("div", {
  margin: "3rem auto",

  "@md": {
    display: "flex",
    columnGap: "4rem",
    alignItems: "flex-start",
  },
});

const Footer = styled("div", {
  padding: "10rem 0",
});

const Details = styled("div", { width: "100%" });

const Filter = styled("div", { position: "sticky", top: 16 });

const Repository = ({ user }: Props) => {
  const dispatch = useAppDispatch();
  const repos = useAppSelector((state) => state.repo.repos);

  const initialState = repos.length ? repos : null;
  const [filtered, setFiltered] = React.useState<null | REPO[]>(initialState);
  const { data, isLoading } = useGetPublicReposQuery(user?.repos_url);

  const handleChange = (e: any) => {
    const value = e.target.value.toLowerCase();
    const filtered = repos?.filter((repo) => repo.name?.toLowerCase().includes(value));
    setFiltered(filtered);
  };

  // const handleSort = () => {
  //   setFiltered((prev) => {
  //     return prev.slice().sort((a: REPO, b: REPO) => {
  //       const first = new Date(a.updated_at).getTime();
  //       const second = new Date(b.updated_at).getTime();
  //       return first - second;
  //     });
  //   });
  // };

  React.useEffect(() => {
    if (data?.length) dispatch(setRepos(data));
  }, [data, dispatch]);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Root>
        <Profile
          name={user.name}
          login={user.login}
          avatar={user.avatar_url}
          followers={user.followers}
          following={user.following}
        />

        <Details>
          <Filter>
            <Input onChange={handleChange} />
            {/* <button onClick={handleSort}>Sort</button> */}
          </Filter>

          <Repos repos={filtered ?? data} />
        </Details>

        <Footer />
      </Root>
    </Container>
  );
};

Repository.getLayout = (page: React.ReactElement) => (
  <AuthLayout title="gitapp | repos" children={page} showOn="private" />
);

export default Repository;
