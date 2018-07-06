import {Entity, World} from 'modules/world.js';

import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Recover} from 'components/recover.js';

function start() {

    console.log('start demo scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.world = new World();

    this.world.add(new Entity('hero', [

        new Input(['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new Position(this.size.width / 2, this.size.height / 2),
        new Recover(100)
    ]));
}

export {start};
