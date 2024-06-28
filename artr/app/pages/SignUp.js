import React from 'react';

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="flex flex-col items-center space-y-4 p-6 border border-customPurple rounded-lg bg-white">
        <div className="mb-6 text-2xl font-bold">
          Sign Up
        </div>
        {/* Add your sign-up form fields here */}
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-sm font-medium">Username</label>
          <input type="text" className="border border-customPurple rounded-lg w-80 p-2"/>
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-sm font-medium">Email</label>
          <input type="email" className="border border-customPurple rounded-lg w-80 p-2"/>
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-sm font-medium">Password</label>
          <input type="password" className="border border-customPurple rounded-lg w-80 p-2"/>
        </div>
        <button className="bg-customPurple text-white rounded-2xl w-20 font-semibold text-sm py-1.5 px-2.5 shadow-lightPurple">
          Register
        </button>
      </div>
    </div>
  );
}

export default SignUp;
