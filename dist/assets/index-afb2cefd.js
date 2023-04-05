function vd(e, t) {
   for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
         for (const o in r)
            if (o !== "default" && !(o in e)) {
               const l = Object.getOwnPropertyDescriptor(r, o);
               l &&
                  Object.defineProperty(
                     e,
                     o,
                     l.get ? l : { enumerable: !0, get: () => r[o] }
                  );
            }
      }
   }
   return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
   );
}
(function () {
   const t = document.createElement("link").relList;
   if (t && t.supports && t.supports("modulepreload")) return;
   for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
   new MutationObserver((o) => {
      for (const l of o)
         if (l.type === "childList")
            for (const i of l.addedNodes)
               i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
   }).observe(document, { childList: !0, subtree: !0 });
   function n(o) {
      const l = {};
      return (
         o.integrity && (l.integrity = o.integrity),
         o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
         o.crossOrigin === "use-credentials"
            ? (l.credentials = "include")
            : o.crossOrigin === "anonymous"
            ? (l.credentials = "omit")
            : (l.credentials = "same-origin"),
         l
      );
   }
   function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const l = n(o);
      fetch(o.href, l);
   }
})();
function wd(e) {
   return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
}
var zo = {},
   Sd = {
      get exports() {
         return zo;
      },
      set exports(e) {
         zo = e;
      },
   },
   rl = {},
   B = {},
   kd = {
      get exports() {
         return B;
      },
      set exports(e) {
         B = e;
      },
   },
   L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dr = Symbol.for("react.element"),
   xd = Symbol.for("react.portal"),
   Cd = Symbol.for("react.fragment"),
   Ed = Symbol.for("react.strict_mode"),
   _d = Symbol.for("react.profiler"),
   Pd = Symbol.for("react.provider"),
   Td = Symbol.for("react.context"),
   Od = Symbol.for("react.forward_ref"),
   Nd = Symbol.for("react.suspense"),
   zd = Symbol.for("react.memo"),
   Rd = Symbol.for("react.lazy"),
   ss = Symbol.iterator;
function $d(e) {
   return e === null || typeof e != "object"
      ? null
      : ((e = (ss && e[ss]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
}
var ja = {
      isMounted: function () {
         return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
   },
   Da = Object.assign,
   Ba = {};
function Hn(e, t, n) {
   (this.props = e),
      (this.context = t),
      (this.refs = Ba),
      (this.updater = n || ja);
}
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function (e, t) {
   if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
         "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
   this.updater.enqueueSetState(this, e, t, "setState");
};
Hn.prototype.forceUpdate = function (e) {
   this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ua() {}
Ua.prototype = Hn.prototype;
function ru(e, t, n) {
   (this.props = e),
      (this.context = t),
      (this.refs = Ba),
      (this.updater = n || ja);
}
var ou = (ru.prototype = new Ua());
ou.constructor = ru;
Da(ou, Hn.prototype);
ou.isPureReactComponent = !0;
var as = Array.isArray,
   Wa = Object.prototype.hasOwnProperty,
   lu = { current: null },
   Ha = { key: !0, ref: !0, __self: !0, __source: !0 };
function Va(e, t, n) {
   var r,
      o = {},
      l = null,
      i = null;
   if (t != null)
      for (r in (t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (l = "" + t.key),
      t))
         Wa.call(t, r) && !Ha.hasOwnProperty(r) && (o[r] = t[r]);
   var u = arguments.length - 2;
   if (u === 1) o.children = n;
   else if (1 < u) {
      for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
      o.children = s;
   }
   if (e && e.defaultProps)
      for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
   return {
      $$typeof: Dr,
      type: e,
      key: l,
      ref: i,
      props: o,
      _owner: lu.current,
   };
}
function Ld(e, t) {
   return {
      $$typeof: Dr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
   };
}
function iu(e) {
   return typeof e == "object" && e !== null && e.$$typeof === Dr;
}
function Md(e) {
   var t = { "=": "=0", ":": "=2" };
   return (
      "$" +
      e.replace(/[=:]/g, function (n) {
         return t[n];
      })
   );
}
var cs = /\/+/g;
function Rl(e, t) {
   return typeof e == "object" && e !== null && e.key != null
      ? Md("" + e.key)
      : t.toString(36);
}
function mo(e, t, n, r, o) {
   var l = typeof e;
   (l === "undefined" || l === "boolean") && (e = null);
   var i = !1;
   if (e === null) i = !0;
   else
      switch (l) {
         case "string":
         case "number":
            i = !0;
            break;
         case "object":
            switch (e.$$typeof) {
               case Dr:
               case xd:
                  i = !0;
            }
      }
   if (i)
      return (
         (i = e),
         (o = o(i)),
         (e = r === "" ? "." + Rl(i, 0) : r),
         as(o)
            ? ((n = ""),
              e != null && (n = e.replace(cs, "$&/") + "/"),
              mo(o, t, n, "", function (a) {
                 return a;
              }))
            : o != null &&
              (iu(o) &&
                 (o = Ld(
                    o,
                    n +
                       (!o.key || (i && i.key === o.key)
                          ? ""
                          : ("" + o.key).replace(cs, "$&/") + "/") +
                       e
                 )),
              t.push(o)),
         1
      );
   if (((i = 0), (r = r === "" ? "." : r + ":"), as(e)))
      for (var u = 0; u < e.length; u++) {
         l = e[u];
         var s = r + Rl(l, u);
         i += mo(l, t, n, s, o);
      }
   else if (((s = $d(e)), typeof s == "function"))
      for (e = s.call(e), u = 0; !(l = e.next()).done; )
         (l = l.value), (s = r + Rl(l, u++)), (i += mo(l, t, n, s, o));
   else if (l === "object")
      throw (
         ((t = String(e)),
         Error(
            "Objects are not valid as a React child (found: " +
               (t === "[object Object]"
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
               "). If you meant to render a collection of children, use an array instead."
         ))
      );
   return i;
}
function Xr(e, t, n) {
   if (e == null) return e;
   var r = [],
      o = 0;
   return (
      mo(e, r, "", "", function (l) {
         return t.call(n, l, o++);
      }),
      r
   );
}
function Id(e) {
   if (e._status === -1) {
      var t = e._result;
      (t = t()),
         t.then(
            function (n) {
               (e._status === 0 || e._status === -1) &&
                  ((e._status = 1), (e._result = n));
            },
            function (n) {
               (e._status === 0 || e._status === -1) &&
                  ((e._status = 2), (e._result = n));
            }
         ),
         e._status === -1 && ((e._status = 0), (e._result = t));
   }
   if (e._status === 1) return e._result.default;
   throw e._result;
}
var we = { current: null },
   ho = { transition: null },
   Ad = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: ho,
      ReactCurrentOwner: lu,
   };
L.Children = {
   map: Xr,
   forEach: function (e, t, n) {
      Xr(
         e,
         function () {
            t.apply(this, arguments);
         },
         n
      );
   },
   count: function (e) {
      var t = 0;
      return (
         Xr(e, function () {
            t++;
         }),
         t
      );
   },
   toArray: function (e) {
      return (
         Xr(e, function (t) {
            return t;
         }) || []
      );
   },
   only: function (e) {
      if (!iu(e))
         throw Error(
            "React.Children.only expected to receive a single React element child."
         );
      return e;
   },
};
L.Component = Hn;
L.Fragment = Cd;
L.Profiler = _d;
L.PureComponent = ru;
L.StrictMode = Ed;
L.Suspense = Nd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
L.cloneElement = function (e, t, n) {
   if (e == null)
      throw Error(
         "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
      );
   var r = Da({}, e.props),
      o = e.key,
      l = e.ref,
      i = e._owner;
   if (t != null) {
      if (
         (t.ref !== void 0 && ((l = t.ref), (i = lu.current)),
         t.key !== void 0 && (o = "" + t.key),
         e.type && e.type.defaultProps)
      )
         var u = e.type.defaultProps;
      for (s in t)
         Wa.call(t, s) &&
            !Ha.hasOwnProperty(s) &&
            (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
   }
   var s = arguments.length - 2;
   if (s === 1) r.children = n;
   else if (1 < s) {
      u = Array(s);
      for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
      r.children = u;
   }
   return { $$typeof: Dr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
L.createContext = function (e) {
   return (
      (e = {
         $$typeof: Td,
         _currentValue: e,
         _currentValue2: e,
         _threadCount: 0,
         Provider: null,
         Consumer: null,
         _defaultValue: null,
         _globalName: null,
      }),
      (e.Provider = { $$typeof: Pd, _context: e }),
      (e.Consumer = e)
   );
};
L.createElement = Va;
L.createFactory = function (e) {
   var t = Va.bind(null, e);
   return (t.type = e), t;
};
L.createRef = function () {
   return { current: null };
};
L.forwardRef = function (e) {
   return { $$typeof: Od, render: e };
};
L.isValidElement = iu;
L.lazy = function (e) {
   return { $$typeof: Rd, _payload: { _status: -1, _result: e }, _init: Id };
};
L.memo = function (e, t) {
   return { $$typeof: zd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
   var t = ho.transition;
   ho.transition = {};
   try {
      e();
   } finally {
      ho.transition = t;
   }
};
L.unstable_act = function () {
   throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
   return we.current.useCallback(e, t);
};
L.useContext = function (e) {
   return we.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
   return we.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
   return we.current.useEffect(e, t);
};
L.useId = function () {
   return we.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
   return we.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
   return we.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
   return we.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
   return we.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
   return we.current.useReducer(e, t, n);
};
L.useRef = function (e) {
   return we.current.useRef(e);
};
L.useState = function (e) {
   return we.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
   return we.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
   return we.current.useTransition();
};
L.version = "18.2.0";
(function (e) {
   e.exports = L;
})(kd);
const Ka = wd(B),
   fs = vd({ __proto__: null, default: Ka }, [B]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd = B,
   jd = Symbol.for("react.element"),
   Dd = Symbol.for("react.fragment"),
   Bd = Object.prototype.hasOwnProperty,
   Ud = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
   Wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qa(e, t, n) {
   var r,
      o = {},
      l = null,
      i = null;
   n !== void 0 && (l = "" + n),
      t.key !== void 0 && (l = "" + t.key),
      t.ref !== void 0 && (i = t.ref);
   for (r in t) Bd.call(t, r) && !Wd.hasOwnProperty(r) && (o[r] = t[r]);
   if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
   return {
      $$typeof: jd,
      type: e,
      key: l,
      ref: i,
      props: o,
      _owner: Ud.current,
   };
}
rl.Fragment = Dd;
rl.jsx = Qa;
rl.jsxs = Qa;
(function (e) {
   e.exports = rl;
})(Sd);
const $ = zo.jsx,
   Ve = zo.jsxs;
var li = {},
   ii = {},
   Hd = {
      get exports() {
         return ii;
      },
      set exports(e) {
         ii = e;
      },
   },
   Le = {},
   ui = {},
   Vd = {
      get exports() {
         return ui;
      },
      set exports(e) {
         ui = e;
      },
   },
   Ga = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
   function t(P, z) {
      var R = P.length;
      P.push(z);
      e: for (; 0 < R; ) {
         var q = (R - 1) >>> 1,
            le = P[q];
         if (0 < o(le, z)) (P[q] = z), (P[R] = le), (R = q);
         else break e;
      }
   }
   function n(P) {
      return P.length === 0 ? null : P[0];
   }
   function r(P) {
      if (P.length === 0) return null;
      var z = P[0],
         R = P.pop();
      if (R !== z) {
         P[0] = R;
         e: for (var q = 0, le = P.length, Gr = le >>> 1; q < Gr; ) {
            var Wt = 2 * (q + 1) - 1,
               zl = P[Wt],
               Ht = Wt + 1,
               Yr = P[Ht];
            if (0 > o(zl, R))
               Ht < le && 0 > o(Yr, zl)
                  ? ((P[q] = Yr), (P[Ht] = R), (q = Ht))
                  : ((P[q] = zl), (P[Wt] = R), (q = Wt));
            else if (Ht < le && 0 > o(Yr, R))
               (P[q] = Yr), (P[Ht] = R), (q = Ht);
            else break e;
         }
      }
      return z;
   }
   function o(P, z) {
      var R = P.sortIndex - z.sortIndex;
      return R !== 0 ? R : P.id - z.id;
   }
   if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function () {
         return l.now();
      };
   } else {
      var i = Date,
         u = i.now();
      e.unstable_now = function () {
         return i.now() - u;
      };
   }
   var s = [],
      a = [],
      h = 1,
      m = null,
      p = 3,
      v = !1,
      y = !1,
      g = !1,
      E = typeof setTimeout == "function" ? setTimeout : null,
      f = typeof clearTimeout == "function" ? clearTimeout : null,
      c = typeof setImmediate < "u" ? setImmediate : null;
   typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
   function d(P) {
      for (var z = n(a); z !== null; ) {
         if (z.callback === null) r(a);
         else if (z.startTime <= P)
            r(a), (z.sortIndex = z.expirationTime), t(s, z);
         else break;
         z = n(a);
      }
   }
   function w(P) {
      if (((g = !1), d(P), !y))
         if (n(s) !== null) (y = !0), Ol(x);
         else {
            var z = n(a);
            z !== null && Nl(w, z.startTime - P);
         }
   }
   function x(P, z) {
      (y = !1), g && ((g = !1), f(T), (T = -1)), (v = !0);
      var R = p;
      try {
         for (
            d(z), m = n(s);
            m !== null && (!(m.expirationTime > z) || (P && !ne()));

         ) {
            var q = m.callback;
            if (typeof q == "function") {
               (m.callback = null), (p = m.priorityLevel);
               var le = q(m.expirationTime <= z);
               (z = e.unstable_now()),
                  typeof le == "function"
                     ? (m.callback = le)
                     : m === n(s) && r(s),
                  d(z);
            } else r(s);
            m = n(s);
         }
         if (m !== null) var Gr = !0;
         else {
            var Wt = n(a);
            Wt !== null && Nl(w, Wt.startTime - z), (Gr = !1);
         }
         return Gr;
      } finally {
         (m = null), (p = R), (v = !1);
      }
   }
   var C = !1,
      k = null,
      T = -1,
      N = 5,
      O = -1;
   function ne() {
      return !(e.unstable_now() - O < N);
   }
   function Ze() {
      if (k !== null) {
         var P = e.unstable_now();
         O = P;
         var z = !0;
         try {
            z = k(!0, P);
         } finally {
            z ? Ut() : ((C = !1), (k = null));
         }
      } else C = !1;
   }
   var Ut;
   if (typeof c == "function")
      Ut = function () {
         c(Ze);
      };
   else if (typeof MessageChannel < "u") {
      var on = new MessageChannel(),
         yd = on.port2;
      (on.port1.onmessage = Ze),
         (Ut = function () {
            yd.postMessage(null);
         });
   } else
      Ut = function () {
         E(Ze, 0);
      };
   function Ol(P) {
      (k = P), C || ((C = !0), Ut());
   }
   function Nl(P, z) {
      T = E(function () {
         P(e.unstable_now());
      }, z);
   }
   (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (P) {
         P.callback = null;
      }),
      (e.unstable_continueExecution = function () {
         y || v || ((y = !0), Ol(x));
      }),
      (e.unstable_forceFrameRate = function (P) {
         0 > P || 125 < P
            ? console.error(
                 "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (N = 0 < P ? Math.floor(1e3 / P) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
         return p;
      }),
      (e.unstable_getFirstCallbackNode = function () {
         return n(s);
      }),
      (e.unstable_next = function (P) {
         switch (p) {
            case 1:
            case 2:
            case 3:
               var z = 3;
               break;
            default:
               z = p;
         }
         var R = p;
         p = z;
         try {
            return P();
         } finally {
            p = R;
         }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (P, z) {
         switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
               break;
            default:
               P = 3;
         }
         var R = p;
         p = P;
         try {
            return z();
         } finally {
            p = R;
         }
      }),
      (e.unstable_scheduleCallback = function (P, z, R) {
         var q = e.unstable_now();
         switch (
            (typeof R == "object" && R !== null
               ? ((R = R.delay),
                 (R = typeof R == "number" && 0 < R ? q + R : q))
               : (R = q),
            P)
         ) {
            case 1:
               var le = -1;
               break;
            case 2:
               le = 250;
               break;
            case 5:
               le = 1073741823;
               break;
            case 4:
               le = 1e4;
               break;
            default:
               le = 5e3;
         }
         return (
            (le = R + le),
            (P = {
               id: h++,
               callback: z,
               priorityLevel: P,
               startTime: R,
               expirationTime: le,
               sortIndex: -1,
            }),
            R > q
               ? ((P.sortIndex = R),
                 t(a, P),
                 n(s) === null &&
                    P === n(a) &&
                    (g ? (f(T), (T = -1)) : (g = !0), Nl(w, R - q)))
               : ((P.sortIndex = le), t(s, P), y || v || ((y = !0), Ol(x))),
            P
         );
      }),
      (e.unstable_shouldYield = ne),
      (e.unstable_wrapCallback = function (P) {
         var z = p;
         return function () {
            var R = p;
            p = z;
            try {
               return P.apply(this, arguments);
            } finally {
               p = R;
            }
         };
      });
})(Ga);
(function (e) {
   e.exports = Ga;
})(Vd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ya = B,
   $e = ui;
function S(e) {
   for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
         n = 1;
      n < arguments.length;
      n++
   )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
   return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
   );
}
var Xa = new Set(),
   vr = {};
function nn(e, t) {
   Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
   for (vr[e] = t, e = 0; e < t.length; e++) Xa.add(t[e]);
}
var ht = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
   ),
   si = Object.prototype.hasOwnProperty,
   Kd =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
   ds = {},
   ps = {};
function Qd(e) {
   return si.call(ps, e)
      ? !0
      : si.call(ds, e)
      ? !1
      : Kd.test(e)
      ? (ps[e] = !0)
      : ((ds[e] = !0), !1);
}
function Gd(e, t, n, r) {
   if (n !== null && n.type === 0) return !1;
   switch (typeof t) {
      case "function":
      case "symbol":
         return !0;
      case "boolean":
         return r
            ? !1
            : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
         return !1;
   }
}
function Yd(e, t, n, r) {
   if (t === null || typeof t > "u" || Gd(e, t, n, r)) return !0;
   if (r) return !1;
   if (n !== null)
      switch (n.type) {
         case 3:
            return !t;
         case 4:
            return t === !1;
         case 5:
            return isNaN(t);
         case 6:
            return isNaN(t) || 1 > t;
      }
   return !1;
}
function Se(e, t, n, r, o, l, i) {
   (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = i);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
   .split(" ")
   .forEach(function (e) {
      fe[e] = new Se(e, 0, !1, e, null, !1, !1);
   });
[
   ["acceptCharset", "accept-charset"],
   ["className", "class"],
   ["htmlFor", "for"],
   ["httpEquiv", "http-equiv"],
].forEach(function (e) {
   var t = e[0];
   fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
   fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
   "autoReverse",
   "externalResourcesRequired",
   "focusable",
   "preserveAlpha",
].forEach(function (e) {
   fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
   .split(" ")
   .forEach(function (e) {
      fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
   });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
   fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
   fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
   fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
   fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uu = /[\-:]([a-z])/g;
function su(e) {
   return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
   .split(" ")
   .forEach(function (e) {
      var t = e.replace(uu, su);
      fe[t] = new Se(t, 1, !1, e, null, !1, !1);
   });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
   .split(" ")
   .forEach(function (e) {
      var t = e.replace(uu, su);
      fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
   });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
   var t = e.replace(uu, su);
   fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
   fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
   "xlinkHref",
   1,
   !1,
   "xlink:href",
   "http://www.w3.org/1999/xlink",
   !0,
   !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
   fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function au(e, t, n, r) {
   var o = fe.hasOwnProperty(t) ? fe[t] : null;
   (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Yd(t, n, o, r) && (n = null),
      r || o === null
         ? Qd(t) &&
           (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
         : o.mustUseProperty
         ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
         : ((t = o.attributeName),
           (r = o.attributeNamespace),
           n === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
   Zr = Symbol.for("react.element"),
   pn = Symbol.for("react.portal"),
   mn = Symbol.for("react.fragment"),
   cu = Symbol.for("react.strict_mode"),
   ai = Symbol.for("react.profiler"),
   Za = Symbol.for("react.provider"),
   Ja = Symbol.for("react.context"),
   fu = Symbol.for("react.forward_ref"),
   ci = Symbol.for("react.suspense"),
   fi = Symbol.for("react.suspense_list"),
   du = Symbol.for("react.memo"),
   xt = Symbol.for("react.lazy"),
   qa = Symbol.for("react.offscreen"),
   ms = Symbol.iterator;
function Gn(e) {
   return e === null || typeof e != "object"
      ? null
      : ((e = (ms && e[ms]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
}
var Y = Object.assign,
   $l;
function or(e) {
   if ($l === void 0)
      try {
         throw Error();
      } catch (n) {
         var t = n.stack.trim().match(/\n( *(at )?)/);
         $l = (t && t[1]) || "";
      }
   return (
      `
` +
      $l +
      e
   );
}
var Ll = !1;
function Ml(e, t) {
   if (!e || Ll) return "";
   Ll = !0;
   var n = Error.prepareStackTrace;
   Error.prepareStackTrace = void 0;
   try {
      if (t)
         if (
            ((t = function () {
               throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
               set: function () {
                  throw Error();
               },
            }),
            typeof Reflect == "object" && Reflect.construct)
         ) {
            try {
               Reflect.construct(t, []);
            } catch (a) {
               var r = a;
            }
            Reflect.construct(e, [], t);
         } else {
            try {
               t.call();
            } catch (a) {
               r = a;
            }
            e.call(t.prototype);
         }
      else {
         try {
            throw Error();
         } catch (a) {
            r = a;
         }
         e();
      }
   } catch (a) {
      if (a && r && typeof a.stack == "string") {
         for (
            var o = a.stack.split(`
`),
               l = r.stack.split(`
`),
               i = o.length - 1,
               u = l.length - 1;
            1 <= i && 0 <= u && o[i] !== l[u];

         )
            u--;
         for (; 1 <= i && 0 <= u; i--, u--)
            if (o[i] !== l[u]) {
               if (i !== 1 || u !== 1)
                  do
                     if ((i--, u--, 0 > u || o[i] !== l[u])) {
                        var s =
                           `
` + o[i].replace(" at new ", " at ");
                        return (
                           e.displayName &&
                              s.includes("<anonymous>") &&
                              (s = s.replace("<anonymous>", e.displayName)),
                           s
                        );
                     }
                  while (1 <= i && 0 <= u);
               break;
            }
      }
   } finally {
      (Ll = !1), (Error.prepareStackTrace = n);
   }
   return (e = e ? e.displayName || e.name : "") ? or(e) : "";
}
function Xd(e) {
   switch (e.tag) {
      case 5:
         return or(e.type);
      case 16:
         return or("Lazy");
      case 13:
         return or("Suspense");
      case 19:
         return or("SuspenseList");
      case 0:
      case 2:
      case 15:
         return (e = Ml(e.type, !1)), e;
      case 11:
         return (e = Ml(e.type.render, !1)), e;
      case 1:
         return (e = Ml(e.type, !0)), e;
      default:
         return "";
   }
}
function di(e) {
   if (e == null) return null;
   if (typeof e == "function") return e.displayName || e.name || null;
   if (typeof e == "string") return e;
   switch (e) {
      case mn:
         return "Fragment";
      case pn:
         return "Portal";
      case ai:
         return "Profiler";
      case cu:
         return "StrictMode";
      case ci:
         return "Suspense";
      case fi:
         return "SuspenseList";
   }
   if (typeof e == "object")
      switch (e.$$typeof) {
         case Ja:
            return (e.displayName || "Context") + ".Consumer";
         case Za:
            return (e._context.displayName || "Context") + ".Provider";
         case fu:
            var t = e.render;
            return (
               (e = e.displayName),
               e ||
                  ((e = t.displayName || t.name || ""),
                  (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
               e
            );
         case du:
            return (
               (t = e.displayName || null),
               t !== null ? t : di(e.type) || "Memo"
            );
         case xt:
            (t = e._payload), (e = e._init);
            try {
               return di(e(t));
            } catch {}
      }
   return null;
}
function Zd(e) {
   var t = e.type;
   switch (e.tag) {
      case 24:
         return "Cache";
      case 9:
         return (t.displayName || "Context") + ".Consumer";
      case 10:
         return (t._context.displayName || "Context") + ".Provider";
      case 18:
         return "DehydratedFragment";
      case 11:
         return (
            (e = t.render),
            (e = e.displayName || e.name || ""),
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
         );
      case 7:
         return "Fragment";
      case 5:
         return t;
      case 4:
         return "Portal";
      case 3:
         return "Root";
      case 6:
         return "Text";
      case 16:
         return di(t);
      case 8:
         return t === cu ? "StrictMode" : "Mode";
      case 22:
         return "Offscreen";
      case 12:
         return "Profiler";
      case 21:
         return "Scope";
      case 13:
         return "Suspense";
      case 19:
         return "SuspenseList";
      case 25:
         return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
         if (typeof t == "function") return t.displayName || t.name || null;
         if (typeof t == "string") return t;
   }
   return null;
}
function At(e) {
   switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
         return e;
      case "object":
         return e;
      default:
         return "";
   }
}
function ba(e) {
   var t = e.type;
   return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
   );
}
function Jd(e) {
   var t = ba(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
   if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
   ) {
      var o = n.get,
         l = n.set;
      return (
         Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
               return o.call(this);
            },
            set: function (i) {
               (r = "" + i), l.call(this, i);
            },
         }),
         Object.defineProperty(e, t, { enumerable: n.enumerable }),
         {
            getValue: function () {
               return r;
            },
            setValue: function (i) {
               r = "" + i;
            },
            stopTracking: function () {
               (e._valueTracker = null), delete e[t];
            },
         }
      );
   }
}
function Jr(e) {
   e._valueTracker || (e._valueTracker = Jd(e));
}
function ec(e) {
   if (!e) return !1;
   var t = e._valueTracker;
   if (!t) return !0;
   var n = t.getValue(),
      r = "";
   return (
      e && (r = ba(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
   );
}
function Ro(e) {
   if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
      return null;
   try {
      return e.activeElement || e.body;
   } catch {
      return e.body;
   }
}
function pi(e, t) {
   var n = t.checked;
   return Y({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
   });
}
function hs(e, t) {
   var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
   (n = At(t.value != null ? t.value : n)),
      (e._wrapperState = {
         initialChecked: r,
         initialValue: n,
         controlled:
            t.type === "checkbox" || t.type === "radio"
               ? t.checked != null
               : t.value != null,
      });
}
function tc(e, t) {
   (t = t.checked), t != null && au(e, "checked", t, !1);
}
function mi(e, t) {
   tc(e, t);
   var n = At(t.value),
      r = t.type;
   if (n != null)
      r === "number"
         ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
         : e.value !== "" + n && (e.value = "" + n);
   else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
   }
   t.hasOwnProperty("value")
      ? hi(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && hi(e, t.type, At(t.defaultValue)),
      t.checked == null &&
         t.defaultChecked != null &&
         (e.defaultChecked = !!t.defaultChecked);
}
function gs(e, t, n) {
   if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
         !(
            (r !== "submit" && r !== "reset") ||
            (t.value !== void 0 && t.value !== null)
         )
      )
         return;
      (t = "" + e._wrapperState.initialValue),
         n || t === e.value || (e.value = t),
         (e.defaultValue = t);
   }
   (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
}
function hi(e, t, n) {
   (t !== "number" || Ro(e.ownerDocument) !== e) &&
      (n == null
         ? (e.defaultValue = "" + e._wrapperState.initialValue)
         : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function _n(e, t, n, r) {
   if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
         (o = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0);
   } else {
      for (n = "" + At(n), t = null, o = 0; o < e.length; o++) {
         if (e[o].value === n) {
            (e[o].selected = !0), r && (e[o].defaultSelected = !0);
            return;
         }
         t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
   }
}
function gi(e, t) {
   if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
   return Y({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
   });
}
function ys(e, t) {
   var n = t.value;
   if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
         if (t != null) throw Error(S(92));
         if (lr(n)) {
            if (1 < n.length) throw Error(S(93));
            n = n[0];
         }
         t = n;
      }
      t == null && (t = ""), (n = t);
   }
   e._wrapperState = { initialValue: At(n) };
}
function nc(e, t) {
   var n = At(t.value),
      r = At(t.defaultValue);
   n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
}
function vs(e) {
   var t = e.textContent;
   t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
}
function rc(e) {
   switch (e) {
      case "svg":
         return "http://www.w3.org/2000/svg";
      case "math":
         return "http://www.w3.org/1998/Math/MathML";
      default:
         return "http://www.w3.org/1999/xhtml";
   }
}
function yi(e, t) {
   return e == null || e === "http://www.w3.org/1999/xhtml"
      ? rc(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var qr,
   oc = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
         ? function (t, n, r, o) {
              MSApp.execUnsafeLocalFunction(function () {
                 return e(t, n, r, o);
              });
           }
         : e;
   })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
         e.innerHTML = t;
      else {
         for (
            qr = qr || document.createElement("div"),
               qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
               t = qr.firstChild;
            e.firstChild;

         )
            e.removeChild(e.firstChild);
         for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
   });
function wr(e, t) {
   if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
         n.nodeValue = t;
         return;
      }
   }
   e.textContent = t;
}
var sr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
   },
   qd = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function (e) {
   qd.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sr[t] = sr[e]);
   });
});
function lc(e, t, n) {
   return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (sr.hasOwnProperty(e) && sr[e])
      ? ("" + t).trim()
      : t + "px";
}
function ic(e, t) {
   e = e.style;
   for (var n in t)
      if (t.hasOwnProperty(n)) {
         var r = n.indexOf("--") === 0,
            o = lc(n, t[n], r);
         n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : (e[n] = o);
      }
}
var bd = Y(
   { menuitem: !0 },
   {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
   }
);
function vi(e, t) {
   if (t) {
      if (bd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
         throw Error(S(137, e));
      if (t.dangerouslySetInnerHTML != null) {
         if (t.children != null) throw Error(S(60));
         if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
         )
            throw Error(S(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(S(62));
   }
}
function wi(e, t) {
   if (e.indexOf("-") === -1) return typeof t.is == "string";
   switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
         return !1;
      default:
         return !0;
   }
}
var Si = null;
function pu(e) {
   return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
   );
}
var ki = null,
   Pn = null,
   Tn = null;
function ws(e) {
   if ((e = Wr(e))) {
      if (typeof ki != "function") throw Error(S(280));
      var t = e.stateNode;
      t && ((t = sl(t)), ki(e.stateNode, e.type, t));
   }
}
function uc(e) {
   Pn ? (Tn ? Tn.push(e) : (Tn = [e])) : (Pn = e);
}
function sc() {
   if (Pn) {
      var e = Pn,
         t = Tn;
      if (((Tn = Pn = null), ws(e), t)) for (e = 0; e < t.length; e++) ws(t[e]);
   }
}
function ac(e, t) {
   return e(t);
}
function cc() {}
var Il = !1;
function fc(e, t, n) {
   if (Il) return e(t, n);
   Il = !0;
   try {
      return ac(e, t, n);
   } finally {
      (Il = !1), (Pn !== null || Tn !== null) && (cc(), sc());
   }
}
function Sr(e, t) {
   var n = e.stateNode;
   if (n === null) return null;
   var r = sl(n);
   if (r === null) return null;
   n = r[t];
   e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
         (r = !r.disabled) ||
            ((e = e.type),
            (r = !(
               e === "button" ||
               e === "input" ||
               e === "select" ||
               e === "textarea"
            ))),
            (e = !r);
         break e;
      default:
         e = !1;
   }
   if (e) return null;
   if (n && typeof n != "function") throw Error(S(231, t, typeof n));
   return n;
}
var xi = !1;
if (ht)
   try {
      var Yn = {};
      Object.defineProperty(Yn, "passive", {
         get: function () {
            xi = !0;
         },
      }),
         window.addEventListener("test", Yn, Yn),
         window.removeEventListener("test", Yn, Yn);
   } catch {
      xi = !1;
   }
function ep(e, t, n, r, o, l, i, u, s) {
   var a = Array.prototype.slice.call(arguments, 3);
   try {
      t.apply(n, a);
   } catch (h) {
      this.onError(h);
   }
}
var ar = !1,
   $o = null,
   Lo = !1,
   Ci = null,
   tp = {
      onError: function (e) {
         (ar = !0), ($o = e);
      },
   };
function np(e, t, n, r, o, l, i, u, s) {
   (ar = !1), ($o = null), ep.apply(tp, arguments);
}
function rp(e, t, n, r, o, l, i, u, s) {
   if ((np.apply(this, arguments), ar)) {
      if (ar) {
         var a = $o;
         (ar = !1), ($o = null);
      } else throw Error(S(198));
      Lo || ((Lo = !0), (Ci = a));
   }
}
function rn(e) {
   var t = e,
      n = e;
   if (e.alternate) for (; t.return; ) t = t.return;
   else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
   }
   return t.tag === 3 ? n : null;
}
function dc(e) {
   if (e.tag === 13) {
      var t = e.memoizedState;
      if (
         (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
         t !== null)
      )
         return t.dehydrated;
   }
   return null;
}
function Ss(e) {
   if (rn(e) !== e) throw Error(S(188));
}
function op(e) {
   var t = e.alternate;
   if (!t) {
      if (((t = rn(e)), t === null)) throw Error(S(188));
      return t !== e ? null : e;
   }
   for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var l = o.alternate;
      if (l === null) {
         if (((r = o.return), r !== null)) {
            n = r;
            continue;
         }
         break;
      }
      if (o.child === l.child) {
         for (l = o.child; l; ) {
            if (l === n) return Ss(o), e;
            if (l === r) return Ss(o), t;
            l = l.sibling;
         }
         throw Error(S(188));
      }
      if (n.return !== r.return) (n = o), (r = l);
      else {
         for (var i = !1, u = o.child; u; ) {
            if (u === n) {
               (i = !0), (n = o), (r = l);
               break;
            }
            if (u === r) {
               (i = !0), (r = o), (n = l);
               break;
            }
            u = u.sibling;
         }
         if (!i) {
            for (u = l.child; u; ) {
               if (u === n) {
                  (i = !0), (n = l), (r = o);
                  break;
               }
               if (u === r) {
                  (i = !0), (r = l), (n = o);
                  break;
               }
               u = u.sibling;
            }
            if (!i) throw Error(S(189));
         }
      }
      if (n.alternate !== r) throw Error(S(190));
   }
   if (n.tag !== 3) throw Error(S(188));
   return n.stateNode.current === n ? e : t;
}
function pc(e) {
   return (e = op(e)), e !== null ? mc(e) : null;
}
function mc(e) {
   if (e.tag === 5 || e.tag === 6) return e;
   for (e = e.child; e !== null; ) {
      var t = mc(e);
      if (t !== null) return t;
      e = e.sibling;
   }
   return null;
}
var hc = $e.unstable_scheduleCallback,
   ks = $e.unstable_cancelCallback,
   lp = $e.unstable_shouldYield,
   ip = $e.unstable_requestPaint,
   b = $e.unstable_now,
   up = $e.unstable_getCurrentPriorityLevel,
   mu = $e.unstable_ImmediatePriority,
   gc = $e.unstable_UserBlockingPriority,
   Mo = $e.unstable_NormalPriority,
   sp = $e.unstable_LowPriority,
   yc = $e.unstable_IdlePriority,
   ol = null,
   lt = null;
function ap(e) {
   if (lt && typeof lt.onCommitFiberRoot == "function")
      try {
         lt.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : dp,
   cp = Math.log,
   fp = Math.LN2;
function dp(e) {
   return (e >>>= 0), e === 0 ? 32 : (31 - ((cp(e) / fp) | 0)) | 0;
}
var br = 64,
   eo = 4194304;
function ir(e) {
   switch (e & -e) {
      case 1:
         return 1;
      case 2:
         return 2;
      case 4:
         return 4;
      case 8:
         return 8;
      case 16:
         return 16;
      case 32:
         return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
         return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
         return e & 130023424;
      case 134217728:
         return 134217728;
      case 268435456:
         return 268435456;
      case 536870912:
         return 536870912;
      case 1073741824:
         return 1073741824;
      default:
         return e;
   }
}
function Io(e, t) {
   var n = e.pendingLanes;
   if (n === 0) return 0;
   var r = 0,
      o = e.suspendedLanes,
      l = e.pingedLanes,
      i = n & 268435455;
   if (i !== 0) {
      var u = i & ~o;
      u !== 0 ? (r = ir(u)) : ((l &= i), l !== 0 && (r = ir(l)));
   } else (i = n & ~o), i !== 0 ? (r = ir(i)) : l !== 0 && (r = ir(l));
   if (r === 0) return 0;
   if (
      t !== 0 &&
      t !== r &&
      !(t & o) &&
      ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
   )
      return t;
   if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
         (n = 31 - Qe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
   return r;
}
function pp(e, t) {
   switch (e) {
      case 1:
      case 2:
      case 4:
         return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
         return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
         return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
         return -1;
      default:
         return -1;
   }
}
function mp(e, t) {
   for (
      var n = e.suspendedLanes,
         r = e.pingedLanes,
         o = e.expirationTimes,
         l = e.pendingLanes;
      0 < l;

   ) {
      var i = 31 - Qe(l),
         u = 1 << i,
         s = o[i];
      s === -1
         ? (!(u & n) || u & r) && (o[i] = pp(u, t))
         : s <= t && (e.expiredLanes |= u),
         (l &= ~u);
   }
}
function Ei(e) {
   return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
   );
}
function vc() {
   var e = br;
   return (br <<= 1), !(br & 4194240) && (br = 64), e;
}
function Al(e) {
   for (var t = [], n = 0; 31 > n; n++) t.push(e);
   return t;
}
function Br(e, t, n) {
   (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Qe(t)),
      (e[t] = n);
}
function hp(e, t) {
   var n = e.pendingLanes & ~t;
   (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
   var r = e.eventTimes;
   for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Qe(n),
         l = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
   }
}
function hu(e, t) {
   var n = (e.entangledLanes |= t);
   for (e = e.entanglements; n; ) {
      var r = 31 - Qe(n),
         o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
   }
}
var D = 0;
function wc(e) {
   return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sc,
   gu,
   kc,
   xc,
   Cc,
   _i = !1,
   to = [],
   Ot = null,
   Nt = null,
   zt = null,
   kr = new Map(),
   xr = new Map(),
   Et = [],
   gp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
         " "
      );
function xs(e, t) {
   switch (e) {
      case "focusin":
      case "focusout":
         Ot = null;
         break;
      case "dragenter":
      case "dragleave":
         Nt = null;
         break;
      case "mouseover":
      case "mouseout":
         zt = null;
         break;
      case "pointerover":
      case "pointerout":
         kr.delete(t.pointerId);
         break;
      case "gotpointercapture":
      case "lostpointercapture":
         xr.delete(t.pointerId);
   }
}
function Xn(e, t, n, r, o, l) {
   return e === null || e.nativeEvent !== l
      ? ((e = {
           blockedOn: t,
           domEventName: n,
           eventSystemFlags: r,
           nativeEvent: l,
           targetContainers: [o],
        }),
        t !== null && ((t = Wr(t)), t !== null && gu(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
}
function yp(e, t, n, r, o) {
   switch (t) {
      case "focusin":
         return (Ot = Xn(Ot, e, t, n, r, o)), !0;
      case "dragenter":
         return (Nt = Xn(Nt, e, t, n, r, o)), !0;
      case "mouseover":
         return (zt = Xn(zt, e, t, n, r, o)), !0;
      case "pointerover":
         var l = o.pointerId;
         return kr.set(l, Xn(kr.get(l) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
         return (
            (l = o.pointerId),
            xr.set(l, Xn(xr.get(l) || null, e, t, n, r, o)),
            !0
         );
   }
   return !1;
}
function Ec(e) {
   var t = Qt(e.target);
   if (t !== null) {
      var n = rn(t);
      if (n !== null) {
         if (((t = n.tag), t === 13)) {
            if (((t = dc(n)), t !== null)) {
               (e.blockedOn = t),
                  Cc(e.priority, function () {
                     kc(n);
                  });
               return;
            }
         } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
         }
      }
   }
   e.blockedOn = null;
}
function go(e) {
   if (e.blockedOn !== null) return !1;
   for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
         n = e.nativeEvent;
         var r = new n.constructor(n.type, n);
         (Si = r), n.target.dispatchEvent(r), (Si = null);
      } else return (t = Wr(n)), t !== null && gu(t), (e.blockedOn = n), !1;
      t.shift();
   }
   return !0;
}
function Cs(e, t, n) {
   go(e) && n.delete(t);
}
function vp() {
   (_i = !1),
      Ot !== null && go(Ot) && (Ot = null),
      Nt !== null && go(Nt) && (Nt = null),
      zt !== null && go(zt) && (zt = null),
      kr.forEach(Cs),
      xr.forEach(Cs);
}
function Zn(e, t) {
   e.blockedOn === t &&
      ((e.blockedOn = null),
      _i ||
         ((_i = !0),
         $e.unstable_scheduleCallback($e.unstable_NormalPriority, vp)));
}
function Cr(e) {
   function t(o) {
      return Zn(o, e);
   }
   if (0 < to.length) {
      Zn(to[0], e);
      for (var n = 1; n < to.length; n++) {
         var r = to[n];
         r.blockedOn === e && (r.blockedOn = null);
      }
   }
   for (
      Ot !== null && Zn(Ot, e),
         Nt !== null && Zn(Nt, e),
         zt !== null && Zn(zt, e),
         kr.forEach(t),
         xr.forEach(t),
         n = 0;
      n < Et.length;
      n++
   )
      (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
   for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
      Ec(n), n.blockedOn === null && Et.shift();
}
var On = St.ReactCurrentBatchConfig,
   Ao = !0;
function wp(e, t, n, r) {
   var o = D,
      l = On.transition;
   On.transition = null;
   try {
      (D = 1), yu(e, t, n, r);
   } finally {
      (D = o), (On.transition = l);
   }
}
function Sp(e, t, n, r) {
   var o = D,
      l = On.transition;
   On.transition = null;
   try {
      (D = 4), yu(e, t, n, r);
   } finally {
      (D = o), (On.transition = l);
   }
}
function yu(e, t, n, r) {
   if (Ao) {
      var o = Pi(e, t, n, r);
      if (o === null) Ql(e, t, r, Fo, n), xs(e, r);
      else if (yp(o, e, t, n, r)) r.stopPropagation();
      else if ((xs(e, r), t & 4 && -1 < gp.indexOf(e))) {
         for (; o !== null; ) {
            var l = Wr(o);
            if (
               (l !== null && Sc(l),
               (l = Pi(e, t, n, r)),
               l === null && Ql(e, t, r, Fo, n),
               l === o)
            )
               break;
            o = l;
         }
         o !== null && r.stopPropagation();
      } else Ql(e, t, r, null, n);
   }
}
var Fo = null;
function Pi(e, t, n, r) {
   if (((Fo = null), (e = pu(r)), (e = Qt(e)), e !== null))
      if (((t = rn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
         if (((e = dc(t)), e !== null)) return e;
         e = null;
      } else if (n === 3) {
         if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
         e = null;
      } else t !== e && (e = null);
   return (Fo = e), null;
}
function _c(e) {
   switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
         return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
         return 4;
      case "message":
         switch (up()) {
            case mu:
               return 1;
            case gc:
               return 4;
            case Mo:
            case sp:
               return 16;
            case yc:
               return 536870912;
            default:
               return 16;
         }
      default:
         return 16;
   }
}
var Pt = null,
   vu = null,
   yo = null;
function Pc() {
   if (yo) return yo;
   var e,
      t = vu,
      n = t.length,
      r,
      o = "value" in Pt ? Pt.value : Pt.textContent,
      l = o.length;
   for (e = 0; e < n && t[e] === o[e]; e++);
   var i = n - e;
   for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
   return (yo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function vo(e) {
   var t = e.keyCode;
   return (
      "charCode" in e
         ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
         : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
   );
}
function no() {
   return !0;
}
function Es() {
   return !1;
}
function Me(e) {
   function t(n, r, o, l, i) {
      (this._reactName = n),
         (this._targetInst = o),
         (this.type = r),
         (this.nativeEvent = l),
         (this.target = i),
         (this.currentTarget = null);
      for (var u in e)
         e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
      return (
         (this.isDefaultPrevented = (
            l.defaultPrevented != null
               ? l.defaultPrevented
               : l.returnValue === !1
         )
            ? no
            : Es),
         (this.isPropagationStopped = Es),
         this
      );
   }
   return (
      Y(t.prototype, {
         preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n &&
               (n.preventDefault
                  ? n.preventDefault()
                  : typeof n.returnValue != "unknown" && (n.returnValue = !1),
               (this.isDefaultPrevented = no));
         },
         stopPropagation: function () {
            var n = this.nativeEvent;
            n &&
               (n.stopPropagation
                  ? n.stopPropagation()
                  : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
               (this.isPropagationStopped = no));
         },
         persist: function () {},
         isPersistent: no,
      }),
      t
   );
}
var Vn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
         return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
   },
   wu = Me(Vn),
   Ur = Y({}, Vn, { view: 0, detail: 0 }),
   kp = Me(Ur),
   Fl,
   jl,
   Jn,
   ll = Y({}, Ur, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Su,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
         return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
               ? e.toElement
               : e.fromElement
            : e.relatedTarget;
      },
      movementX: function (e) {
         return "movementX" in e
            ? e.movementX
            : (e !== Jn &&
                 (Jn && e.type === "mousemove"
                    ? ((Fl = e.screenX - Jn.screenX),
                      (jl = e.screenY - Jn.screenY))
                    : (jl = Fl = 0),
                 (Jn = e)),
              Fl);
      },
      movementY: function (e) {
         return "movementY" in e ? e.movementY : jl;
      },
   }),
   _s = Me(ll),
   xp = Y({}, ll, { dataTransfer: 0 }),
   Cp = Me(xp),
   Ep = Y({}, Ur, { relatedTarget: 0 }),
   Dl = Me(Ep),
   _p = Y({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
   Pp = Me(_p),
   Tp = Y({}, Vn, {
      clipboardData: function (e) {
         return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
   }),
   Op = Me(Tp),
   Np = Y({}, Vn, { data: 0 }),
   Ps = Me(Np),
   zp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
   },
   Rp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
   },
   $p = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
   };
function Lp(e) {
   var t = this.nativeEvent;
   return t.getModifierState
      ? t.getModifierState(e)
      : (e = $p[e])
      ? !!t[e]
      : !1;
}
function Su() {
   return Lp;
}
var Mp = Y({}, Ur, {
      key: function (e) {
         if (e.key) {
            var t = zp[e.key] || e.key;
            if (t !== "Unidentified") return t;
         }
         return e.type === "keypress"
            ? ((e = vo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
            ? Rp[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Su,
      charCode: function (e) {
         return e.type === "keypress" ? vo(e) : 0;
      },
      keyCode: function (e) {
         return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
         return e.type === "keypress"
            ? vo(e)
            : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
   }),
   Ip = Me(Mp),
   Ap = Y({}, ll, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
   }),
   Ts = Me(Ap),
   Fp = Y({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Su,
   }),
   jp = Me(Fp),
   Dp = Y({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
   Bp = Me(Dp),
   Up = Y({}, ll, {
      deltaX: function (e) {
         return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
         return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
   }),
   Wp = Me(Up),
   Hp = [9, 13, 27, 32],
   ku = ht && "CompositionEvent" in window,
   cr = null;
ht && "documentMode" in document && (cr = document.documentMode);
var Vp = ht && "TextEvent" in window && !cr,
   Tc = ht && (!ku || (cr && 8 < cr && 11 >= cr)),
   Os = String.fromCharCode(32),
   Ns = !1;
function Oc(e, t) {
   switch (e) {
      case "keyup":
         return Hp.indexOf(t.keyCode) !== -1;
      case "keydown":
         return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
         return !0;
      default:
         return !1;
   }
}
function Nc(e) {
   return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var hn = !1;
function Kp(e, t) {
   switch (e) {
      case "compositionend":
         return Nc(t);
      case "keypress":
         return t.which !== 32 ? null : ((Ns = !0), Os);
      case "textInput":
         return (e = t.data), e === Os && Ns ? null : e;
      default:
         return null;
   }
}
function Qp(e, t) {
   if (hn)
      return e === "compositionend" || (!ku && Oc(e, t))
         ? ((e = Pc()), (yo = vu = Pt = null), (hn = !1), e)
         : null;
   switch (e) {
      case "paste":
         return null;
      case "keypress":
         if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
         }
         return null;
      case "compositionend":
         return Tc && t.locale !== "ko" ? null : t.data;
      default:
         return null;
   }
}
var Gp = {
   color: !0,
   date: !0,
   datetime: !0,
   "datetime-local": !0,
   email: !0,
   month: !0,
   number: !0,
   password: !0,
   range: !0,
   search: !0,
   tel: !0,
   text: !0,
   time: !0,
   url: !0,
   week: !0,
};
function zs(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return t === "input" ? !!Gp[e.type] : t === "textarea";
}
function zc(e, t, n, r) {
   uc(r),
      (t = jo(t, "onChange")),
      0 < t.length &&
         ((n = new wu("onChange", "change", null, n, r)),
         e.push({ event: n, listeners: t }));
}
var fr = null,
   Er = null;
function Yp(e) {
   Uc(e, 0);
}
function il(e) {
   var t = vn(e);
   if (ec(t)) return e;
}
function Xp(e, t) {
   if (e === "change") return t;
}
var Rc = !1;
if (ht) {
   var Bl;
   if (ht) {
      var Ul = "oninput" in document;
      if (!Ul) {
         var Rs = document.createElement("div");
         Rs.setAttribute("oninput", "return;"),
            (Ul = typeof Rs.oninput == "function");
      }
      Bl = Ul;
   } else Bl = !1;
   Rc = Bl && (!document.documentMode || 9 < document.documentMode);
}
function $s() {
   fr && (fr.detachEvent("onpropertychange", $c), (Er = fr = null));
}
function $c(e) {
   if (e.propertyName === "value" && il(Er)) {
      var t = [];
      zc(t, Er, e, pu(e)), fc(Yp, t);
   }
}
function Zp(e, t, n) {
   e === "focusin"
      ? ($s(), (fr = t), (Er = n), fr.attachEvent("onpropertychange", $c))
      : e === "focusout" && $s();
}
function Jp(e) {
   if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return il(Er);
}
function qp(e, t) {
   if (e === "click") return il(t);
}
function bp(e, t) {
   if (e === "input" || e === "change") return il(t);
}
function e0(e, t) {
   return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : e0;
function _r(e, t) {
   if (Xe(e, t)) return !0;
   if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
   var n = Object.keys(e),
      r = Object.keys(t);
   if (n.length !== r.length) return !1;
   for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!si.call(t, o) || !Xe(e[o], t[o])) return !1;
   }
   return !0;
}
function Ls(e) {
   for (; e && e.firstChild; ) e = e.firstChild;
   return e;
}
function Ms(e, t) {
   var n = Ls(e);
   e = 0;
   for (var r; n; ) {
      if (n.nodeType === 3) {
         if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
         e = r;
      }
      e: {
         for (; n; ) {
            if (n.nextSibling) {
               n = n.nextSibling;
               break e;
            }
            n = n.parentNode;
         }
         n = void 0;
      }
      n = Ls(n);
   }
}
function Lc(e, t) {
   return e && t
      ? e === t
         ? !0
         : e && e.nodeType === 3
         ? !1
         : t && t.nodeType === 3
         ? Lc(e, t.parentNode)
         : "contains" in e
         ? e.contains(t)
         : e.compareDocumentPosition
         ? !!(e.compareDocumentPosition(t) & 16)
         : !1
      : !1;
}
function Mc() {
   for (var e = window, t = Ro(); t instanceof e.HTMLIFrameElement; ) {
      try {
         var n = typeof t.contentWindow.location.href == "string";
      } catch {
         n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ro(e.document);
   }
   return t;
}
function xu(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return (
      t &&
      ((t === "input" &&
         (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
         t === "textarea" ||
         e.contentEditable === "true")
   );
}
function t0(e) {
   var t = Mc(),
      n = e.focusedElem,
      r = e.selectionRange;
   if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Lc(n.ownerDocument.documentElement, n)
   ) {
      if (r !== null && xu(n)) {
         if (
            ((t = r.start),
            (e = r.end),
            e === void 0 && (e = t),
            "selectionStart" in n)
         )
            (n.selectionStart = t),
               (n.selectionEnd = Math.min(e, n.value.length));
         else if (
            ((e =
               ((t = n.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
         ) {
            e = e.getSelection();
            var o = n.textContent.length,
               l = Math.min(r.start, o);
            (r = r.end === void 0 ? l : Math.min(r.end, o)),
               !e.extend && l > r && ((o = r), (r = l), (l = o)),
               (o = Ms(n, l));
            var i = Ms(n, r);
            o &&
               i &&
               (e.rangeCount !== 1 ||
                  e.anchorNode !== o.node ||
                  e.anchorOffset !== o.offset ||
                  e.focusNode !== i.node ||
                  e.focusOffset !== i.offset) &&
               ((t = t.createRange()),
               t.setStart(o.node, o.offset),
               e.removeAllRanges(),
               l > r
                  ? (e.addRange(t), e.extend(i.node, i.offset))
                  : (t.setEnd(i.node, i.offset), e.addRange(t)));
         }
      }
      for (t = [], e = n; (e = e.parentNode); )
         e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
         (e = t[n]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
   }
}
var n0 = ht && "documentMode" in document && 11 >= document.documentMode,
   gn = null,
   Ti = null,
   dr = null,
   Oi = !1;
function Is(e, t, n) {
   var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
   Oi ||
      gn == null ||
      gn !== Ro(r) ||
      ((r = gn),
      "selectionStart" in r && xu(r)
         ? (r = { start: r.selectionStart, end: r.selectionEnd })
         : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
           ).getSelection()),
           (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
           })),
      (dr && _r(dr, r)) ||
         ((dr = r),
         (r = jo(Ti, "onSelect")),
         0 < r.length &&
            ((t = new wu("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = gn))));
}
function ro(e, t) {
   var n = {};
   return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
   );
}
var yn = {
      animationend: ro("Animation", "AnimationEnd"),
      animationiteration: ro("Animation", "AnimationIteration"),
      animationstart: ro("Animation", "AnimationStart"),
      transitionend: ro("Transition", "TransitionEnd"),
   },
   Wl = {},
   Ic = {};
ht &&
   ((Ic = document.createElement("div").style),
   "AnimationEvent" in window ||
      (delete yn.animationend.animation,
      delete yn.animationiteration.animation,
      delete yn.animationstart.animation),
   "TransitionEvent" in window || delete yn.transitionend.transition);
function ul(e) {
   if (Wl[e]) return Wl[e];
   if (!yn[e]) return e;
   var t = yn[e],
      n;
   for (n in t) if (t.hasOwnProperty(n) && n in Ic) return (Wl[e] = t[n]);
   return e;
}
var Ac = ul("animationend"),
   Fc = ul("animationiteration"),
   jc = ul("animationstart"),
   Dc = ul("transitionend"),
   Bc = new Map(),
   As =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
         " "
      );
function jt(e, t) {
   Bc.set(e, t), nn(t, [e]);
}
for (var Hl = 0; Hl < As.length; Hl++) {
   var Vl = As[Hl],
      r0 = Vl.toLowerCase(),
      o0 = Vl[0].toUpperCase() + Vl.slice(1);
   jt(r0, "on" + o0);
}
jt(Ac, "onAnimationEnd");
jt(Fc, "onAnimationIteration");
jt(jc, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(Dc, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
nn(
   "onChange",
   "change click focusin focusout input keydown keyup selectionchange".split(
      " "
   )
);
nn(
   "onSelect",
   "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
   )
);
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn(
   "onCompositionEnd",
   "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
nn(
   "onCompositionStart",
   "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
nn(
   "onCompositionUpdate",
   "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ur =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
         " "
      ),
   l0 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ur)
   );
function Fs(e, t, n) {
   var r = e.type || "unknown-event";
   (e.currentTarget = n), rp(r, t, void 0, e), (e.currentTarget = null);
}
function Uc(e, t) {
   t = (t & 4) !== 0;
   for (var n = 0; n < e.length; n++) {
      var r = e[n],
         o = r.event;
      r = r.listeners;
      e: {
         var l = void 0;
         if (t)
            for (var i = r.length - 1; 0 <= i; i--) {
               var u = r[i],
                  s = u.instance,
                  a = u.currentTarget;
               if (((u = u.listener), s !== l && o.isPropagationStopped()))
                  break e;
               Fs(o, u, a), (l = s);
            }
         else
            for (i = 0; i < r.length; i++) {
               if (
                  ((u = r[i]),
                  (s = u.instance),
                  (a = u.currentTarget),
                  (u = u.listener),
                  s !== l && o.isPropagationStopped())
               )
                  break e;
               Fs(o, u, a), (l = s);
            }
      }
   }
   if (Lo) throw ((e = Ci), (Lo = !1), (Ci = null), e);
}
function W(e, t) {
   var n = t[Li];
   n === void 0 && (n = t[Li] = new Set());
   var r = e + "__bubble";
   n.has(r) || (Wc(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
   var r = 0;
   t && (r |= 4), Wc(n, e, r, t);
}
var oo = "_reactListening" + Math.random().toString(36).slice(2);
function Pr(e) {
   if (!e[oo]) {
      (e[oo] = !0),
         Xa.forEach(function (n) {
            n !== "selectionchange" &&
               (l0.has(n) || Kl(n, !1, e), Kl(n, !0, e));
         });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[oo] || ((t[oo] = !0), Kl("selectionchange", !1, t));
   }
}
function Wc(e, t, n, r) {
   switch (_c(t)) {
      case 1:
         var o = wp;
         break;
      case 4:
         o = Sp;
         break;
      default:
         o = yu;
   }
   (n = o.bind(null, t, n, e)),
      (o = void 0),
      !xi ||
         (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
         (o = !0),
      r
         ? o !== void 0
            ? e.addEventListener(t, n, { capture: !0, passive: o })
            : e.addEventListener(t, n, !0)
         : o !== void 0
         ? e.addEventListener(t, n, { passive: o })
         : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, o) {
   var l = r;
   if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
         if (r === null) return;
         var i = r.tag;
         if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
            if (i === 4)
               for (i = r.return; i !== null; ) {
                  var s = i.tag;
                  if (
                     (s === 3 || s === 4) &&
                     ((s = i.stateNode.containerInfo),
                     s === o || (s.nodeType === 8 && s.parentNode === o))
                  )
                     return;
                  i = i.return;
               }
            for (; u !== null; ) {
               if (((i = Qt(u)), i === null)) return;
               if (((s = i.tag), s === 5 || s === 6)) {
                  r = l = i;
                  continue e;
               }
               u = u.parentNode;
            }
         }
         r = r.return;
      }
   fc(function () {
      var a = l,
         h = pu(n),
         m = [];
      e: {
         var p = Bc.get(e);
         if (p !== void 0) {
            var v = wu,
               y = e;
            switch (e) {
               case "keypress":
                  if (vo(n) === 0) break e;
               case "keydown":
               case "keyup":
                  v = Ip;
                  break;
               case "focusin":
                  (y = "focus"), (v = Dl);
                  break;
               case "focusout":
                  (y = "blur"), (v = Dl);
                  break;
               case "beforeblur":
               case "afterblur":
                  v = Dl;
                  break;
               case "click":
                  if (n.button === 2) break e;
               case "auxclick":
               case "dblclick":
               case "mousedown":
               case "mousemove":
               case "mouseup":
               case "mouseout":
               case "mouseover":
               case "contextmenu":
                  v = _s;
                  break;
               case "drag":
               case "dragend":
               case "dragenter":
               case "dragexit":
               case "dragleave":
               case "dragover":
               case "dragstart":
               case "drop":
                  v = Cp;
                  break;
               case "touchcancel":
               case "touchend":
               case "touchmove":
               case "touchstart":
                  v = jp;
                  break;
               case Ac:
               case Fc:
               case jc:
                  v = Pp;
                  break;
               case Dc:
                  v = Bp;
                  break;
               case "scroll":
                  v = kp;
                  break;
               case "wheel":
                  v = Wp;
                  break;
               case "copy":
               case "cut":
               case "paste":
                  v = Op;
                  break;
               case "gotpointercapture":
               case "lostpointercapture":
               case "pointercancel":
               case "pointerdown":
               case "pointermove":
               case "pointerout":
               case "pointerover":
               case "pointerup":
                  v = Ts;
            }
            var g = (t & 4) !== 0,
               E = !g && e === "scroll",
               f = g ? (p !== null ? p + "Capture" : null) : p;
            g = [];
            for (var c = a, d; c !== null; ) {
               d = c;
               var w = d.stateNode;
               if (
                  (d.tag === 5 &&
                     w !== null &&
                     ((d = w),
                     f !== null &&
                        ((w = Sr(c, f)), w != null && g.push(Tr(c, w, d)))),
                  E)
               )
                  break;
               c = c.return;
            }
            0 < g.length &&
               ((p = new v(p, y, null, n, h)),
               m.push({ event: p, listeners: g }));
         }
      }
      if (!(t & 7)) {
         e: {
            if (
               ((p = e === "mouseover" || e === "pointerover"),
               (v = e === "mouseout" || e === "pointerout"),
               p &&
                  n !== Si &&
                  (y = n.relatedTarget || n.fromElement) &&
                  (Qt(y) || y[gt]))
            )
               break e;
            if (
               (v || p) &&
               ((p =
                  h.window === h
                     ? h
                     : (p = h.ownerDocument)
                     ? p.defaultView || p.parentWindow
                     : window),
               v
                  ? ((y = n.relatedTarget || n.toElement),
                    (v = a),
                    (y = y ? Qt(y) : null),
                    y !== null &&
                       ((E = rn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                       (y = null))
                  : ((v = null), (y = a)),
               v !== y)
            ) {
               if (
                  ((g = _s),
                  (w = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (c = "mouse"),
                  (e === "pointerout" || e === "pointerover") &&
                     ((g = Ts),
                     (w = "onPointerLeave"),
                     (f = "onPointerEnter"),
                     (c = "pointer")),
                  (E = v == null ? p : vn(v)),
                  (d = y == null ? p : vn(y)),
                  (p = new g(w, c + "leave", v, n, h)),
                  (p.target = E),
                  (p.relatedTarget = d),
                  (w = null),
                  Qt(h) === a &&
                     ((g = new g(f, c + "enter", y, n, h)),
                     (g.target = d),
                     (g.relatedTarget = E),
                     (w = g)),
                  (E = w),
                  v && y)
               )
                  t: {
                     for (g = v, f = y, c = 0, d = g; d; d = ln(d)) c++;
                     for (d = 0, w = f; w; w = ln(w)) d++;
                     for (; 0 < c - d; ) (g = ln(g)), c--;
                     for (; 0 < d - c; ) (f = ln(f)), d--;
                     for (; c--; ) {
                        if (g === f || (f !== null && g === f.alternate))
                           break t;
                        (g = ln(g)), (f = ln(f));
                     }
                     g = null;
                  }
               else g = null;
               v !== null && js(m, p, v, g, !1),
                  y !== null && E !== null && js(m, E, y, g, !0);
            }
         }
         e: {
            if (
               ((p = a ? vn(a) : window),
               (v = p.nodeName && p.nodeName.toLowerCase()),
               v === "select" || (v === "input" && p.type === "file"))
            )
               var x = Xp;
            else if (zs(p))
               if (Rc) x = bp;
               else {
                  x = Jp;
                  var C = Zp;
               }
            else
               (v = p.nodeName) &&
                  v.toLowerCase() === "input" &&
                  (p.type === "checkbox" || p.type === "radio") &&
                  (x = qp);
            if (x && (x = x(e, a))) {
               zc(m, x, n, h);
               break e;
            }
            C && C(e, p, a),
               e === "focusout" &&
                  (C = p._wrapperState) &&
                  C.controlled &&
                  p.type === "number" &&
                  hi(p, "number", p.value);
         }
         switch (((C = a ? vn(a) : window), e)) {
            case "focusin":
               (zs(C) || C.contentEditable === "true") &&
                  ((gn = C), (Ti = a), (dr = null));
               break;
            case "focusout":
               dr = Ti = gn = null;
               break;
            case "mousedown":
               Oi = !0;
               break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
               (Oi = !1), Is(m, n, h);
               break;
            case "selectionchange":
               if (n0) break;
            case "keydown":
            case "keyup":
               Is(m, n, h);
         }
         var k;
         if (ku)
            e: {
               switch (e) {
                  case "compositionstart":
                     var T = "onCompositionStart";
                     break e;
                  case "compositionend":
                     T = "onCompositionEnd";
                     break e;
                  case "compositionupdate":
                     T = "onCompositionUpdate";
                     break e;
               }
               T = void 0;
            }
         else
            hn
               ? Oc(e, n) && (T = "onCompositionEnd")
               : e === "keydown" &&
                 n.keyCode === 229 &&
                 (T = "onCompositionStart");
         T &&
            (Tc &&
               n.locale !== "ko" &&
               (hn || T !== "onCompositionStart"
                  ? T === "onCompositionEnd" && hn && (k = Pc())
                  : ((Pt = h),
                    (vu = "value" in Pt ? Pt.value : Pt.textContent),
                    (hn = !0))),
            (C = jo(a, T)),
            0 < C.length &&
               ((T = new Ps(T, e, null, n, h)),
               m.push({ event: T, listeners: C }),
               k ? (T.data = k) : ((k = Nc(n)), k !== null && (T.data = k)))),
            (k = Vp ? Kp(e, n) : Qp(e, n)) &&
               ((a = jo(a, "onBeforeInput")),
               0 < a.length &&
                  ((h = new Ps("onBeforeInput", "beforeinput", null, n, h)),
                  m.push({ event: h, listeners: a }),
                  (h.data = k)));
      }
      Uc(m, t);
   });
}
function Tr(e, t, n) {
   return { instance: e, listener: t, currentTarget: n };
}
function jo(e, t) {
   for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
         l = o.stateNode;
      o.tag === 5 &&
         l !== null &&
         ((o = l),
         (l = Sr(e, n)),
         l != null && r.unshift(Tr(e, l, o)),
         (l = Sr(e, t)),
         l != null && r.push(Tr(e, l, o))),
         (e = e.return);
   }
   return r;
}
function ln(e) {
   if (e === null) return null;
   do e = e.return;
   while (e && e.tag !== 5);
   return e || null;
}
function js(e, t, n, r, o) {
   for (var l = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n,
         s = u.alternate,
         a = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
         a !== null &&
         ((u = a),
         o
            ? ((s = Sr(n, l)), s != null && i.unshift(Tr(n, s, u)))
            : o || ((s = Sr(n, l)), s != null && i.push(Tr(n, s, u)))),
         (n = n.return);
   }
   i.length !== 0 && e.push({ event: t, listeners: i });
}
var i0 = /\r\n?/g,
   u0 = /\u0000|\uFFFD/g;
function Ds(e) {
   return (typeof e == "string" ? e : "" + e)
      .replace(
         i0,
         `
`
      )
      .replace(u0, "");
}
function lo(e, t, n) {
   if (((t = Ds(t)), Ds(e) !== t && n)) throw Error(S(425));
}
function Do() {}
var Ni = null,
   zi = null;
function Ri(e, t) {
   return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
         t.dangerouslySetInnerHTML !== null &&
         t.dangerouslySetInnerHTML.__html != null)
   );
}
var $i = typeof setTimeout == "function" ? setTimeout : void 0,
   s0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
   Bs = typeof Promise == "function" ? Promise : void 0,
   a0 =
      typeof queueMicrotask == "function"
         ? queueMicrotask
         : typeof Bs < "u"
         ? function (e) {
              return Bs.resolve(null).then(e).catch(c0);
           }
         : $i;
function c0(e) {
   setTimeout(function () {
      throw e;
   });
}
function Gl(e, t) {
   var n = t,
      r = 0;
   do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
         if (((n = o.data), n === "/$")) {
            if (r === 0) {
               e.removeChild(o), Cr(t);
               return;
            }
            r--;
         } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
   } while (n);
   Cr(t);
}
function Rt(e) {
   for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
         if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
         if (t === "/$") return null;
      }
   }
   return e;
}
function Us(e) {
   e = e.previousSibling;
   for (var t = 0; e; ) {
      if (e.nodeType === 8) {
         var n = e.data;
         if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0) return e;
            t--;
         } else n === "/$" && t++;
      }
      e = e.previousSibling;
   }
   return null;
}
var Kn = Math.random().toString(36).slice(2),
   rt = "__reactFiber$" + Kn,
   Or = "__reactProps$" + Kn,
   gt = "__reactContainer$" + Kn,
   Li = "__reactEvents$" + Kn,
   f0 = "__reactListeners$" + Kn,
   d0 = "__reactHandles$" + Kn;
function Qt(e) {
   var t = e[rt];
   if (t) return t;
   for (var n = e.parentNode; n; ) {
      if ((t = n[gt] || n[rt])) {
         if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
         )
            for (e = Us(e); e !== null; ) {
               if ((n = e[rt])) return n;
               e = Us(e);
            }
         return t;
      }
      (e = n), (n = e.parentNode);
   }
   return null;
}
function Wr(e) {
   return (
      (e = e[rt] || e[gt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
         ? null
         : e
   );
}
function vn(e) {
   if (e.tag === 5 || e.tag === 6) return e.stateNode;
   throw Error(S(33));
}
function sl(e) {
   return e[Or] || null;
}
var Mi = [],
   wn = -1;
function Dt(e) {
   return { current: e };
}
function H(e) {
   0 > wn || ((e.current = Mi[wn]), (Mi[wn] = null), wn--);
}
function U(e, t) {
   wn++, (Mi[wn] = e.current), (e.current = t);
}
var Ft = {},
   ge = Dt(Ft),
   Ce = Dt(!1),
   Jt = Ft;
function Mn(e, t) {
   var n = e.type.contextTypes;
   if (!n) return Ft;
   var r = e.stateNode;
   if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
   var o = {},
      l;
   for (l in n) o[l] = t[l];
   return (
      r &&
         ((e = e.stateNode),
         (e.__reactInternalMemoizedUnmaskedChildContext = t),
         (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
   );
}
function Ee(e) {
   return (e = e.childContextTypes), e != null;
}
function Bo() {
   H(Ce), H(ge);
}
function Ws(e, t, n) {
   if (ge.current !== Ft) throw Error(S(168));
   U(ge, t), U(Ce, n);
}
function Hc(e, t, n) {
   var r = e.stateNode;
   if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
   r = r.getChildContext();
   for (var o in r) if (!(o in t)) throw Error(S(108, Zd(e) || "Unknown", o));
   return Y({}, n, r);
}
function Uo(e) {
   return (
      (e =
         ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
         Ft),
      (Jt = ge.current),
      U(ge, e),
      U(Ce, Ce.current),
      !0
   );
}
function Hs(e, t, n) {
   var r = e.stateNode;
   if (!r) throw Error(S(169));
   n
      ? ((e = Hc(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        H(Ce),
        H(ge),
        U(ge, e))
      : H(Ce),
      U(Ce, n);
}
var at = null,
   al = !1,
   Yl = !1;
function Vc(e) {
   at === null ? (at = [e]) : at.push(e);
}
function p0(e) {
   (al = !0), Vc(e);
}
function Bt() {
   if (!Yl && at !== null) {
      Yl = !0;
      var e = 0,
         t = D;
      try {
         var n = at;
         for (D = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
         }
         (at = null), (al = !1);
      } catch (o) {
         throw (at !== null && (at = at.slice(e + 1)), hc(mu, Bt), o);
      } finally {
         (D = t), (Yl = !1);
      }
   }
   return null;
}
var Sn = [],
   kn = 0,
   Wo = null,
   Ho = 0,
   Ie = [],
   Ae = 0,
   qt = null,
   ct = 1,
   ft = "";
function Vt(e, t) {
   (Sn[kn++] = Ho), (Sn[kn++] = Wo), (Wo = e), (Ho = t);
}
function Kc(e, t, n) {
   (Ie[Ae++] = ct), (Ie[Ae++] = ft), (Ie[Ae++] = qt), (qt = e);
   var r = ct;
   e = ft;
   var o = 32 - Qe(r) - 1;
   (r &= ~(1 << o)), (n += 1);
   var l = 32 - Qe(t) + o;
   if (30 < l) {
      var i = o - (o % 5);
      (l = (r & ((1 << i) - 1)).toString(32)),
         (r >>= i),
         (o -= i),
         (ct = (1 << (32 - Qe(t) + o)) | (n << o) | r),
         (ft = l + e);
   } else (ct = (1 << l) | (n << o) | r), (ft = e);
}
function Cu(e) {
   e.return !== null && (Vt(e, 1), Kc(e, 1, 0));
}
function Eu(e) {
   for (; e === Wo; )
      (Wo = Sn[--kn]), (Sn[kn] = null), (Ho = Sn[--kn]), (Sn[kn] = null);
   for (; e === qt; )
      (qt = Ie[--Ae]),
         (Ie[Ae] = null),
         (ft = Ie[--Ae]),
         (Ie[Ae] = null),
         (ct = Ie[--Ae]),
         (Ie[Ae] = null);
}
var ze = null,
   Ne = null,
   K = !1,
   Ke = null;
function Qc(e, t) {
   var n = Fe(5, null, null, 0);
   (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vs(e, t) {
   switch (e.tag) {
      case 5:
         var n = e.type;
         return (
            (t =
               t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t),
            t !== null
               ? ((e.stateNode = t), (ze = e), (Ne = Rt(t.firstChild)), !0)
               : !1
         );
      case 6:
         return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (ze = e), (Ne = null), !0) : !1
         );
      case 13:
         return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
               ? ((n = qt !== null ? { id: ct, overflow: ft } : null),
                 (e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824,
                 }),
                 (n = Fe(18, null, null, 0)),
                 (n.stateNode = t),
                 (n.return = e),
                 (e.child = n),
                 (ze = e),
                 (Ne = null),
                 !0)
               : !1
         );
      default:
         return !1;
   }
}
function Ii(e) {
   return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ai(e) {
   if (K) {
      var t = Ne;
      if (t) {
         var n = t;
         if (!Vs(e, t)) {
            if (Ii(e)) throw Error(S(418));
            t = Rt(n.nextSibling);
            var r = ze;
            t && Vs(e, t)
               ? Qc(r, n)
               : ((e.flags = (e.flags & -4097) | 2), (K = !1), (ze = e));
         }
      } else {
         if (Ii(e)) throw Error(S(418));
         (e.flags = (e.flags & -4097) | 2), (K = !1), (ze = e);
      }
   }
}
function Ks(e) {
   for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

   )
      e = e.return;
   ze = e;
}
function io(e) {
   if (e !== ze) return !1;
   if (!K) return Ks(e), (K = !0), !1;
   var t;
   if (
      ((t = e.tag !== 3) &&
         !(t = e.tag !== 5) &&
         ((t = e.type),
         (t = t !== "head" && t !== "body" && !Ri(e.type, e.memoizedProps))),
      t && (t = Ne))
   ) {
      if (Ii(e)) throw (Gc(), Error(S(418)));
      for (; t; ) Qc(e, t), (t = Rt(t.nextSibling));
   }
   if ((Ks(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
         throw Error(S(317));
      e: {
         for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
               var n = e.data;
               if (n === "/$") {
                  if (t === 0) {
                     Ne = Rt(e.nextSibling);
                     break e;
                  }
                  t--;
               } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
            }
            e = e.nextSibling;
         }
         Ne = null;
      }
   } else Ne = ze ? Rt(e.stateNode.nextSibling) : null;
   return !0;
}
function Gc() {
   for (var e = Ne; e; ) e = Rt(e.nextSibling);
}
function In() {
   (Ne = ze = null), (K = !1);
}
function _u(e) {
   Ke === null ? (Ke = [e]) : Ke.push(e);
}
var m0 = St.ReactCurrentBatchConfig;
function We(e, t) {
   if (e && e.defaultProps) {
      (t = Y({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
   }
   return t;
}
var Vo = Dt(null),
   Ko = null,
   xn = null,
   Pu = null;
function Tu() {
   Pu = xn = Ko = null;
}
function Ou(e) {
   var t = Vo.current;
   H(Vo), (e._currentValue = t);
}
function Fi(e, t, n) {
   for (; e !== null; ) {
      var r = e.alternate;
      if (
         ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
            : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
         e === n)
      )
         break;
      e = e.return;
   }
}
function Nn(e, t) {
   (Ko = e),
      (Pu = xn = null),
      (e = e.dependencies),
      e !== null &&
         e.firstContext !== null &&
         (e.lanes & t && (xe = !0), (e.firstContext = null));
}
function De(e) {
   var t = e._currentValue;
   if (Pu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), xn === null)) {
         if (Ko === null) throw Error(S(308));
         (xn = e), (Ko.dependencies = { lanes: 0, firstContext: e });
      } else xn = xn.next = e;
   return t;
}
var Gt = null;
function Nu(e) {
   Gt === null ? (Gt = [e]) : Gt.push(e);
}
function Yc(e, t, n, r) {
   var o = t.interleaved;
   return (
      o === null ? ((n.next = n), Nu(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      yt(e, r)
   );
}
function yt(e, t) {
   e.lanes |= t;
   var n = e.alternate;
   for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
         (n = e.alternate),
         n !== null && (n.childLanes |= t),
         (n = e),
         (e = e.return);
   return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function zu(e) {
   e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
   };
}
function Xc(e, t) {
   (e = e.updateQueue),
      t.updateQueue === e &&
         (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
         });
}
function dt(e, t) {
   return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
   };
}
function $t(e, t, n) {
   var r = e.updateQueue;
   if (r === null) return null;
   if (((r = r.shared), M & 2)) {
      var o = r.pending;
      return (
         o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
         (r.pending = t),
         yt(e, n)
      );
   }
   return (
      (o = r.interleaved),
      o === null ? ((t.next = t), Nu(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      yt(e, n)
   );
}
function wo(e, t, n) {
   if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
   ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), hu(e, n);
   }
}
function Qs(e, t) {
   var n = e.updateQueue,
      r = e.alternate;
   if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
         l = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
         do {
            var i = {
               eventTime: n.eventTime,
               lane: n.lane,
               tag: n.tag,
               payload: n.payload,
               callback: n.callback,
               next: null,
            };
            l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
         } while (n !== null);
         l === null ? (o = l = t) : (l = l.next = t);
      } else o = l = t;
      (n = {
         baseState: r.baseState,
         firstBaseUpdate: o,
         lastBaseUpdate: l,
         shared: r.shared,
         effects: r.effects,
      }),
         (e.updateQueue = n);
      return;
   }
   (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
}
function Qo(e, t, n, r) {
   var o = e.updateQueue;
   Ct = !1;
   var l = o.firstBaseUpdate,
      i = o.lastBaseUpdate,
      u = o.shared.pending;
   if (u !== null) {
      o.shared.pending = null;
      var s = u,
         a = s.next;
      (s.next = null), i === null ? (l = a) : (i.next = a), (i = s);
      var h = e.alternate;
      h !== null &&
         ((h = h.updateQueue),
         (u = h.lastBaseUpdate),
         u !== i &&
            (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
            (h.lastBaseUpdate = s)));
   }
   if (l !== null) {
      var m = o.baseState;
      (i = 0), (h = a = s = null), (u = l);
      do {
         var p = u.lane,
            v = u.eventTime;
         if ((r & p) === p) {
            h !== null &&
               (h = h.next =
                  {
                     eventTime: v,
                     lane: 0,
                     tag: u.tag,
                     payload: u.payload,
                     callback: u.callback,
                     next: null,
                  });
            e: {
               var y = e,
                  g = u;
               switch (((p = t), (v = n), g.tag)) {
                  case 1:
                     if (((y = g.payload), typeof y == "function")) {
                        m = y.call(v, m, p);
                        break e;
                     }
                     m = y;
                     break e;
                  case 3:
                     y.flags = (y.flags & -65537) | 128;
                  case 0:
                     if (
                        ((y = g.payload),
                        (p = typeof y == "function" ? y.call(v, m, p) : y),
                        p == null)
                     )
                        break e;
                     m = Y({}, m, p);
                     break e;
                  case 2:
                     Ct = !0;
               }
            }
            u.callback !== null &&
               u.lane !== 0 &&
               ((e.flags |= 64),
               (p = o.effects),
               p === null ? (o.effects = [u]) : p.push(u));
         } else
            (v = {
               eventTime: v,
               lane: p,
               tag: u.tag,
               payload: u.payload,
               callback: u.callback,
               next: null,
            }),
               h === null ? ((a = h = v), (s = m)) : (h = h.next = v),
               (i |= p);
         if (((u = u.next), u === null)) {
            if (((u = o.shared.pending), u === null)) break;
            (p = u),
               (u = p.next),
               (p.next = null),
               (o.lastBaseUpdate = p),
               (o.shared.pending = null);
         }
      } while (1);
      if (
         (h === null && (s = m),
         (o.baseState = s),
         (o.firstBaseUpdate = a),
         (o.lastBaseUpdate = h),
         (t = o.shared.interleaved),
         t !== null)
      ) {
         o = t;
         do (i |= o.lane), (o = o.next);
         while (o !== t);
      } else l === null && (o.shared.lanes = 0);
      (en |= i), (e.lanes = i), (e.memoizedState = m);
   }
}
function Gs(e, t, n) {
   if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
         var r = e[t],
            o = r.callback;
         if (o !== null) {
            if (((r.callback = null), (r = n), typeof o != "function"))
               throw Error(S(191, o));
            o.call(r);
         }
      }
}
var Zc = new Ya.Component().refs;
function ji(e, t, n, r) {
   (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Y({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
   isMounted: function (e) {
      return (e = e._reactInternals) ? rn(e) === e : !1;
   },
   enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ve(),
         o = Mt(e),
         l = dt(r, o);
      (l.payload = t),
         n != null && (l.callback = n),
         (t = $t(e, l, o)),
         t !== null && (Ge(t, e, o, r), wo(t, e, o));
   },
   enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ve(),
         o = Mt(e),
         l = dt(r, o);
      (l.tag = 1),
         (l.payload = t),
         n != null && (l.callback = n),
         (t = $t(e, l, o)),
         t !== null && (Ge(t, e, o, r), wo(t, e, o));
   },
   enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ve(),
         r = Mt(e),
         o = dt(n, r);
      (o.tag = 2),
         t != null && (o.callback = t),
         (t = $t(e, o, r)),
         t !== null && (Ge(t, e, r, n), wo(t, e, r));
   },
};
function Ys(e, t, n, r, o, l, i) {
   return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
         ? e.shouldComponentUpdate(r, l, i)
         : t.prototype && t.prototype.isPureReactComponent
         ? !_r(n, r) || !_r(o, l)
         : !0
   );
}
function Jc(e, t, n) {
   var r = !1,
      o = Ft,
      l = t.contextType;
   return (
      typeof l == "object" && l !== null
         ? (l = De(l))
         : ((o = Ee(t) ? Jt : ge.current),
           (r = t.contextTypes),
           (l = (r = r != null) ? Mn(e, o) : Ft)),
      (t = new t(n, l)),
      (e.memoizedState =
         t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
         ((e = e.stateNode),
         (e.__reactInternalMemoizedUnmaskedChildContext = o),
         (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
   );
}
function Xs(e, t, n, r) {
   (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
         t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
         t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function Di(e, t, n, r) {
   var o = e.stateNode;
   (o.props = n), (o.state = e.memoizedState), (o.refs = Zc), zu(e);
   var l = t.contextType;
   typeof l == "object" && l !== null
      ? (o.context = De(l))
      : ((l = Ee(t) ? Jt : ge.current), (o.context = Mn(e, l))),
      (o.state = e.memoizedState),
      (l = t.getDerivedStateFromProps),
      typeof l == "function" && (ji(e, t, l, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
         typeof o.getSnapshotBeforeUpdate == "function" ||
         (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
         ((t = o.state),
         typeof o.componentWillMount == "function" && o.componentWillMount(),
         typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
         t !== o.state && cl.enqueueReplaceState(o, o.state, null),
         Qo(e, n, o, r),
         (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function qn(e, t, n) {
   if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
   ) {
      if (n._owner) {
         if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(S(309));
            var r = n.stateNode;
         }
         if (!r) throw Error(S(147, e));
         var o = r,
            l = "" + e;
         return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === l
            ? t.ref
            : ((t = function (i) {
                 var u = o.refs;
                 u === Zc && (u = o.refs = {}),
                    i === null ? delete u[l] : (u[l] = i);
              }),
              (t._stringRef = l),
              t);
      }
      if (typeof e != "string") throw Error(S(284));
      if (!n._owner) throw Error(S(290, e));
   }
   return e;
}
function uo(e, t) {
   throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
         S(
            31,
            e === "[object Object]"
               ? "object with keys {" + Object.keys(t).join(", ") + "}"
               : e
         )
      ))
   );
}
function Zs(e) {
   var t = e._init;
   return t(e._payload);
}
function qc(e) {
   function t(f, c) {
      if (e) {
         var d = f.deletions;
         d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
      }
   }
   function n(f, c) {
      if (!e) return null;
      for (; c !== null; ) t(f, c), (c = c.sibling);
      return null;
   }
   function r(f, c) {
      for (f = new Map(); c !== null; )
         c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
      return f;
   }
   function o(f, c) {
      return (f = It(f, c)), (f.index = 0), (f.sibling = null), f;
   }
   function l(f, c, d) {
      return (
         (f.index = d),
         e
            ? ((d = f.alternate),
              d !== null
                 ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
                 : ((f.flags |= 2), c))
            : ((f.flags |= 1048576), c)
      );
   }
   function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
   }
   function u(f, c, d, w) {
      return c === null || c.tag !== 6
         ? ((c = ti(d, f.mode, w)), (c.return = f), c)
         : ((c = o(c, d)), (c.return = f), c);
   }
   function s(f, c, d, w) {
      var x = d.type;
      return x === mn
         ? h(f, c, d.props.children, w, d.key)
         : c !== null &&
           (c.elementType === x ||
              (typeof x == "object" &&
                 x !== null &&
                 x.$$typeof === xt &&
                 Zs(x) === c.type))
         ? ((w = o(c, d.props)), (w.ref = qn(f, c, d)), (w.return = f), w)
         : ((w = _o(d.type, d.key, d.props, null, f.mode, w)),
           (w.ref = qn(f, c, d)),
           (w.return = f),
           w);
   }
   function a(f, c, d, w) {
      return c === null ||
         c.tag !== 4 ||
         c.stateNode.containerInfo !== d.containerInfo ||
         c.stateNode.implementation !== d.implementation
         ? ((c = ni(d, f.mode, w)), (c.return = f), c)
         : ((c = o(c, d.children || [])), (c.return = f), c);
   }
   function h(f, c, d, w, x) {
      return c === null || c.tag !== 7
         ? ((c = Zt(d, f.mode, w, x)), (c.return = f), c)
         : ((c = o(c, d)), (c.return = f), c);
   }
   function m(f, c, d) {
      if ((typeof c == "string" && c !== "") || typeof c == "number")
         return (c = ti("" + c, f.mode, d)), (c.return = f), c;
      if (typeof c == "object" && c !== null) {
         switch (c.$$typeof) {
            case Zr:
               return (
                  (d = _o(c.type, c.key, c.props, null, f.mode, d)),
                  (d.ref = qn(f, null, c)),
                  (d.return = f),
                  d
               );
            case pn:
               return (c = ni(c, f.mode, d)), (c.return = f), c;
            case xt:
               var w = c._init;
               return m(f, w(c._payload), d);
         }
         if (lr(c) || Gn(c))
            return (c = Zt(c, f.mode, d, null)), (c.return = f), c;
         uo(f, c);
      }
      return null;
   }
   function p(f, c, d, w) {
      var x = c !== null ? c.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
         return x !== null ? null : u(f, c, "" + d, w);
      if (typeof d == "object" && d !== null) {
         switch (d.$$typeof) {
            case Zr:
               return d.key === x ? s(f, c, d, w) : null;
            case pn:
               return d.key === x ? a(f, c, d, w) : null;
            case xt:
               return (x = d._init), p(f, c, x(d._payload), w);
         }
         if (lr(d) || Gn(d)) return x !== null ? null : h(f, c, d, w, null);
         uo(f, d);
      }
      return null;
   }
   function v(f, c, d, w, x) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
         return (f = f.get(d) || null), u(c, f, "" + w, x);
      if (typeof w == "object" && w !== null) {
         switch (w.$$typeof) {
            case Zr:
               return (
                  (f = f.get(w.key === null ? d : w.key) || null), s(c, f, w, x)
               );
            case pn:
               return (
                  (f = f.get(w.key === null ? d : w.key) || null), a(c, f, w, x)
               );
            case xt:
               var C = w._init;
               return v(f, c, d, C(w._payload), x);
         }
         if (lr(w) || Gn(w)) return (f = f.get(d) || null), h(c, f, w, x, null);
         uo(c, w);
      }
      return null;
   }
   function y(f, c, d, w) {
      for (
         var x = null, C = null, k = c, T = (c = 0), N = null;
         k !== null && T < d.length;
         T++
      ) {
         k.index > T ? ((N = k), (k = null)) : (N = k.sibling);
         var O = p(f, k, d[T], w);
         if (O === null) {
            k === null && (k = N);
            break;
         }
         e && k && O.alternate === null && t(f, k),
            (c = l(O, c, T)),
            C === null ? (x = O) : (C.sibling = O),
            (C = O),
            (k = N);
      }
      if (T === d.length) return n(f, k), K && Vt(f, T), x;
      if (k === null) {
         for (; T < d.length; T++)
            (k = m(f, d[T], w)),
               k !== null &&
                  ((c = l(k, c, T)),
                  C === null ? (x = k) : (C.sibling = k),
                  (C = k));
         return K && Vt(f, T), x;
      }
      for (k = r(f, k); T < d.length; T++)
         (N = v(k, f, T, d[T], w)),
            N !== null &&
               (e &&
                  N.alternate !== null &&
                  k.delete(N.key === null ? T : N.key),
               (c = l(N, c, T)),
               C === null ? (x = N) : (C.sibling = N),
               (C = N));
      return (
         e &&
            k.forEach(function (ne) {
               return t(f, ne);
            }),
         K && Vt(f, T),
         x
      );
   }
   function g(f, c, d, w) {
      var x = Gn(d);
      if (typeof x != "function") throw Error(S(150));
      if (((d = x.call(d)), d == null)) throw Error(S(151));
      for (
         var C = (x = null), k = c, T = (c = 0), N = null, O = d.next();
         k !== null && !O.done;
         T++, O = d.next()
      ) {
         k.index > T ? ((N = k), (k = null)) : (N = k.sibling);
         var ne = p(f, k, O.value, w);
         if (ne === null) {
            k === null && (k = N);
            break;
         }
         e && k && ne.alternate === null && t(f, k),
            (c = l(ne, c, T)),
            C === null ? (x = ne) : (C.sibling = ne),
            (C = ne),
            (k = N);
      }
      if (O.done) return n(f, k), K && Vt(f, T), x;
      if (k === null) {
         for (; !O.done; T++, O = d.next())
            (O = m(f, O.value, w)),
               O !== null &&
                  ((c = l(O, c, T)),
                  C === null ? (x = O) : (C.sibling = O),
                  (C = O));
         return K && Vt(f, T), x;
      }
      for (k = r(f, k); !O.done; T++, O = d.next())
         (O = v(k, f, T, O.value, w)),
            O !== null &&
               (e &&
                  O.alternate !== null &&
                  k.delete(O.key === null ? T : O.key),
               (c = l(O, c, T)),
               C === null ? (x = O) : (C.sibling = O),
               (C = O));
      return (
         e &&
            k.forEach(function (Ze) {
               return t(f, Ze);
            }),
         K && Vt(f, T),
         x
      );
   }
   function E(f, c, d, w) {
      if (
         (typeof d == "object" &&
            d !== null &&
            d.type === mn &&
            d.key === null &&
            (d = d.props.children),
         typeof d == "object" && d !== null)
      ) {
         switch (d.$$typeof) {
            case Zr:
               e: {
                  for (var x = d.key, C = c; C !== null; ) {
                     if (C.key === x) {
                        if (((x = d.type), x === mn)) {
                           if (C.tag === 7) {
                              n(f, C.sibling),
                                 (c = o(C, d.props.children)),
                                 (c.return = f),
                                 (f = c);
                              break e;
                           }
                        } else if (
                           C.elementType === x ||
                           (typeof x == "object" &&
                              x !== null &&
                              x.$$typeof === xt &&
                              Zs(x) === C.type)
                        ) {
                           n(f, C.sibling),
                              (c = o(C, d.props)),
                              (c.ref = qn(f, C, d)),
                              (c.return = f),
                              (f = c);
                           break e;
                        }
                        n(f, C);
                        break;
                     } else t(f, C);
                     C = C.sibling;
                  }
                  d.type === mn
                     ? ((c = Zt(d.props.children, f.mode, w, d.key)),
                       (c.return = f),
                       (f = c))
                     : ((w = _o(d.type, d.key, d.props, null, f.mode, w)),
                       (w.ref = qn(f, c, d)),
                       (w.return = f),
                       (f = w));
               }
               return i(f);
            case pn:
               e: {
                  for (C = d.key; c !== null; ) {
                     if (c.key === C)
                        if (
                           c.tag === 4 &&
                           c.stateNode.containerInfo === d.containerInfo &&
                           c.stateNode.implementation === d.implementation
                        ) {
                           n(f, c.sibling),
                              (c = o(c, d.children || [])),
                              (c.return = f),
                              (f = c);
                           break e;
                        } else {
                           n(f, c);
                           break;
                        }
                     else t(f, c);
                     c = c.sibling;
                  }
                  (c = ni(d, f.mode, w)), (c.return = f), (f = c);
               }
               return i(f);
            case xt:
               return (C = d._init), E(f, c, C(d._payload), w);
         }
         if (lr(d)) return y(f, c, d, w);
         if (Gn(d)) return g(f, c, d, w);
         uo(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
         ? ((d = "" + d),
           c !== null && c.tag === 6
              ? (n(f, c.sibling), (c = o(c, d)), (c.return = f), (f = c))
              : (n(f, c), (c = ti(d, f.mode, w)), (c.return = f), (f = c)),
           i(f))
         : n(f, c);
   }
   return E;
}
var An = qc(!0),
   bc = qc(!1),
   Hr = {},
   it = Dt(Hr),
   Nr = Dt(Hr),
   zr = Dt(Hr);
function Yt(e) {
   if (e === Hr) throw Error(S(174));
   return e;
}
function Ru(e, t) {
   switch ((U(zr, t), U(Nr, e), U(it, Hr), (e = t.nodeType), e)) {
      case 9:
      case 11:
         t = (t = t.documentElement) ? t.namespaceURI : yi(null, "");
         break;
      default:
         (e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = yi(t, e));
   }
   H(it), U(it, t);
}
function Fn() {
   H(it), H(Nr), H(zr);
}
function ef(e) {
   Yt(zr.current);
   var t = Yt(it.current),
      n = yi(t, e.type);
   t !== n && (U(Nr, e), U(it, n));
}
function $u(e) {
   Nr.current === e && (H(it), H(Nr));
}
var Q = Dt(0);
function Go(e) {
   for (var t = e; t !== null; ) {
      if (t.tag === 13) {
         var n = t.memoizedState;
         if (
            n !== null &&
            ((n = n.dehydrated),
            n === null || n.data === "$?" || n.data === "$!")
         )
            return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
         if (t.flags & 128) return t;
      } else if (t.child !== null) {
         (t.child.return = t), (t = t.child);
         continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
         if (t.return === null || t.return === e) return null;
         t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
   }
   return null;
}
var Xl = [];
function Lu() {
   for (var e = 0; e < Xl.length; e++)
      Xl[e]._workInProgressVersionPrimary = null;
   Xl.length = 0;
}
var So = St.ReactCurrentDispatcher,
   Zl = St.ReactCurrentBatchConfig,
   bt = 0,
   G = null,
   re = null,
   ie = null,
   Yo = !1,
   pr = !1,
   Rr = 0,
   h0 = 0;
function de() {
   throw Error(S(321));
}
function Mu(e, t) {
   if (t === null) return !1;
   for (var n = 0; n < t.length && n < e.length; n++)
      if (!Xe(e[n], t[n])) return !1;
   return !0;
}
function Iu(e, t, n, r, o, l) {
   if (
      ((bt = l),
      (G = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (So.current = e === null || e.memoizedState === null ? w0 : S0),
      (e = n(r, o)),
      pr)
   ) {
      l = 0;
      do {
         if (((pr = !1), (Rr = 0), 25 <= l)) throw Error(S(301));
         (l += 1),
            (ie = re = null),
            (t.updateQueue = null),
            (So.current = k0),
            (e = n(r, o));
      } while (pr);
   }
   if (
      ((So.current = Xo),
      (t = re !== null && re.next !== null),
      (bt = 0),
      (ie = re = G = null),
      (Yo = !1),
      t)
   )
      throw Error(S(300));
   return e;
}
function Au() {
   var e = Rr !== 0;
   return (Rr = 0), e;
}
function et() {
   var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
   };
   return ie === null ? (G.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function Be() {
   if (re === null) {
      var e = G.alternate;
      e = e !== null ? e.memoizedState : null;
   } else e = re.next;
   var t = ie === null ? G.memoizedState : ie.next;
   if (t !== null) (ie = t), (re = e);
   else {
      if (e === null) throw Error(S(310));
      (re = e),
         (e = {
            memoizedState: re.memoizedState,
            baseState: re.baseState,
            baseQueue: re.baseQueue,
            queue: re.queue,
            next: null,
         }),
         ie === null ? (G.memoizedState = ie = e) : (ie = ie.next = e);
   }
   return ie;
}
function $r(e, t) {
   return typeof t == "function" ? t(e) : t;
}
function Jl(e) {
   var t = Be(),
      n = t.queue;
   if (n === null) throw Error(S(311));
   n.lastRenderedReducer = e;
   var r = re,
      o = r.baseQueue,
      l = n.pending;
   if (l !== null) {
      if (o !== null) {
         var i = o.next;
         (o.next = l.next), (l.next = i);
      }
      (r.baseQueue = o = l), (n.pending = null);
   }
   if (o !== null) {
      (l = o.next), (r = r.baseState);
      var u = (i = null),
         s = null,
         a = l;
      do {
         var h = a.lane;
         if ((bt & h) === h)
            s !== null &&
               (s = s.next =
                  {
                     lane: 0,
                     action: a.action,
                     hasEagerState: a.hasEagerState,
                     eagerState: a.eagerState,
                     next: null,
                  }),
               (r = a.hasEagerState ? a.eagerState : e(r, a.action));
         else {
            var m = {
               lane: h,
               action: a.action,
               hasEagerState: a.hasEagerState,
               eagerState: a.eagerState,
               next: null,
            };
            s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
               (G.lanes |= h),
               (en |= h);
         }
         a = a.next;
      } while (a !== null && a !== l);
      s === null ? (i = r) : (s.next = u),
         Xe(r, t.memoizedState) || (xe = !0),
         (t.memoizedState = r),
         (t.baseState = i),
         (t.baseQueue = s),
         (n.lastRenderedState = r);
   }
   if (((e = n.interleaved), e !== null)) {
      o = e;
      do (l = o.lane), (G.lanes |= l), (en |= l), (o = o.next);
      while (o !== e);
   } else o === null && (n.lanes = 0);
   return [t.memoizedState, n.dispatch];
}
function ql(e) {
   var t = Be(),
      n = t.queue;
   if (n === null) throw Error(S(311));
   n.lastRenderedReducer = e;
   var r = n.dispatch,
      o = n.pending,
      l = t.memoizedState;
   if (o !== null) {
      n.pending = null;
      var i = (o = o.next);
      do (l = e(l, i.action)), (i = i.next);
      while (i !== o);
      Xe(l, t.memoizedState) || (xe = !0),
         (t.memoizedState = l),
         t.baseQueue === null && (t.baseState = l),
         (n.lastRenderedState = l);
   }
   return [l, r];
}
function tf() {}
function nf(e, t) {
   var n = G,
      r = Be(),
      o = t(),
      l = !Xe(r.memoizedState, o);
   if (
      (l && ((r.memoizedState = o), (xe = !0)),
      (r = r.queue),
      Fu(lf.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || l || (ie !== null && ie.memoizedState.tag & 1))
   ) {
      if (
         ((n.flags |= 2048),
         Lr(9, of.bind(null, n, r, o, t), void 0, null),
         ue === null)
      )
         throw Error(S(349));
      bt & 30 || rf(n, t, o);
   }
   return o;
}
function rf(e, t, n) {
   (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = G.updateQueue),
      t === null
         ? ((t = { lastEffect: null, stores: null }),
           (G.updateQueue = t),
           (t.stores = [e]))
         : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function of(e, t, n, r) {
   (t.value = n), (t.getSnapshot = r), uf(t) && sf(e);
}
function lf(e, t, n) {
   return n(function () {
      uf(t) && sf(e);
   });
}
function uf(e) {
   var t = e.getSnapshot;
   e = e.value;
   try {
      var n = t();
      return !Xe(e, n);
   } catch {
      return !0;
   }
}
function sf(e) {
   var t = yt(e, 1);
   t !== null && Ge(t, e, 1, -1);
}
function Js(e) {
   var t = et();
   return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
         pending: null,
         interleaved: null,
         lanes: 0,
         dispatch: null,
         lastRenderedReducer: $r,
         lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = v0.bind(null, G, e)),
      [t.memoizedState, e]
   );
}
function Lr(e, t, n, r) {
   return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = G.updateQueue),
      t === null
         ? ((t = { lastEffect: null, stores: null }),
           (G.updateQueue = t),
           (t.lastEffect = e.next = e))
         : ((n = t.lastEffect),
           n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
   );
}
function af() {
   return Be().memoizedState;
}
function ko(e, t, n, r) {
   var o = et();
   (G.flags |= e),
      (o.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
   var o = Be();
   r = r === void 0 ? null : r;
   var l = void 0;
   if (re !== null) {
      var i = re.memoizedState;
      if (((l = i.destroy), r !== null && Mu(r, i.deps))) {
         o.memoizedState = Lr(t, n, l, r);
         return;
      }
   }
   (G.flags |= e), (o.memoizedState = Lr(1 | t, n, l, r));
}
function qs(e, t) {
   return ko(8390656, 8, e, t);
}
function Fu(e, t) {
   return fl(2048, 8, e, t);
}
function cf(e, t) {
   return fl(4, 2, e, t);
}
function ff(e, t) {
   return fl(4, 4, e, t);
}
function df(e, t) {
   if (typeof t == "function")
      return (
         (e = e()),
         t(e),
         function () {
            t(null);
         }
      );
   if (t != null)
      return (
         (e = e()),
         (t.current = e),
         function () {
            t.current = null;
         }
      );
}
function pf(e, t, n) {
   return (
      (n = n != null ? n.concat([e]) : null), fl(4, 4, df.bind(null, t, e), n)
   );
}
function ju() {}
function mf(e, t) {
   var n = Be();
   t = t === void 0 ? null : t;
   var r = n.memoizedState;
   return r !== null && t !== null && Mu(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
}
function hf(e, t) {
   var n = Be();
   t = t === void 0 ? null : t;
   var r = n.memoizedState;
   return r !== null && t !== null && Mu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gf(e, t, n) {
   return bt & 21
      ? (Xe(n, t) ||
           ((n = vc()), (G.lanes |= n), (en |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function g0(e, t) {
   var n = D;
   (D = n !== 0 && 4 > n ? n : 4), e(!0);
   var r = Zl.transition;
   Zl.transition = {};
   try {
      e(!1), t();
   } finally {
      (D = n), (Zl.transition = r);
   }
}
function yf() {
   return Be().memoizedState;
}
function y0(e, t, n) {
   var r = Mt(e);
   if (
      ((n = {
         lane: r,
         action: n,
         hasEagerState: !1,
         eagerState: null,
         next: null,
      }),
      vf(e))
   )
      wf(t, n);
   else if (((n = Yc(e, t, n, r)), n !== null)) {
      var o = ve();
      Ge(n, e, r, o), Sf(n, t, r);
   }
}
function v0(e, t, n) {
   var r = Mt(e),
      o = {
         lane: r,
         action: n,
         hasEagerState: !1,
         eagerState: null,
         next: null,
      };
   if (vf(e)) wf(t, o);
   else {
      var l = e.alternate;
      if (
         e.lanes === 0 &&
         (l === null || l.lanes === 0) &&
         ((l = t.lastRenderedReducer), l !== null)
      )
         try {
            var i = t.lastRenderedState,
               u = l(i, n);
            if (((o.hasEagerState = !0), (o.eagerState = u), Xe(u, i))) {
               var s = t.interleaved;
               s === null
                  ? ((o.next = o), Nu(t))
                  : ((o.next = s.next), (s.next = o)),
                  (t.interleaved = o);
               return;
            }
         } catch {
         } finally {
         }
      (n = Yc(e, t, o, r)),
         n !== null && ((o = ve()), Ge(n, e, r, o), Sf(n, t, r));
   }
}
function vf(e) {
   var t = e.alternate;
   return e === G || (t !== null && t === G);
}
function wf(e, t) {
   pr = Yo = !0;
   var n = e.pending;
   n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
}
function Sf(e, t, n) {
   if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), hu(e, n);
   }
}
var Xo = {
      readContext: De,
      useCallback: de,
      useContext: de,
      useEffect: de,
      useImperativeHandle: de,
      useInsertionEffect: de,
      useLayoutEffect: de,
      useMemo: de,
      useReducer: de,
      useRef: de,
      useState: de,
      useDebugValue: de,
      useDeferredValue: de,
      useTransition: de,
      useMutableSource: de,
      useSyncExternalStore: de,
      useId: de,
      unstable_isNewReconciler: !1,
   },
   w0 = {
      readContext: De,
      useCallback: function (e, t) {
         return (et().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: De,
      useEffect: qs,
      useImperativeHandle: function (e, t, n) {
         return (
            (n = n != null ? n.concat([e]) : null),
            ko(4194308, 4, df.bind(null, t, e), n)
         );
      },
      useLayoutEffect: function (e, t) {
         return ko(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
         return ko(4, 2, e, t);
      },
      useMemo: function (e, t) {
         var n = et();
         return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
         );
      },
      useReducer: function (e, t, n) {
         var r = et();
         return (
            (t = n !== void 0 ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
               pending: null,
               interleaved: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: e,
               lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = y0.bind(null, G, e)),
            [r.memoizedState, e]
         );
      },
      useRef: function (e) {
         var t = et();
         return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Js,
      useDebugValue: ju,
      useDeferredValue: function (e) {
         return (et().memoizedState = e);
      },
      useTransition: function () {
         var e = Js(!1),
            t = e[0];
         return (e = g0.bind(null, e[1])), (et().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
         var r = G,
            o = et();
         if (K) {
            if (n === void 0) throw Error(S(407));
            n = n();
         } else {
            if (((n = t()), ue === null)) throw Error(S(349));
            bt & 30 || rf(r, t, n);
         }
         o.memoizedState = n;
         var l = { value: n, getSnapshot: t };
         return (
            (o.queue = l),
            qs(lf.bind(null, r, l, e), [e]),
            (r.flags |= 2048),
            Lr(9, of.bind(null, r, l, n, t), void 0, null),
            n
         );
      },
      useId: function () {
         var e = et(),
            t = ue.identifierPrefix;
         if (K) {
            var n = ft,
               r = ct;
            (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
               (t = ":" + t + "R" + n),
               (n = Rr++),
               0 < n && (t += "H" + n.toString(32)),
               (t += ":");
         } else (n = h0++), (t = ":" + t + "r" + n.toString(32) + ":");
         return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
   },
   S0 = {
      readContext: De,
      useCallback: mf,
      useContext: De,
      useEffect: Fu,
      useImperativeHandle: pf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: hf,
      useReducer: Jl,
      useRef: af,
      useState: function () {
         return Jl($r);
      },
      useDebugValue: ju,
      useDeferredValue: function (e) {
         var t = Be();
         return gf(t, re.memoizedState, e);
      },
      useTransition: function () {
         var e = Jl($r)[0],
            t = Be().memoizedState;
         return [e, t];
      },
      useMutableSource: tf,
      useSyncExternalStore: nf,
      useId: yf,
      unstable_isNewReconciler: !1,
   },
   k0 = {
      readContext: De,
      useCallback: mf,
      useContext: De,
      useEffect: Fu,
      useImperativeHandle: pf,
      useInsertionEffect: cf,
      useLayoutEffect: ff,
      useMemo: hf,
      useReducer: ql,
      useRef: af,
      useState: function () {
         return ql($r);
      },
      useDebugValue: ju,
      useDeferredValue: function (e) {
         var t = Be();
         return re === null
            ? (t.memoizedState = e)
            : gf(t, re.memoizedState, e);
      },
      useTransition: function () {
         var e = ql($r)[0],
            t = Be().memoizedState;
         return [e, t];
      },
      useMutableSource: tf,
      useSyncExternalStore: nf,
      useId: yf,
      unstable_isNewReconciler: !1,
   };
function jn(e, t) {
   try {
      var n = "",
         r = t;
      do (n += Xd(r)), (r = r.return);
      while (r);
      var o = n;
   } catch (l) {
      o =
         `
Error generating stack: ` +
         l.message +
         `
` +
         l.stack;
   }
   return { value: e, source: t, stack: o, digest: null };
}
function bl(e, t, n) {
   return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bi(e, t) {
   try {
      console.error(t.value);
   } catch (n) {
      setTimeout(function () {
         throw n;
      });
   }
}
var x0 = typeof WeakMap == "function" ? WeakMap : Map;
function kf(e, t, n) {
   (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
   var r = t.value;
   return (
      (n.callback = function () {
         Jo || ((Jo = !0), (Zi = r)), Bi(e, t);
      }),
      n
   );
}
function xf(e, t, n) {
   (n = dt(-1, n)), (n.tag = 3);
   var r = e.type.getDerivedStateFromError;
   if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
         return r(o);
      }),
         (n.callback = function () {
            Bi(e, t);
         });
   }
   var l = e.stateNode;
   return (
      l !== null &&
         typeof l.componentDidCatch == "function" &&
         (n.callback = function () {
            Bi(e, t),
               typeof r != "function" &&
                  (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
               componentStack: i !== null ? i : "",
            });
         }),
      n
   );
}
function bs(e, t, n) {
   var r = e.pingCache;
   if (r === null) {
      r = e.pingCache = new x0();
      var o = new Set();
      r.set(t, o);
   } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
   o.has(n) || (o.add(n), (e = A0.bind(null, e, t, n)), t.then(e, e));
}
function ea(e) {
   do {
      var t;
      if (
         ((t = e.tag === 13) &&
            ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
         t)
      )
         return e;
      e = e.return;
   } while (e !== null);
   return null;
}
function ta(e, t, n, r, o) {
   return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
           ? (e.flags |= 65536)
           : ((e.flags |= 128),
             (n.flags |= 131072),
             (n.flags &= -52805),
             n.tag === 1 &&
                (n.alternate === null
                   ? (n.tag = 17)
                   : ((t = dt(-1, 1)), (t.tag = 2), $t(n, t, 1))),
             (n.lanes |= 1)),
        e);
}
var C0 = St.ReactCurrentOwner,
   xe = !1;
function ye(e, t, n, r) {
   t.child = e === null ? bc(t, null, n, r) : An(t, e.child, n, r);
}
function na(e, t, n, r, o) {
   n = n.render;
   var l = t.ref;
   return (
      Nn(t, o),
      (r = Iu(e, t, n, r, l, o)),
      (n = Au()),
      e !== null && !xe
         ? ((t.updateQueue = e.updateQueue),
           (t.flags &= -2053),
           (e.lanes &= ~o),
           vt(e, t, o))
         : (K && n && Cu(t), (t.flags |= 1), ye(e, t, r, o), t.child)
   );
}
function ra(e, t, n, r, o) {
   if (e === null) {
      var l = n.type;
      return typeof l == "function" &&
         !Qu(l) &&
         l.defaultProps === void 0 &&
         n.compare === null &&
         n.defaultProps === void 0
         ? ((t.tag = 15), (t.type = l), Cf(e, t, l, r, o))
         : ((e = _o(n.type, null, r, t, t.mode, o)),
           (e.ref = t.ref),
           (e.return = t),
           (t.child = e));
   }
   if (((l = e.child), !(e.lanes & o))) {
      var i = l.memoizedProps;
      if (
         ((n = n.compare),
         (n = n !== null ? n : _r),
         n(i, r) && e.ref === t.ref)
      )
         return vt(e, t, o);
   }
   return (
      (t.flags |= 1),
      (e = It(l, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
   );
}
function Cf(e, t, n, r, o) {
   if (e !== null) {
      var l = e.memoizedProps;
      if (_r(l, r) && e.ref === t.ref)
         if (((xe = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
            e.flags & 131072 && (xe = !0);
         else return (t.lanes = e.lanes), vt(e, t, o);
   }
   return Ui(e, t, n, r, o);
}
function Ef(e, t, n) {
   var r = t.pendingProps,
      o = r.children,
      l = e !== null ? e.memoizedState : null;
   if (r.mode === "hidden")
      if (!(t.mode & 1))
         (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
         }),
            U(En, Te),
            (Te |= n);
      else {
         if (!(n & 1073741824))
            return (
               (e = l !== null ? l.baseLanes | n : n),
               (t.lanes = t.childLanes = 1073741824),
               (t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null,
               }),
               (t.updateQueue = null),
               U(En, Te),
               (Te |= e),
               null
            );
         (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
         }),
            (r = l !== null ? l.baseLanes : n),
            U(En, Te),
            (Te |= r);
      }
   else
      l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
         U(En, Te),
         (Te |= r);
   return ye(e, t, o, n), t.child;
}
function _f(e, t) {
   var n = t.ref;
   ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
}
function Ui(e, t, n, r, o) {
   var l = Ee(n) ? Jt : ge.current;
   return (
      (l = Mn(t, l)),
      Nn(t, o),
      (n = Iu(e, t, n, r, l, o)),
      (r = Au()),
      e !== null && !xe
         ? ((t.updateQueue = e.updateQueue),
           (t.flags &= -2053),
           (e.lanes &= ~o),
           vt(e, t, o))
         : (K && r && Cu(t), (t.flags |= 1), ye(e, t, n, o), t.child)
   );
}
function oa(e, t, n, r, o) {
   if (Ee(n)) {
      var l = !0;
      Uo(t);
   } else l = !1;
   if ((Nn(t, o), t.stateNode === null))
      xo(e, t), Jc(t, n, r), Di(t, n, r, o), (r = !0);
   else if (e === null) {
      var i = t.stateNode,
         u = t.memoizedProps;
      i.props = u;
      var s = i.context,
         a = n.contextType;
      typeof a == "object" && a !== null
         ? (a = De(a))
         : ((a = Ee(n) ? Jt : ge.current), (a = Mn(t, a)));
      var h = n.getDerivedStateFromProps,
         m =
            typeof h == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function";
      m ||
         (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
         ((u !== r || s !== a) && Xs(t, i, r, a)),
         (Ct = !1);
      var p = t.memoizedState;
      (i.state = p),
         Qo(t, r, i, o),
         (s = t.memoizedState),
         u !== r || p !== s || Ce.current || Ct
            ? (typeof h == "function" &&
                 (ji(t, n, h, r), (s = t.memoizedState)),
              (u = Ct || Ys(t, n, u, r, p, s, a))
                 ? (m ||
                      (typeof i.UNSAFE_componentWillMount != "function" &&
                         typeof i.componentWillMount != "function") ||
                      (typeof i.componentWillMount == "function" &&
                         i.componentWillMount(),
                      typeof i.UNSAFE_componentWillMount == "function" &&
                         i.UNSAFE_componentWillMount()),
                   typeof i.componentDidMount == "function" &&
                      (t.flags |= 4194308))
                 : (typeof i.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                   (t.memoizedProps = r),
                   (t.memoizedState = s)),
              (i.props = r),
              (i.state = s),
              (i.context = a),
              (r = u))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (r = !1));
   } else {
      (i = t.stateNode),
         Xc(e, t),
         (u = t.memoizedProps),
         (a = t.type === t.elementType ? u : We(t.type, u)),
         (i.props = a),
         (m = t.pendingProps),
         (p = i.context),
         (s = n.contextType),
         typeof s == "object" && s !== null
            ? (s = De(s))
            : ((s = Ee(n) ? Jt : ge.current), (s = Mn(t, s)));
      var v = n.getDerivedStateFromProps;
      (h =
         typeof v == "function" ||
         typeof i.getSnapshotBeforeUpdate == "function") ||
         (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
         ((u !== m || p !== s) && Xs(t, i, r, s)),
         (Ct = !1),
         (p = t.memoizedState),
         (i.state = p),
         Qo(t, r, i, o);
      var y = t.memoizedState;
      u !== m || p !== y || Ce.current || Ct
         ? (typeof v == "function" && (ji(t, n, v, r), (y = t.memoizedState)),
           (a = Ct || Ys(t, n, a, r, p, y, s) || !1)
              ? (h ||
                   (typeof i.UNSAFE_componentWillUpdate != "function" &&
                      typeof i.componentWillUpdate != "function") ||
                   (typeof i.componentWillUpdate == "function" &&
                      i.componentWillUpdate(r, y, s),
                   typeof i.UNSAFE_componentWillUpdate == "function" &&
                      i.UNSAFE_componentWillUpdate(r, y, s)),
                typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate == "function" &&
                   (t.flags |= 1024))
              : (typeof i.componentDidUpdate != "function" ||
                   (u === e.memoizedProps && p === e.memoizedState) ||
                   (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate != "function" ||
                   (u === e.memoizedProps && p === e.memoizedState) ||
                   (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = y)),
           (i.props = r),
           (i.state = y),
           (i.context = s),
           (r = a))
         : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
           typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
           (r = !1));
   }
   return Wi(e, t, n, r, l, o);
}
function Wi(e, t, n, r, o, l) {
   _f(e, t);
   var i = (t.flags & 128) !== 0;
   if (!r && !i) return o && Hs(t, n, !1), vt(e, t, l);
   (r = t.stateNode), (C0.current = t);
   var u =
      i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
   return (
      (t.flags |= 1),
      e !== null && i
         ? ((t.child = An(t, e.child, null, l)), (t.child = An(t, null, u, l)))
         : ye(e, t, u, l),
      (t.memoizedState = r.state),
      o && Hs(t, n, !0),
      t.child
   );
}
function Pf(e) {
   var t = e.stateNode;
   t.pendingContext
      ? Ws(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ws(e, t.context, !1),
      Ru(e, t.containerInfo);
}
function la(e, t, n, r, o) {
   return In(), _u(o), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var Hi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vi(e) {
   return { baseLanes: e, cachePool: null, transitions: null };
}
function Tf(e, t, n) {
   var r = t.pendingProps,
      o = Q.current,
      l = !1,
      i = (t.flags & 128) !== 0,
      u;
   if (
      ((u = i) ||
         (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      u
         ? ((l = !0), (t.flags &= -129))
         : (e === null || e.memoizedState !== null) && (o |= 1),
      U(Q, o & 1),
      e === null)
   )
      return (
         Ai(t),
         (e = t.memoizedState),
         e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1
                 ? e.data === "$!"
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824)
                 : (t.lanes = 1),
              null)
            : ((i = r.children),
              (e = r.fallback),
              l
                 ? ((r = t.mode),
                   (l = t.child),
                   (i = { mode: "hidden", children: i }),
                   !(r & 1) && l !== null
                      ? ((l.childLanes = 0), (l.pendingProps = i))
                      : (l = ml(i, r, 0, null)),
                   (e = Zt(e, r, n, null)),
                   (l.return = t),
                   (e.return = t),
                   (l.sibling = e),
                   (t.child = l),
                   (t.child.memoizedState = Vi(n)),
                   (t.memoizedState = Hi),
                   e)
                 : Du(t, i))
      );
   if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
      return E0(e, t, i, r, u, o, n);
   if (l) {
      (l = r.fallback), (i = t.mode), (o = e.child), (u = o.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
         !(i & 1) && t.child !== o
            ? ((r = t.child),
              (r.childLanes = 0),
              (r.pendingProps = s),
              (t.deletions = null))
            : ((r = It(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
         u !== null
            ? (l = It(u, l))
            : ((l = Zt(l, i, n, null)), (l.flags |= 2)),
         (l.return = t),
         (r.return = t),
         (r.sibling = l),
         (t.child = r),
         (r = l),
         (l = t.child),
         (i = e.child.memoizedState),
         (i =
            i === null
               ? Vi(n)
               : {
                    baseLanes: i.baseLanes | n,
                    cachePool: null,
                    transitions: i.transitions,
                 }),
         (l.memoizedState = i),
         (l.childLanes = e.childLanes & ~n),
         (t.memoizedState = Hi),
         r
      );
   }
   return (
      (l = e.child),
      (e = l.sibling),
      (r = It(l, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
         ((n = t.deletions),
         n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
   );
}
function Du(e, t) {
   return (
      (t = ml({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
   );
}
function so(e, t, n, r) {
   return (
      r !== null && _u(r),
      An(t, e.child, null, n),
      (e = Du(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
   );
}
function E0(e, t, n, r, o, l, i) {
   if (n)
      return t.flags & 256
         ? ((t.flags &= -257), (r = bl(Error(S(422)))), so(e, t, i, r))
         : t.memoizedState !== null
         ? ((t.child = e.child), (t.flags |= 128), null)
         : ((l = r.fallback),
           (o = t.mode),
           (r = ml({ mode: "visible", children: r.children }, o, 0, null)),
           (l = Zt(l, o, i, null)),
           (l.flags |= 2),
           (r.return = t),
           (l.return = t),
           (r.sibling = l),
           (t.child = r),
           t.mode & 1 && An(t, e.child, null, i),
           (t.child.memoizedState = Vi(i)),
           (t.memoizedState = Hi),
           l);
   if (!(t.mode & 1)) return so(e, t, i, null);
   if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
      return (
         (r = u), (l = Error(S(419))), (r = bl(l, r, void 0)), so(e, t, i, r)
      );
   }
   if (((u = (i & e.childLanes) !== 0), xe || u)) {
      if (((r = ue), r !== null)) {
         switch (i & -i) {
            case 4:
               o = 2;
               break;
            case 16:
               o = 8;
               break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
               o = 32;
               break;
            case 536870912:
               o = 268435456;
               break;
            default:
               o = 0;
         }
         (o = o & (r.suspendedLanes | i) ? 0 : o),
            o !== 0 &&
               o !== l.retryLane &&
               ((l.retryLane = o), yt(e, o), Ge(r, e, o, -1));
      }
      return Ku(), (r = bl(Error(S(421)))), so(e, t, i, r);
   }
   return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = F0.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = l.treeContext),
        (Ne = Rt(o.nextSibling)),
        (ze = t),
        (K = !0),
        (Ke = null),
        e !== null &&
           ((Ie[Ae++] = ct),
           (Ie[Ae++] = ft),
           (Ie[Ae++] = qt),
           (ct = e.id),
           (ft = e.overflow),
           (qt = t)),
        (t = Du(t, r.children)),
        (t.flags |= 4096),
        t);
}
function ia(e, t, n) {
   e.lanes |= t;
   var r = e.alternate;
   r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function ei(e, t, n, r, o) {
   var l = e.memoizedState;
   l === null
      ? (e.memoizedState = {
           isBackwards: t,
           rendering: null,
           renderingStartTime: 0,
           last: r,
           tail: n,
           tailMode: o,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = o));
}
function Of(e, t, n) {
   var r = t.pendingProps,
      o = r.revealOrder,
      l = r.tail;
   if ((ye(e, t, r.children, n), (r = Q.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
   else {
      if (e !== null && e.flags & 128)
         e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && ia(e, n, t);
            else if (e.tag === 19) ia(e, n, t);
            else if (e.child !== null) {
               (e.child.return = e), (e = e.child);
               continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
               if (e.return === null || e.return === t) break e;
               e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
         }
      r &= 1;
   }
   if ((U(Q, r), !(t.mode & 1))) t.memoizedState = null;
   else
      switch (o) {
         case "forwards":
            for (n = t.child, o = null; n !== null; )
               (e = n.alternate),
                  e !== null && Go(e) === null && (o = n),
                  (n = n.sibling);
            (n = o),
               n === null
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
               ei(t, !1, o, n, l);
            break;
         case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null; ) {
               if (((e = o.alternate), e !== null && Go(e) === null)) {
                  t.child = o;
                  break;
               }
               (e = o.sibling), (o.sibling = n), (n = o), (o = e);
            }
            ei(t, !0, n, null, l);
            break;
         case "together":
            ei(t, !1, null, null, void 0);
            break;
         default:
            t.memoizedState = null;
      }
   return t.child;
}
function xo(e, t) {
   !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
   if (
      (e !== null && (t.dependencies = e.dependencies),
      (en |= t.lanes),
      !(n & t.childLanes))
   )
      return null;
   if (e !== null && t.child !== e.child) throw Error(S(153));
   if (t.child !== null) {
      for (
         e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
         e.sibling !== null;

      )
         (e = e.sibling),
            (n = n.sibling = It(e, e.pendingProps)),
            (n.return = t);
      n.sibling = null;
   }
   return t.child;
}
function _0(e, t, n) {
   switch (t.tag) {
      case 3:
         Pf(t), In();
         break;
      case 5:
         ef(t);
         break;
      case 1:
         Ee(t.type) && Uo(t);
         break;
      case 4:
         Ru(t, t.stateNode.containerInfo);
         break;
      case 10:
         var r = t.type._context,
            o = t.memoizedProps.value;
         U(Vo, r._currentValue), (r._currentValue = o);
         break;
      case 13:
         if (((r = t.memoizedState), r !== null))
            return r.dehydrated !== null
               ? (U(Q, Q.current & 1), (t.flags |= 128), null)
               : n & t.child.childLanes
               ? Tf(e, t, n)
               : (U(Q, Q.current & 1),
                 (e = vt(e, t, n)),
                 e !== null ? e.sibling : null);
         U(Q, Q.current & 1);
         break;
      case 19:
         if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return Of(e, t, n);
            t.flags |= 128;
         }
         if (
            ((o = t.memoizedState),
            o !== null &&
               ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
            U(Q, Q.current),
            r)
         )
            break;
         return null;
      case 22:
      case 23:
         return (t.lanes = 0), Ef(e, t, n);
   }
   return vt(e, t, n);
}
var Nf, Ki, zf, Rf;
Nf = function (e, t) {
   for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
         (n.child.return = n), (n = n.child);
         continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
         if (n.return === null || n.return === t) return;
         n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
   }
};
Ki = function () {};
zf = function (e, t, n, r) {
   var o = e.memoizedProps;
   if (o !== r) {
      (e = t.stateNode), Yt(it.current);
      var l = null;
      switch (n) {
         case "input":
            (o = pi(e, o)), (r = pi(e, r)), (l = []);
            break;
         case "select":
            (o = Y({}, o, { value: void 0 })),
               (r = Y({}, r, { value: void 0 })),
               (l = []);
            break;
         case "textarea":
            (o = gi(e, o)), (r = gi(e, r)), (l = []);
            break;
         default:
            typeof o.onClick != "function" &&
               typeof r.onClick == "function" &&
               (e.onclick = Do);
      }
      vi(n, r);
      var i;
      n = null;
      for (a in o)
         if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
            if (a === "style") {
               var u = o[a];
               for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
               a !== "dangerouslySetInnerHTML" &&
                  a !== "children" &&
                  a !== "suppressContentEditableWarning" &&
                  a !== "suppressHydrationWarning" &&
                  a !== "autoFocus" &&
                  (vr.hasOwnProperty(a)
                     ? l || (l = [])
                     : (l = l || []).push(a, null));
      for (a in r) {
         var s = r[a];
         if (
            ((u = o != null ? o[a] : void 0),
            r.hasOwnProperty(a) && s !== u && (s != null || u != null))
         )
            if (a === "style")
               if (u) {
                  for (i in u)
                     !u.hasOwnProperty(i) ||
                        (s && s.hasOwnProperty(i)) ||
                        (n || (n = {}), (n[i] = ""));
                  for (i in s)
                     s.hasOwnProperty(i) &&
                        u[i] !== s[i] &&
                        (n || (n = {}), (n[i] = s[i]));
               } else n || (l || (l = []), l.push(a, n)), (n = s);
            else
               a === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0),
                    (u = u ? u.__html : void 0),
                    s != null && u !== s && (l = l || []).push(a, s))
                  : a === "children"
                  ? (typeof s != "string" && typeof s != "number") ||
                    (l = l || []).push(a, "" + s)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    (vr.hasOwnProperty(a)
                       ? (s != null && a === "onScroll" && W("scroll", e),
                         l || u === s || (l = []))
                       : (l = l || []).push(a, s));
      }
      n && (l = l || []).push("style", n);
      var a = l;
      (t.updateQueue = a) && (t.flags |= 4);
   }
};
Rf = function (e, t, n, r) {
   n !== r && (t.flags |= 4);
};
function bn(e, t) {
   if (!K)
      switch (e.tailMode) {
         case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
               t.alternate !== null && (n = t), (t = t.sibling);
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
         case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
               n.alternate !== null && (r = n), (n = n.sibling);
            r === null
               ? t || e.tail === null
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
               : (r.sibling = null);
      }
}
function pe(e) {
   var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
   if (t)
      for (var o = e.child; o !== null; )
         (n |= o.lanes | o.childLanes),
            (r |= o.subtreeFlags & 14680064),
            (r |= o.flags & 14680064),
            (o.return = e),
            (o = o.sibling);
   else
      for (o = e.child; o !== null; )
         (n |= o.lanes | o.childLanes),
            (r |= o.subtreeFlags),
            (r |= o.flags),
            (o.return = e),
            (o = o.sibling);
   return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function P0(e, t, n) {
   var r = t.pendingProps;
   switch ((Eu(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
         return pe(t), null;
      case 1:
         return Ee(t.type) && Bo(), pe(t), null;
      case 3:
         return (
            (r = t.stateNode),
            Fn(),
            H(Ce),
            H(ge),
            Lu(),
            r.pendingContext &&
               ((r.context = r.pendingContext), (r.pendingContext = null)),
            (e === null || e.child === null) &&
               (io(t)
                  ? (t.flags |= 4)
                  : e === null ||
                    (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                    ((t.flags |= 1024), Ke !== null && (bi(Ke), (Ke = null)))),
            Ki(e, t),
            pe(t),
            null
         );
      case 5:
         $u(t);
         var o = Yt(zr.current);
         if (((n = t.type), e !== null && t.stateNode != null))
            zf(e, t, n, r, o),
               e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
         else {
            if (!r) {
               if (t.stateNode === null) throw Error(S(166));
               return pe(t), null;
            }
            if (((e = Yt(it.current)), io(t))) {
               (r = t.stateNode), (n = t.type);
               var l = t.memoizedProps;
               switch (
                  ((r[rt] = t), (r[Or] = l), (e = (t.mode & 1) !== 0), n)
               ) {
                  case "dialog":
                     W("cancel", r), W("close", r);
                     break;
                  case "iframe":
                  case "object":
                  case "embed":
                     W("load", r);
                     break;
                  case "video":
                  case "audio":
                     for (o = 0; o < ur.length; o++) W(ur[o], r);
                     break;
                  case "source":
                     W("error", r);
                     break;
                  case "img":
                  case "image":
                  case "link":
                     W("error", r), W("load", r);
                     break;
                  case "details":
                     W("toggle", r);
                     break;
                  case "input":
                     hs(r, l), W("invalid", r);
                     break;
                  case "select":
                     (r._wrapperState = { wasMultiple: !!l.multiple }),
                        W("invalid", r);
                     break;
                  case "textarea":
                     ys(r, l), W("invalid", r);
               }
               vi(n, l), (o = null);
               for (var i in l)
                  if (l.hasOwnProperty(i)) {
                     var u = l[i];
                     i === "children"
                        ? typeof u == "string"
                           ? r.textContent !== u &&
                             (l.suppressHydrationWarning !== !0 &&
                                lo(r.textContent, u, e),
                             (o = ["children", u]))
                           : typeof u == "number" &&
                             r.textContent !== "" + u &&
                             (l.suppressHydrationWarning !== !0 &&
                                lo(r.textContent, u, e),
                             (o = ["children", "" + u]))
                        : vr.hasOwnProperty(i) &&
                          u != null &&
                          i === "onScroll" &&
                          W("scroll", r);
                  }
               switch (n) {
                  case "input":
                     Jr(r), gs(r, l, !0);
                     break;
                  case "textarea":
                     Jr(r), vs(r);
                     break;
                  case "select":
                  case "option":
                     break;
                  default:
                     typeof l.onClick == "function" && (r.onclick = Do);
               }
               (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
            } else {
               (i = o.nodeType === 9 ? o : o.ownerDocument),
                  e === "http://www.w3.org/1999/xhtml" && (e = rc(n)),
                  e === "http://www.w3.org/1999/xhtml"
                     ? n === "script"
                        ? ((e = i.createElement("div")),
                          (e.innerHTML = "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : typeof r.is == "string"
                        ? (e = i.createElement(n, { is: r.is }))
                        : ((e = i.createElement(n)),
                          n === "select" &&
                             ((i = e),
                             r.multiple
                                ? (i.multiple = !0)
                                : r.size && (i.size = r.size)))
                     : (e = i.createElementNS(e, n)),
                  (e[rt] = t),
                  (e[Or] = r),
                  Nf(e, t, !1, !1),
                  (t.stateNode = e);
               e: {
                  switch (((i = wi(n, r)), n)) {
                     case "dialog":
                        W("cancel", e), W("close", e), (o = r);
                        break;
                     case "iframe":
                     case "object":
                     case "embed":
                        W("load", e), (o = r);
                        break;
                     case "video":
                     case "audio":
                        for (o = 0; o < ur.length; o++) W(ur[o], e);
                        o = r;
                        break;
                     case "source":
                        W("error", e), (o = r);
                        break;
                     case "img":
                     case "image":
                     case "link":
                        W("error", e), W("load", e), (o = r);
                        break;
                     case "details":
                        W("toggle", e), (o = r);
                        break;
                     case "input":
                        hs(e, r), (o = pi(e, r)), W("invalid", e);
                        break;
                     case "option":
                        o = r;
                        break;
                     case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                           (o = Y({}, r, { value: void 0 })),
                           W("invalid", e);
                        break;
                     case "textarea":
                        ys(e, r), (o = gi(e, r)), W("invalid", e);
                        break;
                     default:
                        o = r;
                  }
                  vi(n, o), (u = o);
                  for (l in u)
                     if (u.hasOwnProperty(l)) {
                        var s = u[l];
                        l === "style"
                           ? ic(e, s)
                           : l === "dangerouslySetInnerHTML"
                           ? ((s = s ? s.__html : void 0),
                             s != null && oc(e, s))
                           : l === "children"
                           ? typeof s == "string"
                              ? (n !== "textarea" || s !== "") && wr(e, s)
                              : typeof s == "number" && wr(e, "" + s)
                           : l !== "suppressContentEditableWarning" &&
                             l !== "suppressHydrationWarning" &&
                             l !== "autoFocus" &&
                             (vr.hasOwnProperty(l)
                                ? s != null &&
                                  l === "onScroll" &&
                                  W("scroll", e)
                                : s != null && au(e, l, s, i));
                     }
                  switch (n) {
                     case "input":
                        Jr(e), gs(e, r, !1);
                        break;
                     case "textarea":
                        Jr(e), vs(e);
                        break;
                     case "option":
                        r.value != null &&
                           e.setAttribute("value", "" + At(r.value));
                        break;
                     case "select":
                        (e.multiple = !!r.multiple),
                           (l = r.value),
                           l != null
                              ? _n(e, !!r.multiple, l, !1)
                              : r.defaultValue != null &&
                                _n(e, !!r.multiple, r.defaultValue, !0);
                        break;
                     default:
                        typeof o.onClick == "function" && (e.onclick = Do);
                  }
                  switch (n) {
                     case "button":
                     case "input":
                     case "select":
                     case "textarea":
                        r = !!r.autoFocus;
                        break e;
                     case "img":
                        r = !0;
                        break e;
                     default:
                        r = !1;
                  }
               }
               r && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
         }
         return pe(t), null;
      case 6:
         if (e && t.stateNode != null) Rf(e, t, e.memoizedProps, r);
         else {
            if (typeof r != "string" && t.stateNode === null)
               throw Error(S(166));
            if (((n = Yt(zr.current)), Yt(it.current), io(t))) {
               if (
                  ((r = t.stateNode),
                  (n = t.memoizedProps),
                  (r[rt] = t),
                  (l = r.nodeValue !== n) && ((e = ze), e !== null))
               )
                  switch (e.tag) {
                     case 3:
                        lo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                     case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 &&
                           lo(r.nodeValue, n, (e.mode & 1) !== 0);
                  }
               l && (t.flags |= 4);
            } else
               (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                  (r[rt] = t),
                  (t.stateNode = r);
         }
         return pe(t), null;
      case 13:
         if (
            (H(Q),
            (r = t.memoizedState),
            e === null ||
               (e.memoizedState !== null &&
                  e.memoizedState.dehydrated !== null))
         ) {
            if (K && Ne !== null && t.mode & 1 && !(t.flags & 128))
               Gc(), In(), (t.flags |= 98560), (l = !1);
            else if (((l = io(t)), r !== null && r.dehydrated !== null)) {
               if (e === null) {
                  if (!l) throw Error(S(318));
                  if (
                     ((l = t.memoizedState),
                     (l = l !== null ? l.dehydrated : null),
                     !l)
                  )
                     throw Error(S(317));
                  l[rt] = t;
               } else
                  In(),
                     !(t.flags & 128) && (t.memoizedState = null),
                     (t.flags |= 4);
               pe(t), (l = !1);
            } else Ke !== null && (bi(Ke), (Ke = null)), (l = !0);
            if (!l) return t.flags & 65536 ? t : null;
         }
         return t.flags & 128
            ? ((t.lanes = n), t)
            : ((r = r !== null),
              r !== (e !== null && e.memoizedState !== null) &&
                 r &&
                 ((t.child.flags |= 8192),
                 t.mode & 1 &&
                    (e === null || Q.current & 1
                       ? oe === 0 && (oe = 3)
                       : Ku())),
              t.updateQueue !== null && (t.flags |= 4),
              pe(t),
              null);
      case 4:
         return (
            Fn(),
            Ki(e, t),
            e === null && Pr(t.stateNode.containerInfo),
            pe(t),
            null
         );
      case 10:
         return Ou(t.type._context), pe(t), null;
      case 17:
         return Ee(t.type) && Bo(), pe(t), null;
      case 19:
         if ((H(Q), (l = t.memoizedState), l === null)) return pe(t), null;
         if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
            if (r) bn(l, !1);
            else {
               if (oe !== 0 || (e !== null && e.flags & 128))
                  for (e = t.child; e !== null; ) {
                     if (((i = Go(e)), i !== null)) {
                        for (
                           t.flags |= 128,
                              bn(l, !1),
                              r = i.updateQueue,
                              r !== null &&
                                 ((t.updateQueue = r), (t.flags |= 4)),
                              t.subtreeFlags = 0,
                              r = n,
                              n = t.child;
                           n !== null;

                        )
                           (l = n),
                              (e = r),
                              (l.flags &= 14680066),
                              (i = l.alternate),
                              i === null
                                 ? ((l.childLanes = 0),
                                   (l.lanes = e),
                                   (l.child = null),
                                   (l.subtreeFlags = 0),
                                   (l.memoizedProps = null),
                                   (l.memoizedState = null),
                                   (l.updateQueue = null),
                                   (l.dependencies = null),
                                   (l.stateNode = null))
                                 : ((l.childLanes = i.childLanes),
                                   (l.lanes = i.lanes),
                                   (l.child = i.child),
                                   (l.subtreeFlags = 0),
                                   (l.deletions = null),
                                   (l.memoizedProps = i.memoizedProps),
                                   (l.memoizedState = i.memoizedState),
                                   (l.updateQueue = i.updateQueue),
                                   (l.type = i.type),
                                   (e = i.dependencies),
                                   (l.dependencies =
                                      e === null
                                         ? null
                                         : {
                                              lanes: e.lanes,
                                              firstContext: e.firstContext,
                                           })),
                              (n = n.sibling);
                        return U(Q, (Q.current & 1) | 2), t.child;
                     }
                     e = e.sibling;
                  }
               l.tail !== null &&
                  b() > Dn &&
                  ((t.flags |= 128), (r = !0), bn(l, !1), (t.lanes = 4194304));
            }
         else {
            if (!r)
               if (((e = Go(i)), e !== null)) {
                  if (
                     ((t.flags |= 128),
                     (r = !0),
                     (n = e.updateQueue),
                     n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                     bn(l, !0),
                     l.tail === null &&
                        l.tailMode === "hidden" &&
                        !i.alternate &&
                        !K)
                  )
                     return pe(t), null;
               } else
                  2 * b() - l.renderingStartTime > Dn &&
                     n !== 1073741824 &&
                     ((t.flags |= 128),
                     (r = !0),
                     bn(l, !1),
                     (t.lanes = 4194304));
            l.isBackwards
               ? ((i.sibling = t.child), (t.child = i))
               : ((n = l.last),
                 n !== null ? (n.sibling = i) : (t.child = i),
                 (l.last = i));
         }
         return l.tail !== null
            ? ((t = l.tail),
              (l.rendering = t),
              (l.tail = t.sibling),
              (l.renderingStartTime = b()),
              (t.sibling = null),
              (n = Q.current),
              U(Q, r ? (n & 1) | 2 : n & 1),
              t)
            : (pe(t), null);
      case 22:
      case 23:
         return (
            Vu(),
            (r = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r && t.mode & 1
               ? Te & 1073741824 &&
                 (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
               : pe(t),
            null
         );
      case 24:
         return null;
      case 25:
         return null;
   }
   throw Error(S(156, t.tag));
}
function T0(e, t) {
   switch ((Eu(t), t.tag)) {
      case 1:
         return (
            Ee(t.type) && Bo(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
         );
      case 3:
         return (
            Fn(),
            H(Ce),
            H(ge),
            Lu(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
         );
      case 5:
         return $u(t), null;
      case 13:
         if (
            (H(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)
         ) {
            if (t.alternate === null) throw Error(S(340));
            In();
         }
         return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
         );
      case 19:
         return H(Q), null;
      case 4:
         return Fn(), null;
      case 10:
         return Ou(t.type._context), null;
      case 22:
      case 23:
         return Vu(), null;
      case 24:
         return null;
      default:
         return null;
   }
}
var ao = !1,
   he = !1,
   O0 = typeof WeakSet == "function" ? WeakSet : Set,
   _ = null;
function Cn(e, t) {
   var n = e.ref;
   if (n !== null)
      if (typeof n == "function")
         try {
            n(null);
         } catch (r) {
            J(e, t, r);
         }
      else n.current = null;
}
function Qi(e, t, n) {
   try {
      n();
   } catch (r) {
      J(e, t, r);
   }
}
var ua = !1;
function N0(e, t) {
   if (((Ni = Ao), (e = Mc()), xu(e))) {
      if ("selectionStart" in e)
         var n = { start: e.selectionStart, end: e.selectionEnd };
      else
         e: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
               n = r.anchorNode;
               var o = r.anchorOffset,
                  l = r.focusNode;
               r = r.focusOffset;
               try {
                  n.nodeType, l.nodeType;
               } catch {
                  n = null;
                  break e;
               }
               var i = 0,
                  u = -1,
                  s = -1,
                  a = 0,
                  h = 0,
                  m = e,
                  p = null;
               t: for (;;) {
                  for (
                     var v;
                     m !== n || (o !== 0 && m.nodeType !== 3) || (u = i + o),
                        m !== l || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                        m.nodeType === 3 && (i += m.nodeValue.length),
                        (v = m.firstChild) !== null;

                  )
                     (p = m), (m = v);
                  for (;;) {
                     if (m === e) break t;
                     if (
                        (p === n && ++a === o && (u = i),
                        p === l && ++h === r && (s = i),
                        (v = m.nextSibling) !== null)
                     )
                        break;
                     (m = p), (p = m.parentNode);
                  }
                  m = v;
               }
               n = u === -1 || s === -1 ? null : { start: u, end: s };
            } else n = null;
         }
      n = n || { start: 0, end: 0 };
   } else n = null;
   for (
      zi = { focusedElem: e, selectionRange: n }, Ao = !1, _ = t;
      _ !== null;

   )
      if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
         (e.return = t), (_ = e);
      else
         for (; _ !== null; ) {
            t = _;
            try {
               var y = t.alternate;
               if (t.flags & 1024)
                  switch (t.tag) {
                     case 0:
                     case 11:
                     case 15:
                        break;
                     case 1:
                        if (y !== null) {
                           var g = y.memoizedProps,
                              E = y.memoizedState,
                              f = t.stateNode,
                              c = f.getSnapshotBeforeUpdate(
                                 t.elementType === t.type ? g : We(t.type, g),
                                 E
                              );
                           f.__reactInternalSnapshotBeforeUpdate = c;
                        }
                        break;
                     case 3:
                        var d = t.stateNode.containerInfo;
                        d.nodeType === 1
                           ? (d.textContent = "")
                           : d.nodeType === 9 &&
                             d.documentElement &&
                             d.removeChild(d.documentElement);
                        break;
                     case 5:
                     case 6:
                     case 4:
                     case 17:
                        break;
                     default:
                        throw Error(S(163));
                  }
            } catch (w) {
               J(t, t.return, w);
            }
            if (((e = t.sibling), e !== null)) {
               (e.return = t.return), (_ = e);
               break;
            }
            _ = t.return;
         }
   return (y = ua), (ua = !1), y;
}
function mr(e, t, n) {
   var r = t.updateQueue;
   if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
         if ((o.tag & e) === e) {
            var l = o.destroy;
            (o.destroy = void 0), l !== void 0 && Qi(t, n, l);
         }
         o = o.next;
      } while (o !== r);
   }
}
function dl(e, t) {
   if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
   ) {
      var n = (t = t.next);
      do {
         if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
         }
         n = n.next;
      } while (n !== t);
   }
}
function Gi(e) {
   var t = e.ref;
   if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
         case 5:
            e = n;
            break;
         default:
            e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
   }
}
function $f(e) {
   var t = e.alternate;
   t !== null && ((e.alternate = null), $f(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
         ((t = e.stateNode),
         t !== null &&
            (delete t[rt],
            delete t[Or],
            delete t[Li],
            delete t[f0],
            delete t[d0])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
}
function Lf(e) {
   return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sa(e) {
   e: for (;;) {
      for (; e.sibling === null; ) {
         if (e.return === null || Lf(e.return)) return null;
         e = e.return;
      }
      for (
         e.sibling.return = e.return, e = e.sibling;
         e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
         if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
         (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
   }
}
function Yi(e, t, n) {
   var r = e.tag;
   if (r === 5 || r === 6)
      (e = e.stateNode),
         t
            ? n.nodeType === 8
               ? n.parentNode.insertBefore(e, t)
               : n.insertBefore(e, t)
            : (n.nodeType === 8
                 ? ((t = n.parentNode), t.insertBefore(e, n))
                 : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Do));
   else if (r !== 4 && ((e = e.child), e !== null))
      for (Yi(e, t, n), e = e.sibling; e !== null; )
         Yi(e, t, n), (e = e.sibling);
}
function Xi(e, t, n) {
   var r = e.tag;
   if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
   else if (r !== 4 && ((e = e.child), e !== null))
      for (Xi(e, t, n), e = e.sibling; e !== null; )
         Xi(e, t, n), (e = e.sibling);
}
var se = null,
   He = !1;
function kt(e, t, n) {
   for (n = n.child; n !== null; ) Mf(e, t, n), (n = n.sibling);
}
function Mf(e, t, n) {
   if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
         lt.onCommitFiberUnmount(ol, n);
      } catch {}
   switch (n.tag) {
      case 5:
         he || Cn(n, t);
      case 6:
         var r = se,
            o = He;
         (se = null),
            kt(e, t, n),
            (se = r),
            (He = o),
            se !== null &&
               (He
                  ? ((e = se),
                    (n = n.stateNode),
                    e.nodeType === 8
                       ? e.parentNode.removeChild(n)
                       : e.removeChild(n))
                  : se.removeChild(n.stateNode));
         break;
      case 18:
         se !== null &&
            (He
               ? ((e = se),
                 (n = n.stateNode),
                 e.nodeType === 8
                    ? Gl(e.parentNode, n)
                    : e.nodeType === 1 && Gl(e, n),
                 Cr(e))
               : Gl(se, n.stateNode));
         break;
      case 4:
         (r = se),
            (o = He),
            (se = n.stateNode.containerInfo),
            (He = !0),
            kt(e, t, n),
            (se = r),
            (He = o);
         break;
      case 0:
      case 11:
      case 14:
      case 15:
         if (
            !he &&
            ((r = n.updateQueue),
            r !== null && ((r = r.lastEffect), r !== null))
         ) {
            o = r = r.next;
            do {
               var l = o,
                  i = l.destroy;
               (l = l.tag),
                  i !== void 0 && (l & 2 || l & 4) && Qi(n, t, i),
                  (o = o.next);
            } while (o !== r);
         }
         kt(e, t, n);
         break;
      case 1:
         if (
            !he &&
            (Cn(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == "function")
         )
            try {
               (r.props = n.memoizedProps),
                  (r.state = n.memoizedState),
                  r.componentWillUnmount();
            } catch (u) {
               J(n, t, u);
            }
         kt(e, t, n);
         break;
      case 21:
         kt(e, t, n);
         break;
      case 22:
         n.mode & 1
            ? ((he = (r = he) || n.memoizedState !== null),
              kt(e, t, n),
              (he = r))
            : kt(e, t, n);
         break;
      default:
         kt(e, t, n);
   }
}
function aa(e) {
   var t = e.updateQueue;
   if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new O0()),
         t.forEach(function (r) {
            var o = j0.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o));
         });
   }
}
function Ue(e, t) {
   var n = t.deletions;
   if (n !== null)
      for (var r = 0; r < n.length; r++) {
         var o = n[r];
         try {
            var l = e,
               i = t,
               u = i;
            e: for (; u !== null; ) {
               switch (u.tag) {
                  case 5:
                     (se = u.stateNode), (He = !1);
                     break e;
                  case 3:
                     (se = u.stateNode.containerInfo), (He = !0);
                     break e;
                  case 4:
                     (se = u.stateNode.containerInfo), (He = !0);
                     break e;
               }
               u = u.return;
            }
            if (se === null) throw Error(S(160));
            Mf(l, i, o), (se = null), (He = !1);
            var s = o.alternate;
            s !== null && (s.return = null), (o.return = null);
         } catch (a) {
            J(o, t, a);
         }
      }
   if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) If(t, e), (t = t.sibling);
}
function If(e, t) {
   var n = e.alternate,
      r = e.flags;
   switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
         if ((Ue(t, e), Je(e), r & 4)) {
            try {
               mr(3, e, e.return), dl(3, e);
            } catch (g) {
               J(e, e.return, g);
            }
            try {
               mr(5, e, e.return);
            } catch (g) {
               J(e, e.return, g);
            }
         }
         break;
      case 1:
         Ue(t, e), Je(e), r & 512 && n !== null && Cn(n, n.return);
         break;
      case 5:
         if (
            (Ue(t, e),
            Je(e),
            r & 512 && n !== null && Cn(n, n.return),
            e.flags & 32)
         ) {
            var o = e.stateNode;
            try {
               wr(o, "");
            } catch (g) {
               J(e, e.return, g);
            }
         }
         if (r & 4 && ((o = e.stateNode), o != null)) {
            var l = e.memoizedProps,
               i = n !== null ? n.memoizedProps : l,
               u = e.type,
               s = e.updateQueue;
            if (((e.updateQueue = null), s !== null))
               try {
                  u === "input" &&
                     l.type === "radio" &&
                     l.name != null &&
                     tc(o, l),
                     wi(u, i);
                  var a = wi(u, l);
                  for (i = 0; i < s.length; i += 2) {
                     var h = s[i],
                        m = s[i + 1];
                     h === "style"
                        ? ic(o, m)
                        : h === "dangerouslySetInnerHTML"
                        ? oc(o, m)
                        : h === "children"
                        ? wr(o, m)
                        : au(o, h, m, a);
                  }
                  switch (u) {
                     case "input":
                        mi(o, l);
                        break;
                     case "textarea":
                        nc(o, l);
                        break;
                     case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!l.multiple;
                        var v = l.value;
                        v != null
                           ? _n(o, !!l.multiple, v, !1)
                           : p !== !!l.multiple &&
                             (l.defaultValue != null
                                ? _n(o, !!l.multiple, l.defaultValue, !0)
                                : _n(
                                     o,
                                     !!l.multiple,
                                     l.multiple ? [] : "",
                                     !1
                                  ));
                  }
                  o[Or] = l;
               } catch (g) {
                  J(e, e.return, g);
               }
         }
         break;
      case 6:
         if ((Ue(t, e), Je(e), r & 4)) {
            if (e.stateNode === null) throw Error(S(162));
            (o = e.stateNode), (l = e.memoizedProps);
            try {
               o.nodeValue = l;
            } catch (g) {
               J(e, e.return, g);
            }
         }
         break;
      case 3:
         if (
            (Ue(t, e),
            Je(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
         )
            try {
               Cr(t.containerInfo);
            } catch (g) {
               J(e, e.return, g);
            }
         break;
      case 4:
         Ue(t, e), Je(e);
         break;
      case 13:
         Ue(t, e),
            Je(e),
            (o = e.child),
            o.flags & 8192 &&
               ((l = o.memoizedState !== null),
               (o.stateNode.isHidden = l),
               !l ||
                  (o.alternate !== null &&
                     o.alternate.memoizedState !== null) ||
                  (Wu = b())),
            r & 4 && aa(e);
         break;
      case 22:
         if (
            ((h = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((he = (a = he) || h), Ue(t, e), (he = a)) : Ue(t, e),
            Je(e),
            r & 8192)
         ) {
            if (
               ((a = e.memoizedState !== null),
               (e.stateNode.isHidden = a) && !h && e.mode & 1)
            )
               for (_ = e, h = e.child; h !== null; ) {
                  for (m = _ = h; _ !== null; ) {
                     switch (((p = _), (v = p.child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                           mr(4, p, p.return);
                           break;
                        case 1:
                           Cn(p, p.return);
                           var y = p.stateNode;
                           if (typeof y.componentWillUnmount == "function") {
                              (r = p), (n = p.return);
                              try {
                                 (t = r),
                                    (y.props = t.memoizedProps),
                                    (y.state = t.memoizedState),
                                    y.componentWillUnmount();
                              } catch (g) {
                                 J(r, n, g);
                              }
                           }
                           break;
                        case 5:
                           Cn(p, p.return);
                           break;
                        case 22:
                           if (p.memoizedState !== null) {
                              fa(m);
                              continue;
                           }
                     }
                     v !== null ? ((v.return = p), (_ = v)) : fa(m);
                  }
                  h = h.sibling;
               }
            e: for (h = null, m = e; ; ) {
               if (m.tag === 5) {
                  if (h === null) {
                     h = m;
                     try {
                        (o = m.stateNode),
                           a
                              ? ((l = o.style),
                                typeof l.setProperty == "function"
                                   ? l.setProperty(
                                        "display",
                                        "none",
                                        "important"
                                     )
                                   : (l.display = "none"))
                              : ((u = m.stateNode),
                                (s = m.memoizedProps.style),
                                (i =
                                   s != null && s.hasOwnProperty("display")
                                      ? s.display
                                      : null),
                                (u.style.display = lc("display", i)));
                     } catch (g) {
                        J(e, e.return, g);
                     }
                  }
               } else if (m.tag === 6) {
                  if (h === null)
                     try {
                        m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                     } catch (g) {
                        J(e, e.return, g);
                     }
               } else if (
                  ((m.tag !== 22 && m.tag !== 23) ||
                     m.memoizedState === null ||
                     m === e) &&
                  m.child !== null
               ) {
                  (m.child.return = m), (m = m.child);
                  continue;
               }
               if (m === e) break e;
               for (; m.sibling === null; ) {
                  if (m.return === null || m.return === e) break e;
                  h === m && (h = null), (m = m.return);
               }
               h === m && (h = null),
                  (m.sibling.return = m.return),
                  (m = m.sibling);
            }
         }
         break;
      case 19:
         Ue(t, e), Je(e), r & 4 && aa(e);
         break;
      case 21:
         break;
      default:
         Ue(t, e), Je(e);
   }
}
function Je(e) {
   var t = e.flags;
   if (t & 2) {
      try {
         e: {
            for (var n = e.return; n !== null; ) {
               if (Lf(n)) {
                  var r = n;
                  break e;
               }
               n = n.return;
            }
            throw Error(S(160));
         }
         switch (r.tag) {
            case 5:
               var o = r.stateNode;
               r.flags & 32 && (wr(o, ""), (r.flags &= -33));
               var l = sa(e);
               Xi(e, l, o);
               break;
            case 3:
            case 4:
               var i = r.stateNode.containerInfo,
                  u = sa(e);
               Yi(e, u, i);
               break;
            default:
               throw Error(S(161));
         }
      } catch (s) {
         J(e, e.return, s);
      }
      e.flags &= -3;
   }
   t & 4096 && (e.flags &= -4097);
}
function z0(e, t, n) {
   (_ = e), Af(e);
}
function Af(e, t, n) {
   for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var o = _,
         l = o.child;
      if (o.tag === 22 && r) {
         var i = o.memoizedState !== null || ao;
         if (!i) {
            var u = o.alternate,
               s = (u !== null && u.memoizedState !== null) || he;
            u = ao;
            var a = he;
            if (((ao = i), (he = s) && !a))
               for (_ = o; _ !== null; )
                  (i = _),
                     (s = i.child),
                     i.tag === 22 && i.memoizedState !== null
                        ? da(o)
                        : s !== null
                        ? ((s.return = i), (_ = s))
                        : da(o);
            for (; l !== null; ) (_ = l), Af(l), (l = l.sibling);
            (_ = o), (ao = u), (he = a);
         }
         ca(e);
      } else
         o.subtreeFlags & 8772 && l !== null
            ? ((l.return = o), (_ = l))
            : ca(e);
   }
}
function ca(e) {
   for (; _ !== null; ) {
      var t = _;
      if (t.flags & 8772) {
         var n = t.alternate;
         try {
            if (t.flags & 8772)
               switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                     he || dl(5, t);
                     break;
                  case 1:
                     var r = t.stateNode;
                     if (t.flags & 4 && !he)
                        if (n === null) r.componentDidMount();
                        else {
                           var o =
                              t.elementType === t.type
                                 ? n.memoizedProps
                                 : We(t.type, n.memoizedProps);
                           r.componentDidUpdate(
                              o,
                              n.memoizedState,
                              r.__reactInternalSnapshotBeforeUpdate
                           );
                        }
                     var l = t.updateQueue;
                     l !== null && Gs(t, l, r);
                     break;
                  case 3:
                     var i = t.updateQueue;
                     if (i !== null) {
                        if (((n = null), t.child !== null))
                           switch (t.child.tag) {
                              case 5:
                                 n = t.child.stateNode;
                                 break;
                              case 1:
                                 n = t.child.stateNode;
                           }
                        Gs(t, i, n);
                     }
                     break;
                  case 5:
                     var u = t.stateNode;
                     if (n === null && t.flags & 4) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                           case "button":
                           case "input":
                           case "select":
                           case "textarea":
                              s.autoFocus && n.focus();
                              break;
                           case "img":
                              s.src && (n.src = s.src);
                        }
                     }
                     break;
                  case 6:
                     break;
                  case 4:
                     break;
                  case 12:
                     break;
                  case 13:
                     if (t.memoizedState === null) {
                        var a = t.alternate;
                        if (a !== null) {
                           var h = a.memoizedState;
                           if (h !== null) {
                              var m = h.dehydrated;
                              m !== null && Cr(m);
                           }
                        }
                     }
                     break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                     break;
                  default:
                     throw Error(S(163));
               }
            he || (t.flags & 512 && Gi(t));
         } catch (p) {
            J(t, t.return, p);
         }
      }
      if (t === e) {
         _ = null;
         break;
      }
      if (((n = t.sibling), n !== null)) {
         (n.return = t.return), (_ = n);
         break;
      }
      _ = t.return;
   }
}
function fa(e) {
   for (; _ !== null; ) {
      var t = _;
      if (t === e) {
         _ = null;
         break;
      }
      var n = t.sibling;
      if (n !== null) {
         (n.return = t.return), (_ = n);
         break;
      }
      _ = t.return;
   }
}
function da(e) {
   for (; _ !== null; ) {
      var t = _;
      try {
         switch (t.tag) {
            case 0:
            case 11:
            case 15:
               var n = t.return;
               try {
                  dl(4, t);
               } catch (s) {
                  J(t, n, s);
               }
               break;
            case 1:
               var r = t.stateNode;
               if (typeof r.componentDidMount == "function") {
                  var o = t.return;
                  try {
                     r.componentDidMount();
                  } catch (s) {
                     J(t, o, s);
                  }
               }
               var l = t.return;
               try {
                  Gi(t);
               } catch (s) {
                  J(t, l, s);
               }
               break;
            case 5:
               var i = t.return;
               try {
                  Gi(t);
               } catch (s) {
                  J(t, i, s);
               }
         }
      } catch (s) {
         J(t, t.return, s);
      }
      if (t === e) {
         _ = null;
         break;
      }
      var u = t.sibling;
      if (u !== null) {
         (u.return = t.return), (_ = u);
         break;
      }
      _ = t.return;
   }
}
var R0 = Math.ceil,
   Zo = St.ReactCurrentDispatcher,
   Bu = St.ReactCurrentOwner,
   je = St.ReactCurrentBatchConfig,
   M = 0,
   ue = null,
   te = null,
   ce = 0,
   Te = 0,
   En = Dt(0),
   oe = 0,
   Mr = null,
   en = 0,
   pl = 0,
   Uu = 0,
   hr = null,
   ke = null,
   Wu = 0,
   Dn = 1 / 0,
   st = null,
   Jo = !1,
   Zi = null,
   Lt = null,
   co = !1,
   Tt = null,
   qo = 0,
   gr = 0,
   Ji = null,
   Co = -1,
   Eo = 0;
function ve() {
   return M & 6 ? b() : Co !== -1 ? Co : (Co = b());
}
function Mt(e) {
   return e.mode & 1
      ? M & 2 && ce !== 0
         ? ce & -ce
         : m0.transition !== null
         ? (Eo === 0 && (Eo = vc()), Eo)
         : ((e = D),
           e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : _c(e.type))),
           e)
      : 1;
}
function Ge(e, t, n, r) {
   if (50 < gr) throw ((gr = 0), (Ji = null), Error(S(185)));
   Br(e, n, r),
      (!(M & 2) || e !== ue) &&
         (e === ue && (!(M & 2) && (pl |= n), oe === 4 && _t(e, ce)),
         _e(e, r),
         n === 1 && M === 0 && !(t.mode & 1) && ((Dn = b() + 500), al && Bt()));
}
function _e(e, t) {
   var n = e.callbackNode;
   mp(e, t);
   var r = Io(e, e === ue ? ce : 0);
   if (r === 0)
      n !== null && ks(n), (e.callbackNode = null), (e.callbackPriority = 0);
   else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ks(n), t === 1))
         e.tag === 0 ? p0(pa.bind(null, e)) : Vc(pa.bind(null, e)),
            a0(function () {
               !(M & 6) && Bt();
            }),
            (n = null);
      else {
         switch (wc(r)) {
            case 1:
               n = mu;
               break;
            case 4:
               n = gc;
               break;
            case 16:
               n = Mo;
               break;
            case 536870912:
               n = yc;
               break;
            default:
               n = Mo;
         }
         n = Vf(n, Ff.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
   }
}
function Ff(e, t) {
   if (((Co = -1), (Eo = 0), M & 6)) throw Error(S(327));
   var n = e.callbackNode;
   if (zn() && e.callbackNode !== n) return null;
   var r = Io(e, e === ue ? ce : 0);
   if (r === 0) return null;
   if (r & 30 || r & e.expiredLanes || t) t = bo(e, r);
   else {
      t = r;
      var o = M;
      M |= 2;
      var l = Df();
      (ue !== e || ce !== t) && ((st = null), (Dn = b() + 500), Xt(e, t));
      do
         try {
            M0();
            break;
         } catch (u) {
            jf(e, u);
         }
      while (1);
      Tu(),
         (Zo.current = l),
         (M = o),
         te !== null ? (t = 0) : ((ue = null), (ce = 0), (t = oe));
   }
   if (t !== 0) {
      if (
         (t === 2 && ((o = Ei(e)), o !== 0 && ((r = o), (t = qi(e, o)))),
         t === 1)
      )
         throw ((n = Mr), Xt(e, 0), _t(e, r), _e(e, b()), n);
      if (t === 6) _t(e, r);
      else {
         if (
            ((o = e.current.alternate),
            !(r & 30) &&
               !$0(o) &&
               ((t = bo(e, r)),
               t === 2 && ((l = Ei(e)), l !== 0 && ((r = l), (t = qi(e, l)))),
               t === 1))
         )
            throw ((n = Mr), Xt(e, 0), _t(e, r), _e(e, b()), n);
         switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
               throw Error(S(345));
            case 2:
               Kt(e, ke, st);
               break;
            case 3:
               if (
                  (_t(e, r),
                  (r & 130023424) === r && ((t = Wu + 500 - b()), 10 < t))
               ) {
                  if (Io(e, 0) !== 0) break;
                  if (((o = e.suspendedLanes), (o & r) !== r)) {
                     ve(), (e.pingedLanes |= e.suspendedLanes & o);
                     break;
                  }
                  e.timeoutHandle = $i(Kt.bind(null, e, ke, st), t);
                  break;
               }
               Kt(e, ke, st);
               break;
            case 4:
               if ((_t(e, r), (r & 4194240) === r)) break;
               for (t = e.eventTimes, o = -1; 0 < r; ) {
                  var i = 31 - Qe(r);
                  (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
               }
               if (
                  ((r = o),
                  (r = b() - r),
                  (r =
                     (120 > r
                        ? 120
                        : 480 > r
                        ? 480
                        : 1080 > r
                        ? 1080
                        : 1920 > r
                        ? 1920
                        : 3e3 > r
                        ? 3e3
                        : 4320 > r
                        ? 4320
                        : 1960 * R0(r / 1960)) - r),
                  10 < r)
               ) {
                  e.timeoutHandle = $i(Kt.bind(null, e, ke, st), r);
                  break;
               }
               Kt(e, ke, st);
               break;
            case 5:
               Kt(e, ke, st);
               break;
            default:
               throw Error(S(329));
         }
      }
   }
   return _e(e, b()), e.callbackNode === n ? Ff.bind(null, e) : null;
}
function qi(e, t) {
   var n = hr;
   return (
      e.current.memoizedState.isDehydrated && (Xt(e, t).flags |= 256),
      (e = bo(e, t)),
      e !== 2 && ((t = ke), (ke = n), t !== null && bi(t)),
      e
   );
}
function bi(e) {
   ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function $0(e) {
   for (var t = e; ; ) {
      if (t.flags & 16384) {
         var n = t.updateQueue;
         if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
               var o = n[r],
                  l = o.getSnapshot;
               o = o.value;
               try {
                  if (!Xe(l(), o)) return !1;
               } catch {
                  return !1;
               }
            }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
         (n.return = t), (t = n);
      else {
         if (t === e) break;
         for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
         }
         (t.sibling.return = t.return), (t = t.sibling);
      }
   }
   return !0;
}
function _t(e, t) {
   for (
      t &= ~Uu,
         t &= ~pl,
         e.suspendedLanes |= t,
         e.pingedLanes &= ~t,
         e = e.expirationTimes;
      0 < t;

   ) {
      var n = 31 - Qe(t),
         r = 1 << n;
      (e[n] = -1), (t &= ~r);
   }
}
function pa(e) {
   if (M & 6) throw Error(S(327));
   zn();
   var t = Io(e, 0);
   if (!(t & 1)) return _e(e, b()), null;
   var n = bo(e, t);
   if (e.tag !== 0 && n === 2) {
      var r = Ei(e);
      r !== 0 && ((t = r), (n = qi(e, r)));
   }
   if (n === 1) throw ((n = Mr), Xt(e, 0), _t(e, t), _e(e, b()), n);
   if (n === 6) throw Error(S(345));
   return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Kt(e, ke, st),
      _e(e, b()),
      null
   );
}
function Hu(e, t) {
   var n = M;
   M |= 1;
   try {
      return e(t);
   } finally {
      (M = n), M === 0 && ((Dn = b() + 500), al && Bt());
   }
}
function tn(e) {
   Tt !== null && Tt.tag === 0 && !(M & 6) && zn();
   var t = M;
   M |= 1;
   var n = je.transition,
      r = D;
   try {
      if (((je.transition = null), (D = 1), e)) return e();
   } finally {
      (D = r), (je.transition = n), (M = t), !(M & 6) && Bt();
   }
}
function Vu() {
   (Te = En.current), H(En);
}
function Xt(e, t) {
   (e.finishedWork = null), (e.finishedLanes = 0);
   var n = e.timeoutHandle;
   if ((n !== -1 && ((e.timeoutHandle = -1), s0(n)), te !== null))
      for (n = te.return; n !== null; ) {
         var r = n;
         switch ((Eu(r), r.tag)) {
            case 1:
               (r = r.type.childContextTypes), r != null && Bo();
               break;
            case 3:
               Fn(), H(Ce), H(ge), Lu();
               break;
            case 5:
               $u(r);
               break;
            case 4:
               Fn();
               break;
            case 13:
               H(Q);
               break;
            case 19:
               H(Q);
               break;
            case 10:
               Ou(r.type._context);
               break;
            case 22:
            case 23:
               Vu();
         }
         n = n.return;
      }
   if (
      ((ue = e),
      (te = e = It(e.current, null)),
      (ce = Te = t),
      (oe = 0),
      (Mr = null),
      (Uu = pl = en = 0),
      (ke = hr = null),
      Gt !== null)
   ) {
      for (t = 0; t < Gt.length; t++)
         if (((n = Gt[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var o = r.next,
               l = n.pending;
            if (l !== null) {
               var i = l.next;
               (l.next = o), (r.next = i);
            }
            n.pending = r;
         }
      Gt = null;
   }
   return e;
}
function jf(e, t) {
   do {
      var n = te;
      try {
         if ((Tu(), (So.current = Xo), Yo)) {
            for (var r = G.memoizedState; r !== null; ) {
               var o = r.queue;
               o !== null && (o.pending = null), (r = r.next);
            }
            Yo = !1;
         }
         if (
            ((bt = 0),
            (ie = re = G = null),
            (pr = !1),
            (Rr = 0),
            (Bu.current = null),
            n === null || n.return === null)
         ) {
            (oe = 1), (Mr = t), (te = null);
            break;
         }
         e: {
            var l = e,
               i = n.return,
               u = n,
               s = t;
            if (
               ((t = ce),
               (u.flags |= 32768),
               s !== null &&
                  typeof s == "object" &&
                  typeof s.then == "function")
            ) {
               var a = s,
                  h = u,
                  m = h.tag;
               if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                  var p = h.alternate;
                  p
                     ? ((h.updateQueue = p.updateQueue),
                       (h.memoizedState = p.memoizedState),
                       (h.lanes = p.lanes))
                     : ((h.updateQueue = null), (h.memoizedState = null));
               }
               var v = ea(i);
               if (v !== null) {
                  (v.flags &= -257),
                     ta(v, i, u, l, t),
                     v.mode & 1 && bs(l, a, t),
                     (t = v),
                     (s = a);
                  var y = t.updateQueue;
                  if (y === null) {
                     var g = new Set();
                     g.add(s), (t.updateQueue = g);
                  } else y.add(s);
                  break e;
               } else {
                  if (!(t & 1)) {
                     bs(l, a, t), Ku();
                     break e;
                  }
                  s = Error(S(426));
               }
            } else if (K && u.mode & 1) {
               var E = ea(i);
               if (E !== null) {
                  !(E.flags & 65536) && (E.flags |= 256),
                     ta(E, i, u, l, t),
                     _u(jn(s, u));
                  break e;
               }
            }
            (l = s = jn(s, u)),
               oe !== 4 && (oe = 2),
               hr === null ? (hr = [l]) : hr.push(l),
               (l = i);
            do {
               switch (l.tag) {
                  case 3:
                     (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                     var f = kf(l, s, t);
                     Qs(l, f);
                     break e;
                  case 1:
                     u = s;
                     var c = l.type,
                        d = l.stateNode;
                     if (
                        !(l.flags & 128) &&
                        (typeof c.getDerivedStateFromError == "function" ||
                           (d !== null &&
                              typeof d.componentDidCatch == "function" &&
                              (Lt === null || !Lt.has(d))))
                     ) {
                        (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                        var w = xf(l, u, t);
                        Qs(l, w);
                        break e;
                     }
               }
               l = l.return;
            } while (l !== null);
         }
         Uf(n);
      } catch (x) {
         (t = x), te === n && n !== null && (te = n = n.return);
         continue;
      }
      break;
   } while (1);
}
function Df() {
   var e = Zo.current;
   return (Zo.current = Xo), e === null ? Xo : e;
}
function Ku() {
   (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
      ue === null || (!(en & 268435455) && !(pl & 268435455)) || _t(ue, ce);
}
function bo(e, t) {
   var n = M;
   M |= 2;
   var r = Df();
   (ue !== e || ce !== t) && ((st = null), Xt(e, t));
   do
      try {
         L0();
         break;
      } catch (o) {
         jf(e, o);
      }
   while (1);
   if ((Tu(), (M = n), (Zo.current = r), te !== null)) throw Error(S(261));
   return (ue = null), (ce = 0), oe;
}
function L0() {
   for (; te !== null; ) Bf(te);
}
function M0() {
   for (; te !== null && !lp(); ) Bf(te);
}
function Bf(e) {
   var t = Hf(e.alternate, e, Te);
   (e.memoizedProps = e.pendingProps),
      t === null ? Uf(e) : (te = t),
      (Bu.current = null);
}
function Uf(e) {
   var t = e;
   do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
         if (((n = T0(n, t)), n !== null)) {
            (n.flags &= 32767), (te = n);
            return;
         }
         if (e !== null)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
         else {
            (oe = 6), (te = null);
            return;
         }
      } else if (((n = P0(n, t, Te)), n !== null)) {
         te = n;
         return;
      }
      if (((t = t.sibling), t !== null)) {
         te = t;
         return;
      }
      te = t = e;
   } while (t !== null);
   oe === 0 && (oe = 5);
}
function Kt(e, t, n) {
   var r = D,
      o = je.transition;
   try {
      (je.transition = null), (D = 1), I0(e, t, n, r);
   } finally {
      (je.transition = o), (D = r);
   }
   return null;
}
function I0(e, t, n, r) {
   do zn();
   while (Tt !== null);
   if (M & 6) throw Error(S(327));
   n = e.finishedWork;
   var o = e.finishedLanes;
   if (n === null) return null;
   if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(S(177));
   (e.callbackNode = null), (e.callbackPriority = 0);
   var l = n.lanes | n.childLanes;
   if (
      (hp(e, l),
      e === ue && ((te = ue = null), (ce = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
         co ||
         ((co = !0),
         Vf(Mo, function () {
            return zn(), null;
         })),
      (l = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || l)
   ) {
      (l = je.transition), (je.transition = null);
      var i = D;
      D = 1;
      var u = M;
      (M |= 4),
         (Bu.current = null),
         N0(e, n),
         If(n, e),
         t0(zi),
         (Ao = !!Ni),
         (zi = Ni = null),
         (e.current = n),
         z0(n),
         ip(),
         (M = u),
         (D = i),
         (je.transition = l);
   } else e.current = n;
   if (
      (co && ((co = !1), (Tt = e), (qo = o)),
      (l = e.pendingLanes),
      l === 0 && (Lt = null),
      ap(n.stateNode),
      _e(e, b()),
      t !== null)
   )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
         (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
   if (Jo) throw ((Jo = !1), (e = Zi), (Zi = null), e);
   return (
      qo & 1 && e.tag !== 0 && zn(),
      (l = e.pendingLanes),
      l & 1 ? (e === Ji ? gr++ : ((gr = 0), (Ji = e))) : (gr = 0),
      Bt(),
      null
   );
}
function zn() {
   if (Tt !== null) {
      var e = wc(qo),
         t = je.transition,
         n = D;
      try {
         if (((je.transition = null), (D = 16 > e ? 16 : e), Tt === null))
            var r = !1;
         else {
            if (((e = Tt), (Tt = null), (qo = 0), M & 6)) throw Error(S(331));
            var o = M;
            for (M |= 4, _ = e.current; _ !== null; ) {
               var l = _,
                  i = l.child;
               if (_.flags & 16) {
                  var u = l.deletions;
                  if (u !== null) {
                     for (var s = 0; s < u.length; s++) {
                        var a = u[s];
                        for (_ = a; _ !== null; ) {
                           var h = _;
                           switch (h.tag) {
                              case 0:
                              case 11:
                              case 15:
                                 mr(8, h, l);
                           }
                           var m = h.child;
                           if (m !== null) (m.return = h), (_ = m);
                           else
                              for (; _ !== null; ) {
                                 h = _;
                                 var p = h.sibling,
                                    v = h.return;
                                 if (($f(h), h === a)) {
                                    _ = null;
                                    break;
                                 }
                                 if (p !== null) {
                                    (p.return = v), (_ = p);
                                    break;
                                 }
                                 _ = v;
                              }
                        }
                     }
                     var y = l.alternate;
                     if (y !== null) {
                        var g = y.child;
                        if (g !== null) {
                           y.child = null;
                           do {
                              var E = g.sibling;
                              (g.sibling = null), (g = E);
                           } while (g !== null);
                        }
                     }
                     _ = l;
                  }
               }
               if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (_ = i);
               else
                  e: for (; _ !== null; ) {
                     if (((l = _), l.flags & 2048))
                        switch (l.tag) {
                           case 0:
                           case 11:
                           case 15:
                              mr(9, l, l.return);
                        }
                     var f = l.sibling;
                     if (f !== null) {
                        (f.return = l.return), (_ = f);
                        break e;
                     }
                     _ = l.return;
                  }
            }
            var c = e.current;
            for (_ = c; _ !== null; ) {
               i = _;
               var d = i.child;
               if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (_ = d);
               else
                  e: for (i = c; _ !== null; ) {
                     if (((u = _), u.flags & 2048))
                        try {
                           switch (u.tag) {
                              case 0:
                              case 11:
                              case 15:
                                 dl(9, u);
                           }
                        } catch (x) {
                           J(u, u.return, x);
                        }
                     if (u === i) {
                        _ = null;
                        break e;
                     }
                     var w = u.sibling;
                     if (w !== null) {
                        (w.return = u.return), (_ = w);
                        break e;
                     }
                     _ = u.return;
                  }
            }
            if (
               ((M = o),
               Bt(),
               lt && typeof lt.onPostCommitFiberRoot == "function")
            )
               try {
                  lt.onPostCommitFiberRoot(ol, e);
               } catch {}
            r = !0;
         }
         return r;
      } finally {
         (D = n), (je.transition = t);
      }
   }
   return !1;
}
function ma(e, t, n) {
   (t = jn(n, t)),
      (t = kf(e, t, 1)),
      (e = $t(e, t, 1)),
      (t = ve()),
      e !== null && (Br(e, 1, t), _e(e, t));
}
function J(e, t, n) {
   if (e.tag === 3) ma(e, e, n);
   else
      for (; t !== null; ) {
         if (t.tag === 3) {
            ma(t, e, n);
            break;
         } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
               typeof t.type.getDerivedStateFromError == "function" ||
               (typeof r.componentDidCatch == "function" &&
                  (Lt === null || !Lt.has(r)))
            ) {
               (e = jn(n, e)),
                  (e = xf(t, e, 1)),
                  (t = $t(t, e, 1)),
                  (e = ve()),
                  t !== null && (Br(t, 1, e), _e(t, e));
               break;
            }
         }
         t = t.return;
      }
}
function A0(e, t, n) {
   var r = e.pingCache;
   r !== null && r.delete(t),
      (t = ve()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ue === e &&
         (ce & n) === n &&
         (oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > b() - Wu)
            ? Xt(e, 0)
            : (Uu |= n)),
      _e(e, t);
}
function Wf(e, t) {
   t === 0 &&
      (e.mode & 1
         ? ((t = eo), (eo <<= 1), !(eo & 130023424) && (eo = 4194304))
         : (t = 1));
   var n = ve();
   (e = yt(e, t)), e !== null && (Br(e, t, n), _e(e, n));
}
function F0(e) {
   var t = e.memoizedState,
      n = 0;
   t !== null && (n = t.retryLane), Wf(e, n);
}
function j0(e, t) {
   var n = 0;
   switch (e.tag) {
      case 13:
         var r = e.stateNode,
            o = e.memoizedState;
         o !== null && (n = o.retryLane);
         break;
      case 19:
         r = e.stateNode;
         break;
      default:
         throw Error(S(314));
   }
   r !== null && r.delete(t), Wf(e, n);
}
var Hf;
Hf = function (e, t, n) {
   if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ce.current) xe = !0;
      else {
         if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), _0(e, t, n);
         xe = !!(e.flags & 131072);
      }
   else (xe = !1), K && t.flags & 1048576 && Kc(t, Ho, t.index);
   switch (((t.lanes = 0), t.tag)) {
      case 2:
         var r = t.type;
         xo(e, t), (e = t.pendingProps);
         var o = Mn(t, ge.current);
         Nn(t, n), (o = Iu(null, t, r, e, o, n));
         var l = Au();
         return (
            (t.flags |= 1),
            typeof o == "object" &&
            o !== null &&
            typeof o.render == "function" &&
            o.$$typeof === void 0
               ? ((t.tag = 1),
                 (t.memoizedState = null),
                 (t.updateQueue = null),
                 Ee(r) ? ((l = !0), Uo(t)) : (l = !1),
                 (t.memoizedState =
                    o.state !== null && o.state !== void 0 ? o.state : null),
                 zu(t),
                 (o.updater = cl),
                 (t.stateNode = o),
                 (o._reactInternals = t),
                 Di(t, r, e, n),
                 (t = Wi(null, t, r, !0, l, n)))
               : ((t.tag = 0),
                 K && l && Cu(t),
                 ye(null, t, o, n),
                 (t = t.child)),
            t
         );
      case 16:
         r = t.elementType;
         e: {
            switch (
               (xo(e, t),
               (e = t.pendingProps),
               (o = r._init),
               (r = o(r._payload)),
               (t.type = r),
               (o = t.tag = B0(r)),
               (e = We(r, e)),
               o)
            ) {
               case 0:
                  t = Ui(null, t, r, e, n);
                  break e;
               case 1:
                  t = oa(null, t, r, e, n);
                  break e;
               case 11:
                  t = na(null, t, r, e, n);
                  break e;
               case 14:
                  t = ra(null, t, r, We(r.type, e), n);
                  break e;
            }
            throw Error(S(306, r, ""));
         }
         return t;
      case 0:
         return (
            (r = t.type),
            (o = t.pendingProps),
            (o = t.elementType === r ? o : We(r, o)),
            Ui(e, t, r, o, n)
         );
      case 1:
         return (
            (r = t.type),
            (o = t.pendingProps),
            (o = t.elementType === r ? o : We(r, o)),
            oa(e, t, r, o, n)
         );
      case 3:
         e: {
            if ((Pf(t), e === null)) throw Error(S(387));
            (r = t.pendingProps),
               (l = t.memoizedState),
               (o = l.element),
               Xc(e, t),
               Qo(t, r, null, n);
            var i = t.memoizedState;
            if (((r = i.element), l.isDehydrated))
               if (
                  ((l = {
                     element: r,
                     isDehydrated: !1,
                     cache: i.cache,
                     pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                     transitions: i.transitions,
                  }),
                  (t.updateQueue.baseState = l),
                  (t.memoizedState = l),
                  t.flags & 256)
               ) {
                  (o = jn(Error(S(423)), t)), (t = la(e, t, r, n, o));
                  break e;
               } else if (r !== o) {
                  (o = jn(Error(S(424)), t)), (t = la(e, t, r, n, o));
                  break e;
               } else
                  for (
                     Ne = Rt(t.stateNode.containerInfo.firstChild),
                        ze = t,
                        K = !0,
                        Ke = null,
                        n = bc(t, null, r, n),
                        t.child = n;
                     n;

                  )
                     (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            else {
               if ((In(), r === o)) {
                  t = vt(e, t, n);
                  break e;
               }
               ye(e, t, r, n);
            }
            t = t.child;
         }
         return t;
      case 5:
         return (
            ef(t),
            e === null && Ai(t),
            (r = t.type),
            (o = t.pendingProps),
            (l = e !== null ? e.memoizedProps : null),
            (i = o.children),
            Ri(r, o) ? (i = null) : l !== null && Ri(r, l) && (t.flags |= 32),
            _f(e, t),
            ye(e, t, i, n),
            t.child
         );
      case 6:
         return e === null && Ai(t), null;
      case 13:
         return Tf(e, t, n);
      case 4:
         return (
            Ru(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = An(t, null, r, n)) : ye(e, t, r, n),
            t.child
         );
      case 11:
         return (
            (r = t.type),
            (o = t.pendingProps),
            (o = t.elementType === r ? o : We(r, o)),
            na(e, t, r, o, n)
         );
      case 7:
         return ye(e, t, t.pendingProps, n), t.child;
      case 8:
         return ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
         return ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
         e: {
            if (
               ((r = t.type._context),
               (o = t.pendingProps),
               (l = t.memoizedProps),
               (i = o.value),
               U(Vo, r._currentValue),
               (r._currentValue = i),
               l !== null)
            )
               if (Xe(l.value, i)) {
                  if (l.children === o.children && !Ce.current) {
                     t = vt(e, t, n);
                     break e;
                  }
               } else
                  for (
                     l = t.child, l !== null && (l.return = t);
                     l !== null;

                  ) {
                     var u = l.dependencies;
                     if (u !== null) {
                        i = l.child;
                        for (var s = u.firstContext; s !== null; ) {
                           if (s.context === r) {
                              if (l.tag === 1) {
                                 (s = dt(-1, n & -n)), (s.tag = 2);
                                 var a = l.updateQueue;
                                 if (a !== null) {
                                    a = a.shared;
                                    var h = a.pending;
                                    h === null
                                       ? (s.next = s)
                                       : ((s.next = h.next), (h.next = s)),
                                       (a.pending = s);
                                 }
                              }
                              (l.lanes |= n),
                                 (s = l.alternate),
                                 s !== null && (s.lanes |= n),
                                 Fi(l.return, n, t),
                                 (u.lanes |= n);
                              break;
                           }
                           s = s.next;
                        }
                     } else if (l.tag === 10)
                        i = l.type === t.type ? null : l.child;
                     else if (l.tag === 18) {
                        if (((i = l.return), i === null)) throw Error(S(341));
                        (i.lanes |= n),
                           (u = i.alternate),
                           u !== null && (u.lanes |= n),
                           Fi(i, n, t),
                           (i = l.sibling);
                     } else i = l.child;
                     if (i !== null) i.return = l;
                     else
                        for (i = l; i !== null; ) {
                           if (i === t) {
                              i = null;
                              break;
                           }
                           if (((l = i.sibling), l !== null)) {
                              (l.return = i.return), (i = l);
                              break;
                           }
                           i = i.return;
                        }
                     l = i;
                  }
            ye(e, t, o.children, n), (t = t.child);
         }
         return t;
      case 9:
         return (
            (o = t.type),
            (r = t.pendingProps.children),
            Nn(t, n),
            (o = De(o)),
            (r = r(o)),
            (t.flags |= 1),
            ye(e, t, r, n),
            t.child
         );
      case 14:
         return (
            (r = t.type),
            (o = We(r, t.pendingProps)),
            (o = We(r.type, o)),
            ra(e, t, r, o, n)
         );
      case 15:
         return Cf(e, t, t.type, t.pendingProps, n);
      case 17:
         return (
            (r = t.type),
            (o = t.pendingProps),
            (o = t.elementType === r ? o : We(r, o)),
            xo(e, t),
            (t.tag = 1),
            Ee(r) ? ((e = !0), Uo(t)) : (e = !1),
            Nn(t, n),
            Jc(t, r, o),
            Di(t, r, o, n),
            Wi(null, t, r, !0, e, n)
         );
      case 19:
         return Of(e, t, n);
      case 22:
         return Ef(e, t, n);
   }
   throw Error(S(156, t.tag));
};
function Vf(e, t) {
   return hc(e, t);
}
function D0(e, t, n, r) {
   (this.tag = e),
      (this.key = n),
      (this.sibling =
         this.child =
         this.return =
         this.stateNode =
         this.type =
         this.elementType =
            null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
         this.memoizedState =
         this.updateQueue =
         this.memoizedProps =
            null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
}
function Fe(e, t, n, r) {
   return new D0(e, t, n, r);
}
function Qu(e) {
   return (e = e.prototype), !(!e || !e.isReactComponent);
}
function B0(e) {
   if (typeof e == "function") return Qu(e) ? 1 : 0;
   if (e != null) {
      if (((e = e.$$typeof), e === fu)) return 11;
      if (e === du) return 14;
   }
   return 2;
}
function It(e, t) {
   var n = e.alternate;
   return (
      n === null
         ? ((n = Fe(e.tag, t, e.key, e.mode)),
           (n.elementType = e.elementType),
           (n.type = e.type),
           (n.stateNode = e.stateNode),
           (n.alternate = e),
           (e.alternate = n))
         : ((n.pendingProps = t),
           (n.type = e.type),
           (n.flags = 0),
           (n.subtreeFlags = 0),
           (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
         t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
   );
}
function _o(e, t, n, r, o, l) {
   var i = 2;
   if (((r = e), typeof e == "function")) Qu(e) && (i = 1);
   else if (typeof e == "string") i = 5;
   else
      e: switch (e) {
         case mn:
            return Zt(n.children, o, l, t);
         case cu:
            (i = 8), (o |= 8);
            break;
         case ai:
            return (
               (e = Fe(12, n, t, o | 2)), (e.elementType = ai), (e.lanes = l), e
            );
         case ci:
            return (
               (e = Fe(13, n, t, o)), (e.elementType = ci), (e.lanes = l), e
            );
         case fi:
            return (
               (e = Fe(19, n, t, o)), (e.elementType = fi), (e.lanes = l), e
            );
         case qa:
            return ml(n, o, l, t);
         default:
            if (typeof e == "object" && e !== null)
               switch (e.$$typeof) {
                  case Za:
                     i = 10;
                     break e;
                  case Ja:
                     i = 9;
                     break e;
                  case fu:
                     i = 11;
                     break e;
                  case du:
                     i = 14;
                     break e;
                  case xt:
                     (i = 16), (r = null);
                     break e;
               }
            throw Error(S(130, e == null ? e : typeof e, ""));
      }
   return (
      (t = Fe(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
   );
}
function Zt(e, t, n, r) {
   return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function ml(e, t, n, r) {
   return (
      (e = Fe(22, e, r, t)),
      (e.elementType = qa),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
   );
}
function ti(e, t, n) {
   return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function ni(e, t, n) {
   return (
      (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
         containerInfo: e.containerInfo,
         pendingChildren: null,
         implementation: e.implementation,
      }),
      t
   );
}
function U0(e, t, n, r, o) {
   (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
         this.pingCache =
         this.current =
         this.pendingChildren =
            null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Al(0)),
      (this.expirationTimes = Al(-1)),
      (this.entangledLanes =
         this.finishedLanes =
         this.mutableReadLanes =
         this.expiredLanes =
         this.pingedLanes =
         this.suspendedLanes =
         this.pendingLanes =
            0),
      (this.entanglements = Al(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
}
function Gu(e, t, n, r, o, l, i, u, s) {
   return (
      (e = new U0(e, t, n, u, s)),
      t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
      (l = Fe(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
         element: r,
         isDehydrated: n,
         cache: null,
         transitions: null,
         pendingSuspenseBoundaries: null,
      }),
      zu(l),
      e
   );
}
function W0(e, t, n) {
   var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
   return {
      $$typeof: pn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
   };
}
function Kf(e) {
   if (!e) return Ft;
   e = e._reactInternals;
   e: {
      if (rn(e) !== e || e.tag !== 1) throw Error(S(170));
      var t = e;
      do {
         switch (t.tag) {
            case 3:
               t = t.stateNode.context;
               break e;
            case 1:
               if (Ee(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
               }
         }
         t = t.return;
      } while (t !== null);
      throw Error(S(171));
   }
   if (e.tag === 1) {
      var n = e.type;
      if (Ee(n)) return Hc(e, n, t);
   }
   return t;
}
function Qf(e, t, n, r, o, l, i, u, s) {
   return (
      (e = Gu(n, r, !0, e, o, l, i, u, s)),
      (e.context = Kf(null)),
      (n = e.current),
      (r = ve()),
      (o = Mt(n)),
      (l = dt(r, o)),
      (l.callback = t ?? null),
      $t(n, l, o),
      (e.current.lanes = o),
      Br(e, o, r),
      _e(e, r),
      e
   );
}
function hl(e, t, n, r) {
   var o = t.current,
      l = ve(),
      i = Mt(o);
   return (
      (n = Kf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = dt(l, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = $t(o, t, i)),
      e !== null && (Ge(e, o, i, l), wo(e, o, i)),
      i
   );
}
function el(e) {
   if (((e = e.current), !e.child)) return null;
   switch (e.child.tag) {
      case 5:
         return e.child.stateNode;
      default:
         return e.child.stateNode;
   }
}
function ha(e, t) {
   if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
   }
}
function Yu(e, t) {
   ha(e, t), (e = e.alternate) && ha(e, t);
}
function H0() {
   return null;
}
var Gf =
   typeof reportError == "function"
      ? reportError
      : function (e) {
           console.error(e);
        };
function Xu(e) {
   this._internalRoot = e;
}
gl.prototype.render = Xu.prototype.render = function (e) {
   var t = this._internalRoot;
   if (t === null) throw Error(S(409));
   hl(e, t, null, null);
};
gl.prototype.unmount = Xu.prototype.unmount = function () {
   var e = this._internalRoot;
   if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      tn(function () {
         hl(null, e, null, null);
      }),
         (t[gt] = null);
   }
};
function gl(e) {
   this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function (e) {
   if (e) {
      var t = xc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
      Et.splice(n, 0, e), n === 0 && Ec(e);
   }
};
function Zu(e) {
   return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
   return !(
      !e ||
      (e.nodeType !== 1 &&
         e.nodeType !== 9 &&
         e.nodeType !== 11 &&
         (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
   );
}
function ga() {}
function V0(e, t, n, r, o) {
   if (o) {
      if (typeof r == "function") {
         var l = r;
         r = function () {
            var a = el(i);
            l.call(a);
         };
      }
      var i = Qf(t, r, e, 0, null, !1, !1, "", ga);
      return (
         (e._reactRootContainer = i),
         (e[gt] = i.current),
         Pr(e.nodeType === 8 ? e.parentNode : e),
         tn(),
         i
      );
   }
   for (; (o = e.lastChild); ) e.removeChild(o);
   if (typeof r == "function") {
      var u = r;
      r = function () {
         var a = el(s);
         u.call(a);
      };
   }
   var s = Gu(e, 0, !1, null, null, !1, !1, "", ga);
   return (
      (e._reactRootContainer = s),
      (e[gt] = s.current),
      Pr(e.nodeType === 8 ? e.parentNode : e),
      tn(function () {
         hl(t, s, n, r);
      }),
      s
   );
}
function vl(e, t, n, r, o) {
   var l = n._reactRootContainer;
   if (l) {
      var i = l;
      if (typeof o == "function") {
         var u = o;
         o = function () {
            var s = el(i);
            u.call(s);
         };
      }
      hl(t, i, e, o);
   } else i = V0(n, t, e, o, r);
   return el(i);
}
Sc = function (e) {
   switch (e.tag) {
      case 3:
         var t = e.stateNode;
         if (t.current.memoizedState.isDehydrated) {
            var n = ir(t.pendingLanes);
            n !== 0 &&
               (hu(t, n | 1), _e(t, b()), !(M & 6) && ((Dn = b() + 500), Bt()));
         }
         break;
      case 13:
         tn(function () {
            var r = yt(e, 1);
            if (r !== null) {
               var o = ve();
               Ge(r, e, 1, o);
            }
         }),
            Yu(e, 1);
   }
};
gu = function (e) {
   if (e.tag === 13) {
      var t = yt(e, 134217728);
      if (t !== null) {
         var n = ve();
         Ge(t, e, 134217728, n);
      }
      Yu(e, 134217728);
   }
};
kc = function (e) {
   if (e.tag === 13) {
      var t = Mt(e),
         n = yt(e, t);
      if (n !== null) {
         var r = ve();
         Ge(n, e, t, r);
      }
      Yu(e, t);
   }
};
xc = function () {
   return D;
};
Cc = function (e, t) {
   var n = D;
   try {
      return (D = e), t();
   } finally {
      D = n;
   }
};
ki = function (e, t, n) {
   switch (t) {
      case "input":
         if ((mi(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
               n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
               ),
                  t = 0;
               t < n.length;
               t++
            ) {
               var r = n[t];
               if (r !== e && r.form === e.form) {
                  var o = sl(r);
                  if (!o) throw Error(S(90));
                  ec(r), mi(r, o);
               }
            }
         }
         break;
      case "textarea":
         nc(e, n);
         break;
      case "select":
         (t = n.value), t != null && _n(e, !!n.multiple, t, !1);
   }
};
ac = Hu;
cc = tn;
var K0 = { usingClientEntryPoint: !1, Events: [Wr, vn, sl, uc, sc, Hu] },
   er = {
      findFiberByHostInstance: Qt,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
   },
   Q0 = {
      bundleType: er.bundleType,
      version: er.version,
      rendererPackageName: er.rendererPackageName,
      rendererConfig: er.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: St.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
         return (e = pc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: er.findFiberByHostInstance || H0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
   };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
   var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
   if (!fo.isDisabled && fo.supportsFiber)
      try {
         (ol = fo.inject(Q0)), (lt = fo);
      } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0;
Le.createPortal = function (e, t) {
   var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
   if (!Zu(t)) throw Error(S(200));
   return W0(e, t, null, n);
};
Le.createRoot = function (e, t) {
   if (!Zu(e)) throw Error(S(299));
   var n = !1,
      r = "",
      o = Gf;
   return (
      t != null &&
         (t.unstable_strictMode === !0 && (n = !0),
         t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
         t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
      (t = Gu(e, 1, !1, null, null, n, !1, r, o)),
      (e[gt] = t.current),
      Pr(e.nodeType === 8 ? e.parentNode : e),
      new Xu(t)
   );
};
Le.findDOMNode = function (e) {
   if (e == null) return null;
   if (e.nodeType === 1) return e;
   var t = e._reactInternals;
   if (t === void 0)
      throw typeof e.render == "function"
         ? Error(S(188))
         : ((e = Object.keys(e).join(",")), Error(S(268, e)));
   return (e = pc(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
   return tn(e);
};
Le.hydrate = function (e, t, n) {
   if (!yl(t)) throw Error(S(200));
   return vl(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
   if (!Zu(e)) throw Error(S(405));
   var r = (n != null && n.hydratedSources) || null,
      o = !1,
      l = "",
      i = Gf;
   if (
      (n != null &&
         (n.unstable_strictMode === !0 && (o = !0),
         n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
         n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
      (t = Qf(t, null, e, 1, n ?? null, o, !1, l, i)),
      (e[gt] = t.current),
      Pr(e),
      r)
   )
      for (e = 0; e < r.length; e++)
         (n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
               ? (t.mutableSourceEagerHydrationData = [n, o])
               : t.mutableSourceEagerHydrationData.push(n, o);
   return new gl(t);
};
Le.render = function (e, t, n) {
   if (!yl(t)) throw Error(S(200));
   return vl(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
   if (!yl(e)) throw Error(S(40));
   return e._reactRootContainer
      ? (tn(function () {
           vl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[gt] = null);
           });
        }),
        !0)
      : !1;
};
Le.unstable_batchedUpdates = Hu;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
   if (!yl(n)) throw Error(S(200));
   if (e == null || e._reactInternals === void 0) throw Error(S(38));
   return vl(e, t, n, !1, r);
};
Le.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
   function t() {
      if (
         !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
         )
      )
         try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
         } catch (n) {
            console.error(n);
         }
   }
   t(), (e.exports = Le);
})(Hd);
var ya = ii;
(li.createRoot = ya.createRoot), (li.hydrateRoot = ya.hydrateRoot);
const qe = "69ea69a01feb02122931d38277908678",
   G0 = "https://api.themoviedb.org/3",
   be = async (e) => await (await fetch(`${G0}${e}`)).json(),
   va = {
      getHomeList: async () => [
         {
            slug: "originals",
            title: "Originais do Netflix",
            items: await be(
               `/discover/tv?with_network=213&language=pt-BR&api_key=${qe}&with_original_language=en`
            ),
         },
         {
            slug: "trending",
            title: "Recomendados para você",
            items: await be(`/trending/all/week?language=pt-BR&api_key=${qe}`),
         },
         {
            slug: "top-rated",
            title: "Em alta",
            items: await be(`/movie/top_rated?language=pt-BR&api_key=${qe}`),
         },
         {
            slug: "action",
            title: "Ação",
            items: await be(
               `/discover/movie?with_genres=28&language=pt-BR&api_key=${qe}`
            ),
         },
         {
            slug: "comedy",
            title: "Comédia",
            items: await be(
               `/discover/movie?with_genres=35&language=pt-BR&api_key=${qe}`
            ),
         },
         {
            slug: "horror",
            title: "Terror",
            items: await be(
               `/discover/movie?with_genres=27&language=pt-BR&api_key=${qe}`
            ),
         },
         {
            slug: "romance",
            title: "Romance",
            items: await be(
               `/discover/movie?with_genres=10749&language=pt-BR&api_key=${qe}`
            ),
         },
         {
            slug: "documentary",
            title: "Documentários",
            items: await be(
               `/discover/movie?with_genres=99&language=pt-BR&api_key=${qe}`
            ),
         },
      ],
      getMovieInfo: async (e, t) => {
         let n = {};
         if (e)
            switch (t) {
               case "movie":
                  n = await be(`/movie/${e}?language=pt-BR&api_key=${qe}`);
                  break;
               case "tv":
                  n = await be(`/tv/${e}?language=pt-BR&api_key=${qe}`);
                  break;
            }
         return n;
      },
   };
const Y0 = ({ bg: e }) =>
   Ve("header", {
      className: e ? "black-bg" : "",
      children: [
         $("div", {
            className: "logo",
            children: $("a", {
               href: "#!",
               children: $("img", { src: "./logo.png", alt: "logo" }),
            }),
         }),
         $("div", {
            className: "user",
            children: $("a", {
               href: "#!",
               children: $("img", {
                  src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
                  alt: "usuário",
               }),
            }),
         }),
      ],
   });
function A() {
   return (
      (A = Object.assign
         ? Object.assign.bind()
         : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                 var n = arguments[t];
                 for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
           }),
      A.apply(this, arguments)
   );
}
function dn(e) {
   return e !== null && typeof e == "object" && e.constructor === Object;
}
function Yf(e) {
   if (!dn(e)) return e;
   const t = {};
   return (
      Object.keys(e).forEach((n) => {
         t[n] = Yf(e[n]);
      }),
      t
   );
}
function pt(e, t, n = { clone: !0 }) {
   const r = n.clone ? A({}, e) : e;
   return (
      dn(e) &&
         dn(t) &&
         Object.keys(t).forEach((o) => {
            o !== "__proto__" &&
               (dn(t[o]) && o in e && dn(e[o])
                  ? (r[o] = pt(e[o], t[o], n))
                  : n.clone
                  ? (r[o] = dn(t[o]) ? Yf(t[o]) : t[o])
                  : (r[o] = t[o]));
         }),
      r
   );
}
function Bn(e) {
   let t = "https://mui.com/production-error/?code=" + e;
   for (let n = 1; n < arguments.length; n += 1)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
   return (
      "Minified MUI error #" + e + "; visit " + t + " for the full message."
   );
}
function mt(e) {
   if (typeof e != "string") throw new Error(Bn(7));
   return e.charAt(0).toUpperCase() + e.slice(1);
}
function Xf(e, t) {
   const n = A({}, t);
   return (
      Object.keys(e).forEach((r) => {
         if (r.toString().match(/^(components|slots)$/))
            n[r] = A({}, e[r], n[r]);
         else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
            const o = e[r] || {},
               l = t[r];
            (n[r] = {}),
               !l || !Object.keys(l)
                  ? (n[r] = o)
                  : !o || !Object.keys(o)
                  ? (n[r] = l)
                  : ((n[r] = A({}, l)),
                    Object.keys(o).forEach((i) => {
                       n[r][i] = Xf(o[i], l[i]);
                    }));
         } else n[r] === void 0 && (n[r] = e[r]);
      }),
      n
   );
}
function X0(e, t, n = void 0) {
   const r = {};
   return (
      Object.keys(e).forEach((o) => {
         r[o] = e[o]
            .reduce((l, i) => {
               if (i) {
                  const u = t(i);
                  u !== "" && l.push(u), n && n[i] && l.push(n[i]);
               }
               return l;
            }, [])
            .join(" ");
      }),
      r
   );
}
const wa = (e) => e,
   Z0 = () => {
      let e = wa;
      return {
         configure(t) {
            e = t;
         },
         generate(t) {
            return e(t);
         },
         reset() {
            e = wa;
         },
      };
   },
   J0 = Z0(),
   q0 = J0,
   b0 = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      readOnly: "readOnly",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      required: "required",
      selected: "selected",
   };
function Zf(e, t, n = "Mui") {
   const r = b0[t];
   return r ? `${n}-${r}` : `${q0.generate(e)}-${t}`;
}
function em(e, t, n = "Mui") {
   const r = {};
   return (
      t.forEach((o) => {
         r[o] = Zf(e, o, n);
      }),
      r
   );
}
function Ye(e, t) {
   if (e == null) return {};
   var n = {},
      r = Object.keys(e),
      o,
      l;
   for (l = 0; l < r.length; l++)
      (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
   return n;
}
function Jf(e) {
   var t,
      n,
      r = "";
   if (typeof e == "string" || typeof e == "number") r += e;
   else if (typeof e == "object")
      if (Array.isArray(e))
         for (t = 0; t < e.length; t++)
            e[t] && (n = Jf(e[t])) && (r && (r += " "), (r += n));
      else for (t in e) e[t] && (r && (r += " "), (r += t));
   return r;
}
function tm() {
   for (var e, t, n = 0, r = ""; n < arguments.length; )
      (e = arguments[n++]) && (t = Jf(e)) && (r && (r += " "), (r += t));
   return r;
}
function qf(e) {
   var t = Object.create(null);
   return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
   };
}
var nm =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
   rm = qf(function (e) {
      return (
         nm.test(e) ||
         (e.charCodeAt(0) === 111 &&
            e.charCodeAt(1) === 110 &&
            e.charCodeAt(2) < 91)
      );
   });
function om(e) {
   if (e.sheet) return e.sheet;
   for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
         return document.styleSheets[t];
}
function lm(e) {
   var t = document.createElement("style");
   return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
   );
}
var im = (function () {
      function e(n) {
         var r = this;
         (this._insertTag = function (o) {
            var l;
            r.tags.length === 0
               ? r.insertionPoint
                  ? (l = r.insertionPoint.nextSibling)
                  : r.prepend
                  ? (l = r.container.firstChild)
                  : (l = r.before)
               : (l = r.tags[r.tags.length - 1].nextSibling),
               r.container.insertBefore(o, l),
               r.tags.push(o);
         }),
            (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
            (this.tags = []),
            (this.ctr = 0),
            (this.nonce = n.nonce),
            (this.key = n.key),
            (this.container = n.container),
            (this.prepend = n.prepend),
            (this.insertionPoint = n.insertionPoint),
            (this.before = null);
      }
      var t = e.prototype;
      return (
         (t.hydrate = function (r) {
            r.forEach(this._insertTag);
         }),
         (t.insert = function (r) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
               this._insertTag(lm(this));
            var o = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
               var l = om(o);
               try {
                  l.insertRule(r, l.cssRules.length);
               } catch {}
            } else o.appendChild(document.createTextNode(r));
            this.ctr++;
         }),
         (t.flush = function () {
            this.tags.forEach(function (r) {
               return r.parentNode && r.parentNode.removeChild(r);
            }),
               (this.tags = []),
               (this.ctr = 0);
         }),
         e
      );
   })(),
   me = "-ms-",
   tl = "-moz-",
   I = "-webkit-",
   bf = "comm",
   Ju = "rule",
   qu = "decl",
   um = "@import",
   ed = "@keyframes",
   sm = Math.abs,
   wl = String.fromCharCode,
   am = Object.assign;
function cm(e, t) {
   return ae(e, 0) ^ 45
      ? (((((((t << 2) ^ ae(e, 0)) << 2) ^ ae(e, 1)) << 2) ^ ae(e, 2)) << 2) ^
           ae(e, 3)
      : 0;
}
function td(e) {
   return e.trim();
}
function fm(e, t) {
   return (e = t.exec(e)) ? e[0] : e;
}
function F(e, t, n) {
   return e.replace(t, n);
}
function eu(e, t) {
   return e.indexOf(t);
}
function ae(e, t) {
   return e.charCodeAt(t) | 0;
}
function Ir(e, t, n) {
   return e.slice(t, n);
}
function tt(e) {
   return e.length;
}
function bu(e) {
   return e.length;
}
function po(e, t) {
   return t.push(e), e;
}
function dm(e, t) {
   return e.map(t).join("");
}
var Sl = 1,
   Un = 1,
   nd = 0,
   Pe = 0,
   ee = 0,
   Qn = "";
function kl(e, t, n, r, o, l, i) {
   return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: l,
      line: Sl,
      column: Un,
      length: i,
      return: "",
   };
}
function tr(e, t) {
   return am(
      kl("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
   );
}
function pm() {
   return ee;
}
function mm() {
   return (
      (ee = Pe > 0 ? ae(Qn, --Pe) : 0), Un--, ee === 10 && ((Un = 1), Sl--), ee
   );
}
function Re() {
   return (
      (ee = Pe < nd ? ae(Qn, Pe++) : 0), Un++, ee === 10 && ((Un = 1), Sl++), ee
   );
}
function ut() {
   return ae(Qn, Pe);
}
function Po() {
   return Pe;
}
function Vr(e, t) {
   return Ir(Qn, e, t);
}
function Ar(e) {
   switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
         return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
         return 4;
      case 58:
         return 3;
      case 34:
      case 39:
      case 40:
      case 91:
         return 2;
      case 41:
      case 93:
         return 1;
   }
   return 0;
}
function rd(e) {
   return (Sl = Un = 1), (nd = tt((Qn = e))), (Pe = 0), [];
}
function od(e) {
   return (Qn = ""), e;
}
function To(e) {
   return td(Vr(Pe - 1, tu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hm(e) {
   for (; (ee = ut()) && ee < 33; ) Re();
   return Ar(e) > 2 || Ar(ee) > 3 ? "" : " ";
}
function gm(e, t) {
   for (
      ;
      --t &&
      Re() &&
      !(ee < 48 || ee > 102 || (ee > 57 && ee < 65) || (ee > 70 && ee < 97));

   );
   return Vr(e, Po() + (t < 6 && ut() == 32 && Re() == 32));
}
function tu(e) {
   for (; Re(); )
      switch (ee) {
         case e:
            return Pe;
         case 34:
         case 39:
            e !== 34 && e !== 39 && tu(ee);
            break;
         case 40:
            e === 41 && tu(e);
            break;
         case 92:
            Re();
            break;
      }
   return Pe;
}
function ym(e, t) {
   for (; Re() && e + ee !== 47 + 10; )
      if (e + ee === 42 + 42 && ut() === 47) break;
   return "/*" + Vr(t, Pe - 1) + "*" + wl(e === 47 ? e : Re());
}
function vm(e) {
   for (; !Ar(ut()); ) Re();
   return Vr(e, Pe);
}
function wm(e) {
   return od(Oo("", null, null, null, [""], (e = rd(e)), 0, [0], e));
}
function Oo(e, t, n, r, o, l, i, u, s) {
   for (
      var a = 0,
         h = 0,
         m = i,
         p = 0,
         v = 0,
         y = 0,
         g = 1,
         E = 1,
         f = 1,
         c = 0,
         d = "",
         w = o,
         x = l,
         C = r,
         k = d;
      E;

   )
      switch (((y = c), (c = Re()))) {
         case 40:
            if (y != 108 && ae(k, m - 1) == 58) {
               eu((k += F(To(c), "&", "&\f")), "&\f") != -1 && (f = -1);
               break;
            }
         case 34:
         case 39:
         case 91:
            k += To(c);
            break;
         case 9:
         case 10:
         case 13:
         case 32:
            k += hm(y);
            break;
         case 92:
            k += gm(Po() - 1, 7);
            continue;
         case 47:
            switch (ut()) {
               case 42:
               case 47:
                  po(Sm(ym(Re(), Po()), t, n), s);
                  break;
               default:
                  k += "/";
            }
            break;
         case 123 * g:
            u[a++] = tt(k) * f;
         case 125 * g:
         case 59:
         case 0:
            switch (c) {
               case 0:
               case 125:
                  E = 0;
               case 59 + h:
                  v > 0 &&
                     tt(k) - m &&
                     po(
                        v > 32
                           ? ka(k + ";", r, n, m - 1)
                           : ka(F(k, " ", "") + ";", r, n, m - 2),
                        s
                     );
                  break;
               case 59:
                  k += ";";
               default:
                  if (
                     (po(
                        (C = Sa(k, t, n, a, h, o, u, d, (w = []), (x = []), m)),
                        l
                     ),
                     c === 123)
                  )
                     if (h === 0) Oo(k, t, C, C, w, l, m, u, x);
                     else
                        switch (p === 99 && ae(k, 3) === 110 ? 100 : p) {
                           case 100:
                           case 109:
                           case 115:
                              Oo(
                                 e,
                                 C,
                                 C,
                                 r &&
                                    po(
                                       Sa(
                                          e,
                                          C,
                                          C,
                                          0,
                                          0,
                                          o,
                                          u,
                                          d,
                                          o,
                                          (w = []),
                                          m
                                       ),
                                       x
                                    ),
                                 o,
                                 x,
                                 m,
                                 u,
                                 r ? w : x
                              );
                              break;
                           default:
                              Oo(k, C, C, C, [""], x, 0, u, x);
                        }
            }
            (a = h = v = 0), (g = f = 1), (d = k = ""), (m = i);
            break;
         case 58:
            (m = 1 + tt(k)), (v = y);
         default:
            if (g < 1) {
               if (c == 123) --g;
               else if (c == 125 && g++ == 0 && mm() == 125) continue;
            }
            switch (((k += wl(c)), c * g)) {
               case 38:
                  f = h > 0 ? 1 : ((k += "\f"), -1);
                  break;
               case 44:
                  (u[a++] = (tt(k) - 1) * f), (f = 1);
                  break;
               case 64:
                  ut() === 45 && (k += To(Re())),
                     (p = ut()),
                     (h = m = tt((d = k += vm(Po())))),
                     c++;
                  break;
               case 45:
                  y === 45 && tt(k) == 2 && (g = 0);
            }
      }
   return l;
}
function Sa(e, t, n, r, o, l, i, u, s, a, h) {
   for (
      var m = o - 1, p = o === 0 ? l : [""], v = bu(p), y = 0, g = 0, E = 0;
      y < r;
      ++y
   )
      for (var f = 0, c = Ir(e, m + 1, (m = sm((g = i[y])))), d = e; f < v; ++f)
         (d = td(g > 0 ? p[f] + " " + c : F(c, /&\f/g, p[f]))) && (s[E++] = d);
   return kl(e, t, n, o === 0 ? Ju : u, s, a, h);
}
function Sm(e, t, n) {
   return kl(e, t, n, bf, wl(pm()), Ir(e, 2, -2), 0);
}
function ka(e, t, n, r) {
   return kl(e, t, n, qu, Ir(e, 0, r), Ir(e, r + 1, -1), r);
}
function Rn(e, t) {
   for (var n = "", r = bu(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
   return n;
}
function km(e, t, n, r) {
   switch (e.type) {
      case um:
      case qu:
         return (e.return = e.return || e.value);
      case bf:
         return "";
      case ed:
         return (e.return = e.value + "{" + Rn(e.children, r) + "}");
      case Ju:
         e.value = e.props.join(",");
   }
   return tt((n = Rn(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
}
function xm(e) {
   var t = bu(e);
   return function (n, r, o, l) {
      for (var i = "", u = 0; u < t; u++) i += e[u](n, r, o, l) || "";
      return i;
   };
}
function Cm(e) {
   return function (t) {
      t.root || ((t = t.return) && e(t));
   };
}
var Em = function (t, n, r) {
      for (
         var o = 0, l = 0;
         (o = l), (l = ut()), o === 38 && l === 12 && (n[r] = 1), !Ar(l);

      )
         Re();
      return Vr(t, Pe);
   },
   _m = function (t, n) {
      var r = -1,
         o = 44;
      do
         switch (Ar(o)) {
            case 0:
               o === 38 && ut() === 12 && (n[r] = 1),
                  (t[r] += Em(Pe - 1, n, r));
               break;
            case 2:
               t[r] += To(o);
               break;
            case 4:
               if (o === 44) {
                  (t[++r] = ut() === 58 ? "&\f" : ""), (n[r] = t[r].length);
                  break;
               }
            default:
               t[r] += wl(o);
         }
      while ((o = Re()));
      return t;
   },
   Pm = function (t, n) {
      return od(_m(rd(t), n));
   },
   xa = new WeakMap(),
   Tm = function (t) {
      if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
         for (
            var n = t.value,
               r = t.parent,
               o = t.column === r.column && t.line === r.line;
            r.type !== "rule";

         )
            if (((r = r.parent), !r)) return;
         if (
            !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !xa.get(r)) &&
            !o
         ) {
            xa.set(t, !0);
            for (
               var l = [], i = Pm(n, l), u = r.props, s = 0, a = 0;
               s < i.length;
               s++
            )
               for (var h = 0; h < u.length; h++, a++)
                  t.props[a] = l[s]
                     ? i[s].replace(/&\f/g, u[h])
                     : u[h] + " " + i[s];
         }
      }
   },
   Om = function (t) {
      if (t.type === "decl") {
         var n = t.value;
         n.charCodeAt(0) === 108 &&
            n.charCodeAt(2) === 98 &&
            ((t.return = ""), (t.value = ""));
      }
   };
function ld(e, t) {
   switch (cm(e, t)) {
      case 5103:
         return I + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
         return I + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
         return I + e + tl + e + me + e + e;
      case 6828:
      case 4268:
         return I + e + me + e + e;
      case 6165:
         return I + e + me + "flex-" + e + e;
      case 5187:
         return (
            I +
            e +
            F(e, /(\w+).+(:[^]+)/, I + "box-$1$2" + me + "flex-$1$2") +
            e
         );
      case 5443:
         return I + e + me + "flex-item-" + F(e, /flex-|-self/, "") + e;
      case 4675:
         return (
            I +
            e +
            me +
            "flex-line-pack" +
            F(e, /align-content|flex-|-self/, "") +
            e
         );
      case 5548:
         return I + e + me + F(e, "shrink", "negative") + e;
      case 5292:
         return I + e + me + F(e, "basis", "preferred-size") + e;
      case 6060:
         return (
            I +
            "box-" +
            F(e, "-grow", "") +
            I +
            e +
            me +
            F(e, "grow", "positive") +
            e
         );
      case 4554:
         return I + F(e, /([^-])(transform)/g, "$1" + I + "$2") + e;
      case 6187:
         return (
            F(
               F(F(e, /(zoom-|grab)/, I + "$1"), /(image-set)/, I + "$1"),
               e,
               ""
            ) + e
         );
      case 5495:
      case 3959:
         return F(e, /(image-set\([^]*)/, I + "$1$`$1");
      case 4968:
         return (
            F(
               F(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  I + "box-pack:$3" + me + "flex-pack:$3"
               ),
               /s.+-b[^;]+/,
               "justify"
            ) +
            I +
            e +
            e
         );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
         return F(e, /(.+)-inline(.+)/, I + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
         if (tt(e) - 1 - t > 6)
            switch (ae(e, t + 1)) {
               case 109:
                  if (ae(e, t + 4) !== 45) break;
               case 102:
                  return (
                     F(
                        e,
                        /(.+:)(.+)-([^]+)/,
                        "$1" +
                           I +
                           "$2-$3$1" +
                           tl +
                           (ae(e, t + 3) == 108 ? "$3" : "$2-$3")
                     ) + e
                  );
               case 115:
                  return ~eu(e, "stretch")
                     ? ld(F(e, "stretch", "fill-available"), t) + e
                     : e;
            }
         break;
      case 4949:
         if (ae(e, t + 1) !== 115) break;
      case 6444:
         switch (ae(e, tt(e) - 3 - (~eu(e, "!important") && 10))) {
            case 107:
               return F(e, ":", ":" + I) + e;
            case 101:
               return (
                  F(
                     e,
                     /(.+:)([^;!]+)(;|!.+)?/,
                     "$1" +
                        I +
                        (ae(e, 14) === 45 ? "inline-" : "") +
                        "box$3$1" +
                        I +
                        "$2$3$1" +
                        me +
                        "$2box$3"
                  ) + e
               );
         }
         break;
      case 5936:
         switch (ae(e, t + 11)) {
            case 114:
               return I + e + me + F(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
            case 108:
               return I + e + me + F(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
            case 45:
               return I + e + me + F(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
         }
         return I + e + me + e + e;
   }
   return e;
}
var Nm = function (t, n, r, o) {
      if (t.length > -1 && !t.return)
         switch (t.type) {
            case qu:
               t.return = ld(t.value, t.length);
               break;
            case ed:
               return Rn([tr(t, { value: F(t.value, "@", "@" + I) })], o);
            case Ju:
               if (t.length)
                  return dm(t.props, function (l) {
                     switch (fm(l, /(::plac\w+|:read-\w+)/)) {
                        case ":read-only":
                        case ":read-write":
                           return Rn(
                              [
                                 tr(t, {
                                    props: [
                                       F(l, /:(read-\w+)/, ":" + tl + "$1"),
                                    ],
                                 }),
                              ],
                              o
                           );
                        case "::placeholder":
                           return Rn(
                              [
                                 tr(t, {
                                    props: [
                                       F(l, /:(plac\w+)/, ":" + I + "input-$1"),
                                    ],
                                 }),
                                 tr(t, {
                                    props: [
                                       F(l, /:(plac\w+)/, ":" + tl + "$1"),
                                    ],
                                 }),
                                 tr(t, {
                                    props: [
                                       F(l, /:(plac\w+)/, me + "input-$1"),
                                    ],
                                 }),
                              ],
                              o
                           );
                     }
                     return "";
                  });
         }
   },
   zm = [Nm],
   Rm = function (t) {
      var n = t.key;
      if (n === "css") {
         var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
         Array.prototype.forEach.call(r, function (g) {
            var E = g.getAttribute("data-emotion");
            E.indexOf(" ") !== -1 &&
               (document.head.appendChild(g), g.setAttribute("data-s", ""));
         });
      }
      var o = t.stylisPlugins || zm,
         l = {},
         i,
         u = [];
      (i = t.container || document.head),
         Array.prototype.forEach.call(
            document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
            function (g) {
               for (
                  var E = g.getAttribute("data-emotion").split(" "), f = 1;
                  f < E.length;
                  f++
               )
                  l[E[f]] = !0;
               u.push(g);
            }
         );
      var s,
         a = [Tm, Om];
      {
         var h,
            m = [
               km,
               Cm(function (g) {
                  h.insert(g);
               }),
            ],
            p = xm(a.concat(o, m)),
            v = function (E) {
               return Rn(wm(E), p);
            };
         s = function (E, f, c, d) {
            (h = c),
               v(E ? E + "{" + f.styles + "}" : f.styles),
               d && (y.inserted[f.name] = !0);
         };
      }
      var y = {
         key: n,
         sheet: new im({
            key: n,
            container: i,
            nonce: t.nonce,
            speedy: t.speedy,
            prepend: t.prepend,
            insertionPoint: t.insertionPoint,
         }),
         nonce: t.nonce,
         inserted: l,
         registered: {},
         insert: s,
      };
      return y.sheet.hydrate(u), y;
   },
   $m = !0;
function Lm(e, t, n) {
   var r = "";
   return (
      n.split(" ").forEach(function (o) {
         e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
      }),
      r
   );
}
var id = function (t, n, r) {
      var o = t.key + "-" + n.name;
      (r === !1 || $m === !1) &&
         t.registered[o] === void 0 &&
         (t.registered[o] = n.styles);
   },
   Mm = function (t, n, r) {
      id(t, n, r);
      var o = t.key + "-" + n.name;
      if (t.inserted[n.name] === void 0) {
         var l = n;
         do t.insert(n === l ? "." + o : "", l, t.sheet, !0), (l = l.next);
         while (l !== void 0);
      }
   };
function Im(e) {
   for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
      (n =
         (e.charCodeAt(r) & 255) |
         ((e.charCodeAt(++r) & 255) << 8) |
         ((e.charCodeAt(++r) & 255) << 16) |
         ((e.charCodeAt(++r) & 255) << 24)),
         (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
         (n ^= n >>> 24),
         (t =
            ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
            ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
   switch (o) {
      case 3:
         t ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
         t ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
         (t ^= e.charCodeAt(r) & 255),
            (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
   }
   return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
   );
}
var Am = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
   },
   Fm = /[A-Z]|^ms/g,
   jm = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
   ud = function (t) {
      return t.charCodeAt(1) === 45;
   },
   Ca = function (t) {
      return t != null && typeof t != "boolean";
   },
   ri = qf(function (e) {
      return ud(e) ? e : e.replace(Fm, "-$&").toLowerCase();
   }),
   Ea = function (t, n) {
      switch (t) {
         case "animation":
         case "animationName":
            if (typeof n == "string")
               return n.replace(jm, function (r, o, l) {
                  return (nt = { name: o, styles: l, next: nt }), o;
               });
      }
      return Am[t] !== 1 && !ud(t) && typeof n == "number" && n !== 0
         ? n + "px"
         : n;
   };
function Fr(e, t, n) {
   if (n == null) return "";
   if (n.__emotion_styles !== void 0) return n;
   switch (typeof n) {
      case "boolean":
         return "";
      case "object": {
         if (n.anim === 1)
            return (nt = { name: n.name, styles: n.styles, next: nt }), n.name;
         if (n.styles !== void 0) {
            var r = n.next;
            if (r !== void 0)
               for (; r !== void 0; )
                  (nt = { name: r.name, styles: r.styles, next: nt }),
                     (r = r.next);
            var o = n.styles + ";";
            return o;
         }
         return Dm(e, t, n);
      }
      case "function": {
         if (e !== void 0) {
            var l = nt,
               i = n(e);
            return (nt = l), Fr(e, t, i);
         }
         break;
      }
   }
   if (t == null) return n;
   var u = t[n];
   return u !== void 0 ? u : n;
}
function Dm(e, t, n) {
   var r = "";
   if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) r += Fr(e, t, n[o]) + ";";
   else
      for (var l in n) {
         var i = n[l];
         if (typeof i != "object")
            t != null && t[i] !== void 0
               ? (r += l + "{" + t[i] + "}")
               : Ca(i) && (r += ri(l) + ":" + Ea(l, i) + ";");
         else if (
            Array.isArray(i) &&
            typeof i[0] == "string" &&
            (t == null || t[i[0]] === void 0)
         )
            for (var u = 0; u < i.length; u++)
               Ca(i[u]) && (r += ri(l) + ":" + Ea(l, i[u]) + ";");
         else {
            var s = Fr(e, t, i);
            switch (l) {
               case "animation":
               case "animationName": {
                  r += ri(l) + ":" + s + ";";
                  break;
               }
               default:
                  r += l + "{" + s + "}";
            }
         }
      }
   return r;
}
var _a = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
   nt,
   Bm = function (t, n, r) {
      if (
         t.length === 1 &&
         typeof t[0] == "object" &&
         t[0] !== null &&
         t[0].styles !== void 0
      )
         return t[0];
      var o = !0,
         l = "";
      nt = void 0;
      var i = t[0];
      i == null || i.raw === void 0
         ? ((o = !1), (l += Fr(r, n, i)))
         : (l += i[0]);
      for (var u = 1; u < t.length; u++)
         (l += Fr(r, n, t[u])), o && (l += i[u]);
      _a.lastIndex = 0;
      for (var s = "", a; (a = _a.exec(l)) !== null; ) s += "-" + a[1];
      var h = Im(l) + s;
      return { name: h, styles: l, next: nt };
   },
   Um = function (t) {
      return t();
   },
   Wm = fs["useInsertionEffect"] ? fs["useInsertionEffect"] : !1,
   Hm = Wm || Um,
   sd = B.createContext(typeof HTMLElement < "u" ? Rm({ key: "css" }) : null);
sd.Provider;
var Vm = function (t) {
      return B.forwardRef(function (n, r) {
         var o = B.useContext(sd);
         return t(n, o, r);
      });
   },
   Km = B.createContext({}),
   Qm = rm,
   Gm = function (t) {
      return t !== "theme";
   },
   Pa = function (t) {
      return typeof t == "string" && t.charCodeAt(0) > 96 ? Qm : Gm;
   },
   Ta = function (t, n, r) {
      var o;
      if (n) {
         var l = n.shouldForwardProp;
         o =
            t.__emotion_forwardProp && l
               ? function (i) {
                    return t.__emotion_forwardProp(i) && l(i);
                 }
               : l;
      }
      return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
   },
   Ym = function (t) {
      var n = t.cache,
         r = t.serialized,
         o = t.isStringTag;
      return (
         id(n, r, o),
         Hm(function () {
            return Mm(n, r, o);
         }),
         null
      );
   },
   Xm = function e(t, n) {
      var r = t.__emotion_real === t,
         o = (r && t.__emotion_base) || t,
         l,
         i;
      n !== void 0 && ((l = n.label), (i = n.target));
      var u = Ta(t, n, r),
         s = u || Pa(o),
         a = !s("as");
      return function () {
         var h = arguments,
            m =
               r && t.__emotion_styles !== void 0
                  ? t.__emotion_styles.slice(0)
                  : [];
         if (
            (l !== void 0 && m.push("label:" + l + ";"),
            h[0] == null || h[0].raw === void 0)
         )
            m.push.apply(m, h);
         else {
            m.push(h[0][0]);
            for (var p = h.length, v = 1; v < p; v++) m.push(h[v], h[0][v]);
         }
         var y = Vm(function (g, E, f) {
            var c = (a && g.as) || o,
               d = "",
               w = [],
               x = g;
            if (g.theme == null) {
               x = {};
               for (var C in g) x[C] = g[C];
               x.theme = B.useContext(Km);
            }
            typeof g.className == "string"
               ? (d = Lm(E.registered, w, g.className))
               : g.className != null && (d = g.className + " ");
            var k = Bm(m.concat(w), E.registered, x);
            (d += E.key + "-" + k.name), i !== void 0 && (d += " " + i);
            var T = a && u === void 0 ? Pa(c) : s,
               N = {};
            for (var O in g) (a && O === "as") || (T(O) && (N[O] = g[O]));
            return (
               (N.className = d),
               (N.ref = f),
               B.createElement(
                  B.Fragment,
                  null,
                  B.createElement(Ym, {
                     cache: E,
                     serialized: k,
                     isStringTag: typeof c == "string",
                  }),
                  B.createElement(c, N)
               )
            );
         });
         return (
            (y.displayName =
               l !== void 0
                  ? l
                  : "Styled(" +
                    (typeof o == "string"
                       ? o
                       : o.displayName || o.name || "Component") +
                    ")"),
            (y.defaultProps = t.defaultProps),
            (y.__emotion_real = y),
            (y.__emotion_base = o),
            (y.__emotion_styles = m),
            (y.__emotion_forwardProp = u),
            Object.defineProperty(y, "toString", {
               value: function () {
                  return "." + i;
               },
            }),
            (y.withComponent = function (g, E) {
               return e(
                  g,
                  A({}, n, E, { shouldForwardProp: Ta(y, E, !0) })
               ).apply(void 0, m);
            }),
            y
         );
      };
   };
const Zm = Xm;
var Jm = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
   ],
   nu = Zm.bind();
Jm.forEach(function (e) {
   nu[e] = nu(e);
});
const qm = nu;
/**
 * @mui/styled-engine v5.11.16
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function bm(e, t) {
   return qm(e, t);
}
const eh = (e, t) => {
   Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
};
function yr(e, t) {
   return t ? pt(e, t, { clone: !1 }) : e;
}
const es = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
   Oa = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${es[e]}px)`,
   };
function wt(e, t, n) {
   const r = e.theme || {};
   if (Array.isArray(t)) {
      const l = r.breakpoints || Oa;
      return t.reduce((i, u, s) => ((i[l.up(l.keys[s])] = n(t[s])), i), {});
   }
   if (typeof t == "object") {
      const l = r.breakpoints || Oa;
      return Object.keys(t).reduce((i, u) => {
         if (Object.keys(l.values || es).indexOf(u) !== -1) {
            const s = l.up(u);
            i[s] = n(t[u], u);
         } else {
            const s = u;
            i[s] = t[s];
         }
         return i;
      }, {});
   }
   return n(t);
}
function th(e = {}) {
   var t;
   return (
      ((t = e.keys) == null
         ? void 0
         : t.reduce((r, o) => {
              const l = e.up(o);
              return (r[l] = {}), r;
           }, {})) || {}
   );
}
function nh(e, t) {
   return e.reduce((n, r) => {
      const o = n[r];
      return (!o || Object.keys(o).length === 0) && delete n[r], n;
   }, t);
}
function xl(e, t, n = !0) {
   if (!t || typeof t != "string") return null;
   if (e && e.vars && n) {
      const r = `vars.${t}`
         .split(".")
         .reduce((o, l) => (o && o[l] ? o[l] : null), e);
      if (r != null) return r;
   }
   return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function nl(e, t, n, r = n) {
   let o;
   return (
      typeof e == "function"
         ? (o = e(n))
         : Array.isArray(e)
         ? (o = e[n] || r)
         : (o = xl(e, n) || r),
      t && (o = t(o, r, e)),
      o
   );
}
function j(e) {
   const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
      l = (i) => {
         if (i[t] == null) return null;
         const u = i[t],
            s = i.theme,
            a = xl(s, r) || {};
         return wt(i, u, (m) => {
            let p = nl(a, o, m);
            return (
               m === p &&
                  typeof m == "string" &&
                  (p = nl(a, o, `${t}${m === "default" ? "" : mt(m)}`, m)),
               n === !1 ? p : { [n]: p }
            );
         });
      };
   return (l.propTypes = {}), (l.filterProps = [t]), l;
}
function Cl(...e) {
   const t = e.reduce(
         (r, o) => (
            o.filterProps.forEach((l) => {
               r[l] = o;
            }),
            r
         ),
         {}
      ),
      n = (r) =>
         Object.keys(r).reduce((o, l) => (t[l] ? yr(o, t[l](r)) : o), {});
   return (
      (n.propTypes = {}),
      (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
      n
   );
}
function rh(e) {
   const t = {};
   return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const oh = { m: "margin", p: "padding" },
   lh = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
   },
   Na = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
   ih = rh((e) => {
      if (e.length > 2)
         if (Na[e]) e = Na[e];
         else return [e];
      const [t, n] = e.split(""),
         r = oh[t],
         o = lh[n] || "";
      return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
   }),
   ts = [
      "m",
      "mt",
      "mr",
      "mb",
      "ml",
      "mx",
      "my",
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginX",
      "marginY",
      "marginInline",
      "marginInlineStart",
      "marginInlineEnd",
      "marginBlock",
      "marginBlockStart",
      "marginBlockEnd",
   ],
   ns = [
      "p",
      "pt",
      "pr",
      "pb",
      "pl",
      "px",
      "py",
      "padding",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingX",
      "paddingY",
      "paddingInline",
      "paddingInlineStart",
      "paddingInlineEnd",
      "paddingBlock",
      "paddingBlockStart",
      "paddingBlockEnd",
   ];
[...ts, ...ns];
function Kr(e, t, n, r) {
   var o;
   const l = (o = xl(e, t, !1)) != null ? o : n;
   return typeof l == "number"
      ? (i) => (typeof i == "string" ? i : l * i)
      : Array.isArray(l)
      ? (i) => (typeof i == "string" ? i : l[i])
      : typeof l == "function"
      ? l
      : () => {};
}
function ad(e) {
   return Kr(e, "spacing", 8);
}
function Qr(e, t) {
   if (typeof t == "string" || t == null) return t;
   const n = Math.abs(t),
      r = e(n);
   return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function uh(e, t) {
   return (n) => e.reduce((r, o) => ((r[o] = Qr(t, n)), r), {});
}
function sh(e, t, n, r) {
   if (t.indexOf(n) === -1) return null;
   const o = ih(n),
      l = uh(o, r),
      i = e[n];
   return wt(e, i, l);
}
function cd(e, t) {
   const n = ad(e.theme);
   return Object.keys(e)
      .map((r) => sh(e, t, r, n))
      .reduce(yr, {});
}
function X(e) {
   return cd(e, ts);
}
X.propTypes = {};
X.filterProps = ts;
function Z(e) {
   return cd(e, ns);
}
Z.propTypes = {};
Z.filterProps = ns;
function ot(e) {
   return typeof e != "number" ? e : `${e}px solid`;
}
const ah = j({ prop: "border", themeKey: "borders", transform: ot }),
   ch = j({ prop: "borderTop", themeKey: "borders", transform: ot }),
   fh = j({ prop: "borderRight", themeKey: "borders", transform: ot }),
   dh = j({ prop: "borderBottom", themeKey: "borders", transform: ot }),
   ph = j({ prop: "borderLeft", themeKey: "borders", transform: ot }),
   mh = j({ prop: "borderColor", themeKey: "palette" }),
   hh = j({ prop: "borderTopColor", themeKey: "palette" }),
   gh = j({ prop: "borderRightColor", themeKey: "palette" }),
   yh = j({ prop: "borderBottomColor", themeKey: "palette" }),
   vh = j({ prop: "borderLeftColor", themeKey: "palette" }),
   El = (e) => {
      if (e.borderRadius !== void 0 && e.borderRadius !== null) {
         const t = Kr(e.theme, "shape.borderRadius", 4),
            n = (r) => ({ borderRadius: Qr(t, r) });
         return wt(e, e.borderRadius, n);
      }
      return null;
   };
El.propTypes = {};
El.filterProps = ["borderRadius"];
Cl(ah, ch, fh, dh, ph, mh, hh, gh, yh, vh, El);
const _l = (e) => {
   if (e.gap !== void 0 && e.gap !== null) {
      const t = Kr(e.theme, "spacing", 8),
         n = (r) => ({ gap: Qr(t, r) });
      return wt(e, e.gap, n);
   }
   return null;
};
_l.propTypes = {};
_l.filterProps = ["gap"];
const Pl = (e) => {
   if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = Kr(e.theme, "spacing", 8),
         n = (r) => ({ columnGap: Qr(t, r) });
      return wt(e, e.columnGap, n);
   }
   return null;
};
Pl.propTypes = {};
Pl.filterProps = ["columnGap"];
const Tl = (e) => {
   if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = Kr(e.theme, "spacing", 8),
         n = (r) => ({ rowGap: Qr(t, r) });
      return wt(e, e.rowGap, n);
   }
   return null;
};
Tl.propTypes = {};
Tl.filterProps = ["rowGap"];
const wh = j({ prop: "gridColumn" }),
   Sh = j({ prop: "gridRow" }),
   kh = j({ prop: "gridAutoFlow" }),
   xh = j({ prop: "gridAutoColumns" }),
   Ch = j({ prop: "gridAutoRows" }),
   Eh = j({ prop: "gridTemplateColumns" }),
   _h = j({ prop: "gridTemplateRows" }),
   Ph = j({ prop: "gridTemplateAreas" }),
   Th = j({ prop: "gridArea" });
Cl(_l, Pl, Tl, wh, Sh, kh, xh, Ch, Eh, _h, Ph, Th);
function $n(e, t) {
   return t === "grey" ? t : e;
}
const Oh = j({ prop: "color", themeKey: "palette", transform: $n }),
   Nh = j({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: $n,
   }),
   zh = j({ prop: "backgroundColor", themeKey: "palette", transform: $n });
Cl(Oh, Nh, zh);
function Oe(e) {
   return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Rh = j({ prop: "width", transform: Oe }),
   rs = (e) => {
      if (e.maxWidth !== void 0 && e.maxWidth !== null) {
         const t = (n) => {
            var r, o, l;
            return {
               maxWidth:
                  ((r = e.theme) == null ||
                  (o = r.breakpoints) == null ||
                  (l = o.values) == null
                     ? void 0
                     : l[n]) ||
                  es[n] ||
                  Oe(n),
            };
         };
         return wt(e, e.maxWidth, t);
      }
      return null;
   };
rs.filterProps = ["maxWidth"];
const $h = j({ prop: "minWidth", transform: Oe }),
   Lh = j({ prop: "height", transform: Oe }),
   Mh = j({ prop: "maxHeight", transform: Oe }),
   Ih = j({ prop: "minHeight", transform: Oe });
j({ prop: "size", cssProperty: "width", transform: Oe });
j({ prop: "size", cssProperty: "height", transform: Oe });
const Ah = j({ prop: "boxSizing" });
Cl(Rh, rs, $h, Lh, Mh, Ih, Ah);
const Fh = {
      border: { themeKey: "borders", transform: ot },
      borderTop: { themeKey: "borders", transform: ot },
      borderRight: { themeKey: "borders", transform: ot },
      borderBottom: { themeKey: "borders", transform: ot },
      borderLeft: { themeKey: "borders", transform: ot },
      borderColor: { themeKey: "palette" },
      borderTopColor: { themeKey: "palette" },
      borderRightColor: { themeKey: "palette" },
      borderBottomColor: { themeKey: "palette" },
      borderLeftColor: { themeKey: "palette" },
      borderRadius: { themeKey: "shape.borderRadius", style: El },
      color: { themeKey: "palette", transform: $n },
      bgcolor: {
         themeKey: "palette",
         cssProperty: "backgroundColor",
         transform: $n,
      },
      backgroundColor: { themeKey: "palette", transform: $n },
      p: { style: Z },
      pt: { style: Z },
      pr: { style: Z },
      pb: { style: Z },
      pl: { style: Z },
      px: { style: Z },
      py: { style: Z },
      padding: { style: Z },
      paddingTop: { style: Z },
      paddingRight: { style: Z },
      paddingBottom: { style: Z },
      paddingLeft: { style: Z },
      paddingX: { style: Z },
      paddingY: { style: Z },
      paddingInline: { style: Z },
      paddingInlineStart: { style: Z },
      paddingInlineEnd: { style: Z },
      paddingBlock: { style: Z },
      paddingBlockStart: { style: Z },
      paddingBlockEnd: { style: Z },
      m: { style: X },
      mt: { style: X },
      mr: { style: X },
      mb: { style: X },
      ml: { style: X },
      mx: { style: X },
      my: { style: X },
      margin: { style: X },
      marginTop: { style: X },
      marginRight: { style: X },
      marginBottom: { style: X },
      marginLeft: { style: X },
      marginX: { style: X },
      marginY: { style: X },
      marginInline: { style: X },
      marginInlineStart: { style: X },
      marginInlineEnd: { style: X },
      marginBlock: { style: X },
      marginBlockStart: { style: X },
      marginBlockEnd: { style: X },
      displayPrint: {
         cssProperty: !1,
         transform: (e) => ({ "@media print": { display: e } }),
      },
      display: {},
      overflow: {},
      textOverflow: {},
      visibility: {},
      whiteSpace: {},
      flexBasis: {},
      flexDirection: {},
      flexWrap: {},
      justifyContent: {},
      alignItems: {},
      alignContent: {},
      order: {},
      flex: {},
      flexGrow: {},
      flexShrink: {},
      alignSelf: {},
      justifyItems: {},
      justifySelf: {},
      gap: { style: _l },
      rowGap: { style: Tl },
      columnGap: { style: Pl },
      gridColumn: {},
      gridRow: {},
      gridAutoFlow: {},
      gridAutoColumns: {},
      gridAutoRows: {},
      gridTemplateColumns: {},
      gridTemplateRows: {},
      gridTemplateAreas: {},
      gridArea: {},
      position: {},
      zIndex: { themeKey: "zIndex" },
      top: {},
      right: {},
      bottom: {},
      left: {},
      boxShadow: { themeKey: "shadows" },
      width: { transform: Oe },
      maxWidth: { style: rs },
      minWidth: { transform: Oe },
      height: { transform: Oe },
      maxHeight: { transform: Oe },
      minHeight: { transform: Oe },
      boxSizing: {},
      fontFamily: { themeKey: "typography" },
      fontSize: { themeKey: "typography" },
      fontStyle: { themeKey: "typography" },
      fontWeight: { themeKey: "typography" },
      letterSpacing: {},
      textTransform: {},
      lineHeight: {},
      textAlign: {},
      typography: { cssProperty: !1, themeKey: "typography" },
   },
   os = Fh;
function jh(...e) {
   const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
      n = new Set(t);
   return e.every((r) => n.size === Object.keys(r).length);
}
function Dh(e, t) {
   return typeof e == "function" ? e(t) : e;
}
function Bh() {
   function e(n, r, o, l) {
      const i = { [n]: r, theme: o },
         u = l[n];
      if (!u) return { [n]: r };
      const { cssProperty: s = n, themeKey: a, transform: h, style: m } = u;
      if (r == null) return null;
      if (a === "typography" && r === "inherit") return { [n]: r };
      const p = xl(o, a) || {};
      return m
         ? m(i)
         : wt(i, r, (y) => {
              let g = nl(p, h, y);
              return (
                 y === g &&
                    typeof y == "string" &&
                    (g = nl(p, h, `${n}${y === "default" ? "" : mt(y)}`, y)),
                 s === !1 ? g : { [s]: g }
              );
           });
   }
   function t(n) {
      var r;
      const { sx: o, theme: l = {} } = n || {};
      if (!o) return null;
      const i = (r = l.unstable_sxConfig) != null ? r : os;
      function u(s) {
         let a = s;
         if (typeof s == "function") a = s(l);
         else if (typeof s != "object") return s;
         if (!a) return null;
         const h = th(l.breakpoints),
            m = Object.keys(h);
         let p = h;
         return (
            Object.keys(a).forEach((v) => {
               const y = Dh(a[v], l);
               if (y != null)
                  if (typeof y == "object")
                     if (i[v]) p = yr(p, e(v, y, l, i));
                     else {
                        const g = wt({ theme: l }, y, (E) => ({ [v]: E }));
                        jh(g, y)
                           ? (p[v] = t({ sx: y, theme: l }))
                           : (p = yr(p, g));
                     }
                  else p = yr(p, e(v, y, l, i));
            }),
            nh(m, p)
         );
      }
      return Array.isArray(o) ? o.map(u) : u(o);
   }
   return t;
}
const fd = Bh();
fd.filterProps = ["sx"];
const ls = fd,
   Uh = ["values", "unit", "step"],
   Wh = (e) => {
      const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
      return (
         t.sort((n, r) => n.val - r.val),
         t.reduce((n, r) => A({}, n, { [r.key]: r.val }), {})
      );
   };
function Hh(e) {
   const {
         values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
         unit: n = "px",
         step: r = 5,
      } = e,
      o = Ye(e, Uh),
      l = Wh(t),
      i = Object.keys(l);
   function u(p) {
      return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
   }
   function s(p) {
      return `@media (max-width:${
         (typeof t[p] == "number" ? t[p] : p) - r / 100
      }${n})`;
   }
   function a(p, v) {
      const y = i.indexOf(v);
      return `@media (min-width:${
         typeof t[p] == "number" ? t[p] : p
      }${n}) and (max-width:${
         (y !== -1 && typeof t[i[y]] == "number" ? t[i[y]] : v) - r / 100
      }${n})`;
   }
   function h(p) {
      return i.indexOf(p) + 1 < i.length ? a(p, i[i.indexOf(p) + 1]) : u(p);
   }
   function m(p) {
      const v = i.indexOf(p);
      return v === 0
         ? u(i[1])
         : v === i.length - 1
         ? s(i[v])
         : a(p, i[i.indexOf(p) + 1]).replace("@media", "@media not all and");
   }
   return A(
      {
         keys: i,
         values: l,
         up: u,
         down: s,
         between: a,
         only: h,
         not: m,
         unit: n,
      },
      o
   );
}
const Vh = { borderRadius: 4 },
   Kh = Vh;
function Qh(e = 8) {
   if (e.mui) return e;
   const t = ad({ spacing: e }),
      n = (...r) =>
         (r.length === 0 ? [1] : r)
            .map((l) => {
               const i = t(l);
               return typeof i == "number" ? `${i}px` : i;
            })
            .join(" ");
   return (n.mui = !0), n;
}
const Gh = ["breakpoints", "palette", "spacing", "shape"];
function is(e = {}, ...t) {
   const {
         breakpoints: n = {},
         palette: r = {},
         spacing: o,
         shape: l = {},
      } = e,
      i = Ye(e, Gh),
      u = Hh(n),
      s = Qh(o);
   let a = pt(
      {
         breakpoints: u,
         direction: "ltr",
         components: {},
         palette: A({ mode: "light" }, r),
         spacing: s,
         shape: A({}, Kh, l),
      },
      i
   );
   return (
      (a = t.reduce((h, m) => pt(h, m), a)),
      (a.unstable_sxConfig = A(
         {},
         os,
         i == null ? void 0 : i.unstable_sxConfig
      )),
      (a.unstable_sx = function (m) {
         return ls({ sx: m, theme: this });
      }),
      a
   );
}
const Yh = B.createContext(null),
   Xh = Yh;
function Zh() {
   return B.useContext(Xh);
}
function Jh(e) {
   return Object.keys(e).length === 0;
}
function qh(e = null) {
   const t = Zh();
   return !t || Jh(t) ? e : t;
}
const bh = is();
function eg(e = bh) {
   return qh(e);
}
const tg = ["variant"];
function za(e) {
   return e.length === 0;
}
function dd(e) {
   const { variant: t } = e,
      n = Ye(e, tg);
   let r = t || "";
   return (
      Object.keys(n)
         .sort()
         .forEach((o) => {
            o === "color"
               ? (r += za(r) ? e[o] : mt(e[o]))
               : (r += `${za(r) ? o : mt(o)}${mt(e[o].toString())}`);
         }),
      r
   );
}
const ng = [
      "name",
      "slot",
      "skipVariantsResolver",
      "skipSx",
      "overridesResolver",
   ],
   rg = ["theme"],
   og = ["theme"];
function nr(e) {
   return Object.keys(e).length === 0;
}
function lg(e) {
   return typeof e == "string" && e.charCodeAt(0) > 96;
}
const ig = (e, t) =>
      t.components && t.components[e] && t.components[e].styleOverrides
         ? t.components[e].styleOverrides
         : null,
   ug = (e, t) => {
      let n = [];
      t &&
         t.components &&
         t.components[e] &&
         t.components[e].variants &&
         (n = t.components[e].variants);
      const r = {};
      return (
         n.forEach((o) => {
            const l = dd(o.props);
            r[l] = o.style;
         }),
         r
      );
   },
   sg = (e, t, n, r) => {
      var o, l;
      const { ownerState: i = {} } = e,
         u = [],
         s =
            n == null || (o = n.components) == null || (l = o[r]) == null
               ? void 0
               : l.variants;
      return (
         s &&
            s.forEach((a) => {
               let h = !0;
               Object.keys(a.props).forEach((m) => {
                  i[m] !== a.props[m] && e[m] !== a.props[m] && (h = !1);
               }),
                  h && u.push(t[dd(a.props)]);
            }),
         u
      );
   };
function No(e) {
   return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ag = is();
function cg(e = {}) {
   const {
         defaultTheme: t = ag,
         rootShouldForwardProp: n = No,
         slotShouldForwardProp: r = No,
      } = e,
      o = (l) => {
         const i = nr(l.theme) ? t : l.theme;
         return ls(A({}, l, { theme: i }));
      };
   return (
      (o.__mui_systemSx = !0),
      (l, i = {}) => {
         eh(l, (d) => d.filter((w) => !(w != null && w.__mui_systemSx)));
         const {
               name: u,
               slot: s,
               skipVariantsResolver: a,
               skipSx: h,
               overridesResolver: m,
            } = i,
            p = Ye(i, ng),
            v = a !== void 0 ? a : (s && s !== "Root") || !1,
            y = h || !1;
         let g,
            E = No;
         s === "Root" ? (E = n) : s ? (E = r) : lg(l) && (E = void 0);
         const f = bm(l, A({ shouldForwardProp: E, label: g }, p)),
            c = (d, ...w) => {
               const x = w
                  ? w.map((N) =>
                       typeof N == "function" && N.__emotion_real !== N
                          ? (O) => {
                               let { theme: ne } = O,
                                  Ze = Ye(O, rg);
                               return N(A({ theme: nr(ne) ? t : ne }, Ze));
                            }
                          : N
                    )
                  : [];
               let C = d;
               u &&
                  m &&
                  x.push((N) => {
                     const O = nr(N.theme) ? t : N.theme,
                        ne = ig(u, O);
                     if (ne) {
                        const Ze = {};
                        return (
                           Object.entries(ne).forEach(([Ut, on]) => {
                              Ze[Ut] =
                                 typeof on == "function"
                                    ? on(A({}, N, { theme: O }))
                                    : on;
                           }),
                           m(N, Ze)
                        );
                     }
                     return null;
                  }),
                  u &&
                     !v &&
                     x.push((N) => {
                        const O = nr(N.theme) ? t : N.theme;
                        return sg(N, ug(u, O), O, u);
                     }),
                  y || x.push(o);
               const k = x.length - w.length;
               if (Array.isArray(d) && k > 0) {
                  const N = new Array(k).fill("");
                  (C = [...d, ...N]), (C.raw = [...d.raw, ...N]);
               } else
                  typeof d == "function" &&
                     d.__emotion_real !== d &&
                     (C = (N) => {
                        let { theme: O } = N,
                           ne = Ye(N, og);
                        return d(A({ theme: nr(O) ? t : O }, ne));
                     });
               return f(C, ...x);
            };
         return f.withConfig && (c.withConfig = f.withConfig), c;
      }
   );
}
function fg(e) {
   const { theme: t, name: n, props: r } = e;
   return !t ||
      !t.components ||
      !t.components[n] ||
      !t.components[n].defaultProps
      ? r
      : Xf(t.components[n].defaultProps, r);
}
function dg({ props: e, name: t, defaultTheme: n }) {
   const r = eg(n);
   return fg({ theme: r, name: t, props: e });
}
function pd(e, t = 0, n = 1) {
   return Math.min(Math.max(t, e), n);
}
function pg(e) {
   e = e.slice(1);
   const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
   let n = e.match(t);
   return (
      n && n[0].length === 1 && (n = n.map((r) => r + r)),
      n
         ? `rgb${n.length === 4 ? "a" : ""}(${n
              .map((r, o) =>
                 o < 3
                    ? parseInt(r, 16)
                    : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
              )
              .join(", ")})`
         : ""
   );
}
function Wn(e) {
   if (e.type) return e;
   if (e.charAt(0) === "#") return Wn(pg(e));
   const t = e.indexOf("("),
      n = e.substring(0, t);
   if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
      throw new Error(Bn(9, e));
   let r = e.substring(t + 1, e.length - 1),
      o;
   if (n === "color") {
      if (
         ((r = r.split(" ")),
         (o = r.shift()),
         r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
         ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
            o
         ) === -1)
      )
         throw new Error(Bn(10, o));
   } else r = r.split(",");
   return (
      (r = r.map((l) => parseFloat(l))), { type: n, values: r, colorSpace: o }
   );
}
function us(e) {
   const { type: t, colorSpace: n } = e;
   let { values: r } = e;
   return (
      t.indexOf("rgb") !== -1
         ? (r = r.map((o, l) => (l < 3 ? parseInt(o, 10) : o)))
         : t.indexOf("hsl") !== -1 &&
           ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
      t.indexOf("color") !== -1
         ? (r = `${n} ${r.join(" ")}`)
         : (r = `${r.join(", ")}`),
      `${t}(${r})`
   );
}
function mg(e) {
   e = Wn(e);
   const { values: t } = e,
      n = t[0],
      r = t[1] / 100,
      o = t[2] / 100,
      l = r * Math.min(o, 1 - o),
      i = (a, h = (a + n / 30) % 12) =>
         o - l * Math.max(Math.min(h - 3, 9 - h, 1), -1);
   let u = "rgb";
   const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255),
   ];
   return (
      e.type === "hsla" && ((u += "a"), s.push(t[3])),
      us({ type: u, values: s })
   );
}
function Ra(e) {
   e = Wn(e);
   let t = e.type === "hsl" || e.type === "hsla" ? Wn(mg(e)).values : e.values;
   return (
      (t = t.map(
         (n) => (
            e.type !== "color" && (n /= 255),
            n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
         )
      )),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
   );
}
function hg(e, t) {
   const n = Ra(e),
      r = Ra(t);
   return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function gg(e, t) {
   if (((e = Wn(e)), (t = pd(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] *= 1 - t;
   else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
   return us(e);
}
function yg(e, t) {
   if (((e = Wn(e)), (t = pd(t)), e.type.indexOf("hsl") !== -1))
      e.values[2] += (100 - e.values[2]) * t;
   else if (e.type.indexOf("rgb") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
   else if (e.type.indexOf("color") !== -1)
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
   return us(e);
}
function vg(e, t) {
   return A(
      {
         toolbar: {
            minHeight: 56,
            [e.up("xs")]: {
               "@media (orientation: landscape)": { minHeight: 48 },
            },
            [e.up("sm")]: { minHeight: 64 },
         },
      },
      t
   );
}
const wg = { black: "#000", white: "#fff" },
   jr = wg,
   Sg = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
   },
   kg = Sg,
   xg = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff",
   },
   un = xg,
   Cg = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
   },
   sn = Cg,
   Eg = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
   },
   rr = Eg,
   _g = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
   },
   an = _g,
   Pg = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea",
   },
   cn = Pg,
   Tg = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
   },
   fn = Tg,
   Og = ["mode", "contrastThreshold", "tonalOffset"],
   $a = {
      text: {
         primary: "rgba(0, 0, 0, 0.87)",
         secondary: "rgba(0, 0, 0, 0.6)",
         disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: jr.white, default: jr.white },
      action: {
         active: "rgba(0, 0, 0, 0.54)",
         hover: "rgba(0, 0, 0, 0.04)",
         hoverOpacity: 0.04,
         selected: "rgba(0, 0, 0, 0.08)",
         selectedOpacity: 0.08,
         disabled: "rgba(0, 0, 0, 0.26)",
         disabledBackground: "rgba(0, 0, 0, 0.12)",
         disabledOpacity: 0.38,
         focus: "rgba(0, 0, 0, 0.12)",
         focusOpacity: 0.12,
         activatedOpacity: 0.12,
      },
   },
   oi = {
      text: {
         primary: jr.white,
         secondary: "rgba(255, 255, 255, 0.7)",
         disabled: "rgba(255, 255, 255, 0.5)",
         icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
         active: jr.white,
         hover: "rgba(255, 255, 255, 0.08)",
         hoverOpacity: 0.08,
         selected: "rgba(255, 255, 255, 0.16)",
         selectedOpacity: 0.16,
         disabled: "rgba(255, 255, 255, 0.3)",
         disabledBackground: "rgba(255, 255, 255, 0.12)",
         disabledOpacity: 0.38,
         focus: "rgba(255, 255, 255, 0.12)",
         focusOpacity: 0.12,
         activatedOpacity: 0.24,
      },
   };
function La(e, t, n, r) {
   const o = r.light || r,
      l = r.dark || r * 1.5;
   e[t] ||
      (e.hasOwnProperty(n)
         ? (e[t] = e[n])
         : t === "light"
         ? (e.light = yg(e.main, o))
         : t === "dark" && (e.dark = gg(e.main, l)));
}
function Ng(e = "light") {
   return e === "dark"
      ? { main: an[200], light: an[50], dark: an[400] }
      : { main: an[700], light: an[400], dark: an[800] };
}
function zg(e = "light") {
   return e === "dark"
      ? { main: un[200], light: un[50], dark: un[400] }
      : { main: un[500], light: un[300], dark: un[700] };
}
function Rg(e = "light") {
   return e === "dark"
      ? { main: sn[500], light: sn[300], dark: sn[700] }
      : { main: sn[700], light: sn[400], dark: sn[800] };
}
function $g(e = "light") {
   return e === "dark"
      ? { main: cn[400], light: cn[300], dark: cn[700] }
      : { main: cn[700], light: cn[500], dark: cn[900] };
}
function Lg(e = "light") {
   return e === "dark"
      ? { main: fn[400], light: fn[300], dark: fn[700] }
      : { main: fn[800], light: fn[500], dark: fn[900] };
}
function Mg(e = "light") {
   return e === "dark"
      ? { main: rr[400], light: rr[300], dark: rr[700] }
      : { main: "#ed6c02", light: rr[500], dark: rr[900] };
}
function Ig(e) {
   const {
         mode: t = "light",
         contrastThreshold: n = 3,
         tonalOffset: r = 0.2,
      } = e,
      o = Ye(e, Og),
      l = e.primary || Ng(t),
      i = e.secondary || zg(t),
      u = e.error || Rg(t),
      s = e.info || $g(t),
      a = e.success || Lg(t),
      h = e.warning || Mg(t);
   function m(g) {
      return hg(g, oi.text.primary) >= n ? oi.text.primary : $a.text.primary;
   }
   const p = ({
         color: g,
         name: E,
         mainShade: f = 500,
         lightShade: c = 300,
         darkShade: d = 700,
      }) => {
         if (
            ((g = A({}, g)),
            !g.main && g[f] && (g.main = g[f]),
            !g.hasOwnProperty("main"))
         )
            throw new Error(Bn(11, E ? ` (${E})` : "", f));
         if (typeof g.main != "string")
            throw new Error(Bn(12, E ? ` (${E})` : "", JSON.stringify(g.main)));
         return (
            La(g, "light", c, r),
            La(g, "dark", d, r),
            g.contrastText || (g.contrastText = m(g.main)),
            g
         );
      },
      v = { dark: oi, light: $a };
   return pt(
      A(
         {
            common: A({}, jr),
            mode: t,
            primary: p({ color: l, name: "primary" }),
            secondary: p({
               color: i,
               name: "secondary",
               mainShade: "A400",
               lightShade: "A200",
               darkShade: "A700",
            }),
            error: p({ color: u, name: "error" }),
            warning: p({ color: h, name: "warning" }),
            info: p({ color: s, name: "info" }),
            success: p({ color: a, name: "success" }),
            grey: kg,
            contrastThreshold: n,
            getContrastText: m,
            augmentColor: p,
            tonalOffset: r,
         },
         v[t]
      ),
      o
   );
}
const Ag = [
   "fontFamily",
   "fontSize",
   "fontWeightLight",
   "fontWeightRegular",
   "fontWeightMedium",
   "fontWeightBold",
   "htmlFontSize",
   "allVariants",
   "pxToRem",
];
function Fg(e) {
   return Math.round(e * 1e5) / 1e5;
}
const Ma = { textTransform: "uppercase" },
   Ia = '"Roboto", "Helvetica", "Arial", sans-serif';
function jg(e, t) {
   const n = typeof t == "function" ? t(e) : t,
      {
         fontFamily: r = Ia,
         fontSize: o = 14,
         fontWeightLight: l = 300,
         fontWeightRegular: i = 400,
         fontWeightMedium: u = 500,
         fontWeightBold: s = 700,
         htmlFontSize: a = 16,
         allVariants: h,
         pxToRem: m,
      } = n,
      p = Ye(n, Ag),
      v = o / 14,
      y = m || ((f) => `${(f / a) * v}rem`),
      g = (f, c, d, w, x) =>
         A(
            { fontFamily: r, fontWeight: f, fontSize: y(c), lineHeight: d },
            r === Ia ? { letterSpacing: `${Fg(w / c)}em` } : {},
            x,
            h
         ),
      E = {
         h1: g(l, 96, 1.167, -1.5),
         h2: g(l, 60, 1.2, -0.5),
         h3: g(i, 48, 1.167, 0),
         h4: g(i, 34, 1.235, 0.25),
         h5: g(i, 24, 1.334, 0),
         h6: g(u, 20, 1.6, 0.15),
         subtitle1: g(i, 16, 1.75, 0.15),
         subtitle2: g(u, 14, 1.57, 0.1),
         body1: g(i, 16, 1.5, 0.15),
         body2: g(i, 14, 1.43, 0.15),
         button: g(u, 14, 1.75, 0.4, Ma),
         caption: g(i, 12, 1.66, 0.4),
         overline: g(i, 12, 2.66, 1, Ma),
         inherit: {
            fontFamily: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit",
         },
      };
   return pt(
      A(
         {
            htmlFontSize: a,
            pxToRem: y,
            fontFamily: r,
            fontSize: o,
            fontWeightLight: l,
            fontWeightRegular: i,
            fontWeightMedium: u,
            fontWeightBold: s,
         },
         E
      ),
      p,
      { clone: !1 }
   );
}
const Dg = 0.2,
   Bg = 0.14,
   Ug = 0.12;
function V(...e) {
   return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Dg})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Bg})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ug})`,
   ].join(",");
}
const Wg = [
      "none",
      V(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      V(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      V(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      V(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      V(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      V(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      V(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      V(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      V(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      V(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      V(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      V(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      V(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      V(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      V(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      V(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      V(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      V(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      V(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      V(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      V(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      V(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      V(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      V(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
   ],
   Hg = Wg,
   Vg = ["duration", "easing", "delay"],
   Kg = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
   },
   Qg = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
   };
function Aa(e) {
   return `${Math.round(e)}ms`;
}
function Gg(e) {
   if (!e) return 0;
   const t = e / 36;
   return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Yg(e) {
   const t = A({}, Kg, e.easing),
      n = A({}, Qg, e.duration);
   return A(
      {
         getAutoHeightDuration: Gg,
         create: (o = ["all"], l = {}) => {
            const {
               duration: i = n.standard,
               easing: u = t.easeInOut,
               delay: s = 0,
            } = l;
            return (
               Ye(l, Vg),
               (Array.isArray(o) ? o : [o])
                  .map(
                     (a) =>
                        `${a} ${typeof i == "string" ? i : Aa(i)} ${u} ${
                           typeof s == "string" ? s : Aa(s)
                        }`
                  )
                  .join(",")
            );
         },
      },
      e,
      { easing: t, duration: n }
   );
}
const Xg = {
      mobileStepper: 1e3,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
   },
   Zg = Xg,
   Jg = [
      "breakpoints",
      "mixins",
      "spacing",
      "palette",
      "transitions",
      "typography",
      "shape",
   ];
function qg(e = {}, ...t) {
   const {
         mixins: n = {},
         palette: r = {},
         transitions: o = {},
         typography: l = {},
      } = e,
      i = Ye(e, Jg);
   if (e.vars) throw new Error(Bn(18));
   const u = Ig(r),
      s = is(e);
   let a = pt(s, {
      mixins: vg(s.breakpoints, n),
      palette: u,
      shadows: Hg.slice(),
      typography: jg(u, l),
      transitions: Yg(o),
      zIndex: A({}, Zg),
   });
   return (
      (a = pt(a, i)),
      (a = t.reduce((h, m) => pt(h, m), a)),
      (a.unstable_sxConfig = A(
         {},
         os,
         i == null ? void 0 : i.unstable_sxConfig
      )),
      (a.unstable_sx = function (m) {
         return ls({ sx: m, theme: this });
      }),
      a
   );
}
const bg = qg(),
   md = bg;
function e1({ props: e, name: t }) {
   return dg({ props: e, name: t, defaultTheme: md });
}
const t1 = (e) => No(e) && e !== "classes",
   n1 = cg({ defaultTheme: md, rootShouldForwardProp: t1 }),
   r1 = n1;
function o1(e) {
   return Zf("MuiSvgIcon", e);
}
em("MuiSvgIcon", [
   "root",
   "colorPrimary",
   "colorSecondary",
   "colorAction",
   "colorError",
   "colorDisabled",
   "fontSizeInherit",
   "fontSizeSmall",
   "fontSizeMedium",
   "fontSizeLarge",
]);
const l1 = [
      "children",
      "className",
      "color",
      "component",
      "fontSize",
      "htmlColor",
      "inheritViewBox",
      "titleAccess",
      "viewBox",
   ],
   i1 = (e) => {
      const { color: t, fontSize: n, classes: r } = e,
         o = {
            root: [
               "root",
               t !== "inherit" && `color${mt(t)}`,
               `fontSize${mt(n)}`,
            ],
         };
      return X0(o, o1, r);
   },
   u1 = r1("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
         const { ownerState: n } = e;
         return [
            t.root,
            n.color !== "inherit" && t[`color${mt(n.color)}`],
            t[`fontSize${mt(n.fontSize)}`],
         ];
      },
   })(({ theme: e, ownerState: t }) => {
      var n, r, o, l, i, u, s, a, h, m, p, v, y, g, E, f, c;
      return {
         userSelect: "none",
         width: "1em",
         height: "1em",
         display: "inline-block",
         fill: "currentColor",
         flexShrink: 0,
         transition:
            (n = e.transitions) == null || (r = n.create) == null
               ? void 0
               : r.call(n, "fill", {
                    duration:
                       (o = e.transitions) == null || (l = o.duration) == null
                          ? void 0
                          : l.shorter,
                 }),
         fontSize: {
            inherit: "inherit",
            small:
               ((i = e.typography) == null || (u = i.pxToRem) == null
                  ? void 0
                  : u.call(i, 20)) || "1.25rem",
            medium:
               ((s = e.typography) == null || (a = s.pxToRem) == null
                  ? void 0
                  : a.call(s, 24)) || "1.5rem",
            large:
               ((h = e.typography) == null || (m = h.pxToRem) == null
                  ? void 0
                  : m.call(h, 35)) || "2.1875rem",
         }[t.fontSize],
         color:
            (p =
               (v = (e.vars || e).palette) == null || (y = v[t.color]) == null
                  ? void 0
                  : y.main) != null
               ? p
               : {
                    action:
                       (g = (e.vars || e).palette) == null ||
                       (E = g.action) == null
                          ? void 0
                          : E.active,
                    disabled:
                       (f = (e.vars || e).palette) == null ||
                       (c = f.action) == null
                          ? void 0
                          : c.disabled,
                    inherit: void 0,
                 }[t.color],
      };
   }),
   hd = B.forwardRef(function (t, n) {
      const r = e1({ props: t, name: "MuiSvgIcon" }),
         {
            children: o,
            className: l,
            color: i = "inherit",
            component: u = "svg",
            fontSize: s = "medium",
            htmlColor: a,
            inheritViewBox: h = !1,
            titleAccess: m,
            viewBox: p = "0 0 24 24",
         } = r,
         v = Ye(r, l1),
         y = A({}, r, {
            color: i,
            component: u,
            fontSize: s,
            instanceFontSize: t.fontSize,
            inheritViewBox: h,
            viewBox: p,
         }),
         g = {};
      h || (g.viewBox = p);
      const E = i1(y);
      return Ve(
         u1,
         A(
            {
               as: u,
               className: tm(E.root, l),
               focusable: "false",
               color: a,
               "aria-hidden": m ? void 0 : !0,
               role: m ? "img" : void 0,
               ref: n,
            },
            g,
            v,
            {
               ownerState: y,
               children: [o, m ? $("title", { children: m }) : null],
            }
         )
      );
   });
hd.muiName = "SvgIcon";
const Fa = hd;
function gd(e, t) {
   function n(r, o) {
      return $(
         Fa,
         A({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
      );
   }
   return (n.muiName = Fa.muiName), B.memo(B.forwardRef(n));
}
const s1 = gd(
      $("path", { d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" }),
      "NavigateBefore"
   ),
   a1 = gd(
      $("path", { d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }),
      "NavigateNext"
   ),
   c1 = ({ title: e, items: t }) => {
      const [n, r] = B.useState(0);
      return Ve("div", {
         className: "movie-row",
         children: [
            $("h2", { children: e }),
            $("div", {
               className: "left",
               onClick: () => {
                  let i = n + Math.round(window.innerWidth / 2);
                  i > 0 && (i = 0), r(i);
               },
               children: $(s1, { style: { fontSize: 50 } }),
            }),
            $("div", {
               className: "right",
               onClick: () => {
                  let i = n - Math.round(window.innerWidth / 2),
                     u = t.results.length * 200;
                  window.innerWidth - u > i && (i = window.innerWidth - u - 60),
                     r(i);
               },
               children: $(a1, { style: { fontSize: 50 } }),
            }),
            $("div", {
               className: "list-area",
               style: { marginLeft: n, width: t.results.length * 210 },
               children: $("div", {
                  className: "list",
                  children:
                     t.results.length > 0 &&
                     t.results.map((i, u) =>
                        $(
                           "div",
                           {
                              className: "list-item",
                              children: $("img", {
                                 src: `https://image.tmdb.org/t/p/w300${i.poster_path}`,
                                 alt: i.original_title,
                              }),
                           },
                           u
                        )
                     ),
               }),
            }),
         ],
      });
   };
const f1 = ({ item: e }) => {
   let t = new Date(e.first_air_date),
      n = [];
   for (let r in e.genres) n.push(e.genres[r].name);
   return $("section", {
      className: "featured",
      style: {
         backgroundSize: "cover",
         backgroundPosition: "center",
         backgroundImage: `url(https://image.tmdb.org/t/p/original${e.backdrop_path})`,
      },
      children: $("div", {
         className: "vertical",
         children: Ve("div", {
            className: "horizontal",
            children: [
               $("div", { className: "name", children: e.original_name }),
               Ve("div", {
                  className: "details",
                  children: [
                     Ve("div", {
                        className: "points",
                        children: [e.vote_average.toFixed(1), " pontos"],
                     }),
                     $("div", { className: "year", children: t.getFullYear() }),
                     Ve("div", {
                        className: "seasons",
                        children: [
                           e.number_of_seasons,
                           " temporada",
                           e.number_of_seasons != 1 ? "s" : "",
                        ],
                     }),
                  ],
               }),
               $("div", { className: "description", children: e.overview }),
               Ve("div", {
                  className: "buttons",
                  children: [
                     $("a", {
                        className: "watch-btn",
                        href: `/watch/${e.id}`,
                        children: "▶︎ Assistir",
                     }),
                     $("a", {
                        className: "my-list-btn",
                        href: `/list/add/${e.id}`,
                        children: "+ Minha lista",
                     }),
                  ],
               }),
               Ve("div", {
                  className: "genres",
                  children: [
                     $("strong", { children: "Gêneros: " }),
                     n.join(", "),
                  ],
               }),
            ],
         }),
      }),
   });
};
const d1 = () =>
   Ve("footer", {
      children: [
         "Feito por ",
         $("span", { children: "Kauan Oliveira" }),
         " - Direitos de imagem para Netflix - Dados obtidos do site Themoviedb.org",
      ],
   });
function p1() {
   const [e, t] = B.useState([]),
      [n, r] = B.useState(null),
      [o, l] = B.useState(!1);
   return (
      B.useEffect(() => {
         (async () => {
            let u = await va.getHomeList();
            t(u);
            let s = u.filter((p) => p.slug === "originals"),
               a = Math.floor(Math.random() * s[0].items.results.length--),
               h = s[0].items.results[a],
               m = await va.getMovieInfo(h.id, "tv");
            (h = s[0].items.results[a]), r(m);
         })();
      }, []),
      B.useEffect(() => {
         const i = () => {
            window.scrollY > 10 ? l(!0) : l(!1);
         };
         return (
            window.addEventListener("scroll", i),
            () => {
               window.removeEventListener("scroll", i);
            }
         );
      }, []),
      Ve("div", {
         className: "page",
         children: [
            $(Y0, { bg: o }),
            n && $(f1, { item: n }),
            $("section", {
               className: "lists",
               children: e.map((i, u) =>
                  $(c1, { title: i.title, items: i.items }, u)
               ),
            }),
            $(d1, {}),
            e.length <= 0 &&
               $("div", {
                  className: "loading",
                  children: $("img", {
                     src: "https://i.gifer.com/8Etj.gif",
                     alt: "carregando",
                  }),
               }),
         ],
      })
   );
}
li.createRoot(document.getElementById("root")).render(
   $(Ka.StrictMode, { children: $(p1, {}) })
);
