import React, { useState, useEffect } from 'react';
import Right from '../../assets/header/right.png'
import Left from '../../assets/header/left.png'
import { Arrow, Image, SliderContainer, Text } from '../../ui/Header/Header.styled';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
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


