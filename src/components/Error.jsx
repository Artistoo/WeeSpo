import { AiOutlineReload as Reload  } from "react-icons/ai";

import React from "react";
const Error = ({ title, error }) => {
  return (
    <div className="w-full flex justify-center items-center relative  ">
 
      <h1
        className={`m-auto text-white font-[raleway] bg-gradient-to-l from-red-500 to-red-600 mx-10 p-5 text-center  `}
      >

        something Went Wrong <b className="text-red-100 ">{error}</b> try
        Refreshing the page , if the Error Remined Please Let us Know{" "}
        <a href="http://localhost:3000/n" className="decoration-0 text-blue">
          here
        </a>
        <Reload title={`Reload the page`} onClick={()=> window.location.reload() }  className={` cursor-pointer user-none mt-5 text-white left-11 top-0 hover:rotate-[360deg] ease-linear duration-[300ms] m-auto  `} size={21} fill={"white"} />
      </h1>
    </div>
  );
};

export default Error;
