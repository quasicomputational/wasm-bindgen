(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: run, __wbindgen_number_new, __wbindgen_string_new, __wbindgen_object_drop_ref, __wbg_log_4a4a987f783d8fd3, __wbg_log_147e873043e41c14, __wbg_log_4584557def6005e9, __widl_f_log_1_, __widl_f_log_2_, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_4a4a987f783d8fd3\", function() { return __wbg_log_4a4a987f783d8fd3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_147e873043e41c14\", function() { return __wbg_log_147e873043e41c14; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_4584557def6005e9\", function() { return __wbg_log_4584557def6005e9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_1_\", function() { return __widl_f_log_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_2_\", function() { return __widl_f_log_2_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nfunction logError(e) {\n    let error = (function () {\n        try {\n            return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n/**\n*/\nfunction run() {\n    try {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n    } catch (e) {\n        logError(e)\n    }\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst __wbindgen_number_new = function(arg0) {\n    try {\n        const ret = arg0;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    try {\n        const ret = getStringFromWasm(arg0, arg1);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    try {\n        takeObject(arg0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_log_4a4a987f783d8fd3 = function(arg0, arg1) {\n    try {\n        console.log(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_log_147e873043e41c14 = function(arg0) {\n    try {\n        console.log(arg0 >>> 0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_log_4584557def6005e9 = function(arg0, arg1, arg2, arg3) {\n    try {\n        console.log(getStringFromWasm(arg0, arg1), getStringFromWasm(arg2, arg3));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_log_1_ = function(arg0) {\n    try {\n        console.log(getObject(arg0));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_log_2_ = function(arg0, arg1) {\n    try {\n        console.log(getObject(arg0), getObject(arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    try {\n        throw new Error(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ \"./pkg/index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);