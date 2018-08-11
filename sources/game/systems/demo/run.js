import {Animation} from 'components/animation.js';

function run(entity) {

    const directionComponent = entity.get('direction');
    const positionComponent = entity.get('position');
    const runComponent = entity.get('run');
    const spritesheetComponent = entity.get('spritesheet');

    runComponent.elapsed += this.delta;

    let move = runComponent.offset + 32 * (this.delta / runComponent.duration);
    let perfect = Math.floor(move);

    runComponent.offset = move - perfect;

    if (runComponent.elapsed > runComponent.duration) {

        perfect += Math.ceil(runComponent.offset);
    }

    switch (directionComponent.direction) {

        case 'UP':

            positionComponent.y -= perfect;

        break;

        case 'RIGHT':

            positionComponent.x += perfect;

        break;

        case 'DOWN':

            positionComponent.y += perfect;

        break;

        case 'LEFT':

            positionComponent.x -= perfect;

        break;
    }

    if (runComponent.elapsed >= runComponent.duration) {

        entity.remove(['run']);

        switch (directionComponent.direction) {

            case 'UP':

                entity.remove(['run']);
                entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_UP'])]);

            break;

            case 'RIGHT':

                entity.remove(['run']);
                entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_RIGHT'])]);

            break;

            case 'DOWN':

                entity.remove(['run']);
                entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_DOWN'])]);

            break;

            case 'LEFT':

                entity.remove(['run']);
                entity.add([new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_LEFT'])]);

            break;
        }
    }
}

export {run};
