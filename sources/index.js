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

document.body.style.margin = '0';
document.documentElement.style.width = '100%';
document.documentElement.style.height = '100%';
document.body.style.background = '#000';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.getElementById('theatre').style.position = 'absolute';
document.getElementById('theatre').style.left = 'calc(50% - 160px)';
document.getElementById('theatre').style.top = 'calc(50% - 144px)';
