import { useEffect, useRef, useState } from 'react';

export default function OTPGenerator() {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  const generateOtp = () => {
    const generatedOtp = Math.floor(Math.random() * 999999 + 100000).toString();
    setOtp(generatedOtp);
    setTimeLeft(10)
  };

useEffect(() => {
  if (timeLeft <= 0) return;

  const id = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(id);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(id);
}, [otp]);

  return (
    <div className='container'>
      <h1>OTP GENERATOR</h1>
      <h2>{otp? otp : 'Click to Generate OTP'}</h2>
      <p aria-live='assertive'>
        {timeLeft<=0 ? "OTP Expired click generate to New OTP" :`Expire in: ${timeLeft} seconds` }
      </p>
      <button onClick={generateOtp} disabled={timeLeft>0}>Generate OTP</button>
    </div>
  );
}