import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text  from './Text'; 
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Default Text',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled Text',
  disabled: true,
};
