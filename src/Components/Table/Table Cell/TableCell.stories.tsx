import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableCell from './TableCell';
import { TableCellProps } from './TableCell.types';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TableCellProps> = (args) => <table><tbody><tr><TableCell {...args} /></tr></tbody></table>;

export const Default = Template.bind({});
Default.args = {
  children: 'Cell Content',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Cell',
  disabled: true,
};
