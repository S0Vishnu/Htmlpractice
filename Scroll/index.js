const video = document.querySelector('video');
//console.log(video);
const intro = document.querySelector('.intro');
const section = document.querySelector('section');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        duration: 30000,
        triggerElement: intro,
        triggerHook: 0
    }).addIndicators()
    .setPin(intro)
    .addTo(controller);
/*
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });


let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
});
*/

let scrollpos = 0;
scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    //console.log(e);
    //console.log(scrollpos);
});

let ac = 0.1;
let delay = 0;

setInterval(() => {
    delay += (scrollpos - delay) * ac;
    video.currentTime = scrollpos;
}, 41.7);