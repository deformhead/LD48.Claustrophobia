import {Keyboard} from 'modules/keyboard.js';
import {DOWN, LEFT, RIGHT, UP} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {animate} from 'systems/demo/animate.js';
import {collide} from 'systems/demo/collide.js';
import {hud} from 'systems/demo/hud.js';
import {input} from 'systems/demo/input.js';
import {step} from 'systems/demo/step.js';
import {render} from 'systems/demo/render.js';
import {run} from 'systems/demo/run.js';
import {shadow} from 'systems/demo/shadow.js';

function setup() {

    console.log('setup demo scene');

    this.inputs = [];

    this.keyboard = new Keyboard([UP, RIGHT, DOWN, LEFT], this.inputs);

    this.systems = {

        'animate': new System(['animation'], animate.bind(this)),
        'collide': new System(['hitbox'], collide.bind(this)),
        'input': new System(['input'], input.bind(this)),
        'step': new System(['step'], step.bind(this)),
        'render': new System(['position', 'animation'], render.bind(this)),
        'hud': new System(['hud'], hud.bind(this)),
        'run': new System(['direction', 'run'], run.bind(this)),
        'shadow': new System(['shadow'], shadow.bind(this)),
    };
}

export {setup};
