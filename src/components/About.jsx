import React from "react";
import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-indigo-500 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            About Me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 my-8">
          <div className="bg-black/20 p-6 rounded-lg hover:bg-black/30 transition-colors">
            <FaCode className="text-4xl mb-4 text-white/90" />
            <h3 className="text-xl font-bold mb-2">Full-Stack Web Developer</h3>
            <p className="text-white/80">
              Specializing in modern web technologies including React, Next.js,
              and Node.js to build responsive and performant applications.
            </p>
          </div>

          <div className="bg-black/20 p-6 rounded-lg hover:bg-black/30 transition-colors">
            <FaLaptopCode className="text-4xl mb-4 text-white/90" />
            <h3 className="text-xl font-bold mb-2">Frontend Expert</h3>
            <p className="text-white/80">
              Creating beautiful, intuitive user interfaces with JavaScript,
              TypeScript, and modern CSS frameworks like Tailwind.
            </p>
          </div>

          <div className="bg-black/20 p-6 rounded-lg hover:bg-black/30 transition-colors">
            <FaUserGraduate className="text-4xl mb-4 text-white/90" />
            <h3 className="text-xl font-bold mb-2">Mentor</h3>
            <p className="text-white/80">
              Passionate about teaching and mentoring new developers, sharing
              knowledge through training sessions and workshops.
            </p>
          </div>
        </div>

        <div className="text-lg leading-relaxed space-y-4 mt-4">
          <p>
            Welcome to my portfolio! I'm{" "}
            <span className="font-bold">Ademola Abdullahi</span>, a passionate
            Full-Stack Web Developer with over 5 years of experience creating
            websites and web apps that are both functional and easy to use. My
            journey into web development started in college, and since then,
            I've been dedicated to learning, improving, and building solutions
            that make a difference.
          </p>

          <p>
            I work on both the front-end and back-end of web development. I'm
            skilled in HTML, CSS, JavaScript, TypeScript, React.js, Node.js,
            Redux, Redux Toolkit, Zustand, and Tailwind CSS, and I enjoy
            creating clean and interactive designs that work well on any device.
            I've also worked on back-end systems like APIs and databases to make
            sure everything runs smoothly behind the scenes.
          </p>

          <p>
            When it comes to state management, I've worked extensively with
            tools like Redux and Redux Toolkit for scalable applications, and I
            also use Zustand for lightweight state management in smaller
            projects. Using TypeScript has helped me write more reliable code,
            making projects easier to scale and maintain.
          </p>

          <p>
            One thing I care about is making sure the websites I build are not
            just nice to look at but also fast, responsive, and easy to
            navigate. I like working closely with clients to understand their
            needs and bring their ideas to life. I make sure to communicate
            clearly and deliver projects on time.
          </p>

          <p>
            Apart from building websites, I also teach and mentor new
            developers. I've organized training sessions on HTML, CSS,
            JavaScript, TypeScript, and React.js, helping others kickstart their
            journey in tech. I love learning and keeping up with the latest web
            development trends. When I'm not coding, you'll probably find me
            exploring new tech or sharing knowledge with others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div name="about" className="w-full h-100vh bg-indigo-500 text-white pt-24">
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             About
//           </p>
//         </div>
//         <p className=" mt-10">
//           Welcome to my portfolio <b>!</b> I’m <b>Ademola Abdullahi</b>, a
//           passionate Full-Stack Web Developer with over 5 years of experience
//           creating websites and web apps that are both functional and easy to
//           use. My journey into web development started in college, and since
//           then, I’ve been dedicated to learning, improving, and building
//           solutions that make a difference. I work on both the front-end and
//           back-end of web development. I’m skilled in HTML, CSS, JavaScript,
//           TypeScript, React.js, Node.js, Redux, Redux Toolkit, Zustand, and
//           Tailwind CSS, and I enjoy creating clean and interactive designs that
//           work well on any device. I’ve also worked on back-end systems like
//           APIs and databases to make sure everything runs smoothly behind the
//           scenes. When it comes to state management, I’ve worked extensively
//           with tools like Redux and Redux Toolkit for scalable applications, and
//           I also use Zustand for lightweight state management in smaller
//           projects. Using TypeScript has helped me write more reliable code,
//           making projects easier to scale and maintain. One thing I care about
//           is making sure the websites I build are not just nice to look at but
//           also fast, responsive, and easy to navigate. I like working closely
//           with clients to understand their needs and bring their ideas to life.
//           I make sure to communicate clearly and deliver projects on time.
//         </p>
//         <br />
//         <p className="">
//           Apart from building websites, I also teach and mentor new developers.
//           I’ve organized training sessions on HTML, CSS, and JavaScript,
//           TypeScript, and React.js, helping others kickstart their journey in
//           tech. I love learning and keeping up with the latest web development
//           trends. When I’m not coding, you’ll probably find me exploring new
//           tech or sharing knowledge with others.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
