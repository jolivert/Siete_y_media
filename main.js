/*import '/style.css'*/

const form = document.querySelector("form");
const player = document.getElementById("name");

class Player {
  constructor(name, jugada, estado) {
    this.name = name;
    this.jugada = jugada;
    this.estado = estado;
  }

  /*get jugada() {
    return this.jugada;
  }

  set jugada(valor) {
    this.jugada = valor;
  }*/
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(player.value);
  let player1 = new Player(player.value, 0, "playing");
  console.log(player1.jugada)
  player1.jugada = 6.5;
  console.log(player1.jugada);
});
