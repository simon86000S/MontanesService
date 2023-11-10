import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../../menuItems";
import Button_Contact from "./Button_Contact";
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group   ">
            <h1
              className=" text-lg text-blue-900 font-semibold hover:text-sky-600  py-7 flex justify-between items-center md:pr-0 pr-5 group cursor-pointer max-[600px]:hover:text-white  duration-300 ease-in-out max-sm:text-black font-normal "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="cursor-pointer text-xl md:hidden inline ">
                <ion-icon 
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span  className=" text-xl md:mt-1 md:ml-2  md:block hidden  ">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className=" absolute top-20 hidden group-hover:md:block hover:md:block ">
                  <div className="py-3  "></div>
                  
                  <div className="bg-slate-600  p-3 grid grid-cols-1 gap-5">
                    {link.sublinks.map((mysublinks) => (
                      <div className='z-50 '>
                        {mysublinks.sublink.map((slink) => (
                          <li className=" hover:bg-cyan-900 border-b-2 duration-300 p-4 text-sm  my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary p-2 "
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
            
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"
            }
            
          `}
          
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  {slinks.sublink.map((slink) => (
                    <li className=" hover:bg-cyan-900  p-4 border-b-2 cursor-pointer   ">
                      <Link  to={slink.link}>{slink.name}</Link>
                    </li>
                  ))}
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
