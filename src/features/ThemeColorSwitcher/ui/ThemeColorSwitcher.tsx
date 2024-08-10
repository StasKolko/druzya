import { Button, ButtonSizes, ButtonVariants } from "shared/ui/Button";

import { useTheme } from "app/providers/ThemeProvider";

type ThemeColorSwitcherProps = {
  variant: ButtonVariants;
  size: ButtonSizes;
  className?: string;
};

export const ThemeColorSwitcher = ({
  variant,
  size,
  className,
}: ThemeColorSwitcherProps) => {
  const { toggleThemeColor } = useTheme();

  return (
    <Button
      className={className}
      onClick={toggleThemeColor}
      option="icon"
      size={size}
      variant={variant}
    >
      <span
        style={{
          background: "var(--primary)",
          width: "60%",
          height: "60%",
          borderRadius: "var(--radius)",
        }}
      />
    </Button>
  );
};
