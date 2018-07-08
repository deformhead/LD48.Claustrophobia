import {Animation} from 'components/animation.js';
import {Direction} from 'components/direction.js';
import {Run} from 'components/run.js';
import {Spritesheet} from 'components/spritesheet.js';

function input(entity) {

    this.inputs.forEach((input) => {

        const directionComponent = entity.get('direction');
        const inputComponent = entity.get('input');
        const spritesheetComponent = entity.get('spritesheet');

        if (inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {

                case 'KEY_UP':

                    entity.add([

                        new Direction('UP'),
                        new Run(),
                        new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_UP'])
                    ]);

                break;

                case 'KEY_RIGHT':

                    entity.add([

                        new Direction('RIGHT'),
                        new Run(),
                        new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_RIGHT'])
                    ]);

                break;

                case 'KEY_DOWN':

                    entity.add([

                        new Direction('DOWN'),
                        new Run(),
                        new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_DOWN'])
                    ]);

                break;

                case 'KEY_LEFT':

                    entity.add([

                        new Direction('LEFT'),
                        new Run(),
                        new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_LEFT'])
                    ]);

                break;
            }
        }

        else if (entity.has(['run']) === true
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'UP') {

            switch (input.action) {

                case 'KEY_UP':

                    if (directionComponent.direction === 'UP') {

                        entity.remove(['run']);
                        entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_UP'])]);
                    }

                break;

                case 'KEY_RIGHT':

                    if (directionComponent.direction === 'RIGHT') {

                        entity.remove(['run']);
                        entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_RIGHT'])]);
                    }

                break;

                case 'KEY_DOWN':

                    if (directionComponent.direction === 'DOWN') {

                        entity.remove(['run']);
                        entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_DOWN'])]);
                    }

                break;

                case 'KEY_LEFT':

                    if (directionComponent.direction === 'LEFT') {

                        entity.remove(['run']);
                        entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_LEFT'])]);
                    }

                break;
            }
        }
    });
}

export {input};
