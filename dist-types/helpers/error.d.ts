export declare class BackendServerError extends Error {
    readonly code: string;
    readonly result: any;
    constructor(code: string, message: string, result: string);
}
export declare class InputError extends BackendServerError {
    constructor(message: string, result: string);
}
export declare class SessionError extends BackendServerError {
    constructor(message: string, result: string);
}
export declare class NoModuleError extends BackendServerError {
    constructor(message: string, result: string);
}
export declare class SendEmailError extends BackendServerError {
    constructor(message: string, result: string);
}
export declare class PasswordError extends BackendServerError {
    constructor(message: string, result: string);
}
export declare class NoMemberError extends BackendServerError {
    constructor(message: string, result: string);
}
export declare class BindDeviceError extends BackendServerError {
    constructor(message: string, result: string);
}
export declare class LoginDeviceError extends BackendServerError {
    constructor(message: string, result: string);
}
