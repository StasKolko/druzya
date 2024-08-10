import { ErrorButton } from 'features/ErrorButton';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная')}
      <ErrorButton />
    </div>
  );
};

export default MainPage;
