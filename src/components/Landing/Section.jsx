import React from "react";
import plantes from "../../assets/plantes.png";
import cleaning from "../../assets/cleaningserv.jpg";
import garden from '../../assets/nav_garden.jpg';
import { Link } from "react-router-dom";



const Section = () => {
  return (
    <div className=" flex  w-full bg-slate-800 max-md:mt-[100%] md:mt-[10%] ">
      <div className="w-full ">
        <div className="flex flex-col items-center " data-aos="fade-up">
          <img className="w-[10%] rounded-full " src={plantes}></img>
          <h1 id='title' className="flex justify-center text-4xl text-white ">
            Nos prestations
          </h1>
          <p className="text-white py-5 ">Envie de nos services ? nous sommes à votre écoute</p>
          <Link to="/Contact" className="relative text-center flex items-center text-black justify-center bg-slate-700  p-6 uppercase rounded-full  before:content-[''] before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30 hover: text-white ">
                    Contactez-Nous
                  </Link>
        </div>
        <div className="md:flex justify-between pl-5 text-zinc-400 mt-20   ">
          <div className=" flex-1 h-3/6 bg-gray-700 rounded-3xl p-4 w-[95%] max-sm:mb-4 " data-aos="fade-right"
          >
            <h1 className="p-4 underline decoration-1 text-2xl text-center ">Service de Nettoyage</h1>

            <img className="w-[85%] rounded-s-full p-3   " src={cleaning}></img>
            <h2 className="text-xl pb-5" >Services proposés :</h2>
            <p className="leading-8 w-[80%]">
              <strong className="text-white flex items-baseline ">Nettoyage de vitre:</strong> Nous utilisons des méthodes efficaces et
              respectueuses de l'environnement pour garantir des vitres propres
              et sans traces.
            </p>
            <p className="leading-8 py-3 w-[80%]">
              <strong className="text-white">Nettoyage de sol:</strong> Nous utilisons des produits et des méthodes respectueux de la nature dans nos services. Nous favorisons l'utilisation de produits biologiques. 
            </p>
          </div>
          <div className=" flex-1 h-3/6 bg-gray-700 rounded-3xl p-4 my:0 w-[95%]  md:ml-4  max-sm:mb-4" data-aos="fade-left">
            <h1 className="p-4 underline decoration-1 text-2xl text-center ">Service Paysagers</h1>
 
            <img className="w-[85%] rounded-e-full p-3 " src={garden}></img>
            <h2 className="text-xl  pb-5" >Services proposés :</h2>
            <p className="leading-8  w-[80%]">
            <strong className="text-white">Entretien des espaces verts :</strong> Nous proposons une gamme complète de services pour l'entretien des espaces extérieurs, y compris la tonte de gazon, la taille des arbres et arbustes, l'élagage, la plantation de fleurs et d'arbres, l'arrosage, la gestion des déchets verts, et bien plus encore.
            </p>
            <p className=" text-white leading-8  w-[80%]">
                <p>-Débroussaillage</p>
                <p>-Désherbage</p>
                <p>-Taille de haie</p>
                <p>-Tonte</p>
                
            </p>
            <p className="leading-8  w-[80%]">
            <strong className="text-white">Gestions et évacuations des déchets:</strong>  Nous valorisons les déchets de bois vert, comme de bois mort issus de la taille et de l'élagage, pour être réduits en copeaux et etre utilisés en broyat.
            </p>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Section;
