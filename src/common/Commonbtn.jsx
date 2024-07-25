import React from "react";

const Commonbtn = (props) => {
  return (
    <>
      <button
        className={`sm:px-[34px] px-[24px]  py-[14px] text-white   text-[24px] leading-[24px] font-normal font-Josefin  rounded-[79px] bg-transparent border-[1px] border-white duration-300  transition-all ease-linear hover:border-transparent hover:bordre-[transparent]  hover:bg-white hover:text-black `}
      >
        {props.text}
      </button>
    </>
  );
};

export default Commonbtn;
