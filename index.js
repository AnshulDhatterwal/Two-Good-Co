function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()

function navAnimation() {
    gsap.to("#nav-part1 svg",{
        transform : "translateY(-100%)",
        scrollTrigger:{
            trigger : "#page1",
            scroller : "#main",
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })
    gsap.to("#nav-part2 .links",{
        transform : "translateY(-100%)",
        opacity : 0,
        scrollTrigger:{
            trigger : "#page1",
            scroller : "#main",
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })
}
navAnimation()
function videoconAnimation() {
    let videocon = document.querySelector("#videocontainer")
    let playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })

    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 80
        })
    })
}
videoconAnimation()

function loadingAinmation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    })
    gsap.from("#page1 #videocontainer", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.3,
    })
}
loadingAinmation()

function cursoranimation() {
    document.addEventListener("mousemove",function (dets) {
        gsap.to('#cursor',{
            left:dets.x,
            top:dets.y
        })
    })
    
    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%) scale(1)"
    })
        })
    })
    
    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: "translate(-50%,-50%) scale(0)"
    })
        })
    })
}

cursoranimation()



gsap.to('.loader .top',{
        height:'0vh',
        duration : 0.5,
        yoyo:true,
        repeat:-1,
        ease:'linear'
    })
    gsap.to('.loader .bottom',{
        height:'5vh',
        duration : 0.5,
        yoyo:true,
        repeat:-1,
        ease:'linear'
    })

window.addEventListener('load',function (e){
    gsap.to('.loader',{
        opacity:'0%',
        duration:2,
    })
console.log(e);

})