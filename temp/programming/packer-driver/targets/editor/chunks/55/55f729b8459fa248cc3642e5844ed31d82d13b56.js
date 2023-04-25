System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        function bind(t, r) {
          return function e() {
            return t.apply(r, arguments);
          };
        }

        const {
          toString
        } = Object.prototype;
        const {
          getPrototypeOf
        } = Object;

        const kindOf = (r => e => {
          const t = toString.call(e);
          return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
        })(Object.create(null));

        const kindOfTest = t => {
          t = t.toLowerCase();
          return e => kindOf(e) === t;
        };

        const typeOfTest = t => e => typeof e === t;

        const {
          isArray
        } = Array;
        const isUndefined = typeOfTest("undefined");

        function isBuffer(e) {
          return e !== null && !isUndefined(e) && e.constructor !== null && !isUndefined(e.constructor) && isFunction(e.constructor.isBuffer) && e.constructor.isBuffer(e);
        }

        const isArrayBuffer = kindOfTest("ArrayBuffer");

        function isArrayBufferView(e) {
          let t;

          if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
            t = ArrayBuffer.isView(e);
          } else {
            t = e && e.buffer && isArrayBuffer(e.buffer);
          }

          return t;
        }

        const isString = typeOfTest("string");
        const isFunction = typeOfTest("function");
        const isNumber = typeOfTest("number");

        const isObject = e => e !== null && typeof e === "object";

        const isBoolean = e => e === true || e === false;

        const isPlainObject = e => {
          if (kindOf(e) !== "object") {
            return false;
          }

          const t = getPrototypeOf(e);
          return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
        };

        const isDate = kindOfTest("Date");
        const isFile = kindOfTest("File");
        const isBlob = kindOfTest("Blob");
        const isFileList = kindOfTest("FileList");

        const isStream = e => isObject(e) && isFunction(e.pipe);

        const isFormData = e => {
          const t = "[object FormData]";
          return e && (typeof FormData === "function" && e instanceof FormData || toString.call(e) === t || isFunction(e.toString) && e.toString() === t);
        };

        const isURLSearchParams = kindOfTest("URLSearchParams");

        const trim = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

        function forEach(t, r, {
          allOwnKeys: n = false
        } = {}) {
          if (t === null || typeof t === "undefined") {
            return;
          }

          let o;
          let e;

          if (typeof t !== "object") {
            t = [t];
          }

          if (isArray(t)) {
            for (o = 0, e = t.length; o < e; o++) {
              r.call(null, t[o], o, t);
            }
          } else {
            const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t);
            const i = s.length;
            let e;

            for (o = 0; o < i; o++) {
              e = s[o];
              r.call(null, t[e], e, t);
            }
          }
        }

        function findKey(e, t) {
          t = t.toLowerCase();
          const r = Object.keys(e);
          let n = r.length;
          let o;

          while (n-- > 0) {
            o = r[n];

            if (t === o.toLowerCase()) {
              return o;
            }
          }

          return null;
        }

        const _global = (() => {
          if (typeof globalThis !== "undefined") return globalThis;
          return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
        })();

        const isContextDefined = e => !isUndefined(e) && e !== _global;

        function merge() {
          const {
            caseless: n
          } = isContextDefined(this) && this || {};
          const o = {};

          const r = (e, t) => {
            const r = n && findKey(o, t) || t;

            if (isPlainObject(o[r]) && isPlainObject(e)) {
              o[r] = merge(o[r], e);
            } else if (isPlainObject(e)) {
              o[r] = merge({}, e);
            } else if (isArray(e)) {
              o[r] = e.slice();
            } else {
              o[r] = e;
            }
          };

          for (let e = 0, t = arguments.length; e < t; e++) {
            arguments[e] && forEach(arguments[e], r);
          }

          return o;
        }

        const extend = (r, e, n, {
          allOwnKeys: t
        } = {}) => {
          forEach(e, (e, t) => {
            if (n && isFunction(e)) {
              r[t] = bind(e, n);
            } else {
              r[t] = e;
            }
          }, {
            allOwnKeys: t
          });
          return r;
        };

        const stripBOM = e => {
          if (e.charCodeAt(0) === 65279) {
            e = e.slice(1);
          }

          return e;
        };

        const inherits = (e, t, r, n) => {
          e.prototype = Object.create(t.prototype, n);
          e.prototype.constructor = e;
          Object.defineProperty(e, "super", {
            value: t.prototype
          });
          r && Object.assign(e.prototype, r);
        };

        const toFlatObject = (e, t, r, n) => {
          let o;
          let s;
          let i;
          const a = {};
          t = t || {};
          if (e == null) return t;

          do {
            o = Object.getOwnPropertyNames(e);
            s = o.length;

            while (s-- > 0) {
              i = o[s];

              if ((!n || n(i, e, t)) && !a[i]) {
                t[i] = e[i];
                a[i] = true;
              }
            }

            e = r !== false && getPrototypeOf(e);
          } while (e && (!r || r(e, t)) && e !== Object.prototype);

          return t;
        };

        const endsWith = (e, t, r) => {
          e = String(e);

          if (r === undefined || r > e.length) {
            r = e.length;
          }

          r -= t.length;
          const n = e.indexOf(t, r);
          return n !== -1 && n === r;
        };

        const toArray = e => {
          if (!e) return null;
          if (isArray(e)) return e;
          let t = e.length;
          if (!isNumber(t)) return null;
          const r = new Array(t);

          while (t-- > 0) {
            r[t] = e[t];
          }

          return r;
        };

        const isTypedArray = (t => {
          return e => {
            return t && e instanceof t;
          };
        })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));

        const forEachEntry = (e, t) => {
          const r = e && e[Symbol.iterator];
          const n = r.call(e);
          let o;

          while ((o = n.next()) && !o.done) {
            const s = o.value;
            t.call(e, s[0], s[1]);
          }
        };

        const matchAll = (e, t) => {
          let r;
          const n = [];

          while ((r = e.exec(t)) !== null) {
            n.push(r);
          }

          return n;
        };

        const isHTMLForm = kindOfTest("HTMLFormElement");

        const toCamelCase = e => {
          return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function e(t, r, n) {
            return r.toUpperCase() + n;
          });
        };

        const hasOwnProperty = (({
          hasOwnProperty: r
        }) => (e, t) => r.call(e, t))(Object.prototype);

        const isRegExp = kindOfTest("RegExp");

        const reduceDescriptors = (r, n) => {
          const e = Object.getOwnPropertyDescriptors(r);
          const o = {};
          forEach(e, (e, t) => {
            if (n(e, t, r) !== false) {
              o[t] = e;
            }
          });
          Object.defineProperties(r, o);
        };

        const freezeMethods = n => {
          reduceDescriptors(n, (e, t) => {
            if (isFunction(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1) {
              return false;
            }

            const r = n[t];
            if (!isFunction(r)) return;
            e.enumerable = false;

            if ("writable" in e) {
              e.writable = false;
              return;
            }

            if (!e.set) {
              e.set = () => {
                throw Error("Can not rewrite read-only method '" + t + "'");
              };
            }
          });
        };

        const toObjectSet = (e, t) => {
          const r = {};

          const n = e => {
            e.forEach(e => {
              r[e] = true;
            });
          };

          isArray(e) ? n(e) : n(String(e).split(t));
          return r;
        };

        const noop = () => {};

        const toFiniteNumber = (e, t) => {
          e = +e;
          return Number.isFinite(e) ? e : t;
        };

        const ALPHA = "abcdefghijklmnopqrstuvwxyz";
        const DIGIT = "0123456789";
        const ALPHABET = {
          DIGIT: DIGIT,
          ALPHA: ALPHA,
          ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
        };

        const generateString = (e = 16, t = ALPHABET.ALPHA_DIGIT) => {
          let r = "";
          const {
            length: n
          } = t;

          while (e--) {
            r += t[Math.random() * n | 0];
          }

          return r;
        };

        function isSpecCompliantForm(e) {
          return !!(e && isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
        }

        const toJSONObject = e => {
          const t = new Array(10);

          const s = (e, n) => {
            if (isObject(e)) {
              if (t.indexOf(e) >= 0) {
                return;
              }

              if (!("toJSON" in e)) {
                t[n] = e;
                const o = isArray(e) ? [] : {};
                forEach(e, (e, t) => {
                  const r = s(e, n + 1);
                  !isUndefined(r) && (o[t] = r);
                });
                t[n] = undefined;
                return o;
              }
            }

            return e;
          };

          return s(e, 0);
        };

        var utils = {
          isArray: isArray,
          isArrayBuffer: isArrayBuffer,
          isBuffer: isBuffer,
          isFormData: isFormData,
          isArrayBufferView: isArrayBufferView,
          isString: isString,
          isNumber: isNumber,
          isBoolean: isBoolean,
          isObject: isObject,
          isPlainObject: isPlainObject,
          isUndefined: isUndefined,
          isDate: isDate,
          isFile: isFile,
          isBlob: isBlob,
          isRegExp: isRegExp,
          isFunction: isFunction,
          isStream: isStream,
          isURLSearchParams: isURLSearchParams,
          isTypedArray: isTypedArray,
          isFileList: isFileList,
          forEach: forEach,
          merge: merge,
          extend: extend,
          trim: trim,
          stripBOM: stripBOM,
          inherits: inherits,
          toFlatObject: toFlatObject,
          kindOf: kindOf,
          kindOfTest: kindOfTest,
          endsWith: endsWith,
          toArray: toArray,
          forEachEntry: forEachEntry,
          matchAll: matchAll,
          isHTMLForm: isHTMLForm,
          hasOwnProperty: hasOwnProperty,
          hasOwnProp: hasOwnProperty,
          reduceDescriptors: reduceDescriptors,
          freezeMethods: freezeMethods,
          toObjectSet: toObjectSet,
          toCamelCase: toCamelCase,
          noop: noop,
          toFiniteNumber: toFiniteNumber,
          findKey: findKey,
          global: _global,
          isContextDefined: isContextDefined,
          ALPHABET: ALPHABET,
          generateString: generateString,
          isSpecCompliantForm: isSpecCompliantForm,
          toJSONObject: toJSONObject
        };

        function AxiosError$1(e, t, r, n, o) {
          Error.call(this);

          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          } else {
            this.stack = new Error().stack;
          }

          this.message = e;
          this.name = "AxiosError";
          t && (this.code = t);
          r && (this.config = r);
          n && (this.request = n);
          o && (this.response = o);
        }

        utils.inherits(AxiosError$1, Error, {
          toJSON: function e() {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: utils.toJSONObject(this.config),
              code: this.code,
              status: this.response && this.response.status ? this.response.status : null
            };
          }
        });
        const prototype$1 = AxiosError$1.prototype;
        const descriptors = {};
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
          descriptors[e] = {
            value: e
          };
        });
        Object.defineProperties(AxiosError$1, descriptors);
        Object.defineProperty(prototype$1, "isAxiosError", {
          value: true
        });

        AxiosError$1.from = (e, t, r, n, o, s) => {
          const i = Object.create(prototype$1);
          utils.toFlatObject(e, i, function e(t) {
            return t !== Error.prototype;
          }, e => {
            return e !== "isAxiosError";
          });
          AxiosError$1.call(i, e.message, t, r, n, o);
          i.cause = e;
          i.name = e.name;
          s && Object.assign(i, s);
          return i;
        };

        var httpAdapter = null;

        function isVisitable(e) {
          return utils.isPlainObject(e) || utils.isArray(e);
        }

        function removeBrackets(e) {
          return utils.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }

        function renderKey(e, t, n) {
          if (!e) return t;
          return e.concat(t).map(function e(t, r) {
            t = removeBrackets(t);
            return !n && r ? "[" + t + "]" : t;
          }).join(n ? "." : "");
        }

        function isFlatArray(e) {
          return utils.isArray(e) && !e.some(isVisitable);
        }

        const predicates = utils.toFlatObject(utils, {}, null, function e(t) {
          return /^is[A-Z]/.test(t);
        });

        function toFormData$1(e, s, t) {
          if (!utils.isObject(e)) {
            throw new TypeError("target must be an object");
          }

          s = s || new FormData();
          t = utils.toFlatObject(t, {
            metaTokens: true,
            dots: false,
            indexes: false
          }, false, function e(t, r) {
            return !utils.isUndefined(r[t]);
          });
          const o = t.metaTokens;
          const i = t.visitor || l;
          const a = t.dots;
          const u = t.indexes;
          const r = t.Blob || typeof Blob !== "undefined" && Blob;
          const n = r && utils.isSpecCompliantForm(s);

          if (!utils.isFunction(i)) {
            throw new TypeError("visitor must be a function");
          }

          function c(e) {
            if (e === null) return "";

            if (utils.isDate(e)) {
              return e.toISOString();
            }

            if (!n && utils.isBlob(e)) {
              throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
            }

            if (utils.isArrayBuffer(e) || utils.isTypedArray(e)) {
              return n && typeof Blob === "function" ? new Blob([e]) : Buffer.from(e);
            }

            return e;
          }

          function l(e, n, t) {
            let r = e;

            if (e && !t && typeof e === "object") {
              if (utils.endsWith(n, "{}")) {
                n = o ? n : n.slice(0, -2);
                e = JSON.stringify(e);
              } else if (utils.isArray(e) && isFlatArray(e) || (utils.isFileList(e) || utils.endsWith(n, "[]")) && (r = utils.toArray(e))) {
                n = removeBrackets(n);
                r.forEach(function e(t, r) {
                  !(utils.isUndefined(t) || t === null) && s.append(u === true ? renderKey([n], r, a) : u === null ? n : n + "[]", c(t));
                });
                return false;
              }
            }

            if (isVisitable(e)) {
              return true;
            }

            s.append(renderKey(t, n, a), c(e));
            return false;
          }

          const d = [];
          const f = Object.assign(predicates, {
            defaultVisitor: l,
            convertValue: c,
            isVisitable: isVisitable
          });

          function h(e, o) {
            if (utils.isUndefined(e)) return;

            if (d.indexOf(e) !== -1) {
              throw Error("Circular reference detected in " + o.join("."));
            }

            d.push(e);
            utils.forEach(e, function e(t, r) {
              const n = !(utils.isUndefined(t) || t === null) && i.call(s, t, utils.isString(r) ? r.trim() : r, o, f);

              if (n === true) {
                h(t, o ? o.concat(r) : [r]);
              }
            });
            d.pop();
          }

          if (!utils.isObject(e)) {
            throw new TypeError("data must be an object");
          }

          h(e);
          return s;
        }

        function encode$1(e) {
          const r = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
          };
          return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function e(t) {
            return r[t];
          });
        }

        function AxiosURLSearchParams(e, t) {
          this._pairs = [];
          e && toFormData$1(e, this, t);
        }

        const prototype = AxiosURLSearchParams.prototype;

        prototype.append = function e(t, r) {
          this._pairs.push([t, r]);
        };

        prototype.toString = function e(t) {
          const r = t ? function (e) {
            return t.call(this, e, encode$1);
          } : encode$1;
          return this._pairs.map(function e(t) {
            return r(t[0]) + "=" + r(t[1]);
          }, "").join("&");
        };

        function encode(e) {
          return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }

        function buildURL(e, t, r) {
          if (!t) {
            return e;
          }

          const n = r && r.encode || encode;
          const o = r && r.serialize;
          let s;

          if (o) {
            s = o(t, r);
          } else {
            s = utils.isURLSearchParams(t) ? t.toString() : new AxiosURLSearchParams(t, r).toString(n);
          }

          if (s) {
            const i = e.indexOf("#");

            if (i !== -1) {
              e = e.slice(0, i);
            }

            e += (e.indexOf("?") === -1 ? "?" : "&") + s;
          }

          return e;
        }

        class InterceptorManager {
          constructor() {
            this.handlers = [];
          }

          use(e, t, r) {
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: r ? r.synchronous : false,
              runWhen: r ? r.runWhen : null
            });
            return this.handlers.length - 1;
          }

          eject(e) {
            if (this.handlers[e]) {
              this.handlers[e] = null;
            }
          }

          clear() {
            if (this.handlers) {
              this.handlers = [];
            }
          }

          forEach(r) {
            utils.forEach(this.handlers, function e(t) {
              if (t !== null) {
                r(t);
              }
            });
          }

        }

        var InterceptorManager$1 = InterceptorManager;
        var transitionalDefaults = {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        };
        var URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
        var FormData$1 = typeof FormData !== "undefined" ? FormData : null;
        var Blob$1 = typeof Blob !== "undefined" ? Blob : null;

        const isStandardBrowserEnv = (() => {
          let e;

          if (typeof navigator !== "undefined" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS")) {
            return false;
          }

          return typeof window !== "undefined" && typeof document !== "undefined";
        })();

        const isStandardBrowserWebWorkerEnv = (() => {
          return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
        })();

        var platform = {
          isBrowser: true,
          classes: {
            URLSearchParams: URLSearchParams$1,
            FormData: FormData$1,
            Blob: Blob$1
          },
          isStandardBrowserEnv: isStandardBrowserEnv,
          isStandardBrowserWebWorkerEnv: isStandardBrowserWebWorkerEnv,
          protocols: ["http", "https", "file", "blob", "url", "data"]
        };

        function toURLEncodedForm(e, t) {
          return toFormData$1(e, new platform.classes.URLSearchParams(), Object.assign({
            visitor: function (e, t, r, n) {
              if (platform.isNode && utils.isBuffer(e)) {
                this.append(t, e.toString("base64"));
                return false;
              }

              return n.defaultVisitor.apply(this, arguments);
            }
          }, t));
        }

        function parsePropPath(e) {
          return utils.matchAll(/\w+|\[(\w*)]/g, e).map(e => {
            return e[0] === "[]" ? "" : e[1] || e[0];
          });
        }

        function arrayToObject(e) {
          const t = {};
          const r = Object.keys(e);
          let n;
          const o = r.length;
          let s;

          for (n = 0; n < o; n++) {
            s = r[n];
            t[s] = e[s];
          }

          return t;
        }

        function formDataToJSON(e) {
          function u(e, t, r, n) {
            let o = e[n++];
            const s = Number.isFinite(+o);
            const i = n >= e.length;
            o = !o && utils.isArray(r) ? r.length : o;

            if (i) {
              if (utils.hasOwnProp(r, o)) {
                r[o] = [r[o], t];
              } else {
                r[o] = t;
              }

              return !s;
            }

            if (!r[o] || !utils.isObject(r[o])) {
              r[o] = [];
            }

            const a = u(e, t, r[o], n);

            if (a && utils.isArray(r[o])) {
              r[o] = arrayToObject(r[o]);
            }

            return !s;
          }

          if (utils.isFormData(e) && utils.isFunction(e.entries)) {
            const r = {};
            utils.forEachEntry(e, (e, t) => {
              u(parsePropPath(e), t, r, 0);
            });
            return r;
          }

          return null;
        }

        const DEFAULT_CONTENT_TYPE = {
          "Content-Type": undefined
        };

        function stringifySafely(e, t, r) {
          if (utils.isString(e)) {
            try {
              (t || JSON.parse)(e);
              return utils.trim(e);
            } catch (e) {
              if (e.name !== "SyntaxError") {
                throw e;
              }
            }
          }

          return (r || JSON.stringify)(e);
        }

        const defaults = {
          transitional: transitionalDefaults,
          adapter: ["xhr", "http"],
          transformRequest: [function e(t, r) {
            const n = r.getContentType() || "";
            const o = n.indexOf("application/json") > -1;
            const s = utils.isObject(t);

            if (s && utils.isHTMLForm(t)) {
              t = new FormData(t);
            }

            const i = utils.isFormData(t);

            if (i) {
              if (!o) {
                return t;
              }

              return o ? JSON.stringify(formDataToJSON(t)) : t;
            }

            if (utils.isArrayBuffer(t) || utils.isBuffer(t) || utils.isStream(t) || utils.isFile(t) || utils.isBlob(t)) {
              return t;
            }

            if (utils.isArrayBufferView(t)) {
              return t.buffer;
            }

            if (utils.isURLSearchParams(t)) {
              r.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
              return t.toString();
            }

            let a;

            if (s) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                return toURLEncodedForm(t, this.formSerializer).toString();
              }

              if ((a = utils.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return toFormData$1(a ? {
                  "files[]": t
                } : t, u && new u(), this.formSerializer);
              }
            }

            if (s || o) {
              r.setContentType("application/json", false);
              return stringifySafely(t);
            }

            return t;
          }],
          transformResponse: [function e(t) {
            const r = this.transitional || defaults.transitional;
            const n = r && r.forcedJSONParsing;
            const o = this.responseType === "json";

            if (t && utils.isString(t) && (n && !this.responseType || o)) {
              const s = r && r.silentJSONParsing;
              const i = !s && o;

              try {
                return JSON.parse(t);
              } catch (e) {
                if (i) {
                  if (e.name === "SyntaxError") {
                    throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
                  }

                  throw e;
                }
              }
            }

            return t;
          }],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {
            FormData: platform.classes.FormData,
            Blob: platform.classes.Blob
          },
          validateStatus: function e(t) {
            return t >= 200 && t < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*"
            }
          }
        };
        utils.forEach(["delete", "get", "head"], function e(t) {
          defaults.headers[t] = {};
        });
        utils.forEach(["post", "put", "patch"], function e(t) {
          defaults.headers[t] = utils.merge(DEFAULT_CONTENT_TYPE);
        });
        var defaults$1 = defaults;
        const ignoreDuplicateOf = utils.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);

        var parseHeaders = e => {
          const r = {};
          let n;
          let o;
          let s;
          e && e.split("\n").forEach(function e(t) {
            s = t.indexOf(":");
            n = t.substring(0, s).trim().toLowerCase();
            o = t.substring(s + 1).trim();

            if (!n || r[n] && ignoreDuplicateOf[n]) {
              return;
            }

            if (n === "set-cookie") {
              if (r[n]) {
                r[n].push(o);
              } else {
                r[n] = [o];
              }
            } else {
              r[n] = r[n] ? r[n] + ", " + o : o;
            }
          });
          return r;
        };

        const $internals = Symbol("internals");

        function normalizeHeader(e) {
          return e && String(e).trim().toLowerCase();
        }

        function normalizeValue(e) {
          if (e === false || e == null) {
            return e;
          }

          return utils.isArray(e) ? e.map(normalizeValue) : String(e);
        }

        function parseTokens(e) {
          const t = Object.create(null);
          const r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
          let n;

          while (n = r.exec(e)) {
            t[n[1]] = n[2];
          }

          return t;
        }

        function isValidHeaderName(e) {
          return /^[-_a-zA-Z]+$/.test(e.trim());
        }

        function matchHeaderValue(e, t, r, n, o) {
          if (utils.isFunction(n)) {
            return n.call(this, t, r);
          }

          if (o) {
            t = r;
          }

          if (!utils.isString(t)) return;

          if (utils.isString(n)) {
            return t.indexOf(n) !== -1;
          }

          if (utils.isRegExp(n)) {
            return n.test(t);
          }
        }

        function formatHeader(e) {
          return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => {
            return t.toUpperCase() + r;
          });
        }

        function buildAccessors(e, o) {
          const t = utils.toCamelCase(" " + o);
          ["get", "set", "has"].forEach(n => {
            Object.defineProperty(e, n + t, {
              value: function (e, t, r) {
                return this[n].call(this, o, e, t, r);
              },
              configurable: true
            });
          });
        }

        let AxiosHeaders$1 = class AxiosHeaders {
          constructor(e) {
            e && this.set(e);
          }

          set(e, t, r) {
            const s = this;

            function n(e, t, r) {
              const n = normalizeHeader(t);

              if (!n) {
                throw new Error("header name must be a non-empty string");
              }

              const o = utils.findKey(s, n);

              if (!o || s[o] === undefined || r === true || r === undefined && s[o] !== false) {
                s[o || t] = normalizeValue(e);
              }
            }

            const o = (e, r) => utils.forEach(e, (e, t) => n(e, t, r));

            if (utils.isPlainObject(e) || e instanceof this.constructor) {
              o(e, t);
            } else if (utils.isString(e) && (e = e.trim()) && !isValidHeaderName(e)) {
              o(parseHeaders(e), t);
            } else {
              e != null && n(t, e, r);
            }

            return this;
          }

          get(e, t) {
            e = normalizeHeader(e);

            if (e) {
              const r = utils.findKey(this, e);

              if (r) {
                const n = this[r];

                if (!t) {
                  return n;
                }

                if (t === true) {
                  return parseTokens(n);
                }

                if (utils.isFunction(t)) {
                  return t.call(this, n, r);
                }

                if (utils.isRegExp(t)) {
                  return t.exec(n);
                }

                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }

          has(e, t) {
            e = normalizeHeader(e);

            if (e) {
              const r = utils.findKey(this, e);
              return !!(r && this[r] !== undefined && (!t || matchHeaderValue(this, this[r], r, t)));
            }

            return false;
          }

          delete(e, r) {
            const n = this;
            let o = false;

            function t(e) {
              e = normalizeHeader(e);

              if (e) {
                const t = utils.findKey(n, e);

                if (t && (!r || matchHeaderValue(n, n[t], t, r))) {
                  delete n[t];
                  o = true;
                }
              }
            }

            if (utils.isArray(e)) {
              e.forEach(t);
            } else {
              t(e);
            }

            return o;
          }

          clear(e) {
            const t = Object.keys(this);
            let r = t.length;
            let n = false;

            while (r--) {
              const o = t[r];

              if (!e || matchHeaderValue(this, this[o], o, e, true)) {
                delete this[o];
                n = true;
              }
            }

            return n;
          }

          normalize(o) {
            const s = this;
            const i = {};
            utils.forEach(this, (e, t) => {
              const r = utils.findKey(i, t);

              if (r) {
                s[r] = normalizeValue(e);
                delete s[t];
                return;
              }

              const n = o ? formatHeader(t) : String(t).trim();

              if (n !== t) {
                delete s[t];
              }

              s[n] = normalizeValue(e);
              i[n] = true;
            });
            return this;
          }

          concat(...e) {
            return this.constructor.concat(this, ...e);
          }

          toJSON(r) {
            const n = Object.create(null);
            utils.forEach(this, (e, t) => {
              e != null && e !== false && (n[t] = r && utils.isArray(e) ? e.join(", ") : e);
            });
            return n;
          }

          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }

          toString() {
            return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
          }

          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }

          static from(e) {
            return e instanceof this ? e : new this(e);
          }

          static concat(e, ...t) {
            const r = new this(e);
            t.forEach(e => r.set(e));
            return r;
          }

          static accessor(e) {
            const t = this[$internals] = this[$internals] = {
              accessors: {}
            };
            const r = t.accessors;
            const n = this.prototype;

            function o(e) {
              const t = normalizeHeader(e);

              if (!r[t]) {
                buildAccessors(n, e);
                r[t] = true;
              }
            }

            utils.isArray(e) ? e.forEach(o) : o(e);
            return this;
          }

        };
        AxiosHeaders$1.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
        utils.freezeMethods(AxiosHeaders$1.prototype);
        utils.freezeMethods(AxiosHeaders$1);
        var AxiosHeaders$2 = AxiosHeaders$1;

        function transformData(e, r) {
          const n = this || defaults$1;
          const t = r || n;
          const o = AxiosHeaders$2.from(t.headers);
          let s = t.data;
          utils.forEach(e, function e(t) {
            s = t.call(n, s, o.normalize(), r ? r.status : undefined);
          });
          o.normalize();
          return s;
        }

        function isCancel$1(e) {
          return !!(e && e.__CANCEL__);
        }

        function CanceledError$1(e, t, r) {
          AxiosError$1.call(this, e == null ? "canceled" : e, AxiosError$1.ERR_CANCELED, t, r);
          this.name = "CanceledError";
        }

        utils.inherits(CanceledError$1, AxiosError$1, {
          __CANCEL__: true
        });

        function settle(e, t, r) {
          const n = r.config.validateStatus;

          if (!r.status || !n || n(r.status)) {
            e(r);
          } else {
            t(new AxiosError$1("Request failed with status code " + r.status, [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
          }
        }

        var cookies = platform.isStandardBrowserEnv ? function e() {
          return {
            write: function e(t, r, n, o, s, i) {
              const a = [];
              a.push(t + "=" + encodeURIComponent(r));

              if (utils.isNumber(n)) {
                a.push("expires=" + new Date(n).toGMTString());
              }

              if (utils.isString(o)) {
                a.push("path=" + o);
              }

              if (utils.isString(s)) {
                a.push("domain=" + s);
              }

              if (i === true) {
                a.push("secure");
              }

              document.cookie = a.join("; ");
            },
            read: function e(t) {
              const r = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
              return r ? decodeURIComponent(r[3]) : null;
            },
            remove: function e(t) {
              this.write(t, "", Date.now() - 864e5);
            }
          };
        }() : function e() {
          return {
            write: function e() {},
            read: function e() {
              return null;
            },
            remove: function e() {}
          };
        }();

        function isAbsoluteURL(e) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        }

        function combineURLs(e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        }

        function buildFullPath(e, t) {
          if (e && !isAbsoluteURL(t)) {
            return combineURLs(e, t);
          }

          return t;
        }

        var isURLSameOrigin = platform.isStandardBrowserEnv ? function e() {
          const r = /(msie|trident)/i.test(navigator.userAgent);
          const n = document.createElement("a");
          let o;

          function s(e) {
            let t = e;

            if (r) {
              n.setAttribute("href", t);
              t = n.href;
            }

            n.setAttribute("href", t);
            return {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            };
          }

          o = s(window.location.href);
          return function e(t) {
            const r = utils.isString(t) ? s(t) : t;
            return r.protocol === o.protocol && r.host === o.host;
          };
        }() : function e() {
          return function e() {
            return true;
          };
        }();

        function parseProtocol(e) {
          const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return t && t[1] || "";
        }

        function speedometer(a, u) {
          a = a || 10;
          const c = new Array(a);
          const l = new Array(a);
          let d = 0;
          let f = 0;
          let h;
          u = u !== undefined ? u : 1e3;
          return function e(t) {
            const r = Date.now();
            const n = l[f];

            if (!h) {
              h = r;
            }

            c[d] = t;
            l[d] = r;
            let o = f;
            let s = 0;

            while (o !== d) {
              s += c[o++];
              o = o % a;
            }

            d = (d + 1) % a;

            if (d === f) {
              f = (f + 1) % a;
            }

            if (r - h < u) {
              return;
            }

            const i = n && r - n;
            return i ? Math.round(s * 1e3 / i) : undefined;
          };
        }

        function progressEventReducer(a, u) {
          let c = 0;
          const l = speedometer(50, 250);
          return e => {
            const t = e.loaded;
            const r = e.lengthComputable ? e.total : undefined;
            const n = t - c;
            const o = l(n);
            const s = t <= r;
            c = t;
            const i = {
              loaded: t,
              total: r,
              progress: r ? t / r : undefined,
              bytes: n,
              rate: o ? o : undefined,
              estimated: o && r && s ? (r - t) / o : undefined,
              event: e
            };
            i[u ? "download" : "upload"] = true;
            a(i);
          };
        }

        const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";

        var xhrAdapter = isXHRAdapterSupported && function (m) {
          return new Promise(function e(n, o) {
            let t = m.data;
            const r = AxiosHeaders$2.from(m.headers).normalize();
            const s = m.responseType;
            let i;

            function a() {
              if (m.cancelToken) {
                m.cancelToken.unsubscribe(i);
              }

              if (m.signal) {
                m.signal.removeEventListener("abort", i);
              }
            }

            if (utils.isFormData(t) && (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv)) {
              r.setContentType(false);
            }

            let u = new XMLHttpRequest();

            if (m.auth) {
              const f = m.auth.username || "";
              const h = m.auth.password ? unescape(encodeURIComponent(m.auth.password)) : "";
              r.set("Authorization", "Basic " + btoa(f + ":" + h));
            }

            const c = buildFullPath(m.baseURL, m.url);
            u.open(m.method.toUpperCase(), buildURL(c, m.params, m.paramsSerializer), true);
            u.timeout = m.timeout;

            function l() {
              if (!u) {
                return;
              }

              const e = AxiosHeaders$2.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
              const t = !s || s === "text" || s === "json" ? u.responseText : u.response;
              const r = {
                data: t,
                status: u.status,
                statusText: u.statusText,
                headers: e,
                config: m,
                request: u
              };
              settle(function e(t) {
                n(t);
                a();
              }, function e(t) {
                o(t);
                a();
              }, r);
              u = null;
            }

            if ("onloadend" in u) {
              u.onloadend = l;
            } else {
              u.onreadystatechange = function e() {
                if (!u || u.readyState !== 4) {
                  return;
                }

                if (u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0)) {
                  return;
                }

                setTimeout(l);
              };
            }

            u.onabort = function e() {
              if (!u) {
                return;
              }

              o(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, m, u));
              u = null;
            };

            u.onerror = function e() {
              o(new AxiosError$1("Network Error", AxiosError$1.ERR_NETWORK, m, u));
              u = null;
            };

            u.ontimeout = function e() {
              let t = m.timeout ? "timeout of " + m.timeout + "ms exceeded" : "timeout exceeded";
              const r = m.transitional || transitionalDefaults;

              if (m.timeoutErrorMessage) {
                t = m.timeoutErrorMessage;
              }

              o(new AxiosError$1(t, r.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED, m, u));
              u = null;
            };

            if (platform.isStandardBrowserEnv) {
              const p = (m.withCredentials || isURLSameOrigin(c)) && m.xsrfCookieName && cookies.read(m.xsrfCookieName);

              if (p) {
                r.set(m.xsrfHeaderName, p);
              }
            }

            t === undefined && r.setContentType(null);

            if ("setRequestHeader" in u) {
              utils.forEach(r.toJSON(), function e(t, r) {
                u.setRequestHeader(r, t);
              });
            }

            if (!utils.isUndefined(m.withCredentials)) {
              u.withCredentials = !!m.withCredentials;
            }

            if (s && s !== "json") {
              u.responseType = m.responseType;
            }

            if (typeof m.onDownloadProgress === "function") {
              u.addEventListener("progress", progressEventReducer(m.onDownloadProgress, true));
            }

            if (typeof m.onUploadProgress === "function" && u.upload) {
              u.upload.addEventListener("progress", progressEventReducer(m.onUploadProgress));
            }

            if (m.cancelToken || m.signal) {
              i = e => {
                if (!u) {
                  return;
                }

                o(!e || e.type ? new CanceledError$1(null, m, u) : e);
                u.abort();
                u = null;
              };

              m.cancelToken && m.cancelToken.subscribe(i);

              if (m.signal) {
                m.signal.aborted ? i() : m.signal.addEventListener("abort", i);
              }
            }

            const d = parseProtocol(c);

            if (d && platform.protocols.indexOf(d) === -1) {
              o(new AxiosError$1("Unsupported protocol " + d + ":", AxiosError$1.ERR_BAD_REQUEST, m));
              return;
            }

            u.send(t || null);
          });
        };

        const knownAdapters = {
          http: httpAdapter,
          xhr: xhrAdapter
        };
        utils.forEach(knownAdapters, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", {
                value: t
              });
            } catch (e) {}

            Object.defineProperty(e, "adapterName", {
              value: t
            });
          }
        });
        var adapters = {
          getAdapter: t => {
            t = utils.isArray(t) ? t : [t];
            const {
              length: r
            } = t;
            let n;
            let o;

            for (let e = 0; e < r; e++) {
              n = t[e];

              if (o = utils.isString(n) ? knownAdapters[n.toLowerCase()] : n) {
                break;
              }
            }

            if (!o) {
              if (o === false) {
                throw new AxiosError$1(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
              }

              throw new Error(utils.hasOwnProp(knownAdapters, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
            }

            if (!utils.isFunction(o)) {
              throw new TypeError("adapter is not a function");
            }

            return o;
          },
          adapters: knownAdapters
        };

        function throwIfCancellationRequested(e) {
          if (e.cancelToken) {
            e.cancelToken.throwIfRequested();
          }

          if (e.signal && e.signal.aborted) {
            throw new CanceledError$1(null, e);
          }
        }

        function dispatchRequest(r) {
          throwIfCancellationRequested(r);
          r.headers = AxiosHeaders$2.from(r.headers);
          r.data = transformData.call(r, r.transformRequest);

          if (["post", "put", "patch"].indexOf(r.method) !== -1) {
            r.headers.setContentType("application/x-www-form-urlencoded", false);
          }

          const e = adapters.getAdapter(r.adapter || defaults$1.adapter);
          return e(r).then(function e(t) {
            throwIfCancellationRequested(r);
            t.data = transformData.call(r, r.transformResponse, t);
            t.headers = AxiosHeaders$2.from(t.headers);
            return t;
          }, function e(t) {
            if (!isCancel$1(t)) {
              throwIfCancellationRequested(r);

              if (t && t.response) {
                t.response.data = transformData.call(r, r.transformResponse, t.response);
                t.response.headers = AxiosHeaders$2.from(t.response.headers);
              }
            }

            return Promise.reject(t);
          });
        }

        const headersToObject = e => e instanceof AxiosHeaders$2 ? e.toJSON() : e;

        function mergeConfig$1(o, s) {
          s = s || {};
          const i = {};

          function n(e, t, r) {
            if (utils.isPlainObject(e) && utils.isPlainObject(t)) {
              return utils.merge.call({
                caseless: r
              }, e, t);
            } else if (utils.isPlainObject(t)) {
              return utils.merge({}, t);
            } else if (utils.isArray(t)) {
              return t.slice();
            }

            return t;
          }

          function a(e, t, r) {
            if (!utils.isUndefined(t)) {
              return n(e, t, r);
            } else if (!utils.isUndefined(e)) {
              return n(undefined, e, r);
            }
          }

          function e(e, t) {
            if (!utils.isUndefined(t)) {
              return n(undefined, t);
            }
          }

          function t(e, t) {
            if (!utils.isUndefined(t)) {
              return n(undefined, t);
            } else if (!utils.isUndefined(e)) {
              return n(undefined, e);
            }
          }

          function u(e, t, r) {
            if (r in s) {
              return n(e, t);
            } else if (r in o) {
              return n(undefined, e);
            }
          }

          const c = {
            url: e,
            method: e,
            data: e,
            baseURL: t,
            transformRequest: t,
            transformResponse: t,
            paramsSerializer: t,
            timeout: t,
            timeoutMessage: t,
            withCredentials: t,
            adapter: t,
            responseType: t,
            xsrfCookieName: t,
            xsrfHeaderName: t,
            onUploadProgress: t,
            onDownloadProgress: t,
            decompress: t,
            maxContentLength: t,
            maxBodyLength: t,
            beforeRedirect: t,
            transport: t,
            httpAgent: t,
            httpsAgent: t,
            cancelToken: t,
            socketPath: t,
            responseEncoding: t,
            validateStatus: u,
            headers: (e, t) => a(headersToObject(e), headersToObject(t), true)
          };
          utils.forEach(Object.keys(o).concat(Object.keys(s)), function e(t) {
            const r = c[t] || a;
            const n = r(o[t], s[t], t);
            utils.isUndefined(n) && r !== u || (i[t] = n);
          });
          return i;
        }

        const VERSION$1 = "1.3.4";
        const validators$1 = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((r, n) => {
          validators$1[r] = function e(t) {
            return typeof t === r || "a" + (n < 1 ? "n " : " ") + r;
          };
        });
        const deprecatedWarnings = {};

        validators$1.transitional = function e(n, o, r) {
          function s(e, t) {
            return "[Axios v" + VERSION$1 + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "");
          }

          return (e, t, r) => {
            if (n === false) {
              throw new AxiosError$1(s(t, " has been removed" + (o ? " in " + o : "")), AxiosError$1.ERR_DEPRECATED);
            }

            if (o && !deprecatedWarnings[t]) {
              deprecatedWarnings[t] = true;
              console.warn(s(t, " has been deprecated since v" + o + " and will be removed in the near future"));
            }

            return n ? n(e, t, r) : true;
          };
        };

        function assertOptions(t, r, n) {
          if (typeof t !== "object") {
            throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
          }

          const o = Object.keys(t);
          let s = o.length;

          while (s-- > 0) {
            const i = o[s];
            const e = r[i];

            if (e) {
              const a = t[i];
              const u = a === undefined || e(a, i, t);

              if (u !== true) {
                throw new AxiosError$1("option " + i + " must be " + u, AxiosError$1.ERR_BAD_OPTION_VALUE);
              }

              continue;
            }

            if (n !== true) {
              throw new AxiosError$1("Unknown option " + i, AxiosError$1.ERR_BAD_OPTION);
            }
          }
        }

        var validator = {
          assertOptions: assertOptions,
          validators: validators$1
        };
        const validators = validator.validators;
        let Axios$1 = class Axios {
          constructor(e) {
            this.defaults = e;
            this.interceptors = {
              request: new InterceptorManager$1(),
              response: new InterceptorManager$1()
            };
          }

          request(e, r) {
            if (typeof e === "string") {
              r = r || {};
              r.url = e;
            } else {
              r = e || {};
            }

            r = mergeConfig$1(this.defaults, r);
            const {
              transitional: t,
              paramsSerializer: n,
              headers: o
            } = r;

            if (t !== undefined) {
              validator.assertOptions(t, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
              }, false);
            }

            if (n !== undefined) {
              validator.assertOptions(n, {
                encode: validators.function,
                serialize: validators.function
              }, true);
            }

            r.method = (r.method || this.defaults.method || "get").toLowerCase();
            let s;
            s = o && utils.merge(o.common, o[r.method]);
            s && utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
              delete o[e];
            });
            r.headers = AxiosHeaders$2.concat(s, o);
            const i = [];
            let a = true;
            this.interceptors.request.forEach(function e(t) {
              if (typeof t.runWhen === "function" && t.runWhen(r) === false) {
                return;
              }

              a = a && t.synchronous;
              i.unshift(t.fulfilled, t.rejected);
            });
            const u = [];
            this.interceptors.response.forEach(function e(t) {
              u.push(t.fulfilled, t.rejected);
            });
            let c;
            let l = 0;
            let d;

            if (!a) {
              const h = [dispatchRequest.bind(this), undefined];
              h.unshift.apply(h, i);
              h.push.apply(h, u);
              d = h.length;
              c = Promise.resolve(r);

              while (l < d) {
                c = c.then(h[l++], h[l++]);
              }

              return c;
            }

            d = i.length;
            let f = r;
            l = 0;

            while (l < d) {
              const p = i[l++];
              const m = i[l++];

              try {
                f = p(f);
              } catch (e) {
                m.call(this, e);
                break;
              }
            }

            try {
              c = dispatchRequest.call(this, f);
            } catch (e) {
              return Promise.reject(e);
            }

            l = 0;
            d = u.length;

            while (l < d) {
              c = c.then(u[l++], u[l++]);
            }

            return c;
          }

          getUri(e) {
            e = mergeConfig$1(this.defaults, e);
            const t = buildFullPath(e.baseURL, e.url);
            return buildURL(t, e.params, e.paramsSerializer);
          }

        };
        utils.forEach(["delete", "get", "head", "options"], function e(r) {
          Axios$1.prototype[r] = function (e, t) {
            return this.request(mergeConfig$1(t || {}, {
              method: r,
              url: e,
              data: (t || {}).data
            }));
          };
        });
        utils.forEach(["post", "put", "patch"], function e(s) {
          function t(o) {
            return function e(t, r, n) {
              return this.request(mergeConfig$1(n || {}, {
                method: s,
                headers: o ? {
                  "Content-Type": "multipart/form-data"
                } : {},
                url: t,
                data: r
              }));
            };
          }

          Axios$1.prototype[s] = t();
          Axios$1.prototype[s + "Form"] = t(true);
        });
        var Axios$2 = Axios$1;
        let CancelToken$1 = class CancelToken {
          constructor(e) {
            if (typeof e !== "function") {
              throw new TypeError("executor must be a function.");
            }

            let o;
            this.promise = new Promise(function e(t) {
              o = t;
            });
            const s = this;
            this.promise.then(e => {
              if (!s._listeners) return;
              let t = s._listeners.length;

              while (t-- > 0) {
                s._listeners[t](e);
              }

              s._listeners = null;
            });

            this.promise.then = e => {
              let t;
              const r = new Promise(e => {
                s.subscribe(e);
                t = e;
              }).then(e);

              r.cancel = function e() {
                s.unsubscribe(t);
              };

              return r;
            };

            e(function e(t, r, n) {
              if (s.reason) {
                return;
              }

              s.reason = new CanceledError$1(t, r, n);
              o(s.reason);
            });
          }

          throwIfRequested() {
            if (this.reason) {
              throw this.reason;
            }
          }

          subscribe(e) {
            if (this.reason) {
              e(this.reason);
              return;
            }

            if (this._listeners) {
              this._listeners.push(e);
            } else {
              this._listeners = [e];
            }
          }

          unsubscribe(e) {
            if (!this._listeners) {
              return;
            }

            const t = this._listeners.indexOf(e);

            if (t !== -1) {
              this._listeners.splice(t, 1);
            }
          }

          static source() {
            let r;
            const e = new CancelToken(function e(t) {
              r = t;
            });
            return {
              token: e,
              cancel: r
            };
          }

        };
        var CancelToken$2 = CancelToken$1;

        function spread$1(r) {
          return function e(t) {
            return r.apply(null, t);
          };
        }

        function isAxiosError$1(e) {
          return utils.isObject(e) && e.isAxiosError === true;
        }

        const HttpStatusCode$1 = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511
        };
        Object.entries(HttpStatusCode$1).forEach(([e, t]) => {
          HttpStatusCode$1[t] = e;
        });
        var HttpStatusCode$2 = HttpStatusCode$1;

        function createInstance(r) {
          const e = new Axios$2(r);
          const t = bind(Axios$2.prototype.request, e);
          utils.extend(t, Axios$2.prototype, e, {
            allOwnKeys: true
          });
          utils.extend(t, e, null, {
            allOwnKeys: true
          });

          t.create = function e(t) {
            return createInstance(mergeConfig$1(r, t));
          };

          return t;
        }

        const axios = createInstance(defaults$1);
        axios.Axios = Axios$2;
        axios.CanceledError = CanceledError$1;
        axios.CancelToken = CancelToken$2;
        axios.isCancel = isCancel$1;
        axios.VERSION = VERSION$1;
        axios.toFormData = toFormData$1;
        axios.AxiosError = AxiosError$1;
        axios.Cancel = axios.CanceledError;

        axios.all = function e(t) {
          return Promise.all(t);
        };

        axios.spread = spread$1;
        axios.isAxiosError = isAxiosError$1;
        axios.mergeConfig = mergeConfig$1;
        axios.AxiosHeaders = AxiosHeaders$2;

        axios.formToJSON = e => formDataToJSON(utils.isHTMLForm(e) ? new FormData(e) : e);

        axios.HttpStatusCode = HttpStatusCode$2;
        axios.default = axios;
        var axios$1 = axios;
        const {
          Axios,
          AxiosError,
          CanceledError,
          isCancel,
          CancelToken,
          VERSION,
          all,
          Cancel,
          isAxiosError,
          spread,
          toFormData,
          AxiosHeaders,
          HttpStatusCode,
          formToJSON,
          mergeConfig
        } = axios$1;
        var ERROR_MESSAGE;

        (function (e) {
          e["AUTH_USER"] = "User authentication failed.";
          e["AUTH_GAME"] = "Game authentication failed.";
          e["NOT_FOUND_GAME_INFO"] = "Game info not found.";
          e["NOT_FOUND_USER_INFO"] = "User info not found.";
          e["USER_TICKET"] = "Get user ticket failed.";
          e["USER_BALANCE"] = "Get user balance failed.";
          e["MATCH_DETAIL"] = "Get game match failed.";
          e["MATCH_CREATE"] = "Create new game match failed.";
          e["MATCH_COMPLETE"] = "Complete game match failed.";
          e["LIST_QUEST"] = "Get list quest failed.";
          e["LIST_ACHIEVEMENT"] = "Get list achievement failed.";
          e["USER_QUEST_PROCESS"] = "Get user quest process failed.";
          e["USER_QUEST_CLAIM"] = "Claim quest failed.";
          e["INVALID_ACCESS_TOKEN"] = "Invalid access token.";
          e["INVALID_REFRESH_TOKEN"] = "Invalid refresh token.";
          e["REQUIRED_REFRESH_TOKEN"] = "Expired token. Please provide refresh token to continue.";
        })(ERROR_MESSAGE || (ERROR_MESSAGE = {}));

        var COMMON_MESSAGE;

        (function (e) {
          e["COMMON"] = "Message.";
        })(COMMON_MESSAGE || (COMMON_MESSAGE = {}));

        var httpErrorsExports = {};
        var httpErrors = {
          get exports() {
            return httpErrorsExports;
          },

          set exports(e) {
            httpErrorsExports = e;
          }

        };
        var browser = depd;

        function depd(e) {
          if (!e) {
            throw new TypeError("argument namespace is required");
          }

          function t(e) {}

          t._file = undefined;
          t._ignored = true;
          t._namespace = e;
          t._traced = false;
          t._warned = Object.create(null);
          t.function = wrapfunction;
          t.property = wrapproperty;
          return t;
        }

        function wrapfunction(e, t) {
          if (typeof e !== "function") {
            throw new TypeError("argument fn must be a function");
          }

          return e;
        }

        function wrapproperty(e, t, r) {
          if (!e || typeof e !== "object" && typeof e !== "function") {
            throw new TypeError("argument obj must be object");
          }

          var n = Object.getOwnPropertyDescriptor(e, t);

          if (!n) {
            throw new TypeError("must call property on owner object");
          }

          if (!n.configurable) {
            throw new TypeError("property must be configurable");
          }
        }

        var setprototypeof = Object.setPrototypeOf || ({
          __proto__: []
        } instanceof Array ? setProtoOf : mixinProperties);

        function setProtoOf(e, t) {
          e.__proto__ = t;
          return e;
        }

        function mixinProperties(e, t) {
          for (var r in t) {
            if (!Object.prototype.hasOwnProperty.call(e, r)) {
              e[r] = t[r];
            }
          }

          return e;
        }

        var require$$0 = {
          100: "Continue",
          101: "Switching Protocols",
          102: "Processing",
          103: "Early Hints",
          200: "OK",
          201: "Created",
          202: "Accepted",
          203: "Non-Authoritative Information",
          204: "No Content",
          205: "Reset Content",
          206: "Partial Content",
          207: "Multi-Status",
          208: "Already Reported",
          226: "IM Used",
          300: "Multiple Choices",
          301: "Moved Permanently",
          302: "Found",
          303: "See Other",
          304: "Not Modified",
          305: "Use Proxy",
          307: "Temporary Redirect",
          308: "Permanent Redirect",
          400: "Bad Request",
          401: "Unauthorized",
          402: "Payment Required",
          403: "Forbidden",
          404: "Not Found",
          405: "Method Not Allowed",
          406: "Not Acceptable",
          407: "Proxy Authentication Required",
          408: "Request Timeout",
          409: "Conflict",
          410: "Gone",
          411: "Length Required",
          412: "Precondition Failed",
          413: "Payload Too Large",
          414: "URI Too Long",
          415: "Unsupported Media Type",
          416: "Range Not Satisfiable",
          417: "Expectation Failed",
          418: "I'm a Teapot",
          421: "Misdirected Request",
          422: "Unprocessable Entity",
          423: "Locked",
          424: "Failed Dependency",
          425: "Too Early",
          426: "Upgrade Required",
          428: "Precondition Required",
          429: "Too Many Requests",
          431: "Request Header Fields Too Large",
          451: "Unavailable For Legal Reasons",
          500: "Internal Server Error",
          501: "Not Implemented",
          502: "Bad Gateway",
          503: "Service Unavailable",
          504: "Gateway Timeout",
          505: "HTTP Version Not Supported",
          506: "Variant Also Negotiates",
          507: "Insufficient Storage",
          508: "Loop Detected",
          509: "Bandwidth Limit Exceeded",
          510: "Not Extended",
          511: "Network Authentication Required"
        };
        var codes = require$$0;
        var statuses = status;
        status.message = codes;
        status.code = createMessageToStatusCodeMap(codes);
        status.codes = createStatusCodeList(codes);
        status.redirect = {
          300: true,
          301: true,
          302: true,
          303: true,
          305: true,
          307: true,
          308: true
        };
        status.empty = {
          204: true,
          205: true,
          304: true
        };
        status.retry = {
          502: true,
          503: true,
          504: true
        };

        function createMessageToStatusCodeMap(o) {
          var s = {};
          Object.keys(o).forEach(function e(t) {
            var r = o[t];
            var n = Number(t);
            s[r.toLowerCase()] = n;
          });
          return s;
        }

        function createStatusCodeList(e) {
          return Object.keys(e).map(function e(t) {
            return Number(t);
          });
        }

        function getStatusCode(e) {
          var t = e.toLowerCase();

          if (!Object.prototype.hasOwnProperty.call(status.code, t)) {
            throw new Error('invalid status message: "' + e + '"');
          }

          return status.code[t];
        }

        function getStatusMessage(e) {
          if (!Object.prototype.hasOwnProperty.call(status.message, e)) {
            throw new Error("invalid status code: " + e);
          }

          return status.message[e];
        }

        function status(e) {
          if (typeof e === "number") {
            return getStatusMessage(e);
          }

          if (typeof e !== "string") {
            throw new TypeError("code must be a number or string");
          }

          var t = parseInt(e, 10);

          if (!isNaN(t)) {
            return getStatusMessage(t);
          }

          return getStatusCode(e);
        }

        var inherits_browserExports = {};
        var inherits_browser = {
          get exports() {
            return inherits_browserExports;
          },

          set exports(e) {
            inherits_browserExports = e;
          }

        };

        if (typeof Object.create === "function") {
          inherits_browser.exports = function e(t, r) {
            if (r) {
              t.super_ = r;
              t.prototype = Object.create(r.prototype, {
                constructor: {
                  value: t,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              });
            }
          };
        } else {
          inherits_browser.exports = function e(t, r) {
            if (r) {
              t.super_ = r;

              var n = function () {};

              n.prototype = r.prototype;
              t.prototype = new n();
              t.prototype.constructor = t;
            }
          };
        }

        var toidentifier = toIdentifier;

        function toIdentifier(e) {
          return e.split(" ").map(function (e) {
            return e.slice(0, 1).toUpperCase() + e.slice(1);
          }).join("").replace(/[^ _0-9a-z]/gi, "");
        }

        (function (e) {
          browser("http-errors");
          var i = setprototypeof;
          var c = statuses;
          var r = inherits_browserExports;
          var a = toidentifier;
          e.exports = d;
          e.exports.HttpError = t();
          e.exports.isHttpError = n(e.exports.HttpError);
          o(e.exports, c.codes, e.exports.HttpError);

          function l(e) {
            return Number(String(e).charAt(0) + "00");
          }

          function d() {
            var e;
            var t;
            var r = 500;
            var n = {};

            for (var o = 0; o < arguments.length; o++) {
              var s = arguments[o];
              var i = typeof s;

              if (i === "object" && s instanceof Error) {
                e = s;
                r = e.status || e.statusCode || r;
              } else if (i === "number" && o === 0) {
                r = s;
              } else if (i === "string") {
                t = s;
              } else if (i === "object") {
                n = s;
              } else {
                throw new TypeError("argument #" + (o + 1) + " unsupported type " + i);
              }
            }

            if (typeof r !== "number" || !c.message[r] && (r < 400 || r >= 600)) {
              r = 500;
            }

            var a = d[r] || d[l(r)];

            if (!e) {
              e = a ? new a(t) : new Error(t || c.message[r]);
              Error.captureStackTrace(e, d);
            }

            if (!a || !(e instanceof a) || e.status !== r) {
              e.expose = r < 500;
              e.status = e.statusCode = r;
            }

            for (var u in n) {
              if (u !== "status" && u !== "statusCode") {
                e[u] = n[u];
              }
            }

            return e;
          }

          function t() {
            function e() {
              throw new TypeError("cannot construct abstract class");
            }

            r(e, Error);
            return e;
          }

          function u(e, t, n) {
            var o = p(t);

            function s(e) {
              var t = e != null ? e : c.message[n];
              var r = new Error(t);
              Error.captureStackTrace(r, s);
              i(r, s.prototype);
              Object.defineProperty(r, "message", {
                enumerable: true,
                configurable: true,
                value: t,
                writable: true
              });
              Object.defineProperty(r, "name", {
                enumerable: false,
                configurable: true,
                value: o,
                writable: true
              });
              return r;
            }

            r(s, e);
            h(s, o);
            s.prototype.status = n;
            s.prototype.statusCode = n;
            s.prototype.expose = true;
            return s;
          }

          function n(r) {
            return function e(t) {
              if (!t || typeof t !== "object") {
                return false;
              }

              if (t instanceof r) {
                return true;
              }

              return t instanceof Error && typeof t.expose === "boolean" && typeof t.statusCode === "number" && t.status === t.statusCode;
            };
          }

          function f(e, t, n) {
            var o = p(t);

            function s(e) {
              var t = e != null ? e : c.message[n];
              var r = new Error(t);
              Error.captureStackTrace(r, s);
              i(r, s.prototype);
              Object.defineProperty(r, "message", {
                enumerable: true,
                configurable: true,
                value: t,
                writable: true
              });
              Object.defineProperty(r, "name", {
                enumerable: false,
                configurable: true,
                value: o,
                writable: true
              });
              return r;
            }

            r(s, e);
            h(s, o);
            s.prototype.status = n;
            s.prototype.statusCode = n;
            s.prototype.expose = false;
            return s;
          }

          function h(e, t) {
            var r = Object.getOwnPropertyDescriptor(e, "name");

            if (r && r.configurable) {
              r.value = t;
              Object.defineProperty(e, "name", r);
            }
          }

          function o(o, e, s) {
            e.forEach(function e(t) {
              var r;
              var n = a(c.message[t]);

              switch (l(t)) {
                case 400:
                  r = u(s, n, t);
                  break;

                case 500:
                  r = f(s, n, t);
                  break;
              }

              if (r) {
                o[t] = r;
                o[n] = r;
              }
            });
          }

          function p(e) {
            return e.substr(-5) !== "Error" ? e + "Error" : e;
          }
        })(httpErrors);

        var createError = httpErrorsExports;

        const newError = (e = HttpStatusCode.BadRequest, t, r) => {
          return createError(e, t, {
            error: r
          });
        };

        const checkGameInfo = e => {
          if (!e.gameId || !e.apiKey) {
            throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_GAME_INFO);
          }
        };

        const checkGameId = e => {
          if (!e.gameId) {
            throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_GAME_INFO);
          }

          return e.gameId;
        };

        const checkUserData = e => {
          if (!e.user) {
            throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
          }
        };

        const applyMixins = (r, e) => {
          e.forEach(t => {
            Object.getOwnPropertyNames(t.prototype).forEach(e => {
              Object.defineProperty(r.prototype, e, Object.getOwnPropertyDescriptor(t.prototype, e) || Object.create(null));
            });
          });
        };

        const clientId = "game-store";

        const authRequestHeaderGame = e => {
          return {
            "x-game-id": "Bearer " + e.gameId,
            "x-api-key": "Bearer " + e.apiKey
          };
        };

        function e(e) {
          this.message = e;
        }

        e.prototype = new Error(), e.prototype.name = "InvalidCharacterError";

        var r = "undefined" != typeof window && window.atob && window.atob.bind(window) || function (t) {
          var r = String(t).replace(/=+$/, "");
          if (r.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");

          for (var n, o, s = 0, i = 0, a = ""; o = r.charAt(i++); ~o && (n = s % 4 ? 64 * n + o : o, s++ % 4) ? a += String.fromCharCode(255 & n >> (-2 * s & 6)) : 0) o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);

          return a;
        };

        function t(e) {
          var t = e.replace(/-/g, "+").replace(/_/g, "/");

          switch (t.length % 4) {
            case 0:
              break;

            case 2:
              t += "==";
              break;

            case 3:
              t += "=";
              break;

            default:
              throw "Illegal base64url string!";
          }

          try {
            return function (e) {
              return decodeURIComponent(r(e).replace(/(.)/g, function (e, t) {
                var r = t.charCodeAt(0).toString(16).toUpperCase();
                return r.length < 2 && (r = "0" + r), "%" + r;
              }));
            }(t);
          } catch (e) {
            return r(t);
          }
        }

        function n(e) {
          this.message = e;
        }

        function o(e, r) {
          if ("string" != typeof e) throw new n("Invalid token specified");
          var o = !0 === (r = r || {}).header ? 0 : 1;

          try {
            return JSON.parse(t(e.split(".")[o]));
          } catch (e) {
            throw new n("Invalid token specified: " + e.message);
          }
        }

        n.prototype = new Error(), n.prototype.name = "InvalidTokenError";
        const BASE_URL = "https://api.gamecenter.quest";
        const SSO_URL = "https://saas-api-dev.saworld.io";
        const params = new Proxy(new URLSearchParams(window.location.search), {
          get: (e, t) => e.get(t)
        });

        var __awaiter$8 = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        const axiosAuth = axios$1.create({
          baseURL: BASE_URL
        });
        const axiosBase = axios$1.create({
          baseURL: BASE_URL
        });
        const axiosSSO = axios$1.create({
          baseURL: SSO_URL
        });

        const refreshToken = l => __awaiter$8(void 0, void 0, void 0, function* () {
          var t, r, n, s;

          if (typeof window === "undefined") {
            return l;
          }

          const i = params.accessToken || "";
          const a = params.refreshToken || "";
          const e = params.guestInfo || "";

          if (i && i !== "null") {
            let e;

            try {
              e = o(i);
            } catch (e) {
              throw newError(HttpStatusCode.BadRequest, ERROR_MESSAGE.INVALID_ACCESS_TOKEN);
            }

            const u = e === null || e === void 0 ? void 0 : e.exp;

            if (u && Date.now() >= u * 1e3) {
              if (a) {
                try {
                  const c = yield requestRefreshUserToken(a);

                  if (c.status === 200 && ((r = (t = c === null || c === void 0 ? void 0 : c.data) === null || t === void 0 ? void 0 : t.data) === null || r === void 0 ? void 0 : r.accessToken)) {
                    l.headers.Authorization = `Bearer ${(s = (n = c === null || c === void 0 ? void 0 : c.data) === null || n === void 0 ? void 0 : n.data) === null || s === void 0 ? void 0 : s.accessToken}`;
                  }
                } catch (e) {
                  throw e;
                }
              } else {
                throw newError(HttpStatusCode.BadRequest, "Token expired. Please provide a refresh token.");
              }
            } else {
              l.headers.Authorization = `Bearer ${i}`;
            }

            return l;
          }

          l.headers["x-guest-auth"] = e;
          return l;
        });

        axiosAuth.interceptors.request.use(e => __awaiter$8(void 0, void 0, void 0, function* () {
          return yield refreshToken(e);
        }), e => {
          return Promise.reject(e);
        });
        axiosSSO.interceptors.request.use(e => __awaiter$8(void 0, void 0, void 0, function* () {
          return yield refreshToken(e);
        }), e => {
          return Promise.reject(e);
        });

        const requestAuthenticateUser = () => {
          const e = {
            method: "GET",
            url: "/api/v1/auth/account/validate"
          };
          return axiosAuth(e);
        };

        const requestRefreshUserToken = e => {
          const t = {
            method: "GET",
            url: "/api/v1/auth/account/refresh",
            data: {
              clientId: clientId,
              refreshToken: e.refreshToken
            }
          };
          return axiosAuth(t);
        };

        const requestAuthenticateGame = e => {
          const t = {
            method: "GET",
            url: "/api/v1/auth/game/validate",
            headers: authRequestHeaderGame(e)
          };
          return axiosBase(t);
        };

        var __awaiter$7 = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        class Auth {
          constructor() {}

          authenticateUser() {
            var r, n;
            return __awaiter$7(this, void 0, void 0, function* () {
              try {
                const e = yield requestAuthenticateUser();

                if (e.status !== 200) {
                  throw newError(e.status || HttpStatusCode.Unauthorized, ((r = e.data) === null || r === void 0 ? void 0 : r.message) || ERROR_MESSAGE.AUTH_USER);
                }

                const t = e.data;
                return {
                  user: (n = t === null || t === void 0 ? void 0 : t.data) === null || n === void 0 ? void 0 : n.data
                };
              } catch (e) {
                throw e;
              }
            });
          }

          authenticateGame(t) {
            var r;
            return __awaiter$7(this, void 0, void 0, function* () {
              try {
                const e = yield requestAuthenticateGame(t);

                if (e.status !== 200) {
                  throw newError(e.status || HttpStatusCode.Unauthorized, ((r = e.data) === null || r === void 0 ? void 0 : r.message) || ERROR_MESSAGE.AUTH_GAME);
                }
              } catch (e) {
                throw e;
              }
            });
          }

        }

        const requestCreateMatch = e => {
          const t = {
            method: "POST",
            url: `api/v1/gamecenter/users/plays/new`,
            headers: authRequestHeaderGame(e)
          };
          return axiosAuth(t);
        };

        const requestJoinMatch = e => {
          const t = {
            method: "POST",
            url: `api/v1/gamecenter/users/plays/${e.matchId}/join`,
            headers: authRequestHeaderGame(e)
          };
          return axiosAuth(t);
        };

        const requestCompleteMatch = e => {
          const t = {
            method: "PUT",
            url: `api/v1/gamecenter/users/plays/${e.matchId}`,
            headers: authRequestHeaderGame(e),
            data: {
              result: e.result
            }
          };
          return axiosAuth(t);
        };

        const requestGetMatchById = e => {
          const t = {
            method: "GET",
            url: `api/v1/gamecenter/users/plays/${e.matchId}`,
            headers: authRequestHeaderGame(e)
          };
          return axiosAuth(t);
        };

        const requestGetMatchAll = e => {
          const {
            paging: t,
            filter: r,
            search: n,
            sort: o
          } = e;
          const s = (t === null || t === void 0 ? void 0 : t.limit) || 10;
          const i = (t === null || t === void 0 ? void 0 : t.offset) || 1;
          const a = {
            method: "POST",
            url: `api/v1/gamecenter/users/plays?limit=${s}&offset=${i}`,
            headers: authRequestHeaderGame(e),
            data: {
              filter: r,
              search: n,
              sort: o
            }
          };
          return axiosAuth(a);
        };

        var __awaiter$6 = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        class GameMatch {
          constructor(e, t) {
            this.gameId = "";
            this.apiKey = "";
            this.gameId = e;
            this.apiKey = t;
          }

          startMatch() {
            var o, s, i;
            return __awaiter$6(this, void 0, void 0, function* () {
              checkGameInfo(this);

              try {
                const {
                  gameId: e,
                  apiKey: t
                } = this;
                const r = yield requestCreateMatch({
                  gameId: e,
                  apiKey: t
                });

                if (r.status !== 200) {
                  throw newError(r.status, (o = r.data) === null || o === void 0 ? void 0 : o.message);
                }

                const n = (i = (s = r.data) === null || s === void 0 ? void 0 : s.data) === null || i === void 0 ? void 0 : i.data;
                return n;
              } catch (e) {
                throw e;
              }
            });
          }

          joinMatch(o) {
            var s, i, a;
            return __awaiter$6(this, void 0, void 0, function* () {
              checkGameInfo(this);

              try {
                const {
                  gameId: e,
                  apiKey: t
                } = this;
                const r = yield requestJoinMatch({
                  gameId: e,
                  apiKey: t,
                  matchId: o
                });

                if (r.status !== 200) {
                  throw newError(r.status, (s = r.data) === null || s === void 0 ? void 0 : s.message);
                }

                const n = (a = (i = r.data) === null || i === void 0 ? void 0 : i.data) === null || a === void 0 ? void 0 : a.data;
                return n;
              } catch (e) {
                throw e;
              }
            });
          }

          completeMatch(o, s) {
            var i, a, u;
            return __awaiter$6(this, void 0, void 0, function* () {
              checkGameInfo(this);

              try {
                const {
                  gameId: e,
                  apiKey: t
                } = this;
                const r = yield requestCompleteMatch({
                  gameId: e,
                  apiKey: t,
                  matchId: o,
                  result: s
                });

                if (r.status !== 200) {
                  throw newError(r.status, (i = r.data) === null || i === void 0 ? void 0 : i.message);
                }

                const n = (u = (a = r.data) === null || a === void 0 ? void 0 : a.data) === null || u === void 0 ? void 0 : u.data;
                return n;
              } catch (e) {
                throw e;
              }
            });
          }

          getMatchHistoryById(o) {
            var s, i, a;
            return __awaiter$6(this, void 0, void 0, function* () {
              checkGameInfo(this);

              try {
                const {
                  gameId: e,
                  apiKey: t
                } = this;
                const r = yield requestGetMatchById({
                  gameId: e,
                  apiKey: t,
                  matchId: o
                });

                if (r.status !== 200) {
                  throw newError(r.status, (s = r.data) === null || s === void 0 ? void 0 : s.message);
                }

                const n = (a = (i = r.data) === null || i === void 0 ? void 0 : i.data) === null || a === void 0 ? void 0 : a.data;
                return n;
              } catch (e) {
                throw e;
              }
            });
          }

          getAllMatchHistory(o) {
            var s, i, a;
            return __awaiter$6(this, void 0, void 0, function* () {
              checkGameInfo(this);

              try {
                const {
                  gameId: e,
                  apiKey: t
                } = this;
                const r = yield requestGetMatchAll(Object.assign({
                  gameId: e,
                  apiKey: t
                }, o));

                if (r.status !== 200) {
                  throw newError(r.status, (s = r.data) === null || s === void 0 ? void 0 : s.message);
                }

                const n = (a = (i = r.data) === null || i === void 0 ? void 0 : i.data) === null || a === void 0 ? void 0 : a.data;
                return n;
              } catch (e) {
                throw e;
              }
            });
          }

        }

        const requestGetFriendList = () => {
          const e = {
            method: "POST",
            url: "/saas/api/v1/friend/get-list-friend"
          };
          return axiosSSO(e);
        };

        const requestSendFriendInvitation = e => {
          const t = {
            method: "POST",
            url: `/saas/api/v1/friend/send-friend-invitation?saIdReceiver=${e.friendId}`
          };
          return axiosSSO(t);
        };

        const requestResponseFriendInvitation = e => {
          const t = {
            method: "POST",
            url: `saas/api/v1/friend/respond-friend-invitation?response=${e.response}&saIdSender=${e.friendId}`
          };
          return axiosSSO(t);
        };

        const requestGetListFriendInvitation = () => {
          const e = {
            method: "POST",
            url: `/saas/api/v1/friend/get-list-friend-invitation`
          };
          return axiosSSO(e);
        };

        const requestSendNotification = e => {
          const t = {
            method: "POST",
            url: `/api/v1/gamecenter/users/plays/invite`,
            data: {
              game: e.game,
              gameUrl: e.gameUrl,
              matchId: e.matchId,
              notiType: "INVITE_GAME",
              saIdInvite: e.saId,
              saIdReceive: e.friendId
            }
          };
          return axiosAuth(t);
        };

        var __awaiter$5 = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        var FRIEND_RESPONSE;

        (function (e) {
          e["CONFIRM"] = "CONFIRM";
          e["DENY"] = "DENY";
        })(FRIEND_RESPONSE || (FRIEND_RESPONSE = {}));

        class UserFriend {
          constructor(e) {
            this.user = null;
            this.user = e;
          }

          getFriendList() {
            var t, r;
            return __awaiter$5(this, void 0, void 0, function* () {
              checkUserData(this);

              try {
                const e = yield requestGetFriendList();

                if (e.status !== 200) {
                  throw newError(e.status, (t = e.data) === null || t === void 0 ? void 0 : t.message);
                }

                return (r = e === null || e === void 0 ? void 0 : e.data) === null || r === void 0 ? void 0 : r.data;
              } catch (e) {
                throw e;
              }
            });
          }

          sendFriendInvitation(t) {
            var r, n;
            return __awaiter$5(this, void 0, void 0, function* () {
              checkUserData(this);

              try {
                const e = yield requestSendFriendInvitation({
                  friendId: t
                });

                if (e.status !== 200) {
                  throw newError(e.status, (r = e.data) === null || r === void 0 ? void 0 : r.message);
                }

                return (n = e === null || e === void 0 ? void 0 : e.data) === null || n === void 0 ? void 0 : n.status;
              } catch (e) {
                throw e;
              }
            });
          }

          responseFriendInvitation(t, r) {
            var n, o;
            return __awaiter$5(this, void 0, void 0, function* () {
              checkUserData(this);

              try {
                const e = yield requestResponseFriendInvitation({
                  friendId: t,
                  response: r
                });

                if (e.status !== 200) {
                  throw newError(e.status, (n = e.data) === null || n === void 0 ? void 0 : n.message);
                }

                return (o = e === null || e === void 0 ? void 0 : e.data) === null || o === void 0 ? void 0 : o.status;
              } catch (e) {
                throw e;
              }
            });
          }

          getFriendInvitationList() {
            var t, r;
            return __awaiter$5(this, void 0, void 0, function* () {
              checkUserData(this);

              try {
                const e = yield requestGetListFriendInvitation();

                if (e.status !== 200) {
                  throw newError(e.status, (t = e.data) === null || t === void 0 ? void 0 : t.message);
                }

                return (r = e === null || e === void 0 ? void 0 : e.data) === null || r === void 0 ? void 0 : r.data;
              } catch (e) {
                throw e;
              }
            });
          }

          inviteGame(t, r, n, o) {
            var s, i, a, u;
            return __awaiter$5(this, void 0, void 0, function* () {
              checkUserData(this);

              try {
                const e = yield requestSendNotification({
                  game: t,
                  gameUrl: r,
                  saId: (i = (s = this.user) === null || s === void 0 ? void 0 : s.activeCitizen) === null || i === void 0 ? void 0 : i.saId,
                  friendId: o,
                  matchId: n
                });

                if (e.status !== 200) {
                  throw newError(e.status, (a = e.data) === null || a === void 0 ? void 0 : a.message);
                }

                return (u = e === null || e === void 0 ? void 0 : e.data) === null || u === void 0 ? void 0 : u.data;
              } catch (e) {
                throw e;
              }
            });
          }

        }

        applyMixins(UserFriend, [Auth]);

        const requestUserBalance = () => {
          const e = {
            method: "GET",
            url: `/api/v1/gamecenter/users/balance`
          };
          return axiosAuth(e);
        };

        const requestUserTicketBalance = () => {
          const e = {
            method: "GET",
            url: `/api/v1/gamecenter/users/ticket`
          };
          return axiosAuth(e);
        };

        const requestUserQuestProcess = () => {
          const e = {
            method: "GET",
            url: `/api/v1/gamecenter/users/process`
          };
          return axiosAuth(e);
        };

        const requestUserClaimQuest = e => {
          const {
            questId: t
          } = e;
          const r = {
            method: "GET",
            url: `/api/v1/gamecenter/users/process/${t}/claim`
          };
          return axiosAuth(r);
        };

        var __awaiter$4 = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        class UserBalance {
          constructor(e) {
            this.user = null;
            this.user = e;
          }

          getTicket() {
            var t, r, n;
            return __awaiter$4(this, void 0, void 0, function* () {
              try {
                const e = yield requestUserTicketBalance();

                if (e.status !== 200) {
                  throw newError(e.status, (t = e.data) === null || t === void 0 ? void 0 : t.message);
                }

                return (n = (r = e === null || e === void 0 ? void 0 : e.data) === null || r === void 0 ? void 0 : r.data) === null || n === void 0 ? void 0 : n.data;
              } catch (e) {
                throw e;
              }
            });
          }

          getActionPoint() {
            var t, r, n, o;
            return __awaiter$4(this, void 0, void 0, function* () {
              try {
                const e = yield requestUserBalance();

                if (e.status !== 200) {
                  throw newError(e.status, (t = e.data) === null || t === void 0 ? void 0 : t.message);
                }

                return (o = (n = (r = e === null || e === void 0 ? void 0 : e.data) === null || r === void 0 ? void 0 : r.data) === null || n === void 0 ? void 0 : n.data) === null || o === void 0 ? void 0 : o.actionPoint;
              } catch (e) {
                throw e;
              }
            });
          }

        }

        applyMixins(UserBalance, [Auth]);

        class UserAccount {
          constructor(e) {
            this.user = null;
            this.user = e;
          }

          getSub() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.account.sub;
          }

          getEmail() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.account.email;
          }

          getName() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.account.name;
          }

          getUsername() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.account.username;
          }

          getGivenName() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.account.givenName;
          }

          getFamilyName() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.account.familyName;
          }

        }

        applyMixins(UserAccount, [Auth]);

        var __awaiter$3 = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        class UserQuest {
          constructor(e) {
            this.user = null;
            this.user = e;
          }

          getProcess() {
            var r, n, o;
            return __awaiter$3(this, void 0, void 0, function* () {
              try {
                const e = yield requestUserQuestProcess();

                if (e.status !== 200) {
                  throw newError(e.status, (r = e.data) === null || r === void 0 ? void 0 : r.message);
                }

                const t = (o = (n = e.data) === null || n === void 0 ? void 0 : n.data) === null || o === void 0 ? void 0 : o.data;
                return t;
              } catch (e) {
                throw e;
              }
            });
          }

          claim(t) {
            var r, n;
            return __awaiter$3(this, void 0, void 0, function* () {
              try {
                const e = yield requestUserClaimQuest({
                  questId: t
                });

                if (e.status !== 200) {
                  throw newError(e.status, (r = e.data) === null || r === void 0 ? void 0 : r.message);
                }

                return (n = e.data) === null || n === void 0 ? void 0 : n.status;
              } catch (e) {
                throw e;
              }
            });
          }

        }

        applyMixins(UserQuest, [Auth]);

        class UserCitizen {
          constructor(e) {
            this.user = null;
            this.user = e;
          }

          getSaId() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.activeCitizen.saId;
          }

          getCitizenName() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.activeCitizen.name;
          }

          getCitizenWallet() {
            if (!this.user) {
              throw newError(HttpStatusCode.NotFound, ERROR_MESSAGE.NOT_FOUND_USER_INFO);
            }

            return this.user.activeCitizen.wallet;
          }

        }

        applyMixins(UserCitizen, [Auth]);

        class User {
          constructor(e) {
            this.account = undefined;
            this.citizen = undefined;
            this.balance = undefined;
            this.quest = undefined;
            this.friend = undefined;
            this.account = new UserAccount(e);
            this.citizen = new UserCitizen(e);
            this.balance = new UserBalance(e);
            this.quest = new UserQuest(e);
            this.friend = new UserFriend(e);
          }

        }

        applyMixins(User, [Auth]);

        const requestGetListQuest = e => {
          const {
            paging: t,
            filter: r,
            search: n,
            sort: o
          } = e;
          const s = (t === null || t === void 0 ? void 0 : t.limit) || 10;
          const i = (t === null || t === void 0 ? void 0 : t.offset) || 1;
          const a = [{
            key: "gameId",
            option: [e.gameId]
          }];
          const u = {
            method: "POST",
            url: `/api/v1/gamecenter/quests?limit=${s}&offset=${i}`,
            data: {
              filter: r ? [...r, ...a] : a,
              search: n,
              sort: o
            }
          };
          return axiosBase(u);
        };

        var __awaiter$2 = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        class Quest {
          constructor(e) {
            this.gameId = undefined;
            this.gameId = e;
          }

          getList(n) {
            var o;
            return __awaiter$2(this, void 0, void 0, function* () {
              const e = checkGameId(this);

              try {
                const t = yield requestGetListQuest(Object.assign(Object.assign({}, n), {
                  gameId: e
                }));

                if (t.status !== 200) {
                  throw new Error();
                }

                const r = (o = t.data) === null || o === void 0 ? void 0 : o.data;
                return r;
              } catch (e) {
                throw newError(500, ERROR_MESSAGE.LIST_QUEST);
              }
            });
          }

        }

        const requestGetListAchievement = e => {
          const {
            paging: t,
            filter: r,
            search: n,
            sort: o
          } = e;
          const s = (t === null || t === void 0 ? void 0 : t.limit) || 10;
          const i = (t === null || t === void 0 ? void 0 : t.offset) || 1;
          const a = [{
            key: "gameId",
            option: [e.gameId]
          }, {
            key: "achievement",
            option: ["true"]
          }];
          const u = {
            method: "POST",
            url: `/api/v1/gamecenter/quests?limit=${s}&offset=${i}`,
            data: {
              filter: r ? [...r, ...a] : a,
              search: n,
              sort: o
            }
          };
          return axiosBase(u);
        };

        var __awaiter$1 = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        class Achievement {
          constructor(e) {
            this.gameId = undefined;
            this.gameId = e;
          }

          getList(n) {
            var o;
            return __awaiter$1(this, void 0, void 0, function* () {
              const e = checkGameId(this);

              try {
                const t = yield requestGetListAchievement(Object.assign(Object.assign({}, n), {
                  gameId: e
                }));

                if (t.status !== 200) {
                  throw new Error();
                }

                const r = (o = t.data) === null || o === void 0 ? void 0 : o.data;
                return r;
              } catch (e) {
                throw newError(500, ERROR_MESSAGE.LIST_ACHIEVEMENT);
              }
            });
          }

        }

        var __awaiter = undefined && undefined.__awaiter || function (e, i, r, a) {
          function u(t) {
            return t instanceof r ? t : new r(function (e) {
              e(t);
            });
          }

          return new (r || (r = Promise))(function (t, r) {
            function n(e) {
              try {
                s(a.next(e));
              } catch (e) {
                r(e);
              }
            }

            function o(e) {
              try {
                s(a["throw"](e));
              } catch (e) {
                r(e);
              }
            }

            function s(e) {
              e.done ? t(e.value) : u(e.value).then(n, o);
            }

            s((a = a.apply(e, i || [])).next());
          });
        };

        class GameClient {
          constructor(e, t) {
            this.user = undefined;
            this.match = undefined;
            this.quest = undefined;
            this.achievement = undefined;
            this.gameId = e;
            this.apiKey = t;
          }

          initAsync() {
            return __awaiter(this, void 0, void 0, function* () {
              checkGameInfo(this);
              const {
                gameId: e,
                apiKey: t
              } = this;
              yield this.authenticateGame({
                gameId: e,
                apiKey: t
              });
              const {
                user: r
              } = yield this.authenticateUser();
              this.user = new User(r);
              this.match = new GameMatch(this.gameId, this.apiKey);
              this.quest = new Quest(this.gameId);
              this.achievement = new Achievement(this.gameId);
            });
          }

        }

        applyMixins(GameClient, [Auth, GameMatch]);
        module.exports = GameClient; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=55f729b8459fa248cc3642e5844ed31d82d13b56.js.map