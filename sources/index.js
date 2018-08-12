import {Theatre} from 'core/theatre.js';

new Theatre({

    'container': document.body,
    'debug': true,
    'framerate': 60,
    'loading': 'loading',
    'opening': 'splash',
    'size': {

        'width': 320,
        'height': 288
    }
});
