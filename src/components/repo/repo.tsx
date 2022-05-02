import Meta from "./meta";
import React from "react";
import dayjs from "dayjs";
import Flex from "@components/flex";
import { REPO } from "app/types/repo";
import Label from "@components/label";
import { styled } from "@utils/styled";
import { useAppDispatch } from "app/hooks";
import duration from "dayjs/plugin/duration";
import StarIcon from "@components/icons/star";
import relativeTime from "dayjs/plugin/relativeTime";
import { useGetRepoLanguagesQuery } from "app/services/repo";
import { updateRepoLanguage } from "app/features/repo/repo.slice";

type Props = { repo: REPO };

const Root = styled("div", {
  padding: "1rem 0",

  "&:not(:last-of-type)": {
    borderBottom: "1px solid #e3e3e3",
  },
});

const Name = styled("p", {
  color: "#3f51b5",
});

const Description = styled("span", {
  fontSize: "0.9rem",
  color: "rgb(0 0 0 / 54%)",
});

const Details = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "1rem",
  columnGap: "1rem",
});

const Repo = ({ repo }: Props) => {
  dayjs.extend(duration);
  dayjs.extend(relativeTime);

  let language = repo.language;
  const now = dayjs(new Date());
  const dispatch = useAppDispatch();
  const updateDate = dayjs(repo.updated_at);
  const since = dayjs.duration(now.diff(updateDate)).humanize();

  const {
    data: languages,
    fulfilledTimeStamp,
    isLoading: isLoadingLanguage,
  } = useGetRepoLanguagesQuery(repo.languages_url, { skip: Boolean(language) });

  React.useEffect(() => {
    const language = languages ? Object.keys(languages)[0] : null;
    if (language) dispatch(updateRepoLanguage({ id: repo.id, value: language }));
  }, [fulfilledTimeStamp]);

  if (languages && Boolean(fulfilledTimeStamp)) language = Object.keys(languages)[0];

  return (
    <Root>
      <Flex>
        <Name>{repo.name}</Name>
        <Label>{repo.visibility}</Label>
      </Flex>
      <Description>{repo.description}</Description>
      <Details>
        <Meta icon="dot" name="language" value={language} isLoadingLanguage={isLoadingLanguage} />
        <Meta icon={<StarIcon />} name="stargazers_count" value={repo.stargazers_count} />
        <Meta name="pushed_at" value={`updated ${since} ago`} />
      </Details>
    </Root>
  );
};

export default Repo;
