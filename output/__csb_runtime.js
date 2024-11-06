var definePropertyIfExists = (propertySetter, propertyKey, propertyValue) =>
  propertyKey in propertySetter
    ? Object.defineProperty(propertySetter, propertyKey, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: propertyValue,
      })
    : (propertySetter[propertyKey] = propertyValue);
var defineModuleExports = (initializeModule, initializeP5Module) => () => {
  if (!initializeP5Module) {
    initializeModule(
      (initializeP5Module = {
        exports: {},
      }).exports,
      initializeP5Module,
    );
  }
  return initializeP5Module.exports;
};
var definePropertiesFromSource = (
  defineProperties,
  sourceObject,
  excludedProperty,
  propertyDescriptor,
) => {
  if (
    (sourceObject && typeof sourceObject == "object") ||
    typeof sourceObject == "function"
  ) {
    for (let propertyName of Object.getOwnPropertyNames(sourceObject)) {
      if (
        !Object.prototype.hasOwnProperty.call(defineProperties, propertyName) &&
        propertyName !== excludedProperty
      ) {
        Object.defineProperty(defineProperties, propertyName, {
          get: () => sourceObject[propertyName],
          enumerable:
            !(propertyDescriptor = Object.getOwnPropertyDescriptor(
              sourceObject,
              propertyName,
            )) || propertyDescriptor.enumerable,
        });
      }
    }
  }
  return defineProperties;
};
var _defineModuleExports = (
  _sourceObject,
  sourceObjectDefault,
  createdPrototypeObject,
) => {
  if (_sourceObject != null) {
    createdPrototypeObject = Object.create(
      Object.getPrototypeOf(_sourceObject),
    );
  } else {
    createdPrototypeObject = {};
  }
  return definePropertiesFromSource(
    sourceObjectDefault || !_sourceObject || !_sourceObject.__esModule
      ? Object.defineProperty(createdPrototypeObject, "default", {
          value: _sourceObject,
          enumerable: true,
        })
      : createdPrototypeObject,
    _sourceObject,
  );
};
var definePropertyIfSymbolExists = (
  defineAndReturnProperty,
  _propertyName,
  _propertyValue,
) => {
  definePropertyIfExists(
    defineAndReturnProperty,
    typeof _propertyName != "symbol" ? _propertyName + "" : _propertyName,
    _propertyValue,
  );
  return _propertyValue;
};
var definePaddingStringExport = defineModuleExports(
  (exportFormattedNumberWithPadding, _exportFormattedNumberWithPadding) => {
    _exportFormattedNumberWithPadding.exports = function (
      formatNumberWithPadding,
      paddingLength,
    ) {
      var paddedNumberString = "000000000" + formatNumberWithPadding;
      return paddedNumberString.substr(
        paddedNumberString.length - paddingLength,
      );
    };
  },
);
var exportedValueModule = defineModuleExports(
  (initializePaddingAndExport, exportPaddingString) => {
    var paddingStringExport = definePaddingStringExport();
    var _globalContext = typeof window == "object" ? window : self;
    var globalObjectKeyCount = Object.keys(_globalContext).length;
    var mimeTypesCount = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var generatePaddingHash = paddingStringExport(
      (mimeTypesCount + navigator.userAgent.length).toString(36) +
        globalObjectKeyCount.toString(36),
      4,
    );
    exportPaddingString.exports = function () {
      return generatePaddingHash;
    };
  },
);
var checkCryptoSupport = defineModuleExports(
  (generateRandomNumber, exportedRandomNumberGenerator) => {
    var generateSecureRandomNumber;
    var cryptoSupport =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (cryptoSupport) {
      maxRandomValue = Math.pow(2, 32) - 1;
      generateSecureRandomNumber = function () {
        return Math.abs(
          cryptoSupport.getRandomValues(new Uint32Array(1))[0] / maxRandomValue,
        );
      };
    } else {
      generateSecureRandomNumber = Math.random;
    }
    var maxRandomValue;
    exportedRandomNumberGenerator.exports = generateSecureRandomNumber;
  },
);
var generateRandomValue = defineModuleExports(
  (___generateSlug, _generateUniqueSlug) => {
    var ____generateSlug = exportedValueModule();
    var defineSlugPaddingString = definePaddingStringExport();
    var checkIfCryptoSupported = checkCryptoSupport();
    var slugCounter = 0;
    var baseSlugBase = 4;
    var baseNumber = 36;
    var maxUniqueSlugValue = Math.pow(baseNumber, baseSlugBase);
    function generateSlugPaddingString() {
      return defineSlugPaddingString(
        ((checkIfCryptoSupported() * maxUniqueSlugValue) << 0).toString(
          baseNumber,
        ),
        baseSlugBase,
      );
    }
    function incrementSlugCounter() {
      if (slugCounter < maxUniqueSlugValue) {
        slugCounter = slugCounter;
      } else {
        slugCounter = 0;
      }
      slugCounter++;
      return slugCounter - 1;
    }
    function ___generateUniqueIdentifier() {
      var constantCharacter = "c";
      var uniqueIdentifierTimestamp = new Date().getTime().toString(baseNumber);
      var slugPaddedUniqueIdentifier = defineSlugPaddingString(
        incrementSlugCounter().toString(baseNumber),
        baseSlugBase,
      );
      var generateRandomSlug = ____generateSlug();
      var randomStringConcat =
        generateSlugPaddingString() + generateSlugPaddingString();
      return (
        constantCharacter +
        uniqueIdentifierTimestamp +
        slugPaddedUniqueIdentifier +
        generateRandomSlug +
        randomStringConcat
      );
    }
    ___generateUniqueIdentifier.slug = function () {
      var currentTimestampSlug = new Date().getTime().toString(36);
      var lastFourCharactersFromF2 = incrementSlugCounter()
        .toString(36)
        .slice(-4);
      var generatedSlugBoundary =
        ____generateSlug().slice(0, 1) + ____generateSlug().slice(-1);
      var lastTwoCharactersFromF = generateSlugPaddingString().slice(-2);
      return (
        currentTimestampSlug.slice(-2) +
        lastFourCharactersFromF2 +
        generatedSlugBoundary +
        lastTwoCharactersFromF
      );
    };
    ___generateUniqueIdentifier.isCuid = function (isCuidString) {
      if (typeof isCuidString != "string") {
        return false;
      } else {
        return !!isCuidString.startsWith("c");
      }
    };
    ___generateUniqueIdentifier.isSlug = function (slugString) {
      if (typeof slugString != "string") {
        return false;
      }
      var slugLength = slugString.length;
      return slugLength >= 7 && slugLength <= 10;
    };
    ___generateUniqueIdentifier.fingerprint = ____generateSlug;
    _generateUniqueSlug.exports = ___generateUniqueIdentifier;
  },
);
var generateRandomValueModule = _defineModuleExports(generateRandomValue());
var generateUniqueIdentifier = (createErrorWithDetails) => {
  let createDetailedError = new Error(createErrorWithDetails.message);
  for (let errorDetailKey of Object.keys(createErrorWithDetails)) {
    createDetailedError[errorDetailKey] =
      createErrorWithDetails[errorDetailKey];
  }
  return createDetailedError;
};
var generateSlug = "preview-manager";
var generateUniqueSlug = "preview/runtime-response";
var _generateUniqueIdentifier = "INJECT_AND_INVOKE";
var _generateSlug = "HAS_PREVIEW_LOADED";
var __generateSlug = "PREVIEW_LOADED";
var __generateUniqueIdentifier = "INJECT_SUCCESS";
function isValidErrorIdentifier(generateUniqueIdentifierFromError) {
  return (
    generateUniqueIdentifierFromError &&
    typeof generateUniqueIdentifierFromError.type == "string"
  );
}
function createValidationModule(validateCustomUniqueId) {
  return (
    "(function $csb$eval(module, exports) {" + validateCustomUniqueId + "\n})"
  );
}
function activateErrorHandler(generateErrorFromIdentifier) {
  let generateErrorHandler = createValidationModule(
    generateErrorFromIdentifier,
  );
  let errorHandlerModule = {
    exports: {},
  };
  (0, eval)(generateErrorHandler).apply(this, [
    errorHandlerModule,
    errorHandlerModule.exports,
  ]);
  return errorHandlerModule.exports.activate;
}
var isCuidStringStartsWithC = class {
  origin = null;
  constructor() {
    window.addEventListener("message", (processIncomingMessage) => {
      let incomingMessageData = processIncomingMessage.data;
      if (isValidErrorIdentifier(incomingMessageData)) {
        switch (incomingMessageData.type) {
          case _generateUniqueIdentifier: {
            this.origin = processIncomingMessage.origin;
            this.handleCodeInjection(incomingMessageData);
            return;
          }
          case _generateSlug: {
            this.sendOutgoingMessage({
              type: __generateSlug,
            });
            return;
          }
          default:
            if (incomingMessageData.type) {
              let messageListenersByType =
                this.messageListeners[incomingMessageData.type];
              if (messageListenersByType) {
                messageListenersByType.forEach((_processIncomingMessage) =>
                  _processIncomingMessage(incomingMessageData),
                );
              }
            }
        }
      }
    });
    window.addEventListener("beforeunload", () => {
      this.sendOutgoingMessage({
        type: "PREVIEW_UNLOADING",
      });
    });
    this.sendOutgoingMessage({
      type: "PREVIEW_LOADED",
    });
  }
  injectedCodeBlocks = new Set();
  messageListeners = {};
  handleCodeInjection(handleInjectedCode) {
    if (this.injectedCodeBlocks.has(handleInjectedCode.code)) {
      return;
    }
    this.injectedCodeBlocks.add(handleInjectedCode.code);
    activateErrorHandler(handleInjectedCode.code)({
      previewWindow: window,
      previewProtocol: this,
      scope: handleInjectedCode.scope,
    });
    this.sendOutgoingMessage({
      type: __generateUniqueIdentifier,
      uid: handleInjectedCode.uid,
    });
  }
  async sendOutgoingMessage(outgoingMessage) {
    window.parent.postMessage(outgoingMessage, "*");
  }
  handleIncomingMessage(messageType, messageHandler) {
    if (this.messageListeners[messageType]) {
      this.messageListeners[messageType]?.push(messageHandler);
    } else {
      this.messageListeners[messageType] = [messageHandler];
    }
  }
  addListener(incomingMessageListener, _messageHandler) {
    this.handleIncomingMessage(incomingMessageListener, _messageHandler);
  }
  sendMessage(message) {
    this.sendOutgoingMessage(message);
  }
};
function _extractPortFromMessage(handleOutgoingMessage) {
  let extractPort = +handleOutgoingMessage.split(".")[0].split("-")[1];
  if (isNaN(extractPort)) {
    throw new Error("Invalid port");
  }
  return extractPort;
}
function removeFirstSegmentFromMessage(handleIncomingMessage) {
  let splitMessageSegments = handleIncomingMessage.split(".");
  splitMessageSegments.shift();
  return splitMessageSegments.join(".");
}
var messageCallbackFunction = Symbol("isPatched");
if (window.WebSocket[messageCallbackFunction]) {
  throw new Error("Failed to patch WebSocket: class already patched");
}
var sendMessage = ["127.0.0.1", "localhost"];
var _handleOutgoingMessage = (messagePortIfHostnameMatches) => {
  if (sendMessage.includes(messagePortIfHostnameMatches.hostname)) {
    return +messagePortIfHostnameMatches.port;
  }
  let getPortForMatchingHostname = removeFirstSegmentFromMessage(
    window.location.hostname,
  );
  let getPortForHostname = removeFirstSegmentFromMessage(
    messagePortIfHostnameMatches.hostname,
  );
  return 8000;
};
var extractPortFromMessage = class {
  _channel = null;
  messages = [];
  isProcessing = false;
  setChannel(setChannelValue) {
    this._channel = setChannelValue;
    this.process();
  }
  process() {
    if (this.isProcessing || !this._channel) {
      return;
    }
    let nextMessage = this.messages.shift();
    if (nextMessage) {
      this.isProcessing = true;
      this._channel.port1.postMessage(nextMessage);
      this.isProcessing = false;
      this.process();
    }
  }
  push(messageToProcess) {
    this.messages.push(messageToProcess);
    this.process();
  }
};
var extractPortFromHandleOutgoingMessage = new Map();
var getPortFromHandleOutgoingMessage = new extractPortFromMessage();
function handleServiceWorkerMessages() {
  if (!navigator.serviceWorker.controller) {
    console.error("Service worker not registered");
    return;
  }
  let messageChannel = new MessageChannel();
  messageChannel.port1.addEventListener(
    "message",
    (__handleIncomingMessage) => {
      let incomingMessage = __handleIncomingMessage.data;
      if (incomingMessage) {
        if (incomingMessage.type === "ready") {
          getPortFromHandleOutgoingMessage.setChannel(messageChannel);
          return;
        }
        if (
          incomingMessage.$channel_name === generateSlug &&
          incomingMessage.$type === generateUniqueSlug
        ) {
          let incomingWebsocketMessage = incomingMessage.data;
          switch (incomingWebsocketMessage.type) {
            case "websocket/opened": {
              let _websocketConnection =
                extractPortFromHandleOutgoingMessage.get(
                  incomingWebsocketMessage.wsId,
                );
              if (!_websocketConnection) {
                console.error("Websocket not found", incomingWebsocketMessage);
                break;
              }
              _websocketConnection._emitOpen(incomingWebsocketMessage);
              break;
            }
            case "websocket/closed": {
              let websocketConnection =
                extractPortFromHandleOutgoingMessage.get(
                  incomingWebsocketMessage.wsId,
                );
              if (!websocketConnection) {
                console.error("Websocket not found", incomingWebsocketMessage);
                break;
              }
              websocketConnection._emitClose(incomingWebsocketMessage);
              break;
            }
            case "websocket/data": {
              let outgoingWebSocket = extractPortFromHandleOutgoingMessage.get(
                incomingWebsocketMessage.wsId,
              );
              if (!outgoingWebSocket) {
                console.error("Websocket not found", incomingWebsocketMessage);
                break;
              }
              let _incomingMessageData = incomingWebsocketMessage.data;
              outgoingWebSocket._emitData(_incomingMessageData);
              break;
            }
            case "websocket/error": {
              let portFromWebsocketHandle =
                extractPortFromHandleOutgoingMessage.get(
                  incomingWebsocketMessage.wsId,
                );
              if (!portFromWebsocketHandle) {
                console.error("Websocket not found", incomingWebsocketMessage);
                break;
              }
              portFromWebsocketHandle._emitError(incomingWebsocketMessage);
              break;
            }
          }
        }
      }
    },
  );
  messageChannel.port1.start();
  navigator.serviceWorker.controller.postMessage(
    {
      type: "runtime-init",
    },
    [messageChannel.port2],
  );
}
function ___handleIncomingMessage(_handleIncomingMessage) {
  getPortFromHandleOutgoingMessage.push(_handleIncomingMessage);
}
async function processWebSocketMessageData(processWebSocketMessage) {
  if (typeof processWebSocketMessage == "string") {
    return processWebSocketMessage;
  } else if (processWebSocketMessage instanceof Blob) {
    return processWebSocketMessage.arrayBuffer();
  } else if ("buffer" in processWebSocketMessage) {
    return processWebSocketMessage.buffer;
  } else {
    return processWebSocketMessage;
  }
}
var websocketMessageHandler = class extends EventTarget {
  CONNECTING = 0;
  OPEN = 1;
  CLOSING = 2;
  CLOSED = 3;
  ws;
  _id = (0, generateRandomValueModule.default)();
  _bufferedAmount = 0;
  _extensions = "";
  _protocol = "";
  _url;
  _binaryType = "blob";
  _readyState = websocketMessageHandler.CONNECTING;
  onmessage = null;
  onclose = null;
  onerror = null;
  onopen = null;
  constructor(urlOrString, webSocketProtocols) {
    super();
    let url =
      urlOrString instanceof URL
        ? urlOrString
        : new URL(urlOrString, window.location.href);
    let outgoingMessagePort = _handleOutgoingMessage(url);
    let pathname = url.pathname;
    this._url = url.href;
    if (outgoingMessagePort !== null) {
      extractPortFromHandleOutgoingMessage.set(this._id, this);
      let webSocketConnectionDetails = {
        type: "websocket/open",
        wsId: this._id,
        port: outgoingMessagePort,
        pathname: pathname,
        protocols: webSocketProtocols,
      };
      ___handleIncomingMessage(webSocketConnectionDetails);
    } else {
      this.ws = new window.OriginalWebSocket(urlOrString, webSocketProtocols);
      this.ws.addEventListener("message", (__messageEvent) => {
        let clonedMessageEvent = new __messageEvent.constructor(
          __messageEvent.type,
          __messageEvent,
        );
        if (this.onmessage) {
          this.onmessage(__messageEvent);
        }
        this.dispatchEvent(clonedMessageEvent);
      });
      this.ws.addEventListener("close", (createAndDispatchEvent) => {
        let eventClone = new createAndDispatchEvent.constructor(
          createAndDispatchEvent.type,
          createAndDispatchEvent,
        );
        if (this.onclose) {
          this.onclose(createAndDispatchEvent);
        }
        this.dispatchEvent(eventClone);
      });
      this.ws.addEventListener("error", (eventHandlerForP53) => {
        let eventHandlerInstance = new eventHandlerForP53.constructor(
          eventHandlerForP53.type,
          eventHandlerForP53,
        );
        if (this.onerror) {
          this.onerror(eventHandlerForP53);
        }
        this.dispatchEvent(eventHandlerInstance);
      });
      this.ws.addEventListener("open", (handleOpenEvent) => {
        let _openEvent = new handleOpenEvent.constructor(
          handleOpenEvent.type,
          handleOpenEvent,
        );
        if (this.onopen) {
          this.onopen(handleOpenEvent);
        }
        this.dispatchEvent(_openEvent);
      });
    }
  }
  _emitOpen(extensionsData) {
    this._readyState = this.OPEN;
    this._extensions = extensionsData.extensions ?? "";
    let openEvent = new Event("open");
    if (this.onopen) {
      this.onopen(openEvent);
    }
    this.dispatchEvent(openEvent);
  }
  _emitClose(closeEventDetails) {
    this._readyState = this.CLOSED;
    let closeEvent = new CloseEvent("close", {
      code: closeEventDetails.code,
      reason: closeEventDetails.reason,
    });
    if (this.onclose) {
      this.onclose(closeEvent);
    }
    this.dispatchEvent(closeEvent);
  }
  _emitError(handleErrorEvent) {
    let generateErrorIdentifier = generateUniqueIdentifier(
      handleErrorEvent.error,
    );
    let errorEvent = new ErrorEvent("error", {
      error: generateErrorIdentifier,
    });
    if (this.onerror) {
      this.onerror(errorEvent);
    }
    this.dispatchEvent(errorEvent);
  }
  _emitData(dataToSend) {
    let formattedData = dataToSend;
    if (typeof dataToSend != "string" && this._binaryType !== "arraybuffer") {
      formattedData = new Blob([dataToSend]);
    }
    let _messageEvent = new MessageEvent("message", {
      data: formattedData,
    });
    if (this.onmessage) {
      this.onmessage(_messageEvent);
    }
    this.dispatchEvent(_messageEvent);
  }
  set binaryType(binaryType) {
    if (this.ws) {
      this.ws.binaryType = binaryType;
    } else {
      this._binaryType = binaryType;
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
  close(closeCodeAndReason, closeReason) {
    if (this.ws) {
      this.ws.close(closeCodeAndReason, closeReason);
    } else {
      this._readyState = this.CLOSING;
      let websocketCloseData = {
        type: "websocket/close",
        wsId: this._id,
        code: closeCodeAndReason,
        reason: closeReason,
      };
      ___handleIncomingMessage(websocketCloseData);
    }
  }
  send(dataToBeSent) {
    if (this.ws) {
      this.ws.send(dataToBeSent);
    } else {
      processWebSocketMessageData(dataToBeSent)
        .then((payloadData) => {
          let webSocketPayload = {
            type: "websocket/data",
            wsId: this._id,
            data: payloadData,
          };
          ___handleIncomingMessage(webSocketPayload);
        })
        .catch((errorLogger) => {
          console.error(errorLogger);
        });
    }
  }
};
var messageEvent = websocketMessageHandler;
definePropertyIfSymbolExists(messageEvent, "CONNECTING", 0);
definePropertyIfSymbolExists(messageEvent, "OPEN", 1);
definePropertyIfSymbolExists(messageEvent, "CLOSING", 2);
definePropertyIfSymbolExists(messageEvent, "CLOSED", 3);
window.OriginalWebSocket = window.WebSocket;
window.WebSocket = messageEvent;
handleServiceWorkerMessages();
window.__CSB_PREVIEW_PROTOCOL = new isCuidStringStartsWithC();
