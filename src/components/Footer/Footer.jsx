import React from 'react'
import { FooterContainer, FooterCopyRight, FooterParagraph, ScrollImg, ScrollToTopButton } from '../../ui/Footer/Footer.styled';
import Img from '../../assets/footer/arrow-up.png'

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
        <ScrollImg src={Img} alt='ArrowToUp'/>
      </ScrollToTopButton>
    </FooterContainer>
  )
}

export default Footer;