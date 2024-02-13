import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from './TableRow';

describe('TableRow', () => {
  test('renders TableRow component', () => {
    render(<table><tbody><TableRow>Row Content</TableRow></tbody></table>);
    expect(screen.getByText('Row Content')).toBeInTheDocument();
  });

  test('TableRow changes style when disabled', () => {
    render(<table><tbody><TableRow disabled>Disabled Row</TableRow></tbody></table>);
    const row = screen.getByText('Disabled Row');
    expect(row).toHaveStyle('opacity: 0.5');
  });

  test('TableRow changes color when color prop is provided', () => {
    render(<table><tbody><TableRow color="green">Colored Row</TableRow></tbody></table>);
    const row = screen.getByText('Colored Row');
    expect(row).toHaveStyle('color: green');
  });
});
