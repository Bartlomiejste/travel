import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary/ErrorBoundary";
import Main from "./page/Main/Main";
import CartPage from "./components/CartPage/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
