import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 20px;
  height: 300px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  
  &:hover {
   color: #33a06d;
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 44px;
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 18px;
`;

const SocialMedia = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:travel-max@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+48518107092';
  };

  return (
    <SocialMediaWrapper>
      <IconWrapper onClick={handlePhoneClick}>
        <SocialIcon icon={faPhone} />
        <ContactText>+48 518 107 092</ContactText>
      </IconWrapper>
      <IconWrapper onClick={handleEmailClick}>
        <SocialIcon icon={faEnvelope} />
        <ContactText>travel-max@gmail.com</ContactText>
      </IconWrapper>
      <IconWrapper as="a" href="https://www.facebook.com" target="_blank">
        <SocialIcon icon={faFacebookF} />
        <ContactText>Facebook</ContactText>
      </IconWrapper>
      <IconWrapper as="a" href="https://www.instagram.com" target="_blank">
        <SocialIcon icon={faInstagram} />
        <ContactText>Instagram</ContactText>
      </IconWrapper>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
