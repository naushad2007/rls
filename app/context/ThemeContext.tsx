import { createContext, FC, useEffect } from "react";
import { useRecoilState } from "recoil";

import { themeAtom } from "@/atoms/theme";
import themeConfig from "@/config/theme";
import { ThemeOptions } from "@/types/theme";

interface ThemeState {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
}

const defaultState: ThemeState = {
  theme: "Dark",
  setTheme: () => {},
};

export const ThemeContext = createContext(defaultState);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useRecoilState(themeAtom);

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
