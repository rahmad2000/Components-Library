import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<{ disabled: boolean, color?: string }>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.color || 'inherit'}; // Use color prop

`;

export const TableFooter: React.FC<TableFooterProps> = ({ children, disabled = false, color }) => {
  return (
    <StyledTableFooter disabled={disabled} color={color}>
      {children}
    </StyledTableFooter>
  );
};

export default TableFooter;
