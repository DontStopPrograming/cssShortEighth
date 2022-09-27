 function move(){
    let face = Math.floor(Math.random()* 6) + 1
    if(face == 1){
        document.getElementById("cube").src= "./img/1.png"
    } else if(face == 2){    
        document.getElementById("cube").src= "./img/2.png"
    } else if(face == 3){    
        document.getElementById("cube").src= "./img/3.png"
    } else if(face == 4){
        document.getElementById("cube").src= "./img/4.png"
    } else if(face == 5){
        document.getElementById("cube").src= "./img/5.png"
    } else if(face == 6){
        document.getElementById("cube").src= "./img/6.png"
        }
    }
