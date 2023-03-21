import React, { useState } from "react";

import googleIcon from "../../images/google.svg";
import appleIcon from "../../images/apple.svg";
import SignUpForm from "./SignUpForm";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";

const SignUp = () => {
  const signupLoading = useSelector(state=>state.auth.isLoading)

  if(signupLoading){
      return (
        <div style={{background:'#f5f5f54d'}} className="absolute top-0 left-0  z-50 w-full min-h-screen flex items-center justify-center">
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color="orange"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      );
    }
  return (
    <div className="xl:container mx-auto px-4 mt-4">
      <div className="flex items-center justify-center">
        <div className="signup-form ">
          {/* top heading */}
          <div>
            <h1 className="text-2xl text-center font-bold text-gray-700 mb-3">
              Getting Started
            </h1>
            <p className="text-lg text-center text-gray-400 font-medium mb-6">
              Create an account to continue!
            </p>
          </div>
          <div className="flex gap-8 mb-4">
            <button className="flex items-center rounded-2xl font-medium text-gray-400 bg-secondary w-1/2 px-7 py-4 text-base">
              <img src={googleIcon} className="w-5 mr-3" alt="" /> Sign Up with
              Google
            </button>
            <button className="flex items-center rounded-2xl font-medium text-gray-400 bg-secondary w-1/2 px-7 py-4 text-base">
              <img src={appleIcon} className="w-5 mr-3" alt="" /> Sign Up with
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

          <SignUpForm/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
