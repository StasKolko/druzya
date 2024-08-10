import { cn } from "shared/lib/classNames";
import cls from "./Loader.module.scss";

type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => (
  <span className={cn(cls.loader, [className])} />
);
