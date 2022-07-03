import React from 'react';
import { LogoRecoveryPageData, Text } from '../../Static/Recovery/RecoveryData';

const PasswordRecovery = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {/* Image + Headings  */}
        <div className="flex items-center justify-center text-center flex-col">
          <h1 className="text-2xl font-bold flex items-center justify-center text-primary sm:text-3xl">
            <img
              src={LogoRecoveryPageData.logoSrc}
              alt={LogoRecoveryPageData.logoAlt}
              width={LogoRecoveryPageData.logoWidth}
              height={LogoRecoveryPageData.logoHeight}
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
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                className="w-full p-4 pr-12 text-sm border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter your account associated email."
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
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

export default PasswordRecovery;
