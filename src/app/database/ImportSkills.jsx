import {
  imageDataCurrency,
  languagesCurrency,
  linkDataCurrency,
  titleCurrency,
  txtDataCurrency,
} from "../database/Currency";
import {
  imageDataMusic,
  languagesMusic,
  linkDataMusic,
  titleMusic,
  txtDataMusic,
} from "../database/Music";
import {
  imageDataIncomeExpenses,
  languagesIncomeExpenses,
  linkDataIncomeExpenses,
  titleIncomeExpenses,
  txtDataIncomeExpenses,
} from "../database/IncomeExpenses";
import {
  LanguagesTypingGame,
  imageDataTypingGame,
  linkDataTypingGame,
  titleTypingGame,
  txtDataTypingGame,
} from "../database/TypingGame";
import {
  imageDataCalculation,
  languagesCalculation,
  linkDataCalculation,
  titleCalculation,
  txtDataCalculation,
} from "../database/Calculation";
import {
  imageDataCoffee,
  languagesCoffee,
  linkDataCoffee,
  titleCoffee,
  txtDataCoffee,
} from "../database/Coffee";
import {
  imageDataCovid,
  languagesCovid,
  linkDataCovid,
  titleCovid,
  txtDataCovid,
} from "../database/Covid";
import {
  imageDataTime,
  languagesTime,
  linkDataTime,
  titleTime,
  txtDataTime,
} from "../database/Time";
import {
  imageDataDonation,
  txtDataDonation,
  linkDataDonation,
  titleDonation,
  languagesDonation,
} from "../database/Donation";
import {
  imageDataFigma,
  languagesFigma,
  linkDataFigma,
  titleFigma,
  txtDataFigma,
} from "../database/Figma";

export const imageDataProject = [
  imageDataTypingGame,
  imageDataFigma,
  imageDataMusic,
  imageDataIncomeExpenses,
  imageDataCurrency,
  imageDataCovid,
  imageDataDonation,
  imageDataTime,
  imageDataCalculation,
  imageDataCoffee,
];
export const txtDataProject = [
  txtDataTypingGame,
  txtDataFigma,
  txtDataMusic,
  txtDataIncomeExpenses,
  txtDataCurrency,
  txtDataCovid,
  txtDataDonation,
  txtDataTime,
  txtDataCalculation,
  txtDataCoffee,
];

export const linkProject = [
  linkDataTypingGame,
  linkDataFigma,
  linkDataMusic,
  linkDataIncomeExpenses,
  linkDataCurrency,
  linkDataCovid,
  linkDataDonation,
  linkDataTime,
  linkDataCalculation,
  linkDataCoffee,
];

export const titleProject = [
  titleTypingGame,
  titleFigma,
  titleMusic,
  titleIncomeExpenses,
  titleCurrency,
  titleCovid,
  titleDonation,
  titleTime,
  titleCalculation,
  titleCoffee,
];

export const languagesProject = [
  LanguagesTypingGame,
  languagesFigma,
  languagesMusic,
  languagesIncomeExpenses,
  languagesCurrency,
  languagesCovid,
  languagesDonation,
  languagesTime,
  languagesCalculation,
  languagesCoffee,
];

export const languagesProjectData = {
  python: {
    title: "python",
    src: "https://th.bing.com/th/id/R.6a0edb07a69d0d62afbf0ec105b9ed7b?rik=6MTDwd%2b%2fcBsNkg&pid=ImgRaw&r=0",
  },
  js: {
    title: "javascript",
    src: "https://umangsoftware.com/wp-content/uploads/2020/08/javascript-logo.png",
  },
  html: {
    title: "html",
    src: `https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png`,
  },
  css: {
    title: "css",
    src: `https://www.creasystem.com/admin/tablas/cursos/creasy_css.png`,
  },
  figma: {
    title: "figma",
    src: `https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236765/figma-icon-md.png`,
  },
};

export const youtubeData = [
  [
    {
      src: "https://www.youtube.com/embed/AVT6_65WJCw",
      title: "Project : My profile homepage",
    },
    {
      src: "https://www.youtube.com/embed/TnAJzZehHro",
      title: "Life and Study schedule",
    },
  ],
  [
    {
      src: "https://www.youtube.com/embed/3saLsMmLTko",
      title: "รถเดินภายในเส้น (เส้นสนาม)",
    },
    {
      src: "https://www.youtube.com/embed/rKc-SfplILM",
      title: "รถเดินตามเส้น",
    },
  ],
];
