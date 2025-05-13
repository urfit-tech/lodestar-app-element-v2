"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BREAK_POINT = exports.DESKTOP_BREAK_POINT = exports.TABLET_BREAK_POINT = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_responsive_1 = __importDefault(require("react-responsive"));
const Responsive = {
    Default: (props) => ((0, jsx_runtime_1.jsx)(react_responsive_1.default, { ...props, maxWidth: exports.TABLET_BREAK_POINT - 1 })),
    Tablet: (props) => ((0, jsx_runtime_1.jsx)(react_responsive_1.default, { ...props, minWidth: exports.TABLET_BREAK_POINT, maxWidth: exports.DESKTOP_BREAK_POINT - 1 })),
    Desktop: (props) => (0, jsx_runtime_1.jsx)(react_responsive_1.default, { ...props, minWidth: exports.DESKTOP_BREAK_POINT }),
};
exports.TABLET_BREAK_POINT = 576;
exports.DESKTOP_BREAK_POINT = 992;
exports.BREAK_POINT = 992;
exports.default = Responsive;
