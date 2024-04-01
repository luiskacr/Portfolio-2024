import { useEffect, useState } from "react";


export const Theme = () => {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState<string>(storedTheme?? 'dark');

    useEffect(() => {
        if (theme === 'dark' ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    
    return  <>
        {theme === 'dark' ? (
                        <button onClick={handleThemeSwitch} type="button" role="button" aria-label="dark-mode"
                            className="text-gray-500 dark:text-gray-400 hover:scale-125 transition rounded-lg text-sm p-2.5"
                        >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" 
                                clipRule="evenodd"/>
                            </svg>

                        </button>
                    ) : (
                        <button onClick={handleThemeSwitch} type="button" role="button" aria-label="light-mode"
                            className="text-gray-500 dark:text-gray-400 hover:scale-125 transition rounded-lg text-sm p-2.5"
                        >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
                                strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
                            </svg>
                        </button>
                    )}
    </>
    
}