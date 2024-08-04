import React from "react";
import arrow from "../../assets/arrow-down.png"
import settingss from "../../assets/settingss.png"

const FrequentElectricity = () => {
  return (
    <div className="bg-[#FFFFFF] my-5 rounded-xl px-5 pb-5">
      <div className="flex justify-between items-center pt-8 px-2">
        <div>
          <p className="text-xs font-semibold text-[#A3A3A3] tracking-[3px]">
            BENEFICIARIES
          </p>
        </div>
        <div className="flex justify-between items-center ">
          <img src={arrow} alt="" className="px-2" />
          <img src={settingss} alt="" className="px-2" />
        </div>
      </div>
      <div className="py-5 px-2">
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[30px] h-[30px] text-center flex items-center justify-center">
              OA
            </p>
            <p className="pl-2 text-base font-semibold">30/10/01/8633-97</p>
          </div>
          <p className="text-[#08284E] font-semibold text-sm">EEDC</p>
        </div>
        <div className="flex justify-between items-center pt-3">
          <div className="flex items-center">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[30px] h-[30px] text-center flex items-center justify-center">
              OA
            </p>
            <p className="pl-2 text-base font-semibold">30/10/01/8633-97</p>
          </div>
          <p className="text-[#08284E] font-semibold text-sm">AEDC</p>
        </div>
        <div className="flex justify-between items-center pt-3">
          <div className="flex items-center">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[30px] h-[30px] text-center flex items-center justify-center">
              OA
            </p>
            <p className="pl-2 text-base font-semibold">30/10/01/8633-97</p>
          </div>
          <p className="text-[#08284E] font-semibold text-sm">IBDC</p>
        </div>
        <div className="flex justify-between items-center pt-3">
          <div className="flex items-center">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[30px] h-[30px] text-center flex items-center justify-center">
              OA
            </p>
            <p className="pl-2 text-base font-semibold">01/56/78/00001-67</p>
          </div>
          <p className="text-[#08284E] font-semibold text-sm">IKEDC</p>
        </div>
      </div>
    </div>
  );
};

export default FrequentElectricity;
