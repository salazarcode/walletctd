// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dHVtd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "071135d094538dff";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"int3P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
/**
 * Imports
 */ var _nanocurrency = require("@thelamer/nanocurrency");
var _bulmaToast = require("bulma-toast");
var _jarallax = require("jarallax");
var _bulmajs = require("@vizuaalog/bulmajs");
var _bulmajsDefault = parcelHelpers.interopDefault(_bulmajs);
const feather = require('feather-icons');
require('console-success');
/**
 * Wallet Functions
 */ async function getSeed(context) {
    const params = [
        'useNanoPrefix'
    ];
    const seed = await _nanocurrency.generateSeed();
    const wallet = seedData(context, {
        seed,
        params
    });
    return wallet;
}
async function seedData(context, data) {
    const privatekey = _nanocurrency.deriveSecretKey(data.seed, 0);
    const publickey = _nanocurrency.derivePublicKey(privatekey);
    const address = _nanocurrency.deriveAddress(publickey, data.params);
    const payload = {
        "seed": data.seed,
        "privatekey": privatekey,
        "publickey": publickey,
        "address": address
    };
    return payload;
}
/**
 * 
 */ /**
 * Passport
 */ require('dotenv').config();
const passport = {
    secret: "ed607a90e24ddb6a722babf5e21edc67",
    url: "https://passport.intraders.com.co"
};
/**
 * Passport Events
 */ const onregister = new CustomEvent("onregister", {
    "detail": "This fires when Passport registers an user."
});
const onauth = new CustomEvent("onauth", {
    "detail": "This fires when Passport authenticates an user."
});
/**
 * Jarallax
 */ _jarallax.jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});
/**
 * Register 
 */ const addUser = async (name, email, phone, password)=>{
    document.querySelector('#submit').classList.toggle('is-loading');
    const wallet = await getSeed();
    fetch(passport.url + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': passport.secret
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            password,
            seed: wallet.seed,
            address: wallet.address,
            privatekey: wallet.privatekey,
            publickey: wallet.publickey
        }),
        cache: 'no-cache'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const save = document.querySelector('#save');
        if (save) save.addEventListener('click', ()=>{
            saveWallet('Seed: ' + wallet.seed + '\nPrivate Key: ' + wallet.privatekey + '\nPublic Key: ' + wallet.publickey + '\nAddress: ' + wallet.address);
        });
        save.removeAttribute('disabled');
        console.log(save);
        setTimeout(()=>{
            _bulmaToast.toast({
                message: 'Te has registrado en Passport correctamente. 😊',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true
            });
            document.querySelector('#submit').classList.toggle('is-loading');
            document.dispatchEvent(onregister);
        }, 1000);
        window.passport = data;
    }).catch(function(err) {
        console.error(err);
    });
};
const authUser = (email, password)=>{
    document.querySelector('#auth').classList.toggle('is-loading');
    fetch(passport.url + '/users/auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': passport.secret
        },
        body: JSON.stringify({
            email,
            password
        }),
        cache: 'no-cache'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        if (data._id) setTimeout(()=>{
            _bulmaToast.toast({
                message: 'Has iniciado sesión correctamente. 🤘',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true
            });
            document.querySelector('#auth').classList.toggle('is-loading');
            document.dispatchEvent(onauth);
        }, 1000);
        else setTimeout(()=>{
            _bulmaToast.toast({
                message: data.message,
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true
            });
            document.querySelector('#auth').classList.toggle('is-loading');
        }, 1000);
        window.passport = data;
    }).catch(function(err) {
        console.error(err);
    });
};
const saveWallet = (data)=>{
    const filename = 'passport_wallet_autogenerated.txt';
    var blob = new Blob([
        data
    ], {
        type: 'text/csv'
    });
    if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveBlob(blob, filename);
    else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
};
const register = document.forms.register;
if (register) register.onsubmit = (e)=>{
    e.preventDefault();
    addUser(register.name.value, register.email.value, register.phone.value, register.password.value);
};
const authenticate = document.forms.authenticate;
if (authenticate) authenticate.onsubmit = (e)=>{
    e.preventDefault();
    authUser(authenticate.email.value, authenticate.password.value);
};
document.querySelector('.passport-trigger')?.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.passport-container').classList.toggle('is-hidden');
});
/**
 * Welcomming the advanced user.
 */ feather.replace();
console.success('Bienvenido a Intraders Passport. Autentícate con seguridad.🤘🤘');

},{"@thelamer/nanocurrency":"2YBHd","bulma-toast":"ikBUq","jarallax":"hJuz8","feather-icons":"dMAI4","console-success":"9t2Fz","@vizuaalog/bulmajs":"gpheC","dotenv":"fFdRb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2YBHd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Unit", ()=>oA
);
parcelHelpers.export(exports, "checkAddress", ()=>k
);
parcelHelpers.export(exports, "checkAmount", ()=>F
);
parcelHelpers.export(exports, "checkHash", ()=>D
);
parcelHelpers.export(exports, "checkIndex", ()=>y
);
parcelHelpers.export(exports, "checkKey", ()=>d
);
parcelHelpers.export(exports, "checkSeed", ()=>U
);
parcelHelpers.export(exports, "checkSignature", ()=>p
);
parcelHelpers.export(exports, "checkThreshold", ()=>G
);
parcelHelpers.export(exports, "checkWork", ()=>H
);
parcelHelpers.export(exports, "computeWork", ()=>b
);
parcelHelpers.export(exports, "convert", ()=>lA
);
parcelHelpers.export(exports, "createBlock", ()=>dA
);
parcelHelpers.export(exports, "deriveAddress", ()=>uA
);
parcelHelpers.export(exports, "derivePublicKey", ()=>wA
);
parcelHelpers.export(exports, "deriveSecretKey", ()=>EA
);
parcelHelpers.export(exports, "generateSeed", ()=>fA
);
parcelHelpers.export(exports, "hashBlock", ()=>UA
);
parcelHelpers.export(exports, "signBlock", ()=>GA
);
parcelHelpers.export(exports, "validateWork", ()=>v
);
parcelHelpers.export(exports, "verifyBlock", ()=>yA
);
/*!
* nanocurrency-js v2.5.1: A toolkit for the Nano cryptocurrency.
* Copyright (c) 2020 Marvin ROGER <dev at marvinroger dot fr>
* Licensed under GPL-3.0 (https://git.io/vAZsK)
*/ var _fs = require("fs");
var _fsDefault = parcelHelpers.interopDefault(_fs);
var _path = require("path");
var _pathDefault = parcelHelpers.interopDefault(_path);
var _bignumberJs = require("bignumber.js");
var _bignumberJsDefault = parcelHelpers.interopDefault(_bignumberJs);
var _blakejs = require("blakejs");
var _blakejsDefault = parcelHelpers.interopDefault(_blakejs);
var __dirname = "node_modules/@thelamer/nanocurrency/dist";
var process = require("process");
var Buffer = require("buffer").Buffer;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function t(A, I) {
    var i, g, C, r, o = {
        label: 0,
        sent: function() {
            if (1 & C[0]) throw C[1];
            return C[1];
        },
        trys: [],
        ops: []
    };
    function n(r) {
        return function(n) {
            return (function(r) {
                if (i) throw new TypeError("Generator is already executing.");
                for(; o;)try {
                    if (i = 1, g && (C = 2 & r[0] ? g.return : r[0] ? g.throw || ((C = g.return) && C.call(g), 0) : g.next) && !(C = C.call(g, r[1])).done) return C;
                    switch(g = 0, C && (r = [
                        2 & r[0],
                        C.value
                    ]), r[0]){
                        case 0:
                        case 1:
                            C = r;
                            break;
                        case 4:
                            return o.label++, {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            o.label++, g = r[1], r = [
                                0
                            ];
                            continue;
                        case 7:
                            r = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(C = o.trys, (C = C.length > 0 && C[C.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                o = 0;
                                continue;
                            }
                            if (3 === r[0] && (!C || r[1] > C[0] && r[1] < C[3])) {
                                o.label = r[1];
                                break;
                            }
                            if (6 === r[0] && o.label < C[1]) {
                                o.label = C[1], C = r;
                                break;
                            }
                            if (C && o.label < C[2]) {
                                o.label = C[2], o.ops.push(r);
                                break;
                            }
                            C[2] && o.ops.pop(), o.trys.pop();
                            continue;
                    }
                    r = I.call(A, o);
                } catch (A1) {
                    r = [
                        6,
                        A1
                    ], g = 0;
                } finally{
                    i = C = 0;
                }
                if (5 & r[0]) throw r[1];
                return {
                    value: r[0] ? r[1] : void 0,
                    done: !0
                };
            })([
                r,
                n
            ]);
        };
    }
    return r = {
        next: n(0),
        throw: n(1),
        return: n(2)
    }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this;
    }), r;
}
var e, h = function(A, I) {
    return A(I = {
        exports: {
        }
    }, I.exports), I.exports;
}(function(i2, g) {
    var C, r = (C = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function(i) {
        var g;
        i = i || {
        }, g || (g = void 0 !== i ? i : {
        });
        var r, o = {
        };
        for(r in g)g.hasOwnProperty(r) && (o[r] = g[r]);
        g.arguments = [], g.thisProgram = "./this.program", g.quit = function(A, I) {
            throw I;
        }, g.preRun = [], g.postRun = [];
        var n = !1, t = !1, e = !1, h = !1;
        n = "object" == typeof window, t = "function" == typeof importScripts, e = "object" == typeof process && !n && !t, h = !n && !e && !t;
        var a, Q, B = "";
        e ? (B = __dirname + "/", g.read = function(i, g) {
            var C = V(i);
            return C || (a || (a = _fsDefault.default), Q || (Q = _pathDefault.default), i = Q.normalize(i), C = a.readFileSync(i)), g ? C : C.toString();
        }, g.readBinary = function(A) {
            return (A = g.read(A, !0)).buffer || (A = new Uint8Array(A)), c(A.buffer), A;
        }, 1 < process.argv.length && (g.thisProgram = process.argv[1].replace(/\\/g, "/")), g.arguments = process.argv.slice(2), process.on("uncaughtException", function(A) {
            if (!(A instanceof z)) throw A;
        }), process.on("unhandledRejection", $), g.quit = function(A) {
            process.exit(A);
        }, g.inspect = function() {
            return "[Emscripten Module object]";
        }) : h ? ("undefined" != typeof read && (g.read = function(A) {
            var I = V(A);
            return I ? j(I) : read(A);
        }), g.readBinary = function(A) {
            var I;
            return (I = V(A)) ? I : "function" == typeof readbuffer ? new Uint8Array(readbuffer(A)) : (c("object" == typeof (I = read(A, "binary"))), I);
        }, "undefined" != typeof scriptArgs ? g.arguments = scriptArgs : void 0 !== arguments && (g.arguments = arguments), "function" == typeof quit && (g.quit = function(A) {
            quit(A);
        })) : (n || t) && (t ? B = self.location.href : document.currentScript && (B = document.currentScript.src), C && (B = C), B = 0 !== B.indexOf("blob:") ? B.substr(0, B.lastIndexOf("/") + 1) : "", g.read = function(A) {
            try {
                var I = new XMLHttpRequest;
                return I.open("GET", A, !1), I.send(null), I.responseText;
            } catch (I1) {
                if (A = V(A)) return j(A);
                throw I1;
            }
        }, t && (g.readBinary = function(A) {
            try {
                var I = new XMLHttpRequest;
                return I.open("GET", A, !1), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response);
            } catch (I1) {
                if (A = V(A)) return A;
                throw I1;
            }
        }), g.readAsync = function(A, I, i) {
            var g = new XMLHttpRequest;
            g.open("GET", A, !0), g.responseType = "arraybuffer", g.onload = function() {
                if (200 == g.status || 0 == g.status && g.response) I(g.response);
                else {
                    var C = V(A);
                    C ? I(C.buffer) : i();
                }
            }, g.onerror = i, g.send(null);
        }, g.setWindowTitle = function(A) {
            document.title = A;
        });
        var f = g.print || ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null), E = g.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && console.warn.bind(console) || f);
        for(r in o)o.hasOwnProperty(r) && (g[r] = o[r]);
        o = void 0;
        var w = {
            "f64-rem": function(A, I) {
                return A % I;
            },
            debugger: function() {
            }
        };
        "object" != typeof WebAssembly && E("no native wasm support detected");
        var u, s = !1;
        function c(A, I) {
            A || $("Assertion failed: " + I);
        }
        function l(A) {
            var I = g["_" + A];
            return c(I, "Cannot call unknown function " + A + ", make sure it is exported"), I;
        }
        function S(A, I, i, g) {
            var C = {
                string: function(A) {
                    var I = 0;
                    if (null != A && 0 !== A) {
                        var i = 1 + (A.length << 2), g = I = q(i), C = y;
                        if (0 < i) {
                            i = g + i - 1;
                            for(var r = 0; r < A.length; ++r){
                                var o = A.charCodeAt(r);
                                if (55296 <= o && 57343 >= o && (o = 65536 + ((1023 & o) << 10) | 1023 & A.charCodeAt(++r)), 127 >= o) {
                                    if (g >= i) break;
                                    C[g++] = o;
                                } else {
                                    if (2047 >= o) {
                                        if (g + 1 >= i) break;
                                        C[g++] = 192 | o >> 6;
                                    } else {
                                        if (65535 >= o) {
                                            if (g + 2 >= i) break;
                                            C[g++] = 224 | o >> 12;
                                        } else {
                                            if (g + 3 >= i) break;
                                            C[g++] = 240 | o >> 18, C[g++] = 128 | o >> 12 & 63;
                                        }
                                        C[g++] = 128 | o >> 6 & 63;
                                    }
                                    C[g++] = 128 | 63 & o;
                                }
                            }
                            C[g] = 0;
                        }
                    }
                    return I;
                },
                array: function(A) {
                    var I = q(A.length);
                    return G.set(A, I), I;
                }
            }, r = l(A), o = [];
            if (A = 0, g) for(var n = 0; n < g.length; n++){
                var t = C[i[n]];
                t ? (0 === A && (A = W()), o[n] = t(g[n])) : o[n] = g[n];
            }
            return i = (function(A) {
                if ("string" === I) {
                    if (A) {
                        for(var i = y, g = A + void 0, C = A; i[C] && !(C >= g);)++C;
                        if (16 < C - A && i.subarray && F) A = F.decode(i.subarray(A, C));
                        else {
                            for(g = ""; A < C;){
                                var r = i[A++];
                                if (128 & r) {
                                    var o = 63 & i[A++];
                                    if (192 == (224 & r)) g += String.fromCharCode((31 & r) << 6 | o);
                                    else {
                                        var n = 63 & i[A++];
                                        65536 > (r = 224 == (240 & r) ? (15 & r) << 12 | o << 6 | n : (7 & r) << 18 | o << 12 | n << 6 | 63 & i[A++]) ? g += String.fromCharCode(r) : (r -= 65536, g += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r));
                                    }
                                } else g += String.fromCharCode(r);
                            }
                            A = g;
                        }
                    } else A = "";
                } else A = "boolean" === I ? !!A : A;
                return A;
            })(i = r.apply(null, o)), 0 !== A && T(A), i;
        }
        var F = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
        var U, G, y, D, d = g.TOTAL_MEMORY || 16777216;
        function k(A) {
            for(; 0 < A.length;){
                var I = A.shift();
                if ("function" == typeof I) I();
                else {
                    var i = I.h;
                    "number" == typeof i ? void 0 === I.g ? g.dynCall_v(i) : g.dynCall_vi(i, I.g) : i(void 0 === I.g ? null : I.g);
                }
            }
        }
        5242880 > d && E("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + d + "! (TOTAL_STACK=5242880)"), g.buffer ? U = g.buffer : (U = "object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory ? (u = new WebAssembly.Memory({
            initial: d / 65536,
            maximum: d / 65536
        })).buffer : new ArrayBuffer(d), g.buffer = U), g.HEAP8 = G = new Int8Array(U), g.HEAP16 = new Int16Array(U), g.HEAP32 = D = new Int32Array(U), g.HEAPU8 = y = new Uint8Array(U), g.HEAPU16 = new Uint16Array(U), g.HEAPU32 = new Uint32Array(U), g.HEAPF32 = new Float32Array(U), g.HEAPF64 = new Float64Array(U), D[724] = 5246032;
        var H = [], p = [], v = [], Y = [], M = !1;
        function b() {
            var A = g.preRun.shift();
            H.unshift(A);
        }
        var K = 0, x = null;
        g.preloadedImages = {
        }, g.preloadedAudios = {
        };
        var m = "data:application/octet-stream;base64,";
        function N(A) {
            return String.prototype.startsWith ? A.startsWith(m) : 0 === A.indexOf(m);
        }
        var L = "data:application/octet-stream;base64,AGFzbQEAAAABJwdgA39/fwF/YAF/AGAAAX9gAX8Bf2ACf38AYAR/f39/AX9gAX8BfgJFBQNlbnYBYQAAA2VudgFiAAEDZW52DF9fdGFibGVfYmFzZQN/AANlbnYGbWVtb3J5AgGAAoACA2VudgV0YWJsZQFwAQICAxAPAwQAAAMDBgUBAAYDAwIDBgcBfwFB0BgLBxEEAWMACQFkABABZQAKAWYADwkIAQAjAAsCCwQKhG0PzwEBBX8CQAJAIAAoAmgiAQRAIAAoAmwgAU4NAQsgABAOIgNBAEgNACAAKAIIIQECQAJAIAAoAmgiAgRAIAEgAEEEaiIEKAIAIgVrIAIgACgCbGsiAkgEQAwCBSAAIAUgAkF/amo2AmQLBSAAQQRqIQQMAQsMAQsgASECIAAgATYCZAsgAQRAIAAgACgCbCABQQFqIAQoAgAiAGtqNgJsBSAEKAIAIQALIAMgAEF/aiIALQAARwRAIAAgAzoAAAsMAQsgAEEANgJkQX8hAwsgAwviSAIDfyp+IwEhAiMBQYABaiQBA0AgBEEDdCACaiABIARBA3RqIgMtAAGtQgiGIAMtAACthCADLQACrUIQhoQgAy0AA61CGIaEIAMtAAStQiCGhCADLQAFrUIohoQgAy0ABq1CMIaEIAMtAAetQjiGhDcDACAEQQFqIgRBEEcNAAsgAikDACIhIAApAwAiKyAAKQMgIid8fCIiIABBQGspAwBC0YWa7/rPlIfRAIWFIh1CIIggHUIghoQiHUKIkvOd/8z5hOoAfCIfIB0gHyAnhSIdQhiIIB1CKIaEIiAgIiACKQMIIiJ8fCIYhSIdQhCIIB1CMIaEIhx8IRkgAikDECIdIAApAygiKCAAKQMIIix8fCIlIAApA0hCn9j52cKR2oKbf4WFIh9CIIggH0IghoQiGkK7zqqm2NDrs7t/fCEbIAIpAzAiHyAAKQMYIi0gACkDOCIpfHwiJCAAKQNYQvnC+JuRo7Pw2wCFhSIXQiCIIBdCIIaEIhdC8e30+KWn/aelf3wiHiAXIB4gKYUiF0IYiCAXQiiGhCIGICQgAikDOCIkfHwiFoUiF0IQiCAXQjCGhCIKfCEjIAIpAyAiFyAAKQMQIi4gACkDMCIqfHwiHiAAKQNQQuv6htq/tfbBH4WFIgVCIIggBUIghoQiBUKr8NP0r+68tzx8IgggBSAIICqFIgVCGIggBUIohoQiBSAeIAIpAygiHnx8IgeFIghCEIggCEIwhoQiCHwiCSAKIBogGyAohSIaQhiIIBpCKIaEIhogJSACKQMYIiV8fCILhSIKQjCGIApCEIiEIgwgG3wiDSAahSIbQj+IIBtCAYaEIhogAkFAaykDACIbIBh8fCIYhSIKQiCIIApCIIaEIgp8Ig8gCiAPIBqFIhpCGIggGkIohoQiDyAYIAIpA0giGHx8Ig6FIhpCEIggGkIwhoQiEHwhCiAjIAUgCYUiGkI/iCAaQgGGhCIFIAIpA1AiGiALfHwiCSAchSIcQiCIIBxCIIaEIhx8IgsgHCAFIAuFIhxCGIggHEIohoQiCyAJIAIpA1giHHx8IgmFIgVCEIggBUIwhoQiE3whBSANIAggGSAghSIgQj+IICBCAYaEIiAgFiACKQNwIhZ8fCIIhSINQiCIIA1CIIaEIg18IhEgIIUiIEIYiCAgQiiGhCISIAggAikDeCIgfHwhCCAMIAYgI4UiI0I/iCAjQgGGhCIGIAcgAikDYCIjfHwiB4UiDEIgiCAMQiCGhCIMIBl8IhkgDCAGIBmFIhlCGIggGUIohoQiDCAHIAIpA2giGXx8IhWFIgZCEIggBkIwhoQiB3wiFCATIBIgESAIIA2FIgZCEIggBkIwhoQiDXwiE4UiBkI/iCAGQgGGhCIGIA4gFnx8Ig6FIhFCIIggEUIghoQiEXwiEiARIAYgEoUiBkIYiCAGQiiGhCIRIA4gGnx8Ig6FIgZCEIggBkIwhoQiEnwhBiATIAcgCiAPhSIHQj+IIAdCAYaEIgcgCSAXfHwiCYUiD0IgiCAPQiCGhCIPfCITIA8gByAThSIHQhiIIAdCKIaEIg8gCSAbfHwiCYUiB0IQiCAHQjCGhCITfCEHIAUgECAMIBSFIgxCP4ggDEIBhoQiDCAIIBl8fCIIhSIQQiCIIBBCIIaEIhB8IhQgECAMIBSFIgxCGIggDEIohoQiDCAIIB98fCIQhSIIQhCIIAhCMIaEIhR8IQggCiANIAUgC4UiCkI/iCAKQgGGhCIKIBUgGHx8IgWFIgtCIIggC0IghoQiC3wiDSALIAogDYUiCkIYiCAKQiiGhCILIAUgIHx8Ig2FIgpCEIggCkIwhoQiFXwiBSAUIAcgD4UiCkI/iCAKQgGGhCIKIA4gInx8Ig+FIg5CIIggDkIghoQiDnwiFCAOIAogFIUiCkIYiCAKQiiGhCIOIA8gI3x8Ig+FIgpCEIggCkIwhoQiFHwhCiAIIBIgBSALhSIFQj+IIAVCAYaEIgUgCSAhfHwiCYUiC0IgiCALQiCGhCILfCISIAsgBSAShSIFQhiIIAVCKIaEIgsgCSAdfHwiCYUiBUIQiCAFQjCGhCISfCEFIAcgFSAGIBGFIgdCP4ggB0IBhoQiByAQIB58fCIQhSIRQiCIIBFCIIaEIhF8IhUgESAHIBWFIgdCGIggB0IohoQiESAQICV8fCIQhSIHQhCIIAdCMIaEIhV8IQcgBiATIAggDIUiCEI/iCAIQgGGhCIIIA0gHHx8IgaFIgxCIIggDEIghoQiDHwiDSAMIAggDYUiCEIYiCAIQiiGhCIMIAYgJHx8Ig2FIghCEIggCEIwhoQiBnwiEyASIAcgEYUiCEI/iCAIQgGGhCIIIA8gHHx8Ig+FIhFCIIggEUIghoQiEXwiEiARIAggEoUiCEIYiCAIQiiGhCIRIA8gG3x8Ig+FIghCEIggCEIwhoQiEnwhCCAHIAYgCiAOhSIGQj+IIAZCAYaEIgYgCSAjfHwiB4UiCUIgiCAJQiCGhCIJfCIOIAkgBiAOhSIGQhiIIAZCKIaEIgkgByAhfHwiDoUiBkIQiCAGQjCGhCImfCEGIAUgFCAMIBOFIgdCP4ggB0IBhoQiByAQICB8fCIMhSIQQiCIIBBCIIaEIhB8IhMgECAHIBOFIgdCGIggB0IohoQiECAMIBl8fCIMhSIHQhCIIAdCMIaEIhN8IQcgCiAVIAUgC4UiCkI/iCAKQgGGhCIKIA0gHnx8IgWFIgtCIIggC0IghoQiC3wiDSALIAogDYUiCkIYiCAKQiiGhCILIAUgHXx8Ig2FIgpCEIggCkIwhoQiFXwiBSATIAYgCYUiCkI/iCAKQgGGhCIKIA8gGnx8IgmFIg9CIIggD0IghoQiD3wiEyAPIAogE4UiCkIYiCAKQiiGhCIPIAkgFnx8IgmFIgpCEIggCkIwhoQiE3whCiAHIBIgBSALhSIFQj+IIAVCAYaEIgUgDiAlfHwiC4UiDkIgiCAOQiCGhCIOfCISIA4gBSAShSIFQhiIIAVCKIaEIg4gCyAffHwiC4UiBUIQiCAFQjCGhCISfCEFIAYgFSAIIBGFIgZCP4ggBkIBhoQiBiAMIBh8fCIMhSIRQiCIIBFCIIaEIhF8IhUgESAGIBWFIgZCGIggBkIohoQiESAMIBd8fCIMhSIGQhCIIAZCMIaEIhV8IQYgCCAmIAcgEIUiCEI/iCAIQgGGhCIIIA0gJHx8IgeFIg1CIIggDUIghoQiDXwiECANIAggEIUiCEIYiCAIQiiGhCINIAcgInx8IhCFIghCEIggCEIwhoQiB3wiFCASIAYgEYUiCEI/iCAIQgGGhCIIIAkgJHx8IgmFIhFCIIggEUIghoQiEXwiEiARIAggEoUiCEIYiCAIQiiGhCIRIAkgGHx8IgmFIghCEIggCEIwhoQiEnwhCCAGIAcgCiAPhSIGQj+IIAZCAYaEIgYgCyAlfHwiB4UiC0IgiCALQiCGhCILfCIPIAsgBiAPhSIGQhiIIAZCKIaEIgsgByAifHwiD4UiBkIQiCAGQjCGhCImfCEGIAUgEyANIBSFIgdCP4ggB0IBhoQiByAMIBx8fCIMhSINQiCIIA1CIIaEIg18IhMgDSAHIBOFIgdCGIggB0IohoQiDSAMIBZ8fCIMhSIHQhCIIAdCMIaEIhN8IQcgCiAVIAUgDoUiCkI/iCAKQgGGhCIKIBAgGXx8IgWFIg5CIIggDkIghoQiDnwiECAOIAogEIUiCkIYiCAKQiiGhCIOIAUgI3x8IhCFIgpCEIggCkIwhoQiFXwiBSATIAYgC4UiCkI/iCAKQgGGhCIKIAkgHXx8IgmFIgtCIIggC0IghoQiC3wiEyALIAogE4UiCkIYiCAKQiiGhCILIAkgH3x8IgmFIgpCEIggCkIwhoQiE3whCiAHIBIgBSAOhSIFQj+IIAVCAYaEIgUgDyAefHwiD4UiDkIgiCAOQiCGhCIOfCISIA4gBSAShSIFQhiIIAVCKIaEIg4gDyAafHwiD4UiBUIQiCAFQjCGhCISfCEFIAYgFSAIIBGFIgZCP4ggBkIBhoQiBiAMICB8fCIMhSIRQiCIIBFCIIaEIhF8IhUgESAGIBWFIgZCGIggBkIohoQiESAMIBt8fCIMhSIGQhCIIAZCMIaEIhV8IQYgCCAmIAcgDYUiCEI/iCAIQgGGhCIIIBAgF3x8IgeFIg1CIIggDUIghoQiDXwiECANIAggEIUiCEIYiCAIQiiGhCINIAcgIXx8IhCFIghCEIggCEIwhoQiB3wiFCASIAYgEYUiCEI/iCAIQgGGhCIIIAkgGHx8IgmFIhFCIIggEUIghoQiEXwiEiARIAggEoUiCEIYiCAIQiiGhCIRIAkgIXx8IgmFIghCEIggCEIwhoQiEnwhCCAGIAcgCiALhSIGQj+IIAZCAYaEIgYgDyAefHwiB4UiC0IgiCALQiCGhCILfCIPIAsgBiAPhSIGQhiIIAZCKIaEIgsgByAkfHwiD4UiBkIQiCAGQjCGhCImfCEGIAUgEyANIBSFIgdCP4ggB0IBhoQiByAMIBp8fCIMhSINQiCIIA1CIIaEIg18IhMgDSAHIBOFIgdCGIggB0IohoQiDSAMICB8fCIMhSIHQhCIIAdCMIaEIhN8IQcgCiAVIAUgDoUiCkI/iCAKQgGGhCIKIBAgHXx8IgWFIg5CIIggDkIghoQiDnwiECAOIAogEIUiCkIYiCAKQiiGhCIOIAUgF3x8IhCFIgpCEIggCkIwhoQiFXwiBSATIAYgC4UiCkI/iCAKQgGGhCIKIAkgFnx8IgmFIgtCIIggC0IghoQiC3wiEyALIAogE4UiCkIYiCAKQiiGhCILIAkgInx8IgmFIgpCEIggCkIwhoQiE3whCiAHIBIgBSAOhSIFQj+IIAVCAYaEIgUgDyAcfHwiD4UiDkIgiCAOQiCGhCIOfCISIA4gBSAShSIFQhiIIAVCKIaEIg4gDyAjfHwiD4UiBUIQiCAFQjCGhCISfCEFIAYgFSAIIBGFIgZCP4ggBkIBhoQiBiAMICV8fCIMhSIRQiCIIBFCIIaEIhF8IhUgESAGIBWFIgZCGIggBkIohoQiESAMIBl8fCIMhSIGQhCIIAZCMIaEIhV8IQYgCCAmIAcgDYUiCEI/iCAIQgGGhCIIIBAgH3x8IgeFIg1CIIggDUIghoQiDXwiECANIAggEIUiCEIYiCAIQiiGhCINIAcgG3x8IgeFIghCEIggCEIwhoQiEHwiFCASIAYgEYUiCEI/iCAIQgGGhCIIIAkgHXx8IgmFIhFCIIggEUIghoQiEXwiEiARIAggEoUiCEIYiCAIQiiGhCIRIAkgI3x8IhKFIghCEIggCEIwhoQiJnwhCCAGIBAgCiALhSIGQj+IIAZCAYaEIgsgDyAffHwiD4UiBkIgiCAGQiCGhCIQfCEGIAcgIXwgBSAOhSIHQj+IIAdCAYaEIgd8IgkgFYUiDkIgiCAOQiCGhCIOIAp8IhUgB4UiCkIYiCAKQiiGhCIHIAkgHHx8IQogByAVIAogDoUiB0IQiCAHQjCGhCIOfCIVhSIHQj+IIAdCAYaEIQcgDSAUhSIJQj+IIAlCAYaEIgkgDCAbfHwiDCAThSINQiCIIA1CIIaEIg0gBXwiEyAJhSIFQhiIIAVCKIaEIgkgDCAlfHwhBSAJIBMgBSANhSIJQhCIIAlCMIaEIgx8Ig2FIglCP4ggCUIBhoQhCSAVIAwgBiALhSILQhiIIAtCKIaEIgsgDyAafHwiDCAQhSIPQhCIIA9CMIaEIg8gBnwiECALhSIGQj+IIAZCAYaEIgYgEiAXfHwiC4UiE0IgiCATQiCGhCITfCISIBMgBiAShSIGQhiIIAZCKIaEIhMgCyAZfHwiEoUiBkIQiCAGQjCGhCIVfCEGIAcgDSAHIAwgJHx8IgcgJoUiC0IgiCALQiCGhCILfCIMhSINQhiIIA1CKIaEIg0gByAefHwhByANIAwgByALhSILQhCIIAtCMIaEIgx8Ig2FIgtCP4ggC0IBhoQhCyAJIA8gCSAKICB8fCIKhSIJQiCIIAlCIIaEIgkgCHwiD4UiFEIYiCAUQiiGhCIUIAogFnx8IQogFCAPIAkgCoUiCUIQiCAJQjCGhCIPfCIUhSIJQj+IIAlCAYaEIQkgECAOIAUgInwgCCARhSIFQj+IIAVCAYaEIgV8IgiFIg5CIIggDkIghoQiDnwiECAFhSIFQhiIIAVCKIaEIhEgCCAYfHwhBSAUIAwgESAQIAUgDoUiCEIQiCAIQjCGhCIMfCIOhSIIQj+IIAhCAYaEIgggEiAjfHwiEIUiEUIgiCARQiCGhCIRfCISIBEgCCAShSIIQhiIIAhCKIaEIhEgECAefHwiEIUiCEIQiCAIQjCGhCISfCEIIA4gDyAGIBOFIg9CP4ggD0IBhoQiDyAHICJ8fCIHhSIOQiCIIA5CIIaEIg58IhMgDiAPIBOFIg9CGIggD0IohoQiDyAHICB8fCIOhSIHQhCIIAdCMIaEIhN8IQcgCyAGIAwgCyAKIBZ8fCIKhSIGQiCIIAZCIIaEIgZ8IguFIgxCGIggDEIohoQiDCAKIBl8fCEKIAwgCyAGIAqFIgZCEIggBkIwhoQiFHwiC4UiBkI/iCAGQgGGhCEGIAkgDSAVIAkgBSAXfHwiBYUiCUIgiCAJQiCGhCIJfCIMhSINQhiIIA1CKIaEIg0gBSAafHwhBSANIAwgBSAJhSIJQhCIIAlCMIaEIgx8Ig2FIglCP4ggCUIBhoQhCSALIAwgByAPhSILQj+IIAtCAYaEIgsgECAhfHwiDIUiD0IgiCAPQiCGhCIPfCIQIA8gCyAQhSILQhiIIAtCKIaEIg8gDCAkfHwiEIUiC0IQiCALQjCGhCIVfCELIAYgDSASIAYgDiAffHwiBoUiDEIgiCAMQiCGhCIMfCINhSIOQhiIIA5CKIaEIg4gBiAlfHwhBiAOIA0gBiAMhSIMQhCIIAxCMIaEIg18Ig6FIgxCP4ggDEIBhoQhDCAJIAggEyAJIAogGHx8IgqFIglCIIggCUIghoQiCXwiE4UiEkIYiCASQiiGhCISIAogHXx8IQogEiATIAkgCoUiCUIQiCAJQjCGhCITfCIShSIJQj+IIAlCAYaEIQkgByAUIAggEYUiCEI/iCAIQgGGhCIIIAUgG3x8IgWFIgdCIIggB0IghoQiB3wiESAHIAggEYUiCEIYiCAIQiiGhCIIIAUgHHx8IgeFIgVCEIggBUIwhoQiEXwhBSASIA0gBSAIhSIIQj+IIAhCAYaEIgggECAZfHwiDYUiEEIgiCAQQiCGhCIQfCISIBAgCCAShSIIQhiIIAhCKIaEIhAgDSAcfHwiDYUiCEIQiCAIQjCGhCISfCEIIAUgEyALIA+FIgVCP4ggBUIBhoQiBSAGICR8fCIGhSIPQiCIIA9CIIaEIg98IhMgDyAFIBOFIgVCGIggBUIohoQiDyAGIBZ8fCIThSIFQhCIIAVCMIaEIhR8IQUgDCALIBEgDCAKICN8fCIKhSIGQiCIIAZCIIaEIgZ8IguFIgxCGIggDEIohoQiDCAKICJ8fCEKIAwgCyAGIAqFIgZCEIggBkIwhoQiEXwiC4UiBkI/iCAGQgGGhCEGIAkgDiAVIAkgByAlfHwiB4UiCUIgiCAJQiCGhCIJfCIMhSIOQhiIIA5CKIaEIg4gByAYfHwhByAOIAwgByAJhSIJQhCIIAlCMIaEIgx8Ig6FIglCP4ggCUIBhoQhCSALIAwgBSAPhSILQj+IIAtCAYaEIgsgDSAefHwiDIUiDUIgiCANQiCGhCINfCIPIA0gCyAPhSILQhiIIAtCKIaEIg0gDCAhfHwiD4UiC0IQiCALQjCGhCIVfCELIAYgDiASIAYgEyAgfHwiBoUiDEIgiCAMQiCGhCIMfCIOhSITQhiIIBNCKIaEIhMgBiAXfHwhBiATIA4gBiAMhSIMQhCIIAxCMIaEIg58IhOFIgxCP4ggDEIBhoQhDCAJIAggFCAJIAogG3x8IgqFIglCIIggCUIghoQiCXwiEoUiFEIYiCAUQiiGhCIUIAogH3x8IQogFCASIAkgCoUiCUIQiCAJQjCGhCISfCIUhSIJQj+IIAlCAYaEIQkgBSARIAggEIUiBUI/iCAFQgGGhCIFIAcgHXx8IgiFIgdCIIggB0IghoQiB3wiECAHIAUgEIUiBUIYiCAFQiiGhCIHIAggGnx8IhCFIgVCEIggBUIwhoQiEXwhBSAUIA4gBSAHhSIIQj+IIAhCAYaEIgggDyAffHwiB4UiD0IgiCAPQiCGhCIPfCIOIA8gCCAOhSIIQhiIIAhCKIaEIg8gByAgfHwiDoUiCEIQiCAIQjCGhCIUfCEIIAUgEiALIA2FIgVCP4ggBUIBhoQiBSAGIBZ8fCIGhSIHQiCIIAdCIIaEIgd8Ig0gByAFIA2FIgVCGIggBUIohoQiDSAGIBh8fCIShSIFQhCIIAVCMIaEIiZ8IQUgDCALIBEgDCAKIBx8fCIKhSIGQiCIIAZCIIaEIgZ8IgeFIgtCGIggC0IohoQiCyAKICV8fCEKIAsgByAGIAqFIgZCEIggBkIwhoQiEXwiC4UiBkI/iCAGQgGGhCEGIAkgEyAVIAkgECAhfHwiB4UiCUIgiCAJQiCGhCIJfCIMhSIQQhiIIBBCKIaEIhAgByAbfHwhByAQIAwgByAJhSIJQhCIIAlCMIaEIgx8IhCFIglCP4ggCUIBhoQhCSALIAwgBSANhSILQj+IIAtCAYaEIgsgDiAjfHwiDIUiDUIgiCANQiCGhCINfCIOIA0gCyAOhSILQhiIIAtCKIaEIg0gDCAdfHwiDoUiC0IQiCALQjCGhCITfCELIAYgECAUIAYgEiAZfHwiBoUiDEIgiCAMQiCGhCIMfCIQhSISQhiIIBJCKIaEIhIgBiAkfHwhBiASIBAgBiAMhSIMQhCIIAxCMIaEIhB8IhKFIgxCP4ggDEIBhoQhDCAJIAggJiAJIAogInx8IgqFIglCIIggCUIghoQiCXwiFYUiFEIYiCAUQiiGhCIUIAogF3x8IQogFCAVIAkgCoUiCUIQiCAJQjCGhCIVfCIUhSIJQj+IIAlCAYaEIQkgBSARIAggD4UiBUI/iCAFQgGGhCIFIAcgGnx8IgiFIgdCIIggB0IghoQiB3wiDyAHIAUgD4UiBUIYiCAFQiiGhCIHIAggHnx8Ig+FIgVCEIggBUIwhoQiEXwhBSAUIBAgBSAHhSIIQj+IIAhCAYaEIgggDiAafHwiB4UiDkIgiCAOQiCGhCIOfCIQIA4gCCAQhSIIQhiIIAhCKIaEIg4gByAdfHwiEIUiCEIQiCAIQjCGhCIUfCEIIAUgFSALIA2FIgVCP4ggBUIBhoQiBSAGIBt8fCIGhSIHQiCIIAdCIIaEIgd8Ig0gByAFIA2FIgVCGIggBUIohoQiDSAGIBd8fCIVhSIFQhCIIAVCMIaEIiZ8IQUgDCALIBEgDCAKICR8fCIKhSIGQiCIIAZCIIaEIgZ8IgeFIgtCGIggC0IohoQiCyAKIB98fCEKIAsgByAGIAqFIgZCEIggBkIwhoQiEXwiC4UiBkI/iCAGQgGGhCEGIAkgEiATIAkgDyAifHwiB4UiCUIgiCAJQiCGhCIJfCIMhSIPQhiIIA9CKIaEIg8gByAefHwhByAPIAwgByAJhSIJQhCIIAlCMIaEIgx8Ig+FIglCP4ggCUIBhoQhCSALIAwgBSANhSILQj+IIAtCAYaEIgsgECAgfHwiDIUiDUIgiCANQiCGhCINfCIQIA0gCyAQhSILQhiIIAtCKIaEIg0gDCAcfHwiEIUiC0IQiCALQjCGhCITfCELIAYgDyAUIAYgFSAYfHwiBoUiDEIgiCAMQiCGhCIMfCIPhSISQhiIIBJCKIaEIhIgBiAWfHwhBiASIA8gBiAMhSIMQhCIIAxCMIaEIg98IhKFIgxCP4ggDEIBhoQhDCAJIAggJiAJIAogJXx8IgqFIglCIIggCUIghoQiCXwiFYUiFEIYiCAUQiiGhCIUIAogI3x8IQogFCAVIAkgCoUiCUIQiCAJQjCGhCIVfCIUhSIJQj+IIAlCAYaEIQkgBSARIAggDoUiBUI/iCAFQgGGhCIFIAcgGXx8IgiFIgdCIIggB0IghoQiB3wiDiAHIAUgDoUiBUIYiCAFQiiGhCIHIAggIXx8Ig6FIgVCEIggBUIwhoQiEXwhBSAUIA8gBSAHhSIIQj+IIAhCAYaEIgggECAhfHwiB4UiD0IgiCAPQiCGhCIPfCIQIA8gCCAQhSIIQhiIIAhCKIaEIg8gByAifHwiEIUiCEIQiCAIQjCGhCIUfCEIIAUgFSALIA2FIgVCP4ggBUIBhoQiBSAGIB18fCIGhSIHQiCIIAdCIIaEIgd8Ig0gByAFIA2FIgVCGIggBUIohoQiDSAGICV8fCIVhSIFQhCIIAVCMIaEIiZ8IQUgDCALIBEgDCAKIBd8fCIKhSIGQiCIIAZCIIaEIgZ8IgeFIgtCGIggC0IohoQiCyAKIB58fCEKIAsgByAGIAqFIgZCEIggBkIwhoQiEXwiC4UiBkI/iCAGQgGGhCEGIAkgEiATIAkgDiAffHwiB4UiCUIgiCAJQiCGhCIJfCIMhSIOQhiIIA5CKIaEIg4gByAkfHwhByAOIAwgByAJhSIJQhCIIAlCMIaEIgx8Ig6FIglCP4ggCUIBhoQhCSALIAwgBSANhSILQj+IIAtCAYaEIgsgECAbfHwiDIUiDUIgiCANQiCGhCINfCIQIA0gCyAQhSILQhiIIAtCKIaEIg0gDCAYfHwiEIUiC0IQiCALQjCGhCITfCELIAYgDiAUIAYgFSAafHwiBoUiDEIgiCAMQiCGhCIMfCIOhSISQhiIIBJCKIaEIhIgBiAcfHwhBiASIA4gBiAMhSIMQhCIIAxCMIaEIg58IhKFIgxCP4ggDEIBhoQhDCAJIAggJiAJIAogI3x8IgqFIglCIIggCUIghoQiCXwiFYUiFEIYiCAUQiiGhCIUIAogGXx8IQogFCAVIAkgCoUiCUIQiCAJQjCGhCIVfCIUhSIJQj+IIAlCAYaEIQkgBSARIAggD4UiBUI/iCAFQgGGhCIFIAcgFnx8IgiFIgdCIIggB0IghoQiB3wiDyAHIAUgD4UiBUIYiCAFQiiGhCIHIAggIHx8IgiFIgVCEIggBUIwhoQiD3whBSAUIA4gBSAHhSIHQj+IIAdCAYaEIgcgECAWfHwiFoUiDkIgiCAOQiCGhCIOfCIQIA4gByAQhSIHQhiIIAdCKIaEIgcgFiAafHwiDoUiGkIQiCAaQjCGhCIQfCEaIAUgFSALIA2FIhZCP4ggFkIBhoQiFiAGIBd8fCIXhSIFQiCIIAVCIIaEIgV8IgYgBSAGIBaFIhZCGIggFkIohoQiBSAXIBt8fCIGhSIXQhCIIBdCMIaEIg18IRcgDCALIA8gDCAKIBh8fCIbhSIYQiCIIBhCIIaEIhh8IhaFIgpCGIggCkIohoQiCiAbICB8fCEbIAogFiAYIBuFIhhCEIggGEIwhoQiIHwiCoUiGEI/iCAYQgGGhCEYIAkgEiATIAkgCCAZfHwiFoUiGUIgiCAZQiCGhCIZfCIIhSIJQhiIIAlCKIaEIgkgFiAffHwhHyAJIAggGSAfhSIWQhCIIBZCMIaEIhl8IgiFIhZCP4ggFkIBhoQhFiAKIBkgBSAXhSIZQj+IIBlCAYaEIhkgDiAifHwiIoUiCkIgiCAKQiCGhCIKfCIFIAogBSAZhSIZQhiIIBlCKIaEIhkgIiAjfHwiI4UiIkIQiCAiQjCGhCIKfCEiIBggCCAQIBggBiAhfHwiIYUiGEIgiCAYQiCGhCIYfCIFhSIIQhiIIAhCKIaEIgggHSAhfHwhISAIIAUgGCAhhSIdQhCIIB1CMIaEIhh8IgWFIR0gFiAaIA0gFiAbIBx8fCIbhSIcQiCIIBxCIIaEIhx8IhaFIghCGIggCEIohoQiCCAbICR8fCEkIAggFiAcICSFIhtCEIggG0IwhoQiHHwiFoUhGyAAIBYgIyArhYU3AwAgACAXICAgByAahSIXQj+IIBdCAYaEIhcgHiAffHwiH4UiHkIgiCAeQiCGhCIefCIaIB4gFyAahSIXQhiIIBdCKIaEIhcgHyAlfHwiH4UiHkIQiCAeQjCGhCIefCIlICEgLIWFNwMIIAAgIiAkIC6FhTcDECAAIAUgHyAthYU3AxggACAXICWFIiFCP4ggIUIBhoQgGCAnhYU3AyAgACAZICKFIiFCP4ggIUIBhoQgHCAohYU3AyggACAdQgGGIB1CP4iEIB4gKoWFNwMwIAAgG0IBhiAbQj+IhCAKICmFhTcDOCACJAELmAIBBH8gACACaiEEIAFB/wFxIQEgAkHDAE4EQANAIABBA3EEQCAAIAE6AAAgAEEBaiEADAELCyABQQh0IAFyIAFBEHRyIAFBGHRyIQMgBEF8cSIFQUBqIQYDQCAAIAZMBEAgACADNgIAIAAgAzYCBCAAIAM2AgggACADNgIMIAAgAzYCECAAIAM2AhQgACADNgIYIAAgAzYCHCAAIAM2AiAgACADNgIkIAAgAzYCKCAAIAM2AiwgACADNgIwIAAgAzYCNCAAIAM2AjggACADNgI8IABBQGshAAwBCwsDQCAAIAVIBEAgACADNgIAIABBBGohAAwBCwsLA0AgACAESARAIAAgAToAACAAQQFqIQAMAQsLIAQgAmsLxgMBA38gAkGAwABOBEAgACABIAIQABogAA8LIAAhBCAAIAJqIQMgAEEDcSABQQNxRgRAA0AgAEEDcQRAIAJFBEAgBA8LIAAgASwAADoAACAAQQFqIQAgAUEBaiEBIAJBAWshAgwBCwsgA0F8cSICQUBqIQUDQCAAIAVMBEAgACABKAIANgIAIAAgASgCBDYCBCAAIAEoAgg2AgggACABKAIMNgIMIAAgASgCEDYCECAAIAEoAhQ2AhQgACABKAIYNgIYIAAgASgCHDYCHCAAIAEoAiA2AiAgACABKAIkNgIkIAAgASgCKDYCKCAAIAEoAiw2AiwgACABKAIwNgIwIAAgASgCNDYCNCAAIAEoAjg2AjggACABKAI8NgI8IABBQGshACABQUBrIQEMAQsLA0AgACACSARAIAAgASgCADYCACAAQQRqIQAgAUEEaiEBDAELCwUgA0EEayECA0AgACACSARAIAAgASwAADoAACAAIAEsAAE6AAEgACABLAACOgACIAAgASwAAzoAAyAAQQRqIQAgAUEEaiEBDAELCwsDQCAAIANIBEAgACABLAAAOgAAIABBAWohACABQQFqIQEMAQsLIAQLBwAgABAMpwuNAQEDfwJAAkAgACICQQNxRQ0AIAIiASEAAkADQCABLAAARQ0BIAFBAWoiASIAQQNxDQALIAEhAAwBCwwBCwNAIABBBGohASAAKAIAIgNB//37d2ogA0GAgYKEeHFBgIGChHhzcUUEQCABIQAMAQsLIANB/wFxBEADQCAAQQFqIgAsAAANAAsLCyAAIAJrC+wFAgR/AX4DQCAAKAIEIgEgACgCZEkEfyAAIAFBAWo2AgQgAS0AAAUgABACCyIBIgNBIEYgA0F3akEFSXINAAsCQAJAIAFBK2sOAwABAAELIAFBLUZBH3RBH3UhBCAAKAIEIgEgACgCZEkEfyAAIAFBAWo2AgQgAS0AAAUgABACCyEBCwJ+An8CQAJAIAFBMEYEfiAAKAIEIgEgACgCZEkEfyAAIAFBAWo2AgQgAS0AAAUgABACCyIBQSByQfgARwRAIAFBkQhqLAAAIgNB/wFxIQEgA0H/AXFBEEgNAyABIQIgAwwECyAAKAIEIgEgACgCZEkEfyAAIAFBAWo2AgQgAS0AAAUgABACC0GRCGosAAAiAUH/AXFBD0wNASAAKAJkBEAgACAAKAIEQX5qNgIEC0IABSABQZEIaiwAACIBQf8BcUEQSAR+DAIFIAAoAmQEQCAAIAAoAgRBf2o2AgQLIABBADYCaCAAIAAoAggiAiAAKAIEazYCbCAAIAI2AmRCAAsLDAMLIAFB/wFxIQELA0AgAkEEdCABciECIAAoAgQiASAAKAJkSQR/IAAgAUEBajYCBCABLQAABSAAEAILQZEIaiwAACIDQf8BcSEBIANB/wFxQRBIIAJBgICAwABJcQ0ACyACrSEFIAEhAiADCyEBIAJBD00EfwN/IAAoAgQiAiAAKAJkSQR/IAAgAkEBajYCBCACLQAABSAAEAILQZEIaiwAACICQf8BcUEPSiABQf8Bca0gBUIEhoQiBUL//////////w9WcgR/IAIFIAIhAQwBCwsFIAELQf8BcUEQSARAA34gACgCBCIBIAAoAmRJBH8gACABQQFqNgIEIAEtAAAFIAAQAgtBkQhqLQAAQRBIDQBCgICAgAgLIQULIAAoAmQEQCAAIAAoAgRBf2o2AgQLIAVCgICAgAhaBEBC/////wcgBEUNARpCgICAgAggBUKAgICACFYNARoLIAUgBKwiBYUgBX0LC/ESAhN/BX4jASEHIwFB8AJqJAEgB0EgaiEEIAchCSAALAAABEADQCAEIAAgBWouAAA7AQAgBEEAOgACIAhBAWohBiAIIAlqIAQQBjoAACAFQQJqIgUgABAHSQRAIAYhCAwBCwsLIAdB4ABqIQYgASwAAAR/QQAhAEEAIQUDQCAEIAAgAWouAAA7AQAgBEEAOgACIAVBAWohCCAFIAZqIAQQBjoAACAAQQJqIgAgARAHSQRAIAghBQwBCwsgBkEHaiIFIQAgBkEBaiIMIQEgBkEGaiILIQggBkECaiIOIQogBkEFaiINIREgBkEDaiIQIRIgBkEEaiIPIRMgBiwAACEUIAssAAAhCyAMLAAAIQwgDSwAACENIA4sAAAhDiAPLAAAIQ8gECwAACEQIAUsAAAFIAZBB2ohACAGQQFqIQEgBkEGaiEIIAZBAmohCiAGQQVqIREgBkEDaiESIAZBBGohE0EACyEWIAdB+ABqIQUgB0HwAGohFSAGIBY6AAAgACAUOgAAIAEgCzoAACAIIAw6AAAgCiANOgAAIBEgDjoAACASIA86AAAgEyAQOgAAIAYpAwAhGUJ/IANB/wFxrYAiFyACQf8Bca1+IhhCfyAXIBh8IANB/wFxQX9qIAJB/wFxRhsiGlEEf0EAIQRBACEAQQAhAkEAIQNBACEJQQAhBUEAIQhBACEGQQAFAn8gBUHgAGohCCAFQUBrIQIgBUFAayEGA0ACQCAHIBg3A2ggBkEAQbABEAQaIAVCgJL3lf/M+YTqADcDACAFQrvOqqbY0Ouzu383AwggBUKr8NP0r+68tzw3AxAgBULx7fT4paf9p6V/NwMYIAVC0YWa7/rPlIfRADcDICAFQp/Y+dnCkdqCm383AyggBULr+obav7X2wR83AzAgBUL5wvibkaOz8NsANwM4IAVBCDYC5AEgCCAHKQNoNwMAIAUgBSgC4AEiA0EIaiIANgLgAUH4ACADayIBQSBJBEAgBUEANgLgASAAIAVB4ABqaiAJIAEQBRogAkKAATcDACAFQgA3A0ggBSAIEAMgASAJaiEAQSAgAWsiAUGAAUsEQCADQad+aiEKA0AgAiACKQMAIhdCgAF8NwMAIAUgBSkDSCAXQv9+Vq18NwNIIAUgABADIABBgAFqIQAgAUGAf2oiAUGAAUsNAAsgA0GofmogCkGAf3EiAGshAUH4ASADayAAaiAJaiEACwVBICEBIAkhAAsgBSgC4AEgBUHgAGpqIAAgARAFGiAFIAEgBSgC4AFqIgA2AuABIARCADcDACAEQgA3AwggBEIANwMQIARCADcDGCAEQgA3AyAgBEIANwMoIARCADcDMCAEQgA3AzggBSgC5AFBCUkgBSkDUEIAUXEEfiACIACtIhcgAikDAHwiGzcDACAFIAUpA0ggGyAXVK18NwNIIAUsAOgBBEAgBUJ/NwNYCyAFQn83A1AgACAFQeAAampBAEGAASAAaxAEGiAFIAgQAyAEIAUpAwAiFzwAACAEIBdCCIg8AAEgBCAXQhCIPAACIAQgF0IYiDwAAyAEIBdCIIg8AAQgBCAXQiiIPAAFIAQgF0IwiDwABiAEIBdCOIg8AAcgBCAFKQMIIhc8AAggBCAXQgiIPAAJIAQgF0IQiDwACiAEIBdCGIg8AAsgBCAXQiCIPAAMIAQgF0IoiDwADSAEIBdCMIg8AA4gBCAXQjiIPAAPIAQgBSkDECIXPAAQIAQgF0IIiDwAESAEIBdCEIg8ABIgBCAXQhiIPAATIAQgF0IgiDwAFCAEIBdCKIg8ABUgBCAXQjCIPAAWIAQgF0I4iDwAFyAEIAUpAxgiFzwAGCAEIBdCCIg8ABkgBCAXQhCIPAAaIAQgF0IYiDwAGyAEIBdCIIg8ABwgBCAXQiiIPAAdIAQgF0IwiDwAHiAEIBdCOIg8AB8gBCAFKQMgIhc8ACAgBCAXQgiIPAAhIAQgF0IQiDwAIiAEIBdCGIg8ACMgBCAXQiCIPAAkIAQgF0IoiDwAJSAEIBdCMIg8ACYgBCAXQjiIPAAnIAQgBSkDKCIXPAAoIAQgF0IIiDwAKSAEIBdCEIg8ACogBCAXQhiIPAArIAQgF0IgiDwALCAEIBdCKIg8AC0gBCAXQjCIPAAuIAQgF0I4iDwALyAEIAUpAzAiFzwAMCAEIBdCCIg8ADEgBCAXQhCIPAAyIAQgF0IYiDwAMyAEIBdCIIg8ADQgBCAXQiiIPAA1IAQgF0IwiDwANiAEIBdCOIg8ADcgBCAFKQM4Ihc8ADggBCAXQgiIPAA5IAQgF0IQiDwAOiAEIBdCGIg8ADsgBCAXQiCIPAA8IAQgF0IoiDwAPSAEIBdCMIg8AD4gBCAXQjiIPAA/IBUgBCAFKALkARAFGkGgCigCACEAIARBAEHAACAAQQFxEQAAGiAVKQMABUIACyAZWg0AIBogGEIBfCIYUg0BQQAhBEEAIQBBACECQQAhA0EAIQlBACEFQQAhCEEAIQZBAAwCCwsgByAYQjiIPABoIAcgGDwAbyAHIBhCMIg8AGkgByAYQgiIPABuIAcgGEIoiDwAaiAHIBhCEIg8AG0gByAYQiCIPABrIAcgGEIYiDwAbEEBIQQgBykDaCIYp0H/AXEhACAYQhiIp0H/AXEhAiAYQiCIp0H/AXEhAyAYQiiIp0H/AXEhCSAYQjCIp0H/AXEhBSAYQjiIp0H/AXEhCCAYQgiIp0H/AXEhBiAYQhCIp0H/AXELCyEBQbAKQTA6AABBsQogBEGACGosAAA6AABBsgogAEH/AXFBBHZBgAhqLAAAOgAAQbMKIABBD3FBgAhqLAAAOgAAQbQKIAZB/wFxQQR2QYAIaiwAADoAAEG1CiAGQQ9xQYAIaiwAADoAAEG2CiABQf8BcUEEdkGACGosAAA6AABBtwogAUEPcUGACGosAAA6AABBuAogAkH/AXFBBHZBgAhqLAAAOgAAQbkKIAJBD3FBgAhqLAAAOgAAQboKIANB/wFxQQR2QYAIaiwAADoAAEG7CiADQQ9xQYAIaiwAADoAAEG8CiAJQf8BcUEEdkGACGosAAA6AABBvQogCUEPcUGACGosAAA6AABBvgogBUH/AXFBBHZBgAhqLAAAOgAAQb8KIAVBD3FBgAhqLAAAOgAAQcAKIAhB/wFxQQR2QYAIaiwAADoAAEHBCiAIQQ9xQYAIaiwAADoAAEHCCkEAOgAAIAckAUGwCgsGACAAJAELCABBABABQQALcAIBfwJ+IwEhASMBQYABaiQBIAFBADYCACABIAA2AgQgASAANgIsIAFBfyAAQf////8HaiAAQQBIGzYCCCABQX82AkwgAUEANgJoIAEgASgCCCIAIAEoAgRrNgJsIAEgADYCZCABEAghAyABJAEgAwuLAQECfyAAIAAsAEoiASABQf8BanI6AEogACgCFCAAKAIcSwRAIAAoAiQhASAAQQBBACABQQFxEQAAGgsgAEEANgIQIABBADYCHCAAQQA2AhQgACgCACIBQQRxBH8gACABQSByNgIAQX8FIAAgACgCLCAAKAIwaiICNgIIIAAgAjYCBCABQRt0QR91CwtEAQN/IwEhASMBQRBqJAEgABANBH9BfwUgACgCICECIAAgAUEBIAJBAXERAABBAUYEfyABLQAABUF/CwshAyABJAEgAwsEACMBCxsBAn8jASECIAAjAWokASMBQQ9qQXBxJAEgAgsLoAICAEGACAuRAjAxMjM0NTY3ODlhYmNkZWb/////////////////////////////////////////////////////////////////AAECAwQFBgcICf////////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI////////woLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIj/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBBoAoLAQE=";
        if (!N(L)) {
            var R = L;
            L = g.locateFile ? g.locateFile(R, B) : B + R;
        }
        function P() {
            try {
                if (g.wasmBinary) return new Uint8Array(g.wasmBinary);
                var A = V(L);
                if (A) return A;
                if (g.readBinary) return g.readBinary(L);
                throw "both async and sync fetching of the wasm failed";
            } catch (A1) {
                $(A1);
            }
        }
        function J() {
            return g.wasmBinary || !n && !t || "function" != typeof fetch ? new Promise(function(A) {
                A(P());
            }) : fetch(L, {
                credentials: "same-origin"
            }).then(function(A) {
                if (!A.ok) throw "failed to load wasm binary file at '" + L + "'";
                return A.arrayBuffer();
            }).catch(function() {
                return P();
            });
        }
        function X(A) {
            function I(A) {
                g.asm = A.exports, K--, g.monitorRunDependencies && g.monitorRunDependencies(K), 0 == K && x && (A = x, x = null, A());
            }
            function i(A) {
                I(A.instance);
            }
            function C(A) {
                J().then(function(A) {
                    return WebAssembly.instantiate(A, r);
                }).then(A, function(A) {
                    E("failed to asynchronously prepare wasm: " + A), $(A);
                });
            }
            var r = {
                env: A,
                global: {
                    NaN: NaN,
                    Infinity: 1 / 0
                },
                "global.Math": Math,
                asm2wasm: w
            };
            if (K++, g.monitorRunDependencies && g.monitorRunDependencies(K), g.instantiateWasm) try {
                return g.instantiateWasm(r, I);
            } catch (A1) {
                return E("Module.instantiateWasm callback failed with error: " + A1), !1;
            }
            return g.wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || N(L) || "function" != typeof fetch ? C(i) : WebAssembly.instantiateStreaming(fetch(L, {
                credentials: "same-origin"
            }), r).then(i, function(A) {
                E("wasm streaming compile failed: " + A), E("falling back to ArrayBuffer instantiation"), C(i);
            }), {
            };
        }
        function j(A) {
            for(var I = [], i = 0; i < A.length; i++){
                var g = A[i];
                255 < g && (g &= 255), I.push(String.fromCharCode(g));
            }
            return I.join("");
        }
        g.asm = function(A, I) {
            return I.memory = u, I.table = new WebAssembly.Table({
                initial: 2,
                maximum: 2,
                element: "anyfunc"
            }), I.__memory_base = 1024, I.__table_base = 0, X(I);
        };
        var O = "function" == typeof atob ? atob : function(A) {
            var I = "", i = 0;
            A = A.replace(/[^A-Za-z0-9\+\/=]/g, "");
            do {
                var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(i++)), C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(i++)), r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(i++)), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(A.charAt(i++));
                g = g << 2 | C >> 4, C = (15 & C) << 4 | r >> 2;
                var n = (3 & r) << 6 | o;
                I += String.fromCharCode(g), 64 !== r && (I += String.fromCharCode(C)), 64 !== o && (I += String.fromCharCode(n));
            }while (i < A.length)
            return I;
        };
        function V(A) {
            if (N(A)) {
                if (A = A.slice(m.length), "boolean" == typeof e && e) {
                    try {
                        var I = Buffer.from(A, "base64");
                    } catch (i) {
                        I = new Buffer(A, "base64");
                    }
                    var i1 = new Uint8Array(I.buffer, I.byteOffset, I.byteLength);
                } else try {
                    var g = O(A), C = new Uint8Array(g.length);
                    for(I = 0; I < g.length; ++I)C[I] = g.charCodeAt(I);
                    i1 = C;
                } catch (A1) {
                    throw Error("Converting base64 string to bytes failed.");
                }
                return i1;
            }
        }
        var Z = g.asm({
        }, {
            b: $,
            a: function(A, I, i) {
                y.set(y.subarray(I, I + i), A);
            }
        }, U);
        g.asm = Z, g._emscripten_work = function() {
            return g.asm.c.apply(null, arguments);
        };
        var q = g.stackAlloc = function() {
            return g.asm.d.apply(null, arguments);
        }, T = g.stackRestore = function() {
            return g.asm.e.apply(null, arguments);
        }, W = g.stackSave = function() {
            return g.asm.f.apply(null, arguments);
        };
        function z(A) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + A + ")", this.status = A;
        }
        function _() {
            function A() {
                if (!g.calledRun && (g.calledRun = !0, !s)) {
                    if (M || (M = !0, k(p)), k(v), g.onRuntimeInitialized && g.onRuntimeInitialized(), g.postRun) for("function" == typeof g.postRun && (g.postRun = [
                        g.postRun
                    ]); g.postRun.length;){
                        var A = g.postRun.shift();
                        Y.unshift(A);
                    }
                    k(Y);
                }
            }
            if (!(0 < K)) {
                if (g.preRun) for("function" == typeof g.preRun && (g.preRun = [
                    g.preRun
                ]); g.preRun.length;)b();
                k(H), 0 < K || g.calledRun || (g.setStatus ? (g.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        g.setStatus("");
                    }, 1), A();
                }, 1)) : A());
            }
        }
        function $(A) {
            throw g.onAbort && g.onAbort(A), void 0 !== A ? (f(A), E(A), A = JSON.stringify(A)) : A = "", s = !0, "abort(" + A + "). Build with -s ASSERTIONS=1 for more info.";
        }
        if (g.asm = Z, g.cwrap = function(A, I, i, g) {
            var C = (i = i || []).every(function(A) {
                return "number" === A;
            });
            return "string" !== I && C && !g ? l(A) : function() {
                return S(A, I, i, arguments);
            };
        }, g.then = function(A) {
            if (g.calledRun) A(g);
            else {
                var I = g.onRuntimeInitialized;
                g.onRuntimeInitialized = function() {
                    I && I(), A(g);
                };
            }
            return g;
        }, z.prototype = Error(), z.prototype.constructor = z, x = function A() {
            g.calledRun || _(), g.calledRun || (x = A);
        }, g.run = _, g.abort = $, g.preInit) for("function" == typeof g.preInit && (g.preInit = [
            g.preInit
        ]); 0 < g.preInit.length;)g.preInit.pop()();
        return g.noExitRuntime = !0, _(), i;
    });
    i2.exports = r;
});
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ if ("[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)) {
    var a = require("util").promisify;
    e = a(require("crypto").randomFill);
} else e = function(A) {
    return new Promise(function(I) {
        crypto.getRandomValues(A), I();
    });
};
function Q(A) {
    if (!A) return "";
    for(var I = "", i = 0; i < A.length; i++){
        var g = (255 & A[i]).toString(16);
        I += g = 1 === g.length ? "0" + g : g;
    }
    return I.toUpperCase();
}
function B(A) {
    if (!A) return new Uint8Array;
    for(var I = [], i = 0; i < A.length; i += 2)I.push(parseInt(A.substr(i, 2), 16));
    return new Uint8Array(I);
}
var f = "13456789abcdefghijkmnopqrstuwxyz";
function E(A) {
    for(var I = A.length, i = 8 * I % 5, g = 0 === i ? 0 : 5 - i, C = 0, r = "", o = 0, n = 0; n < I; n++)for(C = C << 8 | A[n], o += 8; o >= 5;)r += f[C >>> o + g - 5 & 31], o -= 5;
    return o > 0 && (r += f[C << 5 - (o + g) & 31]), r;
}
function w(A) {
    var I = f.indexOf(A);
    if (-1 === I) throw new Error("Invalid character found: " + A);
    return I;
}
function u(A) {
    for(var I = A.length, i = 5 * I % 8, g = 0 === i ? 0 : 8 - i, C = 0, r = 0, o = 0, n = new Uint8Array(Math.ceil(5 * I / 8)), t = 0; t < I; t++)r = r << 5 | w(A[t]), (C += 5) >= 8 && (n[o++] = r >>> C + g - 8 & 255, C -= 8);
    return C > 0 && (n[o++] = r << C + g - 8 & 255), 0 !== i && (n = n.slice(1)), n;
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ function s(A) {
    var I, i = {
        valid: !1,
        publicKeyBytes: null
    };
    if (!S(A) || !/^(xrb_|nano_|ban_)[13][13-9a-km-uw-z]{59}$/.test(A)) return i;
    I = A.startsWith("xrb_") || A.startsWith("ban_") ? 4 : 5;
    var g = u(A.substr(I, 52));
    return (function(A, I) {
        for(var i = 0; i < A.length; i++)if (A[i] !== I[i]) return !1;
        return !0;
    })(u(A.substr(I + 52)), _blakejs.blake2b(g, null, 5).reverse()) ? {
        publicKeyBytes: g,
        valid: !0
    } : i;
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ var c = Math.pow(2, 32) - 1, l = new _bignumberJsDefault.default("0xffffffffffffffffffffffffffffffff");
function S(A) {
    return "string" == typeof A;
}
function F(A) {
    return "0" === A || !(!S(A) || !/^[1-9]{1}[0-9]{0,38}$/.test(A)) && new _bignumberJsDefault.default(A).isLessThanOrEqualTo(l);
}
function U(A) {
    return S(A) && /^[0-9a-fA-F]{64}$/.test(A);
}
function G(A) {
    return S(A) && /^[0-9a-fA-F]{16}$/.test(A);
}
function y(A) {
    return Number.isInteger(A) && A >= 0 && A <= c;
}
function D(A) {
    return U(A);
}
function d(A) {
    return U(A);
}
function k(A) {
    return s(A).valid;
}
function H(A) {
    return S(A) && /^[0-9a-fA-F]{16}$/.test(A);
}
function p(A) {
    return S(A) && /^[0-9a-fA-F]{128}$/.test(A);
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ function v(A) {
    var I, g = null !== (I = A.threshold) && void 0 !== I ? I : "ffffffc000000000";
    if (!D(A.blockHash)) throw new Error("Hash is not valid");
    if (!H(A.work)) throw new Error("Work is not valid");
    if (!G(g)) throw new Error("Threshold is not valid");
    var C = new _bignumberJsDefault.default("0x" + g), t = B(A.blockHash), e = B(A.work).reverse(), h = _blakejs.blake2bInit(8);
    _blakejs.blake2bUpdate(h, e), _blakejs.blake2bUpdate(h, t);
    var a = Q(_blakejs.blake2bFinal(h).reverse());
    return new _bignumberJsDefault.default("0x" + a).isGreaterThanOrEqualTo(C);
}
var Y = {
    loaded: !1,
    work: null
};
function M() {
    return new Promise(function(A, I) {
        if (Y.loaded) return A(Y);
        try {
            h().then(function(I) {
                var i = Object.assign(Y, {
                    loaded: !0,
                    work: I.cwrap("emscripten_work", "string", [
                        "string",
                        "string",
                        "number",
                        "number"
                    ])
                });
                A(i);
            });
        } catch (A1) {
            I(A1);
        }
    });
}
function b(A, I) {
    var i, g, C, r;
    return void 0 === I && (I = {
    }), i = this, g = void 0, r = function() {
        var i, g, C, r, o, n, e, h;
        return t(this, function(t) {
            switch(t.label){
                case 0:
                    return i = I.workerIndex, g = void 0 === i ? 0 : i, C = I.workerCount, r = void 0 === C ? 1 : C, o = I.workThreshold, n = void 0 === o ? "ffffffc000000000" : o, [
                        4,
                        M()
                    ];
                case 1:
                    if (e = t.sent(), !D(A)) throw new Error("Hash is not valid");
                    if (!G(n)) throw new Error("Threshold is not valid");
                    if (!Number.isInteger(g) || !Number.isInteger(r) || g < 0 || r < 1 || g > r - 1) throw new Error("Worker parameters are not valid");
                    return "1" === (h = e.work(A, n, g, r))[1] ? [
                        2,
                        h.substr(2)
                    ] : [
                        2,
                        null
                    ];
            }
        });
    }, new (C = void 0, C = Promise)(function(A, I) {
        function o(A) {
            try {
                t(r.next(A));
            } catch (A1) {
                I(A1);
            }
        }
        function n(A) {
            try {
                t(r.throw(A));
            } catch (A1) {
                I(A1);
            }
        }
        function t(I) {
            I.done ? A(I.value) : new C(function(A) {
                A(I.value);
            }).then(o, n);
        }
        t((r = r.apply(i, g || [])).next());
    });
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ var K = function(A) {
    var I = new Float64Array(16);
    if (A) for(var i = 0; i < A.length; i++)I[i] = A[i];
    return I;
};
new Uint8Array(32)[0] = 9;
var x = K(), m = K([
    1
]), N = K([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
]), L = K([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
]), R = K([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
]), P = K([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
]), J = K([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
]);
function X(A, I, i, g) {
    return (function(A, I, i, g, C) {
        for(var r = 0, o = 0; o < C; o++)r |= A[I + o] ^ i[g + o];
        return (1 & r - 1 >>> 8) - 1;
    })(A, I, i, g, 32);
}
function j(A, I) {
    var i;
    for(i = 0; i < 16; i++)A[i] = 0 | I[i];
}
function O(A) {
    for(var I, i = 1, g = 0; g < 16; g++)I = A[g] + i + 65535, i = Math.floor(I / 65536), A[g] = I - 65536 * i;
    A[0] += i - 1 + 37 * (i - 1);
}
function V(A, I, i) {
    for(var g, C = ~(i - 1), r = 0; r < 16; r++)g = C & (A[r] ^ I[r]), A[r] ^= g, I[r] ^= g;
}
function Z(A, I) {
    for(var i, g = K(), C = K(), r = 0; r < 16; r++)C[r] = I[r];
    O(C), O(C), O(C);
    for(var o = 0; o < 2; o++){
        g[0] = C[0] - 65517;
        for(r = 1; r < 15; r++)g[r] = C[r] - 65535 - (g[r - 1] >> 16 & 1), g[r - 1] &= 65535;
        g[15] = C[15] - 32767 - (g[14] >> 16 & 1), i = g[15] >> 16 & 1, g[14] &= 65535, V(C, g, 1 - i);
    }
    for(r = 0; r < 16; r++)A[2 * r] = 255 & C[r], A[2 * r + 1] = C[r] >> 8;
}
function q(A, I) {
    var i = new Uint8Array(32), g = new Uint8Array(32);
    return Z(i, A), Z(g, I), X(i, 0, g, 0);
}
function T(A) {
    var I = new Uint8Array(32);
    return Z(I, A), 1 & I[0];
}
function W(A, I, i) {
    for(var g = 0; g < 16; g++)A[g] = I[g] + i[g];
}
function z(A, I, i) {
    for(var g = 0; g < 16; g++)A[g] = I[g] - i[g];
}
function _(A, I, i) {
    var g, C, r = 0, o = 0, n = 0, t = 0, e = 0, h = 0, a = 0, Q = 0, B = 0, f = 0, E = 0, w = 0, u = 0, s = 0, c = 0, l = 0, S = 0, F = 0, U = 0, G = 0, y = 0, D = 0, d = 0, k = 0, H = 0, p = 0, v = 0, Y = 0, M = 0, b = 0, K = 0, x = i[0], m = i[1], N = i[2], L = i[3], R = i[4], P = i[5], J = i[6], X = i[7], j = i[8], O = i[9], V = i[10], Z = i[11], q = i[12], T = i[13], W = i[14], z = i[15];
    r += (g = I[0]) * x, o += g * m, n += g * N, t += g * L, e += g * R, h += g * P, a += g * J, Q += g * X, B += g * j, f += g * O, E += g * V, w += g * Z, u += g * q, s += g * T, c += g * W, l += g * z, o += (g = I[1]) * x, n += g * m, t += g * N, e += g * L, h += g * R, a += g * P, Q += g * J, B += g * X, f += g * j, E += g * O, w += g * V, u += g * Z, s += g * q, c += g * T, l += g * W, S += g * z, n += (g = I[2]) * x, t += g * m, e += g * N, h += g * L, a += g * R, Q += g * P, B += g * J, f += g * X, E += g * j, w += g * O, u += g * V, s += g * Z, c += g * q, l += g * T, S += g * W, F += g * z, t += (g = I[3]) * x, e += g * m, h += g * N, a += g * L, Q += g * R, B += g * P, f += g * J, E += g * X, w += g * j, u += g * O, s += g * V, c += g * Z, l += g * q, S += g * T, F += g * W, U += g * z, e += (g = I[4]) * x, h += g * m, a += g * N, Q += g * L, B += g * R, f += g * P, E += g * J, w += g * X, u += g * j, s += g * O, c += g * V, l += g * Z, S += g * q, F += g * T, U += g * W, G += g * z, h += (g = I[5]) * x, a += g * m, Q += g * N, B += g * L, f += g * R, E += g * P, w += g * J, u += g * X, s += g * j, c += g * O, l += g * V, S += g * Z, F += g * q, U += g * T, G += g * W, y += g * z, a += (g = I[6]) * x, Q += g * m, B += g * N, f += g * L, E += g * R, w += g * P, u += g * J, s += g * X, c += g * j, l += g * O, S += g * V, F += g * Z, U += g * q, G += g * T, y += g * W, D += g * z, Q += (g = I[7]) * x, B += g * m, f += g * N, E += g * L, w += g * R, u += g * P, s += g * J, c += g * X, l += g * j, S += g * O, F += g * V, U += g * Z, G += g * q, y += g * T, D += g * W, d += g * z, B += (g = I[8]) * x, f += g * m, E += g * N, w += g * L, u += g * R, s += g * P, c += g * J, l += g * X, S += g * j, F += g * O, U += g * V, G += g * Z, y += g * q, D += g * T, d += g * W, k += g * z, f += (g = I[9]) * x, E += g * m, w += g * N, u += g * L, s += g * R, c += g * P, l += g * J, S += g * X, F += g * j, U += g * O, G += g * V, y += g * Z, D += g * q, d += g * T, k += g * W, H += g * z, E += (g = I[10]) * x, w += g * m, u += g * N, s += g * L, c += g * R, l += g * P, S += g * J, F += g * X, U += g * j, G += g * O, y += g * V, D += g * Z, d += g * q, k += g * T, H += g * W, p += g * z, w += (g = I[11]) * x, u += g * m, s += g * N, c += g * L, l += g * R, S += g * P, F += g * J, U += g * X, G += g * j, y += g * O, D += g * V, d += g * Z, k += g * q, H += g * T, p += g * W, v += g * z, u += (g = I[12]) * x, s += g * m, c += g * N, l += g * L, S += g * R, F += g * P, U += g * J, G += g * X, y += g * j, D += g * O, d += g * V, k += g * Z, H += g * q, p += g * T, v += g * W, Y += g * z, s += (g = I[13]) * x, c += g * m, l += g * N, S += g * L, F += g * R, U += g * P, G += g * J, y += g * X, D += g * j, d += g * O, k += g * V, H += g * Z, p += g * q, v += g * T, Y += g * W, M += g * z, c += (g = I[14]) * x, l += g * m, S += g * N, F += g * L, U += g * R, G += g * P, y += g * J, D += g * X, d += g * j, k += g * O, H += g * V, p += g * Z, v += g * q, Y += g * T, M += g * W, b += g * z, l += (g = I[15]) * x, o += 38 * (F += g * N), n += 38 * (U += g * L), t += 38 * (G += g * R), e += 38 * (y += g * P), h += 38 * (D += g * J), a += 38 * (d += g * X), Q += 38 * (k += g * j), B += 38 * (H += g * O), f += 38 * (p += g * V), E += 38 * (v += g * Z), w += 38 * (Y += g * q), u += 38 * (M += g * T), s += 38 * (b += g * W), c += 38 * (K += g * z), r = (g = (r += 38 * (S += g * m)) + (C = 1) + 65535) - 65536 * (C = Math.floor(g / 65536)), o = (g = o + C + 65535) - 65536 * (C = Math.floor(g / 65536)), n = (g = n + C + 65535) - 65536 * (C = Math.floor(g / 65536)), t = (g = t + C + 65535) - 65536 * (C = Math.floor(g / 65536)), e = (g = e + C + 65535) - 65536 * (C = Math.floor(g / 65536)), h = (g = h + C + 65535) - 65536 * (C = Math.floor(g / 65536)), a = (g = a + C + 65535) - 65536 * (C = Math.floor(g / 65536)), Q = (g = Q + C + 65535) - 65536 * (C = Math.floor(g / 65536)), B = (g = B + C + 65535) - 65536 * (C = Math.floor(g / 65536)), f = (g = f + C + 65535) - 65536 * (C = Math.floor(g / 65536)), E = (g = E + C + 65535) - 65536 * (C = Math.floor(g / 65536)), w = (g = w + C + 65535) - 65536 * (C = Math.floor(g / 65536)), u = (g = u + C + 65535) - 65536 * (C = Math.floor(g / 65536)), s = (g = s + C + 65535) - 65536 * (C = Math.floor(g / 65536)), c = (g = c + C + 65535) - 65536 * (C = Math.floor(g / 65536)), l = (g = l + C + 65535) - 65536 * (C = Math.floor(g / 65536)), r = (g = (r += C - 1 + 37 * (C - 1)) + (C = 1) + 65535) - 65536 * (C = Math.floor(g / 65536)), o = (g = o + C + 65535) - 65536 * (C = Math.floor(g / 65536)), n = (g = n + C + 65535) - 65536 * (C = Math.floor(g / 65536)), t = (g = t + C + 65535) - 65536 * (C = Math.floor(g / 65536)), e = (g = e + C + 65535) - 65536 * (C = Math.floor(g / 65536)), h = (g = h + C + 65535) - 65536 * (C = Math.floor(g / 65536)), a = (g = a + C + 65535) - 65536 * (C = Math.floor(g / 65536)), Q = (g = Q + C + 65535) - 65536 * (C = Math.floor(g / 65536)), B = (g = B + C + 65535) - 65536 * (C = Math.floor(g / 65536)), f = (g = f + C + 65535) - 65536 * (C = Math.floor(g / 65536)), E = (g = E + C + 65535) - 65536 * (C = Math.floor(g / 65536)), w = (g = w + C + 65535) - 65536 * (C = Math.floor(g / 65536)), u = (g = u + C + 65535) - 65536 * (C = Math.floor(g / 65536)), s = (g = s + C + 65535) - 65536 * (C = Math.floor(g / 65536)), c = (g = c + C + 65535) - 65536 * (C = Math.floor(g / 65536)), l = (g = l + C + 65535) - 65536 * (C = Math.floor(g / 65536)), r += C - 1 + 37 * (C - 1), A[0] = r, A[1] = o, A[2] = n, A[3] = t, A[4] = e, A[5] = h, A[6] = a, A[7] = Q, A[8] = B, A[9] = f, A[10] = E, A[11] = w, A[12] = u, A[13] = s, A[14] = c, A[15] = l;
}
function $(A, I) {
    _(A, I, I);
}
function AA(A, I, i) {
    for(var C = new Uint8Array(i), r = 0; r < i; ++r)C[r] = I[r];
    var o = _blakejsDefault.default.blake2b(C);
    for(r = 0; r < 64; ++r)A[r] = o[r];
    return 0;
}
function IA(A, I) {
    var i = K(), g = K(), C = K(), r = K(), o = K(), n = K(), t = K(), e = K(), h = K();
    z(i, A[1], A[0]), z(h, I[1], I[0]), _(i, i, h), W(g, A[0], A[1]), W(h, I[0], I[1]), _(g, g, h), _(C, A[3], I[3]), _(C, C, L), _(r, A[2], I[2]), W(r, r, r), z(o, g, i), z(n, r, C), W(t, r, C), W(e, g, i), _(A[0], o, n), _(A[1], e, t), _(A[2], t, n), _(A[3], o, e);
}
function iA(A, I, i) {
    var g;
    for(g = 0; g < 4; g++)V(A[g], I[g], i);
}
function gA(A, I) {
    var i = K(), g = K(), C = K();
    !function(A, I) {
        var i, g = K();
        for(i = 0; i < 16; i++)g[i] = I[i];
        for(i = 253; i >= 0; i--)$(g, g), 2 !== i && 4 !== i && _(g, g, I);
        for(i = 0; i < 16; i++)A[i] = g[i];
    }(C, I[2]), _(i, I[0], C), _(g, I[1], C), Z(A, g), A[31] ^= T(i) << 7;
}
function CA(A, I, i) {
    var g, C;
    for(j(A[0], x), j(A[1], m), j(A[2], m), j(A[3], x), C = 255; C >= 0; --C)iA(A, I, g = i[C / 8 | 0] >> (7 & C) & 1), IA(I, A), IA(A, A), iA(A, I, g);
}
function rA(A, I) {
    var i = [
        K(),
        K(),
        K(),
        K()
    ];
    j(i[0], R), j(i[1], P), j(i[2], m), _(i[3], R, P), CA(A, i, I);
}
var oA, nA = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
]);
function tA(A, I) {
    var i, g, C, r;
    for(g = 63; g >= 32; --g){
        for(i = 0, C = g - 32, r = g - 12; C < r; ++C)I[C] += i - 16 * I[g] * nA[C - (g - 32)], i = I[C] + 128 >> 8, I[C] -= 256 * i;
        I[C] += i, I[g] = 0;
    }
    for(i = 0, C = 0; C < 32; C++)I[C] += i - (I[31] >> 4) * nA[C], i = I[C] >> 8, I[C] &= 255;
    for(C = 0; C < 32; C++)I[C] -= i * nA[C];
    for(g = 0; g < 32; g++)I[g + 1] += I[g] >> 8, A[g] = 255 & I[g];
}
function eA(A) {
    for(var I = new Float64Array(64), i = 0; i < 64; i++)I[i] = A[i];
    for(i = 0; i < 64; i++)A[i] = 0;
    tA(A, I);
}
function hA(A) {
    var I = new Uint8Array(64), i = [
        K(),
        K(),
        K(),
        K()
    ], C = new Uint8Array(32), r = _blakejsDefault.default.blake2bInit(64);
    return _blakejsDefault.default.blake2bUpdate(r, A), (I = _blakejsDefault.default.blake2bFinal(r))[0] &= 248, I[31] &= 127, I[31] |= 64, rA(i, I), gA(C, i), C;
}
function aA(A, I) {
    var i = K(), g = K(), C = K(), r = K(), o = K(), n = K(), t = K();
    return j(A[2], m), (function(A, I) {
        var i;
        for(i = 0; i < 16; i++)A[i] = I[2 * i] + (I[2 * i + 1] << 8);
        A[15] &= 32767;
    })(A[1], I), $(C, A[1]), _(r, C, N), z(C, C, A[2]), W(r, A[2], r), $(o, r), $(n, o), _(t, n, o), _(i, t, C), _(i, i, r), (function(A, I) {
        var i, g = K();
        for(i = 0; i < 16; i++)g[i] = I[i];
        for(i = 250; i >= 0; i--)$(g, g), 1 !== i && _(g, g, I);
        for(i = 0; i < 16; i++)A[i] = g[i];
    })(i, i), _(i, i, C), _(i, i, r), _(i, i, r), _(A[0], i, r), $(g, A[0]), _(g, g, r), q(g, C) && _(A[0], A[0], J), $(g, A[0]), _(g, g, r), q(g, C) ? -1 : (T(A[0]) === I[31] >> 7 && z(A[0], x, A[0]), _(A[3], A[0], A[1]), 0);
}
function QA(A, I) {
    if (32 !== I.length) throw new Error("bad secret key size");
    var i = new Uint8Array(64 + A.length);
    return (function(A, I, i, g) {
        var C, r, o = new Uint8Array(64), n = new Uint8Array(64), t = new Uint8Array(64), e = new Float64Array(64), h = [
            K(),
            K(),
            K(),
            K()
        ], a = hA(g);
        AA(o, g, 32), o[0] &= 248, o[31] &= 127, o[31] |= 64;
        var Q = i + 64;
        for(C = 0; C < i; C++)A[64 + C] = I[C];
        for(C = 0; C < 32; C++)A[32 + C] = o[32 + C];
        for(AA(t, A.subarray(32), i + 32), eA(t), rA(h, t), gA(A, h), C = 32; C < 64; C++)A[C] = a[C - 32];
        for(AA(n, A, i + 64), eA(n), C = 0; C < 64; C++)e[C] = 0;
        for(C = 0; C < 32; C++)e[C] = t[C];
        for(C = 0; C < 32; C++)for(r = 0; r < 32; r++)e[C + r] += n[C] * o[r];
        tA(A.subarray(32), e);
    })(i, A, A.length, I), i;
}
function BA(A, I, i) {
    if (64 !== I.length) throw new Error("bad signature size");
    if (32 !== i.length) throw new Error("bad public key size");
    var g, C = new Uint8Array(64 + A.length), r = new Uint8Array(64 + A.length);
    for(g = 0; g < 64; g++)C[g] = I[g];
    for(g = 0; g < A.length; g++)C[g + 64] = A[g];
    return (function(A, I, i, g) {
        var C, r = new Uint8Array(32), o = new Uint8Array(64), n = [
            K(),
            K(),
            K(),
            K()
        ], t = [
            K(),
            K(),
            K(),
            K()
        ];
        if (i < 64) return -1;
        if (aA(t, g)) return -1;
        for(C = 0; C < i; C++)A[C] = I[C];
        for(C = 0; C < 32; C++)A[C + 32] = g[C];
        if (AA(o, A, i), eA(o), CA(n, t, o), rA(t, I.subarray(32)), IA(n, t), gA(r, n), i -= 64, X(I, 0, r, 0)) {
            for(C = 0; C < i; C++)A[C] = 0;
            return -1;
        }
        for(C = 0; C < i; C++)A[C] = I[C + 64];
        return i;
    })(r, C, C.length, i) >= 0;
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ function fA() {
    return new Promise(function(A, I) {
        var i;
        (i = 32, new Promise(function(A, I) {
            var g = new Uint8Array(i);
            e(g).then(function() {
                return A(g);
            }).catch(I);
        })).then(function(I) {
            var i = I.reduce(function(A, I) {
                return "" + A + ("0" + I.toString(16)).slice(-2);
            }, "");
            return A(i);
        }).catch(I);
    });
}
function EA(A, I) {
    if (!U(A)) throw new Error("Seed is not valid");
    if (!y(I)) throw new Error("Index is not valid");
    var i = B(A), g = new ArrayBuffer(4);
    new DataView(g).setUint32(0, I);
    var C = new Uint8Array(g), t = _blakejs.blake2bInit(32);
    return _blakejs.blake2bUpdate(t, i), _blakejs.blake2bUpdate(t, C), Q(_blakejs.blake2bFinal(t));
}
function wA(A) {
    var I, i = d(A), g = s(A), C = g.valid;
    if (!i && !C) throw new Error("Secret key or address is not valid");
    i ? I = hA(B(A)) : I = g.publicKeyBytes;
    return Q(I);
}
function uA(A, I) {
    if (void 0 === I && (I = {
    }), !d(A)) throw new Error("Public key is not valid");
    var i = B(A), g = B(A), r = "xrb_";
    return !0 === I.useNanoPrefix && (r = "nano_"), !0 === I.useBananoPrefix && (r = "ban_"), r + E(g) + E(_blakejs.blake2b(i, null, 5).reverse());
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ !function(A) {
    A.hex = "hex", A.raw = "raw", A.nano = "nano", A.knano = "knano", A.Nano = "Nano", A.NANO = "NANO", A.KNano = "KNano", A.MNano = "MNano", A.Banano = "Banano";
}(oA || (oA = {
}));
var sA = {
    hex: 0,
    raw: 0,
    nano: 24,
    knano: 27,
    Nano: 30,
    NANO: 30,
    KNano: 33,
    MNano: 36,
    Banano: 29
}, cA = _bignumberJsDefault.default.clone({
    EXPONENTIAL_AT: 1000000000,
    DECIMAL_PLACES: sA.MNano
});
function lA(A, I) {
    var i = new Error("From or to is not valid");
    if (!I) throw i;
    var g = sA[I.from], C = sA[I.to];
    if (void 0 === g || void 0 === C) throw new Error("From or to is not valid");
    var r = new Error("Value is not valid");
    if ("hex" === I.from) {
        if (!/^[0-9a-fA-F]{32}$/.test(A)) throw r;
    } else if (!function(A) {
        if (!S(A)) return !1;
        if (A.startsWith(".") || A.endsWith(".")) return !1;
        var I = A.replace(".", "");
        if (A.length - I.length > 1) return !1;
        for(var i = 0, g = I; i < g.length; i++){
            var C = g[i];
            if (C < "0" || C > "9") return !1;
        }
        return !0;
    }(A)) throw r;
    var o, n = g - C;
    if (o = "hex" === I.from ? new cA("0x" + A) : new cA(A), n < 0) for(var t = 0; t < -n; t++)o = o.dividedBy(10);
    else if (n > 0) for(t = 0; t < n; t++)o = o.multipliedBy(10);
    return "hex" === I.to ? o.toString(16).padStart(32, "0") : o.toString();
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ var SA = new Uint8Array(32);
function FA(A) {
    var I, i = B(wA(A.account)), g = B(A.previous), C = B(wA(A.representative)), t = B(lA(A.balance, {
        from: oA.raw,
        to: oA.hex
    }));
    I = k(A.link) ? B(wA(A.link)) : B(A.link);
    var e = _blakejs.blake2bInit(32);
    return _blakejs.blake2bUpdate(e, SA), _blakejs.blake2bUpdate(e, i), _blakejs.blake2bUpdate(e, g), _blakejs.blake2bUpdate(e, C), _blakejs.blake2bUpdate(e, t), _blakejs.blake2bUpdate(e, I), Q(_blakejs.blake2bFinal(e));
}
function UA(A) {
    if (!k(A.account)) throw new Error("Account is not valid");
    if (!D(A.previous)) throw new Error("Previous is not valid");
    if (!k(A.representative)) throw new Error("Representative is not valid");
    if (!F(A.balance)) throw new Error("Balance is not valid");
    if (!k(A.link) && !D(A.link)) throw new Error("Link is not valid");
    return FA(A);
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ function GA(A) {
    if (!D(A.hash)) throw new Error("Hash is not valid");
    if (!d(A.secretKey)) throw new Error("Secret key is not valid");
    return Q(function(A, I) {
        for(var i = QA(A, I), g = new Uint8Array(64), C = 0; C < g.length; C++)g[C] = i[C];
        return g;
    }(B(A.hash), B(A.secretKey)));
}
function yA(A) {
    if (!D(A.hash)) throw new Error("Hash is not valid");
    if (!p(A.signature)) throw new Error("Signature is not valid");
    if (!d(A.publicKey)) throw new Error("Public key is not valid");
    return BA(B(A.hash), B(A.signature), B(A.publicKey));
}
/*!
 * nanocurrency-js: A toolkit for the Nano cryptocurrency.
 * Copyright (c) 2019 Marvin ROGER <dev at marvinroger dot fr>
 * Licensed under GPL-3.0 (https://git.io/vAZsK)
 */ SA[31] = 6;
var DA = "0000000000000000000000000000000000000000000000000000000000000000";
function dA(A, I, i) {
    if (void 0 === i && (i = {
    }), !d(A)) throw new Error("Secret key is not valid");
    if (void 0 === I.work) throw new Error("Work is not set");
    if (!k(I.representative)) throw new Error("Representative is not valid");
    if (!F(I.balance)) throw new Error("Balance is not valid");
    var g;
    if (null === I.previous) g = DA;
    else if (!D(g = I.previous)) throw new Error("Previous is not valid");
    var C, r = !1;
    if (null === I.link) C = DA;
    else if (k(C = I.link)) r = !0;
    else if (!D(C)) throw new Error("Link is not valid");
    if (g === DA && (r || C === DA)) throw new Error("Block is impossible");
    var o, n, t = wA(A), e = !0 === i.useNanoPrefix ? uA(t, {
        useNanoPrefix: !0
    }) : !0 === i.useBananoPrefix ? uA(t, {
        useBananoPrefix: !0
    }) : uA(t), h = FA({
        account: e,
        previous: g,
        representative: I.representative,
        balance: I.balance,
        link: C
    }), a = GA({
        hash: h,
        secretKey: A
    });
    return r ? o = wA(n = C) : n = uA(o = C), {
        hash: h,
        block: {
            type: "state",
            account: e,
            previous: g,
            representative: I.representative,
            balance: I.balance,
            link: o,
            link_as_account: n,
            work: I.work,
            signature: a
        }
    };
}

},{"process":"lDnB8","buffer":"bOetu","fs":"joWnX","path":"joWnX","bignumber.js":"hOjlt","blakejs":"7UsJf","util":"joWnX","crypto":"joWnX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lDnB8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"bOetu":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 256))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"nR26C","ieee754":"ljh7N"}],"nR26C":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"ljh7N":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"joWnX":[function(require,module,exports) {
"use strict";

},{}],"hOjlt":[function(require,module,exports) {
(function(globalObject) {
    /*
 *      bignumber.js v9.0.1
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */ var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = '[BigNumber Error] ', tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ', BASE = 100000000000000, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [
        1,
        10,
        100,
        1000,
        10000,
        100000,
        1000000,
        10000000,
        100000000,
        1000000000,
        10000000000,
        100000000000,
        1000000000000,
        10000000000000
    ], SQRT_BASE = 10000000, // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1000000000; // 0 to MAX_INT32
    /*
   * Create and return a BigNumber constructor.
   */ function clone(configObject) {
        var div, convertBase, parseNumeric, P = BigNumber.prototype = {
            constructor: BigNumber,
            toString: null,
            valueOf: null
        }, ONE = new BigNumber(1), //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
        // The default values below must be integers within the inclusive ranges stated.
        // The values can also be changed at run-time using BigNumber.set.
        // The maximum number of decimal places for operations involving division.
        DECIMAL_PLACES = 20, // The rounding mode used when rounding to the above decimal places, and when using
        // toExponential, toFixed, toFormat and toPrecision, and round (default value).
        // UP         0 Away from zero.
        // DOWN       1 Towards zero.
        // CEIL       2 Towards +Infinity.
        // FLOOR      3 Towards -Infinity.
        // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
        // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
        // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
        // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
        // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
        ROUNDING_MODE = 4, // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
        // The exponent value at and beneath which toString returns exponential notation.
        // Number type: -7
        TO_EXP_NEG = -7, // The exponent value at and above which toString returns exponential notation.
        // Number type: 21
        TO_EXP_POS = 21, // RANGE : [MIN_EXP, MAX_EXP]
        // The minimum exponent value, beneath which underflow to zero occurs.
        // Number type: -324  (5e-324)
        MIN_EXP = -10000000, // The maximum exponent value, above which overflow to Infinity occurs.
        // Number type:  308  (1.7976931348623157e+308)
        // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
        MAX_EXP = 10000000, // Whether to use cryptographically-secure random number generation, if available.
        CRYPTO = false, // The modulo mode used when calculating the modulus: a mod n.
        // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
        // The remainder (r) is calculated as: r = a - n * q.
        //
        // UP        0 The remainder is positive if the dividend is negative, else is negative.
        // DOWN      1 The remainder has the same sign as the dividend.
        //             This modulo mode is commonly known as 'truncated division' and is
        //             equivalent to (a % n) in JavaScript.
        // FLOOR     3 The remainder has the same sign as the divisor (Python %).
        // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
        // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
        //             The remainder is always positive.
        //
        // The truncated division, floored division, Euclidian division and IEEE 754 remainder
        // modes are commonly used for the modulus operation.
        // Although the other rounding modes can also be used, they may not give useful results.
        MODULO_MODE = 1, // The maximum number of significant digits of the result of the exponentiatedBy operation.
        // If POW_PRECISION is 0, there will be unlimited significant digits.
        POW_PRECISION = 0, // The format specification used by the BigNumber.prototype.toFormat method.
        FORMAT = {
            prefix: '',
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ',',
            decimalSeparator: '.',
            fractionGroupSize: 0,
            fractionGroupSeparator: '\xA0',
            suffix: ''
        }, // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
        // '-', '.', whitespace, or repeated character.
        // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
        ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';
        //------------------------------------------------------------------------------------------
        // CONSTRUCTOR
        /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */ function BigNumber(v, b) {
            var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
            // Enable constructor call without `new`.
            if (!(x instanceof BigNumber)) return new BigNumber(v, b);
            if (b == null) {
                if (v && v._isBigNumber === true) {
                    x.s = v.s;
                    if (!v.c || v.e > MAX_EXP) x.c = x.e = null;
                    else if (v.e < MIN_EXP) x.c = [
                        x.e = 0
                    ];
                    else {
                        x.e = v.e;
                        x.c = v.c.slice();
                    }
                    return;
                }
                if ((isNum = typeof v == 'number') && v * 0 == 0) {
                    // Use `1 / n` to handle minus zero also.
                    x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                    // Fast path for integers, where n < 2147483648 (2**31).
                    if (v === ~~v) {
                        for(e = 0, i = v; i >= 10; i /= 10, e++);
                        if (e > MAX_EXP) x.c = x.e = null;
                        else {
                            x.e = e;
                            x.c = [
                                v
                            ];
                        }
                        return;
                    }
                    str = String(v);
                } else {
                    if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                    x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
                }
                // Decimal point?
                if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
                // Exponential form?
                if ((i = str.search(/e/i)) > 0) {
                    // Determine exponent.
                    if (e < 0) e = i;
                    e += +str.slice(i + 1);
                    str = str.substring(0, i);
                } else if (e < 0) // Integer.
                e = str.length;
            } else {
                // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
                intCheck(b, 2, ALPHABET.length, 'Base');
                // Allow exponential notation to be used with base 10 argument, while
                // also rounding to DECIMAL_PLACES as with other bases.
                if (b == 10) {
                    x = new BigNumber(v);
                    return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
                }
                str = String(v);
                if (isNum = typeof v == 'number') {
                    // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                    if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                    x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                    // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                    if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) throw Error(tooManyDigits + v);
                } else x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
                alphabet = ALPHABET.slice(0, b);
                e = i = 0;
                // Check that str is a valid base b number.
                // Don't use RegExp, so alphabet can contain special characters.
                for(len = str.length; i < len; i++)if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                    if (c == '.') // If '.' is not the first character and it has not be found before.
                    {
                        if (i > e) {
                            e = len;
                            continue;
                        }
                    } else if (!caseChanged) // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                    {
                        if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                            caseChanged = true;
                            i = -1;
                            e = 0;
                            continue;
                        }
                    }
                    return parseNumeric(x, String(v), isNum, b);
                }
                // Prevent later check for length on converted number.
                isNum = false;
                str = convertBase(str, b, 10, x.s);
                // Decimal point?
                if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
                else e = str.length;
            }
            // Determine leading zeros.
            for(i = 0; str.charCodeAt(i) === 48; i++);
            // Determine trailing zeros.
            for(len = str.length; str.charCodeAt(--len) === 48;);
            if (str = str.slice(i, ++len)) {
                len -= i;
                // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) throw Error(tooManyDigits + x.s * v);
                // Overflow?
                if ((e = e - i - 1) > MAX_EXP) // Infinity.
                x.c = x.e = null;
                else if (e < MIN_EXP) // Zero.
                x.c = [
                    x.e = 0
                ];
                else {
                    x.e = e;
                    x.c = [];
                    // Transform base
                    // e is the base 10 exponent.
                    // i is where to slice str to get the first element of the coefficient array.
                    i = (e + 1) % LOG_BASE;
                    if (e < 0) i += LOG_BASE; // i < 1
                    if (i < len) {
                        if (i) x.c.push(+str.slice(0, i));
                        for(len -= LOG_BASE; i < len;)x.c.push(+str.slice(i, i += LOG_BASE));
                        i = LOG_BASE - (str = str.slice(i)).length;
                    } else i -= len;
                    for(; i--; str += '0');
                    x.c.push(+str);
                }
            } else // Zero.
            x.c = [
                x.e = 0
            ];
        }
        // CONSTRUCTOR PROPERTIES
        BigNumber.clone = clone;
        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;
        /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */ BigNumber.config = BigNumber.set = function(obj) {
            var p, v;
            if (obj != null) {
                if (typeof obj == 'object') {
                    // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        DECIMAL_PLACES = v;
                    }
                    // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                    // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
                        v = obj[p];
                        intCheck(v, 0, 8, p);
                        ROUNDING_MODE = v;
                    }
                    // EXPONENTIAL_AT {number|number[]}
                    // Integer, -MAX to MAX inclusive or
                    // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                    // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, 0, p);
                            intCheck(v[1], 0, MAX, p);
                            TO_EXP_NEG = v[0];
                            TO_EXP_POS = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                        }
                    }
                    // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                    // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                    // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
                    if (obj.hasOwnProperty(p = 'RANGE')) {
                        v = obj[p];
                        if (v && v.pop) {
                            intCheck(v[0], -MAX, -1, p);
                            intCheck(v[1], 1, MAX, p);
                            MIN_EXP = v[0];
                            MAX_EXP = v[1];
                        } else {
                            intCheck(v, -MAX, MAX, p);
                            if (v) MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                            else throw Error(bignumberError + p + ' cannot be zero: ' + v);
                        }
                    }
                    // CRYPTO {boolean} true or false.
                    // '[BigNumber Error] CRYPTO not true or false: {v}'
                    // '[BigNumber Error] crypto unavailable'
                    if (obj.hasOwnProperty(p = 'CRYPTO')) {
                        v = obj[p];
                        if (v === !!v) {
                            if (v) {
                                if (typeof crypto != 'undefined' && crypto && (crypto.getRandomValues || crypto.randomBytes)) CRYPTO = v;
                                else {
                                    CRYPTO = !v;
                                    throw Error(bignumberError + 'crypto unavailable');
                                }
                            } else CRYPTO = v;
                        } else throw Error(bignumberError + p + ' not true or false: ' + v);
                    }
                    // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                    // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
                        v = obj[p];
                        intCheck(v, 0, 9, p);
                        MODULO_MODE = v;
                    }
                    // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                    // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
                    if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
                        v = obj[p];
                        intCheck(v, 0, MAX, p);
                        POW_PRECISION = v;
                    }
                    // FORMAT {object}
                    // '[BigNumber Error] FORMAT not an object: {v}'
                    if (obj.hasOwnProperty(p = 'FORMAT')) {
                        v = obj[p];
                        if (typeof v == 'object') FORMAT = v;
                        else throw Error(bignumberError + p + ' not an object: ' + v);
                    }
                    // ALPHABET {string}
                    // '[BigNumber Error] ALPHABET invalid: {v}'
                    if (obj.hasOwnProperty(p = 'ALPHABET')) {
                        v = obj[p];
                        // Disallow if less than two characters,
                        // or if it contains '+', '-', '.', whitespace, or a repeated character.
                        if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) ALPHABET = v;
                        else throw Error(bignumberError + p + ' invalid: ' + v);
                    }
                } else // '[BigNumber Error] Object expected: {v}'
                throw Error(bignumberError + 'Object expected: ' + obj);
            }
            return {
                DECIMAL_PLACES: DECIMAL_PLACES,
                ROUNDING_MODE: ROUNDING_MODE,
                EXPONENTIAL_AT: [
                    TO_EXP_NEG,
                    TO_EXP_POS
                ],
                RANGE: [
                    MIN_EXP,
                    MAX_EXP
                ],
                CRYPTO: CRYPTO,
                MODULO_MODE: MODULO_MODE,
                POW_PRECISION: POW_PRECISION,
                FORMAT: FORMAT,
                ALPHABET: ALPHABET
            };
        };
        /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */ BigNumber.isBigNumber = function(v) {
            if (!v || v._isBigNumber !== true) return false;
            if (!BigNumber.DEBUG) return true;
            var i, n, c = v.c, e = v.e, s = v.s;
            out: if (({
            }).toString.call(c) == '[object Array]') {
                if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                    // If the first element is zero, the BigNumber value must be zero.
                    if (c[0] === 0) {
                        if (e === 0 && c.length === 1) return true;
                        break out;
                    }
                    // Calculate number of digits that c[0] should have, based on the exponent.
                    i = (e + 1) % LOG_BASE;
                    if (i < 1) i += LOG_BASE;
                    // Calculate number of digits of c[0].
                    //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
                    if (String(c[0]).length == i) {
                        for(i = 0; i < c.length; i++){
                            n = c[i];
                            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                        }
                        // Last element cannot be zero, unless it is the only element.
                        if (n !== 0) return true;
                    }
                }
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) return true;
            throw Error(bignumberError + 'Invalid BigNumber: ' + v);
        };
        /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.maximum = BigNumber.max = function() {
            return maxOrMin(arguments, P.lt);
        };
        /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.minimum = BigNumber.min = function() {
            return maxOrMin(arguments, P.gt);
        };
        /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */ BigNumber.random = (function() {
            var pow2_53 = 9007199254740992;
            // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
            // Check if Math.random() produces more than 32 bits of randomness.
            // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
            // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
            var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
                return mathfloor(Math.random() * pow2_53);
            } : function() {
                return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
            };
            return function(dp) {
                var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
                if (dp == null) dp = DECIMAL_PLACES;
                else intCheck(dp, 0, MAX);
                k = mathceil(dp / LOG_BASE);
                if (CRYPTO) {
                    // Browsers supporting crypto.getRandomValues.
                    if (crypto.getRandomValues) {
                        a = crypto.getRandomValues(new Uint32Array(k *= 2));
                        for(; i < k;){
                            // 53 bits:
                            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                            //                                     11111 11111111 11111111
                            // 0x20000 is 2^21.
                            v = a[i] * 131072 + (a[i + 1] >>> 11);
                            // Rejection sampling:
                            // 0 <= v < 9007199254740992
                            // Probability that v >= 9e15, is
                            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                            if (v >= 9000000000000000) {
                                b = crypto.getRandomValues(new Uint32Array(2));
                                a[i] = b[0];
                                a[i + 1] = b[1];
                            } else {
                                // 0 <= v <= 8999999999999999
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 100000000000000);
                                i += 2;
                            }
                        }
                        i = k / 2;
                    // Node.js supporting crypto.randomBytes.
                    } else if (crypto.randomBytes) {
                        // buffer
                        a = crypto.randomBytes(k *= 7);
                        for(; i < k;){
                            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                            // 0x100000000 is 2^32, 0x1000000 is 2^24
                            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                            // 0 <= v < 9007199254740992
                            v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                            if (v >= 9000000000000000) crypto.randomBytes(7).copy(a, i);
                            else {
                                // 0 <= (v % 1e14) <= 99999999999999
                                c.push(v % 100000000000000);
                                i += 7;
                            }
                        }
                        i = k / 7;
                    } else {
                        CRYPTO = false;
                        throw Error(bignumberError + 'crypto unavailable');
                    }
                }
                // Use Math.random.
                if (!CRYPTO) for(; i < k;){
                    v = random53bitInt();
                    if (v < 9000000000000000) c[i++] = v % 100000000000000;
                }
                k = c[--i];
                dp %= LOG_BASE;
                // Convert trailing digits to zeros according to dp.
                if (k && dp) {
                    v = POWS_TEN[LOG_BASE - dp];
                    c[i] = mathfloor(k / v) * v;
                }
                // Remove trailing elements which are zero.
                for(; c[i] === 0; c.pop(), i--);
                // Zero?
                if (i < 0) c = [
                    e = 0
                ];
                else {
                    // Remove leading elements which are zero and adjust exponent accordingly.
                    for(e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
                    // Count the digits of the first element of c to determine leading zeros, and...
                    for(i = 1, v = c[0]; v >= 10; v /= 10, i++);
                    // adjust the exponent accordingly.
                    if (i < LOG_BASE) e -= LOG_BASE - i;
                }
                rand.e = e;
                rand.c = c;
                return rand;
            };
        })();
        /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */ BigNumber.sum = function() {
            var i = 1, args = arguments, sum = new BigNumber(args[0]);
            for(; i < args.length;)sum = sum.plus(args[i++]);
            return sum;
        };
        // PRIVATE FUNCTIONS
        // Called by BigNumber and BigNumber.prototype.toString.
        convertBase = (function() {
            var decimal = '0123456789';
            /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */ function toBaseOut(str, baseIn, baseOut, alphabet) {
                var j, arr = [
                    0
                ], arrL, i = 0, len = str.length;
                for(; i < len;){
                    for(arrL = arr.length; arrL--; arr[arrL] *= baseIn);
                    arr[0] += alphabet.indexOf(str.charAt(i++));
                    for(j = 0; j < arr.length; j++)if (arr[j] > baseOut - 1) {
                        if (arr[j + 1] == null) arr[j + 1] = 0;
                        arr[j + 1] += arr[j] / baseOut | 0;
                        arr[j] %= baseOut;
                    }
                }
                return arr.reverse();
            }
            // Convert a numeric string of baseIn to a numeric string of baseOut.
            // If the caller is toString, we are converting from base 10 to baseOut.
            // If the caller is BigNumber, we are converting from baseIn to base 10.
            return function(str, baseIn, baseOut, sign, callerIsToString) {
                var alphabet, d, e, k, r, x, xc, y, i = str.indexOf('.'), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
                // Non-integer.
                if (i >= 0) {
                    k = POW_PRECISION;
                    // Unlimited precision.
                    POW_PRECISION = 0;
                    str = str.replace('.', '');
                    y = new BigNumber(baseIn);
                    x = y.pow(str.length - i);
                    POW_PRECISION = k;
                    // Convert str as if an integer, then restore the fraction part by dividing the
                    // result by its base raised to a power.
                    y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'), 10, baseOut, decimal);
                    y.e = y.c.length;
                }
                // Convert the number as integer.
                xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
                // xc now represents str as an integer and converted to baseOut. e is the exponent.
                e = k = xc.length;
                // Remove trailing zeros.
                for(; xc[--k] == 0; xc.pop());
                // Zero?
                if (!xc[0]) return alphabet.charAt(0);
                // Does str represent an integer? If so, no need for the division.
                if (i < 0) --e;
                else {
                    x.c = xc;
                    x.e = e;
                    // The sign is needed for correct rounding.
                    x.s = sign;
                    x = div(x, y, dp, rm, baseOut);
                    xc = x.c;
                    r = x.r;
                    e = x.e;
                }
                // xc now represents str converted to baseOut.
                // THe index of the rounding digit.
                d = e + dp + 1;
                // The rounding digit: the digit to the right of the digit that may be rounded up.
                i = xc[d];
                // Look at the rounding digits and mode to determine whether to round up.
                k = baseOut / 2;
                r = r || d < 0 || xc[d + 1] != null;
                r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
                // If the index of the rounding digit is not greater than zero, or xc represents
                // zero, then the result of the base conversion is zero or, if rounding up, a value
                // such as 0.00001.
                if (d < 1 || !xc[0]) // 1^-dp or 0
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
                else {
                    // Truncate xc to the required number of decimal places.
                    xc.length = d;
                    // Round up?
                    if (r) // Rounding up may mean the previous digit has to be rounded up and so on.
                    for(--baseOut; ++xc[--d] > baseOut;){
                        xc[d] = 0;
                        if (!d) {
                            ++e;
                            xc = [
                                1
                            ].concat(xc);
                        }
                    }
                    // Determine trailing zeros.
                    for(k = xc.length; !xc[--k];);
                    // E.g. [4, 11, 15] becomes 4bf.
                    for(i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));
                    // Add leading zeros, decimal point and trailing zeros as required.
                    str = toFixedPoint(str, e, alphabet.charAt(0));
                }
                // The caller will add the sign.
                return str;
            };
        })();
        // Perform division in the specified base. Called by div and convertBase.
        div = (function() {
            // Assume non-zero x and k.
            function multiply(x, k, base) {
                var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
                for(x = x.slice(); i--;){
                    xlo = x[i] % SQRT_BASE;
                    xhi = x[i] / SQRT_BASE | 0;
                    m = khi * xlo + xhi * klo;
                    temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                    carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                    x[i] = temp % base;
                }
                if (carry) x = [
                    carry
                ].concat(x);
                return x;
            }
            function compare(a, b, aL, bL) {
                var i, cmp;
                if (aL != bL) cmp = aL > bL ? 1 : -1;
                else {
                    for(i = cmp = 0; i < aL; i++)if (a[i] != b[i]) {
                        cmp = a[i] > b[i] ? 1 : -1;
                        break;
                    }
                }
                return cmp;
            }
            function subtract(a, b, aL, base) {
                var i = 0;
                // Subtract b from a.
                for(; aL--;){
                    a[aL] -= i;
                    i = a[aL] < b[aL] ? 1 : 0;
                    a[aL] = i * base + a[aL] - b[aL];
                }
                // Remove leading zeros.
                for(; !a[0] && a.length > 1; a.splice(0, 1));
            }
            // x: dividend, y: divisor.
            return function(x, y, dp, rm, base) {
                var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
                // Either NaN, Infinity or 0?
                if (!xc || !xc[0] || !yc || !yc[0]) return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
                q = new BigNumber(s);
                qc = q.c = [];
                e = x.e - y.e;
                s = dp + e + 1;
                if (!base) {
                    base = BASE;
                    e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                    s = s / LOG_BASE | 0;
                }
                // Result exponent may be one less then the current value of e.
                // The coefficients of the BigNumbers from convertBase may have trailing zeros.
                for(i = 0; yc[i] == (xc[i] || 0); i++);
                if (yc[i] > (xc[i] || 0)) e--;
                if (s < 0) {
                    qc.push(1);
                    more = true;
                } else {
                    xL = xc.length;
                    yL = yc.length;
                    i = 0;
                    s += 2;
                    // Normalise xc and yc so highest order digit of yc is >= base / 2.
                    n = mathfloor(base / (yc[0] + 1));
                    // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
                    // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
                    if (n > 1) {
                        yc = multiply(yc, n, base);
                        xc = multiply(xc, n, base);
                        yL = yc.length;
                        xL = xc.length;
                    }
                    xi = yL;
                    rem = xc.slice(0, yL);
                    remL = rem.length;
                    // Add zeros to make remainder as long as divisor.
                    for(; remL < yL; rem[remL++] = 0);
                    yz = yc.slice();
                    yz = [
                        0
                    ].concat(yz);
                    yc0 = yc[0];
                    if (yc[1] >= base / 2) yc0++;
                    // Not necessary, but to prevent trial digit n > base, when using base 3.
                    // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
                    do {
                        n = 0;
                        // Compare divisor and remainder.
                        cmp = compare(yc, rem, yL, remL);
                        // If divisor < remainder.
                        if (cmp < 0) {
                            // Calculate trial digit, n.
                            rem0 = rem[0];
                            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                            // n is how many times the divisor goes into the current remainder.
                            n = mathfloor(rem0 / yc0);
                            //  Algorithm:
                            //  product = divisor multiplied by trial digit (n).
                            //  Compare product and remainder.
                            //  If product is greater than remainder:
                            //    Subtract divisor from product, decrement trial digit.
                            //  Subtract product from remainder.
                            //  If product was less than remainder at the last compare:
                            //    Compare new remainder and divisor.
                            //    If remainder is greater than divisor:
                            //      Subtract divisor from remainder, increment trial digit.
                            if (n > 1) {
                                // n may be > base only when base is 3.
                                if (n >= base) n = base - 1;
                                // product = divisor * trial digit.
                                prod = multiply(yc, n, base);
                                prodL = prod.length;
                                remL = rem.length;
                                // Compare product and remainder.
                                // If product > remainder then trial digit n too high.
                                // n is 1 too high about 5% of the time, and is not known to have
                                // ever been more than 1 too high.
                                while(compare(prod, rem, prodL, remL) == 1){
                                    n--;
                                    // Subtract divisor from product.
                                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                    prodL = prod.length;
                                    cmp = 1;
                                }
                            } else {
                                // n is 0 or 1, cmp is -1.
                                // If n is 0, there is no need to compare yc and rem again below,
                                // so change cmp to 1 to avoid it.
                                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                                if (n == 0) // divisor < remainder, so n must be at least 1.
                                cmp = n = 1;
                                // product = divisor
                                prod = yc.slice();
                                prodL = prod.length;
                            }
                            if (prodL < remL) prod = [
                                0
                            ].concat(prod);
                            // Subtract product from remainder.
                            subtract(rem, prod, remL, base);
                            remL = rem.length;
                            // If product was < remainder.
                            if (cmp == -1) // Compare divisor and new remainder.
                            // If divisor < new remainder, subtract divisor from remainder.
                            // Trial digit n too low.
                            // n is 1 too low about 5% of the time, and very rarely 2 too low.
                            while(compare(yc, rem, yL, remL) < 1){
                                n++;
                                // Subtract divisor from remainder.
                                subtract(rem, yL < remL ? yz : yc, remL, base);
                                remL = rem.length;
                            }
                        } else if (cmp === 0) {
                            n++;
                            rem = [
                                0
                            ];
                        } // else cmp === 1 and n will be 0
                        // Add the next digit, n, to the result array.
                        qc[i++] = n;
                        // Update the remainder.
                        if (rem[0]) rem[remL++] = xc[xi] || 0;
                        else {
                            rem = [
                                xc[xi]
                            ];
                            remL = 1;
                        }
                    }while (((xi++) < xL || rem[0] != null) && s--)
                    more = rem[0] != null;
                    // Leading zero?
                    if (!qc[0]) qc.splice(0, 1);
                }
                if (base == BASE) {
                    // To calculate q.e, first get the number of digits of qc[0].
                    for(i = 1, s = qc[0]; s >= 10; s /= 10, i++);
                    round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
                // Caller is convertBase.
                } else {
                    q.e = e;
                    q.r = +more;
                }
                return q;
            };
        })();
        /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */ function format(n, i, rm, id) {
            var c0, e, ne, len, str;
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            if (!n.c) return n.toString();
            c0 = n.c[0];
            ne = n.e;
            if (i == null) {
                str = coeffToString(n.c);
                str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, '0');
            } else {
                n = round(new BigNumber(n), i, rm);
                // n.e may have changed if the value was rounded up.
                e = n.e;
                str = coeffToString(n.c);
                len = str.length;
                // toPrecision returns exponential notation if the number of significant digits
                // specified is less than the number of digits necessary to represent the integer
                // part of the value in fixed-point notation.
                // Exponential notation.
                if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                    // Append zeros?
                    for(; len < i; str += '0', len++);
                    str = toExponential(str, e);
                // Fixed-point notation.
                } else {
                    i -= ne;
                    str = toFixedPoint(str, e, '0');
                    // Append zeros?
                    if (e + 1 > len) {
                        if (--i > 0) for(str += '.'; i--; str += '0');
                    } else {
                        i += e - len;
                        if (i > 0) {
                            if (e + 1 == len) str += '.';
                            for(; i--; str += '0');
                        }
                    }
                }
            }
            return n.s < 0 && c0 ? '-' + str : str;
        }
        // Handle BigNumber.max and BigNumber.min.
        function maxOrMin(args, method) {
            var n, i = 1, m = new BigNumber(args[0]);
            for(; i < args.length; i++){
                n = new BigNumber(args[i]);
                // If any number is NaN, return NaN.
                if (!n.s) {
                    m = n;
                    break;
                } else if (method.call(m, n)) m = n;
            }
            return m;
        }
        /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */ function normalise(n, c, e) {
            var i = 1, j = c.length;
            // Remove trailing zeros.
            for(; !c[--j]; c.pop());
            // Calculate the base 10 exponent. First get the number of digits of c[0].
            for(j = c[0]; j >= 10; j /= 10, i++);
            // Overflow?
            if ((e = i + e * LOG_BASE - 1) > MAX_EXP) // Infinity.
            n.c = n.e = null;
            else if (e < MIN_EXP) // Zero.
            n.c = [
                n.e = 0
            ];
            else {
                n.e = e;
                n.c = c;
            }
            return n;
        }
        // Handle values that fail the validity test in BigNumber.
        parseNumeric = (function() {
            var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(x, str, isNum, b) {
                var base, s = isNum ? str : str.replace(whitespaceOrPlus, '');
                // No exception on ±Infinity or NaN.
                if (isInfinityOrNaN.test(s)) x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                else {
                    if (!isNum) {
                        // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                        s = s.replace(basePrefix, function(m, p1, p2) {
                            base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                            return !b || b == base ? p1 : m;
                        });
                        if (b) {
                            base = b;
                            // E.g. '1.' to '1', '.1' to '0.1'
                            s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                        }
                        if (str != s) return new BigNumber(s, base);
                    }
                    // '[BigNumber Error] Not a number: {n}'
                    // '[BigNumber Error] Not a base {b} number: {n}'
                    if (BigNumber.DEBUG) throw Error(bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
                    // NaN
                    x.s = null;
                }
                x.c = x.e = null;
            };
        })();
        /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */ function round(x, sd, rm, r) {
            var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
            // if x is not Infinity or NaN...
            if (xc) {
                // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
                // n is a base 1e14 number, the value of the element of array x.c containing rd.
                // ni is the index of n within x.c.
                // d is the number of digits of n.
                // i is the index of rd within n including leading zeros.
                // j is the actual index of rd within n (if < 0, rd is a leading zero).
                out: {
                    // Get the number of digits of the first element of xc.
                    for(d = 1, k = xc[0]; k >= 10; k /= 10, d++);
                    i = sd - d;
                    // If the rounding digit is in the first element of xc...
                    if (i < 0) {
                        i += LOG_BASE;
                        j = sd;
                        n = xc[ni = 0];
                        // Get the rounding digit at index j of n.
                        rd = n / pows10[d - j - 1] % 10 | 0;
                    } else {
                        ni = mathceil((i + 1) / LOG_BASE);
                        if (ni >= xc.length) {
                            if (r) {
                                // Needed by sqrt.
                                for(; xc.length <= ni; xc.push(0));
                                n = rd = 0;
                                d = 1;
                                i %= LOG_BASE;
                                j = i - LOG_BASE + 1;
                            } else break out;
                        } else {
                            n = k = xc[ni];
                            // Get the number of digits of n.
                            for(d = 1; k >= 10; k /= 10, d++);
                            // Get the index of rd within n.
                            i %= LOG_BASE;
                            // Get the index of rd within n, adjusted for leading zeros.
                            // The number of leading zeros of n is given by LOG_BASE - d.
                            j = i - LOG_BASE + d;
                            // Get the rounding digit at index j of n.
                            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                        }
                    }
                    r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                    // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                    // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                    xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                    r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
                    (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                    if (sd < 1 || !xc[0]) {
                        xc.length = 0;
                        if (r) {
                            // Convert sd to decimal places.
                            sd -= x.e + 1;
                            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                            x.e = -sd || 0;
                        } else // Zero.
                        xc[0] = x.e = 0;
                        return x;
                    }
                    // Remove excess digits.
                    if (i == 0) {
                        xc.length = ni;
                        k = 1;
                        ni--;
                    } else {
                        xc.length = ni + 1;
                        k = pows10[LOG_BASE - i];
                        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                        // j > 0 means i > number of leading zeros of n.
                        xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                    }
                    // Round up?
                    if (r) {
                        for(;;)// If the digit to be rounded up is in the first element of xc...
                        if (ni == 0) {
                            // i will be the length of xc[0] before k is added.
                            for(i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                            j = xc[0] += k;
                            for(k = 1; j >= 10; j /= 10, k++);
                            // if i != k the length has increased.
                            if (i != k) {
                                x.e++;
                                if (xc[0] == BASE) xc[0] = 1;
                            }
                            break;
                        } else {
                            xc[ni] += k;
                            if (xc[ni] != BASE) break;
                            xc[ni--] = 0;
                            k = 1;
                        }
                    }
                    // Remove trailing zeros.
                    for(i = xc.length; xc[--i] === 0; xc.pop());
                }
                // Overflow? Infinity.
                if (x.e > MAX_EXP) x.c = x.e = null;
                else if (x.e < MIN_EXP) x.c = [
                    x.e = 0
                ];
            }
            return x;
        }
        function valueOf(n) {
            var str, e = n.e;
            if (e === null) return n.toString();
            str = coeffToString(n.c);
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, '0');
            return n.s < 0 ? '-' + str : str;
        }
        // PROTOTYPE/INSTANCE METHODS
        /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */ P.absoluteValue = P.abs = function() {
            var x = new BigNumber(this);
            if (x.s < 0) x.s = 1;
            return x;
        };
        /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */ P.comparedTo = function(y, b) {
            return compare(this, new BigNumber(y, b));
        };
        /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.decimalPlaces = P.dp = function(dp, rm) {
            var c, n, v, x = this;
            if (dp != null) {
                intCheck(dp, 0, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), dp + x.e + 1, rm);
            }
            if (!(c = x.c)) return null;
            n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
            // Subtract the number of trailing zeros of the last number.
            if (v = c[v]) for(; v % 10 == 0; v /= 10, n--);
            if (n < 0) n = 0;
            return n;
        };
        /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.dividedBy = P.div = function(y, b) {
            return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */ P.dividedToIntegerBy = P.idiv = function(y, b) {
            return div(this, new BigNumber(y, b), 0, 1);
        };
        /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */ P.exponentiatedBy = P.pow = function(n, m) {
            var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
            n = new BigNumber(n);
            // Allow NaN and ±Infinity, but not other non-integers.
            if (n.c && !n.isInteger()) throw Error(bignumberError + 'Exponent not an integer: ' + valueOf(n));
            if (m != null) m = new BigNumber(m);
            // Exponent of MAX_SAFE_INTEGER is 15.
            nIsBig = n.e > 14;
            // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
            if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
                // The sign of the result of pow when x is negative depends on the evenness of n.
                // If +n overflows to ±Infinity, the evenness of n would be not be known.
                y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
                return m ? y.mod(m) : y;
            }
            nIsNeg = n.s < 0;
            if (m) {
                // x % m returns NaN if abs(m) is zero, or m is NaN.
                if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
                isModExp = !nIsNeg && x.isInteger() && m.isInteger();
                if (isModExp) x = x.mod(m);
            // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
            // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
            } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 240000000 : x.c[0] < 80000000000000 || nIsBig && x.c[0] <= 99999750000000))) {
                // If x is negative and n is odd, k = -0, else k = 0.
                k = x.s < 0 && isOdd(n) ? -0 : 0;
                // If x >= 1, k = ±Infinity.
                if (x.e > -1) k = 1 / k;
                // If n is negative return ±0, else return ±Infinity.
                return new BigNumber(nIsNeg ? 1 / k : k);
            } else if (POW_PRECISION) // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
            if (nIsBig) {
                half = new BigNumber(0.5);
                if (nIsNeg) n.s = 1;
                nIsOdd = isOdd(n);
            } else {
                i = Math.abs(+valueOf(n));
                nIsOdd = i % 2;
            }
            y = new BigNumber(ONE);
            // Performs 54 loop iterations for n of 9007199254740991.
            for(;;){
                if (nIsOdd) {
                    y = y.times(x);
                    if (!y.c) break;
                    if (k) {
                        if (y.c.length > k) y.c.length = k;
                    } else if (isModExp) y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
                }
                if (i) {
                    i = mathfloor(i / 2);
                    if (i === 0) break;
                    nIsOdd = i % 2;
                } else {
                    n = n.times(half);
                    round(n, n.e + 1, 1);
                    if (n.e > 14) nIsOdd = isOdd(n);
                    else {
                        i = +valueOf(n);
                        if (i === 0) break;
                        nIsOdd = i % 2;
                    }
                }
                x = x.times(x);
                if (k) {
                    if (x.c && x.c.length > k) x.c.length = k;
                } else if (isModExp) x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
            if (isModExp) return y;
            if (nIsNeg) y = ONE.div(y);
            return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */ P.integerValue = function(rm) {
            var n = new BigNumber(this);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(n, n.e + 1, rm);
        };
        /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isEqualTo = P.eq = function(y, b) {
            return compare(this, new BigNumber(y, b)) === 0;
        };
        /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */ P.isFinite = function() {
            return !!this.c;
        };
        /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isGreaterThan = P.gt = function(y, b) {
            return compare(this, new BigNumber(y, b)) > 0;
        };
        /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */ P.isInteger = function() {
            return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */ P.isLessThan = P.lt = function(y, b) {
            return compare(this, new BigNumber(y, b)) < 0;
        };
        /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */ P.isLessThanOrEqualTo = P.lte = function(y, b) {
            return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };
        /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */ P.isNaN = function() {
            return !this.s;
        };
        /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */ P.isNegative = function() {
            return this.s < 0;
        };
        /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */ P.isPositive = function() {
            return this.s > 0;
        };
        /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */ P.isZero = function() {
            return !!this.c && this.c[0] == 0;
        };
        /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */ P.minus = function(y, b) {
            var i, j, t, xLTy, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.plus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Either Infinity?
                if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
                // Either zero?
                if (!xc[0] || !yc[0]) // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                ROUNDING_MODE == 3 ? -0 : 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Determine which is the bigger number.
            if (a = xe - ye) {
                if (xLTy = a < 0) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }
                t.reverse();
                // Prepend zeros to equalise exponents.
                for(b = a; b--; t.push(0));
                t.reverse();
            } else {
                // Exponents equal. Check digit by digit.
                j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
                for(a = b = 0; b < j; b++)if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
            // x < y? Point xc to the array of the bigger number.
            if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;
            b = (j = yc.length) - (i = xc.length);
            // Append zeros to xc if shorter.
            // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
            if (b > 0) for(; b--; xc[i++] = 0);
            b = BASE - 1;
            // Subtract yc from xc.
            for(; j > a;){
                if (xc[--j] < yc[j]) {
                    for(i = j; i && !xc[--i]; xc[i] = b);
                    --xc[i];
                    xc[j] += BASE;
                }
                xc[j] -= yc[j];
            }
            // Remove leading zeros and adjust exponent accordingly.
            for(; xc[0] == 0; xc.splice(0, 1), --ye);
            // Zero?
            if (!xc[0]) {
                // Following IEEE 754 (2008) 6.3,
                // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
                y.s = ROUNDING_MODE == 3 ? -1 : 1;
                y.c = [
                    y.e = 0
                ];
                return y;
            }
            // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
            // for finite x and y.
            return normalise(y, xc, ye);
        };
        /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */ P.modulo = P.mod = function(y, b) {
            var q, s, x = this;
            y = new BigNumber(y, b);
            // Return NaN if x is Infinity or NaN, or y is NaN or zero.
            if (!x.c || !y.s || y.c && !y.c[0]) return new BigNumber(NaN);
            else if (!y.c || x.c && !x.c[0]) return new BigNumber(x);
            if (MODULO_MODE == 9) {
                // Euclidian division: q = sign(y) * floor(x / abs(y))
                // r = x - qy    where  0 <= r < abs(y)
                s = y.s;
                y.s = 1;
                q = div(x, y, 0, 3);
                y.s = s;
                q.s *= s;
            } else q = div(x, y, 0, MODULO_MODE);
            y = x.minus(q.times(y));
            // To match JavaScript %, ensure sign of zero is sign of dividend.
            if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
            return y;
        };
        /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */ P.multipliedBy = P.times = function(y, b) {
            var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber(y, b)).c;
            // Either NaN, ±Infinity or ±0?
            if (!xc || !yc || !xc[0] || !yc[0]) {
                // Return NaN if either is NaN, or one is 0 and the other is Infinity.
                if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) y.c = y.e = y.s = null;
                else {
                    y.s *= x.s;
                    // Return ±Infinity if either is ±Infinity.
                    if (!xc || !yc) y.c = y.e = null;
                    else {
                        y.c = [
                            0
                        ];
                        y.e = 0;
                    }
                }
                return y;
            }
            e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
            y.s *= x.s;
            xcL = xc.length;
            ycL = yc.length;
            // Ensure xc points to longer array and xcL to its length.
            if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
            // Initialise the result array with zeros.
            for(i = xcL + ycL, zc = []; i--; zc.push(0));
            base = BASE;
            sqrtBase = SQRT_BASE;
            for(i = ycL; --i >= 0;){
                c = 0;
                ylo = yc[i] % sqrtBase;
                yhi = yc[i] / sqrtBase | 0;
                for(k = xcL, j = i + k; j > i;){
                    xlo = xc[--k] % sqrtBase;
                    xhi = xc[k] / sqrtBase | 0;
                    m = yhi * xlo + xhi * ylo;
                    xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                    c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                    zc[j--] = xlo % base;
                }
                zc[j] = c;
            }
            if (c) ++e;
            else zc.splice(0, 1);
            return normalise(y, zc, e);
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */ P.negated = function() {
            var x = new BigNumber(this);
            x.s = -x.s || null;
            return x;
        };
        /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */ P.plus = function(y, b) {
            var t, x = this, a = x.s;
            y = new BigNumber(y, b);
            b = y.s;
            // Either NaN?
            if (!a || !b) return new BigNumber(NaN);
            // Signs differ?
            if (a != b) {
                y.s = -b;
                return x.minus(y);
            }
            var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
            if (!xe || !ye) {
                // Return ±Infinity if either ±Infinity.
                if (!xc || !yc) return new BigNumber(a / 0);
                // Either zero?
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
            }
            xe = bitFloor(xe);
            ye = bitFloor(ye);
            xc = xc.slice();
            // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
            if (a = xe - ye) {
                if (a > 0) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }
                t.reverse();
                for(; a--; t.push(0));
                t.reverse();
            }
            a = xc.length;
            b = yc.length;
            // Point xc to the longer array, and b to the shorter length.
            if (a - b < 0) t = yc, yc = xc, xc = t, b = a;
            // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
            for(a = 0; b;){
                a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
                xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
            }
            if (a) {
                xc = [
                    a
                ].concat(xc);
                ++ye;
            }
            // No need to check for zero, as +x + +y != 0 && -x + -y != 0
            // ye = MAX_EXP + 1 possible
            return normalise(y, xc, ye);
        };
        /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.precision = P.sd = function(sd, rm) {
            var c, n, v, x = this;
            if (sd != null && sd !== !!sd) {
                intCheck(sd, 1, MAX);
                if (rm == null) rm = ROUNDING_MODE;
                else intCheck(rm, 0, 8);
                return round(new BigNumber(x), sd, rm);
            }
            if (!(c = x.c)) return null;
            v = c.length - 1;
            n = v * LOG_BASE + 1;
            if (v = c[v]) {
                // Subtract the number of trailing zeros of the last element.
                for(; v % 10 == 0; v /= 10, n--);
                // Add the number of digits of the first element.
                for(v = c[0]; v >= 10; v /= 10, n++);
            }
            if (sd && x.e + 1 > n) n = x.e + 1;
            return n;
        };
        /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */ P.shiftedBy = function(k) {
            intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
            return this.times('1e' + k);
        };
        /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */ P.squareRoot = P.sqrt = function() {
            var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber('0.5');
            // Negative/NaN/Infinity/zero?
            if (s !== 1 || !c || !c[0]) return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
            // Initial estimate.
            s = Math.sqrt(+valueOf(x));
            // Math.sqrt underflow/overflow?
            // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
            if (s == 0 || s == 1 / 0) {
                n = coeffToString(c);
                if ((n.length + e) % 2 == 0) n += '0';
                s = Math.sqrt(+n);
                e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
                if (s == 1 / 0) n = '5e' + e;
                else {
                    n = s.toExponential();
                    n = n.slice(0, n.indexOf('e') + 1) + e;
                }
                r = new BigNumber(n);
            } else r = new BigNumber(s + '');
            // Check for zero.
            // r could be zero if MIN_EXP is changed after the this value was created.
            // This would cause a division by zero (x/t) and hence Infinity below, which would cause
            // coeffToString to throw.
            if (r.c[0]) {
                e = r.e;
                s = e + dp;
                if (s < 3) s = 0;
                // Newton-Raphson iteration.
                for(;;){
                    t = r;
                    r = half.times(t.plus(div(x, t, dp, 1)));
                    if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                        // The exponent of r may here be one less than the final result exponent,
                        // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                        // are indexed correctly.
                        if (r.e < e) --s;
                        n = n.slice(s - 3, s + 1);
                        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                        // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                        // iteration.
                        if (n == '9999' || !rep && n == '4999') {
                            // On the first iteration only, check to see if rounding up gives the
                            // exact result as the nines may infinitely repeat.
                            if (!rep) {
                                round(t, t.e + DECIMAL_PLACES + 2, 0);
                                if (t.times(t).eq(x)) {
                                    r = t;
                                    break;
                                }
                            }
                            dp += 4;
                            s += 4;
                            rep = 1;
                        } else {
                            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                            // result. If not, then there are further digits and m will be truthy.
                            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                                // Truncate to the first rounding digit.
                                round(r, r.e + DECIMAL_PLACES + 2, 1);
                                m = !r.times(r).eq(x);
                            }
                            break;
                        }
                    }
                }
            }
            return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toExponential = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp++;
            }
            return format(this, dp, rm, 1);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */ P.toFixed = function(dp, rm) {
            if (dp != null) {
                intCheck(dp, 0, MAX);
                dp = dp + this.e + 1;
            }
            return format(this, dp, rm);
        };
        /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */ P.toFormat = function(dp, rm, format) {
            var str, x = this;
            if (format == null) {
                if (dp != null && rm && typeof rm == 'object') {
                    format = rm;
                    rm = null;
                } else if (dp && typeof dp == 'object') {
                    format = dp;
                    dp = rm = null;
                } else format = FORMAT;
            } else if (typeof format != 'object') throw Error(bignumberError + 'Argument not an object: ' + format);
            str = x.toFixed(dp, rm);
            if (x.c) {
                var i, arr = str.split('.'), g1 = +format.groupSize, g2 = +format.secondaryGroupSize, groupSeparator = format.groupSeparator || '', intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
                if (g2) i = g1, g1 = g2, g2 = i, len -= i;
                if (g1 > 0 && len > 0) {
                    i = len % g1 || g1;
                    intPart = intDigits.substr(0, i);
                    for(; i < len; i += g1)intPart += groupSeparator + intDigits.substr(i, g1);
                    if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                    if (isNeg) intPart = '-' + intPart;
                }
                str = fractionPart ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize) ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + (format.fractionGroupSeparator || '')) : fractionPart) : intPart;
            }
            return (format.prefix || '') + str + (format.suffix || '');
        };
        /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */ P.toFraction = function(md) {
            var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
            if (md != null) {
                n = new BigNumber(md);
                // Throw if md is less than one or is not an integer, unless it is Infinity.
                if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) throw Error(bignumberError + 'Argument ' + (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
            }
            if (!xc) return new BigNumber(x);
            d = new BigNumber(ONE);
            n1 = d0 = new BigNumber(ONE);
            d1 = n0 = new BigNumber(ONE);
            s = coeffToString(xc);
            // Determine initial denominator.
            // d is a power of 10 and the minimum max denominator that specifies the value exactly.
            e = d.e = s.length - x.e - 1;
            d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
            md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
            exp = MAX_EXP;
            MAX_EXP = 1 / 0;
            n = new BigNumber(s);
            // n0 = d1 = 0
            n0.c[0] = 0;
            for(;;){
                q = div(n, d, 0, 1);
                d2 = d0.plus(q.times(d1));
                if (d2.comparedTo(md) == 1) break;
                d0 = d1;
                d1 = d2;
                n1 = n0.plus(q.times(d2 = n1));
                n0 = d2;
                d = n.minus(q.times(d2 = d));
                n = d2;
            }
            d2 = div(md.minus(d0), d1, 0, 1);
            n0 = n0.plus(d2.times(n1));
            d0 = d0.plus(d2.times(d1));
            n0.s = n1.s = x.s;
            e = e * 2;
            // Determine which fraction is closer to x, n0/d0 or n1/d1
            r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [
                n1,
                d1
            ] : [
                n0,
                d0
            ];
            MAX_EXP = exp;
            return r;
        };
        /*
     * Return the value of this BigNumber converted to a number primitive.
     */ P.toNumber = function() {
            return +valueOf(this);
        };
        /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */ P.toPrecision = function(sd, rm) {
            if (sd != null) intCheck(sd, 1, MAX);
            return format(this, sd, rm, 2);
        };
        /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */ P.toString = function(b) {
            var str, n = this, s = n.s, e = n.e;
            // Infinity or NaN?
            if (e === null) {
                if (s) {
                    str = 'Infinity';
                    if (s < 0) str = '-' + str;
                } else str = 'NaN';
            } else {
                if (b == null) str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, '0');
                else if (b === 10) {
                    n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                    str = toFixedPoint(coeffToString(n.c), n.e, '0');
                } else {
                    intCheck(b, 2, ALPHABET.length, 'Base');
                    str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
                }
                if (s < 0 && n.c[0]) str = '-' + str;
            }
            return str;
        };
        /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */ P.valueOf = P.toJSON = function() {
            return valueOf(this);
        };
        P._isBigNumber = true;
        if (configObject != null) BigNumber.set(configObject);
        return BigNumber;
    }
    // PRIVATE HELPER FUNCTIONS
    // These functions don't need access to variables,
    // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
    function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
    }
    // Return a coefficient array as a string of base 10 digits.
    function coeffToString(a) {
        var s, z, i = 1, j = a.length, r = a[0] + '';
        for(; i < j;){
            s = a[i++] + '';
            z = LOG_BASE - s.length;
            for(; z--; s = '0' + s);
            r += s;
        }
        // Determine trailing zeros.
        for(j = r.length; r.charCodeAt(--j) === 48;);
        return r.slice(0, j + 1 || 1);
    }
    // Compare the value of BigNumbers x and y.
    function compare(x, y) {
        var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
        // Either NaN?
        if (!i || !j) return null;
        a = xc && !xc[0];
        b = yc && !yc[0];
        // Either zero?
        if (a || b) return a ? b ? 0 : -j : i;
        // Signs differ?
        if (i != j) return i;
        a = i < 0;
        b = k == l;
        // Either Infinity?
        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
        // Compare exponents.
        if (!b) return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        // Compare digit by digit.
        for(i = 0; i < j; i++)if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
        // Compare lengths.
        return k == l ? 0 : k > l ^ a ? 1 : -1;
    }
    /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */ function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) throw Error(bignumberError + (name || 'Argument') + (typeof n == 'number' ? n < min || n > max ? ' out of range: ' : ' not an integer: ' : ' not a primitive number: ') + String(n));
    }
    // Assumes finite n.
    function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
    }
    function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) + (e < 0 ? 'e' : 'e+') + e;
    }
    function toFixedPoint(str, e, z) {
        var len, zs;
        // Negative exponent?
        if (e < 0) {
            // Prepend zeros.
            for(zs = z + '.'; ++e; zs += z);
            str = zs + str;
        // Positive exponent
        } else {
            len = str.length;
            // Append zeros.
            if (++e > len) {
                for(zs = z, e -= len; --e; zs += z);
                str += zs;
            } else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
        }
        return str;
    }
    // EXPORT
    BigNumber = clone();
    BigNumber['default'] = BigNumber.BigNumber = BigNumber;
    // AMD.
    if (typeof define == 'function' && define.amd) define(function() {
        return BigNumber;
    });
    else if (typeof module != 'undefined' && module.exports) module.exports = BigNumber;
    else {
        if (!globalObject) globalObject = typeof self != 'undefined' && self ? self : window;
        globalObject.BigNumber = BigNumber;
    }
})(this);

},{}],"7UsJf":[function(require,module,exports) {
const b2b = require('./blake2b');
const b2s = require('./blake2s');
module.exports = {
    blake2b: b2b.blake2b,
    blake2bHex: b2b.blake2bHex,
    blake2bInit: b2b.blake2bInit,
    blake2bUpdate: b2b.blake2bUpdate,
    blake2bFinal: b2b.blake2bFinal,
    blake2s: b2s.blake2s,
    blake2sHex: b2s.blake2sHex,
    blake2sInit: b2s.blake2sInit,
    blake2sUpdate: b2s.blake2sUpdate,
    blake2sFinal: b2s.blake2sFinal
};

},{"./blake2b":"fK8hF","./blake2s":"55Ha8"}],"fK8hF":[function(require,module,exports) {
// Blake2B in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch
const util = require('./util');
// 64-bit unsigned addition
// Sets v[a,a+1] += v[b,b+1]
// v should be a Uint32Array
function ADD64AA(v, a, b) {
    const o0 = v[a] + v[b];
    let o1 = v[a + 1] + v[b + 1];
    if (o0 >= 4294967296) o1++;
    v[a] = o0;
    v[a + 1] = o1;
}
// 64-bit unsigned addition
// Sets v[a,a+1] += b
// b0 is the low 32 bits of b, b1 represents the high 32 bits
function ADD64AC(v, a, b0, b1) {
    let o0 = v[a] + b0;
    if (b0 < 0) o0 += 4294967296;
    let o1 = v[a + 1] + b1;
    if (o0 >= 4294967296) o1++;
    v[a] = o0;
    v[a + 1] = o1;
}
// Little-endian byte access
function B2B_GET32(arr, i) {
    return arr[i] ^ arr[i + 1] << 8 ^ arr[i + 2] << 16 ^ arr[i + 3] << 24;
}
// G Mixing function
// The ROTRs are inlined for speed
function B2B_G(a, b, c, d, ix, iy) {
    const x0 = m[ix];
    const x1 = m[ix + 1];
    const y0 = m[iy];
    const y1 = m[iy + 1];
    ADD64AA(v, a, b) // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
    ;
    ADD64AC(v, a, x0, x1) // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits
    ;
    // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
    let xor0 = v[d] ^ v[a];
    let xor1 = v[d + 1] ^ v[a + 1];
    v[d] = xor1;
    v[d + 1] = xor0;
    ADD64AA(v, c, d);
    // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
    xor0 = v[b] ^ v[c];
    xor1 = v[b + 1] ^ v[c + 1];
    v[b] = xor0 >>> 24 ^ xor1 << 8;
    v[b + 1] = xor1 >>> 24 ^ xor0 << 8;
    ADD64AA(v, a, b);
    ADD64AC(v, a, y0, y1);
    // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
    xor0 = v[d] ^ v[a];
    xor1 = v[d + 1] ^ v[a + 1];
    v[d] = xor0 >>> 16 ^ xor1 << 16;
    v[d + 1] = xor1 >>> 16 ^ xor0 << 16;
    ADD64AA(v, c, d);
    // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
    xor0 = v[b] ^ v[c];
    xor1 = v[b + 1] ^ v[c + 1];
    v[b] = xor1 >>> 31 ^ xor0 << 1;
    v[b + 1] = xor0 >>> 31 ^ xor1 << 1;
}
// Initialization Vector
const BLAKE2B_IV32 = new Uint32Array([
    4089235720,
    1779033703,
    2227873595,
    3144134277,
    4271175723,
    1013904242,
    1595750129,
    2773480762,
    2917565137,
    1359893119,
    725511199,
    2600822924,
    4215389547,
    528734635,
    327033209,
    1541459225
]);
const SIGMA8 = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9,
    12,
    5,
    1,
    15,
    14,
    13,
    4,
    10,
    0,
    7,
    6,
    3,
    9,
    2,
    8,
    11,
    13,
    11,
    7,
    14,
    12,
    1,
    3,
    9,
    5,
    0,
    15,
    4,
    8,
    6,
    2,
    10,
    6,
    15,
    14,
    9,
    11,
    3,
    0,
    8,
    12,
    2,
    13,
    7,
    1,
    4,
    10,
    5,
    10,
    2,
    8,
    4,
    7,
    6,
    1,
    5,
    15,
    11,
    9,
    14,
    3,
    12,
    13,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3
];
// These are offsets into a uint64 buffer.
// Multiply them all by 2 to make them offsets into a uint32 buffer,
// because this is Javascript and we don't have uint64s
const SIGMA82 = new Uint8Array(SIGMA8.map(function(x) {
    return x * 2;
}));
// Compression function. 'last' flag indicates last block.
// Note we're representing 16 uint64s as 32 uint32s
const v = new Uint32Array(32);
const m = new Uint32Array(32);
function blake2bCompress(ctx, last) {
    let i = 0;
    // init work variables
    for(i = 0; i < 16; i++){
        v[i] = ctx.h[i];
        v[i + 16] = BLAKE2B_IV32[i];
    }
    // low 64 bits of offset
    v[24] = v[24] ^ ctx.t;
    v[25] = v[25] ^ ctx.t / 4294967296;
    // high 64 bits not supported, offset may not be higher than 2**53-1
    // last block flag set ?
    if (last) {
        v[28] = ~v[28];
        v[29] = ~v[29];
    }
    // get little-endian words
    for(i = 0; i < 32; i++)m[i] = B2B_GET32(ctx.b, 4 * i);
    // twelve rounds of mixing
    // uncomment the DebugPrint calls to log the computation
    // and match the RFC sample documentation
    // util.debugPrint('          m[16]', m, 64)
    for(i = 0; i < 12; i++){
        // util.debugPrint('   (i=' + (i < 10 ? ' ' : '') + i + ') v[16]', v, 64)
        B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
        B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
        B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
        B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
        B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
        B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
        B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
        B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
    }
    // util.debugPrint('   (i=12) v[16]', v, 64)
    for(i = 0; i < 16; i++)ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16];
// util.debugPrint('h[8]', ctx.h, 64)
}
// Creates a BLAKE2b hashing context
// Requires an output length between 1 and 64 bytes
// Takes an optional Uint8Array key
function blake2bInit(outlen, key) {
    if (outlen === 0 || outlen > 64) throw new Error('Illegal output length, expected 0 < length <= 64');
    if (key && key.length > 64) throw new Error('Illegal key, expected Uint8Array with 0 < length <= 64');
    // state, 'param block'
    const ctx = {
        b: new Uint8Array(128),
        h: new Uint32Array(16),
        t: 0,
        c: 0,
        outlen: outlen // output length in bytes
    };
    // initialize hash state
    for(let i = 0; i < 16; i++)ctx.h[i] = BLAKE2B_IV32[i];
    const keylen = key ? key.length : 0;
    ctx.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
    // key the hash, if applicable
    if (key) {
        blake2bUpdate(ctx, key);
        // at the end
        ctx.c = 128;
    }
    return ctx;
}
// Updates a BLAKE2b streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2bUpdate(ctx, input) {
    for(let i = 0; i < input.length; i++){
        if (ctx.c === 128) {
            // buffer full ?
            ctx.t += ctx.c // add counters
            ;
            blake2bCompress(ctx, false) // compress (not last)
            ;
            ctx.c = 0 // counter to zero
            ;
        }
        ctx.b[ctx.c++] = input[i];
    }
}
// Completes a BLAKE2b streaming hash
// Returns a Uint8Array containing the message digest
function blake2bFinal(ctx) {
    ctx.t += ctx.c // mark last block offset
    ;
    while(ctx.c < 128)// fill up with zeros
    ctx.b[ctx.c++] = 0;
    blake2bCompress(ctx, true) // final block flag = 1
    ;
    // little endian convert and store
    const out = new Uint8Array(ctx.outlen);
    for(let i = 0; i < ctx.outlen; i++)out[i] = ctx.h[i >> 2] >> 8 * (i & 3);
    return out;
}
// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function blake2b(input, key, outlen) {
    // preprocess inputs
    outlen = outlen || 64;
    input = util.normalizeInput(input);
    // do the math
    const ctx = blake2bInit(outlen, key);
    blake2bUpdate(ctx, input);
    return blake2bFinal(ctx);
}
// Computes the BLAKE2B hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function blake2bHex(input, key, outlen) {
    const output = blake2b(input, key, outlen);
    return util.toHex(output);
}
module.exports = {
    blake2b: blake2b,
    blake2bHex: blake2bHex,
    blake2bInit: blake2bInit,
    blake2bUpdate: blake2bUpdate,
    blake2bFinal: blake2bFinal
};

},{"./util":"iS3fi"}],"iS3fi":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
const ERROR_MSG_INPUT = 'Input must be an string, Buffer or Uint8Array';
// For convenience, let people hash a string, not just a Uint8Array
function normalizeInput(input) {
    let ret;
    if (input instanceof Uint8Array) ret = input;
    else if (input instanceof Buffer) ret = new Uint8Array(input);
    else if (typeof input === 'string') ret = new Uint8Array(Buffer.from(input, 'utf8'));
    else throw new Error(ERROR_MSG_INPUT);
    return ret;
}
// Converts a Uint8Array to a hexadecimal string
// For example, toHex([255, 0, 255]) returns "ff00ff"
function toHex(bytes) {
    return Array.prototype.map.call(bytes, function(n) {
        return (n < 16 ? '0' : '') + n.toString(16);
    }).join('');
}
// Converts any value in [0...2^32-1] to an 8-character hex string
function uint32ToHex(val) {
    return (4294967296 + val).toString(16).substring(1);
}
// For debugging: prints out hash state in the same format as the RFC
// sample computation exactly, so that you can diff
function debugPrint(label, arr, size) {
    let msg = '\n' + label + ' = ';
    for(let i = 0; i < arr.length; i += 2){
        if (size === 32) {
            msg += uint32ToHex(arr[i]).toUpperCase();
            msg += ' ';
            msg += uint32ToHex(arr[i + 1]).toUpperCase();
        } else if (size === 64) {
            msg += uint32ToHex(arr[i + 1]).toUpperCase();
            msg += uint32ToHex(arr[i]).toUpperCase();
        } else throw new Error('Invalid size ' + size);
        if (i % 6 === 4) msg += '\n' + new Array(label.length + 4).join(' ');
        else if (i < arr.length - 2) msg += ' ';
    }
    console.log(msg);
}
// For performance testing: generates N bytes of input, hashes M times
// Measures and prints MB/second hash performance each time
function testSpeed(hashFn, N, M) {
    let startMs = new Date().getTime();
    const input = new Uint8Array(N);
    for(let i = 0; i < N; i++)input[i] = i % 256;
    const genMs = new Date().getTime();
    console.log('Generated random input in ' + (genMs - startMs) + 'ms');
    startMs = genMs;
    for(let i1 = 0; i1 < M; i1++){
        const hashHex = hashFn(input);
        const hashMs = new Date().getTime();
        const ms = hashMs - startMs;
        startMs = hashMs;
        console.log('Hashed in ' + ms + 'ms: ' + hashHex.substring(0, 20) + '...');
        console.log(Math.round(N / 1048576 / (ms / 1000) * 100) / 100 + ' MB PER SECOND');
    }
}
module.exports = {
    normalizeInput: normalizeInput,
    toHex: toHex,
    debugPrint: debugPrint,
    testSpeed: testSpeed
};

},{"buffer":"bOetu"}],"55Ha8":[function(require,module,exports) {
// BLAKE2s hash function in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch
const util = require('./util');
// Little-endian byte access.
// Expects a Uint8Array and an index
// Returns the little-endian uint32 at v[i..i+3]
function B2S_GET32(v, i) {
    return v[i] ^ v[i + 1] << 8 ^ v[i + 2] << 16 ^ v[i + 3] << 24;
}
// Mixing function G.
function B2S_G(a, b, c, d, x, y) {
    v[a] = v[a] + v[b] + x;
    v[d] = ROTR32(v[d] ^ v[a], 16);
    v[c] = v[c] + v[d];
    v[b] = ROTR32(v[b] ^ v[c], 12);
    v[a] = v[a] + v[b] + y;
    v[d] = ROTR32(v[d] ^ v[a], 8);
    v[c] = v[c] + v[d];
    v[b] = ROTR32(v[b] ^ v[c], 7);
}
// 32-bit right rotation
// x should be a uint32
// y must be between 1 and 31, inclusive
function ROTR32(x, y) {
    return x >>> y ^ x << 32 - y;
}
// Initialization Vector.
const BLAKE2S_IV = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
]);
const SIGMA = new Uint8Array([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    14,
    10,
    4,
    8,
    9,
    15,
    13,
    6,
    1,
    12,
    0,
    2,
    11,
    7,
    5,
    3,
    11,
    8,
    12,
    0,
    5,
    2,
    15,
    13,
    10,
    14,
    3,
    6,
    7,
    1,
    9,
    4,
    7,
    9,
    3,
    1,
    13,
    12,
    11,
    14,
    2,
    6,
    5,
    10,
    4,
    0,
    15,
    8,
    9,
    0,
    5,
    7,
    2,
    4,
    10,
    15,
    14,
    1,
    11,
    12,
    6,
    8,
    3,
    13,
    2,
    12,
    6,
    10,
    0,
    11,
    8,
    3,
    4,
    13,
    7,
    5,
    15,
    14,
    1,
    9,
    12,
    5,
    1,
    15,
    14,
    13,
    4,
    10,
    0,
    7,
    6,
    3,
    9,
    2,
    8,
    11,
    13,
    11,
    7,
    14,
    12,
    1,
    3,
    9,
    5,
    0,
    15,
    4,
    8,
    6,
    2,
    10,
    6,
    15,
    14,
    9,
    11,
    3,
    0,
    8,
    12,
    2,
    13,
    7,
    1,
    4,
    10,
    5,
    10,
    2,
    8,
    4,
    7,
    6,
    1,
    5,
    15,
    11,
    9,
    14,
    3,
    12,
    13,
    0
]);
// Compression function. "last" flag indicates last block
const v = new Uint32Array(16);
const m = new Uint32Array(16);
function blake2sCompress(ctx, last) {
    let i = 0;
    for(i = 0; i < 8; i++){
        // init work variables
        v[i] = ctx.h[i];
        v[i + 8] = BLAKE2S_IV[i];
    }
    v[12] ^= ctx.t // low 32 bits of offset
    ;
    v[13] ^= ctx.t / 4294967296 // high 32 bits
    ;
    if (last) // last block flag set ?
    v[14] = ~v[14];
    for(i = 0; i < 16; i++)// get little-endian words
    m[i] = B2S_GET32(ctx.b, 4 * i);
    // ten rounds of mixing
    // uncomment the DebugPrint calls to log the computation
    // and match the RFC sample documentation
    // util.debugPrint('          m[16]', m, 32)
    for(i = 0; i < 10; i++){
        // util.debugPrint('   (i=' + i + ')  v[16]', v, 32)
        B2S_G(0, 4, 8, 12, m[SIGMA[i * 16 + 0]], m[SIGMA[i * 16 + 1]]);
        B2S_G(1, 5, 9, 13, m[SIGMA[i * 16 + 2]], m[SIGMA[i * 16 + 3]]);
        B2S_G(2, 6, 10, 14, m[SIGMA[i * 16 + 4]], m[SIGMA[i * 16 + 5]]);
        B2S_G(3, 7, 11, 15, m[SIGMA[i * 16 + 6]], m[SIGMA[i * 16 + 7]]);
        B2S_G(0, 5, 10, 15, m[SIGMA[i * 16 + 8]], m[SIGMA[i * 16 + 9]]);
        B2S_G(1, 6, 11, 12, m[SIGMA[i * 16 + 10]], m[SIGMA[i * 16 + 11]]);
        B2S_G(2, 7, 8, 13, m[SIGMA[i * 16 + 12]], m[SIGMA[i * 16 + 13]]);
        B2S_G(3, 4, 9, 14, m[SIGMA[i * 16 + 14]], m[SIGMA[i * 16 + 15]]);
    }
    // util.debugPrint('   (i=10) v[16]', v, 32)
    for(i = 0; i < 8; i++)ctx.h[i] ^= v[i] ^ v[i + 8];
// util.debugPrint('h[8]', ctx.h, 32)
}
// Creates a BLAKE2s hashing context
// Requires an output length between 1 and 32 bytes
// Takes an optional Uint8Array key
function blake2sInit(outlen, key) {
    if (!(outlen > 0 && outlen <= 32)) throw new Error('Incorrect output length, should be in [1, 32]');
    const keylen = key ? key.length : 0;
    if (key && !(keylen > 0 && keylen <= 32)) throw new Error('Incorrect key length, should be in [1, 32]');
    const ctx = {
        h: new Uint32Array(BLAKE2S_IV),
        b: new Uint8Array(64),
        c: 0,
        t: 0,
        outlen: outlen // output length in bytes
    };
    ctx.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
    if (keylen > 0) {
        blake2sUpdate(ctx, key);
        ctx.c = 64 // at the end
        ;
    }
    return ctx;
}
// Updates a BLAKE2s streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2sUpdate(ctx, input) {
    for(let i = 0; i < input.length; i++){
        if (ctx.c === 64) {
            // buffer full ?
            ctx.t += ctx.c // add counters
            ;
            blake2sCompress(ctx, false) // compress (not last)
            ;
            ctx.c = 0 // counter to zero
            ;
        }
        ctx.b[ctx.c++] = input[i];
    }
}
// Completes a BLAKE2s streaming hash
// Returns a Uint8Array containing the message digest
function blake2sFinal(ctx) {
    ctx.t += ctx.c // mark last block offset
    ;
    while(ctx.c < 64)// fill up with zeros
    ctx.b[ctx.c++] = 0;
    blake2sCompress(ctx, true) // final block flag = 1
    ;
    // little endian convert and store
    const out = new Uint8Array(ctx.outlen);
    for(let i = 0; i < ctx.outlen; i++)out[i] = ctx.h[i >> 2] >> 8 * (i & 3) & 255;
    return out;
}
// Computes the BLAKE2S hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2s(input, key, outlen) {
    // preprocess inputs
    outlen = outlen || 32;
    input = util.normalizeInput(input);
    // do the math
    const ctx = blake2sInit(outlen, key);
    blake2sUpdate(ctx, input);
    return blake2sFinal(ctx);
}
// Computes the BLAKE2S hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2sHex(input, key, outlen) {
    const output = blake2s(input, key, outlen);
    return util.toHex(output);
}
module.exports = {
    blake2s: blake2s,
    blake2sHex: blake2sHex,
    blake2sInit: blake2sInit,
    blake2sUpdate: blake2sUpdate,
    blake2sFinal: blake2sFinal
};

},{"./util":"iS3fi"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ikBUq":[function(require,module,exports) {
/*!
 * bulma-toast 2.4.1 
 * (c) 2018-present @rfoel <rafaelfr@outlook.com> 
 * Released under the MIT License.
 */ (function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], b) : (a = "undefined" == typeof globalThis ? a || self : globalThis, b(a.bulmaToast = {
    }));
})(this, function(a) {
    'use strict';
    function b(a, b) {
        var c = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(a);
            b && (d = d.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), c.push.apply(c, d);
        }
        return c;
    }
    function c(a) {
        for(var c, d = 1; d < arguments.length; d++)c = null == arguments[d] ? {
        } : arguments[d], d % 2 ? b(Object(c), !0).forEach(function(b) {
            g(a, b, c[b]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : b(Object(c)).forEach(function(b) {
            Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
        });
        return a;
    }
    function d(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    function e(a, b) {
        for(var c, d = 0; d < b.length; d++)c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    function f(a, b, c) {
        return b && e(a.prototype, b), c && e(a, c), a;
    }
    function g(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    function h() {
        var a;
        return null !== (a = o) && void 0 !== a ? a : document;
    }
    function i(a, b, c, d, e, f) {
        if (n.position) return n.position;
        var g = h().createElement("div");
        return g.setAttribute("style", "width:100%;z-index:99999;position:fixed;pointer-events:none;display:flex;flex-direction:column;padding:15px;" + p(b, c, d, e, f)), a.appendChild(g), n.position = g, g;
    }
    function j(a) {
        for(var b in n)n[b].remove();
        n = {
        }, o = a;
    }
    function k(a) {
        if (!a.message) throw new Error("message is required");
        var b = c(c({
        }, m), a), d = new q(b), e = i(b.appendTo || h().body, b.position || m.position, b.offsetTop || m.offsetTop, b.offsetBottom || m.offsetBottom, b.offsetLeft || m.offsetLeft, b.offsetRight || m.offsetRight);
        if (b.single) for(var f = e.lastElementChild; f;)e.removeChild(f), f = e.lastElementChild;
        e.appendChild(d.element);
    }
    var l = {
        duration: 2000,
        position: "top-right",
        closeOnClick: !0,
        opacity: 1,
        single: !1,
        offsetTop: 0,
        offsetBottom: 0,
        offsetLeft: 0,
        offsetRight: 0,
        extraClasses: ""
    }, m = c({
    }, l), n = {
    }, o = null, p = function(a, b, c, d, e) {
        return "top-left" === a ? "left:".concat(d, ";top:").concat(b, ";text-align:left;align-items:flex-start;") : "top-right" === a ? "right:".concat(e, ";top:").concat(b, ";text-align:right;align-items:flex-end;") : "top-center" === a ? "top:".concat(b, ";left:0;right:0;text-align:center;align-items:center;") : "bottom-left" === a ? "left:".concat(d, ";bottom:").concat(c, ";text-align:left;align-items:flex-start;") : "bottom-right" === a ? "right:".concat(e, ";bottom:").concat(c, ";text-align:right;align-items:flex-end;") : "bottom-center" === a ? "bottom:".concat(c, ";left:0;right:0;text-align:center;align-items:center;") : "center" === a ? "top:0;left:0;right:0;bottom:0;flex-flow:column;justify-content:center;align-items:center;" : void 0;
    }, q = /*#__PURE__*/ function() {
        function a(b) {
            var c = this;
            d(this, a), this.element = h().createElement("div"), this.opacity = b.opacity, this.type = b.type, this.animate = b.animate, this.dismissible = b.dismissible, this.closeOnClick = b.closeOnClick, this.message = b.message, this.duration = b.duration, this.pauseOnHover = b.pauseOnHover, this.offsetTop = b.offsetTop, this.offsetBottom = b.offsetBottom, this.offsetLeft = b.offsetLeft, this.offsetRight = b.offsetRight, this.extraClasses = b.extraClasses;
            var e = "width:auto;pointer-events:auto;display:inline-flex;white-space:pre-wrap;opacity:".concat(this.opacity, ";"), f = [
                "notification",
                this.extraClasses
            ];
            if (this.type && f.push(this.type), this.animate && this.animate["in"]) {
                var g = "animate__".concat(this.animate["in"]), i = this.animate.speed ? "animate__".concat(this.animate.speed) : "animate__faster";
                f.push("animate__animated ".concat(g, " ").concat(i)), this.onAnimationEnd(function() {
                    return c.element.classList.remove(g);
                });
            }
            if (this.element.className = f.join(" "), this.dismissible) {
                var j = h().createElement("button");
                j.className = "delete", j.addEventListener("click", function() {
                    c.destroy();
                }), this.element.insertAdjacentElement("afterbegin", j);
            } else e += "padding: 1.25rem 1.5rem";
            this.closeOnClick && this.element.addEventListener("click", function() {
                c.destroy();
            }), this.element.setAttribute("style", e), "string" == typeof this.message ? this.element.insertAdjacentHTML("beforeend", this.message) : this.element.appendChild(this.message);
            var k = new r(function() {
                c.destroy();
            }, this.duration);
            this.pauseOnHover && (this.element.addEventListener("mouseover", function() {
                k.pause();
            }), this.element.addEventListener("mouseout", function() {
                k.resume();
            }));
        }
        return f(a, [
            {
                key: "destroy",
                value: function() {
                    var a = this;
                    this.animate && this.animate.out ? (this.element.classList.add("animate__".concat(this.animate.out)), this.onAnimationEnd(function() {
                        a.removeParent(a.element.parentNode), a.element.remove(), delete n.position;
                    })) : (this.removeParent(this.element.parentNode), this.element.remove(), delete n.position);
                }
            },
            {
                key: "removeParent",
                value: function(a) {
                    a && 1 >= a.children.length && a.remove();
                }
            },
            {
                key: "onAnimationEnd",
                value: function() {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function() {
                    }, b = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "mozAnimationEnd",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                    for(var c in b)if (void 0 !== this.element.style[c]) {
                        this.element.addEventListener(b[c], function() {
                            return a();
                        });
                        break;
                    }
                }
            }
        ]), a;
    }(), r = /*#__PURE__*/ function() {
        function a(b, c) {
            d(this, a), this.timer, this.start, this.remaining = c, this.callback = b, this.resume();
        }
        return f(a, [
            {
                key: "pause",
                value: function() {
                    "undefined" == typeof document || (window.clearTimeout(this.timer), this.remaining -= new Date - this.start);
                }
            },
            {
                key: "resume",
                value: function() {
                    "undefined" == typeof document || (this.start = new Date, window.clearTimeout(this.timer), this.timer = window.setTimeout(this.callback, this.remaining));
                }
            }
        ]), a;
    }();
    a.resetDefaults = function() {
        m = c({
        }, l);
    }, a.setDefaults = function(a) {
        m = c(c({
        }, l), a);
    }, a.setDoc = j, a.toast = k, Object.defineProperty(a, "__esModule", {
        value: !0
    });
});

},{}],"hJuz8":[function(require,module,exports) {
const jarallax = require('./src/jarallax.esm').default;
const jarallaxVideo = require('./src/jarallax-video.esm').default;
const jarallaxElement = require('./src/jarallax-element.esm').default;
module.exports = {
    jarallax,
    jarallaxElement () {
        return jarallaxElement(jarallax);
    },
    jarallaxVideo () {
        return jarallaxVideo(jarallax);
    }
};

},{"./src/jarallax.esm":"46NDS","./src/jarallax-video.esm":"kX2WE","./src/jarallax-element.esm":"cpdW1"}],"46NDS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _liteReady = require("lite-ready");
var _liteReadyDefault = parcelHelpers.interopDefault(_liteReady);
var _global = require("global");
const { navigator ,  } = _global.window;
const isIE = -1 < navigator.userAgent.indexOf('MSIE ') || -1 < navigator.userAgent.indexOf('Trident/') || -1 < navigator.userAgent.indexOf('Edge/');
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const supportTransform = (()=>{
    const prefixes = 'transform WebkitTransform MozTransform'.split(' ');
    const div = document.createElement('div');
    for(let i = 0; i < prefixes.length; i += 1){
        if (div && div.style[prefixes[i]] !== undefined) return prefixes[i];
    }
    return false;
})();
let $deviceHelper;
/**
 * The most popular mobile browsers changes height after page scroll and this generates image jumping.
 * We can fix it using this workaround with vh units.
 */ function getDeviceHeight() {
    if (!$deviceHelper && document.body) {
        $deviceHelper = document.createElement('div');
        $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
        document.body.appendChild($deviceHelper);
    }
    return ($deviceHelper ? $deviceHelper.clientHeight : 0) || _global.window.innerHeight || document.documentElement.clientHeight;
}
// Window height data
let wndH;
function updateWndVars() {
    if (isMobile) wndH = getDeviceHeight();
    else wndH = _global.window.innerHeight || document.documentElement.clientHeight;
}
updateWndVars();
_global.window.addEventListener('resize', updateWndVars);
_global.window.addEventListener('orientationchange', updateWndVars);
_global.window.addEventListener('load', updateWndVars);
_liteReadyDefault.default(()=>{
    updateWndVars({
        type: 'dom-loaded'
    });
});
// list with all jarallax instances
// need to render all in one scroll/resize event
const jarallaxList = [];
// get all parents of the element.
function getParents(elem) {
    const parents = [];
    while(null !== elem.parentElement){
        elem = elem.parentElement;
        if (1 === elem.nodeType) parents.push(elem);
    }
    return parents;
}
function updateParallax() {
    if (!jarallaxList.length) return;
    jarallaxList.forEach((data, k)=>{
        const { instance , oldData ,  } = data;
        const clientRect = instance.$item.getBoundingClientRect();
        const newData = {
            width: clientRect.width,
            height: clientRect.height,
            top: clientRect.top,
            bottom: clientRect.bottom,
            wndW: _global.window.innerWidth,
            wndH
        };
        const isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
        const isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
        jarallaxList[k].oldData = newData;
        if (isResized) instance.onResize();
        if (isScrolled) instance.onScroll();
    });
    _global.window.requestAnimationFrame(updateParallax);
}
let instanceID = 0;
// Jarallax class
class Jarallax {
    constructor(item, userOptions){
        const self = this;
        self.instanceID = instanceID;
        instanceID += 1;
        self.$item = item;
        self.defaults = {
            type: 'scroll',
            speed: 0.5,
            imgSrc: null,
            imgElement: '.jarallax-img',
            imgSize: 'cover',
            imgPosition: '50% 50%',
            imgRepeat: 'no-repeat',
            keepImg: false,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: false,
            disableVideo: false,
            // video
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: true,
            videoPlayOnlyVisible: true,
            videoLazyLoading: true,
            // events
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null
        };
        // prepare data-options
        const dataOptions = self.$item.dataset || {
        };
        const pureDataOptions = {
        };
        Object.keys(dataOptions).forEach((key)=>{
            const loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
            if (loweCaseOption && 'undefined' !== typeof self.defaults[loweCaseOption]) pureDataOptions[loweCaseOption] = dataOptions[key];
        });
        self.options = self.extend({
        }, self.defaults, pureDataOptions, userOptions);
        self.pureOptions = self.extend({
        }, self.options);
        // prepare 'true' and 'false' strings to boolean
        Object.keys(self.options).forEach((key)=>{
            if ('true' === self.options[key]) self.options[key] = true;
            else if ('false' === self.options[key]) self.options[key] = false;
        });
        // fix speed option [-1.0, 2.0]
        self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));
        // prepare disableParallax callback
        if ('string' === typeof self.options.disableParallax) self.options.disableParallax = new RegExp(self.options.disableParallax);
        if (self.options.disableParallax instanceof RegExp) {
            const disableParallaxRegexp = self.options.disableParallax;
            self.options.disableParallax = ()=>disableParallaxRegexp.test(navigator.userAgent)
            ;
        }
        if ('function' !== typeof self.options.disableParallax) self.options.disableParallax = ()=>false
        ;
        // prepare disableVideo callback
        if ('string' === typeof self.options.disableVideo) self.options.disableVideo = new RegExp(self.options.disableVideo);
        if (self.options.disableVideo instanceof RegExp) {
            const disableVideoRegexp = self.options.disableVideo;
            self.options.disableVideo = ()=>disableVideoRegexp.test(navigator.userAgent)
            ;
        }
        if ('function' !== typeof self.options.disableVideo) self.options.disableVideo = ()=>false
        ;
        // custom element to check if parallax in viewport
        let elementInVP = self.options.elementInViewport;
        // get first item from array
        if (elementInVP && 'object' === typeof elementInVP && 'undefined' !== typeof elementInVP.length) [elementInVP] = elementInVP;
        // check if dom element
        if (!(elementInVP instanceof Element)) elementInVP = null;
        self.options.elementInViewport = elementInVP;
        self.image = {
            src: self.options.imgSrc || null,
            $container: null,
            useImgTag: false,
            // position fixed is needed for the most of browsers because absolute position have glitches
            // on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
            // on mobile devices better scrolled with absolute position
            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed'
        };
        if (self.initImg() && self.canInitParallax()) self.init();
    }
    // add styles to element
    // eslint-disable-next-line class-methods-use-this
    css(el, styles) {
        if ('string' === typeof styles) return _global.window.getComputedStyle(el).getPropertyValue(styles);
        // add transform property with vendor prefix
        if (styles.transform && supportTransform) styles[supportTransform] = styles.transform;
        Object.keys(styles).forEach((key)=>{
            el.style[key] = styles[key];
        });
        return el;
    }
    // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this
    extend(out, ...args) {
        out = out || {
        };
        Object.keys(args).forEach((i)=>{
            if (!args[i]) return;
            Object.keys(args[i]).forEach((key)=>{
                out[key] = args[i][key];
            });
        });
        return out;
    }
    // get window size and scroll position. Useful for extensions
    // eslint-disable-next-line class-methods-use-this
    getWindowData() {
        return {
            width: _global.window.innerWidth || document.documentElement.clientWidth,
            height: wndH,
            y: document.documentElement.scrollTop
        };
    }
    // Jarallax functions
    initImg() {
        const self = this;
        // find image element
        let $imgElement = self.options.imgElement;
        if ($imgElement && 'string' === typeof $imgElement) $imgElement = self.$item.querySelector($imgElement);
        // check if dom element
        if (!($imgElement instanceof Element)) {
            if (self.options.imgSrc) {
                $imgElement = new Image();
                $imgElement.src = self.options.imgSrc;
            } else $imgElement = null;
        }
        if ($imgElement) {
            if (self.options.keepImg) self.image.$item = $imgElement.cloneNode(true);
            else {
                self.image.$item = $imgElement;
                self.image.$itemParent = $imgElement.parentNode;
            }
            self.image.useImgTag = true;
        }
        // true if there is img tag
        if (self.image.$item) return true;
        // get image src
        if (null === self.image.src) {
            self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            self.image.bgImage = self.css(self.$item, 'background-image');
        }
        return !(!self.image.bgImage || 'none' === self.image.bgImage);
    }
    canInitParallax() {
        return supportTransform && !this.options.disableParallax();
    }
    init() {
        const self = this;
        const containerStyles = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        };
        let imageStyles = {
            pointerEvents: 'none',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            willChange: 'transform,opacity'
        };
        if (!self.options.keepImg) {
            // save default user styles
            const curStyle = self.$item.getAttribute('style');
            if (curStyle) self.$item.setAttribute('data-jarallax-original-styles', curStyle);
            if (self.image.useImgTag) {
                const curImgStyle = self.image.$item.getAttribute('style');
                if (curImgStyle) self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
            }
        }
        // set relative position and z-index to the parent
        if ('static' === self.css(self.$item, 'position')) self.css(self.$item, {
            position: 'relative'
        });
        if ('auto' === self.css(self.$item, 'z-index')) self.css(self.$item, {
            zIndex: 0
        });
        // container for parallax image
        self.image.$container = document.createElement('div');
        self.css(self.image.$container, containerStyles);
        self.css(self.image.$container, {
            'z-index': self.options.zIndex
        });
        // fix for IE https://github.com/nk-o/jarallax/issues/110
        if (isIE) self.css(self.image.$container, {
            opacity: 0.9999
        });
        self.image.$container.setAttribute('id', `jarallax-container-${self.instanceID}`);
        self.$item.appendChild(self.image.$container);
        // use img tag
        if (self.image.useImgTag) imageStyles = self.extend({
            'object-fit': self.options.imgSize,
            'object-position': self.options.imgPosition,
            // support for plugin https://github.com/bfred-it/object-fit-images
            'font-family': `object-fit: ${self.options.imgSize}; object-position: ${self.options.imgPosition};`,
            'max-width': 'none'
        }, containerStyles, imageStyles);
        else {
            self.image.$item = document.createElement('div');
            if (self.image.src) imageStyles = self.extend({
                'background-position': self.options.imgPosition,
                'background-size': self.options.imgSize,
                'background-repeat': self.options.imgRepeat,
                'background-image': self.image.bgImage || `url("${self.image.src}")`
            }, containerStyles, imageStyles);
        }
        if ('opacity' === self.options.type || 'scale' === self.options.type || 'scale-opacity' === self.options.type || 1 === self.options.speed) self.image.position = 'absolute';
        // 1. Check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
        //    discussion - https://github.com/nk-o/jarallax/issues/9
        // 2. Check if parents have overflow scroll
        if ('fixed' === self.image.position) {
            const $parents = getParents(self.$item).filter((el)=>{
                const styles = _global.window.getComputedStyle(el);
                const parentTransform = styles['-webkit-transform'] || styles['-moz-transform'] || styles.transform;
                const overflowRegex = /(auto|scroll)/;
                return parentTransform && 'none' !== parentTransform || overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x']);
            });
            self.image.position = $parents.length ? 'absolute' : 'fixed';
        }
        // add position to parallax block
        imageStyles.position = self.image.position;
        // insert parallax image
        self.css(self.image.$item, imageStyles);
        self.image.$container.appendChild(self.image.$item);
        // set initial position and size
        self.onResize();
        self.onScroll(true);
        // call onInit event
        if (self.options.onInit) self.options.onInit.call(self);
        // remove default user background
        if ('none' !== self.css(self.$item, 'background-image')) self.css(self.$item, {
            'background-image': 'none'
        });
        self.addToParallaxList();
    }
    // add to parallax instances list
    addToParallaxList() {
        jarallaxList.push({
            instance: this
        });
        if (1 === jarallaxList.length) _global.window.requestAnimationFrame(updateParallax);
    }
    // remove from parallax instances list
    removeFromParallaxList() {
        const self = this;
        jarallaxList.forEach((data, key)=>{
            if (data.instance.instanceID === self.instanceID) jarallaxList.splice(key, 1);
        });
    }
    destroy() {
        const self = this;
        self.removeFromParallaxList();
        // return styles on container as before jarallax init
        const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
        self.$item.removeAttribute('data-jarallax-original-styles');
        // null occurs if there is no style tag before jarallax init
        if (!originalStylesTag) self.$item.removeAttribute('style');
        else self.$item.setAttribute('style', originalStylesTag);
        if (self.image.useImgTag) {
            // return styles on img tag as before jarallax init
            const originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
            self.image.$item.removeAttribute('data-jarallax-original-styles');
            // null occurs if there is no style tag before jarallax init
            if (!originalStylesImgTag) self.image.$item.removeAttribute('style');
            else self.image.$item.setAttribute('style', originalStylesTag);
            // move img tag to its default position
            if (self.image.$itemParent) self.image.$itemParent.appendChild(self.image.$item);
        }
        // remove additional dom elements
        if (self.$clipStyles) self.$clipStyles.parentNode.removeChild(self.$clipStyles);
        if (self.image.$container) self.image.$container.parentNode.removeChild(self.image.$container);
        // call onDestroy event
        if (self.options.onDestroy) self.options.onDestroy.call(self);
        // delete jarallax from item
        delete self.$item.jarallax;
    }
    // it will remove some image overlapping
    // overlapping occur due to an image position fixed inside absolute position element
    clipContainer() {
        // needed only when background in fixed position
        if ('fixed' !== this.image.position) return;
        const self = this;
        const rect = self.image.$container.getBoundingClientRect();
        const { width , height  } = rect;
        if (!self.$clipStyles) {
            self.$clipStyles = document.createElement('style');
            self.$clipStyles.setAttribute('type', 'text/css');
            self.$clipStyles.setAttribute('id', `jarallax-clip-${self.instanceID}`);
            const head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(self.$clipStyles);
        }
        // clip is used for old browsers.
        // clip-path for modern browsers (also fixes Safari v14 bug https://github.com/nk-o/jarallax/issues/181 ).
        const styles = `#jarallax-container-${self.instanceID} {
            clip: rect(0 ${width}px ${height}px 0);
            clip: rect(0, ${width}px, ${height}px, 0);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }`;
        // add clip styles inline (this method need for support IE8 and less browsers)
        if (self.$clipStyles.styleSheet) self.$clipStyles.styleSheet.cssText = styles;
        else self.$clipStyles.innerHTML = styles;
    }
    coverImage() {
        const self = this;
        const rect = self.image.$container.getBoundingClientRect();
        const contH = rect.height;
        const { speed  } = self.options;
        const isScroll = 'scroll' === self.options.type || 'scroll-opacity' === self.options.type;
        let scrollDist = 0;
        let resultH = contH;
        let resultMT = 0;
        // scroll parallax
        if (isScroll) {
            // scroll distance and height for image
            if (0 > speed) {
                scrollDist = speed * Math.max(contH, wndH);
                if (wndH < contH) scrollDist -= speed * (contH - wndH);
            } else scrollDist = speed * (contH + wndH);
            // size for scroll parallax
            if (1 < speed) resultH = Math.abs(scrollDist - wndH);
            else if (0 > speed) resultH = scrollDist / speed + Math.abs(scrollDist);
            else resultH += (wndH - contH) * (1 - speed);
            scrollDist /= 2;
        }
        // store scroll distance
        self.parallaxScrollDistance = scrollDist;
        // vertical center
        if (isScroll) resultMT = (wndH - resultH) / 2;
        else resultMT = (contH - resultH) / 2;
        // apply result to item
        self.css(self.image.$item, {
            height: `${resultH}px`,
            marginTop: `${resultMT}px`,
            left: 'fixed' === self.image.position ? `${rect.left}px` : '0',
            width: `${rect.width}px`
        });
        // call onCoverImage event
        if (self.options.onCoverImage) self.options.onCoverImage.call(self);
        // return some useful data. Used in the video cover function
        return {
            image: {
                height: resultH,
                marginTop: resultMT
            },
            container: rect
        };
    }
    isVisible() {
        return this.isElementInViewport || false;
    }
    onScroll(force) {
        const self = this;
        const rect = self.$item.getBoundingClientRect();
        const contT = rect.top;
        const contH = rect.height;
        const styles = {
        };
        // check if in viewport
        let viewportRect = rect;
        if (self.options.elementInViewport) viewportRect = self.options.elementInViewport.getBoundingClientRect();
        self.isElementInViewport = 0 <= viewportRect.bottom && 0 <= viewportRect.right && viewportRect.top <= wndH && viewportRect.left <= _global.window.innerWidth;
        // stop calculations if item is not in viewport
        if (force ? false : !self.isElementInViewport) return;
        // calculate parallax helping variables
        const beforeTop = Math.max(0, contT);
        const beforeTopEnd = Math.max(0, contH + contT);
        const afterTop = Math.max(0, -contT);
        const beforeBottom = Math.max(0, contT + contH - wndH);
        const beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
        const afterBottom = Math.max(0, -contT + wndH - contH);
        const fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH));
        // calculate on how percent of section is visible
        let visiblePercent = 1;
        if (contH < wndH) visiblePercent = 1 - (afterTop || beforeBottom) / contH;
        else if (beforeTopEnd <= wndH) visiblePercent = beforeTopEnd / wndH;
        else if (beforeBottomEnd <= wndH) visiblePercent = beforeBottomEnd / wndH;
        // opacity
        if ('opacity' === self.options.type || 'scale-opacity' === self.options.type || 'scroll-opacity' === self.options.type) {
            styles.transform = 'translate3d(0,0,0)';
            styles.opacity = visiblePercent;
        }
        // scale
        if ('scale' === self.options.type || 'scale-opacity' === self.options.type) {
            let scale = 1;
            if (0 > self.options.speed) scale -= self.options.speed * visiblePercent;
            else scale += self.options.speed * (1 - visiblePercent);
            styles.transform = `scale(${scale}) translate3d(0,0,0)`;
        }
        // scroll
        if ('scroll' === self.options.type || 'scroll-opacity' === self.options.type) {
            let positionY = self.parallaxScrollDistance * fromViewportCenter;
            // fix if parallax block in absolute position
            if ('absolute' === self.image.position) positionY -= contT;
            styles.transform = `translate3d(0,${positionY}px,0)`;
        }
        self.css(self.image.$item, styles);
        // call onScroll event
        if (self.options.onScroll) self.options.onScroll.call(self, {
            section: rect,
            beforeTop,
            beforeTopEnd,
            afterTop,
            beforeBottom,
            beforeBottomEnd,
            afterBottom,
            visiblePercent,
            fromViewportCenter
        });
    }
    onResize() {
        this.coverImage();
        this.clipContainer();
    }
}
// global definition
const plugin = function(items, options, ...args) {
    // check for dom element
    // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
    if ('object' === typeof HTMLElement ? items instanceof HTMLElement : items && 'object' === typeof items && null !== items && 1 === items.nodeType && 'string' === typeof items.nodeName) items = [
        items
    ];
    const len = items.length;
    let k = 0;
    let ret;
    for(; k < len; k += 1){
        if ('object' === typeof options || 'undefined' === typeof options) {
            if (!items[k].jarallax) items[k].jarallax = new Jarallax(items[k], options);
        } else if (items[k].jarallax) // eslint-disable-next-line prefer-spread
        ret = items[k].jarallax[options].apply(items[k].jarallax, args);
        if ('undefined' !== typeof ret) return ret;
    }
    return items;
};
plugin.constructor = Jarallax;
exports.default = plugin;

},{"lite-ready":"lkSbf","global":"6cJ3b","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lkSbf":[function(require,module,exports) {
module.exports = function(callback) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') // Already ready or interactive, execute callback
    callback.call();
    else if (document.attachEvent) // Old browsers
    document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'interactive') callback.call();
    });
    else if (document.addEventListener) // Modern browsers
    document.addEventListener('DOMContentLoaded', callback);
};

},{}],"6cJ3b":[function(require,module,exports) {
var global = arguments[3];
var win;
if (typeof window !== "undefined") win = window;
else if (typeof global !== "undefined") win = global;
else if (typeof self !== "undefined") win = self;
else win = {
};
module.exports = win;

},{}],"kX2WE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _videoWorker = require("video-worker");
var _videoWorkerDefault = parcelHelpers.interopDefault(_videoWorker);
var _global = require("global");
var _globalDefault = parcelHelpers.interopDefault(_global);
function jarallaxVideo(jarallax = _globalDefault.default.jarallax) {
    if ('undefined' === typeof jarallax) return;
    const Jarallax = jarallax.constructor;
    // append video after when block will be visible.
    const defOnScroll = Jarallax.prototype.onScroll;
    Jarallax.prototype.onScroll = function() {
        const self = this;
        defOnScroll.apply(self);
        const isReady = !self.isVideoInserted && self.video && (!self.options.videoLazyLoading || self.isElementInViewport) && !self.options.disableVideo();
        if (isReady) {
            self.isVideoInserted = true;
            self.video.getVideo((video)=>{
                const $parent = video.parentNode;
                self.css(video, {
                    position: self.image.position,
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    pointerEvents: 'none',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform,opacity',
                    margin: 0,
                    zIndex: -1
                });
                self.$video = video;
                // add Poster attribute to self-hosted video
                if ('local' === self.video.type) {
                    if (self.image.src) self.$video.setAttribute('poster', self.image.src);
                    else if (self.image.$item && 'IMG' === self.image.$item.tagName && self.image.$item.src) self.$video.setAttribute('poster', self.image.$item.src);
                }
                // insert video tag
                self.image.$container.appendChild(video);
                // remove parent video element (created by VideoWorker)
                $parent.parentNode.removeChild($parent);
            });
        }
    };
    // cover video
    const defCoverImage = Jarallax.prototype.coverImage;
    Jarallax.prototype.coverImage = function() {
        const self = this;
        const imageData = defCoverImage.apply(self);
        const node = self.image.$item ? self.image.$item.nodeName : false;
        if (imageData && self.video && node && ('IFRAME' === node || 'VIDEO' === node)) {
            let h = imageData.image.height;
            let w = h * self.image.width / self.image.height;
            let ml = (imageData.container.width - w) / 2;
            let mt = imageData.image.marginTop;
            if (imageData.container.width > w) {
                w = imageData.container.width;
                h = w * self.image.height / self.image.width;
                ml = 0;
                mt += (imageData.image.height - h) / 2;
            }
            // add video height over than need to hide controls
            if ('IFRAME' === node) {
                h += 400;
                mt -= 200;
            }
            self.css(self.$video, {
                width: `${w}px`,
                marginLeft: `${ml}px`,
                height: `${h}px`,
                marginTop: `${mt}px`
            });
        }
        return imageData;
    };
    // init video
    const defInitImg = Jarallax.prototype.initImg;
    Jarallax.prototype.initImg = function() {
        const self = this;
        const defaultResult = defInitImg.apply(self);
        if (!self.options.videoSrc) self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
        if (self.options.videoSrc) {
            self.defaultInitImgResult = defaultResult;
            return true;
        }
        return defaultResult;
    };
    const defCanInitParallax = Jarallax.prototype.canInitParallax;
    Jarallax.prototype.canInitParallax = function() {
        const self = this;
        let defaultResult = defCanInitParallax.apply(self);
        if (!self.options.videoSrc) return defaultResult;
        // Init video api
        const video = new _videoWorkerDefault.default(self.options.videoSrc, {
            autoplay: true,
            loop: self.options.videoLoop,
            showControls: false,
            accessibilityHidden: true,
            startTime: self.options.videoStartTime || 0,
            endTime: self.options.videoEndTime || 0,
            mute: self.options.videoVolume ? 0 : 1,
            volume: self.options.videoVolume || 0
        });
        function resetDefaultImage() {
            if (self.image.$default_item) {
                self.image.$item = self.image.$default_item;
                self.image.$item.style.display = 'block';
                // set image width and height
                self.coverImage();
                self.clipContainer();
                self.onScroll();
            }
        }
        if (video.isValid()) {
            // Force enable parallax.
            // When the parallax disabled on mobile devices, we still need to display videos.
            // https://github.com/nk-o/jarallax/issues/159
            if (this.options.disableParallax()) {
                defaultResult = true;
                self.image.position = 'absolute';
                self.options.type = 'scroll';
                self.options.speed = 1;
            }
            // if parallax will not be inited, we can add thumbnail on background.
            if (!defaultResult) {
                if (!self.defaultInitImgResult) video.getImageURL((url)=>{
                    // save default user styles
                    const curStyle = self.$item.getAttribute('style');
                    if (curStyle) self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                    // set new background
                    self.css(self.$item, {
                        'background-image': `url("${url}")`,
                        'background-position': 'center',
                        'background-size': 'cover'
                    });
                });
            } else {
                video.on('ready', ()=>{
                    if (self.options.videoPlayOnlyVisible) {
                        const oldOnScroll = self.onScroll;
                        self.onScroll = function() {
                            oldOnScroll.apply(self);
                            if (!self.videoError && (self.options.videoLoop || !self.options.videoLoop && !self.videoEnded)) {
                                if (self.isVisible()) video.play();
                                else video.pause();
                            }
                        };
                    } else video.play();
                });
                video.on('started', ()=>{
                    self.image.$default_item = self.image.$item;
                    self.image.$item = self.$video;
                    // set video width and height
                    self.image.width = self.video.videoWidth || 1280;
                    self.image.height = self.video.videoHeight || 720;
                    self.coverImage();
                    self.clipContainer();
                    self.onScroll();
                    // hide image
                    if (self.image.$default_item) self.image.$default_item.style.display = 'none';
                });
                video.on('ended', ()=>{
                    self.videoEnded = true;
                    if (!self.options.videoLoop) // show default image if Loop disabled.
                    resetDefaultImage();
                });
                video.on('error', ()=>{
                    self.videoError = true;
                    // show default image if video loading error.
                    resetDefaultImage();
                });
                self.video = video;
                // set image if not exists
                if (!self.defaultInitImgResult) {
                    // set empty image on self-hosted video if not defined
                    self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    if ('local' !== video.type) {
                        video.getImageURL((url)=>{
                            self.image.bgImage = `url("${url}")`;
                            self.init();
                        });
                        return false;
                    }
                }
            }
        }
        return defaultResult;
    };
    // Destroy video parallax
    const defDestroy = Jarallax.prototype.destroy;
    Jarallax.prototype.destroy = function() {
        const self = this;
        if (self.image.$default_item) {
            self.image.$item = self.image.$default_item;
            delete self.image.$default_item;
        }
        defDestroy.apply(self);
    };
}
exports.default = jarallaxVideo;

},{"video-worker":"ktz74","global":"6cJ3b","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ktz74":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _global = require("global");
var _globalDefault = parcelHelpers.interopDefault(_global);
// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function Deferred() {
    this.doneCallbacks = [];
    this.failCallbacks = [];
}
Deferred.prototype = {
    execute (list, args) {
        let i = list.length;
        args = Array.prototype.slice.call(args);
        while(i){
            i -= 1;
            list[i].apply(null, args);
        }
    },
    resolve (...args) {
        this.execute(this.doneCallbacks, args);
    },
    reject (...args) {
        this.execute(this.failCallbacks, args);
    },
    done (callback) {
        this.doneCallbacks.push(callback);
    },
    fail (callback) {
        this.failCallbacks.push(callback);
    }
};
let ID = 0;
let YoutubeAPIadded = 0;
let VimeoAPIadded = 0;
let loadingYoutubePlayer = 0;
let loadingVimeoPlayer = 0;
const loadingYoutubeDefer = new Deferred();
const loadingVimeoDefer = new Deferred();
class VideoWorker {
    constructor(url, options){
        const self = this;
        self.url = url;
        self.options_default = {
            autoplay: false,
            loop: false,
            mute: false,
            volume: 100,
            showControls: true,
            accessibilityHidden: false,
            // start / end video time in seconds
            startTime: 0,
            endTime: 0
        };
        self.options = self.extend({
        }, self.options_default, options);
        // Fix wrong option name.
        // Thanks to https://github.com/nk-o/video-worker/issues/13.
        if ('undefined' !== typeof self.options.showContols) {
            self.options.showControls = self.options.showContols;
            delete self.options.showContols;
        }
        // check URL
        self.videoID = self.parseURL(url);
        // init
        if (self.videoID) {
            self.ID = ID;
            ID += 1;
            self.loadAPI();
            self.init();
        }
    }
    // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this
    extend(...args) {
        const out = args[0] || {
        };
        Object.keys(args).forEach((i)=>{
            if (!args[i]) return;
            Object.keys(args[i]).forEach((key)=>{
                out[key] = args[i][key];
            });
        });
        return out;
    }
    parseURL(url) {
        // parse youtube ID
        function getYoutubeID(ytUrl) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            const match = ytUrl.match(regExp);
            return match && 11 === match[1].length ? match[1] : false;
        }
        // parse vimeo ID
        function getVimeoID(vmUrl) {
            // eslint-disable-next-line no-useless-escape
            const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
            const match = vmUrl.match(regExp);
            return match && match[3] ? match[3] : false;
        }
        // parse local string
        function getLocalVideos(locUrl) {
            // eslint-disable-next-line no-useless-escape
            const videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
            const result = {
            };
            let ready = 0;
            videoFormats.forEach((val)=>{
                // eslint-disable-next-line no-useless-escape
                const match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                if (match && match[1] && match[2]) {
                    // eslint-disable-next-line prefer-destructuring
                    result['ogv' === match[1] ? 'ogg' : match[1]] = match[2];
                    ready = 1;
                }
            });
            return ready ? result : false;
        }
        const Youtube = getYoutubeID(url);
        const Vimeo = getVimeoID(url);
        const Local = getLocalVideos(url);
        if (Youtube) {
            this.type = 'youtube';
            return Youtube;
        }
        if (Vimeo) {
            this.type = 'vimeo';
            return Vimeo;
        }
        if (Local) {
            this.type = 'local';
            return Local;
        }
        return false;
    }
    isValid() {
        return !!this.videoID;
    }
    // events
    on(name, callback) {
        this.userEventsList = this.userEventsList || [];
        // add new callback in events list
        (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
    }
    off(name, callback) {
        if (!this.userEventsList || !this.userEventsList[name]) return;
        if (!callback) delete this.userEventsList[name];
        else this.userEventsList[name].forEach((val, key)=>{
            if (val === callback) this.userEventsList[name][key] = false;
        });
    }
    fire(name, ...args) {
        if (this.userEventsList && 'undefined' !== typeof this.userEventsList[name]) this.userEventsList[name].forEach((val)=>{
            // call with all arguments
            if (val) val.apply(this, args);
        });
    }
    play(start) {
        const self = this;
        if (!self.player) return;
        if ('youtube' === self.type && self.player.playVideo) {
            if ('undefined' !== typeof start) self.player.seekTo(start || 0);
            if (_globalDefault.default.YT.PlayerState.PLAYING !== self.player.getPlayerState()) self.player.playVideo();
        }
        if ('vimeo' === self.type) {
            if ('undefined' !== typeof start) self.player.setCurrentTime(start);
            self.player.getPaused().then((paused)=>{
                if (paused) self.player.play();
            });
        }
        if ('local' === self.type) {
            if ('undefined' !== typeof start) self.player.currentTime = start;
            if (self.player.paused) self.player.play();
        }
    }
    pause() {
        const self = this;
        if (!self.player) return;
        if ('youtube' === self.type && self.player.pauseVideo) {
            if (_globalDefault.default.YT.PlayerState.PLAYING === self.player.getPlayerState()) self.player.pauseVideo();
        }
        if ('vimeo' === self.type) self.player.getPaused().then((paused)=>{
            if (!paused) self.player.pause();
        });
        if ('local' === self.type) {
            if (!self.player.paused) self.player.pause();
        }
    }
    mute() {
        const self = this;
        if (!self.player) return;
        if ('youtube' === self.type && self.player.mute) self.player.mute();
        if ('vimeo' === self.type && self.player.setVolume) self.player.setVolume(0);
        if ('local' === self.type) self.$video.muted = true;
    }
    unmute() {
        const self = this;
        if (!self.player) return;
        if ('youtube' === self.type && self.player.mute) self.player.unMute();
        if ('vimeo' === self.type && self.player.setVolume) self.player.setVolume(self.options.volume);
        if ('local' === self.type) self.$video.muted = false;
    }
    setVolume(volume = false) {
        const self = this;
        if (!self.player || !volume) return;
        if ('youtube' === self.type && self.player.setVolume) self.player.setVolume(volume);
        if ('vimeo' === self.type && self.player.setVolume) self.player.setVolume(volume);
        if ('local' === self.type) self.$video.volume = volume / 100;
    }
    getVolume(callback) {
        const self = this;
        if (!self.player) {
            callback(false);
            return;
        }
        if ('youtube' === self.type && self.player.getVolume) callback(self.player.getVolume());
        if ('vimeo' === self.type && self.player.getVolume) self.player.getVolume().then((volume)=>{
            callback(volume);
        });
        if ('local' === self.type) callback(self.$video.volume * 100);
    }
    getMuted(callback) {
        const self = this;
        if (!self.player) {
            callback(null);
            return;
        }
        if ('youtube' === self.type && self.player.isMuted) callback(self.player.isMuted());
        if ('vimeo' === self.type && self.player.getVolume) self.player.getVolume().then((volume)=>{
            callback(!!volume);
        });
        if ('local' === self.type) callback(self.$video.muted);
    }
    getImageURL(callback) {
        const self = this;
        if (self.videoImage) {
            callback(self.videoImage);
            return;
        }
        if ('youtube' === self.type) {
            const availableSizes = [
                'maxresdefault',
                'sddefault',
                'hqdefault',
                '0', 
            ];
            let step = 0;
            const tempImg = new Image();
            tempImg.onload = function() {
                // if no thumbnail, youtube add their own image with width = 120px
                if (120 !== (this.naturalWidth || this.width) || step === availableSizes.length - 1) {
                    // ok
                    self.videoImage = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
                    callback(self.videoImage);
                } else {
                    // try another size
                    step += 1;
                    this.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
                }
            };
            tempImg.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
        }
        if ('vimeo' === self.type) {
            let request = new XMLHttpRequest();
            request.open('GET', `https://vimeo.com/api/v2/video/${self.videoID}.json`, true);
            request.onreadystatechange = function() {
                if (4 === this.readyState) {
                    if (200 <= this.status && 400 > this.status) {
                        // Success!
                        const response = JSON.parse(this.responseText);
                        self.videoImage = response[0].thumbnail_large;
                        callback(self.videoImage);
                    }
                // Error :(
                }
            };
            request.send();
            request = null;
        }
    }
    // fallback to the old version.
    getIframe(callback) {
        this.getVideo(callback);
    }
    getVideo(callback) {
        const self = this;
        // return generated video block
        if (self.$video) {
            callback(self.$video);
            return;
        }
        // generate new video block
        self.onAPIready(()=>{
            let hiddenDiv;
            if (!self.$video) {
                hiddenDiv = document.createElement('div');
                hiddenDiv.style.display = 'none';
            }
            // Youtube
            if ('youtube' === self.type) {
                self.playerOptions = {
                    // GDPR Compliance.
                    host: 'https://www.youtube-nocookie.com',
                    videoId: self.videoID,
                    playerVars: {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0,
                        // autoplay enable on mobile devices
                        playsinline: 1
                    }
                };
                // hide controls
                if (!self.options.showControls) {
                    self.playerOptions.playerVars.iv_load_policy = 3;
                    self.playerOptions.playerVars.modestbranding = 1;
                    self.playerOptions.playerVars.controls = 0;
                    self.playerOptions.playerVars.showinfo = 0;
                    self.playerOptions.playerVars.disablekb = 1;
                }
                // events
                let ytStarted;
                let ytProgressInterval;
                self.playerOptions.events = {
                    onReady (e) {
                        // mute
                        if (self.options.mute) e.target.mute();
                        else if (self.options.volume) e.target.setVolume(self.options.volume);
                        // autoplay
                        if (self.options.autoplay) self.play(self.options.startTime);
                        self.fire('ready', e);
                        // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
                        // https://github.com/nk-o/video-worker/issues/2
                        if (self.options.loop && !self.options.endTime) {
                            const secondsOffset = 0.1;
                            self.options.endTime = self.player.getDuration() - secondsOffset;
                        }
                        // volumechange
                        setInterval(()=>{
                            self.getVolume((volume)=>{
                                if (self.options.volume !== volume) {
                                    self.options.volume = volume;
                                    self.fire('volumechange', e);
                                }
                            });
                        }, 150);
                    },
                    onStateChange (e) {
                        // loop
                        if (self.options.loop && e.data === _globalDefault.default.YT.PlayerState.ENDED) self.play(self.options.startTime);
                        if (!ytStarted && e.data === _globalDefault.default.YT.PlayerState.PLAYING) {
                            ytStarted = 1;
                            self.fire('started', e);
                        }
                        if (e.data === _globalDefault.default.YT.PlayerState.PLAYING) self.fire('play', e);
                        if (e.data === _globalDefault.default.YT.PlayerState.PAUSED) self.fire('pause', e);
                        if (e.data === _globalDefault.default.YT.PlayerState.ENDED) self.fire('ended', e);
                        // progress check
                        if (e.data === _globalDefault.default.YT.PlayerState.PLAYING) ytProgressInterval = setInterval(()=>{
                            self.fire('timeupdate', e);
                            // check for end of video and play again or stop
                            if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                                if (self.options.loop) self.play(self.options.startTime);
                                else self.pause();
                            }
                        }, 150);
                        else clearInterval(ytProgressInterval);
                    },
                    onError (e) {
                        self.fire('error', e);
                    }
                };
                const firstInit = !self.$video;
                if (firstInit) {
                    const div = document.createElement('div');
                    div.setAttribute('id', self.playerID);
                    hiddenDiv.appendChild(div);
                    document.body.appendChild(hiddenDiv);
                }
                self.player = self.player || new _globalDefault.default.YT.Player(self.playerID, self.playerOptions);
                if (firstInit) {
                    self.$video = document.getElementById(self.playerID);
                    // add accessibility attributes
                    if (self.options.accessibilityHidden) {
                        self.$video.setAttribute('tabindex', '-1');
                        self.$video.setAttribute('aria-hidden', 'true');
                    }
                    // get video width and height
                    self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
                    self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
                }
            }
            // Vimeo
            if ('vimeo' === self.type) {
                self.playerOptions = {
                    // GDPR Compliance.
                    dnt: 1,
                    id: self.videoID,
                    autopause: 0,
                    transparent: 0,
                    autoplay: self.options.autoplay ? 1 : 0,
                    loop: self.options.loop ? 1 : 0,
                    muted: self.options.mute ? 1 : 0
                };
                if (self.options.volume) self.playerOptions.volume = self.options.volume;
                // hide controls
                if (!self.options.showControls) {
                    self.playerOptions.badge = 0;
                    self.playerOptions.byline = 0;
                    self.playerOptions.portrait = 0;
                    self.playerOptions.title = 0;
                    self.playerOptions.background = 1;
                }
                if (!self.$video) {
                    let playerOptionsString = '';
                    Object.keys(self.playerOptions).forEach((key)=>{
                        if ('' !== playerOptionsString) playerOptionsString += '&';
                        playerOptionsString += `${key}=${encodeURIComponent(self.playerOptions[key])}`;
                    });
                    // we need to create iframe manually because when we create it using API
                    // js events won't triggers after iframe moved to another place
                    self.$video = document.createElement('iframe');
                    self.$video.setAttribute('id', self.playerID);
                    self.$video.setAttribute('src', `https://player.vimeo.com/video/${self.videoID}?${playerOptionsString}`);
                    self.$video.setAttribute('frameborder', '0');
                    self.$video.setAttribute('mozallowfullscreen', '');
                    self.$video.setAttribute('allowfullscreen', '');
                    self.$video.setAttribute('title', 'Vimeo video player');
                    // add accessibility attributes
                    if (self.options.accessibilityHidden) {
                        self.$video.setAttribute('tabindex', '-1');
                        self.$video.setAttribute('aria-hidden', 'true');
                    }
                    hiddenDiv.appendChild(self.$video);
                    document.body.appendChild(hiddenDiv);
                }
                self.player = self.player || new _globalDefault.default.Vimeo.Player(self.$video, self.playerOptions);
                // set current time for autoplay
                if (self.options.startTime && self.options.autoplay) self.player.setCurrentTime(self.options.startTime);
                // get video width and height
                self.player.getVideoWidth().then((width)=>{
                    self.videoWidth = width || 1280;
                });
                self.player.getVideoHeight().then((height)=>{
                    self.videoHeight = height || 720;
                });
                // events
                let vmStarted;
                self.player.on('timeupdate', (e)=>{
                    if (!vmStarted) {
                        self.fire('started', e);
                        vmStarted = 1;
                    }
                    self.fire('timeupdate', e);
                    // check for end of video and play again or stop
                    if (self.options.endTime) {
                        if (self.options.endTime && e.seconds >= self.options.endTime) {
                            if (self.options.loop) self.play(self.options.startTime);
                            else self.pause();
                        }
                    }
                });
                self.player.on('play', (e)=>{
                    self.fire('play', e);
                    // check for the start time and start with it
                    if (self.options.startTime && 0 === e.seconds) self.play(self.options.startTime);
                });
                self.player.on('pause', (e)=>{
                    self.fire('pause', e);
                });
                self.player.on('ended', (e)=>{
                    self.fire('ended', e);
                });
                self.player.on('loaded', (e)=>{
                    self.fire('ready', e);
                });
                self.player.on('volumechange', (e)=>{
                    self.fire('volumechange', e);
                });
                self.player.on('error', (e)=>{
                    self.fire('error', e);
                });
            }
            // Local
            function addSourceToLocal(element, src, type) {
                const source = document.createElement('source');
                source.src = src;
                source.type = type;
                element.appendChild(source);
            }
            if ('local' === self.type) {
                if (!self.$video) {
                    self.$video = document.createElement('video');
                    // show controls
                    if (self.options.showControls) self.$video.controls = true;
                    // mute
                    if (self.options.mute) self.$video.muted = true;
                    else if (self.$video.volume) self.$video.volume = self.options.volume / 100;
                    // loop
                    if (self.options.loop) self.$video.loop = true;
                    // autoplay enable on mobile devices
                    self.$video.setAttribute('playsinline', '');
                    self.$video.setAttribute('webkit-playsinline', '');
                    // add accessibility attributes
                    if (self.options.accessibilityHidden) {
                        self.$video.setAttribute('tabindex', '-1');
                        self.$video.setAttribute('aria-hidden', 'true');
                    }
                    self.$video.setAttribute('id', self.playerID);
                    hiddenDiv.appendChild(self.$video);
                    document.body.appendChild(hiddenDiv);
                    Object.keys(self.videoID).forEach((key)=>{
                        addSourceToLocal(self.$video, self.videoID[key], `video/${key}`);
                    });
                }
                self.player = self.player || self.$video;
                let locStarted;
                self.player.addEventListener('playing', (e)=>{
                    if (!locStarted) self.fire('started', e);
                    locStarted = 1;
                });
                self.player.addEventListener('timeupdate', function(e) {
                    self.fire('timeupdate', e);
                    // check for end of video and play again or stop
                    if (self.options.endTime) {
                        if (self.options.endTime && this.currentTime >= self.options.endTime) {
                            if (self.options.loop) self.play(self.options.startTime);
                            else self.pause();
                        }
                    }
                });
                self.player.addEventListener('play', (e)=>{
                    self.fire('play', e);
                });
                self.player.addEventListener('pause', (e)=>{
                    self.fire('pause', e);
                });
                self.player.addEventListener('ended', (e)=>{
                    self.fire('ended', e);
                });
                self.player.addEventListener('loadedmetadata', function() {
                    // get video width and height
                    self.videoWidth = this.videoWidth || 1280;
                    self.videoHeight = this.videoHeight || 720;
                    self.fire('ready');
                    // autoplay
                    if (self.options.autoplay) self.play(self.options.startTime);
                });
                self.player.addEventListener('volumechange', (e)=>{
                    self.getVolume((volume)=>{
                        self.options.volume = volume;
                    });
                    self.fire('volumechange', e);
                });
                self.player.addEventListener('error', (e)=>{
                    self.fire('error', e);
                });
            }
            callback(self.$video);
        });
    }
    init() {
        const self = this;
        self.playerID = `VideoWorker-${self.ID}`;
    }
    loadAPI() {
        const self = this;
        if (YoutubeAPIadded && VimeoAPIadded) return;
        let src = '';
        // load Youtube API
        if ('youtube' === self.type && !YoutubeAPIadded) {
            YoutubeAPIadded = 1;
            src = 'https://www.youtube.com/iframe_api';
        }
        // load Vimeo API
        if ('vimeo' === self.type && !VimeoAPIadded) {
            VimeoAPIadded = 1;
            // Useful when Vimeo API added using RequireJS https://github.com/nk-o/video-worker/pull/7
            if ('undefined' !== typeof _globalDefault.default.Vimeo) return;
            src = 'https://player.vimeo.com/api/player.js';
        }
        if (!src) return;
        // add script in head section
        let tag = document.createElement('script');
        let head = document.getElementsByTagName('head')[0];
        tag.src = src;
        head.appendChild(tag);
        head = null;
        tag = null;
    }
    onAPIready(callback) {
        const self = this;
        // Youtube
        if ('youtube' === self.type) {
            // Listen for global YT player callback
            if (('undefined' === typeof _globalDefault.default.YT || 0 === _globalDefault.default.YT.loaded) && !loadingYoutubePlayer) {
                // Prevents Ready event from being called twice
                loadingYoutubePlayer = 1;
                // Creates deferred so, other players know when to wait.
                window.onYouTubeIframeAPIReady = function() {
                    window.onYouTubeIframeAPIReady = null;
                    loadingYoutubeDefer.resolve('done');
                    callback();
                };
            } else if ('object' === typeof _globalDefault.default.YT && 1 === _globalDefault.default.YT.loaded) callback();
            else loadingYoutubeDefer.done(()=>{
                callback();
            });
        }
        // Vimeo
        if ('vimeo' === self.type) {
            if ('undefined' === typeof _globalDefault.default.Vimeo && !loadingVimeoPlayer) {
                loadingVimeoPlayer = 1;
                const vimeoInterval = setInterval(()=>{
                    if ('undefined' !== typeof _globalDefault.default.Vimeo) {
                        clearInterval(vimeoInterval);
                        loadingVimeoDefer.resolve('done');
                        callback();
                    }
                }, 20);
            } else if ('undefined' !== typeof _globalDefault.default.Vimeo) callback();
            else loadingVimeoDefer.done(()=>{
                callback();
            });
        }
        // Local
        if ('local' === self.type) callback();
    }
}
exports.default = VideoWorker;

},{"global":"6cJ3b","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cpdW1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-case-declarations: "off" */ var _global = require("global");
var _globalDefault = parcelHelpers.interopDefault(_global);
function jarallaxElement(jarallax = _globalDefault.default.jarallax) {
    if ('undefined' === typeof jarallax) return;
    const Jarallax = jarallax.constructor;
    // redefine default methods
    [
        'initImg',
        'canInitParallax',
        'init',
        'destroy',
        'clipContainer',
        'coverImage',
        'isVisible',
        'onScroll',
        'onResize', 
    ].forEach((key)=>{
        const def = Jarallax.prototype[key];
        Jarallax.prototype[key] = function(...args) {
            const self = this;
            if ('initImg' === key && null !== self.$item.getAttribute('data-jarallax-element')) {
                self.options.type = 'element';
                self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || self.pureOptions.speed;
            }
            if ('element' !== self.options.type) return def.apply(self, args);
            self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';
            switch(key){
                case 'init':
                    const speedArr = self.pureOptions.speed.split(' ');
                    self.options.speed = self.pureOptions.speed || 0;
                    self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                    self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
                    const thresholdArr = self.pureOptions.threshold.split(' ');
                    self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                    self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
                    def.apply(self, args);
                    // restore background image if available.
                    const originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
                    if (originalStylesTag) self.$item.setAttribute('style', originalStylesTag);
                    return true;
                case 'onResize':
                    const defTransform = self.css(self.$item, 'transform');
                    self.css(self.$item, {
                        transform: ''
                    });
                    const rect = self.$item.getBoundingClientRect();
                    self.itemData = {
                        width: rect.width,
                        height: rect.height,
                        y: rect.top + self.getWindowData().y,
                        x: rect.left
                    };
                    self.css(self.$item, {
                        transform: defTransform
                    });
                    break;
                case 'onScroll':
                    const wnd = self.getWindowData();
                    const centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
                    const moveY = centerPercent * self.options.speedY;
                    const moveX = centerPercent * self.options.speedX;
                    let my = moveY;
                    let mx = moveX;
                    if (null !== self.options.thresholdY && moveY > self.options.thresholdY) my = 0;
                    if (null !== self.options.thresholdX && moveX > self.options.thresholdX) mx = 0;
                    self.css(self.$item, {
                        transform: `translate3d(${mx}px,${my}px,0)`
                    });
                    break;
                case 'initImg':
                case 'isVisible':
                case 'clipContainer':
                case 'coverImage':
                    return true;
            }
            return def.apply(self, args);
        };
    });
}
exports.default = jarallaxElement;

},{"global":"6cJ3b","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dMAI4":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define([], factory);
    else if (typeof exports === 'object') exports["feather"] = factory();
    else root["feather"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
    return(/******/ (function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {
        };
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {
                }
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                /******/ configurable: false,
                /******/ enumerable: true,
                /******/ get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? /******/ function getDefault() {
                return module['default'];
            } : /******/ function getModuleExports() {
                return module;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/ })({
        /***/ "./dist/icons.json": function(module) {
            module.exports = {
                "activity": "<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>",
                "airplay": "<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>",
                "alert-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>",
                "alert-octagon": "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>",
                "alert-triangle": "<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>",
                "align-center": "<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>",
                "align-justify": "<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>",
                "align-left": "<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>",
                "align-right": "<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>",
                "anchor": "<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>",
                "aperture": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>",
                "archive": "<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>",
                "arrow-down-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>",
                "arrow-down-left": "<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>",
                "arrow-down-right": "<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>",
                "arrow-down": "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>",
                "arrow-left-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>",
                "arrow-left": "<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>",
                "arrow-right-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "arrow-right": "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>",
                "arrow-up-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>",
                "arrow-up-left": "<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>",
                "arrow-up-right": "<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>",
                "arrow-up": "<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>",
                "at-sign": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>",
                "award": "<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>",
                "bar-chart-2": "<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>",
                "bar-chart": "<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>",
                "battery-charging": "<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>",
                "battery": "<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>",
                "bell-off": "<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "bell": "<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>",
                "bluetooth": "<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>",
                "bold": "<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>",
                "book-open": "<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>",
                "book": "<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>",
                "bookmark": "<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>",
                "box": "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>",
                "briefcase": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>",
                "calendar": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>",
                "camera-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>",
                "camera": "<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>",
                "cast": "<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>",
                "check-circle": "<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>",
                "check-square": "<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>",
                "check": "<polyline points=\"20 6 9 17 4 12\"></polyline>",
                "chevron-down": "<polyline points=\"6 9 12 15 18 9\"></polyline>",
                "chevron-left": "<polyline points=\"15 18 9 12 15 6\"></polyline>",
                "chevron-right": "<polyline points=\"9 18 15 12 9 6\"></polyline>",
                "chevron-up": "<polyline points=\"18 15 12 9 6 15\"></polyline>",
                "chevrons-down": "<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>",
                "chevrons-left": "<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>",
                "chevrons-right": "<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>",
                "chevrons-up": "<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>",
                "chrome": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>",
                "circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>",
                "clipboard": "<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>",
                "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>",
                "cloud-drizzle": "<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>",
                "cloud-lightning": "<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>",
                "cloud-off": "<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "cloud-rain": "<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>",
                "cloud-snow": "<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>",
                "cloud": "<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>",
                "code": "<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>",
                "codepen": "<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>",
                "codesandbox": "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>",
                "coffee": "<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>",
                "columns": "<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>",
                "command": "<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>",
                "compass": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>",
                "copy": "<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>",
                "corner-down-left": "<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>",
                "corner-down-right": "<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>",
                "corner-left-down": "<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>",
                "corner-left-up": "<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>",
                "corner-right-down": "<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>",
                "corner-right-up": "<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>",
                "corner-up-left": "<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>",
                "corner-up-right": "<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>",
                "cpu": "<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>",
                "credit-card": "<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>",
                "crop": "<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>",
                "crosshair": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>",
                "database": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>",
                "delete": "<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>",
                "disc": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>",
                "divide-circle": "<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>",
                "divide-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>",
                "divide": "<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>",
                "dollar-sign": "<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>",
                "download-cloud": "<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>",
                "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>",
                "dribbble": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>",
                "droplet": "<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>",
                "edit-2": "<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>",
                "edit-3": "<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>",
                "edit": "<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>",
                "external-link": "<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>",
                "eye-off": "<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "eye": "<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>",
                "facebook": "<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>",
                "fast-forward": "<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>",
                "feather": "<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>",
                "figma": "<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>",
                "file-minus": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>",
                "file-plus": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>",
                "file-text": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>",
                "file": "<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>",
                "film": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>",
                "filter": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>",
                "flag": "<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>",
                "folder-minus": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>",
                "folder-plus": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>",
                "folder": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>",
                "framer": "<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>",
                "frown": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>",
                "gift": "<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>",
                "git-branch": "<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>",
                "git-commit": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>",
                "git-merge": "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>",
                "git-pull-request": "<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>",
                "github": "<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>",
                "gitlab": "<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>",
                "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>",
                "grid": "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>",
                "hard-drive": "<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>",
                "hash": "<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>",
                "headphones": "<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>",
                "heart": "<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>",
                "help-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>",
                "hexagon": "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>",
                "home": "<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>",
                "image": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>",
                "inbox": "<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>",
                "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>",
                "instagram": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>",
                "italic": "<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>",
                "key": "<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>",
                "layers": "<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>",
                "layout": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>",
                "life-buoy": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>",
                "link-2": "<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>",
                "linkedin": "<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>",
                "list": "<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>",
                "loader": "<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>",
                "lock": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>",
                "log-in": "<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>",
                "log-out": "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>",
                "mail": "<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>",
                "map-pin": "<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>",
                "map": "<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>",
                "maximize-2": "<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>",
                "maximize": "<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>",
                "meh": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>",
                "menu": "<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>",
                "message-circle": "<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>",
                "message-square": "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>",
                "mic-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>",
                "mic": "<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>",
                "minimize-2": "<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>",
                "minimize": "<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>",
                "minus-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "minus-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "minus": "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>",
                "monitor": "<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>",
                "moon": "<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>",
                "more-horizontal": "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>",
                "more-vertical": "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>",
                "mouse-pointer": "<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>",
                "move": "<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>",
                "music": "<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>",
                "navigation-2": "<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>",
                "navigation": "<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>",
                "octagon": "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>",
                "package": "<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>",
                "paperclip": "<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>",
                "pause-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>",
                "pause": "<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>",
                "pen-tool": "<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>",
                "percent": "<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>",
                "phone-call": "<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone-forwarded": "<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone-incoming": "<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone-missed": "<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone-off": "<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>",
                "phone-outgoing": "<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
                "pie-chart": "<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>",
                "play-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>",
                "play": "<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>",
                "plus-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "plus-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
                "plus": "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>",
                "pocket": "<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>",
                "power": "<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>",
                "printer": "<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>",
                "radio": "<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>",
                "refresh-ccw": "<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>",
                "refresh-cw": "<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>",
                "repeat": "<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>",
                "rewind": "<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>",
                "rotate-ccw": "<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>",
                "rotate-cw": "<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>",
                "rss": "<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>",
                "save": "<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>",
                "scissors": "<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>",
                "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>",
                "send": "<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>",
                "server": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>",
                "settings": "<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>",
                "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>",
                "share": "<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>",
                "shield-off": "<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "shield": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>",
                "shopping-bag": "<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>",
                "shopping-cart": "<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>",
                "shuffle": "<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>",
                "sidebar": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>",
                "skip-back": "<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>",
                "skip-forward": "<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>",
                "slack": "<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>",
                "slash": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>",
                "sliders": "<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>",
                "smartphone": "<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>",
                "smile": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>",
                "speaker": "<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>",
                "square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>",
                "star": "<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>",
                "stop-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>",
                "sun": "<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>",
                "sunrise": "<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>",
                "sunset": "<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>",
                "tablet": "<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>",
                "tag": "<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>",
                "target": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>",
                "terminal": "<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>",
                "thermometer": "<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>",
                "thumbs-down": "<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>",
                "thumbs-up": "<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>",
                "toggle-left": "<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>",
                "toggle-right": "<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>",
                "tool": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>",
                "trash-2": "<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>",
                "trash": "<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>",
                "trello": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>",
                "trending-down": "<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>",
                "trending-up": "<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>",
                "triangle": "<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>",
                "truck": "<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>",
                "tv": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>",
                "twitch": "<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\"></path>",
                "twitter": "<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>",
                "type": "<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>",
                "umbrella": "<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>",
                "underline": "<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>",
                "unlock": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>",
                "upload-cloud": "<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>",
                "upload": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>",
                "user-check": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>",
                "user-minus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>",
                "user-plus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>",
                "user-x": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>",
                "user": "<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>",
                "users": "<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>",
                "video-off": "<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "video": "<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>",
                "voicemail": "<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>",
                "volume-1": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>",
                "volume-2": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>",
                "volume-x": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>",
                "volume": "<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>",
                "watch": "<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>",
                "wifi-off": "<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>",
                "wifi": "<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>",
                "wind": "<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>",
                "x-circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>",
                "x-octagon": "<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>",
                "x-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>",
                "x": "<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>",
                "youtube": "<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>",
                "zap-off": "<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>",
                "zap": "<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>",
                "zoom-in": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>",
                "zoom-out": "<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"
            };
        /***/ },
        /***/ "./node_modules/classnames/dedupe.js": function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ 
            (function() {
                var classNames = function() {
                    // don't inherit from Object so we can skip hasOwnProperty check later
                    // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
                    function StorageObject() {
                    }
                    StorageObject.prototype = Object.create(null);
                    function _parseArray(resultSet, array) {
                        var length = array.length;
                        for(var i = 0; i < length; ++i)_parse(resultSet, array[i]);
                    }
                    var hasOwn = {
                    }.hasOwnProperty;
                    function _parseNumber(resultSet, num) {
                        resultSet[num] = true;
                    }
                    function _parseObject(resultSet, object) {
                        for(var k in object)if (hasOwn.call(object, k)) // set value to false instead of deleting it to avoid changing object structure
                        // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
                        resultSet[k] = !!object[k];
                    }
                    var SPACE = /\s+/;
                    function _parseString(resultSet, str) {
                        var array = str.split(SPACE);
                        var length = array.length;
                        for(var i = 0; i < length; ++i)resultSet[array[i]] = true;
                    }
                    function _parse(resultSet, arg) {
                        if (!arg) return;
                        var argType = typeof arg;
                        // 'foo bar'
                        if (argType === 'string') _parseString(resultSet, arg);
                        else if (Array.isArray(arg)) _parseArray(resultSet, arg);
                        else if (argType === 'object') _parseObject(resultSet, arg);
                        else if (argType === 'number') _parseNumber(resultSet, arg);
                    }
                    function _classNames() {
                        // don't leak arguments
                        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
                        var len = arguments.length;
                        var args = Array(len);
                        for(var i = 0; i < len; i++)args[i] = arguments[i];
                        var classSet = new StorageObject();
                        _parseArray(classSet, args);
                        var list = [];
                        for(var k in classSet)if (classSet[k]) list.push(k);
                        return list.join(' ');
                    }
                    return _classNames;
                }();
                if (typeof module !== 'undefined' && module.exports) module.exports = classNames;
                else __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return classNames;
                }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            })();
        /***/ },
        /***/ "./node_modules/core-js/es/array/from.js": function(module, exports, __webpack_require__) {
            __webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
            __webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
            var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");
            module.exports = path.Array.from;
        /***/ },
        /***/ "./node_modules/core-js/internals/a-function.js": function(module, exports) {
            module.exports = function(it) {
                if (typeof it != 'function') throw TypeError(String(it) + ' is not a function');
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/an-object.js": function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            module.exports = function(it) {
                if (!isObject(it)) throw TypeError(String(it) + ' is not an object');
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/array-from.js": function(module, exports, __webpack_require__) {
            "use strict";
            var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
            var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
            var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
            var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
            var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
            var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
            var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
            // `Array.from` method
            // https://tc39.github.io/ecma262/#sec-array.from
            module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
                var O = toObject(arrayLike);
                var C = typeof this == 'function' ? this : Array;
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var index = 0;
                var iteratorMethod = getIteratorMethod(O);
                var length, result, step, iterator;
                if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
                // if the target is not iterable or it's an array with the default iterator - use a simple case
                if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                    iterator = iteratorMethod.call(O);
                    result = new C();
                    for(; !(step = iterator.next()).done; index++)createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                        step.value,
                        index
                    ], true) : step.value);
                } else {
                    length = toLength(O.length);
                    result = new C(length);
                    for(; length > index; index++)createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                }
                result.length = index;
                return result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/array-includes.js": function(module, exports, __webpack_require__) {
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
            var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
            // `Array.prototype.{ indexOf, includes }` methods implementation
            // false -> Array#indexOf
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            // true  -> Array#includes
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            module.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el) while(length > index){
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                    }
                    else for(; length > index; index++)if (IS_INCLUDES || index in O) {
                        if (O[index] === el) return IS_INCLUDES || index || 0;
                    }
                    return !IS_INCLUDES && -1;
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/bind-context.js": function(module, exports, __webpack_require__) {
            var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
            // optional / simple context binding
            module.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 0:
                        return function() {
                            return fn.call(that);
                        };
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": function(module, exports, __webpack_require__) {
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            // call something on iterator step with safe closing on error
            module.exports = function(iterator, fn, value, ENTRIES) {
                try {
                    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
                } catch (error) {
                    var returnMethod = iterator['return'];
                    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
                    throw error;
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js": function(module, exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var ITERATOR = wellKnownSymbol('iterator');
            var SAFE_CLOSING = false;
            try {
                var called = 0;
                var iteratorWithReturn = {
                    next: function() {
                        return {
                            done: !!called++
                        };
                    },
                    'return': function() {
                        SAFE_CLOSING = true;
                    }
                };
                iteratorWithReturn[ITERATOR] = function() {
                    return this;
                };
                // eslint-disable-next-line no-throw-literal
                Array.from(iteratorWithReturn, function() {
                    throw 2;
                });
            } catch (error) {
            }
            module.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                var ITERATION_SUPPORT = false;
                try {
                    var object = {
                    };
                    object[ITERATOR] = function() {
                        return {
                            next: function() {
                                return {
                                    done: ITERATION_SUPPORT = true
                                };
                            }
                        };
                    };
                    exec(object);
                } catch (error) {
                }
                return ITERATION_SUPPORT;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/classof-raw.js": function(module, exports) {
            var toString = {
            }.toString;
            module.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/classof.js": function(module, exports, __webpack_require__) {
            var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var TO_STRING_TAG = wellKnownSymbol('toStringTag');
            // ES3 wrong here
            var CORRECT_ARGUMENTS = classofRaw(function() {
                return arguments;
            }()) == 'Arguments';
            // fallback for IE11 Script Access Denied error
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (error) {
                }
            };
            // getting tag from ES6+ `Object.prototype.toString`
            module.exports = function(it) {
                var O, tag, result;
                return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/copy-constructor-properties.js": function(module, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
            var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            module.exports = function(target, source) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/correct-prototype-getter.js": function(module, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            module.exports = !fails(function() {
                function F() {
                }
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F()) !== F.prototype;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/create-iterator-constructor.js": function(module, exports, __webpack_require__) {
            "use strict";
            var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
            var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var returnThis = function() {
                return this;
            };
            module.exports = function(IteratorConstructor, NAME, next) {
                var TO_STRING_TAG = NAME + ' Iterator';
                IteratorConstructor.prototype = create(IteratorPrototype, {
                    next: createPropertyDescriptor(1, next)
                });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/create-property-descriptor.js": function(module, exports) {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/create-property.js": function(module, exports, __webpack_require__) {
            "use strict";
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            module.exports = function(object, key, value) {
                var propertyKey = toPrimitive(key);
                if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                else object[propertyKey] = value;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/define-iterator.js": function(module, exports, __webpack_require__) {
            "use strict";
            var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
            var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
            var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
            var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
            var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");
            var IteratorPrototype = IteratorsCore.IteratorPrototype;
            var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
            var ITERATOR = wellKnownSymbol('iterator');
            var KEYS = 'keys';
            var VALUES = 'values';
            var ENTRIES = 'entries';
            var returnThis = function() {
                return this;
            };
            module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch(KIND){
                        case KEYS:
                            return function keys() {
                                return new IteratorConstructor(this, KIND);
                            };
                        case VALUES:
                            return function values() {
                                return new IteratorConstructor(this, KIND);
                            };
                        case ENTRIES:
                            return function entries() {
                                return new IteratorConstructor(this, KIND);
                            };
                    }
                    return function() {
                        return new IteratorConstructor(this);
                    };
                };
                var TO_STRING_TAG = NAME + ' Iterator';
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                // fix native
                if (anyNativeIterator) {
                    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                        if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                            if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                            else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') hide(CurrentIteratorPrototype, ITERATOR, returnThis);
                        }
                        // Set @@toStringTag to native iterators
                        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                    INCORRECT_VALUES_NAME = true;
                    defaultIterator = function values() {
                        return nativeIterator.call(this);
                    };
                }
                // define iterator
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) hide(IterablePrototype, ITERATOR, defaultIterator);
                Iterators[NAME] = defaultIterator;
                // export additional methods
                if (DEFAULT) {
                    methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    };
                    if (FORCED) {
                        for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
                    } else $({
                        target: NAME,
                        proto: true,
                        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                    }, methods);
                }
                return methods;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/descriptors.js": function(module, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            // Thank's IE8 for his funny defineProperty
            module.exports = !fails(function() {
                return Object.defineProperty({
                }, 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/document-create-element.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var document = global.document;
            // typeof document.createElement is 'object' in old IE
            var exist = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return exist ? document.createElement(it) : {
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/enum-bug-keys.js": function(module, exports) {
            // IE8- don't enum bug keys
            module.exports = [
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf'
            ];
        /***/ },
        /***/ "./node_modules/core-js/internals/export.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
            var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
            /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) target = global;
                else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {
                });
                else target = (global[TARGET] || {
                }).prototype;
                if (target) for(key in source){
                    sourceProperty = source[key];
                    if (options.noTargetGet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
                    // contained in target
                    if (!FORCED && targetProperty !== undefined) {
                        if (typeof sourceProperty === typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    // add a flag to not completely full polyfills
                    if (options.sham || targetProperty && targetProperty.sham) hide(sourceProperty, 'sham', true);
                    // extend global
                    redefine(target, key, sourceProperty, options);
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/fails.js": function(module, exports) {
            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return true;
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/function-to-string.js": function(module, exports, __webpack_require__) {
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            module.exports = shared('native-function-to-string', Function.toString);
        /***/ },
        /***/ "./node_modules/core-js/internals/get-iterator-method.js": function(module, exports, __webpack_require__) {
            var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var ITERATOR = wellKnownSymbol('iterator');
            module.exports = function(it) {
                if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/global.js": function(module, exports, __webpack_require__) {
            (function(global) {
                var O = 'object';
                var check = function(it) {
                    return it && it.Math == Math && it;
                };
                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                module.exports = // eslint-disable-next-line no-undef
                check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global == O && global) || // eslint-disable-next-line no-new-func
                Function('return this')();
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"));
        /***/ },
        /***/ "./node_modules/core-js/internals/has.js": function(module, exports) {
            var hasOwnProperty = {
            }.hasOwnProperty;
            module.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/hidden-keys.js": function(module, exports) {
            module.exports = {
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/hide.js": function(module, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            module.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/html.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var document = global.document;
            module.exports = document && document.documentElement;
        /***/ },
        /***/ "./node_modules/core-js/internals/ie8-dom-define.js": function(module, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
            // Thank's IE8 for his funny defineProperty
            module.exports = !DESCRIPTORS && !fails(function() {
                return Object.defineProperty(createElement('div'), 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/indexed-object.js": function(module, exports, __webpack_require__) {
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
            var split = ''.split;
            module.exports = fails(function() {
                // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
                // eslint-disable-next-line no-prototype-builtins
                return !Object('z').propertyIsEnumerable(0);
            }) ? function(it) {
                return classof(it) == 'String' ? split.call(it, '') : Object(it);
            } : Object;
        /***/ },
        /***/ "./node_modules/core-js/internals/internal-state.js": function(module, exports, __webpack_require__) {
            var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var WeakMap = global.WeakMap;
            var set, get, has;
            var enforce = function(it) {
                return has(it) ? get(it) : set(it, {
                });
            };
            var getterFor = function(TYPE) {
                return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required');
                    return state;
                };
            };
            if (NATIVE_WEAK_MAP) {
                var store = new WeakMap();
                var wmget = store.get;
                var wmhas = store.has;
                var wmset = store.set;
                set = function(it, metadata) {
                    wmset.call(store, it, metadata);
                    return metadata;
                };
                get = function(it) {
                    return wmget.call(store, it) || {
                    };
                };
                has = function(it) {
                    return wmhas.call(store, it);
                };
            } else {
                var STATE = sharedKey('state');
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                    hide(it, STATE, metadata);
                    return metadata;
                };
                get = function(it) {
                    return objectHas(it, STATE) ? it[STATE] : {
                    };
                };
                has = function(it) {
                    return objectHas(it, STATE);
                };
            }
            module.exports = {
                set: set,
                get: get,
                has: has,
                enforce: enforce,
                getterFor: getterFor
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-array-iterator-method.js": function(module, exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var ITERATOR = wellKnownSymbol('iterator');
            var ArrayPrototype = Array.prototype;
            // check on default Array iterator
            module.exports = function(it) {
                return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-forced.js": function(module, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, '.').toLowerCase();
            };
            var data = isForced.data = {
            };
            var NATIVE = isForced.NATIVE = 'N';
            var POLYFILL = isForced.POLYFILL = 'P';
            module.exports = isForced;
        /***/ },
        /***/ "./node_modules/core-js/internals/is-object.js": function(module, exports) {
            module.exports = function(it) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-pure.js": function(module, exports) {
            module.exports = false;
        /***/ },
        /***/ "./node_modules/core-js/internals/iterators-core.js": function(module, exports, __webpack_require__) {
            "use strict";
            var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var ITERATOR = wellKnownSymbol('iterator');
            var BUGGY_SAFARI_ITERATORS = false;
            var returnThis = function() {
                return this;
            };
            // `%IteratorPrototype%` object
            // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
            if ([].keys) {
                arrayIterator = [].keys();
                // Safari 8 has buggy iterators w/o `next`
                if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
                else {
                    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
            }
            if (IteratorPrototype == undefined) IteratorPrototype = {
            };
            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
            module.exports = {
                IteratorPrototype: IteratorPrototype,
                BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/iterators.js": function(module, exports) {
            module.exports = {
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/native-symbol.js": function(module, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                // Chrome 38 Symbol has incorrect toString conversion
                // eslint-disable-next-line no-undef
                return !String(Symbol());
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/native-weak-map.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
            var WeakMap = global.WeakMap;
            module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));
        /***/ },
        /***/ "./node_modules/core-js/internals/object-create.js": function(module, exports, __webpack_require__) {
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
            var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var IE_PROTO = sharedKey('IE_PROTO');
            var PROTOTYPE = 'prototype';
            var Empty = function() {
            };
            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = documentCreateElement('iframe');
                var length = enumBugKeys.length;
                var lt = '<';
                var script = 'script';
                var gt = '>';
                var js = 'java' + script + ':';
                var iframeDocument;
                iframe.style.display = 'none';
                html.appendChild(iframe);
                iframe.src = String(js);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while(length--)delete createDict[PROTOTYPE][enumBugKeys[length]];
                return createDict();
            };
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : defineProperties(result, Properties);
            };
            hiddenKeys[IE_PROTO] = true;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-define-properties.js": function(module, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
            module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var i = 0;
                var key;
                while(length > i)definePropertyModule.f(O, key = keys[i++], Properties[key]);
                return O;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-define-property.js": function(module, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var nativeDefineProperty = Object.defineProperty;
            exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return nativeDefineProperty(O, P, Attributes);
                } catch (error) {
                }
                if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js": function(module, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
            var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE) try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {
                }
                if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-names.js": function(module, exports, __webpack_require__) {
            // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
            var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            var hiddenKeys = enumBugKeys.concat('length', 'prototype');
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js": function(module, exports) {
            exports.f = Object.getOwnPropertySymbols;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-prototype-of.js": function(module, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");
            var IE_PROTO = sharedKey('IE_PROTO');
            var ObjectPrototype = Object.prototype;
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == 'function' && O instanceof O.constructor) return O.constructor.prototype;
                return O instanceof Object ? ObjectPrototype : null;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-keys-internal.js": function(module, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var arrayIndexOf = arrayIncludes(false);
            module.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
                return result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-keys.js": function(module, exports, __webpack_require__) {
            var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            module.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-property-is-enumerable.js": function(module, exports, __webpack_require__) {
            "use strict";
            var nativePropertyIsEnumerable = {
            }.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            // Nashorn ~ JDK8 bug
            var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
                1: 2
            }, 1);
            exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : nativePropertyIsEnumerable;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-set-prototype-of.js": function(module, exports, __webpack_require__) {
            var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
            // Works with __proto__ only. Old v8 can't work with null proto objects.
            /* eslint-disable no-proto */ module.exports = Object.setPrototypeOf || ('__proto__' in {
            } ? (function() {
                var correctSetter = false;
                var test = {
                };
                var setter;
                try {
                    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
                    setter.call(test, []);
                    correctSetter = test instanceof Array;
                } catch (error) {
                }
                return function setPrototypeOf(O, proto) {
                    validateSetPrototypeOfArguments(O, proto);
                    if (correctSetter) setter.call(O, proto);
                    else O.__proto__ = proto;
                    return O;
                };
            })() : undefined);
        /***/ },
        /***/ "./node_modules/core-js/internals/own-keys.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
            var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var Reflect = global.Reflect;
            // all object keys, includes non-enumerable and symbols
            module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/path.js": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        /***/ },
        /***/ "./node_modules/core-js/internals/redefine.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
            var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
            var getInternalState = InternalStateModule.get;
            var enforceInternalState = InternalStateModule.enforce;
            var TEMPLATE = String(nativeFunctionToString).split('toString');
            shared('inspectSource', function(it) {
                return nativeFunctionToString.call(it);
            });
            (module.exports = function(O, key, value, options) {
                var unsafe = options ? !!options.unsafe : false;
                var simple = options ? !!options.enumerable : false;
                var noTargetGet = options ? !!options.noTargetGet : false;
                if (typeof value == 'function') {
                    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
                    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
                }
                if (O === global) {
                    if (simple) O[key] = value;
                    else setGlobal(key, value);
                    return;
                } else if (!unsafe) delete O[key];
                else if (!noTargetGet && O[key]) simple = true;
                if (simple) O[key] = value;
                else hide(O, key, value);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, 'toString', function toString() {
                return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/require-object-coercible.js": function(module, exports) {
            // `RequireObjectCoercible` abstract operation
            // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
            module.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on " + it);
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/set-global.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            module.exports = function(key, value) {
                try {
                    hide(global, key, value);
                } catch (error) {
                    global[key] = value;
                }
                return value;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/set-to-string-tag.js": function(module, exports, __webpack_require__) {
            var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var TO_STRING_TAG = wellKnownSymbol('toStringTag');
            module.exports = function(it, TAG, STATIC) {
                if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) defineProperty(it, TO_STRING_TAG, {
                    configurable: true,
                    value: TAG
                });
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/shared-key.js": function(module, exports, __webpack_require__) {
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
            var keys = shared('keys');
            module.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/shared.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || setGlobal(SHARED, {
            });
            (module.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {
                });
            })('versions', []).push({
                version: '3.1.3',
                mode: IS_PURE ? 'pure' : 'global',
                copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/string-at.js": function(module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            // CONVERT_TO_STRING: true  -> String#at
            // CONVERT_TO_STRING: false -> String#codePointAt
            module.exports = function(that, pos, CONVERT_TO_STRING) {
                var S = String(requireObjectCoercible(that));
                var position = toInteger(pos);
                var size = S.length;
                var first, second;
                if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
                first = S.charCodeAt(position);
                return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-absolute-index.js": function(module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var max = Math.max;
            var min = Math.min;
            // Helper for a popular repeating case of the spec:
            // Let integer be ? ToInteger(index).
            // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
            module.exports = function(index, length) {
                var integer = toInteger(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-indexed-object.js": function(module, exports, __webpack_require__) {
            // toObject with fallback for non-array-like ES3 strings
            var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            module.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-integer.js": function(module, exports) {
            var ceil = Math.ceil;
            var floor = Math.floor;
            // `ToInteger` abstract operation
            // https://tc39.github.io/ecma262/#sec-tointeger
            module.exports = function(argument) {
                return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-length.js": function(module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var min = Math.min;
            // `ToLength` abstract operation
            // https://tc39.github.io/ecma262/#sec-tolength
            module.exports = function(argument) {
                return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0; // 2 ** 53 - 1 == 9007199254740991
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-object.js": function(module, exports, __webpack_require__) {
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            // `ToObject` abstract operation
            // https://tc39.github.io/ecma262/#sec-toobject
            module.exports = function(argument) {
                return Object(requireObjectCoercible(argument));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-primitive.js": function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/uid.js": function(module, exports) {
            var id = 0;
            var postfix = Math.random();
            module.exports = function(key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            module.exports = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null) throw TypeError("Can't set " + String(proto) + ' as a prototype');
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/well-known-symbol.js": function(module, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
            var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
            var Symbol = global.Symbol;
            var store = shared('wks');
            module.exports = function(name) {
                return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name] || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
            };
        /***/ },
        /***/ "./node_modules/core-js/modules/es.array.from.js": function(module, exports, __webpack_require__) {
            var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
            var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
            var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
            var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
                Array.from(iterable);
            });
            // `Array.from` method
            // https://tc39.github.io/ecma262/#sec-array.from
            $({
                target: 'Array',
                stat: true,
                forced: INCORRECT_ITERATION
            }, {
                from: from
            });
        /***/ },
        /***/ "./node_modules/core-js/modules/es.string.iterator.js": function(module, exports, __webpack_require__) {
            "use strict";
            var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
            var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
            var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
            var STRING_ITERATOR = 'String Iterator';
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
            // `String.prototype[@@iterator]` method
            // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
            defineIterator(String, 'String', function(iterated) {
                setInternalState(this, {
                    type: STRING_ITERATOR,
                    string: String(iterated),
                    index: 0
                });
            // `%StringIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
            }, function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index = state.index;
                var point;
                if (index >= string.length) return {
                    value: undefined,
                    done: true
                };
                point = codePointAt(string, index, true);
                state.index += point.length;
                return {
                    value: point,
                    done: false
                };
            });
        /***/ },
        /***/ "./node_modules/webpack/buildin/global.js": function(module, exports) {
            var g;
            // This works in non-strict mode
            g = (function() {
                return this;
            })();
            try {
                // This works if eval is allowed (see CSP)
                g = g || Function("return this")() || eval("this");
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module.exports = g;
        /***/ },
        /***/ "./src/default-attrs.json": function(module) {
            module.exports = {
                "xmlns": "http://www.w3.org/2000/svg",
                "width": 24,
                "height": 24,
                "viewBox": "0 0 24 24",
                "fill": "none",
                "stroke": "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            };
        /***/ },
        /***/ "./src/icon.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
            var _dedupe2 = _interopRequireDefault(_dedupe);
            var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");
            var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var Icon = function() {
                function Icon(name, contents) {
                    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                    _classCallCheck(this, Icon);
                    this.name = name;
                    this.contents = contents;
                    this.tags = tags;
                    this.attrs = _extends({
                    }, _defaultAttrs2.default, {
                        class: 'feather feather-' + name
                    });
                }
                /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */ _createClass(Icon, [
                    {
                        key: 'toSvg',
                        value: function toSvg() {
                            var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                            };
                            var combinedAttrs = _extends({
                            }, this.attrs, attrs, {
                                class: _dedupe2.default(this.attrs.class, attrs.class)
                            });
                            return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
                        }
                    },
                    {
                        key: 'toString',
                        value: function toString() {
                            return this.contents;
                        }
                    }
                ]);
                return Icon;
            }();
            /**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */ function attrsToString(attrs) {
                return Object.keys(attrs).map(function(key) {
                    return key + '="' + attrs[key] + '"';
                }).join(' ');
            }
            exports.default = Icon;
        /***/ },
        /***/ "./src/icons.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");
            var _icon2 = _interopRequireDefault(_icon);
            var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");
            var _icons2 = _interopRequireDefault(_icons);
            var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");
            var _tags2 = _interopRequireDefault(_tags);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.default = Object.keys(_icons2.default).map(function(key) {
                return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
            }).reduce(function(object, icon) {
                object[icon.name] = icon;
                return object;
            }, {
            });
        /***/ },
        /***/ "./src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");
            var _toSvg2 = _interopRequireDefault(_toSvg);
            var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");
            var _replace2 = _interopRequireDefault(_replace);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            module.exports = {
                icons: _icons2.default,
                toSvg: _toSvg2.default,
                replace: _replace2.default
            };
        /***/ },
        /***/ "./src/replace.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            }; /* eslint-env browser */ 
            var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
            var _dedupe2 = _interopRequireDefault(_dedupe);
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            /**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */ function replace() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                if (typeof document === 'undefined') throw new Error('`feather.replace()` only works in a browser environment.');
                var elementsToReplace = document.querySelectorAll('[data-feather]');
                Array.from(elementsToReplace).forEach(function(element) {
                    return replaceElement(element, attrs);
                });
            }
            /**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */ function replaceElement(element) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                var elementAttrs = getAttrs(element);
                var name = elementAttrs['data-feather'];
                delete elementAttrs['data-feather'];
                var svgString = _icons2.default[name].toSvg(_extends({
                }, attrs, elementAttrs, {
                    class: _dedupe2.default(attrs.class, elementAttrs.class)
                }));
                var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
                var svgElement = svgDocument.querySelector('svg');
                element.parentNode.replaceChild(svgElement, element);
            }
            /**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */ function getAttrs(element) {
                return Array.from(element.attributes).reduce(function(attrs, attr) {
                    attrs[attr.name] = attr.value;
                    return attrs;
                }, {
                });
            }
            exports.default = replace;
        /***/ },
        /***/ "./src/tags.json": function(module) {
            module.exports = {
                "activity": [
                    "pulse",
                    "health",
                    "action",
                    "motion"
                ],
                "airplay": [
                    "stream",
                    "cast",
                    "mirroring"
                ],
                "alert-circle": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "alert-octagon": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "alert-triangle": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "align-center": [
                    "text alignment",
                    "center"
                ],
                "align-justify": [
                    "text alignment",
                    "justified"
                ],
                "align-left": [
                    "text alignment",
                    "left"
                ],
                "align-right": [
                    "text alignment",
                    "right"
                ],
                "anchor": [],
                "archive": [
                    "index",
                    "box"
                ],
                "at-sign": [
                    "mention",
                    "at",
                    "email",
                    "message"
                ],
                "award": [
                    "achievement",
                    "badge"
                ],
                "aperture": [
                    "camera",
                    "photo"
                ],
                "bar-chart": [
                    "statistics",
                    "diagram",
                    "graph"
                ],
                "bar-chart-2": [
                    "statistics",
                    "diagram",
                    "graph"
                ],
                "battery": [
                    "power",
                    "electricity"
                ],
                "battery-charging": [
                    "power",
                    "electricity"
                ],
                "bell": [
                    "alarm",
                    "notification",
                    "sound"
                ],
                "bell-off": [
                    "alarm",
                    "notification",
                    "silent"
                ],
                "bluetooth": [
                    "wireless"
                ],
                "book-open": [
                    "read",
                    "library"
                ],
                "book": [
                    "read",
                    "dictionary",
                    "booklet",
                    "magazine",
                    "library"
                ],
                "bookmark": [
                    "read",
                    "clip",
                    "marker",
                    "tag"
                ],
                "box": [
                    "cube"
                ],
                "briefcase": [
                    "work",
                    "bag",
                    "baggage",
                    "folder"
                ],
                "calendar": [
                    "date"
                ],
                "camera": [
                    "photo"
                ],
                "cast": [
                    "chromecast",
                    "airplay"
                ],
                "circle": [
                    "off",
                    "zero",
                    "record"
                ],
                "clipboard": [
                    "copy"
                ],
                "clock": [
                    "time",
                    "watch",
                    "alarm"
                ],
                "cloud-drizzle": [
                    "weather",
                    "shower"
                ],
                "cloud-lightning": [
                    "weather",
                    "bolt"
                ],
                "cloud-rain": [
                    "weather"
                ],
                "cloud-snow": [
                    "weather",
                    "blizzard"
                ],
                "cloud": [
                    "weather"
                ],
                "codepen": [
                    "logo"
                ],
                "codesandbox": [
                    "logo"
                ],
                "code": [
                    "source",
                    "programming"
                ],
                "coffee": [
                    "drink",
                    "cup",
                    "mug",
                    "tea",
                    "cafe",
                    "hot",
                    "beverage"
                ],
                "columns": [
                    "layout"
                ],
                "command": [
                    "keyboard",
                    "cmd",
                    "terminal",
                    "prompt"
                ],
                "compass": [
                    "navigation",
                    "safari",
                    "travel",
                    "direction"
                ],
                "copy": [
                    "clone",
                    "duplicate"
                ],
                "corner-down-left": [
                    "arrow",
                    "return"
                ],
                "corner-down-right": [
                    "arrow"
                ],
                "corner-left-down": [
                    "arrow"
                ],
                "corner-left-up": [
                    "arrow"
                ],
                "corner-right-down": [
                    "arrow"
                ],
                "corner-right-up": [
                    "arrow"
                ],
                "corner-up-left": [
                    "arrow"
                ],
                "corner-up-right": [
                    "arrow"
                ],
                "cpu": [
                    "processor",
                    "technology"
                ],
                "credit-card": [
                    "purchase",
                    "payment",
                    "cc"
                ],
                "crop": [
                    "photo",
                    "image"
                ],
                "crosshair": [
                    "aim",
                    "target"
                ],
                "database": [
                    "storage",
                    "memory"
                ],
                "delete": [
                    "remove"
                ],
                "disc": [
                    "album",
                    "cd",
                    "dvd",
                    "music"
                ],
                "dollar-sign": [
                    "currency",
                    "money",
                    "payment"
                ],
                "droplet": [
                    "water"
                ],
                "edit": [
                    "pencil",
                    "change"
                ],
                "edit-2": [
                    "pencil",
                    "change"
                ],
                "edit-3": [
                    "pencil",
                    "change"
                ],
                "eye": [
                    "view",
                    "watch"
                ],
                "eye-off": [
                    "view",
                    "watch",
                    "hide",
                    "hidden"
                ],
                "external-link": [
                    "outbound"
                ],
                "facebook": [
                    "logo",
                    "social"
                ],
                "fast-forward": [
                    "music"
                ],
                "figma": [
                    "logo",
                    "design",
                    "tool"
                ],
                "file-minus": [
                    "delete",
                    "remove",
                    "erase"
                ],
                "file-plus": [
                    "add",
                    "create",
                    "new"
                ],
                "file-text": [
                    "data",
                    "txt",
                    "pdf"
                ],
                "film": [
                    "movie",
                    "video"
                ],
                "filter": [
                    "funnel",
                    "hopper"
                ],
                "flag": [
                    "report"
                ],
                "folder-minus": [
                    "directory"
                ],
                "folder-plus": [
                    "directory"
                ],
                "folder": [
                    "directory"
                ],
                "framer": [
                    "logo",
                    "design",
                    "tool"
                ],
                "frown": [
                    "emoji",
                    "face",
                    "bad",
                    "sad",
                    "emotion"
                ],
                "gift": [
                    "present",
                    "box",
                    "birthday",
                    "party"
                ],
                "git-branch": [
                    "code",
                    "version control"
                ],
                "git-commit": [
                    "code",
                    "version control"
                ],
                "git-merge": [
                    "code",
                    "version control"
                ],
                "git-pull-request": [
                    "code",
                    "version control"
                ],
                "github": [
                    "logo",
                    "version control"
                ],
                "gitlab": [
                    "logo",
                    "version control"
                ],
                "globe": [
                    "world",
                    "browser",
                    "language",
                    "translate"
                ],
                "hard-drive": [
                    "computer",
                    "server",
                    "memory",
                    "data"
                ],
                "hash": [
                    "hashtag",
                    "number",
                    "pound"
                ],
                "headphones": [
                    "music",
                    "audio",
                    "sound"
                ],
                "heart": [
                    "like",
                    "love",
                    "emotion"
                ],
                "help-circle": [
                    "question mark"
                ],
                "hexagon": [
                    "shape",
                    "node.js",
                    "logo"
                ],
                "home": [
                    "house",
                    "living"
                ],
                "image": [
                    "picture"
                ],
                "inbox": [
                    "email"
                ],
                "instagram": [
                    "logo",
                    "camera"
                ],
                "key": [
                    "password",
                    "login",
                    "authentication",
                    "secure"
                ],
                "layers": [
                    "stack"
                ],
                "layout": [
                    "window",
                    "webpage"
                ],
                "life-bouy": [
                    "help",
                    "life ring",
                    "support"
                ],
                "link": [
                    "chain",
                    "url"
                ],
                "link-2": [
                    "chain",
                    "url"
                ],
                "linkedin": [
                    "logo",
                    "social media"
                ],
                "list": [
                    "options"
                ],
                "lock": [
                    "security",
                    "password",
                    "secure"
                ],
                "log-in": [
                    "sign in",
                    "arrow",
                    "enter"
                ],
                "log-out": [
                    "sign out",
                    "arrow",
                    "exit"
                ],
                "mail": [
                    "email",
                    "message"
                ],
                "map-pin": [
                    "location",
                    "navigation",
                    "travel",
                    "marker"
                ],
                "map": [
                    "location",
                    "navigation",
                    "travel"
                ],
                "maximize": [
                    "fullscreen"
                ],
                "maximize-2": [
                    "fullscreen",
                    "arrows",
                    "expand"
                ],
                "meh": [
                    "emoji",
                    "face",
                    "neutral",
                    "emotion"
                ],
                "menu": [
                    "bars",
                    "navigation",
                    "hamburger"
                ],
                "message-circle": [
                    "comment",
                    "chat"
                ],
                "message-square": [
                    "comment",
                    "chat"
                ],
                "mic-off": [
                    "record",
                    "sound",
                    "mute"
                ],
                "mic": [
                    "record",
                    "sound",
                    "listen"
                ],
                "minimize": [
                    "exit fullscreen",
                    "close"
                ],
                "minimize-2": [
                    "exit fullscreen",
                    "arrows",
                    "close"
                ],
                "minus": [
                    "subtract"
                ],
                "monitor": [
                    "tv",
                    "screen",
                    "display"
                ],
                "moon": [
                    "dark",
                    "night"
                ],
                "more-horizontal": [
                    "ellipsis"
                ],
                "more-vertical": [
                    "ellipsis"
                ],
                "mouse-pointer": [
                    "arrow",
                    "cursor"
                ],
                "move": [
                    "arrows"
                ],
                "music": [
                    "note"
                ],
                "navigation": [
                    "location",
                    "travel"
                ],
                "navigation-2": [
                    "location",
                    "travel"
                ],
                "octagon": [
                    "stop"
                ],
                "package": [
                    "box",
                    "container"
                ],
                "paperclip": [
                    "attachment"
                ],
                "pause": [
                    "music",
                    "stop"
                ],
                "pause-circle": [
                    "music",
                    "audio",
                    "stop"
                ],
                "pen-tool": [
                    "vector",
                    "drawing"
                ],
                "percent": [
                    "discount"
                ],
                "phone-call": [
                    "ring"
                ],
                "phone-forwarded": [
                    "call"
                ],
                "phone-incoming": [
                    "call"
                ],
                "phone-missed": [
                    "call"
                ],
                "phone-off": [
                    "call",
                    "mute"
                ],
                "phone-outgoing": [
                    "call"
                ],
                "phone": [
                    "call"
                ],
                "play": [
                    "music",
                    "start"
                ],
                "pie-chart": [
                    "statistics",
                    "diagram"
                ],
                "play-circle": [
                    "music",
                    "start"
                ],
                "plus": [
                    "add",
                    "new"
                ],
                "plus-circle": [
                    "add",
                    "new"
                ],
                "plus-square": [
                    "add",
                    "new"
                ],
                "pocket": [
                    "logo",
                    "save"
                ],
                "power": [
                    "on",
                    "off"
                ],
                "printer": [
                    "fax",
                    "office",
                    "device"
                ],
                "radio": [
                    "signal"
                ],
                "refresh-cw": [
                    "synchronise",
                    "arrows"
                ],
                "refresh-ccw": [
                    "arrows"
                ],
                "repeat": [
                    "loop",
                    "arrows"
                ],
                "rewind": [
                    "music"
                ],
                "rotate-ccw": [
                    "arrow"
                ],
                "rotate-cw": [
                    "arrow"
                ],
                "rss": [
                    "feed",
                    "subscribe"
                ],
                "save": [
                    "floppy disk"
                ],
                "scissors": [
                    "cut"
                ],
                "search": [
                    "find",
                    "magnifier",
                    "magnifying glass"
                ],
                "send": [
                    "message",
                    "mail",
                    "email",
                    "paper airplane",
                    "paper aeroplane"
                ],
                "settings": [
                    "cog",
                    "edit",
                    "gear",
                    "preferences"
                ],
                "share-2": [
                    "network",
                    "connections"
                ],
                "shield": [
                    "security",
                    "secure"
                ],
                "shield-off": [
                    "security",
                    "insecure"
                ],
                "shopping-bag": [
                    "ecommerce",
                    "cart",
                    "purchase",
                    "store"
                ],
                "shopping-cart": [
                    "ecommerce",
                    "cart",
                    "purchase",
                    "store"
                ],
                "shuffle": [
                    "music"
                ],
                "skip-back": [
                    "music"
                ],
                "skip-forward": [
                    "music"
                ],
                "slack": [
                    "logo"
                ],
                "slash": [
                    "ban",
                    "no"
                ],
                "sliders": [
                    "settings",
                    "controls"
                ],
                "smartphone": [
                    "cellphone",
                    "device"
                ],
                "smile": [
                    "emoji",
                    "face",
                    "happy",
                    "good",
                    "emotion"
                ],
                "speaker": [
                    "audio",
                    "music"
                ],
                "star": [
                    "bookmark",
                    "favorite",
                    "like"
                ],
                "stop-circle": [
                    "media",
                    "music"
                ],
                "sun": [
                    "brightness",
                    "weather",
                    "light"
                ],
                "sunrise": [
                    "weather",
                    "time",
                    "morning",
                    "day"
                ],
                "sunset": [
                    "weather",
                    "time",
                    "evening",
                    "night"
                ],
                "tablet": [
                    "device"
                ],
                "tag": [
                    "label"
                ],
                "target": [
                    "logo",
                    "bullseye"
                ],
                "terminal": [
                    "code",
                    "command line",
                    "prompt"
                ],
                "thermometer": [
                    "temperature",
                    "celsius",
                    "fahrenheit",
                    "weather"
                ],
                "thumbs-down": [
                    "dislike",
                    "bad",
                    "emotion"
                ],
                "thumbs-up": [
                    "like",
                    "good",
                    "emotion"
                ],
                "toggle-left": [
                    "on",
                    "off",
                    "switch"
                ],
                "toggle-right": [
                    "on",
                    "off",
                    "switch"
                ],
                "tool": [
                    "settings",
                    "spanner"
                ],
                "trash": [
                    "garbage",
                    "delete",
                    "remove",
                    "bin"
                ],
                "trash-2": [
                    "garbage",
                    "delete",
                    "remove",
                    "bin"
                ],
                "triangle": [
                    "delta"
                ],
                "truck": [
                    "delivery",
                    "van",
                    "shipping",
                    "transport",
                    "lorry"
                ],
                "tv": [
                    "television",
                    "stream"
                ],
                "twitch": [
                    "logo"
                ],
                "twitter": [
                    "logo",
                    "social"
                ],
                "type": [
                    "text"
                ],
                "umbrella": [
                    "rain",
                    "weather"
                ],
                "unlock": [
                    "security"
                ],
                "user-check": [
                    "followed",
                    "subscribed"
                ],
                "user-minus": [
                    "delete",
                    "remove",
                    "unfollow",
                    "unsubscribe"
                ],
                "user-plus": [
                    "new",
                    "add",
                    "create",
                    "follow",
                    "subscribe"
                ],
                "user-x": [
                    "delete",
                    "remove",
                    "unfollow",
                    "unsubscribe",
                    "unavailable"
                ],
                "user": [
                    "person",
                    "account"
                ],
                "users": [
                    "group"
                ],
                "video-off": [
                    "camera",
                    "movie",
                    "film"
                ],
                "video": [
                    "camera",
                    "movie",
                    "film"
                ],
                "voicemail": [
                    "phone"
                ],
                "volume": [
                    "music",
                    "sound",
                    "mute"
                ],
                "volume-1": [
                    "music",
                    "sound"
                ],
                "volume-2": [
                    "music",
                    "sound"
                ],
                "volume-x": [
                    "music",
                    "sound",
                    "mute"
                ],
                "watch": [
                    "clock",
                    "time"
                ],
                "wifi-off": [
                    "disabled"
                ],
                "wifi": [
                    "connection",
                    "signal",
                    "wireless"
                ],
                "wind": [
                    "weather",
                    "air"
                ],
                "x-circle": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "x-octagon": [
                    "delete",
                    "stop",
                    "alert",
                    "warning",
                    "times",
                    "clear"
                ],
                "x-square": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "x": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "youtube": [
                    "logo",
                    "video",
                    "play"
                ],
                "zap-off": [
                    "flash",
                    "camera",
                    "lightning"
                ],
                "zap": [
                    "flash",
                    "camera",
                    "lightning"
                ],
                "zoom-in": [
                    "magnifying glass"
                ],
                "zoom-out": [
                    "magnifying glass"
                ]
            };
        /***/ },
        /***/ "./src/to-svg.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            /**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */ function toSvg(name) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');
                if (!name) throw new Error('The required `key` (icon name) parameter is missing.');
                if (!_icons2.default[name]) throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
                return _icons2.default[name].toSvg(attrs);
            }
            exports.default = toSvg;
        /***/ },
        /***/ 0: function(module, exports, __webpack_require__) {
            __webpack_require__(/*! core-js/es/array/from */ "./node_modules/core-js/es/array/from.js");
            module.exports = __webpack_require__(/*! /home/travis/build/feathericons/feather/src/index.js */ "./src/index.js");
        /***/ }
    }));
});

},{}],"9t2Fz":[function(require,module,exports) {
'use strict';
(function(a, b) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = b() : "function" === typeof define && define.amd ? define(b) : (a = "undefined" !== typeof globalThis ? globalThis : a || self, a.console = a.console || {
    }, a.console.success = b());
})(this, function() {
    let a = "undefined" !== typeof window && "undefined" !== typeof window.document;
    var b = a ? "background-color: green;" : "\u001b[42m", c = a ? "color: green;" : "\u001b[32m", d = a ? "color: white;" : "\u001b[37m", e = a ? "" : "\u001b[0m";
    console.success = function(f) {
        a ? console.log("%c \u2713 " + `%c ${f}`, `${b} ${d}`, c) : console.log(b + d, "\u2713", e, c, ...arguments, e);
    };
    return console.success;
});

},{}],"gpheC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-unused-vars: 0 */ var _core = require("./core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _notification = require("./plugins/notification");
var _navbar = require("./plugins/navbar");
var _message = require("./plugins/message");
var _dropdown = require("./plugins/dropdown");
var _modal = require("./plugins/modal");
var _alert = require("./plugins/alert");
var _file = require("./plugins/file");
var _tabs = require("./plugins/tabs");
var _panelTabs = require("./plugins/panelTabs");
exports.default = _coreDefault.default;

},{"./core":"3qkuT","./plugins/notification":"fbgKu","./plugins/navbar":"d7XDu","./plugins/message":"dz00r","./plugins/dropdown":"aaUn8","./plugins/modal":"kvWxA","./plugins/alert":"bPvUj","./plugins/file":"1BTbm","./plugins/tabs":"bVBo2","./plugins/panelTabs":"juewO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3qkuT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _data = require("./Data");
var _dataDefault = parcelHelpers.interopDefault(_data);
/**
 * Wrap an element around Bulma.
 * @param {String|HTMLElement} selector The selector or HTMLElement to wrap.
 */ function Bulma(selector) {
    if (!(this instanceof Bulma)) return new Bulma(selector);
    if (selector instanceof Bulma) return selector;
    if (selector instanceof HTMLElement) this._elem = selector;
    else this._elem = document.querySelector(selector);
    if (!selector) this._elem = document.createElement('div');
    if (!this._elem.hasOwnProperty(Bulma.id)) this._elem[Bulma.id] = _dataDefault.default.uid++;
    return this;
}
/**
 * Current BulmaJS version.
 * @type {String}
 */ Bulma.VERSION = '0.12.1';
/**
 * Unique ID of Bulma
 * @type {String}
 */ Bulma.id = 'bulma-' + new Date().getTime();
/**
 * Global data cache for HTML elements
 * @type {Data}
 */ Bulma.cache = new _dataDefault.default();
/**
 * An index of the registered plugins
 * @type {Object}
 */ Bulma.plugins = {
};
/**
 * Helper method to create a new plugin.
 * @param  {String} key The plugin's key
 * @param  {Object} config The config to be passed to the plugin
 * @return {Object} The newly created plugin instance
 */ Bulma.create = (key, config)=>{
    if (!key || !Bulma.plugins.hasOwnProperty(key)) throw new Error('[BulmaJS] A plugin with the key \'' + key + '\' has not been registered.');
    return new Bulma.plugins[key].handler(config);
};
/**
 * Register a new plugin
 * @param  {String} key The key to register the plugin under
 * @param  {Object} plugin The plugin's main constructor
 * @param  {number?} priority The priority this plugin has over other plugins. Higher means the plugin is registered before lower.
 * @return {undefined}
 */ Bulma.registerPlugin = (key, plugin, priority = 0)=>{
    if (!key) throw new Error('[BulmaJS] Key attribute is required.');
    Bulma.plugins[key] = {
        priority: priority,
        handler: plugin
    };
    Bulma.prototype[key] = function(config) {
        return new Bulma.plugins[key].handler(config, this);
    };
};
/**
 * Parse the HTML DOM searching for data-bulma attributes. We will then pass
 * each element to the appropriate plugin to handle the required processing.
 * @param  {HTMLElement} root The root of the document we're going to parse.
 * @return {undefined}
 */ Bulma.parseDocument = (root = document)=>{
    let sortedPlugins = Object.keys(Bulma.plugins).sort((a, b)=>Bulma.plugins[a].priority < Bulma.plugins[b].priority
    );
    Bulma.each(sortedPlugins, (key)=>{
        if (!Bulma.plugins[key].handler.hasOwnProperty('parseDocument')) {
            // eslint-disable-next-line no-console
            console.error('[BulmaJS] Plugin ' + key + ' does not have a parseDocument method. Automatic document parsing is not possible for this plugin.');
            return;
        }
        Bulma.plugins[key].handler.parseDocument(root);
    });
};
/**
 * Create an element and assign classes
 * @param {string} name The name of the element to create
 * @param {array} classes An array of classes to add to the element
 * @return {HTMLElement} The newly created element
 */ Bulma.createElement = (name, classes)=>{
    if (!classes) classes = [];
    if (typeof classes === 'string') classes = [
        classes
    ];
    let elem = document.createElement(name);
    Bulma.each(classes, (className)=>{
        elem.classList.add(className);
    });
    return elem;
};
/**
 * Find an element otherwise create a new one.
 * @param {string} query The CSS selector query to find
 * @param {HTMLElement|null} parent The parent we want to search/create within
 * @param {[string]} elemName The name of the element to create
 * @param {[array]} classes The classes to apply to the element
 * @returns {HTMLElement} The HTML element we found or created
 */ Bulma.findOrCreateElement = (query, parent = document, elemName = 'div', classes = [])=>{
    var elem = parent.querySelector(query);
    if (!elem) {
        if (classes.length === 0) classes = query.split('.').filter((item)=>{
            return item;
        });
        var newElem = Bulma.createElement(elemName, classes);
        parent.appendChild(newElem);
        return newElem;
    }
    return elem;
};
/**
 * For loop helper
 * @param {*} objects The array/object to loop through
 * @param {*} callback The callback used for each item
 */ Bulma.each = (objects, callback)=>{
    let i;
    for(i = 0; i < objects.length; i++)callback(objects[i], i);
};
/**
 * Make an AJAX GET request to the specified URL. Stripping any script tags from the response.
 * @param {*} url The url to send the request to
 * @returns {Promise} Returns a promise containing the response HTML or error
 */ Bulma.ajax = (url)=>{
    return new Promise((resolve, reject)=>{
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = ()=>{
            if (request.status >= 200 && request.status < 400) resolve(Bulma._stripScripts(request.responseText));
            else reject();
        };
        request.onerror = ()=>reject()
        ;
        request.send();
    });
};
/**
 * Strip any script tags from a HTML string.
 * @param {string} htmlString 
 * @returns {string} The cleaned HTML string
 * 
 * @private
 */ Bulma._stripScripts = (htmlString)=>{
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while(i--)scripts[i].parentNode.removeChild(scripts[i]);
    return div.innerHTML.replace(/  +/g, ' ');
};
/**
 * Grabs a configuration property from the window.bulmaOptions global, if it's defined,
 * returns defaultValue otherwise.
 * @param {string} key The name of the option to check for
 * @param {*} [defaultValue=null] A default value of the key is not found
 */ Bulma.getGlobalConfig = function(key, defaultValue = null) {
    if (!window.hasOwnProperty('bulmaOptions')) return defaultValue;
    if (!window.bulmaOptions.hasOwnProperty(key)) return defaultValue;
    return window.bulmaOptions[key];
};
/**
 * Get or set custom data on a Bulma element.
 * @type {String} key
 * @type {any} value
 * @returns {Bulma}
 */ Bulma.prototype.data = function(key, value) {
    if (!value) return Bulma.cache.get(this._elem[Bulma.id], key);
    Bulma.cache.set(this._elem[Bulma.id], key, value);
    return this;
};
/**
 * Destroy the data for an element.
 * @returns {Bulma}
 */ Bulma.prototype.destroyData = function() {
    Bulma.cache.destroy(this._elem[Bulma.id]);
    return this;
};
/**
 * Returns the internal HTMLElement we're wrapping.
 *
 * @returns {HTMLElement}
 */ Bulma.prototype.getElement = function() {
    return this._elem;
};
document.addEventListener('DOMContentLoaded', ()=>{
    if (Bulma.getGlobalConfig('autoParseDocument', true)) Bulma.parseDocument();
    if (Bulma.getGlobalConfig('onLoaded')) Bulma.getGlobalConfig('onLoaded')();
});
exports.default = Bulma;

},{"./Data":"d5PzJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d5PzJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Data {
    constructor(){
        this._data = {
        };
    }
    set(uid, key, value) {
        if (!this._data.hasOwnProperty(uid)) this._data[uid] = {
        };
        this._data[uid][key] = value;
    }
    get(uid, key) {
        if (!this._data.hasOwnProperty(uid)) return undefined;
        return this._data[uid][key];
    }
    destroy(uid) {
        if (this._data.hasOwnProperty(uid)) delete this._data[uid];
    }
}
Data.uid = 1;
exports.default = Data;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fbgKu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Notification
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 * @extends DismissableComponent
 */ parcelHelpers.export(exports, "Notification", ()=>Notification
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _dismissableComponent = require("../dismissableComponent");
var _dismissableComponentDefault = parcelHelpers.interopDefault(_dismissableComponent);
class Notification extends _dismissableComponentDefault.default {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @return {undefined}
     */ static parseDocument(context) {
        let elements;
        if (typeof context.classList === 'object' && context.classList.contains('notification')) elements = [
            context
        ];
        else elements = context.querySelectorAll('.notification');
        _coreDefault.default.each(elements, (element)=>{
            let bulmaElement = _coreDefault.default(element);
            if (bulmaElement.data('notification')) return;
            let closeBtn = element.querySelector('.delete');
            bulmaElement.notification({
                body: null,
                closeButton: closeBtn,
                isDismissable: !!closeBtn,
                destroyOnDismiss: true,
                dismissInterval: element.hasAttribute('data-dismiss-interval') ? element.getAttribute('data-dismiss-interval') : null
            });
        });
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super('notification', config, root);
        // TODO: Move this into the DismissableComponent class. Due to the required
        // changes between different components, we may need a way to trigger this
        // when the component is ready.
        if (this.isDismissable) {
            if (!this.config.has('closeButton')) this.prependCloseButton();
            this.setupCloseEvent();
        }
        _coreDefault.default(this.root).data('notification', this);
        this.trigger('init');
    }
}
_coreDefault.default.registerPlugin('notification', Notification);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","../dismissableComponent":"69wiJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"69wiJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _core = require("./core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("./plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class DismissableComponent extends _pluginDefault.default {
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
            isDismissable: false,
            destroyOnDismiss: true,
            element: null
        };
    }
    /**
     * Plugin constructor
     * @param  {string} name Plugin's name
     * @param  {Object} config Plugin's config
     * @return {this} The new plugin instance
     */ constructor(name, config, root){
        if (!root._elem.classList.contains(name)) {
            config['parent'] = root;
            root = null;
        }
        super(config, root);
        /**
         * The name of this component, this will be used as the root class
         * @type {string}
         */ this.name = name;
        /**
        * Body text.
        * @type {string}
        */ this.body = this.config.get('body');
        /**
        * Color modifier.
        * @type {string} Possible values are null, primary, info, success, warning, danger
        */ this.color = this.config.get('color');
        /**
        * How long to wait before auto dismissing the component.
        * @type {int|null} If null component must be dismissed manually.
        */ this.dismissInterval = this.config.get('dismissInterval') ? this.createDismissInterval(this.config.get('dismissInterval')) : null;
        /**
        * Does this component have a dismiss button?
        * @type {Boolean}
        */ this.isDismissable = this.config.get('isDismissable');
        /**
        * Should this component be destroyed when it is dismissed.
        * @type {Boolean}
        */ this.destroyOnDismiss = this.config.get('destroyOnDismiss');
        // TODO: Make internal element references all be a Bulma instance. This will keep consistency.
        if (!(this.parent instanceof _coreDefault.default)) this.parent = _coreDefault.default(this.parent);
        /**
        * The root element.
        * @type {HTMLElement|null} If this is not provided a new element will be created.
        */ this.root = this.config.get('root', this.createRootElement.bind(this));
        /**
        * The element used to close the component.
        * @type {HTMLElement}
        */ this.closeButton = this.config.get('closeButton', this.createCloseButton());
        if (this.body) this.insertBody();
        if (this.color) this.setColor();
    }
    /**
     * Create the main element.
     * @return {HTMLElement}
     */ createRootElement() {
        let elem = document.createElement('div');
        elem.classList.add(this.name, 'is-hidden');
        elem.setAttribute('data-bulma-attached', 'attached');
        this.parent.getElement().appendChild(elem);
        return elem;
    }
    /**
     * Show the component.
     * @return {undefined}
     */ show() {
        this.root.classList.remove('is-hidden');
    }
    /**
     * Hide the component.
     * @return {undefined}
     */ hide() {
        this.root.classList.add('is-hidden');
    }
    /**
     * Insert the body text into the component.
     * @return {undefined}
     */ insertBody() {
        this.root.innerHTML = this.body;
    }
    /**
     * Create the element that will be used to close the component.
     * @return {HTMLElement} The newly created close button
     */ createCloseButton() {
        var closeButton = document.createElement('button');
        closeButton.setAttribute('type', 'button');
        closeButton.classList.add('delete');
        return closeButton;
    }
    /**
     * Create an interval to dismiss the component after the set number of ms.
     * @param  {int} interval The time to wait before dismissing the component
     * @return {undefined}
     */ createDismissInterval(interval) {
        return setInterval(()=>{
            this.handleCloseEvent();
        }, interval);
    }
    /**
     * Insert the close button before our content.
     * @return {undefined}
     */ prependCloseButton() {
        this.root.insertBefore(this.closeButton, this.root.firstChild);
    }
    /**
     * Setup the event listener for the close button.
     * @return {undefined}
     */ setupCloseEvent() {
        this.closeButton.addEventListener('click', this.handleCloseEvent.bind(this));
    }
    /**
     * Handle the event when our close button is clicked.
     * @return {undefined}
     */ handleCloseEvent() {
        this.trigger('dismissed');
        if (this.destroyOnDismiss) this.destroy();
        else this.hide();
        this.trigger('close');
    }
    /**
     * Set the colour of the component.
     * @return {undefined}
     */ setColor() {
        this.root.classList.add('is-' + this.color);
    }
    /**
     * Destroy the component, removing the event listener, interval and element.
     * @return {undefined}
     */ destroy() {
        super.destroy();
        if (this.closeButton) this.closeButton.removeEventListener('click', this.handleCloseEvent.bind(this));
        clearInterval(this.dismissInterval);
        this.parent.getElement().removeChild(this.root);
        this.parent = null;
        this.root = null;
        this.trigger('destroyed');
    }
}
exports.default = DismissableComponent;

},{"./core":"3qkuT","./plugin":"jekS2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jekS2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configBag = require("./ConfigBag");
var _configBagDefault = parcelHelpers.interopDefault(_configBag);
var _core = require("./core");
var _coreDefault = parcelHelpers.interopDefault(_core);
class Plugin {
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
        };
    }
    /**
     * Create a plugin.
     * @param {object} config The config for this plugin
     */ constructor(config = {
    }, root){
        config.root = root instanceof _coreDefault.default ? root._elem : root;
        this.config = new _configBagDefault.default({
            ...this.constructor.defaultConfig(),
            ...config
        });
        if (!root && !this.config.has('parent')) throw new Error('A plugin requires a root and/or a parent.');
        this.parent = this.config.get('parent', config.root ? config.root.parentNode : null);
        this._events = {
        };
    }
    on(event, callback) {
        if (!this._events.hasOwnProperty(event)) this._events[event] = [];
        this._events[event].push(callback);
    }
    trigger(event, data = {
    }) {
        if (!this._events.hasOwnProperty(event)) return;
        for(let i = 0; i < this._events[event].length; i++)this._events[event][i](data);
    }
    destroy() {
        _coreDefault.default(this.root).destroyData();
    }
}
exports.default = Plugin;

},{"./ConfigBag":"evZUs","./core":"3qkuT","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"evZUs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ConfigBag {
    constructor(initialConfig = []){
        if (typeof initialConfig !== 'object') throw new TypeError('initialConfig must be of type object.');
        this._items = initialConfig;
    }
    /**
     * Set a new config property
     * @param {string} key The config property's key
     * @param {mixed} value The config property's value
     */ set(key, value) {
        if (!key || !value) throw new Error('A key and value must be provided when setting a new option.');
        this._items[key] = value;
    }
    /**
     * Check if a key exists
     * @param {string} key
     * @returns {boolean}
     */ has(key) {
        if (!key) throw new Error('A key must be provided.');
        return this._items.hasOwnProperty(key) && this._items[key];
    }
    /**
     * Get a property by it's key. Returns the defaultValue if it doesn't exists
     * @param {string} key 
     * @param {mixed} defaultValue
     * @returns {mixed}
     */ get(key, defaultValue = null) {
        if (defaultValue && !this.has(key)) {
            if (typeof defaultValue === 'function') return defaultValue();
            return defaultValue;
        }
        return this._items[key];
    }
}
exports.default = ConfigBag;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d7XDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Navbar
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Navbar", ()=>Navbar
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class Navbar extends _pluginDefault.default {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @return {undefined}
     */ static parseDocument(context) {
        let elements;
        if (typeof context.classList === 'object' && context.classList.contains('navbar')) elements = [
            context
        ];
        else elements = context.querySelectorAll('.navbar');
        _coreDefault.default.each(elements, (element)=>{
            _coreDefault.default(element).navbar({
                sticky: element.hasAttribute('data-sticky') ? true : false,
                stickyOffset: element.hasAttribute('data-sticky-offset') ? element.getAttribute('data-sticky-offset') : 0,
                hideOnScroll: element.hasAttribute('data-hide-on-scroll') ? true : false,
                tolerance: element.hasAttribute('data-tolerance') ? element.getAttribute('data-tolerance') : 0,
                hideOffset: element.hasAttribute('data-hide-offset') ? element.getAttribute('data-hide-offset') : null,
                shadow: element.hasAttribute('data-sticky-shadow') ? true : false
            });
        });
    }
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultconfig() {
        return {
            sticky: false,
            stickyOffset: 0,
            hideOnScroll: false,
            tolerance: 0,
            hideOffset: null,
            shadow: false
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */ constructor(config, root){
        super(config, root);
        // Work out the parent if it hasn't been supplied as an option.
        if (this.parent === null) this.parent = this.config.get('root').parentNode;
        /**
         * The root navbar element.
         * @type {HTMLElement}
         */ this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');
        /**
         * The element used for the trigger.
         * @type {HTMLElement}
         */ this.triggerElement = this.root.querySelector('.navbar-burger');
        /**
         * The target element.
         * @type {HTMLELement}
         */ this.target = this.root.querySelector('.navbar-menu');
        /**
         * Should this navbar stick to the top of the page?
         * @type {boolean}
         */ this.sticky = !!this.config.get('sticky');
        /**
         * The offset in pixels before the navbar will stick to the top of the page
         * @type {number}
         */ this.stickyOffset = parseInt(this.config.get('stickyOffset'));
        /**
         * Should the navbar hide when scrolling? Note: this just applies a 'is-hidden-scroll' class.
         * @type {boolean}
         */ this.hideOnScroll = !!this.config.get('hideOnScroll');
        /**
         * The amount of tolerance required before checking the navbar should hide/show
         * @type {number}
         */ this.tolerance = parseInt(this.config.get('tolerance'));
        /**
         * Add a shadow when the navbar is sticky?
         * @type {boolean}
         */ this.shadow = !!this.config.get('shadow');
        /**
         * The offset in pixels before the navbar will be hidden, defaults to the height of the navbar
         * @type {number}
         */ this.hideOffset = parseInt(this.config.get('hideOffset', Math.max(this.root.scrollHeight, this.stickyOffset)));
        /**
         * The last scroll Y known, this is used to calculate scroll direction
         * @type {number}
         */ this.lastScrollY = 0;
        /**
         * An array of any navbar dropdowns
         * @type {NodeList}
         */ this.dropdowns = this.root.querySelectorAll('.navbar-item.has-dropdown:not(.is-hoverable)');
        /**
         * Bind the relevant event handlers to this instance. So that we can remove them if needed
         */ this.handleScroll = this.handleScroll.bind(this);
        _coreDefault.default(this.root).data('navbar', this);
        this.registerEvents();
    }
    /**
     * Register all the events this module needs.
     * @return {undefined}
     */ registerEvents() {
        this.triggerElement.addEventListener('click', this.handleTriggerClick.bind(this));
        if (this.sticky) this.enableSticky();
        _coreDefault.default.each(this.dropdowns, (dropdown)=>{
            dropdown.addEventListener('click', this.handleDropdownTrigger);
        });
    }
    /**
     * Handle the click event on the trigger.
     * @return {undefined}
     */ handleTriggerClick() {
        if (this.target.classList.contains('is-active')) {
            this.target.classList.remove('is-active');
            this.triggerElement.classList.remove('is-active');
        } else {
            this.target.classList.add('is-active');
            this.triggerElement.classList.add('is-active');
        }
    }
    /**
     * Handle the scroll event
     * @return {undefined}
     */ handleScroll() {
        this.toggleSticky(window.pageYOffset);
    }
    /**
     * Handle the click handler for any dropdowns found within the navbar
     */ handleDropdownTrigger() {
        if (this.classList.contains('is-active')) this.classList.remove('is-active');
        else this.classList.add('is-active');
    }
    /**
     * Enable the sticky feature by attaching the scroll event.
     */ enableSticky() {
        window.addEventListener('scroll', this.handleScroll);
        this.root.setAttribute('data-sticky', '');
        this.sticky = true;
    }
    /**
     * Disable the sticky feature by removing the scroll event.
     */ disableSticky() {
        window.removeEventListener('scroll', this.handleScroll);
        this.root.removeAttribute('data-sticky');
        this.sticky = false;
    }
    /**
     * Enable hide on scroll. Also enable sticky if it's not already.
     */ enableHideOnScroll() {
        if (!this.sticky) this.enableSticky();
        this.root.setAttribute('data-hide-on-scroll', '');
        this.hideOnScroll = true;
    }
    /**
     * Disable hide on scroll, and show the navbar again if it's hidden.
     */ disableHideOnScroll() {
        this.root.removeAttribute('data-hide-on-scroll');
        this.hideOnScroll = false;
        this.root.classList.remove('is-hidden-scroll');
    }
    /**
     * Toggle the navbar's sticky state
     * @param {number} scrollY The amount of pixels that has been scrolled
     * @return {undefined}
     */ toggleSticky(scrollY) {
        if (scrollY > this.stickyOffset) {
            this.root.classList.add('is-fixed-top');
            document.body.classList.add('has-navbar-fixed-top');
            if (this.shadow) this.root.classList.add('has-shadow');
        } else {
            this.root.classList.remove('is-fixed-top');
            document.body.classList.remove('has-navbar-fixed-top');
            if (this.shadow) this.root.classList.remove('has-shadow');
        }
        if (this.hideOnScroll) {
            let scrollDirection = this.calculateScrollDirection(scrollY, this.lastScrollY);
            let triggeredTolerance = this.difference(scrollY, this.lastScrollY) >= this.tolerance;
            if (scrollDirection === 'down') {
                // only hide the navbar at the top if we reach a certain offset so the hiding is more smooth
                let isBeyondTopOffset = scrollY > this.hideOffset;
                if (triggeredTolerance && isBeyondTopOffset) this.root.classList.add('is-hidden-scroll');
            } else {
                // if scrolling up to the very top where the navbar would be by default always show it
                let isAtVeryTop = scrollY < this.hideOffset;
                if (triggeredTolerance || isAtVeryTop) this.root.classList.remove('is-hidden-scroll');
            }
            this.lastScrollY = scrollY;
        }
    }
    difference(a, b) {
        if (a > b) return a - b;
        else return b - a;
    }
    calculateScrollDirection(currentY, lastY) {
        return currentY >= lastY ? 'down' : 'up';
    }
}
_coreDefault.default.registerPlugin('navbar', Navbar);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","../plugin":"jekS2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dz00r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Message
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 * @extends DismissableComponent
 */ parcelHelpers.export(exports, "Message", ()=>Message
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _dismissableComponent = require("../dismissableComponent");
var _dismissableComponentDefault = parcelHelpers.interopDefault(_dismissableComponent);
class Message extends _dismissableComponentDefault.default {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this plugin
     * @return {undefined}
     */ static parseDocument(context) {
        let elements;
        if (typeof context.classList === 'object' && context.classList.container('.message')) elements = [
            context
        ];
        else elements = context.querySelectorAll('.message');
        _coreDefault.default.each(elements, (element)=>{
            let closeBtn = element.querySelector('.delete');
            _coreDefault.default(element).message({
                body: null,
                closeButton: closeBtn,
                isDismissable: !!closeBtn,
                destroyOnDismiss: true,
                dismissInterval: element.hasAttribute('data-dismiss-interval') ? element.getAttribute('data-dismiss-interval') : null
            });
        });
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super('message', config, root);
        /**
         * The size of the message
         * @type {String} Possible values are small, normal, medium or large
         */ this.size = this.config.get('size');
        /**
         * The title of the message
         * @type {String}
         */ this.title = this.config.get('title');
        if (this.title) this.createMessageHeader();
        // TODO: Move this into the DismissableComponent class. Due to the required
        // changes between different components, we may need a way to trigger this
        // when the component is ready.
        if (this.isDismissable) {
            if (!this.config.get('closeButton')) this.prependCloseButton();
            this.setupCloseEvent();
        }
        if (this.size) this.setSize();
        _coreDefault.default(this.root).data('message', this);
        this.trigger('init');
    }
    /**
     * Create the message header
     * @return {undefined}
     */ createMessageHeader() {
        let header = document.createElement('div');
        header.classList.add('message-header');
        header.innerHTML = '<p>' + this.title + '</p>';
        this.title = header;
        this.root.insertBefore(this.title, this.root.firstChild);
    }
    /**
     * Set the size of the message.
     * @return {undefined}
     */ setSize() {
        this.root.classList.add('is-' + this.size);
    }
    /**
     * Insert the body text into the component.
     * @return {undefined}
     */ insertBody() {
        let body = document.createElement('div');
        body.classList.add('message-body');
        body.innerHTML = this.body;
        this.root.appendChild(body);
    }
    /**
     * Insert the close button before our content.
     * @return {undefined}
     */ prependCloseButton() {
        this.title.appendChild(this.closeButton);
    }
}
_coreDefault.default.registerPlugin('message', Message);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","../dismissableComponent":"69wiJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aaUn8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Dropdown
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Dropdown", ()=>Dropdown
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class Dropdown extends _pluginDefault.default {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HtmlElement} element The root element for this instance
     * @return {undefined}
     */ static parseDocument(context) {
        let elements;
        if (typeof context.classList === 'object' && context.classList.contains('dropdown')) elements = [
            context
        ];
        else elements = context.querySelectorAll('.dropdown');
        _coreDefault.default.each(elements, (element)=>{
            _coreDefault.default(element).dropdown();
        });
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super(config, root);
        /**
         * The root dropdown element.
         * @type {HTMLElement}
         */ this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');
        /**
         * The element to trigger when clicked.
         * @type {HTMLElement}
         */ this.triggerElement = this.root.querySelector('.dropdown-trigger');
        this.registerEvents();
        _coreDefault.default(this.root).data('dropdown', this);
        this.trigger('init');
    }
    /**
     * Register all the events this module needs.
     * @return {undefined}
     */ registerEvents() {
        this.triggerElement.addEventListener('click', this.handleTriggerClick.bind(this));
    }
    /**
     * Handle the click event on the trigger.
     * @return {undefined}
     */ handleTriggerClick() {
        if (this.root.classList.contains('is-active')) {
            this.root.classList.remove('is-active');
            this.trigger('close');
        } else {
            this.root.classList.add('is-active');
            this.trigger('open');
        }
    }
}
_coreDefault.default.registerPlugin('dropdown', Dropdown);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","../plugin":"jekS2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kvWxA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Modal
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Modal", ()=>Modal
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class Modal extends _pluginDefault.default {
    /**
     * Handle parsing the DOM.
     * @param {HTMLElement} element The root element for this accordion
     * @return {undefined}
     */ static parseDocument() {
    }
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
            style: 'card',
            closable: true
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */ constructor(config, root){
        super(config, root);
        /** @param {string} */ this.style = this.config.get('style');
        /** @param {HTMLElement} */ this.root = this.config.get('root');
        if (!this.root.classList.contains('modal')) this.root.classList.add('modal');
        if (!this.parent) {
            if (!this.root.parentNode) {
                this.parent = document.body;
                this.parent.appendChild(this.root);
            } else this.parent = this.root.parentNode;
        } else this.parent.appendChild(this.root);
        /** @param {HTMLElement} */ this.background = _coreDefault.default.findOrCreateElement('.modal-background', this.root);
        /** @param {HTMLElement} */ this.content = this.style === 'card' ? _coreDefault.default.findOrCreateElement('.modal-card', this.root) : _coreDefault.default.findOrCreateElement('.modal-content', this.root);
        /** @param {boolean} */ this.closable = this.config.get('closable');
        /** @param {string|null} */ this.body = this.config.get('body');
        /** @param {string|null} */ this.title = this.config.get('title');
        if (this.config.get('bodyUrl')) _coreDefault.default.ajax(this.config.get('bodyUrl')).then((response)=>{
            this.body = response;
            this.buildModal();
        });
        else this.buildModal();
        _coreDefault.default(this.root).data('modal', this);
        this.trigger('init');
    }
    // Build the modal's HTML
    buildModal() {
        if (this.style === 'card') this.createCardStructure();
        else if (!this.content.innerHTML) this.content.innerHTML = this.body;
        if (this.closable) /** @param {HTMLElement} */ this.closeButton = this.style === 'card' ? _coreDefault.default.findOrCreateElement('.delete', this.header, 'button') : _coreDefault.default.findOrCreateElement('.modal-close', this.root, 'button');
        if (this.style === 'card') this.createButtons();
        this.setupEvents();
    }
    /**
     * Create the card style structure
     * @returns {void}
     */ createCardStructure() {
        /** @param {HTMLElement} */ this.header = _coreDefault.default.findOrCreateElement('.modal-card-head', this.content, 'header');
        /** @param {HTMLElement} */ this.headerTitle = _coreDefault.default.findOrCreateElement('.modal-card-title', this.header, 'p');
        if (!this.headerTitle.innerHTML) this.headerTitle.innerHTML = this.title;
        /** @param {HTMLElement} */ this.cardBody = _coreDefault.default.findOrCreateElement('.modal-card-body', this.content, 'section');
        if (!this.cardBody.innerHTML) this.cardBody.innerHTML = this.body;
        /** @param {HTMLElement} */ this.footer = _coreDefault.default.findOrCreateElement('.modal-card-foot', this.content, 'footer');
    }
    /**
     * Setup the events used by this modal.
     * @returns {void}
     */ setupEvents() {
        if (this.closable) {
            this.closeButton.addEventListener('click', this.close.bind(this));
            this.keyupListenerBound = (evt)=>this.keyupListener(evt)
            ;
            document.addEventListener('keyup', this.keyupListenerBound);
            this.background.addEventListener('click', this.close.bind(this));
        }
    }
    /**
     * Go through the provided buttons option and create the buttons.
     * @returns {void}
     */ createButtons() {
        var buttonsConfig = this.config.get('buttons', []);
        var modal = this;
        _coreDefault.default.each(buttonsConfig, function(buttonConfig) {
            var button = _coreDefault.default.createElement('button', buttonConfig.classes);
            button.innerHTML = buttonConfig.label;
            button.addEventListener('click', function(event) {
                buttonConfig.onClick(event);
            });
            modal.footer.appendChild(button);
        });
    }
    /**
     * Open the modal
     * @returns {void}
     */ open() {
        this.root.classList.add('is-active');
        document.documentElement.classList.add('is-clipped');
        this.trigger('open');
    }
    /**
     * Close the modal
     * @returns {void} 
     */ close() {
        this.root.classList.remove('is-active');
        document.documentElement.classList.remove('is-clipped');
        this.trigger('close');
    }
    keyupListener(event) {
        if (!this.root.classList.contains('is-active')) return;
        let key = event.key || event.keyCode;
        if (key === 'Escape' || key === 'Esc' || key === 27) this.close();
    }
    /**
     * Destroy this modal, unregistering element references and removing the modal.
     * @returns {void}
     */ destroy() {
        super.destroy();
        this.root.remove();
        this.parent = null;
        this.root = null;
        this.background = null;
        this.content = null;
        if (this.style === 'card') {
            this.header = null;
            this.headerTitle = null;
            this.cardBody = null;
            this.footer = null;
        }
        if (this.closable) {
            this.closeButton = null;
            document.removeEventListener('keyup', this.keyupListenerBound);
        }
        this.config.gets = [];
        this.trigger('destroyed');
    }
}
_coreDefault.default.registerPlugin('modal', Modal);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","../plugin":"jekS2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bPvUj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Alert
 * @since  0.8.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Alert", ()=>Alert
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _modal = require("./modal");
class Alert extends _modal.Modal {
    /**
     * Handle parsing the DOM.
     * @param {HTMLElement} element The root element for this accordion
     * @return {undefined}
     */ static parseDocument() {
    }
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
            type: 'info',
            title: '',
            body: '',
            confirm: 'Okay',
            cancel: null,
            style: 'card',
            parent: document.body,
            showHeader: true
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */ constructor(config, root){
        super(config, root);
        this.root.classList.add('alert');
        _coreDefault.default(this.root).data('alert', this);
        this.trigger('init');
        this.open();
    }
    /**
     * Create the alerts structure
     * @returns {void}
     */ createCardStructure() {
        if (this.config.get('showHeader')) {
            /** @param {HTMLElement} */ this.header = _coreDefault.default.findOrCreateElement('.modal-card-head', this.content, 'header', [
                'modal-card-head',
                'has-background-' + this.config.get('type')
            ]);
            /** @param {HTMLElement} */ var textColor = this.config.get('type') == 'warning' ? 'black' : 'white';
            this.headerTitle = _coreDefault.default.createElement('p', [
                'modal-card-title',
                'has-text-' + textColor
            ]);
            this.headerTitle.innerHTML = this.title;
            this.header.appendChild(this.headerTitle);
        }
        /** @param {HTMLElement} */ this.cardBody = _coreDefault.default.findOrCreateElement('.modal-card-body', this.content, 'section');
        if (!this.cardBody.innerHTML) this.cardBody.innerHTML = this.body;
        /** @param {HTMLElement} */ this.footer = _coreDefault.default.findOrCreateElement('.modal-card-foot', this.content, 'footer');
    }
    /**
     * Go through the provided buttons option and create the buttons.
     * @returns {void}
     */ createButtons() {
        var defaultButtonOptions = {
            close: true,
            destroy: true,
            onClick: function() {
            }
        };
        var confirmOptions = this.config.get('confirm');
        if (typeof confirmOptions === 'string') confirmOptions = {
            label: confirmOptions,
            classes: []
        };
        confirmOptions = {
            ...defaultButtonOptions,
            ...confirmOptions
        };
        var confirmButton = _coreDefault.default.createElement('button', [
            'button',
            'is-' + this.config.get('type')
        ].concat(confirmOptions.classes));
        confirmButton.innerHTML = confirmOptions.label;
        confirmButton.addEventListener('click', (e)=>{
            confirmOptions.onClick(e);
            if (confirmOptions.close) this.close();
            if (confirmOptions.destroy) this.destroy();
        });
        this.footer.appendChild(confirmButton);
        if (this.config.get('cancel')) {
            var cancelOptions = this.config.get('cancel');
            if (typeof cancelOptions === 'string') cancelOptions = {
                label: cancelOptions,
                classes: []
            };
            cancelOptions = {
                ...defaultButtonOptions,
                ...cancelOptions
            };
            var cancelButton = _coreDefault.default.createElement('button', [
                'button'
            ].concat(cancelOptions.classes));
            cancelButton.innerHTML = cancelOptions.label;
            cancelButton.addEventListener('click', (e)=>{
                cancelOptions.onClick(e);
                if (cancelOptions.close) this.close();
                if (cancelOptions.destroy) this.destroy();
            });
            this.footer.appendChild(cancelButton);
        }
    }
}
_coreDefault.default.registerPlugin('alert', Alert);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","./modal":"kvWxA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1BTbm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module File
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "File", ()=>File
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class File extends _pluginDefault.default {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this plugin
     * @return {undefined}
     */ static parseDocument(context) {
        let elements;
        if (typeof context.classList === 'object' && context.classList.contains('file')) elements = [
            context
        ];
        else elements = context.querySelectorAll('.file');
        _coreDefault.default.each(elements, (element)=>{
            _coreDefault.default(element).file();
        });
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */ constructor(config, root){
        super(config, root);
        /**
         * The root file element.
         * @type {HTMLElement}
         */ this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');
        /**
         * The element to use as the trigger.
         * @type {HTMLELement}
         */ this.input = this.root.querySelector('input');
        /**
         * The element to show the file name.
         * @type {HTMLElement}
         */ this.filename = this.root.querySelector('.file-name');
        this.registerEvents();
        _coreDefault.default(this.root).data('file', this);
        this.trigger('init');
    }
    /**
     * Register all the events this module needs.
     * @return {undefined}
     */ registerEvents() {
        if (this.filename) this.input.addEventListener('change', this.handleTriggerChange.bind(this));
        this.root.addEventListener('dragover', (e)=>{
            e.preventDefault();
            this.addHoverClass();
        });
        this.root.addEventListener('dragleave', (e)=>{
            e.preventDefault();
            this.addHoverClass();
        });
        this.root.addEventListener('drop', (e)=>{
            e.preventDefault();
            this.removeHoverClass();
            this.input.files = e.dataTransfer.files;
        });
    }
    /**
     * Handle the click event on the trigger.
     * @param  {Object} event The event object
     * @return {undefined}
     */ handleTriggerChange(event) {
        if (event.target.files.length === 0) this.clearFileName();
        if (event.target.files.length === 1) this.setFileName(event.target.files[0].name);
        if (event.target.files.length > 1) this.setFileName(event.target.files.length + ' files');
        this.trigger('changed', event);
    }
    /**
     * Clear the file name element.
     * @return {undefined}
     */ clearFileName() {
        this.filename.innerHTML = '';
    }
    /**
     * Get the selected file's name
     * 
     * @returns {string}
     */ getFilename() {
        return this.filename.innerHTML;
    }
    /**
     * Set the text for the file name element.
     * @param {string} value The name of the file to update the label with
     * @return {undefined}
     */ setFileName(value) {
        this.filename.innerHTML = value;
    }
    /**
     * Add hover class to root element.
     * @return {undefined}
     */ addHoverClass() {
        this.root.classList.add('is-hovered');
    }
    /**
     * Remove hover class from root element.
     * @return {undefined}
     */ removeHoverClass() {
        this.root.classList.remove('is-hovered');
    }
}
_coreDefault.default.registerPlugin('file', File);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","../plugin":"jekS2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bVBo2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module Tabs
 * @since  0.4.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "Tabs", ()=>Tabs
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class Tabs extends _pluginDefault.default {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @returns {undefined}
     */ static parseDocument(context) {
        let elements;
        if (typeof context.classList === 'object' && context.classList.has('tabs-wrapper')) elements = [
            context
        ];
        else elements = context.querySelectorAll('.tabs-wrapper');
        _coreDefault.default.each(elements, (element)=>{
            _coreDefault.default(element).tabs({
                hover: element.hasAttribute('data-hover') ? true : false
            });
        });
    }
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
            hover: false
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super(config, root);
        /**
         * The root tab element
         * @param {HTMLElement}
         */ this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');
        /**
         * Whether the tabs should be changed when the nav item is hovered over
         * @param {boolean}
         */ this.hover = this.config.get('hover');
        /**
         * The tab nav container
         * @param {HTMLElement}
         */ this.nav = this.findNav();
        /**
         * The tab's nav items
         * @param {HTMLElement[]}
         */ this.navItems = this.findNavItems();
        /**
         * The tab content container
         * @param {HTMLElement}
         */ this.content = this.findContent();
        /**
         * The tab's content items
         * @param {HTMLElement[]}
         */ this.contentItems = this.findContentItems();
        this.setupNavEvents();
        _coreDefault.default(this.root).data('tabs', this);
        this.trigger('init');
    }
    /**
     * Find the tab navigation container.
     * @returns {HTMLElement} The navigation container
     */ findNav() {
        return this.root.querySelector('.tabs');
    }
    /**
     * Find each individual tab item
     * @returns {HTMLElement[]} An array of the found items
     */ findNavItems() {
        return this.nav.querySelectorAll('li');
    }
    /**
     * Find the tab content container.
     * @returns {HTMLElement} The content container
     */ findContent() {
        return this.root.querySelector('.tabs-content');
    }
    /**
     * Find each individual content item
     * @returns {HTMLElement[]} An array of the found items
     */ findContentItems() {
        // We have to use the root here as the querySelectorAll API doesn't
        // support using '>' as the first character. So we have to have a
        // class to start with.
        return this.root.querySelectorAll('.tabs-content > ul > li');
    }
    /**
     * Setup the events to handle tab changing
     * @returns {void}
     */ setupNavEvents() {
        _coreDefault.default.each(this.navItems, (navItem, index)=>{
            navItem.addEventListener('click', ()=>{
                this.setActive(index);
            });
            if (this.hover) navItem.addEventListener('mouseover', ()=>{
                this.setActive(index);
            });
        });
    }
    /**
     * Set the provided tab's index as the active tab.
     * 
     * @param {integer} index The new index to set
     */ setActive(index) {
        _coreDefault.default.each(this.navItems, (navItem)=>{
            navItem.classList.remove('is-active');
        });
        _coreDefault.default.each(this.contentItems, (contentItem)=>{
            contentItem.classList.remove('is-active');
        });
        this.navItems[index].classList.add('is-active');
        this.contentItems[index].classList.add('is-active');
    }
}
_coreDefault.default.registerPlugin('tabs', Tabs);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","../plugin":"jekS2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"juewO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module PanelTabs
 * @since  0.12.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */ parcelHelpers.export(exports, "PanelTabs", ()=>PanelTabs
);
var _core = require("../core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _plugin = require("../plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class PanelTabs extends _pluginDefault.default {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} context The root element for this instance
     * @returns {undefined}
     */ static parseDocument(context) {
        let elements;
        if (typeof context.classList === 'object' && context.classList.contains('panel')) elements = [
            context
        ];
        else elements = context.querySelectorAll('.panel');
        _coreDefault.default.each(elements, (element)=>{
            if (element.querySelector('.panel-tabs') === null) return;
            _coreDefault.default(element).panelTabs();
        });
    }
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */ static defaultConfig() {
        return {
        };
    }
    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */ constructor(config, root){
        super(config, root);
        /**
         * The root tab element
         * @param {HTMLElement}
         */ this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');
        /**
         * The tab nav container
         * @param {HTMLElement}
         */ this.nav = this.findNav();
        /**
         * The tab's nav items
         * @param {HTMLElement[]}
         */ this.navItems = this.findNavItems();
        /**
         * The tab's content items
         * @param {HTMLElement[]}
         */ this.contentItems = this.findContentItems();
        this.setupNavEvents();
        this.on('init', this.showActiveTab.bind(this));
        _coreDefault.default(this.root).data('panelTabs', this);
        this.trigger('init');
    }
    /**
     * Find the tab navigation container.
     * @returns {HTMLElement} The navigation container
     */ findNav() {
        return this.root.querySelector('.panel-tabs');
    }
    /**
     * Find each individual tab item
     * @returns {NodeListOf<Element>} An array of the found items
     */ findNavItems() {
        return this.nav.querySelectorAll('a');
    }
    /**
     * Find each individual content item
     * @returns {NodeListOf<Element>} An array of the found items
     */ findContentItems() {
        return this.root.querySelectorAll('.panel-block[data-category]');
    }
    /**
     * Setup the events to handle tab changing
     * @returns {void}
     */ setupNavEvents() {
        _coreDefault.default.each(this.navItems, (navItem)=>{
            navItem.addEventListener('click', ()=>{
                this.setActive(navItem.getAttribute('data-target'));
            });
        });
    }
    /**
     * Show the correct category and mark the tab as active.
     * 
     * @param {string|null} category The new category to set
     */ setActive(category) {
        this.navItems.forEach((item)=>{
            if (item.getAttribute('data-target') === category) item.classList.add('is-active');
            else item.classList.remove('is-active');
        });
        this.contentItems.forEach((item)=>{
            if (item.getAttribute('data-category') === category || category === null) item.classList.remove('is-hidden');
            else item.classList.add('is-hidden');
        });
    }
    /**
     * This is called on init and will setup the panel tabs for the current active tab, if any
     */ showActiveTab() {
        let activeNavFound = false;
        _coreDefault.default.each(this.navItems, (navItem)=>{
            if (navItem.classList.contains('is-active')) {
                this.setActive(navItem.getAttribute('data-target'));
                activeNavFound = true;
            }
        });
        // If no nav item has is-active then use the first one
        if (!activeNavFound) this.setActive(this.navItems[0].getAttribute('data-target'));
    }
}
_coreDefault.default.registerPlugin('panelTabs', PanelTabs);
exports.default = _coreDefault.default;

},{"../core":"3qkuT","../plugin":"jekS2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fFdRb":[function(require,module,exports) {
var process = require("process");
/* @flow */ /*::

type DotenvParseOptions = {
  debug?: boolean
}

// keys and values from src
type DotenvParseOutput = { [string]: string }

type DotenvConfigOptions = {
  path?: string, // path to .env file
  encoding?: string, // encoding of .env file
  debug?: string // turn on logging for debugging purposes
}

type DotenvConfigOutput = {
  parsed?: DotenvParseOutput,
  error?: Error
}

*/ const fs = require('fs');
const path = require('path');
const os = require('os');
function log(message /*: string */ ) {
    console.log(`[dotenv][DEBUG] ${message}`);
}
const NEWLINE = '\n';
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
const RE_NEWLINES = /\\n/g;
const NEWLINES_MATCH = /\r\n|\n|\r/;
// Parses src into an Object
function parse(src /*: string | Buffer */ , options /*: ?DotenvParseOptions */ ) /*: DotenvParseOutput */ {
    const debug = Boolean(options && options.debug);
    const obj = {
    };
    // convert Buffers before splitting into lines and processing
    src.toString().split(NEWLINES_MATCH).forEach(function(line, idx) {
        // matching "KEY' and 'VAL' in 'KEY=VAL'
        const keyValueArr = line.match(RE_INI_KEY_VAL);
        // matched?
        if (keyValueArr != null) {
            const key = keyValueArr[1];
            // default undefined or missing values to empty string
            let val = keyValueArr[2] || '';
            const end = val.length - 1;
            const isDoubleQuoted = val[0] === '"' && val[end] === '"';
            const isSingleQuoted = val[0] === "'" && val[end] === "'";
            // if single or double quoted, remove quotes
            if (isSingleQuoted || isDoubleQuoted) {
                val = val.substring(1, end);
                // if double quoted, expand newlines
                if (isDoubleQuoted) val = val.replace(RE_NEWLINES, NEWLINE);
            } else // remove surrounding whitespace
            val = val.trim();
            obj[key] = val;
        } else if (debug) log(`did not match key and value when parsing line ${idx + 1}: ${line}`);
    });
    return obj;
}
function resolveHome(envPath) {
    return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath;
}
// Populates process.env from .env file
function config(options /*: ?DotenvConfigOptions */ ) /*: DotenvConfigOutput */ {
    let dotenvPath = path.resolve(process.cwd(), '.env');
    let encoding /*: string */  = 'utf8';
    let debug = false;
    if (options) {
        if (options.path != null) dotenvPath = resolveHome(options.path);
        if (options.encoding != null) encoding = options.encoding;
        if (options.debug != null) debug = true;
    }
    try {
        // specifying an encoding returns a string instead of a buffer
        const parsed = parse(fs.readFileSync(dotenvPath, {
            encoding
        }), {
            debug
        });
        Object.keys(parsed).forEach(function(key) {
            if (!Object.prototype.hasOwnProperty.call(process.env, key)) parsed[key];
            else if (debug) log(`"${key}" is already defined in \`process.env\` and will not be overwritten`);
        });
        return {
            parsed
        };
    } catch (e) {
        return {
            error: e
        };
    }
}
module.exports.config = config;
module.exports.parse = parse;

},{"process":"lDnB8","fs":"joWnX","path":"dTeSu","os":"6rlpQ"}],"dTeSu":[function(require,module,exports) {
var process = require("process");
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"lDnB8"}],"6rlpQ":[function(require,module,exports) {
exports.endianness = function() {
    return 'LE';
};
exports.hostname = function() {
    if (typeof location !== 'undefined') return location.hostname;
    else return '';
};
exports.loadavg = function() {
    return [];
};
exports.uptime = function() {
    return 0;
};
exports.freemem = function() {
    return Number.MAX_VALUE;
};
exports.totalmem = function() {
    return Number.MAX_VALUE;
};
exports.cpus = function() {
    return [];
};
exports.type = function() {
    return 'Browser';
};
exports.release = function() {
    if (typeof navigator !== 'undefined') return navigator.appVersion;
    return '';
};
exports.networkInterfaces = exports.getNetworkInterfaces = function() {
    return {
    };
};
exports.arch = function() {
    return 'javascript';
};
exports.platform = function() {
    return 'browser';
};
exports.tmpdir = exports.tmpDir = function() {
    return '/tmp';
};
exports.EOL = '\n';
exports.homedir = function() {
    return '/';
};

},{}]},["dHVtd","int3P"], "int3P", "parcelRequiree1e3")

//# sourceMappingURL=index.94538dff.js.map
