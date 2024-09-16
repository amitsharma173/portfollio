import React from "react";

import { PiGraduationCapFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

import mca from "../../public/innocent-hearts.jpg";
import bca from "../../public/satyam-col.jpg"; 
function About() {
  const cardItem = [
    {
      id: 1,
       name: "Frontend Development",
       discription: "Proficient in HTML, CSS, and JavaScript to create responsive and interactive web interfaces. Currently focused on React.js for building modern, component-based web applications.",
    },
    {
      id: 2,
      name: "Backend Development",
       discription: "Experienced with PHP and frameworks like Laravel and CodeIgniter, allowing me to build robust and scalable server-side applications.",
    },
    {
      id: 3,
      name: "Content Management Systems",
      discription: "Extensive experience with WordPress, including theme and plugin development, customization, and optimization for performance.",
    },
    {
      id: 4,
      name: "Full-Stack Development",
       discription: "Skilled in creating user-friendly designs and optimizing user experience through thoughtful UI/UX design principles.",
    },
    {
      id: 5,
      name: "Web Design and User Experience",
      discription: "Proficient in HTML, CSS, and JavaScript to create responsive and interactive web interfaces. Currently focused on React.js for building modern, component-based web applications.",
    },
   
   
    {
      id: 8,
      name: "Continuously learning and adapting to new technologies",
       discription: "Continuously learning and adapting to new technologies and frameworks to stay current in the ever-evolving field of web development.",
    },
  ];

  const educationDetails = [
    {
      id: 1,
       name: "MCA",
       discription: "From INNOCENT HEART INSTITUTE OF MANAGEMENT & TECHNOLGY JALANDHAR | 2012-2015 | Completed",
       img :  mca,
       year: "2012-2015",
       status : "COMPLETED",
    },
    {
      id: 2,
      name: "BCA ",
       discription: "From SATYAM INSTITUTE OF MANAGEMENT & TECHNOLGY NAKODAR",
       img :  bca,
       year: "2009-2012",
       status : "COMPLETED",
    },
  
     
  ];






  return (
  <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div>
 <h1 className="text-red-600 font-semibold text-2xl mb-2 hover:scale-110 duration-200  cursor-pointer">About</h1>
   <p className="text-justify"> 
   Hello! I'm Amit Kumar, a passionate web developer with 8 years of experience in creating dynamic and user-friendly websites. My journey in web development began with HTML, CSS, and JavaScript, and over the years, I've mastered various technologies including PHP, WordPress, CodeIgniter, and Laravel.<br></br><br></br>

Recently, I've been diving into the world of modern JavaScript frameworks, focusing on the MERN stack, with a special interest in React. I'm excited about building scalable and performant web applications and continuously expanding my skill set to keep up with the latest trends in web development.<br></br><br></br>

Whether it's crafting beautiful interfaces or optimizing backend processes, I am always eager to take on new challenges and push the boundaries of what's possible on the web.<br></br><br></br>
    </p>   

         
        
<hr />
        <br />


        <div className="flex space-x-1 text-1xl md:text-2xl">
        <h1 className="text-red-600 font-semibold text-2xl mb-2 flex mt-2 gap-2 hover:scale-110 duration-200  cursor-pointer"> <PiGraduationCapFill className="hover:scale-110 duration-200 rounded-full  mt-1 cursor-pointer"  /><span> Education & Training </span>

</h1>
        </div>
        
{/* Education Section  */}
<div name="About"  >
      <div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-30 gap-y-10 mt-10 my-2 mb-20">
          {educationDetails.map(({ id, discription, name , img,year,status}) => (
            <div
              className="w-full md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 margin-bottom: 10px ;"
              key={id}
            >
               
              <div>
                <img className="h-25 w-full" src={img} alt="" />
                <div className="text-center px-2 font-bold text-xl   mb-2 ">{name}</div>
                <p className="text-center px-2 text-black mb-5">
                {discription}                
                </p>
                <p className="text-center px-2 text-green-600 mb-5 font-semibold text-xl ">
                {year} | {status}                
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>  



    <hr />
    <br />

{/* Education Section end here  */}
     
      {/* skill section start here  */}
      <div name="About"  >

      <div className="flex space-x-1 text-1xl md:text-2xl">
        <h1 className="text-red-600 font-semibold text-2xl mb-2 flex mt-2 gap-2 hover:scale-110 duration-200  cursor-pointer"> <IoCodeSlashSharp className="hover:scale-110 duration-200 rounded-full  mt-1 cursor-pointer"  />
         <span> Skills & Expertise </span><br/>
        

</h1>
        </div>
       
          <div>
      <h1 className="text-red-600 font-semibold text-2xl mb-2 flex mt-2 gap-2 hover:scale-110 duration-200  cursor-pointer"> </h1>

         
        <div className="grid grid-cols-1 md:grid-cols-3 gap-30 gap-y-10 mt-10 my-2 mb-20">
          {cardItem.map(({ id, discription, name }) => (
            <div
              className="w-full md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 margin-bottom: 10px ;"
              key={id}
            >
               
              <div>
                <div className="text-center px-2 font-bold text-xl mt-10 mb-4 margin-top: 15px;">{name}</div>
                <p className="text-justify px-2 text-gray-700 mb-5">
                {discription}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>  

      {/* skill section end here  */}
         
       
      <hr />
      <br />

{/* Achivment section start here  */}


<div className="flex space-x-1 text-1xl md:text-2xl">
        <h1 className="text-red-600 font-semibold text-2xl mb-2 flex mt-2 gap-2 hover:scale-110 duration-200  cursor-pointer"> <FaAward  className="hover:scale-110 duration-200 rounded-full  mt-1 cursor-pointer"  />
         <span> Achievements & Awards</span>
 
</h1>
</div>
<div className=" max-w-screen-2xl container mx-auto px-4 md:px-20  border-2 rounded-lg shadow-lg p-8">  
 
        <span> 
        
        <h3  className="text-1xl font-bold mb-3">EMPLOYE OF THE MONTH</h3>
        <p className="text-justify"> 10 GAMING STUDIO
        Recognized as Employee of the MONTH for exceptional contributions to web development projects, consistently delivering high-quality code, and enhancing user experience across multiple platforms.</p>

        </span>
        <br />
        <br />
        <hr />
        <span>
        <h3  className="text-1xl font-bold mt-6 mb-4 "> CERTIFIED GOOLGE ADS CERTIFICATION</h3>
        <p className="text-justify"> <b>SKILL NATION — 2022 </b>
Successfully completed a certification program in GOOGLE ADS , gaining in-depth knowledge of modern technologies such as the Search ads, Call Ads, Lead Genration, and applying best practices in Live projects.</p>
        </span>
        <br />
     
     
        <br />
       
</div>
<hr />
{/* Achivment section end here  */}
       
      </div>
     
      
    </div>
  );
}

export default About;
