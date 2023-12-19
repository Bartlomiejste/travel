import React from 'react'
import { FooterContainer, FooterCopyRight, FooterParagraph, ScrollImg, ScrollToTopButton } from '../../ui/Footer/Footer.styled';
const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
  return (
    <FooterContainer>
        <FooterCopyRight>2023 &copy; Travel-Max</FooterCopyRight>
        <FooterParagraph id="travel">Wycieczki</FooterParagraph>
        <FooterParagraph>Kontakt</FooterParagraph>
        <FooterParagraph>Koszyk</FooterParagraph>
        <FooterParagraph>Inormacje</FooterParagraph>
        <ScrollToTopButton onClick={scrollToTop}>
        <ScrollImg src='./assets/footer/arrow-up.png' alt='ArrowToUp'/>
      </ScrollToTopButton>
    </FooterContainer>
  )
}

export default Footer;