import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Test from "./test";

const Generator = () => {
  const [generator, setGenerator] = useState();
  // ...
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const baliseScript = document.createElement("script")
    baliseScript.src = "/monscript.com/min.js"
    baliseScript.addEventListener("load", () => setLoaded(true))
    document.body.appendChild(baliseScript)
  }, [])
  

  return (
    <div className=" bg-[url('./assets/home.jpg')] ">
      <h1 className="text-center text-4xl">Avis clients</h1>

      
    </div>
  );
};

export default Generator;
