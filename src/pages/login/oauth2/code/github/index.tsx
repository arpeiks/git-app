import React from "react";
import { useRouter } from "next/router";
import { useGetAccessTokenQuery } from "app/services/auth";

const Auth = () => {
  const router = useRouter();
  const code: string | undefined = router.query.code as string;
  const { isError, isLoading, isUninitialized: isIdle } = useGetAccessTokenQuery(code, { skip: !Boolean(code) });

  if (isError) return <h1 style={{ color: "red" }}>ERROR</h1>;
  if (isIdle || isLoading) return <h1 style={{ color: "blue" }}>LOADING</h1>;

  return (
    <React.Fragment>
      <h1>SUCCESS</h1>
    </React.Fragment>
  );
};

export default Auth;
