import {Keyboard} from 'modules/keyboard.js';
import * as KEYCODES from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import * as systems from 'systems/demo/index.js';

function setup() {

    console.log('setup demo scene');

    this.keyboard = new Keyboard();

    this.systems = {

        'input': new System(['input', 'position'], systems.input.bind(this)),
        'recover': new System(['recover'], systems.recover.bind(this)),
        'render': new System(['position'], systems.render.bind(this))
    };

    this.keyboard.listen(KEYCODES.UP, 'UP');
    this.keyboard.listen(KEYCODES.RIGHT, 'RIGHT');
    this.keyboard.listen(KEYCODES.DOWN, 'DOWN');
    this.keyboard.listen(KEYCODES.LEFT, 'LEFT');

    this.assets.sounds.move.volume = 0.5;
}

export {setup};
