import "./About.css";
import { GiGraduateCap } from "react-icons/gi";
import { BsPeopleFill, BsFillTrophyFill } from "react-icons/bs";

function About() {
  return (
    <div id="about">
      <h2 className="text-center font-mono m-10 text-orchid">About Me</h2>
      <div className="container text-center px-12 sm:px-36 flex flex-col lg:flex-row items-stretch font-mono">
        <div className="box-outline basis-1/3 m-3 ">
          <div className="box-header">
            <GiGraduateCap className="icon" />
            <h3>Degree</h3>
          </div>
          <p>BS (Hons) Computer Science</p>
          <p>
            <i>University of Toronto</i>
          </p>
          <p>cGPA: 3.49/4.0</p>
        </div>
        <div className="box-outline basis-1/3 m-3">
          <div className="box-header">
            <BsFillTrophyFill className="icon" />
            <h3>Highlights</h3>
          </div>
          <p>* deCODE Participant - 1Password</p>
          <p>* Scarborough Dining 1st Place</p>
          <p>* RBC Innovation 3rd Place</p>
        </div>
        <div className="box-outline basis-1/3 m-3">
          <div className="box-header">
            <BsPeopleFill className="icon" />
            <h3>Currently</h3>
          </div>
          <p>Seeking full-time employment!</p>
        </div>
      </div>
      <div className="container px-20 py-10 sm:px-40 md:px-52 flex flex-col lg:flex-row items-stretch font-mono">
        <p>
          I have expertise in full stack and web development from various school
          and personal projects, as well as a love for designing and building
          things on the web. I have contributed to and built many large-scale
          applications, ranging from database setup and management, API creation
          and maintenance, frontend design and development, and testing. I have
          worked in various teams in an agile setting, from both a developer and
          leadership standpoint. I am excited to apply my skills and knowledge
          to new and exciting opportunities.
        </p>
      </div>
    </div>
  );
}

export default About;
