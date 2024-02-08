

// moves the wand on mouse move but with a bit of delay
window.onmousemove = e => {
    wand.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, {duration: 400, fill: "forwards"});
}


// the wand extends at the end of the containers, 
// so it does not stop at either of the edges
// so we need to make the wand  move further than our mouse can

// we take 30% further than our mouse
// adjust this 30% to both start and end at 15% each
const wandX = (windowWidth * -0.15) + mouseX * 1.3



// wand vertical motion
// goes from 10% at top to 50%, not more than that
// we need it to go down by max 50% so we use a 
// multiplier of 0.4 (40%) on mouseY
const wandY = (windowWidth * 0.1) + mouseY * 0.4



/*

wand has some sort of rotational motion as well
somewhat like -> -10deg, -7deg, -4deg, -1deg, 3deg, 8deg, 10deg

we can use the mouse's horizontal position to calculate the angle

we can figure out where the mouse currently is by mouseX / windowWidth
this will give us what percentage of the screen we are currently at,
which we can then multiply with 20 (as our range is from -10deg to 10deg)
to give us what percentage to the total rotational range(20deg) we are currently at

-10deg is the intial tilt

window.onmousemove = e => {
    wand.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`                                                 */
        const mouseXAsDecimal = mouseX / windowWidth;
        rotate: `${-10 + (20 * mouseXAsDecimal)}deg`                          /*
    }, {duration: 400, fill: "forwards"});
}

*/
