import React from "react";
import HomePic from "../assets/office picture.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-100vh w-full bg-indigo-500">
      <div className=" lg:flex pt-40 lg:gap-48 md:gap-20 gap-20 mx-auto  items-center justify-center h-full px-16 md:grid">
        <div className="flex flex-col  justify-center h-full">
          <h2 className="text-2xl sm:text-5xl font-bold text-white">
            {/* I am a Full Stack Developer */}
            Hi, <br />
            I'm Abdullahi <br />
            web developer
          </h2>
          <p className="text-black lg:py-4 md:py-8 py-4 max-w-md">
            I have 4 years of experience in front-end web development,
            specializing in building and designing web applications using
            technologies such as React JS, JavaScript, CSS, and Tailwind CSS...
          </p>

          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-indigo-500 font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-white cursor-pointer"
            >
              CONTACT ME
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            src={HomePic}
            alt="description"
            className="rounded-2xl lg:h-[400px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
