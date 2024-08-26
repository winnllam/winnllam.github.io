import "./About.css";
import { FC, useCallback, useEffect, useState } from "react";
import GitHubCalendar, { Activity, ThemeInput } from "react-github-calendar";
import { isAfter, subMonths } from "date-fns";
import { SKILLS as skills, TOOLS as tools } from "./tools";
import { GiGraduateCap } from "react-icons/gi";
import { BsFillTrophyFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const Icons = { ...DiIcons, ...FaIcons, ...SiIcons };

interface IconProps {
  name: string;
  icon: string;
  type: string;
}

const IconCard: FC<IconProps> = ({ name, icon, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = Icons[`${type}${icon}` as keyof typeof Icons];

  if (!IconComponent) {
    return null;
  }

  return (
    <div
      className="box-outline-orchid m-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <span className="text-xs md:text-lg">{name}</span>
      ) : (
        <IconComponent className="text-3xl md:text-6xl" />
      )}
    </div>
  );
};

const breakpoints = [
  { maxWidth: 480, shownMonths: 3 },
  { maxWidth: 768, shownMonths: 6 },
  { maxWidth: 1024, shownMonths: 9 },
  { maxWidth: Infinity, shownMonths: 12 },
];

function About() {
  const [shownMonths, setShownMonths] = useState(3);

  useEffect(() => {
    const updateShownMonths = () => {
      const width = window.innerWidth;
      for (let i = 0; i < breakpoints.length; i++) {
        const { maxWidth } = breakpoints[i];
        if (width <= maxWidth) {
          setShownMonths(breakpoints[i].shownMonths);
          break;
        }
      }
    };

    updateShownMonths();

    window.addEventListener("resize", updateShownMonths);
    return () => window.removeEventListener("resize", updateShownMonths);
  }, []);

  const filterDataFn = useCallback(
    (activities: Activity[]) => {
      const firstDate = subMonths(new Date(), shownMonths);

      return activities.filter((activity) => {
        return isAfter(activity.date, firstDate);
      });
    },
    [shownMonths]
  );

  const explicitTheme: ThemeInput = {
    dark: ["#383838", "#F6C0D0"],
  };

  return (
    <div id="about">
      <h2 className="text-center font-mono m-10 text-orchid">About Me</h2>
      <div className="container text-center px-12 sm:px-36 flex flex-col lg:flex-row items-stretch font-mono">
        <div className="box-outline basis-1/3 m-3 ">
          <div className="box-header">
            <GiGraduateCap className="highlight-icon" />
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
            <BsFillTrophyFill className="highlight-icon" />
            <h3>Highlights</h3>
          </div>
          <p>* deCODE Participant - 1Password</p>
          <p>* Scarborough Dining 1st Place</p>
          <p>* RBC Innovation 3rd Place</p>
        </div>
        <div className="box-outline basis-1/3 m-3">
          <div className="box-header">
            <BiCurrentLocation className="highlight-icon" />
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
      <div className="container py-10 flex justify-center text-white">
        <GitHubCalendar
          username="winnllam"
          colorScheme="dark"
          theme={explicitTheme}
          blockRadius={5}
          hideTotalCount
          transformData={filterDataFn}
        />
      </div>
      <div className="container px-12 sm:px-36 flex flex-col items-center font-mono">
        <h3>Skill Set</h3>
        <div className="flex flex-wrap justify-center items-center w-full">
          {skills.map((item) => (
            <IconCard name={item.name} icon={item.icon} type={item.type} />
          ))}
        </div>
      </div>
      <div className="container px-12 my-10 sm:px-36 flex flex-col items-center font-mono">
        <h3>Tool Set</h3>
        <div className="flex flex-wrap justify-center items-center w-full">
          {tools.map((item) => (
            <IconCard name={item.name} icon={item.icon} type={item.type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
