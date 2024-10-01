import React from "react";
import hero from "../assets/images/hero.jpg"; 

const Magazines = () => {
  return (
    <section className="relative w-full h-72">
      {/* Background Image */}
      <img
        src={hero}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-30 !important"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h2 className="font-bold uppercase text-white tracking-[30px] leading-tight text-[clamp(5rem,_calc(3rem_+((1vw_-_0.48rem)_*8.4135)),_6rem)]">
          Magazines
        </h2>

        <h3 className="font-normal leading-relaxed text-xl md:text-2xl lg:text-3xl mt-4 tracking-wide">
          Where Words and Creativity Collide: Unleashing the Power of Print!
        </h3>
      </div>
      <div className="h-[1234] w-[1356]">
      
      </div>
    </section>
   
  );
};

export default Magazines;
