import {Animation} from 'components/animation.js';

function shadow(entity) {

    let size;

    switch (this.moves) {

        case 1:
        case 2:

            size = 3;

        break;

        case 3:
        case 4:

            size = 4;

        break;

        case 5:
        case 6:

            size = 5;

        break;

        default:

            size = 6;
    }

    const shadowComponent = entity.get('shadow');

    if (shadowComponent.size !== this.moves) {

        shadowComponent.size = this.moves;

        entity.add([

            new Animation(this.assets.images['black'], [{'x': 0, 'y': 288 * size, 'width': 320, 'height': 288}, {'x': 320, 'y': 288 * size, 'width': 320, 'height': 288}])
        ]);
    }

}

export {shadow};
