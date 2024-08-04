import React, {useState} from "react";
import { DashboardTemplate } from "../templates/DashboardTemplate";
import arrow from "../assets/arrow-down.png";
import AccountBalance from "../components/transactions/AccountBalance";
// import settingss from "../assets/settingss.png";
import FrequentData from "../components/Frequent/FrequentData";
import axios from "axios";
import {apiClient} from "../api.js";
import {toast} from "react-toastify";

const BuyDataPage = () => {
  const [buyDataRequest, setBuyDataRequest] = useState({
    type: "",
    data: "",
    amount: null,
    phone: null,
    narration: null,
  });
  const [pin, setPin] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleVerifyPin = () => {

  }
 const handleBuyData = async (e) => {
   e.preventDefault();
    const response = await apiClient.post(`/payment/data-purchase?pin=${pin}`, buyDataRequest);
    console.log(response);
    if (response.status === 200) {
      toast.success("Purchase successful");
    }
    else {
      toast.error("Purchase failed");
    }
  }
  return (
    <DashboardTemplate>
      <div className="flex w-full mx-14 my-8 pl-10">
        <div className="w-2/5">
          <div className="mt-5">
            <p className="text-[#2E2E2E] font-bold text-lg font-[Urbanist] py-2">
              Data Subscription Purchase
            </p>
            <div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Select Account"
                  className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
                  onChange={(e) => setBuyDataRequest({...buyDataRequest, type:e.target.value})}
                />
                <img
                  src={arrow}
                  alt=""
                  className="relative bottom-8 left-[400px]"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Choose Network"
                  className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
                  onChange={(e) => setBuyDataRequest({...buyDataRequest, data:e.target.value})}
                />
                <img
                  src={arrow}
                  alt=""
                  className="relative bottom-8 left-[400px]"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Select Product type"
                  className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
                />
                <img
                  src={arrow}
                  alt=""
                  className="relative bottom-8 left-[400px]"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg mb-2 placeholder:text-gray-300 bg-[#EDEDED]"
                onChange={(e) => setBuyDataRequest({...buyDataRequest, phone:e.target.value})}
              />
              <input
                type="text"
                placeholder="Amount"
                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg my-2 placeholder:text-gray-300 bg-[#EDEDED]"
                onChange={(e) => setBuyDataRequest({...buyDataRequest, amount:e.target.value})}
              />
              <div className="flex items-center">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-[#08284E] pl-2">
                  Save Beneficiary
                </label>
              </div>
              <textarea
                name=""
                id=""
                className="w-full border-[#5A5959] border-[1px] py-2 px-3 rounded-lg my-2 h-[150px] bg-[#EDEDED]"
                placeholder="Add Note"
                onChange={(e) => setBuyDataRequest({...buyDataRequest, narration:e.target.value})}
              />
              <input
                type="button"
                value="Continue"
                className="bg-[#CFB1FE] w-full rounded-md my-2 py-3 px-3"
                onChange={(e) => handleBuyData(e)}
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 ml-16 my-8">
          <AccountBalance />
          <FrequentData />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default BuyDataPage;
