let currentPlayer = 1;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

/**
 * Variables liées à la sélection
 */
let currentSelection = false;
let selectedHTML;
let selectedHTMLClasses;

/**
 * Récupère la deuxième classe déclaré dans votre liste.
 * Découpe votre ensemble de classe selon les espaces pour les mettre dans un tableau (split).
 * @param {*} selectedClasses 
 * @returns la classe liée à une pièce si elle existe sinon renvoie vide.
 */
function getCaseClass(selectedClasses) {
    /**
     * On récupère l'ensemble des classes sous forme de tableau, et on récupère la deuxième.
     * Note : Toujours déclarer votre class liée à une pièce en deuxième.
     */
    if (selectedClasses !== "") {
        let arraySplitedClasses = selectedClasses.split(" ");
        if (arraySplitedClasses.length > 1) {
            return arraySplitedClasses[1];
        } else {
            return "";
        }
    }
}

/**
 * Passe au joueur suivant.
 */
function changePlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
    } else if (currentPlayer === 2) {
        currentPlayer = 1;
    }
}

/**
 * Ajoute une classe selon le joueur courant à une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function addSelectedClassByPlayer(classList) {
    if (currentPlayer === 1) {
        classList.add("selectedRed");
    } else if (currentPlayer === 2) {
        classList.add("selectedBlue");
    }
}

/**
 * Retire une classe selon le joueur courant d'une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function removeSelectedClassByPlayer(classList) {
    if (currentPlayer === 1) {
        classList.remove("selectedRed");
    } else if (currentPlayer === 2) {
        classList.remove("selectedBlue");
    }
}

/**
 * Fonction liée à l'évènement 'click'.
 * A MODIFIER
 */
let play = function() {
    if (!currentSelection) {
        selectedHTML = this;
        selectedHTMLClasses = this.className;
        let piece = getCaseClass(selectedHTMLClasses);
        if (isCaseEmpty(piece) && isCaseAllowed(piece)){
            currentSelection = true;
            addSelectedClassByPlayer(this.classList);
        }
    } else {
        let piece = getCaseClass(this.className);
        removeSelectedClassByPlayer(selectedHTML.classList);

        if (this === selectedHTML || isCaseAllowed(piece)){//Impossible de poser le pion
            currentSelection = false;
        }
        else if(!isCaseEmpty(piece)){//déplacer sur une case vide
            this.classList.add(getCaseClass(selectedHTMLClasses));
            selectedHTML.classList.remove(getCaseClass(selectedHTMLClasses));
            selectedHTML = null;
            selectedHTMLClasses = null;
            currentSelection = false;
            changePlayer();
        }
        else {//Poser sur un pion adverse
            this.classList.add(getCaseClass(selectedHTMLClasses));
            this.classList.remove(piece);
            selectedHTML.classList.remove(getCaseClass(selectedHTMLClasses));
            selectedHTML = null;
            selectedHTMLClasses = null;
            currentSelection = false;
            changePlayer();
        }
    }
    isWin();
};

function getElementsChildren(selectedClasses){
    return selectedClasses.childNodes;
}

function isCaseEmpty(selectedClasses){
    return getCaseClass(selectedClasses) === '';
}

function isCaseAllowed(selectedClasses){
    if (currentPlayer === 1){
        return arrayPlayer1Pieces.includes((selectedClasses));
    }
    else if (currentPlayer === 2){
        return arrayPlayer2Pieces.includes((selectedClasses));
    }
}

function isWin(){
    let grid = document.getElementsByClassName("case");
    let countPlayer1 = 0;
    let countPlayer2 = 0;
    console.log(grid)
    for (let i = 0; i < grid.length; i++) {
        if (getCaseClass(grid[i].className) === "roi-noir"){
            break;
        }
        if (getCaseClass(grid[i].className) === "roi-blanc"){
            break;
        }
        if (arrayPlayer1Pieces.includes(getCaseClass(grid[i].className))){
            countPlayer1 ++;
        }
        else if (arrayPlayer2Pieces.includes(getCaseClass(grid[i].className))){
            countPlayer2 ++;
        }
    }
    console.log(countPlayer1);
    console.log(countPlayer2);
}

let arrayPlayer1Pieces = ["tour-noir", "cavalier-noir", "fou-noir", "roi-noir", "reine-noir", "pion-noir"];
let arrayPlayer2Pieces = ["tour-blanc", "cavalier-blanc", "fou-blanc", "roi-blanc", "reine-blanc", "pion-blanc"];
/**
 * On lie tous les éléments avec la class 'case' à l'événement 'click'.
 */
let GridElements = document.getElementsByClassName("case");
for (let i = 0; i < GridElements.length; i++) {
    GridElements[i].addEventListener('click', play, false);
    document.createTextNode("test");
    if (i === 0 || i === 7){
        GridElements[i].classList.add("tour-noir");
    }
    else if (i === 1 || i === 6){
        GridElements[i].classList.add("cavalier-noir");
    }
    else if (i === 2 || i === 5){
        GridElements[i].classList.add("fou-noir");
    }
    else if (i === 4){
        GridElements[i].classList.add("roi-noir");
    }
    else if (i === 3){
        GridElements[i].classList.add("reine-noir");
    }
    else if (i > 6 && i < 16){
        GridElements[i].classList.add("pion-noir");
    }
    if (i === 48 || i === 55){
        GridElements[i].classList.add("tour-blanc");
    }
    else if (i === 49 || i === 54){
        GridElements[i].classList.add("cavalier-blanc");
    }
    else if (i === 50 || i === 53){
        GridElements[i].classList.add("fou-blanc");
    }
    else if (i === 51){
        GridElements[i].classList.add("reine-blanc");
    }
    else if (i === 52){
        GridElements[i].classList.add("roi-blanc");
    }
    else if (i > 39 && i < 48){
        GridElements[i].classList.add("pion-blanc");
    }
}