let slideIndex = 1;

function slideSet(input, index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector(`.slides`).children];
    slides.forEach((element)=>{
        element.classList.remove(`active`);
    })
    item.classList.add('active')

}

setInterval(()=>{
    slideIndex += 1;
    if (slideIndex === 4){
        slideIndex = 1;
    }
    slideSet(`slide${slideIndex}`, slideIndex);
}, 5000);
