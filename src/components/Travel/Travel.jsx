import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TravelCaption, TravelContainer, TravelImage, TravelImageWrapper, TravelTitle, TravelWrapper } from '../../ui/Travel/Travel.styled';
import { useNavigate } from 'react-router-dom';
import travel4 from "../../assets/travel/4.png"
import travel5 from "../../assets/travel/5.png"
import travel6 from "../../assets/travel/6.png"
import travel7 from "../../assets/travel/7.png"
import travel8 from "../../assets/travel/8.png"
import travel9 from "../../assets/travel/9.png"

const photos = [
    { src: travel4, caption: 'Chwile we dwoje' },
    { src: travel5, caption: 'Chwile z rodziną' },
    { src: travel6, caption: 'Chwile na plaży' },
    { src: travel7, caption: 'Chwile w samotności' },
    { src: travel8, caption: 'Chwile w Afryce' },
    { src: travel9, caption: 'Chwile z Naturą' },
  ];

const Travel = () => {
  AOS.init();

  AOS.init();
  const navigate = useNavigate(); 

  const goToTripDetails = (tripId) => {
    navigate(`/trip/${tripId}`);
  };
    
  return (
<TravelWrapper id="travel">
      <TravelTitle data-aos="fade-up" data-aos-offset="400"> Wyjedź z nami na maxa!</TravelTitle>
    <TravelContainer>
      {photos.map((photo, index) => (
        <TravelImageWrapper key={index} onClick={() => goToTripDetails(index)}>
          <TravelImage src={photo.src} alt={`${"Chwile natury nr " + index}`} />
          <TravelCaption className="caption">{photo.caption}</TravelCaption>
        </TravelImageWrapper>
      ))}
    </TravelContainer>
</TravelWrapper>
  );
};

export default Travel;