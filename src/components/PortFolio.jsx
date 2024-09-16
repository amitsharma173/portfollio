import React from "react";
 
import wordpress from "../../public/wordpress.png"; 
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg"; 
import php from "../../public/php.png";
import laravel from "../../public/laravel.png";
import Codeigniter from "../../public/ci.png";
import darkmakeup from "../../public/darkmakeup.png";
import fectum from "../../public/fectum.png";
import oreliatiles from "../../public/oreliatiles.png";
import pslanguage from "../../public/pslanguage.png";
import taxi from "../../public/taxi.png";
import timt from "../../public/timt.png";
import college from "../../public/college.png";
import llrnie from "../../public/llrnie.png";
import oreliatractors from "../../public/oreliatractors.png";
import trendycart from "../../public/trendycart.png";

import { FaEye } from "react-icons/fa";


 
import { MdOutlineWork } from "react-icons/md";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: college,
      name: "College Website",
      tech: [reactjs, nodejs, css, html], 
      percentage: 96,
      description: "College Website. Handel The Online Enquiry",
      urllink : "https://collegereact.llrgdhnursing.com/",
      
    },
    {
      id: 2,
      logo: taxi,
      name: "Taxi Booking Service",
      tech: [reactjs, nodejs, css, html], 
      percentage: 90,
      description: "Online Taxi Booking Service",
      urllink : "https://taxiservice.technologyburn.com/",
    },
    {
      id: 3,
      logo: trendycart,
      name: "Trendy Cart - Store",
      tech: [reactjs, nodejs, css, html], 
      percentage: 80,
      description: "Ecommerece Website to Sale the Cloths",
      urllink : "https://trendy.younictech.com/",
    },
    {
      id: 4,
      logo: oreliatiles,
      name: "Tiles & Sanitary Website",
      tech: [php, laravel, css, html], 
      percentage: 80,
      description: "Ecommerece Website to Sale the Tiles and Sanitary",
      urllink : "https://oreliatiles.com/",
    },
    {
      id: 5,
      logo: oreliatractors,
      name: "Tractor Parts Sale",
      tech: [wordpress, php, html, css], 
      percentage: 92,
      description: "Ecoomerce website to Sale the Tractor Parts",
      urllink : "https://oreliatractors.com/",
    },
    {
      id: 6,
      logo: fectum,
      name: "Scaffolding Manufurers Ecommerce ",
      tech: [wordpress, php, html, css], 
      percentage: 90,
      description: "Ecoomerce website to Sale the Scaffolding Parts",
      urllink : "http://fectumglobal.com/",
    },
    {
      id: 7,
      logo: darkmakeup,
      name: "Makeup Studio",
      tech: [reactjs, nodejs, wordpress,Codeigniter,css, html], 
      percentage: 95,
      description: "Online Accedemy  Websie and ERP System",
      urllink : "https://darksmakeupstudioandacademy.com/",
    },
    {
      id: 8,
      logo: pslanguage,
      name: "IELTS Academy",
      tech: [ wordpress,php, css, html], 
      percentage: 60,
      description: "Language Academy Website ",
      urllink : "https://pslanguageplanet.com/",
    },
    {
      id: 9,
      logo: timt,
      name: "Management College",
      tech: [ wordpress,php, css, html], 
      percentage: 60,
      description: "College Website. Handel The Online Enquiry",
      urllink : "https://timtjal.com/",
    },
  
    {
      id: 10,
      logo: llrnie,
      name: "Nursing College",
      tech: [ wordpress,php, css, html], 
      percentage: 75,
      description: "College Website. Handel The Online Enquiry",
      urllink : "http://llrgdhnursing.com/",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 mb-20"
    >

<div className="flex space-x-1 text-1xl md:text-2xl">
        <h1 className="text-red-600 font-semibold text-2xl mb-2 flex mt-2 gap-2 hover:scale-110 duration-200  cursor-pointer"> <MdOutlineWork   className="hover:scale-110 duration-200 rounded-full  mt-1 cursor-pointer"  />
         <span> PortFolio</span>
 
</h1><br/>

</div>

   <div>
   <span className="font-semibold text-center">
          I've more than 8 years of experience in the following technologies.
        </span> 
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3  mt-10  my-5">
          {cardItem.map(({ id, logo, name, percentage, tech, description, urllink }) => (
            <div
              className="md:w-[300px] md:h-[450px] border-[5px] border-green-100 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300 mb-5"
              key={id}
            >
              <img
                src={logo}
                className="  p-1  mx-auto"
                alt={name}
              />
              <div className="text-center">
              <div className="px-2 font-bold text-xl mb-2">
  {/* Map through the tech array to display each technology image */}
  {tech.map((techImg, index) => (
    <img
      key={index}  
      src={techImg}  
      alt="tech logo"
      className="inline-block w-5 h-5 mx-1" // Adjust the styling as needed
    />
  ))}
</div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                 <p className="px-2 text-gray-700">
                    {description} 
                </p>  
              </div>
              {/* Progress bar */}
               {/* <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 mb-20">
               <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div> </div>
                */}
                 {/* <div className="flex flex-col px-6 py-4 space-x-3 text-center mb-20">
  <button  className="bg-red-900 hover:bg-green-700 text-white font-bold px-4 py-2 rounded flex items-center justify-center space-x-2">
    <FaEye className="hover:scale-110 duration-200 rounded-full cursor-pointer" />
    <span>View</span>
  </button>
</div> */}

<div className="flex flex-col px-6 py-4 space-x-3 text-center mb-20">
  <button
    onClick={() => window.open(urllink, "_blank")}
    className="bg-red-900 hover:bg-green-700 text-white font-bold px-4 py-2 rounded flex items-center justify-center space-x-2"
  >
    <FaEye className="hover:scale-110 duration-200 rounded-full cursor-pointer" />
    <span>View</span>
  </button>
</div>


                
              
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default PortFolio;
