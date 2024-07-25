import React from "react";
import Commonbtn from "../common/Commonbtn";
import Header from "./Header";
import { useState,useEffect } from "react";
import {Presalebtnsvg} from "../common/Icons"
const HeroSection = () => {
  

  const initialTime = { days: 19, hours: 10, minutes: 2, seconds: 55 };
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(countdown);
      } else {
        if (timeLeft.seconds > 0) {
          setTimeLeft((prevTime) => ({
            ...prevTime,
            seconds: prevTime.seconds - 1,
          }));
        } else {
          if (timeLeft.minutes > 0) {
            setTimeLeft((prevTime) => ({
              days: prevTime.days,
              hours: prevTime.hours,
              minutes: prevTime.minutes - 1,
              seconds: 59,
            }));
          } else {
            if (timeLeft.hours > 0) {
              setTimeLeft((prevTime) => ({
                days: prevTime.days,
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59,
              }));
            } else {
              setTimeLeft((prevTime) => ({
                days: prevTime.days - 1,
                hours: 23,
                minutes: 59,
                seconds: 59,
              }));
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft]);

  return (
    <>
      <header className=" bg-hero_bg     bg-no-repeat bg-center bg-cover   min-h-[100vh]  flex flex-col ">
      <Header/>

        <div className="container  flex flex-col flex-grow justify-center max-w-[1344px] mx-auto px-3">
          <h1 className="  font-poppins font-normal xl:text-[72px] text-[28px] leading-[35px] sm:text-[50px] sm:leading-[70px] xl:leading-[91.8px] md:leading-[80px]  text-center text-white ">
            There are games... And then <br className="  md:block hidden" />
            there are <span className=" text-[#1BABFE]">Gilded</span> Games
          </h1>
          <div className=" flex   items-center gap-3 pt-[20px] justify-center">
            <p className="  font-Josefin font-semibold lg:text-[36px] text-[23px]  leading-[45.9px] text-[#1C93D7] ">
              {timeLeft.days}days
            </p>
            <p className="  font-semibold leading-[45.9px]  font-Josefin lg:text-[36px] text-[23px]  text-[#1C93D7] ">
              :
            </p>
            <p className="  font-Josefin font-semibold lg:text-[36px] text-[23px]  leading-[45.9px] text-white ">
              {timeLeft.hours}hr
            </p>
            <p className="  font-semibold leading-[45.9px]  font-Josefin lg:text-[36px] text-[23px]  text-white ">
              :
            </p>
            <p className="  font-Josefin font-semibold lg:text-[36px] text-[23px]  leading-[45.9px] text-white ">
              {timeLeft.minutes}min
            </p>
            <p className="  font-semibold leading-[45.9px]  font-Josefin lg:text-[36px] text-[23px]  text-white ">
              :
            </p>
            <p className="  font-Josefin font-semibold lg:text-[36px] text-[23px]  leading-[45.9px] text-white ">
              {timeLeft.seconds}sec
            </p>
          </div>

          <p className=" font-Josefin text-[18px] leading-[22.95px] text-center text-white ">
            Remaining Presale Time
          </p>

          <div className=" flex gap-[23.95px]  justify-center mt-[22px]">
            <button className=" sm:px-[34px] shadow-[0px_8px_30px_0px_#1BABFE]   px-[24px]  py-[14px]   flex   items-center gap-[10px] text-white text-[24px] leading-[24px] font-normal font-Josefin  rounded-[79px] bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] hover:bg-[linear-gradient(180deg,_#815CC8_0%,_#1BABFE_100%)] ">
              <span>
                <Presalebtnsvg />
              </span>
              <span>Presale</span>
            </button>
            <Commonbtn text="Join Now" />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
