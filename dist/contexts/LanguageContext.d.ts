type LanguageProps = {
    currentLanguage: string;
    locale: string;
    setCurrentLanguage?: (language: string) => void;
};
declare const LanguageContext: import('react').Context<LanguageProps>;
export declare const LanguageProvider: React.FC<React.PropsWithChildren>;
export default LanguageContext;
