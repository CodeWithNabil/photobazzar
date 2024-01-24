
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import logo from '../assets/B.png';
  import { FaUser } from 'react-icons/fa';
  import { useAuth0 } from '@auth0/auth0-react';
  import { IoMdLogOut } from "react-icons/io";
  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
      <div>
        <nav className="bg-black dark:bg-gray-800 fixed w-full h-18 z-20 top-0 left-0 shadow-xl">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  PHOTOBAZZAR
                </span>
              </Link>
            </div>
            <div className="hidden md:flex md:order-1 space-x-4">
              <Link
                to="/about"
                className="text-2xl font-bold py-2 px-4 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 dark:text-white dark:hover-bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent dark:border-gray-700"
              >
                About
              </Link>
              <Link
                to="/service"
                className="text-2xl font-bold py-2 px-4 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 dark:text-white dark:hover-bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </div>
            <div className="flex md:order-2 gap-x-2 items-center">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button> 

              <div
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                  isMenuOpen ? 'block' : 'hidden'
                }`}
                id="navbar-sticky"
              >
                <div className="md:hidden space-y-2">
                
                 
                 
                </div>
                {/* <div className="space-y-2">
                  <button className="flex gap-x-1 text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-tl-lg rounded-tr-none rounded-bl-none rounded-br-lg">
                    <FaUser className="mt-1 text-black" /> Register - its free
                  </button>
                </div> */}
                {isAuthenticated && (
              <p className="font-light text-sm">user - {user.name}</p>
            )}

            {isAuthenticated ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
            <IoMdLogOut className='mt-1 text-black' />    Log Out
              </button>
            ) : (
              <button
                className="flex gap-x-1 text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-tl-lg rounded-tr-none rounded-bl-none rounded-br-lg"
                onClick={() => loginWithRedirect()}
              >
           <FaUser className="mt-1 text-black" />    Register - its free
              </button>
            )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  