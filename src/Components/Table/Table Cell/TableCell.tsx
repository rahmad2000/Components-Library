import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{ disabled: boolean, color?: string }>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.color || 'inherit'}; // Dynamic color
`;

export const TableCell: React.FC<TableCellProps> = ({ children, disabled = false, color }) => {
  return (
    <StyledTableCell disabled={disabled} color={color}>
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
