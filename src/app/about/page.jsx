import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import AboutHeader from "@/components/AboutHeader/AboutHeader.jsx";
import LinksAbout from "@/components/LinksAbout/LinksAbout.jsx";
import Footer from "@/components/Footer/Footer.jsx";

//----------------images-------------------
//import myPhoto from "../components/ProfileHeader/ProfileIcon/mySelf.jpeg";
import womenPhoto from "/public/img.jpg";
import X from "@/components/LinksAbout/LinksImages/X.png";
import GitHub from "@/components/LinksAbout/LinksImages/GitHub.png";
import LinkedIn from "@/components/LinksAbout/LinksImages/LinkedIn.png";
import Mail from "@/components/LinksAbout/LinksImages/Mail.png";

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
  {
    image: X,
    content: 'Follow me on X',
    link: 'https://github.com/dani99Ensi',
  },
  {
    image: GitHub,
    content: 'Follow me on GitHub',
    link: 'https://github.com/dani99Ensi',
  },
  {
    image: LinkedIn,
    content: 'Follow me on LinkedIn',
    link: 'https://www.linkedin.com/learning/?u=54864305',
  },
];
//-------------------------------------------------------------------------------------------------------
const EmailLinks = [
  {
    image: Mail,
    content: 'daniel@hotmail.com',
    link: 'https://outlook.live.com/mail/about/index_en.html',
  }
];

  return (
    <div>
      <Navbar options={myArray} />
      {/*End of header*/}
      <Image src={womenPhoto} alt="Women Icon" width={464} height={452} />
      <AboutHeader items={itemsArray} />
      {/*End of header*/}
     <LinksAbout items={FollowLinks} Email={EmailLinks}/>
      <Footer links={links} />
    </div>
  );
}
