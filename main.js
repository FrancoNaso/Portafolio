

(() => {

    const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") &&
            window.innerWidth <= mediaSize) {
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            if (menuItemHasChildren.classList.contains("active")) {
                collapseSubMenu();
            }
            else {
                if (navMenu.querySelector(".menu-item-has-children.active")) {
                    collapseSubMenu();
                }
                menuItemHasChildren.classList.add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    });
    function collapseSubMenu() {
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
            .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
            .classList.remove("active");
    }
    function resizeFix() {
        if (navMenu.classList.contains("open")) {
            toggleNav();
        }
        if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
        }
    }

    window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    });

})();


const typed = new Typed(".typed",{
    strings:[
        "HTML",
        "CSS",
        "JS",
        "SASS",
        "BOOSTRAP",
        "PHP",
        "MySql",
        "Git"
    ],
    stringsElements:"#cadenas-texto",
    typeSpeed:75,
    startDelay:300,
    backSpeed:75,
    smartBackspace:true,
    shuffle:false,
    backDelay:1500,
    loop:true,
    loopCount:false,
    showCursor:false,
    contentType:"html"


    


});

AOS.init();

const checkpoint = 300;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".front").style.opacity = opacity;
});



const btnMode = document.querySelector(".sunMoon");
const cambiantes = document.querySelectorAll(".cambiante");
btnMode.addEventListener("click",()=>{

    if(btnMode.style.transform === "translateX(0px)"){
        btnMode.style.transform = "translateX(35px)";
        btnMode.innerHTML='<i class="bi bi-moon-fill"></i>'
    }else{
        btnMode.style.transform = "translateX(0px)";
        btnMode.innerHTML='<i class="bi bi-brightness-high-fill"></i>'
    }


    cambiantes.forEach(cambiante=>{

cambiante.classList.toggle("darkMode");





})

})