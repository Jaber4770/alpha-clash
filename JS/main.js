function continueGame(){
    let alphabet = getRandomAlphabet();
    let currentElphabetElement = document.getElementById("current-alphabet");
    currentElphabetElement.innerText = alphabet;
    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementByIt("home");
    showElementByIt("play-ground");
    continueGame();
}