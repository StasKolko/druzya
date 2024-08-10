import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button, ButtonSizes, ButtonVariants } from "shared/ui/Button";

import { useTheme } from "app/providers/ThemeProvider";

type ThemeModeSwitcherProps = {
  variant: ButtonVariants;
  size: ButtonSizes;
  className?: string;
};

export const ThemeModeSwitcher = ({
  variant,
  size,
  className,
}: ThemeModeSwitcherProps) => {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <Button
      className={className}
      onClick={toggleThemeMode}
      option="icon"
      size={size}
      variant={variant}
    >
      {themeMode === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
