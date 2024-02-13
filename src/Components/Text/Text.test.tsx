import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  test('renders Text component', () => {
    render(<Text content="Test Text" />);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  test('Text changes style when disabled', () => {
    render(<Text content="Disabled Text" disabled />);
    const text = screen.getByText('Disabled Text');
    expect(text).toHaveStyle('opacity: 0.5');
  });
});

