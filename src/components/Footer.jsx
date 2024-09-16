import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

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
import pic from "../../public/profile.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#193b6e] text-white py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div>
             
             <div className=" flex space-x-2">
        <img src={pic} className="h-20 w-20 rounded-full" alt="" />
        <h1 className="font-semibold text-xl cursor-pointer mt-3">
            AMIT  KUMAR 
          <p className="text-sm">Web Developer</p>
           
        </h1>
      </div>
 
              
              <p className="mt-4 text-justify">
                Thank you for visiting my personal portfolio website. Connect with me over socials.Keep Rising 🚀 Connect with me over live chat!
              </p>
              
            </div>

            {/* Quick Links Section */}
            <div>
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Skills</a></li>
                <li><a href="#" className="hover:underline">Education</a></li>
                <li><a href="#" className="hover:underline">Work</a></li>
                <li><a href="#" className="hover:underline">Experience</a></li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div>
              <h2 className="text-xl font-semibold">Contact Info</h2>
              <p className="mt-4 flex items-center">
                📞 <span className="ml-2">+91 90417-29456</span>
              </p>
              <p className="mt-2 flex items-center">
                📧 <span className="ml-2">amit_sharma173@yahoo.in</span>
              </p>
              <p className="mt-2 flex items-center">
                📍 <span className="ml-2"> Jalandhar City, Punjab- India</span>
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex space-x-4">
              <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100008085938933" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer hover:text-blue-500"  />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/amit-kumar-a70a542b6/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700"/>
                    </a>
                  </li>
                  <li>
                  
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer hover:text-red-500" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sharmaboy90417/" target="_blank">
                    <FaSquareInstagram className="text-2xl cursor-pointer hover:text-pink-500"  />
                    </a>
                  </li>

                  </ul>
                
                
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
            <p className="text-sm text-gray-400">&copy; 2024 AMIT KUMAR Portfolio. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-1">Designed & Developed By ❤️ <span className="text-white">Amit Kumar</span></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
