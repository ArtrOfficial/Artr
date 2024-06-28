"use client"

import React from 'react';
import { useState } from 'react';
import ProgressBar from '../src/components/ProgressBar';
import Footer from '../src/components/Footer';

function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex flex-col items-center mt-24">
      <div className='font-sans text-base font-medium mb-6'>
        Create new Artr Account
      </div>
      <ProgressBar currentStep={currentStep} />
      <div className='flex font-sans text-medium font-medium text-center text-lg'>
        <div className='bg-lilac w-52 h-48 rounded-xl mr-6'>
          <div className='mt-2'>General Account</div>
        </div>
        <div className='bg-lilac w-52 h-48 rounded-xl ml-6'>
          <div className='mt-2'>Artist Account</div>
        </div>
      </div>
      <div className='flex mt-10'>
        <button className='underline text-customPurple text-sm mr-6'>
          Cancel
        </button>
        <button className='text-sm bg-customPurple text-white rounded-xl w-16 h-6 ml-6'>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
