"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAction\": () => (/* binding */ createAction),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"defaultInitialState\": () => (/* binding */ defaultInitialState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Child */ \"./src/components/Child.tsx\");\n\n\n\nconst defaultInitialState = {\n    text: \"data\",\n    childText: \"child component text\"\n};\nconst defaultReducer = (state, action)=>{\n    switch(action.type){\n        case \"button pressed\":\n            return {\n                ...state,\n                childText: \"child button clicked\"\n            };\n        default:\n            return {\n                ...state,\n                text: action.payload\n            };\n    }\n};\nconst createAction = (payload)=>({\n        type: \"text typed\",\n        payload: payload\n    });\nfunction App({ initialState =defaultInitialState , reducer =defaultReducer  }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const selectAll = (e)=>{\n        e.target.select();\n    };\n    const updateState = (event)=>{\n        dispatch(createAction(event.target.value));\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Input:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: state.text,\n                        onFocus: selectAll,\n                        onChange: updateState\n                    }, void 0, false, {\n                        fileName: \"/Users/xingzhou/playground/focused-ui-with-react-reducers/src/components/App.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xingzhou/playground/focused-ui-with-react-reducers/src/components/App.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Child__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                state: {\n                    text: state.childText\n                },\n                dispatch: dispatch\n            }, void 0, false, {\n                fileName: \"/Users/xingzhou/playground/focused-ui-with-react-reducers/src/components/App.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xingzhou/playground/focused-ui-with-react-reducers/src/components/App.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNyQjtBQU9yQixNQUFNRyxzQkFBZ0M7SUFBQ0MsTUFBTTtJQUFRQyxXQUFXO0FBQXNCLEVBQUU7QUFDL0YsTUFBTUMsaUJBQTRDLENBQUNDLE9BQU9DLFNBQVc7SUFDakUsT0FBUUEsT0FBT0MsSUFBSTtRQUNmLEtBQUs7WUFDRCxPQUFPO2dCQUFDLEdBQUdGLEtBQUs7Z0JBQUVGLFdBQVc7WUFBc0I7UUFDdkQ7WUFDSSxPQUFPO2dCQUFDLEdBQUdFLEtBQUs7Z0JBQUVILE1BQU1JLE9BQU9FLE9BQU87WUFBQTtJQUM5QztBQUNKO0FBTU8sTUFBTUMsZUFBZSxDQUFDRCxVQUE2QjtRQUN0REQsTUFBTTtRQUNOQyxTQUFTQTtJQUNiLEdBQUc7QUFFSCxTQUFTRSxJQUFJLEVBQUNDLGNBQWVWLG9CQUFtQixFQUFFVyxTQUFVUixlQUFjLEVBQUMsRUFBRTtJQUN6RSxNQUFNLENBQUNDLE9BQU9RLFNBQVMsR0FBR2QsaURBQVVBLENBQUNhLFNBQVNEO0lBRTlDLE1BQU1HLFlBQVksQ0FBQ0MsSUFBMEM7UUFDekRBLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBTTtJQUNuQjtJQUVBLE1BQU1DLGNBQWMsQ0FBQ0MsUUFBK0M7UUFDaEVOLFNBQVNKLGFBQWFVLE1BQU1ILE1BQU0sQ0FBQ0ksS0FBSztRQUN4Q0QsTUFBTUUsY0FBYztJQUN4QjtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOztvQkFBTTtrQ0FDSCw4REFBQ0M7d0JBQU1KLE9BQU9mLE1BQU1ILElBQUk7d0JBQUV1QixTQUFTWDt3QkFBV1ksVUFBVVI7Ozs7Ozs7Ozs7OzswQkFFNUQsOERBQUNsQiw4Q0FBS0E7Z0JBQUNLLE9BQU87b0JBQUNILE1BQU1HLE1BQU1GLFNBQVM7Z0JBQUE7Z0JBQUdVLFVBQVVBOzs7Ozs7Ozs7Ozs7QUFHN0Q7QUFFQSxpRUFBZUgsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtvdXQtdHJhY2tlci8uL3NyYy9jb21wb25lbnRzL0FwcC50c3g/ZTVhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtSZWR1Y2VyLCB1c2VSZWR1Y2VyfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGlsZCBmcm9tIFwiLi9DaGlsZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgY2hpbGRUZXh0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJbml0aWFsU3RhdGU6IEFwcFN0YXRlID0ge3RleHQ6ICdkYXRhJywgY2hpbGRUZXh0OiAnY2hpbGQgY29tcG9uZW50IHRleHQnfTtcbmNvbnN0IGRlZmF1bHRSZWR1Y2VyOiBSZWR1Y2VyPEFwcFN0YXRlLCBBY3Rpb24+ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2J1dHRvbiBwcmVzc2VkJzpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNoaWxkVGV4dDogJ2NoaWxkIGJ1dHRvbiBjbGlja2VkJ31cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHRleHQ6IGFjdGlvbi5wYXlsb2FkfTtcbiAgICB9XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbiA9XG4gICAgfCB7IHR5cGU6ICd0ZXh0IHR5cGVkJywgcGF5bG9hZDogc3RyaW5nIH1cbiAgICB8IHsgdHlwZTogJ2J1dHRvbiBwcmVzc2VkJ31cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjdGlvbiA9IChwYXlsb2FkOiBzdHJpbmcpOiBBY3Rpb24gPT4gKHtcbiAgICB0eXBlOiAndGV4dCB0eXBlZCcsXG4gICAgcGF5bG9hZDogcGF5bG9hZFxufSk7XG5cbmZ1bmN0aW9uIEFwcCh7aW5pdGlhbFN0YXRlID0gZGVmYXVsdEluaXRpYWxTdGF0ZSwgcmVkdWNlciA9IGRlZmF1bHRSZWR1Y2VyfSkge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gICAgY29uc3Qgc2VsZWN0QWxsID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgZS50YXJnZXQuc2VsZWN0KCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBkaXNwYXRjaChjcmVhdGVBY3Rpb24oZXZlbnQudGFyZ2V0LnZhbHVlKSlcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD5JbnB1dDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3N0YXRlLnRleHR9IG9uRm9jdXM9e3NlbGVjdEFsbH0gb25DaGFuZ2U9e3VwZGF0ZVN0YXRlfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPENoaWxkIHN0YXRlPXt7dGV4dDogc3RhdGUuY2hpbGRUZXh0fX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZHVjZXIiLCJDaGlsZCIsImRlZmF1bHRJbml0aWFsU3RhdGUiLCJ0ZXh0IiwiY2hpbGRUZXh0IiwiZGVmYXVsdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiY3JlYXRlQWN0aW9uIiwiQXBwIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImRpc3BhdGNoIiwic2VsZWN0QWxsIiwiZSIsInRhcmdldCIsInNlbGVjdCIsInVwZGF0ZVN0YXRlIiwiZXZlbnQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsIm9uRm9jdXMiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/App.tsx\n");

/***/ }),

/***/ "./src/components/Child.tsx":
/*!**********************************!*\
  !*** ./src/components/Child.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Child({ state , dispatch  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: state.text\n            }, void 0, false, {\n                fileName: \"/Users/xingzhou/playground/focused-ui-with-react-reducers/src/components/Child.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>dispatch({\n                        type: \"button pressed\"\n                    }),\n                children: \"button\"\n            }, void 0, false, {\n                fileName: \"/Users/xingzhou/playground/focused-ui-with-react-reducers/src/components/Child.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xingzhou/playground/focused-ui-with-react-reducers/src/components/Child.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Child);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGlsZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVlBLFNBQVNBLE1BQU0sRUFBQ0MsTUFBSyxFQUFFQyxTQUFRLEVBQWEsRUFBRTtJQUMxQyxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBR0gsTUFBTUksSUFBSTs7Ozs7OzBCQUNkLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNTCxTQUFTO3dCQUFDTSxNQUFNO29CQUFnQjswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3ZFO0FBRUEsaUVBQWVSLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrb3V0LXRyYWNrZXIvLi9zcmMvY29tcG9uZW50cy9DaGlsZC50c3g/NmJjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Rpc3BhdGNofSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QWN0aW9ufSBmcm9tIFwiQC9jb21wb25lbnRzL0FwcFwiO1xuXG50eXBlIENoaWxkU3RhdGUgPSB7XG4gICAgdGV4dDogc3RyaW5nXG59XG5cbnR5cGUgQ2hpbGRQcm9wcyA9IHtcbiAgICBzdGF0ZTogQ2hpbGRTdGF0ZSxcbiAgICBkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9uPlxufVxuXG5mdW5jdGlvbiBDaGlsZCh7c3RhdGUsIGRpc3BhdGNofTogQ2hpbGRQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57c3RhdGUudGV4dH08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHt0eXBlOiAnYnV0dG9uIHByZXNzZWQnfSl9PmJ1dHRvbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoaWxkO1xuIl0sIm5hbWVzIjpbIkNoaWxkIiwic3RhdGUiLCJkaXNwYXRjaCIsImRpdiIsInAiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Child.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/App */ \"./src/components/App.tsx\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/xingzhou/playground/focused-ui-with-react-reducers/src/pages/index.tsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBRXBCLFNBQVNDLE9BQU87SUFDM0IscUJBQ0ksOERBQUNELHVEQUFHQTs7Ozs7QUFFWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29ya291dC10cmFja2VyLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIkAvY29tcG9uZW50cy9BcHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwLz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQXBwIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();