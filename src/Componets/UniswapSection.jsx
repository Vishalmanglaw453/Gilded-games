import React from "react";
import coinimg from "../assets/images/png/buy_coinimg.png";
import { Buybtnsvg } from "../common/Icons";
const UniswapSection = () => {
  return (
    <>
      <section className="bg-uniswap_bg relative bg-no-repeat bg-center bg-cover mt-[-5px] ">
        <div className="container flex flex-col justify-center  flex-grow max-w-[1344px] mx-auto px-3 ">
          <div className=" flex flex-row flex-wrap px-3 mx-[-12px] pt-[300px] max-lg:pt-[50px] pb-[220px] max-lg:pb-[70px] ">
            <div className=" w-6/12 max-lg:w-full  max-lg:order-2 px-3  flex lg:flex-col justify-center">
              <div>
                <h2 className=" font-Josefin font-bold text-[35px] lg:text-[48px]  leading-[61.2px] text-white ">
                  Buy On{" "}
                  <span className="bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] inline-block text-transparent bg-clip-text">
                    Uniswap
                  </span>
                </h2>
                <li className=" mt-[21px] list-disc text-white font-Josefin font-normal text-[20px] leading-[25.5px] ">
                  100,000+ Airdrop
                </li>
                <li className=" list-disc my-[11px] text-white font-Josefin font-normal text-[20px] leading-[25.5px] ">
                  NFT $GILD giveaway
                </li>
                <li className=" list-disc text-white font-Josefin font-normal text-[20px] leading-[25.5px] ">
                  Announcement and Games
                </li>

                <div>
                  {" "}
                  <button className=" mt-[41px] sm:px-[34px]   px-[24px]  py-[14px]   flex   items-center gap-[10px] text-white text-[24px] leading-[24px] font-normal font-Josefin  rounded-[79px] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] hover:bg-[linear-gradient(180deg,_#815CC8_0%,_#1BABFE_100%)] shadow-[0px_8px_30px_0px_#1BABFE] ">
                    <span>
                      <Buybtnsvg />
                    </span>
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-6/12 max-lg:w-full max-lg:order-1 px-3 flex justify-center">
              <img
                className=" max-w-[341px] w-[100%] "
                src={coinimg}
                alt="coinimg"
              />
            </div>
          </div>
          <div className=" max-w-[48%] max-lg:hidden absolute right-0 top-[26%] min-h-[539px] rounded-[325.5px_0px_0px_325.5px] w-[100%] bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)] "></div>
        </div>
      </section>


    </>
  );
};

export default UniswapSection;
