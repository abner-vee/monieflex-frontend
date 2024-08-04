import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api, {resendOtp} from "../../api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

const OtpScreen = ({ email }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const otpValue = otp.join("");
      await api.activateAccount(otpValue);
      toast.success("Account activated successfully!");
      navigate('/login');
    } catch (error) {
      toast.error("Failed to activate account.");
    }
  };

  const handleResend = async () => {
    setResendDisabled(true);
    setCountdown(60);
    try {
      await resendOtp(email);
      toast.success("OTP resent successfully!");
    } catch (error) {
      toast.error("Failed to resend OTP.");
    }
  };

  useEffect(() => {
    let timer;
    if (resendDisabled) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setResendDisabled(false);
            return 60;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendDisabled]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08284E]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
        <p className="text-center mb-4">
          A 6-digit OTP has been sent to{" "}
          <span className="font-bold">{email}</span>. Please enter it below to
          activate your account.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex space-x-2 mb-6">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                required
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-[#CFB1FE] text-white py-2 px-4 rounded hover:bg-[#08284E] focus:outline-none"
            >
              Submit
            </button>
            <button
              onClick={handleResend}
              disabled={resendDisabled}
              className="bg-[#08284E] text-white py-2 px-4 rounded hover:bg-[#08284E] focus:outline-none"
            >
              {resendDisabled ? `Resend OTP (${countdown}s)` : "Resend OTP"}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default OtpScreen;
