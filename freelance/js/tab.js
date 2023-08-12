var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor=" #10013d";
        node.style.color="white";
        node.style.border='2px solid rgb(110, 112, 221)';
        node.style.borderRadius="80px";
        node.style.height='45px';
        node.style.width='100px';

    });
    
    tabButtons[panelIndex].style.color="white";
    tabButtons[panelIndex].style.backgroundColor="blue";
    tabButtons[panelIndex].style.border="none"
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
   
}
showPanel(0,'#f44336');




// slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1800); // Change image every 2 seconds
}



