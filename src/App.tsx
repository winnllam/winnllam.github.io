import React from "react";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const Hr: React.FC = () => (
  <hr className="w-48 h-1 mx-auto my-4 bg-pink border-0 rounded" />
);

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Hr />
      <About />
      <Hr />
      <Experience />
      <Hr />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
