var initializeAndRetrieveModuleExports =
  (setupModuleExports, __initializeAndRetrieveModuleExports) => () => {
    if (!__initializeAndRetrieveModuleExports) {
      setupModuleExports(
        (__initializeAndRetrieveModuleExports = {
          exports: {},
        }).exports,
        __initializeAndRetrieveModuleExports,
      );
    }
    return __initializeAndRetrieveModuleExports.exports;
  };
var copyObjectPropertiesWithDescriptors = (
  copyNonEnumerablePropertiesFromSource,
  sourceObjectForProperties,
  nonEnumerableSourceProperties,
  propertyDescriptor,
) => {
  if (
    (sourceObjectForProperties &&
      typeof sourceObjectForProperties == "object") ||
    typeof sourceObjectForProperties == "function"
  ) {
    for (let propertyKey of Object.getOwnPropertyNames(
      sourceObjectForProperties,
    )) {
      if (
        !Object.prototype.hasOwnProperty.call(
          copyNonEnumerablePropertiesFromSource,
          propertyKey,
        ) &&
        propertyKey !== nonEnumerableSourceProperties
      ) {
        Object.defineProperty(
          copyNonEnumerablePropertiesFromSource,
          propertyKey,
          {
            get: () => sourceObjectForProperties[propertyKey],
            enumerable:
              !(propertyDescriptor = Object.getOwnPropertyDescriptor(
                sourceObjectForProperties,
                propertyKey,
              )) || propertyDescriptor.enumerable,
          },
        );
      }
    }
  }
  return copyNonEnumerablePropertiesFromSource;
};
var defineModuleDefaultExport = (
  inputObject,
  inputObjectProperties,
  derivedPrototypeObject,
) => {
  if (inputObject != null) {
    derivedPrototypeObject = Object.create(Object.getPrototypeOf(inputObject));
  } else {
    derivedPrototypeObject = {};
  }
  return copyObjectPropertiesWithDescriptors(
    inputObjectProperties || !inputObject || !inputObject.__esModule
      ? Object.defineProperty(derivedPrototypeObject, "default", {
          value: inputObject,
          enumerable: true,
        })
      : derivedPrototypeObject,
    inputObject,
  );
};
var generatePaddedString = initializeAndRetrieveModuleExports(
  (padNumberWithLeadingZeros, padNumberWithLeadingZerosToFixedLength) => {
    padNumberWithLeadingZerosToFixedLength.exports = function (
      _padStringWithZerosToLength,
      desiredPaddedStringLength,
    ) {
      var zeroPaddedString = "000000000" + _padStringWithZerosToLength;
      return zeroPaddedString.substr(
        zeroPaddedString.length - desiredPaddedStringLength,
      );
    };
  },
);
var createAndExportPaddedNavigatorInfoFunction =
  initializeAndRetrieveModuleExports(
    (createPaddedNavigatorSummary, createAndExportPaddedNavigatorSummary) => {
      var _createPaddedNavigatorSummary = generatePaddedString();
      var globalScope = typeof window == "object" ? window : self;
      var totalGlobalObjectPropertiesCount = Object.keys(globalScope).length;
      var countOfNavigatorMimeTypes = navigator.mimeTypes
        ? navigator.mimeTypes.length
        : 0;
      var getPaddedNavigatorSummary = _createPaddedNavigatorSummary(
        (countOfNavigatorMimeTypes + navigator.userAgent.length).toString(36) +
          totalGlobalObjectPropertiesCount.toString(36),
        4,
      );
      createAndExportPaddedNavigatorSummary.exports = function () {
        return getPaddedNavigatorSummary;
      };
    },
  );
var initializeRandomValueGenerator = initializeAndRetrieveModuleExports(
  (
    generateRandomNormalizedValueBasedOnCrypto,
    getNormalizedRandomValueUsingCrypto,
  ) => {
    var generateNormalizedRandomValue;
    var getNormalizedRandomValue =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (getNormalizedRandomValue) {
      maxSecureRandomValue = Math.pow(2, 32) - 1;
      generateNormalizedRandomValue = function () {
        return Math.abs(
          getNormalizedRandomValue.getRandomValues(new Uint32Array(1))[0] /
            maxSecureRandomValue,
        );
      };
    } else {
      generateNormalizedRandomValue = Math.random;
    }
    var maxSecureRandomValue;
    getNormalizedRandomValueUsingCrypto.exports = generateNormalizedRandomValue;
  },
);
var generateUniqueSlug = initializeAndRetrieveModuleExports(
  (createUniqueSlugAndIdentifier, generateUniqueSlug) => {
    var createUniqueSlug = createAndExportPaddedNavigatorInfoFunction();
    var generateUniqueIdentifierFromIndex = generatePaddedString();
    var _initializeRandomValueGenerator = initializeRandomValueGenerator();
    var uniqueSlugCounter = 0;
    var slugCharacterCount = 4;
    var base36NumberSystem = 36;
    var totalPossibleUniqueSlugs = Math.pow(
      base36NumberSystem,
      slugCharacterCount,
    );
    function generateUniqueSlugForContent() {
      return generateUniqueIdentifierFromIndex(
        (
          (_initializeRandomValueGenerator() * totalPossibleUniqueSlugs) <<
          0
        ).toString(base36NumberSystem),
        slugCharacterCount,
      );
    }
    function getNextAvailableSlugIndex() {
      if (uniqueSlugCounter < totalPossibleUniqueSlugs) {
        uniqueSlugCounter = uniqueSlugCounter;
      } else {
        uniqueSlugCounter = 0;
      }
      uniqueSlugCounter++;
      return uniqueSlugCounter - 1;
    }
    function createUniqueIdentifierForSlug() {
      var slugIdentifierPrefix = "c";
      var currentTimestampInBase36 = new Date()
        .getTime()
        .toString(base36NumberSystem);
      var slugUniqueIdentifier = generateUniqueIdentifierFromIndex(
        getNextAvailableSlugIndex().toString(base36NumberSystem),
        slugCharacterCount,
      );
      var createUniqueSlugIdentifier = createUniqueSlug();
      var randomSlugParts =
        generateUniqueSlugForContent() + generateUniqueSlugForContent();
      return (
        slugIdentifierPrefix +
        currentTimestampInBase36 +
        slugUniqueIdentifier +
        createUniqueSlugIdentifier +
        randomSlugParts
      );
    }
    createUniqueIdentifierForSlug.slug = function () {
      var _currentTimestampInBase36 = new Date().getTime().toString(36);
      var lastFourUniqueIndexDigits = getNextAvailableSlugIndex()
        .toString(36)
        .slice(-4);
      var uniqueIdentifierSlug =
        createUniqueSlug().slice(0, 1) + createUniqueSlug().slice(-1);
      var lastTwoDigitsOfUniqueSlug = generateUniqueSlugForContent().slice(-2);
      return (
        _currentTimestampInBase36.slice(-2) +
        lastFourUniqueIndexDigits +
        uniqueIdentifierSlug +
        lastTwoDigitsOfUniqueSlug
      );
    };
    createUniqueIdentifierForSlug.isCuid = function (isCuidStringValid) {
      if (typeof isCuidStringValid != "string") {
        return false;
      } else {
        return !!isCuidStringValid.startsWith("c");
      }
    };
    createUniqueIdentifierForSlug.isSlug = function (isSlugLengthValid) {
      if (typeof isSlugLengthValid != "string") {
        return false;
      }
      var slugLength = isSlugLengthValid.length;
      return slugLength >= 7 && slugLength <= 10;
    };
    createUniqueIdentifierForSlug.fingerprint = createUniqueSlug;
    generateUniqueSlug.exports = createUniqueIdentifierForSlug;
  },
);
var initializeAndExportDeferredExecutor = initializeAndRetrieveModuleExports(
  (PromiseExecutorFactory) => {
    "use strict";

    Object.defineProperty(PromiseExecutorFactory, "__esModule", {
      value: true,
    });
    PromiseExecutorFactory.createDeferredExecutor = undefined;
    function initializePromiseHandler() {
      let initializePromise = (
        processPromiseRejection,
        processPromiseRejectionCallback,
      ) => {
        initializePromise.state = "pending";
        initializePromise.resolve = (handlePromiseResolutionAndRejection) => {
          if (initializePromise.state !== "pending") {
            return;
          }
          initializePromise.result = handlePromiseResolutionAndRejection;
          let resolveAndFulfillPromise = (createFulfilledPromise) => {
            initializePromise.state = "fulfilled";
            return createFulfilledPromise;
          };
          return processPromiseRejection(
            handlePromiseResolutionAndRejection instanceof Promise
              ? handlePromiseResolutionAndRejection
              : Promise.resolve(handlePromiseResolutionAndRejection).then(
                  resolveAndFulfillPromise,
                ),
          );
        };
        initializePromise.reject = (processPendingPromiseRejection) => {
          if (initializePromise.state === "pending") {
            queueMicrotask(() => {
              initializePromise.state = "rejected";
            });
            return processPromiseRejectionCallback(
              (initializePromise.rejectionReason =
                processPendingPromiseRejection),
            );
          }
        };
      };
      return initializePromise;
    }
    PromiseExecutorFactory.createDeferredExecutor = initializePromiseHandler;
  },
);
var initializeDeferredPromise = initializeAndRetrieveModuleExports(
  (DeferredExecutorPromise) => {
    "use strict";

    Object.defineProperty(DeferredExecutorPromise, "__esModule", {
      value: true,
    });
    DeferredExecutorPromise.DeferredPromise = undefined;
    var __initializeAndExportDeferredExecutor =
      initializeAndExportDeferredExecutor();
    var CustomPromiseWithDeferredExecutor = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(currentUserSession = null) {
        let deferredExecutionHandler = (0,
        __initializeAndExportDeferredExecutor.createDeferredExecutor)();
        super((executionDelayOptions, deferredExecutionCallback) => {
          deferredExecutionHandler(
            executionDelayOptions,
            deferredExecutionCallback,
          );
          currentUserSession?.(
            deferredExecutionHandler.resolve,
            deferredExecutionHandler.reject,
          );
        });
        this.#e = deferredExecutionHandler;
        this.resolve = this.#e.resolve;
        this.reject = this.#e.reject;
      }
      get state() {
        return this.#e.state;
      }
      get rejectionReason() {
        return this.#e.rejectionReason;
      }
      then(handlePromiseResolution, handlePromiseRejection) {
        return this.#t(
          super.then(handlePromiseResolution, handlePromiseRejection),
        );
      }
      catch(handleError) {
        return this.#t(super.catch(handleError));
      }
      finally(completePromiseHandling) {
        return this.#t(super.finally(completePromiseHandling));
      }
      #t(createResolutionHandlers) {
        return Object.defineProperties(createResolutionHandlers, {
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
    DeferredExecutorPromise.DeferredPromise = CustomPromiseWithDeferredExecutor;
  },
);
var _initializeAndRetrieveModuleExports = initializeAndRetrieveModuleExports(
  (deferredModuleExports) => {
    "use strict";

    var createDeferredBinding =
      (deferredModuleExports && deferredModuleExports.__createBinding) ||
      (Object.create
        ? function (
            createBindingForDeferredExecution,
            _createBindingForDeferredExecution,
            createDeferredExecutionHandler,
            ___createDeferredExecutionHandler = createDeferredExecutionHandler,
          ) {
            var propertyDescriptor = Object.getOwnPropertyDescriptor(
              _createBindingForDeferredExecution,
              createDeferredExecutionHandler,
            );
            if (
              !propertyDescriptor ||
              ("get" in propertyDescriptor
                ? !_createBindingForDeferredExecution.__esModule
                : propertyDescriptor.writable ||
                  propertyDescriptor.configurable)
            ) {
              propertyDescriptor = {
                enumerable: true,
                get() {
                  return _createBindingForDeferredExecution[
                    createDeferredExecutionHandler
                  ];
                },
              };
            }
            Object.defineProperty(
              createBindingForDeferredExecution,
              ___createDeferredExecutionHandler,
              propertyDescriptor,
            );
          }
        : function (
            deferredBindingHandler,
            logDeferredPromiseRejection,
            _createDeferredExecutionHandler,
            __createDeferredExecutionHandler = _createDeferredExecutionHandler,
          ) {
            deferredBindingHandler[__createDeferredExecutionHandler] =
              logDeferredPromiseRejection[_createDeferredExecutionHandler];
          });
    var createDeferredBindingForModuleExport =
      (deferredModuleExports && deferredModuleExports.__exportStar) ||
      function (
        configurePromiseExportProperties,
        configurePromiseErrorHandling,
      ) {
        for (var exportedPromiseProperty in configurePromiseExportProperties) {
          if (
            exportedPromiseProperty !== "default" &&
            !Object.prototype.hasOwnProperty.call(
              configurePromiseErrorHandling,
              exportedPromiseProperty,
            )
          ) {
            createDeferredBinding(
              configurePromiseErrorHandling,
              configurePromiseExportProperties,
              exportedPromiseProperty,
            );
          }
        }
      };
    Object.defineProperty(deferredModuleExports, "__esModule", {
      value: true,
    });
    createDeferredBindingForModuleExport(
      initializeAndExportDeferredExecutor(),
      deferredModuleExports,
    );
    createDeferredBindingForModuleExport(
      initializeDeferredPromise(),
      deferredModuleExports,
    );
  },
);
var initializeDeferredExecutorBinding =
  defineModuleDefaultExport(generateUniqueSlug());
var initializeAndExportDeferredPromise = /(%?)(%([sdjo]))/g;
function processBindingValue(
  bindExportedProperties,
  _initializeAndExportDeferredExecutor,
) {
  switch (_initializeAndExportDeferredExecutor) {
    case "s":
      return bindExportedProperties;
    case "d":
    case "i":
      return Number(bindExportedProperties);
    case "j":
      return JSON.stringify(bindExportedProperties);
    case "o": {
      if (typeof bindExportedProperties == "string") {
        return bindExportedProperties;
      }
      let serializeBindExportedProperties = JSON.stringify(
        bindExportedProperties,
      );
      if (
        serializeBindExportedProperties === "{}" ||
        serializeBindExportedProperties === "[]" ||
        /^\[object .+?\]$/.test(serializeBindExportedProperties)
      ) {
        return bindExportedProperties;
      } else {
        return serializeBindExportedProperties;
      }
    }
  }
}
function formatCallbackStringWithValues(
  deferredCallbackExecutorProperty,
  ...callbackArguments
) {
  if (callbackArguments.length === 0) {
    return deferredCallbackExecutorProperty;
  }
  let currentArgumentIndex = 0;
  let formattedCallbackArgumentsString =
    deferredCallbackExecutorProperty.replace(
      initializeAndExportDeferredPromise,
      (
        retrieveBindingValueOrUpdate,
        hasBindingValueChanged,
        processPlaceholderValue,
        convertAndRetrieveBindingValue,
      ) => {
        let currentCallbackArgumentValue =
          callbackArguments[currentArgumentIndex];
        let processedBindingValue = processBindingValue(
          currentCallbackArgumentValue,
          convertAndRetrieveBindingValue,
        );
        if (hasBindingValueChanged) {
          return retrieveBindingValueOrUpdate;
        } else {
          currentArgumentIndex++;
          return processedBindingValue;
        }
      },
    );
  if (currentArgumentIndex < callbackArguments.length) {
    formattedCallbackArgumentsString +=
      " " + callbackArguments.slice(currentArgumentIndex).join(" ");
  }
  formattedCallbackArgumentsString = formattedCallbackArgumentsString.replace(
    /%{2,2}/g,
    "%",
  );
  return formattedCallbackArgumentsString;
}
var bindExportedPropertiesDependingOnString = 2;
function sanitizePromiseStackTrace(_replaceCallbackPlaceholdersWithValues) {
  if (!_replaceCallbackPlaceholdersWithValues.stack) {
    return;
  }
  let getStackTraceLines =
    _replaceCallbackPlaceholdersWithValues.stack.split("\n");
  getStackTraceLines.splice(1, bindExportedPropertiesDependingOnString);
  _replaceCallbackPlaceholdersWithValues.stack = getStackTraceLines.join("\n");
}
var formatCallbackWithBindingValues = class extends Error {
  constructor(formattedErrorMessage, ...callbackValuesForErrorFormatting) {
    super(formattedErrorMessage);
    this.message = formattedErrorMessage;
    this.name = "Invariant Violation";
    this.message = formatCallbackStringWithValues(
      formattedErrorMessage,
      ...callbackValuesForErrorFormatting,
    );
    sanitizePromiseStackTrace(this);
  }
};
var __replaceCallbackPlaceholdersWithValues = (
  validateDataBinding,
  handleDataBindingErrors,
  ...dataBindingErrorArguments
) => {
  if (!validateDataBinding) {
    throw new formatCallbackWithBindingValues(
      handleDataBindingErrors,
      ...dataBindingErrorArguments,
    );
  }
};
__replaceCallbackPlaceholdersWithValues.as = (
  handleErrorAndRetryCallback,
  isErrorRecoverable,
  callbackPlaceholderValues,
  ...callbackArguments
) => {
  if (!isErrorRecoverable) {
    throw handleErrorAndRetryCallback.prototype.name != null
      ? new handleErrorAndRetryCallback(
          formatCallbackStringWithValues(
            callbackPlaceholderValues,
            callbackArguments,
          ),
        )
      : handleErrorAndRetryCallback(
          formatCallbackStringWithValues(
            callbackPlaceholderValues,
            callbackArguments,
          ),
        );
  }
};
var replaceCallbackPlaceholderWithValues = defineModuleDefaultExport(
  _initializeAndRetrieveModuleExports(),
);
var callbackPlaceholderValues = "preview-manager";
var replaceCallbackPlaceholdersWithValuesHandler = "preview/request";
var validateAndFormatCallbackError = "preview/response";
var replaceCallbackPlaceholdersWithParameters = "preview/runtime-request";
var ___replaceCallbackPlaceholdersWithValues = "preview/runtime-response";
var replacePlaceholdersWithValuesInMessage = "bridge/close";
function retrieveDefaultServerPort(____replaceCallbackPlaceholdersWithValues) {
  let defaultServerPort = 8000;
  if (isNaN(defaultServerPort)) {
    throw new Error("Invalid port");
  }
  return defaultServerPort;
}
function removeFirstSegmentAndJoin(getCallbackValueOrDefault) {
  let removeFirstSegmentAndJoinString = getCallbackValueOrDefault.split(".");
  removeFirstSegmentAndJoinString.shift();
  return removeFirstSegmentAndJoinString.join(".");
}
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", async (waitForClientsToClaim) => {
  waitForClientsToClaim.waitUntil(self.clients.claim());
});
var _____replaceCallbackPlaceholdersWithValues = new Map();
var handleCallbackPlaceholders = new Map();
function sendMessageToActiveDataBinding(handleRetryCallback) {
  if (handleRetryCallback.runtimeId) {
    let currentDataBindingContext = handleCallbackPlaceholders.get(
      handleRetryCallback.runtimeId,
    );
    if (currentDataBindingContext) {
      currentDataBindingContext.postMessage(handleRetryCallback);
    }
  }
}
function processBridgeMessage(handleCallbackErrorInPromiseExecution) {
  handleCallbackErrorInPromiseExecution.onmessage = (_handleBridgeMessage) => {
    let { data: handleBridgeMessageData } = _handleBridgeMessage;
    switch (handleBridgeMessageData.$type) {
      case validateAndFormatCallbackError: {
        let bridgeMessageHandler = handleBridgeMessageData;
        let currentBridgeMessageCallback =
          _____replaceCallbackPlaceholdersWithValues.get(
            bridgeMessageHandler.id,
          );
        __replaceCallbackPlaceholdersWithValues(
          currentBridgeMessageCallback,
          'Failed to handle "PREVIEW_RESPONSE_TYPE" message from the bridge: unknown request ID "%s"',
          bridgeMessageHandler.id,
        );
        _____replaceCallbackPlaceholdersWithValues.delete(
          bridgeMessageHandler.id,
        );
        currentBridgeMessageCallback.resolve(bridgeMessageHandler.response);
        break;
      }
      case ___replaceCallbackPlaceholdersWithValues: {
        sendMessageToActiveDataBinding(handleBridgeMessageData);
        break;
      }
      case replacePlaceholdersWithValuesInMessage: {
        validateAndThrowIfCallbackInvalid =
          initializeDeferredPromiseForBridgeMessageHandling();
        break;
      }
    }
  };
}
function initializeDeferredPromiseForBridgeMessageHandling() {
  let createBridgeMessageHandlerPromise =
    new replaceCallbackPlaceholderWithValues.DeferredPromise();
  createBridgeMessageHandlerPromise.then((handleBridgeMessage) => {
    processBridgeMessage(handleBridgeMessage);
    return handleBridgeMessage;
  });
  return createBridgeMessageHandlerPromise;
}
var validateAndThrowIfCallbackInvalid =
  initializeDeferredPromiseForBridgeMessageHandling();
async function postValidationResultToBridge(handleValidationForBindingResult) {
  let validationResultMessagePort = await validateAndThrowIfCallbackInvalid;
  __replaceCallbackPlaceholdersWithValues(
    validationResultMessagePort,
    "Failed to send message to the bridge: bridge message port is not defined",
    handleValidationForBindingResult,
  );
  validationResultMessagePort.postMessage(handleValidationForBindingResult);
}
self.addEventListener("message", async (handleBridgeMessages) => {
  if (!handleBridgeMessages.data?.type) {
    return;
  }
  switch (handleBridgeMessages.data.type) {
    case "bridge-channel-init": {
      let bridgePort = handleBridgeMessages.ports[0];
      __replaceCallbackPlaceholdersWithValues(
        validateAndThrowIfCallbackInvalid.state === "pending",
        "Failed to initialize bridge: bridge port promise already fulfilled from previous evaluation.",
      );
      validateAndThrowIfCallbackInvalid.resolve(bridgePort);
      break;
    }
    case "runtime-init": {
      let messageBridgePort = handleBridgeMessages.ports[0];
      let deferredExecutorBindingId = (0,
      initializeDeferredExecutorBinding.default)();
      handleCallbackPlaceholders.set(
        deferredExecutorBindingId,
        messageBridgePort,
      );
      messageBridgePort.addEventListener(
        "message",
        (initializeBindingDataForBridge) => {
          let initializeBindingPayload = {
            $channel_name: callbackPlaceholderValues,
            $type: replaceCallbackPlaceholdersWithParameters,
            runtimeId: deferredExecutorBindingId,
            data: initializeBindingDataForBridge.data,
          };
          postValidationResultToBridge(initializeBindingPayload);
        },
      );
      messageBridgePort.start();
      messageBridgePort.postMessage({
        type: "ready",
      });
      break;
    }
    case "ping": {
      if (!(handleBridgeMessages.source instanceof Client)) {
        return;
      }
      let connectedClient = await self.clients.get(
        handleBridgeMessages.source.id,
      );
      if (connectedClient) {
        connectedClient.postMessage({
          type: "pong",
        });
      }
      break;
    }
  }
});
var _handleBridgeMessage = ["127.0.0.1", "localhost"];
function getPortFromBridgeMessageHandler(
  bridgeMessageEventHandler,
  handleBridgeMessageEvent,
) {
  if (_handleBridgeMessage.includes(bridgeMessageEventHandler.hostname)) {
    return +bridgeMessageEventHandler.port;
  }
  let extractHandlerPortFromEvent = removeFirstSegmentAndJoin(
    handleBridgeMessageEvent.hostname,
  );
  let extractedHandlerPort = removeFirstSegmentAndJoin(
    bridgeMessageEventHandler.hostname,
  );
  if (extractHandlerPortFromEvent === extractedHandlerPort) {
    return retrieveDefaultServerPort(bridgeMessageEventHandler.hostname);
  } else {
    return null;
  }
}
function sendBroadcastChannelRequestWithTimeout(
  promiseValidationHandler,
  handleBridgePortResponse,
) {
  let deferredBroadcastRequestId = (0,
  initializeDeferredExecutorBinding.default)();
  let deferredResponsePromise =
    new replaceCallbackPlaceholderWithValues.DeferredPromise();
  let broadcastChannelTimeoutId = setTimeout(() => {
    _____replaceCallbackPlaceholdersWithValues.delete(
      deferredBroadcastRequestId,
    );
    deferredResponsePromise.reject(
      new Error(
        "Failed to handle " +
          handleBridgePortResponse.method +
          " " +
          handleBridgePortResponse.url +
          " request: no response received from the BroadcastChannel within timeout. There's likely an issue with the bridge/worker communication.",
      ),
    );
  }, 20000);
  let broadcastRequestPayload = {
    $channel_name: callbackPlaceholderValues,
    $type: replaceCallbackPlaceholdersWithValuesHandler,
    port: promiseValidationHandler,
    id: deferredBroadcastRequestId,
    request: handleBridgePortResponse,
  };
  _____replaceCallbackPlaceholdersWithValues.set(
    deferredBroadcastRequestId,
    deferredResponsePromise,
  );
  postValidationResultToBridge(broadcastRequestPayload);
  return deferredResponsePromise.finally(() =>
    clearTimeout(broadcastChannelTimeoutId),
  );
}
self.addEventListener("fetch", (processProprietaryRequestWithFetch) => {
  let clonedRequestForProprietaryProcess =
    processProprietaryRequestWithFetch.request.clone();
  let parsedRequestURL = new URL(clonedRequestForProprietaryProcess.url);
  if (
    parsedRequestURL.pathname.includes("/proprietary/") &&
    !parsedRequestURL.pathname.includes("/escape-hatch/")
  ) {
    if (parsedRequestURL.pathname === "/__csb_runtime.js") {
      return processProprietaryRequestWithFetch.respondWith(
        fetch("/__csb_runtime.js"),
      );
    } else {
      return undefined;
    }
  }
  let getPortFromParsedURL = getPortFromBridgeMessageHandler(
    parsedRequestURL,
    location,
  );
  if (
    parsedRequestURL.pathname.includes("/escape-hatch/") ||
    getPortFromParsedURL == null ||
    isNaN(getPortFromParsedURL)
  ) {
    return;
  }
  let processRequestForProprietaryPort = async (
    handleRequestForLocalHostWithTimeout,
  ) => {
    let localRequestHeaders = {
      host: "localhost:" + handleRequestForLocalHostWithTimeout,
    };
    clonedRequestForProprietaryProcess.headers.forEach(
      (updateRequestHeader, requestHeaderKey) => {
        localRequestHeaders[requestHeaderKey] = updateRequestHeader;
      },
    );
    let proprietaryRequestInfo = {
      url: clonedRequestForProprietaryProcess.url,
      method: clonedRequestForProprietaryProcess.method,
      body: clonedRequestForProprietaryProcess.body,
      headers: localRequestHeaders,
    };
    let proprietaryResponse = await sendBroadcastChannelRequestWithTimeout(
      handleRequestForLocalHostWithTimeout,
      proprietaryRequestInfo,
    );
    __replaceCallbackPlaceholdersWithValues(
      proprietaryResponse,
      "Failed to respond to %s %s: no response received",
      proprietaryRequestInfo.method,
      proprietaryRequestInfo.url,
    );
    return new Response(proprietaryResponse.body, {
      headers: proprietaryResponse.headers,
      status: proprietaryResponse.status,
    });
  };
  return processProprietaryRequestWithFetch.respondWith(
    processRequestForProprietaryPort(getPortFromParsedURL),
  );
});
