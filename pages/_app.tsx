import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@/context/ThemeContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
