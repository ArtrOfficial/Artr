import React from 'react';

function SignIn() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          Artr
        </div>
        <div className="flex flex-col">
          <label>Username or Email</label>
          <input type="text" className="border border-customPurple rounded-lg"/>
        </div>
        <div className="flex flex-col">
          <div className='flex'>
            <label>
              Password
            </label>
            <div className="text-customPurple underline text-xs">
              Forgot Password?
            </div>
          </div>
          <input type="text" className="border border-customPurple rounded-lg"/>
        </div>
        <button className="bg-customPurple text-white rounded-xl w-20">
          Login
        </button>
        <div>
          Or
        </div>
        <div className="border border-customPurple rounded-lg">
          Sign in with Google
        </div>
        <div>
          New to Artr?
        </div>
        <button className='bg-customPurple text-white rounded-xl w-20'>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignIn;
