import { styled } from "styled-components"
import { M_DOWN } from "../../utils/viewport"

export const MapViewContainer = styled.div`
  width: 100%;
  display: flex;  
  flex-direction: column;
  margin: -4px;
  align-items: center;
  background-color: #F8F1E9;
  padding: 70px;

  @media ${M_DOWN} {
    padding-top: 30px;
  }
  
`
export const MapViewTitle = styled.h2`
  text-transform: uppercase;
  padding: 30px;
  width: 100%;
  text-align: center;

  @media ${M_DOWN} {
    padding-bottom: 30px;
    font-size: 10px;
  }
  
`

export const MarkerImg = styled.img`
  width:40px; 
  height:40px;
`

