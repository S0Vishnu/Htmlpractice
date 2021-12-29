const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

var lastScrollTop = 0
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || this.document
        .documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"
    } else {
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop;
})
