import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('renders RadioButton component', () => {
    render(<RadioButton />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
  });

  test('RadioButton changes style when disabled', () => {
    render(<RadioButton disabled />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toHaveStyle('opacity: 0.5');
  });
});
