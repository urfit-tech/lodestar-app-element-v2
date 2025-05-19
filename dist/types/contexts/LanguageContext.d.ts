import { default as React } from 'react';
type LanguageProps = {
    currentLanguage: string;
    locale: string;
    setCurrentLanguage?: (language: string) => void;
};
declare const LanguageContext: React.Context<LanguageProps>;
export declare const LanguageProvider: React.FC<React.PropsWithChildren>;
export default LanguageContext;
