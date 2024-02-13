import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
   
  ],
  disabled: false,
};
