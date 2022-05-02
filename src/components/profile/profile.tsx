import Avatar from "./avatar";
import { styled } from "@utils/styled";
import PeopleIcon from "@components/icons/people";

type Props = { name: string; login: string; avatar: string; followers: number; following: number };

const Login = styled("span", {
  color: "#24292f",
  marginTop: "6px",
});

const Name = styled("h2", {
  margin: 0,
  fontWeight: 500,
  color: "#24292f",
  marginTop: "12px",
  fontFamily: "Barlow",
});

const Follow = styled("div", {
  margin: "2rem 0",
  "& span": { display: "flex", alignItems: "center", columnGap: "6px" },
});

const Root = styled("div", {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",

  "@md": { top: 16, position: "sticky" },
});

const Profile = ({ name, login, avatar, followers, following }: Props) => {
  return (
    <Root>
      <Avatar alt={name} image={avatar} />
      <Name>{name} Oluwasegun</Name>
      <Login> @{login}</Login>

      <Follow>
        <span>
          <PeopleIcon />
          <b>{followers}</b> Followers
        </span>
        <span>
          <PeopleIcon />
          <b>{following}</b>
          Following
        </span>
      </Follow>
    </Root>
  );
};

export default Profile;
