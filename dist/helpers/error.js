export class BackendServerError extends Error {
    constructor(code, message, result) {
        super(message);
        this.code = code;
        this.result = result;
    }
}
export class InputError extends BackendServerError {
    constructor(message, result) {
        super('E_INPUT', message, result);
    }
}
export class SessionError extends BackendServerError {
    constructor(message, result) {
        super('E_SESSION', message, result);
    }
}
export class NoModuleError extends BackendServerError {
    constructor(message, result) {
        super('E_NO_MODULE', message, result);
    }
}
export class SendEmailError extends BackendServerError {
    constructor(message, result) {
        super('E_SEND_EMAIL', message, result);
    }
}
export class PasswordError extends BackendServerError {
    constructor(message, result) {
        super('E_PASSWORD', message, result);
    }
}
export class NoMemberError extends BackendServerError {
    constructor(message, result) {
        super('E_NO_MEMBER', message, result);
    }
}
export class BindDeviceError extends BackendServerError {
    constructor(message, result) {
        super('E_BIND_DEVICE', message, result);
    }
}
export class LoginDeviceError extends BackendServerError {
    constructor(message, result) {
        super('E_LOGIN_DEVICE', message, result);
    }
}
