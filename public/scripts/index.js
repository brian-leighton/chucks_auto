let nav = document.querySelector('.nav'),
    navList = document.querySelector('.nav-list'),
    toggleNavBtn = document.querySelector('.btn__toggle--nav'),
    hamburger = document.querySelector(".hamburger");

const toggleClass = (className, element) => {
    if(element.classList.contains(className)){return element.classList.remove(className);}
    return element.classList.add(className);
} 

let showHamburger = false;

const toggleHamburger = () => {
    if(showHamburger){
        console.log(showHamburger);
        toggleClass('rotate', hamburger);
        return showHamburger = !showHamburger;
    }
        toggleClass('rotate', hamburger);
        showHamburger = !showHamburger;
        return;
}

const toggleMobileMenu = () => {
      toggleClass("show", nav);
      toggleClass("u-opacity-1", navList);
      toggleClass("move-up", toggleNavBtn);
      toggleHamburger();
}
window.onload = () => {
    toggleNavBtn.addEventListener('click', () => {
        toggleMobileMenu();
    });

    window.addEventListener("resize", () => {
        //resets menu if the screen exceeds 448px(28em)
        if(window.innerWidth >= 448){
            nav.classList.remove("show");
            navList.classList.remove("u-opacity-1");
            hamburger.classList.remove("rotate");
            showHamburger = false;
        }
    });
}