import {Animation} from 'components/animation.js';

function shadow(entity) {

    const size = this.moves > 4 ? 6 : this.moves + 2;

    const shadowComponent = entity.get('shadow');

    if (shadowComponent.size !== this.moves) {

        shadowComponent.size = this.moves;

        entity.add([

            new Animation(this.assets.images['black'], [{'x': 0, 'y': 288 * size, 'width': 320, 'height': 288}, {'x': 320, 'y': 288 * size, 'width': 320, 'height': 288}])
        ]);
    }

}

export {shadow};
