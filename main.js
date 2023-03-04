'use strict';




// function creaAppendi(htmlElement, containerElement) {
//     const casella = document.createElement(htmlElement);
//     containerElement.append(casella);
//     return casella;
// }


// function assegnaClasse(classe, target) {
//     target.classList.add(classe);
// }

// function facTotum (htmlElement, htmlClass) {
//     const boardCell = document.createElement(htmlElement);
//     boardCell.classList.add(htmlClass);
//     containerBoard.append(boardCell);
// }
// //questi erano tentativi falliti


// // Main  //
// const containerBoard = document.querySelector('.board');

// const casella = document.createElement('div');
// casella.classList.add('cell');
// containerBoard.append(casella);

// facTotum('p', 'cell');
// const x = creaAppendi('p', containerBoard);
// assegnaClasse('.cell', x);



// Funzioni //

function facTotum (htmlElement, cssClass, htmlContainer, valoreNumerazione) {
    const boardCell = document.createElement(htmlElement);
    boardCell.classList.add(cssClass);
    htmlContainer.append(boardCell);
    boardCell.innerText = valoreNumerazione;
    return boardCell;
}

function eviStampa (target, cssClass, htmlValue) {
    target.addEventListener('click', function(){
    target.classList.add(cssClass);
    console.log(htmlValue)
 })
}


function assegnaClasse(classe, target) {
    target.classList.add(classe);
}


function nCicli(inputDifficulty) {

    if (inputDifficulty === 'easy') {
        return 100;

    } else if (inputDifficulty === 'medium') {
        return 81;

    } else return 49;
}





// // Main  //

const containerBoard = document.querySelector('.board');
const start = document.getElementById('start');

//  Difficolta' //

const difficulty = document.getElementById('difSelect');



start.addEventListener('click', function (){

    containerBoard.innerText = '';
    const inputDifficulty = difficulty.value;

    let x = nCicli(inputDifficulty);

    for (let i = 1; i <= x; i++) {

        let cella = facTotum('div','cell', containerBoard, i);
        eviStampa(cella, 'highlight', i);

        if (inputDifficulty === 'easy') {
            assegnaClasse('cellEasy', cella);

        } else if (inputDifficulty === 'medium') {
            assegnaClasse('cellMedium', cella);

        } else assegnaClasse('cellHard', cella);
    
    }
})




// start.addEventListener('click', function() {

//     containerBoard.innerText = '';

//     for (let i = 1; i <= 100; i++) {
//         let cella = facTotum('div','cellEasy', containerBoard, i);
//         //console.log(x);

//         eviStampa(cella, 'highlight', i);
    
//     }
    
// })











