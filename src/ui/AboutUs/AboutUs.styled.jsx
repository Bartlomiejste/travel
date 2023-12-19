import { styled } from "styled-components"
import { L_DOWN, L_UP, M_DOWN, M_UP, T_DOWN, T_UP } from "../../utils/viewport"

export const AboutUsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 0;

    @media ${M_DOWN} {
    padding: 50px;
  }
`
export const AboutUsImg = styled.img`
    width: 100%;
`
export const AboutUsImgContainer = styled.div`
    width: 50%;

    @media ${M_DOWN} {
    display: none;
  }

    @media ${T_DOWN} {
    display: none;
  }
  
    @media ${L_DOWN} {
    display: none;
  }
`
export const AboutUsInfo = styled.div`
    padding: 0 100px 0 50px;
    width: 50%;


  @media ${L_DOWN} {
    width: 100%;
    font-size: 16px;
  }

  @media ${T_DOWN} {
    width: 100%;
    font-size: 14px;
  }

  @media ${M_DOWN} {
    font-size: 10px;
    padding: 0;
    width: 100%;
  }

`
export const AboutUsTitle = styled.h2`
    text-transform: uppercase;
`
export const AboutUsParagraph = styled.p`
    padding-top: 10px;
    text-transform: uppercase;

`
export const AboutUsText = styled.p`
    padding-top: 50px;

    @media ${M_DOWN} {
    padding-top: 20px;
  }
`