import { createContext } from "react";

export const themeColors = [
  "blue",
  "yellow",
  "zinc",
  "red",
  "rose",
  "orange",
  "green",
  "violet",
];
export type ThemeMode = "light" | "dark";
export type ThemeColor =
  | "blue"
  | "yellow"
  | "zinc"
  | "red"
  | "rose"
  | "orange"
  | "green"
  | "violet";

export type ThemeContextProps = {
  themeMode?: ThemeMode;
  setThemeMode?: (themeMode: ThemeMode) => void;
  themeColor?: ThemeColor;
  setThemeColor?: (themeColor: ThemeColor) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_MODE_KEY = "theme";
export const LOCAL_STORAGE_THEME_COLOR_KEY = "theme-color";
