import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useEffect, useState } from "react";

function useActiveSection(sections: string[], initialSection: string) {
  const [activeSection, setActiveSection] = useState<string>(initialSection);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.querySelector(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  return [activeSection, setActiveSection] as const;
}

function Navigation() {
  const sections = ["#home", "#about", "#experience", "#projects", "#contact"];
  const [active, setActive] = useActiveSection(sections, "#home");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActive("#home")}
        className={active === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <MdOutlineWorkOutline />
      </a>
      <a
        href="#projects"
        onClick={() => setActive("#projects")}
        className={active === "#projects" ? "active" : ""}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navigation;
