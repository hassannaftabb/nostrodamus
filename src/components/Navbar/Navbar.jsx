import React, { useRef } from 'react';
import {
  NavLinksDataPrime,
  LogoData,
  NavLinksDataSec,
  NavLinksDataOptional,
  NavLinksUnLogged,
} from '../../Static/Navbar/NavData';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Navbar = () => {
  const menuRef = useRef();
  const toggleDropdown = () => {
    if (menuRef.current.classList.contains('translate-x-96')) {
      menuRef.current.classList.remove('translate-x-96');
      menuRef.current.classList.add('translate-x-0');
    } else if (menuRef.current.classList.contains('translate-x-0')) {
      menuRef.current.classList.remove('translate-x-0');
      menuRef.current.classList.add('translate-x-96');
    }
  };
  return (
    <section className="flex border shadow-xl border-Base w-[70%] sm:w-[100%] lg:w-[100%] mx-auto justify-between">
      {/* Logo  */}
      <Link to={LogoData.href}>
        <div>
          <img
            alt={LogoData.logoAlt}
            src={LogoData.logoSrc}
            width={LogoData.logoWidth}
            height={LogoData.logoHeight}
          />
        </div>
      </Link>
      {/* Main Nav Links  */}
      <section
        className="absolute h-full w-[25vw] sm:w-[80vw]  top-0 right-0 translate-x-96 bg-primary text-center z-10 transition-all"
        ref={menuRef}
      >
        {/* (For Logged In User) */}
        <ul className="flex flex-col w-full items-center space-y-4 mt-8 ">
          <BsArrowRight
            className="text-Base text-3xl font-bold cursor-pointer hover:scale-150 transition-all"
            onClick={toggleDropdown}
          />

          {NavLinksDataPrime.map((navlinkP, i) => {
            return (
              <Link to={navlinkP.href} onClick={toggleDropdown}>
                <li
                  key={i}
                  className="flex items-center space-x-2 text-xl text-Base hover:bg-Base/50 p-2 rounded-md"
                >
                  {navlinkP.icon}
                  {navlinkP.title}
                </li>
              </Link>
            );
          })}
          <hr />
          {NavLinksDataSec.map((navlinkS, i) => {
            return (
              <Link to={navlinkS.href} onClick={toggleDropdown}>
                <li
                  key={i}
                  className="flex items-center space-x-2 text-xl text-Base hover:bg-Base/50 p-2 rounded-md"
                >
                  {navlinkS.icon}
                  {navlinkS.title}
                </li>
              </Link>
            );
          })}
          <div className="w-full flex items-center justify-center absolute bottom-4 text-center">
            {NavLinksDataOptional.map((navlinkT, i) => {
              return (
                <Link to={navlinkT.href} onClick={toggleDropdown}>
                  <li
                    key={i}
                    className="flex mx-auto items-center space-x-2 text-xl text-Base hover:bg-Base/50 p-2 rounded-md "
                  >
                    {navlinkT.icon}
                    {navlinkT.title}
                  </li>
                </Link>
              );
            })}
          </div>
        </ul>
        {/* For LoggedOut User  (Un Comment to use)*/}
        {/* <ul className="flex flex-col w-full items-center space-y-4 mt-8 ">
          <BsArrowRight
            className="text-Base text-3xl font-bold cursor-pointer hover:scale-150 transition-all"
            onClick={toggleDropdown}
          />

          {NavLinksUnLogged.map((navlinkUL, i) => {
            return (
              <Link to={navlinkUL.href} onClick={toggleDropdown}>
                <li
                  key={i}
                  className="flex items-center space-x-2 text-xl text-Base hover:bg-Base/50 p-2 rounded-md"
                >
                  {navlinkUL.icon}
                  {navlinkUL.title}
                </li>
              </Link>
            );
          })}
          <hr />
        </ul> */}
      </section>
      {/* Ham Menu  */}
      <button
        className="mx-8 p-2.5 h-[90%] my-auto text-gray-600 transition-all bg-gray-100 rounded hover:text-gray-600/75 hover:shadow-lg hover:shadow-primary"
        onClick={toggleDropdown}
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </section>
  );
};

export default Navbar;
