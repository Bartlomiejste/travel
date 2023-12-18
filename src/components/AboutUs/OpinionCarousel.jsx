import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Opinion, OpinionAuthor, OpinionContainer, OpinionText, OpinionTitle } from '../../ui/AboutUs/OpinionCarousel.styled';


const opinions = [
    { 
      text: "100% zaangażowania w organizację, profesjonalizm, a do tego niesamowici opiekunowie. Z nimi niczego nie zabraknie. Polecam!!!",
      author: "Aleksandra z Warszawy"
    },
    {
        text: "Nieziemskie widoki, fantastyczna atmosfera i bezproblemowy przebieg każdej wyprawy. To była podróż życia!",
        author: "Jakub z Krakowa"
      },
      {
        text: "Nie zapomnę chwil spędzonych z Travel-Max. Każdy szczegół był dopracowany, a obsługa na najwyższym poziomie.",
        author: "Martyna z Poznania"
      },
      {
        text: "Travel-Max przekroczył moje najśmielsze oczekiwania. Profesjonalna organizacja i pełne zaangażowanie.",
        author: "Tomasz z Gdańska"
      }      
  ];



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const OpinionCarousel = () => {
  return (
    <OpinionContainer>
        <OpinionTitle>Opinie naszych klientów</OpinionTitle>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {opinions.map((opinion, index) => (
        <Opinion key={index}>
          <OpinionText>{opinion.text}</OpinionText>
          <OpinionAuthor>{opinion.author}</OpinionAuthor>
        </Opinion>
      ))}
    </Carousel>
    </OpinionContainer>
  );
};

export default OpinionCarousel;
