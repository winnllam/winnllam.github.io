import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BrowserWindow from "../components/BrowserWindow";
import headshot from "../assets/headshot.png";
import rubyVideo from "../assets/art/ruby.mp4";
import parkGif from "../assets/art/park.gif";
import { experiences } from "../data/experience";
import { education } from "../data/education";
import {
  LANGUAGES,
  FRAMEWORKS,
  RUNTIMES_PLATFORMS,
  DATABASES,
  TOOLS,
} from "../data/skills";
import { interests } from "../data/interests";
import { languages } from "../data/languages";
import { heroTexts } from "../data/heroTexts";
import { projects } from "../data/projects";
// import { artPieces } from "../data/art";
// import { designPieces } from "../data/designs";
import {
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiChevronDown,
} from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedin,
  FaArtstation,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Progress from 0 to 1 over the first viewport height
      const progress = Math.min(scrollY / (windowHeight * 0.7), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentText = heroTexts[textIndex];
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = isDeleting ? 50 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % heroTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  // Calculate transforms based on scroll progress
  const leftTransform = `translateX(${-scrollProgress * 80}vw)`;
  const rightTransform = `translateX(${scrollProgress * 80}vw)`;
  const sideWindowsOpacity = 1 - scrollProgress * 0.8;
  const chevronOpacity = 1 - scrollProgress * 2;

  return (
    <section className="min-h-screen flex items-center justify-center px-[4vw] py-[4vh] overflow-hidden relative">
      <div className="relative w-full max-w-[85vw] lg:max-w-[75vw] mx-auto">
        {/* Floating windows - Left side */}
        {/* Top left - square-ish */}
        <div
          className="absolute left-[2vw] sm:left-[-2vw] lg:left-[-4vw] top-[6vh] sm:top-[5vh] lg:top-[4vh] z-20 w-[24vw] sm:w-[22vw] lg:w-[20vw] hidden sm:block transition-all duration-500 ease-out"
          style={{ transform: leftTransform, opacity: sideWindowsOpacity }}
        >
          <BrowserWindow tab="home.html">
            <div className="p-[1.5vw] bg-gradient-to-br from-pink-100 to-purple-100 h-[16vw] sm:h-[14vw] lg:h-[12vw]">
              <pre className="text-[1vw] sm:text-[0.8vw] font-mono leading-relaxed">
                <span className="text-purple-500">{"<!doctype html>"}</span>
                {`
  `}
                <span className="text-pink-500">{"<div"}</span>{" "}
                <span className="text-purple-400">class=</span>
                <span className="text-green-600">'dream'</span>
                <span className="text-pink-500">{">"}</span>
                {`
    `}
                <span className="text-gray-700">I am capable of</span>
                {`
    `}
                <span className="text-gray-700">overcoming anything</span>
                {`
  `}
                <span className="text-pink-500">{"</div>"}</span>
                {`
`}
                <span className="text-purple-500">{"</html>"}</span>
              </pre>
            </div>
          </BrowserWindow>
        </div>

        {/* Left middle - blender video */}
        <div
          className="absolute left-[2vw] sm:left-[8vw] lg:left-[6vw] sm:top-[26vh] lg:top-[24vh] z-20 w-[18vw] sm:w-[17vw] lg:w-[16vw] hidden sm:block transition-all duration-500 ease-out"
          style={{ transform: leftTransform, opacity: sideWindowsOpacity }}
        >
          <BrowserWindow>
            <video
              src={rubyVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-square object-cover"
            />
          </BrowserWindow>
        </div>

        {/* Bottom left - blank window behind */}
        <div
          className="absolute left-[2vw] sm:left-[0vw] lg:left-[-2vw] sm:top-[38vh] lg:top-[36vh] z-10 w-[18vw] sm:w-[17vw] lg:w-[16vw] hidden sm:block transition-all duration-500 ease-out"
          style={{ transform: leftTransform, opacity: sideWindowsOpacity }}
        >
          <BrowserWindow>
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 aspect-square"></div>
          </BrowserWindow>
        </div>

        {/* Floating windows - Right side */}
        {/* Top right - palette */}
        <div
          className="absolute right-[2vw] sm:right-[-2vw] lg:right-[-4vw] -top-[4vh] sm:-top-[5vh] lg:-top-[6vh] z-20 w-[20vw] sm:w-[18vw] lg:w-[17vw] hidden sm:block transition-all duration-500 ease-out"
          style={{ transform: rightTransform, opacity: sideWindowsOpacity }}
        >
          <BrowserWindow>
            <div className="p-[1.2vw] bg-gradient-to-br from-purple-50/50 to-pink-50/50 aspect-square">
              <div className="mt-[2vh] grid grid-cols-4 gap-[0.6vw]">
                <div className="w-[2.5vw] h-[2.5vw] bg-pink-500 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-pink-400 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-pink-300 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-pink-100 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-fuchsia-500 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-fuchsia-400 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-fuchsia-300 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-fuchsia-100 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-purple-600 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-purple-500 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-purple-300 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-purple-100 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-violet-500 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-violet-400 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-violet-300 rounded-full"></div>
                <div className="w-[2.5vw] h-[2.5vw] bg-violet-100 rounded-full"></div>
              </div>
            </div>
          </BrowserWindow>
        </div>

        {/* Right middle - response */}
        <div
          className="absolute right-[2vw] sm:right-[6vw] lg:right-[4vw] sm:top-[28vh] lg:top-[26vh] z-20 w-[18vw] sm:w-[16vw] lg:w-[15vw] hidden sm:block transition-all duration-500 ease-out"
          style={{ transform: rightTransform, opacity: sideWindowsOpacity }}
        >
          <BrowserWindow tab="response.json">
            <div className="p-[1.2vw] bg-gray-900">
              <pre className="text-[0.9vw] sm:text-[0.7vw] font-mono leading-relaxed">
                <span className="text-gray-500">{"{"}</span>
                {`
  `}
                <span className="text-purple-400">"status"</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-400">"success"</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-purple-400">"developer"</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-400">"Winnie"</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-purple-400">"role"</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-400">"Full Stack"</span>
                <span className="text-gray-500">,</span>
                {`
  `}
                <span className="text-purple-400">"available"</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-orange-400">true</span>
                {`
`}
                <span className="text-gray-500">{"}"}</span>
              </pre>
            </div>
          </BrowserWindow>
        </div>

        {/* Bottom right - small with park gif */}
        <div
          className="absolute right-[2vw] sm:right-[-3vw] lg:right-[-5vw] sm:bottom-[6vh] lg:bottom-[8vh] z-30 w-[14vw] sm:w-[12vw] lg:w-[10vw] hidden sm:block transition-all duration-500 ease-out"
          style={{ transform: rightTransform, opacity: sideWindowsOpacity }}
        >
          <BrowserWindow>
            <img
              src={parkGif}
              alt="Park animation"
              className="w-full aspect-square object-cover"
            />
          </BrowserWindow>
        </div>

        {/* Main large browser window */}
        <div className="relative z-10">
          <BrowserWindow className="shadow-2xl">
            <div className="bg-gradient-to-b from-pink-50 via-purple-50 to-white h-[70vh] flex flex-col items-center justify-end relative overflow-hidden">
              {/* Text content at top */}
              <div className="absolute top-[3vh] sm:top-[5vh] left-0 right-0 text-center px-[4vw] sm:px-[2vw]">
                <h1 className="text-[8vw] sm:text-[4vw] lg:text-[3.5vw] font-bold text-gray-900 mb-[1vh]">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Winnie
                  </span>
                </h1>
                <p className="text-[4vw] sm:text-[1.5vw] lg:text-[1.2vw] text-gray-600 max-w-[80vw] sm:max-w-[40vw] mx-auto h-[5vw] sm:h-[2.5vw] lg:h-[2vw]">
                  {displayText}
                  <span className="typing-cursor text-purple-500 font-light">
                    |
                  </span>
                </p>
              </div>

              {/* Headshot at bottom center */}
              <img
                src={headshot}
                alt="Headshot"
                className="w-auto h-[55vh] object-contain object-bottom"
              />
            </div>
          </BrowserWindow>
        </div>
      </div>

      {/* Scroll indicator - 3 chevrons */}
      <div
        className="absolute bottom-[3vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[0.3vh] transition-opacity duration-300"
        style={{ opacity: chevronOpacity }}
      >
        {[0, 1, 2].map((i) => (
          <HiChevronDown
            key={i}
            className="w-[3vw] h-[2vw] sm:w-[2vw] sm:h-[1.2vw] text-purple-300"
            style={{
              animation: `chevronPulse 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          About Me
        </h2>

        {/* About Me - Full width on top */}
        <div className="mb-6">
          <BrowserWindow tab="Personal Info">
            <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 flex gap-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full border-4 border-purple-300 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="../src/assets/headshot_drawing.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info Content */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">📍</span>
                    <span className="text-gray-600 text-sm">
                      <i>Seattle, United States</i>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">💼</span>
                    <span className="text-gray-600 text-sm">
                      <i>Full Stack Software Engineer</i>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✉️</span>
                    <span className="text-gray-600 text-sm">
                      <i>winnie.lam540@gmail.com</i>
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I have expertise in full stack and web development from
                  various school and personal projects, as well as a love for
                  designing and building things on the web. I have contributed
                  to and built many large-scale applications, ranging from
                  database setup and management, API creation and maintenance,
                  frontend design and development, and testing. I have worked in
                  various teams in an agile setting, from both a developer and
                  leadership standpoint. I am excited to apply my skills and
                  knowledge to new and exciting opportunities.
                </p>
              </div>
            </div>
          </BrowserWindow>
        </div>

        {/* Two columns: Left 1/3, Right 2/3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left column - 1/3 width with 4 small windows */}
          <div className="md:col-span-1 flex flex-col gap-4">
            {/* Skills */}
            <BrowserWindow tab="Skills">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 space-y-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Languages</div>
                  <div className="flex flex-wrap gap-1.5">
                    {LANGUAGES.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-pink-100 text-pink-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Frameworks</div>
                  <div className="flex flex-wrap gap-1.5">
                    {FRAMEWORKS.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">
                    Runtimes & Platforms
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {RUNTIMES_PLATFORMS.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-pink-100 text-pink-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Databases</div>
                  <div className="flex flex-wrap gap-1.5">
                    {DATABASES.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BrowserWindow>

            {/* Tools */}
            <BrowserWindow tab="Tools">
              <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="flex flex-wrap gap-1.5">
                  {TOOLS.map((tool, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${
                        index % 2 === 0
                          ? "bg-purple-100 text-purple-700"
                          : "bg-pink-100 text-pink-700"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </BrowserWindow>

            {/* Interests */}
            <BrowserWindow tab="Interests">
              <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="space-y-1 text-sm text-gray-600">
                  {interests.map((interest, index) => (
                    <div key={index}>
                      {interest.emoji} {interest.name}
                    </div>
                  ))}
                </div>
              </div>
            </BrowserWindow>

            {/* Languages */}
            <BrowserWindow tab="Languages">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="space-y-1 text-sm text-gray-600">
                  {languages.map((language, index) => (
                    <div key={index}>{language}</div>
                  ))}
                </div>
              </div>
            </BrowserWindow>
          </div>

          {/* Right column - 2/3 width with Education and Experience */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Education */}
            <BrowserWindow tab="Education">
              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`w-1.5 bg-gradient-to-b rounded-full ${
                          index === 0
                            ? "from-pink-400 to-purple-400"
                            : "from-pink-300 to-purple-300"
                        }`}
                      ></div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {edu.degree}
                        </div>
                        <div className="text-sm text-gray-600">
                          {edu.school}
                        </div>
                        <div className="text-xs text-gray-400">
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BrowserWindow>

            {/* Experience */}
            <BrowserWindow tab="Experience">
              <div className="p-5 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-300"></div>

                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="flex gap-4 relative">
                        <div
                          className={`w-6 h-6 rounded-full border-2 border-white shadow-sm z-10 mt-0.5 flex items-center justify-center ${
                            exp.color === "purple"
                              ? "bg-purple-500"
                              : "bg-pink-400"
                          }`}
                        >
                          {exp.type === "job" ? (
                            <HiOutlineBriefcase className="w-3 h-3 text-white" />
                          ) : (
                            <HiOutlineHeart className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-gray-900">
                              {exp.title}
                            </div>
                            <div
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                exp.color === "purple"
                                  ? "text-purple-500 bg-purple-100"
                                  : "text-pink-500 bg-pink-100"
                              }`}
                            >
                              {exp.period}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            {exp.company}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BrowserWindow>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <BrowserWindow key={index} fillHeight>
              <div className="aspect-video bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-purple-400">Preview</span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-600 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-600 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        techIndex % 2 === 0
                          ? "bg-pink-100 text-pink-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BrowserWindow>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

// function ArtSection() {
//   return (
//     <section id="art" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Artwork
//         </h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {artPieces.slice(0, 3).map((piece, index) => (
//             <BrowserWindow key={index}>
//               <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
//                 {piece.image ? (
//                   <img
//                     src={piece.image}
//                     alt={piece.title}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-purple-400">Preview</span>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   {piece.title}
//                 </h3>
//                 {piece.medium && (
//                   <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
//                     {piece.medium}
//                   </span>
//                 )}
//               </div>
//             </BrowserWindow>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <Link
//             to="/art"
//             className="inline-block px-8 py-3 border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
//           >
//             View All Artwork
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// function DesignSection() {
//   return (
//     <section id="design" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Designs
//         </h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {designPieces.slice(0, 3).map((piece, index) => (
//             <BrowserWindow key={index}>
//               <div className="aspect-video bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
//                 {piece.image ? (
//                   <img
//                     src={piece.image}
//                     alt={piece.title}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <span className="text-purple-400">Preview</span>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   {piece.title}
//                 </h3>
//                 {piece.category && (
//                   <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
//                     {piece.category}
//                   </span>
//                 )}
//               </div>
//             </BrowserWindow>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <Link
//             to="/design"
//             className="inline-block px-8 py-3 border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
//           >
//             View All Designs
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <a
          href="mailto:winnie.lam540@gmail.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-10 mt-8">
          <a
            href="https://github.com/winnllam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/winnllam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://www.artstation.com/llunamous"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2"
          >
            <FaArtstation className="w-5 h-5" />
            ArtStation
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      {/* <ArtSection /> */}
      {/* <DesignSection /> */}
      <Contact />
    </>
  );
}
