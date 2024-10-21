var assignPropertyIfDefined = (
  definePropertyIfExists,
  propertyKey,
  propertyValueToSet,
) =>
  propertyKey in definePropertyIfExists
    ? Object.defineProperty(definePropertyIfExists, propertyKey, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: propertyValueToSet,
      })
    : (definePropertyIfExists[propertyKey] = propertyValueToSet);
var initializeP5ModuleIfRequired =
  (
    ensureP5ModuleInitializedAndGetExports,
    ensureP5ModuleInitializedAndRetrieveExports,
  ) =>
  () => {
    if (!ensureP5ModuleInitializedAndRetrieveExports) {
      ensureP5ModuleInitializedAndGetExports(
        (ensureP5ModuleInitializedAndRetrieveExports = {
          exports: {},
        }).exports,
        ensureP5ModuleInitializedAndRetrieveExports,
      );
    }
    return ensureP5ModuleInitializedAndRetrieveExports.exports;
  };
var definePropertiesSafelyFromSource = (
  generatePropertyAccessor,
  inheritAccessorProperties,
  excludedPropertyName,
  getAccessorPropertyDescriptor,
) => {
  if (
    (inheritAccessorProperties &&
      typeof inheritAccessorProperties == "object") ||
    typeof inheritAccessorProperties == "function"
  ) {
    for (let inheritanceAccessorPropertyName of Object.getOwnPropertyNames(
      inheritAccessorProperties,
    )) {
      if (
        !Object.prototype.hasOwnProperty.call(
          generatePropertyAccessor,
          inheritanceAccessorPropertyName,
        ) &&
        inheritanceAccessorPropertyName !== excludedPropertyName
      ) {
        Object.defineProperty(
          generatePropertyAccessor,
          inheritanceAccessorPropertyName,
          {
            get: () =>
              inheritAccessorProperties[inheritanceAccessorPropertyName],
            enumerable:
              !(getAccessorPropertyDescriptor = Object.getOwnPropertyDescriptor(
                inheritAccessorProperties,
                inheritanceAccessorPropertyName,
              )) || getAccessorPropertyDescriptor.enumerable,
          },
        );
      }
    }
  }
  return generatePropertyAccessor;
};
var initializePrototypeWithProperties = (
  sourceObjectOrModule,
  sourcePropertiesForPrototype,
  initializePrototype,
) => {
  if (sourceObjectOrModule != null) {
    initializePrototype = Object.create(
      Object.getPrototypeOf(sourceObjectOrModule),
    );
  } else {
    initializePrototype = {};
  }
  return definePropertiesSafelyFromSource(
    sourcePropertiesForPrototype ||
      !sourceObjectOrModule ||
      !sourceObjectOrModule.__esModule
      ? Object.defineProperty(initializePrototype, "default", {
          value: sourceObjectOrModule,
          enumerable: true,
        })
      : initializePrototype,
    sourceObjectOrModule,
  );
};
var assignAndReturnPropertyConfig = (
  assignPropertyConfig,
  assignPropertyName,
  propertySettings,
) => {
  assignPropertyIfDefined(
    assignPropertyConfig,
    typeof assignPropertyName != "symbol"
      ? assignPropertyName + ""
      : assignPropertyName,
    propertySettings,
  );
  return propertySettings;
};
var initializeAndExportZeroPaddedSubstringModule = initializeP5ModuleIfRequired(
  (
    generateZeroPaddedSubstringWithLength,
    _generateZeroPaddedSubstringWithLength,
  ) => {
    _generateZeroPaddedSubstringWithLength.exports = function (
      _generateZeroPaddedSubstring,
      substringPaddingLength,
    ) {
      var getZeroPaddedSubstring = "000000000" + _generateZeroPaddedSubstring;
      return getZeroPaddedSubstring.substr(
        getZeroPaddedSubstring.length - substringPaddingLength,
      );
    };
  },
);
var setupAndReportGlobalExecutionContextInfo = initializeP5ModuleIfRequired(
  (initializeAndExposeUserAgentInfo, _initializeAndExposeUserAgentInfo) => {
    var initializeAndExposeUserAgentInfoData =
      initializeAndExportZeroPaddedSubstringModule();
    var getGlobalContext = typeof window == "object" ? window : self;
    var globalContextPropertyCount = Object.keys(getGlobalContext).length;
    var mimeTypeCount = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var userAgentContextInfo = initializeAndExposeUserAgentInfoData(
      (mimeTypeCount + navigator.userAgent.length).toString(36) +
        globalContextPropertyCount.toString(36),
      4,
    );
    _initializeAndExposeUserAgentInfo.exports = function () {
      return userAgentContextInfo;
    };
  },
);
var setupCryptoUtilitiesAndExpose = initializeP5ModuleIfRequired(
  (
    initializeSecureRandomFloatGenerator,
    _initializeSecureRandomFloatGenerator,
  ) => {
    var createSecureRandomFloatGenerator;
    var isCryptoAPIAvailable =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (isCryptoAPIAvailable) {
      maxUint32SecureRandomValue = Math.pow(2, 32) - 1;
      createSecureRandomFloatGenerator = function () {
        return Math.abs(
          isCryptoAPIAvailable.getRandomValues(new Uint32Array(1))[0] /
            maxUint32SecureRandomValue,
        );
      };
    } else {
      createSecureRandomFloatGenerator = Math.random;
    }
    var maxUint32SecureRandomValue;
    _initializeSecureRandomFloatGenerator.exports =
      createSecureRandomFloatGenerator;
  },
);
var initializeAndExposeSlugGenerator = initializeP5ModuleIfRequired(
  (createUniqueSlugIdentifier, _createUniqueSlugIdentifier) => {
    var setupAndExportSlugContext = setupAndReportGlobalExecutionContextInfo();
    var generateZeroPaddedSlug = initializeAndExportZeroPaddedSubstringModule();
    var setupAndExportCryptoUtilities = setupCryptoUtilitiesAndExpose();
    var slugGenerationIndex = 0;
    var maxSlugCharacterLength = 4;
    var base36Radix = 36;
    var maxSlugGenerationCount = Math.pow(base36Radix, maxSlugCharacterLength);
    function generateCryptoValueSlug() {
      return generateZeroPaddedSlug(
        (
          (setupAndExportCryptoUtilities() * maxSlugGenerationCount) <<
          0
        ).toString(base36Radix),
        maxSlugCharacterLength,
      );
    }
    function incrementSlugIndexWithWrapAround() {
      if (slugGenerationIndex < maxSlugGenerationCount) {
        slugGenerationIndex = slugGenerationIndex;
      } else {
        slugGenerationIndex = 0;
      }
      slugGenerationIndex++;
      return slugGenerationIndex - 1;
    }
    function generateUniqueSlugIdentifier() {
      var slugIdentifierPrefix = "c";
      var timestampBase36 = new Date().getTime().toString(base36Radix);
      var _generateZeroPaddedSlug = generateZeroPaddedSlug(
        incrementSlugIndexWithWrapAround().toString(base36Radix),
        maxSlugCharacterLength,
      );
      var slugContextForIdentifier = setupAndExportSlugContext();
      var cryptoBasedUniqueIdComponent =
        generateCryptoValueSlug() + generateCryptoValueSlug();
      return (
        slugIdentifierPrefix +
        timestampBase36 +
        _generateZeroPaddedSlug +
        slugContextForIdentifier +
        cryptoBasedUniqueIdComponent
      );
    }
    generateUniqueSlugIdentifier.slug = function () {
      var base36Timestamp = new Date().getTime().toString(36);
      var incrementedCounterLastFourChars = incrementSlugIndexWithWrapAround()
        .toString(36)
        .slice(-4);
      var getFirstAndLastCharactersFromSlugContext =
        setupAndExportSlugContext().slice(0, 1) +
        setupAndExportSlugContext().slice(-1);
      var getLastTwoCharsFromGeneratedSlug =
        generateCryptoValueSlug().slice(-2);
      return (
        base36Timestamp.slice(-2) +
        incrementedCounterLastFourChars +
        getFirstAndLastCharactersFromSlugContext +
        getLastTwoCharsFromGeneratedSlug
      );
    };
    generateUniqueSlugIdentifier.isCuid = function (validateSlugFormat) {
      if (typeof validateSlugFormat != "string") {
        return false;
      } else {
        return !!validateSlugFormat.startsWith("c");
      }
    };
    generateUniqueSlugIdentifier.isSlug = function (
      generateSlugUniqueIdentifier,
    ) {
      if (typeof generateSlugUniqueIdentifier != "string") {
        return false;
      }
      var slugIdentifierLength = generateSlugUniqueIdentifier.length;
      return slugIdentifierLength >= 7 && slugIdentifierLength <= 10;
    };
    generateUniqueSlugIdentifier.fingerprint = setupAndExportSlugContext;
    _createUniqueSlugIdentifier.exports = generateUniqueSlugIdentifier;
  },
);
var initializeAndExposeRandomNumberProperties =
  initializePrototypeWithProperties(initializeAndExposeSlugGenerator());
var createDetailedErrorFromInput = (createErrorWithContextFromInput) => {
  let createErrorWithDetailedContext = new Error(
    createErrorWithContextFromInput.message,
  );
  for (let errorDetailKeyNames of Object.keys(
    createErrorWithContextFromInput,
  )) {
    createErrorWithDetailedContext[errorDetailKeyNames] =
      createErrorWithContextFromInput[errorDetailKeyNames];
  }
  return createErrorWithDetailedContext;
};
var getAndIncrementCounterForPreview = "preview-manager";
var generateUniqueSlugForPreview = "preview/runtime-response";
var initializeAndInvokeUniqueIdentifier = "INJECT_AND_INVOKE";
var createBaseFormatTimestampIndicator = "HAS_PREVIEW_LOADED";
var generateUniqueSlugForPreviewStatus = "PREVIEW_LOADED";
var generateModuleActivationIdentifier = "INJECT_SUCCESS";
function isIdentifierObjectTypeValid(_isValidIdentifierObjectType) {
  return (
    _isValidIdentifierObjectType &&
    typeof _isValidIdentifierObjectType.type == "string"
  );
}
function generateErrorHandlingWrapper(generateErrorFunctionForHandling) {
  return (
    "(function $csb$eval(module, exports) {" +
    generateErrorFunctionForHandling +
    "\n})"
  );
}
function setupModuleByUniqueId(initializeModuleWithUniqueIdentifier) {
  let initializeAndRunModuleWithErrorHandling = generateErrorHandlingWrapper(
    initializeModuleWithUniqueIdentifier,
  );
  let moduleExecutionScope = {
    exports: {},
  };
  (0, eval)(initializeAndRunModuleWithErrorHandling).apply(this, [
    moduleExecutionScope,
    moduleExecutionScope.exports,
  ]);
  return moduleExecutionScope.exports.activate;
}
var IncomingMessageIdentifierHandler = class {
  origin = null;
  constructor() {
    window.addEventListener("message", (processIncomingMessageEvent) => {
      let messageEventData = processIncomingMessageEvent.data;
      if (isIdentifierObjectTypeValid(messageEventData)) {
        switch (messageEventData.type) {
          case initializeAndInvokeUniqueIdentifier: {
            this.origin = processIncomingMessageEvent.origin;
            this.handleCodeInjection(messageEventData);
            return;
          }
          case createBaseFormatTimestampIndicator: {
            this.sendOutgoingMessage({
              type: generateUniqueSlugForPreviewStatus,
            });
            return;
          }
          default:
            if (messageEventData.type) {
              let messageTypeListeners =
                this.messageListeners[messageEventData.type];
              if (messageTypeListeners) {
                messageTypeListeners.forEach((_processIncomingMessageEvent) =>
                  _processIncomingMessageEvent(messageEventData),
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
  handleCodeInjection(processInjectedCode) {
    if (this.injectedCodeBlocks.has(processInjectedCode.code)) {
      return;
    }
    this.injectedCodeBlocks.add(processInjectedCode.code);
    setupModuleByUniqueId(processInjectedCode.code)({
      previewWindow: window,
      previewProtocol: this,
      scope: processInjectedCode.scope,
    });
    this.sendOutgoingMessage({
      type: generateModuleActivationIdentifier,
      uid: processInjectedCode.uid,
    });
  }
  async sendOutgoingMessage(outgoingMessageData) {
    window.parent.postMessage(outgoingMessageData, "*");
  }
  handleIncomingMessage(messageTypeForListener, registerMessageListener) {
    if (this.messageListeners[messageTypeForListener]) {
      this.messageListeners[messageTypeForListener]?.push(
        registerMessageListener,
      );
    } else {
      this.messageListeners[messageTypeForListener] = [registerMessageListener];
    }
  }
  addListener(handleIncomingMessageListener, processIncomingMessage) {
    this.handleIncomingMessage(
      handleIncomingMessageListener,
      processIncomingMessage,
    );
  }
  sendMessage(messageToSend) {
    this.sendOutgoingMessage(messageToSend);
  }
};
function extractPortNumberFromCode(extractPortFromCodeString) {
  let extractPortNumberFromCodeString = +extractPortFromCodeString
    .split(".")[0]
    .split("-")[1];
  if (isNaN(extractPortNumberFromCodeString)) {
    throw new Error("Invalid port");
  }
  return extractPortNumberFromCodeString;
}
function extractValidCodeSegmentsFromUserInput(sanitizeUserInputForInjection) {
  let splitSanitizedUserInputForCodeSegments =
    sanitizeUserInputForInjection.split(".");
  splitSanitizedUserInputForCodeSegments.shift();
  return splitSanitizedUserInputForCodeSegments.join(".");
}
var isWebSocketPatched = Symbol("isPatched");
if (window.WebSocket[isWebSocketPatched]) {
  throw new Error("Failed to patch WebSocket: class already patched");
}
var getPortIfLocalhostOrLocalIP = ["127.0.0.1", "localhost"];
var retrievePortFromHostnameIfLocal = (getPortForRequestedHostname) => {
  if (
    getPortIfLocalhostOrLocalIP.includes(getPortForRequestedHostname.hostname)
  ) {
    return +getPortForRequestedHostname.port;
  }
  let getPortForValidHostname = extractValidCodeSegmentsFromUserInput(
    window.location.hostname,
  );
  let getPortForHostnameBasedOnRequest = extractValidCodeSegmentsFromUserInput(
    getPortForRequestedHostname.hostname,
  );
  return 8000;
};
var WebSocketMessageQueueProcessor = class {
  _channel = null;
  messages = [];
  isProcessing = false;
  setChannel(setCurrentChannel) {
    this._channel = setCurrentChannel;
    this.process();
  }
  process() {
    if (this.isProcessing || !this._channel) {
      return;
    }
    let nextMessageToProcess = this.messages.shift();
    if (nextMessageToProcess) {
      this.isProcessing = true;
      this._channel.port1.postMessage(nextMessageToProcess);
      this.isProcessing = false;
      this.process();
    }
  }
  push(enqueueMessageForProcessing) {
    this.messages.push(enqueueMessageForProcessing);
    this.process();
  }
};
var webSocketMessageQueue = new Map();
var webSocketIncomingMessageHandler = new WebSocketMessageQueueProcessor();
function initializeServiceWorkerMessageCommunication() {
  if (!navigator.serviceWorker.controller) {
    console.error("Service worker not registered");
    return;
  }
  let serviceWorkerMessagePortChannel = new MessageChannel();
  serviceWorkerMessagePortChannel.port1.addEventListener(
    "message",
    (processIncomingWebSocketMessage) => {
      let handleWebSocketMessage = processIncomingWebSocketMessage.data;
      if (handleWebSocketMessage) {
        if (handleWebSocketMessage.type === "ready") {
          webSocketIncomingMessageHandler.setChannel(
            serviceWorkerMessagePortChannel,
          );
          return;
        }
        if (
          handleWebSocketMessage.$channel_name ===
            getAndIncrementCounterForPreview &&
          handleWebSocketMessage.$type === generateUniqueSlugForPreview
        ) {
          let webSocketMessage = handleWebSocketMessage.data;
          switch (webSocketMessage.type) {
            case "websocket/opened": {
              let activeSocketConnection = webSocketMessageQueue.get(
                webSocketMessage.wsId,
              );
              if (!activeSocketConnection) {
                console.error("Websocket not found", webSocketMessage);
                break;
              }
              activeSocketConnection._emitOpen(webSocketMessage);
              break;
            }
            case "websocket/closed": {
              let currentWebSocketConnection = webSocketMessageQueue.get(
                webSocketMessage.wsId,
              );
              if (!currentWebSocketConnection) {
                console.error("Websocket not found", webSocketMessage);
                break;
              }
              currentWebSocketConnection._emitClose(webSocketMessage);
              break;
            }
            case "websocket/data": {
              let currentWebSocketSession = webSocketMessageQueue.get(
                webSocketMessage.wsId,
              );
              if (!currentWebSocketSession) {
                console.error("Websocket not found", webSocketMessage);
                break;
              }
              let _webSocketMessageData = webSocketMessage.data;
              currentWebSocketSession._emitData(_webSocketMessageData);
              break;
            }
            case "websocket/error": {
              let _currentWebSocketConnection = webSocketMessageQueue.get(
                webSocketMessage.wsId,
              );
              if (!_currentWebSocketConnection) {
                console.error("Websocket not found", webSocketMessage);
                break;
              }
              _currentWebSocketConnection._emitError(webSocketMessage);
              break;
            }
          }
        }
      }
    },
  );
  serviceWorkerMessagePortChannel.port1.start();
  navigator.serviceWorker.controller.postMessage(
    {
      type: "runtime-init",
    },
    [serviceWorkerMessagePortChannel.port2],
  );
}
function addWebSocketIncomingMessageHandler(
  registerWebSocketIncomingMessageHandler,
) {
  webSocketIncomingMessageHandler.push(registerWebSocketIncomingMessageHandler);
}
async function _processIncomingWebSocketMessage(processWebSocketMessage) {
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
var WebSocketMessageProcessor = class extends EventTarget {
  CONNECTING = 0;
  OPEN = 1;
  CLOSING = 2;
  CLOSED = 3;
  ws;
  _id = (0, initializeAndExposeRandomNumberProperties.default)();
  _bufferedAmount = 0;
  _extensions = "";
  _protocol = "";
  _url;
  _binaryType = "blob";
  _readyState = WebSocketMessageProcessor.CONNECTING;
  onmessage = null;
  onclose = null;
  onerror = null;
  onopen = null;
  constructor(webSocketUrl, supportedWebSocketProtocols) {
    super();
    let resolvedWebSocketUrl =
      webSocketUrl instanceof URL
        ? webSocketUrl
        : new URL(webSocketUrl, window.location.href);
    let localPortNumber = retrievePortFromHostnameIfLocal(resolvedWebSocketUrl);
    let resolvedPathname = resolvedWebSocketUrl.pathname;
    this._url = resolvedWebSocketUrl.href;
    if (localPortNumber !== null) {
      webSocketMessageQueue.set(this._id, this);
      let createWebSocketConnectionPayload = {
        type: "websocket/open",
        wsId: this._id,
        port: localPortNumber,
        pathname: resolvedPathname,
        protocols: supportedWebSocketProtocols,
      };
      addWebSocketIncomingMessageHandler(createWebSocketConnectionPayload);
    } else {
      this.ws = new window.OriginalWebSocket(
        webSocketUrl,
        supportedWebSocketProtocols,
      );
      this.ws.addEventListener("message", (customEventData) => {
        let dispatchAndNotifyCustomEvent = new customEventData.constructor(
          customEventData.type,
          customEventData,
        );
        if (this.onmessage) {
          this.onmessage(customEventData);
        }
        this.dispatchEvent(dispatchAndNotifyCustomEvent);
      });
      this.ws.addEventListener("close", (closeEventDetails) => {
        let generateCloseEventPayload = new closeEventDetails.constructor(
          closeEventDetails.type,
          closeEventDetails,
        );
        if (this.onclose) {
          this.onclose(closeEventDetails);
        }
        this.dispatchEvent(generateCloseEventPayload);
      });
      this.ws.addEventListener("error", (processEventError) => {
        let createAndDispatchEventErrorResponse =
          new processEventError.constructor(
            processEventError.type,
            processEventError,
          );
        if (this.onerror) {
          this.onerror(processEventError);
        }
        this.dispatchEvent(createAndDispatchEventErrorResponse);
      });
      this.ws.addEventListener("open", (processAndDispatchOpenEvent) => {
        let handleOpenEventAndDispatch =
          new processAndDispatchOpenEvent.constructor(
            processAndDispatchOpenEvent.type,
            processAndDispatchOpenEvent,
          );
        if (this.onopen) {
          this.onopen(processAndDispatchOpenEvent);
        }
        this.dispatchEvent(handleOpenEventAndDispatch);
      });
    }
  }
  _emitOpen(openConnectionExtensions) {
    this._readyState = this.OPEN;
    this._extensions = openConnectionExtensions.extensions ?? "";
    let emitOpenConnectionEvent = new Event("open");
    if (this.onopen) {
      this.onopen(emitOpenConnectionEvent);
    }
    this.dispatchEvent(emitOpenConnectionEvent);
  }
  _emitClose(generateCloseEventFromDetails) {
    this._readyState = this.CLOSED;
    let createAndDispatchCloseEvent = new CloseEvent("close", {
      code: generateCloseEventFromDetails.code,
      reason: generateCloseEventFromDetails.reason,
    });
    if (this.onclose) {
      this.onclose(createAndDispatchCloseEvent);
    }
    this.dispatchEvent(createAndDispatchCloseEvent);
  }
  _emitError(processAndDispatchErrorEvent) {
    let generateDetailedErrorFromEvent = createDetailedErrorFromInput(
      processAndDispatchErrorEvent.error,
    );
    let createAndDispatchErrorEvent = new ErrorEvent("error", {
      error: generateDetailedErrorFromEvent,
    });
    if (this.onerror) {
      this.onerror(createAndDispatchErrorEvent);
    }
    this.dispatchEvent(createAndDispatchErrorEvent);
  }
  _emitData(prepareAndDispatchMessageEvent) {
    let formattedMessageData = prepareAndDispatchMessageEvent;
    if (
      typeof prepareAndDispatchMessageEvent != "string" &&
      this._binaryType !== "arraybuffer"
    ) {
      formattedMessageData = new Blob([prepareAndDispatchMessageEvent]);
    }
    let dispatchMessageEvent = new MessageEvent("message", {
      data: formattedMessageData,
    });
    if (this.onmessage) {
      this.onmessage(dispatchMessageEvent);
    }
    this.dispatchEvent(dispatchMessageEvent);
  }
  set binaryType(updateWebSocketBinaryType) {
    if (this.ws) {
      this.ws.binaryType = updateWebSocketBinaryType;
    } else {
      this._binaryType = updateWebSocketBinaryType;
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
  close(webSocketCloseStatusCode, closeReason) {
    if (this.ws) {
      this.ws.close(webSocketCloseStatusCode, closeReason);
    } else {
      this._readyState = this.CLOSING;
      let generateWebSocketClosingEvent = {
        type: "websocket/close",
        wsId: this._id,
        code: webSocketCloseStatusCode,
        reason: closeReason,
      };
      addWebSocketIncomingMessageHandler(generateWebSocketClosingEvent);
    }
  }
  send(webSocketMessageData) {
    if (this.ws) {
      this.ws.send(webSocketMessageData);
    } else {
      _processIncomingWebSocketMessage(webSocketMessageData)
        .then((createAndSendWebSocketDataMessage) => {
          let prepareAndSendWebSocketDataMessage = {
            type: "websocket/data",
            wsId: this._id,
            data: createAndSendWebSocketDataMessage,
          };
          addWebSocketIncomingMessageHandler(
            prepareAndSendWebSocketDataMessage,
          );
        })
        .catch((reportErrorToConsole) => {
          console.error(reportErrorToConsole);
        });
    }
  }
};
var _WebSocketMessageProcessor = WebSocketMessageProcessor;
assignAndReturnPropertyConfig(_WebSocketMessageProcessor, "CONNECTING", 0);
assignAndReturnPropertyConfig(_WebSocketMessageProcessor, "OPEN", 1);
assignAndReturnPropertyConfig(_WebSocketMessageProcessor, "CLOSING", 2);
assignAndReturnPropertyConfig(_WebSocketMessageProcessor, "CLOSED", 3);
window.OriginalWebSocket = window.WebSocket;
window.WebSocket = _WebSocketMessageProcessor;
initializeServiceWorkerMessageCommunication();
window.__CSB_PREVIEW_PROTOCOL = new IncomingMessageIdentifierHandler();
