import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { persistor, store } from "app/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<h1 style={{ color: "green" }}>LOADING</h1>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
