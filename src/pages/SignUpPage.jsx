import React from 'react'
import TopSide from "../components/Signup/TopSide"
import LeftSide from "../components/Signup/LeftSide"
import RightSide from "../components/Signup/RightSide"


const SignUpPage = () => {
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

export default SignUpPage