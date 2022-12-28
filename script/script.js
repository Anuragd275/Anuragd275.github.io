'use strict'

const btn = document.getElementById("the")

btn.addEventListener("click", function(){
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const className = document.body.className;
    if(className == "light-theme") {
        this.innerHTML = `<i class="fa-solid fa-moon" id="themeIcon"></i>`;
    } else {
        this.innerHTML = `<i class="fa-solid fa-sun" id="themeIcon"></i>`;
    }
})