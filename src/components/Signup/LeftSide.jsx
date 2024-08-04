import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api";

const LeftSide = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [bvn, setBvn] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [transactionPin, setTransactionPin] = useState("0000");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !email.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !phoneNumber.trim() ||
      !address.trim() ||
      !bvn.trim() ||
      !password.trim() ||
      !transactionPin.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = {
      email,
      firstName,
      lastName,
      phoneNumber,
      address,
      bvn,
      password,
      confirmPassword,
      transactionPin,
    };

    try {
      const response = await api.register(userData);
      toast.success(
        response.responseMessage +
          " Go to your email and follow the instructions in it."
      );
      navigate('/otp');
    } catch (error) {
      console.error("Error received: ", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="m-16">
      <h1 className="text-3xl pb-3">SIGN UP</h1>
      <p className="pb-5 text-[#5B5B5B]">
        Fill in the below to signup an account with us.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border bottom-3 rounded w-full h-10 flex items-center border-black-400 pl-2 mt-2 mb-2"
          />
        </div>

        <div>
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border bottom-3 rounded w-full h-10 flex items-center border-black-400 pl-2 mt-2 mb-2"
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border bottom-3 rounded w-full h-10 flex items-center border-black-400 pl-2 mt-2 mb-2"
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            className="border bottom-3 rounded w-full h-10 flex items-center border-black-400 pl-2 mt-2 mb-2"
          />
        </div>

        <div>
          <label>BVN</label>
          <input
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
            className="border bottom-3 rounded w-full h-10 flex items-center border-black-400 pl-2 mt-2 mb-2"
          />
        </div>

        <div>
          <label>Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border bottom-3 rounded w-full h-10 flex items-center border-black-400 pl-2 mt-2 mb-2"
          />
        </div>

        <div className="relative">
          <label className="block mb-1">Transaction Pin</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={transactionPin}
              onChange={(e) => setTransactionPin(e.target.value)}
              placeholder="Your transaction pin has been set. Kindly change after signup"
              className="border rounded w-full h-10 flex items-center border-black-400 pl-2 pr-10 mt-2 mb-2"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="text-gray-700 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="block mb-1">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded w-full h-10 flex items-center border-black-400 pl-2 pr-10 mt-2 mb-2"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="text-gray-700 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="block mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border rounded w-full h-10 flex items-center border-black-400 pl-2 pr-10 mt-2 mb-2"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="text-gray-700 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-5 mb-2">
          <button
            type="submit"
            className="buttoun w-full text-[#FCFCFD] text-2xl rounded-md h-16 bg-[#CFB1FE]"
            // onClick={() => navigate('/otp')}
          >
            SIGNUP
          </button>
          <p className="pt-5 text-[#5B5B5B]">
            An Email will be sent to the registered email. Kindly follow the
            instructions in it.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <button
            type="button"
            className="hover:bg-[#CFB1FE] buttoun w-full text-[#000000] text-2xl rounded-md h-16 border-2 border-[#CFB1FE]"
          >
            I have a MonieFlex Account.
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LeftSide;
