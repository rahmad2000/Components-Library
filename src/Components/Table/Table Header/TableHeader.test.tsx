import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
  test('renders TableHeader component', () => {
    render(<table><thead><tr><TableHeader>Header</TableHeader></tr></thead></table>);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  test('TableHeader changes style when disabled', () => {
    render(<table><thead><tr><TableHeader disabled>Disabled Header</TableHeader></tr></thead></table>);
    const header = screen.getByText('Disabled Header');
    expect(header).toHaveStyle('opacity: 0.5');
  });

  test('TableHeader changes color when color prop is provided', () => {
    render(<TableHeader color="blue">Header</TableHeader>);
    const header = screen.getByText('Header');
    expect(header).toHaveStyle('color: blue');
  });
});
