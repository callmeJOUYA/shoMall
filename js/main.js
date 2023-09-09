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

// offer countdown 

var countDownDate = new Date().getTime() + (24 * 60 * 60 * 1000 );

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
})
