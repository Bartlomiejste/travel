import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { TripDescription, TripDetailsContainer, TripError, TripImg, TripInformation, TripPrice, TripTitle } from '../../ui/TravelCart/TravelCart.styled';
import travel4 from "../../assets/travel/4.png"
import travel5 from "../../assets/travel/5.png"
import travel6 from "../../assets/travel/6.png"
import travel7 from "../../assets/travel/7.png"
import travel8 from "../../assets/travel/8.png"
import travel9 from "../../assets/travel/9.png"

const tripData = [
    {
      id: 0,
      title: "Romantyczny wyjazd do Wenecji",
      image: travel4,
      description: "Wenecja, miasto miłości, czeka na pary szukające romantycznych chwil we dwoje. Ciesz się spokojnymi rejsami gondolą, zachwycającymi zachodami słońca i ekskluzywnymi kolacjami przy świecach w najlepszych włoskich restauracjach.",
      price: "2000 PLN"
    },
    {
        id: 1,
        title: "Rodzinny relaks na plażach Algarve",
        image: travel5,
        description: "Odkryjcie razem malownicze wybrzeże Algarve, gdzie złote plaże spotykają się z lazurowym oceanem. Cieszcie się rodziną zabawą w słonecznej Portugalii, budową zamków z piasku, surfowaniem na falach i odkrywaniem kolorowych miasteczek. Każdy dzień to nowa przygoda i szansa, aby stworzyć wspomnienia, które pozostaną z Wami na zawsze.",
        price: "2500 PLN"
      },
      
    {
      id: 2,
      title: "Relaks na rajskich plażach Bali",
      image: travel6,
      description: "Doświadcz błogiego spokoju na złocistych plażach Bali. Poczuj ciepły piasek pod stopami, ochłodź się w krystalicznie czystych wodach i zrelaksuj podczas masażu z widokiem na ocean.",
      price: "4000 PLN"
    },
    {
      id: 3,
      title: "Samotna eskapada do Norwegii",
      image: travel7,
      description: "Norwegia to idealne miejsce dla poszukujących samotności i spokoju. Odkrywaj malownicze fiordy, zdobywaj ośnieżone szczyty i oddychaj najczystszym powietrzem podczas trekkingów po dzikiej skandynawskiej przyrodzie.",
      price: "3000 PLN"
    },
    {
      id: 4,
      title: "Afrykańska przygoda safari",
      image: travel8,
      description: "Poczuj dreszcz emocji na safari w Serengeti. Obserwuj dzikie zwierzęta w ich naturalnym środowisku, odkryj bogactwo afrykańskiej kultury i poznaj niezwykłą gościnność mieszkańców.",
      price: "5000 PLN"
    },
    {
      id: 5,
      title: "Spotkanie z naturą w Amazonii",
      image: travel9,
      description: "Amazonia, największy tropikalny las deszczowy świata, oferuje niezapomniane chwile blisko natury. Zanurz się w gęstej zieleni, słuchaj egzotycznych dźwięków dzikiej przyrody i doświadcz przygody życia na łodziach rzecznych.",
      price: "7000 PLN"
    }
  ];
  

const TripDetailsPage = () => {
  const { tripId } = useParams(); 
  const trip = tripData.find(t => t.id === parseInt(tripId));

  if (!trip) {
    return  (
        <Layout>
            <TripError>Wycieczka nie została znaleziona.</TripError>
        </Layout>
    )
  }

  return (
    <Layout>
      <TripDetailsContainer>
        <TripImg src={trip.image} alt={trip.title} />
        <TripInformation>
        <TripTitle>{trip.title}</TripTitle>
        <TripDescription>{trip.description}</TripDescription>
        <TripPrice>Cena za osobę: {trip.price}</TripPrice>
        </TripInformation>
      </TripDetailsContainer>
    </Layout>
  );
};

export default TripDetailsPage;
