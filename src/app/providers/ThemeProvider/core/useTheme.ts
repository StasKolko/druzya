import { useContext } from "react";
import {
  LOCAL_STORAGE_THEME_MODE_KEY,
  ThemeMode,
  ThemeColor,
  ThemeContext,
  LOCAL_STORAGE_THEME_COLOR_KEY,
} from "./ThemeContext";

interface UseThemeResult {
  toggleThemeMode: () => void;
  themeMode: ThemeMode;
  toggleThemeColor: () => void;
  themeColor: ThemeColor;
}

export function useTheme(): UseThemeResult {
  const {
    themeMode, setThemeMode, themeColor, setThemeColor,
  } = useContext(ThemeContext);

  const toggleThemeMode = () => {
    const newThemeMode = themeMode === "dark" ? "light" : "dark";
    setThemeMode(newThemeMode);
    localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, newThemeMode);
  };

  const toggleThemeColor = () => {
    const newThemeColor = themeColor === "blue" ? "yellow" : "blue";
    setThemeColor(newThemeColor);
    localStorage.setItem(LOCAL_STORAGE_THEME_COLOR_KEY, newThemeColor);
  };

  return {
    themeMode,
    themeColor,
    toggleThemeMode,
    toggleThemeColor,
  };
}
