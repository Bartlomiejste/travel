import { styled } from "styled-components";
import { L_DOWN, L_UP, M_UP, SL_UP, T_DOWN, T_UP } from "../../utils/viewport";

export const TravelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 70%;

  @media ${T_DOWN} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding-bottom: 30px;
  }

  @media ${T_UP} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding-bottom: 30px;
  }
  @media ${L_UP} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 70%;
  }

     
`;

export const TravelTitle = styled.h1`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
  font-size: 42px;

  @media ${L_DOWN} {
    padding: 30px;
    font-size: 24px;
  }
  @media ${T_DOWN} {
    font-size: 14px;
  }
`;

export const TravelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F8F1E9;
  align-items: center; 
  width: 100%;
  padding: 100px;

  @media ${T_DOWN} {
    padding: 0px;
  }
`;

export const TravelImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:hover .caption {
    opacity: 1; 
    background-color: #33a06d; 
  }

`;

export const TravelImage = styled.img`
  display: block;
  width: 100%;

`;

export const TravelCaption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 10px;
  opacity: 0.8;
  transition: opacity 0.3s ease;


  @media ${T_DOWN} {
    font-size: 10px;
  }

  @media ${M_UP} {
    font-size: 16px;
  }



`;