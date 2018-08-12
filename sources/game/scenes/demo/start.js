import {Entity, World} from 'modules/world.js';
import {random} from 'modules/random.js';

import {Animation} from 'components/animation.js';
import {Direction} from 'components/direction.js';
import {Hitbox} from 'components/hitbox.js';
import {HUD} from 'components/hud.js';
import {Grid} from 'components/grid.js';
import {Input} from 'components/input.js';
import {Position} from 'components/position.js';
import {Pattern} from 'components/pattern.js';
import {Shadow} from 'components/shadow.js';
import {Spritesheet} from 'components/spritesheet.js';

import {zero} from './levels/zero.js';
import {zeroTwo} from './levels/zero-two.js';
import {one} from './levels/one.js';
import {two} from './levels/two.js';
import {three} from './levels/three.js';

function start() {

    this.levels = [zero, zeroTwo, one, two, three];
    this.level = this.level || this.levels[0];

    console.log('start demo scene');

    const left = this.level.hero[0];
    const top = this.level.hero[1];

    this.delta = 0;
    this.inputs.length = 0;
    this.world = new World();
    this.camera = {

        'x': 32 * left - this.size.width / 2,
        'y': 32 * top - this.size.height / 2
    }

    this.grid = this.level.grid;
    this.moves = this.level.moves;
    this.enemies = this.level.enemies;
    this.hearts = [];

    for (let row = 0; row < this.grid.length; row += 1) {

        for (let column = 0; column < this.grid[row].length; column += 1) {

            if (this.grid[row][column] === 0) {

                this.world.add(new Entity('ground', [

                    new Position(32 * column, 32 * row),
                    new Animation(this.assets.images['ground'], [{'x': 0, 'y': random([0, 32, 64, 96]), 'width': 32, 'height': 32}])
                ]));
            }

            else if (this.grid[row][column] === 1) {

                this.world.add(new Entity('rock', [

                    new Position(32 * column, 32 * row),
                    new Animation(this.assets.images['environment'], [{'x': 0, 'y': 0, 'width': 32, 'height': 64}])
                ]));
            }

            else if (this.grid[row][column] === 7) {

                this.world.add(new Entity('end', [

                    new Position(32 * column, 32 * row),
                    new Animation(this.assets.images['hud'], [{'x': 0, 'y': 64, 'width': 32, 'height': 32}])
                ]));
            }
        }
    }

    this.enemies.forEach((enemy) => {

        this.world.add(new Entity('enemy', [

            new Position(32 * enemy[0].x, 32 * enemy[0].y),
            new Animation(this.assets.images['bomb'], [{'x': 0, 'y': 0, 'width': 32, 'height': 32}, {'x': 32, 'y': 0, 'width': 32, 'height': 32}, {'x': 64, 'y': 0, 'width': 32, 'height': 32}, {'x': 96, 'y': 0, 'width': 32, 'height': 32}]),
            new Pattern(enemy),
            new Grid(enemy[0].x, enemy[0].y)
        ]));
    });

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

    this.world.add(new Entity('shadow', [

        new Position(this.camera.x, this.camera.y),
        new Animation(this.assets.images['black'], [{'x': 0, 'y': 288 * 6, 'width': 320, 'height': 288}, {'x': 320, 'y': 288 * 6, 'width': 320, 'height': 288}]),
        new HUD(this.camera, [this.size.width / 2, this.size.height / 2], 0),
        new Shadow()
    ]));

    for (let move = 0; move < this.moves; move += 1) {

        const heart = new Entity('heart', [

            new Position(this.camera.x + 20 * move + 20, this.camera.y + 20),
            new Animation(this.assets.images['hud'], [{'x': 0, 'y': 64, 'width': 32, 'height': 32}]),
            new HUD(this.camera, [move * 24, 0], 16)
        ]);

        this.world.add(heart);
        this.hearts.push(heart);
    }
}

export {start};
