export const calc_jugada = (jugada, nueva_carta) => {
  let nueva_jugada = 0;
  if (nueva_carta < 10) {
    nueva_jugada = jugada + nueva_carta;
  } else {
    nueva_jugada = jugada + 0.5;
  }

  console.log(nueva_jugada);
  let estado = "playing";
  if (nueva_jugada > 7.5) {
    estado = "Te pasaste";
  }

  return { nueva_jugada, estado };
};
