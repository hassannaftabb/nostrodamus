import React, { useRef, useState, useEffect } from 'react';
import { Screens } from '../../Static/GetStartedScreens/ScreensData';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const [screen, setScreen] = useState(1);

  //Navigate if screens completed
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('screen') === 0) {
      navigate('/home');
    }
  }, [navigate, screen]);

  //Screen refs
  const screen1 = useRef();
  const screen2 = useRef();
  const screen3 = useRef();

  //Increments in screens (for animations)
  const incrementScreen1 = (e) => {
    screen1.current.classList.remove('translate-x-0');
    screen1.current.classList.add('translate-x-full');
    screen1.current.classList.add('opacity-0');
    setTimeout(() => {
      setScreen(screen + 1);
    }, 500);
  };

  const incrementScreen2 = (e) => {
    screen2.current.classList.add('translate-x-full');
    screen2.current.classList.add('opacity-0');
    setTimeout(() => {
      setScreen(screen + 1);
    }, 500);
  };

  //Skip screen function
  const skipScreens = () => {
    const newScreen = 0;
    localStorage.setItem('screen', newScreen);
    navigate('/home');
  };

  return (
    <section className="flex items-center justify-center w-[100%] mt-4  mb-24">
      <div className="w-[40%] sm:w-[100%] mx-auto shadow-xl">
        {/* Screen 1  */}
        {screen === 1 ? (
          <div
            className={`border border-gray-100 bg-white flex items-center justify-center flex-col ease-in-out duration-700 translate-x-0 
          `}
            ref={screen1}
          >
            {/* Image  */}
            <div>
              <img
                src={Screens[0].thumbSrc}
                alt="Screen1"
                width={'100%'}
                height={600}
                className="rounded-lg"
              />
            </div>
            {/* Text  */}
            <div className="p-8 text-center">
              <div className="text-2xl text-black font-bold">
                {Screens[0].title}
              </div>
              <p className="text-gray-600">{Screens[0].subText}</p>
            </div>
            {/* Buttons  */}
            <div className="flex justify-center w-full mb-16">
              <button
                onClick={skipScreens}
                className="cursor-pointer text-xl p-2  mx-4 text-gray-600 hover:text-gray-500 font-medium hover:underline"
              >
                Skip
              </button>
              <button
                onClick={incrementScreen1}
                className="bg-primary px-16 text-xl text-white font-medium rounded-md hover:scale-105 transition-all"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        {/* Screen 2  */}
        {screen === 2 ? (
          <div
            className={`border border-gray-100 bg-white flex items-center justify-center flex-col ease-in-out duration-700 translate-x-0
          `}
            ref={screen2}
          >
            {/* Image  */}
            <div>
              <img
                src={Screens[1].thumbSrc}
                alt="Screen1"
                width={'100%'}
                height={600}
                className="rounded-lg"
              />
            </div>
            {/* Text  */}
            <div className="p-8 text-center">
              <div className="text-2xl text-black font-bold">
                {Screens[1].title}
              </div>
              <p className="text-gray-600">{Screens[1].subText}</p>
            </div>
            {/* Buttons  */}
            <div className="flex justify-center w-full mb-16">
              <button
                onClick={skipScreens}
                className="cursor-pointer text-xl p-2  mx-4 text-gray-600 hover:text-gray-500 font-medium hover:underline"
              >
                Skip
              </button>
              <button
                onClick={incrementScreen2}
                className="bg-primary px-16 text-xl text-white font-medium rounded-md hover:scale-105 transition-all"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        {/* Screen 3  */}
        {screen === 3 ? (
          <div
            className={`border border-gray-100 bg-white flex items-center justify-center flex-col ease-out duration-700
          `}
            ref={screen3}
          >
            {/* Image  */}
            <div>
              <img
                src={Screens[2].thumbSrc}
                alt="Screen1"
                width={'100%'}
                height={600}
                className="rounded-lg"
              />
            </div>
            {/* Text  */}
            <div className="p-8 text-center">
              <div className="text-2xl text-black font-bold">
                {Screens[2].title}
              </div>
              <p className="text-gray-600">{Screens[2].subText}</p>
            </div>
            {/* Buttons  */}
            <div className="flex justify-center w-full mb-16">
              <button
                onClick={skipScreens}
                className="bg-primary px-16 py-4 text-xl text-white font-medium rounded-md hover:scale-105 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default GetStarted;
