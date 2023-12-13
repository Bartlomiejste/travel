import React from "react";
import { MainContainer } from "../../ui/Layout/Layout.styled.jsx";

const Layout = ({ children }) => {

  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
};

export default Layout;
