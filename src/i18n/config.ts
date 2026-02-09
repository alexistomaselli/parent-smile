import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esTranslations from './locales/es.json';
import itTranslations from './locales/it.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: esTranslations },
            it: { translation: itTranslations }
        },
        lng: 'it',
        fallbackLng: 'it',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
