import React from "react";
import HomePic from "../assets/office picture.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-indigo-500 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:flex items-center justify-between gap-12">
          <div className="flex flex-col justify-center lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, <br />
              I'm Abdullahi <br />
              <span className="text-white/90">Web Developer</span>
            </h1>

            <p className="text-white/80 py-6 max-w-md text-lg">
              I have over 5 years of experience in front-end web development,
              specializing in building and designing modern web applications
              using Node.js, React.js, JavaScript, TypeScript, CSS, Tailwind
              CSS, and state management tools like Redux, Redux Toolkit, and
              Zustand.
            </p>

            <div className="flex gap-4 mt-2">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group bg-white text-indigo-600 font-bold px-6 py-3 rounded-md flex items-center gap-1 hover:bg-indigo-100 transition-all cursor-pointer"
              >
                VIEW WORK
                <span className="group-hover:translate-x-1 duration-200">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </Link>

              <Link
                to="contact"
                smooth
                duration={500}
                className="group border-2 border-white text-white font-bold px-6 py-3 rounded-md flex items-center gap-1 hover:bg-white/10 transition-all cursor-pointer"
              >
                CONTACT ME
                <span className="group-hover:rotate-90 duration-200">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img
              src={HomePic || "/placeholder.svg"}
              alt="Ademola Abdullahi"
              className="rounded-2xl w-full max-w-md mx-auto shadow-xl hover:scale-[1.02] transition-transform duration-300 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import HomePic from "../assets/office picture.jpg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div name="home" className="h-100vh w-full bg-indigo-500">
//       <div className=" lg:flex pt-40 lg:gap-48 md:gap-20 gap-20 mx-auto  items-center justify-center h-full px-16 md:grid">
//         <div className="flex flex-col  justify-center h-full">
//           <h2 className="text-2xl sm:text-5xl font-bold text-white">
//             {/* I am a Full Stack Developer */}
//             Hi, <br />
//             I'm Abdullahi <br />
//             web developer
//           </h2>
//           <p className="text-black lg:py-4 md:py-8 py-4 max-w-md">
//             I have over 5 years of experience in front-end web development,
//             specializing in building and designing modern web applications using
//             Node.js React.js, JavaScript, TypeScript, CSS, Tailwind CSS, and
//             state management tools like Redux, Redux Toolkit, and Zustand."
//           </p>

//           <div>
//             <Link
//               to="contact"
//               smooth
//               duration={500}
//               className="group text-indigo-500 font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white cursor-pointer"
//             >
//               CONTACT ME
//               <span className="group-hover:rotate-90 duration-200">
//                 <MdOutlineKeyboardArrowRight size={25} />
//               </span>
//             </Link>
//           </div>
//         </div>

//         <div className="">
//           <img
//             src={HomePic}
//             alt="description"
//             className="rounded-2xl lg:h-[400px] "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
