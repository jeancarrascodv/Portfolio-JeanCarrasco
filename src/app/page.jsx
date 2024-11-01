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
import css3 from "../components/SkillsWidget/SkillsLogo/css3.png";
import html5 from "../components/SkillsWidget/SkillsLogo/html5.png";
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
      date: "December 25, 2023",
      title: "Chief Operations Officer at Maderas América",
      content:
        "As COO of a melamine and construction materials company, I managed daily operations across five warehouses, optimized inventory, and supervised machinery maintenance to ensure continuous production. My role extended to overseeing material importation, coordinating with international suppliers, and adhering to import regulations. This position sharpened my skills in inventory management, machinery upkeep, and international trade.",
      link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
    },
    {
      date: "December 25, 2023",
      title: "General Manager at HIDROALEMANA S.A.C.",
      content:
        "As the Administrator of a hydraulic well solutions company, I managed submersible pump sales, coordinated projects for clients like Alicorp and Nestlé, and ensured precise well management systems. Responsibilities included financial oversight, contract negotiations, and safety compliance, strengthening my skills in strategic management and client relations.",
      link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
    },
    {
      date: "December 25, 2023",
      title: "Administrative Assistant at Inmobiliaria Edifica",
      content:
        "In this real estate role, I efficiently handled client inquiries, coordinated property viewings, and maintained detailed records. I managed essential paperwork and supported agents with meetings and correspondence, honing my multitasking, communication, and problem-solving skills.",
      link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
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
    { name: "HTML", proficiency: 60, icon: html5 },
    { name: "CSS", proficiency: 50, icon: css3 },
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
              name="Software Engineer | Administrator | Project Engineer | MBA | IB Consultant"
              bio={
                <>
                  <span style={{ display: "block", marginBottom: "1em" }}>
                    Chief of Operations and seasoned Industrial Engineer with a robust background in DevOps and
                    administrative leadership, I bring a dynamic blend of expertise to the table. My career is marked by
                    substantial experience in operational management, continuous improvement, and process optimization.
                  </span>
                  <span style={{ display: "block", marginBottom: "1em" }}>
                    As a Project Engineer, I have honed my skills in seamlessly integrating project management
                    principles with technical acumen, ensuring the successful delivery of complex projects. My MBA
                    education has further enriched my strategic and analytical abilities, enabling me to make
                    data-driven decisions that propel business growth.
                  </span>
                  <span style={{ display: "block", marginBottom: "1em" }}>
                    In the realm of international business, my role as an IB Consultant has allowed me to navigate
                    diverse business environments, fostering a global perspective in my approach to operations and
                    strategy.
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
                  "Industrial - Software Engineer with more than seven years of experience optimizing industrial processes with technology and applications."
                }
                experiences={myExperience}
              />
              {/*End of WorkWidget*/}
              <SkillsWidget
                title={"Skills"}
                content={"My experience in the latest and certified knowledge in different areas."}
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
