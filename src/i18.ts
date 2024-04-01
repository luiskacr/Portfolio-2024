import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {TRANSLATIONS} from './constants/translations'

i18n
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('lenguaje')||'en',
        fallbackLng: 'en',
        interpolation:{
            escapeValue: false
        },
        resources: {
            en:{
                translation: TRANSLATIONS.en
            },
            es:{
                translation: TRANSLATIONS.es
            }
        }
    });

export default i18n;