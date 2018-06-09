function render(entity) {

    const positionComponent = entity.get('position');

    this.context.drawImage(

        this.assets.images['white-1x1@1x'],
        0, 0, 1, 1,
        positionComponent.x - 48 / 2, positionComponent.y - 48 / 2, 48, 48
    );
}

export {render};
