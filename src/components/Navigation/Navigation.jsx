import React, { useState } from 'react';
import { NavigationContainer, NavigationImg, NavigationName } from '../../ui/Navigation/Navigation.styled';
import logo from './assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import GalleryPopup from '../GalleryPopup/GalleryPopup';

import small_1 from '../GalleryPopup/gallery/small/small_1.png';
import small_2 from '../GalleryPopup/gallery/small/small_2.png';
import small_3 from '../GalleryPopup/gallery/small/small_3.png';
import small_4 from '../GalleryPopup/gallery/small/small_4.png';
import small_5 from '../GalleryPopup/gallery/small//small_5.png';
import small_6 from '../GalleryPopup/gallery/small/small_6.png';
import small_7 from '../GalleryPopup/gallery/small/small_7.png';
import small_8 from '../GalleryPopup/gallery/small/small_8.png';
import small_9 from '../GalleryPopup/gallery/small/small_9.png';

import large_1 from '../GalleryPopup/gallery/large/large_1.png';
import large_2 from '../GalleryPopup/gallery/large/large_2.png';
import large_3 from '../GalleryPopup/gallery/large/large_3.png';
import large_4 from '../GalleryPopup/gallery/large/large_4.png';
import large_5 from '../GalleryPopup/gallery/large/large_5.png';
import large_6 from '../GalleryPopup/gallery/large/large_6.png';
import large_7 from '../GalleryPopup/gallery/large/large_7.png';
import large_8 from '../GalleryPopup/gallery/large/large_8.png';
import large_9 from '../GalleryPopup/gallery/large/large_9.png';
import ContactPopup from '../ContactPopup/ContactPopup';
import { useNavigate } from 'react-router-dom';

const photos = [
  { small: small_1, large: large_1, alt: 'GalleryPhoto' },
  { small: small_2, large: large_2, alt: 'GalleryPhoto' },
  { small: small_3, large: large_3, alt: 'GalleryPhoto' },
  { small: small_4, large: large_4, alt: 'GalleryPhoto' },
  { small: small_5, large: large_5, alt: 'GalleryPhoto' },
  { small: small_6, large: large_6, alt: 'GalleryPhoto' },
  { small: small_7, large: large_7, alt: 'GalleryPhoto' },
  { small: small_8, large: large_8, alt: 'GalleryPhoto' },
  { small: small_9, large: large_9, alt: 'GalleryPhoto' },
];

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navigate=useNavigate();

  const linksBeforeLogo = {
    'Home': '/',
    'Wycieczki': 'travel',
    'O Nas': 'aboutUs'
  };
  
  const linksAfterLogo = {
    'Galeria': '',
    'Kontakt': '',
    'Koszyk': ''
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
    if (name === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/');
    } else if (name === 'Galeria') {
      setIsGalleryOpen(true);
    } else if (name === 'Kontakt') {
      setIsContactModalOpen(true);
    } else if (name === 'Koszyk') {
      navigate('/cart');
    }
  };

  return (
    <>
      <NavigationContainer>
        {Object.entries(linksBeforeLogo).map(([name, target]) => (
          <ScrollLink
            key={name}
            to={target}
            smooth={true}
            duration={500}
            offset={-100}
            onClick={() => handleLinkClick(name)}
          >
            <NavigationName isActive={activeLink === name}>
              {name}
            </NavigationName>
          </ScrollLink>
        ))}
        <NavigationImg src={logo} alt="Logo" />
        {Object.entries(linksAfterLogo).map(([name, target]) => (
          <NavigationName
            key={name}
            onClick={() => handleLinkClick(name)}
            isActive={activeLink === name}
          >
            {name}
          </NavigationName>
        ))}
      </NavigationContainer>
      {isGalleryOpen && (
        <GalleryPopup
          isOpen={isGalleryOpen}
          photos={photos}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
      {isContactModalOpen && (
        <ContactPopup
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;




