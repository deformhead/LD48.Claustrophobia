import {Keyboard} from 'modules/keyboard.js';
import {DOWN, LEFT, RIGHT, UP} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {input} from 'systems/demo/input.js';
import {recover} from 'systems/demo/recover.js';
import {render} from 'systems/demo/render.js';

function setup() {

    console.log('setup demo scene');

    this.keyboard = new Keyboard();

    this.systems = {

        'input': new System(['input', 'position'], input.bind(this)),
        'recover': new System(['recover'], recover.bind(this)),
        'render': new System(['position'], render.bind(this))
    };

    this.keyboard.listen(UP, 'UP');
    this.keyboard.listen(RIGHT, 'RIGHT');
    this.keyboard.listen(DOWN, 'DOWN');
    this.keyboard.listen(LEFT, 'LEFT');

    this.assets.sounds.move.volume = 0.5;
}

export {setup};
