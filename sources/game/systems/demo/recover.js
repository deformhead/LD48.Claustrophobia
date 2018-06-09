function recover(entity) {

    const recoverComponent = entity.get('recover');

    recoverComponent.remaining -= this.delta;

    if (recoverComponent.remaining <= 0) {

        entity.remove(['recover']);
    }
}

export {recover};
