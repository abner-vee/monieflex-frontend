import React, { useState } from "react";

const PasswordInputField = ({ label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col mb-2 w-full relative">
      <label className="font-['Urbanist'] font-medium text-[18px] text-[#2E2E2E] mb-2">
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="rounded-[5px] border border-[#5A5959] bg-[#EDEDED] w-full h-[50px] p-3"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5A5959]"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default PasswordInputField;
