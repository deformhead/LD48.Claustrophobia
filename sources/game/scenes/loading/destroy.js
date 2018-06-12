function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));
    console.log('-------');

    this.context.clearRect(0, 0, this.size.width, this.size.height);
}

export {destroy};
