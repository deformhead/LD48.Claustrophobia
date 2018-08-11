function render(entity) {

    const animationComponent = entity.get('animation');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        animationComponent.image,
        animationComponent.current.x, animationComponent.current.y, animationComponent.current.width, animationComponent.current.height,
        positionComponent.x - this.camera.x - animationComponent.current.width / 2, positionComponent.y - this.camera.y - animationComponent.current.height / 2, animationComponent.current.width, animationComponent.current.height
    );
}

export {render};
