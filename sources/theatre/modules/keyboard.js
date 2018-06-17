function Keyboard() {

    const codes = [];
    const names = [];
    const states = {};

    function listen(code, name) {

        // add custom key listener
        codes.push(code);
        names.push(name);

        states[name] = false;
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

    addEventListener('blur', () => {

        // deactivate all states on blur
        for (let state in states) {

            if (states.hasOwnProperty(state)
            && states[state] === true) {

                states[state] = false;
            }
        }
    });

    addEventListener('keydown', (event) => {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        // if key is listened then activate its state
        if (index !== -1) {

            event.preventDefault();
            states[names[index]] = true;
        }
    });

    addEventListener('keyup', (event) => {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        // if key is listened then deactivate its state
        if (index !== -1) {

            event.preventDefault();
            states[names[index]] = false;
        }
    });

    this.listen = listen;
    this.update = update;
}

// exports current module as an object
export {Keyboard};
