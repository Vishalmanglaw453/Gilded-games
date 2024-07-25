import React from "react";
import logo from "../assets/images/svg/nav_logo.svg";
import {
  Discordfooterlogo,
  Githubfooterlogo,
  Readitfooterlogo,
  Teligramfooterlogo,
  Twiterfooterlogo,
  Unseenfooterlogo,
} from "../common/Icons";
const FooterSection = () => {
  return (
    <>
      <footer>
        <div className="container pt-[113px] max-lg:pt-[35px]      max-w-[1344px] mx-auto px-3">
          <div className="row flex  flex-row flex-wrap py-3 mx-[-12px] ">
            <div className="w-8/12 max-lg:w-4/12 max-md:w-full px-3">
              <img src={logo} alt="logo" />
              <p className="  font-poppins mt-[11px] font-normal sm:max-w-[367px] text-[16px] leading-[28.72px] text-white  opacity-70 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                curabitur iaculis id cursus dignissim.
              </p>

              <div className=" flex pt-[27px] gap-[6px]">
                <a
                  target="blank"
                  href="https://discord.com/"
                  className=" w-[31.21px] h-[31.21px] flex justify-center items-center bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)]"
                >
                  <Discordfooterlogo />
                </a>
                <a
                  target="blank"
                  href="https://twitter.com/?lang=en"
                  className=" w-[31.21px] h-[31.21px] flex justify-center items-center bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)]"
                >
                  <Twiterfooterlogo />
                </a>{" "}
                <a
                  target="blank"
                  href="https://telegram.org/"
                  className=" w-[31.21px] h-[31.21px] flex justify-center items-center bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)]"
                >
                  <Teligramfooterlogo />
                </a>{" "}
                <a
                  target="blank"
                  href=""
                  className=" w-[31.21px] h-[31.21px] flex justify-center items-center bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)]"
                >
                  <Unseenfooterlogo />
                </a>{" "}
                <a
                  target="blank"
                  href="https://www.reddit.com/r/readit/"
                  className=" w-[31.21px] h-[31.21px] flex justify-center items-center bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)]"
                >
                  <Readitfooterlogo />
                </a>{" "}
                <a
                  target="blank"
                  href="https://github.com/"
                  className=" w-[31.21px] h-[31.21px] flex justify-center items-center bg-[linear-gradient(110.75deg,_rgba(255,_255,_255,_0.1)_0.01%,_rgba(255,_255,_255,_0.03)_99.99%)]"
                >
                  <Githubfooterlogo />
                </a>
              </div>
            </div>
            <div className="w-2/12 max-lg:w-3/12 max-md:w-6/12 max-md:mt-5 px-3 flex max-md:justify-start max-lg:justify-end lg:justify-center  md:items-center">
              <ul>
                <li className=" font-Josefin  font-semibold text-[16px] leading-[28.72px] text-white ">
                  About:
                </li>
                <li>
                  <a
                    href=""
                    className=" font-Josefin mt-[12px] hover:opacity-100 duration-300 ease-linear font-normal text-[16px] leading-[28.72px] text-white opacity-70 "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" font-Josefin font-normal hover:opacity-100 duration-300 ease-linear text-[16px] my-[6px] leading-[28.72px] text-white opacity-70 "
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" font-Josefin font-normal hover:opacity-100 duration-300 ease-linear text-[16px] leading-[28.72px] text-white opacity-70 "
                  >
                    Gilded Nodes
                  </a>
                </li>
              </ul>
            </div>
            <div className="2/12 max-lg:w-3/12 max-md:w-6/12 max-md:mt-5   px-3 flex max-md:justify-start max-lg:justify-end lg:justify-center md:items-center">
              <ul>
                <li className=" font-Josefin  font-semibold text-[16px] leading-[28.72px] text-white ">
                Gilded Token:
                </li>
                <li>
                  <a
                    href=""
                    className=" font-Josefin mt-[12px] hover:opacity-100 duration-300 ease-linear font-normal text-[16px] leading-[28.72px] text-white opacity-70 "
                  >
                  Etherscan.io
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" font-Josefin font-normal hover:opacity-100 duration-300 ease-linear text-[16px] my-[6px] leading-[28.72px] text-white opacity-70 "
                  >
              Github
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className=" font-Josefin font-normal hover:opacity-100 duration-300 ease-linear text-[16px] leading-[28.72px] text-white opacity-70 "
                  >
               Uniswap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full mt-[48.79px] h-[1px] bg-white opacity-10 "></div>
        <div className="container     max-w-[1344px] mx-auto px-3">
          <div className="  flex items-center gap-[18px] justify-center pt-[11px] pb-[14px] ">
            <p className=" text-white font-Josefin font-normal text-[16px] leading-[28.72px] opacity-60 ">© Copyright $GILD {new Date().getFullYear()}</p>
            <hr className=" h-[35px] w-[0.7px] bg-white opacity-60 " />
            <p className=" text-white font-Josefin font-normal text-[16px] leading-[28.72px] opacity-60 ">Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
