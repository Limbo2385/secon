document.addEventListener("DOMContentLoaded", function() {
    let img = document.querySelector(".container__img")
    let input = document.querySelector(".container__input")
    let btn = document.querySelector(".header__buttons")
    let menu = document.querySelector(".menu")
    let sendLabel = document.querySelector(".container__label")
    let container = document.querySelector(".right__top")

    //img.src = localStorage.getItem('myImage')

    // const fccUrl = new URL(localStorage.getItem('myImage'));
    // console.log(fccUrl);

    btn.addEventListener("click", function() {
        menu.classList.add("menu-active")

    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".menu") && !target.closest(".header__buttons")) {
            menu.classList.remove("menu-active");
        }
    }) 


    new SimpleBar(document.querySelector(".left__container"), {

        // autoHide: false,
        scrollbarMaxSize: 25,
    });
});


function createNewVaolation(category, date ) {

}