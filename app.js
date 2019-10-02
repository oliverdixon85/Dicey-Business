class Die {
    constructor(){
        this.roll();
        this.div = $('<div class="die"></div>');
        this.div.text(this.value);
        $('#dice-container').append(this.div);
        this.div.click(() => {
           this.reroll();
        });
        this.div.dblclick(() => {
            this.div.remove();
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

let dice = []; 

$('#add').click(() => {
    let die = new Die();
    dice.push(die);
}
)

$('#reroll').click(() => {
    for(i = 0; i < dice.length; i++){
        dice[i].reroll();
    }
})

$('#sum').click(() => {
    let sum = 0;
    for(let die of dice){
        sum += die.value;
    }
    alert(sum)
})


