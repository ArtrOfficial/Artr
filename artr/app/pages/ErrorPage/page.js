import React from 'react';
import Image from "next/image";

function Error404() {
  return (
    <div>
      <div className='poppins-reg text-2xl mt-3 ml-3'>
        Artr
      </div>
      <div className='flex'>
        
        <div className='flex flex-col ml-28 min-h-screen mb-20'>
          <div className='poppins-med text-4xl mt-20 mb-8'>
            Uh oh, Wrong Turn...
          </div>
          <div className='poppins-reg text-brightPurple'>
            <div>
              A page you are trying to find is in
            </div>
            <div>
              another castle/dimension.
            </div>
          </div>
          <Image
            src="/ladder.svg"
            alt="Ladder"
            className='my-4 w-60 h-64'
            width={100}
            height={100}
            priority
          />
          <div className='flex flex-col w-72'>
            <div className='poppins-reg text-brightPurple mb-4'>
              Let's help you back on your journey.
            </div>
            
            <button className='border border-lightPurple border-4 rounded-lg bg-brightPurple text-white w-36 py-0.5 mx-auto'>
              Return Home
            </button>
          </div>
        </div>
        <Image
          src="/binoculars.svg"
          alt="Binoculars on person icon"
          className='ml-2 w-44 h-64'
          width={100}
          height={100}
          priority
        />

      </div>
        
    </div>
  );
}

export default Error404;
