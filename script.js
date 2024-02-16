function detectKey(e) {
    // pressedkey
    let pressedKey = e.key;

    // currentalhabet
    let currentAlphabetElement = document.getElementById("randomKeyP");
    let currenalphabet = currentAlphabetElement.innerHTML;

    // cheked
    if (pressedKey === currenalphabet) {
        // score
        let scoreVal = getElmVal("score");
        scoreVal = scoreVal + 1;
        changeElm("score", scoreVal);
        removeBackgrounfColor(currenalphabet);
        continueGame();
    }else{
        let lifeVal = getElmVal("life");
        lifeVal = lifeVal - 1;
        changeElm("life", lifeVal)
        if (lifeVal === 0) {
            gameOver();
        }
    }
     
}

document.addEventListener("keyup", detectKey)

function continueGame() {
    // all alfabet
    let alfabetString = "abcdefghijklmnopqrstuvwxyz";
    let alfabetArr = alfabetString.split("");

    // get random number
    let randomNum = Math.round(Math.random() * 25);

    let alfabet = alfabetArr[randomNum];

    let randomKeyP = document.getElementById("randomKeyP");
    randomKeyP.innerHTML = alfabet;

    addBackgrounfColor(alfabet)
}

function play() {
    removeElm("homeSection");
    removeElm("scoreSection");
    showElm("playGroundSection");

    changeElm("life", 5);
    changeElm("score", 0);

    continueGame();

}