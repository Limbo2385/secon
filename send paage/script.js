document.addEventListener("DOMContentLoaded", async function() {
    // let img = document.querySelector(".container__img")
    let input = document.querySelector(".container__input")
    let btn = document.querySelector(".header__buttons")
    let menu = document.querySelector(".menu")
    let sendLabel = document.querySelector(".container__label")
    let container = document.querySelector(".right__top")
    let containerBottom = document.querySelector(".right__bottom")

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

    const element = document.querySelector('.item__select');
    const choices = new Choices(element, {
        searchEnabled: false
    });

    input.addEventListener("input", function(event) {
        console.log(input.files[0])
        container.classList.add("right__container-active")
        if (input.files[0].type.includes("image")) {
            document.querySelectorAll(".container__img").forEach(el => {
                el.remove()
            })
            let img = document.createElement("img")
            img.classList.add("container__img")
            // img.classList.remove("none")
            containerBottom.append(img)
            img.src = webkitURL.createObjectURL(input.files[0]);
            localStorage.setItem('myImage', img.src);
        }
        else {
            document.querySelectorAll(".container__img").forEach(el => {
                el.remove()
            })
            let video = document.createElement("video")
            video.classList.add("container__img")
            video.setAttribute("controls", '')
            containerBottom.append(video)
            video.src = webkitURL.createObjectURL(input.files[0]);
            localStorage.setItem('myImage', video.src);
        }
    });

    let object = {
        "user-id": '',
        address: '',
        type: '',
        comment: "",
        file: {
            "user-id": '',
            contentType: '',
            
        } 
    }
    if(localStorage.getItem("user-id") != null && localStorage.getItem("token") != null) {
        let res = await getUserById(localStorage.getItem("token"), localStorage.getItem("user-id"))
        document.querySelector(".profile__name").textContent = res.firstName + " " + res.lastName
        document.querySelector(".menu__name").textContent = res.firstName 
    }
 });
 
 async function getUserById(token, userId) {
     let response = await fetch(`http://92.53.97.223:8081/users/by-id/${userId}`, {
         method: 'GET',
         headers: {
             // 'Content-Type': 'application/json;charset=utf-8',
             'Authorization': 'Bearer ' + token
         },
         // referrerPolicy: "strict-origin-when-cross-origin"
     });
 
     let res = await response.json()
     return res;
 }