import React, { useState, useEffect } from 'react';
import Right from './assets/right.png';
import Left from './assets/left.png';
import { Arrow, Image, SliderContainer, Text } from '../../ui/Header/Header.styled';

const images = [
    '../assets/images/1.png',
    '../assets/images/2.png',
    '../assets/images/3.png',
    '../assets/images/4.png',
    '../assets/images/5.png',
    '../assets/images/6.png',
  ];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const goToNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <SliderContainer>
      <Arrow src={Left} alt="Left" onClick={goToPrevious} direction="left" />
      <Image src={images[activeIndex]} alt="Travel"/>
      <Text>Travel-Max</Text>
      <Arrow src={Right} alt="Right" onClick={goToNext} direction="right" />
    </SliderContainer>
  );
};

export default Header;


