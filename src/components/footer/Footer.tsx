import "./Footer.css";
import { BsLinkedin, BsGithub, BsBrushFill } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer" className="bg-pink text-black z-50">
      <div className="container p-20 text-center font-mono">
        <h2>Winnie Lam</h2>
        <h4>winnie.lam540@gmail.com</h4>
        <div className="width-fit mt-10 mb-10 text-3xl flex flex-row gap-10 justify-center">
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
        <p>Created with ❤️ by Winnie Lam</p>
      </div>
    </footer>
  );
}

export default Footer;
