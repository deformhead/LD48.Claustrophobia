import {Entity, World} from 'modules/world.js';

import {Animation} from 'components/animation.js';
import {Direction} from 'components/direction.js';
import {Hitbox} from 'components/hitbox.js';
import {Grid} from 'components/grid.js';
import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Pattern} from 'components/pattern.js';
import {Spritesheet} from 'components/spritesheet.js';

function start() {

    console.log('start demo scene');

    const left = 3;
    const top = 3;

    this.delta = 0;
    this.inputs.length = 0;
    this.world = new World();
    this.camera = {

        'x': 32 * left - this.size.width / 2,
        'y': 32 * top - this.size.height / 2
    }

    this.enemies = [

        [
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
        ],
        [
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
        ],
        [
            {'x': 2, 'y': 2, 'direction': 'DOWN'},
            {'x': 2, 'y': 3, 'direction': 'DOWN'},
            {'x': 2, 'y': 4, 'direction': 'RIGHT'},
            {'x': 3, 'y': 4, 'direction': 'RIGHT'},
            {'x': 4, 'y': 4, 'direction': 'UP'},
            {'x': 4, 'y': 3, 'direction': 'UP'},
            {'x': 4, 'y': 2, 'direction': 'LEFT'},
            {'x': 3, 'y': 2, 'direction': 'LEFT'},
        ]
    ];

    this.grid = [

        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];

    this.enemies.forEach((enemy) => {

        this.world.add(new Entity('enemy', [

            new Position(32 * enemy[0].x, 32 * enemy[0].y),
            new Animation(this.assets.images['bomb'], [{'x': 0, 'y': 0, 'width': 32, 'height': 32}, {'x': 32, 'y': 0, 'width': 32, 'height': 32}, {'x': 64, 'y': 0, 'width': 32, 'height': 32}, {'x': 96, 'y': 0, 'width': 32, 'height': 32}]),
            new Pattern(enemy),
            new Grid(enemy[0].x, enemy[0].y)
        ]));
    });

    for (let row = 0; row < this.grid.length; row += 1) {

        for (let column = 0; column < this.grid[row].length; column += 1) {

            if (this.grid[row][column] === 1) {

                this.world.add(new Entity('rock', [

                    new Position(32 * column, 32 * row),
                    new Animation(this.assets.images['environment'], [{'x': 0, 'y': 0, 'width': 32, 'height': 64}])
                ]));
            }
        }
    }

    this.world.add(new Entity('hero', [

        new Direction('DOWN'),
        new Hitbox(),
        new Grid(left, top),
        new Input(['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new Position(32 * left, 32 * top),
        new Animation(this.assets.images['wizard'], [{'x': 96, 'y': 64, 'width': 32, 'height': 32}]),
        new Spritesheet(

            this.assets.images['wizard'],
            {
                'IDLE_UP': [{'x': 96, 'y': 0, 'width': 32, 'height': 32}],
                'IDLE_RIGHT': [{'x': 96, 'y': 32, 'width': 32, 'height': 32}],
                'IDLE_DOWN': [{'x': 96, 'y': 64, 'width': 32, 'height': 32}],
                'IDLE_LEFT': [{'x': 96, 'y': 96, 'width': 32, 'height': 32}],

                'RUN_UP': [{'x': 0, 'y': 0, 'width': 32, 'height': 32}, {'x': 32, 'y': 0, 'width': 32, 'height': 32}, {'x': 64, 'y': 0, 'width': 32, 'height': 32}, {'x': 96, 'y': 0, 'width': 32, 'height': 32}],
                'RUN_RIGHT': [{'x': 0, 'y': 32, 'width': 32, 'height': 32}, {'x': 32, 'y': 32, 'width': 32, 'height': 32}, {'x': 64, 'y': 32, 'width': 32, 'height': 32}, {'x': 96, 'y': 32, 'width': 32, 'height': 32}],
                'RUN_DOWN': [{'x': 0, 'y': 64, 'width': 32, 'height': 32}, {'x': 32, 'y': 64, 'width': 32, 'height': 32}, {'x': 64, 'y': 64, 'width': 32, 'height': 32}, {'x': 96, 'y': 64, 'width': 32, 'height': 32}],
                'RUN_LEFT': [{'x': 0, 'y': 96, 'width': 32, 'height': 32}, {'x': 32, 'y': 96, 'width': 32, 'height': 32}, {'x': 64, 'y': 96, 'width': 32, 'height': 32}, {'x': 96, 'y': 96, 'width': 32, 'height': 32}]
            }
        )
    ]));
}

export {start};
