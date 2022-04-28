
let seki = document.querySelector("#seki");
let toplar = document.querySelector('#top');
let xal = document.querySelector('#xal');
let sekiX = 0;
let topX = 0;
let topY = 0;
let dx = 6;
let dy = 5;
let point=0



let set =  setInterval(move,40)
onkeydown = barMove;
xal.innerHTML = `Sizin Xal: ${point}`;




function barMove(e){
    if(e.keyCode == 39 && sekiX<500){
            sekiX +=25;
    }

    if(e.keyCode == 37 && sekiX>0){      
            sekiX -=25;  
    }
    seki.style.left = sekiX +'px';
}




function move() {

    if (topX < 0 || topX > 560) {
        dx *= -1;
    }
    if (topY < 0) {


        dy *= -1;
    }

    else if (topY > 560 && topX >= sekiX - 35 && topX <= sekiX + 120) {
        // dy++;
        // dx++;
        dy *= -1;
        point++;
        xal.innerHTML = `Sizin Xal: ${point}`;
        console.log(point);
        // ball.style.backgroundColor = rndColor();
        // bar.style.backgroundColor = rndColor();
        // document.getElementById('general').style.borderColor = rndColor();
    }


    else if (topY > 560) {
        document.body.innerHTML =`Uduzdunuz : <br/> Sizin Neticeniz ${point} bal <br/>
        Yeniden oyuna baslamaq isteyirsiniz? <button onclick="Begin()"> Basla </button>`;

        clearInterval(set);
    }
    


    topX += dx;
    topY += dy;
    toplar.style.left = topX + 'px';
    toplar.style.top = topY + 'px';
}
function Begin(){
   
    let set =  setInterval(move,40)
onkeydown = barMove;
xal.innerHTML = `Sizin Xal: ${point}`;
}