import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('renders Dropdown component', () => {
    render(<Dropdown options={[{ label: 'Option 1', value: '1' }]} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('Dropdown changes style when disabled', () => {
    render(<Dropdown options={[{ label: 'Option 1', value: '1' }]} disabled />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toHaveStyle('opacity: 0.5');
  });
});
