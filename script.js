class Traveler {
     constructor(name) {
          this._name = name
          this._food = 1
          this._ishealth = true
     }


     hunt() {
          this._food += 2
     }

     eat() {

          if(this._food > 0) {
               this._food -= 1
          } else {
               this._ishealth = false
          }

     }

     set food(newfood) {
          if(Number.isInteger(newfood)){
               this._food = newfood
          }
     }

     get food() {
          return this._food
     }

     get name() {
          return this._name
     }

     get ishealth(){
          return this._ishealth
     }

}



class Wagon {
     constructor(capacity) {
          this._capacity = capacity
          this._passengerList = []
     }

     getAvailableSeatCount() {
          
          let avaliableSlot = this._capacity - this._passengerList.length
          return avaliableSlot

     }

     join(traveler) {

          if(this._passengerList.length < this._capacity) {
               this._passengerList.push(traveler)
          }

     }

     shouldQuarantine() {

          for(let counter = 0; counter < this._passengerList.length; counter ++) {
               if(this._passengerList[counter]._ishealth === false) {
                    return false
               } else {
                    return true
               }
          }

     }

     totalFood() {

          let food = 0
          for(let counter = 0; counter < this._passengerList.length; counter++ ) {
               food += this._passengerList[counter]._food
          }
          return food

     }

     get capacity() {
          return this._capacity
     }

     get passengerList() {
          return this._passengerList
     }
}



// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);