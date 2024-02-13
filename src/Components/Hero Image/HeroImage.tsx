import React from 'react';
import styled from 'styled-components';
import { HeroImgProps } from './HeroImage.types';


const StyledHeroImg = styled.img<{ disabled: boolean }>`
  width: 100%; // Responsive full width
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const HeroImg: React.FC<HeroImgProps> = ({ src, alt, disabled = false }) => {
  return (
    <StyledHeroImg src={src} alt={alt || 'Hero Image'} disabled={disabled} />
  );
};

export default HeroImg;
