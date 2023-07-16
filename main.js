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