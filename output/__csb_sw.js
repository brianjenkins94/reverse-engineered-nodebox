var initializeModuleAndGetExports =
  (setupModuleAndReturnExports, _initializeModuleAndGetExports) => () => {
    if (!_initializeModuleAndGetExports) {
      setupModuleAndReturnExports(
        (_initializeModuleAndGetExports = {
          exports: {},
        }).exports,
        _initializeModuleAndGetExports,
      );
    }
    return _initializeModuleAndGetExports.exports;
  };
var transferNonEnumerableProperties = (
  copyNonEnumerablePropertiesFromSourceObject,
  sourceObjectWithNonEnumerableProps,
  copyNonEnumerablePropertiesFromSource,
  getNonEnumerablePropertyDescriptor,
) => {
  if (
    (sourceObjectWithNonEnumerableProps &&
      typeof sourceObjectWithNonEnumerableProps == "object") ||
    typeof sourceObjectWithNonEnumerableProps == "function"
  ) {
    for (let nonEnumerablePropertyName of Object.getOwnPropertyNames(
      sourceObjectWithNonEnumerableProps,
    )) {
      if (
        !Object.prototype.hasOwnProperty.call(
          copyNonEnumerablePropertiesFromSourceObject,
          nonEnumerablePropertyName,
        ) &&
        nonEnumerablePropertyName !== copyNonEnumerablePropertiesFromSource
      ) {
        Object.defineProperty(
          copyNonEnumerablePropertiesFromSourceObject,
          nonEnumerablePropertyName,
          {
            get: () =>
              sourceObjectWithNonEnumerableProps[nonEnumerablePropertyName],
            enumerable:
              !(getNonEnumerablePropertyDescriptor =
                Object.getOwnPropertyDescriptor(
                  sourceObjectWithNonEnumerableProps,
                  nonEnumerablePropertyName,
                )) || getNonEnumerablePropertyDescriptor.enumerable,
          },
        );
      }
    }
  }
  return copyNonEnumerablePropertiesFromSourceObject;
};
var initializeModuleWithDefaultExportingProperties = (
  inputObject,
  propertiesToTransfer,
  createPrototypeBasedOnInputObject,
) => {
  if (inputObject != null) {
    createPrototypeBasedOnInputObject = Object.create(
      Object.getPrototypeOf(inputObject),
    );
  } else {
    createPrototypeBasedOnInputObject = {};
  }
  return transferNonEnumerableProperties(
    propertiesToTransfer || !inputObject || !inputObject.__esModule
      ? Object.defineProperty(createPrototypeBasedOnInputObject, "default", {
          value: inputObject,
          enumerable: true,
        })
      : createPrototypeBasedOnInputObject,
    inputObject,
  );
};
var formatAndPadNumberWithLeadingZeros = initializeModuleAndGetExports(
  (formatNumberWithLeadingZeros, padNumberToLengthWithLeadingZeros) => {
    padNumberToLengthWithLeadingZeros.exports = function (
      padNumberWithLeadingZeros,
      desiredStringLengthForPadding,
    ) {
      var formatAndPadNumberWithLeadingZeros =
        "000000000" + padNumberWithLeadingZeros;
      return formatAndPadNumberWithLeadingZeros.substr(
        formatAndPadNumberWithLeadingZeros.length -
          desiredStringLengthForPadding,
      );
    };
  },
);
var initializeAndExportNavigatorSummaryWithPadding =
  initializeModuleAndGetExports(
    (
      createPaddedNavigatorSummaryForExport,
      createAndExportFormattedNavigatorSummary,
    ) => {
      var createPaddedAndFormattedNavigatorSummaryOutput =
        formatAndPadNumberWithLeadingZeros();
      var executionEnvironment = typeof window == "object" ? window : self;
      var executionEnvironmentPropertiesCount =
        Object.keys(executionEnvironment).length;
      var getTotalMimeTypesCount = navigator.mimeTypes
        ? navigator.mimeTypes.length
        : 0;
      var createFormattedNavigatorSummaryWithPadding =
        createPaddedAndFormattedNavigatorSummaryOutput(
          (getTotalMimeTypesCount + navigator.userAgent.length).toString(36) +
            executionEnvironmentPropertiesCount.toString(36),
          4,
        );
      createAndExportFormattedNavigatorSummary.exports = function () {
        return createFormattedNavigatorSummaryWithPadding;
      };
    },
  );
var initializeCryptoRandomValueGenerator = initializeModuleAndGetExports(
  (
    initializeNormalizedRandomValueGenerator,
    setupNormalizedRandomValueGeneratorForOutput,
  ) => {
    var generateNormalizedRandomValue;
    var isSecureRandomGeneratorAvailable =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (isSecureRandomGeneratorAvailable) {
      maxUInt32ForNormalization = Math.pow(2, 32) - 1;
      generateNormalizedRandomValue = function () {
        return Math.abs(
          isSecureRandomGeneratorAvailable.getRandomValues(
            new Uint32Array(1),
          )[0] / maxUInt32ForNormalization,
        );
      };
    } else {
      generateNormalizedRandomValue = Math.random;
    }
    var maxUInt32ForNormalization;
    setupNormalizedRandomValueGeneratorForOutput.exports =
      generateNormalizedRandomValue;
  },
);
var generateAndStoreUniqueSlug = initializeModuleAndGetExports(
  (
    generateUniqueContentSlugWithIndex,
    generateUniqueSlugFromContentWithIndex,
  ) => {
    var initializeSlugGeneratorForContent =
      initializeAndExportNavigatorSummaryWithPadding();
    var generateSlugFromRandomIndex = formatAndPadNumberWithLeadingZeros();
    var initializeSlugIndexGenerator = initializeCryptoRandomValueGenerator();
    var currentUniqueSlugIndex = 0;
    var maxSlugLength = 4;
    var base36NumericalSystem = 36;
    var maxUniqueSlugsForGivenLength = Math.pow(
      base36NumericalSystem,
      maxSlugLength,
    );
    function generateUniqueSlugBasedOnContent() {
      return generateSlugFromRandomIndex(
        (
          (initializeSlugIndexGenerator() * maxUniqueSlugsForGivenLength) <<
          0
        ).toString(base36NumericalSystem),
        maxSlugLength,
      );
    }
    function findNextUniqueSlugIndex() {
      if (currentUniqueSlugIndex < maxUniqueSlugsForGivenLength) {
        currentUniqueSlugIndex = currentUniqueSlugIndex;
      } else {
        currentUniqueSlugIndex = 0;
      }
      currentUniqueSlugIndex++;
      return currentUniqueSlugIndex - 1;
    }
    function generateUniqueContentIdentifier() {
      var contentSlugPrefix = "c";
      var timestampInBase36 = new Date()
        .getTime()
        .toString(base36NumericalSystem);
      var createSlugSuffixFromRandomIndex = generateSlugFromRandomIndex(
        findNextUniqueSlugIndex().toString(base36NumericalSystem),
        maxSlugLength,
      );
      var _initializeSlugGeneratorForContent =
        initializeSlugGeneratorForContent();
      var uniqueContentSlugCombination =
        generateUniqueSlugBasedOnContent() + generateUniqueSlugBasedOnContent();
      return (
        contentSlugPrefix +
        timestampInBase36 +
        createSlugSuffixFromRandomIndex +
        _initializeSlugGeneratorForContent +
        uniqueContentSlugCombination
      );
    }
    generateUniqueContentIdentifier.slug = function () {
      var base36TimestampForSlugCreation = new Date().getTime().toString(36);
      var getGeneratedUniqueSlugIndex = findNextUniqueSlugIndex()
        .toString(36)
        .slice(-4);
      var _contentSlugPrefix =
        initializeSlugGeneratorForContent().slice(0, 1) +
        initializeSlugGeneratorForContent().slice(-1);
      var getLastTwoSlugCharactersFromContent =
        generateUniqueSlugBasedOnContent().slice(-2);
      return (
        base36TimestampForSlugCreation.slice(-2) +
        getGeneratedUniqueSlugIndex +
        _contentSlugPrefix +
        getLastTwoSlugCharactersFromContent
      );
    };
    generateUniqueContentIdentifier.isCuid = function (isValidCuidFormat) {
      if (typeof isValidCuidFormat != "string") {
        return false;
      } else {
        return !!isValidCuidFormat.startsWith("c");
      }
    };
    generateUniqueContentIdentifier.isSlug = function (isSlugValidLength) {
      if (typeof isSlugValidLength != "string") {
        return false;
      }
      var isSlugLengthAppropriate = isSlugValidLength.length;
      return isSlugLengthAppropriate >= 7 && isSlugLengthAppropriate <= 10;
    };
    generateUniqueContentIdentifier.fingerprint =
      initializeSlugGeneratorForContent;
    generateUniqueSlugFromContentWithIndex.exports =
      generateUniqueContentIdentifier;
  },
);
var initializeAndExportAsyncPromiseManager = initializeModuleAndGetExports(
  (AsyncPromiseStateManager) => {
    "use strict";

    Object.defineProperty(AsyncPromiseStateManager, "__esModule", {
      value: true,
    });
    AsyncPromiseStateManager.createDeferredExecutor = undefined;
    function handlePromiseLifecycle() {
      let manageAsyncPromiseState = (
        processPromiseOutcome,
        handlePendingPromiseRejection,
      ) => {
        manageAsyncPromiseState.state = "pending";
        manageAsyncPromiseState.resolve = (handleAsyncPromiseResult) => {
          if (manageAsyncPromiseState.state !== "pending") {
            return;
          }
          manageAsyncPromiseState.result = handleAsyncPromiseResult;
          let markPromiseAsFulfilledAndReturnResult = (
            setPromiseStateToFulfilled,
          ) => {
            manageAsyncPromiseState.state = "fulfilled";
            return setPromiseStateToFulfilled;
          };
          return processPromiseOutcome(
            handleAsyncPromiseResult instanceof Promise
              ? handleAsyncPromiseResult
              : Promise.resolve(handleAsyncPromiseResult).then(
                  markPromiseAsFulfilledAndReturnResult,
                ),
          );
        };
        manageAsyncPromiseState.reject = (handlePendingPromiseRejection) => {
          if (manageAsyncPromiseState.state === "pending") {
            queueMicrotask(() => {
              manageAsyncPromiseState.state = "rejected";
            });
            return handlePendingPromiseRejection(
              (manageAsyncPromiseState.rejectionReason =
                handlePendingPromiseRejection),
            );
          }
        };
      };
      return manageAsyncPromiseState;
    }
    AsyncPromiseStateManager.createDeferredExecutor = handlePromiseLifecycle;
  },
);
var initializeAndExportDeferredPromiseHandler = initializeModuleAndGetExports(
  (AsyncDeferredPromiseHandler) => {
    "use strict";

    Object.defineProperty(AsyncDeferredPromiseHandler, "__esModule", {
      value: true,
    });
    AsyncDeferredPromiseHandler.DeferredPromise = undefined;
    var _initializeAndExportDeferredPromiseHandler =
      initializeAndExportAsyncPromiseManager();
    var AsyncDeferredPromiseExecutor = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(currentUserSession = null) {
        let createAndInitializeDeferredExecutor = (0,
        _initializeAndExportDeferredPromiseHandler.createDeferredExecutor)();
        super((deferredExecutionSettings, setupDeferredExecutionHandler) => {
          createAndInitializeDeferredExecutor(
            deferredExecutionSettings,
            setupDeferredExecutionHandler,
          );
          currentUserSession?.(
            createAndInitializeDeferredExecutor.resolve,
            createAndInitializeDeferredExecutor.reject,
          );
        });
        this.#e = createAndInitializeDeferredExecutor;
        this.resolve = this.#e.resolve;
        this.reject = this.#e.reject;
      }
      get state() {
        return this.#e.state;
      }
      get rejectionReason() {
        return this.#e.rejectionReason;
      }
      then(handlePromiseOutcome, handlePromiseError) {
        return this.#t(super.then(handlePromiseOutcome, handlePromiseError));
      }
      catch(handleApiRequestError) {
        return this.#t(super.catch(handleApiRequestError));
      }
      finally(performFinalPromiseCleanup) {
        return this.#t(super.finally(performFinalPromiseCleanup));
      }
      #t(setupPromiseResolutionHandlers) {
        return Object.defineProperties(setupPromiseResolutionHandlers, {
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
    AsyncDeferredPromiseHandler.DeferredPromise = AsyncDeferredPromiseExecutor;
  },
);
var initializeAndExposeDeferredModule = initializeModuleAndGetExports(
  (defineModuleProxyBinding) => {
    "use strict";

    var createModuleProxyBinding =
      (defineModuleProxyBinding && defineModuleProxyBinding.__createBinding) ||
      (Object.create
        ? function (
            __defineProxyBindingForModule,
            defineProxyBindingForDeferredModule,
            defineDeferredBindingProperty,
            _defineDeferredBindingProperty = defineDeferredBindingProperty,
          ) {
            var deferredBindingPropertyDescriptor =
              Object.getOwnPropertyDescriptor(
                defineProxyBindingForDeferredModule,
                defineDeferredBindingProperty,
              );
            if (
              !deferredBindingPropertyDescriptor ||
              ("get" in deferredBindingPropertyDescriptor
                ? !defineProxyBindingForDeferredModule.__esModule
                : deferredBindingPropertyDescriptor.writable ||
                  deferredBindingPropertyDescriptor.configurable)
            ) {
              deferredBindingPropertyDescriptor = {
                enumerable: true,
                get() {
                  return defineProxyBindingForDeferredModule[
                    defineDeferredBindingProperty
                  ];
                },
              };
            }
            Object.defineProperty(
              __defineProxyBindingForModule,
              _defineDeferredBindingProperty,
              deferredBindingPropertyDescriptor,
            );
          }
        : function (
            bindDeferredPromiseHandling,
            handleDeferredPromiseRejectionsAndLogErrors,
            handlePromiseBinding,
            _handlePromiseBinding = handlePromiseBinding,
          ) {
            bindDeferredPromiseHandling[_handlePromiseBinding] =
              handleDeferredPromiseRejectionsAndLogErrors[handlePromiseBinding];
          });
    var _createModuleProxyBinding =
      (defineModuleProxyBinding && defineModuleProxyBinding.__exportStar) ||
      function (
        createDeferredExportsWithRejectionHandler,
        exportPromiseRejectionsWithLogging,
      ) {
        for (var propertyKeyToExport in createDeferredExportsWithRejectionHandler) {
          if (
            propertyKeyToExport !== "default" &&
            !Object.prototype.hasOwnProperty.call(
              exportPromiseRejectionsWithLogging,
              propertyKeyToExport,
            )
          ) {
            createModuleProxyBinding(
              exportPromiseRejectionsWithLogging,
              createDeferredExportsWithRejectionHandler,
              propertyKeyToExport,
            );
          }
        }
      };
    Object.defineProperty(defineModuleProxyBinding, "__esModule", {
      value: true,
    });
    _createModuleProxyBinding(
      initializeAndExportAsyncPromiseManager(),
      defineModuleProxyBinding,
    );
    _createModuleProxyBinding(
      initializeAndExportDeferredPromiseHandler(),
      defineModuleProxyBinding,
    );
  },
);
var initializeAndExportPromiseExecutorWithUniqueSlugs =
  initializeModuleWithDefaultExportingProperties(generateAndStoreUniqueSlug());
var promiseFormatSpecifierPattern = /(%?)(%([sdjo]))/g;
function transformValueForDataType(
  convertValueToDataType,
  convertValueBasedOnType,
) {
  switch (convertValueBasedOnType) {
    case "s":
      return convertValueToDataType;
    case "d":
    case "i":
      return Number(convertValueToDataType);
    case "j":
      return JSON.stringify(convertValueToDataType);
    case "o": {
      if (typeof convertValueToDataType == "string") {
        return convertValueToDataType;
      }
      let serializeAndReturnValidJSON = JSON.stringify(convertValueToDataType);
      if (
        serializeAndReturnValidJSON === "{}" ||
        serializeAndReturnValidJSON === "[]" ||
        /^\[object .+?\]$/.test(serializeAndReturnValidJSON)
      ) {
        return convertValueToDataType;
      } else {
        return serializeAndReturnValidJSON;
      }
    }
  }
}
function replacePlaceholdersWithFormattedValues(
  formatStringWithValuesAndCallback,
  ...replacePlaceholdersWithValues
) {
  if (replacePlaceholdersWithValues.length === 0) {
    return formatStringWithValuesAndCallback;
  }
  let currentPlaceholderValueIndex = 0;
  let replacePlaceholdersInFormatString =
    formatStringWithValuesAndCallback.replace(
      promiseFormatSpecifierPattern,
      (
        retrieveOrUpdateBindingValue,
        hasBindingValueChanged,
        updateBindingValueBasedOnChangeStatus,
        handleBindingValueUpdates,
      ) => {
        let processedCallbackValue =
          replacePlaceholdersWithValues[currentPlaceholderValueIndex];
        let transformedCallbackValue = transformValueForDataType(
          processedCallbackValue,
          handleBindingValueUpdates,
        );
        if (hasBindingValueChanged) {
          return retrieveOrUpdateBindingValue;
        } else {
          currentPlaceholderValueIndex++;
          return transformedCallbackValue;
        }
      },
    );
  if (currentPlaceholderValueIndex < replacePlaceholdersWithValues.length) {
    replacePlaceholdersInFormatString +=
      " " +
      replacePlaceholdersWithValues
        .slice(currentPlaceholderValueIndex)
        .join(" ");
  }
  replacePlaceholdersInFormatString = replacePlaceholdersInFormatString.replace(
    /%{2,2}/g,
    "%",
  );
  return replacePlaceholdersInFormatString;
}
var errorStackTraceOffset = 2;
function sanitizePromiseErrorStack(_cleanErrorStackTraceForPromise) {
  if (!_cleanErrorStackTraceForPromise.stack) {
    return;
  }
  let getCleanErrorStackLines =
    _cleanErrorStackTraceForPromise.stack.split("\n");
  getCleanErrorStackLines.splice(1, errorStackTraceOffset);
  _cleanErrorStackTraceForPromise.stack = getCleanErrorStackLines.join("\n");
}
var InvariantViolationException = class extends Error {
  constructor(
    generateInvariantViolationMessage,
    ...formattedErrorValuesForMessage
  ) {
    super(generateInvariantViolationMessage);
    this.message = generateInvariantViolationMessage;
    this.name = "Invariant Violation";
    this.message = replacePlaceholdersWithFormattedValues(
      generateInvariantViolationMessage,
      ...formattedErrorValuesForMessage,
    );
    sanitizePromiseErrorStack(this);
  }
};
var validateDataBindingConfirmationAndThrowErrors = (
  isDataBindingConfirmed,
  checkDataBindingValidationAndThrow,
  ...collectErrorDetailsForBindingValidation
) => {
  if (!isDataBindingConfirmed) {
    throw new InvariantViolationException(
      checkDataBindingValidationAndThrow,
      ...collectErrorDetailsForBindingValidation,
    );
  }
};
validateDataBindingConfirmationAndThrowErrors.as = (
  processErrorAndDetermineRetryPolicy,
  shouldRetryOnError,
  createDetailedErrorMessageForRetry,
  ...errorDetailsForRetryAttempt
) => {
  if (!shouldRetryOnError) {
    throw processErrorAndDetermineRetryPolicy.prototype.name != null
      ? new processErrorAndDetermineRetryPolicy(
          replacePlaceholdersWithFormattedValues(
            createDetailedErrorMessageForRetry,
            errorDetailsForRetryAttempt,
          ),
        )
      : processErrorAndDetermineRetryPolicy(
          replacePlaceholdersWithFormattedValues(
            createDetailedErrorMessageForRetry,
            errorDetailsForRetryAttempt,
          ),
        );
  }
};
var initializeAndExposePreviewResponseFormatter =
  initializeModuleWithDefaultExportingProperties(
    initializeAndExposeDeferredModule(),
  );
var previewModuleIdentifier = "preview-manager";
var previewRequestUrl = "preview/request";
var previewResponseJsonPath = "preview/response";
var previewRequestPayloadPath = "preview/runtime-request";
var previewResponseFormatterPath = "preview/runtime-response";
var bridgeCloseAction = "bridge/close";
function retrieveDefaultWebServerPort(getDefaultHttpServerPort) {
  let defaultHttpPort = 8000;
  if (isNaN(defaultHttpPort)) {
    throw new Error("Invalid port");
  }
  return defaultHttpPort;
}
function joinSegmentsAfterFirst(_concatenateAfterFirstSegment) {
  let joinSegmentsExcludingFirst = _concatenateAfterFirstSegment.split(".");
  joinSegmentsExcludingFirst.shift();
  return joinSegmentsExcludingFirst.join(".");
}
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener(
  "activate",
  async (requestClientClaimingForServiceWorker) => {
    requestClientClaimingForServiceWorker.waitUntil(self.clients.claim());
  },
);
var messageHandlerCallbackMapping = new Map();
var messageHandlerRegistry = new Map();
function sendMessageToActiveProcessor(dispatchMessageWithRetry) {
  if (dispatchMessageWithRetry.runtimeId) {
    let currentMessageHandler = messageHandlerRegistry.get(
      dispatchMessageWithRetry.runtimeId,
    );
    if (currentMessageHandler) {
      currentMessageHandler.postMessage(dispatchMessageWithRetry);
    }
  }
}
function processIncomingBridgeMessages(handleIncomingMessageFromBridge) {
  handleIncomingMessageFromBridge.onmessage = (handleBridgeMessage) => {
    let { data: getBridgeMessageData } = handleBridgeMessage;
    switch (getBridgeMessageData.$type) {
      case previewResponseJsonPath: {
        let processBridgePreviewResponse = getBridgeMessageData;
        let handleBridgePreviewResponse = messageHandlerCallbackMapping.get(
          processBridgePreviewResponse.id,
        );
        validateDataBindingConfirmationAndThrowErrors(
          handleBridgePreviewResponse,
          'Failed to handle "PREVIEW_RESPONSE_TYPE" message from the bridge: unknown request ID "%s"',
          processBridgePreviewResponse.id,
        );
        messageHandlerCallbackMapping.delete(processBridgePreviewResponse.id);
        handleBridgePreviewResponse.resolve(
          processBridgePreviewResponse.response,
        );
        break;
      }
      case previewResponseFormatterPath: {
        sendMessageToActiveProcessor(getBridgeMessageData);
        break;
      }
      case bridgeCloseAction: {
        incomingBridgeMessagePortPromise =
          createAndHandleIncomingMessagePromise();
        break;
      }
    }
  };
}
function createAndHandleIncomingMessagePromise() {
  let createIncomingBridgeMessageHandlerPromise =
    new initializeAndExposePreviewResponseFormatter.DeferredPromise();
  createIncomingBridgeMessageHandlerPromise.then(
    (processIncomingBridgeMessage) => {
      processIncomingBridgeMessage(processIncomingBridgeMessage);
      return processIncomingBridgeMessage;
    },
  );
  return createIncomingBridgeMessageHandlerPromise;
}
var incomingBridgeMessagePortPromise = createAndHandleIncomingMessagePromise();
async function postValidationResultToMessageBridge(
  sendValidationResultToMessageBridge,
) {
  let incomingMessagePort = await incomingBridgeMessagePortPromise;
  validateDataBindingConfirmationAndThrowErrors(
    incomingMessagePort,
    "Failed to send message to the bridge: bridge message port is not defined",
    sendValidationResultToMessageBridge,
  );
  incomingMessagePort.postMessage(sendValidationResultToMessageBridge);
}
self.addEventListener("message", async (processBridgeMessageEvent) => {
  if (!processBridgeMessageEvent.data?.type) {
    return;
  }
  switch (processBridgeMessageEvent.data.type) {
    case "bridge-channel-init": {
      let initializationBridgePort = processBridgeMessageEvent.ports[0];
      validateDataBindingConfirmationAndThrowErrors(
        incomingBridgeMessagePortPromise.state === "pending",
        "Failed to initialize bridge: bridge port promise already fulfilled from previous evaluation.",
      );
      incomingBridgeMessagePortPromise.resolve(initializationBridgePort);
      break;
    }
    case "runtime-init": {
      let messagePortForBridgeCommunication =
        processBridgeMessageEvent.ports[0];
      let promiseExecutorId = (0,
      initializeAndExportPromiseExecutorWithUniqueSlugs.default)();
      messageHandlerRegistry.set(
        promiseExecutorId,
        messagePortForBridgeCommunication,
      );
      messagePortForBridgeCommunication.addEventListener(
        "message",
        (createBridgeBindingRequestPayload) => {
          let createBridgeRequestPayload = {
            $channel_name: previewModuleIdentifier,
            $type: previewRequestPayloadPath,
            runtimeId: promiseExecutorId,
            data: createBridgeBindingRequestPayload.data,
          };
          postValidationResultToMessageBridge(createBridgeRequestPayload);
        },
      );
      messagePortForBridgeCommunication.start();
      messagePortForBridgeCommunication.postMessage({
        type: "ready",
      });
      break;
    }
    case "ping": {
      if (!(processBridgeMessageEvent.source instanceof Client)) {
        return;
      }
      let activeClient = await self.clients.get(
        processBridgeMessageEvent.source.id,
      );
      if (activeClient) {
        activeClient.postMessage({
          type: "pong",
        });
      }
      break;
    }
  }
});
var localhostTrustedSources = ["127.0.0.1", "localhost"];
function getPortFromMessageBasedOnSource(
  extractPortFromTrustedBridgeMessage,
  extractPortFromIncomingMessage,
) {
  if (
    localhostTrustedSources.includes(
      extractPortFromTrustedBridgeMessage.hostname,
    )
  ) {
    return +extractPortFromTrustedBridgeMessage.port;
  }
  let getDefaultPortFromIncomingMessageHostname = joinSegmentsAfterFirst(
    extractPortFromIncomingMessage.hostname,
  );
  let getPortFromBridgeMessageHostname = joinSegmentsAfterFirst(
    extractPortFromTrustedBridgeMessage.hostname,
  );
  if (
    getDefaultPortFromIncomingMessageHostname ===
    getPortFromBridgeMessageHostname
  ) {
    return retrieveDefaultWebServerPort(
      extractPortFromTrustedBridgeMessage.hostname,
    );
  } else {
    return null;
  }
}
function broadcastRequestWithTimeoutAndResponseValidation(
  sendBroadcastRequestWithTimeoutAndHandleResponse,
  processBroadcastChannelResponse,
) {
  let uniqueBroadcastRequestId = (0,
  initializeAndExportPromiseExecutorWithUniqueSlugs.default)();
  let pendingBroadcastResponsePromise =
    new initializeAndExposePreviewResponseFormatter.DeferredPromise();
  let broadcastChannelResponseTimeout = setTimeout(() => {
    messageHandlerCallbackMapping.delete(uniqueBroadcastRequestId);
    pendingBroadcastResponsePromise.reject(
      new Error(
        "Failed to handle " +
          processBroadcastChannelResponse.method +
          " " +
          processBroadcastChannelResponse.url +
          " request: no response received from the BroadcastChannel within timeout. There's likely an issue with the bridge/worker communication.",
      ),
    );
  }, 20000);
  let broadcastRequestDetails = {
    $channel_name: previewModuleIdentifier,
    $type: previewRequestUrl,
    port: sendBroadcastRequestWithTimeoutAndHandleResponse,
    id: uniqueBroadcastRequestId,
    request: processBroadcastChannelResponse,
  };
  messageHandlerCallbackMapping.set(
    uniqueBroadcastRequestId,
    pendingBroadcastResponsePromise,
  );
  postValidationResultToMessageBridge(broadcastRequestDetails);
  return pendingBroadcastResponsePromise.finally(() =>
    clearTimeout(broadcastChannelResponseTimeout),
  );
}
self.addEventListener("fetch", (processProprietaryFetchRequest) => {
  let cloneFetchRequestForProcessingToHandle =
    processProprietaryFetchRequest.request.clone();
  let generateProprietaryURLFromFetchRequest = new URL(
    cloneFetchRequestForProcessingToHandle.url,
  );
  if (
    generateProprietaryURLFromFetchRequest.pathname.includes("/proprietary/") &&
    !generateProprietaryURLFromFetchRequest.pathname.includes("/escape-hatch/")
  ) {
    if (
      generateProprietaryURLFromFetchRequest.pathname === "/__csb_runtime.js"
    ) {
      return processProprietaryFetchRequest.respondWith(
        fetch("/__csb_runtime.js"),
      );
    } else {
      return undefined;
    }
  }
  let getPortFromURL = getPortFromMessageBasedOnSource(
    generateProprietaryURLFromFetchRequest,
    location,
  );
  if (
    generateProprietaryURLFromFetchRequest.pathname.includes(
      "/escape-hatch/",
    ) ||
    getPortFromURL == null ||
    isNaN(getPortFromURL)
  ) {
    return;
  }
  let processProprietaryPortFetchRequest = async (sendRequestWithTimeout) => {
    let compiledRequestHeaders = {
      host: "localhost:" + sendRequestWithTimeout,
    };
    cloneFetchRequestForProcessingToHandle.headers.forEach(
      (updateRequestHeaderByKey, updateRequestHeaderValue) => {
        compiledRequestHeaders[updateRequestHeaderValue] =
          updateRequestHeaderByKey;
      },
    );
    let createFetchRequestConfig = {
      url: cloneFetchRequestForProcessingToHandle.url,
      method: cloneFetchRequestForProcessingToHandle.method,
      body: cloneFetchRequestForProcessingToHandle.body,
      headers: compiledRequestHeaders,
    };
    let fetchResponse = await broadcastRequestWithTimeoutAndResponseValidation(
      sendRequestWithTimeout,
      createFetchRequestConfig,
    );
    validateDataBindingConfirmationAndThrowErrors(
      fetchResponse,
      "Failed to respond to %s %s: no response received",
      createFetchRequestConfig.method,
      createFetchRequestConfig.url,
    );
    return new Response(fetchResponse.body, {
      headers: fetchResponse.headers,
      status: fetchResponse.status,
    });
  };
  return processProprietaryFetchRequest.respondWith(
    processProprietaryPortFetchRequest(getPortFromURL),
  );
});
