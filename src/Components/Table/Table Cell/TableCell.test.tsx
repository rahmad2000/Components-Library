import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableCell from './TableCell';

describe('TableCell', () => {
  test('renders TableCell component', () => {
    render(<table><tbody><tr><TableCell>Cell</TableCell></tr></tbody></table>);
    expect(screen.getByText('Cell')).toBeInTheDocument();
  });

  test('TableCell changes style when disabled', () => {
    render(<table><tbody><tr><TableCell disabled>Disabled Cell</TableCell></tr></tbody></table>);
    const cell = screen.getByText('Disabled Cell');
    expect(cell).toHaveStyle('opacity: 0.5');
  });

  test('TableCell changes color when color prop is provided', () => {
    render(<table><tbody><tr><TableCell color="blue">Colored Cell</TableCell></tr></tbody></table>);
    const cell = screen.getByText('Colored Cell');
    expect(cell).toHaveStyle('color: blue');
  });
});
