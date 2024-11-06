var createDeferredExecutor = (moduleInitializer, moduleExports) => () => {
  if (!moduleExports) {
    moduleInitializer(
      (moduleExports = {
        exports: {},
      }).exports,
      moduleExports,
    );
  }
  return moduleExports.exports;
};
var defineProperties = (
  definePropertiesFromSourceObject,
  sourceObject,
  sourceProperties,
  _propertyDescriptor,
) => {
  if (
    (sourceObject && typeof sourceObject == "object") ||
    typeof sourceObject == "function"
  ) {
    for (let propertyName of Object.getOwnPropertyNames(sourceObject)) {
      if (
        !Object.prototype.hasOwnProperty.call(
          definePropertiesFromSourceObject,
          propertyName,
        ) &&
        propertyName !== sourceProperties
      ) {
        Object.defineProperty(definePropertiesFromSourceObject, propertyName, {
          get: () => sourceObject[propertyName],
          enumerable:
            !(_propertyDescriptor = Object.getOwnPropertyDescriptor(
              sourceObject,
              propertyName,
            )) || _propertyDescriptor.enumerable,
        });
      }
    }
  }
  return definePropertiesFromSourceObject;
};
var initializeModule = (
  _sourceObject,
  sourceObjectProperties,
  _prototypeObject,
) => {
  if (_sourceObject != null) {
    _prototypeObject = Object.create(Object.getPrototypeOf(_sourceObject));
  } else {
    _prototypeObject = {};
  }
  return defineProperties(
    sourceObjectProperties || !_sourceObject || !_sourceObject.__esModule
      ? Object.defineProperty(_prototypeObject, "default", {
          value: _sourceObject,
          enumerable: true,
        })
      : _prototypeObject,
    _sourceObject,
  );
};
var _createDeferredExecutor = createDeferredExecutor((deferredExecutor) => {
  "use strict";

  Object.defineProperty(deferredExecutor, "__esModule", {
    value: true,
  });
  deferredExecutor.createDeferredExecutor = undefined;
  function createPromiseHandler() {
    let createAsyncHandler = (asyncHandlerExecutor, handleError) => {
      createAsyncHandler.state = "pending";
      createAsyncHandler.resolve = (handleAsyncResult) => {
        if (createAsyncHandler.state !== "pending") {
          return;
        }
        createAsyncHandler.result = handleAsyncResult;
        let resolveAsyncHandler = (returnFulfilledState) => {
          createAsyncHandler.state = "fulfilled";
          return returnFulfilledState;
        };
        return asyncHandlerExecutor(
          handleAsyncResult instanceof Promise
            ? handleAsyncResult
            : Promise.resolve(handleAsyncResult).then(resolveAsyncHandler),
        );
      };
      createAsyncHandler.reject = (errorHandler) => {
        if (createAsyncHandler.state === "pending") {
          queueMicrotask(() => {
            createAsyncHandler.state = "rejected";
          });
          return handleError(
            (createAsyncHandler.rejectionReason = errorHandler),
          );
        }
      };
    };
    return createAsyncHandler;
  }
  deferredExecutor.createDeferredExecutor = createPromiseHandler;
});
var createDeferredPromise = createDeferredExecutor((DeferredPromiseWrapper) => {
  "use strict";

  Object.defineProperty(DeferredPromiseWrapper, "__esModule", {
    value: true,
  });
  DeferredPromiseWrapper.DeferredPromise = undefined;
  var ___createDeferredExecutor = _createDeferredExecutor();
  var DeferredPromise = class extends Promise {
    #e;
    resolve;
    reject;
    constructor(initialDataValue = null) {
      let _deferredExecutor = (0,
      ___createDeferredExecutor.createDeferredExecutor)();
      super((executeDeferredTask, taskExecutionParameter) => {
        _deferredExecutor(executeDeferredTask, taskExecutionParameter);
        initialDataValue?.(_deferredExecutor.resolve, _deferredExecutor.reject);
      });
      this.#e = _deferredExecutor;
      this.resolve = this.#e.resolve;
      this.reject = this.#e.reject;
    }
    get state() {
      return this.#e.state;
    }
    get rejectionReason() {
      return this.#e.rejectionReason;
    }
    then(processPromise, processCallback) {
      return this.#t(super.then(processPromise, processCallback));
    }
    catch(_errorHandler) {
      return this.#t(super.catch(_errorHandler));
    }
    finally(finalizePromise) {
      return this.#t(super.finally(finalizePromise));
    }
    #t(definePromiseResolution) {
      return Object.defineProperties(definePromiseResolution, {
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
var __createDeferredExecutor = createDeferredExecutor(
  (moduleBindingUtility) => {
    "use strict";

    var createModuleBinding =
      (moduleBindingUtility && moduleBindingUtility.__createBinding) ||
      (Object.create
        ? function (
            createBinding,
            _createBinding,
            propertyBinding,
            _propertyBinding = propertyBinding,
          ) {
            var __propertyDescriptor = Object.getOwnPropertyDescriptor(
              _createBinding,
              propertyBinding,
            );
            if (
              !__propertyDescriptor ||
              ("get" in __propertyDescriptor
                ? !_createBinding.__esModule
                : __propertyDescriptor.writable ||
                  __propertyDescriptor.configurable)
            ) {
              __propertyDescriptor = {
                enumerable: true,
                get() {
                  return _createBinding[propertyBinding];
                },
              };
            }
            Object.defineProperty(
              createBinding,
              _propertyBinding,
              __propertyDescriptor,
            );
          }
        : function (
            __createBinding,
            ___createBinding,
            sourceProperty,
            _sourceProperty = sourceProperty,
          ) {
            __createBinding[_sourceProperty] = ___createBinding[sourceProperty];
          });
    var exportModuleProperties =
      (moduleBindingUtility && moduleBindingUtility.__exportStar) ||
      function (exportProperties, exportDeferredProperties) {
        for (var exportPropertyName in exportProperties) {
          if (
            exportPropertyName !== "default" &&
            !Object.prototype.hasOwnProperty.call(
              exportDeferredProperties,
              exportPropertyName,
            )
          ) {
            createModuleBinding(
              exportDeferredProperties,
              exportProperties,
              exportPropertyName,
            );
          }
        }
      };
    Object.defineProperty(moduleBindingUtility, "__esModule", {
      value: true,
    });
    exportModuleProperties(_createDeferredExecutor(), moduleBindingUtility);
    exportModuleProperties(createDeferredPromise(), moduleBindingUtility);
  },
);
var definePropertyBinding = createDeferredExecutor(
  (formatPropertyDescriptor, formatPropertyValue) => {
    formatPropertyValue.exports = function (
      propertyDescriptor,
      propertyDefinition,
    ) {
      var formattedPropertyDescriptor = "000000000" + propertyDescriptor;
      return formattedPropertyDescriptor.substr(
        formattedPropertyDescriptor.length - propertyDefinition,
      );
    };
  },
);
var _definePropertyBinding = createDeferredExecutor(
  (getMimeTypeAndUserAgentLength, exportMimeTypeAndUserAgentLength) => {
    var getMimeTypeAndUserAgentLengthValue = definePropertyBinding();
    var context = typeof window == "object" ? window : self;
    var contextKeysLength = Object.keys(context).length;
    var mimeTypesCount = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var computedDataLength = getMimeTypeAndUserAgentLengthValue(
      (mimeTypesCount + navigator.userAgent.length).toString(36) +
        contextKeysLength.toString(36),
      4,
    );
    exportMimeTypeAndUserAgentLength.exports = function () {
      return computedDataLength;
    };
  },
);
var createBindingExecutor = createDeferredExecutor(
  (generateRandomValue, exportedRandomValueGenerator) => {
    var _generateRandomValue;
    var cryptoRandomSource =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (cryptoRandomSource) {
      maxRandomValue = Math.pow(2, 32) - 1;
      _generateRandomValue = function () {
        return Math.abs(
          cryptoRandomSource.getRandomValues(new Uint32Array(1))[0] /
            maxRandomValue,
        );
      };
    } else {
      _generateRandomValue = Math.random;
    }
    var maxRandomValue;
    exportedRandomValueGenerator.exports = _generateRandomValue;
  },
);
var deferredBindingExecutor = createDeferredExecutor(
  (___generateUniqueSlug, _generateUniqueIdentifier) => {
    var ____generateUniqueSlug = _definePropertyBinding();
    var __generateUniqueIdentifier = definePropertyBinding();
    var createUniqueSlug = createBindingExecutor();
    var uniqueIdentifierCounter = 0;
    var slugBaseExponent = 4;
    var base36 = 36;
    var maxUniqueSlugValue = Math.pow(base36, slugBaseExponent);
    function generateUniqueSlugIdentifier() {
      return __generateUniqueIdentifier(
        ((createUniqueSlug() * maxUniqueSlugValue) << 0).toString(base36),
        slugBaseExponent,
      );
    }
    function getNextUniqueIdentifier() {
      if (uniqueIdentifierCounter < maxUniqueSlugValue) {
        uniqueIdentifierCounter = uniqueIdentifierCounter;
      } else {
        uniqueIdentifierCounter = 0;
      }
      uniqueIdentifierCounter++;
      return uniqueIdentifierCounter - 1;
    }
    function generateUniqueSlugWithTimestamp() {
      var slugPrefix = "c";
      var timestampInBase36 = new Date().getTime().toString(base36);
      var uniqueIdentifier = __generateUniqueIdentifier(
        getNextUniqueIdentifier().toString(base36),
        slugBaseExponent,
      );
      var uniqueSlugSuffix = ____generateUniqueSlug();
      var _uniqueSlugSuffix =
        generateUniqueSlugIdentifier() + generateUniqueSlugIdentifier();
      return (
        slugPrefix +
        timestampInBase36 +
        uniqueIdentifier +
        uniqueSlugSuffix +
        _uniqueSlugSuffix
      );
    }
    generateUniqueSlugWithTimestamp.slug = function () {
      var timestampBase36 = new Date().getTime().toString(36);
      var lastFourCharsOfF3 = getNextUniqueIdentifier().toString(36).slice(-4);
      var uniqueSlugIdentifier =
        ____generateUniqueSlug().slice(0, 1) +
        ____generateUniqueSlug().slice(-1);
      var lastTwoCharsOfF2 = generateUniqueSlugIdentifier().slice(-2);
      return (
        timestampBase36.slice(-2) +
        lastFourCharsOfF3 +
        uniqueSlugIdentifier +
        lastTwoCharsOfF2
      );
    };
    generateUniqueSlugWithTimestamp.isCuid = function (
      generateRandomValueBetweenZeroAndOne,
    ) {
      if (typeof generateRandomValueBetweenZeroAndOne != "string") {
        return false;
      } else {
        return !!generateRandomValueBetweenZeroAndOne.startsWith("c");
      }
    };
    generateUniqueSlugWithTimestamp.isSlug = function (bindingExecutor) {
      if (typeof bindingExecutor != "string") {
        return false;
      }
      var bindingExecutorLength = bindingExecutor.length;
      return bindingExecutorLength >= 7 && bindingExecutorLength <= 10;
    };
    generateUniqueSlugWithTimestamp.fingerprint = ____generateUniqueSlug;
    _generateUniqueIdentifier.exports = generateUniqueSlugWithTimestamp;
  },
);
var generateUniqueIdentifier = /(%?)(%([sdjo]))/g;
function transformUniqueIdentifierBasedOnType(
  generateUniqueId,
  generateSlugUniqueIdentifier,
) {
  switch (generateSlugUniqueIdentifier) {
    case "s":
      return generateUniqueId;
    case "d":
    case "i":
      return Number(generateUniqueId);
    case "j":
      return JSON.stringify(generateUniqueId);
    case "o": {
      if (typeof generateUniqueId == "string") {
        return generateUniqueId;
      }
      let generatedIdJson = JSON.stringify(generateUniqueId);
      if (
        generatedIdJson === "{}" ||
        generatedIdJson === "[]" ||
        /^\[object .+?\]$/.test(generatedIdJson)
      ) {
        return generateUniqueId;
      } else {
        return generatedIdJson;
      }
    }
  }
}
function formatSlugWithUniqueIdentifiers(
  generateUniqueSlug,
  ...uniqueIdentifiers
) {
  if (uniqueIdentifiers.length === 0) {
    return generateUniqueSlug;
  }
  let currentIdentifierIndex = 0;
  let formattedSlug = generateUniqueSlug.replace(
    generateUniqueIdentifier,
    (
      getTransformedIdentifier,
      shouldTransformIdentifier,
      transformUniqueIdentifier,
      identifierTransformationType,
    ) => {
      let currentUniqueIdentifier = uniqueIdentifiers[currentIdentifierIndex];
      let transformedIdentifier = transformUniqueIdentifierBasedOnType(
        currentUniqueIdentifier,
        identifierTransformationType,
      );
      if (shouldTransformIdentifier) {
        return getTransformedIdentifier;
      } else {
        currentIdentifierIndex++;
        return transformedIdentifier;
      }
    },
  );
  if (currentIdentifierIndex < uniqueIdentifiers.length) {
    formattedSlug +=
      " " + uniqueIdentifiers.slice(currentIdentifierIndex).join(" ");
  }
  formattedSlug = formattedSlug.replace(/%{2,2}/g, "%");
  return formattedSlug;
}
var uniqueStringLength = 2;
function truncateStackAndUniqueId(generateUniqueIdOrSlug) {
  if (!generateUniqueIdOrSlug.stack) {
    return;
  }
  let stackLinesArray = generateUniqueIdOrSlug.stack.split("\n");
  stackLinesArray.splice(1, uniqueStringLength);
  generateUniqueIdOrSlug.stack = stackLinesArray.join("\n");
}
var getFilteredResponse = class extends Error {
  constructor(inputData, ...additionalIdentifiers) {
    super(inputData);
    this.message = inputData;
    this.name = "Invariant Violation";
    this.message = formatSlugWithUniqueIdentifiers(
      inputData,
      ...additionalIdentifiers,
    );
    truncateStackAndUniqueId(this);
  }
};
var replacePlaceholderWithUniqueSlug = (
  isValidResponse,
  responseData,
  ..._additionalParameters
) => {
  if (!isValidResponse) {
    throw new getFilteredResponse(responseData, ..._additionalParameters);
  }
};
replacePlaceholderWithUniqueSlug.as = (
  generateErrorBasedOnPrototype,
  isValidInput,
  inputValue,
  ...additionalParameters
) => {
  if (!isValidInput) {
    throw generateErrorBasedOnPrototype.prototype.name != null
      ? new generateErrorBasedOnPrototype(
          formatSlugWithUniqueIdentifiers(inputValue, additionalParameters),
        )
      : generateErrorBasedOnPrototype(
          formatSlugWithUniqueIdentifiers(inputValue, additionalParameters),
        );
  }
};
var generateUniqueSlugAndModify = initializeModule(__createDeferredExecutor());
var stringifiedValue = window.localStorage.CSB_EMULATOR_DEBUG;
function createUniqueIdGenerator(generateUniqueValue) {
  return function (_generateUniqueId, ...callbackFunctions) {};
}
var __generateUniqueId = "preview-manager";
var generateUniqueIdString = "preview/ready";
var jsonStringifiedGenerateUniqueId = "preview/response";
var generatedId = "preview/manager-ack";
var stackTraceLines = "bridge/init";
var formattedUniqueId = "preview/runtime-response";
var isIdentityObject = "bridge/close";
var getUniqueIdOrSlug = initializeModule(deferredBindingExecutor());
var ___generateUniqueId = 4294967295;
function setUint32ValuesWithPlaceholder(
  replacementFunction,
  errorResponseWithStack,
  placeholderVariable,
) {
  var placeholderDividedByMaxUint32 = placeholderVariable / 4294967296;
  var uint32Value = placeholderVariable;
  replacementFunction.setUint32(
    errorResponseWithStack,
    placeholderDividedByMaxUint32,
  );
  replacementFunction.setUint32(errorResponseWithStack + 4, uint32Value);
}
function setFormattedErrorResponse(
  generateFormattedMessage,
  FilteredResponseError,
  _FilteredResponseError,
) {
  var errorResponseCode = Math.floor(_FilteredResponseError / 4294967296);
  var __filteredResponseError = _FilteredResponseError;
  generateFormattedMessage.setUint32(FilteredResponseError, errorResponseCode);
  generateFormattedMessage.setUint32(
    FilteredResponseError + 4,
    __filteredResponseError,
  );
}
function extractUniqueSlugFromBuffer(
  _replacePlaceholderWithUniqueSlug,
  __replacePlaceholderWithUniqueSlug,
) {
  var uniqueSlug = _replacePlaceholderWithUniqueSlug.getInt32(
    __replacePlaceholderWithUniqueSlug,
  );
  var highPrecisionUniqueSlug = _replacePlaceholderWithUniqueSlug.getUint32(
    __replacePlaceholderWithUniqueSlug + 4,
  );
  return uniqueSlug * 4294967296 + highPrecisionUniqueSlug;
}
function combineUint32TwoValues(
  ___replacePlaceholderWithUniqueSlug,
  ____replacePlaceholderWithUniqueSlug,
) {
  var combineUint32FromBuffer = ___replacePlaceholderWithUniqueSlug.getUint32(
    ____replacePlaceholderWithUniqueSlug,
  );
  var highOrderComponent = ___replacePlaceholderWithUniqueSlug.getUint32(
    ____replacePlaceholderWithUniqueSlug + 4,
  );
  return combineUint32FromBuffer * 4294967296 + highOrderComponent;
}
var _generateUniqueSlugAndModify =
  (typeof process === "undefined" ||
    (process == null ? undefined : process.env)?.TEXT_ENCODING !== "never") &&
  typeof TextEncoder !== "undefined" &&
  typeof TextDecoder !== "undefined";
function calculateCharacterByteSize(__generateUniqueIdOrSlug) {
  for (
    var slugLength = __generateUniqueIdOrSlug.length,
      _byteCount = 0,
      byteIndex = 0;
    byteIndex < slugLength;

  ) {
    var charCode = __generateUniqueIdOrSlug.charCodeAt(byteIndex++);
    if ((charCode & 4294967168) === 0) {
      _byteCount++;
      continue;
    } else if ((charCode & 4294965248) === 0) {
      _byteCount += 2;
    } else {
      if (charCode >= 55296 && charCode <= 56319 && byteIndex < slugLength) {
        var charCodeAtByteIndex =
          __generateUniqueIdOrSlug.charCodeAt(byteIndex);
        if ((charCodeAtByteIndex & 64512) === 56320) {
          ++byteIndex;
          charCode =
            ((charCode & 1023) << 10) + (charCodeAtByteIndex & 1023) + 65536;
        }
      }
      if ((charCode & 4294901760) === 0) {
        _byteCount += 3;
      } else {
        _byteCount += 4;
      }
    }
  }
  return _byteCount;
}
function convertHandleErrorResponseToUTF8(
  handleErrorResponse,
  _placeholderVariable,
  generateErrorResponseWithStack,
) {
  for (
    var handleErrorResponseLength = handleErrorResponse.length,
      errorResponseIndex = generateErrorResponseWithStack,
      _currentCharIndex = 0;
    _currentCharIndex < handleErrorResponseLength;

  ) {
    var charCodeValue = handleErrorResponse.charCodeAt(_currentCharIndex++);
    if ((charCodeValue & 4294967168) === 0) {
      _placeholderVariable[errorResponseIndex++] = charCodeValue;
      continue;
    } else if ((charCodeValue & 4294965248) === 0) {
      _placeholderVariable[errorResponseIndex++] =
        ((charCodeValue >> 6) & 31) | 192;
    } else {
      if (
        charCodeValue >= 55296 &&
        charCodeValue <= 56319 &&
        _currentCharIndex < handleErrorResponseLength
      ) {
        var currentCharCode = handleErrorResponse.charCodeAt(_currentCharIndex);
        if ((currentCharCode & 64512) === 56320) {
          ++_currentCharIndex;
          charCodeValue =
            ((charCodeValue & 1023) << 10) + (currentCharCode & 1023) + 65536;
        }
      }
      if ((charCodeValue & 4294901760) === 0) {
        _placeholderVariable[errorResponseIndex++] =
          ((charCodeValue >> 12) & 15) | 224;
        _placeholderVariable[errorResponseIndex++] =
          ((charCodeValue >> 6) & 63) | 128;
      } else {
        _placeholderVariable[errorResponseIndex++] =
          ((charCodeValue >> 18) & 7) | 240;
        _placeholderVariable[errorResponseIndex++] =
          ((charCodeValue >> 12) & 63) | 128;
        _placeholderVariable[errorResponseIndex++] =
          ((charCodeValue >> 6) & 63) | 128;
      }
    }
    _placeholderVariable[errorResponseIndex++] = (charCodeValue & 63) | 128;
  }
}
var calculateHighLowValue = _generateUniqueSlugAndModify
  ? new TextEncoder()
  : undefined;
var dataManipulationIndex = _generateUniqueSlugAndModify
  ? typeof process !== "undefined" &&
    (process == null ? undefined : process.env)?.TEXT_ENCODING !== "force"
    ? 200
    : 0
  : ___generateUniqueId;
function setFilteredResponseErrorValue(
  errorResponseStack,
  filteredResponseError,
  setUint32ForFilteredResponse,
) {
  filteredResponseError.set(
    calculateHighLowValue.encode(errorResponseStack),
    setUint32ForFilteredResponse,
  );
}
function encodeHighLowValueWithSlug(
  _generateUniqueSlug,
  calculateFormattedMessageFromError,
  __generateUniqueSlugAndModify,
) {
  calculateHighLowValue.encodeInto(
    _generateUniqueSlug,
    calculateFormattedMessageFromError.subarray(__generateUniqueSlugAndModify),
  );
}
var handleResponseError = calculateHighLowValue?.encodeInto
  ? encodeHighLowValueWithSlug
  : setFilteredResponseErrorValue;
var _filteredResponseError = 4096;
function decodeFilteredResponseError(
  __FilteredResponseError,
  __generateUniqueSlug,
  fetchFilteredResponseError,
) {
  for (
    var currentIndex = __generateUniqueSlug,
      maxFetchErrorIndex = currentIndex + fetchFilteredResponseError,
      decodedUnicodePoints = [],
      decodedCharacterBuffer = "";
    currentIndex < maxFetchErrorIndex;

  ) {
    var unicodePoint = __FilteredResponseError[currentIndex++];
    if ((unicodePoint & 128) === 0) {
      decodedUnicodePoints.push(unicodePoint);
    } else if ((unicodePoint & 224) === 192) {
      var extractedUnicodeSegment =
        __FilteredResponseError[currentIndex++] & 63;
      decodedUnicodePoints.push(
        ((unicodePoint & 31) << 6) | extractedUnicodeSegment,
      );
    } else if ((unicodePoint & 240) === 224) {
      var extractedUnicodeSegment =
        __FilteredResponseError[currentIndex++] & 63;
      var nextUnicodeSegment = __FilteredResponseError[currentIndex++] & 63;
      decodedUnicodePoints.push(
        ((unicodePoint & 31) << 12) |
          (extractedUnicodeSegment << 6) |
          nextUnicodeSegment,
      );
    } else if ((unicodePoint & 248) === 240) {
      var extractedUnicodeSegment =
        __FilteredResponseError[currentIndex++] & 63;
      var nextUnicodeSegment = __FilteredResponseError[currentIndex++] & 63;
      var thirdUnicodeSegment = __FilteredResponseError[currentIndex++] & 63;
      var unicodeCodePoint =
        ((unicodePoint & 7) << 18) |
        (extractedUnicodeSegment << 12) |
        (nextUnicodeSegment << 6) |
        thirdUnicodeSegment;
      if (unicodeCodePoint > 65535) {
        unicodeCodePoint -= 65536;
        decodedUnicodePoints.push(((unicodeCodePoint >>> 10) & 1023) | 55296);
        unicodeCodePoint = (unicodeCodePoint & 1023) | 56320;
      }
      decodedUnicodePoints.push(unicodeCodePoint);
    } else {
      decodedUnicodePoints.push(unicodePoint);
    }
    if (decodedUnicodePoints.length >= _filteredResponseError) {
      decodedCharacterBuffer += String.fromCharCode.apply(
        String,
        decodedUnicodePoints,
      );
      decodedUnicodePoints.length = 0;
    }
  }
  if (decodedUnicodePoints.length > 0) {
    decodedCharacterBuffer += String.fromCharCode.apply(
      String,
      decodedUnicodePoints,
    );
  }
  return decodedCharacterBuffer;
}
var calculateStringByteLength = _generateUniqueSlugAndModify
  ? new TextDecoder()
  : null;
var byteCount = _generateUniqueSlugAndModify
  ? typeof process !== "undefined" &&
    (process == null ? undefined : process.env)?.TEXT_DECODER !== "force"
    ? 200
    : 0
  : ___generateUniqueId;
function decodeCharacterSegment(
  currentCharacterCode,
  currentCharacterIndex,
  processCharacterEncoding,
) {
  var characterSegment = currentCharacterCode.subarray(
    currentCharacterIndex,
    currentCharacterIndex + processCharacterEncoding,
  );
  return calculateStringByteLength.decode(characterSegment);
}
var handleErrorResponseCharacter = (function () {
  function createUnicodeCharacterProcessor(
    decodeUTF8Character,
    processUnicodeCharacters,
  ) {
    this.type = decodeUTF8Character;
    this.data = processUnicodeCharacters;
  }
  return createUnicodeCharacterProcessor;
})();
var decodeUnicodeString = (function () {
  function __handleErrorResponse(
    convertHandleErrorResponseToUnicode,
    handleUnicodeConversion,
  ) {
    __handleErrorResponse =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (getUtf8EncodedLength, getUnicodeCharArray) {
          getUtf8EncodedLength.__proto__ = getUnicodeCharArray;
        }) ||
      function (processErrorResponse, convertUnicodeToUtf8) {
        for (var unicodeToUtf8Mappings in convertUnicodeToUtf8) {
          if (
            Object.prototype.hasOwnProperty.call(
              convertUnicodeToUtf8,
              unicodeToUtf8Mappings,
            )
          ) {
            processErrorResponse[unicodeToUtf8Mappings] =
              convertUnicodeToUtf8[unicodeToUtf8Mappings];
          }
        }
      };
    return __handleErrorResponse(
      convertHandleErrorResponseToUnicode,
      handleUnicodeConversion,
    );
  }
  return function (_generateErrorResponseWithStack, parseUnicodeCharacter) {
    if (
      typeof parseUnicodeCharacter != "function" &&
      parseUnicodeCharacter !== null
    ) {
      throw new TypeError(
        "Class extends value " +
          String(parseUnicodeCharacter) +
          " is not a constructor or null",
      );
    }
    __handleErrorResponse(
      _generateErrorResponseWithStack,
      parseUnicodeCharacter,
    );
    function initializeErrorResponseConstructor() {
      this.constructor = _generateErrorResponseWithStack;
    }
    if (parseUnicodeCharacter === null) {
      _generateErrorResponseWithStack.prototype = Object.create(
        parseUnicodeCharacter,
      );
    } else {
      _generateErrorResponseWithStack.prototype =
        ((initializeErrorResponseConstructor.prototype =
          parseUnicodeCharacter.prototype),
        new initializeErrorResponseConstructor());
    }
  };
})();
var charCodeProcessing = (function (processUnicodeValues) {
  decodeUnicodeString(createEncodingObject, processUnicodeValues);
  function createEncodingObject(updateEncodingValues) {
    var encodingObject =
      processUnicodeValues.call(this, updateEncodingValues) || this;
    var prototypeObject = Object.create(createEncodingObject.prototype);
    Object.setPrototypeOf(encodingObject, prototypeObject);
    Object.defineProperty(encodingObject, "name", {
      configurable: true,
      enumerable: false,
      value: createEncodingObject.name,
    });
    return encodingObject;
  }
  return createEncodingObject;
})(Error);
var responseErrorHandler = -1;
var _handleErrorResponse = 4294967295;
var _responseErrorHandler = 17179869183;
function prepareResponseBuffer(prepareEncodedResponse) {
  var secondsSinceEpoch = prepareEncodedResponse.sec;
  var nanoseconds = prepareEncodedResponse.nsec;
  if (
    secondsSinceEpoch >= 0 &&
    nanoseconds >= 0 &&
    secondsSinceEpoch <= _responseErrorHandler
  ) {
    if (nanoseconds === 0 && secondsSinceEpoch <= _handleErrorResponse) {
      var epochTimeBuffer = new Uint8Array(4);
      var epochTimeDataView = new DataView(epochTimeBuffer.buffer);
      epochTimeDataView.setUint32(0, secondsSinceEpoch);
      return epochTimeBuffer;
    } else {
      var fractionalSeconds = secondsSinceEpoch / 4294967296;
      var secondsEpochLowPart = secondsSinceEpoch & 4294967295;
      var epochTimeBuffer = new Uint8Array(8);
      var epochTimeDataView = new DataView(epochTimeBuffer.buffer);
      epochTimeDataView.setUint32(
        0,
        (nanoseconds << 2) | (fractionalSeconds & 3),
      );
      epochTimeDataView.setUint32(4, secondsEpochLowPart);
      return epochTimeBuffer;
    }
  } else {
    var epochTimeBuffer = new Uint8Array(12);
    var epochTimeDataView = new DataView(epochTimeBuffer.buffer);
    epochTimeDataView.setUint32(0, nanoseconds);
    setFormattedErrorResponse(epochTimeDataView, 4, secondsSinceEpoch);
    return epochTimeBuffer;
  }
}
function convertEncodedResponseToTimestamp(handleEncodedResponse) {
  var encodedResponseTimeInMillis = handleEncodedResponse.getTime();
  var _secondsSinceEpoch = Math.floor(encodedResponseTimeInMillis / 1000);
  var nanosecondsSinceEpoch =
    (encodedResponseTimeInMillis - _secondsSinceEpoch * 1000) * 1000000;
  var nanosecondsFraction = Math.floor(nanosecondsSinceEpoch / 1000000000);
  return {
    sec: _secondsSinceEpoch + nanosecondsFraction,
    nsec: nanosecondsSinceEpoch - nanosecondsFraction * 1000000000,
  };
}
function processDateResponse(decodeUTF8) {
  if (decodeUTF8 instanceof Date) {
    var decodedResponseTimestamp =
      convertEncodedResponseToTimestamp(decodeUTF8);
    return prepareResponseBuffer(decodedResponseTimestamp);
  } else {
    return null;
  }
}
function parseTimestampFromDataView(currentCharIndex) {
  var dataView = new DataView(
    currentCharIndex.buffer,
    currentCharIndex.byteOffset,
    currentCharIndex.byteLength,
  );
  switch (currentCharIndex.byteLength) {
    case 4: {
      var __nanosecondsSinceEpoch = dataView.getUint32(0);
      var __secondsSinceEpoch = 0;
      return {
        sec: __nanosecondsSinceEpoch,
        nsec: __secondsSinceEpoch,
      };
    }
    case 8: {
      var timestampAndNanoseconds = dataView.getUint32(0);
      var _nanosecondsSinceEpoch = dataView.getUint32(4);
      var __nanosecondsSinceEpoch =
        (timestampAndNanoseconds & 3) * 4294967296 + _nanosecondsSinceEpoch;
      var __secondsSinceEpoch = timestampAndNanoseconds >>> 2;
      return {
        sec: __nanosecondsSinceEpoch,
        nsec: __secondsSinceEpoch,
      };
    }
    case 12: {
      var __nanosecondsSinceEpoch = extractUniqueSlugFromBuffer(dataView, 4);
      var __secondsSinceEpoch = dataView.getUint32(0);
      return {
        sec: __nanosecondsSinceEpoch,
        nsec: __secondsSinceEpoch,
      };
    }
    default:
      throw new charCodeProcessing(
        `Unrecognized data size for timestamp (expected 4, 8, or 12): ${currentCharIndex.length}`,
      );
  }
}
function parseErrorResponseTimestamp(_handleErrorResponseCharacter) {
  var timestamp = parseTimestampFromDataView(_handleErrorResponseCharacter);
  return new Date(timestamp.sec * 1000 + timestamp.nsec / 1000000);
}
var temporaryCharacterCode = {
  type: responseErrorHandler,
  encode: processDateResponse,
  decode: parseErrorResponseTimestamp,
};
var handleCharacterProcessing = (function () {
  function initializeCharacterEncoding() {
    this.builtInEncoders = [];
    this.builtInDecoders = [];
    this.encoders = [];
    this.decoders = [];
    this.register(temporaryCharacterCode);
  }
  initializeCharacterEncoding.prototype.register = function (
    handleCharacterEncoding,
  ) {
    var characterEncodingType = handleCharacterEncoding.type;
    var characterEncodingEncodeFunction = handleCharacterEncoding.encode;
    var characterEncodingDecodeFunction = handleCharacterEncoding.decode;
    if (characterEncodingType >= 0) {
      this.encoders[characterEncodingType] = characterEncodingEncodeFunction;
      this.decoders[characterEncodingType] = characterEncodingDecodeFunction;
    } else {
      var encodingTypeIndex = 1 + characterEncodingType;
      this.builtInEncoders[encodingTypeIndex] = characterEncodingEncodeFunction;
      this.builtInDecoders[encodingTypeIndex] = characterEncodingDecodeFunction;
    }
  };
  initializeCharacterEncoding.prototype.tryToEncode = function (
    processCharacterCodeToString,
    decodeCharacterSequence,
  ) {
    for (
      var currentEncoderIndex = 0;
      currentEncoderIndex < this.builtInEncoders.length;
      currentEncoderIndex++
    ) {
      var currentEncoder = this.builtInEncoders[currentEncoderIndex];
      if (currentEncoder != null) {
        var encodedCharacterResponse = currentEncoder(
          processCharacterCodeToString,
          decodeCharacterSequence,
        );
        if (encodedCharacterResponse != null) {
          var _errorResponseCode = -1 - currentEncoderIndex;
          return new handleErrorResponseCharacter(
            _errorResponseCode,
            encodedCharacterResponse,
          );
        }
      }
    }
    for (
      var currentEncoderIndex = 0;
      currentEncoderIndex < this.encoders.length;
      currentEncoderIndex++
    ) {
      var currentEncoder = this.encoders[currentEncoderIndex];
      if (currentEncoder != null) {
        var encodedCharacterResponse = currentEncoder(
          processCharacterCodeToString,
          decodeCharacterSequence,
        );
        if (encodedCharacterResponse != null) {
          var _errorResponseCode = currentEncoderIndex;
          return new handleErrorResponseCharacter(
            _errorResponseCode,
            encodedCharacterResponse,
          );
        }
      }
    }
    if (processCharacterCodeToString instanceof handleErrorResponseCharacter) {
      return processCharacterCodeToString;
    } else {
      return null;
    }
  };
  initializeCharacterEncoding.prototype.decode = function (
    __generateErrorResponseWithStack,
    ___generateErrorResponseWithStack,
    processUnicodeConversion,
  ) {
    var decoderFunction =
      ___generateErrorResponseWithStack < 0
        ? this.builtInDecoders[-1 - ___generateErrorResponseWithStack]
        : this.decoders[___generateErrorResponseWithStack];
    if (decoderFunction) {
      return decoderFunction(
        __generateErrorResponseWithStack,
        ___generateErrorResponseWithStack,
        processUnicodeConversion,
      );
    } else {
      return new handleErrorResponseCharacter(
        ___generateErrorResponseWithStack,
        __generateErrorResponseWithStack,
      );
    }
  };
  initializeCharacterEncoding.defaultCodec = new initializeCharacterEncoding();
  return initializeCharacterEncoding;
})();
function convertToUint8Array(_processUnicodeValues) {
  if (_processUnicodeValues instanceof Uint8Array) {
    return _processUnicodeValues;
  } else if (ArrayBuffer.isView(_processUnicodeValues)) {
    return new Uint8Array(
      _processUnicodeValues.buffer,
      _processUnicodeValues.byteOffset,
      _processUnicodeValues.byteLength,
    );
  } else if (_processUnicodeValues instanceof ArrayBuffer) {
    return new Uint8Array(_processUnicodeValues);
  } else {
    return Uint8Array.from(_processUnicodeValues);
  }
}
function createDataViewFromUnicodeChar(UnicodeCharProcessor) {
  if (UnicodeCharProcessor instanceof ArrayBuffer) {
    return new DataView(UnicodeCharProcessor);
  }
  var unicodeCharArray = convertToUint8Array(UnicodeCharProcessor);
  return new DataView(
    unicodeCharArray.buffer,
    unicodeCharArray.byteOffset,
    unicodeCharArray.byteLength,
  );
}
var decodeUnicodeErrorResponse = 100;
var unicodeCharacterHandler = 2048;
var ____generateErrorResponseWithStack = (function () {
  function _initializeCharacterProcessing(
    defaultCharacterCodec = handleCharacterProcessing.defaultCodec,
    undefinedVariable = undefined,
    _decodeUnicodeErrorResponse = decodeUnicodeErrorResponse,
    _unicodeCharacterHandler = unicodeCharacterHandler,
    isUserLoggedIn = false,
    isProcessingComplete = false,
    _isUserLoggedIn = false,
    isUserAuthenticated = false,
  ) {
    this.extensionCodec = defaultCharacterCodec;
    this.context = undefinedVariable;
    this.maxDepth = _decodeUnicodeErrorResponse;
    this.initialBufferSize = _unicodeCharacterHandler;
    this.sortKeys = isUserLoggedIn;
    this.forceFloat32 = isProcessingComplete;
    this.ignoreUndefined = _isUserLoggedIn;
    this.forceIntegerToFloat = isUserAuthenticated;
    this.pos = 0;
    this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
    this.bytes = new Uint8Array(this.view.buffer);
  }
  _initializeCharacterProcessing.prototype.reinitializeState = function () {
    this.pos = 0;
  };
  _initializeCharacterProcessing.prototype.encodeSharedRef = function (
    prepareEncodedResponseHandler,
  ) {
    this.reinitializeState();
    this.doEncode(prepareEncodedResponseHandler, 1);
    return this.bytes.subarray(0, this.pos);
  };
  _initializeCharacterProcessing.prototype.encode = function (encodeResponse) {
    this.reinitializeState();
    this.doEncode(encodeResponse, 1);
    return this.bytes.slice(0, this.pos);
  };
  _initializeCharacterProcessing.prototype.doEncode = function (
    _prepareEncodedResponse,
    __prepareEncodedResponse,
  ) {
    if (__prepareEncodedResponse > this.maxDepth) {
      throw new Error(`Too deep objects in depth ${__prepareEncodedResponse}`);
    }
    if (_prepareEncodedResponse == null) {
      this.encodeNil();
    } else if (typeof _prepareEncodedResponse == "boolean") {
      this.encodeBoolean(_prepareEncodedResponse);
    } else if (typeof _prepareEncodedResponse == "number") {
      this.encodeNumber(_prepareEncodedResponse);
    } else if (typeof _prepareEncodedResponse == "string") {
      this.encodeString(_prepareEncodedResponse);
    } else {
      this.encodeObject(_prepareEncodedResponse, __prepareEncodedResponse);
    }
  };
  _initializeCharacterProcessing.prototype.ensureBufferSizeToWrite = function (
    createDataViewFromBuffer,
  ) {
    var requiredBufferSize = this.pos + createDataViewFromBuffer;
    if (this.view.byteLength < requiredBufferSize) {
      this.resizeBuffer(requiredBufferSize * 2);
    }
  };
  _initializeCharacterProcessing.prototype.resizeBuffer = function (
    processTimeStamp,
  ) {
    var bufferWithProcessTimeStamp = new ArrayBuffer(processTimeStamp);
    var processedByteArray = new Uint8Array(bufferWithProcessTimeStamp);
    var dataViewWithProcessTimeStamp = new DataView(bufferWithProcessTimeStamp);
    processedByteArray.set(this.bytes);
    this.view = dataViewWithProcessTimeStamp;
    this.bytes = processedByteArray;
  };
  _initializeCharacterProcessing.prototype.encodeNil = function () {
    this.writeU8(192);
  };
  _initializeCharacterProcessing.prototype.encodeBoolean = function (
    processTimestampData,
  ) {
    if (processTimestampData === false) {
      this.writeU8(194);
    } else {
      this.writeU8(195);
    }
  };
  _initializeCharacterProcessing.prototype.encodeNumber = function (
    getTimestampFromDataView,
  ) {
    if (
      Number.isSafeInteger(getTimestampFromDataView) &&
      !this.forceIntegerToFloat
    ) {
      if (getTimestampFromDataView >= 0) {
        if (getTimestampFromDataView < 128) {
          this.writeU8(getTimestampFromDataView);
        } else if (getTimestampFromDataView < 256) {
          this.writeU8(204);
          this.writeU8(getTimestampFromDataView);
        } else if (getTimestampFromDataView < 65536) {
          this.writeU8(205);
          this.writeU16(getTimestampFromDataView);
        } else if (getTimestampFromDataView < 4294967296) {
          this.writeU8(206);
          this.writeU32(getTimestampFromDataView);
        } else {
          this.writeU8(207);
          this.writeU64(getTimestampFromDataView);
        }
      } else if (getTimestampFromDataView >= -32) {
        this.writeU8((getTimestampFromDataView + 32) | 224);
      } else if (getTimestampFromDataView >= -128) {
        this.writeU8(208);
        this.writeI8(getTimestampFromDataView);
      } else if (getTimestampFromDataView >= -32768) {
        this.writeU8(209);
        this.writeI16(getTimestampFromDataView);
      } else if (getTimestampFromDataView >= -2147483648) {
        this.writeU8(210);
        this.writeI32(getTimestampFromDataView);
      } else {
        this.writeU8(211);
        this.writeI64(getTimestampFromDataView);
      }
    } else if (this.forceFloat32) {
      this.writeU8(202);
      this.writeF32(getTimestampFromDataView);
    } else {
      this.writeU8(203);
      this.writeF64(getTimestampFromDataView);
    }
  };
  _initializeCharacterProcessing.prototype.writeStringHeader = function (
    characterEncodingProcessor,
  ) {
    if (characterEncodingProcessor < 32) {
      this.writeU8(160 + characterEncodingProcessor);
    } else if (characterEncodingProcessor < 256) {
      this.writeU8(217);
      this.writeU8(characterEncodingProcessor);
    } else if (characterEncodingProcessor < 65536) {
      this.writeU8(218);
      this.writeU16(characterEncodingProcessor);
    } else if (characterEncodingProcessor < 4294967296) {
      this.writeU8(219);
      this.writeU32(characterEncodingProcessor);
    } else {
      throw new Error(
        `Too long string: ${characterEncodingProcessor} bytes in UTF-8`,
      );
    }
  };
  _initializeCharacterProcessing.prototype.encodeString = function (
    _processCharacterEncoding,
  ) {
    var defaultCharacterBufferSize = 5;
    var characterEncodingLength = _processCharacterEncoding.length;
    if (characterEncodingLength > dataManipulationIndex) {
      var characterByteSize = calculateCharacterByteSize(
        _processCharacterEncoding,
      );
      this.ensureBufferSizeToWrite(
        defaultCharacterBufferSize + characterByteSize,
      );
      this.writeStringHeader(characterByteSize);
      handleResponseError(_processCharacterEncoding, this.bytes, this.pos);
      this.pos += characterByteSize;
    } else {
      var characterByteSize = calculateCharacterByteSize(
        _processCharacterEncoding,
      );
      this.ensureBufferSizeToWrite(
        defaultCharacterBufferSize + characterByteSize,
      );
      this.writeStringHeader(characterByteSize);
      convertHandleErrorResponseToUTF8(
        _processCharacterEncoding,
        this.bytes,
        this.pos,
      );
      this.pos += characterByteSize;
    }
  };
  _initializeCharacterProcessing.prototype.encodeObject = function (
    getErrorResponseFromDecoders,
    handleDecodingProcess,
  ) {
    var encodedErrorResponse = this.extensionCodec.tryToEncode(
      getErrorResponseFromDecoders,
      this.context,
    );
    if (encodedErrorResponse != null) {
      this.encodeExtension(encodedErrorResponse);
    } else if (Array.isArray(getErrorResponseFromDecoders)) {
      this.encodeArray(getErrorResponseFromDecoders, handleDecodingProcess);
    } else if (ArrayBuffer.isView(getErrorResponseFromDecoders)) {
      this.encodeBinary(getErrorResponseFromDecoders);
    } else if (typeof getErrorResponseFromDecoders == "object") {
      this.encodeMap(getErrorResponseFromDecoders, handleDecodingProcess);
    } else {
      throw new Error(
        `Unrecognized object: ${Object.prototype.toString.apply(getErrorResponseFromDecoders)}`,
      );
    }
  };
  _initializeCharacterProcessing.prototype.encodeBinary = function (
    _processCharacterCodeToString,
  ) {
    var characterCodeStringLength = _processCharacterCodeToString.byteLength;
    if (characterCodeStringLength < 256) {
      this.writeU8(196);
      this.writeU8(characterCodeStringLength);
    } else if (characterCodeStringLength < 65536) {
      this.writeU8(197);
      this.writeU16(characterCodeStringLength);
    } else if (characterCodeStringLength < 4294967296) {
      this.writeU8(198);
      this.writeU32(characterCodeStringLength);
    } else {
      throw new Error(`Too large binary: ${characterCodeStringLength}`);
    }
    var processedCharacterCode = convertToUint8Array(
      _processCharacterCodeToString,
    );
    this.writeU8a(processedCharacterCode);
  };
  _initializeCharacterProcessing.prototype.encodeArray = function (
    processUnicodeValue,
    __processUnicodeValues,
  ) {
    var unicodeValueLength = processUnicodeValue.length;
    if (unicodeValueLength < 16) {
      this.writeU8(144 + unicodeValueLength);
    } else if (unicodeValueLength < 65536) {
      this.writeU8(220);
      this.writeU16(unicodeValueLength);
    } else if (unicodeValueLength < 4294967296) {
      this.writeU8(221);
      this.writeU32(unicodeValueLength);
    } else {
      throw new Error(`Too large array: ${unicodeValueLength}`);
    }
    for (
      var unicodeValueIndex = 0, unicodeValues = processUnicodeValue;
      unicodeValueIndex < unicodeValues.length;
      unicodeValueIndex++
    ) {
      var currentUnicodeValue = unicodeValues[unicodeValueIndex];
      this.doEncode(currentUnicodeValue, __processUnicodeValues + 1);
    }
  };
  _initializeCharacterProcessing.prototype.countWithoutUndefined = function (
    handleUnicodeCharacterProcessing,
    _handleCharacterProcessing,
  ) {
    var unicodeCharacterCount = 0;
    for (
      var _characterIndex = 0,
        characterProcessingHandlers = _handleCharacterProcessing;
      _characterIndex < characterProcessingHandlers.length;
      _characterIndex++
    ) {
      var selectedCharacterHandler =
        characterProcessingHandlers[_characterIndex];
      if (
        handleUnicodeCharacterProcessing[selectedCharacterHandler] !== undefined
      ) {
        unicodeCharacterCount++;
      }
    }
    return unicodeCharacterCount;
  };
  _initializeCharacterProcessing.prototype.encodeMap = function (
    initializeCharacterProcessing,
    UnicodeCharacterProcessor,
  ) {
    var characterKeys = Object.keys(initializeCharacterProcessing);
    if (this.sortKeys) {
      characterKeys.sort();
    }
    var characterCount = this.ignoreUndefined
      ? this.countWithoutUndefined(initializeCharacterProcessing, characterKeys)
      : characterKeys.length;
    if (characterCount < 16) {
      this.writeU8(128 + characterCount);
    } else if (characterCount < 65536) {
      this.writeU8(222);
      this.writeU16(characterCount);
    } else if (characterCount < 4294967296) {
      this.writeU8(223);
      this.writeU32(characterCount);
    } else {
      throw new Error(`Too large map object: ${characterCount}`);
    }
    for (
      var characterIndex = 0, characterKeysArray = characterKeys;
      characterIndex < characterKeysArray.length;
      characterIndex++
    ) {
      var currentCharacter = characterKeysArray[characterIndex];
      var characterProcessor = initializeCharacterProcessing[currentCharacter];
      if (!this.ignoreUndefined || characterProcessor !== undefined) {
        this.encodeString(currentCharacter);
        this.doEncode(characterProcessor, UnicodeCharacterProcessor + 1);
      }
    }
  };
  _initializeCharacterProcessing.prototype.encodeExtension = function (
    initialValueForVariable,
  ) {
    var _dataLength = initialValueForVariable.data.length;
    if (_dataLength === 1) {
      this.writeU8(212);
    } else if (_dataLength === 2) {
      this.writeU8(213);
    } else if (_dataLength === 4) {
      this.writeU8(214);
    } else if (_dataLength === 8) {
      this.writeU8(215);
    } else if (_dataLength === 16) {
      this.writeU8(216);
    } else if (_dataLength < 256) {
      this.writeU8(199);
      this.writeU8(_dataLength);
    } else if (_dataLength < 65536) {
      this.writeU8(200);
      this.writeU16(_dataLength);
    } else if (_dataLength < 4294967296) {
      this.writeU8(201);
      this.writeU32(_dataLength);
    } else {
      throw new Error(`Too large extension object: ${_dataLength}`);
    }
    this.writeI8(initialValueForVariable.type);
    this.writeU8a(initialValueForVariable.data);
  };
  _initializeCharacterProcessing.prototype.writeU8 = function (
    checkMaxDepthAndEncodeResponse,
  ) {
    this.ensureBufferSizeToWrite(1);
    this.view.setUint8(this.pos, checkMaxDepthAndEncodeResponse);
    this.pos++;
  };
  _initializeCharacterProcessing.prototype.writeU8a = function (
    _handleEncodedResponse,
  ) {
    var responseLength = _handleEncodedResponse.length;
    this.ensureBufferSizeToWrite(responseLength);
    this.bytes.set(_handleEncodedResponse, this.pos);
    this.pos += responseLength;
  };
  _initializeCharacterProcessing.prototype.writeI8 = function (
    ___prepareEncodedResponse,
  ) {
    this.ensureBufferSizeToWrite(1);
    this.view.setInt8(this.pos, ___prepareEncodedResponse);
    this.pos++;
  };
  _initializeCharacterProcessing.prototype.writeU16 = function (
    encodeResponseBasedOnType,
  ) {
    this.ensureBufferSizeToWrite(2);
    this.view.setUint16(this.pos, encodeResponseBasedOnType);
    this.pos += 2;
  };
  _initializeCharacterProcessing.prototype.writeI16 = function (
    ensureBufferSizeForWriting,
  ) {
    this.ensureBufferSizeToWrite(2);
    this.view.setInt16(this.pos, ensureBufferSizeForWriting);
    this.pos += 2;
  };
  _initializeCharacterProcessing.prototype.writeU32 = function (
    timestampBufferSize,
  ) {
    this.ensureBufferSizeToWrite(4);
    this.view.setUint32(this.pos, timestampBufferSize);
    this.pos += 4;
  };
  _initializeCharacterProcessing.prototype.writeI32 = function (
    encodeTimestampData,
  ) {
    this.ensureBufferSizeToWrite(4);
    this.view.setInt32(this.pos, encodeTimestampData);
    this.pos += 4;
  };
  _initializeCharacterProcessing.prototype.writeF32 = function (
    encodeSafeNumber,
  ) {
    this.ensureBufferSizeToWrite(4);
    this.view.setFloat32(this.pos, encodeSafeNumber);
    this.pos += 4;
  };
  _initializeCharacterProcessing.prototype.writeF64 = function (encodeBoolean) {
    this.ensureBufferSizeToWrite(8);
    this.view.setFloat64(this.pos, encodeBoolean);
    this.pos += 8;
  };
  _initializeCharacterProcessing.prototype.writeU64 = function (
    encodeTimestampAsNumber,
  ) {
    this.ensureBufferSizeToWrite(8);
    setUint32ValuesWithPlaceholder(
      this.view,
      this.pos,
      encodeTimestampAsNumber,
    );
    this.pos += 8;
  };
  _initializeCharacterProcessing.prototype.writeI64 = function (
    writeTimestampToDataView,
  ) {
    this.ensureBufferSizeToWrite(8);
    setFormattedErrorResponse(this.view, this.pos, writeTimestampToDataView);
    this.pos += 8;
  };
  return _initializeCharacterProcessing;
})();
var handleTimestampWriting = {};
function encodeTimestampWithOptions(
  timestampValue,
  _handleTimestampWriting = handleTimestampWriting,
) {
  var errorResponseGenerator = new ____generateErrorResponseWithStack(
    _handleTimestampWriting.extensionCodec,
    _handleTimestampWriting.context,
    _handleTimestampWriting.maxDepth,
    _handleTimestampWriting.initialBufferSize,
    _handleTimestampWriting.sortKeys,
    _handleTimestampWriting.forceFloat32,
    _handleTimestampWriting.ignoreUndefined,
    _handleTimestampWriting.forceIntegerToFloat,
  );
  return errorResponseGenerator.encodeSharedRef(timestampValue);
}
function formatTimestampToHex(_timestampValue) {
  return `${_timestampValue < 0 ? "-" : ""}0x${Math.abs(_timestampValue).toString(16).padStart(2, "0")}`;
}
var writeTimestampFromDataView = 16;
var writeTimestampBasedOnDataView = 16;
var _writeTimestampToDataView = (function () {
  function initializeCacheWithTimestamps(
    _writeTimestampFromDataView = writeTimestampFromDataView,
    _writeTimestampBasedOnDataView = writeTimestampBasedOnDataView,
  ) {
    this.maxKeyLength = _writeTimestampFromDataView;
    this.maxLengthPerKey = _writeTimestampBasedOnDataView;
    this.hit = 0;
    this.miss = 0;
    this.caches = [];
    for (
      var cacheArrayForEachKey = 0;
      cacheArrayForEachKey < this.maxKeyLength;
      cacheArrayForEachKey++
    ) {
      this.caches.push([]);
    }
  }
  initializeCacheWithTimestamps.prototype.canBeCached = function (
    __timestampValue,
  ) {
    return __timestampValue > 0 && __timestampValue <= this.maxKeyLength;
  };
  initializeCacheWithTimestamps.prototype.find = function (
    writeStringHeaderBasedOnCharacterEncoding,
    _getTimestampFromDataView,
    __getTimestampFromDataView,
  ) {
    var cachedCharacterEncoding = this.caches[__getTimestampFromDataView - 1];
    _0x2d51f0: for (
      var characterEncodingCount = 0,
        cachedCharacterEncodings = cachedCharacterEncoding;
      characterEncodingCount < cachedCharacterEncodings.length;
      characterEncodingCount++
    ) {
      var currentCharacterEncoding =
        cachedCharacterEncodings[characterEncodingCount];
      var currentCharacterBytes = currentCharacterEncoding.bytes;
      for (
        var __characterIndex = 0;
        __characterIndex < __getTimestampFromDataView;
        __characterIndex++
      ) {
        if (
          currentCharacterBytes[__characterIndex] !==
          writeStringHeaderBasedOnCharacterEncoding[
            _getTimestampFromDataView + __characterIndex
          ]
        ) {
          continue _0x2d51f0;
        }
      }
      return currentCharacterEncoding.str;
    }
    return null;
  };
  initializeCacheWithTimestamps.prototype.store = function (
    getTimestampOrWriteStringHeaderBasedOnEncoding,
    __writeTimestampToDataView,
  ) {
    var cacheForTimestampData =
      this.caches[getTimestampOrWriteStringHeaderBasedOnEncoding.length - 1];
    var timestampData = {
      bytes: getTimestampOrWriteStringHeaderBasedOnEncoding,
      str: __writeTimestampToDataView,
    };
    if (cacheForTimestampData.length >= this.maxLengthPerKey) {
      cacheForTimestampData[
        (Math.random() * cacheForTimestampData.length) | 0
      ] = timestampData;
    } else {
      cacheForTimestampData.push(timestampData);
    }
  };
  initializeCacheWithTimestamps.prototype.decode = function (
    encodeCharacterEncoding,
    writeCharacterEncoding,
    processCharacterEncodings,
  ) {
    var foundCharacterEncoding = this.find(
      encodeCharacterEncoding,
      writeCharacterEncoding,
      processCharacterEncodings,
    );
    if (foundCharacterEncoding != null) {
      this.hit++;
      return foundCharacterEncoding;
    }
    this.miss++;
    var decodedCharacterEncodingError = decodeFilteredResponseError(
      encodeCharacterEncoding,
      writeCharacterEncoding,
      processCharacterEncodings,
    );
    var slicedCharacterEncoding = Uint8Array.prototype.slice.call(
      encodeCharacterEncoding,
      writeCharacterEncoding,
      writeCharacterEncoding + processCharacterEncodings,
    );
    this.store(slicedCharacterEncoding, decodedCharacterEncodingError);
    return decodedCharacterEncodingError;
  };
  return initializeCacheWithTimestamps;
})();
function __handleCharacterEncoding(
  encodeCharacterString,
  __processCharacterEncoding,
  ___processCharacterEncoding,
  encodeCharacterData,
) {
  function ______processCharacterEncoding(encodeStringWithCharacterEncoding) {
    if (
      encodeStringWithCharacterEncoding instanceof ___processCharacterEncoding
    ) {
      return encodeStringWithCharacterEncoding;
    } else {
      return new ___processCharacterEncoding(function (
        ____processCharacterEncoding,
      ) {
        ____processCharacterEncoding(encodeStringWithCharacterEncoding);
      });
    }
  }
  return new (___processCharacterEncoding ||= Promise)(function (
    processCharacterEncodingData,
    _getErrorResponseFromDecoders,
  ) {
    function _______processCharacterEncoding(_____processCharacterEncoding) {
      try {
        handleCharacterEncodingResponse(
          encodeCharacterData.next(_____processCharacterEncoding),
        );
      } catch (___error) {
        _getErrorResponseFromDecoders(___error);
      }
    }
    function encodeAndHandleCharacterData(p177_encodeObject) {
      try {
        handleCharacterEncodingResponse(
          encodeCharacterData.throw(p177_encodeObject),
        );
      } catch (____error) {
        _getErrorResponseFromDecoders(____error);
      }
    }
    function handleCharacterEncodingResponse(encodeResponseObject) {
      if (encodeResponseObject.done) {
        processCharacterEncodingData(encodeResponseObject.value);
      } else {
        ______processCharacterEncoding(encodeResponseObject.value).then(
          _______processCharacterEncoding,
          encodeAndHandleCharacterData,
        );
      }
    }
    handleCharacterEncodingResponse(
      (encodeCharacterData = encodeCharacterData.apply(
        encodeCharacterString,
        __processCharacterEncoding || [],
      )).next(),
    );
  });
}
function initializeDataEncoder(encodeData, encodeBinaryData) {
  var dataEncoderContext = {
    label: 0,
    sent() {
      if (errorHandlingContext[0] & 1) {
        throw errorHandlingContext[1];
      }
      return errorHandlingContext[1];
    },
    trys: [],
    ops: [],
  };
  var isGeneratorExecuting;
  var currentDecoderState;
  var errorHandlingContext;
  var dataEncoder;
  dataEncoder = {
    next: createDecodingProcessHandler(0),
    throw: createDecodingProcessHandler(1),
    return: createDecodingProcessHandler(2),
  };
  if (typeof Symbol == "function") {
    dataEncoder[Symbol.iterator] = function () {
      return this;
    };
  }
  return dataEncoder;
  function createDecodingProcessHandler(_handleDecodingProcess) {
    return function (handleDecodingResponse) {
      return processEncodingRequest([
        _handleDecodingProcess,
        handleDecodingResponse,
      ]);
    };
  }
  function processEncodingRequest(_encodeBinaryData) {
    if (isGeneratorExecuting) {
      throw new TypeError("Generator is already executing.");
    }
    while (dataEncoderContext) {
      try {
        isGeneratorExecuting = 1;
        if (
          currentDecoderState &&
          (errorHandlingContext =
            _encodeBinaryData[0] & 2
              ? currentDecoderState.return
              : _encodeBinaryData[0]
                ? currentDecoderState.throw ||
                  ((errorHandlingContext = currentDecoderState.return) &&
                    errorHandlingContext.call(currentDecoderState),
                  0)
                : currentDecoderState.next) &&
          !(errorHandlingContext = errorHandlingContext.call(
            currentDecoderState,
            _encodeBinaryData[1],
          )).done
        ) {
          return errorHandlingContext;
        }
        currentDecoderState = 0;
        if (errorHandlingContext) {
          _encodeBinaryData = [
            _encodeBinaryData[0] & 2,
            errorHandlingContext.value,
          ];
        }
        switch (_encodeBinaryData[0]) {
          case 0:
          case 1:
            errorHandlingContext = _encodeBinaryData;
            break;
          case 4:
            dataEncoderContext.label++;
            return {
              value: _encodeBinaryData[1],
              done: false,
            };
          case 5:
            dataEncoderContext.label++;
            currentDecoderState = _encodeBinaryData[1];
            _encodeBinaryData = [0];
            continue;
          case 7:
            _encodeBinaryData = dataEncoderContext.ops.pop();
            dataEncoderContext.trys.pop();
            continue;
          default:
            errorHandlingContext = dataEncoderContext.trys;
            if (
              !(errorHandlingContext =
                errorHandlingContext.length > 0 &&
                errorHandlingContext[errorHandlingContext.length - 1]) &&
              (_encodeBinaryData[0] === 6 || _encodeBinaryData[0] === 2)
            ) {
              dataEncoderContext = 0;
              continue;
            }
            if (
              _encodeBinaryData[0] === 3 &&
              (!errorHandlingContext ||
                (_encodeBinaryData[1] > errorHandlingContext[0] &&
                  _encodeBinaryData[1] < errorHandlingContext[3]))
            ) {
              dataEncoderContext.label = _encodeBinaryData[1];
              break;
            }
            if (
              _encodeBinaryData[0] === 6 &&
              dataEncoderContext.label < errorHandlingContext[1]
            ) {
              dataEncoderContext.label = errorHandlingContext[1];
              errorHandlingContext = _encodeBinaryData;
              break;
            }
            if (
              errorHandlingContext &&
              dataEncoderContext.label < errorHandlingContext[2]
            ) {
              dataEncoderContext.label = errorHandlingContext[2];
              dataEncoderContext.ops.push(_encodeBinaryData);
              break;
            }
            if (errorHandlingContext[2]) {
              dataEncoderContext.ops.pop();
            }
            dataEncoderContext.trys.pop();
            continue;
        }
        _encodeBinaryData = encodeBinaryData.call(
          encodeData,
          dataEncoderContext,
        );
      } catch (errorCaught) {
        _encodeBinaryData = [6, errorCaught];
        currentDecoderState = 0;
      } finally {
        isGeneratorExecuting = errorHandlingContext = 0;
      }
    }
    if (_encodeBinaryData[0] & 5) {
      throw _encodeBinaryData[1];
    }
    return {
      value: _encodeBinaryData[0] ? _encodeBinaryData[1] : undefined,
      done: true,
    };
  }
}
function processCharacterDataIterator(processCharacterData) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var getAsyncIteratorFromProcessCharacterData =
    processCharacterData[Symbol.asyncIterator];
  var asyncCharacterDataHandler;
  if (getAsyncIteratorFromProcessCharacterData) {
    return getAsyncIteratorFromProcessCharacterData.call(processCharacterData);
  } else {
    if (typeof __values == "function") {
      processCharacterData = __values(processCharacterData);
    } else {
      processCharacterData = processCharacterData[Symbol.iterator]();
    }
    asyncCharacterDataHandler = {};
    registerCharacterDataHandler("next");
    registerCharacterDataHandler("throw");
    registerCharacterDataHandler("return");
    asyncCharacterDataHandler[Symbol.asyncIterator] = function () {
      return this;
    };
    return asyncCharacterDataHandler;
  }
  function registerCharacterDataHandler(encodeAdvancedTypeExtension) {
    asyncCharacterDataHandler[encodeAdvancedTypeExtension] =
      processCharacterData[encodeAdvancedTypeExtension] &&
      function (encodeDataExtension) {
        return new Promise(function (writeUnsigned8Bit, encodeStringLength) {
          encodeDataExtension =
            processCharacterData[encodeAdvancedTypeExtension](
              encodeDataExtension,
            );
          processAndEncodeData(
            writeUnsigned8Bit,
            encodeStringLength,
            encodeDataExtension.done,
            encodeDataExtension.value,
          );
        });
      };
  }
  function processAndEncodeData(
    encodeExtensionBasedOnDataLength,
    handleExtensionObject,
    processDataAndWrite,
    processDataForVariable,
  ) {
    Promise.resolve(processDataForVariable).then(function (writeVariableData) {
      encodeExtensionBasedOnDataLength({
        value: writeVariableData,
        done: processDataAndWrite,
      });
    }, handleExtensionObject);
  }
}
function EncodedValueWriter(writeEncodedValueBasedOnType) {
  if (this instanceof EncodedValueWriter) {
    this.v = writeEncodedValueBasedOnType;
    return this;
  } else {
    return new EncodedValueWriter(writeEncodedValueBasedOnType);
  }
}
function createAsyncIteratorWithHandlers(
  _writeUnsigned8Bit,
  writeInitialValue,
  writeEncodedInteger,
) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var encodedIntegerHandler = writeEncodedInteger.apply(
    _writeUnsigned8Bit,
    writeInitialValue || [],
  );
  var asyncIteratorHandlers;
  var pendingPromiseTasks = [];
  asyncIteratorHandlers = {};
  registerAsyncIteratorHandlerForSignedInt8("next");
  registerAsyncIteratorHandlerForSignedInt8("throw");
  registerAsyncIteratorHandlerForSignedInt8("return");
  asyncIteratorHandlers[Symbol.asyncIterator] = function () {
    return this;
  };
  return asyncIteratorHandlers;
  function registerAsyncIteratorHandlerForSignedInt8(writeSignedInt8) {
    if (encodedIntegerHandler[writeSignedInt8]) {
      asyncIteratorHandlers[writeSignedInt8] = function (writeUnsignedInt8) {
        return new Promise(function (
          writeDataToBuffer,
          ____prepareEncodedResponse,
        ) {
          if (
            !(
              pendingPromiseTasks.push([
                writeSignedInt8,
                writeUnsignedInt8,
                writeDataToBuffer,
                ____prepareEncodedResponse,
              ]) > 1
            )
          ) {
            handleUint8Response(writeSignedInt8, writeUnsignedInt8);
          }
        });
      };
    }
  }
  function handleUint8Response(writeUint8Response, encodeResponseBasedOnDepth) {
    try {
      ___handleEncodedResponse(
        encodedIntegerHandler[writeUint8Response](encodeResponseBasedOnDepth),
      );
    } catch (_error) {
      processEncodedResponse(pendingPromiseTasks[0][3], _error);
    }
  }
  function ___handleEncodedResponse(__handleEncodedResponse) {
    if (__handleEncodedResponse.value instanceof EncodedValueWriter) {
      Promise.resolve(__handleEncodedResponse.value.v).then(
        handleNextUint8Response,
        ____handleEncodedResponse,
      );
    } else {
      processEncodedResponse(
        pendingPromiseTasks[0][2],
        __handleEncodedResponse,
      );
    }
  }
  function handleNextUint8Response(writeEncodedI8) {
    handleUint8Response("next", writeEncodedI8);
  }
  function ____handleEncodedResponse(_____prepareEncodedResponse) {
    handleUint8Response("throw", _____prepareEncodedResponse);
  }
  function processEncodedResponse(writeEncodedResponse, _writeEncodedResponse) {
    writeEncodedResponse(_writeEncodedResponse);
    pendingPromiseTasks.shift();
    if (pendingPromiseTasks.length) {
      handleUint8Response(pendingPromiseTasks[0][0], pendingPromiseTasks[0][1]);
    }
  }
}
function isStringOrNumber(writeBooleanAsFloat64) {
  var typeOfInput = typeof writeBooleanAsFloat64;
  return typeOfInput === "string" || typeOfInput === "number";
}
var writeU64 = -1;
var writeFloatingPoint64 = new DataView(new ArrayBuffer(0));
var writeUInt64 = new Uint8Array(writeFloatingPoint64.buffer);
var writeValue = (function () {
  try {
    writeFloatingPoint64.getInt8(0);
  } catch (__error) {
    return __error.constructor;
  }
  throw new Error("never reached");
})();
var writeDataAsInt64 = new writeValue("Insufficient data");
var f31PrototypeWriteTimestampBufferSize = new _writeTimestampToDataView();
var BufferWriter = (function () {
  function initializeDataProcessing(
    _defaultCharacterCodec = handleCharacterProcessing.defaultCodec,
    initialValue = undefined,
    ____generateUniqueId = ___generateUniqueId,
    _____generateUniqueId = ___generateUniqueId,
    ______generateUniqueId = ___generateUniqueId,
    _______generateUniqueId = ___generateUniqueId,
    ________generateUniqueId = ___generateUniqueId,
    writeTimestampBufferSize = f31PrototypeWriteTimestampBufferSize,
  ) {
    this.extensionCodec = _defaultCharacterCodec;
    this.context = initialValue;
    this.maxStrLength = ____generateUniqueId;
    this.maxBinLength = _____generateUniqueId;
    this.maxArrayLength = ______generateUniqueId;
    this.maxMapLength = _______generateUniqueId;
    this.maxExtLength = ________generateUniqueId;
    this.keyDecoder = writeTimestampBufferSize;
    this.totalPos = 0;
    this.pos = 0;
    this.view = writeFloatingPoint64;
    this.bytes = writeUInt64;
    this.headByte = writeU64;
    this.stack = [];
  }
  initializeDataProcessing.prototype.reinitializeState = function () {
    this.totalPos = 0;
    this.headByte = writeU64;
    this.stack.length = 0;
  };
  initializeDataProcessing.prototype.setBuffer = function (writeBufferSize) {
    this.bytes = convertToUint8Array(writeBufferSize);
    this.view = createDataViewFromUnicodeChar(this.bytes);
    this.pos = 0;
  };
  initializeDataProcessing.prototype.appendBuffer = function (
    ___writeTimestampToDataView,
  ) {
    if (this.headByte === writeU64 && !this.hasRemaining(1)) {
      this.setBuffer(___writeTimestampToDataView);
    } else {
      var dataSubArray = this.bytes.subarray(this.pos);
      var timestampUint8Array = convertToUint8Array(
        ___writeTimestampToDataView,
      );
      var combinedDataArray = new Uint8Array(
        dataSubArray.length + timestampUint8Array.length,
      );
      combinedDataArray.set(dataSubArray);
      combinedDataArray.set(timestampUint8Array, dataSubArray.length);
      this.setBuffer(combinedDataArray);
    }
  };
  initializeDataProcessing.prototype.hasRemaining = function (CacheManager) {
    return this.view.byteLength - this.pos >= CacheManager;
  };
  initializeDataProcessing.prototype.createExtraByteError = function (
    timestampCacheManager,
  ) {
    var _context = this;
    var viewByteLength = _context.view;
    var currentBufferPosition = _context.pos;
    return new RangeError(
      `Extra ${viewByteLength.byteLength - currentBufferPosition} of ${viewByteLength.byteLength} byte(s) found at buffer[${timestampCacheManager}]`,
    );
  };
  initializeDataProcessing.prototype.decode = function (_CacheManager) {
    this.reinitializeState();
    this.setBuffer(_CacheManager);
    var __decodedData = this.doDecodeSync();
    if (this.hasRemaining(1)) {
      throw this.createExtraByteError(this.pos);
    }
    return __decodedData;
  };
  initializeDataProcessing.prototype.decodeMulti = function (
    cacheDataBasedOnTimestamp,
  ) {
    return initializeDataEncoder(this, function (getCachedStringOrNull) {
      switch (getCachedStringOrNull.label) {
        case 0:
          this.reinitializeState();
          this.setBuffer(cacheDataBasedOnTimestamp);
          getCachedStringOrNull.label = 1;
        case 1:
          if (this.hasRemaining(1)) {
            return [4, this.doDecodeSync()];
          } else {
            return [3, 3];
          }
        case 2:
          getCachedStringOrNull.sent();
          return [3, 1];
        case 3:
          return [2];
      }
    });
  };
  initializeDataProcessing.prototype.decodeAsync = function (cacheEntry) {
    var cacheEntryData;
    var currentChunk;
    var isExtraByteDetected;
    var isExtraByteProcessing;
    return __handleCharacterEncoding(this, undefined, undefined, function () {
      var hasEncounteredError;
      var decodedData;
      var currentDataChunk;
      var errorFlag;
      var dataDecoder;
      var dataProcessingFlag;
      var dataDecoderBuffer;
      var dataProcessingHandler;
      return initializeDataEncoder(this, function (storeDataWithTimestamps) {
        switch (storeDataWithTimestamps.label) {
          case 0:
            hasEncounteredError = false;
            storeDataWithTimestamps.label = 1;
          case 1:
            storeDataWithTimestamps.trys.push([1, 6, 7, 12]);
            cacheEntryData = processCharacterDataIterator(cacheEntry);
            storeDataWithTimestamps.label = 2;
          case 2:
            return [4, cacheEntryData.next()];
          case 3:
            currentChunk = storeDataWithTimestamps.sent();
            if (currentChunk.done) {
              return [3, 5];
            }
            currentDataChunk = currentChunk.value;
            if (hasEncounteredError) {
              throw this.createExtraByteError(this.totalPos);
            }
            this.appendBuffer(currentDataChunk);
            try {
              decodedData = this.doDecodeSync();
              hasEncounteredError = true;
            } catch (error) {
              if (!(error instanceof writeValue)) {
                throw error;
              }
            }
            this.totalPos += this.pos;
            storeDataWithTimestamps.label = 4;
          case 4:
            return [3, 2];
          case 5:
            return [3, 12];
          case 6:
            errorFlag = storeDataWithTimestamps.sent();
            isExtraByteDetected = {
              error: errorFlag,
            };
            return [3, 12];
          case 7:
            storeDataWithTimestamps.trys.push([7, , 10, 11]);
            if (
              currentChunk &&
              !currentChunk.done &&
              (isExtraByteProcessing = cacheEntryData.return)
            ) {
              return [4, isExtraByteProcessing.call(cacheEntryData)];
            } else {
              return [3, 9];
            }
          case 8:
            storeDataWithTimestamps.sent();
            storeDataWithTimestamps.label = 9;
          case 9:
            return [3, 11];
          case 10:
            if (isExtraByteDetected) {
              throw isExtraByteDetected.error;
            }
            return [7];
          case 11:
            return [7];
          case 12:
            if (hasEncounteredError) {
              if (this.hasRemaining(1)) {
                throw this.createExtraByteError(this.totalPos);
              }
              return [2, decodedData];
            }
            dataDecoder = this;
            dataProcessingFlag = dataDecoder.headByte;
            dataDecoderBuffer = dataDecoder.pos;
            dataProcessingHandler = dataDecoder.totalPos;
            throw new RangeError(
              `Insufficient data in parsing ${formatTimestampToHex(dataProcessingFlag)} at ${dataProcessingHandler} (${dataDecoderBuffer} in the current buffer)`,
            );
        }
      });
    });
  };
  initializeDataProcessing.prototype.decodeArrayStream = function (
    __handleDecodingProcess,
  ) {
    return this.decodeMultiAsync(__handleDecodingProcess, true);
  };
  initializeDataProcessing.prototype.decodeStream = function (
    processEncodingData,
  ) {
    return this.decodeMultiAsync(processEncodingData, false);
  };
  initializeDataProcessing.prototype.decodeMultiAsync = function (
    _handleCharacterEncoding,
    handleCharacterEncodingProcess,
  ) {
    return createAsyncIteratorWithHandlers(this, arguments, function () {
      var __handleCharacterEncodingProcess;
      var characterEncodingStatus;
      var characterEncodingResult;
      var characterEncodingYield;
      var encodedCharacterValue;
      var currentCharacterEncodingState;
      var characterEncoder;
      var characterEncodingIndex;
      var characterEncodingValue;
      return initializeDataEncoder(this, function (handleBinaryData) {
        switch (handleBinaryData.label) {
          case 0:
            __handleCharacterEncodingProcess = handleCharacterEncodingProcess;
            characterEncodingStatus = -1;
            handleBinaryData.label = 1;
          case 1:
            handleBinaryData.trys.push([1, 13, 14, 19]);
            characterEncodingResult = processCharacterDataIterator(
              _handleCharacterEncoding,
            );
            handleBinaryData.label = 2;
          case 2:
            return [4, EncodedValueWriter(characterEncodingResult.next())];
          case 3:
            characterEncodingYield = handleBinaryData.sent();
            if (characterEncodingYield.done) {
              return [3, 12];
            }
            encodedCharacterValue = characterEncodingYield.value;
            if (
              handleCharacterEncodingProcess &&
              characterEncodingStatus === 0
            ) {
              throw this.createExtraByteError(this.totalPos);
            }
            this.appendBuffer(encodedCharacterValue);
            if (__handleCharacterEncodingProcess) {
              characterEncodingStatus = this.readArraySize();
              __handleCharacterEncodingProcess = false;
              this.complete();
            }
            handleBinaryData.label = 4;
          case 4:
            handleBinaryData.trys.push([4, 9, , 10]);
            handleBinaryData.label = 5;
          case 5:
            return [4, EncodedValueWriter(this.doDecodeSync())];
          case 6:
            return [4, handleBinaryData.sent()];
          case 7:
            handleBinaryData.sent();
            if (--characterEncodingStatus === 0) {
              return [3, 8];
            } else {
              return [3, 5];
            }
          case 8:
            return [3, 10];
          case 9:
            currentCharacterEncodingState = handleBinaryData.sent();
            if (!(currentCharacterEncodingState instanceof writeValue)) {
              throw currentCharacterEncodingState;
            }
            return [3, 10];
          case 10:
            this.totalPos += this.pos;
            handleBinaryData.label = 11;
          case 11:
            return [3, 2];
          case 12:
            return [3, 19];
          case 13:
            characterEncoder = handleBinaryData.sent();
            characterEncodingIndex = {
              error: characterEncoder,
            };
            return [3, 19];
          case 14:
            handleBinaryData.trys.push([14, , 17, 18]);
            if (
              characterEncodingYield &&
              !characterEncodingYield.done &&
              (characterEncodingValue = characterEncodingResult.return)
            ) {
              return [
                4,
                EncodedValueWriter(
                  characterEncodingValue.call(characterEncodingResult),
                ),
              ];
            } else {
              return [3, 16];
            }
          case 15:
            handleBinaryData.sent();
            handleBinaryData.label = 16;
          case 16:
            return [3, 18];
          case 17:
            if (characterEncodingIndex) {
              throw characterEncodingIndex.error;
            }
            return [7];
          case 18:
            return [7];
          case 19:
            return [2];
        }
      });
    });
  };
  initializeDataProcessing.prototype.doDecodeSync = function () {
    _0x197063: while (true) {
      var readHeadByteValue = this.readHeadByte();
      var __decodedValue = undefined;
      if (readHeadByteValue >= 224) {
        __decodedValue = readHeadByteValue - 256;
      } else if (readHeadByteValue < 192) {
        if (readHeadByteValue < 128) {
          __decodedValue = readHeadByteValue;
        } else if (readHeadByteValue < 144) {
          var adjustedHeadByteValue = readHeadByteValue - 128;
          if (adjustedHeadByteValue !== 0) {
            this.pushMapState(adjustedHeadByteValue);
            this.complete();
            continue _0x197063;
          } else {
            __decodedValue = {};
          }
        } else if (readHeadByteValue < 160) {
          var adjustedHeadByteValue = readHeadByteValue - 144;
          if (adjustedHeadByteValue !== 0) {
            this.pushArrayState(adjustedHeadByteValue);
            this.complete();
            continue _0x197063;
          } else {
            __decodedValue = [];
          }
        } else {
          var byteOffset = readHeadByteValue - 160;
          __decodedValue = this.decodeUtf8String(byteOffset, 0);
        }
      } else if (readHeadByteValue === 192) {
        __decodedValue = null;
      } else if (readHeadByteValue === 194) {
        __decodedValue = false;
      } else if (readHeadByteValue === 195) {
        __decodedValue = true;
      } else if (readHeadByteValue === 202) {
        __decodedValue = this.readF32();
      } else if (readHeadByteValue === 203) {
        __decodedValue = this.readF64();
      } else if (readHeadByteValue === 204) {
        __decodedValue = this.readU8();
      } else if (readHeadByteValue === 205) {
        __decodedValue = this.readU16();
      } else if (readHeadByteValue === 206) {
        __decodedValue = this.readU32();
      } else if (readHeadByteValue === 207) {
        __decodedValue = this.readU64();
      } else if (readHeadByteValue === 208) {
        __decodedValue = this.readI8();
      } else if (readHeadByteValue === 209) {
        __decodedValue = this.readI16();
      } else if (readHeadByteValue === 210) {
        __decodedValue = this.readI32();
      } else if (readHeadByteValue === 211) {
        __decodedValue = this.readI64();
      } else if (readHeadByteValue === 217) {
        var byteOffset = this.lookU8();
        __decodedValue = this.decodeUtf8String(byteOffset, 1);
      } else if (readHeadByteValue === 218) {
        var byteOffset = this.lookU16();
        __decodedValue = this.decodeUtf8String(byteOffset, 2);
      } else if (readHeadByteValue === 219) {
        var byteOffset = this.lookU32();
        __decodedValue = this.decodeUtf8String(byteOffset, 4);
      } else if (readHeadByteValue === 220) {
        var adjustedHeadByteValue = this.readU16();
        if (adjustedHeadByteValue !== 0) {
          this.pushArrayState(adjustedHeadByteValue);
          this.complete();
          continue _0x197063;
        } else {
          __decodedValue = [];
        }
      } else if (readHeadByteValue === 221) {
        var adjustedHeadByteValue = this.readU32();
        if (adjustedHeadByteValue !== 0) {
          this.pushArrayState(adjustedHeadByteValue);
          this.complete();
          continue _0x197063;
        } else {
          __decodedValue = [];
        }
      } else if (readHeadByteValue === 222) {
        var adjustedHeadByteValue = this.readU16();
        if (adjustedHeadByteValue !== 0) {
          this.pushMapState(adjustedHeadByteValue);
          this.complete();
          continue _0x197063;
        } else {
          __decodedValue = {};
        }
      } else if (readHeadByteValue === 223) {
        var adjustedHeadByteValue = this.readU32();
        if (adjustedHeadByteValue !== 0) {
          this.pushMapState(adjustedHeadByteValue);
          this.complete();
          continue _0x197063;
        } else {
          __decodedValue = {};
        }
      } else if (readHeadByteValue === 196) {
        var adjustedHeadByteValue = this.lookU8();
        __decodedValue = this.decodeBinary(adjustedHeadByteValue, 1);
      } else if (readHeadByteValue === 197) {
        var adjustedHeadByteValue = this.lookU16();
        __decodedValue = this.decodeBinary(adjustedHeadByteValue, 2);
      } else if (readHeadByteValue === 198) {
        var adjustedHeadByteValue = this.lookU32();
        __decodedValue = this.decodeBinary(adjustedHeadByteValue, 4);
      } else if (readHeadByteValue === 212) {
        __decodedValue = this.decodeExtension(1, 0);
      } else if (readHeadByteValue === 213) {
        __decodedValue = this.decodeExtension(2, 0);
      } else if (readHeadByteValue === 214) {
        __decodedValue = this.decodeExtension(4, 0);
      } else if (readHeadByteValue === 215) {
        __decodedValue = this.decodeExtension(8, 0);
      } else if (readHeadByteValue === 216) {
        __decodedValue = this.decodeExtension(16, 0);
      } else if (readHeadByteValue === 199) {
        var adjustedHeadByteValue = this.lookU8();
        __decodedValue = this.decodeExtension(adjustedHeadByteValue, 1);
      } else if (readHeadByteValue === 200) {
        var adjustedHeadByteValue = this.lookU16();
        __decodedValue = this.decodeExtension(adjustedHeadByteValue, 2);
      } else if (readHeadByteValue === 201) {
        var adjustedHeadByteValue = this.lookU32();
        __decodedValue = this.decodeExtension(adjustedHeadByteValue, 4);
      } else {
        throw new charCodeProcessing(
          `Unrecognized type byte: ${formatTimestampToHex(readHeadByteValue)}`,
        );
      }
      this.complete();
      for (var stackContext = this.stack; stackContext.length > 0; ) {
        var currentStackItem = stackContext[stackContext.length - 1];
        if (currentStackItem.type === 0) {
          currentStackItem.array[currentStackItem.position] = __decodedValue;
          currentStackItem.position++;
          if (currentStackItem.position === currentStackItem.size) {
            stackContext.pop();
            __decodedValue = currentStackItem.array;
          } else {
            continue _0x197063;
          }
        } else if (currentStackItem.type === 1) {
          if (!isStringOrNumber(__decodedValue)) {
            throw new charCodeProcessing(
              "The type of key must be string or number but " +
                typeof __decodedValue,
            );
          }
          if (__decodedValue === "__proto__") {
            throw new charCodeProcessing("The key __proto__ is not allowed");
          }
          currentStackItem.key = __decodedValue;
          currentStackItem.type = 2;
          continue _0x197063;
        } else {
          currentStackItem.map[currentStackItem.key] = __decodedValue;
          currentStackItem.readCount++;
          if (currentStackItem.readCount === currentStackItem.size) {
            stackContext.pop();
            __decodedValue = currentStackItem.map;
          } else {
            currentStackItem.key = null;
            currentStackItem.type = 1;
            continue _0x197063;
          }
        }
      }
      return __decodedValue;
    }
  };
  initializeDataProcessing.prototype.readHeadByte = function () {
    if (this.headByte === writeU64) {
      this.headByte = this.readU8();
    }
    return this.headByte;
  };
  initializeDataProcessing.prototype.complete = function () {
    this.headByte = writeU64;
  };
  initializeDataProcessing.prototype.readArraySize = function () {
    var arrayTypeByte = this.readHeadByte();
    switch (arrayTypeByte) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default: {
        if (arrayTypeByte < 160) {
          return arrayTypeByte - 144;
        }
        throw new charCodeProcessing(
          `Unrecognized array type byte: ${formatTimestampToHex(arrayTypeByte)}`,
        );
      }
    }
  };
  initializeDataProcessing.prototype.pushMapState = function (
    checkRemainingBytesInCache,
  ) {
    if (checkRemainingBytesInCache > this.maxMapLength) {
      throw new charCodeProcessing(
        `Max length exceeded: map length (${checkRemainingBytesInCache}) > maxMapLengthLength (${this.maxMapLength})`,
      );
    }
    this.stack.push({
      type: 1,
      size: checkRemainingBytesInCache,
      key: null,
      readCount: 0,
      map: {},
    });
  };
  initializeDataProcessing.prototype.pushArrayState = function (
    decodeAsyncCacheEntry,
  ) {
    if (decodeAsyncCacheEntry > this.maxArrayLength) {
      throw new charCodeProcessing(
        `Max length exceeded: array length (${decodeAsyncCacheEntry}) > maxArrayLength (${this.maxArrayLength})`,
      );
    }
    this.stack.push({
      type: 0,
      size: decodeAsyncCacheEntry,
      array: new Array(decodeAsyncCacheEntry),
      position: 0,
    });
  };
  initializeDataProcessing.prototype.decodeUtf8String = function (
    getCachedDataByTimestamp,
    decodeCachedDataBasedOnTimestamp,
  ) {
    var keyDecoder;
    if (getCachedDataByTimestamp > this.maxStrLength) {
      throw new charCodeProcessing(
        `Max length exceeded: UTF-8 byte length (${getCachedDataByTimestamp}) > maxStrLength (${this.maxStrLength})`,
      );
    }
    if (
      this.bytes.byteLength <
      this.pos + decodeCachedDataBasedOnTimestamp + getCachedDataByTimestamp
    ) {
      throw writeDataAsInt64;
    }
    var currentPositionAfterDecoding =
      this.pos + decodeCachedDataBasedOnTimestamp;
    var _decodedData;
    if (
      this.stateIsMapKey() &&
      ((keyDecoder = this.keyDecoder) === null || keyDecoder === undefined
        ? undefined
        : keyDecoder.canBeCached(getCachedDataByTimestamp))
    ) {
      _decodedData = this.keyDecoder.decode(
        this.bytes,
        currentPositionAfterDecoding,
        getCachedDataByTimestamp,
      );
    } else if (getCachedDataByTimestamp > byteCount) {
      _decodedData = decodeCharacterSegment(
        this.bytes,
        currentPositionAfterDecoding,
        getCachedDataByTimestamp,
      );
    } else {
      _decodedData = decodeFilteredResponseError(
        this.bytes,
        currentPositionAfterDecoding,
        getCachedDataByTimestamp,
      );
    }
    this.pos += decodeCachedDataBasedOnTimestamp + getCachedDataByTimestamp;
    return _decodedData;
  };
  initializeDataProcessing.prototype.stateIsMapKey = function () {
    if (this.stack.length > 0) {
      var topStackElement = this.stack[this.stack.length - 1];
      return topStackElement.type === 1;
    }
    return false;
  };
  initializeDataProcessing.prototype.decodeBinary = function (
    processStoreDataWithTimestamps,
    processDataWithTimestamps,
  ) {
    if (processStoreDataWithTimestamps > this.maxBinLength) {
      throw new charCodeProcessing(
        `Max length exceeded: bin length (${processStoreDataWithTimestamps}) > maxBinLength (${this.maxBinLength})`,
      );
    }
    if (
      !this.hasRemaining(
        processStoreDataWithTimestamps + processDataWithTimestamps,
      )
    ) {
      throw writeDataAsInt64;
    }
    var currentPosition = this.pos + processDataWithTimestamps;
    var processedBytesSubArray = this.bytes.subarray(
      currentPosition,
      currentPosition + processStoreDataWithTimestamps,
    );
    this.pos += processDataWithTimestamps + processStoreDataWithTimestamps;
    return processedBytesSubArray;
  };
  initializeDataProcessing.prototype.decodeExtension = function (
    _storeDataWithTimestamps,
    processSentData,
  ) {
    if (_storeDataWithTimestamps > this.maxExtLength) {
      throw new charCodeProcessing(
        `Max length exceeded: ext length (${_storeDataWithTimestamps}) > maxExtLength (${this.maxExtLength})`,
      );
    }
    var sendDataHeader = this.view.getInt8(this.pos + processSentData);
    var decodedBinaryData = this.decodeBinary(
      _storeDataWithTimestamps,
      processSentData + 1,
    );
    return this.extensionCodec.decode(
      decodedBinaryData,
      sendDataHeader,
      this.context,
    );
  };
  initializeDataProcessing.prototype.lookU8 = function () {
    return this.view.getUint8(this.pos);
  };
  initializeDataProcessing.prototype.lookU16 = function () {
    return this.view.getUint16(this.pos);
  };
  initializeDataProcessing.prototype.lookU32 = function () {
    return this.view.getUint32(this.pos);
  };
  initializeDataProcessing.prototype.readU8 = function () {
    var getNextByte = this.view.getUint8(this.pos);
    this.pos++;
    return getNextByte;
  };
  initializeDataProcessing.prototype.readI8 = function () {
    var _getNextByte = this.view.getInt8(this.pos);
    this.pos++;
    return _getNextByte;
  };
  initializeDataProcessing.prototype.readU16 = function () {
    var getUint16Value = this.view.getUint16(this.pos);
    this.pos += 2;
    return getUint16Value;
  };
  initializeDataProcessing.prototype.readI16 = function () {
    var readInt16FromView = this.view.getInt16(this.pos);
    this.pos += 2;
    return readInt16FromView;
  };
  initializeDataProcessing.prototype.readU32 = function () {
    var getUint32FromView = this.view.getUint32(this.pos);
    this.pos += 4;
    return getUint32FromView;
  };
  initializeDataProcessing.prototype.readI32 = function () {
    var getViewInt32AtCurrentPosition = this.view.getInt32(this.pos);
    this.pos += 4;
    return getViewInt32AtCurrentPosition;
  };
  initializeDataProcessing.prototype.readU64 = function () {
    var combinedUint32Values = combineUint32TwoValues(this.view, this.pos);
    this.pos += 8;
    return combinedUint32Values;
  };
  initializeDataProcessing.prototype.readI64 = function () {
    var _uniqueSlug = extractUniqueSlugFromBuffer(this.view, this.pos);
    this.pos += 8;
    return _uniqueSlug;
  };
  initializeDataProcessing.prototype.readF32 = function () {
    var retrieveFloat32Value = this.view.getFloat32(this.pos);
    this.pos += 4;
    return retrieveFloat32Value;
  };
  initializeDataProcessing.prototype.readF64 = function () {
    var getFloat64FromView = this.view.getFloat64(this.pos);
    this.pos += 8;
    return getFloat64FromView;
  };
  return initializeDataProcessing;
})();
var _handleCharacterEncodingProcess = {};
function decodeWithBufferWriter(
  ___handleDecodingProcess,
  ___handleCharacterEncoding = _handleCharacterEncodingProcess,
) {
  var bufferWriter = new BufferWriter(
    ___handleCharacterEncoding.extensionCodec,
    ___handleCharacterEncoding.context,
    ___handleCharacterEncoding.maxStrLength,
    ___handleCharacterEncoding.maxBinLength,
    ___handleCharacterEncoding.maxArrayLength,
    ___handleCharacterEncoding.maxMapLength,
    ___handleCharacterEncoding.maxExtLength,
  );
  return bufferWriter.decode(___handleDecodingProcess);
}
var handleCharacterEncodingStream = class {
  onWillDisposeEmitter = new binaryDataHandler();
  onWillDispose = this.onWillDisposeEmitter.event;
  onDidDisposeEmitter = new binaryDataHandler();
  onDidDispose = this.onDidDisposeEmitter.event;
  toDispose = [];
  isDisposed = false;
  onDispose(characterEncodingStreamHandler) {
    this.toDispose.push(
      handleCharacterEncodingStream.create(characterEncodingStreamHandler),
    );
  }
  dispose() {
    if (!this.isDisposed) {
      this.onWillDisposeEmitter.fire(null);
      this.isDisposed = true;
      this.toDispose.forEach((disposeResource) => {
        disposeResource.dispose();
      });
      this.onDidDisposeEmitter.fire(null);
      this.onWillDisposeEmitter.dispose();
      this.onDidDisposeEmitter.dispose();
    }
  }
  static is(isDisposableObject) {
    return typeof isDisposableObject.dispose == "function";
  }
  static create(disposeFunction) {
    return {
      dispose: disposeFunction,
    };
  }
};
var binaryDataHandler = class {
  registeredListeners = new Set();
  _event;
  get event() {
    this._event ||= (listenerRegistrationCallback) => {
      this.registeredListeners.add(listenerRegistrationCallback);
      return handleCharacterEncodingStream.create(() => {
        this.registeredListeners.delete(listenerRegistrationCallback);
      });
    };
    return this._event;
  }
  fire(eventData) {
    this.registeredListeners.forEach((processEventData) => {
      processEventData(eventData);
    });
  }
  dispose() {
    this.registeredListeners = new Set();
  }
};
var binaryDataProcessingState = (0, getUniqueIdOrSlug.default)();
var calculateRemainingArraySize = (timestampEncoderWithOptions) =>
  encodeTimestampWithOptions(timestampEncoderWithOptions, {
    ignoreUndefined: true,
  });
var _handleBinaryData = class {
  endpoints = new Map();
  nodeMap = new Map();
  onMessageEmitter = new binaryDataHandler();
  onMessage = this.onMessageEmitter.event;
  constructor() {}
  getEndpointForNode(getEndpointForNodeId) {
    let endpointNode = this.nodeMap.get(getEndpointForNodeId);
    if (endpointNode) {
      let endpointData = this.endpoints.get(endpointNode);
      if (endpointData) {
        return endpointData;
      }
    }
  }
  addEndpoint(routerEndpointKey, routerEndpoint) {
    this.endpoints.set(routerEndpointKey, routerEndpoint);
    routerEndpoint.onMessage((handleRouterMessage) =>
      this.handleMessage(handleRouterMessage, routerEndpointKey),
    );
    let remainingArraySize = calculateRemainingArraySize({
      $type: "router-announce",
      $origin: binaryDataProcessingState,
    });
    routerEndpoint.send(remainingArraySize, [remainingArraySize.buffer]);
  }
  removeEndpoint(removeEndpointById) {
    this.endpoints.delete(removeEndpointById);
  }
  send(targetEndpoint, _messagePayload, isFeatureEnabled = true) {
    let routerMessage = {
      $type: "router-message",
      $origin: binaryDataProcessingState,
      $target: targetEndpoint,
      $data: _messagePayload,
    };
    if (targetEndpoint !== binaryDataProcessingState) {
      let endpoint = this.getEndpointForNode(targetEndpoint);
      if (!endpoint) {
        throw new Error("Endpoint " + targetEndpoint + " not registered");
      }
      if (isFeatureEnabled) {
        let __remainingArraySize = calculateRemainingArraySize(routerMessage);
        endpoint.send(__remainingArraySize, [__remainingArraySize.buffer]);
      } else {
        endpoint.send(routerMessage, []);
      }
    } else {
      this.onMessageEmitter.fire(routerMessage);
    }
  }
  broadcast(broadcastData, excludedEndpoint, originEndpoint) {
    let routerBroadcastMessage = {
      $type: "router-broadcast",
      $origin: originEndpoint ?? binaryDataProcessingState,
      $data: broadcastData,
    };
    if (!excludedEndpoint && !originEndpoint) {
      this.onMessageEmitter.fire(routerBroadcastMessage);
    }
    for (let [endpointKey, _endpoint] of this.endpoints.entries()) {
      if (endpointKey === excludedEndpoint) {
        continue;
      }
      let _remainingArraySize = calculateRemainingArraySize(
        routerBroadcastMessage,
      );
      _endpoint.send(_remainingArraySize, [_remainingArraySize.buffer]);
    }
  }
  handleMessage(messagePayload, nodeIdentifier) {
    let isMessagePayloadUint8Array = messagePayload instanceof Uint8Array;
    let decodedMessagePayload = isMessagePayloadUint8Array
      ? decodeWithBufferWriter(messagePayload)
      : messagePayload;
    if (decodedMessagePayload.$origin) {
      if (!this.nodeMap.has(decodedMessagePayload.$origin)) {
        this.nodeMap.set(decodedMessagePayload.$origin, nodeIdentifier);
      }
      if (decodedMessagePayload.$type === "router-broadcast") {
        let _decodedMessage = decodedMessagePayload;
        this.broadcast(
          _decodedMessage.$data,
          nodeIdentifier,
          _decodedMessage.$origin,
        );
        this.onMessageEmitter.fire(decodedMessagePayload);
        return;
      }
      if (decodedMessagePayload.$type === "router-message") {
        let decodedMessage = decodedMessagePayload;
        if (decodedMessage.$target === binaryDataProcessingState) {
          this.onMessageEmitter.fire(decodedMessagePayload);
        } else {
          let endpointForTarget = this.getEndpointForNode(
            decodedMessage.$target,
          );
          if (endpointForTarget) {
            endpointForTarget.send(
              messagePayload,
              isMessagePayloadUint8Array ? [messagePayload.buffer] : [],
            );
          }
        }
        return;
      }
    }
  }
};
var processDataBasedOnByteValue;
function getBinaryDataHandler() {
  processDataBasedOnByteValue ||= new _handleBinaryData();
  return processDataBasedOnByteValue;
}
function getPortNumber(decodeSpecialValue) {
  let defaultPortNumber = 8000;
  if (isNaN(defaultPortNumber)) {
    throw new Error("Invalid port");
  }
  return defaultPortNumber;
}
function isInstallationInProgress(decodedValue) {
  return decodedValue.installing || decodedValue.waiting || decodedValue.active;
}
var handleDataType = createUniqueIdGenerator("bridge");
var setValueBasedOnType = getPortNumber(window.location.hostname);
var dataValue = {
  $channel_name: __generateUniqueId,
  $type: generateUniqueIdString,
  port: setValueBasedOnType,
};
var setUndefinedValueBasedOnType = getBinaryDataHandler();
var responseValue = new MessageChannel();
var _dataValue = new generateUniqueSlugAndModify.DeferredPromise();
var dataHandler = new generateUniqueSlugAndModify.DeferredPromise();
_dataValue.then((postMessageToBridgeChannel) => {
  handleDataType("worker is ready, initializing MessageChannel...");
  postMessageToBridgeChannel.postMessage(
    {
      type: "bridge-channel-init",
    },
    [responseValue.port2],
  );
  return postMessageToBridgeChannel;
});
window.addEventListener("unload", () => {
  responseValue.port1.postMessage({
    $type: isIdentityObject,
  });
});
window.addEventListener("message", (handleStackTraceLine) => {
  switch (handleStackTraceLine.data.$type) {
    case stackTraceLines: {
      let localPort = handleStackTraceLine.ports[0];
      let previewsListContainer = document.getElementById("previews-list");
      let portLabelSpan = document.createElement("span");
      portLabelSpan.setAttribute("data-port", String(setValueBasedOnType));
      portLabelSpan.innerText = "localhost:" + setValueBasedOnType;
      previewsListContainer?.appendChild(portLabelSpan);
      dataHandler.resolve(localPort);
      setUndefinedValueBasedOnType.addEndpoint("parent", {
        send: (messageData, targetOrigin) =>
          localPort.postMessage(messageData, targetOrigin),
        onMessage: (onLocalPortMessage) => {
          localPort.onmessage = (localPortMessageHandler) => {
            onLocalPortMessage(localPortMessageHandler.data);
          };
        },
      });
      break;
    }
  }
});
var readDataLength = new generateUniqueSlugAndModify.DeferredPromise();
setUndefinedValueBasedOnType.onMessage((dataPayloadHandler) => {
  switch (dataPayloadHandler.$data.$type) {
    case generatedId: {
      readDataLength.resolve(dataPayloadHandler.$origin);
      break;
    }
    case jsonStringifiedGenerateUniqueId: {
      responseValue.port1.postMessage(dataPayloadHandler.$data);
      break;
    }
    case formattedUniqueId: {
      responseValue.port1.postMessage(dataPayloadHandler.$data);
      break;
    }
  }
});
responseValue.port1.onmessage = async (handleIncomingWorkerMessage) => {
  let incomingWorkerMessageData = handleIncomingWorkerMessage.data;
  handleDataType(
    "incoming message from the worker",
    handleIncomingWorkerMessage.data,
  );
  if (incomingWorkerMessageData.$channel_name === __generateUniqueId) {
    let __dataLength = await readDataLength;
    replacePlaceholderWithUniqueSlug(
      __dataLength,
      "[bridge] Failed to forward worker message to the PreviewManager: manager node ID is not defined.",
    );
    let incomingWorkerMessage = incomingWorkerMessageData;
    setUndefinedValueBasedOnType.send(__dataLength, incomingWorkerMessage);
  }
};
var _decodedValue = new URL("__csb_sw.js", location.origin).href;
function startPingInterval(dataLength) {
  let pingIntervalId = setInterval(() => {
    let pingMessage = {
      type: "ping",
    };
    dataLength.postMessage(pingMessage);
  }, 5000);
  dataLength.addEventListener("statechange", () => {
    if (dataLength.state === "redundant") {
      clearInterval(pingIntervalId);
    }
  });
}
async function registerServiceWorker() {
  replacePlaceholderWithUniqueSlug(
    "serviceWorker" in navigator,
    "Failed to start the bridge Service Worker: Service Worker API is not supported in this browser",
  );
  let registerBridgeServiceWorker = async () => {
    let serviceWorkerRegistration = await navigator.serviceWorker.register(
      "__csb_sw.js",
      {
        scope: ".",
      },
    );
    return isInstallationInProgress(serviceWorkerRegistration);
  };
  let serviceWorkerRegistrations =
    await navigator.serviceWorker.getRegistrations();
  handleDataType("all registrations", location, serviceWorkerRegistrations);
  await Promise.all(
    serviceWorkerRegistrations.map((workerRegistration) => {
      let fetchWorkerRegistration =
        isInstallationInProgress(workerRegistration);
      if (
        fetchWorkerRegistration &&
        fetchWorkerRegistration.scriptURL !== _decodedValue
      ) {
        handleDataType(
          "found irrelevant worker registration, unregistering...",
          fetchWorkerRegistration,
          workerRegistration,
        );
        return workerRegistration.unregister();
      }
    }),
  );
  let { controller: serviceWorkerController } = navigator.serviceWorker;
  if (!serviceWorkerController) {
    handleDataType("bridge is not controlled, registering a new worker...");
    return registerBridgeServiceWorker();
  }
  if (serviceWorkerController.scriptURL === _decodedValue) {
    handleDataType(
      "bridge is controlled by the correct worker",
      serviceWorkerController.scriptURL,
    );
    return serviceWorkerController;
  }
  let [_registerBridgeServiceWorker, registerServiceWorkerWithBridge] =
    await Promise.all([
      navigator.serviceWorker.getRegistration(
        serviceWorkerController.scriptURL,
      ),
      navigator.serviceWorker.getRegistration(_decodedValue),
    ]);
  handleDataType("controller registration:", _registerBridgeServiceWorker);
  handleDataType("worker registration:", registerServiceWorkerWithBridge);
  if (!registerServiceWorkerWithBridge) {
    handleDataType(
      'no registration found for "%s", unregistering controller and registering a new worker...',
      _decodedValue,
    );
    await _registerBridgeServiceWorker?.unregister();
    return registerBridgeServiceWorker();
  }
  if (registerServiceWorkerWithBridge.waiting) {
    handleDataType("found waiting registration, promoting...");
    await registerServiceWorkerWithBridge.update();
    let workerRegistrationStatus = isInstallationInProgress(
      registerServiceWorkerWithBridge,
    );
    replacePlaceholderWithUniqueSlug(
      workerRegistrationStatus,
      "Failed to retrieve the worker instance after promotion: worked does not exist",
    );
    replacePlaceholderWithUniqueSlug(
      registerServiceWorkerWithBridge.active,
      'Failed to promove a waiting Service Worker: expected the worker state to be "active" but got "%s"',
      workerRegistrationStatus.state,
    );
    return workerRegistrationStatus;
  }
  return null;
}
async function initializeServiceWorkerBridge() {
  handleDataType("starting the bridge...", {
    workerUrl: _decodedValue,
  });
  let serviceWorkerInstance = await registerServiceWorker().catch(
    (serviceWorkerErrorHandler) => {
      console.error(
        "Failed to ensure the bridge has a Service Worker registered. See details below.",
      );
      console.error(serviceWorkerErrorHandler);
    },
  );
  await navigator.serviceWorker.ready;
  replacePlaceholderWithUniqueSlug(
    serviceWorkerInstance,
    "Failed to retrieve the worker instance: worker not found",
  );
  startPingInterval(serviceWorkerInstance);
  _dataValue.resolve(serviceWorkerInstance);
  let previewManagerPort = await dataHandler;
  handleDataType("preview manager port received", previewManagerPort);
  setUndefinedValueBasedOnType.broadcast(dataValue);
}
initializeServiceWorkerBridge();
