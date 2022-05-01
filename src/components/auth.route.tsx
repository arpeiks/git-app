import Page from "./page";
import Loader from "./loader";
import { useRouter } from "next/router";
import { useAppSelector } from "app/hooks";
import { useGetUserQuery } from "app/services/user";

type Props = { children: React.ReactElement; showOn?: "public" | "private" };

const AuthLayout = ({ children, showOn = "private" }: Props) => {
  const router = useRouter();
  const token = useAppSelector((state) => state.auth.token);
  const { isError, isSuccess } = useGetUserQuery(null, { skip: !Boolean(token) });

  const isAllRoute = !showOn;
  const loggedIn = !!token && isSuccess;
  const isPublicRoute = showOn === "public";
  const isPrivateRoute = showOn === "private";

  const redirectToLogin = !loggedIn && isPrivateRoute;
  const redirectToProfile = loggedIn && isPublicRoute;
  const showComponent = isAllRoute || (isPublicRoute && !loggedIn) || (isPrivateRoute && loggedIn);

  // if is currently laoding then
  // isError => undefined

  // public unauth -> children
  // private auth -> children
  // all/undefined auth -> children
  // all/undefined unauth -> children

  // private unauth -> redirect login

  // public auth -> redirect dashboard

  if (isError) return <h1>ERROR</h1>;
  if (redirectToLogin) router.push("/login");
  if (redirectToProfile) router.push("/profile");
  if (showComponent) return children;

  return (
    <Page center>
      <Loader />
    </Page>
  );
};

export default AuthLayout;
