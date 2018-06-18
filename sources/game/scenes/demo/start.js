import {Entity, World} from 'modules/world.js';

import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Recover} from 'components/recover.js';

function start() {

    console.log('start demo scene');

    this.delta = 0;
    this.inputs = [];
    this.world = new World();

    this.world.add(new Entity('hero', [

        new Input(['UP', 'RIGHT', 'DOWN', 'LEFT']),
        new Position(this.size.width / 2, this.size.height / 2),
        new Recover(100)
    ]));
}

export {start};
