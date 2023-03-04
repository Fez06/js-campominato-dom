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
    target.classList.toggle(cssClass);
    console.log(htmlValue);
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

        //console.log(arrayName[i]);
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
        //console.log('roll');
        //console.log(posValue);
        if (controllore(arrayName, posValue) === false) {
            arrayName.push(posValue);
            i++;
        }

    }
    //console.log(arrayName);
}

    //questa mi serve perche' se no, avendo sia cell che cellbomb  l'elemento html mi mancherebbe nel momento dell'assegnazione della classe 
function celleXDif (inputDifficulty, target) {
    if (inputDifficulty === 'easy') {
        assegnaClasse('cellEasy', target);

    } else if (inputDifficulty === 'medium') {
        assegnaClasse('cellMedium', target);

    } else assegnaClasse('cellHard', target);
}

    //faccio una funzione che quando il player schiaccia su una cella la aggiunge ad un array. quel valore aggiunto viene prima controllato e se gia' presente nell'array non viene nuovamente aggiunto.
    
function antiCheat (target, arrayName) {
    target.addEventListener('click', function(){

        if (controllore(arrayName, target) === false) {
            arrayName.push(target);
            target.removeEventListener('click', function() {
                target.classList.toggle(cssClass);
                console.log(htmlValue);
            })
        }    
    })

}


/*function wincon(containerBoard, celleSafe, gruppoBombe) {
    containerBoard.addEventListener('click', function(){
        if (celleSafe.length === (x - gruppoBombe.length)) {
        alert('Quanto cazzo sei forte')
    }})
}*/

// // Main  //

const containerBoard = document.querySelector('.board');
const start = document.getElementById('start');
      //aggiunte per bombe

let gruppoBombe = [];
let celleSafe = [];
let cellaEsplosa = [];
           //prove
//controllore(gruppoBombe, '4');
//fillArrayUnicCasual(16, 20, gruppoBombe);


//  Difficolta' //

const difficulty = document.getElementById('difSelect');

//Caselle spuntate

let punti = document.querySelector('span.punti');
containerBoard.addEventListener('click', function(){
    punti.innerText = celleSafe.length;
});




start.addEventListener('click', function (){

    
        //pulisco il board
    containerBoard.innerText = '';
        //pulisco gli array
    gruppoBombe = [];
    celleSafe = [];
    cellaEsplosa = [];
        //ottengo la difficolta' aka numero di celle totali
    const inputDifficulty = difficulty.value;
    let x = nCicli(inputDifficulty);

        //creo le posizioni con le bombe ma per ora non sono esistenti in html
    fillArrayUnicCasual(16, x, gruppoBombe);

        

    
    for (let i = 1; i <= x; i++) {

           //se i corrisponde ad un valore di gruppobombe gli assegno classe diversa altimenti tutto normale
        
        if (controllore(gruppoBombe, i) === true) {
            let cellaBomba = facTotum('div','cellaBomba', containerBoard, i);
            eviStampa(cellaBomba, 'explode', i);
            celleXDif(inputDifficulty, cellaBomba);
            //document.getElementsByClassName('cellabomba').classList.add('explode');
            cellaBomba.addEventListener('click', function(){
                const allBombe = document.querySelectorAll('.cellaBomba');
                allBombe.forEach((element) => {
                element.classList.add('explode');
              });
              alert(`Peccato, hai perso ma hai totalizzato ${celleSafe.length} punti!`);
            })
            
            

        } else {
            let cella = facTotum('div','cell', containerBoard, i);
            eviStampa(cella, 'highlight', i);
            celleXDif(inputDifficulty, cella);
            antiCheat(cella, celleSafe);
            
        }

        /*if (inputDifficulty === 'easy') {
            assegnaClasse('cellEasy', cella);

        } else if (inputDifficulty === 'medium') {
            assegnaClasse('cellMedium', cella);

        } else assegnaClasse('cellHard', cella);*/
        
    }
    
    containerBoard.addEventListener('click', function(){
        if (celleSafe.length === (x - gruppoBombe.length)) {
        alert('Quanto cazzo sei forte')
    }})

    //cellaEsplosa.addEventListener()


})






/*containerBoard.addEventListener('click', function(){
if (celleSafe.length === (x - gruppoBombe.length)) {
alert('Quanto cazzo sei forte')
}})*/




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











