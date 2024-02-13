import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://unsplash.com/photos/a-horse-walking-down-a-dirt-road-La07GK4Cxr0',
  alt: 'Default Image',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://unsplash.com/photos/a-horse-walking-down-a-dirt-road-La07GK4Cxr0',
  alt: 'Disabled Image',
  disabled: true,
};
