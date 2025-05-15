var a = function(e, o, t) {
  var r = new Error(t);
  throw r.name = "ServerError", r.response = e, r.statusCode = e.status, r.result = o, r;
};
export {
  a as throwServerError
};
//# sourceMappingURL=index.es194.js.map
