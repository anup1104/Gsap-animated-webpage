var tl = gsap.timeline()


tl.from("#nav h3",{
    y:-70,
    duration:1,
    opacity:0,
    // delay:1
    stagger:0.2
})
tl.from("#img3",{
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:45 
})
tl.from("#img2",{
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:45 
})
tl.from("#img1",{
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:45 
})

tl.from("#page h1",{
    x:-100,
    duration:0.7,
    opacity:0,
    stagger:0.2
})
tl.from("#footer h4",{
    y:10,
    duration:0.7,
    opacity:0,
    stagger:0.2

})
