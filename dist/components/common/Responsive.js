var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import MediaQuery from 'react-responsive';
var Responsive = {
    Default: function (props) { return (_jsx(MediaQuery, __assign({}, props, { maxWidth: TABLET_BREAK_POINT - 1 }))); },
    Tablet: function (props) { return (_jsx(MediaQuery, __assign({}, props, { minWidth: TABLET_BREAK_POINT, maxWidth: DESKTOP_BREAK_POINT - 1 }))); },
    Desktop: function (props) { return _jsx(MediaQuery, __assign({}, props, { minWidth: DESKTOP_BREAK_POINT })); },
};
export var TABLET_BREAK_POINT = 576;
export var DESKTOP_BREAK_POINT = 992;
export var BREAK_POINT = 992;
export default Responsive;
