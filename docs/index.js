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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
function Grid(left, top) {

    this.name = 'grid';

    this.left = left;
    this.top = top;
}




/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
function Direction(direction) {

    this.name = 'direction';

    this.direction = direction;
}




/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spritesheet; });
function Spritesheet(image, animations) {

    this.name = 'spritesheet';

    this.image = image;
    this.animations = animations;
}




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
function Position(x, y) {

    this.name = 'position';

    this.x = x;
    this.y = y;
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
    'opening': 'demo',
    'size': {

        'width': 320,
        'height': 288
    }
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theatre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_loop_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_preload_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_index_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__ = __webpack_require__(21);








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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sounds_index_js__ = __webpack_require__(20);



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
    }
];




/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAgCAYAAACVf3P1AAABO0lEQVR42u2ZwQ3CMAxFOwZjdBTGYARG4sgIjMKRIxuAqBQJfWEV2lDbybPkQ3vg1c5rnZZhSBK7cXy8kuvN2Y/0gYAISBAEwSgM/ejf6vr+xWG0IiACEtxwBIGAmRbGa/R5CRJFzG5vEAREwBCFewsAHwERAAH9Ct+6EfB9+QgIvy8BtcD98TClnr/eb1PWbgh8Xz4CwkfATwWWRmhDTpfzlLUXAL4PHwHh9ymgtcktjShZCtbC144C+L58BISPgO+PdGvza22S146CKPyy0L/ydWRm42uo6HOJgAjYhoC6oHpsndeGZeWX39ORZ41CPc7KXypeNREREAFDCahpCWB9HsjOV97cy0B2PgIiYN8CfitC7YWPzp9reGt8t5cQBETAUAIuTfi5+WH/EUEABAwtIvy2+AgIv0kBnxX4fA3/gEHIAAAAAElFTkSuQmCC"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACACAYAAABdhGZrAAAFsElEQVR42u2d3Y0VMQxGbxmUsaVQBiVQEo+UQCk83kc6AGmlK6Qsxp5J/JP4RJqH3ZVI7HyHSSaO/Xhs2j69vf3+1/M4vHW1m4YQAIAJ+Nv/z1/P9+fbj+/vz+vnqPFE+6GK3QAAAADQWfgvh48TES28UQBR45D69xZitt0AAAAAAAAfX8HRwvv89cv7M45H+ru3EL2XIlXsBgAAAACE//GVmyU8aRPqBaRkp7Q0WdV/tt0AAAAAAADy8xKEt/C0V762RFgtRAmEVZ9Fq9gNAAAAACx9nmbhewvPuhRYBaRklwbCrB+y7QYAAAAAALC/8r0nQOtPEkg0gKuXhFl2AwAAAACtzgRom03v4LRsALPsBgAAAACEf//ZfRxZ/VfxPwAAAAB0FL524KKFQsyGRmSPI6v/Kv6XmrT0Gx8vfbr3DwAAAAAXJmD8/arPodo4tGcVAJI9Vn+sBsDb7lnheYEQ1j8AAEBrAKRNmNXxq8KCrWHA2nMXRC0M3OqPWfCi7QYAAAAAAKj7GVJ75c8KsLvd7TfBCAEAAODCZjA6MZQ0jqhw4OhgwCp2tz8YAwAAaA1AlZSI1UIBqoaCoFwAAABaHxBPn3iEDwAAAAB1lxrem84xCa2UlDY7/Hl3+wEAAAAAAORCDFETYL2COD6rQhG62g8AAAAANPkAJkuAkiC0xFSzwXBd7QcAAAAAmn70v3oCrMl4pf404WA/DQFgP+2uEKoIcOxHuzSO/TQEgP203SZASjobVaqpu/0AAAAAAAD5ArReEvcq0NHVfgAAAAAAgHwBZifn7Wo/AAAAALDplQ9koj6/ZfdbpUBHtP0AAAAA0BGAqykBsxJERX32tApwVWrILPu11iY9OgAAQGsAtHBfq/C9y4R69fcSsDVNuVY0bxf7Z4V3TH0AAAAAADCUAc0GwOtSvBTiYAVgV/sBAAAAAADsj/dmLLpAtfXCy+kFuttvggEAAADgPw61vpK9D4KiPoPe/Y9iN/s5CAMAAKCtWyrt2h/20xAA9tN2XaLhBxoTjx9op0yAliY8uyRStN+z/QAAAAAAnYU/fvaMKk8a3W+V/quNAwAAAAA6Cl9KARgVCqGlKPQGcAx+i1qCVPEDAAAAALDZ1a8GRoGXJcCsy/nZfgAAAAAAlj5PtTTQ6iXH1fBs72A0KQjQOzVjth8AAAAAoJPwrY5fHZ5rndjowhhX/XGKHwAAAACAza/ueO8LKuMSw/tS+F27vQtnR/sBAAAAAAAhT4DZacHxAwAAAH5gCZSVEEtbYngdyOEHAAAA/MDnz6iDGK3/q7+fLVA9a/fufhhbm8RYAAAArQHQCmNoBaNnJ97av/T72Qsi0r8vJQBbPY4qfrgqvOOyQwMAAACAwcGrguK0UkPWMqWrC1RoadC9Acj2AwAAAAB0ACD7859WCkjb5HmXKOrqhzabYCYePwDAxKvY6yBOmtDoQhFRS47qfmh3MAYAAEBIREKwVfUgsGrp0RE+AAAAAPQF8vSJR/gAAAAAUH8CvMOCpfTgWSkKu9gPAAAAAAhfn4DZsqlSmLH1ICTqUnoX+wEAAACgs+CvToB3ENg4HunAKEuAu9sPAAAAAJ2FPzsBs0Fg0ji08cxuQrvbDwAAAAAAMD8BXp8btauJVQS4q/0AAAAAQKszAdor3qtQR3f7AQAAAICWPwFa8llpPKcIMNt+AAAAAACAfAFmXQjpbj8AAAAAAED+BEQV55vtNyocOsp+AAAAAGDp8xSP/K8KYfWmVOvfC3ytf69gtCj7pdYuMxwAAEBrAKQOtAl4/bxKANqmc/VFkKsFMbRw6d3svyu845LjAgAAtAZAO/DRAPASwLg0ywJA89Ou9gMAAABAZwBmBeENQPRl8NnPn7vb324TDAAAAACP+6n4sj+Dep+HaGCfYj8HYgAAAACwTzryrLTkXecDAAAAADZufwAiKq0jDY371gAAAABJRU5ErkJggg=="

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sounds; });
const sounds = [];




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_index_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_index_js__ = __webpack_require__(28);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return __WEBPACK_IMPORTED_MODULE_1__demo_index_js__; });







/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    console.log('-------');
}




/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
function setup() {

    console.log('setup loading scene');
}




/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
function start() {

    console.log('start loading scene' + ((this.preloaded === false) ? ' -> loading assets...' : ''));
}




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update(delta) {

    // console.log('update loading scene');
}




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render demo scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#e0f0e8';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.render.update.call(this, this.world.entities);
}




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_demo_animate_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_demo_collide_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_demo_hud_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_demo_input_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systems_demo_step_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systems_demo_render_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_systems_demo_run_js__ = __webpack_require__(43);












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
    };
}




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keynames_js__ = __webpack_require__(33);


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
/* 33 */
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
/* 34 */
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
/* 35 */
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
}




/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hud; });
function hud(entity) {

    const hudComponent = entity.get('hud');
    const positionComponent = entity.get('position');

    positionComponent.x = hudComponent.camera.x + hudComponent.offset * 20 + 20;
    positionComponent.y = hudComponent.camera.y + 20;
}




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_animation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_direction_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_grid_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_run_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_spritesheet_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_step_js__ = __webpack_require__(40);







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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return step; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_direction_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_grid_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_position_js__ = __webpack_require__(5);




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
/* 42 */
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return run; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_animation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_grid_js__ = __webpack_require__(0);



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

            this.level = this.levels[this.levels.indexOf(this.level) + 1] || this.levels[0];

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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_animation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_direction_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_hitbox_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_hud_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_grid_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_input_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_position_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_pattern_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_components_spritesheet_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__levels_one_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__levels_two_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__levels_three_js__ = __webpack_require__(53);

















function start() {

    this.levels = [__WEBPACK_IMPORTED_MODULE_11__levels_one_js__["a" /* one */], __WEBPACK_IMPORTED_MODULE_12__levels_two_js__["a" /* two */], __WEBPACK_IMPORTED_MODULE_13__levels_three_js__["a" /* three */]];
    this.level = this.level || this.levels[0];

    console.log('start demo scene');

    const left = this.level.hero[0];
    const top = this.level.hero[1];

    this.delta = 0;
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

    for (let move = 0; move < this.moves; move += 1) {

        const heart = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('heart', [

            new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](this.camera.x + 20 * move + 20, this.camera.y + 20),
            new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['hud'], [{'x': 0, 'y': 64, 'width': 32, 'height': 32}]),
            new __WEBPACK_IMPORTED_MODULE_5_components_hud_js__["a" /* HUD */](this.camera, move)
        ]);

        this.world.add(heart);
        this.hearts.push(heart);
    }

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('hero', [

        new __WEBPACK_IMPORTED_MODULE_3_components_direction_js__["a" /* Direction */]('DOWN'),
        new __WEBPACK_IMPORTED_MODULE_4_components_hitbox_js__["a" /* Hitbox */](),
        new __WEBPACK_IMPORTED_MODULE_6_components_grid_js__["a" /* Grid */](left, top),
        new __WEBPACK_IMPORTED_MODULE_7_components_input_js__["a" /* Input */](['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new __WEBPACK_IMPORTED_MODULE_8_components_position_js__["a" /* Position */](32 * left, 32 * top),
        new __WEBPACK_IMPORTED_MODULE_2_components_animation_js__["a" /* Animation */](this.assets.images['wizard'], [{'x': 96, 'y': 64, 'width': 32, 'height': 32}]),
        new __WEBPACK_IMPORTED_MODULE_10_components_spritesheet_js__["a" /* Spritesheet */](

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
}




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hitbox; });
function Hitbox() {

    this.name = 'hitbox';
}




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HUD; });
function HUD(camera, offset) {

    this.name = 'hud';

    this.camera = camera;
    this.offset = offset;
}




/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
function Input(inputs) {

    this.name = 'input';

    this.inputs = inputs;
}




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pattern; });
function Pattern(pattern) {

    this.name = 'pattern';

    this.pattern = pattern;
    this.current = 0;
}




/***/ }),
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(52);



function update(delta) {

    // console.log('update demo scene');

    this.delta = delta;

    this.systems.input.update.call(this, this.world.entities);
    this.systems.run.update.call(this, this.world.entities);
    this.systems.collide.update.call(this, this.world.entities);
    this.systems.step.update.call(this, this.world.entities);
    this.systems.hud.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);

    this.inputs.length = 0;
}




/***/ }),
/* 52 */
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
/* 53 */
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




/***/ })
/******/ ]);