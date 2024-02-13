import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableRow from './TableRow';
import { TableRowProps } from './TableRow.types';

export default {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TableRowProps> = (args) => <table><tbody><TableRow {...args} /></tbody></table>;

export const Default = Template.bind({});
Default.args = {
  children: 'Row Content',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Row',
  disabled: true,
};
