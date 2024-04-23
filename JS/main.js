// Capture button press
document.addEventListener("keyup", function (event) {
    const playerPressed = event.key;

    if(playerPressed === "Escape"){
        gameOver();
    }

    // get the expected to press
    const currentalphabetElement = document.getElementById("current-alphabet").innerText.toLocaleLowerCase();
    if (playerPressed === currentalphabetElement) {
        // update score
        let currentScore = getTextElementById("current-Score");
        updateScore = currentScore + 1;
        setTextElementById("current-Score", updateScore);
        console.log(updateScore);

        // if socre cross 5, everytime add life 1;
        if (currentScore === 5 || currentScore === 10 || currentScore === 15 || currentScore === 20 || currentScore === 25 || currentScore === 30 || currentScore === 35) {
            let currentLife = getTextElementById("life");
            let updateLife = currentLife + 1;
            setTextElementById("life", updateLife);
        }

        // start a new round
        continueGame();
        removeBackgroundColorById(currentalphabetElement);
    }
    else {
        // score will be decrease.
        let currentLife = getTextElementById("life");
        if (currentLife === 0) {
            gameOver();
        }
        else {
            let currentLife = getTextElementById("life");
            let updateLife = currentLife - 1;
            setTextElementById("life", updateLife);
        }
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
    // hide everything without playgroud
    hideElementById("home");
    hideElementById("final-score");
    showElementById("play-ground");
    // reset the value of life and score
    setTextElementById("life", 5);
    setTextElementById("current-Score", 0);

    continueGame();
}

function gameOver() {
    hideElementById("play-ground");
    showElementById("final-score");

    // update the final score of the game
    const finalScore = getTextElementById("current-Score");
    setTextElementById("your-score", finalScore);

    // remove last selected key
    let lastSelectedAlphabet = getElementTextById("current-alphabet");
    removeBackgroundColorById(lastSelectedAlphabet);
}