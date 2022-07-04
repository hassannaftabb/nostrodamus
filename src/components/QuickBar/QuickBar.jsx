import React from 'react';
import {
  QuickBarButtonData,
  QuickBarLinksData,
} from '../../Static/QuickBar/QuickBarData';
import { Link } from 'react-router-dom';
const QuickBar = () => {
  return (
    <section className="fixed bottom-0 w-[100%] flex items-center justify-center ">
      <div className="w-[70%] sm:w-[100%] lg:w-[100%] bg-white rounded-md shadow-2xl shadow-gray-400">
        <ul className="flex space-x-10 sm:space-x-4 items-center justify-center p-4">
          {QuickBarLinksData.map((quickLink, i) => {
            return (
              <Link to={quickLink.href} key={i}>
                <li className="hover:border hover:bg-gray-400 rounded-full p-1 ">
                  {quickLink.icon}
                </li>
              </Link>
            );
          })}
          <Link to={QuickBarButtonData.href}>
            <button
              type="submit"
              className="block w-[110%] px-5 py-3 text-sm font-medium text-white bg-primary rounded-lg transition-all hover:scale-105"
            >
              <div className="flex items-center space-x-2 text-lg">
                {QuickBarButtonData.icon} Feedback
              </div>
            </button>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default QuickBar;
