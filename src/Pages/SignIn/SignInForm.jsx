import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../store/authSlice";
const SignInForm = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const loginError = useSelector (state=>state.auth.loginError)

  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    dispatch(signInUser({email,password}));
  };

  if (user.token) {
    return <Navigate to="/dashboard/dashboard" replace={true} />;
  }

  return (
    <form onSubmit={handleSignIn}>
      <div className="mb-6">
        <div className="relative ">
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
        <div className="text-orange-500 text-xs  ml-1">
          {loginError.message && loginError.message}
        </div>
      </div>

      <div>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 left-0 text-lg text-gray-300 flex items-center pl-5 pointer-events-none">
            <FontAwesomeIcon className="   mr-2" icon={faLock} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            class=" border border-gray-100 font-medium  text-gray-900 text-sm rounded-2xl focus:outline-gray-200 block w-full pl-12 py-5  "
            placeholder="Create Password"
            name="password"
            ref={passRef}
          />
          <button
            type="button"
            class="block w-5 h-5 text-center text-xl leading-0 absolute top-4 right-5 text-gray-400 focus:outline-none hover:text-orange-500 transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon
              className="text-md text-gray-300 "
              icon={showPassword ? faEye : faEyeSlash}
            />
          </button>
        </div>
      </div>

      <div className="my-7 flex items-center">
        <input
          className="w-5 h-5 mr-3 bg-gray-500 border-gray-300 rounded-xl"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="text-gray-400 font-medium" for="flexCheckDefault">
          Remember Me
        </label>
      </div>
      <button
        className="w-full py-5 text-base rounded-3xl font-medium bg-blue-500 text-white"
        type="submit"
      >
        Sign In
      </button>
      <div className="my-7">
        <p className="text-center text-gray-400 font-medium ">
          Don't have an account yet?{" "}
          <Link className="text-blue-500" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
