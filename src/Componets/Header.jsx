import React from "react";
import logo from "../assets/images/svg/nav_logo.svg";
import { useState } from "react";
import { Discordlogo } from "../common/Icons";
const Header = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("max-xl:overflow-hidden");
  } else {
    document.body.classList.remove("max-xl:overflow-hidden");
  }
  return (
    <>
      <nav className=" bg-[#0000001A]">
        <div className="container   max-w-[1344px] mx-auto px-3">
          <div className=" flex justify-between py-[19px]    items-center">
            <div>
              <img className=" max-sm:w-[80%]" src={logo} alt="logo" />
            </div>
            <ul
              className={`${
                nav ? "max-xl:left-0" : " max-xl:-left-full"
              } flex gap-[40px]   items-center max-xl:absolute max-xl:bg-[#01C8FF]  max-xl:top-0 max-xl:items-center max-xl:justify-center max-xl:flex-col max-xl:min-h-[100vh] max-xl:w-full max-xl:ease-linear max-xl:duration-300 max-xl:bg-[url(../src/assets/images/png/hero_bg_img.png)]   max-xl:bg-no-repeat max-xl:bg-center  z-40 `}
            >
              <li>
                <a
                  onClick={show}
                  href="#about"
                  className=" font-Josefin text-[22px] hover:[text-shadow:_0_1px_0_#ffffff]  duration-300 ease-linear    leading-[22px]  text-white  font-normal "
                >
                  About
                </a>
              </li>

              <li>
                <a
                  onClick={show}
                  href="#presal"
                  className=" font-Josefin text-[22px] hover:[text-shadow:_0_1px_0_#ffffff]  duration-300 ease-linear  leading-[22px]  text-white  font-normal "
                >
                  Presale $GILD
                </a>
              </li>
              <li>
                <a
                  onClick={show}
                  href="#stake"
                  className=" font-Josefin text-[22px] hover:[text-shadow:_0_1px_0_#ffffff]  duration-300 ease-linear  leading-[22px]  text-white  font-normal "
                >
                  Staking $GILD
                </a>
              </li>
              <li>
                <a
                  onClick={show}
                  href="#gild"
                  className=" font-Josefin text-[22px] hover:[text-shadow:_0_1px_0_#ffffff]  duration-300 ease-linear  leading-[22px]  text-white  font-normal "
                >
                  $GILD Nodes
                </a>
              </li>
              <li>
                <a href="https://discord.com/" target="blank">
                  <button className=" sm:px-[34px]   px-[24px]   py-[14px]   flex   items-center gap-[10px] shadow-[0px_8px_30px_0px_#1BABFE] text-white text-[24px] leading-[24px] font-normal font-Josefin  rounded-[79px] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] hover:bg-[linear-gradient(180deg,_#815CC8_0%,_#1BABFE_100%)] transition-all duration-300">
                    <span>
                      <Discordlogo />
                    </span>
                    <span>Discord</span>
                  </button>
                </a>
              </li>
            </ul>
            <div className=" block h-[100%] xl:hidden z-50  " onClick={show}>
              <span className="h-1 block w-10 bg-white"></span>
              <span className="h-1 block w-10 my-3 bg-white"></span>
              <span className="h-1 block w-10 bg-white"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
