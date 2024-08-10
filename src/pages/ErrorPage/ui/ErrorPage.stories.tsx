import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorPage from './ErrorPage';

export default {
  title: 'pages/Error',
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template:
  ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Page = Template.bind({});
