import React from "react";

function SignUp1() {
  return (
    <div className="flex flex-col md:flex-row text-center md:mt-8">
      <div className="bg-lilac w-52 h-48 rounded-xl mt-6 md:mr-6 montserrat-med text-base">
        <div className="mt-2">General Account</div>
      </div>
      <div className="bg-lilac w-52 h-48 rounded-xl mt-6 md:ml-6">
        <div className="mt-2">Artist Account</div>
      </div>
    </div>
  );
}

export default SignUp1;
