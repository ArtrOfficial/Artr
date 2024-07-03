import React from 'react';

function SignUp3() {
  return (
    <div className='flex flex-col inter-med text-sm mt-4'>
      <div className='mb-2'>
        Artr ID
      </div>
      <input type="text" className='mb-4 border border-customPurple rounded-2xl w-96 h-8'/>
      <div className='mb-2'>
        Display Name
      </div>
      <input type="text" className='mb-4 border border-customPurple rounded-2xl w-96 h-8'/>
      <div className='mb-2'>
        Password
      </div>
      <input type="password" className='mb-4 border border-customPurple rounded-2xl w-96 h-8'/>
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
      <input type="password" className='border border-customPurple rounded-2xl w-96 h-8'/>
    </div>
  );
}

export default SignUp3;
