// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // Default language
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
        intro: "I'm Aivaneezy",
        location: "Based in Italy. I mostly do web development stuff.",
        techStack: "Tech Stack",
        stackDescription: "Here is a collection of the stack I use",
        category: "Category",

        categories: {
          languages: "Languages",
          frameworks: "Frameworks",
          libraries: "Libraries",
          databases: "Databases",
        },
        d: "Details",
        details: {
          languages: "Javascript, TypeScript, C & C++",
          frameworks: "Express, Nextjs",
          libraries: "React & TailwindCss",
          databases: "MongoDb & Postgresql",
        },
        projects: "Projects",

        cvTitle: {
          title: "Curriculum Generator",
          description:
            " A full-stack web application designed to help users create and download professional CVs. Technology Stack used are Nextjs, Node Express, TailwindCss, MongoDB and Amazon S3 for file storage.",
          websiteLink: "Website Link: ",
        },

        contact: {
          contactFind: "Find me on",
          name: "Name",
          inputName: "Enter your name",
          email: "Email",
          inputEmail: "Enter your email",
          message: "Message",
          inputMessage: "Enter your message",
          sendButton: "Send",
        },
      },
    },
    it: {
      translation: {
        welcome: "Benvenuto",
        intro: "Sono Aivaneezy",
        location:
          "Situato in Italia. Mi occupo principalmente di sviluppo web.",
        techStack: "Tecnologie",
        stackDescription: "Ecco una raccolta delle tecnologie che utilizzo",
        category: "Categorie",

        categories: {
          languages: "Lingue",
          frameworks: "Framework",
          libraries: "Librerie",
          databases: "Database",
        },
        d: "Dettaglio",
        details: {
          languages: "Javascript, TypeScript, C & C++",
          frameworks: "Express, Nextjs",
          libraries: "React & TailwindCss",
          databases: "MongoDb & Postgresql",
        },
        projects: "Progetti",

        cvTitle: {
          title: "Generatore di Curriculum",
          description:
            "Un'applicazione web full-stack progettata per aiutare gli utenti a creare e scaricare CV professionali. Le tecnologie utilizzate sono Nextjs, Node Express, TailwindCss, MongoDB e Amazon S3 per l'archiviazione dei file.",
          websiteLink: "Link al Sito: ",
        },

        contact: {
          contactFind: " Trova me su",
          name: "Nome",
          inputName: "Inserisci il tuo nome",
          email: "Email",
          inputEmail: "Inserisci la tua email",
          message: "Messaggio",
          inputMessage: "Inserisci il tuo messaggio",
          sendButton: "Invia",
        },
      },
    },
  },
});

export default i18n;
