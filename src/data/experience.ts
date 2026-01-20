export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  color: "purple" | "pink";
  type: "job" | "volunteer";
}

export const experiences: ExperienceEntry[] = [
  {
    title: "Software Engineer",
    company: "Boundless Immigration",
    period: "Jan. 2025 - Present",
    description: "Brief description of your role and achievements.",
    color: "purple",
    type: "job",
  },
  {
    title: "Software Engineer",
    company: "EV.com",
    period: "May 2024 - Sep. 2024",
    description:
      "Orchestrated AWS Lambda migration to Docker, automated dealership report generation, implemented vehicle metadata tagging, and developed a dynamic gas savings calculator, improving deployment efficiency, data accessibility, search accuracy, and user engagement.",
    color: "purple",
    type: "job",
  },
  {
    title: "Full Stack Developer",
    company: "Supervisas",
    period: "Sep. 2023 - Apr. 2024",
    description:
      "Developed AI-driven tools for document generation and resume scanning, significantly reducing writing and data entry times, and implemented backend enhancements in Django to improve site reliability and reduce errors.",
    color: "purple",
    type: "job",
  },
  {
    title: "Workshop Developer",
    company: "HER CODE CAMP",
    period: "Sep. 2023 - Dec. 2023",
    description:
      "Developed and facilitated a web development workshop for female high school students who have little to no experience in coding and web development.",
    color: "pink",
    type: "volunteer",
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon (AWS)",
    period: "May 2022 - Aug. 2022",
    description:
      "Created a cleaner package to remove unused OS release artifacts, saving costs and storage.",
    color: "purple",
    type: "job",
  },
  {
    title: "Vice President of Engineering",
    company: "LIVE Competition",
    period: "Mar. 2021 - Feb. 2022",
    description:
      "Lead a team of 7 in completing development tasks for the in-house business competition portal.",
    color: "pink",
    type: "volunteer",
  },
  {
    title: "Full Stack Developer Co-op",
    company: "Ada Support",
    period: "May 2021 - Aug. 2021",
    description:
      "Third work term; Assisted with chatbot handoff to live agent process, and resolved high priority, client impacting bugs.",
    color: "purple",
    type: "job",
  },
  {
    title: "Platform Reliability Engineer Co-op",
    company: "Manulife",
    period: "Sep. 2020 - Dec. 2020",
    description:
      "Second work term; Entrusted with admin rights to assist with technology onboarding and resolving user incidents.",
    color: "purple",
    type: "job",
  },
  {
    title: "Developer Co-op",
    company: "RBC Royal Bank",
    period: "Jan. 2020 - Apr. 2020",
    description:
      "First work term on the Innovation team, working with chat bots, diagnostic tools, and dashboards.",
    color: "purple",
    type: "job",
  },
];
