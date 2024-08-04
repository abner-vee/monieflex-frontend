import React, {useState} from "react";
import {toast} from "react-toastify";
import {DashboardTemplate} from "../templates/DashboardTemplate";
import transfer from "../assets/big-trans.png";
import solar from "../assets/solar.png";
import arrow from "../assets/arrow-down.png";
import AccountBalance from "../components/transactions/AccountBalance";
import FrequentTransfer from "../components/Frequent/FrequentTransfer";
import SummaryModal from "../components/SummaryModal/SummaryModal";
import TransferSuccessModal from "../components/TransferSuccessModal";
import {transferToBank, transferToMonieFlex, verifyPin} from "../api.js";

const TransferPage = () => {
    const [selectedOption, setSelectedOption] = useState("MonieFlex Bank");
    const [bankCode, setBankCode] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [narration, setNarration] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [transactionPin, setTransactionPin] = useState("");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const openPinVerificationModal = () => {
        setShowModal(true);
    }

    const handleResponse = (response)=>{
        if (response.status === 200) {
            setShowModal(false);
            setShowSuccessModal(true);
            toast.success("Transfer successful");
        } else {
            console.error("Transfer failed:", response.statusText);
            toast.error("Transfer failed");
        }
    }

    const handleSendMoney = async () => {
      console.log("selected option ",selectedOption);

        if (selectedOption === "MonieFlex Bank") {
            let response = await transferToMonieFlex({
                bankCode,
                accountNumber,
                amount,
                narration,
            });
            handleResponse(response);
        } else {
            let response = await transferToBank({
                bankCode,
                accountNumber,
                amount,
                narration,
            });
            handleResponse(response);
        }


    };




    const handleVerifyPin = async () => {
        try {
            const response = await verifyPin(transactionPin);
            if (response.status === 200) {
                setShowModal(false);
                await handleSendMoney();
            } else {
                toast.error("Incorrect PIN");
            }
        } catch (error) {
            console.error("Error occurred during verification:", error);
            toast.error(error.response.data.message);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <DashboardTemplate>
            <div className="flex w-full mx-14 my-8 ">
                <div className="w-2/5">
                    <div className=" border-solid rounded-xl border-[#08284E] border-[1px] p-5">
                        <div className="p-2 flex justify-between items-center">
                            <div
                                className={`mx-2 p-5 cursor-pointer ${
                                    selectedOption === "MonieFlex Bank" ? "bg-[#CFB1FE]" : ""
                                } rounded-xl`}
                                onClick={() => handleOptionClick("MonieFlex Bank")}
                            >
                                <img src={transfer} alt=""/>
                                <p className="py-5 text-sm">MonieFlex Bank</p>
                            </div>
                            <div
                                className={`mx-2 p-5 cursor-pointer ${
                                    selectedOption === "Other Bank Transfer" ? "bg-[#CFB1FE]" : ""
                                } rounded-xl`}
                                onClick={() => handleOptionClick("Other Bank Transfer")}
                            >
                                <img src={solar} alt=""/>
                                <p className="py-5 text-sm">Other Bank Transfer</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-[#2E2E2E] font-bold text-lg font-[Urbanist] py-2">
                            {selectedOption === "MonieFlex Bank"
                                ? "Send Money to MonieFlex Bank"
                                : "Send Money to Other Bank"}
                        </p>

                        <div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Bank"
                                    className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg placeholder:text-gray-300 bg-[#EDEDED]"
                                    value={bankCode}
                                    onChange={(e) => setBankCode(e.target.value)}
                                />
                                <img
                                    src={arrow}
                                    alt=""
                                    className="relative bottom-8 left-[400px]"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Receivers Account Number"
                                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg mb-2 placeholder:text-gray-300 bg-[#EDEDED]"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="N Amount"
                                className="w-full border-[#5A5959] border-[1px] py-3 px-3 rounded-lg my-2 placeholder:text-gray-300 bg-[#EDEDED]"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <textarea
                                name=""
                                id=""
                                className="w-full border-[#5A5959] border-[1px] py-2 px-3 rounded-lg my-2 h-[150px] bg-[#EDEDED]"
                                placeholder="Description"
                                value={narration}
                                onChange={(e) => setNarration(e.target.value)}
                            />
                            <input
                                type="button"
                                value="Send Money"
                                className="bg-[#CFB1FE] w-full rounded-md my-2 py-3 px-3"
                                onClick={openPinVerificationModal}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-2/5 ml-16 ">
                    <AccountBalance/>
                    <FrequentTransfer/>
                </div>
            </div>
            <SummaryModal
                isOpen={showModal}
                onClose={handleCloseModal}
                amount={amount}
                receiverName={accountNumber}
                setTransactionPin={setTransactionPin}
                handleVerifyPin={handleVerifyPin}
            />
            <TransferSuccessModal
                show={showSuccessModal}
                onClose={handleCloseSuccessModal}
            />
        </DashboardTemplate>
    );
};

export default TransferPage;
