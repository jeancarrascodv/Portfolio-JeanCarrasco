import Navbar from "@/components/Navbar/Navbar";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget.jsx";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";
//ThemeSwitcher
//-----------------Images------------------------------------
import myPhoto from "@/components/ProfileHeader/ProfileIcon/mySelf2.png";
import slack from "../components/WorkWidget/WorkLogo/slack.png";
import spotify from "../components/WorkWidget/WorkLogo/spotify.png";
import microsoft from "../components/WorkWidget/WorkLogo/microsoft.png";
import audible from "../components/WorkWidget/WorkLogo/audible.png";
import javaS from "../components/SkillsWidget/SkillsLogo/javascript.png";
import X from "@/components/LinksAbout/LinksImages/XV.svg";
import GitHub from "@/components/LinksAbout/LinksImages/GitHub.svg";
import LinkedIn from "@/components/LinksAbout/LinksImages/LinkedinV.svg";
import Lin from "../components/WorkWidget/WorkLogo/lin.jpg";
import janium from "../components/WorkWidget/WorkLogo/janium.jpeg";
import maderas from "../components/WorkWidget/WorkLogo/maderas.jpeg";
import hidro from "../components/WorkWidget/WorkLogo/hidro.jpeg";
import edi from "../components/WorkWidget/WorkLogo/edi.jpeg";

export const metadata = {
  title: "Portfolio - Jean Carrasco",
  description: "Home page of my portfolio.",
};

export default function Home() {
  const articles = [
    {
      date: "2023 — 2024",
      title: "Chief Operations Officer at Maderas América",
      content:
        "As COO of a melamine and construction materials company, I ran daily operations across five warehouses, optimized inventory, and supervised machinery maintenance to keep production continuous. Managing importation and international suppliers exposed exactly the kind of manual, repetitive coordination that I now automate with AI agents.",
      link: "#",
    },
    {
      date: "2021 — 2023",
      title: "Operations Manager at HIDROALEMANA S.A.C.",
      content:
        "Leading a hydraulic well-solutions company, I managed submersible pump sales and coordinated projects for clients like Alicorp and Nestlé, overseeing finances, contracts, and safety compliance. Here I learned how much time disappears into manual reporting and follow-ups — the first processes worth automating.",
      link: "#",
    },
    {
      date: "2019 — 2021",
      title: "Operations Assistant at Inmobiliaria Edifica",
      content:
        "In this real estate role, I handled client inquiries, coordinated viewings, and maintained detailed records and paperwork. Doing high-volume routine work firsthand is what convinced me that intelligent automation, not more headcount, is the real lever for efficiency.",
      link: "#",
    },
  ];
  //-----------------------------------------------------------------------------------------
  let myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];
  //----------------------------------------------------------------------------------------------------
  const myExperience = [
    {
      ///workspaces/cs220-portfolio-danielsgroup/src/components/WorkWidget/WorkLogo/lin.jpg
      logo: janium,
      organization: "Janium",
      jobTitle: "IT Assistant",
      startYear: 2024,
      endYear: null,
    },
    {
      logo: maderas,
      organization: "Maderas America",
      jobTitle: "COO",
      startYear: 2023,
      endYear: 2024,
    },
    {
      logo: hidro,
      organization: "Hidroalemana SAC",
      jobTitle: "Operation Manager",
      startYear: 2021,
      endYear: 2023,
    },
    {
      logo: edi,
      organization: "Inmobiliaria Edifica",
      jobTitle: "Operation Assistant",
      startYear: 2019,
      endYear: 2021,
    },
  ];
  //----------------------------------------------------------------------------------------------------
  const skills = [
    { name: "AI Agents & LLMs", proficiency: 90 },
    { name: "OpenAI & Anthropic APIs", proficiency: 88 },
    { name: "Workflow Automation (n8n · Make · Zapier)", proficiency: 90 },
    { name: "Python", proficiency: 85 },
    { name: "LangChain & LangGraph", proficiency: 80 },
    { name: "JavaScript", proficiency: 75, icon: javaS },
  ];
  //----------------------------------------------------------------------------------------------------
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
  //----------------------------------------------------------------------------------------------------
  const FollowLinks = [
    {
      image: LinkedIn,
      link: "https://www.linkedin.com/in/jean-carrasco/",
    },
    {
      image: X,
      link: "https://x.com/JeanCarras16326",
    },
    {
      image: GitHub,
      link: "https://github.com/jeancarrascodv",
    },
  ];
  //space-y-6
  return (
    <div className="bg-slate-50 dark:bg-black">
      <div className="sm-ml-mr-80 ">
        <div className="bg-white dark:bg-zinc-900">
          {/*w-fill flex justify-center h-20 pt-6 sm:grid grid-cols-3 inside-144
          items-center--> worked vertical alignment*/}
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

          {/*End of Navbar First part*/}
          <div className="left-inside-144">
            <ProfileHeader
              name="AI Automation Engineer | Process Optimization | Operations Strategist | MBA"
              bio={
                <>
                  <span style={{ display: "block", marginBottom: "1em" }}>
                    Industrial and software engineer. I design AI agents, lead-generation pipelines, and scalable
                    systems that help companies grow — without growing their headcount. Having led operations from the
                    inside, I automate the workflows that actually move the needle.
                  </span>
                  <span style={{ display: "block", marginBottom: "1em" }}>
                    My work focuses on three measurable outcomes: fewer operational incidents, faster cycle times, and
                    leaner, more efficient teams. By letting AI handle repetitive and rule-based tasks, organizations
                    free their people for higher-value work and cut operational overhead.
                  </span>
                  <span style={{ display: "block", marginBottom: "1em" }}>
                    Backed by an MBA and experience as an International Business Consultant, I connect automation to
                    business strategy — making sure every AI solution translates into real cost savings, productivity
                    gains, and sustainable growth.
                  </span>
                </>
              }
              linkedinUrl="https://www.linkedin.com/in/jean-carrasco/"
              imageUrl={myPhoto}
              items={FollowLinks}
            />
          </div>
          {/*End of header just another div ( down here starts the layout)*/}
          <div className="grid sm:grid-cols-2 inside-144 pb-14">
            {/*className={"sm:w-[594px]"} i took this off just in case*/}
            <div>
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  date={article.date}
                  title={article.title}
                  content={article.content}
                  link={article.link}
                />
              ))}
            </div>
            {/*End of Article cards*/}
            <div className="gap-y-5 grid sm:justify-items-end">
              <SignupWidget
                title={"Stay up to date"}
                content={"Get notified when I publish something new, and unsubscribe at any time."}
              />
              {/*End of SignupWidget*/}
              <WorkWidget
                title={"Work"}
                content={
                  "AI Automation & Operations Engineer with 7+ years optimizing industrial and business processes — now deploying AI agents to cut incidents, accelerate delivery, and streamline teams."
                }
                experiences={myExperience}
              />
              {/*End of WorkWidget*/}
              <SkillsWidget
                title={"Skills"}
                content={"The AI, automation, and engineering tools I use to turn manual processes into self-running systems."}
                skills={skills}
              />
              {/*End of SkillsWidget*/}
            </div>
            {/*End of right side*/}
          </div>
          {/*End of big div following Figma*/}
          <div className="inside-144 h-44 pb-8">
            <Footer links={links} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
  {
    /*End of return Home*/
  }
}
