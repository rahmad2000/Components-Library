import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<{ disabled: boolean, color?: string }>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.color || 'inherit'}; // Dynamic color

`;

export const TableRow: React.FC<TableRowProps> = ({ children, disabled = false, color }) => {
  return (
    <StyledTableRow disabled={disabled} color={color}>
      {children}
    </StyledTableRow>
  );
};

export default TableRow;
