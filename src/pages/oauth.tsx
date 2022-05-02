import React from "react";
import Loader from "@components/loader";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useAppDispatch } from "app/hooks";
import AuthLayout from "@components/auth.route";
import { useGetAccessTokenQuery } from "app/services/auth";
import { updateToken } from "app/features/auth/auth.slice";

const Auth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const code: string | undefined = router.query.code as string;
  const { data, fulfilledTimeStamp } = useGetAccessTokenQuery(code, { skip: !Boolean(code) });

  React.useEffect(() => {
    const token = data?.access_token;
    const isFulfilled = Boolean(fulfilledTimeStamp);

    if (token) {
      dispatch(updateToken(token));
      enqueueSnackbar("Authenication Successful", { persist: false, variant: "success" });
      router.push("/repos");
    }

    if (!token && isFulfilled) {
      closeSnackbar();
      enqueueSnackbar("An error occurred", { persist: true, variant: "error" });
      router.push("/login");
    }
  }, [data, fulfilledTimeStamp]);

  return <Loader />;
};

Auth.getLayout = (page: React.ReactElement) => <AuthLayout title="gitapp | oauth" children={page} showOn="public" />;

export default Auth;
