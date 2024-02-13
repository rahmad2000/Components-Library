import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled: boolean, color?: string }>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.color || 'inherit'};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false, color, onChange }) => {
  return (
    <StyledSelect disabled={disabled} color={color} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
