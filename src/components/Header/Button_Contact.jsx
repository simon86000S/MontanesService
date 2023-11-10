import React from "react";
import {Link} from 'react-router-dom'

const Button_Contact = () => {
  return (
    <Link to="/Contact" className=" relative text-center flex items-center text-black justify-center bg-slate-700  p-6 uppercase rounded-full  before:content-[''] before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30 hover: text-white ">
    Contactez-Nous
  </Link>
  );
};

export default Button_Contact;