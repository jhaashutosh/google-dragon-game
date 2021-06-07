var character = document.getElementById("character");
var block = document.getElementById("block");

function start()
{
    block.classList.add("start");
}
function stop()
{
    block.classList.remove("start");

}

var c=false;
document.getElementById("startbtn").addEventListener("click",counter);

function counter()
{
    c=true;
}

var counter=0;
function jump(){
    if(character.classList != "animate")
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {

    
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    
        if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        //block.style.animation = "none";
        alert("Game Over. score: "+ Math.floor(counter/100));
        
        c=0;
        document.getElementById("scoreSpan").innerHTML = 0;   
        console.log(stop());
        // if(character.classList.contains("animate"));
        // {start();   }
        counter=0; 
        

    }
    else{
        if(c)
       { counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
       }
        
    }


}, 10);
