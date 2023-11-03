import React from "react";
import Navbar from "../../components/Header/Navbar";
import taille from "../../assets/nav_garden.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo_feuille.png";

const GreenSpaceService = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="ml-[40px] pl-10 rounded-full flex flex-row justify-between my-10 bg-lime-100 shadow-2xl h-[80vh] w-[90%] max-sm: ">
        <div className=" bg-fixed m-10 rounded-full flex-1 h-[70vh] bg-left -mt-4  bg-contain bg-[url('https://cdn.pixabay.com/photo/2017/03/22/10/58/fairy-2164607_1280.png')] "></div>
        <div className="flex-1  pt-10 ">
          <div className="m-0 p-4 ">
            <h1 className="text-4xl max-sm:flex max-sm:justify-left">
              Montanes Services:
            </h1>
            <h3 className="text-2xl">et votre jardinier sur Poitiers</h3>
          </div>
          <span className="flex justify-center ">
            <AiOutlineArrowDown className="h-[35px] w-[45px]" />
          </span>
          <div className=" h-full h-[80%] bg-center rounded-2xl bg-[url('https://o.remove.bg/downloads/521f9ff5-e24a-4cef-aa52-af1deca0d126/arbre-removebg-preview.png')]"></div>
        </div>
      </div>
      <div className=" ">
        <h1 className="text-center text-4xl text-gray-800">
          Montanes Services
        </h1>
        <h2 className="text-center text-gray-800 p-2">
          Notre savoir-faire s'appuie sur notre expertise pour la réalisation de
          nos chantiers{" "}
        </h2>
        <div className="grid grid-cols-3 gap-3 mt-5 max-sm:flex max-sm:flex-col">
          <div className="bg-gray-500 flex items-center ml-15 justify-center rounded-t-full h-[55px] ">
            <img className="w-[10%] max-sm:w-[10%] mr-3 " src={logo}></img>
            <p>Débroussaillage</p>
          </div>
          <div className="bg-gray-500 flex items-center  justify-center rounded-t-full h-[55px] ">
            <img className="w-[10%] max-sm:w-[10%] mr-3 " src={logo}></img>
            <p>Tonte</p>
          </div>
          <div className="bg-gray-500 flex items-center justify-center rounded-t-full h-[55px]">
            <img className="w-[10%] max-sm:w-[10%] mr-3 " src={logo}></img>
            <p>Taille</p>
          </div>
          <div className="bg-gray-500 flex items-center justify-center rounded-t-full h-[55px]">
            <img className="w-[10%]  max-sm:w-[10%] mr-3  " src={logo}></img>
            <p>Désherbage</p>
          </div>
        </div>
      </div>
      <div>
        cocuocu
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GreenSpaceService;
