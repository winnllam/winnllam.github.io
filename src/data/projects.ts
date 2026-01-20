import personalWebsite from "../assets/projects/personal_website.png";
import webGallery from "../assets/projects/web_gallery.png";
import divideAndConquer from "../assets/projects/divide_and_conquer.png";
import oneSecret from "../assets/projects/1secret.png";

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "My personal portfolio site you are currently looking at! Newly revamped in 2026, using Claude Code.",
    image: personalWebsite,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://winnllam.github.io/",
    github: "https://github.com/winnllam/winnllam.github.io",
  },
  {
    title: "Divide and Conquer",
    description:
      "Backend-focused coding competition application (similar to Binarysearch and Leetcode) with support for multiple users at a time, real-time updates and execution of code programs.",
    image: divideAndConquer,
    technologies: ["React", "Express", "Node.js", "MongoDB", "DigitalOcean"],
    link: "",
    github: "https://github.com/winnllam/project-sup-effort",
  },
  {
    title: "1Secret",
    description:
      "Working together with mentors from 1Password for deCODE Hackathon; 1Secret is a web app that lets you share temporary secret links for sensitive information from 1Password vault. Share your passwords securely with time-sensitive, shareable links.",
    image: oneSecret,
    technologies: ["React", "TypeScript", "Python", "Tornado", "1Password API"],
    link: "",
    github: "https://github.com/winnllam/1Secret",
  },
  {
    title: "Web Gallery",
    description:
      "An online photo gallery application featuring user profile, image uploads, and commenting.",
    image: webGallery,
    technologies: ["HTML", "CSS", "JavaScript", "Express", "Node.js"],
    link: "",
    github: "https://github.com/winnllam/c09-a3",
  },
];
