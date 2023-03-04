Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.


RISOLUZIONE:

1-In html creo un bottone che andro' ad utilizzare su js in modo che quando viene schiacciato parte un ciclo for che produrra' 100 caselle numerate.
2-per fare in modo che tutto agisca nel modo corretto creo una var che sara' il contenitore e che esiste gia' su html.
3-poi creo una funzione con la quale posso creare ul elemento html, darle una classe, appenderla al contenitore e numerarla.
4-creo quindi infine una condizione: se il bottone viene premuto si inneschera' il ciclo di for che usando le funzioni al suo interno produrra', numerera', dara' una classe e appendera' 100 caselle al container html.
5-creo una funzione che fa comparire un messaggio in console e colora di azzurro la cella quando viene premuta e la richiamo con un addeventlistener.