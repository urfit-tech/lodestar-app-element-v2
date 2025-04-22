var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BackendServerError = /** @class */ (function (_super) {
    __extends(BackendServerError, _super);
    function BackendServerError(code, message, result) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.result = result;
        return _this;
    }
    return BackendServerError;
}(Error));
export { BackendServerError };
var InputError = /** @class */ (function (_super) {
    __extends(InputError, _super);
    function InputError(message, result) {
        return _super.call(this, 'E_INPUT', message, result) || this;
    }
    return InputError;
}(BackendServerError));
export { InputError };
var SessionError = /** @class */ (function (_super) {
    __extends(SessionError, _super);
    function SessionError(message, result) {
        return _super.call(this, 'E_SESSION', message, result) || this;
    }
    return SessionError;
}(BackendServerError));
export { SessionError };
var NoModuleError = /** @class */ (function (_super) {
    __extends(NoModuleError, _super);
    function NoModuleError(message, result) {
        return _super.call(this, 'E_NO_MODULE', message, result) || this;
    }
    return NoModuleError;
}(BackendServerError));
export { NoModuleError };
var SendEmailError = /** @class */ (function (_super) {
    __extends(SendEmailError, _super);
    function SendEmailError(message, result) {
        return _super.call(this, 'E_SEND_EMAIL', message, result) || this;
    }
    return SendEmailError;
}(BackendServerError));
export { SendEmailError };
var PasswordError = /** @class */ (function (_super) {
    __extends(PasswordError, _super);
    function PasswordError(message, result) {
        return _super.call(this, 'E_PASSWORD', message, result) || this;
    }
    return PasswordError;
}(BackendServerError));
export { PasswordError };
var NoMemberError = /** @class */ (function (_super) {
    __extends(NoMemberError, _super);
    function NoMemberError(message, result) {
        return _super.call(this, 'E_NO_MEMBER', message, result) || this;
    }
    return NoMemberError;
}(BackendServerError));
export { NoMemberError };
var BindDeviceError = /** @class */ (function (_super) {
    __extends(BindDeviceError, _super);
    function BindDeviceError(message, result) {
        return _super.call(this, 'E_BIND_DEVICE', message, result) || this;
    }
    return BindDeviceError;
}(BackendServerError));
export { BindDeviceError };
var LoginDeviceError = /** @class */ (function (_super) {
    __extends(LoginDeviceError, _super);
    function LoginDeviceError(message, result) {
        return _super.call(this, 'E_LOGIN_DEVICE', message, result) || this;
    }
    return LoginDeviceError;
}(BackendServerError));
export { LoginDeviceError };
