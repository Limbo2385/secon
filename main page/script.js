document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector(".header__buttons")
    let menu = document.querySelector(".menu")
    let closeBtn = document.querySelector(".menu__exit")
    btn.addEventListener("click", function() {
        menu.classList.add("menu-active")
        
    })
    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".menu") && !target.closest(".header__buttons")) {
            menu.classList.remove("menu-active");
            console.log("123")
        }
    })  
});