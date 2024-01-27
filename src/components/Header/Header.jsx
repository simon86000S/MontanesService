import React from "react";
import Navbar from "./Navbar";
import Background from "./Background";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Background />
      <Landing />
      <Footer />
    </header>
  );
};

export default Header;
