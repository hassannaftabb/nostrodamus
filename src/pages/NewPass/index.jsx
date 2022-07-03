import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  NewPassPageData,
  Text,
} from '../../Static/NewPassPage/NewPassPageData';

const NewPass = () => {
  const [showPass, setShowPass] = useState(false);

  //Toggle Password Show
  const toggleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {/* Image + Headings  */}
        <div className="flex items-center justify-center text-center flex-col">
          <h1 className="text-2xl font-bold flex items-center justify-center text-primary sm:text-3xl">
            <img
              src={NewPassPageData.logoSrc}
              alt={NewPassPageData.logoAlt}
              width={NewPassPageData.logoWidth}
              height={NewPassPageData.logoHeight}
            />
          </h1>
          <p className="text-2xl font-medium">{Text.heading}</p>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            {Text.subText}
          </p>
        </div>

        {/* Form  */}
        <form
          action=""
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-lg shadow-primary border-2 border-gray-200"
        >
          <div>
            <label htmlFor="password" className="text-lg font-medium">
              New Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPass ? 'text' : 'password'}
                id="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter a new password."
              />

              {showPass && (
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <AiFillEye
                    className="w-5 h-5 text-primary cursor-pointer"
                    onClick={toggleShowPass}
                  />
                </span>
              )}

              {!showPass && (
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <AiFillEyeInvisible
                    className="w-5 h-5 text-primary cursor-pointer"
                    onClick={toggleShowPass}
                  />
                </span>
              )}
            </div>
          </div>
          {/* Buttons  */}
          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-primary rounded-lg transition-all hover:scale-105"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPass;
