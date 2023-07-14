function display
(num){
    display.value+=num;
}

// remove last number
function removeLast(){
    currentExp=box.value;
    box.value=currentExp.slice(0,-1)

}
// adding audio
const audio=new Audio();
audio.src="./"


//adding functions as inline 