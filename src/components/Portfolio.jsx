import React from "react";
import nigTilling from "../assets/portfolio/nig_tiling.jpg";
import portfo from "../assets/portfolio/portfolioImg.png";
import { FaGithub, FaGlobe } from "react-icons/fa";
const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: nigTilling,
      demo: "https://tiling-company.vercel.app/",
      github: "https://github.com/Ademola90/Tiling-company.git",
    },
    {
      id: 2,
      src: portfo,
      demo: "https://my-portfolio-3dpqo87kk-ademolaabdullahi989-gmailcom.vercel.app",
      github: "https://github.com/Ademola90/my-portfolio",
    },
    {
      id: 3,
      src: nigTilling,
      demo: "https://github.com/Ademola90/random-user.git",
      github: "https://github.com/Ademola90/Tiling-company.git",
    },
    {
      id: 4,
      src: nigTilling,
      demo: "https://github.com/Ademola90/random-user.git",
      github: "https://github.com/Ademola90/Tiling-company.git",
    },
    {
      id: 5,
      src: nigTilling,
      demo: "https://github.com/Ademola90/random-user.git",
      github: "https://github.com/Ademola90/Tiling-company.git",
    },
    {
      id: 6,
      src: nigTilling,
      demo: "https://github.com/Ademola90/random-user.git",
      github: "https://github.com/Ademola90/Tiling-company.git",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-indigo-500 w-full text-white md:h-100vh pt-24"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-6">
          {portfolio.map(({ id, src, demo, github }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 bg-black rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={github}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <FaGithub />
                </a>

                <a
                  href={demo}
                  className=" w-1/2 px-6 py-3 pl-20 m-4 duration-200 hover:scale-105"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
