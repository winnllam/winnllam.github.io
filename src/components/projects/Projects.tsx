import "./Projects.css";
import { PROJECTS as data } from "./projectList";
import { BsGithub } from "react-icons/bs";

declare const require: {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => {
    keys: () => string[];
    (id: string): string;
  };
};

function Projects() {
  const images = require.context("../../assets/projects", false, /\.png$/);

  return (
    <div id="projects">
      <h2 className="text-center font-mono m-10 text-orchid">Projects</h2>
      <div className="container px-12 sm:px-36 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 font-mono mb-10">
        {data.map((item: any) => (
          <div key={item.title} className="box flex flex-col justify-between">
            <div className="flex flex-col flex-grow">
              <h3 className="text-center mb-2">{item.title}</h3>
              <img
                src={images(`./${item.title.replace(/\s+/g, "_")}.png`)}
                alt={item.title}
                className="w-full object-contain max-h-48 drop-shadow-lg"
              ></img>
              <p className="mt-4 mb-4">{item.description}</p>
            </div>
            <p className="text-center mb-4">
              <i>{item.tech}</i>
            </p>
            <div className="flex justify-center items-center">
              <a href={item.link} target="_blank" rel="noreferrer">
                <BsGithub className="text-3xl text-black" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
