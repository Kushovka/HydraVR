import React from "react";
import arrow from "/images/title/arrow.svg";

const Title = ({ title, text, description }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 flex items-center justify-center lg:justify-normal">
      <div className="flex justify-center items-center">
        {/* right */}
        <div className="lg:w-1/2">
          <h1 className="text-white text-[36px] font-semibold text-center lg:text-left">{title}</h1>
          <div className=" flex items-center gap-7 lg:-translate-y-6 -translate-y-0">
            <h2 className="text-white xl:text-[36px] lg:text-[28px] text-[36px] font-light text-center">
              {text}
            </h2>
            <img
              src={arrow}
              className="hidden lg:flex xl:w-56 lg:w-44 md:w-40 h-auto object-contain"
              alt=""
            />
          </div>
        </div>
        {/* left */}
        <div className="lg:w-[45%]">
          <p className="text-base text-white hidden lg:flex">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
