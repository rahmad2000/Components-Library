import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TableHeaderProps> = (args) => <table><thead><tr><TableHeader {...args} /></tr></thead></table>;

export const Default = Template.bind({});
Default.args = {
  children: 'Column Header',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Column Header',
  disabled: true,
};
