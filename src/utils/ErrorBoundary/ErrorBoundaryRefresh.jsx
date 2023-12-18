import styled from 'styled-components';
import React from 'react';
import errorBoundaryImage from './ErrorBoundaryPicture.png';

const ErrorImageOverlay = styled.div`
  background-color: #FDF8EA;
  text-align: center;
  position: relative;
  overflow-y: hidden; 
  height: 100vh;
`;

const StyledButton = styled.button`
  background-color: #FB9982;
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto; 
`;

const ErrorBoundaryUI = () => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <ErrorImageOverlay>
      <StyledImage src={errorBoundaryImage} alt="Error Boundary" />
      <StyledButton onClick={refreshPage}>Odśwież stronę</StyledButton>
    </ErrorImageOverlay>
  );
};

export default ErrorBoundaryUI;
