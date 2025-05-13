const f = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let a = 0, r;
  for (; a < n; )
    r = a + t, yield e.slice(a, r), a = r;
}, w = async function* (e, t) {
  for await (const n of b(e))
    yield* f(n, t);
}, b = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: a } = await t.read();
      if (n)
        break;
      yield a;
    }
  } finally {
    await t.cancel();
  }
}, h = (e, t, n, a) => {
  const r = w(e, t);
  let d = 0, o, c = (l) => {
    o || (o = !0, a && a(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: i, value: y } = await r.next();
        if (i) {
          c(), l.close();
          return;
        }
        let s = y.byteLength;
        if (n) {
          let u = d += s;
          n(u);
        }
        l.enqueue(new Uint8Array(y));
      } catch (i) {
        throw c(i), i;
      }
    },
    cancel(l) {
      return c(l), r.return();
    }
  }, {
    highWaterMark: 2
  });
};
export {
  w as readBytes,
  f as streamChunk,
  h as trackStream
};
//# sourceMappingURL=index.es218.js.map
