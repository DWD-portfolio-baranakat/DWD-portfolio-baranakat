let rocket = document.getElementById('rocket');
let sky = document.getElementById('sky');
let asteroid1 = document.getElementById('asteroid1');
let asteroid2 = document.getElementById('asteroid2');
let asteroid3 = document.getElementById('asteroid3');
let moveHorizontal = 0;
let skyInfo = sky.getBoundingClientRect();
let maxwidth = skyInfo.width;
let maxheight = skyInfo.height;


function move(x) {
    if (x.keyCode==39) {
        moveHorizontal+=6
        rocket.style.left=moveHorizontal + 'px';
        if (moveHorizontal>=maxwidth-20){
            moveHorizontal -=6;
        }    
    }
    if (x.keyCode == 37) {
        moveHorizontal -= 6
        rocket.style.left = moveHorizontal + 'px';
        if (moveHorizontal <= 0){
            moveHorizontal  += 6;
        }  
    }

}
document.onkeydown=move;

function gameover(){
    if (isCollide(rocket,asteroid1)){
        Text("Game Over", 0.4*maxwidth,0.4*maxheight);
    }
    
    
    
}
// code van https://stackoverflow.com/questions/2440377/javascript-collision-detection/7301852
function isCollide(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

