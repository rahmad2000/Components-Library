import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card', () => {
  test('renders Card component with content', () => {
    render(<Card content="Test Card" />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  test('Card changes style when disabled', () => {
    render(<Card content="Disabled Card" disabled />);
    const card = screen.getByText('Disabled Card');
    expect(card).toHaveStyle('opacity: 0.5');
  });

  test('Card changes background color', () => {
    const testColor = '#007bff';
    render(<Card content="Colored Card" color={testColor} />);
    const card = screen.getByText('Colored Card');
    expect(card).toHaveStyle(`background-color: ${testColor}`);
  });
});
