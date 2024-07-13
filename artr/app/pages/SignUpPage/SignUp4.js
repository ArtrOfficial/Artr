import React from "react";

function SignUp4({ isChecked, setCheckBox }) {
  const handleCheckboxChange = (event) => {
    setCheckBox(event.target.checked);
  };

  return (
    <div className="flex flex-col mt-6">
      <div className="inter-med text-base text-center md:text-start">
        ArtrSpace Terms and Conditions
      </div>
      <div className="flex justify-center">
        <div className="border border-customPurple md:w-[450px] w-[350px] h-56 rounded-lg pl-3 pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="flex mt-4 md:w-[450px] w-[350px]">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-5 h-5 rounded-md border border-customPurple"
        />
        <div className="text-sm poppins-reg ml-2">
          I have read the ArtrSpace Terms and Service and I agree.
        </div>
      </div>
    </div>
  );
}

export default SignUp4;
