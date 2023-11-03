import {Link } from 'react-router-dom'
export const links = [
  {
    name: "Prestations",
    submenu: true,
    sublinks: [
      {
       
        sublink: [
          { name: "Espaces Verts", link: "/GreenSpaceService" },
          { name: "Service Nettoyage", link: "/Cleaning_service" },
          
        ],
      },
      
      

      
    ],
  }
]