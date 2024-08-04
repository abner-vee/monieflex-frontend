import React from "react";
import arrow from "../../assets/arrow-down.png"
import settingss from "../../assets/settingss.png"

const FrequentDstv = () => {
  return (
    <div className="bg-[#FFFFFF] my-5 rounded-xl px-5 pb-5">
      <div className="flex justify-between items-centerpt-8 px-2 pt-5">
        <div>
          <p className="text-xs font-semibold text-[#A3A3A3] tracking-[3px]">
            RECENT CABLE TV BILLS
          </p>
        </div>
        <div className="flex justify-between items-center">
          <img src={arrow} alt="" className="px-2" />
          <img src={settingss} alt="" className="px-2" />
        </div>
      </div>
      <div className="py-5">
        <div className="flex justify-between align-items p-2">
          <p className="text-base font-semibold">DSTV-Premium/N23900</p>
          <p className="text-[#08284E] font-medium text-sm"> GH87767565860</p>
        </div>
        <div className="flex justify-between align-items p-2">
          <p className="text-base font-semibold">DSTV-Premium/N23900</p>
          <p className="text-[#08284E] font-medium text-sm">GH87767565860</p>
        </div>
        <div className="flex justify-between align-items p-2">
          <p className="text-base font-semibold">DSTV-Premium/N23900</p>
          <p className="text-[#08284E] font-medium text-sm">GH87767565860</p>
        </div>
        <div className="flex justify-between align-items p-2">
          <p className="text-base font-semibold">DSTV-Premium/N23900</p>
          <p className="text-[#08284E] font-medium text-sm">GH87767565860</p>
        </div>
      </div>
    </div>
  );
};

export default FrequentDstv;
