import { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_MODE_KEY,
  ThemeMode,
  ThemeContext,
  LOCAL_STORAGE_THEME_COLOR_KEY,
  ThemeColor,
} from "./ThemeContext";

const defaultThemeMode =
  (localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY) as ThemeMode) || "dark";

const defaultThemeColor =
  (localStorage.getItem(LOCAL_STORAGE_THEME_COLOR_KEY) as ThemeColor) || "blue";

const ThemeProvider: FC = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(defaultThemeMode);
  const [themeColor, setThemeColor] = useState<ThemeColor>(defaultThemeColor);

  const defaultProps = useMemo(
    () => ({
      themeMode,
      setThemeMode,
      themeColor,
      setThemeColor,
    }),
    [themeMode, themeColor],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
