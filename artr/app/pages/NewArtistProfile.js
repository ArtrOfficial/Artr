import React from 'react';

function NewArtistProfile() {
  return (
    <div className='flex flex-col w-screen'>
      <div className='flex flex-col mx-auto w-11/12'>
        <div className='flex items-center'>
          <div className='poppins-semibold text-2xl mb-2 mr-auto'>
            Profile
          </div>
          <button className='inter-med text-xs text-customPurple ml-auto'>
            skip for now
          </button>
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
              className='border rounded-lg w-80 h-8'
            />
          </div>
          <div className='flex mt-4'>
            <div className='montserrat-reg w-32'>
              Kofi
            </div>
            <input 
              type="text"
              className='border rounded-lg w-80 h-8'
            />
          </div>
          <div className='flex mt-4'>
            <div className='montserrat-reg w-32'>
              Patreon
            </div>
            <input 
              type="text"
              className='border rounded-lg w-80 h-8'
            />
          </div>
          <div className='flex mt-4'>
            <div className='montserrat-reg w-32'>
              Personal Site
            </div>
            <input 
              type="text"
              className='border rounded-lg w-80 h-8'
            />
          </div>
          <div className='flex mt-4'>
            <div className='montserrat-reg w-32'>
              TikTok
            </div>
            <input 
              type="text"
              className='border rounded-lg w-80 h-8'
            />
          </div>
          <div className='flex mt-4'>
            <div className='montserrat-reg w-32'>
              Twitter
            </div>
            <input 
              type="text"
              className='border rounded-lg w-80 h-8'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col mx-auto w-11/12 mt-11'>
        <div className='poppins-semibold text-2xl mb-2'>
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
        <div className='poppins-semibold text-2xl mb-2'>
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
        <div className='poppins-semibold text-2xl mb-2'>
          FAQs
        </div>
        <hr />
        <div className='flex items-center mt-4'>
          <svg className='mr-1' height="30" width="2">
            <line x1="0" y1="0" x2="0" y2="100" style={{stroke:'black', strokeWidth:2}} />
          </svg>
          <svg className='mr-6' height="30" width="2">
            <line x1="0" y1="0" x2="0" y2="100" style={{stroke:'black', strokeWidth:2}} />
          </svg>
          <div className='flex flex-col w-full'>
            <div className='montserrat-reg mb-1'>
              Question
            </div>
            <input 
              type="text"
              className='border w-full rounded-lg h-8'
            />

            <div className='montserrat-reg mt-2 mb-1'>
              Answer
            </div>
            <input 
              type="text"
              className='border w-full rounded-lg h-8'
            />
          </div>
        </div>
        <div className='flex items-center mt-6 w-full'>
          <svg className='mr-1' height="30" width="2">
            <line x1="0" y1="0" x2="0" y2="100" style={{stroke:'black', strokeWidth:2}} />
          </svg>
          <svg className='mr-6' height="30" width="2">
            <line x1="0" y1="0" x2="0" y2="100" style={{stroke:'black', strokeWidth:2}} />
          </svg>
          <div className='flex flex-col w-full'>
            <div className='montserrat-reg mb-1'>
              Question
            </div>
            <input 
              type="text"
              className='border w-full rounded-lg h-8'
            />

            <div className='montserrat-reg mt-2 mb-1'>
              Answer
            </div>
            <input 
              type="text"
              className='border w-full rounded-lg h-8'
            />
          </div>
        </div>
        <div className='flex items-center justify-center mt-6'>
          <button className='border-2 border-customPurple rounded-2xl px-2 py-0.5 poppins-reg text-customPurple text-sm'>
            + Add a Question
          </button>
        </div>
        <div className='flex justify-center'>
          <button className='bg-customPurple poppins-reg text-white shadow-lightPurple rounded-3xl w-28 h-8 mt-28'>
            Finish!
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewArtistProfile;
