import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";
import UsesHeader from "@/components/UsesHeader/UsesHeader.jsx";
import UsesSection from "@/components/UsesSection/UsesSection.jsx";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  const myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  const itemsArray = [
    {
      title: "Software I use, gadgets I love, and other things I recommend.",
      content: [
        {
          inside:
            "As a Chief of Operations with a strong background in DevOps and industrial engineering, I leverage a variety of tools and methodologies to enhance operational efficiency and drive strategic growth.",
        },
      ],
    },
  ];

  const items = [
    {
      groupName: "Operational Management",
      items: [
        {
          title: "Project Management Software",
          description:
            "Tools like Asana and Trello help me manage complex projects seamlessly, ensuring that milestones are met and resources are optimized.",
        },
        {
          title: "Business Intelligence Tools",
          description:
            "Using platforms like Tableau and Power BI allows me to make data-driven decisions, fostering continuous improvement across all operational processes.",
        },
      ],
    },
    {
      groupName: "DevOps Practices",
      items: [
        {
          title: "CI/CD Tools",
          description:
            "Implementing Jenkins and GitLab CI helps streamline deployment processes, bridging the gap between development and operations for high-quality outcomes.",
        },
        {
          title: "Containerization",
          description:
            "Utilizing Docker and Kubernetes enhances efficiency and scalability, making it easier to manage applications across various environments.",
        },
      ],
    },
    {
      groupName: "Collaboration & Communication",
      items: [
        {
          title: "Slack",
          description:
            "A vital tool for team communication, facilitating collaboration across multidisciplinary teams, promoting a culture of innovation.",
        },
        {
          title: "Zoom",
          description:
            "Essential for remote meetings, ensuring clear communication and collaboration with global teams, especially in my role as an IB Consultant.",
        },
      ],
    },
    {
      groupName: "Productivity Tools",
      items: [
        {
          title: "Notion",
          description:
            "Combining notes, tasks, and databases, Notion helps keep my projects organized and ensures that I stay on track with my goals.",
        },
        {
          title: "Google Workspace",
          description:
            "With tools like Docs, Sheets, and Drive, I streamline collaboration and document management, enhancing productivity across teams.",
        },
      ],
    },
  ];

  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Uses",
      url: "/uses",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="sm-ml-mr-80 ">
        <div className="bg-white dark:bg-zinc-900">
          <div className="flex w-full items-center justify-between">
            <div> </div>
            <div>
              <Navbar options={myArray} />
            </div>
            <div className="sm:pr-32 flex items-center">
              <DropDown />
              <ThemeSwitcher darkClassName="dark" />
            </div>
          </div>
          {/*End of header---------------------------------------------------*/}
          <div className="left-inside-144">
            <UsesHeader items={itemsArray} />
          </div>
          <div className="left-inside-144 pt-10 pb-14">
            <UsesSection items={items} />
          </div>

          {/*End of big div following Figma*/}
          <div className="inside-144 h-44 pb-8">
            <Footer links={links} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
