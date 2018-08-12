import {Animation} from 'components/animation.js';
import {Grid} from 'components/grid.js';

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
            this.camera.y = positionComponent.y - this.size.height / 2;

        break;

        case 'RIGHT':

            positionComponent.x += perfect;
            this.camera.x = positionComponent.x - this.size.width / 2;

        break;

        case 'DOWN':

            positionComponent.y += perfect;
            this.camera.y = positionComponent.y - this.size.height / 2;

        break;

        case 'LEFT':

            positionComponent.x -= perfect;
            this.camera.x = positionComponent.x - this.size.width / 2;

        break;
    }

    if (runComponent.elapsed >= runComponent.duration) {

        entity.remove(['run']);

        this.moves -= 1;
        this.world.remove(this.hearts.splice(-1, 1)[0]);

        console.log(this.moves, this.hearts);

        if (this.grid[entity.get('grid').top][entity.get('grid').left] === 7) {

            this.level = this.levels[this.levels.indexOf(this.level) + 1] || this.levels[0];

            this.restart();

            return;
        }

        if (this.moves === 0) {

            this.restart();

            return;
        }

        const gridComponent = entity.get('grid');

        const left = gridComponent.left;
        const top = gridComponent.top;

        switch (directionComponent.direction) {

            case 'UP':

                entity.remove(['run']);
                entity.add([

                    new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_UP'])
                ]);

            break;

            case 'RIGHT':

                entity.remove(['run']);
                entity.add([

                    new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_RIGHT'])
                ]);

            break;

            case 'DOWN':

                entity.remove(['run']);
                entity.add([

                    new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_DOWN'])
                ]);

            break;

            case 'LEFT':

                entity.remove(['run']);
                entity.add([

                    new Animation(spritesheetComponent.image, spritesheetComponent.animations['IDLE_LEFT'])
                ]);

            break;
        }
    }
}

export {run};
