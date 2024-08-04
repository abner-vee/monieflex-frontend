import React, { useState } from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";

function togglePasswordVisibility() {

}

const LeftSide = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValidated, setIsValidated] = useState(false);
    const [isOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        const email = "abnervivian@gmail.com";
        e.preventDefault();
        if (

            !password.trim() ||
            !confirmPassword.trim()
        ) {
            toast.error("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            const response = await axios.put(
                `https://monieflex-5960245aa82d.herokuapp.com/api/v1/customer/reset-password?email=${email}&oldPassword=${password}&newPassword=${confirmPassword}`
            );
            if (response.status === 200) {
                toast.success("Password reset successfully");
            }else {
                toast.error(response.statusText);
            }
            console.log("Response received: ", response.data);
        } catch (error) {
            console.log("Error received: ", error);
        }
    };

    let passwordVisible;
    return (
        <>
            <div className="m-16 mt-56">
                <h1 className="text-3xl pb-3">RESET PASSWORD?</h1>
                <p className="pb-5 text-gray-600">
                    Create a new password you can remember to avoid forgetting or click on suggest for a strong password.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="relative">
                        <label className="block mb-1">Enter New Password</label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border rounded w-full h-12 flex items-center border-black pl-2 pr-10 mt-2 mb-2 bg-gray-200"
                            />

                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <FontAwesomeIcon
                                    icon={passwordVisible ? faEyeSlash : faEye}
                                    className="text-gray-700 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                        </div>
                        <p className="flex justify-end text-gray-400">Suggest Strong Password</p>
                    </div>

                    <div className="relative ">
                        <label className="block mb-1 mt-5">Confirm New Password</label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}

                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border rounded w-full h-12 flex items-center border-black pl-2 pr-10  mb-2 bg-gray-200"
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
                    <div className="flex flex-col items-center justify-center mt-10 mb-2">
                        <button
                            type="submit"
                            className="buttoun w-full text-[#FCFCFD] text-2xl rounded-md h-12 bg-[#CFB1FE]"
                        >
                            Reset Password
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10">
                        <button
                            type="button"
                            className="hover:bg-[#CFB1FE] buttoun w-full text-[#000000] text-2xl rounded-md h-16 border-2 border-gray-500 "
                        >
                            Back to Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LeftSide;
