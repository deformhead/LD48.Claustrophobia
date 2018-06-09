import {Recover} from 'components/demo/index.js';

function input(entity) {

    this.inputs.forEach((input) => {

        if (entity.has(['recover']) === false) {

            const inputComponent = entity.get('input');

            if (inputComponent.inputs.indexOf(input) !== -1) {

                const positionComponent = entity.get('position');

                switch (input) {

                    case 'UP':

                        positionComponent.y -= 32;

                    break;

                    case 'RIGHT':

                        positionComponent.x += 32;

                    break;

                    case 'DOWN':

                        positionComponent.y += 32;

                    break;

                    case 'LEFT':

                        positionComponent.x -= 32;

                    break;
                }

                entity.add([new Recover(400)]);
            }
        }
    });
}

export {input};
