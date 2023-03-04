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

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/*function myControllo (arrayCase, nValoriVoluti) {
    
    for (let i = 0; i < nValoriVoluti ; i++) {

        const newValRandom = randomNumber(1, nCicli);

        let b = 0;
        while ( b < arrayCase.length) {
            console.log(arrayCase[b]); 
            debugger;
            if (newValRandom === arrayCase[b]) {
                
                arrayCase.push(newValRandom);
                b++;
            } 

            
            console.log(arrayCase);
            
            
        }  
         
    }
    
}*/

function controllore(arrayName, valore) {
    for (let i = 0; i < arrayName.length; i++) {

        console.log(arrayName[i]);
        if (valore === arrayName[i]) {
            console.log('gia esistente');
            return true
        } 
        
    
        /*else if (i = arrayName.length-1 && valore !== arrayName[i]){
            console.log('ok');
            debugger;
        }*/

    }
    console.log('diverso');
    return false
}

function fillArrayUnicCasual(nValori, valoreMax, arrayName) {

    let i = 0;
    while (i < nValori) {

        const posValue = randomNumber(1, valoreMax);
        console.log('roll');
        console.log(posValue);
        if (controllore(arrayName, posValue) === false) {
            arrayName.push(posValue);
            i++;
        }

    }
}




// // Main  //

const containerBoard = document.querySelector('.board');
const start = document.getElementById('start');
//aggiunte per bombe
//const gruppoBombe = [''];

//prove
const gruppoBombe = [];

//controllore(gruppoBombe, '4');
fillArrayUnicCasual(16, 20, gruppoBombe);


//  Difficolta' //

const difficulty = document.getElementById('difSelect');



start.addEventListener('click', function (){

    

    containerBoard.innerText = '';
    const inputDifficulty = difficulty.value;

    let x = nCicli(inputDifficulty);




    /*
    for (let i = 1; i <= x; i++) {

        let cella = facTotum('div','cell', containerBoard, i);
        eviStampa(cella, 'highlight', i);

        if (inputDifficulty === 'easy') {
            assegnaClasse('cellEasy', cella);

        } else if (inputDifficulty === 'medium') {
            assegnaClasse('cellMedium', cella);

        } else assegnaClasse('cellHard', cella);
    
    }
    */
})



//Ogni volta che genero un nuovo valore


//qui' in teoria avrò il numero in posizione b dell'array

//If (x === arraybombe[b]) {
//    b++:} 

//}
//arraybombe.push(x);

//Se io metto questa roba sopra dentro un for che dura 16 giri:
//For (let i = 0; i < 16 ; i++) {
//}


// start.addEventListener('click', function() {

//     containerBoard.innerText = '';

//     for (let i = 1; i <= 100; i++) {
//         let cella = facTotum('div','cellEasy', containerBoard, i);
//         //console.log(x);

//         eviStampa(cella, 'highlight', i);
    
//     }
    
// })











