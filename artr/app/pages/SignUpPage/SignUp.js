"use client"

import React, { useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';
import SignUp4 from './SignUp4';
import NewArtistProfile from './NewArtistProfile';

const steps = ['Account Type', 'Personal Information', 'Artr Account', 'Terms & Services', 'Start'];

function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isChecked, setCheckBox] = useState(false);

  const handleNext = () => {
    if (currentStep === 4 && !isChecked) {
      alert('You must agree to the terms and conditions to proceed.');
      return;
    }

    setCurrentStep((prevStep) => Math.min(prevStep + 1, 5));
  };


  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className='mb-6 mt-20'>
        {currentStep < 5 && <div className='montserrat-med text-base'>Create new Artr Account</div>}
      </div>
      {currentStep < 5 && <ProgressBar currentStep={currentStep} steps={steps} />}
      <div>
        {currentStep === 1 && <SignUp1 />}
        
        {currentStep === 2 && <SignUp2 />}

        {currentStep === 3 && <SignUp3 />}

        {currentStep === 4 && <SignUp4 isChecked={isChecked} setCheckBox={setCheckBox} />}

        {currentStep === 5 && <NewArtistProfile />}
        
      </div>
      <div className='flex mt-14 poppins-reg'>
        {currentStep < 4 && (
          <div>
            <button className='underline text-customPurple text-sm mr-6'>
              Cancel
            </button>
            <button className='text-sm bg-customPurple text-white rounded-xl w-16 h-6 ml-6' onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <button className='underline text-customPurple text-sm mr-6'>
              Cancel
            </button>
            <button className='text-sm bg-customPurple text-white rounded-xl w-16 h-6 ml-6 shadow-lightPurple' onClick={handleNext}>
              Start
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default SignUp;
