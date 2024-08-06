import React, { useState } from "react";
import dashboard from "../../assets/dashboard.png";
import trans from "../../assets/transfer.png";
import filled from "../../assets/filled.png";
import bill from "../../assets/bill-broken.png";
import moneyBag from "../../assets/money-bag.png";
import card from "../../assets/ion_card.png";
import arrowDown from "../../assets/arrow-down.png";
import arrowUp from "../../assets/arrow-up.png"; // Import the up arrow icon
// import cardImage from "../../assets/ImGE.png";
import settings from "../../assets/setting.png";
import logout from "../../assets/logout.png";
import { Link } from "react-router-dom";
import BuyElctricityPage from "../../pages/BuyElctricityPage";

export const SideBar = () => {
  const [isPayBillsOpen, setIsPayBillsOpen] = useState(false);

  const togglePayBills = () => {
    setIsPayBillsOpen((prev) => !prev);
  };

  return (
    <div className="border-r border-[#DEDEDE] h-full">
      <div className="top">
        <div className="dbd flex pt-8 px-8 cursor-pointer" onClick={()=>navigate("/dashboard")}>
          <img src={dashboard} alt="" className="w-[30px]" />
          <p className="pl-5 font-[Urbanist] font-semibold text-base">
            Dashboard
          </p>
        </div>
        <div className="trns flex pt-8 px-8 cursor-pointer" onClick={()=>navigate("/transfer")}>
          <img src={trans} alt="" className="w-[30px]" />
          <p className="pl-5 font-[Urbanist] font-semibold text-base">
            Transfer
          </p>
        </div>
        <div className="vas flex pt-5 px-8 cursor-pointer" onClick={()=>navigate("/purchase-airtime")}>
          <img src={filled} alt="" className="w-[30px]" />
          <p className="pl-5 font-[Urbanist] font-semibold text-base">
            Airtime Recharge
          </p>
        </div>
        <div className="bills flex justify-between items-center pt-5 px-8" onClick={togglePayBills}>
          <div className="flex">
            <img src={bill} alt="" className="w-[30px]" />
            <p className="pl-3 font-[Urbanist] font-semibold text-base pl-[20px]">
              Pay Bills
            </p>
          </div>
          <div>
            <img src={isPayBillsOpen ? arrowUp : arrowDown} alt="" />
          </div>
        </div>
        {isPayBillsOpen && (
          <div className="pl-16">
            <div className="pt-2">
              <Link to={"/purchase-electricity"} className="font-[Urbanist] font-medium text-sm">Electricity Bill</Link>
            </div>
            <div className="pt-2">
              <Link to={"/purchase-data"} className="font-[Urbanist] font-medium text-sm">Data Subscription</Link>
            </div>
            <div className="pt-2">
              <Link to={"/dstv-subscription"}  className="font-[Urbanist] font-medium text-sm">TV Subscription</Link>
            </div>
          </div>
        )}
        <div className="loansflex flex pt-5 px-8 cursor-pointer" onClick={()=>navigate("/loans")}>
          <img src={moneyBag} alt="" className="w-[30px]" />
          <p className="pl-5 font-[Urbanist] font-semibold text-base">Loans</p>
        </div>
        <div className="crd flex pt-5 px-8 cursor-pointer" onClick={()=>navigate("/card")}>
          <img src={card} alt="" className="w-[30px]" />
          <p className="pl-5 font-[Urbanist] font-semibold text-base">Cards</p>
        </div>
      </div>
      <div className="btm pt-40 px-5">
        <div>
          {/* <img src={cardImage} alt="" /> */}
          <div className=" bg-[url('/Users/mac/Downloads/monieflex-fe/src/assets/ImGE.png')] bg-no-repeat bg-cover py-[14px] flex flex-col justify-center items-center text-center  text-white">
            <p className="px-[18px]">
              Use or Debit card anywhere in the world for easier transaction
            </p>
            <button className="mt-[5px] bg-[#08284E] text-sm font-[Urbanist] px-[20px] py-[5px] rounded-md">
              Apply Now
            </button>
          </div>
        </div>
        <div>
          <div className="set flex pt-5 px-3">
            <img src={settings} alt="" className="w-[30px]" />
            <p className="pl-5 font-[Urbanist] font-semibold text-base">
              Settings
            </p>
          </div>
          <div className="log flex pt-8 px-3">
            <img src={logout} alt="" className="w-[30px]" />
            <p className="pl-5 font-[Urbanist] font-semibold text-base">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
