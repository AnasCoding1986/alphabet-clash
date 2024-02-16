function detectKey(e) {
    // pressedkey
    let pressedKey = e.key;
    console.log("pressed key is", pressedKey);

    // currentalhabet
    let currentAlphabetElement = document.getElementById("randomKeyP");
    let currenalphabet = currentAlphabetElement.innerHTML;
    console.log("current alphabet ",currenalphabet);

    // cheked
    if (pressedKey === currenalphabet) {
        // score
        let scoreElm = document.getElementById("score");
        let scoreInnerText = scoreElm.innerText;
        let scoreInnerNum = parseInt(scoreInnerText);
        scoreInnerNum = scoreInnerNum + 1;
        scoreElm.innerText = scoreInnerNum;


        removeBackgrounfColor(currenalphabet);
        continueGame();
    }else{
        let lifeElm = document.getElementById("life");
        let lifeElmText = lifeElm.innerText;
        let lifeElmNum = parseInt(lifeElmText);
        lifeElmNum = lifeElmNum - 1;
        lifeElm.innerText = lifeElmNum;
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
    showElm("playGroundSection");

    continueGame();

}