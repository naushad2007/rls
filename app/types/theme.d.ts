export type ThemeOptions = "Dark" | "Light" | "AMOLED";

export interface Theme {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}

export interface ThemeConfig {
  Light: Theme;
  Dark: Theme;
  AMOLED: Theme;
}
