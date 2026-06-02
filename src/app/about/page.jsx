import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import AboutHeader from "@/components/AboutHeader/AboutHeader.jsx";
import LinksAbout from "@/components/LinksAbout/LinksAbout.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";

//----------------images-------------------
import myPhoto from "@/components/ProfileHeader/ProfileIcon/mySelf2.png";
import X from "@/components/LinksAbout/LinksImages/XV.svg";
import GitHub from "@/components/LinksAbout/LinksImages/GitHub.svg";
import LinkedIn from "@/components/LinksAbout/LinksImages/LinkedinV.svg";
import Mail from "@/components/LinksAbout/LinksImages/MailV.svg";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of Jean Carrasco's portfolio.",
};

export default function About() {
  let myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  const itemsArray = [
    {
      title: "I’m Jean Carrasco. An AI Automation & Process Optimization Engineer.",
      content: [
        {
          inside:
            "I'm both an industrial and a software engineer. I design AI agents, lead-generation pipelines, and scalable systems that help companies grow without growing their headcount. Having led operations from the inside as a Chief Operations Officer, I know exactly where the bottlenecks and hidden costs live.",
        },
        {
          inside:
            "My approach is outcome-driven: reduce operational incidents, shorten cycle times, and let leaner teams accomplish more. When AI takes over the routine work, people are freed to focus on judgment, relationships, and strategy — and organizations operate with lower overhead.",
        },
        {
          inside:
            "With an MBA and experience as an International Business Consultant, I bridge the gap between technology and the bottom line. Every automation I design is measured against real business impact: cost savings, throughput, and quality.",
        },
        {
          inside:
            "I’m passionate about building practical AI systems that fit how a business actually works. My goal is always the same — measurable productivity gains, streamlined processes, and operations that scale without scaling complexity.",
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

  const FollowLinks = [
    { image: X, content: "Follow me on X", link: "https://x.com/JeanCarras16326" },
    { image: GitHub, content: "Follow me on GitHub", link: "https://github.com/jeancarrascodv" },
    { image: LinkedIn, content: "Follow me on LinkedIn", link: "https://www.linkedin.com/in/jean-carrasco/" },
  ];

  const EmailLinks = [{ image: Mail, content: "jeancarrascodv@gmail.com", link: "mailto:jeancarrascodv@gmail.com" }];

  return (
    <div>
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
            <div className="inside-144 pt-10">
              <div className="grid sm:grid-cols-2 gap-x-20 gap-y-14 pb-14">
                <div className="order-2 sm:order-first ">
                  <AboutHeader items={itemsArray} />
                </div>

                <div className="order-1 sm:order-2 ">
                  <Image
                    src={myPhoto}
                    alt="Jean Carrasco"
                    style={{ borderTopLeftRadius: "3rem", borderTopRightRadius: "3rem" }}
                    className="w-full px-5 "
                  />
                  <div className="hidden sm:flex pt-10 ">
                    <LinksAbout items={FollowLinks} Email={EmailLinks} />
                  </div>
                </div>
              </div>
              <div className="sm:hidden">
                <LinksAbout items={FollowLinks} Email={EmailLinks} />
              </div>
              <Footer links={links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
