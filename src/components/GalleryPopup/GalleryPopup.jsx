import React from 'react';
import ModalImage from 'react-modal-image';
import { CloseButton, GalleryGrid, GalleryModalContainer } from '../../ui/GalleryPopup/GalleryPopup.styled';

const GalleryPopup = ({ isOpen, photos, onClose }) => {
  if (!isOpen) return null;

  return (
    <GalleryModalContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <GalleryGrid>
      {photos.map((photo, index) => (
        <ModalImage
          key={index}
          small={photo.small}
          large={photo.large}
          alt={photo.alt}
        />
      ))}
      </GalleryGrid>
    </GalleryModalContainer>
  );
};

export default GalleryPopup;
