import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const photos = [
    { src: '../assets/travel/4.jpg', caption: 'Chwile we dwoje' },
    { src: '../assets/travel/5.jpg', caption: 'Chwile z rodziną' },
    { src: '../assets/travel/6.jpg', caption: 'Chwile na plaży' },
    { src: '../assets/travel/7.jpg', caption: 'Chwile sami' },
    { src: '../assets/travel/8.jpg', caption: 'Chwile w Afryce' },
    { src: '../assets/travel/9.jpg', caption: 'Chwile z Naturą' },
  ];


const TravelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 70%;
`;

const TravelTitle = styled.h1`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  padding: 50px;
  font-size: 42px;
`;

const TravelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F8F1E9;
  align-items: center; 
  width: 100%;
`;

const TravelImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:hover .caption {
    opacity: 1; 
    background-color: #33a06d; 
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 250px;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 10px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
`;



const Travel = () => {
    const [liftUp, setLiftUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          // Ustaw wartość scrolla, przy której napis ma "podskoczyć"
          const shouldLiftUp = window.scrollY > 620;
          setLiftUp(shouldLiftUp);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      window.addEventListener('scroll', () => {
        console.log(window.scrollY);
      });
    
  return (
<TravelWrapper>
<TravelTitle style={{ transform: liftUp ? 'translateY(-50px)' : 'translateY(0)' }}>
        Wyjedź z nami na maxa!
      </TravelTitle>
    <TravelContainer>
      {photos.map((photo, index) => (
        <TravelImageWrapper key={index}>
          <Image src={photo.src} alt={`${"Chwile natury nr " + index}`} />
          <Caption className="caption">{photo.caption}</Caption>
        </TravelImageWrapper>
      ))}
    </TravelContainer>
</TravelWrapper>
  );
};

export default Travel;