import React, { useState } from 'react';
import arrow from "../../assets/arrow-down.png";
import settingss from "../../assets/settingss.png";

const FrequentTransfer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="bg-[#FFFFFF] my-5 rounded-xl px-5 pb-5">
      <div className="flex justify-between items-centered pt-8 px-2">
        <div>
          <p className="text-xs font-semibold text-[#A3A3A3]">
            FREQUENT BENEFICIARIES
          </p>
        </div>
        <div className="flex justify-between items-centered ">
          <img 
            src={arrow} 
            alt="" 
            className="px-2 cursor-pointer" 
            onClick={handleToggleVisibility}
          />
          <img src={settingss} alt="" className="px-2" />
        </div>
      </div>
      {isVisible && (
        <div>
          <div className="flex items-center my-5">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[50px] h-[50px] text-center flex items-center justify-center">
              QA
            </p>
            <div className="pl-5">
              <p className="text-[#2E2E2E] text-base font-semibold">
                Okeke Antony-Mary
              </p>
              <p className="text-[#A3A3A3] font-medium text-sm">
                A/C 4577776879
              </p>
            </div>
          </div>
          <div className="flex items-center my-5">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[50px] h-[50px] text-center flex items-center justify-center">
              QA
            </p>
            <div className="pl-5">
              <p className="text-[#2E2E2E] text-base font-semibold">
                Okeke Antony-Mary
              </p>
              <p className="text-[#A3A3A3] font-medium text-sm">
                A/C 4577776879
              </p>
            </div>
          </div>
          <div className="flex items-center my-5">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[50px] h-[50px] text-center flex items-center justify-center">
              QA
            </p>
            <div className="pl-5">
              <p className="text-[#2E2E2E] text-base font-semibold">
                Okeke Antony-Mary
              </p>
              <p className="text-[#A3A3A3] font-medium text-sm">
                A/C 4577776879
              </p>
            </div>
          </div>
          <div className="flex items-center my-5">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[50px] h-[50px] text-center flex items-center justify-center">
              QA
            </p>
            <div className="pl-5">
              <p className="text-[#2E2E2E] text-base font-semibold">
                Okeke Antony-Mary
              </p>
              <p className="text-[#A3A3A3] font-medium text-sm">
                A/C 4577776879
              </p>
            </div>
          </div>
          <div className="flex items-center my-5">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[50px] h-[50px] text-center flex items-center justify-center">
              QA
            </p>
            <div className="pl-5">
              <p className="text-[#2E2E2E] text-base font-semibold">
                Okeke Antony-Mary
              </p>
              <p className="text-[#A3A3A3] font-medium text-sm">
                A/C 4577776879
              </p>
            </div>
          </div>
          <div className="flex items-center my-5">
            <p className="rounded-[30px] bg-[#FFC7C7] w-[50px] h-[50px] text-center flex items-center justify-center">
              QA
            </p>
            <div className="pl-5">
              <p className="text-[#2E2E2E] text-base font-semibold">
                Okeke Antony-Mary
              </p>
              <p className="text-[#A3A3A3] font-medium text-sm">
                A/C 4577776879
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FrequentTransfer;
