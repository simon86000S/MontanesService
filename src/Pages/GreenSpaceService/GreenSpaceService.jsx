import React from "react";
import Navbar from "../../components/Header/Navbar";
import taille from "../../assets/nav_garden.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo_feuille.png";
import arbres from "../../assets/arbres.png";
import nav_garden from "../../assets/nav_garden.jpg";
import Button_Contact from "../../components/Header/Button_Contact";
import tonte from '../../assets/tonte.jpg';
import logoM from '../../assets/logo.png';
import L from '../../assets/composte.png'


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
          <div className=" h-full h-[80%] bg-center rounded-2xl ">
            <img src={arbres}></img>
          </div>
        </div>
      </div>
      <div className="  ">
        <div className="flex items-center justify-center">
        <img className="w-[10%] h-[10%]" src={logoM}></img>
        <h1 className="text-center text-4xl text-gray-800 ">
          Montanes Services
        </h1>
     
        </div>
       
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
          <div className="bg-gray-500 flex items-center justify-center rounded-t-full h-[55px]">
            <img className="w-[10%]  max-sm:w-[10%] mr-3  " src={logo}></img>
            <p>Conseil</p>
          </div>
          <div className="bg-gray-500 flex items-center justify-center rounded-t-full h-[55px]">
            <img className="w-[10%]  max-sm:w-[10%] mr-3  " src={logo}></img>
            <p>Remise en état d'un gazon</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 max-sm:flex max-lg:flex-col">
        <div className="flex-1 m-5 max-sm:ml-0 ">
        <div className="bg-lime-100 shadow-2xl rounded-xl ">
          <div className="flex items-center justify-center">
          <img className="w-[5%] h-[5%] max-sm:w-[20%]" src={L}></img>
          <h1 className="flex  text-2xl  p-5">Donnez vie à vos rêves de jardin avec nos experts en espaces verts</h1>
          </div>
           
            <p className="leading-8 p-4">Bienvenue dans notre entreprise d'espace vert ! Nous sommes une équipe passionnée et dévouée qui se spécialise dans la création et l'entretien d'espaces extérieurs magnifiques et fonctionnels.

Notre objectif principal est de transformer vos espaces extérieurs en véritables havres de paix et de beauté. Que vous ayez besoin d'un aménagement paysager complet pour votre jardin, d'une conception de terrasse ou d'un entretien régulier de vos espaces verts, nous sommes là pour vous accompagner.

Ce qui nous distingue, c'est notre approche personnalisée. Nous comprenons que chaque client a des besoins et des préférences uniques, c'est pourquoi nous travaillons en étroite collaboration avec vous pour créer un espace extérieur qui correspond parfaitement à votre vision.

De plus, nous sommes fiers de notre engagement envers l'environnement. </p>
            </div>
          <div className="flex m-10 max-lg:flex-col">
           <div>
           <img className=" flex-1 rounded-l-2xl  w-full " src={nav_garden}></img></div> 
        
          <div className="flex-1 bg-lime-200 rounded-r-2xl p-4 mr-5  pb-12 max-sm:mr-0  ">
          <p className="leading-8 pb-0 text-lg text-slate-800     ">
            {" "}
            Pour un service de proximité, je suis situé sur Poitiers, véhiculé
            avec remorque, je me déplace sur les communes environnantes
            (Buxerolles,Jaunay-Marigny,Saint-Benoît,Chauvigny,Migné-Auxances....)
            et également sur Châtellerault.{" "}
            <Button_Contact />
          </p>
          </div>
         
        </div>
        </div>
      
      </div>
      <div className=" h-[70vh] bg-cover bg-center bg-fixed -mt-4  bg-contain bg-[url('https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]  relative before:content-['Transformez_votre_jardin_en_un_paradis_verdoyant_avec_notre_expertise_en_aménagement_paysager.'] before:absolute before:top-[30%] before:left-[20%] before:text-3xl before:text-lime-400 before:p-50 before:h-[40%] before:bg-black before:opacity-50  before:w-[60%] before:flex before:items-center before:text-center before:rounded-xl " >
      
      
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GreenSpaceService;
