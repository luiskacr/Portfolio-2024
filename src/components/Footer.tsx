import { FaRegHeart } from "react-icons/fa";

export const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center md:flex-row justify-center md:justify-between">
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90 mb-6 md:mb-0 md:me-6 flex justify-center items-center text-white">
          © {currentYear} Made with  
          <div className="mx-2 text-red-700 animate-heartbeat" 
            style={{animationIterationCount: 'infinite', animationDelay: '800', animationDuration: '1000ms'}}>
            <FaRegHeart />
          </div>
          by  <a className="mx-1" href="https://www.linkedin.com/in/luiskacr/" target="_blank">Luiska</a>  
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/contact" className="hover:underline me-4 md:me-6">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
