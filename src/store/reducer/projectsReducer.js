const aloha = require("../../../public/img/works/aloha.png");
const instanews = require("../../../public/img/works/instanews.png");
const ponggame = require("../../../public/img/works/ponggame.png");
const inhabitent = require("../../../public/img/works/inhabitent.png");
const devquotes = require("../../../public/img/works/devquotes.png");
const meetup = require("../../../public/img/works/meetup.png");
const citysearcher = require("../../../public/img/works/citysearcher.png");
const recreativeapparel = require("../../../public/img/works/recreativeapparel.png");
const cleanbeauty = require("../../../public/img/works/cleanbeauty.png");

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
const cleanbeautymobile = require("../../../public/img/works/cleanbeauty2.png");

const initialState = [
  {
    id: "clean-beauty",
    name: "Clean Beauty",
    type: "development",
    img: cleanbeauty,
    mockup: cleanbeautymobile,
    technology: ["HTML", "CSS", "React", "Redux", "React-Router"],
    url: "https://github.com/risakanagawa/city-searcher",
    realUrl: "https://risakanagawa.github.io/cleanbeauty/",
    description: {
      en:
        "Practice Ecommerce web site made by React/Redux. Responsible for mobile and desktop.",
      ja: "Eコマースのフロントのみ。React、Reduxにて設計。レスポンシブです。",
    },
  },
  {
    id: "city-searcher",
    name: "City Seacher",
    type: "development",
    img: citysearcher,
    mockup: citysearcherDesktop,
    technology: ["HTML", "CSS", "React", "Redux", "React-Router"],
    url: "https://github.com/risakanagawa/city-searcher",
    description: {
      en:
        "City search app made with HTML, SASS, JavaScript(React, Redux). When you search your favorite city, it will show weather, top news, top restraunts and things to do about your destination. It enables to save up to 5 cities in your list and you can access it anytime.",
      ja:
        "React/Reduxの練習アプリ。好きな街を検索すると天気、トップニュースやレストラン。近くで何ができるか等調べることができ、最大５件まで保存することができます。",
    },
  },

  {
    id: "RecreativeApparel",
    name: "Recreative Apparel",
    type: "development",
    img: recreativeapparel,
    mockup: recreativeapparelDesktop,
    technology: ["HTML", "CSS", "WordPress", "PHP", "jQuery"],
    url: null,
    description: {
      en:
        "E-commerce web site for apparel service. Worked with wonderful web developers, UI/UX designers and marketers for our client. This website is made with HTML, SASS, JQuery, WordPress and PHP in back-end.",
      ja:
        "デザインチームと開発チーム計10人で行ったWordPressでのWebサイト。クライアントのヒアリングから設計まで行いました。",
    },
  },
  {
    id: "Vancouver-meetup-seacher",
    name: "Vancouver Meetup Seacher",
    type: "development",
    img: meetup,
    mockup: meetupDesktop,
    technology: ["HTML", "CSS", "React", "Redux", "Google-Map", "React-Router"],
    url: "https://github.com/risakanagawa/search-events",
    description: {
      en:
        "Meetup Searcher in Vancouver. Built with HTML, Sass, JavaScript (React, Redux). You can search upcoming meetup here in vancouver by various categories. It will show location of these meetups by Google Maps, Meetup API",
      ja:
        "React/Reduxでのアプリ。MeetUp APIを使い、近場でのイベントをカテゴリ別に調べることができます。",
    },
  },
  {
    id: "aloha-project",
    name: "Aloha project",
    type: "development",
    img: aloha,
    mockup: alohaDesktop,
    technology: ["HTML", "CSS", "jQuery"],
    url: "https://github.com/risakanagawa/Aloha",
    description: {
      en:
        "Simple Ecommerce Website for fashion apparel. Used with HTML, CSS, jQuery.",
      ja: "シンプルなWebサイト。",
    },
  },
  {
    id: "instanews-app",
    name: "Instanews App",
    type: "development",
    img: instanews,
    mockup: instanewsDesktop,
    technology: ["HTML", "CSS", "jQuery"],
    url: "https://github.com/risakanagawa/instanews",
    description: {
      en:
        "Simple news feaching app from NYtimes API. It will show top news by selected categories. ",
      ja:
        "シンプルなWebサイト。NYtimes APIよりデータを引っ張り、カテゴリーごとにご覧いただけます。",
    },
  },
  {
    id: "classic-ponggame",
    name: "Classic Ponggame",
    type: "development",
    img: ponggame,
    mockup: ponggameDesktop,
    technology: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/risakanagawa/Pong-game",
    description: {
      en: "Classic Pong Game made by plain javascript. ",
      ja: "クラシックなピンポンゲーム",
    },
  },
  {
    id: "inhabitent",
    name: "Inhabitent",
    type: "development",
    img: inhabitent,
    mockup: inhabitentDesktop,
    technology: ["HTML", "SASS", "jQuery", "PHP", "WordPress"],
    url: "https://github.com/risakanagawa/inhabitent",
    description: {
      en:
        "Outdoor company website with blog and shop pages. Successfully made with HTML, SASS, WordPress and PHP in back-end.",
      ja: "アウトドア会社のダミーサイト。WordPressにより作成",
    },
  },
  {
    id: "quotes-on-devs",
    name: "Quotes on Devs",
    type: "development",
    img: devquotes,
    mockup: quotesondevDesktop,
    technology: ["HTML", "CSS", "jQuery", "WordPress"],
    url: "https://github.com/risakanagawa/dev-quotes",
    description: {
      en:
        "Quotes application with WordPress. You can login and post by WordPres Rest API.",
      ja: "WordPressの課題サイト",
    },
  },
  {
    id: "dello",
    name: "Dello",
    type: "design",
    img: dello,
    technology: ["Sketch"],
    url: null,
    description: {
      en: "iOS app design for startup in San Francisco.",
      ja:
        "Sketchで作成したiOSアプリデザイン。サンフランシスコにあるスタートアップでのデザイン。",
    },
  },
  {
    id: "design-1",
    name: "Login Page",
    type: "design",
    img: design1,
    technology: ["Sketch", "Framer"],
    url: null,
    description: {
      en: "iOS app design for Daily UI, made by Sketch and Framer",
      ja: "SketchとFramerでのログイン画面アプリデザイン。",
    },
  },
];

export default (state = initialState, action) => {
  return state;
};
