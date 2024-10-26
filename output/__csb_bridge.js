var lazyLoadExportsIfNecessary =
  (setupAndFetchExports, setupAndFetchExportsIfNeeded) => () => {
    if (!setupAndFetchExportsIfNeeded) {
      setupAndFetchExports(
        (setupAndFetchExportsIfNeeded = {
          exports: {},
        }).exports,
        setupAndFetchExportsIfNeeded,
      );
    }
    return setupAndFetchExportsIfNeeded.exports;
  };
var addLazyNonEnumerableAccessors = (
  copyNonEnumerableProperties,
  copyNonEnumerablePropertiesFromSource,
  excludedPropertyForCopying,
  isPropertyDescriptorEnumerable,
) => {
  if (
    (copyNonEnumerablePropertiesFromSource &&
      typeof copyNonEnumerablePropertiesFromSource == "object") ||
    typeof copyNonEnumerablePropertiesFromSource == "function"
  ) {
    for (let nonEnumerablePropertyKey of Object.getOwnPropertyNames(
      copyNonEnumerablePropertiesFromSource,
    )) {
      if (
        !Object.prototype.hasOwnProperty.call(
          copyNonEnumerableProperties,
          nonEnumerablePropertyKey,
        ) &&
        nonEnumerablePropertyKey !== excludedPropertyForCopying
      ) {
        Object.defineProperty(
          copyNonEnumerableProperties,
          nonEnumerablePropertyKey,
          {
            get: () =>
              copyNonEnumerablePropertiesFromSource[nonEnumerablePropertyKey],
            enumerable:
              !(isPropertyDescriptorEnumerable =
                Object.getOwnPropertyDescriptor(
                  copyNonEnumerablePropertiesFromSource,
                  nonEnumerablePropertyKey,
                )) || isPropertyDescriptorEnumerable.enumerable,
          },
        );
      }
    }
  }
  return copyNonEnumerableProperties;
};
var initializePrototypeWithDataSource = (
  initializeDataSourcePrototype,
  sourceDataConfiguration,
  createPrototypeFromSourceData,
) => {
  if (initializeDataSourcePrototype != null) {
    createPrototypeFromSourceData = Object.create(
      Object.getPrototypeOf(initializeDataSourcePrototype),
    );
  } else {
    createPrototypeFromSourceData = {};
  }
  return addLazyNonEnumerableAccessors(
    sourceDataConfiguration ||
      !initializeDataSourcePrototype ||
      !initializeDataSourcePrototype.__esModule
      ? Object.defineProperty(createPrototypeFromSourceData, "default", {
          value: initializeDataSourcePrototype,
          enumerable: true,
        })
      : createPrototypeFromSourceData,
    initializeDataSourcePrototype,
  );
};
var initializePromiseResolutionManager = lazyLoadExportsIfNecessary(
  (initializeAndControlPromiseLifecycle) => {
    "use strict";

    Object.defineProperty(initializeAndControlPromiseLifecycle, "__esModule", {
      value: true,
    });
    initializeAndControlPromiseLifecycle.createDeferredExecutor = undefined;
    function handlePromiseResolutionLifecycle() {
      let createPromiseManager = (
        setupPromiseManager,
        processPromiseRejection,
      ) => {
        createPromiseManager.state = "pending";
        createPromiseManager.resolve = (processPromiseResolution) => {
          if (createPromiseManager.state !== "pending") {
            return;
          }
          createPromiseManager.result = processPromiseResolution;
          let markPromiseAsFulfilledAndUpdateState = (
            setPromiseStatusToFulfilled,
          ) => {
            createPromiseManager.state = "fulfilled";
            return setPromiseStatusToFulfilled;
          };
          return setupPromiseManager(
            processPromiseResolution instanceof Promise
              ? processPromiseResolution
              : Promise.resolve(processPromiseResolution).then(
                  markPromiseAsFulfilledAndUpdateState,
                ),
          );
        };
        createPromiseManager.reject = (rejectPromiseWithReason) => {
          if (createPromiseManager.state === "pending") {
            queueMicrotask(() => {
              createPromiseManager.state = "rejected";
            });
            return rejectPromiseWithReason(
              (createPromiseManager.rejectionReason = rejectPromiseWithReason),
            );
          }
        };
      };
      return createPromiseManager;
    }
    initializeAndControlPromiseLifecycle.createDeferredExecutor =
      handlePromiseResolutionLifecycle;
  },
);
var initializeDeferredPromiseManager = lazyLoadExportsIfNecessary(
  (AppLaunchPromiseHandler) => {
    "use strict";

    Object.defineProperty(AppLaunchPromiseHandler, "__esModule", {
      value: true,
    });
    AppLaunchPromiseHandler.DeferredPromise = undefined;
    var initializeAppLaunchPromiseExecutor =
      initializePromiseResolutionManager();
    var ApplicationLaunchPromise = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(appLaunchStatus = null) {
        let initializeAndHandleAppLaunchPromise = (0,
        initializeAppLaunchPromiseExecutor.createDeferredExecutor)();
        super(
          (
            initializeAppWithStatusMonitoring,
            monitorPromiseExecutionStatus,
          ) => {
            initializeAndHandleAppLaunchPromise(
              initializeAppWithStatusMonitoring,
              monitorPromiseExecutionStatus,
            );
            appLaunchStatus?.(
              initializeAndHandleAppLaunchPromise.resolve,
              initializeAndHandleAppLaunchPromise.reject,
            );
          },
        );
        this.#e = initializeAndHandleAppLaunchPromise;
        this.resolve = this.#e.resolve;
        this.reject = this.#e.reject;
      }
      get state() {
        return this.#e.state;
      }
      get rejectionReason() {
        return this.#e.rejectionReason;
      }
      then(executeCallbackOnSuccess, executeCallbackOnPromiseFulfillment) {
        return this.#t(
          super.then(
            executeCallbackOnSuccess,
            executeCallbackOnPromiseFulfillment,
          ),
        );
      }
      catch(handleErrorResponseInCatch) {
        return this.#t(super.catch(handleErrorResponseInCatch));
      }
      finally(finalizeAndRetrieveResult) {
        return this.#t(super.finally(finalizeAndRetrieveResult));
      }
      #t(initializePromiseHandlersForResolution) {
        return Object.defineProperties(initializePromiseHandlersForResolution, {
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
    AppLaunchPromiseHandler.DeferredPromise = ApplicationLaunchPromise;
  },
);
var initializeDeferredModuleExports = lazyLoadExportsIfNecessary(
  (defineExportBindingFunction) => {
    "use strict";

    var defineExportBindingDescriptor =
      (defineExportBindingFunction &&
        defineExportBindingFunction.__createBinding) ||
      (Object.create
        ? function (
            defineOrRetrievePropertyDescriptor,
            defineOrRetrieveExportedPropertyDescriptor,
            propertyKey,
            propertyKeyName = propertyKey,
          ) {
            var getOrDefinePropertyDescriptor = Object.getOwnPropertyDescriptor(
              defineOrRetrieveExportedPropertyDescriptor,
              propertyKey,
            );
            if (
              !getOrDefinePropertyDescriptor ||
              ("get" in getOrDefinePropertyDescriptor
                ? !defineOrRetrieveExportedPropertyDescriptor.__esModule
                : getOrDefinePropertyDescriptor.writable ||
                  getOrDefinePropertyDescriptor.configurable)
            ) {
              getOrDefinePropertyDescriptor = {
                enumerable: true,
                get() {
                  return defineOrRetrieveExportedPropertyDescriptor[
                    propertyKey
                  ];
                },
              };
            }
            Object.defineProperty(
              defineOrRetrievePropertyDescriptor,
              propertyKeyName,
              getOrDefinePropertyDescriptor,
            );
          }
        : function (
            transferPropertyValueFromSourceToTarget,
            transferValueFromSourceToTarget,
            sourcePropertyIdentifier,
            _sourcePropertyIdentifier = sourcePropertyIdentifier,
          ) {
            transferPropertyValueFromSourceToTarget[_sourcePropertyIdentifier] =
              transferValueFromSourceToTarget[sourcePropertyIdentifier];
          });
    var createExportBindingWithDescriptor =
      (defineExportBindingFunction &&
        defineExportBindingFunction.__exportStar) ||
      function (
        defineExportBindingsBetweenModules,
        defineExportBindingsForModule,
      ) {
        for (var moduleExportKey in defineExportBindingsBetweenModules) {
          if (
            moduleExportKey !== "default" &&
            !Object.prototype.hasOwnProperty.call(
              defineExportBindingsForModule,
              moduleExportKey,
            )
          ) {
            defineExportBindingDescriptor(
              defineExportBindingsForModule,
              defineExportBindingsBetweenModules,
              moduleExportKey,
            );
          }
        }
      };
    Object.defineProperty(defineExportBindingFunction, "__esModule", {
      value: true,
    });
    createExportBindingWithDescriptor(
      initializePromiseResolutionManager(),
      defineExportBindingFunction,
    );
    createExportBindingWithDescriptor(
      initializeDeferredPromiseManager(),
      defineExportBindingFunction,
    );
  },
);
var generatePaddedSubstringWithMaxLength = lazyLoadExportsIfNecessary(
  (createZeroPaddedSubstring, createZeroPaddedSubstringWithMaxLength) => {
    createZeroPaddedSubstringWithMaxLength.exports = function (
      generatePaddedSubstringWithMaxLengthLimit,
      maxSubstringPaddingLength,
    ) {
      var generatePaddedSubstringWithMaxLength =
        "000000000" + generatePaddedSubstringWithMaxLengthLimit;
      return generatePaddedSubstringWithMaxLength.substr(
        generatePaddedSubstringWithMaxLength.length - maxSubstringPaddingLength,
      );
    };
  },
);
var createUniqueExecutionIdFromContextPropertyCount =
  lazyLoadExportsIfNecessary(
    (
      setupUniqueExecutionIdentifierProvider,
      setUpUniqueExecutionIdProvider,
    ) => {
      var generateUniqueExecutionIdentifier =
        generatePaddedSubstringWithMaxLength();
      var executionContextScope = typeof window == "object" ? window : self;
      var totalGlobalExecutionContextProperties = Object.keys(
        executionContextScope,
      ).length;
      var countOfSupportedMimeTypes = navigator.mimeTypes
        ? navigator.mimeTypes.length
        : 0;
      var createUniqueExecutionIdentifier = generateUniqueExecutionIdentifier(
        (countOfSupportedMimeTypes + navigator.userAgent.length).toString(36) +
          totalGlobalExecutionContextProperties.toString(36),
        4,
      );
      setUpUniqueExecutionIdProvider.exports = function () {
        return createUniqueExecutionIdentifier;
      };
    },
  );
var initializeCryptoSecureRandomDecimalGenerator = lazyLoadExportsIfNecessary(
  (
    initializeCryptoRandomDecimalGenerator,
    _initializeCryptoRandomDecimalGenerator,
  ) => {
    var generateSecureRandomDecimal;
    var initializeCryptoRandomGenerator =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (initializeCryptoRandomGenerator) {
      maxUint32ValueForNormalization = Math.pow(2, 32) - 1;
      generateSecureRandomDecimal = function () {
        return Math.abs(
          initializeCryptoRandomGenerator.getRandomValues(
            new Uint32Array(1),
          )[0] / maxUint32ValueForNormalization,
        );
      };
    } else {
      generateSecureRandomDecimal = Math.random;
    }
    var maxUint32ValueForNormalization;
    _initializeCryptoRandomDecimalGenerator.exports =
      generateSecureRandomDecimal;
  },
);
var generateUniqueId = lazyLoadExportsIfNecessary(
  (generateUniqueIdForBinding, createUniqueIdForDataBinding) => {
    var createUniqueIdentifierForProperty =
      createUniqueExecutionIdFromContextPropertyCount();
    var generatePaddedUniqueIdForData = generatePaddedSubstringWithMaxLength();
    var initializeSecureRandomIdGenerator =
      initializeCryptoSecureRandomDecimalGenerator();
    var uniqueIdCounter = 0;
    var maxUniqueIdentifierLength = 4;
    var baseNumericSystemForUniqueIds = 36;
    var maxUniqueIdCountBasedOnLength = Math.pow(
      baseNumericSystemForUniqueIds,
      maxUniqueIdentifierLength,
    );
    function generatePaddedUniqueIdForDataBinding() {
      return generatePaddedUniqueIdForData(
        (
          (initializeSecureRandomIdGenerator() *
            maxUniqueIdCountBasedOnLength) <<
          0
        ).toString(baseNumericSystemForUniqueIds),
        maxUniqueIdentifierLength,
      );
    }
    function getNextUniqueId() {
      if (uniqueIdCounter < maxUniqueIdCountBasedOnLength) {
        uniqueIdCounter = uniqueIdCounter;
      } else {
        uniqueIdCounter = 0;
      }
      uniqueIdCounter++;
      return uniqueIdCounter - 1;
    }
    function generateTimestampedUniqueId() {
      var uniqueIdPrefix = "c";
      var currentTimestampBase36Encoded = new Date()
        .getTime()
        .toString(baseNumericSystemForUniqueIds);
      var generatePaddedUniqueIdForDataIdentifier =
        generatePaddedUniqueIdForData(
          getNextUniqueId().toString(baseNumericSystemForUniqueIds),
          maxUniqueIdentifierLength,
        );
      var generateUniqueIdWithTimestamp = createUniqueIdentifierForProperty();
      var combinedDataBindingIds =
        generatePaddedUniqueIdForDataBinding() +
        generatePaddedUniqueIdForDataBinding();
      return (
        uniqueIdPrefix +
        currentTimestampBase36Encoded +
        generatePaddedUniqueIdForDataIdentifier +
        generateUniqueIdWithTimestamp +
        combinedDataBindingIds
      );
    }
    generateTimestampedUniqueId.slug = function () {
      var generateUniqueIdBasedOnTimestamp = new Date().getTime().toString(36);
      var getLastFourCharsOfUniqueId = getNextUniqueId().toString(36).slice(-4);
      var identifierBoundsForProperty =
        createUniqueIdentifierForProperty().slice(0, 1) +
        createUniqueIdentifierForProperty().slice(-1);
      var getLastTwoCharsFromDataBindingDescriptor =
        generatePaddedUniqueIdForDataBinding().slice(-2);
      return (
        generateUniqueIdBasedOnTimestamp.slice(-2) +
        getLastFourCharsOfUniqueId +
        identifierBoundsForProperty +
        getLastTwoCharsFromDataBindingDescriptor
      );
    };
    generateTimestampedUniqueId.isCuid = function (isStringStartingWithC) {
      if (typeof isStringStartingWithC != "string") {
        return false;
      } else {
        return !!isStringStartingWithC.startsWith("c");
      }
    };
    generateTimestampedUniqueId.isSlug = function (isSlugLengthInValidRange) {
      if (typeof isSlugLengthInValidRange != "string") {
        return false;
      }
      var isValidSlugLength = isSlugLengthInValidRange.length;
      return isValidSlugLength >= 7 && isValidSlugLength <= 10;
    };
    generateTimestampedUniqueId.fingerprint = createUniqueIdentifierForProperty;
    createUniqueIdForDataBinding.exports = generateTimestampedUniqueId;
  },
);
var formattedIdentifierRegex = /(%?)(%([sdjo]))/g;
function formatIdentifierForDisplay(
  transformIdentifierBasedOnFormatSpecifier,
  identifierFormatType,
) {
  switch (identifierFormatType) {
    case "s":
      return transformIdentifierBasedOnFormatSpecifier;
    case "d":
    case "i":
      return Number(transformIdentifierBasedOnFormatSpecifier);
    case "j":
      return JSON.stringify(transformIdentifierBasedOnFormatSpecifier);
    case "o": {
      if (typeof transformIdentifierBasedOnFormatSpecifier == "string") {
        return transformIdentifierBasedOnFormatSpecifier;
      }
      let serializedIdentifier = JSON.stringify(
        transformIdentifierBasedOnFormatSpecifier,
      );
      if (
        serializedIdentifier === "{}" ||
        serializedIdentifier === "[]" ||
        /^\[object .+?\]$/.test(serializedIdentifier)
      ) {
        return transformIdentifierBasedOnFormatSpecifier;
      } else {
        return serializedIdentifier;
      }
    }
  }
}
function substitutePlaceholdersInString(
  formatStringWithPlaceholdersAndValues,
  ...substitutePlaceholdersWithValuesInTemplateString
) {
  if (substitutePlaceholdersWithValuesInTemplateString.length === 0) {
    return formatStringWithPlaceholdersAndValues;
  }
  let currentSubstituteValueIndex = 0;
  let formatStringWithValues = formatStringWithPlaceholdersAndValues.replace(
    formattedIdentifierRegex,
    (
      handlePlaceholderFormattingIfNeeded,
      isPlaceholderFormattingRequired,
      transformPlaceholderValueForDisplay,
      generateFormattedPlaceholderOutput,
    ) => {
      let substitutedPlaceholderValue =
        substitutePlaceholdersWithValuesInTemplateString[
          currentSubstituteValueIndex
        ];
      let formatAndDisplayPlaceholderOutput = formatIdentifierForDisplay(
        substitutedPlaceholderValue,
        generateFormattedPlaceholderOutput,
      );
      if (isPlaceholderFormattingRequired) {
        return handlePlaceholderFormattingIfNeeded;
      } else {
        currentSubstituteValueIndex++;
        return formatAndDisplayPlaceholderOutput;
      }
    },
  );
  if (
    currentSubstituteValueIndex <
    substitutePlaceholdersWithValuesInTemplateString.length
  ) {
    formatStringWithValues +=
      " " +
      substitutePlaceholdersWithValuesInTemplateString
        .slice(currentSubstituteValueIndex)
        .join(" ");
  }
  formatStringWithValues = formatStringWithValues.replace(/%{2,2}/g, "%");
  return formatStringWithValues;
}
var numberOfLinesToOmitFromErrorStack = 2;
function sanitizeErrorStackTrace(_trimErrorStackTrace) {
  if (!_trimErrorStackTrace.stack) {
    return;
  }
  let sanitizedErrorStack = _trimErrorStackTrace.stack.split("\n");
  sanitizedErrorStack.splice(1, numberOfLinesToOmitFromErrorStack);
  _trimErrorStackTrace.stack = sanitizedErrorStack.join("\n");
}
var InvariantViolationError = class extends Error {
  constructor(
    formattedErrorMessageWithDynamicPlaceholders,
    ...dynamicErrorMessageValues
  ) {
    super(formattedErrorMessageWithDynamicPlaceholders);
    this.message = formattedErrorMessageWithDynamicPlaceholders;
    this.name = "Invariant Violation";
    this.message = substitutePlaceholdersInString(
      formattedErrorMessageWithDynamicPlaceholders,
      ...dynamicErrorMessageValues,
    );
    sanitizeErrorStackTrace(this);
  }
};
var validateAndThrowErrorIfInvalid = (
  checkInputValidityAndThrowErrorIfInvalid,
  validateInputAndThrowIfInvalid,
  ...inputValidationErrorMessages
) => {
  if (!checkInputValidityAndThrowErrorIfInvalid) {
    throw new InvariantViolationError(
      validateInputAndThrowIfInvalid,
      ...inputValidationErrorMessages,
    );
  }
};
validateAndThrowErrorIfInvalid.as = (
  InvalidPlaceholderValueException,
  isPlaceholderValueCorrect,
  placeholderSubstitutionKey,
  ...validatePlaceholderSubstitution
) => {
  if (!isPlaceholderValueCorrect) {
    throw InvalidPlaceholderValueException.prototype.name != null
      ? new InvalidPlaceholderValueException(
          substitutePlaceholdersInString(
            placeholderSubstitutionKey,
            validatePlaceholderSubstitution,
          ),
        )
      : InvalidPlaceholderValueException(
          substitutePlaceholdersInString(
            placeholderSubstitutionKey,
            validatePlaceholderSubstitution,
          ),
        );
  }
};
var bindStorageToDataSource = initializePrototypeWithDataSource(
  initializeDeferredModuleExports(),
);
var retrieveDebugModeSettingFromLocalStorage =
  window.localStorage.CSB_EMULATOR_DEBUG;
function generatePlaceholderReplacementFunction(
  createPlaceholderReplacementFunction,
) {
  return function (
    generatePlaceholderReplacements,
    ...generatePlaceholderReplacementsArray
  ) {};
}
var previewManagerIdentifier = "preview-manager";
var PREVIEW_STATUS_READY = "preview/ready";
var previewResponsePayloadKey = "preview/response";
var previewManagerAcknowledgmentToken = "preview/manager-ack";
var bridgeInitializationEndpoint = "bridge/init";
var previewResponseRuntimePath = "preview/runtime-response";
var bridgeCloseConnectionEndpoint = "bridge/close";
var initializeBindingWithUniqueId =
  initializePrototypeWithDataSource(generateUniqueId());
var MAX_UNSIGNED_INT_VALUE = 4294967295;
function storeNormalizedValueWithIdentifier(
  saveNormalizedValueAndOriginalToBuffer,
  saveValueWithIdentifier,
  normalizeAndStoreIdentifierInBuffer,
) {
  var normalizedFloatIdentifier =
    normalizeAndStoreIdentifierInBuffer / 4294967296;
  var originalIdentifierForNormalizedValue =
    normalizeAndStoreIdentifierInBuffer;
  saveNormalizedValueAndOriginalToBuffer.setUint32(
    saveValueWithIdentifier,
    normalizedFloatIdentifier,
  );
  saveNormalizedValueAndOriginalToBuffer.setUint32(
    saveValueWithIdentifier + 4,
    originalIdentifierForNormalizedValue,
  );
}
function _storeHighOrderIdentifierInBuffer(
  storeHighOrderIdentifierInBuffer,
  bufferOffsetForHighOrderIdentifier,
  storeHighOrderIdentifier,
) {
  var highOrderIdentifier = Math.floor(storeHighOrderIdentifier / 4294967296);
  var highOrderIdentifierValue = storeHighOrderIdentifier;
  storeHighOrderIdentifierInBuffer.setUint32(
    bufferOffsetForHighOrderIdentifier,
    highOrderIdentifier,
  );
  storeHighOrderIdentifierInBuffer.setUint32(
    bufferOffsetForHighOrderIdentifier + 4,
    highOrderIdentifierValue,
  );
}
function createLargeRandomIntegerFromBuffer(
  generateLargeRandomIntegerFromBuffer,
  getRandomOffsetFromBuffer,
) {
  var _createLargeRandomIntegerFromBuffer =
    generateLargeRandomIntegerFromBuffer.getInt32(getRandomOffsetFromBuffer);
  var getRandomUint32FromBufferOffset =
    generateLargeRandomIntegerFromBuffer.getUint32(
      getRandomOffsetFromBuffer + 4,
    );
  return (
    _createLargeRandomIntegerFromBuffer * 4294967296 +
    getRandomUint32FromBufferOffset
  );
}
function createIdentifierFromBufferData(
  _generateUniqueIdentifierFromBuffer,
  getBufferOffsetForUniqueIdentifier,
) {
  var generateUniqueIdFromBufferData =
    _generateUniqueIdentifierFromBuffer.getUint32(
      getBufferOffsetForUniqueIdentifier,
    );
  var extractUniqueIdentifierFromBuffer =
    _generateUniqueIdentifierFromBuffer.getUint32(
      getBufferOffsetForUniqueIdentifier + 4,
    );
  return (
    generateUniqueIdFromBufferData * 4294967296 +
    extractUniqueIdentifierFromBuffer
  );
}
var isTextEncodingAvailable =
  (typeof process === "undefined" ||
    (process == null ? undefined : process.env)?.TEXT_ENCODING !== "never") &&
  typeof TextEncoder !== "undefined" &&
  typeof TextDecoder !== "undefined";
function calculateSlugUtf8ByteLength(getSlugUtf8ByteLength) {
  for (
    var calculateUtf8ByteLengthFromSlug = getSlugUtf8ByteLength.length,
      calculateUtf8ByteLengthForSlug = 0,
      currentCharacterIndex = 0;
    currentCharacterIndex < calculateUtf8ByteLengthFromSlug;

  ) {
    var utf8CharacterCode = getSlugUtf8ByteLength.charCodeAt(
      currentCharacterIndex++,
    );
    if ((utf8CharacterCode & 4294967168) === 0) {
      calculateUtf8ByteLengthForSlug++;
      continue;
    } else if ((utf8CharacterCode & 4294965248) === 0) {
      calculateUtf8ByteLengthForSlug += 2;
    } else {
      if (
        utf8CharacterCode >= 55296 &&
        utf8CharacterCode <= 56319 &&
        currentCharacterIndex < calculateUtf8ByteLengthFromSlug
      ) {
        var currentUtf8ByteCode = getSlugUtf8ByteLength.charCodeAt(
          currentCharacterIndex,
        );
        if ((currentUtf8ByteCode & 64512) === 56320) {
          ++currentCharacterIndex;
          utf8CharacterCode =
            ((utf8CharacterCode & 1023) << 10) +
            (currentUtf8ByteCode & 1023) +
            65536;
        }
      }
      if ((utf8CharacterCode & 4294901760) === 0) {
        calculateUtf8ByteLengthForSlug += 3;
      } else {
        calculateUtf8ByteLengthForSlug += 4;
      }
    }
  }
  return calculateUtf8ByteLengthForSlug;
}
function _filterDisallowedCharactersFromSlug(
  disallowedCharacters,
  filterDisallowedCharactersFromSlug,
  getStartingValidCharacterIndexForSlug,
) {
  for (
    var totalInvalidSlugCharacterCount = disallowedCharacters.length,
      nextValidCharacterInsertIndex = getStartingValidCharacterIndexForSlug,
      currentDisallowedCharacterIndex = 0;
    currentDisallowedCharacterIndex < totalInvalidSlugCharacterCount;

  ) {
    var getCharCodeForSlugCharacterValidation = disallowedCharacters.charCodeAt(
      currentDisallowedCharacterIndex++,
    );
    if ((getCharCodeForSlugCharacterValidation & 4294967168) === 0) {
      filterDisallowedCharactersFromSlug[nextValidCharacterInsertIndex++] =
        getCharCodeForSlugCharacterValidation;
      continue;
    } else if ((getCharCodeForSlugCharacterValidation & 4294965248) === 0) {
      filterDisallowedCharactersFromSlug[nextValidCharacterInsertIndex++] =
        ((getCharCodeForSlugCharacterValidation >> 6) & 31) | 192;
    } else {
      if (
        getCharCodeForSlugCharacterValidation >= 55296 &&
        getCharCodeForSlugCharacterValidation <= 56319 &&
        currentDisallowedCharacterIndex < totalInvalidSlugCharacterCount
      ) {
        var getNextDisallowedSlugCharCode = disallowedCharacters.charCodeAt(
          currentDisallowedCharacterIndex,
        );
        if ((getNextDisallowedSlugCharCode & 64512) === 56320) {
          ++currentDisallowedCharacterIndex;
          getCharCodeForSlugCharacterValidation =
            ((getCharCodeForSlugCharacterValidation & 1023) << 10) +
            (getNextDisallowedSlugCharCode & 1023) +
            65536;
        }
      }
      if ((getCharCodeForSlugCharacterValidation & 4294901760) === 0) {
        filterDisallowedCharactersFromSlug[nextValidCharacterInsertIndex++] =
          ((getCharCodeForSlugCharacterValidation >> 12) & 15) | 224;
        filterDisallowedCharactersFromSlug[nextValidCharacterInsertIndex++] =
          ((getCharCodeForSlugCharacterValidation >> 6) & 63) | 128;
      } else {
        filterDisallowedCharactersFromSlug[nextValidCharacterInsertIndex++] =
          ((getCharCodeForSlugCharacterValidation >> 18) & 7) | 240;
        filterDisallowedCharactersFromSlug[nextValidCharacterInsertIndex++] =
          ((getCharCodeForSlugCharacterValidation >> 12) & 63) | 128;
        filterDisallowedCharactersFromSlug[nextValidCharacterInsertIndex++] =
          ((getCharCodeForSlugCharacterValidation >> 6) & 63) | 128;
      }
    }
    filterDisallowedCharactersFromSlug[nextValidCharacterInsertIndex++] =
      (getCharCodeForSlugCharacterValidation & 63) | 128;
  }
}
var createTextEncoderIfAvailable = isTextEncodingAvailable
  ? new TextEncoder()
  : undefined;
var determineTextEncodingIdentifier = isTextEncodingAvailable
  ? typeof process !== "undefined" &&
    (process == null ? undefined : process.env)?.TEXT_ENCODING !== "force"
    ? 200
    : 0
  : MAX_UNSIGNED_INT_VALUE;
function encodeAndSaveTextWithPosition(
  encodeAndStoreTextData,
  storeEncodedText,
  storeEncodedTextPosition,
) {
  storeEncodedText.set(
    createTextEncoderIfAvailable.encode(encodeAndStoreTextData),
    storeEncodedTextPosition,
  );
}
function storeEncodedTextWithUniqueIdentifier(
  encodeAndStoreTextUsingTextIdentifier,
  encodeAndStoreUniqueIdentifier,
  _storeEncodedTextPosition,
) {
  createTextEncoderIfAvailable.encodeInto(
    encodeAndStoreTextUsingTextIdentifier,
    encodeAndStoreUniqueIdentifier.subarray(_storeEncodedTextPosition),
  );
}
var selectEncodingFunctionBasedOnTextEncoderAvailability =
  createTextEncoderIfAvailable?.encodeInto
    ? storeEncodedTextWithUniqueIdentifier
    : encodeAndSaveTextWithPosition;
var maxEncodedTextIdentifierLengthLimit = 4096;
function extractAndAggregateUniqueIdentifiers(
  _filterAndCombineUniqueIdentifiers,
  filterAndCombineIdentifiers,
  filterAndCombineUniqueTextIdentifiers,
) {
  for (
    var currentIdentifierPointer = filterAndCombineIdentifiers,
      endIndexOfUniqueIdentifiersToExtract =
        currentIdentifierPointer + filterAndCombineUniqueTextIdentifiers,
      filteredUniqueIdentifiers = [],
      concatenatedIdentifiers = "";
    currentIdentifierPointer < endIndexOfUniqueIdentifiersToExtract;

  ) {
    var currentUniqueIdentifier =
      _filterAndCombineUniqueIdentifiers[currentIdentifierPointer++];
    if ((currentUniqueIdentifier & 128) === 0) {
      filteredUniqueIdentifiers.push(currentUniqueIdentifier);
    } else if ((currentUniqueIdentifier & 224) === 192) {
      var uniqueIdentifierSegmentMask =
        _filterAndCombineUniqueIdentifiers[currentIdentifierPointer++] & 63;
      filteredUniqueIdentifiers.push(
        ((currentUniqueIdentifier & 31) << 6) | uniqueIdentifierSegmentMask,
      );
    } else if ((currentUniqueIdentifier & 240) === 224) {
      var uniqueIdentifierSegmentMask =
        _filterAndCombineUniqueIdentifiers[currentIdentifierPointer++] & 63;
      var nextUniqueIdentifierSegmentMask =
        _filterAndCombineUniqueIdentifiers[currentIdentifierPointer++] & 63;
      filteredUniqueIdentifiers.push(
        ((currentUniqueIdentifier & 31) << 12) |
          (uniqueIdentifierSegmentMask << 6) |
          nextUniqueIdentifierSegmentMask,
      );
    } else if ((currentUniqueIdentifier & 248) === 240) {
      var uniqueIdentifierSegmentMask =
        _filterAndCombineUniqueIdentifiers[currentIdentifierPointer++] & 63;
      var nextUniqueIdentifierSegmentMask =
        _filterAndCombineUniqueIdentifiers[currentIdentifierPointer++] & 63;
      var sectionIdBitMask =
        _filterAndCombineUniqueIdentifiers[currentIdentifierPointer++] & 63;
      var combinedUniqueIdentifierBitMask =
        ((currentUniqueIdentifier & 7) << 18) |
        (uniqueIdentifierSegmentMask << 12) |
        (nextUniqueIdentifierSegmentMask << 6) |
        sectionIdBitMask;
      if (combinedUniqueIdentifierBitMask > 65535) {
        combinedUniqueIdentifierBitMask -= 65536;
        filteredUniqueIdentifiers.push(
          ((combinedUniqueIdentifierBitMask >>> 10) & 1023) | 55296,
        );
        combinedUniqueIdentifierBitMask =
          (combinedUniqueIdentifierBitMask & 1023) | 56320;
      }
      filteredUniqueIdentifiers.push(combinedUniqueIdentifierBitMask);
    } else {
      filteredUniqueIdentifiers.push(currentUniqueIdentifier);
    }
    if (
      filteredUniqueIdentifiers.length >= maxEncodedTextIdentifierLengthLimit
    ) {
      concatenatedIdentifiers += String.fromCharCode.apply(
        String,
        filteredUniqueIdentifiers,
      );
      filteredUniqueIdentifiers.length = 0;
    }
  }
  if (filteredUniqueIdentifiers.length > 0) {
    concatenatedIdentifiers += String.fromCharCode.apply(
      String,
      filteredUniqueIdentifiers,
    );
  }
  return concatenatedIdentifiers;
}
var textEncodingDecoder = isTextEncodingAvailable ? new TextDecoder() : null;
var getMaxUniqueIdentifierValue = isTextEncodingAvailable
  ? typeof process !== "undefined" &&
    (process == null ? undefined : process.env)?.TEXT_DECODER !== "force"
    ? 200
    : 0
  : MAX_UNSIGNED_INT_VALUE;
function extractUniqueIdentifiersFromBufferSlice(
  extractUniqueIdentifiersFromBuffer,
  getBufferPositionForIdentifierExtraction,
  getDecodedUniqueIdentifierSliceLength,
) {
  var extractUniqueIdentifierSliceFromBuffer =
    extractUniqueIdentifiersFromBuffer.subarray(
      getBufferPositionForIdentifierExtraction,
      getBufferPositionForIdentifierExtraction +
        getDecodedUniqueIdentifierSliceLength,
    );
  return textEncodingDecoder.decode(extractUniqueIdentifierSliceFromBuffer);
}
var createUniqueSlugGenerator = (function () {
  function SlugManager(UniqueSlugValidatorFunction, UniqueSlugGenerator) {
    this.type = UniqueSlugValidatorFunction;
    this.data = UniqueSlugGenerator;
  }
  return SlugManager;
})();
var validateAndAssignUniqueSlugWithNormalization = (function () {
  function assignSlugWithValidationAndNormalization(
    validateAndEnsureUniqueSlugWithNormalization,
    validateAndEnsureUniqueSlug,
  ) {
    assignSlugWithValidationAndNormalization =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (
          validateAndEnsureUniqueSlugWithNormalization,
          _validateAndEnsureUniqueSlug,
        ) {
          validateAndEnsureUniqueSlugWithNormalization.__proto__ =
            _validateAndEnsureUniqueSlug;
        }) ||
      function (validateAndEnsureUniqueSlug, _validateAndAssignUniqueSlug) {
        for (var uniqueSlugKey in _validateAndAssignUniqueSlug) {
          if (
            Object.prototype.hasOwnProperty.call(
              _validateAndAssignUniqueSlug,
              uniqueSlugKey,
            )
          ) {
            validateAndEnsureUniqueSlug[uniqueSlugKey] =
              _validateAndAssignUniqueSlug[uniqueSlugKey];
          }
        }
      };
    return assignSlugWithValidationAndNormalization(
      validateAndEnsureUniqueSlugWithNormalization,
      validateAndEnsureUniqueSlug,
    );
  }
  return function (
    __validateAndEnsureUniqueSlug,
    _validateAndEnsureUniqueSlug,
  ) {
    if (
      typeof _validateAndEnsureUniqueSlug != "function" &&
      _validateAndEnsureUniqueSlug !== null
    ) {
      throw new TypeError(
        "Class extends value " +
          String(_validateAndEnsureUniqueSlug) +
          " is not a constructor or null",
      );
    }
    assignSlugWithValidationAndNormalization(
      __validateAndEnsureUniqueSlug,
      _validateAndEnsureUniqueSlug,
    );
    function setupSlugUniquenessValidation() {
      this.constructor = __validateAndEnsureUniqueSlug;
    }
    if (_validateAndEnsureUniqueSlug === null) {
      __validateAndEnsureUniqueSlug.prototype = Object.create(
        _validateAndEnsureUniqueSlug,
      );
    } else {
      __validateAndEnsureUniqueSlug.prototype =
        ((setupSlugUniquenessValidation.prototype =
          _validateAndEnsureUniqueSlug.prototype),
        new setupSlugUniquenessValidation());
    }
  };
})();
var generateAndEnsureUniqueSlug = (function (validateAndEnsureUniqueSlug) {
  validateAndAssignUniqueSlugWithNormalization(
    generateValidatedUniqueSlugInstance,
    validateAndEnsureUniqueSlug,
  );
  function generateValidatedUniqueSlugInstance(generateAndValidateUniqueSlug) {
    var validatedSlugGenerator =
      validateAndEnsureUniqueSlug.call(this, generateAndValidateUniqueSlug) ||
      this;
    var slugGeneratorInstance = Object.create(
      generateValidatedUniqueSlugInstance.prototype,
    );
    Object.setPrototypeOf(validatedSlugGenerator, slugGeneratorInstance);
    Object.defineProperty(validatedSlugGenerator, "name", {
      configurable: true,
      enumerable: false,
      value: generateValidatedUniqueSlugInstance.name,
    });
    return validatedSlugGenerator;
  }
  return generateValidatedUniqueSlugInstance;
})(Error);
var getNextAvailableSlugID = -1;
var maxSlugLengthAllowedForCreation = 4294967295;
var maximumAllowedSlugCreationLimit = 17179869183;
function createSlugTimestampBuffer(createTimestampFromSlugDetails) {
  var slugCreationTimeInSeconds = createTimestampFromSlugDetails.sec;
  var nanosecondsSinceEpochForSlug = createTimestampFromSlugDetails.nsec;
  if (
    slugCreationTimeInSeconds >= 0 &&
    nanosecondsSinceEpochForSlug >= 0 &&
    slugCreationTimeInSeconds <= maximumAllowedSlugCreationLimit
  ) {
    if (
      nanosecondsSinceEpochForSlug === 0 &&
      slugCreationTimeInSeconds <= maxSlugLengthAllowedForCreation
    ) {
      var generateSlugTimestampByteArray = new Uint8Array(4);
      var slugTimestampDataView = new DataView(
        generateSlugTimestampByteArray.buffer,
      );
      slugTimestampDataView.setUint32(0, slugCreationTimeInSeconds);
      return generateSlugTimestampByteArray;
    } else {
      var calculateNanosecondFractionFromEpoch =
        slugCreationTimeInSeconds / 4294967296;
      var extractLower32BitsFromSlugCreationTime =
        slugCreationTimeInSeconds & 4294967295;
      var generateSlugTimestampByteArray = new Uint8Array(8);
      var slugTimestampDataView = new DataView(
        generateSlugTimestampByteArray.buffer,
      );
      slugTimestampDataView.setUint32(
        0,
        (nanosecondsSinceEpochForSlug << 2) |
          (calculateNanosecondFractionFromEpoch & 3),
      );
      slugTimestampDataView.setUint32(
        4,
        extractLower32BitsFromSlugCreationTime,
      );
      return generateSlugTimestampByteArray;
    }
  } else {
    var generateSlugTimestampByteArray = new Uint8Array(12);
    var slugTimestampDataView = new DataView(
      generateSlugTimestampByteArray.buffer,
    );
    slugTimestampDataView.setUint32(0, nanosecondsSinceEpochForSlug);
    _storeHighOrderIdentifierInBuffer(
      slugTimestampDataView,
      4,
      slugCreationTimeInSeconds,
    );
    return generateSlugTimestampByteArray;
  }
}
function getUnixTimeWithNanoseconds(_convertDateToUnixTimeAndNanoseconds) {
  var epochMilliseconds = _convertDateToUnixTimeAndNanoseconds.getTime();
  var elapsedSecondsSinceEpoch = Math.floor(epochMilliseconds / 1000);
  var nanosecondsRemainderInMicroseconds =
    (epochMilliseconds - elapsedSecondsSinceEpoch * 1000) * 1000000;
  var getAdditionalSecondsFromNanoseconds = Math.floor(
    nanosecondsRemainderInMicroseconds / 1000000000,
  );
  return {
    sec: elapsedSecondsSinceEpoch + getAdditionalSecondsFromNanoseconds,
    nsec:
      nanosecondsRemainderInMicroseconds -
      getAdditionalSecondsFromNanoseconds * 1000000000,
  };
}
function createTimestampBufferFromDateObject(createTimestampBufferFromDate) {
  if (createTimestampBufferFromDate instanceof Date) {
    var generateSlugTimestampBufferFromCreation = getUnixTimeWithNanoseconds(
      createTimestampBufferFromDate,
    );
    return createSlugTimestampBuffer(generateSlugTimestampBufferFromCreation);
  } else {
    return null;
  }
}
function convertDataBufferToEpochTimestamp(parseTimestampFromDataBuffer) {
  var timestampDataView = new DataView(
    parseTimestampFromDataBuffer.buffer,
    parseTimestampFromDataBuffer.byteOffset,
    parseTimestampFromDataBuffer.byteLength,
  );
  switch (parseTimestampFromDataBuffer.byteLength) {
    case 4: {
      var calculateTotalNanosecondsFromEpoch = timestampDataView.getUint32(0);
      var secondsSinceEpochInQuarters = 0;
      return {
        sec: calculateTotalNanosecondsFromEpoch,
        nsec: secondsSinceEpochInQuarters,
      };
    }
    case 8: {
      var getTimestampAndNanoseconds = timestampDataView.getUint32(0);
      var retrieveNanosecondsFromTimestampData = timestampDataView.getUint32(4);
      var calculateTotalNanosecondsFromEpoch =
        (getTimestampAndNanoseconds & 3) * 4294967296 +
        retrieveNanosecondsFromTimestampData;
      var secondsSinceEpochInQuarters = getTimestampAndNanoseconds >>> 2;
      return {
        sec: calculateTotalNanosecondsFromEpoch,
        nsec: secondsSinceEpochInQuarters,
      };
    }
    case 12: {
      var calculateTotalNanosecondsFromEpoch =
        createLargeRandomIntegerFromBuffer(timestampDataView, 4);
      var secondsSinceEpochInQuarters = timestampDataView.getUint32(0);
      return {
        sec: calculateTotalNanosecondsFromEpoch,
        nsec: secondsSinceEpochInQuarters,
      };
    }
    default:
      throw new generateAndEnsureUniqueSlug(
        `Unrecognized data size for timestamp (expected 4, 8, or 12): ${parseTimestampFromDataBuffer.length}`,
      );
  }
}
function transformTimestampBufferToDate(convertTimestampBufferToDate) {
  var epochTimestampFromBuffer = convertDataBufferToEpochTimestamp(
    convertTimestampBufferToDate,
  );
  return new Date(
    epochTimestampFromBuffer.sec * 1000 +
      epochTimestampFromBuffer.nsec / 1000000,
  );
}
var timestampConversionUtility = {
  type: getNextAvailableSlugID,
  encode: createTimestampBufferFromDateObject,
  decode: transformTimestampBufferToDate,
};
var initializeTimestampEncodingDecodingHandlers = (function () {
  function EncodingDecodingUtilityManager() {
    this.builtInEncoders = [];
    this.builtInDecoders = [];
    this.encoders = [];
    this.decoders = [];
    this.register(timestampConversionUtility);
  }
  EncodingDecodingUtilityManager.prototype.register = function (
    initializeTimestampEncodingDecodingHandlers,
  ) {
    var timestampEncodingHandlerTypeIndex =
      initializeTimestampEncodingDecodingHandlers.type;
    var convertTimestampToSlug =
      initializeTimestampEncodingDecodingHandlers.encode;
    var decodeSlugToTimestamp =
      initializeTimestampEncodingDecodingHandlers.decode;
    if (timestampEncodingHandlerTypeIndex >= 0) {
      this.encoders[timestampEncodingHandlerTypeIndex] = convertTimestampToSlug;
      this.decoders[timestampEncodingHandlerTypeIndex] = decodeSlugToTimestamp;
    } else {
      var timestampEncoderDecoderOffset = 1 + timestampEncodingHandlerTypeIndex;
      this.builtInEncoders[timestampEncoderDecoderOffset] =
        convertTimestampToSlug;
      this.builtInDecoders[timestampEncoderDecoderOffset] =
        decodeSlugToTimestamp;
    }
  };
  EncodingDecodingUtilityManager.prototype.tryToEncode = function (
    isSlugValidForEncoding,
    isTimestampSlugFormatValid,
  ) {
    for (
      var activeEncoderIndex = 0;
      activeEncoderIndex < this.builtInEncoders.length;
      activeEncoderIndex++
    ) {
      var currentEncoder = this.builtInEncoders[activeEncoderIndex];
      if (currentEncoder != null) {
        var generateEncodedSlugIfValid = currentEncoder(
          isSlugValidForEncoding,
          isTimestampSlugFormatValid,
        );
        if (generateEncodedSlugIfValid != null) {
          var getSlugOffsetBasedOnActiveEncoderIndex = -1 - activeEncoderIndex;
          return new createUniqueSlugGenerator(
            getSlugOffsetBasedOnActiveEncoderIndex,
            generateEncodedSlugIfValid,
          );
        }
      }
    }
    for (
      var activeEncoderIndex = 0;
      activeEncoderIndex < this.encoders.length;
      activeEncoderIndex++
    ) {
      var currentEncoder = this.encoders[activeEncoderIndex];
      if (currentEncoder != null) {
        var generateEncodedSlugIfValid = currentEncoder(
          isSlugValidForEncoding,
          isTimestampSlugFormatValid,
        );
        if (generateEncodedSlugIfValid != null) {
          var getSlugOffsetBasedOnActiveEncoderIndex = activeEncoderIndex;
          return new createUniqueSlugGenerator(
            getSlugOffsetBasedOnActiveEncoderIndex,
            generateEncodedSlugIfValid,
          );
        }
      }
    }
    if (isSlugValidForEncoding instanceof createUniqueSlugGenerator) {
      return isSlugValidForEncoding;
    } else {
      return null;
    }
  };
  EncodingDecodingUtilityManager.prototype.decode = function (
    decodeDataUsingActiveDecoder,
    getActiveDecoderIndex,
    initializeSlugEncodingHandlers,
  ) {
    var getCurrentDecoderBasedOnIndex =
      getActiveDecoderIndex < 0
        ? this.builtInDecoders[-1 - getActiveDecoderIndex]
        : this.decoders[getActiveDecoderIndex];
    if (getCurrentDecoderBasedOnIndex) {
      return getCurrentDecoderBasedOnIndex(
        decodeDataUsingActiveDecoder,
        getActiveDecoderIndex,
        initializeSlugEncodingHandlers,
      );
    } else {
      return new createUniqueSlugGenerator(
        getActiveDecoderIndex,
        decodeDataUsingActiveDecoder,
      );
    }
  };
  EncodingDecodingUtilityManager.defaultCodec =
    new EncodingDecodingUtilityManager();
  return EncodingDecodingUtilityManager;
})();
function convertToUint8Array(_getUint8ArrayFromInput) {
  if (_getUint8ArrayFromInput instanceof Uint8Array) {
    return _getUint8ArrayFromInput;
  } else if (ArrayBuffer.isView(_getUint8ArrayFromInput)) {
    return new Uint8Array(
      _getUint8ArrayFromInput.buffer,
      _getUint8ArrayFromInput.byteOffset,
      _getUint8ArrayFromInput.byteLength,
    );
  } else if (_getUint8ArrayFromInput instanceof ArrayBuffer) {
    return new Uint8Array(_getUint8ArrayFromInput);
  } else {
    return Uint8Array.from(_getUint8ArrayFromInput);
  }
}
function createDataViewFromInput(createDataViewFromArrayBufferOrView) {
  if (createDataViewFromArrayBufferOrView instanceof ArrayBuffer) {
    return new DataView(createDataViewFromArrayBufferOrView);
  }
  var convertInputToUint8Array = convertToUint8Array(
    createDataViewFromArrayBufferOrView,
  );
  return new DataView(
    convertInputToUint8Array.buffer,
    convertInputToUint8Array.byteOffset,
    convertInputToUint8Array.byteLength,
  );
}
var maxSlugLength = 100;
var maxSlugCharacterLimit = 2048;
var createTimestampedSlug = (function () {
  function TimestampSlugGenerator(
    _initializeTimestampEncodingDecodingHandlers = initializeTimestampEncodingDecodingHandlers.defaultCodec,
    initializationValue = undefined,
    _maxSlugLength = maxSlugLength,
    generateSlugWithCharacterLimit = maxSlugCharacterLimit,
    _isUserLoggedIn = false,
    isUserLoggedIn = false,
    userIsLoggedIn = false,
    dataProcessingFinished = false,
  ) {
    this.extensionCodec = _initializeTimestampEncodingDecodingHandlers;
    this.context = initializationValue;
    this.maxDepth = _maxSlugLength;
    this.initialBufferSize = generateSlugWithCharacterLimit;
    this.sortKeys = _isUserLoggedIn;
    this.forceFloat32 = isUserLoggedIn;
    this.ignoreUndefined = userIsLoggedIn;
    this.forceIntegerToFloat = dataProcessingFinished;
    this.pos = 0;
    this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
    this.bytes = new Uint8Array(this.view.buffer);
  }
  TimestampSlugGenerator.prototype.reinitializeState = function () {
    this.pos = 0;
  };
  TimestampSlugGenerator.prototype.encodeSharedRef = function (
    encodeDataWithTimestamp,
  ) {
    this.reinitializeState();
    this.doEncode(encodeDataWithTimestamp, 1);
    return this.bytes.subarray(0, this.pos);
  };
  TimestampSlugGenerator.prototype.encode = function (encodeValueWithDepth) {
    this.reinitializeState();
    this.doEncode(encodeValueWithDepth, 1);
    return this.bytes.slice(0, this.pos);
  };
  TimestampSlugGenerator.prototype.doEncode = function (
    encodeValueForSerialization,
    currentEncodingDepth,
  ) {
    if (currentEncodingDepth > this.maxDepth) {
      throw new Error(`Too deep objects in depth ${currentEncodingDepth}`);
    }
    if (encodeValueForSerialization == null) {
      this.encodeNil();
    } else if (typeof encodeValueForSerialization == "boolean") {
      this.encodeBoolean(encodeValueForSerialization);
    } else if (typeof encodeValueForSerialization == "number") {
      this.encodeNumber(encodeValueForSerialization);
    } else if (typeof encodeValueForSerialization == "string") {
      this.encodeString(encodeValueForSerialization);
    } else {
      this.encodeObject(encodeValueForSerialization, currentEncodingDepth);
    }
  };
  TimestampSlugGenerator.prototype.ensureBufferSizeToWrite = function (
    ensureSufficientBufferSize,
  ) {
    var calculateRequiredBufferSizeForEncoding =
      this.pos + ensureSufficientBufferSize;
    if (this.view.byteLength < calculateRequiredBufferSizeForEncoding) {
      this.resizeBuffer(calculateRequiredBufferSizeForEncoding * 2);
    }
  };
  TimestampSlugGenerator.prototype.resizeBuffer = function (
    resizeBufferAndUpdatePositionToFitBufferRequirements,
  ) {
    var allocateAndInitializeBufferForSlug = new ArrayBuffer(
      resizeBufferAndUpdatePositionToFitBufferRequirements,
    );
    var initializeSlugByteArrayWithResize = new Uint8Array(
      allocateAndInitializeBufferForSlug,
    );
    var createSlugDataViewWithBuffer = new DataView(
      allocateAndInitializeBufferForSlug,
    );
    initializeSlugByteArrayWithResize.set(this.bytes);
    this.view = createSlugDataViewWithBuffer;
    this.bytes = initializeSlugByteArrayWithResize;
  };
  TimestampSlugGenerator.prototype.encodeNil = function () {
    this.writeU8(192);
  };
  TimestampSlugGenerator.prototype.encodeBoolean = function (
    encodeBooleanToUint8,
  ) {
    if (encodeBooleanToUint8 === false) {
      this.writeU8(194);
    } else {
      this.writeU8(195);
    }
  };
  TimestampSlugGenerator.prototype.encodeNumber = function (
    encodeSafeIntegerToByte,
  ) {
    if (
      Number.isSafeInteger(encodeSafeIntegerToByte) &&
      !this.forceIntegerToFloat
    ) {
      if (encodeSafeIntegerToByte >= 0) {
        if (encodeSafeIntegerToByte < 128) {
          this.writeU8(encodeSafeIntegerToByte);
        } else if (encodeSafeIntegerToByte < 256) {
          this.writeU8(204);
          this.writeU8(encodeSafeIntegerToByte);
        } else if (encodeSafeIntegerToByte < 65536) {
          this.writeU8(205);
          this.writeU16(encodeSafeIntegerToByte);
        } else if (encodeSafeIntegerToByte < 4294967296) {
          this.writeU8(206);
          this.writeU32(encodeSafeIntegerToByte);
        } else {
          this.writeU8(207);
          this.writeU64(encodeSafeIntegerToByte);
        }
      } else if (encodeSafeIntegerToByte >= -32) {
        this.writeU8((encodeSafeIntegerToByte + 32) | 224);
      } else if (encodeSafeIntegerToByte >= -128) {
        this.writeU8(208);
        this.writeI8(encodeSafeIntegerToByte);
      } else if (encodeSafeIntegerToByte >= -32768) {
        this.writeU8(209);
        this.writeI16(encodeSafeIntegerToByte);
      } else if (encodeSafeIntegerToByte >= -2147483648) {
        this.writeU8(210);
        this.writeI32(encodeSafeIntegerToByte);
      } else {
        this.writeU8(211);
        this.writeI64(encodeSafeIntegerToByte);
      }
    } else if (this.forceFloat32) {
      this.writeU8(202);
      this.writeF32(encodeSafeIntegerToByte);
    } else {
      this.writeU8(203);
      this.writeF64(encodeSafeIntegerToByte);
    }
  };
  TimestampSlugGenerator.prototype.writeStringHeader = function (
    calculatePrefixedStringLength,
  ) {
    if (calculatePrefixedStringLength < 32) {
      this.writeU8(160 + calculatePrefixedStringLength);
    } else if (calculatePrefixedStringLength < 256) {
      this.writeU8(217);
      this.writeU8(calculatePrefixedStringLength);
    } else if (calculatePrefixedStringLength < 65536) {
      this.writeU8(218);
      this.writeU16(calculatePrefixedStringLength);
    } else if (calculatePrefixedStringLength < 4294967296) {
      this.writeU8(219);
      this.writeU32(calculatePrefixedStringLength);
    } else {
      throw new Error(
        `Too long string: ${calculatePrefixedStringLength} bytes in UTF-8`,
      );
    }
  };
  TimestampSlugGenerator.prototype.encodeString = function (
    prepareSlugForEncoding,
  ) {
    var slugEncodingBufferPadding = 5;
    var prepareSlugLength = prepareSlugForEncoding.length;
    if (prepareSlugLength > determineTextEncodingIdentifier) {
      var slugUtf8ByteLength = calculateSlugUtf8ByteLength(
        prepareSlugForEncoding,
      );
      this.ensureBufferSizeToWrite(
        slugEncodingBufferPadding + slugUtf8ByteLength,
      );
      this.writeStringHeader(slugUtf8ByteLength);
      selectEncodingFunctionBasedOnTextEncoderAvailability(
        prepareSlugForEncoding,
        this.bytes,
        this.pos,
      );
      this.pos += slugUtf8ByteLength;
    } else {
      var slugUtf8ByteLength = calculateSlugUtf8ByteLength(
        prepareSlugForEncoding,
      );
      this.ensureBufferSizeToWrite(
        slugEncodingBufferPadding + slugUtf8ByteLength,
      );
      this.writeStringHeader(slugUtf8ByteLength);
      _filterDisallowedCharactersFromSlug(
        prepareSlugForEncoding,
        this.bytes,
        this.pos,
      );
      this.pos += slugUtf8ByteLength;
    }
  };
  TimestampSlugGenerator.prototype.encodeObject = function (
    inputForSlugGeneration,
    encodeInputToSlug,
  ) {
    var encodedSlug = this.extensionCodec.tryToEncode(
      inputForSlugGeneration,
      this.context,
    );
    if (encodedSlug != null) {
      this.encodeExtension(encodedSlug);
    } else if (Array.isArray(inputForSlugGeneration)) {
      this.encodeArray(inputForSlugGeneration, encodeInputToSlug);
    } else if (ArrayBuffer.isView(inputForSlugGeneration)) {
      this.encodeBinary(inputForSlugGeneration);
    } else if (typeof inputForSlugGeneration == "object") {
      this.encodeMap(inputForSlugGeneration, encodeInputToSlug);
    } else {
      throw new Error(
        `Unrecognized object: ${Object.prototype.toString.apply(inputForSlugGeneration)}`,
      );
    }
  };
  TimestampSlugGenerator.prototype.encodeBinary = function (
    calculateUtf8ByteLengthForSlug,
  ) {
    var writeUtf8ByteLengthAndSlug = calculateUtf8ByteLengthForSlug.byteLength;
    if (writeUtf8ByteLengthAndSlug < 256) {
      this.writeU8(196);
      this.writeU8(writeUtf8ByteLengthAndSlug);
    } else if (writeUtf8ByteLengthAndSlug < 65536) {
      this.writeU8(197);
      this.writeU16(writeUtf8ByteLengthAndSlug);
    } else if (writeUtf8ByteLengthAndSlug < 4294967296) {
      this.writeU8(198);
      this.writeU32(writeUtf8ByteLengthAndSlug);
    } else {
      throw new Error(`Too large binary: ${writeUtf8ByteLengthAndSlug}`);
    }
    var writeSlugAsBinaryWithUtf8ByteLength = convertToUint8Array(
      calculateUtf8ByteLengthForSlug,
    );
    this.writeU8a(writeSlugAsBinaryWithUtf8ByteLength);
  };
  TimestampSlugGenerator.prototype.encodeArray = function (
    getBinarySlugLengthArray,
    encodeAndStoreSlugBytes,
  ) {
    var binarySlugLengthCount = getBinarySlugLengthArray.length;
    if (binarySlugLengthCount < 16) {
      this.writeU8(144 + binarySlugLengthCount);
    } else if (binarySlugLengthCount < 65536) {
      this.writeU8(220);
      this.writeU16(binarySlugLengthCount);
    } else if (binarySlugLengthCount < 4294967296) {
      this.writeU8(221);
      this.writeU32(binarySlugLengthCount);
    } else {
      throw new Error(`Too large array: ${binarySlugLengthCount}`);
    }
    for (
      var currentBinarySlugLengthIndex = 0,
        binarySlugLengthsArray = getBinarySlugLengthArray;
      currentBinarySlugLengthIndex < binarySlugLengthsArray.length;
      currentBinarySlugLengthIndex++
    ) {
      var currentBinarySlugLength =
        binarySlugLengthsArray[currentBinarySlugLengthIndex];
      this.doEncode(currentBinarySlugLength, encodeAndStoreSlugBytes + 1);
    }
  };
  TimestampSlugGenerator.prototype.countWithoutUndefined = function (
    countValidDecodingsForStatus,
    getValidDecodingCount,
  ) {
    var countOfValidDecodings = 0;
    for (
      var validationIndexForValidDecodings = 0,
        validDecodingCountList = getValidDecodingCount;
      validationIndexForValidDecodings < validDecodingCountList.length;
      validationIndexForValidDecodings++
    ) {
      var currentDecodingValidationStatus =
        validDecodingCountList[validationIndexForValidDecodings];
      if (
        countValidDecodingsForStatus[currentDecodingValidationStatus] !==
        undefined
      ) {
        countOfValidDecodings++;
      }
    }
    return countOfValidDecodings;
  };
  TimestampSlugGenerator.prototype.encodeMap = function (
    generateEncodedIdentifierMap,
    generateSlugFromBinaryData,
  ) {
    var sortedIdentifierKeysArray = Object.keys(generateEncodedIdentifierMap);
    if (this.sortKeys) {
      sortedIdentifierKeysArray.sort();
    }
    var encodedIdentifierCount = this.ignoreUndefined
      ? this.countWithoutUndefined(
          generateEncodedIdentifierMap,
          sortedIdentifierKeysArray,
        )
      : sortedIdentifierKeysArray.length;
    if (encodedIdentifierCount < 16) {
      this.writeU8(128 + encodedIdentifierCount);
    } else if (encodedIdentifierCount < 65536) {
      this.writeU8(222);
      this.writeU16(encodedIdentifierCount);
    } else if (encodedIdentifierCount < 4294967296) {
      this.writeU8(223);
      this.writeU32(encodedIdentifierCount);
    } else {
      throw new Error(`Too large map object: ${encodedIdentifierCount}`);
    }
    for (
      var currentSortingKeyIndex = 0,
        sortedIdentifierKeys = sortedIdentifierKeysArray;
      currentSortingKeyIndex < sortedIdentifierKeys.length;
      currentSortingKeyIndex++
    ) {
      var activeSortingKey = sortedIdentifierKeys[currentSortingKeyIndex];
      var encodedMapValueForActiveSortKey =
        generateEncodedIdentifierMap[activeSortingKey];
      if (
        !this.ignoreUndefined ||
        encodedMapValueForActiveSortKey !== undefined
      ) {
        this.encodeString(activeSortingKey);
        this.doEncode(
          encodedMapValueForActiveSortKey,
          generateSlugFromBinaryData + 1,
        );
      }
    }
  };
  TimestampSlugGenerator.prototype.encodeExtension = function (
    countEncodedIdentifiersInMap,
  ) {
    var countOfEncodedIdentifiers = countEncodedIdentifiersInMap.data.length;
    if (countOfEncodedIdentifiers === 1) {
      this.writeU8(212);
    } else if (countOfEncodedIdentifiers === 2) {
      this.writeU8(213);
    } else if (countOfEncodedIdentifiers === 4) {
      this.writeU8(214);
    } else if (countOfEncodedIdentifiers === 8) {
      this.writeU8(215);
    } else if (countOfEncodedIdentifiers === 16) {
      this.writeU8(216);
    } else if (countOfEncodedIdentifiers < 256) {
      this.writeU8(199);
      this.writeU8(countOfEncodedIdentifiers);
    } else if (countOfEncodedIdentifiers < 65536) {
      this.writeU8(200);
      this.writeU16(countOfEncodedIdentifiers);
    } else if (countOfEncodedIdentifiers < 4294967296) {
      this.writeU8(201);
      this.writeU32(countOfEncodedIdentifiers);
    } else {
      throw new Error(
        `Too large extension object: ${countOfEncodedIdentifiers}`,
      );
    }
    this.writeI8(countEncodedIdentifiersInMap.type);
    this.writeU8a(countEncodedIdentifiersInMap.data);
  };
  TimestampSlugGenerator.prototype.writeU8 = function (writeUnsigned8Bit) {
    this.ensureBufferSizeToWrite(1);
    this.view.setUint8(this.pos, writeUnsigned8Bit);
    this.pos++;
  };
  TimestampSlugGenerator.prototype.writeU8a = function (
    writeEncodedIdentifierData,
  ) {
    var determineAndWriteEncodedIdentifierSize =
      writeEncodedIdentifierData.length;
    this.ensureBufferSizeToWrite(determineAndWriteEncodedIdentifierSize);
    this.bytes.set(writeEncodedIdentifierData, this.pos);
    this.pos += determineAndWriteEncodedIdentifierSize;
  };
  TimestampSlugGenerator.prototype.writeI8 = function (
    appendSigned8BitToBuffer,
  ) {
    this.ensureBufferSizeToWrite(1);
    this.view.setInt8(this.pos, appendSigned8BitToBuffer);
    this.pos++;
  };
  TimestampSlugGenerator.prototype.writeU16 = function (
    writeEncodedUniqueIdentifierSize,
  ) {
    this.ensureBufferSizeToWrite(2);
    this.view.setUint16(this.pos, writeEncodedUniqueIdentifierSize);
    this.pos += 2;
  };
  TimestampSlugGenerator.prototype.writeI16 = function (
    writeSignedInt16ToBuffer,
  ) {
    this.ensureBufferSizeToWrite(2);
    this.view.setInt16(this.pos, writeSignedInt16ToBuffer);
    this.pos += 2;
  };
  TimestampSlugGenerator.prototype.writeU32 = function (
    writeEncodedIdentifierLength,
  ) {
    this.ensureBufferSizeToWrite(4);
    this.view.setUint32(this.pos, writeEncodedIdentifierLength);
    this.pos += 4;
  };
  TimestampSlugGenerator.prototype.writeI32 = function (
    writeSignedInt16ToBuffer,
  ) {
    this.ensureBufferSizeToWrite(4);
    this.view.setInt32(this.pos, writeSignedInt16ToBuffer);
    this.pos += 4;
  };
  TimestampSlugGenerator.prototype.writeF32 = function (writeFloat32ToBuffer) {
    this.ensureBufferSizeToWrite(4);
    this.view.setFloat32(this.pos, writeFloat32ToBuffer);
    this.pos += 4;
  };
  TimestampSlugGenerator.prototype.writeF64 = function (writeDoubleToBuffer) {
    this.ensureBufferSizeToWrite(8);
    this.view.setFloat64(this.pos, writeDoubleToBuffer);
    this.pos += 8;
  };
  TimestampSlugGenerator.prototype.writeU64 = function (
    writeUnsignedLongToBuffer,
  ) {
    this.ensureBufferSizeToWrite(8);
    storeNormalizedValueWithIdentifier(
      this.view,
      this.pos,
      writeUnsignedLongToBuffer,
    );
    this.pos += 8;
  };
  TimestampSlugGenerator.prototype.writeI64 = function (
    writeSignedInt64ToBuffer,
  ) {
    this.ensureBufferSizeToWrite(8);
    _storeHighOrderIdentifierInBuffer(
      this.view,
      this.pos,
      writeSignedInt64ToBuffer,
    );
    this.pos += 8;
  };
  return TimestampSlugGenerator;
})();
var defaultUnsignedLongTimestampSerializer = {};
function createTimestampedSlugFromUser(
  TimestampedSlugGenerator,
  defaultTimestampToUnsignedLongSerializer = defaultUnsignedLongTimestampSerializer,
) {
  var timestampedSlugEncoderInstance = new createTimestampedSlug(
    defaultTimestampToUnsignedLongSerializer.extensionCodec,
    defaultTimestampToUnsignedLongSerializer.context,
    defaultTimestampToUnsignedLongSerializer.maxDepth,
    defaultTimestampToUnsignedLongSerializer.initialBufferSize,
    defaultTimestampToUnsignedLongSerializer.sortKeys,
    defaultTimestampToUnsignedLongSerializer.forceFloat32,
    defaultTimestampToUnsignedLongSerializer.ignoreUndefined,
    defaultTimestampToUnsignedLongSerializer.forceIntegerToFloat,
  );
  return timestampedSlugEncoderInstance.encodeSharedRef(
    TimestampedSlugGenerator,
  );
}
function formatIntegerAsSignedHexadecimal(_convertIntegerToSignedHexString) {
  return `${_convertIntegerToSignedHexString < 0 ? "-" : ""}0x${Math.abs(_convertIntegerToSignedHexString).toString(16).padStart(2, "0")}`;
}
var defaultMaxCacheKeyLengthForSlug = 16;
var maxCacheKeyLengthForSlugGeneration = 16;
var initializeSlugCacheConfig = (function () {
  function SlugCacheHandler(
    maxCacheKeyLengthForSlug = defaultMaxCacheKeyLengthForSlug,
    maxSlugCacheKeyLength = maxCacheKeyLengthForSlugGeneration,
  ) {
    this.maxKeyLength = maxCacheKeyLengthForSlug;
    this.maxLengthPerKey = maxSlugCacheKeyLength;
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
  SlugCacheHandler.prototype.canBeCached = function (isValidCacheDuration) {
    return (
      isValidCacheDuration > 0 && isValidCacheDuration <= this.maxKeyLength
    );
  };
  SlugCacheHandler.prototype.find = function (
    retrieveCacheEntriesByDuration,
    retrieveCacheEntryWithinExpiryDuration,
    getCacheIndexForExpiryDuration,
  ) {
    var getValidCacheEntriesForDuration =
      this.caches[getCacheIndexForExpiryDuration - 1];
    _0x2d51f0: for (
      var currentCacheEntryIndex = 0,
        validCacheEntries = getValidCacheEntriesForDuration;
      currentCacheEntryIndex < validCacheEntries.length;
      currentCacheEntryIndex++
    ) {
      var currentCacheEntryData = validCacheEntries[currentCacheEntryIndex];
      var getBytesFromCurrentCacheEntry = currentCacheEntryData.bytes;
      for (
        var _currentCacheEntryIndex = 0;
        _currentCacheEntryIndex < getCacheIndexForExpiryDuration;
        _currentCacheEntryIndex++
      ) {
        if (
          getBytesFromCurrentCacheEntry[_currentCacheEntryIndex] !==
          retrieveCacheEntriesByDuration[
            retrieveCacheEntryWithinExpiryDuration + _currentCacheEntryIndex
          ]
        ) {
          continue _0x2d51f0;
        }
      }
      return currentCacheEntryData.str;
    }
    return null;
  };
  SlugCacheHandler.prototype.store = function (
    storeCacheEntryWithExpiry,
    _cacheEntryDataWithExpiry,
  ) {
    var currentCacheEntries = this.caches[storeCacheEntryWithExpiry.length - 1];
    var _storeCacheEntryWithExpiry = {
      bytes: storeCacheEntryWithExpiry,
      str: _cacheEntryDataWithExpiry,
    };
    if (currentCacheEntries.length >= this.maxLengthPerKey) {
      currentCacheEntries[(Math.random() * currentCacheEntries.length) | 0] =
        _storeCacheEntryWithExpiry;
    } else {
      currentCacheEntries.push(_storeCacheEntryWithExpiry);
    }
  };
  SlugCacheHandler.prototype.decode = function (
    retrieveValidCacheEntryByTimestamp,
    retrieveValidCacheEntryIfActive,
    retrieveValidCacheEntryWithinTimeFrame,
  ) {
    var foundValidCacheEntry = this.find(
      retrieveValidCacheEntryByTimestamp,
      retrieveValidCacheEntryIfActive,
      retrieveValidCacheEntryWithinTimeFrame,
    );
    if (foundValidCacheEntry != null) {
      this.hit++;
      return foundValidCacheEntry;
    }
    this.miss++;
    var generateCacheSegmentKey = extractAndAggregateUniqueIdentifiers(
      retrieveValidCacheEntryByTimestamp,
      retrieveValidCacheEntryIfActive,
      retrieveValidCacheEntryWithinTimeFrame,
    );
    var getCacheSegmentFromEntry = Uint8Array.prototype.slice.call(
      retrieveValidCacheEntryByTimestamp,
      retrieveValidCacheEntryIfActive,
      retrieveValidCacheEntryIfActive + retrieveValidCacheEntryWithinTimeFrame,
    );
    this.store(getCacheSegmentFromEntry, generateCacheSegmentKey);
    return generateCacheSegmentKey;
  };
  return SlugCacheHandler;
})();
function initializeCacheIdentifierIfNeeded(
  retrieveOrInitializeCacheWithExpiry,
  retrieveOrCreateCacheEntry,
  createUniqueCacheEntryKey,
  handleCacheEntryLifecycle,
) {
  function getOrCreateUniqueCacheKey(retrieveOrInitializeCacheEntryKey) {
    if (
      retrieveOrInitializeCacheEntryKey instanceof createUniqueCacheEntryKey
    ) {
      return retrieveOrInitializeCacheEntryKey;
    } else {
      return new createUniqueCacheEntryKey(function (
        generateUniqueCacheKeyFromInput,
      ) {
        generateUniqueCacheKeyFromInput(retrieveOrInitializeCacheEntryKey);
      });
    }
  }
  return new (createUniqueCacheEntryKey ||= Promise)(function (
    createCacheIdentifierWithTimestamp,
    handleCacheIdentifierErrorHandling,
  ) {
    function createCacheKeyWithTimestamp(generateCacheKeyFromResponseData) {
      try {
        processCacheEntryLifecycleResult(
          handleCacheEntryLifecycle.next(generateCacheKeyFromResponseData),
        );
      } catch (handleCacheIdentifierError) {
        handleCacheIdentifierErrorHandling(handleCacheIdentifierError);
      }
    }
    function processCacheIdentifierError(_handleCacheIdentifierError) {
      try {
        processCacheEntryLifecycleResult(
          handleCacheEntryLifecycle.throw(_handleCacheIdentifierError),
        );
      } catch (handleInputCacheErrorAndManage) {
        handleCacheIdentifierErrorHandling(handleInputCacheErrorAndManage);
      }
    }
    function processCacheEntryLifecycleResult(
      handleCacheEntryLifecycleOutcome,
    ) {
      if (handleCacheEntryLifecycleOutcome.done) {
        createCacheIdentifierWithTimestamp(
          handleCacheEntryLifecycleOutcome.value,
        );
      } else {
        getOrCreateUniqueCacheKey(handleCacheEntryLifecycleOutcome.value).then(
          createCacheKeyWithTimestamp,
          processCacheIdentifierError,
        );
      }
    }
    processCacheEntryLifecycleResult(
      (handleCacheEntryLifecycle = handleCacheEntryLifecycle.apply(
        retrieveOrInitializeCacheWithExpiry,
        retrieveOrCreateCacheEntry || [],
      )).next(),
    );
  });
}
function manageSlugIdentifierLifecycle(
  retrieveOrGenerateUniqueSlugIdentifier,
  createOrFetchUniqueIdentifierFromSlug,
) {
  var slugIdentifierCreationState = {
    label: 0,
    sent() {
      if (slugIdentifierYieldState[0] & 1) {
        throw slugIdentifierYieldState[1];
      }
      return slugIdentifierYieldState[1];
    },
    trys: [],
    ops: [],
  };
  var isSlugIdentifierCreationAllowed;
  var slugIdentifierLifecycleManager;
  var slugIdentifierYieldState;
  var _slugIdentifierLifecycleManager;
  _slugIdentifierLifecycleManager = {
    next: initializeSlugIdentifierHandler(0),
    throw: initializeSlugIdentifierHandler(1),
    return: initializeSlugIdentifierHandler(2),
  };
  if (typeof Symbol == "function") {
    _slugIdentifierLifecycleManager[Symbol.iterator] = function () {
      return this;
    };
  }
  return _slugIdentifierLifecycleManager;
  function initializeSlugIdentifierHandler(handleSlugIdentifierLifecycle) {
    return function (generateUniqueSlugIdentifier) {
      return createSlugUniqueIdentifier([
        handleSlugIdentifierLifecycle,
        generateUniqueSlugIdentifier,
      ]);
    };
  }
  function createSlugUniqueIdentifier(generateUniqueIdFromSlugSegment) {
    if (isSlugIdentifierCreationAllowed) {
      throw new TypeError("Generator is already executing.");
    }
    while (slugIdentifierCreationState) {
      try {
        isSlugIdentifierCreationAllowed = 1;
        if (
          slugIdentifierLifecycleManager &&
          (slugIdentifierYieldState =
            generateUniqueIdFromSlugSegment[0] & 2
              ? slugIdentifierLifecycleManager.return
              : generateUniqueIdFromSlugSegment[0]
                ? slugIdentifierLifecycleManager.throw ||
                  ((slugIdentifierYieldState =
                    slugIdentifierLifecycleManager.return) &&
                    slugIdentifierYieldState.call(
                      slugIdentifierLifecycleManager,
                    ),
                  0)
                : slugIdentifierLifecycleManager.next) &&
          !(slugIdentifierYieldState = slugIdentifierYieldState.call(
            slugIdentifierLifecycleManager,
            generateUniqueIdFromSlugSegment[1],
          )).done
        ) {
          return slugIdentifierYieldState;
        }
        slugIdentifierLifecycleManager = 0;
        if (slugIdentifierYieldState) {
          generateUniqueIdFromSlugSegment = [
            generateUniqueIdFromSlugSegment[0] & 2,
            slugIdentifierYieldState.value,
          ];
        }
        switch (generateUniqueIdFromSlugSegment[0]) {
          case 0:
          case 1:
            slugIdentifierYieldState = generateUniqueIdFromSlugSegment;
            break;
          case 4:
            slugIdentifierCreationState.label++;
            return {
              value: generateUniqueIdFromSlugSegment[1],
              done: false,
            };
          case 5:
            slugIdentifierCreationState.label++;
            slugIdentifierLifecycleManager = generateUniqueIdFromSlugSegment[1];
            generateUniqueIdFromSlugSegment = [0];
            continue;
          case 7:
            generateUniqueIdFromSlugSegment =
              slugIdentifierCreationState.ops.pop();
            slugIdentifierCreationState.trys.pop();
            continue;
          default:
            slugIdentifierYieldState = slugIdentifierCreationState.trys;
            if (
              !(slugIdentifierYieldState =
                slugIdentifierYieldState.length > 0 &&
                slugIdentifierYieldState[
                  slugIdentifierYieldState.length - 1
                ]) &&
              (generateUniqueIdFromSlugSegment[0] === 6 ||
                generateUniqueIdFromSlugSegment[0] === 2)
            ) {
              slugIdentifierCreationState = 0;
              continue;
            }
            if (
              generateUniqueIdFromSlugSegment[0] === 3 &&
              (!slugIdentifierYieldState ||
                (generateUniqueIdFromSlugSegment[1] >
                  slugIdentifierYieldState[0] &&
                  generateUniqueIdFromSlugSegment[1] <
                    slugIdentifierYieldState[3]))
            ) {
              slugIdentifierCreationState.label =
                generateUniqueIdFromSlugSegment[1];
              break;
            }
            if (
              generateUniqueIdFromSlugSegment[0] === 6 &&
              slugIdentifierCreationState.label < slugIdentifierYieldState[1]
            ) {
              slugIdentifierCreationState.label = slugIdentifierYieldState[1];
              slugIdentifierYieldState = generateUniqueIdFromSlugSegment;
              break;
            }
            if (
              slugIdentifierYieldState &&
              slugIdentifierCreationState.label < slugIdentifierYieldState[2]
            ) {
              slugIdentifierCreationState.label = slugIdentifierYieldState[2];
              slugIdentifierCreationState.ops.push(
                generateUniqueIdFromSlugSegment,
              );
              break;
            }
            if (slugIdentifierYieldState[2]) {
              slugIdentifierCreationState.ops.pop();
            }
            slugIdentifierCreationState.trys.pop();
            continue;
        }
        generateUniqueIdFromSlugSegment =
          createOrFetchUniqueIdentifierFromSlug.call(
            retrieveOrGenerateUniqueSlugIdentifier,
            slugIdentifierCreationState,
          );
      } catch (handleSlugDecodingError) {
        generateUniqueIdFromSlugSegment = [6, handleSlugDecodingError];
        slugIdentifierLifecycleManager = 0;
      } finally {
        isSlugIdentifierCreationAllowed = slugIdentifierYieldState = 0;
      }
    }
    if (generateUniqueIdFromSlugSegment[0] & 5) {
      throw generateUniqueIdFromSlugSegment[1];
    }
    return {
      value: generateUniqueIdFromSlugSegment[0]
        ? generateUniqueIdFromSlugSegment[1]
        : undefined,
      done: true,
    };
  }
}
function createAsyncIteratorFromIterable(generateAsyncIterableFromIterator) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var retrieveAsyncIteratorFromIterable =
    generateAsyncIterableFromIterator[Symbol.asyncIterator];
  var initializeAsyncIterableBuffer;
  if (retrieveAsyncIteratorFromIterable) {
    return retrieveAsyncIteratorFromIterable.call(
      generateAsyncIterableFromIterator,
    );
  } else {
    if (typeof __values == "function") {
      generateAsyncIterableFromIterator = __values(
        generateAsyncIterableFromIterator,
      );
    } else {
      generateAsyncIterableFromIterator =
        generateAsyncIterableFromIterator[Symbol.iterator]();
    }
    initializeAsyncIterableBuffer = {};
    setupAsyncIterableBufferHandler("next");
    setupAsyncIterableBufferHandler("throw");
    setupAsyncIterableBufferHandler("return");
    initializeAsyncIterableBuffer[Symbol.asyncIterator] = function () {
      return this;
    };
    return initializeAsyncIterableBuffer;
  }
  function setupAsyncIterableBufferHandler(
    initializeAsyncIterableBufferHandlers,
  ) {
    initializeAsyncIterableBuffer[initializeAsyncIterableBufferHandlers] =
      generateAsyncIterableFromIterator[
        initializeAsyncIterableBufferHandlers
      ] &&
      function (initializeAsyncIteratorBufferHandler) {
        return new Promise(function (
          _initializeAsyncBufferHandler,
          _initializeAsyncIterableBufferHandlers,
        ) {
          initializeAsyncIteratorBufferHandler =
            generateAsyncIterableFromIterator[
              initializeAsyncIterableBufferHandlers
            ](initializeAsyncIteratorBufferHandler);
          __initializeAsyncBufferProcessing(
            _initializeAsyncBufferHandler,
            _initializeAsyncIterableBufferHandlers,
            initializeAsyncIteratorBufferHandler.done,
            initializeAsyncIteratorBufferHandler.value,
          );
        });
      };
  }
  function __initializeAsyncBufferProcessing(
    setupAsyncBufferIteratorWithProcess,
    createAsyncIterableWithBufferProcessing,
    generateAsyncIterableBuffer,
    createAsyncIterableBufferFromIterator,
  ) {
    Promise.resolve(createAsyncIterableBufferFromIterator).then(function (
      initializeAsyncBufferHandlerFor,
    ) {
      setupAsyncBufferIteratorWithProcess({
        value: initializeAsyncBufferHandlerFor,
        done: generateAsyncIterableBuffer,
      });
    }, createAsyncIterableWithBufferProcessing);
  }
}
function AsyncIterableBufferManager(initializeAsyncIterableBufferHandler) {
  if (this instanceof AsyncIterableBufferManager) {
    this.v = initializeAsyncIterableBufferHandler;
    return this;
  } else {
    return new AsyncIterableBufferManager(initializeAsyncIterableBufferHandler);
  }
}
function createAsyncBufferIterator(
  processAndCreateAsyncIterableBuffer,
  processAsyncBufferTasks,
  processAsyncBufferWithIterable,
) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var processAsyncIterableBuffer = processAsyncBufferWithIterable.apply(
    processAndCreateAsyncIterableBuffer,
    processAsyncBufferTasks || [],
  );
  var _createAsyncBufferIterator;
  var asyncBufferTaskQueue = [];
  _createAsyncBufferIterator = {};
  setupAsyncBufferProcessor("next");
  setupAsyncBufferProcessor("throw");
  setupAsyncBufferProcessor("return");
  _createAsyncBufferIterator[Symbol.asyncIterator] = function () {
    return this;
  };
  return _createAsyncBufferIterator;
  function setupAsyncBufferProcessor(initializeAsyncBufferProcessing) {
    if (processAsyncIterableBuffer[initializeAsyncBufferProcessing]) {
      _createAsyncBufferIterator[initializeAsyncBufferProcessing] = function (
        __initializeAsyncBufferProcessor,
      ) {
        return new Promise(function (
          processAsyncBufferQueue,
          initializeAndScheduleAsyncDataProcessingTasks,
        ) {
          if (
            !(
              asyncBufferTaskQueue.push([
                initializeAsyncBufferProcessing,
                __initializeAsyncBufferProcessor,
                processAsyncBufferQueue,
                initializeAndScheduleAsyncDataProcessingTasks,
              ]) > 1
            )
          ) {
            __handleAsyncDataProcessingWithErrorHandling(
              initializeAsyncBufferProcessing,
              __initializeAsyncBufferProcessor,
            );
          }
        });
      };
    }
  }
  function __handleAsyncDataProcessingWithErrorHandling(
    ___initializeAsyncBufferProcessor,
    setupAsyncBufferProcessing,
  ) {
    try {
      processAsyncDataQueue(
        processAsyncIterableBuffer[___initializeAsyncBufferProcessor](
          setupAsyncBufferProcessing,
        ),
      );
    } catch (___handleAsyncDataProcessingWithErrorHandling) {
      handleNextAsyncAudioDataProcessing(
        asyncBufferTaskQueue[0][3],
        ___handleAsyncDataProcessingWithErrorHandling,
      );
    }
  }
  function processAsyncDataQueue(_initializeAsyncBufferProcessing) {
    if (
      _initializeAsyncBufferProcessing.value instanceof
      AsyncIterableBufferManager
    ) {
      Promise.resolve(_initializeAsyncBufferProcessing.value.v).then(
        enqueueNextAudioProcessingTaskAsync,
        processAsyncBufferWithErrorHandling,
      );
    } else {
      handleNextAsyncAudioDataProcessing(
        asyncBufferTaskQueue[0][2],
        _initializeAsyncBufferProcessing,
      );
    }
  }
  function enqueueNextAudioProcessingTaskAsync(enqueueAudioProcessingTasks) {
    __handleAsyncDataProcessingWithErrorHandling(
      "next",
      enqueueAudioProcessingTasks,
    );
  }
  function processAsyncBufferWithErrorHandling(
    handleAsyncBufferProcessingWithErrorHandling,
  ) {
    __handleAsyncDataProcessingWithErrorHandling(
      "throw",
      handleAsyncBufferProcessingWithErrorHandling,
    );
  }
  function handleNextAsyncAudioDataProcessing(
    handleAsyncDataProcessingWithErrorHandling,
    enqueueAndHandleAsyncAudioDataProcessing,
  ) {
    handleAsyncDataProcessingWithErrorHandling(
      enqueueAndHandleAsyncAudioDataProcessing,
    );
    asyncBufferTaskQueue.shift();
    if (asyncBufferTaskQueue.length) {
      __handleAsyncDataProcessingWithErrorHandling(
        asyncBufferTaskQueue[0][0],
        asyncBufferTaskQueue[0][1],
      );
    }
  }
}
function isValidAsyncDataTypeForProcessing(
  _handleAsyncDataProcessingWithErrorHandling,
) {
  var determineInputDataType =
    typeof _handleAsyncDataProcessingWithErrorHandling;
  return (
    determineInputDataType === "string" || determineInputDataType === "number"
  );
}
var handleAudioProcessingQueue = -1;
var handleAudioDataProcessing = new DataView(new ArrayBuffer(0));
var handleAsyncBufferProcessing = new Uint8Array(
  handleAudioDataProcessing.buffer,
);
var handleAudioDataProcessingAsync = (function () {
  try {
    handleAudioDataProcessing.getInt8(0);
  } catch (handleCatchError) {
    return handleCatchError.constructor;
  }
  throw new Error("never reached");
})();
var handleAsyncAudioDataProcessing = new handleAudioDataProcessingAsync(
  "Insufficient data",
);
var enqueueAndProcessUserAudioTasks = new initializeSlugCacheConfig();
var processAudioEncodingErrors = (function () {
  function AsyncAudioCodecConfig(
    initializeDefaultCodecTimestampHandlers = initializeTimestampEncodingDecodingHandlers.defaultCodec,
    defaultAppConfigValue = undefined,
    maxUnsignedIntegerValue = MAX_UNSIGNED_INT_VALUE,
    ___maxUnsignedIntegerValue = MAX_UNSIGNED_INT_VALUE,
    __maxUnsignedIntegerValue = MAX_UNSIGNED_INT_VALUE,
    _maxUnsignedIntegerValue = MAX_UNSIGNED_INT_VALUE,
    maxUnsignedIntValue = MAX_UNSIGNED_INT_VALUE,
    _enqueueAndProcessUserAudioTasks = enqueueAndProcessUserAudioTasks,
  ) {
    this.extensionCodec = initializeDefaultCodecTimestampHandlers;
    this.context = defaultAppConfigValue;
    this.maxStrLength = maxUnsignedIntegerValue;
    this.maxBinLength = ___maxUnsignedIntegerValue;
    this.maxArrayLength = __maxUnsignedIntegerValue;
    this.maxMapLength = _maxUnsignedIntegerValue;
    this.maxExtLength = maxUnsignedIntValue;
    this.keyDecoder = _enqueueAndProcessUserAudioTasks;
    this.totalPos = 0;
    this.pos = 0;
    this.view = handleAudioDataProcessing;
    this.bytes = handleAsyncBufferProcessing;
    this.headByte = handleAudioProcessingQueue;
    this.stack = [];
  }
  AsyncAudioCodecConfig.prototype.reinitializeState = function () {
    this.totalPos = 0;
    this.headByte = handleAudioProcessingQueue;
    this.stack.length = 0;
  };
  AsyncAudioCodecConfig.prototype.setBuffer = function (
    extractUserDataForProcessing,
  ) {
    this.bytes = convertToUint8Array(extractUserDataForProcessing);
    this.view = createDataViewFromInput(this.bytes);
    this.pos = 0;
  };
  AsyncAudioCodecConfig.prototype.appendBuffer = function (
    setupAudioBufferWithSessionId,
  ) {
    if (this.headByte === handleAudioProcessingQueue && !this.hasRemaining(1)) {
      this.setBuffer(setupAudioBufferWithSessionId);
    } else {
      var extractAudioBufferFromSession = this.bytes.subarray(this.pos);
      var createAudioCodecSettingsBuffer = convertToUint8Array(
        setupAudioBufferWithSessionId,
      );
      var mergedAudioBufferWithCodecSettings = new Uint8Array(
        extractAudioBufferFromSession.length +
          createAudioCodecSettingsBuffer.length,
      );
      mergedAudioBufferWithCodecSettings.set(extractAudioBufferFromSession);
      mergedAudioBufferWithCodecSettings.set(
        createAudioCodecSettingsBuffer,
        extractAudioBufferFromSession.length,
      );
      this.setBuffer(mergedAudioBufferWithCodecSettings);
    }
  };
  AsyncAudioCodecConfig.prototype.hasRemaining = function (
    appendUniqueSessionIdToAudioBuffer,
  ) {
    return (
      this.view.byteLength - this.pos >= appendUniqueSessionIdToAudioBuffer
    );
  };
  AsyncAudioCodecConfig.prototype.createExtraByteError = function (
    extractErrorIndexFromAudioBuffer,
  ) {
    var generateAudioBufferRangeError = this;
    var audioBufferErrorView = generateAudioBufferRangeError.view;
    var currentAudioBufferPosition = generateAudioBufferRangeError.pos;
    return new RangeError(
      `Extra ${audioBufferErrorView.byteLength - currentAudioBufferPosition} of ${audioBufferErrorView.byteLength} byte(s) found at buffer[${extractErrorIndexFromAudioBuffer}]`,
    );
  };
  AsyncAudioCodecConfig.prototype.decode = function (
    prepareAudioBufferWithSessionId,
  ) {
    this.reinitializeState();
    this.setBuffer(prepareAudioBufferWithSessionId);
    var decodedAudioBuffer = this.doDecodeSync();
    if (this.hasRemaining(1)) {
      throw this.createExtraByteError(this.pos);
    }
    return decodedAudioBuffer;
  };
  AsyncAudioCodecConfig.prototype.decodeMulti = function (
    maxAudioVideoEncodingDurationInMilliseconds,
  ) {
    return manageSlugIdentifierLifecycle(
      this,
      function (maxAudioBufferSessionIdLength) {
        switch (maxAudioBufferSessionIdLength.label) {
          case 0:
            this.reinitializeState();
            this.setBuffer(maxAudioVideoEncodingDurationInMilliseconds);
            maxAudioBufferSessionIdLength.label = 1;
          case 1:
            if (this.hasRemaining(1)) {
              return [4, this.doDecodeSync()];
            } else {
              return [3, 3];
            }
          case 2:
            maxAudioBufferSessionIdLength.sent();
            return [3, 1];
          case 3:
            return [2];
        }
      },
    );
  };
  AsyncAudioCodecConfig.prototype.decodeAsync = function (
    decodeAudioMessageDuration,
  ) {
    var calculateAudioVideoDurationFromMessage;
    var encodingProgressPercentage;
    var isEncodingCompletedForAudioVideo;
    var isAudioVideoEncodingOngoing;
    return initializeCacheIdentifierIfNeeded(
      this,
      undefined,
      undefined,
      function () {
        var shouldIncludeDurationInTimestampProcessing;
        var audioVideoMessageDurationInMillis;
        var audioVideoDurationEncodingParameter;
        var handleAudioVideoDurationExtractionForProcessing;
        var processAudioVideoDurationEncodingOutcome;
        var audioVideoProcessingOutcome;
        var handleAudioVideoTimestampDecodingWithDuration;
        var processAudioVideoTimestampsAndDurations;
        return manageSlugIdentifierLifecycle(
          this,
          function (decodeAudioVideoTimestampDuration) {
            switch (decodeAudioVideoTimestampDuration.label) {
              case 0:
                shouldIncludeDurationInTimestampProcessing = false;
                decodeAudioVideoTimestampDuration.label = 1;
              case 1:
                decodeAudioVideoTimestampDuration.trys.push([1, 6, 7, 12]);
                calculateAudioVideoDurationFromMessage =
                  createAsyncIteratorFromIterable(decodeAudioMessageDuration);
                decodeAudioVideoTimestampDuration.label = 2;
              case 2:
                return [4, calculateAudioVideoDurationFromMessage.next()];
              case 3:
                encodingProgressPercentage =
                  decodeAudioVideoTimestampDuration.sent();
                if (encodingProgressPercentage.done) {
                  return [3, 5];
                }
                audioVideoDurationEncodingParameter =
                  encodingProgressPercentage.value;
                if (shouldIncludeDurationInTimestampProcessing) {
                  throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(audioVideoDurationEncodingParameter);
                try {
                  audioVideoMessageDurationInMillis = this.doDecodeSync();
                  shouldIncludeDurationInTimestampProcessing = true;
                } catch (handleQueueProcessingError) {
                  if (
                    !(
                      handleQueueProcessingError instanceof
                      handleAudioDataProcessingAsync
                    )
                  ) {
                    throw handleQueueProcessingError;
                  }
                }
                this.totalPos += this.pos;
                decodeAudioVideoTimestampDuration.label = 4;
              case 4:
                return [3, 2];
              case 5:
                return [3, 12];
              case 6:
                handleAudioVideoDurationExtractionForProcessing =
                  decodeAudioVideoTimestampDuration.sent();
                isEncodingCompletedForAudioVideo = {
                  error: handleAudioVideoDurationExtractionForProcessing,
                };
                return [3, 12];
              case 7:
                decodeAudioVideoTimestampDuration.trys.push([7, , 10, 11]);
                if (
                  encodingProgressPercentage &&
                  !encodingProgressPercentage.done &&
                  (isAudioVideoEncodingOngoing =
                    calculateAudioVideoDurationFromMessage.return)
                ) {
                  return [
                    4,
                    isAudioVideoEncodingOngoing.call(
                      calculateAudioVideoDurationFromMessage,
                    ),
                  ];
                } else {
                  return [3, 9];
                }
              case 8:
                decodeAudioVideoTimestampDuration.sent();
                decodeAudioVideoTimestampDuration.label = 9;
              case 9:
                return [3, 11];
              case 10:
                if (isEncodingCompletedForAudioVideo) {
                  throw isEncodingCompletedForAudioVideo.error;
                }
                return [7];
              case 11:
                return [7];
              case 12:
                if (shouldIncludeDurationInTimestampProcessing) {
                  if (this.hasRemaining(1)) {
                    throw this.createExtraByteError(this.totalPos);
                  }
                  return [2, audioVideoMessageDurationInMillis];
                }
                processAudioVideoDurationEncodingOutcome = this;
                audioVideoProcessingOutcome =
                  processAudioVideoDurationEncodingOutcome.headByte;
                handleAudioVideoTimestampDecodingWithDuration =
                  processAudioVideoDurationEncodingOutcome.pos;
                processAudioVideoTimestampsAndDurations =
                  processAudioVideoDurationEncodingOutcome.totalPos;
                throw new RangeError(
                  `Insufficient data in parsing ${formatIntegerAsSignedHexadecimal(audioVideoProcessingOutcome)} at ${processAudioVideoTimestampsAndDurations} (${handleAudioVideoTimestampDecodingWithDuration} in the current buffer)`,
                );
            }
          },
        );
      },
    );
  };
  AsyncAudioCodecConfig.prototype.decodeArrayStream = function (
    createChatMessageIdForMediaStream,
  ) {
    return this.decodeMultiAsync(createChatMessageIdForMediaStream, true);
  };
  AsyncAudioCodecConfig.prototype.decodeStream = function (
    processAudioVideoDurationAndTimestamp,
  ) {
    return this.decodeMultiAsync(processAudioVideoDurationAndTimestamp, false);
  };
  AsyncAudioCodecConfig.prototype.decodeMultiAsync = function (
    handleAndValidateMediaStreamInitialization,
    createUniqueIdentifierForMediaMessages,
  ) {
    return createAsyncBufferIterator(this, arguments, function () {
      var generateChatMessageIdentifier;
      var defaultChatMessageIdentifier;
      var initializeMediaStreamDecoderAsync;
      var currentActiveChatMessageIdentifier;
      var generateChatMessageId;
      var currentChatMessageIdentifier;
      var currentActiveMediaStreamIdentifier;
      var generateChatMessageIdForCurrentInteraction;
      var generateChatMessageIdForDecoding;
      return manageSlugIdentifierLifecycle(
        this,
        function (createUniqueChatMessageIdForMediaStream) {
          switch (createUniqueChatMessageIdForMediaStream.label) {
            case 0:
              generateChatMessageIdentifier =
                createUniqueChatMessageIdForMediaStream;
              defaultChatMessageIdentifier = -1;
              createUniqueChatMessageIdForMediaStream.label = 1;
            case 1:
              createUniqueChatMessageIdForMediaStream.trys.push([
                1, 13, 14, 19,
              ]);
              initializeMediaStreamDecoderAsync =
                createAsyncIteratorFromIterable(
                  handleAndValidateMediaStreamInitialization,
                );
              createUniqueChatMessageIdForMediaStream.label = 2;
            case 2:
              return [
                4,
                AsyncIterableBufferManager(
                  initializeMediaStreamDecoderAsync.next(),
                ),
              ];
            case 3:
              currentActiveChatMessageIdentifier =
                createUniqueChatMessageIdForMediaStream.sent();
              if (currentActiveChatMessageIdentifier.done) {
                return [3, 12];
              }
              generateChatMessageId = currentActiveChatMessageIdentifier.value;
              if (
                createUniqueChatMessageIdForMediaStream &&
                defaultChatMessageIdentifier === 0
              ) {
                throw this.createExtraByteError(this.totalPos);
              }
              this.appendBuffer(generateChatMessageId);
              if (generateChatMessageIdentifier) {
                defaultChatMessageIdentifier = this.readArraySize();
                generateChatMessageIdentifier = false;
                this.complete();
              }
              createUniqueChatMessageIdForMediaStream.label = 4;
            case 4:
              createUniqueChatMessageIdForMediaStream.trys.push([4, 9, , 10]);
              createUniqueChatMessageIdForMediaStream.label = 5;
            case 5:
              return [4, AsyncIterableBufferManager(this.doDecodeSync())];
            case 6:
              return [4, createUniqueChatMessageIdForMediaStream.sent()];
            case 7:
              createUniqueChatMessageIdForMediaStream.sent();
              if (--defaultChatMessageIdentifier === 0) {
                return [3, 8];
              } else {
                return [3, 5];
              }
            case 8:
              return [3, 10];
            case 9:
              currentChatMessageIdentifier =
                createUniqueChatMessageIdForMediaStream.sent();
              if (
                !(
                  currentChatMessageIdentifier instanceof
                  handleAudioDataProcessingAsync
                )
              ) {
                throw currentChatMessageIdentifier;
              }
              return [3, 10];
            case 10:
              this.totalPos += this.pos;
              createUniqueChatMessageIdForMediaStream.label = 11;
            case 11:
              return [3, 2];
            case 12:
              return [3, 19];
            case 13:
              currentActiveMediaStreamIdentifier =
                createUniqueChatMessageIdForMediaStream.sent();
              generateChatMessageIdForCurrentInteraction = {
                error: currentActiveMediaStreamIdentifier,
              };
              return [3, 19];
            case 14:
              createUniqueChatMessageIdForMediaStream.trys.push([14, , 17, 18]);
              if (
                currentActiveChatMessageIdentifier &&
                !currentActiveChatMessageIdentifier.done &&
                (generateChatMessageIdForDecoding =
                  initializeMediaStreamDecoderAsync.return)
              ) {
                return [
                  4,
                  AsyncIterableBufferManager(
                    generateChatMessageIdForDecoding.call(
                      initializeMediaStreamDecoderAsync,
                    ),
                  ),
                ];
              } else {
                return [3, 16];
              }
            case 15:
              createUniqueChatMessageIdForMediaStream.sent();
              createUniqueChatMessageIdForMediaStream.label = 16;
            case 16:
              return [3, 18];
            case 17:
              if (generateChatMessageIdForCurrentInteraction) {
                throw generateChatMessageIdForCurrentInteraction.error;
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
  AsyncAudioCodecConfig.prototype.doDecodeSync = function () {
    _0x197063: while (true) {
      var getAndNormalizeHeaderByteValue = this.readHeadByte();
      var normalizedHeaderValueForProcessing = undefined;
      if (getAndNormalizeHeaderByteValue >= 224) {
        normalizedHeaderValueForProcessing =
          getAndNormalizeHeaderByteValue - 256;
      } else if (getAndNormalizeHeaderByteValue < 192) {
        if (getAndNormalizeHeaderByteValue < 128) {
          normalizedHeaderValueForProcessing = getAndNormalizeHeaderByteValue;
        } else if (getAndNormalizeHeaderByteValue < 144) {
          var normalizedHeaderByteAdjustment =
            getAndNormalizeHeaderByteValue - 128;
          if (normalizedHeaderByteAdjustment !== 0) {
            this.pushMapState(normalizedHeaderByteAdjustment);
            this.complete();
            continue _0x197063;
          } else {
            normalizedHeaderValueForProcessing = {};
          }
        } else if (getAndNormalizeHeaderByteValue < 160) {
          var normalizedHeaderByteAdjustment =
            getAndNormalizeHeaderByteValue - 144;
          if (normalizedHeaderByteAdjustment !== 0) {
            this.pushArrayState(normalizedHeaderByteAdjustment);
            this.complete();
            continue _0x197063;
          } else {
            normalizedHeaderValueForProcessing = [];
          }
        } else {
          var adjustedHeaderValueForUtf8 = getAndNormalizeHeaderByteValue - 160;
          normalizedHeaderValueForProcessing = this.decodeUtf8String(
            adjustedHeaderValueForUtf8,
            0,
          );
        }
      } else if (getAndNormalizeHeaderByteValue === 192) {
        normalizedHeaderValueForProcessing = null;
      } else if (getAndNormalizeHeaderByteValue === 194) {
        normalizedHeaderValueForProcessing = false;
      } else if (getAndNormalizeHeaderByteValue === 195) {
        normalizedHeaderValueForProcessing = true;
      } else if (getAndNormalizeHeaderByteValue === 202) {
        normalizedHeaderValueForProcessing = this.readF32();
      } else if (getAndNormalizeHeaderByteValue === 203) {
        normalizedHeaderValueForProcessing = this.readF64();
      } else if (getAndNormalizeHeaderByteValue === 204) {
        normalizedHeaderValueForProcessing = this.readU8();
      } else if (getAndNormalizeHeaderByteValue === 205) {
        normalizedHeaderValueForProcessing = this.readU16();
      } else if (getAndNormalizeHeaderByteValue === 206) {
        normalizedHeaderValueForProcessing = this.readU32();
      } else if (getAndNormalizeHeaderByteValue === 207) {
        normalizedHeaderValueForProcessing = this.readU64();
      } else if (getAndNormalizeHeaderByteValue === 208) {
        normalizedHeaderValueForProcessing = this.readI8();
      } else if (getAndNormalizeHeaderByteValue === 209) {
        normalizedHeaderValueForProcessing = this.readI16();
      } else if (getAndNormalizeHeaderByteValue === 210) {
        normalizedHeaderValueForProcessing = this.readI32();
      } else if (getAndNormalizeHeaderByteValue === 211) {
        normalizedHeaderValueForProcessing = this.readI64();
      } else if (getAndNormalizeHeaderByteValue === 217) {
        var adjustedHeaderValueForUtf8 = this.lookU8();
        normalizedHeaderValueForProcessing = this.decodeUtf8String(
          adjustedHeaderValueForUtf8,
          1,
        );
      } else if (getAndNormalizeHeaderByteValue === 218) {
        var adjustedHeaderValueForUtf8 = this.lookU16();
        normalizedHeaderValueForProcessing = this.decodeUtf8String(
          adjustedHeaderValueForUtf8,
          2,
        );
      } else if (getAndNormalizeHeaderByteValue === 219) {
        var adjustedHeaderValueForUtf8 = this.lookU32();
        normalizedHeaderValueForProcessing = this.decodeUtf8String(
          adjustedHeaderValueForUtf8,
          4,
        );
      } else if (getAndNormalizeHeaderByteValue === 220) {
        var normalizedHeaderByteAdjustment = this.readU16();
        if (normalizedHeaderByteAdjustment !== 0) {
          this.pushArrayState(normalizedHeaderByteAdjustment);
          this.complete();
          continue _0x197063;
        } else {
          normalizedHeaderValueForProcessing = [];
        }
      } else if (getAndNormalizeHeaderByteValue === 221) {
        var normalizedHeaderByteAdjustment = this.readU32();
        if (normalizedHeaderByteAdjustment !== 0) {
          this.pushArrayState(normalizedHeaderByteAdjustment);
          this.complete();
          continue _0x197063;
        } else {
          normalizedHeaderValueForProcessing = [];
        }
      } else if (getAndNormalizeHeaderByteValue === 222) {
        var normalizedHeaderByteAdjustment = this.readU16();
        if (normalizedHeaderByteAdjustment !== 0) {
          this.pushMapState(normalizedHeaderByteAdjustment);
          this.complete();
          continue _0x197063;
        } else {
          normalizedHeaderValueForProcessing = {};
        }
      } else if (getAndNormalizeHeaderByteValue === 223) {
        var normalizedHeaderByteAdjustment = this.readU32();
        if (normalizedHeaderByteAdjustment !== 0) {
          this.pushMapState(normalizedHeaderByteAdjustment);
          this.complete();
          continue _0x197063;
        } else {
          normalizedHeaderValueForProcessing = {};
        }
      } else if (getAndNormalizeHeaderByteValue === 196) {
        var normalizedHeaderByteAdjustment = this.lookU8();
        normalizedHeaderValueForProcessing = this.decodeBinary(
          normalizedHeaderByteAdjustment,
          1,
        );
      } else if (getAndNormalizeHeaderByteValue === 197) {
        var normalizedHeaderByteAdjustment = this.lookU16();
        normalizedHeaderValueForProcessing = this.decodeBinary(
          normalizedHeaderByteAdjustment,
          2,
        );
      } else if (getAndNormalizeHeaderByteValue === 198) {
        var normalizedHeaderByteAdjustment = this.lookU32();
        normalizedHeaderValueForProcessing = this.decodeBinary(
          normalizedHeaderByteAdjustment,
          4,
        );
      } else if (getAndNormalizeHeaderByteValue === 212) {
        normalizedHeaderValueForProcessing = this.decodeExtension(1, 0);
      } else if (getAndNormalizeHeaderByteValue === 213) {
        normalizedHeaderValueForProcessing = this.decodeExtension(2, 0);
      } else if (getAndNormalizeHeaderByteValue === 214) {
        normalizedHeaderValueForProcessing = this.decodeExtension(4, 0);
      } else if (getAndNormalizeHeaderByteValue === 215) {
        normalizedHeaderValueForProcessing = this.decodeExtension(8, 0);
      } else if (getAndNormalizeHeaderByteValue === 216) {
        normalizedHeaderValueForProcessing = this.decodeExtension(16, 0);
      } else if (getAndNormalizeHeaderByteValue === 199) {
        var normalizedHeaderByteAdjustment = this.lookU8();
        normalizedHeaderValueForProcessing = this.decodeExtension(
          normalizedHeaderByteAdjustment,
          1,
        );
      } else if (getAndNormalizeHeaderByteValue === 200) {
        var normalizedHeaderByteAdjustment = this.lookU16();
        normalizedHeaderValueForProcessing = this.decodeExtension(
          normalizedHeaderByteAdjustment,
          2,
        );
      } else if (getAndNormalizeHeaderByteValue === 201) {
        var normalizedHeaderByteAdjustment = this.lookU32();
        normalizedHeaderValueForProcessing = this.decodeExtension(
          normalizedHeaderByteAdjustment,
          4,
        );
      } else {
        throw new generateAndEnsureUniqueSlug(
          `Unrecognized type byte: ${formatIntegerAsSignedHexadecimal(getAndNormalizeHeaderByteValue)}`,
        );
      }
      this.complete();
      for (
        var itemProcessingStack = this.stack;
        itemProcessingStack.length > 0;

      ) {
        var topItemProcessingContext =
          itemProcessingStack[itemProcessingStack.length - 1];
        if (topItemProcessingContext.type === 0) {
          topItemProcessingContext.array[topItemProcessingContext.position] =
            normalizedHeaderValueForProcessing;
          topItemProcessingContext.position++;
          if (
            topItemProcessingContext.position === topItemProcessingContext.size
          ) {
            itemProcessingStack.pop();
            normalizedHeaderValueForProcessing = topItemProcessingContext.array;
          } else {
            continue _0x197063;
          }
        } else if (topItemProcessingContext.type === 1) {
          if (
            !isValidAsyncDataTypeForProcessing(
              normalizedHeaderValueForProcessing,
            )
          ) {
            throw new generateAndEnsureUniqueSlug(
              "The type of key must be string or number but " +
                typeof normalizedHeaderValueForProcessing,
            );
          }
          if (normalizedHeaderValueForProcessing === "__proto__") {
            throw new generateAndEnsureUniqueSlug(
              "The key __proto__ is not allowed",
            );
          }
          topItemProcessingContext.key = normalizedHeaderValueForProcessing;
          topItemProcessingContext.type = 2;
          continue _0x197063;
        } else {
          topItemProcessingContext.map[topItemProcessingContext.key] =
            normalizedHeaderValueForProcessing;
          topItemProcessingContext.readCount++;
          if (
            topItemProcessingContext.readCount === topItemProcessingContext.size
          ) {
            itemProcessingStack.pop();
            normalizedHeaderValueForProcessing = topItemProcessingContext.map;
          } else {
            topItemProcessingContext.key = null;
            topItemProcessingContext.type = 1;
            continue _0x197063;
          }
        }
      }
      return normalizedHeaderValueForProcessing;
    }
  };
  AsyncAudioCodecConfig.prototype.readHeadByte = function () {
    if (this.headByte === handleAudioProcessingQueue) {
      this.headByte = this.readU8();
    }
    return this.headByte;
  };
  AsyncAudioCodecConfig.prototype.complete = function () {
    this.headByte = handleAudioProcessingQueue;
  };
  AsyncAudioCodecConfig.prototype.readArraySize = function () {
    var readElementSizeFromHeaderByte = this.readHeadByte();
    switch (readElementSizeFromHeaderByte) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default: {
        if (readElementSizeFromHeaderByte < 160) {
          return readElementSizeFromHeaderByte - 144;
        }
        throw new generateAndEnsureUniqueSlug(
          `Unrecognized array type byte: ${formatIntegerAsSignedHexadecimal(readElementSizeFromHeaderByte)}`,
        );
      }
    }
  };
  AsyncAudioCodecConfig.prototype.pushMapState = function (
    processAndValidatePlaybackTrackData,
  ) {
    if (processAndValidatePlaybackTrackData > this.maxMapLength) {
      throw new generateAndEnsureUniqueSlug(
        `Max length exceeded: map length (${processAndValidatePlaybackTrackData}) > maxMapLengthLength (${this.maxMapLength})`,
      );
    }
    this.stack.push({
      type: 1,
      size: processAndValidatePlaybackTrackData,
      key: null,
      readCount: 0,
      map: {},
    });
  };
  AsyncAudioCodecConfig.prototype.pushArrayState = function (
    getPlaybackTrackArraySizeFromHeaderByte,
  ) {
    if (getPlaybackTrackArraySizeFromHeaderByte > this.maxArrayLength) {
      throw new generateAndEnsureUniqueSlug(
        `Max length exceeded: array length (${getPlaybackTrackArraySizeFromHeaderByte}) > maxArrayLength (${this.maxArrayLength})`,
      );
    }
    this.stack.push({
      type: 0,
      size: getPlaybackTrackArraySizeFromHeaderByte,
      array: new Array(getPlaybackTrackArraySizeFromHeaderByte),
      position: 0,
    });
  };
  AsyncAudioCodecConfig.prototype.decodeUtf8String = function (
    maximumPlaybackTrackData,
    maxConcurrentDecodingEntries,
  ) {
    var isDecodingKeyCacheable;
    if (maximumPlaybackTrackData > this.maxStrLength) {
      throw new generateAndEnsureUniqueSlug(
        `Max length exceeded: UTF-8 byte length (${maximumPlaybackTrackData}) > maxStrLength (${this.maxStrLength})`,
      );
    }
    if (
      this.bytes.byteLength <
      this.pos + maxConcurrentDecodingEntries + maximumPlaybackTrackData
    ) {
      throw handleAsyncAudioDataProcessing;
    }
    var calculateDecodingKeyOffset = this.pos + maxConcurrentDecodingEntries;
    var decodedTrackKey;
    if (
      this.stateIsMapKey() &&
      ((isDecodingKeyCacheable = this.keyDecoder) === null ||
      isDecodingKeyCacheable === undefined
        ? undefined
        : isDecodingKeyCacheable.canBeCached(maximumPlaybackTrackData))
    ) {
      decodedTrackKey = this.keyDecoder.decode(
        this.bytes,
        calculateDecodingKeyOffset,
        maximumPlaybackTrackData,
      );
    } else if (maximumPlaybackTrackData > getMaxUniqueIdentifierValue) {
      decodedTrackKey = extractUniqueIdentifiersFromBufferSlice(
        this.bytes,
        calculateDecodingKeyOffset,
        maximumPlaybackTrackData,
      );
    } else {
      decodedTrackKey = extractAndAggregateUniqueIdentifiers(
        this.bytes,
        calculateDecodingKeyOffset,
        maximumPlaybackTrackData,
      );
    }
    this.pos += maxConcurrentDecodingEntries + maximumPlaybackTrackData;
    return decodedTrackKey;
  };
  AsyncAudioCodecConfig.prototype.stateIsMapKey = function () {
    if (this.stack.length > 0) {
      var retrieveTopStackElementType = this.stack[this.stack.length - 1];
      return retrieveTopStackElementType.type === 1;
    }
    return false;
  };
  AsyncAudioCodecConfig.prototype.decodeBinary = function (
    validateAndExtractPlaybackMetadata,
    decodeTrackIdentifierUsingCache,
  ) {
    if (validateAndExtractPlaybackMetadata > this.maxBinLength) {
      throw new generateAndEnsureUniqueSlug(
        `Max length exceeded: bin length (${validateAndExtractPlaybackMetadata}) > maxBinLength (${this.maxBinLength})`,
      );
    }
    if (
      !this.hasRemaining(
        validateAndExtractPlaybackMetadata + decodeTrackIdentifierUsingCache,
      )
    ) {
      throw handleAsyncAudioDataProcessing;
    }
    var getNextExtractionPosition = this.pos + decodeTrackIdentifierUsingCache;
    var playbackDataBuffer = this.bytes.subarray(
      getNextExtractionPosition,
      getNextExtractionPosition + validateAndExtractPlaybackMetadata,
    );
    this.pos +=
      decodeTrackIdentifierUsingCache + validateAndExtractPlaybackMetadata;
    return playbackDataBuffer;
  };
  AsyncAudioCodecConfig.prototype.decodeExtension = function (
    retrieveNextInt32ValueAndUpdatePosition,
    calculateBinaryDataOffsetForTrackChunk,
  ) {
    if (retrieveNextInt32ValueAndUpdatePosition > this.maxExtLength) {
      throw new generateAndEnsureUniqueSlug(
        `Max length exceeded: ext length (${retrieveNextInt32ValueAndUpdatePosition}) > maxExtLength (${this.maxExtLength})`,
      );
    }
    var dataFormatCode = this.view.getInt8(
      this.pos + calculateBinaryDataOffsetForTrackChunk,
    );
    var decodedTrackPlaybackData = this.decodeBinary(
      retrieveNextInt32ValueAndUpdatePosition,
      calculateBinaryDataOffsetForTrackChunk + 1,
    );
    return this.extensionCodec.decode(
      decodedTrackPlaybackData,
      dataFormatCode,
      this.context,
    );
  };
  AsyncAudioCodecConfig.prototype.lookU8 = function () {
    return this.view.getUint8(this.pos);
  };
  AsyncAudioCodecConfig.prototype.lookU16 = function () {
    return this.view.getUint16(this.pos);
  };
  AsyncAudioCodecConfig.prototype.lookU32 = function () {
    return this.view.getUint32(this.pos);
  };
  AsyncAudioCodecConfig.prototype.readU8 = function () {
    var retrieveNextByteFromBuffer = this.view.getUint8(this.pos);
    this.pos++;
    return retrieveNextByteFromBuffer;
  };
  AsyncAudioCodecConfig.prototype.readI8 = function () {
    var retrieveNextInt8FromBuffer = this.view.getInt8(this.pos);
    this.pos++;
    return retrieveNextInt8FromBuffer;
  };
  AsyncAudioCodecConfig.prototype.readU16 = function () {
    var readUInt16AndAdvancePosition = this.view.getUint16(this.pos);
    this.pos += 2;
    return readUInt16AndAdvancePosition;
  };
  AsyncAudioCodecConfig.prototype.readI16 = function () {
    var retrieveNextInt16FromBuffer = this.view.getInt16(this.pos);
    this.pos += 2;
    return retrieveNextInt16FromBuffer;
  };
  AsyncAudioCodecConfig.prototype.readU32 = function () {
    var readUint32AndAdvancePosition = this.view.getUint32(this.pos);
    this.pos += 4;
    return readUint32AndAdvancePosition;
  };
  AsyncAudioCodecConfig.prototype.readI32 = function () {
    var getInt32AndAdvancePosition = this.view.getInt32(this.pos);
    this.pos += 4;
    return getInt32AndAdvancePosition;
  };
  AsyncAudioCodecConfig.prototype.readU64 = function () {
    var generateIdentifierFromViewBuffer = createIdentifierFromBufferData(
      this.view,
      this.pos,
    );
    this.pos += 8;
    return generateIdentifierFromViewBuffer;
  };
  AsyncAudioCodecConfig.prototype.readI64 = function () {
    var retrieveRandomIntegerFromBuffer = createLargeRandomIntegerFromBuffer(
      this.view,
      this.pos,
    );
    this.pos += 8;
    return retrieveRandomIntegerFromBuffer;
  };
  AsyncAudioCodecConfig.prototype.readF32 = function () {
    var readFloat32AndAdvancePosition = this.view.getFloat32(this.pos);
    this.pos += 4;
    return readFloat32AndAdvancePosition;
  };
  AsyncAudioCodecConfig.prototype.readF64 = function () {
    var retrieveNextValueAsFloat64 = this.view.getFloat64(this.pos);
    this.pos += 8;
    return retrieveNextValueAsFloat64;
  };
  return AsyncAudioCodecConfig;
})();
var getPlaybackDurationFromBuffer = {};
function decodeAudioTimestampDurations(
  readNextUnsignedInt16AndUpdatePosition,
  _getPlaybackDurationFromBuffer = getPlaybackDurationFromBuffer,
) {
  var audioPlaybackDurationProcessor = new processAudioEncodingErrors(
    _getPlaybackDurationFromBuffer.extensionCodec,
    _getPlaybackDurationFromBuffer.context,
    _getPlaybackDurationFromBuffer.maxStrLength,
    _getPlaybackDurationFromBuffer.maxBinLength,
    _getPlaybackDurationFromBuffer.maxArrayLength,
    _getPlaybackDurationFromBuffer.maxMapLength,
    _getPlaybackDurationFromBuffer.maxExtLength,
  );
  return audioPlaybackDurationProcessor.decode(
    readNextUnsignedInt16AndUpdatePosition,
  );
}
var generateCleanupFunctionForEventListener = class {
  onWillDisposeEmitter = new EventListenerManager();
  onWillDispose = this.onWillDisposeEmitter.event;
  onDidDisposeEmitter = new EventListenerManager();
  onDidDispose = this.onDidDisposeEmitter.event;
  toDispose = [];
  isDisposed = false;
  onDispose(registerEventCleanupOnDispose) {
    this.toDispose.push(
      generateCleanupFunctionForEventListener.create(
        registerEventCleanupOnDispose,
      ),
    );
  }
  dispose() {
    if (!this.isDisposed) {
      this.onWillDisposeEmitter.fire(null);
      this.isDisposed = true;
      this.toDispose.forEach((disposeComponentResources) => {
        disposeComponentResources.dispose();
      });
      this.onDidDisposeEmitter.fire(null);
      this.onWillDisposeEmitter.dispose();
      this.onDidDisposeEmitter.dispose();
    }
  }
  static is(isDisposableInstance) {
    return typeof isDisposableInstance.dispose == "function";
  }
  static create(createDisposeHandler) {
    return {
      dispose: createDisposeHandler,
    };
  }
};
var EventListenerManager = class {
  registeredListeners = new Set();
  _event;
  get event() {
    this._event ||= (addEventListenerWithCleanup) => {
      this.registeredListeners.add(addEventListenerWithCleanup);
      return generateCleanupFunctionForEventListener.create(() => {
        this.registeredListeners.delete(addEventListenerWithCleanup);
      });
    };
    return this._event;
  }
  fire(invokeRegisteredEventHandlers) {
    this.registeredListeners.forEach((invokeEventHandlers) => {
      invokeEventHandlers(invokeRegisteredEventHandlers);
    });
  }
  dispose() {
    this.registeredListeners = new Set();
  }
};
var createEventListenerCleanupHandler = (0,
initializeBindingWithUniqueId.default)();
var EventListenerCleanupManager = (_createTimestampedSlugFromUser) =>
  createTimestampedSlugFromUser(_createTimestampedSlugFromUser, {
    ignoreUndefined: true,
  });
var registerEventCleanupListener = class {
  endpoints = new Map();
  nodeMap = new Map();
  onMessageEmitter = new EventListenerManager();
  onMessage = this.onMessageEmitter.event;
  constructor() {}
  getEndpointForNode(getEndpointForNodeId) {
    let nodeIdToEndpointMappingByNodeId =
      this.nodeMap.get(getEndpointForNodeId);
    if (nodeIdToEndpointMappingByNodeId) {
      let getEndpointForNodeMapping = this.endpoints.get(
        nodeIdToEndpointMappingByNodeId,
      );
      if (getEndpointForNodeMapping) {
        return getEndpointForNodeMapping;
      }
    }
  }
  addEndpoint(
    addEndpointWithMessageHandler,
    registerMessageHandlerForEndpoint,
  ) {
    this.endpoints.set(
      addEndpointWithMessageHandler,
      registerMessageHandlerForEndpoint,
    );
    registerMessageHandlerForEndpoint.onMessage((processAndDispatchMessage) =>
      this.handleMessage(
        processAndDispatchMessage,
        addEndpointWithMessageHandler,
      ),
    );
    let generateRouterAnnouncementPayload = EventListenerCleanupManager({
      $type: "router-announce",
      $origin: createEventListenerCleanupHandler,
    });
    registerMessageHandlerForEndpoint.send(generateRouterAnnouncementPayload, [
      generateRouterAnnouncementPayload.buffer,
    ]);
  }
  removeEndpoint(deleteEndpointById) {
    this.endpoints.delete(deleteEndpointById);
  }
  send(targetNodeId, routingPayload, isUserLoggedIn = true) {
    let routerMessage = {
      $type: "router-message",
      $origin: createEventListenerCleanupHandler,
      $target: targetNodeId,
      $data: routingPayload,
    };
    if (targetNodeId !== createEventListenerCleanupHandler) {
      let getNodeRoutingEndpointById = this.getEndpointForNode(targetNodeId);
      if (!getNodeRoutingEndpointById) {
        throw new Error("Endpoint " + targetNodeId + " not registered");
      }
      if (isUserLoggedIn) {
        let generateAndDispatchRouterEventPayload =
          EventListenerCleanupManager(routerMessage);
        getNodeRoutingEndpointById.send(generateAndDispatchRouterEventPayload, [
          generateAndDispatchRouterEventPayload.buffer,
        ]);
      } else {
        getNodeRoutingEndpointById.send(routerMessage, []);
      }
    } else {
      this.onMessageEmitter.fire(routerMessage);
    }
  }
  broadcast(broadcastMessagePayload, excludedEndpointId, initiatingEndpointId) {
    let assembleBroadcastMessage = {
      $type: "router-broadcast",
      $origin: initiatingEndpointId ?? createEventListenerCleanupHandler,
      $data: broadcastMessagePayload,
    };
    if (!excludedEndpointId && !initiatingEndpointId) {
      this.onMessageEmitter.fire(assembleBroadcastMessage);
    }
    for (let [
      currentEndpointId,
      broadcastChannelForEndpointMessaging,
    ] of this.endpoints.entries()) {
      if (currentEndpointId === excludedEndpointId) {
        continue;
      }
      let generateBroadcastMessageForActiveEndpoint =
        EventListenerCleanupManager(assembleBroadcastMessage);
      broadcastChannelForEndpointMessaging.send(
        generateBroadcastMessageForActiveEndpoint,
        [generateBroadcastMessageForActiveEndpoint.buffer],
      );
    }
  }
  handleMessage(processRouterPayloadMessage, registerNodeIdentifierHandler) {
    let isPayloadArrayBuffer =
      processRouterPayloadMessage instanceof Uint8Array;
    let processedMessagePayload = isPayloadArrayBuffer
      ? decodeAudioTimestampDurations(processRouterPayloadMessage)
      : processRouterPayloadMessage;
    if (processedMessagePayload.$origin) {
      if (!this.nodeMap.has(processedMessagePayload.$origin)) {
        this.nodeMap.set(
          processedMessagePayload.$origin,
          registerNodeIdentifierHandler,
        );
      }
      if (processedMessagePayload.$type === "router-broadcast") {
        let broadcastMessagePayload = processedMessagePayload;
        this.broadcast(
          broadcastMessagePayload.$data,
          registerNodeIdentifierHandler,
          broadcastMessagePayload.$origin,
        );
        this.onMessageEmitter.fire(processedMessagePayload);
        return;
      }
      if (processedMessagePayload.$type === "router-message") {
        let processedMessageForTarget = processedMessagePayload;
        if (
          processedMessageForTarget.$target ===
          createEventListenerCleanupHandler
        ) {
          this.onMessageEmitter.fire(processedMessagePayload);
        } else {
          let targetNodeSendEndpoint = this.getEndpointForNode(
            processedMessageForTarget.$target,
          );
          if (targetNodeSendEndpoint) {
            targetNodeSendEndpoint.send(
              processRouterPayloadMessage,
              isPayloadArrayBuffer ? [processRouterPayloadMessage.buffer] : [],
            );
          }
        }
        return;
      }
    }
  }
};
var fetchOrCreateBroadcastMessagePayload;
function setupBroadcastMessageCleanupListener() {
  fetchOrCreateBroadcastMessagePayload ||= new registerEventCleanupListener();
  return fetchOrCreateBroadcastMessagePayload;
}
function setDefaultHttpServerPort(registerAndHandleNodeIdentifier) {
  let getDefaultHttpServerPort = 8000;
  if (isNaN(getDefaultHttpServerPort)) {
    throw new Error("Invalid port");
  }
  return getDefaultHttpServerPort;
}
function isServiceWorkerActiveOrWaiting(handleRouterBroadcastMessage) {
  return (
    handleRouterBroadcastMessage.installing ||
    handleRouterBroadcastMessage.waiting ||
    handleRouterBroadcastMessage.active
  );
}
var initializeOrRetrieveMessageBuffer =
  generatePlaceholderReplacementFunction("bridge");
var getOrInitializeEventListener = setDefaultHttpServerPort(
  window.location.hostname,
);
var setupDataCommunicationForNode = {
  $channel_name: previewManagerIdentifier,
  $type: PREVIEW_STATUS_READY,
  port: getOrInitializeEventListener,
};
var routeMessageToEndpoint = setupBroadcastMessageCleanupListener();
var initializeMessageBufferAndSetupPort = new MessageChannel();
var fetchOrCreateEventListener = new bindStorageToDataSource.DeferredPromise();
var handleRouterMessageCommunication =
  new bindStorageToDataSource.DeferredPromise();
fetchOrCreateEventListener.then((messageChannelPort) => {
  initializeOrRetrieveMessageBuffer(
    "worker is ready, initializing MessageChannel...",
  );
  messageChannelPort.postMessage(
    {
      type: "bridge-channel-init",
    },
    [initializeMessageBufferAndSetupPort.port2],
  );
  return messageChannelPort;
});
window.addEventListener("unload", () => {
  initializeMessageBufferAndSetupPort.port1.postMessage({
    $type: bridgeCloseConnectionEndpoint,
  });
});
window.addEventListener("message", (setupDataCommunicationBridge) => {
  switch (setupDataCommunicationBridge.data.$type) {
    case bridgeInitializationEndpoint: {
      let dataCommunicationSocket = setupDataCommunicationBridge.ports[0];
      let dataPortPreviewsList = document.getElementById("previews-list");
      let dataPortStatusIndicator = document.createElement("span");
      dataPortStatusIndicator.setAttribute(
        "data-port",
        String(getOrInitializeEventListener),
      );
      dataPortStatusIndicator.innerText =
        "localhost:" + getOrInitializeEventListener;
      dataPortPreviewsList?.appendChild(dataPortStatusIndicator);
      handleRouterMessageCommunication.resolve(dataCommunicationSocket);
      routeMessageToEndpoint.addEndpoint("parent", {
        send: (
          transmitDataWithOptionsToCommPort,
          sendPayloadToCommunicationPort,
        ) =>
          dataCommunicationSocket.postMessage(
            transmitDataWithOptionsToCommPort,
            sendPayloadToCommunicationPort,
          ),
        onMessage: (handleSocketMessage) => {
          dataCommunicationSocket.onmessage = (handleIncomingSocketMessage) => {
            handleSocketMessage(handleIncomingSocketMessage.data);
          };
        },
      });
      break;
    }
  }
});
var setupDataCommunicationEndpoint =
  new bindStorageToDataSource.DeferredPromise();
routeMessageToEndpoint.onMessage((handleIncomingPreviewMessage) => {
  switch (handleIncomingPreviewMessage.$data.$type) {
    case previewManagerAcknowledgmentToken: {
      setupDataCommunicationEndpoint.resolve(
        handleIncomingPreviewMessage.$origin,
      );
      break;
    }
    case previewResponsePayloadKey: {
      initializeMessageBufferAndSetupPort.port1.postMessage(
        handleIncomingPreviewMessage.$data,
      );
      break;
    }
    case previewResponseRuntimePath: {
      initializeMessageBufferAndSetupPort.port1.postMessage(
        handleIncomingPreviewMessage.$data,
      );
      break;
    }
  }
});
initializeMessageBufferAndSetupPort.port1.onmessage = async (
  handleWorkerMessage,
) => {
  let workerMessagePayload = handleWorkerMessage.data;
  initializeOrRetrieveMessageBuffer(
    "incoming message from the worker",
    handleWorkerMessage.data,
  );
  if (workerMessagePayload.$channel_name === previewManagerIdentifier) {
    let setupAndValidateCommunicationResponse =
      await setupDataCommunicationEndpoint;
    validateAndThrowErrorIfInvalid(
      setupAndValidateCommunicationResponse,
      "[bridge] Failed to forward worker message to the PreviewManager: manager node ID is not defined.",
    );
    let _workerMessagePayload = workerMessagePayload;
    routeMessageToEndpoint.send(
      setupAndValidateCommunicationResponse,
      _workerMessagePayload,
    );
  }
};
var dataProcessorFilePath = new URL("__csb_sw.js", location.origin).href;
function initializeServiceWorkerPingHeartbeat(
  configureWorkerCommunicationRouting,
) {
  let serviceWorkerHeartbeatInterval = setInterval(() => {
    let sendPingToWorker = {
      type: "ping",
    };
    configureWorkerCommunicationRouting.postMessage(sendPingToWorker);
  }, 5000);
  configureWorkerCommunicationRouting.addEventListener("statechange", () => {
    if (configureWorkerCommunicationRouting.state === "redundant") {
      clearInterval(serviceWorkerHeartbeatInterval);
    }
  });
}
async function setupAndMonitorServiceWorker() {
  validateAndThrowErrorIfInvalid(
    "serviceWorker" in navigator,
    "Failed to start the bridge Service Worker: Service Worker API is not supported in this browser",
  );
  let registerAndValidateServiceWorker = async () => {
    let serviceWorkerRegistrationPromise =
      await navigator.serviceWorker.register("__csb_sw.js", {
        scope: ".",
      });
    return isServiceWorkerActiveOrWaiting(serviceWorkerRegistrationPromise);
  };
  let activeServiceWorkerRegistrations =
    await navigator.serviceWorker.getRegistrations();
  initializeOrRetrieveMessageBuffer(
    "all registrations",
    location,
    activeServiceWorkerRegistrations,
  );
  await Promise.all(
    activeServiceWorkerRegistrations.map((currentServiceWorkerRegistration) => {
      let unregisterIrrelevantServiceWorker = isServiceWorkerActiveOrWaiting(
        currentServiceWorkerRegistration,
      );
      if (
        unregisterIrrelevantServiceWorker &&
        unregisterIrrelevantServiceWorker.scriptURL !== dataProcessorFilePath
      ) {
        initializeOrRetrieveMessageBuffer(
          "found irrelevant worker registration, unregistering...",
          unregisterIrrelevantServiceWorker,
          currentServiceWorkerRegistration,
        );
        return currentServiceWorkerRegistration.unregister();
      }
    }),
  );
  let { controller: _setupAndMonitorServiceWorker } = navigator.serviceWorker;
  if (!_setupAndMonitorServiceWorker) {
    initializeOrRetrieveMessageBuffer(
      "bridge is not controlled, registering a new worker...",
    );
    return registerAndValidateServiceWorker();
  }
  if (_setupAndMonitorServiceWorker.scriptURL === dataProcessorFilePath) {
    initializeOrRetrieveMessageBuffer(
      "bridge is controlled by the correct worker",
      _setupAndMonitorServiceWorker.scriptURL,
    );
    return _setupAndMonitorServiceWorker;
  }
  let [_registerAndValidateServiceWorker, __setupAndMonitorServiceWorker] =
    await Promise.all([
      navigator.serviceWorker.getRegistration(
        _setupAndMonitorServiceWorker.scriptURL,
      ),
      navigator.serviceWorker.getRegistration(dataProcessorFilePath),
    ]);
  initializeOrRetrieveMessageBuffer(
    "controller registration:",
    _registerAndValidateServiceWorker,
  );
  initializeOrRetrieveMessageBuffer(
    "worker registration:",
    __setupAndMonitorServiceWorker,
  );
  if (!__setupAndMonitorServiceWorker) {
    initializeOrRetrieveMessageBuffer(
      'no registration found for "%s", unregistering controller and registering a new worker...',
      dataProcessorFilePath,
    );
    await _registerAndValidateServiceWorker?.unregister();
    return registerAndValidateServiceWorker();
  }
  if (__setupAndMonitorServiceWorker.waiting) {
    initializeOrRetrieveMessageBuffer(
      "found waiting registration, promoting...",
    );
    await __setupAndMonitorServiceWorker.update();
    let currentActiveServiceWorker = isServiceWorkerActiveOrWaiting(
      __setupAndMonitorServiceWorker,
    );
    validateAndThrowErrorIfInvalid(
      currentActiveServiceWorker,
      "Failed to retrieve the worker instance after promotion: worked does not exist",
    );
    validateAndThrowErrorIfInvalid(
      __setupAndMonitorServiceWorker.active,
      'Failed to promove a waiting Service Worker: expected the worker state to be "active" but got "%s"',
      currentActiveServiceWorker.state,
    );
    return currentActiveServiceWorker;
  }
  return null;
}
async function initializeServiceWorkerAndManageUniqueIDs() {
  initializeOrRetrieveMessageBuffer("starting the bridge...", {
    workerUrl: dataProcessorFilePath,
  });
  let initializedServiceWorkerRegistration =
    await setupAndMonitorServiceWorker().catch(
      (logServiceWorkerRegistrationError) => {
        console.error(
          "Failed to ensure the bridge has a Service Worker registered. See details below.",
        );
        console.error(logServiceWorkerRegistrationError);
      },
    );
  await navigator.serviceWorker.ready;
  validateAndThrowErrorIfInvalid(
    initializedServiceWorkerRegistration,
    "Failed to retrieve the worker instance: worker not found",
  );
  initializeServiceWorkerPingHeartbeat(initializedServiceWorkerRegistration);
  fetchOrCreateEventListener.resolve(initializedServiceWorkerRegistration);
  let setupUniqueIDBufferForServiceCommunication =
    await handleRouterMessageCommunication;
  initializeOrRetrieveMessageBuffer(
    "preview manager port received",
    setupUniqueIDBufferForServiceCommunication,
  );
  routeMessageToEndpoint.broadcast(setupDataCommunicationForNode);
}
initializeServiceWorkerAndManageUniqueIDs();
