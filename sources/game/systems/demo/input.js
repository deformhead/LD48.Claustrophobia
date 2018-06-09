import {Recover} from 'components/demo/index.js';

function input(entity) {

    this.inputs.forEach((input) => {

        if (entity.has(['recover']) === false) {

            const inputComponent = entity.get('input');

            if (inputComponent.inputs.indexOf(input) !== -1) {

                const positionComponent = entity.get('position');

                switch (input) {

                    case 'UP':

                        positionComponent.y = (positionComponent.y - 48 >= 48) ? positionComponent.y - 48 : positionComponent.y;

                    break;

                    case 'RIGHT':

                        positionComponent.x = (positionComponent.x + 48 <= this.size.width - 24) ? positionComponent.x + 48 : positionComponent.x;

                    break;

                    case 'DOWN':

                        positionComponent.y = (positionComponent.y + 48 <= this.size.height - 48) ? positionComponent.y + 48 : positionComponent.y;

                    break;

                    case 'LEFT':

                        positionComponent.x = (positionComponent.x - 48 >= 24) ? positionComponent.x - 48 : positionComponent.x;

                    break;
                }

                entity.add([new Recover(100)]);
            }
        }
    });
}

export {input};
