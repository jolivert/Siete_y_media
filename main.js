/*Módulo ES importado desde mazo.js. He creado una función que a partir de un array con todas las cartas que queden en el mazo
devuelve una carta aleatoria y devuelve un nuevo mazo sin la carta extraida. De esta forma simulo que se ha barajado*/
import { get_carta } from "./mazo.js";

/*Creación de constructor para la clase Player con carcaterísticas nombre, jugada(juarda la puntuación de la jugada actual) y 
estado (jugando, se ha pasado, gana). Se crean dos métdos uno get para devolver su jugada actual y una set para actualizar su 
jugada */
class Player {
  constructor(name, jugada, estado) {
    this.name = name;
    this.jugada = jugada;
    this.estado = estado;
  }

  get jugada() {
    return this.jugada;
  }

  set jugada(valor) {
    this.jugada = valor;
  }
}

/*Creo un array con todas las cartas.En principio pensé en crear un constructor pero al ser siempre la misma no creo que sea necesario*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
let palos = ["oros", "bastos", "espadas", "copas"];
let baraja = [];
for (let i = 0; i < palos.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    baraja.push({ numero: numbers[j], palo: palos[i] });
  }
}

/*Prueba para ver que devuelve correctamente una crata aleatoria y el mazo sin la xcarta extraida*/
/*let a = get_carta(baraja);
console.log(a.carta);
console.log(a.nuevo_mazo);*/

const lista_carta = document.getElementById("carta");
const new_card = document.getElementById("p1");
console.log(lista_carta);

lista_carta.addEventListener("click", (event) => {
  event.preventDefault();
  let nc = get_carta(baraja);

  let numero = nc.carta.numero;
  let palo = nc.carta.palo;
  const li = document.createElement("li");
  li.textContent = numero + " "+palo;
  console.log(li);
  new_card.appendChild(li);
  baraja = nc.nuevo_mazo;
});

/*
const form = document.querySelector("form");
const player = document.getElementById("name");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(player.value);
  let player1 = new Player(player.value, 0, "playing");
  console.log(player1.jugada)
  player1.jugada = 6.5;
  console.log(player1.jugada);
});*/
