let container = document.querySelector(".moving-bg");
let layer = document.querySelectorAll(".layer");
let circles = document.querySelectorAll(".fff")




//--------------------------------------------------------------------------------------------
// shaking images
window.addEventListener("mousemove", (e) => {
    circles.forEach(circle => {
        // Generate random values for horizontal and vertical translation
    let randomHorizontal = Math.random() * 10 - 5; // Adjust the range as needed
    let randomVertical = Math.random() * 10 - 5; // Adjust the range as needed

    // Apply the random translation
    circle.style.transform = `translate(${randomHorizontal}px, ${randomVertical}px)`;
    });
});
//---------------------------------------------------------------------------------------------






//--------------------------------------------------------------------------------------------
// automatic slider

container.onmousemove = function(e){
    // console.log(e.pageX, e.pageY);
    let X = e.pageX;
    let Y = e.pageY;

    layer[0].style.transform = 'translate(' + X/100 + 'px, ' + Y/100 + 'px)';
    layer[1].style.transform = 'translate(' + X/100*2 + 'px, ' + Y/100*2 + 'px)';
    layer[2].style.transform = 'translate(' + X/100*4 + 'px, ' + Y/100*4 + 'px)';
    layer[3].style.transform = 'translate(' + X/100*6 + 'px, ' + Y/100*6 + 'px)';
    layer[4].style.transform = 'translate(' + X/100*8 + 'px, ' + Y/100*8 + 'px)';
    layer[5].style.transform = 'translate(' + X/100*10 + 'px, ' + Y/100*10 + 'px)';
    layer[6].style.transform = 'translate(' + X/100*12 + 'px, ' + Y/100*12 + 'px)';
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
    // koi slide beech m nhi rukegi when slected by mouse
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
//---------------------------------------------------------------------------------------------








//--------------------------------------------------------------------------------------------
// body transitions

const aboutUsSection = document.querySelector('.xx');
const yy = document.querySelector('.yy');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    if (isInViewport(aboutUsSection)) {
        // Add the visible class when the section is in the viewport
        aboutUsSection.classList.add('visible');
        yy.classList.add('visible');
    } 
}

// Add a scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the initial check on page load
handleScroll();
//----------------------------------------------------------------------------------------------

