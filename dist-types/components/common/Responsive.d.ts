import MediaQuery from 'react-responsive';
declare const Responsive: {
    Default: (props: React.ComponentProps<typeof MediaQuery>) => import("react/jsx-runtime").JSX.Element;
    Tablet: (props: React.ComponentProps<typeof MediaQuery>) => import("react/jsx-runtime").JSX.Element;
    Desktop: (props: React.ComponentProps<typeof MediaQuery>) => import("react/jsx-runtime").JSX.Element;
};
export declare const TABLET_BREAK_POINT = 576;
export declare const DESKTOP_BREAK_POINT = 992;
export declare const BREAK_POINT = 992;
export default Responsive;
