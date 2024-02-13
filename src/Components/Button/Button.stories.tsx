import React from 'react';
import { StoryFn } from '@storybook/react';
import { Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<React.ButtonHTMLAttributes<HTMLButtonElement> & { backgroundColor?: string }> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
  backgroundColor: '#007bff',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
  backgroundColor: '#ccc',
};
