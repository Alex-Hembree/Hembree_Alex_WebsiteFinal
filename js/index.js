gsap.registerPlugin(ScrollTrigger)

gsap.from('.card',{
    y: 400,
    duration: 3,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger:'#menu',
        start: "top 50%",
        markers: false,
        scrub: false,
    }
});

gsap.from('.slide-one',{
    xPercent: -200,
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#order-one",
        markers: false,
        scrub: false,
    }
});