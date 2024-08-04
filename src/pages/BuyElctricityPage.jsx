import React,{useState} from "react";
import { DashboardTemplate } from "../templates/DashboardTemplate";
import arrow from "../assets/arrow-down.png";
import AccountBalance from "../components/transactions/AccountBalance";
import settingss from "../assets/settingss.png";
import FrequentElectricity from "../components/Frequent/FrequentElectricity";

const BuyElctricityPage = () => {
    const [productType, setProductType] = useState("");
    const [meterNumber, setMeterNumber] = useState("");
    const [billerType, setBillerType] = useState("");
    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState("");
    const [narration, setNarration] = useState("");
  
    const handleSendMoney = async () => {
      const transferData = {
        productType,
        meterNumber,
        billerType,
        amount,
        narration,
      };
      const authToken = localStorage.getItem('authToken');
  
      try {
        const response = await fetch("http://localhost:8080/api/v1/payment/electricity", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`,
          },
  
          
          body: JSON.stringify(transferData),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log("Transfer successful:", result);
          toast.success("Transfer successful");
          
        } else {
          console.error("Transfer failed:", response.statusText);
          toast.error("Transfer failed");
          
        }
      } catch (error) {
        console.error("Error occurred during transfer:", error);
      
      }
    };

  return (
    <DashboardTemplate>
      <div className="flex w-full mx-14 my-8 pl-10">
        <div className="w-2/5">
          <div className="mt-5">
            <p className="text-[#2E2E2E] font-bold text-lg font-[Urbanist] py-2">
              Electricity Bill Payment
            </p>
            <div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Select Account"
                  className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
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
                  placeholder="Choose Disco"
                  className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
                  value={billerType}
                  onChange={(e) => setBillerType(e.target.value)}
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
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                />
                <img
                  src={arrow}
                  alt=""
                  className="relative bottom-8 left-[400px]"
                />
              </div>
              <input
                type="text"
                placeholder="Meter Number(e.g 30/01/78/99999-67)"
                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg mb-2 placeholder:text-gray-300 bg-[#EDEDED]"
                value={meterNumber}
                  onChange={(e) => setMeterNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Account Name"
                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg my-2 placeholder:text-gray-300 bg-[#EDEDED]"
              />
              <input
                type="text"
                placeholder="Amount"
                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg my-2 placeholder:text-gray-300 bg-[#EDEDED]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg my-2 placeholder:text-gray-300 bg-[#EDEDED]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="flex items-centered ">
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
                value={narration}
                onChange={(e) => setNarration(e.target.value)}
              />
              <input
                type="button"
                value="Continue"
                className="bg-[#CFB1FE] w-full rounded-md my-2 py-3 px-3"
                onClick={handleSendMoney}
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 ml-16 my-8">
          <AccountBalance />
          <FrequentElectricity />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default BuyElctricityPage;
