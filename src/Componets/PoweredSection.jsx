import React from "react";
import unreallogo from "../assets/images/png/unreal-logo.png";
import uniswaplogo from "../assets/images/png/uniswap-logo.png";
import coinlogo from "../assets/images/png/coin-logo.png";
import polygonlogo from "../assets/images/png/polyon.png";
import Slider from "react-slick";
const PoweredSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 0,
    slidesToShow: 4,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1045,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className=" bg-black mt-[-5px] ">
        <div className="container  max-w-[1344px] mx-auto px-3 lg:pt-[58px]  pt-[11px] pb-[192px] max-lg:pb-[65px]">
          <h2 className=" font-Josefin font-bold text-[35px] lg:text-[48px] leading-[61.2px] text-white text-center ">
            <span className="bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] inline-block text-transparent bg-clip-text">  Powered    
            </span>           By:
          </h2>

          <div className=" max-xl:hidden">
            <div className=" flex gap-[24px] pt-[68px] justify-center">
              <div className=" max-w-[312px] relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[24px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent h-[100%] py-[67px] px-[19px] rounded-[24px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)]  hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]  duration-300 hover:shadow-[0px_7px_30px_0px_#1BABFE]">
                <img src={unreallogo} alt="unreallogo" />
              </div>
              <div className=" max-w-[312px] relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[24px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent h-[100%] py-[58.70px] px-[19px] rounded-[24px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]  duration-300 hover:shadow-[0px_7px_30px_0px_#1BABFE] ">
                <img src={uniswaplogo} alt="uniswaplogo" />
              </div>
              <div className=" max-w-[312px] relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[24px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent h-[100%] py-[74px] px-[32px] rounded-[24px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]  duration-300 hover:shadow-[0px_7px_30px_0px_#1BABFE] ">
                <img src={coinlogo} alt="coinlogo" />
              </div>
              <div className=" max-w-[312px] relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[24px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent h-[100%] py-[58.70px] px-[19px] rounded-[24px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]  duration-300 hover:shadow-[0px_7px_30px_0px_#1BABFE] ">
                <img src={polygonlogo} alt="polygonlogo" />
              </div>
            </div>
          </div>
          <div className=" xl:hidden">
          <Slider {...settings} className="pt-[59px]  max-lg:pt-[24px]">
          <div className=" max-w-[312px] relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[24px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent py-[67px] px-[19px] rounded-[24px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)]  hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]  duration-300 hover:shadow-[0px_7px_30px_0px_#1BABFE]">
                <img src={unreallogo} alt="unreallogo" />
              </div>
              <div className=" max-w-[312px] relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[24px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent py-[58.70px] px-[19px] rounded-[24px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]  duration-300 hover:shadow-[0px_7px_30px_0px_#1BABFE] ">
                <img src={uniswaplogo} alt="uniswaplogo" />
              </div>
              <div className=" max-w-[312px] relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[24px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent py-[74px] px-[32px] rounded-[24px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]  duration-300 hover:shadow-[0px_7px_30px_0px_#1BABFE] ">
                <img src={coinlogo} alt="coinlogo" />
              </div>
              <div className=" max-w-[312px] relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[24px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent py-[58.70px] px-[19px] rounded-[24px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)]  duration-300 hover:shadow-[0px_7px_30px_0px_#1BABFE] ">
                <img src={polygonlogo} alt="polygonlogo" />
              </div>
             </Slider>
        </div> 
        </div> 
       
      </section>
    </>
  );
};

export default PoweredSection;
