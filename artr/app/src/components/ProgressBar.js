import React from 'react';

function ProgressBar({ currentStep }) {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto mb-8">
      {steps.map((step, index) => {
        return (
          <div key={index} className="relative flex flex-col items-center">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center montserrat-med ${
                  currentStep >= step ? 'bg-lilac text-customPurple' : 'bg-gray text-darkGray'
                }`}
              >
                {step}
              </div>
              {index < steps.length - 1 && (
                <div className="flex-grow h-1 mx-2 bg-gray-300">
                  <div
                    className={`h-full ${
                      currentStep > step ? 'bg-customPurple' : 'bg-gray-300'
                    }`}
                    style={{ width: '100%' }}
                  />
                </div>
              )}
            </div>
            {step === 1 && (
              <div className="mt-2 text-sm inter-med text-center">
                Account Type
              </div>
            )}
            {step === 2 && (
              <div className="mt-2 text-sm inter-med text-center">
                Personal 
                <br/>
                Information
              </div>
            )}
            {step === 3 && (
              <div className="mt-2 text-sm inter-med text-center">
                Artr Account
              </div>
            )}
            {step === 4 && (
              <div className="mt-2 text-sm inter-med text-center">
                Terms & Services
              </div>
            )}
            {step === 5 && (
              <div className="mt-2 text-sm inter-med text-center">
                Start
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
