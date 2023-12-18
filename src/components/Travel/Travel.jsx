import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TravelCaption, TravelContainer, TravelImage, TravelImageWrapper, TravelTitle, TravelWrapper } from '../../ui/Travel/Travel.styled';

const photos = [
    { src: '../assets/travel/4.jpg', caption: 'Chwile we dwoje' },
    { src: '../assets/travel/5.jpg', caption: 'Chwile z rodziną' },
    { src: '../assets/travel/6.jpg', caption: 'Chwile na plaży' },
    { src: '../assets/travel/7.jpg', caption: 'Chwile w samotności' },
    { src: '../assets/travel/8.jpg', caption: 'Chwile w Afryce' },
    { src: '../assets/travel/9.jpg', caption: 'Chwile z Naturą' },
  ];

const Travel = () => {
  AOS.init();
    
  return (
<TravelWrapper>
      <TravelTitle data-aos="fade-up" data-aos-offset="400"> Wyjedź z nami na maxa!</TravelTitle>
    <TravelContainer>
      {photos.map((photo, index) => (
        <TravelImageWrapper key={index}>
          <TravelImage src={photo.src} alt={`${"Chwile natury nr " + index}`} />
          <TravelCaption className="caption">{photo.caption}</TravelCaption>
        </TravelImageWrapper>
      ))}
    </TravelContainer>
</TravelWrapper>
  );
};

export default Travel;