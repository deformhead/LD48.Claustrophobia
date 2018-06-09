import {random} from 'modules/random.js';

function update(delta) {

    // console.log('update demo scene');

    this.delta = delta;

    this.inputs.push(random(['UP', 'RIGHT', 'DOWN', 'LEFT']));

    this.systems.recover.update.call(this, this.world.entities);
    this.systems.input.update.call(this, this.world.entities);

    this.inputs = [];
}

export {update};
