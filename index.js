//alert("test");
document.addEventListener("keydown", function (event) {
    returnkeypress(event);
    buttonAnimation(event);
});


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    returnkeypress(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}


function returnkeypress(e) {
    var x = e.key;
    //alert(x);

    switch (x) {

        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    }

}



/* Now, Here we also want the user to want which is button is being pressed on the screen and to do that 
    we'll have to add animation to the buttons that they are clicked...  */

function buttonAnimation(Currentkey) {

    var activebutton = document.querySelector("." + Currentkey);

    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
    }

