import React from "react";
import Navbar from "./Navbar";
import Background from "./Background";
import Landing from "../Landing/Landing";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Background />
      <Landing />
    </header>
  );
};

export default Header;
