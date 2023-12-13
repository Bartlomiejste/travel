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
  gap: 20px; // dostosuj odstępy
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px; // dostosuj odstępy
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 24px; // dostosuj wielkość
  color: #000; // dostosuj kolor
  &:hover {
    color: #555; // kolor przy najechaniu
  }
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 14px; // dostosuj rozmiar czcionki
`;

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <IconWrapper>
        <SocialIcon icon={faPhone} />
        <ContactText>48 518 107 092</ContactText>
      </IconWrapper>
      <IconWrapper>
        <SocialIcon icon={faEnvelope} />
        <ContactText>matttravel2021@gmail.com</ContactText>
      </IconWrapper>
      <IconWrapper>
        <SocialIcon icon={faFacebookF} />
        <ContactText>Facebook</ContactText>
      </IconWrapper>
      <IconWrapper>
        <SocialIcon icon={faInstagram} />
        <ContactText>Instagram</ContactText>
      </IconWrapper>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
