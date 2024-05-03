import Buttons from "./Buttons";
import "./Header.css";
import headshot from "../../assets/headshot.png";

function Header() {
  return (
    <header id="home">
      <div className="container p-20 text-center font-mono">
        <h3 className="text-white p-5">Hello, I'm</h3>
        <h1 className="text-orchid p-10">Winnie Lam</h1>
        <h4 className="text-white">Full-Stack Software Engineer</h4>
        <img
          src={headshot}
          alt="headshot"
          className="mx-auto mb-5 md:max-w-sm lg:max-w-md"
        />
        <Buttons />
      </div>
    </header>
  );
}

export default Header;
