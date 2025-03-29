import React from "react";
import certf from "../assets/andela certificate pic.png";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      img: certf,
      title: "Andela Technical Leadership Program",
      issuer: "Andela",
      date: "2022",
      description:
        "Certification in technical leadership and software development best practices",
    },
    // You can add more certificates here as you earn them
  ];

  return (
    <div name="certificate" className="w-full min-h-screen bg-indigo-500 py-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-300 p-2 inline">
            Certifications
          </p>
          <p className="py-6 text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {certificates.map(({ id, img, title, issuer, date, description }) => (
            <div
              key={id}
              className="bg-black/20 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={img || "/placeholder.svg"}
                  alt={title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white/90">{description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <div className="flex justify-between items-center mt-2 text-white/80">
                  <p>{issuer}</p>
                  <p>{date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add a section for skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Additional Skills & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">State Management</h4>
              <p>
                Advanced proficiency in Redux, Redux Toolkit, and Zustand for
                efficient state management in React applications
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">TypeScript</h4>
              <p>
                Expert in TypeScript for building type-safe, maintainable, and
                scalable applications
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Responsive Design</h4>
              <p>
                Skilled in creating fully responsive websites that work
                seamlessly across all devices and screen sizes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

// import React from "react";
// import certf from "../assets/andela certificate pic.png";

// const Certificates = () => {
//   const cert = [
//     {
//       id: 1,
//       img: certf,
//       title: "HTML",
//       //   style: "shadow-orange-500",
//     },
//   ];
//   return (
//     <div name="certificate" className="bg-indigo-500 w-full h-100vh pt-24">
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Certificate
//           </p>
//           <p className="py-6">
//             I have earned a certificate in the following technologies
//           </p>
//         </div>

//         <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {cert.map(({ id, img, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105  duration-500 py-2 rounded-lg ${style}`}
//             >
//               <img src={img} alt="" className="w-full mx-auto" />
//               {/* <p className="mt-4">{title}</p> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificates;
