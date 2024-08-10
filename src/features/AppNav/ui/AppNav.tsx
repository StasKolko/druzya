import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface AppNavProps {
  className?: string;
}

export const AppNav = ({ className }: AppNavProps) => {
  const { t } = useTranslation();

  return (
    <ul className={className}>
      <li>
        <Link to="/">{t('Главная')}</Link>
      </li>
      <li>
        <Link to="/about">{t('О нас')}</Link>
      </li>
    </ul>
  );
};
