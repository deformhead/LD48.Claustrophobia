function update(delta) {

    // console.log('update loading scene');

    this.elapsed += delta;

    if (this.elapsed > 3000) {

        this.load('demo');
    }
}

export {update};
