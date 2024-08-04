import React, { useState } from "react";
import axios from "axios";
import ResendEmailModal from "../ResendEmailModal/ForgotPasswordModal.jsx";

const LeftSide = () => {
    const [email, setEmail] = useState("");
    const [isValidated, setIsValidated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert("Email address cannot be empty");
            return;
        }
        try {
            const response = await axios.get(
                `https://monieflex-5960245aa82d.herokuapp.com/api/v1/auth/validate-email?email=${email}`
            );
            if (response.status === 200) {
                setIsValidated(true);
                setIsModalOpen(true);
            }
            console.log("Response received: ", response.data);
        } catch (error) {
            console.log("Error received: ", error);
        }
    };

    return (
        <>
            <div className="m-16 mt-56">
                <h1 className="text-3xl pb-3">FORGOT PASSWORD?</h1>
                <p className="pb-5 text-gray-600">
                    Enter your registered Email below and follow the link that will be sent to reset your password
                </p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Registered Email or Phone Number</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border bottom-3 rounded w-full h-12 flex items-center border-gray-500 pl-2 mt-2 mb-2 bg-gray-200"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10 mb-2">
                        <button
                            type="submit"
                            className="buttoun w-full text-[#FCFCFD] text-2xl rounded-md h-10 bg-[#CFB1FE]"
                        >
                            Send
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10 mb-2">
                        <button
                            type="button"
                            className="hover:bg-[#CFB1FE] buttoun w-full text-[#000000] text-2xl rounded-md h-16 border-2 border-gray-500 "
                        >
                            Back to Login
                        </button>
                    </div>
                </form>
            </div>
            <ResendEmailModal
                email={email}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default LeftSide;
