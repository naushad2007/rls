import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@/context/ThemeContext';
import ModalContainer from '@/modals/ModalContainer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Component {...pageProps} />

        <ModalContainer />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
