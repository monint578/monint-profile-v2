import ToraberuImg from "./Public/Img/toraberu.png";
import Profile1Img from "./Public/Img/profile1.png";
import Profile2Img from "./Public/Img/profile2.png";
import SibusImg from "./Public/Img/sibus.png";
import NativeImg from "./Public/Img/reactnative.png";
import JsImg from "./Public/Img/vanillajsprojects.png";
import RgbImg from "./Public/Img/rgbcolor.png";

// Is used in Experience.js
export const experience = [
  {
    name: "Promotional Representative",
    where: 'UAB "Partizanas"',
    when: "2018 07 - 2019 11",
    descriptions: [
      "Various product promotion and presentation",
      "Company representation",
    ],
  },
  {
    name: "Sales Manager",
    where: 'UAB "Garlita" knitting manufacturer',
    when: "2019 05 - 07",
    descriptions: [
      "Consulting clients and taking orders for manufacturing step by step",
      "Revisioning product samples for customers",
      "Ordering knitwear accessories and yarn for the manufacturing process",
      "Issuing invoices for customers",
      "Working with the company's internal software",
    ],
  },
  {
    name: "Deputy to sewing manager",
    where: 'UAB "Garlita" knitting manufacturer',
    when: "2019 04 - 05",
    descriptions: [
      "Organizing knitwear accessories for the manufacturing process",
      "Working with invoices and accounting",
      "Working with the company's internal software",
    ],
  },
  {
    name: "Intern",
    where: 'UAB "Garlita" knitting manufacturer',
    when: "2019 02 - 04",
    descriptions: [
      "I was interning in knitting manufacturing while writing my Bachelor's degree project. While I was an intern I saw every part of the manufacturing and prepared an evaluation of the company for University.",
    ],
  },
  {
    name: "Administrator of the weaving manufacturing",
    where: 'UAB "Liningas" weaving manufacturer',
    when: "2017 06 - 07",
    descriptions: [
      "Organizing the company's assortment within an internal system",
      "Working with invoices, accounting",
      "Working in the laboratory",
    ],
  },
  {
    name: "Knitting manufacturing assistance",
    where: 'UAB "Omniteksas" knitting manufacturer',
    when: "2016 07 - 08",
    descriptions: [
      "Making knitting samples for customers",
      "Sewing clothing samples",
    ],
  },
];

// Is used in About.js
export const aboutMe = [
  {
    name: "Planner",
    description:
      "I love planning even the smallest things, as I think it‘s the most productive way to achieve my goals. I even created a step-by-step plan for this very website!",
  },
  {
    name: "Design at Heart",
    description:
      "My favorite thing to do is create something new from scratch. I use Figma for creating website designs. Also in my free time I'm making jewelry, design and sew clothes.",
  },
  {
    name: "Team Player",
    description:
      "I understand that one player can't win the game. Communicating and sharing ideas is very important for taking projects to the next level. Thats why I love working in a team environment.",
  },
];

//   Is used in Theme.js
export const themes = [
  {
    name: "Default",
    bg: "#f4f9fc",
    heading: "#0f1b61",
    accent: "#73bbc5",
    text: "#0f1b61",
    primary: "#7f00e0",
  },
  {
    name: "Electric dark",
    bg: "#0A192F",
    heading: "#E9EEFD",
    accent: "#c54ca3",
    text: "#CCD6F6",
    primary: "#64FFDA",
  },
  {
    name: "Cherry on top",
    bg: "#F8E5E5",
    heading: "#000000",
    accent: "#77D1F8",
    text: "#C68A8E",
    primary: "#FA255E",
  },
  {
    name: "Watermelon",
    bg: "#EFEFE8",
    heading: "#000000",
    accent: "#6DAC4F",
    text: "#0A5E2A",
    primary: "#FE0000",
  },
  {
    name: "Summer Vibes",
    bg: "#FFF685",
    heading: "#FF1D58",
    accent: "#00DDFF",
    text: "#F75990",
    primary: "#0049B7",
  },
  {
    name: "Asphalt",
    bg: "#444444",
    heading: "#FFFFFF",
    accent: "#FA255E",
    text: "#D8D8D8",
    primary: "#08FDD8",
  },
  {
    name: "Blue",
    bg: "#f9fdff",
    heading: "#286fb4",
    accent: "#b0dde4",
    text: "#286fb4",
    primary: "#df4c73",
  },
  {
    name: "Earth tones",
    bg: "#ece8d7",
    heading: "#222",
    accent: "#e49c4b",
    text: "#302718",
    primary: "#638844",
  },
  {
    name: "RGB",
    bg: "#000",
    heading: "#fff",
    accent: "#0000ff",
    text: "#ff0000",
    primary: "#00ff00",
  },
  {
    name: "LTU",
    bg: "#fff",
    heading: "#006a44",
    accent: "#fdb913",
    text: "#000",
    primary: "#c1272d",
  },
  {
    name: "Galaxy",
    bg: "#00076f",
    heading: "#f4f9fc",
    accent: "#f5bf0b",
    text: "#c9ccfd",
    primary: "#f91ada",
  },
];

// Is used in Projects.js

export const projects = [
  {
    name: "Toraberu",
    gitlink: "https://github.com/monint578/toraberu",
    link: "https://toraberu.herokuapp.com/",
    codelink: "#",
    gitIconStyle: "fab fa-github",
    linkIconStyle: "fas fa-external-link-alt",
    codeIconStyle: "none",
    prog: "Node.js / Express / MongoDB / Boostrap 4 / Docker",
    img: ToraberuImg,
    descr:
      "This is my personal project for sharing my most beloved places that I have visited. I wanted to challenge myself by designing a unique user interface. This project was created by remaking the YelpCamp project from the Udemy course: The Web Developer Bootcamp.",
  },
  {
    name: "Profile page v1",
    gitlink: "https://github.com/monint578/monint-profile",
    link: "#",
    codelink: "#",
    gitIconStyle: "fab fa-github",
    linkIconStyle: "fas fa-external-link-alt",
    codeIconStyle: "none",
    prog: "React.js / Figma",
    img: Profile1Img,
    descr:
      "I wanted to learn React.js so I used it to create my first profile page. This was a single page application with several routes. It was  a fun experience but I knew I can make something better!",
  },
  {
    name: "Profile page v2",
    gitlink: "#",
    link: "#",
    codelink: "#",
    gitIconStyle: "fab fa-github",
    linkIconStyle: "none",
    codeIconStyle: "none",
    prog: "React.js / Figma",
    img: Profile2Img,
    descr:
      "This is the page you are currently viewing! I wanted to create it with minimalist web design and add advanced CSS. I always wanted to make a color-changing application, so I did!",
  },
  {
    name: "React Native",
    gitlink: "https://github.com/monint578/ReactSeals-Developer-Assignment",
    link: "#",
    codelink: "#",
    gitIconStyle: "fab fa-github",
    linkIconStyle: "none",
    codeIconStyle: "none",
    prog: "React Native / Android Studio",
    img: NativeImg,
    descr:
      "This is my first project built with React Native. This app is made to fetch data from themoviedb.org and display it in the user interface. The main page is for browsing: a preview of three movie lists sorted by different categories. The second page shows a single movie's details.",
  },
  {
    name: "Mini Vanilla JS projects",
    gitlink: "https://github.com/monint578/15-Vanilla-JS-projects",
    link: "#",
    codelink: "https://codepen.io/collection/DoQwjR",
    gitIconStyle: "fab fa-github",
    linkIconStyle: "none",
    codeIconStyle: "fab fa-codepen",
    prog: "JavaScript",
    img: JsImg,
    descr:
      "I wanted to keep pushing myself forward and continue learning JavaScript. This collection contains a lot on single-purpose components that were fun to create and may be handy in the future.",
  },
  {
    name: "RGB color guessing game",
    gitlink: "https://github.com/monint578/color-game",
    link: "#",
    codelink: "https://codepen.io/monint578/pen/rNeBMdy",
    gitIconStyle: "fab fa-github",
    linkIconStyle: "none",
    codeIconStyle: "fab fa-codepen",
    prog: "jQuery",
    img: RgbImg,
    descr:
      "This simple RGB color game was created while taking the Udemy course: The Web Developer Bootcamp.",
  },
  {
    name: "Sibus",
    gitlink: "#",
    link: "#",
    codelink: "#",
    gitIconStyle: "none",
    linkIconStyle: "none",
    codeIconStyle: "none",
    contentStyle: "card-progress",
    prog: "Go / MySQL / React.js / Figma / Docker",
    img: SibusImg,
    descr:
      "I have started this project because I couldn‘t find a cooking application that would suit my needs, so I decided to make one myself. I plan to create an ingredients calculator for serving size and an ingredient shopping list. Users will also be able to save recipes and leave notes for themselves. Currently, Sibus is in the designing phase. I‘m very excited to keep working on Sibus because it is my biggest project yet.",
  },
];
