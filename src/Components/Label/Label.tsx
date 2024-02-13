import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';


const StyledLabel = styled.label<{ disabled: boolean, color?: string }>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${props => props.color || 'inherit'}; 

  /* Responsive styling */
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }

`;

export const Label: React.FC<LabelProps> = ({ text, disabled = false, color }) => {
  return (
    <StyledLabel disabled={disabled} color={color}>
      {text}
    </StyledLabel>
  );
};

export default Label;