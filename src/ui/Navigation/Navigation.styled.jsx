import styled from "styled-components";
import { L_UP, M_DOWN, SL_UP, T_DOWN } from "../../utils/viewport";

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    text-transform: uppercase;
    font-size: 14px;
    top:0;
    left:0;
    z-index: 3;
    background-color: #fff;

    @media ${M_DOWN} {
        font-size: 6px;
  }
`;

export const NavigationName = styled.p`
    margin: 0 25px;
    cursor: pointer;
    color: ${props => props.isActive ? '#33a06d' : '#000000'};

    &:hover {
        color: #33a06d;
    }

    @media ${M_DOWN} {
    font-size: 7px;
    margin: 0px;
    text-align: center;
  }
    @media ${T_DOWN} {
    margin: 0 5px;
  }
    @media ${SL_UP} {
    margin: 0 25px;
  }
  


`;

export const NavigationImg = styled.img`
    width: 100px;
    margin: 0 150px;

    @media ${M_DOWN} {
    margin: 0 10px;
    width: 40px;
  }

    @media ${T_DOWN} {
    margin: 0 10px;
  }

  @media ${SL_UP} {
    margin: 0 100px;
  }

  @media ${L_UP} {
    margin: 0 150px;
  }
`