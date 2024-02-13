import React from 'react';
import { StoryFn } from '@storybook/react'; 
import { Meta } from '@storybook/react';
import { LabelProps } from './Label.types';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Label',
  disabled: false,
  color: '#007bff', 
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
  color: '#ccc', 
};
