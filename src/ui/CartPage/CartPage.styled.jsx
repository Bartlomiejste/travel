import { styled } from "styled-components";

export const CartContainer = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
`;

export const CartContent = styled.div`
  background-color: #fff; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

export const CartMessage = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const ReturnButton = styled.button`
  background-color: #000000; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-transform: uppercase;

  &:hover {
    background-color: #33a06d;
  }
`;
