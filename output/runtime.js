var definePropertyIfAbsent = (
  propertyAssignmentFunction,
  propertyKey,
  propertyValue,
) =>
  propertyKey in propertyAssignmentFunction
    ? Object.defineProperty(propertyAssignmentFunction, propertyKey, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: propertyValue,
      })
    : (propertyAssignmentFunction[propertyKey] = propertyValue);
var initializeOrSetDefault = (resetAndReturnValue, resetValue) => () => {
  if (resetAndReturnValue) {
    resetValue = resetAndReturnValue((resetAndReturnValue = 0));
  }
  return resetValue;
};
var getModuleExportsIfAbsent = (initializeModule, moduleInitializer) => () => {
  if (!moduleInitializer) {
    initializeModule(
      (moduleInitializer = {
        exports: {},
      }).exports,
      moduleInitializer,
    );
  }
  return moduleInitializer.exports;
};
var definePropertiesWithGetters = (
  _definePropertiesWithGetters,
  propertyGetters,
) => {
  for (var propertyGetterKey in propertyGetters) {
    Object.defineProperty(_definePropertiesWithGetters, propertyGetterKey, {
      get: propertyGetters[propertyGetterKey],
      enumerable: true,
    });
  }
};
var definePropertiesIfAbsent = (
  definePropertiesFromSource,
  sourceObject,
  sourceProperties,
  __propertyDescriptor,
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
            !(__propertyDescriptor = Object.getOwnPropertyDescriptor(
              sourceObject,
              propertyName,
            )) || __propertyDescriptor.enumerable,
        });
      }
    }
  }
  return definePropertiesFromSource;
};
var defineDefaultProperties = (
  _defineDefaultProperties,
  defaultPropertyKey,
  defaultPropertyHandler,
) => {
  definePropertiesIfAbsent(
    _defineDefaultProperties,
    defaultPropertyKey,
    "default",
  );
  return (
    defaultPropertyHandler &&
    definePropertiesIfAbsent(
      defaultPropertyHandler,
      defaultPropertyKey,
      "default",
    )
  );
};
var defineModuleExports = (
  _sourceObject,
  sourceObjectProperties,
  prototypeObject,
) => {
  if (_sourceObject != null) {
    prototypeObject = Object.create(Object.getPrototypeOf(_sourceObject));
  } else {
    prototypeObject = {};
  }
  return definePropertiesIfAbsent(
    sourceObjectProperties || !_sourceObject || !_sourceObject.__esModule
      ? Object.defineProperty(prototypeObject, "default", {
          value: _sourceObject,
          enumerable: true,
        })
      : prototypeObject,
    _sourceObject,
  );
};
var createModuleExport = (_definePropertiesIfAbsent) =>
  definePropertiesIfAbsent(
    Object.defineProperty({}, "__esModule", {
      value: true,
    }),
    _definePropertiesIfAbsent,
  );
var _definePropertyIfAbsent = (
  definePropertyWithSymbolCheck,
  _propertyKey,
  __propertyValue,
) => {
  definePropertyIfAbsent(
    definePropertyWithSymbolCheck,
    typeof _propertyKey != "symbol" ? _propertyKey + "" : _propertyKey,
    __propertyValue,
  );
  return __propertyValue;
};
var getModuleExportsIfMissing = getModuleExportsIfAbsent(
  (checkSymbolSupport, _checkSymbolSupport) => {
    _checkSymbolSupport.exports = function () {
      if (
        typeof Symbol != "function" ||
        typeof Object.getOwnPropertySymbols != "function"
      ) {
        return false;
      }
      if (typeof Symbol.iterator == "symbol") {
        return true;
      }
      var symbolStorage = {};
      var uniqueTestSymbol = Symbol("test");
      var symbolObject = Object(uniqueTestSymbol);
      if (
        typeof uniqueTestSymbol == "string" ||
        Object.prototype.toString.call(uniqueTestSymbol) !==
          "[object Symbol]" ||
        Object.prototype.toString.call(symbolObject) !== "[object Symbol]"
      ) {
        return false;
      }
      var symbolValue = 42;
      symbolStorage[uniqueTestSymbol] = symbolValue;
      for (uniqueTestSymbol in symbolStorage) {
        return false;
      }
      if (
        (typeof Object.keys == "function" &&
          Object.keys(symbolStorage).length !== 0) ||
        (typeof Object.getOwnPropertyNames == "function" &&
          Object.getOwnPropertyNames(symbolStorage).length !== 0)
      ) {
        return false;
      }
      var symbolKeys = Object.getOwnPropertySymbols(symbolStorage);
      if (
        symbolKeys.length !== 1 ||
        symbolKeys[0] !== uniqueTestSymbol ||
        !Object.prototype.propertyIsEnumerable.call(
          symbolStorage,
          uniqueTestSymbol,
        )
      ) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var symbolDescriptor = Object.getOwnPropertyDescriptor(
          symbolStorage,
          uniqueTestSymbol,
        );
        if (
          symbolDescriptor.value !== symbolValue ||
          symbolDescriptor.enumerable !== true
        ) {
          return false;
        }
      }
      return true;
    };
  },
);
var checkSymbolToStringTagSupport = getModuleExportsIfAbsent(
  (_checkSymbolToStringTagSupport, __checkSymbolToStringTagSupport) => {
    var isToStringTagSupported = getModuleExportsIfMissing();
    __checkSymbolToStringTagSupport.exports = function () {
      return isToStringTagSupported() && !!Symbol.toStringTag;
    };
  },
);
var checkSymbolPrototypeSupport = getModuleExportsIfAbsent(
  (__checkSymbolSupport, ___checkSymbolSupport) => {
    var isSymbolSupported = typeof Symbol !== "undefined" && Symbol;
    var getMissingModuleExports = getModuleExportsIfMissing();
    ___checkSymbolSupport.exports = function () {
      if (
        typeof isSymbolSupported != "function" ||
        typeof Symbol != "function" ||
        typeof isSymbolSupported("foo") != "symbol" ||
        typeof Symbol("bar") != "symbol"
      ) {
        return false;
      } else {
        return getMissingModuleExports();
      }
    };
  },
);
var validateSymbolProperties = getModuleExportsIfAbsent(
  (validateAndBindFunction, _________________createBoundFunction) => {
    var incompatibleFunctionBindError =
      "Function.prototype.bind called on incompatible ";
    var arraySliceFunction = Array.prototype.slice;
    var getTypeString = Object.prototype.toString;
    var functionTypeString = "[object Function]";
    _________________createBoundFunction.exports = function (
      validateFunctionCompatibility,
    ) {
      var __context = this;
      if (
        typeof __context != "function" ||
        getTypeString.call(__context) !== functionTypeString
      ) {
        throw new TypeError(incompatibleFunctionBindError + __context);
      }
      var argumentsArrayForFunctionCall = arraySliceFunction.call(arguments, 1);
      var __________________createBoundFunction;
      function applyContextAndReturnResult() {
        if (this instanceof __________________createBoundFunction) {
          var contextualFunctionResult = __context.apply(
            this,
            argumentsArrayForFunctionCall.concat(
              arraySliceFunction.call(arguments),
            ),
          );
          if (Object(contextualFunctionResult) === contextualFunctionResult) {
            return contextualFunctionResult;
          } else {
            return this;
          }
        } else {
          return __context.apply(
            validateFunctionCompatibility,
            argumentsArrayForFunctionCall.concat(
              arraySliceFunction.call(arguments),
            ),
          );
        }
      }
      for (
        var maxIndexForFunctionCalls = Math.max(
            0,
            __context.length - argumentsArrayForFunctionCall.length,
          ),
          functionCallIdentifiers = [],
          currentFunctionCallIndex = 0;
        currentFunctionCallIndex < maxIndexForFunctionCalls;
        currentFunctionCallIndex++
      ) {
        functionCallIdentifiers.push("$" + currentFunctionCallIndex);
      }
      __________________createBoundFunction = Function(
        "binder",
        "return function (" +
          functionCallIdentifiers.join(",") +
          "){ return binder.apply(this,arguments); }",
      )(applyContextAndReturnResult);
      if (__context.prototype) {
        function initializeFunction() {}
        initializeFunction.prototype = __context.prototype;
        __________________createBoundFunction.prototype =
          new initializeFunction();
        initializeFunction.prototype = null;
      }
      return __________________createBoundFunction;
    };
  },
);
var createBoundFunction = getModuleExportsIfAbsent(
  (bindOrValidateSymbolProperties, bindOrValidatedSymbolProperties) => {
    var validatedSymbolProperties = validateSymbolProperties();
    bindOrValidatedSymbolProperties.exports =
      Function.prototype.bind || validatedSymbolProperties;
  },
);
var _createBoundFunction = getModuleExportsIfAbsent(
  (bindHasOwnProperty, bindHasOwnPropertyExport) => {
    var bindHasOwnPropertyFunction = createBoundFunction();
    bindHasOwnPropertyExport.exports = bindHasOwnPropertyFunction.call(
      Function.call,
      Object.prototype.hasOwnProperty,
    );
  },
);
var __createBoundFunction = getModuleExportsIfAbsent(
  (______createBoundFunction, getPrototypeWithFallback) => {
    var contextForUint8Array;
    var SyntaxErrorReference = SyntaxError;
    var FunctionConstructor = Function;
    var TypeErrorReference = TypeError;
    function getConstructorFromBoundFunction(___createBoundFunction) {
      try {
        return FunctionConstructor(
          '"use strict"; return (' + ___createBoundFunction + ").constructor;",
        )();
      } catch {}
    }
    var getObjectPropertyDescriptor = Object.getOwnPropertyDescriptor;
    if (getObjectPropertyDescriptor) {
      try {
        getObjectPropertyDescriptor({}, "");
      } catch {
        getObjectPropertyDescriptor = null;
      }
    }
    function throwTypeError() {
      throw new TypeErrorReference();
    }
    var getCalleePropertyDescriptor = getObjectPropertyDescriptor
      ? (function () {
          try {
            arguments.callee;
            return throwTypeError;
          } catch {
            try {
              return getObjectPropertyDescriptor(arguments, "callee").get;
            } catch {
              return throwTypeError;
            }
          }
        })()
      : throwTypeError;
    var isSymbolPrototypeSupported = checkSymbolPrototypeSupport()();
    var _getCalleePropertyDescriptor =
      Object.getPrototypeOf ||
      function (createPropertyDescriptor) {
        return createPropertyDescriptor.__proto__;
      };
    var _______createBoundFunction = {};
    var __getCalleePropertyDescriptor =
      typeof Uint8Array === "undefined"
        ? contextForUint8Array
        : _getCalleePropertyDescriptor(Uint8Array);
    var ________createBoundFunction = {
      "%AggregateError%":
        typeof AggregateError === "undefined"
          ? contextForUint8Array
          : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%":
        typeof ArrayBuffer === "undefined" ? contextForUint8Array : ArrayBuffer,
      "%ArrayIteratorPrototype%": isSymbolPrototypeSupported
        ? _getCalleePropertyDescriptor([][Symbol.iterator]())
        : contextForUint8Array,
      "%AsyncFromSyncIteratorPrototype%": contextForUint8Array,
      "%AsyncFunction%": _______createBoundFunction,
      "%AsyncGenerator%": _______createBoundFunction,
      "%AsyncGeneratorFunction%": _______createBoundFunction,
      "%AsyncIteratorPrototype%": _______createBoundFunction,
      "%Atomics%":
        typeof Atomics === "undefined" ? contextForUint8Array : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? contextForUint8Array : BigInt,
      "%Boolean%": Boolean,
      "%DataView%":
        typeof DataView === "undefined" ? contextForUint8Array : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%":
        typeof Float32Array === "undefined"
          ? contextForUint8Array
          : Float32Array,
      "%Float64Array%":
        typeof Float64Array === "undefined"
          ? contextForUint8Array
          : Float64Array,
      "%FinalizationRegistry%":
        typeof FinalizationRegistry === "undefined"
          ? contextForUint8Array
          : FinalizationRegistry,
      "%Function%": FunctionConstructor,
      "%GeneratorFunction%": _______createBoundFunction,
      "%Int8Array%":
        typeof Int8Array === "undefined" ? contextForUint8Array : Int8Array,
      "%Int16Array%":
        typeof Int16Array === "undefined" ? contextForUint8Array : Int16Array,
      "%Int32Array%":
        typeof Int32Array === "undefined" ? contextForUint8Array : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": isSymbolPrototypeSupported
        ? _getCalleePropertyDescriptor(
            _getCalleePropertyDescriptor([][Symbol.iterator]()),
          )
        : contextForUint8Array,
      "%JSON%": typeof JSON == "object" ? JSON : contextForUint8Array,
      "%Map%": typeof Map === "undefined" ? contextForUint8Array : Map,
      "%MapIteratorPrototype%":
        typeof Map === "undefined" || !isSymbolPrototypeSupported
          ? contextForUint8Array
          : _getCalleePropertyDescriptor(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%":
        typeof Promise === "undefined" ? contextForUint8Array : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? contextForUint8Array : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%":
        typeof Reflect === "undefined" ? contextForUint8Array : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? contextForUint8Array : Set,
      "%SetIteratorPrototype%":
        typeof Set === "undefined" || !isSymbolPrototypeSupported
          ? contextForUint8Array
          : _getCalleePropertyDescriptor(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%":
        typeof SharedArrayBuffer === "undefined"
          ? contextForUint8Array
          : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": isSymbolPrototypeSupported
        ? _getCalleePropertyDescriptor(""[Symbol.iterator]())
        : contextForUint8Array,
      "%Symbol%": isSymbolPrototypeSupported ? Symbol : contextForUint8Array,
      "%SyntaxError%": SyntaxErrorReference,
      "%ThrowTypeError%": getCalleePropertyDescriptor,
      "%TypedArray%": __getCalleePropertyDescriptor,
      "%TypeError%": TypeErrorReference,
      "%Uint8Array%":
        typeof Uint8Array === "undefined" ? contextForUint8Array : Uint8Array,
      "%Uint8ClampedArray%":
        typeof Uint8ClampedArray === "undefined"
          ? contextForUint8Array
          : Uint8ClampedArray,
      "%Uint16Array%":
        typeof Uint16Array === "undefined" ? contextForUint8Array : Uint16Array,
      "%Uint32Array%":
        typeof Uint32Array === "undefined" ? contextForUint8Array : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%":
        typeof WeakMap === "undefined" ? contextForUint8Array : WeakMap,
      "%WeakRef%":
        typeof WeakRef === "undefined" ? contextForUint8Array : WeakRef,
      "%WeakSet%":
        typeof WeakSet === "undefined" ? contextForUint8Array : WeakSet,
    };
    var __createBoundFunctionWithFallback = function getOrFallback(
      fallbackValue,
    ) {
      var fallbackFunction;
      if (fallbackValue === "%AsyncFunction%") {
        fallbackFunction = getConstructorFromBoundFunction(
          "async function () {}",
        );
      } else if (fallbackValue === "%GeneratorFunction%") {
        fallbackFunction = getConstructorFromBoundFunction("function* () {}");
      } else if (fallbackValue === "%AsyncGeneratorFunction%") {
        fallbackFunction = getConstructorFromBoundFunction(
          "async function* () {}",
        );
      } else if (fallbackValue === "%AsyncGenerator%") {
        var asyncGeneratorFunction = getOrFallback("%AsyncGeneratorFunction%");
        if (asyncGeneratorFunction) {
          fallbackFunction = asyncGeneratorFunction.prototype;
        }
      } else if (fallbackValue === "%AsyncIteratorPrototype%") {
        var asyncGeneratorFallback = getOrFallback("%AsyncGenerator%");
        if (asyncGeneratorFallback) {
          fallbackFunction = _getCalleePropertyDescriptor(
            asyncGeneratorFallback.prototype,
          );
        }
      }
      ________createBoundFunction[fallbackValue] = fallbackFunction;
      return fallbackFunction;
    };
    var ___________createBoundFunction = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype",
      ],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"],
    };
    var createFunctionBoundContext = createBoundFunction();
    var ____________createBoundFunction = _createBoundFunction();
    var _checkSymbolPrototypeSupport = createFunctionBoundContext.call(
      Function.call,
      Array.prototype.concat,
    );
    var _____________createBoundFunction = createFunctionBoundContext.call(
      Function.apply,
      Array.prototype.splice,
    );
    var getCalleePropertyDescriptorFunction = createFunctionBoundContext.call(
      Function.call,
      String.prototype.replace,
    );
    var getCalleeDescriptor = createFunctionBoundContext.call(
      Function.call,
      String.prototype.slice,
    );
    var ______________createBoundFunction = createFunctionBoundContext.call(
      Function.call,
      RegExp.prototype.exec,
    );
    var _______________createBoundFunction =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var ________________createBoundFunction = /\\(\\)?/g;
    function validateAndExtractFunctionParameters(
      arrayConcatUsingFunctionCall,
    ) {
      var firstCalleeDescriptor = getCalleeDescriptor(
        arrayConcatUsingFunctionCall,
        0,
        1,
      );
      var lastCalleeDescriptor = getCalleeDescriptor(
        arrayConcatUsingFunctionCall,
        -1,
      );
      if (firstCalleeDescriptor === "%" && lastCalleeDescriptor !== "%") {
        throw new SyntaxErrorReference(
          "invalid intrinsic syntax, expected closing `%`",
        );
      }
      if (lastCalleeDescriptor === "%" && firstCalleeDescriptor !== "%") {
        throw new SyntaxErrorReference(
          "invalid intrinsic syntax, expected opening `%`",
        );
      }
      var extractedParameters = [];
      getCalleePropertyDescriptorFunction(
        arrayConcatUsingFunctionCall,
        _______________createBoundFunction,
        function (
          ____createBoundFunction,
          arrayProtoMethods,
          createFunctionBindings,
          _____createBoundFunction,
        ) {
          if (createFunctionBindings) {
            extractedParameters[extractedParameters.length] =
              getCalleePropertyDescriptorFunction(
                _____createBoundFunction,
                ________________createBoundFunction,
                "$1",
              );
          } else {
            extractedParameters[extractedParameters.length] =
              arrayProtoMethods || ____createBoundFunction;
          }
        },
      );
      return extractedParameters;
    }
    function getIntrinsicFunction(
      _arrayConcatUsingFunctionCall,
      __arrayConcatUsingFunctionCall,
    ) {
      var intrinsicFunctionName = _arrayConcatUsingFunctionCall;
      var intrinsicFunctionAlias;
      if (
        ____________createBoundFunction(
          ___________createBoundFunction,
          intrinsicFunctionName,
        )
      ) {
        intrinsicFunctionAlias =
          ___________createBoundFunction[intrinsicFunctionName];
        intrinsicFunctionName = "%" + intrinsicFunctionAlias[0] + "%";
      }
      if (
        ____________createBoundFunction(
          ________createBoundFunction,
          intrinsicFunctionName,
        )
      ) {
        var boundFunctionImplementation =
          ________createBoundFunction[intrinsicFunctionName];
        if (boundFunctionImplementation === _______createBoundFunction) {
          boundFunctionImplementation = __createBoundFunctionWithFallback(
            intrinsicFunctionName,
          );
        }
        if (
          typeof boundFunctionImplementation === "undefined" &&
          !__arrayConcatUsingFunctionCall
        ) {
          throw new TypeErrorReference(
            "intrinsic " +
              _arrayConcatUsingFunctionCall +
              " exists, but is not available. Please file an issue!",
          );
        }
        return {
          alias: intrinsicFunctionAlias,
          name: intrinsicFunctionName,
          value: boundFunctionImplementation,
        };
      }
      throw new SyntaxErrorReference(
        "intrinsic " + _arrayConcatUsingFunctionCall + " does not exist!",
      );
    }
    getPrototypeWithFallback.exports = function (
      validateArrayConcatSyntax,
      validateIntrinsicSyntax,
    ) {
      if (
        typeof validateArrayConcatSyntax != "string" ||
        validateArrayConcatSyntax.length === 0
      ) {
        throw new TypeErrorReference(
          "intrinsic name must be a non-empty string",
        );
      }
      if (arguments.length > 1 && typeof validateIntrinsicSyntax != "boolean") {
        throw new TypeErrorReference(
          '"allowMissing" argument must be a boolean',
        );
      }
      if (
        ______________createBoundFunction(
          /^%?[^%]*%?$/,
          validateArrayConcatSyntax,
        ) === null
      ) {
        throw new SyntaxErrorReference(
          "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
        );
      }
      var intrinsicValidationResult = validateAndExtractFunctionParameters(
        validateArrayConcatSyntax,
      );
      var firstIntrinsicName =
        intrinsicValidationResult.length > 0
          ? intrinsicValidationResult[0]
          : "";
      var intrinsicReference = getIntrinsicFunction(
        "%" + firstIntrinsicName + "%",
        validateIntrinsicSyntax,
      );
      var intrinsicName = intrinsicReference.name;
      var intrinsicValue = intrinsicReference.value;
      var isIntrinsicNameValid = false;
      var __validateIntrinsicName = intrinsicReference.alias;
      if (__validateIntrinsicName) {
        firstIntrinsicName = __validateIntrinsicName[0];
        _____________createBoundFunction(
          intrinsicValidationResult,
          _checkSymbolPrototypeSupport([0, 1], __validateIntrinsicName),
        );
      }
      for (
        var currentIntrinsicIndex = 1, isMatchingQuotes = true;
        currentIntrinsicIndex < intrinsicValidationResult.length;
        currentIntrinsicIndex += 1
      ) {
        var currentIntrinsicValue =
          intrinsicValidationResult[currentIntrinsicIndex];
        var firstCharOfIntrinsicValue = getCalleeDescriptor(
          currentIntrinsicValue,
          0,
          1,
        );
        var lastCharOfIntrinsicValue = getCalleeDescriptor(
          currentIntrinsicValue,
          -1,
        );
        if (
          (firstCharOfIntrinsicValue === '"' ||
            firstCharOfIntrinsicValue === "'" ||
            firstCharOfIntrinsicValue === "`" ||
            lastCharOfIntrinsicValue === '"' ||
            lastCharOfIntrinsicValue === "'" ||
            lastCharOfIntrinsicValue === "`") &&
          firstCharOfIntrinsicValue !== lastCharOfIntrinsicValue
        ) {
          throw new SyntaxErrorReference(
            "property names with quotes must have matching quotes",
          );
        }
        if (currentIntrinsicValue === "constructor" || !isMatchingQuotes) {
          isIntrinsicNameValid = true;
        }
        firstIntrinsicName += "." + currentIntrinsicValue;
        intrinsicName = "%" + firstIntrinsicName + "%";
        if (
          ____________createBoundFunction(
            ________createBoundFunction,
            intrinsicName,
          )
        ) {
          intrinsicValue = ________createBoundFunction[intrinsicName];
        } else if (intrinsicValue != null) {
          if (!(currentIntrinsicValue in intrinsicValue)) {
            if (!validateIntrinsicSyntax) {
              throw new TypeErrorReference(
                "base intrinsic for " +
                  validateArrayConcatSyntax +
                  " exists, but the property is not available.",
              );
            }
            return;
          }
          if (
            getObjectPropertyDescriptor &&
            currentIntrinsicIndex + 1 >= intrinsicValidationResult.length
          ) {
            var _____propertyDescriptor = getObjectPropertyDescriptor(
              intrinsicValue,
              currentIntrinsicValue,
            );
            isMatchingQuotes = !!_____propertyDescriptor;
            if (
              isMatchingQuotes &&
              "get" in _____propertyDescriptor &&
              !("originalValue" in _____propertyDescriptor.get)
            ) {
              intrinsicValue = _____propertyDescriptor.get;
            } else {
              intrinsicValue = intrinsicValue[currentIntrinsicValue];
            }
          } else {
            isMatchingQuotes = ____________createBoundFunction(
              intrinsicValue,
              currentIntrinsicValue,
            );
            intrinsicValue = intrinsicValue[currentIntrinsicValue];
          }
          if (isMatchingQuotes && !isIntrinsicNameValid) {
            ________createBoundFunction[intrinsicName] = intrinsicValue;
          }
        }
      }
      return intrinsicValue;
    };
  },
);
var validateIntrinsicName = getModuleExportsIfAbsent(
  (
    setExportedFunctionWithValidatedAccess,
    setExportedValidatedAccessFunction,
  ) => {
    var createBoundFunctionWithValidatedAccess = createBoundFunction();
    var createBoundFunctionAccess = __createBoundFunction();
    var applyFunctionWithValidatedAccess = createBoundFunctionAccess(
      "%Function.prototype.apply%",
    );
    var callFunctionWithValidatedAccess = createBoundFunctionAccess(
      "%Function.prototype.call%",
    );
    var validatedReflectApplyFunction =
      createBoundFunctionAccess("%Reflect.apply%", true) ||
      createBoundFunctionWithValidatedAccess.call(
        callFunctionWithValidatedAccess,
        applyFunctionWithValidatedAccess,
      );
    var getOwnPropertyDescriptorWithValidatedAccess = createBoundFunctionAccess(
      "%Object.getOwnPropertyDescriptor%",
      true,
    );
    var validatedDefinePropertyFunction = createBoundFunctionAccess(
      "%Object.defineProperty%",
      true,
    );
    var validatedMathMaxFunction = createBoundFunctionAccess("%Math.max%");
    if (validatedDefinePropertyFunction) {
      try {
        validatedDefinePropertyFunction({}, "a", {
          value: 1,
        });
      } catch {
        validatedDefinePropertyFunction = null;
      }
    }
    setExportedValidatedAccessFunction.exports = function (
      validatePropertyAccess,
    ) {
      var validatedAccessFunction = validatedReflectApplyFunction(
        createBoundFunctionWithValidatedAccess,
        callFunctionWithValidatedAccess,
        arguments,
      );
      if (
        getOwnPropertyDescriptorWithValidatedAccess &&
        validatedDefinePropertyFunction
      ) {
        var lengthPropertyDescriptor =
          getOwnPropertyDescriptorWithValidatedAccess(
            validatedAccessFunction,
            "length",
          );
        if (lengthPropertyDescriptor.configurable) {
          validatedDefinePropertyFunction(validatedAccessFunction, "length", {
            value:
              1 +
              validatedMathMaxFunction(
                0,
                validatePropertyAccess.length - (arguments.length - 1),
              ),
          });
        }
      }
      return validatedAccessFunction;
    };
    function executeValidatedFunction() {
      return validatedReflectApplyFunction(
        createBoundFunctionWithValidatedAccess,
        applyFunctionWithValidatedAccess,
        arguments,
      );
    }
    if (validatedDefinePropertyFunction) {
      validatedDefinePropertyFunction(
        setExportedValidatedAccessFunction.exports,
        "apply",
        {
          value: executeValidatedFunction,
        },
      );
    } else {
      setExportedValidatedAccessFunction.exports.apply =
        executeValidatedFunction;
    }
  },
);
var getIntrinsicProperty = getModuleExportsIfAbsent(
  (_validateAndRetrieveIntrinsicProperty, intrinsicPropertyExporter) => {
    var createBoundFunctionForIntrinsicProperties = __createBoundFunction();
    var validateAndRetrieveIntrinsic = validateIntrinsicName();
    var validateAndRetrieveIndexOfIntrinsic = validateAndRetrieveIntrinsic(
      createBoundFunctionForIntrinsicProperties("String.prototype.indexOf"),
    );
    intrinsicPropertyExporter.exports = function (
      _getIntrinsicProperty,
      _validateIntrinsicName,
    ) {
      var boundIntrinsicFunction = createBoundFunctionForIntrinsicProperties(
        _getIntrinsicProperty,
        !!_validateIntrinsicName,
      );
      if (
        typeof boundIntrinsicFunction == "function" &&
        validateAndRetrieveIndexOfIntrinsic(
          _getIntrinsicProperty,
          ".prototype.",
        ) > -1
      ) {
        return validateAndRetrieveIntrinsic(boundIntrinsicFunction);
      } else {
        return boundIntrinsicFunction;
      }
    };
  },
);
var validatePropertyAvailability = getModuleExportsIfAbsent(
  (_validateArguments, validateArgumentsAndCheckType) => {
    var ___isSymbolToStringTagSupported = checkSymbolToStringTagSupport()();
    var getObjectTypeString = getIntrinsicProperty();
    var _getObjectTypeString = getObjectTypeString("Object.prototype.toString");
    function isArgumentsObject(validateFunctionParameters) {
      if (
        ___isSymbolToStringTagSupported &&
        validateFunctionParameters &&
        typeof validateFunctionParameters == "object" &&
        Symbol.toStringTag in validateFunctionParameters
      ) {
        return false;
      } else {
        return (
          _getObjectTypeString(validateFunctionParameters) ===
          "[object Arguments]"
        );
      }
    }
    function isValidIntrinsicExport(validateIntrinsicExport) {
      if (isArgumentsObject(validateIntrinsicExport)) {
        return true;
      } else {
        return (
          validateIntrinsicExport !== null &&
          typeof validateIntrinsicExport == "object" &&
          typeof validateIntrinsicExport.length == "number" &&
          validateIntrinsicExport.length >= 0 &&
          _getObjectTypeString(validateIntrinsicExport) !== "[object Array]" &&
          _getObjectTypeString(validateIntrinsicExport.callee) ===
            "[object Function]"
        );
      }
    }
    var _validateArgumentsAndCheckType = (function () {
      return isArgumentsObject(arguments);
    })();
    isArgumentsObject.isLegacyArguments = isValidIntrinsicExport;
    if (_validateArgumentsAndCheckType) {
      validateArgumentsAndCheckType.exports = isArgumentsObject;
    } else {
      validateArgumentsAndCheckType.exports = isValidIntrinsicExport;
    }
  },
);
var getObjectDescriptorAndDefineProperty = getModuleExportsIfAbsent(
  (_isGeneratorFunction, exportedValidateGeneratorFunction) => {
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var generatorFunctionRegex = /^\s*(?:function)?\*/;
    var __isSymbolToStringTagSupported = checkSymbolToStringTagSupport()();
    var getPrototypeOf = Object.getPrototypeOf;
    function isGeneratorFunctionSupported() {
      if (!__isSymbolToStringTagSupported) {
        return false;
      }
      try {
        return Function("return function*() {}")();
      } catch {}
    }
    var ____isValidGeneratorFunction;
    exportedValidateGeneratorFunction.exports = function (
      validateIntrinsicPropertyAccess,
    ) {
      if (typeof validateIntrinsicPropertyAccess != "function") {
        return false;
      }
      if (
        generatorFunctionRegex.test(
          functionToString.call(validateIntrinsicPropertyAccess),
        )
      ) {
        return true;
      }
      if (!__isSymbolToStringTagSupported) {
        var isGeneratorFunctionString = objectToString.call(
          validateIntrinsicPropertyAccess,
        );
        return isGeneratorFunctionString === "[object GeneratorFunction]";
      }
      if (!getPrototypeOf) {
        return false;
      }
      if (typeof ____isValidGeneratorFunction === "undefined") {
        var isGeneratorFunctionSupportedFlag = isGeneratorFunctionSupported();
        if (isGeneratorFunctionSupportedFlag) {
          ____isValidGeneratorFunction = getPrototypeOf(
            isGeneratorFunctionSupportedFlag,
          );
        } else {
          ____isValidGeneratorFunction = false;
        }
      }
      return (
        getPrototypeOf(validateIntrinsicPropertyAccess) ===
        ____isValidGeneratorFunction
      );
    };
  },
);
var validateIntrinsicProperty = getModuleExportsIfAbsent(
  (validateAndCheckArguments, validateReflectApply) => {
    var getFunctionString = Function.prototype.toString;
    var isReflectApplySupported =
      typeof Reflect == "object" && Reflect !== null && Reflect.apply;
    var lengthPropertyObject;
    var errorValueToThrow;
    if (
      typeof isReflectApplySupported == "function" &&
      typeof Object.defineProperty == "function"
    ) {
      try {
        lengthPropertyObject = Object.defineProperty({}, "length", {
          get() {
            throw errorValueToThrow;
          },
        });
        errorValueToThrow = {};
        isReflectApplySupported(
          function () {
            throw 42;
          },
          null,
          lengthPropertyObject,
        );
      } catch (caughtError) {
        if (caughtError !== errorValueToThrow) {
          isReflectApplySupported = null;
        }
      }
    } else {
      isReflectApplySupported = null;
    }
    var classRegexPattern = /^\s*class\b/;
    function isValidFunctionArguments(validateFunctionIsArguments) {
      try {
        var functionStringToValidate = getFunctionString.call(
          validateFunctionIsArguments,
        );
        return classRegexPattern.test(functionStringToValidate);
      } catch {
        return false;
      }
    }
    function __validateArguments(isArguments) {
      try {
        if (isValidFunctionArguments(isArguments)) {
          return false;
        } else {
          getFunctionString.call(isArguments);
          return true;
        }
      } catch {
        return false;
      }
    }
    var functionString = Object.prototype.toString;
    var getFunctionSource = "[object Object]";
    var getFunctionStringFromArg = "[object Function]";
    var getFunctionStringFromArgs = "[object GeneratorFunction]";
    var _getFunctionString = "[object HTMLAllCollection]";
    var extractFunctionString = "[object HTML document.all class]";
    var __getFunctionString = "[object HTMLCollection]";
    var ___getFunctionString =
      typeof Symbol == "function" && !!Symbol.toStringTag;
    var getFunctionStringValue = !(0 in [,]);
    function __________________________________validateIntrinsicProperty() {
      return false;
    }
    if (typeof document == "object") {
      ____getFunctionString = document.all;
      if (
        functionString.call(____getFunctionString) ===
        functionString.call(document.all)
      ) {
        __________________________________validateIntrinsicProperty = function (
          handleIntrinsicPropertyValidation,
        ) {
          if (
            (getFunctionStringValue || !handleIntrinsicPropertyValidation) &&
            (typeof handleIntrinsicPropertyValidation === "undefined" ||
              typeof handleIntrinsicPropertyValidation == "object")
          ) {
            try {
              var isValidIntrinsicPropertyFunction = functionString.call(
                handleIntrinsicPropertyValidation,
              );
              return (
                (isValidIntrinsicPropertyFunction === _getFunctionString ||
                  isValidIntrinsicPropertyFunction === extractFunctionString ||
                  isValidIntrinsicPropertyFunction === __getFunctionString ||
                  isValidIntrinsicPropertyFunction === getFunctionSource) &&
                handleIntrinsicPropertyValidation("") == null
              );
            } catch {}
          }
          return false;
        };
      }
    }
    var ____getFunctionString;
    if (isReflectApplySupported) {
      validateReflectApply.exports = function (validateGeneratorFunction) {
        if (
          __________________________________validateIntrinsicProperty(
            validateGeneratorFunction,
          )
        ) {
          return true;
        }
        if (
          !validateGeneratorFunction ||
          (typeof validateGeneratorFunction != "function" &&
            typeof validateGeneratorFunction != "object")
        ) {
          return false;
        }
        try {
          isReflectApplySupported(
            validateGeneratorFunction,
            null,
            lengthPropertyObject,
          );
        } catch (errorCaught) {
          if (errorCaught !== errorValueToThrow) {
            return false;
          }
        }
        return (
          !isValidFunctionArguments(validateGeneratorFunction) &&
          __validateArguments(validateGeneratorFunction)
        );
      };
    } else {
      validateReflectApply.exports = function (isGeneratorFunction) {
        if (
          __________________________________validateIntrinsicProperty(
            isGeneratorFunction,
          )
        ) {
          return true;
        }
        if (
          !isGeneratorFunction ||
          (typeof isGeneratorFunction != "function" &&
            typeof isGeneratorFunction != "object")
        ) {
          return false;
        }
        if (___getFunctionString) {
          return __validateArguments(isGeneratorFunction);
        }
        if (isValidFunctionArguments(isGeneratorFunction)) {
          return false;
        }
        var functionStringResult = functionString.call(isGeneratorFunction);
        if (
          functionStringResult !== getFunctionStringFromArg &&
          functionStringResult !== getFunctionStringFromArgs &&
          !/^\[object HTML/.test(functionStringResult)
        ) {
          return false;
        } else {
          return __validateArguments(isGeneratorFunction);
        }
      };
    }
  },
);
var extractClassDeclaration = getModuleExportsIfAbsent(
  (
    __validateAndProcessIntrinsicProperties,
    ___validateAndProcessIntrinsicProperties,
  ) => {
    var intrinsicPropertyValidationResult = validateIntrinsicProperty();
    var getObjectType = Object.prototype.toString;
    var __hasOwnProperty = Object.prototype.hasOwnProperty;
    function validateAndInvokeIntrinsicPropertyAccess(
      _validateIntrinsicPropertyAccess,
      __validateIntrinsicPropertyAccess,
      _validateIntrinsicProperty,
    ) {
      for (
        var ______currentIndex = 0,
          validateIntrinsicPropertyAccessCount =
            _validateIntrinsicPropertyAccess.length;
        ______currentIndex < validateIntrinsicPropertyAccessCount;
        ______currentIndex++
      ) {
        if (
          __hasOwnProperty.call(
            _validateIntrinsicPropertyAccess,
            ______currentIndex,
          )
        ) {
          if (_validateIntrinsicProperty == null) {
            __validateIntrinsicPropertyAccess(
              _validateIntrinsicPropertyAccess[______currentIndex],
              ______currentIndex,
              _validateIntrinsicPropertyAccess,
            );
          } else {
            __validateIntrinsicPropertyAccess.call(
              _validateIntrinsicProperty,
              _validateIntrinsicPropertyAccess[______currentIndex],
              ______currentIndex,
              _validateIntrinsicPropertyAccess,
            );
          }
        }
      }
    }
    function validateAndProcessProperties(
      definePropertyWithErrorHandling,
      validateFunctionArguments,
      _validateFunctionArguments,
    ) {
      for (
        var ___index = 0,
          definePropertyLength = definePropertyWithErrorHandling.length;
        ___index < definePropertyLength;
        ___index++
      ) {
        if (_validateFunctionArguments == null) {
          validateFunctionArguments(
            definePropertyWithErrorHandling.charAt(___index),
            ___index,
            definePropertyWithErrorHandling,
          );
        } else {
          validateFunctionArguments.call(
            _validateFunctionArguments,
            definePropertyWithErrorHandling.charAt(___index),
            ___index,
            definePropertyWithErrorHandling,
          );
        }
      }
    }
    function validateObjectArguments(
      isObjectCheck,
      validateArgumentsForClassPresence,
      checkIfClassDeclaration,
    ) {
      for (var objectKey in isObjectCheck) {
        if (__hasOwnProperty.call(isObjectCheck, objectKey)) {
          if (checkIfClassDeclaration == null) {
            validateArgumentsForClassPresence(
              isObjectCheck[objectKey],
              objectKey,
              isObjectCheck,
            );
          } else {
            validateArgumentsForClassPresence.call(
              checkIfClassDeclaration,
              isObjectCheck[objectKey],
              objectKey,
              isObjectCheck,
            );
          }
        }
      }
    }
    function validateIntrinsicPropertyAndHandle(
      __validateIntrinsicProperty,
      validateHandleIntrinsicProperty,
      validateIntrinsicProperties,
    ) {
      if (!intrinsicPropertyValidationResult(validateHandleIntrinsicProperty)) {
        throw new TypeError("iterator must be a function");
      }
      var intrinsicPropertiesToValidate;
      if (arguments.length >= 3) {
        intrinsicPropertiesToValidate = validateIntrinsicProperties;
      }
      if (
        getObjectType.call(__validateIntrinsicProperty) === "[object Array]"
      ) {
        validateAndInvokeIntrinsicPropertyAccess(
          __validateIntrinsicProperty,
          validateHandleIntrinsicProperty,
          intrinsicPropertiesToValidate,
        );
      } else if (typeof __validateIntrinsicProperty == "string") {
        validateAndProcessProperties(
          __validateIntrinsicProperty,
          validateHandleIntrinsicProperty,
          intrinsicPropertiesToValidate,
        );
      } else {
        validateObjectArguments(
          __validateIntrinsicProperty,
          validateHandleIntrinsicProperty,
          intrinsicPropertiesToValidate,
        );
      }
    }
    ___validateAndProcessIntrinsicProperties.exports =
      validateIntrinsicPropertyAndHandle;
  },
);
var ___validateIntrinsicProperty = getModuleExportsIfAbsent(
  (exportSupportedTypedArrays, getSupportedTypedArrays) => {
    var supportedTypedArrayNames = [
      "BigInt64Array",
      "BigUint64Array",
      "Float32Array",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Uint8Array",
      "Uint8ClampedArray",
    ];
    var globalScope = typeof globalThis === "undefined" ? global : globalThis;
    getSupportedTypedArrays.exports = function () {
      var supportedTypedArrayTypes = [];
      for (
        var typedArrayFunctionCount = 0;
        typedArrayFunctionCount < supportedTypedArrayNames.length;
        typedArrayFunctionCount++
      ) {
        if (
          typeof globalScope[
            supportedTypedArrayNames[typedArrayFunctionCount]
          ] == "function"
        ) {
          supportedTypedArrayTypes[supportedTypedArrayTypes.length] =
            supportedTypedArrayNames[typedArrayFunctionCount];
        }
      }
      return supportedTypedArrayTypes;
    };
  },
);
var ____validateIntrinsicProperty = getModuleExportsIfAbsent(
  (getOwnPropertyDescriptorLength, getOwnPropertyDescriptorLengthFunction) => {
    var createBoundObjectPropertyDescriptorFunction = __createBoundFunction();
    var _getOwnPropertyDescriptorLengthFunction =
      createBoundObjectPropertyDescriptorFunction(
        "%Object.getOwnPropertyDescriptor%",
        true,
      );
    if (_getOwnPropertyDescriptorLengthFunction) {
      try {
        _getOwnPropertyDescriptorLengthFunction([], "length");
      } catch {
        _getOwnPropertyDescriptorLengthFunction = null;
      }
    }
    getOwnPropertyDescriptorLengthFunction.exports =
      _getOwnPropertyDescriptorLengthFunction;
  },
);
var isValidGeneratorFunction = getModuleExportsIfAbsent(
  (findGeneratorFunctionIndex, generatorFunctionIndex) => {
    var extractClassDeclarationValue = extractClassDeclaration();
    var ________________________________validateIntrinsicProperty =
      ___validateIntrinsicProperty();
    var getIntrinsicPropertyValue = getIntrinsicProperty();
    var toStringIntrinsicValue = getIntrinsicPropertyValue(
      "Object.prototype.toString",
    );
    var isSymbolToStringTagSupported = checkSymbolToStringTagSupport()();
    var globalContext = typeof globalThis === "undefined" ? global : globalThis;
    var validateIntrinsicPropertyValue =
      ________________________________validateIntrinsicProperty();
    var _findGeneratorFunctionIndex =
      getIntrinsicPropertyValue("Array.prototype.indexOf", true) ||
      function (isGeneratorFunctionValidation, _isValidGeneratorFunction) {
        for (
          var currentValidationIndex = 0;
          currentValidationIndex < isGeneratorFunctionValidation.length;
          currentValidationIndex += 1
        ) {
          if (
            isGeneratorFunctionValidation[currentValidationIndex] ===
            _isValidGeneratorFunction
          ) {
            return currentValidationIndex;
          }
        }
        return -1;
      };
    var __findGeneratorFunctionIndex = getIntrinsicPropertyValue(
      "String.prototype.slice",
    );
    var ___findGeneratorFunctionIndex = {};
    var ____findGeneratorFunctionIndex = ____validateIntrinsicProperty();
    var findGeneratorFunctionIndexInArray = Object.getPrototypeOf;
    if (
      isSymbolToStringTagSupported &&
      ____findGeneratorFunctionIndex &&
      findGeneratorFunctionIndexInArray
    ) {
      extractClassDeclarationValue(
        validateIntrinsicPropertyValue,
        function (___validateIntrinsicPropertyAccess) {
          var intrinsicPropertyInstance = new globalContext[
            ___validateIntrinsicPropertyAccess
          ]();
          if (Symbol.toStringTag in intrinsicPropertyInstance) {
            var _generatorFunctionIndex = findGeneratorFunctionIndexInArray(
              intrinsicPropertyInstance,
            );
            var generatorFunctionIndexBySymbol = ____findGeneratorFunctionIndex(
              _generatorFunctionIndex,
              Symbol.toStringTag,
            );
            if (!generatorFunctionIndexBySymbol) {
              var __generatorFunctionIndex = findGeneratorFunctionIndexInArray(
                _generatorFunctionIndex,
              );
              generatorFunctionIndexBySymbol = ____findGeneratorFunctionIndex(
                __generatorFunctionIndex,
                Symbol.toStringTag,
              );
            }
            ___findGeneratorFunctionIndex[___validateIntrinsicPropertyAccess] =
              generatorFunctionIndexBySymbol.get;
          }
        },
      );
    }
    function isClassDeclarationMatching(_extractClassDeclaration) {
      var isClassDeclarationValid = false;
      extractClassDeclarationValue(
        ___findGeneratorFunctionIndex,
        function (
          __extractClassDeclaration,
          extractAndValidateIntrinsicProperties,
        ) {
          if (!isClassDeclarationValid) {
            try {
              isClassDeclarationValid =
                __extractClassDeclaration.call(_extractClassDeclaration) ===
                extractAndValidateIntrinsicProperties;
            } catch {}
          }
        },
      );
      return isClassDeclarationValid;
    }
    generatorFunctionIndex.exports = function (___extractClassDeclaration) {
      if (
        !___extractClassDeclaration ||
        typeof ___extractClassDeclaration != "object"
      ) {
        return false;
      }
      if (
        !isSymbolToStringTagSupported ||
        !(Symbol.toStringTag in ___extractClassDeclaration)
      ) {
        var generatorFunctionIndexValidator = __findGeneratorFunctionIndex(
          toStringIntrinsicValue(___extractClassDeclaration),
          8,
          -1,
        );
        return (
          _findGeneratorFunctionIndex(
            validateIntrinsicPropertyValue,
            generatorFunctionIndexValidator,
          ) > -1
        );
      }
      if (____findGeneratorFunctionIndex) {
        return isClassDeclarationMatching(___extractClassDeclaration);
      } else {
        return false;
      }
    };
  },
);
var ____validateIntrinsicPropertyAccess = getModuleExportsIfAbsent(
  (
    validateIntrinsicTag,
    ________________________validateIntrinsicPropertyAccess,
  ) => {
    var ____extractClassDeclaration = extractClassDeclaration();
    var _________________________________validateIntrinsicProperty =
      ___validateIntrinsicProperty();
    var getIntrinsicPropertyFunction = getIntrinsicProperty();
    var getObjectToStringProperty = getIntrinsicPropertyFunction(
      "Object.prototype.toString",
    );
    var _isSymbolToStringTagSupported = checkSymbolToStringTagSupport()();
    var globalObject = typeof globalThis === "undefined" ? global : globalThis;
    var validatedIntrinsicProperty =
      _________________________________validateIntrinsicProperty();
    var getStringSliceIntrinsic = getIntrinsicPropertyFunction(
      "String.prototype.slice",
    );
    var intrinsicPropertyDefaults = {};
    var _validatedIntrinsicProperty = ____validateIntrinsicProperty();
    var getPrototypeOfIntrinsic = Object.getPrototypeOf;
    if (
      _isSymbolToStringTagSupported &&
      _validatedIntrinsicProperty &&
      getPrototypeOfIntrinsic
    ) {
      ____extractClassDeclaration(
        validatedIntrinsicProperty,
        function (_validatePropertyAccess) {
          if (typeof globalObject[_validatePropertyAccess] == "function") {
            var validatedObjectInstance = new globalObject[
              _validatePropertyAccess
            ]();
            if (Symbol.toStringTag in validatedObjectInstance) {
              var validatedObjectPrototype = getPrototypeOfIntrinsic(
                validatedObjectInstance,
              );
              var toStringTagProperty = _validatedIntrinsicProperty(
                validatedObjectPrototype,
                Symbol.toStringTag,
              );
              if (!toStringTagProperty) {
                var prototypeOfValidatedObject = getPrototypeOfIntrinsic(
                  validatedObjectPrototype,
                );
                toStringTagProperty = _validatedIntrinsicProperty(
                  prototypeOfValidatedObject,
                  Symbol.toStringTag,
                );
              }
              intrinsicPropertyDefaults[_validatePropertyAccess] =
                toStringTagProperty.get;
            }
          }
        },
      );
    }
    function ___________________________________validateIntrinsicProperties(
      _validateIntrinsicProperties,
    ) {
      var __isIntrinsicPropertiesValid = false;
      ____extractClassDeclaration(
        intrinsicPropertyDefaults,
        function (__validateIntrinsicProperties, validateObjectProperties) {
          if (!__isIntrinsicPropertiesValid) {
            try {
              var validatedProperties = __validateIntrinsicProperties.call(
                _validateIntrinsicProperties,
              );
              if (validatedProperties === validateObjectProperties) {
                __isIntrinsicPropertiesValid = validatedProperties;
              }
            } catch {}
          }
        },
      );
      return __isIntrinsicPropertiesValid;
    }
    var validateAndExtractIntrinsicProperties = isValidGeneratorFunction();
    ________________________validateIntrinsicPropertyAccess.exports = function (
      checkAndValidateClassDeclarations,
    ) {
      if (
        validateAndExtractIntrinsicProperties(checkAndValidateClassDeclarations)
      ) {
        if (
          !_isSymbolToStringTagSupported ||
          !(Symbol.toStringTag in checkAndValidateClassDeclarations)
        ) {
          return getStringSliceIntrinsic(
            getObjectToStringProperty(checkAndValidateClassDeclarations),
            8,
            -1,
          );
        } else {
          return ___________________________________validateIntrinsicProperties(
            checkAndValidateClassDeclarations,
          );
        }
      } else {
        return false;
      }
    };
  },
);
var _____validateIntrinsicProperty = getModuleExportsIfAbsent(
  (______________________________validateIntrinsicProperty) => {
    var propertyAvailabilityCheck = validatePropertyAvailability();
    var objectDescriptorAndDefineProperty =
      getObjectDescriptorAndDefineProperty();
    var _______________________validateIntrinsicPropertyAccess =
      ____validateIntrinsicPropertyAccess();
    var ___isValidGeneratorFunction = isValidGeneratorFunction();
    function bindValidateIntrinsicProperties(___validateIntrinsicProperties) {
      return ___validateIntrinsicProperties.call.bind(
        ___validateIntrinsicProperties,
      );
    }
    var isBigIntAvailable = typeof BigInt !== "undefined";
    var isSymbolAvailable = typeof Symbol !== "undefined";
    var createIntrinsicPropertyAccessor = bindValidateIntrinsicProperties(
      Object.prototype.toString,
    );
    var createNumberValueAccessor = bindValidateIntrinsicProperties(
      Number.prototype.valueOf,
    );
    var createStringValueAccessor = bindValidateIntrinsicProperties(
      String.prototype.valueOf,
    );
    var createBooleanValueAccessor = bindValidateIntrinsicProperties(
      Boolean.prototype.valueOf,
    );
    if (isBigIntAvailable) {
      createBigIntValueAccessor = bindValidateIntrinsicProperties(
        BigInt.prototype.valueOf,
      );
    }
    var createBigIntValueAccessor;
    if (isSymbolAvailable) {
      validateAndAccessIntrinsicProperties = bindValidateIntrinsicProperties(
        Symbol.prototype.valueOf,
      );
    }
    var validateAndAccessIntrinsicProperties;
    function isValidIntrinsicProperties(
      ____validateIntrinsicProperties,
      getIntrinsicTypedArrayTypes,
    ) {
      if (typeof ____validateIntrinsicProperties != "object") {
        return false;
      }
      try {
        getIntrinsicTypedArrayTypes(____validateIntrinsicProperties);
        return true;
      } catch {
        return false;
      }
    }
    ______________________________validateIntrinsicProperty.isArgumentsObject =
      propertyAvailabilityCheck;
    ______________________________validateIntrinsicProperty.isGeneratorFunction =
      objectDescriptorAndDefineProperty;
    ______________________________validateIntrinsicProperty.isTypedArray =
      ___isValidGeneratorFunction;
    function isPromiseOrTypedArray(extractAvailableTypedArrayNames) {
      return (
        (typeof Promise !== "undefined" &&
          extractAvailableTypedArrayNames instanceof Promise) ||
        (extractAvailableTypedArrayNames !== null &&
          typeof extractAvailableTypedArrayNames == "object" &&
          typeof extractAvailableTypedArrayNames.then == "function" &&
          typeof extractAvailableTypedArrayNames.catch == "function")
      );
    }
    ______________________________validateIntrinsicProperty.isPromise =
      isPromiseOrTypedArray;
    function ___________________________________validateIntrinsicProperty(
      ______validateIntrinsicProperty,
    ) {
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(______validateIntrinsicProperty);
      } else {
        return (
          ___isValidGeneratorFunction(______validateIntrinsicProperty) ||
          isDataViewSupportedAndValid(______validateIntrinsicProperty)
        );
      }
    }
    ______________________________validateIntrinsicProperty.isArrayBufferView =
      ___________________________________validateIntrinsicProperty;
    function isValidGeneratorFunctionForUint8Array(__isValidGeneratorFunction) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          __isValidGeneratorFunction,
        ) === "Uint8Array"
      );
    }
    ______________________________validateIntrinsicProperty.isUint8Array =
      isValidGeneratorFunctionForUint8Array;
    function isUint8ClampedArray(validateAndExportIntrinsicProperty) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          validateAndExportIntrinsicProperty,
        ) === "Uint8ClampedArray"
      );
    }
    ______________________________validateIntrinsicProperty.isUint8ClampedArray =
      isUint8ClampedArray;
    function isUint16ArrayPropertyDescriptor(validateObjectPropertyDescriptor) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          validateObjectPropertyDescriptor,
        ) === "Uint16Array"
      );
    }
    ______________________________validateIntrinsicProperty.isUint16Array =
      isUint16ArrayPropertyDescriptor;
    function isIntrinsicGeneratorFunctionUint32Array(
      validateIntrinsicGeneratorFunction,
    ) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          validateIntrinsicGeneratorFunction,
        ) === "Uint32Array"
      );
    }
    ______________________________validateIntrinsicProperty.isUint32Array =
      isIntrinsicGeneratorFunctionUint32Array;
    function isValidInt8Array(_validateGeneratorFunction) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          _validateGeneratorFunction,
        ) === "Int8Array"
      );
    }
    ______________________________validateIntrinsicProperty.isInt8Array =
      isValidInt8Array;
    function isInt16Array(_______validateIntrinsicProperty) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          _______validateIntrinsicProperty,
        ) === "Int16Array"
      );
    }
    ______________________________validateIntrinsicProperty.isInt16Array =
      isInt16Array;
    function isInt32Array(_____validateIntrinsicPropertyAccess) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          _____validateIntrinsicPropertyAccess,
        ) === "Int32Array"
      );
    }
    ______________________________validateIntrinsicProperty.isInt32Array =
      isInt32Array;
    function isFloat32Array(______validateIntrinsicPropertyAccess) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          ______validateIntrinsicPropertyAccess,
        ) === "Float32Array"
      );
    }
    ______________________________validateIntrinsicProperty.isFloat32Array =
      isFloat32Array;
    function isElementInFloat64Array(findIndexOfElement) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          findIndexOfElement,
        ) === "Float64Array"
      );
    }
    ______________________________validateIntrinsicProperty.isFloat64Array =
      isElementInFloat64Array;
    function isBigInt64ArrayGeneratorFunctionIndex(getGeneratorFunctionIndex) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          getGeneratorFunctionIndex,
        ) === "BigInt64Array"
      );
    }
    ______________________________validateIntrinsicProperty.isBigInt64Array =
      isBigInt64ArrayGeneratorFunctionIndex;
    function isBigUint64Array(validateAndExtractProperties) {
      return (
        _______________________validateIntrinsicPropertyAccess(
          validateAndExtractProperties,
        ) === "BigUint64Array"
      );
    }
    ______________________________validateIntrinsicProperty.isBigUint64Array =
      isBigUint64Array;
    function isMapIntrinsicPropertyAccessor(
      _______validateIntrinsicPropertyAccess,
    ) {
      return (
        createIntrinsicPropertyAccessor(
          _______validateIntrinsicPropertyAccess,
        ) === "[object Map]"
      );
    }
    isMapIntrinsicPropertyAccessor.working =
      typeof Map !== "undefined" && isMapIntrinsicPropertyAccessor(new Map());
    function isValidMapInstance(________validateIntrinsicPropertyAccess) {
      if (typeof Map === "undefined") {
        return false;
      } else if (isMapIntrinsicPropertyAccessor.working) {
        return isMapIntrinsicPropertyAccessor(
          ________validateIntrinsicPropertyAccess,
        );
      } else {
        return ________validateIntrinsicPropertyAccess instanceof Map;
      }
    }
    ______________________________validateIntrinsicProperty.isMap =
      isValidMapInstance;
    function isSetType(_________validateIntrinsicPropertyAccess) {
      return (
        createIntrinsicPropertyAccessor(
          _________validateIntrinsicPropertyAccess,
        ) === "[object Set]"
      );
    }
    isSetType.working = typeof Set !== "undefined" && isSetType(new Set());
    function isValidSetInstance(__________validateIntrinsicPropertyAccess) {
      if (typeof Set === "undefined") {
        return false;
      } else if (isSetType.working) {
        return isSetType(__________validateIntrinsicPropertyAccess);
      } else {
        return __________validateIntrinsicPropertyAccess instanceof Set;
      }
    }
    ______________________________validateIntrinsicProperty.isSet =
      isValidSetInstance;
    function isWeakMapAccessor(validateClassDeclaration) {
      return (
        createIntrinsicPropertyAccessor(validateClassDeclaration) ===
        "[object WeakMap]"
      );
    }
    isWeakMapAccessor.working =
      typeof WeakMap !== "undefined" && isWeakMapAccessor(new WeakMap());
    function isPropertyAccessValid(___________validateIntrinsicPropertyAccess) {
      if (typeof WeakMap === "undefined") {
        return false;
      } else if (isWeakMapAccessor.working) {
        return isWeakMapAccessor(___________validateIntrinsicPropertyAccess);
      } else {
        return ___________validateIntrinsicPropertyAccess instanceof WeakMap;
      }
    }
    ______________________________validateIntrinsicProperty.isWeakMap =
      isPropertyAccessValid;
    function isWeakSetIntrinsicType(_validateClassDeclaration) {
      return (
        createIntrinsicPropertyAccessor(_validateClassDeclaration) ===
        "[object WeakSet]"
      );
    }
    isWeakSetIntrinsicType.working =
      typeof WeakSet !== "undefined" && isWeakSetIntrinsicType(new WeakSet());
    function _________________________validateIntrinsicPropertyAccess(
      ____________validateIntrinsicPropertyAccess,
    ) {
      return isWeakSetIntrinsicType(
        ____________validateIntrinsicPropertyAccess,
      );
    }
    ______________________________validateIntrinsicProperty.isWeakSet =
      _________________________validateIntrinsicPropertyAccess;
    function ____isArrayBuffer(_____________validateIntrinsicPropertyAccess) {
      return (
        createIntrinsicPropertyAccessor(
          _____________validateIntrinsicPropertyAccess,
        ) === "[object ArrayBuffer]"
      );
    }
    ____isArrayBuffer.working =
      typeof ArrayBuffer !== "undefined" &&
      ____isArrayBuffer(new ArrayBuffer());
    function isArrayBufferInstance(
      ______________validateIntrinsicPropertyAccess,
    ) {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      } else if (____isArrayBuffer.working) {
        return ____isArrayBuffer(______________validateIntrinsicPropertyAccess);
      } else {
        return (
          ______________validateIntrinsicPropertyAccess instanceof ArrayBuffer
        );
      }
    }
    ______________________________validateIntrinsicProperty.isArrayBuffer =
      isArrayBufferInstance;
    function isDataViewIntrinsicProperty(validateAndReturnIntrinsicProperty) {
      return (
        createIntrinsicPropertyAccessor(validateAndReturnIntrinsicProperty) ===
        "[object DataView]"
      );
    }
    isDataViewIntrinsicProperty.working =
      typeof ArrayBuffer !== "undefined" &&
      typeof DataView !== "undefined" &&
      isDataViewIntrinsicProperty(new DataView(new ArrayBuffer(1), 0, 1));
    function isDataViewSupportedAndValid(validateAndStoreIntrinsicProperties) {
      if (typeof DataView === "undefined") {
        return false;
      } else if (isDataViewIntrinsicProperty.working) {
        return isDataViewIntrinsicProperty(validateAndStoreIntrinsicProperties);
      } else {
        return validateAndStoreIntrinsicProperties instanceof DataView;
      }
    }
    ______________________________validateIntrinsicProperty.isDataView =
      isDataViewSupportedAndValid;
    var _______________________________validateIntrinsicProperty =
      typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
    function isSharedArrayBufferProperty(__validatePropertyAccess) {
      return (
        createIntrinsicPropertyAccessor(__validatePropertyAccess) ===
        "[object SharedArrayBuffer]"
      );
    }
    function validateClassDeclarationsAgainstIntrinsicProperty(
      validateClassDeclarations,
    ) {
      if (
        typeof _______________________________validateIntrinsicProperty ===
        "undefined"
      ) {
        return false;
      } else {
        if (typeof isSharedArrayBufferProperty.working === "undefined") {
          isSharedArrayBufferProperty.working = isSharedArrayBufferProperty(
            new _______________________________validateIntrinsicProperty(),
          );
        }
        if (isSharedArrayBufferProperty.working) {
          return isSharedArrayBufferProperty(validateClassDeclarations);
        } else {
          return (
            validateClassDeclarations instanceof
            _______________________________validateIntrinsicProperty
          );
        }
      }
    }
    ______________________________validateIntrinsicProperty.isSharedArrayBuffer =
      validateClassDeclarationsAgainstIntrinsicProperty;
    function isAsyncFunctionPropertyAccessor(
      validateAndExportClassDeclarations,
    ) {
      return (
        createIntrinsicPropertyAccessor(validateAndExportClassDeclarations) ===
        "[object AsyncFunction]"
      );
    }
    ______________________________validateIntrinsicProperty.isAsyncFunction =
      isAsyncFunctionPropertyAccessor;
    function isMapIterator(validateAndExportIntrinsicProperties) {
      return (
        createIntrinsicPropertyAccessor(
          validateAndExportIntrinsicProperties,
        ) === "[object Map Iterator]"
      );
    }
    ______________________________validateIntrinsicProperty.isMapIterator =
      isMapIterator;
    function isSetIteratorAccess(________validateIntrinsicProperty) {
      return (
        createIntrinsicPropertyAccessor(________validateIntrinsicProperty) ===
        "[object Set Iterator]"
      );
    }
    ______________________________validateIntrinsicProperty.isSetIterator =
      isSetIteratorAccess;
    function __isGeneratorFunction(_____validateIntrinsicProperties) {
      return (
        createIntrinsicPropertyAccessor(_____validateIntrinsicProperties) ===
        "[object Generator]"
      );
    }
    ______________________________validateIntrinsicProperty.isGeneratorObject =
      __isGeneratorFunction;
    function isWebAssemblyModule(_validateClassDeclarations) {
      return (
        createIntrinsicPropertyAccessor(_validateClassDeclarations) ===
        "[object WebAssembly.Module]"
      );
    }
    ______________________________validateIntrinsicProperty.isWebAssemblyCompiledModule =
      isWebAssemblyModule;
    function validateIntrinsicNumberProperties(validateProperty) {
      return isValidIntrinsicProperties(
        validateProperty,
        createNumberValueAccessor,
      );
    }
    ______________________________validateIntrinsicProperty.isNumberObject =
      validateIntrinsicNumberProperties;
    function validateIntrinsicPropertyAndAccess(
      _________validateIntrinsicProperty,
    ) {
      return isValidIntrinsicProperties(
        _________validateIntrinsicProperty,
        createStringValueAccessor,
      );
    }
    ______________________________validateIntrinsicProperty.isStringObject =
      validateIntrinsicPropertyAndAccess;
    function ____________________________________validateIntrinsicProperty(
      __________validateIntrinsicProperty,
    ) {
      return isValidIntrinsicProperties(
        __________validateIntrinsicProperty,
        createBooleanValueAccessor,
      );
    }
    ______________________________validateIntrinsicProperty.isBooleanObject =
      ____________________________________validateIntrinsicProperty;
    function validateIntrinsicBigIntProperties(___validatePropertyAccess) {
      return (
        isBigIntAvailable &&
        isValidIntrinsicProperties(
          ___validatePropertyAccess,
          createBigIntValueAccessor,
        )
      );
    }
    ______________________________validateIntrinsicProperty.isBigIntObject =
      validateIntrinsicBigIntProperties;
    function validateIntrinsicPropertiesAccess(
      _______________validateIntrinsicPropertyAccess,
    ) {
      return (
        isSymbolAvailable &&
        isValidIntrinsicProperties(
          _______________validateIntrinsicPropertyAccess,
          validateAndAccessIntrinsicProperties,
        )
      );
    }
    ______________________________validateIntrinsicProperty.isSymbolObject =
      validateIntrinsicPropertiesAccess;
    function ____________________________________validateIntrinsicProperties(
      ______validateIntrinsicProperties,
    ) {
      return (
        validateIntrinsicNumberProperties(______validateIntrinsicProperties) ||
        validateIntrinsicPropertyAndAccess(______validateIntrinsicProperties) ||
        ____________________________________validateIntrinsicProperty(
          ______validateIntrinsicProperties,
        ) ||
        validateIntrinsicBigIntProperties(______validateIntrinsicProperties) ||
        validateIntrinsicPropertiesAccess(______validateIntrinsicProperties)
      );
    }
    ______________________________validateIntrinsicProperty.isBoxedPrimitive =
      ____________________________________validateIntrinsicProperties;
    function isValidIntrinsicProperty(_______validateIntrinsicProperties) {
      return (
        typeof Uint8Array !== "undefined" &&
        (isArrayBufferInstance(_______validateIntrinsicProperties) ||
          validateClassDeclarationsAgainstIntrinsicProperty(
            _______validateIntrinsicProperties,
          ))
      );
    }
    ______________________________validateIntrinsicProperty.isAnyArrayBuffer =
      isValidIntrinsicProperty;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
      function (___________validateIntrinsicProperty) {
        Object.defineProperty(
          ______________________________validateIntrinsicProperty,
          ___________validateIntrinsicProperty,
          {
            enumerable: false,
            value() {
              throw new Error(
                ___________validateIntrinsicProperty +
                  " is not supported in userland",
              );
            },
          },
        );
      },
    );
  },
);
var validateTypedArrayExtraction = getModuleExportsIfAbsent(
  (validateBufferObject, isValidBufferObject) => {
    isValidBufferObject.exports = function (functionValueOf) {
      return (
        functionValueOf &&
        typeof functionValueOf == "object" &&
        typeof functionValueOf.copy == "function" &&
        typeof functionValueOf.fill == "function" &&
        typeof functionValueOf.readUInt8 == "function"
      );
    };
  },
);
var validateTypedArrayProperties = getModuleExportsIfAbsent(
  (_setupTypedArrayInheritance, __setupTypedArrayInheritance) => {
    if (typeof Object.create == "function") {
      __setupTypedArrayInheritance.exports = function (
        ____________validateIntrinsicProperty,
        isTypedArrayView,
      ) {
        if (isTypedArrayView) {
          ____________validateIntrinsicProperty.super_ = isTypedArrayView;
          ____________validateIntrinsicProperty.prototype = Object.create(
            isTypedArrayView.prototype,
            {
              constructor: {
                value: ____________validateIntrinsicProperty,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            },
          );
        }
      };
    } else {
      __setupTypedArrayInheritance.exports = function (
        validateTypedArray,
        validateAsyncOperation,
      ) {
        if (validateAsyncOperation) {
          validateTypedArray.super_ = validateAsyncOperation;
          function initializeComponents() {}
          initializeComponents.prototype = validateAsyncOperation.prototype;
          validateTypedArray.prototype = new initializeComponents();
          validateTypedArray.prototype.constructor = validateTypedArray;
        }
      };
    }
  },
);
var isUint16Array = getModuleExportsIfAbsent((stringFormatter) => {
  var _getPropertyDescriptors =
    Object.getOwnPropertyDescriptors ||
    function (isPromiseFunction) {
      for (
        var promiseFunctionDescriptors = Object.keys(isPromiseFunction),
          promiseFunctionPropertyDescriptors = {},
          ____index = 0;
        ____index < promiseFunctionDescriptors.length;
        ____index++
      ) {
        promiseFunctionPropertyDescriptors[
          promiseFunctionDescriptors[____index]
        ] = Object.getOwnPropertyDescriptor(
          isPromiseFunction,
          promiseFunctionDescriptors[____index],
        );
      }
      return promiseFunctionPropertyDescriptors;
    };
  var placeholderRegex = /%[sdj%]/g;
  stringFormatter.format = function (_____________validateIntrinsicProperty) {
    if (!isStringProperty(_____________validateIntrinsicProperty)) {
      var formattedWeakMapOptions = [];
      for (
        var argumentIndex = 0;
        argumentIndex < arguments.length;
        argumentIndex++
      ) {
        formattedWeakMapOptions.push(
          formatWeakMapOptions(arguments[argumentIndex]),
        );
      }
      return formattedWeakMapOptions.join(" ");
    }
    for (
      var argumentIndex = 1,
        argumentsList = arguments,
        totalArgumentsCount = argumentsList.length,
        formattedMessage = String(
          _____________validateIntrinsicProperty,
        ).replace(placeholderRegex, function (isArrayType) {
          if (isArrayType === "%%") {
            return "%";
          }
          if (argumentIndex >= totalArgumentsCount) {
            return isArrayType;
          }
          switch (isArrayType) {
            case "%s":
              return String(argumentsList[argumentIndex++]);
            case "%d":
              return Number(argumentsList[argumentIndex++]);
            case "%j":
              try {
                return JSON.stringify(argumentsList[argumentIndex++]);
              } catch {
                return "[Circular]";
              }
            default:
              return isArrayType;
          }
        }),
        currentArgument = argumentsList[argumentIndex];
      argumentIndex < totalArgumentsCount;
      currentArgument = argumentsList[++argumentIndex]
    ) {
      if (
        isFormatStringNull(currentArgument) ||
        !isValidFormattedOutput(currentArgument)
      ) {
        formattedMessage += " " + currentArgument;
      } else {
        formattedMessage += " " + formatWeakMapOptions(currentArgument);
      }
    }
    return formattedMessage;
  };
  stringFormatter.deprecate = function (validateArrayType, _validateArrayType) {
    if (typeof process !== "undefined" && process.noDeprecation === true) {
      return validateArrayType;
    }
    if (typeof process === "undefined") {
      return function () {
        return stringFormatter
          .deprecate(validateArrayType, _validateArrayType)
          .apply(this, arguments);
      };
    }
    var hasDeprecationWarningBeenLogged = false;
    function logDeprecationWarningAndValidateArrayType() {
      if (!hasDeprecationWarningBeenLogged) {
        if (process.throwDeprecation) {
          throw new Error(_validateArrayType);
        }
        if (process.traceDeprecation) {
          console.trace(_validateArrayType);
        } else {
          console.error(_validateArrayType);
        }
        hasDeprecationWarningBeenLogged = true;
      }
      return validateArrayType.apply(this, arguments);
    }
    return logDeprecationWarningAndValidateArrayType;
  };
  var __getPropertyDescriptors = {};
  var ___getPropertyDescriptors = /^$/;
  getOwnPropertyDescriptors = "false";
  getOwnPropertyDescriptors = getOwnPropertyDescriptors
    .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
    .replace(/\*/g, ".*")
    .replace(/,/g, "$|^")
    .toUpperCase();
  ___getPropertyDescriptors = new RegExp(
    "^" + getOwnPropertyDescriptors + "$",
    "i",
  );
  var getOwnPropertyDescriptors;
  stringFormatter.debuglog = function (
    ________________validateIntrinsicPropertyAccess,
  ) {
    ________________validateIntrinsicPropertyAccess =
      ________________validateIntrinsicPropertyAccess.toUpperCase();
    if (
      !__getPropertyDescriptors[________________validateIntrinsicPropertyAccess]
    ) {
      if (
        ___getPropertyDescriptors.test(
          ________________validateIntrinsicPropertyAccess,
        )
      ) {
        var currentProcessId = process.pid;
        __getPropertyDescriptors[
          ________________validateIntrinsicPropertyAccess
        ] = function () {
          var _formattedString = stringFormatter.format.apply(
            stringFormatter,
            arguments,
          );
          console.error(
            "%s %d: %s",
            ________________validateIntrinsicPropertyAccess,
            currentProcessId,
            _formattedString,
          );
        };
      } else {
        __getPropertyDescriptors[
          ________________validateIntrinsicPropertyAccess
        ] = function () {};
      }
    }
    return __getPropertyDescriptors[
      ________________validateIntrinsicPropertyAccess
    ];
  };
  function formatWeakMapOptions(isWeakMap, checkIfWeakMap) {
    var weakMapFormattingOptions = {
      seen: [],
      stylize: returnValidatedArrayBuffer,
    };
    if (arguments.length >= 3) {
      weakMapFormattingOptions.depth = arguments[2];
    }
    if (arguments.length >= 4) {
      weakMapFormattingOptions.colors = arguments[3];
    }
    if (isBooleanFormatString(checkIfWeakMap)) {
      weakMapFormattingOptions.showHidden = checkIfWeakMap;
    } else if (checkIfWeakMap) {
      stringFormatter._extend(weakMapFormattingOptions, checkIfWeakMap);
    }
    if (isFormatStringUndefined(weakMapFormattingOptions.showHidden)) {
      weakMapFormattingOptions.showHidden = false;
    }
    if (isFormatStringUndefined(weakMapFormattingOptions.depth)) {
      weakMapFormattingOptions.depth = 2;
    }
    if (isFormatStringUndefined(weakMapFormattingOptions.colors)) {
      weakMapFormattingOptions.colors = false;
    }
    if (isFormatStringUndefined(weakMapFormattingOptions.customInspect)) {
      weakMapFormattingOptions.customInspect = true;
    }
    if (weakMapFormattingOptions.colors) {
      weakMapFormattingOptions.stylize = formatWeakSetWithStyle;
    }
    return formatIntrinsicProperty(
      weakMapFormattingOptions,
      isWeakMap,
      weakMapFormattingOptions.depth,
    );
  }
  stringFormatter.inspect = formatWeakMapOptions;
  formatWeakMapOptions.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  };
  formatWeakMapOptions.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
  };
  function formatWeakSetWithStyle(
    validateWeakSet,
    _________________validateIntrinsicPropertyAccess,
  ) {
    var styleKey =
      formatWeakMapOptions.styles[
        _________________validateIntrinsicPropertyAccess
      ];
    if (styleKey) {
      return (
        "[" +
        formatWeakMapOptions.colors[styleKey][0] +
        "m" +
        validateWeakSet +
        "[" +
        formatWeakMapOptions.colors[styleKey][1] +
        "m"
      );
    } else {
      return validateWeakSet;
    }
  }
  function returnValidatedArrayBuffer(
    validateArrayBuffer,
    validateAndCheckIntrinsicPropertyAccess,
  ) {
    return validateArrayBuffer;
  }
  function createIntrinsicPropertyMap(
    __________________validateIntrinsicPropertyAccess,
  ) {
    var intrinsicPropertyMap = {};
    __________________validateIntrinsicPropertyAccess.forEach(
      function (isArrayBuffer, _isArrayBuffer) {
        intrinsicPropertyMap[isArrayBuffer] = true;
      },
    );
    return intrinsicPropertyMap;
  }
  function formatIntrinsicProperty(
    __isArrayBuffer,
    _validateAndReturnIntrinsicProperty,
    ___isArrayBuffer,
  ) {
    if (
      __isArrayBuffer.customInspect &&
      _validateAndReturnIntrinsicProperty &&
      isFunction(_validateAndReturnIntrinsicProperty.inspect) &&
      _validateAndReturnIntrinsicProperty.inspect !== stringFormatter.inspect &&
      (!_validateAndReturnIntrinsicProperty.constructor ||
        _validateAndReturnIntrinsicProperty.constructor.prototype !==
          _validateAndReturnIntrinsicProperty)
    ) {
      var arrayBufferValidationResult =
        _validateAndReturnIntrinsicProperty.inspect(
          ___isArrayBuffer,
          __isArrayBuffer,
        );
      if (!isStringProperty(arrayBufferValidationResult)) {
        arrayBufferValidationResult = formatIntrinsicProperty(
          __isArrayBuffer,
          arrayBufferValidationResult,
          ___isArrayBuffer,
        );
      }
      return arrayBufferValidationResult;
    }
    var intrinsicPropertyFormatResult = stylizeValueBasedOnType(
      __isArrayBuffer,
      _validateAndReturnIntrinsicProperty,
    );
    if (intrinsicPropertyFormatResult) {
      return intrinsicPropertyFormatResult;
    }
    var intrinsicPropertyKeys = Object.keys(
      _validateAndReturnIntrinsicProperty,
    );
    var formatIntrinsicPropertyKeys = createIntrinsicPropertyMap(
      intrinsicPropertyKeys,
    );
    if (__isArrayBuffer.showHidden) {
      intrinsicPropertyKeys = Object.getOwnPropertyNames(
        _validateAndReturnIntrinsicProperty,
      );
    }
    if (
      isErrorOrDeprecationWarningHandler(_validateAndReturnIntrinsicProperty) &&
      (intrinsicPropertyKeys.indexOf("message") >= 0 ||
        intrinsicPropertyKeys.indexOf("description") >= 0)
    ) {
      return formatErrorToString(_validateAndReturnIntrinsicProperty);
    }
    if (intrinsicPropertyKeys.length === 0) {
      if (isFunction(_validateAndReturnIntrinsicProperty)) {
        var functionNameDescription = _validateAndReturnIntrinsicProperty.name
          ? ": " + _validateAndReturnIntrinsicProperty.name
          : "";
        return __isArrayBuffer.stylize(
          "[Function" + functionNameDescription + "]",
          "special",
        );
      }
      if (isValidRegexFormat(_validateAndReturnIntrinsicProperty)) {
        return __isArrayBuffer.stylize(
          RegExp.prototype.toString.call(_validateAndReturnIntrinsicProperty),
          "regexp",
        );
      }
      if (isValidDateFunction(_validateAndReturnIntrinsicProperty)) {
        return __isArrayBuffer.stylize(
          Date.prototype.toString.call(_validateAndReturnIntrinsicProperty),
          "date",
        );
      }
      if (
        isErrorOrDeprecationWarningHandler(_validateAndReturnIntrinsicProperty)
      ) {
        return formatErrorToString(_validateAndReturnIntrinsicProperty);
      }
    }
    var intrinsicPropertyResult = "";
    var _intrinsicPropertyFormatResult = false;
    var getFormattedIntrinsicProperty = ["{", "}"];
    if (isArrayOfPropertyDescriptors(_validateAndReturnIntrinsicProperty)) {
      _intrinsicPropertyFormatResult = true;
      getFormattedIntrinsicProperty = ["[", "]"];
    }
    if (isFunction(_validateAndReturnIntrinsicProperty)) {
      var intrinsicPropertyName = _validateAndReturnIntrinsicProperty.name
        ? ": " + _validateAndReturnIntrinsicProperty.name
        : "";
      intrinsicPropertyResult = " [Function" + intrinsicPropertyName + "]";
    }
    if (isValidRegexFormat(_validateAndReturnIntrinsicProperty)) {
      intrinsicPropertyResult =
        " " +
        RegExp.prototype.toString.call(_validateAndReturnIntrinsicProperty);
    }
    if (isValidDateFunction(_validateAndReturnIntrinsicProperty)) {
      intrinsicPropertyResult =
        " " +
        Date.prototype.toUTCString.call(_validateAndReturnIntrinsicProperty);
    }
    if (
      isErrorOrDeprecationWarningHandler(_validateAndReturnIntrinsicProperty)
    ) {
      intrinsicPropertyResult =
        " " + formatErrorToString(_validateAndReturnIntrinsicProperty);
    }
    if (
      intrinsicPropertyKeys.length === 0 &&
      (!_intrinsicPropertyFormatResult ||
        _validateAndReturnIntrinsicProperty.length == 0)
    ) {
      return (
        getFormattedIntrinsicProperty[0] +
        intrinsicPropertyResult +
        getFormattedIntrinsicProperty[1]
      );
    }
    if (___isArrayBuffer < 0) {
      if (isValidRegexFormat(_validateAndReturnIntrinsicProperty)) {
        return __isArrayBuffer.stylize(
          RegExp.prototype.toString.call(_validateAndReturnIntrinsicProperty),
          "regexp",
        );
      } else {
        return __isArrayBuffer.stylize("[Object]", "special");
      }
    }
    __isArrayBuffer.seen.push(_validateAndReturnIntrinsicProperty);
    var formatIntrinsicPropertyResult;
    if (_intrinsicPropertyFormatResult) {
      formatIntrinsicPropertyResult =
        _________________________________validateIntrinsicProperties(
          __isArrayBuffer,
          _validateAndReturnIntrinsicProperty,
          ___isArrayBuffer,
          formatIntrinsicPropertyKeys,
          intrinsicPropertyKeys,
        );
    } else {
      formatIntrinsicPropertyResult = intrinsicPropertyKeys.map(
        function (isBigIntObject) {
          return describeIntrinsicProperty(
            __isArrayBuffer,
            _validateAndReturnIntrinsicProperty,
            ___isArrayBuffer,
            formatIntrinsicPropertyKeys,
            isBigIntObject,
            _intrinsicPropertyFormatResult,
          );
        },
      );
    }
    __isArrayBuffer.seen.pop();
    return validateAndFormatTypedArrayValidation(
      formatIntrinsicPropertyResult,
      intrinsicPropertyResult,
      getFormattedIntrinsicProperty,
    );
  }
  function stylizeValueBasedOnType(isGeneratorObject, _isGeneratorObject) {
    if (isFormatStringUndefined(_isGeneratorObject)) {
      return isGeneratorObject.stylize("undefined", "undefined");
    }
    if (isStringProperty(_isGeneratorObject)) {
      var formattedGeneratorObject =
        "'" +
        JSON.stringify(_isGeneratorObject)
          .replace(/^"|"$/g, "")
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return isGeneratorObject.stylize(formattedGeneratorObject, "string");
    }
    if (isNumber(_isGeneratorObject)) {
      return isGeneratorObject.stylize("" + _isGeneratorObject, "number");
    }
    if (isBooleanFormatString(_isGeneratorObject)) {
      return isGeneratorObject.stylize("" + _isGeneratorObject, "boolean");
    }
    if (isFormatStringNull(_isGeneratorObject)) {
      return isGeneratorObject.stylize("null", "null");
    }
  }
  function formatErrorToString(______________validateIntrinsicProperty) {
    return (
      "[" +
      Error.prototype.toString.call(______________validateIntrinsicProperty) +
      "]"
    );
  }
  function _________________________________validateIntrinsicProperties(
    isBoxedPrimitiveValidator,
    ____validatePropertyAccess,
    isBoxedPrimitive,
    validateAccessProperties,
    validatePropertyAccessForBigInt,
  ) {
    var intrinsicPropertyDescriptions = [];
    for (
      var propertyAccessIndex = 0,
        validateAccessCount = ____validatePropertyAccess.length;
      propertyAccessIndex < validateAccessCount;
      ++propertyAccessIndex
    ) {
      if (
        checkIntrinsicPropertyAccess(
          ____validatePropertyAccess,
          String(propertyAccessIndex),
        )
      ) {
        intrinsicPropertyDescriptions.push(
          describeIntrinsicProperty(
            isBoxedPrimitiveValidator,
            ____validatePropertyAccess,
            isBoxedPrimitive,
            validateAccessProperties,
            String(propertyAccessIndex),
            true,
          ),
        );
      } else {
        intrinsicPropertyDescriptions.push("");
      }
    }
    validatePropertyAccessForBigInt.forEach(
      function (________validateIntrinsicProperties) {
        if (!________validateIntrinsicProperties.match(/^\d+$/)) {
          intrinsicPropertyDescriptions.push(
            describeIntrinsicProperty(
              isBoxedPrimitiveValidator,
              ____validatePropertyAccess,
              isBoxedPrimitive,
              validateAccessProperties,
              ________validateIntrinsicProperties,
              true,
            ),
          );
        }
      },
    );
    return intrinsicPropertyDescriptions;
  }
  function describeIntrinsicProperty(
    _________validateIntrinsicProperties,
    __________validateIntrinsicProperties,
    ___________validateIntrinsicProperties,
    ____________validateIntrinsicProperties,
    _____________validateIntrinsicProperties,
    ______________validateIntrinsicProperties,
  ) {
    var propertyDescription;
    var propertyAccessorInfo;
    var _propertyDescriptor;
    _propertyDescriptor = Object.getOwnPropertyDescriptor(
      __________validateIntrinsicProperties,
      _____________validateIntrinsicProperties,
    ) || {
      value:
        __________validateIntrinsicProperties[
          _____________validateIntrinsicProperties
        ],
    };
    if (_propertyDescriptor.get) {
      if (_propertyDescriptor.set) {
        propertyAccessorInfo = _________validateIntrinsicProperties.stylize(
          "[Getter/Setter]",
          "special",
        );
      } else {
        propertyAccessorInfo = _________validateIntrinsicProperties.stylize(
          "[Getter]",
          "special",
        );
      }
    } else if (_propertyDescriptor.set) {
      propertyAccessorInfo = _________validateIntrinsicProperties.stylize(
        "[Setter]",
        "special",
      );
    }
    if (
      !checkIntrinsicPropertyAccess(
        ____________validateIntrinsicProperties,
        _____________validateIntrinsicProperties,
      )
    ) {
      propertyDescription =
        "[" + _____________validateIntrinsicProperties + "]";
    }
    if (!propertyAccessorInfo) {
      if (
        _________validateIntrinsicProperties.seen.indexOf(
          _propertyDescriptor.value,
        ) < 0
      ) {
        if (isFormatStringNull(___________validateIntrinsicProperties)) {
          propertyAccessorInfo = formatIntrinsicProperty(
            _________validateIntrinsicProperties,
            _propertyDescriptor.value,
            null,
          );
        } else {
          propertyAccessorInfo = formatIntrinsicProperty(
            _________validateIntrinsicProperties,
            _propertyDescriptor.value,
            ___________validateIntrinsicProperties - 1,
          );
        }
        if (propertyAccessorInfo.indexOf("\n") > -1) {
          if (______________validateIntrinsicProperties) {
            propertyAccessorInfo = propertyAccessorInfo
              .split("\n")
              .map(function (_validateTypedArray) {
                return "  " + _validateTypedArray;
              })
              .join("\n")
              .substr(2);
          } else {
            propertyAccessorInfo =
              "\n" +
              propertyAccessorInfo
                .split("\n")
                .map(function (validateTypedArrayConstructor) {
                  return "   " + validateTypedArrayConstructor;
                })
                .join("\n");
          }
        }
      } else {
        propertyAccessorInfo = _________validateIntrinsicProperties.stylize(
          "[Circular]",
          "special",
        );
      }
    }
    if (isFormatStringUndefined(propertyDescription)) {
      if (
        ______________validateIntrinsicProperties &&
        _____________validateIntrinsicProperties.match(/^\d+$/)
      ) {
        return propertyAccessorInfo;
      }
      propertyDescription = JSON.stringify(
        "" + _____________validateIntrinsicProperties,
      );
      if (propertyDescription.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        propertyDescription = propertyDescription.substr(
          1,
          propertyDescription.length - 2,
        );
        propertyDescription = _________validateIntrinsicProperties.stylize(
          propertyDescription,
          "name",
        );
      } else {
        propertyDescription = propertyDescription
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"')
          .replace(/(^"|"$)/g, "'");
        propertyDescription = _________validateIntrinsicProperties.stylize(
          propertyDescription,
          "string",
        );
      }
    }
    return propertyDescription + ": " + propertyAccessorInfo;
  }
  function validateAndFormatTypedArrayValidation(
    validateTypedArrayWithAsyncSupport,
    validateAsyncOperationWithInheritance,
    exportTypedArrayValidation,
  ) {
    var lineCount = 0;
    var totalCharactersInTypedArray = validateTypedArrayWithAsyncSupport.reduce(
      function (getTypedArrayValidator, setupTypedArrayInheritance) {
        lineCount++;
        if (setupTypedArrayInheritance.indexOf("\n") >= 0) {
          lineCount++;
        }
        return (
          getTypedArrayValidator +
          setupTypedArrayInheritance.replace(/\u001b\[\d\d?m/g, "").length +
          1
        );
      },
      0,
    );
    if (totalCharactersInTypedArray > 60) {
      return (
        exportTypedArrayValidation[0] +
        (validateAsyncOperationWithInheritance === ""
          ? ""
          : validateAsyncOperationWithInheritance + "\n ") +
        " " +
        validateTypedArrayWithAsyncSupport.join(",\n  ") +
        " " +
        exportTypedArrayValidation[1]
      );
    } else {
      return (
        exportTypedArrayValidation[0] +
        validateAsyncOperationWithInheritance +
        " " +
        validateTypedArrayWithAsyncSupport.join(", ") +
        " " +
        exportTypedArrayValidation[1]
      );
    }
  }
  stringFormatter.types = _____validateIntrinsicProperty();
  function isArrayOfPropertyDescriptors(getPropertyDescriptors) {
    return Array.isArray(getPropertyDescriptors);
  }
  stringFormatter.isArray = isArrayOfPropertyDescriptors;
  function isBooleanFormatString(formatStringUsingPlaceholder) {
    return typeof formatStringUsingPlaceholder == "boolean";
  }
  stringFormatter.isBoolean = isBooleanFormatString;
  function isFormatStringNull(formatStringWithArgs) {
    return formatStringWithArgs === null;
  }
  stringFormatter.isNull = isFormatStringNull;
  function isNullOrUndefined(formatStringWithArguments) {
    return formatStringWithArguments == null;
  }
  stringFormatter.isNullOrUndefined = isNullOrUndefined;
  function isNumber(_formatStringWithArguments) {
    return typeof _formatStringWithArguments == "number";
  }
  stringFormatter.isNumber = isNumber;
  function isStringProperty(_______________validateIntrinsicProperty) {
    return typeof _______________validateIntrinsicProperty == "string";
  }
  stringFormatter.isString = isStringProperty;
  function isSymbol(formatArgumentsForLogging) {
    return typeof formatArgumentsForLogging == "symbol";
  }
  stringFormatter.isSymbol = isSymbol;
  function isFormatStringUndefined(__formatStringWithArguments) {
    return __formatStringWithArguments === undefined;
  }
  stringFormatter.isUndefined = isFormatStringUndefined;
  function isValidRegexFormat(formatArgumentsToString) {
    return (
      isValidFormattedOutput(formatArgumentsToString) &&
      getTypeOfValidator(formatArgumentsToString) === "[object RegExp]"
    );
  }
  stringFormatter.isRegExp = isValidRegexFormat;
  stringFormatter.types.isRegExp = isValidRegexFormat;
  function isValidFormattedOutput(getFormattedOutput) {
    return typeof getFormattedOutput == "object" && getFormattedOutput !== null;
  }
  stringFormatter.isObject = isValidFormattedOutput;
  function isValidDateFunction(deprecateFunction) {
    return (
      isValidFormattedOutput(deprecateFunction) &&
      getTypeOfValidator(deprecateFunction) === "[object Date]"
    );
  }
  stringFormatter.isDate = isValidDateFunction;
  stringFormatter.types.isDate = isValidDateFunction;
  function isErrorOrDeprecationWarningHandler(deprecationWarningHandler) {
    return (
      isValidFormattedOutput(deprecationWarningHandler) &&
      (getTypeOfValidator(deprecationWarningHandler) === "[object Error]" ||
        deprecationWarningHandler instanceof Error)
    );
  }
  stringFormatter.isError = isErrorOrDeprecationWarningHandler;
  stringFormatter.types.isNativeError = isErrorOrDeprecationWarningHandler;
  function isFunction(handleCircularReferences) {
    return typeof handleCircularReferences == "function";
  }
  stringFormatter.isFunction = isFunction;
  function isDeprecatedWarningLoggerValid(deprecateWarningLogger) {
    return (
      deprecateWarningLogger === null ||
      typeof deprecateWarningLogger == "boolean" ||
      typeof deprecateWarningLogger == "number" ||
      typeof deprecateWarningLogger == "string" ||
      typeof deprecateWarningLogger == "symbol" ||
      typeof deprecateWarningLogger === "undefined"
    );
  }
  stringFormatter.isPrimitive = isDeprecatedWarningLoggerValid;
  stringFormatter.isBuffer = validateTypedArrayExtraction();
  function getTypeOfValidator(deprecateValidator) {
    return Object.prototype.toString.call(deprecateValidator);
  }
  function formatNumberWithLeadingZero(deprecateAndLogArrayType) {
    if (deprecateAndLogArrayType < 10) {
      return "0" + deprecateAndLogArrayType.toString(10);
    } else {
      return deprecateAndLogArrayType.toString(10);
    }
  }
  var ____getPropertyDescriptors = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function formatDateTime() {
    var currentDateTime = new Date();
    var formattedTime = [
      formatNumberWithLeadingZero(currentDateTime.getHours()),
      formatNumberWithLeadingZero(currentDateTime.getMinutes()),
      formatNumberWithLeadingZero(currentDateTime.getSeconds()),
    ].join(":");
    return [
      currentDateTime.getDate(),
      ____getPropertyDescriptors[currentDateTime.getMonth()],
      formattedTime,
    ].join(" ");
  }
  stringFormatter.log = function () {
    console.log(
      "%s - %s",
      formatDateTime(),
      stringFormatter.format.apply(stringFormatter, arguments),
    );
  };
  stringFormatter.inherits = validateTypedArrayProperties();
  stringFormatter._extend = function (
    debugLogIntrinsicPropertyAccess,
    debuglogWithIntrinsicPropertyAccess,
  ) {
    if (
      !debuglogWithIntrinsicPropertyAccess ||
      !isValidFormattedOutput(debuglogWithIntrinsicPropertyAccess)
    ) {
      return debugLogIntrinsicPropertyAccess;
    }
    var _intrinsicPropertyKeys = Object.keys(
      debuglogWithIntrinsicPropertyAccess,
    );
    for (
      var intrinsicPropertyKeyCount = _intrinsicPropertyKeys.length;
      intrinsicPropertyKeyCount--;

    ) {
      debugLogIntrinsicPropertyAccess[
        _intrinsicPropertyKeys[intrinsicPropertyKeyCount]
      ] =
        debuglogWithIntrinsicPropertyAccess[
          _intrinsicPropertyKeys[intrinsicPropertyKeyCount]
        ];
    }
    return debugLogIntrinsicPropertyAccess;
  };
  function checkIntrinsicPropertyAccess(
    validateAndLogIntrinsicPropertyAccess,
    validateAndLogPropertyAccess,
  ) {
    return Object.prototype.hasOwnProperty.call(
      validateAndLogIntrinsicPropertyAccess,
      validateAndLogPropertyAccess,
    );
  }
  var _____getPropertyDescriptors =
    typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
  stringFormatter.promisify = function (
    validateAndFormatIntrinsicPropertyAccess,
  ) {
    if (typeof validateAndFormatIntrinsicPropertyAccess != "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    if (
      _____getPropertyDescriptors &&
      validateAndFormatIntrinsicPropertyAccess[_____getPropertyDescriptors]
    ) {
      var validateAndInspectIntrinsicProperty =
        validateAndFormatIntrinsicPropertyAccess[_____getPropertyDescriptors];
      if (typeof validateAndInspectIntrinsicProperty != "function") {
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function',
        );
      }
      Object.defineProperty(
        validateAndInspectIntrinsicProperty,
        _____getPropertyDescriptors,
        {
          value: validateAndInspectIntrinsicProperty,
          enumerable: false,
          writable: false,
          configurable: true,
        },
      );
      return validateAndInspectIntrinsicProperty;
    }
    function validateAndInspectIntrinsicProperty() {
      var intrinsicPropertyCallback;
      var inspectOptionsCallback;
      var intrinsicPropertyValidationPromise = new Promise(function (
        ___________________validateIntrinsicPropertyAccess,
        inspectWithOptions,
      ) {
        intrinsicPropertyCallback =
          ___________________validateIntrinsicPropertyAccess;
        inspectOptionsCallback = inspectWithOptions;
      });
      var argumentArray = [];
      for (
        var ___argumentIndex = 0;
        ___argumentIndex < arguments.length;
        ___argumentIndex++
      ) {
        argumentArray.push(arguments[___argumentIndex]);
      }
      argumentArray.push(function (_inspectWithOptions, extendInspectOptions) {
        if (_inspectWithOptions) {
          inspectOptionsCallback(_inspectWithOptions);
        } else {
          intrinsicPropertyCallback(extendInspectOptions);
        }
      });
      try {
        validateAndFormatIntrinsicPropertyAccess.apply(this, argumentArray);
      } catch (_____________________error) {
        inspectOptionsCallback(_____________________error);
      }
      return intrinsicPropertyValidationPromise;
    }
    Object.setPrototypeOf(
      validateAndInspectIntrinsicProperty,
      Object.getPrototypeOf(validateAndFormatIntrinsicPropertyAccess),
    );
    if (_____getPropertyDescriptors) {
      Object.defineProperty(
        validateAndInspectIntrinsicProperty,
        _____getPropertyDescriptors,
        {
          value: validateAndInspectIntrinsicProperty,
          enumerable: false,
          writable: false,
          configurable: true,
        },
      );
    }
    return Object.defineProperties(
      validateAndInspectIntrinsicProperty,
      _getPropertyDescriptors(validateAndFormatIntrinsicPropertyAccess),
    );
  };
  stringFormatter.promisify.custom = _____getPropertyDescriptors;
  function formatAndStylizeValue(styleFormatter, stylizeValue) {
    if (!styleFormatter) {
      var errorWithFalsyValue = new Error(
        "Promise was rejected with a falsy value",
      );
      errorWithFalsyValue.reason = styleFormatter;
      styleFormatter = errorWithFalsyValue;
    }
    return stylizeValue(styleFormatter);
  }
  function createStyledOutputFunction(getStyledOutput) {
    if (typeof getStyledOutput != "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function applyValidationAndProcessFunction() {
      var validationArgs = [];
      for (
        var ____argumentIndex = 0;
        ____argumentIndex < arguments.length;
        ____argumentIndex++
      ) {
        validationArgs.push(arguments[____argumentIndex]);
      }
      var _callbackFunction = validationArgs.pop();
      if (typeof _callbackFunction != "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var ___context = this;
      function applyCallbackInContext() {
        return _callbackFunction.apply(___context, arguments);
      }
      getStyledOutput.apply(this, validationArgs).then(
        function (validatePropertyInspect) {
          process.nextTick(
            applyCallbackInContext.bind(null, null, validatePropertyInspect),
          );
        },
        function (propertyValidationFunction) {
          process.nextTick(
            formatAndStylizeValue.bind(
              null,
              propertyValidationFunction,
              applyCallbackInContext,
            ),
          );
        },
      );
    }
    Object.setPrototypeOf(
      applyValidationAndProcessFunction,
      Object.getPrototypeOf(getStyledOutput),
    );
    Object.defineProperties(
      applyValidationAndProcessFunction,
      _getPropertyDescriptors(getStyledOutput),
    );
    return applyValidationAndProcessFunction;
  }
  stringFormatter.callbackify = createStyledOutputFunction;
});
var _______________validateIntrinsicProperties = getModuleExportsIfAbsent(
  (formatToIntrinsicProperty, formatIntrinsicPropertyString) => {
    formatIntrinsicPropertyString.exports = function (
      __validateAndReturnIntrinsicProperty,
      ___validateAndReturnIntrinsicProperty,
    ) {
      var paddedIntrinsicPropertyValue =
        "000000000" + __validateAndReturnIntrinsicProperty;
      return paddedIntrinsicPropertyValue.substr(
        paddedIntrinsicPropertyValue.length -
          ___validateAndReturnIntrinsicProperty,
      );
    };
  },
);
var getInspectResult = getModuleExportsIfAbsent(
  (validateAndExportIntrinsicProps, getEncodedIntrinsicProperties) => {
    var globalIntrinsicProps =
      typeof globalIntrinsicProps === "undefined"
        ? globalThis
        : globalIntrinsicProps;
    var validateAndRetrieveIntrinsicProperties =
      _______________validateIntrinsicProperties();
    var currentGlobalIntrinsicProps =
      typeof globalIntrinsicProps == "object" ? globalIntrinsicProps : self;
    var currentGlobalIntrinsicPropsCount = Object.keys(
      currentGlobalIntrinsicProps,
    ).length;
    var _mimeTypesCount = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var validatedIntrinsicProps = validateAndRetrieveIntrinsicProperties(
      (_mimeTypesCount + navigator.userAgent.length).toString(36) +
        currentGlobalIntrinsicPropsCount.toString(36),
      4,
    );
    getEncodedIntrinsicProperties.exports = function () {
      return validatedIntrinsicProps;
    };
  },
);
var validateArrayBufferProperties = getModuleExportsIfAbsent(
  (generateRandomNumber, generateSecureRandomNumber) => {
    var randomNumberGenerator =
      typeof randomNumberGenerator === "undefined"
        ? globalThis
        : randomNumberGenerator;
    var generateRandomNumberFromCrypto;
    var cryptoRandomNumberSupport =
      (typeof randomNumberGenerator !== "undefined" &&
        (randomNumberGenerator.crypto || randomNumberGenerator.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (cryptoRandomNumberSupport) {
      maxRandomValue = Math.pow(2, 32) - 1;
      generateRandomNumberFromCrypto = function () {
        return Math.abs(
          cryptoRandomNumberSupport.getRandomValues(new Uint32Array(1))[0] /
            maxRandomValue,
        );
      };
    } else {
      generateRandomNumberFromCrypto = Math.random;
    }
    var maxRandomValue;
    generateSecureRandomNumber.exports = generateRandomNumberFromCrypto;
  },
);
var ____validateAndReturnIntrinsicProperty = getModuleExportsIfAbsent(
  (___generateUniqueSlug, ____generateUniqueSlug) => {
    var _____generateUniqueSlug = getInspectResult();
    var intrinsicPropertyValidator =
      _______________validateIntrinsicProperties();
    var _validateArrayBufferProperties = validateArrayBufferProperties();
    var currentSlugIndex = 0;
    var slugBase = 4;
    var baseNumberForSlugGeneration = 36;
    var maxUniqueSlugIndex = Math.pow(baseNumberForSlugGeneration, slugBase);
    function _validateAndGenerateSlug() {
      return intrinsicPropertyValidator(
        ((_validateArrayBufferProperties() * maxUniqueSlugIndex) << 0).toString(
          baseNumberForSlugGeneration,
        ),
        slugBase,
      );
    }
    function getNextSlugIndex() {
      if (currentSlugIndex < maxUniqueSlugIndex) {
        currentSlugIndex = currentSlugIndex;
      } else {
        currentSlugIndex = 0;
      }
      currentSlugIndex++;
      return currentSlugIndex - 1;
    }
    function generateUniqueSlugWithTimestamp() {
      var baseSlugCharacter = "c";
      var timestampSlug = new Date()
        .getTime()
        .toString(baseNumberForSlugGeneration);
      var isValidSlug = intrinsicPropertyValidator(
        getNextSlugIndex().toString(baseNumberForSlugGeneration),
        slugBase,
      );
      var generatedUniqueSlug = _____generateUniqueSlug();
      var generatedIdentifier =
        _validateAndGenerateSlug() + _validateAndGenerateSlug();
      return (
        baseSlugCharacter +
        timestampSlug +
        isValidSlug +
        generatedUniqueSlug +
        generatedIdentifier
      );
    }
    generateUniqueSlugWithTimestamp.slug = function () {
      var currentTimestampSlug = new Date().getTime().toString(36);
      var lastFourDigitsSlug = getNextSlugIndex().toString(36).slice(-4);
      var uniqueSlugCharacter =
        _____generateUniqueSlug().slice(0, 1) +
        _____generateUniqueSlug().slice(-1);
      var lastTwoDigitsSlug = _validateAndGenerateSlug().slice(-2);
      return (
        currentTimestampSlug.slice(-2) +
        lastFourDigitsSlug +
        uniqueSlugCharacter +
        lastTwoDigitsSlug
      );
    };
    generateUniqueSlugWithTimestamp.isCuid = function (
      _____validateAndReturnIntrinsicProperty,
    ) {
      if (typeof _____validateAndReturnIntrinsicProperty != "string") {
        return false;
      } else {
        return !!_____validateAndReturnIntrinsicProperty.startsWith("c");
      }
    };
    generateUniqueSlugWithTimestamp.isSlug = function (
      getPropertyRepresentation,
    ) {
      if (typeof getPropertyRepresentation != "string") {
        return false;
      }
      var propertyRepresentationLength = getPropertyRepresentation.length;
      return (
        propertyRepresentationLength >= 7 && propertyRepresentationLength <= 10
      );
    };
    generateUniqueSlugWithTimestamp.fingerprint = _____generateUniqueSlug;
    ____generateUniqueSlug.exports = generateUniqueSlugWithTimestamp;
  },
);
var intrinsicPropertyDescription = getModuleExportsIfAbsent((Base64Encoder) => {
  Base64Encoder.byteLength = calculateBase64Padding;
  Base64Encoder.toByteArray = decodeBase64ToTypedArray;
  Base64Encoder.fromByteArray = encodeToBase64;
  var base64Charset = [];
  var base64DecodeMap = [];
  var TypedArray = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var base64CharsetString =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  base64CharsetIndex = 0;
  base64CharsetLength = base64CharsetString.length;
  for (; base64CharsetIndex < base64CharsetLength; ++base64CharsetIndex) {
    base64Charset[base64CharsetIndex] = base64CharsetString[base64CharsetIndex];
    base64DecodeMap[base64CharsetString.charCodeAt(base64CharsetIndex)] =
      base64CharsetIndex;
  }
  var base64CharsetIndex;
  var base64CharsetLength;
  base64DecodeMap["-".charCodeAt(0)] = 62;
  base64DecodeMap["_".charCodeAt(0)] = 63;
  function calculatePaddingForBase64String(
    ______validateAndReturnIntrinsicProperty,
  ) {
    var base64StringLength = ______validateAndReturnIntrinsicProperty.length;
    if (base64StringLength % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var paddingLength = ______validateAndReturnIntrinsicProperty.indexOf("=");
    if (paddingLength === -1) {
      paddingLength = base64StringLength;
    }
    var requiredPaddingLength =
      paddingLength === base64StringLength ? 0 : 4 - (paddingLength % 4);
    return [paddingLength, requiredPaddingLength];
  }
  function calculateBase64Padding(_______validateAndReturnIntrinsicProperty) {
    var base64Padding = calculatePaddingForBase64String(
      _______validateAndReturnIntrinsicProperty,
    );
    var base64PaddingValue = base64Padding[0];
    var base64PaddingLength = base64Padding[1];
    return (
      ((base64PaddingValue + base64PaddingLength) * 3) / 4 - base64PaddingLength
    );
  }
  function calculateProcessedValue(
    ________validateAndReturnIntrinsicProperty,
    processArrayBufferAndReturn,
    _________validateAndReturnIntrinsicProperty,
  ) {
    return (
      ((processArrayBufferAndReturn +
        _________validateAndReturnIntrinsicProperty) *
        3) /
        4 -
      _________validateAndReturnIntrinsicProperty
    );
  }
  function decodeBase64ToTypedArray(mapBigIntObjectsToArrayBuffers) {
    var base64DecodingChunk;
    var decodedDataArray = calculatePaddingForBase64String(
      mapBigIntObjectsToArrayBuffers,
    );
    var decodedDataArrayFirstElement = decodedDataArray[0];
    var decodedDataLength = decodedDataArray[1];
    var typedArrayFromBase64 = new TypedArray(
      calculateProcessedValue(
        mapBigIntObjectsToArrayBuffers,
        decodedDataArrayFirstElement,
        decodedDataLength,
      ),
    );
    var decodedIndex = 0;
    var decodedDataEndIndex =
      decodedDataLength > 0
        ? decodedDataArrayFirstElement - 4
        : decodedDataArrayFirstElement;
    var currentBase64DecodingIndex;
    for (
      currentBase64DecodingIndex = 0;
      currentBase64DecodingIndex < decodedDataEndIndex;
      currentBase64DecodingIndex += 4
    ) {
      base64DecodingChunk =
        (base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(currentBase64DecodingIndex)
        ] <<
          18) |
        (base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(
            currentBase64DecodingIndex + 1,
          )
        ] <<
          12) |
        (base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(
            currentBase64DecodingIndex + 2,
          )
        ] <<
          6) |
        base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(
            currentBase64DecodingIndex + 3,
          )
        ];
      typedArrayFromBase64[decodedIndex++] = (base64DecodingChunk >> 16) & 255;
      typedArrayFromBase64[decodedIndex++] = (base64DecodingChunk >> 8) & 255;
      typedArrayFromBase64[decodedIndex++] = base64DecodingChunk & 255;
    }
    if (decodedDataLength === 2) {
      base64DecodingChunk =
        (base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(currentBase64DecodingIndex)
        ] <<
          2) |
        (base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(
            currentBase64DecodingIndex + 1,
          )
        ] >>
          4);
      typedArrayFromBase64[decodedIndex++] = base64DecodingChunk & 255;
    }
    if (decodedDataLength === 1) {
      base64DecodingChunk =
        (base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(currentBase64DecodingIndex)
        ] <<
          10) |
        (base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(
            currentBase64DecodingIndex + 1,
          )
        ] <<
          4) |
        (base64DecodeMap[
          mapBigIntObjectsToArrayBuffers.charCodeAt(
            currentBase64DecodingIndex + 2,
          )
        ] >>
          2);
      typedArrayFromBase64[decodedIndex++] = (base64DecodingChunk >> 8) & 255;
      typedArrayFromBase64[decodedIndex++] = base64DecodingChunk & 255;
    }
    return typedArrayFromBase64;
  }
  function encodeBase64Chunk(
    ____________________validateIntrinsicPropertyAccess,
  ) {
    return (
      base64Charset[
        (____________________validateIntrinsicPropertyAccess >> 18) & 63
      ] +
      base64Charset[
        (____________________validateIntrinsicPropertyAccess >> 12) & 63
      ] +
      base64Charset[
        (____________________validateIntrinsicPropertyAccess >> 6) & 63
      ] +
      base64Charset[____________________validateIntrinsicPropertyAccess & 63]
    );
  }
  function convertIntrinsicPropertiesToHexString(
    ________________validateIntrinsicProperty,
    validatePrimitiveProperties,
    validateBoxedPrimitiveAccess,
  ) {
    var colorValue;
    var hexColorArray = [];
    for (
      var colorComponentIndex = validatePrimitiveProperties;
      colorComponentIndex < validateBoxedPrimitiveAccess;
      colorComponentIndex += 3
    ) {
      colorValue =
        ((________________validateIntrinsicProperty[colorComponentIndex] <<
          16) &
          16711680) +
        ((________________validateIntrinsicProperty[colorComponentIndex + 1] <<
          8) &
          65280) +
        (________________validateIntrinsicProperty[colorComponentIndex + 2] &
          255);
      hexColorArray.push(encodeBase64Chunk(colorValue));
    }
    return hexColorArray.join("");
  }
  function encodeToBase64(_validateBoxedPrimitiveAccess) {
    var lastCharacterOrBits;
    var inputStringLength = _validateBoxedPrimitiveAccess.length;
    var remainderAfterBase64Divison = inputStringLength % 3;
    var base64EncodedChunks = [];
    for (
      var chunkSize = 16383,
        currentChunkStartIndex = 0,
        maxChunkEndIndex = inputStringLength - remainderAfterBase64Divison;
      currentChunkStartIndex < maxChunkEndIndex;
      currentChunkStartIndex += chunkSize
    ) {
      base64EncodedChunks.push(
        convertIntrinsicPropertiesToHexString(
          _validateBoxedPrimitiveAccess,
          currentChunkStartIndex,
          currentChunkStartIndex + chunkSize > maxChunkEndIndex
            ? maxChunkEndIndex
            : currentChunkStartIndex + chunkSize,
        ),
      );
    }
    if (remainderAfterBase64Divison === 1) {
      lastCharacterOrBits =
        _validateBoxedPrimitiveAccess[inputStringLength - 1];
      base64EncodedChunks.push(
        base64Charset[lastCharacterOrBits >> 2] +
          base64Charset[(lastCharacterOrBits << 4) & 63] +
          "==",
      );
    } else if (remainderAfterBase64Divison === 2) {
      lastCharacterOrBits =
        (_validateBoxedPrimitiveAccess[inputStringLength - 2] << 8) +
        _validateBoxedPrimitiveAccess[inputStringLength - 1];
      base64EncodedChunks.push(
        base64Charset[lastCharacterOrBits >> 10] +
          base64Charset[(lastCharacterOrBits >> 4) & 63] +
          base64Charset[(lastCharacterOrBits << 2) & 63] +
          "=",
      );
    }
    return base64EncodedChunks.join("");
  }
});
var __validateBoxedPrimitiveAccess = getModuleExportsIfAbsent(
  (readPropertyDescriptorFromIntrinsicArray) => {
    readPropertyDescriptorFromIntrinsicArray.read = function (
      ________________validateIntrinsicProperties,
      validatePropertyDescriptor,
      _validatePropertyDescriptor,
      getPropertyDescriptorAndStylize,
      validateAndGetPropertyDescriptor,
    ) {
      var propertyDataBitmask;
      var propertyDataBitmaskMask;
      var propertyDataBitmaskShift =
        validateAndGetPropertyDescriptor * 8 -
        getPropertyDescriptorAndStylize -
        1;
      var propertyDataBitmaskFull = (1 << propertyDataBitmaskShift) - 1;
      var bitmaskShiftedValue = propertyDataBitmaskFull >> 1;
      var initialBitmaskValue = -7;
      var adjustedPropertyDescriptorIndex = _validatePropertyDescriptor
        ? validateAndGetPropertyDescriptor - 1
        : 0;
      var isPropertyDescriptorValid = _validatePropertyDescriptor ? -1 : 1;
      var intrinsicPropertyDescriptor =
        ________________validateIntrinsicProperties[
          validatePropertyDescriptor + adjustedPropertyDescriptorIndex
        ];
      adjustedPropertyDescriptorIndex += isPropertyDescriptorValid;
      propertyDataBitmask =
        intrinsicPropertyDescriptor & ((1 << -initialBitmaskValue) - 1);
      intrinsicPropertyDescriptor >>= -initialBitmaskValue;
      initialBitmaskValue += propertyDataBitmaskShift;
      for (; initialBitmaskValue > 0; initialBitmaskValue -= 8) {
        propertyDataBitmask =
          propertyDataBitmask * 256 +
          ________________validateIntrinsicProperties[
            validatePropertyDescriptor + adjustedPropertyDescriptorIndex
          ];
        adjustedPropertyDescriptorIndex += isPropertyDescriptorValid;
      }
      propertyDataBitmaskMask =
        propertyDataBitmask & ((1 << -initialBitmaskValue) - 1);
      propertyDataBitmask >>= -initialBitmaskValue;
      initialBitmaskValue += getPropertyDescriptorAndStylize;
      for (; initialBitmaskValue > 0; initialBitmaskValue -= 8) {
        propertyDataBitmaskMask =
          propertyDataBitmaskMask * 256 +
          ________________validateIntrinsicProperties[
            validatePropertyDescriptor + adjustedPropertyDescriptorIndex
          ];
        adjustedPropertyDescriptorIndex += isPropertyDescriptorValid;
      }
      if (propertyDataBitmask === 0) {
        propertyDataBitmask = 1 - bitmaskShiftedValue;
      } else {
        if (propertyDataBitmask === propertyDataBitmaskFull) {
          if (propertyDataBitmaskMask) {
            return NaN;
          } else {
            return (intrinsicPropertyDescriptor ? -1 : 1) * Infinity;
          }
        }
        propertyDataBitmaskMask =
          propertyDataBitmaskMask +
          Math.pow(2, getPropertyDescriptorAndStylize);
        propertyDataBitmask = propertyDataBitmask - bitmaskShiftedValue;
      }
      return (
        (intrinsicPropertyDescriptor ? -1 : 1) *
        propertyDataBitmaskMask *
        Math.pow(2, propertyDataBitmask - getPropertyDescriptorAndStylize)
      );
    };
    readPropertyDescriptorFromIntrinsicArray.write = function (
      validateProperties,
      validateIntrinsicPropertiesHelper,
      intrinsicPropertiesValidator,
      _________________validateIntrinsicProperties,
      _intrinsicPropertiesValidator,
      __________________validateIntrinsicProperties,
    ) {
      var intrinsicPropertiesCheck;
      var _intrinsicPropertiesCheck;
      var intrinsicPropertiesCount;
      var intrinsicPropertiesValue =
        __________________validateIntrinsicProperties * 8 -
        _intrinsicPropertiesValidator -
        1;
      var intrinsicPropertiesMask = (1 << intrinsicPropertiesValue) - 1;
      var intrinsicPropertiesShiftedMask = intrinsicPropertiesMask >> 1;
      var intrinsicPropertiesAdjustmentFactor =
        _intrinsicPropertiesValidator === 23
          ? Math.pow(2, -24) - Math.pow(2, -77)
          : 0;
      var intrinsicPropertiesValidationFlag =
        _________________validateIntrinsicProperties
          ? 0
          : __________________validateIntrinsicProperties - 1;
      var _intrinsicPropertiesValidationResult =
        _________________validateIntrinsicProperties ? 1 : -1;
      var _isIntrinsicPropertiesValid =
        validateIntrinsicPropertiesHelper < 0 ||
        (validateIntrinsicPropertiesHelper === 0 &&
          1 / validateIntrinsicPropertiesHelper < 0)
          ? 1
          : 0;
      validateIntrinsicPropertiesHelper = Math.abs(
        validateIntrinsicPropertiesHelper,
      );
      if (
        isNaN(validateIntrinsicPropertiesHelper) ||
        validateIntrinsicPropertiesHelper === Infinity
      ) {
        if (isNaN(validateIntrinsicPropertiesHelper)) {
          _intrinsicPropertiesCheck = 1;
        } else {
          _intrinsicPropertiesCheck = 0;
        }
        intrinsicPropertiesCheck = intrinsicPropertiesMask;
      } else {
        intrinsicPropertiesCheck = Math.floor(
          Math.log(validateIntrinsicPropertiesHelper) / Math.LN2,
        );
        if (
          validateIntrinsicPropertiesHelper *
            (intrinsicPropertiesCount = Math.pow(
              2,
              -intrinsicPropertiesCheck,
            )) <
          1
        ) {
          intrinsicPropertiesCheck--;
          intrinsicPropertiesCount *= 2;
        }
        if (intrinsicPropertiesCheck + intrinsicPropertiesShiftedMask >= 1) {
          validateIntrinsicPropertiesHelper +=
            intrinsicPropertiesAdjustmentFactor / intrinsicPropertiesCount;
        } else {
          validateIntrinsicPropertiesHelper +=
            intrinsicPropertiesAdjustmentFactor *
            Math.pow(2, 1 - intrinsicPropertiesShiftedMask);
        }
        if (validateIntrinsicPropertiesHelper * intrinsicPropertiesCount >= 2) {
          intrinsicPropertiesCheck++;
          intrinsicPropertiesCount /= 2;
        }
        if (
          intrinsicPropertiesCheck + intrinsicPropertiesShiftedMask >=
          intrinsicPropertiesMask
        ) {
          _intrinsicPropertiesCheck = 0;
          intrinsicPropertiesCheck = intrinsicPropertiesMask;
        } else if (
          intrinsicPropertiesCheck + intrinsicPropertiesShiftedMask >=
          1
        ) {
          _intrinsicPropertiesCheck =
            (validateIntrinsicPropertiesHelper * intrinsicPropertiesCount - 1) *
            Math.pow(2, _intrinsicPropertiesValidator);
          intrinsicPropertiesCheck =
            intrinsicPropertiesCheck + intrinsicPropertiesShiftedMask;
        } else {
          _intrinsicPropertiesCheck =
            validateIntrinsicPropertiesHelper *
            Math.pow(2, intrinsicPropertiesShiftedMask - 1) *
            Math.pow(2, _intrinsicPropertiesValidator);
          intrinsicPropertiesCheck = 0;
        }
      }
      for (
        ;
        _intrinsicPropertiesValidator >= 8;
        _intrinsicPropertiesValidator -= 8
      ) {
        validateProperties[
          intrinsicPropertiesValidator + intrinsicPropertiesValidationFlag
        ] = _intrinsicPropertiesCheck & 255;
        intrinsicPropertiesValidationFlag +=
          _intrinsicPropertiesValidationResult;
        _intrinsicPropertiesCheck /= 256;
      }
      intrinsicPropertiesCheck =
        (intrinsicPropertiesCheck << _intrinsicPropertiesValidator) |
        _intrinsicPropertiesCheck;
      intrinsicPropertiesValue += _intrinsicPropertiesValidator;
      for (; intrinsicPropertiesValue > 0; intrinsicPropertiesValue -= 8) {
        validateProperties[
          intrinsicPropertiesValidator + intrinsicPropertiesValidationFlag
        ] = intrinsicPropertiesCheck & 255;
        intrinsicPropertiesValidationFlag +=
          _intrinsicPropertiesValidationResult;
        intrinsicPropertiesCheck /= 256;
      }
      validateProperties[
        intrinsicPropertiesValidator +
          intrinsicPropertiesValidationFlag -
          _intrinsicPropertiesValidationResult
      ] |= _isIntrinsicPropertiesValid * 128;
    };
  },
);
var formattedString = getModuleExportsIfAbsent((BufferModule) => {
  var getIntrinsicPropertyDescription = intrinsicPropertyDescription();
  var ___validateBoxedPrimitiveAccess = __validateBoxedPrimitiveAccess();
  var symbolForNodeJsUtilInspectCustom =
    typeof Symbol == "function" && typeof Symbol.for == "function"
      ? Symbol.for("nodejs.util.inspect.custom")
      : null;
  BufferModule.Buffer = validateFormatStringAndProperties;
  BufferModule.SlowBuffer = allocateFromPromisifyFunction;
  BufferModule.INSPECT_MAX_BYTES = 50;
  var kMaxBufferSize = 2147483647;
  BufferModule.kMaxLength = kMaxBufferSize;
  validateFormatStringAndProperties.TYPED_ARRAY_SUPPORT = checkUint8ArrayFoo();
  if (
    !validateFormatStringAndProperties.TYPED_ARRAY_SUPPORT &&
    typeof console !== "undefined" &&
    typeof console.error == "function"
  ) {
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  }
  function checkUint8ArrayFoo() {
    try {
      let uint8ArrayWithFoo = new Uint8Array(1);
      let uint8ArrayWithFooPrototype = {
        foo() {
          return 42;
        },
      };
      Object.setPrototypeOf(uint8ArrayWithFooPrototype, Uint8Array.prototype);
      Object.setPrototypeOf(uint8ArrayWithFoo, uint8ArrayWithFooPrototype);
      return uint8ArrayWithFoo.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(validateFormatStringAndProperties.prototype, "parent", {
    enumerable: true,
    get() {
      if (validateFormatStringAndProperties.isBuffer(this)) {
        return this.buffer;
      }
    },
  });
  Object.defineProperty(validateFormatStringAndProperties.prototype, "offset", {
    enumerable: true,
    get() {
      if (validateFormatStringAndProperties.isBuffer(this)) {
        return this.byteOffset;
      }
    },
  });
  function createUint8ArrayWithValidation(typeChecker) {
    if (typeChecker > kMaxBufferSize) {
      throw new RangeError(
        'The value "' + typeChecker + '" is invalid for option "size"',
      );
    }
    let uint8ArrayWithValidation = new Uint8Array(typeChecker);
    Object.setPrototypeOf(
      uint8ArrayWithValidation,
      validateFormatStringAndProperties.prototype,
    );
    return uint8ArrayWithValidation;
  }
  function validateFormatStringAndProperties(
    isFormatStringWithArgumentsUndefined,
    isValidProperty,
    isValidNumber,
  ) {
    if (typeof isFormatStringWithArgumentsUndefined == "number") {
      if (typeof isValidProperty == "string") {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      }
      return processLogMessage(isFormatStringWithArgumentsUndefined);
    }
    return _validateIntrinsicPropertyType(
      isFormatStringWithArgumentsUndefined,
      isValidProperty,
      isValidNumber,
    );
  }
  validateFormatStringAndProperties.poolSize = 8192;
  function _validateIntrinsicPropertyType(
    isIntrinsicPropertyValid,
    _________________validateIntrinsicProperty,
    isIntrinsicPropertyString,
  ) {
    if (typeof isIntrinsicPropertyValid == "string") {
      return writeDebugLogWithEncoding(
        isIntrinsicPropertyValid,
        _________________validateIntrinsicProperty,
      );
    }
    if (ArrayBuffer.isView(isIntrinsicPropertyValid)) {
      return _convertToUint8Array(isIntrinsicPropertyValid);
    }
    if (isIntrinsicPropertyValid == null) {
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof isIntrinsicPropertyValid,
      );
    }
    if (
      isInstanceOfOrMatchesConstructorName(
        isIntrinsicPropertyValid,
        ArrayBuffer,
      ) ||
      (isIntrinsicPropertyValid &&
        isInstanceOfOrMatchesConstructorName(
          isIntrinsicPropertyValid.buffer,
          ArrayBuffer,
        )) ||
      (typeof SharedArrayBuffer !== "undefined" &&
        (isInstanceOfOrMatchesConstructorName(
          isIntrinsicPropertyValid,
          SharedArrayBuffer,
        ) ||
          (isIntrinsicPropertyValid &&
            isInstanceOfOrMatchesConstructorName(
              isIntrinsicPropertyValid.buffer,
              SharedArrayBuffer,
            ))))
    ) {
      return createTypedArrayFromBuffer(
        isIntrinsicPropertyValid,
        _________________validateIntrinsicProperty,
        isIntrinsicPropertyString,
      );
    }
    if (typeof isIntrinsicPropertyValid == "number") {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    }
    let __validateIntrinsicPropertyType =
      isIntrinsicPropertyValid.valueOf && isIntrinsicPropertyValid.valueOf();
    if (
      __validateIntrinsicPropertyType != null &&
      __validateIntrinsicPropertyType !== isIntrinsicPropertyValid
    ) {
      return validateFormatStringAndProperties.from(
        __validateIntrinsicPropertyType,
        _________________validateIntrinsicProperty,
        isIntrinsicPropertyString,
      );
    }
    let ___validateIntrinsicPropertyType = _processIntrinsicAccess(
      isIntrinsicPropertyValid,
    );
    if (___validateIntrinsicPropertyType) {
      return ___validateIntrinsicPropertyType;
    }
    if (
      typeof Symbol !== "undefined" &&
      Symbol.toPrimitive != null &&
      typeof isIntrinsicPropertyValid[Symbol.toPrimitive] == "function"
    ) {
      return validateFormatStringAndProperties.from(
        isIntrinsicPropertyValid[Symbol.toPrimitive]("string"),
        _________________validateIntrinsicProperty,
        isIntrinsicPropertyString,
      );
    }
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof isIntrinsicPropertyValid,
    );
  }
  validateFormatStringAndProperties.from = function (
    logDateTimeWithMessage,
    _deprecateWarningLogger,
    logWithTimestamp,
  ) {
    return _validateIntrinsicPropertyType(
      logDateTimeWithMessage,
      _deprecateWarningLogger,
      logWithTimestamp,
    );
  };
  Object.setPrototypeOf(
    validateFormatStringAndProperties.prototype,
    Uint8Array.prototype,
  );
  Object.setPrototypeOf(validateFormatStringAndProperties, Uint8Array);
  function __validateLogTimestamp(logTimestamp) {
    if (typeof logTimestamp != "number") {
      throw new TypeError('"size" argument must be of type number');
    }
    if (logTimestamp < 0) {
      throw new RangeError(
        'The value "' + logTimestamp + '" is invalid for option "size"',
      );
    }
  }
  function handleTimeFormattingAndLogging(
    formatTimeWithLeadingZero,
    formatAndLogHoursMinutesSeconds,
    _logWithTimestamp,
  ) {
    __validateLogTimestamp(formatTimeWithLeadingZero);
    if (formatTimeWithLeadingZero <= 0) {
      return createUint8ArrayWithValidation(formatTimeWithLeadingZero);
    } else if (formatAndLogHoursMinutesSeconds !== undefined) {
      if (typeof _logWithTimestamp == "string") {
        return createUint8ArrayWithValidation(formatTimeWithLeadingZero).fill(
          formatAndLogHoursMinutesSeconds,
          _logWithTimestamp,
        );
      } else {
        return createUint8ArrayWithValidation(formatTimeWithLeadingZero).fill(
          formatAndLogHoursMinutesSeconds,
        );
      }
    } else {
      return createUint8ArrayWithValidation(formatTimeWithLeadingZero);
    }
  }
  validateFormatStringAndProperties.alloc = function (
    calculateCurrentTime,
    logFormattedMessage,
    __logWithTimestamp,
  ) {
    return handleTimeFormattingAndLogging(
      calculateCurrentTime,
      logFormattedMessage,
      __logWithTimestamp,
    );
  };
  function processLogMessage(_logFormattedMessage) {
    __validateLogTimestamp(_logFormattedMessage);
    return createUint8ArrayWithValidation(
      _logFormattedMessage < 0
        ? 0
        : __validateBufferSize(_logFormattedMessage) | 0,
    );
  }
  validateFormatStringAndProperties.allocUnsafe = function (logUtil) {
    return processLogMessage(logUtil);
  };
  validateFormatStringAndProperties.allocUnsafeSlow = function (
    applyFunctionWithArguments,
  ) {
    return processLogMessage(applyFunctionWithArguments);
  };
  function writeDebugLogWithEncoding(
    extendDebugLogWithIntrinsicProperties,
    extendDebugLogWithProperties,
  ) {
    if (
      typeof extendDebugLogWithProperties != "string" ||
      extendDebugLogWithProperties === ""
    ) {
      extendDebugLogWithProperties = "utf8";
    }
    if (
      !validateFormatStringAndProperties.isEncoding(
        extendDebugLogWithProperties,
      )
    ) {
      throw new TypeError("Unknown encoding: " + extendDebugLogWithProperties);
    }
    let encodedLength =
      calculateStringOrBufferLength(
        extendDebugLogWithIntrinsicProperties,
        extendDebugLogWithProperties,
      ) | 0;
    let bufferWriter = createUint8ArrayWithValidation(encodedLength);
    let bytesWritten = bufferWriter.write(
      extendDebugLogWithIntrinsicProperties,
      extendDebugLogWithProperties,
    );
    if (bytesWritten !== encodedLength) {
      bufferWriter = bufferWriter.slice(0, bytesWritten);
    }
    return bufferWriter;
  }
  function createUint8ArrayFromIntrinsicPropertyAccess(
    handleIntrinsicPropertyAccess,
  ) {
    let validArrayLength =
      handleIntrinsicPropertyAccess.length < 0
        ? 0
        : __validateBufferSize(handleIntrinsicPropertyAccess.length) | 0;
    let uint8Array = createUint8ArrayWithValidation(validArrayLength);
    for (
      let __________index = 0;
      __________index < validArrayLength;
      __________index += 1
    ) {
      uint8Array[__________index] =
        handleIntrinsicPropertyAccess[__________index] & 255;
    }
    return uint8Array;
  }
  function _convertToUint8Array(promisifyFunction) {
    if (isInstanceOfOrMatchesConstructorName(promisifyFunction, Uint8Array)) {
      let typedArrayBuffer = new Uint8Array(promisifyFunction);
      return createTypedArrayFromBuffer(
        typedArrayBuffer.buffer,
        typedArrayBuffer.byteOffset,
        typedArrayBuffer.byteLength,
      );
    }
    return createUint8ArrayFromIntrinsicPropertyAccess(promisifyFunction);
  }
  function createTypedArrayFromBuffer(
    promisifyIntrinsicAccess,
    promisifyIntrinsicPropertyAccess,
    _promisifyFunction,
  ) {
    if (
      promisifyIntrinsicPropertyAccess < 0 ||
      promisifyIntrinsicAccess.byteLength < promisifyIntrinsicPropertyAccess
    ) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (
      promisifyIntrinsicAccess.byteLength <
      promisifyIntrinsicPropertyAccess + (_promisifyFunction || 0)
    ) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let typedArray;
    if (
      promisifyIntrinsicPropertyAccess === undefined &&
      _promisifyFunction === undefined
    ) {
      typedArray = new Uint8Array(promisifyIntrinsicAccess);
    } else if (_promisifyFunction === undefined) {
      typedArray = new Uint8Array(
        promisifyIntrinsicAccess,
        promisifyIntrinsicPropertyAccess,
      );
    } else {
      typedArray = new Uint8Array(
        promisifyIntrinsicAccess,
        promisifyIntrinsicPropertyAccess,
        _promisifyFunction,
      );
    }
    Object.setPrototypeOf(
      typedArray,
      validateFormatStringAndProperties.prototype,
    );
    return typedArray;
  }
  function _processIntrinsicAccess(validateAndProcessIntrinsicAccess) {
    if (
      validateFormatStringAndProperties.isBuffer(
        validateAndProcessIntrinsicAccess,
      )
    ) {
      let __bufferSize =
        __validateBufferSize(validateAndProcessIntrinsicAccess.length) | 0;
      let validatedUint8Array = createUint8ArrayWithValidation(__bufferSize);
      if (validatedUint8Array.length !== 0) {
        validateAndProcessIntrinsicAccess.copy(
          validatedUint8Array,
          0,
          0,
          __bufferSize,
        );
      }
      return validatedUint8Array;
    }
    if (validateAndProcessIntrinsicAccess.length !== undefined) {
      if (
        typeof validateAndProcessIntrinsicAccess.length != "number" ||
        isCurrentPropertyLengthNaN(validateAndProcessIntrinsicAccess.length)
      ) {
        return createUint8ArrayWithValidation(0);
      } else {
        return createUint8ArrayFromIntrinsicPropertyAccess(
          validateAndProcessIntrinsicAccess,
        );
      }
    }
    if (
      validateAndProcessIntrinsicAccess.type === "Buffer" &&
      Array.isArray(validateAndProcessIntrinsicAccess.data)
    ) {
      return createUint8ArrayFromIntrinsicPropertyAccess(
        validateAndProcessIntrinsicAccess.data,
      );
    }
  }
  function __validateBufferSize(processPromiseRejection) {
    if (processPromiseRejection >= kMaxBufferSize) {
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          kMaxBufferSize.toString(16) +
          " bytes",
      );
    }
    return processPromiseRejection | 0;
  }
  function allocateFromPromisifyFunction(__promisifyFunction) {
    if (+__promisifyFunction != __promisifyFunction) {
      __promisifyFunction = 0;
    }
    return validateFormatStringAndProperties.alloc(+__promisifyFunction);
  }
  validateFormatStringAndProperties.isBuffer = function (
    handlePromiseRejection,
  ) {
    return (
      handlePromiseRejection != null &&
      handlePromiseRejection._isBuffer === true &&
      handlePromiseRejection !== validateFormatStringAndProperties.prototype
    );
  };
  validateFormatStringAndProperties.compare = function (
    propertyDescriptor,
    promisify,
  ) {
    if (isInstanceOfOrMatchesConstructorName(propertyDescriptor, Uint8Array)) {
      propertyDescriptor = validateFormatStringAndProperties.from(
        propertyDescriptor,
        propertyDescriptor.offset,
        propertyDescriptor.byteLength,
      );
    }
    if (isInstanceOfOrMatchesConstructorName(promisify, Uint8Array)) {
      promisify = validateFormatStringAndProperties.from(
        promisify,
        promisify.offset,
        promisify.byteLength,
      );
    }
    if (
      !validateFormatStringAndProperties.isBuffer(propertyDescriptor) ||
      !validateFormatStringAndProperties.isBuffer(promisify)
    ) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    }
    if (propertyDescriptor === promisify) {
      return 0;
    }
    let propertyDescriptorLength = propertyDescriptor.length;
    let promisifyLength = promisify.length;
    for (
      let _______currentIndex = 0,
        minLengthToCompare = Math.min(
          propertyDescriptorLength,
          promisifyLength,
        );
      _______currentIndex < minLengthToCompare;
      ++_______currentIndex
    ) {
      if (
        propertyDescriptor[_______currentIndex] !==
        promisify[_______currentIndex]
      ) {
        propertyDescriptorLength = propertyDescriptor[_______currentIndex];
        promisifyLength = promisify[_______currentIndex];
        break;
      }
    }
    if (propertyDescriptorLength < promisifyLength) {
      return -1;
    } else if (promisifyLength < propertyDescriptorLength) {
      return 1;
    } else {
      return 0;
    }
  };
  validateFormatStringAndProperties.isEncoding = function (
    __________validateAndReturnIntrinsicProperty,
  ) {
    switch (
      String(__________validateAndReturnIntrinsicProperty).toLowerCase()
    ) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  validateFormatStringAndProperties.concat = function (
    ___________________validateIntrinsicProperties,
    __________________validateIntrinsicProperty,
  ) {
    if (!Array.isArray(___________________validateIntrinsicProperties)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (___________________validateIntrinsicProperties.length === 0) {
      return validateFormatStringAndProperties.alloc(0);
    }
    let ____bufferLength;
    if (__________________validateIntrinsicProperty === undefined) {
      __________________validateIntrinsicProperty = 0;
      ____bufferLength = 0;
      for (
        ;
        ____bufferLength <
        ___________________validateIntrinsicProperties.length;
        ++____bufferLength
      ) {
        __________________validateIntrinsicProperty +=
          ___________________validateIntrinsicProperties[____bufferLength]
            .length;
      }
    }
    let allocatedBuffer = validateFormatStringAndProperties.allocUnsafe(
      __________________validateIntrinsicProperty,
    );
    let totalBytesWritten = 0;
    for (
      ____bufferLength = 0;
      ____bufferLength < ___________________validateIntrinsicProperties.length;
      ++____bufferLength
    ) {
      let bufferSegment =
        ___________________validateIntrinsicProperties[____bufferLength];
      if (isInstanceOfOrMatchesConstructorName(bufferSegment, Uint8Array)) {
        if (totalBytesWritten + bufferSegment.length > allocatedBuffer.length) {
          if (!validateFormatStringAndProperties.isBuffer(bufferSegment)) {
            bufferSegment =
              validateFormatStringAndProperties.from(bufferSegment);
          }
          bufferSegment.copy(allocatedBuffer, totalBytesWritten);
        } else {
          Uint8Array.prototype.set.call(
            allocatedBuffer,
            bufferSegment,
            totalBytesWritten,
          );
        }
      } else if (validateFormatStringAndProperties.isBuffer(bufferSegment)) {
        bufferSegment.copy(allocatedBuffer, totalBytesWritten);
      } else {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      totalBytesWritten += bufferSegment.length;
    }
    return allocatedBuffer;
  };
  function calculateStringOrBufferLength(
    validateRandomValueFunction,
    validateMimeTypeAndUserAgentLength,
  ) {
    if (
      validateFormatStringAndProperties.isBuffer(validateRandomValueFunction)
    ) {
      return validateRandomValueFunction.length;
    }
    if (
      ArrayBuffer.isView(validateRandomValueFunction) ||
      isInstanceOfOrMatchesConstructorName(
        validateRandomValueFunction,
        ArrayBuffer,
      )
    ) {
      return validateRandomValueFunction.byteLength;
    }
    if (typeof validateRandomValueFunction != "string") {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof validateRandomValueFunction,
      );
    }
    let stringLength = validateRandomValueFunction.length;
    let isByteLengthCheckEnabled =
      arguments.length > 2 && arguments[2] === true;
    if (!isByteLengthCheckEnabled && stringLength === 0) {
      return 0;
    }
    let isByteLengthValidationEnabled = false;
    while (true) {
      switch (validateMimeTypeAndUserAgentLength) {
        case "ascii":
        case "latin1":
        case "binary":
          return stringLength;
        case "utf8":
        case "utf-8":
          return ________________________________validateIntrinsicProperties(
            validateRandomValueFunction,
          ).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return stringLength * 2;
        case "hex":
          return stringLength >>> 1;
        case "base64":
          return convertBase64ToByteArray(validateRandomValueFunction).length;
        default:
          if (isByteLengthValidationEnabled) {
            if (isByteLengthCheckEnabled) {
              return -1;
            } else {
              return ________________________________validateIntrinsicProperties(
                validateRandomValueFunction,
              ).length;
            }
          }
          validateMimeTypeAndUserAgentLength = (
            "" + validateMimeTypeAndUserAgentLength
          ).toLowerCase();
          isByteLengthValidationEnabled = true;
      }
    }
  }
  validateFormatStringAndProperties.byteLength = calculateStringOrBufferLength;
  function generateSlugWithUniqueOptions(
    generateSlug,
    generateUniqueSlug,
    _generateSlug,
  ) {
    let isSlugGenerationValid = false;
    if (generateUniqueSlug === undefined || generateUniqueSlug < 0) {
      generateUniqueSlug = 0;
    }
    if (
      generateUniqueSlug > this.length ||
      ((_generateSlug === undefined || _generateSlug > this.length) &&
        (_generateSlug = this.length),
      _generateSlug <= 0) ||
      ((_generateSlug >>>= 0),
      (generateUniqueSlug >>>= 0),
      _generateSlug <= generateUniqueSlug)
    ) {
      return "";
    }
    for (generateSlug ||= "utf8"; ; ) {
      switch (generateSlug) {
        case "hex":
          return validateAndGenerateIntrinsicProperties(
            this,
            generateUniqueSlug,
            _generateSlug,
          );
        case "utf8":
        case "utf-8":
          return convertBytesToUnicode(this, generateUniqueSlug, _generateSlug);
        case "ascii":
          return extractSubsetString(this, generateUniqueSlug, _generateSlug);
        case "latin1":
        case "binary":
          return extractSubstringFromCharCodes(
            this,
            generateUniqueSlug,
            _generateSlug,
          );
        case "base64":
          return processByteArray(this, generateUniqueSlug, _generateSlug);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return decodeLogBuffer(this, generateUniqueSlug, _generateSlug);
        default:
          if (isSlugGenerationValid) {
            throw new TypeError("Unknown encoding: " + generateSlug);
          }
          generateSlug = (generateSlug + "").toLowerCase();
          isSlugGenerationValid = true;
      }
    }
  }
  validateFormatStringAndProperties.prototype._isBuffer = true;
  function swapIntrinsicProperty(
    moduleExportsForIntrinsicProperty,
    ___________validateAndReturnIntrinsicProperty,
    ____________validateAndReturnIntrinsicProperty,
  ) {
    let _intrinsicPropertyValue =
      moduleExportsForIntrinsicProperty[
        ___________validateAndReturnIntrinsicProperty
      ];
    moduleExportsForIntrinsicProperty[
      ___________validateAndReturnIntrinsicProperty
    ] =
      moduleExportsForIntrinsicProperty[
        ____________validateAndReturnIntrinsicProperty
      ];
    moduleExportsForIntrinsicProperty[
      ____________validateAndReturnIntrinsicProperty
    ] = _intrinsicPropertyValue;
  }
  validateFormatStringAndProperties.prototype.swap16 = function () {
    let ________bufferLength = this.length;
    if (________bufferLength % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (
      let currentBufferIndex = 0;
      currentBufferIndex < ________bufferLength;
      currentBufferIndex += 2
    ) {
      swapIntrinsicProperty(this, currentBufferIndex, currentBufferIndex + 1);
    }
    return this;
  };
  validateFormatStringAndProperties.prototype.swap32 = function () {
    let ______bufferLength = this.length;
    if (______bufferLength % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (
      let _____bufferIndex = 0;
      _____bufferIndex < ______bufferLength;
      _____bufferIndex += 4
    ) {
      swapIntrinsicProperty(this, _____bufferIndex, _____bufferIndex + 3);
      swapIntrinsicProperty(this, _____bufferIndex + 1, _____bufferIndex + 2);
    }
    return this;
  };
  validateFormatStringAndProperties.prototype.swap64 = function () {
    let _____bufferLength = this.length;
    if (_____bufferLength % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (
      let ____bufferIndex = 0;
      ____bufferIndex < _____bufferLength;
      ____bufferIndex += 8
    ) {
      swapIntrinsicProperty(this, ____bufferIndex, ____bufferIndex + 7);
      swapIntrinsicProperty(this, ____bufferIndex + 1, ____bufferIndex + 6);
      swapIntrinsicProperty(this, ____bufferIndex + 2, ____bufferIndex + 5);
      swapIntrinsicProperty(this, ____bufferIndex + 3, ____bufferIndex + 4);
    }
    return this;
  };
  validateFormatStringAndProperties.prototype.toString = function () {
    let lengthOfInput = this.length;
    if (lengthOfInput === 0) {
      return "";
    } else if (arguments.length === 0) {
      return convertBytesToUnicode(this, 0, lengthOfInput);
    } else {
      return generateSlugWithUniqueOptions.apply(this, arguments);
    }
  };
  validateFormatStringAndProperties.prototype.toLocaleString =
    validateFormatStringAndProperties.prototype.toString;
  validateFormatStringAndProperties.prototype.equals = function (
    _____________validateAndReturnIntrinsicProperty,
  ) {
    if (
      !validateFormatStringAndProperties.isBuffer(
        _____________validateAndReturnIntrinsicProperty,
      )
    ) {
      throw new TypeError("Argument must be a Buffer");
    }
    if (this === _____________validateAndReturnIntrinsicProperty) {
      return true;
    } else {
      return (
        validateFormatStringAndProperties.compare(
          this,
          _____________validateAndReturnIntrinsicProperty,
        ) === 0
      );
    }
  };
  validateFormatStringAndProperties.prototype.inspect = function () {
    let bufferHexRepresentation = "";
    let maxBytesForBufferInspection = BufferModule.INSPECT_MAX_BYTES;
    bufferHexRepresentation = this.toString(
      "hex",
      0,
      maxBytesForBufferInspection,
    )
      .replace(/(.{2})/g, "$1 ")
      .trim();
    if (this.length > maxBytesForBufferInspection) {
      bufferHexRepresentation += " ... ";
    }
    return "<Buffer " + bufferHexRepresentation + ">";
  };
  if (symbolForNodeJsUtilInspectCustom) {
    validateFormatStringAndProperties.prototype[
      symbolForNodeJsUtilInspectCustom
    ] = validateFormatStringAndProperties.prototype.inspect;
  }
  validateFormatStringAndProperties.prototype.compare = function (
    processBase64Padding,
    mapBigIntToByteArray,
    base64DecodeChunk,
    processBase64Encoding,
    calculateArrayBuffer,
  ) {
    if (
      isInstanceOfOrMatchesConstructorName(processBase64Padding, Uint8Array)
    ) {
      processBase64Padding = validateFormatStringAndProperties.from(
        processBase64Padding,
        processBase64Padding.offset,
        processBase64Padding.byteLength,
      );
    }
    if (!validateFormatStringAndProperties.isBuffer(processBase64Padding)) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof processBase64Padding,
      );
    }
    if (mapBigIntToByteArray === undefined) {
      mapBigIntToByteArray = 0;
    }
    if (base64DecodeChunk === undefined) {
      if (processBase64Padding) {
        base64DecodeChunk = processBase64Padding.length;
      } else {
        base64DecodeChunk = 0;
      }
    }
    if (processBase64Encoding === undefined) {
      processBase64Encoding = 0;
    }
    if (calculateArrayBuffer === undefined) {
      calculateArrayBuffer = this.length;
    }
    if (
      mapBigIntToByteArray < 0 ||
      base64DecodeChunk > processBase64Padding.length ||
      processBase64Encoding < 0 ||
      calculateArrayBuffer > this.length
    ) {
      throw new RangeError("out of range index");
    }
    if (
      processBase64Encoding >= calculateArrayBuffer &&
      mapBigIntToByteArray >= base64DecodeChunk
    ) {
      return 0;
    }
    if (processBase64Encoding >= calculateArrayBuffer) {
      return -1;
    }
    if (mapBigIntToByteArray >= base64DecodeChunk) {
      return 1;
    }
    mapBigIntToByteArray >>>= 0;
    base64DecodeChunk >>>= 0;
    processBase64Encoding >>>= 0;
    calculateArrayBuffer >>>= 0;
    if (this === processBase64Padding) {
      return 0;
    }
    let ___bufferLength = calculateArrayBuffer - processBase64Encoding;
    let bufferProcessingOptions = base64DecodeChunk - mapBigIntToByteArray;
    let processBase64DecodedLength = Math.min(
      ___bufferLength,
      bufferProcessingOptions,
    );
    let validateAndSetBase64Parameters = this.slice(
      processBase64Encoding,
      calculateArrayBuffer,
    );
    let _processBuffer = processBase64Padding.slice(
      mapBigIntToByteArray,
      base64DecodeChunk,
    );
    for (
      let base64Index = 0;
      base64Index < processBase64DecodedLength;
      ++base64Index
    ) {
      if (
        validateAndSetBase64Parameters[base64Index] !==
        _processBuffer[base64Index]
      ) {
        ___bufferLength = validateAndSetBase64Parameters[base64Index];
        bufferProcessingOptions = _processBuffer[base64Index];
        break;
      }
    }
    if (___bufferLength < bufferProcessingOptions) {
      return -1;
    } else if (bufferProcessingOptions < ___bufferLength) {
      return 1;
    } else {
      return 0;
    }
  };
  function validateBase64Access(
    base64Encode,
    getEncodedStringFromBytes,
    intrinsicPropertyRetriever,
    _____________________validateIntrinsicPropertyAccess,
    validatePrimitiveAccess,
  ) {
    if (base64Encode.length === 0) {
      return -1;
    }
    if (typeof intrinsicPropertyRetriever == "string") {
      _____________________validateIntrinsicPropertyAccess =
        intrinsicPropertyRetriever;
      intrinsicPropertyRetriever = 0;
    } else if (intrinsicPropertyRetriever > 2147483647) {
      intrinsicPropertyRetriever = 2147483647;
    } else if (intrinsicPropertyRetriever < -2147483648) {
      intrinsicPropertyRetriever = -2147483648;
    }
    intrinsicPropertyRetriever = +intrinsicPropertyRetriever;
    if (isCurrentPropertyLengthNaN(intrinsicPropertyRetriever)) {
      if (validatePrimitiveAccess) {
        intrinsicPropertyRetriever = 0;
      } else {
        intrinsicPropertyRetriever = base64Encode.length - 1;
      }
    }
    if (intrinsicPropertyRetriever < 0) {
      intrinsicPropertyRetriever =
        base64Encode.length + intrinsicPropertyRetriever;
    }
    if (intrinsicPropertyRetriever >= base64Encode.length) {
      if (validatePrimitiveAccess) {
        return -1;
      }
      intrinsicPropertyRetriever = base64Encode.length - 1;
    } else if (intrinsicPropertyRetriever < 0) {
      if (validatePrimitiveAccess) {
        intrinsicPropertyRetriever = 0;
      } else {
        return -1;
      }
    }
    if (typeof getEncodedStringFromBytes == "string") {
      getEncodedStringFromBytes = validateFormatStringAndProperties.from(
        getEncodedStringFromBytes,
        _____________________validateIntrinsicPropertyAccess,
      );
    }
    if (validateFormatStringAndProperties.isBuffer(getEncodedStringFromBytes)) {
      if (getEncodedStringFromBytes.length === 0) {
        return -1;
      } else {
        return _validateAndProcessIntrinsicProperties(
          base64Encode,
          getEncodedStringFromBytes,
          intrinsicPropertyRetriever,
          _____________________validateIntrinsicPropertyAccess,
          validatePrimitiveAccess,
        );
      }
    }
    if (typeof getEncodedStringFromBytes == "number") {
      getEncodedStringFromBytes = getEncodedStringFromBytes & 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if (validatePrimitiveAccess) {
          return Uint8Array.prototype.indexOf.call(
            base64Encode,
            getEncodedStringFromBytes,
            intrinsicPropertyRetriever,
          );
        } else {
          return Uint8Array.prototype.lastIndexOf.call(
            base64Encode,
            getEncodedStringFromBytes,
            intrinsicPropertyRetriever,
          );
        }
      } else {
        return _validateAndProcessIntrinsicProperties(
          base64Encode,
          [getEncodedStringFromBytes],
          intrinsicPropertyRetriever,
          _____________________validateIntrinsicPropertyAccess,
          validatePrimitiveAccess,
        );
      }
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function _validateAndProcessIntrinsicProperties(
    indexForIntrinsicProperties,
    propertyDescriptorValidationLogic,
    calculatePropertyDescriptor,
    isIntrinsicPropertiesValid,
    validateIntrinsicPropertiesArray,
  ) {
    let intrinsicPropertiesFactor = 1;
    let numberOfIntrinsicProperties = indexForIntrinsicProperties.length;
    let propertyDescriptorCount = propertyDescriptorValidationLogic.length;
    if (
      isIntrinsicPropertiesValid !== undefined &&
      ((isIntrinsicPropertiesValid = String(
        isIntrinsicPropertiesValid,
      ).toLowerCase()),
      isIntrinsicPropertiesValid === "ucs2" ||
        isIntrinsicPropertiesValid === "ucs-2" ||
        isIntrinsicPropertiesValid === "utf16le" ||
        isIntrinsicPropertiesValid === "utf-16le")
    ) {
      if (
        indexForIntrinsicProperties.length < 2 ||
        propertyDescriptorValidationLogic.length < 2
      ) {
        return -1;
      }
      intrinsicPropertiesFactor = 2;
      numberOfIntrinsicProperties /= 2;
      propertyDescriptorCount /= 2;
      calculatePropertyDescriptor /= 2;
    }
    function __getIntrinsicProperty(
      processIntrinsicProperties,
      calculateValidatedProperties,
    ) {
      if (intrinsicPropertiesFactor === 1) {
        return processIntrinsicProperties[calculateValidatedProperties];
      } else {
        return processIntrinsicProperties.readUInt16BE(
          calculateValidatedProperties * intrinsicPropertiesFactor,
        );
      }
    }
    let ____processIntrinsicProperties;
    if (validateIntrinsicPropertiesArray) {
      let firstMatchedPropertyIndex = -1;
      for (
        ____processIntrinsicProperties = calculatePropertyDescriptor;
        ____processIntrinsicProperties < numberOfIntrinsicProperties;
        ____processIntrinsicProperties++
      ) {
        if (
          __getIntrinsicProperty(
            indexForIntrinsicProperties,
            ____processIntrinsicProperties,
          ) ===
          __getIntrinsicProperty(
            propertyDescriptorValidationLogic,
            firstMatchedPropertyIndex === -1
              ? 0
              : ____processIntrinsicProperties - firstMatchedPropertyIndex,
          )
        ) {
          if (firstMatchedPropertyIndex === -1) {
            firstMatchedPropertyIndex = ____processIntrinsicProperties;
          }
          if (
            ____processIntrinsicProperties - firstMatchedPropertyIndex + 1 ===
            propertyDescriptorCount
          ) {
            return firstMatchedPropertyIndex * intrinsicPropertiesFactor;
          }
        } else {
          if (firstMatchedPropertyIndex !== -1) {
            ____processIntrinsicProperties -=
              ____processIntrinsicProperties - firstMatchedPropertyIndex;
          }
          firstMatchedPropertyIndex = -1;
        }
      }
    } else {
      if (
        calculatePropertyDescriptor + propertyDescriptorCount >
        numberOfIntrinsicProperties
      ) {
        calculatePropertyDescriptor =
          numberOfIntrinsicProperties - propertyDescriptorCount;
      }
      ____processIntrinsicProperties = calculatePropertyDescriptor;
      for (
        ;
        ____processIntrinsicProperties >= 0;
        ____processIntrinsicProperties--
      ) {
        let _isPropertyDescriptorValid = true;
        for (
          let currentDescriptorIndex = 0;
          currentDescriptorIndex < propertyDescriptorCount;
          currentDescriptorIndex++
        ) {
          if (
            __getIntrinsicProperty(
              indexForIntrinsicProperties,
              ____processIntrinsicProperties + currentDescriptorIndex,
            ) !==
            __getIntrinsicProperty(
              propertyDescriptorValidationLogic,
              currentDescriptorIndex,
            )
          ) {
            _isPropertyDescriptorValid = false;
            break;
          }
        }
        if (_isPropertyDescriptorValid) {
          return ____processIntrinsicProperties;
        }
      }
    }
    return -1;
  }
  validateFormatStringAndProperties.prototype.includes = function (
    _validateIntrinsicPropertiesHelper,
    ____________________validateIntrinsicProperties,
    _____________________validateIntrinsicProperties,
  ) {
    return (
      this.indexOf(
        _validateIntrinsicPropertiesHelper,
        ____________________validateIntrinsicProperties,
        _____________________validateIntrinsicProperties,
      ) !== -1
    );
  };
  validateFormatStringAndProperties.prototype.indexOf = function (
    ______________________validateIntrinsicProperties,
    validateIntrinsicPropertiesValue,
    _______________________validateIntrinsicProperties,
  ) {
    return validateBase64Access(
      this,
      ______________________validateIntrinsicProperties,
      validateIntrinsicPropertiesValue,
      _______________________validateIntrinsicProperties,
      true,
    );
  };
  validateFormatStringAndProperties.prototype.lastIndexOf = function (
    __validateIntrinsicPropertiesHelper,
    ___validateIntrinsicPropertiesHelper,
    ____validateIntrinsicPropertiesHelper,
  ) {
    return validateBase64Access(
      this,
      __validateIntrinsicPropertiesHelper,
      ___validateIntrinsicPropertiesHelper,
      ____validateIntrinsicPropertiesHelper,
      false,
    );
  };
  function validateIntrinsicPropertiesThreshold(
    validateIntrinsicPropertiesCheck,
    intrinsicPropertiesValidationResult,
    validatePropertiesResult,
    _____validateIntrinsicPropertiesHelper,
  ) {
    validatePropertiesResult = Number(validatePropertiesResult) || 0;
    let remainingIntrinsicPropertyChecksCount =
      validateIntrinsicPropertiesCheck.length - validatePropertiesResult;
    if (_____validateIntrinsicPropertiesHelper) {
      _____validateIntrinsicPropertiesHelper = Number(
        _____validateIntrinsicPropertiesHelper,
      );
      if (
        _____validateIntrinsicPropertiesHelper >
        remainingIntrinsicPropertyChecksCount
      ) {
        _____validateIntrinsicPropertiesHelper =
          remainingIntrinsicPropertyChecksCount;
      }
    } else {
      _____validateIntrinsicPropertiesHelper =
        remainingIntrinsicPropertyChecksCount;
    }
    let intrinsicPropertiesCheckCount =
      intrinsicPropertiesValidationResult.length;
    if (
      _____validateIntrinsicPropertiesHelper >
      intrinsicPropertiesCheckCount / 2
    ) {
      _____validateIntrinsicPropertiesHelper =
        intrinsicPropertiesCheckCount / 2;
    }
    let maxAllowedIntrinsicPropertyChecks;
    for (
      maxAllowedIntrinsicPropertyChecks = 0;
      maxAllowedIntrinsicPropertyChecks <
      _____validateIntrinsicPropertiesHelper;
      ++maxAllowedIntrinsicPropertyChecks
    ) {
      let parsedHexIntrinsicPropertyCheck = parseInt(
        intrinsicPropertiesValidationResult.substr(
          maxAllowedIntrinsicPropertyChecks * 2,
          2,
        ),
        16,
      );
      if (isCurrentPropertyLengthNaN(parsedHexIntrinsicPropertyCheck)) {
        return maxAllowedIntrinsicPropertyChecks;
      }
      validateIntrinsicPropertiesCheck[
        validatePropertiesResult + maxAllowedIntrinsicPropertyChecks
      ] = parsedHexIntrinsicPropertyCheck;
    }
    return maxAllowedIntrinsicPropertyChecks;
  }
  function copyAndValidateIntrinsicProperties(
    evaluateIntrinsicProperties,
    updateIntrinsicProperty,
    ________________________validateIntrinsicProperties,
    _________________________validateIntrinsicProperties,
  ) {
    return copyAndValidateProperties(
      ________________________________validateIntrinsicProperties(
        updateIntrinsicProperty,
        evaluateIntrinsicProperties.length -
          ________________________validateIntrinsicProperties,
      ),
      evaluateIntrinsicProperties,
      ________________________validateIntrinsicProperties,
      _________________________validateIntrinsicProperties,
    );
  }
  function calculateAndValidateProperties(
    calculateIntrinsicProperties,
    calculatePropertyAdjustment,
    _calculateIntrinsicProperties,
    currentPowerLevel,
  ) {
    return copyAndValidateProperties(
      convertStringToCharCodeArray(calculatePropertyAdjustment),
      calculateIntrinsicProperties,
      _calculateIntrinsicProperties,
      currentPowerLevel,
    );
  }
  function copyAndValidateUpdatedProperties(
    __________________________validateIntrinsicProperties,
    updateIntrinsicProperties,
    _updateIntrinsicProperties,
    updateIntrinsicPropertiesValues,
  ) {
    return copyAndValidateProperties(
      convertBase64ToByteArray(updateIntrinsicProperties),
      __________________________validateIntrinsicProperties,
      _updateIntrinsicProperties,
      updateIntrinsicPropertiesValues,
    );
  }
  function updateAndValidateIntrinsicProperties(
    updateValidationState,
    calculateAndValidateIntrinsicProperties,
    __updateIntrinsicProperties,
    __calculateIntrinsicProperties,
  ) {
    return copyAndValidateProperties(
      convertToIntrinsicPropertyArray(
        calculateAndValidateIntrinsicProperties,
        updateValidationState.length - __updateIntrinsicProperties,
      ),
      updateValidationState,
      __updateIntrinsicProperties,
      __calculateIntrinsicProperties,
    );
  }
  validateFormatStringAndProperties.prototype.write = function (
    updateValidationProperties,
    _validateAndStoreIntrinsicProperties,
    ___updateIntrinsicProperties,
    _processIntrinsicProperties,
  ) {
    if (_validateAndStoreIntrinsicProperties === undefined) {
      _processIntrinsicProperties = "utf8";
      ___updateIntrinsicProperties = this.length;
      _validateAndStoreIntrinsicProperties = 0;
    } else if (
      ___updateIntrinsicProperties === undefined &&
      typeof _validateAndStoreIntrinsicProperties == "string"
    ) {
      _processIntrinsicProperties = _validateAndStoreIntrinsicProperties;
      ___updateIntrinsicProperties = this.length;
      _validateAndStoreIntrinsicProperties = 0;
    } else if (isFinite(_validateAndStoreIntrinsicProperties)) {
      _validateAndStoreIntrinsicProperties =
        _validateAndStoreIntrinsicProperties >>> 0;
      if (isFinite(___updateIntrinsicProperties)) {
        ___updateIntrinsicProperties = ___updateIntrinsicProperties >>> 0;
        if (_processIntrinsicProperties === undefined) {
          _processIntrinsicProperties = "utf8";
        }
      } else {
        _processIntrinsicProperties = ___updateIntrinsicProperties;
        ___updateIntrinsicProperties = undefined;
      }
    } else {
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    }
    let ___processIntrinsicProperties =
      this.length - _validateAndStoreIntrinsicProperties;
    if (
      ___updateIntrinsicProperties === undefined ||
      ___updateIntrinsicProperties > ___processIntrinsicProperties
    ) {
      ___updateIntrinsicProperties = ___processIntrinsicProperties;
    }
    if (
      (updateValidationProperties.length > 0 &&
        (___updateIntrinsicProperties < 0 ||
          _validateAndStoreIntrinsicProperties < 0)) ||
      _validateAndStoreIntrinsicProperties > this.length
    ) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    _processIntrinsicProperties ||= "utf8";
    let defaultValidationOffset = false;
    while (true) {
      switch (_processIntrinsicProperties) {
        case "hex":
          return validateIntrinsicPropertiesThreshold(
            this,
            updateValidationProperties,
            _validateAndStoreIntrinsicProperties,
            ___updateIntrinsicProperties,
          );
        case "utf8":
        case "utf-8":
          return copyAndValidateIntrinsicProperties(
            this,
            updateValidationProperties,
            _validateAndStoreIntrinsicProperties,
            ___updateIntrinsicProperties,
          );
        case "ascii":
        case "latin1":
        case "binary":
          return calculateAndValidateProperties(
            this,
            updateValidationProperties,
            _validateAndStoreIntrinsicProperties,
            ___updateIntrinsicProperties,
          );
        case "base64":
          return copyAndValidateUpdatedProperties(
            this,
            updateValidationProperties,
            _validateAndStoreIntrinsicProperties,
            ___updateIntrinsicProperties,
          );
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return updateAndValidateIntrinsicProperties(
            this,
            updateValidationProperties,
            _validateAndStoreIntrinsicProperties,
            ___updateIntrinsicProperties,
          );
        default:
          if (defaultValidationOffset) {
            throw new TypeError(
              "Unknown encoding: " + _processIntrinsicProperties,
            );
          }
          _processIntrinsicProperties = (
            "" + _processIntrinsicProperties
          ).toLowerCase();
          defaultValidationOffset = true;
      }
    }
  };
  validateFormatStringAndProperties.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function processByteArray(
    createUint8ArrayWithBuffer,
    createByteArrayBuffer,
    createBufferFromTypedArray,
  ) {
    if (
      createByteArrayBuffer === 0 &&
      createBufferFromTypedArray === createUint8ArrayWithBuffer.length
    ) {
      return getIntrinsicPropertyDescription.fromByteArray(
        createUint8ArrayWithBuffer,
      );
    } else {
      return getIntrinsicPropertyDescription.fromByteArray(
        createUint8ArrayWithBuffer.slice(
          createByteArrayBuffer,
          createBufferFromTypedArray,
        ),
      );
    }
  }
  function convertBytesToUnicode(
    createBufferFromNumber,
    bufferSizeValidation,
    BufferConstructor,
  ) {
    BufferConstructor = Math.min(
      createBufferFromNumber.length,
      BufferConstructor,
    );
    let unicodeCodeUnits = [];
    let currentIndex = bufferSizeValidation;
    while (currentIndex < BufferConstructor) {
      let currentCharCode = createBufferFromNumber[currentIndex];
      let decodedCharacterCode = null;
      let bytesRequiredForCharacter =
        currentCharCode > 239
          ? 4
          : currentCharCode > 223
            ? 3
            : currentCharCode > 191
              ? 2
              : 1;
      if (currentIndex + bytesRequiredForCharacter <= BufferConstructor) {
        let subsequentByte;
        let thirdSubsequentByte;
        let decodedUnicodeCharacter;
        let decodedCharacterCodeFromBytes;
        switch (bytesRequiredForCharacter) {
          case 1:
            if (currentCharCode < 128) {
              decodedCharacterCode = currentCharCode;
            }
            break;
          case 2:
            subsequentByte = createBufferFromNumber[currentIndex + 1];
            if ((subsequentByte & 192) === 128) {
              decodedCharacterCodeFromBytes =
                ((currentCharCode & 31) << 6) | (subsequentByte & 63);
              if (decodedCharacterCodeFromBytes > 127) {
                decodedCharacterCode = decodedCharacterCodeFromBytes;
              }
            }
            break;
          case 3:
            subsequentByte = createBufferFromNumber[currentIndex + 1];
            thirdSubsequentByte = createBufferFromNumber[currentIndex + 2];
            if (
              (subsequentByte & 192) === 128 &&
              (thirdSubsequentByte & 192) === 128
            ) {
              decodedCharacterCodeFromBytes =
                ((currentCharCode & 15) << 12) |
                ((subsequentByte & 63) << 6) |
                (thirdSubsequentByte & 63);
              if (
                decodedCharacterCodeFromBytes > 2047 &&
                (decodedCharacterCodeFromBytes < 55296 ||
                  decodedCharacterCodeFromBytes > 57343)
              ) {
                decodedCharacterCode = decodedCharacterCodeFromBytes;
              }
            }
            break;
          case 4:
            subsequentByte = createBufferFromNumber[currentIndex + 1];
            thirdSubsequentByte = createBufferFromNumber[currentIndex + 2];
            decodedUnicodeCharacter = createBufferFromNumber[currentIndex + 3];
            if (
              (subsequentByte & 192) === 128 &&
              (thirdSubsequentByte & 192) === 128 &&
              (decodedUnicodeCharacter & 192) === 128
            ) {
              decodedCharacterCodeFromBytes =
                ((currentCharCode & 15) << 18) |
                ((subsequentByte & 63) << 12) |
                ((thirdSubsequentByte & 63) << 6) |
                (decodedUnicodeCharacter & 63);
              if (
                decodedCharacterCodeFromBytes > 65535 &&
                decodedCharacterCodeFromBytes < 1114112
              ) {
                decodedCharacterCode = decodedCharacterCodeFromBytes;
              }
            }
        }
      }
      if (decodedCharacterCode === null) {
        decodedCharacterCode = 65533;
        bytesRequiredForCharacter = 1;
      } else if (decodedCharacterCode > 65535) {
        decodedCharacterCode -= 65536;
        unicodeCodeUnits.push(((decodedCharacterCode >>> 10) & 1023) | 55296);
        decodedCharacterCode = (decodedCharacterCode & 1023) | 56320;
      }
      unicodeCodeUnits.push(decodedCharacterCode);
      currentIndex += bytesRequiredForCharacter;
    }
    return convertArrayToString(unicodeCodeUnits);
  }
  var isTypedArraySupported = 4096;
  function convertArrayToString(___________________validateIntrinsicProperty) {
    let _arrayLength = ___________________validateIntrinsicProperty.length;
    if (_arrayLength <= isTypedArraySupported) {
      return String.fromCharCode.apply(
        String,
        ___________________validateIntrinsicProperty,
      );
    }
    let resultString = "";
    let _____currentIndex = 0;
    while (_____currentIndex < _arrayLength) {
      resultString += String.fromCharCode.apply(
        String,
        ___________________validateIntrinsicProperty.slice(
          _____currentIndex,
          (_____currentIndex += isTypedArraySupported),
        ),
      );
    }
    return resultString;
  }
  function extractSubsetString(
    ____________________validateIntrinsicProperty,
    _____________________validateIntrinsicProperty,
    ______________________validateIntrinsicProperty,
  ) {
    let extractedString = "";
    ______________________validateIntrinsicProperty = Math.min(
      ____________________validateIntrinsicProperty.length,
      ______________________validateIntrinsicProperty,
    );
    for (
      let indexForStringExtraction =
        _____________________validateIntrinsicProperty;
      indexForStringExtraction <
      ______________________validateIntrinsicProperty;
      ++indexForStringExtraction
    ) {
      extractedString += String.fromCharCode(
        ____________________validateIntrinsicProperty[
          indexForStringExtraction
        ] & 127,
      );
    }
    return extractedString;
  }
  function extractSubstringFromCharCodes(
    _______________________validateIntrinsicProperty,
    ________________________validateIntrinsicProperty,
    _________________________validateIntrinsicProperty,
  ) {
    let extractedSubstring = "";
    _________________________validateIntrinsicProperty = Math.min(
      _______________________validateIntrinsicProperty.length,
      _________________________validateIntrinsicProperty,
    );
    for (
      let _________index = ________________________validateIntrinsicProperty;
      _________index < _________________________validateIntrinsicProperty;
      ++_________index
    ) {
      extractedSubstring += String.fromCharCode(
        _______________________validateIntrinsicProperty[_________index],
      );
    }
    return extractedSubstring;
  }
  function validateAndGenerateIntrinsicProperties(
    __________________________validateIntrinsicProperty,
    ___________________________validateIntrinsicProperty,
    ____________________________validateIntrinsicProperty,
  ) {
    let _intrinsicPropertiesCount =
      __________________________validateIntrinsicProperty.length;
    if (
      !___________________________validateIntrinsicProperty ||
      ___________________________validateIntrinsicProperty < 0
    ) {
      ___________________________validateIntrinsicProperty = 0;
    }
    if (
      !____________________________validateIntrinsicProperty ||
      ____________________________validateIntrinsicProperty < 0 ||
      ____________________________validateIntrinsicProperty >
        _intrinsicPropertiesCount
    ) {
      ____________________________validateIntrinsicProperty =
        _intrinsicPropertiesCount;
    }
    let intrinsicPropertyValidationMessage = "";
    for (
      let intrinsicPropertyIndex =
        ___________________________validateIntrinsicProperty;
      intrinsicPropertyIndex <
      ____________________________validateIntrinsicProperty;
      ++intrinsicPropertyIndex
    ) {
      intrinsicPropertyValidationMessage +=
        isTypedArraySupportAvailable[
          __________________________validateIntrinsicProperty[
            intrinsicPropertyIndex
          ]
        ];
    }
    return intrinsicPropertyValidationMessage;
  }
  function decodeLogBuffer(
    validateIntrinsicPropertyType,
    validateLogTimestamp,
    validateBufferSize,
  ) {
    let bufferSlice = validateIntrinsicPropertyType.slice(
      validateLogTimestamp,
      validateBufferSize,
    );
    let decodedString = "";
    for (
      let ______index = 0;
      ______index < bufferSlice.length - 1;
      ______index += 2
    ) {
      decodedString += String.fromCharCode(
        bufferSlice[______index] + bufferSlice[______index + 1] * 256,
      );
    }
    return decodedString;
  }
  validateFormatStringAndProperties.prototype.slice = function (
    logWithMessageAndTimestamp,
    _validateLogTimestamp,
  ) {
    let arrayLength = this.length;
    logWithMessageAndTimestamp = ~~logWithMessageAndTimestamp;
    if (_validateLogTimestamp === undefined) {
      _validateLogTimestamp = arrayLength;
    } else {
      _validateLogTimestamp = ~~_validateLogTimestamp;
    }
    if (logWithMessageAndTimestamp < 0) {
      logWithMessageAndTimestamp += arrayLength;
      if (logWithMessageAndTimestamp < 0) {
        logWithMessageAndTimestamp = 0;
      }
    } else if (logWithMessageAndTimestamp > arrayLength) {
      logWithMessageAndTimestamp = arrayLength;
    }
    if (_validateLogTimestamp < 0) {
      _validateLogTimestamp += arrayLength;
      if (_validateLogTimestamp < 0) {
        _validateLogTimestamp = 0;
      }
    } else if (_validateLogTimestamp > arrayLength) {
      _validateLogTimestamp = arrayLength;
    }
    if (_validateLogTimestamp < logWithMessageAndTimestamp) {
      _validateLogTimestamp = logWithMessageAndTimestamp;
    }
    let subArrayForLogTimestamp = this.subarray(
      logWithMessageAndTimestamp,
      _validateLogTimestamp,
    );
    Object.setPrototypeOf(
      subArrayForLogTimestamp,
      validateFormatStringAndProperties.prototype,
    );
    return subArrayForLogTimestamp;
  };
  function validateLogTimeOffsets(
    formatAndLogTime,
    formatTimeBasedOnLogging,
    initializeLogWithTimestamp,
  ) {
    if (formatAndLogTime % 1 !== 0 || formatAndLogTime < 0) {
      throw new RangeError("offset is not uint");
    }
    if (
      formatAndLogTime + formatTimeBasedOnLogging >
      initializeLogWithTimestamp
    ) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  validateFormatStringAndProperties.prototype.readUintLE =
    validateFormatStringAndProperties.prototype.readUIntLE = function (
      allocateLogWithTimestamp,
      fillLogWithTimestamp,
      formatAndLogWithLeadingZero,
    ) {
      allocateLogWithTimestamp = allocateLogWithTimestamp >>> 0;
      fillLogWithTimestamp = fillLogWithTimestamp >>> 0;
      if (!formatAndLogWithLeadingZero) {
        validateLogTimeOffsets(
          allocateLogWithTimestamp,
          fillLogWithTimestamp,
          this.length,
        );
      }
      let accumulatedLogValue = this[allocateLogWithTimestamp];
      let multiplierForAccumulatedLog = 1;
      let logMultiplierIndex = 0;
      while (
        ++logMultiplierIndex < fillLogWithTimestamp &&
        (multiplierForAccumulatedLog *= 256)
      ) {
        accumulatedLogValue +=
          this[allocateLogWithTimestamp + logMultiplierIndex] *
          multiplierForAccumulatedLog;
      }
      return accumulatedLogValue;
    };
  validateFormatStringAndProperties.prototype.readUintBE =
    validateFormatStringAndProperties.prototype.readUIntBE = function (
      calculateAndLogMessage,
      allocateLogBuffer,
      logAndReturnAllocatedBuffer,
    ) {
      calculateAndLogMessage = calculateAndLogMessage >>> 0;
      allocateLogBuffer = allocateLogBuffer >>> 0;
      if (!logAndReturnAllocatedBuffer) {
        validateLogTimeOffsets(
          calculateAndLogMessage,
          allocateLogBuffer,
          this.length,
        );
      }
      let _______bufferValue =
        this[calculateAndLogMessage + --allocateLogBuffer];
      let _multiplier = 1;
      while (allocateLogBuffer > 0 && (_multiplier *= 256)) {
        _______bufferValue +=
          this[calculateAndLogMessage + --allocateLogBuffer] * _multiplier;
      }
      return _______bufferValue;
    };
  validateFormatStringAndProperties.prototype.readUint8 =
    validateFormatStringAndProperties.prototype.readUInt8 = function (
      processWithArguments,
      _applyFunctionWithArguments,
    ) {
      processWithArguments = processWithArguments >>> 0;
      if (!_applyFunctionWithArguments) {
        validateLogTimeOffsets(processWithArguments, 1, this.length);
      }
      return this[processWithArguments];
    };
  validateFormatStringAndProperties.prototype.readUint16LE =
    validateFormatStringAndProperties.prototype.readUInt16LE = function (
      handleEncodingAndLogProperties,
      validateEncodingAndPrepareBuffer,
    ) {
      handleEncodingAndLogProperties = handleEncodingAndLogProperties >>> 0;
      if (!validateEncodingAndPrepareBuffer) {
        validateLogTimeOffsets(handleEncodingAndLogProperties, 2, this.length);
      }
      return (
        this[handleEncodingAndLogProperties] |
        (this[handleEncodingAndLogProperties + 1] << 8)
      );
    };
  validateFormatStringAndProperties.prototype.readUint16BE =
    validateFormatStringAndProperties.prototype.readUInt16BE = function (
      _extendDebugLogWithProperties,
      logWithProperties,
    ) {
      _extendDebugLogWithProperties = _extendDebugLogWithProperties >>> 0;
      if (!logWithProperties) {
        validateLogTimeOffsets(_extendDebugLogWithProperties, 2, this.length);
      }
      return (
        (this[_extendDebugLogWithProperties] << 8) |
        this[_extendDebugLogWithProperties + 1]
      );
    };
  validateFormatStringAndProperties.prototype.readUint32LE =
    validateFormatStringAndProperties.prototype.readUInt32LE = function (
      sliceBufferBasedOnIndex,
      handleIntrinsicPropertyAccessToUint8Array,
    ) {
      sliceBufferBasedOnIndex = sliceBufferBasedOnIndex >>> 0;
      if (!handleIntrinsicPropertyAccessToUint8Array) {
        validateLogTimeOffsets(sliceBufferBasedOnIndex, 4, this.length);
      }
      return (
        (this[sliceBufferBasedOnIndex] |
          (this[sliceBufferBasedOnIndex + 1] << 8) |
          (this[sliceBufferBasedOnIndex + 2] << 16)) +
        this[sliceBufferBasedOnIndex + 3] * 16777216
      );
    };
  validateFormatStringAndProperties.prototype.readUint32BE =
    validateFormatStringAndProperties.prototype.readUInt32BE = function (
      handleBufferAccess,
      processBufferWithOffset,
    ) {
      handleBufferAccess = handleBufferAccess >>> 0;
      if (!processBufferWithOffset) {
        validateLogTimeOffsets(handleBufferAccess, 4, this.length);
      }
      return (
        this[handleBufferAccess] * 16777216 +
        ((this[handleBufferAccess + 1] << 16) |
          (this[handleBufferAccess + 2] << 8) |
          this[handleBufferAccess + 3])
      );
    };
  validateFormatStringAndProperties.prototype.readBigUInt64LE =
    getValidationFunction(function (validateAndProcessBuffer) {
      validateAndProcessBuffer = validateAndProcessBuffer >>> 0;
      validateMaxIntrinsicPropertiesIndex(validateAndProcessBuffer, "offset");
      let ___bufferValue = this[validateAndProcessBuffer];
      let nextBufferValue = this[validateAndProcessBuffer + 7];
      if (___bufferValue === undefined || nextBufferValue === undefined) {
        __________________________________validateIntrinsicProperties(
          validateAndProcessBuffer,
          this.length - 8,
        );
      }
      let ____bufferValue =
        ___bufferValue +
        this[++validateAndProcessBuffer] * 256 +
        this[++validateAndProcessBuffer] * 65536 +
        this[++validateAndProcessBuffer] * 16777216;
      let bufferHighValue =
        this[++validateAndProcessBuffer] +
        this[++validateAndProcessBuffer] * 256 +
        this[++validateAndProcessBuffer] * 65536 +
        nextBufferValue * 16777216;
      return BigInt(____bufferValue) + (BigInt(bufferHighValue) << BigInt(32));
    });
  validateFormatStringAndProperties.prototype.readBigUInt64BE =
    getValidationFunction(function (_validateAndProcessIntrinsicAccess) {
      _validateAndProcessIntrinsicAccess =
        _validateAndProcessIntrinsicAccess >>> 0;
      validateMaxIntrinsicPropertiesIndex(
        _validateAndProcessIntrinsicAccess,
        "offset",
      );
      let intrinsicAccessValue = this[_validateAndProcessIntrinsicAccess];
      let intrinsicAccessNextValue =
        this[_validateAndProcessIntrinsicAccess + 7];
      if (
        intrinsicAccessValue === undefined ||
        intrinsicAccessNextValue === undefined
      ) {
        __________________________________validateIntrinsicProperties(
          _validateAndProcessIntrinsicAccess,
          this.length - 8,
        );
      }
      let compositeAccessValue =
        intrinsicAccessValue * 16777216 +
        this[++_validateAndProcessIntrinsicAccess] * 65536 +
        this[++_validateAndProcessIntrinsicAccess] * 256 +
        this[++_validateAndProcessIntrinsicAccess];
      let computedIntrinsicAccessValue =
        this[++_validateAndProcessIntrinsicAccess] * 16777216 +
        this[++_validateAndProcessIntrinsicAccess] * 65536 +
        this[++_validateAndProcessIntrinsicAccess] * 256 +
        intrinsicAccessNextValue;
      return (
        (BigInt(compositeAccessValue) << BigInt(32)) +
        BigInt(computedIntrinsicAccessValue)
      );
    });
  validateFormatStringAndProperties.prototype.readIntLE = function (
    processAndValidateBufferAccess,
    processAndValidateBuffer,
    validateAndProcessBufferLength,
  ) {
    processAndValidateBufferAccess = processAndValidateBufferAccess >>> 0;
    processAndValidateBuffer = processAndValidateBuffer >>> 0;
    if (!validateAndProcessBufferLength) {
      validateLogTimeOffsets(
        processAndValidateBufferAccess,
        processAndValidateBuffer,
        this.length,
      );
    }
    let _____bufferValue = this[processAndValidateBufferAccess];
    let __bufferMultiplier = 1;
    let ___bufferIndex = 0;
    while (
      ++___bufferIndex < processAndValidateBuffer &&
      (__bufferMultiplier *= 256)
    ) {
      _____bufferValue +=
        this[processAndValidateBufferAccess + ___bufferIndex] *
        __bufferMultiplier;
    }
    __bufferMultiplier *= 128;
    if (_____bufferValue >= __bufferMultiplier) {
      _____bufferValue -= Math.pow(2, processAndValidateBuffer * 8);
    }
    return _____bufferValue;
  };
  validateFormatStringAndProperties.prototype.readIntBE = function (
    processIntrinsicAccess,
    processPromiseRejectionLimit,
    validateAndProcessAccess,
  ) {
    processIntrinsicAccess = processIntrinsicAccess >>> 0;
    processPromiseRejectionLimit = processPromiseRejectionLimit >>> 0;
    if (!validateAndProcessAccess) {
      validateLogTimeOffsets(
        processIntrinsicAccess,
        processPromiseRejectionLimit,
        this.length,
      );
    }
    let remainingPromiseRejections = processPromiseRejectionLimit;
    let multiplier = 1;
    let accumulatedPromiseRejections =
      this[processIntrinsicAccess + --remainingPromiseRejections];
    while (remainingPromiseRejections > 0 && (multiplier *= 256)) {
      accumulatedPromiseRejections +=
        this[processIntrinsicAccess + --remainingPromiseRejections] *
        multiplier;
    }
    multiplier *= 128;
    if (accumulatedPromiseRejections >= multiplier) {
      accumulatedPromiseRejections -= Math.pow(
        2,
        processPromiseRejectionLimit * 8,
      );
    }
    return accumulatedPromiseRejections;
  };
  validateFormatStringAndProperties.prototype.readInt8 = function (
    processBufferData,
    isBuffer,
  ) {
    processBufferData = processBufferData >>> 0;
    if (!isBuffer) {
      validateLogTimeOffsets(processBufferData, 1, this.length);
    }
    if (this[processBufferData] & 128) {
      return (255 - this[processBufferData] + 1) * -1;
    } else {
      return this[processBufferData];
    }
  };
  validateFormatStringAndProperties.prototype.readInt16LE = function (
    checkAndCompareBuffers,
    handleBufferComparison,
  ) {
    checkAndCompareBuffers = checkAndCompareBuffers >>> 0;
    if (!handleBufferComparison) {
      validateLogTimeOffsets(checkAndCompareBuffers, 2, this.length);
    }
    let calculateBufferValue =
      this[checkAndCompareBuffers] | (this[checkAndCompareBuffers + 1] << 8);
    if (calculateBufferValue & 32768) {
      return calculateBufferValue | 4294901760;
    } else {
      return calculateBufferValue;
    }
  };
  validateFormatStringAndProperties.prototype.readInt16BE = function (
    compareBuffers,
    bufferAlloc,
  ) {
    compareBuffers = compareBuffers >>> 0;
    if (!bufferAlloc) {
      validateLogTimeOffsets(compareBuffers, 2, this.length);
    }
    let _combinedBufferValue =
      this[compareBuffers + 1] | (this[compareBuffers] << 8);
    if (_combinedBufferValue & 32768) {
      return _combinedBufferValue | 4294901760;
    } else {
      return _combinedBufferValue;
    }
  };
  validateFormatStringAndProperties.prototype.readInt32LE = function (
    _compareBuffers,
    compareUint8Arrays,
  ) {
    _compareBuffers = _compareBuffers >>> 0;
    if (!compareUint8Arrays) {
      validateLogTimeOffsets(_compareBuffers, 4, this.length);
    }
    return (
      this[_compareBuffers] |
      (this[_compareBuffers + 1] << 8) |
      (this[_compareBuffers + 2] << 16) |
      (this[_compareBuffers + 3] << 24)
    );
  };
  validateFormatStringAndProperties.prototype.readInt32BE = function (
    __compareBuffers,
    ___compareBuffers,
  ) {
    __compareBuffers = __compareBuffers >>> 0;
    if (!___compareBuffers) {
      validateLogTimeOffsets(__compareBuffers, 4, this.length);
    }
    return (
      (this[__compareBuffers] << 24) |
      (this[__compareBuffers + 1] << 16) |
      (this[__compareBuffers + 2] << 8) |
      this[__compareBuffers + 3]
    );
  };
  validateFormatStringAndProperties.prototype.readBigInt64LE =
    getValidationFunction(function (comparePropertyDescriptors) {
      comparePropertyDescriptors = comparePropertyDescriptors >>> 0;
      validateMaxIntrinsicPropertiesIndex(comparePropertyDescriptors, "offset");
      let currentDescriptorValue = this[comparePropertyDescriptors];
      let nextDescriptorValue = this[comparePropertyDescriptors + 7];
      if (
        currentDescriptorValue === undefined ||
        nextDescriptorValue === undefined
      ) {
        __________________________________validateIntrinsicProperties(
          comparePropertyDescriptors,
          this.length - 8,
        );
      }
      let combinedDescriptorValue =
        this[comparePropertyDescriptors + 4] +
        this[comparePropertyDescriptors + 5] * 256 +
        this[comparePropertyDescriptors + 6] * 65536 +
        (nextDescriptorValue << 24);
      return (
        (BigInt(combinedDescriptorValue) << BigInt(32)) +
        BigInt(
          currentDescriptorValue +
            this[++comparePropertyDescriptors] * 256 +
            this[++comparePropertyDescriptors] * 65536 +
            this[++comparePropertyDescriptors] * 16777216,
        )
      );
    });
  validateFormatStringAndProperties.prototype.readBigInt64BE =
    getValidationFunction(function (bufferConcatenation) {
      bufferConcatenation = bufferConcatenation >>> 0;
      validateMaxIntrinsicPropertiesIndex(bufferConcatenation, "offset");
      let bufferElement1 = this[bufferConcatenation];
      let nextBufferElement = this[bufferConcatenation + 7];
      if (bufferElement1 === undefined || nextBufferElement === undefined) {
        __________________________________validateIntrinsicProperties(
          bufferConcatenation,
          this.length - 8,
        );
      }
      let combinedBufferValue =
        (bufferElement1 << 24) +
        this[++bufferConcatenation] * 65536 +
        this[++bufferConcatenation] * 256 +
        this[++bufferConcatenation];
      return (
        (BigInt(combinedBufferValue) << BigInt(32)) +
        BigInt(
          this[++bufferConcatenation] * 16777216 +
            this[++bufferConcatenation] * 65536 +
            this[++bufferConcatenation] * 256 +
            nextBufferElement,
        )
      );
    });
  validateFormatStringAndProperties.prototype.readFloatLE = function (
    validateIntrinsicPropertiesConcat,
    validateBuffersConcat,
  ) {
    validateIntrinsicPropertiesConcat = validateIntrinsicPropertiesConcat >>> 0;
    if (!validateBuffersConcat) {
      validateLogTimeOffsets(validateIntrinsicPropertiesConcat, 4, this.length);
    }
    return ___validateBoxedPrimitiveAccess.read(
      this,
      validateIntrinsicPropertiesConcat,
      true,
      23,
      4,
    );
  };
  validateFormatStringAndProperties.prototype.readFloatBE = function (
    validateAndAllocateBuffer,
    ___________________________validateIntrinsicProperties,
  ) {
    validateAndAllocateBuffer = validateAndAllocateBuffer >>> 0;
    if (!___________________________validateIntrinsicProperties) {
      validateLogTimeOffsets(validateAndAllocateBuffer, 4, this.length);
    }
    return ___validateBoxedPrimitiveAccess.read(
      this,
      validateAndAllocateBuffer,
      false,
      23,
      4,
    );
  };
  validateFormatStringAndProperties.prototype.readDoubleLE = function (
    totalIntrinsicPropertyLength,
    validateIntrinsicPropertyLength,
  ) {
    totalIntrinsicPropertyLength = totalIntrinsicPropertyLength >>> 0;
    if (!validateIntrinsicPropertyLength) {
      validateLogTimeOffsets(totalIntrinsicPropertyLength, 8, this.length);
    }
    return ___validateBoxedPrimitiveAccess.read(
      this,
      totalIntrinsicPropertyLength,
      true,
      52,
      8,
    );
  };
  validateFormatStringAndProperties.prototype.readDoubleBE = function (
    validateAndCopyIntrinsicProperties,
    ____________________________validateIntrinsicProperties,
  ) {
    validateAndCopyIntrinsicProperties =
      validateAndCopyIntrinsicProperties >>> 0;
    if (!____________________________validateIntrinsicProperties) {
      validateLogTimeOffsets(
        validateAndCopyIntrinsicProperties,
        8,
        this.length,
      );
    }
    return ___validateBoxedPrimitiveAccess.read(
      this,
      validateAndCopyIntrinsicProperties,
      false,
      52,
      8,
    );
  };
  function ___validateAndAllocateBuffer(
    validateIntrinsicPropertiesBuffer,
    _validateAndCopyIntrinsicProperties,
    allocateBufferForValidation,
    bufferCollectionValidator,
    _allocateBufferForValidation,
    allocateBufferFromIntrinsicProperties,
  ) {
    if (
      !validateFormatStringAndProperties.isBuffer(
        validateIntrinsicPropertiesBuffer,
      )
    ) {
      throw new TypeError('"buffer" argument must be a Buffer instance');
    }
    if (
      _validateAndCopyIntrinsicProperties > _allocateBufferForValidation ||
      _validateAndCopyIntrinsicProperties <
        allocateBufferFromIntrinsicProperties
    ) {
      throw new RangeError('"value" argument is out of bounds');
    }
    if (
      allocateBufferForValidation + bufferCollectionValidator >
      validateIntrinsicPropertiesBuffer.length
    ) {
      throw new RangeError("Index out of range");
    }
  }
  validateFormatStringAndProperties.prototype.writeUintLE =
    validateFormatStringAndProperties.prototype.writeUIntLE = function (
      bufferToCopy,
      validateInputBuffer,
      bufferCopyOperation,
      copyBufferToTarget,
    ) {
      bufferToCopy = +bufferToCopy;
      validateInputBuffer = validateInputBuffer >>> 0;
      bufferCopyOperation = bufferCopyOperation >>> 0;
      if (!copyBufferToTarget) {
        let bitmaskForBufferSize = Math.pow(2, bufferCopyOperation * 8) - 1;
        ___validateAndAllocateBuffer(
          this,
          bufferToCopy,
          validateInputBuffer,
          bufferCopyOperation,
          bitmaskForBufferSize,
          0,
        );
      }
      let multiplierForBufferCopy = 1;
      let __bufferIndex = 0;
      for (
        this[validateInputBuffer] = bufferToCopy & 255;
        ++__bufferIndex < bufferCopyOperation &&
        (multiplierForBufferCopy *= 256);

      ) {
        this[validateInputBuffer + __bufferIndex] =
          (bufferToCopy / multiplierForBufferCopy) & 255;
      }
      return validateInputBuffer + bufferCopyOperation;
    };
  validateFormatStringAndProperties.prototype.writeUintBE =
    validateFormatStringAndProperties.prototype.writeUIntBE = function (
      getLengthOfValue,
      getValidatableValueLength,
      getValidatedInputLength,
      validateInputLength,
    ) {
      getLengthOfValue = +getLengthOfValue;
      getValidatableValueLength = getValidatableValueLength >>> 0;
      getValidatedInputLength = getValidatedInputLength >>> 0;
      if (!validateInputLength) {
        let maxBitValue = Math.pow(2, getValidatedInputLength * 8) - 1;
        ___validateAndAllocateBuffer(
          this,
          getLengthOfValue,
          getValidatableValueLength,
          getValidatedInputLength,
          maxBitValue,
          0,
        );
      }
      let currentByteIndex = getValidatedInputLength - 1;
      let currentByteMultiplier = 1;
      for (
        this[getValidatableValueLength + currentByteIndex] =
          getLengthOfValue & 255;
        --currentByteIndex >= 0 && (currentByteMultiplier *= 256);

      ) {
        this[getValidatableValueLength + currentByteIndex] =
          (getLengthOfValue / currentByteMultiplier) & 255;
      }
      return getValidatableValueLength + getValidatedInputLength;
    };
  validateFormatStringAndProperties.prototype.writeUint8 =
    validateFormatStringAndProperties.prototype.writeUInt8 = function (
      validateMimeTypeAndUserAgent,
      getValidatedRandomValueLength,
      validateValueLengthBasedOnMimeType,
    ) {
      validateMimeTypeAndUserAgent = +validateMimeTypeAndUserAgent;
      getValidatedRandomValueLength = getValidatedRandomValueLength >>> 0;
      if (!validateValueLengthBasedOnMimeType) {
        ___validateAndAllocateBuffer(
          this,
          validateMimeTypeAndUserAgent,
          getValidatedRandomValueLength,
          1,
          255,
          0,
        );
      }
      this[getValidatedRandomValueLength] = validateMimeTypeAndUserAgent & 255;
      return getValidatedRandomValueLength + 1;
    };
  validateFormatStringAndProperties.prototype.writeUint16LE =
    validateFormatStringAndProperties.prototype.writeUInt16LE = function (
      validateMimeTypeAndUserAgentLengthSwitch,
      mimeTypeLengthValidator,
      _validateMimeTypeAndUserAgentLength,
    ) {
      validateMimeTypeAndUserAgentLengthSwitch =
        +validateMimeTypeAndUserAgentLengthSwitch;
      mimeTypeLengthValidator = mimeTypeLengthValidator >>> 0;
      if (!_validateMimeTypeAndUserAgentLength) {
        ___validateAndAllocateBuffer(
          this,
          validateMimeTypeAndUserAgentLengthSwitch,
          mimeTypeLengthValidator,
          2,
          65535,
          0,
        );
      }
      this[mimeTypeLengthValidator] =
        validateMimeTypeAndUserAgentLengthSwitch & 255;
      this[mimeTypeLengthValidator + 1] =
        validateMimeTypeAndUserAgentLengthSwitch >>> 8;
      return mimeTypeLengthValidator + 2;
    };
  validateFormatStringAndProperties.prototype.writeUint16BE =
    validateFormatStringAndProperties.prototype.writeUInt16BE = function (
      calculateByteLengthBasedOnEncoding,
      calculateEncodedLength,
      calculateUniqueSlugLength,
    ) {
      calculateByteLengthBasedOnEncoding = +calculateByteLengthBasedOnEncoding;
      calculateEncodedLength = calculateEncodedLength >>> 0;
      if (!calculateUniqueSlugLength) {
        ___validateAndAllocateBuffer(
          this,
          calculateByteLengthBasedOnEncoding,
          calculateEncodedLength,
          2,
          65535,
          0,
        );
      }
      this[calculateEncodedLength] = calculateByteLengthBasedOnEncoding >>> 8;
      this[calculateEncodedLength + 1] =
        calculateByteLengthBasedOnEncoding & 255;
      return calculateEncodedLength + 2;
    };
  validateFormatStringAndProperties.prototype.writeUint32LE =
    validateFormatStringAndProperties.prototype.writeUInt32LE = function (
      validateSlugGeneration,
      validateAndGenerateSlug,
      validateUniqueSlugAndLength,
    ) {
      validateSlugGeneration = +validateSlugGeneration;
      validateAndGenerateSlug = validateAndGenerateSlug >>> 0;
      if (!validateUniqueSlugAndLength) {
        ___validateAndAllocateBuffer(
          this,
          validateSlugGeneration,
          validateAndGenerateSlug,
          4,
          4294967295,
          0,
        );
      }
      this[validateAndGenerateSlug + 3] = validateSlugGeneration >>> 24;
      this[validateAndGenerateSlug + 2] = validateSlugGeneration >>> 16;
      this[validateAndGenerateSlug + 1] = validateSlugGeneration >>> 8;
      this[validateAndGenerateSlug] = validateSlugGeneration & 255;
      return validateAndGenerateSlug + 4;
    };
  validateFormatStringAndProperties.prototype.writeUint32BE =
    validateFormatStringAndProperties.prototype.writeUInt32BE = function (
      generateSlugBasedOnEncoding,
      generateEncodedSlug,
      __generateSlug,
    ) {
      generateSlugBasedOnEncoding = +generateSlugBasedOnEncoding;
      generateEncodedSlug = generateEncodedSlug >>> 0;
      if (!__generateSlug) {
        ___validateAndAllocateBuffer(
          this,
          generateSlugBasedOnEncoding,
          generateEncodedSlug,
          4,
          4294967295,
          0,
        );
      }
      this[generateEncodedSlug] = generateSlugBasedOnEncoding >>> 24;
      this[generateEncodedSlug + 1] = generateSlugBasedOnEncoding >>> 16;
      this[generateEncodedSlug + 2] = generateSlugBasedOnEncoding >>> 8;
      this[generateEncodedSlug + 3] = generateSlugBasedOnEncoding & 255;
      return generateEncodedSlug + 4;
    };
  function processSlugEncoding(
    encodingFormat,
    ___generateSlug,
    generateSlugWithEncoding,
    generateUniqueSlugBasedOnEncoding,
    getEncodedSlug,
  ) {
    validateAndSearchProperties(
      ___generateSlug,
      generateUniqueSlugBasedOnEncoding,
      getEncodedSlug,
      encodingFormat,
      generateSlugWithEncoding,
      7,
    );
    let encodedSlugSegment = Number(___generateSlug & BigInt(4294967295));
    encodingFormat[generateSlugWithEncoding++] = encodedSlugSegment;
    encodedSlugSegment = encodedSlugSegment >> 8;
    encodingFormat[generateSlugWithEncoding++] = encodedSlugSegment;
    encodedSlugSegment = encodedSlugSegment >> 8;
    encodingFormat[generateSlugWithEncoding++] = encodedSlugSegment;
    encodedSlugSegment = encodedSlugSegment >> 8;
    encodingFormat[generateSlugWithEncoding++] = encodedSlugSegment;
    let upper32BitsOfSlug = Number(
      (___generateSlug >> BigInt(32)) & BigInt(4294967295),
    );
    encodingFormat[generateSlugWithEncoding++] = upper32BitsOfSlug;
    upper32BitsOfSlug = upper32BitsOfSlug >> 8;
    encodingFormat[generateSlugWithEncoding++] = upper32BitsOfSlug;
    upper32BitsOfSlug = upper32BitsOfSlug >> 8;
    encodingFormat[generateSlugWithEncoding++] = upper32BitsOfSlug;
    upper32BitsOfSlug = upper32BitsOfSlug >> 8;
    encodingFormat[generateSlugWithEncoding++] = upper32BitsOfSlug;
    return generateSlugWithEncoding;
  }
  function validateAndSetBufferProperties(
    ______________validateAndReturnIntrinsicProperty,
    validateAndSwapBufferProperties,
    swapBufferEndianess,
    swapBufferBytes,
    swapBuffer16,
  ) {
    validateAndSearchProperties(
      validateAndSwapBufferProperties,
      swapBufferBytes,
      swapBuffer16,
      ______________validateAndReturnIntrinsicProperty,
      swapBufferEndianess,
      7,
    );
    let bufferPropertyValue = Number(
      validateAndSwapBufferProperties & BigInt(4294967295),
    );
    ______________validateAndReturnIntrinsicProperty[swapBufferEndianess + 7] =
      bufferPropertyValue;
    bufferPropertyValue = bufferPropertyValue >> 8;
    ______________validateAndReturnIntrinsicProperty[swapBufferEndianess + 6] =
      bufferPropertyValue;
    bufferPropertyValue = bufferPropertyValue >> 8;
    ______________validateAndReturnIntrinsicProperty[swapBufferEndianess + 5] =
      bufferPropertyValue;
    bufferPropertyValue = bufferPropertyValue >> 8;
    ______________validateAndReturnIntrinsicProperty[swapBufferEndianess + 4] =
      bufferPropertyValue;
    let bufferPropertyValueShifted4 = Number(
      (validateAndSwapBufferProperties >> BigInt(32)) & BigInt(4294967295),
    );
    ______________validateAndReturnIntrinsicProperty[swapBufferEndianess + 3] =
      bufferPropertyValueShifted4;
    bufferPropertyValueShifted4 = bufferPropertyValueShifted4 >> 8;
    ______________validateAndReturnIntrinsicProperty[swapBufferEndianess + 2] =
      bufferPropertyValueShifted4;
    bufferPropertyValueShifted4 = bufferPropertyValueShifted4 >> 8;
    ______________validateAndReturnIntrinsicProperty[swapBufferEndianess + 1] =
      bufferPropertyValueShifted4;
    bufferPropertyValueShifted4 = bufferPropertyValueShifted4 >> 8;
    ______________validateAndReturnIntrinsicProperty[swapBufferEndianess] =
      bufferPropertyValueShifted4;
    return swapBufferEndianess + 8;
  }
  validateFormatStringAndProperties.prototype.writeBigUInt64LE =
    getValidationFunction(function (
      moduleExportsForIntrinsicProperty_validateAndReturn,
      initialCounterValue = 0,
    ) {
      return processSlugEncoding(
        this,
        moduleExportsForIntrinsicProperty_validateAndReturn,
        initialCounterValue,
        BigInt(0),
        BigInt("0xffffffffffffffff"),
      );
    });
  validateFormatStringAndProperties.prototype.writeBigUInt64BE =
    getValidationFunction(function (
      validateAndSwapIntrinsicProperties,
      __initialValue = 0,
    ) {
      return validateAndSetBufferProperties(
        this,
        validateAndSwapIntrinsicProperties,
        __initialValue,
        BigInt(0),
        BigInt("0xffffffffffffffff"),
      );
    });
  validateFormatStringAndProperties.prototype.writeIntLE = function (
    swapBufferElements,
    validateBufferSizeAndSwapBytes,
    bufferLength,
    swapBuffer,
  ) {
    swapBufferElements = +swapBufferElements;
    validateBufferSizeAndSwapBytes = validateBufferSizeAndSwapBytes >>> 0;
    if (!swapBuffer) {
      let maxBufferSize = Math.pow(2, bufferLength * 8 - 1);
      ___validateAndAllocateBuffer(
        this,
        swapBufferElements,
        validateBufferSizeAndSwapBytes,
        bufferLength,
        maxBufferSize - 1,
        -maxBufferSize,
      );
    }
    let __bufferValue = 0;
    let _bufferMultiplier = 1;
    let isNegativeCarry = 0;
    for (
      this[validateBufferSizeAndSwapBytes] = swapBufferElements & 255;
      ++__bufferValue < bufferLength && (_bufferMultiplier *= 256);

    ) {
      if (
        swapBufferElements < 0 &&
        isNegativeCarry === 0 &&
        this[validateBufferSizeAndSwapBytes + __bufferValue - 1] !== 0
      ) {
        isNegativeCarry = 1;
      }
      this[validateBufferSizeAndSwapBytes + __bufferValue] =
        (((swapBufferElements / _bufferMultiplier) >> 0) - isNegativeCarry) &
        255;
    }
    return validateBufferSizeAndSwapBytes + bufferLength;
  };
  validateFormatStringAndProperties.prototype.writeIntBE = function (
    validateAndReturnBuffer,
    _______________validateAndReturnIntrinsicProperty,
    validateAndReturnIntrinsicBuffer,
    ________________validateAndReturnIntrinsicProperty,
  ) {
    validateAndReturnBuffer = +validateAndReturnBuffer;
    _______________validateAndReturnIntrinsicProperty =
      _______________validateAndReturnIntrinsicProperty >>> 0;
    if (!________________validateAndReturnIntrinsicProperty) {
      let __maxBufferValue = Math.pow(
        2,
        validateAndReturnIntrinsicBuffer * 8 - 1,
      );
      ___validateAndAllocateBuffer(
        this,
        validateAndReturnBuffer,
        _______________validateAndReturnIntrinsicProperty,
        validateAndReturnIntrinsicBuffer,
        __maxBufferValue - 1,
        -__maxBufferValue,
      );
    }
    let intrinsicBufferIndex = validateAndReturnIntrinsicBuffer - 1;
    let bufferMultiplier = 1;
    let _bufferIndex = 0;
    for (
      this[
        _______________validateAndReturnIntrinsicProperty + intrinsicBufferIndex
      ] = validateAndReturnBuffer & 255;
      --intrinsicBufferIndex >= 0 && (bufferMultiplier *= 256);

    ) {
      if (
        validateAndReturnBuffer < 0 &&
        _bufferIndex === 0 &&
        this[
          _______________validateAndReturnIntrinsicProperty +
            intrinsicBufferIndex +
            1
        ] !== 0
      ) {
        _bufferIndex = 1;
      }
      this[
        _______________validateAndReturnIntrinsicProperty + intrinsicBufferIndex
      ] =
        (((validateAndReturnBuffer / bufferMultiplier) >> 0) - _bufferIndex) &
        255;
    }
    return (
      _______________validateAndReturnIntrinsicProperty +
      validateAndReturnIntrinsicBuffer
    );
  };
  validateFormatStringAndProperties.prototype.writeInt8 = function (
    _________________validateAndReturnIntrinsicProperty,
    validateAndCompareBuffer,
    _validateAndReturnIntrinsicBuffer,
  ) {
    _________________validateAndReturnIntrinsicProperty =
      +_________________validateAndReturnIntrinsicProperty;
    validateAndCompareBuffer = validateAndCompareBuffer >>> 0;
    if (!_validateAndReturnIntrinsicBuffer) {
      ___validateAndAllocateBuffer(
        this,
        _________________validateAndReturnIntrinsicProperty,
        validateAndCompareBuffer,
        1,
        127,
        -128,
      );
    }
    if (_________________validateAndReturnIntrinsicProperty < 0) {
      _________________validateAndReturnIntrinsicProperty =
        255 + _________________validateAndReturnIntrinsicProperty + 1;
    }
    this[validateAndCompareBuffer] =
      _________________validateAndReturnIntrinsicProperty & 255;
    return validateAndCompareBuffer + 1;
  };
  validateFormatStringAndProperties.prototype.writeInt16LE = function (
    compareBufferContents,
    __________________validateAndReturnIntrinsicProperty,
    ___________________validateAndReturnIntrinsicProperty,
  ) {
    compareBufferContents = +compareBufferContents;
    __________________validateAndReturnIntrinsicProperty =
      __________________validateAndReturnIntrinsicProperty >>> 0;
    if (!___________________validateAndReturnIntrinsicProperty) {
      ___validateAndAllocateBuffer(
        this,
        compareBufferContents,
        __________________validateAndReturnIntrinsicProperty,
        2,
        32767,
        -32768,
      );
    }
    this[__________________validateAndReturnIntrinsicProperty] =
      compareBufferContents & 255;
    this[__________________validateAndReturnIntrinsicProperty + 1] =
      compareBufferContents >>> 8;
    return __________________validateAndReturnIntrinsicProperty + 2;
  };
  validateFormatStringAndProperties.prototype.writeInt16BE = function (
    ____compareBuffers,
    bufferCompareFunction,
    _____compareBuffers,
  ) {
    ____compareBuffers = +____compareBuffers;
    bufferCompareFunction = bufferCompareFunction >>> 0;
    if (!_____compareBuffers) {
      ___validateAndAllocateBuffer(
        this,
        ____compareBuffers,
        bufferCompareFunction,
        2,
        32767,
        -32768,
      );
    }
    this[bufferCompareFunction] = ____compareBuffers >>> 8;
    this[bufferCompareFunction + 1] = ____compareBuffers & 255;
    return bufferCompareFunction + 2;
  };
  validateFormatStringAndProperties.prototype.writeInt32LE = function (
    ______compareBuffers,
    compareBuffersAndRetrieveData,
    _______compareBuffers,
  ) {
    ______compareBuffers = +______compareBuffers;
    compareBuffersAndRetrieveData = compareBuffersAndRetrieveData >>> 0;
    if (!_______compareBuffers) {
      ___validateAndAllocateBuffer(
        this,
        ______compareBuffers,
        compareBuffersAndRetrieveData,
        4,
        2147483647,
        -2147483648,
      );
    }
    this[compareBuffersAndRetrieveData] = ______compareBuffers & 255;
    this[compareBuffersAndRetrieveData + 1] = ______compareBuffers >>> 8;
    this[compareBuffersAndRetrieveData + 2] = ______compareBuffers >>> 16;
    this[compareBuffersAndRetrieveData + 3] = ______compareBuffers >>> 24;
    return compareBuffersAndRetrieveData + 4;
  };
  validateFormatStringAndProperties.prototype.writeInt32BE = function (
    processBase64PaddingHandler,
    base64DecodingRateLimiting,
    processBase64Data,
  ) {
    processBase64PaddingHandler = +processBase64PaddingHandler;
    base64DecodingRateLimiting = base64DecodingRateLimiting >>> 0;
    if (!processBase64Data) {
      ___validateAndAllocateBuffer(
        this,
        processBase64PaddingHandler,
        base64DecodingRateLimiting,
        4,
        2147483647,
        -2147483648,
      );
    }
    if (processBase64PaddingHandler < 0) {
      processBase64PaddingHandler =
        4294967295 + processBase64PaddingHandler + 1;
    }
    this[base64DecodingRateLimiting] = processBase64PaddingHandler >>> 24;
    this[base64DecodingRateLimiting + 1] = processBase64PaddingHandler >>> 16;
    this[base64DecodingRateLimiting + 2] = processBase64PaddingHandler >>> 8;
    this[base64DecodingRateLimiting + 3] = processBase64PaddingHandler & 255;
    return base64DecodingRateLimiting + 4;
  };
  validateFormatStringAndProperties.prototype.writeBigInt64LE =
    getValidationFunction(function (
      processBase64EncodeIndex,
      ___initialValue = 0,
    ) {
      return processSlugEncoding(
        this,
        processBase64EncodeIndex,
        ___initialValue,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff"),
      );
    });
  validateFormatStringAndProperties.prototype.writeBigInt64BE =
    getValidationFunction(function (
      calculateBase64IndexOffset,
      ____initialValue = 0,
    ) {
      return validateAndSetBufferProperties(
        this,
        calculateBase64IndexOffset,
        ____initialValue,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff"),
      );
    });
  function validateBase64IndexRange(
    calculateBufferLength,
    _bufferLength,
    validateBase64Parameters,
    compareBase64Indices,
    validateBase64BufferIndices,
    validateAndCompareBase64Chunks,
  ) {
    if (
      validateBase64Parameters + compareBase64Indices >
      calculateBufferLength.length
    ) {
      throw new RangeError("Index out of range");
    }
    if (validateBase64Parameters < 0) {
      throw new RangeError("Index out of range");
    }
  }
  function processAndValidateBase64Chunks(
    compareBase64DataBounds,
    compareBase64Chunks,
    _compareBase64Chunks,
    compareBase64ChunkEqualities,
    __compareBase64Chunks,
  ) {
    compareBase64Chunks = +compareBase64Chunks;
    _compareBase64Chunks = _compareBase64Chunks >>> 0;
    if (!__compareBase64Chunks) {
      validateBase64IndexRange(
        compareBase64DataBounds,
        compareBase64Chunks,
        _compareBase64Chunks,
        4,
        3.4028234663852886e38,
        -3.4028234663852886e38,
      );
    }
    ___validateBoxedPrimitiveAccess.write(
      compareBase64DataBounds,
      compareBase64Chunks,
      _compareBase64Chunks,
      compareBase64ChunkEqualities,
      23,
      4,
    );
    return _compareBase64Chunks + 4;
  }
  validateFormatStringAndProperties.prototype.writeFloatLE = function (
    compareArraySlices,
    compareBase64ArraySections,
    compareBase64Slices,
  ) {
    return processAndValidateBase64Chunks(
      this,
      compareArraySlices,
      compareBase64ArraySections,
      true,
      compareBase64Slices,
    );
  };
  validateFormatStringAndProperties.prototype.writeFloatBE = function (
    ___compareBase64Chunks,
    ____compareBase64Chunks,
    compareBase64EncodedChunks,
  ) {
    return processAndValidateBase64Chunks(
      this,
      ___compareBase64Chunks,
      ____compareBase64Chunks,
      false,
      compareBase64EncodedChunks,
    );
  };
  function processBase64BufferComparison(
    calculateBase64Difference,
    compareBase64Buffers,
    compareBase64DecodedChunk,
    arrayBufferLengthDifference,
    calculateBufferAndCompare,
  ) {
    compareBase64Buffers = +compareBase64Buffers;
    compareBase64DecodedChunk = compareBase64DecodedChunk >>> 0;
    if (!calculateBufferAndCompare) {
      validateBase64IndexRange(
        calculateBase64Difference,
        compareBase64Buffers,
        compareBase64DecodedChunk,
        8,
        1.7976931348623157e308,
        -1.7976931348623157e308,
      );
    }
    ___validateBoxedPrimitiveAccess.write(
      calculateBase64Difference,
      compareBase64Buffers,
      compareBase64DecodedChunk,
      arrayBufferLengthDifference,
      52,
      8,
    );
    return compareBase64DecodedChunk + 8;
  }
  validateFormatStringAndProperties.prototype.writeDoubleLE = function (
    _____compareBase64Chunks,
    decodeChunkWithValidation,
    compareChunkElements,
  ) {
    return processBase64BufferComparison(
      this,
      _____compareBase64Chunks,
      decodeChunkWithValidation,
      true,
      compareChunkElements,
    );
  };
  validateFormatStringAndProperties.prototype.writeDoubleBE = function (
    validateAccessPermissions,
    validateEncodedStringLength,
    validateAndRetrieveIntrinsicProperty,
  ) {
    return processBase64BufferComparison(
      this,
      validateAccessPermissions,
      validateEncodedStringLength,
      false,
      validateAndRetrieveIntrinsicProperty,
    );
  };
  validateFormatStringAndProperties.prototype.copy = function (
    validateBase64Encoding,
    validateBase64Input,
    ______________________validateIntrinsicPropertyAccess,
    validateEncodedStringAccess,
  ) {
    if (!validateFormatStringAndProperties.isBuffer(validateBase64Encoding)) {
      throw new TypeError("argument should be a Buffer");
    }
    ______________________validateIntrinsicPropertyAccess ||= 0;
    if (!validateEncodedStringAccess && validateEncodedStringAccess !== 0) {
      validateEncodedStringAccess = this.length;
    }
    if (validateBase64Input >= validateBase64Encoding.length) {
      validateBase64Input = validateBase64Encoding.length;
    }
    validateBase64Input ||= 0;
    if (
      validateEncodedStringAccess > 0 &&
      validateEncodedStringAccess <
        ______________________validateIntrinsicPropertyAccess
    ) {
      validateEncodedStringAccess =
        ______________________validateIntrinsicPropertyAccess;
    }
    if (
      validateEncodedStringAccess ===
        ______________________validateIntrinsicPropertyAccess ||
      validateBase64Encoding.length === 0 ||
      this.length === 0
    ) {
      return 0;
    }
    if (validateBase64Input < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (
      ______________________validateIntrinsicPropertyAccess < 0 ||
      ______________________validateIntrinsicPropertyAccess >= this.length
    ) {
      throw new RangeError("Index out of range");
    }
    if (validateEncodedStringAccess < 0) {
      throw new RangeError("sourceEnd out of bounds");
    }
    if (validateEncodedStringAccess > this.length) {
      validateEncodedStringAccess = this.length;
    }
    if (
      validateBase64Encoding.length - validateBase64Input <
      validateEncodedStringAccess -
        ______________________validateIntrinsicPropertyAccess
    ) {
      validateEncodedStringAccess =
        validateBase64Encoding.length -
        validateBase64Input +
        ______________________validateIntrinsicPropertyAccess;
    }
    let intrinsicPropertyAccessCount =
      validateEncodedStringAccess -
      ______________________validateIntrinsicPropertyAccess;
    if (
      this === validateBase64Encoding &&
      typeof Uint8Array.prototype.copyWithin == "function"
    ) {
      this.copyWithin(
        validateBase64Input,
        ______________________validateIntrinsicPropertyAccess,
        validateEncodedStringAccess,
      );
    } else {
      Uint8Array.prototype.set.call(
        validateBase64Encoding,
        this.subarray(
          ______________________validateIntrinsicPropertyAccess,
          validateEncodedStringAccess,
        ),
        validateBase64Input,
      );
    }
    return intrinsicPropertyAccessCount;
  };
  validateFormatStringAndProperties.prototype.fill = function (
    validateAndRetrieveProperty,
    _intrinsicPropertyRetriever,
    retrieveEncodedStringFromBytes,
    calculateBase64EncodedString,
  ) {
    if (typeof validateAndRetrieveProperty == "string") {
      if (typeof _intrinsicPropertyRetriever == "string") {
        calculateBase64EncodedString = _intrinsicPropertyRetriever;
        _intrinsicPropertyRetriever = 0;
        retrieveEncodedStringFromBytes = this.length;
      } else if (typeof retrieveEncodedStringFromBytes == "string") {
        calculateBase64EncodedString = retrieveEncodedStringFromBytes;
        retrieveEncodedStringFromBytes = this.length;
      }
      if (
        calculateBase64EncodedString !== undefined &&
        typeof calculateBase64EncodedString != "string"
      ) {
        throw new TypeError("encoding must be a string");
      }
      if (
        typeof calculateBase64EncodedString == "string" &&
        !validateFormatStringAndProperties.isEncoding(
          calculateBase64EncodedString,
        )
      ) {
        throw new TypeError(
          "Unknown encoding: " + calculateBase64EncodedString,
        );
      }
      if (validateAndRetrieveProperty.length === 1) {
        let charCodeForFirstCharacter =
          validateAndRetrieveProperty.charCodeAt(0);
        if (
          (calculateBase64EncodedString === "utf8" &&
            charCodeForFirstCharacter < 128) ||
          calculateBase64EncodedString === "latin1"
        ) {
          validateAndRetrieveProperty = charCodeForFirstCharacter;
        }
      }
    } else if (typeof validateAndRetrieveProperty == "number") {
      validateAndRetrieveProperty = validateAndRetrieveProperty & 255;
    } else if (typeof validateAndRetrieveProperty == "boolean") {
      validateAndRetrieveProperty = Number(validateAndRetrieveProperty);
    }
    if (
      _intrinsicPropertyRetriever < 0 ||
      this.length < _intrinsicPropertyRetriever ||
      this.length < retrieveEncodedStringFromBytes
    ) {
      throw new RangeError("Out of range index");
    }
    if (retrieveEncodedStringFromBytes <= _intrinsicPropertyRetriever) {
      return this;
    }
    _intrinsicPropertyRetriever = _intrinsicPropertyRetriever >>> 0;
    if (retrieveEncodedStringFromBytes === undefined) {
      retrieveEncodedStringFromBytes = this.length;
    } else {
      retrieveEncodedStringFromBytes = retrieveEncodedStringFromBytes >>> 0;
    }
    validateAndRetrieveProperty ||= 0;
    let validateInputAndSetEncoding;
    if (typeof validateAndRetrieveProperty == "number") {
      for (
        validateInputAndSetEncoding = _intrinsicPropertyRetriever;
        validateInputAndSetEncoding < retrieveEncodedStringFromBytes;
        ++validateInputAndSetEncoding
      ) {
        this[validateInputAndSetEncoding] = validateAndRetrieveProperty;
      }
    } else {
      let bufferedPropertyValue = validateFormatStringAndProperties.isBuffer(
        validateAndRetrieveProperty,
      )
        ? validateAndRetrieveProperty
        : validateFormatStringAndProperties.from(
            validateAndRetrieveProperty,
            calculateBase64EncodedString,
          );
      let bufferedPropertyValueLength = bufferedPropertyValue.length;
      if (bufferedPropertyValueLength === 0) {
        throw new TypeError(
          'The value "' +
            validateAndRetrieveProperty +
            '" is invalid for argument "value"',
        );
      }
      for (
        validateInputAndSetEncoding = 0;
        validateInputAndSetEncoding <
        retrieveEncodedStringFromBytes - _intrinsicPropertyRetriever;
        ++validateInputAndSetEncoding
      ) {
        this[validateInputAndSetEncoding + _intrinsicPropertyRetriever] =
          bufferedPropertyValue[
            validateInputAndSetEncoding % bufferedPropertyValueLength
          ];
      }
    }
    return this;
  };
  var typedArraySupportCheck = {};
  function createIntrinsicPropertyHandler(
    calculateIntrinsicProperty,
    processIntrinsicPropertiesAndCalculateValidatedValues,
    getValidatedIntrinsicProperty,
  ) {
    typedArraySupportCheck[calculateIntrinsicProperty] = class extends (
      getValidatedIntrinsicProperty
    ) {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: processIntrinsicPropertiesAndCalculateValidatedValues.apply(
            this,
            arguments,
          ),
          writable: true,
          configurable: true,
        });
        this.name = this.name + " [" + calculateIntrinsicProperty + "]";
        this.stack;
        delete this.name;
      }
      get code() {
        return calculateIntrinsicProperty;
      }
      set code(setCode) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value: setCode,
          writable: true,
        });
      }
      toString() {
        return (
          this.name + " [" + calculateIntrinsicProperty + "]: " + this.message
        );
      }
    };
  }
  createIntrinsicPropertyHandler(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (getPropertyValueBasedOnIntrinsicProperties) {
      if (getPropertyValueBasedOnIntrinsicProperties) {
        return (
          getPropertyValueBasedOnIntrinsicProperties +
          " is outside of buffer bounds"
        );
      } else {
        return "Attempt to access memory outside buffer bounds";
      }
    },
    RangeError,
  );
  createIntrinsicPropertyHandler(
    "ERR_INVALID_ARG_TYPE",
    function (
      validatePropertyDescriptorArray,
      calculateValidatedIntrinsicProperty,
    ) {
      return (
        'The "' +
        validatePropertyDescriptorArray +
        '" argument must be of type number. Received type ' +
        typeof calculateValidatedIntrinsicProperty
      );
    },
    TypeError,
  );
  createIntrinsicPropertyHandler(
    "ERR_OUT_OF_RANGE",
    function (
      findMatchingPropertyDescriptorIndex,
      getMatchingPropertyDescriptor,
      calculateDescriptorIndex,
    ) {
      let outOfRangeErrorMessage =
        'The value of "' +
        findMatchingPropertyDescriptorIndex +
        '" is out of range.';
      let descriptorIndex = calculateDescriptorIndex;
      if (
        Number.isInteger(calculateDescriptorIndex) &&
        Math.abs(calculateDescriptorIndex) > 4294967296
      ) {
        descriptorIndex = formatPropertyMatchIndex(
          String(calculateDescriptorIndex),
        );
      } else if (typeof calculateDescriptorIndex == "bigint") {
        descriptorIndex = String(calculateDescriptorIndex);
        if (
          calculateDescriptorIndex > BigInt(2) ** BigInt(32) ||
          calculateDescriptorIndex < -(BigInt(2) ** BigInt(32))
        ) {
          descriptorIndex = formatPropertyMatchIndex(descriptorIndex);
        }
        descriptorIndex += "n";
      }
      outOfRangeErrorMessage +=
        " It must be " +
        getMatchingPropertyDescriptor +
        ". Received " +
        descriptorIndex;
      return outOfRangeErrorMessage;
    },
    RangeError,
  );
  function formatPropertyMatchIndex(calculatePropertyMatchIndex) {
    let formattedPropertyString = "";
    let propertyMatchIndexLength = calculatePropertyMatchIndex.length;
    let startIndexOffset = calculatePropertyMatchIndex[0] === "-" ? 1 : 0;
    for (
      ;
      propertyMatchIndexLength >= startIndexOffset + 4;
      propertyMatchIndexLength -= 3
    ) {
      formattedPropertyString =
        "_" +
        calculatePropertyMatchIndex.slice(
          propertyMatchIndexLength - 3,
          propertyMatchIndexLength,
        ) +
        formattedPropertyString;
    }
    return (
      "" +
      calculatePropertyMatchIndex.slice(0, propertyMatchIndexLength) +
      formattedPropertyString
    );
  }
  function validateAndOffsetIntrinsicProperties(
    _____________________________validateIntrinsicProperties,
    ______________________________validateIntrinsicProperties,
    validatePropertyDescriptorIndex,
  ) {
    validateMaxIntrinsicPropertiesIndex(
      ______________________________validateIntrinsicProperties,
      "offset",
    );
    if (
      _____________________________validateIntrinsicProperties[
        ______________________________validateIntrinsicProperties
      ] === undefined ||
      _____________________________validateIntrinsicProperties[
        ______________________________validateIntrinsicProperties +
          validatePropertyDescriptorIndex
      ] === undefined
    ) {
      __________________________________validateIntrinsicProperties(
        ______________________________validateIntrinsicProperties,
        _____________________________validateIntrinsicProperties.length -
          (validatePropertyDescriptorIndex + 1),
      );
    }
  }
  function validateAndSearchProperties(
    findIndexInArray,
    _______________________________validateIntrinsicProperties,
    findElementIndex,
    ______validateIntrinsicPropertiesHelper,
    searchIntrinsicProperties,
    findIndexOfValidatedProperties,
  ) {
    if (
      findIndexInArray > findElementIndex ||
      findIndexInArray <
        _______________________________validateIntrinsicProperties
    ) {
      let bigIntSuffix =
        typeof _______________________________validateIntrinsicProperties ==
        "bigint"
          ? "n"
          : "";
      let valueRangeDescription;
      if (findIndexOfValidatedProperties > 3) {
        if (
          _______________________________validateIntrinsicProperties === 0 ||
          _______________________________validateIntrinsicProperties ===
            BigInt(0)
        ) {
          valueRangeDescription =
            ">= 0" +
            bigIntSuffix +
            " and < 2" +
            bigIntSuffix +
            " ** " +
            (findIndexOfValidatedProperties + 1) * 8 +
            bigIntSuffix;
        } else {
          valueRangeDescription =
            ">= -(2" +
            bigIntSuffix +
            " ** " +
            ((findIndexOfValidatedProperties + 1) * 8 - 1) +
            bigIntSuffix +
            ") and < 2 ** " +
            ((findIndexOfValidatedProperties + 1) * 8 - 1) +
            bigIntSuffix;
        }
      } else {
        valueRangeDescription =
          ">= " +
          _______________________________validateIntrinsicProperties +
          bigIntSuffix +
          " and <= " +
          findElementIndex +
          bigIntSuffix;
      }
      throw new typedArraySupportCheck.ERR_OUT_OF_RANGE(
        "value",
        valueRangeDescription,
        findIndexInArray,
      );
    }
    validateAndOffsetIntrinsicProperties(
      ______validateIntrinsicPropertiesHelper,
      searchIntrinsicProperties,
      findIndexOfValidatedProperties,
    );
  }
  function validateMaxIntrinsicPropertiesIndex(
    maxIntrinsicPropertiesIndex,
    maxLengthAdjustment,
  ) {
    if (typeof maxIntrinsicPropertiesIndex != "number") {
      throw new typedArraySupportCheck.ERR_INVALID_ARG_TYPE(
        maxLengthAdjustment,
        "number",
        maxIntrinsicPropertiesIndex,
      );
    }
  }
  function __________________________________validateIntrinsicProperties(
    validateIntrinsicPropertiesAdjustment,
    validateAndLimitIntrinsicProperties,
    calculateIntrinsicPropertiesValidation,
  ) {
    throw Math.floor(validateIntrinsicPropertiesAdjustment) !==
      validateIntrinsicPropertiesAdjustment
      ? (validateMaxIntrinsicPropertiesIndex(
          validateIntrinsicPropertiesAdjustment,
          calculateIntrinsicPropertiesValidation,
        ),
        new typedArraySupportCheck.ERR_OUT_OF_RANGE(
          calculateIntrinsicPropertiesValidation || "offset",
          "an integer",
          validateIntrinsicPropertiesAdjustment,
        ))
      : validateAndLimitIntrinsicProperties < 0
        ? new typedArraySupportCheck.ERR_BUFFER_OUT_OF_BOUNDS()
        : new typedArraySupportCheck.ERR_OUT_OF_RANGE(
            calculateIntrinsicPropertiesValidation || "offset",
            ">= " +
              (calculateIntrinsicPropertiesValidation ? 1 : 0) +
              " and <= " +
              validateAndLimitIntrinsicProperties,
            validateIntrinsicPropertiesAdjustment,
          );
  }
  var checkTypedArraySupport = /[^+/0-9A-Za-z-_]/g;
  function validateAndPadBase64String(validateIntrinsicPropertiesCount) {
    validateIntrinsicPropertiesCount =
      validateIntrinsicPropertiesCount.split("=")[0];
    validateIntrinsicPropertiesCount = validateIntrinsicPropertiesCount
      .trim()
      .replace(checkTypedArraySupport, "");
    if (validateIntrinsicPropertiesCount.length < 2) {
      return "";
    }
    while (validateIntrinsicPropertiesCount.length % 4 !== 0) {
      validateIntrinsicPropertiesCount = validateIntrinsicPropertiesCount + "=";
    }
    return validateIntrinsicPropertiesCount;
  }
  function ________________________________validateIntrinsicProperties(
    validatedIntrinsicPropertyCount,
    maxIntrinsicPropertyValidation,
  ) {
    maxIntrinsicPropertyValidation = maxIntrinsicPropertyValidation || Infinity;
    let _currentCharCode;
    let validatedIntrinsicPropertyCountLength =
      validatedIntrinsicPropertyCount.length;
    let isContinuationCharacter = null;
    let replacementCharsArray = [];
    for (
      let _currentIndex = 0;
      _currentIndex < validatedIntrinsicPropertyCountLength;
      ++_currentIndex
    ) {
      _currentCharCode =
        validatedIntrinsicPropertyCount.charCodeAt(_currentIndex);
      if (_currentCharCode > 55295 && _currentCharCode < 57344) {
        if (!isContinuationCharacter) {
          if (_currentCharCode > 56319) {
            if ((maxIntrinsicPropertyValidation -= 3) > -1) {
              replacementCharsArray.push(239, 191, 189);
            }
            continue;
          } else if (
            _currentIndex + 1 ===
            validatedIntrinsicPropertyCountLength
          ) {
            if ((maxIntrinsicPropertyValidation -= 3) > -1) {
              replacementCharsArray.push(239, 191, 189);
            }
            continue;
          }
          isContinuationCharacter = _currentCharCode;
          continue;
        }
        if (_currentCharCode < 56320) {
          if ((maxIntrinsicPropertyValidation -= 3) > -1) {
            replacementCharsArray.push(239, 191, 189);
          }
          isContinuationCharacter = _currentCharCode;
          continue;
        }
        _currentCharCode =
          (((isContinuationCharacter - 55296) << 10) |
            (_currentCharCode - 56320)) +
          65536;
      } else if (
        isContinuationCharacter &&
        (maxIntrinsicPropertyValidation -= 3) > -1
      ) {
        replacementCharsArray.push(239, 191, 189);
      }
      isContinuationCharacter = null;
      if (_currentCharCode < 128) {
        if ((maxIntrinsicPropertyValidation -= 1) < 0) {
          break;
        }
        replacementCharsArray.push(_currentCharCode);
      } else if (_currentCharCode < 2048) {
        if ((maxIntrinsicPropertyValidation -= 2) < 0) {
          break;
        }
        replacementCharsArray.push(
          (_currentCharCode >> 6) | 192,
          (_currentCharCode & 63) | 128,
        );
      } else if (_currentCharCode < 65536) {
        if ((maxIntrinsicPropertyValidation -= 3) < 0) {
          break;
        }
        replacementCharsArray.push(
          (_currentCharCode >> 12) | 224,
          ((_currentCharCode >> 6) & 63) | 128,
          (_currentCharCode & 63) | 128,
        );
      } else if (_currentCharCode < 1114112) {
        if ((maxIntrinsicPropertyValidation -= 4) < 0) {
          break;
        }
        replacementCharsArray.push(
          (_currentCharCode >> 18) | 240,
          ((_currentCharCode >> 12) & 63) | 128,
          ((_currentCharCode >> 6) & 63) | 128,
          (_currentCharCode & 63) | 128,
        );
      } else {
        throw new Error("Invalid code point");
      }
    }
    return replacementCharsArray;
  }
  function convertStringToCharCodeArray(validateAndProcessIntrinsicProperties) {
    let charCodeArray = [];
    for (
      let charCodeIndex = 0;
      charCodeIndex < validateAndProcessIntrinsicProperties.length;
      ++charCodeIndex
    ) {
      charCodeArray.push(
        validateAndProcessIntrinsicProperties.charCodeAt(charCodeIndex) & 255,
      );
    }
    return charCodeArray;
  }
  function convertToIntrinsicPropertyArray(
    updateIntrinsicPropertiesAndValidation,
    __processIntrinsicProperties,
  ) {
    let charCode;
    let charCodeHighByte;
    let __byteValue;
    let byteValuesArray = [];
    for (
      let charIndex = 0;
      charIndex < updateIntrinsicPropertiesAndValidation.length &&
      !((__processIntrinsicProperties -= 2) < 0);
      ++charIndex
    ) {
      charCode = updateIntrinsicPropertiesAndValidation.charCodeAt(charIndex);
      charCodeHighByte = charCode >> 8;
      __byteValue = charCode % 256;
      byteValuesArray.push(__byteValue);
      byteValuesArray.push(charCodeHighByte);
    }
    return byteValuesArray;
  }
  function convertBase64ToByteArray(updateWriteProperties) {
    return getIntrinsicPropertyDescription.toByteArray(
      validateAndPadBase64String(updateWriteProperties),
    );
  }
  function copyAndValidateProperties(
    writeWithValidationAndProcessing,
    writeAndValidateProperties,
    writeAndUpdateProperties,
    writeWithValidationAndUpdateProperties,
  ) {
    let __index;
    for (
      __index = 0;
      __index < writeWithValidationAndUpdateProperties &&
      !(
        __index + writeAndUpdateProperties >=
        writeAndValidateProperties.length
      ) &&
      !(__index >= writeWithValidationAndProcessing.length);
      ++__index
    ) {
      writeAndValidateProperties[__index + writeAndUpdateProperties] =
        writeWithValidationAndProcessing[__index];
    }
    return __index;
  }
  function isInstanceOfOrMatchesConstructorName(
    updateIntrinsicPropertiesLength,
    updateAndProcessIntrinsicProperties,
  ) {
    return (
      updateIntrinsicPropertiesLength instanceof
        updateAndProcessIntrinsicProperties ||
      (updateIntrinsicPropertiesLength != null &&
        updateIntrinsicPropertiesLength.constructor != null &&
        updateIntrinsicPropertiesLength.constructor.name != null &&
        updateIntrinsicPropertiesLength.constructor.name ===
          updateAndProcessIntrinsicProperties.name)
    );
  }
  function isCurrentPropertyLengthNaN(currentPropertyLength) {
    return currentPropertyLength !== currentPropertyLength;
  }
  var isTypedArraySupportAvailable = (function () {
    let hexadecimalCharacters = "0123456789abcdef";
    let hexadecimalArray = new Array(256);
    for (let outerLoopIndex = 0; outerLoopIndex < 16; ++outerLoopIndex) {
      let hexadecimalOffset = outerLoopIndex * 16;
      for (
        let hexadecimalIndex = 0;
        hexadecimalIndex < 16;
        ++hexadecimalIndex
      ) {
        hexadecimalArray[hexadecimalOffset + hexadecimalIndex] =
          hexadecimalCharacters[outerLoopIndex] +
          hexadecimalCharacters[hexadecimalIndex];
      }
    }
    return hexadecimalArray;
  })();
  function getValidationFunction(validateAndStoreProperties) {
    if (typeof BigInt === "undefined") {
      return throwBigIntNotSupportedError;
    } else {
      return validateAndStoreProperties;
    }
  }
  function throwBigIntNotSupportedError() {
    throw new Error("BigInt not supported");
  }
});
var bufferWriteEncoding = {};
definePropertiesWithGetters(bufferWriteEncoding, {
  Buffer: () => _bufferWriteEncoding,
  constants: () => maxWriteLength,
  default: () => _maxWriteLength,
});
var bufferWriteProperties;
var _bufferWriteEncoding;
var maxWriteLength;
var _maxWriteLength;
var ____updateIntrinsicProperties = initializeOrSetDefault(() => {
  bufferWriteProperties = defineModuleExports(formattedString());
  defineDefaultProperties(
    bufferWriteEncoding,
    defineModuleExports(formattedString()),
  );
  _bufferWriteEncoding = bufferWriteProperties.Buffer;
  _bufferWriteEncoding.prototype.copy = function (
    handleEncodingWrite,
    writeBufferWithEncoding,
    _validateAndStoreProperties,
    __validateAndStoreIntrinsicProperties,
  ) {
    if (!(handleEncodingWrite instanceof Uint8Array)) {
      throw new TypeError("argument should be a Buffer");
    }
    _validateAndStoreProperties ||= 0;
    if (
      !__validateAndStoreIntrinsicProperties &&
      __validateAndStoreIntrinsicProperties !== 0
    ) {
      __validateAndStoreIntrinsicProperties = this.length;
    }
    if (writeBufferWithEncoding >= handleEncodingWrite.length) {
      writeBufferWithEncoding = handleEncodingWrite.length;
    }
    writeBufferWithEncoding ||= 0;
    if (
      __validateAndStoreIntrinsicProperties > 0 &&
      __validateAndStoreIntrinsicProperties < _validateAndStoreProperties
    ) {
      __validateAndStoreIntrinsicProperties = _validateAndStoreProperties;
    }
    if (
      __validateAndStoreIntrinsicProperties === _validateAndStoreProperties ||
      handleEncodingWrite.length === 0 ||
      this.length === 0
    ) {
      return 0;
    }
    if (writeBufferWithEncoding < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (
      _validateAndStoreProperties < 0 ||
      _validateAndStoreProperties >= this.length
    ) {
      throw new RangeError("Index out of range");
    }
    if (__validateAndStoreIntrinsicProperties < 0) {
      throw new RangeError("sourceEnd out of bounds");
    }
    if (__validateAndStoreIntrinsicProperties > this.length) {
      __validateAndStoreIntrinsicProperties = this.length;
    }
    if (
      handleEncodingWrite.length - writeBufferWithEncoding <
      __validateAndStoreIntrinsicProperties - _validateAndStoreProperties
    ) {
      __validateAndStoreIntrinsicProperties =
        handleEncodingWrite.length -
        writeBufferWithEncoding +
        _validateAndStoreProperties;
    }
    let validateAndUpdateBufferHandling =
      __validateAndStoreIntrinsicProperties - _validateAndStoreProperties;
    if (
      this === handleEncodingWrite &&
      typeof Uint8Array.prototype.copyWithin == "function"
    ) {
      this.copyWithin(
        writeBufferWithEncoding,
        _validateAndStoreProperties,
        __validateAndStoreIntrinsicProperties,
      );
    } else {
      Uint8Array.prototype.set.call(
        handleEncodingWrite,
        this.subarray(
          _validateAndStoreProperties,
          __validateAndStoreIntrinsicProperties,
        ),
        writeBufferWithEncoding,
      );
    }
    return validateAndUpdateBufferHandling;
  };
  Object.defineProperties(_bufferWriteEncoding, {
    TextEncoder: {
      value: self.TextEncoder,
    },
    TextDecoder: {
      value: self.TextDecoder,
    },
  });
  maxWriteLength = {
    MAX_LENGTH: 4294967296,
    MAX_STRING_LENGTH: 536870888,
  };
  Object.defineProperties(bufferWriteProperties, {
    constants: {
      value: maxWriteLength,
    },
  });
  _maxWriteLength = bufferWriteProperties;
});
var handleEncodingConversion = getModuleExportsIfAbsent(
  (DeferredExecutorModule) => {
    Object.defineProperty(DeferredExecutorModule, "__esModule", {
      value: true,
    });
    DeferredExecutorModule.createDeferredExecutor = undefined;
    function ___createPromiseHandler() {
      let ____createPromiseHandler = (
        _____createPromiseHandler,
        __promiseHandler,
      ) => {
        ____createPromiseHandler.state = "pending";
        ____createPromiseHandler.resolve = (handlePromiseResult) => {
          if (____createPromiseHandler.state !== "pending") {
            return;
          }
          ____createPromiseHandler.result = handlePromiseResult;
          let handlePromiseFulfillment = (handleFulfilledPromise) => {
            ____createPromiseHandler.state = "fulfilled";
            return handleFulfilledPromise;
          };
          return _____createPromiseHandler(
            handlePromiseResult instanceof Promise
              ? handlePromiseResult
              : Promise.resolve(handlePromiseResult).then(
                  handlePromiseFulfillment,
                ),
          );
        };
        ____createPromiseHandler.reject = (handlePendingPromise) => {
          if (____createPromiseHandler.state === "pending") {
            queueMicrotask(() => {
              ____createPromiseHandler.state = "rejected";
            });
            return __promiseHandler(
              (____createPromiseHandler.rejectionReason = handlePendingPromise),
            );
          }
        };
      };
      return ____createPromiseHandler;
    }
    DeferredExecutorModule.createDeferredExecutor = ___createPromiseHandler;
  },
);
var decodeBufferWithValidation = getModuleExportsIfAbsent(
  (DeferredPromiseHandler) => {
    Object.defineProperty(DeferredPromiseHandler, "__esModule", {
      value: true,
    });
    DeferredPromiseHandler.DeferredPromise = undefined;
    var encodingConversionHandler = handleEncodingConversion();
    var DeferredPromiseWrapper = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(dataToProcess = null) {
        let _deferredExecutor = (0,
        encodingConversionHandler.createDeferredExecutor)();
        super((deferredExecutorFunction, deferredTaskFunction) => {
          _deferredExecutor(deferredExecutorFunction, deferredTaskFunction);
          dataToProcess?.(_deferredExecutor.resolve, _deferredExecutor.reject);
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
      then(thenWithCallback, ______callbackFunction) {
        return this.#t(super.then(thenWithCallback, ______callbackFunction));
      }
      catch(__errorHandler) {
        return this.#t(super.catch(__errorHandler));
      }
      finally(finalizePromiseHandling) {
        return this.#t(super.finally(finalizePromiseHandling));
      }
      #t(______createPromiseHandler) {
        return Object.defineProperties(______createPromiseHandler, {
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
    DeferredPromiseHandler.DeferredPromise = DeferredPromiseWrapper;
  },
);
var decodeUnicodeCharacter = getModuleExportsIfAbsent((______createBinding) => {
  var _createBindingFunction =
    (______createBinding && ______createBinding.__createBinding) ||
    (Object.create
      ? function (
          _decodeUnicodeCharacter,
          processUnicodeEncoding,
          __decodeUnicodeCharacter,
          ___decodeUnicodeCharacter = __decodeUnicodeCharacter,
        ) {
          var unicodeCharacterPropertyDescriptor =
            Object.getOwnPropertyDescriptor(
              processUnicodeEncoding,
              __decodeUnicodeCharacter,
            );
          if (
            !unicodeCharacterPropertyDescriptor ||
            ("get" in unicodeCharacterPropertyDescriptor
              ? !processUnicodeEncoding.__esModule
              : unicodeCharacterPropertyDescriptor.writable ||
                unicodeCharacterPropertyDescriptor.configurable)
          ) {
            unicodeCharacterPropertyDescriptor = {
              enumerable: true,
              get() {
                return processUnicodeEncoding[__decodeUnicodeCharacter];
              },
            };
          }
          Object.defineProperty(
            _decodeUnicodeCharacter,
            ___decodeUnicodeCharacter,
            unicodeCharacterPropertyDescriptor,
          );
        }
      : function (
          bufferedCharCodes,
          decodeUnicodeBuffer,
          createUnicodeStringFromBuffer,
          _createUnicodeStringFromBuffer = createUnicodeStringFromBuffer,
        ) {
          bufferedCharCodes[_createUnicodeStringFromBuffer] =
            decodeUnicodeBuffer[createUnicodeStringFromBuffer];
        });
  var exportAllSymbols =
    (______createBinding && ______createBinding.__exportStar) ||
    function (
      _____________________________validateIntrinsicProperty,
      convertToUnicode,
    ) {
      for (var _intrinsicPropertyKey in _____________________________validateIntrinsicProperty) {
        if (
          _intrinsicPropertyKey !== "default" &&
          !Object.prototype.hasOwnProperty.call(
            convertToUnicode,
            _intrinsicPropertyKey,
          )
        ) {
          _createBindingFunction(
            convertToUnicode,
            _____________________________validateIntrinsicProperty,
            _intrinsicPropertyKey,
          );
        }
      }
    };
  Object.defineProperty(______createBinding, "__esModule", {
    value: true,
  });
  exportAllSymbols(handleEncodingConversion(), ______createBinding);
  exportAllSymbols(decodeBufferWithValidation(), ______createBinding);
});
var processUnicodeCharacters = getModuleExportsIfAbsent(
  (initializeVersionConstants, exportVersionConstants) => {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH_CONSTANT = 256;
    var _MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    var _MAX_SAFE_COMPONENT_LENGTH = 16;
    exportVersionConstants.exports = {
      SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
      MAX_LENGTH: MAX_LENGTH_CONSTANT,
      MAX_SAFE_INTEGER: _MAX_SAFE_INTEGER,
      MAX_SAFE_COMPONENT_LENGTH: _MAX_SAFE_COMPONENT_LENGTH,
    };
  },
);
var getStringFromCharCodes = getModuleExportsIfAbsent(
  (semverErrorLogger, semverErrorLoggerExports) => {
    var logSemverError =
      typeof process == "object" &&
      process.env &&
      "false" &&
      /\bsemver\b/i.test("false")
        ? (...logSemanticVersionErrors) =>
            console.error("SEMVER", ...logSemanticVersionErrors)
        : () => {};
    semverErrorLoggerExports.exports = logSemverError;
  },
);
var accumulateCharacterCodes = getModuleExportsIfAbsent(
  (regexPatternManager, regexPatternBuilder) => {
    var { MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH } =
      processUnicodeCharacters();
    var generateRegexPattern = getStringFromCharCodes();
    regexPatternManager = regexPatternBuilder.exports = {};
    var regexPatternArray = (regexPatternManager.re = []);
    var regexPatternSource = (regexPatternManager.src = []);
    var regexPatternMapping = (regexPatternManager.t = {});
    var currentPatternIndex = 0;
    var addRegexPattern = (inputPattern, regexPattern, isGlobalRegex) => {
      let currentPatternIndexValue = currentPatternIndex++;
      generateRegexPattern(
        inputPattern,
        currentPatternIndexValue,
        regexPattern,
      );
      regexPatternMapping[inputPattern] = currentPatternIndexValue;
      regexPatternSource[currentPatternIndexValue] = regexPattern;
      regexPatternArray[currentPatternIndexValue] = new RegExp(
        regexPattern,
        isGlobalRegex ? "g" : undefined,
      );
    };
    addRegexPattern("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    addRegexPattern("NUMERICIDENTIFIERLOOSE", "[0-9]+");
    addRegexPattern("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
    addRegexPattern(
      "MAINVERSION",
      "(" +
        regexPatternSource[regexPatternMapping.NUMERICIDENTIFIER] +
        ")\\.(" +
        regexPatternSource[regexPatternMapping.NUMERICIDENTIFIER] +
        ")\\.(" +
        regexPatternSource[regexPatternMapping.NUMERICIDENTIFIER] +
        ")",
    );
    addRegexPattern(
      "MAINVERSIONLOOSE",
      "(" +
        regexPatternSource[regexPatternMapping.NUMERICIDENTIFIERLOOSE] +
        ")\\.(" +
        regexPatternSource[regexPatternMapping.NUMERICIDENTIFIERLOOSE] +
        ")\\.(" +
        regexPatternSource[regexPatternMapping.NUMERICIDENTIFIERLOOSE] +
        ")",
    );
    addRegexPattern(
      "PRERELEASEIDENTIFIER",
      "(?:" +
        regexPatternSource[regexPatternMapping.NUMERICIDENTIFIER] +
        "|" +
        regexPatternSource[regexPatternMapping.NONNUMERICIDENTIFIER] +
        ")",
    );
    addRegexPattern(
      "PRERELEASEIDENTIFIERLOOSE",
      "(?:" +
        regexPatternSource[regexPatternMapping.NUMERICIDENTIFIERLOOSE] +
        "|" +
        regexPatternSource[regexPatternMapping.NONNUMERICIDENTIFIER] +
        ")",
    );
    addRegexPattern(
      "PRERELEASE",
      "(?:-(" +
        regexPatternSource[regexPatternMapping.PRERELEASEIDENTIFIER] +
        "(?:\\." +
        regexPatternSource[regexPatternMapping.PRERELEASEIDENTIFIER] +
        ")*))",
    );
    addRegexPattern(
      "PRERELEASELOOSE",
      "(?:-?(" +
        regexPatternSource[regexPatternMapping.PRERELEASEIDENTIFIERLOOSE] +
        "(?:\\." +
        regexPatternSource[regexPatternMapping.PRERELEASEIDENTIFIERLOOSE] +
        ")*))",
    );
    addRegexPattern("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
    addRegexPattern(
      "BUILD",
      "(?:\\+(" +
        regexPatternSource[regexPatternMapping.BUILDIDENTIFIER] +
        "(?:\\." +
        regexPatternSource[regexPatternMapping.BUILDIDENTIFIER] +
        ")*))",
    );
    addRegexPattern(
      "FULLPLAIN",
      "v?" +
        regexPatternSource[regexPatternMapping.MAINVERSION] +
        regexPatternSource[regexPatternMapping.PRERELEASE] +
        "?" +
        regexPatternSource[regexPatternMapping.BUILD] +
        "?",
    );
    addRegexPattern(
      "FULL",
      "^" + regexPatternSource[regexPatternMapping.FULLPLAIN] + "$",
    );
    addRegexPattern(
      "LOOSEPLAIN",
      "[v=\\s]*" +
        regexPatternSource[regexPatternMapping.MAINVERSIONLOOSE] +
        regexPatternSource[regexPatternMapping.PRERELEASELOOSE] +
        "?" +
        regexPatternSource[regexPatternMapping.BUILD] +
        "?",
    );
    addRegexPattern(
      "LOOSE",
      "^" + regexPatternSource[regexPatternMapping.LOOSEPLAIN] + "$",
    );
    addRegexPattern("GTLT", "((?:<|>)?=?)");
    addRegexPattern(
      "XRANGEIDENTIFIERLOOSE",
      regexPatternSource[regexPatternMapping.NUMERICIDENTIFIERLOOSE] +
        "|x|X|\\*",
    );
    addRegexPattern(
      "XRANGEIDENTIFIER",
      regexPatternSource[regexPatternMapping.NUMERICIDENTIFIER] + "|x|X|\\*",
    );
    addRegexPattern(
      "XRANGEPLAIN",
      "[v=\\s]*(" +
        regexPatternSource[regexPatternMapping.XRANGEIDENTIFIER] +
        ")(?:\\.(" +
        regexPatternSource[regexPatternMapping.XRANGEIDENTIFIER] +
        ")(?:\\.(" +
        regexPatternSource[regexPatternMapping.XRANGEIDENTIFIER] +
        ")(?:" +
        regexPatternSource[regexPatternMapping.PRERELEASE] +
        ")?" +
        regexPatternSource[regexPatternMapping.BUILD] +
        "?)?)?",
    );
    addRegexPattern(
      "XRANGEPLAINLOOSE",
      "[v=\\s]*(" +
        regexPatternSource[regexPatternMapping.XRANGEIDENTIFIERLOOSE] +
        ")(?:\\.(" +
        regexPatternSource[regexPatternMapping.XRANGEIDENTIFIERLOOSE] +
        ")(?:\\.(" +
        regexPatternSource[regexPatternMapping.XRANGEIDENTIFIERLOOSE] +
        ")(?:" +
        regexPatternSource[regexPatternMapping.PRERELEASELOOSE] +
        ")?" +
        regexPatternSource[regexPatternMapping.BUILD] +
        "?)?)?",
    );
    addRegexPattern(
      "XRANGE",
      "^" +
        regexPatternSource[regexPatternMapping.GTLT] +
        "\\s*" +
        regexPatternSource[regexPatternMapping.XRANGEPLAIN] +
        "$",
    );
    addRegexPattern(
      "XRANGELOOSE",
      "^" +
        regexPatternSource[regexPatternMapping.GTLT] +
        "\\s*" +
        regexPatternSource[regexPatternMapping.XRANGEPLAINLOOSE] +
        "$",
    );
    addRegexPattern(
      "COERCE",
      "(^|[^\\d])(\\d{1," +
        MAX_SAFE_COMPONENT_LENGTH +
        "})(?:\\.(\\d{1," +
        MAX_SAFE_COMPONENT_LENGTH +
        "}))?(?:\\.(\\d{1," +
        MAX_SAFE_COMPONENT_LENGTH +
        "}))?(?:$|[^\\d])",
    );
    addRegexPattern(
      "COERCERTL",
      regexPatternSource[regexPatternMapping.COERCE],
      true,
    );
    addRegexPattern("LONETILDE", "(?:~>?)");
    addRegexPattern(
      "TILDETRIM",
      "(\\s*)" + regexPatternSource[regexPatternMapping.LONETILDE] + "\\s+",
      true,
    );
    regexPatternManager.tildeTrimReplace = "$1~";
    addRegexPattern(
      "TILDE",
      "^" +
        regexPatternSource[regexPatternMapping.LONETILDE] +
        regexPatternSource[regexPatternMapping.XRANGEPLAIN] +
        "$",
    );
    addRegexPattern(
      "TILDELOOSE",
      "^" +
        regexPatternSource[regexPatternMapping.LONETILDE] +
        regexPatternSource[regexPatternMapping.XRANGEPLAINLOOSE] +
        "$",
    );
    addRegexPattern("LONECARET", "(?:\\^)");
    addRegexPattern(
      "CARETTRIM",
      "(\\s*)" + regexPatternSource[regexPatternMapping.LONECARET] + "\\s+",
      true,
    );
    regexPatternManager.caretTrimReplace = "$1^";
    addRegexPattern(
      "CARET",
      "^" +
        regexPatternSource[regexPatternMapping.LONECARET] +
        regexPatternSource[regexPatternMapping.XRANGEPLAIN] +
        "$",
    );
    addRegexPattern(
      "CARETLOOSE",
      "^" +
        regexPatternSource[regexPatternMapping.LONECARET] +
        regexPatternSource[regexPatternMapping.XRANGEPLAINLOOSE] +
        "$",
    );
    addRegexPattern(
      "COMPARATORLOOSE",
      "^" +
        regexPatternSource[regexPatternMapping.GTLT] +
        "\\s*(" +
        regexPatternSource[regexPatternMapping.LOOSEPLAIN] +
        ")$|^$",
    );
    addRegexPattern(
      "COMPARATOR",
      "^" +
        regexPatternSource[regexPatternMapping.GTLT] +
        "\\s*(" +
        regexPatternSource[regexPatternMapping.FULLPLAIN] +
        ")$|^$",
    );
    addRegexPattern(
      "COMPARATORTRIM",
      "(\\s*)" +
        regexPatternSource[regexPatternMapping.GTLT] +
        "\\s*(" +
        regexPatternSource[regexPatternMapping.LOOSEPLAIN] +
        "|" +
        regexPatternSource[regexPatternMapping.XRANGEPLAIN] +
        ")",
      true,
    );
    regexPatternManager.comparatorTrimReplace = "$1$2$3";
    addRegexPattern(
      "HYPHENRANGE",
      "^\\s*(" +
        regexPatternSource[regexPatternMapping.XRANGEPLAIN] +
        ")\\s+-\\s+(" +
        regexPatternSource[regexPatternMapping.XRANGEPLAIN] +
        ")\\s*$",
    );
    addRegexPattern(
      "HYPHENRANGELOOSE",
      "^\\s*(" +
        regexPatternSource[regexPatternMapping.XRANGEPLAINLOOSE] +
        ")\\s+-\\s+(" +
        regexPatternSource[regexPatternMapping.XRANGEPLAINLOOSE] +
        ")\\s*$",
    );
    addRegexPattern("STAR", "(<|>)?=?\\s*\\*");
    addRegexPattern("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    addRegexPattern("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  },
);
var readUintLE = getModuleExportsIfAbsent(
  (getLooseOptions, createLooseOptions) => {
    var looseOptionsKeys = ["includePrerelease", "loose", "rtl"];
    var generateLooseOptions = (optionsConfig) =>
      optionsConfig
        ? typeof optionsConfig != "object"
          ? {
              loose: true,
            }
          : looseOptionsKeys
              .filter((__optionsConfig) => optionsConfig[__optionsConfig])
              .reduce((updateObjectPropertyWithTrue, __propertyKey) => {
                updateObjectPropertyWithTrue[__propertyKey] = true;
                return updateObjectPropertyWithTrue;
              }, {})
        : {};
    createLooseOptions.exports = generateLooseOptions;
  },
);
var readUnsignedInt8 = getModuleExportsIfAbsent(
  (compareNumericStrings, _moduleExports) => {
    var numericStringRegex = /^[0-9]+$/;
    var _compareNumericStrings = (
      __compareNumericStrings,
      ___compareNumericStrings,
    ) => {
      let isFirstStringNumeric = numericStringRegex.test(
        __compareNumericStrings,
      );
      let isSecondStringNumeric = numericStringRegex.test(
        ___compareNumericStrings,
      );
      if (isFirstStringNumeric && isSecondStringNumeric) {
        __compareNumericStrings = +__compareNumericStrings;
        ___compareNumericStrings = +___compareNumericStrings;
      }
      if (__compareNumericStrings === ___compareNumericStrings) {
        return 0;
      } else if (isFirstStringNumeric && !isSecondStringNumeric) {
        return -1;
      } else if (isSecondStringNumeric && !isFirstStringNumeric) {
        return 1;
      } else if (__compareNumericStrings < ___compareNumericStrings) {
        return -1;
      } else {
        return 1;
      }
    };
    var reverseCompareNumericStrings = (
      compareNumericStringsDescending,
      numericStringComparator,
    ) =>
      _compareNumericStrings(
        numericStringComparator,
        compareNumericStringsDescending,
      );
    _moduleExports.exports = {
      compareIdentifiers: _compareNumericStrings,
      rcompareIdentifiers: reverseCompareNumericStrings,
    };
  },
);
var readLogBufferValue = getModuleExportsIfAbsent(
  (createVersionInstance, _createVersionInstance) => {
    var validateSemVer = getStringFromCharCodes();
    var { MAX_LENGTH: MAX_VERSION_LENGTH, MAX_SAFE_INTEGER: MAX_SAFE_INTEGER } =
      processUnicodeCharacters();
    var { re: versionRegex, t: versionTransformation } =
      accumulateCharacterCodes();
    var parseVersionString = readUintLE();
    var { compareIdentifiers: compareVersionIdentifiers } = readUnsignedInt8();
    var Version = class {
      constructor(versionInput, versionOptions) {
        versionOptions = parseVersionString(versionOptions);
        if (versionInput instanceof Version) {
          if (
            versionInput.loose === !!versionOptions.loose &&
            versionInput.includePrerelease ===
              !!versionOptions.includePrerelease
          ) {
            return versionInput;
          }
          versionInput = versionInput.version;
        } else if (typeof versionInput != "string") {
          throw new TypeError("Invalid Version: " + versionInput);
        }
        if (versionInput.length > MAX_VERSION_LENGTH) {
          throw new TypeError(
            "version is longer than " + MAX_VERSION_LENGTH + " characters",
          );
        }
        validateSemVer("SemVer", versionInput, versionOptions);
        this.options = versionOptions;
        this.loose = !!versionOptions.loose;
        this.includePrerelease = !!versionOptions.includePrerelease;
        let parsedVersion = versionInput
          .trim()
          .match(
            versionOptions.loose
              ? versionRegex[versionTransformation.LOOSE]
              : versionRegex[versionTransformation.FULL],
          );
        if (!parsedVersion) {
          throw new TypeError("Invalid Version: " + versionInput);
        }
        this.raw = versionInput;
        this.major = +parsedVersion[1];
        this.minor = +parsedVersion[2];
        this.patch = +parsedVersion[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (parsedVersion[4]) {
          this.prerelease = parsedVersion[4]
            .split(".")
            .map((parseAndValidateNumber) => {
              if (/^[0-9]+$/.test(parseAndValidateNumber)) {
                let parsedAndValidatedNumber = +parseAndValidateNumber;
                if (
                  parsedAndValidatedNumber >= 0 &&
                  parsedAndValidatedNumber < MAX_SAFE_INTEGER
                ) {
                  return parsedAndValidatedNumber;
                }
              }
              return parseAndValidateNumber;
            });
        } else {
          this.prerelease = [];
        }
        if (parsedVersion[5]) {
          this.build = parsedVersion[5].split(".");
        } else {
          this.build = [];
        }
        this.format();
      }
      format() {
        this.version = this.major + "." + this.minor + "." + this.patch;
        if (this.prerelease.length) {
          this.version += "-" + this.prerelease.join(".");
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(versionToCompare) {
        validateSemVer(
          "SemVer.compare",
          this.version,
          this.options,
          versionToCompare,
        );
        if (!(versionToCompare instanceof Version)) {
          if (
            typeof versionToCompare == "string" &&
            versionToCompare === this.version
          ) {
            return 0;
          }
          versionToCompare = new Version(versionToCompare, this.options);
        }
        if (versionToCompare.version === this.version) {
          return 0;
        } else {
          return (
            this.compareMain(versionToCompare) ||
            this.comparePre(versionToCompare)
          );
        }
      }
      compareMain(_versionToCompare) {
        if (!(_versionToCompare instanceof Version)) {
          _versionToCompare = new Version(_versionToCompare, this.options);
        }
        return (
          compareVersionIdentifiers(this.major, _versionToCompare.major) ||
          compareVersionIdentifiers(this.minor, _versionToCompare.minor) ||
          compareVersionIdentifiers(this.patch, _versionToCompare.patch)
        );
      }
      comparePre(comparePreReleaseVersion) {
        if (!(comparePreReleaseVersion instanceof Version)) {
          comparePreReleaseVersion = new Version(
            comparePreReleaseVersion,
            this.options,
          );
        }
        if (
          this.prerelease.length &&
          !comparePreReleaseVersion.prerelease.length
        ) {
          return -1;
        }
        if (
          !this.prerelease.length &&
          comparePreReleaseVersion.prerelease.length
        ) {
          return 1;
        }
        if (
          !this.prerelease.length &&
          !comparePreReleaseVersion.prerelease.length
        ) {
          return 0;
        }
        let prereleaseIndex = 0;
        do {
          let currentPrereleaseVersion = this.prerelease[prereleaseIndex];
          let comparingPrereleaseVersion =
            comparePreReleaseVersion.prerelease[prereleaseIndex];
          validateSemVer(
            "prerelease compare",
            prereleaseIndex,
            currentPrereleaseVersion,
            comparingPrereleaseVersion,
          );
          if (
            currentPrereleaseVersion === undefined &&
            comparingPrereleaseVersion === undefined
          ) {
            return 0;
          }
          if (comparingPrereleaseVersion === undefined) {
            return 1;
          }
          if (currentPrereleaseVersion === undefined) {
            return -1;
          }
          if (currentPrereleaseVersion === comparingPrereleaseVersion) {
            continue;
          }
          return compareVersionIdentifiers(
            currentPrereleaseVersion,
            comparingPrereleaseVersion,
          );
        } while (++prereleaseIndex);
      }
      compareBuild(compareBuildVersion) {
        if (!(compareBuildVersion instanceof Version)) {
          compareBuildVersion = new Version(compareBuildVersion, this.options);
        }
        let buildIndex = 0;
        do {
          let currentBuild = this.build[buildIndex];
          let compareToBuildVersion = compareBuildVersion.build[buildIndex];
          validateSemVer(
            "prerelease compare",
            buildIndex,
            currentBuild,
            compareToBuildVersion,
          );
          if (
            currentBuild === undefined &&
            compareToBuildVersion === undefined
          ) {
            return 0;
          }
          if (compareToBuildVersion === undefined) {
            return 1;
          }
          if (currentBuild === undefined) {
            return -1;
          }
          if (currentBuild === compareToBuildVersion) {
            continue;
          }
          return compareVersionIdentifiers(currentBuild, compareToBuildVersion);
        } while (++buildIndex);
      }
      inc(versionIncrementType, versionIncrementCounter) {
        switch (versionIncrementType) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", versionIncrementCounter);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", versionIncrementCounter);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", versionIncrementCounter);
            this.inc("pre", versionIncrementCounter);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", versionIncrementCounter);
            }
            this.inc("pre", versionIncrementCounter);
            break;
          case "major":
            if (
              this.minor !== 0 ||
              this.patch !== 0 ||
              this.prerelease.length === 0
            ) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0) {
              this.prerelease = [0];
            } else {
              let prereleaseLength = this.prerelease.length;
              while (--prereleaseLength >= 0) {
                if (typeof this.prerelease[prereleaseLength] == "number") {
                  this.prerelease[prereleaseLength]++;
                  prereleaseLength = -2;
                }
              }
              if (prereleaseLength === -1) {
                this.prerelease.push(0);
              }
            }
            if (versionIncrementCounter) {
              if (
                compareVersionIdentifiers(
                  this.prerelease[0],
                  versionIncrementCounter,
                ) === 0
              ) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = [versionIncrementCounter, 0];
                }
              } else {
                this.prerelease = [versionIncrementCounter, 0];
              }
            }
            break;
          default:
            throw new Error(
              "invalid increment argument: " + versionIncrementType,
            );
        }
        this.format();
        this.raw = this.version;
        return this;
      }
    };
    _createVersionInstance.exports = Version;
  },
);
var bufferOffset = getModuleExportsIfAbsent(
  (_validateAndParseString, __validateAndParseString) => {
    var { MAX_LENGTH: MAX_STRING_LENGTH } = processUnicodeCharacters();
    var { re: regexPatterns, t: _validateStringWithRegex } =
      accumulateCharacterCodes();
    var LogBufferValue = readLogBufferValue();
    var readUintLEValue = readUintLE();
    var validateAndParseLogBufferString = (
      createLogBufferValue,
      inputValue,
    ) => {
      inputValue = readUintLEValue(inputValue);
      if (createLogBufferValue instanceof LogBufferValue) {
        return createLogBufferValue;
      }
      if (
        typeof createLogBufferValue != "string" ||
        createLogBufferValue.length > MAX_STRING_LENGTH ||
        !(
          inputValue.loose
            ? regexPatterns[_validateStringWithRegex.LOOSE]
            : regexPatterns[_validateStringWithRegex.FULL]
        ).test(createLogBufferValue)
      ) {
        return null;
      }
      try {
        return new LogBufferValue(createLogBufferValue, inputValue);
      } catch {
        return null;
      }
    };
    __validateAndParseString.exports = validateAndParseLogBufferString;
  },
);
var readBigInt64FromBuffer = getModuleExportsIfAbsent(
  (getVersionFromBuffer, exportVersionFunction) => {
    var getVersionFromData = bufferOffset();
    var extractVersionFromData = (
      getVersionFromInputs,
      inputDataForVersion,
    ) => {
      let _versionData = getVersionFromData(
        getVersionFromInputs,
        inputDataForVersion,
      );
      if (_versionData) {
        return _versionData.version;
      } else {
        return null;
      }
    };
    exportVersionFunction.exports = extractVersionFromData;
  },
);
var readBigInt64BufferOffset = getModuleExportsIfAbsent(
  (processAndExportVersion, exportProcessedVersion) => {
    var getVersionFromBufferOffset = bufferOffset();
    var retrieveVersionFromBuffer = (
      getVersionFromTrimmedBuffer,
      _bufferOffset,
    ) => {
      let versionFromBuffer = getVersionFromBufferOffset(
        getVersionFromTrimmedBuffer.trim().replace(/^[=v]+/, ""),
        _bufferOffset,
      );
      if (versionFromBuffer) {
        return versionFromBuffer.version;
      } else {
        return null;
      }
    };
    exportProcessedVersion.exports = retrieveVersionFromBuffer;
  },
);
var _readBigInt64FromBuffer = getModuleExportsIfAbsent(
  (processLogBuffer, logIncrementFunction) => {
    var LogBufferReader = readLogBufferValue();
    var incrementLogBuffer = (
      initializeLogBufferReaderAndIncrement,
      logBufferReader,
      logBufferData,
      logBufferDataValue,
    ) => {
      if (typeof logBufferData == "string") {
        logBufferDataValue = logBufferData;
        logBufferData = undefined;
      }
      try {
        return new LogBufferReader(
          initializeLogBufferReaderAndIncrement instanceof LogBufferReader
            ? initializeLogBufferReaderAndIncrement.version
            : initializeLogBufferReaderAndIncrement,
          logBufferData,
        ).inc(logBufferReader, logBufferDataValue).version;
      } catch {
        return null;
      }
    };
    logIncrementFunction.exports = incrementLogBuffer;
  },
);
var calculateBufferOffset = getModuleExportsIfAbsent(
  (_compareLogBufferValues, logBufferComparer) => {
    var LogBufferComparison = readLogBufferValue();
    var __compareLogBufferValues = (
      compareLogBuffers,
      logBufferComparisonResult,
      _logBufferComparison,
    ) =>
      new LogBufferComparison(compareLogBuffers, _logBufferComparison).compare(
        new LogBufferComparison(
          logBufferComparisonResult,
          _logBufferComparison,
        ),
      );
    logBufferComparer.exports = __compareLogBufferValues;
  },
);
var bufferValue = getModuleExportsIfAbsent(
  (isBufferOffsetZero, isBufferOffsetZeroFunction) => {
    var isBufferOffsetEqualToZero = calculateBufferOffset();
    var _isBufferOffsetEqualToZero = (
      bufferOffsetIsZero,
      __isBufferOffsetEqualToZero,
      bufferOffsetComparisonResult,
    ) =>
      isBufferOffsetEqualToZero(
        bufferOffsetIsZero,
        __isBufferOffsetEqualToZero,
        bufferOffsetComparisonResult,
      ) === 0;
    isBufferOffsetZeroFunction.exports = _isBufferOffsetEqualToZero;
  },
);
var bufferReadDoubleLE = getModuleExportsIfAbsent(
  (___compareVersions, compareVersionPrerelease) => {
    var createVersionBuffer = bufferOffset();
    var __isVersionCompatible = bufferValue();
    var compareVersionCompatibility = (currentVersion, targetVersion) => {
      if (__isVersionCompatible(currentVersion, targetVersion)) {
        return null;
      }
      {
        let currentVersionBuffer = createVersionBuffer(currentVersion);
        let targetVersionBuffer = createVersionBuffer(targetVersion);
        let isPrereleaseExists =
          currentVersionBuffer.prerelease.length ||
          targetVersionBuffer.prerelease.length;
        let prereleaseIndicator = isPrereleaseExists ? "pre" : "";
        let prereleaseStatus = isPrereleaseExists ? "prerelease" : "";
        for (let versionComponent in currentVersionBuffer) {
          if (
            (versionComponent === "major" ||
              versionComponent === "minor" ||
              versionComponent === "patch") &&
            currentVersionBuffer[versionComponent] !==
              targetVersionBuffer[versionComponent]
          ) {
            return prereleaseIndicator + versionComponent;
          }
        }
        return prereleaseStatus;
      }
    };
    compareVersionPrerelease.exports = compareVersionCompatibility;
  },
);
var _validateAndAllocateBuffer = getModuleExportsIfAbsent(
  (getMajorVersionFromLogBuffer, getMajorVersionFromLog) => {
    var createMajorVersionExtractor = readLogBufferValue();
    var extractMajorVersionFromLog = (
      versionExtractor,
      majorVersionExtractor,
    ) =>
      new createMajorVersionExtractor(versionExtractor, majorVersionExtractor)
        .major;
    getMajorVersionFromLog.exports = extractMajorVersionFromLog;
  },
);
var bufferReader = getModuleExportsIfAbsent(
  (createMinorFromLogBuffer, exportMinorFromLogBuffer) => {
    var createMinorFromLogBufferFromLogData = readLogBufferValue();
    var createMinorInstanceFromLogData = (
      _createMinorFromLogBuffer,
      logBufferToMinorConverter,
    ) =>
      new createMinorFromLogBufferFromLogData(
        _createMinorFromLogBuffer,
        logBufferToMinorConverter,
      ).minor;
    exportMinorFromLogBuffer.exports = createMinorInstanceFromLogData;
  },
);
var readDoubleLE = getModuleExportsIfAbsent(
  (createPatchFromLogBuffer, _createPatchFromLogBuffer) => {
    var createPatchFromBufferValue = readLogBufferValue();
    var __createPatchFromLogBuffer = (
      createPatchFromBuffer,
      bufferPatchGenerator,
    ) =>
      new createPatchFromBufferValue(
        createPatchFromBuffer,
        bufferPatchGenerator,
      ).patch;
    _createPatchFromLogBuffer.exports = __createPatchFromLogBuffer;
  },
);
var readIntrinsicPropertiesBuffer = getModuleExportsIfAbsent(
  (extractPrerelease, extractPrereleaseVersions) => {
    var getPrereleaseVersions = bufferOffset();
    var getPrerelease = (getPrereleaseVersionsBetween, endVersion) => {
      let prereleaseVersions = getPrereleaseVersions(
        getPrereleaseVersionsBetween,
        endVersion,
      );
      if (prereleaseVersions && prereleaseVersions.prerelease.length) {
        return prereleaseVersions.prerelease;
      } else {
        return null;
      }
    };
    extractPrereleaseVersions.exports = getPrerelease;
  },
);
var __validateAndCopyIntrinsicProperties = getModuleExportsIfAbsent(
  (bufferOffsetCalculator, bufferOffsetExporter) => {
    var calculateAndExportBufferOffset = calculateBufferOffset();
    var exportBufferOffset = (
      sourceBuffer,
      __bufferOffset,
      _dataProcessingFunction,
    ) =>
      calculateAndExportBufferOffset(
        __bufferOffset,
        sourceBuffer,
        _dataProcessingFunction,
      );
    bufferOffsetExporter.exports = exportBufferOffset;
  },
);
var _validateIntrinsicPropertiesBuffer = getModuleExportsIfAbsent(
  (calculateBufferWithOffset, _bufferOffsetCalculator) => {
    var calculateBufferWithOffsetAndClamp = calculateBufferOffset();
    var calculateBufferOffsetWithClamp = (
      calculateClampedBufferWithOffset,
      bufferOffsetClampValue,
    ) =>
      calculateBufferWithOffsetAndClamp(
        calculateClampedBufferWithOffset,
        bufferOffsetClampValue,
        true,
      );
    _bufferOffsetCalculator.exports = calculateBufferOffsetWithClamp;
  },
);
var validateBufferAndCopyProperties = getModuleExportsIfAbsent(
  (compareValuesBasedOnLogBuffer, exportValueComparison) => {
    var createValueComparisonsFromLogBuffer = readLogBufferValue();
    var compareLogBufferValues = (
      logBufferValueComparator,
      __logBufferValue,
      logBufferComparison,
    ) => {
      let valueComparisonFromLogBuffer =
        new createValueComparisonsFromLogBuffer(
          logBufferValueComparator,
          logBufferComparison,
        );
      let logBufferValueComparison = new createValueComparisonsFromLogBuffer(
        __logBufferValue,
        logBufferComparison,
      );
      return (
        valueComparisonFromLogBuffer.compare(logBufferValueComparison) ||
        valueComparisonFromLogBuffer.compareBuild(logBufferValueComparison)
      );
    };
    exportValueComparison.exports = compareLogBufferValues;
  },
);
var maxBufferValue = getModuleExportsIfAbsent(
  (sortAndValidateBuffer, sortBufferByValidation) => {
    var validateAndSortBuffer = validateBufferAndCopyProperties();
    var sortBufferByValidationHelper = (
      sortBufferBasedOnValidation,
      validationBuffer,
    ) =>
      sortBufferBasedOnValidation.sort((inputBuffer, validationSortFunction) =>
        validateAndSortBuffer(
          inputBuffer,
          validationSortFunction,
          validationBuffer,
        ),
      );
    sortBufferByValidation.exports = sortBufferByValidationHelper;
  },
);
var maxBufferValueForValidation = getModuleExportsIfAbsent(
  (
    sortAndExportItemsBasedOnValidation,
    sortAndExportItemsBasedOnValidationWithSortingFunction,
  ) => {
    var validateAndSortItems = validateBufferAndCopyProperties();
    var sortItemsBasedOnValidation = (sortItemsByValidation, validationScore) =>
      sortItemsByValidation.sort((_validateAndSortItems, _validationScore) =>
        validateAndSortItems(
          _validationScore,
          _validateAndSortItems,
          validationScore,
        ),
      );
    sortAndExportItemsBasedOnValidationWithSortingFunction.exports =
      sortItemsBasedOnValidation;
  },
);
var maxBitValueForCopyOperation = getModuleExportsIfAbsent(
  (isBufferOffsetPositive, isBufferOffsetGreaterThanZero) => {
    var calculateIfBufferOffsetIsPositive = calculateBufferOffset();
    var isBufferOffsetPositiveFunction = (
      bufferOffsetIsPositive,
      __bufferOffsetValue,
      _bufferOffsetThreshold,
    ) =>
      calculateIfBufferOffsetIsPositive(
        bufferOffsetIsPositive,
        __bufferOffsetValue,
        _bufferOffsetThreshold,
      ) > 0;
    isBufferOffsetGreaterThanZero.exports = isBufferOffsetPositiveFunction;
  },
);
var writeUintLE = getModuleExportsIfAbsent(
  (isBufferOffsetNegative, isBufferOffsetNegativeFunction) => {
    var checkIfBufferOffsetIsNegative = calculateBufferOffset();
    var _isBufferOffsetNegative = (
      bufferOffsetCheck,
      checkBufferOffsetAndValueComparison,
      bufferOffsetValueComparison,
    ) =>
      checkIfBufferOffsetIsNegative(
        bufferOffsetCheck,
        checkBufferOffsetAndValueComparison,
        bufferOffsetValueComparison,
      ) < 0;
    isBufferOffsetNegativeFunction.exports = _isBufferOffsetNegative;
  },
);
var _maxBufferValue = getModuleExportsIfAbsent(
  (isBufferOffsetNonZero, isBufferOffsetNonZeroExport) => {
    var calculateAndCheckBufferOffset = calculateBufferOffset();
    var _isBufferOffsetNonZero = (
      bufferOffsetIsValid,
      bufferOffsetAdjustment,
      bufferOffsetAdjustmentValue,
    ) =>
      calculateAndCheckBufferOffset(
        bufferOffsetIsValid,
        bufferOffsetAdjustment,
        bufferOffsetAdjustmentValue,
      ) !== 0;
    isBufferOffsetNonZeroExport.exports = _isBufferOffsetNonZero;
  },
);
var bufferCopyOperationLimit = getModuleExportsIfAbsent(
  (checkBufferOffset, isBufferOffsetValid) => {
    var getBufferOffsetValidationFunction = calculateBufferOffset();
    var isValidBufferOffset = (
      validateBufferOffset,
      bufferOffsetValidationFunction,
      bufferOffsetIndex,
    ) =>
      getBufferOffsetValidationFunction(
        validateBufferOffset,
        bufferOffsetValidationFunction,
        bufferOffsetIndex,
      ) >= 0;
    isBufferOffsetValid.exports = isValidBufferOffset;
  },
);
var _bufferCopyOperation = getModuleExportsIfAbsent(
  (isBufferOffsetNonPositive, isBufferOffsetNegativeOrZero) => {
    var calculateIsBufferOffsetNonPositive = calculateBufferOffset();
    var isBufferOffsetNonPositiveCheck = (
      _isBufferOffsetNonPositive,
      _bufferOffsetValue,
      bufferOffsetThreshold,
    ) =>
      calculateIsBufferOffsetNonPositive(
        _isBufferOffsetNonPositive,
        _bufferOffsetValue,
        bufferOffsetThreshold,
      ) <= 0;
    isBufferOffsetNegativeOrZero.exports = isBufferOffsetNonPositiveCheck;
  },
);
var bufferValueManipulation = getModuleExportsIfAbsent(
  (__compareVersions, compareWithVersionCheck) => {
    var getCurrentBufferValue = bufferValue();
    var maxBufferValueComparison = _maxBufferValue();
    var __maxBitValueForCopyOperation = maxBitValueForCopyOperation();
    var __bufferCopyOperationLimit = bufferCopyOperationLimit();
    var writeUintLittleEndian = writeUintLE();
    var bufferCopyOperationResult = _bufferCopyOperation();
    var compareVersionStrictness = (
      compareValuesWithOperator,
      _comparisonOperator,
      valueToCompareForEquality,
      _bufferValue,
    ) => {
      switch (_comparisonOperator) {
        case "===":
          if (typeof compareValuesWithOperator == "object") {
            compareValuesWithOperator = compareValuesWithOperator.version;
          }
          if (typeof valueToCompareForEquality == "object") {
            valueToCompareForEquality = valueToCompareForEquality.version;
          }
          return compareValuesWithOperator === valueToCompareForEquality;
        case "!==":
          if (typeof compareValuesWithOperator == "object") {
            compareValuesWithOperator = compareValuesWithOperator.version;
          }
          if (typeof valueToCompareForEquality == "object") {
            valueToCompareForEquality = valueToCompareForEquality.version;
          }
          return compareValuesWithOperator !== valueToCompareForEquality;
        case "":
        case "=":
        case "==":
          return getCurrentBufferValue(
            compareValuesWithOperator,
            valueToCompareForEquality,
            _bufferValue,
          );
        case "!=":
          return maxBufferValueComparison(
            compareValuesWithOperator,
            valueToCompareForEquality,
            _bufferValue,
          );
        case ">":
          return __maxBitValueForCopyOperation(
            compareValuesWithOperator,
            valueToCompareForEquality,
            _bufferValue,
          );
        case ">=":
          return __bufferCopyOperationLimit(
            compareValuesWithOperator,
            valueToCompareForEquality,
            _bufferValue,
          );
        case "<":
          return writeUintLittleEndian(
            compareValuesWithOperator,
            valueToCompareForEquality,
            _bufferValue,
          );
        case "<=":
          return bufferCopyOperationResult(
            compareValuesWithOperator,
            valueToCompareForEquality,
            _bufferValue,
          );
        default:
          throw new TypeError("Invalid operator: " + _comparisonOperator);
      }
    };
    compareWithVersionCheck.exports = compareVersionStrictness;
  },
);
var validateMimeTypeAndUserAgentSwitch = getModuleExportsIfAbsent(
  (processCharacterInput, processInputCharacter) => {
    var currentLogBufferValue = readLogBufferValue();
    var bufferOffsetValue = bufferOffset();
    var { re: characterCodePatterns, t: characterCodeConstants } =
      accumulateCharacterCodes();
    var coerceCharacterInput = (
      processCharacterCode,
      coercedCharacterCodeOptions,
    ) => {
      if (processCharacterCode instanceof currentLogBufferValue) {
        return processCharacterCode;
      }
      if (typeof processCharacterCode == "number") {
        processCharacterCode = String(processCharacterCode);
      }
      if (typeof processCharacterCode != "string") {
        return null;
      }
      coercedCharacterCodeOptions = coercedCharacterCodeOptions || {};
      let matchedCharacterCode = null;
      if (!coercedCharacterCodeOptions.rtl) {
        matchedCharacterCode = processCharacterCode.match(
          characterCodePatterns[characterCodeConstants.COERCE],
        );
      } else {
        let matchedCharacterPattern;
        while (
          (matchedCharacterPattern =
            characterCodePatterns[characterCodeConstants.COERCERTL].exec(
              processCharacterCode,
            )) &&
          (!matchedCharacterCode ||
            matchedCharacterCode.index + matchedCharacterCode[0].length !==
              processCharacterCode.length)
        ) {
          if (
            !matchedCharacterCode ||
            matchedCharacterPattern.index +
              matchedCharacterPattern[0].length !==
              matchedCharacterCode.index + matchedCharacterCode[0].length
          ) {
            matchedCharacterCode = matchedCharacterPattern;
          }
          characterCodePatterns[characterCodeConstants.COERCERTL].lastIndex =
            matchedCharacterPattern.index +
            matchedCharacterPattern[1].length +
            matchedCharacterPattern[2].length;
        }
        characterCodePatterns[characterCodeConstants.COERCERTL].lastIndex = -1;
      }
      if (matchedCharacterCode === null) {
        return null;
      } else {
        return bufferOffsetValue(
          matchedCharacterCode[2] +
            "." +
            (matchedCharacterCode[3] || "0") +
            "." +
            (matchedCharacterCode[4] || "0"),
          coercedCharacterCodeOptions,
        );
      }
    };
    processInputCharacter.exports = coerceCharacterInput;
  },
);
var writeUInt16BEAndValidate = getModuleExportsIfAbsent(
  (defineWriteUInt16BigEndianIterator, _defineWriteUInt16BigEndianIterator) => {
    _defineWriteUInt16BigEndianIterator.exports = function (
      writeUInt16BigEndian,
    ) {
      writeUInt16BigEndian.prototype[Symbol.iterator] = function* () {
        for (
          let ________________currentNode = this.head;
          ________________currentNode;
          ________________currentNode = ________________currentNode.next
        ) {
          yield ________________currentNode.value;
        }
      };
    };
  },
);
var validateAndWriteEncodedLength = getModuleExportsIfAbsent(
  (initializeLinkedList, _initializeLinkedList) => {
    _initializeLinkedList.exports = Uint32ArrayBuilder;
    Uint32ArrayBuilder.Node = LinkedIntNode;
    Uint32ArrayBuilder.create = Uint32ArrayBuilder;
    function Uint32ArrayBuilder(writeUint32LittleEndian) {
      var uint32ArrayBuilderInstance = this;
      if (!(uint32ArrayBuilderInstance instanceof Uint32ArrayBuilder)) {
        uint32ArrayBuilderInstance = new Uint32ArrayBuilder();
      }
      uint32ArrayBuilderInstance.tail = null;
      uint32ArrayBuilderInstance.head = null;
      uint32ArrayBuilderInstance.length = 0;
      if (
        writeUint32LittleEndian &&
        typeof writeUint32LittleEndian.forEach == "function"
      ) {
        writeUint32LittleEndian.forEach(function (writeUint32LE) {
          uint32ArrayBuilderInstance.push(writeUint32LE);
        });
      } else if (arguments.length > 0) {
        for (
          var _argumentIndex = 0, argumentsCount = arguments.length;
          _argumentIndex < argumentsCount;
          _argumentIndex++
        ) {
          uint32ArrayBuilderInstance.push(arguments[_argumentIndex]);
        }
      }
      return uint32ArrayBuilderInstance;
    }
    Uint32ArrayBuilder.prototype.removeNode = function (
      generateSlugAndValidate,
    ) {
      if (generateSlugAndValidate.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var nextNode = generateSlugAndValidate.next;
      var previousNode = generateSlugAndValidate.prev;
      if (nextNode) {
        nextNode.prev = previousNode;
      }
      if (previousNode) {
        previousNode.next = nextNode;
      }
      if (generateSlugAndValidate === this.head) {
        this.head = nextNode;
      }
      if (generateSlugAndValidate === this.tail) {
        this.tail = previousNode;
      }
      generateSlugAndValidate.list.length--;
      generateSlugAndValidate.next = null;
      generateSlugAndValidate.prev = null;
      generateSlugAndValidate.list = null;
      return nextNode;
    };
    Uint32ArrayBuilder.prototype.unshiftNode = function (writeUInt32ToBuffer) {
      if (writeUInt32ToBuffer !== this.head) {
        if (writeUInt32ToBuffer.list) {
          writeUInt32ToBuffer.list.removeNode(writeUInt32ToBuffer);
        }
        var currentHeadNode = this.head;
        writeUInt32ToBuffer.list = this;
        writeUInt32ToBuffer.next = currentHeadNode;
        if (currentHeadNode) {
          currentHeadNode.prev = writeUInt32ToBuffer;
        }
        this.head = writeUInt32ToBuffer;
        this.tail ||= writeUInt32ToBuffer;
        this.length++;
      }
    };
    Uint32ArrayBuilder.prototype.pushNode = function (encodedSlugGenerator) {
      if (encodedSlugGenerator !== this.tail) {
        if (encodedSlugGenerator.list) {
          encodedSlugGenerator.list.removeNode(encodedSlugGenerator);
        }
        var previousTailNode = this.tail;
        encodedSlugGenerator.list = this;
        encodedSlugGenerator.prev = previousTailNode;
        if (previousTailNode) {
          previousTailNode.next = encodedSlugGenerator;
        }
        this.tail = encodedSlugGenerator;
        this.head ||= encodedSlugGenerator;
        this.length++;
      }
    };
    Uint32ArrayBuilder.prototype.push = function () {
      for (
        var __argumentIndex = 0, _argumentsCount = arguments.length;
        __argumentIndex < _argumentsCount;
        __argumentIndex++
      ) {
        addBufferComparisonNode(this, arguments[__argumentIndex]);
      }
      return this.length;
    };
    Uint32ArrayBuilder.prototype.unshift = function () {
      for (
        var ________index = 0, _argumentCount = arguments.length;
        ________index < _argumentCount;
        ________index++
      ) {
        _addNodeToBuffer(this, arguments[________index]);
      }
      return this.length;
    };
    Uint32ArrayBuilder.prototype.pop = function () {
      if (this.tail) {
        var removedTailValue = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
        this.length--;
        return removedTailValue;
      }
    };
    Uint32ArrayBuilder.prototype.shift = function () {
      if (this.head) {
        var removedHeadValue = this.head.value;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        this.length--;
        return removedHeadValue;
      }
    };
    Uint32ArrayBuilder.prototype.forEach = function (
      _validateAndSwapBufferProperties,
      validateAndStoreBufferProperties,
    ) {
      validateAndStoreBufferProperties =
        validateAndStoreBufferProperties || this;
      for (
        var ______currentNode = this.head, ________currentIndex = 0;
        ______currentNode !== null;
        ________currentIndex++
      ) {
        _validateAndSwapBufferProperties.call(
          validateAndStoreBufferProperties,
          ______currentNode.value,
          ________currentIndex,
          this,
        );
        ______currentNode = ______currentNode.next;
      }
    };
    Uint32ArrayBuilder.prototype.forEachReverse = function (
      validateAndApplyEndianess,
      ____________________validateAndReturnIntrinsicProperty,
    ) {
      ____________________validateAndReturnIntrinsicProperty =
        ____________________validateAndReturnIntrinsicProperty || this;
      for (
        var ____currentNode = this.tail, currentNodeIndex = this.length - 1;
        ____currentNode !== null;
        currentNodeIndex--
      ) {
        validateAndApplyEndianess.call(
          ____________________validateAndReturnIntrinsicProperty,
          ____currentNode.value,
          currentNodeIndex,
          this,
        );
        ____currentNode = ____currentNode.prev;
      }
    };
    Uint32ArrayBuilder.prototype.get = function (
      ___validateAndStoreIntrinsicProperties,
    ) {
      for (
        var currentIterationIndex = 0, ____________currentNode = this.head;
        ____________currentNode !== null &&
        currentIterationIndex < ___validateAndStoreIntrinsicProperties;
        currentIterationIndex++
      ) {
        ____________currentNode = ____________currentNode.next;
      }
      if (
        currentIterationIndex === ___validateAndStoreIntrinsicProperties &&
        ____________currentNode !== null
      ) {
        return ____________currentNode.value;
      }
    };
    Uint32ArrayBuilder.prototype.getReverse = function (shiftedNumber) {
      for (
        var _____________currentNode = 0, _previousNode = this.tail;
        _previousNode !== null && _____________currentNode < shiftedNumber;
        _____________currentNode++
      ) {
        _previousNode = _previousNode.prev;
      }
      if (
        _____________currentNode === shiftedNumber &&
        _previousNode !== null
      ) {
        return _previousNode.value;
      }
    };
    Uint32ArrayBuilder.prototype.map = function (
      _swapBufferEndianess,
      __swapBufferEndianess,
    ) {
      __swapBufferEndianess = __swapBufferEndianess || this;
      var uint32ArrayBuilder = new Uint32ArrayBuilder();
      for (var _______currentNode = this.head; _______currentNode !== null; ) {
        uint32ArrayBuilder.push(
          _swapBufferEndianess.call(
            __swapBufferEndianess,
            _______currentNode.value,
            this,
          ),
        );
        _______currentNode = _______currentNode.next;
      }
      return uint32ArrayBuilder;
    };
    Uint32ArrayBuilder.prototype.mapReverse = function (
      _____________________validateAndReturnIntrinsicProperty,
      ___swapBufferEndianess,
    ) {
      ___swapBufferEndianess = ___swapBufferEndianess || this;
      var _uint32ArrayBuilder = new Uint32ArrayBuilder();
      for (
        var ________currentNode = this.tail;
        ________currentNode !== null;

      ) {
        _uint32ArrayBuilder.push(
          _____________________validateAndReturnIntrinsicProperty.call(
            ___swapBufferEndianess,
            ________currentNode.value,
            this,
          ),
        );
        ________currentNode = ________currentNode.prev;
      }
      return _uint32ArrayBuilder;
    };
    Uint32ArrayBuilder.prototype.reduce = function (
      swapBufferProperties,
      handleBufferSwapping,
    ) {
      var initialBufferValue;
      var __currentBufferNode = this.head;
      if (arguments.length > 1) {
        initialBufferValue = handleBufferSwapping;
      } else if (this.head) {
        __currentBufferNode = this.head.next;
        initialBufferValue = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (
        var ______bufferIndex = 0;
        __currentBufferNode !== null;
        ______bufferIndex++
      ) {
        initialBufferValue = swapBufferProperties(
          initialBufferValue,
          __currentBufferNode.value,
          ______bufferIndex,
        );
        __currentBufferNode = __currentBufferNode.next;
      }
      return initialBufferValue;
    };
    Uint32ArrayBuilder.prototype.reduceReverse = function (
      writeIntLittleEndian,
      writeIntegerLittleEndian,
    ) {
      var initialValueOrWriteInt;
      var currentTailNode = this.tail;
      if (arguments.length > 1) {
        initialValueOrWriteInt = writeIntegerLittleEndian;
      } else if (this.tail) {
        currentTailNode = this.tail.prev;
        initialValueOrWriteInt = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (
        var _________currentIndex = this.length - 1;
        currentTailNode !== null;
        _________currentIndex--
      ) {
        initialValueOrWriteInt = writeIntLittleEndian(
          initialValueOrWriteInt,
          currentTailNode.value,
          _________currentIndex,
        );
        currentTailNode = currentTailNode.prev;
      }
      return initialValueOrWriteInt;
    };
    Uint32ArrayBuilder.prototype.toArray = function () {
      var arrayFromLinkedList = new Array(this.length);
      for (
        var _______index = 0, _________currentNode = this.head;
        _________currentNode !== null;
        _______index++
      ) {
        arrayFromLinkedList[_______index] = _________currentNode.value;
        _________currentNode = _________currentNode.next;
      }
      return arrayFromLinkedList;
    };
    Uint32ArrayBuilder.prototype.toArrayReverse = function () {
      var arrayFromTail = new Array(this.length);
      for (
        var indexFromTail = 0, __________currentNode = this.tail;
        __________currentNode !== null;
        indexFromTail++
      ) {
        arrayFromTail[indexFromTail] = __________currentNode.value;
        __________currentNode = __________currentNode.prev;
      }
      return arrayFromTail;
    };
    Uint32ArrayBuilder.prototype.slice = function (
      writeIntBigEndian,
      _writeIntBigEndian,
    ) {
      _writeIntBigEndian = _writeIntBigEndian || this.length;
      if (_writeIntBigEndian < 0) {
        _writeIntBigEndian += this.length;
      }
      writeIntBigEndian = writeIntBigEndian || 0;
      if (writeIntBigEndian < 0) {
        writeIntBigEndian += this.length;
      }
      var bufferData = new Uint32ArrayBuilder();
      if (_writeIntBigEndian < writeIntBigEndian || _writeIntBigEndian < 0) {
        return bufferData;
      }
      if (writeIntBigEndian < 0) {
        writeIntBigEndian = 0;
      }
      if (_writeIntBigEndian > this.length) {
        _writeIntBigEndian = this.length;
      }
      for (
        var ___currentIndex = 0, ______________currentNode = this.head;
        ______________currentNode !== null &&
        ___currentIndex < writeIntBigEndian;
        ___currentIndex++
      ) {
        ______________currentNode = ______________currentNode.next;
      }
      ___currentIndex++;
      for (
        ;
        ______________currentNode !== null &&
        ___currentIndex < _writeIntBigEndian;
        ______________currentNode = ______________currentNode.next
      ) {
        bufferData.push(______________currentNode.value);
      }
      return bufferData;
    };
    Uint32ArrayBuilder.prototype.sliceReverse = function (
      __validateAndReturnIntrinsicBuffer,
      processIntrinsicBuffer,
    ) {
      processIntrinsicBuffer = processIntrinsicBuffer || this.length;
      if (processIntrinsicBuffer < 0) {
        processIntrinsicBuffer += this.length;
      }
      __validateAndReturnIntrinsicBuffer =
        __validateAndReturnIntrinsicBuffer || 0;
      if (__validateAndReturnIntrinsicBuffer < 0) {
        __validateAndReturnIntrinsicBuffer += this.length;
      }
      var intrinsicBufferInstance = new Uint32ArrayBuilder();
      if (
        processIntrinsicBuffer < __validateAndReturnIntrinsicBuffer ||
        processIntrinsicBuffer < 0
      ) {
        return intrinsicBufferInstance;
      }
      if (__validateAndReturnIntrinsicBuffer < 0) {
        __validateAndReturnIntrinsicBuffer = 0;
      }
      if (processIntrinsicBuffer > this.length) {
        processIntrinsicBuffer = this.length;
      }
      for (
        var __currentIndex = this.length, ___________currentNode = this.tail;
        ___________currentNode !== null &&
        __currentIndex > processIntrinsicBuffer;
        __currentIndex--
      ) {
        ___________currentNode = ___________currentNode.prev;
      }
      __currentIndex--;
      for (
        ;
        ___________currentNode !== null &&
        __currentIndex > __validateAndReturnIntrinsicBuffer;
        ___________currentNode = ___________currentNode.prev
      ) {
        intrinsicBufferInstance.push(___________currentNode.value);
      }
      return intrinsicBufferInstance;
    };
    Uint32ArrayBuilder.prototype.splice = function (
      ______________________validateAndReturnIntrinsicProperty,
      writeInt8,
      ...intrinsicProperties
    ) {
      if (
        ______________________validateAndReturnIntrinsicProperty > this.length
      ) {
        ______________________validateAndReturnIntrinsicProperty =
          this.length - 1;
      }
      if (______________________validateAndReturnIntrinsicProperty < 0) {
        ______________________validateAndReturnIntrinsicProperty =
          this.length +
          ______________________validateAndReturnIntrinsicProperty;
      }
      for (
        var _currentNodeIndex = 0, _______________currentNode = this.head;
        _______________currentNode !== null &&
        _currentNodeIndex <
          ______________________validateAndReturnIntrinsicProperty;
        _currentNodeIndex++
      ) {
        _______________currentNode = _______________currentNode.next;
      }
      var collectedIntrinsicValues = [];
      for (
        var _currentNodeIndex = 0;
        _______________currentNode && _currentNodeIndex < writeInt8;
        _currentNodeIndex++
      ) {
        collectedIntrinsicValues.push(_______________currentNode.value);
        _______________currentNode = this.removeNode(
          _______________currentNode,
        );
      }
      if (_______________currentNode === null) {
        _______________currentNode = this.tail;
      }
      if (
        _______________currentNode !== this.head &&
        _______________currentNode !== this.tail
      ) {
        _______________currentNode = _______________currentNode.prev;
      }
      for (
        var _currentNodeIndex = 0;
        _currentNodeIndex < intrinsicProperties.length;
        _currentNodeIndex++
      ) {
        _______________currentNode = createAndLinkNode(
          this,
          _______________currentNode,
          intrinsicProperties[_currentNodeIndex],
        );
      }
      return collectedIntrinsicValues;
    };
    Uint32ArrayBuilder.prototype.reverse = function () {
      var __currentNode = this.head;
      var prevTail = this.tail;
      for (
        var _____currentNode = __currentNode;
        _____currentNode !== null;
        _____currentNode = _____currentNode.prev
      ) {
        var __previousNode = _____currentNode.prev;
        _____currentNode.prev = _____currentNode.next;
        _____currentNode.next = __previousNode;
      }
      this.head = prevTail;
      this.tail = __currentNode;
      return this;
    };
    function createAndLinkNode(
      _______________________validateAndReturnIntrinsicProperty,
      validateAndSetBufferContents,
      compareBufferContent,
    ) {
      var newLinkedNode =
        validateAndSetBufferContents ===
        _______________________validateAndReturnIntrinsicProperty.head
          ? new LinkedIntNode(
              compareBufferContent,
              null,
              validateAndSetBufferContents,
              _______________________validateAndReturnIntrinsicProperty,
            )
          : new LinkedIntNode(
              compareBufferContent,
              validateAndSetBufferContents,
              validateAndSetBufferContents.next,
              _______________________validateAndReturnIntrinsicProperty,
            );
      if (newLinkedNode.next === null) {
        _______________________validateAndReturnIntrinsicProperty.tail =
          newLinkedNode;
      }
      if (newLinkedNode.prev === null) {
        _______________________validateAndReturnIntrinsicProperty.head =
          newLinkedNode;
      }
      _______________________validateAndReturnIntrinsicProperty.length++;
      return newLinkedNode;
    }
    function addBufferComparisonNode(
      validateAndStoreBufferComparison,
      bufferIndex,
    ) {
      validateAndStoreBufferComparison.tail = new LinkedIntNode(
        bufferIndex,
        validateAndStoreBufferComparison.tail,
        null,
        validateAndStoreBufferComparison,
      );
      validateAndStoreBufferComparison.head ||=
        validateAndStoreBufferComparison.tail;
      validateAndStoreBufferComparison.length++;
    }
    function _addNodeToBuffer(__bufferLength, compareAndStoreBufferValue) {
      __bufferLength.head = new LinkedIntNode(
        compareAndStoreBufferValue,
        null,
        __bufferLength.head,
        __bufferLength,
      );
      __bufferLength.tail ||= __bufferLength.head;
      __bufferLength.length++;
    }
    function LinkedIntNode(
      writeInt32LE,
      writeInt16BE,
      _writeInt32LE,
      __writeInt32LE,
    ) {
      if (!(this instanceof LinkedIntNode)) {
        return new LinkedIntNode(
          writeInt32LE,
          writeInt16BE,
          _writeInt32LE,
          __writeInt32LE,
        );
      }
      this.list = __writeInt32LE;
      this.value = writeInt32LE;
      if (writeInt16BE) {
        writeInt16BE.next = this;
        this.prev = writeInt16BE;
      } else {
        this.prev = null;
      }
      if (_writeInt32LE) {
        _writeInt32LE.prev = this;
        this.next = _writeInt32LE;
      } else {
        this.next = null;
      }
    }
    try {
      writeUInt16BEAndValidate()(Uint32ArrayBuilder);
    } catch {}
  },
);
var writeBufferAsInt32 = getModuleExportsIfAbsent(
  (createCache, initializeCache) => {
    var encodedLengthValidation = validateAndWriteEncodedLength();
    var maxSymbol = Symbol("max");
    var lengthSymbol = Symbol("length");
    var lengthCalculatorSymbol = Symbol("lengthCalculator");
    var allowStaleSymbol = Symbol("allowStale");
    var maxAgeSymbol = Symbol("maxAge");
    var disposeSymbol = Symbol("dispose");
    var noDisposeOnSetSymbol = Symbol("noDisposeOnSet");
    var lruListSymbol = Symbol("lruList");
    var cacheSymbol = Symbol("cache");
    var updateAgeOnGetSymbol = Symbol("updateAgeOnGet");
    var defaultLengthCalculator = () => 1;
    var CacheConfiguration = class {
      constructor(options) {
        if (typeof options == "number") {
          options = {
            max: options,
          };
        }
        options ||= {};
        if (
          options.max &&
          (typeof options.max != "number" || options.max < 0)
        ) {
          throw new TypeError("max must be a non-negative number");
        }
        let maxSize = (this[maxSymbol] = options.max || Infinity);
        let lengthCalculator = options.length || defaultLengthCalculator;
        if (typeof lengthCalculator != "function") {
          this[lengthCalculatorSymbol] = defaultLengthCalculator;
        } else {
          this[lengthCalculatorSymbol] = lengthCalculator;
        }
        this[allowStaleSymbol] = options.stale || false;
        if (options.maxAge && typeof options.maxAge != "number") {
          throw new TypeError("maxAge must be a number");
        }
        this[maxAgeSymbol] = options.maxAge || 0;
        this[disposeSymbol] = options.dispose;
        this[noDisposeOnSetSymbol] = options.noDisposeOnSet || false;
        this[updateAgeOnGetSymbol] = options.updateAgeOnGet || false;
        this.reset();
      }
      set max(setMaxSize) {
        if (typeof setMaxSize != "number" || setMaxSize < 0) {
          throw new TypeError("max must be a non-negative number");
        }
        this[maxSymbol] = setMaxSize || Infinity;
        _cacheMaxSize(this);
      }
      get max() {
        return this[maxSymbol];
      }
      set allowStale(setAllowStaleFlag) {
        this[allowStaleSymbol] = !!setAllowStaleFlag;
      }
      get allowStale() {
        return this[allowStaleSymbol];
      }
      set maxAge(setMaxAgeValue) {
        if (typeof setMaxAgeValue != "number") {
          throw new TypeError("maxAge must be a non-negative number");
        }
        this[maxAgeSymbol] = setMaxAgeValue;
        _cacheMaxSize(this);
      }
      get maxAge() {
        return this[maxAgeSymbol];
      }
      set lengthCalculator(lengthCalculatorFunction) {
        if (typeof lengthCalculatorFunction != "function") {
          lengthCalculatorFunction = defaultLengthCalculator;
        }
        if (lengthCalculatorFunction !== this[lengthCalculatorSymbol]) {
          this[lengthCalculatorSymbol] = lengthCalculatorFunction;
          this[lengthSymbol] = 0;
          this[lruListSymbol].forEach((lengthAndKeyCalculator) => {
            lengthAndKeyCalculator.length = this[lengthCalculatorSymbol](
              lengthAndKeyCalculator.value,
              lengthAndKeyCalculator.key,
            );
            this[lengthSymbol] += lengthAndKeyCalculator.length;
          });
        }
        _cacheMaxSize(this);
      }
      get lengthCalculator() {
        return this[lengthCalculatorSymbol];
      }
      get length() {
        return this[lengthSymbol];
      }
      get itemCount() {
        return this[lruListSymbol].length;
      }
      rforEach(processCacheEntries, cacheProcessor) {
        cacheProcessor = cacheProcessor || this;
        for (
          let currentCacheEntry = this[lruListSymbol].tail;
          currentCacheEntry !== null;

        ) {
          let previousCacheEntry = currentCacheEntry.prev;
          _maxCacheSize(
            this,
            processCacheEntries,
            currentCacheEntry,
            cacheProcessor,
          );
          currentCacheEntry = previousCacheEntry;
        }
      }
      forEach(_processCacheEntries, _cacheProcessor) {
        _cacheProcessor = _cacheProcessor || this;
        for (
          let _currentCacheEntry = this[lruListSymbol].head;
          _currentCacheEntry !== null;

        ) {
          let nextCacheEntry = _currentCacheEntry.next;
          _maxCacheSize(
            this,
            _processCacheEntries,
            _currentCacheEntry,
            _cacheProcessor,
          );
          _currentCacheEntry = nextCacheEntry;
        }
      }
      keys() {
        return this[lruListSymbol].toArray().map((p801Key) => p801Key.key);
      }
      values() {
        return this[lruListSymbol]
          .toArray()
          .map((settingsValue) => settingsValue.value);
      }
      reset() {
        if (
          this[disposeSymbol] &&
          this[lruListSymbol] &&
          this[lruListSymbol].length
        ) {
          this[lruListSymbol].forEach((disposeResource) =>
            this[disposeSymbol](disposeResource.key, disposeResource.value),
          );
        }
        this[cacheSymbol] = new Map();
        this[lruListSymbol] = new encodedLengthValidation();
        this[lengthSymbol] = 0;
      }
      dump() {
        return this[lruListSymbol]
          .map((_______cacheEntry) =>
            cacheMaxSize(this, _______cacheEntry)
              ? false
              : {
                  k: _______cacheEntry.key,
                  v: _______cacheEntry.value,
                  e: _______cacheEntry.now + (_______cacheEntry.maxAge || 0),
                },
          )
          .toArray()
          .filter((___processData) => ___processData);
      }
      dumpLru() {
        return this[lruListSymbol];
      }
      set(setCacheValue, setCacheEntry, cacheMaxAge) {
        cacheMaxAge = cacheMaxAge || this[maxAgeSymbol];
        if (cacheMaxAge && typeof cacheMaxAge != "number") {
          throw new TypeError("maxAge must be a number");
        }
        let currentTimeStamp = cacheMaxAge ? Date.now() : 0;
        let cacheEntryLength = this[lengthCalculatorSymbol](
          setCacheEntry,
          setCacheValue,
        );
        if (this[cacheSymbol].has(setCacheValue)) {
          if (cacheEntryLength > this[maxSymbol]) {
            getMaxCacheSize(this, this[cacheSymbol].get(setCacheValue));
            return false;
          }
          let __cacheEntry = this[cacheSymbol].get(setCacheValue).value;
          if (this[disposeSymbol]) {
            if (!this[noDisposeOnSetSymbol]) {
              this[disposeSymbol](setCacheValue, __cacheEntry.value);
            }
          }
          __cacheEntry.now = currentTimeStamp;
          __cacheEntry.maxAge = cacheMaxAge;
          __cacheEntry.value = setCacheEntry;
          this[lengthSymbol] += cacheEntryLength - __cacheEntry.length;
          __cacheEntry.length = cacheEntryLength;
          this.get(setCacheValue);
          _cacheMaxSize(this);
          return true;
        }
        let _cacheEntry = new __cacheMaxSize(
          setCacheValue,
          setCacheEntry,
          cacheEntryLength,
          currentTimeStamp,
          cacheMaxAge,
        );
        if (_cacheEntry.length > this[maxSymbol]) {
          if (this[disposeSymbol]) {
            this[disposeSymbol](setCacheValue, setCacheEntry);
          }
          return false;
        } else {
          this[lengthSymbol] += _cacheEntry.length;
          this[lruListSymbol].unshift(_cacheEntry);
          this[cacheSymbol].set(setCacheValue, this[lruListSymbol].head);
          _cacheMaxSize(this);
          return true;
        }
      }
      has(isCacheValuePresent) {
        if (!this[cacheSymbol].has(isCacheValuePresent)) {
          return false;
        }
        let cacheValue = this[cacheSymbol].get(isCacheValuePresent).value;
        return !cacheMaxSize(this, cacheValue);
      }
      get(_maxCacheSizeValue) {
        return maxCacheSize(this, _maxCacheSizeValue, true);
      }
      peek(maxCacheSizeValue) {
        return maxCacheSize(this, maxCacheSizeValue, false);
      }
      pop() {
        let tailCacheNode = this[lruListSymbol].tail;
        if (tailCacheNode) {
          getMaxCacheSize(this, tailCacheNode);
          return tailCacheNode.value;
        } else {
          return null;
        }
      }
      del(cacheSizeKey) {
        getMaxCacheSize(this, this[cacheSymbol].get(cacheSizeKey));
      }
      load(loadData) {
        this.reset();
        let currentTimestamp = Date.now();
        for (let dataIndex = loadData.length - 1; dataIndex >= 0; dataIndex--) {
          let dataEntry = loadData[dataIndex];
          let elapsedTimeSinceEvent = dataEntry.e || 0;
          if (elapsedTimeSinceEvent === 0) {
            this.set(dataEntry.k, dataEntry.v);
          } else {
            let timeDifferenceSinceEvent =
              elapsedTimeSinceEvent - currentTimestamp;
            if (timeDifferenceSinceEvent > 0) {
              this.set(dataEntry.k, dataEntry.v, timeDifferenceSinceEvent);
            }
          }
        }
      }
      prune() {
        this[cacheSymbol].forEach((calculateMaxCacheSize, cacheSizeInBytes) =>
          maxCacheSize(this, cacheSizeInBytes, false),
        );
      }
    };
    var maxCacheSize = (retrieveCacheValue, cacheKey, allowCacheStale) => {
      let cachedValue = retrieveCacheValue[cacheSymbol].get(cacheKey);
      if (cachedValue) {
        let cachedValueValue = cachedValue.value;
        if (cacheMaxSize(retrieveCacheValue, cachedValueValue)) {
          getMaxCacheSize(retrieveCacheValue, cachedValue);
          if (!retrieveCacheValue[allowStaleSymbol]) {
            return;
          }
        } else if (allowCacheStale) {
          if (retrieveCacheValue[updateAgeOnGetSymbol]) {
            cachedValue.value.now = Date.now();
          }
          retrieveCacheValue[lruListSymbol].unshiftNode(cachedValue);
        }
        return cachedValueValue.value;
      }
    };
    var cacheMaxSize = (shouldExpireCache, _____cacheEntry) => {
      if (
        !_____cacheEntry ||
        (!_____cacheEntry.maxAge && !shouldExpireCache[maxAgeSymbol])
      ) {
        return false;
      }
      let elapsedTimeSinceEntryCreation = Date.now() - _____cacheEntry.now;
      if (_____cacheEntry.maxAge) {
        return elapsedTimeSinceEntryCreation > _____cacheEntry.maxAge;
      } else {
        return (
          shouldExpireCache[maxAgeSymbol] &&
          elapsedTimeSinceEntryCreation > shouldExpireCache[maxAgeSymbol]
        );
      }
    };
    var _cacheMaxSize = (manageCacheSize) => {
      if (manageCacheSize[lengthSymbol] > manageCacheSize[maxSymbol]) {
        for (
          let currentCacheNode = manageCacheSize[lruListSymbol].tail;
          manageCacheSize[lengthSymbol] > manageCacheSize[maxSymbol] &&
          currentCacheNode !== null;

        ) {
          let previousCacheNode = currentCacheNode.prev;
          getMaxCacheSize(manageCacheSize, currentCacheNode);
          currentCacheNode = previousCacheNode;
        }
      }
    };
    var getMaxCacheSize = (handleCacheEntryRemoval, ____cacheEntry) => {
      if (____cacheEntry) {
        let ______cacheEntry = ____cacheEntry.value;
        if (handleCacheEntryRemoval[disposeSymbol]) {
          handleCacheEntryRemoval[disposeSymbol](
            ______cacheEntry.key,
            ______cacheEntry.value,
          );
        }
        handleCacheEntryRemoval[lengthSymbol] -= ______cacheEntry.length;
        handleCacheEntryRemoval[cacheSymbol].delete(______cacheEntry.key);
        handleCacheEntryRemoval[lruListSymbol].removeNode(____cacheEntry);
      }
    };
    var __cacheMaxSize = class {
      constructor(
        constructorKeyValueLengthNowMaxAge,
        value,
        valueLength,
        _currentTimestamp,
        maxAge,
      ) {
        this.key = constructorKeyValueLengthNowMaxAge;
        this.value = value;
        this.length = valueLength;
        this.now = _currentTimestamp;
        this.maxAge = maxAge || 0;
      }
    };
    var _maxCacheSize = (
      handleCacheSizeUpdate,
      invokeCacheHandler,
      cacheSize,
      cacheHandlerContext,
    ) => {
      let currentCacheSize = cacheSize.value;
      if (cacheMaxSize(handleCacheSizeUpdate, currentCacheSize)) {
        getMaxCacheSize(handleCacheSizeUpdate, cacheSize);
        if (!handleCacheSizeUpdate[allowStaleSymbol]) {
          currentCacheSize = undefined;
        }
      }
      if (currentCacheSize) {
        invokeCacheHandler.call(
          cacheHandlerContext,
          currentCacheSize.value,
          currentCacheSize.key,
          handleCacheSizeUpdate,
        );
      }
    };
    initializeCache.exports = CacheConfiguration;
  },
);
var base64EncodingValidator = getModuleExportsIfAbsent(
  (createSemVerRange, _createSemVerRange) => {
    var SemanticVersionRange = class {
      constructor(versionOrRange, _semanticVersionOptions) {
        _semanticVersionOptions = normalizeSemanticVersionOptions(
          _semanticVersionOptions,
        );
        if (versionOrRange instanceof SemanticVersionRange) {
          if (
            versionOrRange.loose === !!_semanticVersionOptions.loose &&
            versionOrRange.includePrerelease ===
              !!_semanticVersionOptions.includePrerelease
          ) {
            return versionOrRange;
          } else {
            return new SemanticVersionRange(
              versionOrRange.raw,
              _semanticVersionOptions,
            );
          }
        }
        if (versionOrRange instanceof SemanticVersion) {
          this.raw = versionOrRange.value;
          this.set = [[versionOrRange]];
          this.format();
          return this;
        }
        this.options = _semanticVersionOptions;
        this.loose = !!_semanticVersionOptions.loose;
        this.includePrerelease = !!_semanticVersionOptions.includePrerelease;
        this.raw = versionOrRange;
        this.set = versionOrRange
          .split("||")
          .map((parsedRangeString) => this.parseRange(parsedRangeString.trim()))
          .filter((__arrayLength) => __arrayLength.length);
        if (!this.set.length) {
          throw new TypeError("Invalid SemVer Range: " + versionOrRange);
        }
        if (this.set.length > 1) {
          let initialVersion = this.set[0];
          this.set = this.set.filter(
            (___versionRange) =>
              !____createSemanticVersionRange(___versionRange[0]),
          );
          if (this.set.length === 0) {
            this.set = [initialVersion];
          } else if (this.set.length > 1) {
            for (let ________semanticVersionRange of this.set) {
              if (
                ________semanticVersionRange.length === 1 &&
                _____createSemanticVersionRange(________semanticVersionRange[0])
              ) {
                this.set = [________semanticVersionRange];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set
          .map((joinedTrimmedString) => joinedTrimmedString.join(" ").trim())
          .join("||")
          .trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(rangeInput) {
        rangeInput = rangeInput.trim();
        let loggingKeyForParseRange =
          "parseRange:" +
          Object.keys(this.options).join(",") +
          ":" +
          rangeInput;
        let cachedParsedRange = semVerRange.get(loggingKeyForParseRange);
        if (cachedParsedRange) {
          return cachedParsedRange;
        }
        let isLooseVersion = this.options.loose;
        let semanticVersionRangeHyphen = isLooseVersion
          ? __SemanticVersionRange[_createSemanticVersionRange.HYPHENRANGELOOSE]
          : __SemanticVersionRange[_createSemanticVersionRange.HYPHENRANGE];
        rangeInput = rangeInput.replace(
          semanticVersionRangeHyphen,
          __________createSemanticVersionRange(this.options.includePrerelease),
        );
        SemanticVersionRangeConstructor("hyphen replace", rangeInput);
        rangeInput = rangeInput.replace(
          __SemanticVersionRange[_createSemanticVersionRange.COMPARATORTRIM],
          __createSemanticVersionRange,
        );
        SemanticVersionRangeConstructor("comparator trim", rangeInput);
        rangeInput = rangeInput.replace(
          __SemanticVersionRange[_createSemanticVersionRange.TILDETRIM],
          ___createSemanticVersionRange,
        );
        rangeInput = rangeInput.replace(
          __SemanticVersionRange[_createSemanticVersionRange.CARETTRIM],
          semanticVersionRange,
        );
        rangeInput = rangeInput.split(/\s+/).join(" ");
        let parseSemanticVersionRange = rangeInput
          .split(" ")
          .map((__parseSemanticVersionRange) =>
            _semanticVersionRange(__parseSemanticVersionRange, this.options),
          )
          .join(" ")
          .split(/\s+/)
          .map((validateSemanticVersionRange) =>
            ____semanticVersionRange(
              validateSemanticVersionRange,
              this.options,
            ),
          );
        if (isLooseVersion) {
          parseSemanticVersionRange = parseSemanticVersionRange.filter(
            (looseInvalidFilter) => {
              SemanticVersionRangeConstructor(
                "loose invalid filter",
                looseInvalidFilter,
                this.options,
              );
              return !!looseInvalidFilter.match(
                __SemanticVersionRange[
                  _createSemanticVersionRange.COMPARATORLOOSE
                ],
              );
            },
          );
        }
        SemanticVersionRangeConstructor(
          "range list",
          parseSemanticVersionRange,
        );
        let _parseSemanticVersionRange = new Map();
        let __parseVersionRange = parseSemanticVersionRange.map(
          (semanticVersionCode) =>
            new SemanticVersion(semanticVersionCode, this.options),
        );
        for (let __version of __parseVersionRange) {
          if (____createSemanticVersionRange(__version)) {
            return [__version];
          }
          _parseSemanticVersionRange.set(__version.value, __version);
        }
        if (
          _parseSemanticVersionRange.size > 1 &&
          _parseSemanticVersionRange.has("")
        ) {
          _parseSemanticVersionRange.delete("");
        }
        let ___parseVersionRange = [..._parseSemanticVersionRange.values()];
        semVerRange.set(loggingKeyForParseRange, ___parseVersionRange);
        return ___parseVersionRange;
      }
      intersects(______semanticVersionRange, versionComparisonParameter) {
        if (!(______semanticVersionRange instanceof SemanticVersionRange)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some(
          (createNuancedSemanticVersionRange) =>
            ______createSemanticVersionRange(
              createNuancedSemanticVersionRange,
              versionComparisonParameter,
            ) &&
            ______semanticVersionRange.set.some(
              (___________createSemanticVersionRange) =>
                ______createSemanticVersionRange(
                  ___________createSemanticVersionRange,
                  versionComparisonParameter,
                ) &&
                createNuancedSemanticVersionRange.every(
                  (____________createSemanticVersionRange) =>
                    ___________createSemanticVersionRange.every(
                      (versionRangeToCheck) =>
                        ____________createSemanticVersionRange.intersects(
                          versionRangeToCheck,
                          versionComparisonParameter,
                        ),
                    ),
                ),
            ),
        );
      }
      test(testSemanticVersionRange) {
        if (!testSemanticVersionRange) {
          return false;
        }
        if (typeof testSemanticVersionRange == "string") {
          try {
            testSemanticVersionRange = new _SemanticVersionRange(
              testSemanticVersionRange,
              this.options,
            );
          } catch {
            return false;
          }
        }
        for (let _____index = 0; _____index < this.set.length; _____index++) {
          if (
            parsedSemanticVersionRange(
              this.set[_____index],
              testSemanticVersionRange,
              this.options,
            )
          ) {
            return true;
          }
        }
        return false;
      }
    };
    _createSemVerRange.exports = SemanticVersionRange;
    var createSemanticVersionRange = writeBufferAsInt32();
    var semVerRange = new createSemanticVersionRange({
      max: 1000,
    });
    var normalizeSemanticVersionOptions = readUintLE();
    var SemanticVersion = calculatedValueArray();
    var SemanticVersionRangeConstructor = getStringFromCharCodes();
    var _SemanticVersionRange = readLogBufferValue();
    var {
      re: __SemanticVersionRange,
      t: _createSemanticVersionRange,
      comparatorTrimReplace: __createSemanticVersionRange,
      tildeTrimReplace: ___createSemanticVersionRange,
      caretTrimReplace: semanticVersionRange,
    } = accumulateCharacterCodes();
    var ____createSemanticVersionRange = (isVersionLessThanZero) =>
      isVersionLessThanZero.value === "<0.0.0-0";
    var _____createSemanticVersionRange = (isInputValueEmpty) =>
      isInputValueEmpty.value === "";
    var ______createSemanticVersionRange = (
      checkAllIntersections,
      intersectionCheck,
    ) => {
      let isAllIntersectionsValid = true;
      let remainingIntersections = checkAllIntersections.slice();
      let currentIntersection = remainingIntersections.pop();
      while (isAllIntersectionsValid && remainingIntersections.length) {
        isAllIntersectionsValid = remainingIntersections.every(
          (intersectionPoint) =>
            currentIntersection.intersects(
              intersectionPoint,
              intersectionCheck,
            ),
        );
        currentIntersection = remainingIntersections.pop();
      }
      return isAllIntersectionsValid;
    };
    var _semanticVersionRange = (
      createAndProcessSemanticVersionRange,
      __versionRange,
    ) => {
      SemanticVersionRangeConstructor(
        "comp",
        createAndProcessSemanticVersionRange,
        __versionRange,
      );
      createAndProcessSemanticVersionRange = _______createSemanticVersionRange(
        createAndProcessSemanticVersionRange,
        __versionRange,
      );
      SemanticVersionRangeConstructor(
        "caret",
        createAndProcessSemanticVersionRange,
      );
      createAndProcessSemanticVersionRange = _semVerRange(
        createAndProcessSemanticVersionRange,
        __versionRange,
      );
      SemanticVersionRangeConstructor(
        "tildes",
        createAndProcessSemanticVersionRange,
      );
      createAndProcessSemanticVersionRange = ___semanticVersionRange(
        createAndProcessSemanticVersionRange,
        __versionRange,
      );
      SemanticVersionRangeConstructor(
        "xrange",
        createAndProcessSemanticVersionRange,
      );
      createAndProcessSemanticVersionRange =
        _________createSemanticVersionRange(
          createAndProcessSemanticVersionRange,
          __versionRange,
        );
      SemanticVersionRangeConstructor(
        "stars",
        createAndProcessSemanticVersionRange,
      );
      return createAndProcessSemanticVersionRange;
    };
    var __semanticVersionRange = (isValidInput) =>
      !isValidInput ||
      isValidInput.toLowerCase() === "x" ||
      isValidInput === "*";
    var _semVerRange = (trimAndValidateVersionRanges, __versionRangeString) =>
      trimAndValidateVersionRanges
        .trim()
        .split(/\s+/)
        .map((_parseAndValidateSemanticVersionRange) =>
          parseAndValidateSemanticVersionRange(
            _parseAndValidateSemanticVersionRange,
            __versionRangeString,
          ),
        )
        .join(" ");
    var parseAndValidateSemanticVersionRange = (
      replaceTildeInVersionRange,
      semanticVersionRangeOptions,
    ) => {
      let tildeRangeBasedOnLooseOption = semanticVersionRangeOptions.loose
        ? __SemanticVersionRange[_createSemanticVersionRange.TILDELOOSE]
        : __SemanticVersionRange[_createSemanticVersionRange.TILDE];
      return replaceTildeInVersionRange.replace(
        tildeRangeBasedOnLooseOption,
        (
          buildSemanticVersionRange,
          _generateSemanticVersionRange,
          minorVersion,
          patchVersion,
          prereleaseIdentifier,
        ) => {
          SemanticVersionRangeConstructor(
            "tilde",
            replaceTildeInVersionRange,
            buildSemanticVersionRange,
            _generateSemanticVersionRange,
            minorVersion,
            patchVersion,
            prereleaseIdentifier,
          );
          let _versionRangeString;
          if (__semanticVersionRange(_generateSemanticVersionRange)) {
            _versionRangeString = "";
          } else if (__semanticVersionRange(minorVersion)) {
            _versionRangeString =
              ">=" +
              _generateSemanticVersionRange +
              ".0.0 <" +
              (+_generateSemanticVersionRange + 1) +
              ".0.0-0";
          } else if (__semanticVersionRange(patchVersion)) {
            _versionRangeString =
              ">=" +
              _generateSemanticVersionRange +
              "." +
              minorVersion +
              ".0 <" +
              _generateSemanticVersionRange +
              "." +
              (+minorVersion + 1) +
              ".0-0";
          } else if (prereleaseIdentifier) {
            SemanticVersionRangeConstructor(
              "replaceTilde pr",
              prereleaseIdentifier,
            );
            _versionRangeString =
              ">=" +
              _generateSemanticVersionRange +
              "." +
              minorVersion +
              "." +
              patchVersion +
              "-" +
              prereleaseIdentifier +
              " <" +
              _generateSemanticVersionRange +
              "." +
              (+minorVersion + 1) +
              ".0-0";
          } else {
            _versionRangeString =
              ">=" +
              _generateSemanticVersionRange +
              "." +
              minorVersion +
              "." +
              patchVersion +
              " <" +
              _generateSemanticVersionRange +
              "." +
              (+minorVersion + 1) +
              ".0-0";
          }
          SemanticVersionRangeConstructor("tilde return", _versionRangeString);
          return _versionRangeString;
        },
      );
    };
    var _______createSemanticVersionRange = (
      parseAndGenerateSemanticVersionRanges,
      versionRangeDelimiter,
    ) =>
      parseAndGenerateSemanticVersionRanges
        .trim()
        .split(/\s+/)
        .map((createSemanticVersionRangeWithDelimiter) =>
          ________createSemanticVersionRange(
            createSemanticVersionRangeWithDelimiter,
            versionRangeDelimiter,
          ),
        )
        .join(" ");
    var ________createSemanticVersionRange = (
      semanticVersionRangeCaret,
      semanticVersionOptions,
    ) => {
      SemanticVersionRangeConstructor(
        "caret",
        semanticVersionRangeCaret,
        semanticVersionOptions,
      );
      let caretVersionRange = semanticVersionOptions.loose
        ? __SemanticVersionRange[_createSemanticVersionRange.CARETLOOSE]
        : __SemanticVersionRange[_createSemanticVersionRange.CARET];
      let preReleaseSuffix = semanticVersionOptions.includePrerelease
        ? "-0"
        : "";
      return semanticVersionRangeCaret.replace(
        caretVersionRange,
        (
          baseVersion,
          baseVersionMajor,
          preReleaseVersion,
          previousVersion,
          shouldReplaceCaretPreRelease,
        ) => {
          SemanticVersionRangeConstructor(
            "caret",
            semanticVersionRangeCaret,
            baseVersion,
            baseVersionMajor,
            preReleaseVersion,
            previousVersion,
            shouldReplaceCaretPreRelease,
          );
          let preReleaseVersionRange;
          if (__semanticVersionRange(baseVersionMajor)) {
            preReleaseVersionRange = "";
          } else if (__semanticVersionRange(preReleaseVersion)) {
            preReleaseVersionRange =
              ">=" +
              baseVersionMajor +
              ".0.0" +
              preReleaseSuffix +
              " <" +
              (+baseVersionMajor + 1) +
              ".0.0-0";
          } else if (__semanticVersionRange(previousVersion)) {
            if (baseVersionMajor === "0") {
              preReleaseVersionRange =
                ">=" +
                baseVersionMajor +
                "." +
                preReleaseVersion +
                ".0" +
                preReleaseSuffix +
                " <" +
                baseVersionMajor +
                "." +
                (+preReleaseVersion + 1) +
                ".0-0";
            } else {
              preReleaseVersionRange =
                ">=" +
                baseVersionMajor +
                "." +
                preReleaseVersion +
                ".0" +
                preReleaseSuffix +
                " <" +
                (+baseVersionMajor + 1) +
                ".0.0-0";
            }
          } else if (shouldReplaceCaretPreRelease) {
            SemanticVersionRangeConstructor(
              "replaceCaret pr",
              shouldReplaceCaretPreRelease,
            );
            if (baseVersionMajor === "0") {
              if (preReleaseVersion === "0") {
                preReleaseVersionRange =
                  ">=" +
                  baseVersionMajor +
                  "." +
                  preReleaseVersion +
                  "." +
                  previousVersion +
                  "-" +
                  shouldReplaceCaretPreRelease +
                  " <" +
                  baseVersionMajor +
                  "." +
                  preReleaseVersion +
                  "." +
                  (+previousVersion + 1) +
                  "-0";
              } else {
                preReleaseVersionRange =
                  ">=" +
                  baseVersionMajor +
                  "." +
                  preReleaseVersion +
                  "." +
                  previousVersion +
                  "-" +
                  shouldReplaceCaretPreRelease +
                  " <" +
                  baseVersionMajor +
                  "." +
                  (+preReleaseVersion + 1) +
                  ".0-0";
              }
            } else {
              preReleaseVersionRange =
                ">=" +
                baseVersionMajor +
                "." +
                preReleaseVersion +
                "." +
                previousVersion +
                "-" +
                shouldReplaceCaretPreRelease +
                " <" +
                (+baseVersionMajor + 1) +
                ".0.0-0";
            }
          } else {
            SemanticVersionRangeConstructor("no pr");
            if (baseVersionMajor === "0") {
              if (preReleaseVersion === "0") {
                preReleaseVersionRange =
                  ">=" +
                  baseVersionMajor +
                  "." +
                  preReleaseVersion +
                  "." +
                  previousVersion +
                  preReleaseSuffix +
                  " <" +
                  baseVersionMajor +
                  "." +
                  preReleaseVersion +
                  "." +
                  (+previousVersion + 1) +
                  "-0";
              } else {
                preReleaseVersionRange =
                  ">=" +
                  baseVersionMajor +
                  "." +
                  preReleaseVersion +
                  "." +
                  previousVersion +
                  preReleaseSuffix +
                  " <" +
                  baseVersionMajor +
                  "." +
                  (+preReleaseVersion + 1) +
                  ".0-0";
              }
            } else {
              preReleaseVersionRange =
                ">=" +
                baseVersionMajor +
                "." +
                preReleaseVersion +
                "." +
                previousVersion +
                " <" +
                (+baseVersionMajor + 1) +
                ".0.0-0";
            }
          }
          SemanticVersionRangeConstructor(
            "caret return",
            preReleaseVersionRange,
          );
          return preReleaseVersionRange;
        },
      );
    };
    var ___semanticVersionRange = (
      inputVersionRange,
      _________semanticVersionRange,
    ) => {
      SemanticVersionRangeConstructor(
        "replaceXRanges",
        inputVersionRange,
        _________semanticVersionRange,
      );
      return inputVersionRange
        .split(/\s+/)
        .map((_validateSemanticVersionRange) =>
          ___SemanticVersionRange(
            _validateSemanticVersionRange,
            _________semanticVersionRange,
          ),
        )
        .join(" ");
    };
    var ___SemanticVersionRange = (
      trimmedVersion,
      _____semanticVersionRange,
    ) => {
      trimmedVersion = trimmedVersion.trim();
      let rangePatternMatcher = _____semanticVersionRange.loose
        ? __SemanticVersionRange[_createSemanticVersionRange.XRANGELOOSE]
        : __SemanticVersionRange[_createSemanticVersionRange.XRANGE];
      return trimmedVersion.replace(
        rangePatternMatcher,
        (
          currentVersionConstraint,
          currentOperator,
          currentVersionLowerBound,
          versionLowerBoundFallback,
          fallbackVersion,
          isPreReleaseFlag,
        ) => {
          SemanticVersionRangeConstructor(
            "xRange",
            trimmedVersion,
            currentVersionConstraint,
            currentOperator,
            currentVersionLowerBound,
            versionLowerBoundFallback,
            fallbackVersion,
            isPreReleaseFlag,
          );
          let currentLowerBoundVersion = __semanticVersionRange(
            currentVersionLowerBound,
          );
          let resolvedLowerBoundVersion =
            currentLowerBoundVersion ||
            __semanticVersionRange(versionLowerBoundFallback);
          let resolvedVersionFallback =
            resolvedLowerBoundVersion ||
            __semanticVersionRange(fallbackVersion);
          let resolvedVersion = resolvedVersionFallback;
          if (currentOperator === "=" && resolvedVersion) {
            currentOperator = "";
          }
          if (_____semanticVersionRange.includePrerelease) {
            isPreReleaseFlag = "-0";
          } else {
            isPreReleaseFlag = "";
          }
          if (currentLowerBoundVersion) {
            if (currentOperator === ">" || currentOperator === "<") {
              currentVersionConstraint = "<0.0.0-0";
            } else {
              currentVersionConstraint = "*";
            }
          } else if (currentOperator && resolvedVersion) {
            if (resolvedLowerBoundVersion) {
              versionLowerBoundFallback = 0;
            }
            fallbackVersion = 0;
            if (currentOperator === ">") {
              currentOperator = ">=";
              if (resolvedLowerBoundVersion) {
                currentVersionLowerBound = +currentVersionLowerBound + 1;
                versionLowerBoundFallback = 0;
                fallbackVersion = 0;
              } else {
                versionLowerBoundFallback = +versionLowerBoundFallback + 1;
                fallbackVersion = 0;
              }
            } else if (currentOperator === "<=") {
              currentOperator = "<";
              if (resolvedLowerBoundVersion) {
                currentVersionLowerBound = +currentVersionLowerBound + 1;
              } else {
                versionLowerBoundFallback = +versionLowerBoundFallback + 1;
              }
            }
            if (currentOperator === "<") {
              isPreReleaseFlag = "-0";
            }
            currentVersionConstraint =
              currentOperator +
              currentVersionLowerBound +
              "." +
              versionLowerBoundFallback +
              "." +
              fallbackVersion +
              isPreReleaseFlag;
          } else if (resolvedLowerBoundVersion) {
            currentVersionConstraint =
              ">=" +
              currentVersionLowerBound +
              ".0.0" +
              isPreReleaseFlag +
              " <" +
              (+currentVersionLowerBound + 1) +
              ".0.0-0";
          } else if (resolvedVersionFallback) {
            currentVersionConstraint =
              ">=" +
              currentVersionLowerBound +
              "." +
              versionLowerBoundFallback +
              ".0" +
              isPreReleaseFlag +
              " <" +
              currentVersionLowerBound +
              "." +
              (+versionLowerBoundFallback + 1) +
              ".0-0";
          }
          SemanticVersionRangeConstructor(
            "xRange return",
            currentVersionConstraint,
          );
          return currentVersionConstraint;
        },
      );
    };
    var _________createSemanticVersionRange = (
      semanticVersionRangeString,
      replaceStarsWithSemanticVersion,
    ) => {
      SemanticVersionRangeConstructor(
        "replaceStars",
        semanticVersionRangeString,
        replaceStarsWithSemanticVersion,
      );
      return semanticVersionRangeString
        .trim()
        .replace(__SemanticVersionRange[_createSemanticVersionRange.STAR], "");
    };
    var ____semanticVersionRange = (
      versionString,
      _______semanticVersionRange,
    ) => {
      SemanticVersionRangeConstructor(
        "replaceGTE0",
        versionString,
        _______semanticVersionRange,
      );
      return versionString
        .trim()
        .replace(
          __SemanticVersionRange[
            _______semanticVersionRange.includePrerelease
              ? _createSemanticVersionRange.GTE0PRE
              : _createSemanticVersionRange.GTE0
          ],
          "",
        );
    };
    var __________createSemanticVersionRange =
      (___generateVersionRange) =>
      (
        generateSemanticVersionRange,
        minimumVersionRange,
        minimumVersion,
        minimumVersionPatches,
        currentVersionPatches,
        isMinimumVersionValid,
        _currentVersionConstraints,
        minimumVersionUpperBound,
        minimumVersionUpperBoundConstraint,
        currentMinimumVersionRange,
        minimumVersionRangeString,
        updateMinimumVersionRange,
        _updateMinimumVersionRange,
      ) => {
        if (__semanticVersionRange(minimumVersion)) {
          minimumVersionRange = "";
        } else if (__semanticVersionRange(minimumVersionPatches)) {
          minimumVersionRange =
            ">=" +
            minimumVersion +
            ".0.0" +
            (___generateVersionRange ? "-0" : "");
        } else if (__semanticVersionRange(currentVersionPatches)) {
          minimumVersionRange =
            ">=" +
            minimumVersion +
            "." +
            minimumVersionPatches +
            ".0" +
            (___generateVersionRange ? "-0" : "");
        } else if (isMinimumVersionValid) {
          minimumVersionRange = ">=" + minimumVersionRange;
        } else {
          minimumVersionRange =
            ">=" + minimumVersionRange + (___generateVersionRange ? "-0" : "");
        }
        if (__semanticVersionRange(minimumVersionUpperBoundConstraint)) {
          minimumVersionUpperBound = "";
        } else if (__semanticVersionRange(currentMinimumVersionRange)) {
          minimumVersionUpperBound =
            "<" + (+minimumVersionUpperBoundConstraint + 1) + ".0.0-0";
        } else if (__semanticVersionRange(minimumVersionRangeString)) {
          minimumVersionUpperBound =
            "<" +
            minimumVersionUpperBoundConstraint +
            "." +
            (+currentMinimumVersionRange + 1) +
            ".0-0";
        } else if (updateMinimumVersionRange) {
          minimumVersionUpperBound =
            "<=" +
            minimumVersionUpperBoundConstraint +
            "." +
            currentMinimumVersionRange +
            "." +
            minimumVersionRangeString +
            "-" +
            updateMinimumVersionRange;
        } else if (___generateVersionRange) {
          minimumVersionUpperBound =
            "<" +
            minimumVersionUpperBoundConstraint +
            "." +
            currentMinimumVersionRange +
            "." +
            (+minimumVersionRangeString + 1) +
            "-0";
        } else {
          minimumVersionUpperBound = "<=" + minimumVersionUpperBound;
        }
        return (minimumVersionRange + " " + minimumVersionUpperBound).trim();
      };
    var parsedSemanticVersionRange = (
      __checkVersionCompatibility,
      versionToCheck,
      versionCheckOptions,
    ) => {
      for (
        let versionCompatibilityIndex = 0;
        versionCompatibilityIndex < __checkVersionCompatibility.length;
        versionCompatibilityIndex++
      ) {
        if (
          !__checkVersionCompatibility[versionCompatibilityIndex].test(
            versionToCheck,
          )
        ) {
          return false;
        }
      }
      if (
        versionToCheck.prerelease.length &&
        !versionCheckOptions.includePrerelease
      ) {
        for (
          let compatibilityIndex = 0;
          compatibilityIndex < __checkVersionCompatibility.length;
          compatibilityIndex++
        ) {
          SemanticVersionRangeConstructor(
            __checkVersionCompatibility[compatibilityIndex].semver,
          );
          if (
            __checkVersionCompatibility[compatibilityIndex].semver !==
              SemanticVersion.ANY &&
            __checkVersionCompatibility[compatibilityIndex].semver.prerelease
              .length > 0
          ) {
            let ___currentVersion =
              __checkVersionCompatibility[compatibilityIndex].semver;
            if (
              ___currentVersion.major === versionToCheck.major &&
              ___currentVersion.minor === versionToCheck.minor &&
              ___currentVersion.patch === versionToCheck.patch
            ) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  },
);
var calculatedValueArray = getModuleExportsIfAbsent(
  (__compareVersion, parseVersionComparator) => {
    var semVerAnySymbol = Symbol("SemVer ANY");
    var VersionComparator = class {
      static get ANY() {
        return semVerAnySymbol;
      }
      constructor(_versionComparator, _versionOptions) {
        _versionOptions = parseVersionOptions(_versionOptions);
        if (_versionComparator instanceof VersionComparator) {
          if (_versionComparator.loose === !!_versionOptions.loose) {
            return _versionComparator;
          }
          _versionComparator = _versionComparator.value;
        }
        logVersionComparatorDetails(
          "comparator",
          _versionComparator,
          _versionOptions,
        );
        this.options = _versionOptions;
        this.loose = !!_versionOptions.loose;
        this.parse(_versionComparator);
        if (this.semver === semVerAnySymbol) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        logVersionComparatorDetails("comp", this);
      }
      parse(__parseComparator) {
        let comparatorRegexPattern = this.options.loose
          ? comparatorRegex[getComparatorRegex.COMPARATORLOOSE]
          : comparatorRegex[getComparatorRegex.COMPARATOR];
        let matchedComparator = __parseComparator.match(comparatorRegexPattern);
        if (!matchedComparator) {
          throw new TypeError("Invalid comparator: " + __parseComparator);
        }
        if (matchedComparator[1] !== undefined) {
          this.operator = matchedComparator[1];
        } else {
          this.operator = "";
        }
        if (this.operator === "=") {
          this.operator = "";
        }
        if (matchedComparator[2]) {
          this.semver = new _VersionComparator(
            matchedComparator[2],
            this.options.loose,
          );
        } else {
          this.semver = semVerAnySymbol;
        }
      }
      toString() {
        return this.value;
      }
      test(__versionComparator) {
        logVersionComparatorDetails(
          "Comparator.test",
          __versionComparator,
          this.options.loose,
        );
        if (
          this.semver === semVerAnySymbol ||
          __versionComparator === semVerAnySymbol
        ) {
          return true;
        }
        if (typeof __versionComparator == "string") {
          try {
            __versionComparator = new _VersionComparator(
              __versionComparator,
              this.options,
            );
          } catch {
            return false;
          }
        }
        return logVersionComparatorError(
          __versionComparator,
          this.operator,
          this.semver,
          this.options,
        );
      }
      intersects(comparator1, versionComparisonOptions) {
        if (!(comparator1 instanceof VersionComparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (
          !versionComparisonOptions ||
          typeof versionComparisonOptions != "object"
        ) {
          versionComparisonOptions = {
            loose: !!versionComparisonOptions,
            includePrerelease: false,
          };
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          } else {
            return new __VersionComparator(
              comparator1.value,
              versionComparisonOptions,
            ).test(this.value);
          }
        }
        if (comparator1.operator === "") {
          if (comparator1.value === "") {
            return true;
          } else {
            return new __VersionComparator(
              this.value,
              versionComparisonOptions,
            ).test(comparator1.semver);
          }
        }
        let isGreaterThanOrEqual =
          (this.operator === ">=" || this.operator === ">") &&
          (comparator1.operator === ">=" || comparator1.operator === ">");
        let isLessThanOrEqual =
          (this.operator === "<=" || this.operator === "<") &&
          (comparator1.operator === "<=" || comparator1.operator === "<");
        let checkVersionIntersections =
          this.semver.version === comparator1.semver.version;
        let versionComparator =
          (this.operator === ">=" || this.operator === "<=") &&
          (comparator1.operator === ">=" || comparator1.operator === "<=");
        let versionComparisonIntersects =
          logVersionComparatorError(
            this.semver,
            "<",
            comparator1.semver,
            versionComparisonOptions,
          ) &&
          (this.operator === ">=" || this.operator === ">") &&
          (comparator1.operator === "<=" || comparator1.operator === "<");
        let versionIntersects =
          logVersionComparatorError(
            this.semver,
            ">",
            comparator1.semver,
            versionComparisonOptions,
          ) &&
          (this.operator === "<=" || this.operator === "<") &&
          (comparator1.operator === ">=" || comparator1.operator === ">");
        return (
          isGreaterThanOrEqual ||
          isLessThanOrEqual ||
          (checkVersionIntersections && versionComparator) ||
          versionComparisonIntersects ||
          versionIntersects
        );
      }
    };
    parseVersionComparator.exports = VersionComparator;
    var parseVersionOptions = readUintLE();
    var { re: comparatorRegex, t: getComparatorRegex } =
      accumulateCharacterCodes();
    var logVersionComparatorError = bufferValueManipulation();
    var logVersionComparatorDetails = getStringFromCharCodes();
    var _VersionComparator = readLogBufferValue();
    var __VersionComparator = base64EncodingValidator();
  },
);
var dataCopyLength = getModuleExportsIfAbsent(
  (_________________validateBase64Encoding, validateAndTestBase64Encoding) => {
    var Base64EncodingTester = base64EncodingValidator();
    var testBase64Encoding = (
      base64EncodingTester,
      base64EncodingTesterInstance,
      base64EncodingParams,
    ) => {
      try {
        base64EncodingTesterInstance = new Base64EncodingTester(
          base64EncodingTesterInstance,
          base64EncodingParams,
        );
      } catch {
        return false;
      }
      return base64EncodingTesterInstance.test(base64EncodingTester);
    };
    validateAndTestBase64Encoding.exports = testBase64Encoding;
  },
);
var calculateEffectiveWriteLength = getModuleExportsIfAbsent(
  (createBase64ValidatorAndSetMapper, base64SetMappingFunction) => {
    var createBase64ValidationInstance = base64EncodingValidator();
    var createBase64MappingFunction = (
      _createBase64ValidationInstance,
      base64ValidationInstance,
    ) =>
      new createBase64ValidationInstance(
        _createBase64ValidationInstance,
        base64ValidationInstance,
      ).set.map((processValuesFromArray) =>
        processValuesFromArray
          .map((passwordInputValue) => passwordInputValue.value)
          .join(" ")
          .trim()
          .split(" "),
      );
    base64SetMappingFunction.exports = createBase64MappingFunction;
  },
);
var validateAndStorePropertiesDiff = getModuleExportsIfAbsent(
  (processAndValidateLogEntries, exportedLogEntryProcessor) => {
    var logEntryReader = readLogBufferValue();
    var LogEntryValidator = base64EncodingValidator();
    var findMostRecentValidLogEntry = (
      findBestLogEntry,
      logEntryValidator,
      logEntryParser,
    ) => {
      let bestLogEntry = null;
      let _logEntryReader = null;
      let logEntryValidatorInstance = null;
      try {
        logEntryValidatorInstance = new LogEntryValidator(
          logEntryValidator,
          logEntryParser,
        );
      } catch {
        return null;
      }
      findBestLogEntry.forEach((currentLogEntry) => {
        if (
          logEntryValidatorInstance.test(currentLogEntry) &&
          (!bestLogEntry || _logEntryReader.compare(currentLogEntry) === -1)
        ) {
          bestLogEntry = currentLogEntry;
          _logEntryReader = new logEntryReader(bestLogEntry, logEntryParser);
        }
      });
      return bestLogEntry;
    };
    exportedLogEntryProcessor.exports = findMostRecentValidLogEntry;
  },
);
var _handleEncodingConversion = getModuleExportsIfAbsent(
  (validateAndEncodeValues, exportValidationAndEncodingFunction) => {
    var LogBufferValueReader = readLogBufferValue();
    var base64EncodingValidatorInstance = base64EncodingValidator();
    var findMostRecentValidBase64 = (
      findHighestValidBase64EncodedString,
      base64EncodedString,
      base64Validator,
    ) => {
      let highestValidBase64EncodedString = null;
      let logBufferValueReader = null;
      let base64ValidationResult = null;
      try {
        base64ValidationResult = new base64EncodingValidatorInstance(
          base64EncodedString,
          base64Validator,
        );
      } catch {
        return null;
      }
      findHighestValidBase64EncodedString.forEach((candidateBase64String) => {
        if (
          base64ValidationResult.test(candidateBase64String) &&
          (!highestValidBase64EncodedString ||
            logBufferValueReader.compare(candidateBase64String) === 1)
        ) {
          highestValidBase64EncodedString = candidateBase64String;
          logBufferValueReader = new LogBufferValueReader(
            highestValidBase64EncodedString,
            base64Validator,
          );
        }
      });
      return highestValidBase64EncodedString;
    };
    exportValidationAndEncodingFunction.exports = findMostRecentValidBase64;
  },
);
var handlePromiseExecution = getModuleExportsIfAbsent(
  (validateSemverVersion, validateVersionAgainstSemver) => {
    var SemverVersion = readLogBufferValue();
    var stringValidator = base64EncodingValidator();
    var _maxBitValueForCopyOperation = maxBitValueForCopyOperation();
    var validateSemverWithBase64 = (
      _stringValidator,
      stringValidatorInstance,
    ) => {
      _stringValidator = new stringValidator(
        _stringValidator,
        stringValidatorInstance,
      );
      let initialSemverVersion = new SemverVersion("0.0.0");
      if (
        _stringValidator.test(initialSemverVersion) ||
        ((initialSemverVersion = new SemverVersion("0.0.0-0")),
        _stringValidator.test(initialSemverVersion))
      ) {
        return initialSemverVersion;
      }
      initialSemverVersion = null;
      for (
        let stringSetIndex = 0;
        stringSetIndex < _stringValidator.set.length;
        ++stringSetIndex
      ) {
        let stringSetValidators = _stringValidator.set[stringSetIndex];
        let maxCompatibleSemverVersion = null;
        stringSetValidators.forEach((semverOperation) => {
          let currentSemverVersion = new SemverVersion(
            semverOperation.semver.version,
          );
          switch (semverOperation.operator) {
            case ">":
              if (currentSemverVersion.prerelease.length === 0) {
                currentSemverVersion.patch++;
              } else {
                currentSemverVersion.prerelease.push(0);
              }
              currentSemverVersion.raw = currentSemverVersion.format();
            case "":
            case ">=":
              if (
                !maxCompatibleSemverVersion ||
                _maxBitValueForCopyOperation(
                  currentSemverVersion,
                  maxCompatibleSemverVersion,
                )
              ) {
                maxCompatibleSemverVersion = currentSemverVersion;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(
                "Unexpected operation: " + semverOperation.operator,
              );
          }
        });
        if (
          maxCompatibleSemverVersion &&
          (!initialSemverVersion ||
            _maxBitValueForCopyOperation(
              initialSemverVersion,
              maxCompatibleSemverVersion,
            ))
        ) {
          initialSemverVersion = maxCompatibleSemverVersion;
        }
      }
      if (initialSemverVersion && _stringValidator.test(initialSemverVersion)) {
        return initialSemverVersion;
      } else {
        return null;
      }
    };
    validateVersionAgainstSemver.exports = validateSemverWithBase64;
  },
);
var DeferredPromiseClass = getModuleExportsIfAbsent(
  (createRangeValidator, rangeValidationFunction) => {
    var base64RangeValidator = base64EncodingValidator();
    var validateBase64Range = (startRange, base64RangeValidatorInstance) => {
      try {
        return (
          new base64RangeValidator(startRange, base64RangeValidatorInstance)
            .range || "*"
        );
      } catch {
        return null;
      }
    };
    rangeValidationFunction.exports = validateBase64Range;
  },
);
var promiseExecutor = getModuleExportsIfAbsent(
  (calculateBufferCopyOperation, calculateBufferCopyParameters) => {
    var BufferReadValue = readLogBufferValue();
    var calculatedDataBuffer = calculatedValueArray();
    var { ANY: bufferCopyData } = calculatedDataBuffer;
    var base64EncodingResult = base64EncodingValidator();
    var _dataCopyLength = dataCopyLength();
    var maxBitValueForBufferCopy = maxBitValueForCopyOperation();
    var writeBufferValueLE = writeUintLE();
    var performBufferCopyOperation = _bufferCopyOperation();
    var _bufferCopyOperationLimit = bufferCopyOperationLimit();
    var executeBufferCopyOperation = (
      bufferReadProcessor,
      base64EncodedResult,
      comparisonOperator,
      bufferComparisonValue,
    ) => {
      bufferReadProcessor = new BufferReadValue(
        bufferReadProcessor,
        bufferComparisonValue,
      );
      base64EncodedResult = new base64EncodingResult(
        base64EncodedResult,
        bufferComparisonValue,
      );
      let bufferValueComparisonFunction;
      let bufferCopyOperationFunction;
      let bufferWriteFunction;
      let comparisonOperatorLessThan;
      let comparisonOperatorEqualOrGreaterThan;
      switch (comparisonOperator) {
        case ">":
          bufferValueComparisonFunction = maxBitValueForBufferCopy;
          bufferCopyOperationFunction = performBufferCopyOperation;
          bufferWriteFunction = writeBufferValueLE;
          comparisonOperatorLessThan = ">";
          comparisonOperatorEqualOrGreaterThan = ">=";
          break;
        case "<":
          bufferValueComparisonFunction = writeBufferValueLE;
          bufferCopyOperationFunction = _bufferCopyOperationLimit;
          bufferWriteFunction = maxBitValueForBufferCopy;
          comparisonOperatorLessThan = "<";
          comparisonOperatorEqualOrGreaterThan = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (
        _dataCopyLength(
          bufferReadProcessor,
          base64EncodedResult,
          bufferComparisonValue,
        )
      ) {
        return false;
      }
      for (let index = 0; index < base64EncodedResult.set.length; ++index) {
        let base64EncodedItem = base64EncodedResult.set[index];
        let mostRecentVersion = null;
        let latestCompatibleVersion = null;
        base64EncodedItem.forEach((versionBuffer) => {
          if (versionBuffer.semver === bufferCopyData) {
            versionBuffer = new calculatedDataBuffer(">=0.0.0");
          }
          mostRecentVersion = mostRecentVersion || versionBuffer;
          latestCompatibleVersion = latestCompatibleVersion || versionBuffer;
          if (
            bufferValueComparisonFunction(
              versionBuffer.semver,
              mostRecentVersion.semver,
              bufferComparisonValue,
            )
          ) {
            mostRecentVersion = versionBuffer;
          } else if (
            bufferWriteFunction(
              versionBuffer.semver,
              latestCompatibleVersion.semver,
              bufferComparisonValue,
            )
          ) {
            latestCompatibleVersion = versionBuffer;
          }
        });
        if (
          mostRecentVersion.operator === comparisonOperatorLessThan ||
          mostRecentVersion.operator === comparisonOperatorEqualOrGreaterThan ||
          ((!latestCompatibleVersion.operator ||
            latestCompatibleVersion.operator === comparisonOperatorLessThan) &&
            bufferCopyOperationFunction(
              bufferReadProcessor,
              latestCompatibleVersion.semver,
            ))
        ) {
          return false;
        }
        if (
          latestCompatibleVersion.operator ===
            comparisonOperatorEqualOrGreaterThan &&
          bufferWriteFunction(
            bufferReadProcessor,
            latestCompatibleVersion.semver,
          )
        ) {
          return false;
        }
      }
      return true;
    };
    calculateBufferCopyParameters.exports = executeBufferCopyOperation;
  },
);
var validateIntrinsicPropertiesAndConvert = getModuleExportsIfAbsent(
  (executePromiseWithComparison, executePromiseWithGreaterThanComparison) => {
    var _executePromiseWithGreaterThanComparison = promiseExecutor();
    var __executePromiseWithGreaterThanComparison = (
      valueA,
      comparisonValue,
      executeComparisonWithGreaterThan,
    ) =>
      _executePromiseWithGreaterThanComparison(
        valueA,
        comparisonValue,
        ">",
        executeComparisonWithGreaterThan,
      );
    executePromiseWithGreaterThanComparison.exports =
      __executePromiseWithGreaterThanComparison;
  },
);
var validateAndProcessUnicode = getModuleExportsIfAbsent(
  (executePromiseWithCondition, executeConditionalPromise) => {
    var executeComparisonPromise = promiseExecutor();
    var executeComparisonWithThreshold = (
      executeComparison,
      _comparisonValue,
      comparisonThreshold,
    ) =>
      executeComparisonPromise(
        executeComparison,
        _comparisonValue,
        "<",
        comparisonThreshold,
      );
    executeConditionalPromise.exports = executeComparisonWithThreshold;
  },
);
var handleCharacterEncoding = getModuleExportsIfAbsent(
  (validateAndCheckIntersections, exportedIntersectionValidator) => {
    var createAndCheckBase64Intersections = base64EncodingValidator();
    var checkBase64Intersections = (
      base64IntersectionChecker,
      base64IntersectionResult,
      _base64IntersectionChecker,
    ) => {
      base64IntersectionChecker = new createAndCheckBase64Intersections(
        base64IntersectionChecker,
        _base64IntersectionChecker,
      );
      base64IntersectionResult = new createAndCheckBase64Intersections(
        base64IntersectionResult,
        _base64IntersectionChecker,
      );
      return base64IntersectionChecker.intersects(base64IntersectionResult);
    };
    exportedIntersectionValidator.exports = checkBase64Intersections;
  },
);
var logSemverErrors = getModuleExportsIfAbsent(
  (processAndFormatSortedData, processAndFormatExports) => {
    var isItemValidForProcessing = dataCopyLength();
    var calculateSortOrder = calculateBufferOffset();
    processAndFormatExports.exports = (
      generateConditionString,
      currentItem,
      sortOrderReference,
    ) => {
      let conditionPairs = [];
      let currentCondition = null;
      let lastValidCondition = null;
      let sortedConditions = generateConditionString.sort(
        (compareItemsBySortOrder, compareAndSortItems) =>
          calculateSortOrder(
            compareItemsBySortOrder,
            compareAndSortItems,
            sortOrderReference,
          ),
      );
      for (let __condition of sortedConditions) {
        if (
          isItemValidForProcessing(__condition, currentItem, sortOrderReference)
        ) {
          lastValidCondition = __condition;
          currentCondition ||= __condition;
        } else {
          if (lastValidCondition) {
            conditionPairs.push([currentCondition, lastValidCondition]);
          }
          lastValidCondition = null;
          currentCondition = null;
        }
      }
      if (currentCondition) {
        conditionPairs.push([currentCondition, null]);
      }
      let matchedConditions = [];
      for (let [conditionPairValue1, conditionPairValue2] of conditionPairs) {
        if (conditionPairValue1 === conditionPairValue2) {
          matchedConditions.push(conditionPairValue1);
        } else if (
          !conditionPairValue2 &&
          conditionPairValue1 === sortedConditions[0]
        ) {
          matchedConditions.push("*");
        } else if (conditionPairValue2) {
          if (conditionPairValue1 === sortedConditions[0]) {
            matchedConditions.push("<=" + conditionPairValue2);
          } else {
            matchedConditions.push(
              conditionPairValue1 + " - " + conditionPairValue2,
            );
          }
        } else {
          matchedConditions.push(">=" + conditionPairValue1);
        }
      }
      let condition = matchedConditions.join(" || ");
      let _condition =
        typeof currentItem.raw == "string"
          ? currentItem.raw
          : String(currentItem);
      if (condition.length < _condition.length) {
        return condition;
      } else {
        return currentItem;
      }
    };
  },
);
var setRegexPattern = getModuleExportsIfAbsent(
  (validateBase64EncodingAndCompare, _validateBase64EncodingAndCompare) => {
    var Base64EncodedObject = base64EncodingValidator();
    var calculatedValues = calculatedValueArray();
    var { ANY: activeBase64Encoding } = calculatedValues;
    var base64DataComparison = dataCopyLength();
    var calculateBase64BufferOffset = calculateBufferOffset();
    var compareBase64EncodedObjects = (
      areBase64EncodedObjectsEqual,
      __compareBase64EncodedObjects,
      userSettings = {},
    ) => {
      if (areBase64EncodedObjectsEqual === __compareBase64EncodedObjects) {
        return true;
      }
      areBase64EncodedObjectsEqual = new Base64EncodedObject(
        areBase64EncodedObjectsEqual,
        userSettings,
      );
      __compareBase64EncodedObjects = new Base64EncodedObject(
        __compareBase64EncodedObjects,
        userSettings,
      );
      let hasDifferencesInBase64Objects = false;
      _0x2c2450: for (let base64ObjectA of areBase64EncodedObjectsEqual.set) {
        for (let base64ObjectB of __compareBase64EncodedObjects.set) {
          let comparisonResult = compareBase64Strings(
            base64ObjectA,
            base64ObjectB,
            userSettings,
          );
          hasDifferencesInBase64Objects =
            hasDifferencesInBase64Objects || comparisonResult !== null;
          if (comparisonResult) {
            continue _0x2c2450;
          }
        }
        if (hasDifferencesInBase64Objects) {
          return false;
        }
      }
      return true;
    };
    var compareBase64Strings = (
      base64EncodedVersionConstraints,
      currentVersionConstraints,
      versionConstraintsOptions,
    ) => {
      if (base64EncodedVersionConstraints === currentVersionConstraints) {
        return true;
      }
      if (
        base64EncodedVersionConstraints.length === 1 &&
        base64EncodedVersionConstraints[0].semver === activeBase64Encoding
      ) {
        if (
          currentVersionConstraints.length === 1 &&
          currentVersionConstraints[0].semver === activeBase64Encoding
        ) {
          return true;
        }
        if (versionConstraintsOptions.includePrerelease) {
          base64EncodedVersionConstraints = [new calculatedValues(">=0.0.0-0")];
        } else {
          base64EncodedVersionConstraints = [new calculatedValues(">=0.0.0")];
        }
      }
      if (
        currentVersionConstraints.length === 1 &&
        currentVersionConstraints[0].semver === activeBase64Encoding
      ) {
        if (versionConstraintsOptions.includePrerelease) {
          return true;
        }
        currentVersionConstraints = [new calculatedValues(">=0.0.0")];
      }
      let uniqueVersionConstraintsSet = new Set();
      let uniqueVersionConstraints;
      let compareVersionConstraints;
      for (let ___versionConstraint of base64EncodedVersionConstraints) {
        if (
          ___versionConstraint.operator === ">" ||
          ___versionConstraint.operator === ">="
        ) {
          uniqueVersionConstraints = _compareBase64EncodedObjects(
            uniqueVersionConstraints,
            ___versionConstraint,
            versionConstraintsOptions,
          );
        } else if (
          ___versionConstraint.operator === "<" ||
          ___versionConstraint.operator === "<="
        ) {
          compareVersionConstraints = compareBase64EncodedStrings(
            compareVersionConstraints,
            ___versionConstraint,
            versionConstraintsOptions,
          );
        } else {
          uniqueVersionConstraintsSet.add(___versionConstraint.semver);
        }
      }
      if (uniqueVersionConstraintsSet.size > 1) {
        return null;
      }
      let _compareVersionConstraints;
      if (uniqueVersionConstraints && compareVersionConstraints) {
        _compareVersionConstraints = calculateBase64BufferOffset(
          uniqueVersionConstraints.semver,
          compareVersionConstraints.semver,
          versionConstraintsOptions,
        );
        if (_compareVersionConstraints > 0) {
          return null;
        }
        if (
          _compareVersionConstraints === 0 &&
          (uniqueVersionConstraints.operator !== ">=" ||
            compareVersionConstraints.operator !== "<=")
        ) {
          return null;
        }
      }
      for (let __versionConstraint of uniqueVersionConstraintsSet) {
        if (
          (uniqueVersionConstraints &&
            !base64DataComparison(
              __versionConstraint,
              String(uniqueVersionConstraints),
              versionConstraintsOptions,
            )) ||
          (compareVersionConstraints &&
            !base64DataComparison(
              __versionConstraint,
              String(compareVersionConstraints),
              versionConstraintsOptions,
            ))
        ) {
          return null;
        }
        for (let ____versionConstraint of currentVersionConstraints) {
          if (
            !base64DataComparison(
              __versionConstraint,
              String(____versionConstraint),
              versionConstraintsOptions,
            )
          ) {
            return false;
          }
        }
        return true;
      }
      let validateVersionConstraints;
      let _validateVersionConstraints;
      let areVersionConstraintsEqual;
      let checkVersionConstraints;
      let _checkVersionConstraints =
        compareVersionConstraints &&
        !versionConstraintsOptions.includePrerelease &&
        compareVersionConstraints.semver.prerelease.length
          ? compareVersionConstraints.semver
          : false;
      let __validateVersionConstraints =
        uniqueVersionConstraints &&
        !versionConstraintsOptions.includePrerelease &&
        uniqueVersionConstraints.semver.prerelease.length
          ? uniqueVersionConstraints.semver
          : false;
      if (
        _checkVersionConstraints &&
        _checkVersionConstraints.prerelease.length === 1 &&
        compareVersionConstraints.operator === "<" &&
        _checkVersionConstraints.prerelease[0] === 0
      ) {
        _checkVersionConstraints = false;
      }
      for (let _versionConstraint of currentVersionConstraints) {
        checkVersionConstraints =
          checkVersionConstraints ||
          _versionConstraint.operator === ">" ||
          _versionConstraint.operator === ">=";
        areVersionConstraintsEqual =
          areVersionConstraintsEqual ||
          _versionConstraint.operator === "<" ||
          _versionConstraint.operator === "<=";
        if (uniqueVersionConstraints) {
          if (
            __validateVersionConstraints &&
            _versionConstraint.semver.prerelease &&
            _versionConstraint.semver.prerelease.length &&
            _versionConstraint.semver.major ===
              __validateVersionConstraints.major &&
            _versionConstraint.semver.minor ===
              __validateVersionConstraints.minor &&
            _versionConstraint.semver.patch ===
              __validateVersionConstraints.patch
          ) {
            __validateVersionConstraints = false;
          }
          if (
            _versionConstraint.operator === ">" ||
            _versionConstraint.operator === ">="
          ) {
            validateVersionConstraints = _compareBase64EncodedObjects(
              uniqueVersionConstraints,
              _versionConstraint,
              versionConstraintsOptions,
            );
            if (
              validateVersionConstraints === _versionConstraint &&
              validateVersionConstraints !== uniqueVersionConstraints
            ) {
              return false;
            }
          } else if (
            uniqueVersionConstraints.operator === ">=" &&
            !base64DataComparison(
              uniqueVersionConstraints.semver,
              String(_versionConstraint),
              versionConstraintsOptions,
            )
          ) {
            return false;
          }
        }
        if (compareVersionConstraints) {
          if (
            _checkVersionConstraints &&
            _versionConstraint.semver.prerelease &&
            _versionConstraint.semver.prerelease.length &&
            _versionConstraint.semver.major ===
              _checkVersionConstraints.major &&
            _versionConstraint.semver.minor ===
              _checkVersionConstraints.minor &&
            _versionConstraint.semver.patch === _checkVersionConstraints.patch
          ) {
            _checkVersionConstraints = false;
          }
          if (
            _versionConstraint.operator === "<" ||
            _versionConstraint.operator === "<="
          ) {
            _validateVersionConstraints = compareBase64EncodedStrings(
              compareVersionConstraints,
              _versionConstraint,
              versionConstraintsOptions,
            );
            if (
              _validateVersionConstraints === _versionConstraint &&
              _validateVersionConstraints !== compareVersionConstraints
            ) {
              return false;
            }
          } else if (
            compareVersionConstraints.operator === "<=" &&
            !base64DataComparison(
              compareVersionConstraints.semver,
              String(_versionConstraint),
              versionConstraintsOptions,
            )
          ) {
            return false;
          }
        }
        if (
          !_versionConstraint.operator &&
          (compareVersionConstraints || uniqueVersionConstraints) &&
          _compareVersionConstraints !== 0
        ) {
          return false;
        }
      }
      return (
        (!uniqueVersionConstraints ||
          !areVersionConstraintsEqual ||
          !!compareVersionConstraints ||
          _compareVersionConstraints === 0) &&
        (!compareVersionConstraints ||
          !checkVersionConstraints ||
          !!uniqueVersionConstraints ||
          _compareVersionConstraints === 0) &&
        !__validateVersionConstraints &&
        !_checkVersionConstraints
      );
    };
    var _compareBase64EncodedObjects = (
      __currentVersion,
      currentVersionFallback,
      _base64BufferOffset,
    ) => {
      if (!__currentVersion) {
        return currentVersionFallback;
      }
      let _base64BufferDifference = calculateBase64BufferOffset(
        __currentVersion.semver,
        currentVersionFallback.semver,
        _base64BufferOffset,
      );
      if (_base64BufferDifference > 0) {
        return __currentVersion;
      } else if (
        _base64BufferDifference < 0 ||
        (currentVersionFallback.operator === ">" &&
          __currentVersion.operator === ">=")
      ) {
        return currentVersionFallback;
      } else {
        return __currentVersion;
      }
    };
    var compareBase64EncodedStrings = (
      _currentVersion,
      currentPackageVersion,
      base64BufferOffset,
    ) => {
      if (!_currentVersion) {
        return currentPackageVersion;
      }
      let base64BufferDifference = calculateBase64BufferOffset(
        _currentVersion.semver,
        currentPackageVersion.semver,
        base64BufferOffset,
      );
      if (base64BufferDifference < 0) {
        return _currentVersion;
      } else if (
        base64BufferDifference > 0 ||
        (currentPackageVersion.operator === "<" &&
          _currentVersion.operator === "<=")
      ) {
        return currentPackageVersion;
      } else {
        return _currentVersion;
      }
    };
    _validateBase64EncodingAndCompare.exports = compareBase64EncodedObjects;
  },
);
var parseVersion = getModuleExportsIfAbsent(
  (processAndValidateBuffers, validateAndProcessBuffers) => {
    var accumulatedCharacterCodes = accumulateCharacterCodes();
    var __processUnicodeCharacters = processUnicodeCharacters();
    var _logBufferValue = readLogBufferValue();
    var readUnsignedByte = readUnsignedInt8();
    var _calculateBufferOffset = bufferOffset();
    var readBigInt64Value = readBigInt64FromBuffer();
    var readBigInt64AtBufferOffset = readBigInt64BufferOffset();
    var __readBigInt64FromBuffer = _readBigInt64FromBuffer();
    var bufferReadDoubleLittleEndian = bufferReadDoubleLE();
    var __validateAndAllocateBuffer = _validateAndAllocateBuffer();
    var initializeBufferReader = bufferReader();
    var readDoubleLittleEndian = readDoubleLE();
    var _readIntrinsicPropertiesBuffer = readIntrinsicPropertiesBuffer();
    var __calculateBufferOffset = calculateBufferOffset();
    var ___validateAndCopyIntrinsicProperties =
      __validateAndCopyIntrinsicProperties();
    var __validateIntrinsicPropertiesBuffer =
      _validateIntrinsicPropertiesBuffer();
    var _validateAndProcessBuffers = validateBufferAndCopyProperties();
    var __validateAndProcessBuffers = maxBufferValue();
    var validateAndProcessUnicodeBuffers = maxBufferValueForValidation();
    var ___validateAndProcessBuffers = maxBitValueForCopyOperation();
    var validateAndProcessCharacterBuffers = writeUintLE();
    var _accumulatedCharacterCodes = bufferValue();
    var _processAndValidateBuffers = _maxBufferValue();
    var ____validateAndProcessBuffers = bufferCopyOperationLimit();
    var __processAndValidateBuffers = _bufferCopyOperation();
    var _validateAndProcessCharacterBuffers = bufferValueManipulation();
    var _____validateAndProcessBuffers = validateMimeTypeAndUserAgentSwitch();
    var ______validateAndProcessBuffers = calculatedValueArray();
    var ___processAndValidateBuffers = base64EncodingValidator();
    var _______validateAndProcessBuffers = dataCopyLength();
    var ____processAndValidateBuffers = calculateEffectiveWriteLength();
    var ________validateAndProcessBuffers = validateAndStorePropertiesDiff();
    var _accumulateCharacterCodes = _handleEncodingConversion();
    var _____processAndValidateBuffers = handlePromiseExecution();
    var validateAndProcessIntrinsics = DeferredPromiseClass();
    var _________validateAndProcessBuffers = promiseExecutor();
    var ______processAndValidateBuffers =
      validateIntrinsicPropertiesAndConvert();
    var _______processAndValidateBuffers = validateAndProcessUnicode();
    var _processBufferData = handleCharacterEncoding();
    var __accumulateCharacterCodes = logSemverErrors();
    var ________processAndValidateBuffers = setRegexPattern();
    validateAndProcessBuffers.exports = {
      parse: _calculateBufferOffset,
      valid: readBigInt64Value,
      clean: readBigInt64AtBufferOffset,
      inc: __readBigInt64FromBuffer,
      diff: bufferReadDoubleLittleEndian,
      major: __validateAndAllocateBuffer,
      minor: initializeBufferReader,
      patch: readDoubleLittleEndian,
      prerelease: _readIntrinsicPropertiesBuffer,
      compare: __calculateBufferOffset,
      rcompare: ___validateAndCopyIntrinsicProperties,
      compareLoose: __validateIntrinsicPropertiesBuffer,
      compareBuild: _validateAndProcessBuffers,
      sort: __validateAndProcessBuffers,
      rsort: validateAndProcessUnicodeBuffers,
      gt: ___validateAndProcessBuffers,
      lt: validateAndProcessCharacterBuffers,
      eq: _accumulatedCharacterCodes,
      neq: _processAndValidateBuffers,
      gte: ____validateAndProcessBuffers,
      lte: __processAndValidateBuffers,
      cmp: _validateAndProcessCharacterBuffers,
      coerce: _____validateAndProcessBuffers,
      Comparator: ______validateAndProcessBuffers,
      Range: ___processAndValidateBuffers,
      satisfies: _______validateAndProcessBuffers,
      toComparators: ____processAndValidateBuffers,
      maxSatisfying: ________validateAndProcessBuffers,
      minSatisfying: _accumulateCharacterCodes,
      minVersion: _____processAndValidateBuffers,
      validRange: validateAndProcessIntrinsics,
      outside: _________validateAndProcessBuffers,
      gtr: ______processAndValidateBuffers,
      ltr: _______processAndValidateBuffers,
      intersects: _processBufferData,
      simplifyRange: __accumulateCharacterCodes,
      subset: ________processAndValidateBuffers,
      SemVer: _logBufferValue,
      re: accumulatedCharacterCodes.re,
      src: accumulatedCharacterCodes.src,
      tokens: accumulatedCharacterCodes.t,
      SEMVER_SPEC_VERSION: __processUnicodeCharacters.SEMVER_SPEC_VERSION,
      compareIdentifiers: readUnsignedByte.compareIdentifiers,
      rcompareIdentifiers: readUnsignedByte.rcompareIdentifiers,
    };
  },
);
var compareVersion = getModuleExportsIfAbsent(
  (escapeSpecialCharacters, escapeSpecialCharactersModule) => {
    escapeSpecialCharactersModule.exports = (_escapeSpecialCharacters) => {
      if (typeof _escapeSpecialCharacters != "string") {
        throw new TypeError("Expected a string");
      }
      return _escapeSpecialCharacters
        .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
        .replace(/-/g, "\\x2d");
    };
  },
);
var comparePrereleaseVersions = getModuleExportsIfAbsent((moduleImports) => {
  var importDefault =
    (moduleImports && moduleImports.__importDefault) ||
    function (_compareVersion) {
      if (_compareVersion && _compareVersion.__esModule) {
        return _compareVersion;
      } else {
        return {
          default: _compareVersion,
        };
      }
    };
  Object.defineProperty(moduleImports, "__esModule", {
    value: true,
  });
  moduleImports.createMatcherWithIndex = moduleImports.createMatcher =
    undefined;
  var importedCompareVersion = importDefault(compareVersion());
  function isPrereleaseVersionIncluded(_comparePrereleaseVersions) {
    let checkIfPrereleaseVersionIncluded = comparePrereleaseVersion(
      Array.isArray(_comparePrereleaseVersions)
        ? _comparePrereleaseVersions
        : [_comparePrereleaseVersions],
    );
    return (_isPrereleaseVersionIncluded) =>
      checkIfPrereleaseVersionIncluded(_isPrereleaseVersionIncluded) !== -1;
  }
  moduleImports.createMatcher = isPrereleaseVersionIncluded;
  function comparePrereleaseVersion(__comparePrereleaseVersions) {
    switch (__comparePrereleaseVersions.length) {
      case 0:
        return () => -1;
      case 1:
        return createInverseVersionComparator(__comparePrereleaseVersions[0]);
    }
    let prereleaseVersionMatches = [];
    let hasPrereleaseVersion = false;
    let hasReleaseVersion = false;
    for (let prereleaseVersion of __comparePrereleaseVersions) {
      if (isPreReleaseIndicator(prereleaseVersion)) {
        hasPrereleaseVersion = true;
        prereleaseVersionMatches.push({
          ignore: true,
          match: createVersionMatcher(prereleaseVersion.substring(1)),
        });
      } else {
        hasReleaseVersion = true;
        prereleaseVersionMatches.push({
          ignore: false,
          match: createVersionMatcher(prereleaseVersion),
        });
      }
    }
    if (hasPrereleaseVersion) {
      if (hasReleaseVersion) {
        return findMatchingIncrementIndex.bind(null, prereleaseVersionMatches);
      } else {
        return compareVersionPrereleases.bind(null, prereleaseVersionMatches);
      }
    } else {
      return findMatchingBuildIndex.bind(null, prereleaseVersionMatches);
    }
  }
  moduleImports.createMatcherWithIndex = comparePrereleaseVersion;
  function findMatchingBuildIndex(compareBuildWithVersion, reBuildVersion) {
    for (
      let __________currentIndex = 0;
      __________currentIndex < compareBuildWithVersion.length;
      __________currentIndex++
    ) {
      if (
        compareBuildWithVersion[__________currentIndex].match(reBuildVersion)
      ) {
        return __________currentIndex;
      }
    }
    return -1;
  }
  function compareVersionPrereleases(
    ___comparePrereleaseVersions,
    ____comparePrereleaseVersions,
  ) {
    if (
      ___comparePrereleaseVersions.some(({ match: matchData }) =>
        matchData(____comparePrereleaseVersions),
      )
    ) {
      return -1;
    } else {
      return 0;
    }
  }
  function findMatchingIncrementIndex(incrementVersion, _incrementVersion) {
    let matchingIncrementIndex = -1;
    for (
      let incrementVersionIndex = 0;
      incrementVersionIndex < incrementVersion.length;
      incrementVersionIndex++
    ) {
      let { ignore: shouldIgnoreIncrement, match: isVersionMatching } =
        incrementVersion[incrementVersionIndex];
      if (shouldIgnoreIncrement) {
        if (isVersionMatching(_incrementVersion)) {
          matchingIncrementIndex = -1;
        }
      } else if (
        matchingIncrementIndex === -1 &&
        isVersionMatching(_incrementVersion)
      ) {
        matchingIncrementIndex = incrementVersionIndex;
      }
    }
    return matchingIncrementIndex;
  }
  function createVersionMatcher(versionIncrement) {
    if (versionIncrement === "*") {
      return () => true;
    }
    let sanitizedVersionPattern = (0, importedCompareVersion.default)(
      versionIncrement,
    ).replace(/\\\*/g, ".*");
    if (sanitizedVersionPattern === versionIncrement) {
      return (_versionIncrement) => _versionIncrement === versionIncrement;
    }
    let versionRegexMatcher = new RegExp("^" + sanitizedVersionPattern + "$");
    return (inputVersionString) => versionRegexMatcher.test(inputVersionString);
  }
  function isPreReleaseIndicator(incrementVersionBasedOnReleaseType) {
    return incrementVersionBasedOnReleaseType.startsWith("!");
  }
  function createInverseVersionComparator(__incrementVersion) {
    let inverseVersionComparator =
      createInverseVersionMatcher(__incrementVersion);
    return (____compareVersions) =>
      inverseVersionComparator(____compareVersions) ? 0 : -1;
  }
  function createInverseVersionMatcher(previousVersionIncrement) {
    if (!isPreReleaseIndicator(previousVersionIncrement)) {
      return createVersionMatcher(previousVersionIncrement);
    }
    let trimmedVersionIncrement = previousVersionIncrement.substring(1);
    let createInverseVersionMatcherFunction = createVersionMatcher(
      trimmedVersionIncrement,
    );
    return (isPatternMatchingInverse) =>
      !createInverseVersionMatcherFunction(isPatternMatchingInverse);
  }
});
var incrementPrereleaseVersion = getModuleExportsIfAbsent(
  (moduleDefinition, moduleExporter) => {
    var globalVariable =
      typeof globalVariable === "undefined" ? globalThis : globalVariable;
    (function (___incrementVersion, _incrementPrereleaseVersion) {
      if (typeof define == "function" && define.amd) {
        define([], _incrementPrereleaseVersion);
      } else if (typeof moduleDefinition == "object") {
        moduleExporter.exports = _incrementPrereleaseVersion();
      } else {
        ___incrementVersion.untar = _incrementPrereleaseVersion();
      }
    })(moduleDefinition, function () {
      "use strict";

      function registerIncrementHandler(____incrementVersion) {
        function handleIncrementPrerelease(incrementPrerelease) {
          for (
            var incrementHandlerIndex = 0,
              incrementHandlersCount = incrementHandlers.length;
            incrementHandlerIndex < incrementHandlersCount;
            ++incrementHandlerIndex
          ) {
            incrementHandlers[incrementHandlerIndex](incrementPrerelease);
          }
          incrementPrereleaseHandlers.push(incrementPrerelease);
        }
        if (typeof Promise != "function") {
          throw new Error(
            "Promise implementation not available in this environment.",
          );
        }
        var incrementHandlers = [];
        var incrementPrereleaseHandlers = [];
        var incrementPromise = new Promise(function (
          __incrementPrereleaseVersion,
          _____incrementVersion,
        ) {
          ____incrementVersion(
            __incrementPrereleaseVersion,
            _____incrementVersion,
            handleIncrementPrerelease,
          );
        });
        incrementPromise.progress = function (validatePrereleaseVersion) {
          if (typeof validatePrereleaseVersion != "function") {
            throw new Error("cb is not a function.");
          }
          for (
            var _prereleaseIndex = 0,
              incrementPrereleaseHandlerCount =
                incrementPrereleaseHandlers.length;
            _prereleaseIndex < incrementPrereleaseHandlerCount;
            ++_prereleaseIndex
          ) {
            validatePrereleaseVersion(
              incrementPrereleaseHandlers[_prereleaseIndex],
            );
          }
          incrementHandlers.push(validatePrereleaseVersion);
          return incrementPromise;
        };
        var registerAndHandleIncrement = incrementPromise.then;
        incrementPromise.then = function (
          validateAndParseStringToVersion,
          validateAndParseString,
          createVersionObject,
        ) {
          registerAndHandleIncrement.call(
            incrementPromise,
            validateAndParseStringToVersion,
            validateAndParseString,
          );
          if (createVersionObject !== undefined) {
            incrementPromise.progress(createVersionObject);
          }
          return incrementPromise;
        };
        return incrementPromise;
      }
      function createAndValidateWorker(parseAndValidateString) {
        if (!(parseAndValidateString instanceof ArrayBuffer)) {
          throw new TypeError("arrayBuffer is not an instance of ArrayBuffer.");
        }
        if (!_handleIncrementVersion.Worker) {
          throw new Error(
            "Worker implementation is not available in this environment.",
          );
        }
        return new registerIncrementHandler(function (
          parseLogAndValidate,
          validateVersionString,
          parseSemanticVersion,
        ) {
          var prereleaseVersionWorker = new Worker(handlePrereleaseVersion);
          var extractedVersions = [];
          prereleaseVersionWorker.onerror = function (parseBigInt64FromBuffer) {
            validateVersionString(parseBigInt64FromBuffer);
          };
          prereleaseVersionWorker.onmessage = function (
            validateAndCreateObject,
          ) {
            validateAndCreateObject = validateAndCreateObject.data;
            switch (validateAndCreateObject.type) {
              case "log":
                console[validateAndCreateObject.data.level](
                  "Worker: " + validateAndCreateObject.data.msg,
                );
                break;
              case "extract":
                var extractedData =
                  defineIncrementedVersionForBigInt64Calculation(
                    validateAndCreateObject.data,
                  );
                extractedVersions.push(extractedData);
                parseSemanticVersion(extractedData);
                break;
              case "complete":
                prereleaseVersionWorker.terminate();
                parseLogAndValidate(extractedVersions);
                break;
              case "error":
                prereleaseVersionWorker.terminate();
                validateVersionString(
                  new Error(validateAndCreateObject.data.message),
                );
                break;
              default:
                prereleaseVersionWorker.terminate();
                validateVersionString(
                  new Error(
                    "Unknown message from worker: " +
                      validateAndCreateObject.type,
                  ),
                );
            }
          };
          prereleaseVersionWorker.postMessage(
            {
              type: "extract",
              buffer: parseAndValidateString,
            },
            [parseAndValidateString],
          );
        });
      }
      function defineIncrementedVersionForBigInt64Calculation(
        calculateBigInt64FromBuffer,
      ) {
        Object.defineProperties(
          calculateBigInt64FromBuffer,
          __handleIncrementVersion,
        );
        return calculateBigInt64FromBuffer;
      }
      var handlePrereleaseVersion;
      var _handleIncrementVersion = globalVariable || this;
      var registerProgressCallback =
        _handleIncrementVersion.URL || _handleIncrementVersion.webkitURL;
      var __handleIncrementVersion = {
        blob: {
          get() {
            return (this._blob ||= new Blob([this.buffer]));
          },
        },
        getBlobUrl: {
          value() {
            return (this._blobUrl ||= registerProgressCallback.createObjectURL(
              this.blob,
            ));
          },
        },
        readAsString: {
          value() {
            var ______bufferValue = this.buffer;
            for (
              var _________bufferLength = ______bufferValue.byteLength,
                byteSize = 1,
                _dataView = new DataView(______bufferValue),
                byteDataArray = [],
                _currentByteIndex = 0;
              _currentByteIndex < _________bufferLength;
              ++_currentByteIndex
            ) {
              var ___byteValue = _dataView.getUint8(
                _currentByteIndex * byteSize,
                true,
              );
              byteDataArray.push(___byteValue);
            }
            return (this._string = String.fromCharCode.apply(
              null,
              byteDataArray,
            ));
          },
        },
        readAsJSON: {
          value() {
            return JSON.parse(this.readAsString());
          },
        },
      };
      handlePrereleaseVersion = (globalVariable || this).URL.createObjectURL(
        new Blob([
          '"use strict";function UntarWorker(){}function decodeUTF8(e){for(var r="",t=0;t<e.length;){var a=e[t++];if(a>127){if(a>191&&a<224){if(t>=e.length)throw"UTF-8 decode: incomplete 2-byte sequence";a=(31&a)<<6|63&e[t]}else if(a>223&&a<240){if(t+1>=e.length)throw"UTF-8 decode: incomplete 3-byte sequence";a=(15&a)<<12|(63&e[t])<<6|63&e[++t]}else{if(!(a>239&&a<248))throw"UTF-8 decode: unknown multibyte start 0x"+a.toString(16)+" at index "+(t-1);if(t+2>=e.length)throw"UTF-8 decode: incomplete 4-byte sequence";a=(7&a)<<18|(63&e[t])<<12|(63&e[++t])<<6|63&e[++t]}++t}if(a<=65535)r+=String.fromCharCode(a);else{if(!(a<=1114111))throw"UTF-8 decode: code point 0x"+a.toString(16)+" exceeds UTF-16 reach";a-=65536,r+=String.fromCharCode(a>>10|55296),r+=String.fromCharCode(1023&a|56320)}}return r}function PaxHeader(e){this._fields=e}function TarFile(){}function UntarStream(e){this._bufferView=new DataView(e),this._position=0}function UntarFileStream(e){this._stream=new UntarStream(e),this._globalPaxHeader=null}if(UntarWorker.prototype={onmessage:function(e){try{if("extract"!==e.data.type)throw new Error("Unknown message type: "+e.data.type);this.untarBuffer(e.data.buffer)}catch(r){this.postError(r)}},postError:function(e){this.postMessage({type:"error",data:{message:e.message}})},postLog:function(e,r){this.postMessage({type:"log",data:{level:e,msg:r}})},untarBuffer:function(e){try{for(var r=new UntarFileStream(e);r.hasNext();){var t=r.next();this.postMessage({type:"extract",data:t},[t.buffer])}this.postMessage({type:"complete"})}catch(a){this.postError(a)}},postMessage:function(e,r){self.postMessage(e,r)}},"undefined"!=typeof self){var worker=new UntarWorker;self.onmessage=function(e){worker.onmessage(e)}}PaxHeader.parse=function(e){for(var r=new Uint8Array(e),t=[];r.length>0;){var a=parseInt(decodeUTF8(r.subarray(0,r.indexOf(32)))),n=decodeUTF8(r.subarray(0,a)),i=n.match(/^\\d+ ([^=]+)=(.*)\\n$/);if(null===i)throw new Error("Invalid PAX header data format.");var s=i[1],o=i[2];0===o.length?o=null:null!==o.match(/^\\d+$/)&&(o=parseInt(o));var f={name:s,value:o};t.push(f),r=r.subarray(a)}return new PaxHeader(t)},PaxHeader.prototype={applyHeader:function(e){this._fields.forEach(function(r){var t=r.name,a=r.value;"path"===t?(t="name",void 0!==e.prefix&&delete e.prefix):"linkpath"===t&&(t="linkname"),null===a?delete e[t]:e[t]=a})}},UntarStream.prototype={readString:function(e){for(var r=1,t=e*r,a=[],n=0;n<e;++n){var i=this._bufferView.getUint8(this.position()+n*r,!0);if(0===i)break;a.push(i)}return this.seek(t),String.fromCharCode.apply(null,a)},readBuffer:function(e){var r;if("function"==typeof ArrayBuffer.prototype.slice)r=this._bufferView.buffer.slice(this.position(),this.position()+e);else{r=new ArrayBuffer(e);var t=new Uint8Array(r),a=new Uint8Array(this._bufferView.buffer,this.position(),e);t.set(a)}return this.seek(e),r},seek:function(e){this._position+=e},peekUint32:function(){return this._bufferView.getUint32(this.position(),!0)},position:function(e){return void 0===e?this._position:void(this._position=e)},size:function(){return this._bufferView.byteLength}},UntarFileStream.prototype={hasNext:function(){return this._stream.position()+4<this._stream.size()&&0!==this._stream.peekUint32()},next:function(){return this._readNextFile()},_readNextFile:function(){var e=this._stream,r=new TarFile,t=!1,a=null,n=e.position(),i=n+512;switch(r.name=e.readString(100),r.mode=e.readString(8),r.uid=parseInt(e.readString(8)),r.gid=parseInt(e.readString(8)),r.size=parseInt(e.readString(12),8),r.mtime=parseInt(e.readString(12),8),r.checksum=parseInt(e.readString(8)),r.type=e.readString(1),r.linkname=e.readString(100),r.ustarFormat=e.readString(6),r.ustarFormat.indexOf("ustar")>-1&&(r.version=e.readString(2),r.uname=e.readString(32),r.gname=e.readString(32),r.devmajor=parseInt(e.readString(8)),r.devminor=parseInt(e.readString(8)),r.namePrefix=e.readString(155),r.namePrefix.length>0&&(r.name=r.namePrefix+"/"+r.name)),e.position(i),r.type){case"0":case"":r.buffer=e.readBuffer(r.size);break;case"1":break;case"2":break;case"3":break;case"4":break;case"5":break;case"6":break;case"7":break;case"g":t=!0,this._globalPaxHeader=PaxHeader.parse(e.readBuffer(r.size));break;case"x":t=!0,a=PaxHeader.parse(e.readBuffer(r.size))}void 0===r.buffer&&(r.buffer=new ArrayBuffer(0));var s=i+r.size;return r.size%512!==0&&(s+=512-r.size%512),e.position(s),t&&(r=this._readNextFile()),null!==this._globalPaxHeader&&this._globalPaxHeader.applyHeader(r),null!==a&&a.applyHeader(r),r}};',
        ]),
      );
      return createAndValidateWorker;
    });
  },
);
var validateOperatorFunction = getModuleExportsIfAbsent(
  (generateKeyValuePairs, generateKeyValueString) => {
    var { hasOwnProperty: _hasOwnProperty } = Object.prototype;
    var lineBreak =
      typeof process !== "undefined" && process.platform === "win32"
        ? "\r\n"
        : "\n";
    var generateKeyValuePairsFromObject = (
      processKeyValuePairs,
      keyValuePairConfig,
    ) => {
      let nestedKeyNames = [];
      let formattedKeyValuePairs = "";
      if (typeof keyValuePairConfig == "string") {
        keyValuePairConfig = {
          section: keyValuePairConfig,
          whitespace: false,
        };
      } else {
        keyValuePairConfig = keyValuePairConfig || Object.create(null);
        keyValuePairConfig.whitespace = keyValuePairConfig.whitespace === true;
      }
      let assignmentOperator = keyValuePairConfig.whitespace ? " = " : "=";
      for (let key of Object.keys(processKeyValuePairs)) {
        let keyValuePair = processKeyValuePairs[key];
        if (keyValuePair && Array.isArray(keyValuePair)) {
          for (let _value of keyValuePair) {
            formattedKeyValuePairs +=
              formatValueForKey(key + "[]") +
              assignmentOperator +
              formatValueForKey(_value) +
              lineBreak;
          }
        } else if (keyValuePair && typeof keyValuePair == "object") {
          nestedKeyNames.push(key);
        } else {
          formattedKeyValuePairs +=
            formatValueForKey(key) +
            assignmentOperator +
            formatValueForKey(keyValuePair) +
            lineBreak;
        }
      }
      if (keyValuePairConfig.section && formattedKeyValuePairs.length) {
        formattedKeyValuePairs =
          "[" +
          formatValueForKey(keyValuePairConfig.section) +
          "]" +
          lineBreak +
          formattedKeyValuePairs;
      }
      for (let nestedKeyName of nestedKeyNames) {
        let keyValuePairsString =
          _generateKeyValuePairs(nestedKeyName).join("\\.");
        let fullKeyValuePairPath =
          (keyValuePairConfig.section ? keyValuePairConfig.section + "." : "") +
          keyValuePairsString;
        let { whitespace: whitespace } = keyValuePairConfig;
        let generatedKeyValuePairs = generateKeyValuePairsFromObject(
          processKeyValuePairs[nestedKeyName],
          {
            section: fullKeyValuePairPath,
            whitespace: whitespace,
          },
        );
        if (formattedKeyValuePairs.length && generatedKeyValuePairs.length) {
          formattedKeyValuePairs += lineBreak;
        }
        formattedKeyValuePairs += generatedKeyValuePairs;
      }
      return formattedKeyValuePairs;
    };
    var _generateKeyValuePairs = (replaceAndSplitByLiteral) =>
      replaceAndSplitByLiteral
        .replace(/\1/g, "LITERAL\\1LITERAL")
        .replace(/\\\./g, "")
        .split(/\./)
        .map((replaceSpecialCharacters) =>
          replaceSpecialCharacters
            .replace(/\1/g, "\\.")
            .replace(/\2LITERAL\\1LITERAL\2/g, ""),
        );
    var __generateKeyValuePairs = (parseConfigString) => {
      let configObject = Object.create(null);
      let currentConfigSection = configObject;
      let currentConfigSectionKey = null;
      let configSectionRegex = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;
      let configLines = parseConfigString.split(/[\r\n]+/g);
      for (let _configLine of configLines) {
        if (!_configLine || _configLine.match(/^\s*[;#]/)) {
          continue;
        }
        let configSectionMatch = _configLine.match(configSectionRegex);
        if (!configSectionMatch) {
          continue;
        }
        if (configSectionMatch[1] !== undefined) {
          currentConfigSectionKey = _generateKeyValueString(
            configSectionMatch[1],
          );
          if (currentConfigSectionKey === "__proto__") {
            currentConfigSection = Object.create(null);
            continue;
          }
          currentConfigSection = configObject[currentConfigSectionKey] =
            configObject[currentConfigSectionKey] || Object.create(null);
          continue;
        }
        let keyValueString = _generateKeyValueString(configSectionMatch[2]);
        let isKeyValueArray =
          keyValueString.length > 2 && keyValueString.slice(-2) === "[]";
        let keyValue = isKeyValueArray
          ? keyValueString.slice(0, -2)
          : keyValueString;
        if (keyValue === "__proto__") {
          continue;
        }
        let parsedConfigValue = configSectionMatch[3]
          ? _generateKeyValueString(configSectionMatch[4])
          : true;
        let _parsedConfigValue =
          parsedConfigValue === "true" ||
          parsedConfigValue === "false" ||
          parsedConfigValue === "null"
            ? JSON.parse(parsedConfigValue)
            : parsedConfigValue;
        if (isKeyValueArray) {
          if (_hasOwnProperty.call(currentConfigSection, keyValue)) {
            if (!Array.isArray(currentConfigSection[keyValue])) {
              currentConfigSection[keyValue] = [currentConfigSection[keyValue]];
            }
          } else {
            currentConfigSection[keyValue] = [];
          }
        }
        if (Array.isArray(currentConfigSection[keyValue])) {
          currentConfigSection[keyValue].push(_parsedConfigValue);
        } else {
          currentConfigSection[keyValue] = _parsedConfigValue;
        }
      }
      let configLine = [];
      for (let configKey of Object.keys(configObject)) {
        if (
          !_hasOwnProperty.call(configObject, configKey) ||
          typeof configObject[configKey] != "object" ||
          Array.isArray(configObject[configKey])
        ) {
          continue;
        }
        let keyValuePairs = _generateKeyValuePairs(configKey);
        currentConfigSection = configObject;
        let lastKeyValuePair = keyValuePairs.pop();
        let formattedKey = lastKeyValuePair.replace(/\\\./g, ".");
        for (let _keyValuePair of keyValuePairs) {
          if (_keyValuePair !== "__proto__") {
            if (
              !_hasOwnProperty.call(currentConfigSection, _keyValuePair) ||
              typeof currentConfigSection[_keyValuePair] != "object"
            ) {
              currentConfigSection[_keyValuePair] = Object.create(null);
            }
            currentConfigSection = currentConfigSection[_keyValuePair];
          }
        }
        if (
          currentConfigSection !== configObject ||
          formattedKey !== lastKeyValuePair
        ) {
          currentConfigSection[formattedKey] = configObject[configKey];
          configLine.push(configKey);
        }
      }
      for (let configLineItem of configLine) {
        delete configObject[configLineItem];
      }
      return configObject;
    };
    var ___generateKeyValuePairs = (isStringWrappedInQuotes) =>
      (isStringWrappedInQuotes.startsWith('"') &&
        isStringWrappedInQuotes.endsWith('"')) ||
      (isStringWrappedInQuotes.startsWith("'") &&
        isStringWrappedInQuotes.endsWith("'"));
    var formatValueForKey = (isValidInputOrGenerateKeyValuePairs) =>
      typeof isValidInputOrGenerateKeyValuePairs != "string" ||
      isValidInputOrGenerateKeyValuePairs.match(/[=\r\n]/) ||
      isValidInputOrGenerateKeyValuePairs.match(/^\[/) ||
      (isValidInputOrGenerateKeyValuePairs.length > 1 &&
        ___generateKeyValuePairs(isValidInputOrGenerateKeyValuePairs)) ||
      isValidInputOrGenerateKeyValuePairs !==
        isValidInputOrGenerateKeyValuePairs.trim()
        ? JSON.stringify(isValidInputOrGenerateKeyValuePairs)
        : isValidInputOrGenerateKeyValuePairs
            .split(";")
            .join("\\;")
            .split("#")
            .join("\\#");
    var _generateKeyValueString = (
      parseInputAndGenerateJson,
      inputStringForJsonParsing,
    ) => {
      parseInputAndGenerateJson = (parseInputAndGenerateJson || "").trim();
      if (___generateKeyValuePairs(parseInputAndGenerateJson)) {
        if (parseInputAndGenerateJson.charAt(0) === "'") {
          parseInputAndGenerateJson = parseInputAndGenerateJson.slice(1, -1);
        }
        try {
          parseInputAndGenerateJson = JSON.parse(parseInputAndGenerateJson);
        } catch {}
      } else {
        let isEscapeCharacterActive = false;
        let _accumulatedString = "";
        for (
          let ____currentIndex = 0,
            _inputStringLength = parseInputAndGenerateJson.length;
          ____currentIndex < _inputStringLength;
          ____currentIndex++
        ) {
          let currentCharacter =
            parseInputAndGenerateJson.charAt(____currentIndex);
          if (isEscapeCharacterActive) {
            if ("\\;#".indexOf(currentCharacter) !== -1) {
              _accumulatedString += currentCharacter;
            } else {
              _accumulatedString += "\\" + currentCharacter;
            }
            isEscapeCharacterActive = false;
          } else {
            if (";#".indexOf(currentCharacter) !== -1) {
              break;
            }
            if (currentCharacter === "\\") {
              isEscapeCharacterActive = true;
            } else {
              _accumulatedString += currentCharacter;
            }
          }
        }
        if (isEscapeCharacterActive) {
          _accumulatedString += "\\";
        }
        return _accumulatedString.trim();
      }
      return parseInputAndGenerateJson;
    };
    generateKeyValueString.exports = {
      parse: __generateKeyValuePairs,
      decode: __generateKeyValuePairs,
      stringify: generateKeyValuePairsFromObject,
      encode: generateKeyValuePairsFromObject,
      safe: formatValueForKey,
      unsafe: _generateKeyValueString,
    };
  },
);
var dequeueHeadValue = getModuleExportsIfAbsent(
  (exportWorkerScript, workerScript) => {
    workerScript.exports = "worker.js";
  },
);
var removeHeadNode = getModuleExportsIfAbsent(
  (registerArrayUtilities, _registerArrayUtilities) => {
    _registerArrayUtilities.exports = {
      ArrayIsArray(___isArray) {
        return Array.isArray(___isArray);
      },
      ArrayPrototypeIncludes(arrayIncludesElement, arrayIncludesValue) {
        return arrayIncludesElement.includes(arrayIncludesValue);
      },
      ArrayPrototypeIndexOf(getIndexOfElementInArray, elementIndexInArray) {
        return getIndexOfElementInArray.indexOf(elementIndexInArray);
      },
      ArrayPrototypeJoin(arrayToStringDelimiter, arrayToString) {
        return arrayToStringDelimiter.join(arrayToString);
      },
      ArrayPrototypeMap(_ArrayPrototypeMap, transformArrayElements) {
        return _ArrayPrototypeMap.map(transformArrayElements);
      },
      ArrayPrototypePop(popElementFromArray, elementToRemove) {
        return popElementFromArray.pop(elementToRemove);
      },
      ArrayPrototypePush(addElementToArray, elementToAdd) {
        return addElementToArray.push(elementToAdd);
      },
      ArrayPrototypeSlice(sliceArray, _startIndex, _endIndex) {
        return sliceArray.slice(_startIndex, _endIndex);
      },
      Error: Error,
      FunctionPrototypeCall(
        callFunctionWithContext,
        contextualFunctionCall,
        ...argumentsForFunctionCall
      ) {
        return callFunctionWithContext.call(
          contextualFunctionCall,
          ...argumentsForFunctionCall,
        );
      },
      FunctionPrototypeSymbolHasInstance(
        checkInstanceOf,
        instanceCheckFunction,
      ) {
        return Function.prototype[Symbol.hasInstance].call(
          checkInstanceOf,
          instanceCheckFunction,
        );
      },
      MathFloor: Math.floor,
      Number: Number,
      NumberIsInteger: Number.isInteger,
      NumberIsNaN: Number.isNaN,
      NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
      NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
      NumberParseInt: Number.parseInt,
      ObjectDefineProperties(____defineObjectProperties, propertiesDescriptor) {
        return Object.defineProperties(
          ____defineObjectProperties,
          propertiesDescriptor,
        );
      },
      ObjectDefineProperty(
        _defineObjectProperty,
        ______propertyDescriptor,
        _propertyValue,
      ) {
        return Object.defineProperty(
          _defineObjectProperty,
          ______propertyDescriptor,
          _propertyValue,
        );
      },
      ObjectGetOwnPropertyDescriptor(
        getPropertyDescriptor,
        propertyDescriptorKey,
      ) {
        return Object.getOwnPropertyDescriptor(
          getPropertyDescriptor,
          propertyDescriptorKey,
        );
      },
      ObjectKeys(_getObjectKeys) {
        return Object.keys(_getObjectKeys);
      },
      ObjectSetPrototypeOf(_setObjectPrototype, _prototypeObject) {
        return Object.setPrototypeOf(_setObjectPrototype, _prototypeObject);
      },
      Promise: Promise,
      PromisePrototypeCatch(promiseCatchHandler, handlePromiseCatch) {
        return promiseCatchHandler.catch(handlePromiseCatch);
      },
      PromisePrototypeThen(
        _promiseThenHandler,
        _promiseErrorHandler,
        _promiseFallbackHandler,
      ) {
        return _promiseThenHandler.then(
          _promiseErrorHandler,
          _promiseFallbackHandler,
        );
      },
      PromiseReject(rejectPromiseWithError) {
        return Promise.reject(rejectPromiseWithError);
      },
      ReflectApply: Reflect.apply,
      RegExpPrototypeTest(regexTestAgainstString, stringToTestAgainstRegExp) {
        return regexTestAgainstString.test(stringToTestAgainstRegExp);
      },
      SafeSet: Set,
      String: String,
      StringPrototypeSlice(sliceStringFromTo, startIndex, endIndex) {
        return sliceStringFromTo.slice(startIndex, endIndex);
      },
      StringPrototypeToLowerCase(convertStringToLowerCase) {
        return convertStringToLowerCase.toLowerCase();
      },
      StringPrototypeToUpperCase(convertStringToUpperCase) {
        return convertStringToUpperCase.toUpperCase();
      },
      StringPrototypeTrim(_stringPrototypeTrim) {
        return _stringPrototypeTrim.trim();
      },
      Symbol: Symbol,
      SymbolAsyncIterator: Symbol.asyncIterator,
      SymbolHasInstance: Symbol.hasInstance,
      SymbolIterator: Symbol.iterator,
      TypedArrayPrototypeSet(
        setTypedArrayValues,
        typedArraySetValues,
        targetIndex,
      ) {
        return setTypedArrayValues.set(typedArraySetValues, targetIndex);
      },
      Uint8Array: Uint8Array,
    };
  },
);
var swapBufferWithNodes = getModuleExportsIfAbsent(
  (processArrayErrors, errorHandlingModule) => {
    ____updateIntrinsicProperties();
    var createBlobInstance = createModuleExport(bufferWriteEncoding);
    var getAsyncFunctionConstructor = Object.getPrototypeOf(
      async function () {},
    ).constructor;
    var BlobConstructor = globalThis.Blob || createBlobInstance.Blob;
    var isBlobInstance =
      typeof BlobConstructor !== "undefined"
        ? function (accumulateLittleEndian) {
            return accumulateLittleEndian instanceof BlobConstructor;
          }
        : function (writeOrReduceFunction) {
            return false;
          };
    var AggregateError = class extends Error {
      constructor(errorsArray) {
        if (!Array.isArray(errorsArray)) {
          throw new TypeError(
            "Expected input to be an Array, got " + typeof errorsArray,
          );
        }
        let errorStackTrace = "";
        for (
          let errorIndex = 0;
          errorIndex < errorsArray.length;
          errorIndex++
        ) {
          errorStackTrace += "    " + errorsArray[errorIndex].stack + "\n";
        }
        super(errorStackTrace);
        this.name = "AggregateError";
        this.errors = errorsArray;
      }
    };
    errorHandlingModule.exports = {
      AggregateError: AggregateError,
      kEmptyObject: Object.freeze({}),
      once(executeOnce) {
        let hasExecuted = false;
        return function (...argumentsForExecution) {
          if (!hasExecuted) {
            hasExecuted = true;
            executeOnce.apply(this, argumentsForExecution);
          }
        };
      },
      createDeferredPromise() {
        let resolvePromise;
        let rejectPromise;
        return {
          promise: new Promise(
            (handlePromiseResolutionAndRejection, _handlePromiseRejection) => {
              resolvePromise = handlePromiseResolutionAndRejection;
              rejectPromise = _handlePromiseRejection;
            },
          ),
          resolve: resolvePromise,
          reject: rejectPromise,
        };
      },
      promisify(_____callbackFunction) {
        return new Promise((handleCallback, __callbackHandler) => {
          _____callbackFunction((___callbackHandler, ...callbackArgs) =>
            ___callbackHandler
              ? __callbackHandler(___callbackHandler)
              : handleCallback(...callbackArgs),
          );
        });
      },
      debuglog() {
        return function () {};
      },
      format(_formatStringWithArgs, ...argsArray) {
        return _formatStringWithArgs.replace(
          /%([sdifj])/g,
          function (...[formatValueBasedOnType, formatType]) {
            let firstArgument = argsArray.shift();
            if (formatType === "f") {
              return firstArgument.toFixed(6);
            } else if (formatType === "j") {
              return JSON.stringify(firstArgument);
            } else if (formatType === "s" && typeof firstArgument == "object") {
              return (
                (firstArgument.constructor !== Object
                  ? firstArgument.constructor.name
                  : "") + " {}"
              ).trim();
            } else {
              return firstArgument.toString();
            }
          },
        );
      },
      inspect(inspectValue) {
        switch (typeof inspectValue) {
          case "string":
            if (inspectValue.includes("'")) {
              if (inspectValue.includes('"')) {
                if (
                  !inspectValue.includes("`") &&
                  !inspectValue.includes("${")
                ) {
                  return "`" + inspectValue + "`";
                }
              } else {
                return '"' + inspectValue + '"';
              }
            }
            return "'" + inspectValue + "'";
          case "number":
            if (isNaN(inspectValue)) {
              return "NaN";
            } else if (Object.is(inspectValue, -0)) {
              return String(inspectValue);
            } else {
              return inspectValue;
            }
          case "bigint":
            return String(inspectValue) + "n";
          case "boolean":
          case "undefined":
            return String(inspectValue);
          case "object":
            return "{}";
        }
      },
      types: {
        isAsyncFunction(isAsyncFunction) {
          return isAsyncFunction instanceof getAsyncFunctionConstructor;
        },
        isArrayBufferView(isArrayBufferView) {
          return ArrayBuffer.isView(isArrayBufferView);
        },
      },
      isBlob: isBlobInstance,
    };
    errorHandlingModule.exports.promisify.custom = Symbol.for(
      "nodejs.util.promisify.custom",
    );
  },
);
var ________________________validateAndReturnIntrinsicProperty =
  getModuleExportsIfAbsent(
    (initializeAbortController, initializeAbortControllerExports) => {
      var __globalContext =
        typeof __globalContext === "undefined" ? globalThis : __globalContext;
      var { AbortController: AbortController, AbortSignal: AbortSignal } =
        typeof self !== "undefined"
          ? self
          : typeof __globalContext !== "undefined"
            ? __globalContext
            : undefined;
      initializeAbortControllerExports.exports = AbortController;
      initializeAbortControllerExports.exports.AbortSignal = AbortSignal;
      initializeAbortControllerExports.exports.default = AbortController;
    },
  );
var _________________________validateAndReturnIntrinsicProperty =
  getModuleExportsIfAbsent((_processNodeData, processAndStoreNodes) => {
    var {
      format: nodeDataFormat,
      inspect: inspectNodeData,
      AggregateError: CustomAggregateError,
    } = swapBufferWithNodes();
    var AggregateErrorImplementation =
      globalThis.AggregateError || CustomAggregateError;
    var NODE_ERROR_SYMBOL = Symbol("kIsNodeError");
    var primitiveTypes = [
      "string",
      "function",
      "number",
      "object",
      "Function",
      "Object",
      "boolean",
      "bigint",
      "symbol",
    ];
    var nodeNameRegex = /^([A-Z][a-z0-9]*)+$/;
    var nodeInternalPrefix = "__node_internal_";
    var errorHandling = {};
    function assertProcessNodesValidity(
      processNodesAndStoreValues,
      processLinkedListAndValues,
    ) {
      if (!processNodesAndStoreValues) {
        throw new errorHandling.ERR_INTERNAL_ASSERTION(
          processLinkedListAndValues,
        );
      }
    }
    function formatAndChunkBuffer(validateAndUpdateBuffer) {
      let formattedChunkedBuffer = "";
      let _______bufferLength = validateAndUpdateBuffer.length;
      let leadCharacterOffset = validateAndUpdateBuffer[0] === "-" ? 1 : 0;
      for (
        ;
        _______bufferLength >= leadCharacterOffset + 4;
        _______bufferLength -= 3
      ) {
        formattedChunkedBuffer =
          "_" +
          validateAndUpdateBuffer.slice(
            _______bufferLength - 3,
            _______bufferLength,
          ) +
          formattedChunkedBuffer;
      }
      return (
        "" +
        validateAndUpdateBuffer.slice(0, _______bufferLength) +
        formattedChunkedBuffer
      );
    }
    function ___validateAndProcessBuffer(
      validateAndSetBufferContent,
      validateAndManageBuffer,
      InsertAndAdjustNode,
    ) {
      if (typeof validateAndManageBuffer == "function") {
        assertProcessNodesValidity(
          validateAndManageBuffer.length <= InsertAndAdjustNode.length,
          "Code: " +
            validateAndSetBufferContent +
            "; The provided arguments length (" +
            InsertAndAdjustNode.length +
            ") does not match the required ones (" +
            validateAndManageBuffer.length +
            ").",
        );
        return validateAndManageBuffer(...InsertAndAdjustNode);
      }
      let placeholderCount = (
        validateAndManageBuffer.match(/%[dfijoOs]/g) || []
      ).length;
      assertProcessNodesValidity(
        placeholderCount === InsertAndAdjustNode.length,
        "Code: " +
          validateAndSetBufferContent +
          "; The provided arguments length (" +
          InsertAndAdjustNode.length +
          ") does not match the required ones (" +
          placeholderCount +
          ").",
      );
      if (InsertAndAdjustNode.length === 0) {
        return validateAndManageBuffer;
      } else {
        return nodeDataFormat(validateAndManageBuffer, ...InsertAndAdjustNode);
      }
    }
    function createAndUpdateErrorClass(
      createAndUpdateBufferEntry,
      _validateAndSetBufferContents,
      addBufferContentAndUpdateMeta,
    ) {
      addBufferContentAndUpdateMeta ||= Error;
      class ExtendedBufferHandler extends addBufferContentAndUpdateMeta {
        constructor(...bufferArguments) {
          super(
            ___validateAndProcessBuffer(
              createAndUpdateBufferEntry,
              _validateAndSetBufferContents,
              bufferArguments,
            ),
          );
        }
        toString() {
          return (
            this.name + " [" + createAndUpdateBufferEntry + "]: " + this.message
          );
        }
      }
      Object.defineProperties(ExtendedBufferHandler.prototype, {
        name: {
          value: addBufferContentAndUpdateMeta.name,
          writable: true,
          enumerable: false,
          configurable: true,
        },
        toString: {
          value() {
            return (
              this.name +
              " [" +
              createAndUpdateBufferEntry +
              "]: " +
              this.message
            );
          },
          writable: true,
          enumerable: false,
          configurable: true,
        },
      });
      ExtendedBufferHandler.prototype.code = createAndUpdateBufferEntry;
      ExtendedBufferHandler.prototype[NODE_ERROR_SYMBOL] = true;
      errorHandling[createAndUpdateBufferEntry] = ExtendedBufferHandler;
    }
    function setBufferComparisonValidatorName(BufferComparisonValidator) {
      let bufferComparisonValidatorName =
        nodeInternalPrefix + BufferComparisonValidator.name;
      Object.defineProperty(BufferComparisonValidator, "name", {
        value: bufferComparisonValidatorName,
      });
      return BufferComparisonValidator;
    }
    function handleBufferErrors(addBufferValue, addNodeToBuffer) {
      if (
        addBufferValue &&
        addNodeToBuffer &&
        addBufferValue !== addNodeToBuffer
      ) {
        if (Array.isArray(addNodeToBuffer.errors)) {
          addNodeToBuffer.errors.push(addBufferValue);
          return addNodeToBuffer;
        }
        let _aggregateError = new AggregateErrorImplementation(
          [addNodeToBuffer, addBufferValue],
          addNodeToBuffer.message,
        );
        _aggregateError.code = addNodeToBuffer.code;
        return _aggregateError;
      }
      return addBufferValue || addNodeToBuffer;
    }
    var buildFormattedStringFromBuffer = class extends Error {
      constructor(
        operationAbortedMessage = "The operation was aborted",
        _options = undefined,
      ) {
        if (_options !== undefined && typeof _options != "object") {
          throw new errorHandling.ERR_INVALID_ARG_TYPE(
            "options",
            "Object",
            _options,
          );
        }
        super(operationAbortedMessage, _options);
        this.code = "ABORT_ERR";
        this.name = "AbortError";
      }
    };
    createAndUpdateErrorClass("ERR_ASSERTION", "%s", Error);
    createAndUpdateErrorClass(
      "ERR_INVALID_ARG_TYPE",
      (
        validateParameterNameAndTypes,
        expectedParameterNames,
        validationType,
      ) => {
        assertProcessNodesValidity(
          typeof validateParameterNameAndTypes == "string",
          "'name' must be a string",
        );
        if (!Array.isArray(expectedParameterNames)) {
          expectedParameterNames = [expectedParameterNames];
        }
        let argumentDescriptor = "The ";
        if (validateParameterNameAndTypes.endsWith(" argument")) {
          argumentDescriptor += validateParameterNameAndTypes + " ";
        } else {
          argumentDescriptor +=
            '"' +
            validateParameterNameAndTypes +
            '" ' +
            (validateParameterNameAndTypes.includes(".")
              ? "property"
              : "argument") +
            " ";
        }
        argumentDescriptor += "must be ";
        let validPrimitiveTypes = [];
        let validNodeNames = [];
        let invalidParameterDetails = [];
        for (let expectedParameterName of expectedParameterNames) {
          assertProcessNodesValidity(
            typeof expectedParameterName == "string",
            "All expected entries have to be of type string",
          );
          if (primitiveTypes.includes(expectedParameterName)) {
            validPrimitiveTypes.push(expectedParameterName.toLowerCase());
          } else if (nodeNameRegex.test(expectedParameterName)) {
            validNodeNames.push(expectedParameterName);
          } else {
            assertProcessNodesValidity(
              expectedParameterName !== "object",
              'The value "object" should be written as "Object"',
            );
            invalidParameterDetails.push(expectedParameterName);
          }
        }
        if (validNodeNames.length > 0) {
          let objectTypeIndex = validPrimitiveTypes.indexOf("object");
          if (objectTypeIndex !== -1) {
            validPrimitiveTypes.splice(validPrimitiveTypes, objectTypeIndex, 1);
            validNodeNames.push("Object");
          }
        }
        if (validPrimitiveTypes.length > 0) {
          switch (validPrimitiveTypes.length) {
            case 1:
              argumentDescriptor += "of type " + validPrimitiveTypes[0];
              break;
            case 2:
              argumentDescriptor +=
                "one of type " +
                validPrimitiveTypes[0] +
                " or " +
                validPrimitiveTypes[1];
              break;
            default: {
              let lastValidPrimitiveType = validPrimitiveTypes.pop();
              argumentDescriptor +=
                "one of type " +
                validPrimitiveTypes.join(", ") +
                ", or " +
                lastValidPrimitiveType;
            }
          }
          if (validNodeNames.length > 0 || invalidParameterDetails.length > 0) {
            argumentDescriptor += " or ";
          }
        }
        if (validNodeNames.length > 0) {
          switch (validNodeNames.length) {
            case 1:
              argumentDescriptor += "an instance of " + validNodeNames[0];
              break;
            case 2:
              argumentDescriptor +=
                "an instance of " +
                validNodeNames[0] +
                " or " +
                validNodeNames[1];
              break;
            default: {
              let lastValidNodeName = validNodeNames.pop();
              argumentDescriptor +=
                "an instance of " +
                validNodeNames.join(", ") +
                ", or " +
                lastValidNodeName;
            }
          }
          if (invalidParameterDetails.length > 0) {
            argumentDescriptor += " or ";
          }
        }
        switch (invalidParameterDetails.length) {
          case 0:
            break;
          case 1:
            if (
              invalidParameterDetails[0].toLowerCase() !==
              invalidParameterDetails[0]
            ) {
              argumentDescriptor += "an ";
            }
            argumentDescriptor += "" + invalidParameterDetails[0];
            break;
          case 2:
            argumentDescriptor +=
              "one of " +
              invalidParameterDetails[0] +
              " or " +
              invalidParameterDetails[1];
            break;
          default: {
            let lastInvalidParameter = invalidParameterDetails.pop();
            argumentDescriptor +=
              "one of " +
              invalidParameterDetails.join(", ") +
              ", or " +
              lastInvalidParameter;
          }
        }
        if (validationType == null) {
          argumentDescriptor += ". Received " + validationType;
        } else if (typeof validationType == "function" && validationType.name) {
          argumentDescriptor += ". Received function " + validationType.name;
        } else if (typeof validationType == "object") {
          var validationTypeConstructor;
          if (
            (validationTypeConstructor = validationType.constructor) !== null &&
            validationTypeConstructor !== undefined &&
            validationTypeConstructor.name
          ) {
            argumentDescriptor +=
              ". Received an instance of " + validationType.constructor.name;
          } else {
            argumentDescriptor +=
              ". Received " +
              inspectNodeData(validationType, {
                depth: -1,
              });
          }
        } else {
          let inspectedNodeData = inspectNodeData(validationType, {
            colors: false,
          });
          if (inspectedNodeData.length > 25) {
            inspectedNodeData = inspectedNodeData.slice(0, 25) + "...";
          }
          argumentDescriptor +=
            ". Received type " +
            typeof validationType +
            " (" +
            inspectedNodeData +
            ")";
        }
        return argumentDescriptor;
      },
      TypeError,
    );
    createAndUpdateErrorClass(
      "ERR_INVALID_ARG_VALUE",
      (
        generateInvalidArgumentMessage,
        invalidArgumentDetails,
        errorMessageInvalid = "is invalid",
      ) => {
        let formattedInvalidArgumentDetails = inspectNodeData(
          invalidArgumentDetails,
        );
        if (formattedInvalidArgumentDetails.length > 128) {
          formattedInvalidArgumentDetails =
            formattedInvalidArgumentDetails.slice(0, 128) + "...";
        }
        return (
          "The " +
          (generateInvalidArgumentMessage.includes(".")
            ? "property"
            : "argument") +
          " '" +
          generateInvalidArgumentMessage +
          "' " +
          errorMessageInvalid +
          ". Received " +
          formattedInvalidArgumentDetails
        );
      },
      TypeError,
    );
    createAndUpdateErrorClass(
      "ERR_INVALID_RETURN_VALUE",
      (
        generateErrorMessage,
        expectedReturnType,
        getExpectedReturnTypeErrorMessage,
      ) => {
        var getErrorMessageType;
        let actualReturnTypeErrorMessage =
          getExpectedReturnTypeErrorMessage != null &&
          (getErrorMessageType =
            getExpectedReturnTypeErrorMessage.constructor) !== null &&
          getErrorMessageType !== undefined &&
          getErrorMessageType.name
            ? "instance of " +
              getExpectedReturnTypeErrorMessage.constructor.name
            : "type " + typeof getExpectedReturnTypeErrorMessage;
        return (
          "Expected " +
          generateErrorMessage +
          ' to be returned from the "' +
          expectedReturnType +
          '" function but got ' +
          actualReturnTypeErrorMessage +
          "."
        );
      },
      TypeError,
    );
    createAndUpdateErrorClass(
      "ERR_MISSING_ARGS",
      (...formatArgumentList) => {
        assertProcessNodesValidity(
          formatArgumentList.length > 0,
          "At least one arg needs to be specified",
        );
        let argumentListDescription;
        let argumentCount = formatArgumentList.length;
        formatArgumentList = (
          Array.isArray(formatArgumentList)
            ? formatArgumentList
            : [formatArgumentList]
        )
          .map((stringifyVariable) => '"' + stringifyVariable + '"')
          .join(" or ");
        switch (argumentCount) {
          case 1:
            argumentListDescription +=
              "The " + formatArgumentList[0] + " argument";
            break;
          case 2:
            argumentListDescription +=
              "The " +
              formatArgumentList[0] +
              " and " +
              formatArgumentList[1] +
              " arguments";
            break;
          default:
            {
              let lastArgument = formatArgumentList.pop();
              argumentListDescription +=
                "The " +
                formatArgumentList.join(", ") +
                ", and " +
                lastArgument +
                " arguments";
            }
            break;
        }
        return argumentListDescription + " must be specified";
      },
      TypeError,
    );
    createAndUpdateErrorClass(
      "ERR_OUT_OF_RANGE",
      (generateRangeErrorMessage, _generateRangeErrorMessage, rangeValue) => {
        assertProcessNodesValidity(
          _generateRangeErrorMessage,
          'Missing "range" argument',
        );
        let formattedRangeValue;
        if (Number.isInteger(rangeValue) && Math.abs(rangeValue) > 4294967296) {
          formattedRangeValue = formatAndChunkBuffer(String(rangeValue));
        } else if (typeof rangeValue == "bigint") {
          formattedRangeValue = String(rangeValue);
          if (rangeValue > 0x2n ** 0x20n || rangeValue < -(0x2n ** 0x20n)) {
            formattedRangeValue = formatAndChunkBuffer(formattedRangeValue);
          }
          formattedRangeValue += "n";
        } else {
          formattedRangeValue = inspectNodeData(rangeValue);
        }
        return (
          'The value of "' +
          generateRangeErrorMessage +
          '" is out of range. It must be ' +
          _generateRangeErrorMessage +
          ". Received " +
          formattedRangeValue
        );
      },
      RangeError,
    );
    createAndUpdateErrorClass(
      "ERR_MULTIPLE_CALLBACK",
      "Callback called multiple times",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_METHOD_NOT_IMPLEMENTED",
      "The %s method is not implemented",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_STREAM_ALREADY_FINISHED",
      "Cannot call %s after a stream was finished",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_STREAM_CANNOT_PIPE",
      "Cannot pipe, not readable",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_STREAM_DESTROYED",
      "Cannot call %s after a stream was destroyed",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_STREAM_NULL_VALUES",
      "May not write null values to stream",
      TypeError,
    );
    createAndUpdateErrorClass(
      "ERR_STREAM_PREMATURE_CLOSE",
      "Premature close",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_STREAM_PUSH_AFTER_EOF",
      "stream.push() after EOF",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
      "stream.unshift() after end event",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_STREAM_WRITE_AFTER_END",
      "write after end",
      Error,
    );
    createAndUpdateErrorClass(
      "ERR_UNKNOWN_ENCODING",
      "Unknown encoding: %s",
      TypeError,
    );
    processAndStoreNodes.exports = {
      AbortError: buildFormattedStringFromBuffer,
      aggregateTwoErrors: setBufferComparisonValidatorName(handleBufferErrors),
      hideStackFrames: setBufferComparisonValidatorName,
      codes: errorHandling,
    };
  });
var processNode = getModuleExportsIfAbsent(
  (extractArrayMethodsAndProperties, _extractArrayMethodsAndProperties) => {
    var {
      ArrayIsArray: _isArray,
      ArrayPrototypeIncludes: ArrayPrototypeIncludes,
      ArrayPrototypeJoin: ArrayPrototypeJoin,
      ArrayPrototypeMap: ArrayPrototypeMap,
      NumberIsInteger: NumberIsInteger,
      NumberIsNaN: _isNumberNaN,
      NumberMAX_SAFE_INTEGER: NumberMAX_SAFE_INTEGER,
      NumberMIN_SAFE_INTEGER: NumberMIN_SAFE_INTEGER,
      NumberParseInt: parseInteger,
      ObjectPrototypeHasOwnProperty: ObjectPrototypeHasOwnProperty,
      RegExpPrototypeExec: regExpPrototypeExec,
      String: StringConstructor,
      StringPrototypeToUpperCase: stringPrototypeToUpperCase,
      StringPrototypeTrim: stringPrototypeTrim,
    } = removeHeadNode();
    var {
      hideStackFrames: hideStackTrace,
      codes: {
        ERR_SOCKET_BAD_PORT: ERROR_SOCKET_BAD_PORT,
        ERR_INVALID_ARG_TYPE: _ERROR_INVALID_ARG_TYPE,
        ERR_INVALID_ARG_VALUE: ERROR_INVALID_ARGUMENT_VALUE,
        ERR_OUT_OF_RANGE: _ERROR_OUT_OF_RANGE,
        ERR_UNKNOWN_SIGNAL: __extractArrayMethodsAndProperties,
      },
    } = _________________________validateAndReturnIntrinsicProperty();
    var { normalizeEncoding: ___extractArrayMethodsAndProperties } =
      swapBufferWithNodes();
    var {
      isAsyncFunction: ____extractArrayMethodsAndProperties,
      isArrayBufferView: _____extractArrayMethodsAndProperties,
    } = swapBufferWithNodes().types;
    var processArrayMethodsAndProperties = {};
    function isCacheEntryInteger(cacheEntry) {
      return cacheEntry === (cacheEntry | 0);
    }
    function isValidCacheItem(cacheItem) {
      return cacheItem === cacheItem >>> 0;
    }
    var ______extractArrayMethodsAndProperties = /^[0-7]+$/;
    var _______extractArrayMethodsAndProperties =
      "must be a 32-bit unsigned integer or an octal string";
    function processNodeRemoval(
      removeNodeBasedOnCondition,
      nodeRemovalFunction,
      removeNode,
    ) {
      if (typeof removeNodeBasedOnCondition === "undefined") {
        removeNodeBasedOnCondition = removeNode;
      }
      if (typeof removeNodeBasedOnCondition == "string") {
        if (
          regExpPrototypeExec(
            ______extractArrayMethodsAndProperties,
            removeNodeBasedOnCondition,
          ) === null
        ) {
          throw new ERROR_INVALID_ARGUMENT_VALUE(
            nodeRemovalFunction,
            removeNodeBasedOnCondition,
            _______extractArrayMethodsAndProperties,
          );
        }
        removeNodeBasedOnCondition = parseInteger(
          removeNodeBasedOnCondition,
          8,
        );
      }
      __________extractArrayMethodsAndProperties(
        removeNodeBasedOnCondition,
        nodeRemovalFunction,
      );
      return removeNodeBasedOnCondition;
    }
    var ________extractArrayMethodsAndProperties = hideStackTrace(
      (
        ____validateIntegerInRange,
        _____validateIntegerInRange,
        minSafeIntegerValue = NumberMIN_SAFE_INTEGER,
        maxSafeInteger = NumberMAX_SAFE_INTEGER,
      ) => {
        if (typeof ____validateIntegerInRange != "number") {
          throw new _ERROR_INVALID_ARG_TYPE(
            _____validateIntegerInRange,
            "number",
            ____validateIntegerInRange,
          );
        }
        if (!NumberIsInteger(____validateIntegerInRange)) {
          throw new _ERROR_OUT_OF_RANGE(
            _____validateIntegerInRange,
            "an integer",
            ____validateIntegerInRange,
          );
        }
        if (
          ____validateIntegerInRange < minSafeIntegerValue ||
          ____validateIntegerInRange > maxSafeInteger
        ) {
          throw new _ERROR_OUT_OF_RANGE(
            _____validateIntegerInRange,
            ">= " + minSafeIntegerValue + " && <= " + maxSafeInteger,
            ____validateIntegerInRange,
          );
        }
      },
    );
    var _________extractArrayMethodsAndProperties = hideStackTrace(
      (
        __validateIntegerInRange,
        ___validateIntegerInRange,
        minIntegerValue = -2147483648,
        maxIntegerValue = 2147483647,
      ) => {
        if (typeof __validateIntegerInRange != "number") {
          throw new _ERROR_INVALID_ARG_TYPE(
            ___validateIntegerInRange,
            "number",
            __validateIntegerInRange,
          );
        }
        if (!NumberIsInteger(__validateIntegerInRange)) {
          throw new _ERROR_OUT_OF_RANGE(
            ___validateIntegerInRange,
            "an integer",
            __validateIntegerInRange,
          );
        }
        if (
          __validateIntegerInRange < minIntegerValue ||
          __validateIntegerInRange > maxIntegerValue
        ) {
          throw new _ERROR_OUT_OF_RANGE(
            ___validateIntegerInRange,
            ">= " + minIntegerValue + " && <= " + maxIntegerValue,
            __validateIntegerInRange,
          );
        }
      },
    );
    var __________extractArrayMethodsAndProperties = hideStackTrace(
      (
        validateNonNegativeInteger,
        _validateNonNegativeInteger,
        isProcessingComplete = false,
      ) => {
        if (typeof validateNonNegativeInteger != "number") {
          throw new _ERROR_INVALID_ARG_TYPE(
            _validateNonNegativeInteger,
            "number",
            validateNonNegativeInteger,
          );
        }
        if (!NumberIsInteger(validateNonNegativeInteger)) {
          throw new _ERROR_OUT_OF_RANGE(
            _validateNonNegativeInteger,
            "an integer",
            validateNonNegativeInteger,
          );
        }
        let isValidationNonNegative = isProcessingComplete ? 1 : 0;
        let MAX_NON_NEGATIVE_INTEGER = 4294967295;
        if (
          validateNonNegativeInteger < isValidationNonNegative ||
          validateNonNegativeInteger > MAX_NON_NEGATIVE_INTEGER
        ) {
          throw new _ERROR_OUT_OF_RANGE(
            _validateNonNegativeInteger,
            ">= " +
              isValidationNonNegative +
              " && <= " +
              MAX_NON_NEGATIVE_INTEGER,
            validateNonNegativeInteger,
          );
        }
      },
    );
    function validateRangeHandler(parseRangeHandler, updateSet) {
      if (typeof parseRangeHandler != "string") {
        throw new _ERROR_INVALID_ARG_TYPE(
          updateSet,
          "string",
          parseRangeHandler,
        );
      }
    }
    function validateRange(
      parseSingleRange,
      parseHyphenRange,
      undefinedVariable = undefined,
      parseVersionRange,
    ) {
      if (typeof parseSingleRange != "number") {
        throw new _ERROR_INVALID_ARG_TYPE(
          parseHyphenRange,
          "number",
          parseSingleRange,
        );
      }
      if (
        (undefinedVariable != null && parseSingleRange < undefinedVariable) ||
        (parseVersionRange != null && parseSingleRange > parseVersionRange) ||
        ((undefinedVariable != null || parseVersionRange != null) &&
          _isNumberNaN(parseSingleRange))
      ) {
        throw new _ERROR_OUT_OF_RANGE(
          parseHyphenRange,
          "" +
            (undefinedVariable != null ? ">= " + undefinedVariable : "") +
            (undefinedVariable != null && parseVersionRange != null
              ? " && "
              : "") +
            (parseVersionRange != null ? "<= " + parseVersionRange : ""),
          parseSingleRange,
        );
      }
    }
    var ___________extractArrayMethodsAndProperties = hideStackTrace(
      (
        validateArgumentAgainstAllowedValues,
        validateArgumentValue,
        argumentValue,
      ) => {
        if (
          !ArrayPrototypeIncludes(
            argumentValue,
            validateArgumentAgainstAllowedValues,
          )
        ) {
          let formattedArgumentValues = ArrayPrototypeJoin(
            ArrayPrototypeMap(argumentValue, (formatValueForDisplay) =>
              typeof formatValueForDisplay == "string"
                ? "'" + formatValueForDisplay + "'"
                : StringConstructor(formatValueForDisplay),
            ),
            ", ",
          );
          let errorMessageForInvalidArguments =
            "must be one of: " + formattedArgumentValues;
          throw new ERROR_INVALID_ARGUMENT_VALUE(
            validateArgumentValue,
            validateArgumentAgainstAllowedValues,
            errorMessageForInvalidArguments,
          );
        }
      },
    );
    function validateComparatorList(
      formattedComparatorList,
      trimmedComparators,
    ) {
      if (typeof formattedComparatorList != "boolean") {
        throw new _ERROR_INVALID_ARG_TYPE(
          trimmedComparators,
          "boolean",
          formattedComparatorList,
        );
      }
    }
    function getFilteredVersion(
      formattedVersion,
      replaceAndFilterVersion,
      processAndFilterVersions,
    ) {
      if (
        formattedVersion == null ||
        !ObjectPrototypeHasOwnProperty(
          formattedVersion,
          replaceAndFilterVersion,
        )
      ) {
        return processAndFilterVersions;
      } else {
        return formattedVersion[replaceAndFilterVersion];
      }
    }
    var ____________extractArrayMethodsAndProperties = hideStackTrace(
      (validateInput, inputParameterName, userSession = null) => {
        let isArrayAllowed = getFilteredVersion(
          userSession,
          "allowArray",
          false,
        );
        let isFunctionAllowed = getFilteredVersion(
          userSession,
          "allowFunction",
          false,
        );
        if (
          (!getFilteredVersion(userSession, "nullable", false) &&
            validateInput === null) ||
          (!isArrayAllowed && _isArray(validateInput)) ||
          (typeof validateInput != "object" &&
            (!isFunctionAllowed || typeof validateInput != "function"))
        ) {
          throw new _ERROR_INVALID_ARG_TYPE(
            inputParameterName,
            "Object",
            validateInput,
          );
        }
      },
    );
    var extractAndMapArrayMethods = hideStackTrace(
      (validateArrayLength, argumentName, initialValue = 0) => {
        if (!_isArray(validateArrayLength)) {
          throw new _ERROR_INVALID_ARG_TYPE(
            argumentName,
            "Array",
            validateArrayLength,
          );
        }
        if (validateArrayLength.length < initialValue) {
          let errorMessageForArrayLength =
            "must be longer than " + initialValue;
          throw new ERROR_INVALID_ARGUMENT_VALUE(
            argumentName,
            validateArrayLength,
            errorMessageForArrayLength,
          );
        }
      },
    );
    function validateIntersectionSignal(
      calculateIntersection,
      signalDescriptor = "signal",
    ) {
      validateRangeHandler(calculateIntersection, signalDescriptor);
      if (
        processArrayMethodsAndProperties[calculateIntersection] === undefined
      ) {
        throw processArrayMethodsAndProperties[
          stringPrototypeToUpperCase(calculateIntersection)
        ] !== undefined
          ? new __extractArrayMethodsAndProperties(
              calculateIntersection + " (signals must use all capital letters)",
            )
          : new __extractArrayMethodsAndProperties(calculateIntersection);
      }
    }
    var _____________extractArrayMethodsAndProperties = hideStackTrace(
      (__validateBufferInput, _dataBuffer = "buffer") => {
        if (!_____extractArrayMethodsAndProperties(__validateBufferInput)) {
          throw new _ERROR_INVALID_ARG_TYPE(
            _dataBuffer,
            ["Buffer", "TypedArray", "DataView"],
            __validateBufferInput,
          );
        }
      },
    );
    function validateLogBufferEncoding(logBufferValue, parsedString) {
      let extractedArrayMethodsAndProperties =
        ___extractArrayMethodsAndProperties(parsedString);
      let logBufferLength = logBufferValue.length;
      if (
        extractedArrayMethodsAndProperties === "hex" &&
        logBufferLength % 2 !== 0
      ) {
        throw new ERROR_INVALID_ARGUMENT_VALUE(
          "encoding",
          parsedString,
          "is invalid for data of length " + logBufferLength,
        );
      }
    }
    function validatePortNumber(
      checkIntersections,
      portName = "Port",
      isPortRequired = true,
    ) {
      if (
        (typeof checkIntersections != "number" &&
          typeof checkIntersections != "string") ||
        (typeof checkIntersections == "string" &&
          stringPrototypeTrim(checkIntersections).length === 0) ||
        +checkIntersections !== +checkIntersections >>> 0 ||
        checkIntersections > 65535 ||
        (checkIntersections === 0 && !isPortRequired)
      ) {
        throw new ERROR_SOCKET_BAD_PORT(
          portName,
          checkIntersections,
          isPortRequired,
        );
      }
      return checkIntersections | 0;
    }
    var handleArrayAndErrorMethods = hideStackTrace(
      (______validateAbortSignal, ______abortSignal) => {
        if (
          ______validateAbortSignal !== undefined &&
          (______validateAbortSignal === null ||
            typeof ______validateAbortSignal != "object" ||
            !("aborted" in ______validateAbortSignal))
        ) {
          throw new _ERROR_INVALID_ARG_TYPE(
            ______abortSignal,
            "AbortSignal",
            ______validateAbortSignal,
          );
        }
      },
    );
    var extractAndDefineArrayUtilities = hideStackTrace(
      (validateCallbackFunction, validateCallback) => {
        if (typeof validateCallbackFunction != "function") {
          throw new _ERROR_INVALID_ARG_TYPE(
            validateCallback,
            "Function",
            validateCallbackFunction,
          );
        }
      },
    );
    var ______________extractArrayMethodsAndProperties = hideStackTrace(
      (validateFunctionArgument, functionValidatorArgName) => {
        if (
          typeof validateFunctionArgument != "function" ||
          ____extractArrayMethodsAndProperties(validateFunctionArgument)
        ) {
          throw new _ERROR_INVALID_ARG_TYPE(
            functionValidatorArgName,
            "Function",
            validateFunctionArgument,
          );
        }
      },
    );
    var extractAndMapArrayMethodsAndProperties = hideStackTrace(
      (_validateArgumentType, argumentTypeValidationError) => {
        if (_validateArgumentType !== undefined) {
          throw new _ERROR_INVALID_ARG_TYPE(
            argumentTypeValidationError,
            "undefined",
            _validateArgumentType,
          );
        }
      },
    );
    function ___validateVersionConstraints(
      processTildeRange,
      processVersionRange,
      processVersionConstraints,
    ) {
      if (
        !ArrayPrototypeIncludes(processVersionConstraints, processTildeRange)
      ) {
        throw new _ERROR_INVALID_ARG_TYPE(
          processVersionRange,
          "('" + ArrayPrototypeJoin(processVersionConstraints, "|") + "')",
          processTildeRange,
        );
      }
    }
    _extractArrayMethodsAndProperties.exports = {
      isInt32: isCacheEntryInteger,
      isUint32: isValidCacheItem,
      parseFileMode: processNodeRemoval,
      validateArray: extractAndMapArrayMethods,
      validateBoolean: validateComparatorList,
      validateBuffer: _____________extractArrayMethodsAndProperties,
      validateEncoding: validateLogBufferEncoding,
      validateFunction: extractAndDefineArrayUtilities,
      validateInt32: _________extractArrayMethodsAndProperties,
      validateInteger: ________extractArrayMethodsAndProperties,
      validateNumber: validateRange,
      validateObject: ____________extractArrayMethodsAndProperties,
      validateOneOf: ___________extractArrayMethodsAndProperties,
      validatePlainFunction: ______________extractArrayMethodsAndProperties,
      validatePort: validatePortNumber,
      validateSignalName: validateIntersectionSignal,
      validateString: validateRangeHandler,
      validateUint32: __________extractArrayMethodsAndProperties,
      validateUndefined: extractAndMapArrayMethodsAndProperties,
      validateUnion: ___validateVersionConstraints,
      validateAbortSignal: handleArrayAndErrorMethods,
    };
  },
);
var logTildeOperation = getModuleExportsIfAbsent(
  (_handleTimeout, timeoutHandler) => {
    var timeoutExports = (timeoutHandler.exports = {});
    var setTimeoutWrapper;
    var clearTimeoutWrapper;
    function throwSetTimeoutNotDefinedError() {
      throw new Error("setTimeout has not been defined");
    }
    function throwClearTimeoutError() {
      throw new Error("clearTimeout has not been defined");
    }
    (function () {
      try {
        if (typeof setTimeout == "function") {
          setTimeoutWrapper = setTimeout;
        } else {
          setTimeoutWrapper = throwSetTimeoutNotDefinedError;
        }
      } catch {
        setTimeoutWrapper = throwSetTimeoutNotDefinedError;
      }
      try {
        if (typeof clearTimeout == "function") {
          clearTimeoutWrapper = clearTimeout;
        } else {
          clearTimeoutWrapper = throwClearTimeoutError;
        }
      } catch {
        clearTimeoutWrapper = throwClearTimeoutError;
      }
    })();
    function executeWithTimeout(_parseVersionRange) {
      if (setTimeoutWrapper === setTimeout) {
        return setTimeout(_parseVersionRange, 0);
      }
      if (
        (setTimeoutWrapper === throwSetTimeoutNotDefinedError ||
          !setTimeoutWrapper) &&
        setTimeout
      ) {
        setTimeoutWrapper = setTimeout;
        return setTimeout(_parseVersionRange, 0);
      }
      try {
        return setTimeoutWrapper(_parseVersionRange, 0);
      } catch {
        try {
          return setTimeoutWrapper.call(null, _parseVersionRange, 0);
        } catch {
          return setTimeoutWrapper.call(this, _parseVersionRange, 0);
        }
      }
    }
    function executeClearTimeout(versionConstraint) {
      if (clearTimeoutWrapper === clearTimeout) {
        return clearTimeout(versionConstraint);
      }
      if (
        (clearTimeoutWrapper === throwClearTimeoutError ||
          !clearTimeoutWrapper) &&
        clearTimeout
      ) {
        clearTimeoutWrapper = clearTimeout;
        return clearTimeout(versionConstraint);
      }
      try {
        return clearTimeoutWrapper(versionConstraint);
      } catch {
        try {
          return clearTimeoutWrapper.call(null, versionConstraint);
        } catch {
          return clearTimeoutWrapper.call(this, versionConstraint);
        }
      }
    }
    var setTimeoutHandler = [];
    var setTimeoutFallback = false;
    var setTimeoutSafe;
    var initializeTimeoutHandlers = -1;
    function handleTimeoutFallback() {
      if (!!setTimeoutFallback && !!setTimeoutSafe) {
        setTimeoutFallback = false;
        if (setTimeoutSafe.length) {
          setTimeoutHandler = setTimeoutSafe.concat(setTimeoutHandler);
        } else {
          initializeTimeoutHandlers = -1;
        }
        if (setTimeoutHandler.length) {
          initializeTimeoutFallback();
        }
      }
    }
    function initializeTimeoutFallback() {
      if (!setTimeoutFallback) {
        var timeoutExecutionHandle = executeWithTimeout(handleTimeoutFallback);
        setTimeoutFallback = true;
        for (
          var timeoutHandlerCount = setTimeoutHandler.length;
          timeoutHandlerCount;

        ) {
          setTimeoutSafe = setTimeoutHandler;
          setTimeoutHandler = [];
          while (++initializeTimeoutHandlers < timeoutHandlerCount) {
            if (setTimeoutSafe) {
              setTimeoutSafe[initializeTimeoutHandlers].run();
            }
          }
          initializeTimeoutHandlers = -1;
          timeoutHandlerCount = setTimeoutHandler.length;
        }
        setTimeoutSafe = null;
        setTimeoutFallback = false;
        executeClearTimeout(timeoutExecutionHandle);
      }
    }
    timeoutExports.nextTick = function (generateVersionRange) {
      var versionRangeArray = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (
          var indexForArgumentLoop = 1;
          indexForArgumentLoop < arguments.length;
          indexForArgumentLoop++
        ) {
          versionRangeArray[indexForArgumentLoop - 1] =
            arguments[indexForArgumentLoop];
        }
      }
      setTimeoutHandler.push(
        new ProcessXRangesWithVersionRange(
          generateVersionRange,
          versionRangeArray,
        ),
      );
      if (setTimeoutHandler.length === 1 && !setTimeoutFallback) {
        executeWithTimeout(initializeTimeoutFallback);
      }
    };
    function ProcessXRangesWithVersionRange(
      processXRanges,
      _processVersionRange,
    ) {
      this.fun = processXRanges;
      this.array = _processVersionRange;
    }
    ProcessXRangesWithVersionRange.prototype.run = function () {
      this.fun.apply(null, this.array);
    };
    timeoutExports.title = "browser";
    timeoutExports.browser = true;
    timeoutExports.env = {};
    timeoutExports.argv = [];
    timeoutExports.version = "";
    timeoutExports.versions = {};
    function updateUserProfile() {}
    timeoutExports.on = updateUserProfile;
    timeoutExports.addListener = updateUserProfile;
    timeoutExports.once = updateUserProfile;
    timeoutExports.off = updateUserProfile;
    timeoutExports.removeListener = updateUserProfile;
    timeoutExports.removeAllListeners = updateUserProfile;
    timeoutExports.emit = updateUserProfile;
    timeoutExports.prependListener = updateUserProfile;
    timeoutExports.prependOnceListener = updateUserProfile;
    timeoutExports.listeners = function (versionRequirement) {
      return [];
    };
    timeoutExports.binding = function (versionConstraintExpression) {
      throw new Error("process.binding is not supported");
    };
    timeoutExports.cwd = function () {
      return "/";
    };
    timeoutExports.chdir = function (versionRangeString) {
      throw new Error("process.chdir is not supported");
    };
    timeoutExports.umask = function () {
      return 0;
    };
  },
);
var isVersionIncremented = getModuleExportsIfAbsent(
  (checkStreamCompatibility, validateStreamCompatibility) => {
    var {
      Symbol: getSymbol,
      SymbolAsyncIterator: _SymbolAsyncIterator,
      SymbolIterator: getSymbolIterator,
    } = removeHeadNode();
    var kDestroyedSymbol = getSymbol("kDestroyed");
    var kIsErrored = getSymbol("kIsErrored");
    var isReadableSymbol = getSymbol("kIsReadable");
    var kIsDisturbed = getSymbol("kIsDisturbed");
    function ___isReadableStream(
      versionRange,
      isReadableStreamAllowPausing = false,
    ) {
      return (
        !!versionRange &&
        typeof versionRange.pipe == "function" &&
        typeof versionRange.on == "function" &&
        (!isReadableStreamAllowPausing ||
          (typeof versionRange.pause == "function" &&
            typeof versionRange.resume == "function")) &&
        (!versionRange._writableState ||
          versionRange._readableState?.readable !== false) &&
        (!versionRange._writableState || !!versionRange._readableState)
      );
    }
    function _____isWritableStream(generateRange) {
      return (
        !!generateRange &&
        typeof generateRange.write == "function" &&
        typeof generateRange.on == "function" &&
        (!generateRange._readableState ||
          generateRange._writableState?.writable !== false)
      );
    }
    function isVersionRangeConstraintsValid(getVersionRangeConstraints) {
      return (
        !!getVersionRangeConstraints &&
        typeof getVersionRangeConstraints.pipe == "function" &&
        !!getVersionRangeConstraints._readableState &&
        typeof getVersionRangeConstraints.on == "function" &&
        typeof getVersionRangeConstraints.write == "function"
      );
    }
    function isStreamOrWritable(_generateVersionRange) {
      return (
        _generateVersionRange &&
        (_generateVersionRange._readableState ||
          _generateVersionRange._writableState ||
          (typeof _generateVersionRange.write == "function" &&
            typeof _generateVersionRange.on == "function") ||
          (typeof _generateVersionRange.pipe == "function" &&
            typeof _generateVersionRange.on == "function"))
      );
    }
    function validateIterator(
      __generateVersionRange,
      generateVersionRangeExpression,
    ) {
      if (__generateVersionRange == null) {
        return false;
      } else if (generateVersionRangeExpression === true) {
        return (
          typeof __generateVersionRange[_SymbolAsyncIterator] == "function"
        );
      } else if (generateVersionRangeExpression === false) {
        return typeof __generateVersionRange[getSymbolIterator] == "function";
      } else {
        return (
          typeof __generateVersionRange[_SymbolAsyncIterator] == "function" ||
          typeof __generateVersionRange[getSymbolIterator] == "function"
        );
      }
    }
    function isStreamDestroyed(getVersionRange) {
      if (!isStreamOrWritable(getVersionRange)) {
        return null;
      }
      let writableOrReadableState = getVersionRange._writableState;
      let ___________________readableState = getVersionRange._readableState;
      let _combinedState =
        writableOrReadableState || ___________________readableState;
      return (
        !!getVersionRange.destroyed ||
        !!getVersionRange[kDestroyedSymbol] ||
        (_combinedState != null && !!_combinedState.destroyed)
      );
    }
    function checkWritableState(isPrereleaseCompatible) {
      if (!_____isWritableStream(isPrereleaseCompatible)) {
        return null;
      }
      if (isPrereleaseCompatible.writableEnded === true) {
        return true;
      }
      let _______________writableState = isPrereleaseCompatible._writableState;
      if (
        _______________writableState != null &&
        _______________writableState.errored
      ) {
        return false;
      } else if (typeof _______________writableState?.ended != "boolean") {
        return null;
      } else {
        return _______________writableState.ended;
      }
    }
    function checkWritableVersionState(
      isEqualVersion,
      hasSamePrereleaseVersion,
    ) {
      if (!_____isWritableStream(isEqualVersion)) {
        return null;
      }
      if (isEqualVersion.writableFinished === true) {
        return true;
      }
      let ______________writableState = isEqualVersion._writableState;
      if (
        ______________writableState != null &&
        ______________writableState.errored
      ) {
        return false;
      } else if (typeof ______________writableState?.finished != "boolean") {
        return null;
      } else {
        return (
          !!______________writableState.finished ||
          (hasSamePrereleaseVersion === false &&
            ______________writableState.ended === true &&
            ______________writableState.length === 0)
        );
      }
    }
    function isComparatorParserEnded(comparatorParser) {
      if (!___isReadableStream(comparatorParser)) {
        return null;
      }
      if (comparatorParser.readableEnded === true) {
        return true;
      }
      let ______________readableState = comparatorParser._readableState;
      if (!______________readableState || ______________readableState.errored) {
        return false;
      } else if (typeof ______________readableState?.ended != "boolean") {
        return null;
      } else {
        return ______________readableState.ended;
      }
    }
    function _isComparatorFinished(parseComparator, comparatorString) {
      if (!___isReadableStream(parseComparator)) {
        return null;
      }
      let ____________readableState = parseComparator._readableState;
      if (
        ____________readableState != null &&
        ____________readableState.errored
      ) {
        return false;
      } else if (typeof ____________readableState?.endEmitted != "boolean") {
        return null;
      } else {
        return (
          !!____________readableState.endEmitted ||
          (comparatorString === false &&
            ____________readableState.ended === true &&
            ____________readableState.length === 0)
        );
      }
    }
    function checkIfStreamIsReadable(_parseComparator) {
      if (_parseComparator && _parseComparator[isReadableSymbol] != null) {
        return _parseComparator[isReadableSymbol];
      } else if (typeof _parseComparator?.readable != "boolean") {
        return null;
      } else if (isStreamDestroyed(_parseComparator)) {
        return false;
      } else {
        return (
          ___isReadableStream(_parseComparator) &&
          _parseComparator.readable &&
          !_isComparatorFinished(_parseComparator)
        );
      }
    }
    function ___isTestComparatorWritable(testComparator) {
      if (typeof testComparator?.writable != "boolean") {
        return null;
      } else if (isStreamDestroyed(testComparator)) {
        return false;
      } else {
        return (
          _____isWritableStream(testComparator) &&
          testComparator.writable &&
          !checkWritableState(testComparator)
        );
      }
    }
    function isStreamReadableAndWritable(testVersion, _testComparator) {
      if (isStreamOrWritable(testVersion)) {
        if (isStreamDestroyed(testVersion)) {
          return true;
        } else {
          return (
            (_testComparator?.readable === false ||
              !checkIfStreamIsReadable(testVersion)) &&
            (_testComparator?.writable === false ||
              !___isTestComparatorWritable(testVersion))
          );
        }
      } else {
        return null;
      }
    }
    function fetchWritableErrorState(parseAndValidateInput) {
      if (isStreamOrWritable(parseAndValidateInput)) {
        if (parseAndValidateInput.writableErrored) {
          return parseAndValidateInput.writableErrored;
        } else {
          return parseAndValidateInput._writableState?.errored ?? null;
        }
      } else {
        return null;
      }
    }
    function getReadableStateError(areComparatorsIntersecting) {
      if (isStreamOrWritable(areComparatorsIntersecting)) {
        if (areComparatorsIntersecting.readableErrored) {
          return areComparatorsIntersecting.readableErrored;
        } else {
          return areComparatorsIntersecting._readableState?.errored ?? null;
        }
      } else {
        return null;
      }
    }
    function getClosedState(isVersionGreaterOrEqual) {
      if (!isStreamOrWritable(isVersionGreaterOrEqual)) {
        return null;
      }
      if (typeof isVersionGreaterOrEqual.closed == "boolean") {
        return isVersionGreaterOrEqual.closed;
      }
      let ____________writableState = isVersionGreaterOrEqual._writableState;
      let _________readableState = isVersionGreaterOrEqual._readableState;
      if (
        typeof ____________writableState?.closed == "boolean" ||
        typeof _________readableState?.closed == "boolean"
      ) {
        return (
          ____________writableState?.closed || _________readableState?.closed
        );
      } else if (
        typeof isVersionGreaterOrEqual._closed == "boolean" &&
        validateVersionComparisonProperties(isVersionGreaterOrEqual)
      ) {
        return isVersionGreaterOrEqual._closed;
      } else {
        return null;
      }
    }
    function validateVersionComparisonProperties(isVersionComparisonValid) {
      return (
        typeof isVersionComparisonValid._closed == "boolean" &&
        typeof isVersionComparisonValid._defaultKeepAlive == "boolean" &&
        typeof isVersionComparisonValid._removedConnection == "boolean" &&
        typeof isVersionComparisonValid._removedContLen == "boolean"
      );
    }
    function ___isVersionCompatible(checkVersionCompatibility) {
      return (
        typeof checkVersionCompatibility._sent100 == "boolean" &&
        validateVersionComparisonProperties(checkVersionCompatibility)
      );
    }
    function isValidVersionSemantic(compareVersionSemantics) {
      return (
        typeof compareVersionSemantics._consuming == "boolean" &&
        typeof compareVersionSemantics._dumped == "boolean" &&
        compareVersionSemantics.req?.upgradeOrConnect === undefined
      );
    }
    function isDataComparisonOperatorActive(dataComparisonOperator) {
      if (!isStreamOrWritable(dataComparisonOperator)) {
        return null;
      }
      let _________________writableState =
        dataComparisonOperator._writableState;
      let _________________readableState =
        dataComparisonOperator._readableState;
      let isDataComparisonActive =
        _________________writableState || _________________readableState;
      return (
        (!isDataComparisonActive &&
          ___isVersionCompatible(dataComparisonOperator)) ||
        (!!isDataComparisonActive &&
          !!isDataComparisonActive.autoDestroy &&
          !!isDataComparisonActive.emitClose &&
          isDataComparisonActive.closed === false)
      );
    }
    function isPropertiesDisturbed(_validateAndStorePropertiesDiff) {
      return (
        !!_validateAndStorePropertiesDiff &&
        !!(
          _validateAndStorePropertiesDiff[kIsDisturbed] ??
          (_validateAndStorePropertiesDiff.readableDidRead ||
            _validateAndStorePropertiesDiff.readableAborted)
        )
      );
    }
    function isBase64EncodingErrored(_validateBase64Encoding) {
      return (
        !!_validateBase64Encoding &&
        !!(
          _validateBase64Encoding[kIsErrored] ??
          _validateBase64Encoding.readableErrored ??
          _validateBase64Encoding.writableErrored ??
          _validateBase64Encoding._readableState?.errorEmitted ??
          _validateBase64Encoding._writableState?.errorEmitted ??
          _validateBase64Encoding._readableState?.errored ??
          _validateBase64Encoding._writableState?.errored
        )
      );
    }
    validateStreamCompatibility.exports = {
      kDestroyed: kDestroyedSymbol,
      isDisturbed: isPropertiesDisturbed,
      kIsDisturbed: kIsDisturbed,
      isErrored: isBase64EncodingErrored,
      kIsErrored: kIsErrored,
      isReadable: checkIfStreamIsReadable,
      kIsReadable: isReadableSymbol,
      isClosed: getClosedState,
      isDestroyed: isStreamDestroyed,
      isDuplexNodeStream: isVersionRangeConstraintsValid,
      isFinished: isStreamReadableAndWritable,
      isIterable: validateIterator,
      isReadableNodeStream: ___isReadableStream,
      isReadableEnded: isComparatorParserEnded,
      isReadableFinished: _isComparatorFinished,
      isReadableErrored: getReadableStateError,
      isNodeStream: isStreamOrWritable,
      isWritable: ___isTestComparatorWritable,
      isWritableNodeStream: _____isWritableStream,
      isWritableEnded: checkWritableState,
      isWritableFinished: checkWritableVersionState,
      isWritableErrored: fetchWritableErrorState,
      isServerRequest: isValidVersionSemantic,
      isServerResponse: ___isVersionCompatible,
      willEmitClose: isDataComparisonOperatorActive,
    };
  },
);
var findMostRecentBase64EncodedValue = getModuleExportsIfAbsent(
  (_handleVersionCheckAndUpdate, _handleVersionCheck) => {
    var ___logOperationResult = logTildeOperation();
    var { AbortError: ____AbortError, codes: errorCodes } =
      _________________________validateAndReturnIntrinsicProperty();
    var {
      ERR_INVALID_ARG_TYPE: ERR_INVALID_ARGUMENT_TYPE,
      ERR_STREAM_PREMATURE_CLOSE: ERROR_STREAM_PREMATURE_CLOSE,
    } = errorCodes;
    var { kEmptyObject: emptyObject, once: registerCloseEventHandler } =
      swapBufferWithNodes();
    var {
      validateAbortSignal: ____validateAbortSignal,
      validateFunction: validateFunctionInput,
      validateObject: validateInputObject,
    } = processNode();
    var { Promise: PromiseConstructor } = removeHeadNode();
    var {
      isClosed: isClosedStream,
      isReadable: _isReadableStream,
      isReadableNodeStream: _isReadableNodeStream,
      isReadableFinished: isStreamReadableFinished,
      isReadableErrored: isStreamReadableErrored,
      isWritable: __isWritableStream,
      isWritableNodeStream: _isWritableNodeStream,
      isWritableFinished: logVersionCheckAndUpdate,
      isWritableErrored: ____logOperationResult,
      isNodeStream: __handleVersionCheckAndUpdate,
      willEmitClose: ___handleVersionCheckAndUpdate,
    } = isVersionIncremented();
    function isVersionCheckHandler(handleVersionCheckAndUpdate) {
      return (
        handleVersionCheckAndUpdate.setHeader &&
        typeof handleVersionCheckAndUpdate.abort == "function"
      );
    }
    var ____handleVersionCheckAndUpdate = () => {};
    function validateAndProcessVersion(
      handleVersionComparison,
      promisedVersionValidator,
      validateAndFormatSemver,
    ) {
      if (arguments.length === 2) {
        validateAndFormatSemver = promisedVersionValidator;
        promisedVersionValidator = emptyObject;
      } else if (promisedVersionValidator == null) {
        promisedVersionValidator = emptyObject;
      } else {
        validateInputObject(promisedVersionValidator, "options");
      }
      validateFunctionInput(validateAndFormatSemver, "callback");
      ____validateAbortSignal(
        promisedVersionValidator.signal,
        "options.signal",
      );
      validateAndFormatSemver = registerCloseEventHandler(
        validateAndFormatSemver,
      );
      let __isReadableStream =
        promisedVersionValidator.readable ??
        _isReadableNodeStream(handleVersionComparison);
      let ___isWritableStream =
        promisedVersionValidator.writable ??
        _isWritableNodeStream(handleVersionComparison);
      if (!__handleVersionCheckAndUpdate(handleVersionComparison)) {
        throw new ERR_INVALID_ARGUMENT_TYPE(
          "stream",
          "Stream",
          handleVersionComparison,
        );
      }
      let validateAndProcessStreamVersion =
        handleVersionComparison._writableState;
      let validateAndProcessVersionStream =
        handleVersionComparison._readableState;
      let validateAndProcessVersionWithStream = () => {
        if (!handleVersionComparison.writable) {
          _validateAndProcessStreamVersion();
        }
      };
      let _validateAndProcessVersion =
        ___handleVersionCheckAndUpdate(handleVersionComparison) &&
        _isReadableNodeStream(handleVersionComparison) === __isReadableStream &&
        _isWritableNodeStream(handleVersionComparison) === ___isWritableStream;
      let __validateAndProcessVersion = logVersionCheckAndUpdate(
        handleVersionComparison,
        false,
      );
      let _validateAndProcessStreamVersion = () => {
        __validateAndProcessVersion = true;
        if (handleVersionComparison.destroyed) {
          _validateAndProcessVersion = false;
        }
        if (
          (!_validateAndProcessVersion ||
            (!!handleVersionComparison.readable && !__isReadableStream)) &&
          (!__isReadableStream || ___validateAndProcessVersion)
        ) {
          validateAndFormatSemver.call(handleVersionComparison);
        }
      };
      let ___validateAndProcessVersion = isStreamReadableFinished(
        handleVersionComparison,
        false,
      );
      let ____validateAndProcessVersion = () => {
        ___validateAndProcessVersion = true;
        if (handleVersionComparison.destroyed) {
          _validateAndProcessVersion = false;
        }
        if (
          (!_validateAndProcessVersion ||
            (!!handleVersionComparison.writable && !___isWritableStream)) &&
          (!___isWritableStream || __validateAndProcessVersion)
        ) {
          validateAndFormatSemver.call(handleVersionComparison);
        }
      };
      let __validateAndProcessStreamVersion = (versionToValidate) => {
        validateAndFormatSemver.call(
          handleVersionComparison,
          versionToValidate,
        );
      };
      let _____validateAndProcessVersion = isClosedStream(
        handleVersionComparison,
      );
      let ___validateAndProcessStreamVersion = () => {
        _____validateAndProcessVersion = true;
        let logAndValidateVersionResult =
          ____logOperationResult(handleVersionComparison) ||
          isStreamReadableErrored(handleVersionComparison);
        if (
          logAndValidateVersionResult &&
          typeof logAndValidateVersionResult != "boolean"
        ) {
          return validateAndFormatSemver.call(
            handleVersionComparison,
            logAndValidateVersionResult,
          );
        }
        if (
          __isReadableStream &&
          !___validateAndProcessVersion &&
          _isReadableNodeStream(handleVersionComparison, true) &&
          !isStreamReadableFinished(handleVersionComparison, false)
        ) {
          return validateAndFormatSemver.call(
            handleVersionComparison,
            new ERROR_STREAM_PREMATURE_CLOSE(),
          );
        }
        if (
          ___isWritableStream &&
          !__validateAndProcessVersion &&
          !logVersionCheckAndUpdate(handleVersionComparison, false)
        ) {
          return validateAndFormatSemver.call(
            handleVersionComparison,
            new ERROR_STREAM_PREMATURE_CLOSE(),
          );
        }
        validateAndFormatSemver.call(handleVersionComparison);
      };
      let ______validateAndProcessVersion = () => {
        handleVersionComparison.req.on(
          "finish",
          _validateAndProcessStreamVersion,
        );
      };
      if (isVersionCheckHandler(handleVersionComparison)) {
        handleVersionComparison.on(
          "complete",
          _validateAndProcessStreamVersion,
        );
        if (!_validateAndProcessVersion) {
          handleVersionComparison.on(
            "abort",
            ___validateAndProcessStreamVersion,
          );
        }
        if (handleVersionComparison.req) {
          ______validateAndProcessVersion();
        } else {
          handleVersionComparison.on(
            "request",
            ______validateAndProcessVersion,
          );
        }
      } else if (___isWritableStream && !validateAndProcessStreamVersion) {
        handleVersionComparison.on("end", validateAndProcessVersionWithStream);
        handleVersionComparison.on(
          "close",
          validateAndProcessVersionWithStream,
        );
      }
      if (
        !_validateAndProcessVersion &&
        typeof handleVersionComparison.aborted == "boolean"
      ) {
        handleVersionComparison.on(
          "aborted",
          ___validateAndProcessStreamVersion,
        );
      }
      handleVersionComparison.on("end", ____validateAndProcessVersion);
      handleVersionComparison.on("finish", _validateAndProcessStreamVersion);
      if (promisedVersionValidator.error !== false) {
        handleVersionComparison.on("error", __validateAndProcessStreamVersion);
      }
      handleVersionComparison.on("close", ___validateAndProcessStreamVersion);
      if (_____validateAndProcessVersion) {
        ___logOperationResult.nextTick(___validateAndProcessStreamVersion);
      } else if (
        (validateAndProcessStreamVersion != null &&
          validateAndProcessStreamVersion.errorEmitted) ||
        (validateAndProcessVersionStream != null &&
          validateAndProcessVersionStream.errorEmitted)
      ) {
        if (!_validateAndProcessVersion) {
          ___logOperationResult.nextTick(___validateAndProcessStreamVersion);
        }
      } else if (
        (!__isReadableStream &&
          (!_validateAndProcessVersion ||
            _isReadableStream(handleVersionComparison)) &&
          (__validateAndProcessVersion ||
            __isWritableStream(handleVersionComparison) === false)) ||
        (!___isWritableStream &&
          (!_validateAndProcessVersion ||
            __isWritableStream(handleVersionComparison)) &&
          (___validateAndProcessVersion ||
            _isReadableStream(handleVersionComparison) === false)) ||
        (validateAndProcessVersionStream &&
          handleVersionComparison.req &&
          handleVersionComparison.aborted)
      ) {
        ___logOperationResult.nextTick(___validateAndProcessStreamVersion);
      }
      let _______validateAndProcessVersion = () => {
        validateAndFormatSemver = ____handleVersionCheckAndUpdate;
        handleVersionComparison.removeListener(
          "aborted",
          ___validateAndProcessStreamVersion,
        );
        handleVersionComparison.removeListener(
          "complete",
          _validateAndProcessStreamVersion,
        );
        handleVersionComparison.removeListener(
          "abort",
          ___validateAndProcessStreamVersion,
        );
        handleVersionComparison.removeListener(
          "request",
          ______validateAndProcessVersion,
        );
        if (handleVersionComparison.req) {
          handleVersionComparison.req.removeListener(
            "finish",
            _validateAndProcessStreamVersion,
          );
        }
        handleVersionComparison.removeListener(
          "end",
          validateAndProcessVersionWithStream,
        );
        handleVersionComparison.removeListener(
          "close",
          validateAndProcessVersionWithStream,
        );
        handleVersionComparison.removeListener(
          "finish",
          _validateAndProcessStreamVersion,
        );
        handleVersionComparison.removeListener(
          "end",
          ____validateAndProcessVersion,
        );
        handleVersionComparison.removeListener(
          "error",
          __validateAndProcessStreamVersion,
        );
        handleVersionComparison.removeListener(
          "close",
          ___validateAndProcessStreamVersion,
        );
      };
      if (promisedVersionValidator.signal && !_____validateAndProcessVersion) {
        let handleVersionAbort = () => {
          let _validateAndFormatVersion = validateAndFormatSemver;
          _______validateAndProcessVersion();
          _validateAndFormatVersion.call(
            handleVersionComparison,
            new ____AbortError(undefined, {
              cause: promisedVersionValidator.signal.reason,
            }),
          );
        };
        if (promisedVersionValidator.signal.aborted) {
          ___logOperationResult.nextTick(handleVersionAbort);
        } else {
          let originalValidateAndFormatSemver = validateAndFormatSemver;
          validateAndFormatSemver = registerCloseEventHandler(
            (...___versionData) => {
              promisedVersionValidator.signal.removeEventListener(
                "abort",
                handleVersionAbort,
              );
              originalValidateAndFormatSemver.apply(
                handleVersionComparison,
                ___versionData,
              );
            },
          );
          promisedVersionValidator.signal.addEventListener(
            "abort",
            handleVersionAbort,
          );
        }
      }
      return _______validateAndProcessVersion;
    }
    function validateAndProcessIntersectionPromises(
      checkIntersectionsBetweenObjects,
      processIntersectingEntities,
    ) {
      return new PromiseConstructor(
        (handleIntersectionResult, processIntersection) => {
          validateAndProcessVersion(
            checkIntersectionsBetweenObjects,
            processIntersectingEntities,
            (intersectionData) => {
              if (intersectionData) {
                processIntersection(intersectionData);
              } else {
                handleIntersectionResult();
              }
            },
          );
        },
      );
    }
    _handleVersionCheck.exports = validateAndProcessVersion;
    _handleVersionCheck.exports.finished =
      validateAndProcessIntersectionPromises;
  },
);
var calculateSortedBufferAndRanges = getModuleExportsIfAbsent(
  (_processEncodedValues, __processEncodedValues) => {
    var AbortControllerReference =
      globalThis.AbortController ||
      ________________________validateAndReturnIntrinsicProperty()
        .AbortController;
    var {
      codes: {
        ERR_INVALID_ARG_TYPE: ERROR_INVALID_ARG_TYPE,
        ERR_MISSING_ARGS: ERROR_MISSING_ARGS,
        ERR_OUT_OF_RANGE: ERROR_OUT_OF_RANGE,
      },
      AbortError: AbortError,
    } = _________________________validateAndReturnIntrinsicProperty();
    var {
      validateAbortSignal: ___validateAbortSignal,
      validateInteger: validateInteger,
      validateObject: validateObject,
    } = processNode();
    var kWeakSymbol = removeHeadNode().Symbol("kWeak");
    var { finished: isFinished } = findMostRecentBase64EncodedValue();
    var {
      ArrayPrototypePush: arrayPrototypePush,
      MathFloor: mathFloor,
      Number: NativeNumber,
      NumberIsNaN: isNumberNaN,
      Promise: _Promise,
      PromiseReject: promiseReject,
      PromisePrototypeThen: promiseThenHandler,
      Symbol: symbolReference,
    } = removeHeadNode();
    var validateAndProcessEncodedValues = symbolReference("kEmpty");
    var ___processEncodedValues = symbolReference("kEof");
    function validateAndPrepareComparison(
      compareEncodedValues,
      compareValuesAndAoR,
    ) {
      if (typeof compareEncodedValues != "function") {
        throw new ERROR_INVALID_ARG_TYPE(
          "fn",
          ["Function", "AsyncFunction"],
          compareEncodedValues,
        );
      }
      if (compareValuesAndAoR != null) {
        validateObject(compareValuesAndAoR, "options");
      }
      if (compareValuesAndAoR?.signal != null) {
        ___validateAbortSignal(compareValuesAndAoR.signal, "options.signal");
      }
      let concurrencyLimit = 1;
      if (compareValuesAndAoR?.concurrency != null) {
        concurrencyLimit = mathFloor(compareValuesAndAoR.concurrency);
      }
      validateInteger(concurrencyLimit, "concurrency", 1);
      return async function* () {
        var compareValuesSignal;
        var compareValuesAbortSignal;
        let abortController = new AbortControllerReference();
        let _context = this;
        let comparisonResults = [];
        let abortControllerSignal = abortController.signal;
        let abortControllerOptions = {
          signal: abortControllerSignal,
        };
        let abortComparisonOperation = () => abortController.abort();
        if (
          compareValuesAndAoR != null &&
          (compareValuesSignal = compareValuesAndAoR.signal) !== null &&
          compareValuesSignal !== undefined &&
          compareValuesSignal.aborted
        ) {
          abortComparisonOperation();
        }
        if (
          compareValuesAndAoR != null &&
          (compareValuesAbortSignal = compareValuesAndAoR.signal) !== null &&
          compareValuesAbortSignal !== undefined
        ) {
          compareValuesAbortSignal.addEventListener(
            "abort",
            abortComparisonOperation,
          );
        }
        let comparisonStatus;
        let comparisonStatusHandler;
        let isComparisonAborted = false;
        function abortComparison() {
          isComparisonAborted = true;
        }
        async function processComparisonResults() {
          try {
            for await (let encodedValue of _context) {
              var encodedValuePromise;
              if (isComparisonAborted) {
                return;
              }
              if (abortControllerSignal.aborted) {
                throw new AbortError();
              }
              try {
                encodedValue = compareEncodedValues(
                  encodedValue,
                  abortControllerOptions,
                );
              } catch (____________error) {
                encodedValue = promiseReject(____________error);
              }
              if (encodedValue !== validateAndProcessEncodedValues) {
                if (
                  typeof ((encodedValuePromise = encodedValue) === null ||
                  encodedValuePromise === undefined
                    ? undefined
                    : encodedValuePromise.catch) == "function"
                ) {
                  encodedValue.catch(abortComparison);
                }
                comparisonResults.push(encodedValue);
                if (comparisonStatus) {
                  comparisonStatus();
                  comparisonStatus = null;
                }
                if (
                  !isComparisonAborted &&
                  comparisonResults.length &&
                  comparisonResults.length >= concurrencyLimit
                ) {
                  await new _Promise((_comparisonStatusHandler) => {
                    comparisonStatusHandler = _comparisonStatusHandler;
                  });
                }
              }
            }
            comparisonResults.push(___processEncodedValues);
          } catch (_error) {
            let rejectedPromiseResult = promiseReject(_error);
            promiseThenHandler(
              rejectedPromiseResult,
              undefined,
              abortComparison,
            );
            comparisonResults.push(rejectedPromiseResult);
          } finally {
            var comparisonAbortSignal;
            isComparisonAborted = true;
            if (comparisonStatus) {
              comparisonStatus();
              comparisonStatus = null;
            }
            if (
              compareValuesAndAoR != null &&
              (comparisonAbortSignal = compareValuesAndAoR.signal) !== null &&
              comparisonAbortSignal !== undefined
            ) {
              comparisonAbortSignal.removeEventListener(
                "abort",
                abortComparisonOperation,
              );
            }
          }
        }
        processComparisonResults();
        try {
          while (true) {
            while (comparisonResults.length > 0) {
              let currentComparisonResult = await comparisonResults[0];
              if (currentComparisonResult === ___processEncodedValues) {
                return;
              }
              if (abortControllerSignal.aborted) {
                throw new AbortError();
              }
              if (currentComparisonResult !== validateAndProcessEncodedValues) {
                yield currentComparisonResult;
              }
              comparisonResults.shift();
              if (comparisonStatusHandler) {
                comparisonStatusHandler();
                comparisonStatusHandler = null;
              }
            }
            await new _Promise((_comparisonStatus) => {
              comparisonStatus = _comparisonStatus;
            });
          }
        } finally {
          abortController.abort();
          isComparisonAborted = true;
          if (comparisonStatusHandler) {
            comparisonStatusHandler();
            comparisonStatusHandler = null;
          }
        }
      }.call(this);
    }
    function createAsyncGeneratorWithSignalHandling(productId = undefined) {
      if (productId != null) {
        validateObject(productId, "options");
      }
      if (productId?.signal != null) {
        ___validateAbortSignal(productId.signal, "options.signal");
      }
      return async function* () {
        let counter = 0;
        for await (let item of this) {
          var ____abortSignal;
          if (
            productId != null &&
            (____abortSignal = productId.signal) !== null &&
            ____abortSignal !== undefined &&
            ____abortSignal.aborted
          ) {
            throw new AbortError({
              cause: productId.signal.reason,
            });
          }
          yield [counter++, item];
        }
      }.call(this);
    }
    async function validateComparisonOfSemanticVersions(
      compareSemverVersions,
      productID = undefined,
    ) {
      for await (let validatedSemanticVersion of validateAndCompareSemanticVersions.call(
        this,
        compareSemverVersions,
        productID,
      )) {
        return true;
      }
      return false;
    }
    async function validateVersionComparison(
      compareVersionOperators,
      dataValue = undefined,
    ) {
      if (typeof compareVersionOperators != "function") {
        throw new ERROR_INVALID_ARG_TYPE(
          "fn",
          ["Function", "AsyncFunction"],
          compareVersionOperators,
        );
      }
      return !(await validateComparisonOfSemanticVersions.call(
        this,
        async (...compareVersionAndOperators) =>
          !(await compareVersionOperators(...compareVersionAndOperators)),
        dataValue,
      ));
    }
    async function _compareAndValidateSemanticVersions(
      _compareSemverVersions,
      __compareSemverVersions,
    ) {
      for await (let __validatedVersion of validateAndCompareSemanticVersions.call(
        this,
        _compareSemverVersions,
        __compareSemverVersions,
      )) {
        return __validatedVersion;
      }
    }
    async function validateAndCompareSemverVersions(
      ___compareSemverVersions,
      compareVersions,
    ) {
      if (typeof ___compareSemverVersions != "function") {
        throw new ERROR_INVALID_ARG_TYPE(
          "fn",
          ["Function", "AsyncFunction"],
          ___compareSemverVersions,
        );
      }
      async function compareAndValidateSemverVersions(
        _compareVersionSemantics,
        compareSemver,
      ) {
        await ___compareSemverVersions(_compareVersionSemantics, compareSemver);
        return validateAndProcessEncodedValues;
      }
      for await (let _versionComparisonResult of validateAndPrepareComparison.call(
        this,
        compareAndValidateSemverVersions,
        compareVersions,
      ));
    }
    function validateAndCompareSemanticVersions(
      compareVersionObjects,
      compareSemverOperators,
    ) {
      if (typeof compareVersionObjects != "function") {
        throw new ERROR_INVALID_ARG_TYPE(
          "fn",
          ["Function", "AsyncFunction"],
          compareVersionObjects,
        );
      }
      async function compareAndValidateSemanticVersions(
        compareSemanticVersions,
        ____compareSemverVersions,
      ) {
        if (
          await compareVersionObjects(
            compareSemanticVersions,
            ____compareSemverVersions,
          )
        ) {
          return compareSemanticVersions;
        } else {
          return validateAndProcessEncodedValues;
        }
      }
      return validateAndPrepareComparison.call(
        this,
        compareAndValidateSemanticVersions,
        compareSemverOperators,
      );
    }
    var ____processEncodedValues = class extends ERROR_MISSING_ARGS {
      constructor() {
        super("reduce");
        this.message = "Reduce of an empty stream requires an initial value";
      }
    };
    async function processBufferWithAbortHandling(
      _getModuleExportsIfAbsent,
      getBufferProcessingFunctions,
      processBufferOperations,
    ) {
      var _abortSignal;
      if (typeof _getModuleExportsIfAbsent != "function") {
        throw new ERROR_INVALID_ARG_TYPE(
          "reducer",
          ["Function", "AsyncFunction"],
          _getModuleExportsIfAbsent,
        );
      }
      if (processBufferOperations != null) {
        validateObject(processBufferOperations, "options");
      }
      if (processBufferOperations?.signal != null) {
        ___validateAbortSignal(
          processBufferOperations.signal,
          "options.signal",
        );
      }
      let hasMultipleArguments = arguments.length > 1;
      if (
        processBufferOperations != null &&
        (_abortSignal = processBufferOperations.signal) !== null &&
        _abortSignal !== undefined &&
        _abortSignal.aborted
      ) {
        let abortErrorWithBufferSignal = new AbortError(undefined, {
          cause: processBufferOperations.signal.reason,
        });
        this.once("error", () => {});
        await isFinished(this.destroy(abortErrorWithBufferSignal));
        throw abortErrorWithBufferSignal;
      }
      let abortControllerRef = new AbortControllerReference();
      let __abortSignal = abortControllerRef.signal;
      if (processBufferOperations != null && processBufferOperations.signal) {
        let abortSignalOptions = {
          once: true,
          [kWeakSymbol]: this,
        };
        processBufferOperations.signal.addEventListener(
          "abort",
          () => abortControllerRef.abort(),
          abortSignalOptions,
        );
      }
      let ___abortSignal = false;
      try {
        for await (let bufferOperation of this) {
          var bufferProcessingSignal;
          ___abortSignal = true;
          if (
            processBufferOperations != null &&
            (bufferProcessingSignal = processBufferOperations.signal) !==
              null &&
            bufferProcessingSignal !== undefined &&
            bufferProcessingSignal.aborted
          ) {
            throw new AbortError();
          }
          if (hasMultipleArguments) {
            getBufferProcessingFunctions = await _getModuleExportsIfAbsent(
              getBufferProcessingFunctions,
              bufferOperation,
              {
                signal: __abortSignal,
              },
            );
          } else {
            getBufferProcessingFunctions = bufferOperation;
            hasMultipleArguments = true;
          }
        }
        if (!___abortSignal && !hasMultipleArguments) {
          throw new ____processEncodedValues();
        }
      } finally {
        abortControllerRef.abort();
      }
      return getBufferProcessingFunctions;
    }
    async function processDataWithAbortSignal(extractAndValidateVersionInfo) {
      if (extractAndValidateVersionInfo != null) {
        validateObject(extractAndValidateVersionInfo, "options");
      }
      if (extractAndValidateVersionInfo?.signal != null) {
        ___validateAbortSignal(
          extractAndValidateVersionInfo.signal,
          "options.signal",
        );
      }
      let processedDataArray = [];
      for await (let versionInfo of this) {
        var _____abortSignal;
        if (
          extractAndValidateVersionInfo != null &&
          (_____abortSignal = extractAndValidateVersionInfo.signal) !== null &&
          _____abortSignal !== undefined &&
          _____abortSignal.aborted
        ) {
          throw new AbortError(undefined, {
            cause: extractAndValidateVersionInfo.signal.reason,
          });
        }
        arrayPrototypePush(processedDataArray, versionInfo);
      }
      return processedDataArray;
    }
    function compareSemVerAsyncGenerator(
      compareSemVerVersions,
      _compareVersions,
    ) {
      let preparedComparison = validateAndPrepareComparison.call(
        this,
        compareSemVerVersions,
        _compareVersions,
      );
      return async function* () {
        for await (let comparisonItem of preparedComparison) {
          yield* comparisonItem;
        }
      }.call(this);
    }
    function _validateNonNegativeNumber(compareVersionString) {
      compareVersionString = NativeNumber(compareVersionString);
      if (isNumberNaN(compareVersionString)) {
        return 0;
      }
      if (compareVersionString < 0) {
        throw new ERROR_OUT_OF_RANGE("number", ">= 0", compareVersionString);
      }
      return compareVersionString;
    }
    function asyncGeneratorWithVersionCheck(
      _compareVersionString,
      debugEventHandler = undefined,
    ) {
      if (debugEventHandler != null) {
        validateObject(debugEventHandler, "options");
      }
      if (debugEventHandler?.signal != null) {
        ___validateAbortSignal(debugEventHandler.signal, "options.signal");
      }
      _compareVersionString = _validateNonNegativeNumber(_compareVersionString);
      return async function* () {
        var _signal;
        if (
          debugEventHandler != null &&
          (_signal = debugEventHandler.signal) !== null &&
          _signal !== undefined &&
          _signal.aborted
        ) {
          throw new AbortError();
        }
        for await (let _item of this) {
          var signalValue;
          if (
            debugEventHandler != null &&
            (signalValue = debugEventHandler.signal) !== null &&
            signalValue !== undefined &&
            signalValue.aborted
          ) {
            throw new AbortError();
          }
          if (_compareVersionString-- <= 0) {
            yield _item;
          }
        }
      }.call(this);
    }
    function compareAndYieldVersions(
      _____comparePrereleaseVersions,
      _userData = undefined,
    ) {
      if (_userData != null) {
        validateObject(_userData, "options");
      }
      if (_userData?.signal != null) {
        ___validateAbortSignal(_userData.signal, "options.signal");
      }
      _____comparePrereleaseVersions = _validateNonNegativeNumber(
        _____comparePrereleaseVersions,
      );
      return async function* () {
        var signal;
        if (
          _userData != null &&
          (signal = _userData.signal) !== null &&
          signal !== undefined &&
          signal.aborted
        ) {
          throw new AbortError();
        }
        for await (let _version of this) {
          var signalAbortCheck;
          if (
            _userData != null &&
            (signalAbortCheck = _userData.signal) !== null &&
            signalAbortCheck !== undefined &&
            signalAbortCheck.aborted
          ) {
            throw new AbortError();
          }
          if (_____comparePrereleaseVersions-- > 0) {
            yield _version;
          } else {
            return;
          }
        }
      }.call(this);
    }
    __processEncodedValues.exports.streamReturningOperators = {
      asIndexedPairs: createAsyncGeneratorWithSignalHandling,
      drop: asyncGeneratorWithVersionCheck,
      filter: validateAndCompareSemanticVersions,
      flatMap: compareSemVerAsyncGenerator,
      map: validateAndPrepareComparison,
      take: compareAndYieldVersions,
    };
    __processEncodedValues.exports.promiseReturningOperators = {
      every: validateVersionComparison,
      forEach: validateAndCompareSemverVersions,
      reduce: processBufferWithAbortHandling,
      toArray: processDataWithAbortSignal,
      some: validateComparisonOfSemanticVersions,
      find: _compareAndValidateSemanticVersions,
    };
  },
);
var compareAndValidateVersions = getModuleExportsIfAbsent(
  (handleVersionErrorsAndCallbacks, handleVersionErrorCallback) => {
    var __logOperationResult = logTildeOperation();
    var {
      aggregateTwoErrors: aggregateTwoErrors,
      codes: { ERR_MULTIPLE_CALLBACK: ERR_MULTIPLE_CALLBACK },
      AbortError: ___AbortError,
    } = _________________________validateAndReturnIntrinsicProperty();
    var { Symbol: _getSymbol } = removeHeadNode();
    var {
      kDestroyed: isOperationDestroyed,
      isDestroyed: isOperationError,
      isFinished: isVersionOperationFinished,
      isServerRequest: isServerRequestActive,
    } = isVersionIncremented();
    var getSymbolForDestroy = _getSymbol("kDestroy");
    var getSymbolForConstruct = _getSymbol("kConstruct");
    function ___________handleVersionComparison(
      compareVersionsAndReturnIndex,
      comparePreReleaseVersions,
      createMatcherWithIndex,
    ) {
      if (compareVersionsAndReturnIndex) {
        compareVersionsAndReturnIndex.stack;
        if (comparePreReleaseVersions && !comparePreReleaseVersions.errored) {
          comparePreReleaseVersions.errored = compareVersionsAndReturnIndex;
        }
        if (createMatcherWithIndex && !createMatcherWithIndex.errored) {
          createMatcherWithIndex.errored = compareVersionsAndReturnIndex;
        }
      }
    }
    function handleBuildVersionDestruction(
      findMatchingBuildVersion,
      findMatchingBuildVersionIndex,
    ) {
      let readableWritableState = this._readableState;
      let ________writableState = this._writableState;
      let combinedWritableState =
        ________writableState || readableWritableState;
      if (
        (________writableState && ________writableState.destroyed) ||
        (readableWritableState && readableWritableState.destroyed)
      ) {
        if (typeof findMatchingBuildVersionIndex == "function") {
          findMatchingBuildVersionIndex();
        }
        return this;
      } else {
        ___________handleVersionComparison(
          findMatchingBuildVersion,
          ________writableState,
          readableWritableState,
        );
        if (________writableState) {
          ________writableState.destroyed = true;
        }
        if (readableWritableState) {
          readableWritableState.destroyed = true;
        }
        if (combinedWritableState.constructed) {
          processIncrementVersion(
            this,
            findMatchingBuildVersion,
            findMatchingBuildVersionIndex,
          );
        } else {
          this.once(
            getSymbolForDestroy,
            function (getVersionIndexBasedOnIncrement) {
              processIncrementVersion(
                this,
                aggregateTwoErrors(
                  getVersionIndexBasedOnIncrement,
                  findMatchingBuildVersion,
                ),
                findMatchingBuildVersionIndex,
              );
            },
          );
        }
        return this;
      }
    }
    function processIncrementVersion(
      checkIncrementVersion,
      validateVersionIncrement,
      checkIfVersionIncrementIsValid,
    ) {
      let isVersionIncrementProcessed = false;
      function __processVersionIncrement(processVersionIncrement) {
        if (isVersionIncrementProcessed) {
          return;
        }
        isVersionIncrementProcessed = true;
        let ________readableState = checkIncrementVersion._readableState;
        let ___________writableState = checkIncrementVersion._writableState;
        ___________handleVersionComparison(
          processVersionIncrement,
          ___________writableState,
          ________readableState,
        );
        if (___________writableState) {
          ___________writableState.closed = true;
        }
        if (________readableState) {
          ________readableState.closed = true;
        }
        if (typeof checkIfVersionIncrementIsValid == "function") {
          checkIfVersionIncrementIsValid(processVersionIncrement);
        }
        if (processVersionIncrement) {
          __logOperationResult.nextTick(
            handleStreamAndClose,
            checkIncrementVersion,
            processVersionIncrement,
          );
        } else {
          __logOperationResult.nextTick(
            handleStreamClose,
            checkIncrementVersion,
          );
        }
      }
      try {
        checkIncrementVersion._destroy(
          validateVersionIncrement || null,
          __processVersionIncrement,
        );
      } catch (______________________error) {
        __processVersionIncrement(______________________error);
      }
    }
    function handleStreamAndClose(
      handleIncrementVersion,
      ______incrementVersion,
    ) {
      __handleStreamError(handleIncrementVersion, ______incrementVersion);
      handleStreamClose(handleIncrementVersion);
    }
    function handleStreamClose(incrementPrereleaseCheck) {
      let ________________readableState =
        incrementPrereleaseCheck._readableState;
      let ________________writableState =
        incrementPrereleaseCheck._writableState;
      if (________________writableState) {
        ________________writableState.closeEmitted = true;
      }
      if (________________readableState) {
        ________________readableState.closeEmitted = true;
      }
      if (
        (________________writableState &&
          ________________writableState.emitClose) ||
        (________________readableState &&
          ________________readableState.emitClose)
      ) {
        incrementPrereleaseCheck.emit("close");
      }
    }
    function __handleStreamError(
      ___incrementPrereleaseVersion,
      incrementPreReleaseVersion,
    ) {
      let __readableStreamState = ___incrementPrereleaseVersion._readableState;
      let _writableStreamState = ___incrementPrereleaseVersion._writableState;
      if (
        (!_writableStreamState || !_writableStreamState.errorEmitted) &&
        (!__readableStreamState || !__readableStreamState.errorEmitted)
      ) {
        if (_writableStreamState) {
          _writableStreamState.errorEmitted = true;
        }
        if (__readableStreamState) {
          __readableStreamState.errorEmitted = true;
        }
        ___incrementPrereleaseVersion.emit("error", incrementPreReleaseVersion);
      }
    }
    function _initializeStreamStates() {
      let ___readableState = this._readableState;
      let _______writableState = this._writableState;
      if (___readableState) {
        ___readableState.constructed = true;
        ___readableState.closed = false;
        ___readableState.closeEmitted = false;
        ___readableState.destroyed = false;
        ___readableState.errored = null;
        ___readableState.errorEmitted = false;
        ___readableState.reading = false;
        ___readableState.ended = ___readableState.readable === false;
        ___readableState.endEmitted = ___readableState.readable === false;
      }
      if (_______writableState) {
        _______writableState.constructed = true;
        _______writableState.destroyed = false;
        _______writableState.closed = false;
        _______writableState.closeEmitted = false;
        _______writableState.errored = null;
        _______writableState.errorEmitted = false;
        _______writableState.finalCalled = false;
        _______writableState.prefinished = false;
        _______writableState.ended = _______writableState.writable === false;
        _______writableState.ending = _______writableState.writable === false;
        _______writableState.finished = _______writableState.writable === false;
      }
    }
    function handleTrackProgressAndVersion(
      trackProgressAndVersionCallbacks,
      attachProgressCallback,
      handleProgressValidation,
    ) {
      let ______readableState = trackProgressAndVersionCallbacks._readableState;
      let _________writableState =
        trackProgressAndVersionCallbacks._writableState;
      if (
        (_________writableState && _________writableState.destroyed) ||
        (______readableState && ______readableState.destroyed)
      ) {
        return this;
      }
      if (
        (______readableState && ______readableState.autoDestroy) ||
        (_________writableState && _________writableState.autoDestroy)
      ) {
        trackProgressAndVersionCallbacks.destroy(attachProgressCallback);
      } else if (attachProgressCallback) {
        attachProgressCallback.stack;
        if (_________writableState && !_________writableState.errored) {
          _________writableState.errored = attachProgressCallback;
        }
        if (______readableState && !______readableState.errored) {
          ______readableState.errored = attachProgressCallback;
        }
        if (handleProgressValidation) {
          __logOperationResult.nextTick(
            __handleStreamError,
            trackProgressAndVersionCallbacks,
            attachProgressCallback,
          );
        } else {
          __handleStreamError(
            trackProgressAndVersionCallbacks,
            attachProgressCallback,
          );
        }
      }
    }
    function initializeWorkerProcessing(
      createAndProcessWorkerVersion,
      handleWorkerCommunication,
    ) {
      if (typeof createAndProcessWorkerVersion._construct != "function") {
        return;
      }
      let _readableStreamState = createAndProcessWorkerVersion._readableState;
      let writableStreamState = createAndProcessWorkerVersion._writableState;
      if (_readableStreamState) {
        _readableStreamState.constructed = false;
      }
      if (writableStreamState) {
        writableStreamState.constructed = false;
      }
      createAndProcessWorkerVersion.once(
        getSymbolForConstruct,
        handleWorkerCommunication,
      );
      if (
        !(
          createAndProcessWorkerVersion.listenerCount(getSymbolForConstruct) > 1
        )
      ) {
        __logOperationResult.nextTick(
          initializeWorkerResponseHandler,
          createAndProcessWorkerVersion,
        );
      }
    }
    function initializeWorkerResponseHandler(handleWorkerResponses) {
      let isWorkerResponseHandled = false;
      function processWorkerResponse(processWorkerMessages) {
        if (isWorkerResponseHandled) {
          handleTrackProgressAndVersion(
            handleWorkerResponses,
            processWorkerMessages ?? new ERR_MULTIPLE_CALLBACK(),
          );
          return;
        }
        isWorkerResponseHandled = true;
        let _______readableState = handleWorkerResponses._readableState;
        let __________writableState = handleWorkerResponses._writableState;
        let combinedState = __________writableState || _______readableState;
        if (_______readableState) {
          _______readableState.constructed = true;
        }
        if (__________writableState) {
          __________writableState.constructed = true;
        }
        if (combinedState.destroyed) {
          handleWorkerResponses.emit(
            getSymbolForDestroy,
            processWorkerMessages,
          );
        } else if (processWorkerMessages) {
          handleTrackProgressAndVersion(
            handleWorkerResponses,
            processWorkerMessages,
            true,
          );
        } else {
          __logOperationResult.nextTick(
            emitSymbolForConstruct,
            handleWorkerResponses,
          );
        }
      }
      try {
        handleWorkerResponses._construct(processWorkerResponse);
      } catch (_______________________error) {
        processWorkerResponse(_______________________error);
      }
    }
    function emitSymbolForConstruct(handleWorkerMessage) {
      handleWorkerMessage.emit(getSymbolForConstruct);
    }
    function isValidWorkerMessage(_handleWorkerMessage) {
      return (
        _handleWorkerMessage &&
        _handleWorkerMessage.setHeader &&
        typeof _handleWorkerMessage.abort == "function"
      );
    }
    function emitCloseEvent(__handleWorkerMessage) {
      __handleWorkerMessage.emit("close");
    }
    function handleWorkerError(workerConnection, workerCommunicationHandler) {
      workerConnection.emit("error", workerCommunicationHandler);
      __logOperationResult.nextTick(emitCloseEvent, workerConnection);
    }
    function processWorkerRequest(workerMessageHandler, _workerMessageHandler) {
      if (!!workerMessageHandler && !isOperationError(workerMessageHandler)) {
        if (
          !_workerMessageHandler &&
          !isVersionOperationFinished(workerMessageHandler)
        ) {
          _workerMessageHandler = new ___AbortError();
        }
        if (isServerRequestActive(workerMessageHandler)) {
          workerMessageHandler.socket = null;
          workerMessageHandler.destroy(_workerMessageHandler);
        } else if (isValidWorkerMessage(workerMessageHandler)) {
          workerMessageHandler.abort();
        } else if (isValidWorkerMessage(workerMessageHandler.req)) {
          workerMessageHandler.req.abort();
        } else if (typeof workerMessageHandler.destroy == "function") {
          workerMessageHandler.destroy(_workerMessageHandler);
        } else if (typeof workerMessageHandler.close == "function") {
          workerMessageHandler.close();
        } else if (_workerMessageHandler) {
          __logOperationResult.nextTick(
            handleWorkerError,
            workerMessageHandler,
            _workerMessageHandler,
          );
        } else {
          __logOperationResult.nextTick(emitCloseEvent, workerMessageHandler);
        }
        if (!workerMessageHandler.destroyed) {
          workerMessageHandler[isOperationDestroyed] = true;
        }
      }
    }
    handleVersionErrorCallback.exports = {
      construct: initializeWorkerProcessing,
      destroyer: processWorkerRequest,
      destroy: handleBuildVersionDestruction,
      undestroy: _initializeStreamStates,
      errorOrDestroy: handleTrackProgressAndVersion,
    };
  },
);
var createBlobUrl = getModuleExportsIfAbsent(
  (processDataAndHandleBlob, _processDataAndHandleBlob) => {
    var reflectObject = typeof Reflect == "object" ? Reflect : null;
    var applyFunctionWithContext =
      reflectObject && typeof reflectObject.apply == "function"
        ? reflectObject.apply
        : function (
            readAndConvertBufferToString,
            decodeAndParseData,
            decodeBinaryToString,
          ) {
            return Function.prototype.apply.call(
              readAndConvertBufferToString,
              decodeAndParseData,
              decodeBinaryToString,
            );
          };
    var getOwnPropertyKeysIncludingSymbols;
    if (reflectObject && typeof reflectObject.ownKeys == "function") {
      getOwnPropertyKeysIncludingSymbols = reflectObject.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      getOwnPropertyKeysIncludingSymbols = function (createObjectURLFromBlob) {
        return Object.getOwnPropertyNames(createObjectURLFromBlob).concat(
          Object.getOwnPropertySymbols(createObjectURLFromBlob),
        );
      };
    } else {
      getOwnPropertyKeysIncludingSymbols = function (untarFile) {
        return Object.getOwnPropertyNames(untarFile);
      };
    }
    function logBlobCreationWarning(handleBlobCreation) {
      if (console && console.warn) {
        console.warn(handleBlobCreation);
      }
    }
    var _getOwnPropertyKeysIncludingSymbols =
      Number.isNaN ||
      function (utf8Decode) {
        return utf8Decode !== utf8Decode;
      };
    function initializeComponent() {
      initializeComponent.init.call(this);
    }
    _processDataAndHandleBlob.exports = initializeComponent;
    _processDataAndHandleBlob.exports.once = handleEventWithErrorHandling;
    initializeComponent.EventEmitter = initializeComponent;
    initializeComponent.prototype._events = undefined;
    initializeComponent.prototype._eventsCount = 0;
    initializeComponent.prototype._maxListeners = undefined;
    var __getOwnPropertyKeysIncludingSymbols = 10;
    function verifyTarBufferExtractor(extractTarBuffer) {
      if (typeof extractTarBuffer != "function") {
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof extractTarBuffer,
        );
      }
    }
    Object.defineProperty(initializeComponent, "defaultMaxListeners", {
      enumerable: true,
      get() {
        return __getOwnPropertyKeysIncludingSymbols;
      },
      set(_defaultMaxListeners) {
        if (
          typeof _defaultMaxListeners != "number" ||
          _defaultMaxListeners < 0 ||
          _getOwnPropertyKeysIncludingSymbols(_defaultMaxListeners)
        ) {
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              _defaultMaxListeners +
              ".",
          );
        }
        __getOwnPropertyKeysIncludingSymbols = _defaultMaxListeners;
      },
    });
    initializeComponent.init = function () {
      if (
        this._events === undefined ||
        this._events === Object.getPrototypeOf(this)._events
      ) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || undefined;
    };
    initializeComponent.prototype.setMaxListeners = function (
      LoggerAndExtractor,
    ) {
      if (
        typeof LoggerAndExtractor != "number" ||
        LoggerAndExtractor < 0 ||
        _getOwnPropertyKeysIncludingSymbols(LoggerAndExtractor)
      ) {
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            LoggerAndExtractor +
            ".",
        );
      }
      this._maxListeners = LoggerAndExtractor;
      return this;
    };
    function getMaxListeners(processPaxHeader) {
      if (processPaxHeader._maxListeners === undefined) {
        return initializeComponent.defaultMaxListeners;
      } else {
        return processPaxHeader._maxListeners;
      }
    }
    initializeComponent.prototype.getMaxListeners = function () {
      return getMaxListeners(this);
    };
    initializeComponent.prototype.emit = function (parsePaxHeader) {
      var paxHeaderArgs = [];
      for (
        var __eventListenerIndex = 1;
        __eventListenerIndex < arguments.length;
        __eventListenerIndex++
      ) {
        paxHeaderArgs.push(arguments[__eventListenerIndex]);
      }
      var isErrorEvent = parsePaxHeader === "error";
      var __eventListeners = this._events;
      if (__eventListeners !== undefined) {
        isErrorEvent = isErrorEvent && __eventListeners.error === undefined;
      } else if (!isErrorEvent) {
        return false;
      }
      if (isErrorEvent) {
        var firstPaxHeaderArgOrError;
        if (paxHeaderArgs.length > 0) {
          firstPaxHeaderArgOrError = paxHeaderArgs[0];
        }
        if (firstPaxHeaderArgOrError instanceof Error) {
          throw firstPaxHeaderArgOrError;
        }
        var unhandledErrorWithContext = new Error(
          "Unhandled error." +
            (firstPaxHeaderArgOrError
              ? " (" + firstPaxHeaderArgOrError.message + ")"
              : ""),
        );
        unhandledErrorWithContext.context = firstPaxHeaderArgOrError;
        throw unhandledErrorWithContext;
      }
      var _eventListener = __eventListeners[parsePaxHeader];
      if (_eventListener === undefined) {
        return false;
      }
      if (typeof _eventListener == "function") {
        applyFunctionWithContext(_eventListener, this, paxHeaderArgs);
      } else {
        for (
          var _eventListenerCount = _eventListener.length,
            parsedEventListeners = copyAndParseSpecialCharacters(
              _eventListener,
              _eventListenerCount,
            ),
            __eventListenerIndex = 0;
          __eventListenerIndex < _eventListenerCount;
          ++__eventListenerIndex
        ) {
          applyFunctionWithContext(
            parsedEventListeners[__eventListenerIndex],
            this,
            paxHeaderArgs,
          );
        }
      }
      return true;
    };
    function addTarFileListener(
      readNextTarFile,
      _readNextTarFile,
      __readNextTarFile,
      readTarFileStream,
    ) {
      var tarFileEventListener;
      var eventListenerMap;
      var existingEventListener;
      verifyTarBufferExtractor(__readNextTarFile);
      eventListenerMap = readNextTarFile._events;
      if (eventListenerMap === undefined) {
        eventListenerMap = readNextTarFile._events = Object.create(null);
        readNextTarFile._eventsCount = 0;
      } else {
        if (eventListenerMap.newListener !== undefined) {
          readNextTarFile.emit(
            "newListener",
            _readNextTarFile,
            __readNextTarFile.listener
              ? __readNextTarFile.listener
              : __readNextTarFile,
          );
          eventListenerMap = readNextTarFile._events;
        }
        existingEventListener = eventListenerMap[_readNextTarFile];
      }
      if (existingEventListener === undefined) {
        existingEventListener = eventListenerMap[_readNextTarFile] =
          __readNextTarFile;
        ++readNextTarFile._eventsCount;
      } else {
        if (typeof existingEventListener == "function") {
          existingEventListener = eventListenerMap[_readNextTarFile] =
            readTarFileStream
              ? [__readNextTarFile, existingEventListener]
              : [existingEventListener, __readNextTarFile];
        } else if (readTarFileStream) {
          existingEventListener.unshift(__readNextTarFile);
        } else {
          existingEventListener.push(__readNextTarFile);
        }
        tarFileEventListener = getMaxListeners(readNextTarFile);
        if (
          tarFileEventListener > 0 &&
          existingEventListener.length > tarFileEventListener &&
          !existingEventListener.warned
        ) {
          existingEventListener.warned = true;
          var maxListenersExceededWarning = new Error(
            "Possible EventEmitter memory leak detected. " +
              existingEventListener.length +
              " " +
              String(_readNextTarFile) +
              " listeners added. Use emitter.setMaxListeners() to increase limit",
          );
          maxListenersExceededWarning.name = "MaxListenersExceededWarning";
          maxListenersExceededWarning.emitter = readNextTarFile;
          maxListenersExceededWarning.type = _readNextTarFile;
          maxListenersExceededWarning.count = existingEventListener.length;
          logBlobCreationWarning(maxListenersExceededWarning);
        }
      }
      return readNextTarFile;
    }
    initializeComponent.prototype.addListener = function (
      validateAndParsePaxHeader,
      _parsePaxHeader,
    ) {
      return addTarFileListener(
        this,
        validateAndParsePaxHeader,
        _parsePaxHeader,
        false,
      );
    };
    initializeComponent.prototype.on =
      initializeComponent.prototype.addListener;
    initializeComponent.prototype.prependListener = function (
      validateOperator,
      validatePaxHeader,
    ) {
      return addTarFileListener(
        this,
        validateOperator,
        validatePaxHeader,
        true,
      );
    };
    function triggerListener() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) {
          return this.listener.call(this.target);
        } else {
          return this.listener.apply(this.target, arguments);
        }
      }
    }
    function createListenerWrapper(
      validateDataAndFormat,
      createSectionedOutput,
      formatObjectWithSectionAndWhitespace,
    ) {
      var listenerWrapper = {
        fired: false,
        wrapFn: undefined,
        target: validateDataAndFormat,
        type: createSectionedOutput,
        listener: formatObjectWithSectionAndWhitespace,
      };
      var triggerListenerWithFormat = triggerListener.bind(listenerWrapper);
      triggerListenerWithFormat.listener = formatObjectWithSectionAndWhitespace;
      listenerWrapper.wrapFn = triggerListenerWithFormat;
      return triggerListenerWithFormat;
    }
    initializeComponent.prototype.once = function (
      getObjectConfiguration,
      handleComplexObjectAndWhitespace,
    ) {
      verifyTarBufferExtractor(handleComplexObjectAndWhitespace);
      this.on(
        getObjectConfiguration,
        createListenerWrapper(
          this,
          getObjectConfiguration,
          handleComplexObjectAndWhitespace,
        ),
      );
      return this;
    };
    initializeComponent.prototype.prependOnceListener = function (
      propertyOptions,
      processConfiguration,
    ) {
      verifyTarBufferExtractor(processConfiguration);
      this.prependListener(
        propertyOptions,
        createListenerWrapper(this, propertyOptions, processConfiguration),
      );
      return this;
    };
    initializeComponent.prototype.removeListener = function (
      processNestedObjects,
      processNestedProperties,
    ) {
      var eventListener;
      var eventHandlers;
      var listenerIndex;
      var eventListenerCount;
      var eventListenerWrapper;
      verifyTarBufferExtractor(processNestedProperties);
      eventHandlers = this._events;
      if (eventHandlers === undefined) {
        return this;
      }
      eventListener = eventHandlers[processNestedObjects];
      if (eventListener === undefined) {
        return this;
      }
      if (
        eventListener === processNestedProperties ||
        eventListener.listener === processNestedProperties
      ) {
        if (--this._eventsCount === 0) {
          this._events = Object.create(null);
        } else {
          delete eventHandlers[processNestedObjects];
          if (eventHandlers.removeListener) {
            this.emit(
              "removeListener",
              processNestedObjects,
              eventListener.listener || processNestedProperties,
            );
          }
        }
      } else if (typeof eventListener != "function") {
        listenerIndex = -1;
        eventListenerCount = eventListener.length - 1;
        for (; eventListenerCount >= 0; eventListenerCount--) {
          if (
            eventListener[eventListenerCount] === processNestedProperties ||
            eventListener[eventListenerCount].listener ===
              processNestedProperties
          ) {
            eventListenerWrapper = eventListener[eventListenerCount].listener;
            listenerIndex = eventListenerCount;
            break;
          }
        }
        if (listenerIndex < 0) {
          return this;
        }
        if (listenerIndex === 0) {
          eventListener.shift();
        } else {
          removeLastElementFromParsedString(eventListener, listenerIndex);
        }
        if (eventListener.length === 1) {
          eventHandlers[processNestedObjects] = eventListener[0];
        }
        if (eventHandlers.removeListener !== undefined) {
          this.emit(
            "removeListener",
            processNestedObjects,
            eventListenerWrapper || processNestedProperties,
          );
        }
      }
      return this;
    };
    initializeComponent.prototype.off =
      initializeComponent.prototype.removeListener;
    initializeComponent.prototype.removeAllListeners = function (processMatch) {
      var eventListeners;
      var _eventListeners;
      var eventIndex;
      _eventListeners = this._events;
      if (_eventListeners === undefined) {
        return this;
      }
      if (_eventListeners.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (_eventListeners[processMatch] !== undefined) {
          if (--this._eventsCount === 0) {
            this._events = Object.create(null);
          } else {
            delete _eventListeners[processMatch];
          }
        }
        return this;
      }
      if (arguments.length === 0) {
        var eventListenerKeys = Object.keys(_eventListeners);
        var eventType;
        for (
          eventIndex = 0;
          eventIndex < eventListenerKeys.length;
          ++eventIndex
        ) {
          eventType = eventListenerKeys[eventIndex];
          if (eventType !== "removeListener") {
            this.removeAllListeners(eventType);
          }
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      eventListeners = _eventListeners[processMatch];
      if (typeof eventListeners == "function") {
        this.removeListener(processMatch, eventListeners);
      } else if (eventListeners !== undefined) {
        for (
          eventIndex = eventListeners.length - 1;
          eventIndex >= 0;
          eventIndex--
        ) {
          this.removeListener(processMatch, eventListeners[eventIndex]);
        }
      }
      return this;
    };
    function _______getEventListeners(
      processObjectProperties,
      isVariableArrayOrObject,
      processDataObject,
    ) {
      var ___eventListeners = processObjectProperties._events;
      if (___eventListeners === undefined) {
        return [];
      }
      var __eventListener = ___eventListeners[isVariableArrayOrObject];
      if (__eventListener === undefined) {
        return [];
      } else if (typeof __eventListener == "function") {
        if (processDataObject) {
          return [__eventListener.listener || __eventListener];
        } else {
          return [__eventListener];
        }
      } else if (processDataObject) {
        return extractListenersFromParsedString(__eventListener);
      } else {
        return copyAndParseSpecialCharacters(
          __eventListener,
          __eventListener.length,
        );
      }
    }
    initializeComponent.prototype.listeners = function (parseStringToObject) {
      return _______getEventListeners(this, parseStringToObject, true);
    };
    initializeComponent.prototype.rawListeners = function (isStringQuoted) {
      return _______getEventListeners(this, isStringQuoted, false);
    };
    initializeComponent.listenerCount = function (
      processStringInput,
      isQuotedString,
    ) {
      if (typeof processStringInput.listenerCount == "function") {
        return processStringInput.listenerCount(isQuotedString);
      } else {
        return getEventListenerCount.call(processStringInput, isQuotedString);
      }
    };
    initializeComponent.prototype.listenerCount = getEventListenerCount;
    function getEventListenerCount(processInputString) {
      var events = this._events;
      if (events !== undefined) {
        var __eventHandler = events[processInputString];
        if (typeof __eventHandler == "function") {
          return 1;
        }
        if (__eventHandler !== undefined) {
          return __eventHandler.length;
        }
      }
      return 0;
    }
    initializeComponent.prototype.eventNames = function () {
      if (this._eventsCount > 0) {
        return getOwnPropertyKeysIncludingSymbols(this._events);
      } else {
        return [];
      }
    };
    function copyAndParseSpecialCharacters(
      parseSpecialCharacters,
      processSpecialCharacters,
    ) {
      var parsedSpecialCharactersArray = new Array(processSpecialCharacters);
      for (
        var specialCharacterIndex = 0;
        specialCharacterIndex < processSpecialCharacters;
        ++specialCharacterIndex
      ) {
        parsedSpecialCharactersArray[specialCharacterIndex] =
          parseSpecialCharacters[specialCharacterIndex];
      }
      return parsedSpecialCharactersArray;
    }
    function removeLastElementFromParsedString(
      parseAndTrimString,
      parserOptions,
    ) {
      for (; parserOptions + 1 < parseAndTrimString.length; parserOptions++) {
        parseAndTrimString[parserOptions] =
          parseAndTrimString[parserOptions + 1];
      }
      parseAndTrimString.pop();
    }
    function extractListenersFromParsedString(getParsedString) {
      for (
        var listenersArray = new Array(getParsedString.length),
          _listenerIndex = 0;
        _listenerIndex < listenersArray.length;
        ++_listenerIndex
      ) {
        listenersArray[_listenerIndex] =
          getParsedString[_listenerIndex].listener ||
          getParsedString[_listenerIndex];
      }
      return listenersArray;
    }
    function handleEventWithErrorHandling(
      __getModuleExportsIfAbsent,
      dequeueHeadNode,
    ) {
      return new Promise(function (
        ___getModuleExportsIfAbsent,
        getWorkerScript,
      ) {
        function removeListenerAndGetWorkerScript(headNodeUtility) {
          __getModuleExportsIfAbsent.removeListener(
            dequeueHeadNode,
            removeErrorListenerAndHandleArgs,
          );
          getWorkerScript(headNodeUtility);
        }
        function removeErrorListenerAndHandleArgs() {
          if (typeof __getModuleExportsIfAbsent.removeListener == "function") {
            __getModuleExportsIfAbsent.removeListener(
              "error",
              removeListenerAndGetWorkerScript,
            );
          }
          ___getModuleExportsIfAbsent([].slice.call(arguments));
        }
        handleArrayJoinEvents(
          __getModuleExportsIfAbsent,
          dequeueHeadNode,
          removeErrorListenerAndHandleArgs,
          {
            once: true,
          },
        );
        if (dequeueHeadNode !== "error") {
          handleArrayErrors(
            __getModuleExportsIfAbsent,
            removeListenerAndGetWorkerScript,
            {
              once: true,
            },
          );
        }
      });
    }
    function handleArrayErrors(
      isArrayElementIncluded,
      checkIfInstanceOf,
      ArrayIncludes,
    ) {
      if (typeof isArrayElementIncluded.on == "function") {
        handleArrayJoinEvents(
          isArrayElementIncluded,
          "error",
          checkIfInstanceOf,
          ArrayIncludes,
        );
      }
    }
    function handleArrayJoinEvents(
      ArrayJoin,
      _ArrayJoin,
      defineObjectProperties,
      __ArrayJoin,
    ) {
      if (typeof ArrayJoin.on == "function") {
        if (__ArrayJoin.once) {
          ArrayJoin.once(_ArrayJoin, defineObjectProperties);
        } else {
          ArrayJoin.on(_ArrayJoin, defineObjectProperties);
        }
      } else if (typeof ArrayJoin.addEventListener == "function") {
        ArrayJoin.addEventListener(
          _ArrayJoin,
          function pushElement(defineObjectProperty) {
            if (__ArrayJoin.once) {
              ArrayJoin.removeEventListener(_ArrayJoin, pushElement);
            }
            defineObjectProperties(defineObjectProperty);
          },
        );
      } else {
        throw new TypeError(
          'The "emitter" argument must be of type EventEmitter. Received type ' +
            typeof ArrayJoin,
        );
      }
    }
  },
);
var isInstanceOf = getModuleExportsIfAbsent(
  (streamPipeHandler, _streamPipeHandler) => {
    var { ArrayIsArray: __isArray, ObjectSetPrototypeOf: setPrototype } =
      removeHeadNode();
    var { EventEmitter: __EventEmitter } = createBlobUrl();
    function initializeEventEmitterWithProperties(ObjectDefineProperties) {
      __EventEmitter.call(this, ObjectDefineProperties);
    }
    setPrototype(
      initializeEventEmitterWithProperties.prototype,
      __EventEmitter.prototype,
    );
    setPrototype(initializeEventEmitterWithProperties, __EventEmitter);
    initializeEventEmitterWithProperties.prototype.pipe = function (
      _defineObjectProperties,
      defineProperties,
    ) {
      let _eventEmitterInstance = this;
      function pauseEventEmitterIfNotWritable(_defineProperties) {
        if (
          _defineObjectProperties.writable &&
          _defineObjectProperties.write(_defineProperties) === false &&
          _eventEmitterInstance.pause
        ) {
          _eventEmitterInstance.pause();
        }
      }
      _eventEmitterInstance.on("data", pauseEventEmitterIfNotWritable);
      function resumeEventEmitter() {
        if (_eventEmitterInstance.readable && _eventEmitterInstance.resume) {
          _eventEmitterInstance.resume();
        }
      }
      _defineObjectProperties.on("drain", resumeEventEmitter);
      if (
        !_defineObjectProperties._isStdio &&
        (!defineProperties || defineProperties.end !== false)
      ) {
        _eventEmitterInstance.on("end", endProcess);
        _eventEmitterInstance.on("close", terminateProcess);
      }
      let hasEnded = false;
      function endProcess() {
        if (!hasEnded) {
          hasEnded = true;
          _defineObjectProperties.end();
        }
      }
      function terminateProcess() {
        if (!hasEnded) {
          hasEnded = true;
          if (typeof _defineObjectProperties.destroy == "function") {
            _defineObjectProperties.destroy();
          }
        }
      }
      function emitErrorIfNoneListening(RegExpPrototypeTest) {
        ___removeAllEventListeners();
        if (__EventEmitter.listenerCount(this, "error") === 0) {
          this.emit("error", RegExpPrototypeTest);
        }
      }
      addErrorListener(
        _eventEmitterInstance,
        "error",
        emitErrorIfNoneListening,
      );
      addErrorListener(
        _defineObjectProperties,
        "error",
        emitErrorIfNoneListening,
      );
      function ___removeAllEventListeners() {
        _eventEmitterInstance.removeListener(
          "data",
          pauseEventEmitterIfNotWritable,
        );
        _defineObjectProperties.removeListener("drain", resumeEventEmitter);
        _eventEmitterInstance.removeListener("end", endProcess);
        _eventEmitterInstance.removeListener("close", terminateProcess);
        _eventEmitterInstance.removeListener("error", emitErrorIfNoneListening);
        _defineObjectProperties.removeListener(
          "error",
          emitErrorIfNoneListening,
        );
        _eventEmitterInstance.removeListener("end", ___removeAllEventListeners);
        _eventEmitterInstance.removeListener(
          "close",
          ___removeAllEventListeners,
        );
        _defineObjectProperties.removeListener(
          "close",
          ___removeAllEventListeners,
        );
      }
      _eventEmitterInstance.on("end", ___removeAllEventListeners);
      _eventEmitterInstance.on("close", ___removeAllEventListeners);
      _defineObjectProperties.on("close", ___removeAllEventListeners);
      _defineObjectProperties.emit("pipe", _eventEmitterInstance);
      return _defineObjectProperties;
    };
    function addErrorListener(
      aggregateErrorModule,
      handleAggregateError,
      handleModuleExports,
    ) {
      if (typeof aggregateErrorModule.prependListener == "function") {
        return aggregateErrorModule.prependListener(
          handleAggregateError,
          handleModuleExports,
        );
      }
      if (
        !aggregateErrorModule._events ||
        !aggregateErrorModule._events[handleAggregateError]
      ) {
        aggregateErrorModule.on(handleAggregateError, handleModuleExports);
      } else if (
        __isArray(aggregateErrorModule._events[handleAggregateError])
      ) {
        aggregateErrorModule._events[handleAggregateError].unshift(
          handleModuleExports,
        );
      } else {
        aggregateErrorModule._events[handleAggregateError] = [
          handleModuleExports,
          aggregateErrorModule._events[handleAggregateError],
        ];
      }
    }
    _streamPipeHandler.exports = {
      Stream: initializeEventEmitterWithProperties,
      prependListener: addErrorListener,
    };
  },
);
var aggregateError = getModuleExportsIfAbsent(
  (addAbortSignalWithValidation, __abortSignalHandler) => {
    var { AbortError: ______AbortError, codes: abortSignalCodes } =
      _________________________validateAndReturnIntrinsicProperty();
    var _getMostRecentBase64EncodedValue = findMostRecentBase64EncodedValue();
    var { ERR_INVALID_ARG_TYPE: InvalidArgumentTypeError } = abortSignalCodes;
    var _____validateAbortSignal = (
      _______abortSignal,
      _______validateAbortSignal,
    ) => {
      if (
        typeof _______abortSignal != "object" ||
        !("aborted" in _______abortSignal)
      ) {
        throw new InvalidArgumentTypeError(
          _______validateAbortSignal,
          "AbortSignal",
          _______abortSignal,
        );
      }
    };
    function isPipeableErrorHandler(promiseErrorHandler) {
      return (
        !!promiseErrorHandler && typeof promiseErrorHandler.pipe == "function"
      );
    }
    __abortSignalHandler.exports.addAbortSignal = function (
      formatStringWithPlaceholders,
      createSingleInvocationFunction,
    ) {
      _____validateAbortSignal(formatStringWithPlaceholders, "signal");
      if (!isPipeableErrorHandler(createSingleInvocationFunction)) {
        throw new InvalidArgumentTypeError(
          "stream",
          "stream.Stream",
          createSingleInvocationFunction,
        );
      }
      return __abortSignalHandler.exports.addAbortSignalNoValidate(
        formatStringWithPlaceholders,
        createSingleInvocationFunction,
      );
    };
    __abortSignalHandler.exports.addAbortSignalNoValidate = function (
      createPromiseWrapper,
      createPromise,
    ) {
      if (
        typeof createPromiseWrapper != "object" ||
        !("aborted" in createPromiseWrapper)
      ) {
        return createPromise;
      }
      let handleAbort = () => {
        createPromise.destroy(
          new ______AbortError(undefined, {
            cause: createPromiseWrapper.reason,
          }),
        );
      };
      if (createPromiseWrapper.aborted) {
        handleAbort();
      } else {
        createPromiseWrapper.addEventListener("abort", handleAbort);
        _getMostRecentBase64EncodedValue(createPromise, () =>
          createPromiseWrapper.removeEventListener("abort", handleAbort),
        );
      }
      return createPromise;
    };
  },
);
var formatStringWithPlaceholder = getModuleExportsIfAbsent(
  (LinkedList, LinkedListModule) => {
    var {
      StringPrototypeSlice: stringPrototypeSlice,
      SymbolIterator: iteratorSymbol,
      TypedArrayPrototypeSet: updateTypedArrayFromBuffer,
      Uint8Array: Uint8ArrayBuffer,
    } = removeHeadNode();
    ____updateIntrinsicProperties();
    var { Buffer: bufferModule } = createModuleExport(bufferWriteEncoding);
    var { inspect: inspectBufferNodes } = swapBufferWithNodes();
    LinkedListModule.exports = class {
      constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      push(newNode) {
        let createListNode = {
          data: newNode,
          next: null,
        };
        if (this.length > 0) {
          this.tail.next = createListNode;
        } else {
          this.head = createListNode;
        }
        this.tail = createListNode;
        ++this.length;
      }
      unshift(addElementToFront) {
        let newHeadNode = {
          data: addElementToFront,
          next: this.head,
        };
        if (this.length === 0) {
          this.tail = newHeadNode;
        }
        this.head = newHeadNode;
        ++this.length;
      }
      shift() {
        if (this.length === 0) {
          return;
        }
        let shiftedHeadData = this.head.data;
        if (this.length === 1) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        --this.length;
        return shiftedHeadData;
      }
      clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
      join(joinWithSeparator) {
        if (this.length === 0) {
          return "";
        }
        let ___currentNode = this.head;
        let joinedData = "" + ___currentNode.data;
        while ((___currentNode = ___currentNode.next) !== null) {
          joinedData += joinWithSeparator + ___currentNode.data;
        }
        return joinedData;
      }
      concat(getConcatenatedBufferLength) {
        if (this.length === 0) {
          return bufferModule.alloc(0);
        }
        let concatenatedBuffer = bufferModule.allocUnsafe(
          getConcatenatedBufferLength >>> 0,
        );
        let ___currentBufferNode = this.head;
        let currentBufferOffset = 0;
        while (___currentBufferNode) {
          updateTypedArrayFromBuffer(
            concatenatedBuffer,
            ___currentBufferNode.data,
            currentBufferOffset,
          );
          currentBufferOffset += ___currentBufferNode.data.length;
          ___currentBufferNode = ___currentBufferNode.next;
        }
        return concatenatedBuffer;
      }
      consume(consumeElement, isStringReturn) {
        let headData = this.head.data;
        if (consumeElement < headData.length) {
          let consumedHeadData = headData.slice(0, consumeElement);
          this.head.data = headData.slice(consumeElement);
          return consumedHeadData;
        }
        if (consumeElement === headData.length) {
          return this.shift();
        } else if (isStringReturn) {
          return this._getString(consumeElement);
        } else {
          return this._getBuffer(consumeElement);
        }
      }
      first() {
        return this.head.data;
      }
      *[iteratorSymbol]() {
        for (
          let _________________currentNode = this.head;
          _________________currentNode;
          _________________currentNode = _________________currentNode.next
        ) {
          yield _________________currentNode.data;
        }
      }
      _getString(getSubstringFromBuffer) {
        let accumulatedString = "";
        let _currentBufferNode = this.head;
        let processedBufferCount = 0;
        do {
          let _currentBufferData = _currentBufferNode.data;
          if (getSubstringFromBuffer > _currentBufferData.length) {
            accumulatedString += _currentBufferData;
            getSubstringFromBuffer -= _currentBufferData.length;
          } else {
            if (getSubstringFromBuffer === _currentBufferData.length) {
              accumulatedString += _currentBufferData;
              ++processedBufferCount;
              if (_currentBufferNode.next) {
                this.head = _currentBufferNode.next;
              } else {
                this.head = this.tail = null;
              }
            } else {
              accumulatedString += stringPrototypeSlice(
                _currentBufferData,
                0,
                getSubstringFromBuffer,
              );
              this.head = _currentBufferNode;
              _currentBufferNode.data = stringPrototypeSlice(
                _currentBufferData,
                getSubstringFromBuffer,
              );
            }
            break;
          }
          ++processedBufferCount;
        } while ((_currentBufferNode = _currentBufferNode.next) !== null);
        this.length -= processedBufferCount;
        return accumulatedString;
      }
      _getBuffer(requestedBufferSize) {
        let _allocatedBuffer = bufferModule.allocUnsafe(requestedBufferSize);
        let requestedBufferSizeOriginal = requestedBufferSize;
        let currentBufferNode = this.head;
        let completedBufferCount = 0;
        do {
          let currentBufferData = currentBufferNode.data;
          if (requestedBufferSize > currentBufferData.length) {
            updateTypedArrayFromBuffer(
              _allocatedBuffer,
              currentBufferData,
              requestedBufferSizeOriginal - requestedBufferSize,
            );
            requestedBufferSize -= currentBufferData.length;
          } else {
            if (requestedBufferSize === currentBufferData.length) {
              updateTypedArrayFromBuffer(
                _allocatedBuffer,
                currentBufferData,
                requestedBufferSizeOriginal - requestedBufferSize,
              );
              ++completedBufferCount;
              if (currentBufferNode.next) {
                this.head = currentBufferNode.next;
              } else {
                this.head = this.tail = null;
              }
            } else {
              updateTypedArrayFromBuffer(
                _allocatedBuffer,
                new Uint8ArrayBuffer(
                  currentBufferData.buffer,
                  currentBufferData.byteOffset,
                  requestedBufferSize,
                ),
                requestedBufferSizeOriginal - requestedBufferSize,
              );
              this.head = currentBufferNode;
              currentBufferNode.data =
                currentBufferData.slice(requestedBufferSize);
            }
            break;
          }
          ++completedBufferCount;
        } while ((currentBufferNode = currentBufferNode.next) !== null);
        this.length -= completedBufferCount;
        return _allocatedBuffer;
      }
      [Symbol.for("nodejs.util.inspect.custom")](
        inspectBufferNodesCustom,
        customInspectOptions,
      ) {
        return inspectBufferNodes(this, {
          ...customInspectOptions,
          depth: 0,
          customInspect: false,
        });
      }
    };
  },
);
var _BufferComparisonValidator = getModuleExportsIfAbsent(
  (validateAndUpdateBufferAndProcess, __validateAndProcessBuffer) => {
    var { MathFloor: MathFloor, NumberIsInteger: _NumberIsInteger } =
      removeHeadNode();
    var { ERR_INVALID_ARG_VALUE: ERR_INVALID_ARGUMENT_VALUE } =
      _________________________validateAndReturnIntrinsicProperty().codes;
    function getHighWaterMarkOrProcessBufferComparison(
      updateBufferAndValidate,
      processBufferComparison,
      _processBufferComparison,
    ) {
      return (
        updateBufferAndValidate.highWaterMark ??
        (processBufferComparison
          ? updateBufferAndValidate[_processBufferComparison]
          : null)
      );
    }
    function getBufferSize(bufferEntryUpdate) {
      if (bufferEntryUpdate) {
        return 16;
      } else {
        return 16384;
      }
    }
    function validateAndCalculateBufferEntry(
      _createAndUpdateBufferEntry,
      __createAndUpdateBufferEntry,
      ___createAndUpdateBufferEntry,
      CodeBufferEntry,
    ) {
      let bufferEntrySize = getHighWaterMarkOrProcessBufferComparison(
        __createAndUpdateBufferEntry,
        CodeBufferEntry,
        ___createAndUpdateBufferEntry,
      );
      if (bufferEntrySize != null) {
        if (!_NumberIsInteger(bufferEntrySize) || bufferEntrySize < 0) {
          let bufferEntryOption = CodeBufferEntry
            ? "options." + ___createAndUpdateBufferEntry
            : "options.highWaterMark";
          throw new ERR_INVALID_ARGUMENT_VALUE(
            bufferEntryOption,
            bufferEntrySize,
          );
        }
        return MathFloor(bufferEntrySize);
      }
      return getBufferSize(_createAndUpdateBufferEntry.objectMode);
    }
    __validateAndProcessBuffer.exports = {
      getHighWaterMark: validateAndCalculateBufferEntry,
      getDefaultHighWaterMark: getBufferSize,
    };
  },
);
var BufferValidationError = getModuleExportsIfAbsent(
  (moduleBuffer, bufferModuleExport) => {
    ____updateIntrinsicProperties();
    var createBufferModule = createModuleExport(bufferWriteEncoding);
    var _bufferModule = createBufferModule.Buffer;
    function copyBufferComparisonToError(
      _handleBufferComparison,
      abortOperationError,
    ) {
      for (var bufferComparisonKey in _handleBufferComparison) {
        abortOperationError[bufferComparisonKey] =
          _handleBufferComparison[bufferComparisonKey];
      }
    }
    if (
      _bufferModule.from &&
      _bufferModule.alloc &&
      _bufferModule.allocUnsafe &&
      _bufferModule.allocUnsafeSlow
    ) {
      bufferModuleExport.exports = createBufferModule;
    } else {
      copyBufferComparisonToError(createBufferModule, moduleBuffer);
      moduleBuffer.Buffer = _abortOperationHandler;
    }
    function _abortOperationHandler(
      handleAbortOperation,
      handleOperationAborted,
      errorMessageForAbort,
    ) {
      return _bufferModule(
        handleAbortOperation,
        handleOperationAborted,
        errorMessageForAbort,
      );
    }
    _abortOperationHandler.prototype = Object.create(_bufferModule.prototype);
    copyBufferComparisonToError(_bufferModule, _abortOperationHandler);
    _abortOperationHandler.from = function (
      handleInvalidArgumentType,
      validateArgumentTypes,
      _handleInvalidArgumentType,
    ) {
      if (typeof handleInvalidArgumentType == "number") {
        throw new TypeError("Argument must not be a number");
      }
      return _bufferModule(
        handleInvalidArgumentType,
        validateArgumentTypes,
        _handleInvalidArgumentType,
      );
    };
    _abortOperationHandler.alloc = function (
      assertArgumentType,
      validateArgumentType,
      handleErrorInvalidArgument,
    ) {
      if (typeof assertArgumentType != "number") {
        throw new TypeError("Argument must be a number");
      }
      var bufferResult = _bufferModule(assertArgumentType);
      if (validateArgumentType !== undefined) {
        if (typeof handleErrorInvalidArgument == "string") {
          bufferResult.fill(validateArgumentType, handleErrorInvalidArgument);
        } else {
          bufferResult.fill(validateArgumentType);
        }
      } else {
        bufferResult.fill(0);
      }
      return bufferResult;
    };
    _abortOperationHandler.allocUnsafe = function (validateArguments) {
      if (typeof validateArguments != "number") {
        throw new TypeError("Argument must be a number");
      }
      return _bufferModule(validateArguments);
    };
    _abortOperationHandler.allocUnsafeSlow = function (validateInputTypes) {
      if (typeof validateInputTypes != "number") {
        throw new TypeError("Argument must be a number");
      }
      return createBufferModule.SlowBuffer(validateInputTypes);
    };
  },
);
var processStringEntries = getModuleExportsIfAbsent(
  (validateBufferEncoding) => {
    var bufferEncoder = BufferValidationError().Buffer;
    var _validateBufferEncoding =
      bufferEncoder.isEncoding ||
      function (appendValueToCollection) {
        appendValueToCollection = "" + appendValueToCollection;
        switch (
          appendValueToCollection &&
          appendValueToCollection.toLowerCase()
        ) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return true;
          default:
            return false;
        }
      };
    function _determineEncoding(processObjectTypes) {
      if (!processObjectTypes) {
        return "utf8";
      }
      var hasProcessedTypes;
      while (true) {
        switch (processObjectTypes) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return processObjectTypes;
          default:
            if (hasProcessedTypes) {
              return;
            }
            processObjectTypes = ("" + processObjectTypes).toLowerCase();
            hasProcessedTypes = true;
        }
      }
    }
    function determineBufferEncoding(receivedFunction) {
      var determinedEncoding = _determineEncoding(receivedFunction);
      if (
        typeof determinedEncoding != "string" &&
        (bufferEncoder.isEncoding === _validateBufferEncoding ||
          !_validateBufferEncoding(receivedFunction))
      ) {
        throw new Error("Unknown encoding: " + receivedFunction);
      }
      return determinedEncoding || receivedFunction;
    }
    validateBufferEncoding.StringDecoder = EncodingHandler;
    function EncodingHandler(instanceDescription) {
      this.encoding = determineBufferEncoding(instanceDescription);
      var _bufferSize;
      switch (this.encoding) {
        case "utf16le":
          this.text = processNodeExportsHandler;
          this.end = processCacheEntry;
          _bufferSize = 4;
          break;
        case "utf8":
          this.fillLast = processValueOutOfRange;
          _bufferSize = 4;
          break;
        case "base64":
          this.text = validateAndEncodeCacheEntry;
          this.end = validateAndWriteCacheEntry;
          _bufferSize = 3;
          break;
        default:
          this.write = convertNodePositionToString;
          this.end = processAndWriteNode;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = bufferEncoder.allocUnsafe(_bufferSize);
    }
    EncodingHandler.prototype.write = function (handleInvalidArgumentError) {
      if (handleInvalidArgumentError.length === 0) {
        return "";
      }
      var filledArgument;
      var currentArgumentIndex;
      if (this.lastNeed) {
        filledArgument = this.fillLast(handleInvalidArgumentError);
        if (filledArgument === undefined) {
          return "";
        }
        currentArgumentIndex = this.lastNeed;
        this.lastNeed = 0;
      } else {
        currentArgumentIndex = 0;
      }
      if (currentArgumentIndex < handleInvalidArgumentError.length) {
        if (filledArgument) {
          return (
            filledArgument +
            this.text(handleInvalidArgumentError, currentArgumentIndex)
          );
        } else {
          return this.text(handleInvalidArgumentError, currentArgumentIndex);
        }
      } else {
        return filledArgument || "";
      }
    };
    EncodingHandler.prototype.end = ___handleStreamError;
    EncodingHandler.prototype.text = handleStreamErrorCodes;
    EncodingHandler.prototype.fillLast = function (handleInvalidReturnValue) {
      if (this.lastNeed <= handleInvalidReturnValue.length) {
        handleInvalidReturnValue.copy(
          this.lastChar,
          this.lastTotal - this.lastNeed,
          0,
          this.lastNeed,
        );
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      handleInvalidReturnValue.copy(
        this.lastChar,
        this.lastTotal - this.lastNeed,
        0,
        handleInvalidReturnValue.length,
      );
      this.lastNeed -= handleInvalidReturnValue.length;
    };
    function evaluateErrorCode(generateErrorMessageForMissingArgs) {
      if (generateErrorMessageForMissingArgs <= 127) {
        return 0;
      } else if (generateErrorMessageForMissingArgs >> 5 === 6) {
        return 2;
      } else if (generateErrorMessageForMissingArgs >> 4 === 14) {
        return 3;
      } else if (generateErrorMessageForMissingArgs >> 3 === 30) {
        return 4;
      } else if (generateErrorMessageForMissingArgs >> 6 === 2) {
        return -1;
      } else {
        return -2;
      }
    }
    function validateAndHandleArguments(
      validateTypeAndReturnError,
      handleErrorMissingArgs,
      validateArgumentsFunction,
    ) {
      var lastArgumentIndex = handleErrorMissingArgs.length - 1;
      if (lastArgumentIndex < validateArgumentsFunction) {
        return 0;
      }
      var validatedArgumentValue = evaluateErrorCode(
        handleErrorMissingArgs[lastArgumentIndex],
      );
      if (validatedArgumentValue >= 0) {
        if (validatedArgumentValue > 0) {
          validateTypeAndReturnError.lastNeed = validatedArgumentValue - 1;
        }
        return validatedArgumentValue;
      } else if (
        --lastArgumentIndex < validateArgumentsFunction ||
        validatedArgumentValue === -2
      ) {
        return 0;
      } else {
        validatedArgumentValue = evaluateErrorCode(
          handleErrorMissingArgs[lastArgumentIndex],
        );
        if (validatedArgumentValue >= 0) {
          if (validatedArgumentValue > 0) {
            validateTypeAndReturnError.lastNeed = validatedArgumentValue - 2;
          }
          return validatedArgumentValue;
        } else if (
          --lastArgumentIndex < validateArgumentsFunction ||
          validatedArgumentValue === -2
        ) {
          return 0;
        } else {
          validatedArgumentValue = evaluateErrorCode(
            handleErrorMissingArgs[lastArgumentIndex],
          );
          if (validatedArgumentValue >= 0) {
            if (validatedArgumentValue > 0) {
              if (validatedArgumentValue === 2) {
                validatedArgumentValue = 0;
              } else {
                validateTypeAndReturnError.lastNeed =
                  validatedArgumentValue - 3;
              }
            }
            return validatedArgumentValue;
          } else {
            return 0;
          }
        }
      }
    }
    function handleOutOfRangeErrors(
      handleErrorOutOfRange,
      handleRangeError,
      _handleErrorOutOfRange,
    ) {
      if ((handleRangeError[0] & 192) !== 128) {
        handleErrorOutOfRange.lastNeed = 0;
        return "�";
      }
      if (handleErrorOutOfRange.lastNeed > 1 && handleRangeError.length > 1) {
        if ((handleRangeError[1] & 192) !== 128) {
          handleErrorOutOfRange.lastNeed = 1;
          return "�";
        }
        if (
          handleErrorOutOfRange.lastNeed > 2 &&
          handleRangeError.length > 2 &&
          (handleRangeError[2] & 192) !== 128
        ) {
          handleErrorOutOfRange.lastNeed = 2;
          return "�";
        }
      }
    }
    function processValueOutOfRange(handleValueOutOfRange) {
      var remainingChars = this.lastTotal - this.lastNeed;
      var processedValue = handleOutOfRangeErrors(
        this,
        handleValueOutOfRange,
        remainingChars,
      );
      if (processedValue !== undefined) {
        return processedValue;
      }
      if (this.lastNeed <= handleValueOutOfRange.length) {
        handleValueOutOfRange.copy(
          this.lastChar,
          remainingChars,
          0,
          this.lastNeed,
        );
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      handleValueOutOfRange.copy(
        this.lastChar,
        remainingChars,
        0,
        handleValueOutOfRange.length,
      );
      this.lastNeed -= handleValueOutOfRange.length;
    }
    function handleStreamErrorCodes(registerStreamErrorCodes, logStreamError) {
      var validatedArgumentCount = validateAndHandleArguments(
        this,
        registerStreamErrorCodes,
        logStreamError,
      );
      if (!this.lastNeed) {
        return registerStreamErrorCodes.toString("utf8", logStreamError);
      }
      this.lastTotal = validatedArgumentCount;
      var calculateDataOffset =
        registerStreamErrorCodes.length -
        (validatedArgumentCount - this.lastNeed);
      registerStreamErrorCodes.copy(this.lastChar, 0, calculateDataOffset);
      return registerStreamErrorCodes.toString(
        "utf8",
        logStreamError,
        calculateDataOffset,
      );
    }
    function ___handleStreamError(streamErrorHandling) {
      var streamHandlingResult =
        streamErrorHandling && streamErrorHandling.length
          ? this.write(streamErrorHandling)
          : "";
      if (this.lastNeed) {
        return streamHandlingResult + "�";
      } else {
        return streamHandlingResult;
      }
    }
    function processNodeExportsHandler(
      processNodeExports,
      ____getModuleExportsIfAbsent,
    ) {
      if (
        (processNodeExports.length - ____getModuleExportsIfAbsent) % 2 ===
        0
      ) {
        var exportedNodeModuleString = processNodeExports.toString(
          "utf16le",
          ____getModuleExportsIfAbsent,
        );
        if (exportedNodeModuleString) {
          var lastCharCode = exportedNodeModuleString.charCodeAt(
            exportedNodeModuleString.length - 1,
          );
          if (lastCharCode >= 55296 && lastCharCode <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] =
              processNodeExports[processNodeExports.length - 2];
            this.lastChar[1] =
              processNodeExports[processNodeExports.length - 1];
            return exportedNodeModuleString.slice(0, -1);
          }
        }
        return exportedNodeModuleString;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = processNodeExports[processNodeExports.length - 1];
      return processNodeExports.toString(
        "utf16le",
        ____getModuleExportsIfAbsent,
        processNodeExports.length - 1,
      );
    }
    function processCacheEntry(validateCacheEntry) {
      var cacheEntryOutput =
        validateCacheEntry && validateCacheEntry.length
          ? this.write(validateCacheEntry)
          : "";
      if (this.lastNeed) {
        var remainingBytes = this.lastTotal - this.lastNeed;
        return (
          cacheEntryOutput +
          this.lastChar.toString("utf16le", 0, remainingBytes)
        );
      }
      return cacheEntryOutput;
    }
    function validateAndEncodeCacheEntry(
      _validateCacheEntry,
      __________________________validateAndReturnIntrinsicProperty,
    ) {
      var remainingBytesToEncode =
        (_validateCacheEntry.length -
          __________________________validateAndReturnIntrinsicProperty) %
        3;
      if (remainingBytesToEncode === 0) {
        return _validateCacheEntry.toString(
          "base64",
          __________________________validateAndReturnIntrinsicProperty,
        );
      } else {
        this.lastNeed = 3 - remainingBytesToEncode;
        this.lastTotal = 3;
        if (remainingBytesToEncode === 1) {
          this.lastChar[0] =
            _validateCacheEntry[_validateCacheEntry.length - 1];
        } else {
          this.lastChar[0] =
            _validateCacheEntry[_validateCacheEntry.length - 2];
          this.lastChar[1] =
            _validateCacheEntry[_validateCacheEntry.length - 1];
        }
        return _validateCacheEntry.toString(
          "base64",
          __________________________validateAndReturnIntrinsicProperty,
          _validateCacheEntry.length - remainingBytesToEncode,
        );
      }
    }
    function validateAndWriteCacheEntry(__validateCacheEntry) {
      var cachedEntryResult =
        __validateCacheEntry && __validateCacheEntry.length
          ? this.write(__validateCacheEntry)
          : "";
      if (this.lastNeed) {
        return (
          cachedEntryResult +
          this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        );
      } else {
        return cachedEntryResult;
      }
    }
    function convertNodePositionToString(validateNodePosition) {
      return validateNodePosition.toString(this.encoding);
    }
    function processAndWriteNode(validateAndRemoveNodeBasedOnCondition) {
      if (
        validateAndRemoveNodeBasedOnCondition &&
        validateAndRemoveNodeBasedOnCondition.length
      ) {
        return this.write(validateAndRemoveNodeBasedOnCondition);
      } else {
        return "";
      }
    }
  },
);
var validateNodeRemovalParameters = getModuleExportsIfAbsent(
  (createReadableStreamFromString, _createReadableStreamFromString) => {
    var logTildeResult = logTildeOperation();
    var {
      PromisePrototypeThen: promisePrototypeThen,
      SymbolAsyncIterator: __SymbolAsyncIterator,
      SymbolIterator: symbolIterator,
    } = removeHeadNode();
    ____updateIntrinsicProperties();
    var { Buffer: __BufferModule } = createModuleExport(bufferWriteEncoding);
    var {
      ERR_INVALID_ARG_TYPE: ERR_STREAM_INVALID_ARG_TYPE,
      ERR_STREAM_NULL_VALUES: ERR_STREAM_NULL_VALUES,
    } = _________________________validateAndReturnIntrinsicProperty().codes;
    function createIntegerRangeStream(
      validateRangeInteger,
      validateIntegerInRange,
      _validateIntegerInRange,
    ) {
      let integerRangeIterator;
      if (
        typeof validateIntegerInRange == "string" ||
        validateIntegerInRange instanceof __BufferModule
      ) {
        return new validateRangeInteger({
          objectMode: true,
          ..._validateIntegerInRange,
          read() {
            this.push(validateIntegerInRange);
            this.push(null);
          },
        });
      }
      let isAsyncIterable;
      if (
        validateIntegerInRange &&
        validateIntegerInRange[__SymbolAsyncIterator]
      ) {
        isAsyncIterable = true;
        integerRangeIterator = validateIntegerInRange[__SymbolAsyncIterator]();
      } else if (
        validateIntegerInRange &&
        validateIntegerInRange[symbolIterator]
      ) {
        isAsyncIterable = false;
        integerRangeIterator = validateIntegerInRange[symbolIterator]();
      } else {
        throw new ERR_STREAM_INVALID_ARG_TYPE(
          "iterable",
          ["Iterable"],
          validateIntegerInRange,
        );
      }
      let integerRangeStream = new validateRangeInteger({
        objectMode: true,
        highWaterMark: 1,
        ..._validateIntegerInRange,
      });
      let createStreamForIntegerRange = false;
      integerRangeStream._read = function () {
        if (!createStreamForIntegerRange) {
          createStreamForIntegerRange = true;
          processIntegerRangeStream();
        }
      };
      integerRangeStream._destroy = function (
        validateIntegerRange,
        validateNumberRange,
      ) {
        promisePrototypeThen(
          handleIntegerRangeValidation(validateIntegerRange),
          () =>
            logTildeResult.nextTick(validateNumberRange, validateIntegerRange),
          (nextTickOrValidateRangeFunction) =>
            logTildeResult.nextTick(
              validateNumberRange,
              nextTickOrValidateRangeFunction || validateIntegerRange,
            ),
        );
      };
      async function handleIntegerRangeValidation(_validateIntegerRange) {
        let isIntegerRangeValid = _validateIntegerRange != null;
        let isIntegerRangeThrowValid =
          typeof integerRangeIterator.throw == "function";
        if (isIntegerRangeValid && isIntegerRangeThrowValid) {
          let { value: validatedIntegerRange, done: isRangeValid } =
            await integerRangeIterator.throw(_validateIntegerRange);
          await validatedIntegerRange;
          if (isRangeValid) {
            return;
          }
        }
        if (typeof integerRangeIterator.return == "function") {
          let { value: iteratorReturnValue } =
            await integerRangeIterator.return();
          await iteratorReturnValue;
        }
      }
      async function processIntegerRangeStream() {
        while (true) {
          try {
            let { value: currentIntegerValue, done: isRangeIteratorDone } =
              isAsyncIterable
                ? await integerRangeIterator.next()
                : integerRangeIterator.next();
            if (isRangeIteratorDone) {
              integerRangeStream.push(null);
            } else {
              let resolvedIntegerValue =
                currentIntegerValue &&
                typeof currentIntegerValue.then == "function"
                  ? await currentIntegerValue
                  : currentIntegerValue;
              if (resolvedIntegerValue === null) {
                createStreamForIntegerRange = false;
                throw new ERR_STREAM_NULL_VALUES();
              }
              if (integerRangeStream.push(resolvedIntegerValue)) {
                continue;
              }
              createStreamForIntegerRange = false;
            }
          } catch (_____________error) {
            integerRangeStream.destroy(_____________error);
          }
          break;
        }
      }
      return integerRangeStream;
    }
    _createReadableStreamFromString.exports = createIntegerRangeStream;
  },
);
var getFormattedComparatorsList = getModuleExportsIfAbsent(
  (processDataStream, dataStreamProcessor) => {
    var recentEncodedValue = logTildeOperation();
    var {
      ArrayPrototypeIndexOf: arrayPrototypeIndexOf,
      NumberIsInteger: isInteger,
      NumberIsNaN: isNaNValue,
      NumberParseInt: parseIntegerFromString,
      ObjectDefineProperties: __defineObjectProperties,
      ObjectKeys: ObjectKeys,
      ObjectSetPrototypeOf: setObjectPrototype,
      Promise: PromiseImplementation,
      SafeSet: SafeSetImplementation,
      SymbolAsyncIterator: SymbolAsyncIterator,
      Symbol: SymbolImplementation,
    } = removeHeadNode();
    dataStreamProcessor.exports = StreamBufferConstructor;
    StreamBufferConstructor.ReadableState = _initializeBufferStream;
    var { EventEmitter: _EventEmitter } = createBlobUrl();
    var { Stream: StreamProcessor, prependListener: _prependEventListener } =
      isInstanceOf();
    ____updateIntrinsicProperties();
    var { Buffer: BufferImplementation } =
      createModuleExport(bufferWriteEncoding);
    var { addAbortSignal: addAbortSignal } = aggregateError();
    var dataStreamProcessorFunction = findMostRecentBase64EncodedValue();
    var _processDataStream = swapBufferWithNodes().debuglog(
      "stream",
      (_dataStreamProcessor) => {
        _processDataStream = _dataStreamProcessor;
      },
    );
    var __processDataStream = formatStringWithPlaceholder();
    var processEncodedData = compareAndValidateVersions();
    var {
      getHighWaterMark: ___processDataStream,
      getDefaultHighWaterMark: _dataStreamHandler,
    } = _BufferComparisonValidator();
    var {
      aggregateTwoErrors: ____processDataStream,
      codes: {
        ERR_INVALID_ARG_TYPE: handleDataStream,
        ERR_METHOD_NOT_IMPLEMENTED: _____processDataStream,
        ERR_OUT_OF_RANGE: ______processDataStream,
        ERR_STREAM_PUSH_AFTER_EOF: _______processDataStream,
        ERR_STREAM_UNSHIFT_AFTER_END_EVENT: processDataStreamHandler,
      },
    } = _________________________validateAndReturnIntrinsicProperty();
    var { validateObject: ________processDataStream } = processNode();
    var _________processDataStream = SymbolImplementation("kPaused");
    var { StringDecoder: __dataStreamHandler } = processStringEntries();
    var __________processDataStream = validateNodeRemovalParameters();
    setObjectPrototype(
      StreamBufferConstructor.prototype,
      StreamProcessor.prototype,
    );
    setObjectPrototype(StreamBufferConstructor, StreamProcessor);
    var logEncodedValue = () => {};
    var { errorOrDestroy: processAndConfigureDataStreams } = processEncodedData;
    function _initializeBufferStream(
      validateBufferInput,
      _validateBufferInput,
      validateBufferType,
    ) {
      if (typeof validateBufferType != "boolean") {
        validateBufferType =
          _validateBufferInput instanceof __getEventListeners();
      }
      this.objectMode =
        !!validateBufferInput && !!validateBufferInput.objectMode;
      if (validateBufferType) {
        this.objectMode =
          this.objectMode ||
          (!!validateBufferInput && !!validateBufferInput.readableObjectMode);
      }
      if (validateBufferInput) {
        this.highWaterMark = ___processDataStream(
          this,
          validateBufferInput,
          "readableHighWaterMark",
          validateBufferType,
        );
      } else {
        this.highWaterMark = _dataStreamHandler(false);
      }
      this.buffer = new __processDataStream();
      this.length = 0;
      this.pipes = [];
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.constructed = true;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this[_________processDataStream] = null;
      this.errorEmitted = false;
      this.emitClose =
        !validateBufferInput || validateBufferInput.emitClose !== false;
      this.autoDestroy =
        !validateBufferInput || validateBufferInput.autoDestroy !== false;
      this.destroyed = false;
      this.errored = null;
      this.closed = false;
      this.closeEmitted = false;
      this.defaultEncoding =
        (validateBufferInput && validateBufferInput.defaultEncoding) || "utf8";
      this.awaitDrainWriters = null;
      this.multiAwaitDrain = false;
      this.readingMore = false;
      this.dataEmitted = false;
      this.decoder = null;
      this.encoding = null;
      if (validateBufferInput && validateBufferInput.encoding) {
        this.decoder = new __dataStreamHandler(validateBufferInput.encoding);
        this.encoding = validateBufferInput.encoding;
      }
    }
    function StreamBufferConstructor(validateNonFunction) {
      if (!(this instanceof StreamBufferConstructor)) {
        return new StreamBufferConstructor(validateNonFunction);
      }
      let isEventListenerActive = this instanceof __getEventListeners();
      this._readableState = new _initializeBufferStream(
        validateNonFunction,
        this,
        isEventListenerActive,
      );
      if (validateNonFunction) {
        if (typeof validateNonFunction.read == "function") {
          this._read = validateNonFunction.read;
        }
        if (typeof validateNonFunction.destroy == "function") {
          this._destroy = validateNonFunction.destroy;
        }
        if (typeof validateNonFunction.construct == "function") {
          this._construct = validateNonFunction.construct;
        }
        if (validateNonFunction.signal && !isEventListenerActive) {
          addAbortSignal(validateNonFunction.signal, this);
        }
      }
      StreamProcessor.call(this, validateNonFunction);
      processEncodedData.construct(this, () => {
        if (this._readableState.needReadable) {
          _handleReadableStream(this, this._readableState);
        }
      });
    }
    StreamBufferConstructor.prototype.destroy = processEncodedData.destroy;
    StreamBufferConstructor.prototype._undestroy = processEncodedData.undestroy;
    StreamBufferConstructor.prototype._destroy = function (
      _logTildeOperation,
      logTimeoutOperation,
    ) {
      logTimeoutOperation(_logTildeOperation);
    };
    StreamBufferConstructor.prototype[_EventEmitter.captureRejectionSymbol] =
      function (fetchTimeoutFunction) {
        this.destroy(fetchTimeoutFunction);
      };
    StreamBufferConstructor.prototype.push = function (
      initializeTimeoutHandling,
      handleTimeout,
    ) {
      return processAndConvertStreamData(
        this,
        initializeTimeoutHandling,
        handleTimeout,
        false,
      );
    };
    StreamBufferConstructor.prototype.unshift = function (
      initializeTimeouts,
      __logTildeOperation,
    ) {
      return processAndConvertStreamData(
        this,
        initializeTimeouts,
        __logTildeOperation,
        true,
      );
    };
    function processAndConvertStreamData(
      initializeTimeoutFunction,
      logAndExecuteWithTimeout,
      ___logTildeOperation,
      ____logTildeOperation,
    ) {
      _processDataStream("readableAddChunk", logAndExecuteWithTimeout);
      let __readableState = initializeTimeoutFunction._readableState;
      let outputBuffer;
      if (!__readableState.objectMode) {
        if (typeof logAndExecuteWithTimeout == "string") {
          ___logTildeOperation =
            ___logTildeOperation || __readableState.defaultEncoding;
          if (__readableState.encoding !== ___logTildeOperation) {
            if (____logTildeOperation && __readableState.encoding) {
              logAndExecuteWithTimeout = BufferImplementation.from(
                logAndExecuteWithTimeout,
                ___logTildeOperation,
              ).toString(__readableState.encoding);
            } else {
              logAndExecuteWithTimeout = BufferImplementation.from(
                logAndExecuteWithTimeout,
                ___logTildeOperation,
              );
              ___logTildeOperation = "";
            }
          }
        } else if (logAndExecuteWithTimeout instanceof BufferImplementation) {
          ___logTildeOperation = "";
        } else if (StreamProcessor._isUint8Array(logAndExecuteWithTimeout)) {
          logAndExecuteWithTimeout = StreamProcessor._uint8ArrayToBuffer(
            logAndExecuteWithTimeout,
          );
          ___logTildeOperation = "";
        } else if (logAndExecuteWithTimeout != null) {
          outputBuffer = new handleDataStream(
            "chunk",
            ["string", "Buffer", "Uint8Array"],
            logAndExecuteWithTimeout,
          );
        }
      }
      if (outputBuffer) {
        processAndConfigureDataStreams(initializeTimeoutFunction, outputBuffer);
      } else if (logAndExecuteWithTimeout === null) {
        __readableState.reading = false;
        handleEndOfWritableStream(initializeTimeoutFunction, __readableState);
      } else if (
        __readableState.objectMode ||
        (logAndExecuteWithTimeout && logAndExecuteWithTimeout.length > 0)
      ) {
        if (____logTildeOperation) {
          if (__readableState.endEmitted) {
            processAndConfigureDataStreams(
              initializeTimeoutFunction,
              new processDataStreamHandler(),
            );
          } else {
            if (__readableState.destroyed || __readableState.errored) {
              return false;
            }
            processVersionQueueHandler(
              initializeTimeoutFunction,
              __readableState,
              logAndExecuteWithTimeout,
              true,
            );
          }
        } else if (__readableState.ended) {
          processAndConfigureDataStreams(
            initializeTimeoutFunction,
            new _______processDataStream(),
          );
        } else {
          if (__readableState.destroyed || __readableState.errored) {
            return false;
          }
          __readableState.reading = false;
          if (__readableState.decoder && !___logTildeOperation) {
            logAndExecuteWithTimeout = __readableState.decoder.write(
              logAndExecuteWithTimeout,
            );
            if (
              __readableState.objectMode ||
              logAndExecuteWithTimeout.length !== 0
            ) {
              processVersionQueueHandler(
                initializeTimeoutFunction,
                __readableState,
                logAndExecuteWithTimeout,
                false,
              );
            } else {
              _handleReadableStream(initializeTimeoutFunction, __readableState);
            }
          } else {
            processVersionQueueHandler(
              initializeTimeoutFunction,
              __readableState,
              logAndExecuteWithTimeout,
              false,
            );
          }
        }
      } else if (!____logTildeOperation) {
        __readableState.reading = false;
        _handleReadableStream(initializeTimeoutFunction, __readableState);
      }
      return (
        !__readableState.ended &&
        (__readableState.length < __readableState.highWaterMark ||
          __readableState.length === 0)
      );
    }
    function processVersionQueueHandler(
      taskQueue,
      processVersionQueue,
      addVersionRangeCallback,
      scheduleNextTick,
    ) {
      if (
        processVersionQueue.flowing &&
        processVersionQueue.length === 0 &&
        !processVersionQueue.sync &&
        taskQueue.listenerCount("data") > 0
      ) {
        if (processVersionQueue.multiAwaitDrain) {
          processVersionQueue.awaitDrainWriters.clear();
        } else {
          processVersionQueue.awaitDrainWriters = null;
        }
        processVersionQueue.dataEmitted = true;
        taskQueue.emit("data", addVersionRangeCallback);
      } else {
        if (processVersionQueue.objectMode) {
          processVersionQueue.length += 1;
        } else {
          processVersionQueue.length += addVersionRangeCallback.length;
        }
        if (scheduleNextTick) {
          processVersionQueue.buffer.unshift(addVersionRangeCallback);
        } else {
          processVersionQueue.buffer.push(addVersionRangeCallback);
        }
        if (processVersionQueue.needReadable) {
          ___handleReadableState(taskQueue);
        }
      }
      _handleReadableStream(taskQueue, processVersionQueue);
    }
    StreamBufferConstructor.prototype.isPaused = function () {
      let isDataStreamActive = this._readableState;
      return (
        isDataStreamActive[_________processDataStream] === true ||
        isDataStreamActive.flowing === false
      );
    };
    StreamBufferConstructor.prototype.setEncoding = function (
      _____getModuleExportsIfAbsent,
    ) {
      let ___dataStreamHandler = new __dataStreamHandler(
        _____getModuleExportsIfAbsent,
      );
      this._readableState.decoder = ___dataStreamHandler;
      this._readableState.encoding = this._readableState.decoder.encoding;
      let readableBuffer = this._readableState.buffer;
      let processedData = "";
      for (let _dataChunk of readableBuffer) {
        processedData += ___dataStreamHandler.write(_dataChunk);
      }
      readableBuffer.clear();
      if (processedData !== "") {
        readableBuffer.push(processedData);
      }
      this._readableState.length = processedData.length;
      return this;
    };
    var dataProcessorMain = 1073741824;
    function incrementVersionIfWithinLimit(_isVersionIncremented) {
      if (_isVersionIncremented > dataProcessorMain) {
        throw new ______processDataStream(
          "size",
          "<= 1GiB",
          _isVersionIncremented,
        );
      }
      _isVersionIncremented--;
      _isVersionIncremented |= _isVersionIncremented >>> 1;
      _isVersionIncremented |= _isVersionIncremented >>> 2;
      _isVersionIncremented |= _isVersionIncremented >>> 4;
      _isVersionIncremented |= _isVersionIncremented >>> 8;
      _isVersionIncremented |= _isVersionIncremented >>> 16;
      _isVersionIncremented++;
      return _isVersionIncremented;
    }
    function calculateAvailableBuffer(
      checkVersionIncrement,
      checkVersionIncremented,
    ) {
      if (
        checkVersionIncrement <= 0 ||
        (checkVersionIncremented.length === 0 && checkVersionIncremented.ended)
      ) {
        return 0;
      } else if (checkVersionIncremented.objectMode) {
        return 1;
      } else if (isNaNValue(checkVersionIncrement)) {
        if (checkVersionIncremented.flowing && checkVersionIncremented.length) {
          return checkVersionIncremented.buffer.first().length;
        } else {
          return checkVersionIncremented.length;
        }
      } else if (checkVersionIncrement <= checkVersionIncremented.length) {
        return checkVersionIncrement;
      } else if (checkVersionIncremented.ended) {
        return checkVersionIncremented.length;
      } else {
        return 0;
      }
    }
    StreamBufferConstructor.prototype.read = function (isValidVersionRange) {
      _processDataStream("read", isValidVersionRange);
      if (isValidVersionRange === undefined) {
        isValidVersionRange = NaN;
      } else if (!isInteger(isValidVersionRange)) {
        isValidVersionRange = parseIntegerFromString(isValidVersionRange, 10);
      }
      let _readableState = this._readableState;
      let validatedVersionRange = isValidVersionRange;
      if (isValidVersionRange > _readableState.highWaterMark) {
        _readableState.highWaterMark =
          incrementVersionIfWithinLimit(isValidVersionRange);
      }
      if (isValidVersionRange !== 0) {
        _readableState.emittedReadable = false;
      }
      if (
        isValidVersionRange === 0 &&
        _readableState.needReadable &&
        ((_readableState.highWaterMark !== 0
          ? _readableState.length >= _readableState.highWaterMark
          : _readableState.length > 0) ||
          _readableState.ended)
      ) {
        _processDataStream(
          "read: emitReadable",
          _readableState.length,
          _readableState.ended,
        );
        if (_readableState.length === 0 && _readableState.ended) {
          handleReadableEnd(this);
        } else {
          ___handleReadableState(this);
        }
        return null;
      }
      isValidVersionRange = calculateAvailableBuffer(
        isValidVersionRange,
        _readableState,
      );
      if (isValidVersionRange === 0 && _readableState.ended) {
        if (_readableState.length === 0) {
          handleReadableEnd(this);
        }
        return null;
      }
      let _versionRange = _readableState.needReadable;
      _processDataStream("need readable", _versionRange);
      if (
        _readableState.length === 0 ||
        _readableState.length - isValidVersionRange <
          _readableState.highWaterMark
      ) {
        _versionRange = true;
        _processDataStream("length less than watermark", _versionRange);
      }
      if (
        _readableState.ended ||
        _readableState.reading ||
        _readableState.destroyed ||
        _readableState.errored ||
        !_readableState.constructed
      ) {
        _versionRange = false;
        _processDataStream("reading, ended or constructing", _versionRange);
      } else if (_versionRange) {
        _processDataStream("do read");
        _readableState.reading = true;
        _readableState.sync = true;
        if (_readableState.length === 0) {
          _readableState.needReadable = true;
        }
        try {
          this._read(_readableState.highWaterMark);
        } catch (______________error) {
          processAndConfigureDataStreams(this, ______________error);
        }
        _readableState.sync = false;
        if (!_readableState.reading) {
          isValidVersionRange = calculateAvailableBuffer(
            validatedVersionRange,
            _readableState,
          );
        }
      }
      let _validatedVersionRange;
      if (isValidVersionRange > 0) {
        _validatedVersionRange = __processBufferData(
          isValidVersionRange,
          _readableState,
        );
      } else {
        _validatedVersionRange = null;
      }
      if (_validatedVersionRange === null) {
        _readableState.needReadable =
          _readableState.length <= _readableState.highWaterMark;
        isValidVersionRange = 0;
      } else {
        _readableState.length -= isValidVersionRange;
        if (_readableState.multiAwaitDrain) {
          _readableState.awaitDrainWriters.clear();
        } else {
          _readableState.awaitDrainWriters = null;
        }
      }
      if (_readableState.length === 0) {
        if (!_readableState.ended) {
          _readableState.needReadable = true;
        }
        if (
          validatedVersionRange !== isValidVersionRange &&
          _readableState.ended
        ) {
          handleReadableEnd(this);
        }
      }
      if (
        _validatedVersionRange !== null &&
        !_readableState.errorEmitted &&
        !_readableState.closeEmitted
      ) {
        _readableState.dataEmitted = true;
        this.emit("data", _validatedVersionRange);
      }
      return _validatedVersionRange;
    };
    function handleEndOfWritableStream(writableState, _writableState) {
      _processDataStream("onEofChunk");
      if (!_writableState.ended) {
        if (_writableState.decoder) {
          let _decodedData = _writableState.decoder.end();
          if (_decodedData && _decodedData.length) {
            _writableState.buffer.push(_decodedData);
            if (_writableState.objectMode) {
              _writableState.length += 1;
            } else {
              _writableState.length += _decodedData.length;
            }
          }
        }
        _writableState.ended = true;
        if (_writableState.sync) {
          ___handleReadableState(writableState);
        } else {
          _writableState.needReadable = false;
          _writableState.emittedReadable = true;
          __handleReadableState(writableState);
        }
      }
    }
    function ___handleReadableState(isComparatorFinished) {
      let _______________readableState = isComparatorFinished._readableState;
      _processDataStream(
        "emitReadable",
        _______________readableState.needReadable,
        _______________readableState.emittedReadable,
      );
      _______________readableState.needReadable = false;
      if (!_______________readableState.emittedReadable) {
        _processDataStream(
          "emitReadable",
          _______________readableState.flowing,
        );
        _______________readableState.emittedReadable = true;
        recentEncodedValue.nextTick(
          __handleReadableState,
          isComparatorFinished,
        );
      }
    }
    function __handleReadableState(isParseComparatorEnded) {
      let ___________readableState = isParseComparatorEnded._readableState;
      _processDataStream(
        "emitReadable_",
        ___________readableState.destroyed,
        ___________readableState.length,
        ___________readableState.ended,
      );
      if (
        !___________readableState.destroyed &&
        !___________readableState.errored &&
        (___________readableState.length || ___________readableState.ended)
      ) {
        isParseComparatorEnded.emit("readable");
        ___________readableState.emittedReadable = false;
      }
      ___________readableState.needReadable =
        !___________readableState.flowing &&
        !___________readableState.ended &&
        ___________readableState.length <=
          ___________readableState.highWaterMark;
      _processReadableStream(isParseComparatorEnded);
    }
    function _handleReadableStream(checkEndEmitted, checkEndEmittedStatus) {
      if (
        !checkEndEmittedStatus.readingMore &&
        checkEndEmittedStatus.constructed
      ) {
        checkEndEmittedStatus.readingMore = true;
        recentEncodedValue.nextTick(
          processReadableStream,
          checkEndEmitted,
          checkEndEmittedStatus,
        );
      }
    }
    function processReadableStream(
      isReadableVersion,
      isComparatorReadableAndWritable,
    ) {
      while (
        !isComparatorReadableAndWritable.reading &&
        !isComparatorReadableAndWritable.ended &&
        (isComparatorReadableAndWritable.length <
          isComparatorReadableAndWritable.highWaterMark ||
          (isComparatorReadableAndWritable.flowing &&
            isComparatorReadableAndWritable.length === 0))
      ) {
        let comparatorLength = isComparatorReadableAndWritable.length;
        _processDataStream("maybeReadMore read 0");
        isReadableVersion.read(0);
        if (comparatorLength === isComparatorReadableAndWritable.length) {
          break;
        }
      }
      isComparatorReadableAndWritable.readingMore = false;
    }
    StreamBufferConstructor.prototype._read = function (
      isReadableAndWritableWithCheck,
    ) {
      throw new _____processDataStream("_read()");
    };
    StreamBufferConstructor.prototype.pipe = function (
      isTestComparatorWritable,
      validateWritableAttribute,
    ) {
      let context = this;
      let readableState = this._readableState;
      if (readableState.pipes.length === 1) {
        if (!readableState.multiAwaitDrain) {
          readableState.multiAwaitDrain = true;
          readableState.awaitDrainWriters = new SafeSetImplementation(
            readableState.awaitDrainWriters
              ? [readableState.awaitDrainWriters]
              : [],
          );
        }
      }
      readableState.pipes.push(isTestComparatorWritable);
      _processDataStream(
        "pipe count=%d opts=%j",
        readableState.pipes.length,
        validateWritableAttribute,
      );
      let determinePipeFunction =
        (!validateWritableAttribute ||
          validateWritableAttribute.end !== false) &&
        isTestComparatorWritable !== recentEncodedValue.stdout &&
        isTestComparatorWritable !== recentEncodedValue.stderr
          ? handleDataStreamEnd
          : unpipeDataStream;
      if (readableState.endEmitted) {
        recentEncodedValue.nextTick(determinePipeFunction);
      } else {
        context.once("end", determinePipeFunction);
      }
      isTestComparatorWritable.on("unpipe", processUnpipeEvent);
      function processUnpipeEvent(getWritableStateError, checkInputValidity) {
        _processDataStream("onunpipe");
        if (
          getWritableStateError === context &&
          checkInputValidity &&
          checkInputValidity.hasUnpiped === false
        ) {
          checkInputValidity.hasUnpiped = true;
          _cleanupAndRemoveListeners();
        }
      }
      function handleDataStreamEnd() {
        _processDataStream("onend");
        isTestComparatorWritable.end();
      }
      let writableComparator;
      let testComparatorStream = false;
      function _cleanupAndRemoveListeners() {
        _processDataStream("cleanup");
        isTestComparatorWritable.removeListener(
          "close",
          removeFinishListenerAndContinue,
        );
        isTestComparatorWritable.removeListener("finish", handleStreamFinish);
        if (writableComparator) {
          isTestComparatorWritable.removeListener("drain", writableComparator);
        }
        isTestComparatorWritable.removeListener(
          "error",
          handleBase64EncodingError,
        );
        isTestComparatorWritable.removeListener("unpipe", processUnpipeEvent);
        context.removeListener("end", handleDataStreamEnd);
        context.removeListener("end", unpipeDataStream);
        context.removeListener("data", checkCompatibilityAndProcessData);
        testComparatorStream = true;
        if (
          writableComparator &&
          readableState.awaitDrainWriters &&
          (!isTestComparatorWritable._writableState ||
            isTestComparatorWritable._writableState.needDrain)
        ) {
          writableComparator();
        }
      }
      function handleDataStreamPause() {
        if (!testComparatorStream) {
          if (
            readableState.pipes.length === 1 &&
            readableState.pipes[0] === isTestComparatorWritable
          ) {
            _processDataStream("false write response, pause", 0);
            readableState.awaitDrainWriters = isTestComparatorWritable;
            readableState.multiAwaitDrain = false;
          } else if (
            readableState.pipes.length > 1 &&
            readableState.pipes.includes(isTestComparatorWritable)
          ) {
            _processDataStream(
              "false write response, pause",
              readableState.awaitDrainWriters.size,
            );
            readableState.awaitDrainWriters.add(isTestComparatorWritable);
          }
          context.pause();
        }
        if (!writableComparator) {
          writableComparator = handleBase64EncodingDrain(
            context,
            isTestComparatorWritable,
          );
          isTestComparatorWritable.on("drain", writableComparator);
        }
      }
      context.on("data", checkCompatibilityAndProcessData);
      function checkCompatibilityAndProcessData(isCompatibilityCheckPassed) {
        _processDataStream("ondata");
        let compatibilityResult = isTestComparatorWritable.write(
          isCompatibilityCheckPassed,
        );
        _processDataStream("dest.write", compatibilityResult);
        if (compatibilityResult === false) {
          handleDataStreamPause();
        }
      }
      function handleBase64EncodingError(__validateBase64Encoding) {
        _processDataStream("onerror", __validateBase64Encoding);
        unpipeDataStream();
        isTestComparatorWritable.removeListener(
          "error",
          handleBase64EncodingError,
        );
        if (isTestComparatorWritable.listenerCount("error") === 0) {
          let isWritableOrReadableState =
            isTestComparatorWritable._writableState ||
            isTestComparatorWritable._readableState;
          if (
            isWritableOrReadableState &&
            !isWritableOrReadableState.errorEmitted
          ) {
            processAndConfigureDataStreams(
              isTestComparatorWritable,
              __validateBase64Encoding,
            );
          } else {
            isTestComparatorWritable.emit("error", __validateBase64Encoding);
          }
        }
      }
      _prependEventListener(
        isTestComparatorWritable,
        "error",
        handleBase64EncodingError,
      );
      function removeFinishListenerAndContinue() {
        isTestComparatorWritable.removeListener("finish", handleStreamFinish);
        unpipeDataStream();
      }
      isTestComparatorWritable.once("close", removeFinishListenerAndContinue);
      function handleStreamFinish() {
        _processDataStream("onfinish");
        isTestComparatorWritable.removeListener(
          "close",
          removeFinishListenerAndContinue,
        );
        unpipeDataStream();
      }
      isTestComparatorWritable.once("finish", handleStreamFinish);
      function unpipeDataStream() {
        _processDataStream("unpipe");
        context.unpipe(isTestComparatorWritable);
      }
      isTestComparatorWritable.emit("pipe", context);
      if (isTestComparatorWritable.writableNeedDrain === true) {
        if (readableState.flowing) {
          handleDataStreamPause();
        }
      } else if (!readableState.flowing) {
        _processDataStream("pipe resume");
        context.resume();
      }
      return isTestComparatorWritable;
    };
    function handleBase64EncodingDrain(
      validateBase64EncodingStatus,
      hasBase64EncodingError,
    ) {
      return function () {
        let readableStreamState = validateBase64EncodingStatus._readableState;
        if (readableStreamState.awaitDrainWriters === hasBase64EncodingError) {
          _processDataStream("pipeOnDrain", 1);
          readableStreamState.awaitDrainWriters = null;
        } else if (readableStreamState.multiAwaitDrain) {
          _processDataStream(
            "pipeOnDrain",
            readableStreamState.awaitDrainWriters.size,
          );
          readableStreamState.awaitDrainWriters.delete(hasBase64EncodingError);
        }
        if (
          (!readableStreamState.awaitDrainWriters ||
            readableStreamState.awaitDrainWriters.size === 0) &&
          validateBase64EncodingStatus.listenerCount("data")
        ) {
          validateBase64EncodingStatus.resume();
        }
      };
    }
    StreamBufferConstructor.prototype.unpipe = function (
      _findMostRecentBase64EncodedValue,
    ) {
      let ____readableState = this._readableState;
      let unpipeContext = {
        hasUnpiped: false,
      };
      if (____readableState.pipes.length === 0) {
        return this;
      }
      if (!_findMostRecentBase64EncodedValue) {
        let pipesArray = ____readableState.pipes;
        ____readableState.pipes = [];
        this.pause();
        for (let _pipeIndex = 0; _pipeIndex < pipesArray.length; _pipeIndex++) {
          pipesArray[_pipeIndex].emit("unpipe", this, {
            hasUnpiped: false,
          });
        }
        return this;
      }
      let getPipeIndex = arrayPrototypeIndexOf(
        ____readableState.pipes,
        _findMostRecentBase64EncodedValue,
      );
      if (getPipeIndex === -1) {
        return this;
      } else {
        ____readableState.pipes.splice(getPipeIndex, 1);
        if (____readableState.pipes.length === 0) {
          this.pause();
        }
        _findMostRecentBase64EncodedValue.emit("unpipe", this, unpipeContext);
        return this;
      }
    };
    StreamBufferConstructor.prototype.on = function (
      validateStreamHandleForVersionUpdate,
      validateAndReturnNodeProperties,
    ) {
      let streamProcessorResult = StreamProcessor.prototype.on.call(
        this,
        validateStreamHandleForVersionUpdate,
        validateAndReturnNodeProperties,
      );
      let _____readableState = this._readableState;
      if (validateStreamHandleForVersionUpdate === "data") {
        _____readableState.readableListening =
          this.listenerCount("readable") > 0;
        if (_____readableState.flowing !== false) {
          this.resume();
        }
      } else if (
        validateStreamHandleForVersionUpdate === "readable" &&
        !_____readableState.endEmitted &&
        !_____readableState.readableListening
      ) {
        _____readableState.readableListening =
          _____readableState.needReadable = true;
        _____readableState.flowing = false;
        _____readableState.emittedReadable = false;
        _processDataStream(
          "on readable",
          _____readableState.length,
          _____readableState.reading,
        );
        if (_____readableState.length) {
          ___handleReadableState(this);
        } else if (!_____readableState.reading) {
          recentEncodedValue.nextTick(processAndValidateStream, this);
        }
      }
      return streamProcessorResult;
    };
    StreamBufferConstructor.prototype.addListener =
      StreamBufferConstructor.prototype.on;
    StreamBufferConstructor.prototype.removeListener = function (
      isVersionUpdated,
      validateVersionAndUpdate,
    ) {
      let removedListener = StreamProcessor.prototype.removeListener.call(
        this,
        isVersionUpdated,
        validateVersionAndUpdate,
      );
      if (isVersionUpdated === "readable") {
        recentEncodedValue.nextTick(updateReadableStateBasedOnListeners, this);
      }
      return removedListener;
    };
    StreamBufferConstructor.prototype.off =
      StreamBufferConstructor.prototype.removeListener;
    StreamBufferConstructor.prototype.removeAllListeners = function (
      validateAndFormatSemanticVersioning,
    ) {
      let _removedListeners =
        StreamProcessor.prototype.removeAllListeners.apply(this, arguments);
      if (
        validateAndFormatSemanticVersioning === "readable" ||
        validateAndFormatSemanticVersioning === undefined
      ) {
        recentEncodedValue.nextTick(updateReadableStateBasedOnListeners, this);
      }
      return _removedListeners;
    };
    function updateReadableStateBasedOnListeners(_promisedVersionValidator) {
      let _____________readableState = _promisedVersionValidator._readableState;
      _____________readableState.readableListening =
        _promisedVersionValidator.listenerCount("readable") > 0;
      if (
        _____________readableState.resumeScheduled &&
        _____________readableState[_________processDataStream] === false
      ) {
        _____________readableState.flowing = true;
      } else if (_promisedVersionValidator.listenerCount("data") > 0) {
        _promisedVersionValidator.resume();
      } else if (!_____________readableState.readableListening) {
        _____________readableState.flowing = null;
      }
    }
    function processAndValidateStream(validateVersionAndStreamState) {
      _processDataStream("readable nexttick read 0");
      validateVersionAndStreamState.read(0);
    }
    StreamBufferConstructor.prototype.resume = function () {
      let ____________________readableState = this._readableState;
      if (!____________________readableState.flowing) {
        _processDataStream("resume");
        ____________________readableState.flowing =
          !____________________readableState.readableListening;
        scheduleVersionValidationComparison(
          this,
          ____________________readableState,
        );
      }
      ____________________readableState[_________processDataStream] = false;
      return this;
    };
    function scheduleVersionValidationComparison(
      handleVersionValidation,
      validateHandleVersionComparison,
    ) {
      if (!validateHandleVersionComparison.resumeScheduled) {
        validateHandleVersionComparison.resumeScheduled = true;
        recentEncodedValue.nextTick(
          __________handleVersionComparison,
          handleVersionValidation,
          validateHandleVersionComparison,
        );
      }
    }
    function __________handleVersionComparison(
      isVersionComparisonHandled,
      semverVersionComparisonHandler,
    ) {
      _processDataStream("resume", semverVersionComparisonHandler.reading);
      if (!semverVersionComparisonHandler.reading) {
        isVersionComparisonHandled.read(0);
      }
      semverVersionComparisonHandler.resumeScheduled = false;
      isVersionComparisonHandled.emit("resume");
      _processReadableStream(isVersionComparisonHandled);
      if (
        semverVersionComparisonHandler.flowing &&
        !semverVersionComparisonHandler.reading
      ) {
        isVersionComparisonHandled.read(0);
      }
    }
    StreamBufferConstructor.prototype.pause = function () {
      _processDataStream("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        _processDataStream("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState[_________processDataStream] = true;
      return this;
    };
    function _processReadableStream(validateAndFormatVersion) {
      let ___readableStreamState = validateAndFormatVersion._readableState;
      for (
        _processDataStream("flow", ___readableStreamState.flowing);
        ___readableStreamState.flowing &&
        validateAndFormatVersion.read() !== null;

      ) {}
    }
    StreamBufferConstructor.prototype.wrap = function (
      handleVersionComparisonFunction,
    ) {
      let isPaused = false;
      handleVersionComparisonFunction.on("data", (shouldPushAndPause) => {
        if (
          !this.push(shouldPushAndPause) &&
          handleVersionComparisonFunction.pause
        ) {
          isPaused = true;
          handleVersionComparisonFunction.pause();
        }
      });
      handleVersionComparisonFunction.on("end", () => {
        this.push(null);
      });
      handleVersionComparisonFunction.on("error", (dataStreamConfiguration) => {
        processAndConfigureDataStreams(this, dataStreamConfiguration);
      });
      handleVersionComparisonFunction.on("close", () => {
        this.destroy();
      });
      handleVersionComparisonFunction.on("destroy", () => {
        this.destroy();
      });
      this._read = () => {
        if (isPaused && handleVersionComparisonFunction.resume) {
          isPaused = false;
          handleVersionComparisonFunction.resume();
        }
      };
      let handleVersionComparisonKeys = ObjectKeys(
        handleVersionComparisonFunction,
      );
      for (
        let _index = 1;
        _index < handleVersionComparisonKeys.length;
        _index++
      ) {
        let versionComparisonKey = handleVersionComparisonKeys[_index];
        if (
          this[versionComparisonKey] === undefined &&
          typeof handleVersionComparisonFunction[versionComparisonKey] ==
            "function"
        ) {
          this[versionComparisonKey] = handleVersionComparisonFunction[
            versionComparisonKey
          ].bind(handleVersionComparisonFunction);
        }
      }
      return this;
    };
    StreamBufferConstructor.prototype[SymbolAsyncIterator] = function () {
      return handleAndCompareVersionStreams(this);
    };
    StreamBufferConstructor.prototype.iterator = function (
      handleVersionComparisonEventHandler,
    ) {
      if (handleVersionComparisonEventHandler !== undefined) {
        ________processDataStream(
          handleVersionComparisonEventHandler,
          "options",
        );
      }
      return handleAndCompareVersionStreams(
        this,
        handleVersionComparisonEventHandler,
      );
    };
    function handleAndCompareVersionStreams(
      handleVersionComparisonEvents,
      _handleVersionComparison,
    ) {
      if (typeof handleVersionComparisonEvents.read != "function") {
        handleVersionComparisonEvents = StreamBufferConstructor.wrap(
          handleVersionComparisonEvents,
          {
            objectMode: true,
          },
        );
      }
      let versionComparisonResult = _handleVersionComparisonStream(
        handleVersionComparisonEvents,
        _handleVersionComparison,
      );
      versionComparisonResult.stream = handleVersionComparisonEvents;
      return versionComparisonResult;
    }
    async function* _handleVersionComparisonStream(
      handleVersionComparisonHandler,
      _handleVersionComparisonEventHandler,
    ) {
      let logCurrentVersionState = logEncodedValue;
      function handleVersionCleanup(handleVersionComparisonCleanup) {
        if (this === handleVersionComparisonHandler) {
          logCurrentVersionState();
          logCurrentVersionState = logEncodedValue;
        } else {
          logCurrentVersionState = handleVersionComparisonCleanup;
        }
      }
      handleVersionComparisonHandler.on("readable", handleVersionCleanup);
      let currentDataStream;
      let versionComparisonProcessor = dataStreamProcessorFunction(
        handleVersionComparisonHandler,
        {
          writable: false,
        },
        (dataStreamUpdate) => {
          if (dataStreamUpdate) {
            currentDataStream = ____processDataStream(
              currentDataStream,
              dataStreamUpdate,
            );
          } else {
            currentDataStream = null;
          }
          logCurrentVersionState();
          logCurrentVersionState = logEncodedValue;
        },
      );
      try {
        while (true) {
          let _currentVersionData = handleVersionComparisonHandler.destroyed
            ? null
            : handleVersionComparisonHandler.read();
          if (_currentVersionData !== null) {
            yield _currentVersionData;
          } else {
            if (currentDataStream) {
              throw currentDataStream;
            }
            if (currentDataStream === null) {
              return;
            }
            await new PromiseImplementation(handleVersionCleanup);
          }
        }
      } catch (___________error) {
        currentDataStream = ____processDataStream(
          currentDataStream,
          ___________error,
        );
        throw currentDataStream;
      } finally {
        if (
          (currentDataStream ||
            _handleVersionComparisonEventHandler?.destroyOnReturn !== false) &&
          (currentDataStream === undefined ||
            handleVersionComparisonHandler._readableState.autoDestroy)
        ) {
          processEncodedData.destroyer(handleVersionComparisonHandler, null);
        } else {
          handleVersionComparisonHandler.off("readable", handleVersionCleanup);
          versionComparisonProcessor();
        }
      }
    }
    __defineObjectProperties(StreamBufferConstructor.prototype, {
      readable: {
        __proto__: null,
        get() {
          let ___isStreamReadable = this._readableState;
          return (
            !!___isStreamReadable &&
            ___isStreamReadable.readable !== false &&
            !___isStreamReadable.destroyed &&
            !___isStreamReadable.errorEmitted &&
            !___isStreamReadable.endEmitted
          );
        },
        set(setReadableState) {
          if (this._readableState) {
            this._readableState.readable = !!setReadableState;
          }
        },
      },
      readableDidRead: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState.dataEmitted;
        },
      },
      readableAborted: {
        __proto__: null,
        enumerable: false,
        get() {
          return (
            this._readableState.readable !== false &&
            (!!this._readableState.destroyed ||
              !!this._readableState.errored) &&
            !this._readableState.endEmitted
          );
        },
      },
      readableHighWaterMark: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState.highWaterMark;
        },
      },
      readableBuffer: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState && this._readableState.buffer;
        },
      },
      readableFlowing: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState.flowing;
        },
        set(setFlowingState) {
          if (this._readableState) {
            this._readableState.flowing = setFlowingState;
          }
        },
      },
      readableLength: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState.length;
        },
      },
      readableObjectMode: {
        __proto__: null,
        enumerable: false,
        get() {
          if (this._readableState) {
            return this._readableState.objectMode;
          } else {
            return false;
          }
        },
      },
      readableEncoding: {
        __proto__: null,
        enumerable: false,
        get() {
          if (this._readableState) {
            return this._readableState.encoding;
          } else {
            return null;
          }
        },
      },
      errored: {
        __proto__: null,
        enumerable: false,
        get() {
          if (this._readableState) {
            return this._readableState.errored;
          } else {
            return null;
          }
        },
      },
      closed: {
        __proto__: null,
        get() {
          if (this._readableState) {
            return this._readableState.closed;
          } else {
            return false;
          }
        },
      },
      destroyed: {
        __proto__: null,
        enumerable: false,
        get() {
          if (this._readableState) {
            return this._readableState.destroyed;
          } else {
            return false;
          }
        },
        set(__setReadableStateDestroyed) {
          if (this._readableState) {
            this._readableState.destroyed = __setReadableStateDestroyed;
          }
        },
      },
      readableEnded: {
        __proto__: null,
        enumerable: false,
        get() {
          if (this._readableState) {
            return this._readableState.endEmitted;
          } else {
            return false;
          }
        },
      },
    });
    __defineObjectProperties(_initializeBufferStream.prototype, {
      pipesCount: {
        __proto__: null,
        get() {
          return this.pipes.length;
        },
      },
      paused: {
        __proto__: null,
        get() {
          return this[_________processDataStream] !== false;
        },
        set(_isDataStreamActive) {
          this[_________processDataStream] = !!_isDataStreamActive;
        },
      },
    });
    StreamBufferConstructor._fromList = __processBufferData;
    function __processBufferData(
      handleConcurrentProcessing,
      createAbortableGenerator,
    ) {
      if (createAbortableGenerator.length === 0) {
        return null;
      }
      let processedBufferData;
      if (createAbortableGenerator.objectMode) {
        processedBufferData = createAbortableGenerator.buffer.shift();
      } else if (
        !handleConcurrentProcessing ||
        handleConcurrentProcessing >= createAbortableGenerator.length
      ) {
        if (createAbortableGenerator.decoder) {
          processedBufferData = createAbortableGenerator.buffer.join("");
        } else if (createAbortableGenerator.buffer.length === 1) {
          processedBufferData = createAbortableGenerator.buffer.first();
        } else {
          processedBufferData = createAbortableGenerator.buffer.concat(
            createAbortableGenerator.length,
          );
        }
        createAbortableGenerator.buffer.clear();
      } else {
        processedBufferData = createAbortableGenerator.buffer.consume(
          handleConcurrentProcessing,
          createAbortableGenerator.decoder,
        );
      }
      return processedBufferData;
    }
    function handleReadableEnd(abortEventHandler) {
      let _____________________readableState = abortEventHandler._readableState;
      _processDataStream(
        "endReadable",
        _____________________readableState.endEmitted,
      );
      if (!_____________________readableState.endEmitted) {
        _____________________readableState.ended = true;
        recentEncodedValue.nextTick(
          finalizeProcessAndCompareValues,
          _____________________readableState,
          abortEventHandler,
        );
      }
    }
    function finalizeProcessAndCompareValues(
      processEncodedValues,
      compareAndStoreValues,
    ) {
      _processDataStream(
        "endReadableNT",
        processEncodedValues.endEmitted,
        processEncodedValues.length,
      );
      if (
        !processEncodedValues.errored &&
        !processEncodedValues.closeEmitted &&
        !processEncodedValues.endEmitted &&
        processEncodedValues.length === 0
      ) {
        processEncodedValues.endEmitted = true;
        compareAndStoreValues.emit("end");
        if (
          compareAndStoreValues.writable &&
          compareAndStoreValues.allowHalfOpen === false
        ) {
          recentEncodedValue.nextTick(
            endWritableProcess,
            compareAndStoreValues,
          );
        } else if (processEncodedValues.autoDestroy) {
          let ___________________writableState =
            compareAndStoreValues._writableState;
          if (
            !___________________writableState ||
            (___________________writableState.autoDestroy &&
              (___________________writableState.finished ||
                ___________________writableState.writable === false))
          ) {
            compareAndStoreValues.destroy();
          }
        }
      }
    }
    function endWritableProcess(processPromises) {
      if (
        processPromises.writable &&
        !processPromises.writableEnded &&
        !processPromises.destroyed
      ) {
        processPromises.end();
      }
    }
    StreamBufferConstructor.from = function (
      processRequest,
      handleAsyncOperations,
    ) {
      return __________processDataStream(
        StreamBufferConstructor,
        processRequest,
        handleAsyncOperations,
      );
    };
    var recentProcessedValue;
    function getRecentProcessedValue() {
      if (recentProcessedValue === undefined) {
        recentProcessedValue = {};
      }
      return recentProcessedValue;
    }
    StreamBufferConstructor.fromWeb = function (
      asyncValueProcessor,
      handleAwaitedValues,
    ) {
      return getRecentProcessedValue().newStreamReadableFromReadableStream(
        asyncValueProcessor,
        handleAwaitedValues,
      );
    };
    StreamBufferConstructor.toWeb = function (
      handleErrorsAndCleanup,
      processDataAndHandleAbort,
    ) {
      return getRecentProcessedValue().newReadableStreamFromStreamReadable(
        handleErrorsAndCleanup,
        processDataAndHandleAbort,
      );
    };
    StreamBufferConstructor.wrap = function (
      processDataAsync,
      eventQueueProcessor,
    ) {
      return new StreamBufferConstructor({
        objectMode:
          processDataAsync.readableObjectMode ??
          processDataAsync.objectMode ??
          true,
        ...eventQueueProcessor,
        destroy(dataToDestroy, callbackAfterDestroy) {
          processEncodedData.destroyer(processDataAsync, dataToDestroy);
          callbackAfterDestroy(dataToDestroy);
        },
      }).wrap(processDataAsync);
    };
  },
);
var removeAbortEventListener = getModuleExportsIfAbsent(
  (processStreamModule, streamModuleExports) => {
    var logOperationResult = logTildeOperation();
    var {
      ArrayPrototypeSlice: ArrayPrototypeSlice,
      Error: ErrorHandler,
      FunctionPrototypeSymbolHasInstance: FunctionPrototypeSymbolHasInstance,
      ObjectDefineProperty: ObjectDefineProperty,
      ObjectDefineProperties: _ObjectDefineProperties,
      ObjectSetPrototypeOf: setPrototypeOf,
      StringPrototypeToLowerCase: StringPrototypeToLowerCase,
      Symbol: SymbolUniqueIdentifier,
      SymbolHasInstance: SymbolHasInstance,
    } = removeHeadNode();
    streamModuleExports.exports = _StreamProcessor;
    _StreamProcessor.WritableState = _initializeStreamSettings;
    var { EventEmitter: _eventEmitter } = createBlobUrl();
    var isStreamInstance = isInstanceOf().Stream;
    ____updateIntrinsicProperties();
    var { Buffer: _BufferModule } = createModuleExport(bufferWriteEncoding);
    var ______compareAndValidateVersions = compareAndValidateVersions();
    var { addAbortSignal: addAbortSignalHandler } = aggregateError();
    var {
      getHighWaterMark: initializeStreamModules,
      getDefaultHighWaterMark: createStreamModuleExports,
    } = _BufferComparisonValidator();
    var {
      ERR_INVALID_ARG_TYPE: streamModuleInitialization,
      ERR_METHOD_NOT_IMPLEMENTED: processStream,
      ERR_MULTIPLE_CALLBACK: initializeStreamModule,
      ERR_STREAM_CANNOT_PIPE: isStreamInstanceFlag,
      ERR_STREAM_DESTROYED: processStreamAndExport,
      ERR_STREAM_ALREADY_FINISHED: updateStreamExportedFunctions,
      ERR_STREAM_NULL_VALUES: _initializeStreamModule,
      ERR_STREAM_WRITE_AFTER_END: processStreamData,
      ERR_UNKNOWN_ENCODING: processStreamAndExportModule,
    } = _________________________validateAndReturnIntrinsicProperty().codes;
    var { errorOrDestroy: updateStreamModuleExports } =
      ______compareAndValidateVersions;
    setPrototypeOf(_StreamProcessor.prototype, isStreamInstance.prototype);
    setPrototypeOf(_StreamProcessor, isStreamInstance);
    function initializeSettings() {}
    var _logOperationResult = SymbolUniqueIdentifier("kOnFinished");
    function _initializeStreamSettings(
      isVersionCompatible,
      __handleVersionComparison,
      compareVersionsAsync,
    ) {
      if (typeof compareVersionsAsync != "boolean") {
        compareVersionsAsync =
          __handleVersionComparison instanceof __getEventListeners();
      }
      this.objectMode =
        !!isVersionCompatible && !!isVersionCompatible.objectMode;
      if (compareVersionsAsync) {
        this.objectMode =
          this.objectMode ||
          (!!isVersionCompatible && !!isVersionCompatible.writableObjectMode);
      }
      if (isVersionCompatible) {
        this.highWaterMark = initializeStreamModules(
          this,
          isVersionCompatible,
          "writableHighWaterMark",
          compareVersionsAsync,
        );
      } else {
        this.highWaterMark = createStreamModuleExports(false);
      }
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      let shouldDecodeStrings =
        !!isVersionCompatible && isVersionCompatible.decodeStrings === false;
      this.decodeStrings = !shouldDecodeStrings;
      this.defaultEncoding =
        (isVersionCompatible && isVersionCompatible.defaultEncoding) || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = compareAndValidateStreamVersions.bind(
        undefined,
        __handleVersionComparison,
      );
      this.writecb = null;
      this.writelen = 0;
      this.afterWriteTickInfo = null;
      initializeVersionBuffering(this);
      this.pendingcb = 0;
      this.constructed = true;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose =
        !isVersionCompatible || isVersionCompatible.emitClose !== false;
      this.autoDestroy =
        !isVersionCompatible || isVersionCompatible.autoDestroy !== false;
      this.errored = null;
      this.closed = false;
      this.closeEmitted = false;
      this[_logOperationResult] = [];
    }
    function initializeVersionBuffering(_compareVersionsAsync) {
      _compareVersionsAsync.buffered = [];
      _compareVersionsAsync.bufferedIndex = 0;
      _compareVersionsAsync.allBuffers = true;
      _compareVersionsAsync.allNoop = true;
    }
    _initializeStreamSettings.prototype.getBuffer = function () {
      return ArrayPrototypeSlice(this.buffered, this.bufferedIndex);
    };
    ObjectDefineProperty(
      _initializeStreamSettings.prototype,
      "bufferedRequestCount",
      {
        __proto__: null,
        get() {
          return this.buffered.length - this.bufferedIndex;
        },
      },
    );
    function _StreamProcessor(asyncProcessBufferOperations) {
      let isInstanceOfEventListeners = this instanceof __getEventListeners();
      if (
        !isInstanceOfEventListeners &&
        !FunctionPrototypeSymbolHasInstance(_StreamProcessor, this)
      ) {
        return new _StreamProcessor(asyncProcessBufferOperations);
      }
      this._writableState = new _initializeStreamSettings(
        asyncProcessBufferOperations,
        this,
        isInstanceOfEventListeners,
      );
      if (asyncProcessBufferOperations) {
        if (typeof asyncProcessBufferOperations.write == "function") {
          this._write = asyncProcessBufferOperations.write;
        }
        if (typeof asyncProcessBufferOperations.writev == "function") {
          this._writev = asyncProcessBufferOperations.writev;
        }
        if (typeof asyncProcessBufferOperations.destroy == "function") {
          this._destroy = asyncProcessBufferOperations.destroy;
        }
        if (typeof asyncProcessBufferOperations.final == "function") {
          this._final = asyncProcessBufferOperations.final;
        }
        if (typeof asyncProcessBufferOperations.construct == "function") {
          this._construct = asyncProcessBufferOperations.construct;
        }
        if (asyncProcessBufferOperations.signal) {
          addAbortSignalHandler(asyncProcessBufferOperations.signal, this);
        }
      }
      isStreamInstance.call(this, asyncProcessBufferOperations);
      ______compareAndValidateVersions.construct(this, () => {
        let _____________________writableState = this._writableState;
        if (!_____________________writableState.writing) {
          processVersionIncrementAndHandle(
            this,
            _____________________writableState,
          );
        }
        handleWorkerResponseProcessing(
          this,
          _____________________writableState,
        );
      });
    }
    ObjectDefineProperty(_StreamProcessor, SymbolHasInstance, {
      __proto__: null,
      value(streamProcessorValidation) {
        if (
          FunctionPrototypeSymbolHasInstance(this, streamProcessorValidation)
        ) {
          return true;
        } else if (this !== _StreamProcessor) {
          return false;
        } else {
          return (
            streamProcessorValidation &&
            streamProcessorValidation._writableState instanceof
              _initializeStreamSettings
          );
        }
      },
    });
    _StreamProcessor.prototype.pipe = function () {
      updateStreamModuleExports(this, new isStreamInstanceFlag());
    };
    function setupBufferProcessing(
      processBufferAndGetFunctions,
      processBufferIteration,
      handleBufferOperations,
      processBufferAndGetExports,
    ) {
      let ____writableState = processBufferAndGetFunctions._writableState;
      if (typeof handleBufferOperations == "function") {
        processBufferAndGetExports = handleBufferOperations;
        handleBufferOperations = ____writableState.defaultEncoding;
      } else {
        if (!handleBufferOperations) {
          handleBufferOperations = ____writableState.defaultEncoding;
        } else if (
          handleBufferOperations !== "buffer" &&
          !_BufferModule.isEncoding(handleBufferOperations)
        ) {
          throw new processStreamAndExportModule(handleBufferOperations);
        }
        if (typeof processBufferAndGetExports != "function") {
          processBufferAndGetExports = initializeSettings;
        }
      }
      if (processBufferIteration === null) {
        throw new _initializeStreamModule();
      }
      if (!____writableState.objectMode) {
        if (typeof processBufferIteration == "string") {
          if (____writableState.decodeStrings !== false) {
            processBufferIteration = _BufferModule.from(
              processBufferIteration,
              handleBufferOperations,
            );
            handleBufferOperations = "buffer";
          }
        } else if (processBufferIteration instanceof _BufferModule) {
          handleBufferOperations = "buffer";
        } else if (isStreamInstance._isUint8Array(processBufferIteration)) {
          processBufferIteration = isStreamInstance._uint8ArrayToBuffer(
            processBufferIteration,
          );
          handleBufferOperations = "buffer";
        } else {
          throw new streamModuleInitialization(
            "chunk",
            ["string", "Buffer", "Uint8Array"],
            processBufferIteration,
          );
        }
      }
      let setDefaultBufferEncoding;
      if (____writableState.ending) {
        setDefaultBufferEncoding = new processStreamData();
      } else if (____writableState.destroyed) {
        setDefaultBufferEncoding = new processStreamAndExport("write");
      }
      if (setDefaultBufferEncoding) {
        logOperationResult.nextTick(
          processBufferAndGetExports,
          setDefaultBufferEncoding,
        );
        updateStreamModuleExports(
          processBufferAndGetFunctions,
          setDefaultBufferEncoding,
          true,
        );
        return setDefaultBufferEncoding;
      } else {
        ____writableState.pendingcb++;
        return handleSignalWrite(
          processBufferAndGetFunctions,
          ____writableState,
          processBufferIteration,
          handleBufferOperations,
          processBufferAndGetExports,
        );
      }
    }
    _StreamProcessor.prototype.write = function (
      compareVersionsSignalCheck,
      ___handleVersionComparison,
      validateAndReturnVersionString,
    ) {
      return (
        setupBufferProcessing(
          this,
          compareVersionsSignalCheck,
          ___handleVersionComparison,
          validateAndReturnVersionString,
        ) === true
      );
    };
    _StreamProcessor.prototype.cork = function () {
      this._writableState.corked++;
    };
    _StreamProcessor.prototype.uncork = function () {
      let ____________________writableState = this._writableState;
      if (____________________writableState.corked) {
        ____________________writableState.corked--;
        if (!____________________writableState.writing) {
          processVersionIncrementAndHandle(
            this,
            ____________________writableState,
          );
        }
      }
    };
    _StreamProcessor.prototype.setDefaultEncoding = function (
      validateAndCompareVersion,
    ) {
      if (typeof validateAndCompareVersion == "string") {
        validateAndCompareVersion = StringPrototypeToLowerCase(
          validateAndCompareVersion,
        );
      }
      if (!_BufferModule.isEncoding(validateAndCompareVersion)) {
        throw new processStreamAndExportModule(validateAndCompareVersion);
      }
      this._writableState.defaultEncoding = validateAndCompareVersion;
      return this;
    };
    function handleSignalWrite(
      validateSignalAndOptions,
      signalOptions,
      _signalOptions,
      optionsHandler,
      validateOptionsAndHandleSignal,
    ) {
      let writtenBytes = signalOptions.objectMode ? 1 : _signalOptions.length;
      signalOptions.length += writtenBytes;
      let isUnderHighWaterMark =
        signalOptions.length < signalOptions.highWaterMark;
      if (!isUnderHighWaterMark) {
        signalOptions.needDrain = true;
      }
      if (
        signalOptions.writing ||
        signalOptions.corked ||
        signalOptions.errored ||
        !signalOptions.constructed
      ) {
        signalOptions.buffered.push({
          chunk: _signalOptions,
          encoding: optionsHandler,
          callback: validateOptionsAndHandleSignal,
        });
        if (signalOptions.allBuffers && optionsHandler !== "buffer") {
          signalOptions.allBuffers = false;
        }
        if (
          signalOptions.allNoop &&
          validateOptionsAndHandleSignal !== initializeSettings
        ) {
          signalOptions.allNoop = false;
        }
      } else {
        signalOptions.writelen = writtenBytes;
        signalOptions.writecb = validateOptionsAndHandleSignal;
        signalOptions.writing = true;
        signalOptions.sync = true;
        validateSignalAndOptions._write(
          _signalOptions,
          optionsHandler,
          signalOptions.onwrite,
        );
        signalOptions.sync = false;
      }
      return (
        isUnderHighWaterMark &&
        !signalOptions.errored &&
        !signalOptions.destroyed
      );
    }
    function _handleSignalWrite(
      __signalOptions,
      signalHandlerFunction,
      checkedSignal,
      compareVersionsWithSignal,
      checkPrereleaseVersions,
      isAbortSignal,
      validateAndComparePrereleaseVersions,
    ) {
      signalHandlerFunction.writelen = compareVersionsWithSignal;
      signalHandlerFunction.writecb = validateAndComparePrereleaseVersions;
      signalHandlerFunction.writing = true;
      signalHandlerFunction.sync = true;
      if (signalHandlerFunction.destroyed) {
        signalHandlerFunction.onwrite(new processStreamAndExport("write"));
      } else if (checkedSignal) {
        __signalOptions._writev(
          checkPrereleaseVersions,
          signalHandlerFunction.onwrite,
        );
      } else {
        __signalOptions._write(
          checkPrereleaseVersions,
          isAbortSignal,
          signalHandlerFunction.onwrite,
        );
      }
      signalHandlerFunction.sync = false;
    }
    function processVersionValidationAndStream(
      _compareAndValidateVersions,
      checkAndThrowIfAborted,
      __compareAndValidateVersions,
      validateAndHandleAbortSignal,
    ) {
      --checkAndThrowIfAborted.pendingcb;
      validateAndHandleAbortSignal(__compareAndValidateVersions);
      processBufferedChunks(checkAndThrowIfAborted);
      updateStreamModuleExports(
        _compareAndValidateVersions,
        __compareAndValidateVersions,
      );
    }
    function compareAndValidateStreamVersions(
      ___compareAndValidateVersions,
      compareAndProcessVersions,
    ) {
      let _____writableState = ___compareAndValidateVersions._writableState;
      let isWritableStateSynced = _____writableState.sync;
      let writeCallback = _____writableState.writecb;
      if (typeof writeCallback != "function") {
        updateStreamModuleExports(
          ___compareAndValidateVersions,
          new initializeStreamModule(),
        );
        return;
      }
      _____writableState.writing = false;
      _____writableState.writecb = null;
      _____writableState.length -= _____writableState.writelen;
      _____writableState.writelen = 0;
      if (compareAndProcessVersions) {
        compareAndProcessVersions.stack;
        _____writableState.errored ||= compareAndProcessVersions;
        if (
          ___compareAndValidateVersions._readableState &&
          !___compareAndValidateVersions._readableState.errored
        ) {
          ___compareAndValidateVersions._readableState.errored =
            compareAndProcessVersions;
        }
        if (isWritableStateSynced) {
          logOperationResult.nextTick(
            processVersionValidationAndStream,
            ___compareAndValidateVersions,
            _____writableState,
            compareAndProcessVersions,
            writeCallback,
          );
        } else {
          processVersionValidationAndStream(
            ___compareAndValidateVersions,
            _____writableState,
            compareAndProcessVersions,
            writeCallback,
          );
        }
      } else {
        if (
          _____writableState.buffered.length > _____writableState.bufferedIndex
        ) {
          processVersionIncrementAndHandle(
            ___compareAndValidateVersions,
            _____writableState,
          );
        }
        if (isWritableStateSynced) {
          if (
            _____writableState.afterWriteTickInfo !== null &&
            _____writableState.afterWriteTickInfo.cb === writeCallback
          ) {
            _____writableState.afterWriteTickInfo.count++;
          } else {
            _____writableState.afterWriteTickInfo = {
              count: 1,
              cb: writeCallback,
              stream: ___compareAndValidateVersions,
              state: _____writableState,
            };
            logOperationResult.nextTick(
              ___processStreamData,
              _____writableState.afterWriteTickInfo,
            );
          }
        } else {
          processVersionMatching(
            ___compareAndValidateVersions,
            _____writableState,
            1,
            writeCallback,
          );
        }
      }
    }
    function ___processStreamData({
      stream: _dataStream,
      state: connectionState,
      count: activeConnectionCount,
      cb: connectionCallback,
    }) {
      connectionState.afterWriteTickInfo = null;
      return processVersionMatching(
        _dataStream,
        connectionState,
        activeConnectionCount,
        connectionCallback,
      );
    }
    function processVersionMatching(
      handleVersionMatching,
      initializeVersionMatcher,
      _handleVersionMatching,
      __handleVersionMatching,
    ) {
      for (
        !initializeVersionMatcher.ending &&
        !handleVersionMatching.destroyed &&
        initializeVersionMatcher.length === 0 &&
        initializeVersionMatcher.needDrain &&
        ((initializeVersionMatcher.needDrain = false),
        handleVersionMatching.emit("drain"));
        _handleVersionMatching-- > 0;

      ) {
        initializeVersionMatcher.pendingcb--;
        __handleVersionMatching();
      }
      if (initializeVersionMatcher.destroyed) {
        processBufferedChunks(initializeVersionMatcher);
      }
      handleWorkerResponseProcessing(
        handleVersionMatching,
        initializeVersionMatcher,
      );
    }
    function processBufferedChunks(handleVersionIncrement) {
      if (handleVersionIncrement.writing) {
        return;
      }
      for (
        let _bufferedIndex = handleVersionIncrement.bufferedIndex;
        _bufferedIndex < handleVersionIncrement.buffered.length;
        ++_bufferedIndex
      ) {
        var errorFromStream;
        let { chunk: _chunkData, callback: streamCallback } =
          handleVersionIncrement.buffered[_bufferedIndex];
        let chunkDataLength = handleVersionIncrement.objectMode
          ? 1
          : _chunkData.length;
        handleVersionIncrement.length -= chunkDataLength;
        streamCallback(
          (errorFromStream = handleVersionIncrement.errored) !== null &&
            errorFromStream !== undefined
            ? errorFromStream
            : new processStreamAndExport("write"),
        );
      }
      let splicedLogOperations =
        handleVersionIncrement[_logOperationResult].splice(0);
      for (
        let operationIndex = 0;
        operationIndex < splicedLogOperations.length;
        operationIndex++
      ) {
        var currentErrorState;
        splicedLogOperations[operationIndex](
          (currentErrorState = handleVersionIncrement.errored) !== null &&
            currentErrorState !== undefined
            ? currentErrorState
            : new processStreamAndExport("end"),
        );
      }
      initializeVersionBuffering(handleVersionIncrement);
    }
    function processVersionIncrementAndHandle(
      processVersionIncrementHandling,
      _handleVersionIncrement,
    ) {
      if (
        _handleVersionIncrement.corked ||
        _handleVersionIncrement.bufferProcessing ||
        _handleVersionIncrement.destroyed ||
        !_handleVersionIncrement.constructed
      ) {
        return;
      }
      let {
        buffered: _bufferedData,
        bufferedIndex: bufferedIndex,
        objectMode: isObjectMode,
      } = _handleVersionIncrement;
      let remainingBufferedDataCount = _bufferedData.length - bufferedIndex;
      if (!remainingBufferedDataCount) {
        return;
      }
      let initialBufferedIndex = bufferedIndex;
      _handleVersionIncrement.bufferProcessing = true;
      if (
        remainingBufferedDataCount > 1 &&
        processVersionIncrementHandling._writev
      ) {
        _handleVersionIncrement.pendingcb -= remainingBufferedDataCount - 1;
        let executeBufferedCallbacks = _handleVersionIncrement.allNoop
          ? initializeSettings
          : (executeCallbacksWithBuffering) => {
              for (
                let currentBufferedIndex = initialBufferedIndex;
                currentBufferedIndex < _bufferedData.length;
                ++currentBufferedIndex
              ) {
                _bufferedData[currentBufferedIndex].callback(
                  executeCallbacksWithBuffering,
                );
              }
            };
        let bufferedDataForExecution =
          _handleVersionIncrement.allNoop && initialBufferedIndex === 0
            ? _bufferedData
            : ArrayPrototypeSlice(_bufferedData, initialBufferedIndex);
        bufferedDataForExecution.allBuffers =
          _handleVersionIncrement.allBuffers;
        _handleSignalWrite(
          processVersionIncrementHandling,
          _handleVersionIncrement,
          true,
          _handleVersionIncrement.length,
          bufferedDataForExecution,
          "",
          executeBufferedCallbacks,
        );
        initializeVersionBuffering(_handleVersionIncrement);
      } else {
        do {
          let {
            chunk: dataChunk,
            encoding: dataEncoding,
            callback: ___callbackFunction,
          } = _bufferedData[initialBufferedIndex];
          _bufferedData[initialBufferedIndex++] = null;
          let dataChunkLength = isObjectMode ? 1 : dataChunk.length;
          _handleSignalWrite(
            processVersionIncrementHandling,
            _handleVersionIncrement,
            false,
            dataChunkLength,
            dataChunk,
            dataEncoding,
            ___callbackFunction,
          );
        } while (
          initialBufferedIndex < _bufferedData.length &&
          !_handleVersionIncrement.writing
        );
        if (initialBufferedIndex === _bufferedData.length) {
          initializeVersionBuffering(_handleVersionIncrement);
        } else if (initialBufferedIndex > 256) {
          _bufferedData.splice(0, initialBufferedIndex);
          _handleVersionIncrement.bufferedIndex = 0;
        } else {
          _handleVersionIncrement.bufferedIndex = initialBufferedIndex;
        }
      }
      _handleVersionIncrement.bufferProcessing = false;
    }
    _StreamProcessor.prototype._write = function (
      handleErrorAndEmit,
      initializeStateVariables,
      handleStateError,
    ) {
      if (this._writev) {
        this._writev(
          [
            {
              chunk: handleErrorAndEmit,
              encoding: initializeStateVariables,
            },
          ],
          handleStateError,
        );
      } else {
        throw new processStream("_write()");
      }
    };
    _StreamProcessor.prototype._writev = null;
    _StreamProcessor.prototype.end = function (
      initializeStreamStates,
      initializeStreamState,
      handleErrorAndResetStates,
    ) {
      let ______writableState = this._writableState;
      if (typeof initializeStreamStates == "function") {
        handleErrorAndResetStates = initializeStreamStates;
        initializeStreamStates = null;
        initializeStreamState = null;
      } else if (typeof initializeStreamState == "function") {
        handleErrorAndResetStates = initializeStreamState;
        initializeStreamState = null;
      }
      let errorHandler;
      if (initializeStreamStates != null) {
        let _bufferProcessingResult = setupBufferProcessing(
          this,
          initializeStreamStates,
          initializeStreamState,
        );
        if (_bufferProcessingResult instanceof ErrorHandler) {
          errorHandler = _bufferProcessingResult;
        }
      }
      if (______writableState.corked) {
        ______writableState.corked = 1;
        this.uncork();
      }
      if (!errorHandler) {
        if (!______writableState.errored && !______writableState.ending) {
          ______writableState.ending = true;
          handleWorkerResponseProcessing(this, ______writableState, true);
          ______writableState.ended = true;
        } else if (______writableState.finished) {
          errorHandler = new updateStreamExportedFunctions("end");
        } else if (______writableState.destroyed) {
          errorHandler = new processStreamAndExport("end");
        }
      }
      if (typeof handleErrorAndResetStates == "function") {
        if (errorHandler || ______writableState.finished) {
          logOperationResult.nextTick(handleErrorAndResetStates, errorHandler);
        } else {
          ______writableState[_logOperationResult].push(
            handleErrorAndResetStates,
          );
        }
      }
      return this;
    };
    function isTrackProgressValid(manageTrackProgressAndVersion) {
      return (
        manageTrackProgressAndVersion.ending &&
        !manageTrackProgressAndVersion.destroyed &&
        manageTrackProgressAndVersion.constructed &&
        manageTrackProgressAndVersion.length === 0 &&
        !manageTrackProgressAndVersion.errored &&
        manageTrackProgressAndVersion.buffered.length === 0 &&
        !manageTrackProgressAndVersion.finished &&
        !manageTrackProgressAndVersion.writing &&
        !manageTrackProgressAndVersion.errorEmitted &&
        !manageTrackProgressAndVersion.closeEmitted
      );
    }
    function handleWorkerProgress(
      _handleWorkerCommunication,
      handleProgressTracking,
    ) {
      let hasWorkerProgressStarted = false;
      function trackProgress(_handleProgressTracking) {
        if (hasWorkerProgressStarted) {
          updateStreamModuleExports(
            _handleWorkerCommunication,
            _handleProgressTracking ?? initializeStreamModule(),
          );
          return;
        }
        hasWorkerProgressStarted = true;
        handleProgressTracking.pendingcb--;
        if (_handleProgressTracking) {
          let initialLogOperations =
            handleProgressTracking[_logOperationResult].splice(0);
          for (
            let logOperationCallbackIndex = 0;
            logOperationCallbackIndex < initialLogOperations.length;
            logOperationCallbackIndex++
          ) {
            initialLogOperations[logOperationCallbackIndex](
              _handleProgressTracking,
            );
          }
          updateStreamModuleExports(
            _handleWorkerCommunication,
            _handleProgressTracking,
            handleProgressTracking.sync,
          );
        } else if (isTrackProgressValid(handleProgressTracking)) {
          handleProgressTracking.prefinished = true;
          _handleWorkerCommunication.emit("prefinish");
          handleProgressTracking.pendingcb++;
          logOperationResult.nextTick(
            manageWorkerResponses,
            _handleWorkerCommunication,
            handleProgressTracking,
          );
        }
      }
      handleProgressTracking.sync = true;
      handleProgressTracking.pendingcb++;
      try {
        _handleWorkerCommunication._final(trackProgress);
      } catch (________________________error) {
        trackProgress(________________________error);
      }
      handleProgressTracking.sync = false;
    }
    function processWorkerVersionLifecycle(
      resetWorkerVersionStates,
      _createAndProcessWorkerVersion,
    ) {
      if (
        !_createAndProcessWorkerVersion.prefinished &&
        !_createAndProcessWorkerVersion.finalCalled
      ) {
        if (
          typeof resetWorkerVersionStates._final == "function" &&
          !_createAndProcessWorkerVersion.destroyed
        ) {
          _createAndProcessWorkerVersion.finalCalled = true;
          handleWorkerProgress(
            resetWorkerVersionStates,
            _createAndProcessWorkerVersion,
          );
        } else {
          _createAndProcessWorkerVersion.prefinished = true;
          resetWorkerVersionStates.emit("prefinish");
        }
      }
    }
    function handleWorkerResponseProcessing(
      _handleWorkerResponses,
      __createAndProcessWorkerVersion,
      handleWorkerCommunicationEvent,
    ) {
      if (isTrackProgressValid(__createAndProcessWorkerVersion)) {
        processWorkerVersionLifecycle(
          _handleWorkerResponses,
          __createAndProcessWorkerVersion,
        );
        if (__createAndProcessWorkerVersion.pendingcb === 0) {
          if (handleWorkerCommunicationEvent) {
            __createAndProcessWorkerVersion.pendingcb++;
            logOperationResult.nextTick(
              (trackProgressHandler, _trackProgress) => {
                if (isTrackProgressValid(_trackProgress)) {
                  manageWorkerResponses(trackProgressHandler, _trackProgress);
                } else {
                  _trackProgress.pendingcb--;
                }
              },
              _handleWorkerResponses,
              __createAndProcessWorkerVersion,
            );
          } else if (isTrackProgressValid(__createAndProcessWorkerVersion)) {
            __createAndProcessWorkerVersion.pendingcb++;
            manageWorkerResponses(
              _handleWorkerResponses,
              __createAndProcessWorkerVersion,
            );
          }
        }
      }
    }
    function manageWorkerResponses(
      handleWorkerResponseManagement,
      processWorkerResponses,
    ) {
      processWorkerResponses.pendingcb--;
      processWorkerResponses.finished = true;
      let pendingWorkerResponseCallbacks =
        processWorkerResponses[_logOperationResult].splice(0);
      for (
        let callbackIndex = 0;
        callbackIndex < pendingWorkerResponseCallbacks.length;
        callbackIndex++
      ) {
        pendingWorkerResponseCallbacks[callbackIndex]();
      }
      handleWorkerResponseManagement.emit("finish");
      if (processWorkerResponses.autoDestroy) {
        let ______________________readableState =
          handleWorkerResponseManagement._readableState;
        if (
          !______________________readableState ||
          (______________________readableState.autoDestroy &&
            (______________________readableState.endEmitted ||
              ______________________readableState.readable === false))
        ) {
          handleWorkerResponseManagement.destroy();
        }
      }
    }
    _ObjectDefineProperties(_StreamProcessor.prototype, {
      closed: {
        __proto__: null,
        get() {
          if (this._writableState) {
            return this._writableState.closed;
          } else {
            return false;
          }
        },
      },
      destroyed: {
        __proto__: null,
        get() {
          if (this._writableState) {
            return this._writableState.destroyed;
          } else {
            return false;
          }
        },
        set(setDestroyedState) {
          if (this._writableState) {
            this._writableState.destroyed = setDestroyedState;
          }
        },
      },
      writable: {
        __proto__: null,
        get() {
          let isWritableState = this._writableState;
          return (
            !!isWritableState &&
            isWritableState.writable !== false &&
            !isWritableState.destroyed &&
            !isWritableState.errored &&
            !isWritableState.ending &&
            !isWritableState.ended
          );
        },
        set(setWritableState) {
          if (this._writableState) {
            this._writableState.writable = !!setWritableState;
          }
        },
      },
      writableFinished: {
        __proto__: null,
        get() {
          if (this._writableState) {
            return this._writableState.finished;
          } else {
            return false;
          }
        },
      },
      writableObjectMode: {
        __proto__: null,
        get() {
          if (this._writableState) {
            return this._writableState.objectMode;
          } else {
            return false;
          }
        },
      },
      writableBuffer: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.getBuffer();
        },
      },
      writableEnded: {
        __proto__: null,
        get() {
          if (this._writableState) {
            return this._writableState.ending;
          } else {
            return false;
          }
        },
      },
      writableNeedDrain: {
        __proto__: null,
        get() {
          let writableStateNeedDrain = this._writableState;
          if (writableStateNeedDrain) {
            return (
              !writableStateNeedDrain.destroyed &&
              !writableStateNeedDrain.ending &&
              writableStateNeedDrain.needDrain
            );
          } else {
            return false;
          }
        },
      },
      writableHighWaterMark: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.highWaterMark;
        },
      },
      writableCorked: {
        __proto__: null,
        get() {
          if (this._writableState) {
            return this._writableState.corked;
          } else {
            return 0;
          }
        },
      },
      writableLength: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.length;
        },
      },
      errored: {
        __proto__: null,
        enumerable: false,
        get() {
          if (this._writableState) {
            return this._writableState.errored;
          } else {
            return null;
          }
        },
      },
      writableAborted: {
        __proto__: null,
        enumerable: false,
        get() {
          return (
            this._writableState.writable !== false &&
            (!!this._writableState.destroyed ||
              !!this._writableState.errored) &&
            !this._writableState.finished
          );
        },
      },
    });
    var __initializeStreamModule = ______compareAndValidateVersions.destroy;
    _StreamProcessor.prototype.destroy = function (
      EventEmitter,
      initializeEventEmitter,
    ) {
      let __________________writableState = this._writableState;
      if (
        !__________________writableState.destroyed &&
        (__________________writableState.bufferedIndex <
          __________________writableState.buffered.length ||
          __________________writableState[_logOperationResult].length)
      ) {
        logOperationResult.nextTick(
          processBufferedChunks,
          __________________writableState,
        );
      }
      __initializeStreamModule.call(this, EventEmitter, initializeEventEmitter);
      return this;
    };
    _StreamProcessor.prototype._undestroy =
      ______compareAndValidateVersions.undestroy;
    _StreamProcessor.prototype._destroy = function (
      setMaxListeners,
      defaultMaxListenersSetter,
    ) {
      defaultMaxListenersSetter(setMaxListeners);
    };
    _StreamProcessor.prototype[_eventEmitter.captureRejectionSymbol] =
      function (setDefaultMaxListeners) {
        this.destroy(setDefaultMaxListeners);
      };
    var _addAbortSignalHandler;
    function getAbortSignalHandler() {
      if (_addAbortSignalHandler === undefined) {
        _addAbortSignalHandler = {};
      }
      return _addAbortSignalHandler;
    }
    _StreamProcessor.fromWeb = function (maxListeners, _maxListeners) {
      return getAbortSignalHandler().newStreamWritableFromWritableStream(
        maxListeners,
        _maxListeners,
      );
    };
    _StreamProcessor.toWeb = function (defaultMaxListeners) {
      return getAbortSignalHandler().newWritableStreamFromStreamWritable(
        defaultMaxListeners,
      );
    };
  },
);
var validateNonNegativeNumber = getModuleExportsIfAbsent(
  (processDataAndValidateStreams, validateAndProcessStreams) => {
    var activelyLoggingOperation = logTildeOperation();
    ____updateIntrinsicProperties();
    var createBufferEncodingModule = createModuleExport(bufferWriteEncoding);
    var {
      isReadable: _isStreamReadable,
      isWritable: isStreamWritable,
      isIterable: isIterableStream,
      isNodeStream: isNodeStream,
      isReadableNodeStream: isReadableNodeStream,
      isWritableNodeStream: isWritableNodeStream,
      isDuplexNodeStream: isDuplexNodeStream,
    } = isVersionIncremented();
    var recentBase64EncodedValue = findMostRecentBase64EncodedValue();
    var {
      AbortError: __AbortError,
      codes: {
        ERR_INVALID_ARG_TYPE: _ERR_INVALID_ARG_TYPE,
        ERR_INVALID_RETURN_VALUE: _ERR_INVALID_RETURN_VALUE,
      },
    } = _________________________validateAndReturnIntrinsicProperty();
    var { destroyer: streamDestructionHandler } = compareAndValidateVersions();
    var ____getEventListeners = __getEventListeners();
    var getStreamHandler = getFormattedComparatorsList();
    var { createDeferredPromise: findAndValidateStreams } =
      swapBufferWithNodes();
    var streamOperationLogger = validateNodeRemovalParameters();
    var _validateAndProcessStreams =
      globalThis.Blob || createBufferEncodingModule.Blob;
    var initializeStreamValidationAndProcessing =
      typeof _validateAndProcessStreams !== "undefined"
        ? function (handleEventEmit) {
            return handleEventEmit instanceof _validateAndProcessStreams;
          }
        : function (emitEventWithListenersHandling) {
            return false;
          };
    var validateAndProcessStreamData =
      globalThis.AbortController ||
      ________________________validateAndReturnIntrinsicProperty()
        .AbortController;
    var { FunctionPrototypeCall: _getStreamHandler } = removeHeadNode();
    var __getStreamHandler = class extends ____getEventListeners {
      constructor(streamOptions) {
        super(streamOptions);
        if (streamOptions?.readable === false) {
          this._readableState.readable = false;
          this._readableState.ended = true;
          this._readableState.endEmitted = true;
        }
        if (streamOptions?.writable === false) {
          this._writableState.writable = false;
          this._writableState.ending = true;
          this._writableState.ended = true;
          this._writableState.finished = true;
        }
      }
    };
    validateAndProcessStreams.exports = function handleTarFileEvents(
      handleUnhandledError,
      handleError,
    ) {
      if (isDuplexNodeStream(handleUnhandledError)) {
        return handleUnhandledError;
      }
      if (isReadableNodeStream(handleUnhandledError)) {
        return __handleStreamEvents({
          readable: handleUnhandledError,
        });
      }
      if (isWritableNodeStream(handleUnhandledError)) {
        return __handleStreamEvents({
          writable: handleUnhandledError,
        });
      }
      if (isNodeStream(handleUnhandledError)) {
        return __handleStreamEvents({
          writable: false,
          readable: false,
        });
      }
      if (typeof handleUnhandledError == "function") {
        let {
          value: streamValue,
          write: writeStreamData,
          final: finalizeStream,
          destroy: destroyStream,
        } = createStreamListener(handleUnhandledError);
        if (isIterableStream(streamValue)) {
          return streamOperationLogger(__getStreamHandler, streamValue, {
            objectMode: true,
            write: writeStreamData,
            final: finalizeStream,
            destroy: destroyStream,
          });
        }
        let streamValuePromise = streamValue?.then;
        if (typeof streamValuePromise == "function") {
          let ___streamHandler;
          let streamHandlerPromise = _getStreamHandler(
            streamValuePromise,
            streamValue,
            (returnValue) => {
              if (returnValue != null) {
                throw new _ERR_INVALID_RETURN_VALUE(
                  "nully",
                  "body",
                  returnValue,
                );
              }
            },
            (streamHandlerID) => {
              streamDestructionHandler(___streamHandler, streamHandlerID);
            },
          );
          return (___streamHandler = new __getStreamHandler({
            objectMode: true,
            readable: false,
            write: writeStreamData,
            final(handleFinalization) {
              finalizeStream(async () => {
                try {
                  await streamHandlerPromise;
                  activelyLoggingOperation.nextTick(handleFinalization, null);
                } catch (_________error) {
                  activelyLoggingOperation.nextTick(
                    handleFinalization,
                    _________error,
                  );
                }
              });
            },
            destroy: destroyStream,
          }));
        }
        throw new _ERR_INVALID_RETURN_VALUE(
          "Iterable, AsyncIterable or AsyncFunction",
          handleError,
          streamValue,
        );
      }
      if (initializeStreamValidationAndProcessing(handleUnhandledError)) {
        return handleTarFileEvents(handleUnhandledError.arrayBuffer());
      }
      if (isIterableStream(handleUnhandledError)) {
        return streamOperationLogger(__getStreamHandler, handleUnhandledError, {
          objectMode: true,
          writable: false,
        });
      }
      if (
        typeof handleUnhandledError?.writable == "object" ||
        typeof handleUnhandledError?.readable == "object"
      ) {
        let readableStream =
          handleUnhandledError != null && handleUnhandledError.readable
            ? isReadableNodeStream(handleUnhandledError?.readable)
              ? handleUnhandledError?.readable
              : handleTarFileEvents(handleUnhandledError.readable)
            : undefined;
        let _writableStream =
          handleUnhandledError != null && handleUnhandledError.writable
            ? isWritableNodeStream(handleUnhandledError?.writable)
              ? handleUnhandledError?.writable
              : handleTarFileEvents(handleUnhandledError.writable)
            : undefined;
        return __handleStreamEvents({
          readable: readableStream,
          writable: _writableStream,
        });
      }
      let handleStreamProcessing = handleUnhandledError?.then;
      if (typeof handleStreamProcessing == "function") {
        let streamDataBuffer;
        _getStreamHandler(
          handleStreamProcessing,
          handleUnhandledError,
          (receivedData) => {
            if (receivedData != null) {
              streamDataBuffer.push(receivedData);
            }
            streamDataBuffer.push(null);
          },
          (streamDestructionHandlerCallback) => {
            streamDestructionHandler(
              streamDataBuffer,
              streamDestructionHandlerCallback,
            );
          },
        );
        return (streamDataBuffer = new __getStreamHandler({
          objectMode: true,
          writable: false,
          read() {},
        }));
      }
      throw new _ERR_INVALID_ARG_TYPE(
        handleError,
        [
          "Blob",
          "ReadableStream",
          "WritableStream",
          "Stream",
          "Iterable",
          "AsyncIterable",
          "Function",
          "{ readable, writable } pair",
          "Promise",
        ],
        handleUnhandledError,
      );
    };
    function createStreamListener(createListenerWrapFunction) {
      let { promise: streamPromise, resolve: resolveStreamPromise } =
        findAndValidateStreams();
      let streamDataValidator = new validateAndProcessStreamData();
      let streamDataAbortSignal = streamDataValidator.signal;
      return {
        value: createListenerWrapFunction(
          (async function* () {
            while (true) {
              let streamDataPromise = streamPromise;
              streamPromise = null;
              let {
                chunk: chunkData,
                done: isDone,
                cb: __callbackFunction,
              } = await streamDataPromise;
              activelyLoggingOperation.nextTick(__callbackFunction);
              if (isDone) {
                return;
              }
              if (streamDataAbortSignal.aborted) {
                throw new __AbortError(undefined, {
                  cause: streamDataAbortSignal.reason,
                });
              }
              ({ promise: streamPromise, resolve: resolveStreamPromise } =
                findAndValidateStreams());
              yield chunkData;
            }
          })(),
          {
            signal: streamDataAbortSignal,
          },
        ),
        write(
          writeStreamChunk,
          handleWriteStreamChunk,
          callbackOnStreamChunkComplete,
        ) {
          let resolveWriteStream = resolveStreamPromise;
          resolveStreamPromise = null;
          resolveWriteStream({
            chunk: writeStreamChunk,
            done: false,
            cb: callbackOnStreamChunkComplete,
          });
        },
        final(finalizeStreamCallback) {
          let resolveFinalizationCallback = resolveStreamPromise;
          resolveStreamPromise = null;
          resolveFinalizationCallback({
            done: true,
            cb: finalizeStreamCallback,
          });
        },
        destroy(____processStreamData, processStreamDataValidation) {
          streamDataValidator.abort();
          processStreamDataValidation(____processStreamData);
        },
      };
    }
    function __handleStreamEvents(removeNestedPropertyListener) {
      let wrappedReadableStream =
        removeNestedPropertyListener.readable &&
        typeof removeNestedPropertyListener.readable.read != "function"
          ? getStreamHandler.wrap(removeNestedPropertyListener.readable)
          : removeNestedPropertyListener.readable;
      let writableStream = removeNestedPropertyListener.writable;
      let isWrappedReadableStreamAvailable = !!_isStreamReadable(
        wrappedReadableStream,
      );
      let isWritableStreamAvailable = !!isStreamWritable(writableStream);
      let _streamHandler;
      let __streamHandler;
      let streamCleanupHandler;
      let streamCleanupCallback;
      let streamCleanupManager;
      function cleanupStream(removeEventListener) {
        let _cleanupCallback = streamCleanupCallback;
        streamCleanupCallback = null;
        if (_cleanupCallback) {
          _cleanupCallback(removeEventListener);
        } else if (removeEventListener) {
          streamCleanupManager.destroy(removeEventListener);
        } else if (
          !isWrappedReadableStreamAvailable &&
          !isWritableStreamAvailable
        ) {
          streamCleanupManager.destroy();
        }
      }
      streamCleanupManager = new __getStreamHandler({
        readableObjectMode:
          wrappedReadableStream != null &&
          !!wrappedReadableStream.readableObjectMode,
        writableObjectMode:
          writableStream != null && !!writableStream.writableObjectMode,
        readable: isWrappedReadableStreamAvailable,
        writable: isWritableStreamAvailable,
      });
      if (isWritableStreamAvailable) {
        recentBase64EncodedValue(writableStream, (writableStreamHandler) => {
          isWritableStreamAvailable = false;
          if (writableStreamHandler) {
            streamDestructionHandler(
              wrappedReadableStream,
              writableStreamHandler,
            );
          }
          cleanupStream(writableStreamHandler);
        });
        streamCleanupManager._write = function (
          removeAllEventListeners,
          _removeAllEventListeners,
          __removeAllEventListeners,
        ) {
          if (
            writableStream.write(
              removeAllEventListeners,
              _removeAllEventListeners,
            )
          ) {
            __removeAllEventListeners();
          } else {
            _streamHandler = __removeAllEventListeners;
          }
        };
        streamCleanupManager._final = function (handleEventListeners) {
          writableStream.end();
          __streamHandler = handleEventListeners;
        };
        writableStream.on("drain", function () {
          if (_streamHandler) {
            let executeStreamHandler = _streamHandler;
            _streamHandler = null;
            executeStreamHandler();
          }
        });
        writableStream.on("finish", function () {
          if (__streamHandler) {
            let initializeStreamHandler = __streamHandler;
            __streamHandler = null;
            initializeStreamHandler();
          }
        });
      }
      if (isWrappedReadableStreamAvailable) {
        recentBase64EncodedValue(wrappedReadableStream, (_readableStream) => {
          isWrappedReadableStreamAvailable = false;
          if (_readableStream) {
            streamDestructionHandler(wrappedReadableStream, _readableStream);
          }
          cleanupStream(_readableStream);
        });
        wrappedReadableStream.on("readable", function () {
          if (streamCleanupHandler) {
            let executeStreamCleanup = streamCleanupHandler;
            streamCleanupHandler = null;
            executeStreamCleanup();
          }
        });
        wrappedReadableStream.on("end", function () {
          streamCleanupManager.push(null);
        });
        streamCleanupManager._read = function () {
          while (true) {
            let readStreamData = wrappedReadableStream.read();
            if (readStreamData === null) {
              streamCleanupHandler = streamCleanupManager._read;
              return;
            }
            if (!streamCleanupManager.push(readStreamData)) {
              return;
            }
          }
        };
      }
      streamCleanupManager._destroy = function (
        getEventListeners,
        _getEventListeners,
      ) {
        if (!getEventListeners && streamCleanupCallback !== null) {
          getEventListeners = new __AbortError();
        }
        streamCleanupHandler = null;
        _streamHandler = null;
        __streamHandler = null;
        if (streamCleanupCallback === null) {
          _getEventListeners(getEventListeners);
        } else {
          streamCleanupCallback = _getEventListeners;
          streamDestructionHandler(writableStream, getEventListeners);
          streamDestructionHandler(wrappedReadableStream, getEventListeners);
        }
      };
      return streamCleanupManager;
    }
  },
);
var __getEventListeners = getModuleExportsIfAbsent(
  (initializeEventListener, eventListenerManager) => {
    var {
      ObjectDefineProperties: ___defineObjectProperties,
      ObjectGetOwnPropertyDescriptor: ObjectGetOwnPropertyDescriptor,
      ObjectKeys: _ObjectKeys,
      ObjectSetPrototypeOf: _setPrototypeOf,
    } = removeHeadNode();
    eventListenerManager.exports = EventListenerManager;
    var FormattedComparatorsList = getFormattedComparatorsList();
    var initializeAbortEventListener = removeAbortEventListener();
    _setPrototypeOf(
      EventListenerManager.prototype,
      FormattedComparatorsList.prototype,
    );
    _setPrototypeOf(EventListenerManager, FormattedComparatorsList);
    {
      let initializeAbortEventListenerKeys = _ObjectKeys(
        initializeAbortEventListener.prototype,
      );
      for (
        let eventListenerKeyIndex = 0;
        eventListenerKeyIndex < initializeAbortEventListenerKeys.length;
        eventListenerKeyIndex++
      ) {
        let abortEventListenerKey =
          initializeAbortEventListenerKeys[eventListenerKeyIndex];
        EventListenerManager.prototype[abortEventListenerKey] ||=
          initializeAbortEventListener.prototype[abortEventListenerKey];
      }
    }
    function EventListenerManager(getListenerCount) {
      if (!(this instanceof EventListenerManager)) {
        return new EventListenerManager(getListenerCount);
      }
      FormattedComparatorsList.call(this, getListenerCount);
      initializeAbortEventListener.call(this, getListenerCount);
      if (getListenerCount) {
        this.allowHalfOpen = getListenerCount.allowHalfOpen !== false;
        if (getListenerCount.readable === false) {
          this._readableState.readable = false;
          this._readableState.ended = true;
          this._readableState.endEmitted = true;
        }
        if (getListenerCount.writable === false) {
          this._writableState.writable = false;
          this._writableState.ending = true;
          this._writableState.ended = true;
          this._writableState.finished = true;
        }
      } else {
        this.allowHalfOpen = true;
      }
    }
    ___defineObjectProperties(EventListenerManager.prototype, {
      writable: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writable",
        ),
      },
      writableHighWaterMark: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writableHighWaterMark",
        ),
      },
      writableObjectMode: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writableObjectMode",
        ),
      },
      writableBuffer: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writableBuffer",
        ),
      },
      writableLength: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writableLength",
        ),
      },
      writableFinished: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writableFinished",
        ),
      },
      writableCorked: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writableCorked",
        ),
      },
      writableEnded: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writableEnded",
        ),
      },
      writableNeedDrain: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor(
          initializeAbortEventListener.prototype,
          "writableNeedDrain",
        ),
      },
      destroyed: {
        __proto__: null,
        get() {
          if (
            this._readableState === undefined ||
            this._writableState === undefined
          ) {
            return false;
          } else {
            return (
              this._readableState.destroyed && this._writableState.destroyed
            );
          }
        },
        set(setStreamDestroyedState) {
          if (this._readableState && this._writableState) {
            this._readableState.destroyed = setStreamDestroyedState;
            this._writableState.destroyed = setStreamDestroyedState;
          }
        },
      },
    });
    var initializeAbortEvents;
    function getInitializeAbortEvents() {
      if (initializeAbortEvents === undefined) {
        initializeAbortEvents = {};
      }
      return initializeAbortEvents;
    }
    EventListenerManager.fromWeb = function (
      handleArrayEvent,
      _isArrayElementIncluded,
    ) {
      return getInitializeAbortEvents().newStreamDuplexFromReadableWritablePair(
        handleArrayEvent,
        _isArrayElementIncluded,
      );
    };
    EventListenerManager.toWeb = function (handleArrayEvents) {
      return getInitializeAbortEvents().newReadableWritablePairFromDuplex(
        handleArrayEvents,
      );
    };
    var abortEventListener;
    EventListenerManager.from = function (eventEmitterHandler) {
      abortEventListener ||= validateNonNegativeNumber();
      return abortEventListener(eventEmitterHandler, "body");
    };
  },
);
var handleArrayJoinEvent = getModuleExportsIfAbsent(
  (_initializeEventEmitter, __initializeEventEmitter) => {
    var { ObjectSetPrototypeOf: __setPrototypeOf, Symbol: getSymbolByKey } =
      removeHeadNode();
    __initializeEventEmitter.exports = initializeReadableStream;
    var { ERR_METHOD_NOT_IMPLEMENTED: ERR_METHOD_NOT_IMPLEMENTED } =
      _________________________validateAndReturnIntrinsicProperty().codes;
    var ______getEventListeners = __getEventListeners();
    var { getHighWaterMark: getHighWaterMarkFromBuffer } =
      _BufferComparisonValidator();
    __setPrototypeOf(
      initializeReadableStream.prototype,
      ______getEventListeners.prototype,
    );
    __setPrototypeOf(initializeReadableStream, ______getEventListeners);
    var callbackSymbol = getSymbolByKey("kCallback");
    function initializeReadableStream(isInstanceOfEventEmitter) {
      if (!(this instanceof initializeReadableStream)) {
        return new initializeReadableStream(isInstanceOfEventEmitter);
      }
      let highWaterMark = isInstanceOfEventEmitter
        ? getHighWaterMarkFromBuffer(
            this,
            isInstanceOfEventEmitter,
            "readableHighWaterMark",
            true,
          )
        : null;
      if (highWaterMark === 0) {
        isInstanceOfEventEmitter = {
          ...isInstanceOfEventEmitter,
          highWaterMark: null,
          readableHighWaterMark: highWaterMark,
          writableHighWaterMark:
            isInstanceOfEventEmitter.writableHighWaterMark || 0,
        };
      }
      ______getEventListeners.call(this, isInstanceOfEventEmitter);
      this._readableState.sync = false;
      this[callbackSymbol] = null;
      if (isInstanceOfEventEmitter) {
        if (typeof isInstanceOfEventEmitter.transform == "function") {
          this._transform = isInstanceOfEventEmitter.transform;
        }
        if (typeof isInstanceOfEventEmitter.flush == "function") {
          this._flush = isInstanceOfEventEmitter.flush;
        }
      }
      this.on("prefinish", flushAndPauseHandler);
    }
    function handleFlushAndPause(pauseIfWritable) {
      if (typeof this._flush == "function" && !this.destroyed) {
        this._flush((handleWritableStream, dataToPush) => {
          if (handleWritableStream) {
            if (pauseIfWritable) {
              pauseIfWritable(handleWritableStream);
            } else {
              this.destroy(handleWritableStream);
            }
            return;
          }
          if (dataToPush != null) {
            this.push(dataToPush);
          }
          this.push(null);
          if (pauseIfWritable) {
            pauseIfWritable();
          }
        });
      } else {
        this.push(null);
        if (pauseIfWritable) {
          pauseIfWritable();
        }
      }
    }
    function flushAndPauseHandler() {
      if (this._final !== handleFlushAndPause) {
        handleFlushAndPause.call(this);
      }
    }
    initializeReadableStream.prototype._final = handleFlushAndPause;
    initializeReadableStream.prototype._transform = function (
      cleanupEventListeners,
      handleResourceCleanup,
      cleanupListeners,
    ) {
      throw new ERR_METHOD_NOT_IMPLEMENTED("_transform()");
    };
    initializeReadableStream.prototype._write = function (
      handleErrorEvent,
      _cleanupEventListeners,
      handleErrorAndCleanupListeners,
    ) {
      let __________readableState = this._readableState;
      let _____________writableState = this._writableState;
      let readableLength = __________readableState.length;
      this._transform(
        handleErrorEvent,
        _cleanupEventListeners,
        (errorEventHandler, dataPacket) => {
          if (errorEventHandler) {
            handleErrorAndCleanupListeners(errorEventHandler);
            return;
          }
          if (dataPacket != null) {
            this.push(dataPacket);
          }
          if (
            _____________writableState.ended ||
            readableLength === __________readableState.length ||
            __________readableState.length <
              __________readableState.highWaterMark
          ) {
            handleErrorAndCleanupListeners();
          } else {
            this[callbackSymbol] = handleErrorAndCleanupListeners;
          }
        },
      );
    };
    initializeReadableStream.prototype._read = function () {
      if (this[callbackSymbol]) {
        let executeCallback = this[callbackSymbol];
        this[callbackSymbol] = null;
        executeCallback();
      }
    };
  },
);
var eventEmitter = getModuleExportsIfAbsent(
  (transformEventHandler, eventTransformer) => {
    var { ObjectSetPrototypeOf: ___setPrototypeOf } = removeHeadNode();
    eventTransformer.exports = ArrayJoinEventHandlerWrapper;
    var ArrayJoinEventHandler = handleArrayJoinEvent();
    ___setPrototypeOf(
      ArrayJoinEventHandlerWrapper.prototype,
      ArrayJoinEventHandler.prototype,
    );
    ___setPrototypeOf(ArrayJoinEventHandlerWrapper, ArrayJoinEventHandler);
    function ArrayJoinEventHandlerWrapper(prependEventListener) {
      if (!(this instanceof ArrayJoinEventHandlerWrapper)) {
        return new ArrayJoinEventHandlerWrapper(prependEventListener);
      }
      ArrayJoinEventHandler.call(this, prependEventListener);
    }
    ArrayJoinEventHandlerWrapper.prototype._transform = function (
      prependListenerToAggregateError,
      aggregateErrorHandler,
      handleAggregateErrorListener,
    ) {
      handleAggregateErrorListener(null, prependListenerToAggregateError);
    };
  },
);
var __findMostRecentBase64EncodedValue = getModuleExportsIfAbsent(
  (createEventListeners, initializeEventListeners) => {
    var loggedTildeOperation = logTildeOperation();
    var {
      ArrayIsArray: isArray,
      Promise: _PromiseImplementation,
      SymbolAsyncIterator: AsyncIteratorSymbol,
    } = removeHeadNode();
    var getMostRecentBase64EncodedValue = findMostRecentBase64EncodedValue();
    var { once: registerOnceEventListener } = swapBufferWithNodes();
    var _______compareAndValidateVersions = compareAndValidateVersions();
    var getRegisteredEventListeners = __getEventListeners();
    var {
      aggregateTwoErrors: aggregateErrors,
      codes: {
        ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE,
        ERR_INVALID_RETURN_VALUE: ERR_INVALID_RETURN_VALUE,
        ERR_MISSING_ARGS: ERR_MISSING_ARGS,
        ERR_STREAM_DESTROYED: ERR_STREAM_DESTROYED,
        ERR_STREAM_PREMATURE_CLOSE: ERR_STREAM_PREMATURE_CLOSE,
      },
      AbortError: _AbortError,
    } = _________________________validateAndReturnIntrinsicProperty();
    var {
      validateFunction: validateUserFunction,
      validateAbortSignal: _validateUserFunction,
    } = processNode();
    var {
      isIterable: _initializeEventListeners,
      isReadable: ___getEventListeners,
      isReadableNodeStream: __initializeEventListeners,
      isNodeStream: ________compareAndValidateVersions,
    } = isVersionIncremented();
    var __validateUserFunction =
      globalThis.AbortController ||
      ________________________validateAndReturnIntrinsicProperty()
        .AbortController;
    var ___validateUserFunction;
    var ____validateUserFunction;
    function handleAbortSignalAndCleanup(
      validateAbortSignal,
      _validateAbortSignal,
      __validateAbortSignal,
    ) {
      let abortSignalHandled = false;
      validateAbortSignal.on("close", () => {
        abortSignalHandled = true;
      });
      let getRecentBase64EncodedValue = getMostRecentBase64EncodedValue(
        validateAbortSignal,
        {
          readable: _validateAbortSignal,
          writable: __validateAbortSignal,
        },
        (isAbortSignalHandled) => {
          abortSignalHandled = !isAbortSignalHandled;
        },
      );
      return {
        destroy: (_handleAbortSignal) => {
          if (!abortSignalHandled) {
            abortSignalHandled = true;
            _______compareAndValidateVersions.destroyer(
              validateAbortSignal,
              _handleAbortSignal || new ERR_STREAM_DESTROYED("pipe"),
            );
          }
        },
        cleanup: getRecentBase64EncodedValue,
      };
    }
    function validateAndProcessAbortSignalAndReturnLastElement(
      validateAndProcessAbortSignal,
    ) {
      validateUserFunction(
        validateAndProcessAbortSignal[validateAndProcessAbortSignal.length - 1],
        "streams[stream.length - 1]",
      );
      return validateAndProcessAbortSignal.pop();
    }
    function handleAbortSignalPromise(addAbortSignalToPromise) {
      if (_initializeEventListeners(addAbortSignalToPromise)) {
        return addAbortSignalToPromise;
      }
      if (__initializeEventListeners(addAbortSignalToPromise)) {
        return asyncIteratorFromAbortSignal(addAbortSignalToPromise);
      }
      throw new ERR_INVALID_ARG_TYPE(
        "val",
        ["Readable", "Iterable", "AsyncIterable"],
        addAbortSignalToPromise,
      );
    }
    async function* asyncIteratorFromAbortSignal(_addAbortSignalToPromise) {
      ____validateUserFunction ||= getFormattedComparatorsList();
      yield* ____validateUserFunction.prototype[AsyncIteratorSymbol].call(
        _addAbortSignalToPromise,
      );
    }
    async function processPromiseStream(
      promiseWrapper,
      _formatStringWithPlaceholders,
      _formatStringWithPlaceholder,
      { end: endFunction },
    ) {
      let pendingError;
      let resolvePendingPromise = null;
      let handlePendingError = (handlePendingErrorAndResolvePromise) => {
        if (handlePendingErrorAndResolvePromise) {
          pendingError = handlePendingErrorAndResolvePromise;
        }
        if (resolvePendingPromise) {
          let executePendingResolution = resolvePendingPromise;
          resolvePendingPromise = null;
          executePendingResolution();
        }
      };
      let createPendingPromise = () =>
        new _PromiseImplementation(
          (_handlePendingError, handlePendingErrorCallback) => {
            if (pendingError) {
              handlePendingErrorCallback(pendingError);
            } else {
              resolvePendingPromise = () => {
                if (pendingError) {
                  handlePendingErrorCallback(pendingError);
                } else {
                  _handlePendingError();
                }
              };
            }
          },
        );
      _formatStringWithPlaceholders.on("drain", handlePendingError);
      let recentBase64Value = getMostRecentBase64EncodedValue(
        _formatStringWithPlaceholders,
        {
          readable: false,
        },
        handlePendingError,
      );
      try {
        if (_formatStringWithPlaceholders.writableNeedDrain) {
          await createPendingPromise();
        }
        for await (let placeholderValue of promiseWrapper) {
          if (!_formatStringWithPlaceholders.write(placeholderValue)) {
            await createPendingPromise();
          }
        }
        if (endFunction) {
          _formatStringWithPlaceholders.end();
        }
        await createPendingPromise();
        _formatStringWithPlaceholder();
      } catch (________error) {
        _formatStringWithPlaceholder(
          pendingError !== ________error
            ? aggregateErrors(pendingError, ________error)
            : ________error,
        );
      } finally {
        recentBase64Value();
        _formatStringWithPlaceholders.off("drain", handlePendingError);
      }
    }
    function processStreamDataWithAbortValidation(
      ...processStreamDataWithAbortSignal
    ) {
      return _processStreamData(
        processStreamDataWithAbortSignal,
        registerOnceEventListener(
          validateAndProcessAbortSignalAndReturnLastElement(
            processStreamDataWithAbortSignal,
          ),
        ),
      );
    }
    function _processStreamData(
      setTailAndLength,
      LinkedList_addNode,
      addToEndOfList,
    ) {
      if (setTailAndLength.length === 1 && isArray(setTailAndLength[0])) {
        setTailAndLength = setTailAndLength[0];
      }
      if (setTailAndLength.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      let userFunctionValidator = new __validateUserFunction();
      let userFunctionSignal = userFunctionValidator.signal;
      let addToEndSignal = addToEndOfList?.signal;
      let dataBuffer = [];
      _validateUserFunction(addToEndSignal, "options.signal");
      function ____handleStreamError() {
        _handleStreamError(new _AbortError());
      }
      addToEndSignal?.addEventListener("abort", ____handleStreamError);
      let streamError;
      let streamProcessingError;
      let errorBuffer = [];
      let processedDataCount = 0;
      function handleStreamErrorOnHeadRemoval(removeHead) {
        _handleStreamError(removeHead, --processedDataCount === 0);
      }
      function _handleStreamError(processData, consumeAndShiftData) {
        if (
          processData &&
          (!streamError || streamError.code === "ERR_STREAM_PREMATURE_CLOSE")
        ) {
          streamError = processData;
        }
        if (!!streamError || !!consumeAndShiftData) {
          while (errorBuffer.length) {
            errorBuffer.shift()(streamError);
          }
          addToEndSignal?.removeEventListener("abort", ____handleStreamError);
          userFunctionValidator.abort();
          if (consumeAndShiftData) {
            if (!streamError) {
              dataBuffer.forEach((calculateProductDiscount) =>
                calculateProductDiscount(),
              );
            }
            loggedTildeOperation.nextTick(
              LinkedList_addNode,
              streamError,
              streamProcessingError,
            );
          }
        }
      }
      let __processStreamData;
      for (
        let currentVersionIndex = 0;
        currentVersionIndex < setTailAndLength.length;
        currentVersionIndex++
      ) {
        let currentVersionData = setTailAndLength[currentVersionIndex];
        let isNextVersionAvailable =
          currentVersionIndex < setTailAndLength.length - 1;
        let isCurrentVersionValid = currentVersionIndex > 0;
        let shouldProceedWithNextVersion =
          isNextVersionAvailable || addToEndOfList?.end !== false;
        let isLastVersionCurrentlyActive =
          currentVersionIndex === setTailAndLength.length - 1;
        if (________compareAndValidateVersions(currentVersionData)) {
          let _handleErrorEvent = function (getStringFromHead) {
            if (
              getStringFromHead &&
              getStringFromHead.name !== "AbortError" &&
              getStringFromHead.code !== "ERR_STREAM_PREMATURE_CLOSE"
            ) {
              handleStreamErrorOnHeadRemoval(getStringFromHead);
            }
          };
          var __handleErrorEvent = _handleErrorEvent;
          if (shouldProceedWithNextVersion) {
            let { destroy: cleanupFunction, cleanup: cleanupCallback } =
              handleAbortSignalAndCleanup(
                currentVersionData,
                isNextVersionAvailable,
                isCurrentVersionValid,
              );
            errorBuffer.push(cleanupFunction);
            if (
              ___getEventListeners(currentVersionData) &&
              isLastVersionCurrentlyActive
            ) {
              dataBuffer.push(cleanupCallback);
            }
          }
          currentVersionData.on("error", _handleErrorEvent);
          if (
            ___getEventListeners(currentVersionData) &&
            isLastVersionCurrentlyActive
          ) {
            dataBuffer.push(() => {
              currentVersionData.removeListener("error", _handleErrorEvent);
            });
          }
        }
        if (currentVersionIndex === 0) {
          if (typeof currentVersionData == "function") {
            __processStreamData = currentVersionData({
              signal: userFunctionSignal,
            });
            if (!_initializeEventListeners(__processStreamData)) {
              throw new ERR_INVALID_RETURN_VALUE(
                "Iterable, AsyncIterable or Stream",
                "source",
                __processStreamData,
              );
            }
          } else if (
            _initializeEventListeners(currentVersionData) ||
            __initializeEventListeners(currentVersionData)
          ) {
            __processStreamData = currentVersionData;
          } else {
            __processStreamData =
              getRegisteredEventListeners.from(currentVersionData);
          }
        } else if (typeof currentVersionData == "function") {
          __processStreamData = handleAbortSignalPromise(__processStreamData);
          __processStreamData = currentVersionData(__processStreamData, {
            signal: userFunctionSignal,
          });
          if (isNextVersionAvailable) {
            if (!_initializeEventListeners(__processStreamData, true)) {
              throw new ERR_INVALID_RETURN_VALUE(
                "AsyncIterable",
                "transform[" + (currentVersionIndex - 1) + "]",
                __processStreamData,
              );
            }
          } else {
            var processStreamDataPromise;
            ___validateUserFunction ||= eventEmitter();
            let validateUserStream = new ___validateUserFunction({
              objectMode: true,
            });
            let processStreamThenMethod =
              (processStreamDataPromise = __processStreamData) === null ||
              processStreamDataPromise === undefined
                ? undefined
                : processStreamDataPromise.then;
            if (typeof processStreamThenMethod == "function") {
              processedDataCount++;
              processStreamThenMethod.call(
                __processStreamData,
                (userStreamError) => {
                  streamProcessingError = userStreamError;
                  if (userStreamError != null) {
                    validateUserStream.write(userStreamError);
                  }
                  if (shouldProceedWithNextVersion) {
                    validateUserStream.end();
                  }
                  loggedTildeOperation.nextTick(handleStreamErrorOnHeadRemoval);
                },
                (userStreamValidation) => {
                  validateUserStream.destroy(userStreamValidation);
                  loggedTildeOperation.nextTick(
                    handleStreamErrorOnHeadRemoval,
                    userStreamValidation,
                  );
                },
              );
            } else if (_initializeEventListeners(__processStreamData, true)) {
              processedDataCount++;
              processPromiseStream(
                __processStreamData,
                validateUserStream,
                handleStreamErrorOnHeadRemoval,
                {
                  end: shouldProceedWithNextVersion,
                },
              );
            } else {
              throw new ERR_INVALID_RETURN_VALUE(
                "AsyncIterable or Promise",
                "destination",
                __processStreamData,
              );
            }
            __processStreamData = validateUserStream;
            let {
              destroy: _processStreamDataPromise,
              cleanup: processStreamThen,
            } = handleAbortSignalAndCleanup(__processStreamData, false, true);
            errorBuffer.push(_processStreamDataPromise);
            if (isLastVersionCurrentlyActive) {
              dataBuffer.push(processStreamThen);
            }
          }
        } else if (________compareAndValidateVersions(currentVersionData)) {
          if (__initializeEventListeners(__processStreamData)) {
            processedDataCount += 2;
            let validatedStreamBuffer = validateAndStreamBuffer(
              __processStreamData,
              currentVersionData,
              handleStreamErrorOnHeadRemoval,
              {
                end: shouldProceedWithNextVersion,
              },
            );
            if (
              ___getEventListeners(currentVersionData) &&
              isLastVersionCurrentlyActive
            ) {
              dataBuffer.push(validatedStreamBuffer);
            }
          } else if (_initializeEventListeners(__processStreamData)) {
            processedDataCount++;
            processPromiseStream(
              __processStreamData,
              currentVersionData,
              handleStreamErrorOnHeadRemoval,
              {
                end: shouldProceedWithNextVersion,
              },
            );
          } else {
            throw new ERR_INVALID_ARG_TYPE(
              "val",
              ["Readable", "Iterable", "AsyncIterable"],
              __processStreamData,
            );
          }
          __processStreamData = currentVersionData;
        } else {
          __processStreamData =
            getRegisteredEventListeners.from(currentVersionData);
        }
      }
      if (
        (userFunctionSignal != null && userFunctionSignal.aborted) ||
        (addToEndSignal != null && addToEndSignal.aborted)
      ) {
        loggedTildeOperation.nextTick(____handleStreamError);
      }
      return __processStreamData;
    }
    function validateAndStreamBuffer(
      validateBufferHighWaterMark,
      handleBufferValidationError,
      _validateBufferSize,
      { end: endTime },
    ) {
      let isBufferClosed = false;
      handleBufferValidationError.on("close", () => {
        if (!isBufferClosed) {
          _validateBufferSize(new ERR_STREAM_PREMATURE_CLOSE());
        }
      });
      validateBufferHighWaterMark.pipe(handleBufferValidationError, {
        end: endTime,
      });
      if (endTime) {
        validateBufferHighWaterMark.once("end", () => {
          isBufferClosed = true;
          handleBufferValidationError.end();
        });
      } else {
        _validateBufferSize();
      }
      getMostRecentBase64EncodedValue(
        validateBufferHighWaterMark,
        {
          readable: true,
          writable: false,
        },
        (handleStreamPrematureClose) => {
          let __________________readableState =
            validateBufferHighWaterMark._readableState;
          if (
            handleStreamPrematureClose &&
            handleStreamPrematureClose.code === "ERR_STREAM_PREMATURE_CLOSE" &&
            __________________readableState &&
            __________________readableState.ended &&
            !__________________readableState.errored &&
            !__________________readableState.errorEmitted
          ) {
            validateBufferHighWaterMark
              .once("end", _validateBufferSize)
              .once("error", _validateBufferSize);
          } else {
            _validateBufferSize(handleStreamPrematureClose);
          }
        },
      );
      return getMostRecentBase64EncodedValue(
        handleBufferValidationError,
        {
          readable: false,
          writable: true,
        },
        _validateBufferSize,
      );
    }
    initializeEventListeners.exports = {
      pipelineImpl: _processStreamData,
      pipeline: processStreamDataWithAbortValidation,
    };
  },
);
var _handleAbortOperation = getModuleExportsIfAbsent(
  (handleStreamArguments, streamHandler) => {
    var { pipeline: base64EncodedPipeline } =
      __findMostRecentBase64EncodedValue();
    var _____getEventListeners = __getEventListeners();
    var { destroyer: streamDestroyer } = compareAndValidateVersions();
    var {
      isNodeStream: _isNodeStream,
      isReadable: __isStreamReadable,
      isWritable: ____isWritableStream,
    } = isVersionIncremented();
    var {
      AbortError: _____AbortError,
      codes: {
        ERR_INVALID_ARG_VALUE: ERR_INVALID_ARG_VALUE,
        ERR_MISSING_ARGS: _ERR_MISSING_ARGS,
      },
    } = _________________________validateAndReturnIntrinsicProperty();
    streamHandler.exports = function (...streams) {
      if (streams.length === 0) {
        throw new _ERR_MISSING_ARGS("streams");
      }
      if (streams.length === 1) {
        return _____getEventListeners.from(streams[0]);
      }
      let inputStreams = [...streams];
      if (typeof streams[0] == "function") {
        streams[0] = _____getEventListeners.from(streams[0]);
      }
      if (typeof streams[streams.length - 1] == "function") {
        let __lastStreamIndex = streams.length - 1;
        streams[__lastStreamIndex] = _____getEventListeners.from(
          streams[__lastStreamIndex],
        );
      }
      for (let streamIndex = 0; streamIndex < streams.length; ++streamIndex) {
        if (_isNodeStream(streams[streamIndex])) {
          if (
            streamIndex < streams.length - 1 &&
            !__isStreamReadable(streams[streamIndex])
          ) {
            throw new ERR_INVALID_ARG_VALUE(
              "streams[" + streamIndex + "]",
              inputStreams[streamIndex],
              "must be readable",
            );
          }
          if (streamIndex > 0 && !____isWritableStream(streams[streamIndex])) {
            throw new ERR_INVALID_ARG_VALUE(
              "streams[" + streamIndex + "]",
              inputStreams[streamIndex],
              "must be writable",
            );
          }
        }
      }
      let eventListenersCounter;
      let eventListenersAccumulator;
      let lastFunctionIndex;
      let lastStreamIndex;
      let eventListenerIndex;
      function handleStreamBuffer(_validateAndProcessBuffer) {
        let currentStreamIndex = lastStreamIndex;
        lastStreamIndex = null;
        if (currentStreamIndex) {
          currentStreamIndex(_validateAndProcessBuffer);
        } else if (_validateAndProcessBuffer) {
          eventListenerIndex.destroy(_validateAndProcessBuffer);
        } else if (!_eventListenerIndex && !_lastStreamIndex) {
          eventListenerIndex.destroy();
        }
      }
      let numStreams = streams[0];
      let validateAndInitializeStreams = base64EncodedPipeline(
        streams,
        handleStreamBuffer,
      );
      let _lastStreamIndex = !!____isWritableStream(numStreams);
      let _eventListenerIndex = !!__isStreamReadable(
        validateAndInitializeStreams,
      );
      eventListenerIndex = new _____getEventListeners({
        writableObjectMode:
          numStreams != null && !!numStreams.writableObjectMode,
        readableObjectMode:
          validateAndInitializeStreams != null &&
          !!validateAndInitializeStreams.writableObjectMode,
        writable: _lastStreamIndex,
        readable: _eventListenerIndex,
      });
      if (_lastStreamIndex) {
        eventListenerIndex._write = function (
          determineEncodingType,
          determineEncoding,
          getEncodingType,
        ) {
          if (numStreams.write(determineEncodingType, determineEncoding)) {
            getEncodingType();
          } else {
            eventListenersCounter = getEncodingType;
          }
        };
        eventListenerIndex._final = function (processEncoding) {
          numStreams.end();
          eventListenersAccumulator = processEncoding;
        };
        numStreams.on("drain", function () {
          if (eventListenersCounter) {
            let invokeEventListenersCounter = eventListenersCounter;
            eventListenersCounter = null;
            invokeEventListenersCounter();
          }
        });
        validateAndInitializeStreams.on("finish", function () {
          if (eventListenersAccumulator) {
            let executeEventListeners = eventListenersAccumulator;
            eventListenersAccumulator = null;
            executeEventListeners();
          }
        });
      }
      if (_eventListenerIndex) {
        validateAndInitializeStreams.on("readable", function () {
          if (lastFunctionIndex) {
            let executeLastFunction = lastFunctionIndex;
            lastFunctionIndex = null;
            executeLastFunction();
          }
        });
        validateAndInitializeStreams.on("end", function () {
          eventListenerIndex.push(null);
        });
        eventListenerIndex._read = function () {
          while (true) {
            let _streamData = validateAndInitializeStreams.read();
            if (_streamData === null) {
              lastFunctionIndex = eventListenerIndex._read;
              return;
            }
            if (!eventListenerIndex.push(_streamData)) {
              return;
            }
          }
        };
      }
      eventListenerIndex._destroy = function (
        StringDecoder,
        StringDecoderConstructor,
      ) {
        if (!StringDecoder && lastStreamIndex !== null) {
          StringDecoder = new _____AbortError();
        }
        lastFunctionIndex = null;
        eventListenersCounter = null;
        eventListenersAccumulator = null;
        if (lastStreamIndex === null) {
          StringDecoderConstructor(StringDecoder);
        } else {
          lastStreamIndex = StringDecoderConstructor;
          streamDestroyer(validateAndInitializeStreams, StringDecoder);
        }
      };
      return eventListenerIndex;
    };
  },
);
var bufferSize = getModuleExportsIfAbsent(
  (handlePipelineExecution, pipelineExecutor) => {
    var { ArrayPrototypePop: arrayPrototypePop, Promise: _PromiseConstructor } =
      removeHeadNode();
    var { isIterable: isIterableObject, isNodeStream: __isNodeStream } =
      isVersionIncremented();
    var { pipelineImpl: pipelineImplementation } =
      __findMostRecentBase64EncodedValue();
    var { finished: pipeFinishCallback } = findMostRecentBase64EncodedValue();
    function createPipelinePromise(..._createPipelinePromise) {
      return new _PromiseConstructor(
        (handlePipelineErrorResponse, handlePipelineError) => {
          let ___signalOptions;
          let pipelineEndOption;
          let lastPipelinePromise =
            _createPipelinePromise[_createPipelinePromise.length - 1];
          if (
            lastPipelinePromise &&
            typeof lastPipelinePromise == "object" &&
            !__isNodeStream(lastPipelinePromise) &&
            !isIterableObject(lastPipelinePromise)
          ) {
            let pipelinePromiseResult = arrayPrototypePop(
              _createPipelinePromise,
            );
            ___signalOptions = pipelinePromiseResult.signal;
            pipelineEndOption = pipelinePromiseResult.end;
          }
          pipelineImplementation(
            _createPipelinePromise,
            (pipelineError, _handlePipelineErrorResponse) => {
              if (pipelineError) {
                handlePipelineError(pipelineError);
              } else {
                handlePipelineErrorResponse(_handlePipelineErrorResponse);
              }
            },
            {
              signal: ___signalOptions,
              end: pipelineEndOption,
            },
          );
        },
      );
    }
    pipelineExecutor.exports = {
      finished: pipeFinishCallback,
      pipeline: createPipelinePromise,
    };
  },
);
var calculateRequiredBytesForEncoding = getModuleExportsIfAbsent(
  (handleStreamAndBufferOperations, ___initializeStreamModule) => {
    ____updateIntrinsicProperties();
    var { Buffer: Buffer } = createModuleExport(bufferWriteEncoding);
    var {
      ObjectDefineProperty: _ObjectDefineProperty,
      ObjectKeys: getObjectKeys,
      ReflectApply: reflectApplyFunction,
    } = removeHeadNode();
    var {
      promisify: { custom: promisifyCustomFunction },
    } = swapBufferWithNodes();
    var {
      streamReturningOperators: streamReturningOperators,
      promiseReturningOperators: promiseReturningOperators,
    } = calculateSortedBufferAndRanges();
    var {
      codes: { ERR_ILLEGAL_CONSTRUCTOR: ERR_ILLEGAL_CONSTRUCTOR },
    } = _________________________validateAndReturnIntrinsicProperty();
    var _____handleAbortOperation = _handleAbortOperation();
    var { pipeline: streamPipelineHandler } =
      __findMostRecentBase64EncodedValue();
    var { destroyer: streamDestroyerHandler } = compareAndValidateVersions();
    var findMostRecentBaseStream = findMostRecentBase64EncodedValue();
    var streamBufferHandler = bufferSize();
    var ____initializeStreamModule = isVersionIncremented();
    var _findMostRecentBaseStream = (___initializeStreamModule.exports =
      isInstanceOf().Stream);
    _findMostRecentBaseStream.isDisturbed =
      ____initializeStreamModule.isDisturbed;
    _findMostRecentBaseStream.isErrored = ____initializeStreamModule.isErrored;
    _findMostRecentBaseStream.isReadable =
      ____initializeStreamModule.isReadable;
    _findMostRecentBaseStream.Readable = getFormattedComparatorsList();
    for (let operatorKey of getObjectKeys(streamReturningOperators)) {
      let createReadableStreamFromOperator = function (...argumentsArray) {
        if (new.target) {
          throw ERR_ILLEGAL_CONSTRUCTOR();
        }
        return _findMostRecentBaseStream.Readable.from(
          reflectApplyFunction(operatorStreamFunction, this, argumentsArray),
        );
      };
      ______handleAbortOperation = createReadableStreamFromOperator;
      let operatorStreamFunction = streamReturningOperators[operatorKey];
      _ObjectDefineProperty(createReadableStreamFromOperator, "name", {
        __proto__: null,
        value: operatorStreamFunction.name,
      });
      _ObjectDefineProperty(createReadableStreamFromOperator, "length", {
        __proto__: null,
        value: operatorStreamFunction.length,
      });
      _ObjectDefineProperty(
        _findMostRecentBaseStream.Readable.prototype,
        operatorKey,
        {
          __proto__: null,
          value: createReadableStreamFromOperator,
          enumerable: false,
          configurable: true,
          writable: true,
        },
      );
    }
    var ______handleAbortOperation;
    for (let _operatorKey of getObjectKeys(promiseReturningOperators)) {
      let _______handleAbortOperation = function (...args) {
        if (new.target) {
          throw ERR_ILLEGAL_CONSTRUCTOR();
        }
        return reflectApplyFunction(abortOperationHandler, this, args);
      };
      ______handleAbortOperation = _______handleAbortOperation;
      let abortOperationHandler = promiseReturningOperators[_operatorKey];
      _ObjectDefineProperty(_______handleAbortOperation, "name", {
        __proto__: null,
        value: abortOperationHandler.name,
      });
      _ObjectDefineProperty(_______handleAbortOperation, "length", {
        __proto__: null,
        value: abortOperationHandler.length,
      });
      _ObjectDefineProperty(
        _findMostRecentBaseStream.Readable.prototype,
        _operatorKey,
        {
          __proto__: null,
          value: _______handleAbortOperation,
          enumerable: false,
          configurable: true,
          writable: true,
        },
      );
    }
    var ______handleAbortOperation;
    _findMostRecentBaseStream.Writable = removeAbortEventListener();
    _findMostRecentBaseStream.Duplex = __getEventListeners();
    _findMostRecentBaseStream.Transform = handleArrayJoinEvent();
    _findMostRecentBaseStream.PassThrough = eventEmitter();
    _findMostRecentBaseStream.pipeline = streamPipelineHandler;
    var { addAbortSignal: initializeStreamOperations } = aggregateError();
    _findMostRecentBaseStream.addAbortSignal = initializeStreamOperations;
    _findMostRecentBaseStream.finished = findMostRecentBaseStream;
    _findMostRecentBaseStream.destroy = streamDestroyerHandler;
    _findMostRecentBaseStream.compose = _____handleAbortOperation;
    _ObjectDefineProperty(_findMostRecentBaseStream, "promises", {
      __proto__: null,
      configurable: true,
      enumerable: true,
      get() {
        return streamBufferHandler;
      },
    });
    _ObjectDefineProperty(streamPipelineHandler, promisifyCustomFunction, {
      __proto__: null,
      enumerable: true,
      get() {
        return streamBufferHandler.pipeline;
      },
    });
    _ObjectDefineProperty(findMostRecentBaseStream, promisifyCustomFunction, {
      __proto__: null,
      enumerable: true,
      get() {
        return streamBufferHandler.finished;
      },
    });
    _findMostRecentBaseStream.Stream = _findMostRecentBaseStream;
    _findMostRecentBaseStream._isUint8Array = function (handleStreamErrors) {
      return handleStreamErrors instanceof Uint8Array;
    };
    _findMostRecentBaseStream._uint8ArrayToBuffer = function (
      handleStreamError,
    ) {
      return Buffer.from(
        handleStreamError.buffer,
        handleStreamError.byteOffset,
        handleStreamError.byteLength,
      );
    };
  },
);
var handleOutputStreamError = getModuleExportsIfAbsent(
  (exportStreamModule, _streamModuleExports) => {
    var outputStreamErrorHandler = handleOutputStreamError();
    {
      let streamingUtilities = calculateRequiredBytesForEncoding();
      let bufferSizeInBytes = bufferSize();
      let destroyReadableStream = streamingUtilities.Readable.destroy;
      _streamModuleExports.exports = streamingUtilities.Readable;
      _streamModuleExports.exports._uint8ArrayToBuffer =
        streamingUtilities._uint8ArrayToBuffer;
      _streamModuleExports.exports._isUint8Array =
        streamingUtilities._isUint8Array;
      _streamModuleExports.exports.isDisturbed = streamingUtilities.isDisturbed;
      _streamModuleExports.exports.isErrored = streamingUtilities.isErrored;
      _streamModuleExports.exports.isReadable = streamingUtilities.isReadable;
      _streamModuleExports.exports.Readable = streamingUtilities.Readable;
      _streamModuleExports.exports.Writable = streamingUtilities.Writable;
      _streamModuleExports.exports.Duplex = streamingUtilities.Duplex;
      _streamModuleExports.exports.Transform = streamingUtilities.Transform;
      _streamModuleExports.exports.PassThrough = streamingUtilities.PassThrough;
      _streamModuleExports.exports.addAbortSignal =
        streamingUtilities.addAbortSignal;
      _streamModuleExports.exports.finished = streamingUtilities.finished;
      _streamModuleExports.exports.destroy = streamingUtilities.destroy;
      _streamModuleExports.exports.destroy = destroyReadableStream;
      _streamModuleExports.exports.pipeline = streamingUtilities.pipeline;
      _streamModuleExports.exports.compose = streamingUtilities.compose;
      Object.defineProperty(streamingUtilities, "promises", {
        configurable: true,
        enumerable: true,
        get() {
          return bufferSizeInBytes;
        },
      });
      _streamModuleExports.exports.Stream = streamingUtilities.Stream;
    }
    _streamModuleExports.exports.default = _streamModuleExports.exports;
  },
);
var processNodeExportsLastCharHandling = defineModuleExports(isUint16Array());
var _processData = "/nodebox";
var calculateRemainingDataLength = _processData;
function getRemainingDataLength() {
  return calculateRemainingDataLength;
}
function processPathSegments(
  processAndConvertNodeExports,
  processLastCharacter,
) {
  var pathSegments = [];
  for (
    var currentExportIndex = 0;
    currentExportIndex < processAndConvertNodeExports.length;
    currentExportIndex++
  ) {
    var currentExport = processAndConvertNodeExports[currentExportIndex];
    if (!!currentExport && currentExport !== ".") {
      if (currentExport === "..") {
        if (
          pathSegments.length &&
          pathSegments[pathSegments.length - 1] !== ".."
        ) {
          pathSegments.pop();
        } else if (processLastCharacter) {
          pathSegments.push("..");
        }
      } else {
        pathSegments.push(currentExport);
      }
    }
  }
  return pathSegments;
}
var lastCacheEntryResult =
  /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
function extractCacheEntryResult(validateAndBlockCacheEntry) {
  return lastCacheEntryResult.exec(validateAndBlockCacheEntry).slice(1);
}
function resolvePath(...resolvePathComponents) {
  var resolvedPath = "";
  for (
    var isRootPathResolved = false,
      lastIndex = resolvePathComponents.length - 1;
    lastIndex >= -1 && !isRootPathResolved;
    lastIndex--
  ) {
    var resolvedPathComponent =
      lastIndex >= 0
        ? resolvePathComponents[lastIndex]
        : getRemainingDataLength();
    if (
      processNodeExportsLastCharHandling.default.isString(resolvedPathComponent)
    ) {
      if (!resolvedPathComponent) {
        continue;
      }
    } else {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    resolvedPath = resolvedPathComponent + "/" + resolvedPath;
    isRootPathResolved = resolvedPathComponent[0] === "/";
  }
  resolvedPath = processPathSegments(
    resolvedPath.split("/"),
    !isRootPathResolved,
  ).join("/");
  return (isRootPathResolved ? "/" : "") + resolvedPath || ".";
}
function isCachePathValid(validateAndReturnCache) {
  return validateAndReturnCache.charAt(0) === "/";
}
function processAndValidateCacheEntry(writeAndValidateCacheEntry) {
  var isCacheEntryValid = isCachePathValid(writeAndValidateCacheEntry);
  var isTrailingSlash =
    writeAndValidateCacheEntry &&
    writeAndValidateCacheEntry[writeAndValidateCacheEntry.length - 1] === "/";
  writeAndValidateCacheEntry = processPathSegments(
    writeAndValidateCacheEntry.split("/"),
    !isCacheEntryValid,
  ).join("/");
  if (!writeAndValidateCacheEntry && !isCacheEntryValid) {
    writeAndValidateCacheEntry = ".";
  }
  if (writeAndValidateCacheEntry && isTrailingSlash) {
    writeAndValidateCacheEntry += "/";
  }
  return (isCacheEntryValid ? "/" : "") + writeAndValidateCacheEntry;
}
function joinPathSegments(..._pathSegments) {
  var joinedPath = "";
  for (
    var pathSegmentIndex = 0;
    pathSegmentIndex < _pathSegments.length;
    pathSegmentIndex++
  ) {
    var currentPathSegment = _pathSegments[pathSegmentIndex];
    if (
      !processNodeExportsLastCharHandling.default.isString(currentPathSegment)
    ) {
      throw new TypeError("Arguments to path.join must be strings");
    }
    if (currentPathSegment) {
      if (joinedPath) {
        joinedPath += "/" + currentPathSegment;
      } else {
        joinedPath += currentPathSegment;
      }
    }
  }
  return processAndValidateCacheEntry(joinedPath);
}
function validateAndFormatNodeRemoval(validateNodeRemoval) {
  var formattedNodeRemoval = extractCacheEntryResult(validateNodeRemoval);
  var isRemovalValid = formattedNodeRemoval[0];
  var formattedNodeRemovalMessage = formattedNodeRemoval[1];
  if (!isRemovalValid && !formattedNodeRemovalMessage) {
    return ".";
  } else {
    formattedNodeRemovalMessage &&= formattedNodeRemovalMessage.substr(
      0,
      formattedNodeRemovalMessage.length - 1,
    );
    return isRemovalValid + formattedNodeRemovalMessage;
  }
}
var validateNodeRemovalParams = defineModuleExports(
  ____validateAndReturnIntrinsicProperty(),
);
var _validateNodeRemovalParameters = Object.create;
var __validateNodeRemovalParameters = Object.defineProperty;
var ___validateNodeRemovalParameters = Object.getOwnPropertyDescriptor;
var _validateNodeRemovalParams = Object.getOwnPropertyNames;
var booleanEpsilonCheck = Object.getPrototypeOf;
var isBufferOrString = Object.prototype.hasOwnProperty;
var createReadableStreamFromValue = (
  updateOrAddNode,
  _nodeKey,
  nodeValueToUpdate,
) =>
  _nodeKey in updateOrAddNode
    ? __validateNodeRemovalParameters(updateOrAddNode, _nodeKey, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: nodeValueToUpdate,
      })
    : (updateOrAddNode[_nodeKey] = nodeValueToUpdate);
var createReadStreamFromInput = (initializeNodeRemoval, _nodeRemovalFunction) =>
  function () {
    if (!_nodeRemovalFunction) {
      (0,
      initializeNodeRemoval[
        _validateNodeRemovalParams(initializeNodeRemoval)[0]
      ])(
        (_nodeRemovalFunction = {
          exports: {},
        }).exports,
        _nodeRemovalFunction,
      );
    }
    return _nodeRemovalFunction.exports;
  };
var getValidatedRange = (
  _validateNodeRemoval,
  ____validateNodeRemovalParameters,
  nodeToRemove,
  __validateNodeRemoval,
) => {
  if (
    (____validateNodeRemovalParameters &&
      typeof ____validateNodeRemovalParameters == "object") ||
    typeof ____validateNodeRemovalParameters == "function"
  ) {
    for (let nodeParam of _validateNodeRemovalParams(
      ____validateNodeRemovalParameters,
    )) {
      if (
        !isBufferOrString.call(_validateNodeRemoval, nodeParam) &&
        nodeParam !== nodeToRemove
      ) {
        __validateNodeRemovalParameters(_validateNodeRemoval, nodeParam, {
          get: () => ____validateNodeRemovalParameters[nodeParam],
          enumerable:
            !(__validateNodeRemoval = ___validateNodeRemovalParameters(
              ____validateNodeRemovalParameters,
              nodeParam,
            )) || __validateNodeRemoval.enumerable,
        });
      }
    }
  }
  return _validateNodeRemoval;
};
var isIntegerInRange = (
  nodeRemovalParams,
  validatedRemovalParameters,
  validatedNodeRemovalParams,
) => {
  if (nodeRemovalParams != null) {
    validatedNodeRemovalParams = _validateNodeRemovalParameters(
      booleanEpsilonCheck(nodeRemovalParams),
    );
  } else {
    validatedNodeRemovalParams = {};
  }
  return getValidatedRange(
    validatedRemovalParameters ||
      !nodeRemovalParams ||
      !nodeRemovalParams.__esModule
      ? __validateNodeRemovalParameters(validatedNodeRemovalParams, "default", {
          value: nodeRemovalParams,
          enumerable: true,
        })
      : validatedNodeRemovalParams,
    nodeRemovalParams,
  );
};
var validateIntegerInRangeHandler = (
  _createReadableStreamFromValue,
  valueToReadableStream,
  _streamOptions,
) => {
  createReadableStreamFromValue(
    _createReadableStreamFromValue,
    typeof valueToReadableStream != "symbol"
      ? valueToReadableStream + ""
      : valueToReadableStream,
    _streamOptions,
  );
  return _streamOptions;
};
var validateAndThrowScalar = (
  checkIfElementExistsAndThrow,
  checkAndThrowIfElementMissing,
  errorMessageForMissingElement,
) => {
  if (!checkAndThrowIfElementMissing.has(checkIfElementExistsAndThrow)) {
    throw TypeError("Cannot " + errorMessageForMissingElement);
  }
};
var validateAndReturnInteger = (
  validateAndRetrieval,
  fieldRetrievalOrExecutor,
  privateFieldAccessor,
) => {
  validateAndThrowScalar(
    validateAndRetrieval,
    fieldRetrievalOrExecutor,
    "read from private field",
  );
  if (privateFieldAccessor) {
    return privateFieldAccessor.call(validateAndRetrieval);
  } else {
    return fieldRetrievalOrExecutor.get(validateAndRetrieval);
  }
};
var handleAsyncProcess = (
  addPrivateMember,
  addPrivateMemberToSet,
  privateMemberValue,
) => {
  if (addPrivateMemberToSet.has(addPrivateMember)) {
    throw TypeError("Cannot add the same private member more than once");
  }
  if (addPrivateMemberToSet instanceof WeakSet) {
    addPrivateMemberToSet.add(addPrivateMember);
  } else {
    addPrivateMemberToSet.set(addPrivateMember, privateMemberValue);
  }
};
var registerValidationForNumberRange = (
  handlePrivateFieldWrite,
  privateFieldValue,
  privateFieldValueToSet,
  setPrivateField,
) => {
  validateAndThrowScalar(
    handlePrivateFieldWrite,
    privateFieldValue,
    "write to private field",
  );
  if (setPrivateField) {
    setPrivateField.call(handlePrivateFieldWrite, privateFieldValueToSet);
  } else {
    privateFieldValue.set(handlePrivateFieldWrite, privateFieldValueToSet);
  }
  return privateFieldValueToSet;
};
var processAsyncGenerator = (
  accessPrivateMethod,
  validateAccessToPrivateMethod,
  retrieveAccessPrivateMethod,
) => {
  validateAndThrowScalar(
    accessPrivateMethod,
    validateAccessToPrivateMethod,
    "access private method",
  );
  return retrieveAccessPrivateMethod;
};
var validateIntegerRangeAndReturnValue = createReadStreamFromInput({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js"(
    padProcessValue,
    _padProcessValue,
  ) {
    _padProcessValue.exports = function (
      processNextValue,
      asyncIteratorHandler,
    ) {
      var paddedValue = "000000000" + processNextValue;
      return paddedValue.substr(paddedValue.length - asyncIteratorHandler);
    };
  },
});
var fetchAsyncData = createReadStreamFromInput({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js"(
    generateFingerprint,
    generateBrowserFingerprint,
  ) {
    var getValidatedFingerprint = validateIntegerRangeAndReturnValue();
    var _globalScope = typeof window == "object" ? window : self;
    var globalVariableCount = Object.keys(_globalScope).length;
    var mimeTypesCount = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var browserFingerprint = getValidatedFingerprint(
      (mimeTypesCount + navigator.userAgent.length).toString(36) +
        globalVariableCount.toString(36),
      4,
    );
    generateBrowserFingerprint.exports = function () {
      return browserFingerprint;
    };
  },
});
var _getFormattedComparatorsList = createReadStreamFromInput({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js"(
    getRandomValue,
    _getRandomValue,
  ) {
    var __getRandomValue;
    var isCryptoAvailable =
      (typeof window !== "undefined" && (window.crypto || window.msCrypto)) ||
      (typeof self !== "undefined" && self.crypto);
    if (isCryptoAvailable) {
      MAX_RANDOM_VALUE = Math.pow(2, 32) - 1;
      __getRandomValue = function () {
        return Math.abs(
          isCryptoAvailable.getRandomValues(new Uint32Array(1))[0] /
            MAX_RANDOM_VALUE,
        );
      };
    } else {
      __getRandomValue = Math.random;
    }
    var MAX_RANDOM_VALUE;
    _getRandomValue.exports = __getRandomValue;
  },
});
var retrieveBase64EncodedValue = createReadStreamFromInput({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js"(
    _generateUniqueSlug,
    __generateUniqueSlug,
  ) {
    var fetchInitialData = fetchAsyncData();
    var _validateAndReturnInteger = validateIntegerRangeAndReturnValue();
    var __getFormattedComparatorsList = _getFormattedComparatorsList();
    var uniqueCounter = 0;
    var uniqueSlugLength = 4;
    var base36 = 36;
    var maxUniqueSlugValue = Math.pow(base36, uniqueSlugLength);
    function getUniqueSlug() {
      return _validateAndReturnInteger(
        ((__getFormattedComparatorsList() * maxUniqueSlugValue) << 0).toString(
          base36,
        ),
        uniqueSlugLength,
      );
    }
    function getUniqueSlugIndex() {
      if (uniqueCounter < maxUniqueSlugValue) {
        uniqueCounter = uniqueCounter;
      } else {
        uniqueCounter = 0;
      }
      uniqueCounter++;
      return uniqueCounter - 1;
    }
    function generateUniqueIdentifier() {
      var uniqueIdentifierPrefix = "c";
      var uniqueIdentifierTimestamp = new Date().getTime().toString(base36);
      var validatedIdentifier = _validateAndReturnInteger(
        getUniqueSlugIndex().toString(base36),
        uniqueSlugLength,
      );
      var initialData = fetchInitialData();
      var combinedHash = getUniqueSlug() + getUniqueSlug();
      return (
        uniqueIdentifierPrefix +
        uniqueIdentifierTimestamp +
        validatedIdentifier +
        initialData +
        combinedHash
      );
    }
    generateUniqueIdentifier.slug = function () {
      var generateUniqueId = new Date().getTime().toString(36);
      var generatedUniqueSuffix = getUniqueSlugIndex().toString(36).slice(-4);
      var uniqueIdBoundary =
        fetchInitialData().slice(0, 1) + fetchInitialData().slice(-1);
      var uniqueIdentifierSuffix = getUniqueSlug().slice(-2);
      return (
        generateUniqueId.slice(-2) +
        generatedUniqueSuffix +
        uniqueIdBoundary +
        uniqueIdentifierSuffix
      );
    };
    generateUniqueIdentifier.isCuid = function (
      validateAndReturnIntrinsicProperties,
    ) {
      if (typeof validateAndReturnIntrinsicProperties != "string") {
        return false;
      } else {
        return !!validateAndReturnIntrinsicProperties.startsWith("c");
      }
    };
    generateUniqueIdentifier.isSlug = function (processNodeData) {
      if (typeof processNodeData != "string") {
        return false;
      }
      var nodeDataLength = processNodeData.length;
      return nodeDataLength >= 7 && nodeDataLength <= 10;
    };
    generateUniqueIdentifier.fingerprint = fetchInitialData;
    __generateUniqueSlug.exports = generateUniqueIdentifier;
  },
});
var initializeBufferStream = createReadStreamFromInput({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js"(
    deferredPromiseExecutorModule,
  ) {
    "use strict";

    Object.defineProperty(deferredPromiseExecutorModule, "__esModule", {
      value: true,
    });
    deferredPromiseExecutorModule.createDeferredExecutor = undefined;
    function createPromiseHandler() {
      let _createPromiseHandler = (__createPromiseHandler, _promiseHandler) => {
        _createPromiseHandler.state = "pending";
        _createPromiseHandler.resolve = (handlePromiseResolution) => {
          if (_createPromiseHandler.state !== "pending") {
            return;
          }
          _createPromiseHandler.result = handlePromiseResolution;
          let resolvePromiseHandler = (_handlePromiseFulfillment) => {
            _createPromiseHandler.state = "fulfilled";
            return _handlePromiseFulfillment;
          };
          return __createPromiseHandler(
            handlePromiseResolution instanceof Promise
              ? handlePromiseResolution
              : Promise.resolve(handlePromiseResolution).then(
                  resolvePromiseHandler,
                ),
          );
        };
        _createPromiseHandler.reject = (handleRejectionReason) => {
          if (_createPromiseHandler.state === "pending") {
            queueMicrotask(() => {
              _createPromiseHandler.state = "rejected";
            });
            return _promiseHandler(
              (_createPromiseHandler.rejectionReason = handleRejectionReason),
            );
          }
        };
      };
      return _createPromiseHandler;
    }
    deferredPromiseExecutorModule.createDeferredExecutor = createPromiseHandler;
  },
});
var bufferValidation = createReadStreamFromInput({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js"(
    DeferredPromiseModule,
  ) {
    "use strict";

    Object.defineProperty(DeferredPromiseModule, "__esModule", {
      value: true,
    });
    DeferredPromiseModule.DeferredPromise = undefined;
    var deferredPromiseBufferStream = initializeBufferStream();
    var _DeferredPromise = class extends Promise {
      #e;
      resolve;
      reject;
      constructor(databaseConnection = null) {
        let deferredExecutor = (0,
        deferredPromiseBufferStream.createDeferredExecutor)();
        super((executeDeferredTask, executeAndResolveDeferredTask) => {
          deferredExecutor(executeDeferredTask, executeAndResolveDeferredTask);
          databaseConnection?.(
            deferredExecutor.resolve,
            deferredExecutor.reject,
          );
        });
        this.#e = deferredExecutor;
        this.resolve = this.#e.resolve;
        this.reject = this.#e.reject;
      }
      get state() {
        return this.#e.state;
      }
      get rejectionReason() {
        return this.#e.rejectionReason;
      }
      then(processPromiseResolution, successHandler) {
        return this.#t(super.then(processPromiseResolution, successHandler));
      }
      catch(catchError) {
        return this.#t(super.catch(catchError));
      }
      finally(handleFinally) {
        return this.#t(super.finally(handleFinally));
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
    DeferredPromiseModule.DeferredPromise = _DeferredPromise;
  },
});
var isSignalValid = createReadStreamFromInput({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js"(
    moduleExports,
  ) {
    "use strict";

    var ___createBinding =
      (moduleExports && moduleExports.__createBinding) ||
      (Object.create
        ? function (
            handleReadableChunk,
            processReadableChunk,
            handleReadableState,
            ____handleReadableState = handleReadableState,
          ) {
            var ___propertyDescriptor = Object.getOwnPropertyDescriptor(
              processReadableChunk,
              handleReadableState,
            );
            if (
              !___propertyDescriptor ||
              ("get" in ___propertyDescriptor
                ? !processReadableChunk.__esModule
                : ___propertyDescriptor.writable ||
                  ___propertyDescriptor.configurable)
            ) {
              ___propertyDescriptor = {
                enumerable: true,
                get() {
                  return processReadableChunk[handleReadableState];
                },
              };
            }
            Object.defineProperty(
              handleReadableChunk,
              ____handleReadableState,
              ___propertyDescriptor,
            );
          }
        : function (
            handleTimeoutOperations,
            _handleTimeoutOperations,
            handleTimeoutOperation,
            _handleTimeoutOperation = handleTimeoutOperation,
          ) {
            handleTimeoutOperations[_handleTimeoutOperation] =
              _handleTimeoutOperations[handleTimeoutOperation];
          });
    var deferredPromise =
      (moduleExports && moduleExports.__exportStar) ||
      function (handleStreamTimeouts, __handleTimeoutOperations) {
        for (var timeoutOperationKey in handleStreamTimeouts) {
          if (
            timeoutOperationKey !== "default" &&
            !Object.prototype.hasOwnProperty.call(
              __handleTimeoutOperations,
              timeoutOperationKey,
            )
          ) {
            ___createBinding(
              __handleTimeoutOperations,
              handleStreamTimeouts,
              timeoutOperationKey,
            );
          }
        }
      };
    Object.defineProperty(moduleExports, "__esModule", {
      value: true,
    });
    deferredPromise(initializeBufferStream(), moduleExports);
    deferredPromise(bufferValidation(), moduleExports);
  },
});
var setLogEncoding = createReadStreamFromInput({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js"(
    MemoryLeakErrorModule,
  ) {
    "use strict";

    Object.defineProperty(MemoryLeakErrorModule, "__esModule", {
      value: true,
    });
    MemoryLeakErrorModule.MemoryLeakError = undefined;
    var MemoryLeakError = class extends Error {
      emitter;
      type;
      count;
      constructor(
        emitterMaxListenersExceededWarning,
        _maxListenersExceededWarning,
        listenerCount,
      ) {
        super(
          "Possible EventEmitter memory leak detected. " +
            listenerCount +
            " " +
            _maxListenersExceededWarning.toString() +
            " listeners added. Use emitter.setMaxListeners() to increase limit",
        );
        this.emitter = emitterMaxListenersExceededWarning;
        this.type = _maxListenersExceededWarning;
        this.count = listenerCount;
        this.name = "MaxListenersExceededWarning";
      }
    };
    MemoryLeakErrorModule.MemoryLeakError = MemoryLeakError;
  },
});
var handleLogAndExecutionTimeout = createReadStreamFromInput({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js"(
    StrictEventEmitter,
  ) {
    "use strict";

    Object.defineProperty(StrictEventEmitter, "__esModule", {
      value: true,
    });
    StrictEventEmitter.Emitter = undefined;
    var logEncoding = setLogEncoding();
    var eventEmitterInstance;
    var eventEmitterCallback;
    var asyncProcessHandler;
    var asyncProcessQueue;
    var asyncProcessHandlerForEvent;
    var asyncEventHandler;
    var asyncProcessHandlerForCallback;
    var asyncDataHandler;
    var eventEmitterErrorHandler;
    var asyncProcessHandlerForEmitter;
    var asyncEventHandlerCallback;
    var AsyncEventProcessor = class {
      constructor() {
        handleAsyncProcess(this, asyncProcessQueue);
        handleAsyncProcess(this, asyncEventHandler);
        handleAsyncProcess(this, asyncDataHandler);
        handleAsyncProcess(this, asyncProcessHandlerForEmitter);
        handleAsyncProcess(this, eventEmitterInstance, undefined);
        handleAsyncProcess(this, eventEmitterCallback, undefined);
        handleAsyncProcess(this, asyncProcessHandler, undefined);
        registerValidationForNumberRange(this, eventEmitterInstance, new Map());
        registerValidationForNumberRange(
          this,
          eventEmitterCallback,
          AsyncEventProcessor.defaultMaxListeners,
        );
        registerValidationForNumberRange(this, asyncProcessHandler, false);
      }
      static listenerCount(_getListenerCount, listenerIdentifier) {
        return _getListenerCount.listenerCount(listenerIdentifier);
      }
      setMaxListeners(setMaxListenersForRangeValidation) {
        registerValidationForNumberRange(
          this,
          eventEmitterCallback,
          setMaxListenersForRangeValidation,
        );
        return this;
      }
      getMaxListeners() {
        return validateAndReturnInteger(this, eventEmitterCallback);
      }
      eventNames() {
        return Array.from(
          validateAndReturnInteger(this, eventEmitterInstance).keys(),
        );
      }
      emit(_eventHandler, ...eventArguments) {
        let asyncProcessResults = processAsyncGenerator(
          this,
          asyncProcessQueue,
          asyncProcessHandlerForEvent,
        ).call(this, _eventHandler);
        asyncProcessResults.forEach((applyEventArguments) => {
          applyEventArguments.apply(this, eventArguments);
        });
        return asyncProcessResults.length > 0;
      }
      addListener(eventName, eventListenerCallback) {
        processAsyncGenerator(
          this,
          asyncProcessHandlerForEmitter,
          asyncEventHandlerCallback,
        ).call(this, "newListener", eventName, eventListenerCallback);
        let eventListenersQueue = processAsyncGenerator(
          this,
          asyncProcessQueue,
          asyncProcessHandlerForEvent,
        )
          .call(this, eventName)
          .concat(eventListenerCallback);
        validateAndReturnInteger(this, eventEmitterInstance).set(
          eventName,
          eventListenersQueue,
        );
        if (
          validateAndReturnInteger(this, eventEmitterCallback) > 0 &&
          this.listenerCount(eventName) >
            validateAndReturnInteger(this, eventEmitterCallback) &&
          !validateAndReturnInteger(this, asyncProcessHandler)
        ) {
          registerValidationForNumberRange(this, asyncProcessHandler, true);
          let memoryLeakError = new logEncoding.MemoryLeakError(
            this,
            eventName,
            this.listenerCount(eventName),
          );
          console.warn(memoryLeakError);
        }
        return this;
      }
      on(_addEventListener, _eventListenerCallback) {
        return this.addListener(_addEventListener, _eventListenerCallback);
      }
      once(addAsyncListenerOnce, eventListenerIdentifier) {
        return this.addListener(
          addAsyncListenerOnce,
          processAsyncGenerator(
            this,
            asyncDataHandler,
            eventEmitterErrorHandler,
          ).call(this, addAsyncListenerOnce, eventListenerIdentifier),
        );
      }
      prependListener(eventHandler, defaultHandler) {
        let asyncEventHandlers = processAsyncGenerator(
          this,
          asyncProcessQueue,
          asyncProcessHandlerForEvent,
        ).call(this, eventHandler);
        if (asyncEventHandlers.length > 0) {
          let combinedEventHandlers = [defaultHandler].concat(
            asyncEventHandlers,
          );
          validateAndReturnInteger(this, eventEmitterInstance).set(
            eventHandler,
            combinedEventHandlers,
          );
        } else {
          validateAndReturnInteger(this, eventEmitterInstance).set(
            eventHandler,
            asyncEventHandlers.concat(defaultHandler),
          );
        }
        return this;
      }
      prependOnceListener(prependAsyncEventListener, prependAsyncDataHandler) {
        return this.prependListener(
          prependAsyncEventListener,
          processAsyncGenerator(
            this,
            asyncDataHandler,
            eventEmitterErrorHandler,
          ).call(this, prependAsyncEventListener, prependAsyncDataHandler),
        );
      }
      removeListener(_removeEventListener, ___eventListener) {
        let removedListeners = processAsyncGenerator(
          this,
          asyncProcessQueue,
          asyncProcessHandlerForEvent,
        ).call(this, _removeEventListener);
        if (removedListeners.length > 0) {
          processAsyncGenerator(
            this,
            asyncEventHandler,
            asyncProcessHandlerForCallback,
          ).call(this, removedListeners, ___eventListener);
          validateAndReturnInteger(this, eventEmitterInstance).set(
            _removeEventListener,
            removedListeners,
          );
          processAsyncGenerator(
            this,
            asyncProcessHandlerForEmitter,
            asyncEventHandlerCallback,
          ).call(
            this,
            "removeListener",
            _removeEventListener,
            ___eventListener,
          );
        }
        return this;
      }
      off(__removeEventListener, ____eventListener) {
        return this.removeListener(__removeEventListener, ____eventListener);
      }
      removeAllListeners(removeEventListenerById) {
        if (removeEventListenerById) {
          validateAndReturnInteger(this, eventEmitterInstance).delete(
            removeEventListenerById,
          );
        } else {
          validateAndReturnInteger(this, eventEmitterInstance).clear();
        }
        return this;
      }
      listeners(eventListenerConfig) {
        return Array.from(
          processAsyncGenerator(
            this,
            asyncProcessQueue,
            asyncProcessHandlerForEvent,
          ).call(this, eventListenerConfig),
        );
      }
      listenerCount(eventQueueCount) {
        return processAsyncGenerator(
          this,
          asyncProcessQueue,
          asyncProcessHandlerForEvent,
        ).call(this, eventQueueCount).length;
      }
      rawListeners(getRawListeners) {
        return this.listeners(getRawListeners);
      }
    };
    var handleAsyncEventProcessing = AsyncEventProcessor;
    eventEmitterInstance = new WeakMap();
    eventEmitterCallback = new WeakMap();
    asyncProcessHandler = new WeakMap();
    asyncProcessQueue = new WeakSet();
    asyncProcessHandlerForEvent = function (validateAndUpdateVersion) {
      return (
        validateAndReturnInteger(this, eventEmitterInstance).get(
          validateAndUpdateVersion,
        ) || []
      );
    };
    asyncEventHandler = new WeakSet();
    asyncProcessHandlerForCallback = function (
      updateVersionCounter,
      getVersionedIncrement,
    ) {
      let indexOfVersionedIncrement = updateVersionCounter.indexOf(
        getVersionedIncrement,
      );
      if (indexOfVersionedIncrement > -1) {
        updateVersionCounter.splice(indexOfVersionedIncrement, 1);
      }
      return [];
    };
    asyncDataHandler = new WeakSet();
    eventEmitterErrorHandler = function (
      calculateIncrementedValue,
      calculateReadLength,
    ) {
      let handleIncrementedValue = (...eventData) => {
        this.removeListener(calculateIncrementedValue, handleIncrementedValue);
        calculateReadLength.apply(this, eventData);
      };
      return handleIncrementedValue;
    };
    asyncProcessHandlerForEmitter = new WeakSet();
    asyncEventHandlerCallback = function (
      getVersionIncrement,
      checkAndReturnBufferLength,
      _calculateBufferLength,
    ) {
      this.emit(
        getVersionIncrement,
        checkAndReturnBufferLength,
        _calculateBufferLength,
      );
    };
    validateIntegerInRangeHandler(
      handleAsyncEventProcessing,
      "defaultMaxListeners",
      10,
    );
    StrictEventEmitter.Emitter = handleAsyncEventProcessing;
  },
});
var readableStreamReadLimit = createReadStreamFromInput({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js"(
    isESModuleCompatible,
  ) {
    "use strict";

    var ____createBinding =
      (isESModuleCompatible && isESModuleCompatible.__createBinding) ||
      (Object.create
        ? function (
            checkVersionIncrementedLength,
            _checkVersionIncremented,
            checkVersionIncrementedCount,
            _checkVersionIncrementedCount = checkVersionIncrementedCount,
          ) {
            var ____propertyDescriptor = Object.getOwnPropertyDescriptor(
              _checkVersionIncremented,
              checkVersionIncrementedCount,
            );
            if (
              !____propertyDescriptor ||
              ("get" in ____propertyDescriptor
                ? !_checkVersionIncremented.__esModule
                : ____propertyDescriptor.writable ||
                  ____propertyDescriptor.configurable)
            ) {
              ____propertyDescriptor = {
                enumerable: true,
                get() {
                  return _checkVersionIncremented[checkVersionIncrementedCount];
                },
              };
            }
            Object.defineProperty(
              checkVersionIncrementedLength,
              _checkVersionIncrementedCount,
              ____propertyDescriptor,
            );
          }
        : function (
            checkVersionRangeValidity,
            validVersionRange,
            validateVersionRange,
            _validateVersionRange = validateVersionRange,
          ) {
            checkVersionRangeValidity[_validateVersionRange] =
              validVersionRange[validateVersionRange];
          });
    var _____createBinding =
      (isESModuleCompatible && isESModuleCompatible.__exportStar) ||
      function (isVersionRangeValid, requestedDataSize) {
        for (var versionRangeKey in isVersionRangeValid) {
          if (
            versionRangeKey !== "default" &&
            !Object.prototype.hasOwnProperty.call(
              requestedDataSize,
              versionRangeKey,
            )
          ) {
            ____createBinding(
              requestedDataSize,
              isVersionRangeValid,
              versionRangeKey,
            );
          }
        }
      };
    Object.defineProperty(isESModuleCompatible, "__esModule", {
      value: true,
    });
    _____createBinding(handleLogAndExecutionTimeout(), isESModuleCompatible);
    _____createBinding(setLogEncoding(), isESModuleCompatible);
  },
});
var isReadableStream = isIntegerInRange(retrieveBase64EncodedValue());
var isReadyForRead = /(%?)(%([sdjo]))/g;
function processEmitReadable(shouldEmitReadable, checkReadabilityAndEmit) {
  switch (checkReadabilityAndEmit) {
    case "s":
      return shouldEmitReadable;
    case "d":
    case "i":
      return Number(shouldEmitReadable);
    case "j":
      return JSON.stringify(shouldEmitReadable);
    case "o": {
      if (typeof shouldEmitReadable == "string") {
        return shouldEmitReadable;
      }
      let serializedShouldEmitReadable = JSON.stringify(shouldEmitReadable);
      if (
        serializedShouldEmitReadable === "{}" ||
        serializedShouldEmitReadable === "[]" ||
        /^\[object .+?\]$/.test(serializedShouldEmitReadable)
      ) {
        return shouldEmitReadable;
      } else {
        return serializedShouldEmitReadable;
      }
    }
  }
}
function processAndTransformStream(checkAndReadStream, ...replacementValues) {
  if (replacementValues.length === 0) {
    return checkAndReadStream;
  }
  let currentReplacementIndex = 0;
  let transformedStream = checkAndReadStream.replace(
    isReadyForRead,
    (
      processReplacementValue,
      shouldReturnProcessReplacementValue,
      getReplacementValue,
      replacementValueProcessor,
    ) => {
      let currentReplacementValue = replacementValues[currentReplacementIndex];
      let processedReplacementValue = processEmitReadable(
        currentReplacementValue,
        replacementValueProcessor,
      );
      if (shouldReturnProcessReplacementValue) {
        return processReplacementValue;
      } else {
        currentReplacementIndex++;
        return processedReplacementValue;
      }
    },
  );
  if (currentReplacementIndex < replacementValues.length) {
    transformedStream +=
      " " + replacementValues.slice(currentReplacementIndex).join(" ");
  }
  transformedStream = transformedStream.replace(/%{2,2}/g, "%");
  return transformedStream;
}
var versionRangeAdjustment = 2;
function adjustProcessBufferStack(processBufferReadings) {
  if (!processBufferReadings.stack) {
    return;
  }
  let splitStackLines = processBufferReadings.stack.split("\n");
  splitStackLines.splice(1, versionRangeAdjustment);
  processBufferReadings.stack = splitStackLines.join("\n");
}
var processReadableData = class extends Error {
  constructor(initialMessage, ...transformAndProcessStream) {
    super(initialMessage);
    this.message = initialMessage;
    this.name = "Invariant Violation";
    this.message = processAndTransformStream(
      initialMessage,
      ...transformAndProcessStream,
    );
    adjustProcessBufferStack(this);
  }
};
var bufferedData = (validateProcessData, _errorCode, ...errorParameters) => {
  if (!validateProcessData) {
    throw new processReadableData(_errorCode, ...errorParameters);
  }
};
bufferedData.as = (
  processAndTransformWithErrorHandling,
  isTransformationRequired,
  inputDataStream,
  ...transformationOptions
) => {
  if (!isTransformationRequired) {
    throw processAndTransformWithErrorHandling.prototype.name != null
      ? new processAndTransformWithErrorHandling(
          processAndTransformStream(inputDataStream, transformationOptions),
        )
      : processAndTransformWithErrorHandling(
          processAndTransformStream(inputDataStream, transformationOptions),
        );
  }
};
var clearWriters = isIntegerInRange(isSignalValid());
var setAwaitDrainWriters = window.localStorage.CSB_EMULATOR_DEBUG;
var handleDataEmission = "[0m";
var isEndOfStreamChunk = "[32;1m";
var onEndOfChunk = "[31m";
var isWritableStreamEnded = "[34m";
var handleEndOfFileChunk = "[33;1m";
var isDataEmitted = "[35;1m";
var checkForEndedState = "[36;1m";
var _handleDataEmission = {
  preview: handleEndOfFileChunk,
  emulator: isDataEmitted,
  runtime: checkForEndedState,
  bridge: isWritableStreamEnded,
  "runtime:worker": checkForEndedState,
};
function logDataEmission(onEndOfChunkProcess) {
  return function (finalizeWritableState, ...extraArguments) {
    let getDataChunkType = () =>
      finalizeWritableState.includes("sender")
        ? isEndOfStreamChunk + "sender"
        : finalizeWritableState.includes("receiver")
          ? onEndOfChunk + "receiver"
          : "";
    let cleanedFinalizableState = finalizeWritableState.replace(/\[.+\]:/, "");
    console.debug(
      "" +
        _handleDataEmission[onEndOfChunkProcess] +
        onEndOfChunkProcess +
        ":" +
        getDataChunkType() +
        handleDataEmission +
        ":" +
        cleanedFinalizableState,
      ...extraArguments,
    );
  };
}
var updateWritableState = logDataEmission("emulator");
var isWritableStateModified = class {
  emitter;
  senderPort = null;
  constructor() {
    this.emitter = new EventTarget();
    this.waitForHandshake();
  }
  waitForHandshake() {
    let deferredHandshakePromise = new clearWriters.DeferredPromise();
    let handleHandshakeMessage = (handleMessageReceiver) => {
      let { data: messageData } = handleMessageReceiver;
      updateWritableState(
        "[message-receiver]: incoming",
        handleMessageReceiver,
      );
      if (messageData.type === "internal/handshake") {
        bufferedData(
          handleMessageReceiver.ports.length > 0,
          "Failed to confirm a MessageReceiver handshake: received event has no ports",
        );
        this.senderPort = handleMessageReceiver.ports[0];
        this.addMessageListener();
        updateWritableState(
          "[message-receiver]: handshake received!",
          this.senderPort,
        );
        this.send("internal/handshake/done");
        updateWritableState("[message-receiver]: finish handshake");
      }
    };
    window.addEventListener("message", handleHandshakeMessage);
    deferredHandshakePromise.then(() => {
      window.removeEventListener("message", handleHandshakeMessage);
    });
    window.parent.postMessage(
      {
        type: "internal/ready",
      },
      "*",
    );
    return deferredHandshakePromise;
  }
  addMessageListener() {
    bufferedData(
      this.senderPort,
      "[MessageReceiver] Failed to add a message listener: sender port is not defined. Did you forget to await a handshake?",
    );
    this.senderPort.onmessage = (dispatchMessageEvent) => {
      let __messageData = dispatchMessageEvent.data;
      if (__messageData.type != null) {
        this.emitter.dispatchEvent(
          new MessageEvent(__messageData.type, {
            data: __messageData.payload,
          }),
        );
      }
    };
  }
  on(addMessageEventListener, _handleMessageEvent, messageEventType) {
    this.emitter.addEventListener(
      addMessageEventListener,
      async (__handleMessageEvent) => {
        if (!(__handleMessageEvent instanceof MessageEvent)) {
          return;
        }
        let { operationId: operationId, payload: listenerPayload } =
          __handleMessageEvent.data;
        try {
          let processedMessage = await _handleMessageEvent(listenerPayload);
          this.send("internal/operation/done", {
            operationId: operationId,
            listenerPayload: processedMessage,
          });
        } catch (error) {
          if (error instanceof Error) {
            this.send("internal/operation/failed", {
              operationId: operationId,
              error: error,
            });
          }
        }
      },
      messageEventType,
    );
  }
  send(_messageType, ..._messagePayload) {
    bufferedData(
      this.senderPort,
      '[MessageReceiver] Failed to send a message "%j": sender port is not defined. Did you forget to await a handshake?',
      _messageType,
    );
    let __messagePayload = _messagePayload[0] || {};
    updateWritableState(
      '[message-receiver]: send "%s"',
      _messageType,
      __messagePayload,
    );
    this.senderPort.postMessage({
      type: _messageType,
      payload: __messagePayload,
    });
  }
};
var _isTestComparatorWritable = isIntegerInRange(isSignalValid());
var isAwaitingDrain = isIntegerInRange(retrieveBase64EncodedValue());
var handleUnpipeEvent = isIntegerInRange(readableStreamReadLimit());
var handleUnpipeEvents = isIntegerInRange(isSignalValid());
var handlePipeEnd = logDataEmission("emulator");
var _handleUnpipeEvent = defineModuleExports(
  ____validateAndReturnIntrinsicProperty(),
);
var logPipeCount = 4294967295;
function handleUnpipeAndStreamEnd(
  __handleUnpipeEvent,
  handleWritableStreamEnd,
  _handleWritableStreamEnd,
) {
  var writableStreamEndInSeconds = _handleWritableStreamEnd / 4294967296;
  var handleWritableStreamEndValue = _handleWritableStreamEnd;
  __handleUnpipeEvent.setUint32(
    handleWritableStreamEnd,
    writableStreamEndInSeconds,
  );
  __handleUnpipeEvent.setUint32(
    handleWritableStreamEnd + 4,
    handleWritableStreamEndValue,
  );
}
function handleWritableStreamEndEvent(
  isWritableAndTestEnabled,
  __handleWritableStreamEnd,
  ___handleUnpipeEvent,
) {
  var unpipeEventHighBits = Math.floor(___handleUnpipeEvent / 4294967296);
  var unpipeEventLowBits = ___handleUnpipeEvent;
  isWritableAndTestEnabled.setUint32(
    __handleWritableStreamEnd,
    unpipeEventHighBits,
  );
  isWritableAndTestEnabled.setUint32(
    __handleWritableStreamEnd + 4,
    unpipeEventLowBits,
  );
}
function getLargeIntegerFromBuffer(cleanupOnUnpipe, cleanupAndRemoveListeners) {
  var _getLargeIntegerFromBuffer = cleanupOnUnpipe.getInt32(
    cleanupAndRemoveListeners,
  );
  var highOrderBits = cleanupOnUnpipe.getUint32(cleanupAndRemoveListeners + 4);
  return _getLargeIntegerFromBuffer * 4294967296 + highOrderBits;
}
function calculateStreamOffset(cleanupUnpipeListeners, ____handleUnpipeEvent) {
  var readStreamOffset = cleanupUnpipeListeners.getUint32(
    ____handleUnpipeEvent,
  );
  var unpipeEventOffset = cleanupUnpipeListeners.getUint32(
    ____handleUnpipeEvent + 4,
  );
  return readStreamOffset * 4294967296 + unpipeEventOffset;
}
var onStreamCloseListener =
  (typeof process === "undefined" ||
    (process == null ? undefined : process.env)?.TEXT_ENCODING !== "never") &&
  typeof TextEncoder !== "undefined" &&
  typeof TextDecoder !== "undefined";
function calculateUtf8ByteLength(__cleanupEventListeners) {
  for (
    var totalCleanupListeners = __cleanupEventListeners.length,
      utf16CharacterCount = 0,
      currentCharacterIndex = 0;
    currentCharacterIndex < totalCleanupListeners;

  ) {
    var ___currentCharCode = __cleanupEventListeners.charCodeAt(
      currentCharacterIndex++,
    );
    if ((___currentCharCode & 4294967168) === 0) {
      utf16CharacterCount++;
      continue;
    } else if ((___currentCharCode & 4294965248) === 0) {
      utf16CharacterCount += 2;
    } else {
      if (
        ___currentCharCode >= 55296 &&
        ___currentCharCode <= 56319 &&
        currentCharacterIndex < totalCleanupListeners
      ) {
        var ____currentCharCode = __cleanupEventListeners.charCodeAt(
          currentCharacterIndex,
        );
        if ((____currentCharCode & 64512) === 56320) {
          ++currentCharacterIndex;
          ___currentCharCode =
            ((___currentCharCode & 1023) << 10) +
            (____currentCharCode & 1023) +
            65536;
        }
      }
      if ((___currentCharCode & 4294901760) === 0) {
        utf16CharacterCount += 3;
      } else {
        utf16CharacterCount += 4;
      }
    }
  }
  return utf16CharacterCount;
}
function processUnicodeString(
  handleDrainEvent,
  handleDataProcessing,
  handleWriteResponse,
) {
  for (
    var drainEventLength = handleDrainEvent.length,
      currentWriteResponseIndex = handleWriteResponse,
      currentCharIndex = 0;
    currentCharIndex < drainEventLength;

  ) {
    var __currentCharCode = handleDrainEvent.charCodeAt(currentCharIndex++);
    if ((__currentCharCode & 4294967168) === 0) {
      handleDataProcessing[currentWriteResponseIndex++] = __currentCharCode;
      continue;
    } else if ((__currentCharCode & 4294965248) === 0) {
      handleDataProcessing[currentWriteResponseIndex++] =
        ((__currentCharCode >> 6) & 31) | 192;
    } else {
      if (
        __currentCharCode >= 55296 &&
        __currentCharCode <= 56319 &&
        currentCharIndex < drainEventLength
      ) {
        var _____currentCharCode =
          handleDrainEvent.charCodeAt(currentCharIndex);
        if ((_____currentCharCode & 64512) === 56320) {
          ++currentCharIndex;
          __currentCharCode =
            ((__currentCharCode & 1023) << 10) +
            (_____currentCharCode & 1023) +
            65536;
        }
      }
      if ((__currentCharCode & 4294901760) === 0) {
        handleDataProcessing[currentWriteResponseIndex++] =
          ((__currentCharCode >> 12) & 15) | 224;
        handleDataProcessing[currentWriteResponseIndex++] =
          ((__currentCharCode >> 6) & 63) | 128;
      } else {
        handleDataProcessing[currentWriteResponseIndex++] =
          ((__currentCharCode >> 18) & 7) | 240;
        handleDataProcessing[currentWriteResponseIndex++] =
          ((__currentCharCode >> 12) & 63) | 128;
        handleDataProcessing[currentWriteResponseIndex++] =
          ((__currentCharCode >> 6) & 63) | 128;
      }
    }
    handleDataProcessing[currentWriteResponseIndex++] =
      (__currentCharCode & 63) | 128;
  }
}
var handleBase64EncodingValidation = onStreamCloseListener
  ? new TextEncoder()
  : undefined;
var handleBase64Validation = onStreamCloseListener
  ? typeof process !== "undefined" &&
    (process == null ? undefined : process.env)?.TEXT_ENCODING !== "force"
    ? 200
    : 0
  : logPipeCount;
function testAndValidateWritableStreamError(
  handleWritableStreamError,
  testComparatorWritableHandleErrors,
  validateWritableStream,
) {
  testComparatorWritableHandleErrors.set(
    handleBase64EncodingValidation.encode(handleWritableStreamError),
    validateWritableStream,
  );
}
function encodeBase64Validation(
  __isTestComparatorWritable,
  _processBase64Encoding,
  validateBase64EncodingAndEmitError,
) {
  handleBase64EncodingValidation.encodeInto(
    __isTestComparatorWritable,
    _processBase64Encoding.subarray(validateBase64EncodingAndEmitError),
  );
}
var handleStreamEvents = handleBase64EncodingValidation?.encodeInto
  ? encodeBase64Validation
  : testAndValidateWritableStreamError;
var validateBase64EncodingCallback = 4096;
function _decodeBase64ToBytes(
  ___validateBase64Encoding,
  isTestComparatorWritableHandler,
  ____validateBase64Encoding,
) {
  for (
    var base64DecoderIndex = isTestComparatorWritableHandler,
      base64DecoderEndIndex = base64DecoderIndex + ____validateBase64Encoding,
      decodedBase64Characters = [],
      decodedBase64String = "";
    base64DecoderIndex < base64DecoderEndIndex;

  ) {
    var currentBase64Byte = ___validateBase64Encoding[base64DecoderIndex++];
    if ((currentBase64Byte & 128) === 0) {
      decodedBase64Characters.push(currentBase64Byte);
    } else if ((currentBase64Byte & 224) === 192) {
      var decodedBase64Value =
        ___validateBase64Encoding[base64DecoderIndex++] & 63;
      decodedBase64Characters.push(
        ((currentBase64Byte & 31) << 6) | decodedBase64Value,
      );
    } else if ((currentBase64Byte & 240) === 224) {
      var decodedBase64Value =
        ___validateBase64Encoding[base64DecoderIndex++] & 63;
      var secondBase64Value =
        ___validateBase64Encoding[base64DecoderIndex++] & 63;
      decodedBase64Characters.push(
        ((currentBase64Byte & 31) << 12) |
          (decodedBase64Value << 6) |
          secondBase64Value,
      );
    } else if ((currentBase64Byte & 248) === 240) {
      var decodedBase64Value =
        ___validateBase64Encoding[base64DecoderIndex++] & 63;
      var secondBase64Value =
        ___validateBase64Encoding[base64DecoderIndex++] & 63;
      var thirdBase64Value =
        ___validateBase64Encoding[base64DecoderIndex++] & 63;
      var combinedBase64Value =
        ((currentBase64Byte & 7) << 18) |
        (decodedBase64Value << 12) |
        (secondBase64Value << 6) |
        thirdBase64Value;
      if (combinedBase64Value > 65535) {
        combinedBase64Value -= 65536;
        decodedBase64Characters.push(
          ((combinedBase64Value >>> 10) & 1023) | 55296,
        );
        combinedBase64Value = (combinedBase64Value & 1023) | 56320;
      }
      decodedBase64Characters.push(combinedBase64Value);
    } else {
      decodedBase64Characters.push(currentBase64Byte);
    }
    if (decodedBase64Characters.length >= validateBase64EncodingCallback) {
      decodedBase64String += String.fromCharCode.apply(
        String,
        decodedBase64Characters,
      );
      decodedBase64Characters.length = 0;
    }
  }
  if (decodedBase64Characters.length > 0) {
    decodedBase64String += String.fromCharCode.apply(
      String,
      decodedBase64Characters,
    );
  }
  return decodedBase64String;
}
var ___findMostRecentBase64EncodedValue = onStreamCloseListener
  ? new TextDecoder()
  : null;
var onDrainEventHandler = onStreamCloseListener
  ? typeof process !== "undefined" &&
    (process == null ? undefined : process.env)?.TEXT_DECODER !== "force"
    ? 200
    : 0
  : logPipeCount;
function decodeBase64Subarray(
  findAndUnpipeBase64EncodedValue,
  unpipeBase64Encoder,
  unpipeFromLatestBase64Encoded,
) {
  var base64Subarray = findAndUnpipeBase64EncodedValue.subarray(
    unpipeBase64Encoder,
    unpipeBase64Encoder + unpipeFromLatestBase64Encoded,
  );
  return ___findMostRecentBase64EncodedValue.decode(base64Subarray);
}
var handleUnpipeStream = (function () {
  function Base64StreamUnpipeHandler(unpipeBase64Stream, removePipeFromStream) {
    this.type = unpipeBase64Stream;
    this.data = removePipeFromStream;
  }
  return Base64StreamUnpipeHandler;
})();
var unpipeFromStream = (function () {
  function _handlePipeUnsubscription(unpipeStream, removePipeBasedOnCondition) {
    _handlePipeUnsubscription =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (
          _____handleUnpipeEvent,
          unpipeFromStreamIfEncodedValueExists,
        ) {
          _____handleUnpipeEvent.__proto__ =
            unpipeFromStreamIfEncodedValueExists;
        }) ||
      function (handlePipeUnsubscription, removePipeAndEmitUnpipe) {
        for (var pipeUnsubscriptionKey in removePipeAndEmitUnpipe) {
          if (
            Object.prototype.hasOwnProperty.call(
              removePipeAndEmitUnpipe,
              pipeUnsubscriptionKey,
            )
          ) {
            handlePipeUnsubscription[pipeUnsubscriptionKey] =
              removePipeAndEmitUnpipe[pipeUnsubscriptionKey];
          }
        }
      };
    return _handlePipeUnsubscription(unpipeStream, removePipeBasedOnCondition);
  }
  return function (findMostRecentBase64EncodedIndex, findMostRecentPipeIndex) {
    if (
      typeof findMostRecentPipeIndex != "function" &&
      findMostRecentPipeIndex !== null
    ) {
      throw new TypeError(
        "Class extends value " +
          String(findMostRecentPipeIndex) +
          " is not a constructor or null",
      );
    }
    _handlePipeUnsubscription(
      findMostRecentBase64EncodedIndex,
      findMostRecentPipeIndex,
    );
    function initializeBase64IndexConstructor() {
      this.constructor = findMostRecentBase64EncodedIndex;
    }
    if (findMostRecentPipeIndex === null) {
      findMostRecentBase64EncodedIndex.prototype = Object.create(
        findMostRecentPipeIndex,
      );
    } else {
      findMostRecentBase64EncodedIndex.prototype =
        ((initializeBase64IndexConstructor.prototype =
          findMostRecentPipeIndex.prototype),
        new initializeBase64IndexConstructor());
    }
  };
})();
var handleVersionUpdate = (function (handleNodePropertiesAndEvents) {
  unpipeFromStream(createStreamVersionHandler, handleNodePropertiesAndEvents);
  function createStreamVersionHandler(handleStreamVersionUpdate) {
    var streamVersionHandler =
      handleNodePropertiesAndEvents.call(this, handleStreamVersionUpdate) ||
      this;
    var streamVersionPrototype = Object.create(
      createStreamVersionHandler.prototype,
    );
    Object.setPrototypeOf(streamVersionHandler, streamVersionPrototype);
    Object.defineProperty(streamVersionHandler, "name", {
      configurable: true,
      enumerable: false,
      value: createStreamVersionHandler.name,
    });
    return streamVersionHandler;
  }
  return createStreamVersionHandler;
})(Error);
var isStreamReadable = -1;
var isUpdateReadable = 4294967295;
var isReadableUpdate = 17179869183;
function processReadableEvent(onReadableEvent) {
  var secondsSinceEpoch = onReadableEvent.sec;
  var nanosecondsSinceEpoch = onReadableEvent.nsec;
  if (
    secondsSinceEpoch >= 0 &&
    nanosecondsSinceEpoch >= 0 &&
    secondsSinceEpoch <= isReadableUpdate
  ) {
    if (nanosecondsSinceEpoch === 0 && secondsSinceEpoch <= isUpdateReadable) {
      var timestampByteArray = new Uint8Array(4);
      var dataViewTimestamp = new DataView(timestampByteArray.buffer);
      dataViewTimestamp.setUint32(0, secondsSinceEpoch);
      return timestampByteArray;
    } else {
      var calculateTimestampComponents = secondsSinceEpoch / 4294967296;
      var timestampLowBits = secondsSinceEpoch & 4294967295;
      var timestampByteArray = new Uint8Array(8);
      var dataViewTimestamp = new DataView(timestampByteArray.buffer);
      dataViewTimestamp.setUint32(
        0,
        (nanosecondsSinceEpoch << 2) | (calculateTimestampComponents & 3),
      );
      dataViewTimestamp.setUint32(4, timestampLowBits);
      return timestampByteArray;
    }
  } else {
    var timestampByteArray = new Uint8Array(12);
    var dataViewTimestamp = new DataView(timestampByteArray.buffer);
    dataViewTimestamp.setUint32(0, nanosecondsSinceEpoch);
    handleWritableStreamEndEvent(dataViewTimestamp, 4, secondsSinceEpoch);
    return timestampByteArray;
  }
}
function convertTimestampToNanoseconds(
  removeAllListenersBasedOnSemanticVersioning,
) {
  var timestampInMilliseconds =
    removeAllListenersBasedOnSemanticVersioning.getTime();
  var _secondsSinceEpoch = Math.floor(timestampInMilliseconds / 1000);
  var nanoseconds =
    (timestampInMilliseconds - _secondsSinceEpoch * 1000) * 1000000;
  var _nanosecondsSinceEpoch = Math.floor(nanoseconds / 1000000000);
  return {
    sec: _secondsSinceEpoch + _nanosecondsSinceEpoch,
    nsec: nanoseconds - _nanosecondsSinceEpoch * 1000000000,
  };
}
function handleStreamResumeEvent(handleStreamResume) {
  if (handleStreamResume instanceof Date) {
    var streamResumeTimestampNanoseconds =
      convertTimestampToNanoseconds(handleStreamResume);
    return processReadableEvent(streamResumeTimestampNanoseconds);
  } else {
    return null;
  }
}
function parseTimestampFromReadableState(updateReadableState) {
  var dataView = new DataView(
    updateReadableState.buffer,
    updateReadableState.byteOffset,
    updateReadableState.byteLength,
  );
  switch (updateReadableState.byteLength) {
    case 4: {
      var timestampInNanoseconds = dataView.getUint32(0);
      var __secondsSinceEpoch = 0;
      return {
        sec: timestampInNanoseconds,
        nsec: __secondsSinceEpoch,
      };
    }
    case 8: {
      var getTimestampAndNanoseconds = dataView.getUint32(0);
      var __nanosecondsSinceEpoch = dataView.getUint32(4);
      var timestampInNanoseconds =
        (getTimestampAndNanoseconds & 3) * 4294967296 + __nanosecondsSinceEpoch;
      var __secondsSinceEpoch = getTimestampAndNanoseconds >>> 2;
      return {
        sec: timestampInNanoseconds,
        nsec: __secondsSinceEpoch,
      };
    }
    case 12: {
      var timestampInNanoseconds = getLargeIntegerFromBuffer(dataView, 4);
      var __secondsSinceEpoch = dataView.getUint32(0);
      return {
        sec: timestampInNanoseconds,
        nsec: __secondsSinceEpoch,
      };
    }
    default:
      throw new handleVersionUpdate(
        `Unrecognized data size for timestamp (expected 4, 8, or 12): ${updateReadableState.length}`,
      );
  }
}
function convertReadableStateToDate(handleVersionValidationResume) {
  var timestamp = parseTimestampFromReadableState(
    handleVersionValidationResume,
  );
  return new Date(timestamp.sec * 1000 + timestamp.nsec / 1000000);
}
var handleVersionValidationComplete = {
  type: isStreamReadable,
  encode: handleStreamResumeEvent,
  decode: convertReadableStateToDate,
};
var handleVersionFlow = (function () {
  function CodecRegistry() {
    this.builtInEncoders = [];
    this.builtInDecoders = [];
    this.encoders = [];
    this.decoders = [];
    this.register(handleVersionValidationComplete);
  }
  CodecRegistry.prototype.register = function (____handleVersionComparison) {
    var versionType = ____handleVersionComparison.type;
    var encoderFunction = ____handleVersionComparison.encode;
    var decoderFunction = ____handleVersionComparison.decode;
    if (versionType >= 0) {
      this.encoders[versionType] = encoderFunction;
      this.decoders[versionType] = decoderFunction;
    } else {
      var encoderDecoderKey = 1 + versionType;
      this.builtInEncoders[encoderDecoderKey] = encoderFunction;
      this.builtInDecoders[encoderDecoderKey] = decoderFunction;
    }
  };
  CodecRegistry.prototype.tryToEncode = function (
    handleDataChunk,
    handleDataEvent,
  ) {
    for (
      var encoderIndex = 0;
      encoderIndex < this.builtInEncoders.length;
      encoderIndex++
    ) {
      var selectedEncoder = this.builtInEncoders[encoderIndex];
      if (selectedEncoder != null) {
        var encoderStream = selectedEncoder(handleDataChunk, handleDataEvent);
        if (encoderStream != null) {
          var offsetFromEncoderIndex = -1 - encoderIndex;
          return new handleUnpipeStream(offsetFromEncoderIndex, encoderStream);
        }
      }
    }
    for (
      var encoderIndex = 0;
      encoderIndex < this.encoders.length;
      encoderIndex++
    ) {
      var selectedEncoder = this.encoders[encoderIndex];
      if (selectedEncoder != null) {
        var encoderStream = selectedEncoder(handleDataChunk, handleDataEvent);
        if (encoderStream != null) {
          var offsetFromEncoderIndex = encoderIndex;
          return new handleUnpipeStream(offsetFromEncoderIndex, encoderStream);
        }
      }
    }
    if (handleDataChunk instanceof handleUnpipeStream) {
      return handleDataChunk;
    } else {
      return null;
    }
  };
  CodecRegistry.prototype.decode = function (
    handleVersionComparisonError,
    handleVersionControl,
    _handleError,
  ) {
    var _decoderFunction =
      handleVersionControl < 0
        ? this.builtInDecoders[-1 - handleVersionControl]
        : this.decoders[handleVersionControl];
    if (_decoderFunction) {
      return _decoderFunction(
        handleVersionComparisonError,
        handleVersionControl,
        _handleError,
      );
    } else {
      return new handleUnpipeStream(
        handleVersionControl,
        handleVersionComparisonError,
      );
    }
  };
  CodecRegistry.defaultCodec = new CodecRegistry();
  return CodecRegistry;
})();
function convertToUint8Array(handleVersionComparisonEvent) {
  if (handleVersionComparisonEvent instanceof Uint8Array) {
    return handleVersionComparisonEvent;
  } else if (ArrayBuffer.isView(handleVersionComparisonEvent)) {
    return new Uint8Array(
      handleVersionComparisonEvent.buffer,
      handleVersionComparisonEvent.byteOffset,
      handleVersionComparisonEvent.byteLength,
    );
  } else if (handleVersionComparisonEvent instanceof ArrayBuffer) {
    return new Uint8Array(handleVersionComparisonEvent);
  } else {
    return Uint8Array.from(handleVersionComparisonEvent);
  }
}
function createDataViewFromBuffer(_____handleVersionComparison) {
  if (_____handleVersionComparison instanceof ArrayBuffer) {
    return new DataView(_____handleVersionComparison);
  }
  var dataViewBuffer = convertToUint8Array(_____handleVersionComparison);
  return new DataView(
    dataViewBuffer.buffer,
    dataViewBuffer.byteOffset,
    dataViewBuffer.byteLength,
  );
}
var bindHandleVersionComparisonFunction = 100;
var ______handleVersionComparison = 2048;
var _______handleVersionComparison = (function () {
  function initializeCodecHandler(
    defaultCodecHandler = handleVersionFlow.defaultCodec,
    dataNotAvailable = undefined,
    bindVersionComparisonHandler = bindHandleVersionComparisonFunction,
    ____________handleVersionComparison = ______handleVersionComparison,
    isFeatureEnabled = false,
    _isFeatureEnabled = false,
    isUserLoggedIn = false,
    __isFeatureEnabled = false,
  ) {
    this.extensionCodec = defaultCodecHandler;
    this.context = dataNotAvailable;
    this.maxDepth = bindVersionComparisonHandler;
    this.initialBufferSize = ____________handleVersionComparison;
    this.sortKeys = isFeatureEnabled;
    this.forceFloat32 = _isFeatureEnabled;
    this.ignoreUndefined = isUserLoggedIn;
    this.forceIntegerToFloat = __isFeatureEnabled;
    this.pos = 0;
    this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
    this.bytes = new Uint8Array(this.view.buffer);
  }
  initializeCodecHandler.prototype.reinitializeState = function () {
    this.pos = 0;
  };
  initializeCodecHandler.prototype.encodeSharedRef = function (
    handleVersionComparisonStream,
  ) {
    this.reinitializeState();
    this.doEncode(handleVersionComparisonStream, 1);
    return this.bytes.subarray(0, this.pos);
  };
  initializeCodecHandler.prototype.encode = function (
    ________handleVersionComparison,
  ) {
    this.reinitializeState();
    this.doEncode(________handleVersionComparison, 1);
    return this.bytes.slice(0, this.pos);
  };
  initializeCodecHandler.prototype.doEncode = function (
    _handleVersionComparisonEvent,
    __handleVersionComparisonEvent,
  ) {
    if (__handleVersionComparisonEvent > this.maxDepth) {
      throw new Error(
        `Too deep objects in depth ${__handleVersionComparisonEvent}`,
      );
    }
    if (_handleVersionComparisonEvent == null) {
      this.encodeNil();
    } else if (typeof _handleVersionComparisonEvent == "boolean") {
      this.encodeBoolean(_handleVersionComparisonEvent);
    } else if (typeof _handleVersionComparisonEvent == "number") {
      this.encodeNumber(_handleVersionComparisonEvent);
    } else if (typeof _handleVersionComparisonEvent == "string") {
      this.encodeString(_handleVersionComparisonEvent);
    } else {
      this.encodeObject(
        _handleVersionComparisonEvent,
        __handleVersionComparisonEvent,
      );
    }
  };
  initializeCodecHandler.prototype.ensureBufferSizeToWrite = function (
    _________handleVersionComparison,
  ) {
    var requiredBufferSize = this.pos + _________handleVersionComparison;
    if (this.view.byteLength < requiredBufferSize) {
      this.resizeBuffer(requiredBufferSize * 2);
    }
  };
  initializeCodecHandler.prototype.resizeBuffer = function (
    handleVersionComparisonRead,
  ) {
    var versionComparisonBuffer = new ArrayBuffer(handleVersionComparisonRead);
    var versionComparisonArray = new Uint8Array(versionComparisonBuffer);
    var versionComparisonView = new DataView(versionComparisonBuffer);
    versionComparisonArray.set(this.bytes);
    this.view = versionComparisonView;
    this.bytes = versionComparisonArray;
  };
  initializeCodecHandler.prototype.encodeNil = function () {
    this.writeU8(192);
  };
  initializeCodecHandler.prototype.encodeBoolean = function (
    handleReadability,
  ) {
    if (handleReadability === false) {
      this.writeU8(194);
    } else {
      this.writeU8(195);
    }
  };
  initializeCodecHandler.prototype.encodeNumber = function (
    isReadableStateActive,
  ) {
    if (
      Number.isSafeInteger(isReadableStateActive) &&
      !this.forceIntegerToFloat
    ) {
      if (isReadableStateActive >= 0) {
        if (isReadableStateActive < 128) {
          this.writeU8(isReadableStateActive);
        } else if (isReadableStateActive < 256) {
          this.writeU8(204);
          this.writeU8(isReadableStateActive);
        } else if (isReadableStateActive < 65536) {
          this.writeU8(205);
          this.writeU16(isReadableStateActive);
        } else if (isReadableStateActive < 4294967296) {
          this.writeU8(206);
          this.writeU32(isReadableStateActive);
        } else {
          this.writeU8(207);
          this.writeU64(isReadableStateActive);
        }
      } else if (isReadableStateActive >= -32) {
        this.writeU8((isReadableStateActive + 32) | 224);
      } else if (isReadableStateActive >= -128) {
        this.writeU8(208);
        this.writeI8(isReadableStateActive);
      } else if (isReadableStateActive >= -32768) {
        this.writeU8(209);
        this.writeI16(isReadableStateActive);
      } else if (isReadableStateActive >= -2147483648) {
        this.writeU8(210);
        this.writeI32(isReadableStateActive);
      } else {
        this.writeU8(211);
        this.writeI64(isReadableStateActive);
      }
    } else if (this.forceFloat32) {
      this.writeU8(202);
      this.writeF32(isReadableStateActive);
    } else {
      this.writeU8(203);
      this.writeF64(isReadableStateActive);
    }
  };
  initializeCodecHandler.prototype.writeStringHeader = function (
    readableFlowingState,
  ) {
    if (readableFlowingState < 32) {
      this.writeU8(160 + readableFlowingState);
    } else if (readableFlowingState < 256) {
      this.writeU8(217);
      this.writeU8(readableFlowingState);
    } else if (readableFlowingState < 65536) {
      this.writeU8(218);
      this.writeU16(readableFlowingState);
    } else if (readableFlowingState < 4294967296) {
      this.writeU8(219);
      this.writeU32(readableFlowingState);
    } else {
      throw new Error(
        `Too long string: ${readableFlowingState} bytes in UTF-8`,
      );
    }
  };
  initializeCodecHandler.prototype.encodeString = function (
    _updateReadableState,
  ) {
    var minimumBufferSize = 5;
    var __inputStringLength = _updateReadableState.length;
    if (__inputStringLength > handleBase64Validation) {
      var utf8ByteLength = calculateUtf8ByteLength(_updateReadableState);
      this.ensureBufferSizeToWrite(minimumBufferSize + utf8ByteLength);
      this.writeStringHeader(utf8ByteLength);
      handleStreamEvents(_updateReadableState, this.bytes, this.pos);
      this.pos += utf8ByteLength;
    } else {
      var utf8ByteLength = calculateUtf8ByteLength(_updateReadableState);
      this.ensureBufferSizeToWrite(minimumBufferSize + utf8ByteLength);
      this.writeStringHeader(utf8ByteLength);
      processUnicodeString(_updateReadableState, this.bytes, this.pos);
      this.pos += utf8ByteLength;
    }
  };
  initializeCodecHandler.prototype.encodeObject = function (
    setReadableStateDestroyed,
    isReadableDestroyed,
  ) {
    var encodedData = this.extensionCodec.tryToEncode(
      setReadableStateDestroyed,
      this.context,
    );
    if (encodedData != null) {
      this.encodeExtension(encodedData);
    } else if (Array.isArray(setReadableStateDestroyed)) {
      this.encodeArray(setReadableStateDestroyed, isReadableDestroyed);
    } else if (ArrayBuffer.isView(setReadableStateDestroyed)) {
      this.encodeBinary(setReadableStateDestroyed);
    } else if (typeof setReadableStateDestroyed == "object") {
      this.encodeMap(setReadableStateDestroyed, isReadableDestroyed);
    } else {
      throw new Error(
        `Unrecognized object: ${Object.prototype.toString.apply(setReadableStateDestroyed)}`,
      );
    }
  };
  initializeCodecHandler.prototype.encodeBinary = function (
    _setReadableStateDestroyed,
  ) {
    var setReadableStateByteLength = _setReadableStateDestroyed.byteLength;
    if (setReadableStateByteLength < 256) {
      this.writeU8(196);
      this.writeU8(setReadableStateByteLength);
    } else if (setReadableStateByteLength < 65536) {
      this.writeU8(197);
      this.writeU16(setReadableStateByteLength);
    } else if (setReadableStateByteLength < 4294967296) {
      this.writeU8(198);
      this.writeU32(setReadableStateByteLength);
    } else {
      throw new Error(`Too large binary: ${setReadableStateByteLength}`);
    }
    var calculateAndWriteReadableState = convertToUint8Array(
      _setReadableStateDestroyed,
    );
    this.writeU8a(calculateAndWriteReadableState);
  };
  initializeCodecHandler.prototype.encodeArray = function (
    getCurrentPipesCount,
    getPipesCount,
  ) {
    var currentPipesCount = getCurrentPipesCount.length;
    if (currentPipesCount < 16) {
      this.writeU8(144 + currentPipesCount);
    } else if (currentPipesCount < 65536) {
      this.writeU8(220);
      this.writeU16(currentPipesCount);
    } else if (currentPipesCount < 4294967296) {
      this.writeU8(221);
      this.writeU32(currentPipesCount);
    } else {
      throw new Error(`Too large array: ${currentPipesCount}`);
    }
    for (
      var pipeIndex = 0, _currentPipesCount = getCurrentPipesCount;
      pipeIndex < _currentPipesCount.length;
      pipeIndex++
    ) {
      var currentPipeCount = _currentPipesCount[pipeIndex];
      this.doEncode(currentPipeCount, getPipesCount + 1);
    }
  };
  initializeCodecHandler.prototype.countWithoutUndefined = function (
    getNextGeneratorValue,
    processBufferedData,
  ) {
    var countDefinedGeneratorValues = 0;
    for (
      var bufferedDataIndex = 0, processBufferedDataArray = processBufferedData;
      bufferedDataIndex < processBufferedDataArray.length;
      bufferedDataIndex++
    ) {
      var currentBufferedData = processBufferedDataArray[bufferedDataIndex];
      if (getNextGeneratorValue[currentBufferedData] !== undefined) {
        countDefinedGeneratorValues++;
      }
    }
    return countDefinedGeneratorValues;
  };
  initializeCodecHandler.prototype.encodeMap = function (
    processAbortableGenerator,
    getBufferData,
  ) {
    var processKeys = Object.keys(processAbortableGenerator);
    if (this.sortKeys) {
      processKeys.sort();
    }
    var keyCount = this.ignoreUndefined
      ? this.countWithoutUndefined(processAbortableGenerator, processKeys)
      : processKeys.length;
    if (keyCount < 16) {
      this.writeU8(128 + keyCount);
    } else if (keyCount < 65536) {
      this.writeU8(222);
      this.writeU16(keyCount);
    } else if (keyCount < 4294967296) {
      this.writeU8(223);
      this.writeU32(keyCount);
    } else {
      throw new Error(`Too large map object: ${keyCount}`);
    }
    for (
      var keyIndex = 0, keysToProcess = processKeys;
      keyIndex < keysToProcess.length;
      keyIndex++
    ) {
      var currentKey = keysToProcess[keyIndex];
      var currentKeyValue = processAbortableGenerator[currentKey];
      if (!this.ignoreUndefined || currentKeyValue !== undefined) {
        this.encodeString(currentKey);
        this.doEncode(currentKeyValue, getBufferData + 1);
      }
    }
  };
  initializeCodecHandler.prototype.encodeExtension = function (
    processDataAndEmitEnd,
  ) {
    var dataLength = processDataAndEmitEnd.data.length;
    if (dataLength === 1) {
      this.writeU8(212);
    } else if (dataLength === 2) {
      this.writeU8(213);
    } else if (dataLength === 4) {
      this.writeU8(214);
    } else if (dataLength === 8) {
      this.writeU8(215);
    } else if (dataLength === 16) {
      this.writeU8(216);
    } else if (dataLength < 256) {
      this.writeU8(199);
      this.writeU8(dataLength);
    } else if (dataLength < 65536) {
      this.writeU8(200);
      this.writeU16(dataLength);
    } else if (dataLength < 4294967296) {
      this.writeU8(201);
      this.writeU32(dataLength);
    } else {
      throw new Error(`Too large extension object: ${dataLength}`);
    }
    this.writeI8(processDataAndEmitEnd.type);
    this.writeU8a(processDataAndEmitEnd.data);
  };
  initializeCodecHandler.prototype.writeU8 = function (createReadableStream) {
    this.ensureBufferSizeToWrite(1);
    this.view.setUint8(this.pos, createReadableStream);
    this.pos++;
  };
  initializeCodecHandler.prototype.writeU8a = function (
    destroyifPromisesActive,
  ) {
    var activePromisesCount = destroyifPromisesActive.length;
    this.ensureBufferSizeToWrite(activePromisesCount);
    this.bytes.set(destroyifPromisesActive, this.pos);
    this.pos += activePromisesCount;
  };
  initializeCodecHandler.prototype.writeI8 = function (getStreamContext) {
    this.ensureBufferSizeToWrite(1);
    this.view.setInt8(this.pos, getStreamContext);
    this.pos++;
  };
  initializeCodecHandler.prototype.writeU16 = function (
    processAsyncValueStream,
  ) {
    this.ensureBufferSizeToWrite(2);
    this.view.setUint16(this.pos, processAsyncValueStream);
    this.pos += 2;
  };
  initializeCodecHandler.prototype.writeI16 = function (
    cleanupAndErrorHandler,
  ) {
    this.ensureBufferSizeToWrite(2);
    this.view.setInt16(this.pos, cleanupAndErrorHandler);
    this.pos += 2;
  };
  initializeCodecHandler.prototype.writeU32 = function (
    _removeAbortEventListener,
  ) {
    this.ensureBufferSizeToWrite(4);
    this.view.setUint32(this.pos, _removeAbortEventListener);
    this.pos += 4;
  };
  initializeCodecHandler.prototype.writeI32 = function (destroyEventHandler) {
    this.ensureBufferSizeToWrite(4);
    this.view.setInt32(this.pos, destroyEventHandler);
    this.pos += 4;
  };
  initializeCodecHandler.prototype.writeF32 = function (processDataHandler) {
    this.ensureBufferSizeToWrite(4);
    this.view.setFloat32(this.pos, processDataHandler);
    this.pos += 4;
  };
  initializeCodecHandler.prototype.writeF64 = function (
    initializeModuleExports,
  ) {
    this.ensureBufferSizeToWrite(8);
    this.view.setFloat64(this.pos, initializeModuleExports);
    this.pos += 8;
  };
  initializeCodecHandler.prototype.writeU64 = function (getStreamInstance) {
    this.ensureBufferSizeToWrite(8);
    handleUnpipeAndStreamEnd(this.view, this.pos, getStreamInstance);
    this.pos += 8;
  };
  initializeCodecHandler.prototype.writeI64 = function (fetchNodeData) {
    this.ensureBufferSizeToWrite(8);
    handleWritableStreamEndEvent(this.view, this.pos, fetchNodeData);
    this.pos += 8;
  };
  return initializeCodecHandler;
})();
var validateStreamInstances = {};
function encodeStreamProperties(
  updateStreamProperties,
  _validateStreamInstances = validateStreamInstances,
) {
  var versionComparisonHandler = new _______handleVersionComparison(
    _validateStreamInstances.extensionCodec,
    _validateStreamInstances.context,
    _validateStreamInstances.maxDepth,
    _validateStreamInstances.initialBufferSize,
    _validateStreamInstances.sortKeys,
    _validateStreamInstances.forceFloat32,
    _validateStreamInstances.ignoreUndefined,
    _validateStreamInstances.forceIntegerToFloat,
  );
  return versionComparisonHandler.encodeSharedRef(updateStreamProperties);
}
function formatAsHexWithSign(validateCallbackCompatibility) {
  return `${validateCallbackCompatibility < 0 ? "-" : ""}0x${Math.abs(validateCallbackCompatibility).toString(16).padStart(2, "0")}`;
}
var errorOrDestroyHandler = 16;
var bufferComparisonValidator = 16;
var errorOrDestroyCallback = (function () {
  function CacheHandler(
    _errorOrDestroyHandler = errorOrDestroyHandler,
    _bufferComparisonValidator = bufferComparisonValidator,
  ) {
    this.maxKeyLength = _errorOrDestroyHandler;
    this.maxLengthPerKey = _bufferComparisonValidator;
    this.hit = 0;
    this.miss = 0;
    this.caches = [];
    for (
      var cacheArrayInitializer = 0;
      cacheArrayInitializer < this.maxKeyLength;
      cacheArrayInitializer++
    ) {
      this.caches.push([]);
    }
  }
  CacheHandler.prototype.canBeCached = function (
    validateAndReturnIntrinsicPropertyCodes,
  ) {
    return (
      validateAndReturnIntrinsicPropertyCodes > 0 &&
      validateAndReturnIntrinsicPropertyCodes <= this.maxKeyLength
    );
  };
  CacheHandler.prototype.find = function (
    ___________________________validateAndReturnIntrinsicProperty,
    validateAndHandleVersionCompatibility,
    isVersionCompatibleHandler,
  ) {
    var cachedCompatibleVersions = this.caches[isVersionCompatibleHandler - 1];
    _0x5d14ec: for (
      var currentCompatibleVersionIndex = 0,
        _cachedCompatibleVersions = cachedCompatibleVersions;
      currentCompatibleVersionIndex < _cachedCompatibleVersions.length;
      currentCompatibleVersionIndex++
    ) {
      var compatibleVersionData =
        _cachedCompatibleVersions[currentCompatibleVersionIndex];
      var compatibleVersionBytes = compatibleVersionData.bytes;
      for (
        var versionIndex = 0;
        versionIndex < isVersionCompatibleHandler;
        versionIndex++
      ) {
        if (
          compatibleVersionBytes[versionIndex] !==
          ___________________________validateAndReturnIntrinsicProperty[
            validateAndHandleVersionCompatibility + versionIndex
          ]
        ) {
          continue _0x5d14ec;
        }
      }
      return compatibleVersionData.str;
    }
    return null;
  };
  CacheHandler.prototype.store = function (
    initializeObjectModeAndConfigureEncoding,
    _isVersionCompatible,
  ) {
    var ___cacheEntry =
      this.caches[initializeObjectModeAndConfigureEncoding.length - 1];
    var cacheEntryData = {
      bytes: initializeObjectModeAndConfigureEncoding,
      str: _isVersionCompatible,
    };
    if (___cacheEntry.length >= this.maxLengthPerKey) {
      ___cacheEntry[(Math.random() * ___cacheEntry.length) | 0] =
        cacheEntryData;
    } else {
      ___cacheEntry.push(cacheEntryData);
    }
  };
  CacheHandler.prototype.decode = function (
    initializeStreamOptions,
    initializeStreamSettings,
    initializeWritableStream,
  ) {
    var foundStream = this.find(
      initializeStreamOptions,
      initializeStreamSettings,
      initializeWritableStream,
    );
    if (foundStream != null) {
      this.hit++;
      return foundStream;
    }
    this.miss++;
    var decodedStreamBytes = _decodeBase64ToBytes(
      initializeStreamOptions,
      initializeStreamSettings,
      initializeWritableStream,
    );
    var slicedStreamData = Uint8Array.prototype.slice.call(
      initializeStreamOptions,
      initializeStreamSettings,
      initializeStreamSettings + initializeWritableStream,
    );
    this.store(slicedStreamData, decodedStreamBytes);
    return decodedStreamBytes;
  };
  return CacheHandler;
})();
function initializeVersionCheck(
  bufferedVersionComparison,
  handleVersionCheck,
  initializeBufferState,
  _checkVersionCompatibility,
) {
  function initializeBufferStateFromConfig(
    initializeBufferingAndVersionSettings,
  ) {
    if (
      initializeBufferingAndVersionSettings instanceof initializeBufferState
    ) {
      return initializeBufferingAndVersionSettings;
    } else {
      return new initializeBufferState(function (initializeStream) {
        initializeStream(initializeBufferingAndVersionSettings);
      });
    }
  }
  return new (initializeBufferState ||= Promise)(function (
    initializeBufferProcessing,
    initializeWriteStreamState,
  ) {
    function handleWriteRequest(onWriteHandler) {
      try {
        processBufferState(_checkVersionCompatibility.next(onWriteHandler));
      } catch (____________________error) {
        initializeWriteStreamState(____________________error);
      }
    }
    function initializeAsyncProcess(initializeAsyncContext) {
      try {
        processBufferState(
          _checkVersionCompatibility.throw(initializeAsyncContext),
        );
      } catch (___errorHandler) {
        initializeWriteStreamState(___errorHandler);
      }
    }
    function processBufferState(initializeEmittingAndBufferingState) {
      if (initializeEmittingAndBufferingState.done) {
        initializeBufferProcessing(initializeEmittingAndBufferingState.value);
      } else {
        initializeBufferStateFromConfig(
          initializeEmittingAndBufferingState.value,
        ).then(handleWriteRequest, initializeAsyncProcess);
      }
    }
    processBufferState(
      (_checkVersionCompatibility = _checkVersionCompatibility.apply(
        bufferedVersionComparison,
        handleVersionCheck || [],
      )).next(),
    );
  });
}
function initializeBufferedProcess(
  initializeBufferedState,
  BufferedAsyncProcess,
) {
  var bufferedProcessState = {
    label: 0,
    sent() {
      if (processBufferResult[0] & 1) {
        throw processBufferResult[1];
      }
      return processBufferResult[1];
    },
    trys: [],
    ops: [],
  };
  var isGeneratorExecuting;
  var asyncBufferState;
  var processBufferResult;
  var bufferedProcessController;
  bufferedProcessController = {
    next: createBufferProcessingFunction(0),
    throw: createBufferProcessingFunction(1),
    return: createBufferProcessingFunction(2),
  };
  if (typeof Symbol == "function") {
    bufferedProcessController[Symbol.iterator] = function () {
      return this;
    };
  }
  return bufferedProcessController;
  function createBufferProcessingFunction(_processBufferOperations) {
    return function (processAsyncBufferOperations) {
      return processBufferedOperations([
        _processBufferOperations,
        processAsyncBufferOperations,
      ]);
    };
  }
  function processBufferedOperations(__processBufferOperations) {
    if (isGeneratorExecuting) {
      throw new TypeError("Generator is already executing.");
    }
    while (bufferedProcessState) {
      try {
        isGeneratorExecuting = 1;
        if (
          asyncBufferState &&
          (processBufferResult =
            __processBufferOperations[0] & 2
              ? asyncBufferState.return
              : __processBufferOperations[0]
                ? asyncBufferState.throw ||
                  ((processBufferResult = asyncBufferState.return) &&
                    processBufferResult.call(asyncBufferState),
                  0)
                : asyncBufferState.next) &&
          !(processBufferResult = processBufferResult.call(
            asyncBufferState,
            __processBufferOperations[1],
          )).done
        ) {
          return processBufferResult;
        }
        asyncBufferState = 0;
        if (processBufferResult) {
          __processBufferOperations = [
            __processBufferOperations[0] & 2,
            processBufferResult.value,
          ];
        }
        switch (__processBufferOperations[0]) {
          case 0:
          case 1:
            processBufferResult = __processBufferOperations;
            break;
          case 4:
            bufferedProcessState.label++;
            return {
              value: __processBufferOperations[1],
              done: false,
            };
          case 5:
            bufferedProcessState.label++;
            asyncBufferState = __processBufferOperations[1];
            __processBufferOperations = [0];
            continue;
          case 7:
            __processBufferOperations = bufferedProcessState.ops.pop();
            bufferedProcessState.trys.pop();
            continue;
          default:
            processBufferResult = bufferedProcessState.trys;
            if (
              !(processBufferResult =
                processBufferResult.length > 0 &&
                processBufferResult[processBufferResult.length - 1]) &&
              (__processBufferOperations[0] === 6 ||
                __processBufferOperations[0] === 2)
            ) {
              bufferedProcessState = 0;
              continue;
            }
            if (
              __processBufferOperations[0] === 3 &&
              (!processBufferResult ||
                (__processBufferOperations[1] > processBufferResult[0] &&
                  __processBufferOperations[1] < processBufferResult[3]))
            ) {
              bufferedProcessState.label = __processBufferOperations[1];
              break;
            }
            if (
              __processBufferOperations[0] === 6 &&
              bufferedProcessState.label < processBufferResult[1]
            ) {
              bufferedProcessState.label = processBufferResult[1];
              processBufferResult = __processBufferOperations;
              break;
            }
            if (
              processBufferResult &&
              bufferedProcessState.label < processBufferResult[2]
            ) {
              bufferedProcessState.label = processBufferResult[2];
              bufferedProcessState.ops.push(__processBufferOperations);
              break;
            }
            if (processBufferResult[2]) {
              bufferedProcessState.ops.pop();
            }
            bufferedProcessState.trys.pop();
            continue;
        }
        __processBufferOperations = BufferedAsyncProcess.call(
          initializeBufferedState,
          bufferedProcessState,
        );
      } catch (errorHandlingVariable) {
        __processBufferOperations = [6, errorHandlingVariable];
        asyncBufferState = 0;
      } finally {
        isGeneratorExecuting = processBufferResult = 0;
      }
    }
    if (__processBufferOperations[0] & 5) {
      throw __processBufferOperations[1];
    }
    return {
      value: __processBufferOperations[0]
        ? __processBufferOperations[1]
        : undefined,
      done: true,
    };
  }
}
function _createAsyncIterator(bufferProcessingMode) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var asyncIteratorMethod = bufferProcessingMode[Symbol.asyncIterator];
  var asyncIteratorBuffer;
  if (asyncIteratorMethod) {
    return asyncIteratorMethod.call(bufferProcessingMode);
  } else {
    if (typeof __values == "function") {
      bufferProcessingMode = __values(bufferProcessingMode);
    } else {
      bufferProcessingMode = bufferProcessingMode[Symbol.iterator]();
    }
    asyncIteratorBuffer = {};
    createBufferProcessingPromise("next");
    createBufferProcessingPromise("throw");
    createBufferProcessingPromise("return");
    asyncIteratorBuffer[Symbol.asyncIterator] = function () {
      return this;
    };
    return asyncIteratorBuffer;
  }
  function createBufferProcessingPromise(_processBufferIteration) {
    asyncIteratorBuffer[_processBufferIteration] =
      bufferProcessingMode[_processBufferIteration] &&
      function (processBufferIterationHandler) {
        return new Promise(function (
          handleBufferProcessing,
          processAndHandleBuffer,
        ) {
          processBufferIterationHandler = bufferProcessingMode[
            _processBufferIteration
          ](processBufferIterationHandler);
          processAndHandleBufferIteration(
            handleBufferProcessing,
            processAndHandleBuffer,
            processBufferIterationHandler.done,
            processBufferIterationHandler.value,
          );
        });
      };
  }
  function processAndHandleBufferIteration(
    processBufferIterationAndHandleOperations,
    _processAndHandleBuffer,
    _processBufferIterationHandler,
    __processBufferIterationHandler,
  ) {
    Promise.resolve(__processBufferIterationHandler).then(function (
      ___processBufferIterationHandler,
    ) {
      processBufferIterationAndHandleOperations({
        value: ___processBufferIterationHandler,
        done: _processBufferIterationHandler,
      });
    }, _processAndHandleBuffer);
  }
}
function BufferProcessor(processBufferChunk) {
  if (this instanceof BufferProcessor) {
    this.v = processBufferChunk;
    return this;
  } else {
    return new BufferProcessor(processBufferChunk);
  }
}
function createAsyncIterator(
  processBufferOrHandleErrors,
  processBufferAndHandleWrites,
  bufferProcessor,
) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var bufferProcessingResult = bufferProcessor.apply(
    processBufferOrHandleErrors,
    processBufferAndHandleWrites || [],
  );
  var asyncIterator;
  var pendingWrites = [];
  asyncIterator = {};
  _initializeBufferProcessing("next");
  _initializeBufferProcessing("throw");
  _initializeBufferProcessing("return");
  asyncIterator[Symbol.asyncIterator] = function () {
    return this;
  };
  return asyncIterator;
  function _initializeBufferProcessing(processBuffer) {
    if (bufferProcessingResult[processBuffer]) {
      asyncIterator[processBuffer] = function (BufferWriter) {
        return new Promise(function (
          compareVersionsAndValidate,
          writeVersionComparison,
        ) {
          if (
            !(
              pendingWrites.push([
                processBuffer,
                BufferWriter,
                compareVersionsAndValidate,
                writeVersionComparison,
              ]) > 1
            )
          ) {
            _processWritableState(processBuffer, BufferWriter);
          }
        });
      };
    }
  }
  function _processWritableState(writableStateManager, __writableState) {
    try {
      processWritableStateCorkCount(
        bufferProcessingResult[writableStateManager](__writableState),
      );
    } catch (errorObject) {
      processSignalAndHandleWrites(pendingWrites[0][3], errorObject);
    }
  }
  function processWritableStateCorkCount(incrementWritableStateCorkCount) {
    if (incrementWritableStateCorkCount.value instanceof BufferProcessor) {
      Promise.resolve(incrementWritableStateCorkCount.value.v).then(
        processAndHandleSignal,
        setDefaultStreamEncoding,
      );
    } else {
      processSignalAndHandleWrites(
        pendingWrites[0][2],
        incrementWritableStateCorkCount,
      );
    }
  }
  function processAndHandleSignal(processSignalAndOptions) {
    _processWritableState("next", processSignalAndOptions);
  }
  function setDefaultStreamEncoding(setDefaultEncodingForStream) {
    _processWritableState("throw", setDefaultEncodingForStream);
  }
  function processSignalAndHandleWrites(
    validateAndHandleSignalOptions,
    validateAndHandleSignal,
  ) {
    validateAndHandleSignalOptions(validateAndHandleSignal);
    pendingWrites.shift();
    if (pendingWrites.length) {
      _processWritableState(pendingWrites[0][0], pendingWrites[0][1]);
    }
  }
}
function isStringOrNumber(handleSignalAndOptions) {
  var typeOfHandleSignal = typeof handleSignalAndOptions;
  return typeOfHandleSignal === "string" || typeOfHandleSignal === "number";
}
var signalBufferHandler = -1;
var updateSignalOptions = new DataView(new ArrayBuffer(0));
var calculateBufferedLength = new Uint8Array(updateSignalOptions.buffer);
var writeSignalOptions = (function () {
  try {
    updateSignalOptions.getInt8(0);
  } catch (_________________error) {
    return _________________error.constructor;
  }
  throw new Error("never reached");
})();
var signalLengthModifier = new writeSignalOptions("Insufficient data");
var currentBufferLength = new errorOrDestroyCallback();
var isReadyToWrite = (function () {
  function initializeCodecSettings(
    _defaultCodecHandler = handleVersionFlow.defaultCodec,
    undefinedValue = undefined,
    _logPipeCount = logPipeCount,
    __logPipeCount = logPipeCount,
    ___logPipeCount = logPipeCount,
    ____logPipeCount = logPipeCount,
    _____logPipeCount = logPipeCount,
    _currentBufferLength = currentBufferLength,
  ) {
    this.extensionCodec = _defaultCodecHandler;
    this.context = undefinedValue;
    this.maxStrLength = _logPipeCount;
    this.maxBinLength = __logPipeCount;
    this.maxArrayLength = ___logPipeCount;
    this.maxMapLength = ____logPipeCount;
    this.maxExtLength = _____logPipeCount;
    this.keyDecoder = _currentBufferLength;
    this.totalPos = 0;
    this.pos = 0;
    this.view = updateSignalOptions;
    this.bytes = calculateBufferedLength;
    this.headByte = signalBufferHandler;
    this.stack = [];
  }
  initializeCodecSettings.prototype.reinitializeState = function () {
    this.totalPos = 0;
    this.headByte = signalBufferHandler;
    this.stack.length = 0;
  };
  initializeCodecSettings.prototype.setBuffer = function (
    validateAndWriteSignalOptions,
  ) {
    this.bytes = convertToUint8Array(validateAndWriteSignalOptions);
    this.view = createDataViewFromBuffer(this.bytes);
    this.pos = 0;
  };
  initializeCodecSettings.prototype.appendBuffer = function (
    handleSignalWriting,
  ) {
    if (this.headByte === signalBufferHandler && !this.hasRemaining(1)) {
      this.setBuffer(handleSignalWriting);
    } else {
      var signalBuffer = this.bytes.subarray(this.pos);
      var handleSignalBufferConversion =
        convertToUint8Array(handleSignalWriting);
      var combinedSignalBuffer = new Uint8Array(
        signalBuffer.length + handleSignalBufferConversion.length,
      );
      combinedSignalBuffer.set(signalBuffer);
      combinedSignalBuffer.set(
        handleSignalBufferConversion,
        signalBuffer.length,
      );
      this.setBuffer(combinedSignalBuffer);
    }
  };
  initializeCodecSettings.prototype.hasRemaining = function (
    handleWriteSignalAndValidateVersions,
  ) {
    return (
      this.view.byteLength - this.pos >= handleWriteSignalAndValidateVersions
    );
  };
  initializeCodecSettings.prototype.createExtraByteError = function (
    processSignalWrite,
  ) {
    var ____context = this;
    var viewBuffer = ____context.view;
    var currentPosition = ____context.pos;
    return new RangeError(
      `Extra ${viewBuffer.byteLength - currentPosition} of ${viewBuffer.byteLength} byte(s) found at buffer[${processSignalWrite}]`,
    );
  };
  initializeCodecSettings.prototype.decode = function (
    handleVersionComparisonAndValidation,
  ) {
    this.reinitializeState();
    this.setBuffer(handleVersionComparisonAndValidation);
    var __decodedData = this.doDecodeSync();
    if (this.hasRemaining(1)) {
      throw this.createExtraByteError(this.pos);
    }
    return __decodedData;
  };
  initializeCodecSettings.prototype.decodeMulti = function (
    checkAndProcessWriteState,
  ) {
    return initializeBufferedProcess(
      this,
      function (____compareAndValidateVersions) {
        switch (____compareAndValidateVersions.label) {
          case 0:
            this.reinitializeState();
            this.setBuffer(checkAndProcessWriteState);
            ____compareAndValidateVersions.label = 1;
          case 1:
            if (this.hasRemaining(1)) {
              return [4, this.doDecodeSync()];
            } else {
              return [3, 3];
            }
          case 2:
            ____compareAndValidateVersions.sent();
            return [3, 1];
          case 3:
            return [2];
        }
      },
    );
  };
  initializeCodecSettings.prototype.decodeAsync = function (
    _____compareAndValidateVersions,
  ) {
    var validatedVersionIterator;
    var validatedVersion;
    var validatedVersionData;
    var versionValidationResult;
    return initializeVersionCheck(this, undefined, undefined, function () {
      var hasProcessedValidVersion;
      var currentValidatedVersion;
      var currentValidatedData;
      var _validatedVersionIterator;
      var ________validateAndProcessVersion;
      var _________validateAndProcessVersion;
      var __________validateAndProcessVersion;
      var _validatedVersion;
      return initializeBufferedProcess(
        this,
        function (compareAndProcessVersionFlow) {
          switch (compareAndProcessVersionFlow.label) {
            case 0:
              hasProcessedValidVersion = false;
              compareAndProcessVersionFlow.label = 1;
            case 1:
              compareAndProcessVersionFlow.trys.push([1, 6, 7, 12]);
              validatedVersionIterator = _createAsyncIterator(
                _____compareAndValidateVersions,
              );
              compareAndProcessVersionFlow.label = 2;
            case 2:
              return [4, validatedVersionIterator.next()];
            case 3:
              validatedVersion = compareAndProcessVersionFlow.sent();
              if (validatedVersion.done) {
                return [3, 5];
              }
              currentValidatedData = validatedVersion.value;
              if (hasProcessedValidVersion) {
                throw this.createExtraByteError(this.totalPos);
              }
              this.appendBuffer(currentValidatedData);
              try {
                currentValidatedVersion = this.doDecodeSync();
                hasProcessedValidVersion = true;
              } catch (___error) {
                if (!(___error instanceof writeSignalOptions)) {
                  throw ___error;
                }
              }
              this.totalPos += this.pos;
              compareAndProcessVersionFlow.label = 4;
            case 4:
              return [3, 2];
            case 5:
              return [3, 12];
            case 6:
              _validatedVersionIterator = compareAndProcessVersionFlow.sent();
              validatedVersionData = {
                error: _validatedVersionIterator,
              };
              return [3, 12];
            case 7:
              compareAndProcessVersionFlow.trys.push([7, , 10, 11]);
              if (
                validatedVersion &&
                !validatedVersion.done &&
                (versionValidationResult = validatedVersionIterator.return)
              ) {
                return [
                  4,
                  versionValidationResult.call(validatedVersionIterator),
                ];
              } else {
                return [3, 9];
              }
            case 8:
              compareAndProcessVersionFlow.sent();
              compareAndProcessVersionFlow.label = 9;
            case 9:
              return [3, 11];
            case 10:
              if (validatedVersionData) {
                throw validatedVersionData.error;
              }
              return [7];
            case 11:
              return [7];
            case 12:
              if (hasProcessedValidVersion) {
                if (this.hasRemaining(1)) {
                  throw this.createExtraByteError(this.totalPos);
                }
                return [2, currentValidatedVersion];
              }
              ________validateAndProcessVersion = this;
              _________validateAndProcessVersion =
                ________validateAndProcessVersion.headByte;
              __________validateAndProcessVersion =
                ________validateAndProcessVersion.pos;
              _validatedVersion = ________validateAndProcessVersion.totalPos;
              throw new RangeError(
                `Insufficient data in parsing ${formatAsHexWithSign(_________validateAndProcessVersion)} at ${_validatedVersion} (${__________validateAndProcessVersion} in the current buffer)`,
              );
          }
        },
      );
    });
  };
  initializeCodecSettings.prototype.decodeArrayStream = function (
    _processVersionIncrementHandling,
  ) {
    return this.decodeMultiAsync(_processVersionIncrementHandling, true);
  };
  initializeCodecSettings.prototype.decodeStream = function (
    __processVersionIncrementHandling,
  ) {
    return this.decodeMultiAsync(__processVersionIncrementHandling, false);
  };
  initializeCodecSettings.prototype.decodeMultiAsync = function (
    _processVersionIncrement,
    ___processVersionIncrementHandling,
  ) {
    return createAsyncIterator(this, arguments, function () {
      var processVersionIncrementHandler;
      var initialProcessVersion;
      var intermediateProcessResult;
      var processIncrementedResult;
      var latestProcessResult;
      var latestProcessVersion;
      var processIncrementedValue;
      var currentProcessIncrement;
      var processIncrementBuffer;
      return initializeBufferedProcess(
        this,
        function (processIncrementedVersion) {
          switch (processIncrementedVersion.label) {
            case 0:
              processVersionIncrementHandler =
                ___processVersionIncrementHandling;
              initialProcessVersion = -1;
              processIncrementedVersion.label = 1;
            case 1:
              processIncrementedVersion.trys.push([1, 13, 14, 19]);
              intermediateProcessResult = _createAsyncIterator(
                _processVersionIncrement,
              );
              processIncrementedVersion.label = 2;
            case 2:
              return [4, BufferProcessor(intermediateProcessResult.next())];
            case 3:
              processIncrementedResult = processIncrementedVersion.sent();
              if (processIncrementedResult.done) {
                return [3, 12];
              }
              latestProcessResult = processIncrementedResult.value;
              if (
                ___processVersionIncrementHandling &&
                initialProcessVersion === 0
              ) {
                throw this.createExtraByteError(this.totalPos);
              }
              this.appendBuffer(latestProcessResult);
              if (processVersionIncrementHandler) {
                initialProcessVersion = this.readArraySize();
                processVersionIncrementHandler = false;
                this.complete();
              }
              processIncrementedVersion.label = 4;
            case 4:
              processIncrementedVersion.trys.push([4, 9, , 10]);
              processIncrementedVersion.label = 5;
            case 5:
              return [4, BufferProcessor(this.doDecodeSync())];
            case 6:
              return [4, processIncrementedVersion.sent()];
            case 7:
              processIncrementedVersion.sent();
              if (--initialProcessVersion === 0) {
                return [3, 8];
              } else {
                return [3, 5];
              }
            case 8:
              return [3, 10];
            case 9:
              latestProcessVersion = processIncrementedVersion.sent();
              if (!(latestProcessVersion instanceof writeSignalOptions)) {
                throw latestProcessVersion;
              }
              return [3, 10];
            case 10:
              this.totalPos += this.pos;
              processIncrementedVersion.label = 11;
            case 11:
              return [3, 2];
            case 12:
              return [3, 19];
            case 13:
              processIncrementedValue = processIncrementedVersion.sent();
              currentProcessIncrement = {
                error: processIncrementedValue,
              };
              return [3, 19];
            case 14:
              processIncrementedVersion.trys.push([14, , 17, 18]);
              if (
                processIncrementedResult &&
                !processIncrementedResult.done &&
                (processIncrementBuffer = intermediateProcessResult.return)
              ) {
                return [
                  4,
                  BufferProcessor(
                    processIncrementBuffer.call(intermediateProcessResult),
                  ),
                ];
              } else {
                return [3, 16];
              }
            case 15:
              processIncrementedVersion.sent();
              processIncrementedVersion.label = 16;
            case 16:
              return [3, 18];
            case 17:
              if (currentProcessIncrement) {
                throw currentProcessIncrement.error;
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
  initializeCodecSettings.prototype.doDecodeSync = function () {
    _0x5be8bc: while (true) {
      var byteValue = this.readHeadByte();
      var decodedValue = undefined;
      if (byteValue >= 224) {
        decodedValue = byteValue - 256;
      } else if (byteValue < 192) {
        if (byteValue < 128) {
          decodedValue = byteValue;
        } else if (byteValue < 144) {
          var adjustedByteValue = byteValue - 128;
          if (adjustedByteValue !== 0) {
            this.pushMapState(adjustedByteValue);
            this.complete();
            continue _0x5be8bc;
          } else {
            decodedValue = {};
          }
        } else if (byteValue < 160) {
          var adjustedByteValue = byteValue - 144;
          if (adjustedByteValue !== 0) {
            this.pushArrayState(adjustedByteValue);
            this.complete();
            continue _0x5be8bc;
          } else {
            decodedValue = [];
          }
        } else {
          var _adjustedByteValue = byteValue - 160;
          decodedValue = this.decodeUtf8String(_adjustedByteValue, 0);
        }
      } else if (byteValue === 192) {
        decodedValue = null;
      } else if (byteValue === 194) {
        decodedValue = false;
      } else if (byteValue === 195) {
        decodedValue = true;
      } else if (byteValue === 202) {
        decodedValue = this.readF32();
      } else if (byteValue === 203) {
        decodedValue = this.readF64();
      } else if (byteValue === 204) {
        decodedValue = this.readU8();
      } else if (byteValue === 205) {
        decodedValue = this.readU16();
      } else if (byteValue === 206) {
        decodedValue = this.readU32();
      } else if (byteValue === 207) {
        decodedValue = this.readU64();
      } else if (byteValue === 208) {
        decodedValue = this.readI8();
      } else if (byteValue === 209) {
        decodedValue = this.readI16();
      } else if (byteValue === 210) {
        decodedValue = this.readI32();
      } else if (byteValue === 211) {
        decodedValue = this.readI64();
      } else if (byteValue === 217) {
        var _adjustedByteValue = this.lookU8();
        decodedValue = this.decodeUtf8String(_adjustedByteValue, 1);
      } else if (byteValue === 218) {
        var _adjustedByteValue = this.lookU16();
        decodedValue = this.decodeUtf8String(_adjustedByteValue, 2);
      } else if (byteValue === 219) {
        var _adjustedByteValue = this.lookU32();
        decodedValue = this.decodeUtf8String(_adjustedByteValue, 4);
      } else if (byteValue === 220) {
        var adjustedByteValue = this.readU16();
        if (adjustedByteValue !== 0) {
          this.pushArrayState(adjustedByteValue);
          this.complete();
          continue _0x5be8bc;
        } else {
          decodedValue = [];
        }
      } else if (byteValue === 221) {
        var adjustedByteValue = this.readU32();
        if (adjustedByteValue !== 0) {
          this.pushArrayState(adjustedByteValue);
          this.complete();
          continue _0x5be8bc;
        } else {
          decodedValue = [];
        }
      } else if (byteValue === 222) {
        var adjustedByteValue = this.readU16();
        if (adjustedByteValue !== 0) {
          this.pushMapState(adjustedByteValue);
          this.complete();
          continue _0x5be8bc;
        } else {
          decodedValue = {};
        }
      } else if (byteValue === 223) {
        var adjustedByteValue = this.readU32();
        if (adjustedByteValue !== 0) {
          this.pushMapState(adjustedByteValue);
          this.complete();
          continue _0x5be8bc;
        } else {
          decodedValue = {};
        }
      } else if (byteValue === 196) {
        var adjustedByteValue = this.lookU8();
        decodedValue = this.decodeBinary(adjustedByteValue, 1);
      } else if (byteValue === 197) {
        var adjustedByteValue = this.lookU16();
        decodedValue = this.decodeBinary(adjustedByteValue, 2);
      } else if (byteValue === 198) {
        var adjustedByteValue = this.lookU32();
        decodedValue = this.decodeBinary(adjustedByteValue, 4);
      } else if (byteValue === 212) {
        decodedValue = this.decodeExtension(1, 0);
      } else if (byteValue === 213) {
        decodedValue = this.decodeExtension(2, 0);
      } else if (byteValue === 214) {
        decodedValue = this.decodeExtension(4, 0);
      } else if (byteValue === 215) {
        decodedValue = this.decodeExtension(8, 0);
      } else if (byteValue === 216) {
        decodedValue = this.decodeExtension(16, 0);
      } else if (byteValue === 199) {
        var adjustedByteValue = this.lookU8();
        decodedValue = this.decodeExtension(adjustedByteValue, 1);
      } else if (byteValue === 200) {
        var adjustedByteValue = this.lookU16();
        decodedValue = this.decodeExtension(adjustedByteValue, 2);
      } else if (byteValue === 201) {
        var adjustedByteValue = this.lookU32();
        decodedValue = this.decodeExtension(adjustedByteValue, 4);
      } else {
        throw new handleVersionUpdate(
          `Unrecognized type byte: ${formatAsHexWithSign(byteValue)}`,
        );
      }
      this.complete();
      for (var stackProcessing = this.stack; stackProcessing.length > 0; ) {
        var currentStackElement = stackProcessing[stackProcessing.length - 1];
        if (currentStackElement.type === 0) {
          currentStackElement.array[currentStackElement.position] =
            decodedValue;
          currentStackElement.position++;
          if (currentStackElement.position === currentStackElement.size) {
            stackProcessing.pop();
            decodedValue = currentStackElement.array;
          } else {
            continue _0x5be8bc;
          }
        } else if (currentStackElement.type === 1) {
          if (!isStringOrNumber(decodedValue)) {
            throw new handleVersionUpdate(
              "The type of key must be string or number but " +
                typeof decodedValue,
            );
          }
          if (decodedValue === "__proto__") {
            throw new handleVersionUpdate("The key __proto__ is not allowed");
          }
          currentStackElement.key = decodedValue;
          currentStackElement.type = 2;
          continue _0x5be8bc;
        } else {
          currentStackElement.map[currentStackElement.key] = decodedValue;
          currentStackElement.readCount++;
          if (currentStackElement.readCount === currentStackElement.size) {
            stackProcessing.pop();
            decodedValue = currentStackElement.map;
          } else {
            currentStackElement.key = null;
            currentStackElement.type = 1;
            continue _0x5be8bc;
          }
        }
      }
      return decodedValue;
    }
  };
  initializeCodecSettings.prototype.readHeadByte = function () {
    if (this.headByte === signalBufferHandler) {
      this.headByte = this.readU8();
    }
    return this.headByte;
  };
  initializeCodecSettings.prototype.complete = function () {
    this.headByte = signalBufferHandler;
  };
  initializeCodecSettings.prototype.readArraySize = function () {
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
        throw new handleVersionUpdate(
          `Unrecognized array type byte: ${formatAsHexWithSign(arrayTypeByte)}`,
        );
      }
    }
  };
  initializeCodecSettings.prototype.pushMapState = function (
    isWritableStreamNeedDrain,
  ) {
    if (isWritableStreamNeedDrain > this.maxMapLength) {
      throw new handleVersionUpdate(
        `Max length exceeded: map length (${isWritableStreamNeedDrain}) > maxMapLengthLength (${this.maxMapLength})`,
      );
    }
    this.stack.push({
      type: 1,
      size: isWritableStreamNeedDrain,
      key: null,
      readCount: 0,
      map: {},
    });
  };
  initializeCodecSettings.prototype.pushArrayState = function (
    isWritableStateCorked,
  ) {
    if (isWritableStateCorked > this.maxArrayLength) {
      throw new handleVersionUpdate(
        `Max length exceeded: array length (${isWritableStateCorked}) > maxArrayLength (${this.maxArrayLength})`,
      );
    }
    this.stack.push({
      type: 0,
      size: isWritableStateCorked,
      array: new Array(isWritableStateCorked),
      position: 0,
    });
  };
  initializeCodecSettings.prototype.decodeUtf8String = function (
    isWritableStateErrored,
    hasErroredWritableState,
  ) {
    var keyDecoder;
    if (isWritableStateErrored > this.maxStrLength) {
      throw new handleVersionUpdate(
        `Max length exceeded: UTF-8 byte length (${isWritableStateErrored}) > maxStrLength (${this.maxStrLength})`,
      );
    }
    if (
      this.bytes.byteLength <
      this.pos + hasErroredWritableState + isWritableStateErrored
    ) {
      throw signalLengthModifier;
    }
    var updatedPosition = this.pos + hasErroredWritableState;
    var decodedData;
    if (
      this.stateIsMapKey() &&
      ((keyDecoder = this.keyDecoder) === null || keyDecoder === undefined
        ? undefined
        : keyDecoder.canBeCached(isWritableStateErrored))
    ) {
      decodedData = this.keyDecoder.decode(
        this.bytes,
        updatedPosition,
        isWritableStateErrored,
      );
    } else if (isWritableStateErrored > onDrainEventHandler) {
      decodedData = decodeBase64Subarray(
        this.bytes,
        updatedPosition,
        isWritableStateErrored,
      );
    } else {
      decodedData = _decodeBase64ToBytes(
        this.bytes,
        updatedPosition,
        isWritableStateErrored,
      );
    }
    this.pos += hasErroredWritableState + isWritableStateErrored;
    return decodedData;
  };
  initializeCodecSettings.prototype.stateIsMapKey = function () {
    if (this.stack.length > 0) {
      var topStackElement = this.stack[this.stack.length - 1];
      return topStackElement.type === 1;
    }
    return false;
  };
  initializeCodecSettings.prototype.decodeBinary = function (
    destroyWritableState,
    handleWritableState,
  ) {
    if (destroyWritableState > this.maxBinLength) {
      throw new handleVersionUpdate(
        `Max length exceeded: bin length (${destroyWritableState}) > maxBinLength (${this.maxBinLength})`,
      );
    }
    if (!this.hasRemaining(destroyWritableState + handleWritableState)) {
      throw signalLengthModifier;
    }
    var newPositionAfterHandleWritableState = this.pos + handleWritableState;
    var getBytesFromBuffer = this.bytes.subarray(
      newPositionAfterHandleWritableState,
      newPositionAfterHandleWritableState + destroyWritableState,
    );
    this.pos += handleWritableState + destroyWritableState;
    return getBytesFromBuffer;
  };
  initializeCodecSettings.prototype.decodeExtension = function (
    createWritableStreamFromReadableStream,
    initializeWritableState,
  ) {
    if (createWritableStreamFromReadableStream > this.maxExtLength) {
      throw new handleVersionUpdate(
        `Max length exceeded: ext length (${createWritableStreamFromReadableStream}) > maxExtLength (${this.maxExtLength})`,
      );
    }
    var _byteValue = this.view.getInt8(this.pos + initializeWritableState);
    var decodedStream = this.decodeBinary(
      createWritableStreamFromReadableStream,
      initializeWritableState + 1,
    );
    return this.extensionCodec.decode(decodedStream, _byteValue, this.context);
  };
  initializeCodecSettings.prototype.lookU8 = function () {
    return this.view.getUint8(this.pos);
  };
  initializeCodecSettings.prototype.lookU16 = function () {
    return this.view.getUint16(this.pos);
  };
  initializeCodecSettings.prototype.lookU32 = function () {
    return this.view.getUint32(this.pos);
  };
  initializeCodecSettings.prototype.readU8 = function () {
    var getNextUint8 = this.view.getUint8(this.pos);
    this.pos++;
    return getNextUint8;
  };
  initializeCodecSettings.prototype.readI8 = function () {
    var getNextInt8 = this.view.getInt8(this.pos);
    this.pos++;
    return getNextInt8;
  };
  initializeCodecSettings.prototype.readU16 = function () {
    var readUint16FromView = this.view.getUint16(this.pos);
    this.pos += 2;
    return readUint16FromView;
  };
  initializeCodecSettings.prototype.readI16 = function () {
    var getInt16Value = this.view.getInt16(this.pos);
    this.pos += 2;
    return getInt16Value;
  };
  initializeCodecSettings.prototype.readU32 = function () {
    var getNextUint32 = this.view.getUint32(this.pos);
    this.pos += 4;
    return getNextUint32;
  };
  initializeCodecSettings.prototype.readI32 = function () {
    var getCurrentViewInt32 = this.view.getInt32(this.pos);
    this.pos += 4;
    return getCurrentViewInt32;
  };
  initializeCodecSettings.prototype.readU64 = function () {
    var streamOffset = calculateStreamOffset(this.view, this.pos);
    this.pos += 8;
    return streamOffset;
  };
  initializeCodecSettings.prototype.readI64 = function () {
    var retrieveLargeInteger = getLargeIntegerFromBuffer(this.view, this.pos);
    this.pos += 8;
    return retrieveLargeInteger;
  };
  initializeCodecSettings.prototype.readF32 = function () {
    var getFloat32FromView = this.view.getFloat32(this.pos);
    this.pos += 4;
    return getFloat32FromView;
  };
  initializeCodecSettings.prototype.readF64 = function () {
    var getNextFloat64Value = this.view.getFloat64(this.pos);
    this.pos += 8;
    return getNextFloat64Value;
  };
  return initializeCodecSettings;
})();
var validateWritableState = {};
function decodeAndHandleNodeRemoval(
  validateAndHandleNodeRemoval,
  _validateWritableState = validateWritableState,
) {
  var extensionCodecDecoder = new isReadyToWrite(
    _validateWritableState.extensionCodec,
    _validateWritableState.context,
    _validateWritableState.maxStrLength,
    _validateWritableState.maxBinLength,
    _validateWritableState.maxArrayLength,
    _validateWritableState.maxMapLength,
    _validateWritableState.maxExtLength,
  );
  return extensionCodecDecoder.decode(validateAndHandleNodeRemoval);
}
var CustomEventEmitter = class {
  onWillDisposeEmitter = new processTarFileError();
  onWillDispose = this.onWillDisposeEmitter.event;
  onDidDisposeEmitter = new processTarFileError();
  onDidDispose = this.onDidDisposeEmitter.event;
  toDispose = [];
  isDisposed = false;
  onDispose(_eventEmitterHandler) {
    this.toDispose.push(CustomEventEmitter.create(_eventEmitterHandler));
  }
  dispose() {
    if (!this.isDisposed) {
      this.onWillDisposeEmitter.fire(null);
      this.isDisposed = true;
      this.toDispose.forEach((_disposeResource) => {
        _disposeResource.dispose();
      });
      this.onDidDisposeEmitter.fire(null);
      this.onWillDisposeEmitter.dispose();
      this.onDidDisposeEmitter.dispose();
    }
  }
  static is(isDisposable) {
    return typeof isDisposable.dispose == "function";
  }
  static create(disposeFunction) {
    return {
      dispose: disposeFunction,
    };
  }
};
var processTarFileError = class {
  registeredListeners = new Set();
  _event;
  get event() {
    this._event ||= (addEventListener) => {
      this.registeredListeners.add(addEventListener);
      return CustomEventEmitter.create(() => {
        this.registeredListeners.delete(addEventListener);
      });
    };
    return this._event;
  }
  fire(triggerEvent) {
    this.registeredListeners.forEach((handleTriggerEvent) => {
      handleTriggerEvent(triggerEvent);
    });
  }
  dispose() {
    this.registeredListeners = new Set();
  }
};
var handleAsyncError = (0, _handleUnpipeEvent.default)();
var handleErrorResponse = (streamProperties) =>
  encodeStreamProperties(streamProperties, {
    ignoreUndefined: true,
  });
var handleAsyncFlow = class {
  endpoints = new Map();
  nodeMap = new Map();
  onMessageEmitter = new processTarFileError();
  onMessage = this.onMessageEmitter.event;
  constructor() {}
  getEndpointForNode(getEndpointForNode) {
    let _endpointForNode = this.nodeMap.get(getEndpointForNode);
    if (_endpointForNode) {
      let ___endpointForNode = this.endpoints.get(_endpointForNode);
      if (___endpointForNode) {
        return ___endpointForNode;
      }
    }
  }
  addEndpoint(addEndpointWithRouterAnnounce, routerAnnounceEndpoint) {
    this.endpoints.set(addEndpointWithRouterAnnounce, routerAnnounceEndpoint);
    routerAnnounceEndpoint.onMessage(
      (thisHandleMessageEndpointIdAddEndpointWithRouterAnnounce) =>
        this.handleMessage(
          thisHandleMessageEndpointIdAddEndpointWithRouterAnnounce,
          addEndpointWithRouterAnnounce,
        ),
    );
    let errorResponse = handleErrorResponse({
      $type: "router-announce",
      $origin: handleAsyncError,
    });
    routerAnnounceEndpoint.send(errorResponse, [errorResponse.buffer]);
  }
  removeEndpoint(endpointId) {
    this.endpoints.delete(endpointId);
  }
  send(targetEndpoint, _messageData, isActive = true) {
    let routerMessage = {
      $type: "router-message",
      $origin: handleAsyncError,
      $target: targetEndpoint,
      $data: _messageData,
    };
    if (targetEndpoint !== handleAsyncError) {
      let endpointForNode = this.getEndpointForNode(targetEndpoint);
      if (!endpointForNode) {
        throw new Error("Endpoint " + targetEndpoint + " not registered");
      }
      if (isActive) {
        let _errorResponse = handleErrorResponse(routerMessage);
        endpointForNode.send(_errorResponse, [_errorResponse.buffer]);
      } else {
        endpointForNode.send(routerMessage, []);
      }
    } else {
      this.onMessageEmitter.fire(routerMessage);
    }
  }
  broadcast(broadcastMessage, excluderEndpoint, originEndpoint) {
    let broadcastPayload = {
      $type: "router-broadcast",
      $origin: originEndpoint ?? handleAsyncError,
      $data: broadcastMessage,
    };
    if (!excluderEndpoint && !originEndpoint) {
      this.onMessageEmitter.fire(broadcastPayload);
    }
    for (let [endpointKey, endpointConnection] of this.endpoints.entries()) {
      if (endpointKey === excluderEndpoint) {
        continue;
      }
      let errorResponseBuffer = handleErrorResponse(broadcastPayload);
      endpointConnection.send(errorResponseBuffer, [
        errorResponseBuffer.buffer,
      ]);
    }
  }
  handleMessage(messagePayload, messageHandler) {
    let isMessagePayloadUint8Array = messagePayload instanceof Uint8Array;
    let parsedMessagePayload = isMessagePayloadUint8Array
      ? decodeAndHandleNodeRemoval(messagePayload)
      : messagePayload;
    if (parsedMessagePayload.$origin) {
      if (!this.nodeMap.has(parsedMessagePayload.$origin)) {
        this.nodeMap.set(parsedMessagePayload.$origin, messageHandler);
      }
      if (parsedMessagePayload.$type === "router-broadcast") {
        let _parsedMessage = parsedMessagePayload;
        this.broadcast(
          _parsedMessage.$data,
          messageHandler,
          _parsedMessage.$origin,
        );
        this.onMessageEmitter.fire(parsedMessagePayload);
        return;
      }
      if (parsedMessagePayload.$type === "router-message") {
        let parsedMessage = parsedMessagePayload;
        if (parsedMessage.$target === handleAsyncError) {
          this.onMessageEmitter.fire(parsedMessagePayload);
        } else {
          let __endpointForNode = this.getEndpointForNode(
            parsedMessage.$target,
          );
          if (__endpointForNode) {
            __endpointForNode.send(
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
var createStreamWithCallback;
function initializeAsyncStream() {
  createStreamWithCallback ||= new handleAsyncFlow();
  return createStreamWithCallback;
}
var createAsyncIterableWithSignal = class extends MessageEvent {
  constructor(parentConstructorArgument1, parentConstructorArgument2) {
    super(parentConstructorArgument1, parentConstructorArgument2);
  }
};
var promiseHandler = class extends EventTarget {
  addEventListener(
    addEventListenerWithCustomParams,
    ___eventHandler,
    eventOptions,
  ) {
    return super.addEventListener(
      addEventListenerWithCustomParams,
      ___eventHandler,
      eventOptions,
    );
  }
  removeEventListener(
    removeEventListenerByType,
    eventListenerToRemove,
    eventListenerOptions,
  ) {
    return super.removeEventListener(
      removeEventListenerByType,
      eventListenerToRemove,
      eventListenerOptions,
    );
  }
  dispatchEvent(eventToDispatch) {
    return super.dispatchEvent(eventToDispatch);
  }
};
var createChunkGenerator = /(%?)(%([sdjo]))/g;
function processInputBasedOnType(
  createAsyncIteratorWithCancellation,
  processChunkAndNotify,
) {
  switch (processChunkAndNotify) {
    case "s":
      return createAsyncIteratorWithCancellation;
    case "d":
    case "i":
      return Number(createAsyncIteratorWithCancellation);
    case "j":
      return JSON.stringify(createAsyncIteratorWithCancellation);
    case "o": {
      if (typeof createAsyncIteratorWithCancellation == "string") {
        return createAsyncIteratorWithCancellation;
      }
      let asyncIteratorStringRepresentation = JSON.stringify(
        createAsyncIteratorWithCancellation,
      );
      if (
        asyncIteratorStringRepresentation === "{}" ||
        asyncIteratorStringRepresentation === "[]" ||
        /^\[object .+?\]$/.test(asyncIteratorStringRepresentation)
      ) {
        return createAsyncIteratorWithCancellation;
      } else {
        return asyncIteratorStringRepresentation;
      }
    }
  }
}
function processWriteOperation(handleWriteOperation, ...writeOperationArgs) {
  if (writeOperationArgs.length === 0) {
    return handleWriteOperation;
  }
  let currentWriteOperationIndex = 0;
  let formattedWriteOperation = handleWriteOperation.replace(
    createChunkGenerator,
    (
      _handleWriteOperation,
      shouldProcessWriteOperation,
      writeOperationHandler,
      inputProcessingHandler,
    ) => {
      let currentWriteOperationArgs =
        writeOperationArgs[currentWriteOperationIndex];
      let processedInput = processInputBasedOnType(
        currentWriteOperationArgs,
        inputProcessingHandler,
      );
      if (shouldProcessWriteOperation) {
        return _handleWriteOperation;
      } else {
        currentWriteOperationIndex++;
        return processedInput;
      }
    },
  );
  if (currentWriteOperationIndex < writeOperationArgs.length) {
    formattedWriteOperation +=
      " " + writeOperationArgs.slice(currentWriteOperationIndex).join(" ");
  }
  formattedWriteOperation = formattedWriteOperation.replace(/%{2,2}/g, "%");
  return formattedWriteOperation;
}
var callbackFunction = 2;
function updateStackTrace(setCallbackOnSuccess) {
  if (!setCallbackOnSuccess.stack) {
    return;
  }
  let stackTraceLines = setCallbackOnSuccess.stack.split("\n");
  stackTraceLines.splice(1, callbackFunction);
  setCallbackOnSuccess.stack = stackTraceLines.join("\n");
}
var createStreamInstance = class extends Error {
  constructor(processInvariantViolation, ...additionalParameters) {
    super(processInvariantViolation);
    this.message = processInvariantViolation;
    this.name = "Invariant Violation";
    this.message = processWriteOperation(
      processInvariantViolation,
      ...additionalParameters,
    );
    updateStackTrace(this);
  }
};
var isWritable = (
  shouldThrowErrorIfInstanceIsInvalid,
  streamInstance,
  ..._errorHandler
) => {
  if (!shouldThrowErrorIfInstanceIsInvalid) {
    throw new createStreamInstance(streamInstance, ..._errorHandler);
  }
};
isWritable.as = (
  HandleWriteOperationError,
  isErrorConditionMet,
  writeOperationData,
  ...additionalWriteOperationParameters
) => {
  if (!isErrorConditionMet) {
    throw HandleWriteOperationError.prototype.name != null
      ? new HandleWriteOperationError(
          processWriteOperation(
            writeOperationData,
            additionalWriteOperationParameters,
          ),
        )
      : HandleWriteOperationError(
          processWriteOperation(
            writeOperationData,
            additionalWriteOperationParameters,
          ),
        );
  }
};
function validateEventListener(
  handleEventListener,
  nullishValueMessage = "Value is nullish",
) {
  isWritable(handleEventListener != null, nullishValueMessage);
  return handleEventListener;
}
var eventDestroyer = "preview-manager";
var streamProcessor = "preview/open";
var dataStream = "preview/ready";
var streamWriter = "preview/port-taken";
var _streamWriter = "preview/close";
var dataStreamHandler = "preview/closed";
var _streamProcessor = "preview/request";
var isWritableStream = "preview/manager-ack";
var isWritableMode = "bridge/init";
var _isWritableStream = "preview/runtime-request";
var _isWritableMode = "preview/runtime-response";
var _isWritable = "{{identifier}}.nodebox.codesandbox.io";
var _handleStreamEvents = initializeAsyncStream();
var handleEventCallback = class {
  constructor(projectId) {
    this.projectId = projectId;
    _handleStreamEvents.onMessage((handleChannelEvent) => {
      let originNode = handleChannelEvent.$origin;
      let channelEventData = handleChannelEvent.$data;
      if (channelEventData.$channel_name === eventDestroyer) {
        switch (channelEventData.$type) {
          case _streamProcessor: {
            if (handleChannelEvent.$type === "router-broadcast") {
              break;
            }
            let channelEventPayload = channelEventData;
            channelEventPayload.$bridge_node = handleChannelEvent.$origin;
            let destinationPort = this.ports.get(channelEventPayload.port);
            if (destinationPort) {
              _handleStreamEvents.send(destinationPort, channelEventPayload);
            }
            break;
          }
          case streamProcessor: {
            let __channelEvent = channelEventData;
            if (this.ports.has(__channelEvent.port)) {
              let streamEventPayload = {
                $channel_name: eventDestroyer,
                $type: streamWriter,
                port: __channelEvent.port,
              };
              _handleStreamEvents.send(originNode, streamEventPayload);
            } else {
              this.ports.set(__channelEvent.port, originNode);
              this.openPort(__channelEvent.port);
            }
            break;
          }
          case _streamWriter: {
            let ____channelEvent = channelEventData;
            this.closePort(____channelEvent.port);
            break;
          }
          case dataStream: {
            let channelEvent = channelEventData;
            this.bridges.set(channelEvent.port, handleChannelEvent.$origin);
            let channelEventDetails = {
              $channel_name: eventDestroyer,
              $type: isWritableStream,
            };
            _handleStreamEvents.send(
              handleChannelEvent.$origin,
              channelEventDetails,
            );
            let iframeId = this.getIframeId(channelEventData.port);
            let baseLink = this.getBaseLink(channelEventData.port);
            if (this.layoutDevMode) {
              let previewIframe = this.createIframe(
                iframeId,
                baseLink,
                "preview",
              );
              previewIframe.style.border = "1px solid black";
              previewIframe.style.height = "40vh";
            }
            this.emitter.dispatchEvent(
              new createAsyncIterableWithSignal("port/ready", {
                data: {
                  port: channelEvent.port,
                  url: baseLink,
                  sourceShellId: validateEventListener(
                    this.ports.values().next().value,
                    "The worker doesn't exist for the given port",
                  ),
                },
              }),
            );
            break;
          }
          case _isWritableStream: {
            let _channelEvent = channelEventData;
            if (_channelEvent.data.type === "websocket/open") {
              this.websocketClients.set(
                _channelEvent.data.wsId,
                _channelEvent.data.port,
              );
            }
            let wsPort = this.websocketClients.get(_channelEvent.data.wsId);
            if (!wsPort) {
              console.warn("WS Port not found for " + _channelEvent.data.wsId);
              return;
            }
            let portHandler = this.ports.get(wsPort);
            if (portHandler) {
              _handleStreamEvents.send(portHandler, _channelEvent);
            }
            this.runtimes.set(
              _channelEvent.runtimeId,
              handleChannelEvent.$origin,
            );
            break;
          }
          case _isWritableMode: {
            let ___channelEvent = channelEventData;
            let runtimeInstance = this.runtimes.get(___channelEvent.runtimeId);
            if (runtimeInstance) {
              _handleStreamEvents.send(runtimeInstance, channelEventData);
            }
            break;
          }
          default: {
            console.warn("Unkown preview message", channelEventData);
            break;
          }
        }
      }
    });
  }
  ports = new Map();
  bridges = new Map();
  websocketClients = new Map();
  runtimes = new Map();
  emitter = new promiseHandler();
  layoutDevMode =
    new URLSearchParams(window.location.search).get("layout") === "debug";
  getIframeId(getIframeIdByProject) {
    return "iframe-" + this.projectId + "-" + getIframeIdByProject;
  }
  createIframe(createIframeWithFrameId, iframeSourceUrl, iframeName) {
    let _iframeElement = document.createElement("iframe");
    let previewsListElement = document.getElementById("previews-list");
    _iframeElement.src = iframeSourceUrl;
    _iframeElement.allow = "cross-origin-isolated";
    _iframeElement.setAttribute("data-frame-id", createIframeWithFrameId);
    if (iframeName) {
      _iframeElement.setAttribute("name", iframeName);
    }
    previewsListElement?.appendChild(_iframeElement);
    return _iframeElement;
  }
  getPortFromShellId(getPortFromShellId) {
    return [...this.ports.entries()].find(
      ({ 1: userInteractionHandler }) =>
        userInteractionHandler === getPortFromShellId,
    )?.[0];
  }
  getBaseLink(getBaseLinkWithId) {
    let identifierLink = this.projectId + "-" + getBaseLinkWithId;
    if (_isWritable.includes("{{identifier}}")) {
      return "https://" + _isWritable.replace("{{identifier}}", identifierLink);
    } else {
      return "https://" + identifierLink + "." + _isWritable;
    }
  }
  openPort(openPortNumber) {
    let iframeBaseLink = this.getBaseLink(openPortNumber);
    let getIframeElement = this.getIframeId(openPortNumber);
    let iframeElement = this.createIframe(
      getIframeElement,
      "index.html",
      "bridge",
    );
    if (this.layoutDevMode) {
      iframeElement.style.border = "1px solid black";
    }
    document.getElementById("bridge")?.appendChild(iframeElement);
    let iframeContentWindow = iframeElement.contentWindow;
    if (!iframeContentWindow) {
      throw new Error("Could not get iframe contentWindow");
    }
    let messageChannel = new MessageChannel();
    iframeElement.onload = () => {
      let iframeMessagePayload = {
        $type: isWritableMode,
      };
      iframeContentWindow.postMessage(iframeMessagePayload, "*", [
        messageChannel.port2,
      ]);
      _handleStreamEvents.addEndpoint(getIframeElement, {
        send: (postMessageToChannel, ____messageData) =>
          messageChannel.port1.postMessage(
            postMessageToChannel,
            ____messageData,
          ),
        onMessage: (handleMessageFromPort1) => {
          messageChannel.port1.onmessage = (messageDataFromPort1) => {
            handleMessageFromPort1(messageDataFromPort1.data);
          };
        },
      });
    };
    if (this.layoutDevMode) {
      let _previewsListElement = document.getElementById("previews-list");
      let previewLinkElement = document.createElement("a");
      previewLinkElement.setAttribute("data-port", String(openPortNumber));
      previewLinkElement.href = iframeBaseLink;
      previewLinkElement.target = "_blank";
      previewLinkElement.innerText = "localhost:" + openPortNumber;
      _previewsListElement?.appendChild(previewLinkElement);
    }
  }
  closePort(closePortById) {
    let _iframeId = this.getIframeId(closePortById);
    document
      .querySelectorAll('[data-frame-id="' + _iframeId + '"]')
      ?.forEach((_elementToRemove) => {
        _elementToRemove.remove();
      });
    document.querySelector('[data-port="' + closePortById + '"]')?.remove();
    let closedPortObject = this.ports.get(closePortById);
    this.ports.delete(closePortById);
    this.bridges.delete(closePortById);
    _handleStreamEvents.removeEndpoint(_iframeId);
    if (closedPortObject) {
      let streamEventSettings = {
        $channel_name: eventDestroyer,
        $type: dataStreamHandler,
        port: closePortById,
      };
      _handleStreamEvents.broadcast(streamEventSettings);
    }
  }
};
var EventEmitterConstructor = defineModuleExports(
  ____validateAndReturnIntrinsicProperty(),
);
____updateIntrinsicProperties();
var setHighWaterMarkAndTransform = window.localStorage.CSB_EMULATOR_DEBUG;
function createFlushHandler(flushCallback) {
  return function (_pauseIfWritable, ...additionalArguments) {};
}
var _handleReadableState = defineModuleExports(decodeUnicodeCharacter());
var processWritableState = (errorWithContext) => {
  let createErrorWithContext = new Error(errorWithContext.message);
  for (let errorKey of Object.keys(errorWithContext)) {
    createErrorWithContext[errorKey] = errorWithContext[errorKey];
  }
  return createErrorWithContext;
};
____updateIntrinsicProperties();
var readableHighWaterMark = class extends Error {
  code;
  syscall;
  path;
  errno;
  constructor(errorMessage, errorCode, syscall, filePath, errorNumber) {
    super(
      "Error: " +
        errorCode +
        ": " +
        errorMessage +
        ", " +
        syscall +
        " '" +
        filePath +
        "'",
    );
    this.code = errorCode;
    this.syscall = syscall;
    this.path = filePath;
    this.errno = errorNumber;
  }
};
var executeFlushOperation = class extends readableHighWaterMark {
  constructor(____filePath, existingFilePath) {
    super("file already exists", "EEXIST", ____filePath, existingFilePath, -17);
  }
};
var handleFlushEvent = class extends readableHighWaterMark {
  constructor(___filePath, unknownFileError) {
    super(
      "no such file or directory",
      "ENOENT",
      ___filePath,
      unknownFileError,
      -2,
    );
  }
};
var flushBuffer = class extends readableHighWaterMark {
  constructor(directoryOperationError, directoryPath) {
    super(
      "illegal operation on a directory",
      "EISDIR",
      directoryOperationError,
      directoryPath,
      -21,
    );
  }
};
var __processData = class extends readableHighWaterMark {
  constructor(directoryPathError, __errorCode) {
    super("not a directory", "ENOTDIR", directoryPathError, __errorCode, -20);
  }
};
var _handleErrorAndCleanupListeners = class extends readableHighWaterMark {
  constructor(_directoryPath, errorDetail) {
    super("directory not empty", "ENOTEMPTY", _directoryPath, errorDetail, -39);
  }
};
var ___writableState = class extends readableHighWaterMark {
  constructor(invalidArgumentError, contextInfo) {
    super("invalid argument", "EINVAL", invalidArgumentError, contextInfo, -22);
  }
};
var _handleWritableState = class extends readableHighWaterMark {
  constructor(socketOperationError, socketErrorDetails) {
    super(
      "operation not supported on socket",
      "ENOTSUP",
      socketOperationError,
      socketErrorDetails,
      -45,
    );
  }
};
var onResourceCleanup = class extends readableHighWaterMark {
  constructor(errorOptions, errorReference) {
    super(
      "too many symbolic links encountered",
      "ELOOP",
      errorOptions,
      errorReference,
      -62,
    );
  }
};
var ___cleanupEventListeners = {
  UV_FS_SYMLINK_DIR: 1,
  UV_FS_SYMLINK_JUNCTION: 2,
  O_RDONLY: 0,
  O_WRONLY: 1,
  O_RDWR: 2,
  UV_DIRENT_UNKNOWN: 0,
  UV_DIRENT_FILE: 1,
  UV_DIRENT_DIR: 2,
  UV_DIRENT_LINK: 3,
  UV_DIRENT_FIFO: 4,
  UV_DIRENT_SOCKET: 5,
  UV_DIRENT_CHAR: 6,
  UV_DIRENT_BLOCK: 7,
  S_IFMT: 61440,
  S_IFREG: 32768,
  S_IFDIR: 16384,
  S_IFCHR: 8192,
  S_IFBLK: 24576,
  S_IFIFO: 4096,
  S_IFLNK: 40960,
  S_IFSOCK: 49152,
  O_CREAT: 512,
  O_EXCL: 2048,
  UV_FS_O_FILEMAP: 0,
  O_NOCTTY: 131072,
  O_TRUNC: 1024,
  O_APPEND: 8,
  O_DIRECTORY: 1048576,
  O_NOFOLLOW: 256,
  O_SYNC: 128,
  O_DSYNC: 4194304,
  O_SYMLINK: 2097152,
  O_NONBLOCK: 4,
  S_IRWXU: 448,
  S_IRUSR: 256,
  S_IWUSR: 128,
  S_IXUSR: 64,
  S_IRWXG: 56,
  S_IRGRP: 32,
  S_IWGRP: 16,
  S_IXGRP: 8,
  S_IRWXO: 7,
  S_IROTH: 4,
  S_IWOTH: 2,
  S_IXOTH: 1,
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
  UV_FS_COPYFILE_EXCL: 1,
  COPYFILE_EXCL: 1,
  UV_FS_COPYFILE_FICLONE: 2,
  COPYFILE_FICLONE: 2,
  UV_FS_COPYFILE_FICLONE_FORCE: 4,
  COPYFILE_FICLONE_FORCE: 4,
};
var EventListenerHandler = class {
  mode;
  size;
  ino;
  atimeMs;
  mtimeMs;
  ctimeMs;
  birthtimeMs;
  atime;
  mtime;
  ctime;
  birthtime;
  uid;
  gid;
  dev;
  nlink;
  rdev;
  blksize;
  blocks;
  constructor(
    FileSystemStatsConstructor,
    fileMode,
    numberOfLinks,
    ownerUserId,
    groupId,
    deviceIdentifier,
    blockSize,
    inodeNumber,
    fileSize,
    numberOfBlocks,
    lastAccessTimeMs,
    modificationTimeMs,
    creationTimeMs,
    birthtimeMs,
  ) {
    this.dev = FileSystemStatsConstructor;
    this.size = fileSize;
    this.ino = inodeNumber;
    this.atimeMs = lastAccessTimeMs;
    this.mtimeMs = modificationTimeMs;
    this.ctimeMs = creationTimeMs;
    this.birthtimeMs = creationTimeMs;
    this.atime = new Date(lastAccessTimeMs);
    this.mtime = new Date(modificationTimeMs);
    this.ctime = new Date(creationTimeMs);
    this.birthtime = new Date(birthtimeMs);
    this.blocks = numberOfBlocks;
    this.nlink = numberOfLinks;
    this.uid = ownerUserId;
    this.gid = groupId;
    this.rdev = deviceIdentifier;
    this.blksize = blockSize;
    this.mode = fileMode;
  }
  #e(isCleanupEventListenerMode) {
    return (
      (this.mode & ___cleanupEventListeners.S_IFMT) ===
      isCleanupEventListenerMode
    );
  }
  isFile() {
    return this.#e(___cleanupEventListeners.S_IFREG);
  }
  isDirectory() {
    return this.#e(___cleanupEventListeners.S_IFDIR);
  }
  isSymbolicLink() {
    return this.#e(___cleanupEventListeners.S_IFLNK);
  }
  isSocket() {
    return false;
  }
  isFIFO() {
    return false;
  }
  isCharacterDevice() {
    return false;
  }
  isBlockDevice() {
    return false;
  }
};
var validateAbortSignalAndReturnOptions = 4096;
function createEventListenerHandler(_validateAndHandleAbortSignal) {
  let abortSignalType = _validateAndHandleAbortSignal.type;
  let abortSignalValue =
    abortSignalType === 0 ? 16895 : abortSignalType === 2 ? 41453 : 33279;
  let minRequiredSignalSize =
    abortSignalType === 0
      ? 0
      : Math.max(
          8,
          Math.ceil(
            _validateAndHandleAbortSignal.size /
              validateAbortSignalAndReturnOptions,
          ),
        );
  return new EventListenerHandler(
    1,
    abortSignalValue,
    1,
    1,
    1,
    0,
    validateAbortSignalAndReturnOptions,
    _validateAndHandleAbortSignal.ino,
    _validateAndHandleAbortSignal.size,
    minRequiredSignalSize,
    _validateAndHandleAbortSignal.atimeMs,
    _validateAndHandleAbortSignal.mtimeMs,
    _validateAndHandleAbortSignal.ctimeMs,
    _validateAndHandleAbortSignal.ctimeMs,
  );
}
____updateIntrinsicProperties();
function getBufferWriteEncodingFromAbortSignalManager(abortSignalManager) {
  return _bufferWriteEncoding.from(abortSignalManager);
}
function validateAndConvertProperty(
  ____________________________validateAndReturnIntrinsicProperty,
  validateAbortSignalAndConnect,
) {
  if (
    typeof ____________________________validateAndReturnIntrinsicProperty ==
    "string"
  ) {
    return _bufferWriteEncoding.from(
      ____________________________validateAndReturnIntrinsicProperty,
      validateAbortSignalAndConnect,
    );
  } else {
    return _bufferWriteEncoding.from(
      ____________________________validateAndReturnIntrinsicProperty,
    );
  }
}
function getProcessedAbortSignal(processAbortSignal) {
  if (typeof processAbortSignal == "string") {
    return processAbortSignal;
  } else if (processAbortSignal instanceof _bufferWriteEncoding) {
    return processAbortSignal.toString("utf-8");
  } else {
    return processAbortSignal.pathname;
  }
}
function extractPathSegments(abortSignalHandler) {
  let __pathSegments = resolvePath(abortSignalHandler).split("/");
  __pathSegments.shift();
  return __pathSegments;
}
function combineCleanupHandlers(
  promiseCleanupHandler,
  destroyStreamAndCleanupHandler,
) {
  if (
    promiseCleanupHandler.endsWith("/") ||
    destroyStreamAndCleanupHandler.startsWith("/")
  ) {
    return promiseCleanupHandler + destroyStreamAndCleanupHandler;
  } else {
    return promiseCleanupHandler + "/" + destroyStreamAndCleanupHandler;
  }
}
var cleanupSignalHandler = 0;
function incrementCleanupSignalHandler() {
  return (cleanupSignalHandler += 1);
}
function serializeLastStreamElement(getLastStreamElement) {
  if (
    getLastStreamElement instanceof abortSignal ||
    getLastStreamElement instanceof awaitFormatStringWithPlaceholders ||
    getLastStreamElement instanceof dataProcessingFunction
  ) {
    return getLastStreamElement.serialize();
  }
  throw new Error("Not serializable");
}
function deserializeAbortSignal(
  abortSignalValidator,
  getAbortedPromiseResult,
  _abortSignalHandler,
) {
  switch (abortSignalValidator.type) {
    case 0:
      return abortSignal.deserialize(
        abortSignalValidator,
        getAbortedPromiseResult,
        _abortSignalHandler,
      );
    case 1:
      return awaitFormatStringWithPlaceholders.deserialize(
        abortSignalValidator,
        getAbortedPromiseResult,
        _abortSignalHandler,
      );
    case 2:
      return dataProcessingFunction.deserialize(
        abortSignalValidator,
        getAbortedPromiseResult,
      );
    default:
      throw new Error("Unknown node type");
  }
}
var handleAbortSignal = class {
  getPath() {
    if (this.parent) {
      if (!this.parent.name && !this.parent.parent) {
        return "/" + this.name;
      } else {
        return this.parent.getPath() + "/" + this.name;
      }
    } else {
      return "/";
    }
  }
  getPathParts(currentPathParts = []) {
    if (this.name) {
      currentPathParts.unshift(this.name);
    }
    if (this.parent) {
      currentPathParts = this.parent.getPathParts(currentPathParts);
    }
    return currentPathParts;
  }
  rename(updateNameAndTimestamp) {
    this.name = updateNameAndTimestamp;
    this.stats.mtimeMs = Date.now();
  }
};
function createFileMetadata(handleStringFormattingDrain, handleAsyncWrite) {
  return {
    type: handleStringFormattingDrain,
    size: handleAsyncWrite,
    ino: incrementCleanupSignalHandler(),
    mtimeMs: Date.now(),
    ctimeMs: Date.now(),
    atimeMs: Date.now(),
  };
}
var dataProcessingFunction = class extends handleAbortSignal {
  name;
  stats;
  target;
  parent;
  constructor(entityName, targetEntity, parentEntity) {
    super();
    this.name = entityName;
    this.stats = createFileMetadata(2, 128);
    this.target = targetEntity;
    this.parent = parentEntity;
  }
  serialize() {
    return {
      type: 2,
      name: this.name,
      stats: this.stats,
      target: this.target,
    };
  }
  static deserialize(deserializeData, processingFunction) {
    let dataProcessingInstance = new dataProcessingFunction(
      deserializeData.name,
      deserializeData.target,
      processingFunction,
    );
    dataProcessingInstance.stats = deserializeData.stats;
    return dataProcessingInstance;
  }
};
var awaitFormatStringWithPlaceholders = class extends handleAbortSignal {
  constructor(
    constructorNameContentParentCoreFS,
    contentSize,
    parentContent,
    coreFileSystem,
  ) {
    super();
    this.coreFS = coreFileSystem;
    this.name = constructorNameContentParentCoreFS;
    this.content = contentSize;
    this.stats = createFileMetadata(1, contentSize.byteLength);
    this.parent = parentContent;
  }
  name;
  stats;
  content;
  parent;
  write(writeContentWithStats, ___isFeatureEnabled = false) {
    this.content = writeContentWithStats;
    this.stats.size = writeContentWithStats.byteLength;
    this.stats.mtimeMs = Date.now();
    this.coreFS.emitWrite(this, writeContentWithStats, ___isFeatureEnabled);
  }
  serialize() {
    return {
      type: 1,
      name: this.name,
      stats: this.stats,
      content: this.content,
    };
  }
  static deserialize(
    deserializeContentWithStats,
    contentPlaceholders,
    placeholderIdentifier,
  ) {
    let formattedContentWithStats = new awaitFormatStringWithPlaceholders(
      deserializeContentWithStats.name,
      deserializeContentWithStats.content,
      contentPlaceholders,
      placeholderIdentifier,
    );
    formattedContentWithStats.stats = deserializeContentWithStats.stats;
    return formattedContentWithStats;
  }
};
var abortSignal = class extends handleAbortSignal {
  constructor(fileConstructorParameters, parentDirectory, _coreFileSystem) {
    super();
    this.coreFS = _coreFileSystem;
    this.name = fileConstructorParameters;
    this.parent = parentDirectory;
    this.stats = createFileMetadata(0, 128);
  }
  name;
  stats;
  children = new Map();
  parent;
  getChild(getChildById) {
    return this.children.get(getChildById);
  }
  addChild(
    ____childNode,
    ____isFeatureEnabled = true,
    isEligibleForDiscount = false,
  ) {
    this.children.set(____childNode.name, ____childNode);
    this.stats.mtimeMs = Date.now();
    if (____isFeatureEnabled) {
      this.coreFS.emitNodeCreation(this, ____childNode, isEligibleForDiscount);
    }
  }
  removeChild(removeChildByNode, _isActive = true, _isUserLoggedIn = false) {
    this.children.delete(removeChildByNode);
    this.stats.mtimeMs = Date.now();
    if (_isActive) {
      this.coreFS.emitNodeDeletion(this, removeChildByNode, _isUserLoggedIn);
    }
  }
  serialize() {
    return {
      type: 0,
      name: this.name,
      stats: this.stats,
    };
  }
  static deserialize(
    createAbortSignalFromSerializedData,
    serializedAbortSignal,
    abortSignalCreationParams,
  ) {
    let abortSignalInstance = new abortSignal(
      createAbortSignalFromSerializedData.name,
      serializedAbortSignal,
      abortSignalCreationParams,
    );
    abortSignalInstance.stats = createAbortSignalFromSerializedData.stats;
    return abortSignalInstance;
  }
};
var processErrorHandling = class {
  root = new abortSignal("", undefined, this);
  emitter = new processTarFileError();
  onFSEvent = this.emitter.event;
  emitNodeCreation(
    emitNodeCreationParentNodeNewNodeStreamElementIsSynchronous,
    newNodeCreationData,
    isSynchronous,
  ) {
    this.emitter.fire({
      type: "create",
      parent:
        emitNodeCreationParentNodeNewNodeStreamElementIsSynchronous.getPath(),
      newNode: serializeLastStreamElement(newNodeCreationData),
      isSync: isSynchronous,
    });
  }
  emitNodeDeletion(
    emitNodeDeletionParentNodeChildNodeNameIsSynchronous,
    deletedNodeName,
    isDeletionSynchronous,
  ) {
    this.emitter.fire({
      type: "remove",
      parent: emitNodeDeletionParentNodeChildNodeNameIsSynchronous.getPath(),
      name: deletedNodeName,
      isSync: isDeletionSynchronous,
    });
  }
  emitWrite(emitWriteEvent, contentData, _isSynchronous) {
    this.emitter.fire({
      type: "write",
      path: emitWriteEvent.getPath(),
      content: contentData,
      isSync: _isSynchronous,
    });
  }
  resolveSymlink(resolveSymlinkForNode) {
    let resolveSymlinkDepth = 0;
    let _currentNode = resolveSymlinkForNode;
    while (_currentNode instanceof dataProcessingFunction) {
      if (resolveSymlinkDepth > 10) {
        throw new onResourceCleanup("open", resolveSymlinkForNode.getPath());
      }
      _currentNode = this.getNodeAtPath(
        extractPathSegments(_currentNode.target),
        _currentNode.target,
      );
      resolveSymlinkDepth++;
    }
    return _currentNode;
  }
  getDirNodeAtPath(getDirNodeAtPathPathArray) {
    let _currentDirectoryNode = this.root;
    if (
      getDirNodeAtPathPathArray.length === 1 &&
      getDirNodeAtPathPathArray[0] === ""
    ) {
      return _currentDirectoryNode;
    }
    for (let dirNode of getDirNodeAtPathPathArray) {
      let childNode = _currentDirectoryNode.getChild(dirNode);
      if (childNode) {
        if (childNode instanceof abortSignal) {
          _currentDirectoryNode = childNode;
        } else if (childNode instanceof dataProcessingFunction) {
          let resolvedSymlink = this.resolveSymlink(childNode);
          if (resolvedSymlink instanceof abortSignal) {
            _currentDirectoryNode = resolvedSymlink;
          } else {
            throw new __processData(
              "open",
              getDirNodeAtPathPathArray.join("/"),
            );
          }
        } else {
          throw new handleFlushEvent(
            "open",
            getDirNodeAtPathPathArray.join("/"),
          );
        }
      } else {
        throw new handleFlushEvent("open", getDirNodeAtPathPathArray.join("/"));
      }
    }
    return _currentDirectoryNode;
  }
  getNodeAtPath(getNodeAtPath, handleNodeRetrieval) {
    let nodeKey = getNodeAtPath.pop();
    if (!nodeKey) {
      return this.root;
    }
    let retrievedNode = this.getDirNodeAtPath(getNodeAtPath);
    if (!retrievedNode) {
      throw new handleFlushEvent("open", handleNodeRetrieval);
    }
    if (!(retrievedNode instanceof abortSignal)) {
      throw new __processData("open", handleNodeRetrieval);
    }
    let _childNode = retrievedNode.getChild(nodeKey);
    if (!_childNode) {
      throw new handleFlushEvent("open", handleNodeRetrieval);
    }
    return _childNode;
  }
  moveNode(moveNodeToNewPath, _moveNodeToNewPath, isItemAvailable = false) {
    let sourceNode = this.getNodeAtPath(
      extractPathSegments(moveNodeToNewPath),
      moveNodeToNewPath,
    );
    let sourceNodePathParts = extractPathSegments(_moveNodeToNewPath);
    let newNodeName = sourceNodePathParts.pop();
    if (newNodeName) {
      let sourceNodeDirectory = this.getDirNodeAtPath(sourceNodePathParts);
      sourceNode.parent?.removeChild(sourceNode.name, false);
      sourceNode.rename(newNodeName);
      sourceNodeDirectory.addChild(sourceNode, false);
      sourceNode.parent = sourceNodeDirectory;
    }
    this.emitter.fire({
      type: "move",
      oldPath: moveNodeToNewPath,
      newPath: _moveNodeToNewPath,
      isSync: isItemAvailable,
    });
    return sourceNode;
  }
  _serializeTreeNode(treeNode) {
    if (treeNode instanceof abortSignal) {
      return {
        ...treeNode.serialize(),
        children: [],
      };
    } else {
      return serializeLastStreamElement(treeNode);
    }
  }
  _serialize(serializeTreeNode, serializedTreeNode) {
    for (let __childNode of serializeTreeNode.children.values()) {
      if (__childNode instanceof abortSignal) {
        let serializedChildNode = this._serializeTreeNode(__childNode);
        serializedChildNode = this._serialize(__childNode, serializedChildNode);
        serializedTreeNode.children.push(serializedChildNode);
      } else {
        serializedTreeNode.children.push(this._serializeTreeNode(__childNode));
      }
    }
    return serializedTreeNode;
  }
  handleSyncEvent(syncEventHandler) {
    if (!syncEventHandler.isSync) {
      switch (syncEventHandler.type) {
        case "create": {
          let _dirNode = this.getDirNodeAtPath(
            extractPathSegments(syncEventHandler.parent),
          );
          let newNodeDeserialized = deserializeAbortSignal(
            syncEventHandler.newNode,
            _dirNode,
            this,
          );
          _dirNode.addChild(newNodeDeserialized, true, true);
          break;
        }
        case "move": {
          this.moveNode(
            syncEventHandler.oldPath,
            syncEventHandler.newPath,
            true,
          );
          break;
        }
        case "remove": {
          this.getDirNodeAtPath(
            extractPathSegments(syncEventHandler.parent),
          ).removeChild(syncEventHandler.name, true, true);
          break;
        }
        case "write": {
          let nodeAtSyncEventPath = this.getNodeAtPath(
            extractPathSegments(syncEventHandler.path),
            syncEventHandler.path,
          );
          if (
            nodeAtSyncEventPath instanceof awaitFormatStringWithPlaceholders
          ) {
            nodeAtSyncEventPath.write(syncEventHandler.content, true);
          }
          break;
        }
      }
    }
  }
  serialize() {
    let _serializedTreeNode = this._serializeTreeNode(this.root);
    return this._serialize(this.root, _serializedTreeNode);
  }
  populate(populateChildren, rootElement = this.root) {
    for (let ___childNode of populateChildren.children) {
      if (___childNode.type === 0) {
        let deserializedAbortSignal = deserializeAbortSignal(
          ___childNode,
          rootElement,
          this,
        );
        rootElement.addChild(deserializedAbortSignal, false);
        this.populate(___childNode, deserializedAbortSignal);
      } else {
        rootElement.addChild(
          deserializeAbortSignal(___childNode, rootElement, this),
          false,
        );
      }
    }
  }
};
var _handleBufferValidationError = defineModuleExports(parseVersion());
var __handleBufferValidationError = defineModuleExports(
  comparePrereleaseVersions(),
);
var isPipelineReadableAndValid = defineModuleExports(
  incrementPrereleaseVersion(),
);
function isValidHttpUrl(__handleAbortOperation) {
  let parsedUrl;
  try {
    parsedUrl = new URL(__handleAbortOperation);
  } catch {
    return false;
  }
  return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
}
function createNormalizedURL(..._createNormalizedURL) {
  try {
    let normalizedURL = new URL(_createNormalizedURL.join("/"));
    normalizedURL.pathname = normalizedURL.pathname.replace(/\/+/g, "/");
    return normalizedURL.toString();
  } catch {
    return _createNormalizedURL.join("/").replace(/\/+/g, "/");
  }
}
function waitForAbortOperation(___handleAbortOperation) {
  return new Promise((handleAbortOperationTimeout) =>
    setTimeout(handleAbortOperationTimeout, ___handleAbortOperation),
  );
}
var createReadableStreamFromArguments = new Set([
  408, 429, 424, 499, 444, 502, 503, 504, 599,
]);
function isProcessStreamsReadable(processStreams) {
  return createReadableStreamFromArguments.has(processStreams);
}
function calculateStreamDelay(validateStreamInputs, _validateStreamInputs) {
  let randomDelayFactor = Math.max(1, Math.random() * 2);
  return Math.min(
    randomDelayFactor *
      validateStreamInputs.minDelayMs *
      Math.pow(validateStreamInputs.factor, _validateStreamInputs),
    validateStreamInputs.maxDelayMs,
  );
}
async function retryFetchWithExponentialBackoff(
  validateStreamsArguments,
  validateStreamsInput,
  exponentialBackoffConfig = {
    maxRetries: 5,
    minDelayMs: 500,
    maxDelayMs: 15000,
    factor: 2,
  },
  streamDelayCounter = 0,
) {
  let retryFetchRequest = async () => {
    streamDelayCounter += 1;
    let streamDelayValue = calculateStreamDelay(
      exponentialBackoffConfig,
      streamDelayCounter,
    );
    await waitForAbortOperation(streamDelayValue);
    return retryFetchWithExponentialBackoff(
      validateStreamsArguments,
      validateStreamsInput,
      exponentialBackoffConfig,
      streamDelayCounter,
    );
  };
  try {
    let fetchValidationResponse = await fetch(
      validateStreamsArguments,
      validateStreamsInput,
    );
    if (
      !fetchValidationResponse.ok &&
      isProcessStreamsReadable(fetchValidationResponse.status) &&
      exponentialBackoffConfig.maxRetries > streamDelayCounter
    ) {
      return retryFetchRequest();
    } else {
      return fetchValidationResponse;
    }
  } catch (_____error) {
    if (exponentialBackoffConfig.maxRetries > streamDelayCounter) {
      return retryFetchRequest();
    }
    throw _____error;
  }
}
var streamValidatorAndProcessor = class {
  cdnUrl = undefined;
  init(initializeWithCdnUrl) {
    this.cdnUrl = initializeWithCdnUrl;
  }
  async fetch(fetchResource, fetchOptions) {
    let fetchResponse = await retryFetchWithExponentialBackoff(
      fetchResource,
      fetchOptions,
    );
    if (!fetchResponse.ok) {
      let fetchErrorMessage = await fetchResponse
        .text()
        .catch(() => "Unknown CDN error");
      throw new Error(
        processWriteOperation(
          'Failed to fetch "%s": %s',
          fetchResource,
          fetchErrorMessage,
        ),
      );
    }
    return fetchResponse;
  }
  async fetchPackage(fetchPackageName, __packageVersion) {
    isWritable(
      this.cdnUrl,
      'Failed to fetch package "%s@%s": the Sandpack CDN is not defined',
      this.cdnUrl,
    );
    let packageFiles;
    try {
      packageFiles = await this.fetchPackageFromRegistry(
        fetchPackageName,
        __packageVersion,
      );
    } catch {
      let encodedPackageIdentifier = btoa(
        fetchPackageName + "@" + __packageVersion,
      );
      let normalizedPackageURL = createNormalizedURL(
        this.cdnUrl,
        "/v2/mod/" + encodedPackageIdentifier,
      );
      let fetchedPackageBuffer = await (
        await this.fetch(normalizedPackageURL)
      ).arrayBuffer();
      packageFiles = decodeAndHandleNodeRemoval(fetchedPackageBuffer);
    }
    return {
      name: fetchPackageName,
      version: __packageVersion,
      files: packageFiles,
    };
  }
  async fetchPackageFromRegistry(fetchPackageFromRegistry, version) {
    let fetchTarballFromRegistry = (
      await this.fetch(
        "https://registry.npmjs.org/" +
          fetchPackageFromRegistry +
          "/" +
          version,
      ).then((fetchUserDataFromApi) => fetchUserDataFromApi.json())
    ).dist.tarball;
    let responseFromFetchTarball = await this.fetch(fetchTarballFromRegistry);
    let decompressedBlobStream = await readStreamAsUint8Array(
      (await responseFromFetchTarball.blob())
        .stream()
        .pipeThrough(new DecompressionStream("gzip")),
    );
    let validateDecompressedStream = await (0,
    isPipelineReadableAndValid.default)(decompressedBlobStream.buffer);
    let decompressedPackageData = {};
    for (let streamValidationItem of validateDecompressedStream) {
      let streamNameWithoutPrefix = streamValidationItem.name.replace(
        /^[^/]+/,
        "",
      );
      if (streamValidationItem.type === "0") {
        decompressedPackageData[streamNameWithoutPrefix] = new Uint8Array(
          streamValidationItem.buffer,
        );
      }
    }
    return decompressedPackageData;
  }
  async fetchDependencies(dependencyList) {
    isWritable(
      this.cdnUrl,
      "Failed to fetch dependencies: the Sandpack CDN is not defined",
      this.cdnUrl,
    );
    if (dependencyList.length === 0) {
      return Promise.resolve(null);
    }
    let formatDependencyString = dependencyList
      .map(
        ([userSessionData, userDataProcessor]) =>
          userSessionData + "@" + userDataProcessor.replace(/\s+/, ""),
      )
      .sort()
      .join(";");
    let fetchFormattedDependencies = createNormalizedURL(
      this.cdnUrl,
      "/v2/deps/" + btoa(formatDependencyString),
    );
    let fetchedDependencyBuffer = await (
      await this.fetch(fetchFormattedDependencies)
    ).arrayBuffer();
    return decodeAndHandleNodeRemoval(fetchedDependencyBuffer);
  }
};
async function readStreamAsUint8Array(handleReadableStream) {
  let readableStreamReader = handleReadableStream.getReader();
  let chunksArray = [];
  let isStreamDone = false;
  while (!isStreamDone) {
    let { done: isEndOfStream, value: streamChunk } =
      await readableStreamReader.read();
    if (isEndOfStream) {
      isStreamDone = true;
    } else {
      chunksArray.push(streamChunk);
    }
  }
  let totalBytesLength = chunksArray.reduce(
    (calculateLengthWithValue, additionalLength) =>
      calculateLengthWithValue + additionalLength.length,
    0,
  );
  let uint8ArrayOutput = new Uint8Array(totalBytesLength);
  let byteOffset = 0;
  for (let chunk of chunksArray) {
    uint8ArrayOutput.set(chunk, byteOffset);
    byteOffset += chunk.length;
  }
  return uint8ArrayOutput;
}
var destroyStringDecoder = defineModuleExports(parseVersion());
var destroyDecoder = ["~", ".", "/"];
function processPackageSpecifications(
  initializeStringDecoder,
  _destroyStringDecoder,
) {
  let addPackageDependency = (addPackageToDecoder, ____packageName) => {
    _destroyStringDecoder.npmPackages[addPackageToDecoder] ||= new Set();
    _destroyStringDecoder.npmPackages[addPackageToDecoder].add(____packageName);
  };
  for (let [packageName, packageSpecifier] of Object.entries(
    initializeStringDecoder,
  )) {
    if (typeof packageSpecifier != "string") {
      throw new Error("Invalid package specifier: " + packageSpecifier);
    }
    if (destroyStringDecoder.default.validRange(packageSpecifier)) {
      _destroyStringDecoder.directNpmPackages[packageName] = packageSpecifier;
      addPackageDependency(packageName, packageSpecifier);
    } else if (packageSpecifier.startsWith("file:")) {
      _destroyStringDecoder.fileAliases[packageName] =
        packageSpecifier.substring(5);
    } else if (packageSpecifier.startsWith("npm:")) {
      let [packageNameWithVersion, ______packageVersion] = packageSpecifier
        .substring(4)
        .split("@");
      if (
        !packageNameWithVersion ||
        !destroyStringDecoder.default.validRange(______packageVersion)
      ) {
        throw new Error("Invalid dependency specifier: " + packageSpecifier);
      }
      addPackageDependency(packageNameWithVersion, ______packageVersion);
      _destroyStringDecoder.npmAliases[packageName] =
        packageNameWithVersion + "@" + ______packageVersion;
    } else if (isValidHttpUrl(packageSpecifier)) {
      _destroyStringDecoder.remotePackages[packageName] = packageSpecifier;
    } else if (destroyDecoder.includes(packageSpecifier[0])) {
      _destroyStringDecoder.fileAliases[packageName] = packageSpecifier;
    } else if (packageSpecifier.includes("/")) {
      _destroyStringDecoder.gitPackages[packageName] = packageSpecifier;
    } else {
      _destroyStringDecoder.directNpmPackages[packageName] = packageSpecifier;
      addPackageDependency(packageName, packageSpecifier);
    }
  }
  return _destroyStringDecoder;
}
function processPackageData(processSignalAndEnd) {
  let packageCategorization = {
    directNpmPackages: {},
    npmPackages: {},
    remotePackages: {},
    gitPackages: {},
    npmAliases: {},
    fileAliases: {},
  };
  if (!processSignalAndEnd || typeof processSignalAndEnd != "object") {
    processSignalAndEnd = {};
  }
  processPackageSpecifications(processSignalAndEnd, packageCategorization);
  return packageCategorization;
}
function processPackageDependencies(
  getFinishedPipeline,
  _____isFeatureEnabled = true,
) {
  let packageDependencies = {
    directNpmPackages: {},
    npmPackages: {},
    remotePackages: {},
    gitPackages: {},
    npmAliases: {},
    fileAliases: {},
  };
  if (getFinishedPipeline.dependencies) {
    processPackageSpecifications(
      getFinishedPipeline.dependencies,
      packageDependencies,
    );
  }
  if (_____isFeatureEnabled && getFinishedPipeline.devDependencies) {
    processPackageSpecifications(
      getFinishedPipeline.devDependencies,
      packageDependencies,
    );
  }
  return packageDependencies;
}
var ____handleAbortOperation = defineModuleExports(validateOperatorFunction());
function convertToCamelCase(p2253_CallPromisifiedFunction) {
  let parsedData = (0, ____handleAbortOperation.parse)(
    p2253_CallPromisifiedFunction,
  );
  return Object.entries(parsedData).reduce(
    (updateObjectWithCamelCaseKey, [userList, filteredUserList]) => {
      let camelCaseKey = userList.replace(
        /-([a-z])/g,
        (_convertStringToUpperCase, __convertStringToUpperCase) =>
          __convertStringToUpperCase.toUpperCase(),
      );
      updateObjectWithCamelCaseKey[camelCaseKey] = filteredUserList;
      return updateObjectWithCamelCaseKey;
    },
    {},
  );
}
function validateAndSplitIntrinsicProperty(
  _____________________________validateAndReturnIntrinsicProperty,
) {
  let splitIntrinsicProperty =
    _____________________________validateAndReturnIntrinsicProperty.split("@");
  let intrinsicPropertySuffix = splitIntrinsicProperty.pop();
  if (!intrinsicPropertySuffix || !splitIntrinsicProperty.length) {
    throw new Error(
      "Invalid specifier: " +
        _____________________________validateAndReturnIntrinsicProperty,
    );
  }
  return [splitIntrinsicProperty.join("@"), intrinsicPropertySuffix];
}
function createStreamPackageEntries(createReadableStreamFrom) {
  let streamPackageEntries = [];
  for (let [___packageName, packageVersionRange] of Object.entries(
    createReadableStreamFrom.directNpmPackages,
  )) {
    streamPackageEntries.push([
      ___packageName,
      {
        name: ___packageName,
        range: packageVersionRange,
      },
    ]);
  }
  for (let [npmAlias, npmAliasDetails] of Object.entries(
    createReadableStreamFrom.npmAliases,
  )) {
    let [npmAliasName, npmAliasVersionRange] =
      validateAndSplitIntrinsicProperty(npmAliasDetails);
    if (!npmAliasVersionRange) {
      throw new Error("Invalid npm alias version range");
    }
    streamPackageEntries.push([
      npmAlias,
      {
        name: npmAliasName,
        range: npmAliasVersionRange,
      },
    ]);
  }
  return streamPackageEntries;
}
var readableStreamMethod = class extends promiseHandler {
  constructor(_fileSystem) {
    super();
    this.fs = _fileSystem;
    this.store = new getUniqueIdentifier(this.fs, {
      publicHoistPattern: ["@vuepress/client", "@nuxt*"],
    });
    this.cdnClient = new streamValidatorAndProcessor();
    this.pendingRequests = new Map();
  }
  store;
  _cdnUrl;
  cdnClient;
  pendingRequests;
  get cdnUrl() {
    return this._cdnUrl;
  }
  set cdnUrl(setCdnUrl) {
    isWritable(
      typeof setCdnUrl !== "undefined",
      "Failed to update a CDN URL: the next URL is not defined",
    );
    this._cdnUrl = setCdnUrl;
    this.cdnClient.init(setCdnUrl);
  }
  get totalPending() {
    return this.pendingRequests.size;
  }
  async installPackage(installPackageByNameAndVersion, ___packageVersion) {
    if (
      !this.shouldInstallPackage(
        installPackageByNameAndVersion,
        ___packageVersion,
      )
    ) {
      return;
    }
    let packageFetchPromise = this.cdnClient.fetchPackage(
      installPackageByNameAndVersion,
      ___packageVersion,
    );
    packageFetchPromise.then((dispatchProgressEvent) => {
      this.dispatchEvent(
        new createAsyncIterableWithSignal("progress", {
          data: {
            name: installPackageByNameAndVersion,
            version: ___packageVersion,
            totalPending: this.totalPending,
          },
        }),
      );
      this.store.writeDependency(dispatchProgressEvent);
    });
    this.equeueRequest(
      installPackageByNameAndVersion,
      ___packageVersion,
      packageFetchPromise,
    );
    return packageFetchPromise;
  }
  shouldInstallPackage(
    packageInstallationNeeded,
    shouldInstallPackageBasedOnStatus,
  ) {
    return (
      !this.hasInstalledPackage(
        packageInstallationNeeded,
        shouldInstallPackageBasedOnStatus,
      ) &&
      !this.hasPendingPackage(
        packageInstallationNeeded,
        shouldInstallPackageBasedOnStatus,
      )
    );
  }
  hasInstalledPackage(__packageId, isPackageInstalled) {
    return this.store.findPackage(__packageId, isPackageInstalled) != null;
  }
  hasPendingPackage(hasPendingPackageForRequestId, bufferValidationErrorValue) {
    let pendingRequestData = this.pendingRequests.get(
      hasPendingPackageForRequestId,
    );
    if (pendingRequestData) {
      for (let [pendingRequest] of pendingRequestData) {
        if (
          _handleBufferValidationError.default.satisfies(
            pendingRequest,
            bufferValidationErrorValue,
          )
        ) {
          return true;
        }
      }
    }
    return false;
  }
  equeueRequest(enqueueRequest, requestKey, requestPromise) {
    requestPromise.finally(() => {
      this.pendingRequests.get(enqueueRequest)?.delete(requestKey);
      if (this.pendingRequests.get(enqueueRequest)?.size === 0) {
        this.pendingRequests.delete(enqueueRequest);
      }
    });
    let currentPendingRequests = this.pendingRequests.get(enqueueRequest);
    if (!currentPendingRequests) {
      this.pendingRequests.set(
        enqueueRequest,
        new Map([[requestKey, requestPromise]]),
      );
      return;
    }
    currentPendingRequests.set(requestKey, requestPromise);
  }
  async installAllPackages(packageFilePath) {
    let pendingRequestsPromise = Promise.all(this.pendingRequests.values());
    let packageData = JSON.parse(this.fs.readFileAsString(packageFilePath));
    let parsedPackageDependencies = processPackageDependencies(packageData);
    let packageInstallationMap = Object.entries(
      parsedPackageDependencies.npmPackages,
    ).reduce((installPackageDependencies, [userInput, userInputHandler]) => {
      for (let dependencyPackage of userInputHandler) {
        if (this.shouldInstallPackage(userInput, dependencyPackage)) {
          if (installPackageDependencies[userInput]) {
            installPackageDependencies[userInput] += "," + dependencyPackage;
          } else {
            installPackageDependencies[userInput] = dependencyPackage;
          }
        }
      }
      return installPackageDependencies;
    }, {});
    let fetchedDependencies =
      (await this.cdnClient.fetchDependencies(
        Object.entries(packageInstallationMap),
      )) || {};
    let fetchedAndProcessedDependencies =
      processDeferredPromiseEntries(fetchedDependencies);
    let packageInstallationPromises = Promise.all(
      fetchedAndProcessedDependencies.map((_packageDetails) =>
        this.installPackage(_packageDetails.name, _packageDetails.version),
      ),
    );
    await Promise.all([pendingRequestsPromise, packageInstallationPromises]);
    for (let [dependencyEntry, dependencyVersion] of Object.entries(
      fetchedDependencies,
    )) {
      let [intrinsicPropertyKey, _parsedVersion] =
        validateAndSplitIntrinsicProperty(dependencyEntry);
      if (!(_parsedVersion[0] >= "0") || !(_parsedVersion[0] <= "9")) {
        this.store.writePackageTag(
          intrinsicPropertyKey,
          dependencyVersion,
          _parsedVersion,
        );
      }
    }
    this.store.symlinkStoreDependencies();
    this.store.symlinkRootDependencies(packageData);
  }
};
var streamPipeline = class {
  constructor(fileSystem, dataStorage = {}) {
    this.fs = fileSystem;
    this.options = dataStorage;
    this.npmrc = this.parseNpmrcFile();
    this.shouldHoistPackage = this.createHoistPackageMatcher(
      this.npmrc,
      this.options,
    );
    this.fs.mkdir(extractBaseUrl(streamPipeline.STORE_PATH), {
      recursive: true,
    });
  }
  npmrc = null;
  packages = new Map();
  shouldHoistPackage;
  parseNpmrcFile() {
    let npmrcFilePath = joinPathSegments(_processData, ".npmrc");
    if (!this.fs.exists(npmrcFilePath)) {
      return null;
    }
    try {
      return convertToCamelCase(this.fs.readFileAsString(npmrcFilePath));
    } catch (____error) {
      console.warn(
        '[PackageManager] Failed to parse ".npmrc" file:',
        ____error,
      );
      return null;
    }
  }
  createHoistPackageMatcher(
    createHoistPackageMatcher,
    publicHoistPatternFromPackage,
  ) {
    let defaultHoistPattern =
      createHoistPackageMatcher?.publicHoistPattern || [];
    let additionalHoistPatterns =
      publicHoistPatternFromPackage.publicHoistPattern || [];
    let combinedHoistPatterns = [
      ...defaultHoistPattern,
      ...additionalHoistPatterns,
    ];
    return (0, __handleBufferValidationError.createMatcher)(
      combinedHoistPatterns,
    );
  }
  getPackageId(combinePackageIdWithVersion, _______packageVersion) {
    return combinePackageIdWithVersion + "@" + _______packageVersion;
  }
  buildPackageActualPath(buildPackageActualPath, _nodeModulesPath) {
    return joinPathSegments(
      _nodeModulesPath,
      "node_modules",
      buildPackageActualPath,
    );
  }
  getPackageRootPath(getPackageVersionPath, ____packageVersion) {
    let getPackageDetails = this.packages.get(getPackageVersionPath);
    isWritable(
      getPackageDetails,
      'Failed to get store root path for package "%s@%s": package is not installed',
      getPackageVersionPath,
      ____packageVersion,
      this.packages,
    );
    let foundPackageVersion = getPackageDetails.findVersion(____packageVersion);
    isWritable(
      foundPackageVersion,
      'Failed to resolve installation path for "%s@%s": no installation found for this version',
      getPackageVersionPath,
      ____packageVersion,
    );
    return foundPackageVersion;
  }
  getPackageActualPath(getPackageActualPathById, _packageId) {
    let packageRootPath = this.getPackageRootPath(
      getPackageActualPathById,
      _packageId,
    );
    return this.buildPackageActualPath(
      getPackageActualPathById,
      packageRootPath,
    );
  }
  findPackage(_packageIdentifier, findPackageRootPath) {
    try {
      return this.getPackageRootPath(_packageIdentifier, findPackageRootPath);
    } catch {
      return null;
    }
  }
  readPackageJson(readPackageJsonByNameAndVersion, _____packageVersion) {
    let packageJsonPath = this.getPackageActualPath(
      readPackageJsonByNameAndVersion,
      _____packageVersion,
    );
    let packageJsonFilePath = joinPathSegments(packageJsonPath, "package.json");
    isWritable(
      this.fs.exists(packageJsonFilePath),
      'Failed to read "package.json" for "%s@%s": package is not installed',
      readPackageJsonByNameAndVersion,
      _____packageVersion,
    );
    return JSON.parse(this.fs.readFileAsString(packageJsonFilePath));
  }
  addFileToSourceInspector(
    addFileToSourceInspectorFileIdentifierSourceDescription,
    userInputString = "",
  ) {
    (0, eval)(
      "//\n// " +
        userInputString +
        "\n//\n\n//# sourceURL=nodebox://" +
        addFileToSourceInspectorFileIdentifierSourceDescription,
    );
  }
  symlink(createSymlink, targetSymlinkPath) {
    if (this.fs.exists(targetSymlinkPath)) {
      console.warn(
        'Skipping a symlink from "%s" to "%s": target already exists',
        createSymlink,
        targetSymlinkPath,
      );
      return;
    }
    isWritable(
      this.fs.exists(createSymlink),
      '[PackageStore]: Failed to symlink "%s" from "%s": the source does not exist',
      targetSymlinkPath,
      createSymlink,
    );
    this.fs.mkdir(extractBaseUrl(targetSymlinkPath), {
      recursive: true,
    });
    this.fs.symlink(createSymlink, targetSymlinkPath);
    this.addFileToSourceInspector(
      targetSymlinkPath,
      targetSymlinkPath + " --> " + createSymlink,
    );
  }
  writeDependency(writeDependencyForPackage) {
    let packageId = this.getPackageId(
      writeDependencyForPackage.name,
      writeDependencyForPackage.version,
    );
    let isPackageHoisted = this.shouldHoistPackage(
      writeDependencyForPackage.name,
    );
    let packageStorePath = joinPathSegments(
      streamPipeline.STORE_PATH,
      packageId,
    );
    isWritable(
      !this.fs.exists(packageStorePath),
      'Failed to write "%s" to the store at "%s": package already exists',
      packageId,
      packageStorePath,
    );
    let nodeModulesPath = joinPathSegments(
      streamPipeline.STORE_PATH,
      packageId,
      "node_modules",
      writeDependencyForPackage.name,
    );
    for (let packageFileName in writeDependencyForPackage.files) {
      let packageFileContent = writeDependencyForPackage.files[packageFileName];
      let _packageFilePath = joinPathSegments(nodeModulesPath, packageFileName);
      this.fs.mkdir(extractBaseUrl(_packageFilePath), {
        recursive: true,
      });
      this.fs.writeFileSync(_packageFilePath, packageFileContent);
    }
    this.registerPackage(writeDependencyForPackage, packageStorePath);
    let hoistPackageData = this.shouldHoistPackage(
      writeDependencyForPackage.name,
    )
      ? joinPathSegments(_processData, "node_modules/.bin")
      : joinPathSegments(nodeModulesPath, "node_modules", ".bin");
    this.symlinkBinaries(
      writeDependencyForPackage.name,
      writeDependencyForPackage.version,
      hoistPackageData,
    );
    if (isPackageHoisted) {
      let nodeModuleSymlinkPath = joinPathSegments(
        _processData,
        "node_modules",
        writeDependencyForPackage.name,
      );
      this.symlink(nodeModulesPath, nodeModuleSymlinkPath);
    }
    return packageStorePath;
  }
  registerPackage(registerPackageWithVersion, packageMetadata) {
    let existingPackage = this.packages.get(registerPackageWithVersion.name);
    if (existingPackage) {
      existingPackage.addVersion(
        registerPackageWithVersion.version,
        packageMetadata,
      );
      return;
    }
    this.packages.set(
      registerPackageWithVersion.name,
      new createUniqueIdentifier(registerPackageWithVersion.name).addVersion(
        registerPackageWithVersion.version,
        packageMetadata,
      ),
    );
  }
  getBinaries(getBinariesForPackage, packageIdentifier) {
    let resolvedPackageId = this.getPackageId(
      getBinariesForPackage,
      packageIdentifier,
    );
    let resolvedPackagePath = this.getPackageActualPath(
      getBinariesForPackage,
      packageIdentifier,
    );
    let _packageJsonData = this.readPackageJson(
      getBinariesForPackage,
      packageIdentifier,
    );
    let resolvedBinaries = createDeferredPromiseHandler(
      getBinariesForPackage,
      _packageJsonData.bin,
    );
    let resolvedBinariesMap = new Map();
    for (let [binaryNamePackagePath, binaryPath] of Object.entries(
      resolvedBinaries || {},
    )) {
      let resolvedBinaryPath = this.resolveBinaryPath(
        getBinariesForPackage,
        packageIdentifier,
        binaryPath,
      );
      isWritable(
        resolvedBinaryPath,
        'Failed to resolve "%s" binary for package "%s@%s" from "%s": no binary present at the path',
        binaryNamePackagePath,
        getBinariesForPackage,
        packageIdentifier,
        binaryPath,
      );
      resolvedBinariesMap.set(binaryNamePackagePath, resolvedBinaryPath);
    }
    let binaryDirectoryPath = _packageJsonData.directories?.bin;
    if (binaryDirectoryPath) {
      let resolvedBinariesDirectory = joinPathSegments(
        resolvedPackagePath,
        binaryDirectoryPath,
      );
      isWritable(
        this.fs.exists(resolvedBinariesDirectory),
        'Failed to resolve binaries for package "%s@%s using a custom "directories.bin" (%s): directory does not exist',
        resolvedPackageId,
        resolvedBinariesDirectory,
      );
      let resolvedBinaryFiles = this.fs.readdir(resolvedBinariesDirectory);
      for (let binaryFileName of resolvedBinaryFiles) {
        if (typeof binaryFileName == "string") {
          let _resolvedBinaryPath = joinPathSegments(
            resolvedBinariesDirectory,
            binaryFileName,
          );
          resolvedBinariesMap.set(binaryFileName, _resolvedBinaryPath);
        }
      }
    }
    return resolvedBinariesMap;
  }
  symlinkStoreDependencies() {
    for (let [packageAndVersion, _package] of this.packages) {
      for (let [packageVersion, packageVersionData] of _package.versions) {
        let packageActualPath = this.getPackageActualPath(
          packageAndVersion,
          packageVersion,
        );
        let packageJsonData = this.readPackageJson(
          packageAndVersion,
          packageVersion,
        );
        let getDirectDependencies = processPackageData(
          packageJsonData.dependencies,
        );
        for (let [
          packageDependency,
          packageDependencyDetails,
        ] of createStreamPackageEntries(getDirectDependencies)) {
          let __packageActualPath = this.getPackageActualPath(
            packageDependencyDetails.name,
            packageDependencyDetails.range,
          );
          let nodeModulePath = joinPathSegments(
            packageVersionData,
            "node_modules",
            packageDependency,
          );
          this.symlink(__packageActualPath, nodeModulePath);
          let nodeModuleStorePath = joinPathSegments(
            streamPipeline.STORE_PATH,
            "node_modules",
            packageDependency,
          );
          if (!this.fs.exists(nodeModuleStorePath)) {
            this.symlink(__packageActualPath, nodeModuleStorePath);
          }
          if (packageDependencyDetails.name === packageDependency) {
            this.symlinkBinaries(
              packageDependencyDetails.name,
              packageDependencyDetails.range,
              joinPathSegments(packageActualPath, "node_modules/.bin"),
            );
          }
        }
        let getPeerDependencies = processPackageData(
          packageJsonData.peerDependencies,
        );
        for (let [
          peerDependencyName,
          peerDependency,
        ] of createStreamPackageEntries(getPeerDependencies)) {
          let resolvedPeerDependency = this.findPackage(
            peerDependency.name,
            peerDependency.range,
          );
          if (!resolvedPeerDependency) {
            if (
              !packageJsonData.peerDependenciesMeta?.[peerDependencyName]
                ?.optional
            ) {
              console.warn(
                '[PackageManager] Failed to symlink a non-optional peer dependency of "%s@%s" from "%s@%s": dependency is not installed',
                peerDependencyName,
                peerDependency.name !== peerDependencyName
                  ? peerDependency.name + "@" + peerDependency.range
                  : peerDependency.range,
                packageAndVersion,
                packageVersion,
              );
            }
            continue;
          }
          let resolvedPeerDependencyPath = this.buildPackageActualPath(
            peerDependencyName,
            resolvedPeerDependency,
          );
          let _resolvedPeerDependencyPath = joinPathSegments(
            packageVersionData,
            "node_modules",
            peerDependencyName,
          );
          this.symlink(resolvedPeerDependencyPath, _resolvedPeerDependencyPath);
          if (peerDependency.name !== peerDependencyName) {
            this.symlinkBinaries(
              peerDependency.name,
              peerDependency.range,
              joinPathSegments(packageActualPath, "node_modules/.bin"),
            );
          }
        }
      }
    }
  }
  symlinkBinaries(
    symlinkBinariesSourcePackageTargetPackageTargetDir,
    sourcePackageName,
    binarySourcePath,
  ) {
    let retrieveBinaries = this.getBinaries(
      symlinkBinariesSourcePackageTargetPackageTargetDir,
      sourcePackageName,
    );
    for (let [binarySourceName, targetBinaryPath] of retrieveBinaries) {
      let _targetBinaryPath = joinPathSegments(
        binarySourcePath,
        binarySourceName,
      );
      if (this.fs.exists(_targetBinaryPath)) {
        console.warn(
          '[PackageManager] Failed to symlink "%s" ("%s@%s"): target binary already exists at "%s"',
          binarySourceName,
          symlinkBinariesSourcePackageTargetPackageTargetDir,
          sourcePackageName,
          _targetBinaryPath,
        );
        continue;
      }
      this.symlink(targetBinaryPath, _targetBinaryPath);
    }
  }
  symlinkRootDependencies(symlinkRootDependenciesPackageData) {
    let rootDependencies = processPackageDependencies(
      symlinkRootDependenciesPackageData,
    );
    let { directNpmPackages: directNpmPackages, npmAliases: npmAliases } =
      rootDependencies;
    for (let [_packageName, _packageVersion] of Object.entries(
      directNpmPackages,
    )) {
      if (this.shouldHoistPackage(_packageName)) {
        continue;
      }
      let _packageActualPath = this.getPackageActualPath(
        _packageName,
        _packageVersion,
      );
      let packageSymlinkPath = joinPathSegments(
        _processData,
        "node_modules",
        _packageName,
      );
      this.symlink(_packageActualPath, packageSymlinkPath);
      let packageBinaries = this.getBinaries(_packageName, _packageVersion);
      for (let [binaryName, binarySource] of packageBinaries) {
        let binarySymlinkPath = joinPathSegments(
          _processData,
          "node_modules",
          ".bin",
          binaryName,
        );
        if (this.fs.exists(binarySymlinkPath)) {
          console.warn(
            '[PackageManager] Failed to symlink root-level "%s" binary for package "%s@%s": target binary already exists at "%s"',
            binaryName,
            _packageName,
            _packageVersion,
            binarySymlinkPath,
          );
          continue;
        }
        this.symlink(binarySource, binarySymlinkPath);
      }
    }
    for (let [alias, npmAliasValue] of Object.entries(npmAliases)) {
      let [packageNameAndVersion, packageVersionAlias] =
        validateAndSplitIntrinsicProperty(npmAliasValue);
      let _actualPackagePath = this.getPackageActualPath(
        packageNameAndVersion,
        packageVersionAlias,
      );
      let symlinkPackagePath = joinPathSegments(
        _processData,
        "node_modules",
        alias,
      );
      this.symlink(_actualPackagePath, symlinkPackagePath);
    }
  }
  resolveBinaryPath(
    packagePath,
    resolveBinaryFilePath,
    binaryExecutableFileName,
  ) {
    let actualPackagePath = this.getPackageActualPath(
      packagePath,
      resolveBinaryFilePath,
    );
    let resolvedBinaryFilePath = joinPathSegments(
      actualPackagePath,
      binaryExecutableFileName,
    );
    return [
      resolvedBinaryFilePath,
      resolvedBinaryFilePath + ".js",
      resolvedBinaryFilePath + ".mjs",
    ].find((fileExists) => this.fs.exists(fileExists));
  }
  writePackageTag(__packageName, versionTag, versionTagIdentifier) {
    let packageDetails = this.packages.get(__packageName);
    if (!packageDetails) {
      throw new Error(
        "Failed to write tag " +
          versionTagIdentifier +
          " for " +
          __packageName +
          ", package is not installed",
      );
    }
    packageDetails.registerVersionTag(versionTagIdentifier, versionTag);
  }
};
var getUniqueIdentifier = streamPipeline;
_definePropertyIfAbsent(
  getUniqueIdentifier,
  "STORE_PATH",
  joinPathSegments(_processData, "node_modules", ".store"),
);
var createUniqueIdentifier = class {
  constructor(nameValue) {
    this.name = nameValue;
  }
  versions = new Map();
  tags = new Map();
  addVersion(addVersionToStore, versionData) {
    isWritable(
      !this.versions.has(addVersionToStore),
      'Failed to register version "%s" for store dependency "%s": already exists',
      addVersionToStore,
      this.name,
    );
    this.versions.set(addVersionToStore, versionData);
    return this;
  }
  registerVersionTag(_versionTag, versionId) {
    isWritable(
      this.versions.has(versionId),
      'Failed to register tag "%s" for version "%s" for store dependency "%s": version does not exist',
      _versionTag,
      versionId,
      this.name,
    );
    this.tags.set(_versionTag, versionId);
    return this;
  }
  findVersion(findVersionByTag) {
    let getVersionByTag = this.tags.get(findVersionByTag);
    if (getVersionByTag) {
      return this.versions.get(getVersionByTag);
    }
    if (findVersionByTag === "latest" || findVersionByTag === "*") {
      let sortedVersionKeys = Array.from(this.versions.keys());
      let _sortedVersionKeys =
        _handleBufferValidationError.default.sort(sortedVersionKeys);
      return this.versions.get(_sortedVersionKeys[0]);
    }
    for (let [versionTagPair, bufferValidationError] of this.versions) {
      if (
        _handleBufferValidationError.default.satisfies(
          versionTagPair,
          findVersionByTag,
        )
      ) {
        return bufferValidationError;
      }
    }
    if (/^\d/.test(findVersionByTag)) {
      for (let [versionTuple, __versionData] of this.versions) {
        if (
          _handleBufferValidationError.default.satisfies(
            versionTuple,
            "^" + findVersionByTag,
          )
        ) {
          return __versionData;
        }
      }
    }
    for (let [versionItem, selectedVersion] of this.versions) {
      let firstExtractedNumberFromVersionItem =
        extractFirstNumberFromPromise(versionItem);
      let extractedFirstNumberFromTagVersion =
        extractFirstNumberFromPromise(findVersionByTag);
      if (
        firstExtractedNumberFromVersionItem ===
        extractedFirstNumberFromTagVersion
      ) {
        return selectedVersion;
      }
    }
  }
};
function extractBaseUrl(deferredPromiseExecutor) {
  let baseUrlComponents = deferredPromiseExecutor.split("/");
  baseUrlComponents.pop();
  return baseUrlComponents.join("/");
}
function createDeferredPromiseHandler(
  createDeferredPromise,
  _deferredPromiseExecutor,
) {
  if (typeof _deferredPromiseExecutor !== "undefined") {
    if (typeof _deferredPromiseExecutor == "string") {
      return {
        [createDeferredPromise]: _deferredPromiseExecutor,
      };
    } else {
      return _deferredPromiseExecutor;
    }
  }
}
function processDeferredPromiseEntries(__deferredPromiseExecutor) {
  let uniqueEntriesSet = new Set();
  return Object.entries(__deferredPromiseExecutor)
    .map(([userScore, userScoreMultiplier]) => {
      let [_propertyName, intrinsicPropertyValue] =
        validateAndSplitIntrinsicProperty(userScore);
      return {
        name: _propertyName,
        version: userScoreMultiplier,
      };
    })
    .filter((isUniqueEntry) => {
      let generateEntryIdentifier =
        isUniqueEntry.name + "@" + isUniqueEntry.version;
      if (uniqueEntriesSet.has(generateEntryIdentifier)) {
        return false;
      } else {
        uniqueEntriesSet.add(generateEntryIdentifier);
        return true;
      }
    });
}
function extractFirstNumberFromPromise(_createDeferredPromise) {
  let [firstMatchedDigit] = _createDeferredPromise.match(/\d/) || [];
  let firstNumber = Number(firstMatchedDigit);
  if (isNaN(firstNumber)) {
    return undefined;
  } else {
    return firstNumber;
  }
}
var createDeferredExecutor =
  ___cleanupEventListeners.COPYFILE_EXCL |
  ___cleanupEventListeners.COPYFILE_FICLONE |
  ___cleanupEventListeners.COPYFILE_FICLONE_FORCE;
var ___deferredPromiseExecutor = joinPathSegments(_processData, "package.json");
var DeferredPromise = class {
  core = new processErrorHandling();
  isMain = false;
  _cdnUrl = undefined;
  packageManager = new readableStreamMethod(this);
  isInstallingDependencies = Promise.resolve();
  get cdnUrl() {
    return this._cdnUrl;
  }
  set cdnUrl(_setCdnUrl) {
    this._cdnUrl = _setCdnUrl;
    this.packageManager.cdnUrl = this._cdnUrl;
  }
  readFileAsString(_filePath) {
    let fileContent = this.readFileSync(_filePath);
    return _bufferWriteEncoding.from(fileContent).toString("utf-8");
  }
  writeFileSync(writeFileSyncAtPath, dataToWrite) {
    let getFilePathSegments = extractPathSegments(writeFileSyncAtPath);
    let fileName = getFilePathSegments.pop();
    if (!fileName) {
      throw new handleFlushEvent("open", writeFileSyncAtPath);
    }
    let _directoryNode = this.core.getDirNodeAtPath(getFilePathSegments);
    let fileChildNode = _directoryNode.getChild(fileName);
    if (fileChildNode) {
      if (fileChildNode instanceof awaitFormatStringWithPlaceholders) {
        fileChildNode.write(dataToWrite);
      } else {
        throw new flushBuffer("open", writeFileSyncAtPath);
      }
    } else {
      let formattedStringWithPlaceholders =
        new awaitFormatStringWithPlaceholders(
          fileName,
          dataToWrite,
          _directoryNode,
          this.core,
        );
      _directoryNode.addChild(formattedStringWithPlaceholders);
    }
  }
  async installDependencies() {
    this.isInstallingDependencies = this.packageManager.installAllPackages(
      ___deferredPromiseExecutor,
    );
    return this.isInstallingDependencies;
  }
  waitForIdleDependencies() {
    return this.isInstallingDependencies;
  }
  readFileSync(readFilePath) {
    let resolvedFilePath = extractPathSegments(readFilePath);
    let fileNode = this.core.getNodeAtPath(resolvedFilePath, readFilePath);
    if (!fileNode) {
      throw new handleFlushEvent("open", readFilePath);
    }
    if (fileNode instanceof awaitFormatStringWithPlaceholders) {
      return fileNode.content;
    }
    if (fileNode instanceof dataProcessingFunction) {
      let __resolvedFilePath = this.realpath(readFilePath);
      return this.readFileSync(__resolvedFilePath);
    } else {
      throw new flushBuffer("open", readFilePath);
    }
  }
  mkdir(createDirectory, userProfile = {}) {
    let { recursive: isRecursive } = userProfile || {};
    let currentDirectoryNode = this.core.root;
    let pathComponents = extractPathSegments(createDirectory);
    if (
      !pathComponents.length ||
      (pathComponents.length === 1 && pathComponents[0] === "")
    ) {
      if (isRecursive) {
        return;
      }
      throw new flushBuffer("mkdir", createDirectory);
    }
    for (let pathIndex = 0; pathIndex < pathComponents.length; pathIndex++) {
      let directoryName = pathComponents[pathIndex];
      let childDirectoryNode = currentDirectoryNode.getChild(directoryName);
      let isFinalPathComponent = pathIndex === pathComponents.length - 1;
      if (childDirectoryNode) {
        if (childDirectoryNode instanceof abortSignal) {
          if (isFinalPathComponent) {
            if (isRecursive) {
              continue;
            }
            throw new executeFlushOperation("mkdir", createDirectory);
          }
          currentDirectoryNode = childDirectoryNode;
        } else if (
          childDirectoryNode instanceof dataProcessingFunction &&
          !isFinalPathComponent
        ) {
          let resolvedChildDirectoryNode =
            this.core.resolveSymlink(childDirectoryNode);
          if (resolvedChildDirectoryNode instanceof abortSignal) {
            currentDirectoryNode = resolvedChildDirectoryNode;
          } else {
            throw new executeFlushOperation("mkdir", createDirectory);
          }
        } else {
          throw new executeFlushOperation("mkdir", createDirectory);
        }
      } else {
        if (!isRecursive && !isFinalPathComponent) {
          throw new handleFlushEvent("mkdir", createDirectory);
        }
        {
          let abortSignalNode = new abortSignal(
            directoryName,
            currentDirectoryNode,
            this.core,
          );
          currentDirectoryNode.addChild(abortSignalNode);
          currentDirectoryNode = abortSignalNode;
        }
      }
    }
  }
  rmdir(removeDirectory, userProfileData = {}) {
    let getDirectoryPathComponents = extractPathSegments(removeDirectory);
    let _directoryName = getDirectoryPathComponents.pop();
    if (!_directoryName) {
      throw new handleFlushEvent("rmdir", removeDirectory);
    }
    let parentDirectoryNode = this.core.getDirNodeAtPath(
      getDirectoryPathComponents,
    );
    let directoryNode = parentDirectoryNode.getChild(_directoryName);
    if (!directoryNode) {
      throw new handleFlushEvent("rmdir", removeDirectory);
    }
    if (directoryNode instanceof abortSignal) {
      if (!userProfileData.recursive && directoryNode.children.size > 0) {
        throw new _handleErrorAndCleanupListeners("rmdir", removeDirectory);
      }
      parentDirectoryNode.removeChild(_directoryName);
    } else {
      throw new __processData("rmdir", removeDirectory);
    }
  }
  readdir(readDirectory, _userPreferences = {}) {
    let { withFileTypes: includeFileTypes = false } = _userPreferences || {};
    let getFullPathForDirectory = extractPathSegments(readDirectory);
    let __directoryNode = this.core.getDirNodeAtPath(getFullPathForDirectory);
    if (includeFileTypes) {
      return Array.from(__directoryNode.children.values()).map(
        (extractCharacterInfo) => ({
          name: extractCharacterInfo.name,
          type: extractCharacterInfo.stats.type,
        }),
      );
    } else {
      return Array.from(__directoryNode.children.keys());
    }
  }
  unlink(unlinkFile) {
    let unlinkFilePath = extractPathSegments(unlinkFile);
    let fileNameToUnlink = unlinkFilePath.pop();
    if (!fileNameToUnlink) {
      throw new handleFlushEvent("open", unlinkFile);
    }
    let ___directoryNode = this.core.getDirNodeAtPath(unlinkFilePath);
    let fileNodeToUnlink = ___directoryNode.getChild(fileNameToUnlink);
    if (!fileNodeToUnlink) {
      throw new handleFlushEvent("unlink", unlinkFile);
    }
    if (fileNodeToUnlink instanceof abortSignal) {
      throw new flushBuffer("unlink", unlinkFile);
    }
    ___directoryNode.removeChild(fileNameToUnlink);
  }
  rename(sourceNodeId, destinationNodeId) {
    this.core.moveNode(sourceNodeId, destinationNodeId);
  }
  stat(getNodeStatisticsByPath) {
    let nodePathStatistics = extractPathSegments(getNodeStatisticsByPath);
    let currentNode = this.core.getNodeAtPath(
      nodePathStatistics,
      getNodeStatisticsByPath,
    );
    let iterationCount = 0;
    while (currentNode instanceof dataProcessingFunction) {
      if (iterationCount > 10) {
        throw new handleFlushEvent("open", getNodeStatisticsByPath);
      }
      currentNode = this.core.getNodeAtPath(
        extractPathSegments(currentNode.target),
        currentNode.target,
      );
      iterationCount++;
    }
    return currentNode.stats;
  }
  lstat(getNodeStatsAtPath) {
    let nodeStats = extractPathSegments(getNodeStatsAtPath);
    return this.core.getNodeAtPath(nodeStats, getNodeStatsAtPath).stats;
  }
  symlink(createSymbolicLink, targetPath) {
    let resolveSymbolicLinkPath = extractPathSegments(createSymbolicLink);
    let symbolicLinkNode = this.core.getNodeAtPath(
      resolveSymbolicLinkPath,
      createSymbolicLink,
    );
    let resolvedTargetPath = extractPathSegments(targetPath);
    let resolvedSymbolicLinkName = resolvedTargetPath.pop();
    if (!resolvedSymbolicLinkName) {
      throw new handleFlushEvent("symlink", targetPath);
    }
    let resolvedDirectoryNode = this.core.getDirNodeAtPath(resolvedTargetPath);
    if (!resolvedDirectoryNode) {
      throw new handleFlushEvent("symlink", targetPath);
    }
    if (resolvedDirectoryNode.getChild(resolvedSymbolicLinkName)) {
      throw new executeFlushOperation("symlink", targetPath);
    }
    let symbolicLinkNodeData = new dataProcessingFunction(
      resolvedSymbolicLinkName,
      symbolicLinkNode.getPath(),
      resolvedDirectoryNode,
    );
    resolvedDirectoryNode.addChild(symbolicLinkNodeData);
  }
  realpath(resolveFilePath) {
    let _resolvedFilePath = extractPathSegments(resolveFilePath);
    let nodeAtResolvedPath = this.core.getNodeAtPath(
      _resolvedFilePath,
      resolveFilePath,
    );
    if (!nodeAtResolvedPath) {
      throw new handleFlushEvent("realpath", resolveFilePath);
    }
    return (
      nodeAtResolvedPath instanceof dataProcessingFunction
        ? this.core.resolveSymlink(nodeAtResolvedPath)
        : nodeAtResolvedPath
    ).getPath();
  }
  readlink(resolveLink) {
    let resolvedLink = extractPathSegments(resolveLink);
    let targetNode = this.core.getNodeAtPath(resolvedLink, resolveLink);
    if (targetNode instanceof dataProcessingFunction) {
      return targetNode.target;
    }
    throw new ___writableState("readlink", resolveLink);
  }
  access(nodePath) {
    let ___pathSegments = extractPathSegments(nodePath);
    this.core.getNodeAtPath(___pathSegments, nodePath);
  }
  copyFile(copyFile, sourceFilePath, _initialValue = 0) {
    if (!(_initialValue < 0)) {
      _initialValue > createDeferredExecutor;
    }
    let isCopyFileExclusive =
      (_initialValue & ___cleanupEventListeners.COPYFILE_EXCL) ===
      ___cleanupEventListeners.COPYFILE_EXCL;
    let resolvedCopyFilePath = extractPathSegments(copyFile);
    let resolvedCopyFileNode = this.core.getNodeAtPath(
      resolvedCopyFilePath,
      copyFile,
    );
    if (!(resolvedCopyFileNode instanceof awaitFormatStringWithPlaceholders)) {
      throw new _handleWritableState("copyfile", copyFile);
    }
    let resolvedSourceFilePath = extractPathSegments(sourceFilePath);
    let resolvedFileName = resolvedSourceFilePath.pop();
    if (!resolvedFileName) {
      throw new handleFlushEvent("copyfile", sourceFilePath);
    }
    let sourceDirectoryNode = this.core.getDirNodeAtPath(
      resolvedSourceFilePath,
    );
    if (sourceDirectoryNode.getChild(resolvedFileName)) {
      if (isCopyFileExclusive) {
        throw new executeFlushOperation("copyfile", sourceFilePath);
      }
      sourceDirectoryNode.removeChild(resolvedFileName);
    }
    let copyFileWithSourcePath = new awaitFormatStringWithPlaceholders(
      resolvedFileName,
      new Uint8Array(resolvedCopyFileNode.content),
      sourceDirectoryNode,
      this.core,
    );
    sourceDirectoryNode.addChild(copyFileWithSourcePath);
  }
  exists(isStatExists) {
    try {
      this.stat(isStatExists);
      return true;
    } catch {
      return false;
    }
  }
};
var validateAndReturnListeners = new DeferredPromise();
var updateListenerMap = initializeAsyncStream();
updateListenerMap.onMessage((routerBroadcastHandler) => {
  if (
    routerBroadcastHandler.$type === "router-broadcast" &&
    routerBroadcastHandler.$origin !== handleAsyncError &&
    routerBroadcastHandler.$data.type === "fs-sync"
  ) {
    validateAndReturnListeners.core.handleSyncEvent(
      routerBroadcastHandler.$data.event,
    );
  }
});
validateAndReturnListeners.core.onFSEvent((fileSyncEvent) => {
  if (!fileSyncEvent.isSync) {
    updateListenerMap.broadcast({
      type: "fs-sync",
      event: fileSyncEvent,
    });
  }
});
var versionedListeners = class extends Worker {
  isTerminated;
  constructor(...constructorArguments) {
    super(...constructorArguments);
    this.isTerminated = false;
    this.addEventListener("error", (handleMessageClosure) => {
      if (
        handleMessageClosure.message &&
        handleMessageClosure.message.endsWith("closing")
      ) {
        handleMessageClosure.stopImmediatePropagation();
        handleMessageClosure.preventDefault();
        Object.defineProperty(this, "terminated", {
          value: true,
        });
      }
    });
  }
  terminate() {
    this.isTerminated = true;
    super.terminate();
  }
};
async function handleVersionedListeners() {
  let versionedListenerInstance = new versionedListeners(dequeueHeadValue(), {
    eval: true,
  });
  let _deferredPromise = new _handleReadableState.DeferredPromise();
  let handleVersionedListenerMessage = (handleDataLoadingState) => {
    let dataLoadingState = handleDataLoadingState.data;
    if (dataLoadingState.$type === "loaded") {
      _deferredPromise.resolve([
        versionedListenerInstance,
        dataLoadingState.$data.id,
      ]);
    } else if (dataLoadingState.$type === "init:failed") {
      _deferredPromise.reject(
        processWritableState(dataLoadingState.$data.error),
      );
    }
  };
  let handleVersionedListenerError = (_handleErrorResponse) => {
    _deferredPromise.reject(_handleErrorResponse.error);
  };
  versionedListenerInstance.addEventListener(
    "message",
    handleVersionedListenerMessage,
  );
  versionedListenerInstance.addEventListener(
    "error",
    handleVersionedListenerError,
  );
  return _deferredPromise.finally(() => {
    versionedListenerInstance.removeEventListener(
      "message",
      handleVersionedListenerMessage,
    );
    versionedListenerInstance.removeEventListener(
      "error",
      handleVersionedListenerError,
    );
  });
}
async function initializeBinding(createBinding, createBindingFunction) {
  let __deferredPromise = new _handleReadableState.DeferredPromise();
  sendInitializationMessage(createBinding, createBindingFunction.port2, {
    isMainThread: true,
  });
  let handlePortMessage = (handleReadyState) => {
    if (handleReadyState.data.$type === "ready") {
      __deferredPromise.resolve();
    }
  };
  createBindingFunction.port1.addEventListener("message", handlePortMessage);
  createBindingFunction.port1.start();
  return __deferredPromise.finally(() => {
    createBindingFunction.port1.removeEventListener(
      "message",
      handlePortMessage,
    );
  });
}
function sendInitializationMessage(
  _createBinding,
  __createBinding,
  dataStore = {},
) {
  let initializationMessage = {
    $type: "init",
    $data: {
      ...dataStore,
      fileTree: validateAndReturnListeners.core.serialize(),
    },
  };
  _createBinding.postMessage(initializationMessage, [__createBinding]);
}
var definePropertyIfWritable = createFlushHandler("runtime:worker");
var definePropertyForVersionIncremented = class {
  constructor(previewElement) {
    this.preview = previewElement;
    this.handleMessage = this.handleMessage.bind(this);
    this.#r.port1.addEventListener("message", this.handleMessage);
  }
  emitter = new promiseHandler();
  #e;
  #t = null;
  #a = handleVersionedListeners();
  #s = null;
  #l = false;
  #r = new MessageChannel();
  #n = new Map();
  #i = new Map();
  #o(isUserAuthenticated = false) {
    if (this.#t) {
      this.#t?.terminate();
      this.#u();
    } else {
      this.#a.then(() => this.#o());
    }
  }
  #u() {
    for (let serviceInstance of this.#n.values()) {
      serviceInstance.terminate();
    }
    for (let promiseTermination of this.#i.values()) {
      promiseTermination.then((processTermination) =>
        processTermination.terminate(),
      );
    }
  }
  sendInput(inputData) {
    this.#r.port1.postMessage({
      $type: "tty:out",
      $data: {
        fd: 0,
        data: inputData,
      },
    });
  }
  handleMessage(___handleWorkerMessage) {
    let { data: workerMessageData } = ___handleWorkerMessage;
    switch (workerMessageData.$type) {
      case "started": {
        this.emitter.dispatchEvent(
          new createAsyncIterableWithSignal("worker/started", {}),
        );
        return;
      }
      case "run:failed": {
        this.emitter.dispatchEvent(
          new createAsyncIterableWithSignal("worker/error", {
            data: workerMessageData.$data,
          }),
        );
        this.#o();
        return;
      }
      case "exit": {
        this.emitter.dispatchEvent(
          new createAsyncIterableWithSignal("worker/exit", {
            data: workerMessageData.$data,
          }),
        );
        this.#o();
        return;
      }
      case "tty:out": {
        let workerMessage = workerMessageData.$data;
        if (workerMessage.fd === 0) {
          break;
        }
        let messageType = workerMessage.fd === 1 ? "out" : "err";
        let decodedWorkerMessageData = _bufferWriteEncoding
          .from(workerMessage.data)
          .toString("utf-8");
        this.emitter.dispatchEvent(
          new createAsyncIterableWithSignal("worker/tty:out", {
            data: {
              payload: {
                data: decodedWorkerMessageData,
                type: messageType,
              },
            },
          }),
        );
        return;
      }
    }
  }
  stop() {
    if (this.#e) {
      let port = this.preview.getPortFromShellId(this.#e);
      if (port) {
        this.preview.closePort(port);
      }
    }
    this.#o(true);
    this.#r.port1.removeEventListener("message", this.handleMessage);
    this.#r.port1.close();
  }
  #c(messageEventHandler) {
    messageEventHandler.addEventListener(
      "message",
      (handleChildProcessEvent) => {
        let childProcessEvent = handleChildProcessEvent.data;
        switch (childProcessEvent.$type) {
          case "child:spawn": {
            console.warn("child:spawn called", childProcessEvent);
            let childProcessId = childProcessEvent.$data.id;
            let spawnedChildProcessPromise = handleVersionedListeners()
              .then(([_userSessionData, sessionValidationStatus]) => {
                this.#n.set(childProcessId, _userSessionData);
                this.#i.delete(childProcessId);
                this.#c(_userSessionData);
                sendInitializationMessage(
                  _userSessionData,
                  handleChildProcessEvent.ports[0],
                  {
                    isMainThread: false,
                    environmentData: childProcessEvent.$data.environmentData,
                    globals: {
                      ...(childProcessEvent.$data.globals || {}),
                    },
                  },
                );
                return _userSessionData;
              })
              .catch((handleChildProcessError) => {
                this.#i.delete(childProcessId);
                throw handleChildProcessError;
              });
            spawnedChildProcessPromise.catch(console.error);
            this.#i.set(childProcessId, spawnedChildProcessPromise);
            break;
          }
          case "child:kill": {
            let _childProcessId = childProcessEvent.$data.id;
            let childProcessReference = this.#n.get(_childProcessId);
            if (childProcessReference) {
              childProcessReference.terminate();
              this.#n.delete(_childProcessId);
            }
            break;
          }
        }
      },
    );
  }
  async _init() {
    let [workerData, workerResponse] = await this.#a;
    this.#t = workerData;
    this.#e = workerResponse;
    if (typeof window === "undefined") {
      console.error(
        "Tried to start a node worker from outside the main thread.",
      );
    } else {
      this.#c(workerData);
    }
    initializeAsyncStream().addEndpoint(
      "node-worker-" + (0, EventEmitterConstructor.default)(),
      {
        send: (postMessageToPort, ___messageData) =>
          this.#r.port1.postMessage(postMessageToPort, ___messageData),
        onMessage: (handleMessageFromPort) => {
          this.#r.port1.addEventListener("message", (messagePortData) => {
            handleMessageFromPort(messagePortData.data);
          });
        },
      },
    );
    await initializeBinding(workerData, this.#r).catch(
      (initializationError) => {
        let initializationErrorWithCause = new Error(
          "Initializing node worker failed",
        );
        initializationErrorWithCause.cause = initializationError;
        throw initializationErrorWithCause;
      },
    );
    this.#l = true;
    return workerResponse;
  }
  init() {
    if (this.#t?.isTerminated) {
      return Promise.reject(new Error("Worker has been terminated"));
    } else {
      this.#s ||= this._init();
      return this.#s;
    }
  }
  runCommand(commandData) {
    if (!this.#l) {
      throw new Error("Worker has not finished initialising");
    }
    this.#r.port1.postMessage({
      $type: "run",
      $data: commandData,
    });
  }
};
function createRegexFromMessagePattern(handleMessageEvent) {
  return new RegExp(handleMessageEvent.replace(/\*+/g, ".*"));
}
var waitForHandshakeDeferredPromise = class {
  _isClosed = false;
  _disposables = [];
  eventEmitter = new processTarFileError();
  onChange = this.eventEmitter.event;
  constructor(pathFilters, pathFiltersToIgnore) {
    let filteredPathTests = pathFilters.map((_createRegexFromMessagePattern) =>
      createRegexFromMessagePattern(_createRegexFromMessagePattern),
    );
    let ignoredPathFilters = pathFiltersToIgnore.map(
      (__createRegexFromMessagePattern) =>
        createRegexFromMessagePattern(__createRegexFromMessagePattern),
    );
    let isPathFiltered = (_isPathFiltered) => {
      for (let ignoredPathFilter of ignoredPathFilters) {
        if (ignoredPathFilter.test(_isPathFiltered)) {
          return false;
        }
      }
      for (let filteredPathTest of filteredPathTests) {
        if (filteredPathTest.test(_isPathFiltered)) {
          return true;
        }
      }
    };
    let onFileSystemEvent = validateAndReturnListeners.core.onFSEvent(
      (eventPayload) => {
        if (!this._isClosed) {
          switch (eventPayload.type) {
            case "create": {
              let parentNodePath = combineCleanupHandlers(
                eventPayload.parent,
                eventPayload.newNode.name,
              );
              if (isPathFiltered(parentNodePath)) {
                this.eventEmitter.fire({
                  type: "create",
                  path: parentNodePath,
                });
              }
              break;
            }
            case "remove": {
              let filteredEventPath = combineCleanupHandlers(
                eventPayload.parent,
                eventPayload.name,
              );
              if (isPathFiltered(filteredEventPath)) {
                this.eventEmitter.fire({
                  type: "remove",
                  path: filteredEventPath,
                });
              }
              break;
            }
            case "write": {
              if (isPathFiltered(eventPayload.path)) {
                this.eventEmitter.fire({
                  type: "change",
                  path: eventPayload.path,
                });
              }
              break;
            }
            case "move": {
              if (isPathFiltered(eventPayload.newPath)) {
                this.eventEmitter.fire({
                  type: "rename",
                  oldPath: eventPayload.oldPath,
                  newPath: eventPayload.newPath,
                });
              }
              break;
            }
          }
        }
      },
    );
    this._disposables.push(onFileSystemEvent);
  }
  close() {
    this._isClosed = true;
    for (let disposableItem of this._disposables) {
      try {
        disposableItem.dispose();
      } catch (_______________error) {
        console.warn(_______________error);
      }
    }
    this.eventEmitter.fire({
      type: "close",
    });
    this.eventEmitter.dispose();
  }
};
var payloadValueForMessage = class {
  constructor(dataObject) {
    this.data = dataObject;
    this.name = dataObject.name;
    this.type = dataObject.type;
  }
  name;
  type;
  isSymbolicLink() {
    return this.type === 2;
  }
  isSocket() {
    return false;
  }
  isFile() {
    return this.type === 1;
  }
  isFIFO() {
    return false;
  }
  isDirectory() {
    return this.type === 0;
  }
  isCharacterDevice() {
    return false;
  }
  isBlockDevice() {
    return false;
  }
};
var handlePipeCleanup = /^[0-7]+$/;
function processAndLogPipeEndingCount(
  logPipeEndCount,
  setPipeEndData,
  validateAndReturnSignalIntrinsicProperty,
) {
  logPipeEndCount ??= validateAndReturnSignalIntrinsicProperty;
  if (typeof logPipeEndCount == "string") {
    if (handlePipeCleanup.exec(logPipeEndCount) === null) {
      throw new Error("invalid mode");
    }
    logPipeEndCount = parseInt(logPipeEndCount, 8);
  }
  handleWritableStreamEvent(logPipeEndCount, setPipeEndData);
  return logPipeEndCount;
}
var calculateStreamEndValues = class extends Error {};
var ______handleUnpipeEvent = class extends Error {};
var handleWritableStreamEvent = (
  validateStreamEndValue,
  streamEndValue,
  isValidStreamEndValue,
) => {
  if (typeof validateStreamEndValue != "number") {
    throw new calculateStreamEndValues(
      streamEndValue,
      "number",
      validateStreamEndValue,
    );
  }
  if (!Number.isInteger(validateStreamEndValue)) {
    throw new ______handleUnpipeEvent(
      streamEndValue,
      "an integer",
      validateStreamEndValue,
    );
  }
  let isStreamEndValueValid = isValidStreamEndValue ? 1 : 0;
  let maxStreamEndValue = 4294967295;
  if (
    validateStreamEndValue < isStreamEndValueValid ||
    validateStreamEndValue > maxStreamEndValue
  ) {
    throw new ______handleUnpipeEvent(
      streamEndValue,
      ">= " + isStreamEndValueValid + " && <= " + maxStreamEndValue,
      validateStreamEndValue,
    );
  }
};
function getFileOpenMode(setWritableStreamState, flags = "flags") {
  if (typeof setWritableStreamState == "number") {
    return setWritableStreamState;
  }
  if (setWritableStreamState == null) {
    return ___cleanupEventListeners.O_RDONLY;
  }
  switch (setWritableStreamState) {
    case "r":
      return ___cleanupEventListeners.O_RDONLY;
    case "rs":
    case "sr":
      return (
        ___cleanupEventListeners.O_RDONLY | ___cleanupEventListeners.O_SYNC
      );
    case "r+":
      return ___cleanupEventListeners.O_RDWR;
    case "rs+":
    case "sr+":
      return ___cleanupEventListeners.O_RDWR | ___cleanupEventListeners.O_SYNC;
    case "w":
      return (
        ___cleanupEventListeners.O_TRUNC |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_WRONLY
      );
    case "wx":
    case "xw":
      return (
        ___cleanupEventListeners.O_TRUNC |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_WRONLY |
        ___cleanupEventListeners.O_EXCL
      );
    case "w+":
      return (
        ___cleanupEventListeners.O_TRUNC |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_RDWR
      );
    case "wx+":
    case "xw+":
      return (
        ___cleanupEventListeners.O_TRUNC |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_RDWR |
        ___cleanupEventListeners.O_EXCL
      );
    case "a":
      return (
        ___cleanupEventListeners.O_APPEND |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_WRONLY
      );
    case "ax":
    case "xa":
      return (
        ___cleanupEventListeners.O_APPEND |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_WRONLY |
        ___cleanupEventListeners.O_EXCL
      );
    case "as":
    case "sa":
      return (
        ___cleanupEventListeners.O_APPEND |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_WRONLY |
        ___cleanupEventListeners.O_SYNC
      );
    case "a+":
      return (
        ___cleanupEventListeners.O_APPEND |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_RDWR
      );
    case "ax+":
    case "xa+":
      return (
        ___cleanupEventListeners.O_APPEND |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_RDWR |
        ___cleanupEventListeners.O_EXCL
      );
    case "as+":
    case "sa+":
      return (
        ___cleanupEventListeners.O_APPEND |
        ___cleanupEventListeners.O_CREAT |
        ___cleanupEventListeners.O_RDWR |
        ___cleanupEventListeners.O_SYNC
      );
  }
  throw new Error("flags invalid");
}
var processDrainEvents = defineModuleExports(handleOutputStreamError());
var processUnicodeCharacter = class extends processDrainEvents.Readable {
  _read() {}
};
var checkAndUpdateCounter = defineModuleExports(handleOutputStreamError());
____updateIntrinsicProperties();
function createUnicodeProcessingPromise(_processUnicodeCharacters) {
  return function (...unicodeProcessingFunction) {
    return new Promise((processUnicodeAndHandleErrors, handleErrorCallback) => {
      setTimeout(() => {
        try {
          let processedUnicodeCharacters = _processUnicodeCharacters(
            ...unicodeProcessingFunction,
          );
          processUnicodeAndHandleErrors(processedUnicodeCharacters);
        } catch (__________________error) {
          handleErrorCallback(__________________error);
        }
      }, 0);
    });
  };
}
function createAsyncCharacterProcessor(_processUnicodeCharacter) {
  return function (...callbackHandler) {
    let _callbackHandler = callbackHandler.pop();
    if (typeof _callbackHandler != "function") {
      throw new Error("No callback provided");
    }
    setTimeout(() => {
      try {
        let processedUnicodeCharacter = _processUnicodeCharacter(
          ...callbackHandler,
        );
        _callbackHandler(null, processedUnicodeCharacter);
      } catch (________________error) {
        _callbackHandler(________________error, null);
      }
    }, 0);
  };
}
function handleBase64EncodingAndCallback(
  _handleBase64EncodingValidation,
  updateEncodedData,
) {
  return function (...handleCallbackWithEncodingValidation) {
    let ____callbackFunction = handleCallbackWithEncodingValidation.pop();
    if (typeof ____callbackFunction != "function") {
      throw new Error("No callback provided");
    }
    setTimeout(() => {
      try {
        let base64EncodingValidationResult = _handleBase64EncodingValidation(
          ...handleCallbackWithEncodingValidation,
        );
        ____callbackFunction(base64EncodingValidationResult);
      } catch {
        ____callbackFunction(updateEncodedData);
      }
    }, 0);
  };
}
var handleBase64DataProcessing =
  createUnicodeProcessingPromise(getStreamListeners);
handleBase64DataProcessing.native = handleBase64DataProcessing;
var handleBase64Encoding = {
  readFile: createUnicodeProcessingPromise(processBase64DecodeChunk),
  writeFile: createUnicodeProcessingPromise(processAndSaveBase64Data),
  mkdir: createUnicodeProcessingPromise(_processBase64AndValidate),
  rmdir: createUnicodeProcessingPromise(handleBase64Data),
  rm: createUnicodeProcessingPromise(______handleStreamVersionUpdate),
  readdir: createUnicodeProcessingPromise(processBase64Decoding),
  unlink: createUnicodeProcessingPromise(unlinkBase64DataAbortSignal),
  rename: createUnicodeProcessingPromise(_processBase64Decoding),
  stat: createUnicodeProcessingPromise(decodeBase64StreamAndValidate),
  lstat: createUnicodeProcessingPromise(handleStreamAndListeners),
  symlink: createUnicodeProcessingPromise(linkBase64StreamListeners),
  link: createUnicodeProcessingPromise(_handleUnpipeBase64Stream),
  appendFile: createUnicodeProcessingPromise(updateStreamData),
  readlink: createUnicodeProcessingPromise(getValidatedListenersFromBase64),
  access: createUnicodeProcessingPromise(handleBase64Stream),
  copyFile: createUnicodeProcessingPromise(handleStreamUnpipeAndCopyFile),
  exists: createUnicodeProcessingPromise(_validateAndProcessAbortSignal),
  chown: createUnicodeProcessingPromise(________handleStreamVersionUpdate),
  chmod: createUnicodeProcessingPromise(_______handleStreamVersionUpdate),
  createReadStream: __handleVersionUpdate,
  constants: ___cleanupEventListeners,
  realpath: handleBase64DataProcessing,
};
var decodeBase64StreamIntoBuffer = defineModuleExports(createBlobUrl());
var decodeBase64ToBytes = defineModuleExports(handleOutputStreamError());
var base64DecodeToBytes = createAsyncCharacterProcessor(
  processBase64DecodeChunk,
);
var __processBase64Encoding = createAsyncCharacterProcessor(
  processAndSaveBase64Data,
);
var handleBase64EncodingValidationFunction = createAsyncCharacterProcessor(
  _processBase64AndValidate,
);
var _____validateBase64Encoding =
  createAsyncCharacterProcessor(handleBase64Data);
var validateAndDecodeBase64Stream = createAsyncCharacterProcessor(
  processBase64Decoding,
);
var decodeBase64ToUtf8 = createAsyncCharacterProcessor(
  unlinkBase64DataAbortSignal,
);
var ______validateBase64Encoding = createAsyncCharacterProcessor(
  _processBase64Decoding,
);
var base64DecodeIntoBuffer = createAsyncCharacterProcessor(
  decodeBase64StreamAndValidate,
);
var validateAndDecodeBase64 = createAsyncCharacterProcessor(
  handleStreamAndListeners,
);
var _______validateBase64Encoding = createAsyncCharacterProcessor(
  linkBase64StreamListeners,
);
var ________validateBase64Encoding = createAsyncCharacterProcessor(
  _handleUnpipeBase64Stream,
);
var _validateAndDecodeBase64 = createAsyncCharacterProcessor(
  ______handleStreamVersionUpdate,
);
var _________validateBase64Encoding = createAsyncCharacterProcessor(
  getValidatedListenersFromBase64,
);
var __validateAndDecodeBase64 =
  createAsyncCharacterProcessor(handleBase64Stream);
var __________validateBase64Encoding = createAsyncCharacterProcessor(
  handleStreamUnpipeAndCopyFile,
);
var decodeUtf8FromBase64 = handleBase64EncodingAndCallback(
  _validateAndProcessAbortSignal,
  false,
);
var ___________validateBase64Encoding = createAsyncCharacterProcessor(
  handleStreamUnsubscriptionAndCleanup,
);
var ____________validateBase64Encoding = createAsyncCharacterProcessor(
  deleteStreamUpdateVersion,
);
var _____________validateBase64Encoding =
  createAsyncCharacterProcessor(getPathFromStream);
var decodeBase64ToUTF8 = createAsyncCharacterProcessor(
  ________handleStreamVersionUpdate,
);
var decodeBase64 = createAsyncCharacterProcessor(
  _______handleStreamVersionUpdate,
);
var validateAndDecodeBase64Encoding =
  createAsyncCharacterProcessor(updateStreamData);
var ______________validateBase64Encoding =
  createAsyncCharacterProcessor(getStreamListeners);
var decodeBase64ToUnicode = ______________validateBase64Encoding;
decodeBase64ToUnicode.native = ______________validateBase64Encoding;
var base64DecodeHandler = getStreamListeners;
base64DecodeHandler.native = getStreamListeners;
function decodeBase64ToString(_decodeBase64ToUnicode, base64DecodeCharacters) {
  base64DecodeCharacters = base64DecodeCharacters ?? "buffer";
  let ___decodedData = getBufferWriteEncodingFromAbortSignalManager(
    _decodeBase64ToUnicode,
  );
  if (base64DecodeCharacters === "buffer") {
    return ___decodedData;
  } else {
    return ___decodedData.toString(base64DecodeCharacters);
  }
}
function waitForIdleDependencies() {
  return validateAndReturnListeners.waitForIdleDependencies();
}
function processBase64DecodeChunk(
  base64CharProcessingIndex,
  _base64DecodeChunk,
) {
  let base64DecodedData = validateAndReturnListeners.readFileSync(
    getProcessedAbortSignal(base64CharProcessingIndex),
  );
  let base64Encoding =
    typeof _base64DecodeChunk == "string"
      ? _base64DecodeChunk
      : _base64DecodeChunk?.encoding;
  return decodeBase64ToString(base64DecodedData, base64Encoding);
}
function processBase64AndValidate(
  decodeBase64AndAccumulateCharacters,
  ___processBase64Encoding,
) {
  ___processBase64Encoding = ___processBase64Encoding ?? "utf-8";
  return validateAndConvertProperty(
    decodeBase64AndAccumulateCharacters,
    ___processBase64Encoding,
  );
}
function processAndSaveBase64Data(
  decodeBase64AndProcess,
  validateAndDecodeBase64Chunk,
  decodeBase64AndHandleSurrogatePairs,
) {
  let processedBase64Data = processBase64AndValidate(
    validateAndDecodeBase64Chunk,
    decodeBase64AndHandleSurrogatePairs,
  );
  validateAndReturnListeners.writeFileSync(
    getProcessedAbortSignal(decodeBase64AndProcess),
    processedBase64Data,
  );
}
function _processBase64AndValidate(
  __decodeBase64ToUnicode,
  _______________validateBase64Encoding,
) {
  validateAndReturnListeners.mkdir(
    getProcessedAbortSignal(__decodeBase64ToUnicode),
    _______________validateBase64Encoding,
  );
}
function handleBase64Data(
  processBase64EncodedData,
  ________________validateBase64Encoding,
) {
  validateAndReturnListeners.rmdir(
    getProcessedAbortSignal(processBase64EncodedData),
    ________________validateBase64Encoding,
  );
}
function processPayloads(calculateBase64EncodedValue) {
  return calculateBase64EncodedValue.map((resolvePayloadValue) =>
    typeof resolvePayloadValue == "string"
      ? resolvePayloadValue
      : new payloadValueForMessage(resolvePayloadValue),
  );
}
function processBase64Decoding(decodeBase64Chunk, handleBase64Decoding) {
  let decodedBase64Listeners = validateAndReturnListeners.readdir(
    getProcessedAbortSignal(decodeBase64Chunk),
    handleBase64Decoding,
  );
  return processPayloads(decodedBase64Listeners);
}
function unlinkBase64DataAbortSignal(_handleBase64DataProcessing) {
  validateAndReturnListeners.unlink(
    getProcessedAbortSignal(_handleBase64DataProcessing),
  );
}
function _processBase64Decoding(_handleBase64Decoding, decodeBase64Stream) {
  validateAndReturnListeners.rename(
    getProcessedAbortSignal(_handleBase64Decoding),
    decodeBase64Stream,
  );
}
function createBase64StreamEventListener(_decodeBase64Stream) {
  return createEventListenerHandler(_decodeBase64Stream);
}
function decodeBase64StreamAndValidate(
  decodeBase64StreamData,
  _optionsConfig = {
    throwIfNoEntry: true,
  },
) {
  try {
    return createBase64StreamEventListener(
      validateAndReturnListeners.stat(
        getProcessedAbortSignal(decodeBase64StreamData),
      ),
    );
  } catch (__error) {
    if (_optionsConfig.throwIfNoEntry === false && __error.code === "ENOENT") {
      return;
    }
    throw __error;
  }
}
function handleStreamAndListeners(handleStreamUnpipe) {
  return createBase64StreamEventListener(
    validateAndReturnListeners.lstat(
      getProcessedAbortSignal(handleStreamUnpipe),
    ),
  );
}
function getPathFromStream(handleBase64StreamUnpipe) {
  let { path: streamPath } =
    assignPropertiesFromStream[handleBase64StreamUnpipe];
  if (!streamPath) {
    throw new Error("Could not find path for fd: " + handleBase64StreamUnpipe);
  }
  return createBase64StreamEventListener(
    validateAndReturnListeners.stat(streamPath),
  );
}
function linkBase64StreamListeners(
  _handleBase64StreamUnpipe,
  handleUnpipeBase64Stream,
) {
  validateAndReturnListeners.symlink(
    getProcessedAbortSignal(_handleBase64StreamUnpipe),
    getProcessedAbortSignal(handleUnpipeBase64Stream),
  );
}
function _handleUnpipeBase64Stream(
  UnpipeBase64StreamHandler,
  createUnpipeStreamHandler,
) {
  validateAndReturnListeners.symlink(
    getProcessedAbortSignal(UnpipeBase64StreamHandler),
    getProcessedAbortSignal(createUnpipeStreamHandler),
  );
}
function getValidatedListenersFromBase64(getLatestBase64EncodedValue) {
  return validateAndReturnListeners.readlink(
    getProcessedAbortSignal(getLatestBase64EncodedValue),
  );
}
function handleBase64Stream(Base64StreamHandler) {
  validateAndReturnListeners.access(
    getProcessedAbortSignal(Base64StreamHandler),
  );
}
function handleStreamUnpipeAndCopyFile(
  unpipeFromStreamByCondition,
  _handleStreamUnpipe,
  _unpipeBase64Stream,
) {
  validateAndReturnListeners.copyFile(
    getProcessedAbortSignal(unpipeFromStreamByCondition),
    getProcessedAbortSignal(_handleStreamUnpipe),
    _unpipeBase64Stream,
  );
}
function getStreamListeners(initializeUnpipeStream) {
  return validateAndReturnListeners.realpath(
    getProcessedAbortSignal(initializeUnpipeStream),
  );
}
function _validateAndProcessAbortSignal(setPrototypeOrCopyProperties) {
  if (setPrototypeOrCopyProperties) {
    return validateAndReturnListeners.exists(
      getProcessedAbortSignal(setPrototypeOrCopyProperties),
    );
  } else {
    return false;
  }
}
var assignPropertiesFromStream = {};
function handleStreamUnsubscriptionAndCleanup(
  handleStreamUnsubscription,
  _______handleUnpipeEvent,
  handleStreamUnpipeEvent,
) {
  if (arguments.length < 2) {
    _______handleUnpipeEvent = "r";
    handleStreamUnpipeEvent = 438;
  } else if (typeof handleStreamUnpipeEvent == "function") {
    handleStreamUnpipeEvent = 438;
  } else {
    handleStreamUnpipeEvent = processAndLogPipeEndingCount(
      handleStreamUnpipeEvent,
      "mode",
      438,
    );
  }
  let fileOpenMode =
    getFileOpenMode(_______handleUnpipeEvent) &
    ___cleanupEventListeners.O_CREAT;
  handleStreamUnsubscription = getProcessedAbortSignal(
    handleStreamUnsubscription,
  );
  try {
    validateAndReturnListeners.access(handleStreamUnsubscription);
  } catch (______error) {
    if (fileOpenMode) {
      processAndSaveBase64Data(handleStreamUnsubscription, "");
    } else {
      throw ______error;
    }
  }
  let randomStreamIdentifier = Math.floor(Math.random() * 100000);
  assignPropertiesFromStream[randomStreamIdentifier] = {
    path: handleStreamUnsubscription,
    cursor: 0,
  };
  return randomStreamIdentifier;
}
function deleteStreamUpdateVersion(handleStreamUpdateVersion) {
  delete assignPropertiesFromStream[handleStreamUpdateVersion];
}
function __handleVersionUpdate(_handleVersionUpdate) {
  let unicodeCharacterProcessor = new processUnicodeCharacter();
  setTimeout(() => {
    try {
      let decodedVersionUpdateChunk =
        processBase64DecodeChunk(_handleVersionUpdate);
      unicodeCharacterProcessor.push(decodedVersionUpdateChunk);
      unicodeCharacterProcessor.push(null);
    } catch (___________________error) {
      unicodeCharacterProcessor.destroy(___________________error);
    }
  }, 1);
  return unicodeCharacterProcessor;
}
function _______handleStreamVersionUpdate(_handleStreamVersionUpdate) {
  decodeBase64StreamAndValidate(_handleStreamVersionUpdate);
}
function ________handleStreamVersionUpdate(__handleStreamVersionUpdate) {
  decodeBase64StreamAndValidate(__handleStreamVersionUpdate);
}
function ______handleStreamVersionUpdate(
  ___handleStreamVersionUpdate,
  ____handleStreamVersionUpdate,
) {
  ____handleStreamVersionUpdate = ____handleStreamVersionUpdate || {};
  try {
    if (
      decodeBase64StreamAndValidate(___handleStreamVersionUpdate)?.isDirectory()
    ) {
      return handleBase64Data(
        ___handleStreamVersionUpdate,
        ____handleStreamVersionUpdate,
      );
    } else {
      return unlinkBase64DataAbortSignal(___handleStreamVersionUpdate);
    }
  } catch (__________error) {
    if (____handleStreamVersionUpdate.force) {
      return;
    }
    throw __________error;
  }
}
function updateStreamData(
  handleStreamUpdate,
  _____handleStreamVersionUpdate,
  handleStreamVersion,
) {
  let streamData = "";
  try {
    streamData = processBase64DecodeChunk(
      getProcessedAbortSignal(handleStreamUpdate),
      handleStreamVersion || "utf8",
    );
  } catch (_______error) {
    if (!_______error.message.includes("ENOENT")) {
      throw _______error;
    }
  }
  let combinedStreamData =
    typeof _____handleStreamVersionUpdate == "string" &&
    typeof streamData == "string"
      ? streamData + _____handleStreamVersionUpdate
      : Buffer.concat([
          Buffer.isBuffer(streamData) ? streamData : Buffer.from(streamData),
          Buffer.isBuffer(_____handleStreamVersionUpdate)
            ? _____handleStreamVersionUpdate
            : Buffer.from(_____handleStreamVersionUpdate),
        ]);
  processAndSaveBase64Data(
    handleStreamUpdate,
    combinedStreamData,
    handleStreamVersion,
  );
}
globalThis.global = globalThis;
globalThis.originalConsole = console;
var _createReadableStream = createFlushHandler("runtime");
async function handleNodeRemovalEvent() {
  let slugForNodeRemoval = validateNodeRemovalParams.default.slug();
  let handleEventCallbackForNodeRemoval = new handleEventCallback(
    slugForNodeRemoval,
  );
  validateAndReturnListeners.isMain = true;
  validateAndReturnListeners.core.onFSEvent((nodeOperation) => {
    if (
      (() => {
        if (nodeOperation.type === "create") {
          let nodeName = nodeOperation.newNode.name;
          if (nodeName) {
            return (
              nodeOperation.parent + "/" + nodeName ===
              ___deferredPromiseExecutor
            );
          }
        } else if (nodeOperation.type === "write") {
          return nodeOperation.path === ___deferredPromiseExecutor;
        }
      })()
    ) {
      validateAndReturnListeners
        .installDependencies()
        .catch((logDependencyReinstallError) => {
          console.error(
            'Failed to re-install dependencies upon "package.json" change.',
          );
          console.error(logDependencyReinstallError);
        });
    }
  });
  validateAndReturnListeners.mkdir("/tmp");
  let writableStateModified = new isWritableStateModified();
  writableStateModified.on("connect", ({ cdnUrl: cdnUrlValue }) => {
    let cdnUrl = cdnUrlValue || "https://sandpack-cdn-v2.codesandbox.io";
    isWritable(
      cdnUrl,
      "Failed to connect to Nodebox: the Sandpack CDN URL is not defined",
    );
    validateAndReturnListeners.cdnUrl = cdnUrl;
    writableStateModified.send("runtime/ready");
  });
  validateAndReturnListeners.packageManager.addEventListener(
    "progress",
    (moduleDownloadProgress) => {
      let {
        name: moduleName,
        totalPending: totalFilesPending,
        version: moduleVersion,
      } = moduleDownloadProgress.data;
      writableStateModified.send("worker/progress", {
        status: {
          state: "downloaded_module",
          name: moduleName,
          totalPending: totalFilesPending,
          version: moduleVersion,
        },
      });
    },
  );
  if (!_validateAndProcessAbortSignal(_processData)) {
    _processBase64AndValidate(_processData);
  }
  writableStateModified.on("fs/init", ({ files: fileList }) => {
    _createReadableStream("Handling fs/init");
    Object.entries(fileList).map(([userInputData, userPreferences]) => {
      let _resolvedPath = resolvePath(
        joinPathSegments(_processData, userInputData),
      );
      let formattedNodeRemovalResult =
        validateAndFormatNodeRemoval(_resolvedPath);
      _processBase64AndValidate(formattedNodeRemovalResult, {
        recursive: true,
      });
      processAndSaveBase64Data(_resolvedPath, userPreferences);
    });
  });
  writableStateModified.on(
    "fs/readFile",
    ({ path: _______filePath, encoding: _fileEncoding }) => ({
      data: processBase64DecodeChunk(
        joinPathSegments(_processData, _______filePath),
        _fileEncoding,
      ),
    }),
  );
  writableStateModified.on(
    "fs/writeFile",
    ({
      path: __filePath,
      content: _fileContent,
      encoding: fileEncoding,
      recursive: _isRecursive,
    }) => {
      let _joinedPath = joinPathSegments(_processData, __filePath);
      if (_isRecursive) {
        _processBase64AndValidate(validateAndFormatNodeRemoval(_joinedPath), {
          recursive: true,
        });
      }
      processAndSaveBase64Data(_joinedPath, _fileContent, fileEncoding);
    },
  );
  writableStateModified.on("fs/readdir", ({ path: pathVariable }) => ({
    data: processBase64Decoding(joinPathSegments(_processData, pathVariable)),
  }));
  writableStateModified.on(
    "fs/mkdir",
    ({ path: ______filePath, recursive: ___isRecursive }) => {
      _processBase64AndValidate(
        joinPathSegments(_processData, ______filePath),
        {
          recursive: ___isRecursive,
        },
      );
    },
  );
  writableStateModified.on(
    "fs/rm",
    ({
      path: _____filePath,
      force: forceOverwrite,
      recursive: __isRecursive,
    }) => {
      ______handleStreamVersionUpdate(
        joinPathSegments(_processData, _____filePath),
        {
          force: forceOverwrite,
          recursive: __isRecursive,
        },
      );
    },
  );
  writableStateModified.on("fs/stat", ({ path: ________filePath }) => {
    let fileInfo = decodeBase64StreamAndValidate(
      joinPathSegments(_processData, ________filePath),
    );
    if (!fileInfo) {
      throw new Error("File not found");
    }
    return {
      data: {
        type: fileInfo.isFile()
          ? "file"
          : fileInfo.isDirectory()
            ? "dir"
            : "link",
        size: fileInfo.size,
        ino: fileInfo.ino,
        atimeMs: fileInfo.atimeMs,
        mtimeMs: fileInfo.mtimeMs,
        ctimeMs: fileInfo.ctimeMs,
        blocks: fileInfo.blocks,
        mode: fileInfo.mode,
      },
    };
  });
  let handleNodeRemovalEventCallback = new Map();
  writableStateModified.on(
    "fs/watch",
    ({
      watcherId: watcherIdentifier,
      includes: includedItems,
      excludes: excludedItems,
    }) => {
      let handshakePromise = new waitForHandshakeDeferredPromise(
        includedItems.map((targetedSegment) =>
          joinPathSegments(_processData, targetedSegment),
        ),
        excludedItems.map((finalPathSegment) =>
          joinPathSegments(_processData, finalPathSegment),
        ),
      );
      handleNodeRemovalEventCallback.set(watcherIdentifier, handshakePromise);
      let handleFileEvent = (fileSystemEvent) => {
        switch (fileSystemEvent.type) {
          case "change":
            writableStateModified.send("fs/watch-event", {
              type: "change",
              path: fileSystemEvent.path.replace(_processData, ""),
              watcherId: watcherIdentifier,
            });
            break;
          case "create":
            writableStateModified.send("fs/watch-event", {
              type: "create",
              path: fileSystemEvent.path.replace(_processData, ""),
              watcherId: watcherIdentifier,
            });
            break;
          case "remove":
            writableStateModified.send("fs/watch-event", {
              type: "remove",
              path: fileSystemEvent.path.replace(_processData, ""),
              watcherId: watcherIdentifier,
            });
            break;
          case "rename":
            writableStateModified.send("fs/watch-event", {
              type: "rename",
              oldPath: fileSystemEvent.oldPath.replace(_processData, ""),
              newPath: fileSystemEvent.newPath.replace(_processData, ""),
              watcherId: watcherIdentifier,
            });
            break;
          case "close":
            writableStateModified.send("fs/watch-event", {
              type: "close",
              watcherId: watcherIdentifier,
            });
            break;
        }
      };
      handshakePromise.onChange(handleFileEvent);
    },
  );
  writableStateModified.on(
    "fs/unwatch",
    ({ watcherId: _watcherIdentifier }) => {
      handleNodeRemovalEventCallback.get(_watcherIdentifier)?.close();
    },
  );
  let _writableStateModified = new Map();
  writableStateModified.on("shell/exit", ({ id: userId }) => {
    _createReadableStream(
      'consumer requested to exit shell at worker "%s"',
      userId,
    );
    let workerWritableState = _writableStateModified.get(userId);
    validateEventListener(
      workerWritableState,
      "Trying to exit a worker that doesn't exist",
    );
    if (workerWritableState) {
      workerWritableState.stop();
      _writableStateModified.delete(userId);
    }
  });
  writableStateModified.on(
    "shell/stdin",
    ({ workerId: workerIdentifier, data: _workerData }) => {
      let workerState = _writableStateModified.get(workerIdentifier);
      if (workerState) {
        workerState.sendInput(_workerData);
      }
    },
  );
  writableStateModified.on(
    "shell/runCommand",
    async ({
      command: commandFunction,
      args: commandArguments,
      options: commandOptions,
    }) => {
      let manifestDownloader = new definePropertyForVersionIncremented(
        handleEventCallbackForNodeRemoval,
      );
      writableStateModified.send("worker/progress", {
        status: {
          state: "downloading_manifest",
        },
      });
      await waitForIdleDependencies();
      let workerId = await manifestDownloader.init();
      _writableStateModified.set(workerId, manifestDownloader);
      manifestDownloader.emitter.addEventListener(
        "worker/tty:out",
        ({ data: responseData }) => {
          writableStateModified.send("worker/tty", {
            workerId: workerId,
            payload: responseData.payload,
          });
        },
      );
      manifestDownloader.emitter.addEventListener(
        "worker/exit",
        ({ data: _responseData }) => {
          writableStateModified.send("worker/exit", {
            workerId: workerId,
            exitCode: _responseData.exitCode,
          });
        },
      );
      manifestDownloader.emitter.addEventListener(
        "worker/error",
        ({ data: userData }) => {
          writableStateModified.send("worker/exit", {
            workerId: workerId,
            exitCode: 1,
            error: userData.error,
          });
        },
      );
      return new Promise((startWorkerProcess) => {
        startWorkerProcess({
          id: workerId,
        });
        writableStateModified.send("worker/progress", {
          workerId: workerId,
          status: {
            state: "starting_command",
          },
        });
        let commandEmitter = new CustomEventEmitter();
        let onWorkerStarted = () => {
          writableStateModified.send("worker/progress", {
            workerId: workerId,
            status: {
              state: "command_running",
            },
          });
          commandEmitter.dispose();
        };
        manifestDownloader.emitter.addEventListener(
          "worker/started",
          onWorkerStarted,
        );
        commandEmitter.onDidDispose(() =>
          manifestDownloader.emitter.removeEventListener(
            "worker/started",
            onWorkerStarted,
          ),
        );
        let currentWorkingDirectory = commandOptions.cwd
          ? joinPathSegments(_processData, commandOptions.cwd)
          : _processData;
        manifestDownloader.runCommand({
          command: commandFunction,
          args: commandArguments,
          cwd: currentWorkingDirectory,
          env: commandOptions.env,
        });
      });
    },
  );
  writableStateModified.on(
    "preview/get/info",
    ({ sourceShellId: sourceShellId, port: _destinationPort }) => {
      let portId =
        _destinationPort ||
        (sourceShellId
          ? handleEventCallbackForNodeRemoval.getPortFromShellId(sourceShellId)
          : undefined);
      if (!portId || !handleEventCallbackForNodeRemoval.ports.has(portId)) {
        return;
      }
      let _sourceNode =
        sourceShellId || handleEventCallbackForNodeRemoval.ports.get(portId);
      let baseLinkUrl = handleEventCallbackForNodeRemoval.getBaseLink(portId);
      return {
        port: portId,
        url: baseLinkUrl,
        sourceShellId: _sourceNode,
      };
    },
  );
  handleEventCallbackForNodeRemoval.emitter.addEventListener(
    "port/ready",
    (sendPreviewPortReady) => {
      writableStateModified.send(
        "preview/port/ready",
        sendPreviewPortReady.data,
      );
    },
  );
}
handleNodeRemovalEvent().catch(console.error);
