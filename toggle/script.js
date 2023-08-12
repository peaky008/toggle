let button = document.querySelector(".toggle");
let divRed = document.querySelector(".red");
    divRed.style.zIndex = 0;
button.addEventListener("click",function(){
    if(divRed.style.zIndex == 0){
        divRed.style.zIndex = 2
    }else{
        divRed.style.zIndex = 0
    }
})