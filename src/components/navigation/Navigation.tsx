import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

function Navigation() {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
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
        href="#contacts"
        onClick={() => setActive("#contacts")}
        className={active === "#contacts" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navigation;
