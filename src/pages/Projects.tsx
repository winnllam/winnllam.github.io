import { Link } from 'react-router-dom'
import BrowserWindow from '../components/BrowserWindow'
import { HiOutlineChevronLeft } from "react-icons/hi2"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-800 transition-colors inline-flex items-center gap-2"
          >
            <HiOutlineChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
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
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
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
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
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
      </div>
    </section>
  )
}
