import "./Header.css";
import Buttons from "./Buttons";
import Socials from "./Socials";
import headshot from "../../assets/headshot.png";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <header id="home">
      <div className="container p-20 text-center font-mono">
        <h3 className="text-white p-5">Hello, I'm</h3>
        <h1 className="text-orchid p-10">Winnie Lam</h1>
        <h4 className="text-white">
          <i>
            <Typewriter
              options={{
                strings: [
                  "Full-stack Software Engineer",
                  "Open Source Contributor",
                  "Hobbyist Artist",
                  "Eternal Learner",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 30,
              }}
            />
          </i>
        </h4>
        <img
          src={headshot}
          alt="headshot"
          className="mx-auto mb-5 md:max-w-sm lg:max-w-md"
        />
        <Socials />
        <Buttons />
      </div>
    </header>
  );
}

export default Header;
