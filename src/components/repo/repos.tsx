import React from "react";
import Repo from "./repo";
import { REPO } from "app/types/repo";

type Props = { repos?: [REPO] };

const Repos = ({ repos }: Props) => {
  return (
    <React.Fragment>
      {repos?.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </React.Fragment>
  );
};

export default Repos;
