import {Animation} from 'components/animation.js';
import {Direction} from 'components/direction.js';
import {Run} from 'components/run.js';
import {Spritesheet} from 'components/spritesheet.js';

function input(entity) {

    this.inputs.forEach((input) => {

        const directionComponent = entity.get('direction');
        const inputComponent = entity.get('input');
        const spritesheetComponent = entity.get('spritesheet');

        if (entity.has(['run']) === false
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {

                case 'KEY_UP':

                    entity.add([

                        new Direction('UP'),
                        new Run(500),
                        new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_UP'])
                    ]);

                break;

                case 'KEY_RIGHT':

                    entity.add([

                        new Direction('RIGHT'),
                        new Run(500),
                        new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_RIGHT'])
                    ]);

                break;

                case 'KEY_DOWN':

                    entity.add([

                        new Direction('DOWN'),
                        new Run(500),
                        new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_DOWN'])
                    ]);

                break;

                case 'KEY_LEFT':

                    entity.add([

                        new Direction('LEFT'),
                        new Run(500),
                        new Animation(spritesheetComponent.image, spritesheetComponent.animations['RUN_LEFT'])
                    ]);

                break;
            }
        }
    });
}

export {input};
