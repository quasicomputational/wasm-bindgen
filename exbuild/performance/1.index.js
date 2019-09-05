(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: run, __wbg_log_2f31b209cebeaf7d, __wbindgen_object_drop_ref, __widl_f_now_Performance, __widl_f_timing_Performance, __widl_f_request_start_PerformanceTiming, __widl_f_response_end_PerformanceTiming, __widl_instanceof_Window, __widl_f_performance_Window, __wbg_newnoargs_6ad69a50998c5acb, __wbg_call_4499dca0c553c196, __wbg_globalThis_36c1f2e85948e420, __wbg_self_73c7a601ff857345, __wbg_window_ca735e04cb2b0566, __wbg_global_99312a595fd2e761, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_2f31b209cebeaf7d\", function() { return __wbg_log_2f31b209cebeaf7d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_now_Performance\", function() { return __widl_f_now_Performance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_timing_Performance\", function() { return __widl_f_timing_Performance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_request_start_PerformanceTiming\", function() { return __widl_f_request_start_PerformanceTiming; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_response_end_PerformanceTiming\", function() { return __widl_f_response_end_PerformanceTiming; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_performance_Window\", function() { return __widl_f_performance_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_6ad69a50998c5acb\", function() { return __wbg_newnoargs_6ad69a50998c5acb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_4499dca0c553c196\", function() { return __wbg_call_4499dca0c553c196; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_36c1f2e85948e420\", function() { return __wbg_globalThis_36c1f2e85948e420; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_73c7a601ff857345\", function() { return __wbg_self_73c7a601ff857345; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_ca735e04cb2b0566\", function() { return __wbg_window_ca735e04cb2b0566; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_99312a595fd2e761\", function() { return __wbg_global_99312a595fd2e761; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nfunction logError(e) {\n    let error = (function () {\n        try {\n            return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n/**\n*/\nfunction run() {\n    try {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n    } catch (e) {\n        logError(e)\n    }\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction handleError(e) {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n}\n\nconst __wbg_log_2f31b209cebeaf7d = function(arg0, arg1) {\n    try {\n        console.log(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    try {\n        takeObject(arg0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_now_Performance = function(arg0) {\n    try {\n        const ret = getObject(arg0).now();\n        _assertNum(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_timing_Performance = function(arg0) {\n    try {\n        const ret = getObject(arg0).timing;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_request_start_PerformanceTiming = function(arg0) {\n    try {\n        const ret = getObject(arg0).requestStart;\n        _assertNum(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_response_end_PerformanceTiming = function(arg0) {\n    try {\n        const ret = getObject(arg0).responseEnd;\n        _assertNum(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_instanceof_Window = function(arg0) {\n    try {\n        const ret = getObject(arg0) instanceof Window;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_performance_Window = function(arg0) {\n    try {\n        const ret = getObject(arg0).performance;\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_newnoargs_6ad69a50998c5acb = function(arg0, arg1) {\n    try {\n        const ret = new Function(getStringFromWasm(arg0, arg1));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_call_4499dca0c553c196 = function(arg0, arg1) {\n    try {\n        try {\n            const ret = getObject(arg0).call(getObject(arg1));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_globalThis_36c1f2e85948e420 = function() {\n    try {\n        try {\n            const ret = globalThis.globalThis;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_self_73c7a601ff857345 = function() {\n    try {\n        try {\n            const ret = self.self;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_window_ca735e04cb2b0566 = function() {\n    try {\n        try {\n            const ret = window.window;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_global_99312a595fd2e761 = function() {\n    try {\n        try {\n            const ret = global.global;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    try {\n        const ret = getObject(arg0) === undefined;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    try {\n        const ret = getObject(arg0);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    try {\n        throw new Error(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ \"./pkg/index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);