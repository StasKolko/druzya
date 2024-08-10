import cls from "./Header.module.scss";

import { ThemeModeSwitcher } from "features/ThemeModeSwitcher";
import { ThemeColorSwitcher } from "features/ThemeColorSwitcher";
import { LanguageSwitcher } from "features/LanguageSwitcher/ui/LanguageSwitcher";
import { AppNav } from "features/AppNav";

export const Header = () => {
  const actionStyle = "outline";
  const actionSize = "sm";

  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <nav className={cls.navigation}>
          <AppNav className={cls.navigation__links} />
        </nav>

        <div className={cls.actions}>
          <ThemeColorSwitcher variant={actionStyle} size={actionSize} />
          <ThemeModeSwitcher variant={actionStyle} size={actionSize} />
          <LanguageSwitcher variant={actionStyle} size={actionSize} />
        </div>
      </div>
    </header>
  );
};
