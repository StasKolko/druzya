import { ComponentStory, ComponentMeta } from '@storybook/react';

import NotFoundPage from './NotFoundPage';

export default {
  title: 'pages/NotFound',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template:
  ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Page = Template.bind({});
