class Die {
    constructor(){
        this.roll();
        this.div = $('<div class="die"></div>');
        this.div.text(this.value);
         //jQuery appending of created div (Die)
        $('#dice-container').append(this.div);
        this.div.click(() => {
           this.reroll();
        });
        this.div.dblclick(() => {
            this.div.remove();
            //up to this point the die is removed but the value is still in memory and will continue to affect sum
            //the splice method will take the index number and remove from memory.
            let i = dice.indexOf(this);
            dice.splice(i, 1);
        })
    }

    reroll(){
        this.roll();
        this.div.text(this.value);
    }

    roll(){
        this.value = Math.floor(Math.random() * 6) + 1;
    }

}

//this is the array in which all of the dice will be place once button is clicked
let dice = []; 

$('#add').click(() => {
    let die = new Die();
    dice.push(die);
}
)

//for the reroll button, it has to go through a for loop in order to reroll all dice
$('#reroll').click(() => {
    for(i = 0; i < dice.length; i++){
        dice[i].reroll();
    }
})

$('#sum').click(() => {
//starting with 0 the sum will add each die
    let sum = 0;
//short hand syntax for a for loop, automatically does the i = 0...blah blah blah
    for(let die of dice){
        sum += die.value;
    }
    alert(sum)
})


