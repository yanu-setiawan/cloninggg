import "styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

import { Mulish } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "redux/store";
import { ToastContainer, Flip } from "react-toastify";

const mulish = Mulish({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-mulish",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${mulish.variable}`}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            transition={Flip}
            theme="colored"
          />
        </PersistGate>
      </Provider>
    </div>
  );
}
