/*import '/style.css'*/

const form = document.querySelector("form");
const player = document.getElementById("name");

class Player {
  constructor(name, jugada, estado) {
    this.name = name;
    this.jugada = jugada;
    this.estado = estado;
  }
}
function createplayer() {
  const pl = player.value;
  console.log(pl);
  let player1 = new Player(pl, 0, "playing");
  console.log("creado jugador" + pl);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createplayer();
});
