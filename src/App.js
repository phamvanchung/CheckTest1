import "./App.scss";
import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Product from "./components/Product";
import BrandStory from "./components/BrandStory";
import HappyIssue from "./components/HappyIssue";
import BannerVideo from "./components/BannerVideo";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Product />
      <BrandStory />
      <HappyIssue />
      <BannerVideo />
      <Footer />
    </div>
  );
}

export default App;
