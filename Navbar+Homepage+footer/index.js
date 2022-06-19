let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndex_1 = 0;
showSlides_1();

function showSlides_1() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex_1++;
  if (slideIndex_1 > slides.length) {slideIndex_1 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_1-1].style.display = "block";  
  dots[slideIndex_1-1].className += " active";
  setTimeout(showSlides_1, 5000); // Change image every 5 seconds
}
let right = 0;
let maxMargin;
let jumpMargin = 150;
    
function setWidth()
{
    let boxwidth = document.querySelector(".container").offsetWidth;
    let displaywidth = document.querySelector(".row").offsetWidth;
    let displayheight = document.querySelector(".row").offsetHeight;
    let children = document.querySelectorAll(".row-container > .container").length;
    let outerboxwidth = children * boxwidth + (children*10);
        
    document.querySelector(".row-container").style.width = outerboxwidth+"px";
    document.querySelectorAll(".btn")[0].style.height = displayheight+"px";
    document.querySelectorAll(".btn")[1].style.height = displayheight+"px";
    maxMargin = outerboxwidth - displaywidth;
}
    
function slideLeft(event)
{
    let rowcont = document.querySelector(".row-container");
        
    if(right <= -maxMargin)
    {
        event.preventDefault();
    }
    else
    {
        right -= jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
}
    
function slideRight(event)
{
    let rowcont = document.querySelector(".row-container");
        
    if(right==0)
    {
        event.preventDefault();
    }
    else if(right >= maxMargin)
    {
        event.preventDefault();
    }
    else
    {
        right += jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
}
    
    window.onload=setWidth;