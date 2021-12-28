function init() {
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => preloader.classList.add('preloader-finish'), 2000);
    })
}
init();