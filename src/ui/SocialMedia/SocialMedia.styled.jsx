import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { M_DOWN, T_DOWN} from "../../utils/viewport";

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 20px;
  height: 300px;

  @media ${M_DOWN} {
        margin: 90px 0;
        height: auto;
        flex-direction: column;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  
  &:hover {
   color: #33a06d;
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 44px;

  @media ${M_DOWN} {
    font-size: 20px;
  }

  
  @media ${T_DOWN} {
    font-size: 30px;
  }
  
`;

export const ContactText = styled.p`
  margin: 0;
  font-size: 18px;

  @media ${M_DOWN} {
    font-size: 10px;
  }
`;