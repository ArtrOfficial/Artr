import React from 'react';

function SmallProgressBar({ currentStep, steps }) {
  return (
    <div className="flex justify-between items-center w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mb-6">
      {steps.map((step, index) => {
        if (index === currentStep - 1) {
          return (
            <div key={index} className="flex flex-col items-center relative w-full">
              <div
                className={`flex justify-center items-center w-8 h-8 rounded-full montserrat-med
                  ${currentStep > index ? 'bg-lilac text-customPurple' : 'bg-gray text-darkGray'}`}
              >
                {index + 1}
              </div>
              <div className={`mt-2 text-sm inter-med ${currentStep > index ? 'text-customPurple' : 'text-darkGray'}`}>
                {step}
              </div>
              {index === 0 && (
                <div
                  className={`absolute top-4 h-0.5 w-full
                    ${currentStep > index + 1 ? 'bg-lilac' : 'bg-gray'}`}
                  style={{ left: 'calc(50% + 1rem)' }}
                />
              )}

              {(index > 0 && index < steps.length - 1) && (
                <div
                  className={`absolute top-4 h-0.5 w-full
                    ${currentStep > index + 1 ? 'bg-lilac' : 'bg-gray'}`}
                  style={{ left: 'calc(50% + 1rem)' }}
                />
              )}

              {(index > 0 && index < steps.length - 1) && (
                <div
                  className={`absolute top-4 h-0.5 w-full
                    ${currentStep > index + 1 ? 'bg-lilac' : 'bg-gray'}`}
                  style={{ right: 'calc(50% + 1rem)' }}
                />
              )}

              {index === steps.length - 1 && (
                <div
                  className={`absolute top-4 h-0.5 w-full
                    ${currentStep > index + 1 ? 'bg-lilac' : 'bg-gray'}`}
                  style={{ right: 'calc(50% + 1rem)' }}
                />
              )}
            </div>
          );
        }
      })} 
    </div>
  );
}

export default SmallProgressBar;
