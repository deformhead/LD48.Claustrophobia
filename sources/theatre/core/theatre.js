import {Canvas} from 'core/canvas.js';
import {Loop} from 'core/loop.js';
import {preload} from 'core/preload.js';

import {assets} from 'assets/index.js';

import * as scenes from 'scenes/index.js';

function Theatre(config) {

    const {container, loading, opening, size} = config;

    const debug = config.debug || false;
    const framerate = config.framerate || 60;

    let next = null;

    function initialize() {

        const canvas = new Canvas('2d', 'theatre', size.width, size.height);

        this.container = canvas.element;
        this.context = canvas.context;
        container.appendChild(canvas.element);

        const loop = new Loop(framerate);

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

        preload(assets, (assets) => {

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
    this.scenes = scenes;
    this.size = size;

    this.load = load;
    this.restart = restart;

    initialize.call(this, config);

    if (debug === true) {

        window.theatre = this;
    }
}

// exports current module as an object
export {Theatre};
