import React, { useState } from 'react';
import { NavigationContainer, NavigationImg, NavigationName } from '../../ui/Navigation/Navigation.styled';
import logo from './assets/logo.png'

const Navigation = () => {
  
  const [activeLink, setActiveLink] = useState('Home');

  const linksBeforeImage = ['Home', 'Wycieczki', 'O Nas'];
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
      <NavigationImg src={logo} />
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
