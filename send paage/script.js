document.addEventListener("DOMContentLoaded", function() {
    let img = document.querySelector(".container__img")
    let input = document.querySelector(".container__input")
    let btn = document.querySelector(".header__buttons")
    let menu = document.querySelector(".menu")
    let sendLabel = document.querySelector(".container__label")
    let container = document.querySelector(".right__top")

    // img.src = localStorage.getItem('myImage')

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

    const element = document.querySelector('.item__select');
    const choices = new Choices(element, {
        searchEnabled: false
    });

    input.addEventListener("input", function(event) {
        container.classList.add("right__container-active")
        if (input.files[0]) {
            img.classList.remove("none")
            img.src = webkitURL.createObjectURL(input.files[0]);
            localStorage.setItem('myImage', img.src);
        }
    });

    // sendLabel.addEventListener("dragover", (e) => {
    //     sendLabel.addEventListener("drop", (e) => {
    //         e.preventDefault();
    //         console.log("123")
    //     })
    //     // img.src = URL.createObjectURL(input.files[0]);
    //     // localStorage.setItem('myImage', img.src);
    // })
});