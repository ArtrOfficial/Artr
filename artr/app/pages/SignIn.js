import React from 'react';
import Link from 'next/link';

function SignIn() {
  return (
    <div className='flex flex-col items-center min-h-screen justify-center montserrat-med'
    >
      <form className='h-full bg-color rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100'>
        <div className="flex flex-col items-center justify-center mx-20 my-14">
          <div className="mb-6 montserrat-med text-customPurple text-3xl">
            Artr
          </div>
          <div className="flex flex-col mb-6">
            <label className='mb-2 text-sm font-medium'>Username or Email</label>
            <input 
              type="text" 
              className="border border-customPurple rounded-lg w-80 h-7 pl-2"
            />
          </div>
          <div className="flex flex-col mb-5">
            <div className='flex mb-2'>
              <label className='mr-auto text-sm font-medium'>
                Password
              </label>
              <button className="text-customPurple underline text-xs font-medium ml-auto">
                Forgot Password?
              </button>
            </div>
            <input 
              type="password" 
              className="border border-customPurple rounded-lg w-80 h-7 pl-2"
            />
          </div>
          <button className="bg-customPurple text-white rounded-2xl w-20 mb-4 montserrat-semibold text-sm p-1">
            Login
          </button>
          <div className='mb-4 text-sm font-medium'>
            Or
          </div>
          <button className="flex justify-center border-2 border-customPurple rounded-3xl w-80 mb-14 text-sm font-medium py-2">
            Sign in with Google
          </button>
          <div className='text-xl font-medium mb-3'>
            New to Artr?
          </div>
          <Link href="/pages/SignUpPage" className='bg-customPurple text-white rounded-2xl w-20 poppins-semibold text-sm py-1.5 px-2.5 shadow-lightPurple text-center'>
              Sign Up
          </Link>
        </div>
      </form>
      
    </div>
  );
}

export default SignIn;
