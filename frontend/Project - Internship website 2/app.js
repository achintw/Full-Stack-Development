// slider

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
let num = document.querySelector(".numero");
let b1 = document.querySelector(".uno");
let b2 = document.querySelector(".duos");


var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slide) => {
        slide.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");


}

let flag = 0;
btns.forEach((btn, i) => {
    btn.addEventListener('click', ()=>{
        sliderNav(i)
    });
});  


b1.addEventListener('click', ()=>{
    num.innerHTML = "01/2";
})

b2.addEventListener('click', ()=>{
    num.innerHTML = "02/2";
})
// slider ends










const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#000000",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
  circle.style.opacity = 1;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 

  // recursive implementation, to conter the circles not merging when we exit the screen
  requestAnimationFrame(animateCircles);
}

animateCircles();




//----------------------------------------------------------------------------------------------
// text animation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let isAnimationRunning = false;

function startAnimation(element) {
    if (!isAnimationRunning) {
        isAnimationRunning = true;

        let iteration = 0;
        let interval;

        clearInterval(interval);

        interval = setInterval(() => {
            element.innerText = element.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return element.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= element.dataset.value.length) {
                clearInterval(interval);
                isAnimationRunning = false; // Reset the flag when animation is complete
            }

            iteration += 1 / 3;
        }, 30);
    }
}

document.querySelectorAll(".text-animations").forEach((element) => {
    element.addEventListener('mouseover', () => {
        startAnimation(element);
    });
});



//---------------------------------------------------------------------------------------------
let r1 = document.querySelector(".right-img1");
let l2 = document.querySelector(".left-img2");
let r2 = document.querySelector(".right-img2");
let l1 = document.querySelector(".left-img1");
let l3 = document.querySelector(".left-img3");
let l4 = document.querySelector(".left-img4");
let r3 = document.querySelector(".right-img3");
let r4 = document.querySelector(".right-img4");
let section1 = document.querySelector(".scroll-image-section");
let l = document.querySelector(".left-images");
let r = document.querySelector(".right-images");
let nju = document.querySelector(".center-text");


const options = { 
    threshold: 0.5
};

let obs = 0;
const observer = new IntersectionObserver(function(enteries, observer){
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            obs = 1;
        } else{
            obs = 0;
        }
        console.log(entry);
    })
}, options);

observer.observe(section1);



window.addEventListener('scroll', function(){
    if(obs===1){
        l.classList.add("active");
        r.classList.add('active');
    }
})

window.addEventListener('scroll', function(){
    
    if(obs === 1){
        nju.classList.remove("active2")
        nju.classList.add("active");
       
    } else{
        console.log("Removing class");
        nju.classList.add("active2");
    }

})



const options2 = { 
    threshold: 1
};


let obs2 = 0;
let section2 = document.querySelector(".gray");
const observer2 = new IntersectionObserver(function(enteries, observer){
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            obs2 = 1;
        } else{
            obs2 = 0;
        }
        console.log(entry);
    })
}, options2);

observer2.observe(section2);


let giant = document.querySelector(".giant-img");
let txt = document.querySelector(".name");
window.addEventListener('scroll', function(){
    
    if(obs2 === 1){
       giant.classList.add("active");
       txt.classList.add("active");
    } 

})


let child = document.querySelectorAll(".ch");

child.forEach(ch => {
    ch.addEventListener('click', () => {
        giant.classList.add("active");
        txt.classList.add("active");
    });
});


let xx = document.querySelector(".xx");
xx.addEventListener('click', ()=>{
    giant.classList.add("active");
    txt.classList.add("active");
})




// docker code 
let docker = document.querySelector(".docker");
let right = document.querySelector(".docker-right img");
let left = document.querySelector(".docker-left img");
let obs3 = 0;

const options3 = { 
    threshold: 0.3
};

const observer3 = new IntersectionObserver(function(enteries, observer){
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            obs3 = 1;
        } else{
            obs3 = 0;
        }
        console.log(entry);
    })
}, options3);

observer3.observe(docker);

window.addEventListener('scroll', ()=>{
    if(obs3===1){
        right.classList.add("active");
        left.classList.add("active");
    }
})






// magic section js

const wand = document.getElementById("wand");
const tiles = document.querySelectorAll(".tile");

const xy = (x, y) => ({ x, y }),
      px = value => `${value}px`,
      deg = value => `${value}deg`,
      clamp = (value, min, max) => Math.max(Math.min(value, max), min);

const updateMouse = (mouseX, mouseY) => {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  
  const mouse = {
    position: xy(mouseX, mouseY),
    decimal: xy(mouseX / windowWidth, mouseY / windowHeight),
    multiplier: xy(1.3, 0.4),
    offset: xy(windowWidth * -0.15, windowHeight * 0.1),
    modifiedPosition: xy(0, 0)
  }
  
  mouse.modifiedPosition.x = mouse.position.x * mouse.multiplier.x + mouse.offset.x;  
  mouse.modifiedPosition.y = mouse.position.y * mouse.multiplier.y + mouse.offset.y;  
  
  return mouse;
}

const revealImages = mouseX => {
  for(const tile of tiles) {
    const dimensions = tile.getBoundingClientRect(),
          relativeMouseX = mouseX - dimensions.left,
          mouseXAsDecimal = clamp(relativeMouseX / dimensions.width, 0, 1);
    
    const opacity = mouseXAsDecimal,
          blur = 1 - mouseXAsDecimal;
    
    tile.style.setProperty("--opacity", opacity);
    tile.style.setProperty("--blur", blur);
  }
}

const getWandStyles = mouse => ({
  left: px(mouse.modifiedPosition.x),
  top: px(mouse.modifiedPosition.y),
  rotate: deg(mouse.decimal.x * 20 - 10)
});

window.onmousemove = e => {
  const mouse = updateMouse(e.clientX, e.clientY),  
        wandStyles = getWandStyles(mouse);
  
  wand.animate(wandStyles, { duration: 400, fill: "forwards" });
  
  revealImages(mouse.modifiedPosition.x);
}




// about us slider
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove('active');
    });
    
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i);
    });
});



// about us effect
let para = document.querySelector(".para");
let secy = document.querySelector(".main-container")
let obs4 = 0;

const options4 = { 
    threshold: 0.3
};

const observer4 = new IntersectionObserver(function(enteries, observer){
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            obs4 = 1;
        } else {
            obs4 = 0;
        }
        console.log(entry);
    })
}, options4);

observer4.observe(secy);

window.addEventListener('scroll', () => {
    if (obs4 === 1) {
        para.classList.add("active");
    }
});




