var createModuleWrapper = (initializeModule, moduleExports) => () => {
  if (!moduleExports) {
    initializeModule(
      (moduleExports = {
        exports: {},
      }).exports,
      moduleExports,
    );
  }
  return moduleExports.exports;
};
var defineObjectProperties = (
  definePropertiesFromSource,
  sourceObject,
  sourceProperties,
  enumerablePropertyDescriptor,
) => {
  if (
    (sourceObject && typeof sourceObject == "object") ||
    typeof sourceObject == "function"
  ) {
    for (let propertyName of Object.getOwnPropertyNames(sourceObject)) {
      if (
        !Object.prototype.hasOwnProperty.call(
          definePropertiesFromSource,
          propertyName,
        ) &&
        propertyName !== sourceProperties
      ) {
        Object.defineProperty(definePropertiesFromSource, propertyName, {
          get: () => sourceObject[propertyName],
          enumerable:
            !(enumerablePropertyDescriptor = Object.getOwnPropertyDescriptor(
              sourceObject,
              propertyName,
            )) || enumerablePropertyDescriptor.enumerable,
        });
      }
    }
  }
  return definePropertiesFromSource;
};
var createDefaultObjectFromPrototype = (
  _sourceObject,
  initializePrototypeAndDefineProperties,
  createdObject,
) => {
  if (_sourceObject != null) {
    createdObject = Object.create(Object.getPrototypeOf(_sourceObject));
  } else {
    createdObject = {};
  }
  return defineObjectProperties(
    initializePrototypeAndDefineProperties ||
      !_sourceObject ||
      !_sourceObject.__esModule
      ? Object.defineProperty(createdObject, "default", {
          value: _sourceObject,
          enumerable: true,
        })
      : createdObject,
    _sourceObject,
  );
};
var createPaddedStringModule = createModuleWrapper(
  (padStringWithZerosToLength, padStringWithZerosToLengthExport) => {
    padStringWithZerosToLengthExport.exports = function (
      padStringWithZeros,
      paddingLength,
    ) {
      var paddedString = "000000000" + padStringWithZeros;
      return paddedString.substr(paddedString.length - paddingLength);
    };
  },
);
var createUniqueIdentifier = createModuleWrapper(
  (_createPaddedString, exportPaddedString) => {
    var createPaddedStringInstance = createPaddedStringModule();
    var globalObject = typeof window == "object" ? window : self;
    var globalObjectKeysCount = Object.keys(globalObject).length;
    var mimeTypesCount = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var paddedStringValue = createPaddedStringInstance(
      (mimeTypesCount + navigator.userAgent.length).toString(36) +
        globalObjectKeysCount.toString(36),
      4,
    );
    exportPaddedString.exports = function () {
      return paddedStringValue;
    };
  },
);
var generateSecureRandomValue = createModuleWrapper(
  (generateRandomValue, exportedRandomValueGenerator) => {
    var randomValueGenerator;
    var cryptoAvailable =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (cryptoAvailable) {
      maxRandomUInt32 = Math.pow(2, 32) - 1;
      randomValueGenerator = function () {
        return Math.abs(
          cryptoAvailable.getRandomValues(new Uint32Array(1))[0] /
            maxRandomUInt32,
        );
      };
    } else {
      randomValueGenerator = Math.random;
    }
    var maxRandomUInt32;
    exportedRandomValueGenerator.exports = randomValueGenerator;
  },
);
var createRandomStringGenerator = createModuleWrapper(
  (generateCuid, generateCuidFunction) => {
    var createUniqueIdentifierFunction = createUniqueIdentifier();
    var createPaddedString = createPaddedStringModule();
    var _generateSecureRandomValue = generateSecureRandomValue();
    var currentCounter = 0;
    var defaultBase = 4;
    var base36 = 36;
    var uniqueIdentifierBase = Math.pow(base36, defaultBase);
    function generateSecureIdentifier() {
      return createPaddedString(
        ((_generateSecureRandomValue() * uniqueIdentifierBase) << 0).toString(
          base36,
        ),
        defaultBase,
      );
    }
    function resetCounterIfExceedsBase() {
      if (currentCounter < uniqueIdentifierBase) {
        currentCounter = currentCounter;
      } else {
        currentCounter = 0;
      }
      currentCounter++;
      return currentCounter - 1;
    }
    function generateUniqueIdentifier() {
      var prefixIdentifier = "c";
      var timestampBase36 = new Date().getTime().toString(base36);
      var paddedUniqueIdentifier = createPaddedString(
        resetCounterIfExceedsBase().toString(base36),
        defaultBase,
      );
      var _createUniqueIdentifier = createUniqueIdentifierFunction();
      var randomStringCombination =
        generateSecureIdentifier() + generateSecureIdentifier();
      return (
        prefixIdentifier +
        timestampBase36 +
        paddedUniqueIdentifier +
        _createUniqueIdentifier +
        randomStringCombination
      );
    }
    generateUniqueIdentifier.slug = function () {
      var currentTimestampBase36 = new Date().getTime().toString(36);
      var lastFourCharactersOfF2 = resetCounterIfExceedsBase()
        .toString(36)
        .slice(-4);
      var uniqueIdentifierSlice =
        createUniqueIdentifierFunction().slice(0, 1) +
        createUniqueIdentifierFunction().slice(-1);
      var lastTwoCharactersOfFunctionF = generateSecureIdentifier().slice(-2);
      return (
        currentTimestampBase36.slice(-2) +
        lastFourCharactersOfF2 +
        uniqueIdentifierSlice +
        lastTwoCharactersOfFunctionF
      );
    };
    generateUniqueIdentifier.isCuid = function (validateCuid) {
      if (typeof validateCuid != "string") {
        return false;
      } else {
        return !!validateCuid.startsWith("c");
      }
    };
    generateUniqueIdentifier.isSlug = function (slugString) {
      if (typeof slugString != "string") {
        return false;
      }
      var slugLength = slugString.length;
      return slugLength >= 7 && slugLength <= 10;
    };
    generateUniqueIdentifier.fingerprint = createUniqueIdentifierFunction;
    generateCuidFunction.exports = generateUniqueIdentifier;
  },
);
var _createModuleWrapper = createModuleWrapper((deferredExecutorFactory) => {
  "use strict";

  Object.defineProperty(deferredExecutorFactory, "__esModule", {
    value: true,
  });
  deferredExecutorFactory.createDeferredExecutor = undefined;
  function createPromiseHandler() {
    let createPromiseHandlerFunction = (
      handlePromiseResolutionAndRejection,
      handleRejection,
    ) => {
      createPromiseHandlerFunction.state = "pending";
      createPromiseHandlerFunction.resolve = (handlePromiseResolution) => {
        if (createPromiseHandlerFunction.state !== "pending") {
          return;
        }
        createPromiseHandlerFunction.result = handlePromiseResolution;
        let resolvePromise = (createPromiseStateHandler) => {
          createPromiseHandlerFunction.state = "fulfilled";
          return createPromiseStateHandler;
        };
        return handlePromiseResolutionAndRejection(
          handlePromiseResolution instanceof Promise
            ? handlePromiseResolution
            : Promise.resolve(handlePromiseResolution).then(resolvePromise),
        );
      };
      createPromiseHandlerFunction.reject = (updatePromiseStateToRejected) => {
        if (createPromiseHandlerFunction.state === "pending") {
          queueMicrotask(() => {
            createPromiseHandlerFunction.state = "rejected";
          });
          return handleRejection(
            (createPromiseHandlerFunction.rejectionReason =
              updatePromiseStateToRejected),
          );
        }
      };
    };
    return createPromiseHandlerFunction;
  }
  deferredExecutorFactory.createDeferredExecutor = createPromiseHandler;
});
var createDeferredExecutor = createModuleWrapper((DeferredPromiseWrapper) => {
  "use strict";

  Object.defineProperty(DeferredPromiseWrapper, "__esModule", {
    value: true,
  });
  DeferredPromiseWrapper.DeferredPromise = undefined;
  var createDeferredExecutorWrapper = _createModuleWrapper();
  var DeferredPromise = class extends Promise {
    #e;
    resolve;
    reject;
    constructor(userAuthentication = null) {
      let __deferredExecutor = (0,
      createDeferredExecutorWrapper.createDeferredExecutor)();
      super((deferredExecutorFunction, ___deferredPromise) => {
        __deferredExecutor(deferredExecutorFunction, ___deferredPromise);
        userAuthentication?.(
          __deferredExecutor.resolve,
          __deferredExecutor.reject,
        );
      });
      this.#e = __deferredExecutor;
      this.resolve = this.#e.resolve;
      this.reject = this.#e.reject;
    }
    get state() {
      return this.#e.state;
    }
    get rejectionReason() {
      return this.#e.rejectionReason;
    }
    then(processThenFunction, additionalProcessHandler) {
      return this.#t(super.then(processThenFunction, additionalProcessHandler));
    }
    catch(errorHandler) {
      return this.#t(super.catch(errorHandler));
    }
    finally(finalizePromise) {
      return this.#t(super.finally(finalizePromise));
    }
    #t(definePromiseProperties) {
      return Object.defineProperties(definePromiseProperties, {
        resolve: {
          configurable: true,
          value: this.resolve,
        },
        reject: {
          configurable: true,
          value: this.reject,
        },
      });
    }
  };
  DeferredPromiseWrapper.DeferredPromise = DeferredPromise;
});
var createDeferredPromise = createModuleWrapper((createBindingFunction) => {
  "use strict";

  var createBinding =
    (createBindingFunction && createBindingFunction.__createBinding) ||
    (Object.create
      ? function (
          deferredExecutor,
          _deferredExecutor,
          _createDeferredPromise,
          ____createDeferredPromise = _createDeferredPromise,
        ) {
          var propertyDescriptor = Object.getOwnPropertyDescriptor(
            _deferredExecutor,
            _createDeferredPromise,
          );
          if (
            !propertyDescriptor ||
            ("get" in propertyDescriptor
              ? !_deferredExecutor.__esModule
              : propertyDescriptor.writable || propertyDescriptor.configurable)
          ) {
            propertyDescriptor = {
              enumerable: true,
              get() {
                return _deferredExecutor[_createDeferredPromise];
              },
            };
          }
          Object.defineProperty(
            deferredExecutor,
            ____createDeferredPromise,
            propertyDescriptor,
          );
        }
      : function (
          __createDeferredPromise,
          ___createDeferredPromise,
          deferredPromiseExecutor,
          ______________deferredPromiseExecutor = deferredPromiseExecutor,
        ) {
          __createDeferredPromise[______________deferredPromiseExecutor] =
            ___createDeferredPromise[deferredPromiseExecutor];
        });
  var exportAllBindings =
    (createBindingFunction && createBindingFunction.__exportStar) ||
    function (createDeferredWrapper, handleDeferredPromise) {
      for (var deferredWrapperKey in createDeferredWrapper) {
        if (
          deferredWrapperKey !== "default" &&
          !Object.prototype.hasOwnProperty.call(
            handleDeferredPromise,
            deferredWrapperKey,
          )
        ) {
          createBinding(
            handleDeferredPromise,
            createDeferredWrapper,
            deferredWrapperKey,
          );
        }
      }
    };
  Object.defineProperty(createBindingFunction, "__esModule", {
    value: true,
  });
  exportAllBindings(_createModuleWrapper(), createBindingFunction);
  exportAllBindings(createDeferredExecutor(), createBindingFunction);
});
var _createDeferredExecutor = createDefaultObjectFromPrototype(
  createRandomStringGenerator(),
);
var createDeferredPromiseWrapper = /(%?)(%([sdjo]))/g;
function processDeferredValue(
  _deferredPromiseExecutor,
  _createDeferredPromiseWrapper,
) {
  switch (_createDeferredPromiseWrapper) {
    case "s":
      return _deferredPromiseExecutor;
    case "d":
    case "i":
      return Number(_deferredPromiseExecutor);
    case "j":
      return JSON.stringify(_deferredPromiseExecutor);
    case "o": {
      if (typeof _deferredPromiseExecutor == "string") {
        return _deferredPromiseExecutor;
      }
      let stringifiedDeferredPromiseExecutor = JSON.stringify(
        _deferredPromiseExecutor,
      );
      if (
        stringifiedDeferredPromiseExecutor === "{}" ||
        stringifiedDeferredPromiseExecutor === "[]" ||
        /^\[object .+?\]$/.test(stringifiedDeferredPromiseExecutor)
      ) {
        return _deferredPromiseExecutor;
      } else {
        return stringifiedDeferredPromiseExecutor;
      }
    }
  }
}
function replaceDeferredPromiseArguments(
  __deferredPromiseExecutor,
  ...deferredPromiseArgs
) {
  if (deferredPromiseArgs.length === 0) {
    return __deferredPromiseExecutor;
  }
  let currentArgumentIndex = 0;
  let updatedDeferredPromiseExecutor = __deferredPromiseExecutor.replace(
    createDeferredPromiseWrapper,
    (
      deferredValueHandler,
      isDeferredValueProcessed,
      deferredValueProcessor,
      deferredValueProcessingFunction,
    ) => {
      let deferredValue = deferredPromiseArgs[currentArgumentIndex];
      let processedDeferredValue = processDeferredValue(
        deferredValue,
        deferredValueProcessingFunction,
      );
      if (isDeferredValueProcessed) {
        return deferredValueHandler;
      } else {
        currentArgumentIndex++;
        return processedDeferredValue;
      }
    },
  );
  if (currentArgumentIndex < deferredPromiseArgs.length) {
    updatedDeferredPromiseExecutor +=
      " " + deferredPromiseArgs.slice(currentArgumentIndex).join(" ");
  }
  updatedDeferredPromiseExecutor = updatedDeferredPromiseExecutor.replace(
    /%{2,2}/g,
    "%",
  );
  return updatedDeferredPromiseExecutor;
}
var exportDeferredWrappers = 2;
function updateDeferredPromiseStack(exportDeferredPromises) {
  if (!exportDeferredPromises.stack) {
    return;
  }
  let stackLines = exportDeferredPromises.stack.split("\n");
  stackLines.splice(1, exportDeferredWrappers);
  exportDeferredPromises.stack = stackLines.join("\n");
}
var _handleDeferredPromise = class extends Error {
  constructor(initialValue, ..._deferredPromiseArgs) {
    super(initialValue);
    this.message = initialValue;
    this.name = "Invariant Violation";
    this.message = replaceDeferredPromiseArguments(
      initialValue,
      ..._deferredPromiseArgs,
    );
    updateDeferredPromiseStack(this);
  }
};
var __handleDeferredPromise = (
  _isPromiseResolved,
  promiseHandler,
  ...promiseArguments
) => {
  if (!_isPromiseResolved) {
    throw new _handleDeferredPromise(promiseHandler, ...promiseArguments);
  }
};
__handleDeferredPromise.as = (
  PromiseHandler,
  isPromiseResolved,
  deferredPromiseArguments,
  ...additionalDeferredArguments
) => {
  if (!isPromiseResolved) {
    throw PromiseHandler.prototype.name != null
      ? new PromiseHandler(
          replaceDeferredPromiseArguments(
            deferredPromiseArguments,
            additionalDeferredArguments,
          ),
        )
      : PromiseHandler(
          replaceDeferredPromiseArguments(
            deferredPromiseArguments,
            additionalDeferredArguments,
          ),
        );
  }
};
var serializeDeferredPromiseExecutor = createDefaultObjectFromPrototype(
  createDeferredPromise(),
);
var processDeferredPromise = "preview-manager";
var ___deferredPromiseExecutor = "preview/request";
var ____deferredPromiseExecutor = "preview/response";
var _____deferredPromiseExecutor = "preview/runtime-request";
var ______deferredPromiseExecutor = "preview/runtime-response";
var _______deferredPromiseExecutor = "bridge/close";
function getDefaultPort(deferredPromiseHandler) {
  let defaultPort = 8000;
  if (isNaN(defaultPort)) {
    throw new Error("Invalid port");
  }
  return defaultPort;
}
function getPathWithoutFirstSegment(replaceDeferredPromiseArgs) {
  let segmentsAfterFirst = replaceDeferredPromiseArgs.split(".");
  segmentsAfterFirst.shift();
  return segmentsAfterFirst.join(".");
}
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", async (waitForClientClaim) => {
  waitForClientClaim.waitUntil(self.clients.claim());
});
var ________deferredPromiseExecutor = new Map();
var replaceDeferredPromiseWrapper = new Map();
function sendDeferredPromiseToRuntime(_________deferredPromiseExecutor) {
  if (_________deferredPromiseExecutor.runtimeId) {
    let __deferredPromise = replaceDeferredPromiseWrapper.get(
      _________deferredPromiseExecutor.runtimeId,
    );
    if (__deferredPromise) {
      __deferredPromise.postMessage(_________deferredPromiseExecutor);
    }
  }
}
function handlePromiseResponse(handleInvalidPromise) {
  handleInvalidPromise.onmessage = (handleDeferredPromiseResponse) => {
    let { data: deferredPromiseResponse } = handleDeferredPromiseResponse;
    switch (deferredPromiseResponse.$type) {
      case ____deferredPromiseExecutor: {
        let _deferredPromiseResponse = deferredPromiseResponse;
        let _deferredPromiseHandler = ________deferredPromiseExecutor.get(
          _deferredPromiseResponse.id,
        );
        __handleDeferredPromise(
          _deferredPromiseHandler,
          'Failed to handle "PREVIEW_RESPONSE_TYPE" message from the bridge: unknown request ID "%s"',
          _deferredPromiseResponse.id,
        );
        ________deferredPromiseExecutor.delete(_deferredPromiseResponse.id);
        _deferredPromiseHandler.resolve(_deferredPromiseResponse.response);
        break;
      }
      case ______deferredPromiseExecutor: {
        sendDeferredPromiseToRuntime(deferredPromiseResponse);
        break;
      }
      case _______deferredPromiseExecutor: {
        ___handleDeferredPromise = createDeferredPromiseAndHandleResponse();
        break;
      }
    }
  };
}
function createDeferredPromiseAndHandleResponse() {
  let _deferredPromise = new serializeDeferredPromiseExecutor.DeferredPromise();
  _deferredPromise.then((promiseResponseHandler) => {
    handlePromiseResponse(promiseResponseHandler);
    return promiseResponseHandler;
  });
  return _deferredPromise;
}
var ___handleDeferredPromise = createDeferredPromiseAndHandleResponse();
async function handleDeferredMessage(____handleDeferredPromise) {
  let deferredMessage = await ___handleDeferredPromise;
  __handleDeferredPromise(
    deferredMessage,
    "Failed to send message to the bridge: bridge message port is not defined",
    ____handleDeferredPromise,
  );
  deferredMessage.postMessage(____handleDeferredPromise);
}
self.addEventListener("message", async (handleMessageEvent) => {
  if (!handleMessageEvent.data?.type) {
    return;
  }
  switch (handleMessageEvent.data.type) {
    case "bridge-channel-init": {
      let bridgePort = handleMessageEvent.ports[0];
      __handleDeferredPromise(
        ___handleDeferredPromise.state === "pending",
        "Failed to initialize bridge: bridge port promise already fulfilled from previous evaluation.",
      );
      ___handleDeferredPromise.resolve(bridgePort);
      break;
    }
    case "runtime-init": {
      let messagePort = handleMessageEvent.ports[0];
      let _____________deferredPromiseExecutor = (0,
      _createDeferredExecutor.default)();
      replaceDeferredPromiseWrapper.set(
        _____________deferredPromiseExecutor,
        messagePort,
      );
      messagePort.addEventListener("message", (__deferredPromiseHandler) => {
        let deferredPromiseConfig = {
          $channel_name: processDeferredPromise,
          $type: _____deferredPromiseExecutor,
          runtimeId: _____________deferredPromiseExecutor,
          data: __deferredPromiseHandler.data,
        };
        handleDeferredMessage(deferredPromiseConfig);
      });
      messagePort.start();
      messagePort.postMessage({
        type: "ready",
      });
      break;
    }
    case "ping": {
      if (!(handleMessageEvent.source instanceof Client)) {
        return;
      }
      let clientInstance = await self.clients.get(handleMessageEvent.source.id);
      if (clientInstance) {
        clientInstance.postMessage({
          type: "pong",
        });
      }
      break;
    }
  }
});
var __________deferredPromiseExecutor = ["127.0.0.1", "localhost"];
function resolveDeferredPromise(
  ___________deferredPromiseExecutor,
  ____________deferredPromiseExecutor,
) {
  if (
    __________deferredPromiseExecutor.includes(
      ___________deferredPromiseExecutor.hostname,
    )
  ) {
    return +___________deferredPromiseExecutor.port;
  }
  let resolveAndCompareHostnames = getPathWithoutFirstSegment(
    ____________deferredPromiseExecutor.hostname,
  );
  let resolvedHostname = getPathWithoutFirstSegment(
    ___________deferredPromiseExecutor.hostname,
  );
  if (resolveAndCompareHostnames === resolvedHostname) {
    return getDefaultPort(___________deferredPromiseExecutor.hostname);
  } else {
    return null;
  }
}
function handlePreviewRequestWithTimeout(
  handleInvalidPromiseMessage,
  handlePreviewResponse,
) {
  let deferredPromiseId = (0, _createDeferredExecutor.default)();
  let deferredPromise = new serializeDeferredPromiseExecutor.DeferredPromise();
  let timeoutHandler = setTimeout(() => {
    ________deferredPromiseExecutor.delete(deferredPromiseId);
    deferredPromise.reject(
      new Error(
        "Failed to handle " +
          handlePreviewResponse.method +
          " " +
          handlePreviewResponse.url +
          " request: no response received from the BroadcastChannel within timeout. There's likely an issue with the bridge/worker communication.",
      ),
    );
  }, 20000);
  let previewRequestDetails = {
    $channel_name: processDeferredPromise,
    $type: ___deferredPromiseExecutor,
    port: handleInvalidPromiseMessage,
    id: deferredPromiseId,
    request: handlePreviewResponse,
  };
  ________deferredPromiseExecutor.set(deferredPromiseId, deferredPromise);
  handleDeferredMessage(previewRequestDetails);
  return deferredPromise.finally(() => clearTimeout(timeoutHandler));
}
self.addEventListener("fetch", (handleFetchRequest) => {
  let clonedFetchRequest = handleFetchRequest.request.clone();
  let parsedURL = new URL(clonedFetchRequest.url);
  if (
    parsedURL.pathname.includes("/proprietary/") &&
    !parsedURL.pathname.includes("/escape-hatch/")
  ) {
    if (parsedURL.pathname === "/__csb_runtime.js") {
      return handleFetchRequest.respondWith(fetch("/__csb_runtime.js"));
    } else {
      return undefined;
    }
  }
  let calculatePort = resolveDeferredPromise(parsedURL, location);
  if (
    parsedURL.pathname.includes("/escape-hatch/") ||
    calculatePort == null ||
    isNaN(calculatePort)
  ) {
    return;
  }
  let handleFetchResponse = async (portNumber) => {
    let requestHeaders = {
      host: "localhost:" + portNumber,
    };
    clonedFetchRequest.headers.forEach((headerValue, headerKey) => {
      requestHeaders[headerKey] = headerValue;
    });
    let fetchRequestOptions = {
      url: clonedFetchRequest.url,
      method: clonedFetchRequest.method,
      body: clonedFetchRequest.body,
      headers: requestHeaders,
    };
    let previewResponse = await handlePreviewRequestWithTimeout(
      portNumber,
      fetchRequestOptions,
    );
    __handleDeferredPromise(
      previewResponse,
      "Failed to respond to %s %s: no response received",
      fetchRequestOptions.method,
      fetchRequestOptions.url,
    );
    return new Response(previewResponse.body, {
      headers: previewResponse.headers,
      status: previewResponse.status,
    });
  };
  return handleFetchRequest.respondWith(handleFetchResponse(calculatePort));
});
