import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'widgets/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template:
  ComponentStory<typeof Header> = (args: {}) => <Header {...args} />;

export const Main = Template.bind({});
