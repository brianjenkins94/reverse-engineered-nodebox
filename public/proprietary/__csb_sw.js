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
    for (let v7 of Object.getOwnPropertyNames(p4)) {
      if (!Object.prototype.hasOwnProperty.call(p3, v7) && v7 !== p5) {
        Object.defineProperty(p3, v7, {
          get: () => p4[v7],
          enumerable: !(p6 = Object.getOwnPropertyDescriptor(p4, v7)) || p6.enumerable
        });
      }
    }
  }
  return p3;
};
var vF3 = (p7, p8, p9) => {
  p9 = p7 != null ? Object.create(Object.getPrototypeOf(p7)) : {};
  return vF2(p8 || !p7 || !p7.__esModule ? Object.defineProperty(p9, "default", {
    value: p7,
    enumerable: true
  }) : p9, p7);
};
var vVF = vF((p10, p11) => {
  p11.exports = function (p12, p13) {
    var v8 = "000000000" + p12;
    return v8.substr(v8.length - p13);
  };
});
var vVF2 = vF((p14, p15) => {
  var vVVF = vVF();
  var v9 = typeof window == "object" ? window : self;
  var v10 = Object.keys(v9).length;
  var v11 = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
  var vVVVF = vVVF((v11 + navigator.userAgent.length).toString(36) + v10.toString(36), 4);
  p15.exports = function () {
    return vVVVF;
  };
});
var vVF3 = vF((p16, p17) => {
  var v12;
  var v13 = typeof window !== "undefined" && (window.crypto || window.msCrypto) || typeof self !== "undefined" && self.crypto;
  if (v13) {
    v14 = Math.pow(2, 32) - 1;
    v12 = function () {
      return Math.abs(v13.getRandomValues(new Uint32Array(1))[0] / v14);
    };
  } else {
    v12 = Math.random;
  }
  var v14;
  p17.exports = v12;
});
var vVF4 = vF((p18, p19) => {
  var vVVF2 = vVF2();
  var vVVF3 = vVF();
  var vVVF32 = vVF3();
  var v15 = 0;
  var v16 = 4;
  var v17 = 36;
  var v18 = Math.pow(v17, v16);
  function f() {
    return vVVF3((vVVF32() * v18 << 0).toString(v17), v16);
  }
  function f2() {
    v15 = v15 < v18 ? v15 : 0;
    v15++;
    return v15 - 1;
  }
  function f3() {
    var v19 = "c";
    var v20 = new Date().getTime().toString(v17);
    var vVVVF3 = vVVF3(f2().toString(v17), v16);
    var vVVVF2 = vVVF2();
    var v21 = f() + f();
    return v19 + v20 + vVVVF3 + vVVVF2 + v21;
  }
  f3.slug = function () {
    var v22 = new Date().getTime().toString(36);
    var v23 = f2().toString(36).slice(-4);
    var v24 = vVVF2().slice(0, 1) + vVVF2().slice(-1);
    var v25 = f().slice(-2);
    return v22.slice(-2) + v23 + v24 + v25;
  };
  f3.isCuid = function (p20) {
    if (typeof p20 != "string") {
      return false;
    } else {
      return !!p20.startsWith("c");
    }
  };
  f3.isSlug = function (p21) {
    if (typeof p21 != "string") {
      return false;
    }
    var v26 = p21.length;
    return v26 >= 7 && v26 <= 10;
  };
  f3.fingerprint = vVVF2;
  p19.exports = f3;
});
var vVF5 = vF(p22 => {
  'use strict';

  Object.defineProperty(p22, "__esModule", {
    value: true
  });
  p22.createDeferredExecutor = undefined;
  function f4() {
    let vF4 = (p23, p24) => {
      vF4.state = "pending";
      vF4.resolve = p25 => {
        if (vF4.state !== "pending") {
          return;
        }
        vF4.result = p25;
        let vF5 = p26 => {
          vF4.state = "fulfilled";
          return p26;
        };
        return p23(p25 instanceof Promise ? p25 : Promise.resolve(p25).then(vF5));
      };
      vF4.reject = p27 => {
        if (vF4.state === "pending") {
          queueMicrotask(() => {
            vF4.state = "rejected";
          });
          return p24(vF4.rejectionReason = p27);
        }
      };
    };
    return vF4;
  }
  p22.createDeferredExecutor = f4;
});
var vVF6 = vF(p28 => {
  'use strict';

  Object.defineProperty(p28, "__esModule", {
    value: true
  });
  p28.DeferredPromise = undefined;
  var vVVF5 = vVF5();
  var vC = class extends Promise {
    #e;
    resolve;
    reject;
    constructor(p29 = null) {
      let v27 = (0, vVVF5.createDeferredExecutor)();
      super((p30, p31) => {
        v27(p30, p31);
        p29?.(v27.resolve, v27.reject);
      });
      this.#e = v27;
      this.resolve = this.#e.resolve;
      this.reject = this.#e.reject;
    }
    get state() {
      return this.#e.state;
    }
    get rejectionReason() {
      return this.#e.rejectionReason;
    }
    then(p32, p33) {
      return this.#t(super.then(p32, p33));
    }
    catch(p34) {
      return this.#t(super.catch(p34));
    }
    finally(p35) {
      return this.#t(super.finally(p35));
    }
    #t(p36) {
      return Object.defineProperties(p36, {
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
  p28.DeferredPromise = vC;
});
var vVF7 = vF(p37 => {
  'use strict';

  var v28 = p37 && p37.__createBinding || (Object.create ? function (p38, p39, p40, p41 = p40) {
    var v29 = Object.getOwnPropertyDescriptor(p39, p40);
    if (!v29 || ("get" in v29 ? !p39.__esModule : v29.writable || v29.configurable)) {
      v29 = {
        enumerable: true,
        get: function () {
          return p39[p40];
        }
      };
    }
    Object.defineProperty(p38, p41, v29);
  } : function (p42, p43, p44, p45 = p44) {
    p42[p45] = p43[p44];
  });
  var v30 = p37 && p37.__exportStar || function (p46, p47) {
    for (var v31 in p46) {
      if (v31 !== "default" && !Object.prototype.hasOwnProperty.call(p47, v31)) {
        v28(p47, p46, v31);
      }
    }
  };
  Object.defineProperty(p37, "__esModule", {
    value: true
  });
  v30(vVF5(), p37);
  v30(vVF6(), p37);
});
var vVF32 = vF3(vVF4());
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
function f6(p50, ..._0x225ce6) {
  if (_0x225ce6.length === 0) {
    return p50;
  }
  let v34 = 0;
  let v35 = p50.replace(v32, (p51, p52, p53, p54) => {
    let v36 = _0x225ce6[v34];
    let vF52 = f5(v36, p54);
    if (p52) {
      return p51;
    } else {
      v34++;
      return vF52;
    }
  });
  if (v34 < _0x225ce6.length) {
    v35 += " " + _0x225ce6.slice(v34).join(" ");
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
  constructor(p56, ..._0x247327) {
    super(p56);
    this.message = p56;
    this.name = "Invariant Violation";
    this.message = f6(p56, ..._0x247327);
    f7(this);
  }
};
var vF6 = (p57, p58, ..._0x133a6b) => {
  if (!p57) {
    throw new vC2(p58, ..._0x133a6b);
  }
};
vF6.as = (p59, p60, p61, ..._0x5eab1c) => {
  if (!p60) {
    throw p59.prototype.name != null ? new p59(f6(p61, _0x5eab1c)) : p59(f6(p61, _0x5eab1c));
  }
};
var vVF33 = vF3(vVF7());
var v39 = "preview-manager";
var v40 = "preview/request";
var v41 = "preview/response";
var v42 = "preview/runtime-request";
var v43 = "preview/runtime-response";
var v44 = "bridge/close";
function f8(p62) {
  let v45 = 8000;
  if (isNaN(v45)) {
    throw new Error("Invalid port");
  }
  return v45;
}
function f9(p63) {
  let v46 = p63.split(".");
  v46.shift();
  return v46.join(".");
}
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", async p64 => {
  p64.waitUntil(self.clients.claim());
});
var v47 = new Map();
var v48 = new Map();
function f10(p65) {
  if (p65.runtimeId) {
    let v49 = v48.get(p65.runtimeId);
    if (v49) {
      v49.postMessage(p65);
    }
  }
}
function f11(p66) {
  p66.onmessage = p67 => {
    let {
      data: _0x432ead
    } = p67;
    switch (_0x432ead.$type) {
      case v41:
        {
          let v_0x432ead = _0x432ead;
          let v50 = v47.get(v_0x432ead.id);
          vF6(v50, "Failed to handle \"PREVIEW_RESPONSE_TYPE\" message from the bridge: unknown request ID \"%s\"", v_0x432ead.id);
          v47.delete(v_0x432ead.id);
          v50.resolve(v_0x432ead.response);
          break;
        }
      case v43:
        {
          f10(_0x432ead);
          break;
        }
      case v44:
        {
          vF12 = f12();
          break;
        }
    }
  };
}
function f12() {
  let v51 = new vVF33.DeferredPromise();
  v51.then(p68 => {
    f11(p68);
    return p68;
  });
  return v51;
}
var vF12 = f12();
async function f13(p69) {
  let v52 = await vF12;
  vF6(v52, "Failed to send message to the bridge: bridge message port is not defined", p69);
  v52.postMessage(p69);
}
self.addEventListener("message", async p70 => {
  if (!p70.data?.type) {
    return;
  }
  switch (p70.data.type) {
    case "bridge-channel-init":
      {
        let v53 = p70.ports[0];
        vF6(vF12.state === "pending", "Failed to initialize bridge: bridge port promise already fulfilled from previous evaluation.");
        vF12.resolve(v53);
        break;
      }
    case "runtime-init":
      {
        let v54 = p70.ports[0];
        let v55 = (0, vVF32.default)();
        v48.set(v55, v54);
        v54.addEventListener("message", p71 => {
          let v56 = {
            $channel_name: v39,
            $type: v42,
            runtimeId: v55,
            data: p71.data
          };
          f13(v56);
        });
        v54.start();
        v54.postMessage({
          type: "ready"
        });
        break;
      }
    case "ping":
      {
        if (!(p70.source instanceof Client)) {
          return;
        }
        let v57 = await self.clients.get(p70.source.id);
        if (v57) {
          v57.postMessage({
            type: "pong"
          });
        }
        break;
      }
  }
});
var v58 = ["127.0.0.1", "localhost"];
function f14(p72, p73) {
  if (v58.includes(p72.hostname)) {
    return +p72.port;
  }
  let vF9 = f9(p73.hostname);
  let vF92 = f9(p72.hostname);
  if (vF9 === vF92) {
    return f8(p72.hostname);
  } else {
    return null;
  }
}
function f15(p74, p75) {
  let v59 = (0, vVF32.default)();
  let v60 = new vVF33.DeferredPromise();
  let vSetTimeout = setTimeout(() => {
    v47.delete(v59);
    v60.reject(new Error("Failed to handle " + p75.method + " " + p75.url + " request: no response received from the BroadcastChannel within timeout. There's likely an issue with the bridge/worker communication."));
  }, 20000);
  let v61 = {
    $channel_name: v39,
    $type: v40,
    port: p74,
    id: v59,
    request: p75
  };
  v47.set(v59, v60);
  f13(v61);
  return v60.finally(() => clearTimeout(vSetTimeout));
}
self.addEventListener("fetch", p76 => {
  let v62 = p76.request.clone();
  let v63 = new URL(v62.url);
  if (v63.pathname.includes("/proprietary/") && !v63.pathname.includes("/escape-hatch/")) {
    if (v63.pathname === "/__csb_runtime.js") {
      return p76.respondWith(fetch("/__csb_runtime.js"));
    } else {
      return undefined;
    }
  }
  let vF14 = f14(v63, location);
  if (v63.pathname.includes("/escape-hatch/") || vF14 == null || isNaN(vF14)) {
    return;
  }
  let vF7 = async p77 => {
    let v64 = {
      host: "localhost:" + p77
    };
    v62.headers.forEach((p78, p79) => {
      v64[p79] = p78;
    });
    let v65 = {
      url: v62.url,
      method: v62.method,
      body: v62.body,
      headers: v64
    };
    let v66 = await f15(p77, v65);
    vF6(v66, "Failed to respond to %s %s: no response received", v65.method, v65.url);
    return new Response(v66.body, {
      headers: v66.headers,
      status: v66.status
    });
  };
  return p76.respondWith(vF7(vF14));
});