import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button_Contact from "./Button_Contact";
import NavLinks from "./MenuItems";
import Landing from "../Landing/Landing";
import taille from "../../assets/taille.mp4";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [changeMenus, setChangeMenu] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY < 100) {
      setChangeMenu(true);
    } else {
      setChangeMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <nav className=" sticky top-0 md: z-50  ">
      <div
        className={`md:  bg-transparent shadow-2xl flex items-center font-medium justify-around ${
          changeMenus && "bg-slate-700 w-full z-50  "
        } `}
      >
        <div className=" z-50 -p-2 h-full   w-full flex justify-between ">
          <img
            src={Logo}
            alt="logo"
            className="md:  cursor-pointer w-21 h-14 "
          />
          <div
            className="  z-50 p-[25px] text-3xl md:hidden "
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul
          className={`md:flex hidden uppercase items-center gap-2 font-[Poppins] z-40 text-zinc-200 ${
            changeMenus && "text-black"
          }`}
        >
          <li className=" font-semibold text-blue-900 hover:text-sky-600">
            <Link to="/" className="py-7 px-3 inline-block  ">
              Home
            </Link>
          </li>
          <li></li>
          <NavLinks />

          <Link
            to="/Contact"
            className="font-semibold text-blue-900 hover:text-sky-600 py-7 px-3 inline-block  "
          >
            Contact
          </Link>
        </ul>

        {/* Mobile nav */}

        <ul
          className={`
        md:hidden z-50 fixed w-full top-0 overflow-y-auto bottom-0 py-14 pl-4 bg-slate-700 flex justify-center flex-col items-center
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <div
            className=" z-50 text-3xl md:hidden cursor-pointer  flex justify-center max-lg:text-white hover:text-blue-400"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>

          <li>
            <Link
              to="/"
              className=" py-7 px-3 inline-block text-lg  hover:text-blue-400 max-lg:text-white"
            >
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link
              to="/Contact"
              className="  my-0 py-7 text-lg px-3 inline-block hover:text-blue-400 max-lg:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
