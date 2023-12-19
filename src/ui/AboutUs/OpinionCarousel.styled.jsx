import { styled } from "styled-components"
import { D_UP, L_DOWN, L_UP, M_DOWN, M_UP, T_DOWN} from "../../utils/viewport"

export const OpinionContainer = styled.div`
    margin-top: 30px;
    width: 800px;
    padding: 20px;

    
    @media ${T_DOWN} {
        display: none;
    }
    
    @media ${L_UP} {
        width: 600px;
    }
    @media ${D_UP} {
        width: 800px;
    }
`
export const OpinionTitle = styled.h2`
    padding-bottom:30px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
`

export const Opinion = styled.div`
    margin: 0 100px;
`

export const OpinionText = styled.p`
    padding-bottom: 25px;
    width: 100%;
    text-align: center;
    font-style: italic;
`
export const OpinionAuthor = styled.div`
    text-transform: uppercase;
    padding:20px;
    width:100%;
    text-align:center;
`