var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('I like signals, math, people, and puzzles.')
  .pauseFor(3000)
  .start()


var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'assets/southwest2.jpg', //change image for intro section if desired
        blendingMode: 'multiply',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 8000
        }
    }
});

// BUTTON 1 - goes to external link
var btnModal1 = document.getElementById("btn1");
btnModal1.onclick = function() {
  window.open("https://github.com/cbrownaz24/RedditPennyStockProject", "_blank")
}

//BUTTON 2
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btnModal2 = document.getElementById("btn2");

// Get the <span> element that closes the modal
var spanModal2 = document.getElementsByClassName("closeModal2")[0];

// When the user clicks on the button, open the modal
btnModal2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//BUTTON 3
var modal3 = document.getElementById("modal3");

// Get the button that opens the modal
var btnModal3 = document.getElementById("btn3");

// Get the <span> element that closes the modal
var spanModal3 = document.getElementsByClassName("closeModal3")[0];

// When the user clicks on the button, open the modal
btnModal3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

//BUTTON 4 -- links to outside website
var btn4 = document.getElementById("btn4");
btn4.onclick = function() { 
  window.open("https://github.com/cbrownaz24/PGI-consumer-retail-EDA/blob/main/PNG-SystemicFundQuestion.ipynb", "_blank") 
}

//BUTTON 5 -- links to outside website
var btn5 = document.getElementById("btn5");
btn5.onclick = function() { 
  window.open("https://github.com/cbrownaz24/SpaceshipTitanic/blob/main/spaceship-titanic.ipynb", "_blank") 
}

//BUTTON 6 -- links to outside website
var btn6 = document.getElementById("btn6");
btn6.onclick = function() { 
  window.open("https://timelyhealthgooglecssi2022.connorbrown37.repl.co/", "_blank") 
}

//BUTTON 7 -- links to outside website
var btn7 = document.getElementById("btn7");
btn7.onclick = function() { 
  window.open("https://www.jto.org/article/S1556-0864(21)03076-8/fulltext", "_blank") 
}

//BUTTON 8 -- links to outside website
var btn8 = document.getElementById("btn8");
btn8.onclick = function() { 
  window.open("https://github.com/liamos7/CitadelDatathon2023-Team4", "_blank") 
}

//HOBBY MODALS

//BUTTON HOBBY 1
var modalHobby1 = document.getElementById("modalHobby1");

// Get the button that opens the modal
var btnHobby1 = document.getElementById("hobbyBtn1");

// Get the <span> element that closes the modal
var spanModalHobby1 = document.getElementsByClassName("closeModalHobby1")[0];

// When the user clicks on the button, open the modal
btnHobby1.onclick = function() {
  modalHobby1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby1.onclick = function() {
  modalHobby1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby1) {
    modalHobby1.style.display = "none";
  }
}