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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmayerlyzapaatrodriguez%2FDocuments%2FOlas-joyeria%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmayerlyzapaatrodriguez%2FDocuments%2FOlas-joyeria&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmayerlyzapaatrodriguez%2FDocuments%2FOlas-joyeria%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmayerlyzapaatrodriguez%2FDocuments%2FOlas-joyeria&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mayerlyzapaatrodriguez_Documents_Olas_joyeria_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/mayerlyzapaatrodriguez/Documents/Olas-joyeria/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_mayerlyzapaatrodriguez_Documents_Olas_joyeria_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1heWVybHl6YXBhYXRyb2RyaWd1ZXolMkZEb2N1bWVudHMlMkZPbGFzLWpveWVyaWElMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbWF5ZXJseXphcGFhdHJvZHJpZ3VleiUyRkRvY3VtZW50cyUyRk9sYXMtam95ZXJpYSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEM7QUFDekg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXRlX3JlYWN0X3NoYWRjbl90cy8/NTMwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWF5ZXJseXphcGFhdHJvZHJpZ3Vlei9Eb2N1bWVudHMvT2xhcy1qb3llcmlhL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbWF5ZXJseXphcGFhdHJvZHJpZ3Vlei9Eb2N1bWVudHMvT2xhcy1qb3llcmlhL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmayerlyzapaatrodriguez%2FDocuments%2FOlas-joyeria%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmayerlyzapaatrodriguez%2FDocuments%2FOlas-joyeria&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"(rsc)/./node_modules/@next-auth/mongodb-adapter/dist/index.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nasync function getUser(client, email) {\n    const db = client.db(\"Ecommerce\");\n    const usersCollection = db.collection(\"users\");\n    const emailNormalized = email.toLowerCase().trim();\n    console.log(\"Buscando usuario con email:\", emailNormalized);\n    const user = await usersCollection.findOne({\n        email: emailNormalized\n    });\n    console.log(\"Usuario encontrado:\", user ? \"S\\xed\" : \"No\");\n    return user;\n}\nconst authOptions = {\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    console.error(\"Credenciales incompletas\");\n                    return null;\n                }\n                try {\n                    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n                    const emailNormalized = credentials.email.toLowerCase().trim();\n                    console.log(\"Intentando autenticar usuario:\", emailNormalized);\n                    const user = await getUser(client, emailNormalized);\n                    if (!user) {\n                        console.error(\"Usuario no encontrado:\", emailNormalized);\n                        return null;\n                    }\n                    console.log(\"Usuario encontrado, validando contrase\\xf1a\");\n                    if (user.password) {\n                        try {\n                            // Verificar si la contraseña está hasheada (comienza con $2a$ o $2b$ de bcrypt)\n                            if (typeof user.password === \"string\" && user.password.startsWith(\"$2\")) {\n                                console.log(\"Contrase\\xf1a hasheada detectada\");\n                                const isValid = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compare(credentials.password, user.password);\n                                if (isValid) {\n                                    console.log(\"Contrase\\xf1a v\\xe1lida (hasheada)\");\n                                    return {\n                                        id: user._id.toString(),\n                                        name: user.name || user.email,\n                                        email: user.email,\n                                        image: user.image,\n                                        role: user.role || \"user\"\n                                    };\n                                } else {\n                                    console.error(\"Contrase\\xf1a inv\\xe1lida (hasheada)\");\n                                }\n                            } else {\n                                // Contraseña sin hashear (antigua)\n                                console.log(\"Contrase\\xf1a sin hashear detectada\");\n                                if (credentials.password === user.password) {\n                                    console.log(\"Contrase\\xf1a v\\xe1lida (sin hashear), hasheando...\");\n                                    const usersCollection = client.db(\"Ecommerce\").collection(\"users\");\n                                    const newHash = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().hash(credentials.password, 10);\n                                    await usersCollection.updateOne({\n                                        _id: user._id\n                                    }, {\n                                        $set: {\n                                            password: newHash\n                                        }\n                                    });\n                                    return {\n                                        id: user._id.toString(),\n                                        name: user.name || user.email,\n                                        email: user.email,\n                                        image: user.image,\n                                        role: user.role || \"user\"\n                                    };\n                                } else {\n                                    console.error(\"Contrase\\xf1a inv\\xe1lida (sin hashear)\");\n                                }\n                            }\n                        } catch (err) {\n                            console.error(\"Error verifying password:\", err);\n                            return null;\n                        }\n                    } else {\n                        console.error(\"Usuario no tiene contrase\\xf1a\");\n                        return null;\n                    }\n                    return null;\n                } catch (error) {\n                    console.error(\"Authorization error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.email = user.email;\n                token.role = user.role || \"user\";\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        },\n        async redirect ({ url, baseUrl, token }) {\n            // Si el usuario es admin, redirige al dashboard\n            if (token?.role === \"admin\") {\n                return `${baseUrl}/admin`;\n            }\n            // Para otros usuarios, redirige al home\n            return `${baseUrl}/`;\n        }\n    },\n    pages: {\n        signIn: \"/auth\",\n        error: \"/auth\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNpQztBQUNWO0FBQ0k7QUFDbEI7QUFDZDtBQUc1QixlQUFlTSxRQUFRQyxNQUFtQixFQUFFQyxLQUFhO0lBQ3ZELE1BQU1DLEtBQUtGLE9BQU9FLEVBQUUsQ0FBQztJQUNyQixNQUFNQyxrQkFBa0JELEdBQUdFLFVBQVUsQ0FBQztJQUN0QyxNQUFNQyxrQkFBa0JKLE1BQU1LLFdBQVcsR0FBR0MsSUFBSTtJQUNoREMsUUFBUUMsR0FBRyxDQUFDLCtCQUErQko7SUFDM0MsTUFBTUssT0FBTyxNQUFNUCxnQkFBZ0JRLE9BQU8sQ0FBQztRQUFFVixPQUFPSTtJQUFnQjtJQUNwRUcsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkMsT0FBTyxVQUFPO0lBQ2pELE9BQU9BO0FBQ1Q7QUFFQSxNQUFNRSxjQUFjO0lBQ2xCQyxTQUFTakIsMEVBQWNBLENBQUNDLG9EQUFhQTtJQUNyQ2lCLFdBQVc7UUFDVG5CLHNFQUFjQSxDQUFDO1lBQ2JvQixVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQixJQUFJO1lBQzFDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQixJQUFJO1FBQ3BEO1FBQ0ExQiwyRUFBbUJBLENBQUM7WUFDbEIyQixNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hyQixPQUFPO29CQUFFc0IsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVSixXQUFnQjtnQkFDOUIsSUFBSSxDQUFDQSxhQUFhckIsU0FBUyxDQUFDcUIsYUFBYUcsVUFBVTtvQkFDakRqQixRQUFRbUIsS0FBSyxDQUFDO29CQUNkLE9BQU87Z0JBQ1Q7Z0JBRUEsSUFBSTtvQkFDRixNQUFNM0IsU0FBUyxNQUFNSCxvREFBYUE7b0JBQ2xDLE1BQU1R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QitCLFFBQVEvQixJQUFJLENBQUNxQixFQUFFLEdBQUdjLE1BQU1kLEVBQUU7Z0JBQzFCVSxRQUFRL0IsSUFBSSxDQUFDeUIsSUFBSSxHQUFHVSxNQUFNVixJQUFJO1lBQ2hDO1lBQ0EsT0FBT007UUFDVDtRQUNBLE1BQU1LLFVBQVMsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUVILEtBQUssRUFBTztZQUN6QyxnREFBZ0Q7WUFDaEQsSUFBSUEsT0FBT1YsU0FBUyxTQUFTO2dCQUMzQixPQUFPLENBQUMsRUFBRWEsUUFBUSxNQUFNLENBQUM7WUFDM0I7WUFDQSx3Q0FBd0M7WUFDeEMsT0FBTyxDQUFDLEVBQUVBLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO1FBQ1J2QixPQUFPO0lBQ1Q7SUFDQXdCLFFBQVFuQyxRQUFRQyxHQUFHLENBQUNtQyxlQUFlO0FBQ3JDO0FBRUEsTUFBTUMsVUFBVTVELGdEQUFRQSxDQUFDbUI7QUFDa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXRlX3JlYWN0X3NoYWRjbl90cy8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCJAL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihjbGllbnQ6IE1vbmdvQ2xpZW50LCBlbWFpbDogc3RyaW5nKSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiRWNvbW1lcmNlXCIpO1xuICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIik7XG4gIGNvbnN0IGVtYWlsTm9ybWFsaXplZCA9IGVtYWlsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICBjb25zb2xlLmxvZyhcIkJ1c2NhbmRvIHVzdWFyaW8gY29uIGVtYWlsOlwiLCBlbWFpbE5vcm1hbGl6ZWQpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoeyBlbWFpbDogZW1haWxOb3JtYWxpemVkIH0pO1xuICBjb25zb2xlLmxvZyhcIlVzdWFyaW8gZW5jb250cmFkbzpcIiwgdXNlciA/IFwiU8OtXCIgOiBcIk5vXCIpO1xuICByZXR1cm4gdXNlcjtcbn1cblxuY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCBcIlwiLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCB8fCBcIlwiLFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYW55KSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ3JlZGVuY2lhbGVzIGluY29tcGxldGFzXCIpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgICAgICAgIGNvbnN0IGVtYWlsTm9ybWFsaXplZCA9IGNyZWRlbnRpYWxzLmVtYWlsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZW50YW5kbyBhdXRlbnRpY2FyIHVzdWFyaW86XCIsIGVtYWlsTm9ybWFsaXplZCk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIoY2xpZW50LCBlbWFpbE5vcm1hbGl6ZWQpO1xuXG4gICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVXN1YXJpbyBubyBlbmNvbnRyYWRvOlwiLCBlbWFpbE5vcm1hbGl6ZWQpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc3VhcmlvIGVuY29udHJhZG8sIHZhbGlkYW5kbyBjb250cmFzZcOxYVwiKTtcblxuICAgICAgICAgIGlmICh1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBWZXJpZmljYXIgc2kgbGEgY29udHJhc2XDsWEgZXN0w6EgaGFzaGVhZGEgKGNvbWllbnphIGNvbiAkMmEkIG8gJDJiJCBkZSBiY3J5cHQpXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdXNlci5wYXNzd29yZCA9PT0gXCJzdHJpbmdcIiAmJiB1c2VyLnBhc3N3b3JkLnN0YXJ0c1dpdGgoXCIkMlwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udHJhc2XDsWEgaGFzaGVhZGEgZGV0ZWN0YWRhXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udHJhc2XDsWEgdsOhbGlkYSAoaGFzaGVhZGEpXCIpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSB8fCB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSB8fCBcInVzZXJcIixcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb250cmFzZcOxYSBpbnbDoWxpZGEgKGhhc2hlYWRhKVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQ29udHJhc2XDsWEgc2luIGhhc2hlYXIgKGFudGlndWEpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb250cmFzZcOxYSBzaW4gaGFzaGVhciBkZXRlY3RhZGFcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNyZWRlbnRpYWxzLnBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRyYXNlw7FhIHbDoWxpZGEgKHNpbiBoYXNoZWFyKSwgaGFzaGVhbmRvLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKFwiRWNvbW1lcmNlXCIpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChjcmVkZW50aWFscy5wYXNzd29yZCwgMTApO1xuICAgICAgICAgICAgICAgICAgYXdhaXQgdXNlcnNDb2xsZWN0aW9uLnVwZGF0ZU9uZSh7IF9pZDogdXNlci5faWQgfSwgeyAkc2V0OiB7IHBhc3N3b3JkOiBuZXdIYXNoIH0gfSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogdXNlci5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lIHx8IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlIHx8IFwidXNlclwiLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvbnRyYXNlw7FhIGludsOhbGlkYSAoc2luIGhhc2hlYXIpXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB2ZXJpZnlpbmcgcGFzc3dvcmQ6XCIsIGVycik7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVXN1YXJpbyBubyB0aWVuZSBjb250cmFzZcOxYVwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRob3JpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIiBhcyBjb25zdCxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfTogYW55KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZSB8fCBcInVzZXJcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9OiBhbnkpIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGUgYXMgc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgYmFzZVVybCwgdG9rZW4gfTogYW55KSB7XG4gICAgICAvLyBTaSBlbCB1c3VhcmlvIGVzIGFkbWluLCByZWRpcmlnZSBhbCBkYXNoYm9hcmRcbiAgICAgIGlmICh0b2tlbj8ucm9sZSA9PT0gXCJhZG1pblwiKSB7XG4gICAgICAgIHJldHVybiBgJHtiYXNlVXJsfS9hZG1pbmA7XG4gICAgICB9XG4gICAgICAvLyBQYXJhIG90cm9zIHVzdWFyaW9zLCByZWRpcmlnZSBhbCBob21lXG4gICAgICByZXR1cm4gYCR7YmFzZVVybH0vYDtcbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvYXV0aFwiLFxuICAgIGVycm9yOiBcIi9hdXRoXCIsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImJjcnlwdCIsImdldFVzZXIiLCJjbGllbnQiLCJlbWFpbCIsImRiIiwidXNlcnNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImVtYWlsTm9ybWFsaXplZCIsInRvTG93ZXJDYXNlIiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmluZE9uZSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiZXJyb3IiLCJzdGFydHNXaXRoIiwiaXNWYWxpZCIsImNvbXBhcmUiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwiaW1hZ2UiLCJyb2xlIiwibmV3SGFzaCIsImhhc2giLCJ1cGRhdGVPbmUiLCIkc2V0IiwiZXJyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJwYWdlcyIsInNpZ25JbiIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// src/lib/mongodb.ts\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    let globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    if (!globalWithMongo._mongoClientPromise) {\n        throw new Error(\"Could not connect to MongoDB\");\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCO0FBQ2lCO0FBRXRDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUlRLGtCQUFrQkM7SUFJdEIsSUFBSSxDQUFDRCxnQkFBZ0JFLG1CQUFtQixFQUFFO1FBQ3hDSixTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsZ0JBQWdCRSxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUN0RDtJQUNBLElBQUksQ0FBQ0gsZ0JBQWdCRSxtQkFBbUIsRUFBRTtRQUN4QyxNQUFNLElBQUlQLE1BQU07SUFDbEI7SUFDQUksZ0JBQWdCQyxnQkFBZ0JFLG1CQUFtQjtBQUNyRCxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdml0ZV9yZWFjdF9zaGFkY25fdHMvLi9zcmMvbGliL21vbmdvZGIudHM/NTNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvbGliL21vbmdvZGIudHNcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgbGV0IGdsb2JhbFdpdGhNb25nbyA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgICBfbW9uZ29DbGllbnRQcm9taXNlPzogUHJvbWlzZTxNb25nb0NsaWVudD47XG4gIH07XG5cbiAgaWYgKCFnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBpZiAoIWdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNvbm5lY3QgdG8gTW9uZ29EQlwiKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWxXaXRoTW9uZ28iLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/@next-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fmayerlyzapaatrodriguez%2FDocuments%2FOlas-joyeria%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmayerlyzapaatrodriguez%2FDocuments%2FOlas-joyeria&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();