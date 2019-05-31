const aloha = require("../../../public/img/works/aloha.png");
const instanews = require("../../../public/img/works/instanews.png");
const ponggame = require("../../../public/img/works/ponggame.png");
const inhabitent = require("../../../public/img/works/inhabitent.png");
const devquotes = require("../../../public/img/works/devquotes.png");
const meetup = require("../../../public/img/works/meetup.png");
const citysearcher = require("../../../public/img/works/citysearcher.png");
const recreativeapparel = require("../../../public/img/works/recreativeapparel.png");


const dello = require("../../../public/img/works/dello.png");
const design1 = require("../../../public/img/works/dailyUI01.gif");
//mockup 
const alohaDesktop = require("../../../public/img/works/alohaDesktop.png");
const instanewsDesktop = require("../../../public/img/works/instanewsDesktop.png");
const inhabitentDesktop = require("../../../public/img/works/inhabitentDesktop.png");
const quotesondevDesktop = require("../../../public/img/works/quotesondevDesktop.png");
const meetupDesktop = require("../../../public/img/works/meetupDesktop.png");
const ponggameDesktop = require("../../../public/img/works/ponggameDesktop.png");
const citysearcherDesktop = require("../../../public/img/works/citysearcherDesktop.png");
const recreativeapparelDesktop = require("../../../public/img/works/recreativeapparelDesktop.png");

const initialState = {
  projects: [
    {
      id: 'city-searcher',
      name: "City Seacher",
      type: "development",
      img: citysearcher,
      mockup: citysearcherDesktop,
      technology: ["React", "Redux", "React-Router"],
      url: "https://github.com/risakanagawa/city-searcher"
    },
    {
      id: 'RecreativeApparel',
      name: "Recreative Apparel",
      type: "development",
      img: recreativeapparel,
      mockup: recreativeapparelDesktop,
      technology: ["WordPress", "PHP", "jQuery"],
      url: null
    },
    {
      id: 'Vancouver-meetup-seacher',
      name: "Vancouver Meetup Seacher",
      type: "development",
      img: meetup,
      mockup: meetupDesktop,
      technology: ["React", "Redux", "Google Map", "React-Router", "MeetupAPI"],
      url: "https://github.com/risakanagawa/search-events"
    },
    {
      id: 'aloha-project',
      name: "Aloha project",
      type: "development",
      img: aloha,
      mockup: alohaDesktop,
      technology: ["HTML", "CSS", "jQuery"],
      url: "https://github.com/risakanagawa/Aloha"
    },
    {
      id: 'instanews-app',
      name: "Instanews App",
      type: "development",
      img: instanews,
      mockup: instanewsDesktop,
      technology: ["HTML", "CSS", "jQuery", "NYtimesAPI"],
      url: "https://github.com/risakanagawa/instanews"
    },
    {
      id: 'classic-ponggame',
      name: "Classic Ponggame",
      type: "development",
      img: ponggame,
      mockup: ponggameDesktop,
      technology: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/risakanagawa/Pong-game"
    },
    {
      id: 'inhabitent',
      name: "Inhabitent",
      type: "development",
      img: inhabitent,
      mockup: inhabitentDesktop,
      technology: ["HTML", "CSS", "jQuery", "PHP", "WordPress"],
      url: "https://github.com/risakanagawa/inhabitent"
    },
    {
      id: 'quotes-on-devs',
      name: "Quotes on Devs",
      type: "development",
      img: devquotes,
      mockup: quotesondevDesktop,
      technology: ["HTML", "CSS", "jQuery"],
      url: "https://github.com/risakanagawa/dev-quotes"
    },
    {
      id: 'dello',
      name: "Dello",
      type: "design",
      img: dello,
      technology: ["Sketch"],
      url: null
    },
    {
      id: 'design-1',
      name: "Login Page",
      type: "design",
      img: design1,
      technology: ["Sketch", "Framer"],
      url: null
    }
  ]
};

export default (state = initialState, action) => {
  return state;
};
