import React from "react";

const Button = () => {
  return (
    <button className="relative bg-[#C1005C] rounded-[12px] px-[30px] py-[12px] border-4  border-[#245DFF]">
      <span className="absolute bg-black w-full top-[50px] left-[5px] h-[10px] rounded-b-[12px]"></span>
      Taste the crunch
    </button>
  );
};

export default Button;
