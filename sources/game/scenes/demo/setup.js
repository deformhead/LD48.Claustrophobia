import {World, System} from 'modules/world.js';

import * as systems from 'systems/demo/index.js';

function setup(game) {

    console.log('setup demo scene');

    this.inputs = [];
    this.world = new World();

    this.systems = {

        'input': new System(['input', 'position'], systems.input.bind(this)),
        'recover': new System(['recover'], systems.recover.bind(this)),
        'render': new System(['position'], systems.render.bind(this))
    };
}

export {setup};
