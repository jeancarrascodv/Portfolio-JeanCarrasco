import Navbar from "@/components/Navbar/Navbar";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget.jsx";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget.jsx";
import Footer from '@/components/Footer/Footer.jsx';
//-----------------Images------------------------------------
import myPhoto from "../components/ProfileHeader/ProfileIcon/mySelf.jpeg";
import slack from "../components/WorkWidget/WorkLogo/slack.png";
import spotify from "../components/WorkWidget/WorkLogo/spotify.png";
import microsoft from "../components/WorkWidget/WorkLogo/microsoft.png";
import audible from "../components/WorkWidget/WorkLogo/audible.png";
import css3 from "../components/SkillsWidget/SkillsLogo/css3.png";
import html5 from "../components/SkillsWidget/SkillsLogo/html5.png";
import javaS from "../components/SkillsWidget/SkillsLogo/javascript.png";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  const articles = [
    {
      date: "December 25, 2023",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
      link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
    },

    {
      date: "December 25, 2023",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
      link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
    },
    {
      date: "December 25, 2023",
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
      link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
    },
  ];
  //-----------------------------------------------------------------------------------------
  let myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
  //----------------------------------------------------------------------------------------------------
  const myExperience = [
    {
      ///workspaces/cs220-portfolio-danielsgroup/src/components/WorkWidget/WorkLogo/slack.png
      logo: slack,
      organization: "Slack",
      jobTitle: "Software Engineer",
      startYear: 2016,
      endYear: null,
    },
    {
      logo: spotify,
      organization: "Spotify",
      jobTitle: "Software Engineer",
      startYear: 2014,
      endYear: 2015,
    },
    {
      logo: audible,
      organization: "Audible",
      jobTitle: "Software Engineer",
      startYear: 2012,
      endYear: 2013,
    },
    {
      logo: microsoft,
      organization: "Microsoft",
      jobTitle: "Software Engineer",
      startYear: 2010,
      endYear: 2011,
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
      title: 'Home',
      url: '/home',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Uses',
      url: '/uses',
    },
  ];
  //----------------------------------------------------------------------------------------------------

  return (
    <div>
      <Navbar options={myArray} />
      {/*End of Navbar*/}
      <div className="profile-header-container">
        <ProfileHeader
          name="Software engineer, father, and believer"
          bio="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.."
          linkedinUrl="https://www.linkedin.com/in/daniel-figueroa-perez-465a39304/"
          imageUrl={myPhoto}
        />
      </div>
      {/*End of header*/}
      <div className="footerContainer">
        <div className={"articles"}>
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
        <div className="rightSidebar">
          <SignupWidget
            title={"Stay up to date"}
            content={"Get notified when I publish something new, and unsubscribe at any time."}
          />
          {/*End of SignupWidget*/}
          <WorkWidget title={"Work"} content={"My work experience."} experiences={myExperience} />
          {/*End of WorkWidget*/}
          <SkillsWidget
            title={"Skills"}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
            skills={skills}
          />
          {/*End of SkillsWidget*/}
        </div>
        {/*End of right side*/}
      </div>
      <Footer links={links} />
      {/*End of big div following Figma*/}
    </div>
  );
  {
    /*End of return Home*/
  }
}
