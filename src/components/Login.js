import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="flex flex-col absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mt-4 w-full rounded-sm bg-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mt-4 mb-2 w-full rounded-sm bg-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 mt-2 w-full rounded-sm bg-gray-500"
        />
        <button className="p-4 my-8 bg-red-700 w-full rounded-sm">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignIn ? (
            <div>
              <span className="text-gray-400">New to Netflix ?</span>{" "}
              <span onClick={toggleSignInForm} className="cursor-pointer">
                Sign Up Now
              </span>
            </div>
          ) : (
            <div>
              <span className="text-gray-400">Already Registered ?</span>{" "}
              <span onClick={toggleSignInForm} className="cursor-pointer">
                Sign In
              </span>
            </div>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
