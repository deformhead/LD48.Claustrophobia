function destroy(game) {

    console.log('destroy demo scene');

    delete this.delta;
    delete this.inputs;
    delete this.systems;
    delete this.world;
}

export {destroy};
