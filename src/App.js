import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary/ErrorBoundary";
import Main from "./page/Main/Main";
import CartPage from "./components/CartPage/CartPage";
import TravelCart from "./components/TravelCart/TravelCart";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/trip/:tripId" element={<TravelCart />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
