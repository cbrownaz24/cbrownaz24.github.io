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