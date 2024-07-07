"use client"

import React, { useEffect, useState } from 'react';
import ProgressBar from '../../components/ProgressBar';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';
import SignUp4 from './SignUp4';
import SignUp5 from './SignUp5';
import NewArtistProfile from './NewArtistProfile';
import SmallProgressBar from '@/app/components/SmallProgressBar';

const steps = ['Account Type', 'Personal Information', 'Artr Account', 'Agreements', 'Creation'];

function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isChecked, setCheckBox] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleNext = () => {
    if (currentStep === 4 && !isChecked) {
      alert('You must agree to the terms and conditions to proceed.');
      return;
    }

    setCurrentStep((prevStep) => Math.min(prevStep + 1, 6));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className='mb-6 mt-20'>
        {currentStep < 6 && <div className="mb-6 montserrat-med text-customPurple text-3xl">Artr</div>}
      </div>
      {currentStep < 6 && (isSmallScreen ? (
        <SmallProgressBar currentStep={currentStep} steps={steps} />
      ) : (
        <ProgressBar currentStep={currentStep} steps={steps} />
      ))}
      <div>
        {currentStep === 1 && <SignUp1 />}
        
        {currentStep === 2 && <SignUp2 />}

        {currentStep === 3 && <SignUp3 />}

        {currentStep === 4 && <SignUp4 isChecked={isChecked} setCheckBox={setCheckBox} />}

        {currentStep === 5 && <SignUp5 />}

        {currentStep === 6 && <NewArtistProfile />}
        
      </div>
      <div className='flex mt-14 poppins-reg'>
        {currentStep <= 4 && (
          <div>
            <button className='underline text-customPurple text-sm mr-6'>
              Cancel
            </button>
            <button className='text-sm bg-customPurple text-white rounded-xl w-16 h-6 ml-6' onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <button className='underline text-customPurple text-sm mr-6'>
              Cancel
            </button>
            <button className='text-sm bg-customPurple text-white rounded-xl w-16 h-6 ml-6' onClick={handleNext}>
              Submit
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default SignUp;
