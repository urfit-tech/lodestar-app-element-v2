import 'dayjs/locale/zh-tw';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import 'dayjs/locale/vi';
type LanguageProps = {
    currentLanguage: string;
    locale: string;
    setCurrentLanguage?: (language: string) => void;
};
declare const LanguageContext: import("react").Context<LanguageProps>;
export declare const LanguageProvider: React.FC<React.PropsWithChildren>;
export default LanguageContext;
