import React from 'react'
import LeftSide from "../components/ForgotPassword/LeftSide"
import RightSide from "../components/ForgotPassword/RightSide"
import TopSide from "../components/Signup/TopSide.jsx";


const ForgotPasswordPage = () => {
    return (
        <>
            <TopSide />
            <div className='grid grid-cols-2'>
                <LeftSide />
                <RightSide />
            </div>
        </>
    )
}

export default ForgotPasswordPage