"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ToggleMode from "./ToogleMode";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true); // State to track current language

  // Function to toggle language
  const handleChangeLanguage = () => {
    const newLang = isEnglish ? 'it' : 'en';
    i18n.changeLanguage(newLang); 
    setIsEnglish(!isEnglish); 
  };

  return (
    <div className="flex justify-end items-center gap-5">
      <div className="mt-5 flex items-center">
        <button onClick={handleChangeLanguage}>
          <h2 className="text-white text-lg font-semibold border-b-2 border-white">
            {isEnglish ? "It" : "En"}
          </h2> {/* Toggle button label based on language */}
        </button>
      </div>
      <div className="mr-5 mt-5 flex items-center text-white cursor-pointer">
        <ToggleMode />
      </div>
    </div>
  );
};

export default Navbar;
