import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary/ErrorBoundary";
import Main from "./page/Main/Main";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
