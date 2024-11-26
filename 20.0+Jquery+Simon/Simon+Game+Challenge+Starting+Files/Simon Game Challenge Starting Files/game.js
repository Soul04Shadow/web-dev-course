// alert("working")
buttonColours=["green","red","yellow","blue"]
gamePattern=[];
userClickedPattern=[]
level = 0
started = false;
$(document).keypress(function(){
    if(!started){
    nextSequence();
    }
})

$("div .btn").attr("type","button").click(function(){
    userChosenColour=this.id
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkPlay(userClickedPattern.length-1)
})

function nextSequence(){
    level++
    started=true;
    $("#level-title").text("Level "+level)
    randomNum=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNum];
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour);
}


function playSound(name){
    var buttonAudio = new Audio("./sounds/"+name+".mp3")
    buttonAudio.play();
}
function animatePress(name){
    $("#"+name).addClass("pressed")
    setTimeout(function(){
        $("#"+name).removeClass("pressed")
    },100)
}

function checkPlay(currentLvl){
    console.log(currentLvl)
    if(userClickedPattern[currentLvl]==gamePattern[currentLvl]){
        // console.log("success")
        if(currentLvl==level-1){
            // count=0;
            setTimeout(function(){
                nextSequence();
            },1000)
            userClickedPattern=[];
    }
}
    else{
        var gameAudio = new Audio("./sounds/wrong.mp3")
        $("#level-title").text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over")
        gameAudio.play()
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)
        // console.log(gamePattern)
        level = 0
        started = false;
        gamePattern=[];
        userClickedPattern=[];
        // console.log(userClickedPattern)
        // alert("End")
    }
}