import { styled } from "styled-components";
import { M_DOWN, T_DOWN } from "../../utils/viewport";

export const ContactModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  align-items: center;

  @media ${M_DOWN} {
    padding: 10px;
    font-size:10px;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  width: 400px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;

  @media ${M_DOWN} {
    font-size:10px;
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  height: 100px;

  @media ${M_DOWN} {
    font-size:10px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }

  @media ${M_DOWN} {
    font-size:10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

export const FormTitle = styled.h2`
    padding: 20px 0;
`