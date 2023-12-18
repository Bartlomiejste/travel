import React from 'react';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ContactText, IconWrapper, SocialIcon, SocialMediaWrapper } from '../../ui/SocialMedia/SocialMedia.styled';

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
