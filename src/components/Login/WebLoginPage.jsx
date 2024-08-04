import React, { useState } from "react";
import { toast } from "react-toastify";
import PasswordInputField from "./PasswordInputField";
import LanguageDropdown from "./LanguageDropdown";
import api from "../../api";
import AbstractImage from "../../assets/Abstract3DdesignElementsArrangement.png";
import {useLocation, useNavigate} from "react-router-dom";

const Navbar = ({ logoSrc, title }) => (
  <div className="bg-[#08284E] flex justify-between p-[15px_80px] w-full">
    <div className="flex items-center">
      <img src={logoSrc} alt="Logo" className="w-[35.7px] h-[50px] mr-2" />
      <span className="font-['Urbanist'] font-bold text-[35px] text-[#FFFFFF]">
        {title}
      </span>
    </div>
    <div className="flex items-center">
      <LanguageDropdown />
      <button className="font-['Urbanist'] font-semibold text-[16px] text-[#FFFFFF] mr-6 ml-4">
        Help
      </button>
    </div>
  </div>
);

const InputField = ({ label, type = "text", placeholder, value, onChange }) => (
  <div className="flex flex-col mb-6 w-full">
    <label className="font-['Urbanist'] font-medium text-[18px] text-[#2E2E2E] mb-2">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="rounded-[5px] border border-[#5A5959] bg-[#EDEDED] w-full h-[50px] p-3"
    />
  </div>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    try {
      const data = await api.login(email, password);
      localStorage.setItem("authToken", data.token); // Storing token in local storage
      toast.success("Login successful!");
      console.log("Login successful:", data);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        toast.error(
          `Login failed: ${error.response.data.message || "Unknown error"}`
        );
        console.error("Login failed:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        toast.error("No response received from server");
        console.error("No response received:", error.request);
      } else {
        toast.error(`Error: ${error.message}`);
        console.error("Error", error.message);
      }
    }
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col justify-center items-center w-[90%] md:w-[700px] p-10 md:p-24">
      <div className="mb-2 w-full text-left">
        <h1 className="font-['Urbanist'] font-bold text-[28px] text-[#2E2E2E]">
          LOGIN
        </h1>
        <p className="font-['Urbanist'] font-medium text-[16px] text-[#5B5B5B] mb-6">
          Input your details below to login
        </p>
      </div>
      <InputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInputField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="flex justify-end items-center w-full mb-6">
        <span className="text-right font-['Urbanist'] text-[12px] text-[#2E2E2E] opacity-60">
          Forgot Password?
        </span>
      </button>
      <p className="font-['Poppins'] text-[14px] text-[#A3A3A3] mb-6 w-full text-left">
        By logging in, I acknowledge that I have read and agree to the{" "}
        <span className="text-[#08284E]">Terms and Conditions</span> and{" "}
        <span className="text-[#08284E]">Privacy Policy</span>
      </p>
      <button
        className="rounded-[5px] bg-[#CFB1FE] w-full h-[50px] font-['Urbanist'] font-bold text-[20px] text-[#FFFFFF] mb-12 hover:bg-[#C971F8]"
        onClick={handleLogin}
      >
        Log In
      </button>
      <button className="rounded-[5px] border border-[#08284E] w-full h-[50px] font-['Urbanist'] font-medium text-[18px] text-[#08284E] hover:bg-[#08284E] hover:text-[#FFFFFF]">
        Open a MonieFlex Bank Account
      </button>
    </div>
  );
};


const WebLoginPage = () => (
  <div className="bg-[#08284E] flex flex-col items-center w-full">
    <Navbar logoSrc="src/assets/logo.png" title="MonieFlex" />
    <div className="flex w-full flex-col lg:flex-row">
      <LoginForm />
      <div
        className="hidden lg:block w-[740px] h-[945px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${AbstractImage})` }}
      ></div>
    </div>
  </div>
);

export default WebLoginPage;
