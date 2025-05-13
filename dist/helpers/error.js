"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDeviceError = exports.BindDeviceError = exports.NoMemberError = exports.PasswordError = exports.SendEmailError = exports.NoModuleError = exports.SessionError = exports.InputError = exports.BackendServerError = void 0;
class BackendServerError extends Error {
    constructor(code, message, result) {
        super(message);
        this.code = code;
        this.result = result;
    }
}
exports.BackendServerError = BackendServerError;
class InputError extends BackendServerError {
    constructor(message, result) {
        super('E_INPUT', message, result);
    }
}
exports.InputError = InputError;
class SessionError extends BackendServerError {
    constructor(message, result) {
        super('E_SESSION', message, result);
    }
}
exports.SessionError = SessionError;
class NoModuleError extends BackendServerError {
    constructor(message, result) {
        super('E_NO_MODULE', message, result);
    }
}
exports.NoModuleError = NoModuleError;
class SendEmailError extends BackendServerError {
    constructor(message, result) {
        super('E_SEND_EMAIL', message, result);
    }
}
exports.SendEmailError = SendEmailError;
class PasswordError extends BackendServerError {
    constructor(message, result) {
        super('E_PASSWORD', message, result);
    }
}
exports.PasswordError = PasswordError;
class NoMemberError extends BackendServerError {
    constructor(message, result) {
        super('E_NO_MEMBER', message, result);
    }
}
exports.NoMemberError = NoMemberError;
class BindDeviceError extends BackendServerError {
    constructor(message, result) {
        super('E_BIND_DEVICE', message, result);
    }
}
exports.BindDeviceError = BindDeviceError;
class LoginDeviceError extends BackendServerError {
    constructor(message, result) {
        super('E_LOGIN_DEVICE', message, result);
    }
}
exports.LoginDeviceError = LoginDeviceError;
