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
function removeBackgrounfColor(elmId) {
    let element = document.getElementById(elmId);
    element.classList.remove("bg-orange-400");
}
function getElmVal(elmId) {
    let elm = document.getElementById(elmId);
    let elmTxt = elm.innerText;
    let elmVal = parseInt(elmTxt);
    return elmVal;
}
function changeElm(elmId, value) {
    let elm = document.getElementById(elmId);
    elm.innerText = value;
}
function getElmVal(elmId) {
    let elm = document.getElementById(elmId);
    let text = elm.innerText;
    return text;
}
function gameOver() {
    removeElm("playGroundSection");
    showElm("scoreSection");

    let lastScore = getElmVal("score");
    changeElm("result", lastScore)

    let currentKey = getElmVal("randomKeyP");
    removeBackgrounfColor(currentKey)

}


