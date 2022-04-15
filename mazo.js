 
export const get_carta=(baraja)=> {
    
    let alea=Math.floor(Math.random()*(baraja.length-1)+1);
    console.log(alea);
    let mazo =[]; 
    mazo=baraja
    let  carta=mazo[alea];
    console.log(carta);
    let nuevo_mazo=mazo.slice(0,alea);
    let nuevo_mazo_aux= mazo.slice(alea+1, mazo.length);
    nuevo_mazo=nuevo_mazo.concat(nuevo_mazo_aux);

    console.log(nuevo_mazo);
    return {carta,nuevo_mazo};

}
     
    




