import React from "react";
// import html from "../../public/html.png";
// import css from "../../public/css.jpg";
// import java from "../../public/java.png";
// import javascript from "../../public/javascript.png";
// import oracle from "../../public/oracle.png";
// import spring from "../../public/spring.png";
// import springBoot from "../../public/springBoot.jpg";
import { GrUserExpert } from "react-icons/gr";
function Experiance() {
  // const cardItem = [
  //   {
  //     id: 1,
  //     logo: html,
  //     name: "MongoDB",
  //   },
  //   {
  //     id: 2,
  //     logo: css,
  //     name: "CSS",
  //   },
  //   {
  //     id: 3,
  //     logo: java,
  //     name: "Java",
  //   },
  //   {
  //     id: 4,
  //     logo: javascript,
  //     name: "JavaScript",
  //   },
  //   {
  //     id: 5,
  //     logo: oracle,
  //     name: "Oracle",
  //   },
  //   {
  //     id: 6,
  //     logo: spring,
  //     name: "Spring",
  //   },
  //   {
  //     id: 7,
  //     logo: springBoot,
  //     name: "Spring Boot",
  //   },
  // ];

  const experieceItem = [
    {
      id: 1,
      designation:"Designation : Senior Web Developer",
      name: "Company Name: Younic Tech - Jalandhar City",
      years: "Years: 2017 – Present",
       discription: "Leading the development of web applications using modern technologies such as Php, WordPress, Lararvel, Codeigniter, React.js and the MERN stack. Collaborating with cross-functional teams to design and implement user-centric features and functionalities. Optimizing web applications for maximum speed and scalability. Mentoring junior developers and conducting code reviews to maintain high-quality standards.",
    },
    {
      id: 2,
      designation:"Designation : Web Developer",
      name: "Company Name: 10Gaming Studio — Mohali",
      years: "Years: 2015– 2017",
       discription: "Developed and maintained responsive websites using HTML, CSS, JavaScript, PHP, and WordPress. Implemented custom themes and plugins in WordPress to meet client-specific needs and enhance website functionality. Worked with back-end technologies, including Laravel and CodeIgniter, to build robust server-side applications. Improved website performance by optimizing code and leveraging caching techniques, resulting in faster load times and better user experience.",
    },
  ];


  return (

    <div name="Experiance"className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"> 
    <div> <br />
      <div className="flex space-x-1 text-1xl md:text-2xl">
        <h1 className="text-red-600 font-semibold text-2xl mb-2 flex mt-2 gap-2 hover:scale-110 duration-200  cursor-pointer"> <GrUserExpert  className="hover:scale-110 duration-200 rounded-full  mt-1 cursor-pointer"  />
         <span> Professional Experience</span>
 
</h1>
</div>
 

   {/* Apply margin-bottom to the whole grid container */}

   <div className=" max-w-screen-2xl container mx-auto px-4 md:px-20  border-2 rounded-lg shadow-lg p-8">  
   <div  >
   <div  >
     {experieceItem.map(({ id, designation, discription, name, years }) => (
       <div
         
         key={id}
       >
         {/* Each item now has margin-bottom */}
         <div className="mb-20">
           <div className="  px-2 font-bold text-xl mb-2">{designation}</div>
           <div className=" px-2 font-bold text-xl mb-2  text-red-600">{name}</div>
           <div className="  px-2 font-bold text-xl mb-2  text-green-600">{years}</div>
           <p className="text-justify px-2 font-semibold text-black-600">{discription}</p>
          
         </div>
         <hr />
         <br />
       </div>
     ))}
   </div>
</div>

    </div>




  
 </div>
 <hr />
 </div>

 
  );
}

export default Experiance;
