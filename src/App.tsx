import React from "react";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <hr className="w-48 h-1 mx-auto my-4 bg-pink border-0 rounded md:mt-10 md:mb-20" />
      <About />
      <hr className="w-48 h-1 mx-auto my-4 bg-pink border-0 rounded md:mt-10 md:mb-20" />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
