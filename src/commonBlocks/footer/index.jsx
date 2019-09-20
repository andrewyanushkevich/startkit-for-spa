import React from 'react';
import {
  StyledFooterWrapper,
  StyledLogoTitle,
  StyledCompanyName,
} from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooterWrapper>
      <StyledLogoTitle>LOGO</StyledLogoTitle>
      <StyledCompanyName>© {currentYear} IsoVision Inc.</StyledCompanyName>
    </StyledFooterWrapper>
  );
};

export default Footer;
