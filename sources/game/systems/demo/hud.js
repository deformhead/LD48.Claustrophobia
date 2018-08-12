function hud(entity) {

    const hudComponent = entity.get('hud');
    const positionComponent = entity.get('position');

    positionComponent.x = hudComponent.camera.x + hudComponent.offset[0] + hudComponent.margin;
    positionComponent.y = hudComponent.camera.y + hudComponent.offset[1] + hudComponent.margin;
}

export {hud};
