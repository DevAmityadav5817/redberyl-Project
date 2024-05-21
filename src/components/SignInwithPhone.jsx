import React,{useState} from 'react'
import OTPInput, { ResendOTP } from "otp-input-react";



function SignInwithPhone() {
    const [OTP, setOTP] = useState("");
  return (
    <>
    <OTPInput class="bg-grey" value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
      <ResendOTP onResendClick={() => console.log("Resend clicked")} />
    </>
  )
}

export default SignInwithPhone