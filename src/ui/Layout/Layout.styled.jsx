import styled from "styled-components";
import { L_DOWN, SM_UP } from "../../utils/viewport";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
`;

export const PageContainer = styled.div`
  background-color: black;
  height: 50px;

  @media ${SM_UP} {
    width: 100%;
  }

  @media ${L_DOWN} {
    width: 100%;
  }
`;
