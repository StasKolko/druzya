import { useTranslation } from "react-i18next";

import { cn } from "shared/lib/classNames";
import { Button, ButtonVariants, ButtonSizes } from "shared/ui/Button";
import cls from "./LanguageSwitcher.module.scss";

type LanguageSwitcherProps = {
  variant: ButtonVariants;
  size: ButtonSizes;
  className?: string;
};

export const LanguageSwitcher = ({
  variant,
  size,
  className,
}: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={cn(cls.text, [className])}
      onClick={toggleLanguage}
      option="icon"
      size={size}
      variant={variant}
    >
      {t("язык")}
    </Button>
  );
};
