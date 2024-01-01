import React from "react";
import certf from "../assets/andela certificate pic.png";

const Certificates = () => {
  const cert = [
    {
      id: 1,
      img: certf,
      title: "HTML",
      //   style: "shadow-orange-500",
    },
  ];
  return (
    <div name="certificate" className="bg-indigo-500 w-full h-100vh pt-24">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Certificate
          </p>
          <p className="py-6">
            I have earned a certificate in the following technologies
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {cert.map(({ id, img, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105  duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={img} alt="" className="w-full mx-auto" />
              {/* <p className="mt-4">{title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
