const collections = [
  {
    id: 0,
    isComplete: false,
    isNew: false,
    name: "CodeAnImpact Part",
    author: [ 
      "Heriyanto",
      ", and others.",
    ],
    logo: "./images/logo/w.webp",
    description: "CodeAnImpact part we're work on to build something that can make a positive impact, our goal is to create meaningful products for everyone with memorable experiences. Stay tuned!",
    view: "https://codeanimpact.netlify.app",
    github: "",
    images: [],
  },
  {
    id: 1,
    isComplete: false,
    isNew: false,
    name: "Herya App",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/herya-2.webp",
    description: "My personal web app will be available soon. Stay tuned!",
    view: "https://herya.netlify.app",
    github: "",
    images: [],
  },
  {
    id: 2,
    isComplete: true,
    isNew: true,
    name: "Herya Pro",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/herya.webp",
    description: "Herya Pro is my entire portfolio collection, Herya Pro is built using React by implementing clean and reusable code and ensuring responsive web design using mobile first approach.",
    view: "https://heryapro.netlify.app",
    github: "https://github.com/herya17/herya-projects-resource",
    images: [],
  },
  {
    id: 3,
    isComplete: true,
    isNew: true,
    name: "HeyCa!!",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/heyca.webp",
    description: "Aku pikir ini bisa buat kamu bahagia tapi kelihatannya kamu lebih bahagia dengan yang lain. #lateRelease #lateEverything",
    view: "https://heyca.netlify.app",
    github: "https://github.com/herya17/heyca-resource",
    images: [
      { id: 0, url: "./images/ui/heyca.webp", },
      { id: 1, url: "./images/ui/heyca-1.webp", },
      { id: 2, url: "./images/ui/heyca-2.webp", },
      { id: 3, url: "./images/ui/heyca-3.webp", },
      { id: 4, url: "./images/ui/heyca-5.webp", },
      { id: 5, url: "./images/ui/heyca-4.webp", },
      { id: 6, url: "./images/ui/heyca-6.webp", },
    ],
  },
  {
    id: 4,
    isComplete: true,
    isNew: false,
    name: "Personal Notes App v2",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/note.webp",
    description: "Build a single page application using React and validate input with PropTypes and implement path and query parameter to send data via URL.",
    view: "https://personal-notes-app-v2.netlify.app",
    github: "https://github.com/herya17/personal-notes-app-v2",
    images: [
      { id: 0, url: "./images/ui/notev2-1.webp", },
      { id: 1, url: "./images/ui/notev2-2.webp", },
      { id: 2, url: "./images/ui/notev2-3.webp", },
    ],
  },
  {
    id: 5,
    isComplete: true,
    isNew: false,
    name: "Her App",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/her.webp",
    description: "Build a restaurant catalog web app with good experience and functionality when accessed on mobile devices by implementing a mobile first approach, accessibility, clean code, PWAs, optimizing web performance, automation testing, and deployment with CI/CD.",
    view: "https://her-app.netlify.app",
    github: "https://github.com/herya17/her-app-resource",
    images: [
        { id: 0, url: "./images/ui/her-1.webp", },
        { id: 1, url: "./images/ui/her-2.webp", },
        { id: 2, url: "./images/ui/her-3.webp", },
        { id: 3, url: "./images/ui/her-4.webp", },
        { id: 4, url: "./images/ui/her-5.webp", },
        { id: 5, url: "./images/ui/her-6.webp", },
    ],
  },
  {
    id: 6,
    isComplete: true,
    isNew: false,
    name: "Her App Version 2",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/her.webp",
    description: "In the Her App Version 2, there are additional features by implementing the LINE Front-End Framework (LIFF) with several features such as LINE Login Channel, Send Message, QRCode Scanner, Open Window, and Get Profile.",
    view: "https://her-app-v2.netlify.app",
    github: "https://github.com/herya17/her-app-v2-resource",
    images: [
        { id: 0, url: "./images/ui/line-1.webp", },
        { id: 1, url: "./images/ui/line-2.webp", },
        { id: 2, url: "./images/ui/line-3.webp", },
        { id: 3, url: "./images/ui/line-4.webp", },
        { id: 4, url: "./images/ui/line-5.webp", },
        { id: 5, url: "./images/ui/her-6.webp"},
    ],
  },
  {
    id: 7,
    isComplete: true,
    isNew: false,
    name: "EPL Unofficial App",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/epl.webp",
    description: "Build a web-based football information application by implementing PWA properties such as apps shell, offline capabilities, push notifications and installable web apps, so that the website behaves like a native.",
    view: "https://epl-unofficial.netlify.app",
    github: "https://github.com/herya17/epl-unofficial-resource",
    images: [
        { id: 0, url: "./images/ui/epl-1.webp", },
        { id: 1, url: "./images/ui/epl-2.webp", },
        { id: 2, url: "./images/ui/epl-3.webp", },
        { id: 3, url: "./images/ui/epl-4.webp", },
        { id: 4, url: "./images/ui/epl-5.webp", },
        { id: 5, url: "./images/ui/epl-6.webp", },
    ],
  },
  {
    id: 8,
    isComplete: true,
    isNew: false,
    name: "Personal Notes App",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/note.webp",
    description: "Build a personal notes web application with React that implements reusable components, stateful components, controlled components, and also has several features such as search notes, archive, and delete.",
    view: "https://notes-v1.netlify.app",
    github: "https://github.com/herya17/personal-notes-app-resource",
    images: [
        { id: 0, url: "./images/ui/note-1.webp", },
    ],
  },
  {
    id: 9,
    isComplete: true,
    isNew: false,
    name: "MyBooks Apps",
    author: [ 
      "Heriyanto",
    ],
    logo: "./images/logo/mybooks.webp",
    description: "Create interactive web front-end application that have storage feature using web storage.",
    view: "https://mybooks-apps.netlify.app",
    github: "https://github.com/herya17/mybooks-apps",
    images: [
        { id: 0, url: "./images/ui/mybooks-1.webp", },
    ],
  },
];

const getAllCollections = () => {
  return collections;
}

const getNewCollections = () => {
  const newCollections = collections.filter((collection) => collection.isNew);
  return newCollections;
}

const getUpcomingCollections = () => {
  const upcomingCollections = collections.filter((collection) => !collection.isComplete);
  return upcomingCollections;
}

export { getAllCollections, getNewCollections, getUpcomingCollections };


// {
//   id: 0,
//   isComplete: false,
//   isNew: false,
//   name: "Tebak Pacar",
//   author: [ 
//     "Heriyanto",
//   ],
//   logo: "./images/logo/tebak-pacar.webp",
//   description: "I'm working on something that can surprise you, I will be here soon, keep smiling.",
//   view: "https://tebak-pacar.netlify.app",
//   github: "",
//   images: [],
// },
