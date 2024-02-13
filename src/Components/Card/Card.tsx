import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled: boolean, color?: string }>`
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  border-radius: 5px;
  background-color: ${props => props.color || '#fff'};
  color: ${props => (props.color ? '#fff' : '#000')}; 
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const Card: React.FC<CardProps> = ({ content, disabled = false, color }) => {
  return (
    <StyledCard disabled={disabled} color={color}>
      {content}
    </StyledCard>
  );
};

export default Card;
