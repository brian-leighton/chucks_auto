let nav = document.querySelector('.nav'),
toggleNavBtn = document.querySelector('.btn__toggle--nav');

const toggleClass = (className, element) => {
    if(element.classList.contains(className)){return element.classList.remove(className);}
    return element.classList.add(className);
} 

let showHamburger = false;

const toggleHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    if(showHamburger){
        console.log(showHamburger);
        hamburger.classList.remove("rotate");
        showHamburger = !showHamburger;
    } else {
        hamburger.classList.add("rotate");
        showHamburger = !showHamburger;
    }

}

window.onload = () => {
    toggleNavBtn.addEventListener('click', () => {
        toggleClass("show", nav);
        toggleHamburger();
    });
}