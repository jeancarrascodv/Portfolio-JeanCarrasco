import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import AboutHeader from "@/components/AboutHeader/AboutHeader.jsx";
import LinksAbout from "@/components/LinksAbout/LinksAbout.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher.jsx";
import DropDown from "@/components/DropDown/DropDown.jsx";

//----------------images-------------------
//import myPhoto from "../components/ProfileHeader/ProfileIcon/mySelf.jpeg";
import womenPhoto from "/public/img.jpg";
import X from "@/components/LinksAbout/LinksImages/XV.svg";
import GitHub from "@/components/LinksAbout/LinksImages/GitHub.svg";
import LinkedIn from "@/components/LinksAbout/LinksImages/LinkedinV.svg";
import Mail from "@/components/LinksAbout/LinksImages/MailV.svg";

//"../components/WorkWidget/WorkLogo/microsoft.png";
export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function About() {
  let myArray = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
  //-----------------------------------------------------------------------
  const itemsArray = [
    {
      title: "I’m Jane. I live in New York City, where I develop the future.",
      content: [
        {
          inside:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
        {
          inside:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
        {
          inside:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
        {
          inside:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
        },
      ],
    },
  ];
  //-----------------------------------------------------------------------------------
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
  //-------------------------------------------------------------------------------------------------------
  const FollowLinks = [
    { image: X, content: "Follow me on X", link: "https://x.com/" },
    {
      image: GitHub,
      content: "Follow me on GitHub",
      link: "https://github.com/dani99Ensi",
    },
    {
      image: LinkedIn,
      content: "Follow me on LinkedIn",
      link: "https://www.linkedin.com/learning/?u=54864305",
    },
  ];
  //-------------------------------------------------------------------------------------------------------
  const EmailLinks = [
    {
      image: Mail,
      content: "daniel@hotmail.com",
      link: "https://outlook.live.com/mail/about/index_en.html",
    },
  ];

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
            <div className="inside-144">
              <div className="grid sm:grid-cols-2 gap-x-20 pb-14">
                <div className="order-2 sm:order-first ">
                  <AboutHeader items={itemsArray} />
                </div>

                <div className="order-1 sm:order-2">
                  <Image src={womenPhoto} alt="Women Icon" width={464} height={452} />
                </div>
                <div className="sm:order-3"></div>
                <div className="order-last sm:order-4">
                  <LinksAbout items={FollowLinks} Email={EmailLinks} />
                </div>
              </div>

              <Footer links={links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
