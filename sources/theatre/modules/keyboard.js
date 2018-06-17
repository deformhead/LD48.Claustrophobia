function Keyboard() {

    const codes = [];
    const names = [];
    const states = {};

    function blur() {

        // deactivate all states on blur
        for (let state in states) {

            if (states.hasOwnProperty(state)
            && states[state] === true) {

                states[state] = false;
            }
        }
    }

    function destroy() {

        removeEventListener('blur', blur);
        removeEventListener('keydown', keydown);
        removeEventListener('keyup', keyup);
    }

    function keydown(event) {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        // if key is listened then activate its state
        if (index !== -1) {

            event.preventDefault();
            states[names[index]] = true;
        }
    }

    function keyup(event) {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        // if key is listened then deactivate its state
        if (index !== -1) {

            event.preventDefault();
            states[names[index]] = false;
        }
    }

    function listen(code, name) {

        // add custom key listener
        codes.push(code);
        names.push(name);

        states[name] = false;
    }

    function setup() {

        addEventListener('blur', blur);
        addEventListener('keydown', keydown);
        addEventListener('keyup', keyup);
    }

    function update(handler) {

        const actives = [];

        // retrieve all active states
        for (let state in states) {

            if (states.hasOwnProperty(state)
            && states[state] === true) {

                actives.push(state);
            }
        }

        // call user's update handler providing all active states
        handler(actives);
    }

    setup.call(this);

    this.destroy = destroy;
    this.listen = listen;
    this.setup = setup;
    this.update = update;
}

// exports current module as an object
export {Keyboard};
