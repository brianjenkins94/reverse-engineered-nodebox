
var vF = (p, p2, p3) => p2 in p ? Object.defineProperty(p, p2, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: p3
}) : p[p2] = p3;
var vF2 = (p4, p5) => () => {
  if (!p5) {
    p4((p5 = {
      exports: {}
    }).exports, p5);
  }
  return p5.exports;
};
var vF3 = (p6, p7, p8, p9) => {
  if (p7 && typeof p7 == "object" || typeof p7 == "function") {
    for (let v7 of Object.getOwnPropertyNames(p7)) {
      if (!Object.prototype.hasOwnProperty.call(p6, v7) && v7 !== p8) {
        Object.defineProperty(p6, v7, {
          get: () => p7[v7],
          enumerable: !(p9 = Object.getOwnPropertyDescriptor(p7, v7)) || p9.enumerable
        });
      }
    }
  }
  return p6;
};
var vF4 = (p10, p11, p12) => {
  p12 = p10 != null ? Object.create(Object.getPrototypeOf(p10)) : {};
  return vF3(p11 || !p10 || !p10.__esModule ? Object.defineProperty(p12, "default", {
    value: p10,
    enumerable: true
  }) : p12, p10);
};
var vF5 = (p13, p14, p15) => {
  vF(p13, typeof p14 != "symbol" ? p14 + "" : p14, p15);
  return p15;
};
var vVF2 = vF2((p16, p17) => {
  p17.exports = function (p18, p19) {
    var v8 = "000000000" + p18;
    return v8.substr(v8.length - p19);
  };
});
var vVF22 = vF2((p20, p21) => {
  var vVVF2 = vVF2();
  var v9 = typeof window == "object" ? window : self;
  var v10 = Object.keys(v9).length;
  var v11 = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
  var vVVVF2 = vVVF2((v11 + navigator.userAgent.length).toString(36) + v10.toString(36), 4);
  p21.exports = function () {
    return vVVVF2;
  };
});
var vVF23 = vF2((p22, p23) => {
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
  p23.exports = v12;
});
var vVF24 = vF2((p24, p25) => {
  var vVVF22 = vVF22();
  var vVVF23 = vVF2();
  var vVVF232 = vVF23();
  var v15 = 0;
  var v16 = 4;
  var v17 = 36;
  var v18 = Math.pow(v17, v16);
  function f() {
    return vVVF23((vVVF232() * v18 << 0).toString(v17), v16);
  }
  function f2() {
    v15 = v15 < v18 ? v15 : 0;
    v15++;
    return v15 - 1;
  }
  function f3() {
    var v19 = "c";
    var v20 = new Date().getTime().toString(v17);
    var vVVVF23 = vVVF23(f2().toString(v17), v16);
    var vVVVF22 = vVVF22();
    var v21 = f() + f();
    return v19 + v20 + vVVVF23 + vVVVF22 + v21;
  }
  f3.slug = function () {
    var v22 = new Date().getTime().toString(36);
    var v23 = f2().toString(36).slice(-4);
    var v24 = vVVF22().slice(0, 1) + vVVF22().slice(-1);
    var v25 = f().slice(-2);
    return v22.slice(-2) + v23 + v24 + v25;
  };
  f3.isCuid = function (p26) {
    if (typeof p26 != "string") {
      return false;
    } else {
      return !!p26.startsWith("c");
    }
  };
  f3.isSlug = function (p27) {
    if (typeof p27 != "string") {
      return false;
    }
    var v26 = p27.length;
    return v26 >= 7 && v26 <= 10;
  };
  f3.fingerprint = vVVF22;
  p25.exports = f3;
});
var vVF4 = vF4(vVF24());
var vF6 = p28 => {
  let v27 = new Error(p28.message);
  for (let v28 of Object.keys(p28)) {
    v27[v28] = p28[v28];
  }
  return v27;
};
var v29 = "preview-manager";
var v30 = "preview/runtime-response";
var v31 = "INJECT_AND_INVOKE";
var v32 = "HAS_PREVIEW_LOADED";
var v33 = "PREVIEW_LOADED";
var v34 = "INJECT_SUCCESS";
function f4(p29) {
  return p29 && typeof p29.type == "string";
}
function f5(p30) {
  return "(function $csb$eval(module, exports) {" + p30 + "\n})";
}
function f6(p31) {
  let vF52 = f5(p31);
  let v35 = {
    exports: {}
  };
  (0, eval)(vF52).apply(this, [v35, v35.exports]);
  return v35.exports.activate;
}
var vC = class {
  origin = null;
  constructor() {
    window.addEventListener("message", p32 => {
      let v36 = p32.data;
      if (f4(v36)) {
        switch (v36.type) {
          case v31:
            {
              this.origin = p32.origin;
              this.handleCodeInjection(v36);
              return;
            }
          case v32:
            {
              this.sendOutgoingMessage({
                type: v33
              });
              return;
            }
          default:
            if (v36.type) {
              let v37 = this.messageListeners[v36.type];
              if (v37) {
                v37.forEach(p33 => p33(v36));
              }
            }
        }
      }
    });
    window.addEventListener("beforeunload", () => {
      this.sendOutgoingMessage({
        type: "PREVIEW_UNLOADING"
      });
    });
    this.sendOutgoingMessage({
      type: "PREVIEW_LOADED"
    });
  }
  injectedCodeBlocks = new Set();
  messageListeners = {};
  handleCodeInjection(p34) {
    if (this.injectedCodeBlocks.has(p34.code)) {
      return;
    }
    this.injectedCodeBlocks.add(p34.code);
    f6(p34.code)({
      previewWindow: window,
      previewProtocol: this,
      scope: p34.scope
    });
    this.sendOutgoingMessage({
      type: v34,
      uid: p34.uid
    });
  }
  async sendOutgoingMessage(p35) {
    window.parent.postMessage(p35, "*");
  }
  handleIncomingMessage(p36, p37) {
    if (this.messageListeners[p36]) {
      this.messageListeners[p36]?.push(p37);
    } else {
      this.messageListeners[p36] = [p37];
    }
  }
  addListener(p38, p39) {
    this.handleIncomingMessage(p38, p39);
  }
  sendMessage(p40) {
    this.sendOutgoingMessage(p40);
  }
};
function f7(p41) {
  let v38 = +p41.split(".")[0].split("-")[1];
  if (isNaN(v38)) {
    throw new Error("Invalid port");
  }
  return v38;
}
function f8(p42) {
  let v39 = p42.split(".");
  v39.shift();
  return v39.join(".");
}
var vSymbol = Symbol("isPatched");
if (window.WebSocket[vSymbol]) {
  throw new Error("Failed to patch WebSocket: class already patched");
}
var v40 = ["127.0.0.1", "localhost"];
var vF7 = p43 => {
  if (v40.includes(p43.hostname)) {
    return +p43.port;
  }
  let vF8 = f8(window.location.hostname);
  let vF82 = f8(p43.hostname);
  return 8000;
};
var vC2 = class {
  _channel = null;
  messages = [];
  isProcessing = false;
  setChannel(p44) {
    this._channel = p44;
    this.process();
  }
  process() {
    if (this.isProcessing || !this._channel) {
      return;
    }
    let v41 = this.messages.shift();
    if (v41) {
      this.isProcessing = true;
      this._channel.port1.postMessage(v41);
      this.isProcessing = false;
      this.process();
    }
  }
  push(p45) {
    this.messages.push(p45);
    this.process();
  }
};
var v42 = new Map();
var v43 = new vC2();
function f9() {
  if (!navigator.serviceWorker.controller) {
    console.error("Service worker not registered");
    return;
  }
  let v44 = new MessageChannel();
  v44.port1.addEventListener("message", p46 => {
    let v45 = p46.data;
    if (v45) {
      if (v45.type === "ready") {
        v43.setChannel(v44);
        return;
      }
      if (v45.$channel_name === v29 && v45.$type === v30) {
        let v46 = v45.data;
        switch (v46.type) {
          case "websocket/opened":
            {
              let v47 = v42.get(v46.wsId);
              if (!v47) {
                console.error("Websocket not found", v46);
                break;
              }
              v47._emitOpen(v46);
              break;
            }
          case "websocket/closed":
            {
              let v48 = v42.get(v46.wsId);
              if (!v48) {
                console.error("Websocket not found", v46);
                break;
              }
              v48._emitClose(v46);
              break;
            }
          case "websocket/data":
            {
              let v49 = v42.get(v46.wsId);
              if (!v49) {
                console.error("Websocket not found", v46);
                break;
              }
              let v50 = v46.data;
              v49._emitData(v50);
              break;
            }
          case "websocket/error":
            {
              let v51 = v42.get(v46.wsId);
              if (!v51) {
                console.error("Websocket not found", v46);
                break;
              }
              v51._emitError(v46);
              break;
            }
        }
      }
    }
  });
  v44.port1.start();
  navigator.serviceWorker.controller.postMessage({
    type: "runtime-init"
  }, [v44.port2]);
}
function f10(p47) {
  v43.push(p47);
}
async function f11(p48) {
  if (typeof p48 == "string") {
    return p48;
  } else if (p48 instanceof Blob) {
    return p48.arrayBuffer();
  } else if ("buffer" in p48) {
    return p48.buffer;
  } else {
    return p48;
  }
}
var vC3 = class extends EventTarget {
  CONNECTING = 0;
  OPEN = 1;
  CLOSING = 2;
  CLOSED = 3;
  ws;
  _id = (0, vVF4.default)();
  _bufferedAmount = 0;
  _extensions = "";
  _protocol = "";
  _url;
  _binaryType = "blob";
  _readyState = vC3.CONNECTING;
  onmessage = null;
  onclose = null;
  onerror = null;
  onopen = null;
  constructor(p49, p50) {
    super();
    let v52 = p49 instanceof URL ? p49 : new URL(p49, window.location.href);
    let vVF7 = vF7(v52);
    let v53 = v52.pathname;
    this._url = v52.href;
    if (vVF7 !== null) {
      v42.set(this._id, this);
      let v54 = {
        type: "websocket/open",
        wsId: this._id,
        port: vVF7,
        pathname: v53,
        protocols: p50
      };
      f10(v54);
    } else {
      this.ws = new window.OriginalWebSocket(p49, p50);
      this.ws.addEventListener("message", p51 => {
        let v55 = new p51.constructor(p51.type, p51);
        if (this.onmessage) {
          this.onmessage(p51);
        }
        this.dispatchEvent(v55);
      });
      this.ws.addEventListener("close", p52 => {
        let v56 = new p52.constructor(p52.type, p52);
        if (this.onclose) {
          this.onclose(p52);
        }
        this.dispatchEvent(v56);
      });
      this.ws.addEventListener("error", p53 => {
        let v57 = new p53.constructor(p53.type, p53);
        if (this.onerror) {
          this.onerror(p53);
        }
        this.dispatchEvent(v57);
      });
      this.ws.addEventListener("open", p54 => {
        let v58 = new p54.constructor(p54.type, p54);
        if (this.onopen) {
          this.onopen(p54);
        }
        this.dispatchEvent(v58);
      });
    }
  }
  _emitOpen(p55) {
    this._readyState = this.OPEN;
    this._extensions = p55.extensions ?? "";
    let v59 = new Event("open");
    if (this.onopen) {
      this.onopen(v59);
    }
    this.dispatchEvent(v59);
  }
  _emitClose(p56) {
    this._readyState = this.CLOSED;
    let v60 = new CloseEvent("close", {
      code: p56.code,
      reason: p56.reason
    });
    if (this.onclose) {
      this.onclose(v60);
    }
    this.dispatchEvent(v60);
  }
  _emitError(p57) {
    let vVF6 = vF6(p57.error);
    let v61 = new ErrorEvent("error", {
      error: vVF6
    });
    if (this.onerror) {
      this.onerror(v61);
    }
    this.dispatchEvent(v61);
  }
  _emitData(p58) {
    let vP58 = p58;
    if (typeof p58 != "string" && this._binaryType !== "arraybuffer") {
      vP58 = new Blob([p58]);
    }
    let v62 = new MessageEvent("message", {
      data: vP58
    });
    if (this.onmessage) {
      this.onmessage(v62);
    }
    this.dispatchEvent(v62);
  }
  set binaryType(p59) {
    if (this.ws) {
      this.ws.binaryType = p59;
    } else {
      this._binaryType = p59;
    }
  }
  get bufferedAmount() {
    if (this.ws) {
      return this.ws.bufferedAmount;
    } else {
      return this._bufferedAmount;
    }
  }
  get extensions() {
    if (this.ws) {
      return this.ws.extensions;
    } else {
      return this._extensions;
    }
  }
  get protocol() {
    if (this.ws) {
      return this.ws.protocol;
    } else {
      return this._protocol;
    }
  }
  get readyState() {
    if (this.ws) {
      return this.ws.readyState;
    } else {
      return this._readyState;
    }
  }
  get url() {
    if (this.ws) {
      return this.ws.url;
    } else {
      return this._url;
    }
  }
  close(p60, p61) {
    if (this.ws) {
      this.ws.close(p60, p61);
    } else {
      this._readyState = this.CLOSING;
      let v63 = {
        type: "websocket/close",
        wsId: this._id,
        code: p60,
        reason: p61
      };
      f10(v63);
    }
  }
  send(p62) {
    if (this.ws) {
      this.ws.send(p62);
    } else {
      f11(p62).then(p63 => {
        let v64 = {
          type: "websocket/data",
          wsId: this._id,
          data: p63
        };
        f10(v64);
      }).catch(p64 => {
        console.error(p64);
      });
    }
  }
};
var vVC3 = vC3;
vF5(vVC3, "CONNECTING", 0);
vF5(vVC3, "OPEN", 1);
vF5(vVC3, "CLOSING", 2);
vF5(vVC3, "CLOSED", 3);
window.OriginalWebSocket = window.WebSocket;
window.WebSocket = vVC3;
f9();
window.__CSB_PREVIEW_PROTOCOL = new vC();