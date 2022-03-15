import React from "react";

import { Header, Testimonial, Footer, Work, Skills } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />

      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
