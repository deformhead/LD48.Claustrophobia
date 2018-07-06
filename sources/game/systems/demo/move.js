import {Recover} from 'components/recover.js';

function move(entity) {

    if (entity.has(['recover']) === false) {

        const moveComponent = entity.get('move');
        const positionComponent = entity.get('position');

        switch (moveComponent.direction) {

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

        this.assets.sounds.move.play();

        entity.add([new Recover(100)]);
    }
}

export {move};
