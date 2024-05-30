import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";
import AboutPage from "./pages/SinglePage";
import Header from "./common/Header";
import SinglePage from "./pages/SinglePage";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/singleproduct" element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
