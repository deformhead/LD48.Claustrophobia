import {Keyboard} from 'modules/keyboard.js';
import {DOWN, LEFT, RIGHT, UP} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {input} from 'systems/demo/input.js';
import {move} from 'systems/demo/move.js';
import {recover} from 'systems/demo/recover.js';
import {render} from 'systems/demo/render.js';

function setup() {

    console.log('setup demo scene');

    this.inputs = [];

    this.keyboard = new Keyboard([UP, RIGHT, DOWN, LEFT], this.inputs);

    this.systems = {

        'input': new System(['input'], input.bind(this)),
        'move': new System(['move', 'position'], move.bind(this)),
        'recover': new System(['recover'], recover.bind(this)),
        'render': new System(['position'], render.bind(this))
    };

    this.assets.sounds.move.volume = 0.5;
}

export {setup};
