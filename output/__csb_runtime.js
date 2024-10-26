var defineAndSetPropertyIfExists = (
  defineOrSetDefaultProperty,
  setDefaultPropertyIfMissing,
  defaultValueForProperty,
) =>
  setDefaultPropertyIfMissing in defineOrSetDefaultProperty
    ? Object.defineProperty(
        defineOrSetDefaultProperty,
        setDefaultPropertyIfMissing,
        {
          enumerable: true,
          configurable: true,
          writable: true,
          value: defaultValueForProperty,
        },
      )
    : (defineOrSetDefaultProperty[setDefaultPropertyIfMissing] =
        defaultValueForProperty);
var initializeP5ModuleAndFetchExports =
  (setupAndRetrieveP5Exports, setupAndRetrieveP5ExportsIfNeeded) => () => {
    if (!setupAndRetrieveP5ExportsIfNeeded) {
      setupAndRetrieveP5Exports(
        (setupAndRetrieveP5ExportsIfNeeded = {
          exports: {},
        }).exports,
        setupAndRetrieveP5ExportsIfNeeded,
      );
    }
    return setupAndRetrieveP5ExportsIfNeeded.exports;
  };
var defineAccessorProperties = (
  createProxyAccessorFromSource,
  copyAccessorPropertiesToProxy,
  excludedAccessorPropertyName,
  getAccessorDescriptor,
) => {
  if (
    (copyAccessorPropertiesToProxy &&
      typeof copyAccessorPropertiesToProxy == "object") ||
    typeof copyAccessorPropertiesToProxy == "function"
  ) {
    for (let copyAccessorPropertyToProxy of Object.getOwnPropertyNames(
      copyAccessorPropertiesToProxy,
    )) {
      if (
        !Object.prototype.hasOwnProperty.call(
          createProxyAccessorFromSource,
          copyAccessorPropertyToProxy,
        ) &&
        copyAccessorPropertyToProxy !== excludedAccessorPropertyName
      ) {
        Object.defineProperty(
          createProxyAccessorFromSource,
          copyAccessorPropertyToProxy,
          {
            get: () =>
              copyAccessorPropertiesToProxy[copyAccessorPropertyToProxy],
            enumerable:
              !(getAccessorDescriptor = Object.getOwnPropertyDescriptor(
                copyAccessorPropertiesToProxy,
                copyAccessorPropertyToProxy,
              )) || getAccessorDescriptor.enumerable,
          },
        );
      }
    }
  }
  return createProxyAccessorFromSource;
};
var definePrototypeWithAccessorProperties = (
  sourceObjectOrModule,
  accessorPropertiesToDefine,
  initializePrototypeFromSource,
) => {
  if (sourceObjectOrModule != null) {
    initializePrototypeFromSource = Object.create(
      Object.getPrototypeOf(sourceObjectOrModule),
    );
  } else {
    initializePrototypeFromSource = {};
  }
  return defineAccessorProperties(
    accessorPropertiesToDefine ||
      !sourceObjectOrModule ||
      !sourceObjectOrModule.__esModule
      ? Object.defineProperty(initializePrototypeFromSource, "default", {
          value: sourceObjectOrModule,
          enumerable: true,
        })
      : initializePrototypeFromSource,
    sourceObjectOrModule,
  );
};
var applyPropertyConfigurationSettings = (
  setUpPropertyConfiguration,
  configurePropertySettings,
  propertyDescriptor,
) => {
  defineAndSetPropertyIfExists(
    setUpPropertyConfiguration,
    typeof configurePropertySettings != "symbol"
      ? configurePropertySettings + ""
      : configurePropertySettings,
    propertyDescriptor,
  );
  return propertyDescriptor;
};
var generateZeroPaddedSubstring = initializeP5ModuleAndFetchExports(
  (createZeroPaddedSubstring, createZeroPaddedString) => {
    createZeroPaddedString.exports = function (
      generateFormattedPaddedString,
      _generateZeroPaddedSubstring,
    ) {
      var generateZeroPaddedString =
        "000000000" + generateFormattedPaddedString;
      return generateZeroPaddedString.substr(
        generateZeroPaddedString.length - _generateZeroPaddedSubstring,
      );
    };
  },
);
var initializeUserAgentMetricsReporting = initializeP5ModuleAndFetchExports(
  (
    initializeAndExportUserAgentMetricsSummary,
    _initializeAndExportUserAgentMetricsSummary,
  ) => {
    var initializeAndRetrieveUserAgentMetrics = generateZeroPaddedSubstring();
    var retrieveGlobalExecutionContext =
      typeof window == "object" ? window : self;
    var globalExecutionContextKeysCount = Object.keys(
      retrieveGlobalExecutionContext,
    ).length;
    var getMimeTypesCountFromNavigator = navigator.mimeTypes
      ? navigator.mimeTypes.length
      : 0;
    var generateUserAgentMetricsSummary = initializeAndRetrieveUserAgentMetrics(
      (getMimeTypesCountFromNavigator + navigator.userAgent.length).toString(
        36,
      ) + globalExecutionContextKeysCount.toString(36),
      4,
    );
    _initializeAndExportUserAgentMetricsSummary.exports = function () {
      return generateUserAgentMetricsSummary;
    };
  },
);
var setupAndExposeSecureRandomUtilities = initializeP5ModuleAndFetchExports(
  (
    _initializeSecureRandomFloatGenerator,
    __initializeSecureRandomFloatGenerator,
  ) => {
    var createSecureRandomFloat;
    var isCryptographySupported =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (isCryptographySupported) {
      maxSecureRandomUint32 = Math.pow(2, 32) - 1;
      createSecureRandomFloat = function () {
        return Math.abs(
          isCryptographySupported.getRandomValues(new Uint32Array(1))[0] /
            maxSecureRandomUint32,
        );
      };
    } else {
      createSecureRandomFloat = Math.random;
    }
    var maxSecureRandomUint32;
    __initializeSecureRandomFloatGenerator.exports = createSecureRandomFloat;
  },
);
var initializeAndConfigureSlugGenerationUtilities =
  initializeP5ModuleAndFetchExports(
    (createUniqueCryptoSlug, generateUniqueSlugFromRandomCryptoValue) => {
      var setupUserAgentMetricsForSlug = initializeUserAgentMetricsReporting();
      var generatePaddedCryptoSlug = generateZeroPaddedSubstring();
      var setupAndExposeUniqueSlugGenerator =
        setupAndExposeSecureRandomUtilities();
      var currentUniqueSlugIndex = 0;
      var maxSlugLength = 4;
      var baseForSlugGeneration = 36;
      var maxUniqueSlugsBasedOnLength = Math.pow(
        baseForSlugGeneration,
        maxSlugLength,
      );
      function generateUniqueSlugFromCrypto() {
        return generatePaddedCryptoSlug(
          (
            (setupAndExposeUniqueSlugGenerator() *
              maxUniqueSlugsBasedOnLength) <<
            0
          ).toString(baseForSlugGeneration),
          maxSlugLength,
        );
      }
      function incrementUniqueSlugCounter() {
        if (currentUniqueSlugIndex < maxUniqueSlugsBasedOnLength) {
          currentUniqueSlugIndex = currentUniqueSlugIndex;
        } else {
          currentUniqueSlugIndex = 0;
        }
        currentUniqueSlugIndex++;
        return currentUniqueSlugIndex - 1;
      }
      function generateUniqueIdentifierSlug() {
        var defaultCharacterForSlug = "c";
        var timestampBase36ForUniqueSlug = new Date()
          .getTime()
          .toString(baseForSlugGeneration);
        var generatePaddedSlugIndex = generatePaddedCryptoSlug(
          incrementUniqueSlugCounter().toString(baseForSlugGeneration),
          maxSlugLength,
        );
        var userDeviceMetricsForSlugGeneration = setupUserAgentMetricsForSlug();
        var generateSlugWithTimestampAndMetrics =
          generateUniqueSlugFromCrypto() + generateUniqueSlugFromCrypto();
        return (
          defaultCharacterForSlug +
          timestampBase36ForUniqueSlug +
          generatePaddedSlugIndex +
          userDeviceMetricsForSlugGeneration +
          generateSlugWithTimestampAndMetrics
        );
      }
      generateUniqueIdentifierSlug.slug = function () {
        var generateUniqueSlugWithTimestamp = new Date().getTime().toString(36);
        var generateNextUniqueSlugWithWrapAround = incrementUniqueSlugCounter()
          .toString(36)
          .slice(-4);
        var getUserAgentSlugBoundaryChars =
          setupUserAgentMetricsForSlug().slice(0, 1) +
          setupUserAgentMetricsForSlug().slice(-1);
        var getLastTwoCharsFromCryptoSlug =
          generateUniqueSlugFromCrypto().slice(-2);
        return (
          generateUniqueSlugWithTimestamp.slice(-2) +
          generateNextUniqueSlugWithWrapAround +
          getUserAgentSlugBoundaryChars +
          getLastTwoCharsFromCryptoSlug
        );
      };
      generateUniqueIdentifierSlug.isCuid = function (isCuidStringValid) {
        if (typeof isCuidStringValid != "string") {
          return false;
        } else {
          return !!isCuidStringValid.startsWith("c");
        }
      };
      generateUniqueIdentifierSlug.isSlug = function (isSlugFormatValid) {
        if (typeof isSlugFormatValid != "string") {
          return false;
        }
        var getSlugCharacterCount = isSlugFormatValid.length;
        return getSlugCharacterCount >= 7 && getSlugCharacterCount <= 10;
      };
      generateUniqueIdentifierSlug.fingerprint = setupUserAgentMetricsForSlug;
      generateUniqueSlugFromRandomCryptoValue.exports =
        generateUniqueIdentifierSlug;
    },
  );
var initializeRandomNumberPropertiesForSlugGeneration =
  definePrototypeWithAccessorProperties(
    initializeAndConfigureSlugGenerationUtilities(),
  );
var createDetailedErrorFromOriginal = (generateErrorWithDetailedInfo) => {
  let _createDetailedErrorFromOriginal = new Error(
    generateErrorWithDetailedInfo.message,
  );
  for (let errorDetailPropertyKeys of Object.keys(
    generateErrorWithDetailedInfo,
  )) {
    _createDetailedErrorFromOriginal[errorDetailPropertyKeys] =
      generateErrorWithDetailedInfo[errorDetailPropertyKeys];
  }
  return _createDetailedErrorFromOriginal;
};
var previewManagerIdentifier = "preview-manager";
var previewRuntimeResponse = "preview/runtime-response";
var invokeTemplateFunctionKey = "INJECT_AND_INVOKE";
var hasPreviewBeenLoaded = "HAS_PREVIEW_LOADED";
var previewLoadStatusKey = "PREVIEW_LOADED";
var injectionSuccessMessage = "INJECT_SUCCESS";
function isStringTypeIdentifierValid(isValidStringTypeIdentifier) {
  return (
    isValidStringTypeIdentifier &&
    typeof isValidStringTypeIdentifier.type == "string"
  );
}
function generateModuleErrorHandlingWrapper(createErrorHandlingWrapper) {
  return (
    "(function $csb$eval(module, exports) {" +
    createErrorHandlingWrapper +
    "\n})"
  );
}
function initializeAndExecuteModuleWithErrorHandlingAndReturnActivation(
  initializeAndExecuteModuleWithErrorHandlingAndHandleErrors,
) {
  let executeAndHandleModuleActivationWithErrors =
    generateModuleErrorHandlingWrapper(
      initializeAndExecuteModuleWithErrorHandlingAndHandleErrors,
    );
  let moduleExecutionContext = {
    exports: {},
  };
  (0, eval)(executeAndHandleModuleActivationWithErrors).apply(this, [
    moduleExecutionContext,
    moduleExecutionContext.exports,
  ]);
  return moduleExecutionContext.exports.activate;
}
var MessageEventHandler = class {
  origin = null;
  constructor() {
    window.addEventListener("message", (processIncomingMessageEvent) => {
      let messageEventData = processIncomingMessageEvent.data;
      if (isStringTypeIdentifierValid(messageEventData)) {
        switch (messageEventData.type) {
          case invokeTemplateFunctionKey: {
            this.origin = processIncomingMessageEvent.origin;
            this.handleCodeInjection(messageEventData);
            return;
          }
          case hasPreviewBeenLoaded: {
            this.sendOutgoingMessage({
              type: previewLoadStatusKey,
            });
            return;
          }
          default:
            if (messageEventData.type) {
              let incomingMessageListeners =
                this.messageListeners[messageEventData.type];
              if (incomingMessageListeners) {
                incomingMessageListeners.forEach(
                  (processIncomingMessageEventData) =>
                    processIncomingMessageEventData(messageEventData),
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
  handleCodeInjection(executeInjectedCode) {
    if (this.injectedCodeBlocks.has(executeInjectedCode.code)) {
      return;
    }
    this.injectedCodeBlocks.add(executeInjectedCode.code);
    initializeAndExecuteModuleWithErrorHandlingAndReturnActivation(
      executeInjectedCode.code,
    )({
      previewWindow: window,
      previewProtocol: this,
      scope: executeInjectedCode.scope,
    });
    this.sendOutgoingMessage({
      type: injectionSuccessMessage,
      uid: executeInjectedCode.uid,
    });
  }
  async sendOutgoingMessage(prepareAndSendMessage) {
    window.parent.postMessage(prepareAndSendMessage, "*");
  }
  handleIncomingMessage(
    subscribeToMessageHandler,
    registerMessageListenerForSubscriptionType,
  ) {
    if (this.messageListeners[subscribeToMessageHandler]) {
      this.messageListeners[subscribeToMessageHandler]?.push(
        registerMessageListenerForSubscriptionType,
      );
    } else {
      this.messageListeners[subscribeToMessageHandler] = [
        registerMessageListenerForSubscriptionType,
      ];
    }
  }
  addListener(registerIncomingMessageHandler, registerIncomingMessageListener) {
    this.handleIncomingMessage(
      registerIncomingMessageHandler,
      registerIncomingMessageListener,
    );
  }
  sendMessage(outgoingMessage) {
    this.sendOutgoingMessage(outgoingMessage);
  }
};
function _extractPortNumberFromCodeString(extractPortNumberFromCodeString) {
  let __extractPortNumberFromCodeString = +extractPortNumberFromCodeString
    .split(".")[0]
    .split("-")[1];
  if (isNaN(__extractPortNumberFromCodeString)) {
    throw new Error("Invalid port");
  }
  return __extractPortNumberFromCodeString;
}
function extractCodeSegmentsFromSanitizedInput(
  getCleanedCodeSegmentsFromSanitizedInput,
) {
  let extractCodeSegments = getCleanedCodeSegmentsFromSanitizedInput.split(".");
  extractCodeSegments.shift();
  return extractCodeSegments.join(".");
}
var isWebSocketAlreadyPatchedSymbol = Symbol("isPatched");
if (window.WebSocket[isWebSocketAlreadyPatchedSymbol]) {
  throw new Error("Failed to patch WebSocket: class already patched");
}
var allowedLocalhostAndReservedIPs = ["127.0.0.1", "localhost"];
var getPortIfLocalhostOrReserved = (_retrievePortForValidHost) => {
  if (
    allowedLocalhostAndReservedIPs.includes(_retrievePortForValidHost.hostname)
  ) {
    return +_retrievePortForValidHost.port;
  }
  let getPortForAllowedHost = extractCodeSegmentsFromSanitizedInput(
    window.location.hostname,
  );
  let retrievePortForValidatedHostname = extractCodeSegmentsFromSanitizedInput(
    _retrievePortForValidHost.hostname,
  );
  return 8000;
};
var WebSocketMessagesQueueProcessor = class {
  _channel = null;
  messages = [];
  isProcessing = false;
  setChannel(setChannelAndStartProcessing) {
    this._channel = setChannelAndStartProcessing;
    this.process();
  }
  process() {
    if (this.isProcessing || !this._channel) {
      return;
    }
    let retrieveNextMessageFromQueue = this.messages.shift();
    if (retrieveNextMessageFromQueue) {
      this.isProcessing = true;
      this._channel.port1.postMessage(retrieveNextMessageFromQueue);
      this.isProcessing = false;
      this.process();
    }
  }
  push(enqueueMessageAndProcessQueue) {
    this.messages.push(enqueueMessageAndProcessQueue);
    this.process();
  }
};
var webSocketMessageHandlerRegistry = new Map();
var webSocketMessagesQueueProcessor = new WebSocketMessagesQueueProcessor();
function initializeServiceWorkerMessageChannel() {
  if (!navigator.serviceWorker.controller) {
    console.error("Service worker not registered");
    return;
  }
  let serviceWorkerMessageChannel = new MessageChannel();
  serviceWorkerMessageChannel.port1.addEventListener(
    "message",
    (processWebSocketIncomingMessages) => {
      let processIncomingWebSocketMessage =
        processWebSocketIncomingMessages.data;
      if (processIncomingWebSocketMessage) {
        if (processIncomingWebSocketMessage.type === "ready") {
          webSocketMessagesQueueProcessor.setChannel(
            serviceWorkerMessageChannel,
          );
          return;
        }
        if (
          processIncomingWebSocketMessage.$channel_name ===
            previewManagerIdentifier &&
          processIncomingWebSocketMessage.$type === previewRuntimeResponse
        ) {
          let receivedWebSocketMessage = processIncomingWebSocketMessage.data;
          switch (receivedWebSocketMessage.type) {
            case "websocket/opened": {
              let __currentWebSocketHandler =
                webSocketMessageHandlerRegistry.get(
                  receivedWebSocketMessage.wsId,
                );
              if (!__currentWebSocketHandler) {
                console.error("Websocket not found", receivedWebSocketMessage);
                break;
              }
              __currentWebSocketHandler._emitOpen(receivedWebSocketMessage);
              break;
            }
            case "websocket/closed": {
              let retrieveWebSocketConnectionById =
                webSocketMessageHandlerRegistry.get(
                  receivedWebSocketMessage.wsId,
                );
              if (!retrieveWebSocketConnectionById) {
                console.error("Websocket not found", receivedWebSocketMessage);
                break;
              }
              retrieveWebSocketConnectionById._emitClose(
                receivedWebSocketMessage,
              );
              break;
            }
            case "websocket/data": {
              let currentWebSocketHandler = webSocketMessageHandlerRegistry.get(
                receivedWebSocketMessage.wsId,
              );
              if (!currentWebSocketHandler) {
                console.error("Websocket not found", receivedWebSocketMessage);
                break;
              }
              let webSocketMessageData = receivedWebSocketMessage.data;
              currentWebSocketHandler._emitData(webSocketMessageData);
              break;
            }
            case "websocket/error": {
              let _currentWebSocketHandler =
                webSocketMessageHandlerRegistry.get(
                  receivedWebSocketMessage.wsId,
                );
              if (!_currentWebSocketHandler) {
                console.error("Websocket not found", receivedWebSocketMessage);
                break;
              }
              _currentWebSocketHandler._emitError(receivedWebSocketMessage);
              break;
            }
          }
        }
      }
    },
  );
  serviceWorkerMessageChannel.port1.start();
  navigator.serviceWorker.controller.postMessage(
    {
      type: "runtime-init",
    },
    [serviceWorkerMessageChannel.port2],
  );
}
function enqueueWebSocketMessageHandler(addMessageToWebSocketMessageQueue) {
  webSocketMessagesQueueProcessor.push(addMessageToWebSocketMessageQueue);
}
async function handleReceivedWebSocketData(processReceivedWebSocketMessage) {
  if (typeof processReceivedWebSocketMessage == "string") {
    return processReceivedWebSocketMessage;
  } else if (processReceivedWebSocketMessage instanceof Blob) {
    return processReceivedWebSocketMessage.arrayBuffer();
  } else if ("buffer" in processReceivedWebSocketMessage) {
    return processReceivedWebSocketMessage.buffer;
  } else {
    return processReceivedWebSocketMessage;
  }
}
var CustomWebSocketClient = class extends EventTarget {
  CONNECTING = 0;
  OPEN = 1;
  CLOSING = 2;
  CLOSED = 3;
  ws;
  _id = (0, initializeRandomNumberPropertiesForSlugGeneration.default)();
  _bufferedAmount = 0;
  _extensions = "";
  _protocol = "";
  _url;
  _binaryType = "blob";
  _readyState = CustomWebSocketClient.CONNECTING;
  onmessage = null;
  onclose = null;
  onerror = null;
  onopen = null;
  constructor(initialWebSocketUrl, webSocketSubprotocols) {
    super();
    let resolvedWebSocketUrl =
      initialWebSocketUrl instanceof URL
        ? initialWebSocketUrl
        : new URL(initialWebSocketUrl, window.location.href);
    let localhostPortIfApplicable =
      getPortIfLocalhostOrReserved(resolvedWebSocketUrl);
    let webSocketRequestPath = resolvedWebSocketUrl.pathname;
    this._url = resolvedWebSocketUrl.href;
    if (localhostPortIfApplicable !== null) {
      webSocketMessageHandlerRegistry.set(this._id, this);
      let createWebSocketOpenRequest = {
        type: "websocket/open",
        wsId: this._id,
        port: localhostPortIfApplicable,
        pathname: webSocketRequestPath,
        protocols: webSocketSubprotocols,
      };
      enqueueWebSocketMessageHandler(createWebSocketOpenRequest);
    } else {
      this.ws = new window.OriginalWebSocket(
        initialWebSocketUrl,
        webSocketSubprotocols,
      );
      this.ws.addEventListener("message", (payloadEvent) => {
        let initializeAndDispatchPayloadEvent = new payloadEvent.constructor(
          payloadEvent.type,
          payloadEvent,
        );
        if (this.onmessage) {
          this.onmessage(payloadEvent);
        }
        this.dispatchEvent(initializeAndDispatchPayloadEvent);
      });
      this.ws.addEventListener("close", (dispatchCloseEvent) => {
        let _createAndDispatchCloseEvent = new dispatchCloseEvent.constructor(
          dispatchCloseEvent.type,
          dispatchCloseEvent,
        );
        if (this.onclose) {
          this.onclose(dispatchCloseEvent);
        }
        this.dispatchEvent(_createAndDispatchCloseEvent);
      });
      this.ws.addEventListener("error", (_createAndDispatchErrorResponse) => {
        let handleErrorResponseAndDispatch =
          new _createAndDispatchErrorResponse.constructor(
            _createAndDispatchErrorResponse.type,
            _createAndDispatchErrorResponse,
          );
        if (this.onerror) {
          this.onerror(_createAndDispatchErrorResponse);
        }
        this.dispatchEvent(handleErrorResponseAndDispatch);
      });
      this.ws.addEventListener("open", (createAndDispatchOpenEvent) => {
        let dispatchOpenEvent = new createAndDispatchOpenEvent.constructor(
          createAndDispatchOpenEvent.type,
          createAndDispatchOpenEvent,
        );
        if (this.onopen) {
          this.onopen(createAndDispatchOpenEvent);
        }
        this.dispatchEvent(dispatchOpenEvent);
      });
    }
  }
  _emitOpen(handleConnectionExtensions) {
    this._readyState = this.OPEN;
    this._extensions = handleConnectionExtensions.extensions ?? "";
    let createAndDispatchOpenEvent = new Event("open");
    if (this.onopen) {
      this.onopen(createAndDispatchOpenEvent);
    }
    this.dispatchEvent(createAndDispatchOpenEvent);
  }
  _emitClose(retrieveCloseEventDetails) {
    this._readyState = this.CLOSED;
    let createAndDispatchCloseEvent = new CloseEvent("close", {
      code: retrieveCloseEventDetails.code,
      reason: retrieveCloseEventDetails.reason,
    });
    if (this.onclose) {
      this.onclose(createAndDispatchCloseEvent);
    }
    this.dispatchEvent(createAndDispatchCloseEvent);
  }
  _emitError(createAndDispatchDetailedErrorEvent) {
    let generateDetailedErrorFromEvent = createDetailedErrorFromOriginal(
      createAndDispatchDetailedErrorEvent.error,
    );
    let createAndDispatchErrorEvent = new ErrorEvent("error", {
      error: generateDetailedErrorFromEvent,
    });
    if (this.onerror) {
      this.onerror(createAndDispatchErrorEvent);
    }
    this.dispatchEvent(createAndDispatchErrorEvent);
  }
  _emitData(prepareAndSendMessage) {
    let preparedMessageData = prepareAndSendMessage;
    if (
      typeof prepareAndSendMessage != "string" &&
      this._binaryType !== "arraybuffer"
    ) {
      preparedMessageData = new Blob([prepareAndSendMessage]);
    }
    let createAndDispatchMessageEvent = new MessageEvent("message", {
      data: preparedMessageData,
    });
    if (this.onmessage) {
      this.onmessage(createAndDispatchMessageEvent);
    }
    this.dispatchEvent(createAndDispatchMessageEvent);
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
  close(webSocketCloseCode, closureDescription) {
    if (this.ws) {
      this.ws.close(webSocketCloseCode, closureDescription);
    } else {
      this._readyState = this.CLOSING;
      let generateWebSocketClosureEvent = {
        type: "websocket/close",
        wsId: this._id,
        code: webSocketCloseCode,
        reason: closureDescription,
      };
      enqueueWebSocketMessageHandler(generateWebSocketClosureEvent);
    }
  }
  send(webSocketMessage) {
    if (this.ws) {
      this.ws.send(webSocketMessage);
    } else {
      handleReceivedWebSocketData(webSocketMessage)
        .then((_createAndQueueWebSocketDataMessage) => {
          let prepareWebSocketMessageAndQueue = {
            type: "websocket/data",
            wsId: this._id,
            data: _createAndQueueWebSocketDataMessage,
          };
          enqueueWebSocketMessageHandler(prepareWebSocketMessageAndQueue);
        })
        .catch((printErrorMessageToConsole) => {
          console.error(printErrorMessageToConsole);
        });
    }
  }
};
var CustomWebSocketClientHandler = CustomWebSocketClient;
applyPropertyConfigurationSettings(
  CustomWebSocketClientHandler,
  "CONNECTING",
  0,
);
applyPropertyConfigurationSettings(CustomWebSocketClientHandler, "OPEN", 1);
applyPropertyConfigurationSettings(CustomWebSocketClientHandler, "CLOSING", 2);
applyPropertyConfigurationSettings(CustomWebSocketClientHandler, "CLOSED", 3);
window.OriginalWebSocket = window.WebSocket;
window.WebSocket = CustomWebSocketClientHandler;
initializeServiceWorkerMessageChannel();
window.__CSB_PREVIEW_PROTOCOL = new MessageEventHandler();
