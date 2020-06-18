import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "greet": "Hi, I am Risa from a ramen city in Japan and a front-end developer. I love combining things. My background is linguistics. I believe that not only technical or pratical skills, everything we've experienced in our life can be mixed up and result in great outcome together. I am really passionate about helping and building things coming out from just an idea to make people's lifes better. I code, sometimes design.",
        "language": "ja",
        "resume" : "RESUME"
      },
    },
    ja: {
      translation: {
        "greet": "福岡出身のフロントエンドエンジニアです。大学卒業後、汎用系エンジニアとして働くことになりましたが、Webデザインやアプリケーション開発がしたく転職を決意。そのあと、カナダのブートキャンプで一からWeb開発を学び直しました。他にも日本語を教えていたりしていました。",
        "language": "en",
        "resume" : "履歴書"
      },
    },
  },
  lng: "ja",
  fallbackLng: "ja",
  interpolation: { escapeValue: false },
});
