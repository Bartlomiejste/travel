import { styled } from 'styled-components'
import { M_DOWN } from '../../utils/viewport';


export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 40px;
    font-size: 12px;
    justify-content: space-evenly;
    align-items: center;

    @media ${M_DOWN} {
    padding: 10px;
    font-size: 6px;
  }
`

export const FooterParagraph = styled.p`
    text-transform: uppercase;
    margin-left: 50px;
    cursor: pointer;
    &:hover {
        color:#33a06d;
    }

    @media ${M_DOWN} {
    margin-left: 10px;
  }
`

export const FooterCopyRight = styled.p`
    text-transform: uppercase;
    margin-left: 50px;

    @media ${M_DOWN} {
    margin-left: 10px;
  }
`

export const ScrollToTopButton = styled.div`
    cursor: pointer;
`;

export const ScrollImg = styled.img`
    width:40px;
    height: 40px;
    &:hover {
        border:40px;
        border-radius: 40px;
        background-color:#33a06d;
    }

    @media ${M_DOWN} {
        width: 30px;
        height: 30px;
  }
    
`;