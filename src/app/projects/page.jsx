import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";
import ProjectsHeader from "@/components/ProjectsHeader/ProjectsHeader.jsx";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";

//----------------images-------------------
import Logo from "@/components/ProjectCard/Logo.svg";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  const myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  const itemsArray = [
    {
      title: "AI automations I’ve built to make operations run themselves.",
      content: [
        {
          inside:
            "A selection of projects where I deployed AI agents and intelligent automation into real business processes — reducing incidents, cutting cycle times, and letting leaner teams do more with less overhead.",
        },
      ],
    },
  ];

  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Uses", url: "/uses" },
  ];

  const projects = [
    {
      name: "AI Agents for Operations Support",
      logo: Logo,
      content:
        "Deployed AI agents to automatically triage, classify, and resolve routine operational tickets — cutting incident response times and reducing the manual workload on the support team.",
      link: "#",
    },
    {
      name: "Intelligent Document & Invoice Processing",
      logo: Logo,
      content:
        "Built an AI pipeline that extracts, validates, and routes data from invoices and contracts — eliminating hours of manual data entry and reducing human error to near zero.",
      link: "#",
    },
    {
      name: "Process Mining & Bottleneck Detection",
      logo: Logo,
      content:
        "Used AI to map real operational workflows, surface hidden bottlenecks, and recommend where automation delivers the highest ROI in cost and time savings.",
      link: "#",
    },
    {
      name: "Automated Reporting & KPI Agents",
      logo: Logo,
      content:
        "Replaced manual reporting cycles with AI agents that gather data, generate insights, and deliver decision-ready dashboards on schedule — freeing teams from repetitive analysis.",
      link: "#",
    },
    {
      name: "AI-Assisted Customer Operations",
      logo: Logo,
      content:
        "Implemented conversational AI to handle first-line inquiries 24/7, escalating only complex cases — improving response times while keeping operations lean.",
      link: "#",
    },
    {
      name: "Workflow Automation & System Integration",
      logo: Logo,
      content:
        "Connected disconnected business systems with automated workflows and AI orchestration, removing repetitive handoffs and accelerating end-to-end delivery.",
      link: "#",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="sm-ml-mr-80 ">
        <div className="bg-white dark:bg-zinc-900">
          <div className="flex w-full items-center justify-between">
            <div></div>
            <div>
              <Navbar options={myArray} />
            </div>
            <div className="sm:pr-32 flex items-center">
              <DropDown />
              <ThemeSwitcher darkClassName="dark" />
            </div>
          </div>
          <div className="left-inside-144">
            <ProjectsHeader items={itemsArray} />
          </div>
          <div className="pb-10 mx-14 sm:grid grid-cols-3 inside-144">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard name={project.name} logo={project.logo} content={project.content} link={project.link} />
              </div>
            ))}
          </div>
          <div className="inside-144 h-44 pb-8">
            <Footer links={links} />
          </div>
        </div>
      </div>
    </div>
  );
}
