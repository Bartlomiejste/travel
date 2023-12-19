import styled from 'styled-components';

export const TripDetailsContainer = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: space;
    padding: 50px 15px;
    background: #f5f5f5;
    width: 100%;
    height: 70vh;
`;

export const TripInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    width: 50%;
`;

export const TripTitle = styled.h2`
    margin: 20px 0;
    color: #333;
`;

export const TripImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const TripDescription = styled.p`
    margin: 20px 0;
    color: #666;
    line-height: 1.6;
`;

export const TripPrice = styled.div`
    margin: 20px 0;
    color: #2A9D8F;
    font-weight: bold;
`;

export const TripError = styled.div`
    margin-top: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 700px;
`; 