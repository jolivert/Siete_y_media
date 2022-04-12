class mazo{
    constructor(){
        let numbers=[1,2,3,4,5,6,7,10,11,12]
        let palos=['oros','bastos','espadas','copas']
        let baraja=[]
        for(let i=0; i<palos.length;i++){
            for(let j=0; j<numbers.length;j++){
                
                baraja.push({numero:numbers[j],palo: palos[i]})
            }
        }
    }
        /*console.log(baraja.length)
        let orden= Math.floor(Math.random()*(40-1)+1)
        console.log(orden)*/

        newcard(baraja){
            alea=Math.floor(Math.random()*(baraja.length-1)+1)
            card=baraja[alea]
            delete baraja[alea]
            return(card)
        }
    
    }


let baraja=new mazo()
carta=baraja.newcard()

console.log(carta)