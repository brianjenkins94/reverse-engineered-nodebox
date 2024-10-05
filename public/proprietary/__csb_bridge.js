'use strict';

(() => {
  var v = Object.create;
  var v2 = Object.defineProperty;
  var v3 = Object.getOwnPropertyDescriptor;
  var v4 = Object.getOwnPropertyNames;
  var v5 = Object.getPrototypeOf;
  var v6 = Object.prototype.hasOwnProperty;
  var vF = (p, p2) => () => {
    if (!p2) {
      p((p2 = {
        exports: {}
      }).exports, p2);
    }
    return p2.exports;
  };
  var vF2 = (p3, p4, p5, p6) => {
    if (p4 && typeof p4 == "object" || typeof p4 == "function") {
      for (let v7 of v4(p4)) {
        if (!v6.call(p3, v7) && v7 !== p5) {
          v2(p3, v7, {
            get: () => p4[v7],
            enumerable: !(p6 = v3(p4, v7)) || p6.enumerable
          });
        }
      }
    }
    return p3;
  };
  var vF3 = (p7, p8, p9) => {
    p9 = p7 != null ? v(v5(p7)) : {};
    return vF2(p8 || !p7 || !p7.__esModule ? v2(p9, "default", {
      value: p7,
      enumerable: true
    }) : p9, p7);
  };
  var vVF = vF(p10 => {
    'use strict';

    Object.defineProperty(p10, "__esModule", {
      value: true
    });
    p10.createDeferredExecutor = undefined;
    function f() {
      let vF4 = (p11, p12) => {
        vF4.state = "pending";
        vF4.resolve = p13 => {
          if (vF4.state !== "pending") {
            return;
          }
          vF4.result = p13;
          let vF5 = p14 => {
            vF4.state = "fulfilled";
            return p14;
          };
          return p11(p13 instanceof Promise ? p13 : Promise.resolve(p13).then(vF5));
        };
        vF4.reject = p15 => {
          if (vF4.state === "pending") {
            queueMicrotask(() => {
              vF4.state = "rejected";
            });
            return p12(vF4.rejectionReason = p15);
          }
        };
      };
      return vF4;
    }
    p10.createDeferredExecutor = f;
  });
  var vVF2 = vF(p16 => {
    'use strict';

    Object.defineProperty(p16, "__esModule", {
      value: true
    });
    p16.DeferredPromise = undefined;
    var vVVF = vVF();
    var vC = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(p17 = null) {
        let v8 = (0, vVVF.createDeferredExecutor)();
        super((p18, p19) => {
          v8(p18, p19);
          p17?.(v8.resolve, v8.reject);
        });
        this.#e = v8;
        this.resolve = this.#e.resolve;
        this.reject = this.#e.reject;
      }
      get state() {
        return this.#e.state;
      }
      get rejectionReason() {
        return this.#e.rejectionReason;
      }
      then(p20, p21) {
        return this.#t(super.then(p20, p21));
      }
      catch(p22) {
        return this.#t(super.catch(p22));
      }
      finally(p23) {
        return this.#t(super.finally(p23));
      }
      #t(p24) {
        return Object.defineProperties(p24, {
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
    p16.DeferredPromise = vC;
  });
  var vVF3 = vF(p25 => {
    'use strict';

    var v9 = p25 && p25.__createBinding || (Object.create ? function (p26, p27, p28, p29 = p28) {
      var v10 = Object.getOwnPropertyDescriptor(p27, p28);
      if (!v10 || ("get" in v10 ? !p27.__esModule : v10.writable || v10.configurable)) {
        v10 = {
          enumerable: true,
          get: function () {
            return p27[p28];
          }
        };
      }
      Object.defineProperty(p26, p29, v10);
    } : function (p30, p31, p32, p33 = p32) {
      p30[p33] = p31[p32];
    });
    var v11 = p25 && p25.__exportStar || function (p34, p35) {
      for (var v12 in p34) {
        if (v12 !== "default" && !Object.prototype.hasOwnProperty.call(p35, v12)) {
          v9(p35, p34, v12);
        }
      }
    };
    Object.defineProperty(p25, "__esModule", {
      value: true
    });
    v11(vVF(), p25);
    v11(vVF2(), p25);
  });
  var vVF4 = vF((p36, p37) => {
    p37.exports = function (p38, p39) {
      var v13 = "000000000" + p38;
      return v13.substr(v13.length - p39);
    };
  });
  var vVF5 = vF((p40, p41) => {
    var vVVF4 = vVF4();
    var v14 = typeof window == "object" ? window : self;
    var v15 = Object.keys(v14).length;
    var v16 = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var vVVVF4 = vVVF4((v16 + navigator.userAgent.length).toString(36) + v15.toString(36), 4);
    p41.exports = function () {
      return vVVVF4;
    };
  });
  var vVF6 = vF((p42, p43) => {
    var v17;
    var v18 = typeof window !== "undefined" && (window.crypto || window.msCrypto) || typeof self !== "undefined" && self.crypto;
    if (v18) {
      v19 = Math.pow(2, 32) - 1;
      v17 = function () {
        return Math.abs(v18.getRandomValues(new Uint32Array(1))[0] / v19);
      };
    } else {
      v17 = Math.random;
    }
    var v19;
    p43.exports = v17;
  });
  var vVF7 = vF((p44, p45) => {
    var vVVF5 = vVF5();
    var vVVF42 = vVF4();
    var vVVF6 = vVF6();
    var v20 = 0;
    var v21 = 4;
    var v22 = 36;
    var v23 = Math.pow(v22, v21);
    function f2() {
      return vVVF42((vVVF6() * v23 << 0).toString(v22), v21);
    }
    function f3() {
      v20 = v20 < v23 ? v20 : 0;
      v20++;
      return v20 - 1;
    }
    function f4() {
      var v24 = "c";
      var v25 = new Date().getTime().toString(v22);
      var vVVVF42 = vVVF42(f3().toString(v22), v21);
      var vVVVF5 = vVVF5();
      var v26 = f2() + f2();
      return v24 + v25 + vVVVF42 + vVVVF5 + v26;
    }
    f4.slug = function () {
      var v27 = new Date().getTime().toString(36);
      var v28 = f3().toString(36).slice(-4);
      var v29 = vVVF5().slice(0, 1) + vVVF5().slice(-1);
      var v30 = f2().slice(-2);
      return v27.slice(-2) + v28 + v29 + v30;
    };
    f4.isCuid = function (p46) {
      if (typeof p46 != "string") {
        return false;
      } else {
        return !!p46.startsWith("c");
      }
    };
    f4.isSlug = function (p47) {
      if (typeof p47 != "string") {
        return false;
      }
      var v31 = p47.length;
      return v31 >= 7 && v31 <= 10;
    };
    f4.fingerprint = vVVF5;
    p45.exports = f4;
  });
  var v32 = /(%?)(%([sdjo]))/g;
  function f5(p48, p49) {
    switch (p49) {
      case "s":
        return p48;
      case "d":
      case "i":
        return Number(p48);
      case "j":
        return JSON.stringify(p48);
      case "o":
        {
          if (typeof p48 == "string") {
            return p48;
          }
          let v33 = JSON.stringify(p48);
          if (v33 === "{}" || v33 === "[]" || /^\[object .+?\]$/.test(v33)) {
            return p48;
          } else {
            return v33;
          }
        }
    }
  }
  function f6(p50, ..._0x22494b) {
    if (_0x22494b.length === 0) {
      return p50;
    }
    let v34 = 0;
    let v35 = p50.replace(v32, (p51, p52, p53, p54) => {
      let v36 = _0x22494b[v34];
      let vF52 = f5(v36, p54);
      if (p52) {
        return p51;
      } else {
        v34++;
        return vF52;
      }
    });
    if (v34 < _0x22494b.length) {
      v35 += " " + _0x22494b.slice(v34).join(" ");
    }
    v35 = v35.replace(/%{2,2}/g, "%");
    return v35;
  }
  var v37 = 2;
  function f7(p55) {
    if (!p55.stack) {
      return;
    }
    let v38 = p55.stack.split("\n");
    v38.splice(1, v37);
    p55.stack = v38.join("\n");
  }
  var vC2 = class extends Error {
    constructor(p56, ..._0x50ee51) {
      super(p56);
      this.message = p56;
      this.name = "Invariant Violation";
      this.message = f6(p56, ..._0x50ee51);
      f7(this);
    }
  };
  var vF6 = (p57, p58, ..._0x3c771e) => {
    if (!p57) {
      throw new vC2(p58, ..._0x3c771e);
    }
  };
  vF6.as = (p59, p60, p61, ..._0x474a34) => {
    if (!p60) {
      throw p59.prototype.name != null ? new p59(f6(p61, _0x474a34)) : p59(f6(p61, _0x474a34));
    }
  };
  var vVF32 = vF3(vVF3());
  var v39 = window.localStorage.CSB_EMULATOR_DEBUG;
  function f8(p62) {
    return function (p63, ..._0x41272f) {};
  }
  var v40 = "preview-manager";
  var v41 = "preview/ready";
  var v42 = "preview/response";
  var v43 = "preview/manager-ack";
  var v44 = "bridge/init";
  var v45 = "preview/runtime-response";
  var v46 = "bridge/close";
  var vVF33 = vF3(vVF7());
  var v47 = 4294967295;
  function f9(p64, p65, p66) {
    var v48 = p66 / 4294967296;
    var vP66 = p66;
    p64.setUint32(p65, v48);
    p64.setUint32(p65 + 4, vP66);
  }
  function f10(p67, p68, p69) {
    var v49 = Math.floor(p69 / 4294967296);
    var vP69 = p69;
    p67.setUint32(p68, v49);
    p67.setUint32(p68 + 4, vP69);
  }
  function f11(p70, p71) {
    var v50 = p70.getInt32(p71);
    var v51 = p70.getUint32(p71 + 4);
    return v50 * 4294967296 + v51;
  }
  function f12(p72, p73) {
    var v52 = p72.getUint32(p73);
    var v53 = p72.getUint32(p73 + 4);
    return v52 * 4294967296 + v53;
  }
  var v54 = (typeof process === "undefined" || (process == null ? undefined : process.env)?.TEXT_ENCODING !== "never") && typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined";
  function f13(p74) {
    for (var v55 = p74.length, v56 = 0, v57 = 0; v57 < v55;) {
      var v58 = p74.charCodeAt(v57++);
      if ((v58 & 4294967168) === 0) {
        v56++;
        continue;
      } else if ((v58 & 4294965248) === 0) {
        v56 += 2;
      } else {
        if (v58 >= 55296 && v58 <= 56319 && v57 < v55) {
          var v59 = p74.charCodeAt(v57);
          if ((v59 & 64512) === 56320) {
            ++v57;
            v58 = ((v58 & 1023) << 10) + (v59 & 1023) + 65536;
          }
        }
        if ((v58 & 4294901760) === 0) {
          v56 += 3;
        } else {
          v56 += 4;
        }
      }
    }
    return v56;
  }
  function f14(p75, p76, p77) {
    for (var v60 = p75.length, vP77 = p77, v61 = 0; v61 < v60;) {
      var v62 = p75.charCodeAt(v61++);
      if ((v62 & 4294967168) === 0) {
        p76[vP77++] = v62;
        continue;
      } else if ((v62 & 4294965248) === 0) {
        p76[vP77++] = v62 >> 6 & 31 | 192;
      } else {
        if (v62 >= 55296 && v62 <= 56319 && v61 < v60) {
          var v63 = p75.charCodeAt(v61);
          if ((v63 & 64512) === 56320) {
            ++v61;
            v62 = ((v62 & 1023) << 10) + (v63 & 1023) + 65536;
          }
        }
        if ((v62 & 4294901760) === 0) {
          p76[vP77++] = v62 >> 12 & 15 | 224;
          p76[vP77++] = v62 >> 6 & 63 | 128;
        } else {
          p76[vP77++] = v62 >> 18 & 7 | 240;
          p76[vP77++] = v62 >> 12 & 63 | 128;
          p76[vP77++] = v62 >> 6 & 63 | 128;
        }
      }
      p76[vP77++] = v62 & 63 | 128;
    }
  }
  var v64 = v54 ? new TextEncoder() : undefined;
  var v65 = v54 ? typeof process !== "undefined" && (process == null ? undefined : process.env)?.TEXT_ENCODING !== "force" ? 200 : 0 : v47;
  function f15(p78, p79, p80) {
    p79.set(v64.encode(p78), p80);
  }
  function f16(p81, p82, p83) {
    v64.encodeInto(p81, p82.subarray(p83));
  }
  var v66 = v64?.encodeInto ? f16 : f15;
  var v67 = 4096;
  function f17(p84, p85, p86) {
    for (var vP85 = p85, v68 = vP85 + p86, v69 = [], v70 = ""; vP85 < v68;) {
      var v71 = p84[vP85++];
      if ((v71 & 128) === 0) {
        v69.push(v71);
      } else if ((v71 & 224) === 192) {
        var v72 = p84[vP85++] & 63;
        v69.push((v71 & 31) << 6 | v72);
      } else if ((v71 & 240) === 224) {
        var v72 = p84[vP85++] & 63;
        var v73 = p84[vP85++] & 63;
        v69.push((v71 & 31) << 12 | v72 << 6 | v73);
      } else if ((v71 & 248) === 240) {
        var v72 = p84[vP85++] & 63;
        var v73 = p84[vP85++] & 63;
        var v74 = p84[vP85++] & 63;
        var v75 = (v71 & 7) << 18 | v72 << 12 | v73 << 6 | v74;
        if (v75 > 65535) {
          v75 -= 65536;
          v69.push(v75 >>> 10 & 1023 | 55296);
          v75 = v75 & 1023 | 56320;
        }
        v69.push(v75);
      } else {
        v69.push(v71);
      }
      if (v69.length >= v67) {
        v70 += String.fromCharCode.apply(String, v69);
        v69.length = 0;
      }
    }
    if (v69.length > 0) {
      v70 += String.fromCharCode.apply(String, v69);
    }
    return v70;
  }
  var v76 = v54 ? new TextDecoder() : null;
  var v77 = v54 ? typeof process !== "undefined" && (process == null ? undefined : process.env)?.TEXT_DECODER !== "force" ? 200 : 0 : v47;
  function f18(p87, p88, p89) {
    var v78 = p87.subarray(p88, p88 + p89);
    return v76.decode(v78);
  }
  var vF7 = function () {
    function f19(p90, p91) {
      this.type = p90;
      this.data = p91;
    }
    return f19;
  }();
  var vF8 = function () {
    function f20(p92, p93) {
      f20 = Object.setPrototypeOf || {
        "__proto__": []
      } instanceof Array && function (p94, p95) {
        p94.__proto__ = p95;
      } || function (p96, p97) {
        for (var v79 in p97) {
          if (Object.prototype.hasOwnProperty.call(p97, v79)) {
            p96[v79] = p97[v79];
          }
        }
      };
      return f20(p92, p93);
    }
    return function (p98, p99) {
      if (typeof p99 != "function" && p99 !== null) {
        throw new TypeError("Class extends value " + String(p99) + " is not a constructor or null");
      }
      f20(p98, p99);
      function f21() {
        this.constructor = p98;
      }
      p98.prototype = p99 === null ? Object.create(p99) : (f21.prototype = p99.prototype, new f21());
    };
  }();
  var vF9 = function (p100) {
    vF8(f22, p100);
    function f22(p101) {
      var v80 = p100.call(this, p101) || this;
      var v81 = Object.create(f22.prototype);
      Object.setPrototypeOf(v80, v81);
      Object.defineProperty(v80, "name", {
        configurable: true,
        enumerable: false,
        value: f22.name
      });
      return v80;
    }
    return f22;
  }(Error);
  var v82 = -1;
  var v83 = 4294967295;
  var v84 = 17179869183;
  function f23(p102) {
    var v85 = p102.sec;
    var v86 = p102.nsec;
    if (v85 >= 0 && v86 >= 0 && v85 <= v84) {
      if (v86 === 0 && v85 <= v83) {
        var v87 = new Uint8Array(4);
        var v88 = new DataView(v87.buffer);
        v88.setUint32(0, v85);
        return v87;
      } else {
        var v89 = v85 / 4294967296;
        var v90 = v85 & 4294967295;
        var v87 = new Uint8Array(8);
        var v88 = new DataView(v87.buffer);
        v88.setUint32(0, v86 << 2 | v89 & 3);
        v88.setUint32(4, v90);
        return v87;
      }
    } else {
      var v87 = new Uint8Array(12);
      var v88 = new DataView(v87.buffer);
      v88.setUint32(0, v86);
      f10(v88, 4, v85);
      return v87;
    }
  }
  function f24(p103) {
    var v91 = p103.getTime();
    var v92 = Math.floor(v91 / 1000);
    var v93 = (v91 - v92 * 1000) * 1000000;
    var v94 = Math.floor(v93 / 1000000000);
    return {
      sec: v92 + v94,
      nsec: v93 - v94 * 1000000000
    };
  }
  function f25(p104) {
    if (p104 instanceof Date) {
      var vF24 = f24(p104);
      return f23(vF24);
    } else {
      return null;
    }
  }
  function f26(p105) {
    var v95 = new DataView(p105.buffer, p105.byteOffset, p105.byteLength);
    switch (p105.byteLength) {
      case 4:
        {
          var v96 = v95.getUint32(0);
          var v97 = 0;
          return {
            sec: v96,
            nsec: v97
          };
        }
      case 8:
        {
          var v98 = v95.getUint32(0);
          var v99 = v95.getUint32(4);
          var v96 = (v98 & 3) * 4294967296 + v99;
          var v97 = v98 >>> 2;
          return {
            sec: v96,
            nsec: v97
          };
        }
      case 12:
        {
          var v96 = f11(v95, 4);
          var v97 = v95.getUint32(0);
          return {
            sec: v96,
            nsec: v97
          };
        }
      default:
        throw new vF9(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${p105.length}`);
    }
  }
  function f27(p106) {
    var vF26 = f26(p106);
    return new Date(vF26.sec * 1000 + vF26.nsec / 1000000);
  }
  var v100 = {
    type: v82,
    encode: f25,
    decode: f27
  };
  var vF10 = function () {
    function f28() {
      this.builtInEncoders = [];
      this.builtInDecoders = [];
      this.encoders = [];
      this.decoders = [];
      this.register(v100);
    }
    f28.prototype.register = function (p107) {
      var v101 = p107.type;
      var v102 = p107.encode;
      var v103 = p107.decode;
      if (v101 >= 0) {
        this.encoders[v101] = v102;
        this.decoders[v101] = v103;
      } else {
        var v104 = 1 + v101;
        this.builtInEncoders[v104] = v102;
        this.builtInDecoders[v104] = v103;
      }
    };
    f28.prototype.tryToEncode = function (p108, p109) {
      for (var v105 = 0; v105 < this.builtInEncoders.length; v105++) {
        var v106 = this.builtInEncoders[v105];
        if (v106 != null) {
          var vV106 = v106(p108, p109);
          if (vV106 != null) {
            var v107 = -1 - v105;
            return new vF7(v107, vV106);
          }
        }
      }
      for (var v105 = 0; v105 < this.encoders.length; v105++) {
        var v106 = this.encoders[v105];
        if (v106 != null) {
          var vV106 = v106(p108, p109);
          if (vV106 != null) {
            var v107 = v105;
            return new vF7(v107, vV106);
          }
        }
      }
      if (p108 instanceof vF7) {
        return p108;
      } else {
        return null;
      }
    };
    f28.prototype.decode = function (p110, p111, p112) {
      var v108 = p111 < 0 ? this.builtInDecoders[-1 - p111] : this.decoders[p111];
      if (v108) {
        return v108(p110, p111, p112);
      } else {
        return new vF7(p111, p110);
      }
    };
    f28.defaultCodec = new f28();
    return f28;
  }();
  function f29(p113) {
    if (p113 instanceof Uint8Array) {
      return p113;
    } else if (ArrayBuffer.isView(p113)) {
      return new Uint8Array(p113.buffer, p113.byteOffset, p113.byteLength);
    } else if (p113 instanceof ArrayBuffer) {
      return new Uint8Array(p113);
    } else {
      return Uint8Array.from(p113);
    }
  }
  function f30(p114) {
    if (p114 instanceof ArrayBuffer) {
      return new DataView(p114);
    }
    var vF29 = f29(p114);
    return new DataView(vF29.buffer, vF29.byteOffset, vF29.byteLength);
  }
  var v109 = 100;
  var v110 = 2048;
  var vF11 = function () {
    function f31(p115 = vF10.defaultCodec, p116 = undefined, p117 = v109, p118 = v110, p119 = false, p120 = false, p121 = false, p122 = false) {
      this.extensionCodec = p115;
      this.context = p116;
      this.maxDepth = p117;
      this.initialBufferSize = p118;
      this.sortKeys = p119;
      this.forceFloat32 = p120;
      this.ignoreUndefined = p121;
      this.forceIntegerToFloat = p122;
      this.pos = 0;
      this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
      this.bytes = new Uint8Array(this.view.buffer);
    }
    f31.prototype.reinitializeState = function () {
      this.pos = 0;
    };
    f31.prototype.encodeSharedRef = function (p123) {
      this.reinitializeState();
      this.doEncode(p123, 1);
      return this.bytes.subarray(0, this.pos);
    };
    f31.prototype.encode = function (p124) {
      this.reinitializeState();
      this.doEncode(p124, 1);
      return this.bytes.slice(0, this.pos);
    };
    f31.prototype.doEncode = function (p125, p126) {
      if (p126 > this.maxDepth) {
        throw new Error(`Too deep objects in depth ${p126}`);
      }
      if (p125 == null) {
        this.encodeNil();
      } else if (typeof p125 == "boolean") {
        this.encodeBoolean(p125);
      } else if (typeof p125 == "number") {
        this.encodeNumber(p125);
      } else if (typeof p125 == "string") {
        this.encodeString(p125);
      } else {
        this.encodeObject(p125, p126);
      }
    };
    f31.prototype.ensureBufferSizeToWrite = function (p127) {
      var v111 = this.pos + p127;
      if (this.view.byteLength < v111) {
        this.resizeBuffer(v111 * 2);
      }
    };
    f31.prototype.resizeBuffer = function (p128) {
      var v112 = new ArrayBuffer(p128);
      var v113 = new Uint8Array(v112);
      var v114 = new DataView(v112);
      v113.set(this.bytes);
      this.view = v114;
      this.bytes = v113;
    };
    f31.prototype.encodeNil = function () {
      this.writeU8(192);
    };
    f31.prototype.encodeBoolean = function (p129) {
      if (p129 === false) {
        this.writeU8(194);
      } else {
        this.writeU8(195);
      }
    };
    f31.prototype.encodeNumber = function (p130) {
      if (Number.isSafeInteger(p130) && !this.forceIntegerToFloat) {
        if (p130 >= 0) {
          if (p130 < 128) {
            this.writeU8(p130);
          } else if (p130 < 256) {
            this.writeU8(204);
            this.writeU8(p130);
          } else if (p130 < 65536) {
            this.writeU8(205);
            this.writeU16(p130);
          } else if (p130 < 4294967296) {
            this.writeU8(206);
            this.writeU32(p130);
          } else {
            this.writeU8(207);
            this.writeU64(p130);
          }
        } else if (p130 >= -32) {
          this.writeU8(p130 + 32 | 224);
        } else if (p130 >= -128) {
          this.writeU8(208);
          this.writeI8(p130);
        } else if (p130 >= -32768) {
          this.writeU8(209);
          this.writeI16(p130);
        } else if (p130 >= -2147483648) {
          this.writeU8(210);
          this.writeI32(p130);
        } else {
          this.writeU8(211);
          this.writeI64(p130);
        }
      } else if (this.forceFloat32) {
        this.writeU8(202);
        this.writeF32(p130);
      } else {
        this.writeU8(203);
        this.writeF64(p130);
      }
    };
    f31.prototype.writeStringHeader = function (p131) {
      if (p131 < 32) {
        this.writeU8(160 + p131);
      } else if (p131 < 256) {
        this.writeU8(217);
        this.writeU8(p131);
      } else if (p131 < 65536) {
        this.writeU8(218);
        this.writeU16(p131);
      } else if (p131 < 4294967296) {
        this.writeU8(219);
        this.writeU32(p131);
      } else {
        throw new Error(`Too long string: ${p131} bytes in UTF-8`);
      }
    };
    f31.prototype.encodeString = function (p132) {
      var v115 = 5;
      var v116 = p132.length;
      if (v116 > v65) {
        var vF13 = f13(p132);
        this.ensureBufferSizeToWrite(v115 + vF13);
        this.writeStringHeader(vF13);
        v66(p132, this.bytes, this.pos);
        this.pos += vF13;
      } else {
        var vF13 = f13(p132);
        this.ensureBufferSizeToWrite(v115 + vF13);
        this.writeStringHeader(vF13);
        f14(p132, this.bytes, this.pos);
        this.pos += vF13;
      }
    };
    f31.prototype.encodeObject = function (p133, p134) {
      var v117 = this.extensionCodec.tryToEncode(p133, this.context);
      if (v117 != null) {
        this.encodeExtension(v117);
      } else if (Array.isArray(p133)) {
        this.encodeArray(p133, p134);
      } else if (ArrayBuffer.isView(p133)) {
        this.encodeBinary(p133);
      } else if (typeof p133 == "object") {
        this.encodeMap(p133, p134);
      } else {
        throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(p133)}`);
      }
    };
    f31.prototype.encodeBinary = function (p135) {
      var v118 = p135.byteLength;
      if (v118 < 256) {
        this.writeU8(196);
        this.writeU8(v118);
      } else if (v118 < 65536) {
        this.writeU8(197);
        this.writeU16(v118);
      } else if (v118 < 4294967296) {
        this.writeU8(198);
        this.writeU32(v118);
      } else {
        throw new Error(`Too large binary: ${v118}`);
      }
      var vF292 = f29(p135);
      this.writeU8a(vF292);
    };
    f31.prototype.encodeArray = function (p136, p137) {
      var v119 = p136.length;
      if (v119 < 16) {
        this.writeU8(144 + v119);
      } else if (v119 < 65536) {
        this.writeU8(220);
        this.writeU16(v119);
      } else if (v119 < 4294967296) {
        this.writeU8(221);
        this.writeU32(v119);
      } else {
        throw new Error(`Too large array: ${v119}`);
      }
      for (var v120 = 0, vP136 = p136; v120 < vP136.length; v120++) {
        var v121 = vP136[v120];
        this.doEncode(v121, p137 + 1);
      }
    };
    f31.prototype.countWithoutUndefined = function (p138, p139) {
      var v122 = 0;
      for (var v123 = 0, vP139 = p139; v123 < vP139.length; v123++) {
        var v124 = vP139[v123];
        if (p138[v124] !== undefined) {
          v122++;
        }
      }
      return v122;
    };
    f31.prototype.encodeMap = function (p140, p141) {
      var v125 = Object.keys(p140);
      if (this.sortKeys) {
        v125.sort();
      }
      var v126 = this.ignoreUndefined ? this.countWithoutUndefined(p140, v125) : v125.length;
      if (v126 < 16) {
        this.writeU8(128 + v126);
      } else if (v126 < 65536) {
        this.writeU8(222);
        this.writeU16(v126);
      } else if (v126 < 4294967296) {
        this.writeU8(223);
        this.writeU32(v126);
      } else {
        throw new Error(`Too large map object: ${v126}`);
      }
      for (var v127 = 0, vV125 = v125; v127 < vV125.length; v127++) {
        var v128 = vV125[v127];
        var v129 = p140[v128];
        if (!this.ignoreUndefined || v129 !== undefined) {
          this.encodeString(v128);
          this.doEncode(v129, p141 + 1);
        }
      }
    };
    f31.prototype.encodeExtension = function (p142) {
      var v130 = p142.data.length;
      if (v130 === 1) {
        this.writeU8(212);
      } else if (v130 === 2) {
        this.writeU8(213);
      } else if (v130 === 4) {
        this.writeU8(214);
      } else if (v130 === 8) {
        this.writeU8(215);
      } else if (v130 === 16) {
        this.writeU8(216);
      } else if (v130 < 256) {
        this.writeU8(199);
        this.writeU8(v130);
      } else if (v130 < 65536) {
        this.writeU8(200);
        this.writeU16(v130);
      } else if (v130 < 4294967296) {
        this.writeU8(201);
        this.writeU32(v130);
      } else {
        throw new Error(`Too large extension object: ${v130}`);
      }
      this.writeI8(p142.type);
      this.writeU8a(p142.data);
    };
    f31.prototype.writeU8 = function (p143) {
      this.ensureBufferSizeToWrite(1);
      this.view.setUint8(this.pos, p143);
      this.pos++;
    };
    f31.prototype.writeU8a = function (p144) {
      var v131 = p144.length;
      this.ensureBufferSizeToWrite(v131);
      this.bytes.set(p144, this.pos);
      this.pos += v131;
    };
    f31.prototype.writeI8 = function (p145) {
      this.ensureBufferSizeToWrite(1);
      this.view.setInt8(this.pos, p145);
      this.pos++;
    };
    f31.prototype.writeU16 = function (p146) {
      this.ensureBufferSizeToWrite(2);
      this.view.setUint16(this.pos, p146);
      this.pos += 2;
    };
    f31.prototype.writeI16 = function (p147) {
      this.ensureBufferSizeToWrite(2);
      this.view.setInt16(this.pos, p147);
      this.pos += 2;
    };
    f31.prototype.writeU32 = function (p148) {
      this.ensureBufferSizeToWrite(4);
      this.view.setUint32(this.pos, p148);
      this.pos += 4;
    };
    f31.prototype.writeI32 = function (p149) {
      this.ensureBufferSizeToWrite(4);
      this.view.setInt32(this.pos, p149);
      this.pos += 4;
    };
    f31.prototype.writeF32 = function (p150) {
      this.ensureBufferSizeToWrite(4);
      this.view.setFloat32(this.pos, p150);
      this.pos += 4;
    };
    f31.prototype.writeF64 = function (p151) {
      this.ensureBufferSizeToWrite(8);
      this.view.setFloat64(this.pos, p151);
      this.pos += 8;
    };
    f31.prototype.writeU64 = function (p152) {
      this.ensureBufferSizeToWrite(8);
      f9(this.view, this.pos, p152);
      this.pos += 8;
    };
    f31.prototype.writeI64 = function (p153) {
      this.ensureBufferSizeToWrite(8);
      f10(this.view, this.pos, p153);
      this.pos += 8;
    };
    return f31;
  }();
  var v132 = {};
  function f32(p154, p155 = v132) {
    var v133 = new vF11(p155.extensionCodec, p155.context, p155.maxDepth, p155.initialBufferSize, p155.sortKeys, p155.forceFloat32, p155.ignoreUndefined, p155.forceIntegerToFloat);
    return v133.encodeSharedRef(p154);
  }
  function f33(p156) {
    return `${p156 < 0 ? "-" : ""}0x${Math.abs(p156).toString(16).padStart(2, "0")}`;
  }
  var v134 = 16;
  var v135 = 16;
  var vF12 = function () {
    function f34(p157 = v134, p158 = v135) {
      this.maxKeyLength = p157;
      this.maxLengthPerKey = p158;
      this.hit = 0;
      this.miss = 0;
      this.caches = [];
      for (var v136 = 0; v136 < this.maxKeyLength; v136++) {
        this.caches.push([]);
      }
    }
    f34.prototype.canBeCached = function (p159) {
      return p159 > 0 && p159 <= this.maxKeyLength;
    };
    f34.prototype.find = function (p160, p161, p162) {
      var v137 = this.caches[p162 - 1];
      _0x2d51f0: for (var v138 = 0, vV137 = v137; v138 < vV137.length; v138++) {
        var v139 = vV137[v138];
        var v140 = v139.bytes;
        for (var v141 = 0; v141 < p162; v141++) {
          if (v140[v141] !== p160[p161 + v141]) {
            continue _0x2d51f0;
          }
        }
        return v139.str;
      }
      return null;
    };
    f34.prototype.store = function (p163, p164) {
      var v142 = this.caches[p163.length - 1];
      var v143 = {
        bytes: p163,
        str: p164
      };
      if (v142.length >= this.maxLengthPerKey) {
        v142[Math.random() * v142.length | 0] = v143;
      } else {
        v142.push(v143);
      }
    };
    f34.prototype.decode = function (p165, p166, p167) {
      var v144 = this.find(p165, p166, p167);
      if (v144 != null) {
        this.hit++;
        return v144;
      }
      this.miss++;
      var vF17 = f17(p165, p166, p167);
      var v145 = Uint8Array.prototype.slice.call(p165, p166, p166 + p167);
      this.store(v145, vF17);
      return vF17;
    };
    return f34;
  }();
  function f35(p168, p169, p170, p171) {
    function f36(p172) {
      if (p172 instanceof p170) {
        return p172;
      } else {
        return new p170(function (p173) {
          p173(p172);
        });
      }
    }
    return new (p170 ||= Promise)(function (p174, p175) {
      function f37(p176) {
        try {
          f39(p171.next(p176));
        } catch (_0x58ac72) {
          p175(_0x58ac72);
        }
      }
      function f38(p177) {
        try {
          f39(p171.throw(p177));
        } catch (_0x417050) {
          p175(_0x417050);
        }
      }
      function f39(p178) {
        if (p178.done) {
          p174(p178.value);
        } else {
          f36(p178.value).then(f37, f38);
        }
      }
      f39((p171 = p171.apply(p168, p169 || [])).next());
    });
  }
  function f40(p179, p180) {
    var v146 = {
      label: 0,
      sent: function () {
        if (v149[0] & 1) {
          throw v149[1];
        }
        return v149[1];
      },
      trys: [],
      ops: []
    };
    var v147;
    var v148;
    var v149;
    var v150;
    v150 = {
      next: f41(0),
      throw: f41(1),
      return: f41(2)
    };
    if (typeof Symbol == "function") {
      v150[Symbol.iterator] = function () {
        return this;
      };
    }
    return v150;
    function f41(p181) {
      return function (p182) {
        return f42([p181, p182]);
      };
    }
    function f42(p183) {
      if (v147) {
        throw new TypeError("Generator is already executing.");
      }
      while (v146) {
        try {
          v147 = 1;
          if (v148 && (v149 = p183[0] & 2 ? v148.return : p183[0] ? v148.throw || ((v149 = v148.return) && v149.call(v148), 0) : v148.next) && !(v149 = v149.call(v148, p183[1])).done) {
            return v149;
          }
          v148 = 0;
          if (v149) {
            p183 = [p183[0] & 2, v149.value];
          }
          switch (p183[0]) {
            case 0:
            case 1:
              v149 = p183;
              break;
            case 4:
              v146.label++;
              return {
                value: p183[1],
                done: false
              };
            case 5:
              v146.label++;
              v148 = p183[1];
              p183 = [0];
              continue;
            case 7:
              p183 = v146.ops.pop();
              v146.trys.pop();
              continue;
            default:
              v149 = v146.trys;
              if (!(v149 = v149.length > 0 && v149[v149.length - 1]) && (p183[0] === 6 || p183[0] === 2)) {
                v146 = 0;
                continue;
              }
              if (p183[0] === 3 && (!v149 || p183[1] > v149[0] && p183[1] < v149[3])) {
                v146.label = p183[1];
                break;
              }
              if (p183[0] === 6 && v146.label < v149[1]) {
                v146.label = v149[1];
                v149 = p183;
                break;
              }
              if (v149 && v146.label < v149[2]) {
                v146.label = v149[2];
                v146.ops.push(p183);
                break;
              }
              if (v149[2]) {
                v146.ops.pop();
              }
              v146.trys.pop();
              continue;
          }
          p183 = p180.call(p179, v146);
        } catch (_0x1f512d) {
          p183 = [6, _0x1f512d];
          v148 = 0;
        } finally {
          v147 = v149 = 0;
        }
      }
      if (p183[0] & 5) {
        throw p183[1];
      }
      return {
        value: p183[0] ? p183[1] : undefined,
        done: true
      };
    }
  }
  function f43(p184) {
    if (!Symbol.asyncIterator) {
      throw new TypeError("Symbol.asyncIterator is not defined.");
    }
    var v151 = p184[Symbol.asyncIterator];
    var v152;
    if (v151) {
      return v151.call(p184);
    } else {
      p184 = typeof __values == "function" ? __values(p184) : p184[Symbol.iterator]();
      v152 = {};
      f44("next");
      f44("throw");
      f44("return");
      v152[Symbol.asyncIterator] = function () {
        return this;
      };
      return v152;
    }
    function f44(p185) {
      v152[p185] = p184[p185] && function (p186) {
        return new Promise(function (p187, p188) {
          p186 = p184[p185](p186);
          f45(p187, p188, p186.done, p186.value);
        });
      };
    }
    function f45(p189, p190, p191, p192) {
      Promise.resolve(p192).then(function (p193) {
        p189({
          value: p193,
          done: p191
        });
      }, p190);
    }
  }
  function f46(p194) {
    if (this instanceof f46) {
      this.v = p194;
      return this;
    } else {
      return new f46(p194);
    }
  }
  function f47(p195, p196, p197) {
    if (!Symbol.asyncIterator) {
      throw new TypeError("Symbol.asyncIterator is not defined.");
    }
    var v153 = p197.apply(p195, p196 || []);
    var v154;
    var v155 = [];
    v154 = {};
    f48("next");
    f48("throw");
    f48("return");
    v154[Symbol.asyncIterator] = function () {
      return this;
    };
    return v154;
    function f48(p198) {
      if (v153[p198]) {
        v154[p198] = function (p199) {
          return new Promise(function (p200, p201) {
            if (!(v155.push([p198, p199, p200, p201]) > 1)) {
              f49(p198, p199);
            }
          });
        };
      }
    }
    function f49(p202, p203) {
      try {
        f50(v153[p202](p203));
      } catch (_0x4057d1) {
        f53(v155[0][3], _0x4057d1);
      }
    }
    function f50(p204) {
      if (p204.value instanceof f46) {
        Promise.resolve(p204.value.v).then(f51, f52);
      } else {
        f53(v155[0][2], p204);
      }
    }
    function f51(p205) {
      f49("next", p205);
    }
    function f52(p206) {
      f49("throw", p206);
    }
    function f53(p207, p208) {
      p207(p208);
      v155.shift();
      if (v155.length) {
        f49(v155[0][0], v155[0][1]);
      }
    }
  }
  function f54(p209) {
    var v156 = typeof p209;
    return v156 === "string" || v156 === "number";
  }
  var v157 = -1;
  var v158 = new DataView(new ArrayBuffer(0));
  var v159 = new Uint8Array(v158.buffer);
  var vF14 = function () {
    try {
      v158.getInt8(0);
    } catch (_0x5e3736) {
      return _0x5e3736.constructor;
    }
    throw new Error("never reached");
  }();
  var v160 = new vF14("Insufficient data");
  var v161 = new vF12();
  var vF15 = function () {
    function f55(p210 = vF10.defaultCodec, p211 = undefined, p212 = v47, p213 = v47, p214 = v47, p215 = v47, p216 = v47, p217 = v161) {
      this.extensionCodec = p210;
      this.context = p211;
      this.maxStrLength = p212;
      this.maxBinLength = p213;
      this.maxArrayLength = p214;
      this.maxMapLength = p215;
      this.maxExtLength = p216;
      this.keyDecoder = p217;
      this.totalPos = 0;
      this.pos = 0;
      this.view = v158;
      this.bytes = v159;
      this.headByte = v157;
      this.stack = [];
    }
    f55.prototype.reinitializeState = function () {
      this.totalPos = 0;
      this.headByte = v157;
      this.stack.length = 0;
    };
    f55.prototype.setBuffer = function (p218) {
      this.bytes = f29(p218);
      this.view = f30(this.bytes);
      this.pos = 0;
    };
    f55.prototype.appendBuffer = function (p219) {
      if (this.headByte === v157 && !this.hasRemaining(1)) {
        this.setBuffer(p219);
      } else {
        var v162 = this.bytes.subarray(this.pos);
        var vF293 = f29(p219);
        var v163 = new Uint8Array(v162.length + vF293.length);
        v163.set(v162);
        v163.set(vF293, v162.length);
        this.setBuffer(v163);
      }
    };
    f55.prototype.hasRemaining = function (p220) {
      return this.view.byteLength - this.pos >= p220;
    };
    f55.prototype.createExtraByteError = function (p221) {
      var vThis = this;
      var v164 = vThis.view;
      var v165 = vThis.pos;
      return new RangeError(`Extra ${v164.byteLength - v165} of ${v164.byteLength} byte(s) found at buffer[${p221}]`);
    };
    f55.prototype.decode = function (p222) {
      this.reinitializeState();
      this.setBuffer(p222);
      var v166 = this.doDecodeSync();
      if (this.hasRemaining(1)) {
        throw this.createExtraByteError(this.pos);
      }
      return v166;
    };
    f55.prototype.decodeMulti = function (p223) {
      return f40(this, function (p224) {
        switch (p224.label) {
          case 0:
            this.reinitializeState();
            this.setBuffer(p223);
            p224.label = 1;
          case 1:
            if (this.hasRemaining(1)) {
              return [4, this.doDecodeSync()];
            } else {
              return [3, 3];
            }
          case 2:
            p224.sent();
            return [3, 1];
          case 3:
            return [2];
        }
      });
    };
    f55.prototype.decodeAsync = function (p225) {
      var v167;
      var v168;
      var v169;
      var v170;
      return f35(this, undefined, undefined, function () {
        var v171;
        var v172;
        var v173;
        var v174;
        var v175;
        var v176;
        var v177;
        var v178;
        return f40(this, function (p226) {
          switch (p226.label) {
            case 0:
              v171 = false;
              p226.label = 1;
            case 1:
              p226.trys.push([1, 6, 7, 12]);
              v167 = f43(p225);
              p226.label = 2;
            case 2:
              return [4, v167.next()];
            case 3:
              v168 = p226.sent();
              if (v168.done) {
                return [3, 5];
              }
              v173 = v168.value;
              if (v171) {
                throw this.createExtraByteError(this.totalPos);
              }
              this.appendBuffer(v173);
              try {
                v172 = this.doDecodeSync();
                v171 = true;
              } catch (_0x2a0d88) {
                if (!(_0x2a0d88 instanceof vF14)) {
                  throw _0x2a0d88;
                }
              }
              this.totalPos += this.pos;
              p226.label = 4;
            case 4:
              return [3, 2];
            case 5:
              return [3, 12];
            case 6:
              v174 = p226.sent();
              v169 = {
                error: v174
              };
              return [3, 12];
            case 7:
              p226.trys.push([7,, 10, 11]);
              if (v168 && !v168.done && (v170 = v167.return)) {
                return [4, v170.call(v167)];
              } else {
                return [3, 9];
              }
            case 8:
              p226.sent();
              p226.label = 9;
            case 9:
              return [3, 11];
            case 10:
              if (v169) {
                throw v169.error;
              }
              return [7];
            case 11:
              return [7];
            case 12:
              if (v171) {
                if (this.hasRemaining(1)) {
                  throw this.createExtraByteError(this.totalPos);
                }
                return [2, v172];
              }
              v175 = this;
              v176 = v175.headByte;
              v177 = v175.pos;
              v178 = v175.totalPos;
              throw new RangeError(`Insufficient data in parsing ${f33(v176)} at ${v178} (${v177} in the current buffer)`);
          }
        });
      });
    };
    f55.prototype.decodeArrayStream = function (p227) {
      return this.decodeMultiAsync(p227, true);
    };
    f55.prototype.decodeStream = function (p228) {
      return this.decodeMultiAsync(p228, false);
    };
    f55.prototype.decodeMultiAsync = function (p229, p230) {
      return f47(this, arguments, function () {
        var v179;
        var v180;
        var v181;
        var v182;
        var v183;
        var v184;
        var v185;
        var v186;
        var v187;
        return f40(this, function (p231) {
          switch (p231.label) {
            case 0:
              v179 = p230;
              v180 = -1;
              p231.label = 1;
            case 1:
              p231.trys.push([1, 13, 14, 19]);
              v181 = f43(p229);
              p231.label = 2;
            case 2:
              return [4, f46(v181.next())];
            case 3:
              v182 = p231.sent();
              if (v182.done) {
                return [3, 12];
              }
              v183 = v182.value;
              if (p230 && v180 === 0) {
                throw this.createExtraByteError(this.totalPos);
              }
              this.appendBuffer(v183);
              if (v179) {
                v180 = this.readArraySize();
                v179 = false;
                this.complete();
              }
              p231.label = 4;
            case 4:
              p231.trys.push([4, 9,, 10]);
              p231.label = 5;
            case 5:
              return [4, f46(this.doDecodeSync())];
            case 6:
              return [4, p231.sent()];
            case 7:
              p231.sent();
              if (--v180 === 0) {
                return [3, 8];
              } else {
                return [3, 5];
              }
            case 8:
              return [3, 10];
            case 9:
              v184 = p231.sent();
              if (!(v184 instanceof vF14)) {
                throw v184;
              }
              return [3, 10];
            case 10:
              this.totalPos += this.pos;
              p231.label = 11;
            case 11:
              return [3, 2];
            case 12:
              return [3, 19];
            case 13:
              v185 = p231.sent();
              v186 = {
                error: v185
              };
              return [3, 19];
            case 14:
              p231.trys.push([14,, 17, 18]);
              if (v182 && !v182.done && (v187 = v181.return)) {
                return [4, f46(v187.call(v181))];
              } else {
                return [3, 16];
              }
            case 15:
              p231.sent();
              p231.label = 16;
            case 16:
              return [3, 18];
            case 17:
              if (v186) {
                throw v186.error;
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
    f55.prototype.doDecodeSync = function () {
      _0x197063: while (true) {
        var v188 = this.readHeadByte();
        var vUndefined = undefined;
        if (v188 >= 224) {
          vUndefined = v188 - 256;
        } else if (v188 < 192) {
          if (v188 < 128) {
            vUndefined = v188;
          } else if (v188 < 144) {
            var v189 = v188 - 128;
            if (v189 !== 0) {
              this.pushMapState(v189);
              this.complete();
              continue _0x197063;
            } else {
              vUndefined = {};
            }
          } else if (v188 < 160) {
            var v189 = v188 - 144;
            if (v189 !== 0) {
              this.pushArrayState(v189);
              this.complete();
              continue _0x197063;
            } else {
              vUndefined = [];
            }
          } else {
            var v190 = v188 - 160;
            vUndefined = this.decodeUtf8String(v190, 0);
          }
        } else if (v188 === 192) {
          vUndefined = null;
        } else if (v188 === 194) {
          vUndefined = false;
        } else if (v188 === 195) {
          vUndefined = true;
        } else if (v188 === 202) {
          vUndefined = this.readF32();
        } else if (v188 === 203) {
          vUndefined = this.readF64();
        } else if (v188 === 204) {
          vUndefined = this.readU8();
        } else if (v188 === 205) {
          vUndefined = this.readU16();
        } else if (v188 === 206) {
          vUndefined = this.readU32();
        } else if (v188 === 207) {
          vUndefined = this.readU64();
        } else if (v188 === 208) {
          vUndefined = this.readI8();
        } else if (v188 === 209) {
          vUndefined = this.readI16();
        } else if (v188 === 210) {
          vUndefined = this.readI32();
        } else if (v188 === 211) {
          vUndefined = this.readI64();
        } else if (v188 === 217) {
          var v190 = this.lookU8();
          vUndefined = this.decodeUtf8String(v190, 1);
        } else if (v188 === 218) {
          var v190 = this.lookU16();
          vUndefined = this.decodeUtf8String(v190, 2);
        } else if (v188 === 219) {
          var v190 = this.lookU32();
          vUndefined = this.decodeUtf8String(v190, 4);
        } else if (v188 === 220) {
          var v189 = this.readU16();
          if (v189 !== 0) {
            this.pushArrayState(v189);
            this.complete();
            continue _0x197063;
          } else {
            vUndefined = [];
          }
        } else if (v188 === 221) {
          var v189 = this.readU32();
          if (v189 !== 0) {
            this.pushArrayState(v189);
            this.complete();
            continue _0x197063;
          } else {
            vUndefined = [];
          }
        } else if (v188 === 222) {
          var v189 = this.readU16();
          if (v189 !== 0) {
            this.pushMapState(v189);
            this.complete();
            continue _0x197063;
          } else {
            vUndefined = {};
          }
        } else if (v188 === 223) {
          var v189 = this.readU32();
          if (v189 !== 0) {
            this.pushMapState(v189);
            this.complete();
            continue _0x197063;
          } else {
            vUndefined = {};
          }
        } else if (v188 === 196) {
          var v189 = this.lookU8();
          vUndefined = this.decodeBinary(v189, 1);
        } else if (v188 === 197) {
          var v189 = this.lookU16();
          vUndefined = this.decodeBinary(v189, 2);
        } else if (v188 === 198) {
          var v189 = this.lookU32();
          vUndefined = this.decodeBinary(v189, 4);
        } else if (v188 === 212) {
          vUndefined = this.decodeExtension(1, 0);
        } else if (v188 === 213) {
          vUndefined = this.decodeExtension(2, 0);
        } else if (v188 === 214) {
          vUndefined = this.decodeExtension(4, 0);
        } else if (v188 === 215) {
          vUndefined = this.decodeExtension(8, 0);
        } else if (v188 === 216) {
          vUndefined = this.decodeExtension(16, 0);
        } else if (v188 === 199) {
          var v189 = this.lookU8();
          vUndefined = this.decodeExtension(v189, 1);
        } else if (v188 === 200) {
          var v189 = this.lookU16();
          vUndefined = this.decodeExtension(v189, 2);
        } else if (v188 === 201) {
          var v189 = this.lookU32();
          vUndefined = this.decodeExtension(v189, 4);
        } else {
          throw new vF9(`Unrecognized type byte: ${f33(v188)}`);
        }
        this.complete();
        for (var v191 = this.stack; v191.length > 0;) {
          var v192 = v191[v191.length - 1];
          if (v192.type === 0) {
            v192.array[v192.position] = vUndefined;
            v192.position++;
            if (v192.position === v192.size) {
              v191.pop();
              vUndefined = v192.array;
            } else {
              continue _0x197063;
            }
          } else if (v192.type === 1) {
            if (!f54(vUndefined)) {
              throw new vF9("The type of key must be string or number but " + typeof vUndefined);
            }
            if (vUndefined === "__proto__") {
              throw new vF9("The key __proto__ is not allowed");
            }
            v192.key = vUndefined;
            v192.type = 2;
            continue _0x197063;
          } else {
            v192.map[v192.key] = vUndefined;
            v192.readCount++;
            if (v192.readCount === v192.size) {
              v191.pop();
              vUndefined = v192.map;
            } else {
              v192.key = null;
              v192.type = 1;
              continue _0x197063;
            }
          }
        }
        return vUndefined;
      }
    };
    f55.prototype.readHeadByte = function () {
      if (this.headByte === v157) {
        this.headByte = this.readU8();
      }
      return this.headByte;
    };
    f55.prototype.complete = function () {
      this.headByte = v157;
    };
    f55.prototype.readArraySize = function () {
      var v193 = this.readHeadByte();
      switch (v193) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default:
          {
            if (v193 < 160) {
              return v193 - 144;
            }
            throw new vF9(`Unrecognized array type byte: ${f33(v193)}`);
          }
      }
    };
    f55.prototype.pushMapState = function (p232) {
      if (p232 > this.maxMapLength) {
        throw new vF9(`Max length exceeded: map length (${p232}) > maxMapLengthLength (${this.maxMapLength})`);
      }
      this.stack.push({
        type: 1,
        size: p232,
        key: null,
        readCount: 0,
        map: {}
      });
    };
    f55.prototype.pushArrayState = function (p233) {
      if (p233 > this.maxArrayLength) {
        throw new vF9(`Max length exceeded: array length (${p233}) > maxArrayLength (${this.maxArrayLength})`);
      }
      this.stack.push({
        type: 0,
        size: p233,
        array: new Array(p233),
        position: 0
      });
    };
    f55.prototype.decodeUtf8String = function (p234, p235) {
      var v194;
      if (p234 > this.maxStrLength) {
        throw new vF9(`Max length exceeded: UTF-8 byte length (${p234}) > maxStrLength (${this.maxStrLength})`);
      }
      if (this.bytes.byteLength < this.pos + p235 + p234) {
        throw v160;
      }
      var v195 = this.pos + p235;
      var v196;
      if (this.stateIsMapKey() && ((v194 = this.keyDecoder) === null || v194 === undefined ? undefined : v194.canBeCached(p234))) {
        v196 = this.keyDecoder.decode(this.bytes, v195, p234);
      } else if (p234 > v77) {
        v196 = f18(this.bytes, v195, p234);
      } else {
        v196 = f17(this.bytes, v195, p234);
      }
      this.pos += p235 + p234;
      return v196;
    };
    f55.prototype.stateIsMapKey = function () {
      if (this.stack.length > 0) {
        var v197 = this.stack[this.stack.length - 1];
        return v197.type === 1;
      }
      return false;
    };
    f55.prototype.decodeBinary = function (p236, p237) {
      if (p236 > this.maxBinLength) {
        throw new vF9(`Max length exceeded: bin length (${p236}) > maxBinLength (${this.maxBinLength})`);
      }
      if (!this.hasRemaining(p236 + p237)) {
        throw v160;
      }
      var v198 = this.pos + p237;
      var v199 = this.bytes.subarray(v198, v198 + p236);
      this.pos += p237 + p236;
      return v199;
    };
    f55.prototype.decodeExtension = function (p238, p239) {
      if (p238 > this.maxExtLength) {
        throw new vF9(`Max length exceeded: ext length (${p238}) > maxExtLength (${this.maxExtLength})`);
      }
      var v200 = this.view.getInt8(this.pos + p239);
      var v201 = this.decodeBinary(p238, p239 + 1);
      return this.extensionCodec.decode(v201, v200, this.context);
    };
    f55.prototype.lookU8 = function () {
      return this.view.getUint8(this.pos);
    };
    f55.prototype.lookU16 = function () {
      return this.view.getUint16(this.pos);
    };
    f55.prototype.lookU32 = function () {
      return this.view.getUint32(this.pos);
    };
    f55.prototype.readU8 = function () {
      var v202 = this.view.getUint8(this.pos);
      this.pos++;
      return v202;
    };
    f55.prototype.readI8 = function () {
      var v203 = this.view.getInt8(this.pos);
      this.pos++;
      return v203;
    };
    f55.prototype.readU16 = function () {
      var v204 = this.view.getUint16(this.pos);
      this.pos += 2;
      return v204;
    };
    f55.prototype.readI16 = function () {
      var v205 = this.view.getInt16(this.pos);
      this.pos += 2;
      return v205;
    };
    f55.prototype.readU32 = function () {
      var v206 = this.view.getUint32(this.pos);
      this.pos += 4;
      return v206;
    };
    f55.prototype.readI32 = function () {
      var v207 = this.view.getInt32(this.pos);
      this.pos += 4;
      return v207;
    };
    f55.prototype.readU64 = function () {
      var vF122 = f12(this.view, this.pos);
      this.pos += 8;
      return vF122;
    };
    f55.prototype.readI64 = function () {
      var vF112 = f11(this.view, this.pos);
      this.pos += 8;
      return vF112;
    };
    f55.prototype.readF32 = function () {
      var v208 = this.view.getFloat32(this.pos);
      this.pos += 4;
      return v208;
    };
    f55.prototype.readF64 = function () {
      var v209 = this.view.getFloat64(this.pos);
      this.pos += 8;
      return v209;
    };
    return f55;
  }();
  var v210 = {};
  function f56(p240, p241 = v210) {
    var v211 = new vF15(p241.extensionCodec, p241.context, p241.maxStrLength, p241.maxBinLength, p241.maxArrayLength, p241.maxMapLength, p241.maxExtLength);
    return v211.decode(p240);
  }
  var vC3 = class {
    onWillDisposeEmitter = new vC4();
    onWillDispose = this.onWillDisposeEmitter.event;
    onDidDisposeEmitter = new vC4();
    onDidDispose = this.onDidDisposeEmitter.event;
    toDispose = [];
    isDisposed = false;
    onDispose(p242) {
      this.toDispose.push(vC3.create(p242));
    }
    dispose() {
      if (!this.isDisposed) {
        this.onWillDisposeEmitter.fire(null);
        this.isDisposed = true;
        this.toDispose.forEach(p243 => {
          p243.dispose();
        });
        this.onDidDisposeEmitter.fire(null);
        this.onWillDisposeEmitter.dispose();
        this.onDidDisposeEmitter.dispose();
      }
    }
    static is(p244) {
      return typeof p244.dispose == "function";
    }
    static create(p245) {
      return {
        dispose: p245
      };
    }
  };
  var vC4 = class {
    registeredListeners = new Set();
    _event;
    get event() {
      this._event ||= p246 => {
        this.registeredListeners.add(p246);
        return vC3.create(() => {
          this.registeredListeners.delete(p246);
        });
      };
      return this._event;
    }
    fire(p247) {
      this.registeredListeners.forEach(p248 => {
        p248(p247);
      });
    }
    dispose() {
      this.registeredListeners = new Set();
    }
  };
  var v212 = (0, vVF33.default)();
  var vF16 = p249 => f32(p249, {
    ignoreUndefined: true
  });
  var vC5 = class {
    endpoints = new Map();
    nodeMap = new Map();
    onMessageEmitter = new vC4();
    onMessage = this.onMessageEmitter.event;
    constructor() {}
    getEndpointForNode(p250) {
      let v213 = this.nodeMap.get(p250);
      if (v213) {
        let v214 = this.endpoints.get(v213);
        if (v214) {
          return v214;
        }
      }
    }
    addEndpoint(p251, p252) {
      this.endpoints.set(p251, p252);
      p252.onMessage(p253 => this.handleMessage(p253, p251));
      let vVF16 = vF16({
        $type: "router-announce",
        $origin: v212
      });
      p252.send(vVF16, [vVF16.buffer]);
    }
    removeEndpoint(p254) {
      this.endpoints.delete(p254);
    }
    send(p255, p256, p257 = true) {
      let v215 = {
        $type: "router-message",
        $origin: v212,
        $target: p255,
        $data: p256
      };
      if (p255 !== v212) {
        let v216 = this.getEndpointForNode(p255);
        if (!v216) {
          throw new Error("Endpoint " + p255 + " not registered");
        }
        if (p257) {
          let vVF162 = vF16(v215);
          v216.send(vVF162, [vVF162.buffer]);
        } else {
          v216.send(v215, []);
        }
      } else {
        this.onMessageEmitter.fire(v215);
      }
    }
    broadcast(p258, p259, p260) {
      let v217 = {
        $type: "router-broadcast",
        $origin: p260 ?? v212,
        $data: p258
      };
      if (!p259 && !p260) {
        this.onMessageEmitter.fire(v217);
      }
      for (let [v218, v219] of this.endpoints.entries()) {
        if (v218 === p259) {
          continue;
        }
        let vVF163 = vF16(v217);
        v219.send(vVF163, [vVF163.buffer]);
      }
    }
    handleMessage(p261, p262) {
      let v220 = p261 instanceof Uint8Array;
      let v221 = v220 ? f56(p261) : p261;
      if (v221.$origin) {
        if (!this.nodeMap.has(v221.$origin)) {
          this.nodeMap.set(v221.$origin, p262);
        }
        if (v221.$type === "router-broadcast") {
          let vV221 = v221;
          this.broadcast(vV221.$data, p262, vV221.$origin);
          this.onMessageEmitter.fire(v221);
          return;
        }
        if (v221.$type === "router-message") {
          let vV2212 = v221;
          if (vV2212.$target === v212) {
            this.onMessageEmitter.fire(v221);
          } else {
            let v222 = this.getEndpointForNode(vV2212.$target);
            if (v222) {
              v222.send(p261, v220 ? [p261.buffer] : []);
            }
          }
          return;
        }
      }
    }
  };
  var v223;
  function f57() {
    v223 ||= new vC5();
    return v223;
  }
  function f58(p263) {
    let v224 = 8000;
    if (isNaN(v224)) {
      throw new Error("Invalid port");
    }
    return v224;
  }
  function f59(p264) {
    return p264.installing || p264.waiting || p264.active;
  }
  var vF82 = f8("bridge");
  var vF58 = f58(window.location.hostname);
  var v225 = {
    $channel_name: v40,
    $type: v41,
    port: vF58
  };
  var vF57 = f57();
  var v226 = new MessageChannel();
  var v227 = new vVF32.DeferredPromise();
  var v228 = new vVF32.DeferredPromise();
  v227.then(p265 => {
    vF82("worker is ready, initializing MessageChannel...");
    p265.postMessage({
      type: "bridge-channel-init"
    }, [v226.port2]);
    return p265;
  });
  window.addEventListener("unload", () => {
    v226.port1.postMessage({
      $type: v46
    });
  });
  window.addEventListener("message", p266 => {
    switch (p266.data.$type) {
      case v44:
        {
          let v229 = p266.ports[0];
          let v230 = document.getElementById("previews-list");
          let v231 = document.createElement("span");
          v231.setAttribute("data-port", String(vF58));
          v231.innerText = "localhost:" + vF58;
          v230?.appendChild(v231);
          v228.resolve(v229);
          vF57.addEndpoint("parent", {
            send: (p267, p268) => v229.postMessage(p267, p268),
            onMessage: p269 => {
              v229.onmessage = p270 => {
                p269(p270.data);
              };
            }
          });
          break;
        }
    }
  });
  var v232 = new vVF32.DeferredPromise();
  vF57.onMessage(p271 => {
    switch (p271.$data.$type) {
      case v43:
        {
          v232.resolve(p271.$origin);
          break;
        }
      case v42:
        {
          v226.port1.postMessage(p271.$data);
          break;
        }
      case v45:
        {
          v226.port1.postMessage(p271.$data);
          break;
        }
    }
  });
  v226.port1.onmessage = async p272 => {
    let v233 = p272.data;
    vF82("incoming message from the worker", p272.data);
    if (v233.$channel_name === v40) {
      let v234 = await v232;
      vF6(v234, "[bridge] Failed to forward worker message to the PreviewManager: manager node ID is not defined.");
      let vV233 = v233;
      vF57.send(v234, vV233);
    }
  };
  var v235 = new URL("__csb_sw.js", location.origin).href;
  function f60(p273) {
    let vSetInterval = setInterval(() => {
      let v236 = {
        type: "ping"
      };
      p273.postMessage(v236);
    }, 5000);
    p273.addEventListener("statechange", () => {
      if (p273.state === "redundant") {
        clearInterval(vSetInterval);
      }
    });
  }
  async function f61() {
    vF6("serviceWorker" in navigator, "Failed to start the bridge Service Worker: Service Worker API is not supported in this browser");
    let vF18 = async () => {
      let v237 = await navigator.serviceWorker.register("__csb_sw.js", {
        scope: "."
      });
      return f59(v237);
    };
    let v238 = await navigator.serviceWorker.getRegistrations();
    vF82("all registrations", location, v238);
    await Promise.all(v238.map(p274 => {
      let vF59 = f59(p274);
      if (vF59 && vF59.scriptURL !== v235) {
        vF82("found irrelevant worker registration, unregistering...", vF59, p274);
        return p274.unregister();
      }
    }));
    let {
      controller: _0x2934de
    } = navigator.serviceWorker;
    if (!_0x2934de) {
      vF82("bridge is not controlled, registering a new worker...");
      return vF18();
    }
    if (_0x2934de.scriptURL === v235) {
      vF82("bridge is controlled by the correct worker", _0x2934de.scriptURL);
      return _0x2934de;
    }
    let [v239, v240] = await Promise.all([navigator.serviceWorker.getRegistration(_0x2934de.scriptURL), navigator.serviceWorker.getRegistration(v235)]);
    vF82("controller registration:", v239);
    vF82("worker registration:", v240);
    if (!v240) {
      vF82("no registration found for \"%s\", unregistering controller and registering a new worker...", v235);
      await v239?.unregister();
      return vF18();
    }
    if (v240.waiting) {
      vF82("found waiting registration, promoting...");
      await v240.update();
      let vF592 = f59(v240);
      vF6(vF592, "Failed to retrieve the worker instance after promotion: worked does not exist");
      vF6(v240.active, "Failed to promove a waiting Service Worker: expected the worker state to be \"active\" but got \"%s\"", vF592.state);
      return vF592;
    }
    return null;
  }
  async function f62() {
    vF82("starting the bridge...", {
      workerUrl: v235
    });
    let v241 = await f61().catch(p275 => {
      console.error("Failed to ensure the bridge has a Service Worker registered. See details below.");
      console.error(p275);
    });
    await navigator.serviceWorker.ready;
    vF6(v241, "Failed to retrieve the worker instance: worker not found");
    f60(v241);
    v227.resolve(v241);
    let v242 = await v228;
    vF82("preview manager port received", v242);
    vF57.broadcast(v225);
  }
  f62();
})();
