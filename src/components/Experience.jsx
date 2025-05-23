import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import typescript from "../assets/typescript.png"; 

const Experience = () => {
  const techs = [
    {
      id: 1,
      img: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      img: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      img: tailwind,
      title: "Tailwind",
      style: "shadow-blue-400",
    },
    {
      id: 4,
      img: javascript,
      title: "JavaScript",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      img: typescript,
      title: "TypeScript",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      img: reactImage,
      title: "React.js",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      img: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 8,
      img: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-indigo-500 py-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-300 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-lg">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, img, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg bg-black/80 ${style}`}
            >
              <img
                src={img || "/placeholder.svg"}
                alt={title}
                className="w-20 mx-auto"
              />
              <p className="mt-4 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

// import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import tailwind from "../assets/tailwind.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
// import node from "../assets/node.png";

// const Experience = () => {
//   const techs = [
//     {
//       id: 1,
//       img: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       img: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 3,
//       img: tailwind,
//       title: "Tailwind",
//       style: "shadow-blue-400",
//     },
//     {
//       id: 4,
//       img: javascript,
//       title: "JavaScript",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 5,
//       img: reactImage,
//       title: "React js",
//       style: "shadow-blue-400",
//     },
//     {
//       id: 6,
//       img: nextjs,
//       title: "Next js",
//       style: "shadow-white",
//     },
//     {
//       id: 7,
//       img: node,
//       title: "Node js",
//       style: "shadow-green-400",
//     },
//   ];
//   return (
//     <div name="experience" className="bg-indigo-500 w-full h-100vh pt-24">
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Experience
//           </p>
//           <p className="py-6">These are the technology i've worked with</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {techs.map(({ id, img, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 bg-black duration-500 py-2 rounded-lg ${style}`}
//             >
//               <img src={img} alt="" className="w-20 mx-auto" />
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
