import {random} from 'modules/random.js';
import {shuffle} from 'modules/shuffle.js';

function update(delta) {

    // console.log('update demo scene');

    this.delta = delta;

    this.systems.recover.update.call(this, this.world.entities);

    this.keyboard.update((states) => {

        this.inputs = this.inputs.concat(states);

        shuffle(this.inputs);
    });

    this.systems.input.update.call(this, this.world.entities);

    this.inputs = [];
}

export {update};
