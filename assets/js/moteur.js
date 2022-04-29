var currentPlayer = 1;
var scorePlayer1 = 0;
var scorePlayer2 = 0;

/**
 * Variables liées à la sélection
 */
var currentSelection = false;
var selectedHTML;
var selectedHTMLClasses;

/**
 * Récupère la deuxième classe déclaré dans votre liste.
 * Découpe votre ensemble de classe selon les espaces pour les mettre dans un tableau (split).
 * @param {*} selectedClasses 
 * @returns la classe liée à une pièce si elle exise sinon renvoie vide.
 */
function getCaseClass(selectedClasses) {
    /**
     * On récupère l'ensemble des classes sous forme de tableau, et on récupère la deuxième.
     * Note : Toujours déclarer votre class liée à une pièce en deuxième.
     */
    if (selectedClasses !== "") {
        var arraySplitedClasses = selectedClasses.split(" ");
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
    if (currentPlayer == 1) {
        currentPlayer = 2;
    } else if (currentPlayer == 2) {
        currentPlayer = 1;
    }
}

/**
 * Ajoute une classe selon le joueur courant à une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function addSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        classList.add("selectedRed");
    } else if (currentPlayer == 2) {
        classList.add("selectedBlue");
    }
}

/**
 * Retire une classe selon le joueur courant d'une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function removeSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        //classList.remove(votreClass);
    } else if (currentPlayer == 2) {
        //classList.remove(votreClass);
    }
}

/**
 * Fonction liée à l'évènement 'click'.
 * A MODIFIER
 */
var play = function() {
    if (!currentSelection) {
        selectedHTML = this;
        selectedHTMLClasses = this.className;
        var piece = getCaseClass(selectedHTMLClasses)
        currentSelection = true;
        var classPiece = getCaseClass(selectedHTMLClasses);
        addSelectedClassByPlayer(this.classList);
    } else {

    }
};

/**
 * On lie tous les éléments avec la classe 'case' à l'événement 'click'.
 */
var elements = document.getElementsByClassName("case");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', play, false);
}