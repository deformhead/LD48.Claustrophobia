import {System} from 'modules/world.js';

import {render} from 'systems/splash/render.js';

function setup() {

    console.log('setup loading scene');

    this.systems = {

        'render': new System(['position', 'animation'], render.bind(this)),
    };
}

export {setup};
