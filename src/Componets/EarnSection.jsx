import React from "react";
import gif from "../assets/images/png/gilded-gif.gif";
import lEft_ellipe from "../assets/images/png/earnsection-leftellipe.png";

const EarnSection = () => {
  return (
    <>
      <section className=" bg-black mt-[-5px] relative pb-[110px] max-lg:pb-[50px] overflow-hidden">
        <div className="container max-w-[1344px] mx-auto px-3  ">
          <h2 className=" relative  z-20 font-Josefin text-[35px] lg:text-[48px] text-center text-white   leading-[61.2px] font-bold ">
            Play To <span className=" text-[#3E90EB] ">Earn</span>
          </h2>
          <div className=" flex justify-center lg:mt-[16px] mt-[4px]">
            <p className=" relative  z-20 font-poppins font-normal md:text-[20px] text-[14px] md:leading-[32.9px] leading-[25px] max-w-[1024px] text-center text-white opacity-70 ">
              Gilded World will be the first game released by Gilded Games. It
              is an MMORPG, browser based game that is unlike any other. We have
              taken inspiration from some of the most popular and successful
              MMORPG and RPG games and have boiled it down to the best online
              gameplay that people will actually want to play!
            </p>
          </div>
          <div className=" relative border_grident before:absolute before:z-30 before:max-sm:border-[3px] before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)border-box] before:border-[5px]  before:border-transparent">
            <img
              className="  relative z-10 w-[100%] max-h-[561px] h-[100%] mt-[48px]"
              src={gif}
              alt="gif"
            />
          </div>

          <img
            className=" absolute bottom-[0%] left-[-42px] max-lg:hidden"
            src={lEft_ellipe}
            alt="ellipe"
          />
          <img
            className=" absolute bottom-[0%] right-[-75px] max-lg:hidden"
            src={lEft_ellipe}
            alt="ellipe"
          />
        </div>
      </section>
    </>
  );
};

export default EarnSection;
