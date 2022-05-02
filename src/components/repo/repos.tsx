import React from "react";
import Repo from "./repo";
import { REPO } from "app/types/repo";
import { styled } from "@stitches/react";
import RepoIcon from "@components/icons/repo";

type Props = { repos?: REPO[] };

const Empty = styled("div", {
  width: "100%",
  display: "flex",
  padding: "4rem 0",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
});

const Repos = ({ repos }: Props) => {
  return (
    <React.Fragment>
      {!repos?.length && (
        <Empty>
          <RepoIcon />
          No Repository
        </Empty>
      )}

      {repos?.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </React.Fragment>
  );
};

export default Repos;
