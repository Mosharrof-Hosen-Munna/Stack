import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLock,faEye } from "@fortawesome/free-solid-svg-icons";
import googleIcon from "../../images/google.svg";
import appleIcon from "../../images/apple.svg";
import { Link } from "react-router-dom";


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
          <form>
            <div>
              <div class="relative mb-6">
                <div class="absolute inset-y-0 left-0 text-lg text-gray-300 flex items-center pl-5 pointer-events-none">
                  @
                </div>
                <input
                  type="email"
                  class=" border border-gray-100 font-medium text- text-gray-900 text-sm rounded-2xl focus:outline-orange-500 block w-full pl-12 py-5  "
                  placeholder="Your Email"
                  name="email"
                />
              </div>
            </div>
            
            <div>
              <div class="relative mb-6">
                <div class="absolute inset-y-0 left-0 text-lg text-gray-300 flex items-center pl-5 pointer-events-none">
                  <FontAwesomeIcon className="   mr-2" icon={faLock} />
                </div>
                <input
                  type="password"
                  class=" border border-gray-100 font-medium text- text-gray-900 text-sm rounded-2xl focus:outline-orange-500 block w-full pl-12 py-5  "
                  placeholder="Create Password"
                  name="password"
                />
                <button type="button" class="block w-5 h-5 text-center text-xl leading-0 absolute top-4 right-5 text-gray-400 focus:outline-none hover:text-orange-500 transition-colors" > <FontAwesomeIcon className="text-md text-gray-300 " icon={faEye} /></button>
              </div>
            </div>
            
            <div className="my-7 flex items-center">
              <input className="w-5 h-5 mr-3 bg-gray-500 border-gray-300 rounded-xl" type="checkbox" value="" id="flexCheckDefault" />
              <label className="text-gray-400 font-medium" for="flexCheckDefault">
               Remember Me
              </label>
            </div>
            <button className="w-full py-5 text-base rounded-3xl font-medium bg-blue-500 text-white" type="submit">Sign In</button>
            <div className="my-7">
              <p className="text-center text-gray-400 font-medium ">
                Don't have an account yet? <Link className="text-blue-500" to="/sign-up">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
