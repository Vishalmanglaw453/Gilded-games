import React from "react";
import FooterSection from "../Componets/FooterSection";
import { useState } from "react";
import {
  Accodionbottomarrow,
  Accodionpharaarrrow,
  Accodiontoparrow,
} from "../common/Icons";
const FrequentlySection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      titleHeading: "Q.1",
      title: "Engine Bay Perfection from £375",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.`,
    },
    {
      titleHeading: "Q.2",
      title: "Ac pharetra nisl nec dignissim odio sed justo velit nisl.?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.`,
    },
    {
      titleHeading: "Q.3",
      title: "Arcu tristique semper neque sed condimentum.?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.`,
    },
    {
      titleHeading: "Q.4",
      title: "Nam imperdiet iaculis vel felis commodo?",
      content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.`,
    },
    {
      titleHeading: "Q.5",
      title: "Quam faucibus sagittis sed ultrices?",
      content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est malesuada massa nec pharetra.`,
    },
  ];

  return (
    <>
      <section className="bg-frequently_bg mt-[-5px]    bg-no-repeat bg-center  bg-cover ">
        <div className="container  max-w-[1344px] mx-auto px-3 pb-[113px] max-lg:pb-[35px] ">
          <h2 className=" font-Josefin font-bold text-[35px] lg:text-[48px] leading-[61.2px] max-sm:leading-[40px] text-white text-center ">
            Frequently Asked  <span className="bg-[linear-gradient(90deg,_#815CC8_0%,_#1BABFE_100%)] inline-block text-transparent bg-clip-text">    Questions            </span>{" "}
          </h2>
      
          <div className="py-accordian mt-[81px] accordions flex flex-col  gap-[24px]  items-center  overflow-hidden">
            {accordionData.map((item, index) => {
              return (
                <>
                  <div
                    data-aos={`${item.aos}`}
                    key={index}
                    className={`accordion_item  z-40 relative border_grident before:absolute before:z-[-1]  before:w-full before:h-full before:inset-0 before:rounded-[6px] before:[background:linear-gradient(180deg,_rgba(255,_255,_255,_0.16)_0%,_rgba(255,_255,_255,_0.04)_100%)border-box] before:border-[3px]  before:border-transparent    rounded-[6px] px-[19px] py-[16px]  max-w-[1038px] w-[100%]  backdrop-blur-[10px] bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(255,_255,_255,_0.03)_100%)] flex-column flex-lg-row gap-accordian2  justify-between align-items-start p-accordian2`}
                  >
                    <div
                      onClick={() => toggleAccordion(index)}
                      className="accordion_head pointer  flex  items-center  justify-between gap-3 "
                    >
                      <h4
                        className={` ${
                          toggleAccordion ? "text-white" : " text-black"
                        } font-poppins   text-[18px]    flex md:items-center gap-[12px] leading-[27px] `}
                      >
                        <span className=" font-normal">
                          {item.titleHeading}
                        </span>
                        <span className="  font-medium">{item.title}</span>
                      </h4>
                      <span onClick={() => toggleAccordion(index)} className="">
                        {openAccordion === index ? (
                          <Accodiontoparrow />
                        ) : (
                          <Accodionbottomarrow />
                        )}
                      </span>
                    </div>
                    <div
                      className={`accordion_body  ${
                        openAccordion === index ? "block" : " hidden"
                      }`}
                    >
                      <p className=" font-poppins font-normal text-[18px] leading-[27px] flex lg:items-center gap-[13px]  pt-[24px]  text-white opacity-70">
                        <span className=" pt-[6px]">
                          <Accodionpharaarrrow />
                        </span>
                        <span>{item.content}</span>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <FooterSection />
      </section>
    </>
  );
};

export default FrequentlySection;
