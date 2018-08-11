import {Animation} from 'components/animation.js';
import {Direction} from 'components/direction.js';
import {Grid} from 'components/grid.js';
import {Run} from 'components/run.js';
import {Spritesheet} from 'components/spritesheet.js';
import {Step} from 'components/step.js';

function input(entity) {

    const stepEntities = () => {

        this.world.entities.forEach((entity) => {

            if (entity.has(['pattern']) === true) {

                const patternComponent = entity.get('pattern');

                entity.add([

                    new Step(400),
                    new Direction(patternComponent.pattern[patternComponent.current].direction)
                ]);
            }
        });
    }

    this.inputs.forEach((input) => {

        const directionComponent = entity.get('direction');
        const gridComponent = entity.get('grid');
        const inputComponent = entity.get('input');
        const spritesheetComponent = entity.get('spritesheet');

        if (entity.has(['run']) === false
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            const left = gridComponent.left;
            const top = gridComponent.top;

            switch (input.action) {

                case 'KEY_UP':

                    if (this.grid[top - 1][left] !== 0) {

                        entity.add([

                            new Direction('UP'),
                            new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_UP'])
                        ]);
                    }

                    else {

                        entity.add([

                            new Grid(left, top - 1),
                            new Direction('UP'),
                            new Run(400),
                            new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_UP'])
                        ]);

                        stepEntities();
                    }

                break;

                case 'KEY_RIGHT':

                    if (this.grid[top][left + 1] !== 0) {

                        entity.add([

                            new Direction('RIGHT'),
                            new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_RIGHT'])
                        ]);
                    }

                    else {

                        entity.add([

                            new Grid(left + 1, top),
                            new Direction('RIGHT'),
                            new Run(400),
                            new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_RIGHT'])
                        ]);

                        stepEntities();
                    }

                break;

                case 'KEY_DOWN':

                    if (this.grid[top + 1][left] !== 0) {

                        entity.add([

                            new Direction('DOWN'),
                            new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_DOWN'])
                        ]);
                    }

                    else {

                        entity.add([

                            new Grid(left, top + 1),
                            new Direction('DOWN'),
                            new Run(400),
                            new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_DOWN'])
                        ]);

                        stepEntities();
                    }

                break;

                case 'KEY_LEFT':

                    if (this.grid[top][left - 1] !== 0) {

                        entity.add([

                            new Direction('LEFT'),
                            new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_LEFT'])
                        ]);
                    }

                    else {

                        entity.add([

                            new Grid(left - 1, top),
                            new Direction('LEFT'),
                            // new Grid(left - 1, top),
                            new Run(400),
                            new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_LEFT'])
                        ]);

                        stepEntities();
                    }

                break;
            }
        }
    });
}

export {input};
