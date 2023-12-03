import React,{useEffect} from "react";
import paysage from "../../assets/paysage.jpg";
import { Link } from "react-router-dom";
import Section from "./Section";
import Footer from "../Footer/Footer";


import "./Landing.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";


const Landing = () => {

  
  return (
    <>
    <div className=" h-screen flex justify-center   ">
   
      <div className="md:flex w-full  ">
        <div className="  flex-1 flex  justify-center  w-full min-h-[50%]">
          <div className="flex flex-col">
            <div className="relative clip -my-8 flex   ">
              <h1 className=" flex p-7  text-2xl leading-10 text-center font-['Kristi']  text-zinc-400 uppercase max-sm:text-[17px]">
                Entreprise service paysagers et de Nettoyage
              </h1>
              <img
                className="rounded-full w-[85%] absolute left-8 bottom-0 -z-20"
                src={paysage}
              ></img>
            </div>
          </div>
        </div>
        <div className=" flex-1 rounded-xl  min-h-[40%] ">
          <div className=" flex items-center flex-col ">
            <h1 className=" text-black text-center text-4xl  pb-4  ">
              Montanes Services
             
            </h1>
            
            <>
              <Card className='max-w-[24rem] overflow-hidden bg-transparent shadow-2xl data-aos=fade-left '>
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                >
                  <img
                    src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="ui/ux review check"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    className="text-center"
                    variant="h4"
                    color="blue-gray"
                  >
                    Entreprise de service paysagers et de nettoyage
                  </Typography>
                  <Typography
                    variant="lead"
                    color="gray"
                    className="mt-3 font-normal p-5 max-sm:text-[17px]"
                  >
                    Montanes Services situé à Poitiers, spécialisée dans les
                    espaces verts et le nettoyage de vitres. Nous assurons
                    l'entretien intérieur et extérieur.
                    
                  </Typography>
                  <Link to="/Contact" className="relative text-center flex items-center text-black justify-center bg-slate-700  p-6 uppercase rounded-full  before:content-[''] before:absolute before:left:0 before:bg-black before:w-0 before:h-full before:transition-all duration-500 before:rounded-full hover:before:w-full before:bg-black before:opacity-30 hover: text-white ">
                    Contactez-Nous
                  </Link>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center -space-x-3"></div>
                  
                </CardFooter>
                
              </Card>
              ;
            </>
          </div>
          
        </div>
      </div>
      
    </div>
<Section/>

<Footer/>
    </>
  );
};

export default Landing;
