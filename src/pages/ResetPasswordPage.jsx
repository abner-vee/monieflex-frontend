import LeftSide from "../components/ResetPassword/LeftSide.jsx";
import RightSide from "../components/ResetPassword/RightSide.jsx";
import TopSide from "../components/Signup/TopSide.jsx";

const ResetPasswordPage = () => {
    return <>
        <TopSide/>
        <div className='grid grid-cols-2'>
            <LeftSide/>
            <RightSide/>
        </div>

    </>
}

export default ResetPasswordPage