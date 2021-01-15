import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'

const fallbackLng = ['en'];
const availableLanguages = ['en', 'fa'];

i18n
    .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
        debug: true,
        whitelist: availableLanguages,
        // lng: 'en',
        // /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
        // ns: ['translations'],
        // backend: {
        //     /* translation file path */
        //     loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
        // },
        //
        //
        // defaultNS: 'translations',
        // keySeparator: false,
        interpolation: {
            escapeValue: false
            // formatSeparator: ','
        },
        // react: {
        //     wait: true
        // }
    })

export default i18n