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

        aiPrompt: {
          title: "AI prompt Sharing",
          description:
            " A full-stack web application that allows users to share and post AI prompts. Use Next.js for the frontend, Node.js with Express for the backend, Tailwind CSS for styling, MongoDB for data storage.",
          websiteLink: "Website Link: ",
        },

        quizify: {
          title: "Quiz Game",
          description:
            "A full-stack web application for a quiz game where users can take quizzes. Use Next.js with TypeScript for the frontend, Express for the backend, MongoDB for the database, Clerk for authentication, and Sanity to store the questions",
            websiteLink: "Website Link: ",
        },

        
        yellowDragon:{
           title: "Motorcyle Club",
          description:
            "A full-stack web application designed for motorcycle club enthusiasts. Users can explore photo albums featuring club activities, while admin can uploading or deleting albums and pictures. Use Next.js with Javascript & react for the frotend, Express for the backend, MongoDb for the database, NextAuth for authentication and Amazon S3 for file Storage",
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

        aiPrompt: {
          title: "Condivisione di prompt per l'IA",
          description:
            "Un'applicazione web full-stack che consenta agli utenti di condividere e pubblicare prompt per l'IA. Utilizza Next.js per il frontend, Node.js con Express per il backend, Tailwind CSS per lo stile, e MongoDB per la memorizzazione dei dati",
          websiteLink: "Link al Sito: ",
        },


          quizify: {
          title: "Gioco a Quiz",
          description:
            "Un'applicazione web full-stack per un gioco a quiz dove gli utenti possono partecipare a quiz. Utilizza Next.js con TypeScript per il frontend, Express per il backend, MongoDB per il database, Clerk per l'autenticazione e Sanity per memorizzare le domande.",
            websiteLink: "Link al Sito: ",
        },


         yellowDragon:{
           title: "Club di Motociclisti",
          description:
            "Un'applicazione web full-stack progettata per gli appassionati di club motociclisti. Gli utenti possono esplorare album fotografici che mostrano le attività del club, mentre gli amministratori hanno accesso a un pannello di amministrazione dedicato per caricare o eliminare album e immagini. Utilizza Next.js con Javascript e React per il frontend, Express per il backend, MongoDB per il database, NextAuth per l'autenticazione e Amazon S3 per l'archiviazione dei file.",
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
