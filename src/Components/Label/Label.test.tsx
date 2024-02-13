import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  test('renders Label component', () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('Label changes style when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const label = screen.getByText('Disabled Label');
    expect(label).toHaveStyle('opacity: 0.5');
  });
});
