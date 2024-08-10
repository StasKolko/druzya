import { addDecorator } from '@storybook/react';
import { useEffect, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import {
  StyleDecorator,
  RouterDecorator,
} from '../../src/shared/config/storybook';
import i18n from '../../src/shared/config/i18n/i18nForStorybook';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'ru',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ru', right: 'RU', title: 'Русский' },
        { value: 'en', right: 'US', title: 'English' },
      ],
      showName: true,
    },
  },
  themeMode: {
    name: 'Theme mode',
    description: 'Global theme mode for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circle',
      items: [
        { value: 'dark', title: 'Dark', icon: 'circle' },
        { value: 'light', title: 'Light', icon: 'circlehollow' },
      ],
      showName: true,
    },
  },
  themeColor: {
    name: 'Theme color',
    description: 'Global theme color for components',
    defaultValue: 'blue',
    toolbar: {
      icon: 'beaker',
      items: [
        { value: 'blue', title: 'Blue' },
        { value: 'yellow', title: 'Yellow' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
});
addDecorator(StyleDecorator);
addDecorator((Story, context) => {
  const { themeMode, themeColor } = context.globals;

  return (
    <div className={`app ${themeMode} ${themeColor}`}>
      <Story />
    </div>
  );
});
addDecorator(RouterDecorator);
