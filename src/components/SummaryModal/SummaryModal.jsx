import React from "react";

const SummaryModal = ({ amount, receiverName, isOpen, onClose, setTransactionPin, handleVerifyPin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-md p-8 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <p className="pb-5 text-gray-600">
          You are about to send {amount} to {receiverName}.
        </p>
        <div className="flex justify-center mb-5">
          <input
            type="password"
            placeholder="Input Pin"
            className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
            onChange={(e) => setTransactionPin(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="w-full text-white text-xl rounded-md h-12 bg-purple-400 mb-4"
            onClick={handleVerifyPin}
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
