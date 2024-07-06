import React, { useState } from 'react';

function SignUp2() {

  const [formData, setFormData] = useState({
    email: '',
    birthday: {
      month: '',
      day: '',
      year: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBirthdayChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'month' || name === 'day') && value.length <= 2) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        birthday: {
          ...prevFormData.birthday,
          [name]: value,
        },
      }));
    } else if (name === 'year' && value.length <= 4) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        birthday: {
          ...prevFormData.birthday,
          [name]: value,
        },
      }));
    }
  };

  return (
    <div className='flex flex-col text-center mt-12 mb-10'>
      <div className='flex text-sm mb-2 inter-med'>
        <div className='mr-1'>
          Email
        </div>
        <div className='bg-gray rounded-2xl w-5'>
          i
        </div>
      </div>
      <input 
        type="text" 
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className='border border-customPurple md:rounded-2xl rounded-lg w-96 h-8 pl-2' 
      />
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
          <input 
            type="text" 
            name="month"
            value={formData.birthday.month}
            onChange={handleBirthdayChange}
            className='border border-customPurple md:rounded-2xl rounded-lg md:w-16 w-20 h-8 pl-2' 
          />
        </div>
        
        <div className='flex flex-col mr-2'>
          <div className='text-xs'>
            DD
          </div>
          <input 
            type="text" 
            name="day"
            value={formData.birthday.day}
            onChange={handleBirthdayChange}
            className='border border-customPurple md:rounded-2xl rounded-lg md:w-16 w-20 h-8 pl-2' 
          />
        </div>

        <div className='flex flex-col'>
          <div className='text-xs'>
            YYYY
          </div>
          <input 
            type="text" 
            name="year"
            value={formData.birthday.year}
            onChange={handleBirthdayChange}
            className='border border-customPurple md:rounded-2xl rounded-lg md:w-28 w-36 h-8 pl-2' 
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp2;
