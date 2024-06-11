// toggel menu class active
const navbarNav = document.querySelector(".navbar-nav");

//  ketika humberger menu di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar  untuk menghilangkan nav
const humberger = document.querySelector("#humberger-menu");
document.addEventListener('click', function(e){
    if (!humberger.contains(e.target)&&!navbarNav.contains(e.target)){
        navbarNav.classList.remove("active");
    }
})

// 

