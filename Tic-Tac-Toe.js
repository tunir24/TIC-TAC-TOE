let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let newgame = document.querySelector(".NEW");
let RES = document.querySelector(".RESET");
const winpattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnX = true ;
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
    if(turnX===true){
        box.innerText="X";
        turnX=false;
    }
    else {
        box.innerText="O"
        turnX=true;
    }
    box.disabled=true;
    checkwinner();
})
})
const checkwinner = () =>{
for (let pattern of winpattern){
    val1 = boxes[pattern[0]].innerText;
    val2 = boxes[pattern[1]].innerText;
    val3 = boxes[pattern[2]].innerText;
    if (val1!=""&&val2!=""&&val3!=""){
        if(val1===val2 && val2===val3){
            msg.innerText = `${val1} is winner`;
            disable();
        }
    }
}
}
const disable = () =>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enable = () =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const reset = () =>{
    turnX = true;
    enable();
    msg.innerText="Winner is not decided yet"
}
newgame.addEventListener("click",reset);
RES.addEventListener("click",reset);