import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Default Card',
  disabled: false,
};

export const Colored = Template.bind({});
Colored.args = {
  content: 'Colored Card',
  color: '#007bff',
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled Card',
  disabled: true,
};
