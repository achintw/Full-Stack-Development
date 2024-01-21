// selecting elements from the html base
let h1 = document.querySelector(".xxy");
let h2 = document.querySelector(".xxxy");
let h3 = document.querySelectorAll(".ww");
let h4 = document.querySelector(".wrw");
let h5 = document.querySelector(".wee");
let h6 = document.querySelector(".welp");

// basic one button color change code
let flag = 0
h1.addEventListener("click", function(){
    if(flag==0){ 
        h1.style.backgroundColor = "red";
        flag = 1;
    } else{
        h1.style.backgroundColor = "#2294ed";
        flag = 0;
    }
    
});

// multiple color change code
let xx = 0
h2.addEventListener("click", function(){
    if(xx===0){
        h3.forEach((e)=>{
            e.style.backgroundColor = "red";
        });
        xx=1;
    } else{
        h3.forEach((e)=>{
            e.style.backgroundColor = "white";
        });
        xx = 0;
    }
});

// row reversal code
let yy=0;
h4.addEventListener("click", function(){
    if(yy===0){
        h5.style.flexDirection = "row-reverse";
        h6.style.flexDirection = "row-reverse";
        yy = 1;
    } else{
        h5.style.flexDirection = "row";
        h6.style.flexDirection = "row";
        yy = 0;
    }
    
});