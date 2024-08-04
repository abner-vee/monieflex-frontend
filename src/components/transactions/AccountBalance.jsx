import React, { useState } from "react";
import settingsIcon from "../../assets/settingsIcon.png";
import hideIcon from "../../assets/hideIcon.png";

const AccountBalance = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleToggleReveal = () => {
    setIsRevealed(!isRevealed);
    console.log("Icon clicked! Reveal status:", !isRevealed);
  };

  return (
    <div className="w-full h-186 border border-custom-pink bg-custom-background rounded-xl pt-8 pr-6 pb-8 pl-6">
      <div className="w-381 h-122 flex flex-col gap-5">
        <div className="h-5 flex justify-between gap-5">
          <div className="w-[192px]">
            <h1 className="block w-full h-3.5 font-semibold text-xs leading-3.5 text-current-account-color font-urbanist">
              Current Account Balance
            </h1>
          </div>
          <img 
            src={settingsIcon}
            alt="settings"
            className="cursor-pointer"
          />
        </div>
        <div className="h-12 flex justify-between gap-15.5">
          <div className="w-74.75">
            <h1 className="font-urbanist block w-full font-bold text-[40px] leading-[48px] letter-spacing: 0.09em">
              {isRevealed ? "N123,456.78" : "N***************"}
            </h1>
          </div>
          <div className="w-16.67 h-13.33 top-3.33 left-1.67">
            <img 
            src={isRevealed ? hideIcon : hideIcon} 
            alt="toggle visibility"
            onClick={handleToggleReveal} 
            className="cursor-pointer"
            />
          </div>
        </div>
        <div className="font-urbanist font-bold text-xs leading-3.5 w-172 h-14">
          <h3>SAVINGS ACC: ********3448</h3>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
