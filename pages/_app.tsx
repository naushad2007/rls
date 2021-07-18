import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@/context/ThemeContext';
import ModalContainer from '@/modals/ModalContainer';

const App = ({ Component, pageProps }: AppProps) => {
  const name = 'Reactive Resume';
  const description = 'A free and open-source resume builder';

  return (
    <RecoilRoot>
      <Head>
        <title>
          {name} - {description}
        </title>
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />

        <ModalContainer />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
