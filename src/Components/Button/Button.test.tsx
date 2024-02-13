import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  const { getByText } = render(<Button>Test Button</Button>); 
  const buttonElement = getByText('Test Button');
  expect(buttonElement).toBeInTheDocument();
});

test('Button changes background color when disabled', () => {
  const { getByText } = render(<Button disabled>Disabled Button</Button>); 
  const buttonElement = getByText('Disabled Button');
  expect(buttonElement).toHaveStyle('background-color: #ccc');
});
