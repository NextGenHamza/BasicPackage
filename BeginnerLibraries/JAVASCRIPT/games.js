function RockPaperScissor(){
    let player;
    let computer;
    let result;
    computer=Math.random();
    if (computer<1/3){
        result='Rock';
    } else if(computer<2/3){
        result='Paper';
    }else{
        result='Scissors';
    }

    if(result===player){


    } else if((player=='Rock' && result=='Scissors')||(player=='Scissors'&& result=='Paper')|| (player=='Paper'&& result=='Rock') ){

    } else{

    }

}
