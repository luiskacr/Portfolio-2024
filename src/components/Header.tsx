import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { Theme } from "./Theme";
import { TranslateText } from "./TranslateText";
import { NAVITEMS } from "../constants/navItems";
import { NavItem } from "../interfaces";
import LogoDark from "../assets/logo-dark.png";
import LogoLight from "../assets/logo-light.png";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { NavLink, useLocation } from 'react-router-dom';

export  function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    console.log(location)

    function toggle() {
      setIsOpen((isOpen) => !isOpen);
    }

    return( 
      <header>
        <nav className="backdrop-brightness-100 backdrop-blur-sm fixed w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
            <a href="/" className="flex items-center space-x-3 " aria-label="Go to the Home">
              <span className="flex items-center justify-center text-3xl sm:text-6xl bold whitespace-nowrap dark:text-white">
                <LuChevronLeft /> 
                <img src={LogoDark} alt="logo" className="hidden dark:block  w-16 sm:w-28 h-auto" />
                <img src={LogoLight} alt="logo" className="block dark:hidden w-16 sm:w-28  h-auto" />
                <LuChevronRight />
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 ">
              <LanguageSelector />
              <Theme />
              <button data-collapse-toggle="navbar-sticky" type="button" aria-controls="navbar-sticky" onClick={toggle} aria-expanded={isOpen}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
                   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
                    dark:focus:ring-gray-600"
                >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
            </div>
            <div className={`items-center justify-between ${ isOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1 `}
                id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg border-gray-500 
                md:space-x-8 md:flex-row md:mt-0 md:border-0 gap-x-10 text-lg">
                {
                    NAVITEMS.map((navItem: NavItem) => (
                        <li key={navItem.label}>
                            <NavLink to={navItem.url}
                                className={`block py-2 px-3 rounded text-gray-900 text-xl  md:hover:bg-transparent hover:bg-gray-100  hover:animate-pop
                                md:hover:text-blue-700 md:p-0 md:dark:hover:text-yonder-blue-400 dark:text-white dark:hover:bg-gray-700
                                 dark:hover:text-white md:dark:hover:bg-transparent
                                 ${ location.pathname === navItem.url ? 'dark:border-b-4 dark:border-solid dark:text-yonder-blue-400 dark:border-yonder-blue-400/80' : '' }`}
                              >
                                <TranslateText text={navItem.label} />
                            </NavLink>
                        </li>
                    ))
                }
              </ul>
              
            </div>
          </div>
        </nav>
      </header>
    );
}


