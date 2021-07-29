import "tailwindcss/tailwind.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { RecoilRoot } from "recoil";

import { AuthProvider } from "@/context/AuthContent";
import { ThemeProvider } from "@/context/ThemeContext";
import ModalContainer from "@/modals/ModalContainer";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const name = "Reactive Resume";
  const description = "A free and open-source resume builder";

  return (
    <RecoilRoot>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <title>
          {name} - {description}
        </title>
      </Head>

      <ThemeProvider>
        <AuthProvider>
          <Component {...pageProps} />

          <ModalContainer />
        </AuthProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
