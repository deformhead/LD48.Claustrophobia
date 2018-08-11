import {Direction} from 'components/direction.js';
import {Grid} from 'components/grid.js';
import {Position} from 'components/position.js';

function step(entity) {

    const stepComponent = entity.get('step');
    const patternComponent = entity.get('pattern');
    const positionComponent = entity.get('position');
    const directionComponent = entity.get('direction');

    stepComponent.elapsed += this.delta;

    let move = stepComponent.offset + 32 * (this.delta / stepComponent.duration);
    let perfect = Math.floor(move);

    stepComponent.offset = move - perfect;

    if (stepComponent.elapsed > stepComponent.duration) {

        perfect += Math.ceil(stepComponent.offset);
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

    if (stepComponent.elapsed >= stepComponent.duration) {

        patternComponent.current = (patternComponent.current === patternComponent.pattern.length - 1) ? 0 : patternComponent.current + 1;

        entity.remove(['step']);

        entity.add([

            new Direction(patternComponent.pattern[patternComponent.current].direction),
            new Grid(patternComponent.pattern[patternComponent.current].x, patternComponent.pattern[patternComponent.current].y)
        ]);
    }
}

export {step};
