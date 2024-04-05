import React from 'react';
import { ButtonProps } from '../interfaces';


export const MainButton: React.FC<ButtonProps> = ({ href, target, addClass , onClick,  children }) => {
    const buttonClasses = "mt-5 relative inline-block p-px font-semibold leading-6 text-white no-underline  bg-gray-400 dark:bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900";
    const containerClasses = "relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10";
    const gradientLineClasses = "";

    return (
        <>
            {href ? (
                <a className={`${buttonClasses} ${addClass} hover:animate-pop ml-4`} href={href} target={target} rel="noopener noreferrer">
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                        <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className={containerClasses}>
                        {children}
                    </div>
                    <span className={gradientLineClasses}></span>
                </a>
            ) : (
                <button className={`${buttonClasses} ${addClass} hover:animate-pop`} onClick={onClick}>
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                        <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className={containerClasses}>
                        {children}
                    </div>
                    <span className={gradientLineClasses}></span>
                </button>
            )}
        </>
    );
};


