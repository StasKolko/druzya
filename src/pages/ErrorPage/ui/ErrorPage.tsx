import { cn } from "shared/lib/classNames";
// import { ReloadButton } from "features/ReloadButton";
import { useTranslation } from "react-i18next";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./ErrorPage.module.scss";

type ErrorPageProps = {
  className?: string;
};

const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();
  const { themeMode, themeColor } = useTheme();

  return (
    <div className={cn(cls["error-page"], [className, themeMode, themeColor])}>
      <h1>{t("Ой! Произошла ошибка!")}</h1>
      {/* <ReloadButton /> */}
    </div>
  );
};

export default ErrorPage;
