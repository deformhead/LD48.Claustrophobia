function collide(entity) {

    this.world.entities.forEach((collider) => {

        if (collider === entity
        || collider.has(['grid']) === false) {

            return;
        }

        if (collider.get('grid').top === entity.get('grid').top
        && collider.get('grid').left === entity.get('grid').left) {

            this.restart();
        }
    });
}

export {collide};
