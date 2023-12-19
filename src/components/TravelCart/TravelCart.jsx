import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import styled from 'styled-components';

const TripDetailsContainer = styled.div`
    margin-top: 150px;

`;
const TripTitle = styled.h2`
    margin-top: 150px;

`;
const TripImg = styled.img`
    margin-top: 150px;

`;
const TripDecription = styled.div`
    margin-top: 150px;

`;
const TripPrice = styled.div`
    margin-top: 150px;

`;


export const tripData = [
    {
      id: 0,
      title: "Wycieczka do Paryża",
      image: "path_to_image.jpg",
      description: "Opis wycieczki do Paryża...",
      price: "2500 PLN"
    },
  ];



const TripDetailsPage = () => {
  const { tripId } = useParams(); 
  const trip = tripData.find(t => t.id === parseInt(tripId));

  if (!trip) {
    return <div>Wycieczka nie została znaleziona.</div>;
  }

  return (
    <Layout>
      <TripDetailsContainer>
        <TripTitle>{trip.title}</TripTitle>
        <TripImg src={trip.image} alt={trip.title} />
        <TripDecription>{trip.description}</TripDecription>
        <TripPrice>Cena za osobę: {trip.price}</TripPrice>
      </TripDetailsContainer>
    </Layout>
  );
};

export default TripDetailsPage;
