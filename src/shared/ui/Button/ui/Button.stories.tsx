import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useTranslation } from 'react-i18next';
import { Button, ButtonProps } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template:
  ComponentStory<typeof Button> = (args) => {
    const { t } = useTranslation();

    return <Button {...args}>{t('кнопка')}</Button>;
  };

export const Primary = Template.bind({});
Primary.args = {
  option: 'btn',
  variant: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  option: 'btn',
  variant: 'secondary',
  size: 'md',
};

export const Outline = Template.bind({});
Outline.args = {
  option: 'btn',
  variant: 'outline',
  size: 'md',
};

export const Ghost = Template.bind({});
Ghost.args = {
  option: 'btn',
  variant: 'ghost',
  size: 'md',
};

export const Destructive = Template.bind({});
Destructive.args = {
  option: 'btn',
  variant: 'destructive',
  size: 'md',
};

export const Successful = Template.bind({});
Successful.args = {
  option: 'btn',
  variant: 'successful',
  size: 'md',
};
