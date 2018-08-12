function render() {

    // console.log('render loading scene');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    this.systems.render.update.call(this, this.world.entities);

    let opacity = 0;

    if (this.elapsed < 800) {

        opacity = 1 - this.elapsed / 800;
    }

    else if (this.elapsed >= 2200) {

        opacity = (800 - (3000 - this.elapsed)) / 800;
    }

    this.context.fillStyle = 'rgba(24, 48, 48, ' + opacity + ')';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
}

export {render};
