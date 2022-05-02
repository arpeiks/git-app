import "../styles/globals.css";
import Page from "@components/page";
import { Provider } from "react-redux";
import BaseLoader from "@components/loader";
import { persistor, store } from "app/store";
import { SnackbarProvider } from "notistack";
import { AppPropsWithLayout } from "@typings/props";
import { PersistGate } from "redux-persist/integration/react";

const Loader = (
  <Page center>
    <BaseLoader />
  </Page>
);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={Loader} persistor={persistor}>
        <SnackbarProvider maxSnack={1} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          {getLayout(<Component {...pageProps} />)}
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
