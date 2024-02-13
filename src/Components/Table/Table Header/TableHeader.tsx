import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.th<{ disabled: boolean, color?: string }>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.color || 'inherit'}; // Dynamic color

`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled = false, color }) => {
  return (
    <StyledTableHeader disabled={disabled} color={color}>
      {children}
    </StyledTableHeader>
  );
};

export default TableHeader;


