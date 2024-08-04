import React from 'react'
import FrequentAirtime from '../components/Frequent/FrequentAirtime'
import arrow from '../assets/arrow-down.png'
import AccountBalance from '../components/transactions/AccountBalance'
import { DashboardTemplate } from '../templates/DashboardTemplate'

const AirtimePurchasePage = () => {
  return (
    <DashboardTemplate>
    <div className="flex w-full mx-14 my-8 pl-10">
        <div className="w-2/5">
          <div className="mt-5">
            <p className="text-[#2E2E2E] font-bold text-lg font-[Urbanist] py-2">
              Airtime Purchase
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
                  placeholder="Select Network"
                  className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
                />
                <img
                  src={arrow}
                  alt=""
                  className="relative bottom-8 left-[400px]"
                />
              </div>
              <div className="w-full pb-5">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
                />
                
              </div>
              <input
                type="text"
                placeholder="Amount"
                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg mb-2 placeholder:text-gray-300 bg-[#EDEDED]"
              />
              <input
                type="text"
                placeholder="Beneficiary Name"
                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg my-2 placeholder:text-gray-300 bg-[#EDEDED]"
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
              />
             <button
            type="submit"
            className="buttoun w-full text-[#000000] text-xl rounded-md h-16 bg-[#CFB1FE]"
            // onClick={() => navigate('/login')}
          >
            Continue
          </button>
            </div>
          </div>
        </div>
        <div className="w-2/5 ml-16 my-8">
          <AccountBalance />
          <FrequentAirtime />
        </div>
      </div>
      </DashboardTemplate>
  )
}

export default AirtimePurchasePage