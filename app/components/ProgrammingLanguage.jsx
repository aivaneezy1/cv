import React from "react";
import Image from "next/image";

const ProgrammingLanguage = () => {
  return (
    <div className="mt-10 ml-20 sm:ml-40 relative ">
      <div>
        <h2 className="text-white text-4xl font-semibold ">Welcome!</h2>
        <h2 className="text-white text-4xl font-semibold">
          <span className="border-b-4 border-green-500 border-double">
            I'm Aivaneezy
          </span>
          <span className="mt-2 sm:mt-0"></span>
        </h2>
        <h2 className="text-gray-400 mt-5">
          Based in Italy. I mostly do web development stuff.
        </h2>
        <h2 className="mt-4 text-white text-1xl ">
          Here are some programming languages I know:
        </h2>
        <ul className="list-disc list-inside ml-5 text-gray-400">
          <li>JavaScript</li>
          <li>Python</li>
          <li>C</li>
          <li>C++</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className="flex justify-center items-center absolute top-0 right-40 transform translate-x-16">
        <div>
          <Image
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37f3bc41-b735-44cc-aba2-00f8a375c0be/de8aamf-008ce21c-9dbe-43e7-bbb7-4387103d62cc.png/v1/fit/w_828,h_414,q_70,strp/__glow_series___mmd_led_mouse_mat_download_by_chestnutscoop_de8aamf-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAwMCIsInBhdGgiOiJcL2ZcLzM3ZjNiYzQxLWI3MzUtNDRjYy1hYmEyLTAwZjhhMzc1YzBiZVwvZGU4YWFtZi0wMDhjZTIxYy05ZGJlLTQzZTctYmJiNy00Mzg3MTAzZDYyY2MucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sXXE54Jc_HrpF-WBJ-Kr_KpjURXEQkkaZcvlMhT4hBs"
            alt="picture"
            width={500}
            height={500}
            className="hidden lg:block rounded-xl shadow-lg transform scale-105 transition-transform duration-300 border-4 border-green-500 border-double p-1"
          />
        </div>
      </div>

      <div className=" mt-10 flex items-center justify-center text-white mt-40 ">
        <div className="flex flex-row justify-center items-center gap-1">
          <div className="border-b-4 border-green-500 border-double">
            <h2 className="text-4xl font-semibold transform rotate-[15deg] border-b-4 border-purple-500 border-double">
              Projects
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
    </div>
  );
};

export default ProgrammingLanguage;
