import React from 'react';

function myFunction() {
    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;
    let a = window.matchMedia("(max-width: 319px)");
    let b = window.matchMedia("(max-width: 360px)");
    let c = window.matchMedia("(max-width: 425px)");
    let d = window.matchMedia("(max-width: 768px)");
    let e = window.matchMedia("(max-width: 1024px)");
    let f = window.matchMedia("(max-width: 1330px)");
    let g = window.matchMedia("(max-width: 1440px)");
    let h = window.matchMedia("(max-width: 2560px)");

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("position-fixed");
        navbar.classList.remove("align-self-end");  
    }
    if (window.pageYOffset <= 427 && a.matches) {
        navbar.classList.add("align-self-end");
        navbar.classList.remove("position-fixed");
        return
    }
    if (window.pageYOffset <= 529 && b.matches) {
        navbar.classList.add("align-self-end");
        navbar.classList.remove("position-fixed");
        return
    }
    if (window.pageYOffset <= 425 && c.matches) {
        navbar.classList.add("align-self-end");
        navbar.classList.remove("position-fixed");
        return
    }
    if (window.pageYOffset <= 471 && d.matches || window.pageYOffset <= 471 && e.matches ) {
        navbar.classList.add("align-self-end");
        navbar.classList.remove("position-fixed");
        return
    }
    if (window.pageYOffset <= 455 && f.matches) {
        navbar.classList.add("align-self-end");
        navbar.classList.remove("position-fixed");
        return
    } 
    if (window.pageYOffset <= 542 && g.matches) {
        navbar.classList.add("align-self-end");
        navbar.classList.remove("position-fixed");
        return
    } 
    console.log(sticky);
    console.log(f.matches);
    
    
}

export default myFunction;
