import styled from "styled-components";
import { L_DOWN, SM_UP } from "../../utils/viewport";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  
  @media ${SM_UP} {
    width: 100%;
  }

  @media ${L_DOWN} {
    width: 100%;
  }
`;