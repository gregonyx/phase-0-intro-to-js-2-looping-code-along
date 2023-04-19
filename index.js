const names = ["Dave", "Frank", "Chris"];
const event = "Wedding";

function writeCards(names, event){
    let messages = [];
    for(let i = 0; i < names.length; i++ ){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

let cards = writeCards(names, event);
console.log(cards);

function countDown(){
    let i = 10;
    while (i >= 0){
      console.log(i);
      i--
    }
  }
  countDown();