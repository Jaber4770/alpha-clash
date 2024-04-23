// Capture button press
document.addEventListener("keyup", function (event) {
    const playerPressed = event.key;

    // get the expected to press
    const currentalphabetElement = document.getElementById("current-alphabet").innerText.toLocaleLowerCase();
    if(playerPressed === currentalphabetElement){

        // update score


        // start a new round
        continueGame();
        removeBackgroundColorById(currentalphabetElement);
    }
    else{
        // score will be decrease.
        console.log("oh no! you lost 1 life.")
    }
    
})


function continueGame() {
    let alphabet = getRandomAlphabet();
    let currentElphabetElement = document.getElementById("current-alphabet");
    currentElphabetElement.innerText = alphabet;
    // set background color
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementByIt("home");
    showElementByIt("play-ground");
    continueGame();
}