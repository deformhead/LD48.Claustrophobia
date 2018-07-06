import {Move} from 'components/move.js';

function input(entity) {

    this.inputs.forEach((input) => {

        const inputComponent = entity.get('input');

        if (inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {

                case 'KEY_UP':

                    entity.add([new Move('UP')]);

                break;

                case 'KEY_RIGHT':

                    entity.add([new Move('RIGHT')]);

                break;

                case 'KEY_DOWN':

                    entity.add([new Move('DOWN')]);

                break;

                case 'KEY_LEFT':

                    entity.add([new Move('LEFT')]);

                break;
            }
        }

        else if (entity.has(['move']) === true
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'UP') {

            const moveComponent = entity.get('move');

            switch (input.action) {

                case 'KEY_UP':

                    if (moveComponent.direction === 'UP') {

                        entity.remove(['move']);
                    }

                break;

                case 'KEY_RIGHT':

                    if (moveComponent.direction === 'RIGHT') {

                        entity.remove(['move']);
                    }

                break;

                case 'KEY_DOWN':

                    if (moveComponent.direction === 'DOWN') {

                        entity.remove(['move']);
                    }

                break;

                case 'KEY_LEFT':

                    if (moveComponent.direction === 'LEFT') {

                        entity.remove(['move']);
                    }

                break;
            }
        }
    });
}

export {input};
