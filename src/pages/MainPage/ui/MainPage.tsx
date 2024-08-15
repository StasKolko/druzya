import { Counter } from 'entities/Counter';
import { ErrorButton } from 'features/ErrorButton';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная')}
      <Counter />
      <ErrorButton />
    </div>
  );
};

export default MainPage;
