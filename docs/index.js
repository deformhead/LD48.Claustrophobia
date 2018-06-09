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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recover_js__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__input_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__position_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__recover_js__["a"]; });







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
    'scene': 'demo',
    'size': {

        'width': 1280,
        'height': 720
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__ = __webpack_require__(9);








function Theatre(config) {

    const {container, scene, size} = config;

    const debug = config.debug || false;
    const framerate = config.framerate || 60;

    function initialize() {

        const canvas = new __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__["a" /* Canvas */]('2d', 'theatre', size.width, size.height);

        this.context = canvas.context;
        container.appendChild(canvas.element);

        const loop = new __WEBPACK_IMPORTED_MODULE_1_core_loop_js__["a" /* Loop */](framerate);

        this.assets = {};
        this.scene = __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__["curtain"];

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

            this.load(scene);
        });
    }

    function load(scene) {

        this.scene.destroy.call(this);
        this.scene = this.scenes[scene];
        this.scene.setup.call(this);
        this.scene.start.call(this);
    }

    function restart() {

        this.scene.destroy.call(this);
        this.scene.start.call(this);
    }

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
        });

        promises.push(promise);
    });

    // call user's success handler when all assets are preloaded
    Promise.all(promises).then(handler);
}

// exports current module as a functions



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_js__ = __webpack_require__(8);


const assets = __WEBPACK_IMPORTED_MODULE_0__images_js__["a" /* images */];




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images; });
const images = [

    {
        'name': 'white-1x1@1x',
        'type': 'image',
        'source': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
    }
];




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curtain_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_index_js__ = __webpack_require__(16);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "curtain", function() { return __WEBPACK_IMPORTED_MODULE_0__curtain_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return __WEBPACK_IMPORTED_MODULE_1__demo_index_js__; });







/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy(game) {

    console.log('destroy curtain scene');
}




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(game) {

    console.log('render curtain scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
}




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
function setup(game) {

    console.log('setup curtain scene');
}




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
function start(game) {

    console.log('start curtain scene');
}




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update(game, delta) {

    console.log('update curtain scene');
}




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy(game) {

    console.log('destroy demo scene');

    delete this.delta;
    delete this.inputs;
    delete this.systems;
    delete this.world;
}




/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_systems_demo_index_js__ = __webpack_require__(20);




function setup(game) {

    console.log('setup demo scene');

    this.inputs = [];
    this.world = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["c" /* World */]();

    this.systems = {

        'input': new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["b" /* System */](['input', 'position'], __WEBPACK_IMPORTED_MODULE_1_systems_demo_index_js__["a" /* input */].bind(this)),
        'recover': new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["b" /* System */](['recover'], __WEBPACK_IMPORTED_MODULE_1_systems_demo_index_js__["b" /* recover */].bind(this)),
        'render': new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["b" /* System */](['position'], __WEBPACK_IMPORTED_MODULE_1_systems_demo_index_js__["c" /* render */].bind(this))
    };
}




/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recover_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_js__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__input_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__recover_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__render_js__["a"]; });







/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_demo_index_js__ = __webpack_require__(1);


function input(entity) {

    this.inputs.forEach((input) => {

        if (entity.has(['recover']) === false) {

            const inputComponent = entity.get('input');

            if (inputComponent.inputs.indexOf(input) !== -1) {

                const positionComponent = entity.get('position');

                switch (input) {

                    case 'UP':

                        positionComponent.y -= 32;

                    break;

                    case 'RIGHT':

                        positionComponent.x += 32;

                    break;

                    case 'DOWN':

                        positionComponent.y += 32;

                    break;

                    case 'LEFT':

                        positionComponent.x -= 32;

                    break;
                }

                entity.add([new __WEBPACK_IMPORTED_MODULE_0_components_demo_index_js__["c" /* Recover */](400)]);
            }
        }
    });
}




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
function Input(inputs) {

    this.name = 'input';

    this.inputs = inputs;
}




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
function Position(x, y) {

    this.name = 'position';

    this.x = x;
    this.y = y;
}




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recover; });
function Recover(remaining) {

    this.name = 'recover';

    this.remaining = remaining;
}




/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(entity) {

    const positionComponent = entity.get('position');

    this.context.drawImage(

        this.assets.images['white-1x1@1x'],
        0, 0, 1, 1,
        positionComponent.x - 32 / 2, positionComponent.y - 32 / 2, 32, 32
    );
}




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_demo_index_js__ = __webpack_require__(1);




function start() {

    console.log('start demo scene');

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('hero', [

        new __WEBPACK_IMPORTED_MODULE_1_components_demo_index_js__["a" /* Input */](['UP', 'RIGHT', 'DOWN', 'LEFT']),
        new __WEBPACK_IMPORTED_MODULE_1_components_demo_index_js__["b" /* Position */](this.size.width / 2, this.size.height / 2),
        new __WEBPACK_IMPORTED_MODULE_1_components_demo_index_js__["c" /* Recover */](400)
    ]));
}




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(29);


function update(delta) {

    // console.log('update demo scene');

    this.delta = delta;

    this.inputs.push(Object(__WEBPACK_IMPORTED_MODULE_0_modules_random_js__["a" /* random */])(['UP', 'RIGHT', 'DOWN', 'LEFT']));

    this.systems.recover.update.call(this, this.world.entities);
    this.systems.input.update.call(this, this.world.entities);

    this.inputs = [];
}




/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return random; });
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



/***/ })
/******/ ]);