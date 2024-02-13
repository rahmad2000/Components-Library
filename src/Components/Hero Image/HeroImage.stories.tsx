import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroImg from './HeroImage';
import { HeroImgProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImg',
  component: HeroImg,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<HeroImgProps> = (args) => <HeroImg {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://unsplash.com/photos/a-man-in-a-deadpool-costume-with-a-knife-in-his-hand-Erstoy-MuVA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
  alt: 'Default Hero Image',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://unsplash.com/photos/a-man-in-a-deadpool-costume-with-a-knife-in-his-hand-Erstoy-MuVA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
  alt: 'Disabled Hero Image',
  disabled: true,
};
