import React from 'react';
import { Link } from 'react-router-dom';
import {
  LogoProfilePageData,
  Text,
} from '../../Static/ProfilePage/ProfilePageData';

const Profile = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {/* Image + Headings  */}
        <div className="flex items-center justify-center text-center flex-col">
          <h1 className="text-2xl font-bold flex items-center justify-center text-primary sm:text-3xl">
            <img
              src={LogoProfilePageData.logoSrc}
              alt={LogoProfilePageData.logoAlt}
              width={LogoProfilePageData.logoWidth}
              height={LogoProfilePageData.logoHeight}
            />
          </h1>
          <p className="text-2xl font-medium">{Text.heading}</p>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            {Text.subText}
          </p>
        </div>
        <div className="p-12 flex flex-col items-center justify-center border-4 border-primary mt-4 rounded-lg">
          <div className="text-2xl font-bold">Hassan Aftab</div>
          <div className="text-xl font-medium text-primary">
            hassannaftabb@gmail.com
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-col mt-6">
          <Link to="/setnewpassword">
            <button
              type="submit"
              className="block w-80 px-5 py-3 text-sm font-medium text-white bg-primary rounded-lg transition-all hover:scale-105"
            >
              Change Password
            </button>
          </Link>
          <button
            type="submit"
            className="block w-80 px-5 py-3 mt-4 text-sm font-medium text-white bg-primary rounded-lg transition-all hover:scale-105"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
