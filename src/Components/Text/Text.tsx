import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.span<{ disabled: boolean, color?: string }>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'inherit'};
  color: ${props => props.color || 'inherit'};
 
`;

const Text: React.FC<TextProps> = ({ content, disabled = false, color }) => {
  return (
    <StyledText disabled={disabled} color={color}>
      {content}
    </StyledText>
  );
};

export default Text; 
