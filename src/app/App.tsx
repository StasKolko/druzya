import './styles/index.scss';

import 'shared/config/i18n/i18n';

import { cn } from 'shared/lib/classNames';
import { Header } from 'widgets/Header';
import { Suspense } from 'react';
import { AppRouter } from './providers/AppRouter';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { themeMode, themeColor } = useTheme();
  return (
    <div className={cn('app', {}, [themeMode, themeColor])}>
      <Suspense fallback="">
        <Header />
        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
