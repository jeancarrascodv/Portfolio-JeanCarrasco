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
      title: "Things I’ve made trying to put my dent in the universe.",
      content: [
        {
          inside:
            "As an operations leader and project engineer, I have spearheaded various initiatives that blend technology and strategy, aiming to drive innovation and create impactful solutions.",
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
      name: "Digital Transformation at Ensign College",
      logo: Logo,
      content:
        "Led the development of a digital platform to streamline student services and improve administrative efficiency.",
      link: "https://www.ensign.edu/",
    },
    {
      name: "Community Tech Workshops",
      logo: Logo,
      content:
        "Organized workshops to teach tech skills to the community, helping people improve their digital literacy.",
      link: "https://www.communitytechworkshops.com/",
    },
    {
      name: "Sustainability Efforts",
      logo: Logo,
      content: "Helped introduce eco-friendly practices to cut costs and reduce waste.",
      link: "https://www.ecooptimization.com/",
    },
    {
      name: "Global Operations Optimization",
      logo: Logo,
      content:
        "Streamlined international operations, improving productivity across teams and enhancing global collaboration.",
      link: "https://www.globaloperations.com/",
    },
    {
      name: "DevOps Integration Project",
      logo: Logo,
      content:
        "Facilitated the adoption of DevOps practices, improving software delivery speed and quality across teams.",
      link: "https://www.devopstransformation.com/",
    },
    {
      name: "Innovation Hackathon Organizer",
      logo: Logo,
      content:
        "Organized a hackathon to foster creativity among engineers, resulting in innovative solutions and team bonding.",
      link: "https://www.innovationhackathon.com/",
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
