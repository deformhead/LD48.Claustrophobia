function render(entity) {

    const positionComponent = entity.get('position');

    this.context.drawImage(

        this.assets.images['white-1x1@1x'],
        0, 0, 1, 1,
        positionComponent.x - 32 / 2, positionComponent.y - 32 / 2, 32, 32
    );
}

export {render};
