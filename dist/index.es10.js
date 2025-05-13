class o extends Error {
  constructor(r, s, t) {
    super(s), this.code = r, this.result = t;
  }
}
class c extends o {
  constructor(r, s) {
    super("E_INPUT", r, s);
  }
}
class E extends o {
  constructor(r, s) {
    super("E_SESSION", r, s);
  }
}
class n extends o {
  constructor(r, s) {
    super("E_NO_MODULE", r, s);
  }
}
class u extends o {
  constructor(r, s) {
    super("E_SEND_EMAIL", r, s);
  }
}
class d extends o {
  constructor(r, s) {
    super("E_PASSWORD", r, s);
  }
}
class _ extends o {
  constructor(r, s) {
    super("E_NO_MEMBER", r, s);
  }
}
class a extends o {
  constructor(r, s) {
    super("E_BIND_DEVICE", r, s);
  }
}
class l extends o {
  constructor(r, s) {
    super("E_LOGIN_DEVICE", r, s);
  }
}
export {
  o as BackendServerError,
  a as BindDeviceError,
  c as InputError,
  l as LoginDeviceError,
  _ as NoMemberError,
  n as NoModuleError,
  d as PasswordError,
  u as SendEmailError,
  E as SessionError
};
//# sourceMappingURL=index.es10.js.map
