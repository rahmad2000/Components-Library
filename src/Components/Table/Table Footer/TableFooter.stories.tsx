import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableFooter from './TableFooter';
import { TableFooterProps } from './TableFooter.types';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TableFooterProps> = (args) => <table><tfoot><tr><TableFooter {...args} /></tr></tfoot></table>;

export const Default = Template.bind({});
Default.args = {
  children: 'Footer Content',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Footer Content',
  disabled: true,
};
