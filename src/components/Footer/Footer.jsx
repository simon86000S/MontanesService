import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="">
      <div className="  bg-gray-800 flex justify-around text-zinc-400 max-sm:block ">
        <nav className="max-sm:flex justify-center text-center">
          <ul className="flex flex-col text-lg max-sm:mb-10   ">
            <h1 className="relative text-2xl  text-white before:content-['']   before:absolute before:-bottom-1  before:bg-white before:h-0.5 before:w-6/12 md:before:left-5 max-sm:before:w-2/12 before:left-12 ">
              Menu
            </h1>
            <li className=" p-2 ease-in-out duration-300  hover:text-white cursor-pointer">
              Accueil
            </li>
            <li className=" p-2 ease-in-out duration-300 hover:text-white cursor-pointer">
              Prestations
            </li>
            <li className=" p-2 ease-in-out duration-300  hover:text-white cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
        <nav >
          <ul className="flex flex-col text-lg max-sm:mb-10 text-center ">
            <h1 className=" max-sm:flex justify-center relative text-2xl text-white before:content-[''] before:absolute before:-bottom-1 before:bg-white before:h-0.5 before:w-6/12 max-sm:before:w-2/12 before:l-0 ">
              Prestations
            </h1>
            <li className=" max-sm:flex justify-center p-2 ease-in-out duration-300  hover:text-lime-700 cursor-pointer">
              Espaces verts
            </li>
            <li className=" max-sm:flex justify-center p-2 ease-in-out duration-300  hover:text-teal-600 cursor-pointer">
              Service de Nettoyage
            </li>
          </ul>
        </nav>
        <div className="max-sm:flex justify-center flex-col">
          <h1 className=" max-sm:flex justify-center text-center before:w-2/12 before:l-0   relative text-2xl  text-white before:content-[''] before:absolute before:-bottom-1 before:bg-black before:h-0.5 before:w-6/12 before:bg-white ">
            Nos coordonnées
          </h1>
          <h1 className="max-sm:flex justify-center p-2 text-lg ">Montanes Services</h1>

          <p className="max-sm:flex justify-center flex items-center">
            <BiTimeFive className="mr-2" /> Du lundi au Vendredi: de 8h à 20h
          </p>
        </div>
      </div>
      <div className="flex-1 flex-col  text-center mt-5  ">
        <h1 className="flex justify-center items-center text-2xl    ">
          <BsTelephone className=" mr-2   " /> 06 26 76
          72 47
        </h1>
       <h1 className="text-2xl  "> Vous avez des questions? Besoin d'aide?</h1> 
      </div>
   
    </div>
  );
};

export default Footer;
