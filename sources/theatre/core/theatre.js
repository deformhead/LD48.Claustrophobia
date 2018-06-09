import {Canvas} from 'core/canvas.js';
import {Loop} from 'core/loop.js';
import {preload} from 'core/preload.js';

import {assets} from 'assets/index.js';

import * as scenes from 'scenes/index.js';

function Theatre(config) {

    const {container, scene, size} = config;

    const debug = config.debug || false;
    const framerate = config.framerate || 60;

    function initialize() {

        const canvas = new Canvas('2d', 'theatre', size.width, size.height);

        this.context = canvas.context;
        container.appendChild(canvas.element);

        const loop = new Loop(framerate);

        this.assets = {};
        this.scene = scenes.curtain;

        this.scene.setup.call(this);
        this.scene.start.call(this);

        loop.update((timeframe) => this.scene.update.call(this, timeframe));
        loop.render(() => this.scene.render.call(this));

        preload(assets, (assets) => {

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
