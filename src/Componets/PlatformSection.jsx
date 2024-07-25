import React from "react";
import top_quama from "../assets/images/svg/top-quote-left.svg"
import bottom_quama from "../assets/images/svg/bottom-quote-right.svg"
const PlatformSection = () => {
  return (
    <>
      <section id="presal" className="bg-platform_bg mt-[-5px] lg:min-h-[705px] min-h-[431x]   flex flex-col  bg-no-repeat bg-center bg-cover">
        <div className="container flex flex-col justify-center  flex-grow max-w-[1344px] mx-auto px-3 ">
          <div className="  flex justify-center relative">
            <p className=" relative  font-Josefin font-normal lg:text-[40px] text-[35px]  lg:leading-[62.4px]  leading-[42px] text-center text-white max-w-[940px] ">
                
              Gilded Games is a new type of gaming platform, partially owned and
              operated by its players. Earn Gild tokens by playing and use them
              to decide the future of the game!{" "}
            </p>
         <img className=" left-[8%]  max-xl:hidden max-2xl:left-[5px] top-[-23%] absolute" src={top_quama} alt="top_quama" />
         <img className=" right-[27%] max-xl:hidden bottom-[-19%] absolute" src={bottom_quama} alt="top_quama" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PlatformSection;
