function hud(entity) {

    const hudComponent = entity.get('hud');
    const positionComponent = entity.get('position');

    positionComponent.x = hudComponent.camera.x + hudComponent.offset * 20 + 20;
    positionComponent.y = hudComponent.camera.y + 20;
}

export {hud};
