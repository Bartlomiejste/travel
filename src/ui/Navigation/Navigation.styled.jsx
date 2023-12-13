import styled from "styled-components";

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
`;

export const NavigationName = styled.p`
    margin: 0 25px;
    cursor: pointer;
    color: ${props => props.isActive ? '#33a06d' : '#000000'};

    &:hover {
        color: #33a06d;
    }
`;

export const NavigationImg = styled.img`
    width: 100px;
    margin: 0 150px;
`