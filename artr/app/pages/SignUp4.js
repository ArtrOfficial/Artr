import React from 'react';

function SignUp4({ isChecked, setCheckBox }) {

  const handleCheckboxChange = (event) => {
    setCheckBox(event.target.checked);
  };

  return (
    <div className='flex flex-col mt-6'>
      <div className='inter-med text-base'>
        ArtrSpace Terms and Conditions
      </div>
      <div className='border border-customPurple w-[450px] h-56 rounded-lg'></div>
      <div className='flex mt-4'>
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='w-5 h-5 rounded-md border border-customPurple'
        />
        <div className='text-sm poppins-reg ml-2'>
          I have read the ArtrSpace Terms and Service and I agree.
        </div>
      </div>
    </div>
  );
}

export default SignUp4;
