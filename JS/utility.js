function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400", "font-bold");
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400", "font-bold");
}
function getTextElementById(elementId) {
    let element = parseInt(document.getElementById(elementId).innerText);
    return element;
}
function setTextElementById(elementId, value) {
    let element = document.getElementById(elementId);
    element.innerText = value;

}
function getRandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    let singleAlphabet = alphabetString.split('');
    // get Random Number
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = singleAlphabet[index];
    return alphabet;
}












