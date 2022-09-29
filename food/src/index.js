window.addEventListener('DOMContentLoaded', () => {
    const   tabs = require('./modules/tabs'),
            modal = require('./modules/modal'),
            slider = require('./modules/slider'),
            timer = require('./modules/timer'),
            forms = require('./modules/forms'),
            calc = require('./modules/calc');

    tabs();
    modal();
    slider();
    timer();
    forms();
    calc();

});