import React from "react";

import pic from "../../public/profile.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { DiMysql } from "react-icons/di";


  import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Profile</span>
            <div className="flex space-x-1 text-1xl md:text-2xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer" , "Graphics Designer", "Blogger", "Social Media Marketer", "Google & Meta Ads Expert" ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Hello! I'm Amit Kumar, a passionate web developer with 8 years of experience in creating dynamic and user-friendly websites. My journey in web development began with HTML, CSS, and JavaScript, and over the years, I've mastered various technologies including PHP, WordPress, CodeIgniter, and Laravel,React.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100008085938933" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/amit-kumar-a70a542b6/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sharmaboy90417/" target="_blank">
                    <FaSquareInstagram className="text-2xl cursor-pointer"  />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                <FaPhp
  className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
  title="PHP"/>
                 <FaWordpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" title="Wordpress" />
                <FaLaravel className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" title="Laravel" />
                <DiCodeigniter className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"  title="Codiegniter"/>
                <DiMysql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" title="MySql" />               
                </div>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"  title="MongoDb"/>
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" title="Express" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"  title="React"/>
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"  title="NodeJs"/>
                
              
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-5 order-1 items-center">
           <div className="container home" id="home">
         

<div className="right mb-24">
<div className="img" data-aos="fade-up-left" data-aos-duration="1000">
<img  src={pic}   alt="" />
</div>
</div>
             </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
