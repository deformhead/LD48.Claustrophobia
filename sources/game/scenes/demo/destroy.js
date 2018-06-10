function destroy() {

    console.log('destroy demo scene');

    delete this.delta;
    delete this.inputs;
    delete this.keyboard;
    delete this.systems;
    delete this.world;
}

export {destroy};
