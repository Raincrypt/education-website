//change navbar styles on scroll

window.addEventListener('scroll', ()=> {
    let navBackground = document.querySelector("nav")
    navBackground.classList.toggle('window-scroll', window.scrollY > 0)
})

//display answers on clicking (FAQs)

let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        //Expands Answers
        faq.classList.toggle("open");

        //change icon
        const icon = faq.querySelector(".faq i");
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }
        else{
            icon.className = "uil uil-plus";
        }
    })
})

//Navigation Menu Button Function for Tablet/Mobile

let navButtonOpen = document.querySelector("#open-menu");
let navButtonClose = document.querySelector("#close-menu");
let menu = document.querySelector(".nav-menu");

//for opening menu
navButtonOpen.addEventListener('click', () => {
    menu.style.display = "flex";
    navButtonClose.style.display = "inline-block";
    navButtonOpen.style.display = "none";
    
})

// for closing menu
navButtonClose.addEventListener('click', () => {
    menu.style.display = "none";
    navButtonOpen.style.display = "inline-block";
    navButtonClose.style.display = "none";
})
