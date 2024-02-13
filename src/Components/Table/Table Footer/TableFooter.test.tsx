import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import statement added
import TableFooter from './TableFooter';

describe('TableFooter', () => {
  test('renders TableFooter component', () => {
    render(<table><tfoot><tr><TableFooter>Footer</TableFooter></tr></tfoot></table>);
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  test('TableFooter changes style when disabled', () => {
    render(<table><tfoot><tr><TableFooter disabled>Disabled Footer</TableFooter></tr></tfoot></table>);
    const footer = screen.getByText('Disabled Footer');
    expect(footer).toHaveStyle('opacity: 0.5');
  });

  test('TableFooter changes color when color prop is provided', () => {
    render(<table><tfoot><tr><TableFooter color="blue">Footer</TableFooter></tr></tfoot></table>);
    const footer = screen.getByText('Footer');
    expect(footer).toHaveStyle('color: blue');
  });
});
