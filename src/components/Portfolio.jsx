import React, { useState } from "react";
import { FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";

// Import all your project images
import georolodeximg from "../assets/georolodeximg.png";
import boedimage from "../assets/boedimage.png";
import apeximg from "../assets/apeximg.png";
import africohubimg from "../assets/africohubimg.png";
import nextrendimg from "../assets/nextrendimg.png";
import cefcodev from "../assets/cefcodev.png";
import beekayimg from "../assets/beekayimg.png";
import asbeimg from "../assets/asbeimg.png";
import portfo from "../assets/portfolio/portfolioImg.png";
import glob from "../assets/glob.png";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const portfolio = [
    {
      id: 1,
      src: georolodeximg,
      demo: "https://www.geo-rolodex.com/",
      title: "Geo-Rolodex Website",
      description:
        "A comprehensive contact management system with geolocation features.",
    },
    {
      id: 2,
      src: apeximg,
      demo: "https://de-apex-autos.vercel.app/",
      title: "De-Apex Autos Website",
      description:
        "A modern automobile dealership website with inventory management.",
    },
    {
      id: 3,
      src: africohubimg,
      demo: "https://afriko.vercel.app/",
      title: "Africo Hub Website",
      description:
        "A platform to download premium African contents for your use",
    },
    {
      id: 4,
      src: asbeimg,
      demo: "https://www.asbeglobal.com/",
      title: "ASBE Website",
      description:
        "Website Motivate individuals, Energise ability, discover talents, Spring out innovations, grow entrepreneurs, develop trainers and mentors.",
    },
    {
      id: 5,
      src: boedimage,
      demo: "https://boed-energy.vercel.app/",
      title: "BOED-Energy Website",
      description:
        "Energy company website with interactive features and service listings.",
    },
    {
      id: 6,
      src: cefcodev,
      demo: "https://www.cefcodev.com/",
      title: "Cefcodev Website",
      description:
        "CEFCODEV website provides swift disaster relief and humanitarian support, mobilizing resources to assist communities in crisis.",
    },
    {
      id: 7,
      src: glob,
      demo: "https://real-estate-agent-two.vercel.app/",
      title: "Real Estate Agent Website",
      description:
        "Property listing and real estate agent platform with search functionality.",
    },
    {
      id: 8,
      src: nextrendimg,
      demo: "",
      title: "Nextrend Website",
      description: "Nextrend website for ordering your favorite food.",
    },
    {
      id: 9,
      src: portfo,
      demo: "https://my-portfolio-edvj4nl02-ademolaabdullahi989-gmailcom.vercel.app",
      title: "My Portfolio",
      description: "Personal portfolio website showcasing skills and projects.",
    },
    {
      id: 10,
      src: beekayimg,
      demo: "https://beekay.vercel.app/",
      title: "Beekay Website",
      description:
        "Music website with product catalog and service information.",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen bg-indigo-500 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <p className="py-6 text-lg">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolio.map(({ id, src, demo, title, description }) => (
            <div
              key={id}
              className="bg-black/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={src || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold truncate">{title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() =>
                      setActiveProject(id === activeProject ? null : id)
                    }
                    className="text-sm flex items-center gap-1 text-indigo-200 hover:text-white transition-colors"
                  >
                    <FaInfoCircle />{" "}
                    {activeProject === id ? "Hide details" : "View details"}
                  </button>

                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded flex items-center gap-1 transition-colors"
                    >
                      <FaGlobe /> Visit
                    </a>
                  )}
                </div>

                {activeProject === id && (
                  <div className="mt-3 text-sm text-white/80 animate-fadeIn">
                    {description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// import React from "react";
// import nigTilling from "../assets/portfolio/nig_tiling.jpg";
// import portfo from "../assets/portfolio/portfolioImg.png";
// import gymm from "../assets/portfolio/gymImg.png";
// import getAdvice from "../assets/getAdvice.png";
// import glob from "../assets/glob.png";
// import roundom from "../assets/roundom.png";
// import { FaGithub, FaGlobe } from "react-icons/fa";
// import georolodeximg from "../assets/georolodeximg.png";
// import boedimage from "../assets/boedimage.png";
// import apeximg from "../assets/apeximg.png";
// import africohubimg from "../assets/africohubimg.png";
// import nextrendimg from "../assets/nextrendimg.png";
// import cefcodev from "../assets/cefcodev.png";
// import beekayimg from "../assets/beekayimg.png";
// import asbeimg from "../assets/asbeimg.png";

// const Portfolio = () => {
//   const portfolio = [
//     {
//       id: 1,
//       src: georolodeximg,
//       demo: "https://www.geo-rolodex.com/",
//       title: "geo-rolodex website",
//     },
//     {
//       id: 2,
//       src: apeximg,
//       demo: "https://de-apex-autos.vercel.app/",
//       title: "De-apex autos website",
//     },
//     {
//       id: 3,
//       src: africohubimg,
//       demo: "https://afriko.vercel.app/",
//       title: "AFRICO HUB WEBSITE",
//     },
//     {
//       id: 4,
//       src: asbeimg,
//       demo: "https://www.asbeglobal.com/",
//       title: "ASBE WEBSITE",
//     },
//     {
//       id: 5,
//       src: boedimage,
//       demo: "https://boed-energy.vercel.app/",
//       title: "BOED-ENERGY WEBSITE",
//     },
//     {
//       id: 6,
//       src: cefcodev,
//       demo: "https://www.cefcodev.com/",
//       title: "Cefcodev Website",
//     },
//     {
//       id: 7,
//       src: glob,
//       demo: "https://real-estate-agent-two.vercel.app/",
//       title: "Real Estate Agent Website",
//       // github: "https://github.com/Ademola90/real-estate-agent.git",
//     },
//     {
//       id: 8,
//       src: nextrendimg,
//       demo: "",
//       title: "NEXTREND WEBSITE",
//       // github: "https://github.com/Ademola90/real-estate-agent.git",
//     },

//     {
//       id: 9,
//       src: portfo,
//       demo: "https://my-portfolio-edvj4nl02-ademolaabdullahi989-gmailcom.vercel.app",
//       title: "My Portfolio",
//     },
//     {
//       id: 9,
//       src: beekayimg,
//       demo: "https://beekay.vercel.app/",
//       title: "BEEKAY WEBSITE",
//       // github: "https://github.com/Ademola90/my-portfolio",
//     },

//     // {
//     //   id: 7,
//     //   src: getAdvice,
//     //   demo: "https://get-advice-pwud80aff-ademolaabdullahi989-gmailcom.vercel.app",
//     //   github: "https://github.com/Ademola90/getAdvice-app",
//     // },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-indigo-500 w-full text-white md:h-100vh pt-24"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-6">
//           {portfolio.map(({ id, src, demo, github, title }) => (
//             <div
//               key={id}
//               className="shadow-md shadow-gray-600 bg-black rounded-lg"
//             >
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-between p-5">
//                 <p className=" text-sm  truncate">{title}</p>
//                 <a href={demo} className="   duration-200 hover:scale-105">
//                   <FaGlobe />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
