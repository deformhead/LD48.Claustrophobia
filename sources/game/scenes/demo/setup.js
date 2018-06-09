import {Keyboard} from 'modules/keyboard.js';
import * as KEYCODES from 'modules/keycodes.js';
import {World, System} from 'modules/world.js';

import * as systems from 'systems/demo/index.js';

function setup(game) {

    console.log('setup demo scene');

    this.delta = 0;
    this.inputs = [];
    this.keyboard = new Keyboard();
    this.world = new World();

    this.systems = {

        'input': new System(['input', 'position'], systems.input.bind(this)),
        'recover': new System(['recover'], systems.recover.bind(this)),
        'render': new System(['position'], systems.render.bind(this))
    };

    this.keyboard.listen(KEYCODES.UP, 'UP');
    this.keyboard.listen(KEYCODES.RIGHT, 'RIGHT');
    this.keyboard.listen(KEYCODES.DOWN, 'DOWN');
    this.keyboard.listen(KEYCODES.LEFT, 'LEFT');
}

export {setup};
