import React from "react";
import { PillsProps } from "../interfaces";


export const PillsComponent:React.FC<PillsProps> = ({ children, index , addClass}) => {
    return <>
        <span key={index} id={typeof(index) === 'number' ?index.toString() : index } 
        className={`${addClass} text-gray-900 hover:text-white border border-gray-800 shadow-sm shadow-black hover:bg-gray-400/50 
        focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-lg 
        px-5 py-2.5 text-center me-2 dark:border-gray-600 dark:text-gray-400 
        dark:hover:text-white  dark:hover:bg-gray-600 dark:focus:ring-gray-800`}>
            {children}
        </span>
    </>
}