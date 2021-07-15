import themeConfig from '../config/theme';
import { createContext, FC, useEffect, useState } from 'react';

type ThemeOptions = 'Dark' | 'Light' | 'AMOLED';

interface ThemeState {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
}

const defaultState: ThemeState = {
  theme: 'Dark',
  setTheme: () => {},
};

export const ThemeContext = createContext(defaultState);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOptions>('Dark');

  useEffect(() => {
    const themeConfigElement = themeConfig[theme];

    for (const [key, value] of Object.entries(themeConfigElement)) {
      document.documentElement.style.setProperty(
        `--color-primary-${key}`,
        value as string
      );
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
