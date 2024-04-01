import React, { useState, useEffect, useRef } from 'react';
import { TranslateText } from './TranslateText';
import { useTranslation } from 'react-i18next';

interface FilterComponentProps {
  filterProjects: (type:string, value: string) => void;
  filterValues: string[];
}


export const FilterProjects: React.FC<FilterComponentProps> = ({ filterProjects, filterValues }) => {
    const [open, setOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('');
    const { t } = useTranslation();
    filterValues = filterValues.sort()

    const handleOpen = () =>{
        setOpen((isOpen) => !isOpen);
    }

    const handleFilterClick = (value: string) => {
        filterProjects('check',value);
        setSelectedFilter(value === selectedFilter ? '' : value);
    };

    const filterRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            if (
                (filterRef.current && !filterRef.current.contains(e.target as Node)) &&
                (buttonRef.current && !buttonRef.current.contains(e.target as Node))
            ) {
                setOpen(false);
            }
    
        };
    
        document.addEventListener("mousedown", handler);
    
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
    <section className="flex items-center relative" >
        <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">  
            <div className="relative shadow-md ">
                <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2">
                        <form className="flex items-center">
                            <label className="sr-only">
                                <TranslateText text='search' />
                            </label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border
                                    border-gray-200 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500
                                    dark:bg-gray-700 dark:bg-gray-900/90 dark:placeholder-gray-400 
                                    dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    placeholder={t('search')} onChange={(e)=>filterProjects('input', e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                        <div className="flex items-center w-full space-x-3 md:w-auto" >
                            <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" ref={buttonRef}  onClick={handleOpen}
                                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border 
                                border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 
                                focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-900/90 dark:text-gray-400 dark:border-gray-600 
                                dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                </svg>
                                    <TranslateText text='filter' />
                                <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>  
                        </div>
                    </div>
                </div>
                <div className="flex md:justify-end">
                    <div id="filterDropdown" className={`filter-dropdown ${open ? 'filter-dropdown-open' : ''} md:absolute z-20 w-48  dark:bg-transparent
                     md:dark:bg-gray-900 bg-white rounded-lg shadow  ` } ref={filterRef} >
                        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                            <TranslateText text='technologies'/>
                        </h6>
                        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                            <li className="flex items-center" >
                                <input id="apple" type="checkbox" value=""  checked={selectedFilter === ''} onChange={() => handleFilterClick('')}
                                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600
                                     dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    <TranslateText text='all' /> 
                                </label>
                            </li>
                            {
                            filterValues.map((value) =>(
                                <li key={value} className="flex items-center"  >
                                    <input id={value}  value={value} type="checkbox" checked={selectedFilter === value}
                                        onChange={() => handleFilterClick(value)}
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600
                                         dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                        {value}
                                    </label>
                                </li>
                            ))            
                            } 
                        </ul>     
                    </div>
                </div>
            </div>                
        </div>
    </section>                
  );
};