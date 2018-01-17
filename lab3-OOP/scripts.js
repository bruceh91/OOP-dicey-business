$('body').append('<button id="gen-die">Generate Die</button>');
$('body').append('<button id="roll-dice">Roll Dice</button>');


$('#gen-die').click(function (){
    new Die;
})


let diceArr = [];

$('#roll-dice').click(function (){
    let tempVal = diceArr.length;
    diceArr = [];
    $('div').remove();
    $('p').remove();
    for (let i = 0; i < tempVal; i++){
        new Die;
    }
    
})




class Die {
    constructor (){
        this.value = this.roll();
        this.div = $('body').append('<div></div>');
        
        $(this.div).append(`<p class="num">${this.value}</p>`)
        $('.num').css({
            'position':'relative',
            'float':'left',
            'margin-left':'40px',
            'background-color':'red',
            'height':'70px',
            'width':'70px',
            'text-align':'center',
            'top-margin':'20px'
        });
        diceArr.push(this.value);
    }

    roll() {
        let tempNum =  Math.floor(Math.random()*6);
        return tempNum + 1;
        
    }
}