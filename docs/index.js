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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return World; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return System; });
function Entity(name, components) {

    function add(components) {

        components.forEach((component) => {

            this.components[component.name] = component;
        });
    }

    function get(component) {

        return this.components[component];
    }

    function has(components) {

        for (let iterator = 0, length = components.length; iterator < components.length; iterator += 1) {

            const component = components[iterator];

            if (this.components.hasOwnProperty(component) === false) {

                return false;
            }
        }

        return true;
    }

    function remove(components) {

        for (let iterator = 0, length = components.length; iterator < components.length; iterator += 1) {

            const component = components[iterator];

            if (this.components.hasOwnProperty(component) === true) {

                delete this.components[component];
            }
        }
    }

    this.components = {};
    this.name = name;

    this.add = add;
    this.get = get;
    this.has = has;
    this.remove = remove;

    this.add(components)
}

function System(components, handler) {

    function update(entities) {

        entities.forEach((entity) => {

            if (entity.has(components) === true) {

                handler(entity);
            }
        });
    }

    this.update = update;
}

function World() {

    function add(entity) {

        this.entities.push(entity);
    }

    function remove(entity) {

        this.entities.splice(this.entities.indexOf(entity), 1);
    }

    this.entities = [];

    this.add = add;
    this.remove = remove;
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recover; });
function Recover(remaining) {

    this.name = 'recover';

    this.remaining = remaining;
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__ = __webpack_require__(3);


new __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__["a" /* Theatre */]({

    'container': document.body,
    'debug': true,
    'framerate': 60,
    'loading': 'loading',
    'opening': 'demo',
    'size': {

        'width': 480,
        'height': 432
    }
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theatre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_loop_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_preload_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_index_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__ = __webpack_require__(12);








function Theatre(config) {

    const {container, loading, opening, size} = config;

    const debug = config.debug || false;
    const framerate = config.framerate || 60;

    function initialize() {

        const canvas = new __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__["a" /* Canvas */]('2d', 'theatre', size.width, size.height);

        this.container = canvas.element;
        this.context = canvas.context;
        container.appendChild(canvas.element);

        const loop = new __WEBPACK_IMPORTED_MODULE_1_core_loop_js__["a" /* Loop */](framerate);

        this.assets = {};
        this.scene = this.scenes[loading];

        this.scene.setup.call(this);
        this.scene.start.call(this);

        loop.update((timeframe) => this.scene.update.call(this, timeframe));
        loop.render(() => this.scene.render.call(this));

        Object(__WEBPACK_IMPORTED_MODULE_2_core_preload_js__["a" /* preload */])(__WEBPACK_IMPORTED_MODULE_3_assets_index_js__["a" /* assets */], (assets) => {

            assets.forEach((asset) => {

                if (typeof this.assets[asset.type + 's'] === 'undefined') {

                    this.assets[asset.type + 's'] = [];
                }

                this.assets[asset.type + 's'][asset.name] = asset.content;
            });

            this.scene.destroy.call(this);

            this.preloaded = true;

            this.scene = this.scenes[opening];
            this.scene.setup.call(this);
            this.scene.start.call(this);
        });
    }

    function load(scene) {

        this.scene.destroy.call(this);
        this.scene = this.scenes[scene];
        this.scene.setup.call(this);
        this.scene.start.call(this);
    }

    function restart() {

        this.scene.start.call(this);
    }

    this.preloaded = false;
    this.scenes = __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__;
    this.size = size;

    this.load = load;
    this.restart = restart;

    initialize.call(this, config);

    if (debug === true) {

        window.theatre = this;
    }
}

// exports current module as an object



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
function Canvas(type, identifier, width, height) {

    const element = document.createElement('canvas');

    element.setAttribute('id', identifier);
    element.setAttribute('height', height);
    element.setAttribute('width', width);

    const context = element.getContext(type);

    this.context = context;
    this.element = element;
}

// exports current module as an object



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loop; });
function Loop(framerate) {

    const timeframe = 1000 / framerate;

    let elapsedTime = 0;
    let framed = false;
    let lastUpdate = null;

    function render(handler) {

        if (framed !== false) {

            handler();
        }

        framed = true;

        // call user's render handler on each available frame
        requestAnimationFrame(this.render.bind(this, handler));
    }

    function update(handler) {

        const currentUpdate = Date.now();

        if (lastUpdate !== null) {

            // define elapsed time since last update
            elapsedTime += currentUpdate - lastUpdate;
        }

        // call user's update handler matching timeframe and fixing browser time handling
        while (elapsedTime >= timeframe) {

            // define elapsed time since last user's update handler matching timeframe
            elapsedTime -= timeframe;

            handler(timeframe);
        }

        lastUpdate = currentUpdate;

        // call user's update handler matching timeframe
        setTimeout(this.update.bind(this, handler), timeframe);
    }

    this.render = render;
    this.update = update;
}

// exports current module as an object



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return preload; });
function preload(assets, handler) {

    let promises = [];

    // preloads each asset
    assets.forEach(function (asset) {

        // creates a promise for current asset preloading
        const promise = new Promise(function (resolve, reject) {

            // if current asset is an image then preload it
            if (asset.type === 'image') {

                var image = new Image();

                image.src = asset.source;

                // when current image is loaded then resolve current promise
                image.onload = function () {

                    asset.content = image;

                    resolve(asset);
                };
            }

            // if current asset is a sound then preload it
            else if (asset.type === 'sound') {

                var sound = new Audio(asset.source);

                // when current sound is loaded then resolve current promise
                sound.oncanplaythrough = function () {

                    asset.content = sound;

                    resolve(asset);
                };
            }
        });

        promises.push(promise);
    });

    // call user's success handler when all assets are preloaded
    Promise.all(promises).then(handler);
}

// exports current module as a function



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_index_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sounds_index_js__ = __webpack_require__(10);



function typing(asset, type) {

    asset.type = type

    return asset;
}

const assets = []
.concat(__WEBPACK_IMPORTED_MODULE_0__images_index_js__["a" /* images */].map((asset) => typing(asset, 'image')))
.concat(__WEBPACK_IMPORTED_MODULE_1__sounds_index_js__["a" /* sounds */].map((asset) => typing(asset, 'sound')));




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images; });
const images = [

    {
        'name': 'white-1x1@1x',
        'source': __webpack_require__(9)
    }
];




/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sounds; });
const sounds = [

    {
        'name': 'move',
        'source': __webpack_require__(11)
    }
];




/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:audio/wav;base64,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"

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_index_js__ = __webpack_require__(19);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return __WEBPACK_IMPORTED_MODULE_1__demo_index_js__; });







/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    console.log('-------');
}




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render loading scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
}




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
function setup() {

    console.log('setup loading scene');
}




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
function start() {

    console.log('start loading scene' + ((this.preloaded === false) ? ' -> loading assets...' : ''));
}




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update(delta) {

    // console.log('update loading scene');
}




/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy demo scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);
    this.keyboard.destroy();

    delete this.delta;
    delete this.inputs;
    delete this.world;

    delete this.keyboard;
    delete this.systems;

    console.log('-------');
}




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render demo scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.render.update.call(this, this.world.entities);
}




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_demo_input_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_demo_move_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_demo_recover_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_demo_render_js__ = __webpack_require__(30);









function setup() {

    console.log('setup demo scene');

    this.inputs = [];

    this.keyboard = new __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__["a" /* Keyboard */]([__WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["d" /* UP */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["c" /* RIGHT */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["a" /* DOWN */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["b" /* LEFT */]], this.inputs);

    this.systems = {

        'input': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['input'], __WEBPACK_IMPORTED_MODULE_3_systems_demo_input_js__["a" /* input */].bind(this)),
        'move': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['move', 'position'], __WEBPACK_IMPORTED_MODULE_4_systems_demo_move_js__["a" /* move */].bind(this)),
        'recover': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['recover'], __WEBPACK_IMPORTED_MODULE_5_systems_demo_recover_js__["a" /* recover */].bind(this)),
        'render': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position'], __WEBPACK_IMPORTED_MODULE_6_systems_demo_render_js__["a" /* render */].bind(this))
    };

    this.assets.sounds.move.volume = 0.5;
}




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keynames_js__ = __webpack_require__(24);


function Keyboard(codes, inputs) {

    const names = [];
    const states = {};

    function blur() {

        for (let state in states) {

            if (states.hasOwnProperty(state)
            && states[state] === true) {

                states[state] = false;

                inputs.push({

                    'type': 'KEYBOARD',
                    'action': state,
                    'state': 'UP'
                });
            }
        }
    }

    function destroy() {

        removeEventListener('blur', blur);
        removeEventListener('keydown', keydown);
        removeEventListener('keyup', keyup);
    }

    function keydown(event) {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        if (index !== -1
        && states[names[index]] === false) {

            event.preventDefault();

            states[names[index]] = true;

            inputs.push({

                'type': 'KEYBOARD',
                'action': names[index],
                'state': 'DOWN'
            });
        }
    }

    function keyup(event) {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        if (index !== -1
        && states[names[index]] === true) {

            event.preventDefault();

            states[names[index]] = false;

            inputs.push({

                'type': 'KEYBOARD',
                'action': names[index],
                'state': 'UP'
            });
        }
    }

    function setup() {

        addEventListener('blur', blur);
        addEventListener('keydown', keydown);
        addEventListener('keyup', keyup);
    }

    codes.forEach((code) => {

        if (typeof __WEBPACK_IMPORTED_MODULE_0__keynames_js__["a" /* keynames */][code] !== 'undefined') {

            const name = 'KEY_' + __WEBPACK_IMPORTED_MODULE_0__keynames_js__["a" /* keynames */][code];

            codes.push(code);
            names.push(name);

            states[name] = false;
        }
    });

    setup.call(this);

    this.destroy = destroy;
    this.setup = setup;
}

// exports current module as an object



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keynames; });
const keynames = [];

keynames[9] = 'TAB';
keynames[13] = 'ENTER';
keynames[16] = 'SHIFT';
keynames[17] = 'CTRL';
keynames[18] = 'ALT';
keynames[27] = 'ESC';
keynames[32] = 'SPACE';

keynames[37] = 'LEFT';
keynames[38] = 'UP';
keynames[39] = 'RIGHT';
keynames[40] = 'DOWN';

keynames[48] = 'ZERO';
keynames[49] = 'ONE';
keynames[50] = 'TWO';
keynames[51] = 'THREE';
keynames[52] = 'FOUR';
keynames[53] = 'FIVE';
keynames[54] = 'SIX';
keynames[55] = 'SEVEN';
keynames[56] = 'EIGHT';
keynames[57] = 'NINE';

keynames[65] = 'A';
keynames[66] = 'B';
keynames[67] = 'C';
keynames[68] = 'D';
keynames[69] = 'E';
keynames[70] = 'F';
keynames[71] = 'G';
keynames[72] = 'H';
keynames[73] = 'I';
keynames[74] = 'J';
keynames[75] = 'K';
keynames[76] = 'L';
keynames[77] = 'M';
keynames[78] = 'N';
keynames[79] = 'O';
keynames[80] = 'P';
keynames[81] = 'Q';
keynames[82] = 'R';
keynames[83] = 'S';
keynames[84] = 'T';
keynames[85] = 'U';
keynames[86] = 'V';
keynames[87] = 'W';
keynames[88] = 'X';
keynames[89] = 'Y';
keynames[90] = 'Z';

// exports current module as an array



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TAB */
/* unused harmony export ENTER */
/* unused harmony export SHIFT */
/* unused harmony export CTRL */
/* unused harmony export ALT */
/* unused harmony export ESC */
/* unused harmony export SPACE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOWN; });
/* unused harmony export ZERO */
/* unused harmony export ONE */
/* unused harmony export TWO */
/* unused harmony export THREE */
/* unused harmony export FOUR */
/* unused harmony export FIVE */
/* unused harmony export SIX */
/* unused harmony export SEVEN */
/* unused harmony export EIGHT */
/* unused harmony export NINE */
/* unused harmony export A */
/* unused harmony export B */
/* unused harmony export C */
/* unused harmony export D */
/* unused harmony export E */
/* unused harmony export F */
/* unused harmony export G */
/* unused harmony export H */
/* unused harmony export I */
/* unused harmony export J */
/* unused harmony export K */
/* unused harmony export L */
/* unused harmony export M */
/* unused harmony export N */
/* unused harmony export O */
/* unused harmony export P */
/* unused harmony export Q */
/* unused harmony export R */
/* unused harmony export S */
/* unused harmony export T */
/* unused harmony export U */
/* unused harmony export V */
/* unused harmony export W */
/* unused harmony export X */
/* unused harmony export Y */
/* unused harmony export Z */
const TAB = 9;
const ENTER = 13;
const SHIFT = 16;
const CTRL = 17;
const ALT = 18;
const ESC = 27;
const SPACE = 32;

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;

const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;




/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_move_js__ = __webpack_require__(27);


function input(entity) {

    this.inputs.forEach((input) => {

        const inputComponent = entity.get('input');

        if (inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {

                case 'KEY_UP':

                    entity.add([new __WEBPACK_IMPORTED_MODULE_0_components_move_js__["a" /* Move */]('UP')]);

                break;

                case 'KEY_RIGHT':

                    entity.add([new __WEBPACK_IMPORTED_MODULE_0_components_move_js__["a" /* Move */]('RIGHT')]);

                break;

                case 'KEY_DOWN':

                    entity.add([new __WEBPACK_IMPORTED_MODULE_0_components_move_js__["a" /* Move */]('DOWN')]);

                break;

                case 'KEY_LEFT':

                    entity.add([new __WEBPACK_IMPORTED_MODULE_0_components_move_js__["a" /* Move */]('LEFT')]);

                break;
            }
        }

        else if (entity.has(['move']) === true
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'UP') {

            const moveComponent = entity.get('move');

            switch (input.action) {

                case 'KEY_UP':

                    if (moveComponent.direction === 'UP') {

                        entity.remove(['move']);
                    }

                break;

                case 'KEY_RIGHT':

                    if (moveComponent.direction === 'RIGHT') {

                        entity.remove(['move']);
                    }

                break;

                case 'KEY_DOWN':

                    if (moveComponent.direction === 'DOWN') {

                        entity.remove(['move']);
                    }

                break;

                case 'KEY_LEFT':

                    if (moveComponent.direction === 'LEFT') {

                        entity.remove(['move']);
                    }

                break;
            }
        }
    });
}




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Move; });
function Move(direction) {

    this.name = 'move';

    this.direction = direction;
}




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return move; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_recover_js__ = __webpack_require__(1);


function move(entity) {

    if (entity.has(['recover']) === false) {

        const moveComponent = entity.get('move');
        const positionComponent = entity.get('position');

        switch (moveComponent.direction) {

            case 'UP':

                positionComponent.y = (positionComponent.y - 48 >= 48) ? positionComponent.y - 48 : positionComponent.y;

            break;

            case 'RIGHT':

                positionComponent.x = (positionComponent.x + 48 <= this.size.width - 24) ? positionComponent.x + 48 : positionComponent.x;

            break;

            case 'DOWN':

                positionComponent.y = (positionComponent.y + 48 <= this.size.height - 48) ? positionComponent.y + 48 : positionComponent.y;

            break;

            case 'LEFT':

                positionComponent.x = (positionComponent.x - 48 >= 24) ? positionComponent.x - 48 : positionComponent.x;

            break;
        }

        this.assets.sounds.move.play();

        entity.add([new __WEBPACK_IMPORTED_MODULE_0_components_recover_js__["a" /* Recover */](100)]);
    }
}




/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recover; });
function recover(entity) {

    const recoverComponent = entity.get('recover');

    recoverComponent.remaining -= this.delta;

    if (recoverComponent.remaining <= 0) {

        entity.remove(['recover']);
    }
}




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(entity) {

    const positionComponent = entity.get('position');

    this.context.drawImage(

        this.assets.images['white-1x1@1x'],
        0, 0, 1, 1,
        positionComponent.x - 48 / 2, positionComponent.y - 48 / 2, 48, 48
    );
}




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_input_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_position_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_recover_js__ = __webpack_require__(1);






function start() {

    console.log('start demo scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.world = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["c" /* World */]();

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('hero', [

        new __WEBPACK_IMPORTED_MODULE_1_components_input_js__["a" /* Input */](['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new __WEBPACK_IMPORTED_MODULE_2_components_position_js__["a" /* Position */](this.size.width / 2, this.size.height / 2),
        new __WEBPACK_IMPORTED_MODULE_3_components_recover_js__["a" /* Recover */](100)
    ]));
}




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
function Input(inputs) {

    this.name = 'input';

    this.inputs = inputs;
}




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
function Position(x, y) {

    this.name = 'position';

    this.x = x;
    this.y = y;
}




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(36);



function update(delta) {

    // console.log('update demo scene');

    this.delta = delta;

    this.systems.recover.update.call(this, this.world.entities);
    this.systems.input.update.call(this, this.world.entities);
    this.systems.move.update.call(this, this.world.entities);

    this.inputs.length = 0;
}




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export random */
function random(items) {

    if (typeof items === 'number'
    && items % 1 === 0
    && items > 0) {

        return Math.floor(items * Math.random()) + 1;
    }

    if (Array.isArray(items)
    && items.length > 0) {

        return items[Math.floor(items.length * Math.random())];
    }

    return null;
}

// exports current module as a function



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shuffle */
function shuffle(array) {

    const length = array.length;

    // Fisher-Yates shuffle
    for (let iterator = 0; iterator < length; iterator += 1) {

        // define target randomized index from given array
        const target = Math.floor(Math.random() * (iterator + 1));

        // if target index is different of current iterator then switch values
        if (target !== iterator) {

            const temporary = array[iterator];

            // switch values
            array[iterator] = array[target];
            array[target] = temporary;
        }
    }

    // returns given array with mutation
    return array;
}

// exports current module as a function



/***/ })
/******/ ]);