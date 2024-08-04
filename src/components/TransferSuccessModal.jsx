import React from 'react';
import Illustration from "../assets/istockphoto_1307223582612_x_6121.png";

const TransferSuccessModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="rounded-[8px] bg-[#FFFFFF] flex flex-col items-center p-[35px] box-sizing-border relative z-10">
        <div className="bg-center bg-cover bg-no-repeat mb-[35px] w-[390px] h-[300px]">
          <img src={Illustration} alt="success-icon" />
        </div>
        <div className="mb-[35px] inline-block text-center break-words font-['Urbanist'] font-semibold text-[18px] tracking-[0.5px] text-[#2E2E2E]">
          Your Transaction is successful.<br />
          Thank you for using MonieFlex Bank services
        </div>
        <button
          className="rounded-[5px] border-[1px_dashed_#5A5959] flex p-[14px] w-[302px] box-sizing-border justify-center items-center font-['Urbanist'] font-medium text-[16px] text-[#5A5959] cursor-pointer"
          onClick={onClose}
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default TransferSuccessModal;
