export const get_carta = (baraja) => {
  let alea = Math.floor(Math.random() * (baraja.length - 1) + 1);
  let mazo = [];
  mazo = baraja;
  let carta = mazo[alea];
  ///Slice y splice no funcionan como esperaba. Splice me devuelva las eliminadas y no las restantes por eso lo hago en dos pasos. Ineficiente pero no 
  /// sé como mejorarlo
  let nuevo_mazo = mazo.slice(0, alea);
  let nuevo_mazo_aux = mazo.slice(alea + 1, mazo.length);
  nuevo_mazo = nuevo_mazo.concat(nuevo_mazo_aux);

  return { carta, nuevo_mazo };
};
