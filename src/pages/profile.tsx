import React from "react";
import AuthLayout from "@components/auth.route";

const Profile = () => {
  return <div>profile</div>;
};

Profile.getLayout = (page: React.ReactElement) => <AuthLayout children={page} showOn="private" />;

export default Profile;
