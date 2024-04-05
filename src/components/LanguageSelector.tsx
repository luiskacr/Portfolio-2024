import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants/lenguajes';
import ReactCountryFlag from "react-country-flag"


export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const storedLenguaje = localStorage.getItem('lenguaje');
  const [lenguaje, setLenguaje] = useState<string>(storedLenguaje ?? 'en');
  const [isOpen, setIsOpen] = useState(false);
  const flagStyles = {
      width: '1.4em',
      height: '1.4em',
      marginRight: '1rem'
  }

  useEffect(() => {
    i18n.changeLanguage(storedLenguaje ?? 'en');
  }, [storedLenguaje, i18n]);

  const onChangeLang = (lang_code:string) => {
    setLenguaje(lang_code)
    setIsOpen((isOpen) => !isOpen);
    i18n.changeLanguage(lang_code)
    localStorage.setItem('lenguaje', lang_code )
  }
  
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }


  return (
    <>
      <div className='appearance-none border-none flex hover:scale-125 transition '>
          <button onClick={toggle} role="button" aria-label='lenguaje-selector' >
            <ReactCountryFlag svg style={flagStyles} countryCode={lenguaje === 'en' ? 'us' : lenguaje} alt='flag' /> 
          </button>  
          <div className={`absolute ${ isOpen ? '' : 'hidden'} scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 
          bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md`}>
            <ul>
              {
                LANGUAGES.map(({ code, label }) => (
                  <li key={code} value={code} onClick={() => onChangeLang(code)}
                  className='themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 
                  dark:hover:bg-gray-500/50 dark:text-white rounded-sm gap-1'>
                     <ReactCountryFlag svg style={flagStyles} countryCode={code === 'en' ? 'us' : code} />  
                     {label} 
                  </li>
                ))
              }
            </ul>
          </div>
      </div> 
    </>
  );
};
