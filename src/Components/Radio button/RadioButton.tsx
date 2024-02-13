import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input.attrs({ type: 'radio' })<{ disabled: boolean }>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
`;

const RadioButton: React.FC<RadioButtonProps> = ({ disabled = false, ...props }) => {
  return (
    <StyledRadioButton disabled={disabled} {...props} />
  );
};

export default RadioButton;
