$('body').append('<button id="gen-die">Generate Die</button>');
$('body').append('<button id="roll-dice">Roll Dice</button>');
$('body').append('<button id="sum-dice">Sum Dice</button>');


$('#gen-die').click(function () {
    new Die;
})


let diceArr = [];
let redoCount = 0;

$('#roll-dice').click(function () {
    let tempVal = diceArr.length - redoCount;
    diceArr = [];
    $('div').remove();
    $('p').remove();
    for (let i = 0; i < tempVal; i++) {
        new Die;
    }
})

$('#sum-dice').click(function () {
    let sum = 0;
    for (let i = 0; i < diceArr.length; i++) {
        sum += diceArr[i];
    }
    alert(sum);
})



let count = 0;


class Die {
    constructor() {
        this.value = this.roll();
        this.div = $('body').append('<div></div>');

        $(this.div).append(`<p class="${this.value}" id = "${count}">${this.value}</p>`)
        $(`.${this.value}`).css({
            'position': 'relative',
            'float': 'left',
            'margin-left': '40px',
            'background-color': 'red',
            'height': '70px',
            'width': '70px',
            'text-align': 'center',
            'top-margin': '20px'
        });
        diceArr.push(this.value);
        count++;
        console.log(count);

    }

    roll() {
        let tempNum = Math.floor(Math.random() * 6);
        return tempNum + 1;


    }


}

///// ///// ///// ///// /////