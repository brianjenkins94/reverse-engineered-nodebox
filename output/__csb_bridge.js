var initializeDeferredModule =
  (setupAndReturnModuleExports, setupAndRetrieveModuleExports) => () => {
    if (!setupAndRetrieveModuleExports) {
      setupAndReturnModuleExports(
        (setupAndRetrieveModuleExports = {
          exports: {},
        }).exports,
        setupAndRetrieveModuleExports,
      );
    }
    return setupAndRetrieveModuleExports.exports;
  };
var setupLazyPropertyAccessors = (
  copyNonEnumerableProperties,
  copyNonEnumerablePropertiesFromSource,
  propertyNameToExcludeFromCopy,
  isPropertyDescriptorEnumerable,
) => {
  if (
    (copyNonEnumerablePropertiesFromSource &&
      typeof copyNonEnumerablePropertiesFromSource == "object") ||
    typeof copyNonEnumerablePropertiesFromSource == "function"
  ) {
    for (let propertyName of Object.getOwnPropertyNames(
      copyNonEnumerablePropertiesFromSource,
    )) {
      if (
        !Object.prototype.hasOwnProperty.call(
          copyNonEnumerableProperties,
          propertyName,
        ) &&
        propertyName !== propertyNameToExcludeFromCopy
      ) {
        Object.defineProperty(copyNonEnumerableProperties, propertyName, {
          get: () => copyNonEnumerablePropertiesFromSource[propertyName],
          enumerable:
            !(isPropertyDescriptorEnumerable = Object.getOwnPropertyDescriptor(
              copyNonEnumerablePropertiesFromSource,
              propertyName,
            )) || isPropertyDescriptorEnumerable.enumerable,
        });
      }
    }
  }
  return copyNonEnumerableProperties;
};
var initializeModulePrototypeWithSourceData = (
  dataSource,
  dataSourceProperties,
  createPrototypeFromDataSource,
) => {
  if (dataSource != null) {
    createPrototypeFromDataSource = Object.create(
      Object.getPrototypeOf(dataSource),
    );
  } else {
    createPrototypeFromDataSource = {};
  }
  return setupLazyPropertyAccessors(
    dataSourceProperties || !dataSource || !dataSource.__esModule
      ? Object.defineProperty(createPrototypeFromDataSource, "default", {
          value: dataSource,
          enumerable: true,
        })
      : createPrototypeFromDataSource,
    dataSource,
  );
};
var initializeDeferredPromiseHandler = initializeDeferredModule(
  (createDeferredPromiseHandler) => {
    "use strict";

    Object.defineProperty(createDeferredPromiseHandler, "__esModule", {
      value: true,
    });
    createDeferredPromiseHandler.createDeferredExecutor = undefined;
    function initializePromiseHandler() {
      let createPendingPromiseResolutionHandler = (
        _createPendingPromiseResolutionHandler,
        handleRejectedPromise,
      ) => {
        createPendingPromiseResolutionHandler.state = "pending";
        createPendingPromiseResolutionHandler.resolve = (
          processAndFinalizePromiseResolution,
        ) => {
          if (createPendingPromiseResolutionHandler.state !== "pending") {
            return;
          }
          createPendingPromiseResolutionHandler.result =
            processAndFinalizePromiseResolution;
          let finalizePromiseResolutionAndReturnValue = (
            createPromiseFulfillmentHandler,
          ) => {
            createPendingPromiseResolutionHandler.state = "fulfilled";
            return createPromiseFulfillmentHandler;
          };
          return _createPendingPromiseResolutionHandler(
            processAndFinalizePromiseResolution instanceof Promise
              ? processAndFinalizePromiseResolution
              : Promise.resolve(processAndFinalizePromiseResolution).then(
                  finalizePromiseResolutionAndReturnValue,
                ),
          );
        };
        createPendingPromiseResolutionHandler.reject = (
          rejectPendingPromiseWithRejectionReason,
        ) => {
          if (createPendingPromiseResolutionHandler.state === "pending") {
            queueMicrotask(() => {
              createPendingPromiseResolutionHandler.state = "rejected";
            });
            return rejectPendingPromiseWithRejectionReason(
              (createPendingPromiseResolutionHandler.rejectionReason =
                rejectPendingPromiseWithRejectionReason),
            );
          }
        };
      };
      return createPendingPromiseResolutionHandler;
    }
    createDeferredPromiseHandler.createDeferredExecutor =
      initializePromiseHandler;
  },
);
var _initializeDeferredPromiseHandler = initializeDeferredModule(
  (PromiseExecutor) => {
    "use strict";

    Object.defineProperty(PromiseExecutor, "__esModule", {
      value: true,
    });
    PromiseExecutor.DeferredPromise = undefined;
    var __initializeDeferredPromiseHandler = initializeDeferredPromiseHandler();
    var DeferredPromiseExecutor = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(appLaunchStatus = null) {
        let initializeAndExecuteDeferredPromise = (0,
        __initializeDeferredPromiseHandler.createDeferredExecutor)();
        super(
          (
            initializeDeferredPromiseHandlerAndExecute,
            isDeferredPromiseExecutionSuccessful,
          ) => {
            initializeAndExecuteDeferredPromise(
              initializeDeferredPromiseHandlerAndExecute,
              isDeferredPromiseExecutionSuccessful,
            );
            appLaunchStatus?.(
              initializeAndExecuteDeferredPromise.resolve,
              initializeAndExecuteDeferredPromise.reject,
            );
          },
        );
        this.#e = initializeAndExecuteDeferredPromise;
        this.resolve = this.#e.resolve;
        this.reject = this.#e.reject;
      }
      get state() {
        return this.#e.state;
      }
      get rejectionReason() {
        return this.#e.rejectionReason;
      }
      then(handlePromiseResolutionWithCallback, processPromiseHandlers) {
        return this.#t(
          super.then(
            handlePromiseResolutionWithCallback,
            processPromiseHandlers,
          ),
        );
      }
      catch(handleErrorResponseInCatch) {
        return this.#t(super.catch(handleErrorResponseInCatch));
      }
      finally(handleFinalizationAndReturn) {
        return this.#t(super.finally(handleFinalizationAndReturn));
      }
      #t(initializePromiseHandlers) {
        return Object.defineProperties(initializePromiseHandlers, {
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
    PromiseExecutor.DeferredPromise = DeferredPromiseExecutor;
  },
);
var initializeDeferredExportBinding = initializeDeferredModule(
  (bindModuleExportProperty) => {
    "use strict";

    var createBindingForExportedModuleProperty =
      (bindModuleExportProperty && bindModuleExportProperty.__createBinding) ||
      (Object.create
        ? function (
            retrievePropertyDescriptor,
            retrieveModuleExportedProperty,
            propertyIdentifier,
            _propertyIdentifier = propertyIdentifier,
          ) {
            var retrieveOrCreatePropertyDescriptor =
              Object.getOwnPropertyDescriptor(
                retrieveModuleExportedProperty,
                propertyIdentifier,
              );
            if (
              !retrieveOrCreatePropertyDescriptor ||
              ("get" in retrieveOrCreatePropertyDescriptor
                ? !retrieveModuleExportedProperty.__esModule
                : retrieveOrCreatePropertyDescriptor.writable ||
                  retrieveOrCreatePropertyDescriptor.configurable)
            ) {
              retrieveOrCreatePropertyDescriptor = {
                enumerable: true,
                get() {
                  return retrieveModuleExportedProperty[propertyIdentifier];
                },
              };
            }
            Object.defineProperty(
              retrievePropertyDescriptor,
              _propertyIdentifier,
              retrieveOrCreatePropertyDescriptor,
            );
          }
        : function (
            bindPropertyFromSourceToTarget,
            copyPropertyValueFromSourceToTarget,
            sourcePropertyIdentifier,
            _sourcePropertyIdentifier = sourcePropertyIdentifier,
          ) {
            bindPropertyFromSourceToTarget[_sourcePropertyIdentifier] =
              copyPropertyValueFromSourceToTarget[sourcePropertyIdentifier];
          });
    var createBindingForExportedProperty =
      (bindModuleExportProperty && bindModuleExportProperty.__exportStar) ||
      function (
        copyExportsFromSourceToTargetModule,
        copyAndBindExportsFromSourceToTargetModule,
      ) {
        for (var exportPropertyName in copyExportsFromSourceToTargetModule) {
          if (
            exportPropertyName !== "default" &&
            !Object.prototype.hasOwnProperty.call(
              copyAndBindExportsFromSourceToTargetModule,
              exportPropertyName,
            )
          ) {
            createBindingForExportedModuleProperty(
              copyAndBindExportsFromSourceToTargetModule,
              copyExportsFromSourceToTargetModule,
              exportPropertyName,
            );
          }
        }
      };
    Object.defineProperty(bindModuleExportProperty, "__esModule", {
      value: true,
    });
    createBindingForExportedProperty(
      initializeDeferredPromiseHandler(),
      bindModuleExportProperty,
    );
    createBindingForExportedProperty(
      _initializeDeferredPromiseHandler(),
      bindModuleExportProperty,
    );
  },
);
var generatePaddedSubstringWithLimit = initializeDeferredModule(
  (createPaddedAndTruncatedSubstring, createAndLimitPaddedSubstring) => {
    createAndLimitPaddedSubstring.exports = function (
      createPaddedSubstringWithLimit,
      paddingCharacterLimit,
    ) {
      var _generatePaddedSubstringWithLimit =
        "000000000" + createPaddedSubstringWithLimit;
      return _generatePaddedSubstringWithLimit.substr(
        _generatePaddedSubstringWithLimit.length - paddingCharacterLimit,
      );
    };
  },
);
var generateUniqueIdentifierWithCount = initializeDeferredModule(
  (createAndExposeUniqueIdentifier, _createAndExposeUniqueIdentifier) => {
    var createAndReturnGlobalUniqueId = generatePaddedSubstringWithLimit();
    var globalExecutionContext = typeof window == "object" ? window : self;
    var globalObjectPropertiesCount = Object.keys(
      globalExecutionContext,
    ).length;
    var getCountOfAvailableMimeTypes = navigator.mimeTypes
      ? navigator.mimeTypes.length
      : 0;
    var createAndReturnUniqueId = createAndReturnGlobalUniqueId(
      (getCountOfAvailableMimeTypes + navigator.userAgent.length).toString(36) +
        globalObjectPropertiesCount.toString(36),
      4,
    );
    _createAndExposeUniqueIdentifier.exports = function () {
      return createAndReturnUniqueId;
    };
  },
);
var initializeSecureRandomGenerator = initializeDeferredModule(
  (
    initializeSecureRandomDecimalGenerator,
    _initializeSecureRandomDecimalGenerator,
  ) => {
    var createSecureRandomDecimalGenerator;
    var __initializeSecureRandomDecimalGenerator =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (__initializeSecureRandomDecimalGenerator) {
      maxSecureRandomUint32Value = Math.pow(2, 32) - 1;
      createSecureRandomDecimalGenerator = function () {
        return Math.abs(
          __initializeSecureRandomDecimalGenerator.getRandomValues(
            new Uint32Array(1),
          )[0] / maxSecureRandomUint32Value,
        );
      };
    } else {
      createSecureRandomDecimalGenerator = Math.random;
    }
    var maxSecureRandomUint32Value;
    _initializeSecureRandomDecimalGenerator.exports =
      createSecureRandomDecimalGenerator;
  },
);
var generateUniquePropertyBindingIdentifier = initializeDeferredModule(
  (_createUniqueIdentifierForProperty, createUniqueIdForProperty) => {
    var generateUniqueIdForProperty = generateUniqueIdentifierWithCount();
    var createPaddedUniqueIdForProperty = generatePaddedSubstringWithLimit();
    var initializeSecureRandomIdentifierGenerator =
      initializeSecureRandomGenerator();
    var currentUniqueIdCounter = 0;
    var uniqueIdentifierLengthLimit = 4;
    var uniqueIdBaseNumericSystem = 36;
    var maxUniqueIdentifierLimit = Math.pow(
      uniqueIdBaseNumericSystem,
      uniqueIdentifierLengthLimit,
    );
    function generateUniqueIdentifierForBinding() {
      return createPaddedUniqueIdForProperty(
        (
          (initializeSecureRandomIdentifierGenerator() *
            maxUniqueIdentifierLimit) <<
          0
        ).toString(uniqueIdBaseNumericSystem),
        uniqueIdentifierLengthLimit,
      );
    }
    function getNextUniqueId() {
      if (currentUniqueIdCounter < maxUniqueIdentifierLimit) {
        currentUniqueIdCounter = currentUniqueIdCounter;
      } else {
        currentUniqueIdCounter = 0;
      }
      currentUniqueIdCounter++;
      return currentUniqueIdCounter - 1;
    }
    function createTimestampedUniqueIdWithProperties() {
      var idGenerationPrefix = "c";
      var currentMillisecondsBase36String = new Date()
        .getTime()
        .toString(uniqueIdBaseNumericSystem);
      var generatePaddedIdentifierForUniqueProperty =
        createPaddedUniqueIdForProperty(
          getNextUniqueId().toString(uniqueIdBaseNumericSystem),
          uniqueIdentifierLengthLimit,
        );
      var generateUniqueIdentifierWithTimestampAndProperties =
        generateUniqueIdForProperty();
      var combinedDescriptorIdentifiers =
        generateUniqueIdentifierForBinding() +
        generateUniqueIdentifierForBinding();
      return (
        idGenerationPrefix +
        currentMillisecondsBase36String +
        generatePaddedIdentifierForUniqueProperty +
        generateUniqueIdentifierWithTimestampAndProperties +
        combinedDescriptorIdentifiers
      );
    }
    createTimestampedUniqueIdWithProperties.slug = function () {
      var generateUniqueIdentifierWithTimestamp = new Date()
        .getTime()
        .toString(36);
      var getLastFourCharsFromUniqueId = getNextUniqueId()
        .toString(36)
        .slice(-4);
      var uniqueIdentifierBoundaryChars =
        generateUniqueIdForProperty().slice(0, 1) +
        generateUniqueIdForProperty().slice(-1);
      var getLastTwoCharactersFromDescriptor =
        generateUniqueIdentifierForBinding().slice(-2);
      return (
        generateUniqueIdentifierWithTimestamp.slice(-2) +
        getLastFourCharsFromUniqueId +
        uniqueIdentifierBoundaryChars +
        getLastTwoCharactersFromDescriptor
      );
    };
    createTimestampedUniqueIdWithProperties.isCuid = function (
      isStringStartingWithC,
    ) {
      if (typeof isStringStartingWithC != "string") {
        return false;
      } else {
        return !!isStringStartingWithC.startsWith("c");
      }
    };
    createTimestampedUniqueIdWithProperties.isSlug = function (
      isSlugLengthValid,
    ) {
      if (typeof isSlugLengthValid != "string") {
        return false;
      }
      var calculateSlugCharacterCount = isSlugLengthValid.length;
      return (
        calculateSlugCharacterCount >= 7 && calculateSlugCharacterCount <= 10
      );
    };
    createTimestampedUniqueIdWithProperties.fingerprint =
      generateUniqueIdForProperty;
    createUniqueIdForProperty.exports = createTimestampedUniqueIdWithProperties;
  },
);
var identifierFormatPattern = /(%?)(%([sdjo]))/g;
function formatIdentifierByType(
  getFormattedIdentifierByType,
  identifierFormatTypeCharacter,
) {
  switch (identifierFormatTypeCharacter) {
    case "s":
      return getFormattedIdentifierByType;
    case "d":
    case "i":
      return Number(getFormattedIdentifierByType);
    case "j":
      return JSON.stringify(getFormattedIdentifierByType);
    case "o": {
      if (typeof getFormattedIdentifierByType == "string") {
        return getFormattedIdentifierByType;
      }
      let jsonIdentifierString = JSON.stringify(getFormattedIdentifierByType);
      if (
        jsonIdentifierString === "{}" ||
        jsonIdentifierString === "[]" ||
        /^\[object .+?\]$/.test(jsonIdentifierString)
      ) {
        return getFormattedIdentifierByType;
      } else {
        return jsonIdentifierString;
      }
    }
  }
}
function substitutePlaceholdersWithValues(
  replaceIdentifiersInPlaceholders,
  ...substitutePlaceholdersWithIdentifiers
) {
  if (substitutePlaceholdersWithIdentifiers.length === 0) {
    return replaceIdentifiersInPlaceholders;
  }
  let activeSubstitutionIndex = 0;
  let formattedStringWithSubstitutedIdentifiers =
    replaceIdentifiersInPlaceholders.replace(
      identifierFormatPattern,
      (
        processAndFormatPlaceholder,
        isPlaceholderProcessingRequired,
        generateOrProcessPlaceholder,
        _processAndFormatPlaceholder,
      ) => {
        let activePlaceholderIdentifier =
          substitutePlaceholdersWithIdentifiers[activeSubstitutionIndex];
        let formatAndReturnPlaceholderIdentifier = formatIdentifierByType(
          activePlaceholderIdentifier,
          _processAndFormatPlaceholder,
        );
        if (isPlaceholderProcessingRequired) {
          return processAndFormatPlaceholder;
        } else {
          activeSubstitutionIndex++;
          return formatAndReturnPlaceholderIdentifier;
        }
      },
    );
  if (activeSubstitutionIndex < substitutePlaceholdersWithIdentifiers.length) {
    formattedStringWithSubstitutedIdentifiers +=
      " " +
      substitutePlaceholdersWithIdentifiers
        .slice(activeSubstitutionIndex)
        .join(" ");
  }
  formattedStringWithSubstitutedIdentifiers =
    formattedStringWithSubstitutedIdentifiers.replace(/%{2,2}/g, "%");
  return formattedStringWithSubstitutedIdentifiers;
}
var linesToRemoveFromStackTraceForErrorHandling = 2;
function sanitizeErrorStackTrace(sanitizeStackTraceForErrorHandling) {
  if (!sanitizeStackTraceForErrorHandling.stack) {
    return;
  }
  let filteredStackTraceLines =
    sanitizeStackTraceForErrorHandling.stack.split("\n");
  filteredStackTraceLines.splice(
    1,
    linesToRemoveFromStackTraceForErrorHandling,
  );
  sanitizeStackTraceForErrorHandling.stack = filteredStackTraceLines.join("\n");
}
var FormattedInvariantViolationError = class extends Error {
  constructor(formattedErrorMessage, ...errorMessageValues) {
    super(formattedErrorMessage);
    this.message = formattedErrorMessage;
    this.name = "Invariant Violation";
    this.message = substitutePlaceholdersWithValues(
      formattedErrorMessage,
      ...errorMessageValues,
    );
    sanitizeErrorStackTrace(this);
  }
};
var validateAndThrowIfInvalid = (
  checkAndValidateInputOrThrowError,
  validateInputOrThrowError,
  ...errorDetails
) => {
  if (!checkAndValidateInputOrThrowError) {
    throw new FormattedInvariantViolationError(
      validateInputOrThrowError,
      ...errorDetails,
    );
  }
};
validateAndThrowIfInvalid.as = (
  InvalidPlaceholderError,
  isPlaceholderValueValid,
  placeholderKey,
  ...checkAndSubstitutePlaceholders
) => {
  if (!isPlaceholderValueValid) {
    throw InvalidPlaceholderError.prototype.name != null
      ? new InvalidPlaceholderError(
          substitutePlaceholdersWithValues(
            placeholderKey,
            checkAndSubstitutePlaceholders,
          ),
        )
      : InvalidPlaceholderError(
          substitutePlaceholdersWithValues(
            placeholderKey,
            checkAndSubstitutePlaceholders,
          ),
        );
  }
};
var initializeStorageValueFromSource = initializeModulePrototypeWithSourceData(
  initializeDeferredExportBinding(),
);
var fetchDebugModeFromLocalStorage = window.localStorage.CSB_EMULATOR_DEBUG;
function initializePlaceholderTransformer(_createPlaceholderTransformer) {
  return function (transformAndSubstitutePlaceholders, ...placeholderValues) {};
}
var previewManagerId = "preview-manager";
var PREVIEW_STATUS_READY = "preview/ready";
var previewResponseKey = "preview/response";
var generatePreviewManagerAcknowledgementId = "preview/manager-ack";
var bridgeInitializationUrl = "bridge/init";
var generateRuntimeResponseIdentifier = "preview/runtime-response";
var generateBridgeCloseIdentifier = "bridge/close";
var initializeUniqueIdentifierGenerator =
  initializeModulePrototypeWithSourceData(
    generateUniquePropertyBindingIdentifier(),
  );
var maxAllowedUniqueIdentifier = 4294967295;
function syncIdentifierBufferWithNormalizedId(
  updateAndReplaceIdentifierValue,
  updateIdentifierBufferWithPlaceholder,
  normalizeAndUploadIdentifier,
) {
  var normalizedIdentifierValue = normalizeAndUploadIdentifier / 4294967296;
  var rawIdentifierValue = normalizeAndUploadIdentifier;
  updateAndReplaceIdentifierValue.setUint32(
    updateIdentifierBufferWithPlaceholder,
    normalizedIdentifierValue,
  );
  updateAndReplaceIdentifierValue.setUint32(
    updateIdentifierBufferWithPlaceholder + 4,
    rawIdentifierValue,
  );
}
function _storeUniqueIdentifierInBuffer(
  storeUniqueIdentifierInBuffer,
  currentUniqueIdentifierFromStack,
  extractHighIdentifierChunk,
) {
  var highIdentifierValue = Math.floor(extractHighIdentifierChunk / 4294967296);
  var highIdentifierChunkValue = extractHighIdentifierChunk;
  storeUniqueIdentifierInBuffer.setUint32(
    currentUniqueIdentifierFromStack,
    highIdentifierValue,
  );
  storeUniqueIdentifierInBuffer.setUint32(
    currentUniqueIdentifierFromStack + 4,
    highIdentifierChunkValue,
  );
}
function generateRandomLargeIntegerFromBuffer(
  _getRandomValueFromBuffer,
  retrieveAndFormatRandomIdentifier,
) {
  var randomLargeIntegerFromBuffer = _getRandomValueFromBuffer.getInt32(
    retrieveAndFormatRandomIdentifier,
  );
  var fetchLowOrderRandomUInt32 = _getRandomValueFromBuffer.getUint32(
    retrieveAndFormatRandomIdentifier + 4,
  );
  return randomLargeIntegerFromBuffer * 4294967296 + fetchLowOrderRandomUInt32;
}
function createUniqueIdFromBuffer(
  _generateUniqueIdentifierFromBuffer,
  __generateUniqueIdentifierFromBuffer,
) {
  var generateUniqueIdFromBuffer =
    _generateUniqueIdentifierFromBuffer.getUint32(
      __generateUniqueIdentifierFromBuffer,
    );
  var getHighAndLowOrderIdsFromBuffer =
    _generateUniqueIdentifierFromBuffer.getUint32(
      __generateUniqueIdentifierFromBuffer + 4,
    );
  return (
    generateUniqueIdFromBuffer * 4294967296 + getHighAndLowOrderIdsFromBuffer
  );
}
var isTextEncodingCompatibleWithNode =
  (typeof process === "undefined" ||
    (process == null ? undefined : process.env)?.TEXT_ENCODING !== "never") &&
  typeof TextEncoder !== "undefined" &&
  typeof TextDecoder !== "undefined";
function calculateSlugUtf8ByteLengthInBytes(_calculateSlugUtf8ByteLength) {
  for (
    var slugUtf8CharacterCount = _calculateSlugUtf8ByteLength.length,
      calculateUtf8ByteLengthForSlug = 0,
      currentCharacterIndex = 0;
    currentCharacterIndex < slugUtf8CharacterCount;

  ) {
    var utf8CharacterCodeAtCurrentIndex =
      _calculateSlugUtf8ByteLength.charCodeAt(currentCharacterIndex++);
    if ((utf8CharacterCodeAtCurrentIndex & 4294967168) === 0) {
      calculateUtf8ByteLengthForSlug++;
      continue;
    } else if ((utf8CharacterCodeAtCurrentIndex & 4294965248) === 0) {
      calculateUtf8ByteLengthForSlug += 2;
    } else {
      if (
        utf8CharacterCodeAtCurrentIndex >= 55296 &&
        utf8CharacterCodeAtCurrentIndex <= 56319 &&
        currentCharacterIndex < slugUtf8CharacterCount
      ) {
        var currentCharacterCode = _calculateSlugUtf8ByteLength.charCodeAt(
          currentCharacterIndex,
        );
        if ((currentCharacterCode & 64512) === 56320) {
          ++currentCharacterIndex;
          utf8CharacterCodeAtCurrentIndex =
            ((utf8CharacterCodeAtCurrentIndex & 1023) << 10) +
            (currentCharacterCode & 1023) +
            65536;
        }
      }
      if ((utf8CharacterCodeAtCurrentIndex & 4294901760) === 0) {
        calculateUtf8ByteLengthForSlug += 3;
      } else {
        calculateUtf8ByteLengthForSlug += 4;
      }
    }
  }
  return calculateUtf8ByteLengthForSlug;
}
function generateValidSlugCharacterArray(
  invalidSlugViolations,
  validateSlugFormat,
  findInvalidSlugIndex,
) {
  for (
    var slugViolationCount = invalidSlugViolations.length,
      currentValidSlugCharacterIndex = findInvalidSlugIndex,
      currentCharacterIndex = 0;
    currentCharacterIndex < slugViolationCount;

  ) {
    var unicodeCharacterCode = invalidSlugViolations.charCodeAt(
      currentCharacterIndex++,
    );
    if ((unicodeCharacterCode & 4294967168) === 0) {
      validateSlugFormat[currentValidSlugCharacterIndex++] =
        unicodeCharacterCode;
      continue;
    } else if ((unicodeCharacterCode & 4294965248) === 0) {
      validateSlugFormat[currentValidSlugCharacterIndex++] =
        ((unicodeCharacterCode >> 6) & 31) | 192;
    } else {
      if (
        unicodeCharacterCode >= 55296 &&
        unicodeCharacterCode <= 56319 &&
        currentCharacterIndex < slugViolationCount
      ) {
        var fetchNextUnicodeCharacterCode = invalidSlugViolations.charCodeAt(
          currentCharacterIndex,
        );
        if ((fetchNextUnicodeCharacterCode & 64512) === 56320) {
          ++currentCharacterIndex;
          unicodeCharacterCode =
            ((unicodeCharacterCode & 1023) << 10) +
            (fetchNextUnicodeCharacterCode & 1023) +
            65536;
        }
      }
      if ((unicodeCharacterCode & 4294901760) === 0) {
        validateSlugFormat[currentValidSlugCharacterIndex++] =
          ((unicodeCharacterCode >> 12) & 15) | 224;
        validateSlugFormat[currentValidSlugCharacterIndex++] =
          ((unicodeCharacterCode >> 6) & 63) | 128;
      } else {
        validateSlugFormat[currentValidSlugCharacterIndex++] =
          ((unicodeCharacterCode >> 18) & 7) | 240;
        validateSlugFormat[currentValidSlugCharacterIndex++] =
          ((unicodeCharacterCode >> 12) & 63) | 128;
        validateSlugFormat[currentValidSlugCharacterIndex++] =
          ((unicodeCharacterCode >> 6) & 63) | 128;
      }
    }
    validateSlugFormat[currentValidSlugCharacterIndex++] =
      (unicodeCharacterCode & 63) | 128;
  }
}
var createTextEncoderIfNodeCompatible = isTextEncodingCompatibleWithNode
  ? new TextEncoder()
  : undefined;
var getTextEncodingIdentifierBasedOnNodeCompatibility =
  isTextEncodingCompatibleWithNode
    ? typeof process !== "undefined" &&
      (process == null ? undefined : process.env)?.TEXT_ENCODING !== "force"
      ? 200
      : 0
    : maxAllowedUniqueIdentifier;
function encodeAndStoreUniqueTextIdentifier(
  setEncodedUniqueTextIdentifier,
  encodeTextWithUniqueIdentifier,
  setEncodedUniqueIdentifier,
) {
  encodeTextWithUniqueIdentifier.set(
    createTextEncoderIfNodeCompatible.encode(setEncodedUniqueTextIdentifier),
    setEncodedUniqueIdentifier,
  );
}
function initializeUniqueIdentifierEncoder(
  setupUniqueIdentifierEncodingFromText,
  encodeUniqueIdentifierBasedOnText,
  encodeUniqueIdentifierFromText,
) {
  createTextEncoderIfNodeCompatible.encodeInto(
    setupUniqueIdentifierEncodingFromText,
    encodeUniqueIdentifierBasedOnText.subarray(encodeUniqueIdentifierFromText),
  );
}
var handleUniqueIdentifierEncoding =
  createTextEncoderIfNodeCompatible?.encodeInto
    ? initializeUniqueIdentifierEncoder
    : encodeAndStoreUniqueTextIdentifier;
var maxAllowedUniqueIdentifierValue = 4096;
function combineAndProcessUniqueIdentifiers(
  combineAndReplaceUniqueIdentifiers,
  replaceAndCombineIdentifierMappings,
  processUniqueIdentifierReplacements,
) {
  for (
    var identifierReplacementIndex = replaceAndCombineIdentifierMappings,
      maxIdentifierReplacementIndex =
        identifierReplacementIndex + processUniqueIdentifierReplacements,
      uniqueIdentifiersBuffer = [],
      temporaryIdentifierBufferValue = "";
    identifierReplacementIndex < maxIdentifierReplacementIndex;

  ) {
    var uniqueIdentifier =
      combineAndReplaceUniqueIdentifiers[identifierReplacementIndex++];
    if ((uniqueIdentifier & 128) === 0) {
      uniqueIdentifiersBuffer.push(uniqueIdentifier);
    } else if ((uniqueIdentifier & 224) === 192) {
      var processedIdentifierBit =
        combineAndReplaceUniqueIdentifiers[identifierReplacementIndex++] & 63;
      uniqueIdentifiersBuffer.push(
        ((uniqueIdentifier & 31) << 6) | processedIdentifierBit,
      );
    } else if ((uniqueIdentifier & 240) === 224) {
      var processedIdentifierBit =
        combineAndReplaceUniqueIdentifiers[identifierReplacementIndex++] & 63;
      var currentIdentifierBit =
        combineAndReplaceUniqueIdentifiers[identifierReplacementIndex++] & 63;
      uniqueIdentifiersBuffer.push(
        ((uniqueIdentifier & 31) << 12) |
          (processedIdentifierBit << 6) |
          currentIdentifierBit,
      );
    } else if ((uniqueIdentifier & 248) === 240) {
      var processedIdentifierBit =
        combineAndReplaceUniqueIdentifiers[identifierReplacementIndex++] & 63;
      var currentIdentifierBit =
        combineAndReplaceUniqueIdentifiers[identifierReplacementIndex++] & 63;
      var sectionIdentifierBit =
        combineAndReplaceUniqueIdentifiers[identifierReplacementIndex++] & 63;
      var encodedUniqueIdentifier =
        ((uniqueIdentifier & 7) << 18) |
        (processedIdentifierBit << 12) |
        (currentIdentifierBit << 6) |
        sectionIdentifierBit;
      if (encodedUniqueIdentifier > 65535) {
        encodedUniqueIdentifier -= 65536;
        uniqueIdentifiersBuffer.push(
          ((encodedUniqueIdentifier >>> 10) & 1023) | 55296,
        );
        encodedUniqueIdentifier = (encodedUniqueIdentifier & 1023) | 56320;
      }
      uniqueIdentifiersBuffer.push(encodedUniqueIdentifier);
    } else {
      uniqueIdentifiersBuffer.push(uniqueIdentifier);
    }
    if (uniqueIdentifiersBuffer.length >= maxAllowedUniqueIdentifierValue) {
      temporaryIdentifierBufferValue += String.fromCharCode.apply(
        String,
        uniqueIdentifiersBuffer,
      );
      uniqueIdentifiersBuffer.length = 0;
    }
  }
  if (uniqueIdentifiersBuffer.length > 0) {
    temporaryIdentifierBufferValue += String.fromCharCode.apply(
      String,
      uniqueIdentifiersBuffer,
    );
  }
  return temporaryIdentifierBufferValue;
}
var uniqueIdentifierTextDecoder = isTextEncodingCompatibleWithNode
  ? new TextDecoder()
  : null;
var getEncodedUniqueIdentifierValue = isTextEncodingCompatibleWithNode
  ? typeof process !== "undefined" &&
    (process == null ? undefined : process.env)?.TEXT_DECODER !== "force"
    ? 200
    : 0
  : maxAllowedUniqueIdentifier;
function decodeSlugCharactersFromBuffer(
  extractAndDecodeSlugCharactersBuffer,
  decodeAndValidateUniqueIdentifiers,
  processUniqueIdentifiersFromBuffer,
) {
  var extractAndDecodeSlugCharactersSlice =
    extractAndDecodeSlugCharactersBuffer.subarray(
      decodeAndValidateUniqueIdentifiers,
      decodeAndValidateUniqueIdentifiers + processUniqueIdentifiersFromBuffer,
    );
  return uniqueIdentifierTextDecoder.decode(
    extractAndDecodeSlugCharactersSlice,
  );
}
var validateSlugByteLengthForUniqueness = (function () {
  function _SlugUniquenessChecker(
    SlugByteLengthValidator,
    _SlugUniquenessValidator,
  ) {
    this.type = SlugByteLengthValidator;
    this.data = _SlugUniquenessValidator;
  }
  return _SlugUniquenessChecker;
})();
var processAndValidateSlugIdentifier = (function () {
  function validateAndProcessSlugForUniqueness(
    validateAndNormalizeUniqueIdentifierLength,
    SlugUniquenessChecker,
  ) {
    validateAndProcessSlugForUniqueness =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (
          validateAndNormalizeSlugUniqueIdentifier,
          _processAndValidateSlugIdentifier,
        ) {
          validateAndNormalizeSlugUniqueIdentifier.__proto__ =
            _processAndValidateSlugIdentifier;
        }) ||
      function (
        validateSlugCharacterUniqueness,
        validateAndNormalizeUniqueSlug,
      ) {
        for (var uniqueSlugValidationKey in validateAndNormalizeUniqueSlug) {
          if (
            Object.prototype.hasOwnProperty.call(
              validateAndNormalizeUniqueSlug,
              uniqueSlugValidationKey,
            )
          ) {
            validateSlugCharacterUniqueness[uniqueSlugValidationKey] =
              validateAndNormalizeUniqueSlug[uniqueSlugValidationKey];
          }
        }
      };
    return validateAndProcessSlugForUniqueness(
      validateAndNormalizeUniqueIdentifierLength,
      SlugUniquenessChecker,
    );
  }
  return function (
    validateSlugAndEnsureUniqueness,
    validateAndEnsureUniqueSlug,
  ) {
    if (
      typeof validateAndEnsureUniqueSlug != "function" &&
      validateAndEnsureUniqueSlug !== null
    ) {
      throw new TypeError(
        "Class extends value " +
          String(validateAndEnsureUniqueSlug) +
          " is not a constructor or null",
      );
    }
    validateAndProcessSlugForUniqueness(
      validateSlugAndEnsureUniqueness,
      validateAndEnsureUniqueSlug,
    );
    function setupSlugValidationRules() {
      this.constructor = validateSlugAndEnsureUniqueness;
    }
    if (validateAndEnsureUniqueSlug === null) {
      validateSlugAndEnsureUniqueness.prototype = Object.create(
        validateAndEnsureUniqueSlug,
      );
    } else {
      validateSlugAndEnsureUniqueness.prototype =
        ((setupSlugValidationRules.prototype =
          validateAndEnsureUniqueSlug.prototype),
        new setupSlugValidationRules());
    }
  };
})();
var processSlugForUniqueness = (function (processAndValidateSlugUniqueness) {
  processAndValidateSlugIdentifier(
    generateValidatedSlug,
    processAndValidateSlugUniqueness,
  );
  function generateValidatedSlug(createUniqueSlugObjectWithValidation) {
    var uniqueValidatedSlug =
      processAndValidateSlugUniqueness.call(
        this,
        createUniqueSlugObjectWithValidation,
      ) || this;
    var slugPrototype = Object.create(generateValidatedSlug.prototype);
    Object.setPrototypeOf(uniqueValidatedSlug, slugPrototype);
    Object.defineProperty(uniqueValidatedSlug, "name", {
      configurable: true,
      enumerable: false,
      value: generateValidatedSlug.name,
    });
    return uniqueValidatedSlug;
  }
  return generateValidatedSlug;
})(Error);
var generateUniqueSlugId = -1;
var validateAndGenerateSlug = 4294967295;
var slugUniquenessValidationResult = 17179869183;
function createTimestampBufferFromUniqueSlug(createUniqueSlugFromValidation) {
  var secondsSinceEpoch = createUniqueSlugFromValidation.sec;
  var nanosecondsSinceEpoch = createUniqueSlugFromValidation.nsec;
  if (
    secondsSinceEpoch >= 0 &&
    nanosecondsSinceEpoch >= 0 &&
    secondsSinceEpoch <= slugUniquenessValidationResult
  ) {
    if (
      nanosecondsSinceEpoch === 0 &&
      secondsSinceEpoch <= validateAndGenerateSlug
    ) {
      var timestampByteArrayFromEpoch = new Uint8Array(4);
      var timestampDataBufferView = new DataView(
        timestampByteArrayFromEpoch.buffer,
      );
      timestampDataBufferView.setUint32(0, secondsSinceEpoch);
      return timestampByteArrayFromEpoch;
    } else {
      var nanosecondsToEpochSecondsRatio = secondsSinceEpoch / 4294967296;
      var epochTimestampLower32Bits = secondsSinceEpoch & 4294967295;
      var timestampByteArrayFromEpoch = new Uint8Array(8);
      var timestampDataBufferView = new DataView(
        timestampByteArrayFromEpoch.buffer,
      );
      timestampDataBufferView.setUint32(
        0,
        (nanosecondsSinceEpoch << 2) | (nanosecondsToEpochSecondsRatio & 3),
      );
      timestampDataBufferView.setUint32(4, epochTimestampLower32Bits);
      return timestampByteArrayFromEpoch;
    }
  } else {
    var timestampByteArrayFromEpoch = new Uint8Array(12);
    var timestampDataBufferView = new DataView(
      timestampByteArrayFromEpoch.buffer,
    );
    timestampDataBufferView.setUint32(0, nanosecondsSinceEpoch);
    _storeUniqueIdentifierInBuffer(
      timestampDataBufferView,
      4,
      secondsSinceEpoch,
    );
    return timestampByteArrayFromEpoch;
  }
}
function convertDateSlugToNanoTimestamp(convertSlugToNanosecondTimestamp) {
  var unixMillisTimestamp = convertSlugToNanosecondTimestamp.getTime();
  var _secondsSinceEpoch = Math.floor(unixMillisTimestamp / 1000);
  var remainingNanosecondsAfterMilliseconds =
    (unixMillisTimestamp - _secondsSinceEpoch * 1000) * 1000000;
  var extraSecondsFromNanoseconds = Math.floor(
    remainingNanosecondsAfterMilliseconds / 1000000000,
  );
  return {
    sec: _secondsSinceEpoch + extraSecondsFromNanoseconds,
    nsec:
      remainingNanosecondsAfterMilliseconds -
      extraSecondsFromNanoseconds * 1000000000,
  };
}
function createBufferFromDateTimestamp(
  generateBufferWithTimestampAndIdentifier,
) {
  if (generateBufferWithTimestampAndIdentifier instanceof Date) {
    var timestampBufferWithUniqueIdentifierInNanoseconds =
      convertDateSlugToNanoTimestamp(generateBufferWithTimestampAndIdentifier);
    return createTimestampBufferFromUniqueSlug(
      timestampBufferWithUniqueIdentifierInNanoseconds,
    );
  } else {
    return null;
  }
}
function extractTimestampFromBuffer(getTimestampComponentsFromBuffer) {
  var timestampDataViewBuffer = new DataView(
    getTimestampComponentsFromBuffer.buffer,
    getTimestampComponentsFromBuffer.byteOffset,
    getTimestampComponentsFromBuffer.byteLength,
  );
  switch (getTimestampComponentsFromBuffer.byteLength) {
    case 4: {
      var calculateNanosecondsSinceAdjustedEpoch =
        timestampDataViewBuffer.getUint32(0);
      var adjustedEpochSecondsDividedByFour = 0;
      return {
        sec: calculateNanosecondsSinceAdjustedEpoch,
        nsec: adjustedEpochSecondsDividedByFour,
      };
    }
    case 8: {
      var getAdjustedEpochTime = timestampDataViewBuffer.getUint32(0);
      var getNanosecondsSinceAdjustedEpoch =
        timestampDataViewBuffer.getUint32(4);
      var calculateNanosecondsSinceAdjustedEpoch =
        (getAdjustedEpochTime & 3) * 4294967296 +
        getNanosecondsSinceAdjustedEpoch;
      var adjustedEpochSecondsDividedByFour = getAdjustedEpochTime >>> 2;
      return {
        sec: calculateNanosecondsSinceAdjustedEpoch,
        nsec: adjustedEpochSecondsDividedByFour,
      };
    }
    case 12: {
      var calculateNanosecondsSinceAdjustedEpoch =
        generateRandomLargeIntegerFromBuffer(timestampDataViewBuffer, 4);
      var adjustedEpochSecondsDividedByFour =
        timestampDataViewBuffer.getUint32(0);
      return {
        sec: calculateNanosecondsSinceAdjustedEpoch,
        nsec: adjustedEpochSecondsDividedByFour,
      };
    }
    default:
      throw new processSlugForUniqueness(
        `Unrecognized data size for timestamp (expected 4, 8, or 12): ${getTimestampComponentsFromBuffer.length}`,
      );
  }
}
function transformSlugTimestampToDate(convertSlugToDate) {
  var timestampComponents = extractTimestampFromBuffer(convertSlugToDate);
  return new Date(
    timestampComponents.sec * 1000 + timestampComponents.nsec / 1000000,
  );
}
var timestampUtility = {
  type: generateUniqueSlugId,
  encode: createBufferFromDateTimestamp,
  decode: transformSlugTimestampToDate,
};
var extractTimestampComponentsFromBuffer = (function () {
  function DataTransformManager() {
    this.builtInEncoders = [];
    this.builtInDecoders = [];
    this.encoders = [];
    this.decoders = [];
    this.register(timestampUtility);
  }
  DataTransformManager.prototype.register = function (
    registerTimestampUtilityHandlers,
  ) {
    var timestampUtilityHandlerType = registerTimestampUtilityHandlers.type;
    var createUniqueTimestampSlug = registerTimestampUtilityHandlers.encode;
    var decodeUniqueTimestampSlug = registerTimestampUtilityHandlers.decode;
    if (timestampUtilityHandlerType >= 0) {
      this.encoders[timestampUtilityHandlerType] = createUniqueTimestampSlug;
      this.decoders[timestampUtilityHandlerType] = decodeUniqueTimestampSlug;
    } else {
      var uniqueTimestampHandlerTypeIndex = 1 + timestampUtilityHandlerType;
      this.builtInEncoders[uniqueTimestampHandlerTypeIndex] =
        createUniqueTimestampSlug;
      this.builtInDecoders[uniqueTimestampHandlerTypeIndex] =
        decodeUniqueTimestampSlug;
    }
  };
  DataTransformManager.prototype.tryToEncode = function (
    isSlugLengthValid,
    handleInvalidTimestampEncoding,
  ) {
    for (
      var builtInEncoderIndex = 0;
      builtInEncoderIndex < this.builtInEncoders.length;
      builtInEncoderIndex++
    ) {
      var currentSelectedEncoder = this.builtInEncoders[builtInEncoderIndex];
      if (currentSelectedEncoder != null) {
        var validateAndEncodeSlug = currentSelectedEncoder(
          isSlugLengthValid,
          handleInvalidTimestampEncoding,
        );
        if (validateAndEncodeSlug != null) {
          var getSlugValidationOffsetForEncoding = -1 - builtInEncoderIndex;
          return new validateSlugByteLengthForUniqueness(
            getSlugValidationOffsetForEncoding,
            validateAndEncodeSlug,
          );
        }
      }
    }
    for (
      var builtInEncoderIndex = 0;
      builtInEncoderIndex < this.encoders.length;
      builtInEncoderIndex++
    ) {
      var currentSelectedEncoder = this.encoders[builtInEncoderIndex];
      if (currentSelectedEncoder != null) {
        var validateAndEncodeSlug = currentSelectedEncoder(
          isSlugLengthValid,
          handleInvalidTimestampEncoding,
        );
        if (validateAndEncodeSlug != null) {
          var getSlugValidationOffsetForEncoding = builtInEncoderIndex;
          return new validateSlugByteLengthForUniqueness(
            getSlugValidationOffsetForEncoding,
            validateAndEncodeSlug,
          );
        }
      }
    }
    if (isSlugLengthValid instanceof validateSlugByteLengthForUniqueness) {
      return isSlugLengthValid;
    } else {
      return null;
    }
  };
  DataTransformManager.prototype.decode = function (
    processDataWithEncodingStrategies,
    getDecoderWithFallbackIfNeeded,
    initializeSlugEncodingHandlers,
  ) {
    var getDecoderFunctionForProcessing =
      getDecoderWithFallbackIfNeeded < 0
        ? this.builtInDecoders[-1 - getDecoderWithFallbackIfNeeded]
        : this.decoders[getDecoderWithFallbackIfNeeded];
    if (getDecoderFunctionForProcessing) {
      return getDecoderFunctionForProcessing(
        processDataWithEncodingStrategies,
        getDecoderWithFallbackIfNeeded,
        initializeSlugEncodingHandlers,
      );
    } else {
      return new validateSlugByteLengthForUniqueness(
        getDecoderWithFallbackIfNeeded,
        processDataWithEncodingStrategies,
      );
    }
  };
  DataTransformManager.defaultCodec = new DataTransformManager();
  return DataTransformManager;
})();
function convertToUint8ArrayFromInputValue(generateUniqueSlugIdentifier) {
  if (generateUniqueSlugIdentifier instanceof Uint8Array) {
    return generateUniqueSlugIdentifier;
  } else if (ArrayBuffer.isView(generateUniqueSlugIdentifier)) {
    return new Uint8Array(
      generateUniqueSlugIdentifier.buffer,
      generateUniqueSlugIdentifier.byteOffset,
      generateUniqueSlugIdentifier.byteLength,
    );
  } else if (generateUniqueSlugIdentifier instanceof ArrayBuffer) {
    return new Uint8Array(generateUniqueSlugIdentifier);
  } else {
    return Uint8Array.from(generateUniqueSlugIdentifier);
  }
}
function generateDataViewFromInput(_createDataViewFromBufferOrSlug) {
  if (_createDataViewFromBufferOrSlug instanceof ArrayBuffer) {
    return new DataView(_createDataViewFromBufferOrSlug);
  }
  var convertInputToUint8ArrayFromBufferOrSlug =
    convertToUint8ArrayFromInputValue(_createDataViewFromBufferOrSlug);
  return new DataView(
    convertInputToUint8ArrayFromBufferOrSlug.buffer,
    convertInputToUint8ArrayFromBufferOrSlug.byteOffset,
    convertInputToUint8ArrayFromBufferOrSlug.byteLength,
  );
}
var defaultMaxSlugSize = 100;
var maxAllowedSlugSize = 2048;
var createUserSlugIdentifier = (function () {
  function TimestampToSlugConverter(
    extractTimestampComponentsFromDefaultCodecBuffer = extractTimestampComponentsFromBuffer.defaultCodec,
    initializationValue = undefined,
    setDefaultMaxSlugSize = defaultMaxSlugSize,
    generateSlugWithMaxLength = maxAllowedSlugSize,
    userLoginStatus = false,
    isCurrentlyUserAuthenticated = false,
    isUserAuthenticated = false,
    hasProcessingFinished = false,
  ) {
    this.extensionCodec = extractTimestampComponentsFromDefaultCodecBuffer;
    this.context = initializationValue;
    this.maxDepth = setDefaultMaxSlugSize;
    this.initialBufferSize = generateSlugWithMaxLength;
    this.sortKeys = userLoginStatus;
    this.forceFloat32 = isCurrentlyUserAuthenticated;
    this.ignoreUndefined = isUserAuthenticated;
    this.forceIntegerToFloat = hasProcessingFinished;
    this.pos = 0;
    this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
    this.bytes = new Uint8Array(this.view.buffer);
  }
  TimestampToSlugConverter.prototype.reinitializeState = function () {
    this.pos = 0;
  };
  TimestampToSlugConverter.prototype.encodeSharedRef = function (
    processAndValidateTimestampSlug,
  ) {
    this.reinitializeState();
    this.doEncode(processAndValidateTimestampSlug, 1);
    return this.bytes.subarray(0, this.pos);
  };
  TimestampToSlugConverter.prototype.encode = function (
    generateUniqueIdentifierFromSlug,
  ) {
    this.reinitializeState();
    this.doEncode(generateUniqueIdentifierFromSlug, 1);
    return this.bytes.slice(0, this.pos);
  };
  TimestampToSlugConverter.prototype.doEncode = function (
    handleAndEncodeSlug,
    encodingRecursionDepth,
  ) {
    if (encodingRecursionDepth > this.maxDepth) {
      throw new Error(`Too deep objects in depth ${encodingRecursionDepth}`);
    }
    if (handleAndEncodeSlug == null) {
      this.encodeNil();
    } else if (typeof handleAndEncodeSlug == "boolean") {
      this.encodeBoolean(handleAndEncodeSlug);
    } else if (typeof handleAndEncodeSlug == "number") {
      this.encodeNumber(handleAndEncodeSlug);
    } else if (typeof handleAndEncodeSlug == "string") {
      this.encodeString(handleAndEncodeSlug);
    } else {
      this.encodeObject(handleAndEncodeSlug, encodingRecursionDepth);
    }
  };
  TimestampToSlugConverter.prototype.ensureBufferSizeToWrite = function (
    ensureBufferSizeForEncoding,
  ) {
    var calculatedBufferSizeNeededForEncoding =
      this.pos + ensureBufferSizeForEncoding;
    if (this.view.byteLength < calculatedBufferSizeNeededForEncoding) {
      this.resizeBuffer(calculatedBufferSizeNeededForEncoding * 2);
    }
  };
  TimestampToSlugConverter.prototype.resizeBuffer = function (
    resizeBufferAndProcessSlug,
  ) {
    var slugResizingBuffer = new ArrayBuffer(resizeBufferAndProcessSlug);
    var slugByteArray = new Uint8Array(slugResizingBuffer);
    var createSlugDataView = new DataView(slugResizingBuffer);
    slugByteArray.set(this.bytes);
    this.view = createSlugDataView;
    this.bytes = slugByteArray;
  };
  TimestampToSlugConverter.prototype.encodeNil = function () {
    this.writeU8(192);
  };
  TimestampToSlugConverter.prototype.encodeBoolean = function (
    encodeBooleanAsByte,
  ) {
    if (encodeBooleanAsByte === false) {
      this.writeU8(194);
    } else {
      this.writeU8(195);
    }
  };
  TimestampToSlugConverter.prototype.encodeNumber = function (
    serializeNumericValue,
  ) {
    if (
      Number.isSafeInteger(serializeNumericValue) &&
      !this.forceIntegerToFloat
    ) {
      if (serializeNumericValue >= 0) {
        if (serializeNumericValue < 128) {
          this.writeU8(serializeNumericValue);
        } else if (serializeNumericValue < 256) {
          this.writeU8(204);
          this.writeU8(serializeNumericValue);
        } else if (serializeNumericValue < 65536) {
          this.writeU8(205);
          this.writeU16(serializeNumericValue);
        } else if (serializeNumericValue < 4294967296) {
          this.writeU8(206);
          this.writeU32(serializeNumericValue);
        } else {
          this.writeU8(207);
          this.writeU64(serializeNumericValue);
        }
      } else if (serializeNumericValue >= -32) {
        this.writeU8((serializeNumericValue + 32) | 224);
      } else if (serializeNumericValue >= -128) {
        this.writeU8(208);
        this.writeI8(serializeNumericValue);
      } else if (serializeNumericValue >= -32768) {
        this.writeU8(209);
        this.writeI16(serializeNumericValue);
      } else if (serializeNumericValue >= -2147483648) {
        this.writeU8(210);
        this.writeI32(serializeNumericValue);
      } else {
        this.writeU8(211);
        this.writeI64(serializeNumericValue);
      }
    } else if (this.forceFloat32) {
      this.writeU8(202);
      this.writeF32(serializeNumericValue);
    } else {
      this.writeU8(203);
      this.writeF64(serializeNumericValue);
    }
  };
  TimestampToSlugConverter.prototype.writeStringHeader = function (
    writeNumericValueWithPrefix,
  ) {
    if (writeNumericValueWithPrefix < 32) {
      this.writeU8(160 + writeNumericValueWithPrefix);
    } else if (writeNumericValueWithPrefix < 256) {
      this.writeU8(217);
      this.writeU8(writeNumericValueWithPrefix);
    } else if (writeNumericValueWithPrefix < 65536) {
      this.writeU8(218);
      this.writeU16(writeNumericValueWithPrefix);
    } else if (writeNumericValueWithPrefix < 4294967296) {
      this.writeU8(219);
      this.writeU32(writeNumericValueWithPrefix);
    } else {
      throw new Error(
        `Too long string: ${writeNumericValueWithPrefix} bytes in UTF-8`,
      );
    }
  };
  TimestampToSlugConverter.prototype.encodeString = function (
    writeStringHeaderWithPrefix,
  ) {
    var defaultPaddingForSlugByteBuffer = 5;
    var writeStringHeaderLength = writeStringHeaderWithPrefix.length;
    if (
      writeStringHeaderLength >
      getTextEncodingIdentifierBasedOnNodeCompatibility
    ) {
      var calculatedSlugUtf8ByteLength = calculateSlugUtf8ByteLengthInBytes(
        writeStringHeaderWithPrefix,
      );
      this.ensureBufferSizeToWrite(
        defaultPaddingForSlugByteBuffer + calculatedSlugUtf8ByteLength,
      );
      this.writeStringHeader(calculatedSlugUtf8ByteLength);
      handleUniqueIdentifierEncoding(
        writeStringHeaderWithPrefix,
        this.bytes,
        this.pos,
      );
      this.pos += calculatedSlugUtf8ByteLength;
    } else {
      var calculatedSlugUtf8ByteLength = calculateSlugUtf8ByteLengthInBytes(
        writeStringHeaderWithPrefix,
      );
      this.ensureBufferSizeToWrite(
        defaultPaddingForSlugByteBuffer + calculatedSlugUtf8ByteLength,
      );
      this.writeStringHeader(calculatedSlugUtf8ByteLength);
      generateValidSlugCharacterArray(
        writeStringHeaderWithPrefix,
        this.bytes,
        this.pos,
      );
      this.pos += calculatedSlugUtf8ByteLength;
    }
  };
  TimestampToSlugConverter.prototype.encodeObject = function (
    createSlugFromString,
    _createSlugFromString,
  ) {
    var encodedSlugForCurrentContext = this.extensionCodec.tryToEncode(
      createSlugFromString,
      this.context,
    );
    if (encodedSlugForCurrentContext != null) {
      this.encodeExtension(encodedSlugForCurrentContext);
    } else if (Array.isArray(createSlugFromString)) {
      this.encodeArray(createSlugFromString, _createSlugFromString);
    } else if (ArrayBuffer.isView(createSlugFromString)) {
      this.encodeBinary(createSlugFromString);
    } else if (typeof createSlugFromString == "object") {
      this.encodeMap(createSlugFromString, _createSlugFromString);
    } else {
      throw new Error(
        `Unrecognized object: ${Object.prototype.toString.apply(createSlugFromString)}`,
      );
    }
  };
  TimestampToSlugConverter.prototype.encodeBinary = function (
    calculateBinaryArraySlugByteLength,
  ) {
    var calculateBinarySlugLength =
      calculateBinaryArraySlugByteLength.byteLength;
    if (calculateBinarySlugLength < 256) {
      this.writeU8(196);
      this.writeU8(calculateBinarySlugLength);
    } else if (calculateBinarySlugLength < 65536) {
      this.writeU8(197);
      this.writeU16(calculateBinarySlugLength);
    } else if (calculateBinarySlugLength < 4294967296) {
      this.writeU8(198);
      this.writeU32(calculateBinarySlugLength);
    } else {
      throw new Error(`Too large binary: ${calculateBinarySlugLength}`);
    }
    var convertBinaryArrayToUint8Array = convertToUint8ArrayFromInputValue(
      calculateBinaryArraySlugByteLength,
    );
    this.writeU8a(convertBinaryArrayToUint8Array);
  };
  TimestampToSlugConverter.prototype.encodeArray = function (
    binaryArraySlugForEncoding,
    encodeArrayAndComputeSlugSize,
  ) {
    var inputBinaryArrayLength = binaryArraySlugForEncoding.length;
    if (inputBinaryArrayLength < 16) {
      this.writeU8(144 + inputBinaryArrayLength);
    } else if (inputBinaryArrayLength < 65536) {
      this.writeU8(220);
      this.writeU16(inputBinaryArrayLength);
    } else if (inputBinaryArrayLength < 4294967296) {
      this.writeU8(221);
      this.writeU32(inputBinaryArrayLength);
    } else {
      throw new Error(`Too large array: ${inputBinaryArrayLength}`);
    }
    for (
      var encodingLengthIndex = 0,
        activeInputEncodingLengths = binaryArraySlugForEncoding;
      encodingLengthIndex < activeInputEncodingLengths.length;
      encodingLengthIndex++
    ) {
      var currentInputEncodingLength =
        activeInputEncodingLengths[encodingLengthIndex];
      this.doEncode(
        currentInputEncodingLength,
        encodeArrayAndComputeSlugSize + 1,
      );
    }
  };
  TimestampToSlugConverter.prototype.countWithoutUndefined = function (
    calculateValidBinaryArrayEncoding,
    calculateValidDecodingsFromBuffer,
  ) {
    var validDecodingCount = 0;
    for (
      var currentDecodingIndex = 0,
        validDecodingArray = calculateValidDecodingsFromBuffer;
      currentDecodingIndex < validDecodingArray.length;
      currentDecodingIndex++
    ) {
      var activeDecoding = validDecodingArray[currentDecodingIndex];
      if (calculateValidBinaryArrayEncoding[activeDecoding] !== undefined) {
        validDecodingCount++;
      }
    }
    return validDecodingCount;
  };
  TimestampToSlugConverter.prototype.encodeMap = function (
    encodeAndComputeIdentifier,
    generateUniqueIdentifierFromBinaryArrayEncoding,
  ) {
    var encodedIdentifierKeys = Object.keys(encodeAndComputeIdentifier);
    if (this.sortKeys) {
      encodedIdentifierKeys.sort();
    }
    var countOfEncodedIdentifierKeys = this.ignoreUndefined
      ? this.countWithoutUndefined(
          encodeAndComputeIdentifier,
          encodedIdentifierKeys,
        )
      : encodedIdentifierKeys.length;
    if (countOfEncodedIdentifierKeys < 16) {
      this.writeU8(128 + countOfEncodedIdentifierKeys);
    } else if (countOfEncodedIdentifierKeys < 65536) {
      this.writeU8(222);
      this.writeU16(countOfEncodedIdentifierKeys);
    } else if (countOfEncodedIdentifierKeys < 4294967296) {
      this.writeU8(223);
      this.writeU32(countOfEncodedIdentifierKeys);
    } else {
      throw new Error(`Too large map object: ${countOfEncodedIdentifierKeys}`);
    }
    for (
      var sortedKeyIndex = 0,
        encodedIdentifierKeysSorted = encodedIdentifierKeys;
      sortedKeyIndex < encodedIdentifierKeysSorted.length;
      sortedKeyIndex++
    ) {
      var activeSortingKey = encodedIdentifierKeysSorted[sortedKeyIndex];
      var activeSortingKeyValue = encodeAndComputeIdentifier[activeSortingKey];
      if (!this.ignoreUndefined || activeSortingKeyValue !== undefined) {
        this.encodeString(activeSortingKey);
        this.doEncode(
          activeSortingKeyValue,
          generateUniqueIdentifierFromBinaryArrayEncoding + 1,
        );
      }
    }
  };
  TimestampToSlugConverter.prototype.encodeExtension = function (
    calculateAndEncodeIdentifier,
  ) {
    var identifierDataLength = calculateAndEncodeIdentifier.data.length;
    if (identifierDataLength === 1) {
      this.writeU8(212);
    } else if (identifierDataLength === 2) {
      this.writeU8(213);
    } else if (identifierDataLength === 4) {
      this.writeU8(214);
    } else if (identifierDataLength === 8) {
      this.writeU8(215);
    } else if (identifierDataLength === 16) {
      this.writeU8(216);
    } else if (identifierDataLength < 256) {
      this.writeU8(199);
      this.writeU8(identifierDataLength);
    } else if (identifierDataLength < 65536) {
      this.writeU8(200);
      this.writeU16(identifierDataLength);
    } else if (identifierDataLength < 4294967296) {
      this.writeU8(201);
      this.writeU32(identifierDataLength);
    } else {
      throw new Error(`Too large extension object: ${identifierDataLength}`);
    }
    this.writeI8(calculateAndEncodeIdentifier.type);
    this.writeU8a(calculateAndEncodeIdentifier.data);
  };
  TimestampToSlugConverter.prototype.writeU8 = function (
    encodeUniqueIdentifierByteLength,
  ) {
    this.ensureBufferSizeToWrite(1);
    this.view.setUint8(this.pos, encodeUniqueIdentifierByteLength);
    this.pos++;
  };
  TimestampToSlugConverter.prototype.writeU8a = function (
    encodeUniqueIdentifierLength,
  ) {
    var uniqueIdentifierEncodedLength = encodeUniqueIdentifierLength.length;
    this.ensureBufferSizeToWrite(uniqueIdentifierEncodedLength);
    this.bytes.set(encodeUniqueIdentifierLength, this.pos);
    this.pos += uniqueIdentifierEncodedLength;
  };
  TimestampToSlugConverter.prototype.writeI8 = function (
    validateAndWriteUniqueIdentifierLength,
  ) {
    this.ensureBufferSizeToWrite(1);
    this.view.setInt8(this.pos, validateAndWriteUniqueIdentifierLength);
    this.pos++;
  };
  TimestampToSlugConverter.prototype.writeU16 = function (
    encodeUniqueIdentifierWithLength,
  ) {
    this.ensureBufferSizeToWrite(2);
    this.view.setUint16(this.pos, encodeUniqueIdentifierWithLength);
    this.pos += 2;
  };
  TimestampToSlugConverter.prototype.writeI16 = function (
    writeSignedInt16ToBuffer,
  ) {
    this.ensureBufferSizeToWrite(2);
    this.view.setInt16(this.pos, writeSignedInt16ToBuffer);
    this.pos += 2;
  };
  TimestampToSlugConverter.prototype.writeU32 = function (encodedIdentifier) {
    this.ensureBufferSizeToWrite(4);
    this.view.setUint32(this.pos, encodedIdentifier);
    this.pos += 4;
  };
  TimestampToSlugConverter.prototype.writeI32 = function (
    _writeSignedInt16ToBuffer,
  ) {
    this.ensureBufferSizeToWrite(4);
    this.view.setInt32(this.pos, _writeSignedInt16ToBuffer);
    this.pos += 4;
  };
  TimestampToSlugConverter.prototype.writeF32 = function (
    valueToStoreAsFloat32,
  ) {
    this.ensureBufferSizeToWrite(4);
    this.view.setFloat32(this.pos, valueToStoreAsFloat32);
    this.pos += 4;
  };
  TimestampToSlugConverter.prototype.writeF64 = function (
    writeFloat64ToBuffer,
  ) {
    this.ensureBufferSizeToWrite(8);
    this.view.setFloat64(this.pos, writeFloat64ToBuffer);
    this.pos += 8;
  };
  TimestampToSlugConverter.prototype.writeU64 = function (
    storeUnsignedLongInteger,
  ) {
    this.ensureBufferSizeToWrite(8);
    syncIdentifierBufferWithNormalizedId(
      this.view,
      this.pos,
      storeUnsignedLongInteger,
    );
    this.pos += 8;
  };
  TimestampToSlugConverter.prototype.writeI64 = function (
    identifierBufferSize,
  ) {
    this.ensureBufferSizeToWrite(8);
    _storeUniqueIdentifierInBuffer(this.view, this.pos, identifierBufferSize);
    this.pos += 8;
  };
  return TimestampToSlugConverter;
})();
var encodedTimestampIdentifier = {};
function createAndEncodeUserSlug(
  serializeUserIdentifier,
  _encodedTimestampIdentifier = encodedTimestampIdentifier,
) {
  var userSlugIdentifierCreator = new createUserSlugIdentifier(
    _encodedTimestampIdentifier.extensionCodec,
    _encodedTimestampIdentifier.context,
    _encodedTimestampIdentifier.maxDepth,
    _encodedTimestampIdentifier.initialBufferSize,
    _encodedTimestampIdentifier.sortKeys,
    _encodedTimestampIdentifier.forceFloat32,
    _encodedTimestampIdentifier.ignoreUndefined,
    _encodedTimestampIdentifier.forceIntegerToFloat,
  );
  return userSlugIdentifierCreator.encodeSharedRef(serializeUserIdentifier);
}
function convertIntegerToSignedHexadecimalString(
  convertToSignedHexStringWithRangeVerification,
) {
  return `${convertToSignedHexStringWithRangeVerification < 0 ? "-" : ""}0x${Math.abs(convertToSignedHexStringWithRangeVerification).toString(16).padStart(2, "0")}`;
}
var defaultMaxCachedKeyLength = 16;
var defaultMaxCacheKeyLength = 16;
var calculateCacheExpirationDuration = (function () {
  function CacheHandler(
    setMaxCacheKeyLengthIfValid = defaultMaxCachedKeyLength,
    _defaultMaxCacheKeyLength = defaultMaxCacheKeyLength,
  ) {
    this.maxKeyLength = setMaxCacheKeyLengthIfValid;
    this.maxLengthPerKey = _defaultMaxCacheKeyLength;
    this.hit = 0;
    this.miss = 0;
    this.caches = [];
    for (
      var initializeCacheArrays = 0;
      initializeCacheArrays < this.maxKeyLength;
      initializeCacheArrays++
    ) {
      this.caches.push([]);
    }
  }
  CacheHandler.prototype.canBeCached = function (
    isCacheDurationValidForExpiration,
  ) {
    return (
      isCacheDurationValidForExpiration > 0 &&
      isCacheDurationValidForExpiration <= this.maxKeyLength
    );
  };
  CacheHandler.prototype.find = function (
    _calculateCacheExpirationDuration,
    calculateCacheExpiryDuration,
    calculateTimestampFromDuration,
  ) {
    var cacheEntriesForDuration =
      this.caches[calculateTimestampFromDuration - 1];
    _0x2d51f0: for (
      var cacheEntryIndex = 0,
        validCacheEntriesForDuration = cacheEntriesForDuration;
      cacheEntryIndex < validCacheEntriesForDuration.length;
      cacheEntryIndex++
    ) {
      var cacheEntryWithValidDuration =
        validCacheEntriesForDuration[cacheEntryIndex];
      var getBytesFromCacheEntry = cacheEntryWithValidDuration.bytes;
      for (
        var _cacheEntryIndex = 0;
        _cacheEntryIndex < calculateTimestampFromDuration;
        _cacheEntryIndex++
      ) {
        if (
          getBytesFromCacheEntry[_cacheEntryIndex] !==
          _calculateCacheExpirationDuration[
            calculateCacheExpiryDuration + _cacheEntryIndex
          ]
        ) {
          continue _0x2d51f0;
        }
      }
      return cacheEntryWithValidDuration.str;
    }
    return null;
  };
  CacheHandler.prototype.store = function (
    cacheTimestampEntriesBasedOnExpiryDuration,
    addCacheEntryWithDuration,
  ) {
    var mostRecentCacheEntries =
      this.caches[cacheTimestampEntriesBasedOnExpiryDuration.length - 1];
    var createCacheEntryWithExpiry = {
      bytes: cacheTimestampEntriesBasedOnExpiryDuration,
      str: addCacheEntryWithDuration,
    };
    if (mostRecentCacheEntries.length >= this.maxLengthPerKey) {
      mostRecentCacheEntries[
        (Math.random() * mostRecentCacheEntries.length) | 0
      ] = createCacheEntryWithExpiry;
    } else {
      mostRecentCacheEntries.push(createCacheEntryWithExpiry);
    }
  };
  CacheHandler.prototype.decode = function (
    retrieveCacheEntryFromTimestampDuration,
    getValidCacheEntryBasedOnDuration,
    getValidCacheEntryForDuration,
  ) {
    var retrievedCacheEntryTimestamp = this.find(
      retrieveCacheEntryFromTimestampDuration,
      getValidCacheEntryBasedOnDuration,
      getValidCacheEntryForDuration,
    );
    if (retrievedCacheEntryTimestamp != null) {
      this.hit++;
      return retrievedCacheEntryTimestamp;
    }
    this.miss++;
    var composedCacheKey = combineAndProcessUniqueIdentifiers(
      retrieveCacheEntryFromTimestampDuration,
      getValidCacheEntryBasedOnDuration,
      getValidCacheEntryForDuration,
    );
    var createCacheSegmentFromTimestamp = Uint8Array.prototype.slice.call(
      retrieveCacheEntryFromTimestampDuration,
      getValidCacheEntryBasedOnDuration,
      getValidCacheEntryBasedOnDuration + getValidCacheEntryForDuration,
    );
    this.store(createCacheSegmentFromTimestamp, composedCacheKey);
    return composedCacheKey;
  };
  return CacheHandler;
})();
function getOrCreateUniqueIdentifierPromise(
  retrieveOrCreateUniqueCacheEntry,
  retrieveOrCreateUniqueCacheIdentifier,
  createUniqueCacheEntryIdentifier,
  fetchOrGenerateCacheIdentifier,
) {
  function getOrInitializeUniqueIdentifier(fetchOrGenerateUniqueIdentifier) {
    if (
      fetchOrGenerateUniqueIdentifier instanceof
      createUniqueCacheEntryIdentifier
    ) {
      return fetchOrGenerateUniqueIdentifier;
    } else {
      return new createUniqueCacheEntryIdentifier(function (
        generateUniqueCacheKeyFromInput,
      ) {
        generateUniqueCacheKeyFromInput(fetchOrGenerateUniqueIdentifier);
      });
    }
  }
  return new (createUniqueCacheEntryIdentifier ||= Promise)(function (
    _retrieveOrCreateUniqueCacheIdentifier,
    createCacheIdentifierForInputBasedOnTimestamp,
  ) {
    function processCacheIdentifierWithTimestamp(
      generateUniqueCacheIdentifierFromTimestamp,
    ) {
      try {
        processSlugGenerationResult(
          fetchOrGenerateCacheIdentifier.next(
            generateUniqueCacheIdentifierFromTimestamp,
          ),
        );
      } catch (errorDuringExecution) {
        createCacheIdentifierForInputBasedOnTimestamp(errorDuringExecution);
      }
    }
    function processCacheIdentifierErrorResponse(
      handleCacheIdentifierGenerationError,
    ) {
      try {
        processSlugGenerationResult(
          fetchOrGenerateCacheIdentifier.throw(
            handleCacheIdentifierGenerationError,
          ),
        );
      } catch (handleCachedInputError) {
        createCacheIdentifierForInputBasedOnTimestamp(handleCachedInputError);
      }
    }
    function processSlugGenerationResult(_handleSlugGenerationOutcome) {
      if (_handleSlugGenerationOutcome.done) {
        _retrieveOrCreateUniqueCacheIdentifier(
          _handleSlugGenerationOutcome.value,
        );
      } else {
        getOrInitializeUniqueIdentifier(
          _handleSlugGenerationOutcome.value,
        ).then(
          processCacheIdentifierWithTimestamp,
          processCacheIdentifierErrorResponse,
        );
      }
    }
    processSlugGenerationResult(
      (fetchOrGenerateCacheIdentifier = fetchOrGenerateCacheIdentifier.apply(
        retrieveOrCreateUniqueCacheEntry,
        retrieveOrCreateUniqueCacheIdentifier || [],
      )).next(),
    );
  });
}
function createUniqueIdentifierGeneratorHandlers(
  createOrFetchUniqueCacheIdentifier,
  generateUniqueIdentifierFromSlug,
) {
  var uniqueIdentifierGeneratorContext = {
    label: 0,
    sent() {
      if (currentYieldState[0] & 1) {
        throw currentYieldState[1];
      }
      return currentYieldState[1];
    },
    trys: [],
    ops: [],
  };
  var isUniqueIdentifierGeneratorActive;
  var uniqueIdentifierGeneratorState;
  var currentYieldState;
  var uniqueIdentifierGeneratorHandlers;
  uniqueIdentifierGeneratorHandlers = {
    next: getUniqueIdentifierGeneratorHandler(0),
    throw: getUniqueIdentifierGeneratorHandler(1),
    return: getUniqueIdentifierGeneratorHandler(2),
  };
  if (typeof Symbol == "function") {
    uniqueIdentifierGeneratorHandlers[Symbol.iterator] = function () {
      return this;
    };
  }
  return uniqueIdentifierGeneratorHandlers;
  function getUniqueIdentifierGeneratorHandler(
    initializeUniqueIdentifierGenerator,
  ) {
    return function (initializeAndHandleSlugGeneration) {
      return executeUniqueIdentifierGeneratorYield([
        initializeUniqueIdentifierGenerator,
        initializeAndHandleSlugGeneration,
      ]);
    };
  }
  function executeUniqueIdentifierGeneratorYield(handleSlugCharacterDecoding) {
    if (isUniqueIdentifierGeneratorActive) {
      throw new TypeError("Generator is already executing.");
    }
    while (uniqueIdentifierGeneratorContext) {
      try {
        isUniqueIdentifierGeneratorActive = 1;
        if (
          uniqueIdentifierGeneratorState &&
          (currentYieldState =
            handleSlugCharacterDecoding[0] & 2
              ? uniqueIdentifierGeneratorState.return
              : handleSlugCharacterDecoding[0]
                ? uniqueIdentifierGeneratorState.throw ||
                  ((currentYieldState =
                    uniqueIdentifierGeneratorState.return) &&
                    currentYieldState.call(uniqueIdentifierGeneratorState),
                  0)
                : uniqueIdentifierGeneratorState.next) &&
          !(currentYieldState = currentYieldState.call(
            uniqueIdentifierGeneratorState,
            handleSlugCharacterDecoding[1],
          )).done
        ) {
          return currentYieldState;
        }
        uniqueIdentifierGeneratorState = 0;
        if (currentYieldState) {
          handleSlugCharacterDecoding = [
            handleSlugCharacterDecoding[0] & 2,
            currentYieldState.value,
          ];
        }
        switch (handleSlugCharacterDecoding[0]) {
          case 0:
          case 1:
            currentYieldState = handleSlugCharacterDecoding;
            break;
          case 4:
            uniqueIdentifierGeneratorContext.label++;
            return {
              value: handleSlugCharacterDecoding[1],
              done: false,
            };
          case 5:
            uniqueIdentifierGeneratorContext.label++;
            uniqueIdentifierGeneratorState = handleSlugCharacterDecoding[1];
            handleSlugCharacterDecoding = [0];
            continue;
          case 7:
            handleSlugCharacterDecoding =
              uniqueIdentifierGeneratorContext.ops.pop();
            uniqueIdentifierGeneratorContext.trys.pop();
            continue;
          default:
            currentYieldState = uniqueIdentifierGeneratorContext.trys;
            if (
              !(currentYieldState =
                currentYieldState.length > 0 &&
                currentYieldState[currentYieldState.length - 1]) &&
              (handleSlugCharacterDecoding[0] === 6 ||
                handleSlugCharacterDecoding[0] === 2)
            ) {
              uniqueIdentifierGeneratorContext = 0;
              continue;
            }
            if (
              handleSlugCharacterDecoding[0] === 3 &&
              (!currentYieldState ||
                (handleSlugCharacterDecoding[1] > currentYieldState[0] &&
                  handleSlugCharacterDecoding[1] < currentYieldState[3]))
            ) {
              uniqueIdentifierGeneratorContext.label =
                handleSlugCharacterDecoding[1];
              break;
            }
            if (
              handleSlugCharacterDecoding[0] === 6 &&
              uniqueIdentifierGeneratorContext.label < currentYieldState[1]
            ) {
              uniqueIdentifierGeneratorContext.label = currentYieldState[1];
              currentYieldState = handleSlugCharacterDecoding;
              break;
            }
            if (
              currentYieldState &&
              uniqueIdentifierGeneratorContext.label < currentYieldState[2]
            ) {
              uniqueIdentifierGeneratorContext.label = currentYieldState[2];
              uniqueIdentifierGeneratorContext.ops.push(
                handleSlugCharacterDecoding,
              );
              break;
            }
            if (currentYieldState[2]) {
              uniqueIdentifierGeneratorContext.ops.pop();
            }
            uniqueIdentifierGeneratorContext.trys.pop();
            continue;
        }
        handleSlugCharacterDecoding = generateUniqueIdentifierFromSlug.call(
          createOrFetchUniqueCacheIdentifier,
          uniqueIdentifierGeneratorContext,
        );
      } catch (handleErrorDuringSlugDecoding) {
        handleSlugCharacterDecoding = [6, handleErrorDuringSlugDecoding];
        uniqueIdentifierGeneratorState = 0;
      } finally {
        isUniqueIdentifierGeneratorActive = currentYieldState = 0;
      }
    }
    if (handleSlugCharacterDecoding[0] & 5) {
      throw handleSlugCharacterDecoding[1];
    }
    return {
      value: handleSlugCharacterDecoding[0]
        ? handleSlugCharacterDecoding[1]
        : undefined,
      done: true,
    };
  }
}
function convertAsyncIterableToAsyncIterator(
  updateYieldContextFromSlugDecoding,
) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var retrieveAsyncIterator =
    updateYieldContextFromSlugDecoding[Symbol.asyncIterator];
  var asyncIterableHandlerFunctions;
  if (retrieveAsyncIterator) {
    return retrieveAsyncIterator.call(updateYieldContextFromSlugDecoding);
  } else {
    if (typeof __values == "function") {
      updateYieldContextFromSlugDecoding = __values(
        updateYieldContextFromSlugDecoding,
      );
    } else {
      updateYieldContextFromSlugDecoding =
        updateYieldContextFromSlugDecoding[Symbol.iterator]();
    }
    asyncIterableHandlerFunctions = {};
    setupArrayBufferAsyncIterableHandler("next");
    setupArrayBufferAsyncIterableHandler("throw");
    setupArrayBufferAsyncIterableHandler("return");
    asyncIterableHandlerFunctions[Symbol.asyncIterator] = function () {
      return this;
    };
    return asyncIterableHandlerFunctions;
  }
  function setupArrayBufferAsyncIterableHandler(
    setupAsyncIterableHandlersForBuffer,
  ) {
    asyncIterableHandlerFunctions[setupAsyncIterableHandlersForBuffer] =
      updateYieldContextFromSlugDecoding[setupAsyncIterableHandlersForBuffer] &&
      function (processAsyncBufferOperation) {
        return new Promise(function (
          processAsyncBufferData,
          processAsyncBufferWithUniqueIdentifier,
        ) {
          processAsyncBufferOperation = updateYieldContextFromSlugDecoding[
            setupAsyncIterableHandlersForBuffer
          ](processAsyncBufferOperation);
          handleSlugDecodingWithBufferSupport(
            processAsyncBufferData,
            processAsyncBufferWithUniqueIdentifier,
            processAsyncBufferOperation.done,
            processAsyncBufferOperation.value,
          );
        });
      };
  }
  function handleSlugDecodingWithBufferSupport(
    processAsyncIterableWithSlugDecoding,
    getAsyncIterableHandlers,
    getAsyncIterableHandlerWithBufferSupport,
    processAsyncBufferOperationWithYield,
  ) {
    Promise.resolve(processAsyncBufferOperationWithYield).then(function (
      _setupAsyncIterableHandlersForBuffer,
    ) {
      processAsyncIterableWithSlugDecoding({
        value: _setupAsyncIterableHandlersForBuffer,
        done: getAsyncIterableHandlerWithBufferSupport,
      });
    }, getAsyncIterableHandlers);
  }
}
function AsyncArrayBufferMapper(handleArrayBufferAsyncIterable) {
  if (this instanceof AsyncArrayBufferMapper) {
    this.v = handleArrayBufferAsyncIterable;
    return this;
  } else {
    return new AsyncArrayBufferMapper(handleArrayBufferAsyncIterable);
  }
}
function initializeAsyncDataProcessingIterator(
  setupAsyncIterableHandlerForBufferEncoding,
  handleAsyncBufferEncodingProcess,
  createUniqueIdentifierForBufferProcessing,
) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var bufferProcessingIdentifier =
    createUniqueIdentifierForBufferProcessing.apply(
      setupAsyncIterableHandlerForBufferEncoding,
      handleAsyncBufferEncodingProcess || [],
    );
  var asyncBufferProcessingIterator;
  var bufferProcessingHandlersQueue = [];
  asyncBufferProcessingIterator = {};
  setupAsyncBufferProcessing("next");
  setupAsyncBufferProcessing("throw");
  setupAsyncBufferProcessing("return");
  asyncBufferProcessingIterator[Symbol.asyncIterator] = function () {
    return this;
  };
  return asyncBufferProcessingIterator;
  function setupAsyncBufferProcessing(createUniqueBufferProcessingIdentifier) {
    if (bufferProcessingIdentifier[createUniqueBufferProcessingIdentifier]) {
      asyncBufferProcessingIterator[createUniqueBufferProcessingIdentifier] =
        function (createUniqueBufferProcessingId) {
          return new Promise(function (
            initializeAsyncDataIterator,
            enqueueAsyncDataProcessingTasks,
          ) {
            if (
              !(
                bufferProcessingHandlersQueue.push([
                  createUniqueBufferProcessingIdentifier,
                  createUniqueBufferProcessingId,
                  initializeAsyncDataIterator,
                  enqueueAsyncDataProcessingTasks,
                ]) > 1
              )
            ) {
              handleAsyncDataEncodingProcess(
                createUniqueBufferProcessingIdentifier,
                createUniqueBufferProcessingId,
              );
            }
          });
        };
    }
  }
  function handleAsyncDataEncodingProcess(
    encodeDataForAsyncOperations,
    initializeAsyncProcessingWithIdentifier,
  ) {
    try {
      processEncodingBasedOnValueType(
        bufferProcessingIdentifier[encodeDataForAsyncOperations](
          initializeAsyncProcessingWithIdentifier,
        ),
      );
    } catch (handleErrorAndRetry) {
      enqueueAndProcessAsyncData(
        bufferProcessingHandlersQueue[0][3],
        handleErrorAndRetry,
      );
    }
  }
  function processEncodingBasedOnValueType(
    handleAsyncValueProcessingBasedOnIdentifier,
  ) {
    if (
      handleAsyncValueProcessingBasedOnIdentifier.value instanceof
      AsyncArrayBufferMapper
    ) {
      Promise.resolve(handleAsyncValueProcessingBasedOnIdentifier.value.v).then(
        handleNextValueRangeDataEncoding,
        handleAsyncDataWithEncoding,
      );
    } else {
      enqueueAndProcessAsyncData(
        bufferProcessingHandlersQueue[0][2],
        handleAsyncValueProcessingBasedOnIdentifier,
      );
    }
  }
  function handleNextValueRangeDataEncoding(handleAsyncDataEncoding) {
    handleAsyncDataEncodingProcess("next", handleAsyncDataEncoding);
  }
  function handleAsyncDataWithEncoding(processDataEncodingAsyncWithId) {
    handleAsyncDataEncodingProcess("throw", processDataEncodingAsyncWithId);
  }
  function enqueueAndProcessAsyncData(
    enqueueAndProcessAsyncDataWithEncoding,
    queueAndHandleAsyncDataEncoding,
  ) {
    enqueueAndProcessAsyncDataWithEncoding(queueAndHandleAsyncDataEncoding);
    bufferProcessingHandlersQueue.shift();
    if (bufferProcessingHandlersQueue.length) {
      handleAsyncDataEncodingProcess(
        bufferProcessingHandlersQueue[0][0],
        bufferProcessingHandlersQueue[0][1],
      );
    }
  }
}
function isValidStringOrNumberInput(processAndManageAsyncDataEncoding) {
  var determineInputDataType = typeof processAndManageAsyncDataEncoding;
  return (
    determineInputDataType === "string" || determineInputDataType === "number"
  );
}
var encodeDataForAsyncProcessing = -1;
var maxAsyncDataEncodingDepthLimit = new DataView(new ArrayBuffer(0));
var queueAndProcessDataForEncoding = new Uint8Array(
  maxAsyncDataEncodingDepthLimit.buffer,
);
var queueAndProcessAsyncDataEncoding = (function () {
  try {
    maxAsyncDataEncodingDepthLimit.getInt8(0);
  } catch (errorInstance) {
    return errorInstance.constructor;
  }
  throw new Error("never reached");
})();
var writeAndProcessUnsignedShortValue = new queueAndProcessAsyncDataEncoding(
  "Insufficient data",
);
var asyncDataEncodingPreparation = new calculateCacheExpirationDuration();
var createUniqueDataIdentifier = (function () {
  function VideoAudioCodecConfiguration(
    extractTimestampComponentsFromBufferUsingDefaultCodec = extractTimestampComponentsFromBuffer.defaultCodec,
    defaultSettingValue = undefined,
    ____maxAllowedUniqueIdentifier = maxAllowedUniqueIdentifier,
    _maxAllowedUniqueIdentifier = maxAllowedUniqueIdentifier,
    ___maxAllowedUniqueIdentifier = maxAllowedUniqueIdentifier,
    maxAllowedUniqueSessionIdentifier = maxAllowedUniqueIdentifier,
    __maxAllowedUniqueIdentifier = maxAllowedUniqueIdentifier,
    _asyncDataEncodingPreparation = asyncDataEncodingPreparation,
  ) {
    this.extensionCodec = extractTimestampComponentsFromBufferUsingDefaultCodec;
    this.context = defaultSettingValue;
    this.maxStrLength = ____maxAllowedUniqueIdentifier;
    this.maxBinLength = _maxAllowedUniqueIdentifier;
    this.maxArrayLength = ___maxAllowedUniqueIdentifier;
    this.maxMapLength = maxAllowedUniqueSessionIdentifier;
    this.maxExtLength = __maxAllowedUniqueIdentifier;
    this.keyDecoder = _asyncDataEncodingPreparation;
    this.totalPos = 0;
    this.pos = 0;
    this.view = maxAsyncDataEncodingDepthLimit;
    this.bytes = queueAndProcessDataForEncoding;
    this.headByte = encodeDataForAsyncProcessing;
    this.stack = [];
  }
  VideoAudioCodecConfiguration.prototype.reinitializeState = function () {
    this.totalPos = 0;
    this.headByte = encodeDataForAsyncProcessing;
    this.stack.length = 0;
  };
  VideoAudioCodecConfiguration.prototype.setBuffer = function (
    serializeUserDataToBuffer,
  ) {
    this.bytes = convertToUint8ArrayFromInputValue(serializeUserDataToBuffer);
    this.view = generateDataViewFromInput(this.bytes);
    this.pos = 0;
  };
  VideoAudioCodecConfiguration.prototype.appendBuffer = function (
    setupAudioVideoCodecSettingsWithSessionIdentifier,
  ) {
    if (
      this.headByte === encodeDataForAsyncProcessing &&
      !this.hasRemaining(1)
    ) {
      this.setBuffer(setupAudioVideoCodecSettingsWithSessionIdentifier);
    } else {
      var extractCurrentAudioBufferWithIdentifier = this.bytes.subarray(
        this.pos,
      );
      var getSessionIdentifierAsUint8Array = convertToUint8ArrayFromInputValue(
        setupAudioVideoCodecSettingsWithSessionIdentifier,
      );
      var audioBufferWithSessionIdentifier = new Uint8Array(
        extractCurrentAudioBufferWithIdentifier.length +
          getSessionIdentifierAsUint8Array.length,
      );
      audioBufferWithSessionIdentifier.set(
        extractCurrentAudioBufferWithIdentifier,
      );
      audioBufferWithSessionIdentifier.set(
        getSessionIdentifierAsUint8Array,
        extractCurrentAudioBufferWithIdentifier.length,
      );
      this.setBuffer(audioBufferWithSessionIdentifier);
    }
  };
  VideoAudioCodecConfiguration.prototype.hasRemaining = function (
    appendUniqueSessionIdentifierToBuffer,
  ) {
    return (
      this.view.byteLength - this.pos >= appendUniqueSessionIdentifierToBuffer
    );
  };
  VideoAudioCodecConfiguration.prototype.createExtraByteError = function (
    addUniqueDataToProcessingBuffer,
  ) {
    var processingBufferHandler = this;
    var processingBufferView = processingBufferHandler.view;
    var currentBufferOffset = processingBufferHandler.pos;
    return new RangeError(
      `Extra ${processingBufferView.byteLength - currentBufferOffset} of ${processingBufferView.byteLength} byte(s) found at buffer[${addUniqueDataToProcessingBuffer}]`,
    );
  };
  VideoAudioCodecConfiguration.prototype.decode = function (
    prependSessionIdentifierToBuffer,
  ) {
    this.reinitializeState();
    this.setBuffer(prependSessionIdentifierToBuffer);
    var decodedBufferWithSessionId = this.doDecodeSync();
    if (this.hasRemaining(1)) {
      throw this.createExtraByteError(this.pos);
    }
    return decodedBufferWithSessionId;
  };
  VideoAudioCodecConfiguration.prototype.decodeMulti = function (
    maxBufferValidityWithSessionHandling,
  ) {
    return createUniqueIdentifierGeneratorHandlers(
      this,
      function (maxAllowedKeyValueBufferLength) {
        switch (maxAllowedKeyValueBufferLength.label) {
          case 0:
            this.reinitializeState();
            this.setBuffer(maxBufferValidityWithSessionHandling);
            maxAllowedKeyValueBufferLength.label = 1;
          case 1:
            if (this.hasRemaining(1)) {
              return [4, this.doDecodeSync()];
            } else {
              return [3, 3];
            }
          case 2:
            maxAllowedKeyValueBufferLength.sent();
            return [3, 1];
          case 3:
            return [2];
        }
      },
    );
  };
  VideoAudioCodecConfiguration.prototype.decodeAsync = function (
    AudioVideoBufferDecoder,
  ) {
    var audioVideoBufferAsyncDecoder;
    var durationEncodingProgress;
    var isInitialAudioVideoEncodingComplete;
    var isEncodingDurationInProgress;
    return getOrCreateUniqueIdentifierPromise(
      this,
      undefined,
      undefined,
      function () {
        var checkIfTimestampIncludesDurationEncoding;
        var decodedAudioVideoDuration;
        var encodedDurationTimestamp;
        var audioVideoDurationProcessingResult;
        var durationEncodingOutcomeResult;
        var audioVideoDurationEncodingResult;
        var processAudioVideoTimestampWithDuration;
        var durationEncodingValue;
        return createUniqueIdentifierGeneratorHandlers(
          this,
          function (decodeAndProcessAudioVideoMessageDuration) {
            switch (decodeAndProcessAudioVideoMessageDuration.label) {
              case 0:
                checkIfTimestampIncludesDurationEncoding = false;
                decodeAndProcessAudioVideoMessageDuration.label = 1;
              case 1:
                decodeAndProcessAudioVideoMessageDuration.trys.push([
                  1, 6, 7, 12,
                ]);
                audioVideoBufferAsyncDecoder =
                  convertAsyncIterableToAsyncIterator(AudioVideoBufferDecoder);
                decodeAndProcessAudioVideoMessageDuration.label = 2;
              case 2:
                return [4, audioVideoBufferAsyncDecoder.next()];
              case 3:
                durationEncodingProgress =
                  decodeAndProcessAudioVideoMessageDuration.sent();
                if (durationEncodingProgress.done) {
                  return [3, 5];
                }
                encodedDurationTimestamp = durationEncodingProgress.value;
                if (checkIfTimestampIncludesDurationEncoding) {
                  throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(encodedDurationTimestamp);
                try {
                  decodedAudioVideoDuration = this.doDecodeSync();
                  checkIfTimestampIncludesDurationEncoding = true;
                } catch (processingDataError) {
                  if (
                    !(
                      processingDataError instanceof
                      queueAndProcessAsyncDataEncoding
                    )
                  ) {
                    throw processingDataError;
                  }
                }
                this.totalPos += this.pos;
                decodeAndProcessAudioVideoMessageDuration.label = 4;
              case 4:
                return [3, 2];
              case 5:
                return [3, 12];
              case 6:
                audioVideoDurationProcessingResult =
                  decodeAndProcessAudioVideoMessageDuration.sent();
                isInitialAudioVideoEncodingComplete = {
                  error: audioVideoDurationProcessingResult,
                };
                return [3, 12];
              case 7:
                decodeAndProcessAudioVideoMessageDuration.trys.push([
                  7,
                  ,
                  10,
                  11,
                ]);
                if (
                  durationEncodingProgress &&
                  !durationEncodingProgress.done &&
                  (isEncodingDurationInProgress =
                    audioVideoBufferAsyncDecoder.return)
                ) {
                  return [
                    4,
                    isEncodingDurationInProgress.call(
                      audioVideoBufferAsyncDecoder,
                    ),
                  ];
                } else {
                  return [3, 9];
                }
              case 8:
                decodeAndProcessAudioVideoMessageDuration.sent();
                decodeAndProcessAudioVideoMessageDuration.label = 9;
              case 9:
                return [3, 11];
              case 10:
                if (isInitialAudioVideoEncodingComplete) {
                  throw isInitialAudioVideoEncodingComplete.error;
                }
                return [7];
              case 11:
                return [7];
              case 12:
                if (checkIfTimestampIncludesDurationEncoding) {
                  if (this.hasRemaining(1)) {
                    throw this.createExtraByteError(this.totalPos);
                  }
                  return [2, decodedAudioVideoDuration];
                }
                durationEncodingOutcomeResult = this;
                audioVideoDurationEncodingResult =
                  durationEncodingOutcomeResult.headByte;
                processAudioVideoTimestampWithDuration =
                  durationEncodingOutcomeResult.pos;
                durationEncodingValue = durationEncodingOutcomeResult.totalPos;
                throw new RangeError(
                  `Insufficient data in parsing ${convertIntegerToSignedHexadecimalString(audioVideoDurationEncodingResult)} at ${durationEncodingValue} (${processAudioVideoTimestampWithDuration} in the current buffer)`,
                );
            }
          },
        );
      },
    );
  };
  VideoAudioCodecConfiguration.prototype.decodeArrayStream = function (
    generateMessageIdentifier,
  ) {
    return this.decodeMultiAsync(generateMessageIdentifier, true);
  };
  VideoAudioCodecConfiguration.prototype.decodeStream = function (
    generateUniqueIdentifierForDurationEncoding,
  ) {
    return this.decodeMultiAsync(
      generateUniqueIdentifierForDurationEncoding,
      false,
    );
  };
  VideoAudioCodecConfiguration.prototype.decodeMultiAsync = function (
    processAudioVideoWithDurationValidation,
    generateUniqueMessageIdentifier,
  ) {
    return initializeAsyncDataProcessingIterator(this, arguments, function () {
      var generateUniqueIdentifierForMessages;
      var defaultMessageIdentifier;
      var initAsyncIteratorForMediaStreamDecoding;
      var currentActiveMessageIdentifier;
      var generateUniqueTemporaryMessageIdentifier;
      var currentMessageIdentifier;
      var activeMediaStreamIdentifier;
      var generateMessageIdentifier;
      var createMessageIdentifierForDecoding;
      return createUniqueIdentifierGeneratorHandlers(
        this,
        function (generateUniqueMessageIdentifier) {
          switch (generateUniqueMessageIdentifier.label) {
            case 0:
              generateUniqueIdentifierForMessages =
                generateUniqueMessageIdentifier;
              defaultMessageIdentifier = -1;
              generateUniqueMessageIdentifier.label = 1;
            case 1:
              generateUniqueMessageIdentifier.trys.push([1, 13, 14, 19]);
              initAsyncIteratorForMediaStreamDecoding =
                convertAsyncIterableToAsyncIterator(
                  processAudioVideoWithDurationValidation,
                );
              generateUniqueMessageIdentifier.label = 2;
            case 2:
              return [
                4,
                AsyncArrayBufferMapper(
                  initAsyncIteratorForMediaStreamDecoding.next(),
                ),
              ];
            case 3:
              currentActiveMessageIdentifier =
                generateUniqueMessageIdentifier.sent();
              if (currentActiveMessageIdentifier.done) {
                return [3, 12];
              }
              generateUniqueTemporaryMessageIdentifier =
                currentActiveMessageIdentifier.value;
              if (
                generateUniqueMessageIdentifier &&
                defaultMessageIdentifier === 0
              ) {
                throw this.createExtraByteError(this.totalPos);
              }
              this.appendBuffer(generateUniqueTemporaryMessageIdentifier);
              if (generateUniqueIdentifierForMessages) {
                defaultMessageIdentifier = this.readArraySize();
                generateUniqueIdentifierForMessages = false;
                this.complete();
              }
              generateUniqueMessageIdentifier.label = 4;
            case 4:
              generateUniqueMessageIdentifier.trys.push([4, 9, , 10]);
              generateUniqueMessageIdentifier.label = 5;
            case 5:
              return [4, AsyncArrayBufferMapper(this.doDecodeSync())];
            case 6:
              return [4, generateUniqueMessageIdentifier.sent()];
            case 7:
              generateUniqueMessageIdentifier.sent();
              if (--defaultMessageIdentifier === 0) {
                return [3, 8];
              } else {
                return [3, 5];
              }
            case 8:
              return [3, 10];
            case 9:
              currentMessageIdentifier = generateUniqueMessageIdentifier.sent();
              if (
                !(
                  currentMessageIdentifier instanceof
                  queueAndProcessAsyncDataEncoding
                )
              ) {
                throw currentMessageIdentifier;
              }
              return [3, 10];
            case 10:
              this.totalPos += this.pos;
              generateUniqueMessageIdentifier.label = 11;
            case 11:
              return [3, 2];
            case 12:
              return [3, 19];
            case 13:
              activeMediaStreamIdentifier =
                generateUniqueMessageIdentifier.sent();
              generateMessageIdentifier = {
                error: activeMediaStreamIdentifier,
              };
              return [3, 19];
            case 14:
              generateUniqueMessageIdentifier.trys.push([14, , 17, 18]);
              if (
                currentActiveMessageIdentifier &&
                !currentActiveMessageIdentifier.done &&
                (createMessageIdentifierForDecoding =
                  initAsyncIteratorForMediaStreamDecoding.return)
              ) {
                return [
                  4,
                  AsyncArrayBufferMapper(
                    createMessageIdentifierForDecoding.call(
                      initAsyncIteratorForMediaStreamDecoding,
                    ),
                  ),
                ];
              } else {
                return [3, 16];
              }
            case 15:
              generateUniqueMessageIdentifier.sent();
              generateUniqueMessageIdentifier.label = 16;
            case 16:
              return [3, 18];
            case 17:
              if (generateMessageIdentifier) {
                throw generateMessageIdentifier.error;
              }
              return [7];
            case 18:
              return [7];
            case 19:
              return [2];
          }
        },
      );
    });
  };
  VideoAudioCodecConfiguration.prototype.doDecodeSync = function () {
    _0x197063: while (true) {
      var getAdjustedHeaderByteValue = this.readHeadByte();
      var adjustedHeaderByteValueBasedOnRange = undefined;
      if (getAdjustedHeaderByteValue >= 224) {
        adjustedHeaderByteValueBasedOnRange = getAdjustedHeaderByteValue - 256;
      } else if (getAdjustedHeaderByteValue < 192) {
        if (getAdjustedHeaderByteValue < 128) {
          adjustedHeaderByteValueBasedOnRange = getAdjustedHeaderByteValue;
        } else if (getAdjustedHeaderByteValue < 144) {
          var headerByteAdjustment = getAdjustedHeaderByteValue - 128;
          if (headerByteAdjustment !== 0) {
            this.pushMapState(headerByteAdjustment);
            this.complete();
            continue _0x197063;
          } else {
            adjustedHeaderByteValueBasedOnRange = {};
          }
        } else if (getAdjustedHeaderByteValue < 160) {
          var headerByteAdjustment = getAdjustedHeaderByteValue - 144;
          if (headerByteAdjustment !== 0) {
            this.pushArrayState(headerByteAdjustment);
            this.complete();
            continue _0x197063;
          } else {
            adjustedHeaderByteValueBasedOnRange = [];
          }
        } else {
          var adjustedHeaderByteValueForUtf8Decoder =
            getAdjustedHeaderByteValue - 160;
          adjustedHeaderByteValueBasedOnRange = this.decodeUtf8String(
            adjustedHeaderByteValueForUtf8Decoder,
            0,
          );
        }
      } else if (getAdjustedHeaderByteValue === 192) {
        adjustedHeaderByteValueBasedOnRange = null;
      } else if (getAdjustedHeaderByteValue === 194) {
        adjustedHeaderByteValueBasedOnRange = false;
      } else if (getAdjustedHeaderByteValue === 195) {
        adjustedHeaderByteValueBasedOnRange = true;
      } else if (getAdjustedHeaderByteValue === 202) {
        adjustedHeaderByteValueBasedOnRange = this.readF32();
      } else if (getAdjustedHeaderByteValue === 203) {
        adjustedHeaderByteValueBasedOnRange = this.readF64();
      } else if (getAdjustedHeaderByteValue === 204) {
        adjustedHeaderByteValueBasedOnRange = this.readU8();
      } else if (getAdjustedHeaderByteValue === 205) {
        adjustedHeaderByteValueBasedOnRange = this.readU16();
      } else if (getAdjustedHeaderByteValue === 206) {
        adjustedHeaderByteValueBasedOnRange = this.readU32();
      } else if (getAdjustedHeaderByteValue === 207) {
        adjustedHeaderByteValueBasedOnRange = this.readU64();
      } else if (getAdjustedHeaderByteValue === 208) {
        adjustedHeaderByteValueBasedOnRange = this.readI8();
      } else if (getAdjustedHeaderByteValue === 209) {
        adjustedHeaderByteValueBasedOnRange = this.readI16();
      } else if (getAdjustedHeaderByteValue === 210) {
        adjustedHeaderByteValueBasedOnRange = this.readI32();
      } else if (getAdjustedHeaderByteValue === 211) {
        adjustedHeaderByteValueBasedOnRange = this.readI64();
      } else if (getAdjustedHeaderByteValue === 217) {
        var adjustedHeaderByteValueForUtf8Decoder = this.lookU8();
        adjustedHeaderByteValueBasedOnRange = this.decodeUtf8String(
          adjustedHeaderByteValueForUtf8Decoder,
          1,
        );
      } else if (getAdjustedHeaderByteValue === 218) {
        var adjustedHeaderByteValueForUtf8Decoder = this.lookU16();
        adjustedHeaderByteValueBasedOnRange = this.decodeUtf8String(
          adjustedHeaderByteValueForUtf8Decoder,
          2,
        );
      } else if (getAdjustedHeaderByteValue === 219) {
        var adjustedHeaderByteValueForUtf8Decoder = this.lookU32();
        adjustedHeaderByteValueBasedOnRange = this.decodeUtf8String(
          adjustedHeaderByteValueForUtf8Decoder,
          4,
        );
      } else if (getAdjustedHeaderByteValue === 220) {
        var headerByteAdjustment = this.readU16();
        if (headerByteAdjustment !== 0) {
          this.pushArrayState(headerByteAdjustment);
          this.complete();
          continue _0x197063;
        } else {
          adjustedHeaderByteValueBasedOnRange = [];
        }
      } else if (getAdjustedHeaderByteValue === 221) {
        var headerByteAdjustment = this.readU32();
        if (headerByteAdjustment !== 0) {
          this.pushArrayState(headerByteAdjustment);
          this.complete();
          continue _0x197063;
        } else {
          adjustedHeaderByteValueBasedOnRange = [];
        }
      } else if (getAdjustedHeaderByteValue === 222) {
        var headerByteAdjustment = this.readU16();
        if (headerByteAdjustment !== 0) {
          this.pushMapState(headerByteAdjustment);
          this.complete();
          continue _0x197063;
        } else {
          adjustedHeaderByteValueBasedOnRange = {};
        }
      } else if (getAdjustedHeaderByteValue === 223) {
        var headerByteAdjustment = this.readU32();
        if (headerByteAdjustment !== 0) {
          this.pushMapState(headerByteAdjustment);
          this.complete();
          continue _0x197063;
        } else {
          adjustedHeaderByteValueBasedOnRange = {};
        }
      } else if (getAdjustedHeaderByteValue === 196) {
        var headerByteAdjustment = this.lookU8();
        adjustedHeaderByteValueBasedOnRange = this.decodeBinary(
          headerByteAdjustment,
          1,
        );
      } else if (getAdjustedHeaderByteValue === 197) {
        var headerByteAdjustment = this.lookU16();
        adjustedHeaderByteValueBasedOnRange = this.decodeBinary(
          headerByteAdjustment,
          2,
        );
      } else if (getAdjustedHeaderByteValue === 198) {
        var headerByteAdjustment = this.lookU32();
        adjustedHeaderByteValueBasedOnRange = this.decodeBinary(
          headerByteAdjustment,
          4,
        );
      } else if (getAdjustedHeaderByteValue === 212) {
        adjustedHeaderByteValueBasedOnRange = this.decodeExtension(1, 0);
      } else if (getAdjustedHeaderByteValue === 213) {
        adjustedHeaderByteValueBasedOnRange = this.decodeExtension(2, 0);
      } else if (getAdjustedHeaderByteValue === 214) {
        adjustedHeaderByteValueBasedOnRange = this.decodeExtension(4, 0);
      } else if (getAdjustedHeaderByteValue === 215) {
        adjustedHeaderByteValueBasedOnRange = this.decodeExtension(8, 0);
      } else if (getAdjustedHeaderByteValue === 216) {
        adjustedHeaderByteValueBasedOnRange = this.decodeExtension(16, 0);
      } else if (getAdjustedHeaderByteValue === 199) {
        var headerByteAdjustment = this.lookU8();
        adjustedHeaderByteValueBasedOnRange = this.decodeExtension(
          headerByteAdjustment,
          1,
        );
      } else if (getAdjustedHeaderByteValue === 200) {
        var headerByteAdjustment = this.lookU16();
        adjustedHeaderByteValueBasedOnRange = this.decodeExtension(
          headerByteAdjustment,
          2,
        );
      } else if (getAdjustedHeaderByteValue === 201) {
        var headerByteAdjustment = this.lookU32();
        adjustedHeaderByteValueBasedOnRange = this.decodeExtension(
          headerByteAdjustment,
          4,
        );
      } else {
        throw new processSlugForUniqueness(
          `Unrecognized type byte: ${convertIntegerToSignedHexadecimalString(getAdjustedHeaderByteValue)}`,
        );
      }
      this.complete();
      for (
        var processingStackItemsQueue = this.stack;
        processingStackItemsQueue.length > 0;

      ) {
        var activeProcessingStackItem =
          processingStackItemsQueue[processingStackItemsQueue.length - 1];
        if (activeProcessingStackItem.type === 0) {
          activeProcessingStackItem.array[activeProcessingStackItem.position] =
            adjustedHeaderByteValueBasedOnRange;
          activeProcessingStackItem.position++;
          if (
            activeProcessingStackItem.position ===
            activeProcessingStackItem.size
          ) {
            processingStackItemsQueue.pop();
            adjustedHeaderByteValueBasedOnRange =
              activeProcessingStackItem.array;
          } else {
            continue _0x197063;
          }
        } else if (activeProcessingStackItem.type === 1) {
          if (
            !isValidStringOrNumberInput(adjustedHeaderByteValueBasedOnRange)
          ) {
            throw new processSlugForUniqueness(
              "The type of key must be string or number but " +
                typeof adjustedHeaderByteValueBasedOnRange,
            );
          }
          if (adjustedHeaderByteValueBasedOnRange === "__proto__") {
            throw new processSlugForUniqueness(
              "The key __proto__ is not allowed",
            );
          }
          activeProcessingStackItem.key = adjustedHeaderByteValueBasedOnRange;
          activeProcessingStackItem.type = 2;
          continue _0x197063;
        } else {
          activeProcessingStackItem.map[activeProcessingStackItem.key] =
            adjustedHeaderByteValueBasedOnRange;
          activeProcessingStackItem.readCount++;
          if (
            activeProcessingStackItem.readCount ===
            activeProcessingStackItem.size
          ) {
            processingStackItemsQueue.pop();
            adjustedHeaderByteValueBasedOnRange = activeProcessingStackItem.map;
          } else {
            activeProcessingStackItem.key = null;
            activeProcessingStackItem.type = 1;
            continue _0x197063;
          }
        }
      }
      return adjustedHeaderByteValueBasedOnRange;
    }
  };
  VideoAudioCodecConfiguration.prototype.readHeadByte = function () {
    if (this.headByte === encodeDataForAsyncProcessing) {
      this.headByte = this.readU8();
    }
    return this.headByte;
  };
  VideoAudioCodecConfiguration.prototype.complete = function () {
    this.headByte = encodeDataForAsyncProcessing;
  };
  VideoAudioCodecConfiguration.prototype.readArraySize = function () {
    var getArrayElementSizeBasedOnType = this.readHeadByte();
    switch (getArrayElementSizeBasedOnType) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default: {
        if (getArrayElementSizeBasedOnType < 160) {
          return getArrayElementSizeBasedOnType - 144;
        }
        throw new processSlugForUniqueness(
          `Unrecognized array type byte: ${convertIntegerToSignedHexadecimalString(getArrayElementSizeBasedOnType)}`,
        );
      }
    }
  };
  VideoAudioCodecConfiguration.prototype.pushMapState = function (
    handleActiveStackItem,
  ) {
    if (handleActiveStackItem > this.maxMapLength) {
      throw new processSlugForUniqueness(
        `Max length exceeded: map length (${handleActiveStackItem}) > maxMapLengthLength (${this.maxMapLength})`,
      );
    }
    this.stack.push({
      type: 1,
      size: handleActiveStackItem,
      key: null,
      readCount: 0,
      map: {},
    });
  };
  VideoAudioCodecConfiguration.prototype.pushArrayState = function (
    getArraySizeFromHeader,
  ) {
    if (getArraySizeFromHeader > this.maxArrayLength) {
      throw new processSlugForUniqueness(
        `Max length exceeded: array length (${getArraySizeFromHeader}) > maxArrayLength (${this.maxArrayLength})`,
      );
    }
    this.stack.push({
      type: 0,
      size: getArraySizeFromHeader,
      array: new Array(getArraySizeFromHeader),
      position: 0,
    });
  };
  VideoAudioCodecConfiguration.prototype.decodeUtf8String = function (
    maxAllowedPlaybackTracks,
    maxAllowedMapEntries,
  ) {
    var isKeyDecoderEligibleForCaching;
    if (maxAllowedPlaybackTracks > this.maxStrLength) {
      throw new processSlugForUniqueness(
        `Max length exceeded: UTF-8 byte length (${maxAllowedPlaybackTracks}) > maxStrLength (${this.maxStrLength})`,
      );
    }
    if (
      this.bytes.byteLength <
      this.pos + maxAllowedMapEntries + maxAllowedPlaybackTracks
    ) {
      throw writeAndProcessUnsignedShortValue;
    }
    var startPositionForDecodingKey = this.pos + maxAllowedMapEntries;
    var decodedMapKey;
    if (
      this.stateIsMapKey() &&
      ((isKeyDecoderEligibleForCaching = this.keyDecoder) === null ||
      isKeyDecoderEligibleForCaching === undefined
        ? undefined
        : isKeyDecoderEligibleForCaching.canBeCached(maxAllowedPlaybackTracks))
    ) {
      decodedMapKey = this.keyDecoder.decode(
        this.bytes,
        startPositionForDecodingKey,
        maxAllowedPlaybackTracks,
      );
    } else if (maxAllowedPlaybackTracks > getEncodedUniqueIdentifierValue) {
      decodedMapKey = decodeSlugCharactersFromBuffer(
        this.bytes,
        startPositionForDecodingKey,
        maxAllowedPlaybackTracks,
      );
    } else {
      decodedMapKey = combineAndProcessUniqueIdentifiers(
        this.bytes,
        startPositionForDecodingKey,
        maxAllowedPlaybackTracks,
      );
    }
    this.pos += maxAllowedMapEntries + maxAllowedPlaybackTracks;
    return decodedMapKey;
  };
  VideoAudioCodecConfiguration.prototype.stateIsMapKey = function () {
    if (this.stack.length > 0) {
      var getCurrentStackType = this.stack[this.stack.length - 1];
      return getCurrentStackType.type === 1;
    }
    return false;
  };
  VideoAudioCodecConfiguration.prototype.decodeBinary = function (
    checkSlugUniquenessAndStoreBinaryData,
    calculateRemainingBytesForDecoding,
  ) {
    if (checkSlugUniquenessAndStoreBinaryData > this.maxBinLength) {
      throw new processSlugForUniqueness(
        `Max length exceeded: bin length (${checkSlugUniquenessAndStoreBinaryData}) > maxBinLength (${this.maxBinLength})`,
      );
    }
    if (
      !this.hasRemaining(
        checkSlugUniquenessAndStoreBinaryData +
          calculateRemainingBytesForDecoding,
      )
    ) {
      throw writeAndProcessUnsignedShortValue;
    }
    var calculateNewPositionAfterWritingBinaryData =
      this.pos + calculateRemainingBytesForDecoding;
    var extractedBinaryChunk = this.bytes.subarray(
      calculateNewPositionAfterWritingBinaryData,
      calculateNewPositionAfterWritingBinaryData +
        checkSlugUniquenessAndStoreBinaryData,
    );
    this.pos +=
      calculateRemainingBytesForDecoding +
      checkSlugUniquenessAndStoreBinaryData;
    return extractedBinaryChunk;
  };
  VideoAudioCodecConfiguration.prototype.decodeExtension = function (
    getBufferOffsetForDecodingKey,
    decodeBinaryDataBufferBySlugUniqueness,
  ) {
    if (getBufferOffsetForDecodingKey > this.maxExtLength) {
      throw new processSlugForUniqueness(
        `Max length exceeded: ext length (${getBufferOffsetForDecodingKey}) > maxExtLength (${this.maxExtLength})`,
      );
    }
    var binaryDataFormatIdentifier = this.view.getInt8(
      this.pos + decodeBinaryDataBufferBySlugUniqueness,
    );
    var decodedBufferData = this.decodeBinary(
      getBufferOffsetForDecodingKey,
      decodeBinaryDataBufferBySlugUniqueness + 1,
    );
    return this.extensionCodec.decode(
      decodedBufferData,
      binaryDataFormatIdentifier,
      this.context,
    );
  };
  VideoAudioCodecConfiguration.prototype.lookU8 = function () {
    return this.view.getUint8(this.pos);
  };
  VideoAudioCodecConfiguration.prototype.lookU16 = function () {
    return this.view.getUint16(this.pos);
  };
  VideoAudioCodecConfiguration.prototype.lookU32 = function () {
    return this.view.getUint32(this.pos);
  };
  VideoAudioCodecConfiguration.prototype.readU8 = function () {
    var retrieveNextByteFromBuffer = this.view.getUint8(this.pos);
    this.pos++;
    return retrieveNextByteFromBuffer;
  };
  VideoAudioCodecConfiguration.prototype.readI8 = function () {
    var retrieveNextInt8 = this.view.getInt8(this.pos);
    this.pos++;
    return retrieveNextInt8;
  };
  VideoAudioCodecConfiguration.prototype.readU16 = function () {
    var retrieveNextUint16AndUpdatePosition = this.view.getUint16(this.pos);
    this.pos += 2;
    return retrieveNextUint16AndUpdatePosition;
  };
  VideoAudioCodecConfiguration.prototype.readI16 = function () {
    var getNextInt16FromBuffer = this.view.getInt16(this.pos);
    this.pos += 2;
    return getNextInt16FromBuffer;
  };
  VideoAudioCodecConfiguration.prototype.readU32 = function () {
    var getUint32AndIncrementPosition = this.view.getUint32(this.pos);
    this.pos += 4;
    return getUint32AndIncrementPosition;
  };
  VideoAudioCodecConfiguration.prototype.readI32 = function () {
    var fetchInt32AndAdvancePosition = this.view.getInt32(this.pos);
    this.pos += 4;
    return fetchInt32AndAdvancePosition;
  };
  VideoAudioCodecConfiguration.prototype.readU64 = function () {
    var generateIdentifierFromViewBuffer = createUniqueIdFromBuffer(
      this.view,
      this.pos,
    );
    this.pos += 8;
    return generateIdentifierFromViewBuffer;
  };
  VideoAudioCodecConfiguration.prototype.readI64 = function () {
    var fetchNextRandomIntegerFromBuffer = generateRandomLargeIntegerFromBuffer(
      this.view,
      this.pos,
    );
    this.pos += 8;
    return fetchNextRandomIntegerFromBuffer;
  };
  VideoAudioCodecConfiguration.prototype.readF32 = function () {
    var retrieveNextFloat32Value = this.view.getFloat32(this.pos);
    this.pos += 4;
    return retrieveNextFloat32Value;
  };
  VideoAudioCodecConfiguration.prototype.readF64 = function () {
    var fetchNextFloat64FromBuffer = this.view.getFloat64(this.pos);
    this.pos += 8;
    return fetchNextFloat64FromBuffer;
  };
  return VideoAudioCodecConfiguration;
})();
var getTimestampDurationFromBuffer = {};
function extractAndDecodeTimestampDurations(
  getNextTimestampDuration,
  getDurationBetweenTimestampsFromBuffer = getTimestampDurationFromBuffer,
) {
  var dataIdentifierDecoder = new createUniqueDataIdentifier(
    getDurationBetweenTimestampsFromBuffer.extensionCodec,
    getDurationBetweenTimestampsFromBuffer.context,
    getDurationBetweenTimestampsFromBuffer.maxStrLength,
    getDurationBetweenTimestampsFromBuffer.maxBinLength,
    getDurationBetweenTimestampsFromBuffer.maxArrayLength,
    getDurationBetweenTimestampsFromBuffer.maxMapLength,
    getDurationBetweenTimestampsFromBuffer.maxExtLength,
  );
  return dataIdentifierDecoder.decode(getNextTimestampDuration);
}
var createDisposerForEventListener = class {
  onWillDisposeEmitter = new disposeEventEmitter();
  onWillDispose = this.onWillDisposeEmitter.event;
  onDidDisposeEmitter = new disposeEventEmitter();
  onDidDispose = this.onDidDisposeEmitter.event;
  toDispose = [];
  isDisposed = false;
  onDispose(disposeEventListenerForTimestampDuration) {
    this.toDispose.push(
      createDisposerForEventListener.create(
        disposeEventListenerForTimestampDuration,
      ),
    );
  }
  dispose() {
    if (!this.isDisposed) {
      this.onWillDisposeEmitter.fire(null);
      this.isDisposed = true;
      this.toDispose.forEach((disposeAndCleanupComponent) => {
        disposeAndCleanupComponent.dispose();
      });
      this.onDidDisposeEmitter.fire(null);
      this.onWillDisposeEmitter.dispose();
      this.onDidDisposeEmitter.dispose();
    }
  }
  static is(isObjectDisposable) {
    return typeof isObjectDisposable.dispose == "function";
  }
  static create(cleanupFunction) {
    return {
      dispose: cleanupFunction,
    };
  }
};
var disposeEventEmitter = class {
  registeredListeners = new Set();
  _event;
  get event() {
    this._event ||= (addEventListenerWithCleanup) => {
      this.registeredListeners.add(addEventListenerWithCleanup);
      return createDisposerForEventListener.create(() => {
        this.registeredListeners.delete(addEventListenerWithCleanup);
      });
    };
    return this._event;
  }
  fire(invokeRegisteredListeners) {
    this.registeredListeners.forEach((invokeRegisteredEventListeners) => {
      invokeRegisteredEventListeners(invokeRegisteredListeners);
    });
  }
  dispose() {
    this.registeredListeners = new Set();
  }
};
var generateErrorSourceIdentifier = (0,
initializeUniqueIdentifierGenerator.default)();
var EventListenerDisposer = (_createAndEncodeUserSlug) =>
  createAndEncodeUserSlug(_createAndEncodeUserSlug, {
    ignoreUndefined: true,
  });
var _createDisposerForEventListener = class {
  endpoints = new Map();
  nodeMap = new Map();
  onMessageEmitter = new disposeEventEmitter();
  onMessage = this.onMessageEmitter.event;
  constructor() {}
  getEndpointForNode(getEndpointForNodeId) {
    let endpointNode = this.nodeMap.get(getEndpointForNodeId);
    if (endpointNode) {
      let getEndpointFromNode = this.endpoints.get(endpointNode);
      if (getEndpointFromNode) {
        return getEndpointFromNode;
      }
    }
  }
  addEndpoint(addEndpointWithKey, messageDispatcher) {
    this.endpoints.set(addEndpointWithKey, messageDispatcher);
    messageDispatcher.onMessage((handleMessageWithEndpointKey) =>
      this.handleMessage(handleMessageWithEndpointKey, addEndpointWithKey),
    );
    let generateRouterAnnouncementEvent = EventListenerDisposer({
      $type: "router-announce",
      $origin: generateErrorSourceIdentifier,
    });
    messageDispatcher.send(generateRouterAnnouncementEvent, [
      generateRouterAnnouncementEvent.buffer,
    ]);
  }
  removeEndpoint(deleteEndpointById) {
    this.endpoints.delete(deleteEndpointById);
  }
  send(
    targetNodeIdentifierForRouting,
    routerMessagePayload,
    _userLoginStatus = true,
  ) {
    let createRouterMessage = {
      $type: "router-message",
      $origin: generateErrorSourceIdentifier,
      $target: targetNodeIdentifierForRouting,
      $data: routerMessagePayload,
    };
    if (targetNodeIdentifierForRouting !== generateErrorSourceIdentifier) {
      let getNodeConnectionEndpointForRouting = this.getEndpointForNode(
        targetNodeIdentifierForRouting,
      );
      if (!getNodeConnectionEndpointForRouting) {
        throw new Error(
          "Endpoint " + targetNodeIdentifierForRouting + " not registered",
        );
      }
      if (_userLoginStatus) {
        let createRouterMessageEventListener =
          EventListenerDisposer(createRouterMessage);
        getNodeConnectionEndpointForRouting.send(
          createRouterMessageEventListener,
          [createRouterMessageEventListener.buffer],
        );
      } else {
        getNodeConnectionEndpointForRouting.send(createRouterMessage, []);
      }
    } else {
      this.onMessageEmitter.fire(createRouterMessage);
    }
  }
  broadcast(messagePayloadForBroadcast, ignoredEndpoint, sourceIdentifier) {
    let buildBroadcastMessagePayload = {
      $type: "router-broadcast",
      $origin: sourceIdentifier ?? generateErrorSourceIdentifier,
      $data: messagePayloadForBroadcast,
    };
    if (!ignoredEndpoint && !sourceIdentifier) {
      this.onMessageEmitter.fire(buildBroadcastMessagePayload);
    }
    for (let [
      endpointIdentifier,
      broadcastWebSocket,
    ] of this.endpoints.entries()) {
      if (endpointIdentifier === ignoredEndpoint) {
        continue;
      }
      let messagePayloadForWebSocketBroadcast = EventListenerDisposer(
        buildBroadcastMessagePayload,
      );
      broadcastWebSocket.send(messagePayloadForWebSocketBroadcast, [
        messagePayloadForWebSocketBroadcast.buffer,
      ]);
    }
  }
  handleMessage(processRouterMessageWithPayload, registerAndHandleNodeMessage) {
    let isMessagePayloadArrayBuffer =
      processRouterMessageWithPayload instanceof Uint8Array;
    let messagePayloadMetadata = isMessagePayloadArrayBuffer
      ? extractAndDecodeTimestampDurations(processRouterMessageWithPayload)
      : processRouterMessageWithPayload;
    if (messagePayloadMetadata.$origin) {
      if (!this.nodeMap.has(messagePayloadMetadata.$origin)) {
        this.nodeMap.set(
          messagePayloadMetadata.$origin,
          registerAndHandleNodeMessage,
        );
      }
      if (messagePayloadMetadata.$type === "router-broadcast") {
        let messagePayload = messagePayloadMetadata;
        this.broadcast(
          messagePayload.$data,
          registerAndHandleNodeMessage,
          messagePayload.$origin,
        );
        this.onMessageEmitter.fire(messagePayloadMetadata);
        return;
      }
      if (messagePayloadMetadata.$type === "router-message") {
        let messagePayloadWithTargetMetadata = messagePayloadMetadata;
        if (
          messagePayloadWithTargetMetadata.$target ===
          generateErrorSourceIdentifier
        ) {
          this.onMessageEmitter.fire(messagePayloadMetadata);
        } else {
          let targetNodeConnectionEndpoint = this.getEndpointForNode(
            messagePayloadWithTargetMetadata.$target,
          );
          if (targetNodeConnectionEndpoint) {
            targetNodeConnectionEndpoint.send(
              processRouterMessageWithPayload,
              isMessagePayloadArrayBuffer
                ? [processRouterMessageWithPayload.buffer]
                : [],
            );
          }
        }
        return;
      }
    }
  }
};
var initializeOrFetchMessageBuffer;
function getOrInitializeMessageBuffer() {
  initializeOrFetchMessageBuffer ||= new _createDisposerForEventListener();
  return initializeOrFetchMessageBuffer;
}
function initializeDefaultServerPort(generateUniqueIdentifier) {
  let setDefaultServerPort = 8000;
  if (isNaN(setDefaultServerPort)) {
    throw new Error("Invalid port");
  }
  return setDefaultServerPort;
}
function checkServiceWorkerStatus(processRouterBroadcastMessage) {
  return (
    processRouterBroadcastMessage.installing ||
    processRouterBroadcastMessage.waiting ||
    processRouterBroadcastMessage.active
  );
}
var _handleRouterMessage = initializePlaceholderTransformer("bridge");
var createUniqueIdentifierAsync = initializeDefaultServerPort(
  window.location.hostname,
);
var _generateErrorSourceIdentifier = {
  $channel_name: previewManagerId,
  $type: PREVIEW_STATUS_READY,
  port: createUniqueIdentifierAsync,
};
var processRouterMessage = getOrInitializeMessageBuffer();
var initializeMessageBufferIfNecessary = new MessageChannel();
var _initializeUniqueIDBufferIfNeeded =
  new initializeStorageValueFromSource.DeferredPromise();
var initializeUniqueIDBufferIfNecessary =
  new initializeStorageValueFromSource.DeferredPromise();
_initializeUniqueIDBufferIfNeeded.then((messageChannelWorkerPort) => {
  _handleRouterMessage("worker is ready, initializing MessageChannel...");
  messageChannelWorkerPort.postMessage(
    {
      type: "bridge-channel-init",
    },
    [initializeMessageBufferIfNecessary.port2],
  );
  return messageChannelWorkerPort;
});
window.addEventListener("unload", () => {
  initializeMessageBufferIfNecessary.port1.postMessage({
    $type: generateBridgeCloseIdentifier,
  });
});
window.addEventListener("message", (initializeDataCommunicationChannel) => {
  switch (initializeDataCommunicationChannel.data.$type) {
    case bridgeInitializationUrl: {
      let dataCommunicationPort = initializeDataCommunicationChannel.ports[0];
      let messagePortStatusContainer = document.getElementById("previews-list");
      let dataPortStatusIndicator = document.createElement("span");
      dataPortStatusIndicator.setAttribute(
        "data-port",
        String(createUniqueIdentifierAsync),
      );
      dataPortStatusIndicator.innerText =
        "localhost:" + createUniqueIdentifierAsync;
      messagePortStatusContainer?.appendChild(dataPortStatusIndicator);
      initializeUniqueIDBufferIfNecessary.resolve(dataCommunicationPort);
      processRouterMessage.addEndpoint("parent", {
        send: (sendMessageWithOptions, sendMessagePayloadWithOptions) =>
          dataCommunicationPort.postMessage(
            sendMessageWithOptions,
            sendMessagePayloadWithOptions,
          ),
        onMessage: (processIncomingMessage) => {
          dataCommunicationPort.onmessage = (handleIncomingMessage) => {
            processIncomingMessage(handleIncomingMessage.data);
          };
        },
      });
      break;
    }
  }
});
var handleFetchErrorResponseData =
  new initializeStorageValueFromSource.DeferredPromise();
processRouterMessage.onMessage((handleIncomingMessageProcessing) => {
  switch (handleIncomingMessageProcessing.$data.$type) {
    case generatePreviewManagerAcknowledgementId: {
      handleFetchErrorResponseData.resolve(
        handleIncomingMessageProcessing.$origin,
      );
      break;
    }
    case previewResponseKey: {
      initializeMessageBufferIfNecessary.port1.postMessage(
        handleIncomingMessageProcessing.$data,
      );
      break;
    }
    case generateRuntimeResponseIdentifier: {
      initializeMessageBufferIfNecessary.port1.postMessage(
        handleIncomingMessageProcessing.$data,
      );
      break;
    }
  }
});
initializeMessageBufferIfNecessary.port1.onmessage = async (
  handleIncomingWorkerMessage,
) => {
  let workerMessagePayload = handleIncomingWorkerMessage.data;
  _handleRouterMessage(
    "incoming message from the worker",
    handleIncomingWorkerMessage.data,
  );
  if (workerMessagePayload.$channel_name === previewManagerId) {
    let fetchAndValidateErrorResponseData = await handleFetchErrorResponseData;
    validateAndThrowIfInvalid(
      fetchAndValidateErrorResponseData,
      "[bridge] Failed to forward worker message to the PreviewManager: manager node ID is not defined.",
    );
    let _workerMessagePayload = workerMessagePayload;
    processRouterMessage.send(
      fetchAndValidateErrorResponseData,
      _workerMessagePayload,
    );
  }
};
var currentServiceWorkerURL = new URL("__csb_sw.js", location.origin).href;
function initializeServiceWorkerPing(initializeServiceWorkerCommunication) {
  let serviceWorkerPingIntervalId = setInterval(() => {
    let notifyServiceWorkerOfPing = {
      type: "ping",
    };
    initializeServiceWorkerCommunication.postMessage(notifyServiceWorkerOfPing);
  }, 5000);
  initializeServiceWorkerCommunication.addEventListener("statechange", () => {
    if (initializeServiceWorkerCommunication.state === "redundant") {
      clearInterval(serviceWorkerPingIntervalId);
    }
  });
}
async function initializeAndMonitorServiceWorker() {
  validateAndThrowIfInvalid(
    "serviceWorker" in navigator,
    "Failed to start the bridge Service Worker: Service Worker API is not supported in this browser",
  );
  let registerAndValidateServiceWorker = async () => {
    let serviceWorkerRegistration = await navigator.serviceWorker.register(
      "__csb_sw.js",
      {
        scope: ".",
      },
    );
    return checkServiceWorkerStatus(serviceWorkerRegistration);
  };
  let activeServiceWorkerRegistrations =
    await navigator.serviceWorker.getRegistrations();
  _handleRouterMessage(
    "all registrations",
    location,
    activeServiceWorkerRegistrations,
  );
  await Promise.all(
    activeServiceWorkerRegistrations.map((activeServiceWorkerRegistration) => {
      let getActiveServiceWorkerDetails = checkServiceWorkerStatus(
        activeServiceWorkerRegistration,
      );
      if (
        getActiveServiceWorkerDetails &&
        getActiveServiceWorkerDetails.scriptURL !== currentServiceWorkerURL
      ) {
        _handleRouterMessage(
          "found irrelevant worker registration, unregistering...",
          getActiveServiceWorkerDetails,
          activeServiceWorkerRegistration,
        );
        return activeServiceWorkerRegistration.unregister();
      }
    }),
  );
  let { controller: handleServiceWorkerRegistration } = navigator.serviceWorker;
  if (!handleServiceWorkerRegistration) {
    _handleRouterMessage(
      "bridge is not controlled, registering a new worker...",
    );
    return registerAndValidateServiceWorker();
  }
  if (handleServiceWorkerRegistration.scriptURL === currentServiceWorkerURL) {
    _handleRouterMessage(
      "bridge is controlled by the correct worker",
      handleServiceWorkerRegistration.scriptURL,
    );
    return handleServiceWorkerRegistration;
  }
  let [
    initializeAndMonitorServiceWorkerRegistration,
    registerAndManageServiceWorker,
  ] = await Promise.all([
    navigator.serviceWorker.getRegistration(
      handleServiceWorkerRegistration.scriptURL,
    ),
    navigator.serviceWorker.getRegistration(currentServiceWorkerURL),
  ]);
  _handleRouterMessage(
    "controller registration:",
    initializeAndMonitorServiceWorkerRegistration,
  );
  _handleRouterMessage("worker registration:", registerAndManageServiceWorker);
  if (!registerAndManageServiceWorker) {
    _handleRouterMessage(
      'no registration found for "%s", unregistering controller and registering a new worker...',
      currentServiceWorkerURL,
    );
    await initializeAndMonitorServiceWorkerRegistration?.unregister();
    return registerAndValidateServiceWorker();
  }
  if (registerAndManageServiceWorker.waiting) {
    _handleRouterMessage("found waiting registration, promoting...");
    await registerAndManageServiceWorker.update();
    let activeServiceWorkerInstance = checkServiceWorkerStatus(
      registerAndManageServiceWorker,
    );
    validateAndThrowIfInvalid(
      activeServiceWorkerInstance,
      "Failed to retrieve the worker instance after promotion: worked does not exist",
    );
    validateAndThrowIfInvalid(
      registerAndManageServiceWorker.active,
      'Failed to promove a waiting Service Worker: expected the worker state to be "active" but got "%s"',
      activeServiceWorkerInstance.state,
    );
    return activeServiceWorkerInstance;
  }
  return null;
}
async function setupServiceWorkerWithIdentifierManagement() {
  _handleRouterMessage("starting the bridge...", {
    workerUrl: currentServiceWorkerURL,
  });
  let currentActiveServiceWorker =
    await initializeAndMonitorServiceWorker().catch(
      (logServiceWorkerRegistrationError) => {
        console.error(
          "Failed to ensure the bridge has a Service Worker registered. See details below.",
        );
        console.error(logServiceWorkerRegistrationError);
      },
    );
  await navigator.serviceWorker.ready;
  validateAndThrowIfInvalid(
    currentActiveServiceWorker,
    "Failed to retrieve the worker instance: worker not found",
  );
  initializeServiceWorkerPing(currentActiveServiceWorker);
  _initializeUniqueIDBufferIfNeeded.resolve(currentActiveServiceWorker);
  let waitForUniqueIDBufferInitialization =
    await initializeUniqueIDBufferIfNecessary;
  _handleRouterMessage(
    "preview manager port received",
    waitForUniqueIDBufferInitialization,
  );
  processRouterMessage.broadcast(_generateErrorSourceIdentifier);
}
setupServiceWorkerWithIdentifierManagement();
