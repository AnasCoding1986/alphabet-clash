// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AnasCoding1986/alphabet-clash.git
// git push -u origin main


function removeElm(elmId) {
    const element = document.getElementById(elmId);
    element.classList.add("hidden");
}
function showElm(elmId) {
    const element = document.getElementById(elmId);
    element.classList.remove("hidden");
}
function addBackgrounfColor(elmId) {
    let element = document.getElementById(elmId);
    element.classList.add("bg-orange-400");
}

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