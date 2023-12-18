import React from "react";
import { MainContainer } from "../../ui/Layout/Layout.styled.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ children }) => {

  return (
    <MainContainer>
      <Navigation/>
      {children}
      <Footer/>
    </MainContainer>
  );
};

export default Layout;
