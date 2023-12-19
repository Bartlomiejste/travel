import React from 'react';
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { CartContainer, CartContent, CartMessage, ReturnButton } from '../../ui/CartPage/CartPage.styled';


const CartPage = () => {

  const navigate=useNavigate();

  const handleLinkClick = () => {
    navigate('/#travel');
};

  return (
    <Layout>
      <CartContainer>
        <CartContent>
          <CartMessage>Twój koszyk aktualnie jest pusty.</CartMessage>
          <ReturnButton onClick={handleLinkClick}>Wróć do listy wycieczek</ReturnButton>
        </CartContent>
      </CartContainer>
    </Layout>
  );
};

export default CartPage;
