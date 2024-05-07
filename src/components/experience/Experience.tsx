import "./Experience.css";
import { EXPERIENCES as data, RELEVANT } from "./experiences";
import { MdWork, MdVolunteerActivism } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

function Experience() {
  return (
    <div id="experience">
      <h2 className="text-center font-mono m-10 text-orchid">Experience</h2>
      <div className="container px-12 sm:px-36 flex flex-col lg:flex-row items-stretch font-mono">
        <ol className="relative border-s border-white">
          {data.map((item) => {
            if (RELEVANT.includes(item.id)) {
              return (
                <li key={item.id} className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-orchid rounded-full -start-3 ring-4 ring-black">
                    {item.type === "work" && <MdWork className="text-black" />}
                    {item.type === "volunteer" && (
                      <MdVolunteerActivism className="text-black" />
                    )}
                    {item.type === "school" && (
                      <FaSchool className="text-black" />
                    )}
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold">
                    {item.company} |&nbsp;<i>{item.role}</i>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray">
                    {item.dates}
                  </time>
                  <p className="mb-4 text-base font-normal">
                    {item.description}
                  </p>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ol>
      </div>
    </div>
  );
}

export default Experience;
