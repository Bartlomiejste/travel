import React, { useState } from 'react';
import { NavigationContainer, NavigationImg, NavigationName } from '../../ui/Navigation/Navigation.styled';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const linksBeforeImage = ['Home', 'O Nas', 'Wycieczki'];
  const linksAfterImage = ['Galeria', 'Kontakt', 'Koszyk'];

  return (
    <NavigationContainer>
      {linksBeforeImage.map((name) => (
        <NavigationName
          key={name}
          onClick={() => setActiveLink(name)}
          isActive={activeLink === name}
        >
          {name}
        </NavigationName>
      ))}
      <NavigationImg src='./logo.png' />
      {linksAfterImage.map((name) => (
        <NavigationName
          key={name}
          onClick={() => setActiveLink(name)}
          isActive={activeLink === name}
        >
          {name}
        </NavigationName>
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
