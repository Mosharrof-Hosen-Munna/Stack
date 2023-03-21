import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileBeam,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { registrationValidation } from "../../validations/authValidator";
import { setRegError, signupUser } from "../../store/authSlice";

const SignUpForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef("");
  const nameRef = useRef("");
  const passRef = useRef("");

  const regError = useSelector((state) => state.auth.regError);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;

    e.preventDefault();

    if (!agreeTerms) return setShowTermsError(true);

    const validateErr = registrationValidation(name, password);
    if (validateErr?.name || validateErr?.password) {
      dispatch(setRegError(validateErr));
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    dispatch(signupUser(userData));
  };

  // navigate user if user not login
  if (user.token) {
    return <Navigate to="/dashboard/dashboard" replace={true} />;
  }

  return (
    <form onSubmit={handleSignup}>
      <div>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 text-lg text-gray-300 flex items-center pl-5 pointer-events-none">
            @
          </div>
          <input
            type="email"
            ref={emailRef}
            className=" border border-gray-100 font-medium  text-gray-900 text-sm rounded-2xl focus:outline-gray-200 block w-full pl-12 py-5  "
            placeholder="Your Email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 text-lg text-gray-300 flex items-center pl-5 pointer-events-none">
            <FontAwesomeIcon className="   mr-2" icon={faFaceSmileBeam} />
          </div>
          <input
            type="text"
            ref={nameRef}
            className={` border border-gray-100 font-medium text- text-gray-900 text-sm rounded-2xl ${
              regError.name && "border-orange-500"
            } focus:outline-gray-200 block w-full pl-12 py-5  `}
            placeholder="Your Name"
            name="name"
          />
        </div>
        <div className="text-orange-500 text-xs  ml-1">
          {regError.name && regError.name}
        </div>
      </div>
      <div className="mb-6">
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 text-lg text-gray-300 flex items-center pl-5 pointer-events-none">
            <FontAwesomeIcon className="   mr-2" icon={faLock} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            ref={passRef}
            className={` border border-gray-100 font-medium text- text-gray-900 text-sm rounded-2xl ${
              regError.password && "border-orange-500"
            } focus:outline-gray-200 block w-full pl-12 py-5  `}
            placeholder="Create Password"
            name="password"
          />

          <button
            type="button"
            className="block w-5 h-5 text-center text-xl leading-0 absolute top-4 right-5 text-gray-400 focus:outline-none hover:text-orange-500 transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon
              className="text-md text-gray-300 "
              icon={showPassword ? faEye : faEyeSlash}
            />
          </button>
        </div>
        <div className="text-orange-500 text-xs mt-1 ml-1">
          {regError.password && regError.password}
        </div>
      </div>
      <div className="flex items-center  gap-5 px-4">
        <div className="p-0.5 w-full bg-green-500 rounded"></div>
        <div className="p-0.5 w-full bg-green-500 rounded"></div>
        <div className="p-0.5 w-full bg-green-500 rounded"></div>
        <div className="p-0.5 w-full bg-green-500 rounded"></div>
        <div className="p-0.5 w-full bg-green-500 rounded"></div>
        <div className="p-0.5 w-full bg-gray-300 rounded"></div>
      </div>
      <div className="my-7 flex items-center">
        <input
          className="w-5 h-5 mr-3 bg-gray-500 border-gray-300 rounded-xl"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={agreeTerms}
          onClick={() => {
            setShowTermsError(false);
            setAgreeTerms(!agreeTerms);
          }}
        />
        <label
          className={`${
            showTermsError ? "text-orange-500" : "text-gray-400"
          }  font-medium`}
          for="flexCheckDefault"
        >
          I agree to the Terms & Conditions
        </label>
      </div>
      <button
        className="w-full py-5 text-base rounded-3xl font-medium bg-blue-500 text-white"
        type="submit"
      >
        Sign Up
      </button>
      <div className="my-7">
        <p className="text-center text-gray-400 font-medium ">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
