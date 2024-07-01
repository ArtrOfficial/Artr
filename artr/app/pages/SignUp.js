"use client"

import React, { useState } from 'react';
import ProgressBar from '../src/components/ProgressBar';
import Footer from '../src/components/Footer';

function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 5));
  };

  const handleBirthdayChange = (e) => {
    const { name, value } = e.target;
    if (name === 'month' && value.length <= 2) {
      setBirthday({ ...birthday, month: value });
    } else if (name === 'day' && value.length <= 2) {
      setBirthday({ ...birthday, day: value });
    } else if (name === 'year' && value.length <= 4) {
      setBirthday({ ...birthday, year: value });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className='montserrat-med text-base mb-6 mt-20'>
        {currentStep < 5 && <div>Create new Artr Account</div>}
      </div>
      {currentStep < 5 && <ProgressBar currentStep={currentStep} />}
      <div className='montserrat-med text-base'>
        {currentStep === 1 && (
          <div className='flex text-center'>
            <div className='bg-lilac w-52 h-48 rounded-xl mr-6'>
              <div className='mt-2'>General Account</div>
            </div>
            <div className='bg-lilac w-52 h-48 rounded-xl ml-6'>
              <div className='mt-2'>Artist Account</div>
            </div>
          </div>
        )}
        
        {currentStep === 2 && (
          <div className='flex flex-col text-center'>
            <div className='flex text-sm mb-2 inter-med'>
              <div className='mr-1'>
                Email
              </div>
              <div className='bg-gray rounded-2xl w-5'>
                i
              </div>
            </div>
            <input type="text" className='border border-customPurple rounded-2xl w-80' />
            <div className='flex text-sm mb-2 mt-4 inter-med'>
              <div className='mr-1'>
                Birthday
              </div>
              <div className='bg-gray rounded-2xl w-5'>
                i
              </div>
            </div>
            <div className='flex poppins-reg'>
              <div className='flex flex-col mr-2'>
                <div className='text-xs'>
                  MM
                </div>
                <input type="text" className='border border-customPurple rounded-xl w-10' />
              </div>
              
              <div className='flex flex-col mr-2'>
                <div className='text-xs'>
                  DD
                </div>
                <input type="text" className='border border-customPurple rounded-xl w-10' />
              </div>

              <div className='flex flex-col'>
                <div className='text-xs'>
                  YYYY
                </div>
                <input type="text" className='border border-customPurple rounded-xl w-20' />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className='flex flex-col inter-med text-sm'>
            <div className='mb-2'>
              Artr ID
            </div>
            <input type="text" className='mb-4 border border-customPurple rounded-2xl w-80 h-7'/>
            <div className='mb-2'>
              Display Name
            </div>
            <input type="text" className='mb-4 border border-customPurple rounded-2xl w-80 h-7'/>
            <div className='mb-2'>
              Password
            </div>
            <input type="password" className='mb-4 border border-customPurple rounded-2xl w-80 h-7'/>
            <div className='text-xs mb-4'>
              Password must contain:
              <ul className='list-disc list-inside'>
                <li>at least 8 characters</li>
                <li>no special characters other than</li>
              </ul>
            </div>
            <div className='mb-2'>
              Confirm Password
            </div>
            <input type="password" className='border border-customPurple rounded-2xl w-80 h-7'/>
          </div>
        )}

        {currentStep === 4 && (
          <div className='flex flex-col'>
            <div className='inter-med text-base'>
              ArtrSpace Terms and Conditions
            </div>
            <div className='border border-customPurple w-[450px] h-56 rounded-lg'></div>
            <div className='flex mt-4'>
              <input 
                type="checkbox"
                className='w-5 h-5 rounded-md border border-customPurple'
              />
              <div className='text-sm poppins-reg ml-2'>
                I have read the ArtrSpace Terms and Service and I agree.
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className='flex flex-col w-screen'>
            <div className='flex flex-col mx-auto w-11/12'>
              <div className='poppins-semibold text-2xl'>
                Profile
              </div>
              <hr className='w-full' />
            </div>
            <div className='flex mx-auto w-11/12 mt-8'>
              <div className='poppins-med mr-52'>
                Profile Picture
              </div>
              <div className='poppins-med'>
                Profile Banner
              </div>
            </div>
            <div className='flex mx-auto w-11/12 mt-4'>
              <div className='border w-36 h-36 rounded-full flex items-center justify-center mr-44'>
                <button className='flex border-2 border-customPurple rounded-xl poppins-reg text-sm text-customPurple underline items-center justify-center px-2'>
                  Upload New
                </button>
              </div>
              <div className='border w-7/12 h-36 rounded-xl flex items-center justify-center'>
                <button className='flex border-2 border-customPurple rounded-xl poppins-reg text-sm text-customPurple underline items-center justify-center px-2'>
                  Upload New
                </button>
              </div>
            </div>
            <div className='flex flex-col mx-auto w-11/12 mt-14'>
              <div className='poppins-med'>
                Description (Max 300 Characters)
              </div>
              <textarea 
                className='border rounded-xl w-10/12 h-52 mt-4'
                maxLength={300}
              />
            </div>

            <div className='flex flex-col mx-auto w-11/12 mt-11'>
              <div className='poppins-med'>
                Social Media Links
              </div>
              <div className='ml-5 mt-4'>
                <div className='flex'>
                  <div className='montserrat-reg w-32'>
                    Instagram
                  </div>
                  <input 
                    type="text"
                    className='border rounded-lg w-80'
                  />
                </div>
                <div className='flex mt-4'>
                  <div className='montserrat-reg w-32'>
                    Kofi
                  </div>
                  <input 
                    type="text"
                    className='border rounded-lg w-80'
                  />
                </div>
                <div className='flex mt-4'>
                  <div className='montserrat-reg w-32'>
                    Patreon
                  </div>
                  <input 
                    type="text"
                    className='border rounded-lg w-80'
                  />
                </div>
                <div className='flex mt-4'>
                  <div className='montserrat-reg w-32'>
                    Personal Site
                  </div>
                  <input 
                    type="text"
                    className='border rounded-lg w-80'
                  />
                </div>
                <div className='flex mt-4'>
                  <div className='montserrat-reg w-32'>
                    TikTok
                  </div>
                  <input 
                    type="text"
                    className='border rounded-lg w-80'
                  />
                </div>
                <div className='flex mt-4'>
                  <div className='montserrat-reg w-32'>
                    Twitter
                  </div>
                  <input 
                    type="text"
                    className='border rounded-lg w-80'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col mx-auto w-11/12 mt-11'>
              <div className='poppins-semibold text-2xl'>
                Commission Menu
              </div>
              <hr />
              <div className='flex items-center justify-center w-72 h-52 mt-12 shadow-custom-lg'>
                <div className='flex border-2 border-customPurple rounded-xl poppins-reg text-sm text-customPurple underline items-center justify-center px-2 w-28'>
                  Upload New
                </div>
              </div>
            </div>
            <div className='flex flex-col mx-auto w-11/12 mt-16'>
              <div className='poppins-semibold text-2xl'>
                Commission Gallery
              </div>
              <hr />
              <div className='flex items-center justify-center w-72 h-52 mt-12 shadow-custom-lg'>
                <div className='flex border-2 border-customPurple rounded-xl poppins-reg text-sm text-customPurple underline items-center justify-center px-2 w-28'>
                  Upload New
                </div>
              </div>
            </div>
            <div className='flex flex-col mx-auto w-11/12 mt-16'>
              <div className='poppins-semibold text-2xl'>
                FAQs
              </div>
              <hr />
              <div className='flex items-center'>
                ||
                <div className='flex flex-col'>
                  <div className='montserrat-reg'>
                    Question
                  </div>
                  <input 
                    type="text"
                    className='border w-full rounded-lg'
                  />

                  <div className='montserrat-reg'>
                    Answer
                  </div>
                  <input 
                    type="text"
                    className='border w-full rounded-lg'
                  />
                </div>
              </div>
              <div className='flex items-center'>
                ||
                <div className='flex flex-col'>
                  <div className='montserrat-reg'>
                    Question
                  </div>
                  <input 
                    type="text"
                    className='border w-full rounded-lg'
                  />

                  <div className='montserrat-reg'>
                    Answer
                  </div>
                  <input 
                    type="text"
                    className='border w-full rounded-lg'
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
      <div className='flex mt-10 poppins-reg'>
        {currentStep < 5 && (
          <div>
            <button className='underline text-customPurple text-sm mr-6'>
              Cancel
            </button>
            <button className='text-sm bg-customPurple text-white rounded-xl w-16 h-6 ml-6' onClick={handleNext}>
              Next
            </button>
          </div>
        )}

      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default SignUp;
