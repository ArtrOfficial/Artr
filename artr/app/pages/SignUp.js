"use client"

import React, { useState } from 'react';
import ProgressBar from '../src/components/ProgressBar';
import Footer from '../src/components/Footer';

function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 5));
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className='font-sans text-base font-medium mb-6  mt-24'>
        Create new Artr Account
      </div>
      <ProgressBar currentStep={currentStep} />
      <div className='font-sans text-medium font-medium text-center text-lg'>
        {currentStep === 1 && (
          <div className='flex'>
            <div className='bg-lilac w-52 h-48 rounded-xl mr-6'>
              <div className='mt-2'>General Account</div>
            </div>
            <div className='bg-lilac w-52 h-48 rounded-xl ml-6'>
              <div className='mt-2'>Artist Account</div>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div>

          </div>
        )}

        {currentStep === 3 && (
          <div>

          </div>
        )}

        {currentStep === 4 && (
          <div>

          </div>
        )}

        {currentStep === 5 && (
          <div>

          </div>
        )}
        
      </div>
      <div className='flex mt-10'>
        <button className='underline text-customPurple text-sm mr-6'>
          Cancel
        </button>
        <button className='text-sm bg-customPurple text-white rounded-xl w-16 h-6 ml-6' onClick={handleNext}>
          Next
        </button>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default SignUp;
