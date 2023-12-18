import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurTeam from './assets/OurTeam.jpg'
import aboutUsContent from './aboutUsContent.json'
import OpinionCarousel from './OpinionCarousel';
import { AboutUsContainer, AboutUsImg, AboutUsImgContainer, AboutUsInfo, AboutUsParagraph, AboutUsText, AboutUsTitle } from '../../ui/AboutUs/AboutUs.styled';


const AboutUs = () => {
    AOS.init();

  return (
    <AboutUsContainer>
        <AboutUsImgContainer>
        <AboutUsImg data-aos="zoom-in-right" data-aos-once="true" data-aos-offset="500" src={OurTeam} alt="Team"/>
        </AboutUsImgContainer>
        <AboutUsInfo>
            <AboutUsTitle>{aboutUsContent.title}</AboutUsTitle>
            <AboutUsParagraph>{aboutUsContent.subtitle}</AboutUsParagraph>
            {aboutUsContent.paragraphs.map((paragraph, index) => (
                <AboutUsText key={index}>{paragraph}</AboutUsText>
                ))}
            <OpinionCarousel/>
        </AboutUsInfo>
    </AboutUsContainer>
  )
}

export default AboutUs



