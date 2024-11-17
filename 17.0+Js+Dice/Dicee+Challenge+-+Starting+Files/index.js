// document.querySelector("h1").innerHTML="Working"



function rollDice (){
    rndNum1 = Math.floor(Math.random()*6)+1
    rndNum2 = Math.floor(Math.random()*6)+1
    document.querySelector(".img1").src="./images/dice"+rndNum1+".png"
    document.querySelector(".img2").src="./images/dice"+rndNum2+".png"
    if(rndNum1>rndNum2){
        document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
    }
    else if(rndNum2>rndNum1){
        document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
    }
    else{
        document.querySelector("h1").innerHTML="It's a Draw! 🎌"      
    }

}
// rollDice();
