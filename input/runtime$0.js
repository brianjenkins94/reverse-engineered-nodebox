var vF = (p, p2, p3) => p2 in p ? Object.defineProperty(p, p2, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: p3
}) : p[p2] = p3;
var vF2 = (p4, p5) => () => {
  if (p4) {
    p5 = p4(p4 = 0);
  }
  return p5;
};
var vF3 = (p6, p7) => () => {
  if (!p7) {
    p6((p7 = {
      exports: {}
    }).exports, p7);
  }
  return p7.exports;
};
var vF4 = (p8, p9) => {
  for (var v7 in p9) {
    Object.defineProperty(p8, v7, {
      get: p9[v7],
      enumerable: true
    });
  }
};
var vF5 = (p10, p11, p12, p13) => {
  if (p11 && typeof p11 == "object" || typeof p11 == "function") {
    for (let v8 of Object.getOwnPropertyNames(p11)) {
      if (!Object.prototype.hasOwnProperty.call(p10, v8) && v8 !== p12) {
        Object.defineProperty(p10, v8, {
          get: () => p11[v8],
          enumerable: !(p13 = Object.getOwnPropertyDescriptor(p11, v8)) || p13.enumerable
        });
      }
    }
  }
  return p10;
};
var vF6 = (p14, p15, p16) => {
  vF5(p14, p15, "default");
  return p16 && vF5(p16, p15, "default");
};
var vF7 = (p17, p18, p19) => {
  p19 = p17 != null ? Object.create(Object.getPrototypeOf(p17)) : {};
  return vF5(p18 || !p17 || !p17.__esModule ? Object.defineProperty(p19, "default", {
    value: p17,
    enumerable: true
  }) : p19, p17);
};
var vF8 = p20 => vF5(Object.defineProperty({}, "__esModule", {
  value: true
}), p20);
var vF9 = (p21, p22, p23) => {
  vF(p21, typeof p22 != "symbol" ? p22 + "" : p22, p23);
  return p23;
};
var vVF3 = vF3((p24, p25) => {
  p25.exports = function () {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") {
      return false;
    }
    if (typeof Symbol.iterator == "symbol") {
      return true;
    }
    var v9 = {};
    var vSymbol = Symbol("test");
    var vObject = Object(vSymbol);
    if (typeof vSymbol == "string" || Object.prototype.toString.call(vSymbol) !== "[object Symbol]" || Object.prototype.toString.call(vObject) !== "[object Symbol]") {
      return false;
    }
    var v10 = 42;
    v9[vSymbol] = v10;
    for (vSymbol in v9) {
      return false;
    }
    if (typeof Object.keys == "function" && Object.keys(v9).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(v9).length !== 0) {
      return false;
    }
    var v11 = Object.getOwnPropertySymbols(v9);
    if (v11.length !== 1 || v11[0] !== vSymbol || !Object.prototype.propertyIsEnumerable.call(v9, vSymbol)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var v12 = Object.getOwnPropertyDescriptor(v9, vSymbol);
      if (v12.value !== v10 || v12.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
});
var vVF32 = vF3((p26, p27) => {
  var vVVF3 = vVF3();
  p27.exports = function () {
    return vVVF3() && !!Symbol.toStringTag;
  };
});
var vVF33 = vF3((p28, p29) => {
  var v13 = typeof Symbol !== "undefined" && Symbol;
  var vVVF32 = vVF3();
  p29.exports = function () {
    if (typeof v13 != "function" || typeof Symbol != "function" || typeof v13("foo") != "symbol" || typeof Symbol("bar") != "symbol") {
      return false;
    } else {
      return vVVF32();
    }
  };
});
var vVF34 = vF3((p30, p31) => {
  var v14 = "Function.prototype.bind called on incompatible ";
  var v15 = Array.prototype.slice;
  var v16 = Object.prototype.toString;
  var v17 = "[object Function]";
  p31.exports = function (p32) {
    var vThis = this;
    if (typeof vThis != "function" || v16.call(vThis) !== v17) {
      throw new TypeError(v14 + vThis);
    }
    var v18 = v15.call(arguments, 1);
    var v19;
    function vF10() {
      if (this instanceof v19) {
        var v20 = vThis.apply(this, v18.concat(v15.call(arguments)));
        if (Object(v20) === v20) {
          return v20;
        } else {
          return this;
        }
      } else {
        return vThis.apply(p32, v18.concat(v15.call(arguments)));
      }
    }
    for (var v21 = Math.max(0, vThis.length - v18.length), v22 = [], v23 = 0; v23 < v21; v23++) {
      v22.push("$" + v23);
    }
    v19 = Function("binder", "return function (" + v22.join(",") + "){ return binder.apply(this,arguments); }")(vF10);
    if (vThis.prototype) {
      function f() {}
      f.prototype = vThis.prototype;
      v19.prototype = new f();
      f.prototype = null;
    }
    return v19;
  };
});
var vVF35 = vF3((p33, p34) => {
  var vVVF34 = vVF34();
  p34.exports = Function.prototype.bind || vVVF34;
});
var vVF36 = vF3((p35, p36) => {
  var vVVF35 = vVF35();
  p36.exports = vVVF35.call(Function.call, Object.prototype.hasOwnProperty);
});
var vVF37 = vF3((p37, p38) => {
  var v24;
  var vSyntaxError = SyntaxError;
  var vFunction = Function;
  var vTypeError = TypeError;
  function f2(p39) {
    try {
      return vFunction("\"use strict\"; return (" + p39 + ").constructor;")();
    } catch {}
  }
  var v25 = Object.getOwnPropertyDescriptor;
  if (v25) {
    try {
      v25({}, "");
    } catch {
      v25 = null;
    }
  }
  function f3() {
    throw new vTypeError();
  }
  var v26 = v25 ? function () {
    try {
      arguments.callee;
      return f3;
    } catch {
      try {
        return v25(arguments, "callee").get;
      } catch {
        return f3;
      }
    }
  }() : f3;
  var vVVF33 = vVF33()();
  var v27 = Object.getPrototypeOf || function (p40) {
    return p40.__proto__;
  };
  var v28 = {};
  var v29 = typeof Uint8Array === "undefined" ? v24 : v27(Uint8Array);
  var v30 = {
    "%AggregateError%": typeof AggregateError === "undefined" ? v24 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? v24 : ArrayBuffer,
    "%ArrayIteratorPrototype%": vVVF33 ? v27([][Symbol.iterator]()) : v24,
    "%AsyncFromSyncIteratorPrototype%": v24,
    "%AsyncFunction%": v28,
    "%AsyncGenerator%": v28,
    "%AsyncGeneratorFunction%": v28,
    "%AsyncIteratorPrototype%": v28,
    "%Atomics%": typeof Atomics === "undefined" ? v24 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? v24 : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? v24 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? v24 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? v24 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? v24 : FinalizationRegistry,
    "%Function%": vFunction,
    "%GeneratorFunction%": v28,
    "%Int8Array%": typeof Int8Array === "undefined" ? v24 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? v24 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? v24 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": vVVF33 ? v27(v27([][Symbol.iterator]())) : v24,
    "%JSON%": typeof JSON == "object" ? JSON : v24,
    "%Map%": typeof Map === "undefined" ? v24 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !vVVF33 ? v24 : v27(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? v24 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? v24 : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? v24 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? v24 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !vVVF33 ? v24 : v27(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? v24 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": vVVF33 ? v27(""[Symbol.iterator]()) : v24,
    "%Symbol%": vVVF33 ? Symbol : v24,
    "%SyntaxError%": vSyntaxError,
    "%ThrowTypeError%": v26,
    "%TypedArray%": v29,
    "%TypeError%": vTypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? v24 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? v24 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? v24 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? v24 : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? v24 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? v24 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? v24 : WeakSet
  };
  var v_0x440ea5 = function f4(p41) {
    var v31;
    if (p41 === "%AsyncFunction%") {
      v31 = f2("async function () {}");
    } else if (p41 === "%GeneratorFunction%") {
      v31 = f2("function* () {}");
    } else if (p41 === "%AsyncGeneratorFunction%") {
      v31 = f2("async function* () {}");
    } else if (p41 === "%AsyncGenerator%") {
      var vF42 = f4("%AsyncGeneratorFunction%");
      if (vF42) {
        v31 = vF42.prototype;
      }
    } else if (p41 === "%AsyncIteratorPrototype%") {
      var vF43 = f4("%AsyncGenerator%");
      if (vF43) {
        v31 = v27(vF43.prototype);
      }
    }
    v30[p41] = v31;
    return v31;
  };
  var v32 = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var vVVF352 = vVF35();
  var vVVF36 = vVF36();
  var v33 = vVVF352.call(Function.call, Array.prototype.concat);
  var v34 = vVVF352.call(Function.apply, Array.prototype.splice);
  var v35 = vVVF352.call(Function.call, String.prototype.replace);
  var v36 = vVVF352.call(Function.call, String.prototype.slice);
  var v37 = vVVF352.call(Function.call, RegExp.prototype.exec);
  var v38 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var v39 = /\\(\\)?/g;
  function f5(p42) {
    var vV36 = v36(p42, 0, 1);
    var vV362 = v36(p42, -1);
    if (vV36 === "%" && vV362 !== "%") {
      throw new vSyntaxError("invalid intrinsic syntax, expected closing `%`");
    }
    if (vV362 === "%" && vV36 !== "%") {
      throw new vSyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var v40 = [];
    v35(p42, v38, function (p43, p44, p45, p46) {
      v40[v40.length] = p45 ? v35(p46, v39, "$1") : p44 || p43;
    });
    return v40;
  }
  function f6(p47, p48) {
    var vP47 = p47;
    var v41;
    if (vVVF36(v32, vP47)) {
      v41 = v32[vP47];
      vP47 = "%" + v41[0] + "%";
    }
    if (vVVF36(v30, vP47)) {
      var v42 = v30[vP47];
      if (v42 === v28) {
        v42 = v_0x440ea5(vP47);
      }
      if (typeof v42 === "undefined" && !p48) {
        throw new vTypeError("intrinsic " + p47 + " exists, but is not available. Please file an issue!");
      }
      return {
        alias: v41,
        name: vP47,
        value: v42
      };
    }
    throw new vSyntaxError("intrinsic " + p47 + " does not exist!");
  }
  p38.exports = function (p49, p50) {
    if (typeof p49 != "string" || p49.length === 0) {
      throw new vTypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof p50 != "boolean") {
      throw new vTypeError("\"allowMissing\" argument must be a boolean");
    }
    if (v37(/^%?[^%]*%?$/, p49) === null) {
      throw new vSyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var vF52 = f5(p49);
    var v43 = vF52.length > 0 ? vF52[0] : "";
    var vF62 = f6("%" + v43 + "%", p50);
    var v44 = vF62.name;
    var v45 = vF62.value;
    var v46 = false;
    var v47 = vF62.alias;
    if (v47) {
      v43 = v47[0];
      v34(vF52, v33([0, 1], v47));
    }
    for (var v48 = 1, v49 = true; v48 < vF52.length; v48 += 1) {
      var v50 = vF52[v48];
      var vV363 = v36(v50, 0, 1);
      var vV364 = v36(v50, -1);
      if ((vV363 === "\"" || vV363 === "'" || vV363 === "`" || vV364 === "\"" || vV364 === "'" || vV364 === "`") && vV363 !== vV364) {
        throw new vSyntaxError("property names with quotes must have matching quotes");
      }
      if (v50 === "constructor" || !v49) {
        v46 = true;
      }
      v43 += "." + v50;
      v44 = "%" + v43 + "%";
      if (vVVF36(v30, v44)) {
        v45 = v30[v44];
      } else if (v45 != null) {
        if (!(v50 in v45)) {
          if (!p50) {
            throw new vTypeError("base intrinsic for " + p49 + " exists, but the property is not available.");
          }
          return;
        }
        if (v25 && v48 + 1 >= vF52.length) {
          var vV25 = v25(v45, v50);
          v49 = !!vV25;
          if (v49 && "get" in vV25 && !("originalValue" in vV25.get)) {
            v45 = vV25.get;
          } else {
            v45 = v45[v50];
          }
        } else {
          v49 = vVVF36(v45, v50);
          v45 = v45[v50];
        }
        if (v49 && !v46) {
          v30[v44] = v45;
        }
      }
    }
    return v45;
  };
});
var vVF38 = vF3((p51, p52) => {
  var vVVF353 = vVF35();
  var vVVF37 = vVF37();
  var vVVVF37 = vVVF37("%Function.prototype.apply%");
  var vVVVF372 = vVVF37("%Function.prototype.call%");
  var v51 = vVVF37("%Reflect.apply%", true) || vVVF353.call(vVVVF372, vVVVF37);
  var vVVVF373 = vVVF37("%Object.getOwnPropertyDescriptor%", true);
  var vVVVF374 = vVVF37("%Object.defineProperty%", true);
  var vVVVF375 = vVVF37("%Math.max%");
  if (vVVVF374) {
    try {
      vVVVF374({}, "a", {
        value: 1
      });
    } catch {
      vVVVF374 = null;
    }
  }
  p52.exports = function (p53) {
    var vV51 = v51(vVVF353, vVVVF372, arguments);
    if (vVVVF373 && vVVVF374) {
      var vVVVVF373 = vVVVF373(vV51, "length");
      if (vVVVVF373.configurable) {
        vVVVF374(vV51, "length", {
          value: 1 + vVVVF375(0, p53.length - (arguments.length - 1))
        });
      }
    }
    return vV51;
  };
  function f7() {
    return v51(vVVF353, vVVVF37, arguments);
  }
  if (vVVVF374) {
    vVVVF374(p52.exports, "apply", {
      value: f7
    });
  } else {
    p52.exports.apply = f7;
  }
});
var vVF39 = vF3((p54, p55) => {
  var vVVF372 = vVF37();
  var vVVF38 = vVF38();
  var vVVVF38 = vVVF38(vVVF372("String.prototype.indexOf"));
  p55.exports = function (p56, p57) {
    var vVVVF3722 = vVVF372(p56, !!p57);
    if (typeof vVVVF3722 == "function" && vVVVF38(p56, ".prototype.") > -1) {
      return vVVF38(vVVVF3722);
    } else {
      return vVVVF3722;
    }
  };
});
var vVF310 = vF3((p58, p59) => {
  var vVVF322 = vVF32()();
  var vVVF39 = vVF39();
  var vVVVF39 = vVVF39("Object.prototype.toString");
  function f8(p60) {
    if (vVVF322 && p60 && typeof p60 == "object" && Symbol.toStringTag in p60) {
      return false;
    } else {
      return vVVVF39(p60) === "[object Arguments]";
    }
  }
  function f9(p61) {
    if (f8(p61)) {
      return true;
    } else {
      return p61 !== null && typeof p61 == "object" && typeof p61.length == "number" && p61.length >= 0 && vVVVF39(p61) !== "[object Array]" && vVVVF39(p61.callee) === "[object Function]";
    }
  }
  var vF11 = function () {
    return f8(arguments);
  }();
  f8.isLegacyArguments = f9;
  p59.exports = vF11 ? f8 : f9;
});
var vVF311 = vF3((p62, p63) => {
  var v52 = Object.prototype.toString;
  var v53 = Function.prototype.toString;
  var v54 = /^\s*(?:function)?\*/;
  var vVVF323 = vVF32()();
  var v55 = Object.getPrototypeOf;
  function f10() {
    if (!vVVF323) {
      return false;
    }
    try {
      return Function("return function*() {}")();
    } catch {}
  }
  var v56;
  p63.exports = function (p64) {
    if (typeof p64 != "function") {
      return false;
    }
    if (v54.test(v53.call(p64))) {
      return true;
    }
    if (!vVVF323) {
      var v57 = v52.call(p64);
      return v57 === "[object GeneratorFunction]";
    }
    if (!v55) {
      return false;
    }
    if (typeof v56 === "undefined") {
      var vF102 = f10();
      v56 = vF102 ? v55(vF102) : false;
    }
    return v55(p64) === v56;
  };
});
var vVF312 = vF3((p65, p66) => {
  var v58 = Function.prototype.toString;
  var v59 = typeof Reflect == "object" && Reflect !== null && Reflect.apply;
  var v60;
  var v61;
  if (typeof v59 == "function" && typeof Object.defineProperty == "function") {
    try {
      v60 = Object.defineProperty({}, "length", {
        get: function () {
          throw v61;
        }
      });
      v61 = {};
      v59(function () {
        throw 42;
      }, null, v60);
    } catch (_0x6401ce) {
      if (_0x6401ce !== v61) {
        v59 = null;
      }
    }
  } else {
    v59 = null;
  }
  var v62 = /^\s*class\b/;
  function f11(p67) {
    try {
      var v63 = v58.call(p67);
      return v62.test(v63);
    } catch {
      return false;
    }
  }
  function f12(p68) {
    try {
      if (f11(p68)) {
        return false;
      } else {
        v58.call(p68);
        return true;
      }
    } catch {
      return false;
    }
  }
  var v64 = Object.prototype.toString;
  var v65 = "[object Object]";
  var v66 = "[object Function]";
  var v67 = "[object GeneratorFunction]";
  var v68 = "[object HTMLAllCollection]";
  var v69 = "[object HTML document.all class]";
  var v70 = "[object HTMLCollection]";
  var v71 = typeof Symbol == "function" && !!Symbol.toStringTag;
  var v72 = !(0 in [,]);
  function f13() {
    return false;
  }
  if (typeof document == "object") {
    v74 = document.all;
    if (v64.call(v74) === v64.call(document.all)) {
      f13 = function (p69) {
        if ((v72 || !p69) && (typeof p69 === "undefined" || typeof p69 == "object")) {
          try {
            var v73 = v64.call(p69);
            return (v73 === v68 || v73 === v69 || v73 === v70 || v73 === v65) && p69("") == null;
          } catch {}
        }
        return false;
      };
    }
  }
  var v74;
  p66.exports = v59 ? function (p70) {
    if (f13(p70)) {
      return true;
    }
    if (!p70 || typeof p70 != "function" && typeof p70 != "object") {
      return false;
    }
    try {
      v59(p70, null, v60);
    } catch (_0x5be88e) {
      if (_0x5be88e !== v61) {
        return false;
      }
    }
    return !f11(p70) && f12(p70);
  } : function (p71) {
    if (f13(p71)) {
      return true;
    }
    if (!p71 || typeof p71 != "function" && typeof p71 != "object") {
      return false;
    }
    if (v71) {
      return f12(p71);
    }
    if (f11(p71)) {
      return false;
    }
    var v75 = v64.call(p71);
    if (v75 !== v66 && v75 !== v67 && !/^\[object HTML/.test(v75)) {
      return false;
    } else {
      return f12(p71);
    }
  };
});
var vVF313 = vF3((p72, p73) => {
  var vVVF312 = vVF312();
  var v76 = Object.prototype.toString;
  var v77 = Object.prototype.hasOwnProperty;
  function f14(p74, p75, p76) {
    for (var v78 = 0, v79 = p74.length; v78 < v79; v78++) {
      if (v77.call(p74, v78)) {
        if (p76 == null) {
          p75(p74[v78], v78, p74);
        } else {
          p75.call(p76, p74[v78], v78, p74);
        }
      }
    }
  }
  function f15(p77, p78, p79) {
    for (var v80 = 0, v81 = p77.length; v80 < v81; v80++) {
      if (p79 == null) {
        p78(p77.charAt(v80), v80, p77);
      } else {
        p78.call(p79, p77.charAt(v80), v80, p77);
      }
    }
  }
  function f16(p80, p81, p82) {
    for (var v82 in p80) {
      if (v77.call(p80, v82)) {
        if (p82 == null) {
          p81(p80[v82], v82, p80);
        } else {
          p81.call(p82, p80[v82], v82, p80);
        }
      }
    }
  }
  function f17(p83, p84, p85) {
    if (!vVVF312(p84)) {
      throw new TypeError("iterator must be a function");
    }
    var v83;
    if (arguments.length >= 3) {
      v83 = p85;
    }
    if (v76.call(p83) === "[object Array]") {
      f14(p83, p84, v83);
    } else if (typeof p83 == "string") {
      f15(p83, p84, v83);
    } else {
      f16(p83, p84, v83);
    }
  }
  p73.exports = f17;
});
var vVF314 = vF3((p86, p87) => {
  var v84 = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"];
  var v85 = typeof globalThis === "undefined" ? global : globalThis;
  p87.exports = function () {
    var v86 = [];
    for (var v87 = 0; v87 < v84.length; v87++) {
      if (typeof v85[v84[v87]] == "function") {
        v86[v86.length] = v84[v87];
      }
    }
    return v86;
  };
});
var vVF315 = vF3((p88, p89) => {
  var vVVF373 = vVF37();
  var vVVVF3732 = vVVF373("%Object.getOwnPropertyDescriptor%", true);
  if (vVVVF3732) {
    try {
      vVVVF3732([], "length");
    } catch {
      vVVVF3732 = null;
    }
  }
  p89.exports = vVVVF3732;
});
var vVF316 = vF3((p90, p91) => {
  var vVVF313 = vVF313();
  var vVVF314 = vVF314();
  var vVVF392 = vVF39();
  var vVVVF392 = vVVF392("Object.prototype.toString");
  var vVVF324 = vVF32()();
  var v88 = typeof globalThis === "undefined" ? global : globalThis;
  var vVVVF314 = vVVF314();
  var v89 = vVVF392("Array.prototype.indexOf", true) || function (p92, p93) {
    for (var v90 = 0; v90 < p92.length; v90 += 1) {
      if (p92[v90] === p93) {
        return v90;
      }
    }
    return -1;
  };
  var vVVVF3922 = vVVF392("String.prototype.slice");
  var v91 = {};
  var vVVF315 = vVF315();
  var v92 = Object.getPrototypeOf;
  if (vVVF324 && vVVF315 && v92) {
    vVVF313(vVVVF314, function (p94) {
      var v93 = new v88[p94]();
      if (Symbol.toStringTag in v93) {
        var vV92 = v92(v93);
        var vVVVF315 = vVVF315(vV92, Symbol.toStringTag);
        if (!vVVVF315) {
          var vV922 = v92(vV92);
          vVVVF315 = vVVF315(vV922, Symbol.toStringTag);
        }
        v91[p94] = vVVVF315.get;
      }
    });
  }
  function f18(p95) {
    var v94 = false;
    vVVF313(v91, function (p96, p97) {
      if (!v94) {
        try {
          v94 = p96.call(p95) === p97;
        } catch {}
      }
    });
    return v94;
  }
  p91.exports = function (p98) {
    if (!p98 || typeof p98 != "object") {
      return false;
    }
    if (!vVVF324 || !(Symbol.toStringTag in p98)) {
      var vVVVVF3922 = vVVVF3922(vVVVF392(p98), 8, -1);
      return v89(vVVVF314, vVVVVF3922) > -1;
    }
    if (vVVF315) {
      return f18(p98);
    } else {
      return false;
    }
  };
});
var vVF317 = vF3((p99, p100) => {
  var vVVF3132 = vVF313();
  var vVVF3142 = vVF314();
  var vVVF393 = vVF39();
  var vVVVF393 = vVVF393("Object.prototype.toString");
  var vVVF325 = vVF32()();
  var v95 = typeof globalThis === "undefined" ? global : globalThis;
  var vVVVF3142 = vVVF3142();
  var vVVVF3932 = vVVF393("String.prototype.slice");
  var v96 = {};
  var vVVF3152 = vVF315();
  var v97 = Object.getPrototypeOf;
  if (vVVF325 && vVVF3152 && v97) {
    vVVF3132(vVVVF3142, function (p101) {
      if (typeof v95[p101] == "function") {
        var v98 = new v95[p101]();
        if (Symbol.toStringTag in v98) {
          var vV97 = v97(v98);
          var vVVVF3152 = vVVF3152(vV97, Symbol.toStringTag);
          if (!vVVVF3152) {
            var vV972 = v97(vV97);
            vVVVF3152 = vVVF3152(vV972, Symbol.toStringTag);
          }
          v96[p101] = vVVVF3152.get;
        }
      }
    });
  }
  function f19(p102) {
    var v99 = false;
    vVVF3132(v96, function (p103, p104) {
      if (!v99) {
        try {
          var v100 = p103.call(p102);
          if (v100 === p104) {
            v99 = v100;
          }
        } catch {}
      }
    });
    return v99;
  }
  var vVVF316 = vVF316();
  p100.exports = function (p105) {
    if (vVVF316(p105)) {
      if (!vVVF325 || !(Symbol.toStringTag in p105)) {
        return vVVVF3932(vVVVF393(p105), 8, -1);
      } else {
        return f19(p105);
      }
    } else {
      return false;
    }
  };
});
var vVF318 = vF3(p106 => {
  var vVVF310 = vVF310();
  var vVVF311 = vVF311();
  var vVVF317 = vVF317();
  var vVVF3162 = vVF316();
  function f20(p107) {
    return p107.call.bind(p107);
  }
  var v101 = typeof BigInt !== "undefined";
  var v102 = typeof Symbol !== "undefined";
  var vF20 = f20(Object.prototype.toString);
  var vF202 = f20(Number.prototype.valueOf);
  var vF203 = f20(String.prototype.valueOf);
  var vF204 = f20(Boolean.prototype.valueOf);
  if (v101) {
    v103 = f20(BigInt.prototype.valueOf);
  }
  var v103;
  if (v102) {
    v104 = f20(Symbol.prototype.valueOf);
  }
  var v104;
  function f21(p108, p109) {
    if (typeof p108 != "object") {
      return false;
    }
    try {
      p109(p108);
      return true;
    } catch {
      return false;
    }
  }
  p106.isArgumentsObject = vVVF310;
  p106.isGeneratorFunction = vVVF311;
  p106.isTypedArray = vVVF3162;
  function f22(p110) {
    return typeof Promise !== "undefined" && p110 instanceof Promise || p110 !== null && typeof p110 == "object" && typeof p110.then == "function" && typeof p110.catch == "function";
  }
  p106.isPromise = f22;
  function f23(p111) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(p111);
    } else {
      return vVVF3162(p111) || f46(p111);
    }
  }
  p106.isArrayBufferView = f23;
  function f24(p112) {
    return vVVF317(p112) === "Uint8Array";
  }
  p106.isUint8Array = f24;
  function f25(p113) {
    return vVVF317(p113) === "Uint8ClampedArray";
  }
  p106.isUint8ClampedArray = f25;
  function f26(p114) {
    return vVVF317(p114) === "Uint16Array";
  }
  p106.isUint16Array = f26;
  function f27(p115) {
    return vVVF317(p115) === "Uint32Array";
  }
  p106.isUint32Array = f27;
  function f28(p116) {
    return vVVF317(p116) === "Int8Array";
  }
  p106.isInt8Array = f28;
  function f29(p117) {
    return vVVF317(p117) === "Int16Array";
  }
  p106.isInt16Array = f29;
  function f30(p118) {
    return vVVF317(p118) === "Int32Array";
  }
  p106.isInt32Array = f30;
  function f31(p119) {
    return vVVF317(p119) === "Float32Array";
  }
  p106.isFloat32Array = f31;
  function f32(p120) {
    return vVVF317(p120) === "Float64Array";
  }
  p106.isFloat64Array = f32;
  function f33(p121) {
    return vVVF317(p121) === "BigInt64Array";
  }
  p106.isBigInt64Array = f33;
  function f34(p122) {
    return vVVF317(p122) === "BigUint64Array";
  }
  p106.isBigUint64Array = f34;
  function f35(p123) {
    return vF20(p123) === "[object Map]";
  }
  f35.working = typeof Map !== "undefined" && f35(new Map());
  function f36(p124) {
    if (typeof Map === "undefined") {
      return false;
    } else if (f35.working) {
      return f35(p124);
    } else {
      return p124 instanceof Map;
    }
  }
  p106.isMap = f36;
  function f37(p125) {
    return vF20(p125) === "[object Set]";
  }
  f37.working = typeof Set !== "undefined" && f37(new Set());
  function f38(p126) {
    if (typeof Set === "undefined") {
      return false;
    } else if (f37.working) {
      return f37(p126);
    } else {
      return p126 instanceof Set;
    }
  }
  p106.isSet = f38;
  function f39(p127) {
    return vF20(p127) === "[object WeakMap]";
  }
  f39.working = typeof WeakMap !== "undefined" && f39(new WeakMap());
  function f40(p128) {
    if (typeof WeakMap === "undefined") {
      return false;
    } else if (f39.working) {
      return f39(p128);
    } else {
      return p128 instanceof WeakMap;
    }
  }
  p106.isWeakMap = f40;
  function f41(p129) {
    return vF20(p129) === "[object WeakSet]";
  }
  f41.working = typeof WeakSet !== "undefined" && f41(new WeakSet());
  function f42(p130) {
    return f41(p130);
  }
  p106.isWeakSet = f42;
  function f43(p131) {
    return vF20(p131) === "[object ArrayBuffer]";
  }
  f43.working = typeof ArrayBuffer !== "undefined" && f43(new ArrayBuffer());
  function f44(p132) {
    if (typeof ArrayBuffer === "undefined") {
      return false;
    } else if (f43.working) {
      return f43(p132);
    } else {
      return p132 instanceof ArrayBuffer;
    }
  }
  p106.isArrayBuffer = f44;
  function f45(p133) {
    return vF20(p133) === "[object DataView]";
  }
  f45.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && f45(new DataView(new ArrayBuffer(1), 0, 1));
  function f46(p134) {
    if (typeof DataView === "undefined") {
      return false;
    } else if (f45.working) {
      return f45(p134);
    } else {
      return p134 instanceof DataView;
    }
  }
  p106.isDataView = f46;
  var v105 = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
  function f47(p135) {
    return vF20(p135) === "[object SharedArrayBuffer]";
  }
  function f48(p136) {
    if (typeof v105 === "undefined") {
      return false;
    } else {
      if (typeof f47.working === "undefined") {
        f47.working = f47(new v105());
      }
      if (f47.working) {
        return f47(p136);
      } else {
        return p136 instanceof v105;
      }
    }
  }
  p106.isSharedArrayBuffer = f48;
  function f49(p137) {
    return vF20(p137) === "[object AsyncFunction]";
  }
  p106.isAsyncFunction = f49;
  function f50(p138) {
    return vF20(p138) === "[object Map Iterator]";
  }
  p106.isMapIterator = f50;
  function f51(p139) {
    return vF20(p139) === "[object Set Iterator]";
  }
  p106.isSetIterator = f51;
  function f52(p140) {
    return vF20(p140) === "[object Generator]";
  }
  p106.isGeneratorObject = f52;
  function f53(p141) {
    return vF20(p141) === "[object WebAssembly.Module]";
  }
  p106.isWebAssemblyCompiledModule = f53;
  function f54(p142) {
    return f21(p142, vF202);
  }
  p106.isNumberObject = f54;
  function f55(p143) {
    return f21(p143, vF203);
  }
  p106.isStringObject = f55;
  function f56(p144) {
    return f21(p144, vF204);
  }
  p106.isBooleanObject = f56;
  function f57(p145) {
    return v101 && f21(p145, v103);
  }
  p106.isBigIntObject = f57;
  function f58(p146) {
    return v102 && f21(p146, v104);
  }
  p106.isSymbolObject = f58;
  function f59(p147) {
    return f54(p147) || f55(p147) || f56(p147) || f57(p147) || f58(p147);
  }
  p106.isBoxedPrimitive = f59;
  function f60(p148) {
    return typeof Uint8Array !== "undefined" && (f44(p148) || f48(p148));
  }
  p106.isAnyArrayBuffer = f60;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (p149) {
    Object.defineProperty(p106, p149, {
      enumerable: false,
      value: function () {
        throw new Error(p149 + " is not supported in userland");
      }
    });
  });
});
var vVF319 = vF3((p150, p151) => {
  p151.exports = function (p152) {
    return p152 && typeof p152 == "object" && typeof p152.copy == "function" && typeof p152.fill == "function" && typeof p152.readUInt8 == "function";
  };
});
var vVF320 = vF3((p153, p154) => {
  if (typeof Object.create == "function") {
    p154.exports = function (p155, p156) {
      if (p156) {
        p155.super_ = p156;
        p155.prototype = Object.create(p156.prototype, {
          constructor: {
            value: p155,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    p154.exports = function (p157, p158) {
      if (p158) {
        p157.super_ = p158;
        function f61() {}
        f61.prototype = p158.prototype;
        p157.prototype = new f61();
        p157.prototype.constructor = p157;
      }
    };
  }
});
var vVF321 = vF3(p159 => {
  var v106 = Object.getOwnPropertyDescriptors || function (p160) {
    for (var v107 = Object.keys(p160), v108 = {}, v109 = 0; v109 < v107.length; v109++) {
      v108[v107[v109]] = Object.getOwnPropertyDescriptor(p160, v107[v109]);
    }
    return v108;
  };
  var v110 = /%[sdj%]/g;
  p159.format = function (p161) {
    if (!f78(p161)) {
      var v111 = [];
      for (var v112 = 0; v112 < arguments.length; v112++) {
        v111.push(f63(arguments[v112]));
      }
      return v111.join(" ");
    }
    for (var v112 = 1, vArguments = arguments, v113 = vArguments.length, v114 = String(p161).replace(v110, function (p162) {
        if (p162 === "%%") {
          return "%";
        }
        if (v112 >= v113) {
          return p162;
        }
        switch (p162) {
          case "%s":
            return String(vArguments[v112++]);
          case "%d":
            return Number(vArguments[v112++]);
          case "%j":
            try {
              return JSON.stringify(vArguments[v112++]);
            } catch {
              return "[Circular]";
            }
          default:
            return p162;
        }
      }), v115 = vArguments[v112]; v112 < v113; v115 = vArguments[++v112]) {
      if (f75(v115) || !f82(v115)) {
        v114 += " " + v115;
      } else {
        v114 += " " + f63(v115);
      }
    }
    return v114;
  };
  p159.deprecate = function (p163, p164) {
    if (typeof process !== "undefined" && process.noDeprecation === true) {
      return p163;
    }
    if (typeof process === "undefined") {
      return function () {
        return p159.deprecate(p163, p164).apply(this, arguments);
      };
    }
    var v116 = false;
    function f62() {
      if (!v116) {
        if (process.throwDeprecation) {
          throw new Error(p164);
        }
        if (process.traceDeprecation) {
          console.trace(p164);
        } else {
          console.error(p164);
        }
        v116 = true;
      }
      return p163.apply(this, arguments);
    }
    return f62;
  };
  var v117 = {};
  var v118 = /^$/;
  v119 = "false";
  v119 = v119.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
  v118 = new RegExp("^" + v119 + "$", "i");
  var v119;
  p159.debuglog = function (p165) {
    p165 = p165.toUpperCase();
    if (!v117[p165]) {
      if (v118.test(p165)) {
        var v120 = process.pid;
        v117[p165] = function () {
          var v121 = p159.format.apply(p159, arguments);
          console.error("%s %d: %s", p165, v120, v121);
        };
      } else {
        v117[p165] = function () {};
      }
    }
    return v117[p165];
  };
  function f63(p166, p167) {
    var v122 = {
      seen: [],
      stylize: f65
    };
    if (arguments.length >= 3) {
      v122.depth = arguments[2];
    }
    if (arguments.length >= 4) {
      v122.colors = arguments[3];
    }
    if (f74(p167)) {
      v122.showHidden = p167;
    } else if (p167) {
      p159._extend(v122, p167);
    }
    if (f80(v122.showHidden)) {
      v122.showHidden = false;
    }
    if (f80(v122.depth)) {
      v122.depth = 2;
    }
    if (f80(v122.colors)) {
      v122.colors = false;
    }
    if (f80(v122.customInspect)) {
      v122.customInspect = true;
    }
    if (v122.colors) {
      v122.stylize = f64;
    }
    return f67(v122, p166, v122.depth);
  }
  p159.inspect = f63;
  f63.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  };
  f63.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  };
  function f64(p168, p169) {
    var v123 = f63.styles[p169];
    if (v123) {
      return "[" + f63.colors[v123][0] + "m" + p168 + "[" + f63.colors[v123][1] + "m";
    } else {
      return p168;
    }
  }
  function f65(p170, p171) {
    return p170;
  }
  function f66(p172) {
    var v124 = {};
    p172.forEach(function (p173, p174) {
      v124[p173] = true;
    });
    return v124;
  }
  function f67(p175, p176, p177) {
    if (p175.customInspect && p176 && f85(p176.inspect) && p176.inspect !== p159.inspect && (!p176.constructor || p176.constructor.prototype !== p176)) {
      var v125 = p176.inspect(p177, p175);
      if (!f78(v125)) {
        v125 = f67(p175, v125, p177);
      }
      return v125;
    }
    var v_0x3920bd = f68(p175, p176);
    if (v_0x3920bd) {
      return v_0x3920bd;
    }
    var v126 = Object.keys(p176);
    var vF66 = f66(v126);
    if (p175.showHidden) {
      v126 = Object.getOwnPropertyNames(p176);
    }
    if (f84(p176) && (v126.indexOf("message") >= 0 || v126.indexOf("description") >= 0)) {
      return f69(p176);
    }
    if (v126.length === 0) {
      if (f85(p176)) {
        var v127 = p176.name ? ": " + p176.name : "";
        return p175.stylize("[Function" + v127 + "]", "special");
      }
      if (f81(p176)) {
        return p175.stylize(RegExp.prototype.toString.call(p176), "regexp");
      }
      if (f83(p176)) {
        return p175.stylize(Date.prototype.toString.call(p176), "date");
      }
      if (f84(p176)) {
        return f69(p176);
      }
    }
    var v128 = "";
    var v129 = false;
    var v130 = ["{", "}"];
    if (f73(p176)) {
      v129 = true;
      v130 = ["[", "]"];
    }
    if (f85(p176)) {
      var v131 = p176.name ? ": " + p176.name : "";
      v128 = " [Function" + v131 + "]";
    }
    if (f81(p176)) {
      v128 = " " + RegExp.prototype.toString.call(p176);
    }
    if (f83(p176)) {
      v128 = " " + Date.prototype.toUTCString.call(p176);
    }
    if (f84(p176)) {
      v128 = " " + f69(p176);
    }
    if (v126.length === 0 && (!v129 || p176.length == 0)) {
      return v130[0] + v128 + v130[1];
    }
    if (p177 < 0) {
      if (f81(p176)) {
        return p175.stylize(RegExp.prototype.toString.call(p176), "regexp");
      } else {
        return p175.stylize("[Object]", "special");
      }
    }
    p175.seen.push(p176);
    var v132;
    if (v129) {
      v132 = f70(p175, p176, p177, vF66, v126);
    } else {
      v132 = v126.map(function (p178) {
        return f71(p175, p176, p177, vF66, p178, v129);
      });
    }
    p175.seen.pop();
    return f72(v132, v128, v130);
  }
  function f68(p179, p180) {
    if (f80(p180)) {
      return p179.stylize("undefined", "undefined");
    }
    if (f78(p180)) {
      var v133 = "'" + JSON.stringify(p180).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
      return p179.stylize(v133, "string");
    }
    if (f77(p180)) {
      return p179.stylize("" + p180, "number");
    }
    if (f74(p180)) {
      return p179.stylize("" + p180, "boolean");
    }
    if (f75(p180)) {
      return p179.stylize("null", "null");
    }
  }
  function f69(p181) {
    return "[" + Error.prototype.toString.call(p181) + "]";
  }
  function f70(p182, p183, p184, p185, p186) {
    var v134 = [];
    for (var v135 = 0, v136 = p183.length; v135 < v136; ++v135) {
      if (f90(p183, String(v135))) {
        v134.push(f71(p182, p183, p184, p185, String(v135), true));
      } else {
        v134.push("");
      }
    }
    p186.forEach(function (p187) {
      if (!p187.match(/^\d+$/)) {
        v134.push(f71(p182, p183, p184, p185, p187, true));
      }
    });
    return v134;
  }
  function f71(p188, p189, p190, p191, p192, p193) {
    var v137;
    var v138;
    var v139;
    v139 = Object.getOwnPropertyDescriptor(p189, p192) || {
      value: p189[p192]
    };
    if (v139.get) {
      if (v139.set) {
        v138 = p188.stylize("[Getter/Setter]", "special");
      } else {
        v138 = p188.stylize("[Getter]", "special");
      }
    } else if (v139.set) {
      v138 = p188.stylize("[Setter]", "special");
    }
    if (!f90(p191, p192)) {
      v137 = "[" + p192 + "]";
    }
    if (!v138) {
      if (p188.seen.indexOf(v139.value) < 0) {
        if (f75(p190)) {
          v138 = f67(p188, v139.value, null);
        } else {
          v138 = f67(p188, v139.value, p190 - 1);
        }
        if (v138.indexOf("\n") > -1) {
          if (p193) {
            v138 = v138.split("\n").map(function (p194) {
              return "  " + p194;
            }).join("\n").substr(2);
          } else {
            v138 = "\n" + v138.split("\n").map(function (p195) {
              return "   " + p195;
            }).join("\n");
          }
        }
      } else {
        v138 = p188.stylize("[Circular]", "special");
      }
    }
    if (f80(v137)) {
      if (p193 && p192.match(/^\d+$/)) {
        return v138;
      }
      v137 = JSON.stringify("" + p192);
      if (v137.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        v137 = v137.substr(1, v137.length - 2);
        v137 = p188.stylize(v137, "name");
      } else {
        v137 = v137.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
        v137 = p188.stylize(v137, "string");
      }
    }
    return v137 + ": " + v138;
  }
  function f72(p196, p197, p198) {
    var v140 = 0;
    var v141 = p196.reduce(function (p199, p200) {
      v140++;
      if (p200.indexOf("\n") >= 0) {
        v140++;
      }
      return p199 + p200.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (v141 > 60) {
      return p198[0] + (p197 === "" ? "" : p197 + "\n ") + " " + p196.join(",\n  ") + " " + p198[1];
    } else {
      return p198[0] + p197 + " " + p196.join(", ") + " " + p198[1];
    }
  }
  p159.types = vVF318();
  function f73(p201) {
    return Array.isArray(p201);
  }
  p159.isArray = f73;
  function f74(p202) {
    return typeof p202 == "boolean";
  }
  p159.isBoolean = f74;
  function f75(p203) {
    return p203 === null;
  }
  p159.isNull = f75;
  function f76(p204) {
    return p204 == null;
  }
  p159.isNullOrUndefined = f76;
  function f77(p205) {
    return typeof p205 == "number";
  }
  p159.isNumber = f77;
  function f78(p206) {
    return typeof p206 == "string";
  }
  p159.isString = f78;
  function f79(p207) {
    return typeof p207 == "symbol";
  }
  p159.isSymbol = f79;
  function f80(p208) {
    return p208 === undefined;
  }
  p159.isUndefined = f80;
  function f81(p209) {
    return f82(p209) && f87(p209) === "[object RegExp]";
  }
  p159.isRegExp = f81;
  p159.types.isRegExp = f81;
  function f82(p210) {
    return typeof p210 == "object" && p210 !== null;
  }
  p159.isObject = f82;
  function f83(p211) {
    return f82(p211) && f87(p211) === "[object Date]";
  }
  p159.isDate = f83;
  p159.types.isDate = f83;
  function f84(p212) {
    return f82(p212) && (f87(p212) === "[object Error]" || p212 instanceof Error);
  }
  p159.isError = f84;
  p159.types.isNativeError = f84;
  function f85(p213) {
    return typeof p213 == "function";
  }
  p159.isFunction = f85;
  function f86(p214) {
    return p214 === null || typeof p214 == "boolean" || typeof p214 == "number" || typeof p214 == "string" || typeof p214 == "symbol" || typeof p214 === "undefined";
  }
  p159.isPrimitive = f86;
  p159.isBuffer = vVF319();
  function f87(p215) {
    return Object.prototype.toString.call(p215);
  }
  function f88(p216) {
    if (p216 < 10) {
      return "0" + p216.toString(10);
    } else {
      return p216.toString(10);
    }
  }
  var v142 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function f89() {
    var v143 = new Date();
    var v144 = [f88(v143.getHours()), f88(v143.getMinutes()), f88(v143.getSeconds())].join(":");
    return [v143.getDate(), v142[v143.getMonth()], v144].join(" ");
  }
  p159.log = function () {
    console.log("%s - %s", f89(), p159.format.apply(p159, arguments));
  };
  p159.inherits = vVF320();
  p159._extend = function (p217, p218) {
    if (!p218 || !f82(p218)) {
      return p217;
    }
    var v145 = Object.keys(p218);
    for (var v146 = v145.length; v146--;) {
      p217[v145[v146]] = p218[v145[v146]];
    }
    return p217;
  };
  function f90(p219, p220) {
    return Object.prototype.hasOwnProperty.call(p219, p220);
  }
  var v147 = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
  p159.promisify = function (p221) {
    if (typeof p221 != "function") {
      throw new TypeError("The \"original\" argument must be of type Function");
    }
    if (v147 && p221[v147]) {
      var v148 = p221[v147];
      if (typeof v148 != "function") {
        throw new TypeError("The \"util.promisify.custom\" argument must be of type Function");
      }
      Object.defineProperty(v148, v147, {
        value: v148,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return v148;
    }
    function v148() {
      var v149;
      var v150;
      var v151 = new Promise(function (p222, p223) {
        v149 = p222;
        v150 = p223;
      });
      var v152 = [];
      for (var v153 = 0; v153 < arguments.length; v153++) {
        v152.push(arguments[v153]);
      }
      v152.push(function (p224, p225) {
        if (p224) {
          v150(p224);
        } else {
          v149(p225);
        }
      });
      try {
        p221.apply(this, v152);
      } catch (_0x52598c) {
        v150(_0x52598c);
      }
      return v151;
    }
    Object.setPrototypeOf(v148, Object.getPrototypeOf(p221));
    if (v147) {
      Object.defineProperty(v148, v147, {
        value: v148,
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return Object.defineProperties(v148, v106(p221));
  };
  p159.promisify.custom = v147;
  function f91(p226, p227) {
    if (!p226) {
      var v154 = new Error("Promise was rejected with a falsy value");
      v154.reason = p226;
      p226 = v154;
    }
    return p227(p226);
  }
  function f92(p228) {
    if (typeof p228 != "function") {
      throw new TypeError("The \"original\" argument must be of type Function");
    }
    function f93() {
      var v155 = [];
      for (var v156 = 0; v156 < arguments.length; v156++) {
        v155.push(arguments[v156]);
      }
      var v157 = v155.pop();
      if (typeof v157 != "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var vThis2 = this;
      function f94() {
        return v157.apply(vThis2, arguments);
      }
      p228.apply(this, v155).then(function (p229) {
        process.nextTick(f94.bind(null, null, p229));
      }, function (p230) {
        process.nextTick(f91.bind(null, p230, f94));
      });
    }
    Object.setPrototypeOf(f93, Object.getPrototypeOf(p228));
    Object.defineProperties(f93, v106(p228));
    return f93;
  }
  p159.callbackify = f92;
});
var vVF322 = vF3((p231, p232) => {
  p232.exports = function (p233, p234) {
    var v158 = "000000000" + p233;
    return v158.substr(v158.length - p234);
  };
});
var vVF323 = vF3((p235, p236) => {
  var v159 = typeof v159 === "undefined" ? globalThis : v159;
  var vVVF3222 = vVF322();
  var v160 = typeof v159 == "object" ? v159 : self;
  var v161 = Object.keys(v160).length;
  var v162 = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
  var vVVVF3222 = vVVF3222((v162 + navigator.userAgent.length).toString(36) + v161.toString(36), 4);
  p236.exports = function () {
    return vVVVF3222;
  };
});
var vVF324 = vF3((p237, p238) => {
  var v163 = typeof v163 === "undefined" ? globalThis : v163;
  var v164;
  var v165 = typeof v163 !== "undefined" && (v163.crypto || v163.msCrypto) || typeof self !== "undefined" && self.crypto;
  if (v165) {
    v166 = Math.pow(2, 32) - 1;
    v164 = function () {
      return Math.abs(v165.getRandomValues(new Uint32Array(1))[0] / v166);
    };
  } else {
    v164 = Math.random;
  }
  var v166;
  p238.exports = v164;
});
var vVF325 = vF3((p239, p240) => {
  var vVVF3232 = vVF323();
  var vVVF3223 = vVF322();
  var vVVF3242 = vVF324();
  var v167 = 0;
  var v168 = 4;
  var v169 = 36;
  var v170 = Math.pow(v169, v168);
  function f95() {
    return vVVF3223((vVVF3242() * v170 << 0).toString(v169), v168);
  }
  function f96() {
    v167 = v167 < v170 ? v167 : 0;
    v167++;
    return v167 - 1;
  }
  function f97() {
    var v171 = "c";
    var v172 = new Date().getTime().toString(v169);
    var vVVVF3223 = vVVF3223(f96().toString(v169), v168);
    var vVVVF3232 = vVVF3232();
    var v173 = f95() + f95();
    return v171 + v172 + vVVVF3223 + vVVVF3232 + v173;
  }
  f97.slug = function () {
    var v174 = new Date().getTime().toString(36);
    var v175 = f96().toString(36).slice(-4);
    var v176 = vVVF3232().slice(0, 1) + vVVF3232().slice(-1);
    var v177 = f95().slice(-2);
    return v174.slice(-2) + v175 + v176 + v177;
  };
  f97.isCuid = function (p241) {
    if (typeof p241 != "string") {
      return false;
    } else {
      return !!p241.startsWith("c");
    }
  };
  f97.isSlug = function (p242) {
    if (typeof p242 != "string") {
      return false;
    }
    var v178 = p242.length;
    return v178 >= 7 && v178 <= 10;
  };
  f97.fingerprint = vVVF3232;
  p240.exports = f97;
});
var vVF326 = vF3(p243 => {
  p243.byteLength = f99;
  p243.toByteArray = f101;
  p243.fromByteArray = f104;
  var v179 = [];
  var v180 = [];
  var v181 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var v182 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  v183 = 0;
  v184 = v182.length;
  for (; v183 < v184; ++v183) {
    v179[v183] = v182[v183];
    v180[v182.charCodeAt(v183)] = v183;
  }
  var v183;
  var v184;
  v180["-".charCodeAt(0)] = 62;
  v180["_".charCodeAt(0)] = 63;
  function f98(p244) {
    var v185 = p244.length;
    if (v185 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var v186 = p244.indexOf("=");
    if (v186 === -1) {
      v186 = v185;
    }
    var v187 = v186 === v185 ? 0 : 4 - v186 % 4;
    return [v186, v187];
  }
  function f99(p245) {
    var vF98 = f98(p245);
    var v188 = vF98[0];
    var v189 = vF98[1];
    return (v188 + v189) * 3 / 4 - v189;
  }
  function f100(p246, p247, p248) {
    return (p247 + p248) * 3 / 4 - p248;
  }
  function f101(p249) {
    var v190;
    var vF982 = f98(p249);
    var v191 = vF982[0];
    var v192 = vF982[1];
    var v193 = new v181(f100(p249, v191, v192));
    var v194 = 0;
    var v195 = v192 > 0 ? v191 - 4 : v191;
    var v196;
    for (v196 = 0; v196 < v195; v196 += 4) {
      v190 = v180[p249.charCodeAt(v196)] << 18 | v180[p249.charCodeAt(v196 + 1)] << 12 | v180[p249.charCodeAt(v196 + 2)] << 6 | v180[p249.charCodeAt(v196 + 3)];
      v193[v194++] = v190 >> 16 & 255;
      v193[v194++] = v190 >> 8 & 255;
      v193[v194++] = v190 & 255;
    }
    if (v192 === 2) {
      v190 = v180[p249.charCodeAt(v196)] << 2 | v180[p249.charCodeAt(v196 + 1)] >> 4;
      v193[v194++] = v190 & 255;
    }
    if (v192 === 1) {
      v190 = v180[p249.charCodeAt(v196)] << 10 | v180[p249.charCodeAt(v196 + 1)] << 4 | v180[p249.charCodeAt(v196 + 2)] >> 2;
      v193[v194++] = v190 >> 8 & 255;
      v193[v194++] = v190 & 255;
    }
    return v193;
  }
  function f102(p250) {
    return v179[p250 >> 18 & 63] + v179[p250 >> 12 & 63] + v179[p250 >> 6 & 63] + v179[p250 & 63];
  }
  function f103(p251, p252, p253) {
    var v197;
    var v198 = [];
    for (var vP252 = p252; vP252 < p253; vP252 += 3) {
      v197 = (p251[vP252] << 16 & 16711680) + (p251[vP252 + 1] << 8 & 65280) + (p251[vP252 + 2] & 255);
      v198.push(f102(v197));
    }
    return v198.join("");
  }
  function f104(p254) {
    var v199;
    var v200 = p254.length;
    var v201 = v200 % 3;
    var v202 = [];
    for (var v203 = 16383, v204 = 0, v205 = v200 - v201; v204 < v205; v204 += v203) {
      v202.push(f103(p254, v204, v204 + v203 > v205 ? v205 : v204 + v203));
    }
    if (v201 === 1) {
      v199 = p254[v200 - 1];
      v202.push(v179[v199 >> 2] + v179[v199 << 4 & 63] + "==");
    } else if (v201 === 2) {
      v199 = (p254[v200 - 2] << 8) + p254[v200 - 1];
      v202.push(v179[v199 >> 10] + v179[v199 >> 4 & 63] + v179[v199 << 2 & 63] + "=");
    }
    return v202.join("");
  }
});
var vVF327 = vF3(p255 => {
  p255.read = function (p256, p257, p258, p259, p260) {
    var v206;
    var v207;
    var v208 = p260 * 8 - p259 - 1;
    var v209 = (1 << v208) - 1;
    var v210 = v209 >> 1;
    var v211 = -7;
    var v212 = p258 ? p260 - 1 : 0;
    var v213 = p258 ? -1 : 1;
    var v214 = p256[p257 + v212];
    v212 += v213;
    v206 = v214 & (1 << -v211) - 1;
    v214 >>= -v211;
    v211 += v208;
    for (; v211 > 0; v211 -= 8) {
      v206 = v206 * 256 + p256[p257 + v212];
      v212 += v213;
    }
    v207 = v206 & (1 << -v211) - 1;
    v206 >>= -v211;
    v211 += p259;
    for (; v211 > 0; v211 -= 8) {
      v207 = v207 * 256 + p256[p257 + v212];
      v212 += v213;
    }
    if (v206 === 0) {
      v206 = 1 - v210;
    } else {
      if (v206 === v209) {
        if (v207) {
          return NaN;
        } else {
          return (v214 ? -1 : 1) * Infinity;
        }
      }
      v207 = v207 + Math.pow(2, p259);
      v206 = v206 - v210;
    }
    return (v214 ? -1 : 1) * v207 * Math.pow(2, v206 - p259);
  };
  p255.write = function (p261, p262, p263, p264, p265, p266) {
    var v215;
    var v216;
    var v217;
    var v218 = p266 * 8 - p265 - 1;
    var v219 = (1 << v218) - 1;
    var v220 = v219 >> 1;
    var v221 = p265 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var v222 = p264 ? 0 : p266 - 1;
    var v223 = p264 ? 1 : -1;
    var v224 = p262 < 0 || p262 === 0 && 1 / p262 < 0 ? 1 : 0;
    p262 = Math.abs(p262);
    if (isNaN(p262) || p262 === Infinity) {
      v216 = isNaN(p262) ? 1 : 0;
      v215 = v219;
    } else {
      v215 = Math.floor(Math.log(p262) / Math.LN2);
      if (p262 * (v217 = Math.pow(2, -v215)) < 1) {
        v215--;
        v217 *= 2;
      }
      if (v215 + v220 >= 1) {
        p262 += v221 / v217;
      } else {
        p262 += v221 * Math.pow(2, 1 - v220);
      }
      if (p262 * v217 >= 2) {
        v215++;
        v217 /= 2;
      }
      if (v215 + v220 >= v219) {
        v216 = 0;
        v215 = v219;
      } else if (v215 + v220 >= 1) {
        v216 = (p262 * v217 - 1) * Math.pow(2, p265);
        v215 = v215 + v220;
      } else {
        v216 = p262 * Math.pow(2, v220 - 1) * Math.pow(2, p265);
        v215 = 0;
      }
    }
    for (; p265 >= 8; p265 -= 8) {
      p261[p263 + v222] = v216 & 255;
      v222 += v223;
      v216 /= 256;
    }
    v215 = v215 << p265 | v216;
    v218 += p265;
    for (; v218 > 0; v218 -= 8) {
      p261[p263 + v222] = v215 & 255;
      v222 += v223;
      v215 /= 256;
    }
    p261[p263 + v222 - v223] |= v224 * 128;
  };
});
var vVF328 = vF3(p267 => {
  var vVVF326 = vVF326();
  var vVVF327 = vVF327();
  var v225 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  p267.Buffer = f107;
  p267.SlowBuffer = f118;
  p267.INSPECT_MAX_BYTES = 50;
  var v226 = 2147483647;
  p267.kMaxLength = v226;
  f107.TYPED_ARRAY_SUPPORT = f105();
  if (!f107.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error == "function") {
    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  }
  function f105() {
    try {
      let v227 = new Uint8Array(1);
      let v228 = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(v228, Uint8Array.prototype);
      Object.setPrototypeOf(v227, v228);
      return v227.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(f107.prototype, "parent", {
    enumerable: true,
    get: function () {
      if (f107.isBuffer(this)) {
        return this.buffer;
      }
    }
  });
  Object.defineProperty(f107.prototype, "offset", {
    enumerable: true,
    get: function () {
      if (f107.isBuffer(this)) {
        return this.byteOffset;
      }
    }
  });
  function f106(p268) {
    if (p268 > v226) {
      throw new RangeError("The value \"" + p268 + "\" is invalid for option \"size\"");
    }
    let v229 = new Uint8Array(p268);
    Object.setPrototypeOf(v229, f107.prototype);
    return v229;
  }
  function f107(p269, p270, p271) {
    if (typeof p269 == "number") {
      if (typeof p270 == "string") {
        throw new TypeError("The \"string\" argument must be of type string. Received type number");
      }
      return f111(p269);
    }
    return f108(p269, p270, p271);
  }
  f107.poolSize = 8192;
  function f108(p272, p273, p274) {
    if (typeof p272 == "string") {
      return f112(p272, p273);
    }
    if (ArrayBuffer.isView(p272)) {
      return f114(p272);
    }
    if (p272 == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p272);
    }
    if (f156(p272, ArrayBuffer) || p272 && f156(p272.buffer, ArrayBuffer) || typeof SharedArrayBuffer !== "undefined" && (f156(p272, SharedArrayBuffer) || p272 && f156(p272.buffer, SharedArrayBuffer))) {
      return f115(p272, p273, p274);
    }
    if (typeof p272 == "number") {
      throw new TypeError("The \"value\" argument must not be of type number. Received type number");
    }
    let v230 = p272.valueOf && p272.valueOf();
    if (v230 != null && v230 !== p272) {
      return f107.from(v230, p273, p274);
    }
    let v_0x4e6564 = f116(p272);
    if (v_0x4e6564) {
      return v_0x4e6564;
    }
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof p272[Symbol.toPrimitive] == "function") {
      return f107.from(p272[Symbol.toPrimitive]("string"), p273, p274);
    }
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p272);
  }
  f107.from = function (p275, p276, p277) {
    return f108(p275, p276, p277);
  };
  Object.setPrototypeOf(f107.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(f107, Uint8Array);
  function f109(p278) {
    if (typeof p278 != "number") {
      throw new TypeError("\"size\" argument must be of type number");
    }
    if (p278 < 0) {
      throw new RangeError("The value \"" + p278 + "\" is invalid for option \"size\"");
    }
  }
  function f110(p279, p280, p281) {
    f109(p279);
    if (p279 <= 0) {
      return f106(p279);
    } else if (p280 !== undefined) {
      if (typeof p281 == "string") {
        return f106(p279).fill(p280, p281);
      } else {
        return f106(p279).fill(p280);
      }
    } else {
      return f106(p279);
    }
  }
  f107.alloc = function (p282, p283, p284) {
    return f110(p282, p283, p284);
  };
  function f111(p285) {
    f109(p285);
    return f106(p285 < 0 ? 0 : f117(p285) | 0);
  }
  f107.allocUnsafe = function (p286) {
    return f111(p286);
  };
  f107.allocUnsafeSlow = function (p287) {
    return f111(p287);
  };
  function f112(p288, p289) {
    if (typeof p289 != "string" || p289 === "") {
      p289 = "utf8";
    }
    if (!f107.isEncoding(p289)) {
      throw new TypeError("Unknown encoding: " + p289);
    }
    let v231 = f119(p288, p289) | 0;
    let vF106 = f106(v231);
    let v232 = vF106.write(p288, p289);
    if (v232 !== v231) {
      vF106 = vF106.slice(0, v232);
    }
    return vF106;
  }
  function f113(p290) {
    let v233 = p290.length < 0 ? 0 : f117(p290.length) | 0;
    let vF1062 = f106(v233);
    for (let v234 = 0; v234 < v233; v234 += 1) {
      vF1062[v234] = p290[v234] & 255;
    }
    return vF1062;
  }
  function f114(p291) {
    if (f156(p291, Uint8Array)) {
      let v235 = new Uint8Array(p291);
      return f115(v235.buffer, v235.byteOffset, v235.byteLength);
    }
    return f113(p291);
  }
  function f115(p292, p293, p294) {
    if (p293 < 0 || p292.byteLength < p293) {
      throw new RangeError("\"offset\" is outside of buffer bounds");
    }
    if (p292.byteLength < p293 + (p294 || 0)) {
      throw new RangeError("\"length\" is outside of buffer bounds");
    }
    let v236;
    if (p293 === undefined && p294 === undefined) {
      v236 = new Uint8Array(p292);
    } else if (p294 === undefined) {
      v236 = new Uint8Array(p292, p293);
    } else {
      v236 = new Uint8Array(p292, p293, p294);
    }
    Object.setPrototypeOf(v236, f107.prototype);
    return v236;
  }
  function f116(p295) {
    if (f107.isBuffer(p295)) {
      let v237 = f117(p295.length) | 0;
      let vF1063 = f106(v237);
      if (vF1063.length !== 0) {
        p295.copy(vF1063, 0, 0, v237);
      }
      return vF1063;
    }
    if (p295.length !== undefined) {
      if (typeof p295.length != "number" || f157(p295.length)) {
        return f106(0);
      } else {
        return f113(p295);
      }
    }
    if (p295.type === "Buffer" && Array.isArray(p295.data)) {
      return f113(p295.data);
    }
  }
  function f117(p296) {
    if (p296 >= v226) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + v226.toString(16) + " bytes");
    }
    return p296 | 0;
  }
  function f118(p297) {
    if (+p297 != p297) {
      p297 = 0;
    }
    return f107.alloc(+p297);
  }
  f107.isBuffer = function (p298) {
    return p298 != null && p298._isBuffer === true && p298 !== f107.prototype;
  };
  f107.compare = function (p299, p300) {
    if (f156(p299, Uint8Array)) {
      p299 = f107.from(p299, p299.offset, p299.byteLength);
    }
    if (f156(p300, Uint8Array)) {
      p300 = f107.from(p300, p300.offset, p300.byteLength);
    }
    if (!f107.isBuffer(p299) || !f107.isBuffer(p300)) {
      throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    }
    if (p299 === p300) {
      return 0;
    }
    let v238 = p299.length;
    let v239 = p300.length;
    for (let v240 = 0, v241 = Math.min(v238, v239); v240 < v241; ++v240) {
      if (p299[v240] !== p300[v240]) {
        v238 = p299[v240];
        v239 = p300[v240];
        break;
      }
    }
    if (v238 < v239) {
      return -1;
    } else if (v239 < v238) {
      return 1;
    } else {
      return 0;
    }
  };
  f107.isEncoding = function (p301) {
    switch (String(p301).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  f107.concat = function (p302, p303) {
    if (!Array.isArray(p302)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    if (p302.length === 0) {
      return f107.alloc(0);
    }
    let v242;
    if (p303 === undefined) {
      p303 = 0;
      v242 = 0;
      for (; v242 < p302.length; ++v242) {
        p303 += p302[v242].length;
      }
    }
    let v243 = f107.allocUnsafe(p303);
    let v244 = 0;
    for (v242 = 0; v242 < p302.length; ++v242) {
      let v245 = p302[v242];
      if (f156(v245, Uint8Array)) {
        if (v244 + v245.length > v243.length) {
          if (!f107.isBuffer(v245)) {
            v245 = f107.from(v245);
          }
          v245.copy(v243, v244);
        } else {
          Uint8Array.prototype.set.call(v243, v245, v244);
        }
      } else if (f107.isBuffer(v245)) {
        v245.copy(v243, v244);
      } else {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      v244 += v245.length;
    }
    return v243;
  };
  function f119(p304, p305) {
    if (f107.isBuffer(p304)) {
      return p304.length;
    }
    if (ArrayBuffer.isView(p304) || f156(p304, ArrayBuffer)) {
      return p304.byteLength;
    }
    if (typeof p304 != "string") {
      throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof p304);
    }
    let v246 = p304.length;
    let v247 = arguments.length > 2 && arguments[2] === true;
    if (!v247 && v246 === 0) {
      return 0;
    }
    let v248 = false;
    while (true) {
      switch (p305) {
        case "ascii":
        case "latin1":
        case "binary":
          return v246;
        case "utf8":
        case "utf-8":
          return f151(p304).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return v246 * 2;
        case "hex":
          return v246 >>> 1;
        case "base64":
          return f154(p304).length;
        default:
          if (v248) {
            if (v247) {
              return -1;
            } else {
              return f151(p304).length;
            }
          }
          p305 = ("" + p305).toLowerCase();
          v248 = true;
      }
    }
  }
  f107.byteLength = f119;
  function f120(p306, p307, p308) {
    let v249 = false;
    if (p307 === undefined || p307 < 0) {
      p307 = 0;
    }
    if (p307 > this.length || ((p308 === undefined || p308 > this.length) && (p308 = this.length), p308 <= 0) || (p308 >>>= 0, p307 >>>= 0, p308 <= p307)) {
      return "";
    }
    for (p306 ||= "utf8";;) {
      switch (p306) {
        case "hex":
          return f135(this, p307, p308);
        case "utf8":
        case "utf-8":
          return f131(this, p307, p308);
        case "ascii":
          return f133(this, p307, p308);
        case "latin1":
        case "binary":
          return f134(this, p307, p308);
        case "base64":
          return f130(this, p307, p308);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f136(this, p307, p308);
        default:
          if (v249) {
            throw new TypeError("Unknown encoding: " + p306);
          }
          p306 = (p306 + "").toLowerCase();
          v249 = true;
      }
    }
  }
  f107.prototype._isBuffer = true;
  function f121(p309, p310, p311) {
    let v250 = p309[p310];
    p309[p310] = p309[p311];
    p309[p311] = v250;
  }
  f107.prototype.swap16 = function () {
    let v251 = this.length;
    if (v251 % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let v252 = 0; v252 < v251; v252 += 2) {
      f121(this, v252, v252 + 1);
    }
    return this;
  };
  f107.prototype.swap32 = function () {
    let v253 = this.length;
    if (v253 % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let v254 = 0; v254 < v253; v254 += 4) {
      f121(this, v254, v254 + 3);
      f121(this, v254 + 1, v254 + 2);
    }
    return this;
  };
  f107.prototype.swap64 = function () {
    let v255 = this.length;
    if (v255 % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let v256 = 0; v256 < v255; v256 += 8) {
      f121(this, v256, v256 + 7);
      f121(this, v256 + 1, v256 + 6);
      f121(this, v256 + 2, v256 + 5);
      f121(this, v256 + 3, v256 + 4);
    }
    return this;
  };
  f107.prototype.toString = function () {
    let v257 = this.length;
    if (v257 === 0) {
      return "";
    } else if (arguments.length === 0) {
      return f131(this, 0, v257);
    } else {
      return f120.apply(this, arguments);
    }
  };
  f107.prototype.toLocaleString = f107.prototype.toString;
  f107.prototype.equals = function (p312) {
    if (!f107.isBuffer(p312)) {
      throw new TypeError("Argument must be a Buffer");
    }
    if (this === p312) {
      return true;
    } else {
      return f107.compare(this, p312) === 0;
    }
  };
  f107.prototype.inspect = function () {
    let v258 = "";
    let v259 = p267.INSPECT_MAX_BYTES;
    v258 = this.toString("hex", 0, v259).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > v259) {
      v258 += " ... ";
    }
    return "<Buffer " + v258 + ">";
  };
  if (v225) {
    f107.prototype[v225] = f107.prototype.inspect;
  }
  f107.prototype.compare = function (p313, p314, p315, p316, p317) {
    if (f156(p313, Uint8Array)) {
      p313 = f107.from(p313, p313.offset, p313.byteLength);
    }
    if (!f107.isBuffer(p313)) {
      throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof p313);
    }
    if (p314 === undefined) {
      p314 = 0;
    }
    if (p315 === undefined) {
      p315 = p313 ? p313.length : 0;
    }
    if (p316 === undefined) {
      p316 = 0;
    }
    if (p317 === undefined) {
      p317 = this.length;
    }
    if (p314 < 0 || p315 > p313.length || p316 < 0 || p317 > this.length) {
      throw new RangeError("out of range index");
    }
    if (p316 >= p317 && p314 >= p315) {
      return 0;
    }
    if (p316 >= p317) {
      return -1;
    }
    if (p314 >= p315) {
      return 1;
    }
    p314 >>>= 0;
    p315 >>>= 0;
    p316 >>>= 0;
    p317 >>>= 0;
    if (this === p313) {
      return 0;
    }
    let v260 = p317 - p316;
    let v261 = p315 - p314;
    let v262 = Math.min(v260, v261);
    let v263 = this.slice(p316, p317);
    let v264 = p313.slice(p314, p315);
    for (let v265 = 0; v265 < v262; ++v265) {
      if (v263[v265] !== v264[v265]) {
        v260 = v263[v265];
        v261 = v264[v265];
        break;
      }
    }
    if (v260 < v261) {
      return -1;
    } else if (v261 < v260) {
      return 1;
    } else {
      return 0;
    }
  };
  function f122(p318, p319, p320, p321, p322) {
    if (p318.length === 0) {
      return -1;
    }
    if (typeof p320 == "string") {
      p321 = p320;
      p320 = 0;
    } else if (p320 > 2147483647) {
      p320 = 2147483647;
    } else if (p320 < -2147483648) {
      p320 = -2147483648;
    }
    p320 = +p320;
    if (f157(p320)) {
      p320 = p322 ? 0 : p318.length - 1;
    }
    if (p320 < 0) {
      p320 = p318.length + p320;
    }
    if (p320 >= p318.length) {
      if (p322) {
        return -1;
      }
      p320 = p318.length - 1;
    } else if (p320 < 0) {
      if (p322) {
        p320 = 0;
      } else {
        return -1;
      }
    }
    if (typeof p319 == "string") {
      p319 = f107.from(p319, p321);
    }
    if (f107.isBuffer(p319)) {
      if (p319.length === 0) {
        return -1;
      } else {
        return f123(p318, p319, p320, p321, p322);
      }
    }
    if (typeof p319 == "number") {
      p319 = p319 & 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if (p322) {
          return Uint8Array.prototype.indexOf.call(p318, p319, p320);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(p318, p319, p320);
        }
      } else {
        return f123(p318, [p319], p320, p321, p322);
      }
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function f123(p323, p324, p325, p326, p327) {
    let v266 = 1;
    let v267 = p323.length;
    let v268 = p324.length;
    if (p326 !== undefined && (p326 = String(p326).toLowerCase(), p326 === "ucs2" || p326 === "ucs-2" || p326 === "utf16le" || p326 === "utf-16le")) {
      if (p323.length < 2 || p324.length < 2) {
        return -1;
      }
      v266 = 2;
      v267 /= 2;
      v268 /= 2;
      p325 /= 2;
    }
    function f124(p328, p329) {
      if (v266 === 1) {
        return p328[p329];
      } else {
        return p328.readUInt16BE(p329 * v266);
      }
    }
    let v269;
    if (p327) {
      let v270 = -1;
      for (v269 = p325; v269 < v267; v269++) {
        if (f124(p323, v269) === f124(p324, v270 === -1 ? 0 : v269 - v270)) {
          if (v270 === -1) {
            v270 = v269;
          }
          if (v269 - v270 + 1 === v268) {
            return v270 * v266;
          }
        } else {
          if (v270 !== -1) {
            v269 -= v269 - v270;
          }
          v270 = -1;
        }
      }
    } else {
      if (p325 + v268 > v267) {
        p325 = v267 - v268;
      }
      v269 = p325;
      for (; v269 >= 0; v269--) {
        let v271 = true;
        for (let v272 = 0; v272 < v268; v272++) {
          if (f124(p323, v269 + v272) !== f124(p324, v272)) {
            v271 = false;
            break;
          }
        }
        if (v271) {
          return v269;
        }
      }
    }
    return -1;
  }
  f107.prototype.includes = function (p330, p331, p332) {
    return this.indexOf(p330, p331, p332) !== -1;
  };
  f107.prototype.indexOf = function (p333, p334, p335) {
    return f122(this, p333, p334, p335, true);
  };
  f107.prototype.lastIndexOf = function (p336, p337, p338) {
    return f122(this, p336, p337, p338, false);
  };
  function f125(p339, p340, p341, p342) {
    p341 = Number(p341) || 0;
    let v273 = p339.length - p341;
    if (p342) {
      p342 = Number(p342);
      if (p342 > v273) {
        p342 = v273;
      }
    } else {
      p342 = v273;
    }
    let v274 = p340.length;
    if (p342 > v274 / 2) {
      p342 = v274 / 2;
    }
    let v275;
    for (v275 = 0; v275 < p342; ++v275) {
      let vParseInt = parseInt(p340.substr(v275 * 2, 2), 16);
      if (f157(vParseInt)) {
        return v275;
      }
      p339[p341 + v275] = vParseInt;
    }
    return v275;
  }
  function f126(p343, p344, p345, p346) {
    return f155(f151(p344, p343.length - p345), p343, p345, p346);
  }
  function f127(p347, p348, p349, p350) {
    return f155(f152(p348), p347, p349, p350);
  }
  function f128(p351, p352, p353, p354) {
    return f155(f154(p352), p351, p353, p354);
  }
  function f129(p355, p356, p357, p358) {
    return f155(f153(p356, p355.length - p357), p355, p357, p358);
  }
  f107.prototype.write = function (p359, p360, p361, p362) {
    if (p360 === undefined) {
      p362 = "utf8";
      p361 = this.length;
      p360 = 0;
    } else if (p361 === undefined && typeof p360 == "string") {
      p362 = p360;
      p361 = this.length;
      p360 = 0;
    } else if (isFinite(p360)) {
      p360 = p360 >>> 0;
      if (isFinite(p361)) {
        p361 = p361 >>> 0;
        if (p362 === undefined) {
          p362 = "utf8";
        }
      } else {
        p362 = p361;
        p361 = undefined;
      }
    } else {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    let v276 = this.length - p360;
    if (p361 === undefined || p361 > v276) {
      p361 = v276;
    }
    if (p359.length > 0 && (p361 < 0 || p360 < 0) || p360 > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    p362 ||= "utf8";
    let v277 = false;
    while (true) {
      switch (p362) {
        case "hex":
          return f125(this, p359, p360, p361);
        case "utf8":
        case "utf-8":
          return f126(this, p359, p360, p361);
        case "ascii":
        case "latin1":
        case "binary":
          return f127(this, p359, p360, p361);
        case "base64":
          return f128(this, p359, p360, p361);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f129(this, p359, p360, p361);
        default:
          if (v277) {
            throw new TypeError("Unknown encoding: " + p362);
          }
          p362 = ("" + p362).toLowerCase();
          v277 = true;
      }
    }
  };
  f107.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function f130(p363, p364, p365) {
    if (p364 === 0 && p365 === p363.length) {
      return vVVF326.fromByteArray(p363);
    } else {
      return vVVF326.fromByteArray(p363.slice(p364, p365));
    }
  }
  function f131(p366, p367, p368) {
    p368 = Math.min(p366.length, p368);
    let v278 = [];
    let vP367 = p367;
    while (vP367 < p368) {
      let v279 = p366[vP367];
      let v280 = null;
      let v281 = v279 > 239 ? 4 : v279 > 223 ? 3 : v279 > 191 ? 2 : 1;
      if (vP367 + v281 <= p368) {
        let v282;
        let v283;
        let v284;
        let v285;
        switch (v281) {
          case 1:
            if (v279 < 128) {
              v280 = v279;
            }
            break;
          case 2:
            v282 = p366[vP367 + 1];
            if ((v282 & 192) === 128) {
              v285 = (v279 & 31) << 6 | v282 & 63;
              if (v285 > 127) {
                v280 = v285;
              }
            }
            break;
          case 3:
            v282 = p366[vP367 + 1];
            v283 = p366[vP367 + 2];
            if ((v282 & 192) === 128 && (v283 & 192) === 128) {
              v285 = (v279 & 15) << 12 | (v282 & 63) << 6 | v283 & 63;
              if (v285 > 2047 && (v285 < 55296 || v285 > 57343)) {
                v280 = v285;
              }
            }
            break;
          case 4:
            v282 = p366[vP367 + 1];
            v283 = p366[vP367 + 2];
            v284 = p366[vP367 + 3];
            if ((v282 & 192) === 128 && (v283 & 192) === 128 && (v284 & 192) === 128) {
              v285 = (v279 & 15) << 18 | (v282 & 63) << 12 | (v283 & 63) << 6 | v284 & 63;
              if (v285 > 65535 && v285 < 1114112) {
                v280 = v285;
              }
            }
        }
      }
      if (v280 === null) {
        v280 = 65533;
        v281 = 1;
      } else if (v280 > 65535) {
        v280 -= 65536;
        v278.push(v280 >>> 10 & 1023 | 55296);
        v280 = v280 & 1023 | 56320;
      }
      v278.push(v280);
      vP367 += v281;
    }
    return f132(v278);
  }
  var v286 = 4096;
  function f132(p369) {
    let v287 = p369.length;
    if (v287 <= v286) {
      return String.fromCharCode.apply(String, p369);
    }
    let v288 = "";
    let v289 = 0;
    while (v289 < v287) {
      v288 += String.fromCharCode.apply(String, p369.slice(v289, v289 += v286));
    }
    return v288;
  }
  function f133(p370, p371, p372) {
    let v290 = "";
    p372 = Math.min(p370.length, p372);
    for (let vP371 = p371; vP371 < p372; ++vP371) {
      v290 += String.fromCharCode(p370[vP371] & 127);
    }
    return v290;
  }
  function f134(p373, p374, p375) {
    let v291 = "";
    p375 = Math.min(p373.length, p375);
    for (let vP374 = p374; vP374 < p375; ++vP374) {
      v291 += String.fromCharCode(p373[vP374]);
    }
    return v291;
  }
  function f135(p376, p377, p378) {
    let v292 = p376.length;
    if (!p377 || p377 < 0) {
      p377 = 0;
    }
    if (!p378 || p378 < 0 || p378 > v292) {
      p378 = v292;
    }
    let v293 = "";
    for (let vP377 = p377; vP377 < p378; ++vP377) {
      v293 += vF12[p376[vP377]];
    }
    return v293;
  }
  function f136(p379, p380, p381) {
    let v294 = p379.slice(p380, p381);
    let v295 = "";
    for (let v296 = 0; v296 < v294.length - 1; v296 += 2) {
      v295 += String.fromCharCode(v294[v296] + v294[v296 + 1] * 256);
    }
    return v295;
  }
  f107.prototype.slice = function (p382, p383) {
    let v297 = this.length;
    p382 = ~~p382;
    p383 = p383 === undefined ? v297 : ~~p383;
    if (p382 < 0) {
      p382 += v297;
      if (p382 < 0) {
        p382 = 0;
      }
    } else if (p382 > v297) {
      p382 = v297;
    }
    if (p383 < 0) {
      p383 += v297;
      if (p383 < 0) {
        p383 = 0;
      }
    } else if (p383 > v297) {
      p383 = v297;
    }
    if (p383 < p382) {
      p383 = p382;
    }
    let v298 = this.subarray(p382, p383);
    Object.setPrototypeOf(v298, f107.prototype);
    return v298;
  };
  function f137(p384, p385, p386) {
    if (p384 % 1 !== 0 || p384 < 0) {
      throw new RangeError("offset is not uint");
    }
    if (p384 + p385 > p386) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  f107.prototype.readUintLE = f107.prototype.readUIntLE = function (p387, p388, p389) {
    p387 = p387 >>> 0;
    p388 = p388 >>> 0;
    if (!p389) {
      f137(p387, p388, this.length);
    }
    let v299 = this[p387];
    let v300 = 1;
    let v301 = 0;
    while (++v301 < p388 && (v300 *= 256)) {
      v299 += this[p387 + v301] * v300;
    }
    return v299;
  };
  f107.prototype.readUintBE = f107.prototype.readUIntBE = function (p390, p391, p392) {
    p390 = p390 >>> 0;
    p391 = p391 >>> 0;
    if (!p392) {
      f137(p390, p391, this.length);
    }
    let v302 = this[p390 + --p391];
    let v303 = 1;
    while (p391 > 0 && (v303 *= 256)) {
      v302 += this[p390 + --p391] * v303;
    }
    return v302;
  };
  f107.prototype.readUint8 = f107.prototype.readUInt8 = function (p393, p394) {
    p393 = p393 >>> 0;
    if (!p394) {
      f137(p393, 1, this.length);
    }
    return this[p393];
  };
  f107.prototype.readUint16LE = f107.prototype.readUInt16LE = function (p395, p396) {
    p395 = p395 >>> 0;
    if (!p396) {
      f137(p395, 2, this.length);
    }
    return this[p395] | this[p395 + 1] << 8;
  };
  f107.prototype.readUint16BE = f107.prototype.readUInt16BE = function (p397, p398) {
    p397 = p397 >>> 0;
    if (!p398) {
      f137(p397, 2, this.length);
    }
    return this[p397] << 8 | this[p397 + 1];
  };
  f107.prototype.readUint32LE = f107.prototype.readUInt32LE = function (p399, p400) {
    p399 = p399 >>> 0;
    if (!p400) {
      f137(p399, 4, this.length);
    }
    return (this[p399] | this[p399 + 1] << 8 | this[p399 + 2] << 16) + this[p399 + 3] * 16777216;
  };
  f107.prototype.readUint32BE = f107.prototype.readUInt32BE = function (p401, p402) {
    p401 = p401 >>> 0;
    if (!p402) {
      f137(p401, 4, this.length);
    }
    return this[p401] * 16777216 + (this[p401 + 1] << 16 | this[p401 + 2] << 8 | this[p401 + 3]);
  };
  f107.prototype.readBigUInt64LE = f158(function (p403) {
    p403 = p403 >>> 0;
    f148(p403, "offset");
    let v304 = this[p403];
    let v305 = this[p403 + 7];
    if (v304 === undefined || v305 === undefined) {
      f149(p403, this.length - 8);
    }
    let v306 = v304 + this[++p403] * 256 + this[++p403] * 65536 + this[++p403] * 16777216;
    let v307 = this[++p403] + this[++p403] * 256 + this[++p403] * 65536 + v305 * 16777216;
    return BigInt(v306) + (BigInt(v307) << BigInt(32));
  });
  f107.prototype.readBigUInt64BE = f158(function (p404) {
    p404 = p404 >>> 0;
    f148(p404, "offset");
    let v308 = this[p404];
    let v309 = this[p404 + 7];
    if (v308 === undefined || v309 === undefined) {
      f149(p404, this.length - 8);
    }
    let v310 = v308 * 16777216 + this[++p404] * 65536 + this[++p404] * 256 + this[++p404];
    let v311 = this[++p404] * 16777216 + this[++p404] * 65536 + this[++p404] * 256 + v309;
    return (BigInt(v310) << BigInt(32)) + BigInt(v311);
  });
  f107.prototype.readIntLE = function (p405, p406, p407) {
    p405 = p405 >>> 0;
    p406 = p406 >>> 0;
    if (!p407) {
      f137(p405, p406, this.length);
    }
    let v312 = this[p405];
    let v313 = 1;
    let v314 = 0;
    while (++v314 < p406 && (v313 *= 256)) {
      v312 += this[p405 + v314] * v313;
    }
    v313 *= 128;
    if (v312 >= v313) {
      v312 -= Math.pow(2, p406 * 8);
    }
    return v312;
  };
  f107.prototype.readIntBE = function (p408, p409, p410) {
    p408 = p408 >>> 0;
    p409 = p409 >>> 0;
    if (!p410) {
      f137(p408, p409, this.length);
    }
    let vP409 = p409;
    let v315 = 1;
    let v316 = this[p408 + --vP409];
    while (vP409 > 0 && (v315 *= 256)) {
      v316 += this[p408 + --vP409] * v315;
    }
    v315 *= 128;
    if (v316 >= v315) {
      v316 -= Math.pow(2, p409 * 8);
    }
    return v316;
  };
  f107.prototype.readInt8 = function (p411, p412) {
    p411 = p411 >>> 0;
    if (!p412) {
      f137(p411, 1, this.length);
    }
    if (this[p411] & 128) {
      return (255 - this[p411] + 1) * -1;
    } else {
      return this[p411];
    }
  };
  f107.prototype.readInt16LE = function (p413, p414) {
    p413 = p413 >>> 0;
    if (!p414) {
      f137(p413, 2, this.length);
    }
    let v317 = this[p413] | this[p413 + 1] << 8;
    if (v317 & 32768) {
      return v317 | 4294901760;
    } else {
      return v317;
    }
  };
  f107.prototype.readInt16BE = function (p415, p416) {
    p415 = p415 >>> 0;
    if (!p416) {
      f137(p415, 2, this.length);
    }
    let v318 = this[p415 + 1] | this[p415] << 8;
    if (v318 & 32768) {
      return v318 | 4294901760;
    } else {
      return v318;
    }
  };
  f107.prototype.readInt32LE = function (p417, p418) {
    p417 = p417 >>> 0;
    if (!p418) {
      f137(p417, 4, this.length);
    }
    return this[p417] | this[p417 + 1] << 8 | this[p417 + 2] << 16 | this[p417 + 3] << 24;
  };
  f107.prototype.readInt32BE = function (p419, p420) {
    p419 = p419 >>> 0;
    if (!p420) {
      f137(p419, 4, this.length);
    }
    return this[p419] << 24 | this[p419 + 1] << 16 | this[p419 + 2] << 8 | this[p419 + 3];
  };
  f107.prototype.readBigInt64LE = f158(function (p421) {
    p421 = p421 >>> 0;
    f148(p421, "offset");
    let v319 = this[p421];
    let v320 = this[p421 + 7];
    if (v319 === undefined || v320 === undefined) {
      f149(p421, this.length - 8);
    }
    let v321 = this[p421 + 4] + this[p421 + 5] * 256 + this[p421 + 6] * 65536 + (v320 << 24);
    return (BigInt(v321) << BigInt(32)) + BigInt(v319 + this[++p421] * 256 + this[++p421] * 65536 + this[++p421] * 16777216);
  });
  f107.prototype.readBigInt64BE = f158(function (p422) {
    p422 = p422 >>> 0;
    f148(p422, "offset");
    let v322 = this[p422];
    let v323 = this[p422 + 7];
    if (v322 === undefined || v323 === undefined) {
      f149(p422, this.length - 8);
    }
    let v324 = (v322 << 24) + this[++p422] * 65536 + this[++p422] * 256 + this[++p422];
    return (BigInt(v324) << BigInt(32)) + BigInt(this[++p422] * 16777216 + this[++p422] * 65536 + this[++p422] * 256 + v323);
  });
  f107.prototype.readFloatLE = function (p423, p424) {
    p423 = p423 >>> 0;
    if (!p424) {
      f137(p423, 4, this.length);
    }
    return vVVF327.read(this, p423, true, 23, 4);
  };
  f107.prototype.readFloatBE = function (p425, p426) {
    p425 = p425 >>> 0;
    if (!p426) {
      f137(p425, 4, this.length);
    }
    return vVVF327.read(this, p425, false, 23, 4);
  };
  f107.prototype.readDoubleLE = function (p427, p428) {
    p427 = p427 >>> 0;
    if (!p428) {
      f137(p427, 8, this.length);
    }
    return vVVF327.read(this, p427, true, 52, 8);
  };
  f107.prototype.readDoubleBE = function (p429, p430) {
    p429 = p429 >>> 0;
    if (!p430) {
      f137(p429, 8, this.length);
    }
    return vVVF327.read(this, p429, false, 52, 8);
  };
  function f138(p431, p432, p433, p434, p435, p436) {
    if (!f107.isBuffer(p431)) {
      throw new TypeError("\"buffer\" argument must be a Buffer instance");
    }
    if (p432 > p435 || p432 < p436) {
      throw new RangeError("\"value\" argument is out of bounds");
    }
    if (p433 + p434 > p431.length) {
      throw new RangeError("Index out of range");
    }
  }
  f107.prototype.writeUintLE = f107.prototype.writeUIntLE = function (p437, p438, p439, p440) {
    p437 = +p437;
    p438 = p438 >>> 0;
    p439 = p439 >>> 0;
    if (!p440) {
      let v325 = Math.pow(2, p439 * 8) - 1;
      f138(this, p437, p438, p439, v325, 0);
    }
    let v326 = 1;
    let v327 = 0;
    for (this[p438] = p437 & 255; ++v327 < p439 && (v326 *= 256);) {
      this[p438 + v327] = p437 / v326 & 255;
    }
    return p438 + p439;
  };
  f107.prototype.writeUintBE = f107.prototype.writeUIntBE = function (p441, p442, p443, p444) {
    p441 = +p441;
    p442 = p442 >>> 0;
    p443 = p443 >>> 0;
    if (!p444) {
      let v328 = Math.pow(2, p443 * 8) - 1;
      f138(this, p441, p442, p443, v328, 0);
    }
    let v329 = p443 - 1;
    let v330 = 1;
    for (this[p442 + v329] = p441 & 255; --v329 >= 0 && (v330 *= 256);) {
      this[p442 + v329] = p441 / v330 & 255;
    }
    return p442 + p443;
  };
  f107.prototype.writeUint8 = f107.prototype.writeUInt8 = function (p445, p446, p447) {
    p445 = +p445;
    p446 = p446 >>> 0;
    if (!p447) {
      f138(this, p445, p446, 1, 255, 0);
    }
    this[p446] = p445 & 255;
    return p446 + 1;
  };
  f107.prototype.writeUint16LE = f107.prototype.writeUInt16LE = function (p448, p449, p450) {
    p448 = +p448;
    p449 = p449 >>> 0;
    if (!p450) {
      f138(this, p448, p449, 2, 65535, 0);
    }
    this[p449] = p448 & 255;
    this[p449 + 1] = p448 >>> 8;
    return p449 + 2;
  };
  f107.prototype.writeUint16BE = f107.prototype.writeUInt16BE = function (p451, p452, p453) {
    p451 = +p451;
    p452 = p452 >>> 0;
    if (!p453) {
      f138(this, p451, p452, 2, 65535, 0);
    }
    this[p452] = p451 >>> 8;
    this[p452 + 1] = p451 & 255;
    return p452 + 2;
  };
  f107.prototype.writeUint32LE = f107.prototype.writeUInt32LE = function (p454, p455, p456) {
    p454 = +p454;
    p455 = p455 >>> 0;
    if (!p456) {
      f138(this, p454, p455, 4, 4294967295, 0);
    }
    this[p455 + 3] = p454 >>> 24;
    this[p455 + 2] = p454 >>> 16;
    this[p455 + 1] = p454 >>> 8;
    this[p455] = p454 & 255;
    return p455 + 4;
  };
  f107.prototype.writeUint32BE = f107.prototype.writeUInt32BE = function (p457, p458, p459) {
    p457 = +p457;
    p458 = p458 >>> 0;
    if (!p459) {
      f138(this, p457, p458, 4, 4294967295, 0);
    }
    this[p458] = p457 >>> 24;
    this[p458 + 1] = p457 >>> 16;
    this[p458 + 2] = p457 >>> 8;
    this[p458 + 3] = p457 & 255;
    return p458 + 4;
  };
  function f139(p460, p461, p462, p463, p464) {
    f147(p461, p463, p464, p460, p462, 7);
    let vNumber = Number(p461 & BigInt(4294967295));
    p460[p462++] = vNumber;
    vNumber = vNumber >> 8;
    p460[p462++] = vNumber;
    vNumber = vNumber >> 8;
    p460[p462++] = vNumber;
    vNumber = vNumber >> 8;
    p460[p462++] = vNumber;
    let vNumber2 = Number(p461 >> BigInt(32) & BigInt(4294967295));
    p460[p462++] = vNumber2;
    vNumber2 = vNumber2 >> 8;
    p460[p462++] = vNumber2;
    vNumber2 = vNumber2 >> 8;
    p460[p462++] = vNumber2;
    vNumber2 = vNumber2 >> 8;
    p460[p462++] = vNumber2;
    return p462;
  }
  function f140(p465, p466, p467, p468, p469) {
    f147(p466, p468, p469, p465, p467, 7);
    let vNumber3 = Number(p466 & BigInt(4294967295));
    p465[p467 + 7] = vNumber3;
    vNumber3 = vNumber3 >> 8;
    p465[p467 + 6] = vNumber3;
    vNumber3 = vNumber3 >> 8;
    p465[p467 + 5] = vNumber3;
    vNumber3 = vNumber3 >> 8;
    p465[p467 + 4] = vNumber3;
    let vNumber4 = Number(p466 >> BigInt(32) & BigInt(4294967295));
    p465[p467 + 3] = vNumber4;
    vNumber4 = vNumber4 >> 8;
    p465[p467 + 2] = vNumber4;
    vNumber4 = vNumber4 >> 8;
    p465[p467 + 1] = vNumber4;
    vNumber4 = vNumber4 >> 8;
    p465[p467] = vNumber4;
    return p467 + 8;
  }
  f107.prototype.writeBigUInt64LE = f158(function (p470, p471 = 0) {
    return f139(this, p470, p471, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  f107.prototype.writeBigUInt64BE = f158(function (p472, p473 = 0) {
    return f140(this, p472, p473, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  f107.prototype.writeIntLE = function (p474, p475, p476, p477) {
    p474 = +p474;
    p475 = p475 >>> 0;
    if (!p477) {
      let v331 = Math.pow(2, p476 * 8 - 1);
      f138(this, p474, p475, p476, v331 - 1, -v331);
    }
    let v332 = 0;
    let v333 = 1;
    let v334 = 0;
    for (this[p475] = p474 & 255; ++v332 < p476 && (v333 *= 256);) {
      if (p474 < 0 && v334 === 0 && this[p475 + v332 - 1] !== 0) {
        v334 = 1;
      }
      this[p475 + v332] = (p474 / v333 >> 0) - v334 & 255;
    }
    return p475 + p476;
  };
  f107.prototype.writeIntBE = function (p478, p479, p480, p481) {
    p478 = +p478;
    p479 = p479 >>> 0;
    if (!p481) {
      let v335 = Math.pow(2, p480 * 8 - 1);
      f138(this, p478, p479, p480, v335 - 1, -v335);
    }
    let v336 = p480 - 1;
    let v337 = 1;
    let v338 = 0;
    for (this[p479 + v336] = p478 & 255; --v336 >= 0 && (v337 *= 256);) {
      if (p478 < 0 && v338 === 0 && this[p479 + v336 + 1] !== 0) {
        v338 = 1;
      }
      this[p479 + v336] = (p478 / v337 >> 0) - v338 & 255;
    }
    return p479 + p480;
  };
  f107.prototype.writeInt8 = function (p482, p483, p484) {
    p482 = +p482;
    p483 = p483 >>> 0;
    if (!p484) {
      f138(this, p482, p483, 1, 127, -128);
    }
    if (p482 < 0) {
      p482 = 255 + p482 + 1;
    }
    this[p483] = p482 & 255;
    return p483 + 1;
  };
  f107.prototype.writeInt16LE = function (p485, p486, p487) {
    p485 = +p485;
    p486 = p486 >>> 0;
    if (!p487) {
      f138(this, p485, p486, 2, 32767, -32768);
    }
    this[p486] = p485 & 255;
    this[p486 + 1] = p485 >>> 8;
    return p486 + 2;
  };
  f107.prototype.writeInt16BE = function (p488, p489, p490) {
    p488 = +p488;
    p489 = p489 >>> 0;
    if (!p490) {
      f138(this, p488, p489, 2, 32767, -32768);
    }
    this[p489] = p488 >>> 8;
    this[p489 + 1] = p488 & 255;
    return p489 + 2;
  };
  f107.prototype.writeInt32LE = function (p491, p492, p493) {
    p491 = +p491;
    p492 = p492 >>> 0;
    if (!p493) {
      f138(this, p491, p492, 4, 2147483647, -2147483648);
    }
    this[p492] = p491 & 255;
    this[p492 + 1] = p491 >>> 8;
    this[p492 + 2] = p491 >>> 16;
    this[p492 + 3] = p491 >>> 24;
    return p492 + 4;
  };
  f107.prototype.writeInt32BE = function (p494, p495, p496) {
    p494 = +p494;
    p495 = p495 >>> 0;
    if (!p496) {
      f138(this, p494, p495, 4, 2147483647, -2147483648);
    }
    if (p494 < 0) {
      p494 = 4294967295 + p494 + 1;
    }
    this[p495] = p494 >>> 24;
    this[p495 + 1] = p494 >>> 16;
    this[p495 + 2] = p494 >>> 8;
    this[p495 + 3] = p494 & 255;
    return p495 + 4;
  };
  f107.prototype.writeBigInt64LE = f158(function (p497, p498 = 0) {
    return f139(this, p497, p498, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  f107.prototype.writeBigInt64BE = f158(function (p499, p500 = 0) {
    return f140(this, p499, p500, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function f141(p501, p502, p503, p504, p505, p506) {
    if (p503 + p504 > p501.length) {
      throw new RangeError("Index out of range");
    }
    if (p503 < 0) {
      throw new RangeError("Index out of range");
    }
  }
  function f142(p507, p508, p509, p510, p511) {
    p508 = +p508;
    p509 = p509 >>> 0;
    if (!p511) {
      f141(p507, p508, p509, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    vVVF327.write(p507, p508, p509, p510, 23, 4);
    return p509 + 4;
  }
  f107.prototype.writeFloatLE = function (p512, p513, p514) {
    return f142(this, p512, p513, true, p514);
  };
  f107.prototype.writeFloatBE = function (p515, p516, p517) {
    return f142(this, p515, p516, false, p517);
  };
  function f143(p518, p519, p520, p521, p522) {
    p519 = +p519;
    p520 = p520 >>> 0;
    if (!p522) {
      f141(p518, p519, p520, 8, 1.7976931348623157e+308, -1.7976931348623157e+308);
    }
    vVVF327.write(p518, p519, p520, p521, 52, 8);
    return p520 + 8;
  }
  f107.prototype.writeDoubleLE = function (p523, p524, p525) {
    return f143(this, p523, p524, true, p525);
  };
  f107.prototype.writeDoubleBE = function (p526, p527, p528) {
    return f143(this, p526, p527, false, p528);
  };
  f107.prototype.copy = function (p529, p530, p531, p532) {
    if (!f107.isBuffer(p529)) {
      throw new TypeError("argument should be a Buffer");
    }
    p531 ||= 0;
    if (!p532 && p532 !== 0) {
      p532 = this.length;
    }
    if (p530 >= p529.length) {
      p530 = p529.length;
    }
    p530 ||= 0;
    if (p532 > 0 && p532 < p531) {
      p532 = p531;
    }
    if (p532 === p531 || p529.length === 0 || this.length === 0) {
      return 0;
    }
    if (p530 < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (p531 < 0 || p531 >= this.length) {
      throw new RangeError("Index out of range");
    }
    if (p532 < 0) {
      throw new RangeError("sourceEnd out of bounds");
    }
    if (p532 > this.length) {
      p532 = this.length;
    }
    if (p529.length - p530 < p532 - p531) {
      p532 = p529.length - p530 + p531;
    }
    let v339 = p532 - p531;
    if (this === p529 && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(p530, p531, p532);
    } else {
      Uint8Array.prototype.set.call(p529, this.subarray(p531, p532), p530);
    }
    return v339;
  };
  f107.prototype.fill = function (p533, p534, p535, p536) {
    if (typeof p533 == "string") {
      if (typeof p534 == "string") {
        p536 = p534;
        p534 = 0;
        p535 = this.length;
      } else if (typeof p535 == "string") {
        p536 = p535;
        p535 = this.length;
      }
      if (p536 !== undefined && typeof p536 != "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof p536 == "string" && !f107.isEncoding(p536)) {
        throw new TypeError("Unknown encoding: " + p536);
      }
      if (p533.length === 1) {
        let v340 = p533.charCodeAt(0);
        if (p536 === "utf8" && v340 < 128 || p536 === "latin1") {
          p533 = v340;
        }
      }
    } else if (typeof p533 == "number") {
      p533 = p533 & 255;
    } else if (typeof p533 == "boolean") {
      p533 = Number(p533);
    }
    if (p534 < 0 || this.length < p534 || this.length < p535) {
      throw new RangeError("Out of range index");
    }
    if (p535 <= p534) {
      return this;
    }
    p534 = p534 >>> 0;
    p535 = p535 === undefined ? this.length : p535 >>> 0;
    p533 ||= 0;
    let v341;
    if (typeof p533 == "number") {
      for (v341 = p534; v341 < p535; ++v341) {
        this[v341] = p533;
      }
    } else {
      let v342 = f107.isBuffer(p533) ? p533 : f107.from(p533, p536);
      let v343 = v342.length;
      if (v343 === 0) {
        throw new TypeError("The value \"" + p533 + "\" is invalid for argument \"value\"");
      }
      for (v341 = 0; v341 < p535 - p534; ++v341) {
        this[v341 + p534] = v342[v341 % v343];
      }
    }
    return this;
  };
  var v344 = {};
  function f144(p537, p538, p539) {
    v344[p537] = class extends p539 {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: p538.apply(this, arguments),
          writable: true,
          configurable: true
        });
        this.name = this.name + " [" + p537 + "]";
        this.stack;
        delete this.name;
      }
      get code() {
        return p537;
      }
      set code(p540) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value: p540,
          writable: true
        });
      }
      toString() {
        return this.name + " [" + p537 + "]: " + this.message;
      }
    };
  }
  f144("ERR_BUFFER_OUT_OF_BOUNDS", function (p541) {
    if (p541) {
      return p541 + " is outside of buffer bounds";
    } else {
      return "Attempt to access memory outside buffer bounds";
    }
  }, RangeError);
  f144("ERR_INVALID_ARG_TYPE", function (p542, p543) {
    return "The \"" + p542 + "\" argument must be of type number. Received type " + typeof p543;
  }, TypeError);
  f144("ERR_OUT_OF_RANGE", function (p544, p545, p546) {
    let v345 = "The value of \"" + p544 + "\" is out of range.";
    let vP546 = p546;
    if (Number.isInteger(p546) && Math.abs(p546) > 4294967296) {
      vP546 = f145(String(p546));
    } else if (typeof p546 == "bigint") {
      vP546 = String(p546);
      if (p546 > BigInt(2) ** BigInt(32) || p546 < -(BigInt(2) ** BigInt(32))) {
        vP546 = f145(vP546);
      }
      vP546 += "n";
    }
    v345 += " It must be " + p545 + ". Received " + vP546;
    return v345;
  }, RangeError);
  function f145(p547) {
    let v346 = "";
    let v347 = p547.length;
    let v348 = p547[0] === "-" ? 1 : 0;
    for (; v347 >= v348 + 4; v347 -= 3) {
      v346 = "_" + p547.slice(v347 - 3, v347) + v346;
    }
    return "" + p547.slice(0, v347) + v346;
  }
  function f146(p548, p549, p550) {
    f148(p549, "offset");
    if (p548[p549] === undefined || p548[p549 + p550] === undefined) {
      f149(p549, p548.length - (p550 + 1));
    }
  }
  function f147(p551, p552, p553, p554, p555, p556) {
    if (p551 > p553 || p551 < p552) {
      let v349 = typeof p552 == "bigint" ? "n" : "";
      let v350;
      if (p556 > 3) {
        if (p552 === 0 || p552 === BigInt(0)) {
          v350 = ">= 0" + v349 + " and < 2" + v349 + " ** " + (p556 + 1) * 8 + v349;
        } else {
          v350 = ">= -(2" + v349 + " ** " + ((p556 + 1) * 8 - 1) + v349 + ") and < 2 ** " + ((p556 + 1) * 8 - 1) + v349;
        }
      } else {
        v350 = ">= " + p552 + v349 + " and <= " + p553 + v349;
      }
      throw new v344.ERR_OUT_OF_RANGE("value", v350, p551);
    }
    f146(p554, p555, p556);
  }
  function f148(p557, p558) {
    if (typeof p557 != "number") {
      throw new v344.ERR_INVALID_ARG_TYPE(p558, "number", p557);
    }
  }
  function f149(p559, p560, p561) {
    throw Math.floor(p559) !== p559 ? (f148(p559, p561), new v344.ERR_OUT_OF_RANGE(p561 || "offset", "an integer", p559)) : p560 < 0 ? new v344.ERR_BUFFER_OUT_OF_BOUNDS() : new v344.ERR_OUT_OF_RANGE(p561 || "offset", ">= " + (p561 ? 1 : 0) + " and <= " + p560, p559);
  }
  var v351 = /[^+/0-9A-Za-z-_]/g;
  function f150(p562) {
    p562 = p562.split("=")[0];
    p562 = p562.trim().replace(v351, "");
    if (p562.length < 2) {
      return "";
    }
    while (p562.length % 4 !== 0) {
      p562 = p562 + "=";
    }
    return p562;
  }
  function f151(p563, p564) {
    p564 = p564 || Infinity;
    let v352;
    let v353 = p563.length;
    let v354 = null;
    let v355 = [];
    for (let v356 = 0; v356 < v353; ++v356) {
      v352 = p563.charCodeAt(v356);
      if (v352 > 55295 && v352 < 57344) {
        if (!v354) {
          if (v352 > 56319) {
            if ((p564 -= 3) > -1) {
              v355.push(239, 191, 189);
            }
            continue;
          } else if (v356 + 1 === v353) {
            if ((p564 -= 3) > -1) {
              v355.push(239, 191, 189);
            }
            continue;
          }
          v354 = v352;
          continue;
        }
        if (v352 < 56320) {
          if ((p564 -= 3) > -1) {
            v355.push(239, 191, 189);
          }
          v354 = v352;
          continue;
        }
        v352 = (v354 - 55296 << 10 | v352 - 56320) + 65536;
      } else if (v354 && (p564 -= 3) > -1) {
        v355.push(239, 191, 189);
      }
      v354 = null;
      if (v352 < 128) {
        if ((p564 -= 1) < 0) {
          break;
        }
        v355.push(v352);
      } else if (v352 < 2048) {
        if ((p564 -= 2) < 0) {
          break;
        }
        v355.push(v352 >> 6 | 192, v352 & 63 | 128);
      } else if (v352 < 65536) {
        if ((p564 -= 3) < 0) {
          break;
        }
        v355.push(v352 >> 12 | 224, v352 >> 6 & 63 | 128, v352 & 63 | 128);
      } else if (v352 < 1114112) {
        if ((p564 -= 4) < 0) {
          break;
        }
        v355.push(v352 >> 18 | 240, v352 >> 12 & 63 | 128, v352 >> 6 & 63 | 128, v352 & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return v355;
  }
  function f152(p565) {
    let v357 = [];
    for (let v358 = 0; v358 < p565.length; ++v358) {
      v357.push(p565.charCodeAt(v358) & 255);
    }
    return v357;
  }
  function f153(p566, p567) {
    let v359;
    let v360;
    let v361;
    let v362 = [];
    for (let v363 = 0; v363 < p566.length && !((p567 -= 2) < 0); ++v363) {
      v359 = p566.charCodeAt(v363);
      v360 = v359 >> 8;
      v361 = v359 % 256;
      v362.push(v361);
      v362.push(v360);
    }
    return v362;
  }
  function f154(p568) {
    return vVVF326.toByteArray(f150(p568));
  }
  function f155(p569, p570, p571, p572) {
    let v364;
    for (v364 = 0; v364 < p572 && !(v364 + p571 >= p570.length) && !(v364 >= p569.length); ++v364) {
      p570[v364 + p571] = p569[v364];
    }
    return v364;
  }
  function f156(p573, p574) {
    return p573 instanceof p574 || p573 != null && p573.constructor != null && p573.constructor.name != null && p573.constructor.name === p574.name;
  }
  function f157(p575) {
    return p575 !== p575;
  }
  var vF12 = function () {
    let v365 = "0123456789abcdef";
    let v366 = new Array(256);
    for (let v367 = 0; v367 < 16; ++v367) {
      let v368 = v367 * 16;
      for (let v369 = 0; v369 < 16; ++v369) {
        v366[v368 + v369] = v365[v367] + v365[v369];
      }
    }
    return v366;
  }();
  function f158(p576) {
    if (typeof BigInt === "undefined") {
      return f159;
    } else {
      return p576;
    }
  }
  function f159() {
    throw new Error("BigInt not supported");
  }
});
var v370 = {};
vF4(v370, {
  Buffer: () => v372,
  constants: () => v373,
  default: () => v374
});
var v371;
var v372;
var v373;
var v374;
var vVF2 = vF2(() => {
  v371 = vF7(vVF328());
  vF6(v370, vF7(vVF328()));
  v372 = v371.Buffer;
  v372.prototype.copy = function (p577, p578, p579, p580) {
    if (!(p577 instanceof Uint8Array)) {
      throw new TypeError("argument should be a Buffer");
    }
    p579 ||= 0;
    if (!p580 && p580 !== 0) {
      p580 = this.length;
    }
    if (p578 >= p577.length) {
      p578 = p577.length;
    }
    p578 ||= 0;
    if (p580 > 0 && p580 < p579) {
      p580 = p579;
    }
    if (p580 === p579 || p577.length === 0 || this.length === 0) {
      return 0;
    }
    if (p578 < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (p579 < 0 || p579 >= this.length) {
      throw new RangeError("Index out of range");
    }
    if (p580 < 0) {
      throw new RangeError("sourceEnd out of bounds");
    }
    if (p580 > this.length) {
      p580 = this.length;
    }
    if (p577.length - p578 < p580 - p579) {
      p580 = p577.length - p578 + p579;
    }
    let v375 = p580 - p579;
    if (this === p577 && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(p578, p579, p580);
    } else {
      Uint8Array.prototype.set.call(p577, this.subarray(p579, p580), p578);
    }
    return v375;
  };
  Object.defineProperties(v372, {
    TextEncoder: {
      value: self.TextEncoder
    },
    TextDecoder: {
      value: self.TextDecoder
    }
  });
  v373 = {
    MAX_LENGTH: 4294967296,
    MAX_STRING_LENGTH: 536870888
  };
  Object.defineProperties(v371, {
    constants: {
      value: v373
    }
  });
  v374 = v371;
});
var vVF329 = vF3(p581 => {
  Object.defineProperty(p581, "__esModule", {
    value: true
  });
  p581.createDeferredExecutor = undefined;
  function f160() {
    let vF13 = (p582, p583) => {
      vF13.state = "pending";
      vF13.resolve = p584 => {
        if (vF13.state !== "pending") {
          return;
        }
        vF13.result = p584;
        let vF14 = p585 => {
          vF13.state = "fulfilled";
          return p585;
        };
        return p582(p584 instanceof Promise ? p584 : Promise.resolve(p584).then(vF14));
      };
      vF13.reject = p586 => {
        if (vF13.state === "pending") {
          queueMicrotask(() => {
            vF13.state = "rejected";
          });
          return p583(vF13.rejectionReason = p586);
        }
      };
    };
    return vF13;
  }
  p581.createDeferredExecutor = f160;
});
var vVF330 = vF3(p587 => {
  Object.defineProperty(p587, "__esModule", {
    value: true
  });
  p587.DeferredPromise = undefined;
  var vVVF329 = vVF329();
  var vC = class extends Promise {
    #e;
    resolve;
    reject;
    constructor(p588 = null) {
      let v376 = (0, vVVF329.createDeferredExecutor)();
      super((p589, p590) => {
        v376(p589, p590);
        p588?.(v376.resolve, v376.reject);
      });
      this.#e = v376;
      this.resolve = this.#e.resolve;
      this.reject = this.#e.reject;
    }
    get state() {
      return this.#e.state;
    }
    get rejectionReason() {
      return this.#e.rejectionReason;
    }
    then(p591, p592) {
      return this.#t(super.then(p591, p592));
    }
    catch(p593) {
      return this.#t(super.catch(p593));
    }
    finally(p594) {
      return this.#t(super.finally(p594));
    }
    #t(p595) {
      return Object.defineProperties(p595, {
        resolve: {
          configurable: true,
          value: this.resolve
        },
        reject: {
          configurable: true,
          value: this.reject
        }
      });
    }
  };
  p587.DeferredPromise = vC;
});
var vVF331 = vF3(p596 => {
  var v377 = p596 && p596.__createBinding || (Object.create ? function (p597, p598, p599, p600 = p599) {
    var v378 = Object.getOwnPropertyDescriptor(p598, p599);
    if (!v378 || ("get" in v378 ? !p598.__esModule : v378.writable || v378.configurable)) {
      v378 = {
        enumerable: true,
        get: function () {
          return p598[p599];
        }
      };
    }
    Object.defineProperty(p597, p600, v378);
  } : function (p601, p602, p603, p604 = p603) {
    p601[p604] = p602[p603];
  });
  var v379 = p596 && p596.__exportStar || function (p605, p606) {
    for (var v380 in p605) {
      if (v380 !== "default" && !Object.prototype.hasOwnProperty.call(p606, v380)) {
        v377(p606, p605, v380);
      }
    }
  };
  Object.defineProperty(p596, "__esModule", {
    value: true
  });
  v379(vVF329(), p596);
  v379(vVF330(), p596);
});
var vVF332 = vF3((p607, p608) => {
  var v381 = "2.0.0";
  var v382 = 256;
  var v383 = Number.MAX_SAFE_INTEGER || 9007199254740991;
  var v384 = 16;
  p608.exports = {
    SEMVER_SPEC_VERSION: v381,
    MAX_LENGTH: v382,
    MAX_SAFE_INTEGER: v383,
    MAX_SAFE_COMPONENT_LENGTH: v384
  };
});
var vVF333 = vF3((p609, p610) => {
  var v385 = typeof process == "object" && process.env && "false" && /\bsemver\b/i.test("false") ? (..._0x52dccf) => console.error("SEMVER", ..._0x52dccf) : () => {};
  p610.exports = v385;
});
var vVF334 = vF3((p611, p612) => {
  var {
    MAX_SAFE_COMPONENT_LENGTH: _0x2fec44
  } = vVF332();
  var vVVF333 = vVF333();
  p611 = p612.exports = {};
  var v386 = p611.re = [];
  var v387 = p611.src = [];
  var v388 = p611.t = {};
  var v389 = 0;
  var vF15 = (p613, p614, p615) => {
    let v390 = v389++;
    vVVF333(p613, v390, p614);
    v388[p613] = v390;
    v387[v390] = p614;
    v386[v390] = new RegExp(p614, p615 ? "g" : undefined);
  };
  vF15("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  vF15("NUMERICIDENTIFIERLOOSE", "[0-9]+");
  vF15("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
  vF15("MAINVERSION", "(" + v387[v388.NUMERICIDENTIFIER] + ")\\.(" + v387[v388.NUMERICIDENTIFIER] + ")\\.(" + v387[v388.NUMERICIDENTIFIER] + ")");
  vF15("MAINVERSIONLOOSE", "(" + v387[v388.NUMERICIDENTIFIERLOOSE] + ")\\.(" + v387[v388.NUMERICIDENTIFIERLOOSE] + ")\\.(" + v387[v388.NUMERICIDENTIFIERLOOSE] + ")");
  vF15("PRERELEASEIDENTIFIER", "(?:" + v387[v388.NUMERICIDENTIFIER] + "|" + v387[v388.NONNUMERICIDENTIFIER] + ")");
  vF15("PRERELEASEIDENTIFIERLOOSE", "(?:" + v387[v388.NUMERICIDENTIFIERLOOSE] + "|" + v387[v388.NONNUMERICIDENTIFIER] + ")");
  vF15("PRERELEASE", "(?:-(" + v387[v388.PRERELEASEIDENTIFIER] + "(?:\\." + v387[v388.PRERELEASEIDENTIFIER] + ")*))");
  vF15("PRERELEASELOOSE", "(?:-?(" + v387[v388.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + v387[v388.PRERELEASEIDENTIFIERLOOSE] + ")*))");
  vF15("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
  vF15("BUILD", "(?:\\+(" + v387[v388.BUILDIDENTIFIER] + "(?:\\." + v387[v388.BUILDIDENTIFIER] + ")*))");
  vF15("FULLPLAIN", "v?" + v387[v388.MAINVERSION] + v387[v388.PRERELEASE] + "?" + v387[v388.BUILD] + "?");
  vF15("FULL", "^" + v387[v388.FULLPLAIN] + "$");
  vF15("LOOSEPLAIN", "[v=\\s]*" + v387[v388.MAINVERSIONLOOSE] + v387[v388.PRERELEASELOOSE] + "?" + v387[v388.BUILD] + "?");
  vF15("LOOSE", "^" + v387[v388.LOOSEPLAIN] + "$");
  vF15("GTLT", "((?:<|>)?=?)");
  vF15("XRANGEIDENTIFIERLOOSE", v387[v388.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*");
  vF15("XRANGEIDENTIFIER", v387[v388.NUMERICIDENTIFIER] + "|x|X|\\*");
  vF15("XRANGEPLAIN", "[v=\\s]*(" + v387[v388.XRANGEIDENTIFIER] + ")(?:\\.(" + v387[v388.XRANGEIDENTIFIER] + ")(?:\\.(" + v387[v388.XRANGEIDENTIFIER] + ")(?:" + v387[v388.PRERELEASE] + ")?" + v387[v388.BUILD] + "?)?)?");
  vF15("XRANGEPLAINLOOSE", "[v=\\s]*(" + v387[v388.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + v387[v388.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + v387[v388.XRANGEIDENTIFIERLOOSE] + ")(?:" + v387[v388.PRERELEASELOOSE] + ")?" + v387[v388.BUILD] + "?)?)?");
  vF15("XRANGE", "^" + v387[v388.GTLT] + "\\s*" + v387[v388.XRANGEPLAIN] + "$");
  vF15("XRANGELOOSE", "^" + v387[v388.GTLT] + "\\s*" + v387[v388.XRANGEPLAINLOOSE] + "$");
  vF15("COERCE", "(^|[^\\d])(\\d{1," + _0x2fec44 + "})(?:\\.(\\d{1," + _0x2fec44 + "}))?(?:\\.(\\d{1," + _0x2fec44 + "}))?(?:$|[^\\d])");
  vF15("COERCERTL", v387[v388.COERCE], true);
  vF15("LONETILDE", "(?:~>?)");
  vF15("TILDETRIM", "(\\s*)" + v387[v388.LONETILDE] + "\\s+", true);
  p611.tildeTrimReplace = "$1~";
  vF15("TILDE", "^" + v387[v388.LONETILDE] + v387[v388.XRANGEPLAIN] + "$");
  vF15("TILDELOOSE", "^" + v387[v388.LONETILDE] + v387[v388.XRANGEPLAINLOOSE] + "$");
  vF15("LONECARET", "(?:\\^)");
  vF15("CARETTRIM", "(\\s*)" + v387[v388.LONECARET] + "\\s+", true);
  p611.caretTrimReplace = "$1^";
  vF15("CARET", "^" + v387[v388.LONECARET] + v387[v388.XRANGEPLAIN] + "$");
  vF15("CARETLOOSE", "^" + v387[v388.LONECARET] + v387[v388.XRANGEPLAINLOOSE] + "$");
  vF15("COMPARATORLOOSE", "^" + v387[v388.GTLT] + "\\s*(" + v387[v388.LOOSEPLAIN] + ")$|^$");
  vF15("COMPARATOR", "^" + v387[v388.GTLT] + "\\s*(" + v387[v388.FULLPLAIN] + ")$|^$");
  vF15("COMPARATORTRIM", "(\\s*)" + v387[v388.GTLT] + "\\s*(" + v387[v388.LOOSEPLAIN] + "|" + v387[v388.XRANGEPLAIN] + ")", true);
  p611.comparatorTrimReplace = "$1$2$3";
  vF15("HYPHENRANGE", "^\\s*(" + v387[v388.XRANGEPLAIN] + ")\\s+-\\s+(" + v387[v388.XRANGEPLAIN] + ")\\s*$");
  vF15("HYPHENRANGELOOSE", "^\\s*(" + v387[v388.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + v387[v388.XRANGEPLAINLOOSE] + ")\\s*$");
  vF15("STAR", "(<|>)?=?\\s*\\*");
  vF15("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  vF15("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var vVF335 = vF3((p616, p617) => {
  var v391 = ["includePrerelease", "loose", "rtl"];
  var vF16 = p618 => p618 ? typeof p618 != "object" ? {
    loose: true
  } : v391.filter(p619 => p618[p619]).reduce((p620, p621) => {
    p620[p621] = true;
    return p620;
  }, {}) : {};
  p617.exports = vF16;
});
var vVF336 = vF3((p622, p623) => {
  var v392 = /^[0-9]+$/;
  var vF17 = (p624, p625) => {
    let v393 = v392.test(p624);
    let v394 = v392.test(p625);
    if (v393 && v394) {
      p624 = +p624;
      p625 = +p625;
    }
    if (p624 === p625) {
      return 0;
    } else if (v393 && !v394) {
      return -1;
    } else if (v394 && !v393) {
      return 1;
    } else if (p624 < p625) {
      return -1;
    } else {
      return 1;
    }
  };
  var vF18 = (p626, p627) => vF17(p627, p626);
  p623.exports = {
    compareIdentifiers: vF17,
    rcompareIdentifiers: vF18
  };
});
var vVF337 = vF3((p628, p629) => {
  var vVVF3332 = vVF333();
  var {
    MAX_LENGTH: _0x12ac7a,
    MAX_SAFE_INTEGER: _0x3397f2
  } = vVF332();
  var {
    re: _0x439f52,
    t: _0xd26824
  } = vVF334();
  var vVVF335 = vVF335();
  var {
    compareIdentifiers: _0x5aabc9
  } = vVF336();
  var vC2 = class {
    constructor(p630, p631) {
      p631 = vVVF335(p631);
      if (p630 instanceof vC2) {
        if (p630.loose === !!p631.loose && p630.includePrerelease === !!p631.includePrerelease) {
          return p630;
        }
        p630 = p630.version;
      } else if (typeof p630 != "string") {
        throw new TypeError("Invalid Version: " + p630);
      }
      if (p630.length > _0x12ac7a) {
        throw new TypeError("version is longer than " + _0x12ac7a + " characters");
      }
      vVVF3332("SemVer", p630, p631);
      this.options = p631;
      this.loose = !!p631.loose;
      this.includePrerelease = !!p631.includePrerelease;
      let v395 = p630.trim().match(p631.loose ? _0x439f52[_0xd26824.LOOSE] : _0x439f52[_0xd26824.FULL]);
      if (!v395) {
        throw new TypeError("Invalid Version: " + p630);
      }
      this.raw = p630;
      this.major = +v395[1];
      this.minor = +v395[2];
      this.patch = +v395[3];
      if (this.major > _0x3397f2 || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > _0x3397f2 || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > _0x3397f2 || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (v395[4]) {
        this.prerelease = v395[4].split(".").map(p632 => {
          if (/^[0-9]+$/.test(p632)) {
            let v396 = +p632;
            if (v396 >= 0 && v396 < _0x3397f2) {
              return v396;
            }
          }
          return p632;
        });
      } else {
        this.prerelease = [];
      }
      this.build = v395[5] ? v395[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = this.major + "." + this.minor + "." + this.patch;
      if (this.prerelease.length) {
        this.version += "-" + this.prerelease.join(".");
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(p633) {
      vVVF3332("SemVer.compare", this.version, this.options, p633);
      if (!(p633 instanceof vC2)) {
        if (typeof p633 == "string" && p633 === this.version) {
          return 0;
        }
        p633 = new vC2(p633, this.options);
      }
      if (p633.version === this.version) {
        return 0;
      } else {
        return this.compareMain(p633) || this.comparePre(p633);
      }
    }
    compareMain(p634) {
      if (!(p634 instanceof vC2)) {
        p634 = new vC2(p634, this.options);
      }
      return _0x5aabc9(this.major, p634.major) || _0x5aabc9(this.minor, p634.minor) || _0x5aabc9(this.patch, p634.patch);
    }
    comparePre(p635) {
      if (!(p635 instanceof vC2)) {
        p635 = new vC2(p635, this.options);
      }
      if (this.prerelease.length && !p635.prerelease.length) {
        return -1;
      }
      if (!this.prerelease.length && p635.prerelease.length) {
        return 1;
      }
      if (!this.prerelease.length && !p635.prerelease.length) {
        return 0;
      }
      let v397 = 0;
      do {
        let v398 = this.prerelease[v397];
        let v399 = p635.prerelease[v397];
        vVVF3332("prerelease compare", v397, v398, v399);
        if (v398 === undefined && v399 === undefined) {
          return 0;
        }
        if (v399 === undefined) {
          return 1;
        }
        if (v398 === undefined) {
          return -1;
        }
        if (v398 === v399) {
          continue;
        }
        return _0x5aabc9(v398, v399);
      } while (++v397);
    }
    compareBuild(p636) {
      if (!(p636 instanceof vC2)) {
        p636 = new vC2(p636, this.options);
      }
      let v400 = 0;
      do {
        let v401 = this.build[v400];
        let v402 = p636.build[v400];
        vVVF3332("prerelease compare", v400, v401, v402);
        if (v401 === undefined && v402 === undefined) {
          return 0;
        }
        if (v402 === undefined) {
          return 1;
        }
        if (v401 === undefined) {
          return -1;
        }
        if (v401 === v402) {
          continue;
        }
        return _0x5aabc9(v401, v402);
      } while (++v400);
    }
    inc(p637, p638) {
      switch (p637) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", p638);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", p638);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", p638);
          this.inc("pre", p638);
          break;
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", p638);
          }
          this.inc("pre", p638);
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        case "pre":
          if (this.prerelease.length === 0) {
            this.prerelease = [0];
          } else {
            let v403 = this.prerelease.length;
            while (--v403 >= 0) {
              if (typeof this.prerelease[v403] == "number") {
                this.prerelease[v403]++;
                v403 = -2;
              }
            }
            if (v403 === -1) {
              this.prerelease.push(0);
            }
          }
          if (p638) {
            if (_0x5aabc9(this.prerelease[0], p638) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [p638, 0];
              }
            } else {
              this.prerelease = [p638, 0];
            }
          }
          break;
        default:
          throw new Error("invalid increment argument: " + p637);
      }
      this.format();
      this.raw = this.version;
      return this;
    }
  };
  p629.exports = vC2;
});
var vVF338 = vF3((p639, p640) => {
  var {
    MAX_LENGTH: _0x4e3afe
  } = vVF332();
  var {
    re: _0x363cd5,
    t: _0x11cc1e
  } = vVF334();
  var vVVF337 = vVF337();
  var vVVF3352 = vVF335();
  var vF19 = (p641, p642) => {
    p642 = vVVF3352(p642);
    if (p641 instanceof vVVF337) {
      return p641;
    }
    if (typeof p641 != "string" || p641.length > _0x4e3afe || !(p642.loose ? _0x363cd5[_0x11cc1e.LOOSE] : _0x363cd5[_0x11cc1e.FULL]).test(p641)) {
      return null;
    }
    try {
      return new vVVF337(p641, p642);
    } catch {
      return null;
    }
  };
  p640.exports = vF19;
});
var vVF339 = vF3((p643, p644) => {
  var vVVF338 = vVF338();
  var vF21 = (p645, p646) => {
    let vVVVF338 = vVVF338(p645, p646);
    if (vVVVF338) {
      return vVVVF338.version;
    } else {
      return null;
    }
  };
  p644.exports = vF21;
});
var vVF340 = vF3((p647, p648) => {
  var vVVF3382 = vVF338();
  var vF22 = (p649, p650) => {
    let vVVVF3382 = vVVF3382(p649.trim().replace(/^[=v]+/, ""), p650);
    if (vVVVF3382) {
      return vVVVF3382.version;
    } else {
      return null;
    }
  };
  p648.exports = vF22;
});
var vVF341 = vF3((p651, p652) => {
  var vVVF3372 = vVF337();
  var vF23 = (p653, p654, p655, p656) => {
    if (typeof p655 == "string") {
      p656 = p655;
      p655 = undefined;
    }
    try {
      return new vVVF3372(p653 instanceof vVVF3372 ? p653.version : p653, p655).inc(p654, p656).version;
    } catch {
      return null;
    }
  };
  p652.exports = vF23;
});
var vVF342 = vF3((p657, p658) => {
  var vVVF3373 = vVF337();
  var vF24 = (p659, p660, p661) => new vVVF3373(p659, p661).compare(new vVVF3373(p660, p661));
  p658.exports = vF24;
});
var vVF343 = vF3((p662, p663) => {
  var vVVF342 = vVF342();
  var vF25 = (p664, p665, p666) => vVVF342(p664, p665, p666) === 0;
  p663.exports = vF25;
});
var vVF344 = vF3((p667, p668) => {
  var vVVF3383 = vVF338();
  var vVVF343 = vVF343();
  var vF26 = (p669, p670) => {
    if (vVVF343(p669, p670)) {
      return null;
    }
    {
      let vVVVF3383 = vVVF3383(p669);
      let vVVVF33832 = vVVF3383(p670);
      let v404 = vVVVF3383.prerelease.length || vVVVF33832.prerelease.length;
      let v405 = v404 ? "pre" : "";
      let v406 = v404 ? "prerelease" : "";
      for (let v407 in vVVVF3383) {
        if ((v407 === "major" || v407 === "minor" || v407 === "patch") && vVVVF3383[v407] !== vVVVF33832[v407]) {
          return v405 + v407;
        }
      }
      return v406;
    }
  };
  p668.exports = vF26;
});
var vVF345 = vF3((p671, p672) => {
  var vVVF3374 = vVF337();
  var vF27 = (p673, p674) => new vVVF3374(p673, p674).major;
  p672.exports = vF27;
});
var vVF346 = vF3((p675, p676) => {
  var vVVF3375 = vVF337();
  var vF28 = (p677, p678) => new vVVF3375(p677, p678).minor;
  p676.exports = vF28;
});
var vVF347 = vF3((p679, p680) => {
  var vVVF3376 = vVF337();
  var vF29 = (p681, p682) => new vVVF3376(p681, p682).patch;
  p680.exports = vF29;
});
var vVF348 = vF3((p683, p684) => {
  var vVVF3384 = vVF338();
  var vF30 = (p685, p686) => {
    let vVVVF3384 = vVVF3384(p685, p686);
    if (vVVVF3384 && vVVVF3384.prerelease.length) {
      return vVVVF3384.prerelease;
    } else {
      return null;
    }
  };
  p684.exports = vF30;
});
var vVF349 = vF3((p687, p688) => {
  var vVVF3422 = vVF342();
  var vF31 = (p689, p690, p691) => vVVF3422(p690, p689, p691);
  p688.exports = vF31;
});
var vVF350 = vF3((p692, p693) => {
  var vVVF3423 = vVF342();
  var vF32 = (p694, p695) => vVVF3423(p694, p695, true);
  p693.exports = vF32;
});
var vVF351 = vF3((p696, p697) => {
  var vVVF3377 = vVF337();
  var vF33 = (p698, p699, p700) => {
    let v408 = new vVVF3377(p698, p700);
    let v409 = new vVVF3377(p699, p700);
    return v408.compare(v409) || v408.compareBuild(v409);
  };
  p697.exports = vF33;
});
var vVF352 = vF3((p701, p702) => {
  var vVVF351 = vVF351();
  var vF34 = (p703, p704) => p703.sort((p705, p706) => vVVF351(p705, p706, p704));
  p702.exports = vF34;
});
var vVF353 = vF3((p707, p708) => {
  var vVVF3512 = vVF351();
  var vF35 = (p709, p710) => p709.sort((p711, p712) => vVVF3512(p712, p711, p710));
  p708.exports = vF35;
});
var vVF354 = vF3((p713, p714) => {
  var vVVF3424 = vVF342();
  var vF36 = (p715, p716, p717) => vVVF3424(p715, p716, p717) > 0;
  p714.exports = vF36;
});
var vVF355 = vF3((p718, p719) => {
  var vVVF3425 = vVF342();
  var vF37 = (p720, p721, p722) => vVVF3425(p720, p721, p722) < 0;
  p719.exports = vF37;
});
var vVF356 = vF3((p723, p724) => {
  var vVVF3426 = vVF342();
  var vF38 = (p725, p726, p727) => vVVF3426(p725, p726, p727) !== 0;
  p724.exports = vF38;
});
var vVF357 = vF3((p728, p729) => {
  var vVVF3427 = vVF342();
  var vF39 = (p730, p731, p732) => vVVF3427(p730, p731, p732) >= 0;
  p729.exports = vF39;
});
var vVF358 = vF3((p733, p734) => {
  var vVVF3428 = vVF342();
  var vF40 = (p735, p736, p737) => vVVF3428(p735, p736, p737) <= 0;
  p734.exports = vF40;
});
var vVF359 = vF3((p738, p739) => {
  var vVVF3432 = vVF343();
  var vVVF356 = vVF356();
  var vVVF354 = vVF354();
  var vVVF357 = vVF357();
  var vVVF355 = vVF355();
  var vVVF358 = vVF358();
  var vF41 = (p740, p741, p742, p743) => {
    switch (p741) {
      case "===":
        if (typeof p740 == "object") {
          p740 = p740.version;
        }
        if (typeof p742 == "object") {
          p742 = p742.version;
        }
        return p740 === p742;
      case "!==":
        if (typeof p740 == "object") {
          p740 = p740.version;
        }
        if (typeof p742 == "object") {
          p742 = p742.version;
        }
        return p740 !== p742;
      case "":
      case "=":
      case "==":
        return vVVF3432(p740, p742, p743);
      case "!=":
        return vVVF356(p740, p742, p743);
      case ">":
        return vVVF354(p740, p742, p743);
      case ">=":
        return vVVF357(p740, p742, p743);
      case "<":
        return vVVF355(p740, p742, p743);
      case "<=":
        return vVVF358(p740, p742, p743);
      default:
        throw new TypeError("Invalid operator: " + p741);
    }
  };
  p739.exports = vF41;
});
var vVF360 = vF3((p744, p745) => {
  var vVVF3378 = vVF337();
  var vVVF3385 = vVF338();
  var {
    re: _0x3f8cc6,
    t: _0x229573
  } = vVF334();
  var vF44 = (p746, p747) => {
    if (p746 instanceof vVVF3378) {
      return p746;
    }
    if (typeof p746 == "number") {
      p746 = String(p746);
    }
    if (typeof p746 != "string") {
      return null;
    }
    p747 = p747 || {};
    let v410 = null;
    if (!p747.rtl) {
      v410 = p746.match(_0x3f8cc6[_0x229573.COERCE]);
    } else {
      let v411;
      while ((v411 = _0x3f8cc6[_0x229573.COERCERTL].exec(p746)) && (!v410 || v410.index + v410[0].length !== p746.length)) {
        if (!v410 || v411.index + v411[0].length !== v410.index + v410[0].length) {
          v410 = v411;
        }
        _0x3f8cc6[_0x229573.COERCERTL].lastIndex = v411.index + v411[1].length + v411[2].length;
      }
      _0x3f8cc6[_0x229573.COERCERTL].lastIndex = -1;
    }
    if (v410 === null) {
      return null;
    } else {
      return vVVF3385(v410[2] + "." + (v410[3] || "0") + "." + (v410[4] || "0"), p747);
    }
  };
  p745.exports = vF44;
});
var vVF361 = vF3((p748, p749) => {
  p749.exports = function (p750) {
    p750.prototype[Symbol.iterator] = function* () {
      for (let v412 = this.head; v412; v412 = v412.next) {
        yield v412.value;
      }
    };
  };
});
var vVF362 = vF3((p751, p752) => {
  p752.exports = f161;
  f161.Node = f165;
  f161.create = f161;
  function f161(p753) {
    var vThis3 = this;
    if (!(vThis3 instanceof f161)) {
      vThis3 = new f161();
    }
    vThis3.tail = null;
    vThis3.head = null;
    vThis3.length = 0;
    if (p753 && typeof p753.forEach == "function") {
      p753.forEach(function (p754) {
        vThis3.push(p754);
      });
    } else if (arguments.length > 0) {
      for (var v413 = 0, v414 = arguments.length; v413 < v414; v413++) {
        vThis3.push(arguments[v413]);
      }
    }
    return vThis3;
  }
  f161.prototype.removeNode = function (p755) {
    if (p755.list !== this) {
      throw new Error("removing node which does not belong to this list");
    }
    var v415 = p755.next;
    var v416 = p755.prev;
    if (v415) {
      v415.prev = v416;
    }
    if (v416) {
      v416.next = v415;
    }
    if (p755 === this.head) {
      this.head = v415;
    }
    if (p755 === this.tail) {
      this.tail = v416;
    }
    p755.list.length--;
    p755.next = null;
    p755.prev = null;
    p755.list = null;
    return v415;
  };
  f161.prototype.unshiftNode = function (p756) {
    if (p756 !== this.head) {
      if (p756.list) {
        p756.list.removeNode(p756);
      }
      var v417 = this.head;
      p756.list = this;
      p756.next = v417;
      if (v417) {
        v417.prev = p756;
      }
      this.head = p756;
      this.tail ||= p756;
      this.length++;
    }
  };
  f161.prototype.pushNode = function (p757) {
    if (p757 !== this.tail) {
      if (p757.list) {
        p757.list.removeNode(p757);
      }
      var v418 = this.tail;
      p757.list = this;
      p757.prev = v418;
      if (v418) {
        v418.next = p757;
      }
      this.tail = p757;
      this.head ||= p757;
      this.length++;
    }
  };
  f161.prototype.push = function () {
    for (var v419 = 0, v420 = arguments.length; v419 < v420; v419++) {
      f163(this, arguments[v419]);
    }
    return this.length;
  };
  f161.prototype.unshift = function () {
    for (var v421 = 0, v422 = arguments.length; v421 < v422; v421++) {
      f164(this, arguments[v421]);
    }
    return this.length;
  };
  f161.prototype.pop = function () {
    if (this.tail) {
      var v423 = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return v423;
    }
  };
  f161.prototype.shift = function () {
    if (this.head) {
      var v424 = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return v424;
    }
  };
  f161.prototype.forEach = function (p758, p759) {
    p759 = p759 || this;
    for (var v425 = this.head, v426 = 0; v425 !== null; v426++) {
      p758.call(p759, v425.value, v426, this);
      v425 = v425.next;
    }
  };
  f161.prototype.forEachReverse = function (p760, p761) {
    p761 = p761 || this;
    for (var v427 = this.tail, v428 = this.length - 1; v427 !== null; v428--) {
      p760.call(p761, v427.value, v428, this);
      v427 = v427.prev;
    }
  };
  f161.prototype.get = function (p762) {
    for (var v429 = 0, v430 = this.head; v430 !== null && v429 < p762; v429++) {
      v430 = v430.next;
    }
    if (v429 === p762 && v430 !== null) {
      return v430.value;
    }
  };
  f161.prototype.getReverse = function (p763) {
    for (var v431 = 0, v432 = this.tail; v432 !== null && v431 < p763; v431++) {
      v432 = v432.prev;
    }
    if (v431 === p763 && v432 !== null) {
      return v432.value;
    }
  };
  f161.prototype.map = function (p764, p765) {
    p765 = p765 || this;
    var v433 = new f161();
    for (var v434 = this.head; v434 !== null;) {
      v433.push(p764.call(p765, v434.value, this));
      v434 = v434.next;
    }
    return v433;
  };
  f161.prototype.mapReverse = function (p766, p767) {
    p767 = p767 || this;
    var v435 = new f161();
    for (var v436 = this.tail; v436 !== null;) {
      v435.push(p766.call(p767, v436.value, this));
      v436 = v436.prev;
    }
    return v435;
  };
  f161.prototype.reduce = function (p768, p769) {
    var v437;
    var v438 = this.head;
    if (arguments.length > 1) {
      v437 = p769;
    } else if (this.head) {
      v438 = this.head.next;
      v437 = this.head.value;
    } else {
      throw new TypeError("Reduce of empty list with no initial value");
    }
    for (var v439 = 0; v438 !== null; v439++) {
      v437 = p768(v437, v438.value, v439);
      v438 = v438.next;
    }
    return v437;
  };
  f161.prototype.reduceReverse = function (p770, p771) {
    var v440;
    var v441 = this.tail;
    if (arguments.length > 1) {
      v440 = p771;
    } else if (this.tail) {
      v441 = this.tail.prev;
      v440 = this.tail.value;
    } else {
      throw new TypeError("Reduce of empty list with no initial value");
    }
    for (var v442 = this.length - 1; v441 !== null; v442--) {
      v440 = p770(v440, v441.value, v442);
      v441 = v441.prev;
    }
    return v440;
  };
  f161.prototype.toArray = function () {
    var v443 = new Array(this.length);
    for (var v444 = 0, v445 = this.head; v445 !== null; v444++) {
      v443[v444] = v445.value;
      v445 = v445.next;
    }
    return v443;
  };
  f161.prototype.toArrayReverse = function () {
    var v446 = new Array(this.length);
    for (var v447 = 0, v448 = this.tail; v448 !== null; v447++) {
      v446[v447] = v448.value;
      v448 = v448.prev;
    }
    return v446;
  };
  f161.prototype.slice = function (p772, p773) {
    p773 = p773 || this.length;
    if (p773 < 0) {
      p773 += this.length;
    }
    p772 = p772 || 0;
    if (p772 < 0) {
      p772 += this.length;
    }
    var v449 = new f161();
    if (p773 < p772 || p773 < 0) {
      return v449;
    }
    if (p772 < 0) {
      p772 = 0;
    }
    if (p773 > this.length) {
      p773 = this.length;
    }
    for (var v450 = 0, v451 = this.head; v451 !== null && v450 < p772; v450++) {
      v451 = v451.next;
    }
    for (; v451 !== null && v450 < p773; v450++, v451 = v451.next) {
      v449.push(v451.value);
    }
    return v449;
  };
  f161.prototype.sliceReverse = function (p774, p775) {
    p775 = p775 || this.length;
    if (p775 < 0) {
      p775 += this.length;
    }
    p774 = p774 || 0;
    if (p774 < 0) {
      p774 += this.length;
    }
    var v452 = new f161();
    if (p775 < p774 || p775 < 0) {
      return v452;
    }
    if (p774 < 0) {
      p774 = 0;
    }
    if (p775 > this.length) {
      p775 = this.length;
    }
    for (var v453 = this.length, v454 = this.tail; v454 !== null && v453 > p775; v453--) {
      v454 = v454.prev;
    }
    for (; v454 !== null && v453 > p774; v453--, v454 = v454.prev) {
      v452.push(v454.value);
    }
    return v452;
  };
  f161.prototype.splice = function (p776, p777, ..._0x50b534) {
    if (p776 > this.length) {
      p776 = this.length - 1;
    }
    if (p776 < 0) {
      p776 = this.length + p776;
    }
    for (var v455 = 0, v456 = this.head; v456 !== null && v455 < p776; v455++) {
      v456 = v456.next;
    }
    var v457 = [];
    for (var v455 = 0; v456 && v455 < p777; v455++) {
      v457.push(v456.value);
      v456 = this.removeNode(v456);
    }
    if (v456 === null) {
      v456 = this.tail;
    }
    if (v456 !== this.head && v456 !== this.tail) {
      v456 = v456.prev;
    }
    for (var v455 = 0; v455 < _0x50b534.length; v455++) {
      v456 = f162(this, v456, _0x50b534[v455]);
    }
    return v457;
  };
  f161.prototype.reverse = function () {
    var v458 = this.head;
    var v459 = this.tail;
    for (var vV458 = v458; vV458 !== null; vV458 = vV458.prev) {
      var v460 = vV458.prev;
      vV458.prev = vV458.next;
      vV458.next = v460;
    }
    this.head = v459;
    this.tail = v458;
    return this;
  };
  function f162(p778, p779, p780) {
    var v461 = p779 === p778.head ? new f165(p780, null, p779, p778) : new f165(p780, p779, p779.next, p778);
    if (v461.next === null) {
      p778.tail = v461;
    }
    if (v461.prev === null) {
      p778.head = v461;
    }
    p778.length++;
    return v461;
  }
  function f163(p781, p782) {
    p781.tail = new f165(p782, p781.tail, null, p781);
    p781.head ||= p781.tail;
    p781.length++;
  }
  function f164(p783, p784) {
    p783.head = new f165(p784, null, p783.head, p783);
    p783.tail ||= p783.head;
    p783.length++;
  }
  function f165(p785, p786, p787, p788) {
    if (!(this instanceof f165)) {
      return new f165(p785, p786, p787, p788);
    }
    this.list = p788;
    this.value = p785;
    if (p786) {
      p786.next = this;
      this.prev = p786;
    } else {
      this.prev = null;
    }
    if (p787) {
      p787.prev = this;
      this.next = p787;
    } else {
      this.next = null;
    }
  }
  try {
    vVF361()(f161);
  } catch {}
});
var vVF363 = vF3((p789, p790) => {
  var vVVF362 = vVF362();
  var vSymbol2 = Symbol("max");
  var vSymbol3 = Symbol("length");
  var vSymbol4 = Symbol("lengthCalculator");
  var vSymbol5 = Symbol("allowStale");
  var vSymbol6 = Symbol("maxAge");
  var vSymbol7 = Symbol("dispose");
  var vSymbol8 = Symbol("noDisposeOnSet");
  var vSymbol9 = Symbol("lruList");
  var vSymbol10 = Symbol("cache");
  var vSymbol11 = Symbol("updateAgeOnGet");
  var vF45 = () => 1;
  var vC3 = class {
    constructor(p791) {
      if (typeof p791 == "number") {
        p791 = {
          max: p791
        };
      }
      p791 ||= {};
      if (p791.max && (typeof p791.max != "number" || p791.max < 0)) {
        throw new TypeError("max must be a non-negative number");
      }
      let v462 = this[vSymbol2] = p791.max || Infinity;
      let v463 = p791.length || vF45;
      this[vSymbol4] = typeof v463 != "function" ? vF45 : v463;
      this[vSymbol5] = p791.stale || false;
      if (p791.maxAge && typeof p791.maxAge != "number") {
        throw new TypeError("maxAge must be a number");
      }
      this[vSymbol6] = p791.maxAge || 0;
      this[vSymbol7] = p791.dispose;
      this[vSymbol8] = p791.noDisposeOnSet || false;
      this[vSymbol11] = p791.updateAgeOnGet || false;
      this.reset();
    }
    set max(p792) {
      if (typeof p792 != "number" || p792 < 0) {
        throw new TypeError("max must be a non-negative number");
      }
      this[vSymbol2] = p792 || Infinity;
      vF48(this);
    }
    get max() {
      return this[vSymbol2];
    }
    set allowStale(p793) {
      this[vSymbol5] = !!p793;
    }
    get allowStale() {
      return this[vSymbol5];
    }
    set maxAge(p794) {
      if (typeof p794 != "number") {
        throw new TypeError("maxAge must be a non-negative number");
      }
      this[vSymbol6] = p794;
      vF48(this);
    }
    get maxAge() {
      return this[vSymbol6];
    }
    set lengthCalculator(p795) {
      if (typeof p795 != "function") {
        p795 = vF45;
      }
      if (p795 !== this[vSymbol4]) {
        this[vSymbol4] = p795;
        this[vSymbol3] = 0;
        this[vSymbol9].forEach(p796 => {
          p796.length = this[vSymbol4](p796.value, p796.key);
          this[vSymbol3] += p796.length;
        });
      }
      vF48(this);
    }
    get lengthCalculator() {
      return this[vSymbol4];
    }
    get length() {
      return this[vSymbol3];
    }
    get itemCount() {
      return this[vSymbol9].length;
    }
    rforEach(p797, p798) {
      p798 = p798 || this;
      for (let v464 = this[vSymbol9].tail; v464 !== null;) {
        let v465 = v464.prev;
        vF50(this, p797, v464, p798);
        v464 = v465;
      }
    }
    forEach(p799, p800) {
      p800 = p800 || this;
      for (let v466 = this[vSymbol9].head; v466 !== null;) {
        let v467 = v466.next;
        vF50(this, p799, v466, p800);
        v466 = v467;
      }
    }
    keys() {
      return this[vSymbol9].toArray().map(p801 => p801.key);
    }
    values() {
      return this[vSymbol9].toArray().map(p802 => p802.value);
    }
    reset() {
      if (this[vSymbol7] && this[vSymbol9] && this[vSymbol9].length) {
        this[vSymbol9].forEach(p803 => this[vSymbol7](p803.key, p803.value));
      }
      this[vSymbol10] = new Map();
      this[vSymbol9] = new vVVF362();
      this[vSymbol3] = 0;
    }
    dump() {
      return this[vSymbol9].map(p804 => vF47(this, p804) ? false : {
        k: p804.key,
        v: p804.value,
        e: p804.now + (p804.maxAge || 0)
      }).toArray().filter(p805 => p805);
    }
    dumpLru() {
      return this[vSymbol9];
    }
    set(p806, p807, p808) {
      p808 = p808 || this[vSymbol6];
      if (p808 && typeof p808 != "number") {
        throw new TypeError("maxAge must be a number");
      }
      let v468 = p808 ? Date.now() : 0;
      let v469 = this[vSymbol4](p807, p806);
      if (this[vSymbol10].has(p806)) {
        if (v469 > this[vSymbol2]) {
          vF49(this, this[vSymbol10].get(p806));
          return false;
        }
        let v470 = this[vSymbol10].get(p806).value;
        if (this[vSymbol7]) {
          if (!this[vSymbol8]) {
            this[vSymbol7](p806, v470.value);
          }
        }
        v470.now = v468;
        v470.maxAge = p808;
        v470.value = p807;
        this[vSymbol3] += v469 - v470.length;
        v470.length = v469;
        this.get(p806);
        vF48(this);
        return true;
      }
      let v471 = new vC4(p806, p807, v469, v468, p808);
      if (v471.length > this[vSymbol2]) {
        if (this[vSymbol7]) {
          this[vSymbol7](p806, p807);
        }
        return false;
      } else {
        this[vSymbol3] += v471.length;
        this[vSymbol9].unshift(v471);
        this[vSymbol10].set(p806, this[vSymbol9].head);
        vF48(this);
        return true;
      }
    }
    has(p809) {
      if (!this[vSymbol10].has(p809)) {
        return false;
      }
      let v472 = this[vSymbol10].get(p809).value;
      return !vF47(this, v472);
    }
    get(p810) {
      return vF46(this, p810, true);
    }
    peek(p811) {
      return vF46(this, p811, false);
    }
    pop() {
      let v473 = this[vSymbol9].tail;
      if (v473) {
        vF49(this, v473);
        return v473.value;
      } else {
        return null;
      }
    }
    del(p812) {
      vF49(this, this[vSymbol10].get(p812));
    }
    load(p813) {
      this.reset();
      let v474 = Date.now();
      for (let v475 = p813.length - 1; v475 >= 0; v475--) {
        let v476 = p813[v475];
        let v477 = v476.e || 0;
        if (v477 === 0) {
          this.set(v476.k, v476.v);
        } else {
          let v478 = v477 - v474;
          if (v478 > 0) {
            this.set(v476.k, v476.v, v478);
          }
        }
      }
    }
    prune() {
      this[vSymbol10].forEach((p814, p815) => vF46(this, p815, false));
    }
  };
  var vF46 = (p816, p817, p818) => {
    let v479 = p816[vSymbol10].get(p817);
    if (v479) {
      let v480 = v479.value;
      if (vF47(p816, v480)) {
        vF49(p816, v479);
        if (!p816[vSymbol5]) {
          return;
        }
      } else if (p818) {
        if (p816[vSymbol11]) {
          v479.value.now = Date.now();
        }
        p816[vSymbol9].unshiftNode(v479);
      }
      return v480.value;
    }
  };
  var vF47 = (p819, p820) => {
    if (!p820 || !p820.maxAge && !p819[vSymbol6]) {
      return false;
    }
    let v481 = Date.now() - p820.now;
    if (p820.maxAge) {
      return v481 > p820.maxAge;
    } else {
      return p819[vSymbol6] && v481 > p819[vSymbol6];
    }
  };
  var vF48 = p821 => {
    if (p821[vSymbol3] > p821[vSymbol2]) {
      for (let v482 = p821[vSymbol9].tail; p821[vSymbol3] > p821[vSymbol2] && v482 !== null;) {
        let v483 = v482.prev;
        vF49(p821, v482);
        v482 = v483;
      }
    }
  };
  var vF49 = (p822, p823) => {
    if (p823) {
      let v484 = p823.value;
      if (p822[vSymbol7]) {
        p822[vSymbol7](v484.key, v484.value);
      }
      p822[vSymbol3] -= v484.length;
      p822[vSymbol10].delete(v484.key);
      p822[vSymbol9].removeNode(p823);
    }
  };
  var vC4 = class {
    constructor(p824, p825, p826, p827, p828) {
      this.key = p824;
      this.value = p825;
      this.length = p826;
      this.now = p827;
      this.maxAge = p828 || 0;
    }
  };
  var vF50 = (p829, p830, p831, p832) => {
    let v485 = p831.value;
    if (vF47(p829, v485)) {
      vF49(p829, p831);
      if (!p829[vSymbol5]) {
        v485 = undefined;
      }
    }
    if (v485) {
      p830.call(p832, v485.value, v485.key, p829);
    }
  };
  p790.exports = vC3;
});
var vVF364 = vF3((p833, p834) => {
  var vC5 = class {
    constructor(p835, p836) {
      p836 = vVVF3353(p836);
      if (p835 instanceof vC5) {
        if (p835.loose === !!p836.loose && p835.includePrerelease === !!p836.includePrerelease) {
          return p835;
        } else {
          return new vC5(p835.raw, p836);
        }
      }
      if (p835 instanceof v_0x123662) {
        this.raw = p835.value;
        this.set = [[p835]];
        this.format();
        return this;
      }
      this.options = p836;
      this.loose = !!p836.loose;
      this.includePrerelease = !!p836.includePrerelease;
      this.raw = p835;
      this.set = p835.split("||").map(p837 => this.parseRange(p837.trim())).filter(p838 => p838.length);
      if (!this.set.length) {
        throw new TypeError("Invalid SemVer Range: " + p835);
      }
      if (this.set.length > 1) {
        let v486 = this.set[0];
        this.set = this.set.filter(p839 => !vF51(p839[0]));
        if (this.set.length === 0) {
          this.set = [v486];
        } else if (this.set.length > 1) {
          for (let v487 of this.set) {
            if (v487.length === 1 && vF53(v487[0])) {
              this.set = [v487];
              break;
            }
          }
        }
      }
      this.format();
    }
    format() {
      this.range = this.set.map(p840 => p840.join(" ").trim()).join("||").trim();
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(p841) {
      p841 = p841.trim();
      let v488 = "parseRange:" + Object.keys(this.options).join(",") + ":" + p841;
      let v489 = v498.get(v488);
      if (v489) {
        return v489;
      }
      let v490 = this.options.loose;
      let v491 = v490 ? _0x58201d[_0x32f26b.HYPHENRANGELOOSE] : _0x58201d[_0x32f26b.HYPHENRANGE];
      p841 = p841.replace(v491, vF67(this.options.includePrerelease));
      vVVF3333("hyphen replace", p841);
      p841 = p841.replace(_0x58201d[_0x32f26b.COMPARATORTRIM], _0x133db7);
      vVVF3333("comparator trim", p841);
      p841 = p841.replace(_0x58201d[_0x32f26b.TILDETRIM], _0x5a3e0a);
      p841 = p841.replace(_0x58201d[_0x32f26b.CARETTRIM], _0x4c4829);
      p841 = p841.split(/\s+/).join(" ");
      let v492 = p841.split(" ").map(p842 => vF55(p842, this.options)).join(" ").split(/\s+/).map(p843 => vF65(p843, this.options));
      if (v490) {
        v492 = v492.filter(p844 => {
          vVVF3333("loose invalid filter", p844, this.options);
          return !!p844.match(_0x58201d[_0x32f26b.COMPARATORLOOSE]);
        });
      }
      vVVF3333("range list", v492);
      let v493 = new Map();
      let v494 = v492.map(p845 => new v_0x123662(p845, this.options));
      for (let v495 of v494) {
        if (vF51(v495)) {
          return [v495];
        }
        v493.set(v495.value, v495);
      }
      if (v493.size > 1 && v493.has("")) {
        v493.delete("");
      }
      let v496 = [...v493.values()];
      v498.set(v488, v496);
      return v496;
    }
    intersects(p846, p847) {
      if (!(p846 instanceof vC5)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some(p848 => vF54(p848, p847) && p846.set.some(p849 => vF54(p849, p847) && p848.every(p850 => p849.every(p851 => p850.intersects(p851, p847)))));
    }
    test(p852) {
      if (!p852) {
        return false;
      }
      if (typeof p852 == "string") {
        try {
          p852 = new vVVF3379(p852, this.options);
        } catch {
          return false;
        }
      }
      for (let v497 = 0; v497 < this.set.length; v497++) {
        if (vF68(this.set[v497], p852, this.options)) {
          return true;
        }
      }
      return false;
    }
  };
  p834.exports = vC5;
  var vVVF363 = vVF363();
  var v498 = new vVVF363({
    max: 1000
  });
  var vVVF3353 = vVF335();
  var v_0x123662 = vVF365();
  var vVVF3333 = vVF333();
  var vVVF3379 = vVF337();
  var {
    re: _0x58201d,
    t: _0x32f26b,
    comparatorTrimReplace: _0x133db7,
    tildeTrimReplace: _0x5a3e0a,
    caretTrimReplace: _0x4c4829
  } = vVF334();
  var vF51 = p853 => p853.value === "<0.0.0-0";
  var vF53 = p854 => p854.value === "";
  var vF54 = (p855, p856) => {
    let v499 = true;
    let v500 = p855.slice();
    let v501 = v500.pop();
    while (v499 && v500.length) {
      v499 = v500.every(p857 => v501.intersects(p857, p856));
      v501 = v500.pop();
    }
    return v499;
  };
  var vF55 = (p858, p859) => {
    vVVF3333("comp", p858, p859);
    p858 = vF59(p858, p859);
    vVVF3333("caret", p858);
    p858 = vF57(p858, p859);
    vVVF3333("tildes", p858);
    p858 = vF61(p858, p859);
    vVVF3333("xrange", p858);
    p858 = vF64(p858, p859);
    vVVF3333("stars", p858);
    return p858;
  };
  var vF56 = p860 => !p860 || p860.toLowerCase() === "x" || p860 === "*";
  var vF57 = (p861, p862) => p861.trim().split(/\s+/).map(p863 => vF58(p863, p862)).join(" ");
  var vF58 = (p864, p865) => {
    let v502 = p865.loose ? _0x58201d[_0x32f26b.TILDELOOSE] : _0x58201d[_0x32f26b.TILDE];
    return p864.replace(v502, (p866, p867, p868, p869, p870) => {
      vVVF3333("tilde", p864, p866, p867, p868, p869, p870);
      let v503;
      if (vF56(p867)) {
        v503 = "";
      } else if (vF56(p868)) {
        v503 = ">=" + p867 + ".0.0 <" + (+p867 + 1) + ".0.0-0";
      } else if (vF56(p869)) {
        v503 = ">=" + p867 + "." + p868 + ".0 <" + p867 + "." + (+p868 + 1) + ".0-0";
      } else if (p870) {
        vVVF3333("replaceTilde pr", p870);
        v503 = ">=" + p867 + "." + p868 + "." + p869 + "-" + p870 + " <" + p867 + "." + (+p868 + 1) + ".0-0";
      } else {
        v503 = ">=" + p867 + "." + p868 + "." + p869 + " <" + p867 + "." + (+p868 + 1) + ".0-0";
      }
      vVVF3333("tilde return", v503);
      return v503;
    });
  };
  var vF59 = (p871, p872) => p871.trim().split(/\s+/).map(p873 => vF60(p873, p872)).join(" ");
  var vF60 = (p874, p875) => {
    vVVF3333("caret", p874, p875);
    let v504 = p875.loose ? _0x58201d[_0x32f26b.CARETLOOSE] : _0x58201d[_0x32f26b.CARET];
    let v505 = p875.includePrerelease ? "-0" : "";
    return p874.replace(v504, (p876, p877, p878, p879, p880) => {
      vVVF3333("caret", p874, p876, p877, p878, p879, p880);
      let v506;
      if (vF56(p877)) {
        v506 = "";
      } else if (vF56(p878)) {
        v506 = ">=" + p877 + ".0.0" + v505 + " <" + (+p877 + 1) + ".0.0-0";
      } else if (vF56(p879)) {
        if (p877 === "0") {
          v506 = ">=" + p877 + "." + p878 + ".0" + v505 + " <" + p877 + "." + (+p878 + 1) + ".0-0";
        } else {
          v506 = ">=" + p877 + "." + p878 + ".0" + v505 + " <" + (+p877 + 1) + ".0.0-0";
        }
      } else if (p880) {
        vVVF3333("replaceCaret pr", p880);
        if (p877 === "0") {
          if (p878 === "0") {
            v506 = ">=" + p877 + "." + p878 + "." + p879 + "-" + p880 + " <" + p877 + "." + p878 + "." + (+p879 + 1) + "-0";
          } else {
            v506 = ">=" + p877 + "." + p878 + "." + p879 + "-" + p880 + " <" + p877 + "." + (+p878 + 1) + ".0-0";
          }
        } else {
          v506 = ">=" + p877 + "." + p878 + "." + p879 + "-" + p880 + " <" + (+p877 + 1) + ".0.0-0";
        }
      } else {
        vVVF3333("no pr");
        if (p877 === "0") {
          if (p878 === "0") {
            v506 = ">=" + p877 + "." + p878 + "." + p879 + v505 + " <" + p877 + "." + p878 + "." + (+p879 + 1) + "-0";
          } else {
            v506 = ">=" + p877 + "." + p878 + "." + p879 + v505 + " <" + p877 + "." + (+p878 + 1) + ".0-0";
          }
        } else {
          v506 = ">=" + p877 + "." + p878 + "." + p879 + " <" + (+p877 + 1) + ".0.0-0";
        }
      }
      vVVF3333("caret return", v506);
      return v506;
    });
  };
  var vF61 = (p881, p882) => {
    vVVF3333("replaceXRanges", p881, p882);
    return p881.split(/\s+/).map(p883 => vF63(p883, p882)).join(" ");
  };
  var vF63 = (p884, p885) => {
    p884 = p884.trim();
    let v507 = p885.loose ? _0x58201d[_0x32f26b.XRANGELOOSE] : _0x58201d[_0x32f26b.XRANGE];
    return p884.replace(v507, (p886, p887, p888, p889, p890, p891) => {
      vVVF3333("xRange", p884, p886, p887, p888, p889, p890, p891);
      let vVF56 = vF56(p888);
      let v508 = vVF56 || vF56(p889);
      let v509 = v508 || vF56(p890);
      let vV509 = v509;
      if (p887 === "=" && vV509) {
        p887 = "";
      }
      p891 = p885.includePrerelease ? "-0" : "";
      if (vVF56) {
        if (p887 === ">" || p887 === "<") {
          p886 = "<0.0.0-0";
        } else {
          p886 = "*";
        }
      } else if (p887 && vV509) {
        if (v508) {
          p889 = 0;
        }
        p890 = 0;
        if (p887 === ">") {
          p887 = ">=";
          if (v508) {
            p888 = +p888 + 1;
            p889 = 0;
            p890 = 0;
          } else {
            p889 = +p889 + 1;
            p890 = 0;
          }
        } else if (p887 === "<=") {
          p887 = "<";
          if (v508) {
            p888 = +p888 + 1;
          } else {
            p889 = +p889 + 1;
          }
        }
        if (p887 === "<") {
          p891 = "-0";
        }
        p886 = p887 + p888 + "." + p889 + "." + p890 + p891;
      } else if (v508) {
        p886 = ">=" + p888 + ".0.0" + p891 + " <" + (+p888 + 1) + ".0.0-0";
      } else if (v509) {
        p886 = ">=" + p888 + "." + p889 + ".0" + p891 + " <" + p888 + "." + (+p889 + 1) + ".0-0";
      }
      vVVF3333("xRange return", p886);
      return p886;
    });
  };
  var vF64 = (p892, p893) => {
    vVVF3333("replaceStars", p892, p893);
    return p892.trim().replace(_0x58201d[_0x32f26b.STAR], "");
  };
  var vF65 = (p894, p895) => {
    vVVF3333("replaceGTE0", p894, p895);
    return p894.trim().replace(_0x58201d[p895.includePrerelease ? _0x32f26b.GTE0PRE : _0x32f26b.GTE0], "");
  };
  var vF67 = p896 => (p897, p898, p899, p900, p901, p902, p903, p904, p905, p906, p907, p908, p909) => {
    if (vF56(p899)) {
      p898 = "";
    } else if (vF56(p900)) {
      p898 = ">=" + p899 + ".0.0" + (p896 ? "-0" : "");
    } else if (vF56(p901)) {
      p898 = ">=" + p899 + "." + p900 + ".0" + (p896 ? "-0" : "");
    } else if (p902) {
      p898 = ">=" + p898;
    } else {
      p898 = ">=" + p898 + (p896 ? "-0" : "");
    }
    if (vF56(p905)) {
      p904 = "";
    } else if (vF56(p906)) {
      p904 = "<" + (+p905 + 1) + ".0.0-0";
    } else if (vF56(p907)) {
      p904 = "<" + p905 + "." + (+p906 + 1) + ".0-0";
    } else if (p908) {
      p904 = "<=" + p905 + "." + p906 + "." + p907 + "-" + p908;
    } else if (p896) {
      p904 = "<" + p905 + "." + p906 + "." + (+p907 + 1) + "-0";
    } else {
      p904 = "<=" + p904;
    }
    return (p898 + " " + p904).trim();
  };
  var vF68 = (p910, p911, p912) => {
    for (let v510 = 0; v510 < p910.length; v510++) {
      if (!p910[v510].test(p911)) {
        return false;
      }
    }
    if (p911.prerelease.length && !p912.includePrerelease) {
      for (let v511 = 0; v511 < p910.length; v511++) {
        vVVF3333(p910[v511].semver);
        if (p910[v511].semver !== v_0x123662.ANY && p910[v511].semver.prerelease.length > 0) {
          let v512 = p910[v511].semver;
          if (v512.major === p911.major && v512.minor === p911.minor && v512.patch === p911.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
});
var vVF365 = vF3((p913, p914) => {
  var vSymbol12 = Symbol("SemVer ANY");
  var vC6 = class {
    static get ANY() {
      return vSymbol12;
    }
    constructor(p915, p916) {
      p916 = vVVF3354(p916);
      if (p915 instanceof vC6) {
        if (p915.loose === !!p916.loose) {
          return p915;
        }
        p915 = p915.value;
      }
      vVVF3334("comparator", p915, p916);
      this.options = p916;
      this.loose = !!p916.loose;
      this.parse(p915);
      if (this.semver === vSymbol12) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      vVVF3334("comp", this);
    }
    parse(p917) {
      let v513 = this.options.loose ? _0xb64d17[_0x20c4bf.COMPARATORLOOSE] : _0xb64d17[_0x20c4bf.COMPARATOR];
      let v514 = p917.match(v513);
      if (!v514) {
        throw new TypeError("Invalid comparator: " + p917);
      }
      this.operator = v514[1] !== undefined ? v514[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (v514[2]) {
        this.semver = new vVVF33710(v514[2], this.options.loose);
      } else {
        this.semver = vSymbol12;
      }
    }
    toString() {
      return this.value;
    }
    test(p918) {
      vVVF3334("Comparator.test", p918, this.options.loose);
      if (this.semver === vSymbol12 || p918 === vSymbol12) {
        return true;
      }
      if (typeof p918 == "string") {
        try {
          p918 = new vVVF33710(p918, this.options);
        } catch {
          return false;
        }
      }
      return vVVF359(p918, this.operator, this.semver, this.options);
    }
    intersects(p919, p920) {
      if (!(p919 instanceof vC6)) {
        throw new TypeError("a Comparator is required");
      }
      if (!p920 || typeof p920 != "object") {
        p920 = {
          loose: !!p920,
          includePrerelease: false
        };
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        } else {
          return new vVVF364(p919.value, p920).test(this.value);
        }
      }
      if (p919.operator === "") {
        if (p919.value === "") {
          return true;
        } else {
          return new vVVF364(this.value, p920).test(p919.semver);
        }
      }
      let v515 = (this.operator === ">=" || this.operator === ">") && (p919.operator === ">=" || p919.operator === ">");
      let v516 = (this.operator === "<=" || this.operator === "<") && (p919.operator === "<=" || p919.operator === "<");
      let v517 = this.semver.version === p919.semver.version;
      let v518 = (this.operator === ">=" || this.operator === "<=") && (p919.operator === ">=" || p919.operator === "<=");
      let v519 = vVVF359(this.semver, "<", p919.semver, p920) && (this.operator === ">=" || this.operator === ">") && (p919.operator === "<=" || p919.operator === "<");
      let v520 = vVVF359(this.semver, ">", p919.semver, p920) && (this.operator === "<=" || this.operator === "<") && (p919.operator === ">=" || p919.operator === ">");
      return v515 || v516 || v517 && v518 || v519 || v520;
    }
  };
  p914.exports = vC6;
  var vVVF3354 = vVF335();
  var {
    re: _0xb64d17,
    t: _0x20c4bf
  } = vVF334();
  var vVVF359 = vVF359();
  var vVVF3334 = vVF333();
  var vVVF33710 = vVF337();
  var vVVF364 = vVF364();
});
var vVF366 = vF3((p921, p922) => {
  var vVVF3642 = vVF364();
  var vF69 = (p923, p924, p925) => {
    try {
      p924 = new vVVF3642(p924, p925);
    } catch {
      return false;
    }
    return p924.test(p923);
  };
  p922.exports = vF69;
});
var vVF367 = vF3((p926, p927) => {
  var vVVF3643 = vVF364();
  var vF70 = (p928, p929) => new vVVF3643(p928, p929).set.map(p930 => p930.map(p931 => p931.value).join(" ").trim().split(" "));
  p927.exports = vF70;
});
var vVF368 = vF3((p932, p933) => {
  var vVVF33711 = vVF337();
  var vVVF3644 = vVF364();
  var vF71 = (p934, p935, p936) => {
    let v521 = null;
    let v522 = null;
    let v523 = null;
    try {
      v523 = new vVVF3644(p935, p936);
    } catch {
      return null;
    }
    p934.forEach(p937 => {
      if (v523.test(p937) && (!v521 || v522.compare(p937) === -1)) {
        v521 = p937;
        v522 = new vVVF33711(v521, p936);
      }
    });
    return v521;
  };
  p933.exports = vF71;
});
var vVF369 = vF3((p938, p939) => {
  var vVVF33712 = vVF337();
  var vVVF3645 = vVF364();
  var vF72 = (p940, p941, p942) => {
    let v524 = null;
    let v525 = null;
    let v526 = null;
    try {
      v526 = new vVVF3645(p941, p942);
    } catch {
      return null;
    }
    p940.forEach(p943 => {
      if (v526.test(p943) && (!v524 || v525.compare(p943) === 1)) {
        v524 = p943;
        v525 = new vVVF33712(v524, p942);
      }
    });
    return v524;
  };
  p939.exports = vF72;
});
var vVF370 = vF3((p944, p945) => {
  var vVVF33713 = vVF337();
  var vVVF3646 = vVF364();
  var vVVF3542 = vVF354();
  var vF73 = (p946, p947) => {
    p946 = new vVVF3646(p946, p947);
    let v527 = new vVVF33713("0.0.0");
    if (p946.test(v527) || (v527 = new vVVF33713("0.0.0-0"), p946.test(v527))) {
      return v527;
    }
    v527 = null;
    for (let v528 = 0; v528 < p946.set.length; ++v528) {
      let v529 = p946.set[v528];
      let v530 = null;
      v529.forEach(p948 => {
        let v531 = new vVVF33713(p948.semver.version);
        switch (p948.operator) {
          case ">":
            if (v531.prerelease.length === 0) {
              v531.patch++;
            } else {
              v531.prerelease.push(0);
            }
            v531.raw = v531.format();
          case "":
          case ">=":
            if (!v530 || vVVF3542(v531, v530)) {
              v530 = v531;
            }
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error("Unexpected operation: " + p948.operator);
        }
      });
      if (v530 && (!v527 || vVVF3542(v527, v530))) {
        v527 = v530;
      }
    }
    if (v527 && p946.test(v527)) {
      return v527;
    } else {
      return null;
    }
  };
  p945.exports = vF73;
});
var vVF371 = vF3((p949, p950) => {
  var vVVF3647 = vVF364();
  var vF74 = (p951, p952) => {
    try {
      return new vVVF3647(p951, p952).range || "*";
    } catch {
      return null;
    }
  };
  p950.exports = vF74;
});
var vVF372 = vF3((p953, p954) => {
  var vVVF33714 = vVF337();
  var vVVF365 = vVF365();
  var {
    ANY: _0x57f794
  } = vVVF365;
  var vVVF3648 = vVF364();
  var vVVF366 = vVF366();
  var vVVF3543 = vVF354();
  var vVVF3552 = vVF355();
  var vVVF3582 = vVF358();
  var vVVF3572 = vVF357();
  var vF75 = (p955, p956, p957, p958) => {
    p955 = new vVVF33714(p955, p958);
    p956 = new vVVF3648(p956, p958);
    let v532;
    let v533;
    let v534;
    let v535;
    let v536;
    switch (p957) {
      case ">":
        v532 = vVVF3543;
        v533 = vVVF3582;
        v534 = vVVF3552;
        v535 = ">";
        v536 = ">=";
        break;
      case "<":
        v532 = vVVF3552;
        v533 = vVVF3572;
        v534 = vVVF3543;
        v535 = "<";
        v536 = "<=";
        break;
      default:
        throw new TypeError("Must provide a hilo val of \"<\" or \">\"");
    }
    if (vVVF366(p955, p956, p958)) {
      return false;
    }
    for (let v537 = 0; v537 < p956.set.length; ++v537) {
      let v538 = p956.set[v537];
      let v539 = null;
      let v540 = null;
      v538.forEach(p959 => {
        if (p959.semver === _0x57f794) {
          p959 = new vVVF365(">=0.0.0");
        }
        v539 = v539 || p959;
        v540 = v540 || p959;
        if (v532(p959.semver, v539.semver, p958)) {
          v539 = p959;
        } else if (v534(p959.semver, v540.semver, p958)) {
          v540 = p959;
        }
      });
      if (v539.operator === v535 || v539.operator === v536 || (!v540.operator || v540.operator === v535) && v533(p955, v540.semver)) {
        return false;
      }
      if (v540.operator === v536 && v534(p955, v540.semver)) {
        return false;
      }
    }
    return true;
  };
  p954.exports = vF75;
});
var vVF373 = vF3((p960, p961) => {
  var vVVF3722 = vVF372();
  var vF76 = (p962, p963, p964) => vVVF3722(p962, p963, ">", p964);
  p961.exports = vF76;
});
var vVF374 = vF3((p965, p966) => {
  var vVVF3723 = vVF372();
  var vF77 = (p967, p968, p969) => vVVF3723(p967, p968, "<", p969);
  p966.exports = vF77;
});
var vVF375 = vF3((p970, p971) => {
  var vVVF3649 = vVF364();
  var vF78 = (p972, p973, p974) => {
    p972 = new vVVF3649(p972, p974);
    p973 = new vVVF3649(p973, p974);
    return p972.intersects(p973);
  };
  p971.exports = vF78;
});
var vVF376 = vF3((p975, p976) => {
  var vVVF3662 = vVF366();
  var vVVF3429 = vVF342();
  p976.exports = (p977, p978, p979) => {
    let v541 = [];
    let v542 = null;
    let v543 = null;
    let v544 = p977.sort((p980, p981) => vVVF3429(p980, p981, p979));
    for (let v545 of v544) {
      if (vVVF3662(v545, p978, p979)) {
        v543 = v545;
        v542 ||= v545;
      } else {
        if (v543) {
          v541.push([v542, v543]);
        }
        v543 = null;
        v542 = null;
      }
    }
    if (v542) {
      v541.push([v542, null]);
    }
    let v546 = [];
    for (let [v547, v548] of v541) {
      if (v547 === v548) {
        v546.push(v547);
      } else if (!v548 && v547 === v544[0]) {
        v546.push("*");
      } else if (v548) {
        if (v547 === v544[0]) {
          v546.push("<=" + v548);
        } else {
          v546.push(v547 + " - " + v548);
        }
      } else {
        v546.push(">=" + v547);
      }
    }
    let v549 = v546.join(" || ");
    let v550 = typeof p978.raw == "string" ? p978.raw : String(p978);
    if (v549.length < v550.length) {
      return v549;
    } else {
      return p978;
    }
  };
});
var vVF377 = vF3((p982, p983) => {
  var vVVF36410 = vVF364();
  var vVVF3652 = vVF365();
  var {
    ANY: _0xc67b2e
  } = vVVF3652;
  var vVVF3663 = vVF366();
  var vVVF34210 = vVF342();
  var vF79 = (p984, p985, p986 = {}) => {
    if (p984 === p985) {
      return true;
    }
    p984 = new vVVF36410(p984, p986);
    p985 = new vVVF36410(p985, p986);
    let v551 = false;
    _0x2c2450: for (let v552 of p984.set) {
      for (let v553 of p985.set) {
        let v_0x507905 = vF80(v552, v553, p986);
        v551 = v551 || v_0x507905 !== null;
        if (v_0x507905) {
          continue _0x2c2450;
        }
      }
      if (v551) {
        return false;
      }
    }
    return true;
  };
  var vF80 = (p987, p988, p989) => {
    if (p987 === p988) {
      return true;
    }
    if (p987.length === 1 && p987[0].semver === _0xc67b2e) {
      if (p988.length === 1 && p988[0].semver === _0xc67b2e) {
        return true;
      }
      if (p989.includePrerelease) {
        p987 = [new vVVF3652(">=0.0.0-0")];
      } else {
        p987 = [new vVVF3652(">=0.0.0")];
      }
    }
    if (p988.length === 1 && p988[0].semver === _0xc67b2e) {
      if (p989.includePrerelease) {
        return true;
      }
      p988 = [new vVVF3652(">=0.0.0")];
    }
    let v554 = new Set();
    let v555;
    let v556;
    for (let v557 of p987) {
      if (v557.operator === ">" || v557.operator === ">=") {
        v555 = vF81(v555, v557, p989);
      } else if (v557.operator === "<" || v557.operator === "<=") {
        v556 = vF82(v556, v557, p989);
      } else {
        v554.add(v557.semver);
      }
    }
    if (v554.size > 1) {
      return null;
    }
    let v558;
    if (v555 && v556) {
      v558 = vVVF34210(v555.semver, v556.semver, p989);
      if (v558 > 0) {
        return null;
      }
      if (v558 === 0 && (v555.operator !== ">=" || v556.operator !== "<=")) {
        return null;
      }
    }
    for (let v559 of v554) {
      if (v555 && !vVVF3663(v559, String(v555), p989) || v556 && !vVVF3663(v559, String(v556), p989)) {
        return null;
      }
      for (let v560 of p988) {
        if (!vVVF3663(v559, String(v560), p989)) {
          return false;
        }
      }
      return true;
    }
    let v561;
    let v562;
    let v563;
    let v564;
    let v565 = v556 && !p989.includePrerelease && v556.semver.prerelease.length ? v556.semver : false;
    let v566 = v555 && !p989.includePrerelease && v555.semver.prerelease.length ? v555.semver : false;
    if (v565 && v565.prerelease.length === 1 && v556.operator === "<" && v565.prerelease[0] === 0) {
      v565 = false;
    }
    for (let v567 of p988) {
      v564 = v564 || v567.operator === ">" || v567.operator === ">=";
      v563 = v563 || v567.operator === "<" || v567.operator === "<=";
      if (v555) {
        if (v566 && v567.semver.prerelease && v567.semver.prerelease.length && v567.semver.major === v566.major && v567.semver.minor === v566.minor && v567.semver.patch === v566.patch) {
          v566 = false;
        }
        if (v567.operator === ">" || v567.operator === ">=") {
          v561 = vF81(v555, v567, p989);
          if (v561 === v567 && v561 !== v555) {
            return false;
          }
        } else if (v555.operator === ">=" && !vVVF3663(v555.semver, String(v567), p989)) {
          return false;
        }
      }
      if (v556) {
        if (v565 && v567.semver.prerelease && v567.semver.prerelease.length && v567.semver.major === v565.major && v567.semver.minor === v565.minor && v567.semver.patch === v565.patch) {
          v565 = false;
        }
        if (v567.operator === "<" || v567.operator === "<=") {
          v562 = vF82(v556, v567, p989);
          if (v562 === v567 && v562 !== v556) {
            return false;
          }
        } else if (v556.operator === "<=" && !vVVF3663(v556.semver, String(v567), p989)) {
          return false;
        }
      }
      if (!v567.operator && (v556 || v555) && v558 !== 0) {
        return false;
      }
    }
    return (!v555 || !v563 || !!v556 || v558 === 0) && (!v556 || !v564 || !!v555 || v558 === 0) && !v566 && !v565;
  };
  var vF81 = (p990, p991, p992) => {
    if (!p990) {
      return p991;
    }
    let vVVVF34210 = vVVF34210(p990.semver, p991.semver, p992);
    if (vVVVF34210 > 0) {
      return p990;
    } else if (vVVVF34210 < 0 || p991.operator === ">" && p990.operator === ">=") {
      return p991;
    } else {
      return p990;
    }
  };
  var vF82 = (p993, p994, p995) => {
    if (!p993) {
      return p994;
    }
    let vVVVF342102 = vVVF34210(p993.semver, p994.semver, p995);
    if (vVVVF342102 < 0) {
      return p993;
    } else if (vVVVF342102 > 0 || p994.operator === "<" && p993.operator === "<=") {
      return p994;
    } else {
      return p993;
    }
  };
  p983.exports = vF79;
});
var vVF378 = vF3((p996, p997) => {
  var vVVF334 = vVF334();
  var vVVF332 = vVF332();
  var vVVF33715 = vVF337();
  var vVVF336 = vVF336();
  var vVVF3386 = vVF338();
  var vVVF339 = vVF339();
  var vVVF340 = vVF340();
  var vVVF341 = vVF341();
  var vVVF344 = vVF344();
  var vVVF345 = vVF345();
  var vVVF346 = vVF346();
  var vVVF347 = vVF347();
  var vVVF348 = vVF348();
  var vVVF34211 = vVF342();
  var vVVF349 = vVF349();
  var vVVF350 = vVF350();
  var vVVF3513 = vVF351();
  var vVVF3522 = vVF352();
  var vVVF3532 = vVF353();
  var vVVF3544 = vVF354();
  var vVVF3553 = vVF355();
  var vVVF3433 = vVF343();
  var vVVF3562 = vVF356();
  var vVVF3573 = vVF357();
  var vVVF3583 = vVF358();
  var vVVF3592 = vVF359();
  var vVVF360 = vVF360();
  var vVVF3653 = vVF365();
  var vVVF36411 = vVF364();
  var vVVF3664 = vVF366();
  var vVVF367 = vVF367();
  var vVVF368 = vVF368();
  var vVVF369 = vVF369();
  var vVVF370 = vVF370();
  var vVVF371 = vVF371();
  var vVVF3724 = vVF372();
  var vVVF3732 = vVF373();
  var vVVF374 = vVF374();
  var vVVF375 = vVF375();
  var vVVF376 = vVF376();
  var vVVF377 = vVF377();
  p997.exports = {
    parse: vVVF3386,
    valid: vVVF339,
    clean: vVVF340,
    inc: vVVF341,
    diff: vVVF344,
    major: vVVF345,
    minor: vVVF346,
    patch: vVVF347,
    prerelease: vVVF348,
    compare: vVVF34211,
    rcompare: vVVF349,
    compareLoose: vVVF350,
    compareBuild: vVVF3513,
    sort: vVVF3522,
    rsort: vVVF3532,
    gt: vVVF3544,
    lt: vVVF3553,
    eq: vVVF3433,
    neq: vVVF3562,
    gte: vVVF3573,
    lte: vVVF3583,
    cmp: vVVF3592,
    coerce: vVVF360,
    Comparator: vVVF3653,
    Range: vVVF36411,
    satisfies: vVVF3664,
    toComparators: vVVF367,
    maxSatisfying: vVVF368,
    minSatisfying: vVVF369,
    minVersion: vVVF370,
    validRange: vVVF371,
    outside: vVVF3724,
    gtr: vVVF3732,
    ltr: vVVF374,
    intersects: vVVF375,
    simplifyRange: vVVF376,
    subset: vVVF377,
    SemVer: vVVF33715,
    re: vVVF334.re,
    src: vVVF334.src,
    tokens: vVVF334.t,
    SEMVER_SPEC_VERSION: vVVF332.SEMVER_SPEC_VERSION,
    compareIdentifiers: vVVF336.compareIdentifiers,
    rcompareIdentifiers: vVVF336.rcompareIdentifiers
  };
});
var vVF379 = vF3((p998, p999) => {
  p999.exports = p1000 => {
    if (typeof p1000 != "string") {
      throw new TypeError("Expected a string");
    }
    return p1000.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  };
});
var vVF380 = vF3(p1001 => {
  var v568 = p1001 && p1001.__importDefault || function (p1002) {
    if (p1002 && p1002.__esModule) {
      return p1002;
    } else {
      return {
        default: p1002
      };
    }
  };
  Object.defineProperty(p1001, "__esModule", {
    value: true
  });
  p1001.createMatcherWithIndex = p1001.createMatcher = undefined;
  var vV568 = v568(vVF379());
  function f166(p1003) {
    let v_0x5aa14b = f167(Array.isArray(p1003) ? p1003 : [p1003]);
    return p1004 => v_0x5aa14b(p1004) !== -1;
  }
  p1001.createMatcher = f166;
  function f167(p1005) {
    switch (p1005.length) {
      case 0:
        return () => -1;
      case 1:
        return f173(p1005[0]);
    }
    let v569 = [];
    let v570 = false;
    let v571 = false;
    for (let v572 of p1005) {
      if (f172(v572)) {
        v570 = true;
        v569.push({
          ignore: true,
          match: f171(v572.substring(1))
        });
      } else {
        v571 = true;
        v569.push({
          ignore: false,
          match: f171(v572)
        });
      }
    }
    if (v570) {
      if (v571) {
        return f170.bind(null, v569);
      } else {
        return f169.bind(null, v569);
      }
    } else {
      return f168.bind(null, v569);
    }
  }
  p1001.createMatcherWithIndex = f167;
  function f168(p1006, p1007) {
    for (let v573 = 0; v573 < p1006.length; v573++) {
      if (p1006[v573].match(p1007)) {
        return v573;
      }
    }
    return -1;
  }
  function f169(p1008, p1009) {
    if (p1008.some(({
      match: _0x25a697
    }) => _0x25a697(p1009))) {
      return -1;
    } else {
      return 0;
    }
  }
  function f170(p1010, p1011) {
    let v574 = -1;
    for (let v575 = 0; v575 < p1010.length; v575++) {
      let {
        ignore: _0xf7803b,
        match: _0x53af89
      } = p1010[v575];
      if (_0xf7803b) {
        if (_0x53af89(p1011)) {
          v574 = -1;
        }
      } else if (v574 === -1 && _0x53af89(p1011)) {
        v574 = v575;
      }
    }
    return v574;
  }
  function f171(p1012) {
    if (p1012 === "*") {
      return () => true;
    }
    let v576 = (0, vV568.default)(p1012).replace(/\\\*/g, ".*");
    if (v576 === p1012) {
      return p1013 => p1013 === p1012;
    }
    let v577 = new RegExp("^" + v576 + "$");
    return p1014 => v577.test(p1014);
  }
  function f172(p1015) {
    return p1015.startsWith("!");
  }
  function f173(p1016) {
    let v_0x417975 = f174(p1016);
    return p1017 => v_0x417975(p1017) ? 0 : -1;
  }
  function f174(p1018) {
    if (!f172(p1018)) {
      return f171(p1018);
    }
    let v578 = p1018.substring(1);
    let vF171 = f171(v578);
    return p1019 => !vF171(p1019);
  }
});
var vVF381 = vF3((p1020, p1021) => {
  var v579 = typeof v579 === "undefined" ? globalThis : v579;
  (function (p1022, p1023) {
    if (typeof define == "function" && define.amd) {
      define([], p1023);
    } else if (typeof p1020 == "object") {
      p1021.exports = p1023();
    } else {
      p1022.untar = p1023();
    }
  })(p1020, function () {
    'use strict';

    function f175(p1024) {
      function f176(p1025) {
        for (var v580 = 0, v581 = v582.length; v580 < v581; ++v580) {
          v582[v580](p1025);
        }
        v583.push(p1025);
      }
      if (typeof Promise != "function") {
        throw new Error("Promise implementation not available in this environment.");
      }
      var v582 = [];
      var v583 = [];
      var v584 = new Promise(function (p1026, p1027) {
        p1024(p1026, p1027, f176);
      });
      v584.progress = function (p1028) {
        if (typeof p1028 != "function") {
          throw new Error("cb is not a function.");
        }
        for (var v585 = 0, v586 = v583.length; v585 < v586; ++v585) {
          p1028(v583[v585]);
        }
        v582.push(p1028);
        return v584;
      };
      var v587 = v584.then;
      v584.then = function (p1029, p1030, p1031) {
        v587.call(v584, p1029, p1030);
        if (p1031 !== undefined) {
          v584.progress(p1031);
        }
        return v584;
      };
      return v584;
    }
    function f177(p1032) {
      if (!(p1032 instanceof ArrayBuffer)) {
        throw new TypeError("arrayBuffer is not an instance of ArrayBuffer.");
      }
      if (!v591.Worker) {
        throw new Error("Worker implementation is not available in this environment.");
      }
      return new f175(function (p1033, p1034, p1035) {
        var v588 = new Worker(v590);
        var v589 = [];
        v588.onerror = function (p1036) {
          p1034(p1036);
        };
        v588.onmessage = function (p1037) {
          p1037 = p1037.data;
          switch (p1037.type) {
            case "log":
              console[p1037.data.level]("Worker: " + p1037.data.msg);
              break;
            case "extract":
              var v_0xc49fc1 = f178(p1037.data);
              v589.push(v_0xc49fc1);
              p1035(v_0xc49fc1);
              break;
            case "complete":
              v588.terminate();
              p1033(v589);
              break;
            case "error":
              v588.terminate();
              p1034(new Error(p1037.data.message));
              break;
            default:
              v588.terminate();
              p1034(new Error("Unknown message from worker: " + p1037.type));
          }
        };
        v588.postMessage({
          type: "extract",
          buffer: p1032
        }, [p1032]);
      });
    }
    function f178(p1038) {
      Object.defineProperties(p1038, v593);
      return p1038;
    }
    var v590;
    var v591 = v579 || this;
    var v592 = v591.URL || v591.webkitURL;
    var v593 = {
      blob: {
        get: function () {
          return this._blob ||= new Blob([this.buffer]);
        }
      },
      getBlobUrl: {
        value: function () {
          return this._blobUrl ||= v592.createObjectURL(this.blob);
        }
      },
      readAsString: {
        value: function () {
          var v594 = this.buffer;
          for (var v595 = v594.byteLength, v596 = 1, v597 = new DataView(v594), v598 = [], v599 = 0; v599 < v595; ++v599) {
            var v600 = v597.getUint8(v599 * v596, true);
            v598.push(v600);
          }
          return this._string = String.fromCharCode.apply(null, v598);
        }
      },
      readAsJSON: {
        value: function () {
          return JSON.parse(this.readAsString());
        }
      }
    };
    v590 = (v579 || this).URL.createObjectURL(new Blob(["\"use strict\";function UntarWorker(){}function decodeUTF8(e){for(var r=\"\",t=0;t<e.length;){var a=e[t++];if(a>127){if(a>191&&a<224){if(t>=e.length)throw\"UTF-8 decode: incomplete 2-byte sequence\";a=(31&a)<<6|63&e[t]}else if(a>223&&a<240){if(t+1>=e.length)throw\"UTF-8 decode: incomplete 3-byte sequence\";a=(15&a)<<12|(63&e[t])<<6|63&e[++t]}else{if(!(a>239&&a<248))throw\"UTF-8 decode: unknown multibyte start 0x\"+a.toString(16)+\" at index \"+(t-1);if(t+2>=e.length)throw\"UTF-8 decode: incomplete 4-byte sequence\";a=(7&a)<<18|(63&e[t])<<12|(63&e[++t])<<6|63&e[++t]}++t}if(a<=65535)r+=String.fromCharCode(a);else{if(!(a<=1114111))throw\"UTF-8 decode: code point 0x\"+a.toString(16)+\" exceeds UTF-16 reach\";a-=65536,r+=String.fromCharCode(a>>10|55296),r+=String.fromCharCode(1023&a|56320)}}return r}function PaxHeader(e){this._fields=e}function TarFile(){}function UntarStream(e){this._bufferView=new DataView(e),this._position=0}function UntarFileStream(e){this._stream=new UntarStream(e),this._globalPaxHeader=null}if(UntarWorker.prototype={onmessage:function(e){try{if(\"extract\"!==e.data.type)throw new Error(\"Unknown message type: \"+e.data.type);this.untarBuffer(e.data.buffer)}catch(r){this.postError(r)}},postError:function(e){this.postMessage({type:\"error\",data:{message:e.message}})},postLog:function(e,r){this.postMessage({type:\"log\",data:{level:e,msg:r}})},untarBuffer:function(e){try{for(var r=new UntarFileStream(e);r.hasNext();){var t=r.next();this.postMessage({type:\"extract\",data:t},[t.buffer])}this.postMessage({type:\"complete\"})}catch(a){this.postError(a)}},postMessage:function(e,r){self.postMessage(e,r)}},\"undefined\"!=typeof self){var worker=new UntarWorker;self.onmessage=function(e){worker.onmessage(e)}}PaxHeader.parse=function(e){for(var r=new Uint8Array(e),t=[];r.length>0;){var a=parseInt(decodeUTF8(r.subarray(0,r.indexOf(32)))),n=decodeUTF8(r.subarray(0,a)),i=n.match(/^\\d+ ([^=]+)=(.*)\\n$/);if(null===i)throw new Error(\"Invalid PAX header data format.\");var s=i[1],o=i[2];0===o.length?o=null:null!==o.match(/^\\d+$/)&&(o=parseInt(o));var f={name:s,value:o};t.push(f),r=r.subarray(a)}return new PaxHeader(t)},PaxHeader.prototype={applyHeader:function(e){this._fields.forEach(function(r){var t=r.name,a=r.value;\"path\"===t?(t=\"name\",void 0!==e.prefix&&delete e.prefix):\"linkpath\"===t&&(t=\"linkname\"),null===a?delete e[t]:e[t]=a})}},UntarStream.prototype={readString:function(e){for(var r=1,t=e*r,a=[],n=0;n<e;++n){var i=this._bufferView.getUint8(this.position()+n*r,!0);if(0===i)break;a.push(i)}return this.seek(t),String.fromCharCode.apply(null,a)},readBuffer:function(e){var r;if(\"function\"==typeof ArrayBuffer.prototype.slice)r=this._bufferView.buffer.slice(this.position(),this.position()+e);else{r=new ArrayBuffer(e);var t=new Uint8Array(r),a=new Uint8Array(this._bufferView.buffer,this.position(),e);t.set(a)}return this.seek(e),r},seek:function(e){this._position+=e},peekUint32:function(){return this._bufferView.getUint32(this.position(),!0)},position:function(e){return void 0===e?this._position:void(this._position=e)},size:function(){return this._bufferView.byteLength}},UntarFileStream.prototype={hasNext:function(){return this._stream.position()+4<this._stream.size()&&0!==this._stream.peekUint32()},next:function(){return this._readNextFile()},_readNextFile:function(){var e=this._stream,r=new TarFile,t=!1,a=null,n=e.position(),i=n+512;switch(r.name=e.readString(100),r.mode=e.readString(8),r.uid=parseInt(e.readString(8)),r.gid=parseInt(e.readString(8)),r.size=parseInt(e.readString(12),8),r.mtime=parseInt(e.readString(12),8),r.checksum=parseInt(e.readString(8)),r.type=e.readString(1),r.linkname=e.readString(100),r.ustarFormat=e.readString(6),r.ustarFormat.indexOf(\"ustar\")>-1&&(r.version=e.readString(2),r.uname=e.readString(32),r.gname=e.readString(32),r.devmajor=parseInt(e.readString(8)),r.devminor=parseInt(e.readString(8)),r.namePrefix=e.readString(155),r.namePrefix.length>0&&(r.name=r.namePrefix+\"/\"+r.name)),e.position(i),r.type){case\"0\":case\"\":r.buffer=e.readBuffer(r.size);break;case\"1\":break;case\"2\":break;case\"3\":break;case\"4\":break;case\"5\":break;case\"6\":break;case\"7\":break;case\"g\":t=!0,this._globalPaxHeader=PaxHeader.parse(e.readBuffer(r.size));break;case\"x\":t=!0,a=PaxHeader.parse(e.readBuffer(r.size))}void 0===r.buffer&&(r.buffer=new ArrayBuffer(0));var s=i+r.size;return r.size%512!==0&&(s+=512-r.size%512),e.position(s),t&&(r=this._readNextFile()),null!==this._globalPaxHeader&&this._globalPaxHeader.applyHeader(r),null!==a&&a.applyHeader(r),r}};"]));
    return f177;
  });
});
var vVF382 = vF3((p1039, p1040) => {
  var {
    hasOwnProperty: _0x43de55
  } = Object.prototype;
  var v601 = typeof process !== "undefined" && process.platform === "win32" ? "\r\n" : "\n";
  var vF83 = (p1041, p1042) => {
    let v602 = [];
    let v603 = "";
    if (typeof p1042 == "string") {
      p1042 = {
        section: p1042,
        whitespace: false
      };
    } else {
      p1042 = p1042 || Object.create(null);
      p1042.whitespace = p1042.whitespace === true;
    }
    let v604 = p1042.whitespace ? " = " : "=";
    for (let v605 of Object.keys(p1041)) {
      let v606 = p1041[v605];
      if (v606 && Array.isArray(v606)) {
        for (let v607 of v606) {
          v603 += vF87(v605 + "[]") + v604 + vF87(v607) + v601;
        }
      } else if (v606 && typeof v606 == "object") {
        v602.push(v605);
      } else {
        v603 += vF87(v605) + v604 + vF87(v606) + v601;
      }
    }
    if (p1042.section && v603.length) {
      v603 = "[" + vF87(p1042.section) + "]" + v601 + v603;
    }
    for (let v608 of v602) {
      let v609 = vF84(v608).join("\\.");
      let v610 = (p1042.section ? p1042.section + "." : "") + v609;
      let {
        whitespace: _0x48a619
      } = p1042;
      let vVF83 = vF83(p1041[v608], {
        section: v610,
        whitespace: _0x48a619
      });
      if (v603.length && vVF83.length) {
        v603 += v601;
      }
      v603 += vVF83;
    }
    return v603;
  };
  var vF84 = p1043 => p1043.replace(/\1/g, "LITERAL\\1LITERAL").replace(/\\\./g, "").split(/\./).map(p1044 => p1044.replace(/\1/g, "\\.").replace(/\2LITERAL\\1LITERAL\2/g, ""));
  var vF85 = p1045 => {
    let v611 = Object.create(null);
    let vV611 = v611;
    let v612 = null;
    let v613 = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;
    let v614 = p1045.split(/[\r\n]+/g);
    for (let v615 of v614) {
      if (!v615 || v615.match(/^\s*[;#]/)) {
        continue;
      }
      let v616 = v615.match(v613);
      if (!v616) {
        continue;
      }
      if (v616[1] !== undefined) {
        v612 = vF88(v616[1]);
        if (v612 === "__proto__") {
          vV611 = Object.create(null);
          continue;
        }
        vV611 = v611[v612] = v611[v612] || Object.create(null);
        continue;
      }
      let v_0x391293 = vF88(v616[2]);
      let v617 = v_0x391293.length > 2 && v_0x391293.slice(-2) === "[]";
      let v618 = v617 ? v_0x391293.slice(0, -2) : v_0x391293;
      if (v618 === "__proto__") {
        continue;
      }
      let v619 = v616[3] ? vF88(v616[4]) : true;
      let v620 = v619 === "true" || v619 === "false" || v619 === "null" ? JSON.parse(v619) : v619;
      if (v617) {
        if (_0x43de55.call(vV611, v618)) {
          if (!Array.isArray(vV611[v618])) {
            vV611[v618] = [vV611[v618]];
          }
        } else {
          vV611[v618] = [];
        }
      }
      if (Array.isArray(vV611[v618])) {
        vV611[v618].push(v620);
      } else {
        vV611[v618] = v620;
      }
    }
    let v621 = [];
    for (let v622 of Object.keys(v611)) {
      if (!_0x43de55.call(v611, v622) || typeof v611[v622] != "object" || Array.isArray(v611[v622])) {
        continue;
      }
      let vVF84 = vF84(v622);
      vV611 = v611;
      let v623 = vVF84.pop();
      let v624 = v623.replace(/\\\./g, ".");
      for (let v625 of vVF84) {
        if (v625 !== "__proto__") {
          if (!_0x43de55.call(vV611, v625) || typeof vV611[v625] != "object") {
            vV611[v625] = Object.create(null);
          }
          vV611 = vV611[v625];
        }
      }
      if (vV611 !== v611 || v624 !== v623) {
        vV611[v624] = v611[v622];
        v621.push(v622);
      }
    }
    for (let v626 of v621) {
      delete v611[v626];
    }
    return v611;
  };
  var vF86 = p1046 => p1046.startsWith("\"") && p1046.endsWith("\"") || p1046.startsWith("'") && p1046.endsWith("'");
  var vF87 = p1047 => typeof p1047 != "string" || p1047.match(/[=\r\n]/) || p1047.match(/^\[/) || p1047.length > 1 && vF86(p1047) || p1047 !== p1047.trim() ? JSON.stringify(p1047) : p1047.split(";").join("\\;").split("#").join("\\#");
  var vF88 = (p1048, p1049) => {
    p1048 = (p1048 || "").trim();
    if (vF86(p1048)) {
      if (p1048.charAt(0) === "'") {
        p1048 = p1048.slice(1, -1);
      }
      try {
        p1048 = JSON.parse(p1048);
      } catch {}
    } else {
      let v627 = false;
      let v628 = "";
      for (let v629 = 0, v630 = p1048.length; v629 < v630; v629++) {
        let v631 = p1048.charAt(v629);
        if (v627) {
          if ("\\;#".indexOf(v631) !== -1) {
            v628 += v631;
          } else {
            v628 += "\\" + v631;
          }
          v627 = false;
        } else {
          if (";#".indexOf(v631) !== -1) {
            break;
          }
          if (v631 === "\\") {
            v627 = true;
          } else {
            v628 += v631;
          }
        }
      }
      if (v627) {
        v628 += "\\";
      }
      return v628.trim();
    }
    return p1048;
  };
  p1040.exports = {
    parse: vF85,
    decode: vF85,
    stringify: vF83,
    encode: vF83,
    safe: vF87,
    unsafe: vF88
  };
});
var vVF383 = vF3((p1050, p1051) => {
  p1051.exports = "worker.js";
});
var vVF384 = vF3((p1052, p1053) => {
  p1053.exports = {
    ArrayIsArray(p1054) {
      return Array.isArray(p1054);
    },
    ArrayPrototypeIncludes(p1055, p1056) {
      return p1055.includes(p1056);
    },
    ArrayPrototypeIndexOf(p1057, p1058) {
      return p1057.indexOf(p1058);
    },
    ArrayPrototypeJoin(p1059, p1060) {
      return p1059.join(p1060);
    },
    ArrayPrototypeMap(p1061, p1062) {
      return p1061.map(p1062);
    },
    ArrayPrototypePop(p1063, p1064) {
      return p1063.pop(p1064);
    },
    ArrayPrototypePush(p1065, p1066) {
      return p1065.push(p1066);
    },
    ArrayPrototypeSlice(p1067, p1068, p1069) {
      return p1067.slice(p1068, p1069);
    },
    Error: Error,
    FunctionPrototypeCall(p1070, p1071, ..._0x5bfc84) {
      return p1070.call(p1071, ..._0x5bfc84);
    },
    FunctionPrototypeSymbolHasInstance(p1072, p1073) {
      return Function.prototype[Symbol.hasInstance].call(p1072, p1073);
    },
    MathFloor: Math.floor,
    Number: Number,
    NumberIsInteger: Number.isInteger,
    NumberIsNaN: Number.isNaN,
    NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
    NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
    NumberParseInt: Number.parseInt,
    ObjectDefineProperties(p1074, p1075) {
      return Object.defineProperties(p1074, p1075);
    },
    ObjectDefineProperty(p1076, p1077, p1078) {
      return Object.defineProperty(p1076, p1077, p1078);
    },
    ObjectGetOwnPropertyDescriptor(p1079, p1080) {
      return Object.getOwnPropertyDescriptor(p1079, p1080);
    },
    ObjectKeys(p1081) {
      return Object.keys(p1081);
    },
    ObjectSetPrototypeOf(p1082, p1083) {
      return Object.setPrototypeOf(p1082, p1083);
    },
    Promise: Promise,
    PromisePrototypeCatch(p1084, p1085) {
      return p1084.catch(p1085);
    },
    PromisePrototypeThen(p1086, p1087, p1088) {
      return p1086.then(p1087, p1088);
    },
    PromiseReject(p1089) {
      return Promise.reject(p1089);
    },
    ReflectApply: Reflect.apply,
    RegExpPrototypeTest(p1090, p1091) {
      return p1090.test(p1091);
    },
    SafeSet: Set,
    String: String,
    StringPrototypeSlice(p1092, p1093, p1094) {
      return p1092.slice(p1093, p1094);
    },
    StringPrototypeToLowerCase(p1095) {
      return p1095.toLowerCase();
    },
    StringPrototypeToUpperCase(p1096) {
      return p1096.toUpperCase();
    },
    StringPrototypeTrim(p1097) {
      return p1097.trim();
    },
    Symbol: Symbol,
    SymbolAsyncIterator: Symbol.asyncIterator,
    SymbolHasInstance: Symbol.hasInstance,
    SymbolIterator: Symbol.iterator,
    TypedArrayPrototypeSet(p1098, p1099, p1100) {
      return p1098.set(p1099, p1100);
    },
    Uint8Array: Uint8Array
  };
});
var vVF385 = vF3((p1101, p1102) => {
  vVF2();
  var vVF8 = vF8(v370);
  var v632 = Object.getPrototypeOf(async function () {}).constructor;
  var v633 = globalThis.Blob || vVF8.Blob;
  var v634 = typeof v633 !== "undefined" ? function (p1103) {
    return p1103 instanceof v633;
  } : function (p1104) {
    return false;
  };
  var vC7 = class extends Error {
    constructor(p1105) {
      if (!Array.isArray(p1105)) {
        throw new TypeError("Expected input to be an Array, got " + typeof p1105);
      }
      let v635 = "";
      for (let v636 = 0; v636 < p1105.length; v636++) {
        v635 += "    " + p1105[v636].stack + "\n";
      }
      super(v635);
      this.name = "AggregateError";
      this.errors = p1105;
    }
  };
  p1102.exports = {
    AggregateError: vC7,
    kEmptyObject: Object.freeze({}),
    once(p1106) {
      let v637 = false;
      return function (..._0x5b6adc) {
        if (!v637) {
          v637 = true;
          p1106.apply(this, _0x5b6adc);
        }
      };
    },
    createDeferredPromise: function () {
      let v638;
      let v639;
      return {
        promise: new Promise((p1107, p1108) => {
          v638 = p1107;
          v639 = p1108;
        }),
        resolve: v638,
        reject: v639
      };
    },
    promisify(p1109) {
      return new Promise((p1110, p1111) => {
        p1109((p1112, ..._0xe3b4e0) => p1112 ? p1111(p1112) : p1110(..._0xe3b4e0));
      });
    },
    debuglog() {
      return function () {};
    },
    format(p1113, ..._0x32342d) {
      return p1113.replace(/%([sdifj])/g, function (...[v640, v641]) {
        let v642 = _0x32342d.shift();
        if (v641 === "f") {
          return v642.toFixed(6);
        } else if (v641 === "j") {
          return JSON.stringify(v642);
        } else if (v641 === "s" && typeof v642 == "object") {
          return ((v642.constructor !== Object ? v642.constructor.name : "") + " {}").trim();
        } else {
          return v642.toString();
        }
      });
    },
    inspect(p1114) {
      switch (typeof p1114) {
        case "string":
          if (p1114.includes("'")) {
            if (p1114.includes("\"")) {
              if (!p1114.includes("`") && !p1114.includes("${")) {
                return "`" + p1114 + "`";
              }
            } else {
              return "\"" + p1114 + "\"";
            }
          }
          return "'" + p1114 + "'";
        case "number":
          if (isNaN(p1114)) {
            return "NaN";
          } else if (Object.is(p1114, -0)) {
            return String(p1114);
          } else {
            return p1114;
          }
        case "bigint":
          return String(p1114) + "n";
        case "boolean":
        case "undefined":
          return String(p1114);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(p1115) {
        return p1115 instanceof v632;
      },
      isArrayBufferView(p1116) {
        return ArrayBuffer.isView(p1116);
      }
    },
    isBlob: v634
  };
  p1102.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
});
var vVF386 = vF3((p1117, p1118) => {
  var v643 = typeof v643 === "undefined" ? globalThis : v643;
  var {
    AbortController: _0x1d4404,
    AbortSignal: _0x174353
  } = typeof self !== "undefined" ? self : typeof v643 !== "undefined" ? v643 : undefined;
  p1118.exports = _0x1d4404;
  p1118.exports.AbortSignal = _0x174353;
  p1118.exports.default = _0x1d4404;
});
var vVF387 = vF3((p1119, p1120) => {
  var {
    format: _0x5c147,
    inspect: _0x7ad7b6,
    AggregateError: _0xd75556
  } = vVF385();
  var v644 = globalThis.AggregateError || _0xd75556;
  var vSymbol13 = Symbol("kIsNodeError");
  var v645 = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"];
  var v646 = /^([A-Z][a-z0-9]*)+$/;
  var v647 = "__node_internal_";
  var v648 = {};
  function f179(p1121, p1122) {
    if (!p1121) {
      throw new v648.ERR_INTERNAL_ASSERTION(p1122);
    }
  }
  function f180(p1123) {
    let v649 = "";
    let v650 = p1123.length;
    let v651 = p1123[0] === "-" ? 1 : 0;
    for (; v650 >= v651 + 4; v650 -= 3) {
      v649 = "_" + p1123.slice(v650 - 3, v650) + v649;
    }
    return "" + p1123.slice(0, v650) + v649;
  }
  function f181(p1124, p1125, p1126) {
    if (typeof p1125 == "function") {
      f179(p1125.length <= p1126.length, "Code: " + p1124 + "; The provided arguments length (" + p1126.length + ") does not match the required ones (" + p1125.length + ").");
      return p1125(...p1126);
    }
    let v652 = (p1125.match(/%[dfijoOs]/g) || []).length;
    f179(v652 === p1126.length, "Code: " + p1124 + "; The provided arguments length (" + p1126.length + ") does not match the required ones (" + v652 + ").");
    if (p1126.length === 0) {
      return p1125;
    } else {
      return _0x5c147(p1125, ...p1126);
    }
  }
  function f182(p1127, p1128, p1129) {
    p1129 ||= Error;
    class C extends p1129 {
      constructor(..._0x16a15a) {
        super(f181(p1127, p1128, _0x16a15a));
      }
      toString() {
        return this.name + " [" + p1127 + "]: " + this.message;
      }
    }
    Object.defineProperties(C.prototype, {
      name: {
        value: p1129.name,
        writable: true,
        enumerable: false,
        configurable: true
      },
      toString: {
        value() {
          return this.name + " [" + p1127 + "]: " + this.message;
        },
        writable: true,
        enumerable: false,
        configurable: true
      }
    });
    C.prototype.code = p1127;
    C.prototype[vSymbol13] = true;
    v648[p1127] = C;
  }
  function f183(p1130) {
    let v653 = v647 + p1130.name;
    Object.defineProperty(p1130, "name", {
      value: v653
    });
    return p1130;
  }
  function f184(p1131, p1132) {
    if (p1131 && p1132 && p1131 !== p1132) {
      if (Array.isArray(p1132.errors)) {
        p1132.errors.push(p1131);
        return p1132;
      }
      let v654 = new v644([p1132, p1131], p1132.message);
      v654.code = p1132.code;
      return v654;
    }
    return p1131 || p1132;
  }
  var vC8 = class extends Error {
    constructor(p1133 = "The operation was aborted", p1134 = undefined) {
      if (p1134 !== undefined && typeof p1134 != "object") {
        throw new v648.ERR_INVALID_ARG_TYPE("options", "Object", p1134);
      }
      super(p1133, p1134);
      this.code = "ABORT_ERR";
      this.name = "AbortError";
    }
  };
  f182("ERR_ASSERTION", "%s", Error);
  f182("ERR_INVALID_ARG_TYPE", (p1135, p1136, p1137) => {
    f179(typeof p1135 == "string", "'name' must be a string");
    if (!Array.isArray(p1136)) {
      p1136 = [p1136];
    }
    let v655 = "The ";
    if (p1135.endsWith(" argument")) {
      v655 += p1135 + " ";
    } else {
      v655 += "\"" + p1135 + "\" " + (p1135.includes(".") ? "property" : "argument") + " ";
    }
    v655 += "must be ";
    let v656 = [];
    let v657 = [];
    let v658 = [];
    for (let v659 of p1136) {
      f179(typeof v659 == "string", "All expected entries have to be of type string");
      if (v645.includes(v659)) {
        v656.push(v659.toLowerCase());
      } else if (v646.test(v659)) {
        v657.push(v659);
      } else {
        f179(v659 !== "object", "The value \"object\" should be written as \"Object\"");
        v658.push(v659);
      }
    }
    if (v657.length > 0) {
      let v660 = v656.indexOf("object");
      if (v660 !== -1) {
        v656.splice(v656, v660, 1);
        v657.push("Object");
      }
    }
    if (v656.length > 0) {
      switch (v656.length) {
        case 1:
          v655 += "of type " + v656[0];
          break;
        case 2:
          v655 += "one of type " + v656[0] + " or " + v656[1];
          break;
        default:
          {
            let v661 = v656.pop();
            v655 += "one of type " + v656.join(", ") + ", or " + v661;
          }
      }
      if (v657.length > 0 || v658.length > 0) {
        v655 += " or ";
      }
    }
    if (v657.length > 0) {
      switch (v657.length) {
        case 1:
          v655 += "an instance of " + v657[0];
          break;
        case 2:
          v655 += "an instance of " + v657[0] + " or " + v657[1];
          break;
        default:
          {
            let v662 = v657.pop();
            v655 += "an instance of " + v657.join(", ") + ", or " + v662;
          }
      }
      if (v658.length > 0) {
        v655 += " or ";
      }
    }
    switch (v658.length) {
      case 0:
        break;
      case 1:
        if (v658[0].toLowerCase() !== v658[0]) {
          v655 += "an ";
        }
        v655 += "" + v658[0];
        break;
      case 2:
        v655 += "one of " + v658[0] + " or " + v658[1];
        break;
      default:
        {
          let v663 = v658.pop();
          v655 += "one of " + v658.join(", ") + ", or " + v663;
        }
    }
    if (p1137 == null) {
      v655 += ". Received " + p1137;
    } else if (typeof p1137 == "function" && p1137.name) {
      v655 += ". Received function " + p1137.name;
    } else if (typeof p1137 == "object") {
      var v664;
      if ((v664 = p1137.constructor) !== null && v664 !== undefined && v664.name) {
        v655 += ". Received an instance of " + p1137.constructor.name;
      } else {
        v655 += ". Received " + _0x7ad7b6(p1137, {
          depth: -1
        });
      }
    } else {
      let v_0x7ad7b6 = _0x7ad7b6(p1137, {
        colors: false
      });
      if (v_0x7ad7b6.length > 25) {
        v_0x7ad7b6 = v_0x7ad7b6.slice(0, 25) + "...";
      }
      v655 += ". Received type " + typeof p1137 + " (" + v_0x7ad7b6 + ")";
    }
    return v655;
  }, TypeError);
  f182("ERR_INVALID_ARG_VALUE", (p1138, p1139, p1140 = "is invalid") => {
    let v_0x7ad7b62 = _0x7ad7b6(p1139);
    if (v_0x7ad7b62.length > 128) {
      v_0x7ad7b62 = v_0x7ad7b62.slice(0, 128) + "...";
    }
    return "The " + (p1138.includes(".") ? "property" : "argument") + " '" + p1138 + "' " + p1140 + ". Received " + v_0x7ad7b62;
  }, TypeError);
  f182("ERR_INVALID_RETURN_VALUE", (p1141, p1142, p1143) => {
    var v665;
    let v666 = p1143 != null && (v665 = p1143.constructor) !== null && v665 !== undefined && v665.name ? "instance of " + p1143.constructor.name : "type " + typeof p1143;
    return "Expected " + p1141 + " to be returned from the \"" + p1142 + "\" function but got " + v666 + ".";
  }, TypeError);
  f182("ERR_MISSING_ARGS", (..._0x216eb1) => {
    f179(_0x216eb1.length > 0, "At least one arg needs to be specified");
    let v667;
    let v668 = _0x216eb1.length;
    _0x216eb1 = (Array.isArray(_0x216eb1) ? _0x216eb1 : [_0x216eb1]).map(p1144 => "\"" + p1144 + "\"").join(" or ");
    switch (v668) {
      case 1:
        v667 += "The " + _0x216eb1[0] + " argument";
        break;
      case 2:
        v667 += "The " + _0x216eb1[0] + " and " + _0x216eb1[1] + " arguments";
        break;
      default:
        {
          let v669 = _0x216eb1.pop();
          v667 += "The " + _0x216eb1.join(", ") + ", and " + v669 + " arguments";
        }
        break;
    }
    return v667 + " must be specified";
  }, TypeError);
  f182("ERR_OUT_OF_RANGE", (p1145, p1146, p1147) => {
    f179(p1146, "Missing \"range\" argument");
    let v670;
    if (Number.isInteger(p1147) && Math.abs(p1147) > 4294967296) {
      v670 = f180(String(p1147));
    } else if (typeof p1147 == "bigint") {
      v670 = String(p1147);
      if (p1147 > 0x2n ** 0x20n || p1147 < -(0x2n ** 0x20n)) {
        v670 = f180(v670);
      }
      v670 += "n";
    } else {
      v670 = _0x7ad7b6(p1147);
    }
    return "The value of \"" + p1145 + "\" is out of range. It must be " + p1146 + ". Received " + v670;
  }, RangeError);
  f182("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
  f182("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
  f182("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
  f182("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
  f182("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
  f182("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  f182("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
  f182("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
  f182("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
  f182("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
  f182("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
  p1120.exports = {
    AbortError: vC8,
    aggregateTwoErrors: f183(f184),
    hideStackFrames: f183,
    codes: v648
  };
});
var vVF388 = vF3((p1148, p1149) => {
  var {
    ArrayIsArray: _0x2f70d1,
    ArrayPrototypeIncludes: _0x55f442,
    ArrayPrototypeJoin: _0x2b58d1,
    ArrayPrototypeMap: _0xeec0a9,
    NumberIsInteger: _0x217b4a,
    NumberIsNaN: _0x26a3b5,
    NumberMAX_SAFE_INTEGER: _0x2a6171,
    NumberMIN_SAFE_INTEGER: _0x56d47d,
    NumberParseInt: _0x44df6a,
    ObjectPrototypeHasOwnProperty: _0x122f40,
    RegExpPrototypeExec: _0x141baf,
    String: _0x124af5,
    StringPrototypeToUpperCase: _0x52b6a5,
    StringPrototypeTrim: _0x153457
  } = vVF384();
  var {
    hideStackFrames: _0x1b060e,
    codes: {
      ERR_SOCKET_BAD_PORT: _0x38afd4,
      ERR_INVALID_ARG_TYPE: _0x35358d,
      ERR_INVALID_ARG_VALUE: _0x2b0867,
      ERR_OUT_OF_RANGE: _0x4046b3,
      ERR_UNKNOWN_SIGNAL: _0x50f7fc
    }
  } = vVF387();
  var {
    normalizeEncoding: _0x115013
  } = vVF385();
  var {
    isAsyncFunction: _0x56b2b6,
    isArrayBufferView: _0x55cd0b
  } = vVF385().types;
  var v671 = {};
  function f185(p1150) {
    return p1150 === (p1150 | 0);
  }
  function f186(p1151) {
    return p1151 === p1151 >>> 0;
  }
  var v672 = /^[0-7]+$/;
  var v673 = "must be a 32-bit unsigned integer or an octal string";
  function f187(p1152, p1153, p1154) {
    if (typeof p1152 === "undefined") {
      p1152 = p1154;
    }
    if (typeof p1152 == "string") {
      if (_0x141baf(v672, p1152) === null) {
        throw new _0x2b0867(p1153, p1152, v673);
      }
      p1152 = _0x44df6a(p1152, 8);
    }
    v_0x1b060e3(p1152, p1153);
    return p1152;
  }
  var v_0x1b060e = _0x1b060e((p1155, p1156, p1157 = _0x56d47d, p1158 = _0x2a6171) => {
    if (typeof p1155 != "number") {
      throw new _0x35358d(p1156, "number", p1155);
    }
    if (!_0x217b4a(p1155)) {
      throw new _0x4046b3(p1156, "an integer", p1155);
    }
    if (p1155 < p1157 || p1155 > p1158) {
      throw new _0x4046b3(p1156, ">= " + p1157 + " && <= " + p1158, p1155);
    }
  });
  var v_0x1b060e2 = _0x1b060e((p1159, p1160, p1161 = -2147483648, p1162 = 2147483647) => {
    if (typeof p1159 != "number") {
      throw new _0x35358d(p1160, "number", p1159);
    }
    if (!_0x217b4a(p1159)) {
      throw new _0x4046b3(p1160, "an integer", p1159);
    }
    if (p1159 < p1161 || p1159 > p1162) {
      throw new _0x4046b3(p1160, ">= " + p1161 + " && <= " + p1162, p1159);
    }
  });
  var v_0x1b060e3 = _0x1b060e((p1163, p1164, p1165 = false) => {
    if (typeof p1163 != "number") {
      throw new _0x35358d(p1164, "number", p1163);
    }
    if (!_0x217b4a(p1163)) {
      throw new _0x4046b3(p1164, "an integer", p1163);
    }
    let v674 = p1165 ? 1 : 0;
    let v675 = 4294967295;
    if (p1163 < v674 || p1163 > v675) {
      throw new _0x4046b3(p1164, ">= " + v674 + " && <= " + v675, p1163);
    }
  });
  function f188(p1166, p1167) {
    if (typeof p1166 != "string") {
      throw new _0x35358d(p1167, "string", p1166);
    }
  }
  function f189(p1168, p1169, p1170 = undefined, p1171) {
    if (typeof p1168 != "number") {
      throw new _0x35358d(p1169, "number", p1168);
    }
    if (p1170 != null && p1168 < p1170 || p1171 != null && p1168 > p1171 || (p1170 != null || p1171 != null) && _0x26a3b5(p1168)) {
      throw new _0x4046b3(p1169, "" + (p1170 != null ? ">= " + p1170 : "") + (p1170 != null && p1171 != null ? " && " : "") + (p1171 != null ? "<= " + p1171 : ""), p1168);
    }
  }
  var v_0x1b060e4 = _0x1b060e((p1172, p1173, p1174) => {
    if (!_0x55f442(p1174, p1172)) {
      let v_0x2b58d1 = _0x2b58d1(_0xeec0a9(p1174, p1175 => typeof p1175 == "string" ? "'" + p1175 + "'" : _0x124af5(p1175)), ", ");
      let v676 = "must be one of: " + v_0x2b58d1;
      throw new _0x2b0867(p1173, p1172, v676);
    }
  });
  function f190(p1176, p1177) {
    if (typeof p1176 != "boolean") {
      throw new _0x35358d(p1177, "boolean", p1176);
    }
  }
  function f191(p1178, p1179, p1180) {
    if (p1178 == null || !_0x122f40(p1178, p1179)) {
      return p1180;
    } else {
      return p1178[p1179];
    }
  }
  var v_0x1b060e5 = _0x1b060e((p1181, p1182, p1183 = null) => {
    let vF191 = f191(p1183, "allowArray", false);
    let vF1912 = f191(p1183, "allowFunction", false);
    if (!f191(p1183, "nullable", false) && p1181 === null || !vF191 && _0x2f70d1(p1181) || typeof p1181 != "object" && (!vF1912 || typeof p1181 != "function")) {
      throw new _0x35358d(p1182, "Object", p1181);
    }
  });
  var v_0x1b060e6 = _0x1b060e((p1184, p1185, p1186 = 0) => {
    if (!_0x2f70d1(p1184)) {
      throw new _0x35358d(p1185, "Array", p1184);
    }
    if (p1184.length < p1186) {
      let v677 = "must be longer than " + p1186;
      throw new _0x2b0867(p1185, p1184, v677);
    }
  });
  function f192(p1187, p1188 = "signal") {
    f188(p1187, p1188);
    if (v671[p1187] === undefined) {
      throw v671[_0x52b6a5(p1187)] !== undefined ? new _0x50f7fc(p1187 + " (signals must use all capital letters)") : new _0x50f7fc(p1187);
    }
  }
  var v_0x1b060e7 = _0x1b060e((p1189, p1190 = "buffer") => {
    if (!_0x55cd0b(p1189)) {
      throw new _0x35358d(p1190, ["Buffer", "TypedArray", "DataView"], p1189);
    }
  });
  function f193(p1191, p1192) {
    let v_0x115013 = _0x115013(p1192);
    let v678 = p1191.length;
    if (v_0x115013 === "hex" && v678 % 2 !== 0) {
      throw new _0x2b0867("encoding", p1192, "is invalid for data of length " + v678);
    }
  }
  function f194(p1193, p1194 = "Port", p1195 = true) {
    if (typeof p1193 != "number" && typeof p1193 != "string" || typeof p1193 == "string" && _0x153457(p1193).length === 0 || +p1193 !== +p1193 >>> 0 || p1193 > 65535 || p1193 === 0 && !p1195) {
      throw new _0x38afd4(p1194, p1193, p1195);
    }
    return p1193 | 0;
  }
  var v_0x1b060e8 = _0x1b060e((p1196, p1197) => {
    if (p1196 !== undefined && (p1196 === null || typeof p1196 != "object" || !("aborted" in p1196))) {
      throw new _0x35358d(p1197, "AbortSignal", p1196);
    }
  });
  var v_0x1b060e9 = _0x1b060e((p1198, p1199) => {
    if (typeof p1198 != "function") {
      throw new _0x35358d(p1199, "Function", p1198);
    }
  });
  var v_0x1b060e10 = _0x1b060e((p1200, p1201) => {
    if (typeof p1200 != "function" || _0x56b2b6(p1200)) {
      throw new _0x35358d(p1201, "Function", p1200);
    }
  });
  var v_0x1b060e11 = _0x1b060e((p1202, p1203) => {
    if (p1202 !== undefined) {
      throw new _0x35358d(p1203, "undefined", p1202);
    }
  });
  function f195(p1204, p1205, p1206) {
    if (!_0x55f442(p1206, p1204)) {
      throw new _0x35358d(p1205, "('" + _0x2b58d1(p1206, "|") + "')", p1204);
    }
  }
  p1149.exports = {
    isInt32: f185,
    isUint32: f186,
    parseFileMode: f187,
    validateArray: v_0x1b060e6,
    validateBoolean: f190,
    validateBuffer: v_0x1b060e7,
    validateEncoding: f193,
    validateFunction: v_0x1b060e9,
    validateInt32: v_0x1b060e2,
    validateInteger: v_0x1b060e,
    validateNumber: f189,
    validateObject: v_0x1b060e5,
    validateOneOf: v_0x1b060e4,
    validatePlainFunction: v_0x1b060e10,
    validatePort: f194,
    validateSignalName: f192,
    validateString: f188,
    validateUint32: v_0x1b060e3,
    validateUndefined: v_0x1b060e11,
    validateUnion: f195,
    validateAbortSignal: v_0x1b060e8
  };
});
var vVF389 = vF3((p1207, p1208) => {
  var v679 = p1208.exports = {};
  var v680;
  var v681;
  function f196() {
    throw new Error("setTimeout has not been defined");
  }
  function f197() {
    throw new Error("clearTimeout has not been defined");
  }
  (function () {
    try {
      if (typeof setTimeout == "function") {
        v680 = setTimeout;
      } else {
        v680 = f196;
      }
    } catch {
      v680 = f196;
    }
    try {
      if (typeof clearTimeout == "function") {
        v681 = clearTimeout;
      } else {
        v681 = f197;
      }
    } catch {
      v681 = f197;
    }
  })();
  function f198(p1209) {
    if (v680 === setTimeout) {
      return setTimeout(p1209, 0);
    }
    if ((v680 === f196 || !v680) && setTimeout) {
      v680 = setTimeout;
      return setTimeout(p1209, 0);
    }
    try {
      return v680(p1209, 0);
    } catch {
      try {
        return v680.call(null, p1209, 0);
      } catch {
        return v680.call(this, p1209, 0);
      }
    }
  }
  function f199(p1210) {
    if (v681 === clearTimeout) {
      return clearTimeout(p1210);
    }
    if ((v681 === f197 || !v681) && clearTimeout) {
      v681 = clearTimeout;
      return clearTimeout(p1210);
    }
    try {
      return v681(p1210);
    } catch {
      try {
        return v681.call(null, p1210);
      } catch {
        return v681.call(this, p1210);
      }
    }
  }
  var v682 = [];
  var v683 = false;
  var v684;
  var v685 = -1;
  function f200() {
    if (!!v683 && !!v684) {
      v683 = false;
      if (v684.length) {
        v682 = v684.concat(v682);
      } else {
        v685 = -1;
      }
      if (v682.length) {
        f201();
      }
    }
  }
  function f201() {
    if (!v683) {
      var vF198 = f198(f200);
      v683 = true;
      for (var v686 = v682.length; v686;) {
        v684 = v682;
        v682 = [];
        while (++v685 < v686) {
          if (v684) {
            v684[v685].run();
          }
        }
        v685 = -1;
        v686 = v682.length;
      }
      v684 = null;
      v683 = false;
      f199(vF198);
    }
  }
  v679.nextTick = function (p1211) {
    var v687 = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var v688 = 1; v688 < arguments.length; v688++) {
        v687[v688 - 1] = arguments[v688];
      }
    }
    v682.push(new f202(p1211, v687));
    if (v682.length === 1 && !v683) {
      f198(f201);
    }
  };
  function f202(p1212, p1213) {
    this.fun = p1212;
    this.array = p1213;
  }
  f202.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  v679.title = "browser";
  v679.browser = true;
  v679.env = {};
  v679.argv = [];
  v679.version = "";
  v679.versions = {};
  function f203() {}
  v679.on = f203;
  v679.addListener = f203;
  v679.once = f203;
  v679.off = f203;
  v679.removeListener = f203;
  v679.removeAllListeners = f203;
  v679.emit = f203;
  v679.prependListener = f203;
  v679.prependOnceListener = f203;
  v679.listeners = function (p1214) {
    return [];
  };
  v679.binding = function (p1215) {
    throw new Error("process.binding is not supported");
  };
  v679.cwd = function () {
    return "/";
  };
  v679.chdir = function (p1216) {
    throw new Error("process.chdir is not supported");
  };
  v679.umask = function () {
    return 0;
  };
});
var vVF390 = vF3((p1217, p1218) => {
  var {
    Symbol: _0x2826ed,
    SymbolAsyncIterator: _0x2e05c8,
    SymbolIterator: _0x4c2288
  } = vVF384();
  var v_0x2826ed = _0x2826ed("kDestroyed");
  var v_0x2826ed2 = _0x2826ed("kIsErrored");
  var v_0x2826ed3 = _0x2826ed("kIsReadable");
  var v_0x2826ed4 = _0x2826ed("kIsDisturbed");
  function f204(p1219, p1220 = false) {
    return !!p1219 && typeof p1219.pipe == "function" && typeof p1219.on == "function" && (!p1220 || typeof p1219.pause == "function" && typeof p1219.resume == "function") && (!p1219._writableState || p1219._readableState?.readable !== false) && (!p1219._writableState || !!p1219._readableState);
  }
  function f205(p1221) {
    return !!p1221 && typeof p1221.write == "function" && typeof p1221.on == "function" && (!p1221._readableState || p1221._writableState?.writable !== false);
  }
  function f206(p1222) {
    return !!p1222 && typeof p1222.pipe == "function" && !!p1222._readableState && typeof p1222.on == "function" && typeof p1222.write == "function";
  }
  function f207(p1223) {
    return p1223 && (p1223._readableState || p1223._writableState || typeof p1223.write == "function" && typeof p1223.on == "function" || typeof p1223.pipe == "function" && typeof p1223.on == "function");
  }
  function f208(p1224, p1225) {
    if (p1224 == null) {
      return false;
    } else if (p1225 === true) {
      return typeof p1224[_0x2e05c8] == "function";
    } else if (p1225 === false) {
      return typeof p1224[_0x4c2288] == "function";
    } else {
      return typeof p1224[_0x2e05c8] == "function" || typeof p1224[_0x4c2288] == "function";
    }
  }
  function f209(p1226) {
    if (!f207(p1226)) {
      return null;
    }
    let v689 = p1226._writableState;
    let v690 = p1226._readableState;
    let v691 = v689 || v690;
    return !!p1226.destroyed || !!p1226[v_0x2826ed] || v691 != null && !!v691.destroyed;
  }
  function f210(p1227) {
    if (!f205(p1227)) {
      return null;
    }
    if (p1227.writableEnded === true) {
      return true;
    }
    let v692 = p1227._writableState;
    if (v692 != null && v692.errored) {
      return false;
    } else if (typeof v692?.ended != "boolean") {
      return null;
    } else {
      return v692.ended;
    }
  }
  function f211(p1228, p1229) {
    if (!f205(p1228)) {
      return null;
    }
    if (p1228.writableFinished === true) {
      return true;
    }
    let v693 = p1228._writableState;
    if (v693 != null && v693.errored) {
      return false;
    } else if (typeof v693?.finished != "boolean") {
      return null;
    } else {
      return !!v693.finished || p1229 === false && v693.ended === true && v693.length === 0;
    }
  }
  function f212(p1230) {
    if (!f204(p1230)) {
      return null;
    }
    if (p1230.readableEnded === true) {
      return true;
    }
    let v694 = p1230._readableState;
    if (!v694 || v694.errored) {
      return false;
    } else if (typeof v694?.ended != "boolean") {
      return null;
    } else {
      return v694.ended;
    }
  }
  function f213(p1231, p1232) {
    if (!f204(p1231)) {
      return null;
    }
    let v695 = p1231._readableState;
    if (v695 != null && v695.errored) {
      return false;
    } else if (typeof v695?.endEmitted != "boolean") {
      return null;
    } else {
      return !!v695.endEmitted || p1232 === false && v695.ended === true && v695.length === 0;
    }
  }
  function f214(p1233) {
    if (p1233 && p1233[v_0x2826ed3] != null) {
      return p1233[v_0x2826ed3];
    } else if (typeof p1233?.readable != "boolean") {
      return null;
    } else if (f209(p1233)) {
      return false;
    } else {
      return f204(p1233) && p1233.readable && !f213(p1233);
    }
  }
  function f215(p1234) {
    if (typeof p1234?.writable != "boolean") {
      return null;
    } else if (f209(p1234)) {
      return false;
    } else {
      return f205(p1234) && p1234.writable && !f210(p1234);
    }
  }
  function f216(p1235, p1236) {
    if (f207(p1235)) {
      if (f209(p1235)) {
        return true;
      } else {
        return (p1236?.readable === false || !f214(p1235)) && (p1236?.writable === false || !f215(p1235));
      }
    } else {
      return null;
    }
  }
  function f217(p1237) {
    if (f207(p1237)) {
      if (p1237.writableErrored) {
        return p1237.writableErrored;
      } else {
        return p1237._writableState?.errored ?? null;
      }
    } else {
      return null;
    }
  }
  function f218(p1238) {
    if (f207(p1238)) {
      if (p1238.readableErrored) {
        return p1238.readableErrored;
      } else {
        return p1238._readableState?.errored ?? null;
      }
    } else {
      return null;
    }
  }
  function f219(p1239) {
    if (!f207(p1239)) {
      return null;
    }
    if (typeof p1239.closed == "boolean") {
      return p1239.closed;
    }
    let v696 = p1239._writableState;
    let v697 = p1239._readableState;
    if (typeof v696?.closed == "boolean" || typeof v697?.closed == "boolean") {
      return v696?.closed || v697?.closed;
    } else if (typeof p1239._closed == "boolean" && f220(p1239)) {
      return p1239._closed;
    } else {
      return null;
    }
  }
  function f220(p1240) {
    return typeof p1240._closed == "boolean" && typeof p1240._defaultKeepAlive == "boolean" && typeof p1240._removedConnection == "boolean" && typeof p1240._removedContLen == "boolean";
  }
  function f221(p1241) {
    return typeof p1241._sent100 == "boolean" && f220(p1241);
  }
  function f222(p1242) {
    return typeof p1242._consuming == "boolean" && typeof p1242._dumped == "boolean" && p1242.req?.upgradeOrConnect === undefined;
  }
  function f223(p1243) {
    if (!f207(p1243)) {
      return null;
    }
    let v698 = p1243._writableState;
    let v699 = p1243._readableState;
    let v700 = v698 || v699;
    return !v700 && f221(p1243) || !!v700 && !!v700.autoDestroy && !!v700.emitClose && v700.closed === false;
  }
  function f224(p1244) {
    return !!p1244 && !!(p1244[v_0x2826ed4] ?? (p1244.readableDidRead || p1244.readableAborted));
  }
  function f225(p1245) {
    return !!p1245 && !!(p1245[v_0x2826ed2] ?? p1245.readableErrored ?? p1245.writableErrored ?? p1245._readableState?.errorEmitted ?? p1245._writableState?.errorEmitted ?? p1245._readableState?.errored ?? p1245._writableState?.errored);
  }
  p1218.exports = {
    kDestroyed: v_0x2826ed,
    isDisturbed: f224,
    kIsDisturbed: v_0x2826ed4,
    isErrored: f225,
    kIsErrored: v_0x2826ed2,
    isReadable: f214,
    kIsReadable: v_0x2826ed3,
    isClosed: f219,
    isDestroyed: f209,
    isDuplexNodeStream: f206,
    isFinished: f216,
    isIterable: f208,
    isReadableNodeStream: f204,
    isReadableEnded: f212,
    isReadableFinished: f213,
    isReadableErrored: f218,
    isNodeStream: f207,
    isWritable: f215,
    isWritableNodeStream: f205,
    isWritableEnded: f210,
    isWritableFinished: f211,
    isWritableErrored: f217,
    isServerRequest: f222,
    isServerResponse: f221,
    willEmitClose: f223
  };
});
var vVF391 = vF3((p1246, p1247) => {
  var vVVF389 = vVF389();
  var {
    AbortError: _0x4d0b4e,
    codes: _0x2c56b6
  } = vVF387();
  var {
    ERR_INVALID_ARG_TYPE: _0x24592d,
    ERR_STREAM_PREMATURE_CLOSE: _0x27489b
  } = _0x2c56b6;
  var {
    kEmptyObject: _0x49c278,
    once: _0xf1c6fd
  } = vVF385();
  var {
    validateAbortSignal: _0x3dc6b6,
    validateFunction: _0x493f25,
    validateObject: _0x45d962
  } = vVF388();
  var {
    Promise: _0x53e2e9
  } = vVF384();
  var {
    isClosed: _0x253b13,
    isReadable: _0x5434ea,
    isReadableNodeStream: _0x4d4922,
    isReadableFinished: _0x33584a,
    isReadableErrored: _0x3219a7,
    isWritable: _0x14654f,
    isWritableNodeStream: _0x14c220,
    isWritableFinished: _0x16c808,
    isWritableErrored: _0xedbcfc,
    isNodeStream: _0x1b65e0,
    willEmitClose: _0x2ebc0f
  } = vVF390();
  function f226(p1248) {
    return p1248.setHeader && typeof p1248.abort == "function";
  }
  var vF89 = () => {};
  function f227(p1249, p1250, p1251) {
    if (arguments.length === 2) {
      p1251 = p1250;
      p1250 = _0x49c278;
    } else if (p1250 == null) {
      p1250 = _0x49c278;
    } else {
      _0x45d962(p1250, "options");
    }
    _0x493f25(p1251, "callback");
    _0x3dc6b6(p1250.signal, "options.signal");
    p1251 = _0xf1c6fd(p1251);
    let v701 = p1250.readable ?? _0x4d4922(p1249);
    let v702 = p1250.writable ?? _0x14c220(p1249);
    if (!_0x1b65e0(p1249)) {
      throw new _0x24592d("stream", "Stream", p1249);
    }
    let v703 = p1249._writableState;
    let v704 = p1249._readableState;
    let vF90 = () => {
      if (!p1249.writable) {
        vF91();
      }
    };
    let v705 = _0x2ebc0f(p1249) && _0x4d4922(p1249) === v701 && _0x14c220(p1249) === v702;
    let v_0x16c808 = _0x16c808(p1249, false);
    let vF91 = () => {
      v_0x16c808 = true;
      if (p1249.destroyed) {
        v705 = false;
      }
      if ((!v705 || !!p1249.readable && !v701) && (!v701 || v_0x33584a)) {
        p1251.call(p1249);
      }
    };
    let v_0x33584a = _0x33584a(p1249, false);
    let vF92 = () => {
      v_0x33584a = true;
      if (p1249.destroyed) {
        v705 = false;
      }
      if ((!v705 || !!p1249.writable && !v702) && (!v702 || v_0x16c808)) {
        p1251.call(p1249);
      }
    };
    let vF93 = p1252 => {
      p1251.call(p1249, p1252);
    };
    let v_0x253b13 = _0x253b13(p1249);
    let vF94 = () => {
      v_0x253b13 = true;
      let v706 = _0xedbcfc(p1249) || _0x3219a7(p1249);
      if (v706 && typeof v706 != "boolean") {
        return p1251.call(p1249, v706);
      }
      if (v701 && !v_0x33584a && _0x4d4922(p1249, true) && !_0x33584a(p1249, false)) {
        return p1251.call(p1249, new _0x27489b());
      }
      if (v702 && !v_0x16c808 && !_0x16c808(p1249, false)) {
        return p1251.call(p1249, new _0x27489b());
      }
      p1251.call(p1249);
    };
    let vF95 = () => {
      p1249.req.on("finish", vF91);
    };
    if (f226(p1249)) {
      p1249.on("complete", vF91);
      if (!v705) {
        p1249.on("abort", vF94);
      }
      if (p1249.req) {
        vF95();
      } else {
        p1249.on("request", vF95);
      }
    } else if (v702 && !v703) {
      p1249.on("end", vF90);
      p1249.on("close", vF90);
    }
    if (!v705 && typeof p1249.aborted == "boolean") {
      p1249.on("aborted", vF94);
    }
    p1249.on("end", vF92);
    p1249.on("finish", vF91);
    if (p1250.error !== false) {
      p1249.on("error", vF93);
    }
    p1249.on("close", vF94);
    if (v_0x253b13) {
      vVVF389.nextTick(vF94);
    } else if (v703 != null && v703.errorEmitted || v704 != null && v704.errorEmitted) {
      if (!v705) {
        vVVF389.nextTick(vF94);
      }
    } else if (!v701 && (!v705 || _0x5434ea(p1249)) && (v_0x16c808 || _0x14654f(p1249) === false) || !v702 && (!v705 || _0x14654f(p1249)) && (v_0x33584a || _0x5434ea(p1249) === false) || v704 && p1249.req && p1249.aborted) {
      vVVF389.nextTick(vF94);
    }
    let vF96 = () => {
      p1251 = vF89;
      p1249.removeListener("aborted", vF94);
      p1249.removeListener("complete", vF91);
      p1249.removeListener("abort", vF94);
      p1249.removeListener("request", vF95);
      if (p1249.req) {
        p1249.req.removeListener("finish", vF91);
      }
      p1249.removeListener("end", vF90);
      p1249.removeListener("close", vF90);
      p1249.removeListener("finish", vF91);
      p1249.removeListener("end", vF92);
      p1249.removeListener("error", vF93);
      p1249.removeListener("close", vF94);
    };
    if (p1250.signal && !v_0x253b13) {
      let vF97 = () => {
        let vP1251 = p1251;
        vF96();
        vP1251.call(p1249, new _0x4d0b4e(undefined, {
          cause: p1250.signal.reason
        }));
      };
      if (p1250.signal.aborted) {
        vVVF389.nextTick(vF97);
      } else {
        let vP12512 = p1251;
        p1251 = _0xf1c6fd((..._0x35abf1) => {
          p1250.signal.removeEventListener("abort", vF97);
          vP12512.apply(p1249, _0x35abf1);
        });
        p1250.signal.addEventListener("abort", vF97);
      }
    }
    return vF96;
  }
  function f228(p1253, p1254) {
    return new _0x53e2e9((p1255, p1256) => {
      f227(p1253, p1254, p1257 => {
        if (p1257) {
          p1256(p1257);
        } else {
          p1255();
        }
      });
    });
  }
  p1247.exports = f227;
  p1247.exports.finished = f228;
});
var vVF392 = vF3((p1258, p1259) => {
  var v707 = globalThis.AbortController || vVF386().AbortController;
  var {
    codes: {
      ERR_INVALID_ARG_TYPE: _0x471aa2,
      ERR_MISSING_ARGS: _0x8eb172,
      ERR_OUT_OF_RANGE: _0x25349d
    },
    AbortError: _0x1c9406
  } = vVF387();
  var {
    validateAbortSignal: _0x428526,
    validateInteger: _0x1e7a97,
    validateObject: _0x3422e6
  } = vVF388();
  var v708 = vVF384().Symbol("kWeak");
  var {
    finished: _0x1fa8df
  } = vVF391();
  var {
    ArrayPrototypePush: _0x412f12,
    MathFloor: _0x334117,
    Number: _0x59d814,
    NumberIsNaN: _0x1f38e3,
    Promise: _0x12aacf,
    PromiseReject: _0x368391,
    PromisePrototypeThen: _0x61057,
    Symbol: _0x59cca0
  } = vVF384();
  var v_0x59cca0 = _0x59cca0("kEmpty");
  var v_0x59cca02 = _0x59cca0("kEof");
  function f229(p1260, p1261) {
    if (typeof p1260 != "function") {
      throw new _0x471aa2("fn", ["Function", "AsyncFunction"], p1260);
    }
    if (p1261 != null) {
      _0x3422e6(p1261, "options");
    }
    if (p1261?.signal != null) {
      _0x428526(p1261.signal, "options.signal");
    }
    let v709 = 1;
    if (p1261?.concurrency != null) {
      v709 = _0x334117(p1261.concurrency);
    }
    _0x1e7a97(v709, "concurrency", 1);
    return async function* () {
      var v710;
      var v711;
      let v712 = new v707();
      let vThis4 = this;
      let v713 = [];
      let v714 = v712.signal;
      let v715 = {
        signal: v714
      };
      let vF99 = () => v712.abort();
      if (p1261 != null && (v710 = p1261.signal) !== null && v710 !== undefined && v710.aborted) {
        vF99();
      }
      if (p1261 != null && (v711 = p1261.signal) !== null && v711 !== undefined) {
        v711.addEventListener("abort", vF99);
      }
      let v716;
      let v717;
      let v718 = false;
      function f230() {
        v718 = true;
      }
      async function f231() {
        try {
          for await (let v719 of vThis4) {
            var v720;
            if (v718) {
              return;
            }
            if (v714.aborted) {
              throw new _0x1c9406();
            }
            try {
              v719 = p1260(v719, v715);
            } catch (_0x1c4f42) {
              v719 = _0x368391(_0x1c4f42);
            }
            if (v719 !== v_0x59cca0) {
              if (typeof ((v720 = v719) === null || v720 === undefined ? undefined : v720.catch) == "function") {
                v719.catch(f230);
              }
              v713.push(v719);
              if (v716) {
                v716();
                v716 = null;
              }
              if (!v718 && v713.length && v713.length >= v709) {
                await new _0x12aacf(p1262 => {
                  v717 = p1262;
                });
              }
            }
          }
          v713.push(v_0x59cca02);
        } catch (_0x25321e) {
          let v_0x368391 = _0x368391(_0x25321e);
          _0x61057(v_0x368391, undefined, f230);
          v713.push(v_0x368391);
        } finally {
          var v721;
          v718 = true;
          if (v716) {
            v716();
            v716 = null;
          }
          if (p1261 != null && (v721 = p1261.signal) !== null && v721 !== undefined) {
            v721.removeEventListener("abort", vF99);
          }
        }
      }
      f231();
      try {
        while (true) {
          while (v713.length > 0) {
            let v722 = await v713[0];
            if (v722 === v_0x59cca02) {
              return;
            }
            if (v714.aborted) {
              throw new _0x1c9406();
            }
            if (v722 !== v_0x59cca0) {
              yield v722;
            }
            v713.shift();
            if (v717) {
              v717();
              v717 = null;
            }
          }
          await new _0x12aacf(p1263 => {
            v716 = p1263;
          });
        }
      } finally {
        v712.abort();
        v718 = true;
        if (v717) {
          v717();
          v717 = null;
        }
      }
    }.call(this);
  }
  function f232(p1264 = undefined) {
    if (p1264 != null) {
      _0x3422e6(p1264, "options");
    }
    if (p1264?.signal != null) {
      _0x428526(p1264.signal, "options.signal");
    }
    return async function* () {
      let v723 = 0;
      for await (let v724 of this) {
        var v725;
        if (p1264 != null && (v725 = p1264.signal) !== null && v725 !== undefined && v725.aborted) {
          throw new _0x1c9406({
            cause: p1264.signal.reason
          });
        }
        yield [v723++, v724];
      }
    }.call(this);
  }
  async function f233(p1265, p1266 = undefined) {
    for await (let v726 of f238.call(this, p1265, p1266)) {
      return true;
    }
    return false;
  }
  async function f234(p1267, p1268 = undefined) {
    if (typeof p1267 != "function") {
      throw new _0x471aa2("fn", ["Function", "AsyncFunction"], p1267);
    }
    return !(await f233.call(this, async (..._0x4cc7ea) => !(await p1267(..._0x4cc7ea)), p1268));
  }
  async function f235(p1269, p1270) {
    for await (let v727 of f238.call(this, p1269, p1270)) {
      return v727;
    }
  }
  async function f236(p1271, p1272) {
    if (typeof p1271 != "function") {
      throw new _0x471aa2("fn", ["Function", "AsyncFunction"], p1271);
    }
    async function f237(p1273, p1274) {
      await p1271(p1273, p1274);
      return v_0x59cca0;
    }
    for await (let v728 of f229.call(this, f237, p1272));
  }
  function f238(p1275, p1276) {
    if (typeof p1275 != "function") {
      throw new _0x471aa2("fn", ["Function", "AsyncFunction"], p1275);
    }
    async function f239(p1277, p1278) {
      if (await p1275(p1277, p1278)) {
        return p1277;
      } else {
        return v_0x59cca0;
      }
    }
    return f229.call(this, f239, p1276);
  }
  var vC9 = class extends _0x8eb172 {
    constructor() {
      super("reduce");
      this.message = "Reduce of an empty stream requires an initial value";
    }
  };
  async function f240(p1279, p1280, p1281) {
    var v729;
    if (typeof p1279 != "function") {
      throw new _0x471aa2("reducer", ["Function", "AsyncFunction"], p1279);
    }
    if (p1281 != null) {
      _0x3422e6(p1281, "options");
    }
    if (p1281?.signal != null) {
      _0x428526(p1281.signal, "options.signal");
    }
    let v730 = arguments.length > 1;
    if (p1281 != null && (v729 = p1281.signal) !== null && v729 !== undefined && v729.aborted) {
      let v731 = new _0x1c9406(undefined, {
        cause: p1281.signal.reason
      });
      this.once("error", () => {});
      await _0x1fa8df(this.destroy(v731));
      throw v731;
    }
    let v732 = new v707();
    let v733 = v732.signal;
    if (p1281 != null && p1281.signal) {
      let v734 = {
        once: true,
        [v708]: this
      };
      p1281.signal.addEventListener("abort", () => v732.abort(), v734);
    }
    let v735 = false;
    try {
      for await (let v736 of this) {
        var v737;
        v735 = true;
        if (p1281 != null && (v737 = p1281.signal) !== null && v737 !== undefined && v737.aborted) {
          throw new _0x1c9406();
        }
        if (v730) {
          p1280 = await p1279(p1280, v736, {
            signal: v733
          });
        } else {
          p1280 = v736;
          v730 = true;
        }
      }
      if (!v735 && !v730) {
        throw new vC9();
      }
    } finally {
      v732.abort();
    }
    return p1280;
  }
  async function f241(p1282) {
    if (p1282 != null) {
      _0x3422e6(p1282, "options");
    }
    if (p1282?.signal != null) {
      _0x428526(p1282.signal, "options.signal");
    }
    let v738 = [];
    for await (let v739 of this) {
      var v740;
      if (p1282 != null && (v740 = p1282.signal) !== null && v740 !== undefined && v740.aborted) {
        throw new _0x1c9406(undefined, {
          cause: p1282.signal.reason
        });
      }
      _0x412f12(v738, v739);
    }
    return v738;
  }
  function f242(p1283, p1284) {
    let v741 = f229.call(this, p1283, p1284);
    return async function* () {
      for await (let v742 of v741) {
        yield* v742;
      }
    }.call(this);
  }
  function f243(p1285) {
    p1285 = _0x59d814(p1285);
    if (_0x1f38e3(p1285)) {
      return 0;
    }
    if (p1285 < 0) {
      throw new _0x25349d("number", ">= 0", p1285);
    }
    return p1285;
  }
  function f244(p1286, p1287 = undefined) {
    if (p1287 != null) {
      _0x3422e6(p1287, "options");
    }
    if (p1287?.signal != null) {
      _0x428526(p1287.signal, "options.signal");
    }
    p1286 = f243(p1286);
    return async function* () {
      var v743;
      if (p1287 != null && (v743 = p1287.signal) !== null && v743 !== undefined && v743.aborted) {
        throw new _0x1c9406();
      }
      for await (let v744 of this) {
        var v745;
        if (p1287 != null && (v745 = p1287.signal) !== null && v745 !== undefined && v745.aborted) {
          throw new _0x1c9406();
        }
        if (p1286-- <= 0) {
          yield v744;
        }
      }
    }.call(this);
  }
  function f245(p1288, p1289 = undefined) {
    if (p1289 != null) {
      _0x3422e6(p1289, "options");
    }
    if (p1289?.signal != null) {
      _0x428526(p1289.signal, "options.signal");
    }
    p1288 = f243(p1288);
    return async function* () {
      var v746;
      if (p1289 != null && (v746 = p1289.signal) !== null && v746 !== undefined && v746.aborted) {
        throw new _0x1c9406();
      }
      for await (let v747 of this) {
        var v748;
        if (p1289 != null && (v748 = p1289.signal) !== null && v748 !== undefined && v748.aborted) {
          throw new _0x1c9406();
        }
        if (p1288-- > 0) {
          yield v747;
        } else {
          return;
        }
      }
    }.call(this);
  }
  p1259.exports.streamReturningOperators = {
    asIndexedPairs: f232,
    drop: f244,
    filter: f238,
    flatMap: f242,
    map: f229,
    take: f245
  };
  p1259.exports.promiseReturningOperators = {
    every: f234,
    forEach: f236,
    reduce: f240,
    toArray: f241,
    some: f233,
    find: f235
  };
});
var vVF393 = vF3((p1290, p1291) => {
  var vVVF3892 = vVF389();
  var {
    aggregateTwoErrors: _0x71ae45,
    codes: {
      ERR_MULTIPLE_CALLBACK: _0x144aa8
    },
    AbortError: _0x266f0b
  } = vVF387();
  var {
    Symbol: _0x2128a7
  } = vVF384();
  var {
    kDestroyed: _0x292adb,
    isDestroyed: _0x4a731d,
    isFinished: _0x569f36,
    isServerRequest: _0x25f076
  } = vVF390();
  var v_0x2128a7 = _0x2128a7("kDestroy");
  var v_0x2128a72 = _0x2128a7("kConstruct");
  function f246(p1292, p1293, p1294) {
    if (p1292) {
      p1292.stack;
      if (p1293 && !p1293.errored) {
        p1293.errored = p1292;
      }
      if (p1294 && !p1294.errored) {
        p1294.errored = p1292;
      }
    }
  }
  function f247(p1295, p1296) {
    let v749 = this._readableState;
    let v750 = this._writableState;
    let v751 = v750 || v749;
    if (v750 && v750.destroyed || v749 && v749.destroyed) {
      if (typeof p1296 == "function") {
        p1296();
      }
      return this;
    } else {
      f246(p1295, v750, v749);
      if (v750) {
        v750.destroyed = true;
      }
      if (v749) {
        v749.destroyed = true;
      }
      if (v751.constructed) {
        f248(this, p1295, p1296);
      } else {
        this.once(v_0x2128a7, function (p1297) {
          f248(this, _0x71ae45(p1297, p1295), p1296);
        });
      }
      return this;
    }
  }
  function f248(p1298, p1299, p1300) {
    let v752 = false;
    function f249(p1301) {
      if (v752) {
        return;
      }
      v752 = true;
      let v753 = p1298._readableState;
      let v754 = p1298._writableState;
      f246(p1301, v754, v753);
      if (v754) {
        v754.closed = true;
      }
      if (v753) {
        v753.closed = true;
      }
      if (typeof p1300 == "function") {
        p1300(p1301);
      }
      if (p1301) {
        vVVF3892.nextTick(f250, p1298, p1301);
      } else {
        vVVF3892.nextTick(f251, p1298);
      }
    }
    try {
      p1298._destroy(p1299 || null, f249);
    } catch (_0x154612) {
      f249(_0x154612);
    }
  }
  function f250(p1302, p1303) {
    f252(p1302, p1303);
    f251(p1302);
  }
  function f251(p1304) {
    let v755 = p1304._readableState;
    let v756 = p1304._writableState;
    if (v756) {
      v756.closeEmitted = true;
    }
    if (v755) {
      v755.closeEmitted = true;
    }
    if (v756 && v756.emitClose || v755 && v755.emitClose) {
      p1304.emit("close");
    }
  }
  function f252(p1305, p1306) {
    let v757 = p1305._readableState;
    let v758 = p1305._writableState;
    if ((!v758 || !v758.errorEmitted) && (!v757 || !v757.errorEmitted)) {
      if (v758) {
        v758.errorEmitted = true;
      }
      if (v757) {
        v757.errorEmitted = true;
      }
      p1305.emit("error", p1306);
    }
  }
  function f253() {
    let v759 = this._readableState;
    let v760 = this._writableState;
    if (v759) {
      v759.constructed = true;
      v759.closed = false;
      v759.closeEmitted = false;
      v759.destroyed = false;
      v759.errored = null;
      v759.errorEmitted = false;
      v759.reading = false;
      v759.ended = v759.readable === false;
      v759.endEmitted = v759.readable === false;
    }
    if (v760) {
      v760.constructed = true;
      v760.destroyed = false;
      v760.closed = false;
      v760.closeEmitted = false;
      v760.errored = null;
      v760.errorEmitted = false;
      v760.finalCalled = false;
      v760.prefinished = false;
      v760.ended = v760.writable === false;
      v760.ending = v760.writable === false;
      v760.finished = v760.writable === false;
    }
  }
  function f254(p1307, p1308, p1309) {
    let v761 = p1307._readableState;
    let v762 = p1307._writableState;
    if (v762 && v762.destroyed || v761 && v761.destroyed) {
      return this;
    }
    if (v761 && v761.autoDestroy || v762 && v762.autoDestroy) {
      p1307.destroy(p1308);
    } else if (p1308) {
      p1308.stack;
      if (v762 && !v762.errored) {
        v762.errored = p1308;
      }
      if (v761 && !v761.errored) {
        v761.errored = p1308;
      }
      if (p1309) {
        vVVF3892.nextTick(f252, p1307, p1308);
      } else {
        f252(p1307, p1308);
      }
    }
  }
  function f255(p1310, p1311) {
    if (typeof p1310._construct != "function") {
      return;
    }
    let v763 = p1310._readableState;
    let v764 = p1310._writableState;
    if (v763) {
      v763.constructed = false;
    }
    if (v764) {
      v764.constructed = false;
    }
    p1310.once(v_0x2128a72, p1311);
    if (!(p1310.listenerCount(v_0x2128a72) > 1)) {
      vVVF3892.nextTick(f256, p1310);
    }
  }
  function f256(p1312) {
    let v765 = false;
    function f257(p1313) {
      if (v765) {
        f254(p1312, p1313 ?? new _0x144aa8());
        return;
      }
      v765 = true;
      let v766 = p1312._readableState;
      let v767 = p1312._writableState;
      let v768 = v767 || v766;
      if (v766) {
        v766.constructed = true;
      }
      if (v767) {
        v767.constructed = true;
      }
      if (v768.destroyed) {
        p1312.emit(v_0x2128a7, p1313);
      } else if (p1313) {
        f254(p1312, p1313, true);
      } else {
        vVVF3892.nextTick(f258, p1312);
      }
    }
    try {
      p1312._construct(f257);
    } catch (_0x59f1c1) {
      f257(_0x59f1c1);
    }
  }
  function f258(p1314) {
    p1314.emit(v_0x2128a72);
  }
  function f259(p1315) {
    return p1315 && p1315.setHeader && typeof p1315.abort == "function";
  }
  function f260(p1316) {
    p1316.emit("close");
  }
  function f261(p1317, p1318) {
    p1317.emit("error", p1318);
    vVVF3892.nextTick(f260, p1317);
  }
  function f262(p1319, p1320) {
    if (!!p1319 && !_0x4a731d(p1319)) {
      if (!p1320 && !_0x569f36(p1319)) {
        p1320 = new _0x266f0b();
      }
      if (_0x25f076(p1319)) {
        p1319.socket = null;
        p1319.destroy(p1320);
      } else if (f259(p1319)) {
        p1319.abort();
      } else if (f259(p1319.req)) {
        p1319.req.abort();
      } else if (typeof p1319.destroy == "function") {
        p1319.destroy(p1320);
      } else if (typeof p1319.close == "function") {
        p1319.close();
      } else if (p1320) {
        vVVF3892.nextTick(f261, p1319, p1320);
      } else {
        vVVF3892.nextTick(f260, p1319);
      }
      if (!p1319.destroyed) {
        p1319[_0x292adb] = true;
      }
    }
  }
  p1291.exports = {
    construct: f255,
    destroyer: f262,
    destroy: f247,
    undestroy: f253,
    errorOrDestroy: f254
  };
});
var vVF394 = vF3((p1321, p1322) => {
  var v769 = typeof Reflect == "object" ? Reflect : null;
  var v770 = v769 && typeof v769.apply == "function" ? v769.apply : function (p1323, p1324, p1325) {
    return Function.prototype.apply.call(p1323, p1324, p1325);
  };
  var v771;
  if (v769 && typeof v769.ownKeys == "function") {
    v771 = v769.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    v771 = function (p1326) {
      return Object.getOwnPropertyNames(p1326).concat(Object.getOwnPropertySymbols(p1326));
    };
  } else {
    v771 = function (p1327) {
      return Object.getOwnPropertyNames(p1327);
    };
  }
  function f263(p1328) {
    if (console && console.warn) {
      console.warn(p1328);
    }
  }
  var v772 = Number.isNaN || function (p1329) {
    return p1329 !== p1329;
  };
  function f264() {
    f264.init.call(this);
  }
  p1322.exports = f264;
  p1322.exports.once = f275;
  f264.EventEmitter = f264;
  f264.prototype._events = undefined;
  f264.prototype._eventsCount = 0;
  f264.prototype._maxListeners = undefined;
  var v773 = 10;
  function f265(p1330) {
    if (typeof p1330 != "function") {
      throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof p1330);
    }
  }
  Object.defineProperty(f264, "defaultMaxListeners", {
    enumerable: true,
    get: function () {
      return v773;
    },
    set: function (p1331) {
      if (typeof p1331 != "number" || p1331 < 0 || v772(p1331)) {
        throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + p1331 + ".");
      }
      v773 = p1331;
    }
  });
  f264.init = function () {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
  };
  f264.prototype.setMaxListeners = function (p1332) {
    if (typeof p1332 != "number" || p1332 < 0 || v772(p1332)) {
      throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + p1332 + ".");
    }
    this._maxListeners = p1332;
    return this;
  };
  function f266(p1333) {
    if (p1333._maxListeners === undefined) {
      return f264.defaultMaxListeners;
    } else {
      return p1333._maxListeners;
    }
  }
  f264.prototype.getMaxListeners = function () {
    return f266(this);
  };
  f264.prototype.emit = function (p1334) {
    var v774 = [];
    for (var v775 = 1; v775 < arguments.length; v775++) {
      v774.push(arguments[v775]);
    }
    var v776 = p1334 === "error";
    var v777 = this._events;
    if (v777 !== undefined) {
      v776 = v776 && v777.error === undefined;
    } else if (!v776) {
      return false;
    }
    if (v776) {
      var v778;
      if (v774.length > 0) {
        v778 = v774[0];
      }
      if (v778 instanceof Error) {
        throw v778;
      }
      var v779 = new Error("Unhandled error." + (v778 ? " (" + v778.message + ")" : ""));
      v779.context = v778;
      throw v779;
    }
    var v780 = v777[p1334];
    if (v780 === undefined) {
      return false;
    }
    if (typeof v780 == "function") {
      v770(v780, this, v774);
    } else {
      for (var v781 = v780.length, v_0x2ad92f = f272(v780, v781), v775 = 0; v775 < v781; ++v775) {
        v770(v_0x2ad92f[v775], this, v774);
      }
    }
    return true;
  };
  function f267(p1335, p1336, p1337, p1338) {
    var v782;
    var v783;
    var v784;
    f265(p1337);
    v783 = p1335._events;
    if (v783 === undefined) {
      v783 = p1335._events = Object.create(null);
      p1335._eventsCount = 0;
    } else {
      if (v783.newListener !== undefined) {
        p1335.emit("newListener", p1336, p1337.listener ? p1337.listener : p1337);
        v783 = p1335._events;
      }
      v784 = v783[p1336];
    }
    if (v784 === undefined) {
      v784 = v783[p1336] = p1337;
      ++p1335._eventsCount;
    } else {
      if (typeof v784 == "function") {
        v784 = v783[p1336] = p1338 ? [p1337, v784] : [v784, p1337];
      } else if (p1338) {
        v784.unshift(p1337);
      } else {
        v784.push(p1337);
      }
      v782 = f266(p1335);
      if (v782 > 0 && v784.length > v782 && !v784.warned) {
        v784.warned = true;
        var v785 = new Error("Possible EventEmitter memory leak detected. " + v784.length + " " + String(p1336) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        v785.name = "MaxListenersExceededWarning";
        v785.emitter = p1335;
        v785.type = p1336;
        v785.count = v784.length;
        f263(v785);
      }
    }
    return p1335;
  }
  f264.prototype.addListener = function (p1339, p1340) {
    return f267(this, p1339, p1340, false);
  };
  f264.prototype.on = f264.prototype.addListener;
  f264.prototype.prependListener = function (p1341, p1342) {
    return f267(this, p1341, p1342, true);
  };
  function f268() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0) {
        return this.listener.call(this.target);
      } else {
        return this.listener.apply(this.target, arguments);
      }
    }
  }
  function f269(p1343, p1344, p1345) {
    var v786 = {
      fired: false,
      wrapFn: undefined,
      target: p1343,
      type: p1344,
      listener: p1345
    };
    var v787 = f268.bind(v786);
    v787.listener = p1345;
    v786.wrapFn = v787;
    return v787;
  }
  f264.prototype.once = function (p1346, p1347) {
    f265(p1347);
    this.on(p1346, f269(this, p1346, p1347));
    return this;
  };
  f264.prototype.prependOnceListener = function (p1348, p1349) {
    f265(p1349);
    this.prependListener(p1348, f269(this, p1348, p1349));
    return this;
  };
  f264.prototype.removeListener = function (p1350, p1351) {
    var v788;
    var v789;
    var v790;
    var v791;
    var v792;
    f265(p1351);
    v789 = this._events;
    if (v789 === undefined) {
      return this;
    }
    v788 = v789[p1350];
    if (v788 === undefined) {
      return this;
    }
    if (v788 === p1351 || v788.listener === p1351) {
      if (--this._eventsCount === 0) {
        this._events = Object.create(null);
      } else {
        delete v789[p1350];
        if (v789.removeListener) {
          this.emit("removeListener", p1350, v788.listener || p1351);
        }
      }
    } else if (typeof v788 != "function") {
      v790 = -1;
      v791 = v788.length - 1;
      for (; v791 >= 0; v791--) {
        if (v788[v791] === p1351 || v788[v791].listener === p1351) {
          v792 = v788[v791].listener;
          v790 = v791;
          break;
        }
      }
      if (v790 < 0) {
        return this;
      }
      if (v790 === 0) {
        v788.shift();
      } else {
        f273(v788, v790);
      }
      if (v788.length === 1) {
        v789[p1350] = v788[0];
      }
      if (v789.removeListener !== undefined) {
        this.emit("removeListener", p1350, v792 || p1351);
      }
    }
    return this;
  };
  f264.prototype.off = f264.prototype.removeListener;
  f264.prototype.removeAllListeners = function (p1352) {
    var v793;
    var v794;
    var v795;
    v794 = this._events;
    if (v794 === undefined) {
      return this;
    }
    if (v794.removeListener === undefined) {
      if (arguments.length === 0) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      } else if (v794[p1352] !== undefined) {
        if (--this._eventsCount === 0) {
          this._events = Object.create(null);
        } else {
          delete v794[p1352];
        }
      }
      return this;
    }
    if (arguments.length === 0) {
      var v796 = Object.keys(v794);
      var v797;
      for (v795 = 0; v795 < v796.length; ++v795) {
        v797 = v796[v795];
        if (v797 !== "removeListener") {
          this.removeAllListeners(v797);
        }
      }
      this.removeAllListeners("removeListener");
      this._events = Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    v793 = v794[p1352];
    if (typeof v793 == "function") {
      this.removeListener(p1352, v793);
    } else if (v793 !== undefined) {
      for (v795 = v793.length - 1; v795 >= 0; v795--) {
        this.removeListener(p1352, v793[v795]);
      }
    }
    return this;
  };
  function f270(p1353, p1354, p1355) {
    var v798 = p1353._events;
    if (v798 === undefined) {
      return [];
    }
    var v799 = v798[p1354];
    if (v799 === undefined) {
      return [];
    } else if (typeof v799 == "function") {
      if (p1355) {
        return [v799.listener || v799];
      } else {
        return [v799];
      }
    } else if (p1355) {
      return f274(v799);
    } else {
      return f272(v799, v799.length);
    }
  }
  f264.prototype.listeners = function (p1356) {
    return f270(this, p1356, true);
  };
  f264.prototype.rawListeners = function (p1357) {
    return f270(this, p1357, false);
  };
  f264.listenerCount = function (p1358, p1359) {
    if (typeof p1358.listenerCount == "function") {
      return p1358.listenerCount(p1359);
    } else {
      return f271.call(p1358, p1359);
    }
  };
  f264.prototype.listenerCount = f271;
  function f271(p1360) {
    var v800 = this._events;
    if (v800 !== undefined) {
      var v801 = v800[p1360];
      if (typeof v801 == "function") {
        return 1;
      }
      if (v801 !== undefined) {
        return v801.length;
      }
    }
    return 0;
  }
  f264.prototype.eventNames = function () {
    if (this._eventsCount > 0) {
      return v771(this._events);
    } else {
      return [];
    }
  };
  function f272(p1361, p1362) {
    var v802 = new Array(p1362);
    for (var v803 = 0; v803 < p1362; ++v803) {
      v802[v803] = p1361[v803];
    }
    return v802;
  }
  function f273(p1363, p1364) {
    for (; p1364 + 1 < p1363.length; p1364++) {
      p1363[p1364] = p1363[p1364 + 1];
    }
    p1363.pop();
  }
  function f274(p1365) {
    for (var v804 = new Array(p1365.length), v805 = 0; v805 < v804.length; ++v805) {
      v804[v805] = p1365[v805].listener || p1365[v805];
    }
    return v804;
  }
  function f275(p1366, p1367) {
    return new Promise(function (p1368, p1369) {
      function f276(p1370) {
        p1366.removeListener(p1367, f277);
        p1369(p1370);
      }
      function f277() {
        if (typeof p1366.removeListener == "function") {
          p1366.removeListener("error", f276);
        }
        p1368([].slice.call(arguments));
      }
      f279(p1366, p1367, f277, {
        once: true
      });
      if (p1367 !== "error") {
        f278(p1366, f276, {
          once: true
        });
      }
    });
  }
  function f278(p1371, p1372, p1373) {
    if (typeof p1371.on == "function") {
      f279(p1371, "error", p1372, p1373);
    }
  }
  function f279(p1374, p1375, p1376, p1377) {
    if (typeof p1374.on == "function") {
      if (p1377.once) {
        p1374.once(p1375, p1376);
      } else {
        p1374.on(p1375, p1376);
      }
    } else if (typeof p1374.addEventListener == "function") {
      p1374.addEventListener(p1375, function f280(p1378) {
        if (p1377.once) {
          p1374.removeEventListener(p1375, f280);
        }
        p1376(p1378);
      });
    } else {
      throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof p1374);
    }
  }
});
var vVF395 = vF3((p1379, p1380) => {
  var {
    ArrayIsArray: _0x12040f,
    ObjectSetPrototypeOf: _0x2423dd
  } = vVF384();
  var {
    EventEmitter: _0x4faa91
  } = vVF394();
  function f281(p1381) {
    _0x4faa91.call(this, p1381);
  }
  _0x2423dd(f281.prototype, _0x4faa91.prototype);
  _0x2423dd(f281, _0x4faa91);
  f281.prototype.pipe = function (p1382, p1383) {
    let vThis5 = this;
    function f282(p1384) {
      if (p1382.writable && p1382.write(p1384) === false && vThis5.pause) {
        vThis5.pause();
      }
    }
    vThis5.on("data", f282);
    function f283() {
      if (vThis5.readable && vThis5.resume) {
        vThis5.resume();
      }
    }
    p1382.on("drain", f283);
    if (!p1382._isStdio && (!p1383 || p1383.end !== false)) {
      vThis5.on("end", f284);
      vThis5.on("close", f285);
    }
    let v806 = false;
    function f284() {
      if (!v806) {
        v806 = true;
        p1382.end();
      }
    }
    function f285() {
      if (!v806) {
        v806 = true;
        if (typeof p1382.destroy == "function") {
          p1382.destroy();
        }
      }
    }
    function f286(p1385) {
      f287();
      if (_0x4faa91.listenerCount(this, "error") === 0) {
        this.emit("error", p1385);
      }
    }
    f288(vThis5, "error", f286);
    f288(p1382, "error", f286);
    function f287() {
      vThis5.removeListener("data", f282);
      p1382.removeListener("drain", f283);
      vThis5.removeListener("end", f284);
      vThis5.removeListener("close", f285);
      vThis5.removeListener("error", f286);
      p1382.removeListener("error", f286);
      vThis5.removeListener("end", f287);
      vThis5.removeListener("close", f287);
      p1382.removeListener("close", f287);
    }
    vThis5.on("end", f287);
    vThis5.on("close", f287);
    p1382.on("close", f287);
    p1382.emit("pipe", vThis5);
    return p1382;
  };
  function f288(p1386, p1387, p1388) {
    if (typeof p1386.prependListener == "function") {
      return p1386.prependListener(p1387, p1388);
    }
    if (!p1386._events || !p1386._events[p1387]) {
      p1386.on(p1387, p1388);
    } else if (_0x12040f(p1386._events[p1387])) {
      p1386._events[p1387].unshift(p1388);
    } else {
      p1386._events[p1387] = [p1388, p1386._events[p1387]];
    }
  }
  p1380.exports = {
    Stream: f281,
    prependListener: f288
  };
});
var vVF396 = vF3((p1389, p1390) => {
  var {
    AbortError: _0x26fcbd,
    codes: _0x22d9e3
  } = vVF387();
  var vVVF391 = vVF391();
  var {
    ERR_INVALID_ARG_TYPE: _0x3e6263
  } = _0x22d9e3;
  var vF100 = (p1391, p1392) => {
    if (typeof p1391 != "object" || !("aborted" in p1391)) {
      throw new _0x3e6263(p1392, "AbortSignal", p1391);
    }
  };
  function f289(p1393) {
    return !!p1393 && typeof p1393.pipe == "function";
  }
  p1390.exports.addAbortSignal = function (p1394, p1395) {
    vF100(p1394, "signal");
    if (!f289(p1395)) {
      throw new _0x3e6263("stream", "stream.Stream", p1395);
    }
    return p1390.exports.addAbortSignalNoValidate(p1394, p1395);
  };
  p1390.exports.addAbortSignalNoValidate = function (p1396, p1397) {
    if (typeof p1396 != "object" || !("aborted" in p1396)) {
      return p1397;
    }
    let vF101 = () => {
      p1397.destroy(new _0x26fcbd(undefined, {
        cause: p1396.reason
      }));
    };
    if (p1396.aborted) {
      vF101();
    } else {
      p1396.addEventListener("abort", vF101);
      vVVF391(p1397, () => p1396.removeEventListener("abort", vF101));
    }
    return p1397;
  };
});
var vVF397 = vF3((p1398, p1399) => {
  var {
    StringPrototypeSlice: _0x1cc0d6,
    SymbolIterator: _0x439134,
    TypedArrayPrototypeSet: _0x48f65a,
    Uint8Array: _0x337506
  } = vVF384();
  vVF2();
  var {
    Buffer: _0x596039
  } = vF8(v370);
  var {
    inspect: _0x4982c3
  } = vVF385();
  p1399.exports = class {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(p1400) {
      let v807 = {
        data: p1400,
        next: null
      };
      if (this.length > 0) {
        this.tail.next = v807;
      } else {
        this.head = v807;
      }
      this.tail = v807;
      ++this.length;
    }
    unshift(p1401) {
      let v808 = {
        data: p1401,
        next: this.head
      };
      if (this.length === 0) {
        this.tail = v808;
      }
      this.head = v808;
      ++this.length;
    }
    shift() {
      if (this.length === 0) {
        return;
      }
      let v809 = this.head.data;
      if (this.length === 1) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
      }
      --this.length;
      return v809;
    }
    clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
    join(p1402) {
      if (this.length === 0) {
        return "";
      }
      let v810 = this.head;
      let v811 = "" + v810.data;
      while ((v810 = v810.next) !== null) {
        v811 += p1402 + v810.data;
      }
      return v811;
    }
    concat(p1403) {
      if (this.length === 0) {
        return _0x596039.alloc(0);
      }
      let v812 = _0x596039.allocUnsafe(p1403 >>> 0);
      let v813 = this.head;
      let v814 = 0;
      while (v813) {
        _0x48f65a(v812, v813.data, v814);
        v814 += v813.data.length;
        v813 = v813.next;
      }
      return v812;
    }
    consume(p1404, p1405) {
      let v815 = this.head.data;
      if (p1404 < v815.length) {
        let v816 = v815.slice(0, p1404);
        this.head.data = v815.slice(p1404);
        return v816;
      }
      if (p1404 === v815.length) {
        return this.shift();
      } else if (p1405) {
        return this._getString(p1404);
      } else {
        return this._getBuffer(p1404);
      }
    }
    first() {
      return this.head.data;
    }
    *[_0x439134]() {
      for (let v817 = this.head; v817; v817 = v817.next) {
        yield v817.data;
      }
    }
    _getString(p1406) {
      let v818 = "";
      let v819 = this.head;
      let v820 = 0;
      do {
        let v821 = v819.data;
        if (p1406 > v821.length) {
          v818 += v821;
          p1406 -= v821.length;
        } else {
          if (p1406 === v821.length) {
            v818 += v821;
            ++v820;
            if (v819.next) {
              this.head = v819.next;
            } else {
              this.head = this.tail = null;
            }
          } else {
            v818 += _0x1cc0d6(v821, 0, p1406);
            this.head = v819;
            v819.data = _0x1cc0d6(v821, p1406);
          }
          break;
        }
        ++v820;
      } while ((v819 = v819.next) !== null);
      this.length -= v820;
      return v818;
    }
    _getBuffer(p1407) {
      let v822 = _0x596039.allocUnsafe(p1407);
      let vP1407 = p1407;
      let v823 = this.head;
      let v824 = 0;
      do {
        let v825 = v823.data;
        if (p1407 > v825.length) {
          _0x48f65a(v822, v825, vP1407 - p1407);
          p1407 -= v825.length;
        } else {
          if (p1407 === v825.length) {
            _0x48f65a(v822, v825, vP1407 - p1407);
            ++v824;
            if (v823.next) {
              this.head = v823.next;
            } else {
              this.head = this.tail = null;
            }
          } else {
            _0x48f65a(v822, new _0x337506(v825.buffer, v825.byteOffset, p1407), vP1407 - p1407);
            this.head = v823;
            v823.data = v825.slice(p1407);
          }
          break;
        }
        ++v824;
      } while ((v823 = v823.next) !== null);
      this.length -= v824;
      return v822;
    }
    [Symbol.for("nodejs.util.inspect.custom")](p1408, p1409) {
      return _0x4982c3(this, {
        ...p1409,
        depth: 0,
        customInspect: false
      });
    }
  };
});
var vVF398 = vF3((p1410, p1411) => {
  var {
    MathFloor: _0x5cc342,
    NumberIsInteger: _0x1f3cc6
  } = vVF384();
  var {
    ERR_INVALID_ARG_VALUE: _0x592756
  } = vVF387().codes;
  function f290(p1412, p1413, p1414) {
    return p1412.highWaterMark ?? (p1413 ? p1412[p1414] : null);
  }
  function f291(p1415) {
    if (p1415) {
      return 16;
    } else {
      return 16384;
    }
  }
  function f292(p1416, p1417, p1418, p1419) {
    let vF290 = f290(p1417, p1419, p1418);
    if (vF290 != null) {
      if (!_0x1f3cc6(vF290) || vF290 < 0) {
        let v826 = p1419 ? "options." + p1418 : "options.highWaterMark";
        throw new _0x592756(v826, vF290);
      }
      return _0x5cc342(vF290);
    }
    return f291(p1416.objectMode);
  }
  p1411.exports = {
    getHighWaterMark: f292,
    getDefaultHighWaterMark: f291
  };
});
var vVF399 = vF3((p1420, p1421) => {
  vVF2();
  var vVF82 = vF8(v370);
  var v827 = vVF82.Buffer;
  function f293(p1422, p1423) {
    for (var v828 in p1422) {
      p1423[v828] = p1422[v828];
    }
  }
  if (v827.from && v827.alloc && v827.allocUnsafe && v827.allocUnsafeSlow) {
    p1421.exports = vVF82;
  } else {
    f293(vVF82, p1420);
    p1420.Buffer = f294;
  }
  function f294(p1424, p1425, p1426) {
    return v827(p1424, p1425, p1426);
  }
  f294.prototype = Object.create(v827.prototype);
  f293(v827, f294);
  f294.from = function (p1427, p1428, p1429) {
    if (typeof p1427 == "number") {
      throw new TypeError("Argument must not be a number");
    }
    return v827(p1427, p1428, p1429);
  };
  f294.alloc = function (p1430, p1431, p1432) {
    if (typeof p1430 != "number") {
      throw new TypeError("Argument must be a number");
    }
    var vV827 = v827(p1430);
    if (p1431 !== undefined) {
      if (typeof p1432 == "string") {
        vV827.fill(p1431, p1432);
      } else {
        vV827.fill(p1431);
      }
    } else {
      vV827.fill(0);
    }
    return vV827;
  };
  f294.allocUnsafe = function (p1433) {
    if (typeof p1433 != "number") {
      throw new TypeError("Argument must be a number");
    }
    return v827(p1433);
  };
  f294.allocUnsafeSlow = function (p1434) {
    if (typeof p1434 != "number") {
      throw new TypeError("Argument must be a number");
    }
    return vVF82.SlowBuffer(p1434);
  };
});
var vVF3100 = vF3(p1435 => {
  var v829 = vVF399().Buffer;
  var v830 = v829.isEncoding || function (p1436) {
    p1436 = "" + p1436;
    switch (p1436 && p1436.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function f295(p1437) {
    if (!p1437) {
      return "utf8";
    }
    var v831;
    while (true) {
      switch (p1437) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return p1437;
        default:
          if (v831) {
            return;
          }
          p1437 = ("" + p1437).toLowerCase();
          v831 = true;
      }
    }
  }
  function f296(p1438) {
    var vF295 = f295(p1438);
    if (typeof vF295 != "string" && (v829.isEncoding === v830 || !v830(p1438))) {
      throw new Error("Unknown encoding: " + p1438);
    }
    return vF295 || p1438;
  }
  p1435.StringDecoder = f297;
  function f297(p1439) {
    this.encoding = f296(p1439);
    var v832;
    switch (this.encoding) {
      case "utf16le":
        this.text = f304;
        this.end = f305;
        v832 = 4;
        break;
      case "utf8":
        this.fillLast = f301;
        v832 = 4;
        break;
      case "base64":
        this.text = f306;
        this.end = f307;
        v832 = 3;
        break;
      default:
        this.write = f308;
        this.end = f309;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = v829.allocUnsafe(v832);
  }
  f297.prototype.write = function (p1440) {
    if (p1440.length === 0) {
      return "";
    }
    var v833;
    var v834;
    if (this.lastNeed) {
      v833 = this.fillLast(p1440);
      if (v833 === undefined) {
        return "";
      }
      v834 = this.lastNeed;
      this.lastNeed = 0;
    } else {
      v834 = 0;
    }
    if (v834 < p1440.length) {
      if (v833) {
        return v833 + this.text(p1440, v834);
      } else {
        return this.text(p1440, v834);
      }
    } else {
      return v833 || "";
    }
  };
  f297.prototype.end = f303;
  f297.prototype.text = f302;
  f297.prototype.fillLast = function (p1441) {
    if (this.lastNeed <= p1441.length) {
      p1441.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    p1441.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, p1441.length);
    this.lastNeed -= p1441.length;
  };
  function f298(p1442) {
    if (p1442 <= 127) {
      return 0;
    } else if (p1442 >> 5 === 6) {
      return 2;
    } else if (p1442 >> 4 === 14) {
      return 3;
    } else if (p1442 >> 3 === 30) {
      return 4;
    } else if (p1442 >> 6 === 2) {
      return -1;
    } else {
      return -2;
    }
  }
  function f299(p1443, p1444, p1445) {
    var v835 = p1444.length - 1;
    if (v835 < p1445) {
      return 0;
    }
    var vF298 = f298(p1444[v835]);
    if (vF298 >= 0) {
      if (vF298 > 0) {
        p1443.lastNeed = vF298 - 1;
      }
      return vF298;
    } else if (--v835 < p1445 || vF298 === -2) {
      return 0;
    } else {
      vF298 = f298(p1444[v835]);
      if (vF298 >= 0) {
        if (vF298 > 0) {
          p1443.lastNeed = vF298 - 2;
        }
        return vF298;
      } else if (--v835 < p1445 || vF298 === -2) {
        return 0;
      } else {
        vF298 = f298(p1444[v835]);
        if (vF298 >= 0) {
          if (vF298 > 0) {
            if (vF298 === 2) {
              vF298 = 0;
            } else {
              p1443.lastNeed = vF298 - 3;
            }
          }
          return vF298;
        } else {
          return 0;
        }
      }
    }
  }
  function f300(p1446, p1447, p1448) {
    if ((p1447[0] & 192) !== 128) {
      p1446.lastNeed = 0;
      return "�";
    }
    if (p1446.lastNeed > 1 && p1447.length > 1) {
      if ((p1447[1] & 192) !== 128) {
        p1446.lastNeed = 1;
        return "�";
      }
      if (p1446.lastNeed > 2 && p1447.length > 2 && (p1447[2] & 192) !== 128) {
        p1446.lastNeed = 2;
        return "�";
      }
    }
  }
  function f301(p1449) {
    var v836 = this.lastTotal - this.lastNeed;
    var vF300 = f300(this, p1449, v836);
    if (vF300 !== undefined) {
      return vF300;
    }
    if (this.lastNeed <= p1449.length) {
      p1449.copy(this.lastChar, v836, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    p1449.copy(this.lastChar, v836, 0, p1449.length);
    this.lastNeed -= p1449.length;
  }
  function f302(p1450, p1451) {
    var vF299 = f299(this, p1450, p1451);
    if (!this.lastNeed) {
      return p1450.toString("utf8", p1451);
    }
    this.lastTotal = vF299;
    var v837 = p1450.length - (vF299 - this.lastNeed);
    p1450.copy(this.lastChar, 0, v837);
    return p1450.toString("utf8", p1451, v837);
  }
  function f303(p1452) {
    var v838 = p1452 && p1452.length ? this.write(p1452) : "";
    if (this.lastNeed) {
      return v838 + "�";
    } else {
      return v838;
    }
  }
  function f304(p1453, p1454) {
    if ((p1453.length - p1454) % 2 === 0) {
      var v839 = p1453.toString("utf16le", p1454);
      if (v839) {
        var v840 = v839.charCodeAt(v839.length - 1);
        if (v840 >= 55296 && v840 <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = p1453[p1453.length - 2];
          this.lastChar[1] = p1453[p1453.length - 1];
          return v839.slice(0, -1);
        }
      }
      return v839;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = p1453[p1453.length - 1];
    return p1453.toString("utf16le", p1454, p1453.length - 1);
  }
  function f305(p1455) {
    var v841 = p1455 && p1455.length ? this.write(p1455) : "";
    if (this.lastNeed) {
      var v842 = this.lastTotal - this.lastNeed;
      return v841 + this.lastChar.toString("utf16le", 0, v842);
    }
    return v841;
  }
  function f306(p1456, p1457) {
    var v843 = (p1456.length - p1457) % 3;
    if (v843 === 0) {
      return p1456.toString("base64", p1457);
    } else {
      this.lastNeed = 3 - v843;
      this.lastTotal = 3;
      if (v843 === 1) {
        this.lastChar[0] = p1456[p1456.length - 1];
      } else {
        this.lastChar[0] = p1456[p1456.length - 2];
        this.lastChar[1] = p1456[p1456.length - 1];
      }
      return p1456.toString("base64", p1457, p1456.length - v843);
    }
  }
  function f307(p1458) {
    var v844 = p1458 && p1458.length ? this.write(p1458) : "";
    if (this.lastNeed) {
      return v844 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    } else {
      return v844;
    }
  }
  function f308(p1459) {
    return p1459.toString(this.encoding);
  }
  function f309(p1460) {
    if (p1460 && p1460.length) {
      return this.write(p1460);
    } else {
      return "";
    }
  }
});
var vVF3101 = vF3((p1461, p1462) => {
  var vVVF3893 = vVF389();
  var {
    PromisePrototypeThen: _0x29d191,
    SymbolAsyncIterator: _0x2b3dd8,
    SymbolIterator: _0x14bca1
  } = vVF384();
  vVF2();
  var {
    Buffer: _0x3b4893
  } = vF8(v370);
  var {
    ERR_INVALID_ARG_TYPE: _0x4fb88d,
    ERR_STREAM_NULL_VALUES: _0x4547d1
  } = vVF387().codes;
  function f310(p1463, p1464, p1465) {
    let v845;
    if (typeof p1464 == "string" || p1464 instanceof _0x3b4893) {
      return new p1463({
        objectMode: true,
        ...p1465,
        read() {
          this.push(p1464);
          this.push(null);
        }
      });
    }
    let v846;
    if (p1464 && p1464[_0x2b3dd8]) {
      v846 = true;
      v845 = p1464[_0x2b3dd8]();
    } else if (p1464 && p1464[_0x14bca1]) {
      v846 = false;
      v845 = p1464[_0x14bca1]();
    } else {
      throw new _0x4fb88d("iterable", ["Iterable"], p1464);
    }
    let v847 = new p1463({
      objectMode: true,
      highWaterMark: 1,
      ...p1465
    });
    let v848 = false;
    v847._read = function () {
      if (!v848) {
        v848 = true;
        f312();
      }
    };
    v847._destroy = function (p1466, p1467) {
      _0x29d191(f311(p1466), () => vVVF3893.nextTick(p1467, p1466), p1468 => vVVF3893.nextTick(p1467, p1468 || p1466));
    };
    async function f311(p1469) {
      let v849 = p1469 != null;
      let v850 = typeof v845.throw == "function";
      if (v849 && v850) {
        let {
          value: _0x380920,
          done: _0x4c3855
        } = await v845.throw(p1469);
        await _0x380920;
        if (_0x4c3855) {
          return;
        }
      }
      if (typeof v845.return == "function") {
        let {
          value: _0x5b0802
        } = await v845.return();
        await _0x5b0802;
      }
    }
    async function f312() {
      while (true) {
        try {
          let {
            value: _0x24cfaa,
            done: _0xfb1ce7
          } = v846 ? await v845.next() : v845.next();
          if (_0xfb1ce7) {
            v847.push(null);
          } else {
            let v851 = _0x24cfaa && typeof _0x24cfaa.then == "function" ? await _0x24cfaa : _0x24cfaa;
            if (v851 === null) {
              v848 = false;
              throw new _0x4547d1();
            }
            if (v847.push(v851)) {
              continue;
            }
            v848 = false;
          }
        } catch (_0x4ccb9f) {
          v847.destroy(_0x4ccb9f);
        }
        break;
      }
    }
    return v847;
  }
  p1462.exports = f310;
});
var vVF3102 = vF3((p1470, p1471) => {
  var vVVF3894 = vVF389();
  var {
    ArrayPrototypeIndexOf: _0x5a017a,
    NumberIsInteger: _0x4475b8,
    NumberIsNaN: _0x422cd3,
    NumberParseInt: _0x171d56,
    ObjectDefineProperties: _0x6b9c3a,
    ObjectKeys: _0x4950df,
    ObjectSetPrototypeOf: _0x223255,
    Promise: _0x5b56ca,
    SafeSet: _0x45de7c,
    SymbolAsyncIterator: _0x1b9987,
    Symbol: _0x185a3c
  } = vVF384();
  p1471.exports = f314;
  f314.ReadableState = f313;
  var {
    EventEmitter: _0x1a7b0c
  } = vVF394();
  var {
    Stream: _0x5e4256,
    prependListener: _0x22caf6
  } = vVF395();
  vVF2();
  var {
    Buffer: _0x378376
  } = vF8(v370);
  var {
    addAbortSignal: _0x214811
  } = vVF396();
  var vVVF3912 = vVF391();
  var v852 = vVF385().debuglog("stream", p1472 => {
    v852 = p1472;
  });
  var vVVF397 = vVF397();
  var vVVF3932 = vVF393();
  var {
    getHighWaterMark: _0x5079fe,
    getDefaultHighWaterMark: _0x22abf0
  } = vVF398();
  var {
    aggregateTwoErrors: _0xab47da,
    codes: {
      ERR_INVALID_ARG_TYPE: _0x24ae19,
      ERR_METHOD_NOT_IMPLEMENTED: _0x40dd10,
      ERR_OUT_OF_RANGE: _0x19dad6,
      ERR_STREAM_PUSH_AFTER_EOF: _0x55f41b,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: _0xf857bd
    }
  } = vVF387();
  var {
    validateObject: _0x21c8c5
  } = vVF388();
  var v_0x185a3c = _0x185a3c("kPaused");
  var {
    StringDecoder: _0x522cca
  } = vVF3100();
  var vVVF3101 = vVF3101();
  _0x223255(f314.prototype, _0x5e4256.prototype);
  _0x223255(f314, _0x5e4256);
  var vF103 = () => {};
  var {
    errorOrDestroy: _0x1d9d1d
  } = vVVF3932;
  function f313(p1473, p1474, p1475) {
    if (typeof p1475 != "boolean") {
      p1475 = p1474 instanceof vVF3105();
    }
    this.objectMode = !!p1473 && !!p1473.objectMode;
    if (p1475) {
      this.objectMode = this.objectMode || !!p1473 && !!p1473.readableObjectMode;
    }
    this.highWaterMark = p1473 ? _0x5079fe(this, p1473, "readableHighWaterMark", p1475) : _0x22abf0(false);
    this.buffer = new vVVF397();
    this.length = 0;
    this.pipes = [];
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.constructed = true;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this[v_0x185a3c] = null;
    this.errorEmitted = false;
    this.emitClose = !p1473 || p1473.emitClose !== false;
    this.autoDestroy = !p1473 || p1473.autoDestroy !== false;
    this.destroyed = false;
    this.errored = null;
    this.closed = false;
    this.closeEmitted = false;
    this.defaultEncoding = p1473 && p1473.defaultEncoding || "utf8";
    this.awaitDrainWriters = null;
    this.multiAwaitDrain = false;
    this.readingMore = false;
    this.dataEmitted = false;
    this.decoder = null;
    this.encoding = null;
    if (p1473 && p1473.encoding) {
      this.decoder = new _0x522cca(p1473.encoding);
      this.encoding = p1473.encoding;
    }
  }
  function f314(p1476) {
    if (!(this instanceof f314)) {
      return new f314(p1476);
    }
    let v853 = this instanceof vVF3105();
    this._readableState = new f313(p1476, this, v853);
    if (p1476) {
      if (typeof p1476.read == "function") {
        this._read = p1476.read;
      }
      if (typeof p1476.destroy == "function") {
        this._destroy = p1476.destroy;
      }
      if (typeof p1476.construct == "function") {
        this._construct = p1476.construct;
      }
      if (p1476.signal && !v853) {
        _0x214811(p1476.signal, this);
      }
    }
    _0x5e4256.call(this, p1476);
    vVVF3932.construct(this, () => {
      if (this._readableState.needReadable) {
        f322(this, this._readableState);
      }
    });
  }
  f314.prototype.destroy = vVVF3932.destroy;
  f314.prototype._undestroy = vVVF3932.undestroy;
  f314.prototype._destroy = function (p1477, p1478) {
    p1478(p1477);
  };
  f314.prototype[_0x1a7b0c.captureRejectionSymbol] = function (p1479) {
    this.destroy(p1479);
  };
  f314.prototype.push = function (p1480, p1481) {
    return f315(this, p1480, p1481, false);
  };
  f314.prototype.unshift = function (p1482, p1483) {
    return f315(this, p1482, p1483, true);
  };
  function f315(p1484, p1485, p1486, p1487) {
    v852("readableAddChunk", p1485);
    let v854 = p1484._readableState;
    let v855;
    if (!v854.objectMode) {
      if (typeof p1485 == "string") {
        p1486 = p1486 || v854.defaultEncoding;
        if (v854.encoding !== p1486) {
          if (p1487 && v854.encoding) {
            p1485 = _0x378376.from(p1485, p1486).toString(v854.encoding);
          } else {
            p1485 = _0x378376.from(p1485, p1486);
            p1486 = "";
          }
        }
      } else if (p1485 instanceof _0x378376) {
        p1486 = "";
      } else if (_0x5e4256._isUint8Array(p1485)) {
        p1485 = _0x5e4256._uint8ArrayToBuffer(p1485);
        p1486 = "";
      } else if (p1485 != null) {
        v855 = new _0x24ae19("chunk", ["string", "Buffer", "Uint8Array"], p1485);
      }
    }
    if (v855) {
      _0x1d9d1d(p1484, v855);
    } else if (p1485 === null) {
      v854.reading = false;
      f319(p1484, v854);
    } else if (v854.objectMode || p1485 && p1485.length > 0) {
      if (p1487) {
        if (v854.endEmitted) {
          _0x1d9d1d(p1484, new _0xf857bd());
        } else {
          if (v854.destroyed || v854.errored) {
            return false;
          }
          f316(p1484, v854, p1485, true);
        }
      } else if (v854.ended) {
        _0x1d9d1d(p1484, new _0x55f41b());
      } else {
        if (v854.destroyed || v854.errored) {
          return false;
        }
        v854.reading = false;
        if (v854.decoder && !p1486) {
          p1485 = v854.decoder.write(p1485);
          if (v854.objectMode || p1485.length !== 0) {
            f316(p1484, v854, p1485, false);
          } else {
            f322(p1484, v854);
          }
        } else {
          f316(p1484, v854, p1485, false);
        }
      }
    } else if (!p1487) {
      v854.reading = false;
      f322(p1484, v854);
    }
    return !v854.ended && (v854.length < v854.highWaterMark || v854.length === 0);
  }
  function f316(p1488, p1489, p1490, p1491) {
    if (p1489.flowing && p1489.length === 0 && !p1489.sync && p1488.listenerCount("data") > 0) {
      if (p1489.multiAwaitDrain) {
        p1489.awaitDrainWriters.clear();
      } else {
        p1489.awaitDrainWriters = null;
      }
      p1489.dataEmitted = true;
      p1488.emit("data", p1490);
    } else {
      p1489.length += p1489.objectMode ? 1 : p1490.length;
      if (p1491) {
        p1489.buffer.unshift(p1490);
      } else {
        p1489.buffer.push(p1490);
      }
      if (p1489.needReadable) {
        f320(p1488);
      }
    }
    f322(p1488, p1489);
  }
  f314.prototype.isPaused = function () {
    let v856 = this._readableState;
    return v856[v_0x185a3c] === true || v856.flowing === false;
  };
  f314.prototype.setEncoding = function (p1492) {
    let v857 = new _0x522cca(p1492);
    this._readableState.decoder = v857;
    this._readableState.encoding = this._readableState.decoder.encoding;
    let v858 = this._readableState.buffer;
    let v859 = "";
    for (let v860 of v858) {
      v859 += v857.write(v860);
    }
    v858.clear();
    if (v859 !== "") {
      v858.push(v859);
    }
    this._readableState.length = v859.length;
    return this;
  };
  var v861 = 1073741824;
  function f317(p1493) {
    if (p1493 > v861) {
      throw new _0x19dad6("size", "<= 1GiB", p1493);
    }
    p1493--;
    p1493 |= p1493 >>> 1;
    p1493 |= p1493 >>> 2;
    p1493 |= p1493 >>> 4;
    p1493 |= p1493 >>> 8;
    p1493 |= p1493 >>> 16;
    p1493++;
    return p1493;
  }
  function f318(p1494, p1495) {
    if (p1494 <= 0 || p1495.length === 0 && p1495.ended) {
      return 0;
    } else if (p1495.objectMode) {
      return 1;
    } else if (_0x422cd3(p1494)) {
      if (p1495.flowing && p1495.length) {
        return p1495.buffer.first().length;
      } else {
        return p1495.length;
      }
    } else if (p1494 <= p1495.length) {
      return p1494;
    } else if (p1495.ended) {
      return p1495.length;
    } else {
      return 0;
    }
  }
  f314.prototype.read = function (p1496) {
    v852("read", p1496);
    if (p1496 === undefined) {
      p1496 = NaN;
    } else if (!_0x4475b8(p1496)) {
      p1496 = _0x171d56(p1496, 10);
    }
    let v862 = this._readableState;
    let vP1496 = p1496;
    if (p1496 > v862.highWaterMark) {
      v862.highWaterMark = f317(p1496);
    }
    if (p1496 !== 0) {
      v862.emittedReadable = false;
    }
    if (p1496 === 0 && v862.needReadable && ((v862.highWaterMark !== 0 ? v862.length >= v862.highWaterMark : v862.length > 0) || v862.ended)) {
      v852("read: emitReadable", v862.length, v862.ended);
      if (v862.length === 0 && v862.ended) {
        f343(this);
      } else {
        f320(this);
      }
      return null;
    }
    p1496 = f318(p1496, v862);
    if (p1496 === 0 && v862.ended) {
      if (v862.length === 0) {
        f343(this);
      }
      return null;
    }
    let v863 = v862.needReadable;
    v852("need readable", v863);
    if (v862.length === 0 || v862.length - p1496 < v862.highWaterMark) {
      v863 = true;
      v852("length less than watermark", v863);
    }
    if (v862.ended || v862.reading || v862.destroyed || v862.errored || !v862.constructed) {
      v863 = false;
      v852("reading, ended or constructing", v863);
    } else if (v863) {
      v852("do read");
      v862.reading = true;
      v862.sync = true;
      if (v862.length === 0) {
        v862.needReadable = true;
      }
      try {
        this._read(v862.highWaterMark);
      } catch (_0x1673be) {
        _0x1d9d1d(this, _0x1673be);
      }
      v862.sync = false;
      if (!v862.reading) {
        p1496 = f318(vP1496, v862);
      }
    }
    let v864;
    if (p1496 > 0) {
      v864 = f342(p1496, v862);
    } else {
      v864 = null;
    }
    if (v864 === null) {
      v862.needReadable = v862.length <= v862.highWaterMark;
      p1496 = 0;
    } else {
      v862.length -= p1496;
      if (v862.multiAwaitDrain) {
        v862.awaitDrainWriters.clear();
      } else {
        v862.awaitDrainWriters = null;
      }
    }
    if (v862.length === 0) {
      if (!v862.ended) {
        v862.needReadable = true;
      }
      if (vP1496 !== p1496 && v862.ended) {
        f343(this);
      }
    }
    if (v864 !== null && !v862.errorEmitted && !v862.closeEmitted) {
      v862.dataEmitted = true;
      this.emit("data", v864);
    }
    return v864;
  };
  function f319(p1497, p1498) {
    v852("onEofChunk");
    if (!p1498.ended) {
      if (p1498.decoder) {
        let v865 = p1498.decoder.end();
        if (v865 && v865.length) {
          p1498.buffer.push(v865);
          p1498.length += p1498.objectMode ? 1 : v865.length;
        }
      }
      p1498.ended = true;
      if (p1498.sync) {
        f320(p1497);
      } else {
        p1498.needReadable = false;
        p1498.emittedReadable = true;
        f321(p1497);
      }
    }
  }
  function f320(p1499) {
    let v866 = p1499._readableState;
    v852("emitReadable", v866.needReadable, v866.emittedReadable);
    v866.needReadable = false;
    if (!v866.emittedReadable) {
      v852("emitReadable", v866.flowing);
      v866.emittedReadable = true;
      vVVF3894.nextTick(f321, p1499);
    }
  }
  function f321(p1500) {
    let v867 = p1500._readableState;
    v852("emitReadable_", v867.destroyed, v867.length, v867.ended);
    if (!v867.destroyed && !v867.errored && (v867.length || v867.ended)) {
      p1500.emit("readable");
      v867.emittedReadable = false;
    }
    v867.needReadable = !v867.flowing && !v867.ended && v867.length <= v867.highWaterMark;
    f338(p1500);
  }
  function f322(p1501, p1502) {
    if (!p1502.readingMore && p1502.constructed) {
      p1502.readingMore = true;
      vVVF3894.nextTick(f323, p1501, p1502);
    }
  }
  function f323(p1503, p1504) {
    while (!p1504.reading && !p1504.ended && (p1504.length < p1504.highWaterMark || p1504.flowing && p1504.length === 0)) {
      let v868 = p1504.length;
      v852("maybeReadMore read 0");
      p1503.read(0);
      if (v868 === p1504.length) {
        break;
      }
    }
    p1504.readingMore = false;
  }
  f314.prototype._read = function (p1505) {
    throw new _0x40dd10("_read()");
  };
  f314.prototype.pipe = function (p1506, p1507) {
    let vThis6 = this;
    let v869 = this._readableState;
    if (v869.pipes.length === 1) {
      if (!v869.multiAwaitDrain) {
        v869.multiAwaitDrain = true;
        v869.awaitDrainWriters = new _0x45de7c(v869.awaitDrainWriters ? [v869.awaitDrainWriters] : []);
      }
    }
    v869.pipes.push(p1506);
    v852("pipe count=%d opts=%j", v869.pipes.length, p1507);
    let v870 = (!p1507 || p1507.end !== false) && p1506 !== vVVF3894.stdout && p1506 !== vVVF3894.stderr ? f325 : f332;
    if (v869.endEmitted) {
      vVVF3894.nextTick(v870);
    } else {
      vThis6.once("end", v870);
    }
    p1506.on("unpipe", f324);
    function f324(p1508, p1509) {
      v852("onunpipe");
      if (p1508 === vThis6 && p1509 && p1509.hasUnpiped === false) {
        p1509.hasUnpiped = true;
        f326();
      }
    }
    function f325() {
      v852("onend");
      p1506.end();
    }
    let v871;
    let v872 = false;
    function f326() {
      v852("cleanup");
      p1506.removeListener("close", f330);
      p1506.removeListener("finish", f331);
      if (v871) {
        p1506.removeListener("drain", v871);
      }
      p1506.removeListener("error", f329);
      p1506.removeListener("unpipe", f324);
      vThis6.removeListener("end", f325);
      vThis6.removeListener("end", f332);
      vThis6.removeListener("data", f328);
      v872 = true;
      if (v871 && v869.awaitDrainWriters && (!p1506._writableState || p1506._writableState.needDrain)) {
        v871();
      }
    }
    function f327() {
      if (!v872) {
        if (v869.pipes.length === 1 && v869.pipes[0] === p1506) {
          v852("false write response, pause", 0);
          v869.awaitDrainWriters = p1506;
          v869.multiAwaitDrain = false;
        } else if (v869.pipes.length > 1 && v869.pipes.includes(p1506)) {
          v852("false write response, pause", v869.awaitDrainWriters.size);
          v869.awaitDrainWriters.add(p1506);
        }
        vThis6.pause();
      }
      if (!v871) {
        v871 = f333(vThis6, p1506);
        p1506.on("drain", v871);
      }
    }
    vThis6.on("data", f328);
    function f328(p1510) {
      v852("ondata");
      let v873 = p1506.write(p1510);
      v852("dest.write", v873);
      if (v873 === false) {
        f327();
      }
    }
    function f329(p1511) {
      v852("onerror", p1511);
      f332();
      p1506.removeListener("error", f329);
      if (p1506.listenerCount("error") === 0) {
        let v874 = p1506._writableState || p1506._readableState;
        if (v874 && !v874.errorEmitted) {
          _0x1d9d1d(p1506, p1511);
        } else {
          p1506.emit("error", p1511);
        }
      }
    }
    _0x22caf6(p1506, "error", f329);
    function f330() {
      p1506.removeListener("finish", f331);
      f332();
    }
    p1506.once("close", f330);
    function f331() {
      v852("onfinish");
      p1506.removeListener("close", f330);
      f332();
    }
    p1506.once("finish", f331);
    function f332() {
      v852("unpipe");
      vThis6.unpipe(p1506);
    }
    p1506.emit("pipe", vThis6);
    if (p1506.writableNeedDrain === true) {
      if (v869.flowing) {
        f327();
      }
    } else if (!v869.flowing) {
      v852("pipe resume");
      vThis6.resume();
    }
    return p1506;
  };
  function f333(p1512, p1513) {
    return function () {
      let v875 = p1512._readableState;
      if (v875.awaitDrainWriters === p1513) {
        v852("pipeOnDrain", 1);
        v875.awaitDrainWriters = null;
      } else if (v875.multiAwaitDrain) {
        v852("pipeOnDrain", v875.awaitDrainWriters.size);
        v875.awaitDrainWriters.delete(p1513);
      }
      if ((!v875.awaitDrainWriters || v875.awaitDrainWriters.size === 0) && p1512.listenerCount("data")) {
        p1512.resume();
      }
    };
  }
  f314.prototype.unpipe = function (p1514) {
    let v876 = this._readableState;
    let v877 = {
      hasUnpiped: false
    };
    if (v876.pipes.length === 0) {
      return this;
    }
    if (!p1514) {
      let v878 = v876.pipes;
      v876.pipes = [];
      this.pause();
      for (let v879 = 0; v879 < v878.length; v879++) {
        v878[v879].emit("unpipe", this, {
          hasUnpiped: false
        });
      }
      return this;
    }
    let v_0x5a017a = _0x5a017a(v876.pipes, p1514);
    if (v_0x5a017a === -1) {
      return this;
    } else {
      v876.pipes.splice(v_0x5a017a, 1);
      if (v876.pipes.length === 0) {
        this.pause();
      }
      p1514.emit("unpipe", this, v877);
      return this;
    }
  };
  f314.prototype.on = function (p1515, p1516) {
    let v880 = _0x5e4256.prototype.on.call(this, p1515, p1516);
    let v881 = this._readableState;
    if (p1515 === "data") {
      v881.readableListening = this.listenerCount("readable") > 0;
      if (v881.flowing !== false) {
        this.resume();
      }
    } else if (p1515 === "readable" && !v881.endEmitted && !v881.readableListening) {
      v881.readableListening = v881.needReadable = true;
      v881.flowing = false;
      v881.emittedReadable = false;
      v852("on readable", v881.length, v881.reading);
      if (v881.length) {
        f320(this);
      } else if (!v881.reading) {
        vVVF3894.nextTick(f335, this);
      }
    }
    return v880;
  };
  f314.prototype.addListener = f314.prototype.on;
  f314.prototype.removeListener = function (p1517, p1518) {
    let v882 = _0x5e4256.prototype.removeListener.call(this, p1517, p1518);
    if (p1517 === "readable") {
      vVVF3894.nextTick(f334, this);
    }
    return v882;
  };
  f314.prototype.off = f314.prototype.removeListener;
  f314.prototype.removeAllListeners = function (p1519) {
    let v883 = _0x5e4256.prototype.removeAllListeners.apply(this, arguments);
    if (p1519 === "readable" || p1519 === undefined) {
      vVVF3894.nextTick(f334, this);
    }
    return v883;
  };
  function f334(p1520) {
    let v884 = p1520._readableState;
    v884.readableListening = p1520.listenerCount("readable") > 0;
    if (v884.resumeScheduled && v884[v_0x185a3c] === false) {
      v884.flowing = true;
    } else if (p1520.listenerCount("data") > 0) {
      p1520.resume();
    } else if (!v884.readableListening) {
      v884.flowing = null;
    }
  }
  function f335(p1521) {
    v852("readable nexttick read 0");
    p1521.read(0);
  }
  f314.prototype.resume = function () {
    let v885 = this._readableState;
    if (!v885.flowing) {
      v852("resume");
      v885.flowing = !v885.readableListening;
      f336(this, v885);
    }
    v885[v_0x185a3c] = false;
    return this;
  };
  function f336(p1522, p1523) {
    if (!p1523.resumeScheduled) {
      p1523.resumeScheduled = true;
      vVVF3894.nextTick(f337, p1522, p1523);
    }
  }
  function f337(p1524, p1525) {
    v852("resume", p1525.reading);
    if (!p1525.reading) {
      p1524.read(0);
    }
    p1525.resumeScheduled = false;
    p1524.emit("resume");
    f338(p1524);
    if (p1525.flowing && !p1525.reading) {
      p1524.read(0);
    }
  }
  f314.prototype.pause = function () {
    v852("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      v852("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState[v_0x185a3c] = true;
    return this;
  };
  function f338(p1526) {
    let v886 = p1526._readableState;
    for (v852("flow", v886.flowing); v886.flowing && p1526.read() !== null;);
  }
  f314.prototype.wrap = function (p1527) {
    let v887 = false;
    p1527.on("data", p1528 => {
      if (!this.push(p1528) && p1527.pause) {
        v887 = true;
        p1527.pause();
      }
    });
    p1527.on("end", () => {
      this.push(null);
    });
    p1527.on("error", p1529 => {
      _0x1d9d1d(this, p1529);
    });
    p1527.on("close", () => {
      this.destroy();
    });
    p1527.on("destroy", () => {
      this.destroy();
    });
    this._read = () => {
      if (v887 && p1527.resume) {
        v887 = false;
        p1527.resume();
      }
    };
    let v_0x4950df = _0x4950df(p1527);
    for (let v888 = 1; v888 < v_0x4950df.length; v888++) {
      let v889 = v_0x4950df[v888];
      if (this[v889] === undefined && typeof p1527[v889] == "function") {
        this[v889] = p1527[v889].bind(p1527);
      }
    }
    return this;
  };
  f314.prototype[_0x1b9987] = function () {
    return f339(this);
  };
  f314.prototype.iterator = function (p1530) {
    if (p1530 !== undefined) {
      _0x21c8c5(p1530, "options");
    }
    return f339(this, p1530);
  };
  function f339(p1531, p1532) {
    if (typeof p1531.read != "function") {
      p1531 = f314.wrap(p1531, {
        objectMode: true
      });
    }
    let v_0x37ba94 = f340(p1531, p1532);
    v_0x37ba94.stream = p1531;
    return v_0x37ba94;
  }
  async function* f340(p1533, p1534) {
    let vVF103 = vF103;
    function f341(p1535) {
      if (this === p1533) {
        vVF103();
        vVF103 = vF103;
      } else {
        vVF103 = p1535;
      }
    }
    p1533.on("readable", f341);
    let v890;
    let vVVVF3912 = vVVF3912(p1533, {
      writable: false
    }, p1536 => {
      v890 = p1536 ? _0xab47da(v890, p1536) : null;
      vVF103();
      vVF103 = vF103;
    });
    try {
      while (true) {
        let v891 = p1533.destroyed ? null : p1533.read();
        if (v891 !== null) {
          yield v891;
        } else {
          if (v890) {
            throw v890;
          }
          if (v890 === null) {
            return;
          }
          await new _0x5b56ca(f341);
        }
      }
    } catch (_0xdf7d69) {
      v890 = _0xab47da(v890, _0xdf7d69);
      throw v890;
    } finally {
      if ((v890 || p1534?.destroyOnReturn !== false) && (v890 === undefined || p1533._readableState.autoDestroy)) {
        vVVF3932.destroyer(p1533, null);
      } else {
        p1533.off("readable", f341);
        vVVVF3912();
      }
    }
  }
  _0x6b9c3a(f314.prototype, {
    readable: {
      "__proto__": null,
      get() {
        let v892 = this._readableState;
        return !!v892 && v892.readable !== false && !v892.destroyed && !v892.errorEmitted && !v892.endEmitted;
      },
      set(p1537) {
        if (this._readableState) {
          this._readableState.readable = !!p1537;
        }
      }
    },
    readableDidRead: {
      "__proto__": null,
      enumerable: false,
      get: function () {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      "__proto__": null,
      enumerable: false,
      get: function () {
        return this._readableState.readable !== false && (!!this._readableState.destroyed || !!this._readableState.errored) && !this._readableState.endEmitted;
      }
    },
    readableHighWaterMark: {
      "__proto__": null,
      enumerable: false,
      get: function () {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      "__proto__": null,
      enumerable: false,
      get: function () {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      "__proto__": null,
      enumerable: false,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (p1538) {
        if (this._readableState) {
          this._readableState.flowing = p1538;
        }
      }
    },
    readableLength: {
      "__proto__": null,
      enumerable: false,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      "__proto__": null,
      enumerable: false,
      get() {
        if (this._readableState) {
          return this._readableState.objectMode;
        } else {
          return false;
        }
      }
    },
    readableEncoding: {
      "__proto__": null,
      enumerable: false,
      get() {
        if (this._readableState) {
          return this._readableState.encoding;
        } else {
          return null;
        }
      }
    },
    errored: {
      "__proto__": null,
      enumerable: false,
      get() {
        if (this._readableState) {
          return this._readableState.errored;
        } else {
          return null;
        }
      }
    },
    closed: {
      "__proto__": null,
      get() {
        if (this._readableState) {
          return this._readableState.closed;
        } else {
          return false;
        }
      }
    },
    destroyed: {
      "__proto__": null,
      enumerable: false,
      get() {
        if (this._readableState) {
          return this._readableState.destroyed;
        } else {
          return false;
        }
      },
      set(p1539) {
        if (this._readableState) {
          this._readableState.destroyed = p1539;
        }
      }
    },
    readableEnded: {
      "__proto__": null,
      enumerable: false,
      get() {
        if (this._readableState) {
          return this._readableState.endEmitted;
        } else {
          return false;
        }
      }
    }
  });
  _0x6b9c3a(f313.prototype, {
    pipesCount: {
      "__proto__": null,
      get() {
        return this.pipes.length;
      }
    },
    paused: {
      "__proto__": null,
      get() {
        return this[v_0x185a3c] !== false;
      },
      set(p1540) {
        this[v_0x185a3c] = !!p1540;
      }
    }
  });
  f314._fromList = f342;
  function f342(p1541, p1542) {
    if (p1542.length === 0) {
      return null;
    }
    let v893;
    if (p1542.objectMode) {
      v893 = p1542.buffer.shift();
    } else if (!p1541 || p1541 >= p1542.length) {
      if (p1542.decoder) {
        v893 = p1542.buffer.join("");
      } else if (p1542.buffer.length === 1) {
        v893 = p1542.buffer.first();
      } else {
        v893 = p1542.buffer.concat(p1542.length);
      }
      p1542.buffer.clear();
    } else {
      v893 = p1542.buffer.consume(p1541, p1542.decoder);
    }
    return v893;
  }
  function f343(p1543) {
    let v894 = p1543._readableState;
    v852("endReadable", v894.endEmitted);
    if (!v894.endEmitted) {
      v894.ended = true;
      vVVF3894.nextTick(f344, v894, p1543);
    }
  }
  function f344(p1544, p1545) {
    v852("endReadableNT", p1544.endEmitted, p1544.length);
    if (!p1544.errored && !p1544.closeEmitted && !p1544.endEmitted && p1544.length === 0) {
      p1544.endEmitted = true;
      p1545.emit("end");
      if (p1545.writable && p1545.allowHalfOpen === false) {
        vVVF3894.nextTick(f345, p1545);
      } else if (p1544.autoDestroy) {
        let v895 = p1545._writableState;
        if (!v895 || v895.autoDestroy && (v895.finished || v895.writable === false)) {
          p1545.destroy();
        }
      }
    }
  }
  function f345(p1546) {
    if (p1546.writable && !p1546.writableEnded && !p1546.destroyed) {
      p1546.end();
    }
  }
  f314.from = function (p1547, p1548) {
    return vVVF3101(f314, p1547, p1548);
  };
  var v896;
  function f346() {
    if (v896 === undefined) {
      v896 = {};
    }
    return v896;
  }
  f314.fromWeb = function (p1549, p1550) {
    return f346().newStreamReadableFromReadableStream(p1549, p1550);
  };
  f314.toWeb = function (p1551, p1552) {
    return f346().newReadableStreamFromStreamReadable(p1551, p1552);
  };
  f314.wrap = function (p1553, p1554) {
    return new f314({
      objectMode: p1553.readableObjectMode ?? p1553.objectMode ?? true,
      ...p1554,
      destroy(p1555, p1556) {
        vVVF3932.destroyer(p1553, p1555);
        p1556(p1555);
      }
    }).wrap(p1553);
  };
});
var vVF3103 = vF3((p1557, p1558) => {
  var vVVF3895 = vVF389();
  var {
    ArrayPrototypeSlice: _0x187b57,
    Error: _0x201707,
    FunctionPrototypeSymbolHasInstance: _0x45734c,
    ObjectDefineProperty: _0x310ca3,
    ObjectDefineProperties: _0x2d503b,
    ObjectSetPrototypeOf: _0x1aa026,
    StringPrototypeToLowerCase: _0x23b7a4,
    Symbol: _0x5cbbb9,
    SymbolHasInstance: _0x29c07a
  } = vVF384();
  p1558.exports = f350;
  f350.WritableState = f348;
  var {
    EventEmitter: _0x59f770
  } = vVF394();
  var v897 = vVF395().Stream;
  vVF2();
  var {
    Buffer: _0x2258fd
  } = vF8(v370);
  var vVVF3933 = vVF393();
  var {
    addAbortSignal: _0x1912d2
  } = vVF396();
  var {
    getHighWaterMark: _0x14ac26,
    getDefaultHighWaterMark: _0x4a7547
  } = vVF398();
  var {
    ERR_INVALID_ARG_TYPE: _0x15a2b5,
    ERR_METHOD_NOT_IMPLEMENTED: _0xb5e63d,
    ERR_MULTIPLE_CALLBACK: _0x42de80,
    ERR_STREAM_CANNOT_PIPE: _0x2a38f9,
    ERR_STREAM_DESTROYED: _0x1a14d0,
    ERR_STREAM_ALREADY_FINISHED: _0x1fbe4e,
    ERR_STREAM_NULL_VALUES: _0x4a4a46,
    ERR_STREAM_WRITE_AFTER_END: _0x2901d5,
    ERR_UNKNOWN_ENCODING: _0x17b1e4
  } = vVF387().codes;
  var {
    errorOrDestroy: _0x330454
  } = vVVF3933;
  _0x1aa026(f350.prototype, v897.prototype);
  _0x1aa026(f350, v897);
  function f347() {}
  var v_0x5cbbb9 = _0x5cbbb9("kOnFinished");
  function f348(p1559, p1560, p1561) {
    if (typeof p1561 != "boolean") {
      p1561 = p1560 instanceof vVF3105();
    }
    this.objectMode = !!p1559 && !!p1559.objectMode;
    if (p1561) {
      this.objectMode = this.objectMode || !!p1559 && !!p1559.writableObjectMode;
    }
    this.highWaterMark = p1559 ? _0x14ac26(this, p1559, "writableHighWaterMark", p1561) : _0x4a7547(false);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    let v898 = !!p1559 && p1559.decodeStrings === false;
    this.decodeStrings = !v898;
    this.defaultEncoding = p1559 && p1559.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = f355.bind(undefined, p1560);
    this.writecb = null;
    this.writelen = 0;
    this.afterWriteTickInfo = null;
    f349(this);
    this.pendingcb = 0;
    this.constructed = true;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = !p1559 || p1559.emitClose !== false;
    this.autoDestroy = !p1559 || p1559.autoDestroy !== false;
    this.errored = null;
    this.closed = false;
    this.closeEmitted = false;
    this[v_0x5cbbb9] = [];
  }
  function f349(p1562) {
    p1562.buffered = [];
    p1562.bufferedIndex = 0;
    p1562.allBuffers = true;
    p1562.allNoop = true;
  }
  f348.prototype.getBuffer = function () {
    return _0x187b57(this.buffered, this.bufferedIndex);
  };
  _0x310ca3(f348.prototype, "bufferedRequestCount", {
    "__proto__": null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function f350(p1563) {
    let v899 = this instanceof vVF3105();
    if (!v899 && !_0x45734c(f350, this)) {
      return new f350(p1563);
    }
    this._writableState = new f348(p1563, this, v899);
    if (p1563) {
      if (typeof p1563.write == "function") {
        this._write = p1563.write;
      }
      if (typeof p1563.writev == "function") {
        this._writev = p1563.writev;
      }
      if (typeof p1563.destroy == "function") {
        this._destroy = p1563.destroy;
      }
      if (typeof p1563.final == "function") {
        this._final = p1563.final;
      }
      if (typeof p1563.construct == "function") {
        this._construct = p1563.construct;
      }
      if (p1563.signal) {
        _0x1912d2(p1563.signal, this);
      }
    }
    v897.call(this, p1563);
    vVVF3933.construct(this, () => {
      let v900 = this._writableState;
      if (!v900.writing) {
        f359(this, v900);
      }
      f364(this, v900);
    });
  }
  _0x310ca3(f350, _0x29c07a, {
    "__proto__": null,
    value: function (p1564) {
      if (_0x45734c(this, p1564)) {
        return true;
      } else if (this !== f350) {
        return false;
      } else {
        return p1564 && p1564._writableState instanceof f348;
      }
    }
  });
  f350.prototype.pipe = function () {
    _0x330454(this, new _0x2a38f9());
  };
  function f351(p1565, p1566, p1567, p1568) {
    let v901 = p1565._writableState;
    if (typeof p1567 == "function") {
      p1568 = p1567;
      p1567 = v901.defaultEncoding;
    } else {
      if (!p1567) {
        p1567 = v901.defaultEncoding;
      } else if (p1567 !== "buffer" && !_0x2258fd.isEncoding(p1567)) {
        throw new _0x17b1e4(p1567);
      }
      if (typeof p1568 != "function") {
        p1568 = f347;
      }
    }
    if (p1566 === null) {
      throw new _0x4a4a46();
    }
    if (!v901.objectMode) {
      if (typeof p1566 == "string") {
        if (v901.decodeStrings !== false) {
          p1566 = _0x2258fd.from(p1566, p1567);
          p1567 = "buffer";
        }
      } else if (p1566 instanceof _0x2258fd) {
        p1567 = "buffer";
      } else if (v897._isUint8Array(p1566)) {
        p1566 = v897._uint8ArrayToBuffer(p1566);
        p1567 = "buffer";
      } else {
        throw new _0x15a2b5("chunk", ["string", "Buffer", "Uint8Array"], p1566);
      }
    }
    let v902;
    if (v901.ending) {
      v902 = new _0x2901d5();
    } else if (v901.destroyed) {
      v902 = new _0x1a14d0("write");
    }
    if (v902) {
      vVVF3895.nextTick(p1568, v902);
      _0x330454(p1565, v902, true);
      return v902;
    } else {
      v901.pendingcb++;
      return f352(p1565, v901, p1566, p1567, p1568);
    }
  }
  f350.prototype.write = function (p1569, p1570, p1571) {
    return f351(this, p1569, p1570, p1571) === true;
  };
  f350.prototype.cork = function () {
    this._writableState.corked++;
  };
  f350.prototype.uncork = function () {
    let v903 = this._writableState;
    if (v903.corked) {
      v903.corked--;
      if (!v903.writing) {
        f359(this, v903);
      }
    }
  };
  f350.prototype.setDefaultEncoding = function (p1572) {
    if (typeof p1572 == "string") {
      p1572 = _0x23b7a4(p1572);
    }
    if (!_0x2258fd.isEncoding(p1572)) {
      throw new _0x17b1e4(p1572);
    }
    this._writableState.defaultEncoding = p1572;
    return this;
  };
  function f352(p1573, p1574, p1575, p1576, p1577) {
    let v904 = p1574.objectMode ? 1 : p1575.length;
    p1574.length += v904;
    let v905 = p1574.length < p1574.highWaterMark;
    if (!v905) {
      p1574.needDrain = true;
    }
    if (p1574.writing || p1574.corked || p1574.errored || !p1574.constructed) {
      p1574.buffered.push({
        chunk: p1575,
        encoding: p1576,
        callback: p1577
      });
      if (p1574.allBuffers && p1576 !== "buffer") {
        p1574.allBuffers = false;
      }
      if (p1574.allNoop && p1577 !== f347) {
        p1574.allNoop = false;
      }
    } else {
      p1574.writelen = v904;
      p1574.writecb = p1577;
      p1574.writing = true;
      p1574.sync = true;
      p1573._write(p1575, p1576, p1574.onwrite);
      p1574.sync = false;
    }
    return v905 && !p1574.errored && !p1574.destroyed;
  }
  function f353(p1578, p1579, p1580, p1581, p1582, p1583, p1584) {
    p1579.writelen = p1581;
    p1579.writecb = p1584;
    p1579.writing = true;
    p1579.sync = true;
    if (p1579.destroyed) {
      p1579.onwrite(new _0x1a14d0("write"));
    } else if (p1580) {
      p1578._writev(p1582, p1579.onwrite);
    } else {
      p1578._write(p1582, p1583, p1579.onwrite);
    }
    p1579.sync = false;
  }
  function f354(p1585, p1586, p1587, p1588) {
    --p1586.pendingcb;
    p1588(p1587);
    f358(p1586);
    _0x330454(p1585, p1587);
  }
  function f355(p1589, p1590) {
    let v906 = p1589._writableState;
    let v907 = v906.sync;
    let v908 = v906.writecb;
    if (typeof v908 != "function") {
      _0x330454(p1589, new _0x42de80());
      return;
    }
    v906.writing = false;
    v906.writecb = null;
    v906.length -= v906.writelen;
    v906.writelen = 0;
    if (p1590) {
      p1590.stack;
      v906.errored ||= p1590;
      if (p1589._readableState && !p1589._readableState.errored) {
        p1589._readableState.errored = p1590;
      }
      if (v907) {
        vVVF3895.nextTick(f354, p1589, v906, p1590, v908);
      } else {
        f354(p1589, v906, p1590, v908);
      }
    } else {
      if (v906.buffered.length > v906.bufferedIndex) {
        f359(p1589, v906);
      }
      if (v907) {
        if (v906.afterWriteTickInfo !== null && v906.afterWriteTickInfo.cb === v908) {
          v906.afterWriteTickInfo.count++;
        } else {
          v906.afterWriteTickInfo = {
            count: 1,
            cb: v908,
            stream: p1589,
            state: v906
          };
          vVVF3895.nextTick(f356, v906.afterWriteTickInfo);
        }
      } else {
        f357(p1589, v906, 1, v908);
      }
    }
  }
  function f356({
    stream: _0x221fcd,
    state: _0x26d167,
    count: _0x5a4b19,
    cb: _0x76ed22
  }) {
    _0x26d167.afterWriteTickInfo = null;
    return f357(_0x221fcd, _0x26d167, _0x5a4b19, _0x76ed22);
  }
  function f357(p1591, p1592, p1593, p1594) {
    for (!p1592.ending && !p1591.destroyed && p1592.length === 0 && p1592.needDrain && (p1592.needDrain = false, p1591.emit("drain")); p1593-- > 0;) {
      p1592.pendingcb--;
      p1594();
    }
    if (p1592.destroyed) {
      f358(p1592);
    }
    f364(p1591, p1592);
  }
  function f358(p1595) {
    if (p1595.writing) {
      return;
    }
    for (let v909 = p1595.bufferedIndex; v909 < p1595.buffered.length; ++v909) {
      var v910;
      let {
        chunk: _0x23d9a6,
        callback: _0x1ef214
      } = p1595.buffered[v909];
      let v911 = p1595.objectMode ? 1 : _0x23d9a6.length;
      p1595.length -= v911;
      _0x1ef214((v910 = p1595.errored) !== null && v910 !== undefined ? v910 : new _0x1a14d0("write"));
    }
    let v912 = p1595[v_0x5cbbb9].splice(0);
    for (let v913 = 0; v913 < v912.length; v913++) {
      var v914;
      v912[v913]((v914 = p1595.errored) !== null && v914 !== undefined ? v914 : new _0x1a14d0("end"));
    }
    f349(p1595);
  }
  function f359(p1596, p1597) {
    if (p1597.corked || p1597.bufferProcessing || p1597.destroyed || !p1597.constructed) {
      return;
    }
    let {
      buffered: _0x2ffa5c,
      bufferedIndex: _0x43cb1d,
      objectMode: _0x336bbf
    } = p1597;
    let v915 = _0x2ffa5c.length - _0x43cb1d;
    if (!v915) {
      return;
    }
    let v_0x43cb1d = _0x43cb1d;
    p1597.bufferProcessing = true;
    if (v915 > 1 && p1596._writev) {
      p1597.pendingcb -= v915 - 1;
      let v916 = p1597.allNoop ? f347 : p1598 => {
        for (let vV_0x43cb1d = v_0x43cb1d; vV_0x43cb1d < _0x2ffa5c.length; ++vV_0x43cb1d) {
          _0x2ffa5c[vV_0x43cb1d].callback(p1598);
        }
      };
      let v917 = p1597.allNoop && v_0x43cb1d === 0 ? _0x2ffa5c : _0x187b57(_0x2ffa5c, v_0x43cb1d);
      v917.allBuffers = p1597.allBuffers;
      f353(p1596, p1597, true, p1597.length, v917, "", v916);
      f349(p1597);
    } else {
      do {
        let {
          chunk: _0x1e6ef3,
          encoding: _0x4e8fb7,
          callback: _0x92cd2
        } = _0x2ffa5c[v_0x43cb1d];
        _0x2ffa5c[v_0x43cb1d++] = null;
        let v918 = _0x336bbf ? 1 : _0x1e6ef3.length;
        f353(p1596, p1597, false, v918, _0x1e6ef3, _0x4e8fb7, _0x92cd2);
      } while (v_0x43cb1d < _0x2ffa5c.length && !p1597.writing);
      if (v_0x43cb1d === _0x2ffa5c.length) {
        f349(p1597);
      } else if (v_0x43cb1d > 256) {
        _0x2ffa5c.splice(0, v_0x43cb1d);
        p1597.bufferedIndex = 0;
      } else {
        p1597.bufferedIndex = v_0x43cb1d;
      }
    }
    p1597.bufferProcessing = false;
  }
  f350.prototype._write = function (p1599, p1600, p1601) {
    if (this._writev) {
      this._writev([{
        chunk: p1599,
        encoding: p1600
      }], p1601);
    } else {
      throw new _0xb5e63d("_write()");
    }
  };
  f350.prototype._writev = null;
  f350.prototype.end = function (p1602, p1603, p1604) {
    let v919 = this._writableState;
    if (typeof p1602 == "function") {
      p1604 = p1602;
      p1602 = null;
      p1603 = null;
    } else if (typeof p1603 == "function") {
      p1604 = p1603;
      p1603 = null;
    }
    let v920;
    if (p1602 != null) {
      let vF351 = f351(this, p1602, p1603);
      if (vF351 instanceof _0x201707) {
        v920 = vF351;
      }
    }
    if (v919.corked) {
      v919.corked = 1;
      this.uncork();
    }
    if (!v920) {
      if (!v919.errored && !v919.ending) {
        v919.ending = true;
        f364(this, v919, true);
        v919.ended = true;
      } else if (v919.finished) {
        v920 = new _0x1fbe4e("end");
      } else if (v919.destroyed) {
        v920 = new _0x1a14d0("end");
      }
    }
    if (typeof p1604 == "function") {
      if (v920 || v919.finished) {
        vVVF3895.nextTick(p1604, v920);
      } else {
        v919[v_0x5cbbb9].push(p1604);
      }
    }
    return this;
  };
  function f360(p1605) {
    return p1605.ending && !p1605.destroyed && p1605.constructed && p1605.length === 0 && !p1605.errored && p1605.buffered.length === 0 && !p1605.finished && !p1605.writing && !p1605.errorEmitted && !p1605.closeEmitted;
  }
  function f361(p1606, p1607) {
    let v921 = false;
    function f362(p1608) {
      if (v921) {
        _0x330454(p1606, p1608 ?? _0x42de80());
        return;
      }
      v921 = true;
      p1607.pendingcb--;
      if (p1608) {
        let v922 = p1607[v_0x5cbbb9].splice(0);
        for (let v923 = 0; v923 < v922.length; v923++) {
          v922[v923](p1608);
        }
        _0x330454(p1606, p1608, p1607.sync);
      } else if (f360(p1607)) {
        p1607.prefinished = true;
        p1606.emit("prefinish");
        p1607.pendingcb++;
        vVVF3895.nextTick(f365, p1606, p1607);
      }
    }
    p1607.sync = true;
    p1607.pendingcb++;
    try {
      p1606._final(f362);
    } catch (_0x12a886) {
      f362(_0x12a886);
    }
    p1607.sync = false;
  }
  function f363(p1609, p1610) {
    if (!p1610.prefinished && !p1610.finalCalled) {
      if (typeof p1609._final == "function" && !p1610.destroyed) {
        p1610.finalCalled = true;
        f361(p1609, p1610);
      } else {
        p1610.prefinished = true;
        p1609.emit("prefinish");
      }
    }
  }
  function f364(p1611, p1612, p1613) {
    if (f360(p1612)) {
      f363(p1611, p1612);
      if (p1612.pendingcb === 0) {
        if (p1613) {
          p1612.pendingcb++;
          vVVF3895.nextTick((p1614, p1615) => {
            if (f360(p1615)) {
              f365(p1614, p1615);
            } else {
              p1615.pendingcb--;
            }
          }, p1611, p1612);
        } else if (f360(p1612)) {
          p1612.pendingcb++;
          f365(p1611, p1612);
        }
      }
    }
  }
  function f365(p1616, p1617) {
    p1617.pendingcb--;
    p1617.finished = true;
    let v924 = p1617[v_0x5cbbb9].splice(0);
    for (let v925 = 0; v925 < v924.length; v925++) {
      v924[v925]();
    }
    p1616.emit("finish");
    if (p1617.autoDestroy) {
      let v926 = p1616._readableState;
      if (!v926 || v926.autoDestroy && (v926.endEmitted || v926.readable === false)) {
        p1616.destroy();
      }
    }
  }
  _0x2d503b(f350.prototype, {
    closed: {
      "__proto__": null,
      get() {
        if (this._writableState) {
          return this._writableState.closed;
        } else {
          return false;
        }
      }
    },
    destroyed: {
      "__proto__": null,
      get() {
        if (this._writableState) {
          return this._writableState.destroyed;
        } else {
          return false;
        }
      },
      set(p1618) {
        if (this._writableState) {
          this._writableState.destroyed = p1618;
        }
      }
    },
    writable: {
      "__proto__": null,
      get() {
        let v927 = this._writableState;
        return !!v927 && v927.writable !== false && !v927.destroyed && !v927.errored && !v927.ending && !v927.ended;
      },
      set(p1619) {
        if (this._writableState) {
          this._writableState.writable = !!p1619;
        }
      }
    },
    writableFinished: {
      "__proto__": null,
      get() {
        if (this._writableState) {
          return this._writableState.finished;
        } else {
          return false;
        }
      }
    },
    writableObjectMode: {
      "__proto__": null,
      get() {
        if (this._writableState) {
          return this._writableState.objectMode;
        } else {
          return false;
        }
      }
    },
    writableBuffer: {
      "__proto__": null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      "__proto__": null,
      get() {
        if (this._writableState) {
          return this._writableState.ending;
        } else {
          return false;
        }
      }
    },
    writableNeedDrain: {
      "__proto__": null,
      get() {
        let v928 = this._writableState;
        if (v928) {
          return !v928.destroyed && !v928.ending && v928.needDrain;
        } else {
          return false;
        }
      }
    },
    writableHighWaterMark: {
      "__proto__": null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      "__proto__": null,
      get() {
        if (this._writableState) {
          return this._writableState.corked;
        } else {
          return 0;
        }
      }
    },
    writableLength: {
      "__proto__": null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      "__proto__": null,
      enumerable: false,
      get() {
        if (this._writableState) {
          return this._writableState.errored;
        } else {
          return null;
        }
      }
    },
    writableAborted: {
      "__proto__": null,
      enumerable: false,
      get: function () {
        return this._writableState.writable !== false && (!!this._writableState.destroyed || !!this._writableState.errored) && !this._writableState.finished;
      }
    }
  });
  var v929 = vVVF3933.destroy;
  f350.prototype.destroy = function (p1620, p1621) {
    let v930 = this._writableState;
    if (!v930.destroyed && (v930.bufferedIndex < v930.buffered.length || v930[v_0x5cbbb9].length)) {
      vVVF3895.nextTick(f358, v930);
    }
    v929.call(this, p1620, p1621);
    return this;
  };
  f350.prototype._undestroy = vVVF3933.undestroy;
  f350.prototype._destroy = function (p1622, p1623) {
    p1623(p1622);
  };
  f350.prototype[_0x59f770.captureRejectionSymbol] = function (p1624) {
    this.destroy(p1624);
  };
  var v931;
  function f366() {
    if (v931 === undefined) {
      v931 = {};
    }
    return v931;
  }
  f350.fromWeb = function (p1625, p1626) {
    return f366().newStreamWritableFromWritableStream(p1625, p1626);
  };
  f350.toWeb = function (p1627) {
    return f366().newWritableStreamFromStreamWritable(p1627);
  };
});
var vVF3104 = vF3((p1628, p1629) => {
  var vVVF3896 = vVF389();
  vVF2();
  var vVF85 = vF8(v370);
  var {
    isReadable: _0x2b8557,
    isWritable: _0x32055b,
    isIterable: _0x4b8560,
    isNodeStream: _0x36bffa,
    isReadableNodeStream: _0x4fd693,
    isWritableNodeStream: _0x5b4f31,
    isDuplexNodeStream: _0x40fef4
  } = vVF390();
  var vVVF3913 = vVF391();
  var {
    AbortError: _0x3f0d4e,
    codes: {
      ERR_INVALID_ARG_TYPE: _0x25c2a3,
      ERR_INVALID_RETURN_VALUE: _0x473f83
    }
  } = vVF387();
  var {
    destroyer: _0x930738
  } = vVF393();
  var v_0xba91c8 = vVF3105();
  var vVVF3102 = vVF3102();
  var {
    createDeferredPromise: _0x265283
  } = vVF385();
  var vVVF31012 = vVF3101();
  var v932 = globalThis.Blob || vVF85.Blob;
  var v933 = typeof v932 !== "undefined" ? function (p1630) {
    return p1630 instanceof v932;
  } : function (p1631) {
    return false;
  };
  var v934 = globalThis.AbortController || vVF386().AbortController;
  var {
    FunctionPrototypeCall: _0x366f5c
  } = vVF384();
  var vC10 = class extends v_0xba91c8 {
    constructor(p1632) {
      super(p1632);
      if (p1632?.readable === false) {
        this._readableState.readable = false;
        this._readableState.ended = true;
        this._readableState.endEmitted = true;
      }
      if (p1632?.writable === false) {
        this._writableState.writable = false;
        this._writableState.ending = true;
        this._writableState.ended = true;
        this._writableState.finished = true;
      }
    }
  };
  p1629.exports = function f367(p1633, p1634) {
    if (_0x40fef4(p1633)) {
      return p1633;
    }
    if (_0x4fd693(p1633)) {
      return f369({
        readable: p1633
      });
    }
    if (_0x5b4f31(p1633)) {
      return f369({
        writable: p1633
      });
    }
    if (_0x36bffa(p1633)) {
      return f369({
        writable: false,
        readable: false
      });
    }
    if (typeof p1633 == "function") {
      let {
        value: _0x5ece67,
        write: _0x5d9225,
        final: _0x4d6325,
        destroy: _0x107fc5
      } = f368(p1633);
      if (_0x4b8560(_0x5ece67)) {
        return vVVF31012(vC10, _0x5ece67, {
          objectMode: true,
          write: _0x5d9225,
          final: _0x4d6325,
          destroy: _0x107fc5
        });
      }
      let v935 = _0x5ece67?.then;
      if (typeof v935 == "function") {
        let v936;
        let v_0x366f5c = _0x366f5c(v935, _0x5ece67, p1635 => {
          if (p1635 != null) {
            throw new _0x473f83("nully", "body", p1635);
          }
        }, p1636 => {
          _0x930738(v936, p1636);
        });
        return v936 = new vC10({
          objectMode: true,
          readable: false,
          write: _0x5d9225,
          final(p1637) {
            _0x4d6325(async () => {
              try {
                await v_0x366f5c;
                vVVF3896.nextTick(p1637, null);
              } catch (_0xcef2b0) {
                vVVF3896.nextTick(p1637, _0xcef2b0);
              }
            });
          },
          destroy: _0x107fc5
        });
      }
      throw new _0x473f83("Iterable, AsyncIterable or AsyncFunction", p1634, _0x5ece67);
    }
    if (v933(p1633)) {
      return f367(p1633.arrayBuffer());
    }
    if (_0x4b8560(p1633)) {
      return vVVF31012(vC10, p1633, {
        objectMode: true,
        writable: false
      });
    }
    if (typeof p1633?.writable == "object" || typeof p1633?.readable == "object") {
      let v937 = p1633 != null && p1633.readable ? _0x4fd693(p1633?.readable) ? p1633?.readable : f367(p1633.readable) : undefined;
      let v938 = p1633 != null && p1633.writable ? _0x5b4f31(p1633?.writable) ? p1633?.writable : f367(p1633.writable) : undefined;
      return f369({
        readable: v937,
        writable: v938
      });
    }
    let v939 = p1633?.then;
    if (typeof v939 == "function") {
      let v940;
      _0x366f5c(v939, p1633, p1638 => {
        if (p1638 != null) {
          v940.push(p1638);
        }
        v940.push(null);
      }, p1639 => {
        _0x930738(v940, p1639);
      });
      return v940 = new vC10({
        objectMode: true,
        writable: false,
        read() {}
      });
    }
    throw new _0x25c2a3(p1634, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], p1633);
  };
  function f368(p1640) {
    let {
      promise: _0x5da203,
      resolve: _0x5e29b2
    } = _0x265283();
    let v941 = new v934();
    let v942 = v941.signal;
    return {
      value: p1640(async function* () {
        while (true) {
          let v_0x5da203 = _0x5da203;
          _0x5da203 = null;
          let {
            chunk: _0x161fe4,
            done: _0x29c4b9,
            cb: _0x295616
          } = await v_0x5da203;
          vVVF3896.nextTick(_0x295616);
          if (_0x29c4b9) {
            return;
          }
          if (v942.aborted) {
            throw new _0x3f0d4e(undefined, {
              cause: v942.reason
            });
          }
          ({
            promise: _0x5da203,
            resolve: _0x5e29b2
          } = _0x265283());
          yield _0x161fe4;
        }
      }(), {
        signal: v942
      }),
      write(p1641, p1642, p1643) {
        let v_0x5e29b2 = _0x5e29b2;
        _0x5e29b2 = null;
        v_0x5e29b2({
          chunk: p1641,
          done: false,
          cb: p1643
        });
      },
      final(p1644) {
        let v_0x5e29b22 = _0x5e29b2;
        _0x5e29b2 = null;
        v_0x5e29b22({
          done: true,
          cb: p1644
        });
      },
      destroy(p1645, p1646) {
        v941.abort();
        p1646(p1645);
      }
    };
  }
  function f369(p1647) {
    let v943 = p1647.readable && typeof p1647.readable.read != "function" ? vVVF3102.wrap(p1647.readable) : p1647.readable;
    let v944 = p1647.writable;
    let v945 = !!_0x2b8557(v943);
    let v946 = !!_0x32055b(v944);
    let v947;
    let v948;
    let v949;
    let v950;
    let v951;
    function f370(p1648) {
      let vV950 = v950;
      v950 = null;
      if (vV950) {
        vV950(p1648);
      } else if (p1648) {
        v951.destroy(p1648);
      } else if (!v945 && !v946) {
        v951.destroy();
      }
    }
    v951 = new vC10({
      readableObjectMode: v943 != null && !!v943.readableObjectMode,
      writableObjectMode: v944 != null && !!v944.writableObjectMode,
      readable: v945,
      writable: v946
    });
    if (v946) {
      vVVF3913(v944, p1649 => {
        v946 = false;
        if (p1649) {
          _0x930738(v943, p1649);
        }
        f370(p1649);
      });
      v951._write = function (p1650, p1651, p1652) {
        if (v944.write(p1650, p1651)) {
          p1652();
        } else {
          v947 = p1652;
        }
      };
      v951._final = function (p1653) {
        v944.end();
        v948 = p1653;
      };
      v944.on("drain", function () {
        if (v947) {
          let vV947 = v947;
          v947 = null;
          vV947();
        }
      });
      v944.on("finish", function () {
        if (v948) {
          let vV948 = v948;
          v948 = null;
          vV948();
        }
      });
    }
    if (v945) {
      vVVF3913(v943, p1654 => {
        v945 = false;
        if (p1654) {
          _0x930738(v943, p1654);
        }
        f370(p1654);
      });
      v943.on("readable", function () {
        if (v949) {
          let vV949 = v949;
          v949 = null;
          vV949();
        }
      });
      v943.on("end", function () {
        v951.push(null);
      });
      v951._read = function () {
        while (true) {
          let v952 = v943.read();
          if (v952 === null) {
            v949 = v951._read;
            return;
          }
          if (!v951.push(v952)) {
            return;
          }
        }
      };
    }
    v951._destroy = function (p1655, p1656) {
      if (!p1655 && v950 !== null) {
        p1655 = new _0x3f0d4e();
      }
      v949 = null;
      v947 = null;
      v948 = null;
      if (v950 === null) {
        p1656(p1655);
      } else {
        v950 = p1656;
        _0x930738(v944, p1655);
        _0x930738(v943, p1655);
      }
    };
    return v951;
  }
});
var vVF3105 = vF3((p1657, p1658) => {
  var {
    ObjectDefineProperties: _0x23d2cd,
    ObjectGetOwnPropertyDescriptor: _0x18c960,
    ObjectKeys: _0x24e151,
    ObjectSetPrototypeOf: _0x929a64
  } = vVF384();
  p1658.exports = f371;
  var vVVF31022 = vVF3102();
  var vVVF3103 = vVF3103();
  _0x929a64(f371.prototype, vVVF31022.prototype);
  _0x929a64(f371, vVVF31022);
  {
    let v_0x24e151 = _0x24e151(vVVF3103.prototype);
    for (let v953 = 0; v953 < v_0x24e151.length; v953++) {
      let v954 = v_0x24e151[v953];
      f371.prototype[v954] ||= vVVF3103.prototype[v954];
    }
  }
  function f371(p1659) {
    if (!(this instanceof f371)) {
      return new f371(p1659);
    }
    vVVF31022.call(this, p1659);
    vVVF3103.call(this, p1659);
    if (p1659) {
      this.allowHalfOpen = p1659.allowHalfOpen !== false;
      if (p1659.readable === false) {
        this._readableState.readable = false;
        this._readableState.ended = true;
        this._readableState.endEmitted = true;
      }
      if (p1659.writable === false) {
        this._writableState.writable = false;
        this._writableState.ending = true;
        this._writableState.ended = true;
        this._writableState.finished = true;
      }
    } else {
      this.allowHalfOpen = true;
    }
  }
  _0x23d2cd(f371.prototype, {
    writable: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writable")
    },
    writableHighWaterMark: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writableObjectMode")
    },
    writableBuffer: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writableBuffer")
    },
    writableLength: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writableLength")
    },
    writableFinished: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writableFinished")
    },
    writableCorked: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writableCorked")
    },
    writableEnded: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writableEnded")
    },
    writableNeedDrain: {
      "__proto__": null,
      ..._0x18c960(vVVF3103.prototype, "writableNeedDrain")
    },
    destroyed: {
      "__proto__": null,
      get() {
        if (this._readableState === undefined || this._writableState === undefined) {
          return false;
        } else {
          return this._readableState.destroyed && this._writableState.destroyed;
        }
      },
      set(p1660) {
        if (this._readableState && this._writableState) {
          this._readableState.destroyed = p1660;
          this._writableState.destroyed = p1660;
        }
      }
    }
  });
  var v955;
  function f372() {
    if (v955 === undefined) {
      v955 = {};
    }
    return v955;
  }
  f371.fromWeb = function (p1661, p1662) {
    return f372().newStreamDuplexFromReadableWritablePair(p1661, p1662);
  };
  f371.toWeb = function (p1663) {
    return f372().newReadableWritablePairFromDuplex(p1663);
  };
  var v956;
  f371.from = function (p1664) {
    v956 ||= vVF3104();
    return v956(p1664, "body");
  };
});
var vVF3106 = vF3((p1665, p1666) => {
  var {
    ObjectSetPrototypeOf: _0x224046,
    Symbol: _0x451749
  } = vVF384();
  p1666.exports = f373;
  var {
    ERR_METHOD_NOT_IMPLEMENTED: _0x3b7d77
  } = vVF387().codes;
  var vVVF3105 = vVF3105();
  var {
    getHighWaterMark: _0x5d570b
  } = vVF398();
  _0x224046(f373.prototype, vVVF3105.prototype);
  _0x224046(f373, vVVF3105);
  var v_0x451749 = _0x451749("kCallback");
  function f373(p1667) {
    if (!(this instanceof f373)) {
      return new f373(p1667);
    }
    let v957 = p1667 ? _0x5d570b(this, p1667, "readableHighWaterMark", true) : null;
    if (v957 === 0) {
      p1667 = {
        ...p1667,
        highWaterMark: null,
        readableHighWaterMark: v957,
        writableHighWaterMark: p1667.writableHighWaterMark || 0
      };
    }
    vVVF3105.call(this, p1667);
    this._readableState.sync = false;
    this[v_0x451749] = null;
    if (p1667) {
      if (typeof p1667.transform == "function") {
        this._transform = p1667.transform;
      }
      if (typeof p1667.flush == "function") {
        this._flush = p1667.flush;
      }
    }
    this.on("prefinish", f375);
  }
  function f374(p1668) {
    if (typeof this._flush == "function" && !this.destroyed) {
      this._flush((p1669, p1670) => {
        if (p1669) {
          if (p1668) {
            p1668(p1669);
          } else {
            this.destroy(p1669);
          }
          return;
        }
        if (p1670 != null) {
          this.push(p1670);
        }
        this.push(null);
        if (p1668) {
          p1668();
        }
      });
    } else {
      this.push(null);
      if (p1668) {
        p1668();
      }
    }
  }
  function f375() {
    if (this._final !== f374) {
      f374.call(this);
    }
  }
  f373.prototype._final = f374;
  f373.prototype._transform = function (p1671, p1672, p1673) {
    throw new _0x3b7d77("_transform()");
  };
  f373.prototype._write = function (p1674, p1675, p1676) {
    let v958 = this._readableState;
    let v959 = this._writableState;
    let v960 = v958.length;
    this._transform(p1674, p1675, (p1677, p1678) => {
      if (p1677) {
        p1676(p1677);
        return;
      }
      if (p1678 != null) {
        this.push(p1678);
      }
      if (v959.ended || v960 === v958.length || v958.length < v958.highWaterMark) {
        p1676();
      } else {
        this[v_0x451749] = p1676;
      }
    });
  };
  f373.prototype._read = function () {
    if (this[v_0x451749]) {
      let v961 = this[v_0x451749];
      this[v_0x451749] = null;
      v961();
    }
  };
});
var vVF3107 = vF3((p1679, p1680) => {
  var {
    ObjectSetPrototypeOf: _0x40248d
  } = vVF384();
  p1680.exports = f376;
  var vVVF3106 = vVF3106();
  _0x40248d(f376.prototype, vVVF3106.prototype);
  _0x40248d(f376, vVVF3106);
  function f376(p1681) {
    if (!(this instanceof f376)) {
      return new f376(p1681);
    }
    vVVF3106.call(this, p1681);
  }
  f376.prototype._transform = function (p1682, p1683, p1684) {
    p1684(null, p1682);
  };
});
var vVF3108 = vF3((p1685, p1686) => {
  var vVVF3897 = vVF389();
  var {
    ArrayIsArray: _0x8a829b,
    Promise: _0x5ebefa,
    SymbolAsyncIterator: _0x39f2d0
  } = vVF384();
  var vVVF3914 = vVF391();
  var {
    once: _0x4f5213
  } = vVF385();
  var vVVF3934 = vVF393();
  var vVVF31052 = vVF3105();
  var {
    aggregateTwoErrors: _0x152e10,
    codes: {
      ERR_INVALID_ARG_TYPE: _0x9a7433,
      ERR_INVALID_RETURN_VALUE: _0x5e45af,
      ERR_MISSING_ARGS: _0x4439f9,
      ERR_STREAM_DESTROYED: _0x5d376a,
      ERR_STREAM_PREMATURE_CLOSE: _0x104a17
    },
    AbortError: _0x6b562a
  } = vVF387();
  var {
    validateFunction: _0x4b2afe,
    validateAbortSignal: _0x2e9695
  } = vVF388();
  var {
    isIterable: _0x3ff099,
    isReadable: _0x349f49,
    isReadableNodeStream: _0x994759,
    isNodeStream: _0x472f42
  } = vVF390();
  var v962 = globalThis.AbortController || vVF386().AbortController;
  var v963;
  var v964;
  function f377(p1687, p1688, p1689) {
    let v965 = false;
    p1687.on("close", () => {
      v965 = true;
    });
    let vVVVF3914 = vVVF3914(p1687, {
      readable: p1688,
      writable: p1689
    }, p1690 => {
      v965 = !p1690;
    });
    return {
      destroy: p1691 => {
        if (!v965) {
          v965 = true;
          vVVF3934.destroyer(p1687, p1691 || new _0x5d376a("pipe"));
        }
      },
      cleanup: vVVVF3914
    };
  }
  function f378(p1692) {
    _0x4b2afe(p1692[p1692.length - 1], "streams[stream.length - 1]");
    return p1692.pop();
  }
  function f379(p1693) {
    if (_0x3ff099(p1693)) {
      return p1693;
    }
    if (_0x994759(p1693)) {
      return f380(p1693);
    }
    throw new _0x9a7433("val", ["Readable", "Iterable", "AsyncIterable"], p1693);
  }
  async function* f380(p1694) {
    v964 ||= vVF3102();
    yield* v964.prototype[_0x39f2d0].call(p1694);
  }
  async function f381(p1695, p1696, p1697, {
    end: _0x658b48
  }) {
    let v966;
    let v967 = null;
    let vF104 = p1698 => {
      if (p1698) {
        v966 = p1698;
      }
      if (v967) {
        let vV967 = v967;
        v967 = null;
        vV967();
      }
    };
    let vF105 = () => new _0x5ebefa((p1699, p1700) => {
      if (v966) {
        p1700(v966);
      } else {
        v967 = () => {
          if (v966) {
            p1700(v966);
          } else {
            p1699();
          }
        };
      }
    });
    p1696.on("drain", vF104);
    let vVVVF39142 = vVVF3914(p1696, {
      readable: false
    }, vF104);
    try {
      if (p1696.writableNeedDrain) {
        await vF105();
      }
      for await (let v968 of p1695) {
        if (!p1696.write(v968)) {
          await vF105();
        }
      }
      if (_0x658b48) {
        p1696.end();
      }
      await vF105();
      p1697();
    } catch (_0x88b0b9) {
      p1697(v966 !== _0x88b0b9 ? _0x152e10(v966, _0x88b0b9) : _0x88b0b9);
    } finally {
      vVVVF39142();
      p1696.off("drain", vF104);
    }
  }
  function f382(..._0x4381bc) {
    return f383(_0x4381bc, _0x4f5213(f378(_0x4381bc)));
  }
  function f383(p1701, p1702, p1703) {
    if (p1701.length === 1 && _0x8a829b(p1701[0])) {
      p1701 = p1701[0];
    }
    if (p1701.length < 2) {
      throw new _0x4439f9("streams");
    }
    let v969 = new v962();
    let v970 = v969.signal;
    let v971 = p1703?.signal;
    let v972 = [];
    _0x2e9695(v971, "options.signal");
    function f384() {
      f386(new _0x6b562a());
    }
    v971?.addEventListener("abort", f384);
    let v973;
    let v974;
    let v975 = [];
    let v976 = 0;
    function f385(p1704) {
      f386(p1704, --v976 === 0);
    }
    function f386(p1705, p1706) {
      if (p1705 && (!v973 || v973.code === "ERR_STREAM_PREMATURE_CLOSE")) {
        v973 = p1705;
      }
      if (!!v973 || !!p1706) {
        while (v975.length) {
          v975.shift()(v973);
        }
        v971?.removeEventListener("abort", f384);
        v969.abort();
        if (p1706) {
          if (!v973) {
            v972.forEach(p1707 => p1707());
          }
          vVVF3897.nextTick(p1702, v973, v974);
        }
      }
    }
    let v977;
    for (let v978 = 0; v978 < p1701.length; v978++) {
      let v979 = p1701[v978];
      let v980 = v978 < p1701.length - 1;
      let v981 = v978 > 0;
      let v982 = v980 || p1703?.end !== false;
      let v983 = v978 === p1701.length - 1;
      if (_0x472f42(v979)) {
        let vF107 = function (p1708) {
          if (p1708 && p1708.name !== "AbortError" && p1708.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            f385(p1708);
          }
        };
        var vVF107 = vF107;
        if (v982) {
          let {
            destroy: _0x37fe6e,
            cleanup: _0x4e808c
          } = f377(v979, v980, v981);
          v975.push(_0x37fe6e);
          if (_0x349f49(v979) && v983) {
            v972.push(_0x4e808c);
          }
        }
        v979.on("error", vF107);
        if (_0x349f49(v979) && v983) {
          v972.push(() => {
            v979.removeListener("error", vF107);
          });
        }
      }
      if (v978 === 0) {
        if (typeof v979 == "function") {
          v977 = v979({
            signal: v970
          });
          if (!_0x3ff099(v977)) {
            throw new _0x5e45af("Iterable, AsyncIterable or Stream", "source", v977);
          }
        } else if (_0x3ff099(v979) || _0x994759(v979)) {
          v977 = v979;
        } else {
          v977 = vVVF31052.from(v979);
        }
      } else if (typeof v979 == "function") {
        v977 = f379(v977);
        v977 = v979(v977, {
          signal: v970
        });
        if (v980) {
          if (!_0x3ff099(v977, true)) {
            throw new _0x5e45af("AsyncIterable", "transform[" + (v978 - 1) + "]", v977);
          }
        } else {
          var v984;
          v963 ||= vVF3107();
          let v985 = new v963({
            objectMode: true
          });
          let v986 = (v984 = v977) === null || v984 === undefined ? undefined : v984.then;
          if (typeof v986 == "function") {
            v976++;
            v986.call(v977, p1709 => {
              v974 = p1709;
              if (p1709 != null) {
                v985.write(p1709);
              }
              if (v982) {
                v985.end();
              }
              vVVF3897.nextTick(f385);
            }, p1710 => {
              v985.destroy(p1710);
              vVVF3897.nextTick(f385, p1710);
            });
          } else if (_0x3ff099(v977, true)) {
            v976++;
            f381(v977, v985, f385, {
              end: v982
            });
          } else {
            throw new _0x5e45af("AsyncIterable or Promise", "destination", v977);
          }
          v977 = v985;
          let {
            destroy: _0x5c0fd5,
            cleanup: _0x5b17a5
          } = f377(v977, false, true);
          v975.push(_0x5c0fd5);
          if (v983) {
            v972.push(_0x5b17a5);
          }
        }
      } else if (_0x472f42(v979)) {
        if (_0x994759(v977)) {
          v976 += 2;
          let v_0x25882b = f387(v977, v979, f385, {
            end: v982
          });
          if (_0x349f49(v979) && v983) {
            v972.push(v_0x25882b);
          }
        } else if (_0x3ff099(v977)) {
          v976++;
          f381(v977, v979, f385, {
            end: v982
          });
        } else {
          throw new _0x9a7433("val", ["Readable", "Iterable", "AsyncIterable"], v977);
        }
        v977 = v979;
      } else {
        v977 = vVVF31052.from(v979);
      }
    }
    if (v970 != null && v970.aborted || v971 != null && v971.aborted) {
      vVVF3897.nextTick(f384);
    }
    return v977;
  }
  function f387(p1711, p1712, p1713, {
    end: _0x5f1f6e
  }) {
    let v987 = false;
    p1712.on("close", () => {
      if (!v987) {
        p1713(new _0x104a17());
      }
    });
    p1711.pipe(p1712, {
      end: _0x5f1f6e
    });
    if (_0x5f1f6e) {
      p1711.once("end", () => {
        v987 = true;
        p1712.end();
      });
    } else {
      p1713();
    }
    vVVF3914(p1711, {
      readable: true,
      writable: false
    }, p1714 => {
      let v988 = p1711._readableState;
      if (p1714 && p1714.code === "ERR_STREAM_PREMATURE_CLOSE" && v988 && v988.ended && !v988.errored && !v988.errorEmitted) {
        p1711.once("end", p1713).once("error", p1713);
      } else {
        p1713(p1714);
      }
    });
    return vVVF3914(p1712, {
      readable: false,
      writable: true
    }, p1713);
  }
  p1686.exports = {
    pipelineImpl: f383,
    pipeline: f382
  };
});
var vVF3109 = vF3((p1715, p1716) => {
  var {
    pipeline: _0x2bc506
  } = vVF3108();
  var vVVF31053 = vVF3105();
  var {
    destroyer: _0x77097f
  } = vVF393();
  var {
    isNodeStream: _0xcd1222,
    isReadable: _0x1d1813,
    isWritable: _0x3e2ee9
  } = vVF390();
  var {
    AbortError: _0x663bf4,
    codes: {
      ERR_INVALID_ARG_VALUE: _0x22dc68,
      ERR_MISSING_ARGS: _0x256673
    }
  } = vVF387();
  p1716.exports = function (..._0x1739f8) {
    if (_0x1739f8.length === 0) {
      throw new _0x256673("streams");
    }
    if (_0x1739f8.length === 1) {
      return vVVF31053.from(_0x1739f8[0]);
    }
    let v989 = [..._0x1739f8];
    if (typeof _0x1739f8[0] == "function") {
      _0x1739f8[0] = vVVF31053.from(_0x1739f8[0]);
    }
    if (typeof _0x1739f8[_0x1739f8.length - 1] == "function") {
      let v990 = _0x1739f8.length - 1;
      _0x1739f8[v990] = vVVF31053.from(_0x1739f8[v990]);
    }
    for (let v991 = 0; v991 < _0x1739f8.length; ++v991) {
      if (_0xcd1222(_0x1739f8[v991])) {
        if (v991 < _0x1739f8.length - 1 && !_0x1d1813(_0x1739f8[v991])) {
          throw new _0x22dc68("streams[" + v991 + "]", v989[v991], "must be readable");
        }
        if (v991 > 0 && !_0x3e2ee9(_0x1739f8[v991])) {
          throw new _0x22dc68("streams[" + v991 + "]", v989[v991], "must be writable");
        }
      }
    }
    let v992;
    let v993;
    let v994;
    let v995;
    let v996;
    function f388(p1717) {
      let vV995 = v995;
      v995 = null;
      if (vV995) {
        vV995(p1717);
      } else if (p1717) {
        v996.destroy(p1717);
      } else if (!v999 && !v998) {
        v996.destroy();
      }
    }
    let v997 = _0x1739f8[0];
    let v_0x2bc506 = _0x2bc506(_0x1739f8, f388);
    let v998 = !!_0x3e2ee9(v997);
    let v999 = !!_0x1d1813(v_0x2bc506);
    v996 = new vVVF31053({
      writableObjectMode: v997 != null && !!v997.writableObjectMode,
      readableObjectMode: v_0x2bc506 != null && !!v_0x2bc506.writableObjectMode,
      writable: v998,
      readable: v999
    });
    if (v998) {
      v996._write = function (p1718, p1719, p1720) {
        if (v997.write(p1718, p1719)) {
          p1720();
        } else {
          v992 = p1720;
        }
      };
      v996._final = function (p1721) {
        v997.end();
        v993 = p1721;
      };
      v997.on("drain", function () {
        if (v992) {
          let vV992 = v992;
          v992 = null;
          vV992();
        }
      });
      v_0x2bc506.on("finish", function () {
        if (v993) {
          let vV993 = v993;
          v993 = null;
          vV993();
        }
      });
    }
    if (v999) {
      v_0x2bc506.on("readable", function () {
        if (v994) {
          let vV994 = v994;
          v994 = null;
          vV994();
        }
      });
      v_0x2bc506.on("end", function () {
        v996.push(null);
      });
      v996._read = function () {
        while (true) {
          let v1000 = v_0x2bc506.read();
          if (v1000 === null) {
            v994 = v996._read;
            return;
          }
          if (!v996.push(v1000)) {
            return;
          }
        }
      };
    }
    v996._destroy = function (p1722, p1723) {
      if (!p1722 && v995 !== null) {
        p1722 = new _0x663bf4();
      }
      v994 = null;
      v992 = null;
      v993 = null;
      if (v995 === null) {
        p1723(p1722);
      } else {
        v995 = p1723;
        _0x77097f(v_0x2bc506, p1722);
      }
    };
    return v996;
  };
});
var vVF3110 = vF3((p1724, p1725) => {
  var {
    ArrayPrototypePop: _0x5d3950,
    Promise: _0x5acfc6
  } = vVF384();
  var {
    isIterable: _0x8efd2c,
    isNodeStream: _0x182b5c
  } = vVF390();
  var {
    pipelineImpl: _0x1b224b
  } = vVF3108();
  var {
    finished: _0x54ef92
  } = vVF391();
  function f389(..._0x3e8c35) {
    return new _0x5acfc6((p1726, p1727) => {
      let v1001;
      let v1002;
      let v1003 = _0x3e8c35[_0x3e8c35.length - 1];
      if (v1003 && typeof v1003 == "object" && !_0x182b5c(v1003) && !_0x8efd2c(v1003)) {
        let v_0x5d3950 = _0x5d3950(_0x3e8c35);
        v1001 = v_0x5d3950.signal;
        v1002 = v_0x5d3950.end;
      }
      _0x1b224b(_0x3e8c35, (p1728, p1729) => {
        if (p1728) {
          p1727(p1728);
        } else {
          p1726(p1729);
        }
      }, {
        signal: v1001,
        end: v1002
      });
    });
  }
  p1725.exports = {
    finished: _0x54ef92,
    pipeline: f389
  };
});
var vVF3111 = vF3((p1730, p1731) => {
  vVF2();
  var {
    Buffer: _0x600717
  } = vF8(v370);
  var {
    ObjectDefineProperty: _0x5daee0,
    ObjectKeys: _0x426e33,
    ReflectApply: _0x2ab55a
  } = vVF384();
  var {
    promisify: {
      custom: _0x4b8cb9
    }
  } = vVF385();
  var {
    streamReturningOperators: _0x2f3165,
    promiseReturningOperators: _0x3b5166
  } = vVF392();
  var {
    codes: {
      ERR_ILLEGAL_CONSTRUCTOR: _0x53d081
    }
  } = vVF387();
  var vVVF3109 = vVF3109();
  var {
    pipeline: _0xde6a91
  } = vVF3108();
  var {
    destroyer: _0x5b3a08
  } = vVF393();
  var vVVF3915 = vVF391();
  var vVVF3110 = vVF3110();
  var vVVF390 = vVF390();
  var v1004 = p1731.exports = vVF395().Stream;
  v1004.isDisturbed = vVVF390.isDisturbed;
  v1004.isErrored = vVVF390.isErrored;
  v1004.isReadable = vVVF390.isReadable;
  v1004.Readable = vVF3102();
  for (let v1005 of _0x426e33(_0x2f3165)) {
    let vF108 = function (..._0x474169) {
      if (new.target) {
        throw _0x53d081();
      }
      return v1004.Readable.from(_0x2ab55a(v1006, this, _0x474169));
    };
    v1007 = vF108;
    let v1006 = _0x2f3165[v1005];
    _0x5daee0(vF108, "name", {
      "__proto__": null,
      value: v1006.name
    });
    _0x5daee0(vF108, "length", {
      "__proto__": null,
      value: v1006.length
    });
    _0x5daee0(v1004.Readable.prototype, v1005, {
      "__proto__": null,
      value: vF108,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  var v1007;
  for (let v1008 of _0x426e33(_0x3b5166)) {
    let vF109 = function (..._0x465c7b) {
      if (new.target) {
        throw _0x53d081();
      }
      return _0x2ab55a(v1009, this, _0x465c7b);
    };
    v1007 = vF109;
    let v1009 = _0x3b5166[v1008];
    _0x5daee0(vF109, "name", {
      "__proto__": null,
      value: v1009.name
    });
    _0x5daee0(vF109, "length", {
      "__proto__": null,
      value: v1009.length
    });
    _0x5daee0(v1004.Readable.prototype, v1008, {
      "__proto__": null,
      value: vF109,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  var v1007;
  v1004.Writable = vVF3103();
  v1004.Duplex = vVF3105();
  v1004.Transform = vVF3106();
  v1004.PassThrough = vVF3107();
  v1004.pipeline = _0xde6a91;
  var {
    addAbortSignal: _0x562ef6
  } = vVF396();
  v1004.addAbortSignal = _0x562ef6;
  v1004.finished = vVVF3915;
  v1004.destroy = _0x5b3a08;
  v1004.compose = vVVF3109;
  _0x5daee0(v1004, "promises", {
    "__proto__": null,
    configurable: true,
    enumerable: true,
    get() {
      return vVVF3110;
    }
  });
  _0x5daee0(_0xde6a91, _0x4b8cb9, {
    "__proto__": null,
    enumerable: true,
    get() {
      return vVVF3110.pipeline;
    }
  });
  _0x5daee0(vVVF3915, _0x4b8cb9, {
    "__proto__": null,
    enumerable: true,
    get() {
      return vVVF3110.finished;
    }
  });
  v1004.Stream = v1004;
  v1004._isUint8Array = function (p1732) {
    return p1732 instanceof Uint8Array;
  };
  v1004._uint8ArrayToBuffer = function (p1733) {
    return _0x600717.from(p1733.buffer, p1733.byteOffset, p1733.byteLength);
  };
});
var vVF3112 = vF3((p1734, p1735) => {
  var vVVF3112 = vVF3112();
  {
    let vVVF3111 = vVF3111();
    let vVVF31102 = vVF3110();
    let v1010 = vVVF3111.Readable.destroy;
    p1735.exports = vVVF3111.Readable;
    p1735.exports._uint8ArrayToBuffer = vVVF3111._uint8ArrayToBuffer;
    p1735.exports._isUint8Array = vVVF3111._isUint8Array;
    p1735.exports.isDisturbed = vVVF3111.isDisturbed;
    p1735.exports.isErrored = vVVF3111.isErrored;
    p1735.exports.isReadable = vVVF3111.isReadable;
    p1735.exports.Readable = vVVF3111.Readable;
    p1735.exports.Writable = vVVF3111.Writable;
    p1735.exports.Duplex = vVVF3111.Duplex;
    p1735.exports.Transform = vVVF3111.Transform;
    p1735.exports.PassThrough = vVVF3111.PassThrough;
    p1735.exports.addAbortSignal = vVVF3111.addAbortSignal;
    p1735.exports.finished = vVVF3111.finished;
    p1735.exports.destroy = vVVF3111.destroy;
    p1735.exports.destroy = v1010;
    p1735.exports.pipeline = vVVF3111.pipeline;
    p1735.exports.compose = vVVF3111.compose;
    Object.defineProperty(vVVF3111, "promises", {
      configurable: true,
      enumerable: true,
      get() {
        return vVVF31102;
      }
    });
    p1735.exports.Stream = vVVF3111.Stream;
  }
  p1735.exports.default = p1735.exports;
});
var vVF7 = vF7(vVF321());
var v1011 = "/nodebox";
var vV1011 = v1011;
function f390() {
  return vV1011;
}
function f391(p1736, p1737) {
  var v1012 = [];
  for (var v1013 = 0; v1013 < p1736.length; v1013++) {
    var v1014 = p1736[v1013];
    if (!!v1014 && v1014 !== ".") {
      if (v1014 === "..") {
        if (v1012.length && v1012[v1012.length - 1] !== "..") {
          v1012.pop();
        } else if (p1737) {
          v1012.push("..");
        }
      } else {
        v1012.push(v1014);
      }
    }
  }
  return v1012;
}
var v1015 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
function f392(p1738) {
  return v1015.exec(p1738).slice(1);
}
function f393(..._0x386096) {
  var v1016 = "";
  for (var v1017 = false, v1018 = _0x386096.length - 1; v1018 >= -1 && !v1017; v1018--) {
    var v1019 = v1018 >= 0 ? _0x386096[v1018] : f390();
    if (vVF7.default.isString(v1019)) {
      if (!v1019) {
        continue;
      }
    } else {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    v1016 = v1019 + "/" + v1016;
    v1017 = v1019[0] === "/";
  }
  v1016 = f391(v1016.split("/"), !v1017).join("/");
  return (v1017 ? "/" : "") + v1016 || ".";
}
function f394(p1739) {
  return p1739.charAt(0) === "/";
}
function f395(p1740) {
  var vF394 = f394(p1740);
  var v1020 = p1740 && p1740[p1740.length - 1] === "/";
  p1740 = f391(p1740.split("/"), !vF394).join("/");
  if (!p1740 && !vF394) {
    p1740 = ".";
  }
  if (p1740 && v1020) {
    p1740 += "/";
  }
  return (vF394 ? "/" : "") + p1740;
}
function f396(..._0x368240) {
  var v1021 = "";
  for (var v1022 = 0; v1022 < _0x368240.length; v1022++) {
    var v1023 = _0x368240[v1022];
    if (!vVF7.default.isString(v1023)) {
      throw new TypeError("Arguments to path.join must be strings");
    }
    if (v1023) {
      if (v1021) {
        v1021 += "/" + v1023;
      } else {
        v1021 += v1023;
      }
    }
  }
  return f395(v1021);
}
function f397(p1741) {
  var vF392 = f392(p1741);
  var v1024 = vF392[0];
  var v1025 = vF392[1];
  if (!v1024 && !v1025) {
    return ".";
  } else {
    v1025 &&= v1025.substr(0, v1025.length - 1);
    return v1024 + v1025;
  }
}
var vVF72 = vF7(vVF325());
var v1026 = Object.create;
var v1027 = Object.defineProperty;
var v1028 = Object.getOwnPropertyDescriptor;
var v1029 = Object.getOwnPropertyNames;
var v1030 = Object.getPrototypeOf;
var v1031 = Object.prototype.hasOwnProperty;
var vF110 = (p1742, p1743, p1744) => p1743 in p1742 ? v1027(p1742, p1743, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: p1744
}) : p1742[p1743] = p1744;
var vF111 = (p1745, p1746) => function () {
  if (!p1746) {
    (0, p1745[v1029(p1745)[0]])((p1746 = {
      exports: {}
    }).exports, p1746);
  }
  return p1746.exports;
};
var vF112 = (p1747, p1748, p1749, p1750) => {
  if (p1748 && typeof p1748 == "object" || typeof p1748 == "function") {
    for (let v1032 of v1029(p1748)) {
      if (!v1031.call(p1747, v1032) && v1032 !== p1749) {
        v1027(p1747, v1032, {
          get: () => p1748[v1032],
          enumerable: !(p1750 = v1028(p1748, v1032)) || p1750.enumerable
        });
      }
    }
  }
  return p1747;
};
var vF113 = (p1751, p1752, p1753) => {
  p1753 = p1751 != null ? v1026(v1030(p1751)) : {};
  return vF112(p1752 || !p1751 || !p1751.__esModule ? v1027(p1753, "default", {
    value: p1751,
    enumerable: true
  }) : p1753, p1751);
};
var vF114 = (p1754, p1755, p1756) => {
  vF110(p1754, typeof p1755 != "symbol" ? p1755 + "" : p1755, p1756);
  return p1756;
};
var vF115 = (p1757, p1758, p1759) => {
  if (!p1758.has(p1757)) {
    throw TypeError("Cannot " + p1759);
  }
};
var vF116 = (p1760, p1761, p1762) => {
  vF115(p1760, p1761, "read from private field");
  if (p1762) {
    return p1762.call(p1760);
  } else {
    return p1761.get(p1760);
  }
};
var vF117 = (p1763, p1764, p1765) => {
  if (p1764.has(p1763)) {
    throw TypeError("Cannot add the same private member more than once");
  }
  if (p1764 instanceof WeakSet) {
    p1764.add(p1763);
  } else {
    p1764.set(p1763, p1765);
  }
};
var vF118 = (p1766, p1767, p1768, p1769) => {
  vF115(p1766, p1767, "write to private field");
  if (p1769) {
    p1769.call(p1766, p1768);
  } else {
    p1767.set(p1766, p1768);
  }
  return p1768;
};
var vF119 = (p1770, p1771, p1772) => {
  vF115(p1770, p1771, "access private method");
  return p1772;
};
var vVF111 = vF111({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js"(p1773, p1774) {
    p1774.exports = function (p1775, p1776) {
      var v1033 = "000000000" + p1775;
      return v1033.substr(v1033.length - p1776);
    };
  }
});
var vVF1112 = vF111({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js"(p1777, p1778) {
    var vVVF111 = vVF111();
    var v1034 = typeof window == "object" ? window : self;
    var v1035 = Object.keys(v1034).length;
    var v1036 = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var vVVVF111 = vVVF111((v1036 + navigator.userAgent.length).toString(36) + v1035.toString(36), 4);
    p1778.exports = function () {
      return vVVVF111;
    };
  }
});
var vVF1113 = vF111({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js"(p1779, p1780) {
    var v1037;
    var v1038 = typeof window !== "undefined" && (window.crypto || window.msCrypto) || typeof self !== "undefined" && self.crypto;
    if (v1038) {
      v1039 = Math.pow(2, 32) - 1;
      v1037 = function () {
        return Math.abs(v1038.getRandomValues(new Uint32Array(1))[0] / v1039);
      };
    } else {
      v1037 = Math.random;
    }
    var v1039;
    p1780.exports = v1037;
  }
});
var vVF1114 = vF111({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js"(p1781, p1782) {
    var vVVF1112 = vVF1112();
    var vVVF1113 = vVF111();
    var vVVF11132 = vVF1113();
    var v1040 = 0;
    var v1041 = 4;
    var v1042 = 36;
    var v1043 = Math.pow(v1042, v1041);
    function f398() {
      return vVVF1113((vVVF11132() * v1043 << 0).toString(v1042), v1041);
    }
    function f399() {
      v1040 = v1040 < v1043 ? v1040 : 0;
      v1040++;
      return v1040 - 1;
    }
    function f400() {
      var v1044 = "c";
      var v1045 = new Date().getTime().toString(v1042);
      var vVVVF1113 = vVVF1113(f399().toString(v1042), v1041);
      var vVVVF1112 = vVVF1112();
      var v1046 = f398() + f398();
      return v1044 + v1045 + vVVVF1113 + vVVVF1112 + v1046;
    }
    f400.slug = function () {
      var v1047 = new Date().getTime().toString(36);
      var v1048 = f399().toString(36).slice(-4);
      var v1049 = vVVF1112().slice(0, 1) + vVVF1112().slice(-1);
      var v1050 = f398().slice(-2);
      return v1047.slice(-2) + v1048 + v1049 + v1050;
    };
    f400.isCuid = function (p1783) {
      if (typeof p1783 != "string") {
        return false;
      } else {
        return !!p1783.startsWith("c");
      }
    };
    f400.isSlug = function (p1784) {
      if (typeof p1784 != "string") {
        return false;
      }
      var v1051 = p1784.length;
      return v1051 >= 7 && v1051 <= 10;
    };
    f400.fingerprint = vVVF1112;
    p1782.exports = f400;
  }
});
var vVF1115 = vF111({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js"(p1785) {
    'use strict';

    Object.defineProperty(p1785, "__esModule", {
      value: true
    });
    p1785.createDeferredExecutor = undefined;
    function f401() {
      let vF120 = (p1786, p1787) => {
        vF120.state = "pending";
        vF120.resolve = p1788 => {
          if (vF120.state !== "pending") {
            return;
          }
          vF120.result = p1788;
          let vF121 = p1789 => {
            vF120.state = "fulfilled";
            return p1789;
          };
          return p1786(p1788 instanceof Promise ? p1788 : Promise.resolve(p1788).then(vF121));
        };
        vF120.reject = p1790 => {
          if (vF120.state === "pending") {
            queueMicrotask(() => {
              vF120.state = "rejected";
            });
            return p1787(vF120.rejectionReason = p1790);
          }
        };
      };
      return vF120;
    }
    p1785.createDeferredExecutor = f401;
  }
});
var vVF1116 = vF111({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js"(p1791) {
    'use strict';

    Object.defineProperty(p1791, "__esModule", {
      value: true
    });
    p1791.DeferredPromise = undefined;
    var vVVF1115 = vVF1115();
    var vC11 = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(p1792 = null) {
        let v1052 = (0, vVVF1115.createDeferredExecutor)();
        super((p1793, p1794) => {
          v1052(p1793, p1794);
          p1792?.(v1052.resolve, v1052.reject);
        });
        this.#e = v1052;
        this.resolve = this.#e.resolve;
        this.reject = this.#e.reject;
      }
      get state() {
        return this.#e.state;
      }
      get rejectionReason() {
        return this.#e.rejectionReason;
      }
      then(p1795, p1796) {
        return this.#t(super.then(p1795, p1796));
      }
      catch(p1797) {
        return this.#t(super.catch(p1797));
      }
      finally(p1798) {
        return this.#t(super.finally(p1798));
      }
      #t(p1799) {
        return Object.defineProperties(p1799, {
          resolve: {
            configurable: true,
            value: this.resolve
          },
          reject: {
            configurable: true,
            value: this.reject
          }
        });
      }
    };
    p1791.DeferredPromise = vC11;
  }
});
var vVF1117 = vF111({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js"(p1800) {
    'use strict';

    var v1053 = p1800 && p1800.__createBinding || (Object.create ? function (p1801, p1802, p1803, p1804 = p1803) {
      var v1054 = Object.getOwnPropertyDescriptor(p1802, p1803);
      if (!v1054 || ("get" in v1054 ? !p1802.__esModule : v1054.writable || v1054.configurable)) {
        v1054 = {
          enumerable: true,
          get: function () {
            return p1802[p1803];
          }
        };
      }
      Object.defineProperty(p1801, p1804, v1054);
    } : function (p1805, p1806, p1807, p1808 = p1807) {
      p1805[p1808] = p1806[p1807];
    });
    var v1055 = p1800 && p1800.__exportStar || function (p1809, p1810) {
      for (var v1056 in p1809) {
        if (v1056 !== "default" && !Object.prototype.hasOwnProperty.call(p1810, v1056)) {
          v1053(p1810, p1809, v1056);
        }
      }
    };
    Object.defineProperty(p1800, "__esModule", {
      value: true
    });
    v1055(vVF1115(), p1800);
    v1055(vVF1116(), p1800);
  }
});
var vVF1118 = vF111({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js"(p1811) {
    'use strict';

    Object.defineProperty(p1811, "__esModule", {
      value: true
    });
    p1811.MemoryLeakError = undefined;
    var vC12 = class extends Error {
      emitter;
      type;
      count;
      constructor(p1812, p1813, p1814) {
        super("Possible EventEmitter memory leak detected. " + p1814 + " " + p1813.toString() + " listeners added. Use emitter.setMaxListeners() to increase limit");
        this.emitter = p1812;
        this.type = p1813;
        this.count = p1814;
        this.name = "MaxListenersExceededWarning";
      }
    };
    p1811.MemoryLeakError = vC12;
  }
});
var vVF1119 = vF111({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js"(p1815) {
    'use strict';

    Object.defineProperty(p1815, "__esModule", {
      value: true
    });
    p1815.Emitter = undefined;
    var vVVF1118 = vVF1118();
    var v1057;
    var v1058;
    var v1059;
    var v1060;
    var v1061;
    var v1062;
    var v1063;
    var v1064;
    var v1065;
    var v1066;
    var v1067;
    var vC13 = class {
      constructor() {
        vF117(this, v1060);
        vF117(this, v1062);
        vF117(this, v1064);
        vF117(this, v1066);
        vF117(this, v1057, undefined);
        vF117(this, v1058, undefined);
        vF117(this, v1059, undefined);
        vF118(this, v1057, new Map());
        vF118(this, v1058, vC13.defaultMaxListeners);
        vF118(this, v1059, false);
      }
      static listenerCount(p1816, p1817) {
        return p1816.listenerCount(p1817);
      }
      setMaxListeners(p1818) {
        vF118(this, v1058, p1818);
        return this;
      }
      getMaxListeners() {
        return vF116(this, v1058);
      }
      eventNames() {
        return Array.from(vF116(this, v1057).keys());
      }
      emit(p1819, ..._0x4badc5) {
        let v1068 = vF119(this, v1060, v1061).call(this, p1819);
        v1068.forEach(p1820 => {
          p1820.apply(this, _0x4badc5);
        });
        return v1068.length > 0;
      }
      addListener(p1821, p1822) {
        vF119(this, v1066, v1067).call(this, "newListener", p1821, p1822);
        let v1069 = vF119(this, v1060, v1061).call(this, p1821).concat(p1822);
        vF116(this, v1057).set(p1821, v1069);
        if (vF116(this, v1058) > 0 && this.listenerCount(p1821) > vF116(this, v1058) && !vF116(this, v1059)) {
          vF118(this, v1059, true);
          let v1070 = new vVVF1118.MemoryLeakError(this, p1821, this.listenerCount(p1821));
          console.warn(v1070);
        }
        return this;
      }
      on(p1823, p1824) {
        return this.addListener(p1823, p1824);
      }
      once(p1825, p1826) {
        return this.addListener(p1825, vF119(this, v1064, v1065).call(this, p1825, p1826));
      }
      prependListener(p1827, p1828) {
        let v1071 = vF119(this, v1060, v1061).call(this, p1827);
        if (v1071.length > 0) {
          let v1072 = [p1828].concat(v1071);
          vF116(this, v1057).set(p1827, v1072);
        } else {
          vF116(this, v1057).set(p1827, v1071.concat(p1828));
        }
        return this;
      }
      prependOnceListener(p1829, p1830) {
        return this.prependListener(p1829, vF119(this, v1064, v1065).call(this, p1829, p1830));
      }
      removeListener(p1831, p1832) {
        let v1073 = vF119(this, v1060, v1061).call(this, p1831);
        if (v1073.length > 0) {
          vF119(this, v1062, v1063).call(this, v1073, p1832);
          vF116(this, v1057).set(p1831, v1073);
          vF119(this, v1066, v1067).call(this, "removeListener", p1831, p1832);
        }
        return this;
      }
      off(p1833, p1834) {
        return this.removeListener(p1833, p1834);
      }
      removeAllListeners(p1835) {
        if (p1835) {
          vF116(this, v1057).delete(p1835);
        } else {
          vF116(this, v1057).clear();
        }
        return this;
      }
      listeners(p1836) {
        return Array.from(vF119(this, v1060, v1061).call(this, p1836));
      }
      listenerCount(p1837) {
        return vF119(this, v1060, v1061).call(this, p1837).length;
      }
      rawListeners(p1838) {
        return this.listeners(p1838);
      }
    };
    var vVC13 = vC13;
    v1057 = new WeakMap();
    v1058 = new WeakMap();
    v1059 = new WeakMap();
    v1060 = new WeakSet();
    v1061 = function (p1839) {
      return vF116(this, v1057).get(p1839) || [];
    };
    v1062 = new WeakSet();
    v1063 = function (p1840, p1841) {
      let v1074 = p1840.indexOf(p1841);
      if (v1074 > -1) {
        p1840.splice(v1074, 1);
      }
      return [];
    };
    v1064 = new WeakSet();
    v1065 = function (p1842, p1843) {
      let vF122 = (..._0x29a901) => {
        this.removeListener(p1842, vF122);
        p1843.apply(this, _0x29a901);
      };
      return vF122;
    };
    v1066 = new WeakSet();
    v1067 = function (p1844, p1845, p1846) {
      this.emit(p1844, p1845, p1846);
    };
    vF114(vVC13, "defaultMaxListeners", 10);
    p1815.Emitter = vVC13;
  }
});
var vVF11110 = vF111({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js"(p1847) {
    'use strict';

    var v1075 = p1847 && p1847.__createBinding || (Object.create ? function (p1848, p1849, p1850, p1851 = p1850) {
      var v1076 = Object.getOwnPropertyDescriptor(p1849, p1850);
      if (!v1076 || ("get" in v1076 ? !p1849.__esModule : v1076.writable || v1076.configurable)) {
        v1076 = {
          enumerable: true,
          get: function () {
            return p1849[p1850];
          }
        };
      }
      Object.defineProperty(p1848, p1851, v1076);
    } : function (p1852, p1853, p1854, p1855 = p1854) {
      p1852[p1855] = p1853[p1854];
    });
    var v1077 = p1847 && p1847.__exportStar || function (p1856, p1857) {
      for (var v1078 in p1856) {
        if (v1078 !== "default" && !Object.prototype.hasOwnProperty.call(p1857, v1078)) {
          v1075(p1857, p1856, v1078);
        }
      }
    };
    Object.defineProperty(p1847, "__esModule", {
      value: true
    });
    v1077(vVF1119(), p1847);
    v1077(vVF1118(), p1847);
  }
});
var vVF113 = vF113(vVF1114());
var v1079 = /(%?)(%([sdjo]))/g;
function f402(p1858, p1859) {
  switch (p1859) {
    case "s":
      return p1858;
    case "d":
    case "i":
      return Number(p1858);
    case "j":
      return JSON.stringify(p1858);
    case "o":
      {
        if (typeof p1858 == "string") {
          return p1858;
        }
        let v1080 = JSON.stringify(p1858);
        if (v1080 === "{}" || v1080 === "[]" || /^\[object .+?\]$/.test(v1080)) {
          return p1858;
        } else {
          return v1080;
        }
      }
  }
}
function f403(p1860, ..._0x43343d) {
  if (_0x43343d.length === 0) {
    return p1860;
  }
  let v1081 = 0;
  let v1082 = p1860.replace(v1079, (p1861, p1862, p1863, p1864) => {
    let v1083 = _0x43343d[v1081];
    let vF402 = f402(v1083, p1864);
    if (p1862) {
      return p1861;
    } else {
      v1081++;
      return vF402;
    }
  });
  if (v1081 < _0x43343d.length) {
    v1082 += " " + _0x43343d.slice(v1081).join(" ");
  }
  v1082 = v1082.replace(/%{2,2}/g, "%");
  return v1082;
}
var v1084 = 2;
function f404(p1865) {
  if (!p1865.stack) {
    return;
  }
  let v1085 = p1865.stack.split("\n");
  v1085.splice(1, v1084);
  p1865.stack = v1085.join("\n");
}
var vC14 = class extends Error {
  constructor(p1866, ..._0x398459) {
    super(p1866);
    this.message = p1866;
    this.name = "Invariant Violation";
    this.message = f403(p1866, ..._0x398459);
    f404(this);
  }
};
var vF123 = (p1867, p1868, ..._0x4a2d2d) => {
  if (!p1867) {
    throw new vC14(p1868, ..._0x4a2d2d);
  }
};
vF123.as = (p1869, p1870, p1871, ..._0x5d5913) => {
  if (!p1870) {
    throw p1869.prototype.name != null ? new p1869(f403(p1871, _0x5d5913)) : p1869(f403(p1871, _0x5d5913));
  }
};
var vVF1132 = vF113(vVF1117());
var v1086 = window.localStorage.CSB_EMULATOR_DEBUG;
var v1087 = "[0m";
var v1088 = "[32;1m";
var v1089 = "[31m";
var v1090 = "[34m";
var v1091 = "[33;1m";
var v1092 = "[35;1m";
var v1093 = "[36;1m";
var v1094 = {
  preview: v1091,
  emulator: v1092,
  runtime: v1093,
  bridge: v1090,
  "runtime:worker": v1093
};
function f405(p1872) {
  return function (p1873, ..._0x174fd8) {
    let vF124 = () => p1873.includes("sender") ? v1088 + "sender" : p1873.includes("receiver") ? v1089 + "receiver" : "";
    let v1095 = p1873.replace(/\[.+\]:/, "");
    console.debug("" + v1094[p1872] + p1872 + ":" + vF124() + v1087 + ":" + v1095, ..._0x174fd8);
  };
}
var vF405 = f405("emulator");
var vC15 = class {
  emitter;
  senderPort = null;
  constructor() {
    this.emitter = new EventTarget();
    this.waitForHandshake();
  }
  waitForHandshake() {
    let v1096 = new vVF1132.DeferredPromise();
    let vF125 = p1874 => {
      let {
        data: _0x1eca6f
      } = p1874;
      vF405("[message-receiver]: incoming", p1874);
      if (_0x1eca6f.type === "internal/handshake") {
        vF123(p1874.ports.length > 0, "Failed to confirm a MessageReceiver handshake: received event has no ports");
        this.senderPort = p1874.ports[0];
        this.addMessageListener();
        vF405("[message-receiver]: handshake received!", this.senderPort);
        this.send("internal/handshake/done");
        vF405("[message-receiver]: finish handshake");
      }
    };
    window.addEventListener("message", vF125);
    v1096.then(() => {
      window.removeEventListener("message", vF125);
    });
    window.parent.postMessage({
      type: "internal/ready"
    }, "*");
    return v1096;
  }
  addMessageListener() {
    vF123(this.senderPort, "[MessageReceiver] Failed to add a message listener: sender port is not defined. Did you forget to await a handshake?");
    this.senderPort.onmessage = p1875 => {
      let v1097 = p1875.data;
      if (v1097.type != null) {
        this.emitter.dispatchEvent(new MessageEvent(v1097.type, {
          data: v1097.payload
        }));
      }
    };
  }
  on(p1876, p1877, p1878) {
    this.emitter.addEventListener(p1876, async p1879 => {
      if (!(p1879 instanceof MessageEvent)) {
        return;
      }
      let {
        operationId: _0x28432e,
        payload: _0x13a121
      } = p1879.data;
      try {
        let v1098 = await p1877(_0x13a121);
        this.send("internal/operation/done", {
          operationId: _0x28432e,
          listenerPayload: v1098
        });
      } catch (_0x243bea) {
        if (_0x243bea instanceof Error) {
          this.send("internal/operation/failed", {
            operationId: _0x28432e,
            error: _0x243bea
          });
        }
      }
    }, p1878);
  }
  send(p1880, ..._0x57f390) {
    vF123(this.senderPort, "[MessageReceiver] Failed to send a message \"%j\": sender port is not defined. Did you forget to await a handshake?", p1880);
    let v1099 = _0x57f390[0] || {};
    vF405("[message-receiver]: send \"%s\"", p1880, v1099);
    this.senderPort.postMessage({
      type: p1880,
      payload: v1099
    });
  }
};
var vVF1133 = vF113(vVF1117());
var vVF1134 = vF113(vVF1114());
var vVF1135 = vF113(vVF11110());
var vVF1136 = vF113(vVF1117());
var vF4052 = f405("emulator");
var vVF73 = vF7(vVF325());
var v1100 = 4294967295;
function f406(p1881, p1882, p1883) {
  var v1101 = p1883 / 4294967296;
  var vP1883 = p1883;
  p1881.setUint32(p1882, v1101);
  p1881.setUint32(p1882 + 4, vP1883);
}
function f407(p1884, p1885, p1886) {
  var v1102 = Math.floor(p1886 / 4294967296);
  var vP1886 = p1886;
  p1884.setUint32(p1885, v1102);
  p1884.setUint32(p1885 + 4, vP1886);
}
function f408(p1887, p1888) {
  var v1103 = p1887.getInt32(p1888);
  var v1104 = p1887.getUint32(p1888 + 4);
  return v1103 * 4294967296 + v1104;
}
function f409(p1889, p1890) {
  var v1105 = p1889.getUint32(p1890);
  var v1106 = p1889.getUint32(p1890 + 4);
  return v1105 * 4294967296 + v1106;
}
var v1107 = (typeof process === "undefined" || (process == null ? undefined : process.env)?.TEXT_ENCODING !== "never") && typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined";
function f410(p1891) {
  for (var v1108 = p1891.length, v1109 = 0, v1110 = 0; v1110 < v1108;) {
    var v1111 = p1891.charCodeAt(v1110++);
    if ((v1111 & 4294967168) === 0) {
      v1109++;
      continue;
    } else if ((v1111 & 4294965248) === 0) {
      v1109 += 2;
    } else {
      if (v1111 >= 55296 && v1111 <= 56319 && v1110 < v1108) {
        var v1112 = p1891.charCodeAt(v1110);
        if ((v1112 & 64512) === 56320) {
          ++v1110;
          v1111 = ((v1111 & 1023) << 10) + (v1112 & 1023) + 65536;
        }
      }
      if ((v1111 & 4294901760) === 0) {
        v1109 += 3;
      } else {
        v1109 += 4;
      }
    }
  }
  return v1109;
}
function f411(p1892, p1893, p1894) {
  for (var v1113 = p1892.length, vP1894 = p1894, v1114 = 0; v1114 < v1113;) {
    var v1115 = p1892.charCodeAt(v1114++);
    if ((v1115 & 4294967168) === 0) {
      p1893[vP1894++] = v1115;
      continue;
    } else if ((v1115 & 4294965248) === 0) {
      p1893[vP1894++] = v1115 >> 6 & 31 | 192;
    } else {
      if (v1115 >= 55296 && v1115 <= 56319 && v1114 < v1113) {
        var v1116 = p1892.charCodeAt(v1114);
        if ((v1116 & 64512) === 56320) {
          ++v1114;
          v1115 = ((v1115 & 1023) << 10) + (v1116 & 1023) + 65536;
        }
      }
      if ((v1115 & 4294901760) === 0) {
        p1893[vP1894++] = v1115 >> 12 & 15 | 224;
        p1893[vP1894++] = v1115 >> 6 & 63 | 128;
      } else {
        p1893[vP1894++] = v1115 >> 18 & 7 | 240;
        p1893[vP1894++] = v1115 >> 12 & 63 | 128;
        p1893[vP1894++] = v1115 >> 6 & 63 | 128;
      }
    }
    p1893[vP1894++] = v1115 & 63 | 128;
  }
}
var v1117 = v1107 ? new TextEncoder() : undefined;
var v1118 = v1107 ? typeof process !== "undefined" && (process == null ? undefined : process.env)?.TEXT_ENCODING !== "force" ? 200 : 0 : v1100;
function f412(p1895, p1896, p1897) {
  p1896.set(v1117.encode(p1895), p1897);
}
function f413(p1898, p1899, p1900) {
  v1117.encodeInto(p1898, p1899.subarray(p1900));
}
var v1119 = v1117?.encodeInto ? f413 : f412;
var v1120 = 4096;
function f414(p1901, p1902, p1903) {
  for (var vP1902 = p1902, v1121 = vP1902 + p1903, v1122 = [], v1123 = ""; vP1902 < v1121;) {
    var v1124 = p1901[vP1902++];
    if ((v1124 & 128) === 0) {
      v1122.push(v1124);
    } else if ((v1124 & 224) === 192) {
      var v1125 = p1901[vP1902++] & 63;
      v1122.push((v1124 & 31) << 6 | v1125);
    } else if ((v1124 & 240) === 224) {
      var v1125 = p1901[vP1902++] & 63;
      var v1126 = p1901[vP1902++] & 63;
      v1122.push((v1124 & 31) << 12 | v1125 << 6 | v1126);
    } else if ((v1124 & 248) === 240) {
      var v1125 = p1901[vP1902++] & 63;
      var v1126 = p1901[vP1902++] & 63;
      var v1127 = p1901[vP1902++] & 63;
      var v1128 = (v1124 & 7) << 18 | v1125 << 12 | v1126 << 6 | v1127;
      if (v1128 > 65535) {
        v1128 -= 65536;
        v1122.push(v1128 >>> 10 & 1023 | 55296);
        v1128 = v1128 & 1023 | 56320;
      }
      v1122.push(v1128);
    } else {
      v1122.push(v1124);
    }
    if (v1122.length >= v1120) {
      v1123 += String.fromCharCode.apply(String, v1122);
      v1122.length = 0;
    }
  }
  if (v1122.length > 0) {
    v1123 += String.fromCharCode.apply(String, v1122);
  }
  return v1123;
}
var v1129 = v1107 ? new TextDecoder() : null;
var v1130 = v1107 ? typeof process !== "undefined" && (process == null ? undefined : process.env)?.TEXT_DECODER !== "force" ? 200 : 0 : v1100;
function f415(p1904, p1905, p1906) {
  var v1131 = p1904.subarray(p1905, p1905 + p1906);
  return v1129.decode(v1131);
}
var vF126 = function () {
  function f416(p1907, p1908) {
    this.type = p1907;
    this.data = p1908;
  }
  return f416;
}();
var vF127 = function () {
  function f417(p1909, p1910) {
    f417 = Object.setPrototypeOf || {
      "__proto__": []
    } instanceof Array && function (p1911, p1912) {
      p1911.__proto__ = p1912;
    } || function (p1913, p1914) {
      for (var v1132 in p1914) {
        if (Object.prototype.hasOwnProperty.call(p1914, v1132)) {
          p1913[v1132] = p1914[v1132];
        }
      }
    };
    return f417(p1909, p1910);
  }
  return function (p1915, p1916) {
    if (typeof p1916 != "function" && p1916 !== null) {
      throw new TypeError("Class extends value " + String(p1916) + " is not a constructor or null");
    }
    f417(p1915, p1916);
    function f418() {
      this.constructor = p1915;
    }
    p1915.prototype = p1916 === null ? Object.create(p1916) : (f418.prototype = p1916.prototype, new f418());
  };
}();
var vF128 = function (p1917) {
  vF127(f419, p1917);
  function f419(p1918) {
    var v1133 = p1917.call(this, p1918) || this;
    var v1134 = Object.create(f419.prototype);
    Object.setPrototypeOf(v1133, v1134);
    Object.defineProperty(v1133, "name", {
      configurable: true,
      enumerable: false,
      value: f419.name
    });
    return v1133;
  }
  return f419;
}(Error);
var v1135 = -1;
var v1136 = 4294967295;
var v1137 = 17179869183;
function f420(p1919) {
  var v1138 = p1919.sec;
  var v1139 = p1919.nsec;
  if (v1138 >= 0 && v1139 >= 0 && v1138 <= v1137) {
    if (v1139 === 0 && v1138 <= v1136) {
      var v1140 = new Uint8Array(4);
      var v1141 = new DataView(v1140.buffer);
      v1141.setUint32(0, v1138);
      return v1140;
    } else {
      var v1142 = v1138 / 4294967296;
      var v1143 = v1138 & 4294967295;
      var v1140 = new Uint8Array(8);
      var v1141 = new DataView(v1140.buffer);
      v1141.setUint32(0, v1139 << 2 | v1142 & 3);
      v1141.setUint32(4, v1143);
      return v1140;
    }
  } else {
    var v1140 = new Uint8Array(12);
    var v1141 = new DataView(v1140.buffer);
    v1141.setUint32(0, v1139);
    f407(v1141, 4, v1138);
    return v1140;
  }
}
function f421(p1920) {
  var v1144 = p1920.getTime();
  var v1145 = Math.floor(v1144 / 1000);
  var v1146 = (v1144 - v1145 * 1000) * 1000000;
  var v1147 = Math.floor(v1146 / 1000000000);
  return {
    sec: v1145 + v1147,
    nsec: v1146 - v1147 * 1000000000
  };
}
function f422(p1921) {
  if (p1921 instanceof Date) {
    var vF421 = f421(p1921);
    return f420(vF421);
  } else {
    return null;
  }
}
function f423(p1922) {
  var v1148 = new DataView(p1922.buffer, p1922.byteOffset, p1922.byteLength);
  switch (p1922.byteLength) {
    case 4:
      {
        var v1149 = v1148.getUint32(0);
        var v1150 = 0;
        return {
          sec: v1149,
          nsec: v1150
        };
      }
    case 8:
      {
        var v1151 = v1148.getUint32(0);
        var v1152 = v1148.getUint32(4);
        var v1149 = (v1151 & 3) * 4294967296 + v1152;
        var v1150 = v1151 >>> 2;
        return {
          sec: v1149,
          nsec: v1150
        };
      }
    case 12:
      {
        var v1149 = f408(v1148, 4);
        var v1150 = v1148.getUint32(0);
        return {
          sec: v1149,
          nsec: v1150
        };
      }
    default:
      throw new vF128(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${p1922.length}`);
  }
}
function f424(p1923) {
  var vF423 = f423(p1923);
  return new Date(vF423.sec * 1000 + vF423.nsec / 1000000);
}
var v1153 = {
  type: v1135,
  encode: f422,
  decode: f424
};
var vF129 = function () {
  function f425() {
    this.builtInEncoders = [];
    this.builtInDecoders = [];
    this.encoders = [];
    this.decoders = [];
    this.register(v1153);
  }
  f425.prototype.register = function (p1924) {
    var v1154 = p1924.type;
    var v1155 = p1924.encode;
    var v1156 = p1924.decode;
    if (v1154 >= 0) {
      this.encoders[v1154] = v1155;
      this.decoders[v1154] = v1156;
    } else {
      var v1157 = 1 + v1154;
      this.builtInEncoders[v1157] = v1155;
      this.builtInDecoders[v1157] = v1156;
    }
  };
  f425.prototype.tryToEncode = function (p1925, p1926) {
    for (var v1158 = 0; v1158 < this.builtInEncoders.length; v1158++) {
      var v1159 = this.builtInEncoders[v1158];
      if (v1159 != null) {
        var vV1159 = v1159(p1925, p1926);
        if (vV1159 != null) {
          var v1160 = -1 - v1158;
          return new vF126(v1160, vV1159);
        }
      }
    }
    for (var v1158 = 0; v1158 < this.encoders.length; v1158++) {
      var v1159 = this.encoders[v1158];
      if (v1159 != null) {
        var vV1159 = v1159(p1925, p1926);
        if (vV1159 != null) {
          var v1160 = v1158;
          return new vF126(v1160, vV1159);
        }
      }
    }
    if (p1925 instanceof vF126) {
      return p1925;
    } else {
      return null;
    }
  };
  f425.prototype.decode = function (p1927, p1928, p1929) {
    var v1161 = p1928 < 0 ? this.builtInDecoders[-1 - p1928] : this.decoders[p1928];
    if (v1161) {
      return v1161(p1927, p1928, p1929);
    } else {
      return new vF126(p1928, p1927);
    }
  };
  f425.defaultCodec = new f425();
  return f425;
}();
function f426(p1930) {
  if (p1930 instanceof Uint8Array) {
    return p1930;
  } else if (ArrayBuffer.isView(p1930)) {
    return new Uint8Array(p1930.buffer, p1930.byteOffset, p1930.byteLength);
  } else if (p1930 instanceof ArrayBuffer) {
    return new Uint8Array(p1930);
  } else {
    return Uint8Array.from(p1930);
  }
}
function f427(p1931) {
  if (p1931 instanceof ArrayBuffer) {
    return new DataView(p1931);
  }
  var vF426 = f426(p1931);
  return new DataView(vF426.buffer, vF426.byteOffset, vF426.byteLength);
}
var v1162 = 100;
var v1163 = 2048;
var vF130 = function () {
  function f428(p1932 = vF129.defaultCodec, p1933 = undefined, p1934 = v1162, p1935 = v1163, p1936 = false, p1937 = false, p1938 = false, p1939 = false) {
    this.extensionCodec = p1932;
    this.context = p1933;
    this.maxDepth = p1934;
    this.initialBufferSize = p1935;
    this.sortKeys = p1936;
    this.forceFloat32 = p1937;
    this.ignoreUndefined = p1938;
    this.forceIntegerToFloat = p1939;
    this.pos = 0;
    this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
    this.bytes = new Uint8Array(this.view.buffer);
  }
  f428.prototype.reinitializeState = function () {
    this.pos = 0;
  };
  f428.prototype.encodeSharedRef = function (p1940) {
    this.reinitializeState();
    this.doEncode(p1940, 1);
    return this.bytes.subarray(0, this.pos);
  };
  f428.prototype.encode = function (p1941) {
    this.reinitializeState();
    this.doEncode(p1941, 1);
    return this.bytes.slice(0, this.pos);
  };
  f428.prototype.doEncode = function (p1942, p1943) {
    if (p1943 > this.maxDepth) {
      throw new Error(`Too deep objects in depth ${p1943}`);
    }
    if (p1942 == null) {
      this.encodeNil();
    } else if (typeof p1942 == "boolean") {
      this.encodeBoolean(p1942);
    } else if (typeof p1942 == "number") {
      this.encodeNumber(p1942);
    } else if (typeof p1942 == "string") {
      this.encodeString(p1942);
    } else {
      this.encodeObject(p1942, p1943);
    }
  };
  f428.prototype.ensureBufferSizeToWrite = function (p1944) {
    var v1164 = this.pos + p1944;
    if (this.view.byteLength < v1164) {
      this.resizeBuffer(v1164 * 2);
    }
  };
  f428.prototype.resizeBuffer = function (p1945) {
    var v1165 = new ArrayBuffer(p1945);
    var v1166 = new Uint8Array(v1165);
    var v1167 = new DataView(v1165);
    v1166.set(this.bytes);
    this.view = v1167;
    this.bytes = v1166;
  };
  f428.prototype.encodeNil = function () {
    this.writeU8(192);
  };
  f428.prototype.encodeBoolean = function (p1946) {
    if (p1946 === false) {
      this.writeU8(194);
    } else {
      this.writeU8(195);
    }
  };
  f428.prototype.encodeNumber = function (p1947) {
    if (Number.isSafeInteger(p1947) && !this.forceIntegerToFloat) {
      if (p1947 >= 0) {
        if (p1947 < 128) {
          this.writeU8(p1947);
        } else if (p1947 < 256) {
          this.writeU8(204);
          this.writeU8(p1947);
        } else if (p1947 < 65536) {
          this.writeU8(205);
          this.writeU16(p1947);
        } else if (p1947 < 4294967296) {
          this.writeU8(206);
          this.writeU32(p1947);
        } else {
          this.writeU8(207);
          this.writeU64(p1947);
        }
      } else if (p1947 >= -32) {
        this.writeU8(p1947 + 32 | 224);
      } else if (p1947 >= -128) {
        this.writeU8(208);
        this.writeI8(p1947);
      } else if (p1947 >= -32768) {
        this.writeU8(209);
        this.writeI16(p1947);
      } else if (p1947 >= -2147483648) {
        this.writeU8(210);
        this.writeI32(p1947);
      } else {
        this.writeU8(211);
        this.writeI64(p1947);
      }
    } else if (this.forceFloat32) {
      this.writeU8(202);
      this.writeF32(p1947);
    } else {
      this.writeU8(203);
      this.writeF64(p1947);
    }
  };
  f428.prototype.writeStringHeader = function (p1948) {
    if (p1948 < 32) {
      this.writeU8(160 + p1948);
    } else if (p1948 < 256) {
      this.writeU8(217);
      this.writeU8(p1948);
    } else if (p1948 < 65536) {
      this.writeU8(218);
      this.writeU16(p1948);
    } else if (p1948 < 4294967296) {
      this.writeU8(219);
      this.writeU32(p1948);
    } else {
      throw new Error(`Too long string: ${p1948} bytes in UTF-8`);
    }
  };
  f428.prototype.encodeString = function (p1949) {
    var v1168 = 5;
    var v1169 = p1949.length;
    if (v1169 > v1118) {
      var vF410 = f410(p1949);
      this.ensureBufferSizeToWrite(v1168 + vF410);
      this.writeStringHeader(vF410);
      v1119(p1949, this.bytes, this.pos);
      this.pos += vF410;
    } else {
      var vF410 = f410(p1949);
      this.ensureBufferSizeToWrite(v1168 + vF410);
      this.writeStringHeader(vF410);
      f411(p1949, this.bytes, this.pos);
      this.pos += vF410;
    }
  };
  f428.prototype.encodeObject = function (p1950, p1951) {
    var v1170 = this.extensionCodec.tryToEncode(p1950, this.context);
    if (v1170 != null) {
      this.encodeExtension(v1170);
    } else if (Array.isArray(p1950)) {
      this.encodeArray(p1950, p1951);
    } else if (ArrayBuffer.isView(p1950)) {
      this.encodeBinary(p1950);
    } else if (typeof p1950 == "object") {
      this.encodeMap(p1950, p1951);
    } else {
      throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(p1950)}`);
    }
  };
  f428.prototype.encodeBinary = function (p1952) {
    var v1171 = p1952.byteLength;
    if (v1171 < 256) {
      this.writeU8(196);
      this.writeU8(v1171);
    } else if (v1171 < 65536) {
      this.writeU8(197);
      this.writeU16(v1171);
    } else if (v1171 < 4294967296) {
      this.writeU8(198);
      this.writeU32(v1171);
    } else {
      throw new Error(`Too large binary: ${v1171}`);
    }
    var vF4262 = f426(p1952);
    this.writeU8a(vF4262);
  };
  f428.prototype.encodeArray = function (p1953, p1954) {
    var v1172 = p1953.length;
    if (v1172 < 16) {
      this.writeU8(144 + v1172);
    } else if (v1172 < 65536) {
      this.writeU8(220);
      this.writeU16(v1172);
    } else if (v1172 < 4294967296) {
      this.writeU8(221);
      this.writeU32(v1172);
    } else {
      throw new Error(`Too large array: ${v1172}`);
    }
    for (var v1173 = 0, vP1953 = p1953; v1173 < vP1953.length; v1173++) {
      var v1174 = vP1953[v1173];
      this.doEncode(v1174, p1954 + 1);
    }
  };
  f428.prototype.countWithoutUndefined = function (p1955, p1956) {
    var v1175 = 0;
    for (var v1176 = 0, vP1956 = p1956; v1176 < vP1956.length; v1176++) {
      var v1177 = vP1956[v1176];
      if (p1955[v1177] !== undefined) {
        v1175++;
      }
    }
    return v1175;
  };
  f428.prototype.encodeMap = function (p1957, p1958) {
    var v1178 = Object.keys(p1957);
    if (this.sortKeys) {
      v1178.sort();
    }
    var v1179 = this.ignoreUndefined ? this.countWithoutUndefined(p1957, v1178) : v1178.length;
    if (v1179 < 16) {
      this.writeU8(128 + v1179);
    } else if (v1179 < 65536) {
      this.writeU8(222);
      this.writeU16(v1179);
    } else if (v1179 < 4294967296) {
      this.writeU8(223);
      this.writeU32(v1179);
    } else {
      throw new Error(`Too large map object: ${v1179}`);
    }
    for (var v1180 = 0, vV1178 = v1178; v1180 < vV1178.length; v1180++) {
      var v1181 = vV1178[v1180];
      var v1182 = p1957[v1181];
      if (!this.ignoreUndefined || v1182 !== undefined) {
        this.encodeString(v1181);
        this.doEncode(v1182, p1958 + 1);
      }
    }
  };
  f428.prototype.encodeExtension = function (p1959) {
    var v1183 = p1959.data.length;
    if (v1183 === 1) {
      this.writeU8(212);
    } else if (v1183 === 2) {
      this.writeU8(213);
    } else if (v1183 === 4) {
      this.writeU8(214);
    } else if (v1183 === 8) {
      this.writeU8(215);
    } else if (v1183 === 16) {
      this.writeU8(216);
    } else if (v1183 < 256) {
      this.writeU8(199);
      this.writeU8(v1183);
    } else if (v1183 < 65536) {
      this.writeU8(200);
      this.writeU16(v1183);
    } else if (v1183 < 4294967296) {
      this.writeU8(201);
      this.writeU32(v1183);
    } else {
      throw new Error(`Too large extension object: ${v1183}`);
    }
    this.writeI8(p1959.type);
    this.writeU8a(p1959.data);
  };
  f428.prototype.writeU8 = function (p1960) {
    this.ensureBufferSizeToWrite(1);
    this.view.setUint8(this.pos, p1960);
    this.pos++;
  };
  f428.prototype.writeU8a = function (p1961) {
    var v1184 = p1961.length;
    this.ensureBufferSizeToWrite(v1184);
    this.bytes.set(p1961, this.pos);
    this.pos += v1184;
  };
  f428.prototype.writeI8 = function (p1962) {
    this.ensureBufferSizeToWrite(1);
    this.view.setInt8(this.pos, p1962);
    this.pos++;
  };
  f428.prototype.writeU16 = function (p1963) {
    this.ensureBufferSizeToWrite(2);
    this.view.setUint16(this.pos, p1963);
    this.pos += 2;
  };
  f428.prototype.writeI16 = function (p1964) {
    this.ensureBufferSizeToWrite(2);
    this.view.setInt16(this.pos, p1964);
    this.pos += 2;
  };
  f428.prototype.writeU32 = function (p1965) {
    this.ensureBufferSizeToWrite(4);
    this.view.setUint32(this.pos, p1965);
    this.pos += 4;
  };
  f428.prototype.writeI32 = function (p1966) {
    this.ensureBufferSizeToWrite(4);
    this.view.setInt32(this.pos, p1966);
    this.pos += 4;
  };
  f428.prototype.writeF32 = function (p1967) {
    this.ensureBufferSizeToWrite(4);
    this.view.setFloat32(this.pos, p1967);
    this.pos += 4;
  };
  f428.prototype.writeF64 = function (p1968) {
    this.ensureBufferSizeToWrite(8);
    this.view.setFloat64(this.pos, p1968);
    this.pos += 8;
  };
  f428.prototype.writeU64 = function (p1969) {
    this.ensureBufferSizeToWrite(8);
    f406(this.view, this.pos, p1969);
    this.pos += 8;
  };
  f428.prototype.writeI64 = function (p1970) {
    this.ensureBufferSizeToWrite(8);
    f407(this.view, this.pos, p1970);
    this.pos += 8;
  };
  return f428;
}();
var v1185 = {};
function f429(p1971, p1972 = v1185) {
  var v1186 = new vF130(p1972.extensionCodec, p1972.context, p1972.maxDepth, p1972.initialBufferSize, p1972.sortKeys, p1972.forceFloat32, p1972.ignoreUndefined, p1972.forceIntegerToFloat);
  return v1186.encodeSharedRef(p1971);
}
function f430(p1973) {
  return `${p1973 < 0 ? "-" : ""}0x${Math.abs(p1973).toString(16).padStart(2, "0")}`;
}
var v1187 = 16;
var v1188 = 16;
var vF131 = function () {
  function f431(p1974 = v1187, p1975 = v1188) {
    this.maxKeyLength = p1974;
    this.maxLengthPerKey = p1975;
    this.hit = 0;
    this.miss = 0;
    this.caches = [];
    for (var v1189 = 0; v1189 < this.maxKeyLength; v1189++) {
      this.caches.push([]);
    }
  }
  f431.prototype.canBeCached = function (p1976) {
    return p1976 > 0 && p1976 <= this.maxKeyLength;
  };
  f431.prototype.find = function (p1977, p1978, p1979) {
    var v1190 = this.caches[p1979 - 1];
    _0x5d14ec: for (var v1191 = 0, vV1190 = v1190; v1191 < vV1190.length; v1191++) {
      var v1192 = vV1190[v1191];
      var v1193 = v1192.bytes;
      for (var v1194 = 0; v1194 < p1979; v1194++) {
        if (v1193[v1194] !== p1977[p1978 + v1194]) {
          continue _0x5d14ec;
        }
      }
      return v1192.str;
    }
    return null;
  };
  f431.prototype.store = function (p1980, p1981) {
    var v1195 = this.caches[p1980.length - 1];
    var v1196 = {
      bytes: p1980,
      str: p1981
    };
    if (v1195.length >= this.maxLengthPerKey) {
      v1195[Math.random() * v1195.length | 0] = v1196;
    } else {
      v1195.push(v1196);
    }
  };
  f431.prototype.decode = function (p1982, p1983, p1984) {
    var v1197 = this.find(p1982, p1983, p1984);
    if (v1197 != null) {
      this.hit++;
      return v1197;
    }
    this.miss++;
    var vF414 = f414(p1982, p1983, p1984);
    var v1198 = Uint8Array.prototype.slice.call(p1982, p1983, p1983 + p1984);
    this.store(v1198, vF414);
    return vF414;
  };
  return f431;
}();
function f432(p1985, p1986, p1987, p1988) {
  function f433(p1989) {
    if (p1989 instanceof p1987) {
      return p1989;
    } else {
      return new p1987(function (p1990) {
        p1990(p1989);
      });
    }
  }
  return new (p1987 ||= Promise)(function (p1991, p1992) {
    function f434(p1993) {
      try {
        f436(p1988.next(p1993));
      } catch (_0x282e19) {
        p1992(_0x282e19);
      }
    }
    function f435(p1994) {
      try {
        f436(p1988.throw(p1994));
      } catch (_0x21913e) {
        p1992(_0x21913e);
      }
    }
    function f436(p1995) {
      if (p1995.done) {
        p1991(p1995.value);
      } else {
        f433(p1995.value).then(f434, f435);
      }
    }
    f436((p1988 = p1988.apply(p1985, p1986 || [])).next());
  });
}
function f437(p1996, p1997) {
  var v1199 = {
    label: 0,
    sent: function () {
      if (v1202[0] & 1) {
        throw v1202[1];
      }
      return v1202[1];
    },
    trys: [],
    ops: []
  };
  var v1200;
  var v1201;
  var v1202;
  var v1203;
  v1203 = {
    next: f438(0),
    throw: f438(1),
    return: f438(2)
  };
  if (typeof Symbol == "function") {
    v1203[Symbol.iterator] = function () {
      return this;
    };
  }
  return v1203;
  function f438(p1998) {
    return function (p1999) {
      return f439([p1998, p1999]);
    };
  }
  function f439(p2000) {
    if (v1200) {
      throw new TypeError("Generator is already executing.");
    }
    while (v1199) {
      try {
        v1200 = 1;
        if (v1201 && (v1202 = p2000[0] & 2 ? v1201.return : p2000[0] ? v1201.throw || ((v1202 = v1201.return) && v1202.call(v1201), 0) : v1201.next) && !(v1202 = v1202.call(v1201, p2000[1])).done) {
          return v1202;
        }
        v1201 = 0;
        if (v1202) {
          p2000 = [p2000[0] & 2, v1202.value];
        }
        switch (p2000[0]) {
          case 0:
          case 1:
            v1202 = p2000;
            break;
          case 4:
            v1199.label++;
            return {
              value: p2000[1],
              done: false
            };
          case 5:
            v1199.label++;
            v1201 = p2000[1];
            p2000 = [0];
            continue;
          case 7:
            p2000 = v1199.ops.pop();
            v1199.trys.pop();
            continue;
          default:
            v1202 = v1199.trys;
            if (!(v1202 = v1202.length > 0 && v1202[v1202.length - 1]) && (p2000[0] === 6 || p2000[0] === 2)) {
              v1199 = 0;
              continue;
            }
            if (p2000[0] === 3 && (!v1202 || p2000[1] > v1202[0] && p2000[1] < v1202[3])) {
              v1199.label = p2000[1];
              break;
            }
            if (p2000[0] === 6 && v1199.label < v1202[1]) {
              v1199.label = v1202[1];
              v1202 = p2000;
              break;
            }
            if (v1202 && v1199.label < v1202[2]) {
              v1199.label = v1202[2];
              v1199.ops.push(p2000);
              break;
            }
            if (v1202[2]) {
              v1199.ops.pop();
            }
            v1199.trys.pop();
            continue;
        }
        p2000 = p1997.call(p1996, v1199);
      } catch (_0x333e3e) {
        p2000 = [6, _0x333e3e];
        v1201 = 0;
      } finally {
        v1200 = v1202 = 0;
      }
    }
    if (p2000[0] & 5) {
      throw p2000[1];
    }
    return {
      value: p2000[0] ? p2000[1] : undefined,
      done: true
    };
  }
}
function f440(p2001) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var v1204 = p2001[Symbol.asyncIterator];
  var v1205;
  if (v1204) {
    return v1204.call(p2001);
  } else {
    p2001 = typeof __values == "function" ? __values(p2001) : p2001[Symbol.iterator]();
    v1205 = {};
    f441("next");
    f441("throw");
    f441("return");
    v1205[Symbol.asyncIterator] = function () {
      return this;
    };
    return v1205;
  }
  function f441(p2002) {
    v1205[p2002] = p2001[p2002] && function (p2003) {
      return new Promise(function (p2004, p2005) {
        p2003 = p2001[p2002](p2003);
        f442(p2004, p2005, p2003.done, p2003.value);
      });
    };
  }
  function f442(p2006, p2007, p2008, p2009) {
    Promise.resolve(p2009).then(function (p2010) {
      p2006({
        value: p2010,
        done: p2008
      });
    }, p2007);
  }
}
function f443(p2011) {
  if (this instanceof f443) {
    this.v = p2011;
    return this;
  } else {
    return new f443(p2011);
  }
}
function f444(p2012, p2013, p2014) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var v1206 = p2014.apply(p2012, p2013 || []);
  var v1207;
  var v1208 = [];
  v1207 = {};
  f445("next");
  f445("throw");
  f445("return");
  v1207[Symbol.asyncIterator] = function () {
    return this;
  };
  return v1207;
  function f445(p2015) {
    if (v1206[p2015]) {
      v1207[p2015] = function (p2016) {
        return new Promise(function (p2017, p2018) {
          if (!(v1208.push([p2015, p2016, p2017, p2018]) > 1)) {
            f446(p2015, p2016);
          }
        });
      };
    }
  }
  function f446(p2019, p2020) {
    try {
      f447(v1206[p2019](p2020));
    } catch (_0x4ba897) {
      f450(v1208[0][3], _0x4ba897);
    }
  }
  function f447(p2021) {
    if (p2021.value instanceof f443) {
      Promise.resolve(p2021.value.v).then(f448, f449);
    } else {
      f450(v1208[0][2], p2021);
    }
  }
  function f448(p2022) {
    f446("next", p2022);
  }
  function f449(p2023) {
    f446("throw", p2023);
  }
  function f450(p2024, p2025) {
    p2024(p2025);
    v1208.shift();
    if (v1208.length) {
      f446(v1208[0][0], v1208[0][1]);
    }
  }
}
function f451(p2026) {
  var v1209 = typeof p2026;
  return v1209 === "string" || v1209 === "number";
}
var v1210 = -1;
var v1211 = new DataView(new ArrayBuffer(0));
var v1212 = new Uint8Array(v1211.buffer);
var vF132 = function () {
  try {
    v1211.getInt8(0);
  } catch (_0x53b2fe) {
    return _0x53b2fe.constructor;
  }
  throw new Error("never reached");
}();
var v1213 = new vF132("Insufficient data");
var v1214 = new vF131();
var vF133 = function () {
  function f452(p2027 = vF129.defaultCodec, p2028 = undefined, p2029 = v1100, p2030 = v1100, p2031 = v1100, p2032 = v1100, p2033 = v1100, p2034 = v1214) {
    this.extensionCodec = p2027;
    this.context = p2028;
    this.maxStrLength = p2029;
    this.maxBinLength = p2030;
    this.maxArrayLength = p2031;
    this.maxMapLength = p2032;
    this.maxExtLength = p2033;
    this.keyDecoder = p2034;
    this.totalPos = 0;
    this.pos = 0;
    this.view = v1211;
    this.bytes = v1212;
    this.headByte = v1210;
    this.stack = [];
  }
  f452.prototype.reinitializeState = function () {
    this.totalPos = 0;
    this.headByte = v1210;
    this.stack.length = 0;
  };
  f452.prototype.setBuffer = function (p2035) {
    this.bytes = f426(p2035);
    this.view = f427(this.bytes);
    this.pos = 0;
  };
  f452.prototype.appendBuffer = function (p2036) {
    if (this.headByte === v1210 && !this.hasRemaining(1)) {
      this.setBuffer(p2036);
    } else {
      var v1215 = this.bytes.subarray(this.pos);
      var vF4263 = f426(p2036);
      var v1216 = new Uint8Array(v1215.length + vF4263.length);
      v1216.set(v1215);
      v1216.set(vF4263, v1215.length);
      this.setBuffer(v1216);
    }
  };
  f452.prototype.hasRemaining = function (p2037) {
    return this.view.byteLength - this.pos >= p2037;
  };
  f452.prototype.createExtraByteError = function (p2038) {
    var vThis7 = this;
    var v1217 = vThis7.view;
    var v1218 = vThis7.pos;
    return new RangeError(`Extra ${v1217.byteLength - v1218} of ${v1217.byteLength} byte(s) found at buffer[${p2038}]`);
  };
  f452.prototype.decode = function (p2039) {
    this.reinitializeState();
    this.setBuffer(p2039);
    var v1219 = this.doDecodeSync();
    if (this.hasRemaining(1)) {
      throw this.createExtraByteError(this.pos);
    }
    return v1219;
  };
  f452.prototype.decodeMulti = function (p2040) {
    return f437(this, function (p2041) {
      switch (p2041.label) {
        case 0:
          this.reinitializeState();
          this.setBuffer(p2040);
          p2041.label = 1;
        case 1:
          if (this.hasRemaining(1)) {
            return [4, this.doDecodeSync()];
          } else {
            return [3, 3];
          }
        case 2:
          p2041.sent();
          return [3, 1];
        case 3:
          return [2];
      }
    });
  };
  f452.prototype.decodeAsync = function (p2042) {
    var v1220;
    var v1221;
    var v1222;
    var v1223;
    return f432(this, undefined, undefined, function () {
      var v1224;
      var v1225;
      var v1226;
      var v1227;
      var v1228;
      var v1229;
      var v1230;
      var v1231;
      return f437(this, function (p2043) {
        switch (p2043.label) {
          case 0:
            v1224 = false;
            p2043.label = 1;
          case 1:
            p2043.trys.push([1, 6, 7, 12]);
            v1220 = f440(p2042);
            p2043.label = 2;
          case 2:
            return [4, v1220.next()];
          case 3:
            v1221 = p2043.sent();
            if (v1221.done) {
              return [3, 5];
            }
            v1226 = v1221.value;
            if (v1224) {
              throw this.createExtraByteError(this.totalPos);
            }
            this.appendBuffer(v1226);
            try {
              v1225 = this.doDecodeSync();
              v1224 = true;
            } catch (_0x176b80) {
              if (!(_0x176b80 instanceof vF132)) {
                throw _0x176b80;
              }
            }
            this.totalPos += this.pos;
            p2043.label = 4;
          case 4:
            return [3, 2];
          case 5:
            return [3, 12];
          case 6:
            v1227 = p2043.sent();
            v1222 = {
              error: v1227
            };
            return [3, 12];
          case 7:
            p2043.trys.push([7,, 10, 11]);
            if (v1221 && !v1221.done && (v1223 = v1220.return)) {
              return [4, v1223.call(v1220)];
            } else {
              return [3, 9];
            }
          case 8:
            p2043.sent();
            p2043.label = 9;
          case 9:
            return [3, 11];
          case 10:
            if (v1222) {
              throw v1222.error;
            }
            return [7];
          case 11:
            return [7];
          case 12:
            if (v1224) {
              if (this.hasRemaining(1)) {
                throw this.createExtraByteError(this.totalPos);
              }
              return [2, v1225];
            }
            v1228 = this;
            v1229 = v1228.headByte;
            v1230 = v1228.pos;
            v1231 = v1228.totalPos;
            throw new RangeError(`Insufficient data in parsing ${f430(v1229)} at ${v1231} (${v1230} in the current buffer)`);
        }
      });
    });
  };
  f452.prototype.decodeArrayStream = function (p2044) {
    return this.decodeMultiAsync(p2044, true);
  };
  f452.prototype.decodeStream = function (p2045) {
    return this.decodeMultiAsync(p2045, false);
  };
  f452.prototype.decodeMultiAsync = function (p2046, p2047) {
    return f444(this, arguments, function () {
      var v1232;
      var v1233;
      var v1234;
      var v1235;
      var v1236;
      var v1237;
      var v1238;
      var v1239;
      var v1240;
      return f437(this, function (p2048) {
        switch (p2048.label) {
          case 0:
            v1232 = p2047;
            v1233 = -1;
            p2048.label = 1;
          case 1:
            p2048.trys.push([1, 13, 14, 19]);
            v1234 = f440(p2046);
            p2048.label = 2;
          case 2:
            return [4, f443(v1234.next())];
          case 3:
            v1235 = p2048.sent();
            if (v1235.done) {
              return [3, 12];
            }
            v1236 = v1235.value;
            if (p2047 && v1233 === 0) {
              throw this.createExtraByteError(this.totalPos);
            }
            this.appendBuffer(v1236);
            if (v1232) {
              v1233 = this.readArraySize();
              v1232 = false;
              this.complete();
            }
            p2048.label = 4;
          case 4:
            p2048.trys.push([4, 9,, 10]);
            p2048.label = 5;
          case 5:
            return [4, f443(this.doDecodeSync())];
          case 6:
            return [4, p2048.sent()];
          case 7:
            p2048.sent();
            if (--v1233 === 0) {
              return [3, 8];
            } else {
              return [3, 5];
            }
          case 8:
            return [3, 10];
          case 9:
            v1237 = p2048.sent();
            if (!(v1237 instanceof vF132)) {
              throw v1237;
            }
            return [3, 10];
          case 10:
            this.totalPos += this.pos;
            p2048.label = 11;
          case 11:
            return [3, 2];
          case 12:
            return [3, 19];
          case 13:
            v1238 = p2048.sent();
            v1239 = {
              error: v1238
            };
            return [3, 19];
          case 14:
            p2048.trys.push([14,, 17, 18]);
            if (v1235 && !v1235.done && (v1240 = v1234.return)) {
              return [4, f443(v1240.call(v1234))];
            } else {
              return [3, 16];
            }
          case 15:
            p2048.sent();
            p2048.label = 16;
          case 16:
            return [3, 18];
          case 17:
            if (v1239) {
              throw v1239.error;
            }
            return [7];
          case 18:
            return [7];
          case 19:
            return [2];
        }
      });
    });
  };
  f452.prototype.doDecodeSync = function () {
    _0x5be8bc: while (true) {
      var v1241 = this.readHeadByte();
      var vUndefined = undefined;
      if (v1241 >= 224) {
        vUndefined = v1241 - 256;
      } else if (v1241 < 192) {
        if (v1241 < 128) {
          vUndefined = v1241;
        } else if (v1241 < 144) {
          var v1242 = v1241 - 128;
          if (v1242 !== 0) {
            this.pushMapState(v1242);
            this.complete();
            continue _0x5be8bc;
          } else {
            vUndefined = {};
          }
        } else if (v1241 < 160) {
          var v1242 = v1241 - 144;
          if (v1242 !== 0) {
            this.pushArrayState(v1242);
            this.complete();
            continue _0x5be8bc;
          } else {
            vUndefined = [];
          }
        } else {
          var v1243 = v1241 - 160;
          vUndefined = this.decodeUtf8String(v1243, 0);
        }
      } else if (v1241 === 192) {
        vUndefined = null;
      } else if (v1241 === 194) {
        vUndefined = false;
      } else if (v1241 === 195) {
        vUndefined = true;
      } else if (v1241 === 202) {
        vUndefined = this.readF32();
      } else if (v1241 === 203) {
        vUndefined = this.readF64();
      } else if (v1241 === 204) {
        vUndefined = this.readU8();
      } else if (v1241 === 205) {
        vUndefined = this.readU16();
      } else if (v1241 === 206) {
        vUndefined = this.readU32();
      } else if (v1241 === 207) {
        vUndefined = this.readU64();
      } else if (v1241 === 208) {
        vUndefined = this.readI8();
      } else if (v1241 === 209) {
        vUndefined = this.readI16();
      } else if (v1241 === 210) {
        vUndefined = this.readI32();
      } else if (v1241 === 211) {
        vUndefined = this.readI64();
      } else if (v1241 === 217) {
        var v1243 = this.lookU8();
        vUndefined = this.decodeUtf8String(v1243, 1);
      } else if (v1241 === 218) {
        var v1243 = this.lookU16();
        vUndefined = this.decodeUtf8String(v1243, 2);
      } else if (v1241 === 219) {
        var v1243 = this.lookU32();
        vUndefined = this.decodeUtf8String(v1243, 4);
      } else if (v1241 === 220) {
        var v1242 = this.readU16();
        if (v1242 !== 0) {
          this.pushArrayState(v1242);
          this.complete();
          continue _0x5be8bc;
        } else {
          vUndefined = [];
        }
      } else if (v1241 === 221) {
        var v1242 = this.readU32();
        if (v1242 !== 0) {
          this.pushArrayState(v1242);
          this.complete();
          continue _0x5be8bc;
        } else {
          vUndefined = [];
        }
      } else if (v1241 === 222) {
        var v1242 = this.readU16();
        if (v1242 !== 0) {
          this.pushMapState(v1242);
          this.complete();
          continue _0x5be8bc;
        } else {
          vUndefined = {};
        }
      } else if (v1241 === 223) {
        var v1242 = this.readU32();
        if (v1242 !== 0) {
          this.pushMapState(v1242);
          this.complete();
          continue _0x5be8bc;
        } else {
          vUndefined = {};
        }
      } else if (v1241 === 196) {
        var v1242 = this.lookU8();
        vUndefined = this.decodeBinary(v1242, 1);
      } else if (v1241 === 197) {
        var v1242 = this.lookU16();
        vUndefined = this.decodeBinary(v1242, 2);
      } else if (v1241 === 198) {
        var v1242 = this.lookU32();
        vUndefined = this.decodeBinary(v1242, 4);
      } else if (v1241 === 212) {
        vUndefined = this.decodeExtension(1, 0);
      } else if (v1241 === 213) {
        vUndefined = this.decodeExtension(2, 0);
      } else if (v1241 === 214) {
        vUndefined = this.decodeExtension(4, 0);
      } else if (v1241 === 215) {
        vUndefined = this.decodeExtension(8, 0);
      } else if (v1241 === 216) {
        vUndefined = this.decodeExtension(16, 0);
      } else if (v1241 === 199) {
        var v1242 = this.lookU8();
        vUndefined = this.decodeExtension(v1242, 1);
      } else if (v1241 === 200) {
        var v1242 = this.lookU16();
        vUndefined = this.decodeExtension(v1242, 2);
      } else if (v1241 === 201) {
        var v1242 = this.lookU32();
        vUndefined = this.decodeExtension(v1242, 4);
      } else {
        throw new vF128(`Unrecognized type byte: ${f430(v1241)}`);
      }
      this.complete();
      for (var v1244 = this.stack; v1244.length > 0;) {
        var v1245 = v1244[v1244.length - 1];
        if (v1245.type === 0) {
          v1245.array[v1245.position] = vUndefined;
          v1245.position++;
          if (v1245.position === v1245.size) {
            v1244.pop();
            vUndefined = v1245.array;
          } else {
            continue _0x5be8bc;
          }
        } else if (v1245.type === 1) {
          if (!f451(vUndefined)) {
            throw new vF128("The type of key must be string or number but " + typeof vUndefined);
          }
          if (vUndefined === "__proto__") {
            throw new vF128("The key __proto__ is not allowed");
          }
          v1245.key = vUndefined;
          v1245.type = 2;
          continue _0x5be8bc;
        } else {
          v1245.map[v1245.key] = vUndefined;
          v1245.readCount++;
          if (v1245.readCount === v1245.size) {
            v1244.pop();
            vUndefined = v1245.map;
          } else {
            v1245.key = null;
            v1245.type = 1;
            continue _0x5be8bc;
          }
        }
      }
      return vUndefined;
    }
  };
  f452.prototype.readHeadByte = function () {
    if (this.headByte === v1210) {
      this.headByte = this.readU8();
    }
    return this.headByte;
  };
  f452.prototype.complete = function () {
    this.headByte = v1210;
  };
  f452.prototype.readArraySize = function () {
    var v1246 = this.readHeadByte();
    switch (v1246) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default:
        {
          if (v1246 < 160) {
            return v1246 - 144;
          }
          throw new vF128(`Unrecognized array type byte: ${f430(v1246)}`);
        }
    }
  };
  f452.prototype.pushMapState = function (p2049) {
    if (p2049 > this.maxMapLength) {
      throw new vF128(`Max length exceeded: map length (${p2049}) > maxMapLengthLength (${this.maxMapLength})`);
    }
    this.stack.push({
      type: 1,
      size: p2049,
      key: null,
      readCount: 0,
      map: {}
    });
  };
  f452.prototype.pushArrayState = function (p2050) {
    if (p2050 > this.maxArrayLength) {
      throw new vF128(`Max length exceeded: array length (${p2050}) > maxArrayLength (${this.maxArrayLength})`);
    }
    this.stack.push({
      type: 0,
      size: p2050,
      array: new Array(p2050),
      position: 0
    });
  };
  f452.prototype.decodeUtf8String = function (p2051, p2052) {
    var v1247;
    if (p2051 > this.maxStrLength) {
      throw new vF128(`Max length exceeded: UTF-8 byte length (${p2051}) > maxStrLength (${this.maxStrLength})`);
    }
    if (this.bytes.byteLength < this.pos + p2052 + p2051) {
      throw v1213;
    }
    var v1248 = this.pos + p2052;
    var v1249;
    if (this.stateIsMapKey() && ((v1247 = this.keyDecoder) === null || v1247 === undefined ? undefined : v1247.canBeCached(p2051))) {
      v1249 = this.keyDecoder.decode(this.bytes, v1248, p2051);
    } else if (p2051 > v1130) {
      v1249 = f415(this.bytes, v1248, p2051);
    } else {
      v1249 = f414(this.bytes, v1248, p2051);
    }
    this.pos += p2052 + p2051;
    return v1249;
  };
  f452.prototype.stateIsMapKey = function () {
    if (this.stack.length > 0) {
      var v1250 = this.stack[this.stack.length - 1];
      return v1250.type === 1;
    }
    return false;
  };
  f452.prototype.decodeBinary = function (p2053, p2054) {
    if (p2053 > this.maxBinLength) {
      throw new vF128(`Max length exceeded: bin length (${p2053}) > maxBinLength (${this.maxBinLength})`);
    }
    if (!this.hasRemaining(p2053 + p2054)) {
      throw v1213;
    }
    var v1251 = this.pos + p2054;
    var v1252 = this.bytes.subarray(v1251, v1251 + p2053);
    this.pos += p2054 + p2053;
    return v1252;
  };
  f452.prototype.decodeExtension = function (p2055, p2056) {
    if (p2055 > this.maxExtLength) {
      throw new vF128(`Max length exceeded: ext length (${p2055}) > maxExtLength (${this.maxExtLength})`);
    }
    var v1253 = this.view.getInt8(this.pos + p2056);
    var v1254 = this.decodeBinary(p2055, p2056 + 1);
    return this.extensionCodec.decode(v1254, v1253, this.context);
  };
  f452.prototype.lookU8 = function () {
    return this.view.getUint8(this.pos);
  };
  f452.prototype.lookU16 = function () {
    return this.view.getUint16(this.pos);
  };
  f452.prototype.lookU32 = function () {
    return this.view.getUint32(this.pos);
  };
  f452.prototype.readU8 = function () {
    var v1255 = this.view.getUint8(this.pos);
    this.pos++;
    return v1255;
  };
  f452.prototype.readI8 = function () {
    var v1256 = this.view.getInt8(this.pos);
    this.pos++;
    return v1256;
  };
  f452.prototype.readU16 = function () {
    var v1257 = this.view.getUint16(this.pos);
    this.pos += 2;
    return v1257;
  };
  f452.prototype.readI16 = function () {
    var v1258 = this.view.getInt16(this.pos);
    this.pos += 2;
    return v1258;
  };
  f452.prototype.readU32 = function () {
    var v1259 = this.view.getUint32(this.pos);
    this.pos += 4;
    return v1259;
  };
  f452.prototype.readI32 = function () {
    var v1260 = this.view.getInt32(this.pos);
    this.pos += 4;
    return v1260;
  };
  f452.prototype.readU64 = function () {
    var vF409 = f409(this.view, this.pos);
    this.pos += 8;
    return vF409;
  };
  f452.prototype.readI64 = function () {
    var vF408 = f408(this.view, this.pos);
    this.pos += 8;
    return vF408;
  };
  f452.prototype.readF32 = function () {
    var v1261 = this.view.getFloat32(this.pos);
    this.pos += 4;
    return v1261;
  };
  f452.prototype.readF64 = function () {
    var v1262 = this.view.getFloat64(this.pos);
    this.pos += 8;
    return v1262;
  };
  return f452;
}();
var v1263 = {};
function f453(p2057, p2058 = v1263) {
  var v1264 = new vF133(p2058.extensionCodec, p2058.context, p2058.maxStrLength, p2058.maxBinLength, p2058.maxArrayLength, p2058.maxMapLength, p2058.maxExtLength);
  return v1264.decode(p2057);
}
var vC16 = class {
  onWillDisposeEmitter = new vC17();
  onWillDispose = this.onWillDisposeEmitter.event;
  onDidDisposeEmitter = new vC17();
  onDidDispose = this.onDidDisposeEmitter.event;
  toDispose = [];
  isDisposed = false;
  onDispose(p2059) {
    this.toDispose.push(vC16.create(p2059));
  }
  dispose() {
    if (!this.isDisposed) {
      this.onWillDisposeEmitter.fire(null);
      this.isDisposed = true;
      this.toDispose.forEach(p2060 => {
        p2060.dispose();
      });
      this.onDidDisposeEmitter.fire(null);
      this.onWillDisposeEmitter.dispose();
      this.onDidDisposeEmitter.dispose();
    }
  }
  static is(p2061) {
    return typeof p2061.dispose == "function";
  }
  static create(p2062) {
    return {
      dispose: p2062
    };
  }
};
var vC17 = class {
  registeredListeners = new Set();
  _event;
  get event() {
    this._event ||= p2063 => {
      this.registeredListeners.add(p2063);
      return vC16.create(() => {
        this.registeredListeners.delete(p2063);
      });
    };
    return this._event;
  }
  fire(p2064) {
    this.registeredListeners.forEach(p2065 => {
      p2065(p2064);
    });
  }
  dispose() {
    this.registeredListeners = new Set();
  }
};
var v1265 = (0, vVF73.default)();
var vF134 = p2066 => f429(p2066, {
  ignoreUndefined: true
});
var vC18 = class {
  endpoints = new Map();
  nodeMap = new Map();
  onMessageEmitter = new vC17();
  onMessage = this.onMessageEmitter.event;
  constructor() {}
  getEndpointForNode(p2067) {
    let v1266 = this.nodeMap.get(p2067);
    if (v1266) {
      let v1267 = this.endpoints.get(v1266);
      if (v1267) {
        return v1267;
      }
    }
  }
  addEndpoint(p2068, p2069) {
    this.endpoints.set(p2068, p2069);
    p2069.onMessage(p2070 => this.handleMessage(p2070, p2068));
    let vVF134 = vF134({
      $type: "router-announce",
      $origin: v1265
    });
    p2069.send(vVF134, [vVF134.buffer]);
  }
  removeEndpoint(p2071) {
    this.endpoints.delete(p2071);
  }
  send(p2072, p2073, p2074 = true) {
    let v1268 = {
      $type: "router-message",
      $origin: v1265,
      $target: p2072,
      $data: p2073
    };
    if (p2072 !== v1265) {
      let v1269 = this.getEndpointForNode(p2072);
      if (!v1269) {
        throw new Error("Endpoint " + p2072 + " not registered");
      }
      if (p2074) {
        let vVF1342 = vF134(v1268);
        v1269.send(vVF1342, [vVF1342.buffer]);
      } else {
        v1269.send(v1268, []);
      }
    } else {
      this.onMessageEmitter.fire(v1268);
    }
  }
  broadcast(p2075, p2076, p2077) {
    let v1270 = {
      $type: "router-broadcast",
      $origin: p2077 ?? v1265,
      $data: p2075
    };
    if (!p2076 && !p2077) {
      this.onMessageEmitter.fire(v1270);
    }
    for (let [v1271, v1272] of this.endpoints.entries()) {
      if (v1271 === p2076) {
        continue;
      }
      let vVF1343 = vF134(v1270);
      v1272.send(vVF1343, [vVF1343.buffer]);
    }
  }
  handleMessage(p2078, p2079) {
    let v1273 = p2078 instanceof Uint8Array;
    let v1274 = v1273 ? f453(p2078) : p2078;
    if (v1274.$origin) {
      if (!this.nodeMap.has(v1274.$origin)) {
        this.nodeMap.set(v1274.$origin, p2079);
      }
      if (v1274.$type === "router-broadcast") {
        let vV1274 = v1274;
        this.broadcast(vV1274.$data, p2079, vV1274.$origin);
        this.onMessageEmitter.fire(v1274);
        return;
      }
      if (v1274.$type === "router-message") {
        let vV12742 = v1274;
        if (vV12742.$target === v1265) {
          this.onMessageEmitter.fire(v1274);
        } else {
          let v1275 = this.getEndpointForNode(vV12742.$target);
          if (v1275) {
            v1275.send(p2078, v1273 ? [p2078.buffer] : []);
          }
        }
        return;
      }
    }
  }
};
var v1276;
function f454() {
  v1276 ||= new vC18();
  return v1276;
}
var vC19 = class extends MessageEvent {
  constructor(p2080, p2081) {
    super(p2080, p2081);
  }
};
var vC20 = class extends EventTarget {
  addEventListener(p2082, p2083, p2084) {
    return super.addEventListener(p2082, p2083, p2084);
  }
  removeEventListener(p2085, p2086, p2087) {
    return super.removeEventListener(p2085, p2086, p2087);
  }
  dispatchEvent(p2088) {
    return super.dispatchEvent(p2088);
  }
};
var v1277 = /(%?)(%([sdjo]))/g;
function f455(p2089, p2090) {
  switch (p2090) {
    case "s":
      return p2089;
    case "d":
    case "i":
      return Number(p2089);
    case "j":
      return JSON.stringify(p2089);
    case "o":
      {
        if (typeof p2089 == "string") {
          return p2089;
        }
        let v1278 = JSON.stringify(p2089);
        if (v1278 === "{}" || v1278 === "[]" || /^\[object .+?\]$/.test(v1278)) {
          return p2089;
        } else {
          return v1278;
        }
      }
  }
}
function f456(p2091, ..._0x5dc3fd) {
  if (_0x5dc3fd.length === 0) {
    return p2091;
  }
  let v1279 = 0;
  let v1280 = p2091.replace(v1277, (p2092, p2093, p2094, p2095) => {
    let v1281 = _0x5dc3fd[v1279];
    let vF455 = f455(v1281, p2095);
    if (p2093) {
      return p2092;
    } else {
      v1279++;
      return vF455;
    }
  });
  if (v1279 < _0x5dc3fd.length) {
    v1280 += " " + _0x5dc3fd.slice(v1279).join(" ");
  }
  v1280 = v1280.replace(/%{2,2}/g, "%");
  return v1280;
}
var v1282 = 2;
function f457(p2096) {
  if (!p2096.stack) {
    return;
  }
  let v1283 = p2096.stack.split("\n");
  v1283.splice(1, v1282);
  p2096.stack = v1283.join("\n");
}
var vC21 = class extends Error {
  constructor(p2097, ..._0x2955c7) {
    super(p2097);
    this.message = p2097;
    this.name = "Invariant Violation";
    this.message = f456(p2097, ..._0x2955c7);
    f457(this);
  }
};
var vF135 = (p2098, p2099, ..._0x1c41b9) => {
  if (!p2098) {
    throw new vC21(p2099, ..._0x1c41b9);
  }
};
vF135.as = (p2100, p2101, p2102, ..._0x459821) => {
  if (!p2101) {
    throw p2100.prototype.name != null ? new p2100(f456(p2102, _0x459821)) : p2100(f456(p2102, _0x459821));
  }
};
function f458(p2103, p2104 = "Value is nullish") {
  vF135(p2103 != null, p2104);
  return p2103;
}
var v1284 = "preview-manager";
var v1285 = "preview/open";
var v1286 = "preview/ready";
var v1287 = "preview/port-taken";
var v1288 = "preview/close";
var v1289 = "preview/closed";
var v1290 = "preview/request";
var v1291 = "preview/manager-ack";
var v1292 = "bridge/init";
var v1293 = "preview/runtime-request";
var v1294 = "preview/runtime-response";
var v1295 = "{{identifier}}.nodebox.codesandbox.io";
var vF454 = f454();
var vC22 = class {
  constructor(p2105) {
    this.projectId = p2105;
    vF454.onMessage(p2106 => {
      let v1296 = p2106.$origin;
      let v1297 = p2106.$data;
      if (v1297.$channel_name === v1284) {
        switch (v1297.$type) {
          case v1290:
            {
              if (p2106.$type === "router-broadcast") {
                break;
              }
              let vV1297 = v1297;
              vV1297.$bridge_node = p2106.$origin;
              let v1298 = this.ports.get(vV1297.port);
              if (v1298) {
                vF454.send(v1298, vV1297);
              }
              break;
            }
          case v1285:
            {
              let vV12972 = v1297;
              if (this.ports.has(vV12972.port)) {
                let v1299 = {
                  $channel_name: v1284,
                  $type: v1287,
                  port: vV12972.port
                };
                vF454.send(v1296, v1299);
              } else {
                this.ports.set(vV12972.port, v1296);
                this.openPort(vV12972.port);
              }
              break;
            }
          case v1288:
            {
              let vV12973 = v1297;
              this.closePort(vV12973.port);
              break;
            }
          case v1286:
            {
              let vV12974 = v1297;
              this.bridges.set(vV12974.port, p2106.$origin);
              let v1300 = {
                $channel_name: v1284,
                $type: v1291
              };
              vF454.send(p2106.$origin, v1300);
              let v1301 = this.getIframeId(v1297.port);
              let v1302 = this.getBaseLink(v1297.port);
              if (this.layoutDevMode) {
                let v1303 = this.createIframe(v1301, v1302, "preview");
                v1303.style.border = "1px solid black";
                v1303.style.height = "40vh";
              }
              this.emitter.dispatchEvent(new vC19("port/ready", {
                data: {
                  port: vV12974.port,
                  url: v1302,
                  sourceShellId: f458(this.ports.values().next().value, "The worker doesn't exist for the given port")
                }
              }));
              break;
            }
          case v1293:
            {
              let vV12975 = v1297;
              if (vV12975.data.type === "websocket/open") {
                this.websocketClients.set(vV12975.data.wsId, vV12975.data.port);
              }
              let v1304 = this.websocketClients.get(vV12975.data.wsId);
              if (!v1304) {
                console.warn("WS Port not found for " + vV12975.data.wsId);
                return;
              }
              let v1305 = this.ports.get(v1304);
              if (v1305) {
                vF454.send(v1305, vV12975);
              }
              this.runtimes.set(vV12975.runtimeId, p2106.$origin);
              break;
            }
          case v1294:
            {
              let vV12976 = v1297;
              let v1306 = this.runtimes.get(vV12976.runtimeId);
              if (v1306) {
                vF454.send(v1306, v1297);
              }
              break;
            }
          default:
            {
              console.warn("Unkown preview message", v1297);
              break;
            }
        }
      }
    });
  }
  ports = new Map();
  bridges = new Map();
  websocketClients = new Map();
  runtimes = new Map();
  emitter = new vC20();
  layoutDevMode = new URLSearchParams(window.location.search).get("layout") === "debug";
  getIframeId(p2107) {
    return "iframe-" + this.projectId + "-" + p2107;
  }
  createIframe(p2108, p2109, p2110) {
    let v1307 = document.createElement("iframe");
    let v1308 = document.getElementById("previews-list");
    v1307.src = p2109;
    v1307.allow = "cross-origin-isolated";
    v1307.setAttribute("data-frame-id", p2108);
    if (p2110) {
      v1307.setAttribute("name", p2110);
    }
    v1308?.appendChild(v1307);
    return v1307;
  }
  getPortFromShellId(p2111) {
    return [...this.ports.entries()].find(({
      1: _0x15469b
    }) => _0x15469b === p2111)?.[0];
  }
  getBaseLink(p2112) {
    let v1309 = this.projectId + "-" + p2112;
    if (v1295.includes("{{identifier}}")) {
      return "https://" + v1295.replace("{{identifier}}", v1309);
    } else {
      return "https://" + v1309 + "." + v1295;
    }
  }
  openPort(p2113) {
    let v1310 = this.getBaseLink(p2113);
    let v1311 = this.getIframeId(p2113);
    let v1312 = this.createIframe(v1311, "index.html", "bridge");
    if (this.layoutDevMode) {
      v1312.style.border = "1px solid black";
    }
    document.getElementById("bridge")?.appendChild(v1312);
    let v1313 = v1312.contentWindow;
    if (!v1313) {
      throw new Error("Could not get iframe contentWindow");
    }
    let v1314 = new MessageChannel();
    v1312.onload = () => {
      let v1315 = {
        $type: v1292
      };
      v1313.postMessage(v1315, "*", [v1314.port2]);
      vF454.addEndpoint(v1311, {
        send: (p2114, p2115) => v1314.port1.postMessage(p2114, p2115),
        onMessage: p2116 => {
          v1314.port1.onmessage = p2117 => {
            p2116(p2117.data);
          };
        }
      });
    };
    if (this.layoutDevMode) {
      let v1316 = document.getElementById("previews-list");
      let v1317 = document.createElement("a");
      v1317.setAttribute("data-port", String(p2113));
      v1317.href = v1310;
      v1317.target = "_blank";
      v1317.innerText = "localhost:" + p2113;
      v1316?.appendChild(v1317);
    }
  }
  closePort(p2118) {
    let v1318 = this.getIframeId(p2118);
    document.querySelectorAll("[data-frame-id=\"" + v1318 + "\"]")?.forEach(p2119 => {
      p2119.remove();
    });
    document.querySelector("[data-port=\"" + p2118 + "\"]")?.remove();
    let v1319 = this.ports.get(p2118);
    this.ports.delete(p2118);
    this.bridges.delete(p2118);
    vF454.removeEndpoint(v1318);
    if (v1319) {
      let v1320 = {
        $channel_name: v1284,
        $type: v1289,
        port: p2118
      };
      vF454.broadcast(v1320);
    }
  }
};
var vVF74 = vF7(vVF325());
vVF2();
var v1321 = window.localStorage.CSB_EMULATOR_DEBUG;
function f459(p2120) {
  return function (p2121, ..._0x502424) {};
}
var vVF75 = vF7(vVF331());
var vF136 = p2122 => {
  let v1322 = new Error(p2122.message);
  for (let v1323 of Object.keys(p2122)) {
    v1322[v1323] = p2122[v1323];
  }
  return v1322;
};
vVF2();
var vC23 = class extends Error {
  code;
  syscall;
  path;
  errno;
  constructor(p2123, p2124, p2125, p2126, p2127) {
    super("Error: " + p2124 + ": " + p2123 + ", " + p2125 + " '" + p2126 + "'");
    this.code = p2124;
    this.syscall = p2125;
    this.path = p2126;
    this.errno = p2127;
  }
};
var vC24 = class extends vC23 {
  constructor(p2128, p2129) {
    super("file already exists", "EEXIST", p2128, p2129, -17);
  }
};
var vC25 = class extends vC23 {
  constructor(p2130, p2131) {
    super("no such file or directory", "ENOENT", p2130, p2131, -2);
  }
};
var vC26 = class extends vC23 {
  constructor(p2132, p2133) {
    super("illegal operation on a directory", "EISDIR", p2132, p2133, -21);
  }
};
var vC27 = class extends vC23 {
  constructor(p2134, p2135) {
    super("not a directory", "ENOTDIR", p2134, p2135, -20);
  }
};
var vC28 = class extends vC23 {
  constructor(p2136, p2137) {
    super("directory not empty", "ENOTEMPTY", p2136, p2137, -39);
  }
};
var vC29 = class extends vC23 {
  constructor(p2138, p2139) {
    super("invalid argument", "EINVAL", p2138, p2139, -22);
  }
};
var vC30 = class extends vC23 {
  constructor(p2140, p2141) {
    super("operation not supported on socket", "ENOTSUP", p2140, p2141, -45);
  }
};
var vC31 = class extends vC23 {
  constructor(p2142, p2143) {
    super("too many symbolic links encountered", "ELOOP", p2142, p2143, -62);
  }
};
var v1324 = {
  UV_FS_SYMLINK_DIR: 1,
  UV_FS_SYMLINK_JUNCTION: 2,
  O_RDONLY: 0,
  O_WRONLY: 1,
  O_RDWR: 2,
  UV_DIRENT_UNKNOWN: 0,
  UV_DIRENT_FILE: 1,
  UV_DIRENT_DIR: 2,
  UV_DIRENT_LINK: 3,
  UV_DIRENT_FIFO: 4,
  UV_DIRENT_SOCKET: 5,
  UV_DIRENT_CHAR: 6,
  UV_DIRENT_BLOCK: 7,
  S_IFMT: 61440,
  S_IFREG: 32768,
  S_IFDIR: 16384,
  S_IFCHR: 8192,
  S_IFBLK: 24576,
  S_IFIFO: 4096,
  S_IFLNK: 40960,
  S_IFSOCK: 49152,
  O_CREAT: 512,
  O_EXCL: 2048,
  UV_FS_O_FILEMAP: 0,
  O_NOCTTY: 131072,
  O_TRUNC: 1024,
  O_APPEND: 8,
  O_DIRECTORY: 1048576,
  O_NOFOLLOW: 256,
  O_SYNC: 128,
  O_DSYNC: 4194304,
  O_SYMLINK: 2097152,
  O_NONBLOCK: 4,
  S_IRWXU: 448,
  S_IRUSR: 256,
  S_IWUSR: 128,
  S_IXUSR: 64,
  S_IRWXG: 56,
  S_IRGRP: 32,
  S_IWGRP: 16,
  S_IXGRP: 8,
  S_IRWXO: 7,
  S_IROTH: 4,
  S_IWOTH: 2,
  S_IXOTH: 1,
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
  UV_FS_COPYFILE_EXCL: 1,
  COPYFILE_EXCL: 1,
  UV_FS_COPYFILE_FICLONE: 2,
  COPYFILE_FICLONE: 2,
  UV_FS_COPYFILE_FICLONE_FORCE: 4,
  COPYFILE_FICLONE_FORCE: 4
};
var vC32 = class {
  mode;
  size;
  ino;
  atimeMs;
  mtimeMs;
  ctimeMs;
  birthtimeMs;
  atime;
  mtime;
  ctime;
  birthtime;
  uid;
  gid;
  dev;
  nlink;
  rdev;
  blksize;
  blocks;
  constructor(p2144, p2145, p2146, p2147, p2148, p2149, p2150, p2151, p2152, p2153, p2154, p2155, p2156, p2157) {
    this.dev = p2144;
    this.size = p2152;
    this.ino = p2151;
    this.atimeMs = p2154;
    this.mtimeMs = p2155;
    this.ctimeMs = p2156;
    this.birthtimeMs = p2156;
    this.atime = new Date(p2154);
    this.mtime = new Date(p2155);
    this.ctime = new Date(p2156);
    this.birthtime = new Date(p2157);
    this.blocks = p2153;
    this.nlink = p2146;
    this.uid = p2147;
    this.gid = p2148;
    this.rdev = p2149;
    this.blksize = p2150;
    this.mode = p2145;
  }
  #e(p2158) {
    return (this.mode & v1324.S_IFMT) === p2158;
  }
  isFile() {
    return this.#e(v1324.S_IFREG);
  }
  isDirectory() {
    return this.#e(v1324.S_IFDIR);
  }
  isSymbolicLink() {
    return this.#e(v1324.S_IFLNK);
  }
  isSocket() {
    return false;
  }
  isFIFO() {
    return false;
  }
  isCharacterDevice() {
    return false;
  }
  isBlockDevice() {
    return false;
  }
};
var v1325 = 4096;
function f460(p2159) {
  let v1326 = p2159.type;
  let v1327 = v1326 === 0 ? 16895 : v1326 === 2 ? 41453 : 33279;
  let v1328 = v1326 === 0 ? 0 : Math.max(8, Math.ceil(p2159.size / v1325));
  return new vC32(1, v1327, 1, 1, 1, 0, v1325, p2159.ino, p2159.size, v1328, p2159.atimeMs, p2159.mtimeMs, p2159.ctimeMs, p2159.ctimeMs);
}
vVF2();
function f461(p2160) {
  return v372.from(p2160);
}
function f462(p2161, p2162) {
  if (typeof p2161 == "string") {
    return v372.from(p2161, p2162);
  } else {
    return v372.from(p2161);
  }
}
function f463(p2163) {
  if (typeof p2163 == "string") {
    return p2163;
  } else if (p2163 instanceof v372) {
    return p2163.toString("utf-8");
  } else {
    return p2163.pathname;
  }
}
function f464(p2164) {
  let v1329 = f393(p2164).split("/");
  v1329.shift();
  return v1329;
}
function f465(p2165, p2166) {
  if (p2165.endsWith("/") || p2166.startsWith("/")) {
    return p2165 + p2166;
  } else {
    return p2165 + "/" + p2166;
  }
}
var v1330 = 0;
function f466() {
  return v1330 += 1;
}
function f467(p2167) {
  if (p2167 instanceof vC36 || p2167 instanceof vC35 || p2167 instanceof vC34) {
    return p2167.serialize();
  }
  throw new Error("Not serializable");
}
function f468(p2168, p2169, p2170) {
  switch (p2168.type) {
    case 0:
      return vC36.deserialize(p2168, p2169, p2170);
    case 1:
      return vC35.deserialize(p2168, p2169, p2170);
    case 2:
      return vC34.deserialize(p2168, p2169);
    default:
      throw new Error("Unknown node type");
  }
}
var vC33 = class {
  getPath() {
    if (this.parent) {
      if (!this.parent.name && !this.parent.parent) {
        return "/" + this.name;
      } else {
        return this.parent.getPath() + "/" + this.name;
      }
    } else {
      return "/";
    }
  }
  getPathParts(p2171 = []) {
    if (this.name) {
      p2171.unshift(this.name);
    }
    if (this.parent) {
      p2171 = this.parent.getPathParts(p2171);
    }
    return p2171;
  }
  rename(p2172) {
    this.name = p2172;
    this.stats.mtimeMs = Date.now();
  }
};
function f469(p2173, p2174) {
  return {
    type: p2173,
    size: p2174,
    ino: f466(),
    mtimeMs: Date.now(),
    ctimeMs: Date.now(),
    atimeMs: Date.now()
  };
}
var vC34 = class extends vC33 {
  name;
  stats;
  target;
  parent;
  constructor(p2175, p2176, p2177) {
    super();
    this.name = p2175;
    this.stats = f469(2, 128);
    this.target = p2176;
    this.parent = p2177;
  }
  serialize() {
    return {
      type: 2,
      name: this.name,
      stats: this.stats,
      target: this.target
    };
  }
  static deserialize(p2178, p2179) {
    let v1331 = new vC34(p2178.name, p2178.target, p2179);
    v1331.stats = p2178.stats;
    return v1331;
  }
};
var vC35 = class extends vC33 {
  constructor(p2180, p2181, p2182, p2183) {
    super();
    this.coreFS = p2183;
    this.name = p2180;
    this.content = p2181;
    this.stats = f469(1, p2181.byteLength);
    this.parent = p2182;
  }
  name;
  stats;
  content;
  parent;
  write(p2184, p2185 = false) {
    this.content = p2184;
    this.stats.size = p2184.byteLength;
    this.stats.mtimeMs = Date.now();
    this.coreFS.emitWrite(this, p2184, p2185);
  }
  serialize() {
    return {
      type: 1,
      name: this.name,
      stats: this.stats,
      content: this.content
    };
  }
  static deserialize(p2186, p2187, p2188) {
    let v1332 = new vC35(p2186.name, p2186.content, p2187, p2188);
    v1332.stats = p2186.stats;
    return v1332;
  }
};
var vC36 = class extends vC33 {
  constructor(p2189, p2190, p2191) {
    super();
    this.coreFS = p2191;
    this.name = p2189;
    this.parent = p2190;
    this.stats = f469(0, 128);
  }
  name;
  stats;
  children = new Map();
  parent;
  getChild(p2192) {
    return this.children.get(p2192);
  }
  addChild(p2193, p2194 = true, p2195 = false) {
    this.children.set(p2193.name, p2193);
    this.stats.mtimeMs = Date.now();
    if (p2194) {
      this.coreFS.emitNodeCreation(this, p2193, p2195);
    }
  }
  removeChild(p2196, p2197 = true, p2198 = false) {
    this.children.delete(p2196);
    this.stats.mtimeMs = Date.now();
    if (p2197) {
      this.coreFS.emitNodeDeletion(this, p2196, p2198);
    }
  }
  serialize() {
    return {
      type: 0,
      name: this.name,
      stats: this.stats
    };
  }
  static deserialize(p2199, p2200, p2201) {
    let v1333 = new vC36(p2199.name, p2200, p2201);
    v1333.stats = p2199.stats;
    return v1333;
  }
};
var vC37 = class {
  root = new vC36("", undefined, this);
  emitter = new vC17();
  onFSEvent = this.emitter.event;
  emitNodeCreation(p2202, p2203, p2204) {
    this.emitter.fire({
      type: "create",
      parent: p2202.getPath(),
      newNode: f467(p2203),
      isSync: p2204
    });
  }
  emitNodeDeletion(p2205, p2206, p2207) {
    this.emitter.fire({
      type: "remove",
      parent: p2205.getPath(),
      name: p2206,
      isSync: p2207
    });
  }
  emitWrite(p2208, p2209, p2210) {
    this.emitter.fire({
      type: "write",
      path: p2208.getPath(),
      content: p2209,
      isSync: p2210
    });
  }
  resolveSymlink(p2211) {
    let v1334 = 0;
    let vP2211 = p2211;
    while (vP2211 instanceof vC34) {
      if (v1334 > 10) {
        throw new vC31("open", p2211.getPath());
      }
      vP2211 = this.getNodeAtPath(f464(vP2211.target), vP2211.target);
      v1334++;
    }
    return vP2211;
  }
  getDirNodeAtPath(p2212) {
    let v1335 = this.root;
    if (p2212.length === 1 && p2212[0] === "") {
      return v1335;
    }
    for (let v1336 of p2212) {
      let v1337 = v1335.getChild(v1336);
      if (v1337) {
        if (v1337 instanceof vC36) {
          v1335 = v1337;
        } else if (v1337 instanceof vC34) {
          let v1338 = this.resolveSymlink(v1337);
          if (v1338 instanceof vC36) {
            v1335 = v1338;
          } else {
            throw new vC27("open", p2212.join("/"));
          }
        } else {
          throw new vC25("open", p2212.join("/"));
        }
      } else {
        throw new vC25("open", p2212.join("/"));
      }
    }
    return v1335;
  }
  getNodeAtPath(p2213, p2214) {
    let v1339 = p2213.pop();
    if (!v1339) {
      return this.root;
    }
    let v1340 = this.getDirNodeAtPath(p2213);
    if (!v1340) {
      throw new vC25("open", p2214);
    }
    if (!(v1340 instanceof vC36)) {
      throw new vC27("open", p2214);
    }
    let v1341 = v1340.getChild(v1339);
    if (!v1341) {
      throw new vC25("open", p2214);
    }
    return v1341;
  }
  moveNode(p2215, p2216, p2217 = false) {
    let v1342 = this.getNodeAtPath(f464(p2215), p2215);
    let vF464 = f464(p2216);
    let v1343 = vF464.pop();
    if (v1343) {
      let v1344 = this.getDirNodeAtPath(vF464);
      v1342.parent?.removeChild(v1342.name, false);
      v1342.rename(v1343);
      v1344.addChild(v1342, false);
      v1342.parent = v1344;
    }
    this.emitter.fire({
      type: "move",
      oldPath: p2215,
      newPath: p2216,
      isSync: p2217
    });
    return v1342;
  }
  _serializeTreeNode(p2218) {
    if (p2218 instanceof vC36) {
      return {
        ...p2218.serialize(),
        children: []
      };
    } else {
      return f467(p2218);
    }
  }
  _serialize(p2219, p2220) {
    for (let v1345 of p2219.children.values()) {
      if (v1345 instanceof vC36) {
        let v1346 = this._serializeTreeNode(v1345);
        v1346 = this._serialize(v1345, v1346);
        p2220.children.push(v1346);
      } else {
        p2220.children.push(this._serializeTreeNode(v1345));
      }
    }
    return p2220;
  }
  handleSyncEvent(p2221) {
    if (!p2221.isSync) {
      switch (p2221.type) {
        case "create":
          {
            let v1347 = this.getDirNodeAtPath(f464(p2221.parent));
            let vF468 = f468(p2221.newNode, v1347, this);
            v1347.addChild(vF468, true, true);
            break;
          }
        case "move":
          {
            this.moveNode(p2221.oldPath, p2221.newPath, true);
            break;
          }
        case "remove":
          {
            this.getDirNodeAtPath(f464(p2221.parent)).removeChild(p2221.name, true, true);
            break;
          }
        case "write":
          {
            let v1348 = this.getNodeAtPath(f464(p2221.path), p2221.path);
            if (v1348 instanceof vC35) {
              v1348.write(p2221.content, true);
            }
            break;
          }
      }
    }
  }
  serialize() {
    let v1349 = this._serializeTreeNode(this.root);
    return this._serialize(this.root, v1349);
  }
  populate(p2222, p2223 = this.root) {
    for (let v1350 of p2222.children) {
      if (v1350.type === 0) {
        let vF4682 = f468(v1350, p2223, this);
        p2223.addChild(vF4682, false);
        this.populate(v1350, vF4682);
      } else {
        p2223.addChild(f468(v1350, p2223, this), false);
      }
    }
  }
};
var vVF76 = vF7(vVF378());
var vVF77 = vF7(vVF380());
var vVF78 = vF7(vVF381());
function f470(p2224) {
  let v1351;
  try {
    v1351 = new URL(p2224);
  } catch {
    return false;
  }
  return v1351.protocol === "http:" || v1351.protocol === "https:";
}
function f471(..._0x24e1d0) {
  try {
    let v1352 = new URL(_0x24e1d0.join("/"));
    v1352.pathname = v1352.pathname.replace(/\/+/g, "/");
    return v1352.toString();
  } catch {
    return _0x24e1d0.join("/").replace(/\/+/g, "/");
  }
}
function f472(p2225) {
  return new Promise(p2226 => setTimeout(p2226, p2225));
}
var v1353 = new Set([408, 429, 424, 499, 444, 502, 503, 504, 599]);
function f473(p2227) {
  return v1353.has(p2227);
}
function f474(p2228, p2229) {
  let v1354 = Math.max(1, Math.random() * 2);
  return Math.min(v1354 * p2228.minDelayMs * Math.pow(p2228.factor, p2229), p2228.maxDelayMs);
}
async function f475(p2230, p2231, p2232 = {
  maxRetries: 5,
  minDelayMs: 500,
  maxDelayMs: 15000,
  factor: 2
}, p2233 = 0) {
  let vF137 = async () => {
    p2233 += 1;
    let vF474 = f474(p2232, p2233);
    await f472(vF474);
    return f475(p2230, p2231, p2232, p2233);
  };
  try {
    let v1355 = await fetch(p2230, p2231);
    if (!v1355.ok && f473(v1355.status) && p2232.maxRetries > p2233) {
      return vF137();
    } else {
      return v1355;
    }
  } catch (_0x423a19) {
    if (p2232.maxRetries > p2233) {
      return vF137();
    }
    throw _0x423a19;
  }
}
var vC38 = class {
  cdnUrl = undefined;
  init(p2234) {
    this.cdnUrl = p2234;
  }
  async fetch(p2235, p2236) {
    let v1356 = await f475(p2235, p2236);
    if (!v1356.ok) {
      let v1357 = await v1356.text().catch(() => "Unknown CDN error");
      throw new Error(f456("Failed to fetch \"%s\": %s", p2235, v1357));
    }
    return v1356;
  }
  async fetchPackage(p2237, p2238) {
    vF135(this.cdnUrl, "Failed to fetch package \"%s@%s\": the Sandpack CDN is not defined", this.cdnUrl);
    let v1358;
    try {
      v1358 = await this.fetchPackageFromRegistry(p2237, p2238);
    } catch {
      let vBtoa = btoa(p2237 + "@" + p2238);
      let vF471 = f471(this.cdnUrl, "/v2/mod/" + vBtoa);
      let v1359 = await (await this.fetch(vF471)).arrayBuffer();
      v1358 = f453(v1359);
    }
    return {
      name: p2237,
      version: p2238,
      files: v1358
    };
  }
  async fetchPackageFromRegistry(p2239, p2240) {
    let v1360 = (await this.fetch("https://registry.npmjs.org/" + p2239 + "/" + p2240).then(p2241 => p2241.json())).dist.tarball;
    let v1361 = await this.fetch(v1360);
    let v1362 = await f476((await v1361.blob()).stream().pipeThrough(new DecompressionStream("gzip")));
    let v1363 = await (0, vVF78.default)(v1362.buffer);
    let v1364 = {};
    for (let v1365 of v1363) {
      let v1366 = v1365.name.replace(/^[^/]+/, "");
      if (v1365.type === "0") {
        v1364[v1366] = new Uint8Array(v1365.buffer);
      }
    }
    return v1364;
  }
  async fetchDependencies(p2242) {
    vF135(this.cdnUrl, "Failed to fetch dependencies: the Sandpack CDN is not defined", this.cdnUrl);
    if (p2242.length === 0) {
      return Promise.resolve(null);
    }
    let v1367 = p2242.map(([v1368, v1369]) => v1368 + "@" + v1369.replace(/\s+/, "")).sort().join(";");
    let vF4712 = f471(this.cdnUrl, "/v2/deps/" + btoa(v1367));
    let v1370 = await (await this.fetch(vF4712)).arrayBuffer();
    return f453(v1370);
  }
};
async function f476(p2243) {
  let v1371 = p2243.getReader();
  let v1372 = [];
  let v1373 = false;
  while (!v1373) {
    let {
      done: _0x1e6ba5,
      value: _0x4c8e8f
    } = await v1371.read();
    if (_0x1e6ba5) {
      v1373 = true;
    } else {
      v1372.push(_0x4c8e8f);
    }
  }
  let v1374 = v1372.reduce((p2244, p2245) => p2244 + p2245.length, 0);
  let v1375 = new Uint8Array(v1374);
  let v1376 = 0;
  for (let v1377 of v1372) {
    v1375.set(v1377, v1376);
    v1376 += v1377.length;
  }
  return v1375;
}
var vVF79 = vF7(vVF378());
var v1378 = ["~", ".", "/"];
function f477(p2246, p2247) {
  let vF138 = (p2248, p2249) => {
    p2247.npmPackages[p2248] ||= new Set();
    p2247.npmPackages[p2248].add(p2249);
  };
  for (let [v1379, v1380] of Object.entries(p2246)) {
    if (typeof v1380 != "string") {
      throw new Error("Invalid package specifier: " + v1380);
    }
    if (vVF79.default.validRange(v1380)) {
      p2247.directNpmPackages[v1379] = v1380;
      vF138(v1379, v1380);
    } else if (v1380.startsWith("file:")) {
      p2247.fileAliases[v1379] = v1380.substring(5);
    } else if (v1380.startsWith("npm:")) {
      let [v1381, v1382] = v1380.substring(4).split("@");
      if (!v1381 || !vVF79.default.validRange(v1382)) {
        throw new Error("Invalid dependency specifier: " + v1380);
      }
      vF138(v1381, v1382);
      p2247.npmAliases[v1379] = v1381 + "@" + v1382;
    } else if (f470(v1380)) {
      p2247.remotePackages[v1379] = v1380;
    } else if (v1378.includes(v1380[0])) {
      p2247.fileAliases[v1379] = v1380;
    } else if (v1380.includes("/")) {
      p2247.gitPackages[v1379] = v1380;
    } else {
      p2247.directNpmPackages[v1379] = v1380;
      vF138(v1379, v1380);
    }
  }
  return p2247;
}
function f478(p2250) {
  let v1383 = {
    directNpmPackages: {},
    npmPackages: {},
    remotePackages: {},
    gitPackages: {},
    npmAliases: {},
    fileAliases: {}
  };
  if (!p2250 || typeof p2250 != "object") {
    p2250 = {};
  }
  f477(p2250, v1383);
  return v1383;
}
function f479(p2251, p2252 = true) {
  let v1384 = {
    directNpmPackages: {},
    npmPackages: {},
    remotePackages: {},
    gitPackages: {},
    npmAliases: {},
    fileAliases: {}
  };
  if (p2251.dependencies) {
    f477(p2251.dependencies, v1384);
  }
  if (p2252 && p2251.devDependencies) {
    f477(p2251.devDependencies, v1384);
  }
  return v1384;
}
var vVF710 = vF7(vVF382());
function f480(p2253) {
  let v1385 = (0, vVF710.parse)(p2253);
  return Object.entries(v1385).reduce((p2254, [v1386, v1387]) => {
    let v1388 = v1386.replace(/-([a-z])/g, (p2255, p2256) => p2256.toUpperCase());
    p2254[v1388] = v1387;
    return p2254;
  }, {});
}
function f481(p2257) {
  let v1389 = p2257.split("@");
  let v1390 = v1389.pop();
  if (!v1390 || !v1389.length) {
    throw new Error("Invalid specifier: " + p2257);
  }
  return [v1389.join("@"), v1390];
}
function f482(p2258) {
  let v1391 = [];
  for (let [v1392, v1393] of Object.entries(p2258.directNpmPackages)) {
    v1391.push([v1392, {
      name: v1392,
      range: v1393
    }]);
  }
  for (let [v1394, v1395] of Object.entries(p2258.npmAliases)) {
    let [v1396, v1397] = f481(v1395);
    if (!v1397) {
      throw new Error("Invalid npm alias version range");
    }
    v1391.push([v1394, {
      name: v1396,
      range: v1397
    }]);
  }
  return v1391;
}
var vC39 = class extends vC20 {
  constructor(p2259) {
    super();
    this.fs = p2259;
    this.store = new vVC40(this.fs, {
      publicHoistPattern: ["@vuepress/client", "@nuxt*"]
    });
    this.cdnClient = new vC38();
    this.pendingRequests = new Map();
  }
  store;
  _cdnUrl;
  cdnClient;
  pendingRequests;
  get cdnUrl() {
    return this._cdnUrl;
  }
  set cdnUrl(p2260) {
    vF135(typeof p2260 !== "undefined", "Failed to update a CDN URL: the next URL is not defined");
    this._cdnUrl = p2260;
    this.cdnClient.init(p2260);
  }
  get totalPending() {
    return this.pendingRequests.size;
  }
  async installPackage(p2261, p2262) {
    if (!this.shouldInstallPackage(p2261, p2262)) {
      return;
    }
    let v1398 = this.cdnClient.fetchPackage(p2261, p2262);
    v1398.then(p2263 => {
      this.dispatchEvent(new vC19("progress", {
        data: {
          name: p2261,
          version: p2262,
          totalPending: this.totalPending
        }
      }));
      this.store.writeDependency(p2263);
    });
    this.equeueRequest(p2261, p2262, v1398);
    return v1398;
  }
  shouldInstallPackage(p2264, p2265) {
    return !this.hasInstalledPackage(p2264, p2265) && !this.hasPendingPackage(p2264, p2265);
  }
  hasInstalledPackage(p2266, p2267) {
    return this.store.findPackage(p2266, p2267) != null;
  }
  hasPendingPackage(p2268, p2269) {
    let v1399 = this.pendingRequests.get(p2268);
    if (v1399) {
      for (let [v1400] of v1399) {
        if (vVF76.default.satisfies(v1400, p2269)) {
          return true;
        }
      }
    }
    return false;
  }
  equeueRequest(p2270, p2271, p2272) {
    p2272.finally(() => {
      this.pendingRequests.get(p2270)?.delete(p2271);
      if (this.pendingRequests.get(p2270)?.size === 0) {
        this.pendingRequests.delete(p2270);
      }
    });
    let v1401 = this.pendingRequests.get(p2270);
    if (!v1401) {
      this.pendingRequests.set(p2270, new Map([[p2271, p2272]]));
      return;
    }
    v1401.set(p2271, p2272);
  }
  async installAllPackages(p2273) {
    let v1402 = Promise.all(this.pendingRequests.values());
    let v1403 = JSON.parse(this.fs.readFileAsString(p2273));
    let vF479 = f479(v1403);
    let v1404 = Object.entries(vF479.npmPackages).reduce((p2274, [v1405, v1406]) => {
      for (let v1407 of v1406) {
        if (this.shouldInstallPackage(v1405, v1407)) {
          if (p2274[v1405]) {
            p2274[v1405] += "," + v1407;
          } else {
            p2274[v1405] = v1407;
          }
        }
      }
      return p2274;
    }, {});
    let v1408 = (await this.cdnClient.fetchDependencies(Object.entries(v1404))) || {};
    let v_0x4cd0af = f485(v1408);
    let v1409 = Promise.all(v_0x4cd0af.map(p2275 => this.installPackage(p2275.name, p2275.version)));
    await Promise.all([v1402, v1409]);
    for (let [v1410, v1411] of Object.entries(v1408)) {
      let [v1412, v1413] = f481(v1410);
      if (!(v1413[0] >= "0") || !(v1413[0] <= "9")) {
        this.store.writePackageTag(v1412, v1411, v1413);
      }
    }
    this.store.symlinkStoreDependencies();
    this.store.symlinkRootDependencies(v1403);
  }
};
var vC40 = class {
  constructor(p2276, p2277 = {}) {
    this.fs = p2276;
    this.options = p2277;
    this.npmrc = this.parseNpmrcFile();
    this.shouldHoistPackage = this.createHoistPackageMatcher(this.npmrc, this.options);
    this.fs.mkdir(f483(vC40.STORE_PATH), {
      recursive: true
    });
  }
  npmrc = null;
  packages = new Map();
  shouldHoistPackage;
  parseNpmrcFile() {
    let vF396 = f396(v1011, ".npmrc");
    if (!this.fs.exists(vF396)) {
      return null;
    }
    try {
      return f480(this.fs.readFileAsString(vF396));
    } catch (_0x3bbba4) {
      console.warn("[PackageManager] Failed to parse \".npmrc\" file:", _0x3bbba4);
      return null;
    }
  }
  createHoistPackageMatcher(p2278, p2279) {
    let v1414 = p2278?.publicHoistPattern || [];
    let v1415 = p2279.publicHoistPattern || [];
    let v1416 = [...v1414, ...v1415];
    return (0, vVF77.createMatcher)(v1416);
  }
  getPackageId(p2280, p2281) {
    return p2280 + "@" + p2281;
  }
  buildPackageActualPath(p2282, p2283) {
    return f396(p2283, "node_modules", p2282);
  }
  getPackageRootPath(p2284, p2285) {
    let v1417 = this.packages.get(p2284);
    vF135(v1417, "Failed to get store root path for package \"%s@%s\": package is not installed", p2284, p2285, this.packages);
    let v1418 = v1417.findVersion(p2285);
    vF135(v1418, "Failed to resolve installation path for \"%s@%s\": no installation found for this version", p2284, p2285);
    return v1418;
  }
  getPackageActualPath(p2286, p2287) {
    let v1419 = this.getPackageRootPath(p2286, p2287);
    return this.buildPackageActualPath(p2286, v1419);
  }
  findPackage(p2288, p2289) {
    try {
      return this.getPackageRootPath(p2288, p2289);
    } catch {
      return null;
    }
  }
  readPackageJson(p2290, p2291) {
    let v1420 = this.getPackageActualPath(p2290, p2291);
    let vF3962 = f396(v1420, "package.json");
    vF135(this.fs.exists(vF3962), "Failed to read \"package.json\" for \"%s@%s\": package is not installed", p2290, p2291);
    return JSON.parse(this.fs.readFileAsString(vF3962));
  }
  addFileToSourceInspector(p2292, p2293 = "") {
    (0, eval)("//\n// " + p2293 + "\n//\n\n//# sourceURL=nodebox://" + p2292);
  }
  symlink(p2294, p2295) {
    if (this.fs.exists(p2295)) {
      console.warn("Skipping a symlink from \"%s\" to \"%s\": target already exists", p2294, p2295);
      return;
    }
    vF135(this.fs.exists(p2294), "[PackageStore]: Failed to symlink \"%s\" from \"%s\": the source does not exist", p2295, p2294);
    this.fs.mkdir(f483(p2295), {
      recursive: true
    });
    this.fs.symlink(p2294, p2295);
    this.addFileToSourceInspector(p2295, p2295 + " --> " + p2294);
  }
  writeDependency(p2296) {
    let v1421 = this.getPackageId(p2296.name, p2296.version);
    let v1422 = this.shouldHoistPackage(p2296.name);
    let vF3963 = f396(vC40.STORE_PATH, v1421);
    vF135(!this.fs.exists(vF3963), "Failed to write \"%s\" to the store at \"%s\": package already exists", v1421, vF3963);
    let vF3964 = f396(vC40.STORE_PATH, v1421, "node_modules", p2296.name);
    for (let v1423 in p2296.files) {
      let v1424 = p2296.files[v1423];
      let vF3965 = f396(vF3964, v1423);
      this.fs.mkdir(f483(vF3965), {
        recursive: true
      });
      this.fs.writeFileSync(vF3965, v1424);
    }
    this.registerPackage(p2296, vF3963);
    let v1425 = this.shouldHoistPackage(p2296.name) ? f396(v1011, "node_modules/.bin") : f396(vF3964, "node_modules", ".bin");
    this.symlinkBinaries(p2296.name, p2296.version, v1425);
    if (v1422) {
      let vF3966 = f396(v1011, "node_modules", p2296.name);
      this.symlink(vF3964, vF3966);
    }
    return vF3963;
  }
  registerPackage(p2297, p2298) {
    let v1426 = this.packages.get(p2297.name);
    if (v1426) {
      v1426.addVersion(p2297.version, p2298);
      return;
    }
    this.packages.set(p2297.name, new vC41(p2297.name).addVersion(p2297.version, p2298));
  }
  getBinaries(p2299, p2300) {
    let v1427 = this.getPackageId(p2299, p2300);
    let v1428 = this.getPackageActualPath(p2299, p2300);
    let v1429 = this.readPackageJson(p2299, p2300);
    let v_0x4508fc = f484(p2299, v1429.bin);
    let v1430 = new Map();
    for (let [v1431, v1432] of Object.entries(v_0x4508fc || {})) {
      let v1433 = this.resolveBinaryPath(p2299, p2300, v1432);
      vF135(v1433, "Failed to resolve \"%s\" binary for package \"%s@%s\" from \"%s\": no binary present at the path", v1431, p2299, p2300, v1432);
      v1430.set(v1431, v1433);
    }
    let v1434 = v1429.directories?.bin;
    if (v1434) {
      let vF3967 = f396(v1428, v1434);
      vF135(this.fs.exists(vF3967), "Failed to resolve binaries for package \"%s@%s using a custom \"directories.bin\" (%s): directory does not exist", v1427, vF3967);
      let v1435 = this.fs.readdir(vF3967);
      for (let v1436 of v1435) {
        if (typeof v1436 == "string") {
          let vF3968 = f396(vF3967, v1436);
          v1430.set(v1436, vF3968);
        }
      }
    }
    return v1430;
  }
  symlinkStoreDependencies() {
    for (let [v1437, v1438] of this.packages) {
      for (let [v1439, v1440] of v1438.versions) {
        let v1441 = this.getPackageActualPath(v1437, v1439);
        let v1442 = this.readPackageJson(v1437, v1439);
        let vF478 = f478(v1442.dependencies);
        for (let [v1443, v1444] of f482(vF478)) {
          let v1445 = this.getPackageActualPath(v1444.name, v1444.range);
          let vF3969 = f396(v1440, "node_modules", v1443);
          this.symlink(v1445, vF3969);
          let vF39610 = f396(vC40.STORE_PATH, "node_modules", v1443);
          if (!this.fs.exists(vF39610)) {
            this.symlink(v1445, vF39610);
          }
          if (v1444.name === v1443) {
            this.symlinkBinaries(v1444.name, v1444.range, f396(v1441, "node_modules/.bin"));
          }
        }
        let vF4782 = f478(v1442.peerDependencies);
        for (let [v1446, v1447] of f482(vF4782)) {
          let v1448 = this.findPackage(v1447.name, v1447.range);
          if (!v1448) {
            if (!v1442.peerDependenciesMeta?.[v1446]?.optional) {
              console.warn("[PackageManager] Failed to symlink a non-optional peer dependency of \"%s@%s\" from \"%s@%s\": dependency is not installed", v1446, v1447.name !== v1446 ? v1447.name + "@" + v1447.range : v1447.range, v1437, v1439);
            }
            continue;
          }
          let v1449 = this.buildPackageActualPath(v1446, v1448);
          let vF39611 = f396(v1440, "node_modules", v1446);
          this.symlink(v1449, vF39611);
          if (v1447.name !== v1446) {
            this.symlinkBinaries(v1447.name, v1447.range, f396(v1441, "node_modules/.bin"));
          }
        }
      }
    }
  }
  symlinkBinaries(p2301, p2302, p2303) {
    let v1450 = this.getBinaries(p2301, p2302);
    for (let [v1451, v1452] of v1450) {
      let vF39612 = f396(p2303, v1451);
      if (this.fs.exists(vF39612)) {
        console.warn("[PackageManager] Failed to symlink \"%s\" (\"%s@%s\"): target binary already exists at \"%s\"", v1451, p2301, p2302, vF39612);
        continue;
      }
      this.symlink(v1452, vF39612);
    }
  }
  symlinkRootDependencies(p2304) {
    let vF4792 = f479(p2304);
    let {
      directNpmPackages: _0x84e896,
      npmAliases: _0x5f139f
    } = vF4792;
    for (let [v1453, v1454] of Object.entries(_0x84e896)) {
      if (this.shouldHoistPackage(v1453)) {
        continue;
      }
      let v1455 = this.getPackageActualPath(v1453, v1454);
      let vF39613 = f396(v1011, "node_modules", v1453);
      this.symlink(v1455, vF39613);
      let v1456 = this.getBinaries(v1453, v1454);
      for (let [v1457, v1458] of v1456) {
        let vF39614 = f396(v1011, "node_modules", ".bin", v1457);
        if (this.fs.exists(vF39614)) {
          console.warn("[PackageManager] Failed to symlink root-level \"%s\" binary for package \"%s@%s\": target binary already exists at \"%s\"", v1457, v1453, v1454, vF39614);
          continue;
        }
        this.symlink(v1458, vF39614);
      }
    }
    for (let [v1459, v1460] of Object.entries(_0x5f139f)) {
      let [v1461, v1462] = f481(v1460);
      let v1463 = this.getPackageActualPath(v1461, v1462);
      let vF39615 = f396(v1011, "node_modules", v1459);
      this.symlink(v1463, vF39615);
    }
  }
  resolveBinaryPath(p2305, p2306, p2307) {
    let v1464 = this.getPackageActualPath(p2305, p2306);
    let vF39616 = f396(v1464, p2307);
    return [vF39616, vF39616 + ".js", vF39616 + ".mjs"].find(p2308 => this.fs.exists(p2308));
  }
  writePackageTag(p2309, p2310, p2311) {
    let v1465 = this.packages.get(p2309);
    if (!v1465) {
      throw new Error("Failed to write tag " + p2311 + " for " + p2309 + ", package is not installed");
    }
    v1465.registerVersionTag(p2311, p2310);
  }
};
var vVC40 = vC40;
vF9(vVC40, "STORE_PATH", f396(v1011, "node_modules", ".store"));
var vC41 = class {
  constructor(p2312) {
    this.name = p2312;
  }
  versions = new Map();
  tags = new Map();
  addVersion(p2313, p2314) {
    vF135(!this.versions.has(p2313), "Failed to register version \"%s\" for store dependency \"%s\": already exists", p2313, this.name);
    this.versions.set(p2313, p2314);
    return this;
  }
  registerVersionTag(p2315, p2316) {
    vF135(this.versions.has(p2316), "Failed to register tag \"%s\" for version \"%s\" for store dependency \"%s\": version does not exist", p2315, p2316, this.name);
    this.tags.set(p2315, p2316);
    return this;
  }
  findVersion(p2317) {
    let v1466 = this.tags.get(p2317);
    if (v1466) {
      return this.versions.get(v1466);
    }
    if (p2317 === "latest" || p2317 === "*") {
      let v1467 = Array.from(this.versions.keys());
      let v1468 = vVF76.default.sort(v1467);
      return this.versions.get(v1468[0]);
    }
    for (let [v1469, v1470] of this.versions) {
      if (vVF76.default.satisfies(v1469, p2317)) {
        return v1470;
      }
    }
    if (/^\d/.test(p2317)) {
      for (let [v1471, v1472] of this.versions) {
        if (vVF76.default.satisfies(v1471, "^" + p2317)) {
          return v1472;
        }
      }
    }
    for (let [v1473, v1474] of this.versions) {
      let v_0x1d55b4 = f486(v1473);
      let v_0x1d55b42 = f486(p2317);
      if (v_0x1d55b4 === v_0x1d55b42) {
        return v1474;
      }
    }
  }
};
function f483(p2318) {
  let v1475 = p2318.split("/");
  v1475.pop();
  return v1475.join("/");
}
function f484(p2319, p2320) {
  if (typeof p2320 !== "undefined") {
    if (typeof p2320 == "string") {
      return {
        [p2319]: p2320
      };
    } else {
      return p2320;
    }
  }
}
function f485(p2321) {
  let v1476 = new Set();
  return Object.entries(p2321).map(([v1477, v1478]) => {
    let [v1479, v1480] = f481(v1477);
    return {
      name: v1479,
      version: v1478
    };
  }).filter(p2322 => {
    let v1481 = p2322.name + "@" + p2322.version;
    if (v1476.has(v1481)) {
      return false;
    } else {
      v1476.add(v1481);
      return true;
    }
  });
}
function f486(p2323) {
  let [v1482] = p2323.match(/\d/) || [];
  let vNumber5 = Number(v1482);
  if (isNaN(vNumber5)) {
    return undefined;
  } else {
    return vNumber5;
  }
}
var v1483 = v1324.COPYFILE_EXCL | v1324.COPYFILE_FICLONE | v1324.COPYFILE_FICLONE_FORCE;
var vF39617 = f396(v1011, "package.json");
var vC42 = class {
  core = new vC37();
  isMain = false;
  _cdnUrl = undefined;
  packageManager = new vC39(this);
  isInstallingDependencies = Promise.resolve();
  get cdnUrl() {
    return this._cdnUrl;
  }
  set cdnUrl(p2324) {
    this._cdnUrl = p2324;
    this.packageManager.cdnUrl = this._cdnUrl;
  }
  readFileAsString(p2325) {
    let v1484 = this.readFileSync(p2325);
    return v372.from(v1484).toString("utf-8");
  }
  writeFileSync(p2326, p2327) {
    let vF4642 = f464(p2326);
    let v1485 = vF4642.pop();
    if (!v1485) {
      throw new vC25("open", p2326);
    }
    let v1486 = this.core.getDirNodeAtPath(vF4642);
    let v1487 = v1486.getChild(v1485);
    if (v1487) {
      if (v1487 instanceof vC35) {
        v1487.write(p2327);
      } else {
        throw new vC26("open", p2326);
      }
    } else {
      let v1488 = new vC35(v1485, p2327, v1486, this.core);
      v1486.addChild(v1488);
    }
  }
  async installDependencies() {
    this.isInstallingDependencies = this.packageManager.installAllPackages(vF39617);
    return this.isInstallingDependencies;
  }
  waitForIdleDependencies() {
    return this.isInstallingDependencies;
  }
  readFileSync(p2328) {
    let vF4643 = f464(p2328);
    let v1489 = this.core.getNodeAtPath(vF4643, p2328);
    if (!v1489) {
      throw new vC25("open", p2328);
    }
    if (v1489 instanceof vC35) {
      return v1489.content;
    }
    if (v1489 instanceof vC34) {
      let v1490 = this.realpath(p2328);
      return this.readFileSync(v1490);
    } else {
      throw new vC26("open", p2328);
    }
  }
  mkdir(p2329, p2330 = {}) {
    let {
      recursive: _0xa82b23
    } = p2330 || {};
    let v1491 = this.core.root;
    let vF4644 = f464(p2329);
    if (!vF4644.length || vF4644.length === 1 && vF4644[0] === "") {
      if (_0xa82b23) {
        return;
      }
      throw new vC26("mkdir", p2329);
    }
    for (let v1492 = 0; v1492 < vF4644.length; v1492++) {
      let v1493 = vF4644[v1492];
      let v1494 = v1491.getChild(v1493);
      let v1495 = v1492 === vF4644.length - 1;
      if (v1494) {
        if (v1494 instanceof vC36) {
          if (v1495) {
            if (_0xa82b23) {
              continue;
            }
            throw new vC24("mkdir", p2329);
          }
          v1491 = v1494;
        } else if (v1494 instanceof vC34 && !v1495) {
          let v1496 = this.core.resolveSymlink(v1494);
          if (v1496 instanceof vC36) {
            v1491 = v1496;
          } else {
            throw new vC24("mkdir", p2329);
          }
        } else {
          throw new vC24("mkdir", p2329);
        }
      } else {
        if (!_0xa82b23 && !v1495) {
          throw new vC25("mkdir", p2329);
        }
        {
          let v1497 = new vC36(v1493, v1491, this.core);
          v1491.addChild(v1497);
          v1491 = v1497;
        }
      }
    }
  }
  rmdir(p2331, p2332 = {}) {
    let vF4645 = f464(p2331);
    let v1498 = vF4645.pop();
    if (!v1498) {
      throw new vC25("rmdir", p2331);
    }
    let v1499 = this.core.getDirNodeAtPath(vF4645);
    let v1500 = v1499.getChild(v1498);
    if (!v1500) {
      throw new vC25("rmdir", p2331);
    }
    if (v1500 instanceof vC36) {
      if (!p2332.recursive && v1500.children.size > 0) {
        throw new vC28("rmdir", p2331);
      }
      v1499.removeChild(v1498);
    } else {
      throw new vC27("rmdir", p2331);
    }
  }
  readdir(p2333, p2334 = {}) {
    let {
      withFileTypes: _0x5a60c8 = false
    } = p2334 || {};
    let vF4646 = f464(p2333);
    let v1501 = this.core.getDirNodeAtPath(vF4646);
    if (_0x5a60c8) {
      return Array.from(v1501.children.values()).map(p2335 => ({
        name: p2335.name,
        type: p2335.stats.type
      }));
    } else {
      return Array.from(v1501.children.keys());
    }
  }
  unlink(p2336) {
    let vF4647 = f464(p2336);
    let v1502 = vF4647.pop();
    if (!v1502) {
      throw new vC25("open", p2336);
    }
    let v1503 = this.core.getDirNodeAtPath(vF4647);
    let v1504 = v1503.getChild(v1502);
    if (!v1504) {
      throw new vC25("unlink", p2336);
    }
    if (v1504 instanceof vC36) {
      throw new vC26("unlink", p2336);
    }
    v1503.removeChild(v1502);
  }
  rename(p2337, p2338) {
    this.core.moveNode(p2337, p2338);
  }
  stat(p2339) {
    let vF4648 = f464(p2339);
    let v1505 = this.core.getNodeAtPath(vF4648, p2339);
    let v1506 = 0;
    while (v1505 instanceof vC34) {
      if (v1506 > 10) {
        throw new vC25("open", p2339);
      }
      v1505 = this.core.getNodeAtPath(f464(v1505.target), v1505.target);
      v1506++;
    }
    return v1505.stats;
  }
  lstat(p2340) {
    let vF4649 = f464(p2340);
    return this.core.getNodeAtPath(vF4649, p2340).stats;
  }
  symlink(p2341, p2342) {
    let vF46410 = f464(p2341);
    let v1507 = this.core.getNodeAtPath(vF46410, p2341);
    let vF46411 = f464(p2342);
    let v1508 = vF46411.pop();
    if (!v1508) {
      throw new vC25("symlink", p2342);
    }
    let v1509 = this.core.getDirNodeAtPath(vF46411);
    if (!v1509) {
      throw new vC25("symlink", p2342);
    }
    if (v1509.getChild(v1508)) {
      throw new vC24("symlink", p2342);
    }
    let v1510 = new vC34(v1508, v1507.getPath(), v1509);
    v1509.addChild(v1510);
  }
  realpath(p2343) {
    let vF46412 = f464(p2343);
    let v1511 = this.core.getNodeAtPath(vF46412, p2343);
    if (!v1511) {
      throw new vC25("realpath", p2343);
    }
    return (v1511 instanceof vC34 ? this.core.resolveSymlink(v1511) : v1511).getPath();
  }
  readlink(p2344) {
    let vF46413 = f464(p2344);
    let v1512 = this.core.getNodeAtPath(vF46413, p2344);
    if (v1512 instanceof vC34) {
      return v1512.target;
    }
    throw new vC29("readlink", p2344);
  }
  access(p2345) {
    let vF46414 = f464(p2345);
    this.core.getNodeAtPath(vF46414, p2345);
  }
  copyFile(p2346, p2347, p2348 = 0) {
    if (!(p2348 < 0)) {
      p2348 > v1483;
    }
    let v1513 = (p2348 & v1324.COPYFILE_EXCL) === v1324.COPYFILE_EXCL;
    let vF46415 = f464(p2346);
    let v1514 = this.core.getNodeAtPath(vF46415, p2346);
    if (!(v1514 instanceof vC35)) {
      throw new vC30("copyfile", p2346);
    }
    let vF46416 = f464(p2347);
    let v1515 = vF46416.pop();
    if (!v1515) {
      throw new vC25("copyfile", p2347);
    }
    let v1516 = this.core.getDirNodeAtPath(vF46416);
    if (v1516.getChild(v1515)) {
      if (v1513) {
        throw new vC24("copyfile", p2347);
      }
      v1516.removeChild(v1515);
    }
    let v1517 = new vC35(v1515, new Uint8Array(v1514.content), v1516, this.core);
    v1516.addChild(v1517);
  }
  exists(p2349) {
    try {
      this.stat(p2349);
      return true;
    } catch {
      return false;
    }
  }
};
var v1518 = new vC42();
var vF4542 = f454();
vF4542.onMessage(p2350 => {
  if (p2350.$type === "router-broadcast" && p2350.$origin !== v1265 && p2350.$data.type === "fs-sync") {
    v1518.core.handleSyncEvent(p2350.$data.event);
  }
});
v1518.core.onFSEvent(p2351 => {
  if (!p2351.isSync) {
    vF4542.broadcast({
      type: "fs-sync",
      event: p2351
    });
  }
});
var vC43 = class extends Worker {
  isTerminated;
  constructor(..._0x38bb78) {
    super(..._0x38bb78);
    this.isTerminated = false;
    this.addEventListener("error", p2352 => {
      if (p2352.message && p2352.message.endsWith("closing")) {
        p2352.stopImmediatePropagation();
        p2352.preventDefault();
        Object.defineProperty(this, "terminated", {
          value: true
        });
      }
    });
  }
  terminate() {
    this.isTerminated = true;
    super.terminate();
  }
};
async function f487() {
  let v1519 = new vC43(vVF383(), {
    eval: true
  });
  let v1520 = new vVF75.DeferredPromise();
  let vF139 = p2353 => {
    let v1521 = p2353.data;
    if (v1521.$type === "loaded") {
      v1520.resolve([v1519, v1521.$data.id]);
    } else if (v1521.$type === "init:failed") {
      v1520.reject(vF136(v1521.$data.error));
    }
  };
  let vF140 = p2354 => {
    v1520.reject(p2354.error);
  };
  v1519.addEventListener("message", vF139);
  v1519.addEventListener("error", vF140);
  return v1520.finally(() => {
    v1519.removeEventListener("message", vF139);
    v1519.removeEventListener("error", vF140);
  });
}
async function f488(p2355, p2356) {
  let v1522 = new vVF75.DeferredPromise();
  f489(p2355, p2356.port2, {
    isMainThread: true
  });
  let vF141 = p2357 => {
    if (p2357.data.$type === "ready") {
      v1522.resolve();
    }
  };
  p2356.port1.addEventListener("message", vF141);
  p2356.port1.start();
  return v1522.finally(() => {
    p2356.port1.removeEventListener("message", vF141);
  });
}
function f489(p2358, p2359, p2360 = {}) {
  let v1523 = {
    $type: "init",
    $data: {
      ...p2360,
      fileTree: v1518.core.serialize()
    }
  };
  p2358.postMessage(v1523, [p2359]);
}
var vF459 = f459("runtime:worker");
var vC44 = class {
  constructor(p2361) {
    this.preview = p2361;
    this.handleMessage = this.handleMessage.bind(this);
    this.#r.port1.addEventListener("message", this.handleMessage);
  }
  emitter = new vC20();
  #e;
  #t = null;
  #a = f487();
  #s = null;
  #l = false;
  #r = new MessageChannel();
  #n = new Map();
  #i = new Map();
  #o(p2362 = false) {
    if (this.#t) {
      this.#t?.terminate();
      this.#u();
    } else {
      this.#a.then(() => this.#o());
    }
  }
  #u() {
    for (let v1524 of this.#n.values()) {
      v1524.terminate();
    }
    for (let v1525 of this.#i.values()) {
      v1525.then(p2363 => p2363.terminate());
    }
  }
  sendInput(p2364) {
    this.#r.port1.postMessage({
      $type: "tty:out",
      $data: {
        fd: 0,
        data: p2364
      }
    });
  }
  handleMessage(p2365) {
    let {
      data: _0x16eba1
    } = p2365;
    switch (_0x16eba1.$type) {
      case "started":
        {
          this.emitter.dispatchEvent(new vC19("worker/started", {}));
          return;
        }
      case "run:failed":
        {
          this.emitter.dispatchEvent(new vC19("worker/error", {
            data: _0x16eba1.$data
          }));
          this.#o();
          return;
        }
      case "exit":
        {
          this.emitter.dispatchEvent(new vC19("worker/exit", {
            data: _0x16eba1.$data
          }));
          this.#o();
          return;
        }
      case "tty:out":
        {
          let v1526 = _0x16eba1.$data;
          if (v1526.fd === 0) {
            break;
          }
          let v1527 = v1526.fd === 1 ? "out" : "err";
          let v1528 = v372.from(v1526.data).toString("utf-8");
          this.emitter.dispatchEvent(new vC19("worker/tty:out", {
            data: {
              payload: {
                data: v1528,
                type: v1527
              }
            }
          }));
          return;
        }
    }
  }
  stop() {
    if (this.#e) {
      let v1529 = this.preview.getPortFromShellId(this.#e);
      if (v1529) {
        this.preview.closePort(v1529);
      }
    }
    this.#o(true);
    this.#r.port1.removeEventListener("message", this.handleMessage);
    this.#r.port1.close();
  }
  #c(p2366) {
    p2366.addEventListener("message", p2367 => {
      let v1530 = p2367.data;
      switch (v1530.$type) {
        case "child:spawn":
          {
            console.warn("child:spawn called", v1530);
            let v1531 = v1530.$data.id;
            let v1532 = f487().then(([v1533, v1534]) => {
              this.#n.set(v1531, v1533);
              this.#i.delete(v1531);
              this.#c(v1533);
              f489(v1533, p2367.ports[0], {
                isMainThread: false,
                environmentData: v1530.$data.environmentData,
                globals: {
                  ...(v1530.$data.globals || {})
                }
              });
              return v1533;
            }).catch(p2368 => {
              this.#i.delete(v1531);
              throw p2368;
            });
            v1532.catch(console.error);
            this.#i.set(v1531, v1532);
            break;
          }
        case "child:kill":
          {
            let v1535 = v1530.$data.id;
            let v1536 = this.#n.get(v1535);
            if (v1536) {
              v1536.terminate();
              this.#n.delete(v1535);
            }
            break;
          }
      }
    });
  }
  async _init() {
    let [v1537, v1538] = await this.#a;
    this.#t = v1537;
    this.#e = v1538;
    if (typeof window === "undefined") {
      console.error("Tried to start a node worker from outside the main thread.");
    } else {
      this.#c(v1537);
    }
    f454().addEndpoint("node-worker-" + (0, vVF74.default)(), {
      send: (p2369, p2370) => this.#r.port1.postMessage(p2369, p2370),
      onMessage: p2371 => {
        this.#r.port1.addEventListener("message", p2372 => {
          p2371(p2372.data);
        });
      }
    });
    await f488(v1537, this.#r).catch(p2373 => {
      let v1539 = new Error("Initializing node worker failed");
      v1539.cause = p2373;
      throw v1539;
    });
    this.#l = true;
    return v1538;
  }
  init() {
    if (this.#t?.isTerminated) {
      return Promise.reject(new Error("Worker has been terminated"));
    } else {
      this.#s ||= this._init();
      return this.#s;
    }
  }
  runCommand(p2374) {
    if (!this.#l) {
      throw new Error("Worker has not finished initialising");
    }
    this.#r.port1.postMessage({
      $type: "run",
      $data: p2374
    });
  }
};
function f490(p2375) {
  return new RegExp(p2375.replace(/\*+/g, ".*"));
}
var vC45 = class {
  _isClosed = false;
  _disposables = [];
  eventEmitter = new vC17();
  onChange = this.eventEmitter.event;
  constructor(p2376, p2377) {
    let v1540 = p2376.map(p2378 => f490(p2378));
    let v1541 = p2377.map(p2379 => f490(p2379));
    let vF142 = p2380 => {
      for (let v1542 of v1541) {
        if (v1542.test(p2380)) {
          return false;
        }
      }
      for (let v1543 of v1540) {
        if (v1543.test(p2380)) {
          return true;
        }
      }
    };
    let v1544 = v1518.core.onFSEvent(p2381 => {
      if (!this._isClosed) {
        switch (p2381.type) {
          case "create":
            {
              let vF465 = f465(p2381.parent, p2381.newNode.name);
              if (vF142(vF465)) {
                this.eventEmitter.fire({
                  type: "create",
                  path: vF465
                });
              }
              break;
            }
          case "remove":
            {
              let vF4652 = f465(p2381.parent, p2381.name);
              if (vF142(vF4652)) {
                this.eventEmitter.fire({
                  type: "remove",
                  path: vF4652
                });
              }
              break;
            }
          case "write":
            {
              if (vF142(p2381.path)) {
                this.eventEmitter.fire({
                  type: "change",
                  path: p2381.path
                });
              }
              break;
            }
          case "move":
            {
              if (vF142(p2381.newPath)) {
                this.eventEmitter.fire({
                  type: "rename",
                  oldPath: p2381.oldPath,
                  newPath: p2381.newPath
                });
              }
              break;
            }
        }
      }
    });
    this._disposables.push(v1544);
  }
  close() {
    this._isClosed = true;
    for (let v1545 of this._disposables) {
      try {
        v1545.dispose();
      } catch (_0x4ec866) {
        console.warn(_0x4ec866);
      }
    }
    this.eventEmitter.fire({
      type: "close"
    });
    this.eventEmitter.dispose();
  }
};
var vC46 = class {
  constructor(p2382) {
    this.data = p2382;
    this.name = p2382.name;
    this.type = p2382.type;
  }
  name;
  type;
  isSymbolicLink() {
    return this.type === 2;
  }
  isSocket() {
    return false;
  }
  isFile() {
    return this.type === 1;
  }
  isFIFO() {
    return false;
  }
  isDirectory() {
    return this.type === 0;
  }
  isCharacterDevice() {
    return false;
  }
  isBlockDevice() {
    return false;
  }
};
var v1546 = /^[0-7]+$/;
function f491(p2383, p2384, p2385) {
  p2383 ??= p2385;
  if (typeof p2383 == "string") {
    if (v1546.exec(p2383) === null) {
      throw new Error("invalid mode");
    }
    p2383 = parseInt(p2383, 8);
  }
  vF143(p2383, p2384);
  return p2383;
}
var vC47 = class extends Error {};
var vC48 = class extends Error {};
var vF143 = (p2386, p2387, p2388) => {
  if (typeof p2386 != "number") {
    throw new vC47(p2387, "number", p2386);
  }
  if (!Number.isInteger(p2386)) {
    throw new vC48(p2387, "an integer", p2386);
  }
  let v1547 = p2388 ? 1 : 0;
  let v1548 = 4294967295;
  if (p2386 < v1547 || p2386 > v1548) {
    throw new vC48(p2387, ">= " + v1547 + " && <= " + v1548, p2386);
  }
};
function f492(p2389, p2390 = "flags") {
  if (typeof p2389 == "number") {
    return p2389;
  }
  if (p2389 == null) {
    return v1324.O_RDONLY;
  }
  switch (p2389) {
    case "r":
      return v1324.O_RDONLY;
    case "rs":
    case "sr":
      return v1324.O_RDONLY | v1324.O_SYNC;
    case "r+":
      return v1324.O_RDWR;
    case "rs+":
    case "sr+":
      return v1324.O_RDWR | v1324.O_SYNC;
    case "w":
      return v1324.O_TRUNC | v1324.O_CREAT | v1324.O_WRONLY;
    case "wx":
    case "xw":
      return v1324.O_TRUNC | v1324.O_CREAT | v1324.O_WRONLY | v1324.O_EXCL;
    case "w+":
      return v1324.O_TRUNC | v1324.O_CREAT | v1324.O_RDWR;
    case "wx+":
    case "xw+":
      return v1324.O_TRUNC | v1324.O_CREAT | v1324.O_RDWR | v1324.O_EXCL;
    case "a":
      return v1324.O_APPEND | v1324.O_CREAT | v1324.O_WRONLY;
    case "ax":
    case "xa":
      return v1324.O_APPEND | v1324.O_CREAT | v1324.O_WRONLY | v1324.O_EXCL;
    case "as":
    case "sa":
      return v1324.O_APPEND | v1324.O_CREAT | v1324.O_WRONLY | v1324.O_SYNC;
    case "a+":
      return v1324.O_APPEND | v1324.O_CREAT | v1324.O_RDWR;
    case "ax+":
    case "xa+":
      return v1324.O_APPEND | v1324.O_CREAT | v1324.O_RDWR | v1324.O_EXCL;
    case "as+":
    case "sa+":
      return v1324.O_APPEND | v1324.O_CREAT | v1324.O_RDWR | v1324.O_SYNC;
  }
  throw new Error("flags invalid");
}
var vVF711 = vF7(vVF3112());
var vC49 = class extends vVF711.Readable {
  _read() {}
};
var vVF712 = vF7(vVF3112());
vVF2();
function f493(p2391) {
  return function (..._0x58385c) {
    return new Promise((p2392, p2393) => {
      setTimeout(() => {
        try {
          let vP2391 = p2391(..._0x58385c);
          p2392(vP2391);
        } catch (_0x4e3788) {
          p2393(_0x4e3788);
        }
      }, 0);
    });
  };
}
function f494(p2394) {
  return function (..._0x21d3a6) {
    let v1549 = _0x21d3a6.pop();
    if (typeof v1549 != "function") {
      throw new Error("No callback provided");
    }
    setTimeout(() => {
      try {
        let vP2394 = p2394(..._0x21d3a6);
        v1549(null, vP2394);
      } catch (_0x5e9995) {
        v1549(_0x5e9995, null);
      }
    }, 0);
  };
}
function f495(p2395, p2396) {
  return function (..._0x2a27c9) {
    let v1550 = _0x2a27c9.pop();
    if (typeof v1550 != "function") {
      throw new Error("No callback provided");
    }
    setTimeout(() => {
      try {
        let vP2395 = p2395(..._0x2a27c9);
        v1550(vP2395);
      } catch {
        v1550(p2396);
      }
    }, 0);
  };
}
var vF493 = f493(f516);
vF493.native = vF493;
var v1551 = {
  readFile: f493(f498),
  writeFile: f493(f500),
  mkdir: f493(f501),
  rmdir: f493(f502),
  rm: f493(f523),
  readdir: f493(f504),
  unlink: f493(f505),
  rename: f493(f506),
  stat: f493(f508),
  lstat: f493(f509),
  symlink: f493(f511),
  link: f493(f512),
  appendFile: f493(f524),
  readlink: f493(f513),
  access: f493(f514),
  copyFile: f493(f515),
  exists: f493(f517),
  chown: f493(f522),
  chmod: f493(f521),
  createReadStream: f520,
  constants: v1324,
  realpath: vF493
};
var vVF713 = vF7(vVF394());
var vVF714 = vF7(vVF3112());
var vF494 = f494(f498);
var vF4942 = f494(f500);
var vF4943 = f494(f501);
var vF4944 = f494(f502);
var vF4945 = f494(f504);
var vF4946 = f494(f505);
var vF4947 = f494(f506);
var vF4948 = f494(f508);
var vF4949 = f494(f509);
var vF49410 = f494(f511);
var vF49411 = f494(f512);
var vF49412 = f494(f523);
var vF49413 = f494(f513);
var vF49414 = f494(f514);
var vF49415 = f494(f515);
var vF495 = f495(f517, false);
var vF49416 = f494(f518);
var vF49417 = f494(f519);
var vF49418 = f494(f510);
var vF49419 = f494(f522);
var vF49420 = f494(f521);
var vF49421 = f494(f524);
var vF49422 = f494(f516);
var vVF49422 = vF49422;
vVF49422.native = vF49422;
var v_0x18e5aa = f516;
v_0x18e5aa.native = f516;
function f496(p2397, p2398) {
  p2398 = p2398 ?? "buffer";
  let vF461 = f461(p2397);
  if (p2398 === "buffer") {
    return vF461;
  } else {
    return vF461.toString(p2398);
  }
}
function f497() {
  return v1518.waitForIdleDependencies();
}
function f498(p2399, p2400) {
  let v1552 = v1518.readFileSync(f463(p2399));
  let v1553 = typeof p2400 == "string" ? p2400 : p2400?.encoding;
  return f496(v1552, v1553);
}
function f499(p2401, p2402) {
  p2402 = p2402 ?? "utf-8";
  return f462(p2401, p2402);
}
function f500(p2403, p2404, p2405) {
  let vF499 = f499(p2404, p2405);
  v1518.writeFileSync(f463(p2403), vF499);
}
function f501(p2406, p2407) {
  v1518.mkdir(f463(p2406), p2407);
}
function f502(p2408, p2409) {
  v1518.rmdir(f463(p2408), p2409);
}
function f503(p2410) {
  return p2410.map(p2411 => typeof p2411 == "string" ? p2411 : new vC46(p2411));
}
function f504(p2412, p2413) {
  let v1554 = v1518.readdir(f463(p2412), p2413);
  return f503(v1554);
}
function f505(p2414) {
  v1518.unlink(f463(p2414));
}
function f506(p2415, p2416) {
  v1518.rename(f463(p2415), p2416);
}
function f507(p2417) {
  return f460(p2417);
}
function f508(p2418, p2419 = {
  throwIfNoEntry: true
}) {
  try {
    return f507(v1518.stat(f463(p2418)));
  } catch (_0x27c152) {
    if (p2419.throwIfNoEntry === false && _0x27c152.code === "ENOENT") {
      return;
    }
    throw _0x27c152;
  }
}
function f509(p2420) {
  return f507(v1518.lstat(f463(p2420)));
}
function f510(p2421) {
  let {
    path: _0x54cd4a
  } = v1555[p2421];
  if (!_0x54cd4a) {
    throw new Error("Could not find path for fd: " + p2421);
  }
  return f507(v1518.stat(_0x54cd4a));
}
function f511(p2422, p2423) {
  v1518.symlink(f463(p2422), f463(p2423));
}
function f512(p2424, p2425) {
  v1518.symlink(f463(p2424), f463(p2425));
}
function f513(p2426) {
  return v1518.readlink(f463(p2426));
}
function f514(p2427) {
  v1518.access(f463(p2427));
}
function f515(p2428, p2429, p2430) {
  v1518.copyFile(f463(p2428), f463(p2429), p2430);
}
function f516(p2431) {
  return v1518.realpath(f463(p2431));
}
function f517(p2432) {
  if (p2432) {
    return v1518.exists(f463(p2432));
  } else {
    return false;
  }
}
var v1555 = {};
function f518(p2433, p2434, p2435) {
  if (arguments.length < 2) {
    p2434 = "r";
    p2435 = 438;
  } else if (typeof p2435 == "function") {
    p2435 = 438;
  } else {
    p2435 = f491(p2435, "mode", 438);
  }
  let v1556 = f492(p2434) & v1324.O_CREAT;
  p2433 = f463(p2433);
  try {
    v1518.access(p2433);
  } catch (_0x2d25b7) {
    if (v1556) {
      f500(p2433, "");
    } else {
      throw _0x2d25b7;
    }
  }
  let v1557 = Math.floor(Math.random() * 100000);
  v1555[v1557] = {
    path: p2433,
    cursor: 0
  };
  return v1557;
}
function f519(p2436) {
  delete v1555[p2436];
}
function f520(p2437) {
  let v1558 = new vC49();
  setTimeout(() => {
    try {
      let vF498 = f498(p2437);
      v1558.push(vF498);
      v1558.push(null);
    } catch (_0x518097) {
      v1558.destroy(_0x518097);
    }
  }, 1);
  return v1558;
}
function f521(p2438) {
  f508(p2438);
}
function f522(p2439) {
  f508(p2439);
}
function f523(p2440, p2441) {
  p2441 = p2441 || {};
  try {
    if (f508(p2440)?.isDirectory()) {
      return f502(p2440, p2441);
    } else {
      return f505(p2440);
    }
  } catch (_0x59b688) {
    if (p2441.force) {
      return;
    }
    throw _0x59b688;
  }
}
function f524(p2442, p2443, p2444) {
  let v1559 = "";
  try {
    v1559 = f498(f463(p2442), p2444 || "utf8");
  } catch (_0x1568cb) {
    if (!_0x1568cb.message.includes("ENOENT")) {
      throw _0x1568cb;
    }
  }
  let v1560 = typeof p2443 == "string" && typeof v1559 == "string" ? v1559 + p2443 : Buffer.concat([Buffer.isBuffer(v1559) ? v1559 : Buffer.from(v1559), Buffer.isBuffer(p2443) ? p2443 : Buffer.from(p2443)]);
  f500(p2442, v1560, p2444);
}
globalThis.global = globalThis;
globalThis.originalConsole = console;
var vF4592 = f459("runtime");
async function f525() {
  let v1561 = vVF72.default.slug();
  let v1562 = new vC22(v1561);
  v1518.isMain = true;
  v1518.core.onFSEvent(p2445 => {
    if ((() => {
      if (p2445.type === "create") {
        let v1563 = p2445.newNode.name;
        if (v1563) {
          return p2445.parent + "/" + v1563 === vF39617;
        }
      } else if (p2445.type === "write") {
        return p2445.path === vF39617;
      }
    })()) {
      v1518.installDependencies().catch(p2446 => {
        console.error("Failed to re-install dependencies upon \"package.json\" change.");
        console.error(p2446);
      });
    }
  });
  v1518.mkdir("/tmp");
  let v1564 = new vC15();
  v1564.on("connect", ({
    cdnUrl: _0x1245b3
  }) => {
    let v1565 = _0x1245b3 || "https://sandpack-cdn-v2.codesandbox.io";
    vF135(v1565, "Failed to connect to Nodebox: the Sandpack CDN URL is not defined");
    v1518.cdnUrl = v1565;
    v1564.send("runtime/ready");
  });
  v1518.packageManager.addEventListener("progress", p2447 => {
    let {
      name: _0x57ecc2,
      totalPending: _0x672825,
      version: _0x52c754
    } = p2447.data;
    v1564.send("worker/progress", {
      status: {
        state: "downloaded_module",
        name: _0x57ecc2,
        totalPending: _0x672825,
        version: _0x52c754
      }
    });
  });
  if (!f517(v1011)) {
    f501(v1011);
  }
  v1564.on("fs/init", ({
    files: _0x95b50
  }) => {
    vF4592("Handling fs/init");
    Object.entries(_0x95b50).map(([v1566, v1567]) => {
      let vF393 = f393(f396(v1011, v1566));
      let vF397 = f397(vF393);
      f501(vF397, {
        recursive: true
      });
      f500(vF393, v1567);
    });
  });
  v1564.on("fs/readFile", ({
    path: _0x6f7804,
    encoding: _0x5d06b4
  }) => ({
    data: f498(f396(v1011, _0x6f7804), _0x5d06b4)
  }));
  v1564.on("fs/writeFile", ({
    path: _0x248aad,
    content: _0x240d1e,
    encoding: _0xd0cff3,
    recursive: _0x460581
  }) => {
    let vF39618 = f396(v1011, _0x248aad);
    if (_0x460581) {
      f501(f397(vF39618), {
        recursive: true
      });
    }
    f500(vF39618, _0x240d1e, _0xd0cff3);
  });
  v1564.on("fs/readdir", ({
    path: _0x2b1147
  }) => ({
    data: f504(f396(v1011, _0x2b1147))
  }));
  v1564.on("fs/mkdir", ({
    path: _0x40d08b,
    recursive: _0x594ec4
  }) => {
    f501(f396(v1011, _0x40d08b), {
      recursive: _0x594ec4
    });
  });
  v1564.on("fs/rm", ({
    path: _0x24e1d2,
    force: _0x255d27,
    recursive: _0xf9e286
  }) => {
    f523(f396(v1011, _0x24e1d2), {
      force: _0x255d27,
      recursive: _0xf9e286
    });
  });
  v1564.on("fs/stat", ({
    path: _0x33c15b
  }) => {
    let vF508 = f508(f396(v1011, _0x33c15b));
    if (!vF508) {
      throw new Error("File not found");
    }
    return {
      data: {
        type: vF508.isFile() ? "file" : vF508.isDirectory() ? "dir" : "link",
        size: vF508.size,
        ino: vF508.ino,
        atimeMs: vF508.atimeMs,
        mtimeMs: vF508.mtimeMs,
        ctimeMs: vF508.ctimeMs,
        blocks: vF508.blocks,
        mode: vF508.mode
      }
    };
  });
  let v1568 = new Map();
  v1564.on("fs/watch", ({
    watcherId: _0x4c5e75,
    includes: _0x409a69,
    excludes: _0x2ff42d
  }) => {
    let v1569 = new vC45(_0x409a69.map(p2448 => f396(v1011, p2448)), _0x2ff42d.map(p2449 => f396(v1011, p2449)));
    v1568.set(_0x4c5e75, v1569);
    let vF144 = p2450 => {
      switch (p2450.type) {
        case "change":
          v1564.send("fs/watch-event", {
            type: "change",
            path: p2450.path.replace(v1011, ""),
            watcherId: _0x4c5e75
          });
          break;
        case "create":
          v1564.send("fs/watch-event", {
            type: "create",
            path: p2450.path.replace(v1011, ""),
            watcherId: _0x4c5e75
          });
          break;
        case "remove":
          v1564.send("fs/watch-event", {
            type: "remove",
            path: p2450.path.replace(v1011, ""),
            watcherId: _0x4c5e75
          });
          break;
        case "rename":
          v1564.send("fs/watch-event", {
            type: "rename",
            oldPath: p2450.oldPath.replace(v1011, ""),
            newPath: p2450.newPath.replace(v1011, ""),
            watcherId: _0x4c5e75
          });
          break;
        case "close":
          v1564.send("fs/watch-event", {
            type: "close",
            watcherId: _0x4c5e75
          });
          break;
      }
    };
    v1569.onChange(vF144);
  });
  v1564.on("fs/unwatch", ({
    watcherId: _0x35b59a
  }) => {
    v1568.get(_0x35b59a)?.close();
  });
  let v1570 = new Map();
  v1564.on("shell/exit", ({
    id: _0x3b61fe
  }) => {
    vF4592("consumer requested to exit shell at worker \"%s\"", _0x3b61fe);
    let v1571 = v1570.get(_0x3b61fe);
    f458(v1571, "Trying to exit a worker that doesn't exist");
    if (v1571) {
      v1571.stop();
      v1570.delete(_0x3b61fe);
    }
  });
  v1564.on("shell/stdin", ({
    workerId: _0x1aed5e,
    data: _0x525c8f
  }) => {
    let v1572 = v1570.get(_0x1aed5e);
    if (v1572) {
      v1572.sendInput(_0x525c8f);
    }
  });
  v1564.on("shell/runCommand", async ({
    command: _0x4c4343,
    args: _0x514ce8,
    options: _0x172d9e
  }) => {
    let v1573 = new vC44(v1562);
    v1564.send("worker/progress", {
      status: {
        state: "downloading_manifest"
      }
    });
    await f497();
    let v1574 = await v1573.init();
    v1570.set(v1574, v1573);
    v1573.emitter.addEventListener("worker/tty:out", ({
      data: _0x1ed13e
    }) => {
      v1564.send("worker/tty", {
        workerId: v1574,
        payload: _0x1ed13e.payload
      });
    });
    v1573.emitter.addEventListener("worker/exit", ({
      data: _0x3ed669
    }) => {
      v1564.send("worker/exit", {
        workerId: v1574,
        exitCode: _0x3ed669.exitCode
      });
    });
    v1573.emitter.addEventListener("worker/error", ({
      data: _0x28d42d
    }) => {
      v1564.send("worker/exit", {
        workerId: v1574,
        exitCode: 1,
        error: _0x28d42d.error
      });
    });
    return new Promise(p2451 => {
      p2451({
        id: v1574
      });
      v1564.send("worker/progress", {
        workerId: v1574,
        status: {
          state: "starting_command"
        }
      });
      let v1575 = new vC16();
      let vF145 = () => {
        v1564.send("worker/progress", {
          workerId: v1574,
          status: {
            state: "command_running"
          }
        });
        v1575.dispose();
      };
      v1573.emitter.addEventListener("worker/started", vF145);
      v1575.onDidDispose(() => v1573.emitter.removeEventListener("worker/started", vF145));
      let v1576 = _0x172d9e.cwd ? f396(v1011, _0x172d9e.cwd) : v1011;
      v1573.runCommand({
        command: _0x4c4343,
        args: _0x514ce8,
        cwd: v1576,
        env: _0x172d9e.env
      });
    });
  });
  v1564.on("preview/get/info", ({
    sourceShellId: _0x392bb5,
    port: _0x29f033
  }) => {
    let v1577 = _0x29f033 || (_0x392bb5 ? v1562.getPortFromShellId(_0x392bb5) : undefined);
    if (!v1577 || !v1562.ports.has(v1577)) {
      return;
    }
    let v1578 = _0x392bb5 || v1562.ports.get(v1577);
    let v1579 = v1562.getBaseLink(v1577);
    return {
      port: v1577,
      url: v1579,
      sourceShellId: v1578
    };
  });
  v1562.emitter.addEventListener("port/ready", p2452 => {
    v1564.send("preview/port/ready", p2452.data);
  });
}
f525().catch(console.error);