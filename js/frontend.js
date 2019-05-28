/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\wamp\\\\www\\\\caspian\\\\build\\\\wp-content\\\\plugins\\\\gravityformsgooglecaptcha\\\\node_modules\\\\axios\\\\index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/axios/index.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"); //var key = gfGoogleCaptchaScript_strings;\n\n\nvar key = '6LdeS6UUAAAAAPIm-3Ur5m2p8QYRQ0229JuGm_ll';\ngrecaptcha.ready(function () {\n  for (var i = 0; i < document.forms.length; ++i) {\n    var form = document.forms[i];\n    var holder = form.querySelector('.gf-recaptcha-div');\n    if (null === holder) continue;\n    holder.innerHTML = '';\n\n    (function (frm) {\n      // This sets everything up for the form call\n      var holderId = grecaptcha.render(holder, {\n        sitekey: key,\n        size: 'invisible',\n        badge: 'inline'\n      }); // Here the form is submitted, using everything from, above\n\n      frm.onsubmit = function (evt) {\n        evt.preventDefault(); // Execute and get token\n\n        grecaptcha.execute(holderId, {\n          action: 'homepage'\n        }).then(function (token) {\n          // Take token and pass to server\n          tellServer(token);\n        });\n      };\n    })(form);\n  }\n});\n\nvar tellServer = function tellServer(token) {\n  console.log(token);\n  console.log(gfGoogleCaptchaScriptFrontend_obj.ajaxurl);\n  axios.post(gfGoogleCaptchaScriptFrontend_obj.ajaxurl, {\n    data: {\n      action: 'example_ajax_request',\n      name: 'My First AJAX Request'\n    }\n  }).then(function (response) {\n    // handle success\n    console.log(response);\n  })[\"catch\"](function (error) {\n    // handle error\n    console.log(error);\n  })[\"finally\"](function () {// always executed\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImtleSIsImdyZWNhcHRjaGEiLCJyZWFkeSIsImkiLCJkb2N1bWVudCIsImZvcm1zIiwibGVuZ3RoIiwiZm9ybSIsImhvbGRlciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJmcm0iLCJob2xkZXJJZCIsInJlbmRlciIsInNpdGVrZXkiLCJzaXplIiwiYmFkZ2UiLCJvbnN1Ym1pdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiZXhlY3V0ZSIsImFjdGlvbiIsInRoZW4iLCJ0b2tlbiIsInRlbGxTZXJ2ZXIiLCJjb25zb2xlIiwibG9nIiwiZ2ZHb29nbGVDYXB0Y2hhU2NyaXB0RnJvbnRlbmRfb2JqIiwiYWpheHVybCIsInBvc3QiLCJkYXRhIiwibmFtZSIsInJlc3BvbnNlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQixDLENBRUE7OztBQUNBLElBQU1DLEdBQUcsR0FBRywwQ0FBWjtBQUVBQyxVQUFVLENBQUNDLEtBQVgsQ0FBaUIsWUFBVztBQUMzQixPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxNQUFuQyxFQUEyQyxFQUFFSCxDQUE3QyxFQUFnRDtBQUMvQyxRQUFJSSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsS0FBVCxDQUFlRixDQUFmLENBQVg7QUFFQSxRQUFJSyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsYUFBTCxDQUFtQixtQkFBbkIsQ0FBYjtBQUVBLFFBQUksU0FBU0QsTUFBYixFQUFxQjtBQUNyQkEsVUFBTSxDQUFDRSxTQUFQLEdBQW1CLEVBQW5COztBQUVBLEtBQUMsVUFBU0MsR0FBVCxFQUFjO0FBQ2Q7QUFDQSxVQUFJQyxRQUFRLEdBQUdYLFVBQVUsQ0FBQ1ksTUFBWCxDQUFrQkwsTUFBbEIsRUFBMEI7QUFDeENNLGVBQU8sRUFBRWQsR0FEK0I7QUFFeENlLFlBQUksRUFBRSxXQUZrQztBQUd4Q0MsYUFBSyxFQUFFO0FBSGlDLE9BQTFCLENBQWYsQ0FGYyxDQVFkOztBQUNBTCxTQUFHLENBQUNNLFFBQUosR0FBZSxVQUFBQyxHQUFHLEVBQUk7QUFDckJBLFdBQUcsQ0FBQ0MsY0FBSixHQURxQixDQUVyQjs7QUFDQWxCLGtCQUFVLENBQ1JtQixPQURGLENBQ1VSLFFBRFYsRUFDb0I7QUFBRVMsZ0JBQU0sRUFBRTtBQUFWLFNBRHBCLEVBRUVDLElBRkYsQ0FFTyxVQUFTQyxLQUFULEVBQWdCO0FBQ3JCO0FBQ0FDLG9CQUFVLENBQUNELEtBQUQsQ0FBVjtBQUNBLFNBTEY7QUFNQSxPQVREO0FBVUEsS0FuQkQsRUFtQkdoQixJQW5CSDtBQW9CQTtBQUNELENBOUJEOztBQWdDQSxJQUFNaUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUQsS0FBSyxFQUFJO0FBQzNCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUNBQWlDLENBQUNDLE9BQTlDO0FBRUE5QixPQUFLLENBQ0grQixJQURGLENBQ09GLGlDQUFpQyxDQUFDQyxPQUR6QyxFQUNrRDtBQUNoREUsUUFBSSxFQUFFO0FBQ0xULFlBQU0sRUFBRSxzQkFESDtBQUVMVSxVQUFJLEVBQUU7QUFGRDtBQUQwQyxHQURsRCxFQU9FVCxJQVBGLENBT08sVUFBU1UsUUFBVCxFQUFtQjtBQUN4QjtBQUNBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQUNBLEdBVkYsV0FXUSxVQUFTQyxLQUFULEVBQWdCO0FBQ3RCO0FBQ0FSLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTyxLQUFaO0FBQ0EsR0FkRixhQWVVLFlBQVcsQ0FDbkI7QUFDQSxHQWpCRjtBQWtCQSxDQXRCRCIsImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG4vL3ZhciBrZXkgPSBnZkdvb2dsZUNhcHRjaGFTY3JpcHRfc3RyaW5ncztcbmNvbnN0IGtleSA9ICc2TGRlUzZVVUFBQUFBUEltLTNVcjVtMnA4UVlSUTAyMjlKdUdtX2xsJztcblxuZ3JlY2FwdGNoYS5yZWFkeShmdW5jdGlvbigpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5mb3Jtcy5sZW5ndGg7ICsraSkge1xuXHRcdHZhciBmb3JtID0gZG9jdW1lbnQuZm9ybXNbaV07XG5cblx0XHR2YXIgaG9sZGVyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZ2YtcmVjYXB0Y2hhLWRpdicpO1xuXG5cdFx0aWYgKG51bGwgPT09IGhvbGRlcikgY29udGludWU7XG5cdFx0aG9sZGVyLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0KGZ1bmN0aW9uKGZybSkge1xuXHRcdFx0Ly8gVGhpcyBzZXRzIGV2ZXJ5dGhpbmcgdXAgZm9yIHRoZSBmb3JtIGNhbGxcblx0XHRcdHZhciBob2xkZXJJZCA9IGdyZWNhcHRjaGEucmVuZGVyKGhvbGRlciwge1xuXHRcdFx0XHRzaXRla2V5OiBrZXksXG5cdFx0XHRcdHNpemU6ICdpbnZpc2libGUnLFxuXHRcdFx0XHRiYWRnZTogJ2lubGluZScsXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gSGVyZSB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQsIHVzaW5nIGV2ZXJ5dGhpbmcgZnJvbSwgYWJvdmVcblx0XHRcdGZybS5vbnN1Ym1pdCA9IGV2dCA9PiB7XG5cdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQvLyBFeGVjdXRlIGFuZCBnZXQgdG9rZW5cblx0XHRcdFx0Z3JlY2FwdGNoYVxuXHRcdFx0XHRcdC5leGVjdXRlKGhvbGRlcklkLCB7IGFjdGlvbjogJ2hvbWVwYWdlJyB9KVxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKHRva2VuKSB7XG5cdFx0XHRcdFx0XHQvLyBUYWtlIHRva2VuIGFuZCBwYXNzIHRvIHNlcnZlclxuXHRcdFx0XHRcdFx0dGVsbFNlcnZlcih0b2tlbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdH0pKGZvcm0pO1xuXHR9XG59KTtcblxuY29uc3QgdGVsbFNlcnZlciA9IHRva2VuID0+IHtcblx0Y29uc29sZS5sb2codG9rZW4pO1xuXHRjb25zb2xlLmxvZyhnZkdvb2dsZUNhcHRjaGFTY3JpcHRGcm9udGVuZF9vYmouYWpheHVybCk7XG5cblx0YXhpb3Ncblx0XHQucG9zdChnZkdvb2dsZUNhcHRjaGFTY3JpcHRGcm9udGVuZF9vYmouYWpheHVybCwge1xuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRhY3Rpb246ICdleGFtcGxlX2FqYXhfcmVxdWVzdCcsXG5cdFx0XHRcdG5hbWU6ICdNeSBGaXJzdCBBSkFYIFJlcXVlc3QnLFxuXHRcdFx0fSxcblx0XHR9KVxuXHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHQvLyBoYW5kbGUgc3VjY2Vzc1xuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHQvLyBoYW5kbGUgZXJyb3Jcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9KVxuXHRcdC5maW5hbGx5KGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gYWx3YXlzIGV4ZWN1dGVkXG5cdFx0fSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ })

/******/ });