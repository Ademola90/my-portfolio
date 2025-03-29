import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="bg-gradient-to-b from-indigo-500 to-indigo-700 text-white">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Certificates />
      <Contact />
      <SocialLinks />

      <footer className="text-center py-6 text-white/80 text-sm">
        © {new Date().getFullYear()} Ademola Abdullahi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;








// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import SocialLinks from './SocialLinks';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
// import Certificates from './components/Certificates';



// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home />

//       <About />
//       <Portfolio />
//       <Experience />
//       <Certificates />
//       <Contact />

//       <SocialLinks />
//     </div>
//   );
// }

// export default App;
