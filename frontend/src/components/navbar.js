import React from 'react';

function myFunction() {
    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;
    
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("position-fixed");
        navbar.classList.remove("align-self-end");  
    }
    if (window.pageYOffset <= 441) {
        navbar.classList.add("align-self-end");
        navbar.classList.remove("position-fixed");
    }
}

export default myFunction;
