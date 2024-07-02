import React from 'react';
import Link from 'next/link';
import Footer from '../src/components/Footer';

function SignIn() {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen justify-center montserrat-med">
        <div className="mb-6 montserrat-med text-customPurple text-3xl">
          Artr
        </div>
        <div className="flex flex-col mb-6">
          <label className='mb-2 text-sm font-medium'>Username or Email</label>
          <input 
            type="text" 
            className="border border-customPurple rounded-lg w-80 h-7"
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
            className="border border-customPurple rounded-lg w-80 h-7"
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
        <Link href="/SignUp" className='bg-customPurple text-white rounded-2xl w-20 poppins-semibold text-sm py-1.5 px-2.5 shadow-lightPurple text-center'>
            Sign Up
        </Link>
        
      </div>

      {/* <div className='w-full'>
        <div className='flex text-royalBlue items-center w-11/12 mx-auto'>
          <div className='montserrat-med text-2xl mr-auto'>
            Artr
          </div>
          <div className='flex space-x-4 sm:space-x-6 md:space-x-10 lg:space-x-28 roboto-reg text-base ml-auto'>
            <button className='hover:underline'>Support</button>
            <button className='hover:underline'>Help</button>
            <button className='hover:underline'>About</button>
            <button className='hover:underline'>Artists</button>
            <button className='hover:underline'>Community</button>
          </div>
        </div>
        <div className='text-royalBlue poppins-reg mt-4 text-xs w-full mb-6'>
          <div className='flex items-center w-11/12 mx-auto'>
            <div className='mr-auto'></div>
            <button className='ml-auto hover:underline'>
              Privacy | Terms and Services
            </button>
          </div>
          
        </div>
      </div> */}
      {/* <Footer /> */}

    </div>
  );
}

export default SignIn;
