"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const tabs = require("./modules/tabs"),
        modal = require("./modules/modal"),
        timer = require("./modules/timer"),
        calc = require("./modules/calc"),
        cards = require("./modules/cards"),
        form = require("./modules/forms"),
        slider = require("./modules/slider");

    tabs();
    modal();
    timer();
    calc();
    cards();
    form();
    slider();
});
