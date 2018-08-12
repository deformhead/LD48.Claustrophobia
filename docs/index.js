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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
function Animation(image, frames) {

    this.name = 'animation';

    this.image = image;
    this.framerate = 10;
    this.frames = frames;

    this.frame = 0;
    this.current = this.frames[this.frame];
    this.elapsed = 0;
}




/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
function Grid(left, top) {

    this.name = 'grid';

    this.left = left;
    this.top = top;
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
function Direction(direction) {

    this.name = 'direction';

    this.direction = direction;
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
function Position(x, y) {

    this.name = 'position';

    this.x = x;
    this.y = y;
}




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spritesheet; });
function Spritesheet(image, animations) {

    this.name = 'spritesheet';

    this.image = image;
    this.animations = animations;
}




/***/ }),
/* 6 */
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



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__ = __webpack_require__(8);


new __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__["a" /* Theatre */]({

    'container': document.body,
    'debug': true,
    'framerate': 60,
    'loading': 'loading',
    'opening': 'splash',
    'size': {

        'width': 320,
        'height': 288
    }
});

document.body.style.margin = '0';
document.documentElement.style.width = '100%';
document.documentElement.style.height = '100%';
document.body.style.background = '#000';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.getElementById('theatre').style.position = 'absolute';
document.getElementById('theatre').style.left = 'calc(50% - 160px)';
document.getElementById('theatre').style.top = 'calc(50% - 144px)';


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theatre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_loop_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_preload_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__ = __webpack_require__(23);








function Theatre(config) {

    const {container, loading, opening, size} = config;

    const debug = config.debug || false;
    const framerate = config.framerate || 60;

    let next = null;

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

        loop.update((timeframe) => {

            this.scene.update.call(this, timeframe)

            if (next !== null) {

                this.scene.destroy.call(this);
                this.scene = this.scenes[next];
                this.scene.setup.call(this);
                this.scene.start.call(this);

                next = null;
            }
        });

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

        next = scene;
    }

    function restart() {                    // TODO : wait for en dof update loop before restarting

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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sounds_index_js__ = __webpack_require__(22);



function typing(asset, type) {

    asset.type = type

    return asset;
}

const assets = []
.concat(__WEBPACK_IMPORTED_MODULE_0__images_index_js__["a" /* images */].map((asset) => typing(asset, 'image')))
.concat(__WEBPACK_IMPORTED_MODULE_1__sounds_index_js__["a" /* sounds */].map((asset) => typing(asset, 'sound')));




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images; });
const images = [

    {
        'name': 'bomb',
        'source': __webpack_require__(14)
    },
    {
        'name': 'wizard',
        'source': __webpack_require__(15)
    },
    {
        'name': 'ground',
        'source': __webpack_require__(16)
    },
    {
        'name': 'environment',
        'source': __webpack_require__(17)
    },
    {
        'name': 'items',
        'source': __webpack_require__(18)
    },
    {
        'name': 'hud',
        'source': __webpack_require__(19)
    },
    {
        'name': 'black',
        'source': __webpack_require__(20)
    },
    {
        'name': 'splash',
        'source': __webpack_require__(21)
    }
];




/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAgCAYAAACVf3P1AAABO0lEQVR42u2ZwQ3CMAxFOwZjdBTGYARG4sgIjMKRIxuAqBQJfWEV2lDbybPkQ3vg1c5rnZZhSBK7cXy8kuvN2Y/0gYAISBAEwSgM/ejf6vr+xWG0IiACEtxwBIGAmRbGa/R5CRJFzG5vEAREwBCFewsAHwERAAH9Ct+6EfB9+QgIvy8BtcD98TClnr/eb1PWbgh8Xz4CwkfATwWWRmhDTpfzlLUXAL4PHwHh9ymgtcktjShZCtbC144C+L58BISPgO+PdGvza22S146CKPyy0L/ydWRm42uo6HOJgAjYhoC6oHpsndeGZeWX39ORZ41CPc7KXypeNREREAFDCahpCWB9HsjOV97cy0B2PgIiYN8CfitC7YWPzp9reGt8t5cQBETAUAIuTfi5+WH/EUEABAwtIvy2+AgIv0kBnxX4fA3/gEHIAAAAAElFTkSuQmCC"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAACgCAYAAABtym4sAAAA60lEQVR42u3b0Q3CMAxF0e4/CZ+MwGYgBqjS0iRueOdK/UPh1rVjh4ptA9Dg8Xq+vxeBXAGRu/rF00XKBeQAAZgLcgRy93gAAMwTZxfqfuflAmZJwN6dV7/OhARUEwAATsf6/FmBaWLTBVrD6fA7X05geP2XRaSVfNMfRblAXjXk9ATdDnIJAICzY/awk1C5wG3GbX0dpuFlBOwfud3wfwT8CgZAPxfJ3gusJ7DXhlvtudtrvXIBXA1R2V85biOQ0wuOju3DX2yWCeTlkn0h7zSdVz6tQWTvc63r8CMqF+gd+p/XKRfQROJy4QMJTIoF9uJOFgAAAABJRU5ErkJggg=="

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAYAAAC7gW9qAAACC0lEQVR42u2czU0EMQxGtwzK2FIogxIoieOWQCkcOdIBSCPlYviwM7928j7Jh40mq/XTOnEyTm43hBBCCCGEEEIIIYQWPd3v30cYAKo4/vH1+a+1555fXxbznrf9AFDV8a0GgCoA3t4fi2112H4PAEYLgeZgFBgAsgNo01qztaFgwbTvA0D1ELBAegEBoEoInJ0I2ZDZ2wBwVSpsf4gFcLTjYRAAEKnwXimxmgbPBiBBAKAzBDwwKgHKAuAXCAAEl8MqEVq7GAJAlRCwf+m9EiEAZAOglsO23U5vyrJOgwBQALwO1jHb7vUHQBUAyqHedgCMFgK9ZkMFAKMAmHYWmAZA1CFvurSOA6BKKmw/906DCigAsgOwpra01OIn2v/sFyMAWPueYGtBZG+hJACyALha0zoOAIQQQgghhBBCCCGEEEInirtDAPB30bR93W3b1ef0R2YB4ACwBQ/WUQtGHcAEQDUAqrxNlbx4pTUAqAZg+qu0uEtMHItTIVH2+hwAOIOgcjRaFB0dBNOUxADgokEwTVkcAEQpbLTde+5qAOEK0ekBqJRXHYBQ7dFpEABZb5NRjiqHvQ0VAFQDoDY6vEEw6zQIgK3TYNSGzQOmATBqKgyAtSHgHZj0Ll8BACEAgNqLoehfXfUDQNVB0DsM3ZsSeztSABh9czS6Ow0Azg4fA6Jc2R6nxtGx+gFpGfqR3ANY3AAAAABJRU5ErkJggg=="

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAYAAAC7gW9qAAAB+klEQVR42u2dy00DQRBEHQZhOBTCIARC4ugQCIUjRzIACbGXFqXu9SLjqXolzcFfuZ80PZ+uGZ9OCP2qh/P58y8bAFYN/OX1cqgtBwIAPz/08fnpu719vI/aFnB9fvseAKwGoAZWA6yPVZeprwNgNQAqwPq46yIAWB2ACmgKAgAuALouAoCUJNhNfQHgAqAGtk1ta+B1yms3EwRAGfa2gGvgAHAB0C1qVFOLqGsBHN2QAcDRDREFotsYUcnxVoFfDSIewL1ti988cAAghBBC+APwB+APwB8wKo93iyR7f4AtgGl5fPp+ALiUxlRys68MAaApi6vNUQC4FUfr8NYlRQC4lse7pAgAV3+A6gqdfQ4AbgYJBQIA+APwB+APwB+APwB/AP4AhBBCKwt/AP4A/AH4A/Ycn4/1B9gC6Mrd0+WwrT8gBkBXFI2rDMUB6La5u210ALgBUMmwO0QNAJckOD08bTsKxAFQyU8dnu4+BwCXqfC0KAoAF3/A3mHQzh8QB0ANd3ubnT/AHsC9bYvjD8AfgBBC6P/WBPgD8AfgD8AfwP0B3B9wGR+Xi70/wP7/BabFT/u7xeMBdIGrpAgAt+PzKgnG3B8QC0ANezH+gDgAXVKL8wfEApgeo7dfC8QAOGqMiLk/IM4fsNcYYX9/AP4A/AH4AxBC6+oLgzkztO4sHxAAAAAASUVORK5CYII="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAADACAYAAABlPmF2AAABhklEQVR42u2bzQ3CMAxGGYMxGIUxGIGRODICo3DkyAYgIfUSYdmt4jh235NygEbkqT9p/LUcDgAAAs/369Oj5Rc4nk5/WzuQtL2OgPRZEtmPgNa/joB2EmqHKL+ANuFoonkFtF3pNiWHCwAAAABAr/K8+5pwuMDW8rx7XRAusLVQ2Y9A+CGY5iQMvwzdBMgHyAcAAAAAyAmGP74PF7A+nrduzyuw/ODtcf81bcClX/fKaBqBVqQduJ5AK3K+Xn6tHXD53v0qGCZgFXEbeBqBrROT+01puID15hR+e2YBAwAAAOQD5APDXu22tjoCbQkmNalUyyugFaVuRWq4gCaiRTLu+cAwAfIB8gEAANgv2uJzbb+8Amtf3Wz71RGQPksi+xHQ+tcRsJbrUr/8AtpEpL3ynVdA25XWqCafwNaBug04rYD1jw51BawTVD0B9yVYGgFJJHzZTiEDAOQD0+YDwyojdwFred6tSE0rEH4Iwk/C7rXhNALkA+QD5APkA+QD5APkA1CWL0H1r0wH7TQeAAAAAElFTkSuQmCC"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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IIABKEkGIIABKEkGIIABKEkGIIABKEkGIIABKEkGIIABKEkGIIABKMkA9BIADEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJRkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJckABDAAJRmAXgKAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAAShJBiCAN4AkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxAwACXJAAQwACXJAAQwACXJAAQwACXJAAQwACXJAAQwACXJAAQwACXJAAQwACXJAAQwACXJAAQwACXJAAQwACXJAAQwACXJAKTTC9o/EwxASTIAMQDBAJQkAxBDEAxASTIAMQDBAJQkL1LOeNH6Z4MBKEkGIAYgGICSZACS9FXs1c+pzzEGoCQZgBiA/v1gAEqSAciMF+PdwbX7c+jzjAEoSQYgBqB/fxiAkmQAUvHFODpYwQCUJAMQAxAMQEnywqTTC9K/KwxASfLixAAEA1CSvDhJejH6d4gBKElelBiAYABKkhclI78Gptrn2ucdA1CSDEAMQDAAJRmAeBF2/nz73GMASpIXIQagf+8YgJIMQLz4Ej7fPvcYgJLkRejFZwDiOZAkA5DMF17KV8FgAEqSF6MXngGI50GSDEC88HzO8TxIkhcjXng+53geJMmLES88n3c8D5LkhYgXns87ngdJ8kLEC8/nHs+DJHkR4oXnc4/nQZK8CPHie//z73nwHEiSAYgXnwGI50CSDEC8+AxAPAeSZADixWcA4jmQJAMQLz4DEM+BJBmAePEZgHgOJMkAxIvP5x/PgSR5AeLF5/OP50CSvABZ8aLz4vv8+fdcGICSZABiABqAGICSZABiABqAGICSZABiABqAGICSZABiABqAGICSZABiABqAGICSZADihWcA4nmQJAMQLzwDEM+DJBmAePH5/OM5kCQvQLz4fP7xHEiSFyBefD7/eA4kyQsQLz6ffzwHkuQFiBef5wDPgSR58XnxyXPgOZAkLz68+DwHeA4kyYsPLz7PAZ4DSfLiw4vQc4DPvSR58eFF6DnA516SvPg49YXnheg5wACUZABiABqAGICS5MVHwgvPC9Fz4HmQJC8+DEDPAQagJHnx4cXn84/nQJK8APHi8/nHcyBJXoB4EVb+/HsefO4lyQDEi9AAxOdekgxAvBA7Dz/Pg8+7JBmAeCEagPi8S5IBiBeizz0+75LkRYgXos89Pu+S5EWIF6LPOz7vkuSFiBeizzs+75LkhYgX5Nufd59/DEBJBiAYgPh8S5IBiBfjlc9J1eHn848BKMkABAMQn3NJMgDh0wty9wt21v+ePvcYgJLkRYgBiM+3JBmAMPPF6p8FBqAkGYAYgGAASpIBSKehN/tz53OLAShJBiAGoM8tBqAkGYBU+HUxBh0GoCQZgBiAPocYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQZgAAGoCQD0EsAMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEMAAlyQAEDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABDEBJMgABA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQhgAEqSAQgYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQAADUJIMQMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlCQDEMAAlGQAegkABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAABqAkGYAA3gCSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEAAA1CSDEDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJQkAxDAAJRkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIYgJJkAAIGoCQZ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YxCAACAAQQACACAAAQAQgAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCACAAAQAQAACACAAAQAQgAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCACAAAQAQAACACAAAQAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCACAAAQAQAACACAAAQAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAAABCACAAAQAQAACAAhA/xAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABAAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABAAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIACAA/YMAABCAAAAIQAAABCAAAAIQAAABCACAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEAAAAQgAIAABABCAAAAIQAAABCAAAAIQAAABCACAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEABAAPqHAAAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAAAIQAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAABCAAgAAEAEAAAgAgAAEAEIAAAAhAAAAEIAAAAhAAAAEIAIAABABAAAIAIAABABCAAAAIQAAAAegfAgCAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAhAAAABCACAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAhAAAABCACAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAIQAAABCACAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEAEIAAAAIQAAABCACAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEABCAAAAIQAAABCACAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAgAAEABCAAAAIQAAABCACAAAQAQAACACAAAQAQgAAACEAAAAQgAAACEAAAAQgAgAAEAEAAAgAIQP8QAACi/AfnBFKEXrergwAAAABJRU5ErkJggg=="

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sounds; });
const sounds = [];




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_index_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_index_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_index_js__ = __webpack_require__(60);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return __WEBPACK_IMPORTED_MODULE_1__demo_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "splash", function() { return __WEBPACK_IMPORTED_MODULE_2__splash_index_js__; });








/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    console.log('-------');
}




/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
function setup() {

    console.log('setup loading scene');
}




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
function start() {

    console.log('start loading scene' + ((this.preloaded === false) ? ' -> loading assets...' : ''));
}




/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update(delta) {

    // console.log('update loading scene');
}




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render demo scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#e0f0e8';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.render.update.call(this, this.world.entities);

    let opacity = 0;

    if (this.elapsed < 800) {

        opacity = 1 - this.elapsed / 800;
    }

    this.context.fillStyle = 'rgba(24, 48, 48, ' + opacity + ')';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
}




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_demo_animate_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_demo_collide_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_demo_hud_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_demo_input_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systems_demo_step_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systems_demo_render_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_systems_demo_run_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_systems_demo_shadow_js__ = __webpack_require__(46);













function setup() {

    console.log('setup demo scene');

    this.inputs = [];

    this.keyboard = new __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__["a" /* Keyboard */]([__WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["d" /* UP */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["c" /* RIGHT */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["a" /* DOWN */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["b" /* LEFT */]], this.inputs);

    this.systems = {

        'animate': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['animation'], __WEBPACK_IMPORTED_MODULE_3_systems_demo_animate_js__["a" /* animate */].bind(this)),
        'collide': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hitbox'], __WEBPACK_IMPORTED_MODULE_4_systems_demo_collide_js__["a" /* collide */].bind(this)),
        'input': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['input'], __WEBPACK_IMPORTED_MODULE_6_systems_demo_input_js__["a" /* input */].bind(this)),
        'step': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['step'], __WEBPACK_IMPORTED_MODULE_7_systems_demo_step_js__["a" /* step */].bind(this)),
        'render': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['position', 'animation'], __WEBPACK_IMPORTED_MODULE_8_systems_demo_render_js__["a" /* render */].bind(this)),
        'hud': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['hud'], __WEBPACK_IMPORTED_MODULE_5_systems_demo_hud_js__["a" /* hud */].bind(this)),
        'run': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['direction', 'run'], __WEBPACK_IMPORTED_MODULE_9_systems_demo_run_js__["a" /* run */].bind(this)),
        'shadow': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['shadow'], __WEBPACK_IMPORTED_MODULE_10_systems_demo_shadow_js__["a" /* shadow */].bind(this)),
    };
}




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keynames_js__ = __webpack_require__(35);


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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animate; });
function animate(entity) {

    const animationComponent = entity.get('animation');

    if (animationComponent.frames.length > 1) {

        animationComponent.elapsed += this.delta;

        const duration = 1000 / animationComponent.framerate;

        while (animationComponent.elapsed >= duration) {

            animationComponent.elapsed -= duration;
            animationComponent.frame = (animationComponent.frame === animationComponent.frames.length - 1) ? 0 : animationComponent.frame + 1;
            animationComponent.current = animationComponent.frames[animationComponent.frame];
        }
    }

    if (entity.name === 'shadow') {

        //console.log(animationComponent.frame, animationComponent.elapsed);
    }
}




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collide; });
function collide(entity) {

    this.world.entities.forEach((collider) => {

        if (collider === entity
        || collider.has(['grid']) === false) {

            return;
        }

        if (collider.get('grid').top === entity.get('grid').top
        && collider.get('grid').left === entity.get('grid').left) {

            this.restart();
        }
    });
}




/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hud; });
function hud(entity) {

    const hudComponent = entity.get('hud');
    const positionComponent = entity.get('position');

    positionComponent.x = hudComponent.camera.x + hudComponent.offset[0] + hudComponent.margin;
    positionComponent.y = hudComponent.camera.y + hudComponent.offset[1] + hudComponent.margin;
}




/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_animation_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_direction_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_grid_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_run_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_spritesheet_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_step_js__ = __webpack_require__(42);







function input(entity) {

    const stepEntities = () => {

        this.world.entities.forEach((entity) => {

            if (entity.has(['pattern']) === true) {

                const patternComponent = entity.get('pattern');

                entity.add([

                    new __WEBPACK_IMPORTED_MODULE_5_components_step_js__["a" /* Step */](400),
                    new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */](patternComponent.pattern[patternComponent.current].direction)
                ]);
            }
        });
    }

    this.inputs.forEach((input) => {

        const directionComponent = entity.get('direction');
        const gridComponent = entity.get('grid');
        const inputComponent = entity.get('input');
        const spritesheetComponent = entity.get('spritesheet');

        if (entity.has(['run']) === false
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            const left = gridComponent.left;
            const top = gridComponent.top;

            switch (input.action) {

                case 'KEY_UP':

                    if (this.grid[top - 1][left] === 1) {

                        entity.add([

                            new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('UP'),
                            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['IDLE_UP'])
                        ]);
                    }

                    else {

                        entity.add([

                            new __WEBPACK_IMPORTED_MODULE_2_components_grid_js__["a" /* Grid */](left, top - 1),
                            new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('UP'),
                            new __WEBPACK_IMPORTED_MODULE_3_components_run_js__["a" /* Run */](400),
                            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['RUN_UP'])
                        ]);

                        stepEntities();
                    }

                break;

                case 'KEY_RIGHT':

                    if (this.grid[top][left + 1] === 1) {

                        entity.add([

                            new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('RIGHT'),
                            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['IDLE_RIGHT'])
                        ]);
                    }

                    else {

                        entity.add([

                            new __WEBPACK_IMPORTED_MODULE_2_components_grid_js__["a" /* Grid */](left + 1, top),
                            new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('RIGHT'),
                            new __WEBPACK_IMPORTED_MODULE_3_components_run_js__["a" /* Run */](400),
                            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['RUN_RIGHT'])
                        ]);

                        stepEntities();
                    }

                break;

                case 'KEY_DOWN':

                    if (this.grid[top + 1][left] === 1) {

                        entity.add([

                            new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('DOWN'),
                            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['IDLE_DOWN'])
                        ]);
                    }

                    else {

                        entity.add([

                            new __WEBPACK_IMPORTED_MODULE_2_components_grid_js__["a" /* Grid */](left, top + 1),
                            new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('DOWN'),
                            new __WEBPACK_IMPORTED_MODULE_3_components_run_js__["a" /* Run */](400),
                            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['RUN_DOWN'])
                        ]);

                        stepEntities();
                    }

                break;

                case 'KEY_LEFT':

                    if (this.grid[top][left - 1] === 1) {

                        entity.add([

                            new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('LEFT'),
                            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['IDLE_LEFT'])
                        ]);
                    }

                    else {

                        entity.add([

                            new __WEBPACK_IMPORTED_MODULE_2_components_grid_js__["a" /* Grid */](left - 1, top),
                            new __WEBPACK_IMPORTED_MODULE_1_components_direction_js__["a" /* Direction */]('LEFT'),
                            // new Grid(left - 1, top),
                            new __WEBPACK_IMPORTED_MODULE_3_components_run_js__["a" /* Run */](400),
                            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['RUN_LEFT'])
                        ]);

                        stepEntities();
                    }

                break;
            }
        }
    });
}




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Run; });
function Run(duration) {

    this.name = 'run';

    this.duration = duration
    this.elapsed = 0
    this.offset = 0;
}




/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step; });
function Step(duration) {

    this.name = 'step';

    this.duration = duration
    this.elapsed = 0
    this.offset = 0;
}




/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return step; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_direction_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_grid_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_position_js__ = __webpack_require__(4);




function step(entity) {

    const stepComponent = entity.get('step');
    const patternComponent = entity.get('pattern');
    const positionComponent = entity.get('position');
    const directionComponent = entity.get('direction');

    stepComponent.elapsed += this.delta;

    let move = stepComponent.offset + 32 * (this.delta / stepComponent.duration);
    let perfect = Math.floor(move);

    stepComponent.offset = move - perfect;

    if (stepComponent.elapsed > stepComponent.duration) {

        perfect += Math.ceil(stepComponent.offset);
    }

    switch (directionComponent.direction) {

        case 'UP':

            positionComponent.y -= perfect;

        break;

        case 'RIGHT':

            positionComponent.x += perfect;

        break;

        case 'DOWN':

            positionComponent.y += perfect;

        break;

        case 'LEFT':

            positionComponent.x -= perfect;

        break;
    }

    if (stepComponent.elapsed >= stepComponent.duration) {

        patternComponent.current = (patternComponent.current === patternComponent.pattern.length - 1) ? 0 : patternComponent.current + 1;

        entity.remove(['step']);

        entity.add([

            new __WEBPACK_IMPORTED_MODULE_0_components_direction_js__["a" /* Direction */](patternComponent.pattern[patternComponent.current].direction),
            new __WEBPACK_IMPORTED_MODULE_1_components_grid_js__["a" /* Grid */](patternComponent.pattern[patternComponent.current].x, patternComponent.pattern[patternComponent.current].y)
        ]);
    }
}




/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x - this.camera.x - animationComponent.current.width / 2, positionComponent.y - this.camera.y - animationComponent.current.height / 2, animationComponent.current.width, animationComponent.current.height
    );
}




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return run; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_animation_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_grid_js__ = __webpack_require__(2);



function run(entity) {

    const directionComponent = entity.get('direction');
    const positionComponent = entity.get('position');
    const runComponent = entity.get('run');
    const spritesheetComponent = entity.get('spritesheet');

    runComponent.elapsed += this.delta;

    let move = runComponent.offset + 32 * (this.delta / runComponent.duration);
    let perfect = Math.floor(move);

    runComponent.offset = move - perfect;

    if (runComponent.elapsed > runComponent.duration) {

        perfect += Math.ceil(runComponent.offset);
    }

    switch (directionComponent.direction) {

        case 'UP':

            positionComponent.y -= perfect;
            this.camera.y = positionComponent.y - this.size.height / 2;

        break;

        case 'RIGHT':

            positionComponent.x += perfect;
            this.camera.x = positionComponent.x - this.size.width / 2;

        break;

        case 'DOWN':

            positionComponent.y += perfect;
            this.camera.y = positionComponent.y - this.size.height / 2;

        break;

        case 'LEFT':

            positionComponent.x -= perfect;
            this.camera.x = positionComponent.x - this.size.width / 2;

        break;
    }

    if (runComponent.elapsed >= runComponent.duration) {

        entity.remove(['run']);

        this.moves -= 1;
        this.world.remove(this.hearts.splice(-1, 1)[0]);

        if (this.grid[entity.get('grid').top][entity.get('grid').left] === 7) {

            const index = this.levels.indexOf(this.level) + 1;

            if (typeof this.levels[index] === 'undefined') {

                this.load('splash');
            }

            this.level = this.levels[index];

            this.restart();

            return;
        }

        if (this.moves === 0) {

            this.restart();

            return;
        }

        const gridComponent = entity.get('grid');

        const left = gridComponent.left;
        const top = gridComponent.top;

        switch (directionComponent.direction) {

            case 'UP':

                entity.remove(['run']);
                entity.add([

                    new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['IDLE_UP'])
                ]);

            break;

            case 'RIGHT':

                entity.remove(['run']);
                entity.add([

                    new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['IDLE_RIGHT'])
                ]);

            break;

            case 'DOWN':

                entity.remove(['run']);
                entity.add([

                    new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['IDLE_DOWN'])
                ]);

            break;

            case 'LEFT':

                entity.remove(['run']);
                entity.add([

                    new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](spritesheetComponent.image, spritesheetComponent.animations['IDLE_LEFT'])
                ]);

            break;
        }
    }
}




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shadow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_animation_js__ = __webpack_require__(0);


function shadow(entity) {

    let size;

    switch (this.moves) {

        case 1:
        case 2:

            size = 3;

        break;

        case 3:
        case 4:

            size = 4;

        break;

        case 5:
        case 6:

            size = 5;

        break;

        default:

            size = 6;
    }

    const shadowComponent = entity.get('shadow');

    if (shadowComponent.size !== this.moves) {

        shadowComponent.size = this.moves;

        entity.add([

            new __WEBPACK_IMPORTED_MODULE_0_components_animation_js__["a" /* Animation */](this.assets.images['black'], [{'x': 0, 'y': 288 * size, 'width': 320, 'height': 288}, {'x': 320, 'y': 288 * size, 'width': 320, 'height': 288}])
        ]);
    }

}




/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_animation_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_direction_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_hitbox_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_hud_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_grid_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_input_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_position_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_pattern_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_components_shadow_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_components_spritesheet_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__levels_zero_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__levels_zero_two_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__levels_one_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__levels_two_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__levels_three_js__ = __webpack_require__(57);




















function start() {

    this.levels = [__WEBPACK_IMPORTED_MODULE_12__levels_zero_js__["a" /* zero */], __WEBPACK_IMPORTED_MODULE_13__levels_zero_two_js__["a" /* zeroTwo */], __WEBPACK_IMPORTED_MODULE_14__levels_one_js__["a" /* one */], __WEBPACK_IMPORTED_MODULE_15__levels_two_js__["a" /* two */], __WEBPACK_IMPORTED_MODULE_16__levels_three_js__["a" /* three */]];
    this.level = this.level || this.levels[0];

    console.log('start demo scene');

    const left = this.level.hero[0];
    const top = this.level.hero[1];

    this.delta = 0;
    this.elapsed = 0;
    this.inputs.length = 0;
    this.world = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["c" /* World */]();
    this.camera = {

        'x': 32 * left - this.size.width / 2,
        'y': 32 * top - this.size.height / 2
    }

    this.grid = this.level.grid;
    this.moves = this.level.moves;
    this.enemies = this.level.enemies;
    this.hearts = [];

    for (let row = 0; row < this.grid.length; row += 1) {

        for (let column = 0; column < this.grid[row].length; column += 1) {

            if (this.grid[row][column] === 0) {

                this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('ground', [

                    new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](32 * column, 32 * row),
                    new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['ground'], [{'x': 0, 'y': Object(__WEBPACK_IMPORTED_MODULE_1_modules_random_js__["a" /* random */])([0, 32, 64, 96]), 'width': 32, 'height': 32}])
                ]));
            }

            else if (this.grid[row][column] === 1) {

                this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('rock', [

                    new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](32 * column, 32 * row),
                    new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['environment'], [{'x': 0, 'y': 0, 'width': 32, 'height': 64}])
                ]));
            }

            else if (this.grid[row][column] === 7) {

                this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('end', [

                    new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](32 * column, 32 * row),
                    new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['hud'], [{'x': 0, 'y': 64, 'width': 32, 'height': 32}])
                ]));
            }
        }
    }

    this.enemies.forEach((enemy) => {

        this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('enemy', [

            new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](32 * enemy[0].x, 32 * enemy[0].y),
            new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['bomb'], [{'x': 0, 'y': 0, 'width': 32, 'height': 32}, {'x': 32, 'y': 0, 'width': 32, 'height': 32}, {'x': 64, 'y': 0, 'width': 32, 'height': 32}, {'x': 96, 'y': 0, 'width': 32, 'height': 32}]),
            new __WEBPACK_IMPORTED_MODULE_9_components_pattern_js__["a" /* Pattern */](enemy),
            new __WEBPACK_IMPORTED_MODULE_6_components_grid_js__["a" /* Grid */](enemy[0].x, enemy[0].y)
        ]));
    });

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('hero', [

        new __WEBPACK_IMPORTED_MODULE_3_components_direction_js__["a" /* Direction */]('DOWN'),
        new __WEBPACK_IMPORTED_MODULE_4_components_hitbox_js__["a" /* Hitbox */](),
        new __WEBPACK_IMPORTED_MODULE_6_components_grid_js__["a" /* Grid */](left, top),
        new __WEBPACK_IMPORTED_MODULE_7_components_input_js__["a" /* Input */](['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](32 * left, 32 * top),
        new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['wizard'], [{'x': 96, 'y': 64, 'width': 32, 'height': 32}]),
        new __WEBPACK_IMPORTED_MODULE_11_components_spritesheet_js__["a" /* Spritesheet */](

            this.assets.images['wizard'],
            {
                'IDLE_UP': [{'x': 96, 'y': 0, 'width': 32, 'height': 32}],
                'IDLE_RIGHT': [{'x': 96, 'y': 32, 'width': 32, 'height': 32}],
                'IDLE_DOWN': [{'x': 96, 'y': 64, 'width': 32, 'height': 32}],
                'IDLE_LEFT': [{'x': 96, 'y': 96, 'width': 32, 'height': 32}],

                'RUN_UP': [{'x': 0, 'y': 0, 'width': 32, 'height': 32}, {'x': 32, 'y': 0, 'width': 32, 'height': 32}, {'x': 64, 'y': 0, 'width': 32, 'height': 32}, {'x': 96, 'y': 0, 'width': 32, 'height': 32}],
                'RUN_RIGHT': [{'x': 0, 'y': 32, 'width': 32, 'height': 32}, {'x': 32, 'y': 32, 'width': 32, 'height': 32}, {'x': 64, 'y': 32, 'width': 32, 'height': 32}, {'x': 96, 'y': 32, 'width': 32, 'height': 32}],
                'RUN_DOWN': [{'x': 0, 'y': 64, 'width': 32, 'height': 32}, {'x': 32, 'y': 64, 'width': 32, 'height': 32}, {'x': 64, 'y': 64, 'width': 32, 'height': 32}, {'x': 96, 'y': 64, 'width': 32, 'height': 32}],
                'RUN_LEFT': [{'x': 0, 'y': 96, 'width': 32, 'height': 32}, {'x': 32, 'y': 96, 'width': 32, 'height': 32}, {'x': 64, 'y': 96, 'width': 32, 'height': 32}, {'x': 96, 'y': 96, 'width': 32, 'height': 32}]
            }
        )
    ]));

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('shadow', [

        new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](this.camera.x, this.camera.y),
        new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['black'], [{'x': 0, 'y': 288 * 6, 'width': 320, 'height': 288}, {'x': 320, 'y': 288 * 6, 'width': 320, 'height': 288}]),
        new __WEBPACK_IMPORTED_MODULE_5_components_hud_js__["a" /* HUD */](this.camera, [this.size.width / 2, this.size.height / 2], 0),
        new __WEBPACK_IMPORTED_MODULE_10_components_shadow_js__["a" /* Shadow */]()
    ]));

    for (let move = 0; move < this.moves; move += 1) {

        const heart = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('heart', [

            new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](this.camera.x + 20 * move + 20, this.camera.y + 20),
            new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['hud'], [{'x': 0, 'y': 64, 'width': 32, 'height': 32}]),
            new __WEBPACK_IMPORTED_MODULE_5_components_hud_js__["a" /* HUD */](this.camera, [move * 24, 0], 16)
        ]);

        this.world.add(heart);
        this.hearts.push(heart);
    }
}




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hitbox; });
function Hitbox() {

    this.name = 'hitbox';
}




/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HUD; });
function HUD(camera, offset, margin) {

    this.name = 'hud';

    this.camera = camera;
    this.offset = offset;
    this.margin = margin;
}




/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
function Input(inputs) {

    this.name = 'input';

    this.inputs = inputs;
}




/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pattern; });
function Pattern(pattern) {

    this.name = 'pattern';

    this.pattern = pattern;
    this.current = 0;
}




/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shadow; });
function Shadow(size) {

    this.name = 'shadow';

    this.size = size;
}




/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zero; });
const zero = {

    'moves': 4,
    'hero': [1, 1],
    'grid': [

        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 7, 1],
        [1, 0, 1],
    ],
    'enemies': []
};




/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zeroTwo; });
const zeroTwo = {

    'moves': 6,
    'hero': [3, 1],
    'grid': [

        [8, 8, 1, 1, 1, 8, 8],
        [8, 8, 1, 0, 1, 8, 8],
        [1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1],
        [8, 8, 1, 7, 1, 8, 8],
        [8, 8, 1, 1, 1, 8, 8],
    ],
    'enemies': [

        [
            {'x': 1, 'y': 3, 'direction': 'RIGHT'},
            {'x': 2, 'y': 3, 'direction': 'RIGHT'},
            {'x': 3, 'y': 3, 'direction': 'RIGHT'},
            {'x': 4, 'y': 3, 'direction': 'RIGHT'},
            {'x': 5, 'y': 3, 'direction': 'LEFT'},
            {'x': 4, 'y': 3, 'direction': 'LEFT'},
            {'x': 3, 'y': 3, 'direction': 'LEFT'},
            {'x': 2, 'y': 3, 'direction': 'LEFT'},
        ]
    ]
};




/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return one; });
const one = {

    'moves': 8,
    'hero': [3, 3],
    'grid': [

        [8, 1, 1, 1, 1, 1, 8],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [8, 8, 1, 0, 1, 8, 8],
        [8, 8, 1, 7, 1, 8, 8],
        [8, 8, 1, 1, 1, 8, 8],
    ],
    'enemies': [

        [
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
        ],
        [
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
        ],
        [
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
        ]
    ]
};




/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return two; });
const two = {

    'moves': 8,
    'hero': [1, 1],
    'grid': [

        [8, 1, 1, 1, 1, 1, 8],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 7, 1],
        [8, 1, 1, 1, 1, 1, 8],
    ],
    'enemies': [

        [
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
        ],
        [
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
        ],
        [
            {'x': 4, 'y': 1, 'direction': 'LEFT'},
            {'x': 3, 'y': 1, 'direction': 'LEFT'},
            {'x': 2, 'y': 1, 'direction': 'RIGHT'},
            {'x': 3, 'y': 1, 'direction': 'RIGHT'},
        ],
        [
            {'x': 4, 'y': 3, 'direction': 'RIGHT'},
            {'x': 5, 'y': 3, 'direction': 'UP'},
            {'x': 5, 'y': 2, 'direction': 'LEFT'},
            {'x': 4, 'y': 2, 'direction': 'DOWN'},
        ],,
        [
            {'x': 1, 'y': 3, 'direction': 'DOWN'},
            {'x': 1, 'y': 4, 'direction': 'UP'},
            {'x': 1, 'y': 3, 'direction': 'UP'},
            {'x': 1, 'y': 2, 'direction': 'DOWN'},
        ],
        [
            {'x': 1, 'y': 4, 'direction': 'RIGHT'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'DOWN'},
            {'x': 4, 'y': 5, 'direction': 'LEFT'},
            {'x': 3, 'y': 5, 'direction': 'LEFT'},
            {'x': 2, 'y': 5, 'direction': 'LEFT'},
            {'x': 1, 'y': 5, 'direction': 'UP'},
        ]
    ]
};




/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return three; });
const three = {

    'moves': 8,
    'hero': [5, 1],
    'grid': [

        [8, 1, 1, 1, 1, 1, 8],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 7, 0, 0, 0, 0, 1],
        [8, 1, 1, 1, 1, 1, 8],
    ],
    'enemies': [

        [
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'UP'},
            {'x': 4, 'y': 1, 'direction': 'LEFT'},
            {'x': 3, 'y': 1, 'direction': 'LEFT'},
            {'x': 2, 'y': 1, 'direction': 'LEFT'},
            {'x': 1, 'y': 1, 'direction': 'DOWN'},
            {'x': 1, 'y': 2, 'direction': 'DOWN'},
            {'x': 1, 'y': 3, 'direction': 'DOWN'},
            {'x': 1, 'y': 4, 'direction': 'RIGHT'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
        ],
        [
            {'x': 2, 'y': 3, 'direction': 'UP'},
            {'x': 2, 'y': 2, 'direction': 'RIGHT'},
            {'x': 3, 'y': 2, 'direction': 'RIGHT'},
            {'x': 4, 'y': 2, 'direction': 'RIGHT'},
            {'x': 5, 'y': 2, 'direction': 'DOWN'},
            {'x': 5, 'y': 3, 'direction': 'DOWN'},
            {'x': 5, 'y': 4, 'direction': 'DOWN'},
            {'x': 5, 'y': 5, 'direction': 'LEFT'},
            {'x': 4, 'y': 5, 'direction': 'LEFT'},
            {'x': 3, 'y': 5, 'direction': 'LEFT'},
            {'x': 2, 'y': 5, 'direction': 'UP'},
            {'x': 2, 'y': 4, 'direction': 'UP'},
        ],
        [
            {'x': 5, 'y': 5, 'direction': 'UP'},
            {'x': 5, 'y': 4, 'direction': 'LEFT'},
            {'x': 4, 'y': 4, 'direction': 'DOWN'},
            {'x': 4, 'y': 5, 'direction': 'RIGHT'},
        ],
        [
            {'x': 2, 'y': 1, 'direction': 'LEFT'},
            {'x': 1, 'y': 1, 'direction': 'DOWN'},
            {'x': 1, 'y': 2, 'direction': 'DOWN'},
            {'x': 1, 'y': 3, 'direction': 'RIGHT'},
            {'x': 2, 'y': 3, 'direction': 'UP'},
            {'x': 2, 'y': 2, 'direction': 'UP'},
        ],
        [
            {'x': 2, 'y': 4, 'direction': 'DOWN'},
            {'x': 2, 'y': 5, 'direction': 'UP'},
            {'x': 2, 'y': 4, 'direction': 'LEFT'},
            {'x': 1, 'y': 4, 'direction': 'RIGHT'},
        ],
    ]
};




/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(59);



function update(delta) {

    // console.log('update demo scene');

    this.delta = delta;
    this.elapsed += delta;

    this.systems.input.update.call(this, this.world.entities);
    this.systems.run.update.call(this, this.world.entities);
    this.systems.collide.update.call(this, this.world.entities);
    this.systems.step.update.call(this, this.world.entities);
    this.systems.shadow.update.call(this, this.world.entities);
    this.systems.hud.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);

    this.inputs.length = 0;
}




/***/ }),
/* 59 */
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



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    console.log('-------');
}




/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render loading scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.systems.render.update.call(this, this.world.entities);

    let opacity = 0;

    if (this.elapsed < 800) {

        opacity = 1 - this.elapsed / 800;
    }

    else if (this.elapsed >= 2200) {

        opacity = (800 - (3000 - this.elapsed)) / 800;
    }

    this.context.fillStyle = 'rgba(24, 48, 48, ' + opacity + ')';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
}




/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_systems_splash_render_js__ = __webpack_require__(64);




function setup() {

    console.log('setup loading scene');

    this.systems = {

        'render': new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["b" /* System */](['position', 'animation'], __WEBPACK_IMPORTED_MODULE_1_systems_splash_render_js__["a" /* render */].bind(this)),
    };
}




/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x, positionComponent.y, animationComponent.current.width, animationComponent.current.height
    );
}




/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_animation_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_position_js__ = __webpack_require__(4);





function start() {

    this.world = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["c" /* World */]();
    this.elapsed = 0;
    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('splash', [

        new __WEBPACK_IMPORTED_MODULE_2_components_position_js__["a" /* Position */](0, 0),
        new __WEBPACK_IMPORTED_MODULE_1_components_animation_js__["a" /* Animation */](this.assets.images['splash'], [{'x': 0, 'y': 0, 'width': this.size.width, 'height': this.size.height}])
    ]));
}




/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update(delta) {

    // console.log('update loading scene');

    this.elapsed += delta;

    if (this.elapsed > 3000) {

        this.load('demo');
    }
}




/***/ })
/******/ ]);