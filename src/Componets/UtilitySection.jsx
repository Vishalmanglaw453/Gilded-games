import React from "react";
import ladyimg from "../assets/images/png/utlity_img.png"
const UtilitySection = () => {
  return (
    <>
      <section className="mt-[-5px] bg-utitly_bg   bg-no-repeat bg-center bg-cover" id="about">
        <div className="container max-w-[1344px] mx-auto px-3 pt-[105px] max-lg:pt-[20px] lg:pb-[190px] pb-[55px] ">
          <div className="row px-3 mx-[-12px] flex flex-row flex-wrap ">
            <div className=" w-7/12 max-lg:w-full lg:order-1 order-2 px-3  flex flex-col  justify-center">
              <h2 className=" text-white font-bold leading-[61.2px] text-[35px] lg:text-[48px] font-Josefin">
                <span className=" text-[#5F76DA]">NFT</span> Utility
              </h2>
              <p className=" font-poppins lg:max-w-[649px]  font-normal md:text-[20px] text-[14px]  md:leading-[35.9px] leading-[22px] text-white opacity-70 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                curabitur iaculis id cursus dignissim. Volutpat placerat
                volutpat commodo id ultricies volutpat vestibulum. Egestas
                venenatis dignissim fames maecenas. Blandit orci consectetur
                mauris, ipsum viverra quisque. Vulputate sollicitudin tellus
                eget consequat lectus dignissim integer in vitae. Commodo
                integer dis tortor cras maecenas sit. Et nunc et platea
                elementum, cursus morbi. Placerat molestie nibh parturient
                lectus magna sed fusce diam urna. Quam magna duis imperdiet
                posuere iaculis.
              </p>
            </div>
            <div  className=" w-5/12 max-lg:w-full lg:order-2 order-1 flex max-lg:justify-center px-3">
            <img className="  w-[100%] max-w-[369.99px] " src={ladyimg} alt="ladyimg" /></div>

          </div>
        </div>
      </section>
    </>
  );
};

export default UtilitySection;
