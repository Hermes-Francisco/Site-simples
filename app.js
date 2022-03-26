'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    var body = document.body;

    if (body.className == "light-theme") {
        body.className = "dark-theme";
        this.textContent = "Claro" 
    } else {
        body.className = "light-theme";
        this.textContent = "Escuro" 
    }
})