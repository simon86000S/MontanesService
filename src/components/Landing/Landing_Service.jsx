import React from "react";
import { Animation } from "./Animation";
import List_service from "./List_Service";
import Testimonal from "./Testimonal";
const Landing_Service = () => {
  return (
    <div className=''>
      <div className="h-[100vh] bg-center bg-cover rounded-3xl bg-[url('https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] "></div>

      <div className="shadow-2xl">
        <h1 className="text-center text-4xl text-blue-800">
         
        </h1>
        <Animation/>
        <div class="grid grid-rows-2 grid-flow-col gap-2 p-5 max-sm:flex flex-col items-center justify-center gap-6 ">
          <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] bg-[url('https://img.freepik.com/photos-gratuite/plein-coup-homme-passant-aspirateur-sol-du-bureau_23-2149345550.jpg?w=1060&t=st=1699472188~exp=1699472788~hmac=186e7ef52101ff2987c35b1799048b5bd1a62fca3177a332a48369f1e156b630')] bg-cover bg-right w-[200px] h-[200px] rounded-e-full relative before:content-['']  before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30  hover:before:rounded-e-full ]  hover:before:content-['Aspirer_pour_supprimer_toutes_les_poussières_et_les_impuretés_qui_stagnent_dans_votre_intérieur.'] hover:before:flex hover:before:items-center hover:before:z-50 hover:before:text-white hover:before:justify-center hover:before:p-7 hover:before:font-bold    "></div>

          <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] bg-[url('https://img.freepik.com/photos-gratuite/concept-nettoyage-vitres_23-2148133374.jpg?w=1060&t=st=1699472907~exp=1699473507~hmac=7de8f7d4fadc6286debd5bfd1492e890b554cc22dd2f0d89bcd2e5ad1678c396')] bg-cover bg-center w-[200px] h-[200px] rounded-l-full relative before:content-[''] before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30 hover:before:rounded-e-full ] hover:before:content-['Le_lavage_de_vitres_est_une_pratique_technique_necessitant_un_savoir_faire_lavage_à_la_française_ou_à_americaine'] hover:before:flex hover:before:items-center hover:before:z-50 hover:before:text-white hover:before:justify-center hover:before:p-4 hover:before:font-bold "></div>

          <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] bg-[url('https://img.freepik.com/photos-gratuite/personne-portant-bottes-caoutchouc-jaune-buse-eau-haute-pression-nettoyant-salete-dans-carreaux_181624-23652.jpg?w=1060&t=st=1699473666~exp=1699474266~hmac=cb6f26789d58ca007a572b2306574dc50d0ba12d6d22ccd3598494fc2d46485e')] bg-cover bg-center w-[200px] h-[200px] rounded-t-full relative before:content-[''] before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30 hover:before:rounded-e-full ] hover:before:content-['Aspirer_pour_supprimer_toutes_les_poussières_et_les_impuretés_qui_stagnent_dans_votre_intérieur.'] hover:before:flex hover:before:items-center hover:before:z-50 hover:before:text-white hover:before:justify-center hover:before:p-7 hover:before:font-bold"></div>

          <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] bg-[url('https://img.freepik.com/photos-gratuite/homme-faisant-service-nettoyage-domicile-professionnel_23-2150358976.jpg?t=st=1699475341~exp=1699475941~hmac=889bb07faf1b05018112d2a90cb2a22b52b3e8f729d6d6e85b149f364d2359bd')] bg-cover bg-center w-[200px] h-[200px] rounded-l-full relative before:content-[''] before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30 hover:before:rounded-e-full ] hover:before:content-['Aspirer_pour_supprimer_toutes_les_poussières_et_les_impuretés_qui_stagnent_dans_votre_intérieur.'] hover:before:flex hover:before:items-center hover:before:z-50 hover:before:text-white hover:before:justify-center hover:before:p-7 hover:before:font-semibold"></div>

          <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] bg-[url('https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-right w-[200px] h-[200px] rounded-b-full relative before:content-[''] before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30 hover:before:rounded-e-full ] hover:before:content-['Aspirer_pour_supprimer_toutes_les_poussières_et_les_impuretés_qui_stagnent_dans_votre_intérieur.'] hover:before:flex hover:before:items-center hover:before:z-50 hover:before:text-white hover:before:justify-center hover:before:p-7 hover:before:font-semibold"></div>
          <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] bg-[url('https://img.freepik.com/photos-gratuite/plein-coup-homme-passant-aspirateur-sol-du-bureau_23-2149345550.jpg?w=1060&t=st=1699472188~exp=1699472788~hmac=186e7ef52101ff2987c35b1799048b5bd1a62fca3177a332a48369f1e156b630')] bg-cover bg-right w-[200px] h-[200px] rounded-e-full relative before:content-[''] before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30 hover:before:rounded-e-full ] hover:before:content-['Aspirer_pour_supprimer_toutes_les_poussières_et_les_impuretés_qui_stagnent_dans_votre_intérieur.'] hover:before:flex hover:before:items-center hover:before:z-50 hover:before:text-white hover:before:justify-center hover:before:p-7 hover:before:font-semibold"></div>
        </div>
      </div>
      <div>
        <div>
            <h1 className="text-center  text-4xl text-blue-800">Prestations</h1>
            <List_service/>
        </div>
        
<Testimonal/> 
      </div>
    </div>
  );
};

export default Landing_Service;
