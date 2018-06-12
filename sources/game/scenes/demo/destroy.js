function destroy() {

    console.log('destroy demo scene');
    console.log('-------');

    this.context.clearRect(0, 0, this.size.width, this.size.height);

    delete this.delta;
    delete this.inputs;
    delete this.world;

    delete this.keyboard;
    delete this.systems;
}

export {destroy};
