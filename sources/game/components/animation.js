function Animation(image, frames) {

    this.name = 'animation';

    this.image = image;
    this.framerate = 10;
    this.frames = frames;

    this.frame = 0;
    this.current = this.frames[this.frame];
    this.elapsed = 0;
}

export {Animation};
