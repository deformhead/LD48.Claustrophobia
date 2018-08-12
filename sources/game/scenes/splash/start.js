import {Entity, World} from 'modules/world.js';

import {Animation} from 'components/animation.js';
import {Position} from 'components/position.js';

function start() {

    this.world = new World();
    this.elapsed = 0;
    this.world.add(new Entity('splash', [

        new Position(0, 0),
        new Animation(this.assets.images['splash'], [{'x': 0, 'y': 0, 'width': this.size.width, 'height': this.size.height}])
    ]));
}

export {start};
