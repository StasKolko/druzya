import { Story } from '@storybook/react';
import { ThemeMode, ThemeColor } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (
  themeMode: ThemeMode,
  themeColor: ThemeColor,
) => (StoryComponent: Story) => (
  <div className={`app ${themeMode} ${themeColor}`}>
    <StoryComponent />
  </div>
);
