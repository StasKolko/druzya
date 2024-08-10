import { cn } from "shared/lib/classNames";
import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";

type NotFoundPageProps = {
  className?: string;
};

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(cls["not-found-page"], [className])}>{t("404")}</div>
  );
};

export default NotFoundPage;
