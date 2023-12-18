import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TravelCaption, TravelContainer, TravelImage, TravelImageWrapper, TravelTitle, TravelWrapper } from '../../ui/Travel/Travel.styled';

const photos = [
    { src: '../assets/travel/4.png', caption: 'Chwile we dwoje' },
    { src: '../assets/travel/5.png', caption: 'Chwile z rodziną' },
    { src: '../assets/travel/6.png', caption: 'Chwile na plaży' },
    { src: '../assets/travel/7.png', caption: 'Chwile w samotności' },
    { src: '../assets/travel/8.png', caption: 'Chwile w Afryce' },
    { src: '../assets/travel/9.png', caption: 'Chwile z Naturą' },
  ];

const Travel = () => {
  AOS.init();
    
  return (
<TravelWrapper id="travel">
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