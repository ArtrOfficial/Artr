import React from 'react';

function Footer() {
  return (
    <div className='w-full relative bottom-0 left-0'>
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
    </div>
  );
}

export default Footer;
