import "./Header.css";
import { BsLinkedin, BsGithub, BsBrushFill } from "react-icons/bs";

function Socials() {
  return (
    <div className="socials text-white text-xl flex flex-col items-center gap-5 fixed bottom-10 left-3 sm:left-auto">
      <a
        href="https://www.linkedin.com/in/winnllam"
        target="_blank"
        rel="noreferrer"
        className="social"
      >
        <BsLinkedin className="icon" />
      </a>
      <a
        href="https://github.com/winnllam"
        target="_blank"
        rel="noreferrer"
        className="social"
      >
        <BsGithub className="icon" />
      </a>
      <a
        href="https://www.artstation.com/llunamous"
        target="_blank"
        rel="noreferrer"
        className="social"
      >
        <BsBrushFill className="icon" />
      </a>
    </div>
  );
}

export default Socials;
