/**
 * 2C = Two of Clubs 
 * 2D = Two of Diaminds 
 * 2H = Two of Hearts 
 * 2S = Two of Spades 
 */

let deck            = [];
const tipos         = ['C','D','H','S'];
const especiales    = ['A','J','Q','K'];

let puntosJugador = 0;
    puntosComputadora = 0;


// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');


// Esta función crea un nuevo deck
const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ){
        for (  let tipo of tipos ){
            deck.push(i + tipo);
        }
    }

    for( let tipo of tipos ){
        for( let especial of especiales ){
            deck.push(especial + tipo)
        }
    }

    // console.log( deck );
    deck = _.shuffle( deck )
    console.log( deck );
    return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0 ){
        throw 'No hay cartas en el Deck';
    }
    const carta = deck.pop();
    return carta;
}



// pedirCarta();
const valorCarta =( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN (valor)) ?
            ( valor === 'A') ? 11 : 10
            : valor * 1;
}

// Eventos

btnPedir.addEventListener('click', () => {

const carta = pedirCarta();

puntosJugador = puntosJugador + valorCarta( carta );
puntosHTML[0].innerText = puntosJugador;

//<img class="carta" src="/assets/cartas/2C.png">

const imgCarta = document.createElement('img');
// imgCarta.src = `assets/cartas/${carta}.png`;
imgCarta.src = `assets/cartas/${carta}.png`;
divCartasJugador.append(imgCarta);

});
