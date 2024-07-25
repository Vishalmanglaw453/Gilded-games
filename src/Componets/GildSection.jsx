import React from "react";
import svg1 from "../assets/images/svg/gild_svg1.svg";
import svg2 from "../assets/images/svg/gildsvg2.svg";
import svg3 from "../assets/images/svg/gildsvg3.svg";
import svg4 from "../assets/images/svg/gildsvg4.svg";
import Slider from "react-slick";
const GildSection = () => {
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
      <section id="gild" className=" bg-gild_bg bg-no-repeat bg-center bg-cover mt-[-5px]">
        <div className="container  max-w-[1344px] mx-auto px-3 pt-[130px] max-lg:pt-[50px] pb-[136px] max-lg:pb-[30px] ">
          <h2 className=" font-Josefin font-bold text-[35px] lg:text-[48px] leading-[61.2px] text-white text-center ">
            <span className="bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] inline-block text-transparent bg-clip-text">
              $GILD
            </span>{" "}
            Token Info
          </h2>
          <div className=" max-2xl:hidden block">
            <div className="  flex gap-[24px] items-center justify-center pt-[59px] ">
              <div className="token_box  relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent h-[100%] duration-300   w-[100%] pt-[24px] pb-[17px] flex flex-col items-center max-w-[312px] min-h-[181px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[13px]    hover:shadow-[0px_8px_30px_0px_#1BABFE] ">
                <img src={svg1} alt="svg1" />
                <p className=" font-Josefin mt-[9px] font-bold text-[32px] leading-[38.25px] text-white ">
                  3 BIllion
                </p>
                <p className=" text-white font-Josefin font-normal text-[18px] leading-[22.95px]  ">
                  GILD Token Info
                </p>
              </div>
              <div className="token_box  relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent h-[100%] duration-300   w-[100%] pt-[30px] flex flex-col items-center max-w-[312px] min-h-[181px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[13px]    hover:shadow-[0px_8px_30px_0px_#1BABFE] ">
                <img src={svg2} alt="svg2" />
                <p className=" font-Josefin mt-[13px] font-bold text-[32px] leading-[38.25px] text-white ">
                  Pre Sale Token
                </p>
              </div>
              <div className="token_box  relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent h-[100%] duration-300   w-[100%] pt-[18px] pb-[17px] flex flex-col items-center max-w-[312px] min-h-[181px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[13px]    hover:shadow-[0px_8px_30px_0px_#1BABFE] ">
                <img src={svg3} alt="svg3" />
                <p className=" font-Josefin mt-[11px] font-bold text-[32px] leading-[38.25px] text-white ">
                  100,000+
                </p>
                <p className=" text-white font-Josefin font-normal text-[18px] leading-[22.95px]  ">
                  Holders
                </p>
              </div>
              <div className="token_box  relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent h-[100%] duration-300   w-[100%] py-[16px]  flex flex-col items-center max-w-[312px] min-h-[181px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[13px]    hover:shadow-[0px_8px_30px_0px_#1BABFE] ">
                <img src={svg4} alt="svg4" />
                <p className=" font-Josefin mt-[8px] font-bold text-[32px] leading-[38.25px] text-white ">
                  2,500+
                </p>
                <p className=" text-white font-Josefin mt-[4px] font-normal text-[18px] leading-[22.95px]  ">
                  NFT Sold
                </p>
              </div>
            </div>
          </div>
          <div className=" 2xl:hidden block">
            <Slider {...settings} className="pt-[59px]">
              <div className="  flex justify-center">
                <div className="token_box  relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent  before:bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)] h-[100%] duration-300   w-[100%] pt-[24px] pb-[17px] flex flex-col items-center max-w-[312px] min-h-[181px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[13px]  ">
                  <img src={svg1} alt="svg1" />
                  <p className=" font-Josefin mt-[9px] font-bold text-[32px] leading-[38.25px] text-white ">
                    3 BIllion
                  </p>
                  <p className=" text-white font-Josefin font-normal text-[18px] leading-[22.95px]  ">
                    GILD Token Info
                  </p>
                </div>
              </div>
              <div className="  flex justify-center">
                <div className="token_box  relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent   h-[100%] duration-300   w-[100%] pt-[30px] flex flex-col items-center max-w-[312px] min-h-[181px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[13px]  ">
                  <img src={svg2} alt="svg2" />
                  <p className=" font-Josefin mt-[13px] font-bold text-[32px] leading-[38.25px] text-white ">
                    Pre Sale Token
                  </p>
                </div>
              </div>
              <div className="  flex justify-center">
                <div className="token_box  relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent   h-[100%] duration-300   w-[100%] pt-[18px] pb-[17px] flex flex-col items-center max-w-[312px] min-h-[181px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[13px]  ">
                  <img src={svg3} alt="svg3" />
                  <p className=" font-Josefin mt-[11px] font-bold text-[32px] leading-[38.25px] text-white ">
                    100,000+
                  </p>
                  <p className=" text-white font-Josefin font-normal text-[18px] leading-[22.95px]  ">
                    Holders
                  </p>
                </div>
              </div>
              <div className="  flex justify-center">
                <div className="token_box  relative border_grident before:absolute before:z-30  before:w-full before:h-full before:inset-0 before:rounded-[13px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2)_0%,_rgba(255,_255,_255,_0.1)_100%)border-box] before:border-[1px]  before:border-transparent   h-[100%] duration-300   w-[100%] py-[16px]  flex flex-col items-center max-w-[312px] min-h-[181px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(196,_196,_196,_0)_100%,_rgba(255,_255,_255,_0.03)_100%)] hover:bg-[linear-gradient(149.67deg,_#815CC8_29.44%,_#1BABFE_81.54%)] rounded-[13px]  ">
                  <img src={svg4} alt="svg4" />
                  <p className=" font-Josefin mt-[8px] font-bold text-[32px] leading-[38.25px] text-white ">
                    2,500+
                  </p>
                  <p className=" text-white font-Josefin mt-[4px] font-normal text-[18px] leading-[22.95px]  ">
                    NFT Sold
                  </p>
                </div>
              </div>
            </Slider>

            
          </div>

        </div>
      </section>
    </>
  );
};

export default GildSection;
