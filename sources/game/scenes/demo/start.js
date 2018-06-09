import {Entity} from 'modules/world.js';

import {Input, Position, Recover} from 'components/demo/index.js';

function start() {

    console.log('start demo scene');

    this.world.add(new Entity('hero', [

        new Input(['UP', 'RIGHT', 'DOWN', 'LEFT']),
        new Position(this.size.width / 2, this.size.height / 2),
        new Recover(400)
    ]));
}

export {start};
