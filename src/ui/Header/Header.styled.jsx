import { styled } from "styled-components";

export const SliderContainer = styled.div`
  margin-top: 119px;
  position: relative;
`;

export const Image = styled.img`
  width: 100vw;
  height: 1000px;
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
`;