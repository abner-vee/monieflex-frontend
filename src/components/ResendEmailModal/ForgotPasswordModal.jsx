import frame from "../../assets/Emailframe.jpg";

const ResendEmailModal = ({ email, isOpen, onClose }) => {
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
                    An email has been sent to {email}.
                    Follow the steps in the mail to reset.
                </p>
                <div className="flex justify-center mb-5">
                    <img src={frame} alt='Email Frame' />
                </div>
                <p className="pb-5 text-gray-600">
                    Didn't see any mail? Check your spam folder or ask for a resend.
                </p>
                <div className="flex flex-col items-center">
                    <button
                        type="button"
                        className="w-full text-white text-xl rounded-md h-12 bg-purple-400 mb-4"
                    >
                        Resend mail
                    </button>
                    <button
                        onClick={onClose}
                        className="text-purple-500"
                    >
                        Back to login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResendEmailModal;
