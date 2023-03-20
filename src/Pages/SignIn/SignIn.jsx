import React, { useState } from "react";
import googleIcon from "../../images/google.svg";
import appleIcon from "../../images/apple.svg";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <div className="xl:container mx-auto px-4 mt-4">
      <div className="flex items-center justify-center">
        <div className="signup-form ">
          {/* top heading */}
          <div>
            <h1 className="text-2xl text-center font-bold text-gray-700 mb-3">
              Sign In
            </h1>
            <p className="text-lg text-center text-gray-400 font-medium mb-6">
             Welcome back, you've been missed! 
            </p>
          </div>
          <div className="flex gap-8 mb-4">
            <button className="flex items-center rounded-2xl font-medium text-gray-400 bg-gray-50 w-1/2 px-7 py-4 text-base">
              <img src={googleIcon} className="w-5 mr-3" alt="" /> Sign In with
              Google
            </button>
            <button className="flex items-center rounded-2xl font-medium text-gray-400 bg-gray-50 w-1/2 px-7 py-4 text-base">
              <img src={appleIcon} className="w-5 mr-3" alt="" /> Sign In with
              Apple ID
            </button>
          </div>

          <div
            class="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-200 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-200">
            <p
              class="mx-4 mb-0 text-center text-gray-400 font-medium text-lg">
              OR
            </p>
          </div>

          {/* signin form */}
          <SignInForm/>
          
        </div>
      </div>
    </div>
  );
};

export default SignIn;
