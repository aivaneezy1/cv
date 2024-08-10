
"use client"
import React from "react";
import Image from "next/image";
import Card from "./Card";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
const ProgrammingLanguage = () => {
  const {t, i18n} = useTranslation();

  return (
    <div className="mt-10 ml-20  mr-5 sm:ml-40 relative ">
      <div>
        <h2 className="text-white text-4xl font-semibold ">{t("welcome")}</h2>
        <h2 className="text-white text-4xl font-bold">
          <span className="border-b-4 border-green-500 border-double">
            {t("intro")}
          </span>
          <span className="mt-2 sm:mt-0"></span>
        </h2>
        <h2 className="text-neutral-300 mt-5">
          {t("location")}
        </h2>
        <h2 className="mt-4 text-white text-4xl font-bold w-1/2 ">
          <span className="border-b-4 border-green-500 border-double rounded whitespace-nowrap">
           {t("techStack")}
          </span>
        </h2>

        <p className="text-white font-semibold text-lg mt-5">
          {t("stackDescription")}
        </p>
        {/*Tech Stack */}
        <div className=" mt-2 flex items-center  ">
          <table className="hover:border-2   ">
            <thead>
              <tr>
                <th className="border-b-2 p-2 text-left text-white font-bold text-lg mt-5">
                  {t("category")}
                </th>
                <th className="border-b-2 p-2 text-left text-white"> {t("d")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b-2 p-2 pr-20 text-white font-bold text-lg mt-5">
                   {t("categories.languages")}
                </td>
                <td className="border-b-2 p-2 text-white">
                  Javascript, TypeScript, C & C++
                </td>
              </tr>
              <tr>
                <td className="border-b-2 p-2 text-white font-bold text-lg mt-5">
                    {t("categories.frameworks")}
                </td>
                <td className="border-b-2 p-2 text-white">Express, Nextjs</td>
              </tr>
              <tr>
                <td className="border-b-2 p-2  text-white font-bold text-lg mt-5">
                      {t("categories.libraries")}
                </td>
                <td className="border-b-2 p-2 text-white">
                  React & TailwindCss
                </td>
              </tr>
              <tr>
                <td className="border-b-2 p-2 text-white font-bold text-lg mt-5">
                  {t("categories.databases")}
                </td>
                <td className="border-b-2 p-2 text-white">
                  MongoDb & Postgresql
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center items-center absolute top-0 right-40 transform translate-x-16">
        <div className="">
          <Image
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37f3bc41-b735-44cc-aba2-00f8a375c0be/de8aamf-008ce21c-9dbe-43e7-bbb7-4387103d62cc.png/v1/fit/w_828,h_414,q_70,strp/__glow_series___mmd_led_mouse_mat_download_by_chestnutscoop_de8aamf-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcLzM3ZjNiYzQxLWI3MzUtNDRjYy1hYmEyLTAwZjhhMzc1YzBiZVwvZGU4YWFtZi0wMDhjZTIxYy05ZGJlLTQzZTctYmJiNy00Mzg3MTAzZDYyY2MucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sXXE54Jc_HrpF-WBJ-Kr_KpjURXEQkkaZcvlMhT4hBs"
            alt="picture"
            width={500}
            height={500}
            className="hidden lg:block rounded-xl shadow-lg transform scale-105 transition-transform duration-300 border-4 border-green-500 border-double p-1 -z-10 "
          />
        </div>
      </div>

      <div className=" mt-10 flex items-center justify-center text-white mt-40 ">
        <div className="flex flex-row justify-center items-center gap-1">
          <div className="border-b-4 border-green-500 border-double">
            <h2 className="text-4xl font-semibold transform rotate-[15deg] border-b-4 border-purple-500 border-double">
              {t("projects")}
            </h2>
          </div>
          <div className="items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 mt-10"
            >
              <path
                fill="#74C0FC"
                d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/*Project Card  Component*/}
      <Card />

      {/* Contact Component*/}
      <Contact/>
    </div>
  );
};

export default ProgrammingLanguage;
