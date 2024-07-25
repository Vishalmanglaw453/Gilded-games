import React from "react";
import dotted_line from "../assets/images/svg/roadmap-dotted_line.svg";
const RoadmapSection = () => {
  return (
    <>
      <section className=" bg-black mt-[-5px] relative" id="stake">
        <div className="container  max-w-[1344px] mx-auto px-3 pt-[92px] max-lg:pt-[30px] pb-[75px] max-lg:pb-[50px] ">
          <h2 className=" font-Josefin font-bold text-[35px]  lg:text-[48px] leading-[61.2px] text-white text-center ">
            <span className="bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] inline-block text-transparent bg-clip-text">
              Road
            </span>
            map
          </h2>

          <div className=" pt-[103px] row flex max-lg:hidden flex-row flex-wrap px-3 mx-[-12px] relative">
            <div className=" w-4/12 ">
              <div className=" w-[65px] relative z-10 h-[65px] rounded-[50%] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)]  shadow-[0px_0px_63.22px_0px_#1BABFE] "></div>
              <div className=" raodmapPhase1 pt-[38px] pl-[18px] max-w-[301px]  w-[100%] ">
                <p className=" text-white font-semibold font-poppins">
                  <span className=" leading-[23.22px]  text-[18px] max-md:text-[14px]  ">
                    Phase 1{" "}
                  </span>
                  <span className="  block leading-[46.44px] text-[36px] ">
                    Q1 2022
                  </span>
                </p>
                <li className="  list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                  Whitelist/Presale Created
                </li>
                <li className=" list-disc mt-[12px] max-sm:mt-0  text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                  Private Sale
                </li>
                <li className=" list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                  Public Sale
                </li>
                <li className=" list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                  Prime Eternal Owner Perks
                </li>
              </div>
            </div>
            <div className=" w-4/12 flex justify-center  ">
              <div className=" max-w-[301px] w-full">
                <div className=" w-[65px] relative z-10 h-[65px] rounded-[50%] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)]  shadow-[0px_0px_63.22px_0px_#1BABFE] "></div>
                <div className=" pt-[44px] raodmapPhase2 max-w-[301px]  w-[100%] ">
                  <p className=" text-white font-semibold font-poppins">
                    <span className=" leading-[23.22px]  text-[18px] max-md:text-[14px]  ">
                      Phase 2{" "}
                    </span>
                    <span className="  block leading-[46.44px] text-[36px] ">
                      Q2 2022
                    </span>
                  </p>
                  <li className="  list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Token & Staking Release
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0  text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Staking Gameplay
                  </li>
                </div>
              </div>
            </div>
            <div className=" w-4/12  flex justify-center ">
              <div className=" max-w-[301px] w-full ">
                <div className=" w-[65px] relative z-10 h-[65px] rounded-[50%] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)]  shadow-[0px_0px_63.22px_0px_#1BABFE] "></div>
                <div className=" raodmapPhase3 pt-[48px] max-w-[301px]  w-[100%] ">
                  <p className=" text-white font-semibold font-poppins">
                    <span className=" leading-[23.22px]  text-[18px] max-md:text-[14px]  ">
                      Phase 3{" "}
                    </span>
                    <span className="  block leading-[46.44px] text-[36px] ">
                      Q3 2022
                    </span>
                  </p>
                  <li className="  list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    MVP Gameplay Release
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0  text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Battle Modes Release
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Land Gameplay Release
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Gear Forging Release
                  </li>
                </div>
              </div>
            </div>
            <div className=" absolute top-[29.5%] left-[19px] max-w-[72%] w-full bg-white opacity-20 min-h-[2px]"></div>
          </div>
          <img
            className=" max-2xl:hidden absolute right-0 top-[42%] max-w-[33%]"
            src={dotted_line}
            alt="dotted_line"
          />
          <div className=" flex justify-center">
            <div className=" relative lg:hidden">
              <div className="  flex pt-[30px]  max-sm:gap-[24px] gap-[50px]">
                <div className=" min-w-[44px] h-[44px] relative z-10  rounded-[50%] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)]  shadow-[0px_0px_63.22px_0px_#1BABFE] "></div>
                <div className=" raodmapPhase1  max-w-[301px]  w-[100%] ">
                  <p className=" text-white font-semibold font-poppins">
                    <span className=" leading-[23.22px]  text-[18px] max-md:text-[14px]  ">
                      Phase 1{" "}
                    </span>
                    <span className="  block leading-[46.44px] text-[36px] ">
                      Q1 2022
                    </span>
                  </p>
                  <li className="  list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Whitelist/Presale Created
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0  text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Private Sale
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Public Sale
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Prime Eternal Owner Perks
                  </li>
                </div>
              </div>
              <div className="  flex pt-[30px] max-sm:gap-[24px]  gap-[50px]   ">
                <div className=" min-w-[44px] h-[44px] relative z-10  rounded-[50%] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)]  shadow-[0px_0px_63.22px_0px_#1BABFE] "></div>
                <div className="  raodmapPhase2 max-w-[301px]  w-[100%] ">
                  <p className=" text-white font-semibold font-poppins">
                    <span className=" leading-[23.22px]  text-[18px] max-md:text-[14px]  ">
                      Phase 2{" "}
                    </span>
                    <span className="  block leading-[46.44px] text-[36px] ">
                      Q2 2022
                    </span>
                  </p>
                  <li className="  list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Token & Staking Release
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0  text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Staking Gameplay
                  </li>
                </div>
              </div>
              <div className="  flex pt-[30px] max-sm:gap-[24px]  gap-[50px]   ">
                <div className=" min-w-[44px] h-[44px] relative z-10  rounded-[50%] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)]  shadow-[0px_0px_63.22px_0px_#1BABFE] "></div>
                <div className=" raodmapPhase3 max-w-[301px]  w-[100%] ">
                  <p className=" text-white font-semibold font-poppins">
                    <span className=" leading-[23.22px]  text-[18px] max-md:text-[14px]  ">
                      Phase 3{" "}
                    </span>
                    <span className="  block leading-[46.44px] text-[36px] ">
                      Q3 2022
                    </span>
                  </p>
                  <li className="  list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    MVP Gameplay Release
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0  text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Battle Modes Release
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Land Gameplay Release
                  </li>
                  <li className=" list-disc mt-[12px] max-sm:mt-0 text-white  font-Montserrat font-normal text-[18px] max-md:text-[14px] leading-[32.4px] opacity-70 ">
                    Gear Forging Release
                  </li>
                </div>
              </div>
              <div className=" absolute top-[9%] translate-x-[15px] max-sm:translate-x-[4px]  max-sm:left-[6%] max-lg:left-[5px] left-[3.3%] min-h-[59%]  bg-white opacity-20  w-[2px]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadmapSection;
