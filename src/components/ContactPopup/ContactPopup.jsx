import React from 'react';
import { CloseButton, ContactModalContainer, FormContainer, FormTitle, StyledForm, StyledInput, StyledTextarea, SubmitButton } from '../../ui/ContactPopup/ContactPopup.styled';


const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ContactModalContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <FormContainer>
      <FormTitle>Napisz do nas</FormTitle>
        <StyledForm>
          <StyledInput type="text" placeholder="Imię" required/>
          <StyledInput type="email" placeholder="Email" required />
          <StyledTextarea placeholder="Twoja wiadomość"></StyledTextarea>
          <SubmitButton type="submit">Wyślij</SubmitButton>
        </StyledForm>
      </FormContainer>
    </ContactModalContainer>
  );
};

export default ContactPopup;
