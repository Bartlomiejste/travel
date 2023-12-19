import { styled } from "styled-components";
import { L_UP, M_DOWN, SL_DOWN, SL_UP, T_DOWN, T_UP } from "../../utils/viewport";

export const SliderContainer = styled.div`
  margin-top: 119px;
  position: relative;
  
  @media ${M_DOWN} {
    display: none;
  }

`;

export const Image = styled.img`
  width: 100vw;
  height: 1000px;

  @media ${T_DOWN} {
  width: 100vw;
  height: 500px;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 50px;
  height: 50px;
  z-index: 2;

  &:hover {
    opacity: 0.8;
  }

  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
`;

export const Text = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  font-size: 120px;

  @media ${T_DOWN} {
    font-size: 70px;
  }

  @media ${T_UP} {
    font-size: 70px;
  }

  @media ${L_UP} {
    font-size: 120px;
  }

  
`;