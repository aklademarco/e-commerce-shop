import React from 'react'
import { assets } from '../assets/asset'
import { MdArrowForward } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <img src={assets.shopHero} alt="hero bg" />
      <div className=" bg-[linear-gradient(73deg,rgba(159,59,211,1)_76%,rgba(159,59,211,1)_76%)] h-44 w-full">
        <h2 className=" text-2xl font-bold text-white px-12 mb-3">
          Start exploring.
          <span className=" text-white/50"> Everything you need</span>
        </h2>

        <div className="flex gap-4 md:gap-6 overflow-auto hide-scroll-bar py-4 px-10">
          <button className=" group flex items-center whitespace-nowrap bg-white/10 pl-6 pr-2 lg:pl-8 lg:pr-4 py-6 border border-white hover:bg-white gap-2 md:gap-4 lg:gap-6 cursor-pointer rounded-lg transition-colors duration-300 ">
            <span className="text-white md:text-lg font-semibold group-hover:text-purple-900">
              Apparel
            </span>

            <div className=" text-white/70 border-l-2  px-2 flex items-center gap-2 group-hover:text-purple-900 text-[10px]">
              <span className="font-medium ">SHOP NOW</span>
              <MdArrowForward className="text-2xl" />
            </div>
          </button>
          <button className=" group flex items-center whitespace-nowrap bg-white/10 pl-6 pr-2 lg:pl-8 lg:pr-4 py-6 border border-white hover:bg-white gap-2 md:gap-4 lg:gap-6 cursor-pointer rounded-lg transition-colors duration-300 ">
            <span className="text-white md:text-lg font-semibold group-hover:text-purple-900">
              DrinkWear
            </span>

            <div className=" text-white/70 border-l-2  px-2 flex items-center gap-2 group-hover:text-purple-900 text-[10px]">
              <span className="font-medium ">SHOP NOW</span>
              <MdArrowForward className="text-2xl" />
            </div>
          </button>
          <button className=" group flex items-center whitespace-nowrap bg-white/10 pl-6 pr-2 lg:pl-8 lg:pr-4 py-6 border border-white hover:bg-white gap-2 md:gap-4 lg:gap-6 cursor-pointer rounded-lg transition-colors duration-300 ">
            <span className="text-white md:text-lg font-semibold group-hover:text-purple-900">
              Accessories
            </span>

            <div className=" text-white/70 border-l-2  px-2 flex items-center gap-2 group-hover:text-purple-900 text-[10px]">
              <span className="font-medium ">SHOP NOW</span>
              <MdArrowForward className="text-2xl" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero
